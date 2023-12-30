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
    o((o.s = 413));
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
  102: function (e, t, n) {
    "use strict";
    var r,
      o,
      c = {},
      i = function () {
        return (r = void 0 === r ? Boolean(window && document && document.all && !window.atob) : r);
      },
      a =
        ((o = {}),
        function (e) {
          if (void 0 === o[e]) {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            o[e] = t;
          }
          return o[e];
        });
    function l(e, t) {
      for (var r = [], n = {}, o = 0; o < e.length; o++) {
        var i = e[o],
          a = t.base ? i[0] + t.base : i[0],
          i = {
            css: i[1],
            media: i[2],
            sourceMap: i[3]
          };
        n[a]
          ? n[a].parts.push(i)
          : r.push(
              (n[a] = {
                id: a,
                parts: [i]
              })
            );
      }
      return r;
    }
    function d(e, t) {
      for (var r = 0; r < e.length; r++) {
        var n = e[r],
          o = c[n.id],
          i = 0;
        if (o) {
          for (o.refs++; i < o.parts.length; i++) o.parts[i](n.parts[i]);
          for (; i < n.parts.length; i++) o.parts.push(y(n.parts[i], t));
        } else {
          for (var a = []; i < n.parts.length; i++) a.push(y(n.parts[i], t));
          c[n.id] = {
            id: n.id,
            refs: 1,
            parts: a
          };
        }
      }
    }
    function u(t) {
      var r = document.createElement("style");
      if (
        (void 0 === t.attributes.nonce && (e = n.nc) && (t.attributes.nonce = e),
        Object.keys(t.attributes).forEach(function (e) {
          r.setAttribute(e, t.attributes[e]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(r);
      else {
        var e = a(t.insert || "head");
        if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        e.appendChild(r);
      }
      return r;
    }
    function s(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
    }
    f = [];
    var f,
      p = function (e, t) {
        return (f[e] = t), f.filter(Boolean).join("\n");
      };
    function h(e, t, r, n) {
      var r = r ? "" : n.css;
      e.styleSheet
        ? (e.styleSheet.cssText = p(t, r))
        : ((n = document.createTextNode(r)),
          (r = e.childNodes)[t] && e.removeChild(r[t]),
          r.length ? e.insertBefore(n, r[t]) : e.appendChild(n));
    }
    function m(e, t, r) {
      var n = r.css,
        o = r.media,
        r = r.sourceMap;
      if (
        (o && e.setAttribute("media", o),
        r &&
          btoa &&
          (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = n;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(n));
      }
    }
    var g = null,
      v = 0;
    function y(t, e) {
      var r, n, o, i;
      return (
        (i = e.singleton
          ? ((r = v++), (n = g = g || u(e)), (o = h.bind(null, n, r, !1)), h.bind(null, n, r, !0))
          : ((n = u(e)),
            (o = m.bind(null, n, e)),
            function () {
              s(n);
            })),
        o(t),
        function (e) {
          e ? (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) || o((t = e)) : i();
        }
      );
    }
    e.exports = function (e, u) {
      ((u = u || {}).attributes = "object" == typeof u.attributes ? u.attributes : {}),
        u.singleton || "boolean" == typeof u.singleton || (u.singleton = i());
      var s = l(e, u);
      return (
        d(s, u),
        function (e) {
          for (var t = [], r = 0; r < s.length; r++) {
            var n = s[r],
              n = c[n.id];
            n && (n.refs--, t.push(n));
          }
          e && d(l(e, u), u);
          for (var o = 0; o < t.length; o++) {
            var i = t[o];
            if (0 === i.refs) {
              for (var a = 0; a < i.parts.length; a++) i.parts[a]();
              delete c[i.id];
            }
          }
        }
      );
    };
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
  35: function (e, t) {
    function n(e, t) {
      var r = e[1] || "",
        n = e[3];
      return n
        ? (t && "function" == typeof btoa
            ? ((e = o(n)),
              (t = n.sources.map(function (e) {
                return "/*# sourceURL=" + n.sourceRoot + e + " */";
              })),
              [r].concat(t).concat([e]))
            : [r]
          ).join("\n")
        : r;
    }
    function o(e) {
      return (
        "/*# " +
        ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) +
        " */"
      );
    }
    e.exports = function (r) {
      var a = [];
      return (
        (a.toString = function () {
          return this.map(function (e) {
            var t = n(e, r);
            return e[2] ? "@media " + e[2] + "{" + t + "}" : t;
          }).join("");
        }),
        (a.i = function (e, t) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var r = {}, n = 0; n < this.length; n++) {
            var o = this[n][0];
            "number" == typeof o && (r[o] = !0);
          }
          for (n = 0; n < e.length; n++) {
            var i = e[n];
            ("number" == typeof i[0] && r[i[0]]) || (t && !i[2] ? (i[2] = t) : t && (i[2] = "(" + i[2] + ") and (" + t + ")"), a.push(i));
          }
        }),
        a
      );
    };
  },
  396: function (e, t, r) {
    e.exports = r.p + "assets/equatioicon16.png";
  },
  397: function (e, t, r) {
    e.exports = r.p + "assets/equatioicon32.png";
  },
  398: function (e, t, r) {
    e.exports = r.p + "assets/equatioicon48.png";
  },
  399: function (e, t, r) {
    e.exports = r.p + "assets/equatioicon128.png";
  },
  4: function (q, e, t) {
    "use strict";
    t.d(e, "F", function () {
      return c;
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
      t.d(e, "gb", function () {
        return h;
      }),
      t.d(e, "a", function () {
        return m;
      }),
      t.d(e, "O", function () {
        return g;
      }),
      t.d(e, "v", function () {
        return v;
      }),
      t.d(e, "I", function () {
        return y;
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
      t.d(e, "X", function () {
        return x;
      }),
      t.d(e, "Y", function () {
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
        return M;
      }),
      t.d(e, "W", function () {
        return P;
      }),
      t.d(e, "fb", function () {
        return C;
      }),
      t.d(e, "ab", function () {
        return L;
      }),
      t.d(e, "cb", function () {
        return F;
      }),
      t.d(e, "db", function () {
        return G;
      }),
      t.d(e, "R", function () {
        return A;
      }),
      t.d(e, "Q", function () {
        return R;
      }),
      t.d(e, "b", function () {
        return T;
      }),
      t.d(e, "P", function () {
        return D;
      }),
      t.d(e, "hb", function () {
        return I;
      }),
      t.d(e, "g", function () {
        return k;
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
      t.d(e, "U", function () {
        return B;
      }),
      t.d(e, "r", function () {
        return Q;
      }),
      t.d(e, "V", function () {
        return z;
      }),
      t.d(e, "f", function () {
        return K;
      }),
      t.d(e, "y", function () {
        return Y;
      }),
      t.d(e, "t", function () {
        return J;
      }),
      t.d(e, "E", function () {
        return X;
      }),
      t.d(e, "C", function () {
        return $;
      }),
      t.d(e, "s", function () {
        return V;
      }),
      t.d(e, "bb", function () {
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
        return se;
      }),
      t.d(e, "S", function () {
        return ce;
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
      l = () => s(i.a.InjectDocsRequirements),
      d = (e = !1) =>
        s(i.a.EnsureLoggedIntoFirebase, {
          forceLogin: e
        }),
      f = () => s(i.a.GetLicense),
      p = () => s(i.a.GetUserSettings),
      h = (e, t, r) =>
        s(i.a.UpdateUserSettings, {
          options: e,
          profile: t,
          customOptions: r
        }),
      m = (e) =>
        s(i.a.AddFavourites, {
          items: e
        }),
      g = (e) =>
        s(i.a.RemoveFavourites, {
          item: e
        }),
      v = () => s(i.a.GetUserFavourites),
      y = () => s(i.a.MergeFirebaseFavourites),
      _ = (e) =>
        s(i.a.EnterProductCode, {
          code: e
        }),
      b = (e, t) =>
        s(i.a.OpenGoogleFormsPicker, {
          url: e,
          picker: t
        }),
      w = (e) =>
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
      O = () => s(i.a.GetShouldShowEquatioOnFirstRun),
      j = (e, t = null) =>
        s(i.a.RegisterCompanionAppTarget, {
          platform: e,
          hostname: t
        }),
      E = () => s(i.a.DisconnectCompanionDoc),
      M = () => s(i.a.GetHandwritingCount),
      P = (e) =>
        s(i.a.SetHandwritingCount, {
          count: e
        }),
      C = (e) =>
        s(i.a.UpdateGoogleSheetEquations, {
          spreadsheetId: e
        }),
      L = () => s(i.a.ShowHandwritingExceededReminder),
      F = () => s(i.a.ShowPredictionReminder),
      G = () => s(i.a.ShowReviewReminder),
      A = (e) =>
        s(i.a.SendAnalyticsScreen, {
          screenName: e
        }),
      R = (e, t = 0, r) =>
        s(i.a.SendAnalyticsEvent, {
          category: e,
          value: t,
          customParams: r
        }),
      T = () => s(i.a.CaptureScreenshot),
      D = (e) =>
        s(i.a.ScanMathpixOcr, {
          base64: e
        }),
      I = (e, t) =>
        s(i.a.UploadImageToProxy, {
          url: e,
          base64: t
        }),
      k = () => s(i.a.DismissReviewReminder),
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
      N = () => s(i.a.InjectWebPageToolbar),
      H = (e) =>
        s(i.a.MathDiscovered, {
          value: e
        }),
      W = () => s(i.a.IsDiscoverabilityFirstTime),
      B = (e) =>
        s(i.a.SetDiscoverabilityEnabled, {
          value: e
        }),
      Q = () => s(i.a.GetMathDiscoverability),
      z = (e) =>
        s(i.a.DiscoverabilitySessionDisable, {
          disabled: e
        }),
      K = (e) =>
        s(i.a.DismissGSuiteMathDiscover, {
          options: e
        }),
      Y = () => s(i.a.HasGSuiteDiscoverOverlayShown),
      J = () => s(i.a.GetPlatformOs),
      X = () => s(i.a.IsLockedForms),
      $ = (e, t, r, n) =>
        s(i.a.InsertImageGoogleApi, {
          url: e,
          width: t,
          height: r,
          additionalOptions: n
        }),
      V = () => s(i.a.GetMolecularFilter),
      Z = (e = null, t = {}) =>
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
      le = () => s(i.a.FireDatadeskUpdate),
      de = (function () {
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
      fe = () => s(i.a.GetFormsApiPermission),
      pe = (e) =>
        s(i.a.CreateFormsQuestions, {
          questions: e
        }),
      he = (e) =>
        s(i.a.GenerateMathQuestions, {
          options: e
        }),
      me = () => s(i.a.ShowFormsGeneratorUi);
  },
  400: function (e, t, r) {
    var n = r(401),
      o = ("string" == typeof n && (n = [[e.i, n, ""]]), {});
    (o.insert = "head"), (o.singleton = !1), r(102)(n, o);
    n.locals && (e.exports = n.locals);
  },
  401: function (e, t, r) {
    (e.exports = r(35)(void 0)).push([
      e.i,
      ".equatio-toolbar-wrapper{font-family:'Roboto', 'Open Sans', Arial, sans-serif !important;color:#000}.tippy-popper{font-family:'Roboto', 'Open Sans', Arial, sans-serif !important;color:#000;font-size:1em}\n",
      ""
    ]);
  },
  413: function (e, t, r) {
    "use strict";
    r.r(t);
    var t = r(3),
      i = r.n(t),
      t = r(21),
      d = r.n(t),
      t = r(1),
      a = r.n(t),
      t = r(85),
      u = r.n(t),
      s = r(4),
      c = r(69),
      l = (r(396), r(397), r(398), r(399), r(400), r(17)),
      n = () => {
        window.equatioCoreChunkLoading = "chrome";
        let t = !(window.equatioCoreBaseUrl = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/"),
          r = !1;
        Object(s.K)(Object(l.c)(window.location.hostname)).then((e) => {
          e && (r = !0);
        });
        const n = () => {
            const e = document.querySelector(".equatio-toolbar-wrapper");
            e && (e.style.display = "none");
          },
          o = () => {
            if (t) {
              const e = document.querySelector(".equatio-toolbar-wrapper");
              e && ((e.style.display = "block" === e.style.display ? "none" : "block"), "block" === e.style.display) && Object(c.a)();
            } else (t = !0), u()(`chrome-extension://${chrome.runtime.id}/content/docsMessagingApi.js`), Object(s.z)();
          };
        chrome.runtime.onMessage.addListener(({ action: e }) => {
          "load" === e
            ? r
              ? o()
              : Object(s.K)(Object(l.c)(window.location.hostname)).then((e) => {
                  e && ((r = !0), o());
                })
            : "EQUATIO_CHANGE_USER" === e &&
              Object(s.K)(Object(l.c)(window.location.hostname)).then((e) => {
                (r = e), !t && e && Object(s.F)(), e || n();
              });
        });
      };
    const f = (e, t = "") => {
      let r = e;
      e.includes(";base64,") && ((e = e.split(";base64,")), (e = d()(e, 2)), (r = e[1]));
      const n = 1024,
        o = atob(r),
        i = o.length,
        a = Math.ceil(i / n),
        u = new Array(a);
      for (let e = 0; e < a; ++e) {
        const s = e * n,
          c = Math.min(s + n, i),
          l = new Array(c - s);
        for (let e = s, t = 0; e < c; ++t, ++e) l[t] = o[e].charCodeAt(0);
        u[e] = new Uint8Array(l);
      }
      return new Blob(u, {
        type: t
      });
    };
    if (window !== top) {
      const o = () => {
        const e = Object(l.c)(window.location.hostname);
        document.querySelector("#MainApp") &&
          e &&
          (chrome.runtime.sendMessage({
            action: "is_office_app",
            value: !0,
            appName: e
          }),
          window.addEventListener("beforeunload", () => {
            chrome.runtime.sendMessage({
              action: "is_office_app",
              value: !1
            });
          }),
          n());
      };
      window.addEventListener("load", o, !1);
    } else
      chrome.runtime.onMessage.addListener(({ action: e, content: r, isText: t }, n, o) => {
        if ("office_add_to_clipboard" === e)
          return (
            t
              ? navigator.clipboard
                  .writeText(r)
                  .then(() => o(!0))
                  .catch((e) => {
                    console.error("Clipboard Copy failed", e), o(!1);
                  })
              : i()(
                  a.a.mark(function e() {
                    var t;
                    return a.a.wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.prev = 0),
                                (t = f(r, "image/png")),
                                (e.next = 4),
                                navigator.clipboard.write([
                                  new ClipboardItem({
                                    [t.type]: t
                                  })
                                ])
                              );

                            case 4:
                              o(!0), (e.next = 11);
                              break;

                            case 7:
                              (e.prev = 7), (e.t0 = e.catch(0)), console.error("Clipboard Copy failed", e.t0), o(!1);

                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 7]]
                    );
                  })
                )(),
            !0
          );
      });
  },
  46: function (E, e, t) {
    var M = t(23).default;
    function P() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (E.exports = P =
        function () {
          return a;
        }),
        (E.exports.__esModule = !0),
        (E.exports.default = E.exports);
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
        (t = t && t.prototype instanceof f ? t : f), (t = Object.create(t.prototype)), (n = new S(n || []));
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
      a.wrap = c;
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
        g = (m && m !== e && s.call(m, n) && (t = m), (h.prototype = f.prototype = Object.create(t)));
      function v(e) {
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
            return (t = (o = e.arg).value) && "object" == M(t) && s.call(t, "__await")
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
                for (; ++r < t.length; ) if (s.call(t, r)) return (e.value = t[r]), (e.done = !1), e;
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
        v(y.prototype),
        u(y.prototype, r, function () {
          return this;
        }),
        (a.AsyncIterator = y),
        (a.async = function (e, t, r, n, o) {
          void 0 === o && (o = Promise);
          var i = new y(c(e, t, r, n), o);
          return a.isGeneratorFunction(t)
            ? i
            : i.next().then(function (e) {
                return e.done ? e.value : i.next();
              });
        }),
        v(g),
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
    (E.exports = P), (E.exports.__esModule = !0), (E.exports.default = E.exports);
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
