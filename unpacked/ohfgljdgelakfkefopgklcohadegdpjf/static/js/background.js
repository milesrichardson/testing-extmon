(() => {
  "use strict";
  var e = {
      8247: (e, n, t) => {
        for (
          var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            o = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
            i = 0;
          i < r.length;
          i++
        )
          o[r.charCodeAt(i)] = i;
      },
      8242: (e, n, t) => {
        t.d(n, { Q: () => a, U: () => p });
        var r = t(5059),
          o = t(9245),
          i = t(4215),
          d = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        function p() {
          return d(this, void 0, void 0, function* () {
            const e = yield (0, o.Px)(o.dR.JOB_RESULT_TAB);
            e && (i.T_(e), yield (0, o.dv)(o.dR.JOB_RESULT_TAB));
          });
        }
        function a(e, n) {
          const t = {
            success: { title: chrome.i18n.getMessage("fileIsReady"), message: chrome.i18n.getMessage("downloadCta") },
            error: { title: chrome.i18n.getMessage("processingFailedTitle"), message: chrome.i18n.getMessage("processingFailedMessage") }
          };
          chrome.windows.get(n.windowId, (i) =>
            d(this, void 0, void 0, function* () {
              if (i.focused && n.highlighted) return;
              yield (0, o.q8)({ [o.dR.JOB_RESULT_TAB]: n });
              const d = e ? t.success : t.error;
              r.create(r.Notifications.ID_JOB_RESULT, d);
            })
          );
        }
      },
      9248: (e, n, t) => {
        t.r(n),
          t.d(n, {
            DEV_LOGGER: () => u,
            INTERNAL_SEND_ANALYTICS_EVENT: () => l,
            MESSAGE_TOOLS_CONNECT_TOOL: () => v,
            handleExternalMessage: () => m,
            handleMessage: () => L
          });
        var r = t(4232),
          o = t(5888),
          i = t(4215),
          d = t(2113),
          p = t(8242),
          a = t(7301),
          f = t(8562),
          s = t(8642),
          c = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        const l = "send-analytics-event",
          u = "dev-logger",
          v = "open-connected-tool";
        function L(e, n, t) {
          return c(this, void 0, void 0, function* () {
            switch (
              ((e.request === u && e.request === l) ||
                (0, a.ag)(`%cRequest: ${e.request}`, "background: #832B00; color: #F7E5DA", { message: e, sender: n }),
              e.request)
            ) {
              case u:
                (0, a.ag)("message-log:", "background: #ffe042; color: #e71989", ...e.event);
                break;
              case "open-tab":
                i.bA(`${e.url}?${f.bk}`);
                break;
              case "open-options-page":
                chrome.runtime.openOptionsPage();
                break;
              case "open-extension-settings-page":
                chrome.tabs.create({
                  windowId: n.tab.windowId,
                  index: n.tab.index + 1,
                  url: `chrome://extensions/?id=${chrome.runtime.id}`,
                  openerTabId: n.tab.id
                });
                break;
              case l:
                try {
                  yield r.j(e.event);
                } catch (e) {
                  (0, a.ag)("analytics error", e);
                }
                t(!0);
                break;
              case "check-file-scheme":
                chrome.extension.isAllowedFileSchemeAccess((e) => t(e));
                break;
              case v:
                const { toolKey: o, fileName: p, fileToken: c } = e.payload;
                if (o === s.jC) {
                  const e = d.B8(o, p, c, f.KX);
                  i.bA(e);
                } else {
                  const e = "pdf-to-jpg" === o ? "extract" : o,
                    n = d.B8(e, p, c, f.KX);
                  i.bA(n);
                }
            }
            return !0;
          });
        }
        function m(e, n, t) {
          switch (((0, a.ag)("External message: ", e), e.request)) {
            case "version":
              t({ type: "success", version: chrome.runtime.getManifest().version });
              break;
            case "favorites":
              o.I(e);
              break;
            case "result-notification":
              p.Q(!e.failed, n.tab);
          }
        }
      },
      5059: (e, n, t) => {
        t.r(n), t.d(n, { Notifications: () => r, create: () => l, handleNotifications: () => u });
        var r,
          o = t(4232),
          i = t(3495),
          d = t(8242),
          p = t(7301),
          a = t(5517),
          f = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          },
          s = function (e, n) {
            var t = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && n.indexOf(r) < 0 && (t[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var o = 0;
              for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (t[r[o]] = e[r[o]]);
            }
            return t;
          };
        !(function (e) {
          (e.ID_JOB_RESULT = "jobResult"), (e.ID_RESULT = "result");
        })(r || (r = {}));
        const c = {
          iconUrl: chrome.runtime.getURL("images/smallpdf_48.png"),
          title: "Smallpdf",
          type: "basic",
          message: "",
          priority: 2,
          requireInteraction: !0
        };
        function l(e, n) {
          const { group: t } = n,
            r = s(n, ["group"]);
          o.j(i.Jl(e)), chrome.notifications.create(e, Object.assign(Object.assign({}, c), r));
        }
        function u(e, n) {
          return f(this, void 0, void 0, function* () {
            o.j(i.zL(e));
            const [n, t] = e.split("/", 2);
            switch (((0, p.cM)(`[Notification] Triggered: ${n}`, t), n)) {
              case r.ID_JOB_RESULT:
                d.U();
                break;
              case r.ID_RESULT:
                (0, a.pl)(!1, a.P6.NOTIFICATION);
            }
            chrome.notifications.clear(e);
          });
        }
      },
      3495: (e, n, t) => {
        t.d(n, {
          HN: () => u,
          Jl: () => s,
          L_: () => v,
          MW: () => m,
          R1: () => L,
          U_: () => p,
          WO: () => a,
          ZJ: () => l,
          l2: () => d,
          u$: () => f,
          wq: () => i,
          zL: () => c,
          zZ: () => o
        });
        var r = t(5517);
        const o = () => ({ event: "chrome.extension.installed" }),
          i = () => ({ event: "chrome.extension.chrome_update" }),
          d = () => ({ event: "chrome.extension.shared_module_update" }),
          p = (e, n, t) => ({ event: "chrome.background.file_upload_failed", customString1: e, customString2: n, customInt1: t }),
          a = (e, n, t) => ({ event: "chrome.background.upload_started", customString1: e, customString2: n, customInt1: t }),
          f = (e, n, t, r) => ({
            event: "chrome.background.upload_finished",
            customString1: e,
            customString2: n,
            customInt1: t,
            customInt2: r
          }),
          s = (e) => ({ event: "chrome.notification.seen", customString1: e }),
          c = (e) => ({ event: "chrome.notification.cta_clicked", customString1: e }),
          l = (e, n = r.P6.UNKNOWN, t = !1) => ({
            event: "chrome.action.result_downloaded",
            customBoolean1: t,
            customString1: n,
            customString2: e
          }),
          u = (e, n, t = !1) => ({ event: "chrome.action.processing_started", customString1: e, customString2: n, customBoolean1: t }),
          v = (e, n, t) => ({ event: "chrome.action.processing_done", customString1: e, customString2: n, customString3: t }),
          L = (e, n) => ({ event: "chrome.action.processing_failed", customString1: e, customString2: n }),
          m = (e) => ({ event: "chrome.system.unhandled_error_seen", customString1: e });
      },
      2113: (e, n, t) => {
        t.d(n, { B8: () => i });
        var r = t(8642),
          o = t(8562);
        t(385);
        function i(e, n, t, i) {
          const d = ["a=tool", "source=chrome-extension", `tool=${e}`, `file_name=${n}`, `file_token=${t}`];
          return e === r.jC ? `${o.Kf}/handle-tool-picker?${i}&${d.join("&")}` : `${o.Kf}/redirect?${i}#${d.join("&")}`;
        }
      },
      4436: (e, n, t) => {
        t.d(n, {
          AQ: () => v,
          L4: () => _,
          PT: () => r,
          Q7: () => u,
          RV: () => w,
          Rp: () => C,
          So: () => i,
          UQ: () => L,
          cY: () => h,
          dH: () => E,
          gC: () => p,
          j2: () => l,
          jw: () => a,
          px: () => s,
          sr: () => f,
          t1: () => g,
          tl: () => d,
          wT: () => o,
          xc: () => c,
          yO: () => m
        });
        const r = "#FF0000",
          o = "#F23030",
          i = "#FF9F19",
          d = "#EBC50C",
          p = "#74D941",
          a = "#49C8F2",
          f = "#7961F2",
          s = "#9966FF",
          c = "#B366FF",
          l = "#FF59AC",
          u = "#FF5975",
          v = "#E667E6",
          L = "#0FC0C5",
          m = "#0FB2B8",
          g = "#FF4c23",
          h = "#E6D739",
          w = "#FF7919",
          E = "#00CC44",
          _ = "#3D99F5",
          C = "#0FB2B8";
      },
      7237: (e, n, t) => {
        var r;
        t.d(n, { zc: () => r }),
          (function (e) {
            (e.APPLICATION_JSON = "application/json"),
              (e.APPLICATION_PDF = "application/pdf"),
              (e.APPLICATION_ZIP = "application/zip"),
              (e.APPLICATION_DOC = "application/msword"),
              (e.APPLICATION_DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"),
              (e.APPLICATION_XLS = "application/vnd.ms-excel"),
              (e.APPLICATION_XLSX = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),
              (e.APPLICATION_PPT = "application/vnd.ms-powerpoint"),
              (e.APPLICATION_PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation"),
              (e.IMAGE_JPEG = "image/jpeg"),
              (e.IMAGE_GIF = "image/gif"),
              (e.IMAGE_BMP = "image/bmp"),
              (e.IMAGE_PNG = "image/png"),
              (e.IMAGE_TIFF = "image/tiff"),
              (e.IMAGE_SVG = "image/svg+xml"),
              (e.UNKNOWN = "application/octet-stream");
          })(r || (r = {}));
        r.APPLICATION_JSON,
          r.APPLICATION_PDF,
          r.APPLICATION_ZIP,
          r.APPLICATION_DOC,
          r.APPLICATION_DOCX,
          r.APPLICATION_XLS,
          r.APPLICATION_XLSX,
          r.APPLICATION_PPT,
          r.APPLICATION_PPTX,
          r.IMAGE_JPEG,
          r.IMAGE_GIF,
          r.IMAGE_BMP,
          r.IMAGE_PNG,
          r.IMAGE_TIFF,
          r.IMAGE_SVG;
      },
      265: (e, n, t) => {
        function r(e) {
          const n = (e && (e.match(/(\.[^\.]+$)/) || [])[1]) || "";
          return (
            (function () {
              if (!crypto || !crypto.getRandomValues)
                return (function () {
                  let e = "";
                  for (let n = 0; n < 8; n += 1) e += ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
                  return e.toLowerCase();
                })();
              const e = new Uint8Array(16);
              return (
                crypto.getRandomValues(e),
                [].slice
                  .call(e)
                  .map((e) => {
                    const n = e.toString(16);
                    return n.length > 1 ? n : `0${n}`;
                  })
                  .join("")
              );
            })() + n
          );
        }
        t.d(n, { Z: () => r });
      },
      9245: (e, n, t) => {
        t.d(n, { Px: () => p, dR: () => r, dv: () => f, gX: () => c, ge: () => o, q8: () => a, wo: () => s });
        var r,
          o,
          i = t(7301),
          d = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        function p(e, n) {
          return d(this, void 0, void 0, function* () {
            try {
              const t = yield chrome.storage.local.get(e);
              return "string" == typeof e ? t[e] || n : t;
            } catch (t) {
              return (0, i.cM)(chrome.runtime.lastError, t), Array.isArray(e) ? {} : n;
            }
          });
        }
        function a(e) {
          return d(this, void 0, void 0, function* () {
            try {
              yield chrome.storage.local.set(e);
            } catch (e) {
              throw ((0, i.cM)(chrome.runtime.lastError), e);
            }
          });
        }
        function f(e) {
          return d(this, void 0, void 0, function* () {
            try {
              yield chrome.storage.local.remove(e);
            } catch (e) {
              throw ((0, i.cM)(chrome.runtime.lastError), e);
            }
          });
        }
        function s(e, n) {
          return d(this, void 0, void 0, function* () {
            try {
              const t = yield chrome.storage.sync.get(e);
              if (Array.isArray(e)) return t;
              const r = t[e];
              return void 0 === r ? n : r;
            } catch (t) {
              return (0, i.cM)(chrome.runtime.lastError, t), Array.isArray(e) ? {} : n;
            }
          });
        }
        function c(e) {
          return d(this, void 0, void 0, function* () {
            try {
              yield chrome.storage.sync.set(e);
            } catch (e) {
              throw ((0, i.cM)(chrome.runtime.lastError), e);
            }
          });
        }
        !(function (e) {
          (e.IS_PDIUM_OPEN_ON_LOAD = "smallpdf.pdfium.isOpen"),
            (e.MIGRATIONS_SCHEMA_VERSION = "smallpdf.msv"),
            (e.JOB_RESULT_TAB = "smallpdf.jobResult.tab"),
            (e.USER_FAVORITES = "smallpdf.user.favorites"),
            (e.LOCAL_TOKEN = "smallpdf.user.localToken"),
            (e.USER_COUNTRY_GEO_IP = "smallpdf.user.countryGeoIP"),
            (e.USER_PROFILE = "smallpdf.user.profile"),
            (e.USER_ACTIVE_PRO = "smallpdf.user.ap"),
            (e.USER_RT = "smallpdf.user.rt"),
            (e.ACCESS_TOKEN = "KEY_AUTH_AT"),
            (e.REFRESH_TOKEN = "KEY_AUTH_RT"),
            (e.TRACKING_EVENTS = "STORAGE_KEY_TRACKING_EVENTS_QUEUE"),
            (e.USER_DATA_SYNCED = "STORAGE_KEY_USER_DATA_SYNCED"),
            (e.USER_DATA_LAST_SYNC = "smallpdf.dls"),
            (e.FILE_HANDLE = "STORAGE_KEY_FILE_HANDLE"),
            (e.FILE_HANDLE_RESULT = "STORAGE_KEY_FILE_HANDLE_RESULT"),
            (e.TASK = "STORAGE_KEY_TASK"),
            (e.SYSTEM_OS = "STORAGE_KEY_SYSTEM_OS"),
            (e.SYSTEM_LOCALE = "STORAGE_KEY_SYSTEM_LOCALE"),
            (e.INSTALLATION_DATE = "STORAGE_KEY_INSTALLATION_DATE"),
            (e.PROFILE = "STORAGE_KEY_PROFILE"),
            (e.AUTH_CODE_VERIFIER = "STORAGE_KEY_AUTH_CODE_VERIFIER"),
            (e.AUTH_STATE_CODE = "STORAGE_KEY_AUTH_STATE_CODE"),
            (e.AUTH_PROVIDER = "STORAGE_KEY_AUTH_PROVIDER"),
            (e.FAILED_LOGIN_ATTEMPTS = "smallpdf.fla"),
            (e.THANKS_PAGE_LOGGED_ONCE = "smallpdf.thanks_event"),
            (e.SERVICE_WORKER_LOGS = "smallpdf.service_worker_logs");
        })(r || (r = {})),
          (function (e) {
            (e.PreferenceGoogleSERPEnabled = "smallpdf.options.googleSerpEnabled"),
              (e.PreferenceAutoDownloadEnabled = "STORAGE_KEY_OPTIONS_AUTO_DOWNLOAD"),
              (e.Experiments = "STORAGE_KEY_EXPERIMENTS"),
              (e.TasksCount = "STORAGE_KEY_TASKS_COUNT"),
              (e.LastTaskTime = "STORAGE_KEY_LAST_TASK_TIME"),
              (e.FreeTasksResetTime = "smallpdf.ftrt"),
              (e.MIGRATIONS_SCHEMA_VERSION = "smallpdf.msv");
          })(o || (o = {}));
      },
      4215: (e, n, t) => {
        function r(e, n = !0) {
          const t = { url: e, active: n };
          chrome.tabs.create(t, (e) => {
            n && chrome.windows.update(e.windowId, { focused: !0 });
          });
        }
        function o(e) {
          return e.id && chrome.tabs.update(e.id, { highlighted: !0 }), chrome.windows.update(e.windowId, { focused: !0 });
        }
        t.d(n, { T_: () => o, bA: () => r });
      },
      8642: (e, n, t) => {
        t.d(n, { jC: () => Z });
        var r = t(4436),
          o = t(7237),
          i = t(1899),
          d = t(7861),
          p = t(5802),
          a = t(1215),
          f = t(1432),
          s = t(471),
          c = t(9269),
          l = t(5519),
          u = t(5487),
          v = t(1593),
          L = t(8405),
          m = t(3850),
          g = t(387),
          h = t(6232),
          w = t(4661),
          E = t(6070),
          _ = t(7245),
          C = t(8786),
          x = t(6071),
          A = t(1937),
          T = t(3302),
          y = t(5971),
          I = t(2536),
          P = t(7430),
          R = t(7071),
          O = t(8345),
          S = t(9619),
          N = t(2732),
          M = t(7634),
          F = t(6628),
          b = t(3810),
          k = t(589),
          D = t(6653),
          j = t(7803),
          H = t(215),
          V = t(8562),
          U = t(501);
        const Z = "handle-tool-picker";
        r.wT,
          V.Kf,
          U.V.compress,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.t1,
          V.Kf,
          U.V.converter2,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_DOC,
          o.zc.APPLICATION_DOCX,
          o.zc.APPLICATION_XLS,
          o.zc.APPLICATION_XLSX,
          o.zc.APPLICATION_PPT,
          o.zc.APPLICATION_PPTX,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_DOCX,
          o.zc.APPLICATION_XLSX,
          o.zc.APPLICATION_PPTX,
          r.RV,
          V.Kf,
          U.V["pdf-to-ppt"],
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PPTX,
          r.So,
          V.Kf,
          U.V.ppt,
          o.zc.APPLICATION_PPT,
          o.zc.APPLICATION_PPTX,
          o.zc.APPLICATION_PDF,
          r.tl,
          V.Kf,
          U.V.jpg,
          o.zc.IMAGE_JPEG,
          o.zc.IMAGE_GIF,
          o.zc.IMAGE_BMP,
          o.zc.IMAGE_PNG,
          o.zc.IMAGE_TIFF,
          o.zc.APPLICATION_PDF,
          r.cY,
          V.Kf,
          U.V["pdf-to-jpg"],
          o.zc.APPLICATION_PDF,
          o.zc.IMAGE_JPEG,
          r.gC,
          V.Kf,
          U.V.excel,
          o.zc.APPLICATION_XLS,
          o.zc.APPLICATION_XLSX,
          o.zc.APPLICATION_PDF,
          r.dH,
          V.Kf,
          U.V["pdf-to-excel"],
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_XLSX,
          r.yO,
          V.Kf,
          U.V.delete,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.UQ,
          V.Kf,
          U.V.edit,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.jw,
          V.Kf,
          U.V.word,
          o.zc.APPLICATION_DOC,
          o.zc.APPLICATION_DOCX,
          o.zc.APPLICATION_PDF,
          r.L4,
          V.Kf,
          U.V["pdf-to-word"],
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_DOCX,
          r.sr,
          V.Kf,
          U.V.merge,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.px,
          V.Kf,
          U.V.split,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.xc,
          V.Kf,
          U.V.rotate,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.AQ,
          V.Kf,
          U.V.sign,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.j2,
          V.Kf,
          U.V.unlock,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.Q7,
          V.Kf,
          U.V.protect,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.PT,
          V.Kf,
          U.V.reader.en,
          U.V.reader,
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF,
          r.Rp,
          V.Kf,
          U.V["number-pages"].en,
          U.V["number-pages"],
          o.zc.APPLICATION_PDF,
          o.zc.APPLICATION_PDF;
      },
      501: (e, n, t) => {
        t.d(n, { V: () => r });
        const r = {
          compress: {
            pt: [
              "comprimir pdf",
              "compactar pdf",
              "reduzir pdf",
              "diminuir pdf",
              "reduzir tamanho pdf",
              "diminuir tamanho pdf",
              "pdf compressor",
              "compressor de pdf",
              "compressor pdf",
              "comprimir arquivo pdf"
            ],
            es: [
              "comprimir pdf",
              "reducir tamaño pdf",
              "reducir tamaño de pdf",
              "reducir pdf",
              "comprimir archivos",
              "comprimir archivos pdf",
              "comprimir pdf online",
              "compresor de pdf",
              "como comprimir un archivo pdf",
              "comprimir pdf gratis"
            ],
            fr: [
              "compresser pdf",
              "réduire taille pdf",
              "compression pdf",
              "reduire pdf",
              "reduire taille pdf",
              "compresseur pdf",
              "compresser un pdf",
              "compresser un fichier pdf",
              "réduire la taille d'un pdf",
              "compresser un fichier"
            ],
            de: [
              "pdf verkleinern",
              "pdf komprimieren",
              "pdf datei verkleinern",
              "pdf kleiner machen",
              "pdf komprimieren online",
              "pdf verkleinern mac",
              "pdf größe reduzieren",
              "pdf komprimieren mac",
              "pdf verkleinern kostenlos",
              "dateien komprimieren"
            ],
            it: [
              "comprimi pdf",
              "comprimere pdf",
              "riduci pdf",
              "ridurre dimensioni pdf",
              "compressione pdf",
              "ridurre pdf",
              "comprimere pdf online",
              "comprimere file pdf",
              "riduzione pdf",
              "riduci dimensioni pdf"
            ],
            ru: [
              "сжать пдф",
              "сжать pdf",
              "сжать пдф онлайн",
              "уменьшить размер пдф",
              "сжать пдф файл",
              "уменьшить пдф",
              "уменьшить размер pdf",
              "сжатие пдф",
              "сжать файл пдф",
              "сжать файл"
            ],
            en: [
              "compress pdf",
              "pdf compress",
              "pdf compressor",
              "file compressor",
              "reduce pdf size",
              "how to compress a pdf",
              "reduce pdf file size",
              "compress",
              "how to reduce pdf file size",
              "pdf compress",
              "shrink pdf"
            ]
          },
          converter2: {
            pt: [
              "converter pdf",
              "conversor pdf",
              "converter para pdf",
              "converter em pdf",
              "transformar em pdf",
              "conversor de pdf",
              "pdf converter",
              "conversor para pdf",
              "transformar arquivo em pdf",
              "converter arquivo para pdf"
            ],
            es: [
              "convertir a pdf",
              "convertidor pdf",
              "convertidor a pdf",
              "convertir pdf",
              "pasar a pdf",
              "convertidor de pdf",
              "convertir en pdf",
              "transformar a pdf",
              "convertir archivos a pdf",
              "conversor a pdf"
            ],
            fr: [
              "convertisseur pdf",
              "convertir en pdf",
              "convertir pdf",
              "conversion pdf",
              "transformer en pdf",
              "pdf convertisseur",
              "convertir fichier en pdf",
              "convertisseur pdf gratuit",
              "pdf en ligne",
              "convertir un fichier en pdf"
            ],
            de: [
              "pdf umwandeln",
              "pdf konverter",
              "in pdf umwandeln",
              "datei in pdf umwandeln",
              "pdf konvertieren",
              "pdf umwandler",
              "pdf converter kostenlos",
              "umwandeln in pdf",
              "dateien in pdf umwandeln",
              "dokument in pdf umwandeln"
            ],
            it: [
              "convertitore",
              "convertitore pdf",
              "converti in pdf",
              "trasforma in pdf",
              "converti pdf",
              "convertire in pdf",
              "convertitore in pdf",
              "convertire file in pdf",
              "convertire pdf",
              "trasformare file in pdf"
            ],
            ru: [
              "конвертер пдф",
              "пдф конвертер",
              "конвертировать в пдф",
              "конвертер в пдф",
              "онлайн конвертер",
              "преобразовать в пдф",
              "конвертация в пдф",
              "перевод в пдф",
              "конвертер pdf",
              "конвектор пдф"
            ],
            en: [
              "pdf converter",
              "convert to pdf",
              "file converter",
              "free pdf converter",
              "pdf converter free",
              "convert file to pdf",
              "convert to pdf free",
              "online pdf converter",
              "convert pdf",
              "pdf file converter"
            ]
          },
          ppt: {
            pt: [
              "converter powerpoint em pdf",
              "converter ppt em pdf",
              "powerpoint para pdf",
              "transformar powerpoint em pdf",
              "ppt para pdf",
              "pptx para pdf",
              "converter pptx em pdf",
              "converter powerpoint para pdf",
              "transformar ppt em pdf",
              "power point para pdf"
            ],
            es: [
              "convertir powerpoint a pdf",
              "convertir ppt a pdf",
              "powerpoint a pdf",
              "ppt a pdf",
              "convertidor de powerpoint a pdf",
              "convertir de powerpoint a pdf",
              "de powerpoint a pdf",
              "de ppt a pdf",
              "power point a pdf",
              "convertir de ppt a pdf"
            ],
            fr: [
              "convertir ppt en pdf",
              "convertir powerpoint en pdf",
              "powerpoint en pdf",
              "convertisseur ppt en pdf",
              "ppt en pdf",
              "convertir pptx en pdf",
              "convertisseur powerpoint pdf",
              "pptx en pdf",
              "conversion ppt en pdf",
              "convertisseur powerpoint en pdf"
            ],
            de: [
              "powerpoint in pdf",
              "powerpoint in pdf umwandeln",
              "powerpoint zu pdf",
              "pptx in pdf",
              "ppt in pdf",
              "ppt zu pdf",
              "power point in pdf",
              "ppp in pdf",
              "ppt in pdf umwandeln",
              "pp in pdf"
            ],
            it: [
              "da ppt a pdf",
              "convertire ppt in pdf",
              "da powerpoint a pdf",
              "convertire powerpoint in pdf",
              "convertitore powerpoint pdf",
              "convertitore ppt in pdf",
              "trasforma ppt in pdf",
              "trasformare powerpoint in pdf",
              "converti ppt in pdf",
              "trasforma powerpoint in pdf"
            ],
            ru: [
              "pptx в pdf",
              "конвертировать презентацию в пдф",
              "из pptx в pdf",
              "ппт в пдф",
              "из ппт в пдф",
              "powerpoint в pdf",
              "ppt в pdf",
              "презентацию в пдф",
              "открыть ppt онлайн",
              "из презентации в пдф"
            ],
            en: [
              "ppt to pdf",
              "powerpoint to pdf",
              "convert ppt to pdf",
              "pptx to pdf",
              "convert powerpoint to pdf",
              "ppt to pdf converter",
              "powerpoint to pdf converter",
              "how to convert powerpoint to pdf",
              "how to convert ppt to pdf",
              "power point to pdf"
            ]
          },
          "pdf-to-ppt": {
            pt: [
              "converter pdf em powerpoint",
              "converter pdf em ppt",
              "pdf para powerpoint",
              "transformar pdf em powerpoint",
              "pdf para ppt",
              "transformar pdf em ppt",
              "converter pdf para powerpoint",
              "converter pdf para ppt",
              "pdf em powerpoint",
              "pdf em ppt"
            ],
            es: [
              "convertir pdf a powerpoint",
              "convertir pdf a ppt",
              "pdf a powerpoint",
              "pdf a ppt",
              "convertidor de pdf a powerpoint",
              "convertir de pdf a powerpoint",
              "convertidor de pdf a ppt",
              "convertir de pdf a ppt",
              "de pdf a powerpoint",
              "de pdf a ppt"
            ],
            fr: [
              "convertir pdf en ppt",
              "convertir pdf en powerpoint",
              "pdf en ppt",
              "pdf en powerpoint",
              "transformer pdf en ppt",
              "convertir pdf en powerpoint gratuit",
              "convertisseur pdf en ppt",
              "convertir pdf en ppt gratuit",
              "conversion pdf en ppt",
              "convertisseur pdf ppt"
            ],
            de: [
              "pdf in powerpoint umwandeln",
              "pdf in ppt umwandeln",
              "pdf in ppt",
              "pdf in powerpoint",
              "pdf zu powerpoint",
              "pdf zu ppt",
              "pdf in pptx",
              "pdf in pptx umwandeln",
              "pdf umwandeln in powerpoint",
              "pdf in power point"
            ],
            it: [
              "da pdf a ppt",
              "converti pdf in ppt",
              "convertire pdf in ppt",
              "da pdf a powerpoint",
              "convertire pdf in powerpoint",
              "convertitore pdf ppt",
              "trasforma pdf in ppt",
              "convertitore pdf powerpoint",
              "trasformare pdf in ppt",
              "converti pdf in powerpoint"
            ],
            ru: [
              "из пдф в ппт",
              "из пдф в повер поинт",
              "пдф в ппт",
              "конвертировать пдф в ппт",
              "pdf в ppt",
              "из pdf в ppt",
              "пдф в повер поинт",
              "pdf в pptx",
              "из пдф в пптх",
              "конвертировать pdf в ppt"
            ],
            en: [
              "pdf to ppt",
              "pdf to powerpoint",
              "convert pdf to powerpoint",
              "convert pdf to ppt",
              "pdf to powerpoint converter",
              "pdf to ppt converter",
              "how to convert pdf to powerpoint",
              "pdf to pptx",
              "how to convert pdf to ppt",
              "convert pdf to powerpoint free"
            ]
          },
          jpg: {
            pt: [
              "converter jpg em pdf",
              "jpg para pdf",
              "transformar jpg em pdf",
              "converter imagem em pdf",
              "transformar foto em pdf",
              "jpg em pdf",
              "transformar imagem em pdf",
              "converter foto em pdf",
              "converter jpg para pdf",
              "imagem para pdf"
            ],
            es: [
              "jpg a pdf",
              "convertir jpg a pdf",
              "convertir imagen a pdf",
              "de jpg a pdf",
              "imagen a pdf",
              "convertir de jpg a pdf",
              "convertidor de jpg a pdf",
              "convertir pdf a jpg",
              "pasar de jpg a pdf",
              "convertidor jpg a pdf"
            ],
            fr: [
              "jpeg en pdf",
              "convertir jpg en pdf",
              "convertir jpeg en pdf",
              "convertir image en pdf",
              "jpg en pdf",
              "convertir photo en pdf",
              "convertisseur jpg en pdf",
              "image en pdf",
              "transformer jpeg en pdf",
              "photo en pdf"
            ],
            de: [
              "jpg in pdf",
              "jpg in pdf umwandeln",
              "jpeg in pdf",
              "bild in pdf umwandeln",
              "jpg zu pdf",
              "bilder in pdf umwandeln",
              "foto in pdf umwandeln",
              "jpeg in pdf umwandeln",
              "jpeg to pdf",
              "bild zu pdf",
              "bild in pdf",
              "bild als pdf",
              "jpg umwandeln in pdf",
              "jpeg umwandeln in pdf",
              "jpg als pdf",
              "jpeg als pdf"
            ],
            it: [
              "da jpg a pdf",
              "convertire jpg in pdf",
              "trasforma jpg in pdf",
              "converti jpg in pdf",
              "crea pdf",
              "convertitore jpg pdf",
              "trasformare foto in pdf",
              "trasforma in pdf",
              "trasformare jpg in pdf",
              "convertire foto in pdf"
            ],
            ru: [
              "фото в пдф",
              "из jpg в pdf",
              "конвертировать в пдф",
              "джипег в пдф",
              "из джипег в пдф",
              "перевести в пдф",
              "перевод в пдф",
              "конвертировать jpg в pdf",
              "jpg в pdf",
              "из фото в пдф"
            ],
            en: [
              "jpg to pdf",
              "convert jpg to pdf",
              "jpeg to pdf",
              "image to pdf",
              "how to convert jpg to pdf",
              "jpg to pdf converter",
              "convert image to pdf",
              "picture to pdf",
              "convert to jpg",
              "photo to pdf"
            ]
          },
          "pdf-to-jpg": {
            pt: [
              "converter pdf em jpg",
              "pdf para jpg",
              "transformar pdf em jpg",
              "converter pdf para jpg",
              "pdf em jpg",
              "converter pdf em imagem",
              "conversor pdf para jpg",
              "conversor de pdf para jpg",
              "converter pdf em jpeg",
              "pdf para jpeg"
            ],
            es: [
              "convertir pdf a jpg",
              "pdf a jpg",
              "de pdf a jpg",
              "convertir de pdf a jpg",
              "convertidor de pdf a jpg",
              "pasar de pdf a jpg",
              "convertir pdf a imagen",
              "pdf a imagen",
              "pasar pdf a jpg",
              "convertidor pdf a jpg"
            ],
            fr: [
              "convertir pdf en jpg",
              "pdf en jpeg",
              "convertir pdf en jpeg",
              "pdf en jpg",
              "transformer pdf en jpeg",
              "convertir pdf en image",
              "convertisseur pdf jpeg",
              "convertisseur pdf en jpg",
              "pdf jpeg",
              "transformer un pdf en jpeg"
            ],
            de: [
              "pdf in jpg umwandeln",
              "pdf in jpg",
              "pdf zu jpg",
              "pdf in bild umwandeln",
              "pdf in jpeg",
              "pdf umwandeln in jpg",
              "pdf als jpg",
              "pdf jpg",
              "pdf als bild speichern",
              "pdf zu jpeg"
            ],
            it: [
              "da pdf a jpg",
              "convertire pdf in jpg",
              "converti pdf in jpg",
              "trasforma pdf in jpg",
              "convertitore pdf jpg",
              "trasformare pdf in jpg",
              "da pdf a jpeg",
              "convertitore pdf in jpg",
              "da pdf a jpg online",
              "converti da pdf a jpg"
            ],
            ru: [
              "пдф в джипег",
              "из пдф в джипег",
              "конвертировать пдф в джипег",
              "pdf в jpg",
              "из pdf в jpg",
              "перевести пдф в джипег",
              "пдф в jpg",
              "конвертировать пдф в jpg",
              "из пдф в jpg",
              "конвертер пдф в джипег"
            ],
            en: [
              "pdf to jpg",
              "convert pdf to jpg",
              "pdf to jpeg",
              "pdf to jpg converter",
              "how to convert pdf to jpg",
              "pdf to image",
              "convert pdf to jpeg",
              "convert pdf to image",
              "save pdf as jpeg",
              "change pdf to jpg"
            ]
          },
          edit: {
            pt: [
              "editar pdf",
              "editor de pdf",
              "editar pdf online",
              "como editar pdf",
              "editor pdf",
              "editor de pdf online",
              "editar pdf gratis",
              "editor pdf online",
              "editar pdf online gratis",
              "editor de pdf gratuito"
            ],
            es: [
              "editar pdf",
              "editor de pdf",
              "editor pdf",
              "modificar pdf",
              "editar pdf online",
              "como editar un pdf",
              "editar pdf en linea",
              "editar pdf gratis",
              "editor pdf online",
              "modificar pdf online"
            ],
            fr: [
              "modifier pdf",
              "modifier pdf en ligne",
              "modifier un pdf",
              "comment modifier un pdf",
              "modifier pdf gratuit",
              "modifier un pdf gratuit",
              "modification pdf",
              "modifier un pdf en ligne",
              "ecrire sur un pdf",
              "modifier pdf en ligne gratuit"
            ],
            de: [
              "pdf bearbeiten",
              "pdf bearbeiten kostenlos",
              "pdf online bearbeiten",
              "pdf editor",
              "pdf datei bearbeiten",
              "pdf bearbeiten online",
              "pdf ausfüllen",
              "in pdf schreiben",
              "pdf text bearbeiten kostenlos",
              "pdf dateien bearbeiten",
              "pdf datei bearbeiten",
              "pdf schwärzen",
              "pdf kostenlos bearbeiten",
              "pdf dokument bearbeiten"
            ],
            it: [
              "modifica pdf",
              "modificare pdf",
              "modifica pdf online",
              "modificare pdf online",
              "come modificare un pdf",
              "modifica pdf online gratis",
              "scrivere su pdf",
              "modificare pdf gratis",
              "modifica pdf gratis",
              "modificare un pdf"
            ],
            ru: [
              "редактировать пдф",
              "редактор пдф",
              "редактировать пдф онлайн",
              "pdf редактор",
              "редактировать pdf",
              "пдф редактор",
              "редактор pdf",
              "редактор пдф онлайн",
              "редактирование pdf",
              "пдф онлайн"
            ],
            en: [
              "pdf editor",
              "free pdf editor",
              "how to edit a pdf",
              "edit pdf",
              "pdf editor free",
              "edit pdf online",
              "online pdf editor",
              "pdf editor online",
              "how to edit pdf",
              "edit pdf online free"
            ]
          },
          rotate: {
            pt: [
              "girar pdf",
              "rodar pdf",
              "virar pdf",
              "girar pdf online",
              "rotacionar pdf",
              "como girar pdf",
              "inverter pdf",
              "girar arquivo pdf",
              "girar pagina pdf",
              "como girar um pdf"
            ],
            es: [
              "girar pdf",
              "rotar pdf",
              "voltear pdf",
              "como girar un pdf",
              "rotar pdf online",
              "girar pdf online",
              "girar un pdf",
              "girar paginas pdf",
              "rotar paginas pdf",
              "girar hojas de pdf"
            ],
            fr: [
              "rotation pdf",
              "pivoter pdf",
              "retourner pdf",
              "tourner pdf",
              "retourner un pdf",
              "tourner un pdf",
              "faire pivoter un pdf",
              "pdf rotation",
              "pivoter un pdf",
              "rotation pdf en ligne"
            ],
            de: [
              "pdf drehen",
              "pdf drehen und speichern",
              "pdf datei drehen",
              "pdf seiten drehen",
              "pdf drehen online",
              "pdf seite drehen",
              "pdf dokument drehen",
              "pdf online drehen",
              "pdf einzelne seiten drehen",
              "pdf dauerhaft drehen"
            ],
            it: [
              "ruota pdf",
              "ruotare pdf",
              "ruota pdf online",
              "ruotare pdf online",
              "girare pdf",
              "ruotare un pdf",
              "gira pdf",
              "come ruotare un pdf",
              "ruota pagine pdf",
              "ruotare pagine pdf"
            ],
            ru: [
              "повернуть пдф",
              "перевернуть пдф",
              "повернуть пдф онлайн",
              "перевернуть пдф онлайн",
              "повернуть pdf",
              "перевернуть pdf",
              "перевернуть страницы в пдф",
              "повернуть страницы в пдф",
              "развернуть пдф",
              "поворот пдф"
            ],
            en: [
              "rotate pdf",
              "pdf rotate",
              "rotate pdf online",
              "flip pdf",
              "pdf rotator",
              "rotate pdf and save",
              "how to rotate pdf",
              "how to rotate a pdf",
              "rotate pdf free",
              "pdf rotater"
            ]
          },
          excel: {
            pt: [
              "converter excel em pdf",
              "excel para pdf",
              "transformar excel em pdf",
              "excel em pdf",
              "converter excel para pdf",
              "transformar pdf em excel",
              "conversor excel para pdf",
              "conversor de excel para pdf",
              "converter xlsx para pdf",
              "xlsx para pdf"
            ],
            es: [
              "convertir excel a pdf",
              "excel a pdf",
              "convertir de excel a pdf",
              "convertidor de excel a pdf",
              "de excel a pdf",
              "convertidor excel a pdf",
              "pasar de excel a pdf",
              "pasar excel a pdf",
              "convertir excel a word",
              "transformar excel a pdf"
            ],
            fr: [
              "convertir excel en pdf",
              "excel en pdf",
              "convertisseur excel pdf",
              "convertisseur excel to pdf",
              "transformer excel en pdf",
              "convertir excel en pdf en ligne",
              "convertir xls en pdf",
              "excel pdf",
              "convertir excel en pdf gratuit",
              "convertir fichier excel en pdf"
            ],
            de: [
              "excel in pdf",
              "excel in pdf umwandeln",
              "excel zu pdf",
              "excel datei in pdf umwandeln",
              "exel in pdf",
              "excel in pdf formular umwandeln",
              "xls in pdf",
              "excel tabelle in pdf umwandeln",
              "excel pdf",
              "von excel in pdf"
            ],
            it: [
              "da excel a pdf",
              "convertire excel in pdf",
              "convertitore excel pdf",
              "trasforma excel in pdf",
              "converti excel pdf",
              "trasformare excel in pdf",
              "convertitore da excel a pdf",
              "converti da excel a pdf",
              "da xls a pdf",
              "convertire file excel in pdf"
            ],
            ru: [
              "эксель в пдф",
              "из эксель в пдф",
              "эксель онлайн",
              "ексель в пдф",
              "excel в pdf",
              "конвертировать эксель в пдф",
              "из excel в pdf",
              "конвертировать ексель в пдф",
              "из ексель в пдф",
              "перевести эксель в пдф"
            ],
            en: [
              "excel to pdf",
              "convert excel to pdf",
              "excel to pdf converter",
              "xls to pdf",
              "convert xls to pdf",
              "how to convert excel to pdf",
              "convert excel to pdf free",
              "exel to pdf",
              "excel to pdf online",
              "free excel to pdf converter"
            ]
          },
          "pdf-to-excel": {
            pt: [
              "converter pdf em excel",
              "pdf para excel",
              "transformar pdf em excel",
              "converter pdf para excel",
              "pdf em excel",
              "conversor pdf para excel",
              "conversor de pdf para excel",
              "converter pdf em excel gratis",
              "transformar pdf em excel gratis",
              "converter de pdf para excel"
            ],
            es: [
              "convertir pdf a excel",
              "pdf a excel",
              "convertidor de pdf a excel",
              "convertir de pdf a excel",
              "de pdf a excel",
              "convertidor pdf a excel",
              "pasar de pdf a excel",
              "convertir pdf a excel gratis",
              "convertir pdf en excel",
              "pasar pdf a excel"
            ],
            fr: [
              "convertir pdf en excel",
              "pdf en excel",
              "convertisseur pdf excel",
              "transformer pdf en excel",
              "convertir pdf en excel gratuit",
              "convertir un pdf en excel",
              "convertisseur pdf en excel",
              "transformer un pdf en excel",
              "pdf en excel gratuit",
              "pdf excel"
            ],
            de: [
              "pdf in excel umwandeln",
              "pdf in excel",
              "pdf zu excel",
              "pdf umwandeln in excel",
              "pdf in excel konvertieren",
              "pdf excel",
              "pdf in excel umwandeln kostenlos",
              "pdf tabelle in excel",
              "pdf datei in excel umwandeln",
              "pdf in excel umwandeln online"
            ],
            it: [
              "da pdf a excel",
              "convertire pdf in excel",
              "converti pdf in excel",
              "trasforma pdf in excel",
              "convertitore pdf excel",
              "trasformare pdf in excel",
              "conversione pdf excel",
              "convertitore pdf in excel",
              "conversione pdf in excel",
              "da pdf a excel gratis"
            ],
            ru: [
              "из пдф в эксель",
              "пдф в эксель",
              "pdf в excel",
              "пдф в ексель",
              "конвертировать пдф в эксель",
              "преобразовать пдф в эксель",
              "конвертер pdf в excel",
              "конвертировать пдф в ексель",
              "из pdf в excel",
              "конвертер пдф в эксель"
            ],
            en: [
              "pdf to excel",
              "convert pdf to excel",
              "pdf to excel converter",
              "how to convert pdf to excel",
              "convert pdf to excel free",
              "export pdf to excel",
              "free pdf to excel converter",
              "pdf to excel free",
              "converting pdf to excel",
              "pdf converter to excel"
            ]
          },
          word: {
            pt: [
              "converter word em pdf",
              "word para pdf",
              "converter word para pdf",
              "transformar word em pdf",
              "word em pdf",
              "conversor de word para pdf",
              "conversor word para pdf",
              "converter de word para pdf",
              "converte word em pdf",
              "doc para pdf"
            ],
            es: [
              "convertir word a pdf",
              "word a pdf",
              "convertidor de word a pdf",
              "convertir de word a pdf",
              "de word a pdf",
              "pasar de word a pdf",
              "convertidor word a pdf",
              "pasar word a pdf",
              "convertir word a pdf gratis",
              "transformar de word a pdf"
            ],
            fr: [
              "convertir word en pdf",
              "word en pdf",
              "convertisseur word pdf",
              "convertisseur word en pdf",
              "convertir word en pdf gratuit",
              "transformer word en pdf",
              "word pdf",
              "conversion word pdf",
              "convertir word to pdf",
              "convertisseur word to pdf"
            ],
            de: [
              "word in pdf",
              "word in pdf umwandeln",
              "word zu pdf",
              "word datei in pdf umwandeln",
              "word dokument in pdf umwandeln",
              "word zu pdf konvertieren",
              "doc in pdf",
              "docx in pdf",
              "dokument in pdf umwandeln",
              "word pdf"
            ],
            it: [
              "da word a pdf",
              "convertire word in pdf",
              "convertitore word pdf",
              "trasforma word in pdf",
              "convertire da word a pdf",
              "trasformare word in pdf",
              "trasforma in pdf",
              "converti word in pdf",
              "convertitore da word a pdf",
              "trasforma pdf in word"
            ],
            ru: [
              "ворд в пдф",
              "из ворд в пдф",
              "конвертировать ворд в пдф",
              "перевести ворд в пдф",
              "из ворда в пдф",
              "конвертер ворд в пдф",
              "конвертация ворд в пдф",
              "перевод ворд в пдф",
              "преобразовать ворд в пдф",
              "word в pdf"
            ],
            en: [
              "word to pdf",
              "convert word to pdf",
              "word to pdf converter",
              "doc to pdf",
              "how to convert word to pdf",
              "convert doc to pdf",
              "doc to pdf converter",
              "word doc to pdf",
              "word to pdf converter free",
              "word document to pdf"
            ]
          },
          "pdf-to-word": {
            pt: [
              "converter pdf em word",
              "pdf para word",
              "transformar pdf em word",
              "converter pdf para word",
              "conversor de pdf para word",
              "pdf em word",
              "conversor pdf para word",
              "transformar word em pdf",
              "como converter pdf em word",
              "converter de pdf para word"
            ],
            es: [
              "convertir pdf a word",
              "pdf a word",
              "convertidor de pdf a word",
              "convertir de pdf a word",
              "de pdf a word",
              "pasar de pdf a word",
              "convertidor pdf a word",
              "pasar pdf a word",
              "transformar de pdf a word",
              "transformar pdf a word"
            ],
            fr: [
              "convertir pdf en word",
              "pdf en word",
              "convertisseur pdf word",
              "transformer pdf en word",
              "convertisseur pdf en word",
              "convertir pdf en word gratuit",
              "convertir un pdf en word",
              "conversion pdf en word",
              "conversion pdf word",
              "convertir pdf en word en ligne"
            ],
            de: [
              "pdf in word umwandeln",
              "pdf in word",
              "pdf zu word",
              "pdf zu word konvertieren",
              "pdf umwandeln in word",
              "pdf in word umwandeln online",
              "pdf in word konvertieren",
              "pdf datei in word umwandeln",
              "pdf in word umwandeln kostenfrei",
              "pdf in word umwandeln kostenlos"
            ],
            it: [
              "da pdf a word",
              "convertire pdf in word",
              "converti pdf in word",
              "trasforma pdf in word",
              "convertitore pdf word",
              "trasformare pdf in word",
              "conversione pdf in word",
              "convertitore da pdf a word",
              "convertire pdf in word gratis",
              "modifica pdf in word"
            ],
            ru: [
              "пдф в ворд",
              "из пдф в ворд",
              "конвертировать пдф в ворд",
              "перевести пдф в ворд",
              "преобразовать пдф в ворд",
              "конвертер пдф в ворд",
              "конвертация пдф в ворд",
              "перевод пдф в ворд",
              "pdf в word",
              "перевод из пдф в ворд"
            ],
            en: [
              "pdf to word",
              "convert pdf to word",
              "pdf to word converter",
              "how to convert pdf to word",
              "free pdf to word converter",
              "pdf to word doc",
              "pdf to doc",
              "convert pdf to word free",
              "how to convert a pdf to word",
              "pdf converter to word"
            ]
          },
          delete: {
            pt: [
              "excluir pagina pdf",
              "excluir pdf",
              "excluir paginas pdf",
              "remover pagina pdf",
              "excluir página pdf",
              "remover paginas pdf",
              "remover pdf",
              "eliminar paginas pdf",
              "excluir páginas pdf",
              "excluir pagina de pdf"
            ],
            es: [
              "eliminar paginas pdf",
              "eliminar hojas de pdf",
              "eliminar pdf",
              "eliminar paginas de un pdf",
              "eliminar hojas de un pdf",
              "quitar paginas pdf",
              "eliminar paginas de pdf",
              "quitar hojas de pdf",
              "eliminar hojas pdf",
              "quitar hojas pdf"
            ],
            fr: [
              "supprimer page pdf",
              "supprimer des pages d'un pdf",
              "supprimer une page d'un pdf",
              "supprimer pages pdf",
              "supprimer une page pdf",
              "pdf supprimer page",
              "enlever une page d'un pdf",
              "enlever page pdf",
              "comment supprimer une page d'un pdf",
              "supprimer pdf"
            ],
            de: [
              "pdf seiten löschen",
              "pdf seite löschen",
              "pdf seiten entfernen",
              "seiten aus pdf löschen",
              "seite aus pdf löschen",
              "pdf seite entfernen",
              "pdf löschen",
              "pdf-seiten löschen",
              "pdf seiten löschen online",
              "pdf eine seite löschen"
            ],
            it: [
              "elimina pagine pdf",
              "eliminare pagine pdf",
              "elimina pagina pdf",
              "elimina pdf",
              "elimina pagine da pdf",
              "eliminare pagine da pdf",
              "togliere pagine pdf",
              "rimuovi pagine pdf",
              "eliminare pagina pdf",
              "eliminare pagine da un pdf"
            ],
            ru: [
              "удалить страницы из пдф",
              "удалить страницы пдф",
              "удалить страницу в пдф",
              "удалить страницу из пдф",
              "удалить страницы из pdf",
              "удалить листы из пдф",
              "как удалить страницу в пдф",
              "как удалить страницы в пдф",
              "удалить страницу из pdf",
              "pdf удалить страницы"
            ],
            en: [
              "delete pages from pdf",
              "remove pages from pdf",
              "how to delete pages from pdf",
              "delete pdf pages",
              "how to remove pages from a pdf",
              "pdf page remover",
              "how to delete a page in pdf",
              "remove page from pdf",
              "pdf delete pages",
              "delete page from pdf"
            ]
          },
          merge: {
            pt: [
              "juntar pdf",
              "unir pdf",
              "juntar pdfs",
              "juntar pdf online",
              "juntar arquivos pdf",
              "unificar pdf",
              "junta pdf",
              "agrupar pdf",
              "mesclar pdf",
              "unir pdfs"
            ],
            es: [
              "unir pdf",
              "juntar pdf",
              "combinar pdf",
              "unir pdf online",
              "unir pdfs",
              "unificar pdf",
              "unir pdf gratis",
              "unir archivos pdf",
              "fusionar pdf",
              "unir dos pdf"
            ],
            fr: [
              "fusionner pdf",
              "fusion pdf",
              "combiner pdf",
              "fusionner pdf en ligne",
              "assembler pdf",
              "fusionner 2 pdf",
              "fusionner des pdf",
              "pdf fusion",
              "fusionner plusieurs pdf",
              "fusionner deux pdf"
            ],
            de: [
              "pdf zusammenfügen",
              "pdfs zusammenfügen",
              "pdf dateien zusammenfügen",
              "pdf zusammenführen",
              "pdf zusammenfügen online",
              "pdf zusammenfügen kostenlos",
              "mehrere pdf zusammenfügen",
              "pdf online zusammenfügen",
              "pdf zusammenfügen windows 10",
              "pdf dokumente zusammenfügen",
              "pdf verbinden"
            ],
            it: [
              "unisci pdf",
              "unire pdf",
              "unire file pdf",
              "unire pdf online",
              "unire due pdf",
              "unione pdf",
              "unisci pdf online",
              "unisci file pdf",
              "unisci pdf gratis",
              "come unire due pdf"
            ],
            ru: [
              "объединить пдф",
              "объединить pdf",
              "объединение пдф",
              "объединить пдф файлы",
              "пдф объединить",
              "объединить пдф онлайн",
              "объеденить пдф",
              "объединить файлы пдф",
              "склеить пдф",
              "обьединить пдф"
            ],
            en: [
              "combine pdf",
              "merge pdf",
              "pdf combiner",
              "pdf merge",
              "how to combine pdf files",
              "pdf merger",
              "combine pdf files",
              "combine pdfs",
              "pdf combine",
              "how to merge pdf files",
              "join pdf",
              "pdf join",
              "merge document"
            ]
          },
          split: {
            pt: [
              "dividir pdf",
              "separar pdf",
              "cortar pdf",
              "desmembrar pdf",
              "extrair pdf",
              "quebrar pdf",
              "separa pdf",
              "recortar pdf",
              "dividir pdf online",
              "separador de pdf"
            ],
            es: [
              "dividir pdf",
              "separar pdf",
              "cortar pdf",
              "recortar pdf",
              "extraer pdf",
              "dividir pdf online",
              "extraer paginas pdf",
              "desunir pdf",
              "separa pdf",
              "extraer paginas de un pdf"
            ],
            fr: [
              "diviser pdf",
              "séparer pdf",
              "scinder pdf",
              "supprimer page pdf",
              "couper pdf",
              "extraire page pdf",
              "diviser un pdf",
              "dissocier pdf",
              "extraire pdf",
              "découper pdf"
            ],
            de: [
              "pdf teilen",
              "pdf trennen",
              "pdf seiten trennen",
              "pdf extrahieren",
              "pdf splitten",
              "pdf aufteilen",
              "pdf schneiden",
              "pdf trennen online",
              "pdf seiten extrahieren",
              "pdf auseinandernehmen"
            ],
            it: [
              "dividi pdf",
              "dividere pdf",
              "separa pdf",
              "taglia pdf",
              "dividi pdf online",
              "estrai pdf",
              "dividere pdf online",
              "tagliare pdf",
              "estrai pagine pdf",
              "estrarre pagine da pdf"
            ],
            ru: [
              "разделить пдф",
              "разбить пдф",
              "разделить pdf",
              "разделить пдф онлайн",
              "разъединить пдф",
              "обрезать пдф",
              "разделить пдф файл",
              "пдф разделить",
              "извлечь страницы из пдф",
              "вырезать страницы из пдф"
            ],
            en: [
              "split pdf",
              "pdf splitter",
              "pdf split",
              "how to separate pages in pdf",
              "extract pages from pdf",
              "how to extract pages from pdf",
              "split pdf online",
              "separate pdf pages",
              "split pdf pages",
              "how to separate pdf pages"
            ]
          },
          sign: {
            pt: [
              "assinatura digital",
              "assinatura eletronica",
              "como fazer assinatura digital",
              "assinatura digital como fazer",
              "assinar pdf",
              "assinatura digital gratis",
              "assinatura digital pdf",
              "assinatura online",
              "assinar documento digitalmente",
              "assinar pdf online"
            ],
            es: [
              "firma digital",
              "firmar pdf",
              "firma electronica",
              "firma digital online",
              "firma digital pdf",
              "firmar pdf online",
              "firmas digitales",
              "firmar documento pdf",
              "firma pdf",
              "como hacer una firma digital"
            ],
            fr: [
              "signature électronique",
              "signature electronique",
              "signer un pdf",
              "signer pdf",
              "signer un document pdf",
              "signature en ligne",
              "signature électronique pdf",
              "signature pdf",
              "signature numérique",
              "signature électronique gratuite"
            ],
            de: [
              "unterschrift erstellen",
              "digitale unterschrift",
              "pdf unterschreiben",
              "unterschrift in pdf einfügen",
              "digitale unterschrift erstellen",
              "online unterschrift",
              "pdf unterschrift einfügen",
              "pdf digital unterschreiben",
              "digitale unterschrift pdf",
              "pdf online unterschreiben"
            ],
            it: [
              "firma digitale gratis",
              "firma digitale",
              "firma pdf",
              "firma digitale online",
              "firma digitale online gratis",
              "firma pdf online",
              "firmare documento pdf",
              "firma digitale pdf",
              "firma online",
              "firma digitale gratuita"
            ],
            ru: [
              "подпись онлайн",
              "онлайн подпись",
              "подписать документ онлайн",
              "электронная подпись онлайн",
              "подписать pdf",
              "подписать пдф",
              "поставить подпись онлайн",
              "подписать пдф онлайн",
              "нарисовать подпись онлайн",
              "роспись онлайн"
            ],
            en: [
              "electronic signature",
              "esign",
              "signature",
              "how to sign a pdf",
              "e signature",
              "sign pdf",
              "online signature",
              "pdf signature",
              "add signature to pdf",
              "sign documents online"
            ]
          },
          unlock: {
            pt: [
              "desbloquear pdf",
              "desproteger pdf",
              "tirar senha de pdf",
              "remover senha pdf",
              "desbloquear pdf online",
              "tirar senha pdf",
              "como tirar senha de pdf",
              "retirar senha pdf",
              "quebrar senha pdf",
              "desbloquear pdf com senha"
            ],
            es: [
              "desbloquear pdf",
              "quitar contraseña pdf",
              "desproteger pdf",
              "quitar clave pdf",
              "quitar contraseña a pdf",
              "quitar proteccion pdf",
              "desbloquear pdf online",
              "desproteger pdf online",
              "como quitar contraseña a un pdf",
              "quitar clave a pdf"
            ],
            fr: [
              "déverrouiller pdf",
              "deverouiller pdf",
              "enlever protection pdf",
              "debloquer pdf",
              "enlever mot de passe pdf",
              "supprimer mot de passe pdf",
              "pdf protégé",
              "craquer un pdf",
              "déprotéger pdf",
              "mot de passe pdf"
            ],
            de: [
              "pdf passwort entfernen",
              "pdf entsperren",
              "pdf kennwort entfernen",
              "pdf kennwortschutz aufheben",
              "pdf entschlüsseln",
              "pdf schutz aufheben",
              "pdf passwortschutz entfernen",
              "passwort pdf entfernen",
              "pdf passwort entfernen online",
              "kennwortschutz pdf aufheben"
            ],
            it: [
              "sblocca pdf",
              "sbloccare pdf",
              "sblocco pdf",
              "togliere protezione pdf",
              "sproteggere pdf",
              "togliere password pdf",
              "sbloccare pdf online",
              "rimuovere password pdf",
              "sblocca pdf online",
              "pdf protetto"
            ],
            ru: [
              "снять защиту с pdf",
              "снять защиту с пдф",
              "разблокировать пдф",
              "разблокировать pdf",
              "снять защиту pdf",
              "снять пароль с pdf",
              "снять пароль с пдф",
              "как снять защиту с pdf",
              "pdf снять защиту",
              "снять защиту пдф"
            ],
            en: [
              "unlock pdf",
              "remove password from pdf",
              "how to remove password from pdf",
              "pdf unlock",
              "pdf password remover",
              "remove pdf password",
              "pdf unlocker",
              "how to unlock a pdf",
              "remove security from pdf",
              "unsecure pdf"
            ]
          },
          protect: {
            pt: [
              "proteger pdf",
              "senha pdf",
              "colocar senha em pdf",
              "pdf com senha",
              "proteger pdf com senha",
              "colocar senha no pdf",
              "como colocar senha em pdf",
              "colocar senha pdf",
              "como colocar senha no pdf",
              "pdf senha"
            ],
            es: [
              "proteger pdf",
              "encriptar pdf",
              "proteger pdf con contraseña",
              "cifrar pdf",
              "contraseña pdf",
              "poner contraseña a pdf",
              "poner contraseña a un pdf",
              "como encriptar un pdf",
              "poner clave a pdf",
              "clave pdf"
            ],
            fr: ["protéger un pdf", "protege pdf", "crypter un pdf"],
            de: [
              "pdf verschlüsseln",
              "pdf passwort schützen",
              "pdf mit passwort schützen",
              "pdf schützen",
              "pdf verschlüsseln kostenlos",
              "pdf online verschlüsseln",
              "pdf datei verschlüsseln",
              "pdf verschlüsseln online",
              "pdf mit passwort schützen kostenlos",
              "pdf schützen passwort"
            ],
            it: [
              "proteggere pdf",
              "proteggi pdf",
              "proteggere pdf con password",
              "criptare pdf",
              "creare pdf protetto",
              "password a pdf",
              "proteggi pdf con password",
              "proteggere file pdf",
              "blocca pdf",
              "bloccare pdf"
            ],
            ru: ["пароль на pdf", "как поставить пароль на pdf файл"],
            en: [
              "how to password protect a pdf",
              "password protect pdf",
              "encrypt pdf",
              "password protect pdf free",
              "add password to pdf",
              "pdf password protect",
              "pdf password",
              "how to encrypt a pdf",
              "password protect a pdf",
              "how to password protect a pdf for free"
            ]
          },
          reader: {
            pt: [
              "leitor de pdf",
              "leitor de pdf online",
              "abrir pdf online",
              "leitor pdf",
              "leitor pdf online",
              "visualizador de pdf online",
              "ler pdf online",
              "visualizar pdf online",
              "pdf reader online",
              "abrir arquivo pdf online"
            ],
            es: [
              "abrir pdf",
              "abrir pdf online",
              "lector de pdf online",
              "lector pdf online",
              "ver pdf online",
              "abrir pdf en linea",
              "abrir archivos pdf",
              "lector de pdf",
              "visor pdf online",
              "lector pdf"
            ],
            fr: [
              "lecteur pdf en ligne",
              "ouvrir pdf en ligne",
              "lire pdf en ligne",
              "ouvrir un pdf en ligne",
              "ouvrir fichier pdf en ligne",
              "visionneuse pdf en ligne",
              "lire un pdf en ligne",
              "lecteur de pdf en ligne",
              "lecteur pdf online",
              "lecteur pdf en ligne gratuit"
            ],
            de: [
              "pdf online",
              "pdf reader",
              "pdf reader online",
              "pdf viewer online",
              "online pdf viewer",
              "pdf online öffnen",
              "online pdf reader",
              "pdf lesen",
              "pdf öffnen online",
              "pdf online reader"
            ],
            it: [
              "lettore pdf online",
              "aprire pdf online",
              "apri pdf online",
              "visualizzatore pdf online",
              "apri pdf",
              "aprire file pdf online",
              "visualizza pdf online",
              "lettore pdf on line",
              "apri file online"
            ],
            ru: [
              "pdf reader",
              "pdf reader online",
              "пдф онлайн",
              "пдф ридер онлайн",
              "просмотр пдф онлайн",
              "просмотр pdf",
              "pdf online reader",
              "open pdf online",
              "pdf online",
              "пдф ридер"
            ],
            en: [
              "pdf reader",
              "pdf reader online",
              "online pdf reader",
              "pdf viewer online",
              "online pdf viewer",
              "open pdf online",
              "pdf opener",
              "pdf opener online",
              "view pdf online",
              "read pdf online"
            ]
          },
          "number-pages": {
            pt: [
              "numerar pdf",
              "numerar paginas pdf",
              "numerar pdf online",
              "paginar pdf",
              "numerar páginas pdf",
              "paginar pdf online",
              "como numerar pdf"
            ],
            es: [
              "enumerar pdf",
              "foliar pdf",
              "numerar pdf",
              "numerar paginas pdf",
              "enumerar pdf de atrás hacia adelante",
              "enumerar paginas en pdf",
              "paginar pdf",
              "como enumerar paginas en pdf",
              "numerar pdf online",
              "numerar hojas en pdf"
            ],
            fr: ["numéroter pdf", "numeroter pdf", "numéroter pages pdf"],
            de: ["pdf seitenzahlen einfügen", "pdf nummerieren", "pdf seiten nummerieren"],
            it: ["numerare pagine pdf", "numera pdf", "numerare pdf", "numera pagine pdf"],
            ru: ["пронумеровать пдф", "пронумеровать страницы в пдф", "нумерация пдф онлайн"],
            en: [
              "add page numbers to pdf",
              "how to add page numbers to a pdf",
              "how to add page numbers to pdf",
              "insert page numbers in pdf",
              "adding page numbers to pdf",
              "pdf page number",
              "how to add page numbers in pdf",
              "pdf page numbers",
              "number pdf",
              "number pages in pdf"
            ]
          }
        };
      },
      5888: (e, n, t) => {
        t.d(n, { I: () => i });
        var r = t(9245),
          o = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        function i(e) {
          return o(this, void 0, void 0, function* () {
            const n = yield (0, r.Px)(r.dR.UserFavorites, {});
            for (const t in e.favorites) n[t] = Math.max(e.favorites[t], n[t] || 0);
            yield (0, r.q8)({ [r.dR.UserFavorites]: n });
          });
        }
      },
      2490: (e, n, t) => {
        t.r(n);
        var r = t(5347),
          o = t(7301),
          i = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        chrome.runtime.onStartup.addListener(() =>
          i(void 0, void 0, void 0, function* () {
            try {
              yield (0, r.Ai)();
            } catch (e) {
              (0, o.cM)(e);
            }
          })
        );
      },
      5347: (e, n, t) => {
        t.d(n, { Ai: () => a });
        var r = t(9245),
          o = t(2893),
          i = t(7301),
          d = t(7457),
          p =
            (t(4758),
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (o, i) {
                function d(e) {
                  try {
                    a(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function p(e) {
                  try {
                    a(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  var n;
                  e.done
                    ? o(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(d, p);
                }
                a((r = r.apply(e, n || [])).next());
              });
            });
        function a() {
          var e, n;
          return p(this, void 0, void 0, function* () {
            try {
              if (yield (0, o.Sr)()) throw new Error("User not authenticated");
              const t = yield (0, d.HR)(`${d.Bi}/pro/account`, { headers: { Accept: "application/json" } }),
                i = yield t.json(),
                p = !!(null === (n = null === (e = null == i ? void 0 : i.data) || void 0 === e ? void 0 : e.app_metadata) || void 0 === n
                  ? void 0
                  : n.signedUp);
              return (
                yield (0, r.q8)({ [r.dR.USER_ACTIVE_PRO]: p }), yield (0, r.q8)({ [r.dR.PROFILE]: null == i ? void 0 : i.data }), i.data
              );
            } catch (e) {
              return (
                (0, i.cM)(e),
                yield (function () {
                  return p(this, void 0, void 0, function* () {
                    yield (0, r.q8)({ [r.dR.USER_ACTIVE_PRO]: !1 }), yield (0, r.q8)({ [r.dR.PROFILE]: null });
                  });
                })(),
                null
              );
            }
          });
        }
      },
      7747: (e, n, t) => {
        t.d(n, { Dt: () => c, Nw: () => s, Y8: () => d, dR: () => p, uq: () => i });
        var r = t(265),
          o = (t(7301), t(8562));
        const i = "https://analytics.smallpdf.com",
          d = "ALARM_ANALYTICS_EMPTY_QUEUE",
          p = 100;
        function a() {
          var e, n;
          if (chrome) {
            const t =
              null ===
                (n =
                  null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === e
                    ? void 0
                    : e.brands[2]) || void 0 === n
                ? void 0
                : n.brand;
            return null != t ? t : void 0;
          }
        }
        function f() {
          var e, n;
          if (chrome) {
            const t =
              null ===
                (n =
                  null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgentData) || void 0 === e
                    ? void 0
                    : e.brands[2]) || void 0 === n
                ? void 0
                : n.version;
            return null != t ? t : void 0;
          }
        }
        function s(e, n, t) {
          const r = (0, o.FU)();
          return {
            ts: e.ts,
            id: e.id,
            event: e.event,
            local_token: n.localToken,
            country_geo_ip: n.countryGeoIP,
            user_id: n.profile && n.profile.user_id,
            active_pro: !!n.activePro,
            os: t.os,
            os_major: void 0,
            os_minor: void 0,
            agent: "chrome-extension",
            agent_major: r.major,
            agent_minor: r.minor,
            agent_version: r.version,
            default_app: void 0,
            page: chrome.runtime.id,
            mode: null,
            custom_boolean1: e.bool1,
            custom_boolean2: e.bool2,
            custom_boolean3: e.bool3,
            custom_int1: e.int1,
            custom_int2: e.int2,
            custom_int3: e.int3,
            custom_string1: e.string1,
            custom_string2: e.string2,
            custom_string3: e.string3,
            browser: a(),
            browser_major: f(),
            browser_minor: void 0,
            rt: n.rt,
            locale: t.locale,
            agent_identifier: chrome.runtime.id
          };
        }
        function c(e) {
          return {
            id: (0, r.Z)(),
            v: 1,
            ts: Date.now(),
            event: e.event,
            bool1: e.customBoolean1,
            bool2: e.customBoolean2,
            bool3: e.customBoolean3,
            int1: e.customInt1,
            int2: e.customInt2,
            int3: e.customInt3,
            string1: e.customString1,
            string2: e.customString2,
            string3: e.customString3
          };
        }
      },
      4232: (e, n, t) => {
        t.d(n, { j: () => f, rt: () => s });
        var r = t(9245),
          o = t(7301),
          i = t(8562),
          d = t(7747),
          p = t(385),
          a = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        function f(e) {
          return a(this, void 0, void 0, function* () {
            const n = (0, d.Dt)(e);
            (0, o.ag)(`%cTrack event: ${e.event}`, "background: #0033E7; color: #E2E2E2", n);
            const t = yield (0, r.Px)([r.dR.USER_DATA_SYNCED]);
            navigator.onLine && t[r.dR.USER_DATA_SYNCED]
              ? yield (function (e) {
                  return a(this, void 0, void 0, function* () {
                    const n = yield (0, p.is)(),
                      t = yield (0, i.So)(),
                      r = (0, d.Nw)(e, n, t);
                    (0, o.ag)(`Send event ${r.event}`, r);
                    const a = yield fetch(`${d.uq}/v2/events`, { method: "POST", body: JSON.stringify([r]) });
                    if (!a.ok) throw new Error(`Pluto response status: ${a.status}`);
                    {
                      const e = yield a.json();
                      if (!(null == e ? void 0 : e.success)) throw new Error(`Pluto response error: ${e.error}`);
                    }
                  });
                })(n)
              : yield (function (e) {
                  return a(this, void 0, void 0, function* () {
                    return navigator.locks.request(i.a3, () =>
                      a(this, void 0, void 0, function* () {
                        const n = yield (0, r.Px)(r.dR.TRACKING_EVENTS, []);
                        n.push(e);
                        try {
                          yield (0, r.q8)({ [r.dR.TRACKING_EVENTS]: n });
                        } catch (e) {
                          e instanceof Error &&
                            (e.name.includes("QUOTA_BYTES") || e.message.includes("QUOTA_BYTES")) &&
                            (yield (0, r.q8)({ [r.dR.TRACKING_EVENTS]: [] }));
                        }
                      })
                    );
                  });
                })(n);
          });
        }
        function s() {
          return a(this, void 0, void 0, function* () {
            const e = yield (0, r.Px)([r.dR.TRACKING_EVENTS, r.dR.USER_DATA_SYNCED]);
            if (!e || !e[r.dR.USER_DATA_SYNCED]) return;
            const n = e[r.dR.TRACKING_EVENTS] || [];
            if (0 !== n.length && navigator.onLine) {
              try {
                const e = n.splice(0, d.dR);
                yield (function (e) {
                  return a(this, void 0, void 0, function* () {
                    const n = yield (0, p.is)(),
                      t = yield (0, i.So)(),
                      r = e.map((e) => (0, d.Nw)(e, n, t));
                    (0, o.ag)("Send events", r);
                    const a = yield fetch(`${d.uq}/v2/events`, { method: "POST", body: JSON.stringify(r) });
                    if (!a.ok) throw new Error(`Pluto response status: ${a.status}`);
                    {
                      const e = yield a.json();
                      if (!e.success) throw new Error(`Pluto response error: ${e.error}`);
                    }
                  });
                })(e);
              } catch (e) {
                return void (0, o.ag)("Failed to submit events", e);
              }
              try {
                yield (0, r.q8)({ [r.dR.TRACKING_EVENTS]: n });
              } catch (e) {
                yield (0, r.dv)(r.dR.TRACKING_EVENTS), (0, o.ag)("Failed to update event queue", e);
              }
            }
          });
        }
      },
      1217: (e, n, t) => {
        t.r(n);
        var r = t(9245),
          o = t(4232),
          i = t(7747),
          d = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        chrome.alarms.create(i.Y8, { when: Date.now(), periodInMinutes: 1 }),
          chrome.alarms.onAlarm.addListener((e) =>
            d(void 0, void 0, void 0, function* () {
              e.name === i.Y8 && navigator.onLine && (yield (0, o.rt)(), yield (0, r.dv)(r.dR.TRACKING_EVENTS));
            })
          );
      },
      4356: (e, n, t) => {
        t.d(n, { sA: () => p });
        t(9245), t(5347);
        var r = t(2893),
          o = (t(7301), t(8562)),
          i = (t(5928), t(4758)),
          d = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        function p() {
          return d(this, void 0, void 0, function* () {
            const e = yield (0, r.W_)();
            if (!e.refreshToken) throw (0, i.Tr)({ name: i.ll });
            return navigator.locks.request(o.Cs, { ifAvailable: !0 }, (n) =>
              d(this, void 0, void 0, function* () {
                if ((null == n ? void 0 : n.name) !== o.Cs) return;
                const t = (0, r.RQ)(),
                  i = t.getRealmURL("protocol/openid-connect/token"),
                  d = new URLSearchParams();
                d.set("grant_type", "refresh_token"), d.set("client_id", t.clientID || ""), d.set("refresh_token", e.refreshToken);
                const p = yield fetch(i.toString(), {
                    method: "POST",
                    redirect: "follow",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: d
                  }),
                  a = yield (0, r.El)(p);
                yield (0, r.Bi)(a.accessToken, a.refreshToken);
              })
            );
          });
        }
      },
      2893: (e, n, t) => {
        t.d(n, { Bi: () => L, Eh: () => g, El: () => f, RQ: () => a, Sr: () => h, W_: () => v, hv: () => u });
        var r = t(9245),
          o = t(1011),
          i = t(4758),
          d = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        var p;
        !(function (e) {
          (e.GOOGLE = "google"), (e.FACEBOOK = "facebook"), (e.CREDENTIALS = "credentials"), (e.UNKNOWN = "unknown");
        })(p || (p = {}));
        (0, o.i4)(3);
        function a() {
          return {
            host: "keycloak.smallpdf.com",
            realm: "smallpdf-production",
            clientID: "chrome-extension",
            getRealmURL(e) {
              return new URL(`https://${this.host}/auth/realms/${this.realm}/${e}`);
            }
          };
        }
        function f(e) {
          return d(this, void 0, void 0, function* () {
            const n = yield e.json();
            if ("object" != typeof n) throw new Error("authentication: Invalid Keycloak payload: Not an object");
            if ("string" == typeof n.error) {
              if ("invalid_grant" === n.error)
                switch (e.status) {
                  case 401:
                    throw (0, i.J)();
                  case 400:
                  case 403:
                    throw (0, i.xc)();
                  case 429:
                    throw (0, i.wt)();
                }
              throw new Error(`authentication: Unknown error: ${n.error}`);
            }
            if ("string" != typeof n.refresh_token || "string" != typeof n.access_token)
              throw new Error("authentication: Invalid Keycloak payload: Missing refresh or access token");
            return { accessToken: n.access_token, refreshToken: n.refresh_token };
          });
        }
        function s(e) {
          const n = e.split(".")[1];
          if (n) {
            const e = n.replace(/-/g, "+").replace(/_/g, "/"),
              t = decodeURIComponent(
                atob(e)
                  .split("")
                  .map((e) => `%${`00${e.charCodeAt(0).toString(16)}`.slice(-2)}`)
                  .join("")
              ),
              r = JSON.parse(t);
            if ("object" != typeof r) throw new Error("authentication: Invalid JWT token");
            return r;
          }
          return {};
        }
        function c(e) {
          const n = s(e);
          if ("string" != typeof n.sub || "number" != typeof n.exp) throw new Error("authentication: Invalid JWT token");
          return {
            value: e,
            subject: n.sub,
            expireAt: 1e3 * n.exp,
            privateShare: "boolean" == typeof n.private_sharing ? n.private_sharing : null
          };
        }
        function l(e) {
          const n = s(e);
          if ("string" != typeof n.sub || "number" != typeof n.exp) throw new Error("authentication: Invalid JWT token");
          return { value: e, subject: n.sub, expireAt: 1e3 * n.exp };
        }
        function u(e) {
          return null === e ? {} : { Authorization: `${e}` };
        }
        function v() {
          return d(this, void 0, void 0, function* () {
            const e = yield (0, r.Px)([r.dR.ACCESS_TOKEN, r.dR.REFRESH_TOKEN]);
            return e
              ? { accessToken: e[r.dR.ACCESS_TOKEN] || null, refreshToken: e[r.dR.REFRESH_TOKEN] || null }
              : { accessToken: null, refreshToken: null };
          });
        }
        function L(e, n) {
          return d(this, void 0, void 0, function* () {
            return (0, r.q8)({ [r.dR.ACCESS_TOKEN]: e, [r.dR.REFRESH_TOKEN]: n });
          });
        }
        function m() {
          return d(this, void 0, void 0, function* () {
            const e = yield v();
            return { accessToken: e.accessToken ? c(e.accessToken) : null, refreshToken: e.refreshToken ? l(e.refreshToken) : null };
          });
        }
        function g() {
          var e;
          return d(this, void 0, void 0, function* () {
            const n = yield m();
            return !(null === (e = n.accessToken) || void 0 === e ? void 0 : e.expireAt) || n.accessToken.expireAt <= Date.now();
          });
        }
        function h() {
          var e;
          return d(this, void 0, void 0, function* () {
            const n = yield m();
            return !n || !(null === (e = n.refreshToken) || void 0 === e ? void 0 : e.expireAt) || n.refreshToken.expireAt <= Date.now();
          });
        }
      },
      2723: (e, n, t) => {
        t.r(n), t.d(n, { track: () => d });
        var r = t(3495),
          o = t(4232),
          i = t(7301);
        function d(e) {
          try {
            e instanceof Error && o.j(r.MW(e.toString()));
          } catch (e) {
            (0, i.cM)(e);
          }
        }
      },
      8553: (e, n, t) => {
        t.r(n);
        let r, o;
        const i = new WeakMap(),
          d = new WeakMap(),
          p = new WeakMap(),
          a = new WeakMap(),
          f = new WeakMap();
        let s = {
          get(e, n, t) {
            if (e instanceof IDBTransaction) {
              if ("done" === n) return d.get(e);
              if ("objectStoreNames" === n) return e.objectStoreNames || p.get(e);
              if ("store" === n) return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
            }
            return u(e[n]);
          },
          set: (e, n, t) => ((e[n] = t), !0),
          has: (e, n) => (e instanceof IDBTransaction && ("done" === n || "store" === n)) || n in e
        };
        function c(e) {
          return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype
            ? (o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
              ? function (...n) {
                  return e.apply(v(this), n), u(i.get(this));
                }
              : function (...n) {
                  return u(e.apply(v(this), n));
                }
            : function (n, ...t) {
                const r = e.call(v(this), n, ...t);
                return p.set(r, n.sort ? n.sort() : [n]), u(r);
              };
        }
        function l(e) {
          return "function" == typeof e
            ? c(e)
            : (e instanceof IDBTransaction &&
                (function (e) {
                  if (d.has(e)) return;
                  const n = new Promise((n, t) => {
                    const r = () => {
                        e.removeEventListener("complete", o), e.removeEventListener("error", i), e.removeEventListener("abort", i);
                      },
                      o = () => {
                        n(), r();
                      },
                      i = () => {
                        t(e.error || new DOMException("AbortError", "AbortError")), r();
                      };
                    e.addEventListener("complete", o), e.addEventListener("error", i), e.addEventListener("abort", i);
                  });
                  d.set(e, n);
                })(e),
              (n = e),
              (r || (r = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e) => n instanceof e)
                ? new Proxy(e, s)
                : e);
          var n;
        }
        function u(e) {
          if (e instanceof IDBRequest)
            return (function (e) {
              const n = new Promise((n, t) => {
                const r = () => {
                    e.removeEventListener("success", o), e.removeEventListener("error", i);
                  },
                  o = () => {
                    n(u(e.result)), r();
                  },
                  i = () => {
                    t(e.error), r();
                  };
                e.addEventListener("success", o), e.addEventListener("error", i);
              });
              return (
                n
                  .then((n) => {
                    n instanceof IDBCursor && i.set(n, e);
                  })
                  .catch(() => {}),
                f.set(n, e),
                n
              );
            })(e);
          if (a.has(e)) return a.get(e);
          const n = l(e);
          return n !== e && (a.set(e, n), f.set(n, e)), n;
        }
        const v = (e) => f.get(e);
        const L = ["get", "getKey", "getAll", "getAllKeys", "count"],
          m = ["put", "add", "delete", "clear"],
          g = new Map();
        function h(e, n) {
          if (!(e instanceof IDBDatabase) || n in e || "string" != typeof n) return;
          if (g.get(n)) return g.get(n);
          const t = n.replace(/FromIndex$/, ""),
            r = n !== t,
            o = m.includes(t);
          if (!(t in (r ? IDBIndex : IDBObjectStore).prototype) || (!o && !L.includes(t))) return;
          const i = async function (e, ...n) {
            const i = this.transaction(e, o ? "readwrite" : "readonly");
            let d = i.store;
            return r && (d = d.index(n.shift())), (await Promise.all([d[t](...n), o && i.done]))[0];
          };
          return g.set(n, i), i;
        }
        s = ((e) => ({ ...e, get: (n, t, r) => h(n, t) || e.get(n, t, r), has: (n, t) => !!h(n, t) || e.has(n, t) }))(s);
        var w = t(3495),
          E = t(4232),
          _ = t(1852),
          C = t(7301),
          x = t(8612),
          A = t(5928),
          T = t(4758),
          y = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        function I() {
          return y(this, void 0, void 0, function* () {
            const e = yield (0, _.f1)();
            let n = null,
              t = null,
              r = null,
              o = null;
            try {
              (n = yield (function (e, n, { blocked: t, upgrade: r, blocking: o, terminated: i } = {}) {
                const d = indexedDB.open(e, n),
                  p = u(d);
                return (
                  r &&
                    d.addEventListener("upgradeneeded", (e) => {
                      r(u(d.result), e.oldVersion, e.newVersion, u(d.transaction));
                    }),
                  t && d.addEventListener("blocked", () => t()),
                  p
                    .then((e) => {
                      i && e.addEventListener("close", () => i()), o && e.addEventListener("versionchange", () => o());
                    })
                    .catch(() => {}),
                  p
                );
              })("upload", 1)),
                (t = yield n.get(_.VK, e.fileID)),
                (r = t.blob),
                (o = t.uploadURL);
            } catch (e) {
              throw ((0, C.cM)(e), yield (0, _._P)({ status: A.Lr.FAILED, progress: 100 }), (0, T.dF)());
            }
            yield (0, _._P)({ status: A.Lr.PENDING, progress: 0 });
            try {
              const n = Date.now();
              yield E.j(w.WO(e.name, e.token, r.size)), (0, x.Ng)("1");
              if ((yield self.fetch(o, { method: "put", body: r })).ok) {
                const t = Date.now() - n;
                return (
                  (0, x.Fd)(),
                  yield E.j(w.u$(e.name, e.token, r.size, t)),
                  setTimeout(() => {
                    (0, x.Hx)();
                  }, 1e3),
                  yield (0, _._P)({ status: A.Lr.COMPLETED, progress: 100 })
                );
              }
              throw new Error("upload response nok");
            } catch (n) {
              throw (
                ((0, C.cM)(n),
                yield E.j(w.U_(e.name, e.token, r.size)),
                yield (0, _._P)({ status: A.Lr.FAILED, progress: 100 }),
                (0, T.Lv)())
              );
            }
          });
        }
        var P = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function d(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function p(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(d, p);
            }
            a((r = r.apply(e, n || [])).next());
          });
        };
        addEventListener("message", (e) => {
          var n;
          if ((null === (n = e.data) || void 0 === n ? void 0 : n.type) === _.EV) {
            (0, C.ag)("MESSAGE_FILE_UPLOAD");
            const n = new Promise((e, n) => {
              P(void 0, void 0, void 0, function* () {
                try {
                  const n = yield (0, _.f1)();
                  n || e(!1), (null == n ? void 0 : n.status) !== A.Lr.IDLE && e(!1), yield I(), e(!0);
                } catch (e) {
                  n(e);
                }
              });
            }).catch(C.ag);
            e.waitUntil(n);
          }
        });
      },
      1852: (e, n, t) => {
        t.d(n, {
          EV: () => f,
          F_: () => m,
          VK: () => a,
          _P: () => u,
          a1: () => w,
          f1: () => l,
          iR: () => L,
          tA: () => v,
          y8: () => h,
          yT: () => g
        });
        var r = t(9245),
          o = t(8562),
          i = t(1011),
          d = t(5928),
          p = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        const a = "files",
          f = "MESSAGE_FILE_UPLOAD";
        var s, c;
        function l() {
          return p(this, void 0, void 0, function* () {
            return (0, r.Px)(r.dR.FILE_HANDLE);
          });
        }
        function u(e) {
          return p(this, void 0, void 0, function* () {
            const n = yield l();
            n && (yield (0, r.q8)({ [r.dR.FILE_HANDLE]: Object.assign(Object.assign({}, n), e) }));
          });
        }
        function v() {
          return p(this, void 0, void 0, function* () {
            return (0, r.Px)(r.dR.FILE_HANDLE_RESULT);
          });
        }
        function L(e) {
          return p(this, void 0, void 0, function* () {
            let n = yield v();
            n ||
              (n = {
                name: "document",
                tokens: [],
                size: null,
                expireAt: Date.now() + (0, i.LK)(15),
                status: d.Lr.COMPLETED,
                progress: 100
              }),
              yield (0, r.q8)({ [r.dR.FILE_HANDLE_RESULT]: Object.assign(Object.assign({}, n), e) });
          });
        }
        function m(e, n) {
          let t = e.split(".")[0] || "document";
          if (n) {
            const e = n.split(".")[1];
            e && (t = `${t}.${e}`);
          }
          return t;
        }
        function g(e) {
          return 1 === e.length ? e[0] : e.length > 1 ? e.find((e) => e.includes("zip")) : null;
        }
        function h() {
          return p(this, void 0, void 0, function* () {
            const e = yield v();
            return e ? g(e.tokens) : [];
          });
        }
        function w() {
          return p(this, void 0, void 0, function* () {
            const e = yield v();
            if (!e) return null;
            const n = yield h();
            return (function (e, n) {
              const t = `/files/${e}?name=${encodeURIComponent(n)}`;
              return `${o.XQ}${t}`;
            })(n, m(e.name, n));
          });
        }
        !(function (e) {
          (e.DROP_AREA = "droparea"), (e.DRAG_AND_DROP = "drag-and-drop"), (e.RETRY = "retry");
        })(s || (s = {})),
          (function (e) {
            (e.FILE_HANDLE_IDLE = "fileHandleIdle"),
              (e.FILE_HANDLE_PROGRESS = "fileHandleProgress"),
              (e.FILE_HANDLE_FAILURE = "fileHandleFailure");
          })(c || (c = {}));
      },
      8195: (e, n, t) => {
        t.d(n, { b: () => r, e: () => o });
        const r = 2,
          o = "ALARM_LIMITATIONS_CHECK";
      },
      4524: (e, n, t) => {
        t.r(n);
        var r = t(9245),
          o = t(8195),
          i = t(1011),
          d = t(385),
          p = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        chrome.alarms.create(o.e, { when: Date.now(), periodInMinutes: 1 }),
          chrome.alarms.onAlarm.addListener((e) =>
            p(void 0, void 0, void 0, function* () {
              if (e.name === o.e) {
                const e = yield (0, r.wo)(r.ge.TasksCount, 0);
                if ((yield (0, d.ck)()) && 0 !== e)
                  return void (yield (0, r.gX)({ [r.ge.TasksCount]: 0, [r.ge.FreeTasksResetTime]: null }));
                let n = yield (0, r.wo)(r.ge.FreeTasksResetTime, null);
                n || ((n = Date.now()), yield (0, r.gX)({ [r.ge.FreeTasksResetTime]: n }));
                Date.now() - n >= (0, i.an)(1) && (yield (0, r.gX)({ [r.ge.TasksCount]: 0, [r.ge.FreeTasksResetTime]: Date.now() }));
              }
            })
          );
      },
      7301: (e, n, t) => {
        t.d(n, { ag: () => f, cM: () => a });
        t(9248);
        var r = t(9245),
          o = t(8562),
          i = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        let d;
        function p() {
          return i(this, void 0, void 0, function* () {
            if ("boolean" == typeof d) return d;
            return yield (0, r.Px)([r.dR.SERVICE_WORKER_LOGS])
              .then((e) => e[r.dR.SERVICE_WORKER_LOGS])
              .then((e) => "boolean" == typeof e && ((d = e), e));
          });
        }
        function a(...e) {
          return i(this, void 0, void 0, function* () {
            const n = yield p();
            ("development" === o.Gv || n) && console.log.apply(null, e);
          });
        }
        function f(...e) {
          return i(this, void 0, void 0, function* () {
            const n = yield p();
            ("development" === o.Gv || n) && console.log.apply(null, e);
          });
        }
      },
      8612: (e, n, t) => {
        t.d(n, { Fd: () => p, Hx: () => s, Ng: () => c, xk: () => a });
        var r = t(5059),
          o = t(9245),
          i = t(9305),
          d = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        function p() {
          l();
        }
        function a() {
          return d(this, void 0, void 0, function* () {
            l();
            const e = yield (0, o.wo)(o.ge.PreferenceAutoDownloadEnabled, !1);
            e &&
              setTimeout(() => {
                s(), chrome.notifications.clear(r.Notifications.ID_RESULT);
              }, 5e3),
              (0, r.create)(r.Notifications.ID_RESULT, {
                type: chrome.notifications.TemplateType.BASIC,
                requireInteraction: !e,
                iconUrl: chrome.runtime.getURL("/images/smallpdf_128.png"),
                title: "File processed",
                message: e ? "Your file is being downloaded" : "Your file is ready to be downloaded",
                priority: 0,
                buttons: e ? [] : [{ title: "Download" }]
              });
          });
        }
        function f(e, n) {
          n && chrome.action.setBadgeBackgroundColor({ color: String(n) }), chrome.action.setBadgeText({ text: e });
        }
        function s() {
          f("");
        }
        function c(e) {
          f(e, i.rA);
        }
        function l() {
          f("✓", i.Yz);
        }
      },
      7457: (e, n, t) => {
        t.d(n, { Bi: () => p, HR: () => c, KN: () => s, Uy: () => f });
        var r = t(4356),
          o = t(2893),
          i = t(4758),
          d = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        const p = "https://pro.smallpdf.com";
        var a;
        function f(e) {
          return "object" == typeof e && null !== e;
        }
        function s(e) {
          return d(this, void 0, void 0, function* () {
            const n = yield e.json();
            if (!n || "object" != typeof n) throw (0, i.oi)(n);
            if ("boolean" != typeof n.success) throw (0, i.oi)(n);
            if (!1 === n.success && "string" != typeof n.error) throw (0, i.oi)(n);
            return { payload: n, error: "string" == typeof n.error ? n.error : null, data: n.data };
          });
        }
        function c(e, n) {
          return d(this, void 0, void 0, function* () {
            if (yield (0, o.Sr)()) throw (0, i.Tr)({ name: i.Ld });
            (yield (0, o.Eh)()) && (yield (0, r.sA)());
            const t = yield (0, o.W_)();
            return fetch(
              e,
              Object.assign(Object.assign({}, n), {
                credentials: "omit",
                headers: Object.assign(Object.assign({}, null == n ? void 0 : n.headers), (0, o.hv)(t.accessToken))
              })
            );
          });
        }
        !(function (e) {
          (e.ACCOUNT = "account"), (e.HELP = "help"), (e.APPS = "downloads");
        })(a || (a = {}));
      },
      8562: (e, n, t) => {
        t.d(n, {
          Cs: () => L,
          FU: () => E,
          GH: () => m,
          Gv: () => s,
          KX: () => c,
          Kf: () => a,
          So: () => h,
          XQ: () => f,
          a3: () => v,
          bk: () => l,
          oQ: () => w,
          qs: () => _,
          vW: () => u
        });
        var r = t(9245),
          o = t(7301),
          i = t(7457),
          d = t(4758),
          p = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        const a = "https://smallpdf.com",
          f = "https://files.smallpdf.com",
          s = "production",
          c = "utm_source=ce_pdfium",
          l = "utm_source=ce_generic",
          u = "LOCK_POLL_TASK",
          v = "LOCK_QUEUE_EVENT",
          L = "LOCK_REFRESH_TOKEN",
          m = "LOCK_MIGRATIONS";
        var g;
        function h() {
          return p(this, void 0, void 0, function* () {
            const e = yield (0, r.Px)([r.dR.SYSTEM_OS, r.dR.SYSTEM_LOCALE]);
            return { os: e[r.dR.SYSTEM_OS], locale: e[r.dR.SYSTEM_LOCALE] };
          });
        }
        function w() {
          return p(this, void 0, void 0, function* () {
            const e = yield (0, r.Px)(r.dR.SYSTEM_LOCALE, null),
              n = e ? `${a}/${e}/page?${l}#chrome-extension-feedback` : `${a}/page?${l}#chrome-extension-feedback`;
            chrome.runtime.setUninstallURL(n);
          });
        }
        function E() {
          const e = { version: "0.0.0", major: 0, minor: 0 },
            n = chrome.runtime.getManifest().version;
          if (n) {
            const [t = 0, r = 0] = n.split(".");
            (e.version = n), (e.major = +t), (e.minor = +r);
          }
          return e;
        }
        function _() {
          return p(this, void 0, void 0, function* () {
            try {
              const e = yield (function () {
                return p(this, void 0, void 0, function* () {
                  try {
                    const e = yield fetch(`${i.Bi}/geoip`, { method: "GET" }),
                      { error: n, data: t } = yield (0, i.KN)(e);
                    if (n) {
                      if ("internal_server_error" === n) throw (0, d.qF)();
                      throw (0, d.Pz)(e.status);
                    }
                    return (0, i.Uy)(t) ? String(t.country) : null;
                  } catch (e) {
                    return (0, o.cM)("fetchCountry error:", e), null;
                  }
                });
              })();
              e && (yield (0, r.q8)({ [r.dR.USER_COUNTRY_GEO_IP]: e }));
            } catch (e) {
              throw ((0, o.cM)("updateCountryGeoIP: error", e), e);
            }
          });
        }
        !(function (e) {
          (e.Windows = "windows"),
            (e.Linux = "linux"),
            (e.MacOS = "mac_os"),
            (e.Android = "android"),
            (e.OpenBSD = "openbsd"),
            (e.ChromeODS = "chrome_os");
        })(g || (g = {}));
      },
      4964: (e, n, t) => {
        t.r(n);
        var r = t(3495),
          o = t(4215),
          i = t(4232),
          d = t(7301),
          p = t(9245),
          a = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        const f = [
          {
            schema: 1649147348286,
            area: "sync",
            migrate() {
              return a(this, void 0, void 0, function* () {
                const e = yield (0, p.wo)(p.ge.Experiments, {}),
                  n = Object.keys(e).reduce((n, t) => {
                    const r = e[t];
                    return Object.assign(Object.assign({}, n), { [t]: { segment: r, version: 1, name: t } });
                  }, {});
                yield (0, p.gX)({ [p.ge.Experiments]: n });
              });
            },
            onError(e) {
              return a(this, void 0, void 0, function* () {
                yield (0, p.gX)({ [p.ge.Experiments]: {} });
              });
            }
          }
        ];
        var s = t(8562),
          c = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        var l = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function d(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function p(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(d, p);
            }
            a((r = r.apply(e, n || [])).next());
          });
        };
        chrome.runtime.onStartup.addListener(() =>
          l(void 0, void 0, void 0, function* () {
            (0, s.oQ)();
          })
        ),
          chrome.runtime.onInstalled.addListener((e) =>
            l(void 0, void 0, void 0, function* () {
              (0, d.ag)("onInstalled", e.reason),
                "install" === e.reason &&
                  ((0, d.ag)("install"),
                  yield (function () {
                    return c(this, void 0, void 0, function* () {
                      yield (0, p.q8)({
                        [p.dR.MIGRATIONS_SCHEMA_VERSION]: Date.now(),
                        [p.dR.IS_PDIUM_OPEN_ON_LOAD]: null,
                        [p.dR.LOCAL_TOKEN]: null,
                        [p.dR.USER_COUNTRY_GEO_IP]: null,
                        [p.dR.USER_PROFILE]: null,
                        [p.dR.USER_ACTIVE_PRO]: !1,
                        [p.dR.USER_RT]: !1,
                        [p.dR.ACCESS_TOKEN]: null,
                        [p.dR.REFRESH_TOKEN]: null,
                        [p.dR.TRACKING_EVENTS]: [],
                        [p.dR.USER_DATA_SYNCED]: !1,
                        [p.dR.USER_DATA_LAST_SYNC]: null,
                        [p.dR.FILE_HANDLE]: null,
                        [p.dR.FILE_HANDLE_RESULT]: null,
                        [p.dR.TASK]: null,
                        [p.dR.SYSTEM_OS]: null,
                        [p.dR.SYSTEM_LOCALE]: "en",
                        [p.dR.INSTALLATION_DATE]: Date.now(),
                        [p.dR.PROFILE]: null,
                        [p.dR.AUTH_CODE_VERIFIER]: null,
                        [p.dR.AUTH_STATE_CODE]: null,
                        [p.dR.AUTH_PROVIDER]: null,
                        [p.dR.FAILED_LOGIN_ATTEMPTS]: []
                      }),
                        yield (0, p.gX)({
                          [p.ge.PreferenceGoogleSERPEnabled]: !0,
                          [p.ge.PreferenceAutoDownloadEnabled]: !1,
                          [p.ge.Experiments]: {},
                          [p.ge.TasksCount]: 0,
                          [p.ge.FreeTasksResetTime]: null,
                          [p.ge.MIGRATIONS_SCHEMA_VERSION]: Date.now()
                        });
                    });
                  })(),
                  yield i.j(r.zZ()),
                  o.bA("thanks.html", !0)),
                "update" === e.reason &&
                  (yield (0, d.ag)("update"),
                  yield (function () {
                    return c(this, void 0, void 0, function* () {
                      return (
                        (0, d.cM)("Run migrations..."),
                        Promise.all(
                          f.map((e) =>
                            c(this, void 0, void 0, function* () {
                              return navigator.locks.request(s.GH, () =>
                                c(this, void 0, void 0, function* () {
                                  let n;
                                  if (
                                    ((n =
                                      "sync" === e.area
                                        ? yield (0, p.wo)(p.ge.MIGRATIONS_SCHEMA_VERSION, 0)
                                        : yield (0, p.Px)(p.dR.MIGRATIONS_SCHEMA_VERSION, 0)),
                                    e.schema > n)
                                  ) {
                                    (0, d.cM)(`=== migrate ${e.area} ${n} -> ${e.schema}`);
                                    try {
                                      yield e.migrate(),
                                        "sync" === e.area
                                          ? yield (0, p.gX)({ [p.ge.MIGRATIONS_SCHEMA_VERSION]: e.schema })
                                          : yield (0, p.q8)({ [p.dR.MIGRATIONS_SCHEMA_VERSION]: e.schema });
                                    } catch (n) {
                                      (0, d.cM)(`Error while running migration ${e.schema}`, n), yield e.onError(n);
                                    }
                                  }
                                })
                              );
                            })
                          )
                        )
                      );
                    });
                  })(),
                  (0, d.ag)("migrations done")),
                "chrome_update" === e.reason && (yield i.j(r.wq())),
                "shared_module_update" === e.reason && (yield i.j(r.l2())),
                navigator.onLine && (yield (0, s.qs)());
            })
          );
      },
      5517: (e, n, t) => {
        t.d(n, {
          DN: () => h,
          Ll: () => m,
          Oq: () => g,
          P6: () => E,
          QW: () => A,
          R2: () => L,
          _X: () => C,
          cF: () => I,
          g7: () => y,
          hY: () => w,
          pl: () => T,
          vr: () => _,
          xJ: () => x
        });
        var r = t(3495),
          o = t(4215),
          i = t(265),
          d = t(9245),
          p = t(4232),
          a = t(2893),
          f = t(1852),
          s = t(8195),
          c = t(8926),
          l = t(385),
          u = t(4758),
          v = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        const L = "https://task.smallpdf.com",
          m = "MESSAGE_TASK_START",
          g = "ALART_TASK_POLL",
          h = "MESSAGE_TASK_POLL";
        var w, E;
        function _(e, n, t, r = !1) {
          return v(this, void 0, void 0, function* () {
            const o = { id: (0, i.Z)(), withProFeature: r, status: w.CREATED, result: [], toolKey: n, options: t, input: e, error: null };
            return yield (0, d.q8)({ [d.dR.TASK]: o }), o;
          });
        }
        function C() {
          return v(this, void 0, void 0, function* () {
            return (0, d.Px)(d.dR.TASK);
          });
        }
        function x(e) {
          return v(this, void 0, void 0, function* () {
            const n = yield C();
            if (!n) throw (0, u.JQ)();
            return (0, d.q8)({ [d.dR.TASK]: Object.assign(Object.assign({}, n), e) });
          });
        }
        function A(e) {
          return v(this, void 0, void 0, function* () {
            if (!(yield C())) throw (0, u.JQ)();
            yield x({ status: e });
          });
        }
        function T(e, n) {
          return v(this, void 0, void 0, function* () {
            if (!(yield (0, f.tA)())) return;
            const t = yield (0, f.y8)(),
              i = yield (0, f.a1)();
            i && (yield p.j(r.ZJ(t, n, e)), (0, o.bA)(i));
          });
        }
        function y() {
          return v(this, void 0, void 0, function* () {
            const e = yield (0, d.wo)(d.ge.FreeTasksResetTime, null);
            let n = yield (function () {
              return v(this, void 0, void 0, function* () {
                return (0, d.wo)(d.ge.TasksCount, 0);
              });
            })();
            return (
              e || (yield (0, d.gX)({ [d.ge.FreeTasksResetTime]: Date.now() })),
              n < s.b && (n += 1),
              yield (0, d.gX)({ [d.ge.TasksCount]: n }),
              n
            );
          });
        }
        function I(e) {
          return v(this, void 0, void 0, function* () {
            const n = yield (0, l.is)(),
              t = yield (0, a.Eh)(),
              r = {
                tool: e.toolKey,
                auth_token: t ? "" : ".",
                version: 0,
                task_id: e.id,
                input_tokens: [e.input],
                local_token: n.localToken
              };
            switch (e.toolKey) {
              case "compress":
                return Object.assign(
                  Object.assign({}, r),
                  (function (e) {
                    const n = (0, c.RG)(e);
                    return {
                      options: { mode: (0, c.iJ)(e.preset), dpi: null == n ? void 0 : n.dpi, quality: null == n ? void 0 : n.quality }
                    };
                  })(e.options)
                );
              case "pdf-to-excel":
                return Object.assign(Object.assign({}, r), { options: { ocr_type: (o = e.options).ocrType, languages: o.ocrLanguages } });
              case "pdf-to-ppt":
                return Object.assign(Object.assign({}, r), (e.options, { options: {} }));
              case "pdf-to-word":
                return Object.assign(
                  Object.assign({}, r),
                  (function (e) {
                    return { options: { ocr_type: e.ocrType, languages: e.ocrLanguages } };
                  })(e.options)
                );
              case "pdf-to-jpg":
                return Object.assign(
                  Object.assign({}, r),
                  (function (e) {
                    return { options: { mode: e.mode } };
                  })(e.options)
                );
              default:
                return r;
            }
            var o;
          });
        }
        !(function (e) {
          (e.CREATED = "Created"), (e.REQUEST = "Request"), (e.PENDING = "Pending"), (e.SUCCESS = "Success"), (e.FAILURE = "Failure");
        })(w || (w = {})),
          (function (e) {
            (e.AUTO = "auto"), (e.NOTIFICATION = "notification"), (e.RESULT_SCREEN = "result"), (e.UNKNOWN = "unknown");
          })(E || (E = {}));
      },
      7905: (e, n, t) => {
        t.r(n);
        var r = t(3495),
          o = t(9245),
          i = t(4232);
        function d(e) {
          return e instanceof Error;
        }
        var p = t(1852),
          a = t(8612),
          f = t(8562),
          s = t(5517),
          c = t(385),
          l = t(4758),
          u = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        function v(e, n, t, o) {
          return u(this, void 0, void 0, function* () {
            const p = yield (0, s.vr)(e, n, t, o);
            return (
              (function (e = !1) {
                var n;
                u(this, void 0, void 0, function* () {
                  const t = yield (0, s._X)();
                  if (!t) throw (0, l.JQ)();
                  const o = yield (0, s.cF)(t),
                    p = JSON.stringify(o);
                  yield (0, s.QW)(s.hY.REQUEST);
                  try {
                    (0, a.Ng)("1"), yield i.j(r.HN(t.toolKey, t.id, e));
                    const n = yield fetch(`${s.R2}/v1/tasks`, { method: "post", body: p }),
                      o = yield n.json();
                    if (!o.success) throw (0, l.aN)(o.error);
                    yield (0, s.QW)(s.hY.PENDING), L();
                  } catch (e) {
                    yield i.j(r.R1(t.toolKey, t.id)),
                      d(e)
                        ? yield (0, s.xJ)({
                            status: s.hY.FAILURE,
                            error: null === (n = null == e ? void 0 : e.metadata) || void 0 === n ? void 0 : n.processingErrorType
                          })
                        : yield (0, s.xJ)({ status: s.hY.FAILURE, error: l.a$.INTERNAL_ERROR });
                  }
                });
              })(o),
              p
            );
          });
        }
        function L() {
          return u(this, void 0, void 0, function* () {
            navigator.locks.request(f.vW, { ifAvailable: !0 }, (e) =>
              u(this, void 0, void 0, function* () {
                var n, t;
                if ((null == e ? void 0 : e.name) !== f.vW) return;
                const u = yield (0, s._X)();
                if (!u) throw (0, l.JQ)();
                try {
                  const e = yield fetch(`${s.R2}/v1/tasks/${u.id}`),
                    t = yield e.json();
                  if (!(yield (0, s._X)())) throw (0, l.JQ)();
                  if (!e.ok) {
                    if (504 === e.status) return (0, a.Ng)("1"), void self.serviceWorker.postMessage({ type: s.DN });
                    throw (0, l.aN)(l.a$.INTERNAL_ERROR);
                  }
                  if (!t.success) throw (0, l.aN)(l.a$.INTERNAL_ERROR);
                  if (!t.data.result.success) throw (0, l.aN)(t.data.result.error_fe);
                  const d = (0, p.yT)(t.data.result.output_files);
                  if (null === d) throw (0, l.aN)(l.a$.EMPTY_RESULT);
                  (yield (0, c.ck)()) || (yield (0, s.g7)());
                  const f = yield (0, p.f1)(),
                    v = (0, p.F_)(f.name, d);
                  yield (0, p.iR)({
                    name: v,
                    tokens: t.data.result.output_files,
                    size: (null === (n = t.data.result.options) || void 0 === n ? void 0 : n.newSize_0) || null
                  }),
                    yield (0, s.xJ)({ status: s.hY.SUCCESS, result: [] }),
                    yield (0, a.xk)();
                  (yield (0, o.wo)(o.ge.PreferenceAutoDownloadEnabled, !1)) && (yield (0, s.pl)(!0, s.P6.AUTO)),
                    yield i.j(r.L_(u.toolKey, u.id, d));
                } catch (e) {
                  (0, a.Hx)(),
                    yield i.j(r.R1(u.toolKey, u.id)),
                    d(e)
                      ? yield (0, s.xJ)({
                          status: s.hY.FAILURE,
                          error: null === (t = e.metadata) || void 0 === t ? void 0 : t.processingErrorType
                        })
                      : yield (0, s.xJ)({ status: s.hY.FAILURE, error: l.a$.INTERNAL_ERROR });
                }
              })
            );
          });
        }
        var m,
          g = t(8926),
          h = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        !(function (e) {
          (e.SOLID = "solid-ocr"), (e.NONE = "");
        })(m || (m = {}));
        var w,
          E = function (e, n, t, r) {
            return new (t || (t = Promise))(function (o, i) {
              function d(e) {
                try {
                  a(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function p(e) {
                try {
                  a(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? o(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(d, p);
              }
              a((r = r.apply(e, n || [])).next());
            });
          };
        !(function (e) {
          (e.PAGES = "pages"), (e.EXTRACT = "extract");
        })(w || (w = {}));
        var _ = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function d(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function p(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(d, p);
            }
            a((r = r.apply(e, n || [])).next());
          });
        };
        var C = function (e, n, t, r) {
          return new (t || (t = Promise))(function (o, i) {
            function d(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function p(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var n;
              e.done
                ? o(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(d, p);
            }
            a((r = r.apply(e, n || [])).next());
          });
        };
        chrome.alarms.create(s.Oq, { when: Date.now(), periodInMinutes: 1 }),
          chrome.alarms.onAlarm.addListener((e) =>
            C(void 0, void 0, void 0, function* () {
              if (e.name === s.Oq) {
                const e = yield (0, s._X)();
                (null == e ? void 0 : e.status) === s.hY.PENDING && L();
              }
            })
          ),
          addEventListener("message", (e) =>
            C(void 0, void 0, void 0, function* () {
              var n, t, r;
              if (
                ((null === (n = e.data) || void 0 === n ? void 0 : n.type) === s.DN && L(),
                (null === (t = e.data) || void 0 === t ? void 0 : t.type) === s.Ll)
              ) {
                const n = null === (r = e.data) || void 0 === r ? void 0 : r.payload;
                if (!n) return;
                const { toolKey: t, fileHandle: o, toolOptions: i } = n;
                if (!t || !o) return;
                switch (t) {
                  case "compress":
                    !(function (e, n) {
                      h(this, void 0, void 0, function* () {
                        return v(e.token, "compress", n, (null == n ? void 0 : n.preset) === g.af.HIGH);
                      });
                    })(o, i);
                    break;
                  case "pdf-to-word":
                    !(function (e, n) {
                      E(this, void 0, void 0, function* () {
                        return v(e.token, "pdf-to-word", n, n.ocrType === m.SOLID);
                      });
                    })(o, i);
                    break;
                  case "pdf-to-excel":
                    !(function (e, n) {
                      E(this, void 0, void 0, function* () {
                        return v(e.token, "pdf-to-excel", n, n.ocrType === m.SOLID);
                      });
                    })(o, i);
                    break;
                  case "pdf-to-ppt":
                    !(function (e, n) {
                      E(this, void 0, void 0, function* () {
                        return v(e.token, "pdf-to-ppt", n, !1);
                      });
                    })(o, i);
                    break;
                  case "pdf-to-jpg":
                    !(function (e, n) {
                      _(this, void 0, void 0, function* () {
                        return v(e.token, "pdf-to-jpg", n, n.mode === w.EXTRACT);
                      });
                    })(o, i);
                }
              }
            })
          );
      },
      1011: (e, n, t) => {
        t.d(n, { LK: () => o, an: () => d, i4: () => i });
        const r = 36e5;
        function o(e) {
          return 6e4 * e;
        }
        function i(e) {
          return e * r;
        }
        function d(e) {
          return 864e5 * e;
        }
      },
      8926: (e, n, t) => {
        var r, o;
        t.d(n, { RG: () => i, af: () => o, iJ: () => d }),
          (function (e) {
            (e.FORCE = "force"), (e.AUTO = "auto"), (e.CUSTOM = "custom"), (e.OFF = "off");
          })(r || (r = {})),
          (function (e) {
            (e.HIGH = "COMPRESS_OPTION_HIGH"), (e.BALANCED = "COMPRESS_OPTION_BALANCED"), (e.CUSTOM = "COMPRESS_OPTION_CUSTOM");
          })(o || (o = {}));
        function i(e) {
          var n, t;
          switch (e.preset) {
            case o.HIGH:
            case o.BALANCED:
              return;
            case o.CUSTOM: {
              if (!e) return { quality: 50, dpi: 300 };
              let r = (null === (n = null == e ? void 0 : e.values) || void 0 === n ? void 0 : n.quality) || 50;
              return (
                (r = r > 100 ? 100 : r),
                (r = r < 0 ? 0 : r),
                { quality: r, dpi: (null === (t = null == e ? void 0 : e.values) || void 0 === t ? void 0 : t.dpi) || 150 }
              );
            }
            default:
              return;
          }
        }
        function d(e) {
          switch (e) {
            case o.HIGH:
              return r.FORCE;
            case o.BALANCED:
              return r.AUTO;
            case o.CUSTOM:
              return r.CUSTOM;
            default:
              return r.OFF;
          }
        }
      },
      385: (e, n, t) => {
        t.d(n, { ck: () => d, is: () => i });
        var r = t(9245),
          o =
            (t(8562),
            function (e, n, t, r) {
              return new (t || (t = Promise))(function (o, i) {
                function d(e) {
                  try {
                    a(r.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function p(e) {
                  try {
                    a(r.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  var n;
                  e.done
                    ? o(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(d, p);
                }
                a((r = r.apply(e, n || [])).next());
              });
            });
        const i = () =>
          o(void 0, void 0, void 0, function* () {
            const e = yield (0, r.Px)([r.dR.LOCAL_TOKEN, r.dR.USER_COUNTRY_GEO_IP, r.dR.USER_PROFILE, r.dR.USER_ACTIVE_PRO, r.dR.USER_RT]);
            return {
              countryGeoIP: e[r.dR.USER_COUNTRY_GEO_IP],
              localToken: e[r.dR.LOCAL_TOKEN],
              profile: e[r.dR.USER_PROFILE],
              activePro: e[r.dR.USER_ACTIVE_PRO],
              rt: e[r.dR.USER_RT]
            };
          });
        function d() {
          return o(this, void 0, void 0, function* () {
            return (0, r.Px)(r.dR.USER_ACTIVE_PRO, !1);
          });
        }
      },
      8750: (e, n, t) => {
        t.r(n);
        var r = t(9245);
        chrome.runtime.onInstalled.addListener(() => {
          (0, r.gX)({ [r.ge.PreferenceGoogleSERPEnabled]: !0 }), (0, r.gX)({ [r.ge.PreferenceAutoDownloadEnabled]: !1 });
        });
      },
      9305: (e, n, t) => {
        t.d(n, { Yz: () => a, rA: () => p });
        class r {
          constructor(e, n, t, r) {
            (this.r = e), (this.g = n), (this.b = t), (this.a = r);
          }
          toString() {
            return this.value || (this.value = `rgba(${this.r},${this.g},${this.b},${this.a})`), this.value;
          }
        }
        function o(e, n) {
          const t = parseInt(e, 16);
          return Number.isNaN(t) ? n : t;
        }
        function i(e, n, t, o = 1) {
          return new r(e, n, t, o);
        }
        function d(e) {
          const n = o(e.substr(1, 2), 255),
            t = o(e.substr(3, 2), 255),
            i = o(e.substr(5, 2), 255),
            d = o(e.substr(7, 2), 1);
          return new r(n, t, i, d);
        }
        d("#0055FF"),
          d("#0048D9"),
          d("#003CB2"),
          d("#003399"),
          d("#00194C"),
          d("#F2F6FF"),
          d("#E5EEFF"),
          d("#CCDDFF"),
          d("#B3CCFF"),
          d("#1A1A1A"),
          d("#FAFAFA"),
          d("#F4F4F4"),
          d("#E8E8E8"),
          d("#DDDDDD"),
          d("#BABABA"),
          d("#A3A3A3"),
          d("#757575"),
          d("#5E5E5E"),
          d("#3C3C3C"),
          d("#FFFFFF"),
          d("#000000"),
          d("#F23030"),
          d("#D92B2B"),
          d("#BF2626"),
          d("#911D1D"),
          d("#FEEBEB"),
          d("#FCD6D6"),
          d("#FAACAC");
        const p = d("#FF8000"),
          a =
            (d("#E57300"),
            d("#CC6600"),
            d("#FFF3E6"),
            d("#FFCC99"),
            d("#FFB700"),
            d("#E5A500"),
            d("#CC9200"),
            d("#996E00"),
            d("#FFF8E6"),
            d("#FFF1CC"),
            d("#FFE299"),
            d("#00CC44"));
        d("#00B23B"),
          d("#009933"),
          d("#007A29"),
          d("#E6FAED"),
          d("#CCF5DA"),
          d("#99EBB4"),
          d("#0FC0C5"),
          d("#0DA7AB"),
          d("#0B8E91"),
          d("#097376"),
          d("#E7F9FA"),
          d("#CFF2F3"),
          d("#9FE6E8"),
          d("#3D99F5"),
          d("#3789DB"),
          d("#3079C2"),
          d("#255C93"),
          d("#ECF5FE"),
          d("#D8EBFD"),
          d("#B1D6FB"),
          d("#7961F2"),
          d("#6C57D9"),
          d("#604DBF"),
          d("#493A91"),
          d("#F2F0FE"),
          d("#E4DFFC"),
          d("#C9C0FA"),
          d("#E667E6"),
          d("#CC5BCC"),
          d("#B250B2"),
          d("#8A3E8A"),
          d("#FDF0FD"),
          d("#F5C2F5"),
          d("#FF5975"),
          d("#E55069"),
          d("#CC475E"),
          d("#993546"),
          d("#FFEFF2"),
          d("#FFBDC8"),
          d("#E32B24"),
          d("#C92620"),
          d("#B0211C"),
          d("#0055FF"),
          d("#0048D9"),
          d("#003CB2"),
          d("#FFB700"),
          d("#E5A500"),
          d("#CC9200"),
          d("#996E00"),
          d("#00D958"),
          d("#00BF4D"),
          d("#00A643"),
          d("#008034"),
          d("#0061FF"),
          d("#1977F3"),
          d("#4885ED"),
          d("#DB3236"),
          d("#C32AA3"),
          d("#0077B5"),
          d("#1ED760"),
          d("#1DA1F2"),
          d("#25D366"),
          d("#D9252A"),
          i(26, 26, 26, 0.8),
          i(26, 26, 26, 0.5),
          i(26, 26, 26, 0.3),
          i(26, 26, 26, 0.1);
      },
      4758: (e, n, t) => {
        t.d(n, {
          J: () => p,
          JQ: () => u,
          Ld: () => r,
          Lv: () => m,
          Pz: () => l,
          Tr: () => d,
          a$: () => i,
          aN: () => v,
          dF: () => L,
          ll: () => o,
          oi: () => c,
          qF: () => a,
          wt: () => s,
          xc: () => f
        });
        const r = "ERROR_REFRESH_TOKEN_EXPIRED",
          o = "ERROR_REFRESH_TOKEN_INVALID";
        var i;
        function d({ message: e, name: n, severity: t, cause: r, metadata: o }) {
          const i = new Error(e);
          return (
            void 0 !== n && Object.defineProperty(i, "name", { value: n, enumerable: !1, writable: !0 }),
            void 0 !== r && (i.cause = r),
            void 0 !== t && (i.severity = t),
            void 0 !== o && (i.metadata = Object.assign({}, o)),
            i
          );
        }
        function p() {
          return d({ name: "InvalidCredentialsError", message: "Invalid credentials" });
        }
        function a() {
          return d({ name: "INTERNAL_SERVER_ERROR", message: "Internal Server Error" });
        }
        function f() {
          return d({ name: "UnauthorizedError", message: "Unauthorized request" });
        }
        function s() {
          return d({ name: "TooManyRequestsError", message: "Too many requests" });
        }
        function c(e) {
          return d({ name: "UnexpectedAPIResponseError", message: "Unexpected API response", metadata: { payload: e } });
        }
        function l(e) {
          return d({ name: "UnexpectedAPICodeError", message: `Unexpected API code: ${e}`, metadata: { code: e } });
        }
        function u() {
          return d({ name: "ERROR_TASK_NOT_FOUND", message: "Task not found" });
        }
        function v(e) {
          return d({ name: "ERROR_PROCESSING", message: "Task could not complete due to an error", metadata: { processingErrorType: e } });
        }
        function L() {
          return d({ name: "ERROR_DB_FILE_NOT_FOUND", message: "File not found in db" });
        }
        function m() {
          return d({ name: "ERROR_UPLOAD", message: "Upload failed" });
        }
        !(function (e) {
          (e.TIMEOUT = "timeout"),
            (e.FAILED = "failed"),
            (e.PASSWORD = "password"),
            (e.SCAN = "scan"),
            (e.CORRUPTED_FILE = "corrupt_pdf"),
            (e.EMPTY_FILE = "no_pages_in_pdf"),
            (e.INTERNAL_ERROR = "internal_server_error"),
            (e.INPUT = "input"),
            (e.INPUT_TOKENS = "input_tokens"),
            (e.EMPTY_INPUT_TOKENS = "empty_input_tokens"),
            (e.INVALID_OPTIONS = "invalid_options"),
            (e.MISSING_PASSWORD = "password-not-set"),
            (e.SOURCE_NOT_READABLE = "pdf_source_not_readable"),
            (e.SOURCE_EMPTY = "pdf_source_empty"),
            (e.EMPTY_RESULT = "no_result");
        })(i || (i = {}));
      },
      5928: (e, n, t) => {
        t.d(n, { Lr: () => r });
        t(8247), t(4758);
        var r;
        !(function (e) {
          (e.IDLE = "Idle"), (e.PENDING = "Pending"), (e.COMPLETED = "Completed"), (e.CANCELED = "Canceled"), (e.FAILED = "Failed");
        })(r || (r = {}));
      },
      1899: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M4.54616461,4.54616461 L6.40962346,12 L4.54616461,19.4538354 L12,17.5903765 L19.4538354,19.4538354 L17.5903765,12 L19.4538354,4.54616461 L12,6.40962346 L4.54616461,4.54616461 Z M3,3 L12,5.25 L21,3 L18.75,12 L21,21 L12,18.75 L3,21 L5.25,12 L3,3 Z"/>\n</svg>\n';
      },
      7861: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M18,7 L13.2286363,7 L14.5,8.1990569 L13.6507576,9 L11,6.5 L13.6507576,4 L14.5,4.8009431 L13.2286363,6 L18,6 L19,6 L19,11 L18,11 L18,7 Z M6,17 L10.7713637,17 L9.5,15.8009431 L10.3492424,15 L13,17.5 L10.3492424,20 L9.5,19.1990569 L10.7713637,18 L6,18 L5,18 L5,13 L6,13 L6,17 Z M3,3 L10,3 L10,12 L3,12 L3,3 Z M4,11 L9,11 L9,4 L4,4 L4,11 Z M14,12 L21,12 L21,21 L14,21 L14,12 Z M15,20 L20,20 L20,13 L15,13 L15,20 Z"/>\n</svg>\n';
      },
      3850: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M8,7 L8,4 L16,4 L16,7 L20,7 L20,8 L17.9340659,8 L17.1428571,20 L6.85714286,20 L6.06593407,8 L4,8 L4,7 L8,7 Z M16,8 L8,8 L7,8 L7.73708433,19 L16.2629157,19 L17,8 L16,8 Z M11.5,9 L12.5,9 L12.5,18 L11.5,18 L11.5,9 Z M9,9 L10,9 L10,18 L9,18 L9,9 Z M14,9 L15,9 L15,18 L14,18 L14,9 Z M9,5 L9,7 L15,7 L15,5 L9,5 Z"/>\n</svg>\n';
      },
      8405: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M8,18 L8,13 L6,13 L6,12 L11,12 L11,13 L9,13 L9,18 L11,18 L11,19 L6,19 L6,18 L8,18 Z M18,20 L18,9 L19,9 L19,21 L4,21 L4,3 L16,3 L16,4 L5,4 L5,20 L18,20 Z M12,10 L19,3 L21,5 L14,12 L12,12 L12,10 Z"/>\n</svg>\n';
      },
      9269: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L14,8 L14,16 L14,17 L11,17 L11,20 L20,20 Z M21,20 L21,21 L10,21 L10,20 L10,17 L3,17 L3,16 L3,4 L3,3 L14,3 L14,4 L14,7 L21,7 L21,8 L21,20 Z M13,16 L13,4 L4,4 L4,16 L13,16 Z M9,14 L11,14 L11,12 L9,12 L9,14 Z M8,14 L8,12 L6,12 L6,14 L8,14 Z M9,9 L9,11 L11,11 L11,9 L9,9 Z M8,9 L6,9 L6,11 L8,11 L8,9 Z M12,14 L12,15 L5,15 L5,14 L5,8 L6,8 L12,8 L12,9 L12,14 Z"/>\n</svg>\n';
      },
      1215: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,17.1833491 L18.9232994,16.0660185 L15.4050892,18.5 L14,17.0418887 L14.0403655,17 L10.988368,17 L10,17.7161353 L10,20 L20,20 L20,17.1833491 Z M20,15.4622643 L20,8 L15,8 L15,16 L15,16.3585396 L15.5545169,16.9339815 L19.072727,14.5 L20,15.4622643 Z M21,20 L21,21 L9,21 L9,20 L9,17 L3,17 L3,16 L3,4 L3,3 L15,3 L15,4 L15,7 L21,7 L21,8 L21,20 Z M14,16 L14,4 L4,4 L4,16 L14,16 Z M17.5,14 C16.6715729,14 16,13.3284271 16,12.5 C16,11.6715729 16.6715729,11 17.5,11 C18.3284271,11 19,11.6715729 19,12.5 C19,13.3284271 18.3284271,14 17.5,14 Z"/>\n</svg>\n';
      },
      5802: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L15,8 L15,16 L15,17 L10,17 L10,20 L20,20 Z M21,20 L21,21 L9,21 L9,20 L9,17 L3,17 L3,16 L3,4 L3,3 L15,3 L15,4 L15,7 L21,7 L21,8 L21,20 Z M14,16 L14,13.6263753 L12.9568458,12.542563 L9.49546776,14.9400889 L7.1878824,12.542563 L4,14.750652 L4,16 L14,16 Z M14,4 L4,4 L4,13.3099182 L7.33489622,11 L9.64248158,13.3975259 L13.1038596,11 L14,11.9310684 L14,4 Z M11.5,10 C10.6715729,10 10,9.32842712 10,8.5 C10,7.67157288 10.6715729,7 11.5,7 C12.3284271,7 13,7.67157288 13,8.5 C13,9.32842712 12.3284271,10 11.5,10 Z"/>\n</svg>\n';
      },
      387: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M14,15 L14,12 L15,12 L15,15 L18,15 L18,16 L15,16 L15,19 L14,19 L14,16 L11,16 L11,15 L14,15 Z M15,7 L15,3 L4,3 L4,16 L8,16 L8,7 L15,7 Z M16,7 L21,7 L21,22 L8,22 L8,17 L3,17 L3,2 L16,2 L16,7 Z M9,8 L9,21 L20,21 L20,8 L9,8 Z"/>\n</svg>\n';
      },
      5519: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L14,8 L14,12 L19,12 L19,13 L19,18 L19,19 L12,19 L12,18 L12,17 L11,17 L11,20 L20,20 Z M21,20 L21,21 L10,21 L10,20 L10,17 L3,17 L3,16 L3,4 L3,3 L14,3 L14,4 L14,7 L21,7 L21,8 L21,20 Z M13,15 L13,4 L4,4 L4,16 L13,16 L13,15 Z M14,15 L15,15 L15,13 L14,13 L14,15 Z M14,16 L14,17 L13,17 L13,18 L15,18 L15,16 L14,16 Z M16,18 L18,18 L18,16 L16,16 L16,18 Z M16,13 L16,15 L18,15 L18,13 L16,13 Z"/>\n</svg>\n';
      },
      471: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M10,21 L9,21 L9,17 L3,17 L3,16 L3,4 L3,3 L15,3 L15,4 L15,6 L20,6 L21,6 L21,21 L20,21 L10,21 Z M10,20 L20,20 L20,7 L15,7 L15,11 C17.209139,11 19,12.790861 19,15 C19,17.209139 17.209139,19 15,19 C13.5194353,19 12.2267476,18.1956027 11.5351288,17 L10,17 L10,20 Z M14,6 L14,4 L4,4 L4,16 L14,16 L14,7 L14,6 Z M15,12 L15,14.5 L17.9585208,14.5 C17.7204817,13.0811433 16.4864981,12 15,12 Z M15,15.5 L15,16 L15,17 L12.7633794,17 C13.3228061,17.6257453 14.1284363,18 15,18 C16.4864981,18 17.7204817,16.9188567 17.9585208,15.5 L15,15.5 Z"/>\n</svg>\n';
      },
      1593: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L14,8 L14,13 L19,13 L19,14 L14,14 L14,15 L19,15 L19,16 L14,16 L14,17 L19,17 L19,18 L12,18 L12,17 L11,17 L11,20 L20,20 Z M21,20 L21,21 L10,21 L10,20 L10,17 L3,17 L3,16 L3,4 L3,3 L14,3 L14,4 L14,7 L21,7 L21,8 L21,20 Z M13,15 L13,4 L4,4 L4,16 L13,16 L13,15 Z"/>\n</svg>\n';
      },
      1432: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M11.8292943,12 L9,12 L8.5,12 L8.5,8.04147922 C7.08114333,8.27951827 6,9.51350186 6,11 C6,12.6568542 7.34314575,14 9,14 C10.3062188,14 11.4174579,13.1651924 11.8292943,12 Z M12,11 C12,9.51350186 10.9188567,8.27951827 9.5,8.04147922 L9.5,11 L12,11 Z M20,20 L20,7 L15,7 L15,16 L15,17 L10,17 L10,20 L20,20 Z M21,20 L21,21 L9,21 L9,20 L9,17 L3,17 L3,16 L3,4 L3,3 L15,3 L15,4 L15,6 L21,6 L21,7 L21,20 Z M14,16 L14,4 L4,4 L4,16 L14,16 Z M9,15 C6.790861,15 5,13.209139 5,11 C5,8.790861 6.790861,7 9,7 C11.209139,7 13,8.790861 13,11 C13,13.209139 11.209139,15 9,15 Z"/>\n</svg>\n';
      },
      8786: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M8.28997343,17.2429821 C9.19593898,18.1375786 10.166301,18.8391859 11.1333007,19.367903 C11.4889618,19.5623644 11.7899577,19.7058067 12.0189601,19.803413 C12.2446403,19.7148505 12.5410138,19.583361 12.8911493,19.4029629 C13.852071,18.9078734 14.8166273,18.2358264 15.7176224,17.3627445 C18.1377542,15.0175892 19.6610011,11.690045 19.854971,7.1471145 C19.2366509,6.91524436 18.5737541,6.66665808 16.1049863,5.74087016 L11.6049865,4.05337034 L12.3950142,4.05337033 L7.89501403,5.74087034 L4.8012639,6.9010266 C4.43875712,7.03696663 4.29612784,7.09045261 4.14586918,7.1467996 C4.34323673,11.5516807 5.86673089,14.8501492 8.28997343,17.2429821 Z M3,6.375 C2.99999995,6.37500005 12,3 12,3 C12,3 21,6.37499955 21,6.375 C20.8910799,18.4364737 12,21 12,21 C12,21 3.10658955,18.0970558 3,6.375 Z"/>\n</svg>\n';
      },
      4661: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M11.068085,18.8082824 L10,17.8009431 L10.8492424,17 L13.5,19.5 L10.8492424,22 L10,21.1990569 L11.3013692,19.971701 C6.93375013,19.6163834 3.5,15.9591894 3.5,11.5 L4.63333333,11.5 C4.63333333,15.2528284 7.43955627,18.3502282 11.068085,18.8082824 Z M12.8972064,4.68741965 L14.5,6.1990569 L13.6507576,7 L11,4.5 L12,3.5568734 L12,3.5 C12.0200438,3.5 12.0400714,3.50006938 12.0600826,3.5002079 L13.6507576,2 L14.5,2.8009431 L13.5994694,3.65025748 C17.5292545,4.39851286 20.5,7.85232903 20.5,12 L19.3666667,12 C19.3666667,8.23521439 16.5425329,5.13004057 12.8972064,4.68741965 Z M8,8 L17,8 L17,16 L8,16 L8,8 Z M9,15 L16,15 L16,9 L9,9 L9,15 Z"/>\n</svg>\n';
      },
      6070: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M7.35355339,16.3535534 C7.15829124,16.5488155 6.84170876,16.5488155 6.64644661,16.3535534 C6.45118446,16.1582912 6.45118446,15.8417088 6.64644661,15.6464466 L9.64644661,12.6464466 C9.903582,12.3893112 10.3404805,12.4839475 10.4681646,12.8244383 L11.2469226,14.9011264 L12.7226499,13.9173082 C12.9601836,13.7589524 13.2818682,13.8312884 13.4287465,14.0760855 L14.1905269,15.3457195 L15.7763932,14.5527864 C16.0233825,14.4292918 16.323719,14.529404 16.4472136,14.7763932 C16.5707082,15.0233825 16.470596,15.323719 16.2236068,15.4472136 L14.2236068,16.4472136 C13.9899215,16.5640563 13.7056749,16.4812835 13.5712535,16.2572479 L12.8410428,15.04023 L11.2773501,16.0826918 C11.0093945,16.2613289 10.6449121,16.1437662 10.5318354,15.8422284 L9.8044835,13.9026233 L7.35355339,16.3535534 Z M18,20 L18,9 L19,9 L19,21 L4,21 L4,3 L16,3 L16,4 L5,4 L5,20 L18,20 Z M6,18 L17,18 L17,19 L6,19 L6,18 Z M12,10 L19,3 L21,5 L14,12 L12,12 L12,10 Z"/>\n</svg>\n';
      },
      6232: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M11.355763,11.6544154 L8.14285714,3 L8.88064959,3.37144149 C9.42498837,3.64548876 9.84393276,4.11140048 10.0534237,4.67569377 L12,9.91907196 L13.9465763,4.67569377 C14.1560672,4.11140048 14.5750116,3.64548876 15.1193504,3.37144149 L15.8571429,3 L12.644237,11.6544154 L14.162376,15.7437368 C14.5691123,14.9972491 15.2466804,14.3898078 16.1208753,14.0778576 C18.0059605,13.4051785 20.0915013,14.3612388 20.7790611,16.2132782 C21.4666209,18.0653175 20.4958347,20.1120063 18.6107495,20.7846854 C16.7256643,21.4573645 14.6401235,20.5013042 13.9525637,18.6492648 L12,13.3897588 L10.0474363,18.6492648 C9.35987648,20.5013042 7.27433566,21.4573645 5.38925047,20.7846854 C3.50416527,20.1120063 2.53337912,18.0653175 3.22093891,16.2132782 C3.9084987,14.3612388 5.99403952,13.4051785 7.87912472,14.0778576 C8.75331964,14.3898078 9.43088769,14.9972491 9.83762405,15.7437368 L11.355763,11.6544154 Z M5.80422951,19.6668808 C7.06095297,20.1153335 8.45131352,19.47796 8.90968671,18.2432671 C9.36805991,17.0085742 8.72086914,15.644115 7.46414568,15.1956622 C6.20742221,14.7472095 4.81706166,15.384583 4.35868847,16.619276 C3.90031528,17.8539689 4.54750605,19.218428 5.80422951,19.6668808 Z M18.1957705,19.6668808 C19.452494,19.218428 20.0996847,17.8539689 19.6413115,16.619276 C19.1829383,15.384583 17.7925778,14.7472095 16.5358543,15.1956622 C15.2791309,15.644115 14.6319401,17.0085742 15.0903133,18.2432671 C15.5486865,19.47796 16.939047,20.1153335 18.1957705,19.6668808 Z"/>\n</svg>\n';
      },
      7245: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,8 C20,5.85222597 18.147774,4 16,4 C13.852226,4 12,5.85222597 12,8 L12,10 L17,10 L17,21 L3,21 L3,10 L11,10 L11,8 C11,5.23857625 13.2385763,3 16,3 C18.7614237,3 21,5.23857625 21,8 L21,10 L20,10 L20,8 Z M4,20 L16,20 L16,11 L4,11 L4,20 Z"/>\n</svg>\n';
      },
      5487: (e) => {
        e.exports =
          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" fill="#fff">\n  <path d="M20,20 L20,8 L14,8 L14,16 L14,17 L11,17 L11,20 L20,20 Z M21,20 L21,21 L10,21 L10,20 L10,17 L3,17 L3,16 L3,4 L3,3 L14,3 L14,4 L14,7 L21,7 L21,8 L21,20 Z M13,16 L13,4 L4,4 L4,16 L13,16 Z M5,13 L12,13 L12,14 L5,14 L5,13 Z M5,11 L12,11 L12,12 L5,12 L5,11 Z M5,9 L12,9 L12,10 L5,10 L5,9 Z"/>\n</svg>\n';
      },
      6071: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#F23030"/>\n<path d="M5.68718 5.68718L11.8787 7.23507L12 7.26539L12.1213 7.23507L18.3128 5.68718L16.7649 11.8787L16.7346 12L16.7649 12.1213L18.3128 18.3128L12.1213 16.7649L12 16.7346L11.8787 16.7649L5.68718 18.3128L7.23507 12.1213L7.26539 12L7.23507 11.8787L5.68718 5.68718Z" stroke="white"/>\n</svg>\n';
      },
      7634: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#0FC0C5"/>\n<path d="M8.5 8V5.5H15.5V8" stroke="white"/>\n<path d="M5 8.5H19" stroke="white"/>\n<path d="M8.5 18.5L7.5 10.5001L16.5 10.5L15.5 18.5H8.5Z" stroke="white"/>\n<path d="M10.5 12V16" stroke="white"/>\n<path d="M13.5 12V16" stroke="white"/>\n</svg>\n';
      },
      2732: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#0FC0C5"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10.4444L17.4444 5L19 6.55556L13.5556 12H12V10.4444Z" fill="white"/>\n<path d="M15 5.5H5.5V18.5H15.5V12" stroke="white"/>\n<path d="M7 12.5H10" stroke="white"/>\n<path d="M7 16.5H10" stroke="white"/>\n<path d="M8.5 12.5V16.5" stroke="white"/>\n</svg>\n';
      },
      7430: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#00CC44"/>\n<path d="M10.1416 11.6667L5 19H8.63422L11.9174 14.1569L15.1386 19H19L13.8584 11.6863L18.587 5H15.0354L12.0413 9.47059L9.15044 5H5.39233L10.1416 11.6667Z" fill="white"/>\n</svg>\n';
      },
      3302: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<rect width="24" height="24" rx="4" fill="#0FC0C5"/>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H18V10H14V5ZM13 4H14H18H19V5V10V11H18H14H13V10V5V4ZM19 13H13V20H19V13ZM10 14H6V19H10V14ZM6 13H5V14V19V20H6H10H11V19V14V13H10H6ZM11 4H5V11H11V4Z" fill="white"/>\n</svg>\n';
      },
      6628: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#7961F2"/>\n<path d="M10 16H6V5H14V8" stroke="white"/>\n<path d="M10.5 8.5H18.5V18.5H10.5V8.5Z" stroke="white"/>\n<path d="M14.5 11V16" stroke="white"/>\n<path d="M12 13.5H17" stroke="white"/>\n</svg>\n';
      },
      1937: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#F23030"/>\n<rect x="5.5" y="5.5" width="4" height="6" stroke="white"/>\n<rect x="14.5" y="12.5" width="4" height="6" stroke="white"/>\n<path d="M12 7.00014L11.6464 6.64658L11.2929 7.00014L11.6464 7.35369L12 7.00014ZM17 7H17.5V6.49999L17 6.5L17 7ZM13.9091 5.79813L14.2627 5.44458L13.5556 4.73747L13.202 5.09103L13.9091 5.79813ZM13.202 8.90924L13.5556 9.2628L14.2627 8.55569L13.9091 8.20214L13.202 8.90924ZM12 7.50014L17 7.5L17 6.5L12 6.50014L12 7.50014ZM16.5 7V11H17.5V7H16.5ZM12.3536 7.35369L13.9091 5.79813L13.202 5.09103L11.6464 6.64658L12.3536 7.35369ZM11.6464 7.35369L13.202 8.90924L13.9091 8.20214L12.3536 6.64658L11.6464 7.35369Z" fill="white"/>\n<path d="M12 17L12.3536 17.3536L12.7071 17L12.3536 16.6464L12 17ZM7 17L6.5 17L6.49999 17.5H7V17ZM10.0909 18.202L9.73734 18.5556L10.4444 19.2627L10.798 18.9091L10.0909 18.202ZM10.798 15.0909L10.4444 14.7373L9.73734 15.4444L10.0909 15.798L10.798 15.0909ZM12 16.5H7V17.5H12V16.5ZM7.5 17L7.50007 13L6.50007 13L6.5 17L7.5 17ZM11.6464 16.6464L10.0909 18.202L10.798 18.9091L12.3536 17.3536L11.6464 16.6464ZM12.3536 16.6464L10.798 15.0909L10.0909 15.798L11.6464 17.3536L12.3536 16.6464Z" fill="white"/>\n</svg>\n';
      },
      7071: (e) => {
        e.exports =
          '<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 4a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4Z" fill="#0C4"/><path d="M10.142 11.667 5 19h3.634l3.283-4.843L15.14 19H19l-5.142-7.314L18.587 5h-3.552l-2.994 4.47L9.151 5H5.391l4.75 6.667Z" fill="#fff"/></svg>';
      },
      2536: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FF8000"/>\n<path d="M9.31107 11.5882V7.39216H11.884C12.2636 7.39216 12.6292 7.4183 12.9807 7.47059C13.3322 7.52288 13.6415 7.62745 13.9086 7.78431C14.1757 7.9281 14.3866 8.13725 14.5413 8.41176C14.71 8.68627 14.7944 9.04575 14.7944 9.4902C14.7944 9.93464 14.71 10.2941 14.5413 10.5686C14.3866 10.8431 14.1757 11.0588 13.9086 11.2157C13.6415 11.3595 13.3322 11.4575 12.9807 11.5098C12.6292 11.5621 12.2636 11.5882 11.884 11.5882H9.31107ZM6 5V19H9.31107V13.9804H12.7909C13.7329 13.9804 14.5343 13.8562 15.1951 13.6078C15.8559 13.3464 16.3902 13.0065 16.7979 12.5882C17.2197 12.1699 17.522 11.6928 17.7047 11.1569C17.9016 10.6078 18 10.0523 18 9.4902C18 8.91503 17.9016 8.35948 17.7047 7.82353C17.522 7.28758 17.2197 6.81046 16.7979 6.39216C16.3902 5.97386 15.8559 5.64052 15.1951 5.39216C14.5343 5.13072 13.7329 5 12.7909 5H6Z" fill="white"/>\n</svg>\n';
      },
      9619: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#3D99F5"/>\n<path d="M17.3156 19L21 5H18.0448L15.7996 14.6471H15.7612L13.42 5H10.5991L8.21962 14.5294H8.18124L6.01279 5H3L6.62687 19H9.67804L11.9616 9.47059H12L14.322 19H17.3156Z" fill="white"/>\n</svg>\n';
      },
      5971: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FF8000"/>\n<path d="M9.31107 11.5882V7.39216H11.884C12.2636 7.39216 12.6292 7.4183 12.9807 7.47059C13.3322 7.52288 13.6415 7.62745 13.9086 7.78431C14.1757 7.9281 14.3866 8.13725 14.5413 8.41176C14.71 8.68627 14.7944 9.04575 14.7944 9.4902C14.7944 9.93464 14.71 10.2941 14.5413 10.5686C14.3866 10.8431 14.1757 11.0588 13.9086 11.2157C13.6415 11.3595 13.3322 11.4575 12.9807 11.5098C12.6292 11.5621 12.2636 11.5882 11.884 11.5882H9.31107ZM6 5V19H9.31107V13.9804H12.7909C13.7329 13.9804 14.5343 13.8562 15.1951 13.6078C15.8559 13.3464 16.3902 13.0065 16.7979 12.5882C17.2197 12.1699 17.522 11.6928 17.7047 11.1569C17.9016 10.6078 18 10.0523 18 9.4902C18 8.91503 17.9016 8.35948 17.7047 7.82353C17.522 7.28758 17.2197 6.81046 16.7979 6.39216C16.3902 5.97386 15.8559 5.64052 15.1951 5.39216C14.5343 5.13072 13.7329 5 12.7909 5H6Z" fill="white"/>\n</svg>\n';
      },
      215: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FF5975"/>\n<path d="M11.8748 5.58096L12 5.534L12.1252 5.58096L12.9182 5.87832L15.3244 6.78066L17.7307 7.68301L18.4936 7.96909C18.3717 12.3117 16.7249 14.9298 15.1218 16.4699C14.2936 17.2655 13.4687 17.7813 12.8535 18.0971C12.5461 18.2549 12.2921 18.3622 12.1177 18.4294C12.0768 18.4451 12.0403 18.4586 12.0086 18.47C11.9761 18.4572 11.9385 18.4419 11.8963 18.4242C11.7209 18.3505 11.4657 18.2339 11.1572 18.0657C10.5395 17.7291 9.71169 17.188 8.88098 16.3743C7.27294 14.7991 5.62989 12.1803 5.50664 7.96901L6.26931 7.68301L8.67556 6.78066L11.0818 5.87832L11.8748 5.58096Z" stroke="white"/>\n</svg>\n';
      },
      589: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#0FC0C5"/>\n<path d="M12 18.5C15.3137 18.5 18 15.8664 18 12.6176C18 11.0144 17.3458 9.56103 16.2849 8.5" stroke="white" stroke-width="0.5" stroke-dasharray="1 1"/>\n<path d="M12 18.5C8.68629 18.5 6 15.8137 6 12.5C6 9.18629 8.68629 6.5 12 6.5" stroke="white"/>\n<path d="M12 4L14.5 6.5L12 9V4Z" fill="white"/>\n</svg>\n';
      },
      6653: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#E667E6"/>\n<path d="M16.4795 10.9074L12 18.9704L7.52205 10.9101L8.09391 7.5H15.9471L16.4795 10.9074Z" stroke="white"/>\n<path d="M12 13V18" stroke="white"/>\n<path d="M8.30775 7.50205L6.80571 4.49795H17.1943L15.6922 7.50205H8.30775Z" stroke="white" stroke-width="0.995907"/>\n<circle cx="12" cy="11" r="2" stroke="white"/>\n</svg>\n';
      },
      3810: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#7961F2"/>\n<path fill-rule="evenodd" clip-rule="evenodd" fill="#ffff" d="M6.85831 18.8325C8.32448 19.3557 9.94657 18.6121 10.4813 17.1717L11.9999 13.0811L13.5185 17.1717C14.0533 18.6121 15.6754 19.3557 17.1416 18.8325C18.6077 18.3093 19.3628 16.7175 18.828 15.277C18.2933 13.8365 16.6712 13.0929 15.205 13.6161C14.5251 13.8587 13.9981 14.3312 13.6817 14.9118L12.501 11.7314L15 5L14.4262 5.2889C14.0028 5.50205 13.6769 5.86442 13.514 6.30332L11.9999 10.3817L10.4859 6.30332C10.3229 5.86442 9.99709 5.50205 9.57372 5.2889L8.99988 5L11.4989 11.7314L10.3182 14.9118C10.0018 14.3312 9.4748 13.8587 8.79487 13.6161C7.3287 13.0929 5.70661 13.8365 5.17184 15.277C4.63707 16.7175 5.39213 18.3093 6.85831 18.8325ZM7.18109 17.963C8.15854 18.3118 9.23993 17.8161 9.59645 16.8558C9.95296 15.8955 9.44959 14.8342 8.47214 14.4854C7.49468 14.1366 6.41329 14.6324 6.05678 15.5927C5.70027 16.553 6.20364 17.6142 7.18109 17.963ZM16.8188 17.963C17.7963 17.6142 18.2996 16.553 17.9431 15.5927C17.5866 14.6324 16.5052 14.1366 15.5278 14.4854C14.5503 14.8342 14.0469 15.8955 14.4035 16.8558C14.76 17.8161 15.8414 18.3118 16.8188 17.963Z"/>\n</svg>\n';
      },
      7803: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#FF5975"/>\n<rect x="5.5" y="10.5" width="10" height="8" stroke="white"/>\n<path d="M18.5 8C18.5 6.34315 16.933 5 15 5C13.067 5 11.5 6.34315 11.5 8" stroke="white"/>\n<path d="M11.5 8V10" stroke="white"/>\n<path d="M18.5 8V9" stroke="white"/>\n</svg>\n';
      },
      8345: (e) => {
        e.exports =
          '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z" fill="#3D99F5"/>\n<path d="M17.3156 19L21 5H18.0448L15.7996 14.6471H15.7612L13.42 5H10.5991L8.21962 14.5294H8.18124L6.01279 5H3L6.62687 19H9.67804L11.9616 9.47059H12L14.322 19H17.3156Z" fill="white"/>\n</svg>\n';
      }
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.d = (e, n) => {
    for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
  }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (t.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = t(7301);
      t(2723), t(1217), t(4964), t(7905), t(8553), t(2490), t(8750), t(4524);
      const n = t(5059),
        r = t(9248);
      (0, e.cM)("[Background] Background script started"),
        chrome.notifications.onClicked.addListener(n.handleNotifications),
        chrome.notifications.onButtonClicked.addListener(n.handleNotifications),
        chrome.runtime.onMessage.addListener(r.handleMessage),
        chrome.runtime.onMessageExternal.addListener(r.handleExternalMessage);
    })();
})();
