!(function (s) {
  function e(e) {
    for (var t, o, r = e[0], n = e[1], a = 0, i = []; a < r.length; a++)
      (o = r[a]), Object.prototype.hasOwnProperty.call(l, o) && l[o] && i.push(l[o][0]), (l[o] = 0);
    for (t in n) Object.prototype.hasOwnProperty.call(n, t) && (s[t] = n[t]);
    for (d && d(e); i.length; ) i.shift()();
  }
  var o = {},
    l = {
      12: 0
    };
  function u(e) {
    return c.p + "" + e + ".b2215ac3c45eaa93f881.js";
  }
  function c(e) {
    var t;
    return (
      o[e] ||
      ((t = o[e] =
        {
          i: e,
          l: !1,
          exports: {}
        }),
      s[e].call(t.exports, t, t.exports, c),
      (t.l = !0),
      t)
    ).exports;
  }
  (c.e = function (o) {
    var e,
      t = [],
      r = function (t) {
        const o = u(t);
        chrome.runtime.sendMessage(
          "hjngolefdpdnooamgdldlkjgmdcmcjnc",
          {
            action: "EQUATIO_WEBPACK_LOAD_DEPENDENCY",
            scriptPath: o
          },
          function () {
            chrome.runtime.lastError && console.error("Failed to load dependency", o);
            const e = l[t];
            0 !== e && (e && e[1](), (l[t] = void 0));
          }
        );
      },
      n = function (n) {
        var e,
          t = document.getElementsByTagName("head")[0],
          a = document.createElement("script"),
          i =
            ((a.charset = "utf-8"),
            (a.timeout = 120),
            c.nc && a.setAttribute("nonce", c.nc),
            (a.src = u(n)),
            0 !== a.src.indexOf(window.location.origin + "/") && (a.crossOrigin = "anonymous"),
            (e = function (e) {
              (a.onerror = a.onload = null), clearTimeout(i);
              var t,
                o,
                r = l[n];
              0 !== r &&
                (r &&
                  ((t = e && ("load" === e.type ? "missing" : e.type)),
                  (e = e && e.target && e.target.src),
                  ((o = new Error("Loading chunk " + n + " failed.\n(" + t + ": " + e + ")")).type = t),
                  (o.request = e),
                  r[1](o)),
                (l[n] = void 0));
            }),
            setTimeout(function () {
              e({
                type: "timeout",
                target: a
              });
            }, 12e4));
        (a.onerror = a.onload = e), t.appendChild(a);
      },
      a = l[o];
    return (
      0 !== a &&
        (a
          ? t.push(a[2])
          : ((e = new Promise(function (e, t) {
              a = l[o] = [e, t];
            })),
            t.push((a[2] = e)),
            ("chrome" === window.equatioCoreChunkLoading ? r : n)(o))),
      Promise.all(t)
    );
  }),
    (c.m = s),
    (c.c = o),
    (c.d = function (e, t, o) {
      c.o(e, t) ||
        Object.defineProperty(e, t, {
          enumerable: !0,
          get: o
        });
    }),
    (c.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
          value: !0
        });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var o = Object.create(null);
      if (
        (c.r(o),
        Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          c.d(
            o,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return o;
    }),
    (c.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return c.d(t, "a", t), t;
    }),
    (c.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (c.p = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/content/"),
    (c.oe = function (e) {
      throw (console.error(e), e);
    });
  var t = (r = window.equatioChromeJsonp = window.equatioChromeJsonp || []).push.bind(r);
  r.push = e;
  for (var r = r.slice(), n = 0; n < r.length; n++) e(r[n]);
  var d = t;
  c((c.s = 409));
})({
  0: function (e, t, o) {
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
  1: function (e, t, o) {
    o = o(46)();
    e.exports = o;
    try {
      regeneratorRuntime = o;
    } catch (e) {
      "object" == typeof globalThis ? (globalThis.regeneratorRuntime = o) : Function("r", "regeneratorRuntime = r")(o);
    }
  },
  10: function (e, t, o) {
    "use strict";
    o.d(t, "a", function () {
      return r;
    }),
      o.d(t, "d", function () {
        return a;
      }),
      o.d(t, "c", function () {
        return i;
      });
    const r = {
        GoogleDocs: "Google Docs",
        GoogleForms: "Google Forms",
        GoogleSlides: "Google Slides",
        GoogleDrawings: "Google Drawings",
        GoogleSheets: "Google Sheets"
      },
      n = {
        document: r.GoogleDocs,
        forms: r.GoogleForms,
        presentation: r.GoogleSlides,
        drawings: r.GoogleDrawings,
        spreadsheets: r.GoogleSheets
      },
      a = (e = window.location) => {
        const t = e.hostname,
          o = e.pathname;
        if ("docs.google.com" === t)
          return (
            0 <= o.indexOf("/forms/") &&
            (o.endsWith("/viewform") ||
              o.endsWith("/formResponse") ||
              o.endsWith("/prefill") ||
              o.endsWith("/startquiz") ||
              o.endsWith("/viewscore"))
          );
      },
      i = (e = window.location) => {
        const t = e.hostname,
          o = e.pathname;
        if ("docs.google.com" === t) {
          let e;
          const r = o.split("/").filter((e) => !!e);
          return (e = o.startsWith("/a/") ? r[2] : r[0]), n[e];
        }
      };
    t.b = () => -1 === window.location.href.indexOf("/document/");
  },
  102: function (e, t, r) {
    "use strict";
    var o,
      n,
      u = {},
      a = function () {
        return (o = void 0 === o ? Boolean(window && document && document.all && !window.atob) : o);
      },
      i =
        ((n = {}),
        function (e) {
          if (void 0 === n[e]) {
            var t = document.querySelector(e);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement)
              try {
                t = t.contentDocument.head;
              } catch (e) {
                t = null;
              }
            n[e] = t;
          }
          return n[e];
        });
    function c(e, t) {
      for (var o = [], r = {}, n = 0; n < e.length; n++) {
        var a = e[n],
          i = t.base ? a[0] + t.base : a[0],
          a = {
            css: a[1],
            media: a[2],
            sourceMap: a[3]
          };
        r[i]
          ? r[i].parts.push(a)
          : o.push(
              (r[i] = {
                id: i,
                parts: [a]
              })
            );
      }
      return o;
    }
    function d(e, t) {
      for (var o = 0; o < e.length; o++) {
        var r = e[o],
          n = u[r.id],
          a = 0;
        if (n) {
          for (n.refs++; a < n.parts.length; a++) n.parts[a](r.parts[a]);
          for (; a < r.parts.length; a++) n.parts.push(y(r.parts[a], t));
        } else {
          for (var i = []; a < r.parts.length; a++) i.push(y(r.parts[a], t));
          u[r.id] = {
            id: r.id,
            refs: 1,
            parts: i
          };
        }
      }
    }
    function s(t) {
      var o = document.createElement("style");
      if (
        (void 0 === t.attributes.nonce && (e = r.nc) && (t.attributes.nonce = e),
        Object.keys(t.attributes).forEach(function (e) {
          o.setAttribute(e, t.attributes[e]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(o);
      else {
        var e = i(t.insert || "head");
        if (!e) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        e.appendChild(o);
      }
      return o;
    }
    function l(e) {
      if (null === e.parentNode) return !1;
      e.parentNode.removeChild(e);
    }
    m = [];
    var m,
      p = function (e, t) {
        return (m[e] = t), m.filter(Boolean).join("\n");
      };
    function f(e, t, o, r) {
      var o = o ? "" : r.css;
      e.styleSheet
        ? (e.styleSheet.cssText = p(t, o))
        : ((r = document.createTextNode(o)),
          (o = e.childNodes)[t] && e.removeChild(o[t]),
          o.length ? e.insertBefore(r, o[t]) : e.appendChild(r));
    }
    function h(e, t, o) {
      var r = o.css,
        n = o.media,
        o = o.sourceMap;
      if (
        (n && e.setAttribute("media", n),
        o &&
          btoa &&
          (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
            " */"
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = r;
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(r));
      }
    }
    var b = null,
      g = 0;
    function y(t, e) {
      var o, r, n, a;
      return (
        (a = e.singleton
          ? ((o = g++), (r = b = b || s(e)), (n = f.bind(null, r, o, !1)), f.bind(null, r, o, !0))
          : ((r = s(e)),
            (n = h.bind(null, r, e)),
            function () {
              l(r);
            })),
        n(t),
        function (e) {
          e ? (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) || n((t = e)) : a();
        }
      );
    }
    e.exports = function (e, s) {
      ((s = s || {}).attributes = "object" == typeof s.attributes ? s.attributes : {}),
        s.singleton || "boolean" == typeof s.singleton || (s.singleton = a());
      var l = c(e, s);
      return (
        d(l, s),
        function (e) {
          for (var t = [], o = 0; o < l.length; o++) {
            var r = l[o],
              r = u[r.id];
            r && (r.refs--, t.push(r));
          }
          e && d(c(e, s), s);
          for (var n = 0; n < t.length; n++) {
            var a = t[n];
            if (0 === a.refs) {
              for (var i = 0; i < a.parts.length; i++) a.parts[i]();
              delete u[a.id];
            }
          }
        }
      );
    };
  },
  118: function (e, t, o) {
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
  119: function (e, t, o) {
    "use strict";
    var a,
      i = Object.prototype.hasOwnProperty;
    function s(e) {
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
    function r(e) {
      for (var t = /([^=?#&]+)=?([^&]*)/g, o = {}; (n = t.exec(e)); ) {
        var r = s(n[1]),
          n = s(n[2]);
        null === r || null === n || r in o || (o[r] = n);
      }
      return o;
    }
    function n(e, t) {
      var o,
        r,
        n = [];
      for (r in ("string" != typeof (t = t || "") && (t = "?"), e))
        i.call(e, r) &&
          ((o = e[r]) || (null !== o && o !== a && !isNaN(o)) || (o = ""), (r = l(r)), (o = l(o)), null !== r) &&
          null !== o &&
          n.push(r + "=" + o);
      return n.length ? t + n.join("&") : "";
    }
    (t.stringify = n), (t.parse = r);
  },
  157: function (e, t) {
    e.exports =
      "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMC41cHgiIGhlaWdodD0iMTAuNnB4IiB2aWV3Qm94PSIwIDAgMTAuNSAxMC42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMC41IDEwLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48ZGVmcz48L2RlZnM+PGc+PGc+PHJlY3QgeD0iNy44IiB5PSIwLjciIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIwLjYiIGhlaWdodD0iOS4xIj48L3JlY3Q+PGc+PHJlY3QgeD0iOC41IiB5PSIwLjEiIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIxLjkiIGhlaWdodD0iMC42Ij48L3JlY3Q+PHJlY3QgeD0iNS45IiB5PSIwLjEiIHN0eWxlPSJmaWxsOiNGRkZGRkY7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjAuMjtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHdpZHRoPSIxLjkiIGhlaWdodD0iMC42Ij48L3JlY3Q+PC9nPjxnPjxyZWN0IHg9IjguNSIgeT0iOS44IiBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjAuNiI+PC9yZWN0PjxyZWN0IHg9IjUuOSIgeT0iOS44IiBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiB3aWR0aD0iMS45IiBoZWlnaHQ9IjAuNiI+PC9yZWN0PjwvZz48L2c+PGc+PHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MC4yO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgZD0iTTMuMSw1LjNjLTAuMSwwLTAuMiwwLTAuMy0wLjFMMC4yLDIuMyBDMC4xLDIuMiwwLjEsMiwwLjEsMS44czAuMi0wLjMsMC40LTAuM2g0LjJDNSwxLjYsNS4yLDEuOCw1LjIsMmMwLDAuMi0wLjIsMC40LTAuNCwwLjRIMS41bDEuOSwyLjFjMC4yLDAuMiwwLjEsMC40LDAsMC42IEMzLjMsNS4yLDMuMiw1LjMsMy4xLDUuM3oiPjwvcGF0aD48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDowLjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSJNNC43LDguMUgwLjVDMC40LDguMSwwLjIsOCwwLjEsNy45IGMtMC4xLTAuMiwwLTAuMywwLjEtMC41bDIuNS0yLjhjMC4yLTAuMiwwLjQtMC4yLDAuNiwwYzAuMiwwLjIsMC4yLDAuNCwwLDAuNkwxLjUsNy4zaDMuM2MwLjIsMCwwLjQsMC4yLDAuNCwwLjRTNSw4LjEsNC43LDguMXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==";
  },
  158: function (e) {
    e.exports = JSON.parse(
      "{\"version\":1,\"questionsRoot\":\"#SchemaEditor\",\"responsesRoot\":\"#ResponsesView\",\"imageButtons\":{\"en\":\"div[role='button'][aria-label='Add inline image'], div[role='button'][aria-label='Add image to option']\",\"es\":\"div[role='button'][aria-label='A\xf1adir una imagen insertada'], div[role='button'][aria-label='A\xf1adir una imagen a la opci\xf3n']\",\"fr\":\"div[role='button'][aria-label='Ajouter une image int\xe9gr\xe9e'], div[role='button'][aria-label='Ajouter une image \xe0 l\\\\'option']\",\"it\":\"div[role='button'][aria-label='Aggiungi immagine in linea'], div[role='button'][aria-label='Aggiungi immagine all\\\\'opzione']\",\"no\":\"div[role='button'][aria-label='Legg til et innebygd bilde'], div[role='button'][aria-label='Legg til et bilde for alternativet']\",\"da\":\"div[role='button'][aria-label='Tilf\xf8j indlejret billede'], div[role='button'][aria-label='F\xf8j billede til valgmulighed']\",\"sv\":\"div[role='button'][aria-label='L\xe4gg till infogad bild'], div[role='button'][aria-label='L\xe4gg till bild i alternativ']\",\"de\":\"div[role='button'][aria-label='Inline-Bild hinzuf\xfcgen'], div[role='button'][aria-label='Bild zur Option hinzuf\xfcgen']\",\"ru\":\"div[role='button'][aria-label='\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435'], div[role='button'][aria-label='\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435']\",\"pl\":\"div[role='button'][aria-label='Dodaj obraz w tre\u015bci'], div[role='button'][aria-label='Dodaj obraz do opcji']\",\"pt\":\"div[role='button'][aria-label='Adicionar imagem inline'], div[role='button'][aria-label='Adicionar imagem \xe0 op\xe7\xe3o']\",\"tr\":\"div[role='button'][aria-label='Sat\u0131r i\xe7i resim ekle'], div[role='button'][aria-label='Se\xe7ene\u011fe resim ekle']\",\"uk\":\"div[role='button'][aria-label='\u0414\u043e\u0434\u0430\u0442\u0438 \u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0435 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f'], div[role='button'][aria-label='\u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u043e \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0443']\",\"nl\":\"div[role='button'][aria-label='Inline afbeelding toevoegen'], div[role='button'][aria-label='Afbeelding toevoegen aan optie']\",\"zh\":\"div[role='button'][aria-label='\u6dfb\u52a0\u5185\u5d4c\u56fe\u7247'], div[role='button'][aria-label='\u5c06\u56fe\u7247\u6dfb\u52a0\u5230\u9009\u9879']\"},\"imageButtonParentFilter\":{\"attribute\":\"data-action-id\",\"value\":\"freebird-add-image\"},\"fallbackImageCss\":{\"cssEle\":\"div[data-item-id] div[role='button'][aria-label][tabindex='0'] div[aria-hidden='true']\",\"cssTop\":\"-676px\",\"closestImgButton\":\"div[role='button'][aria-label]\",\"svgPath\":\"path[fill='#5F6368'][d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z']\"},\"answerKeyInput\":\"div[data-variant='assessment'] input[data-initial-value][badinput]\",\"answerKeyDisplay\":\"div > span:first-child\",\"responseInputAreas\":\"textarea[data-initial-value], input[type=text][data-initial-value]:not([role='combobox'])\"}"
    );
  },
  173: function (e, t, o) {
    (e.exports = o(35)(void 0)).push([
      e.i,
      ".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer !important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100vw - 10px);transition-timing-function:cubic-bezier(0.165, 0.84, 0.44, 1);transition-property:transform}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;background-color:#333;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top]>.tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left]>.tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right]>.tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-interactive][data-state=visible]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(0.54, 1.5, 0.38, 1.11)}.tippy-arrow{position:absolute;border-color:transparent;border-style:solid}.tippy-content{padding:5px 9px}.tippy-tooltip[data-animation=shift-away][data-placement^=top][data-state=hidden]{transform:translateY(10px)}.tippy-tooltip[data-animation=shift-away][data-placement^=bottom][data-state=hidden]{transform:translateY(-10px)}.tippy-tooltip[data-animation=shift-away][data-placement^=left][data-state=hidden]{transform:translateX(10px)}.tippy-tooltip[data-animation=shift-away][data-placement^=right][data-state=hidden]{transform:translateX(-10px)}.tippy-tooltip[data-animation=shift-away][data-state=hidden]{opacity:0}@font-face{font-family:Symbola;src:url(" +
        o(174) +
        ');src:local("Symbola Regular"),local("Symbola"),url(' +
        o(175) +
        ') format("woff2"),url(' +
        o(176) +
        ') format("woff"),url(' +
        o(177) +
        ') format("truetype"),url(' +
        o(178) +
        "#Symbola) format(\"svg\")}.mq-editable-field{display:-moz-inline-box;display:inline-block}.mq-editable-field .mq-cursor{border-left:1px solid black;margin-left:-1px;position:relative;z-index:1;padding:0;display:-moz-inline-box;display:inline-block}.mq-editable-field .mq-cursor.mq-blink{visibility:hidden}.mq-editable-field,.mq-math-mode .mq-editable-field{border:1px solid gray}.mq-editable-field.mq-focused,.mq-math-mode .mq-editable-field.mq-focused{-webkit-box-shadow:#8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;-moz-box-shadow:#8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;box-shadow:#8bd 0 0 1px 2px, inset #6ae 0 0 2px 0;border-color:#709AC0;border-radius:1px}.mq-math-mode .mq-editable-field{margin:1px}.mq-editable-field .mq-latex-command-input{color:inherit;font-family:\"Courier New\", monospace;border:1px solid gray;padding-right:1px;margin-right:1px;margin-left:2px}.mq-editable-field .mq-latex-command-input.mq-empty{background:transparent}.mq-editable-field .mq-latex-command-input.mq-hasCursor{border-color:ActiveBorder}.mq-editable-field.mq-empty:after,.mq-editable-field.mq-text-mode:after,.mq-math-mode .mq-empty:after{visibility:hidden;content:'c'}.mq-editable-field .mq-cursor:only-child:after,.mq-editable-field .mq-textarea+.mq-cursor:last-child:after{visibility:hidden;content:'c'}.mq-editable-field .mq-text-mode .mq-cursor:only-child:after{content:''}.mq-editable-field.mq-text-mode{overflow-x:auto;overflow-y:hidden}.mq-root-block,.mq-math-mode .mq-root-block{display:-moz-inline-box;display:inline-block;width:100%;padding:2px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;white-space:nowrap;overflow:hidden;vertical-align:middle}.mq-math-mode{font-variant:normal;font-weight:normal;font-style:normal;font-size:115%;line-height:1;display:-moz-inline-box;display:inline-block}.mq-math-mode .mq-non-leaf,.mq-math-mode .mq-scaled{display:-moz-inline-box;display:inline-block}.mq-math-mode var,.mq-math-mode .mq-text-mode,.mq-math-mode .mq-nonSymbola{font-family:\"Times New Roman\", Symbola, serif;line-height:.9}.mq-math-mode *{font-size:inherit;line-height:inherit;margin:0;padding:0;border-color:black;-webkit-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box}.mq-math-mode .mq-empty{background:#ccc}.mq-math-mode .mq-empty.mq-root-block{background:transparent}.mq-math-mode.mq-empty{background:transparent}.mq-math-mode .mq-text-mode{display:inline-block;white-space:pre}.mq-math-mode .mq-text-mode.mq-hasCursor{box-shadow:inset darkgray 0 .1em .2em;padding:0 .1em;margin:0 -0.1em;min-width:1ex}.mq-math-mode .mq-font{font:1em \"Times New Roman\", Symbola, serif}.mq-math-mode .mq-font *{font-family:inherit;font-style:inherit}.mq-math-mode b,.mq-math-mode b.mq-font{font-weight:bolder}.mq-math-mode var,.mq-math-mode i,.mq-math-mode i.mq-font{font-style:italic}.mq-math-mode var.mq-f{margin-right:0.2em;margin-left:0.1em}.mq-math-mode .mq-roman var.mq-f{margin:0}.mq-math-mode big{font-size:200%}.mq-math-mode .mq-int>big{display:inline-block;-webkit-transform:scaleX(0.7);-moz-transform:scaleX(0.7);-ms-transform:scaleX(0.7);-o-transform:scaleX(0.7);transform:scaleX(0.7);vertical-align:-0.16em}.mq-math-mode .mq-int>.mq-supsub{font-size:80%;vertical-align:-1.1em;padding-right:.2em}.mq-math-mode .mq-int>.mq-supsub>.mq-sup>.mq-sup-inner{vertical-align:1.3em}.mq-math-mode .mq-int>.mq-supsub>.mq-sub{margin-left:-0.35em}.mq-math-mode .mq-roman{font-style:normal}.mq-math-mode .mq-sans-serif{font-family:sans-serif, Symbola, serif}.mq-math-mode .mq-monospace{font-family:monospace, Symbola, serif}.mq-math-mode .mq-overline{border-top:1px solid black;margin-top:1px}.mq-math-mode .mq-underline{border-bottom:1px solid black;margin-bottom:1px}.mq-math-mode .mq-binary-operator{padding:0 0.2em;display:-moz-inline-box;display:inline-block}.mq-math-mode .mq-supsub{text-align:left;font-size:90%;vertical-align:-0.5em}.mq-math-mode .mq-supsub.mq-sup-only{vertical-align:.5em}.mq-math-mode .mq-supsub.mq-sup-only .mq-sup{display:inline-block;vertical-align:text-bottom}.mq-math-mode .mq-supsub .mq-sup{display:block}.mq-math-mode .mq-supsub .mq-sub{display:block;float:left}.mq-math-mode .mq-supsub .mq-binary-operator{padding:0 .1em}.mq-math-mode .mq-supsub .mq-fraction{font-size:70%}.mq-math-mode sup.mq-nthroot{font-size:80%;vertical-align:0.8em;margin-right:-0.6em;margin-left:.2em;min-width:.5em}.mq-math-mode .mq-paren{padding:0 .1em;vertical-align:top;-webkit-transform-origin:center .06em;-moz-transform-origin:center .06em;-ms-transform-origin:center .06em;-o-transform-origin:center .06em;transform-origin:center .06em}.mq-math-mode .mq-paren.mq-ghost{color:silver}.mq-math-mode .mq-paren+span{margin-top:.1em;margin-bottom:.1em}.mq-math-mode .mq-array{vertical-align:middle;text-align:center}.mq-math-mode .mq-array>span{display:block}.mq-math-mode .mq-operator-name{font-family:Symbola, \"Times New Roman\", serif;line-height:.9;font-style:normal}.mq-math-mode var.mq-operator-name.mq-first{padding-left:.2em}.mq-math-mode var.mq-operator-name.mq-last,.mq-math-mode .mq-supsub.mq-after-operator-name{padding-right:.2em}.mq-math-mode .mq-fraction{font-size:90%;text-align:center;vertical-align:-0.4em;padding:0 .2em}.mq-math-mode .mq-fraction,.mq-math-mode .mq-large-operator,.mq-math-mode x:-moz-any-link{display:-moz-groupbox}.mq-math-mode .mq-fraction,.mq-math-mode .mq-large-operator,.mq-math-mode x:-moz-any-link,.mq-math-mode x:default{display:inline-block}.mq-math-mode .mq-numerator,.mq-math-mode .mq-denominator,.mq-math-mode .mq-dot-recurring{display:block}.mq-math-mode .mq-numerator{padding:0 0.1em}.mq-math-mode .mq-denominator{border-top:1px solid;float:right;width:100%;padding:0.1em}.mq-math-mode .mq-dot-recurring{text-align:center;height:0.3em}.mq-math-mode .mq-sqrt-prefix{padding-top:0;position:relative;top:0.1em;vertical-align:top;-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;-o-transform-origin:top;transform-origin:top}.mq-math-mode .mq-sqrt-stem{border-top:1px solid;margin-top:1px;padding-left:.15em;padding-right:.2em;margin-right:.1em;padding-top:1px}.mq-math-mode .mq-diacritic-above{display:block;text-align:center;line-height:.4em}.mq-math-mode .mq-diacritic-stem{display:block;text-align:center}.mq-math-mode .mq-hat-prefix{display:block;text-align:center;line-height:.95em;margin-bottom:-0.7em;transform:scaleX(1.5);-moz-transform:scaleX(1.5);-o-transform:scaleX(1.5);-webkit-transform:scaleX(1.5)}.mq-math-mode .mq-hat-stem{display:block}.mq-math-mode .mq-large-operator{vertical-align:-0.2em;padding:.2em;text-align:center}.mq-math-mode .mq-large-operator .mq-from,.mq-math-mode .mq-large-operator big,.mq-math-mode .mq-large-operator .mq-to{display:block}.mq-math-mode .mq-large-operator .mq-from,.mq-math-mode .mq-large-operator .mq-to{font-size:80%}.mq-math-mode .mq-large-operator .mq-from{float:right;width:100%}.mq-math-mode,.mq-math-mode .mq-editable-field{cursor:text;font-family:Symbola, \"Times New Roman\", serif}.mq-math-mode .mq-overarc{border-top:1px solid black;-webkit-border-top-right-radius:50% .3em;-moz-border-radius-topright:50% .3em;border-top-right-radius:50% .3em;-webkit-border-top-left-radius:50% .3em;-moz-border-radius-topleft:50% .3em;border-top-left-radius:50% .3em;margin-top:1px;padding-top:0.15em}.mq-math-mode .mq-cancel{background:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 10 10'> <path d='M 10 0 L 0 10' fill='none' stroke='black' stroke-width='1' /></svg>\");background-repeat:no-repeat;background-position:center center;background-size:100% 100%, auto}.mq-math-mode .mq-longdiv{border-top:1px solid black;padding:3px 0 0 3px}.mq-math-mode .mq-longdiv:before{content:')';padding-bottom:2px;display:inline-block;margin:-4px 2px 0 -3px;position:relative;top:0;-webkit-transform:scaleY(1.3);-ms-transform:scaleY(1.3);transform:scaleY(1.3)}.mq-math-mode .mq-stackrel{display:-webkit-inline-box;display:-moz-inline-box;display:-ms-inline-flexbox;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;box-orient:vertical;-moz-box-orient:vertical;-moz-box-direction:normal;box-direction:vertical;-ms-flex-direction:column;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-moz-box-align:center;box-align:center;-ms-flex-align:center;-webkit-align-items:center;align-items:center;vertical-align:middle}.mq-math-mode .mq-overarrow{min-width:.5em;border-top:1px solid black;margin-top:1px;padding-top:0.2em;text-align:center}.mq-math-mode .mq-overarrow:before{display:block;position:relative;top:-0.34em;font-size:0.5em;line-height:0em;content:'\\27A4';text-align:right}.mq-math-mode .mq-overarrow.mq-arrow-left:before{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1);filter:FlipH;-ms-filter:\"FlipH\"}.mq-math-mode .mq-overarrow.mq-arrow-both{vertical-align:text-bottom}.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty{min-height:1.23em}.mq-math-mode .mq-overarrow.mq-arrow-both.mq-empty:after{top:-0.34em}.mq-math-mode .mq-overarrow.mq-arrow-both:before{-moz-transform:scaleX(-1);-o-transform:scaleX(-1);-webkit-transform:scaleX(-1);transform:scaleX(-1);filter:FlipH;-ms-filter:\"FlipH\"}.mq-math-mode .mq-overarrow.mq-arrow-both:after{display:block;position:relative;top:-2.3em;font-size:0.5em;line-height:0em;content:'\\27A4';visibility:visible;text-align:right}.mq-math-mode .mq-tabular{vertical-align:middle;margin-left:0.1em;margin-right:0.1em}.mq-math-mode .mq-tabular table tbody td.mq-array-align-l{text-align:left}.mq-math-mode .mq-tabular table tbody td.mq-array-align-c{text-align:center}.mq-math-mode .mq-tabular table tbody td.mq-array-align-r{text-align:right}.mq-math-mode .mq-tabular table tbody td.mq-array-border-l{border-left:1px solid #000}.mq-math-mode .mq-tabular table tbody td.mq-array-border-r{border-right:1px solid #000}.mq-math-mode .mq-tabular.mq-array-table table{border-spacing:0;border-collapse:collapse}.mq-math-mode .mq-tabular.mq-array-table table td{padding:0.3em 0.5em}.mq-math-mode .mq-tabular table{width:auto;border-bottom:none;border-spacing:3px;border-collapse:separate}.mq-math-mode .mq-tabular table.mq-rows-1{vertical-align:middle;margin-bottom:1px}.mq-math-mode .mq-tabular table.mq-align td:nth-child(odd){text-align:right}.mq-math-mode .mq-tabular table.mq-align td:nth-child(even){text-align:left;min-width:50px}.mq-math-mode .mq-tabular td{border:none;width:auto;padding:0.1em 0.3em;vertical-align:baseline}.mq-math-mode .mq-tabular.mq-align td:nth-child(odd){text-align:right}.mq-math-mode .mq-tabular.mq-align td:nth-child(even){text-align:left;min-width:50px}.mq-math-mode .mq-selection,.mq-editable-field .mq-selection,.mq-math-mode .mq-selection .mq-non-leaf,.mq-editable-field .mq-selection .mq-non-leaf,.mq-math-mode .mq-selection .mq-scaled,.mq-editable-field .mq-selection .mq-scaled{background:#B4D5FE !important;background:Highlight !important;color:HighlightText;border-color:HighlightText}.mq-math-mode .mq-selection .mq-matrixed,.mq-editable-field .mq-selection .mq-matrixed{background:#39F !important}.mq-math-mode .mq-selection .mq-matrixed-container,.mq-editable-field .mq-selection .mq-matrixed-container{filter:progid:DXImageTransform.Microsoft.Chroma(color='#3399FF') !important}.mq-math-mode .mq-selection.mq-blur,.mq-editable-field .mq-selection.mq-blur,.mq-math-mode .mq-selection.mq-blur .mq-non-leaf,.mq-editable-field .mq-selection.mq-blur .mq-non-leaf,.mq-math-mode .mq-selection.mq-blur .mq-scaled,.mq-editable-field .mq-selection.mq-blur .mq-scaled,.mq-math-mode .mq-selection.mq-blur .mq-matrixed,.mq-editable-field .mq-selection.mq-blur .mq-matrixed{background:#D4D4D4 !important;color:black;border-color:black}.mq-math-mode .mq-selection.mq-blur .mq-matrixed-container,.mq-editable-field .mq-selection.mq-blur .mq-matrixed-container{filter:progid:DXImageTransform.Microsoft.Chroma(color='#D4D4D4') !important}.mq-editable-field .mq-textarea,.mq-math-mode .mq-textarea{position:relative;-webkit-user-select:text;-moz-user-select:text;user-select:text}.mq-editable-field .mq-textarea *,.mq-math-mode .mq-textarea *,.mq-editable-field .mq-selectable,.mq-math-mode .mq-selectable{-webkit-user-select:text;-moz-user-select:text;user-select:text;position:absolute;clip:rect(1em 1em 1em 1em);-webkit-transform:scale(0);-moz-transform:scale(0);-ms-transform:scale(0);-o-transform:scale(0);transform:scale(0);resize:none;width:1px;height:1px;box-sizing:content-box}.mq-math-mode .mq-matrixed{background:white;display:-moz-inline-box;display:inline-block}.mq-math-mode .mq-matrixed-container{filter:progid:DXImageTransform.Microsoft.Chroma(color='white');margin-top:-0.1em}.react-resizable{position:relative}.react-resizable-handle{position:absolute;width:20px;height:20px;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;background-image:url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+\");background-position:bottom right;padding:0 3px 3px 0}.react-resizable-handle-sw{bottom:0;left:0;cursor:sw-resize;transform:rotate(90deg)}.react-resizable-handle-se{bottom:0;right:0;cursor:se-resize}.react-resizable-handle-nw{top:0;left:0;cursor:nw-resize;transform:rotate(180deg)}.react-resizable-handle-ne{top:0;right:0;cursor:ne-resize;transform:rotate(270deg)}.react-resizable-handle-w,.react-resizable-handle-e{top:50%;margin-top:-10px;cursor:ew-resize}.react-resizable-handle-w{left:0;transform:rotate(135deg)}.react-resizable-handle-e{right:0;transform:rotate(315deg)}.react-resizable-handle-n,.react-resizable-handle-s{left:50%;margin-left:-10px;cursor:ns-resize}.react-resizable-handle-n{top:0;transform:rotate(225deg)}.react-resizable-handle-s{bottom:0;transform:rotate(45deg)}.equatio-action-button-wrapper{margin:0 5px}.equatio-graph-freemium-text{margin-top:-20px}.equatio-graph-freemium-text ul{font-weight:600;display:inline-block}.equatio-mathjax-display a{pointer-events:visibleFill}#popup-menu-root{position:fixed;left:0;bottom:54px;right:0}.equatio-flyout-menu{position:fixed;bottom:54px;min-width:200px}.equatio-settings-fieldset[disabled]{-webkit-filter:grayscale(1.5) brightness(140%)}.equatio-modal-popup-tooltip__close{position:absolute;top:10px;right:10px;width:22px;height:25px;padding:0;margin:0;display:block}.equatio-modal-popup-tooltip__close>button{position:absolute;top:0;right:0;padding:5px}.equatio-mathspace-floating-window{position:absolute;margin:55px -20px -65px 20px;width:260px;max-height:calc(100vh - 120px);overflow-y:auto}.equatio-mathspace-floating-window--hidden,.equatio-context-container--hidden{display:none}.equatio-context-container-handle-container{width:100%}.react-draggable-dragging{opacity:0.6}.equatio-mathspace-floating-window-premium{height:24px;float:right;margin-top:-21px}.equatio-mathspace-floating-window-premium-icon{height:18px;width:18px}.equatio-mathspace-floating-header-toggle{text-indent:-9999px;height:10px;top:-14px;position:relative;margin-bottom:-10px;float:right;width:10px}.equatio-accessibility-loading-spinner{height:40%;margin:0 auto;padding:20px;background-size:30px}.equatio-mathspace-floating-container{display:block;grid-template-columns:0;grid-column-gap:0}.equatio-mathspace-floating-group{max-height:1000px;opacity:1;transition:max-height 1s ease-in-out, opacity 2.5s ease-in-out}.equatio-mathspace-floating-group--collapsed{max-height:0;opacity:0;overflow:hidden;transition:max-height 1s cubic-bezier(0, 1, 0, 1),opacity 1.5s cubic-bezier(0, 1, 0, 1);padding:0}.equatio-settings-fieldset__list__item{padding:3px 0}.equatio-context-math-symbol{font-family:\"Times New Roman\", Arial, sans-serif;font-weight:800}.equatio-settings-loading-spinner{height:100%;margin:0 auto}.equatio-settings-profile{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center}.equatio-settings-profile-image{height:52px;max-width:52px;border-radius:50%;border:4px solid #00b7ff}.equatio-settings-profile-detail{-webkit-flex:1;-ms-flex:1;flex:1;margin:0 10px}.equatio-settings-profile-detail-name{font-size:1.2em}.equatio-toolbar-option-toggle-list{max-height:285px;overflow-y:auto}.equatio-toolbar-option-toggle-item__icon{width:42px;height:42px;border-radius:50%;color:#494949;background:#F2F2F2}.equatio-toolbar-option-toggle-item__label{display:flex;align-items:center}.equatio-toolbar-option-toggle-item__text{margin-left:10px}.equatio-toolbar-feature-toggle-image{background:#F2F2F2;border-radius:50%;width:42px;height:42px;display:flex;align-items:center;justify-content:center}.equatio-palette-editor-popup-list-item-button__text::first-letter,.equatio-prediction-button__text::first-letter{text-transform:capitalize}\n",
      ""
    ]);
  },
  174: function (e, t, o) {
    e.exports = o.p + "assets/Symbola.eot";
  },
  175: function (e, t, o) {
    e.exports = o.p + "assets/Symbola.woff2";
  },
  176: function (e, t, o) {
    e.exports = o.p + "assets/Symbola.woff";
  },
  177: function (e, t, o) {
    e.exports = o.p + "assets/Symbola.ttf";
  },
  178: function (e, t, o) {
    e.exports = o.p + "assets/Symbola.svg";
  },
  21: function (e, t, o) {
    var r = o(64),
      n = o(65),
      a = o(66),
      i = o(68);
    function s(e, t) {
      return r(e) || n(e, t) || a(e, t) || i();
    }
    (e.exports = s), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  23: function (t, e) {
    function o(e) {
      return (
        (t.exports = o =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports),
        o(e)
      );
    }
    (t.exports = o), (t.exports.__esModule = !0), (t.exports.default = t.exports);
  },
  28: function (e, t, o) {
    "use strict";
    t.a = (e) => {
      const t = (e, t) => {
        const o = new MouseEvent(t, {
          bubbles: !0,
          cancelable: !0
        });
        e.dispatchEvent(o);
      };
      t(e, "mousedown"), t(e, "mouseup"), t(e, "click");
    };
  },
  298: function (e, t, o) {
    /*!
     * clipboard.js v2.0.11
     * https://clipboardjs.com/
     *
     * Licensed MIT © Zeno Rocha
     */
    var r;
    (r = function () {
      return (
        (o = {
          686: function (e, t, o) {
            "use strict";
            o.d(t, {
              default: function () {
                return j;
              }
            });
            var t = o(279),
              a = o.n(t),
              t = o(370),
              i = o.n(t),
              t = o(817),
              r = o.n(t);
            function n(e) {
              try {
                return document.execCommand(e);
              } catch (e) {
                return !1;
              }
            }
            var s = function (e) {
              e = r()(e);
              return n("cut"), e;
            };
            function l(e) {
              var t = "rtl" === document.documentElement.getAttribute("dir"),
                o = document.createElement("textarea"),
                t =
                  ((o.style.fontSize = "12pt"),
                  (o.style.border = "0"),
                  (o.style.padding = "0"),
                  (o.style.margin = "0"),
                  (o.style.position = "absolute"),
                  (o.style[t ? "right" : "left"] = "-9999px"),
                  window.pageYOffset || document.documentElement.scrollTop);
              return (o.style.top = "".concat(t, "px")), o.setAttribute("readonly", ""), (o.value = e), o;
            }
            var u = function (e, t) {
                (e = l(e)), t.container.appendChild(e), (t = r()(e));
                return n("copy"), e.remove(), t;
              },
              c = function (e) {
                var t =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : {
                          container: document.body
                        },
                  o = "";
                return (
                  "string" == typeof e
                    ? (o = u(e, t))
                    : e instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(null == e ? void 0 : e.type)
                    ? (o = u(e.value, t))
                    : ((o = r()(e)), n("copy")),
                  o
                );
              };
            function d(e) {
              return (d =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
            }
            var m = function () {
              var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.action,
                t = void 0 === t ? "copy" : t,
                o = e.container,
                r = e.target,
                e = e.text;
              if ("copy" !== t && "cut" !== t) throw new Error('Invalid "action" value, use either "copy" or "cut"');
              if (void 0 !== r) {
                if (!r || "object" !== d(r) || 1 !== r.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                if ("copy" === t && r.hasAttribute("disabled"))
                  throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                if ("cut" === t && (r.hasAttribute("readonly") || r.hasAttribute("disabled")))
                  throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
              }
              return e
                ? c(e, {
                    container: o
                  })
                : r
                ? "cut" === t
                  ? s(r)
                  : c(r, {
                      container: o
                    })
                : void 0;
            };
            function p(e) {
              return (p =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
            }
            function f(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function h(e, t) {
              for (var o = 0; o < t.length; o++) {
                var r = t[o];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            function b(e, t, o) {
              return t && h(e.prototype, t), o && h(e, o), e;
            }
            function g(e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              (e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              })),
                t && y(e, t);
            }
            function y(e, t) {
              return (y =
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function w(o) {
              var r = L();
              return function () {
                var e,
                  t = q(o);
                return x(this, r ? ((e = q(this).constructor), Reflect.construct(t, arguments, e)) : t.apply(this, arguments));
              };
            }
            function x(e, t) {
              return !t || ("object" !== p(t) && "function" != typeof t) ? v(e) : t;
            }
            function v(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            }
            function L() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
              } catch (e) {
                return !1;
              }
            }
            function q(e) {
              return (q = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            function M(e, t) {
              e = "data-clipboard-".concat(e);
              if (t.hasAttribute(e)) return t.getAttribute(e);
            }
            var j = (function () {
              g(n, a());
              var r = w(n);
              function n(e, t) {
                var o;
                return f(this, n), (o = r.call(this)).resolveOptions(t), o.listenClick(e), o;
              }
              return (
                b(
                  n,
                  [
                    {
                      key: "resolveOptions",
                      value: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        (this.action = "function" == typeof e.action ? e.action : this.defaultAction),
                          (this.target = "function" == typeof e.target ? e.target : this.defaultTarget),
                          (this.text = "function" == typeof e.text ? e.text : this.defaultText),
                          (this.container = "object" === p(e.container) ? e.container : document.body);
                      }
                    },
                    {
                      key: "listenClick",
                      value: function (e) {
                        var t = this;
                        this.listener = i()(e, "click", function (e) {
                          return t.onClick(e);
                        });
                      }
                    },
                    {
                      key: "onClick",
                      value: function (e) {
                        var t = e.delegateTarget || e.currentTarget,
                          e = this.action(t) || "copy",
                          o = m({
                            action: e,
                            container: this.container,
                            target: this.target(t),
                            text: this.text(t)
                          });
                        this.emit(o ? "success" : "error", {
                          action: e,
                          text: o,
                          trigger: t,
                          clearSelection: function () {
                            t && t.focus(), window.getSelection().removeAllRanges();
                          }
                        });
                      }
                    },
                    {
                      key: "defaultAction",
                      value: function (e) {
                        return M("action", e);
                      }
                    },
                    {
                      key: "defaultTarget",
                      value: function (e) {
                        e = M("target", e);
                        if (e) return document.querySelector(e);
                      }
                    },
                    {
                      key: "defaultText",
                      value: function (e) {
                        return M("text", e);
                      }
                    },
                    {
                      key: "destroy",
                      value: function () {
                        this.listener.destroy();
                      }
                    }
                  ],
                  [
                    {
                      key: "copy",
                      value: function (e) {
                        var t =
                          1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : {
                                container: document.body
                              };
                        return c(e, t);
                      }
                    },
                    {
                      key: "cut",
                      value: function (e) {
                        return s(e);
                      }
                    },
                    {
                      key: "isSupported",
                      value: function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"],
                          e = "string" == typeof e ? [e] : e,
                          t = !!document.queryCommandSupported;
                        return (
                          e.forEach(function (e) {
                            t = t && !!document.queryCommandSupported(e);
                          }),
                          t
                        );
                      }
                    }
                  ]
                ),
                n
              );
            })();
          },
          828: function (e) {
            var t,
              o = 9;
            function r(e, t) {
              for (; e && e.nodeType !== o; ) {
                if ("function" == typeof e.matches && e.matches(t)) return e;
                e = e.parentNode;
              }
            }
            "undefined" == typeof Element ||
              Element.prototype.matches ||
              ((t = Element.prototype).matches =
                t.matchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector || t.webkitMatchesSelector),
              (e.exports = r);
          },
          438: function (e, t, o) {
            var n = o(828);
            function a(e, t, o, r, n) {
              var a = i.apply(this, arguments);
              return (
                e.addEventListener(o, a, n),
                {
                  destroy: function () {
                    e.removeEventListener(o, a, n);
                  }
                }
              );
            }
            function r(e, t, o, r, n) {
              return "function" == typeof e.addEventListener
                ? a.apply(null, arguments)
                : "function" == typeof o
                ? a.bind(null, document).apply(null, arguments)
                : ("string" == typeof e && (e = document.querySelectorAll(e)),
                  Array.prototype.map.call(e, function (e) {
                    return a(e, t, o, r, n);
                  }));
            }
            function i(t, o, e, r) {
              return function (e) {
                (e.delegateTarget = n(e.target, o)), e.delegateTarget && r.call(t, e);
              };
            }
            e.exports = r;
          },
          879: function (e, o) {
            (o.node = function (e) {
              return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
            }),
              (o.nodeList = function (e) {
                var t = Object.prototype.toString.call(e);
                return (
                  void 0 !== e &&
                  ("[object NodeList]" === t || "[object HTMLCollection]" === t) &&
                  "length" in e &&
                  (0 === e.length || o.node(e[0]))
                );
              }),
              (o.string = function (e) {
                return "string" == typeof e || e instanceof String;
              }),
              (o.fn = function (e) {
                return "[object Function]" === Object.prototype.toString.call(e);
              });
          },
          370: function (e, t, o) {
            var r = o(879),
              n = o(438);
            function a(e, t, o) {
              if (!e && !t && !o) throw new Error("Missing required arguments");
              if (!r.string(t)) throw new TypeError("Second argument must be a String");
              if (!r.fn(o)) throw new TypeError("Third argument must be a Function");
              if (r.node(e)) return i(e, t, o);
              if (r.nodeList(e)) return s(e, t, o);
              if (r.string(e)) return l(e, t, o);
              throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
            }
            function i(e, t, o) {
              return (
                e.addEventListener(t, o),
                {
                  destroy: function () {
                    e.removeEventListener(t, o);
                  }
                }
              );
            }
            function s(e, t, o) {
              return (
                Array.prototype.forEach.call(e, function (e) {
                  e.addEventListener(t, o);
                }),
                {
                  destroy: function () {
                    Array.prototype.forEach.call(e, function (e) {
                      e.removeEventListener(t, o);
                    });
                  }
                }
              );
            }
            function l(e, t, o) {
              return n(document.body, e, t, o);
            }
            e.exports = a;
          },
          817: function (e) {
            function t(e) {
              var t,
                o,
                e =
                  "SELECT" === e.nodeName
                    ? (e.focus(), e.value)
                    : "INPUT" === e.nodeName || "TEXTAREA" === e.nodeName
                    ? ((t = e.hasAttribute("readonly")) || e.setAttribute("readonly", ""),
                      e.select(),
                      e.setSelectionRange(0, e.value.length),
                      t || e.removeAttribute("readonly"),
                      e.value)
                    : (e.hasAttribute("contenteditable") && e.focus(),
                      (t = window.getSelection()),
                      (o = document.createRange()).selectNodeContents(e),
                      t.removeAllRanges(),
                      t.addRange(o),
                      t.toString());
              return e;
            }
            e.exports = t;
          },
          279: function (e) {
            function t() {}
            (t.prototype = {
              on: function (e, t, o) {
                var r = this.e || (this.e = {});
                return (
                  (r[e] || (r[e] = [])).push({
                    fn: t,
                    ctx: o
                  }),
                  this
                );
              },
              once: function (e, t, o) {
                var r = this;
                function n() {
                  r.off(e, n), t.apply(o, arguments);
                }
                return (n._ = t), this.on(e, n, o);
              },
              emit: function (e) {
                for (var t = [].slice.call(arguments, 1), o = ((this.e || (this.e = {}))[e] || []).slice(), r = 0, n = o.length; r < n; r++)
                  o[r].fn.apply(o[r].ctx, t);
                return this;
              },
              off: function (e, t) {
                var o = this.e || (this.e = {}),
                  r = o[e],
                  n = [];
                if (r && t) for (var a = 0, i = r.length; a < i; a++) r[a].fn !== t && r[a].fn._ !== t && n.push(r[a]);
                return n.length ? (o[e] = n) : delete o[e], this;
              }
            }),
              (e.exports = t),
              (e.exports.TinyEmitter = t);
          }
        }),
        (n = {}),
        (r.n = function (e) {
          var t =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return (
            r.d(t, {
              a: t
            }),
            t
          );
        }),
        (r.d = function (e, t) {
          for (var o in t)
            r.o(t, o) &&
              !r.o(e, o) &&
              Object.defineProperty(e, o, {
                enumerable: !0,
                get: t[o]
              });
        }),
        (r.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        r(686).default
      );
      function r(e) {
        var t;
        return (
          n[e] ||
          ((t = n[e] =
            {
              exports: {}
            }),
          o[e](t, t.exports, r),
          t)
        ).exports;
      }
      var o, n;
    }),
      (e.exports = r());
  },
  299: function (e, t) {
    e.exports =
      "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMTUgMTE1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMTUgMTE1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTt9Cgkuc3Qxe2ZpbGw6IzAwQjdGRjt9Cgkuc3Qye2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qze2NsaXAtcGF0aDp1cmwoI1NWR0lEXzJfKTtmaWxsOiMwMEI3RkY7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxkZWZzPgoJCQk8Y2lyY2xlIGlkPSJTVkdJRF8xXyIgY3g9IjU3LjUiIGN5PSI1Ny41IiByPSI1NS41Ii8+CgkJPC9kZWZzPgoJCTxjbGlwUGF0aCBpZD0iU1ZHSURfMl8iPgoJCQk8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgoJCTwvY2xpcFBhdGg+CgkJPGcgY2xhc3M9InN0MCI+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTc2LjQsMTE2LjZjMCw2LjItNSwxMS4yLTExLjIsMTEuMkg0NC4zYy02LjIsMC0xMS4yLTUtMTEuMi0xMS4yVjM1LjhjMC02LjIsNS0xMS4yLDExLjItMTEuMmgyMC44CgkJCQkJCWM2LjIsMCwxMS4yLDUsMTEuMiwxMS4yVjExNi42eiIvPgoJCQkJPC9nPgoJCQk8L2c+CgkJCTxnPgoJCQkJPGc+CgkJCQkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTU5LjMsNTIuOGMwLDMuMywxLjksNC4xLDQuMiwxLjhsMjUuNy0yNS43YzIuMy0yLjMsMS41LTQuMi0xLjgtNC4ySDY1LjNjLTMuMywwLTYsMi43LTYsNkw1OS4zLDUyLjh6Ii8+CgkJCQk8L2c+CgkJCTwvZz4KCQkJPGc+CgkJCQk8Zz4KCQkJCQk8Zz4KCQkJCQkJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjUxLjYiIHkxPSIxNTYuMiIgeDI9IjUxLjYiIHkyPSIxMjEuNiIvPgoJCQkJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTEuNiwxNTcuOWMtMC45LDAtMS42LTAuNy0xLjYtMS42di0zNC43YzAtMC45LDAuNy0xLjYsMS42LTEuNmMwLjksMCwxLjYsMC43LDEuNiwxLjZ2MzQuNwoJCQkJCQkJQzUzLjIsMTU3LjEsNTIuNSwxNTcuOSw1MS42LDE1Ny45eiIvPgoJCQkJCTwvZz4KCQkJCQk8Zz4KCQkJCQkJPGxpbmUgY2xhc3M9InN0MSIgeDE9IjU3LjkiIHkxPSIxNTYuMiIgeDI9IjU3LjkiIHkyPSIxMjQuMyIvPgoJCQkJCQk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNTcuOSwxNTcuOWMtMC45LDAtMS42LTAuNy0xLjYtMS42di0zMS45YzAtMC45LDAuNy0xLjYsMS42LTEuNnMxLjYsMC43LDEuNiwxLjZ2MzEuOQoJCQkJCQkJQzU5LjYsMTU3LjEsNTguOSwxNTcuOSw1Ny45LDE1Ny45eiIvPgoJCQkJCTwvZz4KCQkJCTwvZz4KCQkJPC9nPgoJCQk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNjcuNiwzNS43SDU3LjVjLTAuNiwwLTEuMi0wLjUtMS4yLTEuMnYwYzAtMC42LDAuNS0xLjIsMS4yLTEuMmgxMC4xYzAuNiwwLDEuMiwwLjUsMS4yLDEuMnYwCgkJCQlDNjguOCwzNS4xLDY4LjIsMzUuNyw2Ny42LDM1Ljd6Ii8+CgkJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik02Ny4zLDM1LjJsLTYuOS00LjFjLTAuNS0wLjMtMC42LTAuOS0wLjMtMS4zdjBjMC4zLTAuNSwwLjktMC42LDEuMy0wLjNsNi45LDQuMWMwLjUsMC4zLDAuNiwwLjksMC4zLDEuMwoJCQkJbDAsMEM2OC40LDM1LjQsNjcuNywzNS41LDY3LjMsMzUuMnoiLz4KCQkJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY4LjIsMzUuNmwtNi4xLDVjLTAuNCwwLjQtMS4xLDAuMy0xLjUtMC4ybDAsMGMtMC40LTAuNC0wLjMtMS4xLDAuMi0xLjVsNi4xLTVjMC40LTAuNCwxLjEtMC4zLDEuNSwwLjJ2MAoJCQkJQzY4LjcsMzQuNiw2OC43LDM1LjIsNjguMiwzNS42eiIvPgoJCTwvZz4KCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJNNzEuNywxNS4yYy0wLjYsMC42LTEuMywyLjYtMi42LDUuNWMzLjEtMC42LDUuMi0wLjgsNS45LTEuMmMwLjItMC4xLDAuNC0wLjIsMC42LTAuNAoJCQljMS4yLTAuOSwxLjQtMi43LDAuNS0zLjlzLTIuNy0xLjUtMy45LTAuNUM3MiwxNC44LDcxLjgsMTUsNzEuNywxNS4yeiIvPgoJCTx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiAgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7ZmlsbDpub25lO3N0cm9rZTojMDBCN0ZGO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwOyIvPgoJPC9nPgoJPHBhdGggY2xhc3M9InN0MiIgZD0iTTcwLjIsNDkuNWMtMC4xLTAuOC0xLjItMi42LTIuNS01LjVjLTEuNSwyLjgtMi43LDQuNS0yLjksNS4zYy0wLjEsMC4yLTAuMSwwLjUtMC4xLDAuNwoJCWMtMC4xLDEuNSwxLjEsMi44LDIuNywyLjlzMi44LTEuMSwyLjktMi43QzcwLjMsNTAsNzAuMyw0OS43LDcwLjIsNDkuNXoiLz4KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik03MC4yLDYzLjZjLTAuMS0wLjgtMS4yLTIuNi0yLjUtNS41Yy0xLjUsMi44LTIuNyw0LjUtMi45LDUuM2MtMC4xLDAuMi0wLjEsMC41LTAuMSwwLjcKCQljLTAuMSwxLjUsMS4xLDIuOCwyLjcsMi45YzEuNSwwLjEsMi44LTEuMSwyLjktMi43QzcwLjMsNjQsNzAuMyw2My44LDcwLjIsNjMuNnoiLz4KPC9nPgo8L3N2Zz4K";
  },
  3: function (e, t) {
    function l(e, t, o, r, n, a, i) {
      try {
        var s = e[a](i),
          l = s.value;
      } catch (e) {
        return void o(e);
      }
      s.done ? t(l) : Promise.resolve(l).then(r, n);
    }
    function o(s) {
      return function () {
        var e = this,
          i = arguments;
        return new Promise(function (t, o) {
          var r = s.apply(e, i);
          function n(e) {
            l(r, t, o, n, a, "next", e);
          }
          function a(e) {
            l(r, t, o, n, a, "throw", e);
          }
          n(void 0);
        });
      };
    }
    (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  300: function (e, t) {
    e.exports =
      "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA3MiA3MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNzIgNzI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGcgaWQ9ImNvcHlfMl8iPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0yNCwzNy41VjI3bDEyLDEySDI1LjVDMjQuNywzOSwyNCwzOC4zLDI0LDM3LjV6IE0yMi41LDQySDM2djI4LjVjMCwwLjgtMC43LDEuNS0xLjUsMS41aC0zMwoJCUMwLjcsNzIsMCw3MS4zLDAsNzAuNXYtNDJDMCwyNy43LDAuNywyNywxLjUsMjdIMjF2MTMuNUMyMSw0MS4zLDIxLjcsNDIsMjIuNSw0MnogTTQyLjEsMTVoMTcuOWMxLjcsMCwzLjEtMS4zLDMuMS0zVjkuMQoJCUM2Myw3LjQsNjEuNiw2LDU5LjksNkg1N1YzLjNDNTcsMS42LDU1LjYsMCw1NCwwaC02Yy0xLjYsMC0zLDEuNi0zLDMuM1Y2aC0yLjlDNDAuNCw2LDM5LDcuNCwzOSw5LjFWMTJDMzksMTMuNyw0MC40LDE1LDQyLjEsMTV6CgkJIE00NC40LDQ4LjZIMzlWNTdoNS40VjQ4LjZ6IE03MC41LDlINjZ2Ni4xYzAsMS43LTEuNCwyLjktMywyLjlIMzljLTEuNiwwLTMtMS4zLTMtMi45VjloLTQuNUMzMC43LDksMzAsOS43LDMwLDEwLjVWMjdsOC40LDguNGg2CgkJVjI0bDE4LDE4bC0xNSwxNWgyMy4xYzAuOCwwLDEuNS0wLjUsMS41LTEuM1YxMC41QzcyLDkuNyw3MS4zLDksNzAuNSw5eiBNNTUuOCw0Mkw0OCwzNC4yVjM5aC05djZoOXY0LjhMNTUuOCw0MnoiLz4KPC9nPgo8L3N2Zz4K";
  },
  301: function (e, t) {
    e.exports =
      "data:image/svg+xml;charset=utf-8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIxLjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTggMTg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggc3R5bGU9ImZpbGw6IzAwQjdGRjsiIGQ9Ik0xOCwxNlYyYzAtMS4xLTAuOS0yLTItMkgyQzAuOSwwLDAsMC45LDAsMnYxNGMwLDEuMSwwLjksMiwyLDJoMTRDMTcuMSwxOCwxOCwxNy4xLDE4LDE2eiIvPgo8ZyBpZD0icmVtb3ZlXzJfIj4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMTEuMSw5bDMuOC0zLjhjMC4xLTAuMSwwLjEtMC40LDAtMC41bC0xLjYtMS42Yy0wLjEtMC4xLTAuNC0wLjEtMC41LDBMOSw2LjlMNS4yLDMuMQoJCUM1LjEsMyw0LjgsMyw0LjcsMy4xTDMuMSw0LjdDMyw0LjgsMyw1LjEsMy4xLDUuMkw2LjksOWwtMy44LDMuOGMtMC4xLDAuMS0wLjEsMC40LDAsMC41bDEuNiwxLjZjMC4xLDAuMSwwLjQsMC4xLDAuNSwwTDksMTEuMQoJCWwzLjgsMy44YzAuMSwwLjEsMC40LDAuMSwwLjUsMGwxLjYtMS42YzAuMS0wLjEsMC4xLTAuNCwwLTAuNUwxMS4xLDl6Ii8+CjwvZz4KPC9zdmc+Cg==";
  },
  35: function (e, t) {
    function r(e, t) {
      var o = e[1] || "",
        r = e[3];
      return r
        ? (t && "function" == typeof btoa
            ? ((e = n(r)),
              (t = r.sources.map(function (e) {
                return "/*# sourceURL=" + r.sourceRoot + e + " */";
              })),
              [o].concat(t).concat([e]))
            : [o]
          ).join("\n")
        : o;
    }
    function n(e) {
      return (
        "/*# " +
        ("sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e))))) +
        " */"
      );
    }
    e.exports = function (o) {
      var i = [];
      return (
        (i.toString = function () {
          return this.map(function (e) {
            var t = r(e, o);
            return e[2] ? "@media " + e[2] + "{" + t + "}" : t;
          }).join("");
        }),
        (i.i = function (e, t) {
          "string" == typeof e && (e = [[null, e, ""]]);
          for (var o = {}, r = 0; r < this.length; r++) {
            var n = this[r][0];
            "number" == typeof n && (o[n] = !0);
          }
          for (r = 0; r < e.length; r++) {
            var a = e[r];
            ("number" == typeof a[0] && o[a[0]]) || (t && !a[2] ? (a[2] = t) : t && (a[2] = "(" + a[2] + ") and (" + t + ")"), i.push(a));
          }
        }),
        i
      );
    };
  },
  390: function (e, t, o) {
    var r = o(391),
      n = ("string" == typeof r && (r = [[e.i, r, ""]]), {});
    (n.insert = "head"), (n.singleton = !1), o(102)(r, n);
    r.locals && (e.exports = r.locals);
  },
  391: function (e, t, o) {
    (e.exports = o(35)(void 0)).push([
      e.i,
      '#equatio-error-overlay .equatio-button{border:0;font-family:\'Roboto\', Arial, sans-serif;background:#00B7FF;color:#FFF;text-transform:uppercase;cursor:pointer;padding:7px 10px;font-size:0.85em;margin:0 10px;min-width:165px;border-radius:3px;-webkit-font-smoothing:antialiased;font-weight:600;-webkit-box-shadow:0 0 5px 1px rgba(70,70,70,0.5);-moz-box-shadow:0 0 5px 1px rgba(70,70,70,0.5);box-shadow:0 0 5px 1px rgba(70,70,70,0.5);letter-spacing:-0.2px}#equatio-error-overlay .equatio-cancel-button{border:0;font-family:\'Roboto\', Arial, sans-serif;background:#FFF;color:#00B7FF;cursor:pointer;padding:0;font-size:0.85em;margin:10px 0;min-width:165px;border-radius:3px;-webkit-font-smoothing:antialiased;letter-spacing:-0.2px}#equatio-error-overlay .equatio-cancel-button:hover{text-decoration:underline}#equatio-error-overlay .equatio-button:hover,.equatio-button:active{background:#33c5ff}#equatio-automation-overlay,#equatio-error-overlay{display:flex;align-items:center;justify-content:center;position:absolute;left:0;bottom:0;right:0;top:0;z-index:9999;color:#00B7FF;background-color:#FFF;flex-direction:column}#equatio-automation-overlay{padding-top:110px;background:#fff url("data:image/svg+xml,<svg xmlns=\'http://www.w3.org/2000/svg\' height=\'80\' viewBox=\'0 0 912 912\'>%3Cstyle type=\'text/css\'%3E .st0{fill:none;stroke:%2300B7FF;stroke-width:52.5138;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st1{fill:none;stroke:%2300B7FF;stroke-width:20;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  .st2{fill:none;stroke:%2300B7FF;stroke-width:40.8129;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}  %3C/style%3E  %3Cpath class=\'st0 vjXdlbbW_0\' d=\'M833.3,513.4L523,823.8c-54.5,0-85.6,0-140,0L72.6,513.4c0-54.5,0-85.6,0-140L383,63.1c54.5,0,85.6,0,140,0 l310.3,310.3C833.3,427.9,833.3,459,833.3,513.4z\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_1\' d=\'M262.8,445.6L461.1,643.9\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_2\' d=\'M453.4,650.2L401.9,701.7L97.8,397.6\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_3\' d=\'M449.1,637.7L647.4,439.4\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_4\' d=\'M653.7,447.1L705.2,498.6L401,802.7\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_5\' d=\'M643.3,444.5L445,246.2\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_6\' d=\'M452.8,239.8L504.2,188.4L808.4,492.5\'%3E%3C/path%3E  %3Cpath class=\'st1 vjXdlbbW_7\' d=\'M452.8,253.1L254.5,451.4\'%3E%3C/path%3E  %3Cpath class=\'st2 vjXdlbbW_8\' d=\'M248.2,443.6L196.7,392.2L500.9,88.1\'%3E%3C/path%3E  %3Cstyle%3E@supports (-webkit-appearance:none) { .vjXdlbbW_0{stroke-dasharray:2316 2318;stroke-dashoffset:2317;animation:vjXdlbbW_draw_0 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_1{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_1 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_2{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_2 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_3{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_3 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_4{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_4 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_5{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_5 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_6{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_6 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_7{stroke-dasharray:281 283;stroke-dashoffset:282;animation:vjXdlbbW_draw_7 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}.vjXdlbbW_8{stroke-dasharray:503 505;stroke-dashoffset:504;animation:vjXdlbbW_draw_8 3600ms linear 0ms infinite,vjXdlbbW_fade 3600ms linear 0ms infinite;}@keyframes vjXdlbbW_draw{100%{stroke-dashoffset:0;}}@keyframes vjXdlbbW_fade{0%{stroke-opacity:1;}77.77777777777777%{stroke-opacity:1;}100%{stroke-opacity:0;}}@keyframes vjXdlbbW_draw_0{0%{stroke-dashoffset: 2317}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_1{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_2{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_3{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_4{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_5{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_6{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_7{0%{stroke-dashoffset: 282}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}}@keyframes vjXdlbbW_draw_8{0%{stroke-dashoffset: 504}55.55555555555556%{ stroke-dashoffset: 0;}100%{ stroke-dashoffset: 0;}} }%3C/style%3E</svg>") 50% 50% no-repeat;font-weight:600}#equatio-automation-overlay.graph,#equatio-error-overlay.graph{position:fixed;border:1px solid #acacac;bottom:22%;left:22%;right:22%;top:22%;-webkit-box-shadow:rgba(0,0,0,0.2) 0 4px 16px;box-shadow:rgba(0,0,0,0.2) 0 4px 16px;-webkit-transition:top .5s ease-in-out;transition:top .5s ease-in-out}#equatio-error-overlay .equatio-error-overlay__image{height:120px}#equatio-error-overlay .equatio-error-overlay__title{margin:20px 0 5px}#equatio-error-overlay .equatio-error-overlay__description{margin:5px 20px 0}#equatio-error-overlay .equatio-error-overlay__url{width:100%;text-align:center;display:flex;align-items:center;justify-content:center}#equatio-error-overlay .equatio-error-overlay__url__input{font-size:1.0em;padding:5px;width:60%;display:inline-block;border:1px solid #efefef;color:#333;line-height:20px;font-family:"Roboto", Arial, sans-serif;font-weight:400;-webkit-font-smoothing:antialiased}#equatio-error-overlay .equatio-error-overlay__url__button{border:0;background:#00B7FF;display:flex;overflow:hidden;width:32px;height:32px;margin:0;cursor:pointer;align-items:center;justify-content:center}#equatio-error-overlay .equatio-error-overlay__url__button:hover,.equatio-error-overlay__url__button:active{background:#33c5ff}button[data-equatio-balloon]{overflow:visible}[data-equatio-balloon]{position:relative}[data-equatio-balloon]:before,[data-equatio-balloon]:after{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";filter:alpha(opacity=0);-khtml-opacity:0;-moz-opacity:0;opacity:0;pointer-events:none;-webkit-transition:all 0.18s ease-out 0.18s;transition:all 0.18s ease-out 0.18s;bottom:100%;left:50%;position:absolute;z-index:10;-webkit-transform:translate(-50%, 10px);-ms-transform:translate(-50%, 10px);transform:translate(-50%, 10px);-webkit-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-equatio-balloon]:after{background:rgba(0,183,255,0.9);border-radius:4px;color:#fff;content:attr(data-equatio-balloon);font-size:12px;padding:.5em 1em;white-space:nowrap;margin-bottom:11px}[data-equatio-balloon]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%280%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;background-size:100% auto;height:6px;width:18px;content:"";margin-bottom:5px}[data-equatio-balloon]:hover:before,[data-equatio-balloon][data-equatio-balloon-visible]:before,[data-equatio-balloon]:hover:after,[data-equatio-balloon][data-equatio-balloon-visible]:after{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";filter:alpha(opacity=100);-khtml-opacity:1;-moz-opacity:1;opacity:1;pointer-events:auto;-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}[data-equatio-balloon].font-awesome:after{font-family:FontAwesome}[data-equatio-balloon][data-equatio-balloon-break]:after{white-space:pre}[data-equatio-balloon-pos="down"]:before,[data-equatio-balloon-pos="down"]:after{bottom:auto;left:50%;top:100%;-webkit-transform:translate(-50%, -10px);-ms-transform:translate(-50%, -10px);transform:translate(-50%, -10px)}[data-equatio-balloon-pos="down"]:after{margin-top:11px}[data-equatio-balloon-pos="down"]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%28180%2018%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;background-size:100% auto;height:6px;width:18px;margin-top:5px;margin-bottom:0}[data-equatio-balloon-pos="down"]:hover:before,[data-equatio-balloon-pos="down"][data-equatio-balloon-visible]:before,[data-equatio-balloon-pos="down"]:hover:after,[data-equatio-balloon-pos="down"][data-equatio-balloon-visible]:after{-webkit-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}[data-equatio-balloon-pos="left"]:before,[data-equatio-balloon-pos="left"]:after{bottom:auto;left:auto;right:100%;top:50%;-webkit-transform:translate(10px, -50%);-ms-transform:translate(10px, -50%);transform:translate(10px, -50%)}[data-equatio-balloon-pos="left"]:after{margin-right:11px}[data-equatio-balloon-pos="left"]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%28-90%2018%2018%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;background-size:100% auto;height:18px;width:6px;margin-right:5px;margin-bottom:0}[data-equatio-balloon-pos="left"]:hover:before,[data-equatio-balloon-pos="left"][data-equatio-balloon-visible]:before,[data-equatio-balloon-pos="left"]:hover:after,[data-equatio-balloon-pos="left"][data-equatio-balloon-visible]:after{-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}[data-equatio-balloon-pos="right"]:before,[data-equatio-balloon-pos="right"]:after{bottom:auto;left:100%;top:50%;-webkit-transform:translate(-10px, -50%);-ms-transform:translate(-10px, -50%);transform:translate(-10px, -50%)}[data-equatio-balloon-pos="right"]:after{margin-left:11px}[data-equatio-balloon-pos="right"]:before{background:url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba%280,%20183,%20255,%200.9%29%22%20transform%3D%22rotate%2890%206%206%29%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E") no-repeat;background-size:100% auto;height:18px;width:6px;margin-bottom:0;margin-left:5px}[data-equatio-balloon-pos="right"]:hover:before,[data-equatio-balloon-pos="right"][data-equatio-balloon-visible]:before,[data-equatio-balloon-pos="right"]:hover:after,[data-equatio-balloon-pos="right"][data-equatio-balloon-visible]:after{-webkit-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}[data-equatio-balloon-length]:after{white-space:normal}[data-equatio-balloon-length="small"]:after{width:80px}[data-equatio-balloon-length="medium"]:after{width:150px}[data-equatio-balloon-length="large"]:after{width:260px}[data-equatio-balloon-length="xlarge"]:after{width:90vw}@media screen and (min-width: 768px){[data-equatio-balloon-length="xlarge"]:after{width:380px}}[data-equatio-balloon-length="fit"]:after{width:100%}\n',
      ""
    ]);
  },
  392: function (e, t, o) {
    var r = o(173),
      n = ("string" == typeof r && (r = [[e.i, r, ""]]), {});
    (n.insert = "head"), (n.singleton = !1), o(102)(r, n);
    r.locals && (e.exports = r.locals);
  },
  4: function (T, e, t) {
    "use strict";
    t.d(e, "F", function () {
      return u;
    }),
      t.d(e, "z", function () {
        return c;
      }),
      t.d(e, "h", function () {
        return d;
      }),
      t.d(e, "q", function () {
        return m;
      }),
      t.d(e, "w", function () {
        return p;
      }),
      t.d(e, "hb", function () {
        return f;
      }),
      t.d(e, "a", function () {
        return h;
      }),
      t.d(e, "O", function () {
        return b;
      }),
      t.d(e, "v", function () {
        return g;
      }),
      t.d(e, "I", function () {
        return y;
      }),
      t.d(e, "i", function () {
        return w;
      }),
      t.d(e, "L", function () {
        return x;
      }),
      t.d(e, "x", function () {
        return v;
      }),
      t.d(e, "Y", function () {
        return L;
      }),
      t.d(e, "Z", function () {
        return q;
      }),
      t.d(e, "u", function () {
        return M;
      }),
      t.d(e, "N", function () {
        return j;
      }),
      t.d(e, "e", function () {
        return k;
      }),
      t.d(e, "p", function () {
        return C;
      }),
      t.d(e, "X", function () {
        return I;
      }),
      t.d(e, "gb", function () {
        return S;
      }),
      t.d(e, "bb", function () {
        return E;
      }),
      t.d(e, "db", function () {
        return N;
      }),
      t.d(e, "eb", function () {
        return _;
      }),
      t.d(e, "S", function () {
        return A;
      }),
      t.d(e, "Q", function () {
        return R;
      }),
      t.d(e, "b", function () {
        return D;
      }),
      t.d(e, "P", function () {
        return z;
      }),
      t.d(e, "ib", function () {
        return U;
      }),
      t.d(e, "g", function () {
        return O;
      }),
      t.d(e, "M", function () {
        return P;
      }),
      t.d(e, "B", function () {
        return G;
      }),
      t.d(e, "G", function () {
        return Z;
      }),
      t.d(e, "D", function () {
        return W;
      }),
      t.d(e, "V", function () {
        return F;
      }),
      t.d(e, "r", function () {
        return H;
      }),
      t.d(e, "W", function () {
        return J;
      }),
      t.d(e, "f", function () {
        return Q;
      }),
      t.d(e, "y", function () {
        return B;
      }),
      t.d(e, "t", function () {
        return X;
      }),
      t.d(e, "E", function () {
        return Y;
      }),
      t.d(e, "C", function () {
        return V;
      }),
      t.d(e, "s", function () {
        return K;
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
        return oe;
      }),
      t.d(e, "fb", function () {
        return re;
      }),
      t.d(e, "n", function () {
        return ne;
      }),
      t.d(e, "U", function () {
        return ae;
      }),
      t.d(e, "m", function () {
        return ie;
      }),
      t.d(e, "d", function () {
        return se;
      }),
      t.d(e, "A", function () {
        return le;
      }),
      t.d(e, "T", function () {
        return ue;
      }),
      t.d(e, "k", function () {
        return ce;
      }),
      t.d(e, "H", function () {
        return de;
      }),
      t.d(e, "o", function () {
        return me;
      }),
      t.d(e, "c", function () {
        return pe;
      }),
      t.d(e, "l", function () {
        return fe;
      }),
      t.d(e, "ab", function () {
        return he;
      }),
      t.d(e, "R", function () {
        return be;
      });
    var e = t(3),
      o = t.n(e),
      e = t(7),
      r = t.n(e),
      e = t(1),
      n = t.n(e),
      a = t(0);
    function i(t, e) {
      var o,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((o = Object.getOwnPropertySymbols(t)),
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, o)),
        r
      );
    }
    function s(t) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? i(Object(o), !0).forEach(function (e) {
              r()(t, e, o[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
          : i(Object(o)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
            });
      }
      return t;
    }
    const l = (n, e = {}) =>
        new Promise((o, r) => {
          chrome.runtime.sendMessage(
            "hjngolefdpdnooamgdldlkjgmdcmcjnc",
            s(
              {
                action: n
              },
              e
            ),
            ({ success: e, failure: t } = {}) =>
              chrome.runtime.lastError
                ? (console.error("Action failed:", n, chrome.runtime.lastError.message), r(chrome.runtime.lastError))
                : t
                ? (console.error("Action failed:", n, t), r(new Error(t)))
                : o(e)
          );
        }),
      u = () => l("load"),
      c = () => l(a.a.InjectDocsRequirements),
      d = (e = !1) =>
        l(a.a.EnsureLoggedIntoFirebase, {
          forceLogin: e
        }),
      m = () => l(a.a.GetLicense),
      p = () => l(a.a.GetUserSettings),
      f = (e, t, o) =>
        l(a.a.UpdateUserSettings, {
          options: e,
          profile: t,
          customOptions: o
        }),
      h = (e) =>
        l(a.a.AddFavourites, {
          items: e
        }),
      b = (e) =>
        l(a.a.RemoveFavourites, {
          item: e
        }),
      g = () => l(a.a.GetUserFavourites),
      y = () => l(a.a.MergeFirebaseFavourites),
      w = (e) =>
        l(a.a.EnterProductCode, {
          code: e
        }),
      x = (e, t) =>
        l(a.a.OpenGoogleFormsPicker, {
          url: e,
          picker: t
        }),
      v = (e) =>
        l(a.a.GoogleFormsPickerLoaded, {
          location: e
        }),
      L = (e) =>
        l(a.a.SetProfileType, {
          type: e
        }),
      q = (e = !1) =>
        l(a.a.SetShowEquatioOnFirstRun, {
          value: e
        }),
      M = () => l(a.a.GetShouldShowEquatioOnFirstRun),
      j = (e, t = null) =>
        l(a.a.RegisterCompanionAppTarget, {
          platform: e,
          hostname: t
        }),
      k = () => l(a.a.DisconnectCompanionDoc),
      C = () => l(a.a.GetHandwritingCount),
      I = (e) =>
        l(a.a.SetHandwritingCount, {
          count: e
        }),
      S = (e) =>
        l(a.a.UpdateGoogleSheetEquations, {
          spreadsheetId: e
        }),
      E = () => l(a.a.ShowHandwritingExceededReminder),
      N = () => l(a.a.ShowPredictionReminder),
      _ = () => l(a.a.ShowReviewReminder),
      A = (e) =>
        l(a.a.SendAnalyticsScreen, {
          screenName: e
        }),
      R = (e, t = 0, o) =>
        l(a.a.SendAnalyticsEvent, {
          category: e,
          value: t,
          customParams: o
        }),
      D = () => l(a.a.CaptureScreenshot),
      z = (e) =>
        l(a.a.ScanMathpixOcr, {
          base64: e
        }),
      U = (e, t) =>
        l(a.a.UploadImageToProxy, {
          url: e,
          base64: t
        }),
      O = () => l(a.a.DismissReviewReminder),
      P = (function () {
        var t = o()(
          n.a.mark(function e(t) {
            var o, r;
            return n.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = window.location.href),
                      (e.next = 3),
                      l(a.a.OpenMathspace, {
                        platformIntegrationId: t,
                        windowUrl: r
                      })
                    );

                  case 3:
                    (o = e.sent),
                      (r = () => {
                        l(a.a.MathspaceTabClosed, {
                          msTabId: o
                        });
                      }),
                      window.addEventListener("beforeunload", r);

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
      G = () => l(a.a.InjectWebPageToolbar),
      Z = (e) =>
        l(a.a.MathDiscovered, {
          value: e
        }),
      W = () => l(a.a.IsDiscoverabilityFirstTime),
      F = (e) =>
        l(a.a.SetDiscoverabilityEnabled, {
          value: e
        }),
      H = () => l(a.a.GetMathDiscoverability),
      J = (e) =>
        l(a.a.DiscoverabilitySessionDisable, {
          disabled: e
        }),
      Q = (e) =>
        l(a.a.DismissGSuiteMathDiscover, {
          options: e
        }),
      B = () => l(a.a.HasGSuiteDiscoverOverlayShown),
      X = () => l(a.a.GetPlatformOs),
      Y = () => l(a.a.IsLockedForms),
      V = (e, t, o, r) =>
        l(a.a.InsertImageGoogleApi, {
          url: e,
          width: t,
          height: o,
          additionalOptions: r
        }),
      K = () => l(a.a.GetMolecularFilter),
      $ = (e = null, t = {}) =>
        l(a.a.ShowInfoPopup, {
          popupType: e,
          options: t
        }),
      ee = (e, t = !1) =>
        l(a.a.OfficeAddToClipboard, {
          content: e,
          isText: t
        }),
      te = (e) =>
        l(a.a.ExtractLatexFromUrl, {
          url: e
        }),
      oe = (e) =>
        l(a.a.OfficeCanUseApp, {
          appName: e
        }),
      re = (function () {
        var e = o()(
          n.a.mark(function e() {
            return n.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt("return", l(a.a.SwitchAccount));

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
      ne = () => l(a.a.GetDisplayEmail),
      ae = (e, t) =>
        l(a.a.SetCanShowClipboardPopup, {
          value: e,
          copyBtn: t
        }),
      ie = (e) =>
        l(a.a.GetCanShowClipboardPopup, {
          copyBtn: e
        }),
      se = (e, t) =>
        l(a.a.CreateSpeechServerData, {
          text: e,
          options: t
        }),
      le = (e = !1) =>
        l(a.a.InjectHtmlEditorApi, {
          fromToolbar: e
        }),
      ue = (e, t, o = !1, r = null) =>
        l(a.a.HtmlEditorApiAction, {
          command: e,
          value: t,
          fromEditor: o,
          targetFrame: r
        }),
      ce = () => l(a.a.FireDatadeskUpdate),
      de = (function () {
        var t = o()(
          n.a.mark(function e(t) {
            return n.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return e.abrupt(
                      "return",
                      l(a.a.MathSolverFetch, {
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
      me = () => l(a.a.GetFormsApiPermission),
      pe = (e) =>
        l(a.a.CreateFormsQuestions, {
          questions: e
        }),
      fe = (e) =>
        l(a.a.GenerateMathQuestions, {
          options: e
        }),
      he = () => l(a.a.ShowFormsGeneratorUi),
      be = (e, t, o, r) => {
        let n = "";
        return (
          window && window.location && (n = window.location.href),
          l(a.a.SendAnalyticsEventGa4, {
            name: e,
            category: t,
            feature: o,
            eventProps: r,
            url: n
          })
        );
      };
  },
  409: function (T, e, a) {
    "use strict";
    a.r(e);
    var e = a(3),
      j = a.n(e),
      e = a(1),
      k = a.n(e),
      e = a(298),
      z = a.n(e),
      d = a(44),
      C = (a(390), a(4)),
      e = a(299),
      U = a.n(e),
      e = a(300),
      O = a.n(e),
      m = a(28);
    const t = window.location.pathname;
    if (t.endsWith("/picker") || t.includes("/picker/")) {
      const x = () => {
          const e = document.getElementById("equatio-error-overlay");
          e && document.body.removeChild(e);
        },
        v = (e) => {
          const t = document.createElement("div"),
            o =
              ((t.id = "equatio-error-overlay"),
              (t.innerHTML = `<img src='${U.a}' class='equatio-error-overlay__image'><h2 class='equatio-error-overlay__title'>Uh oh!</h2><p class='equatio-error-overlay__description'>There was a problem inserting the math into the Google App. Copy the address below into the &quot;By URL&quot; tab to continue:</p><p class='equatio-error-overlay__url'><input id='equatio-target-url' class='equatio-error-overlay__url__input' value='${e}'><button class='equatio-error-overlay__url__button' data-clipboard-target='#equatio-target-url'><img src='${O.a}' height='20'></button></p>`),
              document.createElement("button")),
            r =
              ((o.className = "equatio-button"),
              (o.textContent = "Continue"),
              o.addEventListener("click", () => {
                x();
              }),
              t.appendChild(o),
              document.body.appendChild(t),
              document.querySelector(".equatio-error-overlay__url__button")),
            n = new z.a(r);
          n.on("success", () => {
            r.setAttribute("data-equatio-balloon-visible", ""),
              r.setAttribute("data-equatio-balloon", "Copied!"),
              r.setAttribute("data-equatio-balloon-pos", "up"),
              setTimeout(() => {
                r.removeAttribute("data-equatio-balloon");
              }, 5e3);
          });
        },
        q = () => {
          const e = document.createElement("div");
          (e.id = "equatio-automation-overlay"), (e.innerHTML = "Making Math"), document.body.appendChild(e);
        },
        M = () => {
          const e = document.getElementById("equatio-automation-overlay");
          e && document.body.removeChild(e);
        },
        A = (r) => {
          const e = Array.from(document.querySelectorAll("label")).filter((t) => d.d.some((e) => e === t.textContent)),
            t =
              (e.length &&
                r({
                  parentElement: e[0].parentNode.parentNode.parentNode,
                  id: e[0].getAttribute("for")
                }),
              Array.from(document.querySelectorAll("input")).filter(
                (t) => d.d.some((e) => e === t.getAttribute("aria-label")) || d.e.some((e) => e === t.getAttribute("aria-label"))
              )),
            n =
              (t.length &&
                r({
                  inputUrl: t[0]
                }),
              new MutationObserver((e) => {
                if (e.length && e[0].addedNodes[0] && e[0].addedNodes[0].querySelectorAll) {
                  const t = Array.from(e[0].addedNodes[0].querySelectorAll("label")).filter((t) => d.d.some((e) => e === t.textContent)),
                    o =
                      (t.length &&
                        (r({
                          parentElement: e[0].addedNodes[0],
                          id: t[0].getAttribute("for")
                        }),
                        n.disconnect()),
                      Array.from(document.querySelectorAll("input")).filter(
                        (t) => d.d.some((e) => e === t.getAttribute("aria-label")) || d.e.some((e) => e === t.getAttribute("aria-label"))
                      ));
                  o.length &&
                    (r({
                      inputUrl: o[0]
                    }),
                    n.disconnect());
                }
              }));
          n.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        },
        R = (e, t) => {
          if ("false" === e.getAttribute("aria-disabled")) setTimeout(t, 500);
          else {
            const o = new MutationObserver((e) => {
              e.some((e) => "aria-disabled" === e.attributeName && "false" === e.target.getAttribute("aria-disabled")) &&
                (t(), o.disconnect());
            });
            o.observe(e, {
              attributes: !0,
              characterData: !0
            });
          }
        },
        D = (e, t) => {
          if ("false" === e.getAttribute("aria-disabled")) setTimeout(t, 500);
          else {
            const o = new MutationObserver((e) => {
              e.some((e) => "aria-disabled" === e.attributeName && null === e.target.getAttribute("aria-disabled")) &&
                (t(), o.disconnect());
            });
            o.observe(e, {
              attributes: !0,
              characterData: !0
            });
          }
        };
      let c;
      const oe = (u) => {
        x(),
          c && clearTimeout(c),
          (c = setTimeout(() => {
            M(), v(u);
          }, 1e4)),
          q(),
          setTimeout(() => {
            const e = Array.from(document.querySelectorAll("[role='tab']")).filter((t) => d.i.some((e) => e === t.textContent));
            0 < e.length && Object(m.a)(e[0]);
          }, 200),
          setTimeout(() => {
            const e = Array.from(document.querySelectorAll("[role='tab']")),
              t = e.filter(
                (t) => d.b.some((e) => e === t.textContent) || d.c.some((e) => e === t.textContent) || d.a.some((e) => e === t.textContent)
              );
            0 < t.length ? Object(m.a)(t[0]) : 3 <= e.length && Object(m.a)(e[2]),
              A((e) => {
                const t = e.inputUrl,
                  o = e.parentElement;
                if (o) {
                  const a = Array.from(o.querySelectorAll("[role='button']")).filter((t) => d.h.some((e) => e === t.textContent)),
                    i = a[a.length - 1];
                  R(i, () => {
                    Object(m.a)(i), M(), clearTimeout(c);
                  });
                } else Object(m.a)(t), M(), clearTimeout(c);
                const r = e.id,
                  n = r ? document.getElementById(r) : t;
                if (
                  ((n.value = u + " "),
                  setTimeout(() => {
                    n.focus(), (n.selectionStart = 1e4), (n.selectionEnd = 1e4);
                  }, 500),
                  setTimeout(() => {
                    document.execCommand("delete");
                  }, 700),
                  t)
                ) {
                  const s = Array.from(document.querySelectorAll("div[role=button]")).filter((t) =>
                    d.f.some((e) => e === t.getAttribute("aria-label"))
                  );
                  if (s.length) {
                    const l = s[0];
                    D(l, () => {
                      Object(m.a)(l);
                    });
                  }
                }
              });
          }, 500);
      };
      Object(C.x)(window.location.href),
        chrome.runtime.onMessage.addListener((e) => {
          "targetWindow" in e && window.location.href === e.targetWindow && "open_url" === e.action && oe(e.url);
        });
    }
    a(392);
    var e = a(157),
      I = a.n(e);
    let o;
    const l = () => {
      window.removeEventListener("message", o);
      const e = document.querySelector(".equatio-toolbar-wrapper");
      e.style.display = "none";
    };
    let r;
    const P = (t) => ["https://equatio-api.texthelp.com/", "https://equatio-api.dev.texthelp.com/"].some((e) => t.startsWith(e)),
      G = (t) =>
        [
          "https://equatio.s3.amazonaws.com/desmos/temporary/",
          "https://equatio-api.dev.texthelp.com/desmos/",
          "https://equatio-api.texthelp.com/desmos/"
        ].some((e) => t.startsWith(e));
    var S = () =>
        new Promise((s, e) => {
          "function" == typeof r && r(),
            (r = e),
            window.removeEventListener("message", o),
            (o = (e) => {
              if (e.source === window) {
                if (e.data && "EQUATIO_INSERT_MATH_FORMS" === e.data.action) {
                  l();
                  const t = e.data,
                    o = t.latex,
                    r = t.width,
                    n = t.height;
                  s({
                    latex: o,
                    width: r,
                    height: n
                  });
                }
                if (e.data && "EQUATIO_INSERT_GRAPH_FORMS" === e.data.action) {
                  l();
                  const a = e.data.url;
                  if (!P(a)) return;
                  s({
                    url: a
                  });
                }
                if (e.data && "EQUATIO_INSERT_IMAGE_FORMS" === e.data.action) {
                  l();
                  const i = e.data.url;
                  G(i) &&
                    s({
                      url: i
                    });
                }
              }
            }),
            window.addEventListener("message", o);
          const t = document.querySelector(".equatio-toolbar-wrapper");
          (t && t.offsetParent) || Object(C.F)();
        }),
      E = a(158),
      N = (r) =>
        new Promise((o) => {
          chrome.storage.local.get("formsFallback", ({ formsFallback: e }) => {
            if (chrome.runtime.lastError || !e) return o();
            const t = e.version;
            return "number" != typeof t || r >= t ? o() : o(e);
          });
        }),
      Z = void 0;
    function _(e, t) {
      var o,
        r,
        n,
        a,
        i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (i)
        return (
          (r = !(o = !0)),
          {
            s: function () {
              i = i.call(e);
            },
            n: function () {
              var e = i.next();
              return (o = e.done), e;
            },
            e: function (e) {
              (r = !0), (n = e);
            },
            f: function () {
              try {
                o || null == i.return || i.return();
              } finally {
                if (r) throw n;
              }
            }
          }
        );
      if (Array.isArray(e) || (i = W(e)) || (t && e && "number" == typeof e.length))
        return (
          i && (e = i),
          (a = 0),
          {
            s: (t = function () {}),
            n: function () {
              return a >= e.length
                ? {
                    done: !0
                  }
                : {
                    done: !1,
                    value: e[a++]
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
    function W(e, t) {
      var o;
      if (e)
        return "string" == typeof e
          ? n(e, t)
          : "Map" === (o = "Object" === (o = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : o) ||
            "Set" === o
          ? Array.from(e)
          : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? n(e, t)
          : void 0;
    }
    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
      return r;
    }
    var F = j()(
        k.a.mark(function e() {
          var a, f, r, s, n, l, i, u, c, d, m, p, h, b, g, y, w, x, v, L, q, M, t;
          return k.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  (a = window.location.pathname),
                    window.top === window.self &&
                      a.includes("/forms/") &&
                      a.endsWith("/edit") &&
                      ((f = E),
                      (r = (e) => {
                        const t = (e, t) => {
                          const o = new MouseEvent(t, {
                            bubbles: !0,
                            cancelable: !0
                          });
                          e.dispatchEvent(o);
                        };
                        t(e, "mousedown"), t(e, "mouseup"), t(e, "click");
                      }),
                      (s = (e, t) => {
                        e.value = t + " ";
                        const o = new InputEvent("input", {
                          bubbles: !0,
                          cancelBubble: !1,
                          cancelable: !1,
                          composed: !0,
                          currentTarget: e,
                          data: t,
                          dataTransfer: null,
                          defaultPrevented: !1,
                          detail: 0,
                          eventPhase: 3,
                          inputType: "insertText",
                          isComposing: !1,
                          isTrusted: !0
                        });
                        e.dispatchEvent(o);
                      }),
                      (i = new Map()),
                      (u = (e, t, o) => {
                        i.get(e) && o(), (n = o), (l = e);
                      }),
                      (c = (e, t, o) => {
                        r(e),
                          u(t, window.location.href, () => {
                            Object(C.L)(o, i.get(t));
                          });
                      }),
                      (d = (t) =>
                        ["https://equatio-api.texthelp.com/", "https://equatio-api.dev.texthelp.com/"].some(
                          (e) => t.includes && t.includes(e)
                        )),
                      (m = (e, t, o) => {
                        if (d(t)) {
                          const r = e,
                            n = ((r.value = t), (r.dataset.initialValue = t), document.createElement("img")),
                            a = ((n.src = o || t), (n.className = "equatio-answer-image"), 200),
                            i =
                              ((n.style.maxWidth = a + "px"),
                              (n.style.maxHeight = a + "px"),
                              (r.style.display = "none"),
                              r.parentNode.appendChild(n, r),
                              r.parentNode.querySelector(".equatio-form-inject-button"));
                          i && i.remove(), s(r, t);
                        }
                      }),
                      chrome.runtime.onMessage.addListener((e) => {
                        "image_dialog_loaded" === e.action && (i.set(l, e.pickerWindow), n.call(Z), (n = l = null));
                      }),
                      (p = (a, i) => {
                        a.addEventListener("click", () => {
                          l !== a && u(a, window.location.href, () => {});
                        });
                        const e = document.createElement("div");
                        (e.className = "equatio-form-inject-button"),
                          e.addEventListener("click", () => {
                            j()(
                              k.a.mark(function e() {
                                var t, o, r, n;
                                return k.a.wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), S();

                                      case 2:
                                        (n = e.sent),
                                          (t = n.url || "https://equatio-api.texthelp.com/png/" + encodeURIComponent(n.latex)),
                                          (o = n.url || "https://equatio-api.texthelp.com/svg/" + encodeURIComponent(n.latex)),
                                          (r = n.width),
                                          (n = n.height),
                                          i
                                            ? (r && n && (o += `?width=${r}&height=` + n), m(a, t, o))
                                            : (r && n && (t += `?width=${r}&height=` + n), c(a, a, t));

                                      case 7:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            )();
                          }),
                          (e.style.position = "relative");
                        let t = 0;
                        return (
                          (t = i
                            ? ((e.style.cssText = ""), 0)
                            : ((e.style.cssText = `display: inline-block;
                vertical-align: middle;
                width: 24px;
                height: 48px;`),
                              "-6px")),
                          (e.innerHTML = `<button type="button" style="width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;position: relative; top: ${t};title="Insert Math"><img src="${I.a}"></button>`),
                          e
                        );
                      }),
                      (g = (function () {
                        var t = j()(
                          k.a.mark(function e(t) {
                            var o, r, n;
                            return k.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (e.prev = 0), (e.next = 3), fetch(t);

                                    case 3:
                                      return (o = e.sent), (e.next = 6), o.text();

                                    case 6:
                                      if (
                                        ((o = e.sent),
                                        (r = new DOMParser()),
                                        (r = r.parseFromString(o, "image/svg+xml")),
                                        (n = f.fallbackImageCss.svgPath),
                                        (r = r.querySelector(n)) && r.parentNode)
                                      ) {
                                        e.next = 13;
                                        break;
                                      }
                                      return e.abrupt("return");

                                    case 13:
                                      (n = `-${r.parentNode.transform.baseVal[0].matrix.f}px`), (b = n), (e.next = 19);
                                      break;

                                    case 17:
                                      (e.prev = 17), (e.t0 = e.catch(0));

                                    case 19:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 17]]
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (y = (function () {
                        var t = j()(
                          k.a.mark(function e(t) {
                            var o, r, n, a, i, s, l, u, c, d, m;
                            return k.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      (e.prev = 0),
                                        (o = f.fallbackImageCss.cssEle),
                                        (o = t.querySelectorAll(o)),
                                        (r = new Set()),
                                        (n = []),
                                        (a = _(o));
                                      try {
                                        for (a.s(); !(i = a.n()).done; )
                                          (s = i.value),
                                            (l = getComputedStyle(s, "::before")),
                                            (u = l.content) &&
                                              u.includes("http") &&
                                              u.includes(".svg") &&
                                              ((c = u.indexOf("http")),
                                              (d = u.indexOf(".svg") + 4),
                                              (m = u.substring(c, d)),
                                              r.has(m) || (r.add(m), n.push(g(m))));
                                      } catch (e) {
                                        a.e(e);
                                      } finally {
                                        a.f();
                                      }
                                      return (e.next = 9), Promise.all(n);

                                    case 9:
                                      e.next = 13;
                                      break;

                                    case 11:
                                      (e.prev = 11), (e.t0 = e.catch(0));

                                    case 13:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (w = (function () {
                        var t = j()(
                          k.a.mark(function e(t) {
                            var o, r, n, a, i, s, l, u, c, d, m, p;
                            return k.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (
                                      ((a = f.fallbackImageCss),
                                      (o = a.cssTop),
                                      (r = a.cssEle),
                                      (n = a.closestImgButton),
                                      (a = t.querySelectorAll(r)),
                                      (i = []),
                                      h)
                                    )
                                      return (e.next = 6), h;
                                    e.next = 6;
                                    break;

                                  case 6:
                                    (s = b || o), (l = _(a));
                                    try {
                                      for (l.s(); !(u = l.n()).done; )
                                        (c = u.value),
                                          (d = getComputedStyle(c)),
                                          (m = d.top),
                                          (p = c.closest(n)),
                                          m === s && p && i.push(p);
                                    } catch (e) {
                                      l.e(e);
                                    } finally {
                                      l.f();
                                    }
                                    return e.abrupt("return", i);

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()),
                      (x = null),
                      (v = (t) => {
                        const e = f,
                          o = e.imageButtons,
                          r = e.imageButtonParentFilter,
                          n = (e) => {
                            e.forEach((e) => {
                              if (
                                !(
                                  e.parentNode.querySelector(".equatio-form-inject-button") ||
                                  (e.parentNode && e.parentNode.getAttribute(r.attribute) === r.value)
                                )
                              ) {
                                const t = p(e);
                                e.parentNode.prepend(t);
                              }
                            });
                          },
                          a = t.querySelectorAll(o.en);
                        if (a && a.length) n(a);
                        else {
                          const i = document,
                            s = i.documentElement,
                            l = s && s.lang ? s.lang : x;
                          if (l && "string" == typeof l && o[l]) {
                            const u = t.querySelectorAll(o[l]);
                            if (u.length) return void n(u);
                          }
                          if (!l) {
                            const c = Object.keys(o);
                            for (let e = 0; e < c.length; e++) {
                              const d = c[e],
                                m = t.querySelectorAll(o[d]);
                              if (m && m.length) return (x = d), void n(m);
                            }
                          }
                          w(t).then((e) => {
                            e.length && n(e);
                          });
                        }
                      }),
                      (L = (a, i) => {
                        i.length &&
                          (i.forEach((e, t) => {
                            if (d(e.trim())) {
                              const o = document.createElement("img");
                              (o.src = e.trim()),
                                (o.style.maxWidth = "400px"),
                                (o.style.verticalAlign = "middle"),
                                (o.style.margin = "2px 5px"),
                                a.parentNode.appendChild(o);
                            } else {
                              const r = document.createElement("span");
                              (r.textContent = e), a.parentNode.appendChild(r);
                            }
                            if (t !== i.length - 1) {
                              const n = document.createElement("span");
                              (n.textContent = ","), a.parentNode.appendChild(n);
                            }
                          }),
                          (a.textContent = ""));
                      }),
                      (q = (e) => {
                        const t = f,
                          o = t.answerKeyDisplay,
                          r = e.querySelectorAll(o);
                        r.forEach((e) => {
                          if (e.nextSibling && e.nextSibling.textContent && e.nextSibling.textContent.includes("texthelp.com")) {
                            const t = e.nextSibling.textContent.split(",");
                            L(e.nextSibling, t);
                          }
                        });
                      }),
                      (M = (e) => {
                        const t = f,
                          o = t.answerKeyInput,
                          r = e.querySelectorAll(o);
                        r.forEach((e) => {
                          const t = e.parentNode.querySelectorAll(".equatio-form-inject-button, .equatio-answer-image");
                          if (!t || !t.length) {
                            const o = e.getAttribute("data-initial-value") || e.textContent;
                            if (o && d(o)) m(e, o, o);
                            else {
                              const r = p(e, !0);
                              e.parentNode.append(r);
                            }
                          }
                        });
                      }),
                      (t = (function () {
                        var e = j()(
                          k.a.mark(function e() {
                            var t, o, r, n;
                            return k.a.wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), N(f.version);

                                  case 2:
                                    if (((t = e.sent), (t = (f = t ? t : f).questionsRoot), (o = document.querySelector(t)))) {
                                      e.next = 10;
                                      break;
                                    }
                                    if (a.endsWith("/edit")) {
                                      e.next = 9;
                                      break;
                                    }
                                    return e.abrupt("return");

                                  case 9:
                                    o = document.body;

                                  case 10:
                                    h = y(o);
                                    try {
                                      v(o), q(o);
                                    } catch (e) {}
                                    (n = () => {
                                      const e = new MutationObserver((e, t) => {
                                        r && clearTimeout(r),
                                          (r = setTimeout(() => {
                                            t.disconnect();
                                            try {
                                              v(o), M(o), q(o);
                                            } catch (e) {
                                              console.error(e);
                                            }
                                            n();
                                          }, 100));
                                      });
                                      e.observe(o, {
                                        childList: !0,
                                        subtree: !0
                                      });
                                    })();

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })()),
                      "complete" === document.readyState ? t() : window.addEventListener("load", t));

                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      ),
      e = a(7),
      H = a.n(e),
      e = a(21),
      J = a.n(e),
      e = a(77),
      h = a.n(e),
      e = a(301),
      Q = a.n(e),
      B = a(10);
    function X(e, t) {
      var o,
        r,
        n,
        a,
        i = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (i)
        return (
          (r = !(o = !0)),
          {
            s: function () {
              i = i.call(e);
            },
            n: function () {
              var e = i.next();
              return (o = e.done), e;
            },
            e: function (e) {
              (r = !0), (n = e);
            },
            f: function () {
              try {
                o || null == i.return || i.return();
              } finally {
                if (r) throw n;
              }
            }
          }
        );
      if (Array.isArray(e) || (i = Y(e)) || (t && e && "number" == typeof e.length))
        return (
          i && (e = i),
          (a = 0),
          {
            s: (t = function () {}),
            n: function () {
              return a >= e.length
                ? {
                    done: !0
                  }
                : {
                    done: !1,
                    value: e[a++]
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
    function Y(e, t) {
      var o;
      if (e)
        return "string" == typeof e
          ? i(e, t)
          : "Map" === (o = "Object" === (o = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : o) ||
            "Set" === o
          ? Array.from(e)
          : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? i(e, t)
          : void 0;
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
      return r;
    }
    function s(t, e) {
      var o,
        r = Object.keys(t);
      return (
        Object.getOwnPropertySymbols &&
          ((o = Object.getOwnPropertySymbols(t)),
          e &&
            (o = o.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
          r.push.apply(r, o)),
        r
      );
    }
    function b(t) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? s(Object(o), !0).forEach(function (e) {
              H()(t, e, o[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
          : s(Object(o)).forEach(function (e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
            });
      }
      return t;
    }
    const u = (e) => {
        e.dispatchEvent(
          new Event("input", {
            bubbles: !0,
            cancelable: !0
          })
        );
      },
      L = (e, t, o) => {
        if ("textarea" === e.tagName.toLowerCase()) (e.parentNode.previousSibling.style.display = o), (e.value = t), u(e);
        else {
          const r = e.querySelector("input"),
            n = ((r.value = t), u(r), e.querySelector("input[type='hidden']"));
          n && (e.setAttribute("data-initial-value", t), (n.value = t), u(e));
        }
      };
    let c;
    const V = () => !!document.querySelector(".equatio-toolbar-wrapper"),
      p = () => {
        const e = document.querySelector(".equatio-toolbar-wrapper");
        return !!e && !!e.offsetParent;
      },
      K = () =>
        p()
          ? (c = Promise.resolve())
          : V()
          ? ((document.querySelector(".equatio-toolbar-wrapper").style.display = "block"), (c = Promise.resolve()))
          : ((c = new Promise((e, t) => {
              const o = setTimeout(() => {
                  t();
                }, 1e4),
                r = new MutationObserver(() => {
                  p() && (clearTimeout(o), setTimeout(() => e(), 500), r.disconnect());
                });
              r.observe(document.body, {
                childList: !0
              });
            })),
            Object(C.F)(),
            c),
      g = (e) => {
        e.url
          ? window.postMessage(
              {
                action: "EQUATIO_PARTNER_EXTRACT_URL",
                url: e.url
              },
              window.location.origin
            )
          : window.postMessage(
              {
                action: "EQUATIO_CHROME_EXTRACT_MATH",
                latex: e
              },
              window.location.origin
            );
      },
      $ = () => {
        const e = document.createElement("style");
        (e.innerHTML = `.quantumWizToastEl.quantumWizToastElLeftAligned.toast.quantumWizToastMultiLine.quantumWizToastOnScreen {
        bottom: 53px;
        z-index: 10;
    }`),
          document.body.appendChild(e);
      };
    var ee = j()(
      k.a.mark(function e() {
        var o, x, v, s, u, f, n, l, r, t;
        return k.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                window.top === window.self &&
                  Object(B.d)() &&
                  ((o = E),
                  $(),
                  (x = "https://equatio-api.texthelp.com"),
                  (v = (e, t, o) => {
                    const r = document.createElement("button");
                    return (
                      r.addEventListener("click", () => {
                        L(e, "", "block"),
                          r.parentNode.removeChild(r),
                          t.parentNode.removeChild(t),
                          (e.style.display = "block"),
                          o.removeAttribute("data-related-image");
                      }),
                      (r.className = "equatio-form-clear-button"),
                      (r.type = "button"),
                      (r.style.cssText =
                        "margin-left: 4px;width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;"),
                      (r.title = "Clear Math"),
                      (r.innerHTML = `<img src="${Q.a}" height="20">`),
                      r
                    );
                  }),
                  (s = []),
                  (u = () => {
                    s.forEach((e) => {
                      try {
                        e.disconnect();
                      } catch (e) {}
                    }),
                      (s = []);
                  }),
                  (f = (e, t, o, r) => {
                    let n = t.url || x + "/svg/" + encodeURIComponent(t.latex || t);
                    const a = t.url || x + "/png/" + encodeURIComponent(t.latex || t),
                      i = t.width,
                      s = t.height,
                      l = t.latex;
                    if ((i && s && (n += `?width=${i}&height=` + s), o)) {
                      const p = document.getElementById(o);
                      if (p) {
                        p.removeAttribute("data-graph-state"),
                          p.removeAttribute("data-latex"),
                          p.removeAttribute("width"),
                          p.removeAttribute("height");
                        const f = l || t,
                          d = (p.setAttribute("data-latex", "string" == typeof f ? f : ""), (p.src = n), 280);
                        if (i) {
                          const h = s < d ? i : i * (d / s);
                          p.setAttribute("width", h + "px");
                        }
                        if (s) {
                          const b = i < d ? s : s * (d / i);
                          p.setAttribute("height", b + "px");
                        }
                        return L(e, a, "none"), o;
                      }
                    }
                    (e.style.display = "none"), L(e, a, "none");
                    const u = document.createElement("div"),
                      c =
                        (e.closest(".freebirdFormviewerViewItemsRadioChoice, .freebirdFormviewerViewItemsCheckboxChoice")
                          ? (u.style.margin = "0 10px")
                          : (u.style.width = "100%"),
                        document.createElement("img"));
                    if (t.state) c.setAttribute("data-graph-state", JSON.stringify(t.state)), c.classList.add("equatio-form-inject-graph");
                    else {
                      const g = t.latex || t;
                      c.setAttribute("data-latex", "string" == typeof g ? g : "");
                    }
                    const d = 280;
                    if (i) {
                      const y = s < d ? i : i * (d / s);
                      c.setAttribute("width", y + "px");
                    }
                    if (s) {
                      const w = i < d ? s : s * (d / i);
                      c.setAttribute("height", w + "px");
                    }
                    (c.id = "equatio-answer-" + new Date().getTime()),
                      (c.src = n),
                      (c.className = "equatio-form-inject-image"),
                      (c.style.maxWidth = d + "px"),
                      u.appendChild(c),
                      e.parentNode.insertBefore(u, e);
                    const m = v(e, u, r);
                    return r.appendChild(m), c.id;
                  }),
                  (n = (s) => {
                    const l = document.createElement("div"),
                      e = document.createElement("button"),
                      t =
                        (e.addEventListener(
                          "click",
                          (function () {
                            var t = j()(
                              k.a.mark(function e(t) {
                                var o, r, n, a, i;
                                return k.a.wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if ((u(), (o = l.getAttribute("data-related-image"))))
                                            return (
                                              (n = document.getElementById(o)),
                                              (r = n.getAttribute("data-latex")),
                                              (n = n.src),
                                              (e.prev = 6),
                                              (e.next = 9),
                                              K()
                                            );
                                          e.next = 14;
                                          break;

                                        case 9:
                                          r && 0 < r.length
                                            ? g(r)
                                            : n &&
                                              g({
                                                url: n
                                              }),
                                            (e.next = 14);
                                          break;

                                        case 12:
                                          (e.prev = 12), (e.t0 = e.catch(6));

                                        case 14:
                                          return (e.prev = 14), (e.next = 17), S();

                                        case 17:
                                          (a = e.sent), (e.next = 23);
                                          break;

                                        case 20:
                                          return (e.prev = 20), (e.t1 = e.catch(14)), e.abrupt("return");

                                        case 23:
                                          Object(C.Q)("Google Forms Response: Insert Image"),
                                            (i = f(s, a, o, l)),
                                            l.setAttribute("data-related-image", i),
                                            t.preventDefault();

                                        case 27:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [
                                    [6, 12],
                                    [14, 20]
                                  ]
                                );
                              })
                            );
                            return function (e) {
                              return t.apply(this, arguments);
                            };
                          })()
                        ),
                        s.tagName && "textarea" !== s.tagName.toLowerCase()),
                      o = t && s.closest("div[role='radiogroup']");
                    return (
                      (l.style.display = "flex"),
                      (l.style["align-items"] = "center"),
                      (l.style["justify-content"] = o ? "right" : "center"),
                      (l.style.margin = "-5px 5px 0 0"),
                      (l.style.position = "relative"),
                      (l.style.top = o ? "-25px" : "-3px"),
                      (l.className = "equatio-answer-button-container"),
                      (e.className = "equatio-form-inject-button"),
                      (e.type = "button"),
                      (e.title = "Insert Math"),
                      (e.style.cssText =
                        "width: 20px;height: 20px;background: #00B7FF;border-radius: 4px;display: flex;align-items: center;justify-content: center;border: 0;padding: 0;cursor: pointer;"),
                      (e.innerHTML = `<img src="${I.a}">`),
                      l.append(e),
                      l
                    );
                  }),
                  (l = (function () {
                    var o = j()(
                      k.a.mark(function e(t, o) {
                        var r, n, a, i, s, l, u, c, d, m, p;
                        return k.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (r = "textarea" === t.tagName.toLowerCase() ? t : t.querySelector("input")).value.includes(
                                    "equatio-api.texthelp.com"
                                  ) ||
                                  r.value.includes("equatio-api.dev.texthelp.com")
                                ) {
                                  if ((i = r.getAttribute("eq-loading")) && "" !== i) return e.abrupt("return");
                                  e.next = 5;
                                } else e.next = 23;
                                break;

                              case 5:
                                r.setAttribute("eq-loading", "true"),
                                  (n = new h.a(r.value, !0)),
                                  (a = "equatio-api.texthelp.com" === n.hostname || "equatio-api.dev.texthelp.com" === n.hostname) &&
                                  (n.pathname.startsWith("/png/") || n.pathname.startsWith("/svg/"))
                                    ? ((i = n.pathname.split("/").splice(2, 1)),
                                      (s = J()(i, 1)),
                                      (s = s[0]),
                                      (u = n.query),
                                      (l = u.width),
                                      (u = u.height),
                                      (s = {
                                        latex: decodeURIComponent(s),
                                        width: parseFloat(l),
                                        height: parseFloat(u)
                                      }),
                                      (e.next = 18))
                                    : (e.next = 14);
                                break;

                              case 14:
                                return (e.next = 16), Object(C.j)(r.value);

                              case 16:
                                (c = e.sent),
                                  (s = !(
                                    (null == c && a && n.pathname.startsWith("/desmos/")) ||
                                    (c && ("desmos" === c.type || "mathspace" === c.type))
                                  )
                                    ? c
                                    : b(
                                        b({}, c),
                                        {},
                                        {
                                          url: r.value
                                        }
                                      ));

                              case 18:
                                (c = f(t, s, void 0, o)),
                                  (d = document.getElementById(c)),
                                  "desmos" === s.type
                                    ? d.setAttribute("data-graph-state", JSON.stringify(s.state))
                                    : ((m = s.latex || s),
                                      d.setAttribute("data-latex", "string" == typeof m ? m : ""),
                                      (m = n.query),
                                      (l = m.width),
                                      (u = m.height),
                                      (m = 280),
                                      l && ((p = u < m ? l : l * (m / u)), d.setAttribute("width", p + "px")),
                                      u && ((p = l < m ? u : u * (m / l)), d.setAttribute("height", p + "px"))),
                                  o.setAttribute("data-related-image", c),
                                  (t.style.display = "none");

                              case 23:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (e, t) {
                      return o.apply(this, arguments);
                    };
                  })()),
                  (r = (a) => {
                    if (
                      (a = "input" === a.tagName.toLowerCase() ? a.parentNode : a).closest(
                        ".freebirdFormviewerViewItemsTimeInput, .freebirdFormviewerViewItemsDateDateSelectionInput"
                      )
                    )
                      return null;
                    if (a.closest(".quantumWizTextinputPaperinputEl.freebirdFormviewerComponentsQuestionTimeTimeInput")) return null;
                    if (a.closest(".freebirdFormviewerViewMelbaContainer")) return null;
                    if ("textarea" !== a.tagName.toLowerCase() && !a.querySelector("input:not([type]), input[type='text']")) return null;
                    const e = a.parentNode.querySelector(".equatio-answer-button-container"),
                      t = a.parentNode.querySelector(".equatio-form-clear-button");
                    if (t) return null;
                    let i;
                    e ? (i = e) : ((i = n(a)), (a.parentNode.parentNode.style.height = "auto"), a.parentNode.appendChild(i));
                    const o = (e, t) => {
                        var o,
                          r = X(e);
                        try {
                          for (r.s(); !(o = r.n()).done; ) {
                            const n = o.value;
                            if ("attributes" === n.type) {
                              if ("data-initial-value" === n.attributeName)
                                return t.disconnect(), (s = s.filter((e) => e !== t)), void l(a, i);
                              if ("disabled" === n.attributeName) return t.disconnect(), void (s = s.filter((e) => e !== t));
                            }
                          }
                        } catch (e) {
                          r.e(e);
                        } finally {
                          r.f();
                        }
                      },
                      r = new MutationObserver(o);
                    return (
                      r.observe(a, {
                        attributes: !0,
                        subtree: !0
                      }),
                      s.push(r),
                      l(a, i),
                      i
                    );
                  }),
                  (t = (function () {
                    var e = j()(
                      k.a.mark(function e() {
                        var t;
                        return k.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), N(o.version);

                              case 2:
                                (t = e.sent) && (o = t), Array.from(document.querySelectorAll(o.responseInputAreas)).forEach(r);

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  "complete" === document.readyState ? t() : window.addEventListener("load", t),
                  chrome.runtime.sendMessage({
                    action: "inject_requirements"
                  }));

              case 1:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
    const f = window.location.pathname;
    var te = j()(
      k.a.mark(function e() {
        var s, l, r, o, n, t;
        return k.a.wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (window.top === window.self && f.includes("/forms/") && (f.endsWith("/edit") || f.endsWith("/viewscore")))
                  return (
                    (window.equatioCoreChunkLoading = "chrome"),
                    (window.equatioCoreBaseUrl = "chrome-extension://hjngolefdpdnooamgdldlkjgmdcmcjnc/"),
                    (e.next = 5),
                    Promise.all([a.e(1), a.e(0), a.e(2), a.e(4), a.e(25)]).then(a.bind(null, 5))
                  );
                e.next = 15;
                break;

              case 5:
                return (
                  (t = e.sent),
                  (s = t.MathRendering),
                  (e.next = 9),
                  Promise.all([a.e(1), a.e(0), a.e(2), a.e(4), a.e(22)]).then(a.bind(null, 33))
                );

              case 9:
                (l = new Map()),
                  (r = (e) => {
                    const a = document.createElement("img");
                    if (((a.src = e.textContent.trim()), a.src.includes("/png/") || a.src.includes("/svg/"))) {
                      const t = h()(a.src),
                        i = t.pathname;
                      j()(
                        k.a.mark(function e() {
                          var t, o, r, n;
                          return k.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = decodeURIComponent(i.split("/").pop())),
                                    (n = l.get(t)) ? ((o = n.width), (r = n.height), (e.next = 13)) : (e.next = 7);
                                  break;

                                case 7:
                                  return (e.next = 9), s.getSvg(t);

                                case 9:
                                  (n = e.sent),
                                    (o = n.width),
                                    (r = n.height),
                                    l.set(t, {
                                      width: o,
                                      height: r
                                    });

                                case 13:
                                  (a.src = "https://equatio-api.texthelp.com/svg/" + encodeURIComponent(t)),
                                    (a.style.width = o + "px"),
                                    (a.style.height = r + "px");

                                case 16:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )();
                    }
                    (a.style.maxWidth = "100%"), e.parentNode.replaceChild(a, e);
                  }),
                  (o = (e) => {
                    const t = e || document.body,
                      o = Array.from(t.querySelectorAll("div")).reduce((e, t) => {
                        const o = Array.from(t.childNodes).filter(
                          (e) =>
                            e.nodeType === Element.TEXT_NODE &&
                            (e.textContent.includes("equatio-api.dev.texthelp.com") ||
                              e.textContent.includes("equatio-api.texthelp.com") ||
                              e.textContent.includes("equatioapi.texthelp.com"))
                        );
                        return e.concat(o);
                      }, []);
                    o.length && o.forEach(r);
                  }),
                  (n = (e) => {
                    const t = e || document.body,
                      o = Array.from(t.querySelectorAll("a")).filter(
                        (e) =>
                          e.textContent.includes("equatio-api.dev.texthelp.com") ||
                          e.textContent.includes("equatio-api.texthelp.com") ||
                          e.textContent.includes("equatioapi.texthelp.com")
                      );
                    o.length && o.forEach(r);
                  }),
                  (t = () => {
                    if (f.endsWith("/viewscore")) o(), n();
                    else {
                      let t = document.querySelector("#ResponsesView");
                      if (t || "#responses" === window.location.hash) {
                        o(t), n(t);
                        const e = () => {
                          const e = new MutationObserver(() => {
                            o(t), n(t);
                          });
                          e.observe(t, {
                            childList: !0,
                            subtree: !0
                          });
                        };
                        e();
                      }
                    }
                  }),
                  "complete" === document.readyState ? t() : window.addEventListener("load", t);

              case 15:
              case "end":
                return e.stop();
            }
        }, e);
      })
    );
    let y;
    const w = (function () {
      var e = j()(
        k.a.mark(function e() {
          var t;
          return k.a.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (y) return e.abrupt("return");
                  e.next = 2;
                  break;

                case 2:
                  return (e.next = 4), Object(C.q)();

                case 4:
                  if (!(t = e.sent) || t.daysleft < 1) return e.abrupt("return");
                  e.next = 7;
                  break;

                case 7:
                  (y = !0), F(), ee(), te();

                case 11:
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
    chrome.runtime.onMessage.addListener(
      (function () {
        var o = j()(
          k.a.mark(function e(t, o) {
            return k.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (o.id !== chrome.runtime.id) return e.abrupt("return");
                    e.next = 2;
                    break;

                  case 2:
                    t && "EQUATIO_CHANGE_USER" === t.action && w();

                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        );
        return function (e, t) {
          return o.apply(this, arguments);
        };
      })()
    ),
      w();
  },
  44: function (e, t, o) {
    "use strict";
    o.d(t, "h", function () {
      return r;
    }),
      o.d(t, "i", function () {
        return n;
      }),
      o.d(t, "b", function () {
        return a;
      }),
      o.d(t, "d", function () {
        return i;
      }),
      o.d(t, "g", function () {
        return s;
      }),
      o.d(t, "c", function () {
        return l;
      }),
      o.d(t, "e", function () {
        return u;
      }),
      o.d(t, "f", function () {
        return c;
      }),
      o.d(t, "a", function () {
        return d;
      });
    const r = [
        "Select",
        "Seleccionar",
        "Selecciona",
        "\u9009\u62e9",
        "Kies",
        "\u0418\u0437\u0431\u0438\u0440\u0430\u043d\u0435",
        "Vybrat",
        "V\xe6lg",
        "Ausw\xe4hlen",
        "\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae",
        "Vali",
        "Valitse",
        "Pumili",
        "S\xe9lectionner",
        "S\xe9lectionner",
        "Seleccionar",
        "Odaberi",
        "Kiv\xe1laszt\xe1s",
        "Pilih",
        "Velja",
        "Seleziona",
        "Pasirinkti",
        "Atlas\u012bt",
        "Selecteren",
        "Velg",
        "Wybierz",
        "Selecionar",
        "Selecionar",
        "Selecta\u021bi",
        "Vybra\u0165",
        "\u0418\u0437\u0430\u0431\u0435\u0440\u0438",
        "V\xe4lj"
      ],
      n = [
        "Upload",
        "Subir",
        "Cargar",
        "Penja",
        "\u4e0a\u4f20",
        "Oplaai",
        "\u041a\u0430\u0447\u0432\u0430\u043d\u0435",
        "Nahr\xe1t",
        "Hochladen",
        "\u039c\u03b5\u03c4\u03b1\u03c6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7",
        "\xdcleslaadimine",
        "L\xe4het\xe4",
        "I-upload",
        "Importer",
        "T\xe9l\xe9verser",
        "Cargar",
        `Prijenos
`,
        "Felt\xf6lt\xe9s",
        "Hla\xf0a inn",
        "Carica",
        "\u012ekelti",
        "Aug\u0161upiel\u0101d\u0113t",
        "Uploaden",
        "Last opp",
        "Prze\u015blij",
        "Carregar",
        "\xcenc\u0103rca\u021bi",
        "Nahra\u0165",
        "\u041e\u0442\u043f\u0440\u0435\u043c\u0430\u045a\u0435",
        "Ladda upp"
      ],
      a = [
        "Mediante URL",
        "URLaren arabera",
        "By URL",
        "De URL",
        "\u901a\u8fc7\u7f51\u5740",
        "\u4f7f\u7528\u7db2\u5740\u4e0a\u50b3",
        "Deur URL",
        "\u041f\u043e URL \u0430\u0434\u0440\u0435\u0441",
        "Podle adresy URL",
        "Efter webadresse",
        "Per URL",
        "\u039a\u03b1\u03c4\u03ac \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL",
        "URL-i j\xe4rgi",
        "URL-osoitteen mukaan",
        "Ayon sa URL",
        "\xc0 partir d'une URL",
        "\xc0 partir d'une URL",
        "Por URL",
        "Prema URL-u",
        "URL-c\xedm haszn\xe1lat\xe1val",
        "Melalui URL",
        "Af sl\xf3\xf0",
        "Tramite URL",
        "I\u0161 URL",
        "P\u0113c\xa0URL",
        "Via URL",
        "Via nettadresse",
        "Z URL-a",
        "Por URL",
        "Dup\u0103 adresa URL",
        "Z\xa0webovej adresy",
        "\u041f\u0440\u0435\u043c\u0430 URL-\u0443",
        "Via webbadress",
        "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c URL",
        "URL ile",
        "\u0417\u0430 URL"
      ],
      i = [
        "Paste URL of image...",
        "Paste an image URL here:",
        "Pega una URL de imagen aqu\xed:",
        "Pega la URL de una imagen aqu\xed:",
        "Pega aqu\xed la URL de una imagen:",
        "Enganxeu l'URL d'una imatge aqu\xed:",
        "\u5728\u6b64\u5904\u7c98\u8d34\u56fe\u7247\u7f51\u5740\uff1a",
        "\u8cbc\u4e0a\u5716\u7247\u7db2\u5740\u2026",
        "Plak 'n prent-URL hier:",
        "\u041f\u043e\u0441\u0442\u0430\u0432\u0435\u0442\u0435 URL \u0430\u0434\u0440\u0435\u0441 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0442\u0443\u043a:",
        "Sem vlo\u017ete adresu URL obr\xe1zku:",
        "Inds\xe6t en billedwebadresse her:",
        "Bild-URL hier einf\xfcgen:",
        "\u0395\u03c0\u03b9\u03ba\u03bf\u03bb\u03bb\u03ae\u03c3\u03c4\u03b5 \u03bc\u03b9\u03b1 \u03b4\u03b9\u03b5\u03cd\u03b8\u03c5\u03bd\u03c3\u03b7 URL \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2 \u03b5\u03b4\u03ce:",
        "Kleepige pildi URL siia:",
        "Liit\xe4 kuvan URL-osoite t\xe4h\xe4n:",
        "I-paste ang URL ng larawan dito:",
        "Coller une URL d'image ici\xa0:",
        "Coller l'URL d'une image ici\xa0:",
        "Pega o URL dunha imaxe aqu\xed:",
        "Ovdje zalijepite URL slike:",
        "M\xe1solja be egy k\xe9p URL-j\xe9t ide:",
        "Tempelkan URL gambar di sini:",
        "L\xedmdu vefsl\xf3\xf0 myndar h\xe9r:",
        "Incolla l'URL di un'immagine qui:",
        "Vaizdo URL \u012fklijuokite \u010dia:",
        "Iel\u012bm\u0113jiet att\u0113la\xa0URL \u0161eit:",
        "Plak hier een afbeeldings-URL:",
        "Lim inn en bildenettadresse her:",
        "Tutaj wklej URL obrazu:",
        "Cole um URL de imagem aqui:",
        "Colar URL da imagem aqui:",
        "Insera\u021bi adresa URL a unei imagini aici:",
        "Tu prilepte webov\xfa adresu obr\xe1zka:",
        "\u041e\u0432\u0434\u0435 \u043d\u0430\u043b\u0435\u043f\u0438\u0442\u0435 URL \u0441\u043b\u0438\u043a\u0435:",
        "Klistra in en bildwebbadress h\xe4r:",
        "\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
        "Resmin URL'sini yap\u0131\u015ft\u0131r\u0131n...",
        "\u0412\u0441\u0442\u0430\u0432\u0442\u0435 URL-\u0430\u0434\u0440\u0435\u0441\u0443 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f\u2026"
      ],
      s = [
        "Image...",
        "Imagen...",
        "\u56fe\u7247...",
        "Prent...",
        "\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435...",
        "Obr\xe1zek...",
        "Billede...",
        "Bild...",
        "\u0395\u03b9\u03ba\u03cc\u03bd\u03b1...",
        "Pilt...",
        "Kuva...",
        "Larawan...",
        "Image...",
        "Image...",
        "Imaxe...",
        "Slika...",
        "K\xe9p...",
        "Gambar...",
        "Mynd...",
        "Immagine ...",
        "Vaizdas...",
        "Att\u0113ls...",
        "Afbeelding...",
        "Bilde...",
        "Obraz...",
        "Imagem...",
        "Imagem...",
        "Imagine...",
        "Obr\xe1zok...",
        "\u0421\u043b\u0438\u043a\u0430...",
        "Bild..."
      ],
      l = [
        "By URL",
        "POR URL",
        "DE URL",
        "\u901a\u8fc7\u7f51\u5740",
        "\u4f7f\u7528\u7db2\u5740\u4e0a\u50b3",
        "DEUR URL",
        "\u041f\u041e URL \u0410\u0414\u0420\u0415\u0421",
        "PODLE ADRESY URL",
        "EFTER WEBADRESSE",
        "PER URL",
        "\u039a\u0391\u03a4\u0391 \u0394\u0399\u0395\u03a5\u0398\u03a5\u039d\u03a3\u0397 URL",
        "URL-I J\xc4RGI",
        "URL-OSOITTEEN MUKAAN",
        "AYON SA URL",
        "\xc0 PARTIR D'UNE URL",
        "\xc0 PARTIR D'UNE URL",
        "POR URL",
        "PREMA URL-U",
        "URL-C\xcdM HASZN\xc1LAT\xc1VAL",
        "MELALUI URL",
        "AF SL\xd3\xd0",
        "TRAMITE URL",
        "I\u0160 URL",
        "P\u0112C\xa0URL",
        "VIA URL",
        "VIA NETTADRESSE",
        "Z URL-A",
        "POR URL",
        "POR URL",
        "DUP\u0102 ADRESA URL",
        "Z\xa0WEBOVEJ ADRESY",
        "\u041f\u0420\u0415\u041c\u0410 URL-\u0423",
        "VIA WEBBADRESS",
        "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c URL",
        "URL ile",
        "\u0417\u0430 URL"
      ],
      u = [
        "insert image",
        "Pega la URL de la imagen\u2026",
        "Pegar URL de imagen\u2026",
        "\u7c98\u8d34\u56fe\u7247\u7684\u7f51\u5740\u2026",
        "Plak URL van prent \u2026",
        "\u041f\u043e\u0441\u0442\u0430\u0432\u0435\u0442\u0435 URL \u0430\u0434\u0440\u0435\u0441\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u0442\u043e...",
        "Vlo\u017ete URL obr\xe1zku...",
        "Inds\xe6t billedets webadresse...",
        "Bild-URL einf\xfcgen\u2026",
        "\u0395\u03c0\u03b9\u03ba\u03cc\u03bb\u03bb\u03b7\u03c3\u03b7 URL \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2\u2026",
        "Kleepige kujutise URL...",
        "Liit\xe4 kuvan URL-osoite\u2026",
        "I-paste ang URL ng larawan...",
        "Coller l'URL de l'image\u2026",
        "Coller l'URL de l'image\u2026",
        "Pega o URL da imaxe\u2026",
        "Zalijepite URL slike...",
        "A k\xe9p URL-c\xedm\xe9nek besz\xfar\xe1sa...",
        "Tempel URL gambar...",
        "L\xedma sl\xf3\xf0 myndar...",
        "Incolla l'URL dell'immagine...",
        "\u012eklijuokite vaizdo URL...",
        "Iel\u012bm\u0113jiet att\u0113la URL...",
        "Plak URL van afbeelding...",
        "Lim inn bildenettadresse.",
        "Wklej adres URL obrazu...",
        "Cole o URL da imagem\u2026",
        "Cole o URL da imagem\u2026",
        "Insera\u021bi adresa URL a imaginii...",
        "Prilepte webov\xfa adresu obr\xe1zka...",
        "\u041d\u0430\u043b\u0435\u043f\u0438\u0442\u0435 URL \u0441\u043b\u0438\u043a\u0435...",
        "Klistra in webbadressen f\xf6r bilden ...",
        "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
        "resim ekle",
        "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"
      ],
      c = [
        "insert image",
        "insertar imagen",
        "insertar imagen",
        "\u63d2\u5165\u56fe\u7247",
        "\u63d2\u5165\u5716\u7247",
        "voeg prent in",
        "\u0432\u043c\u044a\u043a\u0432\u0430\u043d\u0435 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
        "vlo\u017eit obr\xe1zek",
        "inds\xe6t billede",
        "Bild einf\xfcgen",
        "\u03b5\u03b9\u03c3\u03b1\u03b3\u03c9\u03b3\u03ae \u03b5\u03b9\u03ba\u03cc\u03bd\u03b1\u03c2",
        "sisesta kujutis",
        "Lis\xe4\xe4 kuva",
        "ilagay ang larawan",
        "ins\xe9rer une image",
        "ins\xe9rer une image",
        "inserir imaxe",
        "umetanje slike",
        "k\xe9p besz\xfar\xe1sa",
        "sisipkan gambar",
        "setja inn mynd",
        "inserisci immagine",
        "\u012fterpti vaizd\u0105",
        "ievietot att\u0113lu",
        "afbeelding invoegen",
        "sett inn bilde",
        "wstaw obraz",
        "inserir imagem",
        "inserir imagem",
        "insera\u021bi o imagine",
        "vlo\u017ei\u0165 obr\xe1zok",
        "\u0443\u043c\u0435\u0442\u043d\u0438 \u0441\u043b\u0438\u043a\u0443",
        "infoga bild",
        "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
        "resim ekle",
        "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"
      ],
      d = [
        "Link",
        "Enlace",
        "Lien",
        "L\xe4nk",
        "Linkki",
        "\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f",
        "\u0421\u0441\u044b\u043b\u043a\u0430",
        "\u94fe\u63a5",
        "Tautan"
      ];
  },
  46: function (k, e, t) {
    var C = t(23).default;
    function I() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      (k.exports = I =
        function () {
          return i;
        }),
        (k.exports.__esModule = !0),
        (k.exports.default = k.exports);
      var i = {},
        e = Object.prototype,
        l = e.hasOwnProperty,
        n =
          Object.defineProperty ||
          function (e, t, o) {
            e[t] = o.value;
          },
        t = "function" == typeof Symbol ? Symbol : {},
        r = t.iterator || "@@iterator",
        o = t.asyncIterator || "@@asyncIterator",
        a = t.toStringTag || "@@toStringTag";
      function s(e, t, o) {
        return (
          Object.defineProperty(e, t, {
            value: o,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }),
          e[t]
        );
      }
      try {
        s({}, "");
      } catch (e) {
        s = function (e, t, o) {
          return (e[t] = o);
        };
      }
      function u(e, t, o, r) {
        (t = t && t.prototype instanceof m ? t : m), (t = Object.create(t.prototype)), (r = new q(r || []));
        return (
          n(t, "_invoke", {
            value: w(e, o, r)
          }),
          t
        );
      }
      function c(e, t, o) {
        try {
          return {
            type: "normal",
            arg: e.call(t, o)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }
      i.wrap = u;
      var d = {};
      function m() {}
      function p() {}
      function f() {}
      var t = {},
        h =
          (s(t, r, function () {
            return this;
          }),
          Object.getPrototypeOf),
        h = h && h(h(M([]))),
        b = (h && h !== e && l.call(h, r) && (t = h), (f.prototype = m.prototype = Object.create(t)));
      function g(e) {
        ["next", "throw", "return"].forEach(function (t) {
          s(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function y(a, i) {
        function s(e, t, o, r) {
          var n,
            e = c(a[e], a, t);
          if ("throw" !== e.type)
            return (t = (n = e.arg).value) && "object" == C(t) && l.call(t, "__await")
              ? i.resolve(t.__await).then(
                  function (e) {
                    s("next", e, o, r);
                  },
                  function (e) {
                    s("throw", e, o, r);
                  }
                )
              : i.resolve(t).then(
                  function (e) {
                    (n.value = e), o(n);
                  },
                  function (e) {
                    return s("throw", e, o, r);
                  }
                );
          r(e.arg);
        }
        var t;
        n(this, "_invoke", {
          value: function (o, r) {
            function e() {
              return new i(function (e, t) {
                s(o, r, e, t);
              });
            }
            return (t = t ? t.then(e, e) : e());
          }
        });
      }
      function w(r, n, a) {
        var i = "suspendedStart";
        return function (e, t) {
          if ("executing" === i) throw new Error("Generator is already running");
          if ("completed" === i) {
            if ("throw" === e) throw t;
            return j();
          }
          for (a.method = e, a.arg = t; ; ) {
            var o = a.delegate;
            if (o) {
              o = x(o, a);
              if (o) {
                if (o === d) continue;
                return o;
              }
            }
            if ("next" === a.method) a.sent = a._sent = a.arg;
            else if ("throw" === a.method) {
              if ("suspendedStart" === i) throw ((i = "completed"), a.arg);
              a.dispatchException(a.arg);
            } else "return" === a.method && a.abrupt("return", a.arg);
            i = "executing";
            o = c(r, n, a);
            if ("normal" === o.type) {
              if (((i = a.done ? "completed" : "suspendedYield"), o.arg === d)) continue;
              return {
                value: o.arg,
                done: a.done
              };
            }
            "throw" === o.type && ((i = "completed"), (a.method = "throw"), (a.arg = o.arg));
          }
        };
      }
      function x(e, t) {
        var o = t.method,
          r = e.iterator[o];
        return void 0 === r
          ? ((t.delegate = null),
            ("throw" === o && e.iterator.return && ((t.method = "return"), (t.arg = void 0), x(e, t), "throw" === t.method)) ||
              ("return" !== o && ((t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a '" + o + "' method")))),
            d)
          : "throw" === (o = c(r, e.iterator, t.arg)).type
          ? ((t.method = "throw"), (t.arg = o.arg), (t.delegate = null), d)
          : (r = o.arg)
          ? r.done
            ? ((t[e.resultName] = r.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              d)
            : r
          : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), d);
      }
      function v(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
      }
      function L(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function q(e) {
        (this.tryEntries = [
          {
            tryLoc: "root"
          }
        ]),
          e.forEach(v, this),
          this.reset(!0);
      }
      function M(t) {
        if (t) {
          var o,
            e = t[r];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length))
            return (
              (o = -1),
              ((e = function e() {
                for (; ++o < t.length; ) if (l.call(t, o)) return (e.value = t[o]), (e.done = !1), e;
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
        (p.prototype = f),
        n(b, "constructor", {
          value: f,
          configurable: !0
        }),
        n(f, "constructor", {
          value: p,
          configurable: !0
        }),
        (p.displayName = s(f, a, "GeneratorFunction")),
        (i.isGeneratorFunction = function (e) {
          e = "function" == typeof e && e.constructor;
          return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name));
        }),
        (i.mark = function (e) {
          return (
            Object.setPrototypeOf ? Object.setPrototypeOf(e, f) : ((e.__proto__ = f), s(e, a, "GeneratorFunction")),
            (e.prototype = Object.create(b)),
            e
          );
        }),
        (i.awrap = function (e) {
          return {
            __await: e
          };
        }),
        g(y.prototype),
        s(y.prototype, o, function () {
          return this;
        }),
        (i.AsyncIterator = y),
        (i.async = function (e, t, o, r, n) {
          void 0 === n && (n = Promise);
          var a = new y(u(e, t, o, r), n);
          return i.isGeneratorFunction(t)
            ? a
            : a.next().then(function (e) {
                return e.done ? e.value : a.next();
              });
        }),
        g(b),
        s(b, a, "Generator"),
        s(b, r, function () {
          return this;
        }),
        s(b, "toString", function () {
          return "[object Generator]";
        }),
        (i.keys = function (e) {
          var t,
            o = Object(e),
            r = [];
          for (t in o) r.push(t);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var t = r.pop();
                if (t in o) return (e.value = t), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (i.values = M),
        (q.prototype = {
          constructor: q,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(L),
              !e)
            )
              for (var t in this) "t" === t.charAt(0) && l.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (o) {
            if (this.done) throw o;
            var r = this;
            function e(e, t) {
              return (a.type = "throw"), (a.arg = o), (r.next = e), t && ((r.method = "next"), (r.arg = void 0)), !!t;
            }
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var n = this.tryEntries[t],
                a = n.completion;
              if ("root" === n.tryLoc) return e("end");
              if (n.tryLoc <= this.prev) {
                var i = l.call(n, "catchLoc"),
                  s = l.call(n, "finallyLoc");
                if (i && s) {
                  if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
                  if (this.prev < n.finallyLoc) return e(n.finallyLoc);
                } else if (i) {
                  if (this.prev < n.catchLoc) return e(n.catchLoc, !0);
                } else {
                  if (!s) throw new Error("try statement without catch or finally");
                  if (this.prev < n.finallyLoc) return e(n.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var o = this.tryEntries.length - 1; 0 <= o; --o) {
              var r = this.tryEntries[o];
              if (r.tryLoc <= this.prev && l.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var n = r;
                break;
              }
            }
            var a = (n = n && ("break" === e || "continue" === e) && n.tryLoc <= t && t <= n.finallyLoc ? null : n) ? n.completion : {};
            return (a.type = e), (a.arg = t), n ? ((this.method = "next"), (this.next = n.finallyLoc), d) : this.complete(a);
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
              var o = this.tryEntries[t];
              if (o.finallyLoc === e) return this.complete(o.completion, o.afterLoc), L(o), d;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
              var o,
                r,
                n = this.tryEntries[t];
              if (n.tryLoc === e) return "throw" === (o = n.completion).type && ((r = o.arg), L(n)), r;
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, o) {
            return (
              (this.delegate = {
                iterator: M(e),
                resultName: t,
                nextLoc: o
              }),
              "next" === this.method && (this.arg = void 0),
              d
            );
          }
        }),
        i
      );
    }
    (k.exports = I), (k.exports.__esModule = !0), (k.exports.default = k.exports);
  },
  47: function (e, t, o) {
    var r = o(23).default,
      n = o(48);
    function a(e) {
      e = n(e, "string");
      return "symbol" === r(e) ? e : String(e);
    }
    (e.exports = a), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  48: function (e, t, o) {
    var r = o(23).default;
    function n(e, t) {
      if ("object" !== r(e) || null === e) return e;
      var o = e[Symbol.toPrimitive];
      if (void 0 === o) return ("string" === t ? String : Number)(e);
      o = o.call(e, t || "default");
      if ("object" !== r(o)) return o;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  58: function (e, t) {
    var o = (function () {
      return this;
    })();
    try {
      o = o || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (o = window);
    }
    e.exports = o;
  },
  64: function (e, t) {
    function o(e) {
      if (Array.isArray(e)) return e;
    }
    (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  65: function (e, t) {
    function o(e, t) {
      var o = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
      if (null != o) {
        var r,
          n,
          a,
          i,
          s = [],
          l = !0,
          u = !1;
        try {
          if (((a = (o = o.call(e)).next), 0 === t)) {
            if (Object(o) !== o) return;
            l = !1;
          } else for (; !(l = (r = a.call(o)).done) && (s.push(r.value), s.length !== t); l = !0);
        } catch (e) {
          (u = !0), (n = e);
        } finally {
          try {
            if (!l && null != o.return && ((i = o.return()), Object(i) !== i)) return;
          } finally {
            if (u) throw n;
          }
        }
        return s;
      }
    }
    (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  66: function (e, t, o) {
    var r = o(67);
    function n(e, t) {
      var o;
      if (e)
        return "string" == typeof e
          ? r(e, t)
          : "Map" === (o = "Object" === (o = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : o) ||
            "Set" === o
          ? Array.from(e)
          : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          ? r(e, t)
          : void 0;
    }
    (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  67: function (e, t) {
    function o(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var o = 0, r = new Array(t); o < t; o++) r[o] = e[o];
      return r;
    }
    (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  68: function (e, t) {
    function o() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    (e.exports = o), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  7: function (e, t, o) {
    var r = o(47);
    function n(e, t, o) {
      return (
        (t = r(t)) in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = o),
        e
      );
    }
    (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
  },
  77: function (r, e, u) {
    "use strict";
    !function (n) {
      var m = u(118),
        p = u(119),
        t = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
        f = /[\n\r\t]/g,
        a = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
        s = /:\d+$/,
        l = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
        h = /^[a-zA-Z]:/;
      function b(e) {
        return (e || "").toString().replace(t, "");
      }
      var g = [
          ["#", "hash"],
          ["?", "query"],
          function (e, t) {
            return w(t.protocol) ? e.replace(/\\/g, "/") : e;
          },
          ["/", "pathname"],
          ["@", "auth", 1],
          [NaN, "host", void 0, 1, 1],
          [/:(\d*)$/, "port", void 0, 1],
          [NaN, "hostname", void 0, 1, 1]
        ],
        i = {
          hash: 1,
          query: 1
        };
      function y(e) {
        var t,
          o = "undefined" != typeof window ? window : void 0 !== n ? n : "undefined" != typeof self ? self : {},
          o = o.location || {},
          r = {},
          o = typeof (e = e || o);
        if ("blob:" === e.protocol) r = new L(unescape(e.pathname), {});
        else if ("string" === o) for (t in ((r = new L(e, {})), i)) delete r[t];
        else if ("object" === o) {
          for (t in e) t in i || (r[t] = e[t]);
          void 0 === r.slashes && (r.slashes = a.test(e.href));
        }
        return r;
      }
      function w(e) {
        return "file:" === e || "ftp:" === e || "http:" === e || "https:" === e || "ws:" === e || "wss:" === e;
      }
      function x(e, t) {
        (e = (e = b(e)).replace(f, "")), (t = t || {});
        var o,
          e = l.exec(e),
          r = e[1] ? e[1].toLowerCase() : "",
          n = !!e[2],
          a = !!e[3],
          i = 0;
        return (
          n
            ? (i = a ? ((o = e[2] + e[3] + e[4]), e[2].length + e[3].length) : ((o = e[2] + e[4]), e[2].length))
            : a
            ? ((o = e[3] + e[4]), (i = e[3].length))
            : (o = e[4]),
          "file:" === r
            ? 2 <= i && (o = o.slice(2))
            : w(r)
            ? (o = e[4])
            : r
            ? n && (o = o.slice(2))
            : 2 <= i && w(t.protocol) && (o = e[4]),
          {
            protocol: r,
            slashes: n || w(r),
            slashesCount: i,
            rest: o
          }
        );
      }
      function v(e, t) {
        if ("" === e) return t;
        for (var o = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = o.length, t = o[r - 1], n = !1, a = 0; r--; )
          "." === o[r] ? o.splice(r, 1) : ".." === o[r] ? (o.splice(r, 1), a++) : a && (0 === r && (n = !0), o.splice(r, 1), a--);
        return n && o.unshift(""), ("." !== t && ".." !== t) || o.push(""), o.join("/");
      }
      function L(e, t, o) {
        if (((e = (e = b(e)).replace(f, "")), !(this instanceof L))) return new L(e, t, o);
        var r,
          n,
          a,
          i,
          s,
          l = g.slice(),
          u = typeof t,
          c = this,
          d = 0;
        for (
          "object" !== u && "string" !== u && ((o = t), (t = null)),
            o && "function" != typeof o && (o = p.parse),
            r = !(u = x(e || "", (t = y(t)))).protocol && !u.slashes,
            c.slashes = u.slashes || (r && t.slashes),
            c.protocol = u.protocol || t.protocol || "",
            e = u.rest,
            (("file:" === u.protocol && (2 !== u.slashesCount || h.test(e))) ||
              (!u.slashes && (u.protocol || u.slashesCount < 2 || !w(c.protocol)))) &&
              (l[3] = [/(.*)/, "pathname"]);
          d < l.length;
          d++
        )
          "function" == typeof (a = l[d])
            ? (e = a(e, c))
            : ((n = a[0]),
              (s = a[1]),
              n != n
                ? (c[s] = e)
                : "string" == typeof n
                ? ~(i = "@" === n ? e.lastIndexOf(n) : e.indexOf(n)) &&
                  (e = "number" == typeof a[2] ? ((c[s] = e.slice(0, i)), e.slice(i + a[2])) : ((c[s] = e.slice(i)), e.slice(0, i)))
                : (i = n.exec(e)) && ((c[s] = i[1]), (e = e.slice(0, i.index))),
              (c[s] = c[s] || (r && a[3] && t[s]) || ""),
              a[4] && (c[s] = c[s].toLowerCase()));
        o && (c.query = o(c.query)),
          r &&
            t.slashes &&
            "/" !== c.pathname.charAt(0) &&
            ("" !== c.pathname || "" !== t.pathname) &&
            (c.pathname = v(c.pathname, t.pathname)),
          "/" !== c.pathname.charAt(0) && w(c.protocol) && (c.pathname = "/" + c.pathname),
          m(c.port, c.protocol) || ((c.host = c.hostname), (c.port = "")),
          (c.username = c.password = ""),
          c.auth &&
            (~(i = c.auth.indexOf(":"))
              ? ((c.username = c.auth.slice(0, i)),
                (c.username = encodeURIComponent(decodeURIComponent(c.username))),
                (c.password = c.auth.slice(i + 1)),
                (c.password = encodeURIComponent(decodeURIComponent(c.password))))
              : (c.username = encodeURIComponent(decodeURIComponent(c.auth))),
            (c.auth = c.password ? c.username + ":" + c.password : c.username)),
          (c.origin = "file:" !== c.protocol && w(c.protocol) && c.host ? c.protocol + "//" + c.host : "null"),
          (c.href = c.toString());
      }
      function e(e, t, o) {
        var r = this;
        switch (e) {
          case "query":
            "string" == typeof t && t.length && (t = (o || p.parse)(t)), (r[e] = t);
            break;

          case "port":
            (r[e] = t), m(t, r.protocol) ? t && (r.host = r.hostname + ":" + t) : ((r.host = r.hostname), (r[e] = ""));
            break;

          case "hostname":
            (r[e] = t), r.port && (t += ":" + r.port), (r.host = t);
            break;

          case "host":
            (r[e] = t),
              s.test(t) ? ((t = t.split(":")), (r.port = t.pop()), (r.hostname = t.join(":"))) : ((r.hostname = t), (r.port = ""));
            break;

          case "protocol":
            (r.protocol = t.toLowerCase()), (r.slashes = !o);
            break;

          case "pathname":
          case "hash":
            t ? ((n = "pathname" === e ? "/" : "#"), (r[e] = t.charAt(0) !== n ? n + t : t)) : (r[e] = t);
            break;

          case "username":
          case "password":
            r[e] = encodeURIComponent(t);
            break;

          case "auth":
            var n = t.indexOf(":");
            ~n
              ? ((r.username = t.slice(0, n)),
                (r.username = encodeURIComponent(decodeURIComponent(r.username))),
                (r.password = t.slice(n + 1)),
                (r.password = encodeURIComponent(decodeURIComponent(r.password))))
              : (r.username = encodeURIComponent(decodeURIComponent(t)));
        }
        for (var a = 0; a < g.length; a++) {
          var i = g[a];
          i[4] && (r[i[1]] = r[i[1]].toLowerCase());
        }
        return (
          (r.auth = r.password ? r.username + ":" + r.password : r.username),
          (r.origin = "file:" !== r.protocol && w(r.protocol) && r.host ? r.protocol + "//" + r.host : "null"),
          (r.href = r.toString()),
          r
        );
      }
      function o(e) {
        (e && "function" == typeof e) || (e = p.stringify);
        var t = this,
          o = t.host,
          r = t.protocol,
          r = (r && ":" !== r.charAt(r.length - 1) && (r += ":"), r + ((t.protocol && t.slashes) || w(t.protocol) ? "//" : ""));
        return (
          t.username
            ? ((r += t.username), t.password && (r += ":" + t.password), (r += "@"))
            : t.password
            ? (r = r + (":" + t.password) + "@")
            : "file:" !== t.protocol && w(t.protocol) && !o && "/" !== t.pathname && (r += "@"),
          (":" === o[o.length - 1] || (s.test(t.hostname) && !t.port)) && (o += ":"),
          (r += o + t.pathname),
          (o = "object" == typeof t.query ? e(t.query) : t.query) && (r += "?" !== o.charAt(0) ? "?" + o : o),
          t.hash && (r += t.hash),
          r
        );
      }
      (L.prototype = {
        set: e,
        toString: o
      }),
        (L.extractProtocol = x),
        (L.location = y),
        (L.trimLeft = b),
        (L.qs = p),
        (r.exports = L);
    }.call(this, u(58));
  }
});
