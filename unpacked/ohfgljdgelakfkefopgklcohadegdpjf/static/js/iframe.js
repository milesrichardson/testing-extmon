(() => {
  "use strict";
  const E = 36e5;
  var e;
  !(function (E) {
    (E.TIMEOUT = "timeout"),
      (E.FAILED = "failed"),
      (E.PASSWORD = "password"),
      (E.SCAN = "scan"),
      (E.CORRUPTED_FILE = "corrupt_pdf"),
      (E.EMPTY_FILE = "no_pages_in_pdf"),
      (E.INTERNAL_ERROR = "internal_server_error"),
      (E.INPUT = "input"),
      (E.INPUT_TOKENS = "input_tokens"),
      (E.EMPTY_INPUT_TOKENS = "empty_input_tokens"),
      (E.INVALID_OPTIONS = "invalid_options"),
      (E.MISSING_PASSWORD = "password-not-set"),
      (E.SOURCE_NOT_READABLE = "pdf_source_not_readable"),
      (E.SOURCE_EMPTY = "pdf_source_empty"),
      (E.EMPTY_RESULT = "no_result");
  })(e || (e = {}));
  var _;
  !(function (E) {
    (E.GOOGLE = "google"), (E.FACEBOOK = "facebook"), (E.CREDENTIALS = "credentials"), (E.UNKNOWN = "unknown");
  })(_ || (_ = {}));
  for (
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      t = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256),
      o = 0;
    o < n.length;
    o++
  )
    t[n.charCodeAt(o)] = o;
  var T;
  !(function (E) {
    (E.IDLE = "Idle"), (E.PENDING = "Pending"), (E.COMPLETED = "Completed"), (E.CANCELED = "Canceled"), (E.FAILED = "Failed");
  })(T || (T = {}));
  var r, S, A, a;
  !(function (E) {
    (E.DROP_AREA = "droparea"), (E.DRAG_AND_DROP = "drag-and-drop"), (E.RETRY = "retry");
  })(r || (r = {})),
    (function (E) {
      (E.FILE_HANDLE_IDLE = "fileHandleIdle"),
        (E.FILE_HANDLE_PROGRESS = "fileHandleProgress"),
        (E.FILE_HANDLE_FAILURE = "fileHandleFailure");
    })(S || (S = {})),
    (function (E) {
      (E.FORCE = "force"), (E.AUTO = "auto"), (E.CUSTOM = "custom"), (E.OFF = "off");
    })(A || (A = {})),
    (function (E) {
      (E.HIGH = "COMPRESS_OPTION_HIGH"), (E.BALANCED = "COMPRESS_OPTION_BALANCED"), (E.CUSTOM = "COMPRESS_OPTION_CUSTOM");
    })(a || (a = {}));
  var s, O;
  !(function (E) {
    (E.CREATED = "Created"), (E.REQUEST = "Request"), (E.PENDING = "Pending"), (E.SUCCESS = "Success"), (E.FAILURE = "Failure");
  })(s || (s = {})),
    (function (E) {
      (E.AUTO = "auto"), (E.NOTIFICATION = "notification"), (E.RESULT_SCREEN = "result"), (E.UNKNOWN = "unknown");
    })(O || (O = {}));
  var R;
  !(function (E) {
    (E.ID_JOB_RESULT = "jobResult"), (E.ID_RESULT = "result");
  })(R || (R = {}));
  chrome.runtime.getURL("images/smallpdf_48.png");
  var l, d;
  !(function (E) {
    (E.IS_PDIUM_OPEN_ON_LOAD = "smallpdf.pdfium.isOpen"),
      (E.MIGRATIONS_SCHEMA_VERSION = "smallpdf.msv"),
      (E.JOB_RESULT_TAB = "smallpdf.jobResult.tab"),
      (E.USER_FAVORITES = "smallpdf.user.favorites"),
      (E.LOCAL_TOKEN = "smallpdf.user.localToken"),
      (E.USER_COUNTRY_GEO_IP = "smallpdf.user.countryGeoIP"),
      (E.USER_PROFILE = "smallpdf.user.profile"),
      (E.USER_ACTIVE_PRO = "smallpdf.user.ap"),
      (E.USER_RT = "smallpdf.user.rt"),
      (E.ACCESS_TOKEN = "KEY_AUTH_AT"),
      (E.REFRESH_TOKEN = "KEY_AUTH_RT"),
      (E.TRACKING_EVENTS = "STORAGE_KEY_TRACKING_EVENTS_QUEUE"),
      (E.USER_DATA_SYNCED = "STORAGE_KEY_USER_DATA_SYNCED"),
      (E.USER_DATA_LAST_SYNC = "smallpdf.dls"),
      (E.FILE_HANDLE = "STORAGE_KEY_FILE_HANDLE"),
      (E.FILE_HANDLE_RESULT = "STORAGE_KEY_FILE_HANDLE_RESULT"),
      (E.TASK = "STORAGE_KEY_TASK"),
      (E.SYSTEM_OS = "STORAGE_KEY_SYSTEM_OS"),
      (E.SYSTEM_LOCALE = "STORAGE_KEY_SYSTEM_LOCALE"),
      (E.INSTALLATION_DATE = "STORAGE_KEY_INSTALLATION_DATE"),
      (E.PROFILE = "STORAGE_KEY_PROFILE"),
      (E.AUTH_CODE_VERIFIER = "STORAGE_KEY_AUTH_CODE_VERIFIER"),
      (E.AUTH_STATE_CODE = "STORAGE_KEY_AUTH_STATE_CODE"),
      (E.AUTH_PROVIDER = "STORAGE_KEY_AUTH_PROVIDER"),
      (E.FAILED_LOGIN_ATTEMPTS = "smallpdf.fla"),
      (E.THANKS_PAGE_LOGGED_ONCE = "smallpdf.thanks_event"),
      (E.SERVICE_WORKER_LOGS = "smallpdf.service_worker_logs");
  })(l || (l = {})),
    (function (E) {
      (E.PreferenceGoogleSERPEnabled = "smallpdf.options.googleSerpEnabled"),
        (E.PreferenceAutoDownloadEnabled = "STORAGE_KEY_OPTIONS_AUTO_DOWNLOAD"),
        (E.Experiments = "STORAGE_KEY_EXPERIMENTS"),
        (E.TasksCount = "STORAGE_KEY_TASKS_COUNT"),
        (E.LastTaskTime = "STORAGE_KEY_LAST_TASK_TIME"),
        (E.FreeTasksResetTime = "smallpdf.ftrt"),
        (E.MIGRATIONS_SCHEMA_VERSION = "smallpdf.msv");
    })(d || (d = {}));
  var i;
  !(function (E) {
    (E.ACCOUNT = "account"), (E.HELP = "help"), (E.APPS = "downloads");
  })(i || (i = {}));
  var u;
  !(function (E) {
    (E.Windows = "windows"),
      (E.Linux = "linux"),
      (E.MacOS = "mac_os"),
      (E.Android = "android"),
      (E.OpenBSD = "openbsd"),
      (E.ChromeODS = "chrome_os");
  })(u || (u = {}));
  var I = function (E, e, _, n) {
    return new (_ || (_ = Promise))(function (t, o) {
      function T(E) {
        try {
          S(n.next(E));
        } catch (E) {
          o(E);
        }
      }
      function r(E) {
        try {
          S(n.throw(E));
        } catch (E) {
          o(E);
        }
      }
      function S(E) {
        E.done
          ? t(E.value)
          : (function (E) {
              return E instanceof _
                ? E
                : new _(function (e) {
                    e(E);
                  });
            })(E.value).then(T, r);
      }
      S((n = n.apply(E, e || [])).next());
    });
  };
  window.addEventListener(
    "message",
    function (E) {
      const e = E.data;
      "object" == typeof e &&
        null !== e &&
        (() => {
          I(this, void 0, void 0, function* () {
            const e = yield new Promise((e, _) => {
              const n = new XMLHttpRequest();
              (n.responseType = "blob"),
                n.addEventListener("load", (E) => {
                  0 === E.target.status || E.target.status < 400 ? e(E.target.response) : _(new Error(E.target.statusText));
                }),
                n.addEventListener("error", (E) => {
                  _(new Error(E.target));
                }),
                n.addEventListener("abort", () => _(new Error("Aborted"))),
                n.open("GET", `${E.data.url}?utm_source=ce_generic`, !0),
                n.send();
            });
            E.source.postMessage({ id: E.data.id, blob: e }, "*");
          });
        })();
    },
    !1
  );
})();
