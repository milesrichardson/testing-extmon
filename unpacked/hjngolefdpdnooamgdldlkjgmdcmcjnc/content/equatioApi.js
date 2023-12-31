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
    o((o.s = 406));
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
    function u(e, t, r, n, o, i, a) {
      try {
        var c = e[i](a),
          u = c.value;
      } catch (e) {
        return void r(e);
      }
      c.done ? t(u) : Promise.resolve(u).then(n, o);
    }
    function r(c) {
      return function () {
        var e = this,
          a = arguments;
        return new Promise(function (t, r) {
          var n = c.apply(e, a);
          function o(e) {
            u(n, t, r, o, i, "next", e);
          }
          function i(e) {
            u(n, t, r, o, i, "throw", e);
          }
          o(void 0);
        });
      };
    }
    (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  4: function (C, e, t) {
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
        return p;
      }),
      t.d(e, "w", function () {
        return f;
      }),
      t.d(e, "hb", function () {
        return h;
      }),
      t.d(e, "a", function () {
        return _;
      }),
      t.d(e, "O", function () {
        return m;
      }),
      t.d(e, "v", function () {
        return g;
      }),
      t.d(e, "I", function () {
        return v;
      }),
      t.d(e, "i", function () {
        return y;
      }),
      t.d(e, "L", function () {
        return w;
      }),
      t.d(e, "x", function () {
        return b;
      }),
      t.d(e, "Y", function () {
        return S;
      }),
      t.d(e, "Z", function () {
        return E;
      }),
      t.d(e, "u", function () {
        return O;
      }),
      t.d(e, "N", function () {
        return x;
      }),
      t.d(e, "e", function () {
        return A;
      }),
      t.d(e, "p", function () {
        return I;
      }),
      t.d(e, "X", function () {
        return P;
      }),
      t.d(e, "gb", function () {
        return L;
      }),
      t.d(e, "bb", function () {
        return j;
      }),
      t.d(e, "db", function () {
        return M;
      }),
      t.d(e, "eb", function () {
        return T;
      }),
      t.d(e, "S", function () {
        return G;
      }),
      t.d(e, "Q", function () {
        return F;
      }),
      t.d(e, "b", function () {
        return R;
      }),
      t.d(e, "P", function () {
        return D;
      }),
      t.d(e, "ib", function () {
        return k;
      }),
      t.d(e, "g", function () {
        return q;
      }),
      t.d(e, "M", function () {
        return U;
      }),
      t.d(e, "B", function () {
        return H;
      }),
      t.d(e, "G", function () {
        return N;
      }),
      t.d(e, "D", function () {
        return Q;
      }),
      t.d(e, "V", function () {
        return B;
      }),
      t.d(e, "r", function () {
        return W;
      }),
      t.d(e, "W", function () {
        return Y;
      }),
      t.d(e, "f", function () {
        return z;
      }),
      t.d(e, "y", function () {
        return V;
      }),
      t.d(e, "t", function () {
        return X;
      }),
      t.d(e, "E", function () {
        return J;
      }),
      t.d(e, "C", function () {
        return K;
      }),
      t.d(e, "s", function () {
        return Z;
      }),
      t.d(e, "cb", function () {
        return $;
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
        return ce;
      }),
      t.d(e, "A", function () {
        return ue;
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
        return pe;
      }),
      t.d(e, "c", function () {
        return fe;
      }),
      t.d(e, "l", function () {
        return he;
      }),
      t.d(e, "ab", function () {
        return _e;
      }),
      t.d(e, "R", function () {
        return me;
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
    function c(t) {
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
    const u = (o, e = {}) =>
        new Promise((r, n) => {
          chrome.runtime.sendMessage(
            "hjngolefdpdnooamgdldlkjgmdcmcjnc",
            c(
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
      s = () => u("load"),
      l = () => u(i.a.InjectDocsRequirements),
      d = (e = !1) =>
        u(i.a.EnsureLoggedIntoFirebase, {
          forceLogin: e
        }),
      p = () => u(i.a.GetLicense),
      f = () => u(i.a.GetUserSettings),
      h = (e, t, r) =>
        u(i.a.UpdateUserSettings, {
          options: e,
          profile: t,
          customOptions: r
        }),
      _ = (e) =>
        u(i.a.AddFavourites, {
          items: e
        }),
      m = (e) =>
        u(i.a.RemoveFavourites, {
          item: e
        }),
      g = () => u(i.a.GetUserFavourites),
      v = () => u(i.a.MergeFirebaseFavourites),
      y = (e) =>
        u(i.a.EnterProductCode, {
          code: e
        }),
      w = (e, t) =>
        u(i.a.OpenGoogleFormsPicker, {
          url: e,
          picker: t
        }),
      b = (e) =>
        u(i.a.GoogleFormsPickerLoaded, {
          location: e
        }),
      S = (e) =>
        u(i.a.SetProfileType, {
          type: e
        }),
      E = (e = !1) =>
        u(i.a.SetShowEquatioOnFirstRun, {
          value: e
        }),
      O = () => u(i.a.GetShouldShowEquatioOnFirstRun),
      x = (e, t = null) =>
        u(i.a.RegisterCompanionAppTarget, {
          platform: e,
          hostname: t
        }),
      A = () => u(i.a.DisconnectCompanionDoc),
      I = () => u(i.a.GetHandwritingCount),
      P = (e) =>
        u(i.a.SetHandwritingCount, {
          count: e
        }),
      L = (e) =>
        u(i.a.UpdateGoogleSheetEquations, {
          spreadsheetId: e
        }),
      j = () => u(i.a.ShowHandwritingExceededReminder),
      M = () => u(i.a.ShowPredictionReminder),
      T = () => u(i.a.ShowReviewReminder),
      G = (e) =>
        u(i.a.SendAnalyticsScreen, {
          screenName: e
        }),
      F = (e, t = 0, r) =>
        u(i.a.SendAnalyticsEvent, {
          category: e,
          value: t,
          customParams: r
        }),
      R = () => u(i.a.CaptureScreenshot),
      D = (e) =>
        u(i.a.ScanMathpixOcr, {
          base64: e
        }),
      k = (e, t) =>
        u(i.a.UploadImageToProxy, {
          url: e,
          base64: t
        }),
      q = () => u(i.a.DismissReviewReminder),
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
                      u(i.a.OpenMathspace, {
                        platformIntegrationId: t,
                        windowUrl: n
                      })
                    );

                  case 3:
                    (r = e.sent),
                      (n = () => {
                        u(i.a.MathspaceTabClosed, {
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
      H = () => u(i.a.InjectWebPageToolbar),
      N = (e) =>
        u(i.a.MathDiscovered, {
          value: e
        }),
      Q = () => u(i.a.IsDiscoverabilityFirstTime),
      B = (e) =>
        u(i.a.SetDiscoverabilityEnabled, {
          value: e
        }),
      W = () => u(i.a.GetMathDiscoverability),
      Y = (e) =>
        u(i.a.DiscoverabilitySessionDisable, {
          disabled: e
        }),
      z = (e) =>
        u(i.a.DismissGSuiteMathDiscover, {
          options: e
        }),
      V = () => u(i.a.HasGSuiteDiscoverOverlayShown),
      X = () => u(i.a.GetPlatformOs),
      J = () => u(i.a.IsLockedForms),
      K = (e, t, r, n) =>
        u(i.a.InsertImageGoogleApi, {
          url: e,
          width: t,
          height: r,
          additionalOptions: n
        }),
      Z = () => u(i.a.GetMolecularFilter),
      $ = (e = null, t = {}) =>
        u(i.a.ShowInfoPopup, {
          popupType: e,
          options: t
        }),
      ee = (e, t = !1) =>
        u(i.a.OfficeAddToClipboard, {
          content: e,
          isText: t
        }),
      te = (e) =>
        u(i.a.ExtractLatexFromUrl, {
          url: e
        }),
      re = (e) =>
        u(i.a.OfficeCanUseApp, {
          appName: e
        }),
      ne = (function () {
        var e = r()(
          o.a.mark(function e() {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", u(i.a.SwitchAccount));

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
      oe = () => u(i.a.GetDisplayEmail),
      ie = (e, t) =>
        u(i.a.SetCanShowClipboardPopup, {
          value: e,
          copyBtn: t
        }),
      ae = (e) =>
        u(i.a.GetCanShowClipboardPopup, {
          copyBtn: e
        }),
      ce = (e, t) =>
        u(i.a.CreateSpeechServerData, {
          text: e,
          options: t
        }),
      ue = (e = !1) =>
        u(i.a.InjectHtmlEditorApi, {
          fromToolbar: e
        }),
      se = (e, t, r = !1, n = null) =>
        u(i.a.HtmlEditorApiAction, {
          command: e,
          value: t,
          fromEditor: r,
          targetFrame: n
        }),
      le = () => u(i.a.FireDatadeskUpdate),
      de = (function () {
        var t = r()(
          o.a.mark(function e(t) {
            return o.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      u(i.a.MathSolverFetch, {
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
      pe = () => u(i.a.GetFormsApiPermission),
      fe = (e) =>
        u(i.a.CreateFormsQuestions, {
          questions: e
        }),
      he = (e) =>
        u(i.a.GenerateMathQuestions, {
          options: e
        }),
      _e = () => u(i.a.ShowFormsGeneratorUi),
      me = (e, t, r, n) => {
        let o = "";
        return (
          window && window.location && (o = window.location.href),
          u(i.a.SendAnalyticsEventGa4, {
            name: e,
            category: t,
            feature: r,
            eventProps: n,
            url: o
          })
        );
      };
  },
  406: function (e, t, r) {
    "use strict";
    r.r(t);
    var t = r(3),
      n = r.n(t),
      t = r(1),
      o = r.n(t),
      i = r(4),
      a = r(69);
    const c = (function () {
      var e = n()(
        o.a.mark(function e() {
          var t;
          return o.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), Object(i.q)();

                  case 3:
                    if (!(t = e.sent) || 0 < t.daysleft) return e.abrupt("return");
                    e.next = 6;
                    break;

                  case 6:
                    chrome.storage.sync.get("courseraPopupSeen", ({ courseraPopupSeen: e }) => {
                      chrome.runtime.lastError ||
                        e ||
                        (Object(i.cb)("partner"),
                        chrome.storage.sync.set({
                          courseraPopupSeen: !0
                        }));
                    }),
                      (e.next = 11);
                    break;

                  case 9:
                    (e.prev = 9), (e.t0 = e.catch(0));

                  case 11:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 9]]
          );
        })
      );
      return function () {
        return e.apply(this, arguments);
      };
    })();
    let u;
    const s = () => {
        if (!u) {
          const t = (e) => {
              if (e && e.style) {
                const t = "block" === e.style.display;
                window.postMessage(
                  {
                    action: "EQUATIO_CHROME_API_TOOLBAR_VISIBILITY",
                    visible: t
                  },
                  window.location.origin
                );
              }
            },
            e = new MutationObserver((e) => {
              e.forEach((e) => {
                t(e.target);
              });
            }),
            r = document.querySelector(".equatio-toolbar-wrapper");
          r &&
            (e.observe(r, {
              attributes: !0,
              attributeFilter: ["style"]
            }),
            t(r),
            (u = !0));
        }
      },
      l = (e) =>
        e && e.closest
          ? !!e.closest(".equatio-toolbar-wrapper")
          : !(!document.activeElement || !document.activeElement.closest || !document.activeElement.closest(".equatio-toolbar-wrapper"));
    let d, p;
    const f = () => {
        p && clearTimeout(p),
          (p = setTimeout(() => {
            (d = l()),
              window.postMessage(
                {
                  action: "EQUATIO_CHROME_API_FOCUS_CHANGE",
                  focused: d
                },
                window.location.origin
              );
          }, 20));
      },
      h = () => {
        window.addEventListener("message", (e) => {
          const t = e.data;
          "EQUATIO_CHROME_API_IFRAME_FOCUS_CHANGE" === t.action && f();
        });
      };
    let _ = !1;
    const m = () => {
      if (!_) {
        const e = document.querySelector(".equatio-toolbar-wrapper");
        e && (h(), e.addEventListener("focusin", () => f()), e.addEventListener("focusout", () => f()), (_ = !0));
      }
    };
    let g = !1;
    const v = (function () {
      var t = n()(
        o.a.mark(function e(t) {
          var r, n;
          return o.a.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (g) return e.abrupt("return");
                    e.next = 2;
                    break;

                  case 2:
                    (g = !0),
                      (r = document.querySelector(".equatio-toolbar-wrapper"))
                        ? ((n = "block" === r.style.display ? "none" : "block"),
                          "boolean" == typeof t && (n = t ? "block" : "none"),
                          (r.style.display = n),
                          m(),
                          "block" === r.style.display
                            ? (Object(i.R)("ApplicationOpened", "Application", "NA"), Object(a.a)())
                            : Object(i.R)("ApplicationClosed", "Application", "NA"),
                          s(),
                          (e.next = 27))
                        : (e.next = 13);
                    break;

                  case 13:
                    if (!1 !== t) return (e.prev = 14), (e.next = 17), Object(i.z)();
                    e.next = 27;
                    break;

                  case 17:
                    m(), c(), s(), (e.next = 27);
                    break;

                  case 22:
                    return (
                      (e.prev = 22),
                      (e.t0 = e.catch(14)),
                      window.postMessage(
                        {
                          action: "EQUATIO_LOAD_FAILED"
                        },
                        window.location.origin
                      ),
                      (g = !1),
                      e.abrupt("return")
                    );

                  case 27:
                    window.postMessage(
                      {
                        action: "EQUATIO_LOAD_SUCCESS"
                      },
                      window.location.origin
                    ),
                      (g = !1);

                  case 29:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[14, 22]]
          );
        })
      );
      return function (e) {
        return t.apply(this, arguments);
      };
    })();
    window.addEventListener("message", (e) => {
      if (e.source === window && e.data && e.data.action)
        switch (e.data.action) {
          case "EQUATIO_IS_INSTALLED":
            window.postMessage(
              {
                action: "EQUATIO_INSTALLED"
              },
              window.location.origin
            );
            break;

          case "EQUATIO_TOGGLE_TOOLBAR":
            window.postMessage(
              {
                action: "EQUATIO_CHROME_API_LOAD_WAIT"
              },
              window.location.origin
            ),
              v(e.data.show);
            break;

          case "EQUATIO_CHROME_API_GET_IS_PREMIUM": {
            window.postMessage(
              {
                action: "EQUATIO_CHROME_API_IS_PREMIUM_WAIT"
              },
              window.location.origin
            );
            const r = (e) =>
              window.postMessage({
                action: "EQUATIO_CHROME_API_IS_PREMIUM",
                isPremium: e
              });
            Object(i.q)()
              .then((e) => {
                let t = !1;
                e && 0 < e.daysleft && (t = !0), r(t);
              })
              .catch(() => r(!1));
            break;
          }

          case "EQUATIO_CHROME_API_SET_LOAD_CONFIG":
            window.equatioApiSettings = e.data.settings;
        }
    }),
      chrome.runtime.onMessage.addListener(({ action: e }) => {
        "load_equatio_api_toolbar" === e && v();
      });
  },
  46: function (A, e, t) {
    var I = t(23).default;
    function P() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (A.exports = P =
        function () {
          return a;
        }),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
      var a = {},
        e = Object.prototype,
        u = e.hasOwnProperty,
        o =
          Object.defineProperty ||
          function (e, t, r) {
            e[t] = r.value;
          },
        t = "function" == typeof Symbol ? Symbol : {},
        n = t.iterator || "@@iterator",
        r = t.asyncIterator || "@@asyncIterator",
        i = t.toStringTag || "@@toStringTag";
      function c(e, t, r) {
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
        c({}, "");
      } catch (e) {
        c = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function s(e, t, r, n) {
        (t = t && t.prototype instanceof p ? t : p), (t = Object.create(t.prototype)), (n = new E(n || []));
        return (
          o(t, "_invoke", {
            value: y(e, r, n)
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
      function p() {}
      function f() {}
      function h() {}
      var t = {},
        _ =
          (c(t, n, function () {
            return this;
          }),
          Object.getPrototypeOf),
        _ = _ && _(_(O([]))),
        m = (_ && _ !== e && u.call(_, n) && (t = _), (h.prototype = p.prototype = Object.create(t)));
      function g(e) {
        ["next", "throw", "return"].forEach(function (t) {
          c(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function v(i, a) {
        function c(e, t, r, n) {
          var o,
            e = l(i[e], i, t);
          if ("throw" !== e.type)
            return (t = (o = e.arg).value) && "object" == I(t) && u.call(t, "__await")
              ? a.resolve(t.__await).then(
                  function (e) {
                    c("next", e, r, n);
                  },
                  function (e) {
                    c("throw", e, r, n);
                  }
                )
              : a.resolve(t).then(
                  function (e) {
                    (o.value = e), r(o);
                  },
                  function (e) {
                    return c("throw", e, r, n);
                  }
                );
          n(e.arg);
        }
        var t;
        o(this, "_invoke", {
          value: function (r, n) {
            function e() {
              return new a(function (e, t) {
                c(r, n, e, t);
              });
            }
            return (t = t ? t.then(e, e) : e());
          }
        });
      }
      function y(n, o, i) {
        var a = "suspendedStart";
        return function (e, t) {
          if ("executing" === a) throw new Error("Generator is already running");
          if ("completed" === a) {
            if ("throw" === e) throw t;
            return x();
          }
          for (i.method = e, i.arg = t; ; ) {
            var r = i.delegate;
            if (r) {
              r = w(r, i);
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
      function w(e, t) {
        var r = t.method,
          n = e.iterator[r];
        return void 0 === n
          ? ((t.delegate = null),
            ("throw" === r && e.iterator.return && ((t.method = "return"), (t.arg = void 0), w(e, t), "throw" === t.method)) ||
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
      function b(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function E(e) {
        (this.tryEntries = [
          {
            tryLoc: "root"
          }
        ]),
          e.forEach(b, this),
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
                for (; ++r < t.length; ) if (u.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
                return (e.value = void 0), (e.done = !0), e;
              }).next = e)
            );
        }
        return {
          next: x
        };
      }
      function x() {
        return {
          value: void 0,
          done: !0
        };
      }
      return (
        (f.prototype = h),
        o(m, "constructor", {
          value: h,
          configurable: !0
        }),
        o(h, "constructor", {
          value: f,
          configurable: !0
        }),
        (f.displayName = c(h, i, "GeneratorFunction")),
        (a.isGeneratorFunction = function (e) {
          e = "function" == typeof e && e.constructor;
          return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name));
        }),
        (a.mark = function (e) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), c(e, i, "GeneratorFunction")),
            (e.prototype = Object.create(m)),
            e
          );
        }),
        (a.awrap = function (e) {
          return {
            __await: e
          };
        }),
        g(v.prototype),
        c(v.prototype, r, function () {
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
        g(m),
        c(m, i, "Generator"),
        c(m, n, function () {
          return this;
        }),
        c(m, "toString", function () {
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
        (E.prototype = {
          constructor: E,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(S),
              !e)
            )
              for (var t in this) "t" === t.charAt(0) && u.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
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
                var a = u.call(o, "catchLoc"),
                  c = u.call(o, "finallyLoc");
                if (a && c) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                } else if (a) {
                  if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                } else {
                  if (!c) throw new Error("try statement without catch or finally");
                  if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
              var n = this.tryEntries[r];
              if (n.tryLoc <= this.prev && u.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
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
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), S(r), d;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var r,
                n,
                o = this.tryEntries[t];
              if (o.tryLoc === e) return "throw" === (r = o.completion).type && ((n = r.arg), S(o)), n;
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
    (A.exports = P), (A.exports.__esModule = !0), (A.exports.default = A.exports);
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
  }
});
