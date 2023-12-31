!function () {
  "use strict";
  var i = this,
    e,
    t,
    e,
    p,
    n,
    s,
    f,
    m,
    v,
    y,
    h,
    g,
    r,
    o,
    b;
  function S(e, t) {
    return r.call(e, t);
  }
  function c(e, t) {
    var i,
      r,
      o,
      n,
      t,
      s,
      c,
      a,
      u,
      l,
      d,
      p,
      f = t && t.split("/"),
      m = h.map,
      v = (m && m["*"]) || {};
    if (e) {
      for (
        t = (e = e.split("/")).length - 1,
          h.nodeIdCompat && b.test(e[t]) && (e[t] = e[t].replace(b, "")),
          "." === e[0].charAt(0) && f && (e = (p = f.slice(0, f.length - 1)).concat(e)),
          u = 0;
        u < e.length;
        u++
      )
        "." === (d = e[u])
          ? (e.splice(u, 1), --u)
          : ".." !== d || 0 === u || (1 === u && ".." === e[2]) || ".." === e[u - 1] || (0 < u && (e.splice(u - 1, 2), (u -= 2)));
      e = e.join("/");
    }
    if ((f || v) && m) {
      for (u = (i = e.split("/")).length; 0 < u; --u) {
        if (((r = i.slice(0, u).join("/")), f))
          for (l = f.length; 0 < l; --l)
            if ((o = (o = m[f.slice(0, l).join("/")]) && o[r])) {
              (n = o), (s = u);
              break;
            }
        if (n) break;
        !c && v && v[r] && ((c = v[r]), (a = u));
      }
      !n && c && ((n = c), (s = a)), n && (i.splice(0, s, n), (e = i.join("/")));
    }
    return e;
  }
  function w(t, i) {
    return function () {
      var e = o.call(arguments, 0);
      return "string" != typeof e[0] && 1 === e.length && e.push(null), s.apply(p, e.concat([t, i]));
    };
  }
  function a(t) {
    return function (e) {
      return c(e, t);
    };
  }
  function _(t) {
    return function (e) {
      v[t] = e;
    };
  }
  function P(e) {
    var t;
    if ((S(y, e) && ((t = y[e]), delete y[e], (g[e] = !0), n.apply(p, t)), S(v, e) || S(g, e))) return v[e];
    throw new Error("No " + e);
  }
  function u(e) {
    var t,
      i = e ? e.indexOf("!") : -1;
    return -1 < i && ((t = e.substring(0, i)), (e = e.substring(i + 1, e.length))), [t, e];
  }
  function x(e) {
    return e ? u(e) : [];
  }
  function l(e) {
    return function () {
      return (h && h.config && h.config[e]) || {};
    };
  }
  (v = {}),
    (y = {}),
    (h = {}),
    (g = {}),
    (r = Object.prototype.hasOwnProperty),
    (o = [].slice),
    (b = /\.js$/),
    (f = function (e, t) {
      var i,
        r = u(e),
        o = r[0],
        t = t[1];
      return (
        (e = r[1]),
        o && (i = P((o = c(o, t)))),
        o ? (e = i && i.normalize ? i.normalize(e, a(t)) : c(e, t)) : ((o = (r = u((e = c(e, t))))[0]), (e = r[1]), o && (i = P(o))),
        { f: o ? o + "!" + e : e, n: e, pr: o, p: i }
      );
    }),
    (m = {
      require: function (e) {
        return w(e);
      },
      exports: function (e) {
        var t = v[e];
        return void 0 !== t ? t : (v[e] = {});
      },
      module: function (e) {
        return { id: e, uri: "", exports: v[e], config: l(e) };
      }
    }),
    (n = function (e, t, i, r) {
      var o,
        n,
        s,
        c,
        a,
        u,
        l = [],
        s = typeof i,
        d,
        u = x((r = r || e));
      if ("undefined" == s || "function" == s) {
        for (t = !t.length && i.length ? ["require", "exports", "module"] : t, a = 0; a < t.length; a += 1)
          if ("require" === (n = (c = f(t[a], u)).f)) l[a] = m.require(e);
          else if ("exports" === n) (l[a] = m.exports(e)), (d = !0);
          else if ("module" === n) o = l[a] = m.module(e);
          else if (S(v, n) || S(y, n) || S(g, n)) l[a] = P(n);
          else {
            if (!c.p) throw new Error(e + " missing " + n);
            c.p.load(c.n, w(r, !0), _(n), {}), (l[a] = v[n]);
          }
        (s = i ? i.apply(v[e], l) : void 0),
          e && (o && o.exports !== p && o.exports !== v[e] ? (v[e] = o.exports) : (s === p && d) || (v[e] = s));
      } else e && (v[e] = i);
    }),
    (e =
      t =
      s =
        function (e, t, i, r, o) {
          if ("string" == typeof e) return m[e] ? m[e](t) : P(f(e, x(t)).f);
          if (!e.splice) {
            if (((h = e).deps && s(h.deps, h.callback), !t)) return;
            t.splice ? ((e = t), (t = i), (i = null)) : (e = p);
          }
          return (
            (t = t || function () {}),
            "function" == typeof i && ((i = r), (r = o)),
            r
              ? n(p, e, t, i)
              : setTimeout(function () {
                  n(p, e, t, i);
                }, 4),
            s
          );
        }),
    (s.config = function (e) {
      return s(e);
    }),
    (e._defined = v),
    ((e = function (e, t, i) {
      if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
      t.splice || ((i = t), (t = [])), S(v, e) || S(y, e) || (y[e] = [e, t, i]);
    }).amd = { jQuery: !0 });
  var M =
      (this && this.__awaiter) ||
      function (n, s, c, a) {
        return new (c = c || Promise)(function (e, t) {
          function i(e) {
            try {
              o(a.next(e));
            } catch (e) {
              t(e);
            }
          }
          function r(e) {
            try {
              o(a.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function o(t) {
            t.done
              ? e(t.value)
              : new c(function (e) {
                  e(t.value);
                }).then(i, r);
          }
          o((a = a.apply(n, s || [])).next());
        });
      },
    I =
      (this && this.__generator) ||
      function (e, i) {
        var r = {
            label: 0,
            sent: function () {
              if (1 & s[0]) throw s[1];
              return s[1];
            },
            trys: [],
            ops: []
          },
          o,
          n,
          s,
          t,
          t = { next: c(0), throw: c(1), return: c(2) };
        return (
          "function" == typeof Symbol &&
            (t[Symbol.iterator] = function () {
              return this;
            }),
          t
        );
        function c(t) {
          return function (e) {
            return a([t, e]);
          };
        }
        function a(t) {
          if (o) throw new TypeError("Generator is already executing.");
          for (; r; )
            try {
              if (
                ((o = 1),
                n && (s = 2 & t[0] ? n.return : t[0] ? n.throw || ((s = n.return) && s.call(n), 0) : n.next) && !(s = s.call(n, t[1])).done)
              )
                return s;
              switch (((n = 0), (t = s ? [2 & t[0], s.value] : t)[0])) {
                case 0:
                case 1:
                  s = t;
                  break;
                case 4:
                  return r.label++, { value: t[1], done: !1 };
                case 5:
                  r.label++, (n = t[1]), (t = [0]);
                  continue;
                case 7:
                  (t = r.ops.pop()), r.trys.pop();
                  continue;
                default:
                  if (!(s = 0 < (s = r.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                    r = 0;
                    continue;
                  }
                  if (3 === t[0] && (!s || (t[1] > s[0] && t[1] < s[3]))) r.label = t[1];
                  else if (6 === t[0] && r.label < s[1]) (r.label = s[1]), (s = t);
                  else {
                    if (!(s && r.label < s[2])) {
                      s[2] && r.ops.pop(), r.trys.pop();
                      continue;
                    }
                    (r.label = s[2]), r.ops.push(t);
                  }
              }
              t = i.call(e, r);
            } catch (e) {
              (t = [6, e]), (n = 0);
            } finally {
              o = s = 0;
            }
          if (5 & t[0]) throw t[1];
          return { value: t[0] ? t[1] : void 0, done: !0 };
        }
      },
    d =
      (this && this.__decorate) ||
      function (e, t, i, r) {
        var o = arguments.length,
          n = o < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, i)) : r,
          s;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, i, r);
        else for (var c = e.length - 1; 0 <= c; c--) (s = e[c]) && (n = (o < 3 ? s(n) : 3 < o ? s(t, i, n) : s(t, i)) || n);
        return 3 < o && n && Object.defineProperty(t, i, n), n;
      },
    F =
      (this && this.__extends) ||
      ((O = function (e, t) {
        return (O =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array
            ? function (e, t) {
                e.__proto__ = t;
              }
            : function (e, t) {
                for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
              }))(e, t);
      }),
      function (e, t) {
        function i() {
          this.constructor = e;
        }
        O(e, t), (e.prototype = null === t ? Object.create(t) : ((i.prototype = t.prototype), new i()));
      }),
    O;
  e("common/services/form-detection/form-profile", ["require", "exports"], function (e, t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
  }),
    e("common/services/form-detection/index", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/repository", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/segment.service", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/enums/feature-type", ["require", "exports"], function (e, t) {
      var i, t;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t = i = t.FeatureType || (t.FeatureType = {})).BetterGeneratePasswordEnabled = "better_generate_password_enabled"),
        (t.FamilyLegacySharedFoldersEnabled = "family_legacy_shared_folders_enabled"),
        (t.FamilySharedFoldersEnabled = "family_shared_folders_enabled"),
        (t.FormfillMigration = "formfill_migration"),
        (t.Freamon = "freamon"),
        (t.IntroTutorialVersion = "intro_tutorial_version"),
        (t.IsDogfood = "isDogfood"),
        (t.IsMobileActive = "is_mobile_active"),
        (t.OmarDrawer = "omardrawer"),
        (t.OmarIa = "omaria"),
        (t.OmarInfieldB = "omar_infield_b"),
        (t.OmarInfieldC = "omar_infield_c"),
        (t.OneToOneSharingRestricted = "one_to_one_sharing_restricted"),
        (t.PasswordSubmittedEvent = "password_submitted_event"),
        (t.Pdkdf2IterationsMigration = "pbkdf2_iterations_migration"),
        (t.TryFamiliesEnabled = "try_families_enabled"),
        (t.Ziggy = "ziggy");
    }),
    e("common/enums/fill-source-type", ["require", "exports"], function (e, t) {
      var i, t;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t = i = t.FillSourceType || (t.FillSourceType = {})).Autofill = "Autofill"),
        (t.Infield = "Infield"),
        (t.IconDropdown = "Icon Dropdown"),
        (t.Vault = "Vault"),
        (t.ContextMenu = "Context Menu"),
        (t.HotKey = "HotKey"),
        (t.Generated = "Generated"),
        (t.Manual = "Manual");
    }),
    e("common/enums/repository-type", ["require", "exports"], function (e, t) {
      var i;
      Object.defineProperty(t, "__esModule", { value: !0 }), ((i = t.RepositoryType || (t.RepositoryType = {})).Feature = "Feature");
    }),
    e("common/enums/resolver-type", ["require", "exports"], function (e, t) {
      var i, t;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t = i = t.ResolverType || (t.ResolverType = {})).PasswordSubmitted = "Password Submitted"),
        (t.InjectedPasswordSubmitted = "Injected Password Submitted");
    }),
    e("common/enums/save-site-action", ["require", "exports"], function (e, t) {
      var i, t;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t = i = t.SaveSiteAction || (t.SaveSiteAction = {})).Add = "Add"),
        (t.OK = "OK"),
        (t.Update = "Update"),
        (t.NotNow = "Not Now"),
        (t.Undo = "Undo"),
        (t.Never = "Never");
    }),
    e("common/enums/save-site-event-type", ["require", "exports"], function (e, t) {
      var i, t;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t = i = t.SaveSiteDialogEventType || (t.SaveSiteDialogEventType = {})).SaveSiteDialogAction = "Save a Site Action Clicked"),
        (t.SaveSiteDialogDuplicateDeleteClicked = "Save a Site Duplicate Delete Clicked"),
        (t.SaveSiteDialogDuplicateKeepClicked = "Save a Site Duplicate Keep Clicked"),
        (t.SaveSiteDialogEditClicked = "Save a Site Edit Clicked"),
        (t.SaveSiteDialogNewClicked = "Save a Site New Clicked"),
        (t.SaveSiteDialogSelectClicked = "Save a Site Select Clicked"),
        (t.SaveSiteDialogViewed = "Save a Site Viewed"),
        (t.SaveSiteDialogAnotherClicked = "Save a Site Another Clicked");
    }),
    e("common/enums/segment-event-type", ["require", "exports"], function (e, t) {
      var i, t;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t = i = t.SegmentEventType || (t.SegmentEventType = {})).SaveSiteDialog = "savesitedialog"),
        (t.ExtensionMenuItemClicked = "extensionMenuItemClicked"),
        (t.FeedbackGoalClicked = "feedbackGoalClicked"),
        (t.FeedbackIssueClicked = "feedbackIssueClicked"),
        (t.CrossDomainFillWarningShown = "crossdomainfillwarningshown"),
        (t.FeedbackSent = "feedbacksent");
    }),
    e("common/enums/service-type", ["require", "exports"], function (e, t) {
      var i, t;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t = i = t.ServiceType || (t.ServiceType = {})).BasicAuth = "BasicAuth"),
        (t.ContentScriptTools = "ContentScriptTools"),
        (t.BackgroundTools = "BackgroundTools"),
        (t.DomUtils = "DomUtils"),
        (t.FormDetection = "FormDetection"),
        (t.FormParser = "FormParser"),
        (t.Segment = "Segment"),
        (t.Site = "Site"),
        (t.StringUtils = "StringUtils"),
        (t.Topic = "Topic"),
        (t.WebRequest = "WebRequest"),
        (t.WebRequestShim = "WebRequestShim"),
        (t.SiteNotification = "SiteNotification");
    }),
    e("common/enums/topic-type", ["require", "exports", "common/legacy"], function (e, t, i) {
      var r, t;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        ((t = r = t.TopicType || (t.TopicType = {}))[(t.ClearData = i.LegacyGlobalCommon.Topics.CLEAR_DATA)] = "ClearData"),
        (t[(t.FilledGeneratedPassword = i.LegacyGlobalCommon.Topics.FILLED_GENERATED_PW)] = "FilledGeneratedPassword"),
        (t[(t.Initialized = i.LegacyGlobalCommon.Topics.INITIALIZED)] = "Initialized"),
        (t[(t.Login = i.LegacyGlobalCommon.Topics.LOGIN)] = "Login"),
        (t[(t.LoginFinished = i.LegacyGlobalCommon.Topics.LOGIN_FINISHED)] = "LoginFinished"),
        (t[(t.ProcessedFormSubmit = i.LegacyGlobalCommon.Topics.PROCESSED_FORM_SUBMIT)] = "ProcessedFormSubmit"),
        (t[(t.RequestFrameworkInitialized = i.LegacyGlobalCommon.Topics.REQUEST_FRAMEWORK_INITIALIZED)] = "RequestFrameworkInitialized"),
        (t[(t.PasswordFormSubmitted = i.LegacyGlobalCommon.Topics.PASSWORD_FORM_SUBMITTED)] = "PasswordFormSubmitted");
    }),
    e(
      "common/enums/index",
      [
        "require",
        "exports",
        "common/enums/feature-type",
        "common/enums/fill-source-type",
        "common/enums/repository-type",
        "common/enums/resolver-type",
        "common/enums/save-site-action",
        "common/enums/save-site-event-type",
        "common/enums/segment-event-type",
        "common/enums/service-type",
        "common/enums/topic-type"
      ],
      function (e, i, t, r, o, n, s, c, a, u, l) {
        function d(e) {
          for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t]);
        }
        Object.defineProperty(i, "__esModule", { value: !0 }), d(t), d(r), d(o), d(n), d(s), d(c), d(a), d(u), d(l);
      }
    ),
    e("common/interfaces/segment-event", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/serializable-callback", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/serializable-value", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/service", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/web-request-shim.service", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/web-request.service", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/sitenotification.service", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/index", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("background/interfaces/content-script-target", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("background/legacy", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LegacyGlobal = i);
    }),
    e(
      "background/services/form-parser/field-parsers/field-parser.abstract",
      ["require", "exports", "background/legacy"],
      function (e, t, i) {
        var r;
        function o() {
          this.operations = [];
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (o.getFormFieldRegex = function (e) {
            var e = i.LegacyGlobal.get_ff_translation(e) || this.FormFieldRegex[e];
            if (e) return new RegExp(e);
          }),
          (o.regexMatches = function (t, e) {
            var i = !1,
              r;
            return (
              t &&
                ((r = function (e, t) {
                  return "string" == typeof t && e.test(t.toLowerCase());
                }),
                Array.isArray(e)
                  ? e.forEach(function (e) {
                      return (i = i || r(t, e));
                    })
                  : (i = r(t, e))),
              i
            );
          }),
          (o.prototype.parse = function (e, t) {
            for (var i = null, r = 0, o = this.operations, n, i; r < o.length && !(i = (0, o[r])(e, t)) && !1 !== i; r++);
            return i;
          }),
          (o.FormFieldRegex = { ff_otp_regexp: "(?:otc|otp|pin|token|rsa|totp)|(validation|verification|challenge|mfa).*code" }),
          (t.FieldParserAbstract = o);
      }
    ),
    e(
      "background/services/form-parser/form-meta-data",
      ["require", "exports", "background/services/form-parser/field-parsers/field-parser.abstract"],
      function (e, t, i) {
        var r;
        function o(e) {
          var t = this;
          (this.passwordsByValue = {}),
            (this.textFieldsByValue = {}),
            (this.textFieldsByType = {}),
            (this.uniqueTextValues = []),
            (this.uniquePasswords = []),
            e.fields &&
              (e.fields.forEach(function (e) {
                "password" !== e.type || "" === e.value || t.isOneTimePasswordField(e)
                  ? (t.aggregateField(e, e.value, t.textFieldsByValue), t.aggregateField(e, e.type, t.textFieldsByType))
                  : t.aggregateField(e, e.value, t.passwordsByValue);
              }),
              (this.uniqueTextValues = Object.keys(this.textFieldsByValue)),
              (this.uniquePasswords = Object.keys(this.passwordsByValue)));
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (o.prototype.aggregateField = function (e, t, i) {
            var r = i[t];
            r ? ++r.count : (i[t] = { field: e, count: 1 });
          }),
          (o.prototype.isOneTimePasswordField = function (e) {
            return (
              e &&
              i.FieldParserAbstract.regexMatches(i.FieldParserAbstract.getFormFieldRegex("ff_otp_regexp"), [
                e.id,
                e.attributes.name,
                e.label
              ])
            );
          }),
          (t.FormMetaData = o);
      }
    ),
    e("background/interfaces/parsed-form", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("background/interfaces/index", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("background/interfaces/legacy", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/interfaces/legacy", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("common/legacy", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LegacyGlobalCommon = i);
    }),
    e("common/module.abstract", ["require", "exports"], function (e, t) {
      var i;
      function r() {
        var e = this;
        (this._isInitialized = !1),
          (this.initializedQueue = []),
          setTimeout(function () {
            return M(e, void 0, void 0, function () {
              return I(this, function (e) {
                switch (e.label) {
                  case 0:
                    return [4, this.initialize()];
                  case 1:
                    return e.sent(), [4, this.postInitialize()];
                  case 2:
                    for (e.sent(), this._isInitialized = !0; this.initializedQueue.length; )
                      try {
                        this.initializedQueue.pop()();
                      } catch (e) {
                        console.error(e);
                      }
                    return [2];
                }
              });
            });
          });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (r.prototype.isInitialized = function (e) {
          this._isInitialized ? e() : this.initializedQueue.push(e);
        }),
        (t.ModuleAbstract = r);
    }),
    e("common/provider.abstract", ["require", "exports"], function (e, t) {
      var i;
      function r(e, i) {
        var r = this;
        void 0 === i && (i = !0),
          (this.instances = {}),
          (this.initialized = !1),
          e &&
            e.size &&
            ((this.map = e),
            this.map.forEach(function (e, t) {
              (e.delegated && !i) || (r.instances[t] = new e.ctor());
            }));
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (r.prototype.initialize = function () {
          var t = this;
          Object.keys(this.instances).forEach(function (e) {
            return t.instances[e].initialize();
          }),
            (this.initialized = !0);
        }),
        (r.prototype.postInitialize = function () {
          var t = this;
          Object.keys(this.instances).forEach(function (e) {
            "function" == typeof t.instances[e].postInitialize && t.instances[e].postInitialize();
          });
        }),
        (r.prototype.teardown = function () {
          var t = this;
          Object.keys(this.instances).forEach(function (e) {
            t.instances[e] && "function" == typeof t.instances[e].destroy && t.instances[e].destroy();
          });
        }),
        (t.ProviderAbstract = r);
    }),
    e("common/decorators/register-repository.decorator", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = new Map();
      function i(t, i) {
        return (
          void 0 === i && (i = !1),
          function (e) {
            r.set(t, { ctor: e, delegated: i });
          }
        );
      }
      function o() {
        return r;
      }
      (t.RegisterRepository = i), (t.getRepositoryRegistry = o);
    }),
    e("common/decorators/register-service.decorator", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = new Map();
      function i(t, i) {
        return (
          void 0 === i && (i = !1),
          function (e) {
            r.set(t, { ctor: e, delegated: i });
          }
        );
      }
      function o() {
        return r;
      }
      (t.RegisterService = i), (t.getServiceRegistry = o);
    }),
    e("common/messaging/messaging", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = new WeakMap();
      function i(e, t) {
        var e = e.constructor,
          i = a.get(e);
        i && i.size ? i.add(t) : (i = new Set([t])), a.set(e, i);
      }
      t.addVisibleMethod = i;
      var u = null;
      function r() {
        return u;
      }
      function l(e, t) {
        var i;
        "function" == typeof t
          ? ((i = void 0),
            "string" == typeof e
              ? (i = e)
              : e instanceof Error &&
                (i = "string" == typeof e.message ? e.message : "function" == typeof e.toString ? e.toString() : "Unknown error"),
            t(i))
          : console.error(e);
      }
      function o(r, o, n, s, c) {
        return (
          void 0 === n && (n = []),
          M(this, void 0, void 0, function () {
            var t, t, i;
            return I(this, function (e) {
              switch (e.label) {
                case 0:
                  if ((e.trys.push([0, 3, 4, 5]), !r || !r.constructor)) throw new Error("No target provided!");
                  if (!a.has(r.constructor)) throw new Error("Target has no visible methods.");
                  if (!a.get(r.constructor).has(o)) throw new Error("Method [ " + o + " ] is not a visible method.");
                  if ("function" != typeof (t = r[o]))
                    throw new Error("Method [ " + o + " ] is not a function or does not exist on the target.");
                  return ((u = Object.freeze({ calleeTab: Object.freeze(c) })),
                  (t = t.bind(r).apply(void 0, n)) && "function" == typeof t.then)
                    ? [4, t]
                    : [3, 2];
                case 1:
                  (t = e.sent()), (e.label = 2);
                case 2:
                  return s(null, t), [3, 5];
                case 3:
                  return l((i = e.sent()), s), [3, 5];
                case 4:
                  return (u = null), [7];
                case 5:
                  return [2];
              }
            });
          })
        );
      }
      (t.getInvokatingMessageContext = r), (t.handleCallbackError = l), (t.callMethod = o);
    }),
    e("common/decorators/visible.decorator", ["require", "exports", "common/messaging/messaging"], function (e, t, i) {
      function r(e, t) {
        i.addVisibleMethod(e, t);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.Visible = r);
    }),
    e(
      "common/decorators/index",
      [
        "require",
        "exports",
        "common/decorators/register-repository.decorator",
        "common/decorators/register-service.decorator",
        "common/decorators/visible.decorator"
      ],
      function (e, i, t, r, o) {
        function n(e) {
          for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t]);
        }
        Object.defineProperty(i, "__esModule", { value: !0 }), n(t), n(r), n(o);
      }
    ),
    e("common/interfaces/site.service", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e(
      "common/services/topic/topic.service",
      ["require", "exports", "common/decorators/index", "common/enums/index", "common/legacy"],
      function (e, t, i, r, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          ((s.prototype.initialize = function () {}),
          (s.prototype.subscribe = function (e, t) {
            o.LegacyGlobalCommon.Topics.get(e).subscribe(function (e) {
              return t(e);
            });
          }),
          (s = d([i.RegisterService(r.ServiceType.Topic)], s)));
        function s() {}
        t.TopicService = s;
      }
    ),
    e(
      "common/services/utils/string-utils.service",
      ["require", "exports", "common/decorators/index", "common/enums/index"],
      function (e, t, i, r) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
          ((n.prototype.initialize = function () {}),
          (n.prototype.stringContains = function (e, t) {
            if (e && t) {
              Array.isArray(t) || (t = [t]);
              for (var i = 0; i < t.length; ++i) if (-1 < e.indexOf(t[i])) return !0;
            }
            return !1;
          }),
          (n.prototype.containsMaskingCharacter = function (e) {
            return -1 < e.indexOf("*") || -1 < e.indexOf(String.fromCharCode(8226));
          }),
          (n = d([i.RegisterService(r.ServiceType.StringUtils)], n)));
        function n() {}
        t.StringUtilsService = n;
      }
    ),
    e("content-script/interfaces/content-script-instances-info", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("content-script/interfaces/index", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("content-script/interfaces/legacy", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    e("content-script/legacy", ["require", "exports"], function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.LegacyGlobal = i);
    }),
    e(
      "content-script/repositories/repository-provider",
      ["require", "exports", "common/provider.abstract", "content-script/legacy"],
      function (e, t, i, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i =
            ((r = i.ProviderAbstract),
            F(o, r),
            (o.prototype.getRepository = function (e, t) {
              var i, r;
              if (this.initialized) (r = this.instances[e]) || (i = "Cannot find repository [ " + e + " ]");
              else {
                if (t) return void this.queue.push({ repositoryType: e, callback: t });
                i = "Repository provider is undefined.";
              }
              if (i) throw new Error(i);
              if (!t) return r;
              t(null, r);
            }),
            (o.prototype.initialize = function () {
              for (r.prototype.initialize.call(this); this.queue.length; )
                try {
                  var e = this.queue.shift(),
                    t = e.repositoryType,
                    i = e.callback;
                  this.getRepository(t, i);
                } catch (e) {
                  console.error(e);
                }
            }),
            (o.prototype.postInitialize = function () {
              r.prototype.postInitialize.call(this);
            }),
            (o.prototype.teardown = function () {
              r.prototype.teardown.call(this);
            }),
            o),
          r;
        function o() {
          var e = (null !== r && r.apply(this, arguments)) || this;
          return (e.queue = []), e;
        }
        function s(e, t, o, i) {
          if ("function" != typeof i)
            return new Promise(function (i, r) {
              n.LegacyGlobal.bg.LPModule.callRepository(e, t, o, function (e, t) {
                e ? r(e) : i(t);
              });
            });
          n.LegacyGlobal.bg.LPModule.callRepository(e, t, o, i);
        }
        (t.RepositoryProvider = i), (t.callBackgroundRepository = s);
      }
    ),
    e("content-script/repositories/index", ["require", "exports", "content-script/repositories/repository-provider"], function (e, i, t) {
      function r(e) {
        for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t]);
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), r(t);
    }),
    e(
      "content-script/services/site/delegated-site.service",
      ["require", "exports", "content-script/services/index", "common/enums/index", "common/decorators/index"],
      function (e, t, i, r, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          ((s.prototype.initialize = function () {}),
          (s.prototype.getUserNames = function (e) {
            return i.callBackgroundService(r.ServiceType.Site, "getUserNames", [e]);
          }),
          (s = d([o.RegisterService(r.ServiceType.Site, !0)], s)));
        function s() {}
        t.DelegatedSiteService = s;
      }
    ),
    e(
      "content-script/services/form-detection/form-detection.service",
      [
        "require",
        "exports",
        "common/decorators/index",
        "common/enums/index",
        "content-script/content-script.module",
        "content-script/legacy"
      ],
      function (e, t, i, o, n, s) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r =
          ((c.prototype.initialize = function () {
            var r = this,
              e,
              t;
            (this.siteService = n.getService(o.ServiceType.Site)),
              (this.stringUtils = n.getService(o.ServiceType.StringUtils)),
              (this.tools = n.getService(o.ServiceType.ContentScriptTools)),
              (this.webRequest = n.getService(o.ServiceType.WebRequest)),
              (this.csInfo = n.getContentScriptInstanceInfo()),
              n.getService(o.ServiceType.Topic).subscribe(o.TopicType.FilledGeneratedPassword, function (e) {
                var t = e.element,
                  e = e.password,
                  i = r.getFormProfile(t);
                r.setUsedGeneratedPassword(t), r.handleGeneratedPassword(e, i);
              }),
              "loading" !== document.readyState
                ? this.onDocumentReady()
                : ((t = function () {
                    r.onDocumentReady(), document.removeEventListener("DOMContentLoaded", t);
                  }),
                  document.addEventListener("DOMContentLoaded", t)),
              s.LegacyGlobal.bg.FieldOverrides &&
                s.LegacyGlobal.bg.FieldOverrides.getSite(
                  { host: document.location.host, pathname: document.location.pathname },
                  function (e) {
                    r.fieldOverrides = e;
                  }
                );
          }),
          (c.prototype.getHasGeneratedPasswordSinceLastAutofill = function () {
            return this.hasGeneratedPasswordSinceLastAutofill;
          }),
          (c.prototype.setHasGeneratedPasswordSinceLastAutofill = function (e) {
            this.hasGeneratedPasswordSinceLastAutofill = e;
          }),
          (c.prototype.onDocumentReady = function () {
            return M(this, void 0, void 0, function () {
              var t,
                i,
                r = this;
              return I(this, function (e) {
                switch (e.label) {
                  case 0:
                    return s.LegacyGlobal.should_do_lastpass_here(document)
                      ? ((this.orphansFormProfile = this.createFormProfile()),
                        (this.orphansFormProfile.containsOrphans = !0),
                        [4, (t = this).siteService.getUserNames(document.location.hostname)])
                      : [2];
                  case 1:
                    return (
                      (t.siteUserNames = e.sent()),
                      (this.documentBodyInputs = Array.from(document.body.querySelectorAll(this.inputSelector))),
                      this.getInputs().forEach(this.addMappedInput),
                      Array.from(document.querySelectorAll("form")).forEach(this.addMappedForm),
                      window.addEventListener("lprequeststart", function () {
                        return r.trackForms(!0);
                      }),
                      (i = this.tools.debounce(this.updateInputMaps, 200, !1).bind(this)),
                      (this.observer = new MutationObserver(i)),
                      this.observer.observe(document, {
                        attributes: !0,
                        attributeFilter: this.inputAttributes,
                        childList: !0,
                        subtree: !0
                      }),
                      setTimeout(function () {
                        Array.from(r.inputMap.keys()).forEach(function (e) {
                          r.setFieldValue({ input: e });
                        });
                      }, 10),
                      [2]
                    );
                }
              });
            });
          }),
          (c.prototype.setFillSource = function (t) {
            return M(this, void 0, void 0, function () {
              return I(this, function (e) {
                return s.LegacyGlobal.bg.LPTabState.setLastFillSource(t), [2];
              });
            });
          }),
          (c.prototype.handleGeneratedPassword = function (t, i) {
            return M(this, void 0, void 0, function () {
              return I(this, function (e) {
                return (
                  i &&
                    i.generatedPassword !== t &&
                    ((i.generatedPassword = t),
                    this.setFillSource("Generated"),
                    this.saveSiteDialogIsDisplayed ||
                      s.LegacyGlobal.bg.LPTabState.getSiteNotification({ callback: this.showSaveSiteDialog.bind(this) })),
                  [2]
                );
              });
            });
          }),
          (c.prototype.showSaveSiteDialog = function (e) {
            e.generatedPassword &&
              e.defaultData &&
              ((e.dialogData.preSubmit = !0),
              (this.hasGeneratedPasswordSinceLastAutofill = !0),
              s.LegacyGlobal.LPFrame.openDialog("contentScriptSite", e, { css: { top: 10, right: 10 } }));
          }),
          (c.prototype.createFormProfile = function () {
            return { fields: [], top: window === top, url: document.location.hostname };
          }),
          (c = d([i.RegisterService(o.ServiceType.FormDetection)], c)));
        function c() {
          var a = this;
          (this.inputSelector = 'input:not([type]),input[type="text"],input[type="email"],input[type="password"],input[type="hidden"]'),
            (this.inputAttributes = ["name", "ng-model", "data-reactid", "id"]),
            (this.inputMap = new Map()),
            (this.formMap = new Map()),
            (this.hasPasswordInput = !1),
            (this.fieldOverrides = []),
            (this.saveSiteDialogIsDisplayed = !1),
            (this.hasGeneratedPasswordSinceLastAutofill = !1),
            (this.updateInputMaps = function () {
              Array.from(a.inputMap.entries()).forEach(function (e) {
                var e = e[0];
                a.removeMappedInput(e);
              }),
                (a.hasPasswordInput = !1),
                Array.from(document.querySelectorAll("form")).forEach(a.addMappedForm),
                a.getInputs().forEach(a.addMappedInput),
                (a.saveSiteDialogIsDisplayed = null !== document.getElementById("siteDialog")),
                (a.hasPasswordInput = Array.from(a.inputMap.values()).some(function (e) {
                  return "password" === e.type;
                }));
            }),
            (this.addMappedForm = function (e) {
              e.addEventListener("submit", a.submitListener),
                e.addEventListener("keydown", a.formKeydownListener),
                a.formMap.has(e) || a.formMap.set(e, a.createFormProfile());
            }),
            (this.removeMappedForm = function (e) {
              a.formMap.delete(e) && e.removeEventListener("submit", a.submitListener);
            }),
            (this.addMappedInput = function (e) {
              var t, i, r;
              a.shouldIgnoreInput(e) ||
                ((t = a.getInputType(e)),
                e.addEventListener("change", a.changeListener),
                e.addEventListener("keydown", a.keydownListener),
                "password" === t &&
                  (e.addEventListener("keydown", a.manuallyTypingPasswordListener), e.addEventListener("blur", a.blurListener)),
                (i = {
                  value: e.value,
                  attributes: a.tools.getAttributes(e, a.inputAttributes),
                  label: a.tools.getElementLabel(e),
                  type: t
                }),
                a.inputMap.set(e, i),
                a.getFormProfile(e).fields.push(i),
                (a.hasPasswordInput = a.hasPasswordInput || "password" === t));
            }),
            (this.removeMappedInput = function (e) {
              var t = a.getFormProfile(e),
                i = a.inputMap.get(e),
                i = t.fields.indexOf(i);
              -1 < i && t.fields.splice(i, 1),
                a.inputMap.delete(e) &&
                  (e.removeEventListener("change", a.changeListener), e.removeEventListener("keydown", a.keydownListener));
            }),
            (this.shouldIgnoreInput = function (e) {
              if (s.LegacyGlobal.LP_explicit_ignored(document, e)) return !0;
              if (a.fieldOverrides && a.fieldOverrides.length) {
                Element.prototype.matches ||
                  (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
                for (var t = 0; t < a.fieldOverrides.length; t++)
                  if (e.matches(a.fieldOverrides[t].querySelector) && "off" == a.fieldOverrides[t].override) return !0;
              }
              return !1;
            }),
            (this.setUsedGeneratedPassword = function (e) {
              var t;
              a.getFormProfile(e).usedGeneratedPassword = !0;
            }),
            (this.changeListener = function (e) {
              a.setFieldValue({ input: e.target, fromUser: !0 }), a.trackForms();
            }),
            (this.keydownListener = function (e) {
              e.isTrusted && 13 === (e.keyCode || e.which) && (a.setFieldValue({ input: e.target, fromUser: !0 }), a.trackForms());
            }),
            (this.manuallyTypingPasswordListener = function (e) {
              e.isTrusted && e.keyCode && a.setFillSource("Manual");
            }),
            (this.formKeydownListener = function (e) {
              e.isTrusted && 13 === (e.keyCode || e.which) && (a.setFieldValue({ input: e.target, fromUser: !0 }), a.trackForms());
            }),
            (this.blurListener = function (e) {
              e.isTrusted && (a.setFieldValue({ input: e.target, fromUser: !0 }), a.trackForms());
            }),
            (this.submitListener = function (e) {
              e.isTrusted && a.trackForms(!0);
            }),
            (this.trackForms = function (e) {
              void 0 === e && (e = !1),
                a.hasPasswordInput &&
                  (e &&
                    Array.from(new Set(a.inputMap.entries())).forEach(function (e) {
                      var t = e[0],
                        e = e[1];
                      a.setFieldValue({ input: t, field: e });
                    }),
                  a.tools
                    .debounce(a.webRequest.trackFormSubmission, 200, !0)
                    .call(a, a.csInfo.tabId, Array.from(a.formMap.values()).concat([a.orphansFormProfile])));
            }),
            (this.getInputType = function (e) {
              return "password" === e.type || "disc" === a.tools.getCSS(e, "text-security")
                ? "password"
                : "email" === e.type || "hidden" === e.type
                ? e.type
                : "text";
            }),
            (this.getInputs = function (e) {
              var e =
                  (e = void 0 === e ? document.body : e) === document.body
                    ? a.documentBodyInputs
                    : Array.from(e.querySelectorAll(a.inputSelector)),
                i = [],
                r = new Map();
              if (
                (e.forEach(function (e) {
                  var t;
                  a.tools.isVisible(e)
                    ? (("" === e.value && "" === e.getAttribute("value")) || e.value !== e.getAttribute("value") || 1 < e.value.length) &&
                      i.push(e)
                    : -1 < ["hidden", "text", "email"].indexOf(e.type) &&
                      ((t = r.get(e.value) || { matches: 0, inputs: [] }).inputs.push(e), r.set(e.value, t));
                }),
                r.size)
              ) {
                for (var t = r.entries(), o = void 0; !(o = t.next()).done; ) 1 < o.value[1].inputs.length && r.delete(o.value[0]);
                for (
                  var n = Array.from(r.keys()),
                    s = document.createTreeWalker(document, NodeFilter.SHOW_TEXT),
                    c = function () {
                      var t = s.currentNode;
                      if (
                        ["OPTION", "SCRIPT"].some(function (e) {
                          return t.parentElement.nodeName === e;
                        })
                      )
                        return "continue";
                      var i = t.nodeValue.trim();
                      if (
                        n.some(function (e) {
                          return e === i;
                        })
                      ) {
                        if (!a.tools.isVisible(t)) return "continue";
                        var e = r.get(i);
                        e.matches++, r.set(i, e);
                      }
                    };
                  s.nextNode();

                )
                  c();
                for (t = r.entries(); !(o = t.next()).done; ) 1 === o.value[1].matches && i.push(o.value[1].inputs[0]);
              }
              return i;
            }),
            (this.setFieldValue = function (e) {
              var t = e.input,
                i = e.field,
                e = e.fromUser,
                e = void 0 !== e && e,
                i = i || a.inputMap.get(t),
                r = a.getFormProfile(t),
                o = t.value,
                t;
              i &&
                ("password" === i.type
                  ? (o && !r.originalPassword && (r.originalPassword = o), (r.currentPassword = o || ""))
                  : (a.stringUtils.containsMaskingCharacter(o) &&
                      (i.value && i.value !== o && !a.stringUtils.containsMaskingCharacter(i.value)
                        ? (o = i.value)
                        : (t = r.fields.filter(function (e) {
                            return !(
                              e === i ||
                              !e.value ||
                              a.stringUtils.containsMaskingCharacter(e.value) ||
                              e.value.length !== o.length ||
                              (e.value[0] !== o[0] && e.value[e.value.length - 1] !== i.value[o.length - 1])
                            );
                          })[0]) && (o = t.value)),
                    (!a.siteUserNames.some(function (e) {
                      return e === o;
                    }) &&
                      r.username !== i.value) ||
                      (r.username = o)),
                (i.dirty = i.dirty || e),
                (i.value = o));
            }),
            (this.getFormProfile = function (e) {
              var t;
              return (
                console.assert(e instanceof HTMLInputElement, "Input argument is not an HTMLInputElement"),
                e.form
                  ? (t = a.formMap.get(e.form)) || ((t = a.createFormProfile()), a.formMap.set(e.form, t))
                  : (t = a.orphansFormProfile),
                t
              );
            });
        }
        t.FormDetectionService = c;
      }
    ),
    e(
      "content-script/services/segment/delegated-segment.service",
      ["require", "exports", "common/decorators/index", "common/enums/index", "content-script/legacy", "content-script/services/index"],
      function (e, t, i, r, o, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var s =
          ((c.prototype.initialize = function () {}),
          (c.prototype.send = function (e, t) {
            o.LegacyGlobal.bg.sendLpImprove(e, t);
          }),
          (c.prototype.sendTypedEvent = function (e, t) {
            return n.callBackgroundService(r.ServiceType.Segment, "sendTypedEvent", [e, t]);
          }),
          d([i.Visible], c.prototype, "sendTypedEvent", null),
          (c = d([i.RegisterService(r.ServiceType.Segment, !0)], c)));
        function c() {}
        t.DelegatedSegmentService = c;
      }
    ),
    e(
      "content-script/services/service-provider",
      ["require", "exports", "common/provider.abstract", "common/messaging/messaging", "content-script/legacy"],
      function (e, t, i, o, n) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i =
            ((s = i.ProviderAbstract),
            F(r, s),
            (r.prototype.getService = function (e) {
              return this.instances[e];
            }),
            (r.prototype.initialize = function () {
              for (s.prototype.initialize.call(this); this.callQueue.length; ) {
                var e = this.callQueue.shift(),
                  t = e.serviceType,
                  i = e.method,
                  r = e.args,
                  e = e.callback;
                o.callMethod(this.getService(t), i, r, e);
              }
            }),
            (r.prototype.postInitialize = function () {
              s.prototype.postInitialize.call(this);
            }),
            (r.prototype.teardown = function () {
              s.prototype.teardown.call(this);
            }),
            (r.prototype.isInitialized = function () {
              return this.initialized;
            }),
            (r.prototype.call = function (e, t, i, r) {
              void 0 === i && (i = []);
              try {
                this.isInitialized()
                  ? o.callMethod(this.getService(e), t, i, r)
                  : this.callQueue.push({ serviceType: e, method: t, args: i, callback: r });
              } catch (e) {
                o.handleCallbackError(e, r);
              }
            }),
            r),
          s;
        function r() {
          var e = (null !== s && s.apply(this, arguments)) || this;
          return (e.callQueue = []), e;
        }
        function c(e, t, o, i) {
          if ("function" != typeof i)
            return new Promise(function (i, r) {
              n.LegacyGlobal.bg.LPModule.callService(e, t, o, function (e, t) {
                e ? r(e) : i(t);
              });
            });
          n.LegacyGlobal.bg.LPModule.callService(e, t, o, i);
        }
        (t.ServiceProvider = i), (t.callBackgroundService = c);
      }
    ),
    e(
      "content-script/services/tools/content-script-tools.service",
      ["require", "exports", "common/decorators/index", "common/enums/index"],
      function (e, t, i, r) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
          ((n.prototype.initialize = function () {
            var t = this;
            window.addEventListener("beforeunload", function (e) {
              !1 !== e.isTrusted && (t.unloading = !0);
            });
          }),
          (n.prototype.isUnloading = function () {
            return this.unloading;
          }),
          (n.prototype.getCSS = function (e, t) {
            return window.getComputedStyle(e).getPropertyValue(t);
          }),
          (n.prototype.getAttributes = function (i, e) {
            var r = this;
            return e.reduce(function (e, t) {
              return (e[t] = r.getAttribute(i, t)), e;
            }, {});
          }),
          (n.prototype.getAttribute = function (e, t) {
            return e.hasAttribute(t) ? e.getAttribute(t) : void 0;
          }),
          (n.prototype.isForm = function (e) {
            return "FORM" === e.nodeName;
          }),
          (n.prototype.getForm = function (e) {
            for (; e; ) {
              if (this.isForm(e)) return e;
              e = e.parentElement;
            }
            return null;
          }),
          (n.prototype.isClickable = function (e) {
            var t;
            return (
              "function" != typeof document.elementFromPoint ||
              ((t = e.getBoundingClientRect()), document.elementFromPoint(t.left, t.top) === e) ||
              document.elementFromPoint(t.right, t.top) === e ||
              document.elementFromPoint(t.left, t.bottom) === e ||
              document.elementFromPoint(t.right, t.bottom) === e
            );
          }),
          (n.prototype.isScrollableX = function (e) {
            var e;
            return e.scrollWidth > e.clientWidth && ("auto" === (e = this.getCSS(e, "overflow-x")) || "scroll" === e);
          }),
          (n.prototype.isScrollableY = function (e) {
            var t;
            if (e.scrollHeight > e.clientHeight)
              switch (this.getCSS(e, "overflow-y")) {
                case "auto":
                case "scroll":
                  return !0;
                case "visible":
                  return e === document.body || !e.parentElement;
              }
            return !1;
          }),
          (n.prototype.getViewableArea = function (e) {
            for (var t = { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }, i = e.parentElement; i; )
              0 < i.scrollLeft && (t.left -= i.scrollLeft),
                0 < i.scrollTop && (t.top -= i.scrollTop),
                this.isScrollableX(i) && (t.width += i.scrollWidth - i.clientWidth),
                this.isScrollableY(i) && (t.height += i.scrollHeight - i.clientHeight),
                (i = i.parentElement);
            return (t.right = t.left + t.width), (t.bottom = t.top + t.height), t;
          }),
          (n.prototype.isVisible = function (e) {
            var t, i, e;
            return (
              !!(e && e instanceof HTMLElement) &&
              !(
                !(e.offsetWidth || e.offsetHeight || e.getClientRects().length) ||
                ((i = e.getBoundingClientRect()), (e = this.getViewableArea(e)), i.right < e.left) ||
                i.bottom < e.top ||
                i.left > e.right ||
                i.top > e.bottom
              )
            );
          }),
          (n.prototype.getElementLabel = function (i) {
            for (
              var e = [
                  function () {
                    if (i.getAttribute("id")) {
                      var e = document.querySelector('label[for="' + i.getAttribute("id") + '"]');
                      if (e) return e.textContent;
                    }
                    return null;
                  },
                  function () {
                    for (var e = i; e; ) {
                      if ("LABEL" === e.tagName.toUpperCase()) return e.textContent;
                      e = e.parentElement;
                    }
                    return null;
                  },
                  function () {
                    return i.getAttribute("placeholder");
                  },
                  function () {
                    for (var e = i; e; ) {
                      var t = e.textContent;
                      if (t) {
                        var t = t
                          .split("\n")
                          .map(function (e) {
                            return e.trim();
                          })
                          .filter(function (e) {
                            return 0 < e.length;
                          });
                        if (1 === t.length) return t[0];
                        break;
                      }
                      e = e.previousSibling || e.parentElement;
                    }
                  }
                ],
                t = 0;
              t < e.length;
              ++t
            ) {
              var r = e[t]();
              if (r) return r.trim();
            }
            return "";
          }),
          (n.prototype.debounce = function (n, s, c) {
            var a;
            return function () {
              for (var e = this, t = [], i = 0; i < arguments.length; i++) t[i] = arguments[i];
              var r = function () {
                  (a = null), c || n.apply(e, t);
                },
                o = c && !a;
              clearTimeout(a), (a = window.setTimeout(r, s)), o && n.apply(this, t);
            };
          }),
          (n = d([i.RegisterService(r.ServiceType.ContentScriptTools)], n)));
        function n() {
          this.unloading = !1;
        }
        t.ContentScriptTools = n;
      }
    ),
    e(
      "content-script/services/tools/dom-utils.service",
      ["require", "exports", "common/decorators/index", "common/enums/index"],
      function (e, t, i, r) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var o =
          ((n.prototype.initialize = function () {}),
          (n.prototype.getXPathForElement = function (e) {
            var i = function (e, t) {
                return e ? i(e.previousElementSibling, t || e.localName) + (e.localName === t) : 1;
              },
              t = function (e) {
                return e && e.nodeType === Node.ELEMENT_NODE
                  ? e.id && document.querySelector("#" + e.id) === e
                    ? ['id("' + e.id + '")']
                    : t(e.parentNode).concat([e.localName.toLowerCase() + "[" + i(e) + "]"])
                  : [""];
              };
            return t(e).join("/");
          }),
          (n = d([i.RegisterService(r.ServiceType.DomUtils)], n)));
        function n() {}
        t.DomUtils = n;
      }
    ),
    e(
      "content-script/services/web-request/delegated-web-request.service",
      ["require", "exports", "common/decorators/index", "common/enums/index", "content-script/services/index"],
      function (e, t, i, r, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          ((s.prototype.initialize = function () {
            var t = this;
            o.callBackgroundService(r.ServiceType.WebRequest, "isApiSupported", void 0).then(function (e) {
              return (t.apiSupported = e);
            }),
              o.callBackgroundService(r.ServiceType.WebRequest, "isEnabled", void 0).then(function (e) {
                return (t.enabled = e);
              });
          }),
          (s.prototype.trackFormSubmission = function (e, t, i) {
            return o.callBackgroundService(r.ServiceType.WebRequest, "trackFormSubmission", [e, t, i]);
          }),
          (s.prototype.isApiSupported = function () {
            return this.apiSupported;
          }),
          (s.prototype.isEnabled = function () {
            return this.enabled;
          }),
          (s = d([i.RegisterService(r.ServiceType.WebRequest, !0)], s)));
        function s() {
          (this.apiSupported = !1), (this.enabled = !1);
        }
        t.DelegatedWebRequestService = s;
      }
    ),
    e(
      "content-script/services/sitenotification/sitenotification.service",
      ["require", "exports", "common/decorators/index", "common/enums/index", "content-script/legacy"],
      function (e, t, i, r, o) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n =
          ((s.prototype.initialize = function () {}),
          (s.prototype.showSiteNotification = function (e) {
            (e.detectionType = "webrequest"), o.LegacyGlobal.LPSiteNotification.showSiteNotification(e);
          }),
          d([i.Visible], s.prototype, "showSiteNotification", null),
          (s = d([i.RegisterService(r.ServiceType.SiteNotification)], s)));
        function s() {}
        t.SiteNotificationService = s;
      }
    ),
    e(
      "content-script/services/index",
      [
        "require",
        "exports",
        "content-script/services/form-detection/form-detection.service",
        "content-script/services/segment/delegated-segment.service",
        "content-script/services/service-provider",
        "content-script/services/site/delegated-site.service",
        "content-script/services/tools/content-script-tools.service",
        "content-script/services/tools/dom-utils.service",
        "content-script/services/web-request/delegated-web-request.service",
        "common/services/topic/topic.service",
        "common/services/utils/string-utils.service",
        "content-script/services/sitenotification/sitenotification.service"
      ],
      function (e, i, t, r, o, n, s, c, a, u, l, d) {
        function p(e) {
          for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t]);
        }
        Object.defineProperty(i, "__esModule", { value: !0 }), p(t), p(r), p(o), p(n), p(s), p(c), p(a), p(u), p(l), p(d);
      }
    ),
    e("content-script/views/basic-auth/basic-auth.view", ["require", "exports", "content-script/legacy"], function (e, t, r) {
      var i;
      function o() {
        var i = this;
        r.LegacyGlobal.bg.basicAuth.hasFeature(function (e) {
          e &&
            r.LegacyGlobal.bg.basicAuth.isBasicAuth(function (e, t) {
              return i.init(e, t);
            });
        });
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (o.prototype.init = function (e, t) {
          var i = this;
          e &&
            ((this.backgroundInterface = r.LegacyGlobal.bg),
            this.loadContent(function () {
              i.initContent(t);
            }));
        }),
        (o.prototype.loadContent = function (t) {
          var i = this;
          $.get(chrome.runtime.getURL("/content-script/views/basic-auth/basic-auth.html"), function (e) {
            var e = i.replaceRelativePaths(e);
            $(document.body).empty().append(e), t();
          });
        }),
        (o.prototype.initContent = function (e) {
          var t;
          $("#ba_username").focus(),
            e || $("#wronguserpass").hide(),
            (document.title = "Lastpass basic auth login"),
            $("#title").text(location.host),
            "http:" === location.protocol ? $("#secureWarning").show() : $("#secureWarning").hide(),
            this.subscribeEvents(),
            this.openPopupNotification(),
            this.backgroundInterface.sendLpImprove("basicauth::triggered");
        }),
        (o.prototype.subscribeEvents = function () {
          var t = this;
          $("#lp-login-btn").click(function () {
            $(".js-notification").toggle("notification-visible"), t.doLogin();
          }),
            $("#password").keypress(function (e) {
              13 === e.which && t.doLogin();
            }),
            $("#lp-cancel-btn").click(function () {
              t.cancelBasicAuth(), t.backgroundInterface.sendLpImprove("basicauth::cancel");
            }),
            $(".notification__close__button").click(function () {
              $(".notification__body").removeClass("slide-in").addClass("slide-out"), t.backgroundInterface.basicAuth.closeNotification();
            });
        }),
        (o.prototype.doLogin = function () {
          var e = $("#ba_username").val(),
            t = $("#ba_password").val();
          this.backgroundInterface.sendLpImprove("basicauth::login"),
            this.backgroundInterface.basicAuth.setAuthCredential(e, t, function () {
              return location.reload();
            });
        }),
        (o.prototype.cancelBasicAuth = function () {
          this.backgroundInterface.basicAuth.cancelBasicAuth(), $("#login-body").hide(), location.reload();
        }),
        (o.prototype.replaceRelativePaths = function (e) {
          var t = chrome.runtime.getURL("");
          return e.replace(new RegExp("{extensionUrl}", "g"), t);
        }),
        (o.prototype.openPopupNotification = function () {
          this.backgroundInterface.basicAuth.isNotificationClosed(function (e) {
            e ? $(".notification__body").hide() : $(".notification__body").addClass("slide-in");
          });
        }),
        (t.BasicAuthView = o);
    }),
    e("content-script/views/index", ["require", "exports", "content-script/views/basic-auth/basic-auth.view"], function (e, i, t) {
      function r(e) {
        for (var t in e) i.hasOwnProperty(t) || (i[t] = e[t]);
      }
      Object.defineProperty(i, "__esModule", { value: !0 }), r(t);
    }),
    e(
      "content-script/content-script.module",
      [
        "require",
        "exports",
        "common/enums/index",
        "content-script/repositories/index",
        "content-script/services/index",
        "content-script/views/index",
        "common/module.abstract",
        "common/decorators/index",
        "content-script/legacy"
      ],
      function (e, t, i, n, s, r, o, c, a) {
        Object.defineProperty(t, "__esModule", { value: !0 });
        var u =
            ((l = o.ModuleAbstract),
            F(d, l),
            (d.getInstance = function () {
              return (d.instance = d.instance ? d.instance : new d());
            }),
            (d.prototype.getContentScriptInstanceInfo = function () {
              return this.csInfo;
            }),
            (d.prototype.initialize = function () {
              return M(this, void 0, void 0, function () {
                var t, i, r, o, t;
                return I(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.serviceProvider = new s.ServiceProvider(c.getServiceRegistry())),
                        (this.repositoryProvider = new n.RepositoryProvider(c.getRepositoryRegistry())),
                        [4, this.requestFrameworkInitialized]
                      );
                    case 1:
                      return (
                        (t = e.sent()),
                        (i = t.tabID),
                        (r = t.frameID),
                        (o = t.topFrameID),
                        (t = t.request),
                        (this.csInfo = {
                          tabId: i,
                          frameId: r,
                          topFrameId: o,
                          childFrameCount: t.childFrameCount,
                          isTop: t.top,
                          url: t.url
                        }),
                        this.repositoryProvider.initialize(),
                        this.serviceProvider.initialize(),
                        [2]
                      );
                  }
                });
              });
            }),
            (d.prototype.postInitialize = function () {
              return M(this, void 0, void 0, function () {
                return I(this, function (e) {
                  return (
                    this.repositoryProvider.postInitialize(),
                    this.serviceProvider.postInitialize(),
                    (self.basicAuth = new r.BasicAuthView()),
                    [2]
                  );
                });
              });
            }),
            (d.prototype.getServiceProvider = function () {
              return this.serviceProvider;
            }),
            (d.prototype.getRepositoryProvider = function () {
              return this.repositoryProvider;
            }),
            (d.prototype.getService = function (e) {
              if (!this.serviceProvider.isInitialized) throw new Error("Service provider is undefined.");
              var t = this.serviceProvider.getService(e);
              if (t) return t;
              throw new Error("Cannot find service [ " + e + " ]");
            }),
            (d.prototype.getRepository = function (e) {
              var t = this.repositoryProvider.getRepository(e);
              if (t) return t;
              throw new Error("Cannot find repository [ " + e + " ]");
            }),
            (d.prototype.isInitialized = function (e) {
              l.prototype.isInitialized.call(this, e);
            }),
            (d.instance = null),
            d),
          l;
        function d() {
          var e = l.call(this) || this;
          return (
            (e.requestFrameworkInitialized = new Promise(function (t) {
              a.LegacyGlobal.Topics.get(i.TopicType.RequestFrameworkInitialized).subscribe(function (e) {
                return t(e);
              });
            })),
            window.addEventListener("beforeunload", function () {
              e.serviceProvider && e.serviceProvider.teardown(), e.repositoryProvider && e.repositoryProvider.teardown();
            }),
            e
          );
        }
        function p() {
          return u.getInstance().getContentScriptInstanceInfo();
        }
        function f(e) {
          return u.getInstance().getService(e);
        }
        function m(e) {
          return u.getInstance().getRepository(e);
        }
        function v(e) {
          return u.getInstance().isInitialized(e);
        }
        function y(e, t, i, r) {
          void 0 === i && (i = []), u.getInstance().getServiceProvider().call(e, t, i, r);
        }
        (t.getContentScriptInstanceInfo = p),
          (t.getService = f),
          (t.getRepository = m),
          (t.isInitialized = v),
          (t.callService = y),
          (t.default = u.getInstance());
      }
    ),
    (i.LPModule = t("content-script/content-script.module"));
}.call(this);
