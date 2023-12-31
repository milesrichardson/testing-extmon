/*! For license information please see gOS-sandbox.js.LICENSE.txt */
var t = {
    41696: (t) => {
      t.exports = {};
    },
    27061: (t) => {
      var e,
        r,
        n = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === i || !e) && setTimeout) return (e = setTimeout), setTimeout(t, 0);
        try {
          return e(t, 0);
        } catch (r) {
          try {
            return e.call(null, t, 0);
          } catch (r) {
            return e.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          e = "function" == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          e = i;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (t) {
          r = s;
        }
      })();
      var c,
        a = [],
        u = !1,
        l = -1;
      function h() {
        u && c && ((u = !1), c.length ? (a = c.concat(a)) : (l = -1), a.length && f());
      }
      function f() {
        if (!u) {
          var t = o(h);
          u = !0;
          for (var e = a.length; e; ) {
            for (c = a, a = []; ++l < e; ) c && c[l].run();
            (l = -1), (e = a.length);
          }
          (c = null),
            (u = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === s || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function p(t, e) {
        (this.fun = t), (this.array = e);
      }
      function d() {}
      (n.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        a.push(new p(t, e)), 1 !== a.length || u || o(f);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}),
        (n.on = d),
        (n.addListener = d),
        (n.once = d),
        (n.off = d),
        (n.removeListener = d),
        (n.removeAllListeners = d),
        (n.emit = d),
        (n.prependListener = d),
        (n.prependOnceListener = d),
        (n.listeners = function (t) {
          return [];
        }),
        (n.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    }
  },
  e = {};
function r(n) {
  var i = e[n];
  if (void 0 !== i) return i.exports;
  var s = (e[n] = { exports: {} });
  return t[n](s, s.exports, r), s.exports;
}
(() => {
  r(41696);
  function t(t, e) {
    return t.some((t) => t === e) ? e : void 0;
  }
  class e extends Error {
    constructor(t) {
      super(`Matching not exhaustive: unexpected value ${JSON.stringify(t)}`);
    }
  }
  function n(t) {
    throw new e(t);
  }
  function i(t) {
    if ("string" == typeof t) {
      const e = parseInt(t, 10);
      return isNaN(e) ? void 0 : e;
    }
    return "number" == typeof t ? t : void 0;
  }
  function s(t, e) {
    try {
      return t();
    } catch (t) {
      return e(t);
    }
  }
  var o;
  !(function (t) {
    function e() {
      return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
    }
    t.create = function () {
      return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
    };
  })(o || (o = {}));
  void 0 !== self.requestIdleCallback && self.requestIdleCallback;
  class c extends Error {
    constructor(t) {
      super(`Assertion failed: ${t ? ("string" == typeof t ? t : t()) : "(unnamed)"}`);
    }
  }
  function a(t, e) {
    if (null == t) throw new c(() => (e ? `Expected ${e} to be non-null` : "Expected non-null"));
    return t;
  }
  var u, l, h, f, p, d, g, b, _;
  function y(t, e) {
    return t.filter((t) => !!t).join(e);
  }
  !(function (t) {
    const e = {
      chromiumWebExtension: "chromeExt",
      firefoxWebExtension: "firefoxExt",
      safariAppExtension: "safariExt",
      safariWebExtension: "safariWebExt",
      safariIOSWebExtension: "safariIOSExt"
    };
    function r(t, r, n) {
      return "retail" === n && "safariIOSWebExtension" === r ? "safariIOSExt-retail" : "edge" === t ? "chromiumEdgeExt" : e[r];
    }
    (t.getAppName = r),
      (t.create = function (t, e, n, i) {
        return {
          appName: a(r(t, e, n), "gnar app name"),
          url: `https://gnar.${i}`,
          domain: `.${i}`,
          sendEmailInfoTracking: !0,
          sendFluidExperimentData: !1
        };
      });
  })(u || (u = {})),
    (function (t) {
      const e = {
        chromiumWebExtension: "extensionChrome",
        firefoxWebExtension: "extensionFirefox",
        safariAppExtension: "extensionSafari",
        safariWebExtension: "extensionSafariWeb",
        safariIOSWebExtension: "extensionSafariIOS"
      };
      t.create = function (t, r, n, i) {
        return {
          appName:
            "retail" === n && "safariIOSWebExtension" === r
              ? "extensionSafariIOS-retail"
              : "edge" === t
              ? "extensionEdge"
              : a(e[r], "felog app name"),
          sendUsageMetrics: !0,
          sendPerfMetricsType: "dev" === i ? "local" : Math.random() <= 0.01 ? "send" : "off"
        };
      };
    })(l || (l = {})),
    (function (t) {
      const e = {
          chromiumWebExtension: "extension_chrome",
          firefoxWebExtension: "extension_firefox",
          safariAppExtension: "extension_safari",
          safariWebExtension: "extension_safari_web",
          safariIOSWebExtension: "extension_safari_ios"
        },
        r = { regular: "inline", retail: "retail_demo" };
      t.create = (t, n, i) => ({
        clientType: "edge" === t ? "extension_chromium_edge" : a(e[n], "capi client type"),
        clientSubType: a(r[i], "capi client subType")
      });
    })(h || (h = {})),
    (function (t) {
      t.create = function (t) {
        return {
          urls: {
            fetchMessages: `${t}/api/v1/messages`,
            acknowledgeMessage: `${t}/api/v1/messages/acknowledge`,
            dismissMessage: `${t}/api/v1/messages/dismiss`
          }
        };
      };
    })(f || (f = {})),
    (function (t) {
      t.create = function (t) {
        return {
          urls: {
            getInAppMessages: `${t}/api/inApp/getMessages`,
            track: `${t}/api/events/track`,
            trackInAppOpen: `${t}/api/events/trackInAppOpen`,
            trackInAppClose: `${t}/api/events/trackInAppClose`,
            trackInAppConsume: `${t}/api/events/inAppConsume`,
            trackInAppClick: `${t}/api/events/trackInAppClick`,
            userUpdate: `${t}/api/users/update`
          }
        };
      };
    })(p || (p = {})),
    (function (t) {
      t.create = function (t) {
        return { urls: { getJWTToken: `${t}/token` } };
      };
    })(d || (d = {})),
    (function (t) {
      const e = {
        chromiumWebExtension: "chromeExt",
        firefoxWebExtension: "firefoxExt",
        safariAppExtension: "safariExt",
        safariWebExtension: "safariWebExt",
        safariIOSWebExtension: "safariIOSExt"
      };
      t.create = function (t, r) {
        return { xClientType: "edge" === t ? "chromiumEdgeExt" : e[r] };
      };
    })(g || (g = {})),
    (function (t) {
      let e;
      var r;
      (r = e = t.GrStaticUrl || (t.GrStaticUrl = {})), (r.toGrStaticUrl = (t) => "https://assets.extension.grammarly.com/" + t);
    })(b || (b = {})),
    (function (t) {
      t.create = function (e, r, n, i, s) {
        const o = "safari" === e ? "disableAppsPromotion=true" : "";
        function c(t) {
          const e = `https://${t}.${r}`;
          return (t = "", r = "") => {
            const n = y([o, r], "&");
            return y([e + t, n], "?");
          };
        }
        const a = c("www"),
          u = c("app"),
          l = c("account"),
          h = c("redirect"),
          f = t.GrStaticUrl.toGrStaticUrl,
          p = `https://data.${r}`,
          d = `https://auth.${r}/v3`,
          g = `https://auth.${r}/v4`,
          b = `https://capi.${r}/api/configuration/cheetah/v1/settings`,
          _ = `https://capi.${r}`,
          m = `wss://capi.${r}/freews`;
        return {
          accountSubscription: l("/subscription"),
          accountSubscriptionAddBillingInfo: l("/admin/subscription", "popup=add_billing_info"),
          adminAccountSubscription: l("/admin/subscription"),
          accountAdminSubscriptionAddBillingInfoToUngatedTrial: l("/admin/subscription", "popup=ungated_trial"),
          app: u(),
          appPersonalDictionary: l("/customize"),
          featuresSettings: l("/customize/features"),
          capi: m,
          capiStatic: m,
          capiGDocs: `wss://capi.${r}/gdocs`,
          dapi: p,
          cheetahSettings: b,
          editorDictionary: u("/profile/dictionary"),
          desktop: a("/desktop"),
          dictionary: `https://capi.${r}/api/defs`,
          docs: u("/docs"),
          docsApi: `https://dox.${r}/documents`,
          newDoc: u("/docs/new"),
          tokens: `${g}/api`,
          auth: d,
          userOrAnonymous: `${d}/user/oranonymous`,
          signin: a("/signin"),
          signup: a("/signup"),
          dialect: `${_}/api/configuration/language/v1/settings`,
          fbSignin: a("/signin", "fromExtensionFb=true"),
          fbSignup: a("/signup", "fromExtensionFb=true"),
          googleSignin: a("/signin", "fromExtensionGoogle=true"),
          googleSignup: a("/signup", "fromExtensionGoogle=true"),
          resetPassword: a("/resetpassword"),
          newFelog: n,
          sumoLogic: i,
          vmetrics: s,
          welcomeC: a("/extension-success"),
          afterInstall: a("/after_install_page/"),
          upgrade: a("/upgrade"),
          planComparison: a("/plans"),
          businessHomepage: a("/business"),
          businessPricing: a("/business/pricing"),
          businessStyleGuide: a("/business/styleguide"),
          businessBrandTones: a("/business/brand-tones"),
          uninstall: a("/extension-uninstall"),
          terms: a("/terms"),
          policy: a("/privacy-policy"),
          californiaPolicy: a("/privacy-policy#for-california-users"),
          extensionSuccess: a("/extension-success"),
          firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
          dynamicConfigUrl: "https://config.extension.grammarly.com/dynamicConfig.json",
          pageConfigUrl: "https://config.extension.grammarly.com/browserplugin/config.json",
          grammarlyDomain: r,
          grammarlyProtocol: "https:",
          redirect: h("/redirect"),
          snippetsApi: `https://goldengate.${r}/snippets/v1/snippets`,
          snippetsNew: l("/admin/snippets", "action=create"),
          snippetsAdmin: l("/admin/snippets"),
          snippetsSettings: l("/customize/snippets"),
          knowledgeHubApi: `https://goldengate.${r}/knowledge-hub/v1/institution`,
          clientControlsApi: `https://goldengate.${r}/client-controls`,
          suggestionsSettings: l("/customize/suggestions"),
          allSettings: l(),
          styleGuideSettings: l("/admin/style-guide"),
          writingStyleSettings: l("/admin/style-guide-writing-style"),
          brandTones: l("/admin/brand-tones"),
          grammarlyIdeasSelf: u("/ideas/grow/self"),
          grammarlyIdeasPeer: u("/ideas/grow/peer"),
          grammarlyIdeasSales: u("/ideas/sales"),
          iOSApp: "grammarly://home",
          standWithUkraine: a("/stand-with-ukraine"),
          standWithUkraineBlockedUserPing: "https://rwsgfy.grammarly.com/stand-with-ukraine",
          tourGdocs: a("/tour-gdocs"),
          assets: {
            assistantOnboardingTourGif: f("assets/assistant/assistant-onboarding-tour"),
            ownerActivationIPMHeader: f("assets/ipm/owner-activation-ipm-header"),
            graduationIpmSvg: f("assets/ipm/graduation-campaign-ipm"),
            writingProgressIpmGif: f("assets/ipm/writing-progress-ipm-header"),
            onboardingTour: {
              inlineSuggestionsPreviewImage: f("assets/onboarding/inline-suggestions-preview-image.jpg"),
              inlineSuggestionsAnimation: f("assets/onboarding/inline-suggestions.mp4"),
              clickToAcceptAnimation: f("assets/onboarding/click-to-accept.mp4"),
              happyWritingAnimation: f("assets/onboarding/happy-writing.mp4")
            },
            knowledgeHubOnboardingTour: {
              step1: f("assets/knowledgeHubOnboarding/kh-onboarding-step1.mp4"),
              step2: f("assets/knowledgeHubOnboarding/kh-onboarding-step2.mp4"),
              step3: f("assets/knowledgeHubOnboarding/kh-onboarding-step3.mp4")
            }
          },
          support: `https://support.${r}/hc/en-us/requests/new#/`,
          grammarlyEmployeesBugReportsUrl: "https://in-product.report.grammarly.io/v1/report"
        };
      };
    })(b || (b = {})),
    (function (t) {
      const e = "grammarly.com",
        r = "qagr.io",
        i = "ppgr.io";
      t.create = function (t, s, o, c) {
        const a = (t, e, r, i, s) =>
            "prod" === c ? t : "qa" === c ? e : "dev-qa" === c ? r : "dev-preprod" === c ? i : "dev" === c ? s : void n(c),
          _ = "https://127.0.0.1:8000",
          y = a("https://f-log-extension.grammarly.io", _, _, _, _),
          m = a(
            "https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==",
            _,
            _,
            _,
            _
          ),
          v = a(
            "https://extension.femetrics.grammarly.io/batch/import",
            "https://femetrics.qagr.io/batch/import",
            "https://femetrics.qagr.io/batch/import",
            "https://femetrics.ppgr.io/batch/import",
            "https://femetrics.qagr.io/batch/import"
          ),
          w = a(e, r, r, i, r),
          E = a(e, r, r, i, e),
          x = a(
            "https://chipmunk.grammarly.com",
            "https://chipmunk.qagr.io",
            "https://chipmunk.qagr.io",
            "https://chipmunk.ppgr.io",
            "https://chipmunk.grammarly.com"
          );
        return {
          url: b.create(t, E, y, m, v),
          gnar: u.create(t, s, o, w),
          felog: l.create(t, s, o, c),
          capi: h.create(t, s, o),
          chipmunk: f.create("https://chipmunk.grammarly.com"),
          iterable: p.create("https://api.iterable.com"),
          mise: d.create(x),
          auth: g.create(t, s),
          extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4"
        };
      };
    })(_ || (_ = {}));
  const m = s(
      () => browser,
      () => self.browser
    ),
    v = s(
      () => browser,
      () => self.browser
    );
  self.chrome = self.chrome;
  var w, E, x, S, A, O, T, k, I, C, L;
  !(function (t) {
    (t.create = function (t, e, r, n, i, s, o, c) {
      const a = void 0 !== s && void 0 !== o ? s : "UNVERSIONED",
        u = `${t}.${e}.${r}`;
      return {
        version: u,
        fullVersion: `${u}-${[n, ["prod" !== i ? i : null, a !== n ? a : null].filter((t) => !!t).join(".")]
          .filter((t) => "" !== t)
          .join("/")}`,
        commitHash: o,
        gitBranch: s,
        manifestVersion: c
      };
    }),
      (t.getManifestVersion = function (t, e, r) {
        switch (t) {
          case "safariAppExtension":
            switch (e) {
              case "bg":
              case "popup":
                return r.safari.extension.displayVersion;
              default:
                return;
            }
          case "chromiumWebExtension":
            return r.chrome.runtime.getManifest().version;
          case "firefoxWebExtension":
            return m.runtime.getManifest().version;
          case "safariWebExtension":
          case "safariIOSWebExtension":
            return v.runtime.getManifest().version;
          default:
            return n(t);
        }
      });
  })(w || (w = {})),
    (function (e) {
      (e.create = function (e) {
        return t(["chrome", "safari", "firefox", "edge"], e);
      }),
        (e.isValidTargetBrowser = function (t) {
          return ["chrome", "safari", "firefox", "edge"].includes(t);
        }),
        (e.detect = function (t) {
          return t.chrome && /google/i.test(t.navigator.vendor)
            ? t.navigator.userAgent.indexOf("Edg") > -1
              ? "edge"
              : "chrome"
            : -1 !== t.navigator.userAgent.indexOf("Firefox")
            ? "firefox"
            : /^((?!chrome).)*safari/i.test(t.navigator.userAgent)
            ? "safari"
            : void 0;
        });
    })(E || (E = {})),
    (function (e) {
      e.create = function (e) {
        return t(["dev", "prod", "qa", "dev-qa", "dev-preprod"], e);
      };
    })(x || (x = {})),
    (function (e) {
      e.create = function (e) {
        return t(["regular", "retail"], e);
      };
    })(S || (S = {})),
    (function (e) {
      e.create = function (e) {
        return t(["chromiumWebExtension", "firefoxWebExtension", "safariAppExtension", "safariWebExtension", "safariIOSWebExtension"], e);
      };
    })(A || (A = {})),
    (function (t) {
      t.create = function (t, e, r, n, i) {
        return { browser: t, extensionType: e, deploymentType: r, env: n, context: i };
      };
    })(O || (O = {})),
    (function (t) {
      t.create = function (t) {
        return { type: E.detect(t) || "other" };
      };
    })(T || (T = {})),
    (function (t) {
      t.create = function (t) {
        return {
          isWindows: -1 !== t.navigator.appVersion.indexOf("Win"),
          isMac: -1 !== t.navigator.appVersion.indexOf("Mac"),
          isChromeOS: -1 !== t.navigator.appVersion.indexOf("CrOS")
        };
      };
    })(k || (k = {})),
    (function (t) {
      t.create = function (t) {
        return { browser: T.create(t), os: k.create(t) };
      };
    })(I || (I = {})),
    (function (t) {
      function e(t, e, r, n, i, s, o) {
        return { env: t, major_number: e, build_number: r, release_number: n, git_branch: i, git_commit: s, manifest_version: o };
      }
      (t.create = e),
        (t.fromBrowserify = function () {
          return e("prod", "14", "1147", "0", "UNVERSIONED", "UNVERSIONED", "3");
        });
    })(C || (C = {})),
    (function (t) {
      (t.getTargetEnv = function (t) {
        if (!t.env) throw new Error("processEnv.env is null or undefined");
        const e = x.create(t.env);
        if (!e) throw new Error(`Invalid processEnv.env: ${t.env}`);
        return e;
      }),
        (t.create = function (t, e, r, n, s, o) {
          const c = [s.major_number, s.build_number, s.release_number].map(i);
          let a;
          if (3 === c.length && c.every((t) => void 0 !== t)) a = c;
          else {
            let t;
            try {
              t = w.getManifestVersion(e, n, self);
            } catch (t) {}
            const r = (t || "").split(".").map(i);
            a = 3 === r.length && r.every((t) => void 0 !== t) ? r : [0, 0, 0];
          }
          const [u, l, h] = a;
          return {
            buildInfo: w.create(u, l, h, t, o, s.git_branch, s.git_commit, s.manifest_version),
            bundleInfo: O.create(t, e, r, o, n),
            appConfig: _.create(t, e, r, o),
            systemInfo: I.create(self)
          };
        });
    })(L || (L = {}));
  const M = new (class {
    constructor(t) {
      this._getFallbackValue = t;
    }
    init(t) {
      if (void 0 !== this._value) throw new Error("Global value already initialized.");
      this._value = t;
    }
    get() {
      if (void 0 === this._value) {
        if (void 0 === this._getFallbackValue) throw new Error("Global value not initialized and no fallback value provided.");
        this._value = this._getFallbackValue();
      }
      return this._value;
    }
  })(() => {
    throw new Error("Global config not initialized");
  });
  let R = () => M.get();
  function P() {
    return R().bundleInfo.env;
  }
  class $ {
    constructor(t) {
      if (((this.capacity = t), (this._start = 0), (this._end = 0), (this._isFull = !1), t <= 0)) throw new Error("Invalid capacity " + t);
      this._buffer = new Array(t);
    }
    get size() {
      return this._isFull ? this._buffer.length : (this._end - this._start + this._buffer.length) % this._buffer.length;
    }
    get isEmpty() {
      return 0 === this.size;
    }
    get isFull() {
      return this._isFull;
    }
    get head() {
      return this.isEmpty ? null : this._buffer[this._start];
    }
    get tail() {
      return this.isEmpty ? null : this._buffer[0 === this._end ? this.capacity - 1 : this._end - 1];
    }
    enqueue(t) {
      let e = null;
      return (
        this.isFull && ((e = this._buffer[this._start]), this._startInc()),
        (this._buffer[this._end] = t),
        this._endInc(),
        this._start === this._end && (this._isFull = !0),
        e
      );
    }
    dequeue() {
      if (this.isEmpty) return null;
      const t = this._buffer[this._start];
      return (this._buffer[this._start] = null), this._startInc(), (this._isFull = !1), t;
    }
    delete(t) {
      const e = this._buffer.indexOf(t);
      if (e >= 0) {
        if (e < this._end) {
          for (let t = e; t < this._end - 1; t++) this._buffer[t] = this._buffer[t + 1];
          this._buffer[--this._end] = null;
        } else {
          for (let t = this._start; t < e; t++) this._buffer[t + 1] = this._buffer[t];
          (this._buffer[this._start] = null), this._startInc();
        }
        return (this._isFull = !1), !0;
      }
      return !1;
    }
    _startInc() {
      this._start++, this._start === this.capacity && (this._start = 0);
    }
    _endInc() {
      this._end++, this._end === this.capacity && (this._end = 0);
    }
    clear() {
      (this._buffer = new Array(this.capacity)), (this._start = this._end = 0), (this._isFull = !1);
    }
    toArray() {
      let t;
      if (this.isEmpty) t = [];
      else if (this._start < this._end) t = this._buffer.slice(this._start, this._end);
      else {
        t = new Array(this.size);
        let e = 0;
        for (let r = this._start; r < this.capacity; ++r, ++e) t[e] = this._buffer[r];
        for (let r = 0; r < this._end; ++r, ++e) t[e] = this._buffer[r];
      }
      return t;
    }
  }
  const j = (t) => t === Object(t) && !Array.isArray(t);
  var F;
  !(function (t) {
    function e(t) {
      return { message: t.message, stack: t.stack };
    }
    function r(t) {
      try {
        return !("string" == typeof JSON.stringify(t));
      } catch (t) {
        return t.message.includes("Converting circular structure to JSON");
      }
    }
    (t.normalizeException = e),
      (t.isCircularObject = r),
      (t.normalizeData = function t(n) {
        try {
          return self.HTMLElement && n instanceof self.HTMLElement
            ? {
                type: (i = n).nodeName,
                html: i.outerHTML,
                attributes: Array.from(i.attributes).reduce((t, e) => ({ ...t, [e.nodeName]: e.nodeValue }), {})
              }
            : n instanceof Error
            ? e(n)
            : Array.isArray(n)
            ? n.map((e) => t(e))
            : "function" == typeof n
            ? `${n.name}()`
            : j(n)
            ? r(n)
              ? e(new Error("Couldn't normalize circular data!"))
              : Object.keys(n).reduce((e, r) => ({ ...e, [r]: t(n[r]) }), {})
            : n;
        } catch (t) {
          return he.create("HistoryLogNormalizer").error("cannot normalize data", t, n), e(new Error("Data normalization fail!"));
        }
        var i;
      });
  })(F || (F = {}));
  const H = "common";
  function W(t) {
    return t === H ? "common." : "";
  }
  class U {
    constructor(t) {
      var e;
      (this._historyArgs = t),
        (this._historyBuffers = {}),
        (this.isHistoryEnabled = () => {
          var t;
          return Boolean("prod" !== P() || (null === (t = this._historyArgs.enabledInProd) || void 0 === t ? void 0 : t.get()));
        }),
        (this.isAdvancedHistoryEnabled = () => {
          var t, e;
          return Boolean(
            "prod" !== P() ||
              ((null === (t = this._historyArgs.enabledInProd) || void 0 === t ? void 0 : t.get()) &&
                (null === (e = this._historyArgs.enableAdvancedInProd) || void 0 === e ? void 0 : e.get()))
          );
        }),
        (this.getLogs = () =>
          Object.entries(this._historyBuffers)
            .map(([t, e]) =>
              e
                .toArray()
                .map((e) => ({
                  ...e,
                  data: F.normalizeData(e.data),
                  loggerName: W(t) + e.loggerName,
                  exception: e.exception ? F.normalizeException(e.exception) : void 0
                }))
            )
            .flat()),
        (this._updateBackupStorage = () => {
          var t;
          null === (t = this._historyArgs.backupStorage) || void 0 === t || t.set(this._getBuffer(null).toArray());
        }),
        this._initCliCommands(),
        (this._historyBuffers.common = new $(null !== (e = this._historyArgs.maxEventsToStore) && void 0 !== e ? e : 1e3));
    }
    _getBuffer(t) {
      return t
        ? (this._historyBuffers[t.name] || (this._historyBuffers[t.name] = new $(t.settings.limit)), this._historyBuffers[t.name])
        : this._historyBuffers.common;
    }
    pushLog(t, e) {
      this._getBuffer(t).enqueue(e), this._updateBackupStorage();
    }
    _initCliCommands() {
      (self.GRIsDebugEnabled = () => this.isHistoryEnabled()),
        (self.GREnableHistoryLogger = (t = 60) => {
          var e, r;
          null === (r = (e = this._historyArgs).enableHistoryLoggerUntil) || void 0 === r || r.call(e, Date.now() + 60 * t * 1e3);
        }),
        (self.GRDisableHistoryLogger = () => {
          var t, e;
          null === (e = (t = this._historyArgs).disableHistoryLogger) || void 0 === e || e.call(t);
        });
    }
    static create(t) {
      return t.isBG ? new D(t) : new N(t);
    }
  }
  class D extends U {
    constructor(t) {
      super(t), (this._historyArgs = t), this._syncInitialStateWithStorage();
    }
    _syncInitialStateWithStorage() {
      var t;
      null === (t = this._historyArgs.backupStorage) ||
        void 0 === t ||
        t.get().then((t) => {
          if (!t) return;
          const e = this._getBuffer(null),
            r = e.toArray();
          e.clear(), t.forEach((t) => e.enqueue(t)), r.forEach((t) => e.enqueue(t)), this._updateBackupStorage();
        });
    }
  }
  class N extends U {}
  var V;
  !(function (t) {
    (t.TRACE = "TRACE"), (t.DEBUG = "DEBUG"), (t.INFO = "INFO"), (t.WARN = "WARN"), (t.ERROR = "ERROR"), (t.FATAL = "FATAL");
  })(V || (V = {}));
  const B = { [V.TRACE]: 1, [V.DEBUG]: 2, [V.INFO]: 3, [V.WARN]: 4, [V.ERROR]: 5, [V.FATAL]: 6 };
  function q(t) {
    return B[t] || 0;
  }
  class G {
    constructor(t) {
      (this.name = t),
        (this._isError = (t) => {
          const e = t;
          return e && ((void 0 !== e.message && void 0 !== e.name) || void 0 !== e.stack);
        });
    }
    trace(t, e, r) {
      this._logMessage(V.TRACE, t, e, r);
    }
    debug(t, e, r) {
      this._logMessage(V.DEBUG, t, e, r);
    }
    info(t, e, r) {
      this._logMessage(V.INFO, t, e, r);
    }
    warn(t, e, r) {
      this._logMessage(V.WARN, t, e, r);
    }
    error(t, e, r) {
      this._logMessage(V.ERROR, t, e, r);
    }
    fatal(t, e, r) {
      this._logMessage(V.FATAL, t, e, r);
    }
    _logMessage(t, e, r, n) {
      const i = { level: t, loggerName: this.name, message: e, timestamp: Date.now() };
      r && (this._isError(r) ? (i.exception = r) : (i.data = r)), (i.data = i.data || n), this.handleEvent(i);
    }
  }
  class z {
    constructor(t, e) {
      (this.name = t), (this._createLogger = e);
    }
    trace(t, e, r) {
      void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.trace(t, e, r);
    }
    debug(t, e, r) {
      void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.debug(t, e, r);
    }
    info(t, e, r) {
      void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.info(t, e, r);
    }
    warn(t, e, r) {
      void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.warn(t, e, r);
    }
    error(t, e, r) {
      void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.error(t, e, r);
    }
    fatal(t, e, r) {
      void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.fatal(t, e, r);
    }
    isHistoryEnabled() {
      return !1;
    }
    isAdvancedHistoryEnabled() {
      return !1;
    }
  }
  class Y extends G {
    constructor(t, e, r, n) {
      var i, s;
      super(t),
        (this._config = e),
        (this._historyLogsService = r),
        (this._loggerSettings = n),
        (this._buffer = (null === (i = this._loggerSettings) || void 0 === i ? void 0 : i.historyBufferSettings)
          ? { name: this.name, settings: null === (s = this._loggerSettings) || void 0 === s ? void 0 : s.historyBufferSettings }
          : null);
    }
    handleEvent(t) {
      var e, r;
      this._config.filterFn(t) &&
        !(null === (e = this._loggerSettings) || void 0 === e ? void 0 : e.skipWriteToConsole) &&
        this._config.writer.write(t),
        this._historyLogsService.isHistoryEnabled() &&
          !(null === (r = this._loggerSettings) || void 0 === r ? void 0 : r.skipWriteToHistoryLogger) &&
          this._historyLogsService.pushLog(this._buffer, t);
    }
    isHistoryEnabled() {
      return this._historyLogsService.isHistoryEnabled();
    }
    isAdvancedHistoryEnabled() {
      return this._historyLogsService.isAdvancedHistoryEnabled();
    }
  }
  var J;
  !(function (t) {
    (t.LEVEL = {
      [V.TRACE]: "color: white; background: orange;",
      [V.DEBUG]: "color: black; background: #ffdc00;",
      [V.INFO]: "color: black; background: #abdcfb",
      [V.WARN]: "color: white; background: darkorange;",
      [V.ERROR]: "color: white; background: red;",
      [V.FATAL]: "color: white; background: darkred;"
    }),
      (t.GRAMMARLY = "color: black; background: #bada55;");
    const e = new Map();
    function r(t, e) {
      return t + Math.floor(Math.random() * (e - t + 1));
    }
    function n(t) {
      return `color: ${t.isDark ? "white" : "black"}; background: rgb(${t.red}, ${t.green}, ${t.blue})`;
    }
    (t.getLoggerName = function (t) {
      const i = e.get(t);
      if (i) return n(i);
      const s = r(0, 255),
        o = r(0, 255),
        c = r(0, 255),
        a = { red: s, green: o, blue: c, isDark: Math.sqrt(s * s * 0.299 + o * o * 0.587 + c * c * 0.114) < 127.5 };
      return e.set(t, a), n(a);
    }),
      (t.RESET_DEFAULT = "color: reset;"),
      (t.RESET_DEBUG = `color: ${self.matchMedia && self.matchMedia("(prefers-color-scheme: dark)").matches ? "white" : "black"};`),
      (t.getReset = function (e) {
        return e !== V.TRACE && e !== V.DEBUG ? t.RESET_DEFAULT : e === V.TRACE || e === V.DEBUG ? t.RESET_DEBUG : t.RESET_DEFAULT;
      }),
      (t.outputLog = function (t) {
        return [`grm ${t.level} [${t.loggerName}] ░░ ${t.message}`];
      });
  })(J || (J = {}));
  class Q {
    constructor() {
      this._writeFunc = Q._commonWriteFunc;
    }
    write(t) {
      try {
        const e = J.outputLog(t);
        t.data && e.push(t.data), t.exception && e.push(t.exception), this._writeFunc[t.level].apply(null, e);
      } catch (t) {}
    }
  }
  Q._commonWriteFunc = (function () {
    const {
      debug: t,
      info: e,
      warn: r,
      error: n
    } = ((i = console),
    new Proxy(
      {},
      {
        get(t, e) {
          const r = i[e];
          return r && "function" == typeof r ? r.bind(i) : void 0;
        }
      }
    ));
    var i;
    return { [V.TRACE]: t, [V.DEBUG]: t, [V.INFO]: e, [V.WARN]: r, [V.ERROR]: n, [V.FATAL]: n };
  })();
  var Z = function (t, e) {
    return (
      (Z =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (t, e) {
            t.__proto__ = e;
          }) ||
        function (t, e) {
          for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
        }),
      Z(t, e)
    );
  };
  function K(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function r() {
      this.constructor = t;
    }
    Z(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
  }
  Object.create;
  Object.create;
  function X(t) {
    return "function" == typeof t;
  }
  var tt = !1,
    et = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(t) {
        t && new Error().stack;
        tt = t;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return tt;
      }
    };
  function rt(t) {
    setTimeout(function () {
      throw t;
    }, 0);
  }
  var nt = {
      closed: !0,
      next: function (t) {},
      error: function (t) {
        if (et.useDeprecatedSynchronousErrorHandling) throw t;
        rt(t);
      },
      complete: function () {}
    },
    it = (function () {
      return (
        Array.isArray ||
        function (t) {
          return t && "number" == typeof t.length;
        }
      );
    })();
  function st(t) {
    return null !== t && "object" == typeof t;
  }
  var ot = (function () {
      function t(t) {
        return (
          Error.call(this),
          (this.message = t
            ? t.length +
              " errors occurred during unsubscription:\n" +
              t
                .map(function (t, e) {
                  return e + 1 + ") " + t.toString();
                })
                .join("\n  ")
            : ""),
          (this.name = "UnsubscriptionError"),
          (this.errors = t),
          this
        );
      }
      return (t.prototype = Object.create(Error.prototype)), t;
    })(),
    ct = (function () {
      function t(t) {
        (this.closed = !1),
          (this._parentOrParents = null),
          (this._subscriptions = null),
          t && ((this._ctorUnsubscribe = !0), (this._unsubscribe = t));
      }
      return (
        (t.prototype.unsubscribe = function () {
          var e;
          if (!this.closed) {
            var r = this,
              n = r._parentOrParents,
              i = r._ctorUnsubscribe,
              s = r._unsubscribe,
              o = r._subscriptions;
            if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), n instanceof t)) n.remove(this);
            else if (null !== n)
              for (var c = 0; c < n.length; ++c) {
                n[c].remove(this);
              }
            if (X(s)) {
              i && (this._unsubscribe = void 0);
              try {
                s.call(this);
              } catch (t) {
                e = t instanceof ot ? at(t.errors) : [t];
              }
            }
            if (it(o)) {
              c = -1;
              for (var a = o.length; ++c < a; ) {
                var u = o[c];
                if (st(u))
                  try {
                    u.unsubscribe();
                  } catch (t) {
                    (e = e || []), t instanceof ot ? (e = e.concat(at(t.errors))) : e.push(t);
                  }
              }
            }
            if (e) throw new ot(e);
          }
        }),
        (t.prototype.add = function (e) {
          var r = e;
          if (!e) return t.EMPTY;
          switch (typeof e) {
            case "function":
              r = new t(e);
            case "object":
              if (r === this || r.closed || "function" != typeof r.unsubscribe) return r;
              if (this.closed) return r.unsubscribe(), r;
              if (!(r instanceof t)) {
                var n = r;
                (r = new t())._subscriptions = [n];
              }
              break;
            default:
              throw new Error("unrecognized teardown " + e + " added to Subscription.");
          }
          var i = r._parentOrParents;
          if (null === i) r._parentOrParents = this;
          else if (i instanceof t) {
            if (i === this) return r;
            r._parentOrParents = [i, this];
          } else {
            if (-1 !== i.indexOf(this)) return r;
            i.push(this);
          }
          var s = this._subscriptions;
          return null === s ? (this._subscriptions = [r]) : s.push(r), r;
        }),
        (t.prototype.remove = function (t) {
          var e = this._subscriptions;
          if (e) {
            var r = e.indexOf(t);
            -1 !== r && e.splice(r, 1);
          }
        }),
        (t.EMPTY = (function (t) {
          return (t.closed = !0), t;
        })(new t())),
        t
      );
    })();
  function at(t) {
    return t.reduce(function (t, e) {
      return t.concat(e instanceof ot ? e.errors : e);
    }, []);
  }
  var ut = (function () {
      return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
    })(),
    lt = (function (t) {
      function e(r, n, i) {
        var s = t.call(this) || this;
        switch (((s.syncErrorValue = null), (s.syncErrorThrown = !1), (s.syncErrorThrowable = !1), (s.isStopped = !1), arguments.length)) {
          case 0:
            s.destination = nt;
            break;
          case 1:
            if (!r) {
              s.destination = nt;
              break;
            }
            if ("object" == typeof r) {
              r instanceof e
                ? ((s.syncErrorThrowable = r.syncErrorThrowable), (s.destination = r), r.add(s))
                : ((s.syncErrorThrowable = !0), (s.destination = new ht(s, r)));
              break;
            }
          default:
            (s.syncErrorThrowable = !0), (s.destination = new ht(s, r, n, i));
        }
        return s;
      }
      return (
        K(e, t),
        (e.prototype[ut] = function () {
          return this;
        }),
        (e.create = function (t, r, n) {
          var i = new e(t, r, n);
          return (i.syncErrorThrowable = !1), i;
        }),
        (e.prototype.next = function (t) {
          this.isStopped || this._next(t);
        }),
        (e.prototype.error = function (t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }),
        (e.prototype.complete = function () {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }),
        (e.prototype.unsubscribe = function () {
          this.closed || ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
        }),
        (e.prototype._next = function (t) {
          this.destination.next(t);
        }),
        (e.prototype._error = function (t) {
          this.destination.error(t), this.unsubscribe();
        }),
        (e.prototype._complete = function () {
          this.destination.complete(), this.unsubscribe();
        }),
        (e.prototype._unsubscribeAndRecycle = function () {
          var t = this._parentOrParents;
          return (
            (this._parentOrParents = null), this.unsubscribe(), (this.closed = !1), (this.isStopped = !1), (this._parentOrParents = t), this
          );
        }),
        e
      );
    })(ct),
    ht = (function (t) {
      function e(e, r, n, i) {
        var s,
          o = t.call(this) || this;
        o._parentSubscriber = e;
        var c = o;
        return (
          X(r)
            ? (s = r)
            : r &&
              ((s = r.next),
              (n = r.error),
              (i = r.complete),
              r !== nt && (X((c = Object.create(r)).unsubscribe) && o.add(c.unsubscribe.bind(c)), (c.unsubscribe = o.unsubscribe.bind(o)))),
          (o._context = c),
          (o._next = s),
          (o._error = n),
          (o._complete = i),
          o
        );
      }
      return (
        K(e, t),
        (e.prototype.next = function (t) {
          if (!this.isStopped && this._next) {
            var e = this._parentSubscriber;
            et.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }),
        (e.prototype.error = function (t) {
          if (!this.isStopped) {
            var e = this._parentSubscriber,
              r = et.useDeprecatedSynchronousErrorHandling;
            if (this._error)
              r && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable) r ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : rt(t), this.unsubscribe();
            else {
              if ((this.unsubscribe(), r)) throw t;
              rt(t);
            }
          }
        }),
        (e.prototype.complete = function () {
          var t = this;
          if (!this.isStopped) {
            var e = this._parentSubscriber;
            if (this._complete) {
              var r = function () {
                return t._complete.call(t._context);
              };
              et.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, r), this.unsubscribe())
                : (this.__tryOrUnsub(r), this.unsubscribe());
            } else this.unsubscribe();
          }
        }),
        (e.prototype.__tryOrUnsub = function (t, e) {
          try {
            t.call(this._context, e);
          } catch (t) {
            if ((this.unsubscribe(), et.useDeprecatedSynchronousErrorHandling)) throw t;
            rt(t);
          }
        }),
        (e.prototype.__tryOrSetError = function (t, e, r) {
          if (!et.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
          try {
            e.call(this._context, r);
          } catch (e) {
            return et.useDeprecatedSynchronousErrorHandling ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0), !0) : (rt(e), !0);
          }
          return !1;
        }),
        (e.prototype._unsubscribe = function () {
          var t = this._parentSubscriber;
          (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
        }),
        e
      );
    })(lt);
  var ft = (function () {
    return ("function" == typeof Symbol && Symbol.observable) || "@@observable";
  })();
  function pt(t) {
    return t;
  }
  function dt(t) {
    return 0 === t.length
      ? pt
      : 1 === t.length
      ? t[0]
      : function (e) {
          return t.reduce(function (t, e) {
            return e(t);
          }, e);
        };
  }
  var gt = (function () {
    function t(t) {
      (this._isScalar = !1), t && (this._subscribe = t);
    }
    return (
      (t.prototype.lift = function (e) {
        var r = new t();
        return (r.source = this), (r.operator = e), r;
      }),
      (t.prototype.subscribe = function (t, e, r) {
        var n = this.operator,
          i = (function (t, e, r) {
            if (t) {
              if (t instanceof lt) return t;
              if (t[ut]) return t[ut]();
            }
            return t || e || r ? new lt(t, e, r) : new lt(nt);
          })(t, e, r);
        if (
          (n
            ? i.add(n.call(i, this.source))
            : i.add(
                this.source || (et.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable)
                  ? this._subscribe(i)
                  : this._trySubscribe(i)
              ),
          et.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && ((i.syncErrorThrowable = !1), i.syncErrorThrown))
        )
          throw i.syncErrorValue;
        return i;
      }),
      (t.prototype._trySubscribe = function (t) {
        try {
          return this._subscribe(t);
        } catch (e) {
          et.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
            !(function (t) {
              for (; t; ) {
                var e = t,
                  r = e.closed,
                  n = e.destination,
                  i = e.isStopped;
                if (r || i) return !1;
                t = n && n instanceof lt ? n : null;
              }
              return !0;
            })(t)
              ? console.warn(e)
              : t.error(e);
        }
      }),
      (t.prototype.forEach = function (t, e) {
        var r = this;
        return new (e = bt(e))(function (e, n) {
          var i;
          i = r.subscribe(
            function (e) {
              try {
                t(e);
              } catch (t) {
                n(t), i && i.unsubscribe();
              }
            },
            n,
            e
          );
        });
      }),
      (t.prototype._subscribe = function (t) {
        var e = this.source;
        return e && e.subscribe(t);
      }),
      (t.prototype[ft] = function () {
        return this;
      }),
      (t.prototype.pipe = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return 0 === t.length ? this : dt(t)(this);
      }),
      (t.prototype.toPromise = function (t) {
        var e = this;
        return new (t = bt(t))(function (t, r) {
          var n;
          e.subscribe(
            function (t) {
              return (n = t);
            },
            function (t) {
              return r(t);
            },
            function () {
              return t(n);
            }
          );
        });
      }),
      (t.create = function (e) {
        return new t(e);
      }),
      t
    );
  })();
  function bt(t) {
    if ((t || (t = et.Promise || Promise), !t)) throw new Error("no Promise impl found");
    return t;
  }
  var _t = (function () {
      function t() {
        return Error.call(this), (this.message = "object unsubscribed"), (this.name = "ObjectUnsubscribedError"), this;
      }
      return (t.prototype = Object.create(Error.prototype)), t;
    })(),
    yt = (function (t) {
      function e(e, r) {
        var n = t.call(this) || this;
        return (n.subject = e), (n.subscriber = r), (n.closed = !1), n;
      }
      return (
        K(e, t),
        (e.prototype.unsubscribe = function () {
          if (!this.closed) {
            this.closed = !0;
            var t = this.subject,
              e = t.observers;
            if (((this.subject = null), e && 0 !== e.length && !t.isStopped && !t.closed)) {
              var r = e.indexOf(this.subscriber);
              -1 !== r && e.splice(r, 1);
            }
          }
        }),
        e
      );
    })(ct),
    mt = (function (t) {
      function e(e) {
        var r = t.call(this, e) || this;
        return (r.destination = e), r;
      }
      return K(e, t), e;
    })(lt),
    vt = (function (t) {
      function e() {
        var e = t.call(this) || this;
        return (e.observers = []), (e.closed = !1), (e.isStopped = !1), (e.hasError = !1), (e.thrownError = null), e;
      }
      return (
        K(e, t),
        (e.prototype[ut] = function () {
          return new mt(this);
        }),
        (e.prototype.lift = function (t) {
          var e = new wt(this, this);
          return (e.operator = t), e;
        }),
        (e.prototype.next = function (t) {
          if (this.closed) throw new _t();
          if (!this.isStopped) for (var e = this.observers, r = e.length, n = e.slice(), i = 0; i < r; i++) n[i].next(t);
        }),
        (e.prototype.error = function (t) {
          if (this.closed) throw new _t();
          (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
          for (var e = this.observers, r = e.length, n = e.slice(), i = 0; i < r; i++) n[i].error(t);
          this.observers.length = 0;
        }),
        (e.prototype.complete = function () {
          if (this.closed) throw new _t();
          this.isStopped = !0;
          for (var t = this.observers, e = t.length, r = t.slice(), n = 0; n < e; n++) r[n].complete();
          this.observers.length = 0;
        }),
        (e.prototype.unsubscribe = function () {
          (this.isStopped = !0), (this.closed = !0), (this.observers = null);
        }),
        (e.prototype._trySubscribe = function (e) {
          if (this.closed) throw new _t();
          return t.prototype._trySubscribe.call(this, e);
        }),
        (e.prototype._subscribe = function (t) {
          if (this.closed) throw new _t();
          return this.hasError
            ? (t.error(this.thrownError), ct.EMPTY)
            : this.isStopped
            ? (t.complete(), ct.EMPTY)
            : (this.observers.push(t), new yt(this, t));
        }),
        (e.prototype.asObservable = function () {
          var t = new gt();
          return (t.source = this), t;
        }),
        (e.create = function (t, e) {
          return new wt(t, e);
        }),
        e
      );
    })(gt),
    wt = (function (t) {
      function e(e, r) {
        var n = t.call(this) || this;
        return (n.destination = e), (n.source = r), n;
      }
      return (
        K(e, t),
        (e.prototype.next = function (t) {
          var e = this.destination;
          e && e.next && e.next(t);
        }),
        (e.prototype.error = function (t) {
          var e = this.destination;
          e && e.error && this.destination.error(t);
        }),
        (e.prototype.complete = function () {
          var t = this.destination;
          t && t.complete && this.destination.complete();
        }),
        (e.prototype._subscribe = function (t) {
          return this.source ? this.source.subscribe(t) : ct.EMPTY;
        }),
        e
      );
    })(vt),
    Et = (function (t) {
      function e(e) {
        var r = t.call(this) || this;
        return (r._value = e), r;
      }
      return (
        K(e, t),
        Object.defineProperty(e.prototype, "value", {
          get: function () {
            return this.getValue();
          },
          enumerable: !0,
          configurable: !0
        }),
        (e.prototype._subscribe = function (e) {
          var r = t.prototype._subscribe.call(this, e);
          return r && !r.closed && e.next(this._value), r;
        }),
        (e.prototype.getValue = function () {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new _t();
          return this._value;
        }),
        (e.prototype.next = function (e) {
          t.prototype.next.call(this, (this._value = e));
        }),
        e
      );
    })(vt);
  function xt() {}
  var St = (function () {
      function t(t, e, r) {
        (this.nextOrObserver = t), (this.error = e), (this.complete = r);
      }
      return (
        (t.prototype.call = function (t, e) {
          return e.subscribe(new At(t, this.nextOrObserver, this.error, this.complete));
        }),
        t
      );
    })(),
    At = (function (t) {
      function e(e, r, n, i) {
        var s = t.call(this, e) || this;
        return (
          (s._tapNext = xt),
          (s._tapError = xt),
          (s._tapComplete = xt),
          (s._tapError = n || xt),
          (s._tapComplete = i || xt),
          X(r)
            ? ((s._context = s), (s._tapNext = r))
            : r && ((s._context = r), (s._tapNext = r.next || xt), (s._tapError = r.error || xt), (s._tapComplete = r.complete || xt)),
          s
        );
      }
      return (
        K(e, t),
        (e.prototype._next = function (t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(t);
        }),
        (e.prototype._error = function (t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }),
        (e.prototype._complete = function () {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }),
        e
      );
    })(lt);
  function Ot() {
    return function (t) {
      return t.lift(new Tt(t));
    };
  }
  var Tt = (function () {
      function t(t) {
        this.connectable = t;
      }
      return (
        (t.prototype.call = function (t, e) {
          var r = this.connectable;
          r._refCount++;
          var n = new kt(t, r),
            i = e.subscribe(n);
          return n.closed || (n.connection = r.connect()), i;
        }),
        t
      );
    })(),
    kt = (function (t) {
      function e(e, r) {
        var n = t.call(this, e) || this;
        return (n.connectable = r), n;
      }
      return (
        K(e, t),
        (e.prototype._unsubscribe = function () {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._refCount;
            if (e <= 0) this.connection = null;
            else if (((t._refCount = e - 1), e > 1)) this.connection = null;
            else {
              var r = this.connection,
                n = t._connection;
              (this.connection = null), !n || (r && n !== r) || n.unsubscribe();
            }
          } else this.connection = null;
        }),
        e
      );
    })(lt),
    It = (function (t) {
      function e(e, r) {
        var n = t.call(this) || this;
        return (n.source = e), (n.subjectFactory = r), (n._refCount = 0), (n._isComplete = !1), n;
      }
      return (
        K(e, t),
        (e.prototype._subscribe = function (t) {
          return this.getSubject().subscribe(t);
        }),
        (e.prototype.getSubject = function () {
          var t = this._subject;
          return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
        }),
        (e.prototype.connect = function () {
          var t = this._connection;
          return (
            t ||
              ((this._isComplete = !1),
              (t = this._connection = new ct()).add(this.source.subscribe(new Lt(this.getSubject(), this))),
              t.closed && ((this._connection = null), (t = ct.EMPTY))),
            t
          );
        }),
        (e.prototype.refCount = function () {
          return Ot()(this);
        }),
        e
      );
    })(gt),
    Ct = (function () {
      var t = It.prototype;
      return {
        operator: { value: null },
        _refCount: { value: 0, writable: !0 },
        _subject: { value: null, writable: !0 },
        _connection: { value: null, writable: !0 },
        _subscribe: { value: t._subscribe },
        _isComplete: { value: t._isComplete, writable: !0 },
        getSubject: { value: t.getSubject },
        connect: { value: t.connect },
        refCount: { value: t.refCount }
      };
    })(),
    Lt = (function (t) {
      function e(e, r) {
        var n = t.call(this, e) || this;
        return (n.connectable = r), n;
      }
      return (
        K(e, t),
        (e.prototype._error = function (e) {
          this._unsubscribe(), t.prototype._error.call(this, e);
        }),
        (e.prototype._complete = function () {
          (this.connectable._isComplete = !0), this._unsubscribe(), t.prototype._complete.call(this);
        }),
        (e.prototype._unsubscribe = function () {
          var t = this.connectable;
          if (t) {
            this.connectable = null;
            var e = t._connection;
            (t._refCount = 0), (t._subject = null), (t._connection = null), e && e.unsubscribe();
          }
        }),
        e
      );
    })(mt);
  var Mt = (function () {
    function t(t, e) {
      (this.subjectFactory = t), (this.selector = e);
    }
    return (
      (t.prototype.call = function (t, e) {
        var r = this.selector,
          n = this.subjectFactory(),
          i = r(n).subscribe(t);
        return i.add(e.subscribe(n)), i;
      }),
      t
    );
  })();
  function Rt() {
    return new vt();
  }
  function Pt() {
    return function (t) {
      return Ot()(
        ((e = Rt),
        function (t) {
          var n;
          if (
            ((n =
              "function" == typeof e
                ? e
                : function () {
                    return e;
                  }),
            "function" == typeof r)
          )
            return t.lift(new Mt(n, r));
          var i = Object.create(t, Ct);
          return (i.source = t), (i.subjectFactory = n), i;
        })(t)
      );
      var e, r;
    };
  }
  var $t = (function () {
      function t(t, e) {
        (this.predicate = t), (this.thisArg = e);
      }
      return (
        (t.prototype.call = function (t, e) {
          return e.subscribe(new jt(t, this.predicate, this.thisArg));
        }),
        t
      );
    })(),
    jt = (function (t) {
      function e(e, r, n) {
        var i = t.call(this, e) || this;
        return (i.predicate = r), (i.thisArg = n), (i.count = 0), i;
      }
      return (
        K(e, t),
        (e.prototype._next = function (t) {
          var e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (t) {
            return void this.destination.error(t);
          }
          e && this.destination.next(t);
        }),
        e
      );
    })(lt);
  function Ft(t, e) {
    return function (r, n) {
      return e(r(t(n)), n);
    };
  }
  function Ht(t, e) {
    return {
      get: t,
      set: e,
      modify: Ft(t, e),
      compose: (r) =>
        Ht(
          (e) => r.get(t(e)),
          (n, i) => e(r.set(n, t(i)), i)
        )
    };
  }
  function Wt(...t) {
    if (0 === t.length) throw new TypeError("Can not compose zero lenses. You probably want `Lens.identity`.");
    if (1 === t.length) return t[0];
    {
      let e = t[0];
      return (
        t.slice(1).forEach((t) => {
          e = e.compose(t);
        }),
        e
      );
    }
  }
  Ht(
    (t) => t,
    (t, e) => t
  );
  (function t(e, r) {
    return {
      get: e,
      set: r,
      modify: Ft(e, r),
      compose: (n) =>
        t(
          (t) => {
            const r = e(t);
            return void 0 !== r ? n.get(r) : void 0;
          },
          (t, i) => {
            const s = e(i);
            return void 0 !== s ? r(n.set(t, s), i) : i;
          }
        )
    };
  })(
    (t) => {},
    (t, e) => e
  );
  function Ut(t) {
    const e = [];
    let r;
    for (; !(r = t.next()).done; ) e.push(r.value);
    return e;
  }
  function Dt(t, e) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function Nt(t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e;
  }
  const Vt = (function () {
      const t = Object.prototype.toString;
      return "[object Arguments]" === t.call(arguments)
        ? function (e) {
            return "[object Arguments]" === t.call(e);
          }
        : function (t) {
            return Dt("callee", t);
          };
    })(),
    Bt = (function () {
      const t = !{ toString: null }.propertyIsEnumerable("toString"),
        e = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
        r = (function () {
          return arguments.propertyIsEnumerable("length");
        })(),
        n = function (t, e) {
          for (var r = 0; r < t.length; ) {
            if (t[r] === e) return !0;
            r += 1;
          }
          return !1;
        };
      return "function" != typeof Object.keys || r
        ? function (i) {
            if (Object(i) !== i) return [];
            let s, o;
            const c = [],
              a = r && Vt(i);
            for (s in i) !Dt(s, i) || (a && "length" === s) || (c[c.length] = s);
            if (t) for (o = e.length - 1; o >= 0; ) (s = e[o]), Dt(s, i) && !n(c, s) && (c[c.length] = s), (o -= 1);
            return c;
          }
        : function (t) {
            return Object(t) !== t ? [] : Object.keys(t);
          };
    })();
  function qt(t) {
    return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
  }
  function Gt(t, e, r = [], n = []) {
    if (Nt(t, e)) return !0;
    if (qt(t) !== qt(e)) return !1;
    if (null == t || null == e) return !1;
    if ("function" == typeof t.equals || "function" == typeof e.equals)
      return "function" == typeof t.equals && t.equals(e) && "function" == typeof e.equals && e.equals(t);
    switch (qt(t)) {
      case "Arguments":
      case "Array":
      case "Object":
        if (null != (i = t) && "function" == typeof i.then) return t === e;
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (typeof t != typeof e || !Nt(t.valueOf(), e.valueOf())) return !1;
        break;
      case "Date":
        if (!Nt(t.valueOf(), e.valueOf())) return !1;
        break;
      case "Error":
        return t.name === e.name && t.message === e.message;
      case "RegExp":
        if (
          t.source !== e.source ||
          t.global !== e.global ||
          t.ignoreCase !== e.ignoreCase ||
          t.multiline !== e.multiline ||
          t.sticky !== e.sticky ||
          t.unicode !== e.unicode
        )
          return !1;
        break;
      case "Map":
      case "Set":
        if (!Gt(Ut(t.entries()), Ut(e.entries()), r, n)) return !1;
        break;
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break;
      default:
        return !1;
    }
    var i;
    const s = Bt(t);
    if (s.length !== Bt(e).length) return !1;
    let o = r.length - 1;
    for (; o >= 0; ) {
      if (r[o] === t) return n[o] === e;
      o -= 1;
    }
    for (r.push(t), n.push(e), o = s.length - 1; o >= 0; ) {
      const i = s[o];
      if (!Dt(i, e) || !Gt(e[i], t[i], r, n)) return !1;
      o -= 1;
    }
    return r.pop(), n.pop(), !0;
  }
  const zt = void 0 !== r(27061) && !1;
  function Yt(t, e, r) {
    if (t in r && Gt(e, r[t])) return r;
    {
      const n = {};
      for (const t in r) n[t] = r[t];
      return (n[t] = e), n;
    }
  }
  const Jt = new RegExp(
    ["^", "function", "\\(", "[^), ]+", "\\)", "\\{", '("use strict";)?', "return\\s", "[^\\.]+\\.(\\S+?);?", "\\}", "$"].join("\\s*")
  );
  new RegExp(
    [
      "^",
      "function",
      "\\(",
      "[^), ]+",
      "\\)",
      "\\{",
      '("use strict";)?',
      "(\\$_\\$wf\\(\\d+\\);)?",
      "return\\s",
      "(\\$_\\$w\\(\\d+, \\d+\\),\\s)?",
      "[^\\.]+\\.(\\S+?);?",
      "\\}",
      "$"
    ].join("\\s*")
  );
  function Qt(t) {
    return (function (t) {
      const e = Jt,
        r = t.match(e);
      if (r && r[2]) return r[2].split(".");
      throw new TypeError(
        `Expected a property expression, got "${t}".\n\n      A property expression should be a referentially transparent (no side-effects),\n      single-expression "getter" function.\n\n      Correct example: "function (x) { return x.some }" or "x => x.some".\n      Incorrect example: "function (x) { var y = x.some; return y }" or "({some}) => some"`
      );
    })(t.toString());
  }
  function Zt(t) {
    return void 0 === t
      ? (t) =>
          Ht(
            (e) => e[t],
            (e, r) => Yt(t, e, r)
          )
      : Ht(
          (e) => e[t],
          (e, r) => Yt(t, e, r)
        );
  }
  let Kt = 0;
  function Xt(t) {
    if (Kt < 10) {
      Kt++;
      const e = `x.${t.join(".")}`,
        r = `'${t.join("', '")}'`;
      !(function (t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error("[Focal]: " + t);
        try {
          throw new Error(t);
        } catch (t) {}
      })(
        `The property expression overload of Atom.lens and Lens.prop are deprecated and will be removed in next versions of Focal. Please use the key name overload for Atom.lens and Lens.key instead. You can convert your code by changing the calls:\n  a.lens(x => ${e}) to a.lens(${r}),\n  Lens.prop((x: T) => ${e}) to Lens.key<T>()(${r}).`
      );
    }
  }
  function te(t) {
    return t && "function" == typeof t.schedule;
  }
  var ee = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        K(e, t),
        (e.prototype.notifyNext = function (t, e, r, n, i) {
          this.destination.next(e);
        }),
        (e.prototype.notifyError = function (t, e) {
          this.destination.error(t);
        }),
        (e.prototype.notifyComplete = function (t) {
          this.destination.complete();
        }),
        e
      );
    })(lt),
    re = (function (t) {
      function e(e, r, n) {
        var i = t.call(this) || this;
        return (i.parent = e), (i.outerValue = r), (i.outerIndex = n), (i.index = 0), i;
      }
      return (
        K(e, t),
        (e.prototype._next = function (t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
        }),
        (e.prototype._error = function (t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }),
        (e.prototype._complete = function () {
          this.parent.notifyComplete(this), this.unsubscribe();
        }),
        e
      );
    })(lt),
    ne = function (t) {
      return function (e) {
        for (var r = 0, n = t.length; r < n && !e.closed; r++) e.next(t[r]);
        e.complete();
      };
    };
  function ie() {
    return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
  }
  var se = ie();
  var oe = function (t) {
    if (t && "function" == typeof t[ft])
      return (
        (i = t),
        function (t) {
          var e = i[ft]();
          if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
          return e.subscribe(t);
        }
      );
    if ((n = t) && "number" == typeof n.length && "function" != typeof n) return ne(t);
    if (
      (function (t) {
        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then;
      })(t)
    )
      return (
        (r = t),
        function (t) {
          return (
            r
              .then(
                function (e) {
                  t.closed || (t.next(e), t.complete());
                },
                function (e) {
                  return t.error(e);
                }
              )
              .then(null, rt),
            t
          );
        }
      );
    if (t && "function" == typeof t[se])
      return (
        (e = t),
        function (t) {
          for (var r = e[se](); ; ) {
            var n = void 0;
            try {
              n = r.next();
            } catch (e) {
              return t.error(e), t;
            }
            if (n.done) {
              t.complete();
              break;
            }
            if ((t.next(n.value), t.closed)) break;
          }
          return (
            "function" == typeof r.return &&
              t.add(function () {
                r.return && r.return();
              }),
            t
          );
        }
      );
    var e,
      r,
      n,
      i,
      s = st(t) ? "an invalid object" : "'" + t + "'";
    throw new TypeError("You provided " + s + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.");
  };
  function ce(t, e, r, n, i) {
    if ((void 0 === i && (i = new re(t, r, n)), !i.closed)) return e instanceof gt ? e.subscribe(i) : oe(e)(i);
  }
  function ae(t, e) {
    return e
      ? (function (t, e) {
          return new gt(function (r) {
            var n = new ct(),
              i = 0;
            return (
              n.add(
                e.schedule(function () {
                  i !== t.length ? (r.next(t[i++]), r.closed || n.add(this.schedule())) : r.complete();
                })
              ),
              n
            );
          });
        })(t, e)
      : new gt(ne(t));
  }
  var ue = {};
  var le,
    he,
    fe = (function () {
      function t(t) {
        this.resultSelector = t;
      }
      return (
        (t.prototype.call = function (t, e) {
          return e.subscribe(new pe(t, this.resultSelector));
        }),
        t
      );
    })(),
    pe = (function (t) {
      function e(e, r) {
        var n = t.call(this, e) || this;
        return (n.resultSelector = r), (n.active = 0), (n.values = []), (n.observables = []), n;
      }
      return (
        K(e, t),
        (e.prototype._next = function (t) {
          this.values.push(ue), this.observables.push(t);
        }),
        (e.prototype._complete = function () {
          var t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (var r = 0; r < e; r++) {
              var n = t[r];
              this.add(ce(this, n, void 0, r));
            }
          }
        }),
        (e.prototype.notifyComplete = function (t) {
          0 == (this.active -= 1) && this.destination.complete();
        }),
        (e.prototype.notifyNext = function (t, e, r) {
          var n = this.values,
            i = n[r],
            s = this.toRespond ? (i === ue ? --this.toRespond : this.toRespond) : 0;
          (n[r] = e), 0 === s && (this.resultSelector ? this._tryResultSelector(n) : this.destination.next(n.slice()));
        }),
        (e.prototype._tryResultSelector = function (t) {
          var e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }),
        e
      );
    })(ee);
  class de extends Et {
    view(...t) {
      return void 0 !== t[0]
        ? "function" == typeof t[0]
          ? new ye(this, t[0])
          : "string" == typeof t[0]
          ? new ye(this, Wt(...t.map(Zt())).get)
          : new ye(this, (e) => t[0].get(e))
        : this;
    }
  }
  class ge extends de {
    set(t) {
      this.modify(() => t);
    }
    lens(t, ...e) {
      return new _e(
        this,
        "function" == typeof t
          ? (function (t) {
              const e = Qt(t);
              return zt && Xt(e), Wt(...e.map(Zt()));
            })(t)
          : "string" == typeof t
          ? Wt(Zt(t), ...e.map((t) => Zt(t)))
          : t,
        Gt
      );
    }
  }
  class be extends ge {
    constructor(t) {
      super(t);
    }
    get() {
      return this.getValue();
    }
    modify(t) {
      const e = this.getValue(),
        r = t(e);
      Gt(e, r) || this.next(r);
    }
    set(t) {
      Gt(this.getValue(), t) || this.next(t);
    }
  }
  class _e extends ge {
    _source;
    _lens;
    _eq;
    constructor(t, e, r = Gt) {
      super(void 0), (this._source = t), (this._lens = e), (this._eq = r);
    }
    get() {
      return this._subscription ? this.getValue() : this._lens.get(this._source.get());
    }
    modify(t) {
      this._source.modify((e) => this._lens.modify(t, e));
    }
    set(t) {
      this._source.modify((e) => this._lens.set(t, e));
    }
    _onSourceValue(t) {
      const e = this.getValue(),
        r = this._lens.get(t);
      this._eq(e, r) || this.next(r);
    }
    _subscription = null;
    _refCount = 0;
    subscribe(...t) {
      this._subscription || (this._subscription = this._source.subscribe((t) => this._onSourceValue(t))), this._refCount++;
      const e = new ct(() => {
        --this._refCount <= 0 && this._subscription && (this._subscription.unsubscribe(), (this._subscription = null));
      });
      return e.add(super.subscribe(...t)), e;
    }
    unsubscribe() {
      this._subscription && (this._subscription.unsubscribe(), (this._subscription = null)), (this._refCount = 0), super.unsubscribe();
    }
  }
  class ye extends de {
    _source;
    _getter;
    _eq;
    constructor(t, e, r = Gt) {
      super(void 0), (this._source = t), (this._getter = e), (this._eq = r);
    }
    get() {
      return this._subscription ? this.getValue() : this._getter(this._source.get());
    }
    _onSourceValue(t) {
      const e = this.getValue(),
        r = this._getter(t);
      this._eq(e, r) || this.next(r);
    }
    _subscription = null;
    _refCount = 0;
    subscribe(...t) {
      this._subscription || (this._subscription = this._source.subscribe((t) => this._onSourceValue(t))), this._refCount++;
      const e = new ct(() => {
        --this._refCount <= 0 && this._subscription && (this._subscription.unsubscribe(), (this._subscription = null));
      });
      return e.add(super.subscribe(...t)), e;
    }
    unsubscribe() {
      this._subscription && (this._subscription.unsubscribe(), (this._subscription = null)), (this._refCount = 0), super.unsubscribe();
    }
  }
  class me extends de {
    _sources;
    _combineFn;
    _eq;
    constructor(t, e, r = Gt) {
      super(void 0), (this._sources = t), (this._combineFn = e), (this._eq = r);
    }
    get() {
      return this._subscription ? this.getValue() : this._combineFn(this._sources.map((t) => t.get()));
    }
    _onSourceValues(t) {
      const e = this.getValue(),
        r = this._combineFn(t);
      this._eq(e, r) || this.next(r);
    }
    _subscription = null;
    _refCount = 0;
    subscribe(...t) {
      this._subscription ||
        (this._subscription = (function () {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
          var r = void 0,
            n = void 0;
          return (
            te(t[t.length - 1]) && (n = t.pop()),
            "function" == typeof t[t.length - 1] && (r = t.pop()),
            1 === t.length && it(t[0]) && (t = t[0]),
            ae(t, n).lift(new fe(r))
          );
        })(this._sources).subscribe((t) => this._onSourceValues(t))),
        this._refCount++;
      const e = new ct(() => {
        --this._refCount <= 0 && this._subscription && (this._subscription.unsubscribe(), (this._subscription = null));
      });
      return e.add(super.subscribe(...t)), e;
    }
    unsubscribe() {
      this._subscription && (this._subscription.unsubscribe(), (this._subscription = null)), (this._refCount = 0), super.unsubscribe();
    }
  }
  !(function (t) {
    (t.create = function (t) {
      return new be(t);
    }),
      (t.log = function (t, e) {
        const r = (t, e, r) => console.log("%c" + t, `color: ${e}; font-weight: bold`, r);
        let n = t.get();
        return (
          t.subscribe((t) => {
            "function" == typeof e
              ? e(n, t)
              : (console.group(`UPDATE ${e ? `TYPE: ${e} ` : ""}@ ${new Date().toTimeString()}`),
                r("prev state", "#9E9E9E", n),
                r("next state", "#4CAF50", t),
                console.groupEnd()),
              (n = t);
          }),
          t
        );
      }),
      (t.combine = function (...t) {
        return new me(t.slice(void 0, -1), (e) => t[t.length - 1](...e));
      }),
      (t.fromObservable = function (e) {
        const r = new Et(null),
          n = e.pipe(
            ((i = (e) => {
              const n = r.value;
              null === n ? r.next(t.create(e)) : n.set(e);
            }),
            function (t) {
              return t.lift(new St(i, s, o));
            }),
            Pt()
          );
        var i, s, o;
        return new gt((t) => {
          const e = new ct();
          var i, s;
          return (
            e.add(
              r
                .pipe(
                  ((i = (t) => !!t),
                  function (t) {
                    return t.lift(new $t(i, s));
                  })
                )
                .subscribe(t)
            ),
            e.add(
              n.subscribe(
                void 0,
                (e) => t.error(e),
                () => t.complete()
              )
            ),
            e
          );
        });
      });
  })(le || (le = {}));
  class ve {
    static getInstance() {
      if (void 0 === this._instanceShared) throw new Error("shared Env not inited yet");
      return this._instanceShared;
    }
    static initShared(t) {
      if (void 0 !== this._instanceShared) throw new Error("shared Env already inited");
      this._instanceShared = t;
    }
    constructor(t, e = le.create(!1), r = le.create(!1)) {
      (this._enableHistoryLoggerInProd = e),
        (this._enableAdvancedHistoryLoggerInProd = r),
        (this.enableHistoryLoggerInProd = (t = !0) => {
          t && !this._enableHistoryLoggerInProd.get()
            ? (console.warn("Debug reports have been enabled"), this._enableHistoryLoggerInProd.set(!0))
            : !t &&
              this._enableHistoryLoggerInProd.get() &&
              (console.warn("Debug reports have been disabled"), this._enableHistoryLoggerInProd.set(!1));
        }),
        (this.enableAdvancedHistoryLoggerInProd = (t = !0) => {
          t && !this._enableAdvancedHistoryLoggerInProd.get()
            ? (console.warn("Advanced logging has been enabled"), this._enableAdvancedHistoryLoggerInProd.set(!0))
            : !t &&
              this._enableAdvancedHistoryLoggerInProd.get() &&
              (console.warn("Advanced logging has been disabled"), this._enableAdvancedHistoryLoggerInProd.set(!1));
        });
      const n = t.testArgs,
        i = n && n.processEnv ? n.processEnv : C.fromBrowserify(),
        s = L.getTargetEnv(i);
      this._initLogger(t, s);
      const o = (function (t, e, r, n, i, s) {
        const o = L.create(t, e, r, n, i, s);
        return M.init(o), (self.GR_CFG = M.get()), o;
      })(t.browser, t.extensionType, t.deploymentType, t.context, i, s);
      (this.context = t.context), (this.config = o);
    }
    _initLogger(t, e) {
      this.historyLogsService = U.create({
        ...t.historyLoggerExtraArgs,
        enabledInProd: this._enableHistoryLoggerInProd,
        enableAdvancedInProd: this._enableAdvancedHistoryLoggerInProd
      });
      const r = "prod" !== e || "cs" !== t.context,
        n = {
          create: (t, e) => {
            return new Y(
              t,
              { writer: new Q(), filterFn: r ? (t) => !0 : ((n = V.ERROR), (t) => q(t.level) >= q(n)) },
              this.historyLogsService,
              e
            );
            var n;
          }
        };
      this.logger = n;
    }
  }
  function we() {
    return ve.getInstance();
  }
  !(function (t) {
    t.create = function (t, e) {
      return new z(t, () => we().logger.create(t, e));
    };
  })(he || (he = {}));
  class Ee {
    constructor(t) {
      var e;
      (this._didReceiveReadyMessage = !1),
        (this._onMessageListeners = []),
        (this._pendingOutgoingMessages = []),
        (this._onMessage = (t) => {
          null != t.source &&
            t.source === this._iframe.contentWindow &&
            ((this._didReceiveReadyMessage = !0), this._onMessageListeners.forEach((e) => e(t.data)), this._flushPendingOutgoingMessages());
        }),
        (this._flushPendingOutgoingMessages = () => {
          if (this._didReceiveReadyMessage && 0 !== this._pendingOutgoingMessages.length && null != this._iframe.contentWindow) {
            for (const t of this._pendingOutgoingMessages) this._iframe.contentWindow.postMessage(t, this._iframeTargetOrigin);
            this._pendingOutgoingMessages.length = 0;
          }
        }),
        (this._iframe = t);
      const r = new URL(t.src, self.location.href),
        n = r.origin,
        i = self.origin;
      (this._iframeTargetOrigin =
        "null" === i ||
        ("http:" === self.location.protocol && "https:" === r.protocol) ||
        !1 === (null === (e = t.getAttribute("sandbox")) || void 0 === e ? void 0 : e.includes("allow-same-origin"))
          ? "*"
          : n),
        self.addEventListener("message", this._onMessage);
    }
    postMessage(t) {
      null != this._iframe.contentWindow && this._didReceiveReadyMessage
        ? (this._flushPendingOutgoingMessages(), this._iframe.contentWindow.postMessage(t, this._iframeTargetOrigin))
        : this._pendingOutgoingMessages.push(t);
    }
    onMessage(t) {
      this._onMessageListeners.push(t);
    }
    dispose() {
      self.removeEventListener("message", this._onMessage),
        (this._onMessageListeners.length = 0),
        (this._pendingOutgoingMessages.length = 0);
    }
  }
  var xe;
  !(function (t) {
    (t.postMessage = "postMessage"), (t.resize = "resize"), (t.setSource = "setSource");
  })(xe || (xe = {}));
  const Se = { id: "0", type: "request", action: "ping", data: null };
  (function () {
    const t = he.create("gOS-sandbox");
    try {
      const e = (function () {
          const t = document.createElement("iframe");
          return (
            (t.style.border = "none"),
            (t.style.width = `${self.innerWidth}`),
            (t.style.height = `${self.innerHeight}`),
            (t.allow = "clipboard-read *; clipboard-write *"),
            t
          );
        })(),
        r = new Ee(e);
      document.body.appendChild(e);
      const n = setInterval(() => {
        var t;
        null === (t = e.contentWindow) || void 0 === t || t.postMessage(Se, "*");
      }, 4);
      r.onMessage((t) => {
        clearInterval(n), self.parent.postMessage(t, "*");
      }),
        self.addEventListener("message", (n) => {
          if (null == self.parent || n.source !== self.parent) return;
          const i = (function (t) {
            const e = t.data;
            if (null != e && "object" == typeof e && "string" == typeof e.type) return e;
          })(n);
          if (null != i)
            switch (i.type) {
              case xe.setSource:
                e.src = i.url;
                break;
              case xe.resize:
                (e.width = `${i.size.width}`), (e.height = `${i.size.height}`);
                break;
              case xe.postMessage:
                r.postMessage(i.data);
            }
          else t.debug("invalid message", n.data);
        }),
        self.parent.postMessage(Se, "*");
    } catch (e) {
      t.error(e);
    }
  })();
})();
