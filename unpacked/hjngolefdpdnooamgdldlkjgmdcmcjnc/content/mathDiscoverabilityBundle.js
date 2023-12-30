!(function (u) {
  function e(e) {
    for (var t, r, n = e[0], o = e[1], i = 0, a = []; i < n.length; i++)
      (r = n[i]), Object.prototype.hasOwnProperty.call(c, r) && c[r] && a.push(c[r][0]), (c[r] = 0);
    for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (u[t] = o[t]);
    for (f && f(e); a.length; ) a.shift()();
  }
  var r = {},
    c = {
      16: 0
    };
  function s(e) {
    return l.p + "" + e + ".b2215ac3c45eaa93f881.js";
  }
  function l(e) {
    var t;
    return (
      r[e] ||
      ((t = r[e] =
        {
          i: e,
          l: !1,
          exports: {}
        }),
      u[e].call(t.exports, t, t.exports, l),
      (t.l = !0),
      t)
    ).exports;
  }
  (l.e = function (r) {
    var e,
      t = [],
      n = function (t) {
        const r = s(t);
        chrome.runtime.sendMessage(
          "hjngolefdpdnooamgdldlkjgmdcmcjnc",
          {
            action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
            scriptPath: r
          },
          function () {
            chrome.runtime.lastError && console.error("Failed to load dependency", r);
            const e = c[t];
            0 !== e && (e && e[1](), (c[t] = void 0));
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
            l.nc && i.setAttribute("nonce", l.nc),
            (i.src = s(o)),
            0 !== i.src.indexOf(window.location.origin + "/") && (i.crossOrigin = "anonymous"),
            (e = function (e) {
              (i.onerror = i.onload = null), clearTimeout(a);
              var t,
                r,
                n = c[o];
              0 !== n &&
                (n &&
                  ((t = e && ("load" === e.type ? "missing" : e.type)),
                  (e = e && e.target && e.target.src),
                  ((r = new Error("Loading chunk " + o + " failed.\n(" + t + ": " + e + ")")).type = t),
                  (r.request = e),
                  n[1](r)),
                (c[o] = void 0));
            }),
            setTimeout(function () {
              e({
                type: "timeout",
                target: i
              });
            }, 12e4));
        (i.onerror = i.onload = e), t.appendChild(i);
      },
      i = c[r];
    return (
      0 !== i &&
        (i
          ? t.push(i[2])
          : ((e = new Promise(function (e, t) {
              i = c[r] = [e, t];
            })),
            t.push((i[2] = e)),
            ("chrome" === window.equatioCoreChunkLoading ? n : o)(r))),
      Promise.all(t)
    );
  }),
    (l.m = u),
    (l.c = r),
    (l.d = function (e, t, r) {
      l.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
        });
    }),
    (l.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (l.t = function (t, e) {
      if ((1 & e && (t = l(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (l.r(r),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          l.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (l.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return l.d(t, "a", t), t;
    }),
    (l.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (l.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/"),
    (l.oe = function (e) {
      throw (console.error(e), e);
    });
  var t = (n = window.equatioChromeJsonp = window.equatioChromeJsonp || []).push.bind(n);
  n.push = e;
  for (var n = n.slice(), o = 0; o < n.length; o++) e(n[o]);
  var f = t;
  l((l.s = 393));
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
  112: function (D, e, t) {
    "use strict";
    /** @license React v16.13.1
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var l = t(89),
      t = "function" == typeof Symbol && Symbol.for,
      f = t ? Symbol.for("react.element") : 60103,
      c = t ? Symbol.for("react.portal") : 60106,
      r = t ? Symbol.for("react.fragment") : 60107,
      n = t ? Symbol.for("react.strict_mode") : 60108,
      o = t ? Symbol.for("react.profiler") : 60114,
      i = t ? Symbol.for("react.provider") : 60109,
      a = t ? Symbol.for("react.context") : 60110,
      u = t ? Symbol.for("react.forward_ref") : 60112,
      s = t ? Symbol.for("react.suspense") : 60113,
      d = t ? Symbol.for("react.memo") : 60115,
      p = t ? Symbol.for("react.lazy") : 60116,
      h = "function" == typeof Symbol && Symbol.iterator;
    function m(e) {
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
    var y = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
      },
      g = {};
    function v(e, t, r) {
      (this.props = e), (this.context = t), (this.refs = g), (this.updater = r || y);
    }
    function _() {}
    function b(e, t, r) {
      (this.props = e), (this.context = t), (this.refs = g), (this.updater = r || y);
    }
    (v.prototype.isReactComponent = {}),
      (v.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error(m(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (v.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (_.prototype = v.prototype);
    var t = (b.prototype = new _()),
      w =
        ((t.constructor = b),
        l(t, v.prototype),
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
    function O(e, t, r) {
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
        for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
        o.children = c;
      }
      if (e && e.defaultProps) for (n in (u = e.defaultProps)) void 0 === o[n] && (o[n] = u[n]);
      return {
        $$typeof: f,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: w.current
      };
    }
    function R(e, t) {
      return {
        $$typeof: f,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
      };
    }
    function j(e) {
      return "object" == typeof e && null !== e && e.$$typeof === f;
    }
    function I(e) {
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
    var E = /\/+/g,
      P = [];
    function k(e, t, r, n) {
      var o;
      return P.length
        ? (((o = P.pop()).result = e), (o.keyPrefix = t), (o.func = r), (o.context = n), (o.count = 0), o)
        : {
            result: e,
            keyPrefix: t,
            func: r,
            context: n,
            count: 0
          };
    }
    function A(e) {
      (e.result = null), (e.keyPrefix = null), (e.func = null), (e.context = null), (e.count = 0), P.length < 10 && P.push(e);
    }
    function C(e, t, r, n) {
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
              case f:
              case c:
                o = !0;
            }
        }
      if (o) return r(n, e, "" === t ? "." + F(e, 0) : t), 1;
      if (((o = 0), (t = "" === t ? "." : t + ":"), Array.isArray(e)))
        for (var i = 0; i < e.length; i++) {
          var a,
            u = t + F((a = e[i]), i);
          o += C(a, u, r, n);
        }
      else if (
        "function" ==
        typeof (u = null !== e && "object" == typeof e && "function" == typeof (u = (h && e[h]) || e["@@iterator"]) ? u : null)
      )
        for (e = u.call(e), i = 0; !(a = e.next()).done; ) o += C((a = a.value), (u = t + F(a, i++)), r, n);
      else if ("object" === a)
        throw ((r = "" + e), Error(m(31, "[object Object]" === r ? "object with keys {" + Object.keys(e).join(", ") + "}" : r, "")));
      return o;
    }
    function G(e, t, r) {
      return null == e ? 0 : C(e, "", t, r);
    }
    function F(e, t) {
      return "object" == typeof e && null !== e && null != e.key ? I(e.key) : t.toString(36);
    }
    function T(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function U(e, t, r) {
      var n = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? L(e, n, r, function (e) {
              return e;
            })
          : null != e &&
            (j(e) && (e = R(e, o + (!e.key || (t && t.key === e.key) ? "" : ("" + e.key).replace(E, "$&/") + "/") + r)), n.push(e));
    }
    function L(e, t, r, n, o) {
      var i = "";
      G(e, U, (t = k(t, (i = null != r ? ("" + r).replace(E, "$&/") + "/" : i), n, o))), A(t);
    }
    var q = {
      current: null
    };
    function M() {
      var e = q.current;
      if (null === e) throw Error(m(321));
      return e;
    }
    t = {
      ReactCurrentDispatcher: q,
      ReactCurrentBatchConfig: {
        suspense: null
      },
      ReactCurrentOwner: w,
      IsSomeRendererActing: {
        current: !1
      },
      assign: l
    };
    (e.Children = {
      map: function (e, t, r) {
        return null == e || L(e, (e = []), null, t, r), e;
      },
      forEach: function (e, t, r) {
        if (null == e) return e;
        G(e, T, (t = k(null, null, t, r))), A(t);
      },
      count: function (e) {
        return G(
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
          L(e, t, null, function (e) {
            return e;
          }),
          t
        );
      },
      only: function (e) {
        if (j(e)) return e;
        throw Error(m(143));
      }
    }),
      (e.Component = v),
      (e.Fragment = r),
      (e.Profiler = o),
      (e.PureComponent = b),
      (e.StrictMode = n),
      (e.Suspense = s),
      (e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = t),
      (e.cloneElement = function (e, t, r) {
        if (null == e) throw Error(m(267, e));
        var n = l({}, e.props),
          o = e.key,
          i = e.ref,
          a = e._owner;
        if (null != t)
          for (u in (void 0 !== t.ref && ((i = t.ref), (a = w.current)),
          void 0 !== t.key && (o = "" + t.key),
          e.type && e.type.defaultProps && (c = e.type.defaultProps),
          t))
            x.call(t, u) && !S.hasOwnProperty(u) && (n[u] = (void 0 === t[u] && void 0 !== c ? c : t)[u]);
        var u = arguments.length - 2;
        if (1 === u) n.children = r;
        else if (1 < u) {
          for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
          n.children = c;
        }
        return {
          $$typeof: f,
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
      (e.createElement = O),
      (e.createFactory = function (e) {
        var t = O.bind(null, e);
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
      (e.isValidElement = j),
      (e.lazy = function (e) {
        return {
          $$typeof: p,
          _ctor: e,
          _status: -1,
          _result: null
        };
      }),
      (e.memo = function (e, t) {
        return {
          $$typeof: d,
          type: e,
          compare: void 0 === t ? null : t
        };
      }),
      (e.useCallback = function (e, t) {
        return M().useCallback(e, t);
      }),
      (e.useContext = function (e, t) {
        return M().useContext(e, t);
      }),
      (e.useDebugValue = function () {}),
      (e.useEffect = function (e, t) {
        return M().useEffect(e, t);
      }),
      (e.useImperativeHandle = function (e, t, r) {
        return M().useImperativeHandle(e, t, r);
      }),
      (e.useLayoutEffect = function (e, t) {
        return M().useLayoutEffect(e, t);
      }),
      (e.useMemo = function (e, t) {
        return M().useMemo(e, t);
      }),
      (e.useReducer = function (e, t, r) {
        return M().useReducer(e, t, r);
      }),
      (e.useRef = function (e) {
        return M().useRef(e);
      }),
      (e.useState = function (e) {
        return M().useState(e);
      }),
      (e.version = "16.13.1");
  },
  123: function (e, t, r) {
    "use strict";
    var n = r(3),
      o = r.n(n),
      n = r(1),
      a = r.n(n);
    const u = () => ({
        hasMath: !1,
        nodes: []
      }),
      i = (e) => "block" === window.getComputedStyle(e, "").getPropertyValue("display"),
      c = (e) => {
        let t = e;
        for (; t.parentNode && !i(t); ) t = t.parentNode;
        return t;
      },
      s = (e) =>
        [
          ...Array.from(e.querySelectorAll("[id^=MathJax-Element-][id$=-Frame]")).map((e) =>
            e.querySelector(".mjx-math, [id^=MathJax-Span-]")
          ),
          ...Array.from(e.querySelectorAll("[role='math']"))
        ].filter((e) => !e.closest("span[class='katex']")),
      l = (e) => Array.from(e.querySelectorAll(".katex-html")),
      f = (e) => [...Array.from(e.querySelectorAll("fmath")).filter((e) => i(e) || (!i(e) && null === e.querySelector("table")))],
      d = (e) => [...Array.from(e.querySelectorAll("img.mwe-math-fallback-image-inline, img.mwe-math-fallback-image-display"))],
      p = (e) => [...Array.from(e.querySelectorAll("span.texhtml"))],
      h = (e) => [...Array.from(e.querySelectorAll("svg[role='math']")).map((e) => (i(e) ? e : c(e)))],
      m = (e) => [
        ...Array.from(e.querySelectorAll('img[src^="https://equatio-api.texthelp.com"]')).filter(
          (e) => e.src.includes("png") || e.src.includes("svg")
        )
      ],
      y = (e) => {
        const t = [...s(e), ...l(e), ...f(e), ...d(e), ...p(e), ...h(e), ...m(e)];
        return t.filter((e) => e && 30 <= e.offsetWidth && 5 <= e.offsetHeight && e);
      };
    t.a = (function () {
      var t = o()(
        a.a.mark(function e(i) {
          return a.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return e.abrupt(
                    "return",
                    new Promise((r) => {
                      if (0 === document.length) r(u());
                      else {
                        const n = () => {
                            const e = y(i),
                              t = 0 < e.length;
                            return {
                              hasMath: t,
                              nodes: e
                            };
                          },
                          o = ({ origin: e, data: t } = {}) => {
                            e === window.location.origin &&
                              t &&
                              "EQUATIO_DISCOVERABILITY_MATHJAX" === t.action &&
                              (window.removeEventListener("message", o), r(n()));
                          };
                        if (document.querySelector("#eq-discover-mathjax-check")) r(n());
                        else {
                          window.addEventListener("message", o);
                          const e = document.createElement("script");
                          (e.id = "eq-discover-mathjax-check"),
                            (e.src = `chrome-extension://${chrome.runtime.id}/content/mathJaxBundle.js`),
                            document.head.appendChild(e);
                        }
                      }
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
    })();
  },
  17: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return o;
    }),
      r.d(t, "d", function () {
        return a;
      }),
      r.d(t, "c", function () {
        return u;
      });
    const n = ["onedrive.live.com", ".sharepoint.com", ".officeapps.live.com"],
      o = {
        Word: "Word",
        PowerPoint: "PowerPoint",
        Excel: "Excel",
        Onenote: "Onenote"
      },
      i = [o.Word],
      a = (e) => i.includes(e),
      u =
        ((t.b = (e, r = !0) => {
          if (e) {
            let t = e;
            if (!r)
              try {
                t = new URL(e).hostname;
              } catch (e) {
                return !1;
              }
            for (let e = 0; e < n.length; e += 1) if (t.endsWith(n[e])) return !0;
          }
          return !1;
        }),
        (e) =>
          e.endsWith("word-edit.officeapps.live.com")
            ? o.Word
            : e.endsWith("powerpoint.officeapps.live.com")
            ? o.PowerPoint
            : e.endsWith("excel.officeapps.live.com")
            ? o.Excel
            : e.endsWith("onenote.officeapps.live.com")
            ? o.Onenote
            : null);
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
    function c(e, t, r, n, o, i, a) {
      try {
        var u = e[i](a),
          c = u.value;
      } catch (e) {
        return void r(e);
      }
      u.done ? t(c) : Promise.resolve(c).then(n, o);
    }
    function r(u) {
      return function () {
        var e = this,
          a = arguments;
        return new Promise(function (t, r) {
          var n = u.apply(e, a);
          function o(e) {
            c(n, t, r, o, i, "next", e);
          }
          function i(e) {
            c(n, t, r, o, i, "throw", e);
          }
          o(void 0);
        });
      };
    }
    (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  32: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    });
    const n = [],
      o = ["coursera.org", "dev-coursera.org", ...n],
      i = (t = window.location.hostname) => o.some((e) => e === t || t.endsWith("." + e));
  },
  393: function (e, t, v) {
    "use strict";
    v.r(t),
      function (l) {
        var e = v(21),
          f = v.n(e),
          e = v(3),
          d = v.n(e),
          e = v(1),
          p = v.n(e),
          h = v(123),
          m = v(4),
          y = v(74),
          g = v(32);
        (window.equatioCoreChunkLoading = "chrome"),
          d()(
            p.a.mark(function e() {
              var t, r, n, o, i, a, u, c, s;
              return p.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = document.querySelector("#equatio-math-discoverability")) && document.body.removeChild(t),
                          (e.prev = 2),
                          (e.next = 5),
                          Object(h.a)(document)
                        );

                      case 5:
                        (r = e.sent), (e.next = 10);
                        break;

                      case 8:
                        (e.prev = 8), (e.t0 = e.catch(2));

                      case 10:
                        if (
                          ((n = r && r.hasMath),
                          d()(
                            p.a.mark(function e() {
                              return p.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.next = 2), Object(m.G)(n);

                                    case 2:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          )(),
                          n)
                        )
                          return (e.next = 15), Object(m.D)();
                        e.next = 37;
                        break;

                      case 15:
                        if ((o = e.sent) && Object(g.a)()) return e.abrupt("return");
                        e.next = 18;
                        break;

                      case 18:
                        if (o)
                          return (
                            ((t = document.createElement("div")).id = "equatio-math-discoverability"),
                            document.body.appendChild(t),
                            (e.next = 24),
                            Promise.all([
                              v.e(0).then(v.t.bind(null, 52, 7)),
                              Promise.all([v.e(1), v.e(0), v.e(24), v.e(26)]).then(v.bind(null, 420)),
                              v.e(1).then(v.bind(null, 9)),
                              v.e(5).then(v.bind(null, 29))
                            ])
                          );
                        e.next = 36;
                        break;

                      case 24:
                        (c = e.sent),
                          (c = f()(c, 4)),
                          (i = c[0].render),
                          (a = c[1].default),
                          (s = c[2].IntlProvider),
                          (c = c[3]),
                          (u = c.getIntlProviderLocale),
                          (c = c.getMessagesForLanguage),
                          (s = l.createElement(
                            s,
                            {
                              locale: u(),
                              messages: c()
                            },
                            l.createElement(a, null)
                          )),
                          i(s, t),
                          (e.next = 37);
                        break;

                      case 36:
                        document.querySelector("#equatio-toolbar-shadow-host") ||
                          ((window.equatioMathDiscovered = !0),
                          Object(y.a)()
                            ? Object(m.B)()
                            : Object(g.a)() &&
                              window.postMessage(
                                {
                                  action: "EQUATIO_TOGGLE_TOOLBAR"
                                },
                                window.location.origin
                              ));

                      case 37:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 8]]
              );
            })
          )();
      }.call(this, v(2));
  },
  4: function (D, e, t) {
    "use strict";
    t.d(e, "F", function () {
      return s;
    }),
      t.d(e, "z", function () {
        return l;
      }),
      t.d(e, "h", function () {
        return f;
      }),
      t.d(e, "q", function () {
        return d;
      }),
      t.d(e, "w", function () {
        return p;
      }),
      t.d(e, "hb", function () {
        return h;
      }),
      t.d(e, "a", function () {
        return m;
      }),
      t.d(e, "O", function () {
        return y;
      }),
      t.d(e, "v", function () {
        return g;
      }),
      t.d(e, "I", function () {
        return v;
      }),
      t.d(e, "i", function () {
        return _;
      }),
      t.d(e, "L", function () {
        return b;
      }),
      t.d(e, "x", function () {
        return w;
      }),
      t.d(e, "Y", function () {
        return x;
      }),
      t.d(e, "Z", function () {
        return S;
      }),
      t.d(e, "u", function () {
        return O;
      }),
      t.d(e, "N", function () {
        return j;
      }),
      t.d(e, "e", function () {
        return E;
      }),
      t.d(e, "p", function () {
        return P;
      }),
      t.d(e, "X", function () {
        return k;
      }),
      t.d(e, "gb", function () {
        return A;
      }),
      t.d(e, "bb", function () {
        return C;
      }),
      t.d(e, "db", function () {
        return G;
      }),
      t.d(e, "eb", function () {
        return F;
      }),
      t.d(e, "S", function () {
        return L;
      }),
      t.d(e, "Q", function () {
        return q;
      }),
      t.d(e, "b", function () {
        return M;
      }),
      t.d(e, "P", function () {
        return R;
      }),
      t.d(e, "ib", function () {
        return I;
      }),
      t.d(e, "g", function () {
        return T;
      }),
      t.d(e, "M", function () {
        return U;
      }),
      t.d(e, "B", function () {
        return $;
      }),
      t.d(e, "G", function () {
        return N;
      }),
      t.d(e, "D", function () {
        return W;
      }),
      t.d(e, "V", function () {
        return H;
      }),
      t.d(e, "r", function () {
        return B;
      }),
      t.d(e, "W", function () {
        return Q;
      }),
      t.d(e, "f", function () {
        return J;
      }),
      t.d(e, "y", function () {
        return V;
      }),
      t.d(e, "t", function () {
        return Y;
      }),
      t.d(e, "E", function () {
        return z;
      }),
      t.d(e, "C", function () {
        return X;
      }),
      t.d(e, "s", function () {
        return K;
      }),
      t.d(e, "cb", function () {
        return Z;
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
        return ce;
      }),
      t.d(e, "T", function () {
        return se;
      }),
      t.d(e, "k", function () {
        return le;
      }),
      t.d(e, "H", function () {
        return fe;
      }),
      t.d(e, "o", function () {
        return de;
      }),
      t.d(e, "c", function () {
        return pe;
      }),
      t.d(e, "l", function () {
        return he;
      }),
      t.d(e, "ab", function () {
        return me;
      }),
      t.d(e, "R", function () {
        return ye;
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
    const c = (o, e = {}) =>
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
      s = () => c("load"),
      l = () => c(i.a.InjectDocsRequirements),
      f = (e = !1) =>
        c(i.a.EnsureLoggedIntoFirebase, {
          forceLogin: e
        }),
      d = () => c(i.a.GetLicense),
      p = () => c(i.a.GetUserSettings),
      h = (e, t, r) =>
        c(i.a.UpdateUserSettings, {
          options: e,
          profile: t,
          customOptions: r
        }),
      m = (e) =>
        c(i.a.AddFavourites, {
          items: e
        }),
      y = (e) =>
        c(i.a.RemoveFavourites, {
          item: e
        }),
      g = () => c(i.a.GetUserFavourites),
      v = () => c(i.a.MergeFirebaseFavourites),
      _ = (e) =>
        c(i.a.EnterProductCode, {
          code: e
        }),
      b = (e, t) =>
        c(i.a.OpenGoogleFormsPicker, {
          url: e,
          picker: t
        }),
      w = (e) =>
        c(i.a.GoogleFormsPickerLoaded, {
          location: e
        }),
      x = (e) =>
        c(i.a.SetProfileType, {
          type: e
        }),
      S = (e = !1) =>
        c(i.a.SetShowEquatioOnFirstRun, {
          value: e
        }),
      O = () => c(i.a.GetShouldShowEquatioOnFirstRun),
      j = (e, t = null) =>
        c(i.a.RegisterCompanionAppTarget, {
          platform: e,
          hostname: t
        }),
      E = () => c(i.a.DisconnectCompanionDoc),
      P = () => c(i.a.GetHandwritingCount),
      k = (e) =>
        c(i.a.SetHandwritingCount, {
          count: e
        }),
      A = (e) =>
        c(i.a.UpdateGoogleSheetEquations, {
          spreadsheetId: e
        }),
      C = () => c(i.a.ShowHandwritingExceededReminder),
      G = () => c(i.a.ShowPredictionReminder),
      F = () => c(i.a.ShowReviewReminder),
      L = (e) =>
        c(i.a.SendAnalyticsScreen, {
          screenName: e
        }),
      q = (e, t = 0, r) =>
        c(i.a.SendAnalyticsEvent, {
          category: e,
          value: t,
          customParams: r
        }),
      M = () => c(i.a.CaptureScreenshot),
      R = (e) =>
        c(i.a.ScanMathpixOcr, {
          base64: e
        }),
      I = (e, t) =>
        c(i.a.UploadImageToProxy, {
          url: e,
          base64: t
        }),
      T = () => c(i.a.DismissReviewReminder),
      U = (function () {
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
                      c(i.a.OpenMathspace, {
                        platformIntegrationId: t,
                        windowUrl: n
                      })
                    );

                  case 3:
                    (r = e.sent),
                      (n = () => {
                        c(i.a.MathspaceTabClosed, {
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
      $ = () => c(i.a.InjectWebPageToolbar),
      N = (e) =>
        c(i.a.MathDiscovered, {
          value: e
        }),
      W = () => c(i.a.IsDiscoverabilityFirstTime),
      H = (e) =>
        c(i.a.SetDiscoverabilityEnabled, {
          value: e
        }),
      B = () => c(i.a.GetMathDiscoverability),
      Q = (e) =>
        c(i.a.DiscoverabilitySessionDisable, {
          disabled: e
        }),
      J = (e) =>
        c(i.a.DismissGSuiteMathDiscover, {
          options: e
        }),
      V = () => c(i.a.HasGSuiteDiscoverOverlayShown),
      Y = () => c(i.a.GetPlatformOs),
      z = () => c(i.a.IsLockedForms),
      X = (e, t, r, n) =>
        c(i.a.InsertImageGoogleApi, {
          url: e,
          width: t,
          height: r,
          additionalOptions: n
        }),
      K = () => c(i.a.GetMolecularFilter),
      Z = (e = null, t = {}) =>
        c(i.a.ShowInfoPopup, {
          popupType: e,
          options: t
        }),
      ee = (e, t = !1) =>
        c(i.a.OfficeAddToClipboard, {
          content: e,
          isText: t
        }),
      te = (e) =>
        c(i.a.ExtractLatexFromUrl, {
          url: e
        }),
      re = (e) =>
        c(i.a.OfficeCanUseApp, {
          appName: e
        }),
      ne = (function () {
        var e = r()(
          o.a.mark(function e() {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", c(i.a.SwitchAccount));

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
      oe = () => c(i.a.GetDisplayEmail),
      ie = (e, t) =>
        c(i.a.SetCanShowClipboardPopup, {
          value: e,
          copyBtn: t
        }),
      ae = (e) =>
        c(i.a.GetCanShowClipboardPopup, {
          copyBtn: e
        }),
      ue = (e, t) =>
        c(i.a.CreateSpeechServerData, {
          text: e,
          options: t
        }),
      ce = (e = !1) =>
        c(i.a.InjectHtmlEditorApi, {
          fromToolbar: e
        }),
      se = (e, t, r = !1, n = null) =>
        c(i.a.HtmlEditorApiAction, {
          command: e,
          value: t,
          fromEditor: r,
          targetFrame: n
        }),
      le = () => c(i.a.FireDatadeskUpdate),
      fe = (function () {
        var t = r()(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      c(i.a.MathSolverFetch, {
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
      de = () => c(i.a.GetFormsApiPermission),
      pe = (e) =>
        c(i.a.CreateFormsQuestions, {
          questions: e
        }),
      he = (e) =>
        c(i.a.GenerateMathQuestions, {
          options: e
        }),
      me = () => c(i.a.ShowFormsGeneratorUi),
      ye = (e, t, r, n) => {
        let o = "";
        return (
          window && window.location && (o = window.location.href),
          c(i.a.SendAnalyticsEventGa4, {
            name: e,
            category: t,
            feature: r,
            eventProps: n,
            url: o
          })
        );
      };
  },
  46: function (E, e, t) {
    var P = t(23).default;
    function k() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (E.exports = k =
        function () {
          return a;
        }),
        (E.exports.__esModule = !0),
        (E.exports.default = E.exports);
      var a = {},
        e = Object.prototype,
        c = e.hasOwnProperty,
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
      function s(e, t, r, n) {
        (t = t && t.prototype instanceof d ? t : d), (t = Object.create(t.prototype)), (n = new S(n || []));
        return (
          o(t, "_invoke", {
            value: _(e, r, n)
          }),
          t
        );
      }
      function l(e, t, r) {
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
      a.wrap = s;
      var f = {};
      function d() {}
      function p() {}
      function h() {}
      var t = {},
        m =
          (u(t, n, function () {
            return this;
          }),
          Object.getPrototypeOf),
        m = m && m(m(O([]))),
        y = (m && m !== e && c.call(m, n) && (t = m), (h.prototype = d.prototype = Object.create(t)));
      function g(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function v(i, a) {
        function u(e, t, r, n) {
          var o,
            e = l(i[e], i, t);
          if ("throw" !== e.type)
            return (t = (o = e.arg).value) && "object" == P(t) && c.call(t, "__await")
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
      function _(n, o, i) {
        var a = "suspendedStart";
        return function (e, t) {
          if ("executing" === a) throw new Error("Generator is already running");
          if ("completed" === a) {
            if ("throw" === e) throw t;
            return j();
          }
          for (i.method = e, i.arg = t; ; ) {
            var r = i.delegate;
            if (r) {
              r = b(r, i);
              if (r) {
                if (r === f) continue;
                return r;
              }
            }
            if ("next" === i.method) i.sent = i._sent = i.arg;
            else if ("throw" === i.method) {
              if ("suspendedStart" === a) throw ((a = "completed"), i.arg);
              i.dispatchException(i.arg);
            } else "return" === i.method && i.abrupt("return", i.arg);
            a = "executing";
            r = l(n, o, i);
            if ("normal" === r.type) {
              if (((a = i.done ? "completed" : "suspendedYield"), r.arg === f)) continue;
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
            f)
          : "throw" === (r = l(n, e.iterator, t.arg)).type
          ? ((t.method = "throw"), (t.arg = r.arg), (t.delegate = null), f)
          : (n = r.arg)
          ? n.done
            ? ((t[e.resultName] = n.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              f)
            : n
          : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), f);
      }
      function w(e) {
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
          e.forEach(w, this),
          this.reset(!0);
      }
      function O(t) {
        if (t) {
          var r,
            e = t[n];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length))
            return (
              (r = -1),
              ((e = function e() {
                for (; ++r < t.length; ) if (c.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              }).next = e)
            );
        }
        return {
          next: j
        };
      }
      function j() {
        return {
          value: void 0,
          done: !0
        };
      }
      return (
        (p.prototype = h),
        o(y, "constructor", {
          value: h,
          configurable: !0
        }),
        o(h, "constructor", {
          value: p,
          configurable: !0
        }),
        (p.displayName = u(h, i, "GeneratorFunction")),
        (a.isGeneratorFunction = function (e) {
          e = "function" == typeof e && e.constructor;
          return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name));
        }),
        (a.mark = function (e) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), u(e, i, "GeneratorFunction")),
            (e.prototype = Object.create(y)),
            e
          );
        }),
        (a.awrap = function (e) {
          return {
            __await: e
          };
        }),
        g(v.prototype),
        u(v.prototype, r, function () {
          return this;
        }),
        (a.AsyncIterator = v),
        (a.async = function (e, t, r, n, o) {
          void 0 === o && (o = Promise);
          var i = new v(s(e, t, r, n), o);
          return a.isGeneratorFunction(t)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        g(y),
        u(y, i, "Generator"),
        u(y, n, function () {
          return this;
        }),
        u(y, "toString", function () {
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
        (a.values = O),
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
              for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
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
                var a = c.call(o, "catchLoc"),
                  u = c.call(o, "finallyLoc");
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
              if (n.tryLoc <= this.prev && c.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                var o = n;
                break;
              }
            }
            var i = (o = o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc ? null : o) ? o.completion : {};
            return (i.type = e), (i.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), f) : this.complete(i);
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              f
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), f;
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
                iterator: O(e),
                resultName: t,
                nextLoc: r
              }),
              "next" === this.method && (this.arg = void 0),
              f
            );
          }
        }),
        a
      );
    }
    (E.exports = k), (E.exports.__esModule = !0), (E.exports.default = E.exports);
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
  55: function (e, t, r) {
    "use strict";
    t.a = (e = window.location.href) =>
      e.includes("pdf.dev.texthelp.com") ||
      e.includes("orbit.texthelp.com") ||
      e.includes("orbitnote-us.staging.texthelp.com") ||
      e.includes("orbitnote.staging.texthelp.com");
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
          c = !0,
          s = !1;
        try {
          if (((i = (r = r.call(e)).next), 0 === t)) {
            if (Object(r) !== r) return;
            c = !1;
          } else for (; !(c = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); c = !0);
        } catch (e) {
          (s = !0), (o = e);
        } finally {
          try {
            if (!c && null != r.return && ((a = r.return()), Object(a) !== a)) return;
          } finally {
            if (s) throw o;
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
  74: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return u;
    });
    var n = r(55),
      o = r(10),
      i = r(17),
      a = r(32);
    const u = (e = window.location) => {
      const t = e.hostname,
        r = e.href;
      return !(Object(o.c)(e) || Object(n.a)(r) || Object(a.a)(t) || Object(i.b)(t));
    };
  },
  89: function (e, t, r) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
    var c = Object.getOwnPropertySymbols,
      s = Object.prototype.hasOwnProperty,
      l = Object.prototype.propertyIsEnumerable;
    function f(e) {
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
          for (var r, n = f(e), o = 1; o < arguments.length; o++) {
            for (var i in (r = Object(arguments[o]))) s.call(r, i) && (n[i] = r[i]);
            if (c) for (var a = c(r), u = 0; u < a.length; u++) l.call(r, a[u]) && (n[a[u]] = r[a[u]]);
          }
          return n;
        };
  }
});
