!(function (e) {
  function t(t) {
    for (var r, i, u = t[0], s = t[1], c = t[2], d = 0, f = []; d < u.length; d++)
      (i = u[d]), Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]), (o[i] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    for (l && l(t); f.length; ) f.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < a.length; t++) {
      for (var n = a[t], r = !0, u = 1; u < n.length; u++) {
        var s = n[u];
        0 !== o[s] && (r = !1);
      }
      r && (a.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { 3: 0 },
    a = [];
  function i(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = r),
    (i.d = function (e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if ((i.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
        for (var r in e)
          i.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "");
  var u = (window.webpackJsonp = window.webpackJsonp || []),
    s = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var c = 0; c < u.length; c++) t(u[c]);
  var l = s;
  a.push([2010, 0, 1]), n();
})({
  130: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return i;
        });
      var r = n(247),
        o = {};
      function a() {
        return Object(r.b)() ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : o;
      }
      function i(e, t, n) {
        var r = n || a(),
          o = (r.__SENTRY__ = r.__SENTRY__ || {});
        return o[e] || (o[e] = t());
      }
    }).call(this, n(44));
  },
  131: function (e, t, n) {
    "use strict";
    n.d(t, "e", function () {
      return u;
    }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "g", function () {
        return c;
      }),
      n.d(t, "f", function () {
        return l;
      }),
      n.d(t, "h", function () {
        return d;
      }),
      n.d(t, "b", function () {
        return f;
      }),
      n.d(t, "d", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return g;
      });
    var r = n(59),
      o = n(1980),
      a = n(77),
      i = n(446);
    function u(e, t, n) {
      if (t in e) {
        var r = e[t],
          o = n(r);
        if ("function" == typeof o)
          try {
            c(o, r);
          } catch (e) {}
        e[t] = o;
      }
    }
    function s(e, t, n) {
      Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 });
    }
    function c(e, t) {
      var n = t.prototype || {};
      (e.prototype = t.prototype = n), s(e, "__sentry_original__", t);
    }
    function l(e) {
      return e.__sentry_original__;
    }
    function d(e) {
      return Object.keys(e)
        .map(function (t) {
          return encodeURIComponent(t) + "=" + encodeURIComponent(e[t]);
        })
        .join("&");
    }
    function f(e) {
      var t = e;
      if (Object(a.d)(e)) t = Object(r.a)({ message: e.message, name: e.name, stack: e.stack }, v(e));
      else if (Object(a.f)(e)) {
        var n = e;
        (t = Object(r.a)({ type: n.type, target: p(n.target), currentTarget: p(n.currentTarget) }, v(n))),
          "undefined" != typeof CustomEvent && Object(a.g)(e, CustomEvent) && (t.detail = n.detail);
      }
      return t;
    }
    function p(e) {
      try {
        return Object(a.c)(e) ? Object(o.b)(e) : Object.prototype.toString.call(e);
      } catch (e) {
        return "<unknown>";
      }
    }
    function v(e) {
      var t = {};
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t;
    }
    function h(e, t) {
      void 0 === t && (t = 40);
      var n = Object.keys(f(e));
      if ((n.sort(), !n.length)) return "[object has no keys]";
      if (n[0].length >= t) return Object(i.d)(n[0], t);
      for (var r = n.length; r > 0; r--) {
        var o = n.slice(0, r).join(", ");
        if (!(o.length > t)) return r === n.length ? o : Object(i.d)(o, t);
      }
      return "";
    }
    function g(e) {
      var t, n;
      if (Object(a.i)(e)) {
        var o = {};
        try {
          for (var i = Object(r.e)(Object.keys(e)), u = i.next(); !u.done; u = i.next()) {
            var s = u.value;
            void 0 !== e[s] && (o[s] = g(e[s]));
          }
        } catch (e) {
          t = { error: e };
        } finally {
          try {
            u && !u.done && (n = i.return) && n.call(i);
          } finally {
            if (t) throw t.error;
          }
        }
        return o;
      }
      return Array.isArray(e) ? e.map(g) : e;
    }
  },
  1567: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11),
      o = g(n(19)),
      a = n(10),
      i = n(29),
      u = n(436),
      s = n(132),
      c = n(42),
      l = n(69),
      d = g(n(13)),
      f = n(52),
      p = n(111),
      v = n(3099),
      h = n(144);
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var m = !1,
      y = (0, r.createSelector)(a.storesSelectors.selectCurrentStore(), u.sessionSelectors.selectCurrentStoreSession(), function (e, t) {
        return o.default.isBlockingCDNLogic(e, t);
      }),
      _ = (0, r.createSelector)(
        a.storesSelectors.selectCurrentStore(),
        function (e) {
          return e.tips && e.tips.configuration && e.tips.configuration.blacklistDefaultLaunchpadPathnameByStoreId;
        },
        function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
            n = e && t.includes(e.id);
          return n;
        }
      ),
      b = (0, r.createSelector)(
        function (e) {
          return a.storesSelectors.selectCurrentStore()(e);
        },
        function (e) {
          return !!(e && e.tipsConfig && e.tipsConfig.isLaunchpadDisabled);
        }
      ),
      S = (0, r.createSelector)(
        function (e) {
          return a.storesSelectors.selectCurrentStore()(e);
        },
        function (e) {
          return !!(e && e.tipsConfig && e.tipsConfig.isPdpDisabled);
        }
      ),
      O = (0, r.createSelector)(
        a.storesSelectors.selectCurrentStore(),
        function (e) {
          return e.tips && e.tips.configuration && e.tips.configuration.blacklistedDynamicUrlsByStoreId;
        },
        function (e, t) {
          var n = (e || {}).id;
          if (t && t[n]) {
            var r = window && window.location && window.location.href;
            if (
              (t[n] || []).some(function (e) {
                return r.startsWith(e);
              })
            )
              return !0;
          }
          return !1;
        }
      ),
      x = (0, r.createSelector)(
        a.storesSelectors.selectCurrentStore(),
        function (e) {
          return e.tips && e.tips.configuration && e.tips.configuration.blacklistedStaticUrlsByStoreId;
        },
        function (e, t) {
          var n = (e || {}).id;
          if (t && t[n]) {
            var r = window && window.location && window.location.href;
            if ((t[n] || []).includes(r)) return !0;
          }
          return !1;
        }
      ),
      w = (0, r.createSelector)(
        a.storesSelectors.selectCurrentStore(),
        function (e) {
          return e.tips && e.tips.configuration && e.tips.configuration.allowlistDynamicUrlsByStoreId;
        },
        function (e) {
          return e.tips && e.tips.configuration && e.tips.configuration.allowlistStaticUrlsByStoreId;
        },
        function (e, t, n) {
          var r = e && e.id,
            o = !1,
            a = window && window.location && window.location.href;
          if (t && t[r]) {
            if (
              (t[r] || []).some(function (e) {
                return a.startsWith(e);
              })
            )
              return !0;
            o = !0;
          }
          if (n && n[r]) {
            if ((n[r] || []).includes(a)) return !0;
            o = !0;
          }
          return !o;
        }
      ),
      E = (0, r.createSelector)(
        s.deviceSelectors.selectDeviceSetting("tipsLoggedOutDisabled"),
        i.userSelectors.selectSetting("tipsEnabled"),
        i.userSelectors.selectUser(),
        function (e, t, n) {
          return n && n.isLoggedIn
            ? !!t
              ? { tipsEnabledByUser: !0 }
              : void 0 === t
              ? { tipsEnabledByUser: !1, reason: "tips_enabled_undefined" }
              : { tipsEnabledByUser: !1, reason: "tips_enabled_false" }
            : e
            ? { tipsEnabledByUser: !1, reason: "tips_logged_out_disabled" }
            : { tipsEnabledByUser: !0 };
        }
      ),
      T = (0, r.createSelector)(
        function (e) {
          return l.experimentSelectors.selectVariant(f.TIPS_BUCKETED_FEATURES.TIPS_SHOWING_GROUP)(e);
        },
        function (e) {
          return "control" === e;
        }
      ),
      P = (0, r.createSelector)(
        c.pageSelectors.selectIsHomePage,
        c.pageSelectors.selectIsProductPage,
        y,
        _,
        b,
        O,
        x,
        s.deviceSelectors.selectIsFirstPageAfterInstall(),
        a.storesSelectors.selectCurrentStoreStandDown,
        w,
        S,
        T,
        E,
        v.selectShouldSuppressTips,
        l.experimentSelectors.selectIsCondensedNoLaunchpadVariant,
        function (e, t, n, r, o, a, i, u, s, c, l, v, g, y, _) {
          var b = s.standDown,
            S = g.tipsEnabledByUser,
            O = g.reason,
            x = y.suppressed,
            w = y.reason,
            E = [];
          return (
            n && E.push(h.HIDE_TIPS_REASONS.BLOCKING_CDN),
            ["nopopup", "suspend"].includes(b) && E.push(h.HIDE_TIPS_REASONS.STAND_DOWN),
            e || t || E.push(h.HIDE_TIPS_REASONS.INVALID_PAGE_TYPE),
            v && E.push(h.HIDE_TIPS_REASONS.HOLDOUT_GROUP),
            _ &&
              e &&
              (E.push(h.HIDE_TIPS_REASONS.NO_LAUNCHPAD),
              m ||
                ((m = !0),
                d.default.sendEvent("exp000003", {
                  variant_name: f.CONDENSED_LAUNCHPAD_BUCKETS.NO_LAUNCHPAD,
                  experiment_name: p.CURRENT_TIPS_CONTAINER_EXPERIMENT
                }))),
            S || E.push(h.HIDE_TIPS_REASONS.DISABLED_BY_USER),
            x && E.push(h.HIDE_TIPS_REASONS.SUPPRESSED),
            a && E.push(h.HIDE_TIPS_REASONS.DYNAMIC_URL_BLACKLISTED),
            i && E.push(h.HIDE_TIPS_REASONS.STATIC_URL_BLACKLISTED),
            e &&
              (r && E.push(h.HIDE_TIPS_REASONS.DEFAULT_LAUNCHPAD_PATH_BLACKLISTED),
              o && E.push(h.HIDE_TIPS_REASONS.STORE_LAUNCHPAD_DISABLED),
              u && E.push(h.HIDE_TIPS_REASONS.FIRST_PAGE_AFTER_INSTALL),
              c || E.push(h.HIDE_TIPS_REASONS.CANT_SHOW_LAUNCHPAD_WITH_ALLOW_LIST)),
            t && l && E.push(h.HIDE_TIPS_REASONS.STORE_PDP_DISABLED),
            { canRunTips: 0 === E.length, hideReasons: E, suppressionReason: w, disabledByUserReason: O }
          );
        }
      );
    t.default = { selectCanRunTips: P };
  },
  1568: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(26),
      a = n(1478),
      i = (r = a) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      return (0, i.default)(e, o.tipsSelectors.selectAutopopDisabledCategoriesForCurrentStore(e));
    };
  },
  1569: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        return function (t, n, r) {
          return n && e(t.prototype, n), r && e(t, r), t;
        };
      })(),
      o = n(0),
      a = d(o),
      i = d(n(1)),
      u = n(6),
      s = d(n(15)),
      c = n(317),
      l = n(144);
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function f(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function p(e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var v = (function (e) {
      function t() {
        var e, n, r;
        f(this, t);
        for (var o = arguments.length, a = Array(o), i = 0; i < o; i++) a[i] = arguments[i];
        return (
          (n = r = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a)))),
          (r.state = { error: null }),
          p(r, n)
        );
      }
      return (
        (function (e, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
        })(t, e),
        r(
          t,
          [
            {
              key: "componentDidCatch",
              value: function (e) {
                var t = this.props,
                  n = t.sendSdataEvent,
                  r = t.sdataAction;
                n(e, void 0 === r ? l.TIPS_BADGE_EVENT_ERRORS.TIP_CARD_ERROR : r), s.default.error(e);
              }
            },
            {
              key: "render",
              value: function () {
                var e = this.props.children;
                return this.state.error ? a.default.createElement(o.Fragment, null) : e;
              }
            }
          ],
          [
            {
              key: "getDerivedStateFromError",
              value: function (e) {
                return { error: e };
              }
            }
          ]
        ),
        t
      );
    })(a.default.Component);
    (v.propTypes = {
      sendSdataEvent: i.default.func.isRequired,
      sdataAction: i.default.string.isRequired,
      children: i.default.oneOfType([i.default.node, i.default.arrayOf(i.default.node)])
    }),
      (v.defaultProps = { children: null }),
      (t.default = (0, u.connect)(null, function (e) {
        return {
          sendSdataEvent: function (t, n) {
            return e((0, c.sdataTipsBadgeEvent)({ action: n, event: "error", errorMessage: t.message }));
          }
        };
      })(v));
  },
  1570: function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.addClassName = p),
      (t.addEvent = function (e, t, n, r) {
        if (!e) return;
        var o = s({ capture: !0 }, r);
        e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent ? e.attachEvent("on" + t, n) : (e["on" + t] = n);
      }),
      (t.addUserSelectStyles = function (e) {
        if (!e) return;
        var t = e.getElementById("react-draggable-style-el");
        t ||
          (((t = e.createElement("style")).type = "text/css"),
          (t.id = "react-draggable-style-el"),
          (t.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
          (t.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
          e.getElementsByTagName("head")[0].appendChild(t));
        e.body && p(e.body, "react-draggable-transparent-selection");
      }),
      (t.createCSSTransform = function (e, t) {
        var n = f(e, t, "px");
        return c({}, (0, a.browserPrefixToKey)("transform", a.default), n);
      }),
      (t.createSVGTransform = function (e, t) {
        return f(e, t, "");
      }),
      (t.getTouch = function (e, t) {
        return (
          (e.targetTouches &&
            (0, o.findInArray)(e.targetTouches, function (e) {
              return t === e.identifier;
            })) ||
          (e.changedTouches &&
            (0, o.findInArray)(e.changedTouches, function (e) {
              return t === e.identifier;
            }))
        );
      }),
      (t.getTouchIdentifier = function (e) {
        if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
        if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
      }),
      (t.getTranslation = f),
      (t.innerHeight = function (e) {
        var t = e.clientHeight,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t -= (0, o.int)(n.paddingTop)), (t -= (0, o.int)(n.paddingBottom));
      }),
      (t.innerWidth = function (e) {
        var t = e.clientWidth,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t -= (0, o.int)(n.paddingLeft)), (t -= (0, o.int)(n.paddingRight));
      }),
      (t.matchesSelector = d),
      (t.matchesSelectorAndParentsTo = function (e, t, n) {
        var r = e;
        do {
          if (d(r, t)) return !0;
          if (r === n) return !1;
          r = r.parentNode;
        } while (r);
        return !1;
      }),
      (t.offsetXYFromParent = function (e, t, n) {
        var r = t === t.ownerDocument.body ? { left: 0, top: 0 } : t.getBoundingClientRect(),
          o = (e.clientX + t.scrollLeft - r.left) / n,
          a = (e.clientY + t.scrollTop - r.top) / n;
        return { x: o, y: a };
      }),
      (t.outerHeight = function (e) {
        var t = e.clientHeight,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t += (0, o.int)(n.borderTopWidth)), (t += (0, o.int)(n.borderBottomWidth));
      }),
      (t.outerWidth = function (e) {
        var t = e.clientWidth,
          n = e.ownerDocument.defaultView.getComputedStyle(e);
        return (t += (0, o.int)(n.borderLeftWidth)), (t += (0, o.int)(n.borderRightWidth));
      }),
      (t.removeClassName = v),
      (t.removeEvent = function (e, t, n, r) {
        if (!e) return;
        var o = s({ capture: !0 }, r);
        e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent ? e.detachEvent("on" + t, n) : (e["on" + t] = null);
      }),
      (t.removeUserSelectStyles = function (e) {
        if (!e) return;
        try {
          if ((e.body && v(e.body, "react-draggable-transparent-selection"), e.selection)) e.selection.empty();
          else {
            var t = (e.defaultView || window).getSelection();
            t && "Caret" !== t.type && t.removeAllRanges();
          }
        } catch (e) {}
      });
    var o = n(812),
      a = (function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
        var n = i(t);
        if (n && n.has(e)) return n.get(e);
        var o = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var u in e)
          if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
            var s = a ? Object.getOwnPropertyDescriptor(e, u) : null;
            s && (s.get || s.set) ? Object.defineProperty(o, u, s) : (o[u] = e[u]);
          }
        (o.default = e), n && n.set(e, o);
        return o;
      })(n(3143));
    function i(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (i = function (e) {
        return e ? n : t;
      })(e);
    }
    function u(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function s(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? u(Object(n), !0).forEach(function (t) {
              c(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function c(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var l = "";
    function d(e, t) {
      return (
        l ||
          (l = (0, o.findInArray)(
            ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"],
            function (t) {
              return (0, o.isFunction)(e[t]);
            }
          )),
        !!(0, o.isFunction)(e[l]) && e[l](t)
      );
    }
    function f(e, t, n) {
      var r = e.x,
        o = e.y,
        a = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
      if (t) {
        var i = "".concat("string" == typeof t.x ? t.x : t.x + n),
          u = "".concat("string" == typeof t.y ? t.y : t.y + n);
        a = "translate(".concat(i, ", ").concat(u, ")") + a;
      }
      return a;
    }
    function p(e, t) {
      e.classList ? e.classList.add(t) : e.className.match(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"))) || (e.className += " ".concat(t));
    }
    function v(e, t) {
      e.classList ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("(?:^|\\s)".concat(t, "(?!\\S)"), "g"), ""));
    }
  },
  1571: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(765),
      a = (r = o) && r.__esModule ? r : { default: r },
      i = n(42),
      u = n(26),
      s = n(431);
    t.default = function () {
      return function (e, t) {
        var n = i.pageSelectors.selectMostRecentPageId()(t()),
          r = (0, a.default)();
        e(u.tipsActions.loadContainer({ containerId: r })),
          e(i.pageActions.setContainerId({ pageId: n, containerId: r })),
          e((0, s.sdataTipsContainerEvent)({ event: "pre-init" })),
          e((0, s.sdataTipsContainerEvent)({ event: "init" }));
      };
    };
  },
  1572: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(42),
      a = n(56),
      i = (r = a) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      var t = ((0, i.default)(e) || {}).id;
      if (!t) return !1;
      var n = o.pageSelectors.selectMostRecentPageId()(e);
      return t === (o.pageSelectors.selectPageByPageId(n)(e) || {}).containerId;
    };
  },
  1573: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(42),
      o = d(n(1571)),
      a = n(26),
      i = d(n(813)),
      u = n(62),
      s = d(n(1971)),
      c = d(n(1572)),
      l = d(n(3171));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return (
        (t = regeneratorRuntime.mark(function t(n, d) {
          var f, p, v;
          return regeneratorRuntime.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e && !(0, l.default)(e)(d())) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (
                      (f = r.pageSelectors.selectCurrentPageId()(d())),
                      ((0, u.selectScrapedProductByPageId)(f)(d()) || {}).parentId === e.parentId || (0, c.default)(d())
                        ? ((p = r.pageSelectors.selectContainerIdByPageId(f)(d())),
                          (v = r.pageSelectors.selectMostRecentPageId()(d())),
                          n(a.tipsActions.setLoading({ containerId: p })),
                          n(r.pageActions.setContainerId({ containerId: p, pageId: v })))
                        : n((0, o.default)()),
                      n(r.pageActions.updateCurrentPage()),
                      (t.next = 8),
                      n((0, s.default)(e))
                    );
                  case 8:
                    n((0, i.default)());
                  case 9:
                  case "end":
                    return t.stop();
                }
            },
            t,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
      var t, n;
    };
  },
  1576: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return i;
    }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return s;
      }),
      n.d(t, "e", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return l;
      });
    var r = n(268),
      o = n(130),
      a = n(79);
    function i() {
      if (!("fetch" in Object(o.a)())) return !1;
      try {
        return new Headers(), new Request(""), new Response(), !0;
      } catch (e) {
        return !1;
      }
    }
    function u(e) {
      return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString());
    }
    function s() {
      if (!i()) return !1;
      var e = Object(o.a)();
      if (u(e.fetch)) return !0;
      var t = !1,
        n = e.document;
      if (n && "function" == typeof n.createElement)
        try {
          var s = n.createElement("iframe");
          (s.hidden = !0),
            n.head.appendChild(s),
            s.contentWindow && s.contentWindow.fetch && (t = u(s.contentWindow.fetch)),
            n.head.removeChild(s);
        } catch (e) {
          r.a && a.c.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
        }
      return t;
    }
    function c() {
      if (!i()) return !1;
      try {
        return new Request("_", { referrerPolicy: "origin" }), !0;
      } catch (e) {
        return !1;
      }
    }
    function l() {
      var e = Object(o.a)(),
        t = e.chrome,
        n = t && t.app && t.app.runtime,
        r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
      return !n && r;
    }
  },
  1950: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o,
      a,
      i,
      u = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      s =
        ((r = A(
          regeneratorRuntime.mark(function e(t) {
            var n,
              r,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), y.default.waitForElement(t, { timeout: o });
                    case 2:
                      return (n = e.sent), (r = D(n.text())), e.abrupt("return", y.default.cleanPrice(r));
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e) {
          return r.apply(this, arguments);
        }),
      c =
        ((o = A(
          regeneratorRuntime.mark(function e(t, n, r) {
            var o,
              a,
              i,
              u = this;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (void 0 !== window.MutationObserver) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      return (
                        (o = new MutationObserver(
                          A(
                            regeneratorRuntime.mark(function e() {
                              var n, o;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), L(t);
                                      case 2:
                                        return (n = e.sent), (e.next = 5), j.default.getFeatureFlag("gift_cards_use_remote_iframe");
                                      case 5:
                                        if (!e.sent) {
                                          e.next = 10;
                                          break;
                                        }
                                        return (
                                          (o = O.default.getCurrent()),
                                          (e.next = 10),
                                          C.default.request(I.gcMessageNames.giftCardsCartPriceChange, {
                                            cartPrice: n,
                                            tabId: o.id,
                                            prioritized: r,
                                            storeId: t.id,
                                            storeName: t.name
                                          })
                                        );
                                      case 10:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                u
                              );
                            })
                          )
                        )),
                        (e.next = 5),
                        y.default.waitForElement(n, { timeout: 3e3 })
                      );
                    case 5:
                      return (e.prev = 5), (e.next = 8), j.default.getFeatureFlag("gift_card_deals_observe_body_for_total");
                    case 8:
                      (a = e.sent),
                        (i = a ? document.body : document.querySelector(n)),
                        o.observe(i, { characterData: !0, attributes: !1, childList: !0, subtree: !0 }),
                        (e.next = 16);
                      break;
                    case 13:
                      (e.prev = 13),
                        (e.t0 = e.catch(5)),
                        g.default.error("Error attaching mutation observer for store " + t.id + " with selector " + n);
                    case 16:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this,
              [[5, 13]]
            );
          })
        )),
        function (e, t, n) {
          return o.apply(this, arguments);
        }),
      l =
        ((a = A(
          regeneratorRuntime.mark(function e(t) {
            var n, r, o, a, i;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2), Promise.all([T.default.getReminder(t), m.default.get("honey-pay-now:gift-card-deal-reminder:" + t)])
                      );
                    case 2:
                      return (
                        (n = e.sent),
                        (r = u(n, 2)),
                        (o = r[0]),
                        (a = r[1]),
                        (i = null),
                        a && (i = a.isGiftcardTipEngaged),
                        e.abrupt("return", !(!o && !i))
                      );
                    case 9:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e) {
          return a.apply(this, arguments);
        }),
      d =
        ((i = A(
          regeneratorRuntime.mark(function e(t, n) {
            var r, o;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = O.default.getCurrent()), (e.next = 3), l(t.id);
                    case 3:
                      return (
                        (o = e.sent),
                        (e.next = 6),
                        C.default.request(I.gcMessageNames.giftCardsFindSavingsClosed, {
                          cartPrice: n,
                          tabId: r.id,
                          prioritized: !0,
                          storeId: t.id,
                          storeName: t.name,
                          isReminderSet: o
                        })
                      );
                    case 6:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e, t) {
          return i.apply(this, arguments);
        });
    t.getCartPrice = L;
    var f = k(n(0)),
      p = k(n(58)),
      v = k(n(333)),
      h = k(n(12)),
      g = k(n(15)),
      m = k(n(41)),
      y = k(n(22)),
      _ = k(n(27)),
      b = k(n(24)),
      S = k(n(19)),
      O = k(n(37)),
      x = k(n(65)),
      w = k(n(4)),
      E = k(n(3086)),
      T = k(n(1902)),
      P = n(780),
      j = k(n(110)),
      I = n(1951),
      C = k(I),
      R = k(n(3087));
    function k(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function A(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var M,
      N = /[\d+][,.\d+]+/;
    function D(e) {
      var t = e && e.match(N);
      if (t) return t[0];
    }
    function L(e) {
      return s(e.metadata.honeyPayCartPriceSelector);
    }
    function U(e) {
      [].forEach(function (t) {
        return h.default.send(
          "honey-pay-now:action:" + t,
          { action: P.HONEY_PAY_NOW_MESSAGES.SET_CART_PRICE, data: { cartPrice: e } },
          { background: !0 }
        );
      });
    }
    function B(e) {
      var t = (function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "body",
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
          r = document.querySelector("#" + e);
        if (!r) {
          ((r = document.createElement("div")).id = e), (r.style.cssText = n);
          var o = document.querySelector(t);
          o.appendChild(r);
        }
        return r;
      })("honeyPayNowContainer");
      p.default.render(f.default.createElement(R.default, { data: e }), t);
    }
    function F(e) {
      var t = e.allPageTypes;
      return E.default.isPaymentsViewPrioritized(t);
    }
    h.default.addListener(
      "current:product",
      ((M = A(
        regeneratorRuntime.mark(function e(t, n) {
          var r, o, a, i, u, s, c, l;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (r = n.data), (e.next = 3), O.default.getCurrent();
                  case 3:
                    (o = e.sent),
                      (a = o.id),
                      (i = r.partialObservation),
                      (u = i.price),
                      (s = i.url),
                      (c = r.productId),
                      (l = (0, v.default)(u).value()),
                      m.default.set("honey-pay-now:product:" + s + ":" + a, { productPrice: l, productId: c });
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })
      )),
      function (e, t) {
        return M.apply(this, arguments);
      })
    ),
      h.default.addListener("honey-pay-now:action:ui", function (e, t) {
        switch (t && t.action) {
          case P.HONEY_PAY_NOW_MESSAGES.SET_PAY_NOW_CARD_VISIBILITY:
            return _.default.open({
              pathname: "/honey-pay-now-card",
              query: {},
              state: { cardData: t.data.cardData },
              force: !0,
              feature: "honey-pay-now-card",
              surface: "popup"
            });
          case P.HONEY_PAY_NOW_MESSAGES.OPEN_PAY_NOW_AUTOPOP:
            return _.default.open({
              pathname: "/honey-pay-now-autopop",
              query: {},
              state: t.data,
              force: !0,
              feature: "honey-pay-now-autopop",
              surface: "popup"
            });
          default:
            throw new InvalidParametersError("Invalid action");
        }
      }),
      (function () {
        var e = this;
        Promise.all([
          new Promise(function (e) {
            h.default.addListener("gift-cards-app:ready", function () {
              return e();
            });
          }),
          new Promise(function (e) {
            h.default.addListener("find-savings:closed", function () {
              return e();
            });
          })
        ])
          .then(
            A(
              regeneratorRuntime.mark(function t() {
                var n, r;
                return regeneratorRuntime.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), S.default.getCurrent();
                        case 2:
                          if ((n = e.sent).id) {
                            e.next = 5;
                            break;
                          }
                          return e.abrupt("return");
                        case 5:
                          return (e.next = 7), L(n);
                        case 7:
                          if ((r = e.sent)) {
                            e.next = 10;
                            break;
                          }
                          return e.abrupt("return");
                        case 10:
                          return (e.next = 12), j.default.getFeatureFlag("gift_cards_use_remote_iframe");
                        case 12:
                          if (!e.sent) {
                            e.next = 16;
                            break;
                          }
                          return (e.next = 16), d(n, r);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  t,
                  e
                );
              })
            )
          )
          .catch(function () {
            return "";
          });
      })(),
      (function () {
        var e = this;
        h.default.addListener(
          "find-savings:complete",
          A(
            regeneratorRuntime.mark(function t() {
              var n, r;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), S.default.getCurrent();
                      case 2:
                        if ((n = e.sent).id) {
                          e.next = 5;
                          break;
                        }
                        return e.abrupt("return");
                      case 5:
                        return (e.next = 7), L(n);
                      case 7:
                        if ((r = e.sent)) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt("return");
                      case 10:
                        return (e.next = 12), j.default.getFeatureFlag("gift_cards_use_remote_iframe");
                      case 12:
                        if (!e.sent) {
                          e.next = 16;
                          break;
                        }
                        return (e.next = 16), d(n, r);
                      case 16:
                      case "end":
                        return e.stop();
                    }
                },
                t,
                e
              );
            })
          )
        );
      })();
    var H,
      G = 0;
    h.default.addListener(
      "pageDetected:PAYMENTS",
      ((H = A(
        regeneratorRuntime.mark(function e(t, n) {
          var r,
            o,
            a,
            i,
            u,
            s,
            d,
            f,
            p,
            v = n.data;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!((r = Date.now()) - G < 5e3)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    G = r;
                  case 6:
                    return (e.next = 8), S.default.getCurrent();
                  case 8:
                    if ((o = e.sent).id) {
                      e.next = 11;
                      break;
                    }
                    return e.abrupt("return");
                  case 11:
                    return (e.next = 13), L(o);
                  case 13:
                    if ((a = e.sent)) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("return");
                  case 16:
                    return (e.next = 18), j.default.getFeatureFlag("gift_cards_use_remote_iframe");
                  case 18:
                    if (!e.sent) {
                      e.next = 41;
                      break;
                    }
                    return (e.next = 22), F(v);
                  case 22:
                    return (i = e.sent), (e.next = 25), x.default.getDeviceId();
                  case 25:
                    return (u = e.sent), (e.next = 28), l(o.id);
                  case 28:
                    return (s = e.sent), (e.next = 31), w.default.getCountryCode();
                  case 31:
                    return (d = e.sent), (e.next = 34), w.default.getUILanguage();
                  case 34:
                    return (f = e.sent), (e.next = 37), b.default.getInfo();
                  case 37:
                    (p = e.sent), U(a), c(o, o.metadata.honeyPayCartPriceSelector, i);
                    try {
                      B({
                        storeId: o.id,
                        deviceId: u,
                        browser: "ch",
                        extVersion: "16.3.4",
                        cartPrice: a,
                        prioritized: i,
                        isReminderSet: s,
                        language: f,
                        country: d,
                        user: p
                      });
                    } catch (e) {
                      g.default.error("Error loading Honey Pay iframe: " + e);
                    }
                  case 41:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })
      )),
      function (e, t) {
        return H.apply(this, arguments);
      })
    ),
      (t.default = {});
  },
  1951: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.gcMessageNames = void 0);
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(1868);
    var a = {
        extensionAuth: "extensionAuth",
        extensionRemoveIFrame: "extensionRemoveIFrame",
        extensionSendSDataEvent: "extensionSendSDataEvent",
        extensionUpdateStyles: "extensionUpdateStyles",
        extensionExperimentsGetVariant: "extensionExperimentsGetVariant",
        extensionExperimentsTrackImpression: "extensionExperimentsTrackImpression",
        extensionGetUserABGroup: "extensionGetUserABGroup",
        extensionGetI18nCountryCode: "extensionGetI18nCountryCode",
        extensionGetI18nMessage: "extensionGetI18nMessage",
        extensionSetGiftCardsEnabledForUser: "extensionSetGiftCardsEnabledForUser",
        extensionOpenLoginPrompt: "extensionOpenLoginPrompt",
        extensionHideContentUI: "extensionHideContentUI",
        extensionGetCartPrice: "extensionGetCartPrice",
        extensionSetIFrameAttribute: "extensionSetIFrameAttribute",
        extensionRemoveIFrameAttribute: "extensionRemoveIFrameAttribute",
        extensionSetHoneyStorageItem: "extensionSetHoneyStorageItem",
        extensionGetHoneyStorageItem: "extensionGetHoneyStorageItem",
        extensionRemoveHoneyStorageItem: "extensionRemoveHoneyStorageItem",
        extensionSetWindowLocalStorageItem: "extensionSetWindowLocalStorageItem",
        extensionGetWindowLocalStorageItem: "extensionGetWindowLocalStorageItem",
        extensionRemoveWindowLocalStorageItem: "extensionRemoveWindowLocalStorageItem",
        extensionGQLQuery: "extensionGQLQuery",
        extensionGQLMutation: "extensionGQLMutation",
        extensionOpenGiftCardDealModal: "extensionOpenGiftCardDealModal",
        giftCardsInit: "giftCardsInit",
        giftCardsReady: "giftCardsReady",
        giftCardsUserUpdate: "giftCardsUserUpdate",
        giftCardsCartPriceChange: "giftCardsCartPriceChange",
        giftCardsUserLoggedIn: "giftCardsUserLoggedIn",
        giftCardsFindSavingsClosed: "giftCardsFindSavingsClosed",
        extensionSetIsMinimized: "extensionSetIsMinimized",
        giftCardsSetIsMinimized: "giftCardsSetIsMinimized"
      },
      i = Object.keys(a).reduce(function (e, t) {
        return r(
          {},
          e,
          (function (e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
          })({}, t, t)
        );
      }, {}),
      u =
        ((t.gcMessageNames = new Proxy(i, {
          get: function (e, t, n) {
            var r = Reflect.get(e, t, n);
            if (void 0 === r) throw new Error("checkout message name not found: " + t);
            return r;
          }
        })),
        new o.PostMessenger({ types: a, enableLogging: !1, clientName: "extension", useEncryption: !1 }));
    t.default = u;
  },
  1955: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    (t.LOGGED_OUT_SUPPRESSION_KEY = "honeyTips:suppression:all:loggedOut:expirationDate"),
      (t.SNOOZE_ALL_TEMPORARY = "honeyTips:suppression:all:expirationDate");
  },
  1956: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.convertDaysToExpirationDateInMs = t.getStoreKey = void 0);
    var r,
      o = n(32),
      a = (r = o) && r.__esModule ? r : { default: r };
    (t.getStoreKey = function (e) {
      return "honeyTips:suppression:store:" + e + ":expirationDate";
    }),
      (t.convertDaysToExpirationDateInMs = function (e) {
        return 1e3 * (0, a.default)().add(e, "day").unix();
      });
  },
  1957: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.cancelHideTipsAfterTimeout = t.hideTipsAfterTimeout = void 0);
    var r = s(n(15)),
      o = n(42),
      a = n(1958),
      i = n(317),
      u = s(n(197));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = null;
    (t.hideTipsAfterTimeout = function () {
      return function (e, t) {
        clearTimeout(c),
          (c = setTimeout(function () {
            var n = (0, u.default)(t()),
              s = o.pageSelectors.selectMostRecentPageId()(t());
            n.length ||
              (r.default.debug("honeyTips:events: canRunTips but no tips appeared after timeout of " + a.WAIT_FOR_TIPS_TIMEOUT + "ms"),
              e(o.pageActions.setTipsTimedOut({ pageId: s, tipsTimedOut: !0 })),
              e((0, i.sdataTipsBadgeEvent)({ event: "hide", action: null })));
          }, a.WAIT_FOR_TIPS_TIMEOUT));
      };
    }),
      (t.cancelHideTipsAfterTimeout = function () {
        return function () {
          return clearTimeout(c);
        };
      });
  },
  1958: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.WAIT_FOR_TIPS_TIMEOUT = 3e4;
  },
  1959: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = { 1: { orientation: "topRight", top: 160 } },
      o = (t.getDefaultBadgeSettingsByStoreId = function (e) {
        return r[e];
      });
    t.shouldUseStoreBadgeSettings = function (e) {
      return !!o(e);
    };
  },
  1960: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.unmountApp = t.hasCurrentContainerState = t.mountApp = void 0);
    var r = i(n(0)),
      o = i(n(3102)),
      a = i(n(3167));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function u(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var s,
      c,
      l = void 0,
      d = !1;
    (t.mountApp =
      ((s = u(
        regeneratorRuntime.mark(function e() {
          var t, n, i;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (l || d) {
                      e.next = 9;
                      break;
                    }
                    return (d = !0), (e.next = 4), (0, a.default)(r.default.createElement(o.default, null));
                  case 4:
                    (t = e.sent), (n = t.container), (i = t.unmountApp), (l = { container: n, unmountApp: i }), (d = !1);
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })
      )),
      function () {
        return s.apply(this, arguments);
      })),
      (t.hasCurrentContainerState = function () {
        return !!l;
      }),
      (t.unmountApp =
        ((c = u(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      l && l.unmountApp(), (l = null);
                    case 2:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        )),
        function () {
          return c.apply(this, arguments);
        }));
  },
  1961: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(0),
      a = x(o),
      i = n(6),
      u = n(3),
      s = x(n(4)),
      c = x(n(1)),
      l = n(26),
      d = n(29),
      f = n(10),
      p = x(n(3106)),
      v = x(n(3107)),
      h = n(317),
      g = n(1960),
      m = n(431),
      y = n(3108),
      _ = x(n(3109)),
      b = x(n(199)),
      S = n(56),
      O = n(62);
    function x(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var w = function (e, t) {
        var n = (0, S.selectCurrentUniversalContainerId)(t());
        e(l.tipsActions.snoozeContainer({ containerId: n })),
          (0, g.unmountApp)(),
          e((0, h.sdataTipsBadgeEvent)({ event: "action", action: "snooze_page" })),
          e((0, m.sdataTipsContainerEvent)({ event: "action", action: "snooze" }));
      },
      E = function (e) {
        e((0, m.sdataTipsContainerEvent)({ event: "action", action: "click_settings" }));
      },
      T = function (e) {
        var t = e.noClose,
          n = e.customSize,
          c = e.customColor,
          m = (0, i.useDispatch)(),
          S = ((0, i.useSelector)(d.userSelectors.selectUser()) || {}).isLoggedIn,
          x = (0, i.useSelector)(f.storesSelectors.selectCurrentStoreId()),
          T = ((0, i.useSelector)(O.selectCurrentScrapedProduct) || {}).productId,
          P = (0, i.useSelector)(_.default),
          j = (0, i.useSelector)(l.tipsSelectors.selectConfiguration),
          I = j.links,
          C = void 0 === I ? {} : I,
          R = j.hasExtraSnoozeSettings,
          k = void 0 !== R && R,
          A = C.featureSettings || "https://www.joinhoney.com/settings/feature-settings",
          M = C.debugProduct || "https://dash.joinhoney.com/product-catalog/product?productId={PRODUCT_ID}",
          N = (0, o.useState)(!1),
          D = r(N, 2),
          L = D[0],
          U = D[1],
          B = [
            {
              copy: s.default.getMessage("Hide_on_this_page"),
              key: "snooze_page",
              onClick: function () {
                m(w);
              }
            },
            {
              copy: s.default.getMessage("Snooze_for_24_hours"),
              key: "snooze_24",
              onClick: function () {
                m((0, y.suppressAllTips)(1)),
                  U(!1),
                  m((0, h.sdataTipsBadgeEvent)({ event: "action", action: "snooze_24" })),
                  (0, g.unmountApp)();
              }
            }
          ],
          F = S
            ? {
                copy: s.default.getMessage("Go_to_settings"),
                key: "go_to_settings",
                onClick: function () {
                  U(!L), window.open(A);
                }
              }
            : {
                copy: s.default.getMessage("Snooze_on_all_sites"),
                key: "snooze_all",
                onClick: function () {
                  m((0, y.suppressAllTips)(30)),
                    U(!L),
                    m((0, h.sdataTipsBadgeEvent)({ event: "action", action: "snooze_all" })),
                    (0, g.unmountApp)();
                }
              };
        return (
          k &&
            B.push(
              {
                copy: s.default.getMessage("Snooze_on_this_site"),
                key: "snooze_store",
                onClick: function () {
                  m((0, y.suppressStore)(x, 30)),
                    U(!L),
                    m((0, h.sdataTipsBadgeEvent)({ event: "action", action: "snooze_store" })),
                    (0, g.unmountApp)();
                }
              },
              F
            ),
          P &&
            B.push({
              copy: s.default.getMessage("Debug_product"),
              key: "debug_product",
              onClick: function () {
                return (
                  (e = M.replace("{PRODUCT_ID}", T)),
                  window.open(e, "_blank"),
                  void m((0, h.sdataTipsBadgeEvent)({ event: "action", action: "click_debug_product" }))
                );
                var e;
              },
              icon: a.default.createElement(u.Icon, { name: "bug", type: "stroke", color: u.Colors.grey800, style: { marginRight: "5px" } })
            }),
          a.default.createElement(
            o.Fragment,
            null,
            a.default.createElement(p.default, {
              open: L,
              onClick: function () {
                U(!L), m(E);
              },
              options: B,
              customSize: n,
              customColor: c
            }),
            t
              ? null
              : a.default.createElement(v.default, {
                  onClick: function () {
                    m((0, b.default)());
                  }
                })
          )
        );
      };
    (T.propTypes = { noClose: c.default.bool, customSize: c.default.number, customColor: c.default.string }),
      (T.defaultProps = { noClose: null, customSize: null, customColor: null }),
      (t.default = T);
  },
  1962: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(26),
      a = n(431),
      i = n(56),
      u = (r = i) && r.__esModule ? r : { default: r };
    t.default = function () {
      return function (e, t) {
        var n = (0, u.default)(t()).id;
        e(o.tipsActions.updateShowTopTipOnly({ containerId: n, showTopTipOnly: !1 })),
          e((0, a.sdataTipsContainerEvent)({ event: "action", action: "expand_container" }));
      };
    };
  },
  1963: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(26),
      a = n(56),
      i = (r = a) && r.__esModule ? r : { default: r };
    var u = null;
    t.default = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return function (t, n) {
        return (
          clearTimeout(u),
          (u = setTimeout(function () {
            var e = (0, i.default)(n()) || {},
              r = e.id,
              a = e.isAutopop,
              u = e.isHoveringOverBadge,
              s = e.isHoveringOverContainer;
            a || u || s || t(o.tipsActions.closeContainer({ containerId: r, resetTipsShown: !1 }));
          }, e))
        );
      };
    };
  },
  1964: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.canDragX = function (e) {
        return "both" === e.props.axis || "x" === e.props.axis;
      }),
      (t.canDragY = function (e) {
        return "both" === e.props.axis || "y" === e.props.axis;
      }),
      (t.createCoreData = function (e, t, n) {
        var o = e.state,
          i = !(0, r.isNum)(o.lastX),
          u = a(e);
        return i
          ? { node: u, deltaX: 0, deltaY: 0, lastX: t, lastY: n, x: t, y: n }
          : { node: u, deltaX: t - o.lastX, deltaY: n - o.lastY, lastX: o.lastX, lastY: o.lastY, x: t, y: n };
      }),
      (t.createDraggableData = function (e, t) {
        var n = e.props.scale;
        return {
          node: t.node,
          x: e.state.x + t.deltaX / n,
          y: e.state.y + t.deltaY / n,
          deltaX: t.deltaX / n,
          deltaY: t.deltaY / n,
          lastX: e.state.x,
          lastY: e.state.y
        };
      }),
      (t.getBoundPosition = function (e, t, n) {
        if (!e.props.bounds) return [t, n];
        var i = e.props.bounds;
        i =
          "string" == typeof i
            ? i
            : (function (e) {
                return { left: e.left, top: e.top, right: e.right, bottom: e.bottom };
              })(i);
        var u = a(e);
        if ("string" == typeof i) {
          var s,
            c = u.ownerDocument,
            l = c.defaultView;
          if (!((s = "parent" === i ? u.parentNode : c.querySelector(i)) instanceof l.HTMLElement))
            throw new Error('Bounds selector "' + i + '" could not find an element.');
          var d = s,
            f = l.getComputedStyle(u),
            p = l.getComputedStyle(d);
          i = {
            left: -u.offsetLeft + (0, r.int)(p.paddingLeft) + (0, r.int)(f.marginLeft),
            top: -u.offsetTop + (0, r.int)(p.paddingTop) + (0, r.int)(f.marginTop),
            right: (0, o.innerWidth)(d) - (0, o.outerWidth)(u) - u.offsetLeft + (0, r.int)(p.paddingRight) - (0, r.int)(f.marginRight),
            bottom: (0, o.innerHeight)(d) - (0, o.outerHeight)(u) - u.offsetTop + (0, r.int)(p.paddingBottom) - (0, r.int)(f.marginBottom)
          };
        }
        (0, r.isNum)(i.right) && (t = Math.min(t, i.right));
        (0, r.isNum)(i.bottom) && (n = Math.min(n, i.bottom));
        (0, r.isNum)(i.left) && (t = Math.max(t, i.left));
        (0, r.isNum)(i.top) && (n = Math.max(n, i.top));
        return [t, n];
      }),
      (t.getControlPosition = function (e, t, n) {
        var r = "number" == typeof t ? (0, o.getTouch)(e, t) : null;
        if ("number" == typeof t && !r) return null;
        var i = a(n),
          u = n.props.offsetParent || i.offsetParent || i.ownerDocument.body;
        return (0, o.offsetXYFromParent)(r || e, u, n.props.scale);
      }),
      (t.snapToGrid = function (e, t, n) {
        var r = Math.round(t / e[0]) * e[0],
          o = Math.round(n / e[1]) * e[1];
        return [r, o];
      });
    var r = n(812),
      o = n(1570);
    function a(e) {
      var t = e.findDOMNode();
      if (!t) throw new Error("<DraggableCore>: Unmounted during event!");
      return t;
    }
  },
  1965: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        void 0;
      });
  },
  1966: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(26),
      o = u(n(467)),
      a = u(n(684)),
      i = u(n(1478));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      var t = r.tipsSelectors.selectBadgeCtaDisabledCategoriesForCurrentStore(e),
        n = (0, i.default)(e, t) || {},
        u = n.id,
        s = n.categoryId,
        c = (((0, o.default)(u) || {}).badge || {}).notificationText,
        l = (0, a.default)(u)(e) || {},
        d = ("function" == typeof c ? c(l) : c) || null;
      return { text: d, tipId: d ? u : null, categoryId: d ? s : null };
    };
  },
  1967: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(52),
      o = n(132),
      a = n(69),
      i = n(793),
      u = n(42),
      s = n(436),
      c = n(10),
      l = n(26),
      d = n(29);
    function f(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var p = [r.TIPS_BUCKETED_FEATURES.STANDALONE_OFFERS, r.TIPS_BUCKETED_FEATURES.TIPS_SHOWING_GROUP],
      v = {};
    t.default = function () {
      return (
        (e = f(
          regeneratorRuntime.mark(function e(t, n) {
            var r, h, g, m, y, _;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((r = u.pageSelectors.selectMostRecentPageId()(n())), !v[r])) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", v[r]);
                    case 3:
                      return (
                        (h = t(c.storesActions.load())),
                        (g = (function () {
                          var e = f(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), h;
                                      case 2:
                                        return (e.next = 4), t(s.sessionActions.loadStoreSession());
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (m = g()),
                        (y = (function () {
                          var e = f(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), Promise.allSettled([h, m]);
                                      case 2:
                                        return (e.next = 4), t(i.launchpadActions.load());
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (_ = Promise.allSettled([
                          t(o.deviceActions.loadDeviceSettings()),
                          t(o.deviceActions.loadIsFirstPageAfterInstall()),
                          t(a.experimentsActions.loadVariants(p)),
                          t(d.userActions.load()),
                          t(d.userActions.loadSettings()),
                          t(l.tipsActions.loadConfiguration()),
                          h,
                          m,
                          y()
                        ])),
                        (v[r] = _),
                        e.abrupt("return", _)
                      );
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        )),
        function (t, n) {
          return e.apply(this, arguments);
        }
      );
      var e;
    };
  },
  1968: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (t.isProductPageType = function (e) {
        return ["PRODUCT", "SHOPIFY_PRODUCT_PAGE", "SHOPIFY_WHERE_AM_I", "WHERE_AM_I"].includes(e);
      }),
      o = (t.isHomePageType = function (e) {
        return ["HOMEPAGE"].includes(e);
      });
    t.default = { isProductPageType: r, isHomePageType: o };
  },
  1969: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(52),
      o = w(n(75)),
      a = n(238),
      i = n(305),
      u = n(217),
      s = n(69),
      c = n(258),
      l = n(334),
      d = n(83),
      f = n(463),
      p = n(786),
      v = n(436),
      h = n(779),
      g = n(472),
      m = n(10),
      y = n(26),
      _ = w(n(1509)),
      b = n(335),
      S = n(29),
      O = n(111),
      x = w(n(3169));
    function w(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function E(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var T = [
        O.CURRENT_TIPS_CONTAINER_EXPERIMENT,
        r.TIPS_BUCKETED_FEATURES.STANDALONE_OFFERS,
        r.TIPS_BUCKETED_FEATURES.TIPS_SHOWING_GROUP,
        a.OFFERS_CTA_EXPERIMENT,
        a.DROPLIST_OCS_COLLECTIONS_POPUP,
        a.TIPS_FETCH_FALLBACK_PRODUCT,
        a.PERSONALIZED_UNAUTH_EXPERIMENT,
        a.SHIPPING_IN_COMPARISON_SHOPPING_EXPERIMENT,
        a.EXT_TOP_PICK_SAVINGS_DOLLAR,
        a.EXT_ATLAS_MISMATCH
      ],
      P = [
        "ext_paypal_tip_enabled",
        "tips_is_autopop_suppression_respected",
        "offers_show_gold_value",
        "tips_main_tip_pay_in_four_enabled"
      ];
    t.default = function (e) {
      return (
        (t = E(
          regeneratorRuntime.mark(function t(n, r) {
            var a, O, w, j, I, C, R, k, A, M, N, D, L, U;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = n(m.storesActions.load())),
                        (O = n(c.featuresActions.loadFeatures(P))),
                        (w = n(S.userActions.load())),
                        (j = n(v.sessionActions.loadGlobalSessionId())),
                        (I = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), n(s.experimentsActions.loadVariants(T));
                                      case 2:
                                        T.forEach(function (e) {
                                          return o.default.trackImpression(e);
                                        });
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (C = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              var t, o;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), w;
                                      case 2:
                                        return (
                                          (t = S.userSelectors.selectUser()(r())),
                                          (o = t.id),
                                          (e.next = 5),
                                          n(S.userActions.getUserFollow(o))
                                        );
                                      case 5:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (R = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              var t, o;
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), Promise.all([a, w]);
                                      case 2:
                                        if (
                                          ((t = m.storesSelectors.selectCurrentStore()(r()) || {}),
                                          !(
                                            (o = S.userSelectors.selectUser()(r()) || {}).isLoggedIn &&
                                            o.id &&
                                            t.storeId &&
                                            t.isDoubleGold
                                          ))
                                        ) {
                                          e.next = 7;
                                          break;
                                        }
                                        return (e.next = 7), n(S.userActions.getDoubleGoldActivationsByUserId(o.id));
                                      case 7:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (k = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a;
                                      case 2:
                                        return (e.next = 4), n(S.userActions.loadSessionCountForCurrentStore());
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (A = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), j;
                                      case 2:
                                        return (e.next = 4), n((0, _.default)());
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (M = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a;
                                      case 2:
                                        n(y.tipsActions.loadTipsShown());
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (N = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a;
                                      case 2:
                                        return (e.next = 4), n(g.storeInsightsActions.loadStoreInsights());
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (D = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), a;
                                      case 2:
                                        return (e.next = 4), n(u.couponsActions.loadStats());
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (L = (function () {
                          var e = E(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), O;
                                      case 2:
                                        return (e.next = 4), n(f.payInFourActions.load());
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (U = (function () {
                          var t = E(
                            regeneratorRuntime.mark(function t() {
                              var o, i, u, s;
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        if (e) {
                                          t.next = 2;
                                          break;
                                        }
                                        return t.abrupt("return");
                                      case 2:
                                        return (
                                          (o = (function () {
                                            var e = E(
                                              regeneratorRuntime.mark(function e() {
                                                return regeneratorRuntime.wrap(
                                                  function (e) {
                                                    for (;;)
                                                      switch ((e.prev = e.next)) {
                                                        case 0:
                                                          return (e.next = 2), w;
                                                        case 2:
                                                          return (e.next = 4), n(d.offersActions.loadEligibility());
                                                        case 4:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  },
                                                  e,
                                                  void 0
                                                );
                                              })
                                            );
                                            return function () {
                                              return e.apply(this, arguments);
                                            };
                                          })()),
                                          (i = o()),
                                          (u = (function () {
                                            var e = E(
                                              regeneratorRuntime.mark(function e() {
                                                return regeneratorRuntime.wrap(
                                                  function (e) {
                                                    for (;;)
                                                      switch ((e.prev = e.next)) {
                                                        case 0:
                                                          return (e.next = 2), i;
                                                        case 2:
                                                          n(d.offersActions.loadStoreOffer());
                                                        case 3:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  },
                                                  e,
                                                  void 0
                                                );
                                              })
                                            );
                                            return function () {
                                              return e.apply(this, arguments);
                                            };
                                          })()),
                                          (t.next = 7),
                                          Promise.allSettled([a, w])
                                        );
                                      case 7:
                                        return (
                                          (s = m.storesSelectors.selectCurrentStoreId()(r())),
                                          (t.next = 10),
                                          Promise.allSettled([
                                            n(d.offersActions.loadLaunchpadOffersConfiguration()),
                                            u(),
                                            n(p.saleAlertsActions.loadSaleAlert()),
                                            L(),
                                            n(h.storeDealsActions.loadStoreDeals()),
                                            n(l.honeyPayNowActions.loadByProduct({ product: { storeId: s }, subSrc: "tips" }))
                                          ])
                                        );
                                      case 10:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (t.next = 16),
                        Promise.allSettled([
                          a,
                          w,
                          I(),
                          O,
                          n(i.adblockActions.checkForAdblock()),
                          j,
                          n(b.uiActions.loadLanguage()),
                          n(y.tipsActions.loadDeprioritization()),
                          n(y.tipsActions.loadTipsAndCategories()),
                          n((0, x.default)()),
                          C(),
                          R(),
                          k(),
                          A(),
                          M(),
                          N(),
                          D(),
                          U()
                        ])
                      );
                    case 16:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var t;
    };
  },
  1970: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(111),
      o = c(n(15)),
      a = n(69),
      i = n(42),
      u = n(681),
      s = c(n(1573));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function l(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var d = function () {
      return (
        (e = l(
          regeneratorRuntime.mark(function e(t, n) {
            var o;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t(a.experimentsActions.loadVariant(r.CURRENT_TIPS_CONTAINER_EXPERIMENT));
                    case 2:
                      return (
                        (o = a.experimentSelectors.selectVariant(r.CURRENT_TIPS_CONTAINER_EXPERIMENT)(n())),
                        e.abrupt("return", o === r.TIPS_CONTAINER_VARIANTS.WAI_ENABLED_PF_DISABLED)
                      );
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        )),
        function (t, n) {
          return e.apply(this, arguments);
        }
      );
      var e;
    };
    t.default = function (e) {
      return (
        (t = l(
          regeneratorRuntime.mark(function t(n, r) {
            var a;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.next = 2), n(d());
                    case 2:
                      if (!t.sent) {
                        t.next = 5;
                        break;
                      }
                      return o.default.debug("honeyTips:handleVimProduct: VIM fetcher handling is disabled."), t.abrupt("return");
                    case 5:
                      return (
                        (a = i.pageSelectors.selectMostRecentPageId()(r())),
                        n(u.productFetcherActions.productFetched({ pageId: a, product: e })),
                        (t.next = 9),
                        n((0, s.default)(e))
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var t;
    };
  },
  1971: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(153),
      o = n(330),
      a = n(145),
      i = n(334),
      u = n(83),
      s = n(463),
      c = n(687),
      l = n(315),
      d = n(69),
      f = n(238),
      p = n(111),
      v = m(n(787)),
      h = n(1972),
      g = m(n(813));
    function m(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function y(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    t.default = function (e) {
      return (
        (t = y(
          regeneratorRuntime.mark(function t(n, m) {
            var _, b, S, O, x, w;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return");
                    case 2:
                      return (
                        (_ = e.parentId),
                        (b = e.productId),
                        (S = (function () {
                          var t = y(
                            regeneratorRuntime.mark(function t() {
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), n(u.offersActions.loadProductOffer(e));
                                      case 2:
                                        u.offersSelectors.selectCurrentProductOffer(m()) && n((0, g.default)());
                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (O = n(r.catalogProductsActions.loadProductByProductId(b))),
                        (x = (function () {
                          var e = y(
                            regeneratorRuntime.mark(function e() {
                              return regeneratorRuntime.wrap(
                                function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (e.next = 2), O;
                                      case 2:
                                        return (e.next = 4), n(c.priceTrendProductActions.loadProductByProductId(b));
                                      case 4:
                                      case "end":
                                        return e.stop();
                                    }
                                },
                                e,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })()),
                        (w = (function () {
                          var t = y(
                            regeneratorRuntime.mark(function t() {
                              var a, i;
                              return regeneratorRuntime.wrap(
                                function (t) {
                                  for (;;)
                                    switch ((t.prev = t.next)) {
                                      case 0:
                                        return (t.next = 2), O;
                                      case 2:
                                        if (
                                          ((a = r.catalogProductsSelectors.selectByProductId(e.productId)(m()) || {}),
                                          (i = d.experimentSelectors.selectVariant(p.CURRENT_TIPS_CONTAINER_EXPERIMENT)(m())),
                                          !(0, v.default)(i))
                                        ) {
                                          t.next = 7;
                                          break;
                                        }
                                        return (
                                          (t.next = 7),
                                          n(o.comparisonShoppingActions.loadCanonicalProducts({ product: e, catalogProduct: a }))
                                        );
                                      case 7:
                                      case "end":
                                        return t.stop();
                                    }
                                },
                                t,
                                void 0
                              );
                            })
                          );
                          return function () {
                            return t.apply(this, arguments);
                          };
                        })()),
                        (t.next = 9),
                        Promise.allSettled([
                          S(),
                          O,
                          x(),
                          w(),
                          n(h.loadTopProductCoupon),
                          n(o.comparisonShoppingActions.loadWebPriceComparisonViewed({ parentId: _ })),
                          n(a.droplistActions.loadDroplistAndCollectionsByVimProduct(e)),
                          n(i.honeyPayNowActions.loadByProduct({ product: e, subSrc: "tips" })),
                          n(l.teamDealsActions.load(e)),
                          n(s.payInFourActions.load()),
                          n(d.experimentsActions.loadVariant(f.TIPS_FETCH_FALLBACK_PRODUCT))
                        ])
                      );
                    case 9:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var t;
    };
  },
  1972: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.loadTopProductCoupon = void 0);
    var r = n(217),
      o = n(310),
      a = n(1496),
      i = n(62);
    var u,
      s,
      c = (t.loadTopProductCoupon =
        ((u = regeneratorRuntime.mark(function e(t, n) {
          var u, s, c, l, d;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((u = (0, i.selectCurrentScrapedProduct)(n()) || {}), (s = u.parentId), (e.t0 = s), !e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 5), t(r.couponsActions.loadTopProductCoupon({ parentId: s }));
                  case 5:
                    (c = (0, a.selectProductCouponsCategoryData)(n())),
                      (l = c.coupon),
                      (d = (0, a.selectIsProductCouponInvalid)(n())),
                      l &&
                        d &&
                        t(
                          (0, o.sdataTipsDebugEvent)({
                            debugEvent: "invalid_coupon_stats",
                            action: "invalid_coupon_stats",
                            metadata_json: JSON.stringify({
                              source: "extension",
                              couponStats: l,
                              referrerUrl: "" + window.location.origin + window.location.pathname
                            })
                          })
                        );
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (s = function () {
          var e = u.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e, t) {
          return s.apply(this, arguments);
        }));
    t.default = c;
  },
  1973: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(26),
      a = n(431),
      i = n(56),
      u = (r = i) && r.__esModule ? r : { default: r };
    t.default = function () {
      return function (e, t) {
        var n = (0, u.default)(t()).id;
        e(o.tipsActions.refreshContainer({ containerId: n })), e((0, a.sdataTipsContainerEvent)({ event: "update" }));
      };
    };
  },
  1974: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(145),
      o = n(334);
    t.default = function (e) {
      return (
        (t = regeneratorRuntime.mark(function t(n) {
          return regeneratorRuntime.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (e) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    return (
                      (t.next = 4),
                      Promise.allSettled([
                        n(r.droplistActions.loadDroplistAndCollectionsByGenericProduct(e)),
                        n(o.honeyPayNowActions.loadByProduct({ product: e, subSrc: "tips" }))
                      ])
                    );
                  case 4:
                  case "end":
                    return t.stop();
                }
            },
            t,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e) {
          return n.apply(this, arguments);
        }
      );
      var t, n;
    };
  },
  1976: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
    function o(e) {
      var t = e.match(r);
      if (t) {
        var n = void 0;
        return "1" === t[3] ? (n = !0) : "0" === t[3] && (n = !1), { traceId: t[1], parentSampled: n, parentSpanId: t[2] };
      }
    }
  },
  1979: function (e, t, n) {
    "use strict";
    function r() {
      return "undefined" != typeof __SENTRY_BROWSER_BUNDLE__ && !!__SENTRY_BROWSER_BUNDLE__;
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  1980: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return a;
    }),
      n.d(t, "a", function () {
        return u;
      });
    var r = n(130),
      o = n(77);
    function a(e, t) {
      try {
        for (
          var n = e, r = [], o = 0, a = 0, u = " > ".length, s = void 0;
          n && o++ < 5 && !("html" === (s = i(n, t)) || (o > 1 && a + r.length * u + s.length >= 80));

        )
          r.push(s), (a += s.length), (n = n.parentNode);
        return r.reverse().join(" > ");
      } catch (e) {
        return "<unknown>";
      }
    }
    function i(e, t) {
      var n,
        r,
        a,
        i,
        u,
        s = e,
        c = [];
      if (!s || !s.tagName) return "";
      c.push(s.tagName.toLowerCase());
      var l =
        t && t.length
          ? t
              .filter(function (e) {
                return s.getAttribute(e);
              })
              .map(function (e) {
                return [e, s.getAttribute(e)];
              })
          : null;
      if (l && l.length)
        l.forEach(function (e) {
          c.push("[" + e[0] + '="' + e[1] + '"]');
        });
      else if ((s.id && c.push("#" + s.id), (n = s.className) && Object(o.l)(n)))
        for (r = n.split(/\s+/), u = 0; u < r.length; u++) c.push("." + r[u]);
      var d = ["type", "name", "title", "alt"];
      for (u = 0; u < d.length; u++) (a = d[u]), (i = s.getAttribute(a)) && c.push("[" + a + '="' + i + '"]');
      return c.join("");
    }
    function u() {
      var e = Object(r.a)();
      try {
        return e.document.location.href;
      } catch (e) {
        return "";
      }
    }
  },
  1981: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return i;
    });
    var r = n(723),
      o = n(270),
      a = n(131),
      i = (function () {
        function e(e) {
          (this.errors = 0),
            (this.sid = Object(r.g)()),
            (this.duration = 0),
            (this.status = "ok"),
            (this.init = !0),
            (this.ignoreDuration = !1);
          var t = Object(o.c)();
          (this.timestamp = t), (this.started = t), e && this.update(e);
        }
        return (
          (e.prototype.update = function (e) {
            if (
              (void 0 === e && (e = {}),
              e.user &&
                (!this.ipAddress && e.user.ip_address && (this.ipAddress = e.user.ip_address),
                this.did || e.did || (this.did = e.user.id || e.user.email || e.user.username)),
              (this.timestamp = e.timestamp || Object(o.c)()),
              e.ignoreDuration && (this.ignoreDuration = e.ignoreDuration),
              e.sid && (this.sid = 32 === e.sid.length ? e.sid : Object(r.g)()),
              void 0 !== e.init && (this.init = e.init),
              !this.did && e.did && (this.did = "" + e.did),
              "number" == typeof e.started && (this.started = e.started),
              this.ignoreDuration)
            )
              this.duration = void 0;
            else if ("number" == typeof e.duration) this.duration = e.duration;
            else {
              var t = this.timestamp - this.started;
              this.duration = t >= 0 ? t : 0;
            }
            e.release && (this.release = e.release),
              e.environment && (this.environment = e.environment),
              !this.ipAddress && e.ipAddress && (this.ipAddress = e.ipAddress),
              !this.userAgent && e.userAgent && (this.userAgent = e.userAgent),
              "number" == typeof e.errors && (this.errors = e.errors),
              e.status && (this.status = e.status);
          }),
          (e.prototype.close = function (e) {
            e ? this.update({ status: e }) : "ok" === this.status ? this.update({ status: "exited" }) : this.update();
          }),
          (e.prototype.toJSON = function () {
            return Object(a.c)({
              sid: "" + this.sid,
              init: this.init,
              started: new Date(1e3 * this.started).toISOString(),
              timestamp: new Date(1e3 * this.timestamp).toISOString(),
              status: this.status,
              errors: this.errors,
              did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
              duration: this.duration,
              attrs: { release: this.release, environment: this.environment, ip_address: this.ipAddress, user_agent: this.userAgent }
            });
          }),
          e
        );
      })();
  },
  1982: function (e, t, n) {
    "use strict";
    function r() {
      var e = "function" == typeof WeakSet,
        t = e ? new WeakSet() : [];
      return [
        function (n) {
          if (e) return !!t.has(n) || (t.add(n), !1);
          for (var r = 0; r < t.length; r++) {
            if (t[r] === n) return !0;
          }
          return t.push(n), !1;
        },
        function (n) {
          if (e) t.delete(n);
          else
            for (var r = 0; r < t.length; r++)
              if (t[r] === n) {
                t.splice(r, 1);
                break;
              }
        }
      ];
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  1983: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return u;
    });
    var r = n(1984),
      o = n(79),
      a = n(35),
      i = n(68);
    function u() {
      Object(r.a)("error", s), Object(r.a)("unhandledrejection", s);
    }
    function s() {
      var e = Object(i.a)();
      if (e) {
        a.a && o.c.log("[Tracing] Transaction: internal_error -> Global error occured"), e.setStatus("internal_error");
      }
    }
  },
  1984: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return g;
    });
    var r,
      o = n(59),
      a = n(268),
      i = n(130),
      u = n(77),
      s = n(79),
      c = n(131),
      l = n(816),
      d = n(1576),
      f = Object(i.a)(),
      p = {},
      v = {};
    function h(e) {
      if (!v[e])
        switch (((v[e] = !0), e)) {
          case "console":
            !(function () {
              if (!("console" in f)) return;
              s.a.forEach(function (e) {
                e in f.console &&
                  Object(c.e)(f.console, e, function (t) {
                    return function () {
                      for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                      m("console", { args: n, level: e }), t && t.apply(f.console, n);
                    };
                  });
              });
            })();
            break;
          case "dom":
            !(function () {
              if (!("document" in f)) return;
              var e = m.bind(null, "dom"),
                t = O(e, !0);
              f.document.addEventListener("click", t, !1),
                f.document.addEventListener("keypress", t, !1),
                ["EventTarget", "Node"].forEach(function (t) {
                  var n = f[t] && f[t].prototype;
                  n &&
                    n.hasOwnProperty &&
                    n.hasOwnProperty("addEventListener") &&
                    (Object(c.e)(n, "addEventListener", function (t) {
                      return function (n, r, o) {
                        if ("click" === n || "keypress" == n)
                          try {
                            var a = (this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {}),
                              i = (a[n] = a[n] || { refCount: 0 });
                            if (!i.handler) {
                              var u = O(e);
                              (i.handler = u), t.call(this, n, u, o);
                            }
                            i.refCount += 1;
                          } catch (e) {}
                        return t.call(this, n, r, o);
                      };
                    }),
                    Object(c.e)(n, "removeEventListener", function (e) {
                      return function (t, n, r) {
                        if ("click" === t || "keypress" == t)
                          try {
                            var o = this.__sentry_instrumentation_handlers__ || {},
                              a = o[t];
                            a &&
                              ((a.refCount -= 1),
                              a.refCount <= 0 && (e.call(this, t, a.handler, r), (a.handler = void 0), delete o[t]),
                              0 === Object.keys(o).length && delete this.__sentry_instrumentation_handlers__);
                          } catch (e) {}
                        return e.call(this, t, n, r);
                      };
                    }));
                });
            })();
            break;
          case "xhr":
            !(function () {
              if (!("XMLHttpRequest" in f)) return;
              var e = XMLHttpRequest.prototype;
              Object(c.e)(e, "open", function (e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  var r = this,
                    o = t[1],
                    a = (r.__sentry_xhr__ = { method: Object(u.l)(t[0]) ? t[0].toUpperCase() : t[0], url: t[1] });
                  Object(u.l)(o) && "POST" === a.method && o.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                  var i = function () {
                    if (4 === r.readyState) {
                      try {
                        a.status_code = r.status;
                      } catch (e) {}
                      m("xhr", { args: t, endTimestamp: Date.now(), startTimestamp: Date.now(), xhr: r });
                    }
                  };
                  return (
                    "onreadystatechange" in r && "function" == typeof r.onreadystatechange
                      ? Object(c.e)(r, "onreadystatechange", function (e) {
                          return function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return i(), e.apply(r, t);
                          };
                        })
                      : r.addEventListener("readystatechange", i),
                    e.apply(r, t)
                  );
                };
              }),
                Object(c.e)(e, "send", function (e) {
                  return function () {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return (
                      this.__sentry_xhr__ && void 0 !== t[0] && (this.__sentry_xhr__.body = t[0]),
                      m("xhr", { args: t, startTimestamp: Date.now(), xhr: this }),
                      e.apply(this, t)
                    );
                  };
                });
            })();
            break;
          case "fetch":
            !(function () {
              if (!Object(d.d)()) return;
              Object(c.e)(f, "fetch", function (e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  var r = { args: t, fetchData: { method: y(t), url: _(t) }, startTimestamp: Date.now() };
                  return (
                    m("fetch", Object(o.a)({}, r)),
                    e.apply(f, t).then(
                      function (e) {
                        return m("fetch", Object(o.a)(Object(o.a)({}, r), { endTimestamp: Date.now(), response: e })), e;
                      },
                      function (e) {
                        throw (m("fetch", Object(o.a)(Object(o.a)({}, r), { endTimestamp: Date.now(), error: e })), e);
                      }
                    )
                  );
                };
              });
            })();
            break;
          case "history":
            !(function () {
              if (!Object(d.c)()) return;
              var e = f.onpopstate;
              function t(e) {
                return function () {
                  for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                  var o = t.length > 2 ? t[2] : void 0;
                  if (o) {
                    var a = r,
                      i = String(o);
                    (r = i), m("history", { from: a, to: i });
                  }
                  return e.apply(this, t);
                };
              }
              (f.onpopstate = function () {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var o = f.location.href,
                  a = r;
                if (((r = o), m("history", { from: a, to: o }), e))
                  try {
                    return e.apply(this, t);
                  } catch (e) {}
              }),
                Object(c.e)(f.history, "pushState", t),
                Object(c.e)(f.history, "replaceState", t);
            })();
            break;
          case "error":
            (x = f.onerror),
              (f.onerror = function (e, t, n, r, o) {
                return m("error", { column: r, error: o, line: n, msg: e, url: t }), !!x && x.apply(this, arguments);
              });
            break;
          case "unhandledrejection":
            (w = f.onunhandledrejection),
              (f.onunhandledrejection = function (e) {
                return m("unhandledrejection", e), !w || w.apply(this, arguments);
              });
            break;
          default:
            return void (a.a && s.c.warn("unknown instrumentation type:", e));
        }
    }
    function g(e, t) {
      (p[e] = p[e] || []), p[e].push(t), h(e);
    }
    function m(e, t) {
      var n, r;
      if (e && p[e])
        try {
          for (var i = Object(o.e)(p[e] || []), u = i.next(); !u.done; u = i.next()) {
            var c = u.value;
            try {
              c(t);
            } catch (t) {
              a.a && s.c.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + Object(l.b)(c) + "\nError:", t);
            }
          }
        } catch (e) {
          n = { error: e };
        } finally {
          try {
            u && !u.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
    }
    function y(e) {
      return (
        void 0 === e && (e = []),
        "Request" in f && Object(u.g)(e[0], Request) && e[0].method
          ? String(e[0].method).toUpperCase()
          : e[1] && e[1].method
          ? String(e[1].method).toUpperCase()
          : "GET"
      );
    }
    function _(e) {
      return (
        void 0 === e && (e = []), "string" == typeof e[0] ? e[0] : "Request" in f && Object(u.g)(e[0], Request) ? e[0].url : String(e[0])
      );
    }
    var b, S;
    function O(e, t) {
      return (
        void 0 === t && (t = !1),
        function (n) {
          if (
            n &&
            S !== n &&
            !(function (e) {
              if ("keypress" !== e.type) return !1;
              try {
                var t = e.target;
                if (!t || !t.tagName) return !0;
                if ("INPUT" === t.tagName || "TEXTAREA" === t.tagName || t.isContentEditable) return !1;
              } catch (e) {}
              return !0;
            })(n)
          ) {
            var r = "keypress" === n.type ? "input" : n.type;
            (void 0 === b ||
              (function (e, t) {
                if (!e) return !0;
                if (e.type !== t.type) return !0;
                try {
                  if (e.target !== t.target) return !0;
                } catch (e) {}
                return !1;
              })(S, n)) &&
              (e({ event: n, name: r, global: t }), (S = n)),
              clearTimeout(b),
              (b = f.setTimeout(function () {
                b = void 0;
              }, 1e3));
          }
        }
      );
    }
    var x = null;
    var w = null;
  },
  2010: function (e, t, n) {
    n(727), (e.exports = n(2011));
  },
  2011: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o,
      a =
        ((r = regeneratorRuntime.mark(function e(t) {
          var n;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    x.default
                      .send(
                        "page:load",
                        { url: t, hasServiceWorkers: !!((navigator || {}).serviceWorker || {}).controller },
                        { allTabs: !0, background: !0, ignoreResponse: !0 }
                      )
                      .reflect(),
                      O.default.debug("Honey 16.3.4 content script is ready. Environment is production"),
                      (e.next = 8);
                    break;
                  case 5:
                    (n = e.sent),
                      (r = void 0),
                      ((r = document.createElement("script")).text =
                        "\n        (function setSdata() {\n          window.sdata = " + JSON.stringify(n) + ";\n        })();\n      "),
                      document.documentElement.appendChild(r);
                  case 8:
                  case "end":
                    return e.stop();
                }
              var r;
            },
            e,
            this
          );
        })),
        (o = function () {
          var e = r.apply(this, arguments);
          return new i.default(function (t, n) {
            return (function r(o, a) {
              try {
                var u = e[o](a),
                  s = u.value;
              } catch (e) {
                return void n(e);
              }
              if (!u.done)
                return i.default.resolve(s).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(s);
            })("next");
          });
        }),
        function (e) {
          return o.apply(this, arguments);
        });
    n(1585),
      n(1633),
      n(1638),
      n(1641),
      n(1642),
      n(1648),
      n(1653),
      n(1654),
      n(1656),
      n(1658),
      n(1659),
      n(1660),
      n(1662),
      n(1663),
      n(1665),
      n(1666),
      n(1668),
      n(1669),
      n(135);
    var i = ee(n(25)),
      u = ee(n(8)),
      s = ee(n(22)),
      c = ee(n(1437)),
      l = ee(n(1539)),
      d = ee(n(425)),
      f = ee(n(261)),
      p = ee(n(1949)),
      v = ee(n(3084)),
      h = ee(n(1447)),
      g = ee(n(679)),
      m = ee(n(65)),
      y = ee(n(75)),
      _ = ee(n(1515)),
      b = ee(n(4)),
      S = ee(n(1698)),
      O = ee(n(15)),
      x = ee(n(12)),
      w = ee(n(3085)),
      E = ee(n(212)),
      T = ee(n(1540)),
      P = ee(n(1950)),
      j = ee(n(309)),
      I = ee(n(236)),
      C = ee(n(1952)),
      R = ee(n(152)),
      k = ee(n(3093)),
      A = ee(n(70)),
      M = ee(n(1954)),
      N = ee(n(13)),
      D = ee(n(173)),
      L = ee(n(19)),
      U = ee(n(37)),
      B = ee(n(3094)),
      F = ee(n(27)),
      H = ee(n(24)),
      G = ee(n(1861)),
      q = ee(n(1714)),
      Y = ee(n(3185)),
      W = ee(n(428)),
      V = ee(n(327)),
      z = ee(n(1566)),
      X = ee(n(426)),
      K = ee(n(332)),
      J = ee(n(1975)),
      $ = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(3195)),
      Q = ee(n(3191)),
      Z = ee(n(3192));
    function ee(e) {
      return e && e.__esModule ? e : { default: e };
    }
    i.default.onPossiblyUnhandledRejection(function (e) {
      return O.default.error(e);
    }),
      a(window.location.href),
      (0, Q.default)($, Z.default),
      setTimeout(function () {
        if ("www.joinhoney.com" === window.location.hostname) {
          var e = document.querySelector("#messagingEventHandler");
          if (e)
            if (e.getAttribute("si_ext"))
              x.default.send("si:on", { si_ext: e.getAttribute("si_ext") }, { ignoreResponse: !0, background: !0 });
            else
              new MutationObserver(function () {
                e.getAttribute("si_ext") &&
                  x.default.send("si:on", { si_ext: e.getAttribute("si_ext") }, { ignoreResponse: !0, background: !0 });
              }).observe(e, { attributes: !0 });
        }
      });
    var te = {
      $: u.default,
      acorns: c.default,
      adbBp: X.default,
      ajax: l.default,
      button: d.default,
      cartPageFetcher: q.default,
      checkoutPlatform: v.default,
      clipboard: f.default,
      config: p.default,
      confirmation: h.default,
      cookies: g.default,
      device: m.default,
      experiments: y.default,
      extensionReview: _.default,
      i18n: b.default,
      imageLoader: S.default,
      honeyPayNow: P.default,
      honeyPayPal: j.default,
      launchpad: K.default,
      logger: O.default,
      messages: x.default,
      mseUpsell: w.default,
      offers: E.default,
      optimus: T.default,
      pageDetector: R.default,
      popover: I.default,
      productFetcher: C.default,
      runtime: k.default,
      savingsController: A.default,
      search: J.default,
      seleniumComm: M.default,
      stats: N.default,
      storage: D.default,
      stores: L.default,
      tabs: U.default,
      tips: B.default,
      ui: F.default,
      user: H.default,
      userSavingsStats: G.default,
      util: s.default,
      vims: W.default,
      websiteComm: V.default,
      whereAmI: Y.default,
      yelp: z.default
    };
    x.default.addListener("debug:change", function (e, t) {
      try {
        t.active ? (window.honey = te) : delete window.honey;
      } catch (e) {}
    }),
      (t.default = te);
  },
  247: function (e, t, n) {
    "use strict";
    (function (e, r) {
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return u;
        });
      var o = n(1979);
      function a() {
        return !Object(o.a)() && "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0);
      }
      function i(e, t) {
        return e.require(t);
      }
      function u(e) {
        var t;
        try {
          t = i(r, e);
        } catch (e) {}
        try {
          var n = i(r, "process").cwd;
          t = i(r, n() + "/node_modules/" + e);
        } catch (e) {}
        return t;
      }
    }).call(this, n(82), n(456)(e));
  },
  268: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  },
  270: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return l;
        }),
        n.d(t, "a", function () {
          return d;
        });
      var r = n(130),
        o = n(247),
        a = {
          nowSeconds: function () {
            return Date.now() / 1e3;
          }
        };
      var i = Object(o.b)()
          ? (function () {
              try {
                return Object(o.a)(e, "perf_hooks").performance;
              } catch (e) {
                return;
              }
            })()
          : (function () {
              var e = Object(r.a)().performance;
              if (e && e.now)
                return {
                  now: function () {
                    return e.now();
                  },
                  timeOrigin: Date.now() - e.now()
                };
            })(),
        u =
          void 0 === i
            ? a
            : {
                nowSeconds: function () {
                  return (i.timeOrigin + i.now()) / 1e3;
                }
              },
        s = a.nowSeconds.bind(a),
        c = u.nowSeconds.bind(u),
        l = c,
        d = (function () {
          var e = Object(r.a)().performance;
          if (e && e.now) {
            var t = e.now(),
              n = Date.now(),
              o = e.timeOrigin ? Math.abs(e.timeOrigin + t - n) : 36e5,
              a = o < 36e5,
              i = e.timing && e.timing.navigationStart,
              u = "number" == typeof i ? Math.abs(i + t - n) : 36e5;
            return a || u < 36e5 ? (o <= u ? ("timeOrigin", e.timeOrigin) : ("navigationStart", i)) : ("dateNow", n);
          }
          ("none");
        })();
    }).call(this, n(456)(e));
  },
  3084: function (e, t, n) {
    "use strict";
    var r,
      o,
      a = n(703),
      i = (r = a) && r.__esModule ? r : { default: r };
    ((o = regeneratorRuntime.mark(function e() {
      return regeneratorRuntime.wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                i.default.start();
              case 1:
              case "end":
                return e.stop();
            }
        },
        e,
        void 0
      );
    })),
    function () {
      var e = o.apply(this, arguments);
      return new Promise(function (t, n) {
        return (function r(o, a) {
          try {
            var i = e[o](a),
              u = i.value;
          } catch (e) {
            return void n(e);
          }
          if (!i.done)
            return Promise.resolve(u).then(
              function (e) {
                r("next", e);
              },
              function (e) {
                r("throw", e);
              }
            );
          t(u);
        })("next");
      });
    })();
  },
  3085: function (e, t, n) {
    "use strict";
    var r = a(n(12)),
      o = a(n(27));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    r.default.addListener("mseupsell:action", function (e, t) {
      var n = t && t.flow ? t.flow : "default";
      switch (t && t.action) {
        case "showMSEPrompt":
          o.default.open({ pathname: "/msePrompt", query: { flow: n }, force: !0, feature: "qr-code-prompt", surface: "popup" });
          break;
        case "showQrCode":
          o.default.open({ pathname: "/qrCode", query: { flow: n }, force: !0, feature: "qr-code-scan", surface: "popup" });
          break;
        default:
          throw new InvalidParametersError("No mseupsell:action listener for " + t.action);
      }
    });
  },
  3086: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o,
      a =
        ((r = regeneratorRuntime.mark(function e(t, n, r) {
          var o, a, i;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = n), e.t0)) {
                      e.next = 5;
                      break;
                    }
                    return (e.next = 4), c.default.getCurrent();
                  case 4:
                    e.t0 = e.sent;
                  case 5:
                    if (((o = e.t0), s.default.getCtaType(o) !== u.FIND_SAVINGS_TYPES.NONE)) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return", !0);
                  case 10:
                    return (
                      (a = [d, f, p]),
                      r && (a = r),
                      (e.next = 14),
                      Promise.all(
                        a.map(function (e) {
                          return e(t, o);
                        })
                      )
                    );
                  case 14:
                    return (
                      (i = e.sent),
                      e.abrupt(
                        "return",
                        i.some(function (e) {
                          return e;
                        }) && v(o)
                      )
                    );
                  case 16:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })),
        (o = function () {
          var e = r.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e, t, n) {
          return o.apply(this, arguments);
        }),
      i = l(n(32)),
      u = n(52),
      s = l(n(70)),
      c = l(n(19));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = function (e, t) {
        return e.GOLD_REWARDS && (!t.gold || (t.gold && t.gold.activated));
      },
      f = function (e, t) {
        return (
          e && (e.FIND_SAVINGS || e.GOLD_REWARDS) && i.default.unix(t.applyCodesComplete).isAfter((0, i.default)().subtract(2, "hours"))
        );
      },
      p = function (e) {
        return e && !e.FIND_SAVINGS;
      },
      v = function (e) {
        return !e.standDown;
      };
    t.default = { isFsOrGoldAndMoreThanTwoHrs: f, isNotOnFs: p, isOnGoldRewardsOrActivated: d, isPaymentsViewPrioritized: a };
  },
  3087: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o,
      a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      i = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      u =
        ((r = C(
          regeneratorRuntime.mark(function e() {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), crypto.subtle.generateKey({ name: "AES-CBC", length: 256 }, !0, ["encrypt", "decrypt"]);
                    case 2:
                      (A = e.sent), (M = crypto.getRandomValues(new Uint8Array(16))), (N = { name: "AES-CBC", iv: M });
                    case 5:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function () {
          return r.apply(this, arguments);
        }),
      s =
        ((o = C(
          regeneratorRuntime.mark(function e(t) {
            var n, r, o, a;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (n = k(t)), (e.next = 3), crypto.subtle.decrypt(N, A, n);
                    case 3:
                      return (r = e.sent), (o = new TextDecoder()), (a = o.decode(r)), e.abrupt("return", a);
                    case 7:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e) {
          return o.apply(this, arguments);
        }),
      c = n(0),
      l = T(c),
      d = T(n(1)),
      f = T(n(12)),
      p = T(n(13)),
      v = T(n(173)),
      h = n(780),
      g = T(n(75)),
      m = T(n(4)),
      y = T(n(110)),
      _ = T(n(24)),
      b = T(n(27)),
      S = T(n(19)),
      O = n(1950),
      x = T(n(3088)),
      w = n(1951),
      E = T(w);
    function T(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function P(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
      }
      return Array.from(e);
    }
    function j(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    function I(e, t) {
      var n = {};
      for (var r in e) t.indexOf(r) >= 0 || (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
      return n;
    }
    function C(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var R = "https://cdn.joinhoney.com/gift-cards/index.html";
    function k(e) {
      for (var t = new ArrayBuffer(2 * e.length), n = new Uint16Array(t), r = 0, o = e.length; r < o; r += 1) n[r] = e.charCodeAt(r);
      return t;
    }
    var A = void 0,
      M = void 0,
      N = void 0;
    function D(e) {
      var t,
        n = this,
        r =
          ((t = C(
            regeneratorRuntime.mark(function e() {
              var t,
                n,
                r,
                i = this;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), u();
                      case 2:
                        return (
                          E.default.setTarget(T.current.contentWindow, R),
                          E.default.beginListening(function (e) {
                            return R.match(new RegExp("^(" + e + ")"));
                          }),
                          (k.current = E.default.bindResponders(
                            (j((t = {}), w.gcMessageNames.giftCardsReady, function () {
                              f.default.send("gift-cards-app:ready", {});
                            }),
                            j(
                              t,
                              w.gcMessageNames.extensionSendSDataEvent,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (n = t.eventName), (r = I(t, ["eventName"])), (e.next = 3), p.default.sendEvent(n, r);
                                            case 3:
                                              return e.abrupt("return", !0);
                                            case 4:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(t, w.gcMessageNames.extensionRemoveIFrame, ne),
                            j(t, w.gcMessageNames.extensionUpdateStyles, re),
                            j(t, w.gcMessageNames.extensionExperimentsGetVariant, function (e) {
                              return g.default.getVariant(e.variantName);
                            }),
                            j(t, w.gcMessageNames.extensionGetI18nMessage, function (e) {
                              return m.default.getMessage(e.messageName);
                            }),
                            j(t, w.gcMessageNames.extensionSetIFrameAttribute, function (e) {
                              return T.current.setAttribute(e.attributeName, e.value), !0;
                            }),
                            j(t, w.gcMessageNames.extensionRemoveIFrameAttribute, function (e) {
                              return T.current.removeAttribute(e.attributeName), !0;
                            }),
                            j(t, w.gcMessageNames.extensionSetGiftCardsEnabledForUser, function (e) {
                              return _.default.updateSetting("honeyWallet", e.enabled ? 1 : 0);
                            }),
                            j(t, w.gcMessageNames.extensionOpenLoginPrompt, function () {
                              return b.default.open({
                                pathname: "/gift-cards-auth",
                                query: {},
                                state: {},
                                force: !0,
                                feature: "gift-cards-auth",
                                surface: "popup"
                              });
                            }),
                            j(t, w.gcMessageNames.extensionHideContentUI, function () {
                              return b.default.hide();
                            }),
                            j(
                              t,
                              w.gcMessageNames.extensionGetCartPrice,
                              C(
                                regeneratorRuntime.mark(function e() {
                                  var t, n;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), S.default.getCurrent();
                                          case 2:
                                            return (t = e.sent), (e.next = 5), (0, O.getCartPrice)(t);
                                          case 5:
                                            return (n = e.sent), e.abrupt("return", n);
                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    i
                                  );
                                })
                              )
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionSetHoneyStorageItem,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (n = t.key), (r = t.value), (e.next = 3), v.default.local.set(n, r);
                                            case 3:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionGetHoneyStorageItem,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (e.next = 3),
                                                v.default.local.get(n).catch(function () {
                                                  return null;
                                                })
                                              );
                                            case 3:
                                              return (r = e.sent), e.abrupt("return", r);
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionRemoveHoneyStorageItem,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (e.next = 3),
                                                v.default.local.del(n).catch(function () {
                                                  return null;
                                                })
                                              );
                                            case 3:
                                              return (r = e.sent), e.abrupt("return", r);
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionSetWindowLocalStorageItem,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (r = t.value),
                                                (e.next = 3),
                                                f.default.send(
                                                  "honey-pay-now:action:local-storage",
                                                  { action: h.HONEY_PAY_NOW_MESSAGES.SET_LOCAL_STORAGE_ITEM, data: { key: n, value: r } },
                                                  { background: !0 }
                                                )
                                              );
                                            case 3:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionGetWindowLocalStorageItem,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (e.next = 3),
                                                f.default.send(
                                                  "honey-pay-now:action:local-storage",
                                                  { action: h.HONEY_PAY_NOW_MESSAGES.GET_LOCAL_STORAGE_ITEM, data: { key: n } },
                                                  { background: !0 }
                                                )
                                              );
                                            case 3:
                                              return (r = e.sent), e.abrupt("return", r);
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionRemoveWindowLocalStorageItem,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              return (
                                                (n = t.key),
                                                (e.next = 3),
                                                f.default.send(
                                                  "honey-pay-now:action:local-storage",
                                                  { action: h.HONEY_PAY_NOW_MESSAGES.REMOVE_LOCAL_STORAGE_ITEM, data: { key: n } },
                                                  { background: !0 }
                                                )
                                              );
                                            case 3:
                                              return (r = e.sent), e.abrupt("return", r);
                                            case 5:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionGQLQuery,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r, o;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (((n = t.requestData), !t.encrypted)) {
                                                e.next = 6;
                                                break;
                                              }
                                              return (e.next = 4), s(t.requestData);
                                            case 4:
                                              (r = e.sent), (n = JSON.parse(r));
                                            case 6:
                                              return (
                                                (e.next = 8),
                                                f.default.send(
                                                  "honey-pay-now:action:gql-query",
                                                  { action: h.HONEY_PAY_NOW_MESSAGES.GQL_QUERY, data: n },
                                                  { background: !0 }
                                                )
                                              );
                                            case 8:
                                              return (o = e.sent), e.abrupt("return", o);
                                            case 10:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionGQLMutation,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r, o;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              if (((n = t.requestData), !t.encrypted)) {
                                                e.next = 6;
                                                break;
                                              }
                                              return (e.next = 4), s(t.requestData);
                                            case 4:
                                              (r = e.sent), (n = JSON.parse(r));
                                            case 6:
                                              return (
                                                (e.next = 8),
                                                f.default.send(
                                                  "honey-pay-now:action:gql-query",
                                                  { action: h.HONEY_PAY_NOW_MESSAGES.GQL_MUTATION, data: n },
                                                  { background: !0 }
                                                )
                                              );
                                            case 8:
                                              return (o = e.sent), e.abrupt("return", o);
                                            case 10:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionAuth,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n, r, o, a;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              (n = t.authProvider),
                                                (r = t.isLoginMode),
                                                (o = t.isOptOut),
                                                (e.t0 = n),
                                                (e.next =
                                                  "google" === e.t0
                                                    ? 4
                                                    : "apple" === e.t0
                                                    ? 6
                                                    : "paypal" === e.t0
                                                    ? 8
                                                    : "facebook" === e.t0
                                                    ? 10
                                                    : (e.t0, 12));
                                              break;
                                            case 4:
                                              return r ? _.default.loginGoogle() : _.default.registerGoogle(o), e.abrupt("break", 14);
                                            case 6:
                                              return r ? _.default.loginApple() : _.default.registerApple(o), e.abrupt("break", 14);
                                            case 8:
                                              return r ? _.default.loginPaypal() : _.default.registerPaypal(o), e.abrupt("break", 14);
                                            case 10:
                                              return r ? _.default.loginFacebook() : _.default.registerFacebook(o), e.abrupt("break", 14);
                                            case 12:
                                              (a = r ? "login" : "join"), _.default.openEmailAuth(a, "ext", !1, !1);
                                            case 14:
                                              return e.abrupt("return", null);
                                            case 15:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionGetUserABGroup,
                              C(
                                regeneratorRuntime.mark(function e() {
                                  var t;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), _.default.getUserABGroup("auth");
                                          case 2:
                                            return (t = e.sent), e.abrupt("return", t);
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    i
                                  );
                                })
                              )
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionGetI18nCountryCode,
                              C(
                                regeneratorRuntime.mark(function e() {
                                  var t;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (t = m.default.getCountryCode()), e.abrupt("return", t);
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    i
                                  );
                                })
                              )
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionSetIsMinimized,
                              (function () {
                                var e = C(
                                  regeneratorRuntime.mark(function e(t) {
                                    var n = t.isMinimized,
                                      r = t.savings,
                                      o = t.goldAward,
                                      a = t.autoPopType;
                                    return regeneratorRuntime.wrap(
                                      function (e) {
                                        for (;;)
                                          switch ((e.prev = e.next)) {
                                            case 0:
                                              te(a), r && z(r), o && $(o), q(n);
                                            case 4:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e,
                                      i
                                    );
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            ),
                            j(
                              t,
                              w.gcMessageNames.extensionOpenGiftCardDealModal,
                              C(
                                regeneratorRuntime.mark(function e() {
                                  var t;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), S.default.getCurrent();
                                          case 2:
                                            (t = e.sent),
                                              S.default.tag(t.id, "extension_links", null, {
                                                forceHidden: !0,
                                                src: "GiftCardDealOpenModal"
                                              });
                                          case 4:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    i
                                  );
                                })
                              )
                            ),
                            t)
                          )),
                          (e.next = 7),
                          crypto.subtle.exportKey("jwk", A)
                        );
                      case 7:
                        return (
                          (n = e.sent),
                          (e.next = 10),
                          E.default.request(
                            w.gcMessageNames.giftCardsInit,
                            a({}, o, { jsonRequestKey: n, requestIV: [].concat(P(M)), parentOrigin: window.location.origin })
                          )
                        );
                      case 10:
                        (r = e.sent), (d.current = r);
                      case 12:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                this
              );
            })
          )),
          function () {
            return t.apply(this, arguments);
          }),
        o = e.data,
        d = (0, c.useRef)(!1),
        T = (0, c.useRef)(),
        k = (0, c.useRef)(function () {}),
        N = (0, c.useRef)(document.querySelector("body")),
        D = (0, c.useState)(null),
        L = i(D, 2),
        U = L[0],
        B = L[1],
        F = (0, c.useState)(!1),
        H = i(F, 2),
        G = H[0],
        q = H[1],
        Y = (0, c.useState)(null),
        W = i(Y, 2),
        V = W[0],
        z = W[1],
        X = (0, c.useState)(null),
        K = i(X, 2),
        J = K[0],
        $ = K[1],
        Q = (0, c.useState)(null),
        Z = i(Q, 2),
        ee = Z[0],
        te = Z[1];
      function ne() {
        k.current(), E.default.stopListening(), T.current.remove();
      }
      function re(e) {
        var t = e.visible,
          n = e.lockScrolling,
          r = e.bodyStyle,
          o = void 0 === r ? {} : r,
          i = e.iframeStyle,
          u = void 0 === i ? {} : i;
        return (
          Object.assign(N.current.style, a({ overflow: n ? "hidden" : "auto" }, o)),
          Object.assign(T.current.style, a({ visibility: t ? "visible" : "hidden" }, u)),
          !0
        );
      }
      (0, c.useEffect)(function () {
        C(
          regeneratorRuntime.mark(function e() {
            var t;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), y.default.getFeatureFlag("gift_cards_use_remote_iframe");
                    case 2:
                      (t = e.sent), B(t);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              n
            );
          })
        )();
      }, []),
        (0, c.useEffect)(function () {
          return function () {
            return ne();
          };
        }, []),
        (0, c.useEffect)(function () {
          var e,
            t =
              ((e = C(
                regeneratorRuntime.mark(function e(t) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  return regeneratorRuntime.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (e.t0 = n && n.action),
                              (e.next =
                                e.t0 === h.HONEY_PAY_NOW_MESSAGES.SET_PAY_NOW_MODAL_VISIBILITY
                                  ? 3
                                  : e.t0 === h.HONEY_PAY_NOW_MESSAGES.REMOVE_PAY_NOW_IFRAME
                                  ? 5
                                  : 7);
                            break;
                          case 3:
                            return re({ visible: n.data.isVisible, lockScrolling: n.data.isVisible }), e.abrupt("break", 8);
                          case 5:
                            return ne(), e.abrupt("break", 8);
                          case 7:
                            return e.abrupt("break", 8);
                          case 8:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              function (t) {
                return e.apply(this, arguments);
              });
          function n(e, t) {
            var n = t.user;
            E.default.request(w.gcMessageNames.giftCardsUserUpdate, n);
          }
          return (
            f.default.addListener("honey-pay-now:action:ui", t),
            f.default.addListener("user:current:update", n),
            function () {
              f.default.removeListener("honey-pay-now:action:ui", t), f.default.removeListener("user:current:update", n);
            }
          );
        }, []);
      return null === U
        ? null
        : l.default.createElement(
            c.Fragment,
            null,
            G &&
              l.default.createElement(x.default, {
                autoPopType: ee,
                handleUnMinimize: function () {
                  E.default.request(w.gcMessageNames.giftCardsSetIsMinimized, !1), q(!1, ee);
                },
                goldAward: J,
                savings: V
              }),
            l.default.createElement("iframe", {
              ref: T,
              id: "giftcardsIFrame",
              title: "Honey Pay Now",
              src: R,
              className: null,
              style: { visibility: "hidden" },
              onLoad: r,
              scrolling: "no"
            })
          );
    }
    (D.propTypes = { data: d.default.object }), (D.defaultProps = { data: {} }), (t.default = D);
  },
  3088: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(0),
      a = d(o),
      i = d(n(1)),
      u = n(2),
      s = n(3),
      c = n(154),
      l = d(n(4));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var f = {
        root: { display: "flex", position: "fixed", right: "0px", top: "80px", zIndex: 2147483647 },
        container: {
          backgroundColor: s.Colors.white,
          width: "280px",
          right: function (e) {
            return e.isExpanded ? "0px" : "-202px";
          },
          transition: "all 400ms ease-in-out",
          height: "56px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: "5px 0px 0px 5px",
          position: "relative",
          boxShadow: "0px 2px 35px rgba(0, 0, 0, 0.25)"
        },
        icon: { cursor: "pointer", width: "18px", height: "18px", marginLeft: "9px" },
        dotsContainer: { alignItems: "center", cursor: "move", display: "flex", height: "100%", paddingRight: "9px" },
        dots: {
          display: "flex",
          flexDirection: "column",
          height: "17px",
          width: "10px",
          justifyContent: "space-between",
          marginLeft: "16px"
        },
        dotRow: { width: "100%", display: "flex", justifyContent: "space-between" },
        dot: { height: "3px", width: "3px", display: "inline-block", borderRadius: "50%", backgroundColor: s.Colors.grey600 },
        content: {
          cursor: "pointer",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%"
        },
        savingsText: { marginLeft: "18px" },
        giftCardInfo: { fontSize: "12px" },
        title: { color: s.Colors.grey900, fontSize: "12px", fontWeight: "600" },
        savings: { color: s.Colors.green500, fontWeight: "700" },
        goldAward: { color: s.Colors.gold900, fontWeight: "700" },
        seeSavings: { color: s.Colors.grey800, composes: "link1" }
      },
      p = (0, u.createUseStyles)(f),
      v = function (e) {
        var t = e.handleUnMinimize,
          n = e.savings,
          i = e.goldAward,
          u = e.autoPopType,
          s = (0, o.useState)(!1),
          d = r(s, 2),
          f = d[0],
          v = d[1],
          h = p({ isExpanded: f }),
          g = (0, o.createRef)(),
          m = function (e) {
            return function () {
              v(e);
            };
          },
          y = function (e) {
            var t = (e.changedTouches && e.changedTouches[0].clientY) || e.clientY;
            (t < 0 || t > window.innerHeight - 56) && (t = t < 0 ? 0 : window.innerHeight - 56), (g.current.style.top = t + "px");
          };
        function _() {
          window.removeEventListener("mousemove", y), window.removeEventListener("mouseup", _);
        }
        var b = function () {
            return n && !i;
          },
          S = Number(i).toLocaleString(),
          O = "$" + i / 100,
          x = function () {
            return !n && i
              ? l.default.getMessageAndReplace("Get_GOLDINCURRENCY_GOLDPOINTS", {
                  GOLDINCURRENCY: a.default.createElement("span", { className: h.goldAward }, O),
                  GOLDPOINTS: a.default.createElement("span", null, S)
                })
              : b()
              ? l.default.getMessageAndReplace("Save_SAVINGS_with_a_gift_card", {
                  SAVINGS: a.default.createElement("span", { className: h.savings }, (0, c.formatDollars)(n))
                })
              : l.default.getMessageAndReplace("Save_SAVINGS_and_get_Gold", {
                  SAVINGS: a.default.createElement("span", { className: h.savings }, (0, c.formatDollars)(n))
                });
          };
        return a.default.createElement(
          "div",
          { ref: g, className: h.root },
          a.default.createElement(
            "div",
            { className: h.container },
            a.default.createElement(
              "div",
              {
                className: h.dotsContainer,
                onMouseDown: function () {
                  window.addEventListener("mousemove", y), window.addEventListener("mouseup", _);
                },
                onMouseUp: _,
                onTouchMove: y
              },
              a.default.createElement(
                "div",
                { className: h.dots },
                a.default.createElement(
                  "div",
                  { className: h.dotRow },
                  a.default.createElement("div", { className: h.dot }),
                  a.default.createElement("div", { className: h.dot })
                ),
                a.default.createElement(
                  "div",
                  { className: h.dotRow },
                  a.default.createElement("div", { className: h.dot }),
                  a.default.createElement("div", { className: h.dot })
                ),
                a.default.createElement(
                  "div",
                  { className: h.dotRow },
                  a.default.createElement("div", { className: h.dot }),
                  a.default.createElement("div", { className: h.dot })
                )
              )
            ),
            a.default.createElement(
              "div",
              { className: h.content, onClick: t, onMouseEnter: m(!0), onMouseLeave: m(!1) },
              a.default.createElement("img", {
                className: h.icon,
                src: "https://cdn.honey.io/images/finance/honey-icon-orange.svg",
                alt: "Open Honey"
              }),
              a.default.createElement(
                "div",
                { className: h.savingsText },
                "HOOK" === u
                  ? a.default.createElement(
                      o.Fragment,
                      null,
                      a.default.createElement("div", { className: h.title }, x()),
                      a.default.createElement(
                        "div",
                        { className: h.seeSavings },
                        b() ? l.default.getMessage("Click_to_see_savings") : l.default.getMessage("Click_to_see_Gift_Card_Deal")
                      )
                    )
                  : a.default.createElement("div", { className: h.giftCardInfo }, l.default.getMessage("Click_for_gift_card_info"))
              )
            )
          )
        );
      };
    (v.propTypes = {
      handleUnMinimize: i.default.func.isRequired,
      savings: i.default.number.isRequired,
      goldAward: i.default.number.isRequired,
      autoPopType: i.default.string.isRequired
    }),
      (t.default = v);
  },
  3093: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(1690),
      a = (r = o) && r.__esModule ? r : { default: r };
    t.default = {
      getExtensionID: function () {
        return a.default.getExtensionID();
      },
      connect: function (e, t) {
        return a.default.connect(e, t);
      },
      addOnConnectListener: function (e) {
        return a.default.addOnConnectListener(e);
      },
      removeOnConnnectListener: function (e) {
        return a.default.removeOnConnnectListener(e);
      }
    };
  },
  3094: function (e, t, n) {
    "use strict";
    n(3095);
  },
  3095: function (e, t, n) {
    "use strict";
    var r,
      o,
      a = c(n(122)),
      i = c(n(3096)),
      u = c(n(3182)),
      s = c(n(3184));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    ((r = regeneratorRuntime.mark(function e() {
      var t, n, r, o, c, l, d, f;
      return regeneratorRuntime.wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), a.default.dispatch((0, s.default)());
              case 2:
                (t = i.default.pageDetectionListener),
                  (n = i.default.v4FetcherListener),
                  (r = i.default.v5FetcherListener),
                  (o = i.default.userListener),
                  (c = i.default.genericFetcherListener),
                  (l = i.default.productCouponsListener),
                  (d = i.default.uiActionsListener),
                  (f = i.default.optimusProductListener),
                  t(),
                  n(),
                  r(),
                  o(),
                  c(),
                  l(),
                  d(),
                  (0, u.default)(),
                  f();
              case 12:
              case "end":
                return e.stop();
            }
        },
        e,
        void 0
      );
    })),
    (o = function () {
      var e = r.apply(this, arguments);
      return new Promise(function (t, n) {
        return (function r(o, a) {
          try {
            var i = e[o](a),
              u = i.value;
          } catch (e) {
            return void n(e);
          }
          if (!i.done)
            return Promise.resolve(u).then(
              function (e) {
                r("next", e);
              },
              function (e) {
                r("throw", e);
              }
            );
          t(u);
        })("next");
      });
    }),
    function () {
      return o.apply(this, arguments);
    })();
  },
  3096: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = d(n(3097)),
      o = d(n(3170)),
      a = d(n(3172)),
      i = d(n(3173)),
      u = d(n(3175)),
      s = d(n(3177)),
      c = d(n(3179)),
      l = d(n(3180));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = {
      pageDetectionListener: r.default,
      v4FetcherListener: o.default,
      v5FetcherListener: a.default,
      userListener: i.default,
      genericFetcherListener: u.default,
      productCouponsListener: s.default,
      uiActionsListener: c.default,
      optimusProductListener: l.default
    };
  },
  3097: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(122)),
      o = u(n(12)),
      a = n(144),
      i = u(n(3098));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      a.PAGE_TYPES.map(function (e) {
        return o.default.addListener("pageDetected:" + e, function (t) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = n.data,
            a = "GENERIC" === o;
          r.default.dispatch((0, i.default)({ pageType: e, isGeneric: a }));
        });
      });
    };
  },
  3098: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = h(n(15)),
      o = h(n(1567)),
      a = n(42),
      i = n(1957),
      u = n(1960),
      s = h(n(1571)),
      c = n(3168),
      l = h(n(813)),
      d = h(n(1967)),
      f = n(1968),
      p = h(n(1572)),
      v = h(n(1969));
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      var t,
        n,
        h = e.pageType,
        g = e.isGeneric;
      return (
        (t = regeneratorRuntime.mark(function e(t, n) {
          var m, y, _, b, S, O, x, w, E, T, P, j, I, C, R;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      (t((0, i.cancelHideTipsAfterTimeout)()),
                      (m = a.pageSelectors.selectMostRecentPageId()(n())),
                      t(a.pageActions.addPageType({ pageType: h, pageId: m })),
                      t(a.pageActions.setIsGeneric({ isGeneric: g, pageId: m })),
                      (y = a.pageSelectors.selectPageTypesByPageId(m)(n()) || []),
                      (_ = y.some(f.isHomePageType)),
                      (b = y.some(f.isProductPageType)),
                      !_ && !b)
                    ) {
                      e.next = 10;
                      break;
                    }
                    return (e.next = 10), t((0, d.default)());
                  case 10:
                    if (
                      ((S = o.default.selectCanRunTips(n())),
                      (O = S.canRunTips),
                      (x = S.hideReasons),
                      (w = S.disabledByUserReason),
                      (E = S.suppressionReason),
                      t((0, c.sendTipsVisibilitySdata)({ canRunTips: O, hideReasons: x, disabledByUserReason: w, suppressionReason: E })),
                      O)
                    ) {
                      e.next = 18;
                      break;
                    }
                    return (
                      t(a.pageActions.updateCurrentPage()),
                      (T = (x || []).join(", ")),
                      r.default.debug("honeyTips:events:cantRunTips reasons: " + T),
                      (0, u.unmountApp)(),
                      e.abrupt("return")
                    );
                  case 18:
                    if (
                      ((P = a.pageSelectors.selectCurrentPageId()(n())),
                      (j = a.pageSelectors.selectPendingPageId()(n())),
                      (I = a.pageSelectors.selectPageTypesByPageId(P)(n()) || []),
                      (C = I.some(f.isProductPageType)),
                      (R = (b && (!C || !j)) || _),
                      (e.t0 = R),
                      !e.t0)
                    ) {
                      e.next = 27;
                      break;
                    }
                    return (e.next = 27), t(a.pageActions.updateCurrentPage());
                  case 27:
                    if ((0, u.hasCurrentContainerState)()) {
                      e.next = 33;
                      break;
                    }
                    return (0, p.default)(n()) || t((0, s.default)()), (0, u.mountApp)(), (e.next = 32), t((0, v.default)(_));
                  case 32:
                    _ && t((0, l.default)());
                  case 33:
                    t((0, i.hideTipsAfterTimeout)());
                  case 34:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
    };
  },
  3099: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.selectShouldSuppressTips = t.selectTipsEnabledByUser = t.selectStoreLevelSuppressionExpirationDate = void 0);
    var r = n(132),
      o = n(10),
      a = n(29),
      i = n(1955),
      u = n(1956),
      s = (t.selectStoreLevelSuppressionExpirationDate = function (e) {
        return function (t) {
          if (!e) return null;
          var n = (0, u.getStoreKey)(e);
          return r.deviceSelectors.selectDeviceSetting(n)(t);
        };
      }),
      c = (t.selectTipsEnabledByUser = function (e) {
        var t = a.userSelectors.selectUser()(e);
        if (!t || !t.isLoggedIn)
          return r.deviceSelectors.selectDeviceSetting("tipsLoggedOutDisabled")(e)
            ? { tipsEnabledByUser: !1, reason: "tips_logged_out_disabled" }
            : { tipsEnabledByUser: !0 };
        var n = a.userSelectors.selectSetting("tipsEnabled"),
          o = !!n,
          i = void 0;
        return o || (i = void 0 === n ? "tips_enabled_undefined" : "tips_enabled_false"), { tipsEnabledByUser: o, reason: i };
      });
    t.selectShouldSuppressTips = function (e) {
      var t = (o.storesSelectors.selectCurrentStore()(e) || {}).id,
        n = Date.now(),
        a = s(t)(e),
        u = a && n < a,
        l = n < (r.deviceSelectors.selectDeviceSetting(i.LOGGED_OUT_SUPPRESSION_KEY)(e) || !1),
        d = n < (r.deviceSelectors.selectDeviceSetting(i.SNOOZE_ALL_TEMPORARY)(e) || !1),
        f = c(e),
        p = f.tipsEnabledByUser,
        v = f.reason;
      return {
        suppressed: u || l || d || !p,
        reason: d ? "snoozed_for_day" : u ? "snoozed_for_store" : l ? "snoozed_for_all" : p ? "" : v
      };
    };
  },
  3100: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(11),
      a = s(n(811)),
      i = s(n(3101)),
      u = s(n(766));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (0, o.createSelector)(
      function (e) {
        return (0, u.default)()(e);
      },
      function (e) {
        return (0, a.default)(e);
      },
      function (e) {
        return (0, i.default)(e);
      },
      function (e, t, n) {
        return r({}, e, { badgeLocationCurrent: t, isCurrentUserNew: n });
      }
    );
    t.default = c;
  },
  3101: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11),
      o = n(132),
      a = n(29),
      i = n(144),
      u = (0, r.createSelector)(
        function (e) {
          return a.userSelectors.selectUser()(e);
        },
        function (e) {
          return o.deviceSelectors.selectDeviceSetting(i.DEVICE_SETTINGS.TIPS_BUCKET_DATE)(e);
        },
        function (e, t) {
          var n = e && e.isLoggedIn ? e.created : t,
            r = parseInt(n, 10);
          if (!Number.isNaN(r)) return Date.now() < r + 2592e6;
        }
      );
    t.default = u;
  },
  3102: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = m(r),
      a = n(6),
      i = m(n(15)),
      u = n(42),
      s = m(n(3103)),
      c = m(n(3139)),
      l = m(n(3162)),
      d = n(3163),
      f = m(d),
      p = m(n(1569)),
      v = n(144),
      h = n(1958),
      g = m(n(3164));
    function m(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      (0, g.default)();
      var e = (0, r.useCallback)(u.pageSelectors.selectIsCurrentPageLaunchpad(), []),
        t = (0, a.useSelector)(e),
        n = (0, a.useSelector)(f.default),
        m = (0, a.useSelector)(u.pageSelectors.selectHasTipsTimedOut);
      return t && !n
        ? (i.default.debug(
            "honeyTips:container: No valid tip categories for launchpad (" +
              []
                .concat(
                  (function (e) {
                    if (Array.isArray(e)) {
                      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                      return n;
                    }
                    return Array.from(e);
                  })(d.VALID_LAUNCHPAD_TIPS)
                )
                .join(", ") +
              ") found. Not showing badge or container"
          ),
          null)
        : m
        ? (i.default.debug("honeyTips:container: Tips timed out after " + h.WAIT_FOR_TIPS_TIMEOUT + "ms. Not showing badge or container"),
          null)
        : o.default.createElement(
            p.default,
            { sdataAction: v.TIPS_BADGE_EVENT_ERRORS.BADGE_INJECTION_ERROR },
            o.default.createElement(
              l.default,
              null,
              o.default.createElement("slot", null, o.default.createElement(c.default, null), o.default.createElement(s.default, null))
            )
          );
    };
  },
  3103: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = N(r),
      a = n(6),
      i = n(72),
      u = N(n(1768)),
      s = N(n(1777)),
      c = n(470),
      l = N(n(1568)),
      d = n(26),
      f = N(n(3104)),
      p = N(n(3105)),
      v = N(n(1961)),
      h = N(n(56)),
      g = N(n(3110)),
      m = N(n(120)),
      y = N(n(3118)),
      _ = N(n(1855)),
      b = N(n(3119)),
      S = N(n(3120)),
      O = N(n(688)),
      x = N(n(3124)),
      w = N(n(1569)),
      E = N(n(770)),
      T = n(144),
      P = N(n(3125)),
      j = N(n(3126)),
      I = n(3132),
      C = N(n(3135)),
      R = N(n(3136)),
      k = n(685),
      A = N(n(314)),
      M = N(n(3137));
    function N(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, a.useSelector)(h.default) || {},
        t = e.open,
        n = e.scrollToCategoryId,
        N = e.showLoader,
        D = (0, a.useSelector)(k.selectCondensedTipFirst) || [],
        L = (0, a.useSelector)(O.default),
        U = (0, a.useSelector)(l.default),
        B = (0, a.useSelector)(k.selectCondensedLaunchpadEligible),
        F = (0, A.default)(),
        H = (0, E.default)(),
        G = (0, r.useRef)(),
        q = (0, P.default)({ containerRef: G }).top,
        Y = (0, R.default)(),
        W = Y.handleMouseOver,
        V = Y.handleMouseLeave,
        z = (0, C.default)(),
        X = (0, a.useSelector)(d.tipsSelectors.selectCondensedLaunchpadSeeMoreClicked),
        K = (0, r.useMemo)(
          function () {
            return L && U ? [U] : D;
          },
          [D, U, L]
        ),
        J = (0, y.default)(),
        $ = J.addTipCategoryRef,
        Q = J.scrollToCategory,
        Z = (0, r.useMemo)(
          function () {
            return { scrollToCategory: Q };
          },
          [Q]
        );
      (0, r.useEffect)(
        function () {
          var e = void 0;
          return (
            t &&
              n &&
              Q &&
              (e = setTimeout(function () {
                return Q(n);
              }, 500)),
            function () {
              return clearTimeout(e);
            }
          );
        },
        [t, Q, n]
      );
      var ee =
          !N &&
          K.map(function (e, t) {
            var n = e.id,
              r = e.categoryId;
            return o.default.createElement(
              j.default,
              { key: n, tipId: n },
              o.default.createElement(
                b.default,
                {
                  ref: function (e) {
                    return $(r, e);
                  },
                  isLastTip: t === K.length - 1
                },
                o.default.createElement(
                  w.default,
                  { sdataAction: T.TIPS_BADGE_EVENT_ERRORS.TIP_CARD_ERROR },
                  o.default.createElement(m.default, { tipId: n, templateType: "card", isSecondary: t > 0 })
                )
              )
            );
          }),
        te = o.default.createElement(c.Header, {
          leftContainer: o.default.createElement(u.default, null),
          rightContainer: o.default.createElement(v.default, null),
          style: z.header
        }),
        ne = !!H && o.default.createElement(S.default, null),
        re = (N || !K.length) && o.default.createElement(I.ContainerLoader, null),
        oe = o.default.createElement(
          _.default.Provider,
          { value: Z },
          o.default.createElement(
            f.default,
            { ref: G, top: q, onMouseOver: W, onMouseLeave: V },
            o.default.createElement(M.default, { autoClose: 4e3 }, ee, re)
          )
        ),
        ae = o.default.createElement(
          _.default.Provider,
          { value: Z },
          o.default.createElement(
            f.default,
            { ref: G, top: q, onMouseOver: W, onMouseLeave: V },
            o.default.createElement(
              s.default,
              null,
              o.default.createElement(
                i.UniversalContainerLayout,
                { header: te, footer: ne, styles: z.container },
                o.default.createElement(p.default, null),
                o.default.createElement(x.default, null),
                ee,
                re,
                o.default.createElement(g.default, null)
              )
            )
          )
        );
      if (F && B) return oe;
      var ie = ae;
      return B && (ie = X ? ae : oe), t ? ie : null;
    };
  },
  3104: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = a(n(0)),
      o = a(n(1));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i = (0, n(2).createUseStyles)({
        layout: {
          position: "fixed",
          top: function (e) {
            return e.top;
          },
          right: 16,
          zIndex: 2147483647
        }
      }),
      u = r.default.forwardRef(function (e, t) {
        var n = e.children,
          o = e.top,
          a = e.onMouseOver,
          u = e.onMouseLeave,
          s = i({ top: o });
        return r.default.createElement("div", { className: s.layout, ref: t, onMouseOver: a, onMouseLeave: u }, n);
      });
    (u.propTypes = { children: o.default.node, top: o.default.number, onMouseOver: o.default.func, onMouseLeave: o.default.func }),
      (u.defaultProps = { children: void 0, top: 16, onMouseOver: function () {}, onMouseLeave: function () {} }),
      (t.default = u);
  },
  3105: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(0)),
      o = n(6),
      a = n(3),
      i = n(26),
      u = s(n(56));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, o.useDispatch)(),
        t = (0, o.useSelector)(u.default) || {},
        n = t.id,
        s = t.notificationBanner,
        c = void 0 === s ? {} : s,
        l = c.showBanner,
        d = void 0 !== l && l,
        f = c.copy,
        p = c.color,
        v = c.ctaAction,
        h = c.ctaCopy;
      return r.default.createElement(a.NotificationBanner, {
        show: d,
        copy: f,
        color: p,
        ctaAction: v,
        ctaCopy: h,
        src: "UniversalContainer",
        short: !0,
        stackAbove: !0,
        zIndex: 3,
        onClose: function () {
          return e(i.tipsActions.resetNotificationBanner({ containerId: n }));
        }
      });
    };
  },
  3106: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = c(r),
      a = c(n(1)),
      i = n(3),
      u = n(2),
      s = c(n(1474));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var l = (0, u.createUseStyles)({
        settingButton: {
          alignItems: "center",
          background: "none",
          border: "none",
          borderRadius: "3px",
          cursor: "pointer",
          display: "flex",
          height: "32px",
          justifyContent: "center",
          transition: "0.2s",
          width: "32px",
          "&:hover": { backgroundColor: i.Colors.black03 },
          "&:active": { backgroundColor: i.Colors.black08 }
        }
      }),
      d = function (e) {
        var t = e.open,
          n = e.onClick,
          a = e.options,
          u = e.customSize,
          c = e.customColor,
          d = l({ customSize: u });
        return o.default.createElement(
          r.Fragment,
          null,
          o.default.createElement(i.Button, {
            "aria-expanded": t,
            "aria-label": "Honey Settings",
            buttonType: "unstyled",
            className: d.settingButton,
            copy: o.default.createElement(i.Icon, { color: c || i.Colors.grey600, size: u, name: "setting", type: "stroke" }),
            onClick: n
          }),
          t &&
            o.default.createElement(s.default, {
              expanded: t,
              classes: {
                main: {
                  alignSelf: "end",
                  whiteSpace: "nowrap",
                  marginTop: "40px",
                  right: "47px",
                  width: "unset",
                  position: "absolute",
                  top: "0px"
                }
              },
              options: a
            })
        );
      };
    (d.propTypes = {
      onClick: a.default.func,
      options: a.default.array,
      open: a.default.bool,
      customSize: a.default.number,
      customColor: a.default.string
    }),
      (d.defaultProps = { onClick: null, open: !1, options: [], customSize: null, customColor: null }),
      (t.default = d);
  },
  3107: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(0)),
      o = s(n(1)),
      a = n(3),
      i = n(2),
      u = s(n(4));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (0, i.createUseStyles)({ closeButton: { height: "32px", marginRight: "-8px", position: "initial", width: "32px" } }),
      l = function (e) {
        var t = e.onClick,
          n = c();
        return r.default.createElement(a.CloseButton, {
          "aria-label": u.default.getMessage("Close_Honey"),
          className: n.closeButton,
          onClick: t
        });
      };
    (l.propTypes = { onClick: o.default.func }), (l.defaultProps = { onClick: null }), (t.default = l);
  },
  3108: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.suppressAllTipsForLoggedOut = t.suppressAllTips = t.suppressStore = void 0);
    var r,
      o = n(32),
      a = (r = o) && r.__esModule ? r : { default: r },
      i = n(132),
      u = n(29),
      s = n(1956),
      c = n(1955);
    function l(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    function d(e) {
      var t = (0, s.convertDaysToExpirationDateInMs)(e);
      (0, a.default)().add(1, "minute").unix();
      return t;
    }
    (t.suppressStore = function (e) {
      var t,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30;
      return (
        (t = l(
          regeneratorRuntime.mark(function t(r) {
            var o, a;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (e) {
                        t.next = 2;
                        break;
                      }
                      return t.abrupt("return", null);
                    case 2:
                      return (
                        (o = (0, s.getStoreKey)(e)),
                        (a = d(n)),
                        t.abrupt("return", r(i.deviceActions.updateDeviceSetting({ key: o, value: a })))
                      );
                    case 5:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e) {
          return t.apply(this, arguments);
        }
      );
    }),
      (t.suppressAllTips = function (e) {
        return (
          (t = l(
            regeneratorRuntime.mark(function t(n) {
              var r;
              return regeneratorRuntime.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return", null);
                      case 2:
                        return (
                          (r = d(e)), t.abrupt("return", n(i.deviceActions.updateDeviceSetting({ key: c.SNOOZE_ALL_TEMPORARY, value: r })))
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                void 0
              );
            })
          )),
          function (e) {
            return t.apply(this, arguments);
          }
        );
        var t;
      }),
      (t.suppressAllTipsForLoggedOut = function () {
        var e,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 30;
        return (
          (e = l(
            regeneratorRuntime.mark(function e(n, r) {
              var o, a, s;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (((o = u.userSelectors.selectUser()(r())), (a = !o || !o.isLoggedIn), (s = d(t)), !a)) {
                          e.next = 7;
                          break;
                        }
                        return e.abrupt("return", n(i.deviceActions.updateDeviceSetting({ key: c.LOGGED_OUT_SUPPRESSION_KEY, value: s })));
                      case 7:
                        return e.abrupt("return", n(u.userActions.updateSetting("tipsEnabled", 0)));
                      case 8:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          )),
          function (t, n) {
            return e.apply(this, arguments);
          }
        );
      });
  },
  3109: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(29),
      o = n(62);
    t.default = function (e) {
      var t = r.userSelectors.selectUser()(e).isInternalUser,
        n = (0, o.selectCurrentScrapedProduct)(e);
      return !(!t || !n);
    };
  },
  3110: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = g(r),
      a = n(6),
      i = g(n(1775)),
      u = g(n(3111)),
      s = g(n(3112)),
      c = g(n(3113)),
      l = g(n(3117)),
      d = g(n(120)),
      f = n(218),
      p = g(f),
      v = g(n(1569)),
      h = n(144);
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var m = function () {
      var e = (0, a.useSelector)(s.default),
        t = (0, a.useSelector)(l.default);
      return o.default.createElement(
        o.default.Fragment,
        null,
        t && o.default.createElement(d.default, { tipId: t, templateType: "bottomSheet" }),
        e && o.default.createElement(c.default, null)
      );
    };
    t.default = function () {
      var e = (0, a.useDispatch)(),
        t = (0, a.useSelector)(u.default),
        n = (0, r.useCallback)(
          function () {
            e((0, p.default)());
          },
          [e]
        ),
        s = (0, r.useCallback)(
          function () {
            t || e((0, f.resetBottomSheet)());
          },
          [e, t]
        );
      return o.default.createElement(
        v.default,
        { sdataAction: h.TIPS_BADGE_EVENT_ERRORS.TIP_CARD_ERROR },
        o.default.createElement(
          i.default,
          { id: "bottom-sheet-1", open: t, onClose: n, onTransitionEnd: s },
          o.default.createElement(m, null)
        )
      );
    };
  },
  3111: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(56),
      i = (r = a) && r.__esModule ? r : { default: r };
    var u = (0, o.createSelector)(i.default, function (e) {
      return !!(e && e.bottomSheet && e.bottomSheet.isOpen);
    });
    t.default = u;
  },
  3112: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(56),
      i = (r = a) && r.__esModule ? r : { default: r };
    var u = (0, o.createSelector)(i.default, function (e) {
      return !!(e && e.feedbackForm && e.feedbackForm.open);
    });
    t.default = u;
  },
  3113: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = _(r),
      a = n(6),
      i = n(3),
      u = _(n(4)),
      s = n(26),
      c = n(42),
      l = _(n(214)),
      d = _(n(215)),
      f = _(n(471)),
      p = _(n(216)),
      v = _(n(1880)),
      h = n(686),
      g = _(n(3114)),
      m = _(n(56)),
      y = _(n(218));
    function _(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, a.useDispatch)(),
        t = (0, a.useSelector)(c.pageSelectors.selectIsCurrentPageLaunchpad()),
        n = (0, a.useSelector)(m.default),
        _ = n.id,
        b = n.feedbackForm,
        S = void 0 === b ? {} : b,
        O = S.feedbackComment,
        x = S.feedbackOption,
        w = S.feedbackStatus,
        E = S.feedbackValidation,
        T = (0, r.useCallback)(
          function (t) {
            e(s.tipsActions.setFeedbackFormComment({ containerId: _, feedbackComment: t })),
              e(s.tipsActions.setFeedbackFormStatus({ containerId: _, feedbackStatus: "" }));
          },
          [e, _]
        ),
        P = (0, r.useCallback)(
          function (t) {
            e(s.tipsActions.setFeedbackFormOption({ containerId: _, feedbackOption: t })),
              e(s.tipsActions.setFeedbackFormStatus({ containerId: _, feedbackStatus: "" }));
          },
          [e, _]
        ),
        j = (0, r.useCallback)(
          function () {
            e(g.default);
          },
          [e]
        ),
        I = (0, r.useCallback)(
          function () {
            e((0, y.default)());
          },
          [e]
        ),
        C = h.BUTTON_COPY_STATUS[w] || u.default.getMessage("Send"),
        R = h.BUTTON_STATUS[w] || "",
        k = (0, v.default)(t).map(function (e) {
          var t = e.value,
            n = e.copy;
          return o.default.createElement(i.RadioButton, { key: "".concat("radio-", t), value: t, copy: n });
        }),
        A = "failed" === w,
        M = o.default.createElement(d.default, {
          onClose: I,
          closeButtonCopy: u.default.getMessage("Close"),
          title: u.default.getMessage("What_are_your_thoughts_Q")
        }),
        N = o.default.createElement(f.default, { ctaCopy: C, ctaStatus: R, ctaType: "primary", handleCta: j });
      return o.default.createElement(
        p.default,
        { header: M, footer: N },
        A &&
          o.default.createElement(
            l.default,
            { component: "div", variant: "body2", style: { color: i.Colors.red600, marginBottom: "8px" } },
            E
          ),
        o.default.createElement(i.RadioGroup, { onChange: P, group: "paymentAmount", selectedValue: x }, k),
        o.default.createElement(
          "div",
          { style: { marginTop: "14px" } },
          o.default.createElement(i.FormInput, {
            size: 88,
            id: "forminput",
            label: u.default.getMessage("Comments_or_suggestions"),
            value: O,
            onChange: T
          })
        )
      );
    };
  },
  3114: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = c(n(4)),
      o = n(26),
      a = c(n(3115)),
      i = c(n(56)),
      u = c(n(3116)),
      s = n(686);
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e, t) {
      var n = (0, i.default)(t()),
        c = n.id,
        l = n.feedbackForm,
        d = void 0 === l ? {} : l,
        f = (0, u.default)(t()),
        p = (o.tipsSelectors.selectTipById(f)(t()) || {}).categoryId,
        v = d.feedbackComment,
        h = d.feedbackOption;
      if (
        h ||
        (e(
          o.tipsActions.setFeedbackFormValidation({ containerId: c, feedbackValidation: r.default.getMessage("Please_select_an_option") })
        ),
        e(o.tipsActions.setFeedbackFormStatus({ containerId: c, feedbackStatus: "failed" })),
        0)
      )
        try {
          e((0, a.default)({ tipId: f, feedbackComment: v, feedbackOption: h })),
            e(
              o.tipsActions.setFeedbackThumbsState({
                containerId: c,
                feedbackThumbsState: s.FEEDBACK_STATE.negativeFormSubmitted,
                categoryId: p
              })
            ),
            e(o.tipsActions.setFeedbackFormStatus({ containerId: c, feedbackStatus: "success" }));
        } catch (t) {
          e(o.tipsActions.setFeedbackFormStatus({ containerId: c, feedbackStatus: "failed" }));
        }
    };
  },
  3115: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(198);
    t.default = function (e) {
      var t = e.tipId,
        n = void 0 === t ? "" : t,
        o = e.feedbackOption,
        a = e.feedbackComment;
      return function (e) {
        var t = {
          action: "feedback_detail",
          event: "action",
          feedbackOption: o,
          feedbackComment: a,
          feedback: "thumbs_down_detail",
          tipId: n
        };
        e((0, r.sdataTipsTipEvent)(t));
      };
    };
  },
  3116: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(56),
      i = (r = a) && r.__esModule ? r : { default: r };
    var u = (0, o.createSelector)(i.default, function (e) {
      return e && e.bottomSheet && e.bottomSheet.tipId;
    });
    t.default = u;
  },
  3117: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(56),
      i = (r = a) && r.__esModule ? r : { default: r };
    var u = (0, o.createSelector)(i.default, function (e) {
      return e && e.bottomSheet && e.bottomSheet.tipId;
    });
    t.default = u;
  },
  3118: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(0),
      a = n(15),
      i = (r = a) && r.__esModule ? r : { default: r };
    var u = { behavior: "smooth", block: "center" };
    t.default = function () {
      var e = (0, o.useRef)({ tipsRefs: {} }),
        t = (0, o.useCallback)(function (t, n) {
          e.current.tipsRefs[t] = n;
        }, []),
        n = (0, o.useCallback)(function (t) {
          var n = e.current.tipsRefs[t];
          n
            ? n.scrollIntoView(u)
            : i.default.debug("honeyTips:hooks:useScrollToCategory: scrollToCategory: Category '" + t + "' not found.");
        }, []);
      return (0, o.useMemo)(
        function () {
          return { addTipCategoryRef: t, scrollToCategory: n };
        },
        [t, n]
      );
    };
  },
  3119: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(0)),
      o = u(n(1)),
      a = n(2),
      i = u(n(770));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
        layout: function (e) {
          var t = e.footer,
            n = e.isLastTip;
          return { marginBottom: t && n ? "1px" : "8px" };
        }
      }),
      c = r.default.forwardRef(function (e, t) {
        var n = e.children,
          o = e.isLastTip,
          a = (0, i.default)(),
          u = s({ footer: a, isLastTip: o });
        return r.default.createElement("div", { className: u.layout, ref: t }, n);
      });
    (c.propTypes = { children: o.default.node, isLastTip: o.default.bool }),
      (c.defaultProps = { children: void 0, isLastTip: !1 }),
      (t.default = c);
  },
  3120: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = c(n(0)),
      o = c(n(1477)),
      a = c(n(3121)),
      i = c(n(3122)),
      u = n(770),
      s = c(u);
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      switch ((0, s.default)()) {
        case u.CONTAINER_FOOTER_TYPES.POWERED_BY:
          return r.default.createElement(o.default, null);
        case u.CONTAINER_FOOTER_TYPES.SEE_MORE_TIPS:
          return r.default.createElement(a.default, null);
        case u.CONTAINER_FOOTER_TYPES.SEE_DEAL_SUMMARY:
          return r.default.createElement(i.default, null);
        default:
          return null;
      }
    };
  },
  3121: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(0)),
      o = n(6),
      a = s(n(1760)),
      i = s(n(4)),
      u = s(n(1962));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, o.useDispatch)();
      return r.default.createElement(a.default, {
        body: i.default.getMessage("View_More_Tips"),
        "aria-label": i.default.getMessage("View_More_Tips"),
        onClick: function () {
          e((0, u.default)());
        }
      });
    };
  },
  3122: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(0)),
      o = n(6),
      a = s(n(3123)),
      i = s(n(4)),
      u = s(n(1962));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, o.useDispatch)(),
        t = i.default.getMessage("See_Deal_Summary");
      return r.default.createElement(a.default, {
        text: t,
        "aria-label": t,
        icon: "right-line-16",
        onClick: function () {
          e((0, u.default)());
        }
      });
    };
  },
  3123: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = t.NavigationButton = void 0);
    var r = u(n(0)),
      o = u(n(1)),
      a = n(2),
      i = u(n(55));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function s() {
      return (s =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function c(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
      }
      return o;
    }
    function l(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function d(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? l(Object(n), !0).forEach(function (t) {
              f(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : l(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function f(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var p = (0, a.createUseStyles)({
        root: function (e) {
          var t = e.background,
            n = e.classes;
          return d(
            {
              height: "48px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              border: "none",
              width: "100%",
              textAlign: "center",
              padding: "10px",
              flexDirection: "row"
            },
            (void 0 === n ? {} : n).root || {},
            { background: t }
          );
        },
        text: function (e) {
          var t = e.classes;
          return d({ composes: "title1", paddingRight: 6 }, (void 0 === t ? {} : t).text || {}, { verticalAlign: "middle" });
        }
      }),
      v = function (e) {
        var t,
          n = e.text,
          o = (e.classes, e.icon),
          a = e.children,
          u = c(e, ["text", "classes", "icon", "children"]),
          l = p(e);
        t = a
          ? "string" == typeof a
            ? r.default.createElement("div", { className: l.text }, " ", a, " ")
            : a
          : "string" == typeof n
          ? r.default.createElement("div", { className: l.text }, " ", n, " ")
          : n;
        var d = "string" == typeof o ? r.default.createElement(i.default, { icon: o }) : o;
        return r.default.createElement(
          "button",
          s({ tabIndex: 0, "aria-label": "honey-tips-navigation-button", className: l.root }, u),
          t,
          d
        );
      };
    (t.NavigationButton = v),
      (v.propTypes = {
        text: o.default.oneOfType([o.default.string, o.default.node]),
        icon: o.default.oneOfType([o.default.string, o.default.node]),
        background: o.default.string,
        classes: o.default.object,
        children: o.default.oneOfType([o.default.string, o.default.node])
      }),
      (v.defaultProps = { text: null, icon: null, background: "white", classes: {}, children: null });
    var h = v;
    t.default = h;
  },
  3124: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = f(r),
      a = n(6),
      i = f(n(24)),
      u = n(796),
      s = f(n(1522)),
      c = n(29),
      l = n(42),
      d = n(10);
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e,
        t,
        n = (0, a.useDispatch)(),
        f = (0, a.useSelector)(c.userSelectors.selectUser()),
        p = (0, a.useSelector)(d.storesSelectors.selectCurrentStore()),
        v = (0, a.useSelector)(c.userSelectors.selectUserFollowsCurrentStore),
        h = (0, a.useSelector)(c.userSelectors.selectSessionCountForCurrentStore),
        g = (0, a.useSelector)(l.pageSelectors.selectIsCurrentPageLaunchpad()),
        m = (0, r.useCallback)(
          ((e = regeneratorRuntime.mark(function e(t) {
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      (f && f.isLoggedIn) || i.default.openEmailAuth("login", "launchpad-ext", !0), n(c.userActions.updateUserFollow(t));
                    case 2:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })),
          (t = function () {
            var t = e.apply(this, arguments);
            return new Promise(function (e, n) {
              return (function r(o, a) {
                try {
                  var i = t[o](a),
                    u = i.value;
                } catch (e) {
                  return void n(e);
                }
                if (!i.done)
                  return Promise.resolve(u).then(
                    function (e) {
                      r("next", e);
                    },
                    function (e) {
                      r("throw", e);
                    }
                  );
                e(u);
              })("next");
            });
          }),
          function (e) {
            return t.apply(this, arguments);
          }),
          [n, f]
        );
      return g && p && f
        ? o.default.createElement(u.StoreFollowUI, {
            inPopover: !1,
            store: p,
            storeFollowButton: o.default.createElement(
              "div",
              null,
              o.default.createElement(s.default, {
                allowTooltip: !1,
                isFollowing: v,
                isHeaderButton: !0,
                store: { storeId: p.id, storeName: p.name },
                storeSessionCount: h,
                subSrc: "launchpad",
                updateUserFollow: m,
                user: f
              })
            )
          })
        : null;
    };
  },
  3125: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(0),
      a = n(6),
      i = f(n(1873)),
      u = n(335),
      s = n(144),
      c = f(n(811)),
      l = f(n(56)),
      d = f(n(314));
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var p = function (e) {
      var t = e.badgeTop,
        n = e.badgeHeight,
        r = e.containerRef;
      if (e.isAutopop) return 15;
      var o,
        a,
        i = ((o = r) && o.current && o.current.offsetHeight) || 0,
        u = (a = { badgeTop: t, badgeHeight: n }).badgeTop + a.badgeHeight / 2 < window.innerHeight / 2 ? t + n + 15 : t - 15 - i;
      return (
        u -
        (function (e) {
          var t = e.containerTop,
            n = e.containerHeight;
          if (t < 15) return t - 15;
          var r = window.innerHeight - 15,
            o = t + n;
          return o > r ? o - r : 0;
        })({ containerTop: u, containerHeight: i })
      );
    };
    t.default = function (e) {
      var t = e.containerRef,
        n = ((0, a.useSelector)(c.default) || {}).top,
        f = void 0 === n ? s.DEFAULT_BADGE_TOP : n,
        v = (0, a.useSelector)(u.uiSelectors.selectBadgeHeight),
        h = ((0, a.useSelector)(l.default) || {}).open,
        g = (0, d.default)(),
        m = (0, o.useState)(s.DEFAULT_CONTAINER_TOP),
        y = r(m, 2),
        _ = y[0],
        b = y[1],
        S = (0, i.default)({ action: "show", sub_src: "tips_container", variant: "tips_moved" }).topMargin;
      return (
        (0, o.useEffect)(
          function () {
            var e = p({ badgeTop: f, badgeHeight: v, containerRef: t, isAutopop: g });
            b(e < S ? S : e);
          },
          [v, f, t, g, h, S]
        ),
        (0, o.useMemo)(
          function () {
            return { top: _ };
          },
          [_]
        )
      );
    };
  },
  3126: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(0),
      a = l(o),
      i = n(6),
      u = l(n(1)),
      s = n(191),
      c = l(n(3127));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d = function (e) {
      var t = e.tipId,
        n = e.children,
        u = (0, i.useDispatch)(),
        l = (0, o.useState)(null),
        d = r(l, 2),
        f = d[0],
        p = d[1],
        v = (0, s.useInView)({ threshold: 0.4 }),
        h = v.ref,
        g = v.inView,
        m = (0, o.useCallback)(
          function () {
            u((0, c.default)(t));
          },
          [u, t]
        );
      return (
        (0, o.useEffect)(
          function () {
            if (g && !f) {
              var e = setTimeout(m, 1e3);
              p(e);
            } else
              !g &&
                f &&
                p(function (e) {
                  return clearTimeout(e), null;
                });
            return function () {
              clearTimeout(f);
            };
          },
          [m, g, f]
        ),
        a.default.createElement("div", { ref: h }, n)
      );
    };
    (d.propTypes = {
      tipId: u.default.string.isRequired,
      children: u.default.oneOfType([u.default.node, u.default.arrayOf(u.default.node)])
    }),
      (d.defaultProps = { children: null }),
      (t.default = d);
  },
  3127: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(26),
      o = v(n(12)),
      a = v(n(71)),
      i = n(10),
      u = v(n(56)),
      s = n(198),
      c = v(n(3128)),
      l = v(n(3129)),
      d = v(n(3130)),
      f = v(n(3131)),
      p = n(62);
    function v(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function h(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var g = function (e) {
      return function (t, n) {
        switch ((r.tipsSelectors.selectTipById(e)(n()) || {}).categoryId) {
          case "Offers":
            t((0, c.default)(e));
            break;
          case "PayInFour":
            t((0, l.default)(e));
            break;
          case "CheckoutWithGiftCards":
            t((0, d.default)(e));
            break;
          case "TeamDeals":
            t((0, f.default)(e));
        }
      };
    };
    t.default = function (e) {
      var t,
        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      return (
        (t = h(
          regeneratorRuntime.mark(function t(c, l) {
            var d, f, v, h, m, y, _, b, S;
            return regeneratorRuntime.wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (
                        ((d = r.tipsSelectors.selectTipById(e)(l()) || {}),
                        (f = d.categoryId),
                        (v = i.storesSelectors.selectCurrentStore()(l()) || {}),
                        (h = v.storeId),
                        (m = (0, p.selectCurrentScrapedProduct)(l()) || {}),
                        (y = m.productId),
                        (_ = (0, u.default)(l()) || {}),
                        (b = _.id),
                        (S = _.open),
                        _.tipsShown[e] || (!S && !n))
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (
                        (t.next = 8),
                        o.default.send(
                          "honeyTips:tips",
                          { action: a.default.INCREMENT_TIP_SHOWN, storeId: h, categoryId: f, tipId: e, productId: y },
                          { background: !0 }
                        )
                      );
                    case 8:
                      c(r.tipsActions.setTipShown({ containerId: b, tipId: e })),
                        c((0, s.sdataTipsTipEvent)({ tipId: e, event: "show" })),
                        c(g(e));
                    case 11:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
    };
  },
  3128: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(83),
      o = n(693);
    t.default = function (e) {
      return function (t, n) {
        var a = r.offersSelectors.selectCurrentProductOffer(n());
        t((0, o.sdataOfferEvent)({ tipId: e, actionType: "view", offer: a }));
      };
    };
  },
  3129: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(309)),
      o = n(10),
      a = n(26),
      i = s(n(789)),
      u = n(1510);
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return function (t, n) {
        var s = (a.tipsSelectors.selectTipById(e)(n()) || {}).categoryId,
          c = (o.storesSelectors.selectCurrentStore()(n()) || {}).storeId,
          l = (0, i.default)(n()).impressionUrl;
        r.default.fireTracker(l), t((0, u.deprioritize)(s, c));
      };
    };
  },
  3130: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(10),
      o = n(26),
      a = n(1510);
    t.default = function (e) {
      return function (t, n) {
        var i = r.storesSelectors.selectCurrentStoreId()(n()),
          u = (o.tipsSelectors.selectTipById(e)(n()) || {}).categoryId;
        t((0, a.deprioritize)(u, i));
      };
    };
  },
  3131: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(180),
      a = n(434),
      i = (r = a) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      return function (t, n) {
        var r = (0, i.default)(n()).hasActiveTeam;
        t(
          (0, o.sdataTeamDealsTeamPDPInteraction)({
            tipId: e,
            actionType: "view",
            subSrc: r ? o.TEAM_DEAL_SUB_SRC.inviteSent : o.TEAM_DEAL_SUB_SRC.preTeamCreation
          })
        );
      };
    };
  },
  3132: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.ContainerLoader = void 0);
    var r = s(n(0)),
      o = n(2),
      a = n(3),
      i = n(72),
      u = s(n(3133));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = (0, o.createUseStyles)({
        containerLoader: {
          paddingTop: "60px",
          backgroundColor: a.Colors.white,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        container: { lineHeight: "2rem" }
      }),
      l = (t.ContainerLoader = function () {
        var e = c(),
          t = (0, u.default)().map(function (t) {
            return r.default.createElement("div", { className: e.container }, t);
          });
        return r.default.createElement(
          "div",
          { className: e.containerLoader },
          r.default.createElement(i.ContainerLoader, {
            loadingImage: "https://cdn.honey.io/images/tips/coiny_happy_scientist_beakers_transparent.gif",
            loadingPhrases: t,
            marqueeDelay: 2e3
          })
        );
      });
    t.default = l;
  },
  3133: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.default = function () {
        i ||
          (i = o.default.loadingPhrases.map(function (e) {
            return r.default.getMessage(e);
          }));
        return i;
      });
    var r = a(n(4)),
      o = a(n(3134));
    function a(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var i = void 0;
  },
  3134: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    t.default = {
      loadingPhrases: [
        "Stand_by_for_some_serious_deal_science",
        "Cooking_up_coupons_rewards_and_tips",
        "Dropping_some_savings_knowledge_in_3_2_1",
        "Channeling_our_savings_superpowers",
        "Our_secret_formula_of_deals_rewards_and_tips_coming_up",
        "Were_whipping_up_todays_deals_and_tips",
        "Were_working_our_deal_finding_magic",
        "Finding_deals_is_a_science",
        "Todays_batch_of_store_deals_and_tips_coming_up",
        "Coiny_is_working_some_shopping_genius",
        "Adding_our_secret_deal_finding_ingredients",
        "Coiny_says_an_informed_shopper_is_a_smart_shopper",
        "Were_working_our_deal_searching_magic",
        "Doing_what_we_do_best_whipping_up_deals_and_tips",
        "Whos_ready_to_save_Q_Stand_by_for_deals",
        "Shopping_wisdom_is_worth_waiting_for",
        "Searching_every_corner_of_the_internet_for_deals",
        "Good_deals_come_to_those_who_wait",
        "Doing_what_we_do_best_finding_you-deals_and_tips",
        "Warming_up_our_shopping_muscles",
        "Were_consulting_our_crystal_ball_for deals",
        "Making_you_a_savings_mixtape",
        "Stick_with_us_P_Were_a_magnet_for_deals",
        "You_find_the_cool_stuff_well_find_the_savings"
      ]
    };
  },
  3135: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = n(42),
      i = n(0),
      u = n(6),
      s = n(688),
      c = (r = s) && r.__esModule ? r : { default: r };
    t.default = function () {
      var e = (0, i.useCallback)(a.pageSelectors.selectIsCurrentPageLaunchpad(), []),
        t = (0, u.useSelector)(c.default),
        n = (0, u.useSelector)(e),
        r = t || n;
      return (0, i.useMemo)(
        function () {
          return { header: o({}, r && { root: { height: "48px" } }), container: o({}, r && { header: { flexBasis: "48px" } }) };
        },
        [r]
      );
    };
  },
  3136: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(26),
      a = n(0),
      i = n(6),
      u = c(n(56)),
      s = c(n(1963));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, i.useDispatch)(),
        t = (0, a.useState)(!1),
        n = r(t, 2),
        c = n[0],
        l = n[1],
        d = (0, i.useSelector)(u.default) || {},
        f = d.id,
        p = d.open,
        v = (0, a.useCallback)(
          function () {
            c || (l(!0), e(o.tipsActions.setIsHoveringOverContainer({ containerId: f, isHovering: !0 })));
          },
          [f, e, c]
        ),
        h = (0, a.useCallback)(
          function () {
            l(!1), e(o.tipsActions.setIsHoveringOverContainer({ containerId: f, isHovering: !1 })), e((0, s.default)(1e3));
          },
          [f, e]
        );
      return (
        (0, a.useEffect)(
          function () {
            !p && l(!1);
          },
          [p]
        ),
        (0, a.useMemo)(
          function () {
            return { handleMouseOver: v, handleMouseLeave: h };
          },
          [h, v]
        )
      );
    };
  },
  3137: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(0),
      a = g(o),
      i = g(n(1)),
      u = n(3),
      s = n(2),
      c = n(6),
      l = n(10),
      d = g(n(199)),
      f = g(n(3138)),
      p = n(69),
      v = g(n(1961)),
      h = g(n(314));
    function g(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var m = (0, s.createUseStyles)({
        condensedContainer: {
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.18)",
          borderRadius: "5px",
          backgroundColor: "white",
          marginTop: "50px",
          position: "relative",
          maxWidth: "400px",
          right: "20px"
        },
        honeyLogo: { height: "24px", marginLeft: "16px", marginTop: "12px" },
        storeLogo: {
          position: "absolute",
          borderRadius: "6px",
          top: "-20px",
          backgroundColor: u.Colors.white,
          boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.12)"
        },
        closeButtonContainer: { position: "absolute", right: "-11px", top: "-14px" },
        closeButton: {
          cursor: "pointer",
          alignItems: "center",
          backgroundColor: u.Colors.white,
          borderRadius: "12px",
          display: "flex",
          height: "24px",
          width: "24px",
          justifyContent: "center",
          boxShadow: "rgba(0, 0, 0, 0.08)"
        },
        closeButtonIcon: { color: u.Colors.grey900 },
        progressCircle: { position: "absolute", transform: "translateY(-24px)" },
        storeLogoContainer: { display: "flex", width: "100%", justifyContent: "center" },
        logoAndSettings: { display: "flex", justifyContent: "space-between" },
        condensedSettingsIcon: { marginTop: "8px", marginRight: "8px", lineHeight: "16px", fontSize: "12px" }
      }),
      y = function (e) {
        var t = e.children,
          n = e.autoClose,
          i = (0, o.useState)(n / 1e3),
          s = r(i, 2),
          g = s[0],
          y = s[1],
          _ = (0, o.useState)(),
          b = r(_, 2),
          S = b[0],
          O = b[1],
          x = (0, o.useState)(0),
          w = r(x, 2),
          E = w[0],
          T = w[1],
          P = m(),
          j = (0, c.useDispatch)(),
          I = (0, c.useSelector)(l.storesSelectors.selectCurrentStore()),
          C = (0, c.useSelector)(l.storesSelectors.selectStoreContent()).goldActivated,
          R = (0, o.useCallback)(
            function () {
              return j((0, d.default)());
            },
            [j]
          ),
          k = (0, h.default)(),
          A = (0, c.useSelector)(p.experimentSelectors.selectIsCondensedViewMoreVariant),
          M = n && k && C,
          N = function () {
            return O(!0);
          };
        return (
          (0, o.useEffect)(
            function () {
              var e = void 0;
              return (
                S && A ? (y(0), T(0)) : M && (y(n / 1e3), T(100), (e = setTimeout(R, n))),
                function () {
                  return clearTimeout(e);
                }
              );
            },
            [n, S, k, R, A, M]
          ),
          a.default.createElement(
            "div",
            {
              className: P.condensedContainer,
              onMouseDown: N,
              onMouseOver: N,
              onMouseLeave: function () {
                return O(!1);
              }
            },
            a.default.createElement(
              "div",
              { className: P.storeLogoContainer },
              a.default.createElement(u.StoreLogo, { className: P.storeLogo, size: 48, overlay: !1, storeId: I.id, storeName: I.name })
            ),
            a.default.createElement(
              "div",
              { className: P.closeButtonContainer, onClick: R },
              a.default.createElement(
                "div",
                { className: P.closeButton },
                a.default.createElement("div", { className: P.closeButtonIcon, alt: "close button" }, "\xd7")
              ),
              M &&
                a.default.createElement(
                  "div",
                  { className: P.progressCircle },
                  a.default.createElement(f.default, { color: "blue", progress: E, timing: g })
                )
            ),
            a.default.createElement(
              "div",
              { className: P.logoAndSettings },
              a.default.createElement("img", {
                alt: "Honey",
                src: "https://cdn.honey.io/images/honey-symbol-black.svg",
                className: P.honeyLogo
              }),
              a.default.createElement(
                "div",
                { className: P.condensedSettingsIcon },
                a.default.createElement(v.default, { noClose: !0, customSize: 24, customColor: u.Colors.grey900 })
              )
            ),
            t
          )
        );
      };
    (y.propTypes = { children: i.default.node.isRequired, autoClose: i.default.number }),
      (y.defaultProps = { autoClose: 4e3 }),
      (t.default = y);
  },
  3138: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = c);
    var r = u(n(0)),
      o = u(n(1)),
      a = n(2),
      i = n(3);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
      crcl: function (e) {
        return { transition: "all " + e.timing + "s 0s cubic-bezier(0.0, 0.0, 1.0, 1.0)" };
      },
      progressSvg: { transform: "rotate(-90deg)", cursor: "pointer" }
    });
    function c(e) {
      var t = e.progress,
        n = e.size,
        o = e.thickness,
        a = e.color,
        u = e.timing,
        c = a || i.Colors.sec500,
        l = s({ timing: u }),
        d = n / 2,
        f = d - o / 2,
        p = 2 * Math.PI * f,
        v = ((100 - t) / 100) * p;
      return r.default.createElement(
        "svg",
        { width: n, height: n, className: l.progressSvg },
        r.default.createElement("circle", {
          fill: "none",
          cx: d,
          cy: d,
          r: f,
          stroke: c,
          strokeWidth: o,
          strokeDasharray: p,
          strokeDashoffset: v,
          className: l.crcl
        })
      );
    }
    (c.propTypes = {
      progress: o.default.number.isRequired,
      color: o.default.string,
      thickness: o.default.number,
      size: o.default.number,
      timing: o.default.number
    }),
      (c.defaultProps = { color: null, thickness: 2, size: 24, timing: 0.7 });
  },
  3139: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(0),
      a = _(o),
      i = n(6),
      u = _(n(3140)),
      s = n(26),
      c = _(n(3145)),
      l = _(n(3146)),
      d = _(n(3151)),
      f = _(n(3154)),
      p = _(n(3156)),
      v = _(n(1963)),
      h = _(n(3157)),
      g = _(n(3160)),
      m = _(n(3161)),
      y = _(n(1966));
    function _(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = (0, i.useDispatch)(),
        t = (0, o.useRef)(),
        n = (0, o.useState)(!1),
        _ = r(n, 2),
        b = _[0],
        S = _[1],
        O = (0, o.useState)(!1),
        x = r(O, 2),
        w = x[0],
        E = x[1],
        T = ((0, i.useSelector)(y.default) || {}).categoryId;
      (0, o.useEffect)(
        function () {
          e(g.default);
        },
        [e]
      );
      var P = (0, h.default)({ badgeRef: t }),
        j = P.isDragging,
        I = P.initialBadgeTop,
        C = P.badgeBounds,
        R = P.badgePosition,
        k = P.handleDragStart,
        A = P.handleDragEnd,
        M = (0, i.useSelector)(s.tipsSelectors.selectRecentlyClosedContainer()) || !1,
        N = (0, o.useCallback)(
          function () {
            var t = null;
            T && !w && (E(!0), (t = T)), e((0, p.default)({ scrollToCategoryId: t }));
          },
          [e, w, T]
        ),
        D = (0, o.useCallback)(
          function () {
            b ||
              (S(!0),
              j ||
                M ||
                (e((0, m.default)(!0)),
                setTimeout(function () {
                  N();
                }, 300)));
          },
          [e, j, b, N, M]
        ),
        L = (0, o.useCallback)(
          function () {
            S(!1), e((0, m.default)(!1)), e((0, v.default)(2e3));
          },
          [e]
        ),
        U = (0, i.useSelector)(d.default);
      return (
        (0, o.useEffect)(
          function () {
            U && e((0, f.default)());
          },
          [e, U]
        ),
        a.default.createElement(
          c.default,
          { top: I },
          a.default.createElement(
            u.default,
            { onStart: k, onStop: A, bounds: C, axis: "y", position: R },
            a.default.createElement(
              "div",
              { ref: t, onMouseOver: D, onMouseLeave: L, onTouchEndCapture: N },
              a.default.createElement(l.default, null)
            )
          )
        )
      );
    };
  },
  3140: function (e, t, n) {
    "use strict";
    var r = n(3141),
      o = r.default,
      a = r.DraggableCore;
    (e.exports = o), (e.exports.default = o), (e.exports.DraggableCore = a);
  },
  3141: function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }),
      Object.defineProperty(t, "DraggableCore", {
        enumerable: !0,
        get: function () {
          return d.default;
        }
      }),
      (t.default = void 0);
    var o = (function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
        var n = h(t);
        if (n && n.has(e)) return n.get(e);
        var o = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set) ? Object.defineProperty(o, i, u) : (o[i] = e[i]);
          }
        (o.default = e), n && n.set(e, o);
        return o;
      })(n(0)),
      a = v(n(1)),
      i = v(n(58)),
      u = v(n(3142)),
      s = n(1570),
      c = n(1964),
      l = n(812),
      d = v(n(3144)),
      f = v(n(1965)),
      p = [
        "axis",
        "bounds",
        "children",
        "defaultPosition",
        "defaultClassName",
        "defaultClassNameDragging",
        "defaultClassNameDragged",
        "position",
        "positionOffset",
        "scale"
      ];
    function v(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function h(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (h = function (e) {
        return e ? n : t;
      })(e);
    }
    function g() {
      return (g =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    function m(e, t) {
      if (null == e) return {};
      var n,
        r,
        o = (function (e, t) {
          if (null == e) return {};
          var n,
            r,
            o = {},
            a = Object.keys(e);
          for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o;
        })(e, t);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
      }
      return o;
    }
    function y(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function _(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? y(Object(n), !0).forEach(function (t) {
              j(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : y(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
      }
      return e;
    }
    function b(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null == n) return;
          var r,
            o,
            a = [],
            i = !0,
            u = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
          } catch (e) {
            (u = !0), (o = e);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          }
          return a;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return S(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return S(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function S(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function O(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function x(e, t) {
      return (x =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function w(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = P(e);
        if (t) {
          var o = P(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return E(this, n);
      };
    }
    function E(e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return T(e);
    }
    function T(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function P(e) {
      return (P = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function j(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var I = (function (e) {
      !(function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && x(e, t);
      })(l, e);
      var t,
        n,
        r,
        a = w(l);
      function l(e) {
        var t;
        return (
          (function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          })(this, l),
          j(T((t = a.call(this, e))), "onDragStart", function (e, n) {
            if (((0, f.default)("Draggable: onDragStart: %j", n), !1 === t.props.onStart(e, (0, c.createDraggableData)(T(t), n))))
              return !1;
            t.setState({ dragging: !0, dragged: !0 });
          }),
          j(T(t), "onDrag", function (e, n) {
            if (!t.state.dragging) return !1;
            (0, f.default)("Draggable: onDrag: %j", n);
            var r = (0, c.createDraggableData)(T(t), n),
              o = { x: r.x, y: r.y };
            if (t.props.bounds) {
              var a = o.x,
                i = o.y;
              (o.x += t.state.slackX), (o.y += t.state.slackY);
              var u = b((0, c.getBoundPosition)(T(t), o.x, o.y), 2),
                s = u[0],
                l = u[1];
              (o.x = s),
                (o.y = l),
                (o.slackX = t.state.slackX + (a - o.x)),
                (o.slackY = t.state.slackY + (i - o.y)),
                (r.x = o.x),
                (r.y = o.y),
                (r.deltaX = o.x - t.state.x),
                (r.deltaY = o.y - t.state.y);
            }
            if (!1 === t.props.onDrag(e, r)) return !1;
            t.setState(o);
          }),
          j(T(t), "onDragStop", function (e, n) {
            if (!t.state.dragging) return !1;
            if (!1 === t.props.onStop(e, (0, c.createDraggableData)(T(t), n))) return !1;
            (0, f.default)("Draggable: onDragStop: %j", n);
            var r = { dragging: !1, slackX: 0, slackY: 0 };
            if (Boolean(t.props.position)) {
              var o = t.props.position,
                a = o.x,
                i = o.y;
              (r.x = a), (r.y = i);
            }
            t.setState(r);
          }),
          (t.state = {
            dragging: !1,
            dragged: !1,
            x: e.position ? e.position.x : e.defaultPosition.x,
            y: e.position ? e.position.y : e.defaultPosition.y,
            prevPropsPosition: _({}, e.position),
            slackX: 0,
            slackY: 0,
            isElementSVG: !1
          }),
          !e.position ||
            e.onDrag ||
            e.onStop ||
            console.warn(
              "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."
            ),
          t
        );
      }
      return (
        (t = l),
        (r = [
          {
            key: "getDerivedStateFromProps",
            value: function (e, t) {
              var n = e.position,
                r = t.prevPropsPosition;
              return !n || (r && n.x === r.x && n.y === r.y)
                ? null
                : ((0, f.default)("Draggable: getDerivedStateFromProps %j", { position: n, prevPropsPosition: r }),
                  { x: n.x, y: n.y, prevPropsPosition: _({}, n) });
            }
          }
        ]),
        (n = [
          {
            key: "componentDidMount",
            value: function () {
              void 0 !== window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({ isElementSVG: !0 });
            }
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.setState({ dragging: !1 });
            }
          },
          {
            key: "findDOMNode",
            value: function () {
              var e, t, n;
              return null !==
                (e = null === (t = this.props) || void 0 === t || null === (n = t.nodeRef) || void 0 === n ? void 0 : n.current) &&
                void 0 !== e
                ? e
                : i.default.findDOMNode(this);
            }
          },
          {
            key: "render",
            value: function () {
              var e,
                t = this.props,
                n = (t.axis, t.bounds, t.children),
                r = t.defaultPosition,
                a = t.defaultClassName,
                i = t.defaultClassNameDragging,
                l = t.defaultClassNameDragged,
                f = t.position,
                v = t.positionOffset,
                h = (t.scale, m(t, p)),
                y = {},
                b = null,
                S = !Boolean(f) || this.state.dragging,
                O = f || r,
                x = { x: (0, c.canDragX)(this) && S ? this.state.x : O.x, y: (0, c.canDragY)(this) && S ? this.state.y : O.y };
              this.state.isElementSVG ? (b = (0, s.createSVGTransform)(x, v)) : (y = (0, s.createCSSTransform)(x, v));
              var w = (0, u.default)(n.props.className || "", a, (j((e = {}), i, this.state.dragging), j(e, l, this.state.dragged), e));
              return o.createElement(
                d.default,
                g({}, h, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
                o.cloneElement(o.Children.only(n), { className: w, style: _(_({}, n.props.style), y), transform: b })
              );
            }
          }
        ]) && O(t.prototype, n),
        r && O(t, r),
        Object.defineProperty(t, "prototype", { writable: !1 }),
        l
      );
    })(o.Component);
    (t.default = I),
      j(I, "displayName", "Draggable"),
      j(
        I,
        "propTypes",
        _(
          _({}, d.default.propTypes),
          {},
          {
            axis: a.default.oneOf(["both", "x", "y", "none"]),
            bounds: a.default.oneOfType([
              a.default.shape({ left: a.default.number, right: a.default.number, top: a.default.number, bottom: a.default.number }),
              a.default.string,
              a.default.oneOf([!1])
            ]),
            defaultClassName: a.default.string,
            defaultClassNameDragging: a.default.string,
            defaultClassNameDragged: a.default.string,
            defaultPosition: a.default.shape({ x: a.default.number, y: a.default.number }),
            positionOffset: a.default.shape({
              x: a.default.oneOfType([a.default.number, a.default.string]),
              y: a.default.oneOfType([a.default.number, a.default.string])
            }),
            position: a.default.shape({ x: a.default.number, y: a.default.number }),
            className: l.dontSetMe,
            style: l.dontSetMe,
            transform: l.dontSetMe
          }
        )
      ),
      j(
        I,
        "defaultProps",
        _(
          _({}, d.default.defaultProps),
          {},
          {
            axis: "both",
            bounds: !1,
            defaultClassName: "react-draggable",
            defaultClassNameDragging: "react-draggable-dragging",
            defaultClassNameDragged: "react-draggable-dragged",
            defaultPosition: { x: 0, y: 0 },
            scale: 1
          }
        )
      );
  },
  3142: function (e, t, n) {
    "use strict";
    function r(e) {
      var t,
        n,
        o = "";
      if ("string" == typeof e || "number" == typeof e) o += e;
      else if ("object" == typeof e)
        if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (o && (o += " "), (o += n));
        else for (t in e) e[t] && (o && (o += " "), (o += t));
      return o;
    }
    function o() {
      for (var e, t, n = 0, o = ""; n < arguments.length; ) (e = arguments[n++]) && (t = r(e)) && (o && (o += " "), (o += t));
      return o;
    }
    n.r(t),
      n.d(t, "clsx", function () {
        return o;
      }),
      (t.default = o);
  },
  3143: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.browserPrefixToKey = a),
      (t.browserPrefixToStyle = function (e, t) {
        return t ? "-".concat(t.toLowerCase(), "-").concat(e) : e;
      }),
      (t.default = void 0),
      (t.getPrefix = o);
    var r = ["Moz", "Webkit", "O", "ms"];
    function o() {
      var e,
        t,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
      if ("undefined" == typeof window) return "";
      var o = null === (e = window.document) || void 0 === e || null === (t = e.documentElement) || void 0 === t ? void 0 : t.style;
      if (!o) return "";
      if (n in o) return "";
      for (var i = 0; i < r.length; i++) if (a(n, r[i]) in o) return r[i];
      return "";
    }
    function a(e, t) {
      return t
        ? "".concat(t).concat(
            (function (e) {
              for (var t = "", n = !0, r = 0; r < e.length; r++)
                n ? ((t += e[r].toUpperCase()), (n = !1)) : "-" === e[r] ? (n = !0) : (t += e[r]);
              return t;
            })(e)
          )
        : e;
    }
    var i = o();
    t.default = i;
  },
  3144: function (e, t, n) {
    "use strict";
    function r(e) {
      return (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
            })(e);
    }
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var o = (function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" !== r(e) && "function" != typeof e)) return { default: e };
        var n = f(t);
        if (n && n.has(e)) return n.get(e);
        var o = {},
          a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ("default" !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var u = a ? Object.getOwnPropertyDescriptor(e, i) : null;
            u && (u.get || u.set) ? Object.defineProperty(o, i, u) : (o[i] = e[i]);
          }
        (o.default = e), n && n.set(e, o);
        return o;
      })(n(0)),
      a = d(n(1)),
      i = d(n(58)),
      u = n(1570),
      s = n(1964),
      c = n(812),
      l = d(n(1965));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function f(e) {
      if ("function" != typeof WeakMap) return null;
      var t = new WeakMap(),
        n = new WeakMap();
      return (f = function (e) {
        return e ? n : t;
      })(e);
    }
    function p(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (null == n) return;
          var r,
            o,
            a = [],
            i = !0,
            u = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done) && (a.push(r.value), !t || a.length !== t); i = !0);
          } catch (e) {
            (u = !0), (o = e);
          } finally {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw o;
            }
          }
          return a;
        })(e, t) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return v(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(e, t);
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function v(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function h(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function g(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    function m(e, t) {
      return (m =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function y(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = S(e);
        if (t) {
          var o = S(this).constructor;
          n = Reflect.construct(r, arguments, o);
        } else n = r.apply(this, arguments);
        return _(this, n);
      };
    }
    function _(e, t) {
      if (t && ("object" === r(t) || "function" == typeof t)) return t;
      if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
      return b(e);
    }
    function b(e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }
    function S(e) {
      return (S = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function O(e, t, n) {
      return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
    }
    var x = { start: "touchstart", move: "touchmove", stop: "touchend" },
      w = { start: "mousedown", move: "mousemove", stop: "mouseup" },
      E = w,
      T = (function (e) {
        !(function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && m(e, t);
        })(c, e);
        var t,
          n,
          r,
          a = y(c);
        function c() {
          var e;
          h(this, c);
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
          return (
            O(b((e = a.call.apply(a, [this].concat(n)))), "state", { dragging: !1, lastX: NaN, lastY: NaN, touchIdentifier: null }),
            O(b(e), "mounted", !1),
            O(b(e), "handleDragStart", function (t) {
              if ((e.props.onMouseDown(t), !e.props.allowAnyClick && "number" == typeof t.button && 0 !== t.button)) return !1;
              var n = e.findDOMNode();
              if (!n || !n.ownerDocument || !n.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
              var r = n.ownerDocument;
              if (
                !(
                  e.props.disabled ||
                  !(t.target instanceof r.defaultView.Node) ||
                  (e.props.handle && !(0, u.matchesSelectorAndParentsTo)(t.target, e.props.handle, n)) ||
                  (e.props.cancel && (0, u.matchesSelectorAndParentsTo)(t.target, e.props.cancel, n))
                )
              ) {
                "touchstart" === t.type && t.preventDefault();
                var o = (0, u.getTouchIdentifier)(t);
                e.setState({ touchIdentifier: o });
                var a = (0, s.getControlPosition)(t, o, b(e));
                if (null != a) {
                  var i = a.x,
                    c = a.y,
                    d = (0, s.createCoreData)(b(e), i, c);
                  (0, l.default)("DraggableCore: handleDragStart: %j", d),
                    (0, l.default)("calling", e.props.onStart),
                    !1 !== e.props.onStart(t, d) &&
                      !1 !== e.mounted &&
                      (e.props.enableUserSelectHack && (0, u.addUserSelectStyles)(r),
                      e.setState({ dragging: !0, lastX: i, lastY: c }),
                      (0, u.addEvent)(r, E.move, e.handleDrag),
                      (0, u.addEvent)(r, E.stop, e.handleDragStop));
                }
              }
            }),
            O(b(e), "handleDrag", function (t) {
              var n = (0, s.getControlPosition)(t, e.state.touchIdentifier, b(e));
              if (null != n) {
                var r = n.x,
                  o = n.y;
                if (Array.isArray(e.props.grid)) {
                  var a = r - e.state.lastX,
                    i = o - e.state.lastY,
                    u = p((0, s.snapToGrid)(e.props.grid, a, i), 2);
                  if (((a = u[0]), (i = u[1]), !a && !i)) return;
                  (r = e.state.lastX + a), (o = e.state.lastY + i);
                }
                var c = (0, s.createCoreData)(b(e), r, o);
                if (((0, l.default)("DraggableCore: handleDrag: %j", c), !1 !== e.props.onDrag(t, c) && !1 !== e.mounted))
                  e.setState({ lastX: r, lastY: o });
                else
                  try {
                    e.handleDragStop(new MouseEvent("mouseup"));
                  } catch (t) {
                    var d = document.createEvent("MouseEvents");
                    d.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), e.handleDragStop(d);
                  }
              }
            }),
            O(b(e), "handleDragStop", function (t) {
              if (e.state.dragging) {
                var n = (0, s.getControlPosition)(t, e.state.touchIdentifier, b(e));
                if (null != n) {
                  var r = n.x,
                    o = n.y;
                  if (Array.isArray(e.props.grid)) {
                    var a = r - e.state.lastX || 0,
                      i = o - e.state.lastY || 0,
                      c = p((0, s.snapToGrid)(e.props.grid, a, i), 2);
                    (a = c[0]), (i = c[1]), (r = e.state.lastX + a), (o = e.state.lastY + i);
                  }
                  var d = (0, s.createCoreData)(b(e), r, o);
                  if (!1 === e.props.onStop(t, d) || !1 === e.mounted) return !1;
                  var f = e.findDOMNode();
                  f && e.props.enableUserSelectHack && (0, u.removeUserSelectStyles)(f.ownerDocument),
                    (0, l.default)("DraggableCore: handleDragStop: %j", d),
                    e.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                    f &&
                      ((0, l.default)("DraggableCore: Removing handlers"),
                      (0, u.removeEvent)(f.ownerDocument, E.move, e.handleDrag),
                      (0, u.removeEvent)(f.ownerDocument, E.stop, e.handleDragStop));
                }
              }
            }),
            O(b(e), "onMouseDown", function (t) {
              return (E = w), e.handleDragStart(t);
            }),
            O(b(e), "onMouseUp", function (t) {
              return (E = w), e.handleDragStop(t);
            }),
            O(b(e), "onTouchStart", function (t) {
              return (E = x), e.handleDragStart(t);
            }),
            O(b(e), "onTouchEnd", function (t) {
              return (E = x), e.handleDragStop(t);
            }),
            e
          );
        }
        return (
          (t = c),
          (n = [
            {
              key: "componentDidMount",
              value: function () {
                this.mounted = !0;
                var e = this.findDOMNode();
                e && (0, u.addEvent)(e, x.start, this.onTouchStart, { passive: !1 });
              }
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.mounted = !1;
                var e = this.findDOMNode();
                if (e) {
                  var t = e.ownerDocument;
                  (0, u.removeEvent)(t, w.move, this.handleDrag),
                    (0, u.removeEvent)(t, x.move, this.handleDrag),
                    (0, u.removeEvent)(t, w.stop, this.handleDragStop),
                    (0, u.removeEvent)(t, x.stop, this.handleDragStop),
                    (0, u.removeEvent)(e, x.start, this.onTouchStart, { passive: !1 }),
                    this.props.enableUserSelectHack && (0, u.removeUserSelectStyles)(t);
                }
              }
            },
            {
              key: "findDOMNode",
              value: function () {
                var e, t, n;
                return null !== (e = this.props) && void 0 !== e && e.nodeRef
                  ? null === (t = this.props) || void 0 === t || null === (n = t.nodeRef) || void 0 === n
                    ? void 0
                    : n.current
                  : i.default.findDOMNode(this);
              }
            },
            {
              key: "render",
              value: function () {
                return o.cloneElement(o.Children.only(this.props.children), {
                  onMouseDown: this.onMouseDown,
                  onMouseUp: this.onMouseUp,
                  onTouchEnd: this.onTouchEnd
                });
              }
            }
          ]) && g(t.prototype, n),
          r && g(t, r),
          Object.defineProperty(t, "prototype", { writable: !1 }),
          c
        );
      })(o.Component);
    (t.default = T),
      O(T, "displayName", "DraggableCore"),
      O(T, "propTypes", {
        allowAnyClick: a.default.bool,
        disabled: a.default.bool,
        enableUserSelectHack: a.default.bool,
        offsetParent: function (e, t) {
          if (e[t] && 1 !== e[t].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.");
        },
        grid: a.default.arrayOf(a.default.number),
        handle: a.default.string,
        cancel: a.default.string,
        nodeRef: a.default.object,
        onStart: a.default.func,
        onDrag: a.default.func,
        onStop: a.default.func,
        onMouseDown: a.default.func,
        scale: a.default.number,
        className: c.dontSetMe,
        style: c.dontSetMe,
        transform: c.dontSetMe
      }),
      O(T, "defaultProps", {
        allowAnyClick: !1,
        disabled: !1,
        enableUserSelectHack: !0,
        onStart: function () {},
        onDrag: function () {},
        onStop: function () {},
        onMouseDown: function () {},
        scale: 1
      });
  },
  3145: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(0)),
      o = u(n(1)),
      a = n(2),
      i = n(144);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
        layout: {
          position: "fixed",
          top: function (e) {
            return e.top;
          },
          right: 0,
          zIndex: 2147483647,
          display: "flex"
        }
      }),
      c = function (e) {
        var t = e.children,
          n = e.top,
          o = s({ top: n });
        return r.default.createElement("div", { className: o.layout }, t);
      };
    (c.propTypes = { children: o.default.node, top: o.default.number }),
      (c.defaultProps = { children: void 0, top: i.DEFAULT_BADGE_TOP }),
      (t.default = c);
  },
  3146: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(0),
      a = h(o),
      i = n(2),
      u = n(6),
      s = h(n(3147)),
      c = h(n(3148)),
      l = h(n(1966)),
      d = h(n(56)),
      f = n(317),
      p = h(n(3149)),
      v = h(n(3150));
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var g = (0, i.createUseStyles)({
      "@keyframes pulsing": { "0%": { transform: "scale(1)" }, "50%": { transform: "scale(0.5)" }, "100%": { transform: "scale(1)" } },
      "@keyframes shake": {
        "0%": { transform: "translate(0, 1px)" },
        "10%": { transform: "translate(0, -2px)" },
        "20%": { transform: "translate(0, 3px)" },
        "30%": { transform: "translate(0, -2px)" },
        "40%": { transform: "translate(0, 1px)" },
        "50%": { transform: "translate(0, -2px)" },
        "60%": { transform: "translate(0, 1px)" },
        "70%": { transform: "translate(0, -1px)" },
        "80%": { transform: "translate(0, 1px)" },
        "90%": { transform: "translate(0, -2px)" },
        "100%": { transform: "translate(0, 2px)" }
      },
      root: { display: "flex", cursor: "move" },
      teaserAnimateIn: function (e) {
        return {
          right: "1px",
          marginRight: e.animateTeaserIn ? "0" : "-200px",
          transition: "margin-right 800ms cubic-bezier(0.4, 0, 0.2, 1)",
          textAlign: "left"
        };
      },
      logoAnimation: function (e) {
        var t = e.hasNotification;
        return {
          height: e.isReady && t ? "28px" : "64px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexGrow: 1,
          transition: "height 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none"
        };
      },
      loadAnimation: function (e) {
        var t = e.hasNotification,
          n = e.isReady;
        return {
          height: "164px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          animation: n ? "none" : "$pulsing 1s infinite",
          transform: n && t ? "scale(66.65%)" : "scale(100%)",
          transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none"
        };
      },
      shake: function (e) {
        var t = e.doNotBump,
          n = e.hasBumpAnimation,
          r = e.hasNotification;
        return { animation: n && r && !t ? "$shake 0.82s forwards" : "none" };
      }
    });
    t.default = function () {
      var e = (0, u.useDispatch)(),
        t = (0, o.useState)(!1),
        n = r(t, 2),
        i = n[0],
        h = n[1],
        m = (0, o.useState)(!1),
        y = r(m, 2),
        _ = y[0],
        b = y[1],
        S = (0, o.useState)(),
        O = r(S, 2),
        x = O[0],
        w = O[1],
        E = (0, o.useState)(!1),
        T = r(E, 2),
        P = T[0],
        j = T[1],
        I = (0, o.useState)(!1),
        C = r(I, 2),
        R = C[0],
        k = C[1],
        A = (0, u.useSelector)(d.default) || {},
        M = A.ready,
        N = A.open,
        D = A.hasAutopopped,
        L = ((0, u.useSelector)(l.default) || {}).text;
      (0, o.useEffect)(function () {
        var e = setTimeout(function () {
          return k(!0);
        }, 0);
        return function () {
          clearTimeout(e);
        };
      }, []),
        (0, o.useEffect)(
          function () {
            return (
              (N && M) || D
                ? j(!0)
                : M &&
                  !x &&
                  w(
                    setTimeout(function () {
                      return b(!0);
                    }, 15e3)
                  ),
              function () {
                clearTimeout(x);
              }
            );
          },
          [x, D, M, N]
        ),
        (0, o.useEffect)(
          function () {
            L && M && e((0, f.sdataTipsBadgeEvent)({ event: "teaser_show", notification: L }));
          },
          [e, M, L]
        );
      var U = (0, o.useCallback)(
          function () {
            i || (h(!0), clearTimeout(x));
          },
          [i, x]
        ),
        B = (0, o.useCallback)(
          function () {
            h(!1);
          },
          [h]
        ),
        F = { animateTeaserIn: R, hasBumpAnimation: _, hasNotification: !!L, isReady: M, doNotBump: P },
        H = g(F);
      return a.default.createElement(
        "div",
        { className: H.shake },
        a.default.createElement(
          "div",
          { className: H.teaserAnimateIn },
          a.default.createElement(
            "div",
            { className: H.root, onMouseOver: U, onMouseLeave: B },
            a.default.createElement(
              s.default,
              null,
              a.default.createElement(
                "div",
                { className: H.logoAnimation },
                a.default.createElement("div", { className: H.loadAnimation }, a.default.createElement(v.default, { styleVars: F }))
              ),
              M && L && a.default.createElement(p.default, { text: L })
            ),
            i && a.default.createElement(c.default, null)
          )
        )
      );
    };
  },
  3147: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = i(n(0)),
      o = n(2),
      a = i(n(1));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var u = {
        children: a.default.node,
        topLeftContainer: a.default.node,
        topMiddleContainer: a.default.node,
        topRightContainer: a.default.node
      },
      s = (0, o.createUseStyles)({
        root: {
          width: "80px",
          minHeight: "64px",
          borderRadius: "6px 0px 0px 6px",
          boxShadow: "0px 2px 35px rgba(0, 0, 0, 0.25);",
          position: "relative",
          background: "linear-gradient(180deg, #F26C25 0%, #CC4B06 100%);"
        },
        topRow: { position: "absolute", top: 0, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }
      }),
      c = function (e) {
        var t = e.children,
          n = e.topLeftContainer,
          o = e.topMiddleContainer,
          a = e.topRightContainer,
          i = s();
        return r.default.createElement(
          "div",
          { className: i.root },
          r.default.createElement(
            "div",
            { className: i.topRow },
            r.default.createElement("div", null, n),
            r.default.createElement("div", null, o),
            r.default.createElement("div", null, a)
          ),
          t
        );
      };
    (c.propTypes = u), (c.defaultProps = { children: null, topLeftContainer: null, topMiddleContainer: null, topRightContainer: null });
    var l = c;
    t.default = l;
  },
  3148: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
    var r = s(n(0)),
      o = n(2),
      a = s(n(1)),
      i = n(3),
      u = s(n(1473));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var c = { onMouseDown: a.default.func, onMouseUp: a.default.func },
      l = {
        root: { display: "flex" },
        container: {
          width: "27px",
          height: "100%",
          backgroundColor: i.Colors.main600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      },
      d = (0, o.createUseStyles)(l),
      f = function (e) {
        var t = e.onMouseDown,
          n = e.onMouseUp,
          o = d();
        return r.default.createElement(
          "div",
          { className: o.root, onMouseDown: t, onMouseUp: n, role: "button", tabIndex: "0" },
          r.default.createElement("div", { className: o.container }, r.default.createElement(u.default, { color: i.Colors.white }))
        );
      };
    (f.propTypes = c), (f.defaultProps = { onMouseDown: function () {}, onMouseUp: function () {} });
    var p = f;
    t.default = p;
  },
  3149: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(0)),
      o = n(2),
      a = u(n(1)),
      i = n(3);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = { text: a.default.string },
      c = {
        "@keyframes fade": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        bottomText: { composes: "price2", textAlign: "center", padding: "8px 2px", color: i.Colors.white, animation: "$fade 1s forwards" }
      },
      l = (0, o.createUseStyles)(c),
      d = function (e) {
        var t = e.text,
          n = l();
        return r.default.createElement("div", { className: n.bottomText }, t);
      };
    (d.propTypes = s), (d.defaultProps = { text: null }), (t.default = d);
  },
  3150: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(0)),
      o = u(n(1)),
      a = n(2),
      i = n(3);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
        root: function (e) {
          var t = e.hasNotification;
          return { paddingTop: e.isReady && t ? "8px" : "0px", transition: "paddingTop 500ms cubic-bezier(0.4, 0, 0.2, 1)" };
        }
      }),
      c = function (e) {
        var t = e.styleVars,
          n = s(t);
        return r.default.createElement(
          "div",
          { className: n.root },
          r.default.createElement(i.Logo, { clickable: !1, color: i.Colors.white, size: 30, h: !0 })
        );
      };
    (c.propTypes = { styleVars: o.default.shape({ isReady: o.default.bool, hasNotification: o.default.bool }) }),
      (c.defaultProps = { styleVars: {} }),
      (t.default = c);
  },
  3151: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.LAUNCHPAD_AUTOPOP_TIPS_BLACKLIST = void 0);
    var r = n(11),
      o = S(n(466)),
      a = S(n(15)),
      i = n(132),
      u = n(69),
      s = n(258),
      c = n(793),
      l = n(83),
      d = n(42),
      f = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      })(n(3152)),
      p = n(335),
      v = n(111),
      h = n(26),
      g = S(n(56)),
      m = S(n(197)),
      y = n(62),
      _ = S(n(1469)),
      b = S(n(1568));
    function S(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var O = (t.LAUNCHPAD_AUTOPOP_TIPS_BLACKLIST = new Set([
        "savings-verylow",
        "savings-low",
        "savings-medium",
        "savings-high",
        "savings-veryhigh"
      ])),
      x = "honeyTips:canAutoPop: ",
      w = (0, r.createSelector)(
        function (e) {
          return i.deviceSelectors.selectDeviceSetting("autopopsDisabled")(e);
        },
        function (e) {
          return s.featureSelectors.selectFeatureByName("tips_is_autopop_suppression_respected")(e);
        },
        function (e, t) {
          return e && t;
        }
      ),
      E = (0, r.createSelector)(
        function (e) {
          return w(e);
        },
        function (e) {
          return (0, b.default)(e);
        },
        function (e) {
          return c.launchpadSelectors.selectAutoPopCountForCurrentStore(e);
        },
        function (e, t, n) {
          var r = (t || {}).id;
          return !e && !O.has(r) && !n;
        }
      ),
      T = (0, r.createSelector)(
        function (e) {
          return u.experimentSelectors.selectIsStandaloneOffer(e);
        },
        function (e) {
          return l.offersSelectors.selectCurrentProductOffer(e);
        },
        function (e, t) {
          return !(!e || !t);
        }
      ),
      P = (0, r.createSelector)(
        function (e) {
          return (0, m.default)(e);
        },
        function (e) {
          return h.tipsSelectors.selectAutopopDisabledCategoriesForCurrentStore(e);
        },
        function (e, t) {
          return (e || [])
            .filter(function (e) {
              var n = e.categoryId;
              return !(t || []).includes(n);
            })
            .some(function (e) {
              return e.score >= 10;
            });
        }
      ),
      j = (0, r.createSelector)(
        function (e) {
          return (0, g.default)(e);
        },
        function (e) {
          return !!(e || {}).open;
        }
      ),
      I = function (e) {
        if (
          (function (e) {
            var t = (0, b.default)(e) || {};
            if ((0, _.default)(t)) {
              var n = u.experimentSelectors.selectVariant(v.CURRENT_TIPS_CONTAINER_EXPERIMENT)(e);
              if (n === v.TIPS_CONTAINER_VARIANTS.CCP_POP_ALL) return !0;
              if (n === v.TIPS_CONTAINER_VARIANTS.CCP_POP_ALL_NON_TOP_PICK && "CCP-Non-Top-Pick-Organic" === t.id) return !0;
            }
            return !1;
          })(e)
        )
          return !0;
        var t = ((0, b.default)(e) || {}).categoryId,
          n = (o.default.categories[t] || {}).maxAutopopPerStoreThreshold,
          r = void 0 === n ? Number.POSITIVE_INFINITY : n;
        return (f.selectPdpAutopopCountForCurrentStoreByCategoryId(t)(e) || 0) < r;
      },
      C = (0, r.createSelector)(
        function (e) {
          return f.selectPdpAutopopCountForCurrentProduct()(e);
        },
        function (e) {
          return e < 1;
        }
      ),
      R = (0, r.createSelector)(
        function (e) {
          return T(e);
        },
        function (e) {
          return j(e);
        },
        function (e) {
          return P(e);
        },
        function (e) {
          return I(e);
        },
        function (e) {
          return (function (e) {
            if (!(0, y.selectCurrentScrapedProduct)(e)) return !1;
            var t = (0, b.default)(e) || {},
              n = t.categoryId,
              r = t.maxAutopopOverrideThreshhold;
            return f.selectPdpAutopopCountForCurrentProductByCategoryId(n)(e) < r;
          })(e);
        },
        function (e) {
          return C(e);
        },
        function (e, t, n, r, o, i) {
          return e
            ? (a.default.debug(x + "don't show autopop because standalone offer autopop is open"), !1)
            : t
            ? (a.default.debug(x + "don't show autopop because container already open"), !1)
            : n
            ? r
              ? o
                ? (a.default.debug(x + "show autopop because allow by tip configuration"), !0)
                : i
                ? (a.default.debug(x + "show autopop"), !0)
                : (a.default.debug(x + "don't show autopop because above max autopop per product threshold"), !1)
              : (a.default.debug(x + "don't show autopop because above max autopop threshold for store and tip category"), !1)
            : (a.default.debug(x + "don't show autopop because no tips have min autopop score"), !1);
        }
      ),
      k = (0, r.createSelector)(
        function (e) {
          return (0, g.default)(e);
        },
        function (e) {
          return d.pageSelectors.selectIsCurrentPageLaunchpad()(e);
        },
        function (e) {
          return p.uiSelectors.selectHasPreOpened(e);
        },
        function (e) {
          return e;
        },
        function (e, t, n, r) {
          var o = e || {},
            i = o.ready,
            u = o.hasClosed;
          return i
            ? u
              ? (a.default.debug(x + "don't show autopop because container was closed"), !1)
              : !n && (t ? E(r) : R(r))
            : (a.default.debug(x + "don't show autopop because container isn't ready"), !1);
        }
      );
    t.default = k;
  },
  3152: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.selectPdpAutopopCountForCurrentProductByCategoryId =
        t.selectPdpAutopopCountForCurrentProduct =
        t.selectPdpAutopopCountForCurrentStoreByCategoryId =
        t.selectPdpAutopopCountForCurrentStore =
          void 0);
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(11),
      a = n(3153),
      i = n(62),
      u = n(10),
      s = function (e) {
        return (e && e.tips && e.tips.pdpAutopopCounts) || {};
      },
      c = (0, o.createSelector)(
        function (e) {
          return u.storesSelectors.selectCurrentStoreId()(e);
        },
        function (e) {
          return (0, i.selectCurrentScrapedProduct)(e) || {};
        },
        function (e, t) {
          return { storeId: e, parentId: t.parentId };
        }
      );
    (t.selectPdpAutopopCountForCurrentStore = function () {
      return function (e) {
        var t = (0, a.getStoreKey)(c(e));
        return (s(e).countPerStore || {})[t] || 0;
      };
    }),
      (t.selectPdpAutopopCountForCurrentStoreByCategoryId = function (e) {
        return function (t) {
          var n = (0, a.getStoreCategoryKey)(r({}, c(t), { categoryId: e }));
          return (s(t).countPerStoreAndCategory || {})[n] || 0;
        };
      }),
      (t.selectPdpAutopopCountForCurrentProduct = function () {
        return function (e) {
          var t = (0, a.getProductKey)(c(e));
          return (s(e).countPerProduct || {})[t] || 0;
        };
      }),
      (t.selectPdpAutopopCountForCurrentProductByCategoryId = function (e) {
        return function (t) {
          var n = (0, a.getProductCategoryKey)(r({}, c(t), { categoryId: e }));
          return (s(t).countPerProductAndCategory || {})[n] || 0;
        };
      });
  },
  3153: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = (t.getStoreKey = function (e) {
        return "" + e.storeId;
      }),
      o =
        ((t.getStoreCategoryKey = function (e) {
          var t = e.storeId,
            n = e.categoryId;
          return r({ storeId: t }) + ":" + n;
        }),
        (t.getProductKey = function (e) {
          return e.storeId + ":" + e.parentId;
        }));
    t.getProductCategoryKey = function (e) {
      var t = e.storeId,
        n = e.parentId,
        r = e.categoryId;
      return o({ storeId: t, parentId: n }) + ":" + r;
    };
  },
  3154: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11),
      o = n(42),
      a = n(26),
      i = n(793),
      u = n(317),
      s = l(n(56)),
      c = l(n(3155));
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var d,
      f,
      p = function (e, t) {
        var n = (0, s.default)(t()).id;
        return e(a.tipsActions.openContainer({ containerId: n, isAutopop: !0 }));
      },
      v = function (e) {
        return function (t, n) {
          var r = (0, s.default)(n()).id;
          t(a.tipsActions.updateShowTopTipOnly({ containerId: r, showTopTipOnly: e }));
        };
      },
      h = (0, r.createAsyncThunk)(
        "tips/initContainer",
        ((d = regeneratorRuntime.mark(function e(t, n) {
          var r,
            a = n.dispatch,
            s = n.getState;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = o.pageSelectors.selectIsCurrentPageLaunchpad()(s())) || a(v(!0)),
                      a(p),
                      a((0, u.sdataTipsBadgeEvent)({ event: "implicit_hover" })),
                      e.abrupt("return", a(r ? i.launchpadActions.incrementAutoPopCount() : (0, c.default)()))
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (f = function () {
          var e = d.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e, t) {
          return f.apply(this, arguments);
        })
      );
    t.default = h;
  },
  3155: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = l(n(71)),
      o = l(n(1568)),
      a = l(n(12)),
      i = n(436),
      u = n(10),
      s = l(n(1509)),
      c = n(62);
    function l(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t, n) {
          var l, d, f, p, v, h, g;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (l = i.sessionSelectors.selectCurrentGlobalSessionId()(n())),
                      (d = u.storesSelectors.selectCurrentStoreId()(n())),
                      (f = (0, c.selectCurrentScrapedProduct)(n()) || {}),
                      (p = f.parentId),
                      (v = (0, o.default)(n()) || {}),
                      (h = v.categoryId),
                      (g = { action: r.default.TIPS_INCREMENT_PDP_AUTOPOP_COUNT, sessionId: l, storeId: d, parentId: p, categoryId: h }),
                      (e.next = 7),
                      a.default.send("honeyTips:tips", g, { background: !0 })
                    );
                  case 7:
                    return e.abrupt("return", t((0, s.default)()));
                  case 8:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3156: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(15)),
      o = u(n(27)),
      a = n(26),
      i = u(n(56));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        t = e.scrollToCategoryId;
      return function (e, n) {
        if (o.default._visible) r.default.debug("honeyTips:openCurrentContainer: Not opening container because UI already visible.");
        else {
          var u = (0, i.default)(n()) || {},
            s = u.id;
          u.open || e(a.tipsActions.openContainer({ containerId: s, scrollToCategoryId: t }));
        }
      };
    };
  },
  3157: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var n = [],
              r = !0,
              o = !1,
              a = void 0;
            try {
              for (var i, u = e[Symbol.iterator](); !(r = (i = u.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
            } catch (e) {
              (o = !0), (a = e);
            } finally {
              try {
                !r && u.return && u.return();
              } finally {
                if (o) throw a;
              }
            }
            return n;
          })(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      },
      o = n(0),
      a = n(6),
      i = f(n(3158)),
      u = f(n(3159)),
      s = n(144),
      c = f(n(811)),
      l = f(n(199)),
      d = n(335);
    function f(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var p = function (e, t) {
        return { top: -Math.max(0, e - 150), bottom: Math.max(0, window.innerHeight - e - t - 15) };
      },
      v = function (e, t) {
        return e + t > window.innerHeight - 15 || e < 0;
      };
    t.default = function (e) {
      var t,
        n = e.badgeRef,
        f = (0, a.useDispatch)(),
        h = (0, o.useState)(!1),
        g = r(h, 2),
        m = g[0],
        y = g[1],
        _ = (0, o.useState)({}),
        b = r(_, 2),
        S = b[0],
        O = b[1],
        x = (0, o.useState)(null),
        w = r(x, 2),
        E = w[0],
        T = w[1],
        P = (0, o.useState)(),
        j = r(P, 2),
        I = j[0],
        C = j[1],
        R = (0, o.useState)(!0),
        k = r(R, 2),
        A = k[0],
        M = k[1],
        N = ((t = n) && t.current && t.current.offsetHeight) || s.DEFAULT_BADGE_HEIGHT,
        D = ((0, a.useSelector)(c.default) || {}).top,
        L = void 0 === D ? s.DEFAULT_BADGE_TOP : D,
        U = (0, o.useCallback)(
          function () {
            var e = (function (e) {
              return window.innerHeight - 15 - e;
            })(N);
            f((0, u.default)({ top: e })),
              T(e),
              O(p(e, N)),
              C({ x: 0, y: 0 }),
              setTimeout(function () {
                return C(void 0);
              }, 0);
          },
          [N, f]
        ),
        B = (0, o.useCallback)(
          function () {
            v(L, N) ? U() : O(p(E, N));
          },
          [N, L, E, U]
        );
      (0, o.useEffect)(
        function () {
          "number" != typeof E && "number" == typeof L && (T(L), O(p(L, N)), v(L, N) && U());
        },
        [N, n, L, E, U]
      ),
        (0, o.useEffect)(
          function () {
            var e = (0, i.default)(B, 100);
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e);
              }
            );
          },
          [B]
        ),
        (0, o.useEffect)(
          function () {
            f(d.uiActions.badgeHeightUpdated(N));
          },
          [N, f]
        ),
        (0, o.useEffect)(
          function () {
            A && v(L, N) && f((0, u.default)({ top: s.DEFAULT_BADGE_TOP })), M(!1);
          },
          [N, L, f, A]
        );
      var F = (0, o.useCallback)(
          function () {
            C(void 0), f((0, l.default)({ resetTipsShown: !1 })), y(!0);
          },
          [f]
        ),
        H = (0, o.useCallback)(
          function (e, t) {
            var n = t.y;
            y(!1);
            var r = E + n,
              o = r !== L;
            f((0, u.default)({ top: r, sendSdata: o }));
          },
          [L, f, E]
        );
      return { isDragging: m, initialBadgeTop: E, badgeBounds: S, badgePosition: I, handleDragStart: F, handleDragEnd: H };
    };
  },
  3158: function (e, t, n) {
    var r = n(1897),
      o = n(112);
    e.exports = function (e, t, n) {
      var a = !0,
        i = !0;
      if ("function" != typeof e) throw new TypeError("Expected a function");
      return (
        o(n) && ((a = "leading" in n ? !!n.leading : a), (i = "trailing" in n ? !!n.trailing : i)),
        r(e, t, { leading: a, maxWait: t, trailing: i })
      );
    };
  },
  3159: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a = n(132),
      i = n(10),
      u = n(144),
      s = n(317),
      c = n(811),
      l = (r = c) && r.__esModule ? r : { default: r },
      d = n(1959);
    t.default = function (e) {
      var t,
        n,
        r = e.top,
        c = e.sendSdata,
        f = void 0 !== c && c;
      return (
        (t = regeneratorRuntime.mark(function e(t, n) {
          var c, p, v, h;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      f &&
                        ((c = (0, l.default)(n())),
                        (p = o({}, c, { top: r })),
                        t((0, s.sdataTipsBadgeEvent)({ event: "action", action: "move", badgeLocationNew: p }))),
                      (v = i.storesSelectors.selectCurrentStoreId()(n())),
                      (h = (0, d.shouldUseStoreBadgeSettings)(v)
                        ? u.DEVICE_SETTINGS.MOVABLE_BADGE_SETTINGS_BY_STORE
                        : u.DEVICE_SETTINGS.MOVABLE_BADGE_SETTINGS),
                      (e.next = 5),
                      t(a.deviceActions.updateDeviceSetting({ key: h, value: { orientation: "topRight", top: r } }))
                    );
                  case 5:
                    return e.abrupt("return", t(a.deviceActions.loadDeviceSettings()));
                  case 6:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
    };
  },
  3160: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(317);
    t.default = function (e) {
      e((0, r.sdataTipsBadgeEvent)({ event: "show" }));
    };
  },
  3161: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(26),
      a = n(317),
      i = n(56),
      u = (r = i) && r.__esModule ? r : { default: r };
    t.default = function (e) {
      return function (t, n) {
        var r = (0, u.default)(n()).id;
        t(o.tipsActions.setBadgeHoverState({ containerId: r, isHovering: e })),
          e && t((0, a.sdataTipsBadgeEvent)({ event: "action", action: "hover" }));
      };
    };
  },
  3162: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = u(n(0)),
      o = u(n(1)),
      a = n(2),
      i = n(3);
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var s = (0, a.createUseStyles)({
        resetCss: { textTransform: "none", lineHeight: "normal", fontWeight: "normal", color: i.Colors.grey900 }
      }),
      c = function (e) {
        var t = e.children,
          n = s();
        return r.default.createElement("div", { className: n.resetCss }, t);
      };
    (c.propTypes = { children: o.default.node }), (c.defaultProps = { children: void 0 }), (t.default = c);
  },
  3163: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.VALID_LAUNCHPAD_TIPS = void 0);
    var r,
      o = n(11),
      a = n(197),
      i = (r = a) && r.__esModule ? r : { default: r };
    var u = (t.VALID_LAUNCHPAD_TIPS = new Set(["StoreSavings", "MerchantPromotions"])),
      s = (0, o.createSelector)(
        function (e) {
          return (0, i.default)(e);
        },
        function (e) {
          return (e || [])
            .map(function (e) {
              return e.categoryId;
            })
            .some(function (e) {
              return u.has(e);
            });
        }
      );
    t.default = s;
  },
  3164: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(0),
      o = n(6),
      a = n(794),
      i = d(n(691)),
      u = n(10),
      s = d(n(56)),
      c = d(n(3165)),
      l = d(n(3166));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e = ((0, o.useSelector)(s.default) || {}).ready,
        t = (0, o.useSelector)(u.storesSelectors.selectCurrentStore()),
        n = (0, o.useSelector)(c.default),
        d = (0, o.useSelector)(l.default);
      (0, r.useEffect)(
        function () {
          e &&
            (n && i.default.trackFeature(a.Feature.Offers, t.storeId, "LaunchpadOffers", !t.featureMonitorOffersHidden),
            d && i.default.trackFeature(a.Feature.Offers, t.storeId, "ProductOffer", !t.featureMonitorOffersHidden));
        },
        [d, n, e, t]
      );
    };
  },
  3165: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(83),
      i = n(1805),
      u = (r = i) && r.__esModule ? r : { default: r };
    var s = (0, o.createSelector)(
      function (e) {
        return (0, u.default)(e);
      },
      function (e) {
        return a.offersSelectors.selectCurrentStoreProductOffersIgnoringFeatureMonitor(e);
      },
      function (e, t) {
        return !!e && !!(t || {}).showOffers;
      }
    );
    t.default = s;
  },
  3166: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(11),
      a = n(83),
      i = n(1803),
      u = (r = i) && r.__esModule ? r : { default: r };
    var s = (0, o.createSelector)(
      function (e) {
        return (0, u.default)(e);
      },
      function (e) {
        return a.offersSelectors.selectCurrentProductOfferIgnoringFeatureMonitor(e);
      },
      function (e, t) {
        return !!e && !!t;
      }
    );
    t.default = s;
  },
  3167: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = h(n(0)),
      o = n(58),
      a = n(40),
      i = n(2),
      u = h(n(176)),
      s = n(6),
      c = h(n(765)),
      l = h(n(15)),
      d = n(144),
      f = h(n(306)),
      p = n(1702),
      v = h(n(122));
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var g,
      m,
      y = "z-index: 2147483647 !important; display:block !important;",
      _ = function (e) {
        var t = new MutationObserver(function (n) {
          var r = !0,
            o = !1,
            a = void 0;
          try {
            for (var i, u = n[Symbol.iterator](); !(r = (i = u.next()).done); r = !0) {
              var s = i.value;
              "attributes" === s.type && "style" === s.attributeName && (t.disconnect(), (e.style = y));
            }
          } catch (e) {
            (o = !0), (a = e);
          } finally {
            try {
              !r && u.return && u.return();
            } finally {
              if (o) throw a;
            }
          }
        });
        return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), t;
      },
      b = function (e) {
        var t = (0, c.default)();
        e.setAttribute("id", t), l.default.debug("honeyTips:mountApp: Setting id = '" + t + "' on root element");
      },
      S = function (e, t, n, r, o) {
        var a = new MutationObserver(function (e) {
          var i = !0,
            u = !1,
            s = void 0;
          try {
            for (var c, l = e[Symbol.iterator](); !(i = (c = l.next()).done); i = !0) {
              var d = c.value;
              if (d.removedNodes.length) {
                var f = !0,
                  p = !1,
                  v = void 0;
                try {
                  for (var h, g = d.removedNodes[Symbol.iterator](); !(f = (h = g.next()).done); f = !0) {
                    if (h.value.contains(t)) {
                      if ((a.disconnect(), r(), o > 4)) return;
                      O(n, o + 1);
                    }
                  }
                } catch (e) {
                  (p = !0), (v = e);
                } finally {
                  try {
                    !f && g.return && g.return();
                  } finally {
                    if (p) throw v;
                  }
                }
              }
            }
          } catch (e) {
            (u = !0), (s = e);
          } finally {
            try {
              !i && l.return && l.return();
            } finally {
              if (u) throw s;
            }
          }
        });
        return a.observe(e, { childList: !0, characterData: !0 }), a;
      },
      O =
        ((g = regeneratorRuntime.mark(function e(t) {
          var n,
            c,
            l,
            h,
            g,
            m,
            O,
            x,
            w,
            E,
            T,
            P = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = d.INLINE_STYLE_BLOCKLIST.includes(window.location.host)),
                      (c = (0, u.default)()),
                      (l = c.plugins),
                      (h = document.createElement("div")),
                      b(h),
                      document.body.appendChild(h),
                      (g = _(h)),
                      (m = "closed"),
                      (e.next = 10),
                      (0, f.default)(h, null, { mode: m, dontInjectFonts: !0 })
                    );
                  case 10:
                    return (
                      (O = e.sent),
                      (x = new i.SheetsRegistry()),
                      (w = (0, a.create)()).setup({ plugins: l, insertionPoint: O.getElementById("honey") }),
                      n ? (O.getElementById("honey").style = y) : (h.style = y),
                      (E = r.default.createElement(
                        s.Provider,
                        { store: v.default },
                        r.default.createElement(
                          i.JssProvider,
                          { registry: x, jss: w },
                          r.default.createElement(p.Provider, { value: { shadowContainer: h } }, t)
                        )
                      )),
                      (e.next = 18),
                      (0, f.default)(h, E, { mode: m, dontInjectFonts: !0, feature: "honey-tips-new", surface: "badge" })
                    );
                  case 18:
                    return (
                      (T = function () {
                        g.disconnect(), (0, o.unmountComponentAtNode)(O);
                      }),
                      S(document.body, h, t, T, P),
                      e.abrupt("return", { container: O, unmountApp: T })
                    );
                  case 21:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (m = function () {
          var e = g.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e) {
          return m.apply(this, arguments);
        });
    t.default = O;
  },
  3168: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.sendTipsVisibilitySdata = void 0);
    var r,
      o = n(144),
      a = n(15),
      i = (r = a) && r.__esModule ? r : { default: r },
      u = n(69),
      s = n(83),
      c = n(42),
      l = n(335),
      d = n(62),
      f = n(317),
      p = n(310);
    var v = new Set(Object.values(o.HIDE_TIPS_FOR_ALL_USERS_REASONS)),
      h = new Set(),
      g = function (e) {
        return e.every(function (e) {
          return !v.has(e);
        });
      },
      m = function () {
        return function (e) {
          e((0, p.sdataTipsDebugEvent)({ debugEvent: "funnel", action: "not_shown" }));
        };
      },
      y = function (e) {
        return function (t, n) {
          var r = s.offersSelectors.selectCurrentProductOffer(n());
          if (r) {
            var o = (0, d.selectCurrentScrapedProduct)(n()),
              a = JSON.stringify({ product: o, offer: r });
            t((0, p.sdataTipsDebugEvent)({ debugEvent: "offers_miss_rate", action: e, metadataJson: a }));
          }
        };
      };
    t.sendTipsVisibilitySdata = function (e) {
      var t = e.canRunTips,
        n = e.hideReasons,
        r = void 0 === n ? [] : n,
        a = e.disabledByUserReason,
        s = e.suppressionReason;
      return function (e, n) {
        var d = "honeyTips:sendTipsVisibilitySdata: ",
          v = c.pageSelectors.selectCurrentPageId()(n());
        if (!h.has(v)) {
          h.add(v);
          var _ = u.experimentSelectors.selectCurrentTipsContainerVariant(n()),
            b = c.pageSelectors.selectIsCurrentPageLaunchpad()(n()) && g(r);
          if (g(r)) {
            var S = JSON.stringify({ funnelForLaunchpad: b });
            e((0, p.sdataTipsDebugEvent)({ debugEvent: "funnel", action: "should_show_container", metadataJson: S }));
          }
          if (t)
            e(function (e, t) {
              var n = c.pageSelectors.selectIsCurrentPageLaunchpad()(t()),
                r = l.uiSelectors.selectHasPreOpened(t());
              if (n && r) {
                var o = l.uiSelectors.selectPreOpenPathname(t());
                e((0, f.sdataTipsBadgeEvent)({ event: "hide_collision", collisionPathname: o }));
              }
            });
          else {
            if (
              (function (e) {
                return g(e) && e.includes(o.HIDE_TIPS_REASONS.HOLDOUT_GROUP);
              })(r)
            )
              return (
                i.default.debug(d + "Hiding tips because user is in holdout group."),
                e((0, f.sdataTipsBadgeEvent)({ event: "hide_holdout" })),
                e(y("tips_available_holdout")),
                void e(m())
              );
            if (
              (function (e) {
                return g(e) && e.includes(o.HIDE_TIPS_REASONS.DISABLED_BY_USER);
              })(r)
            )
              return (
                i.default.debug(d + "Tips disabled by user."),
                e((0, f.sdataTipsBadgeEvent)({ event: a ? "hide_disable:" + a : "hide_disable", group: "launch_v:" + _ })),
                e(y("tips_available_disable")),
                void e(m())
              );
            if (
              (function (e) {
                return g(e) && e.includes(o.HIDE_TIPS_REASONS.SUPPRESSED);
              })(r)
            )
              return (
                i.default.debug(d + "Tips suppressed by user."),
                e((0, f.sdataTipsBadgeEvent)({ event: s ? "hide_snooze:" + s : "hide_snooze", group: "launch_v:" + _ })),
                e(y("tips_available_suppress")),
                void e(m())
              );
            e(
              (0, p.sdataTipsDebugEvent)({
                debugEvent: "funnel",
                action: "should_not_show_container",
                metadataJson: JSON.stringify({ isValidLaunchpadPage: b })
              })
            );
            var O = c.pageSelectors.selectIsProductPage(n()),
              x = u.experimentSelectors.selectIsStandaloneOffer(n());
            O && x && e((0, f.sdataTipsBadgeEvent)({ event: "hide", group: "autopop_displayed" }));
          }
        }
      };
    };
  },
  3169: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = n(143),
      a = n(703),
      i = n(179),
      u = n(262),
      s = n(241),
      c = y(n(1840)),
      l = n(62),
      d = y(n(15)),
      f = n(69),
      p = n(258),
      v = n(683),
      h = n(259),
      g = n(10),
      m = n(29);
    function y(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var _ = "honeyTips:loadPL2GoTipData: ";
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t, n) {
          var y, b, S, O, x, w, E, T, P, j, I, C, R, k, A, M, N, D, L, U;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t(v.pl2goActions.reset()),
                      (y = h.genericFetcherSelectors.selectCurrentGenericPageProduct(n())),
                      (b = (0, l.selectCurrentScrapedProduct)(n())),
                      (S = g.storesSelectors.selectCurrentStore()(n())),
                      (O = (b || y || {}).lastPrice),
                      (w = (x = S || {}).currencyCode),
                      (E = x.id),
                      (e.next = 8),
                      (0, i.getHoneyCheckoutEligibilityState)()
                    );
                  case 8:
                    (T = e.sent),
                      t(v.pl2goActions.setCheckoutEligibilityState(T)),
                      (P = O && O > 0 ? (O / 100).toFixed(2) : void 0),
                      (j = (0, c.default)(n())),
                      (e.next = 16);
                    break;
                  case 16:
                    if (!P) {
                      e.next = 21;
                      break;
                    }
                    if (!(O < 3e3 || O > 15e4)) {
                      e.next = 21;
                      break;
                    }
                    return (
                      (0, s.sendPL2GoSdata)(
                        r({}, j, {
                          action: s.ACTION.USER_INELIGIBLE,
                          subAction: O < 3e3 ? s.SUB_ACTION.AMOUNT_TOO_LOW : s.SUB_ACTION.AMOUNT_TOO_HIGH
                        })
                      ),
                      d.default.debug(_ + "Out of required price range"),
                      e.abrupt("return")
                    );
                  case 21:
                    return (
                      (e.next = 23),
                      t(p.featuresActions.loadFeatures(["honey_checkout_paypal_vcc_pdp_enabled", "honey_checkout_paypal_vcc_enabled"]))
                    );
                  case 23:
                    if (
                      ((I = p.featureSelectors.selectFeatureByName("honey_checkout_paypal_vcc_pdp_enabled")(n())),
                      (C = p.featureSelectors.selectFeatureByName("honey_checkout_paypal_vcc_enabled")(n())),
                      ![I, C].some(function (e) {
                        return !e;
                      }))
                    ) {
                      e.next = 31;
                      break;
                    }
                    return (
                      (R = s.SUB_ACTION.VCC_PDP_DISABLED),
                      C || (R = s.SUB_ACTION.VCC_DISABLED),
                      (0, s.sendPL2GoSdata)(r({}, j, { action: s.ACTION.USER_INELIGIBLE, subAction: R })),
                      d.default.debug(_ + "Required feature flag not met"),
                      e.abrupt("return")
                    );
                  case 31:
                    if (((k = !1), (e.prev = 32), !E)) {
                      e.next = 41;
                      break;
                    }
                    return (e.next = 36), (0, i.getCheckoutSetting)(o.checkoutSettingKeys.devToolsEnabled);
                  case 36:
                    return (A = e.sent), (e.next = 39), (0, a.getStoreConfig)(E, A);
                  case 39:
                    (M = e.sent), (k = M && (M.checkoutTypes || []).includes(o.CheckoutTypes.VCC) && M.pl2goPdp);
                  case 41:
                    e.next = 46;
                    break;
                  case 43:
                    (e.prev = 43), (e.t0 = e.catch(32)), d.default.error("PL2Go PDP - store config error: " + e.t0);
                  case 46:
                    if (k) {
                      e.next = 50;
                      break;
                    }
                    return (
                      (0, s.sendPL2GoSdata)(r({}, j, { action: s.ACTION.USER_INELIGIBLE, subAction: s.SUB_ACTION.MERCHANT_DISABLED })),
                      d.default.debug(_ + "Required store config not met"),
                      e.abrupt("return")
                    );
                  case 50:
                    return (e.next = 52), t(f.experimentsActions.loadVariant(u.PL2GO_EXPERIMENTS.PL2GO_RAMP));
                  case 52:
                    if ("on" === f.experimentSelectors.selectVariant(u.PL2GO_EXPERIMENTS.PL2GO_RAMP)(n())) {
                      e.next = 57;
                      break;
                    }
                    return (
                      (0, s.sendPL2GoSdata)(
                        r({}, j, { action: s.ACTION.USER_INELIGIBLE, subAction: s.SUB_ACTION.USER_IN_EXPERIMENT_CONTROL_GROUP })
                      ),
                      d.default.debug(_ + "User in experiment control group"),
                      e.abrupt("return")
                    );
                  case 57:
                    return (e.next = 59), (0, u.getPL2GOPromo)({ amountValue: P, currencyCode: w, timeout: 3e3 });
                  case 59:
                    if (((N = e.sent), (D = (0, u.validatePL2GOResponse)(N)), (L = D.invalidReason), D.isValid)) {
                      e.next = 66;
                      break;
                    }
                    return (
                      (0, s.sendPL2GoSdata)(
                        r({}, j, { action: s.ACTION.USER_INELIGIBLE, subAction: s.SUB_ACTION.PRESENTMENT_UNAVAILABLE })
                      ),
                      d.default.debug("" + _ + L),
                      e.abrupt("return")
                    );
                  case 66:
                    (U = m.userSelectors.selectUser()(n())),
                      (0, s.sendPL2GoSdata)(r({}, j, { action: s.ACTION.USER_ELIGIBLE, subAction: (0, s.getEligibleSubAction)(U, P) })),
                      t(v.pl2goActions.setValidatedPL2GoResponse(D));
                  case 69:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0,
            [[32, 43]]
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  317: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), (t.sdataTipsBadgeEvent = void 0);
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = u(n(15)),
      a = u(n(13)),
      i = u(n(3100));
    function u(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.sdataTipsBadgeEvent = function (e) {
      return function (t, n) {
        var u = (0, i.default)(n()),
          s = r({}, u, e);
        a.default.sendEvent("tip004034", s), o.default.debug("TIPS_BADGE:" + s.event, s);
      };
    };
  },
  3170: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(122)),
      o = n(460),
      a = s(n(12)),
      i = n(10),
      u = s(n(1970));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      a.default.addListener(
        "droplist:update",
        ((e = regeneratorRuntime.mark(function e(t) {
          var n,
            a,
            s,
            c,
            l,
            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((n = d.type), (a = d.product), (s = void 0 === a ? {} : a), "productFetcher" !== n || !0 !== s.imprint)) {
                      e.next = 6;
                      break;
                    }
                    return (
                      (c = i.storesSelectors.selectCurrentStoreId()(r.default.getState())),
                      (l = (0, o.formatInitialProduct)(s, c)),
                      (e.next = 6),
                      r.default.dispatch((0, u.default)(l))
                    );
                  case 6:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3171: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(153),
      o = n(42),
      a = n(26);
    t.default = function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return function (t) {
        var n = o.pageSelectors.selectMostRecentPageId()(t),
          i = r.catalogProductsSelectors.selectCurrentCatalogProduct(t) || {},
          u = o.pageSelectors.selectContainerIdByPageId(n)(t),
          s = a.tipsSelectors.selectContainerByContainerId(u)(t) || {},
          c = e.productId === i.productId,
          l = !!s.ready;
        return c && l;
      };
    };
  },
  3172: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(122)),
      o = n(460),
      a = s(n(12)),
      i = n(10),
      u = s(n(1970));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      a.default.addListener(
        "current:product",
        ((e = regeneratorRuntime.mark(function e(t) {
          var n,
            a,
            s,
            c,
            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = l.data),
                      (a = void 0 === n ? {} : n),
                      (s = i.storesSelectors.selectCurrentStoreId()(r.default.getState())),
                      (c = (0, o.formatInitialProductV5)(a, s)),
                      r.default.dispatch((0, u.default)(c));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3173: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(122)),
      o = s(n(15)),
      a = s(n(12)),
      i = n(29),
      u = s(n(3174));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      a.default.addListener(
        "user:current:update",
        ((e = regeneratorRuntime.mark(function e(t) {
          var n,
            a,
            s,
            c,
            l,
            d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = d.user),
                      (a = void 0 === n ? {} : n),
                      (s = r.default.getState()),
                      (c = i.userSelectors.selectUser()(s)),
                      (l = c && a && c.isLoggedIn === a.isLoggedIn && c.id === a.id),
                      o.default.debug("honeyTips:userListener should update:" + !l + " "),
                      (e.t0 = !l),
                      !e.t0)
                    ) {
                      e.next = 9;
                      break;
                    }
                    return (e.next = 9), r.default.dispatch((0, u.default)());
                  case 9:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3174: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = p(n(1567)),
      o = n(42),
      a = n(259),
      i = n(62),
      u = n(1968),
      s = p(n(1973)),
      c = p(n(1969)),
      l = p(n(1971)),
      d = p(n(1974)),
      f = p(n(56));
    function p(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t, n) {
          var p, v, h, g, m, y, _, b;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (r.default.selectCanRunTips(n()).canRunTips) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return");
                  case 3:
                    return (
                      (p = o.pageSelectors.selectCurrentPageId()(n())),
                      (v = o.pageSelectors.selectPageTypesByPageId(p)(n()) || []),
                      (h = v.some(u.isHomePageType)),
                      (g = v.some(u.isProductPageType)),
                      (m = [t((0, c.default)(h))]),
                      (y = o.pageSelectors.selectIsGenericByPageId(p)(n())),
                      g && !y
                        ? (_ = (0, i.selectScrapedProductByPageId)(p)(n())) && m.push(t((0, l.default)(_)))
                        : y && (b = a.genericFetcherSelectors.selectGenericProductByPageId(p)(n())) && m.push(t((0, d.default)(b))),
                      (e.next = 12),
                      Promise.allSettled(m)
                    );
                  case 12:
                    ((0, f.default)(n()) || {}).ready && t((0, s.default)());
                  case 14:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3175: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(122)),
      o = s(n(12)),
      a = n(10),
      i = n(460),
      u = s(n(3176));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      o.default.addListener(
        "current:product:generic",
        ((e = regeneratorRuntime.mark(function e(t) {
          var n,
            o,
            s,
            c,
            l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (n = l.data),
                      (o = void 0 === n ? {} : n),
                      (s = a.storesSelectors.selectCurrentStoreId()(r.default.getState())),
                      (c = (0, i.formatInitialProductGeneric)(o, s)),
                      r.default.dispatch((0, u.default)(c));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3176: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = d(n(1567)),
      o = n(42),
      a = n(259),
      i = d(n(1571)),
      u = d(n(813)),
      s = d(n(1572)),
      c = d(n(1974)),
      l = d(n(1967));
    function d(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return (
        (t = regeneratorRuntime.mark(function t(n, d) {
          var f, p, v, h, g;
          return regeneratorRuntime.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), n((0, l.default)());
                  case 2:
                    if (r.default.selectCanRunTips(d()).canRunTips) {
                      t.next = 5;
                      break;
                    }
                    return t.abrupt("return");
                  case 5:
                    if (
                      ((f = o.pageSelectors.selectMostRecentPageId()(d())),
                      (p = o.pageSelectors.selectIsGenericPage(d())),
                      (v = p && !(0, s.default)(d())),
                      p)
                    ) {
                      t.next = 10;
                      break;
                    }
                    return t.abrupt("return");
                  case 10:
                    return (
                      n(a.genericFetcherActions.productFetched({ pageId: f, product: e })),
                      v
                        ? n((0, i.default)())
                        : ((h = o.pageSelectors.selectCurrentPageId()(d())),
                          (g = o.pageSelectors.selectContainerIdByPageId(h)(d())),
                          n(o.pageActions.setContainerId({ containerId: g, pageId: f }))),
                      n(o.pageActions.updateCurrentPage()),
                      (t.next = 15),
                      n((0, c.default)(e))
                    );
                  case 15:
                    n((0, u.default)());
                  case 16:
                  case "end":
                    return t.stop();
                }
            },
            t,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
      var t, n;
    };
  },
  3177: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(122)),
      o = i(n(12)),
      a = i(n(3178));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e;
      o.default.addListener(
        "honeyTips:pdpCoupons:honeyProductCoupons:init",
        ((e = regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    r.default.dispatch((0, a.default)());
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        })
      );
    };
  },
  3178: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(56)),
      o = i(n(1973)),
      a = n(1972);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t, n) {
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), t(a.loadTopProductCoupon);
                  case 2:
                    ((0, r.default)(n()) || {}).ready && t((0, o.default)());
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3179: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(122)),
      o = i(n(12)),
      a = n(335);
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      o.default.addListener("ui:action", function (e, t) {
        r.default.dispatch(a.uiActions.addAction(t));
      });
    };
  },
  3180: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = s(n(122)),
      o = n(460),
      a = s(n(12)),
      i = n(10),
      u = s(n(3181));
    function s(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function () {
      var e, t;
      a.default.addListener(
        "optimus:productDetected",
        ((e = regeneratorRuntime.mark(function e(t, n) {
          var a, s, c, l;
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    (a = (n || {}).data),
                      (s = void 0 === a ? {} : a),
                      (c = i.storesSelectors.selectCurrentStoreId()(r.default.getState())),
                      (l = (0, o.formatInitialProductOptimus)(s, c)),
                      r.default.dispatch((0, u.default)(l));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e, n) {
          return t.apply(this, arguments);
        })
      );
    };
  },
  3181: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = c(n(15)),
      o = n(258),
      a = n(749),
      i = n(42),
      u = n(681),
      s = c(n(1573));
    function c(e) {
      return e && e.__esModule ? e : { default: e };
    }
    t.default = function (e) {
      return (
        (t = regeneratorRuntime.mark(function t(n, c) {
          var l;
          return regeneratorRuntime.wrap(
            function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), n(o.featuresActions.loadFeatures(["tips_use_optimus_product"]));
                  case 2:
                    if (o.featureSelectors.selectFeatureByName("tips_use_optimus_product")(c())) {
                      t.next = 6;
                      break;
                    }
                    return (
                      r.default.debug("honeyTips:handleOptimusProduct: Feature 'tips_use_optimus_product' is disabled. Returning early."),
                      t.abrupt("return")
                    );
                  case 6:
                    if (
                      ((l = i.pageSelectors.selectMostRecentPageId()(c())),
                      n(a.optimusActions.loadProductByPageId({ pageId: l, product: e })),
                      !u.productFetcherSelectors.selectProductByPageId(l)(c()))
                    ) {
                      t.next = 12;
                      break;
                    }
                    return (
                      r.default.debug(
                        "honeyTips:handleOptimusProduct: VIM product is available, which is more likely to be accurate. Returning early."
                      ),
                      t.abrupt("return")
                    );
                  case 12:
                    return (t.next = 14), n((0, s.default)(e));
                  case 14:
                  case "end":
                    return t.stop();
                }
            },
            t,
            void 0
          );
        })),
        (n = function () {
          var e = t.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function (e, t) {
          return n.apply(this, arguments);
        }
      );
      var t, n;
    };
  },
  3182: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = i(n(122)),
      o = n(152),
      a = i(n(3183));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var u,
      s,
      c =
        ((u = regeneratorRuntime.mark(function e() {
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 3), (0, o.waitForUrlChange)();
                  case 3:
                    r.default.dispatch((0, a.default)()), (e.next = 0);
                    break;
                  case 6:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (s = function () {
          var e = u.apply(this, arguments);
          return new Promise(function (t, n) {
            return (function r(o, a) {
              try {
                var i = e[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              t(u);
            })("next");
          });
        }),
        function () {
          return s.apply(this, arguments);
        });
    t.default = c;
  },
  3183: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(42),
      o = n(1957);
    t.default = function () {
      return function (e) {
        e((0, o.cancelHideTipsAfterTimeout)()), e(r.pageActions.pageInit());
      };
    };
  },
  3184: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(69),
      o = n(42),
      a = n(10),
      i = n(132),
      u = n(111),
      s = n(26),
      c = n(258),
      l = n(310);
    t.default = function () {
      return (
        (e = regeneratorRuntime.mark(function e(t) {
          return regeneratorRuntime.wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      t(o.pageActions.pageInit()),
                      (e.next = 3),
                      Promise.all([
                        t(a.storesActions.load()),
                        t(r.experimentsActions.loadVariant(u.CURRENT_TIPS_CONTAINER_EXPERIMENT)),
                        t(i.deviceActions.loadScreenviewId()),
                        t(s.tipsActions.loadSendTipsDebugEventsFlag()),
                        t(c.featuresActions.loadFeatures(Object.values(u.DISABLE_TIPS_DEBUG_EVENT_FEATURES)))
                      ])
                    );
                  case 3:
                    t((0, l.sdataTipsDebugEvent)({ action: "init", debugEvent: "funnel" }));
                  case 4:
                  case "end":
                    return e.stop();
                }
            },
            e,
            void 0
          );
        })),
        (t = function () {
          var t = e.apply(this, arguments);
          return new Promise(function (e, n) {
            return (function r(o, a) {
              try {
                var i = t[o](a),
                  u = i.value;
              } catch (e) {
                return void n(e);
              }
              if (!i.done)
                return Promise.resolve(u).then(
                  function (e) {
                    r("next", e);
                  },
                  function (e) {
                    r("throw", e);
                  }
                );
              e(u);
            })("next");
          });
        }),
        function (e) {
          return t.apply(this, arguments);
        }
      );
      var e, t;
    };
  },
  3185: function (e, t, n) {
    "use strict";
    var r,
      o =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      a =
        ((r = g(
          regeneratorRuntime.mark(function e(t, n) {
            var r, a, l, p, h, g;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (r = n.data), (e.next = 3), c.default.getCurrent();
                    case 3:
                      if (((e.t0 = e.sent), e.t0)) {
                        e.next = 6;
                        break;
                      }
                      e.t0 = {};
                    case 6:
                      if (((a = e.t0), (l = a.id), r)) {
                        e.next = 11;
                        break;
                      }
                      return d.default.error("WhereAmI was handed undefined product info"), e.abrupt("return");
                    case 11:
                      if (((p = o({ store_id: l }, r)), (h = (0, i.default)(p)) === m)) {
                        e.next = 21;
                        break;
                      }
                      return (
                        (m = h),
                        (e.next = 17),
                        s.default
                          .send("stores:action", { action: "getAtlas", data: { atlasPayload: p } }, { background: !0 })
                          .catch(function (e) {
                            d.default.error("Error while getting atlas: " + (e || e.message));
                          })
                      );
                    case 17:
                      (g = e.sent),
                        u.default.dispatch((0, v.default)({ whereAmIPayload: n, atlasProducts: g })),
                        f.default.sendEvent("ext009009", { where_am_i: r, is_initial_observation: y, products: g }),
                        (y = !1);
                    case 21:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })
        )),
        function (e, t) {
          return r.apply(this, arguments);
        }),
      i = h(n(3186)),
      u = h(n(122)),
      s = h(n(12)),
      c = h(n(19)),
      l = h(n(428)),
      d = h(n(15)),
      f = h(n(13)),
      p = h(n(110)),
      v = h(n(3190));
    function h(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function g(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var m = "",
      y = !0;
    s.default.addListener("vims:reportWhereAmI", a),
      s.default.addListener("pageDetected:WHERE_AM_I", function (e, t) {
        var n,
          r = t.frameworkId;
        p.default.getFeatureFlag("ext_run_wai_vim").then(
          ((n = g(
            regeneratorRuntime.mark(function e(t) {
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 2;
                          break;
                        }
                        return e.abrupt("return", {});
                      case 2:
                        return e.abrupt(
                          "return",
                          c.default.getCurrent().then(
                            (function () {
                              var e = g(
                                regeneratorRuntime.mark(function e(t) {
                                  var n = t.id;
                                  return regeneratorRuntime.wrap(
                                    function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (e.next = 2), l.default.getAndRunV5Vim(n, "wai", r);
                                          case 2:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e,
                                    void 0
                                  );
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          )),
          function (e) {
            return n.apply(this, arguments);
          })
        );
      });
  },
  3186: function (e, t, n) {
    "use strict";
    var r = "undefined" != typeof JSON ? JSON : n(3187),
      o =
        Array.isArray ||
        function (e) {
          return "[object Array]" === {}.toString.call(e);
        },
      a =
        Object.keys ||
        function (e) {
          var t =
              Object.prototype.hasOwnProperty ||
              function () {
                return !0;
              },
            n = [];
          for (var r in e) t.call(e, r) && n.push(r);
          return n;
        };
    e.exports = function (e, t) {
      t || (t = {}), "function" == typeof t && (t = { cmp: t });
      var n = t.space || "";
      "number" == typeof n && (n = Array(n + 1).join(" "));
      var i,
        u = "boolean" == typeof t.cycles && t.cycles,
        s =
          t.replacer ||
          function (e, t) {
            return t;
          },
        c =
          t.cmp &&
          ((i = t.cmp),
          function (e) {
            return function (t, n) {
              var r = { key: t, value: e[t] },
                o = { key: n, value: e[n] };
              return i(r, o);
            };
          }),
        l = [];
      return (function e(t, i, d, f) {
        var p = n ? "\n" + new Array(f + 1).join(n) : "",
          v = n ? ": " : ":";
        if ((d && d.toJSON && "function" == typeof d.toJSON && (d = d.toJSON()), void 0 !== (d = s.call(t, i, d)))) {
          if ("object" != typeof d || null === d) return r.stringify(d);
          if (o(d)) {
            for (var h = [], g = 0; g < d.length; g++) {
              var m = e(d, g, d[g], f + 1) || r.stringify(null);
              h.push(p + n + m);
            }
            return "[" + h.join(",") + p + "]";
          }
          if (-1 !== l.indexOf(d)) {
            if (u) return r.stringify("__cycle__");
            throw new TypeError("Converting circular structure to JSON");
          }
          l.push(d);
          var y = a(d).sort(c && c(d));
          for (h = [], g = 0; g < y.length; g++) {
            var _ = e(d, (i = y[g]), d[i], f + 1);
            if (_) {
              var b = r.stringify(i) + v + _;
              h.push(p + n + b);
            }
          }
          return l.splice(l.indexOf(d), 1), "{" + h.join(",") + p + "}";
        }
      })({ "": e }, "", e, 0);
    };
  },
  3187: function (e, t, n) {
    "use strict";
    (t.parse = n(3188)), (t.stringify = n(3189));
  },
  3188: function (e, t, n) {
    "use strict";
    var r,
      o,
      a,
      i = { '"': '"', "\\": "\\", "/": "/", b: "\b", f: "\f", n: "\n", r: "\r", t: "\t" };
    function u(e) {
      throw { name: "SyntaxError", message: e, at: r, text: a };
    }
    function s(e) {
      return e && e !== o && u("Expected '" + e + "' instead of '" + o + "'"), (o = a.charAt(r)), (r += 1), o;
    }
    function c() {
      var e,
        t = "";
      for ("-" === o && ((t = "-"), s("-")); o >= "0" && o <= "9"; ) (t += o), s();
      if ("." === o) for (t += "."; s() && o >= "0" && o <= "9"; ) t += o;
      if ("e" === o || "E" === o) for (t += o, s(), ("-" !== o && "+" !== o) || ((t += o), s()); o >= "0" && o <= "9"; ) (t += o), s();
      return (e = Number(t)), isFinite(e) || u("Bad number"), e;
    }
    function l() {
      var e,
        t,
        n,
        r = "";
      if ('"' === o)
        for (; s(); ) {
          if ('"' === o) return s(), r;
          if ("\\" === o)
            if ((s(), "u" === o)) {
              for (n = 0, t = 0; t < 4 && ((e = parseInt(s(), 16)), isFinite(e)); t += 1) n = 16 * n + e;
              r += String.fromCharCode(n);
            } else {
              if ("string" != typeof i[o]) break;
              r += i[o];
            }
          else r += o;
        }
      u("Bad string");
    }
    function d() {
      for (; o && o <= " "; ) s();
    }
    function f() {
      switch ((d(), o)) {
        case "{":
          return (function () {
            var e,
              t = {};
            if ("{" === o) {
              if ((s("{"), d(), "}" === o)) return s("}"), t;
              for (; o; ) {
                if (
                  ((e = l()),
                  d(),
                  s(":"),
                  Object.prototype.hasOwnProperty.call(t, e) && u('Duplicate key "' + e + '"'),
                  (t[e] = f()),
                  d(),
                  "}" === o)
                )
                  return s("}"), t;
                s(","), d();
              }
            }
            u("Bad object");
          })();
        case "[":
          return (function () {
            var e = [];
            if ("[" === o) {
              if ((s("["), d(), "]" === o)) return s("]"), e;
              for (; o; ) {
                if ((e.push(f()), d(), "]" === o)) return s("]"), e;
                s(","), d();
              }
            }
            u("Bad array");
          })();
        case '"':
          return l();
        case "-":
          return c();
        default:
          return o >= "0" && o <= "9"
            ? c()
            : (function () {
                switch (o) {
                  case "t":
                    return s("t"), s("r"), s("u"), s("e"), !0;
                  case "f":
                    return s("f"), s("a"), s("l"), s("s"), s("e"), !1;
                  case "n":
                    return s("n"), s("u"), s("l"), s("l"), null;
                  default:
                    u("Unexpected '" + o + "'");
                }
              })();
      }
    }
    e.exports = function (e, t) {
      var n;
      return (
        (a = e),
        (r = 0),
        (o = " "),
        (n = f()),
        d(),
        o && u("Syntax error"),
        "function" == typeof t
          ? (function e(n, r) {
              var o,
                a,
                i = n[r];
              if (i && "object" == typeof i)
                for (o in f) Object.prototype.hasOwnProperty.call(i, o) && (void 0 === (a = e(i, o)) ? delete i[o] : (i[o] = a));
              return t.call(n, r, i);
            })({ "": n }, "")
          : n
      );
    };
  },
  3189: function (e, t, n) {
    "use strict";
    var r,
      o,
      a,
      i = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      u = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" };
    function s(e) {
      return (
        (i.lastIndex = 0),
        i.test(e)
          ? '"' +
            e.replace(i, function (e) {
              var t = u[e];
              return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4);
            }) +
            '"'
          : '"' + e + '"'
      );
    }
    e.exports = function (e, t, n) {
      var i;
      if (((r = ""), (o = ""), "number" == typeof n)) for (i = 0; i < n; i += 1) o += " ";
      else "string" == typeof n && (o = n);
      if (((a = t), t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)))
        throw new Error("JSON.stringify");
      return (function e(t, n) {
        var i,
          u,
          c,
          l,
          d,
          f = r,
          p = n[t];
        switch (
          (p && "object" == typeof p && "function" == typeof p.toJSON && (p = p.toJSON(t)),
          "function" == typeof a && (p = a.call(n, t, p)),
          typeof p)
        ) {
          case "string":
            return s(p);
          case "number":
            return isFinite(p) ? String(p) : "null";
          case "boolean":
          case "null":
            return String(p);
          case "object":
            if (!p) return "null";
            if (((r += o), (d = []), "[object Array]" === Object.prototype.toString.apply(p))) {
              for (l = p.length, i = 0; i < l; i += 1) d[i] = e(i, p) || "null";
              return (c = 0 === d.length ? "[]" : r ? "[\n" + r + d.join(",\n" + r) + "\n" + f + "]" : "[" + d.join(",") + "]"), (r = f), c;
            }
            if (a && "object" == typeof a)
              for (l = a.length, i = 0; i < l; i += 1)
                "string" == typeof (u = a[i]) && (c = e(u, p)) && d.push(s(u) + (r ? ": " : ":") + c);
            else for (u in p) Object.prototype.hasOwnProperty.call(p, u) && (c = e(u, p)) && d.push(s(u) + (r ? ": " : ":") + c);
            return (c = 0 === d.length ? "{}" : r ? "{\n" + r + d.join(",\n" + r) + "\n" + f + "}" : "{" + d.join(",") + "}"), (r = f), c;
        }
      })("", { "": e });
    };
  },
  3190: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        },
      o = b(n(1943)),
      a = b(n(71)),
      i = n(111),
      u = n(238),
      s = b(n(22)),
      c = b(n(15)),
      l = b(n(12)),
      d = n(42),
      f = n(1450),
      p = n(10),
      v = n(69),
      h = n(681),
      g = n(749),
      m = n(1953),
      y = n(310),
      _ = b(n(1573));
    function b(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function S(e) {
      return function () {
        var t = e.apply(this, arguments);
        return new Promise(function (e, n) {
          return (function r(o, a) {
            try {
              var i = t[o](a),
                u = i.value;
            } catch (e) {
              return void n(e);
            }
            if (!i.done)
              return Promise.resolve(u).then(
                function (e) {
                  r("next", e);
                },
                function (e) {
                  r("throw", e);
                }
              );
            e(u);
          })("next");
        });
      };
    }
    var O = "honeyTips:handleWhereAmI: ",
      x = function () {
        return (
          (e = S(
            regeneratorRuntime.mark(function e(t, n) {
              var r;
              return regeneratorRuntime.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t(v.experimentsActions.loadVariant(i.CURRENT_TIPS_CONTAINER_EXPERIMENT));
                      case 2:
                        return (
                          (r = v.experimentSelectors.selectVariant(i.CURRENT_TIPS_CONTAINER_EXPERIMENT)(n())),
                          e.abrupt("return", r === i.TIPS_CONTAINER_VARIANTS.PF_ENABLED_WAI_DISABLED)
                        );
                      case 4:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                void 0
              );
            })
          )),
          function (t, n) {
            return e.apply(this, arguments);
          }
        );
        var e;
      },
      w = function (e) {
        var t = e.parentId,
          n = e.storeId,
          r = e.priceInCents;
        return l.default.send(
          "honeyTips:tips",
          { action: a.default.TIPS_GET_BEST_MATCH_INVENTORY_PRODUCT, parentId: t, storeId: n, priceInCents: r },
          { background: !0 }
        );
      };
    function E(e, t) {
      if (!e || !t) return !1;
      var n = e === t,
        r = e.includes(t),
        o = t.includes(e);
      return n || r || o;
    }
    var T = function (e) {
        var t = (0, m.getProdData)().prodData,
          n = t && t.canonical_url,
          r = window && window.location && window.location.href,
          o = e.canonicalUrl,
          a = E(n, o),
          i = E(r, o),
          u = a || i;
        return (
          u ||
            c.default.debug(
              O + " canonicalUrl does not match page\n           url=" + r + ", canonicalUrl=" + n + ", inventoryProductCanonicalUrl=" + o
            ),
          { isCanonicalMatch: u, pageCanonicalUrl: n, catalogCanonicalUrl: o, pageUrl: r }
        );
      },
      P = function (e) {
        return function (t, n) {
          return h.productFetcherSelectors.selectProductByPageId(e)(n())
            ? (c.default.debug(
                O + "VIM product is available, which is likely to be more accurate. No need for whereAmI handler to continue."
              ),
              !0)
            : !!g.optimusSelectors.selectProductByPageId(e)(n()) &&
                (c.default.debug(
                  O + "Optimus product is available, which is likely to be more accurate. No need for whereAmI handler to continue."
                ),
                !0);
        };
      },
      j = function (e) {
        if (!e) return null;
        var t = s.default.cleanPrice(e);
        return parseInt((100 * t).toFixed(), 10);
      };
    t.default = function (e) {
      var t,
        n = e.whereAmIPayload,
        a = e.atlasProducts;
      return (
        (t = S(
          regeneratorRuntime.mark(function e(t, i) {
            var s, l, h, g, m, b, S, E, I, C, R, k, A, M, N, D;
            return regeneratorRuntime.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), t(x());
                    case 2:
                      if (!e.sent) {
                        e.next = 5;
                        break;
                      }
                      return c.default.debug(O + "whereAmI handling is disabled."), e.abrupt("return");
                    case 5:
                      if (
                        ((s = d.pageSelectors.selectMostRecentPageId()(i())),
                        (l = p.storesSelectors.selectCurrentStoreId()(i())),
                        (h = (0, o.default)(a || [], "score") || {}),
                        (g = h.parentId))
                      ) {
                        e.next = 11;
                        break;
                      }
                      return c.default.debug(O + "whereAmI did not find a parentId. Returning early."), e.abrupt("return");
                    case 11:
                      if (
                        ((m = (n && n.data) || {}),
                        (b = m.price),
                        (S = j(b)),
                        t(f.whereAmIActions.loadByPageId({ pageId: s, parentId: g, whereAmIPayload: n, priceInCents: S, storeId: l })),
                        !t(P(s)))
                      ) {
                        e.next = 16;
                        break;
                      }
                      return e.abrupt("return");
                    case 16:
                      return (e.next = 18), w({ parentId: g, storeId: l, priceInCents: S });
                    case 18:
                      if ((E = e.sent)) {
                        e.next = 24;
                        break;
                      }
                      return (
                        c.default.debug(O + "no matching inventory product found for parentId=" + g + ", storeId=" + l + "."),
                        (I = { parentId: g, storeId: l }),
                        t((0, y.sdataTipsCatalogDebugEvent)(r({}, I, { action: "atlas_catalog_missing" }), { skipSessionCheck: !0 })),
                        e.abrupt("return")
                      );
                    case 24:
                      if (
                        ((C = "on" === v.experimentSelectors.selectVariant(u.EXT_ATLAS_MISMATCH)(i())),
                        (R = T(E)),
                        (k = R.isCanonicalMatch),
                        (A = R.pageCanonicalUrl),
                        (M = R.pageUrl),
                        k)
                      ) {
                        e.next = 32;
                        break;
                      }
                      if (
                        (c.default.debug(
                          O + " canonicalUrl does not match page parentId=" + g + ", storeId=" + l + ", isAtlasMismatchOn=" + C
                        ),
                        (N = {
                          productId: E.productId,
                          parentId: E.parentId,
                          variantId: E.variantId,
                          storeId: E.storeId,
                          catalogPrice: E.lastPrice,
                          title: E.title,
                          canonicalUrl: E.canonicalUrl,
                          pageCanonicalUrl: A,
                          pageUrl: M,
                          isAtlasMismatchOn: C
                        }),
                        t((0, y.sdataTipsCatalogDebugEvent)(r({}, N, { action: "atlas_url_mismatch" }), { skipSessionCheck: !0 })),
                        !C)
                      ) {
                        e.next = 32;
                        break;
                      }
                      return e.abrupt("return");
                    case 32:
                      if ((t(f.whereAmIActions.setBestMatchProductForPage({ pageId: s, product: E })), !t(P(s)))) {
                        e.next = 35;
                        break;
                      }
                      return e.abrupt("return");
                    case 35:
                      (D = f.whereAmISelectors.selectProductByPageId(s)(i())), t((0, _.default)(D));
                    case 37:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              void 0
            );
          })
        )),
        function (e, n) {
          return t.apply(this, arguments);
        }
      );
    };
  },
  3191: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
      };
    (t.default = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (a) throw new Error("Sentry has already been initialized");
      e.init(
        r({}, t, {
          dsn: "https://3b4bb33e1dfc432c9ccd9f9ce5a4bd25@o197999.ingest.sentry.io/6008007",
          integrations: [new o.Integrations.BrowserTracing()],
          release: "honey-extension@16.3.4",
          attachStacktrace: !0,
          autoSessionTracking: !1
        })
      ),
        (a = e);
    }),
      (t.convertIntoErrorObject = function (e, t, n, r) {
        var o = new Error(t);
        o.stack = n;
        var a = Object.getPrototypeOf(o);
        if (((a.name = e), Object.setPrototypeOf(o, a), r)) {
          var i = void 0;
          for (i in r) r[i] && (o[i] = r[i]);
        }
        return o;
      });
    var o = n(3196),
      a = void 0;
  },
  3192: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(12),
      a = (r = o) && r.__esModule ? r : { default: r };
    var i = {
      beforeSend: function (e, t) {
        return (
          t.originalException &&
            a.default.send(
              "sentry:action",
              {
                action: "sendJSONtoCDN",
                error: t.originalException.message,
                stack: t.originalException.stack,
                name: Object.getPrototypeOf(t.originalException).name,
                breadcrumbs: e.breadcrumbs,
                tags: e.tags
              },
              { background: !0 }
            ),
          null
        );
      },
      initialScope: { tags: { Source: "Content-Script" } }
    };
    t.default = i;
  },
  3195: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "Severity", function () {
        return s;
      }),
      n.d(t, "addGlobalEventProcessor", function () {
        return f.b;
      }),
      n.d(t, "addBreadcrumb", function () {
        return O;
      }),
      n.d(t, "captureException", function () {
        return y;
      }),
      n.d(t, "captureEvent", function () {
        return b;
      }),
      n.d(t, "captureMessage", function () {
        return _;
      }),
      n.d(t, "configureScope", function () {
        return S;
      }),
      n.d(t, "getHubFromCarrier", function () {
        return g.c;
      }),
      n.d(t, "getCurrentHub", function () {
        return g.b;
      }),
      n.d(t, "Hub", function () {
        return g.a;
      }),
      n.d(t, "makeMain", function () {
        return g.e;
      }),
      n.d(t, "Scope", function () {
        return f.a;
      }),
      n.d(t, "Session", function () {
        return R.a;
      }),
      n.d(t, "startTransaction", function () {
        return C;
      }),
      n.d(t, "SDK_VERSION", function () {
        return k;
      }),
      n.d(t, "setContext", function () {
        return x;
      }),
      n.d(t, "setExtra", function () {
        return T;
      }),
      n.d(t, "setExtras", function () {
        return w;
      }),
      n.d(t, "setTag", function () {
        return P;
      }),
      n.d(t, "setTags", function () {
        return E;
      }),
      n.d(t, "setUser", function () {
        return j;
      }),
      n.d(t, "withScope", function () {
        return I;
      }),
      n.d(t, "BrowserClient", function () {
        return Pt;
      }),
      n.d(t, "injectReportDialog", function () {
        return gt;
      }),
      n.d(t, "eventFromException", function () {
        return He;
      }),
      n.d(t, "eventFromMessage", function () {
        return Ge;
      }),
      n.d(t, "defaultIntegrations", function () {
        return Zt;
      }),
      n.d(t, "forceLoad", function () {
        return rn;
      }),
      n.d(t, "init", function () {
        return en;
      }),
      n.d(t, "lastEventId", function () {
        return nn;
      }),
      n.d(t, "onLoad", function () {
        return on;
      }),
      n.d(t, "showReportDialog", function () {
        return tn;
      }),
      n.d(t, "flush", function () {
        return an;
      }),
      n.d(t, "close", function () {
        return un;
      }),
      n.d(t, "wrap", function () {
        return sn;
      }),
      n.d(t, "SDK_NAME", function () {
        return ln;
      }),
      n.d(t, "Integrations", function () {
        return pn;
      }),
      n.d(t, "Transports", function () {
        return a;
      });
    var r = {};
    n.r(r),
      n.d(r, "FunctionToString", function () {
        return jt;
      }),
      n.d(r, "InboundFilters", function () {
        return Ct;
      });
    var o = {};
    n.r(o),
      n.d(o, "GlobalHandlers", function () {
        return Bt;
      }),
      n.d(o, "TryCatch", function () {
        return Mt;
      }),
      n.d(o, "Breadcrumbs", function () {
        return St;
      }),
      n.d(o, "LinkedErrors", function () {
        return Wt;
      }),
      n.d(o, "UserAgent", function () {
        return Qt;
      }),
      n.d(o, "Dedupe", function () {
        return Vt;
      });
    var a = {};
    n.r(a),
      n.d(a, "BaseTransport", function () {
        return it;
      }),
      n.d(a, "FetchTransport", function () {
        return ut;
      }),
      n.d(a, "XHRTransport", function () {
        return ct;
      }),
      n.d(a, "makeNewFetchTransport", function () {
        return rt;
      }),
      n.d(a, "makeNewXHRTransport", function () {
        return st;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var i = function (e, t) {
      return (i =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function u(e, t) {
      function n() {
        this.constructor = e;
      }
      i(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    var s,
      c = function () {
        return (c =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
    function l(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        a = n.call(e),
        i = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (o) throw o.error;
        }
      }
      return i;
    }
    function d() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(l(arguments[t]));
      return e;
    }
    !(function (e) {
      (e.Fatal = "fatal"),
        (e.Error = "error"),
        (e.Warning = "warning"),
        (e.Log = "log"),
        (e.Info = "info"),
        (e.Debug = "debug"),
        (e.Critical = "critical");
    })(s || (s = {}));
    var f = n(817);
    var p = function () {
      return (p =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function v(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        a = n.call(e),
        i = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (o) throw o.error;
        }
      }
      return i;
    }
    function h() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(v(arguments[t]));
      return e;
    }
    var g = n(488);
    function m(e) {
      for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Object(g.b)();
      if (r && r[e]) return r[e].apply(r, h(t));
      throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.");
    }
    function y(e, t) {
      return m("captureException", e, {
        captureContext: t,
        originalException: e,
        syntheticException: new Error("Sentry syntheticException")
      });
    }
    function _(e, t) {
      var n = new Error(e);
      return m(
        "captureMessage",
        e,
        "string" == typeof t ? t : void 0,
        p({ originalException: e, syntheticException: n }, "string" != typeof t ? { captureContext: t } : void 0)
      );
    }
    function b(e) {
      return m("captureEvent", e);
    }
    function S(e) {
      m("configureScope", e);
    }
    function O(e) {
      m("addBreadcrumb", e);
    }
    function x(e, t) {
      m("setContext", e, t);
    }
    function w(e) {
      m("setExtras", e);
    }
    function E(e) {
      m("setTags", e);
    }
    function T(e, t) {
      m("setExtra", e, t);
    }
    function P(e, t) {
      m("setTag", e, t);
    }
    function j(e) {
      m("setUser", e);
    }
    function I(e) {
      m("withScope", e);
    }
    function C(e, t) {
      return m("startTransaction", p({}, e), t);
    }
    var R = n(1981),
      k = "6.19.7";
    var A = function () {
      return (A =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function M(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
          }
        };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function N(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        a = n.call(e),
        i = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (o) throw o.error;
        }
      }
      return i;
    }
    function D() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(N(arguments[t]));
      return e;
    }
    var L = n(59),
      U =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array
          ? function (e, t) {
              return (e.__proto__ = t), e;
            }
          : function (e, t) {
              for (var n in t) Object.prototype.hasOwnProperty.call(e, n) || (e[n] = t[n]);
              return e;
            });
    var B = (function (e) {
        function t(t) {
          var n = this.constructor,
            r = e.call(this, t) || this;
          return (r.message = t), (r.name = n.prototype.constructor.name), U(r, n.prototype), r;
        }
        return Object(L.b)(t, e), t;
      })(Error),
      F = n(268),
      H = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/;
    function G(e, t) {
      void 0 === t && (t = !1);
      var n = e.host,
        r = e.path,
        o = e.pass,
        a = e.port,
        i = e.projectId;
      return e.protocol + "://" + e.publicKey + (t && o ? ":" + o : "") + "@" + n + (a ? ":" + a : "") + "/" + (r ? r + "/" : r) + i;
    }
    function q(e) {
      return (
        "user" in e && !("publicKey" in e) && (e.publicKey = e.user),
        {
          user: e.publicKey || "",
          protocol: e.protocol,
          publicKey: e.publicKey || "",
          pass: e.pass || "",
          host: e.host,
          port: e.port || "",
          path: e.path || "",
          projectId: e.projectId
        }
      );
    }
    function Y(e) {
      var t =
        "string" == typeof e
          ? (function (e) {
              var t = H.exec(e);
              if (!t) throw new B("Invalid Sentry Dsn: " + e);
              var n = Object(L.c)(t.slice(1), 6),
                r = n[0],
                o = n[1],
                a = n[2],
                i = void 0 === a ? "" : a,
                u = n[3],
                s = n[4],
                c = void 0 === s ? "" : s,
                l = "",
                d = n[5],
                f = d.split("/");
              if ((f.length > 1 && ((l = f.slice(0, -1).join("/")), (d = f.pop())), d)) {
                var p = d.match(/^\d+/);
                p && (d = p[0]);
              }
              return q({ host: u, pass: i, path: l, projectId: d, port: c, protocol: r, publicKey: o });
            })(e)
          : q(e);
      return (
        (function (e) {
          if (F.a) {
            var t = e.port,
              n = e.projectId,
              r = e.protocol;
            if (
              (["protocol", "publicKey", "host", "projectId"].forEach(function (t) {
                if (!e[t]) throw new B("Invalid Sentry Dsn: " + t + " missing");
              }),
              !n.match(/^\d+$/))
            )
              throw new B("Invalid Sentry Dsn: Invalid projectId " + n);
            if (
              !(function (e) {
                return "http" === e || "https" === e;
              })(r)
            )
              throw new B("Invalid Sentry Dsn: Invalid protocol " + r);
            if (t && isNaN(parseInt(t, 10))) throw new B("Invalid Sentry Dsn: Invalid port " + t);
          }
        })(t),
        t
      );
    }
    var W = n(723),
      V = n(79),
      z = n(77),
      X = n(722),
      K = n(270),
      J = n(3198),
      $ = n(446),
      Q = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      Z = n(131),
      ee = [];
    function te(e) {
      return e.reduce(function (e, t) {
        return (
          e.every(function (e) {
            return t.name !== e.name;
          }) && e.push(t),
          e
        );
      }, []);
    }
    function ne(e) {
      var t = {};
      return (
        (function (e) {
          var t = (e.defaultIntegrations && D(e.defaultIntegrations)) || [],
            n = e.integrations,
            r = D(te(t));
          Array.isArray(n)
            ? (r = D(
                r.filter(function (e) {
                  return n.every(function (t) {
                    return t.name !== e.name;
                  });
                }),
                te(n)
              ))
            : "function" == typeof n && ((r = n(r)), (r = Array.isArray(r) ? r : [r]));
          var o = r.map(function (e) {
            return e.name;
          });
          return -1 !== o.indexOf("Debug") && r.push.apply(r, D(r.splice(o.indexOf("Debug"), 1))), r;
        })(e).forEach(function (e) {
          (t[e.name] = e),
            (function (e) {
              -1 === ee.indexOf(e.name) && (e.setupOnce(f.b, g.b), ee.push(e.name), Q && V.c.log("Integration installed: " + e.name));
            })(e);
        }),
        Object(Z.a)(t, "initialized", !0),
        t
      );
    }
    var re = "Not capturing exception because it's already been captured.",
      oe = (function () {
        function e(e, t) {
          (this._integrations = {}),
            (this._numProcessing = 0),
            (this._backend = new e(t)),
            (this._options = t),
            t.dsn && (this._dsn = Y(t.dsn));
        }
        return (
          (e.prototype.captureException = function (e, t, n) {
            var r = this;
            if (!Object(W.c)(e)) {
              var o = t && t.event_id;
              return (
                this._process(
                  this._getBackend()
                    .eventFromException(e, t)
                    .then(function (e) {
                      return r._captureEvent(e, t, n);
                    })
                    .then(function (e) {
                      o = e;
                    })
                ),
                o
              );
            }
            Q && V.c.log(re);
          }),
          (e.prototype.captureMessage = function (e, t, n, r) {
            var o = this,
              a = n && n.event_id,
              i = Object(z.j)(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
            return (
              this._process(
                i
                  .then(function (e) {
                    return o._captureEvent(e, n, r);
                  })
                  .then(function (e) {
                    a = e;
                  })
              ),
              a
            );
          }),
          (e.prototype.captureEvent = function (e, t, n) {
            if (!(t && t.originalException && Object(W.c)(t.originalException))) {
              var r = t && t.event_id;
              return (
                this._process(
                  this._captureEvent(e, t, n).then(function (e) {
                    r = e;
                  })
                ),
                r
              );
            }
            Q && V.c.log(re);
          }),
          (e.prototype.captureSession = function (e) {
            this._isEnabled()
              ? "string" != typeof e.release
                ? Q && V.c.warn("Discarded session because of missing or non-string release")
                : (this._sendSession(e), e.update({ init: !1 }))
              : Q && V.c.warn("SDK not enabled, will not capture session.");
          }),
          (e.prototype.getDsn = function () {
            return this._dsn;
          }),
          (e.prototype.getOptions = function () {
            return this._options;
          }),
          (e.prototype.getTransport = function () {
            return this._getBackend().getTransport();
          }),
          (e.prototype.flush = function (e) {
            var t = this;
            return this._isClientDoneProcessing(e).then(function (n) {
              return t
                .getTransport()
                .close(e)
                .then(function (e) {
                  return n && e;
                });
            });
          }),
          (e.prototype.close = function (e) {
            var t = this;
            return this.flush(e).then(function (e) {
              return (t.getOptions().enabled = !1), e;
            });
          }),
          (e.prototype.setupIntegrations = function () {
            this._isEnabled() && !this._integrations.initialized && (this._integrations = ne(this._options));
          }),
          (e.prototype.getIntegration = function (e) {
            try {
              return this._integrations[e.id] || null;
            } catch (t) {
              return Q && V.c.warn("Cannot retrieve integration " + e.id + " from the current Client"), null;
            }
          }),
          (e.prototype._updateSessionFromEvent = function (e, t) {
            var n,
              r,
              o = !1,
              a = !1,
              i = t.exception && t.exception.values;
            if (i) {
              a = !0;
              try {
                for (var u = M(i), s = u.next(); !s.done; s = u.next()) {
                  var c = s.value.mechanism;
                  if (c && !1 === c.handled) {
                    o = !0;
                    break;
                  }
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  s && !s.done && (r = u.return) && r.call(u);
                } finally {
                  if (n) throw n.error;
                }
              }
            }
            var l = "ok" === e.status;
            ((l && 0 === e.errors) || (l && o)) &&
              (e.update(A(A({}, o && { status: "crashed" }), { errors: e.errors || Number(a || o) })), this.captureSession(e));
          }),
          (e.prototype._sendSession = function (e) {
            this._getBackend().sendSession(e);
          }),
          (e.prototype._isClientDoneProcessing = function (e) {
            var t = this;
            return new X.a(function (n) {
              var r = 0,
                o = setInterval(function () {
                  0 == t._numProcessing ? (clearInterval(o), n(!0)) : ((r += 1), e && r >= e && (clearInterval(o), n(!1)));
                }, 1);
            });
          }),
          (e.prototype._getBackend = function () {
            return this._backend;
          }),
          (e.prototype._isEnabled = function () {
            return !1 !== this.getOptions().enabled && void 0 !== this._dsn;
          }),
          (e.prototype._prepareEvent = function (e, t, n) {
            var r = this,
              o = this.getOptions(),
              a = o.normalizeDepth,
              i = void 0 === a ? 3 : a,
              u = o.normalizeMaxBreadth,
              s = void 0 === u ? 1e3 : u,
              c = A(A({}, e), {
                event_id: e.event_id || (n && n.event_id ? n.event_id : Object(W.g)()),
                timestamp: e.timestamp || Object(K.b)()
              });
            this._applyClientOptions(c), this._applyIntegrationsMetadata(c);
            var l = t;
            n && n.captureContext && (l = f.a.clone(l).update(n.captureContext));
            var d = Object(X.c)(c);
            return (
              l && (d = l.applyToEvent(c, n)),
              d.then(function (e) {
                return (
                  e &&
                    (e.sdkProcessingMetadata = A(A({}, e.sdkProcessingMetadata), {
                      normalizeDepth: Object(J.a)(i) + " (" + typeof i + ")"
                    })),
                  "number" == typeof i && i > 0 ? r._normalizeEvent(e, i, s) : e
                );
              })
            );
          }),
          (e.prototype._normalizeEvent = function (e, t, n) {
            if (!e) return null;
            var r = A(
              A(
                A(
                  A(
                    A({}, e),
                    e.breadcrumbs && {
                      breadcrumbs: e.breadcrumbs.map(function (e) {
                        return A(A({}, e), e.data && { data: Object(J.a)(e.data, t, n) });
                      })
                    }
                  ),
                  e.user && { user: Object(J.a)(e.user, t, n) }
                ),
                e.contexts && { contexts: Object(J.a)(e.contexts, t, n) }
              ),
              e.extra && { extra: Object(J.a)(e.extra, t, n) }
            );
            return (
              e.contexts && e.contexts.trace && (r.contexts.trace = e.contexts.trace),
              (r.sdkProcessingMetadata = A(A({}, r.sdkProcessingMetadata), { baseClientNormalized: !0 })),
              r
            );
          }),
          (e.prototype._applyClientOptions = function (e) {
            var t = this.getOptions(),
              n = t.environment,
              r = t.release,
              o = t.dist,
              a = t.maxValueLength,
              i = void 0 === a ? 250 : a;
            "environment" in e || (e.environment = "environment" in t ? n : "production"),
              void 0 === e.release && void 0 !== r && (e.release = r),
              void 0 === e.dist && void 0 !== o && (e.dist = o),
              e.message && (e.message = Object($.d)(e.message, i));
            var u = e.exception && e.exception.values && e.exception.values[0];
            u && u.value && (u.value = Object($.d)(u.value, i));
            var s = e.request;
            s && s.url && (s.url = Object($.d)(s.url, i));
          }),
          (e.prototype._applyIntegrationsMetadata = function (e) {
            var t = Object.keys(this._integrations);
            t.length > 0 && ((e.sdk = e.sdk || {}), (e.sdk.integrations = D(e.sdk.integrations || [], t)));
          }),
          (e.prototype._sendEvent = function (e) {
            this._getBackend().sendEvent(e);
          }),
          (e.prototype._captureEvent = function (e, t, n) {
            return this._processEvent(e, t, n).then(
              function (e) {
                return e.event_id;
              },
              function (e) {
                Q && V.c.error(e);
              }
            );
          }),
          (e.prototype._processEvent = function (e, t, n) {
            var r = this,
              o = this.getOptions(),
              a = o.beforeSend,
              i = o.sampleRate,
              u = this.getTransport();
            function s(e, t) {
              u.recordLostEvent && u.recordLostEvent(e, t);
            }
            if (!this._isEnabled()) return Object(X.b)(new B("SDK not enabled, will not capture event."));
            var c = "transaction" === e.type;
            return !c && "number" == typeof i && Math.random() > i
              ? (s("sample_rate", "event"),
                Object(X.b)(new B("Discarding event because it's not included in the random sample (sampling rate = " + i + ")")))
              : this._prepareEvent(e, n, t)
                  .then(function (n) {
                    if (null === n)
                      throw (s("event_processor", e.type || "event"), new B("An event processor returned null, will not send event."));
                    return (t && t.data && !0 === t.data.__sentry__) || c || !a
                      ? n
                      : (function (e) {
                          var t = "`beforeSend` method has to return `null` or a valid event.";
                          if (Object(z.n)(e))
                            return e.then(
                              function (e) {
                                if (!Object(z.i)(e) && null !== e) throw new B(t);
                                return e;
                              },
                              function (e) {
                                throw new B("beforeSend rejected with " + e);
                              }
                            );
                          if (!Object(z.i)(e) && null !== e) throw new B(t);
                          return e;
                        })(a(n, t));
                  })
                  .then(function (t) {
                    if (null === t)
                      throw (s("before_send", e.type || "event"), new B("`beforeSend` returned `null`, will not send event."));
                    var o = n && n.getSession && n.getSession();
                    return !c && o && r._updateSessionFromEvent(o, t), r._sendEvent(t), t;
                  })
                  .then(null, function (e) {
                    if (e instanceof B) throw e;
                    throw (
                      (r.captureException(e, { data: { __sentry__: !0 }, originalException: e }),
                      new B(
                        "Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " +
                          e
                      ))
                    );
                  });
          }),
          (e.prototype._process = function (e) {
            var t = this;
            (this._numProcessing += 1),
              e.then(
                function (e) {
                  return (t._numProcessing -= 1), e;
                },
                function (e) {
                  return (t._numProcessing -= 1), e;
                }
              );
          }),
          e
        );
      })();
    var ae = n(130);
    !(function () {
      function e(e, t, n) {
        void 0 === t && (t = {}), (this.dsn = e), (this._dsnObject = Y(e)), (this.metadata = t), (this._tunnel = n);
      }
      (e.prototype.getDsn = function () {
        return this._dsnObject;
      }),
        (e.prototype.forceEnvelope = function () {
          return !!this._tunnel;
        }),
        (e.prototype.getBaseApiEndpoint = function () {
          return ue(this._dsnObject);
        }),
        (e.prototype.getStoreEndpoint = function () {
          return le(this._dsnObject);
        }),
        (e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
          return de(this._dsnObject);
        }),
        (e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
          return fe(this._dsnObject, this._tunnel);
        });
    })();
    function ie(e, t, n) {
      return { initDsn: e, metadata: t || {}, dsn: Y(e), tunnel: n };
    }
    function ue(e) {
      var t = e.protocol ? e.protocol + ":" : "",
        n = e.port ? ":" + e.port : "";
      return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/";
    }
    function se(e, t) {
      return "" + ue(e) + e.projectId + "/" + t + "/";
    }
    function ce(e) {
      return Object(Z.h)({ sentry_key: e.publicKey, sentry_version: "7" });
    }
    function le(e) {
      return se(e, "store");
    }
    function de(e) {
      return le(e) + "?" + ce(e);
    }
    function fe(e, t) {
      return (
        t ||
        (function (e) {
          return se(e, "envelope");
        })(e) +
          "?" +
          ce(e)
      );
    }
    function pe(e, t) {
      return void 0 === t && (t = []), [e, t];
    }
    function ve(e) {
      var t = Object(L.c)(e, 2),
        n = t[0],
        r = t[1],
        o = JSON.stringify(n);
      return r.reduce(function (e, t) {
        var n = Object(L.c)(t, 2),
          r = n[0],
          o = n[1],
          a = Object(z.j)(o) ? String(o) : JSON.stringify(o);
        return e + "\n" + JSON.stringify(r) + "\n" + a;
      }, o);
    }
    function he(e) {
      if (e.metadata && e.metadata.sdk) {
        var t = e.metadata.sdk;
        return { name: t.name, version: t.version };
      }
    }
    function ge(e, t) {
      return t
        ? ((e.sdk = e.sdk || {}),
          (e.sdk.name = e.sdk.name || t.name),
          (e.sdk.version = e.sdk.version || t.version),
          (e.sdk.integrations = D(e.sdk.integrations || [], t.integrations || [])),
          (e.sdk.packages = D(e.sdk.packages || [], t.packages || [])),
          e)
        : e;
    }
    function me(e, t) {
      var n = he(t),
        r = "aggregates" in e ? "sessions" : "session";
      return [pe(A(A({ sent_at: new Date().toISOString() }, n && { sdk: n }), !!t.tunnel && { dsn: G(t.dsn) }), [[{ type: r }, e]]), r];
    }
    var ye = (function () {
        function e() {}
        return (
          (e.prototype.sendEvent = function (e) {
            return Object(X.c)({ reason: "NoopTransport: Event has been skipped because no Dsn is configured.", status: "skipped" });
          }),
          (e.prototype.close = function (e) {
            return Object(X.c)(!0);
          }),
          e
        );
      })(),
      _e = (function () {
        function e(e) {
          (this._options = e),
            this._options.dsn || (Q && V.c.warn("No DSN provided, backend will not do anything.")),
            (this._transport = this._setupTransport());
        }
        return (
          (e.prototype.eventFromException = function (e, t) {
            throw new B("Backend has to implement `eventFromException` method");
          }),
          (e.prototype.eventFromMessage = function (e, t, n) {
            throw new B("Backend has to implement `eventFromMessage` method");
          }),
          (e.prototype.sendEvent = function (e) {
            if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
              var t = (function (e, t) {
                var n = he(t),
                  r = e.type || "event",
                  o = (e.sdkProcessingMetadata || {}).transactionSampling || {},
                  a = o.method,
                  i = o.rate;
                return (
                  ge(e, t.metadata.sdk),
                  (e.tags = e.tags || {}),
                  (e.extra = e.extra || {}),
                  (e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized) ||
                    ((e.tags.skippedNormalization = !0),
                    (e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset")),
                  delete e.sdkProcessingMetadata,
                  pe(A(A({ event_id: e.event_id, sent_at: new Date().toISOString() }, n && { sdk: n }), !!t.tunnel && { dsn: G(t.dsn) }), [
                    [{ type: r, sample_rates: [{ id: a, rate: i }] }, e]
                  ])
                );
              })(e, ie(this._options.dsn, this._options._metadata, this._options.tunnel));
              this._newTransport.send(t).then(null, function (e) {
                Q && V.c.error("Error while sending event:", e);
              });
            } else
              this._transport.sendEvent(e).then(null, function (e) {
                Q && V.c.error("Error while sending event:", e);
              });
          }),
          (e.prototype.sendSession = function (e) {
            if (this._transport.sendSession)
              if (this._newTransport && this._options.dsn && this._options._experiments && this._options._experiments.newTransport) {
                var t = N(me(e, ie(this._options.dsn, this._options._metadata, this._options.tunnel)), 1)[0];
                this._newTransport.send(t).then(null, function (e) {
                  Q && V.c.error("Error while sending session:", e);
                });
              } else
                this._transport.sendSession(e).then(null, function (e) {
                  Q && V.c.error("Error while sending session:", e);
                });
            else Q && V.c.warn("Dropping session because custom transport doesn't implement sendSession");
          }),
          (e.prototype.getTransport = function () {
            return this._transport;
          }),
          (e.prototype._setupTransport = function () {
            return new ye();
          }),
          e
        );
      })(),
      be = n(1576),
      Se = n(816);
    function Oe(e, t, n, r) {
      var o = { filename: e, function: t, in_app: !0 };
      return void 0 !== n && (o.lineno = n), void 0 !== r && (o.colno = r), o;
    }
    var xe =
        /^\s*at (?:(.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
      we = /\((\S*)(?::(\d+))(?::(\d+))\)/,
      Ee = [
        30,
        function (e) {
          var t = xe.exec(e);
          if (t) {
            if (t[2] && 0 === t[2].indexOf("eval")) {
              var n = we.exec(t[2]);
              n && ((t[2] = n[1]), (t[3] = n[2]), (t[4] = n[3]));
            }
            var r = l(Ne(t[1] || "?", t[2]), 2),
              o = r[0];
            return Oe(r[1], o, t[3] ? +t[3] : void 0, t[4] ? +t[4] : void 0);
          }
        }
      ],
      Te =
        /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
      Pe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
      je = [
        50,
        function (e) {
          var t,
            n = Te.exec(e);
          if (n) {
            if (n[3] && n[3].indexOf(" > eval") > -1) {
              var r = Pe.exec(n[3]);
              r && ((n[1] = n[1] || "eval"), (n[3] = r[1]), (n[4] = r[2]), (n[5] = ""));
            }
            var o = n[3],
              a = n[1] || "?";
            return (a = (t = l(Ne(a, o), 2))[0]), Oe((o = t[1]), a, n[4] ? +n[4] : void 0, n[5] ? +n[5] : void 0);
          }
        }
      ],
      Ie = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
      Ce = [
        40,
        function (e) {
          var t = Ie.exec(e);
          return t ? Oe(t[2], t[1] || "?", +t[3], t[4] ? +t[4] : void 0) : void 0;
        }
      ],
      Re = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,
      ke = [
        10,
        function (e) {
          var t = Re.exec(e);
          return t ? Oe(t[2], t[3] || "?", +t[1]) : void 0;
        }
      ],
      Ae = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,
      Me = [
        20,
        function (e) {
          var t = Ae.exec(e);
          return t ? Oe(t[5], t[3] || t[4] || "?", +t[1], +t[2]) : void 0;
        }
      ],
      Ne = function (e, t) {
        var n = -1 !== e.indexOf("safari-extension"),
          r = -1 !== e.indexOf("safari-web-extension");
        return n || r ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", n ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t];
      };
    function De(e) {
      var t = Ue(e),
        n = { type: e && e.name, value: Fe(e) };
      return t.length && (n.stacktrace = { frames: t }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n;
    }
    function Le(e) {
      return { exception: { values: [De(e)] } };
    }
    function Ue(e) {
      var t = e.stacktrace || e.stack || "",
        n = (function (e) {
          if (e) {
            if ("number" == typeof e.framesToPop) return e.framesToPop;
            if (Be.test(e.message)) return 1;
          }
          return 0;
        })(e);
      try {
        return Object(Se.a)(ke, Me, Ee, Ce, je)(t, n);
      } catch (e) {}
      return [];
    }
    var Be = /Minified React error #\d+;/i;
    function Fe(e) {
      var t = e && e.message;
      return t ? (t.error && "string" == typeof t.error.message ? t.error.message : t) : "No error message";
    }
    function He(e, t, n) {
      var r = qe(e, (t && t.syntheticException) || void 0, n);
      return Object(W.a)(r), (r.level = s.Error), t && t.event_id && (r.event_id = t.event_id), Object(X.c)(r);
    }
    function Ge(e, t, n, r) {
      void 0 === t && (t = s.Info);
      var o = Ye(e, (n && n.syntheticException) || void 0, r);
      return (o.level = t), n && n.event_id && (o.event_id = n.event_id), Object(X.c)(o);
    }
    function qe(e, t, n, r) {
      var o;
      if (Object(z.e)(e) && e.error) return Le(e.error);
      if (Object(z.a)(e) || Object(z.b)(e)) {
        var a = e;
        if ("stack" in e) o = Le(e);
        else {
          var i = a.name || (Object(z.a)(a) ? "DOMError" : "DOMException"),
            u = a.message ? i + ": " + a.message : i;
          (o = Ye(u, t, n)), Object(W.b)(o, u);
        }
        return "code" in a && (o.tags = c(c({}, o.tags), { "DOMException.code": "" + a.code })), o;
      }
      return Object(z.d)(e)
        ? Le(e)
        : Object(z.i)(e) || Object(z.f)(e)
        ? ((o = (function (e, t, n) {
            var r = {
              exception: {
                values: [
                  {
                    type: Object(z.f)(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(Z.d)(e)
                  }
                ]
              },
              extra: { __serialized__: Object(J.b)(e) }
            };
            if (t) {
              var o = Ue(t);
              o.length && (r.stacktrace = { frames: o });
            }
            return r;
          })(e, t, r)),
          Object(W.a)(o, { synthetic: !0 }),
          o)
        : ((o = Ye(e, t, n)), Object(W.b)(o, "" + e, void 0), Object(W.a)(o, { synthetic: !0 }), o);
    }
    function Ye(e, t, n) {
      var r = { message: e };
      if (n && t) {
        var o = Ue(t);
        o.length && (r.stacktrace = { frames: o });
      }
      return r;
    }
    function We(e) {
      var t = [];
      function n(e) {
        return t.splice(t.indexOf(e), 1)[0];
      }
      return {
        $: t,
        add: function (r) {
          if (!(void 0 === e || t.length < e)) return Object(X.b)(new B("Not adding Promise due to buffer limit reached."));
          var o = r();
          return (
            -1 === t.indexOf(o) && t.push(o),
            o
              .then(function () {
                return n(o);
              })
              .then(null, function () {
                return n(o).then(null, function () {});
              }),
            o
          );
        },
        drain: function (e) {
          return new X.a(function (n, r) {
            var o = t.length;
            if (!o) return n(!0);
            var a = setTimeout(function () {
              e && e > 0 && n(!1);
            }, e);
            t.forEach(function (e) {
              Object(X.c)(e).then(function () {
                --o || (clearTimeout(a), n(!0));
              }, r);
            });
          });
        }
      };
    }
    function Ve(e, t) {
      return e[t] || e.all || 0;
    }
    function ze(e, t, n) {
      return void 0 === n && (n = Date.now()), Ve(e, t) > n;
    }
    function Xe(e, t, n) {
      var r, o, a, i;
      void 0 === n && (n = Date.now());
      var u = Object(L.a)({}, e),
        s = t["x-sentry-rate-limits"],
        c = t["retry-after"];
      if (s)
        try {
          for (var l = Object(L.e)(s.trim().split(",")), d = l.next(); !d.done; d = l.next()) {
            var f = d.value.split(":", 2),
              p = parseInt(f[0], 10),
              v = 1e3 * (isNaN(p) ? 60 : p);
            if (f[1])
              try {
                for (var h = ((a = void 0), Object(L.e)(f[1].split(";"))), g = h.next(); !g.done; g = h.next()) {
                  u[g.value] = n + v;
                }
              } catch (e) {
                a = { error: e };
              } finally {
                try {
                  g && !g.done && (i = h.return) && i.call(h);
                } finally {
                  if (a) throw a.error;
                }
              }
            else u.all = n + v;
          }
        } catch (e) {
          r = { error: e };
        } finally {
          try {
            d && !d.done && (o = l.return) && o.call(l);
          } finally {
            if (r) throw r.error;
          }
        }
      else
        c &&
          (u.all =
            n +
            (function (e, t) {
              void 0 === t && (t = Date.now());
              var n = parseInt("" + e, 10);
              if (!isNaN(n)) return 1e3 * n;
              var r = Date.parse("" + e);
              return isNaN(r) ? 6e4 : r - t;
            })(c, n));
      return u;
    }
    function Ke(e) {
      return e >= 200 && e < 300 ? "success" : 429 === e ? "rate_limit" : e >= 400 && e < 500 ? "invalid" : e >= 500 ? "failed" : "unknown";
    }
    function Je(e, t, n) {
      void 0 === n && (n = We(e.bufferSize || 30));
      var r = {};
      return {
        send: function (e) {
          var o = (function (e) {
              var t = Object(L.c)(e, 2),
                n = Object(L.c)(t[1], 1);
              return Object(L.c)(n[0], 1)[0].type;
            })(e),
            a = "event" === o ? "error" : o,
            i = { category: a, body: ve(e) };
          return ze(r, a)
            ? Object(X.b)({ status: "rate_limit", reason: $e(r, a) })
            : n.add(function () {
                return t(i).then(function (e) {
                  var t = e.body,
                    n = e.headers,
                    o = e.reason,
                    i = Ke(e.statusCode);
                  return (
                    n && (r = Xe(r, n)),
                    "success" === i
                      ? Object(X.c)({ status: i, reason: o })
                      : Object(X.b)({ status: i, reason: o || t || ("rate_limit" === i ? $e(r, a) : "Unknown transport error") })
                  );
                });
              });
        },
        flush: function (e) {
          return n.drain(e);
        }
      };
    }
    function $e(e, t) {
      return "Too many " + t + " requests, backing off until: " + new Date(Ve(e, t)).toISOString();
    }
    var Qe,
      Ze = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      et = Object(ae.a)();
    function tt() {
      if (Qe) return Qe;
      if (Object(be.a)(et.fetch)) return (Qe = et.fetch.bind(et));
      var e = et.document,
        t = et.fetch;
      if (e && "function" == typeof e.createElement)
        try {
          var n = e.createElement("iframe");
          (n.hidden = !0), e.head.appendChild(n);
          var r = n.contentWindow;
          r && r.fetch && (t = r.fetch), e.head.removeChild(n);
        } catch (e) {
          Ze && V.c.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e);
        }
      return (Qe = t.bind(et));
    }
    function nt(e, t) {
      if ("[object Navigator]" === Object.prototype.toString.call(et && et.navigator) && "function" == typeof et.navigator.sendBeacon)
        return et.navigator.sendBeacon.bind(et.navigator)(e, t);
      if (Object(be.b)()) {
        var n = tt();
        n(e, { body: t, method: "POST", credentials: "omit", keepalive: !0 }).then(null, function (e) {
          console.error(e);
        });
      } else;
    }
    function rt(e, t) {
      return (
        void 0 === t && (t = tt()),
        Je({ bufferSize: e.bufferSize }, function (n) {
          var r = c({ body: n.body, method: "POST", referrerPolicy: "origin" }, e.requestOptions);
          return t(e.url, r).then(function (e) {
            return e.text().then(function (t) {
              return {
                body: t,
                headers: { "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"), "retry-after": e.headers.get("Retry-After") },
                reason: e.statusText,
                statusCode: e.status
              };
            });
          });
        })
      );
    }
    function ot(e) {
      return "event" === e ? "error" : e;
    }
    var at = Object(ae.a)(),
      it = (function () {
        function e(e) {
          var t = this;
          (this.options = e),
            (this._buffer = We(30)),
            (this._rateLimits = {}),
            (this._outcomes = {}),
            (this._api = ie(e.dsn, e._metadata, e.tunnel)),
            (this.url = de(this._api.dsn)),
            this.options.sendClientReports &&
              at.document &&
              at.document.addEventListener("visibilitychange", function () {
                "hidden" === at.document.visibilityState && t._flushOutcomes();
              });
        }
        return (
          (e.prototype.sendEvent = function (e) {
            return this._sendRequest(
              (function (e, t) {
                var n,
                  r = he(t),
                  o = e.type || "event",
                  a = "transaction" === o || !!t.tunnel,
                  i = (e.sdkProcessingMetadata || {}).transactionSampling || {},
                  u = i.method,
                  s = i.rate;
                ge(e, t.metadata.sdk),
                  (e.tags = e.tags || {}),
                  (e.extra = e.extra || {}),
                  (e.sdkProcessingMetadata && e.sdkProcessingMetadata.baseClientNormalized) ||
                    ((e.tags.skippedNormalization = !0),
                    (e.extra.normalizeDepth = e.sdkProcessingMetadata ? e.sdkProcessingMetadata.normalizeDepth : "unset")),
                  delete e.sdkProcessingMetadata;
                try {
                  n = JSON.stringify(e);
                } catch (t) {
                  (e.tags.JSONStringifyError = !0), (e.extra.JSONStringifyError = t);
                  try {
                    n = JSON.stringify(Object(J.a)(e));
                  } catch (e) {
                    var c = e;
                    n = JSON.stringify({
                      message: "JSON.stringify error after renormalization",
                      extra: { message: c.message, stack: c.stack }
                    });
                  }
                }
                var l = { body: n, type: o, url: a ? fe(t.dsn, t.tunnel) : de(t.dsn) };
                if (a) {
                  var d = pe(
                    A(A({ event_id: e.event_id, sent_at: new Date().toISOString() }, r && { sdk: r }), !!t.tunnel && { dsn: G(t.dsn) }),
                    [[{ type: o, sample_rates: [{ id: u, rate: s }] }, l.body]]
                  );
                  l.body = ve(d);
                }
                return l;
              })(e, this._api),
              e
            );
          }),
          (e.prototype.sendSession = function (e) {
            return this._sendRequest(
              (function (e, t) {
                var n = N(me(e, t), 2),
                  r = n[0],
                  o = n[1];
                return { body: ve(r), type: o, url: fe(t.dsn, t.tunnel) };
              })(e, this._api),
              e
            );
          }),
          (e.prototype.close = function (e) {
            return this._buffer.drain(e);
          }),
          (e.prototype.recordLostEvent = function (e, t) {
            var n;
            if (this.options.sendClientReports) {
              var r = ot(t) + ":" + e;
              Ze && V.c.log("Adding outcome: " + r), (this._outcomes[r] = (null != (n = this._outcomes[r]) ? n : 0) + 1);
            }
          }),
          (e.prototype._flushOutcomes = function () {
            if (this.options.sendClientReports) {
              var e = this._outcomes;
              if (((this._outcomes = {}), Object.keys(e).length)) {
                Ze && V.c.log("Flushing outcomes:\n" + JSON.stringify(e, null, 2));
                var t,
                  n,
                  r,
                  o = fe(this._api.dsn, this._api.tunnel),
                  a = Object.keys(e).map(function (t) {
                    var n = l(t.split(":"), 2),
                      r = n[0];
                    return { reason: n[1], category: r, quantity: e[t] };
                  }),
                  i =
                    ((t = a),
                    pe((n = this._api.tunnel && G(this._api.dsn)) ? { dsn: n } : {}, [
                      [{ type: "client_report" }, { timestamp: r || Object(K.b)(), discarded_events: t }]
                    ]));
                try {
                  nt(o, ve(i));
                } catch (e) {
                  Ze && V.c.error(e);
                }
              } else Ze && V.c.log("No outcomes to flush");
            }
          }),
          (e.prototype._handleResponse = function (e) {
            var t = e.requestType,
              n = e.response,
              r = e.headers,
              o = e.resolve,
              a = e.reject,
              i = Ke(n.status);
            (this._rateLimits = Xe(this._rateLimits, r)),
              this._isRateLimited(t) && Ze && V.c.warn("Too many " + t + " requests, backing off until: " + this._disabledUntil(t)),
              "success" !== i ? a(n) : o({ status: i });
          }),
          (e.prototype._disabledUntil = function (e) {
            var t = ot(e);
            return new Date(Ve(this._rateLimits, t));
          }),
          (e.prototype._isRateLimited = function (e) {
            var t = ot(e);
            return ze(this._rateLimits, t);
          }),
          e
        );
      })(),
      ut = (function (e) {
        function t(t, n) {
          void 0 === n && (n = tt());
          var r = e.call(this, t) || this;
          return (r._fetch = n), r;
        }
        return (
          u(t, e),
          (t.prototype._sendRequest = function (e, t) {
            var n = this;
            if (this._isRateLimited(e.type))
              return (
                this.recordLostEvent("ratelimit_backoff", e.type),
                Promise.reject({
                  event: t,
                  type: e.type,
                  reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                  status: 429
                })
              );
            var r = { body: e.body, method: "POST", referrerPolicy: Object(be.e)() ? "origin" : "" };
            return (
              void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters),
              void 0 !== this.options.headers && (r.headers = this.options.headers),
              this._buffer
                .add(function () {
                  return new X.a(function (t, o) {
                    n._fetch(e.url, r)
                      .then(function (r) {
                        var a = {
                          "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                          "retry-after": r.headers.get("Retry-After")
                        };
                        n._handleResponse({ requestType: e.type, response: r, headers: a, resolve: t, reject: o });
                      })
                      .catch(o);
                  });
                })
                .then(void 0, function (t) {
                  throw (t instanceof B ? n.recordLostEvent("queue_overflow", e.type) : n.recordLostEvent("network_error", e.type), t);
                })
            );
          }),
          t
        );
      })(it);
    function st(e) {
      return Je({ bufferSize: e.bufferSize }, function (t) {
        return new X.a(function (n, r) {
          var o = new XMLHttpRequest();
          for (var a in ((o.onreadystatechange = function () {
            if (4 === o.readyState) {
              var e = {
                body: o.response,
                headers: {
                  "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                  "retry-after": o.getResponseHeader("Retry-After")
                },
                reason: o.statusText,
                statusCode: o.status
              };
              n(e);
            }
          }),
          o.open("POST", e.url),
          e.headers))
            Object.prototype.hasOwnProperty.call(e.headers, a) && o.setRequestHeader(a, e.headers[a]);
          o.send(t.body);
        });
      });
    }
    var ct = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          u(t, e),
          (t.prototype._sendRequest = function (e, t) {
            var n = this;
            return this._isRateLimited(e.type)
              ? (this.recordLostEvent("ratelimit_backoff", e.type),
                Promise.reject({
                  event: t,
                  type: e.type,
                  reason: "Transport for " + e.type + " requests locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                  status: 429
                }))
              : this._buffer
                  .add(function () {
                    return new X.a(function (t, r) {
                      var o = new XMLHttpRequest();
                      for (var a in ((o.onreadystatechange = function () {
                        if (4 === o.readyState) {
                          var a = {
                            "x-sentry-rate-limits": o.getResponseHeader("X-Sentry-Rate-Limits"),
                            "retry-after": o.getResponseHeader("Retry-After")
                          };
                          n._handleResponse({ requestType: e.type, response: o, headers: a, resolve: t, reject: r });
                        }
                      }),
                      o.open("POST", e.url),
                      n.options.headers))
                        Object.prototype.hasOwnProperty.call(n.options.headers, a) && o.setRequestHeader(a, n.options.headers[a]);
                      o.send(e.body);
                    });
                  })
                  .then(void 0, function (t) {
                    throw (t instanceof B ? n.recordLostEvent("queue_overflow", e.type) : n.recordLostEvent("network_error", e.type), t);
                  });
          }),
          t
        );
      })(it),
      lt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          u(t, e),
          (t.prototype.eventFromException = function (e, t) {
            return He(e, t, this._options.attachStacktrace);
          }),
          (t.prototype.eventFromMessage = function (e, t, n) {
            return void 0 === t && (t = s.Info), Ge(e, t, n, this._options.attachStacktrace);
          }),
          (t.prototype._setupTransport = function () {
            if (!this._options.dsn) return e.prototype._setupTransport.call(this);
            var t = c(c({}, this._options.transportOptions), {
                dsn: this._options.dsn,
                tunnel: this._options.tunnel,
                sendClientReports: this._options.sendClientReports,
                _metadata: this._options._metadata
              }),
              n = ie(t.dsn, t._metadata, t.tunnel),
              r = fe(n.dsn, n.tunnel);
            if (this._options.transport) return new this._options.transport(t);
            if (Object(be.b)()) {
              var o = c({}, t.fetchParameters);
              return (this._newTransport = rt({ requestOptions: o, url: r })), new ut(t);
            }
            return (this._newTransport = st({ url: r, headers: t.headers })), new ct(t);
          }),
          t
        );
      })(_e),
      dt = Object(ae.a)(),
      ft = 0;
    function pt() {
      return ft > 0;
    }
    function vt() {
      (ft += 1),
        setTimeout(function () {
          ft -= 1;
        });
    }
    function ht(e, t, n) {
      if ((void 0 === t && (t = {}), "function" != typeof e)) return e;
      try {
        var r = e.__sentry_wrapped__;
        if (r) return r;
        if (Object(Z.f)(e)) return e;
      } catch (t) {
        return e;
      }
      var o = function () {
        var r = Array.prototype.slice.call(arguments);
        try {
          n && "function" == typeof n && n.apply(this, arguments);
          var o = r.map(function (e) {
            return ht(e, t);
          });
          return e.apply(this, o);
        } catch (e) {
          throw (
            (vt(),
            I(function (n) {
              n.addEventProcessor(function (e) {
                return (
                  t.mechanism && (Object(W.b)(e, void 0, void 0), Object(W.a)(e, t.mechanism)),
                  (e.extra = c(c({}, e.extra), { arguments: r })),
                  e
                );
              }),
                y(e);
            }),
            e)
          );
        }
      };
      try {
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (o[a] = e[a]);
      } catch (e) {}
      Object(Z.g)(o, e), Object(Z.a)(e, "__sentry_wrapped__", o);
      try {
        Object.getOwnPropertyDescriptor(o, "name").configurable &&
          Object.defineProperty(o, "name", {
            get: function () {
              return e.name;
            }
          });
      } catch (e) {}
      return o;
    }
    function gt(e) {
      if ((void 0 === e && (e = {}), dt.document))
        if (e.eventId)
          if (e.dsn) {
            var t = dt.document.createElement("script");
            (t.async = !0),
              (t.src = (function (e, t) {
                var n = Y(e),
                  r = ue(n) + "embed/error-page/",
                  o = "dsn=" + G(n);
                for (var a in t)
                  if ("dsn" !== a)
                    if ("user" === a) {
                      if (!t.user) continue;
                      t.user.name && (o += "&name=" + encodeURIComponent(t.user.name)),
                        t.user.email && (o += "&email=" + encodeURIComponent(t.user.email));
                    } else o += "&" + encodeURIComponent(a) + "=" + encodeURIComponent(t[a]);
                return r + "?" + o;
              })(e.dsn, e)),
              e.onLoad && (t.onload = e.onLoad);
            var n = dt.document.head || dt.document.body;
            n && n.appendChild(t);
          } else Ze && V.c.error("Missing dsn option in showReportDialog call");
        else Ze && V.c.error("Missing eventId option in showReportDialog call");
    }
    var mt = n(1984),
      yt = n(1980),
      _t = ["fatal", "error", "warning", "log", "info", "debug", "critical"];
    function bt(e) {
      return "warn" === e
        ? s.Warning
        : (function (e) {
            return -1 !== _t.indexOf(e);
          })(e)
        ? e
        : s.Log;
    }
    var St = (function () {
      function e(t) {
        (this.name = e.id), (this._options = c({ console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0 }, t));
      }
      return (
        (e.prototype.addSentryBreadcrumb = function (e) {
          this._options.sentry &&
            Object(g.b)().addBreadcrumb(
              {
                category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                event_id: e.event_id,
                level: e.level,
                message: Object(W.d)(e)
              },
              { event: e }
            );
        }),
        (e.prototype.setupOnce = function () {
          var e;
          this._options.console && Object(mt.a)("console", Ot),
            this._options.dom &&
              Object(mt.a)(
                "dom",
                ((e = this._options.dom),
                function (t) {
                  var n,
                    r = "object" == typeof e ? e.serializeAttribute : void 0;
                  "string" == typeof r && (r = [r]);
                  try {
                    n = t.event.target ? Object(yt.b)(t.event.target, r) : Object(yt.b)(t.event, r);
                  } catch (e) {
                    n = "<unknown>";
                  }
                  0 !== n.length &&
                    Object(g.b)().addBreadcrumb(
                      { category: "ui." + t.name, message: n },
                      { event: t.event, name: t.name, global: t.global }
                    );
                })
              ),
            this._options.xhr && Object(mt.a)("xhr", xt),
            this._options.fetch && Object(mt.a)("fetch", wt),
            this._options.history && Object(mt.a)("history", Et);
        }),
        (e.id = "Breadcrumbs"),
        e
      );
    })();
    function Ot(e) {
      var t = {
        category: "console",
        data: { arguments: e.args, logger: "console" },
        level: bt(e.level),
        message: Object($.b)(e.args, " ")
      };
      if ("assert" === e.level) {
        if (!1 !== e.args[0]) return;
        (t.message = "Assertion failed: " + (Object($.b)(e.args.slice(1), " ") || "console.assert")), (t.data.arguments = e.args.slice(1));
      }
      Object(g.b)().addBreadcrumb(t, { input: e.args, level: e.level });
    }
    function xt(e) {
      if (e.endTimestamp) {
        if (e.xhr.__sentry_own_request__) return;
        var t = e.xhr.__sentry_xhr__ || {},
          n = t.method,
          r = t.url,
          o = t.status_code,
          a = t.body;
        Object(g.b)().addBreadcrumb(
          { category: "xhr", data: { method: n, url: r, status_code: o }, type: "http" },
          { xhr: e.xhr, input: a }
        );
      } else;
    }
    function wt(e) {
      e.endTimestamp &&
        ((e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method) ||
          (e.error
            ? Object(g.b)().addBreadcrumb(
                { category: "fetch", data: e.fetchData, level: s.Error, type: "http" },
                { data: e.error, input: e.args }
              )
            : Object(g.b)().addBreadcrumb(
                { category: "fetch", data: c(c({}, e.fetchData), { status_code: e.response.status }), type: "http" },
                { input: e.args, response: e.response }
              )));
    }
    function Et(e) {
      var t = Object(ae.a)(),
        n = e.from,
        r = e.to,
        o = Object(W.e)(t.location.href),
        a = Object(W.e)(n),
        i = Object(W.e)(r);
      a.path || (a = o),
        o.protocol === i.protocol && o.host === i.host && (r = i.relative),
        o.protocol === a.protocol && o.host === a.host && (n = a.relative),
        Object(g.b)().addBreadcrumb({ category: "navigation", data: { from: n, to: r } });
    }
    var Tt,
      Pt = (function (e) {
        function t(t) {
          void 0 === t && (t = {});
          return (
            (t._metadata = t._metadata || {}),
            (t._metadata.sdk = t._metadata.sdk || {
              name: "sentry.javascript.browser",
              packages: [{ name: "npm:@sentry/browser", version: k }],
              version: k
            }),
            e.call(this, lt, t) || this
          );
        }
        return (
          u(t, e),
          (t.prototype.showReportDialog = function (e) {
            void 0 === e && (e = {}),
              Object(ae.a)().document &&
                (this._isEnabled()
                  ? gt(c(c({}, e), { dsn: e.dsn || this.getDsn() }))
                  : Ze && V.c.error("Trying to call showReportDialog with Sentry Client disabled"));
          }),
          (t.prototype._prepareEvent = function (t, n, r) {
            return (t.platform = t.platform || "javascript"), e.prototype._prepareEvent.call(this, t, n, r);
          }),
          (t.prototype._sendEvent = function (t) {
            var n = this.getIntegration(St);
            n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t);
          }),
          t
        );
      })(oe),
      jt = (function () {
        function e() {
          this.name = e.id;
        }
        return (
          (e.prototype.setupOnce = function () {
            (Tt = Function.prototype.toString),
              (Function.prototype.toString = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = Object(Z.f)(this) || this;
                return Tt.apply(n, e);
              });
          }),
          (e.id = "FunctionToString"),
          e
        );
      })(),
      It = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
      Ct = (function () {
        function e(t) {
          void 0 === t && (t = {}), (this._options = t), (this.name = e.id);
        }
        return (
          (e.prototype.setupOnce = function (t, n) {
            t(function (t) {
              var r = n();
              if (r) {
                var o = r.getIntegration(e);
                if (o) {
                  var a = r.getClient(),
                    i = a ? a.getOptions() : {};
                  return (function (e, t) {
                    if (
                      t.ignoreInternal &&
                      (function (e) {
                        try {
                          return "SentryError" === e.exception.values[0].type;
                        } catch (e) {}
                        return !1;
                      })(e)
                    )
                      return Q && V.c.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(W.d)(e)), !0;
                    if (
                      (function (e, t) {
                        if (!t || !t.length) return !1;
                        return (function (e) {
                          if (e.message) return [e.message];
                          if (e.exception)
                            try {
                              var t = (e.exception.values && e.exception.values[0]) || {},
                                n = t.type,
                                r = void 0 === n ? "" : n,
                                o = t.value,
                                a = void 0 === o ? "" : o;
                              return ["" + a, r + ": " + a];
                            } catch (t) {
                              return Q && V.c.error("Cannot extract message for event " + Object(W.d)(e)), [];
                            }
                          return [];
                        })(e).some(function (e) {
                          return t.some(function (t) {
                            return Object($.a)(e, t);
                          });
                        });
                      })(e, t.ignoreErrors)
                    )
                      return Q && V.c.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(W.d)(e)), !0;
                    if (
                      (function (e, t) {
                        if (!t || !t.length) return !1;
                        var n = kt(e);
                        return (
                          !!n &&
                          t.some(function (e) {
                            return Object($.a)(n, e);
                          })
                        );
                      })(e, t.denyUrls)
                    )
                      return (
                        Q &&
                          V.c.warn(
                            "Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(W.d)(e) + ".\nUrl: " + kt(e)
                          ),
                        !0
                      );
                    if (
                      !(function (e, t) {
                        if (!t || !t.length) return !0;
                        var n = kt(e);
                        return (
                          !n ||
                          t.some(function (e) {
                            return Object($.a)(n, e);
                          })
                        );
                      })(e, t.allowUrls)
                    )
                      return (
                        Q &&
                          V.c.warn(
                            "Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(W.d)(e) + ".\nUrl: " + kt(e)
                          ),
                        !0
                      );
                    return !1;
                  })(
                    t,
                    (function (e, t) {
                      void 0 === e && (e = {});
                      void 0 === t && (t = {});
                      return {
                        allowUrls: D(e.whitelistUrls || [], e.allowUrls || [], t.whitelistUrls || [], t.allowUrls || []),
                        denyUrls: D(e.blacklistUrls || [], e.denyUrls || [], t.blacklistUrls || [], t.denyUrls || []),
                        ignoreErrors: D(e.ignoreErrors || [], t.ignoreErrors || [], It),
                        ignoreInternal: void 0 === e.ignoreInternal || e.ignoreInternal
                      };
                    })(o._options, i)
                  )
                    ? null
                    : t;
                }
              }
              return t;
            });
          }),
          (e.id = "InboundFilters"),
          e
        );
      })();
    function Rt(e) {
      void 0 === e && (e = []);
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n && "<anonymous>" !== n.filename && "[native code]" !== n.filename) return n.filename || null;
      }
      return null;
    }
    function kt(e) {
      try {
        if (e.stacktrace) return Rt(e.stacktrace.frames);
        var t;
        try {
          t = e.exception.values[0].stacktrace.frames;
        } catch (e) {}
        return t ? Rt(t) : null;
      } catch (t) {
        return Q && V.c.error("Cannot extract url for event " + Object(W.d)(e)), null;
      }
    }
    var At = [
        "EventTarget",
        "Window",
        "Node",
        "ApplicationCache",
        "AudioTrackList",
        "ChannelMergerNode",
        "CryptoOperation",
        "EventSource",
        "FileReader",
        "HTMLUnknownElement",
        "IDBDatabase",
        "IDBRequest",
        "IDBTransaction",
        "KeyOperation",
        "MediaController",
        "MessagePort",
        "ModalWindow",
        "Notification",
        "SVGElementInstance",
        "Screen",
        "TextTrack",
        "TextTrackCue",
        "TextTrackList",
        "WebSocket",
        "WebSocketWorker",
        "Worker",
        "XMLHttpRequest",
        "XMLHttpRequestEventTarget",
        "XMLHttpRequestUpload"
      ],
      Mt = (function () {
        function e(t) {
          (this.name = e.id),
            (this._options = c({ XMLHttpRequest: !0, eventTarget: !0, requestAnimationFrame: !0, setInterval: !0, setTimeout: !0 }, t));
        }
        return (
          (e.prototype.setupOnce = function () {
            var e = Object(ae.a)();
            this._options.setTimeout && Object(Z.e)(e, "setTimeout", Nt),
              this._options.setInterval && Object(Z.e)(e, "setInterval", Nt),
              this._options.requestAnimationFrame && Object(Z.e)(e, "requestAnimationFrame", Dt),
              this._options.XMLHttpRequest && "XMLHttpRequest" in e && Object(Z.e)(XMLHttpRequest.prototype, "send", Lt);
            var t = this._options.eventTarget;
            t && (Array.isArray(t) ? t : At).forEach(Ut);
          }),
          (e.id = "TryCatch"),
          e
        );
      })();
    function Nt(e) {
      return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = t[0];
        return (t[0] = ht(r, { mechanism: { data: { function: Object(Se.b)(e) }, handled: !0, type: "instrument" } })), e.apply(this, t);
      };
    }
    function Dt(e) {
      return function (t) {
        return e.apply(this, [
          ht(t, { mechanism: { data: { function: "requestAnimationFrame", handler: Object(Se.b)(e) }, handled: !0, type: "instrument" } })
        ]);
      };
    }
    function Lt(e) {
      return function () {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = this,
          o = ["onload", "onerror", "onprogress", "onreadystatechange"];
        return (
          o.forEach(function (e) {
            e in r &&
              "function" == typeof r[e] &&
              Object(Z.e)(r, e, function (t) {
                var n = { mechanism: { data: { function: e, handler: Object(Se.b)(t) }, handled: !0, type: "instrument" } },
                  r = Object(Z.f)(t);
                return r && (n.mechanism.data.handler = Object(Se.b)(r)), ht(t, n);
              });
          }),
          e.apply(this, t)
        );
      };
    }
    function Ut(e) {
      var t = Object(ae.a)(),
        n = t[e] && t[e].prototype;
      n &&
        n.hasOwnProperty &&
        n.hasOwnProperty("addEventListener") &&
        (Object(Z.e)(n, "addEventListener", function (t) {
          return function (n, r, o) {
            try {
              "function" == typeof r.handleEvent &&
                (r.handleEvent = ht(r.handleEvent.bind(r), {
                  mechanism: { data: { function: "handleEvent", handler: Object(Se.b)(r), target: e }, handled: !0, type: "instrument" }
                }));
            } catch (e) {}
            return t.apply(this, [
              n,
              ht(r, {
                mechanism: { data: { function: "addEventListener", handler: Object(Se.b)(r), target: e }, handled: !0, type: "instrument" }
              }),
              o
            ]);
          };
        }),
        Object(Z.e)(n, "removeEventListener", function (e) {
          return function (t, n, r) {
            var o = n;
            try {
              var a = o && o.__sentry_wrapped__;
              a && e.call(this, t, a, r);
            } catch (e) {}
            return e.call(this, t, o, r);
          };
        }));
    }
    var Bt = (function () {
      function e(t) {
        (this.name = e.id),
          (this._installFunc = { onerror: Ft, onunhandledrejection: Ht }),
          (this._options = c({ onerror: !0, onunhandledrejection: !0 }, t));
      }
      return (
        (e.prototype.setupOnce = function () {
          Error.stackTraceLimit = 50;
          var e,
            t = this._options;
          for (var n in t) {
            var r = this._installFunc[n];
            r && t[n] && ((e = n), Ze && V.c.log("Global Handler attached: " + e), r(), (this._installFunc[n] = void 0));
          }
        }),
        (e.id = "GlobalHandlers"),
        e
      );
    })();
    function Ft() {
      Object(mt.a)("error", function (e) {
        var t = l(Yt(), 2),
          n = t[0],
          r = t[1];
        if (n.getIntegration(Bt)) {
          var o = e.msg,
            a = e.url,
            i = e.line,
            u = e.column,
            c = e.error;
          if (!(pt() || (c && c.__sentry_own_request__))) {
            var d =
              void 0 === c && Object(z.l)(o)
                ? (function (e, t, n, r) {
                    var o = Object(z.e)(e) ? e.message : e,
                      a = "Error",
                      i = o.match(
                        /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i
                      );
                    i && ((a = i[1]), (o = i[2]));
                    return Gt({ exception: { values: [{ type: a, value: o }] } }, t, n, r);
                  })(o, a, i, u)
                : Gt(qe(c || o, void 0, r, !1), a, i, u);
            (d.level = s.Error), qt(n, c, d, "onerror");
          }
        }
      });
    }
    function Ht() {
      Object(mt.a)("unhandledrejection", function (e) {
        var t = l(Yt(), 2),
          n = t[0],
          r = t[1];
        if (n.getIntegration(Bt)) {
          var o = e;
          try {
            "reason" in e ? (o = e.reason) : "detail" in e && "reason" in e.detail && (o = e.detail.reason);
          } catch (e) {}
          if (pt() || (o && o.__sentry_own_request__)) return !0;
          var a = Object(z.j)(o)
            ? {
                exception: {
                  values: [{ type: "UnhandledRejection", value: "Non-Error promise rejection captured with value: " + String(o) }]
                }
              }
            : qe(o, void 0, r, !0);
          (a.level = s.Error), qt(n, o, a, "onunhandledrejection");
        }
      });
    }
    function Gt(e, t, n, r) {
      var o = (e.exception = e.exception || {}),
        a = (o.values = o.values || []),
        i = (a[0] = a[0] || {}),
        u = (i.stacktrace = i.stacktrace || {}),
        s = (u.frames = u.frames || []),
        c = isNaN(parseInt(r, 10)) ? void 0 : r,
        l = isNaN(parseInt(n, 10)) ? void 0 : n,
        d = Object(z.l)(t) && t.length > 0 ? t : Object(yt.a)();
      return 0 === s.length && s.push({ colno: c, filename: d, function: "?", in_app: !0, lineno: l }), e;
    }
    function qt(e, t, n, r) {
      Object(W.a)(n, { handled: !1, type: r }), e.captureEvent(n, { originalException: t });
    }
    function Yt() {
      var e = Object(g.b)(),
        t = e.getClient();
      return [e, t && t.getOptions().attachStacktrace];
    }
    var Wt = (function () {
      function e(t) {
        void 0 === t && (t = {}), (this.name = e.id), (this._key = t.key || "cause"), (this._limit = t.limit || 5);
      }
      return (
        (e.prototype.setupOnce = function () {
          Object(f.b)(function (t, n) {
            var r = Object(g.b)().getIntegration(e);
            return r
              ? (function (e, t, n, r) {
                  if (!(n.exception && n.exception.values && r && Object(z.g)(r.originalException, Error))) return n;
                  var o = (function e(t, n, r, o) {
                    void 0 === o && (o = []);
                    if (!Object(z.g)(n[r], Error) || o.length + 1 >= t) return o;
                    var a = De(n[r]);
                    return e(t, n[r], r, d([a], o));
                  })(t, r.originalException, e);
                  return (n.exception.values = d(o, n.exception.values)), n;
                })(r._key, r._limit, t, n)
              : t;
          });
        }),
        (e.id = "LinkedErrors"),
        e
      );
    })();
    var Vt = (function () {
      function e() {
        this.name = e.id;
      }
      return (
        (e.prototype.setupOnce = function (t, n) {
          t(function (t) {
            var r = n().getIntegration(e);
            if (r) {
              try {
                if (
                  (function (e, t) {
                    if (!t) return !1;
                    if (
                      (function (e, t) {
                        var n = e.message,
                          r = t.message;
                        if (!n && !r) return !1;
                        if ((n && !r) || (!n && r)) return !1;
                        if (n !== r) return !1;
                        if (!Xt(e, t)) return !1;
                        if (!zt(e, t)) return !1;
                        return !0;
                      })(e, t)
                    )
                      return !0;
                    if (
                      (function (e, t) {
                        var n = Kt(t),
                          r = Kt(e);
                        if (!n || !r) return !1;
                        if (n.type !== r.type || n.value !== r.value) return !1;
                        if (!Xt(e, t)) return !1;
                        if (!zt(e, t)) return !1;
                        return !0;
                      })(e, t)
                    )
                      return !0;
                    return !1;
                  })(t, r._previousEvent)
                )
                  return Ze && V.c.warn("Event dropped due to being a duplicate of previously captured event."), null;
              } catch (e) {
                return (r._previousEvent = t);
              }
              return (r._previousEvent = t);
            }
            return t;
          });
        }),
        (e.id = "Dedupe"),
        e
      );
    })();
    function zt(e, t) {
      var n = Jt(e),
        r = Jt(t);
      if (!n && !r) return !0;
      if ((n && !r) || (!n && r)) return !1;
      if (((n = n), (r = r).length !== n.length)) return !1;
      for (var o = 0; o < r.length; o++) {
        var a = r[o],
          i = n[o];
        if (a.filename !== i.filename || a.lineno !== i.lineno || a.colno !== i.colno || a.function !== i.function) return !1;
      }
      return !0;
    }
    function Xt(e, t) {
      var n = e.fingerprint,
        r = t.fingerprint;
      if (!n && !r) return !0;
      if ((n && !r) || (!n && r)) return !1;
      (n = n), (r = r);
      try {
        return !(n.join("") !== r.join(""));
      } catch (e) {
        return !1;
      }
    }
    function Kt(e) {
      return e.exception && e.exception.values && e.exception.values[0];
    }
    function Jt(e) {
      var t = e.exception;
      if (t)
        try {
          return t.values[0].stacktrace.frames;
        } catch (e) {
          return;
        }
      else if (e.stacktrace) return e.stacktrace.frames;
    }
    var $t = Object(ae.a)(),
      Qt = (function () {
        function e() {
          this.name = e.id;
        }
        return (
          (e.prototype.setupOnce = function () {
            Object(f.b)(function (t) {
              if (Object(g.b)().getIntegration(e)) {
                if (!$t.navigator && !$t.location && !$t.document) return t;
                var n = (t.request && t.request.url) || ($t.location && $t.location.href),
                  r = ($t.document || {}).referrer,
                  o = ($t.navigator || {}).userAgent,
                  a = c(c(c({}, t.request && t.request.headers), r && { Referer: r }), o && { "User-Agent": o }),
                  i = c(c({}, n && { url: n }), { headers: a });
                return c(c({}, t), { request: i });
              }
              return t;
            });
          }),
          (e.id = "UserAgent"),
          e
        );
      })(),
      Zt = [new r.InboundFilters(), new r.FunctionToString(), new Mt(), new St(), new Bt(), new Wt(), new Vt(), new Qt()];
    function en(e) {
      if ((void 0 === e && (e = {}), void 0 === e.defaultIntegrations && (e.defaultIntegrations = Zt), void 0 === e.release)) {
        var t = Object(ae.a)();
        t.SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id);
      }
      void 0 === e.autoSessionTracking && (e.autoSessionTracking = !0),
        void 0 === e.sendClientReports && (e.sendClientReports = !0),
        (function (e, t) {
          !0 === t.debug &&
            (Q ? V.c.enable() : console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle."));
          var n = Object(g.b)(),
            r = n.getScope();
          r && r.update(t.initialScope);
          var o = new e(t);
          n.bindClient(o);
        })(Pt, e),
        e.autoSessionTracking &&
          (function () {
            if (void 0 === Object(ae.a)().document)
              return void (Ze && V.c.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));
            var e = Object(g.b)();
            if (!e.captureSession) return;
            cn(e),
              Object(mt.a)("history", function (e) {
                var t = e.from,
                  n = e.to;
                void 0 !== t && t !== n && cn(Object(g.b)());
              });
          })();
    }
    function tn(e) {
      void 0 === e && (e = {});
      var t = Object(g.b)(),
        n = t.getScope();
      n && (e.user = c(c({}, n.getUser()), e.user)), e.eventId || (e.eventId = t.lastEventId());
      var r = t.getClient();
      r && r.showReportDialog(e);
    }
    function nn() {
      return Object(g.b)().lastEventId();
    }
    function rn() {}
    function on(e) {
      e();
    }
    function an(e) {
      var t = Object(g.b)().getClient();
      return t ? t.flush(e) : (Ze && V.c.warn("Cannot flush events. No client defined."), Object(X.c)(!1));
    }
    function un(e) {
      var t = Object(g.b)().getClient();
      return t ? t.close(e) : (Ze && V.c.warn("Cannot flush events and disable SDK. No client defined."), Object(X.c)(!1));
    }
    function sn(e) {
      return ht(e)();
    }
    function cn(e) {
      e.startSession({ ignoreDuration: !0 }), e.captureSession();
    }
    var ln = "sentry.javascript.browser",
      dn = {},
      fn = Object(ae.a)();
    fn.Sentry && fn.Sentry.Integrations && (dn = fn.Sentry.Integrations);
    var pn = c(c(c({}, dn), r), o);
  },
  3196: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "Integrations", function () {
        return r;
      }),
      n.d(t, "BrowserTracing", function () {
        return W;
      }),
      n.d(t, "Span", function () {
        return z.a;
      }),
      n.d(t, "spanStatusfromHttpCode", function () {
        return z.c;
      }),
      n.d(t, "SpanStatus", function () {
        return V;
      }),
      n.d(t, "Transaction", function () {
        return X.a;
      }),
      n.d(t, "registerRequestInstrumentation", function () {
        return G;
      }),
      n.d(t, "defaultRequestInstrumentationOptions", function () {
        return H;
      }),
      n.d(t, "IdleTransaction", function () {
        return b.b;
      }),
      n.d(t, "startIdleTransaction", function () {
        return o.b;
      }),
      n.d(t, "addExtensionMethods", function () {
        return o.a;
      }),
      n.d(t, "extractTraceparentData", function () {
        return O.b;
      }),
      n.d(t, "getActiveTransaction", function () {
        return S.a;
      }),
      n.d(t, "hasTracingEnabled", function () {
        return S.b;
      }),
      n.d(t, "stripUrlQueryAndFragment", function () {
        return K.f;
      }),
      n.d(t, "TRACEPARENT_REGEXP", function () {
        return O.a;
      });
    var r = {};
    n.r(r),
      n.d(r, "Express", function () {
        return s;
      }),
      n.d(r, "Postgres", function () {
        return v;
      }),
      n.d(r, "Mysql", function () {
        return h;
      }),
      n.d(r, "Mongo", function () {
        return y;
      }),
      n.d(r, "BrowserTracing", function () {
        return W;
      });
    var o = n(443),
      a = n(43),
      i = n(79),
      u = n(35),
      s = (function () {
        function e(t) {
          void 0 === t && (t = {}),
            (this.name = e.id),
            (this._router = t.router || t.app),
            (this._methods = (Array.isArray(t.methods) ? t.methods : []).concat("use"));
        }
        return (
          (e.prototype.setupOnce = function () {
            this._router
              ? (function (e, t) {
                  void 0 === t && (t = []);
                  t.forEach(function (t) {
                    return (function (e, t) {
                      var n = e[t];
                      return (
                        (e[t] = function () {
                          for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                          return n.call.apply(n, Object(a.e)([this], l(e, t)));
                        }),
                        e
                      );
                    })(e, t);
                  });
                })(this._router, this._methods)
              : u.a && i.c.error("ExpressIntegration is missing an Express instance");
          }),
          (e.id = "Express"),
          e
        );
      })();
    function c(e, t) {
      var n = e.length;
      switch (n) {
        case 2:
          return function (n, r) {
            var o = r.__sentry_transaction;
            if (o) {
              var a = o.startChild({ description: e.name, op: "express.middleware." + t });
              r.once("finish", function () {
                a.finish();
              });
            }
            return e.call(this, n, r);
          };
        case 3:
          return function (n, r, o) {
            var i,
              u =
                null === (i = r.__sentry_transaction) || void 0 === i
                  ? void 0
                  : i.startChild({ description: e.name, op: "express.middleware." + t });
            e.call(this, n, r, function () {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              null === (e = u) || void 0 === e || e.finish(), o.call.apply(o, Object(a.e)([this], t));
            });
          };
        case 4:
          return function (n, r, o, i) {
            var u,
              s =
                null === (u = o.__sentry_transaction) || void 0 === u
                  ? void 0
                  : u.startChild({ description: e.name, op: "express.middleware." + t });
            e.call(this, n, r, o, function () {
              for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
              null === (e = s) || void 0 === e || e.finish(), i.call.apply(i, Object(a.e)([this], t));
            });
          };
        default:
          throw new Error("Express middleware takes 2-4 arguments. Got: " + n);
      }
    }
    function l(e, t) {
      return e.map(function (e) {
        return "function" == typeof e
          ? c(e, t)
          : Array.isArray(e)
          ? e.map(function (e) {
              return "function" == typeof e ? c(e, t) : e;
            })
          : e;
      });
    }
    var d = n(247),
      f = n(131),
      p = n(77),
      v = (function () {
        function e(t) {
          void 0 === t && (t = {}), (this.name = e.id), (this._usePgNative = !!t.usePgNative);
        }
        return (
          (e.prototype.setupOnce = function (e, t) {
            var n,
              r = Object(d.c)("pg");
            if (r)
              if (!this._usePgNative || (null === (n = r.native) || void 0 === n ? void 0 : n.Client)) {
                var o = (this._usePgNative ? r.native : r).Client;
                Object(f.e)(o.prototype, "query", function (e) {
                  return function (n, r, o) {
                    var a,
                      i,
                      u,
                      s =
                        null === (i = null === (a = t().getScope()) || void 0 === a ? void 0 : a.getSpan()) || void 0 === i
                          ? void 0
                          : i.startChild({ description: "string" == typeof n ? n : n.text, op: "db" });
                    if ("function" == typeof o)
                      return e.call(this, n, r, function (e, t) {
                        var n;
                        null === (n = s) || void 0 === n || n.finish(), o(e, t);
                      });
                    if ("function" == typeof r)
                      return e.call(this, n, function (e, t) {
                        var n;
                        null === (n = s) || void 0 === n || n.finish(), r(e, t);
                      });
                    var c = void 0 !== r ? e.call(this, n, r) : e.call(this, n);
                    return Object(p.n)(c)
                      ? c.then(function (e) {
                          var t;
                          return null === (t = s) || void 0 === t || t.finish(), e;
                        })
                      : (null === (u = s) || void 0 === u || u.finish(), c);
                  };
                });
              } else u.a && i.c.error("Postgres Integration was unable to access 'pg-native' bindings.");
            else u.a && i.c.error("Postgres Integration was unable to require `pg` package.");
          }),
          (e.id = "Postgres"),
          e
        );
      })(),
      h = (function () {
        function e() {
          this.name = e.id;
        }
        return (
          (e.prototype.setupOnce = function (e, t) {
            var n = Object(d.c)("mysql/lib/Connection.js");
            n
              ? Object(f.e)(n, "createQuery", function (e) {
                  return function (n, r, o) {
                    var a,
                      i,
                      u =
                        null === (i = null === (a = t().getScope()) || void 0 === a ? void 0 : a.getSpan()) || void 0 === i
                          ? void 0
                          : i.startChild({ description: "string" == typeof n ? n : n.sql, op: "db" });
                    return "function" == typeof o
                      ? e.call(this, n, r, function (e, t, n) {
                          var r;
                          null === (r = u) || void 0 === r || r.finish(), o(e, t, n);
                        })
                      : "function" == typeof r
                      ? e.call(this, n, function (e, t, n) {
                          var o;
                          null === (o = u) || void 0 === o || o.finish(), r(e, t, n);
                        })
                      : e.call(this, n, r, o);
                  };
                })
              : u.a && i.c.error("Mysql Integration was unable to require `mysql` package.");
          }),
          (e.id = "Mysql"),
          e
        );
      })(),
      g = [
        "aggregate",
        "bulkWrite",
        "countDocuments",
        "createIndex",
        "createIndexes",
        "deleteMany",
        "deleteOne",
        "distinct",
        "drop",
        "dropIndex",
        "dropIndexes",
        "estimatedDocumentCount",
        "find",
        "findOne",
        "findOneAndDelete",
        "findOneAndReplace",
        "findOneAndUpdate",
        "indexes",
        "indexExists",
        "indexInformation",
        "initializeOrderedBulkOp",
        "insertMany",
        "insertOne",
        "isCapped",
        "mapReduce",
        "options",
        "parallelCollectionScan",
        "rename",
        "replaceOne",
        "stats",
        "updateMany",
        "updateOne"
      ],
      m = {
        bulkWrite: ["operations"],
        countDocuments: ["query"],
        createIndex: ["fieldOrSpec"],
        createIndexes: ["indexSpecs"],
        deleteMany: ["filter"],
        deleteOne: ["filter"],
        distinct: ["key", "query"],
        dropIndex: ["indexName"],
        find: ["query"],
        findOne: ["query"],
        findOneAndDelete: ["filter"],
        findOneAndReplace: ["filter", "replacement"],
        findOneAndUpdate: ["filter", "update"],
        indexExists: ["indexes"],
        insertMany: ["docs"],
        insertOne: ["doc"],
        mapReduce: ["map", "reduce"],
        rename: ["newName"],
        replaceOne: ["filter", "doc"],
        updateMany: ["filter", "update"],
        updateOne: ["filter", "update"]
      },
      y = (function () {
        function e(t) {
          void 0 === t && (t = {}),
            (this.name = e.id),
            (this._operations = Array.isArray(t.operations) ? t.operations : g),
            (this._describeOperations = !("describeOperations" in t) || t.describeOperations),
            (this._useMongoose = !!t.useMongoose);
        }
        return (
          (e.prototype.setupOnce = function (e, t) {
            var n = this._useMongoose ? "mongoose" : "mongodb",
              r = Object(d.c)(n);
            r
              ? this._instrumentOperations(r.Collection, this._operations, t)
              : u.a && i.c.error("Mongo Integration was unable to require `" + n + "` package.");
          }),
          (e.prototype._instrumentOperations = function (e, t, n) {
            var r = this;
            t.forEach(function (t) {
              return r._patchOperation(e, t, n);
            });
          }),
          (e.prototype._patchOperation = function (e, t, n) {
            if (t in e.prototype) {
              var r = this._getSpanContextFromOperationArguments.bind(this);
              Object(f.e)(e.prototype, t, function (e) {
                return function () {
                  for (var o, i, u, s, c = [], l = 0; l < arguments.length; l++) c[l] = arguments[l];
                  var d = c[c.length - 1],
                    f = n().getScope(),
                    v = null === (o = f) || void 0 === o ? void 0 : o.getSpan();
                  if ("function" != typeof d || ("mapReduce" === t && 2 === c.length)) {
                    var h = null === (i = v) || void 0 === i ? void 0 : i.startChild(r(this, t, c)),
                      g = e.call.apply(e, Object(a.e)([this], c));
                    return Object(p.n)(g)
                      ? g.then(function (e) {
                          var t;
                          return null === (t = h) || void 0 === t || t.finish(), e;
                        })
                      : (null === (u = h) || void 0 === u || u.finish(), g);
                  }
                  var m = null === (s = v) || void 0 === s ? void 0 : s.startChild(r(this, t, c.slice(0, -1)));
                  return e.call.apply(
                    e,
                    Object(a.e)([this], c.slice(0, -1), [
                      function (e, t) {
                        var n;
                        null === (n = m) || void 0 === n || n.finish(), d(e, t);
                      }
                    ])
                  );
                };
              });
            }
          }),
          (e.prototype._getSpanContextFromOperationArguments = function (e, t, n) {
            var r = { collectionName: e.collectionName, dbName: e.dbName, namespace: e.namespace },
              o = { op: "db", description: t, data: r },
              i = m[t],
              u = Array.isArray(this._describeOperations) ? this._describeOperations.includes(t) : this._describeOperations;
            if (!i || !u) return o;
            try {
              if ("mapReduce" === t) {
                var s = Object(a.c)(n, 2),
                  c = s[0],
                  l = s[1];
                (r[i[0]] = "string" == typeof c ? c : c.name || "<anonymous>"),
                  (r[i[1]] = "string" == typeof l ? l : l.name || "<anonymous>");
              } else for (var d = 0; d < i.length; d++) r[i[d]] = JSON.stringify(n[d]);
            } catch (e) {}
            return o;
          }),
          (e.id = "Mongo"),
          e
        );
      })(),
      _ = n(130),
      b = n(486),
      S = n(68),
      O = n(1976),
      x = n(343),
      w = Object(_.a)();
    var E = n(270),
      T = n(1980),
      P = function (e, t, n) {
        var r;
        return function (o) {
          t.value >= 0 && (o || n) && ((t.delta = t.value - (r || 0)), (t.delta || void 0 === r) && ((r = t.value), e(t)));
        };
      },
      j = function (e, t) {
        return {
          name: e,
          value: null != t ? t : -1,
          delta: 0,
          entries: [],
          id: "v2-" + Date.now() + "-" + (Math.floor(8999999999999 * Math.random()) + 1e12)
        };
      },
      I = function (e, t) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
            var n = new PerformanceObserver(function (e) {
              return e.getEntries().map(t);
            });
            return n.observe({ type: e, buffered: !0 }), n;
          }
        } catch (e) {}
      },
      C = function (e, t) {
        var n = function (r) {
          ("pagehide" !== r.type && "hidden" !== Object(_.a)().document.visibilityState) ||
            (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
      },
      R = -1,
      k = function () {
        return (
          R < 0 &&
            ((R = "hidden" === Object(_.a)().document.visibilityState ? 0 : 1 / 0),
            C(function (e) {
              var t = e.timeStamp;
              R = t;
            }, !0)),
          {
            get firstHiddenTime() {
              return R;
            }
          }
        );
      },
      A = {},
      M = Object(_.a)(),
      N = (function () {
        function e(e) {
          void 0 === e && (e = !1),
            (this._reportAllChanges = e),
            (this._measurements = {}),
            (this._performanceCursor = 0),
            !Object(d.b)() &&
              M &&
              M.performance &&
              M.document &&
              (M.performance.mark && M.performance.mark("sentry-tracing-init"), this._trackCLS(), this._trackLCP(), this._trackFID());
        }
        return (
          (e.prototype.addPerformanceEntries = function (e) {
            var t = this;
            if (M && M.performance && M.performance.getEntries && E.a) {
              u.a && i.c.log("[Tracing] Adding & adjusting spans using Performance API");
              var n,
                r,
                o = Object(S.c)(E.a);
              if (
                (M.performance
                  .getEntries()
                  .slice(this._performanceCursor)
                  .forEach(function (a) {
                    var s = Object(S.c)(a.startTime),
                      c = Object(S.c)(a.duration);
                    if (!("navigation" === e.op && o + s < e.startTimestamp))
                      switch (a.entryType) {
                        case "navigation":
                          !(function (e, t, n) {
                            ["unloadEvent", "redirect", "domContentLoadedEvent", "loadEvent", "connect"].forEach(function (r) {
                              D(e, t, r, n);
                            }),
                              D(e, t, "secureConnection", n, "TLS/SSL", "connectEnd"),
                              D(e, t, "fetch", n, "cache", "domainLookupStart"),
                              D(e, t, "domainLookup", n, "DNS"),
                              (function (e, t, n) {
                                L(e, {
                                  op: "browser",
                                  description: "request",
                                  startTimestamp: n + Object(S.c)(t.requestStart),
                                  endTimestamp: n + Object(S.c)(t.responseEnd)
                                }),
                                  L(e, {
                                    op: "browser",
                                    description: "response",
                                    startTimestamp: n + Object(S.c)(t.responseStart),
                                    endTimestamp: n + Object(S.c)(t.responseEnd)
                                  });
                              })(e, t, n);
                          })(e, a, o),
                            (n = o + Object(S.c)(a.responseStart)),
                            (r = o + Object(S.c)(a.requestStart));
                          break;
                        case "mark":
                        case "paint":
                        case "measure":
                          var l = (function (e, t, n, r, o) {
                              var a = o + n,
                                i = a + r;
                              return L(e, { description: t.name, endTimestamp: i, op: t.entryType, startTimestamp: a }), a;
                            })(e, a, s, c, o),
                            d = k(),
                            f = a.startTime < d.firstHiddenTime;
                          "first-paint" === a.name &&
                            f &&
                            (u.a && i.c.log("[Measurements] Adding FP"),
                            (t._measurements.fp = { value: a.startTime }),
                            (t._measurements["mark.fp"] = { value: l })),
                            "first-contentful-paint" === a.name &&
                              f &&
                              (u.a && i.c.log("[Measurements] Adding FCP"),
                              (t._measurements.fcp = { value: a.startTime }),
                              (t._measurements["mark.fcp"] = { value: l }));
                          break;
                        case "resource":
                          var p = a.name.replace(M.location.origin, "");
                          !(function (e, t, n, r, o, a) {
                            if ("xmlhttprequest" === t.initiatorType || "fetch" === t.initiatorType) return;
                            var i = {};
                            "transferSize" in t && (i["Transfer Size"] = t.transferSize);
                            "encodedBodySize" in t && (i["Encoded Body Size"] = t.encodedBodySize);
                            "decodedBodySize" in t && (i["Decoded Body Size"] = t.decodedBodySize);
                            var u = a + r;
                            L(e, {
                              description: n,
                              endTimestamp: u + o,
                              op: t.initiatorType ? "resource." + t.initiatorType : "resource",
                              startTimestamp: u,
                              data: i
                            });
                          })(e, a, p, s, c, o);
                      }
                  }),
                (this._performanceCursor = Math.max(performance.getEntries().length - 1, 0)),
                this._trackNavigator(e),
                "pageload" === e.op)
              ) {
                var a = Object(S.c)(E.a);
                "number" == typeof n &&
                  (u.a && i.c.log("[Measurements] Adding TTFB"),
                  (this._measurements.ttfb = { value: 1e3 * (n - e.startTimestamp) }),
                  "number" == typeof r && r <= n && (this._measurements["ttfb.requestTime"] = { value: 1e3 * (n - r) })),
                  ["fcp", "fp", "lcp"].forEach(function (n) {
                    if (t._measurements[n] && !(a >= e.startTimestamp)) {
                      var r = t._measurements[n].value,
                        o = a + Object(S.c)(r),
                        s = Math.abs(1e3 * (o - e.startTimestamp)),
                        c = s - r;
                      u.a && i.c.log("[Measurements] Normalized " + n + " from " + r + " to " + s + " (" + c + ")"),
                        (t._measurements[n].value = s);
                    }
                  }),
                  this._measurements["mark.fid"] &&
                    this._measurements.fid &&
                    L(e, {
                      description: "first input delay",
                      endTimestamp: this._measurements["mark.fid"].value + Object(S.c)(this._measurements.fid.value),
                      op: "web.vitals",
                      startTimestamp: this._measurements["mark.fid"].value
                    }),
                  "fcp" in this._measurements || delete this._measurements.cls,
                  e.setMeasurements(this._measurements),
                  (function (e, t, n) {
                    t &&
                      (u.a && i.c.log("[Measurements] Adding LCP Data"),
                      t.element && e.setTag("lcp.element", Object(T.b)(t.element)),
                      t.id && e.setTag("lcp.id", t.id),
                      t.url && e.setTag("lcp.url", t.url.trim().slice(0, 200)),
                      e.setTag("lcp.size", t.size));
                    n &&
                      n.sources &&
                      (u.a && i.c.log("[Measurements] Adding CLS Data"),
                      n.sources.forEach(function (t, n) {
                        return e.setTag("cls.source." + (n + 1), Object(T.b)(t.node));
                      }));
                  })(e, this._lcpEntry, this._clsEntry),
                  e.setTag("sentry_reportAllChanges", this._reportAllChanges);
              }
            }
          }),
          (e.prototype._trackNavigator = function (e) {
            var t = M.navigator;
            if (t) {
              var n = t.connection;
              n &&
                (n.effectiveType && e.setTag("effectiveConnectionType", n.effectiveType),
                n.type && e.setTag("connectionType", n.type),
                U(n.rtt) && (this._measurements["connection.rtt"] = { value: n.rtt }),
                U(n.downlink) && (this._measurements["connection.downlink"] = { value: n.downlink })),
                U(t.deviceMemory) && e.setTag("deviceMemory", String(t.deviceMemory)),
                U(t.hardwareConcurrency) && e.setTag("hardwareConcurrency", String(t.hardwareConcurrency));
            }
          }),
          (e.prototype._trackCLS = function () {
            var e = this;
            !(function (e, t) {
              var n,
                r = j("CLS", 0),
                o = 0,
                a = [],
                i = function (e) {
                  if (e && !e.hadRecentInput) {
                    var t = a[0],
                      i = a[a.length - 1];
                    o && 0 !== a.length && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3
                      ? ((o += e.value), a.push(e))
                      : ((o = e.value), (a = [e])),
                      o > r.value && ((r.value = o), (r.entries = a), n && n());
                  }
                },
                u = I("layout-shift", i);
              u &&
                ((n = P(e, r, t)),
                C(function () {
                  u.takeRecords().map(i), n(!0);
                }));
            })(function (t) {
              var n = t.entries.pop();
              n && (u.a && i.c.log("[Measurements] Adding CLS"), (e._measurements.cls = { value: t.value }), (e._clsEntry = n));
            });
          }),
          (e.prototype._trackLCP = function () {
            var e = this;
            !(function (e, t) {
              var n,
                r = k(),
                o = j("LCP"),
                a = function (e) {
                  var t = e.startTime;
                  t < r.firstHiddenTime && ((o.value = t), o.entries.push(e)), n && n();
                },
                i = I("largest-contentful-paint", a);
              if (i) {
                n = P(e, o, t);
                var u = function () {
                  A[o.id] || (i.takeRecords().map(a), i.disconnect(), (A[o.id] = !0), n(!0));
                };
                ["keydown", "click"].forEach(function (e) {
                  addEventListener(e, u, { once: !0, capture: !0 });
                }),
                  C(u, !0);
              }
            })(function (t) {
              var n = t.entries.pop();
              if (n) {
                var r = Object(S.c)(E.a),
                  o = Object(S.c)(n.startTime);
                u.a && i.c.log("[Measurements] Adding LCP"),
                  (e._measurements.lcp = { value: t.value }),
                  (e._measurements["mark.lcp"] = { value: r + o }),
                  (e._lcpEntry = n);
              }
            }, this._reportAllChanges);
          }),
          (e.prototype._trackFID = function () {
            var e = this;
            !(function (e, t) {
              var n,
                r = k(),
                o = j("FID"),
                a = function (e) {
                  n && e.startTime < r.firstHiddenTime && ((o.value = e.processingStart - e.startTime), o.entries.push(e), n(!0));
                },
                i = I("first-input", a);
              i &&
                ((n = P(e, o, t)),
                C(function () {
                  i.takeRecords().map(a), i.disconnect();
                }, !0));
            })(function (t) {
              var n = t.entries.pop();
              if (n) {
                var r = Object(S.c)(E.a),
                  o = Object(S.c)(n.startTime);
                u.a && i.c.log("[Measurements] Adding FID"),
                  (e._measurements.fid = { value: t.value }),
                  (e._measurements["mark.fid"] = { value: r + o });
              }
            });
          }),
          e
        );
      })();
    function D(e, t, n, r, o, a) {
      var i = a ? t[a] : t[n + "End"],
        u = t[n + "Start"];
      u &&
        i &&
        L(e, { op: "browser", description: null != o ? o : n, startTimestamp: r + Object(S.c)(u), endTimestamp: r + Object(S.c)(i) });
    }
    function L(e, t) {
      var n = t.startTimestamp,
        r = Object(a.d)(t, ["startTimestamp"]);
      return n && e.startTimestamp > n && (e.startTimestamp = n), e.startChild(Object(a.a)({ startTimestamp: n }, r));
    }
    function U(e) {
      return "number" == typeof e && isFinite(e);
    }
    var B = n(446),
      F = n(1984),
      H = { traceFetch: !0, traceXHR: !0, tracingOrigins: ["localhost", /^\//] };
    function G(e) {
      var t = Object(a.a)(Object(a.a)({}, H), e),
        n = t.traceFetch,
        r = t.traceXHR,
        o = t.tracingOrigins,
        i = t.shouldCreateSpanForRequest,
        u = {},
        s = function (e) {
          if (u[e]) return u[e];
          var t = o;
          return (
            (u[e] =
              t.some(function (t) {
                return Object(B.a)(e, t);
              }) && !Object(B.a)(e, "sentry_key")),
            u[e]
          );
        },
        c = s;
      "function" == typeof i &&
        (c = function (e) {
          return s(e) && i(e);
        });
      var l = {};
      n &&
        Object(F.a)("fetch", function (e) {
          !(function (e, t, n) {
            if (!Object(S.b)() || !e.fetchData || !t(e.fetchData.url)) return;
            if (e.endTimestamp) {
              var r = e.fetchData.__span;
              if (!r) return;
              return void (
                (i = n[r]) &&
                (e.response ? i.setHttpStatus(e.response.status) : e.error && i.setStatus("internal_error"), i.finish(), delete n[r])
              );
            }
            var o = Object(S.a)();
            if (o) {
              var i = o.startChild({
                data: Object(a.a)(Object(a.a)({}, e.fetchData), { type: "fetch" }),
                description: e.fetchData.method + " " + e.fetchData.url,
                op: "http.client"
              });
              (e.fetchData.__span = i.spanId), (n[i.spanId] = i);
              var u = (e.args[0] = e.args[0]),
                s = (e.args[1] = e.args[1] || {}),
                c = s.headers;
              Object(p.g)(u, Request) && (c = u.headers),
                c
                  ? "function" == typeof c.append
                    ? c.append("sentry-trace", i.toTraceparent())
                    : (c = Array.isArray(c)
                        ? Object(a.e)(c, [["sentry-trace", i.toTraceparent()]])
                        : Object(a.a)(Object(a.a)({}, c), { "sentry-trace": i.toTraceparent() }))
                  : (c = { "sentry-trace": i.toTraceparent() }),
                (s.headers = c);
            }
          })(e, c, l);
        }),
        r &&
          Object(F.a)("xhr", function (e) {
            !(function (e, t, n) {
              if (
                !Object(S.b)() ||
                (e.xhr && e.xhr.__sentry_own_request__) ||
                !(e.xhr && e.xhr.__sentry_xhr__ && t(e.xhr.__sentry_xhr__.url))
              )
                return;
              var r = e.xhr.__sentry_xhr__;
              if (e.endTimestamp) {
                var o = e.xhr.__sentry_xhr_span_id__;
                if (!o) return;
                return void ((u = n[o]) && (u.setHttpStatus(r.status_code), u.finish(), delete n[o]));
              }
              var i = Object(S.a)();
              if (i) {
                var u = i.startChild({
                  data: Object(a.a)(Object(a.a)({}, r.data), { type: "xhr", method: r.method, url: r.url }),
                  description: r.method + " " + r.url,
                  op: "http.client"
                });
                if (((e.xhr.__sentry_xhr_span_id__ = u.spanId), (n[e.xhr.__sentry_xhr_span_id__] = u), e.xhr.setRequestHeader))
                  try {
                    e.xhr.setRequestHeader("sentry-trace", u.toTraceparent());
                  } catch (e) {}
              }
            })(e, c, l);
          });
    }
    var q = Object(_.a)();
    var Y = Object(a.a)(
        {
          idleTimeout: b.a,
          markBackgroundTransactions: !0,
          maxTransactionDuration: 600,
          routingInstrumentation: function (e, t, n) {
            if ((void 0 === t && (t = !0), void 0 === n && (n = !0), q && q.location)) {
              var r,
                o = q.location.href;
              t && (r = e({ name: q.location.pathname, op: "pageload" })),
                n &&
                  Object(F.a)("history", function (t) {
                    var n = t.to,
                      a = t.from;
                    void 0 === a && o && -1 !== o.indexOf(n)
                      ? (o = void 0)
                      : a !== n &&
                        ((o = void 0),
                        r && (u.a && i.c.log("[Tracing] Finishing current transaction with op: " + r.op), r.finish()),
                        (r = e({ name: q.location.pathname, op: "navigation" })));
                  });
            } else u.a && i.c.warn("Could not initialize routing instrumentation due to invalid location");
          },
          startTransactionOnLocationChange: !0,
          startTransactionOnPageLoad: !0
        },
        H
      ),
      W = (function () {
        function e(t) {
          (this.name = e.id), (this._configuredIdleTimeout = void 0);
          var n = H.tracingOrigins;
          t &&
            ((this._configuredIdleTimeout = t.idleTimeout),
            t.tracingOrigins && Array.isArray(t.tracingOrigins) && 0 !== t.tracingOrigins.length
              ? (n = t.tracingOrigins)
              : u.a && (this._emitOptionsWarning = !0)),
            (this.options = Object(a.a)(Object(a.a)(Object(a.a)({}, Y), t), { tracingOrigins: n }));
          var r = this.options._metricOptions;
          this._metrics = new N(r && r._reportAllChanges);
        }
        return (
          (e.prototype.setupOnce = function (e, t) {
            var n = this;
            (this._getCurrentHub = t),
              this._emitOptionsWarning &&
                (u.a &&
                  i.c.warn("[Tracing] You need to define `tracingOrigins` in the options. Set an array of urls or patterns to trace."),
                u.a && i.c.warn("[Tracing] We added a reasonable default for you: " + H.tracingOrigins));
            var r = this.options,
              o = r.routingInstrumentation,
              a = r.startTransactionOnLocationChange,
              s = r.startTransactionOnPageLoad,
              c = r.markBackgroundTransactions,
              l = r.traceFetch,
              d = r.traceXHR,
              f = r.tracingOrigins,
              p = r.shouldCreateSpanForRequest;
            o(
              function (e) {
                return n._createRouteTransaction(e);
              },
              s,
              a
            ),
              c &&
                (w && w.document
                  ? w.document.addEventListener("visibilitychange", function () {
                      var e = Object(S.a)();
                      w.document.hidden &&
                        e &&
                        (u.a && i.c.log("[Tracing] Transaction: cancelled -> since tab moved to the background, op: " + e.op),
                        e.status || e.setStatus("cancelled"),
                        e.setTag("visibilitychange", "document.hidden"),
                        e.setTag(x.a, x.b[2]),
                        e.finish());
                    })
                  : u.a && i.c.warn("[Tracing] Could not set up background tab detection due to lack of global document")),
              G({ traceFetch: l, traceXHR: d, tracingOrigins: f, shouldCreateSpanForRequest: p });
          }),
          (e.prototype._createRouteTransaction = function (e) {
            var t = this;
            if (this._getCurrentHub) {
              var n = this.options,
                r = n.beforeNavigate,
                s = n.idleTimeout,
                c = n.maxTransactionDuration,
                l =
                  "pageload" === e.op
                    ? (function () {
                        var e =
                          ((t = "sentry-trace"),
                          (n = Object(_.a)().document.querySelector("meta[name=" + t + "]")),
                          n ? n.getAttribute("content") : null);
                        var t, n;
                        if (e) return Object(O.b)(e);
                        return;
                      })()
                    : void 0,
                d = Object(a.a)(Object(a.a)(Object(a.a)({}, e), l), { trimEnd: !0 }),
                f = "function" == typeof r ? r(d) : d,
                p = void 0 === f ? Object(a.a)(Object(a.a)({}, d), { sampled: !1 }) : f;
              !1 === p.sampled && u.a && i.c.log("[Tracing] Will not send " + p.op + " transaction because of beforeNavigate."),
                u.a && i.c.log("[Tracing] Starting " + p.op + " transaction on scope");
              var v = this._getCurrentHub(),
                h = Object(_.a)().location,
                g = Object(o.b)(v, p, s, !0, { location: h });
              return (
                g.registerBeforeFinishCallback(function (e, n) {
                  t._metrics.addPerformanceEntries(e),
                    (function (e, t, n) {
                      var r = n - t.startTimestamp;
                      n && (r > e || r < 0) && (t.setStatus("deadline_exceeded"), t.setTag("maxTransactionDurationExceeded", "true"));
                    })(Object(S.d)(c), e, n);
                }),
                g.setTag("idleTimeout", this._configuredIdleTimeout),
                g
              );
            }
            u.a && i.c.warn("[Tracing] Did not create " + e.op + " transaction because _getCurrentHub is invalid.");
          }),
          (e.id = "BrowserTracing"),
          e
        );
      })();
    var V,
      z = n(341);
    !(function (e) {
      (e.Ok = "ok"),
        (e.DeadlineExceeded = "deadline_exceeded"),
        (e.Unauthenticated = "unauthenticated"),
        (e.PermissionDenied = "permission_denied"),
        (e.NotFound = "not_found"),
        (e.ResourceExhausted = "resource_exhausted"),
        (e.InvalidArgument = "invalid_argument"),
        (e.Unimplemented = "unimplemented"),
        (e.Unavailable = "unavailable"),
        (e.InternalError = "internal_error"),
        (e.UnknownError = "unknown_error"),
        (e.Cancelled = "cancelled"),
        (e.AlreadyExists = "already_exists"),
        (e.FailedPrecondition = "failed_precondition"),
        (e.Aborted = "aborted"),
        (e.OutOfRange = "out_of_range"),
        (e.DataLoss = "data_loss");
    })(V || (V = {}));
    var X = n(487),
      K = n(723);
    Object(o.a)();
  },
  3198: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var r = n(59),
        o = n(77),
        a = n(1982),
        i = n(131),
        u = n(816);
      function s(t, n, s) {
        void 0 === n && (n = 1 / 0), void 0 === s && (s = 1 / 0);
        try {
          return (function t(n, s, c, l, d) {
            void 0 === c && (c = 1 / 0);
            void 0 === l && (l = 1 / 0);
            void 0 === d && (d = Object(a.a)());
            var f = Object(r.c)(d, 2),
              p = f[0],
              v = f[1],
              h = s;
            if (h && "function" == typeof h.toJSON)
              try {
                return h.toJSON();
              } catch (e) {}
            if (null === s || (["number", "boolean", "string"].includes(typeof s) && !Object(o.h)(s))) return s;
            var g = (function (t, n) {
              try {
                return "domain" === t && n && "object" == typeof n && n._events
                  ? "[Domain]"
                  : "domainEmitter" === t
                  ? "[DomainEmitter]"
                  : void 0 !== e && n === e
                  ? "[Global]"
                  : "undefined" != typeof window && n === window
                  ? "[Window]"
                  : "undefined" != typeof document && n === document
                  ? "[Document]"
                  : Object(o.m)(n)
                  ? "[SyntheticEvent]"
                  : "number" == typeof n && n != n
                  ? "[NaN]"
                  : void 0 === n
                  ? "[undefined]"
                  : "function" == typeof n
                  ? "[Function: " + Object(u.b)(n) + "]"
                  : "symbol" == typeof n
                  ? "[" + String(n) + "]"
                  : "bigint" == typeof n
                  ? "[BigInt: " + String(n) + "]"
                  : "[object " + Object.getPrototypeOf(n).constructor.name + "]";
              } catch (e) {
                return "**non-serializable** (" + e + ")";
              }
            })(n, s);
            if (!g.startsWith("[object ")) return g;
            if (0 === c) return g.replace("object ", "");
            if (p(s)) return "[Circular ~]";
            var m = Array.isArray(s) ? [] : {},
              y = 0,
              _ = Object(o.d)(s) || Object(o.f)(s) ? Object(i.b)(s) : s;
            for (var b in _)
              if (Object.prototype.hasOwnProperty.call(_, b)) {
                if (y >= l) {
                  m[b] = "[MaxProperties ~]";
                  break;
                }
                var S = _[b];
                (m[b] = t(b, S, c - 1, l, d)), (y += 1);
              }
            return v(s), m;
          })("", t, n, s);
        } catch (e) {
          return { ERROR: "**non-serializable** (" + e + ")" };
        }
      }
      function c(e, t, n) {
        void 0 === t && (t = 3), void 0 === n && (n = 102400);
        var r,
          o = s(e, t);
        return (
          (r = o),
          (function (e) {
            return ~-encodeURI(e).split(/%..|./).length;
          })(JSON.stringify(r)) > n
            ? c(e, t - 1, n)
            : o
        );
      }
    }).call(this, n(44));
  },
  341: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return u;
    }),
      n.d(t, "a", function () {
        return s;
      }),
      n.d(t, "c", function () {
        return c;
      });
    var r = n(43),
      o = n(723),
      a = n(270),
      i = n(131),
      u = (function () {
        function e(e) {
          void 0 === e && (e = 1e3), (this.spans = []), (this._maxlen = e);
        }
        return (
          (e.prototype.add = function (e) {
            this.spans.length > this._maxlen ? (e.spanRecorder = void 0) : this.spans.push(e);
          }),
          e
        );
      })(),
      s = (function () {
        function e(e) {
          if (
            ((this.traceId = Object(o.g)()),
            (this.spanId = Object(o.g)().substring(16)),
            (this.startTimestamp = Object(a.d)()),
            (this.tags = {}),
            (this.data = {}),
            !e)
          )
            return this;
          e.traceId && (this.traceId = e.traceId),
            e.spanId && (this.spanId = e.spanId),
            e.parentSpanId && (this.parentSpanId = e.parentSpanId),
            "sampled" in e && (this.sampled = e.sampled),
            e.op && (this.op = e.op),
            e.description && (this.description = e.description),
            e.data && (this.data = e.data),
            e.tags && (this.tags = e.tags),
            e.status && (this.status = e.status),
            e.startTimestamp && (this.startTimestamp = e.startTimestamp),
            e.endTimestamp && (this.endTimestamp = e.endTimestamp);
        }
        return (
          (e.prototype.child = function (e) {
            return this.startChild(e);
          }),
          (e.prototype.startChild = function (t) {
            var n = new e(Object(r.a)(Object(r.a)({}, t), { parentSpanId: this.spanId, sampled: this.sampled, traceId: this.traceId }));
            return (n.spanRecorder = this.spanRecorder), n.spanRecorder && n.spanRecorder.add(n), (n.transaction = this.transaction), n;
          }),
          (e.prototype.setTag = function (e, t) {
            var n;
            return (this.tags = Object(r.a)(Object(r.a)({}, this.tags), (((n = {})[e] = t), n))), this;
          }),
          (e.prototype.setData = function (e, t) {
            var n;
            return (this.data = Object(r.a)(Object(r.a)({}, this.data), (((n = {})[e] = t), n))), this;
          }),
          (e.prototype.setStatus = function (e) {
            return (this.status = e), this;
          }),
          (e.prototype.setHttpStatus = function (e) {
            this.setTag("http.status_code", String(e));
            var t = c(e);
            return "unknown_error" !== t && this.setStatus(t), this;
          }),
          (e.prototype.isSuccess = function () {
            return "ok" === this.status;
          }),
          (e.prototype.finish = function (e) {
            this.endTimestamp = "number" == typeof e ? e : Object(a.d)();
          }),
          (e.prototype.toTraceparent = function () {
            var e = "";
            return void 0 !== this.sampled && (e = this.sampled ? "-1" : "-0"), this.traceId + "-" + this.spanId + e;
          }),
          (e.prototype.toContext = function () {
            return Object(i.c)({
              data: this.data,
              description: this.description,
              endTimestamp: this.endTimestamp,
              op: this.op,
              parentSpanId: this.parentSpanId,
              sampled: this.sampled,
              spanId: this.spanId,
              startTimestamp: this.startTimestamp,
              status: this.status,
              tags: this.tags,
              traceId: this.traceId
            });
          }),
          (e.prototype.updateWithContext = function (e) {
            var t, n, r, o, a;
            return (
              (this.data = null != (t = e.data) ? t : {}),
              (this.description = e.description),
              (this.endTimestamp = e.endTimestamp),
              (this.op = e.op),
              (this.parentSpanId = e.parentSpanId),
              (this.sampled = e.sampled),
              (this.spanId = null != (n = e.spanId) ? n : this.spanId),
              (this.startTimestamp = null != (r = e.startTimestamp) ? r : this.startTimestamp),
              (this.status = e.status),
              (this.tags = null != (o = e.tags) ? o : {}),
              (this.traceId = null != (a = e.traceId) ? a : this.traceId),
              this
            );
          }),
          (e.prototype.getTraceContext = function () {
            return Object(i.c)({
              data: Object.keys(this.data).length > 0 ? this.data : void 0,
              description: this.description,
              op: this.op,
              parent_span_id: this.parentSpanId,
              span_id: this.spanId,
              status: this.status,
              tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
              trace_id: this.traceId
            });
          }),
          (e.prototype.toJSON = function () {
            return Object(i.c)({
              data: Object.keys(this.data).length > 0 ? this.data : void 0,
              description: this.description,
              op: this.op,
              parent_span_id: this.parentSpanId,
              span_id: this.spanId,
              start_timestamp: this.startTimestamp,
              status: this.status,
              tags: Object.keys(this.tags).length > 0 ? this.tags : void 0,
              timestamp: this.endTimestamp,
              trace_id: this.traceId
            });
          }),
          e
        );
      })();
    function c(e) {
      if (e < 400 && e >= 100) return "ok";
      if (e >= 400 && e < 500)
        switch (e) {
          case 401:
            return "unauthenticated";
          case 403:
            return "permission_denied";
          case 404:
            return "not_found";
          case 409:
            return "already_exists";
          case 413:
            return "failed_precondition";
          case 429:
            return "resource_exhausted";
          default:
            return "invalid_argument";
        }
      if (e >= 500 && e < 600)
        switch (e) {
          case 501:
            return "unimplemented";
          case 503:
            return "unavailable";
          case 504:
            return "deadline_exceeded";
          default:
            return "internal_error";
        }
      return "unknown_error";
    }
  },
  343: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return o;
      });
    var r = "finishReason",
      o = ["heartbeatFailed", "idleTimeout", "documentHidden"];
  },
  35: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    var r = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
  },
  39: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    }),
      n.d(t, "b", function () {
        return a;
      });
    var r = function () {
      return (r =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function o(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        a = n.call(e),
        i = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (o) throw o.error;
        }
      }
      return i;
    }
    function a() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
      return e;
    }
  },
  43: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "d", function () {
        return i;
      }),
      n.d(t, "f", function () {
        return u;
      }),
      n.d(t, "c", function () {
        return s;
      }),
      n.d(t, "e", function () {
        return c;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var r = function (e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function o(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    var a = function () {
      return (a =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function i(e, t) {
      var n = {};
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var o = 0;
        for (r = Object.getOwnPropertySymbols(e); o < r.length; o++)
          t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
      }
      return n;
    }
    function u(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
          }
        };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function s(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        a = n.call(e),
        i = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (o) throw o.error;
        }
      }
      return i;
    }
    function c() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
      return e;
    }
  },
  443: function (e, t, n) {
    "use strict";
    (function (e) {
      n.d(t, "b", function () {
        return g;
      }),
        n.d(t, "a", function () {
          return m;
        });
      var r = n(43),
        o = n(488),
        a = n(79),
        i = n(77),
        u = n(247),
        s = n(1983),
        c = n(35),
        l = n(486),
        d = n(487),
        f = n(68);
      function p() {
        var e = this.getScope();
        if (e) {
          var t = e.getSpan();
          if (t) return { "sentry-trace": t.toTraceparent() };
        }
        return {};
      }
      function v(e, t, n) {
        return Object(f.b)(t)
          ? void 0 !== e.sampled
            ? (e.setMetadata({ transactionSampling: { method: "explicitly_set" } }), e)
            : ("function" == typeof t.tracesSampler
                ? ((r = t.tracesSampler(n)), e.setMetadata({ transactionSampling: { method: "client_sampler", rate: Number(r) } }))
                : void 0 !== n.parentSampled
                ? ((r = n.parentSampled), e.setMetadata({ transactionSampling: { method: "inheritance" } }))
                : ((r = t.tracesSampleRate), e.setMetadata({ transactionSampling: { method: "client_rate", rate: Number(r) } })),
              (function (e) {
                if (Object(i.h)(e) || ("number" != typeof e && "boolean" != typeof e))
                  return (
                    c.a &&
                      a.c.warn(
                        "[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " +
                          JSON.stringify(e) +
                          " of type " +
                          JSON.stringify(typeof e) +
                          "."
                      ),
                    !1
                  );
                if (e < 0 || e > 1)
                  return c.a && a.c.warn("[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got " + e + "."), !1;
                return !0;
              })(r)
                ? r
                  ? ((e.sampled = Math.random() < r),
                    e.sampled
                      ? (c.a && a.c.log("[Tracing] starting " + e.op + " transaction - " + e.name), e)
                      : (c.a &&
                          a.c.log(
                            "[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = " +
                              Number(r) +
                              ")"
                          ),
                        e))
                  : (c.a &&
                      a.c.log(
                        "[Tracing] Discarding transaction because " +
                          ("function" == typeof t.tracesSampler
                            ? "tracesSampler returned 0 or false"
                            : "a negative sampling decision was inherited or tracesSampleRate is set to 0")
                      ),
                    (e.sampled = !1),
                    e)
                : (c.a && a.c.warn("[Tracing] Discarding transaction because of invalid sample rate."), (e.sampled = !1), e))
          : ((e.sampled = !1), e);
        var r;
      }
      function h(e, t) {
        var n = this.getClient(),
          o = (n && n.getOptions()) || {},
          a = new d.a(e, this);
        return (
          (a = v(a, o, Object(r.a)({ parentSampled: e.parentSampled, transactionContext: e }, t))).sampled &&
            a.initSpanRecorder(o._experiments && o._experiments.maxSpans),
          a
        );
      }
      function g(e, t, n, o, a) {
        var i = e.getClient(),
          u = (i && i.getOptions()) || {},
          s = new l.b(t, e, n, o);
        return (
          (s = v(s, u, Object(r.a)({ parentSampled: t.parentSampled, transactionContext: t }, a))).sampled &&
            s.initSpanRecorder(u._experiments && u._experiments.maxSpans),
          s
        );
      }
      function m() {
        var t;
        (t = Object(o.d)()).__SENTRY__ &&
          ((t.__SENTRY__.extensions = t.__SENTRY__.extensions || {}),
          t.__SENTRY__.extensions.startTransaction || (t.__SENTRY__.extensions.startTransaction = h),
          t.__SENTRY__.extensions.traceHeaders || (t.__SENTRY__.extensions.traceHeaders = p)),
          Object(u.b)() &&
            (function () {
              var t = Object(o.d)();
              if (t.__SENTRY__) {
                var n = {
                    mongodb: function () {
                      return new (Object(u.a)(e, "./integrations/node/mongo").Mongo)();
                    },
                    mongoose: function () {
                      return new (Object(u.a)(e, "./integrations/node/mongo").Mongo)({ mongoose: !0 });
                    },
                    mysql: function () {
                      return new (Object(u.a)(e, "./integrations/node/mysql").Mysql)();
                    },
                    pg: function () {
                      return new (Object(u.a)(e, "./integrations/node/postgres").Postgres)();
                    }
                  },
                  a = Object.keys(n)
                    .filter(function (e) {
                      return !!Object(u.c)(e);
                    })
                    .map(function (e) {
                      try {
                        return n[e]();
                      } catch (e) {
                        return;
                      }
                    })
                    .filter(function (e) {
                      return e;
                    });
                a.length > 0 && (t.__SENTRY__.integrations = Object(r.e)(t.__SENTRY__.integrations || [], a));
              }
            })(),
          Object(s.a)();
      }
    }).call(this, n(456)(e));
  },
  446: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return o;
    }),
      n.d(t, "c", function () {
        return a;
      }),
      n.d(t, "b", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return u;
      });
    var r = n(77);
    function o(e, t) {
      return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "...";
    }
    function a(e, t) {
      var n = e,
        r = n.length;
      if (r <= 150) return n;
      t > r && (t = r);
      var o = Math.max(t - 60, 0);
      o < 5 && (o = 0);
      var a = Math.min(o + 140, r);
      return (
        a > r - 5 && (a = r),
        a === r && (o = Math.max(a - 140, 0)),
        (n = n.slice(o, a)),
        o > 0 && (n = "'{snip} " + n),
        a < r && (n += " {snip}"),
        n
      );
    }
    function i(e, t) {
      if (!Array.isArray(e)) return "";
      for (var n = [], r = 0; r < e.length; r++) {
        var o = e[r];
        try {
          n.push(String(o));
        } catch (e) {
          n.push("[value cannot be serialized]");
        }
      }
      return n.join(t);
    }
    function u(e, t) {
      return !!Object(r.l)(e) && (Object(r.k)(t) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t));
    }
  },
  486: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l;
    }),
      n.d(t, "b", function () {
        return f;
      });
    var r = n(43),
      o = n(270),
      a = n(79),
      i = n(343),
      u = n(35),
      s = n(341),
      c = n(487),
      l = 1e3,
      d = (function (e) {
        function t(t, n, r, o) {
          void 0 === r && (r = "");
          var a = e.call(this, o) || this;
          return (a._pushActivity = t), (a._popActivity = n), (a.transactionSpanId = r), a;
        }
        return (
          Object(r.b)(t, e),
          (t.prototype.add = function (t) {
            var n = this;
            t.spanId !== this.transactionSpanId &&
              ((t.finish = function (e) {
                (t.endTimestamp = "number" == typeof e ? e : Object(o.d)()), n._popActivity(t.spanId);
              }),
              void 0 === t.endTimestamp && this._pushActivity(t.spanId)),
              e.prototype.add.call(this, t);
          }),
          t
        );
      })(s.b),
      f = (function (e) {
        function t(t, n, r, o) {
          void 0 === r && (r = l), void 0 === o && (o = !1);
          var i = e.call(this, t, n) || this;
          return (
            (i._idleHub = n),
            (i._idleTimeout = r),
            (i._onScope = o),
            (i.activities = {}),
            (i._heartbeatCounter = 0),
            (i._finished = !1),
            (i._beforeFinishCallbacks = []),
            n &&
              o &&
              (p(n),
              u.a && a.c.log("Setting idle transaction on scope. Span ID: " + i.spanId),
              n.configureScope(function (e) {
                return e.setSpan(i);
              })),
            (i._initTimeout = setTimeout(function () {
              i._finished || i.finish();
            }, i._idleTimeout)),
            i
          );
        }
        return (
          Object(r.b)(t, e),
          (t.prototype.finish = function (t) {
            var n,
              i,
              s = this;
            if ((void 0 === t && (t = Object(o.d)()), (this._finished = !0), (this.activities = {}), this.spanRecorder)) {
              u.a && a.c.log("[Tracing] finishing IdleTransaction", new Date(1e3 * t).toISOString(), this.op);
              try {
                for (var c = Object(r.f)(this._beforeFinishCallbacks), l = c.next(); !l.done; l = c.next()) {
                  (0, l.value)(this, t);
                }
              } catch (e) {
                n = { error: e };
              } finally {
                try {
                  l && !l.done && (i = c.return) && i.call(c);
                } finally {
                  if (n) throw n.error;
                }
              }
              (this.spanRecorder.spans = this.spanRecorder.spans.filter(function (e) {
                if (e.spanId === s.spanId) return !0;
                e.endTimestamp ||
                  ((e.endTimestamp = t),
                  e.setStatus("cancelled"),
                  u.a && a.c.log("[Tracing] cancelling span since transaction ended early", JSON.stringify(e, void 0, 2)));
                var n = e.startTimestamp < t;
                return (
                  n ||
                    (u.a &&
                      a.c.log("[Tracing] discarding Span since it happened after Transaction was finished", JSON.stringify(e, void 0, 2))),
                  n
                );
              })),
                u.a && a.c.log("[Tracing] flushing IdleTransaction");
            } else u.a && a.c.log("[Tracing] No active IdleTransaction");
            return this._onScope && p(this._idleHub), e.prototype.finish.call(this, t);
          }),
          (t.prototype.registerBeforeFinishCallback = function (e) {
            this._beforeFinishCallbacks.push(e);
          }),
          (t.prototype.initSpanRecorder = function (e) {
            var t = this;
            if (!this.spanRecorder) {
              (this.spanRecorder = new d(
                function (e) {
                  t._finished || t._pushActivity(e);
                },
                function (e) {
                  t._finished || t._popActivity(e);
                },
                this.spanId,
                e
              )),
                u.a && a.c.log("Starting heartbeat"),
                this._pingHeartbeat();
            }
            this.spanRecorder.add(this);
          }),
          (t.prototype._pushActivity = function (e) {
            this._initTimeout && (clearTimeout(this._initTimeout), (this._initTimeout = void 0)),
              u.a && a.c.log("[Tracing] pushActivity: " + e),
              (this.activities[e] = !0),
              u.a && a.c.log("[Tracing] new activities count", Object.keys(this.activities).length);
          }),
          (t.prototype._popActivity = function (e) {
            var t = this;
            if (
              (this.activities[e] &&
                (u.a && a.c.log("[Tracing] popActivity " + e),
                delete this.activities[e],
                u.a && a.c.log("[Tracing] new activities count", Object.keys(this.activities).length)),
              0 === Object.keys(this.activities).length)
            ) {
              var n = this._idleTimeout,
                r = Object(o.d)() + n / 1e3;
              setTimeout(function () {
                t._finished || (t.setTag(i.a, i.b[1]), t.finish(r));
              }, n);
            }
          }),
          (t.prototype._beat = function () {
            if (!this._finished) {
              var e = Object.keys(this.activities).join("");
              e === this._prevHeartbeatString ? (this._heartbeatCounter += 1) : (this._heartbeatCounter = 1),
                (this._prevHeartbeatString = e),
                this._heartbeatCounter >= 3
                  ? (u.a && a.c.log("[Tracing] Transaction finished because of no change for 3 heart beats"),
                    this.setStatus("deadline_exceeded"),
                    this.setTag(i.a, i.b[0]),
                    this.finish())
                  : this._pingHeartbeat();
            }
          }),
          (t.prototype._pingHeartbeat = function () {
            var e = this;
            u.a && a.c.log("pinging Heartbeat -> current counter: " + this._heartbeatCounter),
              setTimeout(function () {
                e._beat();
              }, 5e3);
          }),
          t
        );
      })(c.a);
    function p(e) {
      if (e) {
        var t = e.getScope();
        if (t) t.getTransaction() && t.setSpan(void 0);
      }
    }
  },
  487: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return l;
    });
    var r = n(43),
      o = n(488),
      a = n(77),
      i = n(79),
      u = n(131),
      s = n(35),
      c = n(341),
      l = (function (e) {
        function t(t, n) {
          var r = e.call(this, t) || this;
          return (
            (r._measurements = {}),
            (r._hub = Object(o.b)()),
            Object(a.g)(n, o.a) && (r._hub = n),
            (r.name = t.name || ""),
            (r.metadata = t.metadata || {}),
            (r._trimEnd = t.trimEnd),
            (r.transaction = r),
            r
          );
        }
        return (
          Object(r.b)(t, e),
          (t.prototype.setName = function (e) {
            this.name = e;
          }),
          (t.prototype.initSpanRecorder = function (e) {
            void 0 === e && (e = 1e3), this.spanRecorder || (this.spanRecorder = new c.b(e)), this.spanRecorder.add(this);
          }),
          (t.prototype.setMeasurements = function (e) {
            this._measurements = Object(r.a)({}, e);
          }),
          (t.prototype.setMetadata = function (e) {
            this.metadata = Object(r.a)(Object(r.a)({}, this.metadata), e);
          }),
          (t.prototype.finish = function (t) {
            var n = this;
            if (void 0 === this.endTimestamp) {
              if (
                (this.name ||
                  (s.a && i.c.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),
                  (this.name = "<unlabeled transaction>")),
                e.prototype.finish.call(this, t),
                !0 === this.sampled)
              ) {
                var r = this.spanRecorder
                  ? this.spanRecorder.spans.filter(function (e) {
                      return e !== n && e.endTimestamp;
                    })
                  : [];
                this._trimEnd &&
                  r.length > 0 &&
                  (this.endTimestamp = r.reduce(function (e, t) {
                    return e.endTimestamp && t.endTimestamp ? (e.endTimestamp > t.endTimestamp ? e : t) : e;
                  }).endTimestamp);
                var o = {
                  contexts: { trace: this.getTraceContext() },
                  spans: r,
                  start_timestamp: this.startTimestamp,
                  tags: this.tags,
                  timestamp: this.endTimestamp,
                  transaction: this.name,
                  type: "transaction",
                  sdkProcessingMetadata: this.metadata
                };
                return (
                  Object.keys(this._measurements).length > 0 &&
                    (s.a && i.c.log("[Measurements] Adding measurements to transaction", JSON.stringify(this._measurements, void 0, 2)),
                    (o.measurements = this._measurements)),
                  s.a && i.c.log("[Tracing] Finishing " + this.op + " transaction: " + this.name + "."),
                  this._hub.captureEvent(o)
                );
              }
              s.a && i.c.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.");
              var a = this._hub.getClient(),
                u = a && a.getTransport && a.getTransport();
              u && u.recordLostEvent && u.recordLostEvent("sample_rate", "transaction");
            }
          }),
          (t.prototype.toContext = function () {
            var t = e.prototype.toContext.call(this);
            return Object(u.c)(Object(r.a)(Object(r.a)({}, t), { name: this.name, trimEnd: this._trimEnd }));
          }),
          (t.prototype.updateWithContext = function (t) {
            var n;
            return (
              e.prototype.updateWithContext.call(this, t), (this.name = null != (n = t.name) ? n : ""), (this._trimEnd = t.trimEnd), this
            );
          }),
          t
        );
      })(c.a);
  },
  488: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return f;
    }),
      n.d(t, "d", function () {
        return p;
      }),
      n.d(t, "e", function () {
        return v;
      }),
      n.d(t, "b", function () {
        return h;
      }),
      n.d(t, "c", function () {
        return m;
      });
    var r = n(39),
      o = n(723),
      a = n(270),
      i = n(79),
      u = n(130),
      s = n(247),
      c = "undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__,
      l = n(817),
      d = n(1981),
      f = (function () {
        function e(e, t, n) {
          void 0 === t && (t = new l.a()),
            void 0 === n && (n = 4),
            (this._version = n),
            (this._stack = [{}]),
            (this.getStackTop().scope = t),
            e && this.bindClient(e);
        }
        return (
          (e.prototype.isOlderThan = function (e) {
            return this._version < e;
          }),
          (e.prototype.bindClient = function (e) {
            (this.getStackTop().client = e), e && e.setupIntegrations && e.setupIntegrations();
          }),
          (e.prototype.pushScope = function () {
            var e = l.a.clone(this.getScope());
            return this.getStack().push({ client: this.getClient(), scope: e }), e;
          }),
          (e.prototype.popScope = function () {
            return !(this.getStack().length <= 1) && !!this.getStack().pop();
          }),
          (e.prototype.withScope = function (e) {
            var t = this.pushScope();
            try {
              e(t);
            } finally {
              this.popScope();
            }
          }),
          (e.prototype.getClient = function () {
            return this.getStackTop().client;
          }),
          (e.prototype.getScope = function () {
            return this.getStackTop().scope;
          }),
          (e.prototype.getStack = function () {
            return this._stack;
          }),
          (e.prototype.getStackTop = function () {
            return this._stack[this._stack.length - 1];
          }),
          (e.prototype.captureException = function (e, t) {
            var n = (this._lastEventId = t && t.event_id ? t.event_id : Object(o.g)()),
              a = t;
            if (!t) {
              var i = void 0;
              try {
                throw new Error("Sentry syntheticException");
              } catch (e) {
                i = e;
              }
              a = { originalException: e, syntheticException: i };
            }
            return this._invokeClient("captureException", e, Object(r.a)(Object(r.a)({}, a), { event_id: n })), n;
          }),
          (e.prototype.captureMessage = function (e, t, n) {
            var a = (this._lastEventId = n && n.event_id ? n.event_id : Object(o.g)()),
              i = n;
            if (!n) {
              var u = void 0;
              try {
                throw new Error(e);
              } catch (e) {
                u = e;
              }
              i = { originalException: e, syntheticException: u };
            }
            return this._invokeClient("captureMessage", e, t, Object(r.a)(Object(r.a)({}, i), { event_id: a })), a;
          }),
          (e.prototype.captureEvent = function (e, t) {
            var n = t && t.event_id ? t.event_id : Object(o.g)();
            return (
              "transaction" !== e.type && (this._lastEventId = n),
              this._invokeClient("captureEvent", e, Object(r.a)(Object(r.a)({}, t), { event_id: n })),
              n
            );
          }),
          (e.prototype.lastEventId = function () {
            return this._lastEventId;
          }),
          (e.prototype.addBreadcrumb = function (e, t) {
            var n = this.getStackTop(),
              o = n.scope,
              u = n.client;
            if (o && u) {
              var s = (u.getOptions && u.getOptions()) || {},
                c = s.beforeBreadcrumb,
                l = void 0 === c ? null : c,
                d = s.maxBreadcrumbs,
                f = void 0 === d ? 100 : d;
              if (!(f <= 0)) {
                var p = Object(a.b)(),
                  v = Object(r.a)({ timestamp: p }, e),
                  h = l
                    ? Object(i.b)(function () {
                        return l(v, t);
                      })
                    : v;
                null !== h && o.addBreadcrumb(h, f);
              }
            }
          }),
          (e.prototype.setUser = function (e) {
            var t = this.getScope();
            t && t.setUser(e);
          }),
          (e.prototype.setTags = function (e) {
            var t = this.getScope();
            t && t.setTags(e);
          }),
          (e.prototype.setExtras = function (e) {
            var t = this.getScope();
            t && t.setExtras(e);
          }),
          (e.prototype.setTag = function (e, t) {
            var n = this.getScope();
            n && n.setTag(e, t);
          }),
          (e.prototype.setExtra = function (e, t) {
            var n = this.getScope();
            n && n.setExtra(e, t);
          }),
          (e.prototype.setContext = function (e, t) {
            var n = this.getScope();
            n && n.setContext(e, t);
          }),
          (e.prototype.configureScope = function (e) {
            var t = this.getStackTop(),
              n = t.scope,
              r = t.client;
            n && r && e(n);
          }),
          (e.prototype.run = function (e) {
            var t = v(this);
            try {
              e(this);
            } finally {
              v(t);
            }
          }),
          (e.prototype.getIntegration = function (e) {
            var t = this.getClient();
            if (!t) return null;
            try {
              return t.getIntegration(e);
            } catch (t) {
              return c && i.c.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null;
            }
          }),
          (e.prototype.startSpan = function (e) {
            return this._callExtensionMethod("startSpan", e);
          }),
          (e.prototype.startTransaction = function (e, t) {
            return this._callExtensionMethod("startTransaction", e, t);
          }),
          (e.prototype.traceHeaders = function () {
            return this._callExtensionMethod("traceHeaders");
          }),
          (e.prototype.captureSession = function (e) {
            if ((void 0 === e && (e = !1), e)) return this.endSession();
            this._sendSessionUpdate();
          }),
          (e.prototype.endSession = function () {
            var e = this.getStackTop(),
              t = e && e.scope,
              n = t && t.getSession();
            n && n.close(), this._sendSessionUpdate(), t && t.setSession();
          }),
          (e.prototype.startSession = function (e) {
            var t = this.getStackTop(),
              n = t.scope,
              o = t.client,
              a = (o && o.getOptions()) || {},
              i = a.release,
              s = a.environment,
              c = (Object(u.a)().navigator || {}).userAgent,
              l = new d.a(
                Object(r.a)(Object(r.a)(Object(r.a)({ release: i, environment: s }, n && { user: n.getUser() }), c && { userAgent: c }), e)
              );
            if (n) {
              var f = n.getSession && n.getSession();
              f && "ok" === f.status && f.update({ status: "exited" }), this.endSession(), n.setSession(l);
            }
            return l;
          }),
          (e.prototype._sendSessionUpdate = function () {
            var e = this.getStackTop(),
              t = e.scope,
              n = e.client;
            if (t) {
              var r = t.getSession && t.getSession();
              r && n && n.captureSession && n.captureSession(r);
            }
          }),
          (e.prototype._invokeClient = function (e) {
            for (var t, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
            var a = this.getStackTop(),
              i = a.scope,
              u = a.client;
            u && u[e] && (t = u)[e].apply(t, Object(r.b)(n, [i]));
          }),
          (e.prototype._callExtensionMethod = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = p(),
              o = r.__SENTRY__;
            if (o && o.extensions && "function" == typeof o.extensions[e]) return o.extensions[e].apply(this, t);
            c && i.c.warn("Extension method " + e + " couldn't be found, doing nothing.");
          }),
          e
        );
      })();
    function p() {
      var e = Object(u.a)();
      return (e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 }), e;
    }
    function v(e) {
      var t = p(),
        n = m(t);
      return y(t, e), n;
    }
    function h() {
      var e = p();
      return (
        (g(e) && !m(e).isOlderThan(4)) || y(e, new f()),
        Object(s.b)()
          ? (function (e) {
              try {
                var t = p().__SENTRY__,
                  n = t && t.extensions && t.extensions.domain && t.extensions.domain.active;
                if (!n) return m(e);
                if (!g(n) || m(n).isOlderThan(4)) {
                  var r = m(e).getStackTop();
                  y(n, new f(r.client, l.a.clone(r.scope)));
                }
                return m(n);
              } catch (t) {
                return m(e);
              }
            })(e)
          : m(e)
      );
    }
    function g(e) {
      return !!(e && e.__SENTRY__ && e.__SENTRY__.hub);
    }
    function m(e) {
      return Object(u.b)(
        "hub",
        function () {
          return new f();
        },
        e
      );
    }
    function y(e, t) {
      return !!e && (((e.__SENTRY__ = e.__SENTRY__ || {}).hub = t), !0);
    }
  },
  59: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "e", function () {
        return i;
      }),
      n.d(t, "c", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return s;
      });
    /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
    var r = function (e, t) {
      return (r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        })(e, t);
    };
    function o(e, t) {
      function n() {
        this.constructor = e;
      }
      r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    var a = function () {
      return (a =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
    function i(e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && "number" == typeof e.length)
        return {
          next: function () {
            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
          }
        };
      throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function u(e, t) {
      var n = "function" == typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r,
        o,
        a = n.call(e),
        i = [];
      try {
        for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value);
      } catch (e) {
        o = { error: e };
      } finally {
        try {
          r && !r.done && (n = a.return) && n.call(a);
        } finally {
          if (o) throw o.error;
        }
      }
      return i;
    }
    function s() {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
      return e;
    }
  },
  68: function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return o;
    }),
      n.d(t, "a", function () {
        return a;
      }),
      n.d(t, "c", function () {
        return i;
      }),
      n.d(t, "d", function () {
        return u;
      });
    var r = n(488);
    function o(e) {
      var t = Object(r.b)().getClient(),
        n = e || (t && t.getOptions());
      return !!n && ("tracesSampleRate" in n || "tracesSampler" in n);
    }
    function a(e) {
      var t = (e || Object(r.b)()).getScope();
      return t && t.getTransaction();
    }
    function i(e) {
      return e / 1e3;
    }
    function u(e) {
      return 1e3 * e;
    }
  },
  722: function (e, t, n) {
    "use strict";
    n.d(t, "c", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return a;
      }),
      n.d(t, "a", function () {
        return i;
      });
    var r = n(77);
    function o(e) {
      return new i(function (t) {
        t(e);
      });
    }
    function a(e) {
      return new i(function (t, n) {
        n(e);
      });
    }
    var i = (function () {
      function e(e) {
        var t = this;
        (this._state = 0),
          (this._handlers = []),
          (this._resolve = function (e) {
            t._setResult(1, e);
          }),
          (this._reject = function (e) {
            t._setResult(2, e);
          }),
          (this._setResult = function (e, n) {
            0 === t._state && (Object(r.n)(n) ? n.then(t._resolve, t._reject) : ((t._state = e), (t._value = n), t._executeHandlers()));
          }),
          (this._executeHandlers = function () {
            if (0 !== t._state) {
              var e = t._handlers.slice();
              (t._handlers = []),
                e.forEach(function (e) {
                  e[0] || (1 === t._state && e[1](t._value), 2 === t._state && e[2](t._value), (e[0] = !0));
                });
            }
          });
        try {
          e(this._resolve, this._reject);
        } catch (e) {
          this._reject(e);
        }
      }
      return (
        (e.prototype.then = function (t, n) {
          var r = this;
          return new e(function (e, o) {
            r._handlers.push([
              !1,
              function (n) {
                if (t)
                  try {
                    e(t(n));
                  } catch (e) {
                    o(e);
                  }
                else e(n);
              },
              function (t) {
                if (n)
                  try {
                    e(n(t));
                  } catch (e) {
                    o(e);
                  }
                else o(t);
              }
            ]),
              r._executeHandlers();
          });
        }),
        (e.prototype.catch = function (e) {
          return this.then(function (e) {
            return e;
          }, e);
        }),
        (e.prototype.finally = function (t) {
          var n = this;
          return new e(function (e, r) {
            var o, a;
            return n
              .then(
                function (e) {
                  (a = !1), (o = e), t && t();
                },
                function (e) {
                  (a = !0), (o = e), t && t();
                }
              )
              .then(function () {
                a ? r(o) : e(o);
              });
          });
        }),
        e
      );
    })();
  },
  723: function (e, t, n) {
    "use strict";
    n.d(t, "g", function () {
      return i;
    }),
      n.d(t, "e", function () {
        return u;
      }),
      n.d(t, "d", function () {
        return c;
      }),
      n.d(t, "b", function () {
        return l;
      }),
      n.d(t, "a", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return f;
      }),
      n.d(t, "c", function () {
        return p;
      });
    var r = n(59),
      o = n(130),
      a = n(131);
    n(446);
    function i() {
      var e = Object(o.a)(),
        t = e.crypto || e.msCrypto;
      if (void 0 !== t && t.getRandomValues) {
        var n = new Uint16Array(8);
        t.getRandomValues(n), (n[3] = (4095 & n[3]) | 16384), (n[4] = (16383 & n[4]) | 32768);
        var r = function (e) {
          for (var t = e.toString(16); t.length < 4; ) t = "0" + t;
          return t;
        };
        return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7]);
      }
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = (16 * Math.random()) | 0;
        return ("x" === e ? t : (3 & t) | 8).toString(16);
      });
    }
    function u(e) {
      if (!e) return {};
      var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
      if (!t) return {};
      var n = t[6] || "",
        r = t[8] || "";
      return { host: t[4], path: t[5], protocol: t[2], relative: t[5] + n + r };
    }
    function s(e) {
      return e.exception && e.exception.values ? e.exception.values[0] : void 0;
    }
    function c(e) {
      var t = e.message,
        n = e.event_id;
      if (t) return t;
      var r = s(e);
      return r ? (r.type && r.value ? r.type + ": " + r.value : r.type || r.value || n || "<unknown>") : n || "<unknown>";
    }
    function l(e, t, n) {
      var r = (e.exception = e.exception || {}),
        o = (r.values = r.values || []),
        a = (o[0] = o[0] || {});
      a.value || (a.value = t || ""), a.type || (a.type = n || "Error");
    }
    function d(e, t) {
      var n = s(e);
      if (n) {
        var o = n.mechanism;
        if (((n.mechanism = Object(r.a)(Object(r.a)(Object(r.a)({}, { type: "generic", handled: !0 }), o), t)), t && "data" in t)) {
          var a = Object(r.a)(Object(r.a)({}, o && o.data), t.data);
          n.mechanism.data = a;
        }
      }
    }
    function f(e) {
      return e.split(/[\?#]/, 1)[0];
    }
    function p(e) {
      if (e && e.__sentry_captured__) return !0;
      try {
        Object(a.a)(e, "__sentry_captured__", !0);
      } catch (e) {}
      return !1;
    }
  },
  77: function (e, t, n) {
    "use strict";
    n.d(t, "d", function () {
      return o;
    }),
      n.d(t, "e", function () {
        return i;
      }),
      n.d(t, "a", function () {
        return u;
      }),
      n.d(t, "b", function () {
        return s;
      }),
      n.d(t, "l", function () {
        return c;
      }),
      n.d(t, "j", function () {
        return l;
      }),
      n.d(t, "i", function () {
        return d;
      }),
      n.d(t, "f", function () {
        return f;
      }),
      n.d(t, "c", function () {
        return p;
      }),
      n.d(t, "k", function () {
        return v;
      }),
      n.d(t, "n", function () {
        return h;
      }),
      n.d(t, "m", function () {
        return g;
      }),
      n.d(t, "h", function () {
        return m;
      }),
      n.d(t, "g", function () {
        return y;
      });
    var r = Object.prototype.toString;
    function o(e) {
      switch (r.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
          return !0;
        default:
          return y(e, Error);
      }
    }
    function a(e, t) {
      return r.call(e) === "[object " + t + "]";
    }
    function i(e) {
      return a(e, "ErrorEvent");
    }
    function u(e) {
      return a(e, "DOMError");
    }
    function s(e) {
      return a(e, "DOMException");
    }
    function c(e) {
      return a(e, "String");
    }
    function l(e) {
      return null === e || ("object" != typeof e && "function" != typeof e);
    }
    function d(e) {
      return a(e, "Object");
    }
    function f(e) {
      return "undefined" != typeof Event && y(e, Event);
    }
    function p(e) {
      return "undefined" != typeof Element && y(e, Element);
    }
    function v(e) {
      return a(e, "RegExp");
    }
    function h(e) {
      return Boolean(e && e.then && "function" == typeof e.then);
    }
    function g(e) {
      return d(e) && "nativeEvent" in e && "preventDefault" in e && "stopPropagation" in e;
    }
    function m(e) {
      return "number" == typeof e && e != e;
    }
    function y(e, t) {
      try {
        return e instanceof t;
      } catch (e) {
        return !1;
      }
    }
  },
  79: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return c;
      }),
      n.d(t, "c", function () {
        return r;
      });
    var r,
      o = n(59),
      a = n(268),
      i = n(130),
      u = Object(i.a)(),
      s = ["debug", "info", "warn", "error", "log", "assert"];
    function c(e) {
      var t = Object(i.a)();
      if (!("console" in t)) return e();
      var n = t.console,
        r = {};
      s.forEach(function (e) {
        var o = n[e] && n[e].__sentry_original__;
        e in t.console && o && ((r[e] = n[e]), (n[e] = o));
      });
      try {
        return e();
      } finally {
        Object.keys(r).forEach(function (e) {
          n[e] = r[e];
        });
      }
    }
    function l() {
      var e = !1,
        t = {
          enable: function () {
            e = !0;
          },
          disable: function () {
            e = !1;
          }
        };
      return (
        a.a
          ? s.forEach(function (n) {
              t[n] = function () {
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                e &&
                  c(function () {
                    var e;
                    (e = u.console)[n].apply(e, Object(o.d)(["Sentry Logger [" + n + "]:"], t));
                  });
              };
            })
          : s.forEach(function (e) {
              t[e] = function () {};
            }),
        t
      );
    }
    r = a.a ? Object(i.b)("logger", l) : l();
  },
  811: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r = n(11),
      o = n(132),
      a = n(10),
      i = n(144),
      u = n(1959),
      s = { orientation: "topRight", top: i.DEFAULT_BADGE_TOP },
      c = (0, r.createSelector)(
        function (e) {
          return o.deviceSelectors.selectDeviceSetting(i.DEVICE_SETTINGS.MOVABLE_BADGE_SETTINGS)(e);
        },
        function (e) {
          return o.deviceSelectors.selectDeviceSetting(i.DEVICE_SETTINGS.MOVABLE_BADGE_SETTINGS_BY_STORE)(e);
        },
        function (e) {
          return a.storesSelectors.selectCurrentStoreId()(e);
        },
        function (e, t, n) {
          return (0, u.shouldUseStoreBadgeSettings)(n) ? (t || {})[n] || (0, u.getDefaultBadgeSettingsByStoreId)(n) : e || s;
        }
      );
    t.default = c;
  },
  812: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.dontSetMe = function (e, t, n) {
        if (e[t]) return new Error("Invalid prop ".concat(t, " passed to ").concat(n, " - do not set this, set it on the child."));
      }),
      (t.findInArray = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (t.apply(t, [e[n], n, e])) return e[n];
      }),
      (t.int = function (e) {
        return parseInt(e, 10);
      }),
      (t.isFunction = function (e) {
        return "function" == typeof e || "[object Function]" === Object.prototype.toString.call(e);
      }),
      (t.isNum = function (e) {
        return "number" == typeof e && !isNaN(e);
      });
  },
  813: function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var r,
      o = n(26),
      a = n(310),
      i = n(1830),
      u = n(330),
      s = n(431),
      c = n(56),
      l = (r = c) && r.__esModule ? r : { default: r };
    t.default = function () {
      return function (e, t) {
        var n = (0, l.default)(t()),
          r = n.id;
        n.ready
          ? (e(o.tipsActions.refreshContainer({ containerId: r })), e((0, s.sdataTipsContainerEvent)({ event: "refresh" })))
          : (e(o.tipsActions.readyContainer({ containerId: r })), e((0, s.sdataTipsContainerEvent)({ event: "ready" })));
        var c = (0, i.selectIfTopSavingsLessThanDollar)(t()),
          d = u.comparisonShoppingSelectors.selectCurrentTopPickSavings(t());
        c &&
          e(
            (0, a.sdataTipsCatalogDebugEvent)(
              { action: "topSavingsLessThanDollar", topPickSavings: d, ifTopSavingsLessThanDollarOn: c },
              { skipSessionCheck: !0 }
            )
          );
      };
    };
  },
  816: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    }),
      n.d(t, "b", function () {
        return i;
      });
    var r = n(59);
    function o() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = e
        .sort(function (e, t) {
          return e[0] - t[0];
        })
        .map(function (e) {
          return e[1];
        });
      return function (e, t) {
        var o, i, u, s;
        void 0 === t && (t = 0);
        var c = [];
        try {
          for (var l = Object(r.e)(e.split("\n").slice(t)), d = l.next(); !d.done; d = l.next()) {
            var f = d.value;
            try {
              for (var p = ((u = void 0), Object(r.e)(n)), v = p.next(); !v.done; v = p.next()) {
                var h = (0, v.value)(f);
                if (h) {
                  c.push(h);
                  break;
                }
              }
            } catch (e) {
              u = { error: e };
            } finally {
              try {
                v && !v.done && (s = p.return) && s.call(p);
              } finally {
                if (u) throw u.error;
              }
            }
          }
        } catch (e) {
          o = { error: e };
        } finally {
          try {
            d && !d.done && (i = l.return) && i.call(l);
          } finally {
            if (o) throw o.error;
          }
        }
        return a(c);
      };
    }
    function a(e) {
      if (!e.length) return [];
      var t = e,
        n = t[0].function || "",
        o = t[t.length - 1].function || "";
      return (
        (-1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException")) || (t = t.slice(1)),
        -1 !== o.indexOf("sentryWrapped") && (t = t.slice(0, -1)),
        t
          .slice(0, 50)
          .map(function (e) {
            return Object(r.a)(Object(r.a)({}, e), { filename: e.filename || t[0].filename, function: e.function || "?" });
          })
          .reverse()
      );
    }
    function i(e) {
      try {
        return (e && "function" == typeof e && e.name) || "<anonymous>";
      } catch (e) {
        return "<anonymous>";
      }
    }
  },
  817: function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    }),
      n.d(t, "b", function () {
        return l;
      });
    var r = n(39),
      o = n(77),
      a = n(270),
      i = n(722),
      u = n(130),
      s = (function () {
        function e() {
          (this._notifyingListeners = !1),
            (this._scopeListeners = []),
            (this._eventProcessors = []),
            (this._breadcrumbs = []),
            (this._user = {}),
            (this._tags = {}),
            (this._extra = {}),
            (this._contexts = {}),
            (this._sdkProcessingMetadata = {});
        }
        return (
          (e.clone = function (t) {
            var n = new e();
            return (
              t &&
                ((n._breadcrumbs = Object(r.b)(t._breadcrumbs)),
                (n._tags = Object(r.a)({}, t._tags)),
                (n._extra = Object(r.a)({}, t._extra)),
                (n._contexts = Object(r.a)({}, t._contexts)),
                (n._user = t._user),
                (n._level = t._level),
                (n._span = t._span),
                (n._session = t._session),
                (n._transactionName = t._transactionName),
                (n._fingerprint = t._fingerprint),
                (n._eventProcessors = Object(r.b)(t._eventProcessors)),
                (n._requestSession = t._requestSession)),
              n
            );
          }),
          (e.prototype.addScopeListener = function (e) {
            this._scopeListeners.push(e);
          }),
          (e.prototype.addEventProcessor = function (e) {
            return this._eventProcessors.push(e), this;
          }),
          (e.prototype.setUser = function (e) {
            return (this._user = e || {}), this._session && this._session.update({ user: e }), this._notifyScopeListeners(), this;
          }),
          (e.prototype.getUser = function () {
            return this._user;
          }),
          (e.prototype.getRequestSession = function () {
            return this._requestSession;
          }),
          (e.prototype.setRequestSession = function (e) {
            return (this._requestSession = e), this;
          }),
          (e.prototype.setTags = function (e) {
            return (this._tags = Object(r.a)(Object(r.a)({}, this._tags), e)), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTag = function (e, t) {
            var n;
            return (this._tags = Object(r.a)(Object(r.a)({}, this._tags), (((n = {})[e] = t), n))), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setExtras = function (e) {
            return (this._extra = Object(r.a)(Object(r.a)({}, this._extra), e)), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setExtra = function (e, t) {
            var n;
            return (this._extra = Object(r.a)(Object(r.a)({}, this._extra), (((n = {})[e] = t), n))), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setFingerprint = function (e) {
            return (this._fingerprint = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setLevel = function (e) {
            return (this._level = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTransactionName = function (e) {
            return (this._transactionName = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.setTransaction = function (e) {
            return this.setTransactionName(e);
          }),
          (e.prototype.setContext = function (e, t) {
            var n;
            return (
              null === t
                ? delete this._contexts[e]
                : (this._contexts = Object(r.a)(Object(r.a)({}, this._contexts), (((n = {})[e] = t), n))),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.setSpan = function (e) {
            return (this._span = e), this._notifyScopeListeners(), this;
          }),
          (e.prototype.getSpan = function () {
            return this._span;
          }),
          (e.prototype.getTransaction = function () {
            var e = this.getSpan();
            return e && e.transaction;
          }),
          (e.prototype.setSession = function (e) {
            return e ? (this._session = e) : delete this._session, this._notifyScopeListeners(), this;
          }),
          (e.prototype.getSession = function () {
            return this._session;
          }),
          (e.prototype.update = function (t) {
            if (!t) return this;
            if ("function" == typeof t) {
              var n = t(this);
              return n instanceof e ? n : this;
            }
            return (
              t instanceof e
                ? ((this._tags = Object(r.a)(Object(r.a)({}, this._tags), t._tags)),
                  (this._extra = Object(r.a)(Object(r.a)({}, this._extra), t._extra)),
                  (this._contexts = Object(r.a)(Object(r.a)({}, this._contexts), t._contexts)),
                  t._user && Object.keys(t._user).length && (this._user = t._user),
                  t._level && (this._level = t._level),
                  t._fingerprint && (this._fingerprint = t._fingerprint),
                  t._requestSession && (this._requestSession = t._requestSession))
                : Object(o.i)(t) &&
                  ((t = t),
                  (this._tags = Object(r.a)(Object(r.a)({}, this._tags), t.tags)),
                  (this._extra = Object(r.a)(Object(r.a)({}, this._extra), t.extra)),
                  (this._contexts = Object(r.a)(Object(r.a)({}, this._contexts), t.contexts)),
                  t.user && (this._user = t.user),
                  t.level && (this._level = t.level),
                  t.fingerprint && (this._fingerprint = t.fingerprint),
                  t.requestSession && (this._requestSession = t.requestSession)),
              this
            );
          }),
          (e.prototype.clear = function () {
            return (
              (this._breadcrumbs = []),
              (this._tags = {}),
              (this._extra = {}),
              (this._user = {}),
              (this._contexts = {}),
              (this._level = void 0),
              (this._transactionName = void 0),
              (this._fingerprint = void 0),
              (this._requestSession = void 0),
              (this._span = void 0),
              (this._session = void 0),
              this._notifyScopeListeners(),
              this
            );
          }),
          (e.prototype.addBreadcrumb = function (e, t) {
            var n = "number" == typeof t ? Math.min(t, 100) : 100;
            if (n <= 0) return this;
            var o = Object(r.a)({ timestamp: Object(a.b)() }, e);
            return (this._breadcrumbs = Object(r.b)(this._breadcrumbs, [o]).slice(-n)), this._notifyScopeListeners(), this;
          }),
          (e.prototype.clearBreadcrumbs = function () {
            return (this._breadcrumbs = []), this._notifyScopeListeners(), this;
          }),
          (e.prototype.applyToEvent = function (e, t) {
            if (
              (this._extra && Object.keys(this._extra).length && (e.extra = Object(r.a)(Object(r.a)({}, this._extra), e.extra)),
              this._tags && Object.keys(this._tags).length && (e.tags = Object(r.a)(Object(r.a)({}, this._tags), e.tags)),
              this._user && Object.keys(this._user).length && (e.user = Object(r.a)(Object(r.a)({}, this._user), e.user)),
              this._contexts &&
                Object.keys(this._contexts).length &&
                (e.contexts = Object(r.a)(Object(r.a)({}, this._contexts), e.contexts)),
              this._level && (e.level = this._level),
              this._transactionName && (e.transaction = this._transactionName),
              this._span)
            ) {
              e.contexts = Object(r.a)({ trace: this._span.getTraceContext() }, e.contexts);
              var n = this._span.transaction && this._span.transaction.name;
              n && (e.tags = Object(r.a)({ transaction: n }, e.tags));
            }
            return (
              this._applyFingerprint(e),
              (e.breadcrumbs = Object(r.b)(e.breadcrumbs || [], this._breadcrumbs)),
              (e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0),
              (e.sdkProcessingMetadata = this._sdkProcessingMetadata),
              this._notifyEventProcessors(Object(r.b)(c(), this._eventProcessors), e, t)
            );
          }),
          (e.prototype.setSDKProcessingMetadata = function (e) {
            return (this._sdkProcessingMetadata = Object(r.a)(Object(r.a)({}, this._sdkProcessingMetadata), e)), this;
          }),
          (e.prototype._notifyEventProcessors = function (e, t, n, a) {
            var u = this;
            return (
              void 0 === a && (a = 0),
              new i.a(function (i, s) {
                var c = e[a];
                if (null === t || "function" != typeof c) i(t);
                else {
                  var l = c(Object(r.a)({}, t), n);
                  Object(o.n)(l)
                    ? l
                        .then(function (t) {
                          return u._notifyEventProcessors(e, t, n, a + 1).then(i);
                        })
                        .then(null, s)
                    : u
                        ._notifyEventProcessors(e, l, n, a + 1)
                        .then(i)
                        .then(null, s);
                }
              })
            );
          }),
          (e.prototype._notifyScopeListeners = function () {
            var e = this;
            this._notifyingListeners ||
              ((this._notifyingListeners = !0),
              this._scopeListeners.forEach(function (t) {
                t(e);
              }),
              (this._notifyingListeners = !1));
          }),
          (e.prototype._applyFingerprint = function (e) {
            (e.fingerprint = e.fingerprint ? (Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint]) : []),
              this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
              e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
          }),
          e
        );
      })();
    function c() {
      return Object(u.b)("globalEventProcessors", function () {
        return [];
      });
    }
    function l(e) {
      c().push(e);
    }
  }
});
