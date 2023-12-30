!(function (u) {
  function e(e) {
    for (var t, r, n = e[0], o = e[1], i = 0, a = []; i < n.length; i++)
      (r = n[i]), Object.prototype.hasOwnProperty.call(s, r) && s[r] && a.push(s[r][0]), (s[r] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (u[t] = o[t]);
    for (l && l(e); a.length; ) a.shift()();
  }
  var r = {},
    s = {
      15: 0
    };
  function c(e) {
    return f.p + "" + e + ".b2215ac3c45eaa93f881.js";
  }
  function f(e) {
    var t;
    return (
      r[e] ||
      ((t = r[e] =
        {
          i: e,
          l: !1,
          exports: {}
        }),
      u[e].call(t.exports, t, t.exports, f),
      (t.l = !0),
      t)
    ).exports;
  }
  (f.e = function (r) {
    var e,
      t = [],
      n = function (t) {
        const r = c(t);
        chrome.runtime.sendMessage(
          "hjngolefdpdnooamgdldlkjgmdcmcjnc",
          {
            action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
            scriptPath: r
          },
          function () {
            chrome.runtime.lastError && console.error("Failed to load dependency", r);
            const e = s[t];
            0 !== e && (e && e[1](), (s[t] = void 0));
          }
        );
      },
      o = function (o) {
        var e,
          t = document.getElementsByTagName("head")[0],
          i = document.createElement("script"),
          a =
            ((i.charset = "utf-8"),
            (i.timeout = 120),
            f.nc && i.setAttribute("nonce", f.nc),
            (i.src = c(o)),
            0 !== i.src.indexOf(window.location.origin + "/") && (i.crossOrigin = "anonymous"),
            (e = function (e) {
              (i.onerror = i.onload = null), clearTimeout(a);
              var t,
                r,
                n = s[o];
              0 !== n &&
                (n &&
                  ((t = e && ("load" === e.type ? "missing" : e.type)),
                  (e = e && e.target && e.target.src),
                  ((r = new Error("Loading chunk " + o + " failed.\n(" + t + ": " + e + ")")).type = t),
                  (r.request = e),
                  n[1](r)),
                (s[o] = void 0));
            }),
            setTimeout(function () {
              e({
                type: "timeout",
                target: i
              });
            }, 12e4));
        (i.onerror = i.onload = e), t.appendChild(i);
      },
      i = s[r];
    return (
      0 !== i &&
        (i
          ? t.push(i[2])
          : ((e = new Promise(function (e, t) {
              i = s[r] = [e, t];
            })),
            t.push((i[2] = e)),
            ("chrome" === window.equatioCoreChunkLoading ? n : o)(r))),
      Promise.all(t)
    );
  }),
    (f.m = u),
    (f.c = r),
    (f.d = function (e, t, r) {
      f.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
        });
    }),
    (f.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (f.t = function (t, e) {
      if ((1 & e && (t = f(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (f.r(r),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          f.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (f.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return f.d(t, "a", t), t;
    }),
    (f.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (f.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/"),
    (f.oe = function (e) {
      throw (console.error(e), e);
    });
  var t = (n = window.equatioChromeJsonp = window.equatioChromeJsonp || []).push.bind(n);
  n.push = e;
  for (var n = n.slice(), o = 0; o < n.length; o++) e(n[o]);
  var l = t;
  f((f.s = 394));
})({
  0: function (e, t, r) {
    "use strict";
    t.a = Object.freeze({
      InjectDocsRequirements: "inject_docs_requirements",
      InjectFormRequirements: "inject_form_requirements",
      EnsureLoggedIntoFirebase: "ensure_logged_into_firebase",
      GetLicense: "get_license",
      EnterProductCode: "enter_product_code",
      GetUserSettings: "get_user_settings",
      UpdateUserSettings: "update_user_settings",
      AddFavourites: "add_favourites",
      RemoveFavourites: "remove_favourites",
      GetUserFavourites: "get_user_favourites",
      OpenGoogleFormsPicker: "open_google_forms_picker",
      GoogleFormsPickerLoaded: "google_forms_picker_loaded",
      SetProfileType: "set_user_settings_profile_type",
      SetShowEquatioOnFirstRun: "set_show_equatio_on_first_run",
      GetShouldShowEquatioOnFirstRun: "get_should_show_equatio_on_first_run",
      RegisterCompanionAppTarget: "register_companion_app_target",
      DisconnectCompanionDoc: "disconnect_companion_ref",
      UpdateGoogleSheetEquations: "update_google_sheet_equations",
      SetHandwritingCount: "set_handwriting_count",
      GetHandwritingCount: "get_handwriting_count",
      ShowGoogleFormsReminder: "upgrade_google_forms_reminder",
      ShowHandwritingExceededReminder: "upgrade_handwriting_exceeded",
      ShowPredictionReminder: "upgrade_prediction",
      ShowRenewalReminder: "upgrade_renewal",
      ShowTrialExpiration: "upgrade_trial_expiration",
      ShowUpgradeReminder: "upgrade_reminder",
      ShowReviewReminder: "review_reminder",
      SendAnalyticsScreen: "send_analytics_screen",
      SendAnalyticsEvent: "send_analytics_event",
      StartScreenshotReader: "start_screenshot_reader",
      CaptureScreenshot: "capture_screenshot",
      ScanMathpixOcr: "scan_mathpix_ocr",
      UploadImageToProxy: "upload_image_proxy",
      DismissReviewReminder: "dismiss_review_reminder",
      InjectWebPageToolbar: "inject_web_page_toolbar",
      MathDiscovered: "math_discovered",
      IsDiscoverabilityFirstTime: "isDiscoverabilityFirstTime",
      SetDiscoverabilityEnabled: "setDiscoverabilityEnabled",
      GetMathDiscoverability: "getMathDiscoverability",
      DiscoverabilitySessionDisable: "discoverability_session_disable",
      DismissGSuiteMathDiscover: "dismiss_gsuite_math_discover",
      HasGSuiteDiscoverOverlayShown: "has_gsuite_discover_overlay_shown",
      OpenMathspace: "open_mathspace",
      GetPlatformOs: "get_platform_os",
      GetIsInstalled: "is_installed",
      IsLockedForms: "is_locked_forms",
      InsertImageGoogleApi: "insert_image_google_api",
      GetMolecularFilter: "get_molecular_filter",
      ShowInfoPopup: "show_equatio_info_popup",
      OfficeAddToClipboard: "office_add_to_clipboard",
      ExtractLatexFromUrl: "extract_latex_from_url",
      OfficeCanUseApp: "office_can_use_app",
      SwitchAccount: "switch_account",
      GetDisplayEmail: "get_display_email",
      ChromeLogin: "chrome_login",
      GetXSRFToken: "get_xsrf_token",
      LoginToFirebase: "login_to_firebase",
      SetCanShowClipboardPopup: "set_can_show_clipboard_popup",
      GetCanShowClipboardPopup: "get_can_show_clipboard_popup",
      CreateSpeechServerData: "create_speech_server_data",
      InjectHtmlEditorApi: "inject_html_editor_api",
      HtmlEditorApiAction: "send_html_editor_api_action",
      MathspaceTabClosed: "equatio_mathspace_ext_tab_closed",
      MergeFirebaseFavourites: "merge_firebase_favourites",
      FireDatadeskUpdate: "fire_datadesk_update",
      MathSolverFetch: "equatio_math_solver_fetch",
      GetFormsApiPermission: "equatio_get_forms_api_permissions",
      CreateFormsQuestions: "equatio_create_forms_questions",
      GenerateMathQuestions: "equatio_generate_math_questions",
      ShowFormsGeneratorUi: "show_forms_generator_ui",
      LoginWithNYC: "equatio_login_with_nyc",
      SendAnalyticsEventGa4: "equatio_analytic_event_ga4"
    });
  },
  1: function (e, t, r) {
    r = r(46)();
    e.exports = r;
    try {
      regeneratorRuntime = r;
    } catch (e) {
      "object" == typeof globalThis ? (globalThis.regeneratorRuntime = r) : Function("r", "regeneratorRuntime = r")(r);
    }
  },
  10: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    }),
      r.d(t, "d", function () {
        return i;
      }),
      r.d(t, "c", function () {
        return a;
      });
    const n = {
        GoogleDocs: "Google Docs",
        GoogleForms: "Google Forms",
        GoogleSlides: "Google Slides",
        GoogleDrawings: "Google Drawings",
        GoogleSheets: "Google Sheets"
      },
      o = {
        document: n.GoogleDocs,
        forms: n.GoogleForms,
        presentation: n.GoogleSlides,
        drawings: n.GoogleDrawings,
        spreadsheets: n.GoogleSheets
      },
      i = (e = window.location) => {
        const t = e.hostname,
          r = e.pathname;
        if ("docs.google.com" === t)
          return (
            0 <= r.indexOf("/forms/") &&
            (r.endsWith("/viewform") ||
              r.endsWith("/formResponse") ||
              r.endsWith("/prefill") ||
              r.endsWith("/startquiz") ||
              r.endsWith("/viewscore"))
          );
      },
      a = (e = window.location) => {
        const t = e.hostname,
          r = e.pathname;
        if ("docs.google.com" === t) {
          let e;
          const n = r.split("/").filter((e) => !!e);
          return (e = r.startsWith("/a/") ? n[2] : n[0]), o[e];
        }
      };
    t.b = () => -1 === window.location.href.indexOf("/document/");
  },
  112: function (T, e, t) {
    "use strict";
    /** @license React v16.13.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var f = t(89),
      t = "function" == typeof Symbol && Symbol.for,
      l = t ? Symbol.for("react.element") : 60103,
      s = t ? Symbol.for("react.portal") : 60106,
      r = t ? Symbol.for("react.fragment") : 60107,
      n = t ? Symbol.for("react.strict_mode") : 60108,
      o = t ? Symbol.for("react.profiler") : 60114,
      i = t ? Symbol.for("react.provider") : 60109,
      a = t ? Symbol.for("react.context") : 60110,
      u = t ? Symbol.for("react.forward_ref") : 60112,
      c = t ? Symbol.for("react.suspense") : 60113,
      p = t ? Symbol.for("react.memo") : 60115,
      h = t ? Symbol.for("react.lazy") : 60116,
      d = "function" == typeof Symbol && Symbol.iterator;
    function y(e) {
      for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++)
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      m = {};
    function w(e, t, r) {
      (this.props = e), (this.context = t), (this.refs = m), (this.updater = r || g);
    }
    function v() {}
    function b(e, t, r) {
      (this.props = e), (this.context = t), (this.refs = m), (this.updater = r || g);
    }
    (w.prototype.isReactComponent = {}),
      (w.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(y(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (w.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (v.prototype = w.prototype);
    var t = (b.prototype = new v()),
      _ =
        ((t.constructor = b),
        f(t, w.prototype),
        (t.isPureReactComponent = !0),
        {
          current: null
        }),
      x = Object.prototype.hasOwnProperty,
      S = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      };
    function E(e, t, r) {
      var n,
        o = {},
        i = null,
        a = null;
      if (null != t)
        for (n in (void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (i = "" + t.key), t))
          x.call(t, n) && !S.hasOwnProperty(n) && (o[n] = t[n]);
      var u = arguments.length - 2;
      if (1 === u) o.children = r;
      else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        o.children = s;
      }
      if (e && e.defaultProps) for (n in (u = e.defaultProps)) void 0 === o[n] && (o[n] = u[n]);
      return {
        $$typeof: l,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: _.current
      };
    }
    function M(e, t) {
      return {
        $$typeof: l,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
      };
    }
    function O(e) {
      return "object" == typeof e && null !== e && e.$$typeof === l;
    }
    function F(e) {
      var t = {
        "=": "=0",
        ":": "=2"
      };
      return (
        "$" +
        ("" + e).replace(/[=:]/g, function (e) {
          return t[e];
        })
      );
    }
    var A = /\/+/g,
      C = [];
    function j(e, t, r, n) {
      var o;
      return C.length
        ? (((o = C.pop()).result = e), (o.keyPrefix = t), (o.func = r), (o.context = n), (o.count = 0), o)
        : {
            result: e,
            keyPrefix: t,
            func: r,
            context: n,
            count: 0
          };
    }
    function U(e) {
      (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), C.length < 10 && C.push(e);
    }
    function I(e, t, r, n) {
      var o = !1;
      if (null === (e = "undefined" !== (a = typeof e) && "boolean" !== a ? e : null)) o = !0;
      else
        switch (a) {
          case "string":
          case "number":
            o = !0;
            break;

          case "object":
            switch (e.$$typeof) {
              case l:
              case s:
                o = !0;
            }
        }
      if (o) return r(n, e, "" === t ? "." + L(e, 0) : t), 1;
      if (((o = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
        for (var i = 0; i < e.length; i++) {
          var a,
            u = t + L((a = e[i]), i);
          o += I(a, u, r, n);
        }
      else if (
        "function" ==
        typeof (u = null !== e && "object" == typeof e && "function" == typeof (u = (d && e[d]) || e["@@iterator"]) ? u : null)
      )
        for (e = u.call(e), i = 0; !(a = e.next()).done; ) o += I((a = a.value), (u = t + L(a, i++)), r, n);
      else if ("object" === a)
        throw ((r = "" + e), Error(y(31, "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, "")));
      return o;
    }
    function k(e, t, r) {
      return null == e ? 0 : I(e, "", t, r);
    }
    function L(e, t) {
      return "object" == typeof e && null !== e && null != e.key ? F(e.key) : t.toString(36);
    }
    function q(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function G(e, t, r) {
      var n = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? R(e, n, r, function (e) {
              return e;
            })
          : null != e &&
            (O(e) && (e = M(e, o + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(A, "$&/") + "/") + r)), n.push(e));
    }
    function R(e, t, r, n, o) {
      var i = "";
      k(e, G, (t = j(t, (i = null != r ? ("" + r).replace(A, "$&/") + "/" : i), n, o))), U(t);
    }
    var P = {
      current: null
    };
    function B() {
      var e = P.current;
      if (null === e) throw Error(y(321));
      return e;
    }
    t = {
      ReactCurrentDispatcher: P,
      ReactCurrentBatchConfig: {
        suspense: null
      },
      ReactCurrentOwner: _,
      IsSomeRendererActing: {
        current: !1
      },
      assign: f
    };
    (e.Children = {
      map: function (e, t, r) {
        return null == e || R(e, (e = []), null, t, r), e;
      },
      forEach: function (e, t, r) {
        if (null == e) return e;
        k(e, q, (t = j(null, null, t, r))), U(t);
      },
      count: function (e) {
        return k(
          e,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (e) {
        var t = [];
        return (
          R(e, t, null, function (e) {
            return e;
          }),
          t
        );
      },
      only: function (e) {
        if (O(e)) return e;
        throw Error(y(143));
      }
    }),
      (e.Component = w),
      (e.Fragment = r),
      (e.Profiler = o),
      (e.PureComponent = b),
      (e.StrictMode = n),
      (e.Suspense = c),
      (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t),
      (e.cloneElement = function (e, t, r) {
        if (null == e) throw Error(y(267, e));
        var n = f({}, e.props),
          o = e.key,
          i = e.ref,
          a = e._owner;
        if (null != t)
          for (u in (void 0 !== t.ref && ((i = t.ref), (a = _.current)),
          void 0 !== t.key && (o = "" + t.key),
          e.type && e.type.defaultProps && (s = e.type.defaultProps),
          t))
            x.call(t, u) && !S.hasOwnProperty(u) && (n[u] = (void 0 === t[u] && void 0 !== s ? s : t)[u]);
        var u = arguments.length - 2;
        if (1 === u) n.children = r;
        else if (1 < u) {
          for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
          n.children = s;
        }
        return {
          $$typeof: l,
          type: e.type,
          key: o,
          ref: i,
          props: n,
          _owner: a
        };
      }),
      (e.createContext = function (e, t) {
        return (
          ((e = {
            $$typeof: a,
            _calculateChangedBits: (t = void 0 === t ? null : t),
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          }).Provider = {
            $$typeof: i,
            _context: e
          }),
          (e.Consumer = e)
        );
      }),
      (e.createElement = E),
      (e.createFactory = function (e) {
        var t = E.bind(null, e);
        return (t.type = e), t;
      }),
      (e.createRef = function () {
        return {
          current: null
        };
      }),
      (e.forwardRef = function (e) {
        return {
          $$typeof: u,
          render: e
        };
      }),
      (e.isValidElement = O),
      (e.lazy = function (e) {
        return {
          $$typeof: h,
          _ctor: e,
          _status: -1,
          _result: null
        };
      }),
      (e.memo = function (e, t) {
        return {
          $$typeof: p,
          type: e,
          compare: void 0 === t ? null : t
        };
      }),
      (e.useCallback = function (e, t) {
        return B().useCallback(e, t);
      }),
      (e.useContext = function (e, t) {
        return B().useContext(e, t);
      }),
      (e.useDebugValue = function () {}),
      (e.useEffect = function (e, t) {
        return B().useEffect(e, t);
      }),
      (e.useImperativeHandle = function (e, t, r) {
        return B().useImperativeHandle(e, t, r);
      }),
      (e.useLayoutEffect = function (e, t) {
        return B().useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return B().useMemo(e, t);
      }),
      (e.useReducer = function (e, t, r) {
        return B().useReducer(e, t, r);
      }),
      (e.useRef = function (e) {
        return B().useRef(e);
      }),
      (e.useState = function (e) {
        return B().useState(e);
      }),
      (e.version = "16.13.1");
  },
  116: function (e, ne, t) {
    "use strict";
    !function (e) {
      function r(e, t) {
        var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
        if (null != r) {
          var n,
            o,
            i,
            a,
            u = [],
            s = !0,
            c = !1;
          try {
            if (((i = (r = r.call(e)).next), 0 === t)) {
              if (Object(r) !== r) return;
              s = !1;
            } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
          } catch (e) {
            (c = !0), (o = e);
          } finally {
            try {
              if (!s && null != r.return && ((a = r.return()), Object(a) !== a)) return;
            } finally {
              if (c) throw o;
            }
          }
          return u;
        }
      }
      function n(e, t) {
        return o(e) || r(e, t) || i(e, t) || u();
      }
      function o(e) {
        if (Array.isArray(e)) return e;
      }
      function i(e, t) {
        var r;
        if (e)
          return "string" == typeof e
            ? a(e, t)
            : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) ||
              "Set" === r
            ? Array.from(e)
            : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? a(e, t)
            : void 0;
      }
      function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function u() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      Object.defineProperty(ne, "__esModule", {
        value: !0
      });
      var s =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof window
          ? window
          : void 0 !== e
          ? e
          : "undefined" != typeof self
          ? self
          : {};
      function t(e, t) {
        return (
          e(
            (t = {
              exports: {}
            }),
            t.exports
          ),
          t.exports
        );
      }
      var c,
        p = function (e, t) {
          if (((t = t.split(":")[0]), !(e = +e))) return !1;
          switch (t) {
            case "http":
            case "ws":
              return 80 !== e;

            case "https":
            case "wss":
              return 443 !== e;

            case "ftp":
              return 21 !== e;

            case "gopher":
              return 70 !== e;

            case "file":
              return !1;
          }
          return 0 !== e;
        },
        T = Object.prototype.hasOwnProperty;
      function f(e) {
        try {
          return decodeURIComponent(e.replace(/\+/g, " "));
        } catch (e) {
          return null;
        }
      }
      function l(e) {
        try {
          return encodeURIComponent(e);
        } catch (e) {
          return null;
        }
      }
      function M(e) {
        for (var t = /([^=?#&]+)=?([^&]*)/g, r = {}; (o = t.exec(e)); ) {
          var n = f(o[1]),
            o = f(o[2]);
          null === n || null === o || n in r || (r[n] = o);
        }
        return r;
      }
      function F(e, t) {
        var r,
          n,
          o = [];
        for (n in ("string" != typeof (t = t || "") && (t = "?"), e))
          T.call(e, n) &&
            ((r = e[n]) || (null !== r && r !== c && !isNaN(r)) || (r = ""), (n = l(n)), (r = l(r)), null !== n) &&
            null !== r &&
            o.push(n + "=" + r);
        return o.length ? t + o.join("&") : "";
      }
      var h = {
          stringify: F,
          parse: M
        },
        q = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        d = /[\n\r\t]/g,
        G = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        y = /:\d+$/,
        D = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        N = /^[a-zA-Z]:/;
      function g(e) {
        return (e || "").toString().replace(q, "");
      }
      var m = [
          ["#", "hash"],
          ["?", "query"],
          function (e, t) {
            return b(t.protocol) ? e.replace(/\\/g, "/") : e;
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d*)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1]
        ],
        w = {
          hash: 1,
          query: 1
        };
      function v(e) {
        var t,
          r = (r = "undefined" != typeof window ? window : void 0 !== s ? s : "undefined" != typeof self ? self : {}).location || {},
          n = {},
          r = typeof (e = e || r);
        if ("blob:" === e.protocol) n = new x(unescape(e.pathname), {});
        else if ("string" == r) for (t in ((n = new x(e, {})), w)) delete n[t];
        else if ("object" == r) {
          for (t in e) t in w || (n[t] = e[t]);
          void 0 === n.slashes && (n.slashes = G.test(e.href));
        }
        return n;
      }
      function b(e) {
        return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e;
      }
      function _(e, t) {
        (e = (e = g(e)).replace(d, "")), (t = t || {});
        var r,
          n = (e = D.exec(e))[1] ? e[1].toLowerCase() : "",
          o = !!e[2],
          i = !!e[3],
          a = 0;
        return (
          o
            ? (a = i ? ((r = e[2] + e[3] + e[4]), e[2].length + e[3].length) : ((r = e[2] + e[4]), e[2].length))
            : i
            ? ((r = e[3] + e[4]), (a = e[3].length))
            : (r = e[4]),
          "file:" === n
            ? 2 <= a && (r = r.slice(2))
            : b(n)
            ? (r = e[4])
            : n
            ? o && (r = r.slice(2))
            : 2 <= a && b(t.protocol) && (r = e[4]),
          {
            protocol: n,
            slashes: o || b(n),
            slashesCount: a,
            rest: r
          }
        );
      }
      function $(e, t) {
        if ("" === e) return t;
        for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, t = r[n - 1], o = !1, i = 0; n--; )
          "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), i++) : i && (0 === n && (o = !0), r.splice(n, 1), i--);
        return o && r.unshift(""), ("." !== t && ".." !== t) || r.push(""), r.join("/");
      }
      function x(e, t, r) {
        if (((e = (e = g(e)).replace(d, "")), !(this instanceof x))) return new x(e, t, r);
        var n,
          o,
          i,
          a,
          u,
          s = m.slice(),
          c = typeof t,
          f = this,
          l = 0;
        for (
          "object" != c && "string" != c && ((r = t), (t = null)),
            r && "function" != typeof r && (r = h.parse),
            n = !(c = _(e || "", (t = v(t)))).protocol && !c.slashes,
            f.slashes = c.slashes || (n && t.slashes),
            f.protocol = c.protocol || t.protocol || "",
            e = c.rest,
            (("file:" === c.protocol && (2 !== c.slashesCount || N.test(e))) ||
              (!c.slashes && (c.protocol || c.slashesCount < 2 || !b(f.protocol)))) &&
              (s[3] = [/(.*)/, "pathname"]);
          l < s.length;
          l++
        )
          "function" == typeof (i = s[l])
            ? (e = i(e, f))
            : ((o = i[0]),
              (u = i[1]),
              o != o
                ? (f[u] = e)
                : "string" == typeof o
                ? ~(a = "@" === o ? e.lastIndexOf(o) : e.indexOf(o)) &&
                  (e = "number" == typeof i[2] ? ((f[u] = e.slice(0, a)), e.slice(a + i[2])) : ((f[u] = e.slice(a)), e.slice(0, a)))
                : (a = o.exec(e)) && ((f[u] = a[1]), (e = e.slice(0, a.index))),
              (f[u] = f[u] || (n && i[3] && t[u]) || ""),
              i[4] && (f[u] = f[u].toLowerCase()));
        r && (f.query = r(f.query)),
          n &&
            t.slashes &&
            "/" !== f.pathname.charAt(0) &&
            ("" !== f.pathname || "" !== t.pathname) &&
            (f.pathname = $(f.pathname, t.pathname)),
          "/" !== f.pathname.charAt(0) && b(f.protocol) && (f.pathname = "/" + f.pathname),
          p(f.port, f.protocol) || ((f.host = f.hostname), (f.port = "")),
          (f.username = f.password = ""),
          f.auth &&
            (~(a = f.auth.indexOf(":"))
              ? ((f.username = f.auth.slice(0, a)),
                (f.username = encodeURIComponent(decodeURIComponent(f.username))),
                (f.password = f.auth.slice(a + 1)),
                (f.password = encodeURIComponent(decodeURIComponent(f.password))))
              : (f.username = encodeURIComponent(decodeURIComponent(f.auth))),
            (f.auth = f.password ? f.username + ":" + f.password : f.username)),
          (f.origin = "file:" !== f.protocol && b(f.protocol) && f.host ? f.protocol + "//" + f.host : "null"),
          (f.href = f.toString());
      }
      function z(e, t, r) {
        var n = this;
        switch (e) {
          case "query":
            "string" == typeof t && t.length && (t = (r || h.parse)(t)), (n[e] = t);
            break;

          case "port":
            (n[e] = t), p(t, n.protocol) ? t && (n.host = n.hostname + ":" + t) : ((n.host = n.hostname), (n[e] = ""));
            break;

          case "hostname":
            (n[e] = t), n.port && (t += ":" + n.port), (n.host = t);
            break;

          case "host":
            (n[e] = t),
              y.test(t) ? ((t = t.split(":")), (n.port = t.pop()), (n.hostname = t.join(":"))) : ((n.hostname = t), (n.port = ""));
            break;

          case "protocol":
            (n.protocol = t.toLowerCase()), (n.slashes = !r);
            break;

          case "pathname":
          case "hash":
            t ? ((o = "pathname" === e ? "/" : "#"), (n[e] = t.charAt(0) !== o ? o + t : t)) : (n[e] = t);
            break;

          case "username":
          case "password":
            n[e] = encodeURIComponent(t);
            break;

          case "auth":
            var o = t.indexOf(":");
            ~o
              ? ((n.username = t.slice(0, o)),
                (n.username = encodeURIComponent(decodeURIComponent(n.username))),
                (n.password = t.slice(o + 1)),
                (n.password = encodeURIComponent(decodeURIComponent(n.password))))
              : (n.username = encodeURIComponent(decodeURIComponent(t)));
        }
        for (var i = 0; i < m.length; i++) {
          var a = m[i];
          a[4] && (n[a[1]] = n[a[1]].toLowerCase());
        }
        return (
          (n.auth = n.password ? n.username + ":" + n.password : n.username),
          (n.origin = "file:" !== n.protocol && b(n.protocol) && n.host ? n.protocol + "//" + n.host : "null"),
          (n.href = n.toString()),
          n
        );
      }
      function H(e) {
        (e && "function" == typeof e) || (e = h.stringify);
        var t = this,
          r = t.host,
          n =
            ((n = t.protocol) && ":" !== n.charAt(n.length - 1) && (n += ":"),
            n + ((t.protocol && t.slashes) || b(t.protocol) ? "//" : ""));
        return (
          t.username
            ? ((n += t.username), t.password && (n += ":" + t.password), (n += "@"))
            : t.password
            ? (n = n + (":" + t.password) + "@")
            : "file:" !== t.protocol && b(t.protocol) && !r && "/" !== t.pathname && (n += "@"),
          (":" === r[r.length - 1] || (y.test(t.hostname) && !t.port)) && (r += ":"),
          (n += r + t.pathname),
          (r = "object" == typeof t.query ? e(t.query) : t.query) && (n += "?" !== r.charAt(0) ? "?" + r : r),
          t.hash && (n += t.hash),
          n
        );
      }
      (x.prototype = {
        set: z,
        toString: H
      }),
        (x.extractProtocol = _),
        (x.location = v),
        (x.trimLeft = g),
        (x.qs = h);
      for (
        var W = x,
          e = Z,
          S = X,
          Y = te,
          E = [],
          O = [],
          V = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          C = 0,
          J = A.length;
        C < J;
        ++C
      )
        (E[C] = A[C]), (O[A.charCodeAt(C)] = C);
      function j(e) {
        var t = e.length;
        if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
        return (t = (e = -1 === (e = e.indexOf("=")) ? t : e) === t ? 0 : 4 - (e % 4)), [e, t];
      }
      function Z(e) {
        return (3 * ((e = j(e))[0] + (e = e[1]))) / 4 - e;
      }
      function Q(e, t, r) {
        return (3 * (t + r)) / 4 - r;
      }
      function X(e) {
        for (var t, r = (n = j(e))[0], n = n[1], o = new V(Q(e, r, n)), i = 0, a = 0 < n ? r - 4 : r, u = 0; u < a; u += 4)
          (t = (O[e.charCodeAt(u)] << 18) | (O[e.charCodeAt(u + 1)] << 12) | (O[e.charCodeAt(u + 2)] << 6) | O[e.charCodeAt(u + 3)]),
            (o[i++] = (t >> 16) & 255),
            (o[i++] = (t >> 8) & 255),
            (o[i++] = 255 & t);
        return (
          2 === n && ((t = (O[e.charCodeAt(u)] << 2) | (O[e.charCodeAt(u + 1)] >> 4)), (o[i++] = 255 & t)),
          1 === n &&
            ((t = (O[e.charCodeAt(u)] << 10) | (O[e.charCodeAt(u + 1)] << 4) | (O[e.charCodeAt(u + 2)] >> 2)),
            (o[i++] = (t >> 8) & 255),
            (o[i++] = 255 & t)),
          o
        );
      }
      function K(e) {
        return E[(e >> 18) & 63] + E[(e >> 12) & 63] + E[(e >> 6) & 63] + E[63 & e];
      }
      function ee(e, t, r) {
        for (var n, o = [], i = t; i < r; i += 3)
          (n = ((e[i] << 16) & 16711680) + ((e[i + 1] << 8) & 65280) + (255 & e[i + 2])), o.push(K(n));
        return o.join("");
      }
      function te(e) {
        for (var t, r = e.length, n = r % 3, o = [], i = 0, a = r - n; i < a; i += 16383) o.push(ee(e, i, a < i + 16383 ? a : i + 16383));
        return (
          1 == n
            ? ((t = e[r - 1]), o.push(E[t >> 2] + E[(t << 4) & 63] + "=="))
            : 2 == n && ((t = (e[r - 2] << 8) + e[r - 1]), o.push(E[t >> 10] + E[(t >> 4) & 63] + E[(t << 2) & 63] + "=")),
          o.join("")
        );
      }
      (O["-".charCodeAt(0)] = 62), (O["_".charCodeAt(0)] = 63);
      var R = {
          byteLength: e,
          toByteArray: S,
          fromByteArray: Y
        },
        P = {
          read: function (e, t, r, n, o) {
            var i,
              a,
              u = 8 * o - n - 1,
              s = (1 << u) - 1,
              c = s >> 1,
              f = -7,
              l = r ? o - 1 : 0,
              p = r ? -1 : 1,
              o = e[t + l];
            for (l += p, i = o & ((1 << -f) - 1), o >>= -f, f += u; 0 < f; i = 256 * i + e[t + l], l += p, f -= 8);
            for (a = i & ((1 << -f) - 1), i >>= -f, f += n; 0 < f; a = 256 * a + e[t + l], l += p, f -= 8);
            if (0 === i) i = 1 - c;
            else {
              if (i === s) return a ? NaN : (1 / 0) * (o ? -1 : 1);
              (a += Math.pow(2, n)), (i -= c);
            }
            return (o ? -1 : 1) * a * Math.pow(2, i - n);
          },
          write: function (e, t, r, n, o, i) {
            var a,
              u,
              s = 8 * i - o - 1,
              c = (1 << s) - 1,
              f = c >> 1,
              l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              p = n ? 0 : i - 1,
              h = n ? 1 : -1,
              i = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
            for (
              t = Math.abs(t),
                isNaN(t) || t === 1 / 0
                  ? ((u = isNaN(t) ? 1 : 0), (a = c))
                  : ((a = Math.floor(Math.log(t) / Math.LN2)),
                    t * (n = Math.pow(2, -a)) < 1 && (a--, (n *= 2)),
                    2 <= (t += 1 <= a + f ? l / n : l * Math.pow(2, 1 - f)) * n && (a++, (n /= 2)),
                    c <= a + f
                      ? ((u = 0), (a = c))
                      : 1 <= a + f
                      ? ((u = (t * n - 1) * Math.pow(2, o)), (a += f))
                      : ((u = t * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
              8 <= o;
              e[r + p] = 255 & u, p += h, u /= 256, o -= 8
            );
            for (a = (a << o) | u, s += o; 0 < s; e[r + p] = 255 & a, p += h, a /= 256, s -= 8);
            e[r + p - h] |= 128 * i;
          }
        },
        e = t(function (e, r) {
          var t = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null,
            n =
              ((r.Buffer = l),
              (r.SlowBuffer = function (e) {
                return l.alloc(+(e = +e != e ? 0 : e));
              }),
              (r.INSPECT_MAX_BYTES = 50),
              2147483647);
          function u(e) {
            if (n < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            return (e = new Uint8Array(e)), Object.setPrototypeOf(e, l.prototype), e;
          }
          function l(e, t, r) {
            if ("number" != typeof e) return o(e, t, r);
            if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
            return a(e);
          }
          function o(e, t, r) {
            if ("string" == typeof e) {
              var n = e,
                o = t;
              if (l.isEncoding((o = "string" == typeof o && "" !== o ? o : "utf8")))
                return (n = (a = u((i = 0 | p(n, o)))).write(n, o)) !== i ? a.slice(0, n) : a;
              throw new TypeError("Unknown encoding: " + o);
            }
            var i;
            if (ArrayBuffer.isView(e)) return I((i = e), Uint8Array) ? c((n = new Uint8Array(i)).buffer, n.byteOffset, n.byteLength) : s(i);
            if (null != e) {
              if (I(e, ArrayBuffer) || (e && I(e.buffer, ArrayBuffer))) return c(e, t, r);
              if ("undefined" != typeof SharedArrayBuffer && (I(e, SharedArrayBuffer) || (e && I(e.buffer, SharedArrayBuffer))))
                return c(e, t, r);
              if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
              var a = e.valueOf && e.valueOf();
              if (null != a && a !== e) return l.from(a, t, r);
              if (
                ((n = e),
                (o = l.isBuffer(n)
                  ? (0 !== (a = u((i = 0 | f(n.length)))).length && n.copy(a, 0, 0, i), a)
                  : void 0 !== n.length
                  ? "number" != typeof n.length || k(n.length)
                    ? u(0)
                    : s(n)
                  : "Buffer" === n.type && Array.isArray(n.data)
                  ? s(n.data)
                  : void 0))
              )
                return o;
              if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive])
                return l.from(e[Symbol.toPrimitive]("string"), t, r);
            }
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e
            );
          }
          function i(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
          }
          function a(e) {
            return i(e), u(e < 0 ? 0 : 0 | f(e));
          }
          function s(e) {
            for (var t = e.length < 0 ? 0 : 0 | f(e.length), r = u(t), n = 0; n < t; n += 1) r[n] = 255 & e[n];
            return r;
          }
          function c(e, t, r) {
            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
            if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
            return (
              (e = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r)),
              Object.setPrototypeOf(e, l.prototype),
              e
            );
          }
          function f(e) {
            if (n <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
            return 0 | e;
          }
          function p(e, t) {
            if (l.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || I(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e)
              throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            var r = e.length,
              n = 2 < arguments.length && !0 === arguments[2];
            if (!n && 0 === r) return 0;
            for (var o = !1; ; )
              switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                  return r;

                case "utf8":
                case "utf-8":
                  return C(e).length;

                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return 2 * r;

                case "hex":
                  return r >>> 1;

                case "base64":
                  return j(e).length;

                default:
                  if (o) return n ? -1 : C(e).length;
                  (t = ("" + t).toLowerCase()), (o = !0);
              }
          }
          function h(e, t, r) {
            var n,
              o = !1;
            if ((t = void 0 === t || t < 0 ? 0 : t) > this.length) return "";
            if ((r = void 0 === r || r > this.length ? this.length : r) <= 0) return "";
            if ((r >>>= 0) <= (t >>>= 0)) return "";
            for (e = e || "utf8"; ; )
              switch (e) {
                case "hex":
                  var i = this,
                    a = t,
                    u = r,
                    s = i.length;
                  (!u || u < 0 || s < u) && (u = s);
                  for (var c = "", f = (a = !a || a < 0 ? 0 : a); f < u; ++f) c += L[i[f]];
                  return c;

                case "utf8":
                case "utf-8":
                  return E(this, t, r);

                case "ascii":
                  for (var l = this, s = t, p = r, h = "", p = Math.min(l.length, p), d = s; d < p; ++d)
                    h += String.fromCharCode(127 & l[d]);
                  return h;

                case "latin1":
                case "binary":
                  for (var y = this, a = t, g = r, m = "", g = Math.min(y.length, g), w = a; w < g; ++w) m += String.fromCharCode(y[w]);
                  return m;

                case "base64":
                  return (v = this), (n = r), 0 === (b = t) && n === v.length ? R.fromByteArray(v) : R.fromByteArray(v.slice(b, n));

                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  for (var v = t, b = r, _ = this.slice(v, b), x = "", S = 0; S < _.length - 1; S += 2)
                    x += String.fromCharCode(_[S] + 256 * _[S + 1]);
                  return x;

                default:
                  if (o) throw new TypeError("Unknown encoding: " + e);
                  (e = (e + "").toLowerCase()), (o = !0);
              }
          }
          function d(e, t, r) {
            var n = e[t];
            (e[t] = e[r]), (e[r] = n);
          }
          function y(e, t, r, n, o) {
            if (0 === e.length) return -1;
            if (
              ("string" == typeof r ? ((n = r), (r = 0)) : 2147483647 < r ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
              (r = (r = k((r = +r)) ? (o ? 0 : e.length - 1) : r) < 0 ? e.length + r : r) >= e.length)
            ) {
              if (o) return -1;
              r = e.length - 1;
            } else if (r < 0) {
              if (!o) return -1;
              r = 0;
            }
            if (("string" == typeof t && (t = l.from(t, n)), l.isBuffer(t))) return 0 === t.length ? -1 : g(e, t, r, n, o);
            if ("number" == typeof t)
              return (
                (t &= 255),
                "function" == typeof Uint8Array.prototype.indexOf
                  ? (o ? Uint8Array.prototype.indexOf : Uint8Array.prototype.lastIndexOf).call(e, t, r)
                  : g(e, [t], r, n, o)
              );
            throw new TypeError("val must be string, number or Buffer");
          }
          function g(e, t, r, n, o) {
            var i = 1,
              a = e.length,
              u = t.length;
            if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
              if (e.length < 2 || t.length < 2) return -1;
              (a /= i = 2), (u /= 2), (r /= 2);
            }
            function s(e, t) {
              return 1 === i ? e[t] : e.readUInt16BE(t * i);
            }
            if (o)
              for (var c = -1, f = r; f < a; f++)
                if (s(e, f) === s(t, -1 === c ? 0 : f - c)) {
                  if (f - (c = -1 === c ? f : c) + 1 === u) return c * i;
                } else -1 !== c && (f -= f - c), (c = -1);
            else
              for (f = r = a < r + u ? a - u : r; 0 <= f; f--) {
                for (var l = !0, p = 0; p < u; p++)
                  if (s(e, f + p) !== s(t, p)) {
                    l = !1;
                    break;
                  }
                if (l) return f;
              }
            return -1;
          }
          function m(e, t, r, n) {
            return U(
              (function (e) {
                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                return t;
              })(t),
              e,
              r,
              n
            );
          }
          function w(e, t, r, n) {
            return U(
              (function (e, t) {
                for (var r, n, o = [], i = 0; i < e.length && !((t -= 2) < 0); ++i)
                  (n = (r = e.charCodeAt(i)) >> 8), o.push(r % 256), o.push(n);
                return o;
              })(t, e.length - r),
              e,
              r,
              n
            );
          }
          function E(e, t, r) {
            r = Math.min(e.length, r);
            for (var n = [], o = t; o < r; ) {
              var i,
                a,
                u,
                s,
                c = e[o],
                f = null,
                l = 239 < c ? 4 : 223 < c ? 3 : 191 < c ? 2 : 1;
              if (o + l <= r)
                switch (l) {
                  case 1:
                    c < 128 && (f = c);
                    break;

                  case 2:
                    128 == (192 & (i = e[o + 1])) && 127 < (s = ((31 & c) << 6) | (63 & i)) && (f = s);
                    break;

                  case 3:
                    (i = e[o + 1]),
                      (a = e[o + 2]),
                      128 == (192 & i) &&
                        128 == (192 & a) &&
                        2047 < (s = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) &&
                        (s < 55296 || 57343 < s) &&
                        (f = s);
                    break;

                  case 4:
                    (i = e[o + 1]),
                      (a = e[o + 2]),
                      (u = e[o + 3]),
                      128 == (192 & i) &&
                        128 == (192 & a) &&
                        128 == (192 & u) &&
                        65535 < (s = ((15 & c) << 18) | ((63 & i) << 12) | ((63 & a) << 6) | (63 & u)) &&
                        s < 1114112 &&
                        (f = s);
                }
              null === f ? ((f = 65533), (l = 1)) : 65535 < f && (n.push((((f -= 65536) >>> 10) & 1023) | 55296), (f = 56320 | (1023 & f))),
                n.push(f),
                (o += l);
            }
            var p = n,
              h = p.length;
            if (h <= v) return String.fromCharCode.apply(String, p);
            for (var d = "", y = 0; y < h; ) d += String.fromCharCode.apply(String, p.slice(y, (y += v)));
            return d;
          }
          (r.kMaxLength = n),
            (l.TYPED_ARRAY_SUPPORT = (function () {
              try {
                var e = new Uint8Array(1),
                  t = {
                    foo: function () {
                      return 42;
                    }
                  };
                return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
              } catch (e) {
                return !1;
              }
            })()) ||
              "undefined" == typeof console ||
              "function" != typeof console.error ||
              console.error(
                "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
              ),
            Object.defineProperty(l.prototype, "parent", {
              enumerable: !0,
              get: function () {
                if (l.isBuffer(this)) return this.buffer;
              }
            }),
            Object.defineProperty(l.prototype, "offset", {
              enumerable: !0,
              get: function () {
                if (l.isBuffer(this)) return this.byteOffset;
              }
            }),
            (l.poolSize = 8192),
            (l.from = o),
            Object.setPrototypeOf(l.prototype, Uint8Array.prototype),
            Object.setPrototypeOf(l, Uint8Array),
            (l.alloc = function (e, t, r) {
              return i(e), e <= 0 || void 0 === t ? u(e) : "string" == typeof r ? u(e).fill(t, r) : u(e).fill(t);
            }),
            (l.allocUnsafe = a),
            (l.allocUnsafeSlow = a),
            (l.isBuffer = function (e) {
              return null != e && !0 === e._isBuffer && e !== l.prototype;
            }),
            (l.compare = function (e, t) {
              if (
                (I(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)),
                I(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)),
                !l.isBuffer(e) || !l.isBuffer(t))
              )
                throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
              if (e === t) return 0;
              for (var r = e.length, n = t.length, o = 0, i = Math.min(r, n); o < i; ++o)
                if (e[o] !== t[o]) {
                  (r = e[o]), (n = t[o]);
                  break;
                }
              return r < n ? -1 : n < r ? 1 : 0;
            }),
            (l.isEncoding = function (e) {
              switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return !0;

                default:
                  return !1;
              }
            }),
            (l.concat = function (e, t) {
              if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
              if (0 === e.length) return l.alloc(0);
              if (void 0 === t) for (o = t = 0; o < e.length; ++o) t += e[o].length;
              for (var r = l.allocUnsafe(t), n = 0, o = 0; o < e.length; ++o) {
                var i = e[o];
                if (I(i, Uint8Array)) n + i.length > r.length ? l.from(i).copy(r, n) : Uint8Array.prototype.set.call(r, i, n);
                else {
                  if (!l.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
                  i.copy(r, n);
                }
                n += i.length;
              }
              return r;
            }),
            (l.byteLength = p),
            (l.prototype._isBuffer = !0),
            (l.prototype.swap16 = function () {
              var e = this.length;
              if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
              for (var t = 0; t < e; t += 2) d(this, t, t + 1);
              return this;
            }),
            (l.prototype.swap32 = function () {
              var e = this.length;
              if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
              for (var t = 0; t < e; t += 4) d(this, t, t + 3), d(this, t + 1, t + 2);
              return this;
            }),
            (l.prototype.swap64 = function () {
              var e = this.length;
              if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
              for (var t = 0; t < e; t += 8) d(this, t, t + 7), d(this, t + 1, t + 6), d(this, t + 2, t + 5), d(this, t + 3, t + 4);
              return this;
            }),
            (l.prototype.toLocaleString = l.prototype.toString =
              function () {
                var e = this.length;
                return 0 === e ? "" : 0 === arguments.length ? E(this, 0, e) : h.apply(this, arguments);
              }),
            (l.prototype.equals = function (e) {
              if (l.isBuffer(e)) return this === e || 0 === l.compare(this, e);
              throw new TypeError("Argument must be a Buffer");
            }),
            (l.prototype.inspect = function () {
              var e = "",
                t = r.INSPECT_MAX_BYTES,
                e = this.toString("hex", 0, t)
                  .replace(/(.{2})/g, "$1 ")
                  .trim();
              return this.length > t && (e += " ... "), "<Buffer " + e + ">";
            }),
            t && (l.prototype[t] = l.prototype.inspect),
            (l.prototype.compare = function (e, t, r, n, o) {
              if ((I(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)))
                throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
              if (
                (void 0 === r && (r = e ? e.length : 0),
                void 0 === n && (n = 0),
                void 0 === o && (o = this.length),
                (t = void 0 === t ? 0 : t) < 0 || r > e.length || n < 0 || o > this.length)
              )
                throw new RangeError("out of range index");
              if (o <= n && r <= t) return 0;
              if (o <= n) return -1;
              if (r <= t) return 1;
              if (this === e) return 0;
              for (
                var i = (o >>>= 0) - (n >>>= 0),
                  a = (r >>>= 0) - (t >>>= 0),
                  u = Math.min(i, a),
                  s = this.slice(n, o),
                  c = e.slice(t, r),
                  f = 0;
                f < u;
                ++f
              )
                if (s[f] !== c[f]) {
                  (i = s[f]), (a = c[f]);
                  break;
                }
              return i < a ? -1 : a < i ? 1 : 0;
            }),
            (l.prototype.includes = function (e, t, r) {
              return -1 !== this.indexOf(e, t, r);
            }),
            (l.prototype.indexOf = function (e, t, r) {
              return y(this, e, t, r, !0);
            }),
            (l.prototype.lastIndexOf = function (e, t, r) {
              return y(this, e, t, r, !1);
            }),
            (l.prototype.write = function (e, t, r, n) {
              if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
              else if (void 0 === r && "string" == typeof t) (n = t), (r = this.length), (t = 0);
              else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                (t >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
              }
              var o = this.length - t;
              if (((void 0 === r || o < r) && (r = o), (0 < e.length && (r < 0 || t < 0)) || t > this.length))
                throw new RangeError("Attempt to write outside buffer bounds");
              n = n || "utf8";
              for (var i, a, u, s = !1; ; )
                switch (n) {
                  case "hex":
                    var c = this,
                      f = e,
                      l = t,
                      p = r,
                      h = ((l = Number(l) || 0), c.length - l);
                    (!p || h < (p = Number(p))) && (p = h), (h = f.length) / 2 < p && (p = h / 2);
                    for (var d = 0; d < p; ++d) {
                      var y = parseInt(f.substr(2 * d, 2), 16);
                      if (k(y)) return d;
                      c[l + d] = y;
                    }
                    return d;

                  case "utf8":
                  case "utf-8":
                    return (h = t), (u = r), U(C(e, (a = this).length - h), a, h, u);

                  case "ascii":
                  case "latin1":
                  case "binary":
                    return m(this, e, t, r);

                  case "base64":
                    return (a = this), (u = t), (i = r), U(j(e), a, u, i);

                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return w(this, e, t, r);

                  default:
                    if (s) throw new TypeError("Unknown encoding: " + n);
                    (n = ("" + n).toLowerCase()), (s = !0);
                }
            }),
            (l.prototype.toJSON = function () {
              return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
              };
            });
          var v = 4096;
          function b(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (r < e + t) throw new RangeError("Trying to access beyond buffer length");
          }
          function _(e, t, r, n, o, i) {
            if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (o < t || t < i) throw new RangeError('"value" argument is out of bounds');
            if (r + n > e.length) throw new RangeError("Index out of range");
          }
          function x(e, t, r, n) {
            if (r + n > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range");
          }
          function S(e, t, r, n, o) {
            return (t = +t), (r >>>= 0), o || x(e, 0, r, 4), P.write(e, t, r, n, 23, 4), r + 4;
          }
          function O(e, t, r, n, o) {
            return (t = +t), (r >>>= 0), o || x(e, 0, r, 8), P.write(e, t, r, n, 52, 8), r + 8;
          }
          (l.prototype.slice = function (e, t) {
            var r = this.length,
              r =
                ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r),
                (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r),
                t < e && (t = e),
                this.subarray(e, t));
            return Object.setPrototypeOf(r, l.prototype), r;
          }),
            (l.prototype.readUintLE = l.prototype.readUIntLE =
              function (e, t, r) {
                (e >>>= 0), (t >>>= 0), r || b(e, t, this.length);
                for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) n += this[e + i] * o;
                return n;
              }),
            (l.prototype.readUintBE = l.prototype.readUIntBE =
              function (e, t, r) {
                (e >>>= 0), (t >>>= 0), r || b(e, t, this.length);
                for (var n = this[e + --t], o = 1; 0 < t && (o *= 256); ) n += this[e + --t] * o;
                return n;
              }),
            (l.prototype.readUint8 = l.prototype.readUInt8 =
              function (e, t) {
                return (e >>>= 0), t || b(e, 1, this.length), this[e];
              }),
            (l.prototype.readUint16LE = l.prototype.readUInt16LE =
              function (e, t) {
                return (e >>>= 0), t || b(e, 2, this.length), this[e] | (this[e + 1] << 8);
              }),
            (l.prototype.readUint16BE = l.prototype.readUInt16BE =
              function (e, t) {
                return (e >>>= 0), t || b(e, 2, this.length), (this[e] << 8) | this[e + 1];
              }),
            (l.prototype.readUint32LE = l.prototype.readUInt32LE =
              function (e, t) {
                return (e >>>= 0), t || b(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
              }),
            (l.prototype.readUint32BE = l.prototype.readUInt32BE =
              function (e, t) {
                return (e >>>= 0), t || b(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
              }),
            (l.prototype.readIntLE = function (e, t, r) {
              (e >>>= 0), (t >>>= 0), r || b(e, t, this.length);
              for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); ) n += this[e + i] * o;
              return (o *= 128) <= n && (n -= Math.pow(2, 8 * t)), n;
            }),
            (l.prototype.readIntBE = function (e, t, r) {
              (e >>>= 0), (t >>>= 0), r || b(e, t, this.length);
              for (var n = t, o = 1, i = this[e + --n]; 0 < n && (o *= 256); ) i += this[e + --n] * o;
              return (o *= 128) <= i && (i -= Math.pow(2, 8 * t)), i;
            }),
            (l.prototype.readInt8 = function (e, t) {
              return (e >>>= 0), t || b(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
            }),
            (l.prototype.readInt16LE = function (e, t) {
              return (e >>>= 0), t || b(e, 2, this.length), 32768 & (t = this[e] | (this[e + 1] << 8)) ? 4294901760 | t : t;
            }),
            (l.prototype.readInt16BE = function (e, t) {
              return (e >>>= 0), t || b(e, 2, this.length), 32768 & (t = this[e + 1] | (this[e] << 8)) ? 4294901760 | t : t;
            }),
            (l.prototype.readInt32LE = function (e, t) {
              return (e >>>= 0), t || b(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
            }),
            (l.prototype.readInt32BE = function (e, t) {
              return (e >>>= 0), t || b(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
            }),
            (l.prototype.readFloatLE = function (e, t) {
              return (e >>>= 0), t || b(e, 4, this.length), P.read(this, e, !0, 23, 4);
            }),
            (l.prototype.readFloatBE = function (e, t) {
              return (e >>>= 0), t || b(e, 4, this.length), P.read(this, e, !1, 23, 4);
            }),
            (l.prototype.readDoubleLE = function (e, t) {
              return (e >>>= 0), t || b(e, 8, this.length), P.read(this, e, !0, 52, 8);
            }),
            (l.prototype.readDoubleBE = function (e, t) {
              return (e >>>= 0), t || b(e, 8, this.length), P.read(this, e, !1, 52, 8);
            }),
            (l.prototype.writeUintLE = l.prototype.writeUIntLE =
              function (e, t, r, n) {
                (e = +e), (t >>>= 0), (r >>>= 0), n || _(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1,
                  i = 0;
                for (this[t] = 255 & e; ++i < r && (o *= 256); ) this[t + i] = (e / o) & 255;
                return t + r;
              }),
            (l.prototype.writeUintBE = l.prototype.writeUIntBE =
              function (e, t, r, n) {
                (e = +e), (t >>>= 0), (r >>>= 0), n || _(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var o = r - 1,
                  i = 1;
                for (this[t + o] = 255 & e; 0 <= --o && (i *= 256); ) this[t + o] = (e / i) & 255;
                return t + r;
              }),
            (l.prototype.writeUint8 = l.prototype.writeUInt8 =
              function (e, t, r) {
                return (e = +e), (t >>>= 0), r || _(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
              }),
            (l.prototype.writeUint16LE = l.prototype.writeUInt16LE =
              function (e, t, r) {
                return (e = +e), (t >>>= 0), r || _(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
              }),
            (l.prototype.writeUint16BE = l.prototype.writeUInt16BE =
              function (e, t, r) {
                return (e = +e), (t >>>= 0), r || _(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
              }),
            (l.prototype.writeUint32LE = l.prototype.writeUInt32LE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || _(this, e, t, 4, 4294967295, 0),
                  (this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e),
                  t + 4
                );
              }),
            (l.prototype.writeUint32BE = l.prototype.writeUInt32BE =
              function (e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || _(this, e, t, 4, 4294967295, 0),
                  (this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e),
                  t + 4
                );
              }),
            (l.prototype.writeIntLE = function (e, t, r, n) {
              (e = +e), (t >>>= 0), n || _(this, e, t, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
              var o = 0,
                i = 1,
                a = 0;
              for (this[t] = 255 & e; ++o < r && (i *= 256); )
                e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), (this[t + o] = (((e / i) >> 0) - a) & 255);
              return t + r;
            }),
            (l.prototype.writeIntBE = function (e, t, r, n) {
              (e = +e), (t >>>= 0), n || _(this, e, t, r, (n = Math.pow(2, 8 * r - 1)) - 1, -n);
              var o = r - 1,
                i = 1,
                a = 0;
              for (this[t + o] = 255 & e; 0 <= --o && (i *= 256); )
                e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), (this[t + o] = (((e / i) >> 0) - a) & 255);
              return t + r;
            }),
            (l.prototype.writeInt8 = function (e, t, r) {
              return (e = +e), (t >>>= 0), r || _(this, e, t, 1, 127, -128), (this[t] = 255 & (e = e < 0 ? 255 + e + 1 : e)), t + 1;
            }),
            (l.prototype.writeInt16LE = function (e, t, r) {
              return (e = +e), (t >>>= 0), r || _(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
            }),
            (l.prototype.writeInt16BE = function (e, t, r) {
              return (e = +e), (t >>>= 0), r || _(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
            }),
            (l.prototype.writeInt32LE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || _(this, e, t, 4, 2147483647, -2147483648),
                (this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24),
                t + 4
              );
            }),
            (l.prototype.writeInt32BE = function (e, t, r) {
              return (
                (e = +e),
                (t >>>= 0),
                r || _(this, e, t, 4, 2147483647, -2147483648),
                (this[t] = (e = e < 0 ? 4294967295 + e + 1 : e) >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e),
                t + 4
              );
            }),
            (l.prototype.writeFloatLE = function (e, t, r) {
              return S(this, e, t, !0, r);
            }),
            (l.prototype.writeFloatBE = function (e, t, r) {
              return S(this, e, t, !1, r);
            }),
            (l.prototype.writeDoubleLE = function (e, t, r) {
              return O(this, e, t, !0, r);
            }),
            (l.prototype.writeDoubleBE = function (e, t, r) {
              return O(this, e, t, !1, r);
            }),
            (l.prototype.copy = function (e, t, r, n) {
              if (!l.isBuffer(e)) throw new TypeError("argument should be a Buffer");
              if (((r = r || 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), (n = 0 < n && n < r ? r : n) === r))
                return 0;
              if (0 === e.length || 0 === this.length) return 0;
              if ((t = t || 0) < 0) throw new RangeError("targetStart out of bounds");
              if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
              if (n < 0) throw new RangeError("sourceEnd out of bounds");
              n > this.length && (n = this.length);
              var o = (n = e.length - t < n - r ? e.length - t + r : n) - r;
              return (
                this === e && "function" == typeof Uint8Array.prototype.copyWithin
                  ? this.copyWithin(t, r, n)
                  : Uint8Array.prototype.set.call(e, this.subarray(r, n), t),
                o
              );
            }),
            (l.prototype.fill = function (e, t, r, n) {
              if ("string" == typeof e) {
                if (
                  ("string" == typeof t ? ((n = t), (t = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)),
                  void 0 !== n && "string" != typeof n)
                )
                  throw new TypeError("encoding must be a string");
                if ("string" == typeof n && !l.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                var o;
                1 === e.length && ((o = e.charCodeAt(0)), ("utf8" === n && o < 128) || "latin1" === n) && (e = o);
              } else "number" == typeof e ? (e &= 255) : "boolean" == typeof e && (e = Number(e));
              if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
              var i;
              if (!(r <= t))
                if (((t >>>= 0), (r = void 0 === r ? this.length : r >>> 0), "number" == typeof (e = e || 0)))
                  for (i = t; i < r; ++i) this[i] = e;
                else {
                  var a = l.isBuffer(e) ? e : l.from(e, n),
                    u = a.length;
                  if (0 === u) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                  for (i = 0; i < r - t; ++i) this[i + t] = a[i % u];
                }
              return this;
            });
          var A = /[^+/0-9A-Za-z-_]/g;
          function C(e, t) {
            t = t || 1 / 0;
            for (var r, n = e.length, o = null, i = [], a = 0; a < n; ++a) {
              if (55295 < (r = e.charCodeAt(a)) && r < 57344) {
                if (!o) {
                  if (56319 < r) {
                    -1 < (t -= 3) && i.push(239, 191, 189);
                    continue;
                  }
                  if (a + 1 === n) {
                    -1 < (t -= 3) && i.push(239, 191, 189);
                    continue;
                  }
                  o = r;
                  continue;
                }
                if (r < 56320) {
                  -1 < (t -= 3) && i.push(239, 191, 189), (o = r);
                  continue;
                }
                r = 65536 + (((o - 55296) << 10) | (r - 56320));
              } else o && -1 < (t -= 3) && i.push(239, 191, 189);
              if (((o = null), r < 128)) {
                if (--t < 0) break;
                i.push(r);
              } else if (r < 2048) {
                if ((t -= 2) < 0) break;
                i.push((r >> 6) | 192, (63 & r) | 128);
              } else if (r < 65536) {
                if ((t -= 3) < 0) break;
                i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
              } else {
                if (!(r < 1114112)) throw new Error("Invalid code point");
                if ((t -= 4) < 0) break;
                i.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
              }
            }
            return i;
          }
          function j(e) {
            return R.toByteArray(
              (function (e) {
                if ((e = (e = e.split("=")[0]).trim().replace(A, "")).length < 2) return "";
                for (; e.length % 4 != 0; ) e += "=";
                return e;
              })(e)
            );
          }
          function U(e, t, r, n) {
            for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o) t[o + r] = e[o];
            return o;
          }
          function I(e, t) {
            return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
          }
          function k(e) {
            return e != e;
          }
          var L = (function () {
            for (var e = "0123456789abcdef", t = new Array(256), r = 0; r < 16; ++r)
              for (var n = 16 * r, o = 0; o < 16; ++o) t[n + o] = e[r] + e[o];
            return t;
          })();
        }),
        U = e.Buffer,
        I =
          (e.SlowBuffer,
          e.INSPECT_MAX_BYTES,
          e.kMaxLength,
          function (e, t) {
            for (var r = Math.min(1024, e.length), n = "".concat(t, "::"), o = "::".concat(t), i = 0; i > 0 - e.length; ) {
              var a,
                u = e.slice(i || 0 - r, e.length).toString("utf8");
              if (u.includes(n)) return (a = u.indexOf(n)), u.substring(a + n.length, u.length - o.length);
              i -= r;
            }
            return null;
          }),
        k = function (e) {
          var t;
          if (e instanceof U)
            return e.length < 9
              ? null
              : "::equatio" === e.slice(e.length - 9, e.length).toString("utf8")
              ? I(e, "equatio")
              : "::desmos" === e.slice(e.length - 8, e.length).toString("utf8")
              ? null == (t = I(e, "desmos"))
                ? null
                : {
                    type: "desmos",
                    state: JSON.parse(t)
                  }
              : "::mathspace" !== e.slice(e.length - 11, e.length).toString("utf8") || null == (t = I(e, "mathspace"))
              ? null
              : {
                  type: "mathspace",
                  platformIntegrationId: t
                };
          throw Error("Expected a Buffer, but received ".concat(typeof e));
        },
        L = function (e) {
          return new Promise(function (r, n) {
            window && window.webkitResolveLocalFileSystemURL && e
              ? window.webkitResolveLocalFileSystemURL(e, function (e) {
                  e.file(function (e) {
                    var t = new FileReader();
                    (t.onload = function () {
                      var e = t.result;
                      null === e
                        ? n(Error("Failed to read local file system URL"))
                        : ((e = U.from(e)), (e = k(e)), r(null === e ? null : e));
                    }),
                      (t.onerror = function (e) {
                        n(e);
                      }),
                      t.readAsArrayBuffer(e);
                  });
                })
              : r(null);
          });
        },
        re = ["equatio-api.texthelp.com", "equatio-api.dev.texthelp.com"],
        B = function (e) {
          var e = e.toString(),
            t = new W(e);
          return re.some(function (e) {
            return e === t.host;
          }) &&
            (t.pathname.startsWith("/png/") || t.pathname.startsWith("/svg/"))
            ? ((e = n(t.pathname.split("/").splice(2, 1), 1)[0]), decodeURIComponent(e))
            : null;
        },
        S = function (e) {
          var t = B(e);
          return null !== t
            ? Promise.resolve(t)
            : e && 0 <= e.indexOf("filesystem:")
            ? L(e)
            : fetch(e)
                .then(function (e) {
                  return e.arrayBuffer();
                })
                .then(function (e) {
                  return (e = U.from(e)), k(e);
                });
        };
      (ne.getLatexFromBuffer = k), (ne.getLatexFromPersistentUrl = L), (ne.getLatexFromKnownUrl = B), (ne.getLatexFromImageUrl = S);
    }.call(this, t(58));
  },
  117: function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return l;
    });
    var n = r(3),
      o = r.n(n),
      n = r(1),
      i = r.n(n);
    const a = (t) =>
        ["https://equatio-api.texthelp.com/", "https://equatio-api.dev.texthelp.com/"].some((e) => t.includes && t.includes(e)),
      u = (e) => [].concat(...e.map((e) => (Array.isArray(e) ? u(e) : e))),
      s = (e, t) => e.filter(t).pop(),
      c = (e) => {
        const n = [],
          o = u(e),
          t = o.reduce((e, t, r) => ("string" == typeof t && (a(t) || t.endsWith("\u2063")) ? [...e, r] : e), []);
        return 0 === t.length
          ? null
          : (t.reverse().forEach((e) => {
              const t = o.slice(0, e),
                r = s(t, (e) => "string" == typeof e && 0 < e.length);
              n.push(r);
            }),
            n);
      },
      f = (function () {
        var t = o()(
          i.a.mark(function e(o) {
            var t, r;
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (e.next = 2),
                      fetch(window.location.href.toString(), {
                        method: "GET",
                        credentials: "same-origin"
                      })
                    );

                  case 2:
                    return (t = e.sent), (e.next = 5), t.text();

                  case 5:
                    (t = e.sent),
                      ((r = document.createElement("div")).id = "th-page-reloaded"),
                      (r.style.display = "none"),
                      (r.innerHTML = t),
                      (r = Array.prototype.slice.call(r.querySelectorAll("script"))),
                      r
                        .filter((e) => "DOCS_modelChunk = [" === e.innerHTML.substr(0, 19))
                        .forEach((e) => {
                          let t = e.innerHTML.replace("DOCS_modelChunk = ", "");
                          const r = t.lastIndexOf("]; "),
                            n = ((t = t.substr(0, r + 1)), JSON.parse(t));
                          o(n);
                        });

                  case 13:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      l = (function () {
        var e = o()(
          i.a.mark(function e() {
            var o;
            return i.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (o = {}),
                      (e.next = 3),
                      f((e) => {
                        const n = u(e),
                          t = n.reduce((e, t, r) => ("string" == typeof t && a(t) ? [...e, r] : e), []);
                        if (0 === t.length) return null;
                        t.reverse().forEach((e) => {
                          const t = n.slice(0, e),
                            r = s(t, (e) => "string" == typeof e && 0 < e.length);
                          o[r] = n[e];
                        });
                      })
                    );

                  case 3:
                    return e.abrupt("return", o);

                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })();
    t.a = o()(
      i.a.mark(function e() {
        var r;
        return i.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  (r = []),
                  (e.next = 3),
                  f((e) => {
                    const t = c(e);
                    t && r.push(t);
                  })
                );

              case 3:
                return e.abrupt("return", u(r));

              case 4:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
  },
  118: function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      if (((t = t.split(":")[0]), !(e = +e))) return !1;
      switch (t) {
        case "http":
        case "ws":
          return 80 !== e;

        case "https":
        case "wss":
          return 443 !== e;

        case "ftp":
          return 21 !== e;

        case "gopher":
          return 70 !== e;

        case "file":
          return !1;
      }
      return 0 !== e;
    };
  },
  119: function (e, t, r) {
    "use strict";
    var i,
      a = Object.prototype.hasOwnProperty;
    function u(e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "));
      } catch (e) {
        return null;
      }
    }
    function s(e) {
      try {
        return encodeURIComponent(e);
      } catch (e) {
        return null;
      }
    }
    function n(e) {
      for (var t = /([^=?#&]+)=?([^&]*)/g, r = {}; (o = t.exec(e)); ) {
        var n = u(o[1]),
          o = u(o[2]);
        null === n || null === o || n in r || (r[n] = o);
      }
      return r;
    }
    function o(e, t) {
      var r,
        n,
        o = [];
      for (n in ("string" != typeof (t = t || "") && (t = "?"), e))
        a.call(e, n) &&
          ((r = e[n]) || (null !== r && r !== i && !isNaN(r)) || (r = ""), (n = s(n)), (r = s(r)), null !== n) &&
          null !== r &&
          o.push(n + "=" + r);
      return o.length ? t + o.join("&") : "";
    }
    (t.stringify = o), (t.parse = n);
  },
  120: function (e, t, r) {
    "use strict";
    var n = r(3),
      o = r.n(n),
      n = r(1),
      i = r.n(n),
      a = (e) => {
        return null == (e = e[0]) ? void 0 : e.s;
      },
      u = (e, r) =>
        e
          .filter((e) => {
            return "ae" === e.ty && !(null == (e = null == (e = e) ? void 0 : e.epm) || !e.ee_eo);
          })
          .map((e) => {
            const t = e;
            return {
              id: t.epm.ee_eo.i_cid,
              originalSrc: t.epm.ee_eo.i_src,
              proxySrc: r[t.epm.ee_eo.i_cid],
              width: t.epm.ee_eo.i_wth,
              height: t.epm.ee_eo.i_ht
            };
          });
    const s = (e) => {
        const [, t] = /DOCS_modelChunk = (.*?); DOCS_modelChunkLoadStart/.exec(e) || [];
        return JSON.parse(t);
      },
      c = (e) => {
        const [, t] = /_createKixApplication\(.*?, \{(.*?)\}/.exec(e) || [];
        return JSON.parse(`{${t}}`);
      },
      f = (e) => {
        let t;
        try {
          t = s(e);
        } catch (e) {
          throw Error("Failed to parse Docs Model");
        }
        let r;
        try {
          r = c(e);
        } catch (e) {}
        return {
          getText: () => a(t),
          getImages: () => {
            if (r) return u(t, r);
            throw Error("HTML did not contain any image data");
          }
        };
      },
      l = async (e) => {
        if ("string" != typeof e) throw Error("url must be a string");
        if (!e.startsWith("https://docs.google.com")) throw Error("invalid_google_url");
        const t = await fetch(e, {
            method: "GET",
            credentials: "same-origin"
          }),
          r = await t.text();
        return f(r);
      };
    var n = r(77),
      p = r.n(n),
      h = r(4);
    const d = (e, t) => {
      if (t.startsWith("filesystem:")) {
        const r = t.split("filesystem:")[1],
          n = p()(r);
        return "docs.google.com" !== n.hostname ? null : e.getImages().find((e) => e.id === n.pathname.split("/").pop());
      }
      return e.getImages().find((e) => e.proxySrc.toLowerCase() === t.toLowerCase());
    };
    t.a = (function () {
      var t = o()(
        i.a.mark(function e(t) {
          var r;
          return i.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if ((r = d(f(document.body.outerHTML), t))) {
                    e.next = 8;
                    break;
                  }
                  return (e.t0 = d), (e.next = 5), l(window.location.href);

                case 5:
                  (e.t1 = e.sent), (e.t2 = t), (r = (0, e.t0)(e.t1, e.t2));

                case 8:
                  if (r) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt("return", null);

                case 10:
                  return e.abrupt("return", Object(h.j)(r.originalSrc));

                case 11:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })();
  },
  2: function (e, t, r) {
    "use strict";
    e.exports = r(112);
  },
  21: function (e, t, r) {
    var n = r(64),
      o = r(65),
      i = r(66),
      a = r(68);
    function u(e, t) {
      return n(e) || o(e, t) || i(e, t) || a();
    }
    (e.exports = u), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  23: function (t, e) {
    function r(e) {
      return (
        (t.exports = r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        r(e)
      );
    }
    (t.exports = r), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  3: function (e, t) {
    function s(e, t, r, n, o, i, a) {
      try {
        var u = e[i](a),
          s = u.value;
      } catch (e) {
        return void r(e);
      }
      u.done ? t(s) : Promise.resolve(s).then(n, o);
    }
    function r(u) {
      return function () {
        var e = this,
          a = arguments;
        return new Promise(function (t, r) {
          var n = u.apply(e, a);
          function o(e) {
            s(n, t, r, o, i, "next", e);
          }
          function i(e) {
            s(n, t, r, o, i, "throw", e);
          }
          o(void 0);
        });
      };
    }
    (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  302: function (e, t, r) {
    "use strict";
    var n = r(3),
      o = r.n(n),
      n = r(1),
      u = r.n(n),
      i = r(117),
      s = r(120),
      c = r(73);
    function f(e, t) {
      var r,
        n,
        o,
        i,
        a = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (a)
        return (
          (n = !(r = !0)),
          {
            s: function () {
              a = a.call(e);
            },
            n: function () {
              var e = a.next();
              return (r = e.done), e;
            },
            e: function (e) {
              (n = !0), (o = e);
            },
            f: function () {
              try {
                r || null == a.return || a.return();
              } finally {
                if (n) throw o;
              }
            }
          }
        );
      if (Array.isArray(e) || (a = l(e)) || (t && e && "number" == typeof e.length))
        return (
          a && (e = a),
          (i = 0),
          {
            s: (t = function () {}),
            n: function () {
              return i >= e.length
                ? {
                    done: !0
                  }
                : {
                    done: !1,
                    value: e[i++]
                  };
            },
            e: function (e) {
              throw e;
            },
            f: t
          }
        );
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    function l(e, t) {
      var r;
      if (e)
        return "string" == typeof e
          ? a(e, t)
          : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) ||
            "Set" === r
          ? Array.from(e)
          : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? a(e, t)
          : void 0;
    }
    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    const p = () => ({
        hasMath: !1,
        nodes: []
      }),
      h = (function () {
        var t = o()(
          u.a.mark(function e(r) {
            return u.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      new Promise((t, e) => {
                        Object(i.a)().then((e) => t(e.map((e) => r.querySelector("#editor-" + e))));
                      })
                    );

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      d = (e) => [...Array.from(e.querySelectorAll("svg > g > image")).filter((e) => e.href && e.href.baseVal)],
      y = (function () {
        var r = o()(
          u.a.mark(function e(t, r) {
            var n, o;
            return u.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if ("Google Slides" === r) return (e.next = 3), h(t);
                    e.next = 5;
                    break;

                  case 3:
                    return (
                      (n = e.sent),
                      e.abrupt(
                        "return",
                        n
                          .filter((e) => e && 30 <= e.getBoundingClientRect().width && 5 <= e.getBoundingClientRect().height)
                          .sort((e, t) => t.getBoundingClientRect().width - e.getBoundingClientRect().height)
                      )
                    );

                  case 5:
                    return (
                      (n = [...d(t)]),
                      (o = (e) => {
                        if (!e.getBBox) return null;
                        const t = e.getBBox(),
                          r = t.width,
                          n = t.height;
                        return {
                          width: r,
                          height: n
                        };
                      }),
                      e.abrupt(
                        "return",
                        n
                          .filter((e) => {
                            const t = o(e);
                            return !!t && 30 <= t.width && 5 <= t.height;
                          })
                          .sort((e, t) => o(t).width - o(e).width)
                      )
                    );

                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e, t) {
          return r.apply(this, arguments);
        };
      })();
    t.a = (function () {
      var r = o()(
        u.a.mark(function e(i, a) {
          return u.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new Promise((e, t) => {
                      if (0 === document.length) return p();
                      const r = (function () {
                        var e = o()(
                          u.a.mark(function e() {
                            var t, r, n, o;
                            return u.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), y(i, a);

                                    case 2:
                                      if (!(0 < (t = e.sent).length)) {
                                        e.next = 34;
                                        break;
                                      }
                                      (t = f(t)), (e.prev = 5), t.s();

                                    case 7:
                                      if ((n = t.n()).done) e.next = 26;
                                      else {
                                        if (
                                          ((r = n.value),
                                          (n = r).href || (n = r.querySelector("image")),
                                          (o = n.href.baseVal).includes(".texthelp.com"))
                                        )
                                          return (e.next = 15), Object(c.a)(o);
                                        e.next = 18;
                                      }
                                      break;

                                    case 15:
                                      (e.t0 = e.sent), (e.next = 21);
                                      break;

                                    case 18:
                                      return (e.next = 20), Object(s.a)(o);

                                    case 20:
                                      e.t0 = e.sent;

                                    case 21:
                                      if (e.t0)
                                        return e.abrupt("return", {
                                          hasMath: !0,
                                          node: r
                                        });
                                      e.next = 24;
                                      break;

                                    case 24:
                                      e.next = 7;
                                      break;

                                    case 26:
                                      e.next = 31;
                                      break;

                                    case 28:
                                      (e.prev = 28), (e.t1 = e.catch(5)), t.e(e.t1);

                                    case 31:
                                      return (e.prev = 31), t.f(), e.finish(31);

                                    case 34:
                                      return e.abrupt("return", {
                                        hasMath: !1,
                                        node: null
                                      });

                                    case 35:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[5, 28, 31, 34]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })();
                      e(r());
                    })
                  );

                case 1:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (e, t) {
        return r.apply(this, arguments);
      };
    })();
  },
  394: function (e, t, p) {
    "use strict";
    p.r(t),
      function (a) {
        var e = p(21),
          u = p.n(e),
          e = p(3),
          o = p.n(e),
          e = p(1),
          s = p.n(e),
          i = p(4),
          c = p(302),
          r = p(10);
        let f = !(window.equatioCoreChunkLoading = "chrome");
        const l = (function () {
            var t = o()(
              s.a.mark(function e(t, r = !1) {
                var n, o, i;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (null !== document.querySelector(".equatio-toolbar-wrapper")) {
                          e.next = 14;
                          break;
                        }
                        if ((n = document.querySelector("#equatio-gsuite-math-discoverability"))) {
                          e.next = 14;
                          break;
                        }
                        return (
                          ((n = document.createElement("div")).id = "equatio-gsuite-math-discoverability"),
                          document.body.appendChild(n),
                          (e.next = 9),
                          Promise.all([
                            p.e(0).then(p.t.bind(null, 52, 7)),
                            Promise.all([p.e(1), p.e(0), p.e(2), p.e(5), p.e(23)]).then(p.bind(null, 421))
                          ])
                        );

                      case 9:
                        (i = e.sent),
                          (i = u()(i, 2)),
                          (o = i[0].render),
                          (i = i[1].default),
                          o(
                            a.createElement(i, {
                              math: t,
                              hasEquationToolbarOpened: r
                            }),
                            n
                          );

                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          n = (function () {
            var t = o()(
              s.a.mark(function e(t) {
                var r, n;
                return s.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (f) {
                            e.next = 12;
                            break;
                          }
                          return (e.prev = 1), (e.next = 4), Object(c.a)(document, t);

                        case 4:
                          (r = e.sent), (e.next = 9);
                          break;

                        case 7:
                          (e.prev = 7), (e.t0 = e.catch(1));

                        case 9:
                          (n = r && r.hasMath),
                            o()(
                              s.a.mark(function e() {
                                return s.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), Object(i.G)(n);

                                      case 2:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )(),
                            n && ((f = !0), l(r));

                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 7]]
                );
              })
            );
            return function (e) {
              return t.apply(this, arguments);
            };
          })(),
          t = (function () {
            var e = o()(
              s.a.mark(function e() {
                var t;
                return s.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (t = Object(r.c)()), (e.next = 3), n(t);

                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        "complete" === document.readyState ? t() : window.addEventListener("load", t);
      }.call(this, p(2));
  },
  4: function (T, e, t) {
    "use strict";
    t.d(e, "F", function () {
      return c;
    }),
      t.d(e, "z", function () {
        return f;
      }),
      t.d(e, "h", function () {
        return l;
      }),
      t.d(e, "q", function () {
        return p;
      }),
      t.d(e, "w", function () {
        return h;
      }),
      t.d(e, "hb", function () {
        return d;
      }),
      t.d(e, "a", function () {
        return y;
      }),
      t.d(e, "O", function () {
        return g;
      }),
      t.d(e, "v", function () {
        return m;
      }),
      t.d(e, "I", function () {
        return w;
      }),
      t.d(e, "i", function () {
        return v;
      }),
      t.d(e, "L", function () {
        return b;
      }),
      t.d(e, "x", function () {
        return _;
      }),
      t.d(e, "Y", function () {
        return x;
      }),
      t.d(e, "Z", function () {
        return S;
      }),
      t.d(e, "u", function () {
        return E;
      }),
      t.d(e, "N", function () {
        return O;
      }),
      t.d(e, "e", function () {
        return A;
      }),
      t.d(e, "p", function () {
        return C;
      }),
      t.d(e, "X", function () {
        return j;
      }),
      t.d(e, "gb", function () {
        return U;
      }),
      t.d(e, "bb", function () {
        return I;
      }),
      t.d(e, "db", function () {
        return k;
      }),
      t.d(e, "eb", function () {
        return L;
      }),
      t.d(e, "S", function () {
        return R;
      }),
      t.d(e, "Q", function () {
        return P;
      }),
      t.d(e, "b", function () {
        return B;
      }),
      t.d(e, "P", function () {
        return M;
      }),
      t.d(e, "ib", function () {
        return F;
      }),
      t.d(e, "g", function () {
        return q;
      }),
      t.d(e, "M", function () {
        return G;
      }),
      t.d(e, "B", function () {
        return D;
      }),
      t.d(e, "G", function () {
        return N;
      }),
      t.d(e, "D", function () {
        return $;
      }),
      t.d(e, "V", function () {
        return z;
      }),
      t.d(e, "r", function () {
        return H;
      }),
      t.d(e, "W", function () {
        return W;
      }),
      t.d(e, "f", function () {
        return Y;
      }),
      t.d(e, "y", function () {
        return V;
      }),
      t.d(e, "t", function () {
        return J;
      }),
      t.d(e, "E", function () {
        return Z;
      }),
      t.d(e, "C", function () {
        return Q;
      }),
      t.d(e, "s", function () {
        return X;
      }),
      t.d(e, "cb", function () {
        return K;
      }),
      t.d(e, "J", function () {
        return ee;
      }),
      t.d(e, "j", function () {
        return te;
      }),
      t.d(e, "K", function () {
        return re;
      }),
      t.d(e, "fb", function () {
        return ne;
      }),
      t.d(e, "n", function () {
        return oe;
      }),
      t.d(e, "U", function () {
        return ie;
      }),
      t.d(e, "m", function () {
        return ae;
      }),
      t.d(e, "d", function () {
        return ue;
      }),
      t.d(e, "A", function () {
        return se;
      }),
      t.d(e, "T", function () {
        return ce;
      }),
      t.d(e, "k", function () {
        return fe;
      }),
      t.d(e, "H", function () {
        return le;
      }),
      t.d(e, "o", function () {
        return pe;
      }),
      t.d(e, "c", function () {
        return he;
      }),
      t.d(e, "l", function () {
        return de;
      }),
      t.d(e, "ab", function () {
        return ye;
      }),
      t.d(e, "R", function () {
        return ge;
      });
    var e = t(3),
      r = t.n(e),
      e = t(7),
      n = t.n(e),
      e = t(1),
      o = t.n(e),
      i = t(0);
    function a(t, e) {
      var r,
        n = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((r = Object.getOwnPropertySymbols(t)),
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          n.push.apply(n, r)),
        n
      );
    }
    function u(t) {
      for (var e = 1; e < arguments.length; e++) {
        var r = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? a(Object(r), !0).forEach(function (e) {
              n()(t, e, r[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
          : a(Object(r)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
            });
      }
      return t;
    }
    const s = (o, e = {}) =>
        new Promise((r, n) => {
          chrome.runtime.sendMessage(
            "hjngolefdpdnooamgdldlkjgmdcmcjnc",
            u(
              {
                action: o
              },
              e
            ),
            ({ success: e, failure: t } = {}) =>
              chrome.runtime.lastError
                ? (console.error("Action failed:", o, chrome.runtime.lastError.message), n(chrome.runtime.lastError))
                : t
                ? (console.error("Action failed:", o, t), n(new Error(t)))
                : r(e)
          );
        }),
      c = () => s("load"),
      f = () => s(i.a.InjectDocsRequirements),
      l = (e = !1) =>
        s(i.a.EnsureLoggedIntoFirebase, {
          forceLogin: e
        }),
      p = () => s(i.a.GetLicense),
      h = () => s(i.a.GetUserSettings),
      d = (e, t, r) =>
        s(i.a.UpdateUserSettings, {
          options: e,
          profile: t,
          customOptions: r
        }),
      y = (e) =>
        s(i.a.AddFavourites, {
          items: e
        }),
      g = (e) =>
        s(i.a.RemoveFavourites, {
          item: e
        }),
      m = () => s(i.a.GetUserFavourites),
      w = () => s(i.a.MergeFirebaseFavourites),
      v = (e) =>
        s(i.a.EnterProductCode, {
          code: e
        }),
      b = (e, t) =>
        s(i.a.OpenGoogleFormsPicker, {
          url: e,
          picker: t
        }),
      _ = (e) =>
        s(i.a.GoogleFormsPickerLoaded, {
          location: e
        }),
      x = (e) =>
        s(i.a.SetProfileType, {
          type: e
        }),
      S = (e = !1) =>
        s(i.a.SetShowEquatioOnFirstRun, {
          value: e
        }),
      E = () => s(i.a.GetShouldShowEquatioOnFirstRun),
      O = (e, t = null) =>
        s(i.a.RegisterCompanionAppTarget, {
          platform: e,
          hostname: t
        }),
      A = () => s(i.a.DisconnectCompanionDoc),
      C = () => s(i.a.GetHandwritingCount),
      j = (e) =>
        s(i.a.SetHandwritingCount, {
          count: e
        }),
      U = (e) =>
        s(i.a.UpdateGoogleSheetEquations, {
          spreadsheetId: e
        }),
      I = () => s(i.a.ShowHandwritingExceededReminder),
      k = () => s(i.a.ShowPredictionReminder),
      L = () => s(i.a.ShowReviewReminder),
      R = (e) =>
        s(i.a.SendAnalyticsScreen, {
          screenName: e
        }),
      P = (e, t = 0, r) =>
        s(i.a.SendAnalyticsEvent, {
          category: e,
          value: t,
          customParams: r
        }),
      B = () => s(i.a.CaptureScreenshot),
      M = (e) =>
        s(i.a.ScanMathpixOcr, {
          base64: e
        }),
      F = (e, t) =>
        s(i.a.UploadImageToProxy, {
          url: e,
          base64: t
        }),
      q = () => s(i.a.DismissReviewReminder),
      G = (function () {
        var t = r()(
          o.a.mark(function e(t) {
            var r, n;
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = window.location.href),
                      (e.next = 3),
                      s(i.a.OpenMathspace, {
                        platformIntegrationId: t,
                        windowUrl: n
                      })
                    );

                  case 3:
                    (r = e.sent),
                      (n = () => {
                        s(i.a.MathspaceTabClosed, {
                          msTabId: r
                        });
                      }),
                      window.addEventListener("beforeunload", n);

                  case 6:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      D = () => s(i.a.InjectWebPageToolbar),
      N = (e) =>
        s(i.a.MathDiscovered, {
          value: e
        }),
      $ = () => s(i.a.IsDiscoverabilityFirstTime),
      z = (e) =>
        s(i.a.SetDiscoverabilityEnabled, {
          value: e
        }),
      H = () => s(i.a.GetMathDiscoverability),
      W = (e) =>
        s(i.a.DiscoverabilitySessionDisable, {
          disabled: e
        }),
      Y = (e) =>
        s(i.a.DismissGSuiteMathDiscover, {
          options: e
        }),
      V = () => s(i.a.HasGSuiteDiscoverOverlayShown),
      J = () => s(i.a.GetPlatformOs),
      Z = () => s(i.a.IsLockedForms),
      Q = (e, t, r, n) =>
        s(i.a.InsertImageGoogleApi, {
          url: e,
          width: t,
          height: r,
          additionalOptions: n
        }),
      X = () => s(i.a.GetMolecularFilter),
      K = (e = null, t = {}) =>
        s(i.a.ShowInfoPopup, {
          popupType: e,
          options: t
        }),
      ee = (e, t = !1) =>
        s(i.a.OfficeAddToClipboard, {
          content: e,
          isText: t
        }),
      te = (e) =>
        s(i.a.ExtractLatexFromUrl, {
          url: e
        }),
      re = (e) =>
        s(i.a.OfficeCanUseApp, {
          appName: e
        }),
      ne = (function () {
        var e = r()(
          o.a.mark(function e() {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", s(i.a.SwitchAccount));

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function () {
          return e.apply(this, arguments);
        };
      })(),
      oe = () => s(i.a.GetDisplayEmail),
      ie = (e, t) =>
        s(i.a.SetCanShowClipboardPopup, {
          value: e,
          copyBtn: t
        }),
      ae = (e) =>
        s(i.a.GetCanShowClipboardPopup, {
          copyBtn: e
        }),
      ue = (e, t) =>
        s(i.a.CreateSpeechServerData, {
          text: e,
          options: t
        }),
      se = (e = !1) =>
        s(i.a.InjectHtmlEditorApi, {
          fromToolbar: e
        }),
      ce = (e, t, r = !1, n = null) =>
        s(i.a.HtmlEditorApiAction, {
          command: e,
          value: t,
          fromEditor: r,
          targetFrame: n
        }),
      fe = () => s(i.a.FireDatadeskUpdate),
      le = (function () {
        var t = r()(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      s(i.a.MathSolverFetch, {
                        url: t
                      })
                    );

                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      pe = () => s(i.a.GetFormsApiPermission),
      he = (e) =>
        s(i.a.CreateFormsQuestions, {
          questions: e
        }),
      de = (e) =>
        s(i.a.GenerateMathQuestions, {
          options: e
        }),
      ye = () => s(i.a.ShowFormsGeneratorUi),
      ge = (e, t, r, n) => {
        let o = "";
        return (
          window && window.location && (o = window.location.href),
          s(i.a.SendAnalyticsEventGa4, {
            name: e,
            category: t,
            feature: r,
            eventProps: n,
            url: o
          })
        );
      };
  },
  46: function (A, e, t) {
    var C = t(23).default;
    function j() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (A.exports = j =
        function () {
          return a;
        }),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
      var a = {},
        e = Object.prototype,
        s = e.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (e, t, r) {
            e[t] = r.value;
          },
        t = "function" == typeof Symbol ? Symbol : {},
        n = t.iterator || "@@iterator",
        r = t.asyncIterator || "@@asyncIterator",
        i = t.toStringTag || "@@toStringTag";
      function u(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          e[t]
        );
      }
      try {
        u({}, "");
      } catch (e) {
        u = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function c(e, t, r, n) {
        (t = t && t.prototype instanceof p ? t : p), (t = Object.create(t.prototype)), (n = new S(n || []));
        return (
          o(t, "_invoke", {
            value: v(e, r, n)
          }),
          t
        );
      }
      function f(e, t, r) {
        try {
          return {
            type: "normal",
            arg: e.call(t, r)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }
      a.wrap = c;
      var l = {};
      function p() {}
      function h() {}
      function d() {}
      var t = {},
        y =
          (u(t, n, function () {
            return this;
          }),
          Object.getPrototypeOf),
        y = y && y(y(E([]))),
        g = (y && y !== e && s.call(y, n) && (t = y), (d.prototype = p.prototype = Object.create(t)));
      function m(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function w(i, a) {
        function u(e, t, r, n) {
          var o,
            e = f(i[e], i, t);
          if ("throw" !== e.type)
            return (t = (o = e.arg).value) && "object" == C(t) && s.call(t, "__await")
              ? a.resolve(t.__await).then(
                  function (e) {
                    u("next", e, r, n);
                  },
                  function (e) {
                    u("throw", e, r, n);
                  }
                )
              : a.resolve(t).then(
                  function (e) {
                    (o.value = e), r(o);
                  },
                  function (e) {
                    return u("throw", e, r, n);
                  }
                );
          n(e.arg);
        }
        var t;
        o(this, "_invoke", {
          value: function (r, n) {
            function e() {
              return new a(function (e, t) {
                u(r, n, e, t);
              });
            }
            return (t = t ? t.then(e, e) : e());
          }
        });
      }
      function v(n, o, i) {
        var a = "suspendedStart";
        return function (e, t) {
          if ("executing" === a) throw new Error("Generator is already running");
          if ("completed" === a) {
            if ("throw" === e) throw t;
            return O();
          }
          for (i.method = e, i.arg = t; ; ) {
            var r = i.delegate;
            if (r) {
              r = b(r, i);
              if (r) {
                if (r === l) continue;
                return r;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;
            else if ("throw" === i.method) {
              if ("suspendedStart" === a) throw ((a = "completed"), i.arg);
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            a = "executing";
            r = f(n, o, i);
            if ("normal" === r.type) {
              if (((a = i.done ? "completed" : "suspendedYield"), r.arg === l)) continue;
              return {
                value: r.arg,
                done: i.done
              };
            }
            "throw" === r.type && ((a = "completed"), (i.method = "throw"), (i.arg = r.arg));
          }
        };
      }
      function b(e, t) {
        var r = t.method,
          n = e.iterator[r];
        return void 0 === n
          ? ((t.delegate = null),
            ("throw" === r && e.iterator.return && ((t.method = "return"), (t.arg = void 0), b(e, t), "throw" === t.method)) ||
              ("return" !== r && ((t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a '" + r + "' method")))),
            l)
          : "throw" === (r = f(n, e.iterator, t.arg)).type
          ? ((t.method = "throw"), (t.arg = r.arg), (t.delegate = null), l)
          : (n = r.arg)
          ? n.done
            ? ((t[e.resultName] = n.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              l)
            : n
          : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), l);
      }
      function _(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
      }
      function x(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function S(e) {
        (this.tryEntries = [
          {
            tryLoc: "root"
          }
        ]),
          e.forEach(_, this),
          this.reset(!0);
      }
      function E(t) {
        if (t) {
          var r,
            e = t[n];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length))
            return (
              (r = -1),
              ((e = function e() {
                for (; ++r < t.length; ) if (s.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              }).next = e)
            );
        }
        return {
          next: O
        };
      }
      function O() {
        return {
          value: void 0,
          done: !0
        };
      }
      return (
        (h.prototype = d),
        o(g, "constructor", {
          value: d,
          configurable: !0
        }),
        o(d, "constructor", {
          value: h,
          configurable: !0
        }),
        (h.displayName = u(d, i, "GeneratorFunction")),
        (a.isGeneratorFunction = function (e) {
          e = "function" == typeof e && e.constructor;
          return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name));
        }),
        (a.mark = function (e) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, d) : ((e.__proto__ = d), u(e, i, "GeneratorFunction")),
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (a.awrap = function (e) {
          return {
            __await: e
          };
        }),
        m(w.prototype),
        u(w.prototype, r, function () {
          return this;
        }),
        (a.AsyncIterator = w),
        (a.async = function (e, t, r, n, o) {
          void 0 === o && (o = Promise);
          var i = new w(c(e, t, r, n), o);
          return a.isGeneratorFunction(t)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        m(g),
        u(g, i, "Generator"),
        u(g, n, function () {
          return this;
        }),
        u(g, "toString", function () {
          return "[object Generator]";
        }),
        (a.keys = function (e) {
          var t,
            r = Object(e),
            n = [];
          for (t in r) n.push(t);
          return (
            n.reverse(),
            function e() {
              for (; n.length; ) {
                var t = n.pop();
                if (t in r) return (e.value = t), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (a.values = E),
        (S.prototype = {
          constructor: S,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(x),
              !e)
            )
              for (var t in this) "t" === t.charAt(0) && s.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (r) {
            if (this.done) throw r;
            var n = this;
            function e(e, t) {
              return (i.type = "throw"), (i.arg = r), (n.next = e), t && ((n.method = "next"), (n.arg = void 0)), !!t;
            }
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var o = this.tryEntries[t],
                i = o.completion;
              if ("root" === o.tryLoc) return e("end");
              if (o.tryLoc <= this.prev) {
                var a = s.call(o, "catchLoc"),
                  u = s.call(o, "finallyLoc");
                if (a && u) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                } else {
                  if (!u) throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (n.tryLoc <= this.prev && s.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var o = n;
                break;
              }
            }
            var i = (o = o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc ? null : o) ? o.completion : {};
            return (i.type = e), (i.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), l) : this.complete(i);
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              l
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), l;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var r,
                n,
                o = this.tryEntries[t];
              if (o.tryLoc === e) return "throw" === (r = o.completion).type && ((n = r.arg), x(o)), n;
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = {
                iterator: E(e),
                resultName: t,
                nextLoc: r
              }),
              "next" === this.method && (this.arg = void 0),
              l
            );
          }
        }),
        a
      );
    }
    (A.exports = j), (A.exports.__esModule = !0), (A.exports.default = A.exports);
  },
  47: function (e, t, r) {
    var n = r(23).default,
      o = r(48);
    function i(e) {
      e = o(e, "string");
      return "symbol" === n(e) ? e : String(e);
    }
    (e.exports = i), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  48: function (e, t, r) {
    var n = r(23).default;
    function o(e, t) {
      if ("object" !== n(e) || null === e) return e;
      var r = e[Symbol.toPrimitive];
      if (void 0 === r) return ("string" === t ? String : Number)(e);
      r = r.call(e, t || "default");
      if ("object" !== n(r)) return r;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  58: function (e, t) {
    var r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  64: function (e, t) {
    function r(e) {
      if (Array.isArray(e)) return e;
    }
    (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  65: function (e, t) {
    function r(e, t) {
      var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (null != r) {
        var n,
          o,
          i,
          a,
          u = [],
          s = !0,
          c = !1;
        try {
          if (((i = (r = r.call(e)).next), 0 === t)) {
            if (Object(r) !== r) return;
            s = !1;
          } else for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0);
        } catch (e) {
          (c = !0), (o = e);
        } finally {
          try {
            if (!s && null != r.return && ((a = r.return()), Object(a) !== a)) return;
          } finally {
            if (c) throw o;
          }
        }
        return u;
      }
    }
    (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  66: function (e, t, r) {
    var n = r(67);
    function o(e, t) {
      var r;
      if (e)
        return "string" == typeof e
          ? n(e, t)
          : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) ||
            "Set" === r
          ? Array.from(e)
          : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          ? n(e, t)
          : void 0;
    }
    (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  67: function (e, t) {
    function r(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  68: function (e, t) {
    function r() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  7: function (e, t, r) {
    var n = r(47);
    function o(e, t, r) {
      return (
        (t = n(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = r),
        e
      );
    }
    (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  73: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return u;
    });
    var t = r(3),
      n = r.n(t),
      t = r(1),
      o = r.n(t),
      i = r(116),
      a = r(4);
    const u = (function () {
      var t = n()(
        o.a.mark(function e(t) {
          var r;
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (t) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return", null);

                case 2:
                  if (t.includes("filesystem:")) return (e.next = 5), Object(i.getLatexFromPersistentUrl)(t);
                  e.next = 7;
                  break;

                case 5:
                  return (r = e.sent), e.abrupt("return", r);

                case 7:
                  return e.abrupt("return", Object(a.j)(t));

                case 8:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })();
  },
  77: function (n, e, c) {
    "use strict";
    !function (o) {
      var p = c(118),
        h = c(119),
        t = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        d = /[\n\r\t]/g,
        i = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        u = /:\d+$/,
        s = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        y = /^[a-zA-Z]:/;
      function g(e) {
        return (e || "").toString().replace(t, "");
      }
      var m = [
          ["#", "hash"],
          ["?", "query"],
          function (e, t) {
            return v(t.protocol) ? e.replace(/\\/g, "/") : e;
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d*)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1]
        ],
        a = {
          hash: 1,
          query: 1
        };
      function w(e) {
        var t,
          r = "undefined" != typeof window ? window : void 0 !== o ? o : "undefined" != typeof self ? self : {},
          r = r.location || {},
          n = {},
          r = typeof (e = e || r);
        if ("blob:" === e.protocol) n = new x(unescape(e.pathname), {});
        else if ("string" === r) for (t in ((n = new x(e, {})), a)) delete n[t];
        else if ("object" === r) {
          for (t in e) t in a || (n[t] = e[t]);
          void 0 === n.slashes && (n.slashes = i.test(e.href));
        }
        return n;
      }
      function v(e) {
        return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e;
      }
      function b(e, t) {
        (e = (e = g(e)).replace(d, "")), (t = t || {});
        var r,
          e = s.exec(e),
          n = e[1] ? e[1].toLowerCase() : "",
          o = !!e[2],
          i = !!e[3],
          a = 0;
        return (
          o
            ? (a = i ? ((r = e[2] + e[3] + e[4]), e[2].length + e[3].length) : ((r = e[2] + e[4]), e[2].length))
            : i
            ? ((r = e[3] + e[4]), (a = e[3].length))
            : (r = e[4]),
          "file:" === n
            ? 2 <= a && (r = r.slice(2))
            : v(n)
            ? (r = e[4])
            : n
            ? o && (r = r.slice(2))
            : 2 <= a && v(t.protocol) && (r = e[4]),
          {
            protocol: n,
            slashes: o || v(n),
            slashesCount: a,
            rest: r
          }
        );
      }
      function _(e, t) {
        if ("" === e) return t;
        for (var r = (t || "/").split("/").slice(0, -1).concat(e.split("/")), n = r.length, t = r[n - 1], o = !1, i = 0; n--; )
          "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), i++) : i && (0 === n && (o = !0), r.splice(n, 1), i--);
        return o && r.unshift(""), ("." !== t && ".." !== t) || r.push(""), r.join("/");
      }
      function x(e, t, r) {
        if (((e = (e = g(e)).replace(d, "")), !(this instanceof x))) return new x(e, t, r);
        var n,
          o,
          i,
          a,
          u,
          s = m.slice(),
          c = typeof t,
          f = this,
          l = 0;
        for (
          "object" !== c && "string" !== c && ((r = t), (t = null)),
            r && "function" != typeof r && (r = h.parse),
            n = !(c = b(e || "", (t = w(t)))).protocol && !c.slashes,
            f.slashes = c.slashes || (n && t.slashes),
            f.protocol = c.protocol || t.protocol || "",
            e = c.rest,
            (("file:" === c.protocol && (2 !== c.slashesCount || y.test(e))) ||
              (!c.slashes && (c.protocol || c.slashesCount < 2 || !v(f.protocol)))) &&
              (s[3] = [/(.*)/, "pathname"]);
          l < s.length;
          l++
        )
          "function" == typeof (i = s[l])
            ? (e = i(e, f))
            : ((o = i[0]),
              (u = i[1]),
              o != o
                ? (f[u] = e)
                : "string" == typeof o
                ? ~(a = "@" === o ? e.lastIndexOf(o) : e.indexOf(o)) &&
                  (e = "number" == typeof i[2] ? ((f[u] = e.slice(0, a)), e.slice(a + i[2])) : ((f[u] = e.slice(a)), e.slice(0, a)))
                : (a = o.exec(e)) && ((f[u] = a[1]), (e = e.slice(0, a.index))),
              (f[u] = f[u] || (n && i[3] && t[u]) || ""),
              i[4] && (f[u] = f[u].toLowerCase()));
        r && (f.query = r(f.query)),
          n &&
            t.slashes &&
            "/" !== f.pathname.charAt(0) &&
            ("" !== f.pathname || "" !== t.pathname) &&
            (f.pathname = _(f.pathname, t.pathname)),
          "/" !== f.pathname.charAt(0) && v(f.protocol) && (f.pathname = "/" + f.pathname),
          p(f.port, f.protocol) || ((f.host = f.hostname), (f.port = "")),
          (f.username = f.password = ""),
          f.auth &&
            (~(a = f.auth.indexOf(":"))
              ? ((f.username = f.auth.slice(0, a)),
                (f.username = encodeURIComponent(decodeURIComponent(f.username))),
                (f.password = f.auth.slice(a + 1)),
                (f.password = encodeURIComponent(decodeURIComponent(f.password))))
              : (f.username = encodeURIComponent(decodeURIComponent(f.auth))),
            (f.auth = f.password ? f.username + ":" + f.password : f.username)),
          (f.origin = "file:" !== f.protocol && v(f.protocol) && f.host ? f.protocol + "//" + f.host : "null"),
          (f.href = f.toString());
      }
      function e(e, t, r) {
        var n = this;
        switch (e) {
          case "query":
            "string" == typeof t && t.length && (t = (r || h.parse)(t)), (n[e] = t);
            break;

          case "port":
            (n[e] = t), p(t, n.protocol) ? t && (n.host = n.hostname + ":" + t) : ((n.host = n.hostname), (n[e] = ""));
            break;

          case "hostname":
            (n[e] = t), n.port && (t += ":" + n.port), (n.host = t);
            break;

          case "host":
            (n[e] = t),
              u.test(t) ? ((t = t.split(":")), (n.port = t.pop()), (n.hostname = t.join(":"))) : ((n.hostname = t), (n.port = ""));
            break;

          case "protocol":
            (n.protocol = t.toLowerCase()), (n.slashes = !r);
            break;

          case "pathname":
          case "hash":
            t ? ((o = "pathname" === e ? "/" : "#"), (n[e] = t.charAt(0) !== o ? o + t : t)) : (n[e] = t);
            break;

          case "username":
          case "password":
            n[e] = encodeURIComponent(t);
            break;

          case "auth":
            var o = t.indexOf(":");
            ~o
              ? ((n.username = t.slice(0, o)),
                (n.username = encodeURIComponent(decodeURIComponent(n.username))),
                (n.password = t.slice(o + 1)),
                (n.password = encodeURIComponent(decodeURIComponent(n.password))))
              : (n.username = encodeURIComponent(decodeURIComponent(t)));
        }
        for (var i = 0; i < m.length; i++) {
          var a = m[i];
          a[4] && (n[a[1]] = n[a[1]].toLowerCase());
        }
        return (
          (n.auth = n.password ? n.username + ":" + n.password : n.username),
          (n.origin = "file:" !== n.protocol && v(n.protocol) && n.host ? n.protocol + "//" + n.host : "null"),
          (n.href = n.toString()),
          n
        );
      }
      function r(e) {
        (e && "function" == typeof e) || (e = h.stringify);
        var t = this,
          r = t.host,
          n = t.protocol,
          n = (n && ":" !== n.charAt(n.length - 1) && (n += ":"), n + ((t.protocol && t.slashes) || v(t.protocol) ? "//" : ""));
        return (
          t.username
            ? ((n += t.username), t.password && (n += ":" + t.password), (n += "@"))
            : t.password
            ? (n = n + (":" + t.password) + "@")
            : "file:" !== t.protocol && v(t.protocol) && !r && "/" !== t.pathname && (n += "@"),
          (":" === r[r.length - 1] || (u.test(t.hostname) && !t.port)) && (r += ":"),
          (n += r + t.pathname),
          (r = "object" == typeof t.query ? e(t.query) : t.query) && (n += "?" !== r.charAt(0) ? "?" + r : r),
          t.hash && (n += t.hash),
          n
        );
      }
      (x.prototype = {
        set: e,
        toString: r
      }),
        (x.extractProtocol = b),
        (x.location = w),
        (x.trimLeft = g),
        (x.qs = h),
        (n.exports = x);
    }.call(this, c(58));
  },
  89: function (e, t, r) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var s = Object.getOwnPropertySymbols,
      c = Object.prototype.hasOwnProperty,
      f = Object.prototype.propertyIsEnumerable;
    function l(e) {
      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
      return Object(e);
    }
    function n() {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
        for (var t, r = {}, n = 0; n < 10; n++) r["_" + String.fromCharCode(n)] = n;
        return "0123456789" !==
          Object.getOwnPropertyNames(r)
            .map(function (e) {
              return r[e];
            })
            .join("")
          ? !1
          : ((t = {}),
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              t[e] = e;
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, t)).join(""));
      } catch (e) {
        return !1;
      }
    }
    e.exports = n()
      ? Object.assign
      : function (e, t) {
          for (var r, n = l(e), o = 1; o < arguments.length; o++) {
            for (var i in (r = Object(arguments[o]))) c.call(r, i) && (n[i] = r[i]);
            if (s) for (var a = s(r), u = 0; u < a.length; u++) f.call(r, a[u]) && (n[a[u]] = r[a[u]]);
          }
          return n;
        };
  }
});
