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
    o((o.s = 403));
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
      LoginWithNYC: "equatio_login_with_nyc"
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
  19: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    }),
      r.d(t, "c", function () {
        return o;
      }),
      r.d(t, "b", function () {
        return i;
      });
    const n = {
        Insert: "INSERT_HTML_EDITOR",
        Extract: "EXTRACT_SELECTION_HTML_EDITOR",
        SetEditor: "SET_HTML_EDITOR"
      },
      o = (e, t) => {
        window.postMessage({
          type: "EQUATIO_HTML_EDITOR_API_RESPONSE",
          action: e,
          value: t
        });
      },
      i = (e, t, r) => {
        window.postMessage({
          type: "EQUATIO_HTML_EDITOR_API",
          action: e,
          value: t,
          targetEditor: r
        });
      };
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
  4: function (A, e, t) {
    "use strict";
    t.d(e, "F", function () {
      return s;
    }),
      t.d(e, "z", function () {
        return d;
      }),
      t.d(e, "h", function () {
        return l;
      }),
      t.d(e, "q", function () {
        return f;
      }),
      t.d(e, "w", function () {
        return p;
      }),
      t.d(e, "gb", function () {
        return h;
      }),
      t.d(e, "a", function () {
        return m;
      }),
      t.d(e, "O", function () {
        return _;
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
        return b;
      }),
      t.d(e, "x", function () {
        return w;
      }),
      t.d(e, "X", function () {
        return S;
      }),
      t.d(e, "Y", function () {
        return x;
      }),
      t.d(e, "u", function () {
        return E;
      }),
      t.d(e, "N", function () {
        return O;
      }),
      t.d(e, "e", function () {
        return j;
      }),
      t.d(e, "p", function () {
        return P;
      }),
      t.d(e, "W", function () {
        return L;
      }),
      t.d(e, "fb", function () {
        return T;
      }),
      t.d(e, "ab", function () {
        return F;
      }),
      t.d(e, "cb", function () {
        return G;
      }),
      t.d(e, "db", function () {
        return I;
      }),
      t.d(e, "R", function () {
        return D;
      }),
      t.d(e, "Q", function () {
        return M;
      }),
      t.d(e, "b", function () {
        return R;
      }),
      t.d(e, "P", function () {
        return C;
      }),
      t.d(e, "hb", function () {
        return k;
      }),
      t.d(e, "g", function () {
        return U;
      }),
      t.d(e, "M", function () {
        return q;
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
      t.d(e, "U", function () {
        return B;
      }),
      t.d(e, "r", function () {
        return W;
      }),
      t.d(e, "V", function () {
        return Y;
      }),
      t.d(e, "f", function () {
        return X;
      }),
      t.d(e, "y", function () {
        return z;
      }),
      t.d(e, "t", function () {
        return J;
      }),
      t.d(e, "E", function () {
        return K;
      }),
      t.d(e, "C", function () {
        return V;
      }),
      t.d(e, "s", function () {
        return Z;
      }),
      t.d(e, "bb", function () {
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
      t.d(e, "eb", function () {
        return ne;
      }),
      t.d(e, "n", function () {
        return oe;
      }),
      t.d(e, "T", function () {
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
      t.d(e, "S", function () {
        return se;
      }),
      t.d(e, "k", function () {
        return de;
      }),
      t.d(e, "H", function () {
        return le;
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
      t.d(e, "Z", function () {
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
      d = () => c(i.a.InjectDocsRequirements),
      l = (e = !1) =>
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
      _ = (e) =>
        c(i.a.RemoveFavourites, {
          item: e
        }),
      g = () => c(i.a.GetUserFavourites),
      v = () => c(i.a.MergeFirebaseFavourites),
      y = (e) =>
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
      S = (e) =>
        c(i.a.SetProfileType, {
          type: e
        }),
      x = (e = !1) =>
        c(i.a.SetShowEquatioOnFirstRun, {
          value: e
        }),
      E = () => c(i.a.GetShouldShowEquatioOnFirstRun),
      O = (e, t = null) =>
        c(i.a.RegisterCompanionAppTarget, {
          platform: e,
          hostname: t
        }),
      j = () => c(i.a.DisconnectCompanionDoc),
      P = () => c(i.a.GetHandwritingCount),
      L = (e) =>
        c(i.a.SetHandwritingCount, {
          count: e
        }),
      T = (e) =>
        c(i.a.UpdateGoogleSheetEquations, {
          spreadsheetId: e
        }),
      F = () => c(i.a.ShowHandwritingExceededReminder),
      G = () => c(i.a.ShowPredictionReminder),
      I = () => c(i.a.ShowReviewReminder),
      D = (e) =>
        c(i.a.SendAnalyticsScreen, {
          screenName: e
        }),
      M = (e, t = 0, r) =>
        c(i.a.SendAnalyticsEvent, {
          category: e,
          value: t,
          customParams: r
        }),
      R = () => c(i.a.CaptureScreenshot),
      C = (e) =>
        c(i.a.ScanMathpixOcr, {
          base64: e
        }),
      k = (e, t) =>
        c(i.a.UploadImageToProxy, {
          url: e,
          base64: t
        }),
      U = () => c(i.a.DismissReviewReminder),
      q = (function () {
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
      H = () => c(i.a.InjectWebPageToolbar),
      N = (e) =>
        c(i.a.MathDiscovered, {
          value: e
        }),
      Q = () => c(i.a.IsDiscoverabilityFirstTime),
      B = (e) =>
        c(i.a.SetDiscoverabilityEnabled, {
          value: e
        }),
      W = () => c(i.a.GetMathDiscoverability),
      Y = (e) =>
        c(i.a.DiscoverabilitySessionDisable, {
          disabled: e
        }),
      X = (e) =>
        c(i.a.DismissGSuiteMathDiscover, {
          options: e
        }),
      z = () => c(i.a.HasGSuiteDiscoverOverlayShown),
      J = () => c(i.a.GetPlatformOs),
      K = () => c(i.a.IsLockedForms),
      V = (e, t, r, n) =>
        c(i.a.InsertImageGoogleApi, {
          url: e,
          width: t,
          height: r,
          additionalOptions: n
        }),
      Z = () => c(i.a.GetMolecularFilter),
      $ = (e = null, t = {}) =>
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
      de = () => c(i.a.FireDatadeskUpdate),
      le = (function () {
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
      me = () => c(i.a.ShowFormsGeneratorUi);
  },
  403: function (e, t, r) {
    "use strict";
    r.r(t);
    var t = r(85),
      n = r.n(t),
      o = r(19),
      i = r(4),
      a = r(0);
    let u = null;
    const c = () => {
        window.addEventListener("message", (e) => {
          if (e.source === window && e.data && "EQUATIO_HTML_EDITOR_API_RESPONSE" === e.data.type) {
            const t = e.data,
              r = t.action,
              n = t.value;
            r === o.a.SetEditor && (u = n), Object(i.S)(r, n, !0);
          }
        }),
          window.addEventListener(
            "unload",
            () => {
              u && ((u = null), Object(i.S)(o.a.SetEditor, null, !0));
            },
            !0
          );
        const e = ({ action: e, command: t, value: r, fromEditor: n }) => {
          e !== a.a.HtmlEditorApiAction || n || Object(o.b)(t, r, u);
        };
        chrome.runtime.onMessage.addListener(e), n()(`chrome-extension://${chrome.runtime.id}/content/htmlEditorApi.js`);
      },
      s = ({ action: e, fromToolbar: t }) => {
        e === a.a.InjectHtmlEditorApi && t && (c(), chrome.runtime.onMessage.removeListener(s));
      };
    chrome.runtime.onMessage.addListener(s), Object(i.A)(!1);
  },
  46: function (j, e, t) {
    var P = t(23).default;
    function L() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (j.exports = L =
        function () {
          return a;
        }),
        (j.exports.__esModule = !0),
        (j.exports.default = j.exports);
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
        (t = t && t.prototype instanceof f ? t : f), (t = Object.create(t.prototype)), (n = new x(n || []));
        return (
          o(t, "_invoke", {
            value: y(e, r, n)
          }),
          t
        );
      }
      function d(e, t, r) {
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
      var l = {};
      function f() {}
      function p() {}
      function h() {}
      var t = {},
        m =
          (u(t, n, function () {
            return this;
          }),
          Object.getPrototypeOf),
        m = m && m(m(E([]))),
        _ = (m && m !== e && c.call(m, n) && (t = m), (h.prototype = f.prototype = Object.create(t)));
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
            e = d(i[e], i, t);
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
      function y(n, o, i) {
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
            r = d(n, o, i);
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
          : "throw" === (r = d(n, e.iterator, t.arg)).type
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
      function w(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
      }
      function S(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function x(e) {
        (this.tryEntries = [
          {
            tryLoc: "root"
          }
        ]),
          e.forEach(w, this),
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
                for (; ++r < t.length; ) if (c.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
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
        (p.prototype = h),
        o(_, "constructor", {
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
            (e.prototype = Object.create(_)),
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
        g(_),
        u(_, i, "Generator"),
        u(_, n, function () {
          return this;
        }),
        u(_, "toString", function () {
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
        (x.prototype = {
          constructor: x,
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
              if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), S(r), l;
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
    (j.exports = L), (j.exports.__esModule = !0), (j.exports.default = j.exports);
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
  85: function (e, t) {
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
