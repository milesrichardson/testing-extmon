!(function (r) {
  var n = {};
  function o(e) {
    var t;
    return (
      n[e] ||
      ((t = n[e] =
        {
          i: e,
          l: !1,
          exports: {}
        }),
      r[e].call(t.exports, t, t.exports, o),
      (t.l = !0),
      t)
    ).exports;
  }
  (o.m = r),
    (o.c = n),
    (o.d = function (e, t, r) {
      o.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: r
        });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          value: t
        }),
        2 & e && "string" != typeof t)
      )
        for (var n in t)
          o.d(
            r,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/"),
    o((o.s = 412));
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
  4: function (T, e, t) {
    "use strict";
    t.d(e, "F", function () {
      return s;
    }),
      t.d(e, "z", function () {
        return l;
      }),
      t.d(e, "h", function () {
        return d;
      }),
      t.d(e, "q", function () {
        return f;
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
        return g;
      }),
      t.d(e, "v", function () {
        return _;
      }),
      t.d(e, "I", function () {
        return y;
      }),
      t.d(e, "i", function () {
        return v;
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
        return G;
      }),
      t.d(e, "p", function () {
        return E;
      }),
      t.d(e, "X", function () {
        return F;
      }),
      t.d(e, "gb", function () {
        return P;
      }),
      t.d(e, "bb", function () {
        return D;
      }),
      t.d(e, "db", function () {
        return A;
      }),
      t.d(e, "eb", function () {
        return L;
      }),
      t.d(e, "S", function () {
        return M;
      }),
      t.d(e, "Q", function () {
        return R;
      }),
      t.d(e, "b", function () {
        return C;
      }),
      t.d(e, "P", function () {
        return k;
      }),
      t.d(e, "ib", function () {
        return q;
      }),
      t.d(e, "g", function () {
        return I;
      }),
      t.d(e, "M", function () {
        return U;
      }),
      t.d(e, "B", function () {
        return N;
      }),
      t.d(e, "G", function () {
        return H;
      }),
      t.d(e, "D", function () {
        return W;
      }),
      t.d(e, "V", function () {
        return B;
      }),
      t.d(e, "r", function () {
        return Q;
      }),
      t.d(e, "W", function () {
        return z;
      }),
      t.d(e, "f", function () {
        return Y;
      }),
      t.d(e, "y", function () {
        return X;
      }),
      t.d(e, "t", function () {
        return $;
      }),
      t.d(e, "E", function () {
        return Z;
      }),
      t.d(e, "C", function () {
        return J;
      }),
      t.d(e, "s", function () {
        return K;
      }),
      t.d(e, "cb", function () {
        return V;
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
        return de;
      }),
      t.d(e, "o", function () {
        return fe;
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
      d = (e = !1) =>
        c(i.a.EnsureLoggedIntoFirebase, {
          forceLogin: e
        }),
      f = () => c(i.a.GetLicense),
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
      g = (e) =>
        c(i.a.RemoveFavourites, {
          item: e
        }),
      _ = () => c(i.a.GetUserFavourites),
      y = () => c(i.a.MergeFirebaseFavourites),
      v = (e) =>
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
      G = () => c(i.a.DisconnectCompanionDoc),
      E = () => c(i.a.GetHandwritingCount),
      F = (e) =>
        c(i.a.SetHandwritingCount, {
          count: e
        }),
      P = (e) =>
        c(i.a.UpdateGoogleSheetEquations, {
          spreadsheetId: e
        }),
      D = () => c(i.a.ShowHandwritingExceededReminder),
      A = () => c(i.a.ShowPredictionReminder),
      L = () => c(i.a.ShowReviewReminder),
      M = (e) =>
        c(i.a.SendAnalyticsScreen, {
          screenName: e
        }),
      R = (e, t = 0, r) =>
        c(i.a.SendAnalyticsEvent, {
          category: e,
          value: t,
          customParams: r
        }),
      C = () => c(i.a.CaptureScreenshot),
      k = (e) =>
        c(i.a.ScanMathpixOcr, {
          base64: e
        }),
      q = (e, t) =>
        c(i.a.UploadImageToProxy, {
          url: e,
          base64: t
        }),
      I = () => c(i.a.DismissReviewReminder),
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
      N = () => c(i.a.InjectWebPageToolbar),
      H = (e) =>
        c(i.a.MathDiscovered, {
          value: e
        }),
      W = () => c(i.a.IsDiscoverabilityFirstTime),
      B = (e) =>
        c(i.a.SetDiscoverabilityEnabled, {
          value: e
        }),
      Q = () => c(i.a.GetMathDiscoverability),
      z = (e) =>
        c(i.a.DiscoverabilitySessionDisable, {
          disabled: e
        }),
      Y = (e) =>
        c(i.a.DismissGSuiteMathDiscover, {
          options: e
        }),
      X = () => c(i.a.HasGSuiteDiscoverOverlayShown),
      $ = () => c(i.a.GetPlatformOs),
      Z = () => c(i.a.IsLockedForms),
      J = (e, t, r, n) =>
        c(i.a.InsertImageGoogleApi, {
          url: e,
          width: t,
          height: r,
          additionalOptions: n
        }),
      K = () => c(i.a.GetMolecularFilter),
      V = (e = null, t = {}) =>
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
      de = (function () {
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
      fe = () => c(i.a.GetFormsApiPermission),
      pe = (e) =>
        c(i.a.CreateFormsQuestions, {
          questions: e
        }),
      he = (e) =>
        c(i.a.GenerateMathQuestions, {
          options: e
        }),
      me = () => c(i.a.ShowFormsGeneratorUi),
      ge = (e, t, r, n) => {
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
  412: function (e, t, r) {
    "use strict";
    r.r(t);
    var t = r(3),
      t = r.n(t),
      n = r(1),
      o = r.n(n),
      n = r(86),
      i = r.n(n),
      a = r(4),
      u = r(10),
      n = r(21),
      c = r.n(n),
      s = () => {
        const e = window.location.pathname.match(/\/d\/(.*?)(?:\/.*?|$)/),
          t = c()(e, 2),
          r = t[1];
        return r;
      },
      l = r(69);
    window.equatioCoreChunkLoading = "chrome";
    let d = !(window.equatioCoreBaseUrl = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/");
    const f = () => {
        Object(u.b)() && Object(u.c)() === u.a.GoogleSheets && Object(a.gb)(s());
      },
      p = () => {
        if (document.querySelector(".equatio-onboarding-step-2"))
          window.postMessage("EQUATIO_ONBOARDING_NEXT_STEP", window.location.origin);
        else if (d) {
          const e = document.querySelector(".equatio-toolbar-wrapper");
          e &&
            ((e.style.display = "block" === e.style.display ? "none" : "block"),
            "block" === e.style.display
              ? (Object(a.R)("ApplicationOpened", "Application", "NA"), Object(l.a)(), f())
              : Object(a.R)("ApplicationClosed", "Application", "NA"));
        } else (d = !0), i()(`chrome-extension://${chrome.runtime.id}/content/docsMessagingApi.js`), Object(a.z)(), f();
      };
    chrome.runtime.onMessage.addListener(({ action: e }) => {
      "load" === e && p();
    }),
      t()(
        o.a.mark(function e() {
          return o.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (Object(u.c)() === u.a.GoogleDocs) return (e.next = 3), Object(a.u)();
                  e.next = 9;
                  break;

                case 3:
                  if (e.sent) return (window.location.hash = "equatio-onboarding"), p(), (e.next = 9), Object(a.Z)(!1);
                  e.next = 9;
                  break;

                case 9:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )();
  },
  46: function (G, e, t) {
    var E = t(23).default;
    function F() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (G.exports = F =
        function () {
          return a;
        }),
        (G.exports.__esModule = !0),
        (G.exports.default = G.exports);
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
        (t = t && t.prototype instanceof f ? t : f), (t = Object.create(t.prototype)), (n = new S(n || []));
        return (
          o(t, "_invoke", {
            value: v(e, r, n)
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
      var d = {};
      function f() {}
      function p() {}
      function h() {}
      var t = {},
        m =
          (u(t, n, function () {
            return this;
          }),
          Object.getPrototypeOf),
        m = m && m(m(O([]))),
        g = (m && m !== e && c.call(m, n) && (t = m), (h.prototype = f.prototype = Object.create(t)));
      function _(e) {
        ["next", "throw", "return"].forEach(function (t) {
          u(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function y(i, a) {
        function u(e, t, r, n) {
          var o,
            e = l(i[e], i, t);
          if ("throw" !== e.type)
            return (t = (o = e.arg).value) && "object" == E(t) && c.call(t, "__await")
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
            return j();
          }
          for (i.method = e, i.arg = t; ; ) {
            var r = i.delegate;
            if (r) {
              r = b(r, i);
              if (r) {
                if (r === d) continue;
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
              if (((a = i.done ? "completed" : "suspendedYield"), r.arg === d)) continue;
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
            d)
          : "throw" === (r = l(n, e.iterator, t.arg)).type
          ? ((t.method = "throw"), (t.arg = r.arg), (t.delegate = null), d)
          : (n = r.arg)
          ? n.done
            ? ((t[e.resultName] = n.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              d)
            : n
          : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), d);
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
        o(g, "constructor", {
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
            (e.prototype = Object.create(g)),
            e
          );
        }),
        (a.awrap = function (e) {
          return {
            __await: e
          };
        }),
        _(y.prototype),
        u(y.prototype, r, function () {
          return this;
        }),
        (a.AsyncIterator = y),
        (a.async = function (e, t, r, n, o) {
          void 0 === o && (o = Promise);
          var i = new y(s(e, t, r, n), o);
          return a.isGeneratorFunction(t)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        _(g),
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
            return (i.type = e), (i.arg = t), o ? ((this.method = "next"), (this.next = o.finallyLoc), d) : this.complete(i);
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              d
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), x(r), d;
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
              d
            );
          }
        }),
        a
      );
    }
    (G.exports = F), (G.exports.__esModule = !0), (G.exports.default = G.exports);
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
  69: function (e, t, r) {
    "use strict";
    t.a = () => {
      const e = document.querySelector("#equatio-toolbar-shadow-host");
      if (e && e.shadowRoot) {
        const t = e.shadowRoot.querySelector(".equatio-toolbar-button");
        t &&
          t.focus &&
          setTimeout(() => {
            document.activeElement !== e && t.focus();
          }, 50);
      }
    };
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
  86: function (e, t) {
    function o(e, t, r) {
      t(new URIError(r.target.src + " could not be loaded"), r);
    }
    function i(e, t, r) {
      t(null, {
        uri: e,
        event: r
      });
    }
    e.exports = function (e, t) {
      if (!e) throw "missing uri";
      var r = document.head || document.head.getElementsByTagName("head")[0],
        n = document.createElement("script");
      (n.type = "text/javascript"),
        "function" == typeof t && ((n.onerror = o.bind(null, e, t)), (n.onload = i.bind(null, e, t))),
        r.appendChild(n),
        (n.src = e);
    };
  }
});
