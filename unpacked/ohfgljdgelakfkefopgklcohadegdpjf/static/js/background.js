(() => {
  "use strict";
  var e = {
      8247: (e, n, t) => {
        for (
          var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            r = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
            i = 0;
          i < o.length;
          i++
        )
          r[o.charCodeAt(i)] = i;
      },
      8242: (e, n, t) => {
        t.d(n, { Q: () => a, U: () => s });
        var o = t(5059),
          r = t(9245),
          i = t(4215),
          c = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        function s() {
          return c(this, void 0, void 0, function* () {
            const e = yield (0, r.Px)(r.dR.JOB_RESULT_TAB);
            e && (i.T_(e), yield (0, r.dv)(r.dR.JOB_RESULT_TAB));
          });
        }
        function a(e, n) {
          const t = {
            success: { title: chrome.i18n.getMessage("fileIsReady"), message: chrome.i18n.getMessage("downloadCta") },
            error: { title: chrome.i18n.getMessage("processingFailedTitle"), message: chrome.i18n.getMessage("processingFailedMessage") }
          };
          chrome.windows.get(n.windowId, (i) =>
            c(this, void 0, void 0, function* () {
              if (i.focused && n.highlighted) return;
              yield (0, r.q8)({ [r.dR.JOB_RESULT_TAB]: n });
              const c = e ? t.success : t.error;
              o.create(o.Notifications.ID_JOB_RESULT, c);
            })
          );
        }
      },
      9248: (e, n, t) => {
        t.r(n),
          t.d(n, {
            DEV_LOGGER: () => f,
            INTERNAL_SEND_ANALYTICS_EVENT: () => l,
            MESSAGE_TOOLS_CONNECT_TOOL: () => E,
            handleExternalMessage: () => h,
            handleMessage: () => v
          });
        var o = t(4232),
          r = t(5888),
          i = t(4215),
          c = t(2113),
          s = t(8242),
          a = t(7301),
          u = t(8562),
          d = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        const l = "send-analytics-event",
          f = "dev-logger",
          E = "open-connected-tool";
        function v(e, n, t) {
          return d(this, void 0, void 0, function* () {
            switch (
              ((e.request === f && e.request === l) ||
                (0, a.ag)(`%cRequest: ${e.request}`, "background: #832B00; color: #F7E5DA", { message: e, sender: n }),
              e.request)
            ) {
              case f:
                (0, a.ag)("message-log:", "background: #ffe042; color: #e71989", ...e.event);
                break;
              case "open-tab":
                i.bA(`${e.url}?${u.bk}`);
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
                  yield o.j(e.event);
                } catch (e) {
                  (0, a.ag)("analytics error", e);
                }
                t(!0);
                break;
              case "check-file-scheme":
                chrome.extension.isAllowedFileSchemeAccess((e) => t(e));
                break;
              case E:
                const { toolKey: r, fileName: s, fileToken: d } = e.payload,
                  v = "pdf-to-jpg" === r ? "extract" : r,
                  h = c.B8(v, s, d, u.KX);
                i.bA(h);
            }
            return !0;
          });
        }
        function h(e, n, t) {
          switch (((0, a.ag)("External message: ", e), e.request)) {
            case "version":
              t({ type: "success", version: chrome.runtime.getManifest().version });
              break;
            case "favorites":
              r.I(e);
              break;
            case "result-notification":
              s.Q(!e.failed, n.tab);
          }
        }
      },
      5059: (e, n, t) => {
        t.r(n), t.d(n, { Notifications: () => o, create: () => f, handleNotifications: () => E });
        var o,
          r = t(4232),
          i = t(3495),
          c = t(8242),
          s = t(7301),
          a = t(5517),
          u = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          },
          d = function (e, n) {
            var t = {};
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && n.indexOf(o) < 0 && (t[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
              var r = 0;
              for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
                n.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (t[o[r]] = e[o[r]]);
            }
            return t;
          };
        !(function (e) {
          (e.ID_JOB_RESULT = "jobResult"), (e.ID_RESULT = "result");
        })(o || (o = {}));
        const l = {
          iconUrl: chrome.runtime.getURL("images/smallpdf_48.png"),
          title: "Smallpdf",
          type: "basic",
          message: "",
          priority: 2,
          requireInteraction: !0
        };
        function f(e, n) {
          const { group: t } = n,
            o = d(n, ["group"]);
          r.j(i.Jl(e)), chrome.notifications.create(e, Object.assign(Object.assign({}, l), o));
        }
        function E(e, n) {
          return u(this, void 0, void 0, function* () {
            r.j(i.zL(e));
            const [n, t] = e.split("/", 2);
            switch (((0, s.cM)(`[Notification] Triggered: ${n}`, t), n)) {
              case o.ID_JOB_RESULT:
                c.U();
                break;
              case o.ID_RESULT:
                (0, a.pl)(!1, a.P6.NOTIFICATION);
            }
            chrome.notifications.clear(e);
          });
        }
      },
      3495: (e, n, t) => {
        t.d(n, {
          HN: () => E,
          Jl: () => d,
          L_: () => v,
          MW: () => _,
          R1: () => h,
          U_: () => s,
          WO: () => a,
          ZJ: () => f,
          l2: () => c,
          u$: () => u,
          wq: () => i,
          zL: () => l,
          zZ: () => r
        });
        var o = t(5517);
        const r = () => ({ event: "chrome.extension.installed" }),
          i = () => ({ event: "chrome.extension.chrome_update" }),
          c = () => ({ event: "chrome.extension.shared_module_update" }),
          s = (e, n, t) => ({ event: "chrome.background.file_upload_failed", customString1: e, customString2: n, customInt1: t }),
          a = (e, n, t) => ({ event: "chrome.background.upload_started", customString1: e, customString2: n, customInt1: t }),
          u = (e, n, t, o) => ({
            event: "chrome.background.upload_finished",
            customString1: e,
            customString2: n,
            customInt1: t,
            customInt2: o
          }),
          d = (e) => ({ event: "chrome.notification.seen", customString1: e }),
          l = (e) => ({ event: "chrome.notification.cta_clicked", customString1: e }),
          f = (e, n = o.P6.UNKNOWN, t = !1) => ({
            event: "chrome.action.result_downloaded",
            customBoolean1: t,
            customString1: n,
            customString2: e
          }),
          E = (e, n, t = !1) => ({ event: "chrome.action.processing_started", customString1: e, customString2: n, customBoolean1: t }),
          v = (e, n, t) => ({ event: "chrome.action.processing_done", customString1: e, customString2: n, customString3: t }),
          h = (e, n) => ({ event: "chrome.action.processing_failed", customString1: e, customString2: n }),
          _ = (e) => ({ event: "chrome.system.unhandled_error_seen", customString1: e });
      },
      2113: (e, n, t) => {
        t.d(n, { B8: () => r });
        var o = t(8562);
        t(385);
        function r(e, n, t, r) {
          const i = ["a=tool", "source=chrome-extension", `tool=${e}`, `file_name=${n}`, `file_token=${t}`];
          return `${o.Kf}/redirect?${r}#${i.join("&")}`;
        }
      },
      265: (e, n, t) => {
        function o(e) {
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
        t.d(n, { Z: () => o });
      },
      9245: (e, n, t) => {
        t.d(n, { Px: () => s, dR: () => o, dv: () => u, gX: () => l, ge: () => r, q8: () => a, wo: () => d });
        var o,
          r,
          i = t(7301),
          c = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        function s(e, n) {
          return c(this, void 0, void 0, function* () {
            try {
              const t = yield chrome.storage.local.get(e);
              return "string" == typeof e ? t[e] || n : t;
            } catch (t) {
              return (0, i.cM)(chrome.runtime.lastError, t), Array.isArray(e) ? {} : n;
            }
          });
        }
        function a(e) {
          return c(this, void 0, void 0, function* () {
            try {
              yield chrome.storage.local.set(e);
            } catch (e) {
              throw ((0, i.cM)(chrome.runtime.lastError), e);
            }
          });
        }
        function u(e) {
          return c(this, void 0, void 0, function* () {
            try {
              yield chrome.storage.local.remove(e);
            } catch (e) {
              throw ((0, i.cM)(chrome.runtime.lastError), e);
            }
          });
        }
        function d(e, n) {
          return c(this, void 0, void 0, function* () {
            try {
              const t = yield chrome.storage.sync.get(e);
              if (Array.isArray(e)) return t;
              const o = t[e];
              return void 0 === o ? n : o;
            } catch (t) {
              return (0, i.cM)(chrome.runtime.lastError, t), Array.isArray(e) ? {} : n;
            }
          });
        }
        function l(e) {
          return c(this, void 0, void 0, function* () {
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
        })(o || (o = {})),
          (function (e) {
            (e.PreferenceGoogleSERPEnabled = "smallpdf.options.googleSerpEnabled"),
              (e.PreferenceAutoDownloadEnabled = "STORAGE_KEY_OPTIONS_AUTO_DOWNLOAD"),
              (e.Experiments = "STORAGE_KEY_EXPERIMENTS"),
              (e.TasksCount = "STORAGE_KEY_TASKS_COUNT"),
              (e.LastTaskTime = "STORAGE_KEY_LAST_TASK_TIME"),
              (e.FreeTasksResetTime = "smallpdf.ftrt"),
              (e.MIGRATIONS_SCHEMA_VERSION = "smallpdf.msv");
          })(r || (r = {}));
      },
      4215: (e, n, t) => {
        function o(e, n = !0) {
          const t = { url: e, active: n };
          chrome.tabs.create(t, (e) => {
            n && chrome.windows.update(e.windowId, { focused: !0 });
          });
        }
        function r(e) {
          return e.id && chrome.tabs.update(e.id, { highlighted: !0 }), chrome.windows.update(e.windowId, { focused: !0 });
        }
        t.d(n, { T_: () => r, bA: () => o });
      },
      5888: (e, n, t) => {
        t.d(n, { I: () => i });
        var o = t(9245),
          r = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        function i(e) {
          return r(this, void 0, void 0, function* () {
            const n = yield (0, o.Px)(o.dR.UserFavorites, {});
            for (const t in e.favorites) n[t] = Math.max(e.favorites[t], n[t] || 0);
            yield (0, o.q8)({ [o.dR.UserFavorites]: n });
          });
        }
      },
      2490: (e, n, t) => {
        t.r(n);
        var o = t(5347),
          r = t(7301),
          i = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        chrome.runtime.onStartup.addListener(() =>
          i(void 0, void 0, void 0, function* () {
            try {
              yield (0, o.Ai)();
            } catch (e) {
              (0, r.cM)(e);
            }
          })
        );
      },
      5347: (e, n, t) => {
        t.d(n, { Ai: () => a });
        var o = t(9245),
          r = t(2893),
          i = t(7301),
          c = t(7457),
          s =
            (t(4758),
            function (e, n, t, o) {
              return new (t || (t = Promise))(function (r, i) {
                function c(e) {
                  try {
                    a(o.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    a(o.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  var n;
                  e.done
                    ? r(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(c, s);
                }
                a((o = o.apply(e, n || [])).next());
              });
            });
        function a() {
          var e, n;
          return s(this, void 0, void 0, function* () {
            try {
              if (yield (0, r.Sr)()) throw new Error("User not authenticated");
              const t = yield (0, c.HR)(`${c.Bi}/pro/account`, { headers: { Accept: "application/json" } }),
                i = yield t.json(),
                s = !!(null === (n = null === (e = null == i ? void 0 : i.data) || void 0 === e ? void 0 : e.app_metadata) || void 0 === n
                  ? void 0
                  : n.signedUp);
              return (
                yield (0, o.q8)({ [o.dR.USER_ACTIVE_PRO]: s }), yield (0, o.q8)({ [o.dR.PROFILE]: null == i ? void 0 : i.data }), i.data
              );
            } catch (e) {
              return (
                (0, i.cM)(e),
                yield (function () {
                  return s(this, void 0, void 0, function* () {
                    yield (0, o.q8)({ [o.dR.USER_ACTIVE_PRO]: !1 }), yield (0, o.q8)({ [o.dR.PROFILE]: null });
                  });
                })(),
                null
              );
            }
          });
        }
      },
      7747: (e, n, t) => {
        t.d(n, { Dt: () => l, Nw: () => d, Y8: () => c, dR: () => s, uq: () => i });
        var o = t(265),
          r = (t(7301), t(8562));
        const i = "https://analytics.smallpdf.com",
          c = "ALARM_ANALYTICS_EMPTY_QUEUE",
          s = 100;
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
        function u() {
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
        function d(e, n, t) {
          const o = (0, r.FU)();
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
            agent_major: o.major,
            agent_minor: o.minor,
            agent_version: o.version,
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
            browser_major: u(),
            browser_minor: void 0,
            rt: n.rt,
            locale: t.locale,
            agent_identifier: chrome.runtime.id
          };
        }
        function l(e) {
          return {
            id: (0, o.Z)(),
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
        t.d(n, { j: () => u, rt: () => d });
        var o = t(9245),
          r = t(7301),
          i = t(8562),
          c = t(7747),
          s = t(385),
          a = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        function u(e) {
          return a(this, void 0, void 0, function* () {
            const n = (0, c.Dt)(e);
            (0, r.ag)(`%cTrack event: ${e.event}`, "background: #0033E7; color: #E2E2E2", n);
            const t = yield (0, o.Px)([o.dR.USER_DATA_SYNCED]);
            navigator.onLine && t[o.dR.USER_DATA_SYNCED]
              ? yield (function (e) {
                  return a(this, void 0, void 0, function* () {
                    const n = yield (0, s.is)(),
                      t = yield (0, i.So)(),
                      o = (0, c.Nw)(e, n, t);
                    (0, r.ag)(`Send event ${o.event}`, o);
                    const a = yield fetch(`${c.uq}/v2/events`, { method: "POST", body: JSON.stringify([o]) });
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
                        const n = yield (0, o.Px)(o.dR.TRACKING_EVENTS, []);
                        n.push(e);
                        try {
                          yield (0, o.q8)({ [o.dR.TRACKING_EVENTS]: n });
                        } catch (e) {
                          e instanceof Error &&
                            (e.name.includes("QUOTA_BYTES") || e.message.includes("QUOTA_BYTES")) &&
                            (yield (0, o.q8)({ [o.dR.TRACKING_EVENTS]: [] }));
                        }
                      })
                    );
                  });
                })(n);
          });
        }
        function d() {
          return a(this, void 0, void 0, function* () {
            const e = yield (0, o.Px)([o.dR.TRACKING_EVENTS, o.dR.USER_DATA_SYNCED]);
            if (!e || !e[o.dR.USER_DATA_SYNCED]) return;
            const n = e[o.dR.TRACKING_EVENTS] || [];
            if (0 !== n.length && navigator.onLine) {
              try {
                const e = n.splice(0, c.dR);
                yield (function (e) {
                  return a(this, void 0, void 0, function* () {
                    const n = yield (0, s.is)(),
                      t = yield (0, i.So)(),
                      o = e.map((e) => (0, c.Nw)(e, n, t));
                    (0, r.ag)("Send events", o);
                    const a = yield fetch(`${c.uq}/v2/events`, { method: "POST", body: JSON.stringify(o) });
                    if (!a.ok) throw new Error(`Pluto response status: ${a.status}`);
                    {
                      const e = yield a.json();
                      if (!e.success) throw new Error(`Pluto response error: ${e.error}`);
                    }
                  });
                })(e);
              } catch (e) {
                return void (0, r.ag)("Failed to submit events", e);
              }
              try {
                yield (0, o.q8)({ [o.dR.TRACKING_EVENTS]: n });
              } catch (e) {
                yield (0, o.dv)(o.dR.TRACKING_EVENTS), (0, r.ag)("Failed to update event queue", e);
              }
            }
          });
        }
      },
      1217: (e, n, t) => {
        t.r(n);
        var o = t(9245),
          r = t(4232),
          i = t(7747),
          c = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        chrome.alarms.create(i.Y8, { when: Date.now(), periodInMinutes: 1 }),
          chrome.alarms.onAlarm.addListener((e) =>
            c(void 0, void 0, void 0, function* () {
              e.name === i.Y8 && navigator.onLine && (yield (0, r.rt)(), yield (0, o.dv)(o.dR.TRACKING_EVENTS));
            })
          );
      },
      4356: (e, n, t) => {
        t.d(n, { sA: () => s });
        t(9245), t(5347);
        var o = t(2893),
          r = (t(7301), t(8562)),
          i = (t(5928), t(4758)),
          c = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        function s() {
          return c(this, void 0, void 0, function* () {
            const e = yield (0, o.W_)();
            if (!e.refreshToken) throw (0, i.Tr)({ name: i.ll });
            return navigator.locks.request(r.Cs, { ifAvailable: !0 }, (n) =>
              c(this, void 0, void 0, function* () {
                if ((null == n ? void 0 : n.name) !== r.Cs) return;
                const t = (0, o.RQ)(),
                  i = t.getRealmURL("protocol/openid-connect/token"),
                  c = new URLSearchParams();
                c.set("grant_type", "refresh_token"), c.set("client_id", t.clientID || ""), c.set("refresh_token", e.refreshToken);
                const s = yield fetch(i.toString(), {
                    method: "POST",
                    redirect: "follow",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: c
                  }),
                  a = yield (0, o.El)(s);
                yield (0, o.Bi)(a.accessToken, a.refreshToken);
              })
            );
          });
        }
      },
      2893: (e, n, t) => {
        t.d(n, { Bi: () => h, Eh: () => p, El: () => u, RQ: () => a, Sr: () => y, W_: () => v, hv: () => E });
        var o = t(9245),
          r = t(1011),
          i = t(4758),
          c = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        var s;
        !(function (e) {
          (e.GOOGLE = "google"), (e.FACEBOOK = "facebook"), (e.CREDENTIALS = "credentials"), (e.UNKNOWN = "unknown");
        })(s || (s = {}));
        (0, r.i4)(3);
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
        function u(e) {
          return c(this, void 0, void 0, function* () {
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
        function d(e) {
          const n = e.split(".")[1];
          if (n) {
            const e = n.replace(/-/g, "+").replace(/_/g, "/"),
              t = decodeURIComponent(
                atob(e)
                  .split("")
                  .map((e) => `%${`00${e.charCodeAt(0).toString(16)}`.slice(-2)}`)
                  .join("")
              ),
              o = JSON.parse(t);
            if ("object" != typeof o) throw new Error("authentication: Invalid JWT token");
            return o;
          }
          return {};
        }
        function l(e) {
          const n = d(e);
          if ("string" != typeof n.sub || "number" != typeof n.exp) throw new Error("authentication: Invalid JWT token");
          return {
            value: e,
            subject: n.sub,
            expireAt: 1e3 * n.exp,
            privateShare: "boolean" == typeof n.private_sharing ? n.private_sharing : null
          };
        }
        function f(e) {
          const n = d(e);
          if ("string" != typeof n.sub || "number" != typeof n.exp) throw new Error("authentication: Invalid JWT token");
          return { value: e, subject: n.sub, expireAt: 1e3 * n.exp };
        }
        function E(e) {
          return null === e ? {} : { Authorization: `${e}` };
        }
        function v() {
          return c(this, void 0, void 0, function* () {
            const e = yield (0, o.Px)([o.dR.ACCESS_TOKEN, o.dR.REFRESH_TOKEN]);
            return e
              ? { accessToken: e[o.dR.ACCESS_TOKEN] || null, refreshToken: e[o.dR.REFRESH_TOKEN] || null }
              : { accessToken: null, refreshToken: null };
          });
        }
        function h(e, n) {
          return c(this, void 0, void 0, function* () {
            return (0, o.q8)({ [o.dR.ACCESS_TOKEN]: e, [o.dR.REFRESH_TOKEN]: n });
          });
        }
        function _() {
          return c(this, void 0, void 0, function* () {
            const e = yield v();
            return { accessToken: e.accessToken ? l(e.accessToken) : null, refreshToken: e.refreshToken ? f(e.refreshToken) : null };
          });
        }
        function p() {
          var e;
          return c(this, void 0, void 0, function* () {
            const n = yield _();
            return !(null === (e = n.accessToken) || void 0 === e ? void 0 : e.expireAt) || n.accessToken.expireAt <= Date.now();
          });
        }
        function y() {
          var e;
          return c(this, void 0, void 0, function* () {
            const n = yield _();
            return !n || !(null === (e = n.refreshToken) || void 0 === e ? void 0 : e.expireAt) || n.refreshToken.expireAt <= Date.now();
          });
        }
      },
      2723: (e, n, t) => {
        t.r(n), t.d(n, { track: () => c });
        var o = t(3495),
          r = t(4232),
          i = t(7301);
        function c(e) {
          try {
            e instanceof Error && r.j(o.MW(e.toString()));
          } catch (e) {
            (0, i.cM)(e);
          }
        }
      },
      8553: (e, n, t) => {
        t.r(n);
        let o, r;
        const i = new WeakMap(),
          c = new WeakMap(),
          s = new WeakMap(),
          a = new WeakMap(),
          u = new WeakMap();
        let d = {
          get(e, n, t) {
            if (e instanceof IDBTransaction) {
              if ("done" === n) return c.get(e);
              if ("objectStoreNames" === n) return e.objectStoreNames || s.get(e);
              if ("store" === n) return t.objectStoreNames[1] ? void 0 : t.objectStore(t.objectStoreNames[0]);
            }
            return E(e[n]);
          },
          set: (e, n, t) => ((e[n] = t), !0),
          has: (e, n) => (e instanceof IDBTransaction && ("done" === n || "store" === n)) || n in e
        };
        function l(e) {
          return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype
            ? (r || (r = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
              ? function (...n) {
                  return e.apply(v(this), n), E(i.get(this));
                }
              : function (...n) {
                  return E(e.apply(v(this), n));
                }
            : function (n, ...t) {
                const o = e.call(v(this), n, ...t);
                return s.set(o, n.sort ? n.sort() : [n]), E(o);
              };
        }
        function f(e) {
          return "function" == typeof e
            ? l(e)
            : (e instanceof IDBTransaction &&
                (function (e) {
                  if (c.has(e)) return;
                  const n = new Promise((n, t) => {
                    const o = () => {
                        e.removeEventListener("complete", r), e.removeEventListener("error", i), e.removeEventListener("abort", i);
                      },
                      r = () => {
                        n(), o();
                      },
                      i = () => {
                        t(e.error || new DOMException("AbortError", "AbortError")), o();
                      };
                    e.addEventListener("complete", r), e.addEventListener("error", i), e.addEventListener("abort", i);
                  });
                  c.set(e, n);
                })(e),
              (n = e),
              (o || (o = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e) => n instanceof e)
                ? new Proxy(e, d)
                : e);
          var n;
        }
        function E(e) {
          if (e instanceof IDBRequest)
            return (function (e) {
              const n = new Promise((n, t) => {
                const o = () => {
                    e.removeEventListener("success", r), e.removeEventListener("error", i);
                  },
                  r = () => {
                    n(E(e.result)), o();
                  },
                  i = () => {
                    t(e.error), o();
                  };
                e.addEventListener("success", r), e.addEventListener("error", i);
              });
              return (
                n
                  .then((n) => {
                    n instanceof IDBCursor && i.set(n, e);
                  })
                  .catch(() => {}),
                u.set(n, e),
                n
              );
            })(e);
          if (a.has(e)) return a.get(e);
          const n = f(e);
          return n !== e && (a.set(e, n), u.set(n, e)), n;
        }
        const v = (e) => u.get(e);
        const h = ["get", "getKey", "getAll", "getAllKeys", "count"],
          _ = ["put", "add", "delete", "clear"],
          p = new Map();
        function y(e, n) {
          if (!(e instanceof IDBDatabase) || n in e || "string" != typeof n) return;
          if (p.get(n)) return p.get(n);
          const t = n.replace(/FromIndex$/, ""),
            o = n !== t,
            r = _.includes(t);
          if (!(t in (o ? IDBIndex : IDBObjectStore).prototype) || (!r && !h.includes(t))) return;
          const i = async function (e, ...n) {
            const i = this.transaction(e, r ? "readwrite" : "readonly");
            let c = i.store;
            return o && (c = c.index(n.shift())), (await Promise.all([c[t](...n), r && i.done]))[0];
          };
          return p.set(n, i), i;
        }
        d = ((e) => ({ ...e, get: (n, t, o) => y(n, t) || e.get(n, t, o), has: (n, t) => !!y(n, t) || e.has(n, t) }))(d);
        var m = t(3495),
          R = t(4232),
          T = t(1852),
          g = t(7301),
          S = t(8612),
          A = t(5928),
          O = t(4758),
          w = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        function I() {
          return w(this, void 0, void 0, function* () {
            const e = yield (0, T.f1)();
            let n = null,
              t = null,
              o = null,
              r = null;
            try {
              (n = yield (function (e, n, { blocked: t, upgrade: o, blocking: r, terminated: i } = {}) {
                const c = indexedDB.open(e, n),
                  s = E(c);
                return (
                  o &&
                    c.addEventListener("upgradeneeded", (e) => {
                      o(E(c.result), e.oldVersion, e.newVersion, E(c.transaction));
                    }),
                  t && c.addEventListener("blocked", () => t()),
                  s
                    .then((e) => {
                      i && e.addEventListener("close", () => i()), r && e.addEventListener("versionchange", () => r());
                    })
                    .catch(() => {}),
                  s
                );
              })("upload", 1)),
                (t = yield n.get(T.VK, e.fileID)),
                (o = t.blob),
                (r = t.uploadURL);
            } catch (e) {
              throw ((0, g.cM)(e), yield (0, T._P)({ status: A.Lr.FAILED, progress: 100 }), (0, O.dF)());
            }
            yield (0, T._P)({ status: A.Lr.PENDING, progress: 0 });
            try {
              const n = Date.now();
              yield R.j(m.WO(e.name, e.token, o.size)), (0, S.Ng)("1");
              if ((yield self.fetch(r, { method: "put", body: o })).ok) {
                const t = Date.now() - n;
                return (
                  (0, S.Fd)(),
                  yield R.j(m.u$(e.name, e.token, o.size, t)),
                  setTimeout(() => {
                    (0, S.Hx)();
                  }, 1e3),
                  yield (0, T._P)({ status: A.Lr.COMPLETED, progress: 100 })
                );
              }
              throw new Error("upload response nok");
            } catch (n) {
              throw (
                ((0, g.cM)(n),
                yield R.j(m.U_(e.name, e.token, o.size)),
                yield (0, T._P)({ status: A.Lr.FAILED, progress: 100 }),
                (0, O.Lv)())
              );
            }
          });
        }
        var L = function (e, n, t, o) {
          return new (t || (t = Promise))(function (r, i) {
            function c(e) {
              try {
                a(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                a(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var n;
              e.done
                ? r(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(c, s);
            }
            a((o = o.apply(e, n || [])).next());
          });
        };
        addEventListener("message", (e) => {
          var n;
          if ((null === (n = e.data) || void 0 === n ? void 0 : n.type) === T.EV) {
            (0, g.ag)("MESSAGE_FILE_UPLOAD");
            const n = new Promise((e, n) => {
              L(void 0, void 0, void 0, function* () {
                try {
                  const n = yield (0, T.f1)();
                  n || e(!1), (null == n ? void 0 : n.status) !== A.Lr.IDLE && e(!1), yield I(), e(!0);
                } catch (e) {
                  n(e);
                }
              });
            }).catch(g.ag);
            e.waitUntil(n);
          }
        });
      },
      1852: (e, n, t) => {
        t.d(n, {
          EV: () => u,
          F_: () => _,
          VK: () => a,
          _P: () => E,
          a1: () => m,
          f1: () => f,
          iR: () => h,
          tA: () => v,
          y8: () => y,
          yT: () => p
        });
        var o = t(9245),
          r = t(8562),
          i = t(1011),
          c = t(5928),
          s = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        const a = "files",
          u = "MESSAGE_FILE_UPLOAD";
        var d, l;
        function f() {
          return s(this, void 0, void 0, function* () {
            return (0, o.Px)(o.dR.FILE_HANDLE);
          });
        }
        function E(e) {
          return s(this, void 0, void 0, function* () {
            const n = yield f();
            n && (yield (0, o.q8)({ [o.dR.FILE_HANDLE]: Object.assign(Object.assign({}, n), e) }));
          });
        }
        function v() {
          return s(this, void 0, void 0, function* () {
            return (0, o.Px)(o.dR.FILE_HANDLE_RESULT);
          });
        }
        function h(e) {
          return s(this, void 0, void 0, function* () {
            let n = yield v();
            n ||
              (n = {
                name: "document",
                tokens: [],
                size: null,
                expireAt: Date.now() + (0, i.LK)(15),
                status: c.Lr.COMPLETED,
                progress: 100
              }),
              yield (0, o.q8)({ [o.dR.FILE_HANDLE_RESULT]: Object.assign(Object.assign({}, n), e) });
          });
        }
        function _(e, n) {
          let t = e.split(".")[0] || "document";
          if (n) {
            const e = n.split(".")[1];
            e && (t = `${t}.${e}`);
          }
          return t;
        }
        function p(e) {
          return 1 === e.length ? e[0] : e.length > 1 ? e.find((e) => e.includes("zip")) : null;
        }
        function y() {
          return s(this, void 0, void 0, function* () {
            const e = yield v();
            return e ? p(e.tokens) : [];
          });
        }
        function m() {
          return s(this, void 0, void 0, function* () {
            const e = yield v();
            if (!e) return null;
            const n = yield y();
            return (function (e, n) {
              const t = `/files/${e}?name=${encodeURIComponent(n)}`;
              return `${r.XQ}${t}`;
            })(n, _(e.name, n));
          });
        }
        !(function (e) {
          (e.DROP_AREA = "droparea"), (e.DRAG_AND_DROP = "drag-and-drop"), (e.RETRY = "retry");
        })(d || (d = {})),
          (function (e) {
            (e.FILE_HANDLE_IDLE = "fileHandleIdle"),
              (e.FILE_HANDLE_PROGRESS = "fileHandleProgress"),
              (e.FILE_HANDLE_FAILURE = "fileHandleFailure");
          })(l || (l = {}));
      },
      8195: (e, n, t) => {
        t.d(n, { b: () => o, e: () => r });
        const o = 2,
          r = "ALARM_LIMITATIONS_CHECK";
      },
      4524: (e, n, t) => {
        t.r(n);
        var o = t(9245),
          r = t(8195),
          i = t(1011),
          c = t(385),
          s = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        chrome.alarms.create(r.e, { when: Date.now(), periodInMinutes: 1 }),
          chrome.alarms.onAlarm.addListener((e) =>
            s(void 0, void 0, void 0, function* () {
              if (e.name === r.e) {
                const e = yield (0, o.wo)(o.ge.TasksCount, 0);
                if ((yield (0, c.ck)()) && 0 !== e)
                  return void (yield (0, o.gX)({ [o.ge.TasksCount]: 0, [o.ge.FreeTasksResetTime]: null }));
                let n = yield (0, o.wo)(o.ge.FreeTasksResetTime, null);
                n || ((n = Date.now()), yield (0, o.gX)({ [o.ge.FreeTasksResetTime]: n }));
                Date.now() - n >= (0, i.an)(1) && (yield (0, o.gX)({ [o.ge.TasksCount]: 0, [o.ge.FreeTasksResetTime]: Date.now() }));
              }
            })
          );
      },
      7301: (e, n, t) => {
        t.d(n, { ag: () => u, cM: () => a });
        t(9248);
        var o = t(9245),
          r = t(8562),
          i = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        let c;
        function s() {
          return i(this, void 0, void 0, function* () {
            if ("boolean" == typeof c) return c;
            return yield (0, o.Px)([o.dR.SERVICE_WORKER_LOGS])
              .then((e) => e[o.dR.SERVICE_WORKER_LOGS])
              .then((e) => "boolean" == typeof e && ((c = e), e));
          });
        }
        function a(...e) {
          return i(this, void 0, void 0, function* () {
            const n = yield s();
            ("development" === r.Gv || n) && console.log.apply(null, e);
          });
        }
        function u(...e) {
          return i(this, void 0, void 0, function* () {
            const n = yield s();
            ("development" === r.Gv || n) && console.log.apply(null, e);
          });
        }
      },
      8612: (e, n, t) => {
        t.d(n, { Fd: () => s, Hx: () => d, Ng: () => l, xk: () => a });
        var o = t(5059),
          r = t(9245),
          i = t(9305),
          c = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        function s() {
          f();
        }
        function a() {
          return c(this, void 0, void 0, function* () {
            f();
            const e = yield (0, r.wo)(r.ge.PreferenceAutoDownloadEnabled, !1);
            e &&
              setTimeout(() => {
                d(), chrome.notifications.clear(o.Notifications.ID_RESULT);
              }, 5e3),
              (0, o.create)(o.Notifications.ID_RESULT, {
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
        function u(e, n) {
          n && chrome.action.setBadgeBackgroundColor({ color: String(n) }), chrome.action.setBadgeText({ text: e });
        }
        function d() {
          u("");
        }
        function l(e) {
          u(e, i.rA);
        }
        function f() {
          u("✓", i.Yz);
        }
      },
      7457: (e, n, t) => {
        t.d(n, { Bi: () => s, HR: () => l, KN: () => d, Uy: () => u });
        var o = t(4356),
          r = t(2893),
          i = t(4758),
          c = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        const s = "https://pro.smallpdf.com";
        var a;
        function u(e) {
          return "object" == typeof e && null !== e;
        }
        function d(e) {
          return c(this, void 0, void 0, function* () {
            const n = yield e.json();
            if (!n || "object" != typeof n) throw (0, i.oi)(n);
            if ("boolean" != typeof n.success) throw (0, i.oi)(n);
            if (!1 === n.success && "string" != typeof n.error) throw (0, i.oi)(n);
            return { payload: n, error: "string" == typeof n.error ? n.error : null, data: n.data };
          });
        }
        function l(e, n) {
          return c(this, void 0, void 0, function* () {
            if (yield (0, r.Sr)()) throw (0, i.Tr)({ name: i.Ld });
            (yield (0, r.Eh)()) && (yield (0, o.sA)());
            const t = yield (0, r.W_)();
            return fetch(
              e,
              Object.assign(Object.assign({}, n), {
                credentials: "omit",
                headers: Object.assign(Object.assign({}, null == n ? void 0 : n.headers), (0, r.hv)(t.accessToken))
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
          Cs: () => h,
          FU: () => R,
          GH: () => _,
          Gv: () => d,
          KX: () => l,
          Kf: () => a,
          So: () => y,
          XQ: () => u,
          a3: () => v,
          bk: () => f,
          oQ: () => m,
          qs: () => T,
          vW: () => E
        });
        var o = t(9245),
          r = t(7301),
          i = t(7457),
          c = t(4758),
          s = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        const a = "https://smallpdf.com",
          u = "https://files.smallpdf.com",
          d = "production",
          l = "utm_source=ce_pdfium",
          f = "utm_source=ce_generic",
          E = "LOCK_POLL_TASK",
          v = "LOCK_QUEUE_EVENT",
          h = "LOCK_REFRESH_TOKEN",
          _ = "LOCK_MIGRATIONS";
        var p;
        function y() {
          return s(this, void 0, void 0, function* () {
            const e = yield (0, o.Px)([o.dR.SYSTEM_OS, o.dR.SYSTEM_LOCALE]);
            return { os: e[o.dR.SYSTEM_OS], locale: e[o.dR.SYSTEM_LOCALE] };
          });
        }
        function m() {
          return s(this, void 0, void 0, function* () {
            const e = yield (0, o.Px)(o.dR.SYSTEM_LOCALE, null),
              n = e ? `${a}/${e}/page?${f}#chrome-extension-feedback` : `${a}/page?${f}#chrome-extension-feedback`;
            chrome.runtime.setUninstallURL(n);
          });
        }
        function R() {
          const e = { version: "0.0.0", major: 0, minor: 0 },
            n = chrome.runtime.getManifest().version;
          if (n) {
            const [t = 0, o = 0] = n.split(".");
            (e.version = n), (e.major = +t), (e.minor = +o);
          }
          return e;
        }
        function T() {
          return s(this, void 0, void 0, function* () {
            try {
              const e = yield (function () {
                return s(this, void 0, void 0, function* () {
                  try {
                    const e = yield fetch(`${i.Bi}/geoip`, { method: "GET" }),
                      { error: n, data: t } = yield (0, i.KN)(e);
                    if (n) {
                      if ("internal_server_error" === n) throw (0, c.qF)();
                      throw (0, c.Pz)(e.status);
                    }
                    return (0, i.Uy)(t) ? String(t.country) : null;
                  } catch (e) {
                    return (0, r.cM)("fetchCountry error:", e), null;
                  }
                });
              })();
              e && (yield (0, o.q8)({ [o.dR.USER_COUNTRY_GEO_IP]: e }));
            } catch (e) {
              throw ((0, r.cM)("updateCountryGeoIP: error", e), e);
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
        })(p || (p = {}));
      },
      4964: (e, n, t) => {
        t.r(n);
        var o = t(3495),
          r = t(4215),
          i = t(4232),
          c = t(7301),
          s = t(9245),
          a = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        const u = [
          {
            schema: 1649147348286,
            area: "sync",
            migrate() {
              return a(this, void 0, void 0, function* () {
                const e = yield (0, s.wo)(s.ge.Experiments, {}),
                  n = Object.keys(e).reduce((n, t) => {
                    const o = e[t];
                    return Object.assign(Object.assign({}, n), { [t]: { segment: o, version: 1, name: t } });
                  }, {});
                yield (0, s.gX)({ [s.ge.Experiments]: n });
              });
            },
            onError(e) {
              return a(this, void 0, void 0, function* () {
                yield (0, s.gX)({ [s.ge.Experiments]: {} });
              });
            }
          }
        ];
        var d = t(8562),
          l = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        var f = function (e, n, t, o) {
          return new (t || (t = Promise))(function (r, i) {
            function c(e) {
              try {
                a(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                a(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var n;
              e.done
                ? r(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(c, s);
            }
            a((o = o.apply(e, n || [])).next());
          });
        };
        chrome.runtime.onStartup.addListener(() =>
          f(void 0, void 0, void 0, function* () {
            (0, d.oQ)();
          })
        ),
          chrome.runtime.onInstalled.addListener((e) =>
            f(void 0, void 0, void 0, function* () {
              (0, c.ag)("onInstalled", e.reason),
                "install" === e.reason &&
                  ((0, c.ag)("install"),
                  yield (function () {
                    return l(this, void 0, void 0, function* () {
                      yield (0, s.q8)({
                        [s.dR.MIGRATIONS_SCHEMA_VERSION]: Date.now(),
                        [s.dR.IS_PDIUM_OPEN_ON_LOAD]: null,
                        [s.dR.LOCAL_TOKEN]: null,
                        [s.dR.USER_COUNTRY_GEO_IP]: null,
                        [s.dR.USER_PROFILE]: null,
                        [s.dR.USER_ACTIVE_PRO]: !1,
                        [s.dR.USER_RT]: !1,
                        [s.dR.ACCESS_TOKEN]: null,
                        [s.dR.REFRESH_TOKEN]: null,
                        [s.dR.TRACKING_EVENTS]: [],
                        [s.dR.USER_DATA_SYNCED]: !1,
                        [s.dR.USER_DATA_LAST_SYNC]: null,
                        [s.dR.FILE_HANDLE]: null,
                        [s.dR.FILE_HANDLE_RESULT]: null,
                        [s.dR.TASK]: null,
                        [s.dR.SYSTEM_OS]: null,
                        [s.dR.SYSTEM_LOCALE]: "en",
                        [s.dR.INSTALLATION_DATE]: Date.now(),
                        [s.dR.PROFILE]: null,
                        [s.dR.AUTH_CODE_VERIFIER]: null,
                        [s.dR.AUTH_STATE_CODE]: null,
                        [s.dR.AUTH_PROVIDER]: null,
                        [s.dR.FAILED_LOGIN_ATTEMPTS]: []
                      }),
                        yield (0, s.gX)({
                          [s.ge.PreferenceGoogleSERPEnabled]: !0,
                          [s.ge.PreferenceAutoDownloadEnabled]: !1,
                          [s.ge.Experiments]: {},
                          [s.ge.TasksCount]: 0,
                          [s.ge.FreeTasksResetTime]: null,
                          [s.ge.MIGRATIONS_SCHEMA_VERSION]: Date.now()
                        });
                    });
                  })(),
                  yield i.j(o.zZ()),
                  r.bA("thanks.html", !0)),
                "update" === e.reason &&
                  (yield (0, c.ag)("update"),
                  yield (function () {
                    return l(this, void 0, void 0, function* () {
                      return (
                        (0, c.cM)("Run migrations..."),
                        Promise.all(
                          u.map((e) =>
                            l(this, void 0, void 0, function* () {
                              return navigator.locks.request(d.GH, () =>
                                l(this, void 0, void 0, function* () {
                                  let n;
                                  if (
                                    ((n =
                                      "sync" === e.area
                                        ? yield (0, s.wo)(s.ge.MIGRATIONS_SCHEMA_VERSION, 0)
                                        : yield (0, s.Px)(s.dR.MIGRATIONS_SCHEMA_VERSION, 0)),
                                    e.schema > n)
                                  ) {
                                    (0, c.cM)(`=== migrate ${e.area} ${n} -> ${e.schema}`);
                                    try {
                                      yield e.migrate(),
                                        "sync" === e.area
                                          ? yield (0, s.gX)({ [s.ge.MIGRATIONS_SCHEMA_VERSION]: e.schema })
                                          : yield (0, s.q8)({ [s.dR.MIGRATIONS_SCHEMA_VERSION]: e.schema });
                                    } catch (n) {
                                      (0, c.cM)(`Error while running migration ${e.schema}`, n), yield e.onError(n);
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
                  (0, c.ag)("migrations done")),
                "chrome_update" === e.reason && (yield i.j(o.wq())),
                "shared_module_update" === e.reason && (yield i.j(o.l2())),
                navigator.onLine && (yield (0, d.qs)());
            })
          );
      },
      5517: (e, n, t) => {
        t.d(n, {
          DN: () => y,
          Ll: () => _,
          Oq: () => p,
          P6: () => R,
          QW: () => A,
          R2: () => h,
          _X: () => g,
          cF: () => I,
          g7: () => w,
          hY: () => m,
          pl: () => O,
          vr: () => T,
          xJ: () => S
        });
        var o = t(3495),
          r = t(4215),
          i = t(265),
          c = t(9245),
          s = t(4232),
          a = t(2893),
          u = t(1852),
          d = t(8195),
          l = t(8926),
          f = t(385),
          E = t(4758),
          v = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        const h = "https://task.smallpdf.com",
          _ = "MESSAGE_TASK_START",
          p = "ALART_TASK_POLL",
          y = "MESSAGE_TASK_POLL";
        var m, R;
        function T(e, n, t, o = !1) {
          return v(this, void 0, void 0, function* () {
            const r = { id: (0, i.Z)(), withProFeature: o, status: m.CREATED, result: [], toolKey: n, options: t, input: e, error: null };
            return yield (0, c.q8)({ [c.dR.TASK]: r }), r;
          });
        }
        function g() {
          return v(this, void 0, void 0, function* () {
            return (0, c.Px)(c.dR.TASK);
          });
        }
        function S(e) {
          return v(this, void 0, void 0, function* () {
            const n = yield g();
            if (!n) throw (0, E.JQ)();
            return (0, c.q8)({ [c.dR.TASK]: Object.assign(Object.assign({}, n), e) });
          });
        }
        function A(e) {
          return v(this, void 0, void 0, function* () {
            if (!(yield g())) throw (0, E.JQ)();
            yield S({ status: e });
          });
        }
        function O(e, n) {
          return v(this, void 0, void 0, function* () {
            if (!(yield (0, u.tA)())) return;
            const t = yield (0, u.y8)(),
              i = yield (0, u.a1)();
            i && (yield s.j(o.ZJ(t, n, e)), (0, r.bA)(i));
          });
        }
        function w() {
          return v(this, void 0, void 0, function* () {
            const e = yield (0, c.wo)(c.ge.FreeTasksResetTime, null);
            let n = yield (function () {
              return v(this, void 0, void 0, function* () {
                return (0, c.wo)(c.ge.TasksCount, 0);
              });
            })();
            return (
              e || (yield (0, c.gX)({ [c.ge.FreeTasksResetTime]: Date.now() })),
              n < d.b && (n += 1),
              yield (0, c.gX)({ [c.ge.TasksCount]: n }),
              n
            );
          });
        }
        function I(e) {
          return v(this, void 0, void 0, function* () {
            const n = yield (0, f.is)(),
              t = yield (0, a.Eh)(),
              o = {
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
                  Object.assign({}, o),
                  (function (e) {
                    const n = (0, l.RG)(e);
                    return {
                      options: { mode: (0, l.iJ)(e.preset), dpi: null == n ? void 0 : n.dpi, quality: null == n ? void 0 : n.quality }
                    };
                  })(e.options)
                );
              case "pdf-to-excel":
                return Object.assign(Object.assign({}, o), { options: { ocr_type: (r = e.options).ocrType, languages: r.ocrLanguages } });
              case "pdf-to-ppt":
                return Object.assign(Object.assign({}, o), (e.options, { options: {} }));
              case "pdf-to-word":
                return Object.assign(
                  Object.assign({}, o),
                  (function (e) {
                    return { options: { ocr_type: e.ocrType, languages: e.ocrLanguages } };
                  })(e.options)
                );
              case "pdf-to-jpg":
                return Object.assign(
                  Object.assign({}, o),
                  (function (e) {
                    return { options: { mode: e.mode } };
                  })(e.options)
                );
              default:
                return o;
            }
            var r;
          });
        }
        !(function (e) {
          (e.CREATED = "Created"), (e.REQUEST = "Request"), (e.PENDING = "Pending"), (e.SUCCESS = "Success"), (e.FAILURE = "Failure");
        })(m || (m = {})),
          (function (e) {
            (e.AUTO = "auto"), (e.NOTIFICATION = "notification"), (e.RESULT_SCREEN = "result"), (e.UNKNOWN = "unknown");
          })(R || (R = {}));
      },
      7905: (e, n, t) => {
        t.r(n);
        var o = t(3495),
          r = t(9245),
          i = t(4232);
        function c(e) {
          return e instanceof Error;
        }
        var s = t(1852),
          a = t(8612),
          u = t(8562),
          d = t(5517),
          l = t(385),
          f = t(4758),
          E = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        function v(e, n, t, r) {
          return E(this, void 0, void 0, function* () {
            const s = yield (0, d.vr)(e, n, t, r);
            return (
              (function (e = !1) {
                var n;
                E(this, void 0, void 0, function* () {
                  const t = yield (0, d._X)();
                  if (!t) throw (0, f.JQ)();
                  const r = yield (0, d.cF)(t),
                    s = JSON.stringify(r);
                  yield (0, d.QW)(d.hY.REQUEST);
                  try {
                    (0, a.Ng)("1"), yield i.j(o.HN(t.toolKey, t.id, e));
                    const n = yield fetch(`${d.R2}/v1/tasks`, { method: "post", body: s }),
                      r = yield n.json();
                    if (!r.success) throw (0, f.aN)(r.error);
                    yield (0, d.QW)(d.hY.PENDING), h();
                  } catch (e) {
                    yield i.j(o.R1(t.toolKey, t.id)),
                      c(e)
                        ? yield (0, d.xJ)({
                            status: d.hY.FAILURE,
                            error: null === (n = null == e ? void 0 : e.metadata) || void 0 === n ? void 0 : n.processingErrorType
                          })
                        : yield (0, d.xJ)({ status: d.hY.FAILURE, error: f.a$.INTERNAL_ERROR });
                  }
                });
              })(r),
              s
            );
          });
        }
        function h() {
          return E(this, void 0, void 0, function* () {
            navigator.locks.request(u.vW, { ifAvailable: !0 }, (e) =>
              E(this, void 0, void 0, function* () {
                var n, t;
                if ((null == e ? void 0 : e.name) !== u.vW) return;
                const E = yield (0, d._X)();
                if (!E) throw (0, f.JQ)();
                try {
                  const e = yield fetch(`${d.R2}/v1/tasks/${E.id}`),
                    t = yield e.json();
                  if (!(yield (0, d._X)())) throw (0, f.JQ)();
                  if (!e.ok) {
                    if (504 === e.status) return (0, a.Ng)("1"), void self.serviceWorker.postMessage({ type: d.DN });
                    throw (0, f.aN)(f.a$.INTERNAL_ERROR);
                  }
                  if (!t.success) throw (0, f.aN)(f.a$.INTERNAL_ERROR);
                  if (!t.data.result.success) throw (0, f.aN)(t.data.result.error_fe);
                  const c = (0, s.yT)(t.data.result.output_files);
                  if (null === c) throw (0, f.aN)(f.a$.EMPTY_RESULT);
                  (yield (0, l.ck)()) || (yield (0, d.g7)());
                  const u = yield (0, s.f1)(),
                    v = (0, s.F_)(u.name, c);
                  yield (0, s.iR)({
                    name: v,
                    tokens: t.data.result.output_files,
                    size: (null === (n = t.data.result.options) || void 0 === n ? void 0 : n.newSize_0) || null
                  }),
                    yield (0, d.xJ)({ status: d.hY.SUCCESS, result: [] }),
                    yield (0, a.xk)();
                  (yield (0, r.wo)(r.ge.PreferenceAutoDownloadEnabled, !1)) && (yield (0, d.pl)(!0, d.P6.AUTO)),
                    yield i.j(o.L_(E.toolKey, E.id, c));
                } catch (e) {
                  (0, a.Hx)(),
                    yield i.j(o.R1(E.toolKey, E.id)),
                    c(e)
                      ? yield (0, d.xJ)({
                          status: d.hY.FAILURE,
                          error: null === (t = e.metadata) || void 0 === t ? void 0 : t.processingErrorType
                        })
                      : yield (0, d.xJ)({ status: d.hY.FAILURE, error: f.a$.INTERNAL_ERROR });
                }
              })
            );
          });
        }
        var _,
          p = t(8926),
          y = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        !(function (e) {
          (e.SOLID = "solid-ocr"), (e.NONE = "");
        })(_ || (_ = {}));
        var m,
          R = function (e, n, t, o) {
            return new (t || (t = Promise))(function (r, i) {
              function c(e) {
                try {
                  a(o.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  a(o.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function a(e) {
                var n;
                e.done
                  ? r(e.value)
                  : ((n = e.value),
                    n instanceof t
                      ? n
                      : new t(function (e) {
                          e(n);
                        })).then(c, s);
              }
              a((o = o.apply(e, n || [])).next());
            });
          };
        !(function (e) {
          (e.PAGES = "pages"), (e.EXTRACT = "extract");
        })(m || (m = {}));
        var T = function (e, n, t, o) {
          return new (t || (t = Promise))(function (r, i) {
            function c(e) {
              try {
                a(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                a(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var n;
              e.done
                ? r(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(c, s);
            }
            a((o = o.apply(e, n || [])).next());
          });
        };
        var g = function (e, n, t, o) {
          return new (t || (t = Promise))(function (r, i) {
            function c(e) {
              try {
                a(o.next(e));
              } catch (e) {
                i(e);
              }
            }
            function s(e) {
              try {
                a(o.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              var n;
              e.done
                ? r(e.value)
                : ((n = e.value),
                  n instanceof t
                    ? n
                    : new t(function (e) {
                        e(n);
                      })).then(c, s);
            }
            a((o = o.apply(e, n || [])).next());
          });
        };
        chrome.alarms.create(d.Oq, { when: Date.now(), periodInMinutes: 1 }),
          chrome.alarms.onAlarm.addListener((e) =>
            g(void 0, void 0, void 0, function* () {
              if (e.name === d.Oq) {
                const e = yield (0, d._X)();
                (null == e ? void 0 : e.status) === d.hY.PENDING && h();
              }
            })
          ),
          addEventListener("message", (e) =>
            g(void 0, void 0, void 0, function* () {
              var n, t, o;
              if (
                ((null === (n = e.data) || void 0 === n ? void 0 : n.type) === d.DN && h(),
                (null === (t = e.data) || void 0 === t ? void 0 : t.type) === d.Ll)
              ) {
                const n = null === (o = e.data) || void 0 === o ? void 0 : o.payload;
                if (!n) return;
                const { toolKey: t, fileHandle: r, toolOptions: i } = n;
                if (!t || !r) return;
                switch (t) {
                  case "compress":
                    !(function (e, n) {
                      y(this, void 0, void 0, function* () {
                        return v(e.token, "compress", n, (null == n ? void 0 : n.preset) === p.af.HIGH);
                      });
                    })(r, i);
                    break;
                  case "pdf-to-word":
                    !(function (e, n) {
                      R(this, void 0, void 0, function* () {
                        return v(e.token, "pdf-to-word", n, n.ocrType === _.SOLID);
                      });
                    })(r, i);
                    break;
                  case "pdf-to-excel":
                    !(function (e, n) {
                      R(this, void 0, void 0, function* () {
                        return v(e.token, "pdf-to-excel", n, n.ocrType === _.SOLID);
                      });
                    })(r, i);
                    break;
                  case "pdf-to-ppt":
                    !(function (e, n) {
                      R(this, void 0, void 0, function* () {
                        return v(e.token, "pdf-to-ppt", n, !1);
                      });
                    })(r, i);
                    break;
                  case "pdf-to-jpg":
                    !(function (e, n) {
                      T(this, void 0, void 0, function* () {
                        return v(e.token, "pdf-to-jpg", n, n.mode === m.EXTRACT);
                      });
                    })(r, i);
                }
              }
            })
          );
      },
      1011: (e, n, t) => {
        t.d(n, { LK: () => r, an: () => c, i4: () => i });
        const o = 36e5;
        function r(e) {
          return 6e4 * e;
        }
        function i(e) {
          return e * o;
        }
        function c(e) {
          return 864e5 * e;
        }
      },
      8926: (e, n, t) => {
        var o, r;
        t.d(n, { RG: () => i, af: () => r, iJ: () => c }),
          (function (e) {
            (e.FORCE = "force"), (e.AUTO = "auto"), (e.CUSTOM = "custom"), (e.OFF = "off");
          })(o || (o = {})),
          (function (e) {
            (e.HIGH = "COMPRESS_OPTION_HIGH"), (e.BALANCED = "COMPRESS_OPTION_BALANCED"), (e.CUSTOM = "COMPRESS_OPTION_CUSTOM");
          })(r || (r = {}));
        function i(e) {
          var n, t;
          switch (e.preset) {
            case r.HIGH:
            case r.BALANCED:
              return;
            case r.CUSTOM: {
              if (!e) return { quality: 50, dpi: 300 };
              let o = (null === (n = null == e ? void 0 : e.values) || void 0 === n ? void 0 : n.quality) || 50;
              return (
                (o = o > 100 ? 100 : o),
                (o = o < 0 ? 0 : o),
                { quality: o, dpi: (null === (t = null == e ? void 0 : e.values) || void 0 === t ? void 0 : t.dpi) || 150 }
              );
            }
            default:
              return;
          }
        }
        function c(e) {
          switch (e) {
            case r.HIGH:
              return o.FORCE;
            case r.BALANCED:
              return o.AUTO;
            case r.CUSTOM:
              return o.CUSTOM;
            default:
              return o.OFF;
          }
        }
      },
      385: (e, n, t) => {
        t.d(n, { ck: () => c, is: () => i });
        var o = t(9245),
          r =
            (t(8562),
            function (e, n, t, o) {
              return new (t || (t = Promise))(function (r, i) {
                function c(e) {
                  try {
                    a(o.next(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function s(e) {
                  try {
                    a(o.throw(e));
                  } catch (e) {
                    i(e);
                  }
                }
                function a(e) {
                  var n;
                  e.done
                    ? r(e.value)
                    : ((n = e.value),
                      n instanceof t
                        ? n
                        : new t(function (e) {
                            e(n);
                          })).then(c, s);
                }
                a((o = o.apply(e, n || [])).next());
              });
            });
        const i = () =>
          r(void 0, void 0, void 0, function* () {
            const e = yield (0, o.Px)([o.dR.LOCAL_TOKEN, o.dR.USER_COUNTRY_GEO_IP, o.dR.USER_PROFILE, o.dR.USER_ACTIVE_PRO, o.dR.USER_RT]);
            return {
              countryGeoIP: e[o.dR.USER_COUNTRY_GEO_IP],
              localToken: e[o.dR.LOCAL_TOKEN],
              profile: e[o.dR.USER_PROFILE],
              activePro: e[o.dR.USER_ACTIVE_PRO],
              rt: e[o.dR.USER_RT]
            };
          });
        function c() {
          return r(this, void 0, void 0, function* () {
            return (0, o.Px)(o.dR.USER_ACTIVE_PRO, !1);
          });
        }
      },
      8750: (e, n, t) => {
        t.r(n);
        var o = t(9245);
        chrome.runtime.onInstalled.addListener(() => {
          (0, o.gX)({ [o.ge.PreferenceGoogleSERPEnabled]: !0 }), (0, o.gX)({ [o.ge.PreferenceAutoDownloadEnabled]: !1 });
        });
      },
      9305: (e, n, t) => {
        t.d(n, { Yz: () => a, rA: () => s });
        class o {
          constructor(e, n, t, o) {
            (this.r = e), (this.g = n), (this.b = t), (this.a = o);
          }
          toString() {
            return this.value || (this.value = `rgba(${this.r},${this.g},${this.b},${this.a})`), this.value;
          }
        }
        function r(e, n) {
          const t = parseInt(e, 16);
          return Number.isNaN(t) ? n : t;
        }
        function i(e, n, t, r = 1) {
          return new o(e, n, t, r);
        }
        function c(e) {
          const n = r(e.substr(1, 2), 255),
            t = r(e.substr(3, 2), 255),
            i = r(e.substr(5, 2), 255),
            c = r(e.substr(7, 2), 1);
          return new o(n, t, i, c);
        }
        c("#0055FF"),
          c("#0048D9"),
          c("#003CB2"),
          c("#003399"),
          c("#00194C"),
          c("#F2F6FF"),
          c("#E5EEFF"),
          c("#CCDDFF"),
          c("#B3CCFF"),
          c("#1A1A1A"),
          c("#FAFAFA"),
          c("#F4F4F4"),
          c("#E8E8E8"),
          c("#DDDDDD"),
          c("#BABABA"),
          c("#A3A3A3"),
          c("#757575"),
          c("#5E5E5E"),
          c("#3C3C3C"),
          c("#FFFFFF"),
          c("#000000"),
          c("#F23030"),
          c("#D92B2B"),
          c("#BF2626"),
          c("#911D1D"),
          c("#FEEBEB"),
          c("#FCD6D6"),
          c("#FAACAC");
        const s = c("#FF8000"),
          a =
            (c("#E57300"),
            c("#CC6600"),
            c("#FFF3E6"),
            c("#FFCC99"),
            c("#FFB700"),
            c("#E5A500"),
            c("#CC9200"),
            c("#996E00"),
            c("#FFF8E6"),
            c("#FFF1CC"),
            c("#FFE299"),
            c("#00CC44"));
        c("#00B23B"),
          c("#009933"),
          c("#007A29"),
          c("#E6FAED"),
          c("#CCF5DA"),
          c("#99EBB4"),
          c("#0FC0C5"),
          c("#0DA7AB"),
          c("#0B8E91"),
          c("#097376"),
          c("#E7F9FA"),
          c("#CFF2F3"),
          c("#9FE6E8"),
          c("#3D99F5"),
          c("#3789DB"),
          c("#3079C2"),
          c("#255C93"),
          c("#ECF5FE"),
          c("#D8EBFD"),
          c("#B1D6FB"),
          c("#7961F2"),
          c("#6C57D9"),
          c("#604DBF"),
          c("#493A91"),
          c("#F2F0FE"),
          c("#E4DFFC"),
          c("#C9C0FA"),
          c("#E667E6"),
          c("#CC5BCC"),
          c("#B250B2"),
          c("#8A3E8A"),
          c("#FDF0FD"),
          c("#F5C2F5"),
          c("#FF5975"),
          c("#E55069"),
          c("#CC475E"),
          c("#993546"),
          c("#FFEFF2"),
          c("#FFBDC8"),
          c("#E32B24"),
          c("#C92620"),
          c("#B0211C"),
          c("#0055FF"),
          c("#0048D9"),
          c("#003CB2"),
          c("#FFB700"),
          c("#E5A500"),
          c("#CC9200"),
          c("#996E00"),
          c("#00D958"),
          c("#00BF4D"),
          c("#00A643"),
          c("#008034"),
          c("#0061FF"),
          c("#1977F3"),
          c("#4885ED"),
          c("#DB3236"),
          c("#C32AA3"),
          c("#0077B5"),
          c("#1ED760"),
          c("#1DA1F2"),
          c("#25D366"),
          c("#D9252A"),
          i(26, 26, 26, 0.8),
          i(26, 26, 26, 0.5),
          i(26, 26, 26, 0.3),
          i(26, 26, 26, 0.1);
      },
      4758: (e, n, t) => {
        t.d(n, {
          J: () => s,
          JQ: () => E,
          Ld: () => o,
          Lv: () => _,
          Pz: () => f,
          Tr: () => c,
          a$: () => i,
          aN: () => v,
          dF: () => h,
          ll: () => r,
          oi: () => l,
          qF: () => a,
          wt: () => d,
          xc: () => u
        });
        const o = "ERROR_REFRESH_TOKEN_EXPIRED",
          r = "ERROR_REFRESH_TOKEN_INVALID";
        var i;
        function c({ message: e, name: n, severity: t, cause: o, metadata: r }) {
          const i = new Error(e);
          return (
            void 0 !== n && Object.defineProperty(i, "name", { value: n, enumerable: !1, writable: !0 }),
            void 0 !== o && (i.cause = o),
            void 0 !== t && (i.severity = t),
            void 0 !== r && (i.metadata = Object.assign({}, r)),
            i
          );
        }
        function s() {
          return c({ name: "InvalidCredentialsError", message: "Invalid credentials" });
        }
        function a() {
          return c({ name: "INTERNAL_SERVER_ERROR", message: "Internal Server Error" });
        }
        function u() {
          return c({ name: "UnauthorizedError", message: "Unauthorized request" });
        }
        function d() {
          return c({ name: "TooManyRequestsError", message: "Too many requests" });
        }
        function l(e) {
          return c({ name: "UnexpectedAPIResponseError", message: "Unexpected API response", metadata: { payload: e } });
        }
        function f(e) {
          return c({ name: "UnexpectedAPICodeError", message: `Unexpected API code: ${e}`, metadata: { code: e } });
        }
        function E() {
          return c({ name: "ERROR_TASK_NOT_FOUND", message: "Task not found" });
        }
        function v(e) {
          return c({ name: "ERROR_PROCESSING", message: "Task could not complete due to an error", metadata: { processingErrorType: e } });
        }
        function h() {
          return c({ name: "ERROR_DB_FILE_NOT_FOUND", message: "File not found in db" });
        }
        function _() {
          return c({ name: "ERROR_UPLOAD", message: "Upload failed" });
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
        t.d(n, { Lr: () => o });
        t(8247), t(4758);
        var o;
        !(function (e) {
          (e.IDLE = "Idle"), (e.PENDING = "Pending"), (e.COMPLETED = "Completed"), (e.CANCELED = "Canceled"), (e.FAILED = "Failed");
        })(o || (o = {}));
      }
    },
    n = {};
  function t(o) {
    var r = n[o];
    if (void 0 !== r) return r.exports;
    var i = (n[o] = { exports: {} });
    return e[o](i, i.exports, t), i.exports;
  }
  (t.d = (e, n) => {
    for (var o in n) t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: n[o] });
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
        o = t(9248);
      (0, e.cM)("[Background] Background script started"),
        chrome.notifications.onClicked.addListener(n.handleNotifications),
        chrome.notifications.onButtonClicked.addListener(n.handleNotifications),
        chrome.runtime.onMessage.addListener(o.handleMessage),
        chrome.runtime.onMessageExternal.addListener(o.handleExternalMessage);
    })();
})();
