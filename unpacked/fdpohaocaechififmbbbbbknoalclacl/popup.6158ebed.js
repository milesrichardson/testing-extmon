(() => {
  function t(t, e, r, n) {
    Object.defineProperty(t, e, { get: r, set: n, enumerable: !0, configurable: !0 });
  }
  function e(t) {
    return t && t.__esModule ? t.default : t;
  }
  var r =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    n = {},
    o = {},
    i = r.parcelRequire60cc;
  null == i &&
    (((i = function (t) {
      if (t in n) return n[t].exports;
      if (t in o) {
        var e = o[t];
        delete o[t];
        var r = { id: t, exports: {} };
        return (n[t] = r), e.call(r.exports, r, r.exports), r.exports;
      }
      var i = new Error("Cannot find module '" + t + "'");
      throw ((i.code = "MODULE_NOT_FOUND"), i);
    }).register = function (t, e) {
      o[t] = e;
    }),
    (r.parcelRequire60cc = i)),
    i.register("2z2pA", function (e, r) {
      t(e.exports, "default", () => l);
      const n = 40,
        o = 30,
        i = 20,
        a = 10;
      let s = i;
      try {
        const t = window.localStorage.getItem("__fploglevel");
        if (t && /^\d+$/.test(t)) {
          const e = parseInt(t, 10);
          s = e;
        }
      } catch (t) {}
      const u = (t, e, r) => {
          if (!(t < s)) {
            (r && console[r]) || (r = t <= a ? "log" : t <= i ? "info" : t <= o ? "warn" : "error");
            try {
              (console[r] || console.log).apply(console, e);
            } catch (t) {}
          }
        },
        c = function (...t) {
          u(a, t);
        };
      var l = c;
      (c.debug = c),
        (c.info = function (...t) {
          u(i, t);
        }),
        (c.warn = function (...t) {
          u(o, t);
        }),
        (c.error = function (...t) {
          u(n, t);
        }),
        (c.group = function (...t) {
          u(a, t, "group");
        }),
        (c.groupCollapsed = function (...t) {
          u(a, t, "groupCollapsed");
        }),
        (c.groupEnd = function (...t) {
          u(a, t, "groupEnd");
        }),
        (c.j = function (t) {
          if (void 0 === t) return "undefined";
          try {
            return JSON.stringify(t);
          } catch (e) {
            return t;
          }
        });
    }),
    i.register("ceb36", function (e, r) {
      t(e.exports, "default", () => u);
      i("ff4Ef");
      i("bV5yB");
      var n = i("2z2pA");
      const o = "UA-122302708-1",
        a = "__fpgadelayed";
      const s = Object.assign(
        function () {
          return window.ga.apply(window.ga, arguments);
        },
        {
          pageview: (t, e) => {
            const r = t || window.location.pathname;
            (e = e || window.location.href), s("send", { hitType: "pageview", page: r, location: location });
          },
          event: (t, e, r, n, o) => {
            s("send", "event", t, e, r, n, o);
          },
          delayedEvent: (t, e, r, o, i) => {
            const s = JSON.stringify({ category: t, action: e, label: r, value: o, fieldsObject: i });
            try {
              window.localStorage.setItem(a, s);
            } catch (t) {
              n.default.error(t);
            }
          },
          _runDelayedEvent: () => {
            let t;
            try {
              (t = window.localStorage.getItem(a)), t && window.localStorage.removeItem(a);
            } catch (t) {
              n.default.error(t);
            }
            t && s("send", "event", t.category, t.action, t.label, t.value, t.fieldsObject);
          }
        }
      );
      var u = s;
      s._runDelayedEvent();
      (window.GoogleAnalyticsObject = "ga"),
        window.ga ||
          (window.ga = function () {
            (window.ga.q = window.ga.q || []), window.ga.q.push(arguments);
          }),
        (window.ga.l = 1 * new Date()),
        s("create", o, "auto"),
        s("set", "checkProtocolTask", null);
    }),
    i.register("bV5yB", function (t, e) {
      !(function () {
        var t = function (t) {
          this.w = t || [];
        };
        (t.prototype.set = function (t) {
          this.w[t] = !0;
        }),
          (t.prototype.encode = function () {
            for (var t = [], e = 0; e < this.w.length; e++) this.w[e] && (t[Math.floor(e / 6)] ^= 1 << e % 6);
            for (e = 0; e < t.length; e++) t[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(t[e] || 0);
            return t.join("") + "~";
          });
        var e = new t();
        function r(t) {
          e.set(t);
        }
        var n = function (r) {
            (r = o(r)), (r = new t(r));
            for (var n = e.w.slice(), i = 0; i < r.w.length; i++) n[i] = n[i] || r.w[i];
            return new t(n).encode();
          },
          o = function (t) {
            return (t = t.get(ke)), a(t) || (t = []), t;
          },
          i = function (t) {
            return "function" == typeof t;
          },
          a = function (t) {
            return "[object Array]" == Object.prototype.toString.call(Object(t));
          },
          s = function (t) {
            return null != t && -1 < (t.constructor + "").indexOf("String");
          },
          u = function (t, e) {
            return 0 == t.indexOf(e);
          },
          c = function (t) {
            return t ? t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : "";
          },
          l = function () {
            for (
              var t = j.navigator.userAgent + (P.cookie ? P.cookie : "") + (P.referrer ? P.referrer : ""),
                e = t.length,
                r = j.history.length;
              0 < r;

            )
              t += r-- ^ e++;
            return [dt() ^ (2147483647 & qn(t)), Math.round(new Date().getTime() / 1e3)].join(".");
          },
          f = function (t) {
            var e = P.createElement("img");
            return (e.width = 1), (e.height = 1), (e.src = t), e;
          },
          p = function () {},
          h = function (t) {
            return encodeURIComponent instanceof Function ? encodeURIComponent(t) : (r(28), t);
          },
          d = function (t, e, n, o) {
            try {
              t.addEventListener ? t.addEventListener(e, n, !!o) : t.attachEvent && t.attachEvent("on" + e, n);
            } catch (t) {
              r(27);
            }
          },
          y = /^[\w\-:/.?=&%!]+$/,
          g = function (t, e, r) {
            t &&
              (r
                ? ((r = ""), e && y.test(e) && (r = ' id="' + e + '"'), y.test(t) && P.write("<script" + r + ' src="' + t + '"></script>'))
                : (((r = P.createElement("script")).type = "text/javascript"),
                  (r.async = !0),
                  (r.src = t),
                  e && (r.id = e),
                  (t = P.getElementsByTagName("script")[0]).parentNode.insertBefore(r, t)));
          },
          v = function (t, e) {
            return m(P.location[e ? "href" : "search"], t);
          },
          m = function (t, e) {
            return (t = t.match("(?:&|#|\\?)" + h(e).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == t.length
              ? t[1]
              : "";
          },
          b = function () {
            var t = "" + P.location.hostname;
            return 0 == t.indexOf("www.") ? t.substring(4) : t;
          },
          w = function (t, e) {
            var r = t.indexOf(e);
            return !((5 != r && 6 != r) || ("/" != (t = t.charAt(r + e.length)) && "?" != t && "" != t && ":" != t));
          },
          _ = function (t, e) {
            if (1 == e.length && null != e[0] && "object" == typeof e[0]) return e[0];
            for (var r = {}, n = Math.min(t.length + 1, e.length), o = 0; o < n; o++) {
              if ("object" == typeof e[o]) {
                for (var i in e[o]) e[o].hasOwnProperty(i) && (r[i] = e[o][i]);
                break;
              }
              o < t.length && (r[t[o]] = e[o]);
            }
            return r;
          },
          E = function () {
            (this.keys = []), (this.values = {}), (this.m = {});
          };
        (E.prototype.set = function (t, e, r) {
          this.keys.push(t), r ? (this.m[":" + t] = e) : (this.values[":" + t] = e);
        }),
          (E.prototype.get = function (t) {
            return this.m.hasOwnProperty(":" + t) ? this.m[":" + t] : this.values[":" + t];
          }),
          (E.prototype.map = function (t) {
            for (var e = 0; e < this.keys.length; e++) {
              var r = this.keys[e],
                n = this.get(r);
              n && t(r, n);
            }
          });
        var S,
          A,
          O,
          x,
          k,
          j = window,
          P = document,
          R = function (t, e) {
            return setTimeout(t, e);
          },
          T = window,
          I = document,
          U = function (t) {
            var e = T._gaUserPrefs;
            if ((e && e.ioo && e.ioo()) || (t && !0 === T["ga-disable-" + t])) return !0;
            try {
              var r = T.external;
              if (r && r._gaUserPrefs && "oo" == r._gaUserPrefs) return !0;
            } catch (t) {}
            (t = []), (e = I.cookie.split(";")), (r = /^\s*AMP_TOKEN=\s*(.*?)\s*$/);
            for (var n = 0; n < e.length; n++) {
              var o = e[n].match(r);
              o && t.push(o[1]);
            }
            for (e = 0; e < t.length; e++) if ("$OPT_OUT" == decodeURIComponent(t[e])) return !0;
            return !1;
          },
          D = function (t) {
            var e = [],
              r = P.cookie.split(";");
            t = new RegExp("^\\s*" + t + "=\\s*(.*?)\\s*$");
            for (var n = 0; n < r.length; n++) {
              var o = r[n].match(t);
              o && e.push(o[1]);
            }
            return e;
          },
          F = function (t, e, r, n, o, i) {
            if (!(o = !U(o) && !(M.test(P.location.hostname) || ("/" == r && L.test(n))))) return !1;
            if (
              (e && 1200 < e.length && (e = e.substring(0, 1200)),
              (r = t + "=" + e + "; path=" + r + "; "),
              i && (r += "expires=" + new Date(new Date().getTime() + i).toGMTString() + "; "),
              n && "none" !== n && (r += "domain=" + n + ";"),
              (n = P.cookie),
              (P.cookie = r),
              !(n = n != P.cookie))
            )
              t: {
                for (t = D(t), n = 0; n < t.length; n++)
                  if (e == t[n]) {
                    n = !0;
                    break t;
                  }
                n = !1;
              }
            return n;
          },
          N = function (t) {
            return encodeURIComponent ? encodeURIComponent(t).replace(/\(/g, "%28").replace(/\)/g, "%29") : t;
          },
          L = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
          M = /(^|\.)doubleclick\.net$/i,
          C = /^.*Version\/?(\d+)[^\d].*$/i,
          B = function () {
            if (void 0 !== j.__ga4__) return j.__ga4__;
            if (void 0 === S) {
              var t = j.navigator.userAgent;
              if (t) {
                var e = t;
                try {
                  e = decodeURIComponent(t);
                } catch (t) {}
                (t = !(0 <= e.indexOf("Chrome") || 0 <= e.indexOf("CriOS") || !(0 <= e.indexOf("Safari/") || 0 <= e.indexOf("Safari,")))) &&
                  (t = 11 <= ((e = C.exec(e)) ? Number(e[1]) : -1)),
                  (S = t);
              } else S = !1;
            }
            return S;
          },
          q = /^https?:\/\/[^/]*cdn\.ampproject\.org\//,
          $ = [],
          W = function () {
            Nn.D([p]);
          },
          G = function (t, e) {
            var n = D("AMP_TOKEN");
            return 1 < n.length
              ? (r(55), !1)
              : "$OPT_OUT" == (n = decodeURIComponent(n[0] || "")) || "$ERROR" == n || U(e)
              ? (r(62), !1)
              : q.test(P.referrer) || "$NOT_FOUND" != n
              ? void 0 !== k
                ? (r(56),
                  R(function () {
                    t(k);
                  }, 0),
                  !0)
                : A
                ? ($.push(t), !0)
                : "$RETRIEVING" == n
                ? (r(57),
                  R(function () {
                    G(t, e);
                  }, 1e4),
                  !0)
                : ((A = !0), (n && "$" != n[0]) || (K("$RETRIEVING", 3e4), setTimeout(V, 3e4), (n = "")), !!z(n, e) && ($.push(t), !0))
              : (r(68), !1);
          },
          z = function (t, e, n) {
            if (!window.JSON) return r(58), !1;
            var o = j.XMLHttpRequest;
            if (!o) return r(59), !1;
            var i = new o();
            return "withCredentials" in i
              ? (i.open(
                  "POST",
                  (n || "https://ampcid.google.com/v1/publisher:getClientId") + "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM",
                  !0
                ),
                (i.withCredentials = !0),
                i.setRequestHeader("Content-Type", "text/plain"),
                (i.onload = function () {
                  if (((A = !1), 4 == i.readyState)) {
                    try {
                      200 != i.status && (r(61), H("", "$ERROR", 3e4));
                      var o = JSON.parse(i.responseText);
                      o.optOut
                        ? (r(63), H("", "$OPT_OUT", 31536e6))
                        : o.clientId
                        ? H(o.clientId, o.securityToken, 31536e6)
                        : !n && o.alternateUrl
                        ? (O && clearTimeout(O), (A = !0), z(t, e, o.alternateUrl))
                        : (r(64), H("", "$NOT_FOUND", 36e5));
                    } catch (t) {
                      r(65), H("", "$ERROR", 3e4);
                    }
                    i = null;
                  }
                }),
                (o = { originScope: "AMP_ECID_GOOGLE" }),
                t && (o.securityToken = t),
                i.send(JSON.stringify(o)),
                (O = R(function () {
                  r(66), H("", "$ERROR", 3e4);
                }, 1e4)),
                !0)
              : (r(60), !1);
          },
          V = function () {
            A = !1;
          },
          K = function (t, e) {
            if (void 0 === x) {
              x = "";
              for (var r = Cr(), n = 0; n < r.length; n++) {
                var o = r[n];
                if (F("AMP_TOKEN", encodeURIComponent(t), "/", o, "", e)) return void (x = o);
              }
            }
            F("AMP_TOKEN", encodeURIComponent(t), "/", x, "", e);
          },
          H = function (t, e, r) {
            for (O && clearTimeout(O), e && K(e, r), k = t, e = $, $ = [], r = 0; r < e.length; r++) e[r](t);
          },
          J = function () {
            return (It || "https:" == P.location.protocol ? "https:" : "http:") + "//www.google-analytics.com";
          },
          Y = function (t) {
            (this.name = "len"), (this.message = t + "-8192");
          },
          X = function (t, e, r) {
            if (((r = r || p), 2036 >= e.length)) Q(t, e, r);
            else {
              if (!(8192 >= e.length)) throw (rt("len", e.length), new Y(e.length));
              et(t, e, r) || tt(t, e, r) || Q(t, e, r);
            }
          },
          Z = function (t, e, r, n) {
            tt(t + "?" + e, "", (n = n || p), r);
          },
          Q = function (t, e, r) {
            var n = f(t + "?" + e);
            n.onload = n.onerror = function () {
              (n.onload = null), (n.onerror = null), r();
            };
          },
          tt = function (t, e, r, n) {
            var o = j.XMLHttpRequest;
            if (!o) return !1;
            var i = new o();
            return (
              "withCredentials" in i &&
              ((t = t.replace(/^http:/, "https:")),
              i.open("POST", t, !0),
              (i.withCredentials = !0),
              i.setRequestHeader("Content-Type", "text/plain"),
              (i.onreadystatechange = function () {
                if (4 == i.readyState) {
                  if (n)
                    try {
                      var t = i.responseText;
                      if (1 > t.length) rt("xhr", "ver", "0"), r();
                      else if ("1" != t.charAt(0)) rt("xhr", "ver", String(t.length)), r();
                      else if (3 < n.count++) rt("xhr", "tmr", "" + n.count), r();
                      else if (1 == t.length) r();
                      else {
                        var e = t.charAt(1);
                        if ("d" == e) Z("https://stats.g.doubleclick.net/j/collect", n.U, n, r);
                        else if ("g" == e) {
                          var o = "https://www.google.%/ads/ga-audiences".replace("%", "com");
                          Q(o, n.google, r);
                          var a = t.substring(2);
                          if (a)
                            if (/^[a-z.]{1,6}$/.test(a)) {
                              var s = "https://www.google.%/ads/ga-audiences".replace("%", a);
                              Q(s, n.google, p);
                            } else rt("tld", "bcc", a);
                        } else rt("xhr", "brc", e), r();
                      }
                    } catch (t) {
                      rt("xhr", "rsp"), r();
                    }
                  else r();
                  i = null;
                }
              }),
              i.send(e),
              !0)
            );
          },
          et = function (t, e, r) {
            return !!j.navigator.sendBeacon && !!j.navigator.sendBeacon(t, e) && (r(), !0);
          },
          rt = function (t, e, r) {
            1 <= 100 * Math.random() ||
              U("?") ||
              ((t = ["t=error", "_e=" + t, "_v=j68", "sr=1"]),
              e && t.push("_f=" + e),
              r && t.push("_m=" + h(r.substring(0, 100))),
              t.push("aip=1"),
              t.push("z=" + dt()),
              Q("https://www.google-analytics.com/u/d", t.join("&"), p));
          },
          nt = function (t) {
            var e = (j.gaData = j.gaData || {});
            return (e[t] = e[t] || {});
          },
          ot = function () {
            this.M = [];
          };
        function it(t) {
          if (100 != t.get(sr) && qn(wt(t, Ve)) % 1e4 >= 100 * _t(t, sr)) throw "abort";
        }
        function at(t) {
          if (U(wt(t, Ye))) throw "abort";
        }
        function st() {
          var t = P.location.protocol;
          if ("http:" != t && "https:" != t) throw "abort";
        }
        function ut(t) {
          try {
            j.navigator.sendBeacon ? r(42) : j.XMLHttpRequest && "withCredentials" in new j.XMLHttpRequest() && r(40);
          } catch (t) {}
          t.set(xe, n(t), !0), t.set(qt, _t(t, qt) + 1);
          var e = [];
          mt.map(function (r, n) {
            n.F && null != (r = t.get(r)) && r != n.defaultValue && ("boolean" == typeof r && (r *= 1), e.push(n.F + "=" + h("" + r)));
          }),
            e.push("z=" + yt()),
            t.set(Mt, e.join("&"), !0);
        }
        function ct(t) {
          var e = wt(t, mr) || J() + "/collect",
            r = t.get(wr),
            n = wt(t, Bt);
          if ((!n && t.get(Ct) && (n = "beacon"), r)) Z(e, wt(t, Mt), r, t.get(Lt));
          else if (n) {
            (r = n), (n = wt(t, Mt));
            var o = t.get(Lt);
            (o = o || p), "image" == r ? Q(e, n, o) : ("xhr" == r && tt(e, n, o)) || ("beacon" == r && et(e, n, o)) || X(e, n, o);
          } else X(e, wt(t, Mt), t.get(Lt));
          (e = t.get(Ye)),
            (r = (e = nt(e)).hitcount),
            (e.hitcount = r ? r + 1 : 1),
            (e = t.get(Ye)),
            delete nt(e).pending_experiments,
            t.set(Lt, p, !0);
        }
        function lt(t) {
          (j.gaData = j.gaData || {}).expId && t.set(ve, (j.gaData = j.gaData || {}).expId),
            (j.gaData = j.gaData || {}).expVar && t.set(me, (j.gaData = j.gaData || {}).expVar);
          var e = t.get(Ye);
          if ((e = nt(e).pending_experiments)) {
            var r = [];
            for (n in e) e.hasOwnProperty(n) && e[n] && r.push(encodeURIComponent(n) + "." + encodeURIComponent(e[n]));
            var n = r.join("!");
          } else n = void 0;
          n && t.set(be, n, !0);
        }
        function ft() {
          if (j.navigator && "preview" == j.navigator.loadPurpose) throw "abort";
        }
        function pt(t) {
          var e = j.gaDevIds;
          a(e) && 0 != e.length && t.set("&did", e.join(","), !0);
        }
        function ht(t) {
          if (!t.get(Ye)) throw "abort";
        }
        (ot.prototype.add = function (t) {
          this.M.push(t);
        }),
          (ot.prototype.D = function (t) {
            try {
              for (var e = 0; e < this.M.length; e++) {
                var r = t.get(this.M[e]);
                r && i(r) && r.call(j, t);
              }
            } catch (t) {}
            (e = t.get(Lt)) != p && i(e) && (t.set(Lt, p, !0), setTimeout(e, 10));
          });
        var dt = function () {
            return Math.round(2147483647 * Math.random());
          },
          yt = function () {
            try {
              var t = new Uint32Array(1);
              return j.crypto.getRandomValues(t), 2147483647 & t[0];
            } catch (t) {
              return dt();
            }
          };
        function gt(t) {
          var e = _t(t, Se);
          500 <= e && r(15);
          var n = wt(t, Nt);
          if ("transaction" != n && "item" != n) {
            n = _t(t, Oe);
            var o = new Date().getTime(),
              i = _t(t, Ae);
            if ((0 == i && t.set(Ae, o), 0 < (i = Math.round((2 * (o - i)) / 1e3)) && ((n = Math.min(n + i, 20)), t.set(Ae, o)), 0 >= n))
              throw "abort";
            t.set(Oe, --n);
          }
          t.set(Se, ++e);
        }
        var vt = function () {
            this.data = new E();
          },
          mt = new E(),
          bt = [];
        vt.prototype.get = function (t) {
          var e = At(t),
            r = this.data.get(t);
          return e && null == r && (r = i(e.defaultValue) ? e.defaultValue() : e.defaultValue), e && e.Z ? e.Z(this, t, r) : r;
        };
        var wt = function (t, e) {
            return null == (t = t.get(e)) ? "" : "" + t;
          },
          _t = function (t, e) {
            return null == (t = t.get(e)) || "" === t ? 0 : 1 * t;
          };
        vt.prototype.set = function (t, e, r) {
          if (t)
            if ("object" == typeof t) for (var n in t) t.hasOwnProperty(n) && Et(this, n, t[n], r);
            else Et(this, t, e, r);
        };
        var Et = function (t, e, r, n) {
            if (null != r && e === Ye) gn.test(r);
            var o = At(e);
            o && o.o ? o.o(t, e, r, n) : t.data.set(e, r, n);
          },
          St = function (t, e, r, n, o) {
            (this.name = t), (this.F = e), (this.Z = n), (this.o = o), (this.defaultValue = r);
          },
          At = function (t) {
            var e = mt.get(t);
            if (!e)
              for (var r = 0; r < bt.length; r++) {
                var n = bt[r],
                  o = n[0].exec(t);
                if (o) {
                  (e = n[1](o)), mt.set(e.name, e);
                  break;
                }
              }
            return e;
          },
          Ot = function (t, e, r, n, o) {
            return (t = new St(t, e, r, n, o)), mt.set(t.name, t), t.name;
          },
          xt = function (t, e) {
            bt.push([new RegExp("^" + t + "$"), e]);
          },
          kt = function (t, e, r) {
            return Ot(t, e, r, void 0, jt);
          },
          jt = function () {},
          Pt = (s(window.GoogleAnalyticsObject) && c(window.GoogleAnalyticsObject)) || "ga",
          Rt = /^(?:utma\.)?\d+\.\d+$/,
          Tt = /^amp-[\w.-]{22,64}$/,
          It = !1,
          Ut = kt("apiVersion", "v"),
          Dt = kt("clientVersion", "_v");
        Ot("anonymizeIp", "aip");
        var Ft = Ot("adSenseId", "a"),
          Nt = Ot("hitType", "t"),
          Lt = Ot("hitCallback"),
          Mt = Ot("hitPayload");
        Ot("nonInteraction", "ni"), Ot("currencyCode", "cu"), Ot("dataSource", "ds");
        var Ct = Ot("useBeacon", void 0, !1),
          Bt = Ot("transport");
        Ot("sessionControl", "sc", ""), Ot("sessionGroup", "sg"), Ot("queueTime", "qt");
        var qt = Ot("_s", "_s");
        Ot("screenName", "cd");
        var $t = Ot("location", "dl", ""),
          Wt = Ot("referrer", "dr"),
          Gt = Ot("page", "dp", "");
        Ot("hostname", "dh");
        var zt = Ot("language", "ul"),
          Vt = Ot("encoding", "de");
        Ot("title", "dt", function () {
          return P.title || void 0;
        }),
          xt("contentGroup([0-9]+)", function (t) {
            return new St(t[0], "cg" + t[1]);
          });
        var Kt = Ot("screenColors", "sd"),
          Ht = Ot("screenResolution", "sr"),
          Jt = Ot("viewportSize", "vp"),
          Yt = Ot("javaEnabled", "je"),
          Xt = Ot("flashVersion", "fl");
        Ot("campaignId", "ci"),
          Ot("campaignName", "cn"),
          Ot("campaignSource", "cs"),
          Ot("campaignMedium", "cm"),
          Ot("campaignKeyword", "ck"),
          Ot("campaignContent", "cc");
        var Zt = Ot("eventCategory", "ec"),
          Qt = Ot("eventAction", "ea"),
          te = Ot("eventLabel", "el"),
          ee = Ot("eventValue", "ev"),
          re = Ot("socialNetwork", "sn"),
          ne = Ot("socialAction", "sa"),
          oe = Ot("socialTarget", "st"),
          ie = Ot("l1", "plt"),
          ae = Ot("l2", "pdt"),
          se = Ot("l3", "dns"),
          ue = Ot("l4", "rrt"),
          ce = Ot("l5", "srt"),
          le = Ot("l6", "tcp"),
          fe = Ot("l7", "dit"),
          pe = Ot("l8", "clt"),
          he = Ot("timingCategory", "utc"),
          de = Ot("timingVar", "utv"),
          ye = Ot("timingLabel", "utl"),
          ge = Ot("timingValue", "utt");
        Ot("appName", "an"),
          Ot("appVersion", "av", ""),
          Ot("appId", "aid", ""),
          Ot("appInstallerId", "aiid", ""),
          Ot("exDescription", "exd"),
          Ot("exFatal", "exf");
        var ve = Ot("expId", "xid"),
          me = Ot("expVar", "xvar"),
          be = Ot("exp", "exp"),
          we = Ot("_utma", "_utma"),
          _e = Ot("_utmz", "_utmz"),
          Ee = Ot("_utmht", "_utmht"),
          Se = Ot("_hc", void 0, 0),
          Ae = Ot("_ti", void 0, 0),
          Oe = Ot("_to", void 0, 20);
        xt("dimension([0-9]+)", function (t) {
          return new St(t[0], "cd" + t[1]);
        }),
          xt("metric([0-9]+)", function (t) {
            return new St(t[0], "cm" + t[1]);
          }),
          Ot(
            "linkerParam",
            void 0,
            void 0,
            function (t) {
              var e = t.get(Ve),
                n = t.get(lr) || "";
              if (((e = "_ga=2." + h(Jr(n + e, 0) + "." + n + "-" + e)), (n = t.get(hr)) && t.get(vr))) {
                var o = _t(t, dr);
                1e3 * o + _t(t, yr) <= new Date().getTime() ? (r(76), (t = "")) : (r(44), (t = "&_gac=1." + h([Jr(n, 0), o, n].join("."))));
              } else t = "";
              return e + t;
            },
            jt
          );
        var xe = Ot("usage", "_u"),
          ke = Ot("_um");
        Ot(
          "forceSSL",
          void 0,
          void 0,
          function () {
            return It;
          },
          function (t, e, n) {
            r(34), (It = !!n);
          }
        );
        var je = Ot("_j1", "jid"),
          Pe = Ot("_j2", "gjid");
        xt("\\&(.*)", function (t) {
          var e = new St(t[0], t[1]),
            r = (function (t) {
              var e;
              return (
                mt.map(function (r, n) {
                  n.F == t && (e = n);
                }),
                e && e.name
              );
            })(t[0].substring(1));
          return (
            r &&
              ((e.Z = function (t) {
                return t.get(r);
              }),
              (e.o = function (t, e, n, o) {
                t.set(r, n, o);
              }),
              (e.F = void 0)),
            e
          );
        });
        var Re = kt("_oot"),
          Te = Ot("previewTask"),
          Ie = Ot("checkProtocolTask"),
          Ue = Ot("validationTask"),
          De = Ot("checkStorageTask"),
          Fe = Ot("historyImportTask"),
          Ne = Ot("samplerTask"),
          Le = Ot("_rlt"),
          Me = Ot("buildHitTask"),
          Ce = Ot("sendHitTask"),
          Be = Ot("ceTask"),
          qe = Ot("devIdTask"),
          $e = Ot("timingTask"),
          We = Ot("displayFeaturesTask"),
          Ge = Ot("customTask"),
          ze = kt("name"),
          Ve = kt("clientId", "cid"),
          Ke = kt("clientIdTime"),
          He = kt("storedClientId"),
          Je = Ot("userId", "uid"),
          Ye = kt("trackingId", "tid"),
          Xe = kt("cookieName", void 0, "_ga"),
          Ze = kt("cookieDomain"),
          Qe = kt("cookiePath", void 0, "/"),
          tr = kt("cookieExpires", void 0, 63072e3),
          er = kt("cookieUpdate", void 0, !0),
          rr = kt("legacyCookieDomain"),
          nr = kt("legacyHistoryImport", void 0, !0),
          or = kt("storage", void 0, "cookie"),
          ir = kt("allowLinker", void 0, !1),
          ar = kt("allowAnchor", void 0, !0),
          sr = kt("sampleRate", "sf", 100),
          ur = kt("siteSpeedSampleRate", void 0, 1),
          cr = kt("alwaysSendReferrer", void 0, !1),
          lr = kt("_gid", "_gid"),
          fr = kt("_gcn"),
          pr = kt("useAmpClientId"),
          hr = kt("_gclid"),
          dr = kt("_gt"),
          yr = kt("_ge", void 0, 7776e6),
          gr = kt("_gclsrc"),
          vr = kt("storeGac", void 0, !0),
          mr = Ot("transportUrl"),
          br = Ot("_r", "_r"),
          wr = Ot("_dp"),
          _r = Ot("allowAdFeatures", void 0, !0);
        function Er(t, e, n, o) {
          e[t] = function () {
            try {
              return o && r(o), n.apply(this, arguments);
            } catch (e) {
              throw (rt("exc", t, e && e.name), e);
            }
          };
        }
        var Sr = function () {
          (this.V = 100), (this.$ = this.fa = !1), (this.oa = "detourexp"), (this.groups = 1);
        };
        var Ar = function (t) {
            var e = {};
            if (Or(e) || xr(e)) {
              var r = e[ie];
              null == r ||
                1 / 0 == r ||
                isNaN(r) ||
                (0 < r
                  ? (kr(e, se),
                    kr(e, le),
                    kr(e, ce),
                    kr(e, ae),
                    kr(e, ue),
                    kr(e, fe),
                    kr(e, pe),
                    R(function () {
                      t(e);
                    }, 10))
                  : d(
                      j,
                      "load",
                      function () {
                        Ar(t);
                      },
                      !1
                    ));
            }
          },
          Or = function (t) {
            var e = j.performance || j.webkitPerformance;
            if (!(e = e && e.timing)) return !1;
            var r = e.navigationStart;
            return (
              0 != r &&
              ((t[ie] = e.loadEventStart - r),
              (t[se] = e.domainLookupEnd - e.domainLookupStart),
              (t[le] = e.connectEnd - e.connectStart),
              (t[ce] = e.responseStart - e.requestStart),
              (t[ae] = e.responseEnd - e.responseStart),
              (t[ue] = e.fetchStart - r),
              (t[fe] = e.domInteractive - r),
              (t[pe] = e.domContentLoadedEventStart - r),
              !0)
            );
          },
          xr = function (t) {
            if (j.top != j) return !1;
            var e = j.external,
              r = e && e.onloadT;
            return (
              e && !e.isValidLoadTime && (r = void 0),
              2147483648 < r && (r = void 0),
              0 < r && e.setPageReadyTime(),
              null != r && ((t[ie] = r), !0)
            );
          },
          kr = function (t, e) {
            var r = t[e];
            (isNaN(r) || 1 / 0 == r || 0 > r) && (t[e] = void 0);
          },
          jr = function (t) {
            return function (e) {
              if ("pageview" == e.get(Nt) && !t.I) {
                t.I = !0;
                var r = (function (t) {
                    var e = Math.min(_t(t, ur), 100);
                    return !(qn(wt(t, Ve)) % 100 >= e);
                  })(e),
                  n = 0 < m(e.get($t), "gclid").length;
                (r || n) &&
                  Ar(function (e) {
                    r && t.send("timing", e), n && t.send("adtiming", e);
                  });
              }
            };
          },
          Pr = !1,
          Rr = function (t) {
            if ("cookie" == wt(t, or)) {
              if (t.get(er) || wt(t, He) != wt(t, Ve)) {
                var e = 1e3 * _t(t, tr);
                Tr(t, Ve, Xe, e);
              }
              if ((Tr(t, lr, fr, 864e5), t.get(vr))) {
                var n = t.get(hr);
                if (n) {
                  var o = Math.min(_t(t, yr), 1e3 * _t(t, tr));
                  (o = Math.min(o, 1e3 * _t(t, dr) + o - new Date().getTime())), t.data.set(yr, o), (e = {});
                  var i = t.get(dr),
                    a = t.get(gr),
                    s = Br(wt(t, Qe)),
                    u = Mr(wt(t, Ze)),
                    c = wt(t, Ye);
                  a && "aw.ds" != a
                    ? e && (e.ua = !0)
                    : ((n = ["1", i, N(n)].join(".")), 0 < o && (e && (e.ta = !0), F("_gac_" + N(c), n, s, u, c, o))),
                    $r(e);
                }
              } else r(75);
              (t = "none" === Mr(wt(t, Ze))) && ((t = P.location.hostname), (t = M.test(t) || L.test(t))), t && r(30);
            }
          },
          Tr = function (t, e, n, o) {
            var i = Dr(t, e);
            if (i) {
              n = wt(t, n);
              var a = Br(wt(t, Qe)),
                s = Mr(wt(t, Ze)),
                u = wt(t, Ye);
              if ("auto" != s) F(n, i, a, s, u, o) && (Pr = !0);
              else {
                r(32);
                for (var c = Cr(), l = 0; l < c.length; l++)
                  if (((s = c[l]), t.data.set(Ze, s), (i = Dr(t, e)), F(n, i, a, s, u, o))) return void (Pr = !0);
                t.data.set(Ze, "auto");
              }
            }
          },
          Ir = function (t) {
            if ("cookie" == wt(t, or) && !Pr && (Rr(t), !Pr)) throw "abort";
          },
          Ur = function (t) {
            if (t.get(nr)) {
              var e = wt(t, Ze),
                n = wt(t, rr) || b(),
                o = Wr("__utma", n, e);
              o &&
                (r(19),
                t.set(Ee, new Date().getTime(), !0),
                t.set(we, o.R),
                (e = Wr("__utmz", n, e)) && o.hash == e.hash && t.set(_e, e.R));
            }
          },
          Dr = function (t, e) {
            e = N(wt(t, e));
            var r = Mr(wt(t, Ze)).split(".").length;
            return 1 < (t = qr(wt(t, Qe))) && (r += "-" + t), e ? ["GA1", r, e].join(".") : "";
          },
          Fr = function (t, e) {
            return Nr(e, wt(t, Ze), wt(t, Qe));
          },
          Nr = function (t, e, n) {
            if (!t || 1 > t.length) r(12);
            else {
              for (var o = [], i = 0; i < t.length; i++) {
                var a = t[i],
                  s = a.split("."),
                  u = s.shift();
                ("GA1" == u || "1" == u) && 1 < s.length
                  ? (1 == (a = s.shift().split("-")).length && (a[1] = "1"), (a[0] *= 1), (a[1] *= 1), (s = { H: a, s: s.join(".") }))
                  : (s = Tt.test(a) ? { H: [0, 0], s: a } : void 0),
                  s && o.push(s);
              }
              if (1 == o.length) return r(13), o[0].s;
              if (0 != o.length)
                return (
                  r(14),
                  1 == (o = Lr(o, Mr(e).split(".").length, 0)).length ? o[0].s : (1 < (o = Lr(o, qr(n), 1)).length && r(41), o[0] && o[0].s)
                );
              r(12);
            }
          },
          Lr = function (t, e, r) {
            for (var n, o = [], i = [], a = 0; a < t.length; a++) {
              var s = t[a];
              s.H[r] == e ? o.push(s) : null == n || s.H[r] < n ? ((i = [s]), (n = s.H[r])) : s.H[r] == n && i.push(s);
            }
            return 0 < o.length ? o : i;
          },
          Mr = function (t) {
            return 0 == t.indexOf(".") ? t.substr(1) : t;
          },
          Cr = function () {
            var t = [],
              e = b().split(".");
            if (4 == e.length) {
              var r = e[e.length - 1];
              if (parseInt(r, 10) == r) return ["none"];
            }
            for (r = e.length - 2; 0 <= r; r--) t.push(e.slice(r).join("."));
            return t.push("none"), t;
          },
          Br = function (t) {
            return t
              ? (1 < t.length && t.lastIndexOf("/") == t.length - 1 && (t = t.substr(0, t.length - 1)),
                0 != t.indexOf("/") && (t = "/" + t),
                t)
              : "/";
          },
          qr = function (t) {
            return "/" == (t = Br(t)) ? 1 : t.split("/").length;
          },
          $r = function (t) {
            t.ta && r(77), t.na && r(74), t.pa && r(73), t.ua && r(69);
          };
        function Wr(t, e, r) {
          "none" == e && (e = "");
          var n = [],
            o = D(t);
          t = "__utma" == t ? 6 : 2;
          for (var i = 0; i < o.length; i++) {
            var a = ("" + o[i]).split(".");
            a.length >= t && n.push({ hash: a[0], R: o[i], O: a });
          }
          if (0 != n.length) return 1 == n.length ? n[0] : Gr(e, n) || Gr(r, n) || Gr(null, n) || n[0];
        }
        function Gr(t, e) {
          if (null == t) var r = (t = 1);
          else (r = qn(t)), (t = qn(u(t, ".") ? t.substring(1) : "." + t));
          for (var n = 0; n < e.length; n++) if (e[n].hash == r || e[n].hash == t) return e[n];
        }
        var zr = new RegExp(/^https?:\/\/([^\/:]+)/),
          Vr = /(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)/,
          Kr = /(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)/;
        function Hr(t, e) {
          var r = new Date(),
            n = j.navigator,
            o = n.plugins || [];
          for (
            t = [t, n.userAgent, r.getTimezoneOffset(), r.getYear(), r.getDate(), r.getHours(), r.getMinutes() + e], e = 0;
            e < o.length;
            ++e
          )
            t.push(o[e].description);
          return qn(t.join("."));
        }
        function Jr(t, e) {
          var r = new Date(),
            n = j.navigator,
            o = r.getHours() + Math.floor((r.getMinutes() + e) / 60);
          return qn(
            [
              t,
              n.userAgent,
              n.language || "",
              r.getTimezoneOffset(),
              r.getYear(),
              r.getDate() + Math.floor(o / 24),
              (24 + o) % 24,
              (60 + r.getMinutes() + e) % 60
            ].join(".")
          );
        }
        var Yr = function (t) {
          r(48), (this.target = t), (this.T = !1);
        };
        Yr.prototype.ca = function (t, e) {
          if (t.tagName) {
            if ("a" == t.tagName.toLowerCase()) return void (t.href && (t.href = Xr(this, t.href, e)));
            if ("form" == t.tagName.toLowerCase()) return Zr(this, t);
          }
          if ("string" == typeof t) return Xr(this, t, e);
        };
        var Xr = function (t, e, r) {
            var n = Vr.exec(e);
            n && 3 <= n.length && (e = n[1] + (n[3] ? n[2] + n[3] : "")),
              (n = Kr.exec(e)) && 3 <= n.length && (e = n[1] + (n[3] ? n[2] + n[3] : "")),
              (t = t.target.get("linkerParam"));
            var o = e.indexOf("?");
            return (
              (n = e.indexOf("#")),
              r
                ? (e += (-1 == n ? "#" : "&") + t)
                : ((r = -1 == o ? "?" : "&"), (e = -1 == n ? e + (r + t) : e.substring(0, n) + r + t + e.substring(n))),
              (e = e.replace(/&+_ga=/, "&_ga=")).replace(/&+_gac=/, "&_gac=")
            );
          },
          Zr = function (t, e) {
            if (e && e.action)
              if ("get" == e.method.toLowerCase()) {
                t = t.target.get("linkerParam").split("&");
                for (var r = 0; r < t.length; r++) {
                  var n = t[r].split("="),
                    o = n[1];
                  n = n[0];
                  for (var i = e.childNodes || [], a = !1, s = 0; s < i.length; s++)
                    if (i[s].name == n) {
                      i[s].setAttribute("value", o), (a = !0);
                      break;
                    }
                  a ||
                    ((i = P.createElement("input")).setAttribute("type", "hidden"),
                    i.setAttribute("name", n),
                    i.setAttribute("value", o),
                    e.appendChild(i));
                }
              } else "post" == e.method.toLowerCase() && (e.action = Xr(t, e.action));
          };
        function Qr(t, e) {
          if (e == P.location.hostname) return !1;
          for (var r = 0; r < t.length; r++)
            if (t[r] instanceof RegExp) {
              if (t[r].test(e)) return !0;
            } else if (0 <= e.indexOf(t[r])) return !0;
          return !1;
        }
        function tn(t, e) {
          return e != Hr(t, 0) && e != Hr(t, -1) && e != Hr(t, -2) && e != Jr(t, 0) && e != Jr(t, -1) && e != Jr(t, -2);
        }
        Yr.prototype.S = function (t, e, n) {
          function o(n) {
            try {
              n = n || j.event;
              t: {
                var o = n.target || n.srcElement;
                for (n = 100; o && 0 < n; ) {
                  if (o.href && o.nodeName.match(/^a(?:rea)?$/i)) {
                    var a = o;
                    break t;
                  }
                  (o = o.parentNode), n--;
                }
                a = {};
              }
              ("http:" == a.protocol || "https:" == a.protocol) && Qr(t, a.hostname || "") && a.href && (a.href = Xr(i, a.href, e));
            } catch (t) {
              r(26);
            }
          }
          var i = this;
          this.T || ((this.T = !0), d(P, "mousedown", o, !1), d(P, "keyup", o, !1)),
            n &&
              d(P, "submit", function (e) {
                if ((e = (e = e || j.event).target || e.srcElement) && e.action) {
                  var r = e.action.match(zr);
                  r && Qr(t, r[1]) && Zr(i, e);
                }
              });
        };
        var en,
          rn = /^(GTM|OPT)-[A-Z0-9]+$/,
          nn = /;_gaexp=[^;]*/g,
          on = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g,
          an = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/,
          sn = function (t, e, r) {
            (this.aa = e),
              (e = r) || (e = (e = wt(t, ze)) && "t0" != e ? (hn.test(e) ? "_gat_" + N(wt(t, Ye)) : "_gat_" + N(e)) : "_gat"),
              (this.Y = e),
              (this.ra = null);
          },
          un = function (t, e, r) {
            !1 === e.get(_r) || e.get(r) || ("1" == D(t.Y)[0] ? e.set(r, "", !0) : e.set(r, "" + dt(), !0));
          },
          cn = function (t, e) {
            ln(e) && F(t.Y, "1", e.get(Qe), e.get(Ze), e.get(Ye), 6e4);
          },
          ln = function (t) {
            return !!t.get(je) && t.get(_r);
          },
          fn = function (t, e, r) {
            var o = new E(),
              i = function (t) {
                At(t).F && o.set(At(t).F, e.get(t));
              };
            i(Ut), i(Dt), i(Ye), i(Ve), i(je), (0 != r && 1 != r) || (i(Je), i(Pe), i(lr)), o.set(At(xe).F, n(e));
            var a = "";
            return (
              o.map(function (t, e) {
                (a += h(t) + "="), (a += h("" + e) + "&");
              }),
              (a += "z=" + dt()),
              0 == r ? (a = t.aa + a) : 1 == r ? (a = "t=dc&aip=1&_r=3&" + a) : 2 == r && (a = "t=sr&aip=1&_r=4&slf_rd=1&" + a),
              a
            );
          },
          pn = function (t, e) {
            return (
              null === t.ra &&
                ((t.ra =
                  1 ===
                  (function (t) {
                    var e,
                      r = new Sr();
                    if (r.fa && r.$) return 0;
                    if (((r.$ = !0), t)) {
                      if (r.oa && void 0 !== t.get(r.oa)) return _t(t, r.oa);
                      if (0 == t.get(ur)) return 0;
                    }
                    return 0 == r.V ? 0 : (void 0 === e && (e = yt()), 0 == e % r.V ? (Math.floor(e / r.V) % r.groups) + 1 : 0);
                  })(e)),
                t.ra && r(33)),
              t.ra
            );
          },
          hn = /^gtm\d+$/,
          dn = function (e, n) {
            if (!(e = e.b).get("dcLoaded")) {
              var i,
                a = new t(o(e));
              a.set(29),
                e.set(ke, a.w),
                (n = n || {})[Xe] && (i = N(n[Xe])),
                (function (t, e) {
                  var n = e.get(Me);
                  e.set(Me, function (e) {
                    un(t, e, je), un(t, e, Pe);
                    var r = n(e);
                    return cn(t, e), r;
                  });
                  var o = e.get(Ce);
                  e.set(Ce, function (e) {
                    var n = o(e);
                    if (ln(e)) {
                      if (B() !== pn(t, e)) {
                        r(80);
                        var i = { U: fn(t, e, 1), google: fn(t, e, 2), count: 0 };
                        Z("https://stats.g.doubleclick.net/j/collect", i.U, i);
                      } else f(fn(t, e, 0));
                      e.set(je, "", !0);
                    }
                    return n;
                  });
                })((n = new sn(e, "https://stats.g.doubleclick.net/r/collect?t=dc&aip=1&_r=3&", i)), e),
                e.set("dcLoaded", !0);
            }
          },
          yn = function (t) {
            if (!t.get("dcLoaded") && "cookie" == t.get(or)) {
              var e = new sn(t);
              if ((un(e, t, je), un(e, t, Pe), cn(e, t), ln(t))) {
                var n = B() !== pn(e, t);
                t.set(br, 1, !0),
                  n
                    ? (r(79), t.set(mr, J() + "/j/collect", !0), t.set(wr, { U: fn(e, t, 1), google: fn(e, t, 2), count: 0 }, !0))
                    : t.set(mr, J() + "/r/collect", !0);
              }
            }
          },
          gn = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/,
          vn = function (t) {
            function e(t, e) {
              n.b.data.set(t, e);
            }
            function r(t, r) {
              e(t, r), n.filters.add(t);
            }
            var n = this;
            (this.b = new vt()),
              (this.filters = new ot()),
              e(ze, t[ze]),
              e(Ye, c(t[Ye])),
              e(Xe, t[Xe]),
              e(Ze, t[Ze] || b()),
              e(Qe, t[Qe]),
              e(tr, t[tr]),
              e(er, t[er]),
              e(rr, t[rr]),
              e(nr, t[nr]),
              e(ir, t[ir]),
              e(ar, t[ar]),
              e(sr, t[sr]),
              e(ur, t[ur]),
              e(cr, t[cr]),
              e(or, t[or]),
              e(Je, t[Je]),
              e(Ke, t[Ke]),
              e(pr, t[pr]),
              e(vr, t[vr]),
              e(Ut, 1),
              e(Dt, "j68"),
              r(Re, at),
              r(Ge, p),
              r(Te, ft),
              r(Ie, st),
              r(Ue, ht),
              r(De, Ir),
              r(Fe, Ur),
              r(Ne, it),
              r(Le, gt),
              r(Be, lt),
              r(qe, pt),
              r(We, yn),
              r(Me, ut),
              r(Ce, ct),
              r($e, jr(this)),
              bn(this.b),
              mn(this.b, t[Ve]),
              this.b.set(
                Ft,
                (function () {
                  var t = (j.gaGlobal = j.gaGlobal || {});
                  return (t.hid = t.hid || dt());
                })()
              ),
              (function (t, e, r) {
                if (!en) {
                  var n = P.location.hash,
                    o = j.name,
                    i = /^#?gaso=([^&]*)/;
                  (o =
                    (n = (n = (n && n.match(i)) || (o && o.match(i))) ? n[1] : D("GASO")[0] || "") &&
                    n.match(/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) &&
                    (F("GASO", "" + n, r, e, t, 0),
                    window._udo || (window._udo = e),
                    window._utcp || (window._utcp = r),
                    (t = o[1]),
                    g("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (t ? "prefix=" + t + "&" : "") + dt(), "_gasojs")),
                    (en = !0);
                }
              })(this.b.get(Ye), this.b.get(Ze), this.b.get(Qe));
          },
          mn = function (t, e) {
            var n = wt(t, Xe);
            if ((t.data.set(fr, "_ga" == n ? "_gid" : n + "_gid"), "cookie" == wt(t, or))) {
              if (((Pr = !1), (n = D(wt(t, Xe))), !(n = Fr(t, n)))) {
                n = wt(t, Ze);
                var o = wt(t, rr) || b();
                null != (n = Wr("__utma", o, n)) ? (r(10), (n = n.O[1] + "." + n.O[2])) : (n = void 0);
              }
              if ((n && (Pr = !0), (o = n && !t.get(er))))
                if (2 != (o = n.split(".")).length) o = !1;
                else if ((o = Number(o[1]))) {
                  var i = _t(t, tr);
                  o = o + i < new Date().getTime() / 1e3;
                } else o = !1;
              if (
                (o && (n = void 0),
                n && (t.data.set(He, n), t.data.set(Ve, n), (n = D(wt(t, fr))), (n = Fr(t, n)) && t.data.set(lr, n)),
                t.get(vr) && ((n = t.get(hr)), (o = t.get(gr)), !n || (o && "aw.ds" != o)))
              ) {
                if (((n = {}), P)) {
                  (o = []), (i = P.cookie.split(";"));
                  for (var a = /^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/, s = 0; s < i.length; s++) {
                    var u = i[s].match(a);
                    u && o.push({ ja: u[1], value: u[2] });
                  }
                  if (((i = {}), o && o.length))
                    for (a = 0; a < o.length; a++)
                      "1" != (s = o[a].value.split("."))[0] || 3 != s.length
                        ? n && (n.na = !0)
                        : s[1] && (i[o[a].ja] ? n && (n.pa = !0) : (i[o[a].ja] = []), i[o[a].ja].push({ timestamp: s[1], qa: s[2] }));
                  o = i;
                } else o = {};
                (o = o[wt(t, Ye)]), $r(n), o && 0 != o.length && ((n = o[0]), t.data.set(dr, n.timestamp), t.data.set(hr, n.qa));
              }
            }
            if (t.get(er))
              t: if ((o = v("_ga", t.get(ar))))
                if (t.get(ir))
                  if (-1 == (n = o.indexOf("."))) r(22);
                  else {
                    if (
                      ((i = o.substring(0, n)),
                      (n = (a = o.substring(n + 1)).indexOf(".")),
                      (o = a.substring(0, n)),
                      (a = a.substring(n + 1)),
                      "1" == i)
                    ) {
                      if (tn((n = a), o)) {
                        r(23);
                        break t;
                      }
                    } else {
                      if ("2" != i) {
                        r(22);
                        break t;
                      }
                      if (
                        ((i = ""),
                        0 < (n = a.indexOf("-")) ? ((i = a.substring(0, n)), (n = a.substring(n + 1))) : (n = a.substring(1)),
                        tn(i + n, o))
                      ) {
                        r(53);
                        break t;
                      }
                      i && (r(2), t.data.set(lr, i));
                    }
                    r(11),
                      t.data.set(Ve, n),
                      (n = v("_gac", t.get(ar))) &&
                        ("1" != (n = n.split("."))[0] || 4 != n.length
                          ? r(72)
                          : tn(n[3], n[1])
                          ? r(71)
                          : (t.data.set(hr, n[3]), t.data.set(dr, n[2]), r(70)));
                  }
                else r(21);
            e && (r(9), t.data.set(Ve, h(e))),
              t.get(Ve) ||
                ((e = (e = j.gaGlobal && j.gaGlobal.vid) && -1 != e.search(Rt) ? e : void 0)
                  ? (r(17), t.data.set(Ve, e))
                  : (r(8), t.data.set(Ve, l()))),
              t.get(lr) || (r(3), t.data.set(lr, l())),
              Rr(t);
          },
          bn = function (t) {
            var e = j.navigator,
              n = j.screen,
              o = P.location;
            if (
              (t.set(
                Wt,
                (function (t, e) {
                  var r = P.referrer;
                  if (/^(https?|android-app):\/\//i.test(r)) {
                    if (t) return r;
                    if (((t = "//" + P.location.hostname), !w(r, t)))
                      return e && ((e = t.replace(/\./g, "-") + ".cdn.ampproject.org"), w(r, e)) ? void 0 : r;
                  }
                })(t.get(cr), t.get(pr))
              ),
              o)
            ) {
              var i = o.pathname || "";
              "/" != i.charAt(0) && (r(31), (i = "/" + i)), t.set($t, o.protocol + "//" + o.hostname + i + o.search);
            }
            n && t.set(Ht, n.width + "x" + n.height), n && t.set(Kt, n.colorDepth + "-bit"), (n = P.documentElement);
            var a = (i = P.body) && i.clientWidth && i.clientHeight,
              s = [];
            if (
              (n && n.clientWidth && n.clientHeight && ("CSS1Compat" === P.compatMode || !a)
                ? (s = [n.clientWidth, n.clientHeight])
                : a && (s = [i.clientWidth, i.clientHeight]),
              (n = 0 >= s[0] || 0 >= s[1] ? "" : s.join("x")),
              t.set(Jt, n),
              t.set(
                Xt,
                (function () {
                  var t, e;
                  if ((e = (e = j.navigator) ? e.plugins : null) && e.length)
                    for (var r = 0; r < e.length && !t; r++) {
                      var n = e[r];
                      -1 < n.name.indexOf("Shockwave Flash") && (t = n.description);
                    }
                  if (!t)
                    try {
                      var o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                      t = o.GetVariable("$version");
                    } catch (t) {}
                  if (!t)
                    try {
                      (o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")),
                        (t = "WIN 6,0,21,0"),
                        (o.AllowScriptAccess = "always"),
                        (t = o.GetVariable("$version"));
                    } catch (t) {}
                  if (!t)
                    try {
                      t = (o = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version");
                    } catch (t) {}
                  return t && (o = t.match(/[\d]+/g)) && 3 <= o.length && (t = o[0] + "." + o[1] + " r" + o[2]), t || void 0;
                })()
              ),
              t.set(Vt, P.characterSet || P.charset),
              t.set(Yt, (e && "function" == typeof e.javaEnabled && e.javaEnabled()) || !1),
              t.set(zt, ((e && (e.language || e.browserLanguage)) || "").toLowerCase()),
              t.data.set(hr, v("gclid", !0)),
              t.data.set(gr, v("gclsrc", !0)),
              t.data.set(dr, Math.round(new Date().getTime() / 1e3)),
              o && t.get(ar) && (e = P.location.hash))
            ) {
              for (e = e.split(/[?&#]+/), o = [], n = 0; n < e.length; ++n)
                (u(e[n], "utm_id") ||
                  u(e[n], "utm_campaign") ||
                  u(e[n], "utm_source") ||
                  u(e[n], "utm_medium") ||
                  u(e[n], "utm_term") ||
                  u(e[n], "utm_content") ||
                  u(e[n], "gclid") ||
                  u(e[n], "dclid") ||
                  u(e[n], "gclsrc")) &&
                  o.push(e[n]);
              0 < o.length && ((e = "#" + o.join("&")), t.set($t, t.get($t) + e));
            }
          };
        (vn.prototype.get = function (t) {
          return this.b.get(t);
        }),
          (vn.prototype.set = function (t, e) {
            this.b.set(t, e);
          });
        var wn = { pageview: [Gt], event: [Zt, Qt, te, ee], social: [re, ne, oe], timing: [he, de, ge, ye] };
        (vn.prototype.send = function (t) {
          if (!(1 > arguments.length)) {
            if ("string" == typeof arguments[0])
              var e = arguments[0],
                r = [].slice.call(arguments, 1);
            else (e = arguments[0] && arguments[0][Nt]), (r = arguments);
            e && (((r = _(wn[e] || [], r))[Nt] = e), this.b.set(r, void 0, !0), this.filters.D(this.b), (this.b.data.m = {}));
          }
        }),
          (vn.prototype.ma = function (t, e) {
            var r = this;
            Rn(t, r, e) ||
              (In(t, function () {
                Rn(t, r, e);
              }),
              Tn(String(r.get(ze)), t, void 0, e, !0));
          });
        var _n,
          En,
          Sn,
          An,
          On = function (t) {
            return "prerender" != P.visibilityState && (t(), !0);
          },
          xn = function (t) {
            if (!On(t)) {
              r(16);
              var e = !1,
                n = function () {
                  if (!e && On(t)) {
                    e = !0;
                    var r = n,
                      o = P;
                    o.removeEventListener
                      ? o.removeEventListener("visibilitychange", r, !1)
                      : o.detachEvent && o.detachEvent("onvisibilitychange", r);
                  }
                };
              d(P, "visibilitychange", n);
            }
          },
          kn = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/,
          jn = function (t) {
            if (i(t[0])) this.u = t[0];
            else {
              var e = kn.exec(t[0]);
              if (
                (null != e &&
                  4 == e.length &&
                  ((this.c = e[1] || "t0"),
                  (this.K = e[2] || ""),
                  (this.C = e[3]),
                  (this.a = [].slice.call(t, 1)),
                  this.K ||
                    ((this.A = "create" == this.C),
                    (this.i = "require" == this.C),
                    (this.g = "provide" == this.C),
                    (this.ba = "remove" == this.C)),
                  this.i &&
                    (3 <= this.a.length
                      ? ((this.X = this.a[1]), (this.W = this.a[2]))
                      : this.a[1] && (s(this.a[1]) ? (this.X = this.a[1]) : (this.W = this.a[1])))),
                (e = t[1]),
                (t = t[2]),
                !this.C)
              )
                throw "abort";
              if (this.i && (!s(e) || "" == e)) throw "abort";
              if (this.g && (!s(e) || "" == e || !i(t))) throw "abort";
              if (Pn(this.c) || Pn(this.K)) throw "abort";
              if (this.g && "t0" != this.c) throw "abort";
            }
          };
        function Pn(t) {
          return 0 <= t.indexOf(".") || 0 <= t.indexOf(":");
        }
        (_n = new E()), (Sn = new E()), (An = new E()), (En = { ec: 45, ecommerce: 46, linkid: 47 });
        var Rn = function (t, e, r) {
            e == Ln || e.get(ze);
            var n = _n.get(t);
            return !!i(n) && ((e.plugins_ = e.plugins_ || new E()), e.plugins_.get(t) || e.plugins_.set(t, new n(e, r || {})), !0);
          },
          Tn = function (t, e, n, o, a) {
            if (!i(_n.get(e)) && !Sn.get(e)) {
              if ((En.hasOwnProperty(e) && r(En[e]), rn.test(e))) {
                if ((r(52), !(t = Ln.j(t)))) return !0;
                (o = { id: e, B: (n = o || {}).dataLayer || "dataLayer", ia: !!t.get("anonymizeIp"), sync: a, G: !1 }),
                  t.get("&gtm") == e && (o.G = !0);
                var s = String(t.get("name"));
                "t0" != s && (o.target = s),
                  U(String(t.get("trackingId"))) ||
                    ((o.clientId = String(t.get(Ve))),
                    (o.ka = Number(t.get(Ke))),
                    (n = n.palindrome ? on : nn),
                    (n = (n = P.cookie.replace(/^|(; +)/g, ";").match(n)) ? n.sort().join("").substring(1) : void 0),
                    (o.la = n),
                    (o.qa = m(t.b.get($t) || "", "gclid"))),
                  (t = o.B),
                  (n = new Date().getTime()),
                  (j[t] = j[t] || []),
                  (n = { "gtm.start": n }),
                  a || (n.event = "gtm.js"),
                  j[t].push(n),
                  (n = (function (t) {
                    function e(t, e) {
                      e && (r += "&" + t + "=" + h(e));
                    }
                    var r = "https://www.google-analytics.com/gtm/js?id=" + h(t.id);
                    return (
                      "dataLayer" != t.B && e("l", t.B),
                      e("t", t.target),
                      e("cid", t.clientId),
                      e("cidt", t.ka),
                      e("gac", t.la),
                      e("aip", t.ia),
                      t.sync && e("m", "sync"),
                      e("cycle", t.G),
                      t.qa && e("gclid", t.qa),
                      an.test(P.referrer) && e("cb", String(dt())),
                      r
                    );
                  })(o));
              }
              !n && En.hasOwnProperty(e) ? (r(39), (n = e + ".js")) : r(43),
                n &&
                  ((n && 0 <= n.indexOf("/")) ||
                    (n = (It || "https:" == P.location.protocol ? "https:" : "http:") + "//www.google-analytics.com/plugins/ua/" + n),
                  (t = (o = Fn(n)).protocol),
                  (n = P.location.protocol),
                  ("https:" == t || t == n || ("http:" == t && "http:" == n)) && Dn(o) && (g(o.url, void 0, a), Sn.set(e, !0)));
            }
          },
          In = function (t, e) {
            var r = An.get(t) || [];
            r.push(e), An.set(t, r);
          },
          Un = function (t, e) {
            _n.set(t, e), (e = An.get(t) || []);
            for (var r = 0; r < e.length; r++) e[r]();
            An.set(t, []);
          },
          Dn = function (t) {
            var e = Fn(P.location.href);
            return (
              !!u(t.url, "https://www.google-analytics.com/gtm/js?id=") ||
              (!(t.query || 0 <= t.url.indexOf("?") || 0 <= t.path.indexOf("://")) &&
                ((t.host == e.host && t.port == e.port) ||
                  ((e = "http:" == t.protocol ? 80 : 443),
                  !("www.google-analytics.com" != t.host || (t.port || e) != e || !u(t.path, "/plugins/")))))
            );
          },
          Fn = function (t) {
            function e(t) {
              var e = (t.hostname || "").split(":")[0].toLowerCase(),
                r = (t.protocol || "").toLowerCase();
              return (
                (r = 1 * t.port || ("http:" == r ? 80 : "https:" == r ? 443 : "")),
                (t = t.pathname || ""),
                u(t, "/") || (t = "/" + t),
                [e, "" + r, t]
              );
            }
            var r = P.createElement("a");
            r.href = P.location.href;
            var n = (r.protocol || "").toLowerCase(),
              o = e(r),
              i = r.search || "",
              a = n + "//" + o[0] + (o[1] ? ":" + o[1] : "");
            return (
              u(t, "//")
                ? (t = n + t)
                : u(t, "/")
                ? (t = a + t)
                : !t || u(t, "?")
                ? (t = a + o[2] + (t || i))
                : 0 > t.split("/")[0].indexOf(":") && (t = a + o[2].substring(0, o[2].lastIndexOf("/")) + "/" + t),
              (r.href = t),
              (n = e(r)),
              { protocol: (r.protocol || "").toLowerCase(), host: n[0], port: n[1], path: n[2], query: r.search || "", url: t || "" }
            );
          },
          Nn = {
            ga: function () {
              Nn.f = [];
            }
          };
        Nn.ga(),
          (Nn.D = function (t) {
            var e = Nn.J.apply(Nn, arguments);
            for (e = Nn.f.concat(e), Nn.f = []; 0 < e.length && !Nn.v(e[0]) && (e.shift(), !(0 < Nn.f.length)); );
            Nn.f = Nn.f.concat(e);
          }),
          (Nn.J = function (t) {
            for (var e = [], r = 0; r < arguments.length; r++)
              try {
                var n = new jn(arguments[r]);
                n.g ? Un(n.a[0], n.a[1]) : (n.i && (n.ha = Tn(n.c, n.a[0], n.X, n.W)), e.push(n));
              } catch (t) {}
            return e;
          }),
          (Nn.v = function (t) {
            try {
              if (t.u) t.u.call(j, Ln.j("t0"));
              else {
                var e = t.c == Pt ? Ln : Ln.j(t.c);
                if (t.A) {
                  if ("t0" == t.c && null === (e = Ln.create.apply(Ln, t.a))) return !0;
                } else if (t.ba) Ln.remove(t.c);
                else if (e)
                  if (t.i) {
                    if ((t.ha && (t.ha = Tn(t.c, t.a[0], t.X, t.W)), !Rn(t.a[0], e, t.W))) return !0;
                  } else if (t.K) {
                    var r = t.C,
                      n = t.a,
                      o = e.plugins_.get(t.K);
                    o[r].apply(o, n);
                  } else e[t.C].apply(e, t.a);
              }
            } catch (t) {}
          });
        var Ln = function (t) {
          r(1), Nn.D.apply(Nn, [arguments]);
        };
        (Ln.h = {}), (Ln.P = []), (Ln.L = 0), (Ln.answer = 42);
        var Mn = [Ye, Ze, ze];
        (Ln.create = function (t) {
          var e = _(Mn, [].slice.call(arguments));
          e[ze] || (e[ze] = "t0");
          var n = "" + e[ze];
          if (Ln.h[n]) return Ln.h[n];
          t: {
            if (e[pr]) {
              if ((r(67), e[or] && "cookie" != e[or])) {
                var o = !1;
                break t;
              }
              if (void 0 !== k) e[Ve] || (e[Ve] = k);
              else {
                e: {
                  o = String(e[Ze] || b());
                  var i = String(e[Qe] || "/"),
                    a = D(String(e[Xe] || "_ga"));
                  if (!(o = Nr(a, o, i)) || Rt.test(o)) o = !0;
                  else if (0 == (o = D("AMP_TOKEN")).length) o = !0;
                  else {
                    if (
                      1 == o.length &&
                      ("$RETRIEVING" == (o = decodeURIComponent(o[0])) || "$OPT_OUT" == o || "$ERROR" == o || "$NOT_FOUND" == o)
                    ) {
                      o = !0;
                      break e;
                    }
                    o = !1;
                  }
                }
                if (o && G(W, String(e[Ye]))) {
                  o = !0;
                  break t;
                }
              }
            }
            o = !1;
          }
          return o ? null : ((e = new vn(e)), (Ln.h[n] = e), Ln.P.push(e), e);
        }),
          (Ln.remove = function (t) {
            for (var e = 0; e < Ln.P.length; e++)
              if (Ln.P[e].get(ze) == t) {
                Ln.P.splice(e, 1), (Ln.h[t] = null);
                break;
              }
          }),
          (Ln.j = function (t) {
            return Ln.h[t];
          }),
          (Ln.getAll = function () {
            return Ln.P.slice(0);
          }),
          (Ln.N = function () {
            "ga" != Pt && r(49);
            var t = j[Pt];
            if (!t || 42 != t.answer) {
              (Ln.L = t && t.l), (Ln.loaded = !0);
              var e = (j[Pt] = Ln);
              if (
                (Er("create", e, e.create),
                Er("remove", e, e.remove),
                Er("getByName", e, e.j, 5),
                Er("getAll", e, e.getAll, 6),
                Er("get", (e = vn.prototype), e.get, 7),
                Er("set", e, e.set, 4),
                Er("send", e, e.send),
                Er("requireSync", e, e.ma),
                Er("get", (e = vt.prototype), e.get),
                Er("set", e, e.set),
                "https:" != P.location.protocol && !It)
              ) {
                t: {
                  e = P.getElementsByTagName("script");
                  for (var n = 0; n < e.length && 100 > n; n++) {
                    var o = e[n].src;
                    if (o && 0 == o.indexOf("https://www.google-analytics.com/analytics")) {
                      e = !0;
                      break t;
                    }
                  }
                  e = !1;
                }
                e && (It = !0);
              }
              ((j.gaplugins = j.gaplugins || {}).Linker = Yr),
                (e = Yr.prototype),
                Un("linker", Yr),
                Er("decorate", e, e.ca, 20),
                Er("autoLink", e, e.S, 25),
                Un("displayfeatures", dn),
                Un("adfeatures", dn),
                (t = t && t.q),
                a(t) ? Nn.D.apply(Ln, t) : r(50);
            }
          }),
          (Ln.da = function () {
            for (var t = Ln.getAll(), e = 0; e < t.length; e++) t[e].get(ze);
          });
        var Cn = Ln.N,
          Bn = j[Pt];
        function qn(t) {
          var e,
            r = 1;
          if (t)
            for (r = 0, e = t.length - 1; 0 <= e; e--) {
              var n = t.charCodeAt(e);
              r = 0 != (n = 266338304 & (r = ((r << 6) & 268435455) + n + (n << 14))) ? r ^ (n >> 21) : r;
            }
          return r;
        }
        Bn && Bn.r ? Cn() : xn(Cn),
          xn(function () {
            Nn.D(["provide", "render", p]);
          });
      })(window);
    }),
    i.register("iW6yY", function (e, r) {
      t(e.exports, "default", () => a);
      var n = i("2z2pA");
      const o = (function () {
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        let t = chrome.extension.getURL("/"),
          e = {
            absPath: (e, r) => `filesystem:${t}${r ? "temporary" : "persistent"}${e}`,
            requestFs: function (t, e) {
              void 0 === e && "boolean" == typeof t && ((e = t), (t = null)), (t = t || 1048576);
              let r = !0 === e ? window.TEMPORARY : window.PERSISTENT;
              return new Promise((e, n) => {
                window.requestFileSystem(
                  r,
                  t,
                  (t) => e(t),
                  (t) => n(t)
                );
              });
            },
            requestFsError: function (t) {
              n.default.error("ERROR requesting filesystem", t);
              showError(
                "Unable to access filesystem",
                "Something went wrong accessing the filesystem. Check your browser settings.",
                !0,
                !0
              );
            },
            getDirectory: function (t, e, r) {
              let n = void 0 === t.root ? t : t.root;
              return new Promise((t, o) => {
                n.getDirectory(
                  e,
                  r,
                  (e) => t(e),
                  (t) => o(t)
                );
              });
            },
            getFile: function (t, e, r) {
              let n = void 0 === t.root ? t : t.root;
              return new Promise((t, o) => {
                n.getFile(
                  e,
                  r,
                  (e) => t(e),
                  (t) => o(t)
                );
              });
            },
            getFiles: function (t, r, o) {
              return Promise.all(
                r.map((r) => {
                  let i = e.getFile(t, r);
                  return (
                    !0 === o &&
                      (i = i.catch((t) => {
                        n.default.error("Ignoring not found file:", t);
                      })),
                    i
                  );
                })
              ).then((t) => t.filter((t) => void 0 !== t));
            },
            writeFile: function (t, e) {
              return new Promise((r, n) => {
                t.createWriter(function (o) {
                  (o.onwriteend = () => r(t)), (o.onerror = (t) => n(t)), o.write(e);
                }, n);
              });
            },
            moveFile: function (t, e, r) {
              return new Promise((n, o) => {
                t.moveTo(e, r, (t) => n(t), o);
              });
            },
            removeFile: function (t) {
              return new Promise((e, r) => {
                t.remove(
                  () => e(),
                  (t) => r(t)
                );
              });
            },
            lookupFiles: function (t, r) {
              let n = void 0 === t.root ? t : t.root;
              return new Promise((t, o) => {
                let i = n.createReader(),
                  a = [];
                !(function n() {
                  i.readEntries((o) => {
                    var i;
                    o.length
                      ? ((a = a.concat(((i = o), Array.prototype.slice.call(i || [], 0)))), n())
                      : (a.sort(), t(!0 === r ? a : e.filterToFiles(a)));
                  }, o);
                })();
              });
            },
            filterToFiles: function (t) {
              return t.filter((t) => t.isFile);
            },
            loadMetadata: function (t) {
              let r = t.map((t) => e.getMetadata(t));
              return Promise.all(r);
            },
            getMetadata: function (t) {
              return new Promise((e, r) => {
                t.getMetadata(
                  function (r) {
                    (t.metadata = r), e(t);
                  },
                  function () {
                    n.default.error("error reading metadata", arguments), (t.metadata = null), e(t);
                  }
                );
              });
            },
            rmFiles: function (t, e) {
              return new Promise((r, o) => {
                let i = t.length,
                  a = [],
                  s = [],
                  u = { succeeded: a, failed: s };
                function c(t, n, o) {
                  (o ? a : s).push(t), e(t, n, i, o), a.length + s.length === i && r(u);
                }
                0 === i && r(u),
                  t.forEach(function (t, e) {
                    (0, n.default)("FILE", t, e),
                      t.isFile
                        ? t.remove(
                            () => c(t, e, !0),
                            () => c(t, e, !1)
                          )
                        : c(t, e, !1);
                  });
              });
            },
            clearAllFiles: function (t, r) {
              return new Promise((o, i) => {
                (r = r || function () {}),
                  e
                    .lookupFiles(t)
                    .then((t) => e.rmFiles(t))
                    .catch((t) => {
                      let e = (function (t) {
                        let e = "";
                        switch (t.code) {
                          case FileError.QUOTA_EXCEEDED_ERR:
                            e = "QUOTA_EXCEEDED_ERR";
                            break;
                          case FileError.NOT_FOUND_ERR:
                            e = "NOT_FOUND_ERR";
                            break;
                          case FileError.SECURITY_ERR:
                            e = "SECURITY_ERR";
                            break;
                          case FileError.INVALID_MODIFICATION_ERR:
                            e = "INVALID_MODIFICATION_ERR";
                            break;
                          case FileError.INVALID_STATE_ERR:
                            e = "INVALID_STATE_ERR";
                            break;
                          default:
                            e = "Unknown Error";
                        }
                        return e;
                      })(t);
                      n.default.error("Encountered error", e), i(t);
                    });
              });
            },
            _listeners: [],
            onUpdated: function (t) {
              e._listeners.push(t);
            },
            triggerUpdated: function (t) {
              (t = t || {}), e._listeners.forEach((e) => e(t));
            }
          };
        return e;
      })();
      window._FSAPI = o;
      var a = o;
    }),
    i.register("6pLLc", function (e, r) {
      t(e.exports, "serialMap", () => n),
        t(e.exports, "sleep", () => o),
        t(e.exports, "timeoutWrap", () => a),
        t(e.exports, "simpleLoadImage", () => s),
        t(e.exports, "loadImage", () => u);
      const n = i("hDtYW").serialMap,
        o = (t, e) =>
          new Promise((r) => {
            window.setTimeout(() => r(e), t);
          }),
        a = (t, e, r, n) =>
          new Promise((o, i) => {
            let a;
            e &&
              (a = window.setTimeout(() => {
                let t = `Promise timed out after ${e}ms`;
                r && (t += " " + r);
                let o = new Error(t);
                if (((o.name = "PromiseTimeout"), n)) {
                  !1 === n(o, e) && i(o);
                } else i(o);
              }, e)),
              t
                .then((t) => {
                  window.clearTimeout(a), o(t);
                })
                .catch(i);
          }),
        s = (t) =>
          new Promise((e, r) => {
            const n = new Image();
            (n.onerror = (t) => r(t)), (n.onload = () => e(n)), (n.src = t);
          }),
        u = (t) => s(t).then((e) => ({ img: e, src: t, width: e.width, height: e.height }));
    }),
    i.register("hDtYW", function (e, r) {
      t(e.exports, "loadImage", () => a), t(e.exports, "serialMap", () => s);
      var n = i("8rN6d"),
        o = i("8bPtr");
      const a = (t) =>
          new Promise((e, r) => {
            let n = new Image();
            (n.onerror = (t) => r(t)), (n.onload = (r) => e({ img: n, src: t, width: n.width, height: n.height })), (n.src = t);
          }),
        s =
          ((u = (0, n.default)(function (t, e) {
            var r, n, i;
            return (0, o.__generator)(this, function (o) {
              return (
                (r = t.length),
                (n = void 0 === e),
                [
                  2,
                  (i = (o, a) => {
                    if (o >= r) return a;
                    let s;
                    return (
                      (s = n ? t[o]() : e(t[o])),
                      (function (t) {
                        return t && "object" == typeof t && t.then && "function" == typeof t.then;
                      })(s)
                        ? s.then((t) => i(o + 1, t))
                        : i(o + 1, s)
                    );
                  })(0, void 0)
                ]
              );
            });
          })),
          function (t, e) {
            return u.apply(this, arguments);
          });
      var u;
    }),
    i.register("8rN6d", function (e, r) {
      function n(t, e, r, n, o, i, a) {
        try {
          var s = t[i](a),
            u = s.value;
        } catch (t) {
          return void r(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (o, i) {
            var a = t.apply(e, r);
            function s(t) {
              n(a, o, i, s, u, "next", t);
            }
            function u(t) {
              n(a, o, i, s, u, "throw", t);
            }
            s(void 0);
          });
        };
      }
      t(e.exports, "default", () => o);
    }),
    i.register("8bPtr", function (e, r) {
      t(e.exports, "__generator", () => n);
      function n(t, e) {
        var r,
          n,
          o,
          i,
          a = {
            label: 0,
            sent: function () {
              if (1 & o[0]) throw o[1];
              return o[1];
            },
            trys: [],
            ops: []
          };
        return (
          (i = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function s(s) {
          return function (u) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && ((i = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (o = 2 & s[0] ? n.return : s[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) &&
                      !(o = o.call(n, s[1])).done)
                  )
                    return o;
                  switch (((n = 0), o && (s = [2 & s[0], o.value]), s[0])) {
                    case 0:
                    case 1:
                      o = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (!((o = a.trys), (o = o.length > 0 && o[o.length - 1]) || (6 !== s[0] && 2 !== s[0]))) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!o || (s[1] > o[0] && s[1] < o[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < o[1]) {
                        (a.label = o[1]), (o = s);
                        break;
                      }
                      if (o && a.label < o[2]) {
                        (a.label = o[2]), a.ops.push(s);
                        break;
                      }
                      o[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = e.call(t, a);
                } catch (t) {
                  (s = [6, t]), (n = 0);
                } finally {
                  r = o = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
          };
        }
      }
      Object.create;
      Object.create;
    }),
    i.register("fiP9V", function (r, n) {
      t(r.exports, "isFieldHidden", () => h), t(r.exports, "default", () => d);
      var o = i("8rN6d"),
        a = i("iPbYd"),
        s = i("ff4Ef"),
        u = i("8bPtr"),
        c = i("4fNEN"),
        l = i("eL3Zw");
      const f = l.default.local,
        p = l.default.sync,
        h = (t, e, r) => (t.hidden && "function" == typeof t.hidden ? t.hidden(e, r) : t.hidden);
      var d = class {
        getField(t) {
          return this.fields[t];
        }
        _key(t) {
          return this.namespace + "." + t;
        }
        _keys(t) {
          if (void 0 === t) throw new Error("Cannot pass `undefined` as `keys`!");
          return "string" == typeof t && (t = [t]), t.map((t) => this._key(t));
        }
        _stripKey(t) {
          return t.substring(this.namespace.length + 1);
        }
        set(t, e) {
          var r = this;
          return (0, o.default)(function () {
            return (0, u.__generator)(this, function (n) {
              return [2, r.setObj({ [t]: e })];
            });
          })();
        }
        setObj(t) {
          var r = this;
          return (0, o.default)(function () {
            var n;
            return (0, u.__generator)(this, function (o) {
              return (
                (n = {}),
                Object.entries(t).forEach((t) => {
                  let o = (0, s.default)(t, 2),
                    i = o[0],
                    a = o[1];
                  const u = r._key(i),
                    l = r.namespacedToField[u];
                  e(c).ok(l, `no field found for ${u} (${i})`), (n[u] = r._serializeField(l, a));
                }),
                [
                  2,
                  r.storage.set(n).then(() => {
                    Object.assign(r.state, t);
                  })
                ]
              );
            });
          })();
        }
        get(t) {
          var r = this;
          return (0, o.default)(function () {
            var n;
            return (0, u.__generator)(this, function (o) {
              return (
                (n = r._keys(t)),
                [
                  2,
                  r.storage.get(n).then((t) => {
                    const n = {};
                    return (
                      Object.entries(t).forEach((t) => {
                        let o = (0, s.default)(t, 2),
                          i = o[0],
                          a = o[1];
                        const u = r.namespacedToField[i];
                        e(c).ok(u, `no field found for ${i}`);
                        const l = r._stripKey(i);
                        n[l] = r._deserializeField(u, a);
                      }),
                      Object.assign(r.state, n),
                      n
                    );
                  })
                ]
              );
            });
          })();
        }
        remove(t) {
          var e = this;
          return (0, o.default)(function () {
            var r, n;
            return (0, u.__generator)(this, function (o) {
              return (
                (r = "string" == typeof t ? [t] : t),
                (n = e._keys(t)),
                [
                  2,
                  e.storage.remove(n).then(() => {
                    r.forEach((t) => {
                      delete e.state[t];
                    });
                  })
                ]
              );
            });
          })();
        }
        clear() {
          var t = this;
          return (0, o.default)(function () {
            var e;
            return (0, u.__generator)(this, function (r) {
              return (e = Object.keys(t.fields)), [2, t.remove(e)];
            });
          })();
        }
        load(t) {
          let e = void 0 !== t && t;
          var r = this;
          return (0, o.default)(function () {
            return (0, u.__generator)(this, function (t) {
              return (r._loadProm && !0 !== e) || (r._loadProm = r._load()), [2, r._loadProm.then(() => Object.assign({}, r.state))];
            });
          })();
        }
        _load() {
          var t = this;
          return (0, o.default)(function () {
            var e;
            return (0, u.__generator)(this, function (r) {
              return (
                (e = Object.keys(t.fields)),
                [
                  2,
                  t.get(e).then(
                    (e) => (
                      Object.entries(t.fields).forEach((t) => {
                        let r = (0, s.default)(t, 2),
                          n = r[0],
                          o = r[1];
                        const i = n;
                        if (void 0 === e[i]) void 0 !== o.default && (e[i] = "function" == typeof o.default ? o.default() : o.default);
                        else if (o.process) {
                          const t = o.process(e[i]).val;
                          e[i] = t;
                        }
                      }),
                      Object.assign(t.state, e),
                      e
                    )
                  )
                ]
              );
            });
          })();
        }
        onUpdate(t) {
          this._listeners.push(t);
        }
        _startListening() {
          return (
            !this._listening &&
            ((this._listening = !0),
            chrome.storage.onChanged.addListener((t, e) => {
              if (e === this.areaName) {
                const e = [];
                Object.entries(t).forEach((t) => {
                  let r = (0, s.default)(t, 2),
                    n = r[0],
                    o = r[1];
                  const i = this.namespacedToField[n],
                    a = this.namespacedToKey[n];
                  i && a && (e.push(a), (this.state[a] = this._deserializeField(i, o.newValue)));
                }),
                  e.length && this._listeners.forEach((t) => t(e));
              }
            }),
            !0)
          );
        }
        _serializeField(t, e) {
          return "json" === t.type ? JSON.stringify(e) : e;
        }
        _deserializeField(t, e) {
          return void 0 === e && void 0 !== t.default
            ? "function" == typeof t.default
              ? t.default()
              : t.default
            : "json" === t.type
            ? JSON.parse(e)
            : e;
        }
        constructor(t, e, r) {
          (0, a.default)(this, "_listening", !1),
            (this.namespace = t),
            (this.fields = e),
            (this.state = {}),
            (this.storage = !0 === r ? p : f),
            (this.areaName = !0 === r ? "sync" : "local"),
            (this.namespacedToField = {}),
            (this.namespacedToKey = {});
          let n = !1;
          Object.entries(this.fields).forEach((t) => {
            let e = (0, s.default)(t, 2),
              r = e[0],
              o = e[1];
            (n = !0),
              "choice" === o.type && (o.convertedChoices = o.choices.map((t) => ("string" == typeof t ? { key: t, display: t } : t))),
              (this.namespacedToField[this._key(r)] = o),
              (this.namespacedToKey[this._key(r)] = r);
          }),
            (this._listeners = []),
            n && this._startListening();
        }
      };
    }),
    i.register("4fNEN", function (t, e) {
      var r = i("l6ARn").Buffer,
        n = i("dgPuA"),
        o = i("1Ew2A").Stream,
        a = i("dZjMf"),
        s = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
      function u(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      function c(t, e, r, o, i) {
        throw new n.AssertionError({
          message: a.format("%s (%s) is required", t, e),
          actual: void 0 === i ? typeof o : i(o),
          expected: e,
          operator: r || "===",
          stackStartFunction: c.caller
        });
      }
      function l(t) {
        return Object.prototype.toString.call(t).slice(8, -1);
      }
      function f() {}
      var p = {
        bool: {
          check: function (t) {
            return "boolean" == typeof t;
          }
        },
        func: {
          check: function (t) {
            return "function" == typeof t;
          }
        },
        string: {
          check: function (t) {
            return "string" == typeof t;
          }
        },
        object: {
          check: function (t) {
            return "object" == typeof t && null !== t;
          }
        },
        number: {
          check: function (t) {
            return "number" == typeof t && !isNaN(t);
          }
        },
        finite: {
          check: function (t) {
            return "number" == typeof t && !isNaN(t) && isFinite(t);
          }
        },
        buffer: {
          check: function (t) {
            return r.isBuffer(t);
          },
          operator: "Buffer.isBuffer"
        },
        array: {
          check: function (t) {
            return Array.isArray(t);
          },
          operator: "Array.isArray"
        },
        stream: {
          check: function (t) {
            return t instanceof o;
          },
          operator: "instanceof",
          actual: l
        },
        date: {
          check: function (t) {
            return t instanceof Date;
          },
          operator: "instanceof",
          actual: l
        },
        regexp: {
          check: function (t) {
            return t instanceof RegExp;
          },
          operator: "instanceof",
          actual: l
        },
        uuid: {
          check: function (t) {
            return "string" == typeof t && s.test(t);
          },
          operator: "isUUID"
        }
      };
      t.exports = (function t(e) {
        var r,
          o = Object.keys(p);
        return (
          (r = function (t, e) {
            t || c(e, "true", t);
          }),
          o.forEach(function (t) {
            if (e) r[t] = f;
            else {
              var n = p[t];
              r[t] = function (e, r) {
                n.check(e) || c(r, t, n.operator, e, n.actual);
              };
            }
          }),
          o.forEach(function (t) {
            var n = "optional" + u(t);
            if (e) r[n] = f;
            else {
              var o = p[t];
              r[n] = function (e, r) {
                null != e && (o.check(e) || c(r, t, o.operator, e, o.actual));
              };
            }
          }),
          o.forEach(function (t) {
            var n = "arrayOf" + u(t);
            if (e) r[n] = f;
            else {
              var o = p[t],
                i = "[" + t + "]";
              r[n] = function (t, e) {
                var r;
                for (Array.isArray(t) || c(e, i, o.operator, t, o.actual), r = 0; r < t.length; r++)
                  o.check(t[r]) || c(e, i, o.operator, t, o.actual);
              };
            }
          }),
          o.forEach(function (t) {
            var n = "optionalArrayOf" + u(t);
            if (e) r[n] = f;
            else {
              var o = p[t],
                i = "[" + t + "]";
              r[n] = function (t, e) {
                var r;
                if (null != t)
                  for (Array.isArray(t) || c(e, i, o.operator, t, o.actual), r = 0; r < t.length; r++)
                    o.check(t[r]) || c(e, i, o.operator, t, o.actual);
              };
            }
          }),
          Object.keys(n).forEach(function (t) {
            r[t] = "AssertionError" !== t && e ? f : n[t];
          }),
          (r._setExports = t),
          r
        );
      })(void 0);
    }),
    i.register("l6ARn", function (e, r) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */ var n, o, a, s;
      t(
        e.exports,
        "Buffer",
        () => n,
        (t) => (n = t)
      ),
        t(
          e.exports,
          "SlowBuffer",
          () => o,
          (t) => (o = t)
        ),
        t(
          e.exports,
          "INSPECT_MAX_BYTES",
          () => a,
          (t) => (a = t)
        ),
        t(
          e.exports,
          "kMaxLength",
          () => s,
          (t) => (s = t)
        );
      var u = i("fkEzO"),
        c = i("5cgNO"),
        l = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
      (n = h),
        (o = function (t) {
          +t != t && (t = 0);
          return h.alloc(+t);
        }),
        (a = 50);
      var f = 2147483647;
      function p(t) {
        if (t > f) throw new RangeError('The value "' + t + '" is invalid for option "size"');
        var e = new Uint8Array(t);
        return Object.setPrototypeOf(e, h.prototype), e;
      }
      function h(t, e, r) {
        if ("number" == typeof t) {
          if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
          return g(t);
        }
        return d(t, e, r);
      }
      function d(t, e, r) {
        if ("string" == typeof t)
          return (function (t, e) {
            ("string" == typeof e && "" !== e) || (e = "utf8");
            if (!h.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
            var r = 0 | w(t, e),
              n = p(r),
              o = n.write(t, e);
            o !== r && (n = n.slice(0, o));
            return n;
          })(t, e);
        if (ArrayBuffer.isView(t))
          return (function (t) {
            if (V(t, Uint8Array)) {
              var e = new Uint8Array(t);
              return m(e.buffer, e.byteOffset, e.byteLength);
            }
            return v(t);
          })(t);
        if (null == t)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t
          );
        if (V(t, ArrayBuffer) || (t && V(t.buffer, ArrayBuffer))) return m(t, e, r);
        if ("undefined" != typeof SharedArrayBuffer && (V(t, SharedArrayBuffer) || (t && V(t.buffer, SharedArrayBuffer))))
          return m(t, e, r);
        if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
        var n = t.valueOf && t.valueOf();
        if (null != n && n !== t) return h.from(n, e, r);
        var o = (function (t) {
          if (h.isBuffer(t)) {
            var e = 0 | b(t.length),
              r = p(e);
            return 0 === r.length || t.copy(r, 0, 0, e), r;
          }
          if (void 0 !== t.length) return "number" != typeof t.length || K(t.length) ? p(0) : v(t);
          if ("Buffer" === t.type && Array.isArray(t.data)) return v(t.data);
        })(t);
        if (o) return o;
        if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive])
          return h.from(t[Symbol.toPrimitive]("string"), e, r);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t
        );
      }
      function y(t) {
        if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
        if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
      }
      function g(t) {
        return y(t), p(t < 0 ? 0 : 0 | b(t));
      }
      function v(t) {
        for (var e = t.length < 0 ? 0 : 0 | b(t.length), r = p(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
        return r;
      }
      function m(t, e, r) {
        if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
        if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        var n;
        return (
          (n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r)),
          Object.setPrototypeOf(n, h.prototype),
          n
        );
      }
      function b(t) {
        if (t >= f) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + f.toString(16) + " bytes");
        return 0 | t;
      }
      function w(t, e) {
        if (h.isBuffer(t)) return t.length;
        if (ArrayBuffer.isView(t) || V(t, ArrayBuffer)) return t.byteLength;
        if ("string" != typeof t)
          throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
        var r = t.length,
          n = arguments.length > 2 && !0 === arguments[2];
        if (!n && 0 === r) return 0;
        for (var o = !1; ; )
          switch (e) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
              return W(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return G(t).length;
            default:
              if (o) return n ? -1 : W(t).length;
              (e = ("" + e).toLowerCase()), (o = !0);
          }
      }
      function _(t, e, r) {
        var n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0)) return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";
        for (t || (t = "utf8"); ; )
          switch (t) {
            case "hex":
              return F(this, e, r);
            case "utf8":
            case "utf-8":
              return T(this, e, r);
            case "ascii":
              return U(this, e, r);
            case "latin1":
            case "binary":
              return D(this, e, r);
            case "base64":
              return R(this, e, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return N(this, e, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + t);
              (t = (t + "").toLowerCase()), (n = !0);
          }
      }
      function E(t, e, r) {
        var n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function S(t, e, r, n, o) {
        if (0 === t.length) return -1;
        if (
          ("string" == typeof r ? ((n = r), (r = 0)) : r > 2147483647 ? (r = 2147483647) : r < -2147483648 && (r = -2147483648),
          K((r = +r)) && (r = o ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (o) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if (("string" == typeof e && (e = h.from(e, n)), h.isBuffer(e))) return 0 === e.length ? -1 : A(t, e, r, n, o);
        if ("number" == typeof e)
          return (
            (e &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : A(t, [e], r, n, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function A(t, e, r, n, o) {
        var i,
          a = 1,
          s = t.length,
          u = e.length;
        if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
          if (t.length < 2 || e.length < 2) return -1;
          (a = 2), (s /= 2), (u /= 2), (r /= 2);
        }
        function c(t, e) {
          return 1 === a ? t[e] : t.readUInt16BE(e * a);
        }
        if (o) {
          var l = -1;
          for (i = r; i < s; i++)
            if (c(t, i) === c(e, -1 === l ? 0 : i - l)) {
              if ((-1 === l && (l = i), i - l + 1 === u)) return l * a;
            } else -1 !== l && (i -= i - l), (l = -1);
        } else
          for (r + u > s && (r = s - u), i = r; i >= 0; i--) {
            for (var f = !0, p = 0; p < u; p++)
              if (c(t, i + p) !== c(e, p)) {
                f = !1;
                break;
              }
            if (f) return i;
          }
        return -1;
      }
      function O(t, e, r, n) {
        r = Number(r) || 0;
        var o = t.length - r;
        n ? (n = Number(n)) > o && (n = o) : (n = o);
        var i = e.length;
        n > i / 2 && (n = i / 2);
        for (var a = 0; a < n; ++a) {
          var s = parseInt(e.substr(2 * a, 2), 16);
          if (K(s)) return a;
          t[r + a] = s;
        }
        return a;
      }
      function x(t, e, r, n) {
        return z(W(e, t.length - r), t, r, n);
      }
      function k(t, e, r, n) {
        return z(
          (function (t) {
            for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
            return e;
          })(e),
          t,
          r,
          n
        );
      }
      function j(t, e, r, n) {
        return z(G(e), t, r, n);
      }
      function P(t, e, r, n) {
        return z(
          (function (t, e) {
            for (var r, n, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a)
              (n = (r = t.charCodeAt(a)) >> 8), (o = r % 256), i.push(o), i.push(n);
            return i;
          })(e, t.length - r),
          t,
          r,
          n
        );
      }
      function R(t, e, r) {
        return 0 === e && r === t.length ? u.fromByteArray(t) : u.fromByteArray(t.slice(e, r));
      }
      function T(t, e, r) {
        r = Math.min(t.length, r);
        for (var n = [], o = e; o < r; ) {
          var i,
            a,
            s,
            u,
            c = t[o],
            l = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + f <= r)
            switch (f) {
              case 1:
                c < 128 && (l = c);
                break;
              case 2:
                128 == (192 & (i = t[o + 1])) && (u = ((31 & c) << 6) | (63 & i)) > 127 && (l = u);
                break;
              case 3:
                (i = t[o + 1]),
                  (a = t[o + 2]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & a)) > 2047 &&
                    (u < 55296 || u > 57343) &&
                    (l = u);
                break;
              case 4:
                (i = t[o + 1]),
                  (a = t[o + 2]),
                  (s = t[o + 3]),
                  128 == (192 & i) &&
                    128 == (192 & a) &&
                    128 == (192 & s) &&
                    (u = ((15 & c) << 18) | ((63 & i) << 12) | ((63 & a) << 6) | (63 & s)) > 65535 &&
                    u < 1114112 &&
                    (l = u);
            }
          null === l ? ((l = 65533), (f = 1)) : l > 65535 && ((l -= 65536), n.push(((l >>> 10) & 1023) | 55296), (l = 56320 | (1023 & l))),
            n.push(l),
            (o += f);
        }
        return (function (t) {
          var e = t.length;
          if (e <= I) return String.fromCharCode.apply(String, t);
          var r = "",
            n = 0;
          for (; n < e; ) r += String.fromCharCode.apply(String, t.slice(n, (n += I)));
          return r;
        })(n);
      }
      (s = f),
        (h.TYPED_ARRAY_SUPPORT = (function () {
          try {
            var t = new Uint8Array(1),
              e = {
                foo: function () {
                  return 42;
                }
              };
            return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo();
          } catch (t) {
            return !1;
          }
        })()),
        h.TYPED_ARRAY_SUPPORT ||
          "undefined" == typeof console ||
          "function" != typeof console.error ||
          console.error(
            "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
          ),
        Object.defineProperty(h.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (h.isBuffer(this)) return this.buffer;
          }
        }),
        Object.defineProperty(h.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (h.isBuffer(this)) return this.byteOffset;
          }
        }),
        (h.poolSize = 8192),
        (h.from = function (t, e, r) {
          return d(t, e, r);
        }),
        Object.setPrototypeOf(h.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(h, Uint8Array),
        (h.alloc = function (t, e, r) {
          return (function (t, e, r) {
            return y(t), t <= 0 ? p(t) : void 0 !== e ? ("string" == typeof r ? p(t).fill(e, r) : p(t).fill(e)) : p(t);
          })(t, e, r);
        }),
        (h.allocUnsafe = function (t) {
          return g(t);
        }),
        (h.allocUnsafeSlow = function (t) {
          return g(t);
        }),
        (h.isBuffer = function (t) {
          return null != t && !0 === t._isBuffer && t !== h.prototype;
        }),
        (h.compare = function (t, e) {
          if (
            (V(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)),
            V(e, Uint8Array) && (e = h.from(e, e.offset, e.byteLength)),
            !h.isBuffer(t) || !h.isBuffer(e))
          )
            throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
          if (t === e) return 0;
          for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
            if (t[o] !== e[o]) {
              (r = t[o]), (n = e[o]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (h.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
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
        (h.concat = function (t, e) {
          if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return h.alloc(0);
          var r;
          if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
          var n = h.allocUnsafe(e),
            o = 0;
          for (r = 0; r < t.length; ++r) {
            var i = t[r];
            if (V(i, Uint8Array)) o + i.length > n.length ? h.from(i).copy(n, o) : Uint8Array.prototype.set.call(n, i, o);
            else {
              if (!h.isBuffer(i)) throw new TypeError('"list" argument must be an Array of Buffers');
              i.copy(n, o);
            }
            o += i.length;
          }
          return n;
        }),
        (h.byteLength = w),
        (h.prototype._isBuffer = !0),
        (h.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var e = 0; e < t; e += 2) E(this, e, e + 1);
          return this;
        }),
        (h.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var e = 0; e < t; e += 4) E(this, e, e + 3), E(this, e + 1, e + 2);
          return this;
        }),
        (h.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var e = 0; e < t; e += 8) E(this, e, e + 7), E(this, e + 1, e + 6), E(this, e + 2, e + 5), E(this, e + 3, e + 4);
          return this;
        }),
        (h.prototype.toString = function () {
          var t = this.length;
          return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : _.apply(this, arguments);
        }),
        (h.prototype.toLocaleString = h.prototype.toString),
        (h.prototype.equals = function (t) {
          if (!h.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === h.compare(this, t);
        }),
        (h.prototype.inspect = function () {
          var t = "",
            e = a;
          return (
            (t = this.toString("hex", 0, e)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > e && (t += " ... "),
            "<Buffer " + t + ">"
          );
        }),
        l && (h.prototype[l] = h.prototype.inspect),
        (h.prototype.compare = function (t, e, r, n, o) {
          if ((V(t, Uint8Array) && (t = h.from(t, t.offset, t.byteLength)), !h.isBuffer(t)))
            throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
          if (
            (void 0 === e && (e = 0),
            void 0 === r && (r = t ? t.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            e < 0 || r > t.length || n < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= o && e >= r) return 0;
          if (n >= o) return -1;
          if (e >= r) return 1;
          if (this === t) return 0;
          for (
            var i = (o >>>= 0) - (n >>>= 0),
              a = (r >>>= 0) - (e >>>= 0),
              s = Math.min(i, a),
              u = this.slice(n, o),
              c = t.slice(e, r),
              l = 0;
            l < s;
            ++l
          )
            if (u[l] !== c[l]) {
              (i = u[l]), (a = c[l]);
              break;
            }
          return i < a ? -1 : a < i ? 1 : 0;
        }),
        (h.prototype.includes = function (t, e, r) {
          return -1 !== this.indexOf(t, e, r);
        }),
        (h.prototype.indexOf = function (t, e, r) {
          return S(this, t, e, r, !0);
        }),
        (h.prototype.lastIndexOf = function (t, e, r) {
          return S(this, t, e, r, !1);
        }),
        (h.prototype.write = function (t, e, r, n) {
          if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
          else if (void 0 === r && "string" == typeof e) (n = e), (r = this.length), (e = 0);
          else {
            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            (e >>>= 0), isFinite(r) ? ((r >>>= 0), void 0 === n && (n = "utf8")) : ((n = r), (r = void 0));
          }
          var o = this.length - e;
          if (((void 0 === r || r > o) && (r = o), (t.length > 0 && (r < 0 || e < 0)) || e > this.length))
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var i = !1; ; )
            switch (n) {
              case "hex":
                return O(this, t, e, r);
              case "utf8":
              case "utf-8":
                return x(this, t, e, r);
              case "ascii":
              case "latin1":
              case "binary":
                return k(this, t, e, r);
              case "base64":
                return j(this, t, e, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return P(this, t, e, r);
              default:
                if (i) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (i = !0);
            }
        }),
        (h.prototype.toJSON = function () {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        });
      var I = 4096;
      function U(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
        return n;
      }
      function D(t, e, r) {
        var n = "";
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
        return n;
      }
      function F(t, e, r) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        for (var o = "", i = e; i < r; ++i) o += H[t[i]];
        return o;
      }
      function N(t, e, r) {
        for (var n = t.slice(e, r), o = "", i = 0; i < n.length - 1; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        return o;
      }
      function L(t, e, r) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
      }
      function M(t, e, r, n, o, i) {
        if (!h.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError("Index out of range");
      }
      function C(t, e, r, n, o, i) {
        if (r + n > t.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function B(t, e, r, n, o) {
        return (e = +e), (r >>>= 0), o || C(t, 0, r, 4), c.write(t, e, r, n, 23, 4), r + 4;
      }
      function q(t, e, r, n, o) {
        return (e = +e), (r >>>= 0), o || C(t, 0, r, 8), c.write(t, e, r, n, 52, 8), r + 8;
      }
      (h.prototype.slice = function (t, e) {
        var r = this.length;
        (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
          (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
          e < t && (e = t);
        var n = this.subarray(t, e);
        return Object.setPrototypeOf(n, h.prototype), n;
      }),
        (h.prototype.readUintLE = h.prototype.readUIntLE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || L(t, e, this.length);
            for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) n += this[t + i] * o;
            return n;
          }),
        (h.prototype.readUintBE = h.prototype.readUIntBE =
          function (t, e, r) {
            (t >>>= 0), (e >>>= 0), r || L(t, e, this.length);
            for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); ) n += this[t + --e] * o;
            return n;
          }),
        (h.prototype.readUint8 = h.prototype.readUInt8 =
          function (t, e) {
            return (t >>>= 0), e || L(t, 1, this.length), this[t];
          }),
        (h.prototype.readUint16LE = h.prototype.readUInt16LE =
          function (t, e) {
            return (t >>>= 0), e || L(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
        (h.prototype.readUint16BE = h.prototype.readUInt16BE =
          function (t, e) {
            return (t >>>= 0), e || L(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
        (h.prototype.readUint32LE = h.prototype.readUInt32LE =
          function (t, e) {
            return (t >>>= 0), e || L(t, 4, this.length), (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) + 16777216 * this[t + 3];
          }),
        (h.prototype.readUint32BE = h.prototype.readUInt32BE =
          function (t, e) {
            return (t >>>= 0), e || L(t, 4, this.length), 16777216 * this[t] + ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]);
          }),
        (h.prototype.readIntLE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || L(t, e, this.length);
          for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); ) n += this[t + i] * o;
          return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
        }),
        (h.prototype.readIntBE = function (t, e, r) {
          (t >>>= 0), (e >>>= 0), r || L(t, e, this.length);
          for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); ) i += this[t + --n] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
        }),
        (h.prototype.readInt8 = function (t, e) {
          return (t >>>= 0), e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
        }),
        (h.prototype.readInt16LE = function (t, e) {
          (t >>>= 0), e || L(t, 2, this.length);
          var r = this[t] | (this[t + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (h.prototype.readInt16BE = function (t, e) {
          (t >>>= 0), e || L(t, 2, this.length);
          var r = this[t + 1] | (this[t] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (h.prototype.readInt32LE = function (t, e) {
          return (t >>>= 0), e || L(t, 4, this.length), this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24);
        }),
        (h.prototype.readInt32BE = function (t, e) {
          return (t >>>= 0), e || L(t, 4, this.length), (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3];
        }),
        (h.prototype.readFloatLE = function (t, e) {
          return (t >>>= 0), e || L(t, 4, this.length), c.read(this, t, !0, 23, 4);
        }),
        (h.prototype.readFloatBE = function (t, e) {
          return (t >>>= 0), e || L(t, 4, this.length), c.read(this, t, !1, 23, 4);
        }),
        (h.prototype.readDoubleLE = function (t, e) {
          return (t >>>= 0), e || L(t, 8, this.length), c.read(this, t, !0, 52, 8);
        }),
        (h.prototype.readDoubleBE = function (t, e) {
          return (t >>>= 0), e || L(t, 8, this.length), c.read(this, t, !1, 52, 8);
        }),
        (h.prototype.writeUintLE = h.prototype.writeUIntLE =
          function (t, e, r, n) {
            ((t = +t), (e >>>= 0), (r >>>= 0), n) || M(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = 1,
              i = 0;
            for (this[e] = 255 & t; ++i < r && (o *= 256); ) this[e + i] = (t / o) & 255;
            return e + r;
          }),
        (h.prototype.writeUintBE = h.prototype.writeUIntBE =
          function (t, e, r, n) {
            ((t = +t), (e >>>= 0), (r >>>= 0), n) || M(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
            var o = r - 1,
              i = 1;
            for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); ) this[e + o] = (t / i) & 255;
            return e + r;
          }),
        (h.prototype.writeUint8 = h.prototype.writeUInt8 =
          function (t, e, r) {
            return (t = +t), (e >>>= 0), r || M(this, t, e, 1, 255, 0), (this[e] = 255 & t), e + 1;
          }),
        (h.prototype.writeUint16LE = h.prototype.writeUInt16LE =
          function (t, e, r) {
            return (t = +t), (e >>>= 0), r || M(this, t, e, 2, 65535, 0), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
          }),
        (h.prototype.writeUint16BE = h.prototype.writeUInt16BE =
          function (t, e, r) {
            return (t = +t), (e >>>= 0), r || M(this, t, e, 2, 65535, 0), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
          }),
        (h.prototype.writeUint32LE = h.prototype.writeUInt32LE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || M(this, t, e, 4, 4294967295, 0),
              (this[e + 3] = t >>> 24),
              (this[e + 2] = t >>> 16),
              (this[e + 1] = t >>> 8),
              (this[e] = 255 & t),
              e + 4
            );
          }),
        (h.prototype.writeUint32BE = h.prototype.writeUInt32BE =
          function (t, e, r) {
            return (
              (t = +t),
              (e >>>= 0),
              r || M(this, t, e, 4, 4294967295, 0),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
        (h.prototype.writeIntLE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            M(this, t, e, r, o - 1, -o);
          }
          var i = 0,
            a = 1,
            s = 0;
          for (this[e] = 255 & t; ++i < r && (a *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), (this[e + i] = (((t / a) >> 0) - s) & 255);
          return e + r;
        }),
        (h.prototype.writeIntBE = function (t, e, r, n) {
          if (((t = +t), (e >>>= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            M(this, t, e, r, o - 1, -o);
          }
          var i = r - 1,
            a = 1,
            s = 0;
          for (this[e + i] = 255 & t; --i >= 0 && (a *= 256); )
            t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), (this[e + i] = (((t / a) >> 0) - s) & 255);
          return e + r;
        }),
        (h.prototype.writeInt8 = function (t, e, r) {
          return (t = +t), (e >>>= 0), r || M(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), (this[e] = 255 & t), e + 1;
        }),
        (h.prototype.writeInt16LE = function (t, e, r) {
          return (t = +t), (e >>>= 0), r || M(this, t, e, 2, 32767, -32768), (this[e] = 255 & t), (this[e + 1] = t >>> 8), e + 2;
        }),
        (h.prototype.writeInt16BE = function (t, e, r) {
          return (t = +t), (e >>>= 0), r || M(this, t, e, 2, 32767, -32768), (this[e] = t >>> 8), (this[e + 1] = 255 & t), e + 2;
        }),
        (h.prototype.writeInt32LE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || M(this, t, e, 4, 2147483647, -2147483648),
            (this[e] = 255 & t),
            (this[e + 1] = t >>> 8),
            (this[e + 2] = t >>> 16),
            (this[e + 3] = t >>> 24),
            e + 4
          );
        }),
        (h.prototype.writeInt32BE = function (t, e, r) {
          return (
            (t = +t),
            (e >>>= 0),
            r || M(this, t, e, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            (this[e] = t >>> 24),
            (this[e + 1] = t >>> 16),
            (this[e + 2] = t >>> 8),
            (this[e + 3] = 255 & t),
            e + 4
          );
        }),
        (h.prototype.writeFloatLE = function (t, e, r) {
          return B(this, t, e, !0, r);
        }),
        (h.prototype.writeFloatBE = function (t, e, r) {
          return B(this, t, e, !1, r);
        }),
        (h.prototype.writeDoubleLE = function (t, e, r) {
          return q(this, t, e, !0, r);
        }),
        (h.prototype.writeDoubleBE = function (t, e, r) {
          return q(this, t, e, !1, r);
        }),
        (h.prototype.copy = function (t, e, r, n) {
          if (!h.isBuffer(t)) throw new TypeError("argument should be a Buffer");
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            e >= t.length && (e = t.length),
            e || (e = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (e < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
          var o = n - r;
          return (
            this === t && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(e, r, n)
              : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
            o
          );
        }),
        (h.prototype.fill = function (t, e, r, n) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof e ? ((n = e), (e = 0), (r = this.length)) : "string" == typeof r && ((n = r), (r = this.length)),
              void 0 !== n && "string" != typeof n)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !h.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
            if (1 === t.length) {
              var o = t.charCodeAt(0);
              (("utf8" === n && o < 128) || "latin1" === n) && (t = o);
            }
          } else "number" == typeof t ? (t &= 255) : "boolean" == typeof t && (t = Number(t));
          if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
          if (r <= e) return this;
          var i;
          if (((e >>>= 0), (r = void 0 === r ? this.length : r >>> 0), t || (t = 0), "number" == typeof t))
            for (i = e; i < r; ++i) this[i] = t;
          else {
            var a = h.isBuffer(t) ? t : h.from(t, n),
              s = a.length;
            if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
            for (i = 0; i < r - e; ++i) this[i + e] = a[i % s];
          }
          return this;
        });
      var $ = /[^+/0-9A-Za-z-_]/g;
      function W(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, o = null, i = [], a = 0; a < n; ++a) {
          if ((r = t.charCodeAt(a)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (a + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = 65536 + (((o - 55296) << 10) | (r - 56320));
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((e -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((e -= 4) < 0) break;
            i.push((r >> 18) | 240, ((r >> 12) & 63) | 128, ((r >> 6) & 63) | 128, (63 & r) | 128);
          }
        }
        return i;
      }
      function G(t) {
        return u.toByteArray(
          (function (t) {
            if ((t = (t = t.split("=")[0]).trim().replace($, "")).length < 2) return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function z(t, e, r, n) {
        for (var o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
        return o;
      }
      function V(t, e) {
        return t instanceof e || (null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name);
      }
      function K(t) {
        return t != t;
      }
      var H = (function () {
        for (var t = "0123456789abcdef", e = new Array(256), r = 0; r < 16; ++r)
          for (var n = 16 * r, o = 0; o < 16; ++o) e[n + o] = t[r] + t[o];
        return e;
      })();
    }),
    i.register("fkEzO", function (e, r) {
      var n, o;
      t(
        e.exports,
        "toByteArray",
        () => n,
        (t) => (n = t)
      ),
        t(
          e.exports,
          "fromByteArray",
          () => o,
          (t) => (o = t)
        ),
        (n = function (t) {
          var e,
            r,
            n = f(t),
            o = n[0],
            i = n[1],
            u = new s(
              (function (t, e, r) {
                return (3 * (e + r)) / 4 - r;
              })(0, o, i)
            ),
            c = 0,
            l = i > 0 ? o - 4 : o;
          for (r = 0; r < l; r += 4)
            (e = (a[t.charCodeAt(r)] << 18) | (a[t.charCodeAt(r + 1)] << 12) | (a[t.charCodeAt(r + 2)] << 6) | a[t.charCodeAt(r + 3)]),
              (u[c++] = (e >> 16) & 255),
              (u[c++] = (e >> 8) & 255),
              (u[c++] = 255 & e);
          2 === i && ((e = (a[t.charCodeAt(r)] << 2) | (a[t.charCodeAt(r + 1)] >> 4)), (u[c++] = 255 & e));
          1 === i &&
            ((e = (a[t.charCodeAt(r)] << 10) | (a[t.charCodeAt(r + 1)] << 4) | (a[t.charCodeAt(r + 2)] >> 2)),
            (u[c++] = (e >> 8) & 255),
            (u[c++] = 255 & e));
          return u;
        }),
        (o = function (t) {
          for (var e, r = t.length, n = r % 3, o = [], a = 16383, s = 0, u = r - n; s < u; s += a) o.push(p(t, s, s + a > u ? u : s + a));
          1 === n
            ? ((e = t[r - 1]), o.push(i[e >> 2] + i[(e << 4) & 63] + "=="))
            : 2 === n && ((e = (t[r - 2] << 8) + t[r - 1]), o.push(i[e >> 10] + i[(e >> 4) & 63] + i[(e << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var i = [],
          a = [],
          s = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          c = 0,
          l = u.length;
        c < l;
        ++c
      )
        (i[c] = u[c]), (a[u.charCodeAt(c)] = c);
      function f(t) {
        var e = t.length;
        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var r = t.indexOf("=");
        return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
      }
      function p(t, e, r) {
        for (var n, o, a = [], s = e; s < r; s += 3)
          (n = ((t[s] << 16) & 16711680) + ((t[s + 1] << 8) & 65280) + (255 & t[s + 2])),
            a.push(i[((o = n) >> 18) & 63] + i[(o >> 12) & 63] + i[(o >> 6) & 63] + i[63 & o]);
        return a.join("");
      }
      (a["-".charCodeAt(0)] = 62), (a["_".charCodeAt(0)] = 63);
    }),
    i.register("5cgNO", function (e, r) {
      /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var n, o;
      t(
        e.exports,
        "read",
        () => n,
        (t) => (n = t)
      ),
        t(
          e.exports,
          "write",
          () => o,
          (t) => (o = t)
        ),
        (n = function (t, e, r, n, o) {
          var i,
            a,
            s = 8 * o - n - 1,
            u = (1 << s) - 1,
            c = u >> 1,
            l = -7,
            f = r ? o - 1 : 0,
            p = r ? -1 : 1,
            h = t[e + f];
          for (f += p, i = h & ((1 << -l) - 1), h >>= -l, l += s; l > 0; i = 256 * i + t[e + f], f += p, l -= 8);
          for (a = i & ((1 << -l) - 1), i >>= -l, l += n; l > 0; a = 256 * a + t[e + f], f += p, l -= 8);
          if (0 === i) i = 1 - c;
          else {
            if (i === u) return a ? NaN : (1 / 0) * (h ? -1 : 1);
            (a += Math.pow(2, n)), (i -= c);
          }
          return (h ? -1 : 1) * a * Math.pow(2, i - n);
        }),
        (o = function (t, e, r, n, o, i) {
          var a,
            s,
            u,
            c = 8 * i - o - 1,
            l = (1 << c) - 1,
            f = l >> 1,
            p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            h = n ? 0 : i - 1,
            d = n ? 1 : -1,
            y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((s = isNaN(e) ? 1 : 0), (a = l))
                : ((a = Math.floor(Math.log(e) / Math.LN2)),
                  e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                  (e += a + f >= 1 ? p / u : p * Math.pow(2, 1 - f)) * u >= 2 && (a++, (u /= 2)),
                  a + f >= l
                    ? ((s = 0), (a = l))
                    : a + f >= 1
                    ? ((s = (e * u - 1) * Math.pow(2, o)), (a += f))
                    : ((s = e * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
            o >= 8;
            t[r + h] = 255 & s, h += d, s /= 256, o -= 8
          );
          for (a = (a << o) | s, c += o; c > 0; t[r + h] = 255 & a, h += d, a /= 256, c -= 8);
          t[r + h - d] |= 128 * y;
        });
    }),
    i.register("dgPuA", function (t, e) {
      var r = i("jhCkN");
      function n(t) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          n(t)
        );
      }
      var o,
        a,
        s = i("hO6BF").codes,
        u = s.ERR_AMBIGUOUS_ARGUMENT,
        c = s.ERR_INVALID_ARG_TYPE,
        l = s.ERR_INVALID_ARG_VALUE,
        f = s.ERR_INVALID_RETURN_VALUE,
        p = s.ERR_MISSING_ARGS,
        h = i("lKaLV"),
        d = i("dZjMf").inspect,
        y = i("dZjMf").types,
        g = y.isPromise,
        v = y.isRegExp,
        m = Object.assign ? Object.assign : i("bjsc7").assign,
        b = Object.is ? Object.is : i("lotpF");
      new Map();
      function w() {
        var t = i("94SG0");
        (o = t.isDeepEqual), (a = t.isDeepStrictEqual);
      }
      var _ = !1,
        E = (t.exports = x),
        S = {};
      function A(t) {
        if (t.message instanceof Error) throw t.message;
        throw new h(t);
      }
      function O(t, e, r, n) {
        if (!r) {
          var o = !1;
          if (0 === e) (o = !0), (n = "No value argument passed to `assert.ok()`");
          else if (n instanceof Error) throw n;
          var i = new h({ actual: r, expected: !0, message: n, operator: "==", stackStartFn: t });
          throw ((i.generatedMessage = o), i);
        }
      }
      function x() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        O.apply(void 0, [x, e.length].concat(e));
      }
      (E.fail = function t(e, n, o, i, a) {
        var s,
          u = arguments.length;
        if (0 === u) s = "Failed";
        else if (1 === u) (o = e), (e = void 0);
        else {
          if (!1 === _)
            (_ = !0),
              (r.emitWarning ? r.emitWarning : console.warn.bind(console))(
                "assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.",
                "DeprecationWarning",
                "DEP0094"
              );
          2 === u && (i = "!=");
        }
        if (o instanceof Error) throw o;
        var c = { actual: e, expected: n, operator: void 0 === i ? "fail" : i, stackStartFn: a || t };
        void 0 !== o && (c.message = o);
        var l = new h(c);
        throw (s && ((l.message = s), (l.generatedMessage = !0)), l);
      }),
        (E.AssertionError = h),
        (E.ok = x),
        (E.equal = function t(e, r, n) {
          if (arguments.length < 2) throw new p("actual", "expected");
          e != r && A({ actual: e, expected: r, message: n, operator: "==", stackStartFn: t });
        }),
        (E.notEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new p("actual", "expected");
          e == r && A({ actual: e, expected: r, message: n, operator: "!=", stackStartFn: t });
        }),
        (E.deepEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new p("actual", "expected");
          void 0 === o && w(), o(e, r) || A({ actual: e, expected: r, message: n, operator: "deepEqual", stackStartFn: t });
        }),
        (E.notDeepEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new p("actual", "expected");
          void 0 === o && w(), o(e, r) && A({ actual: e, expected: r, message: n, operator: "notDeepEqual", stackStartFn: t });
        }),
        (E.deepStrictEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new p("actual", "expected");
          void 0 === o && w(), a(e, r) || A({ actual: e, expected: r, message: n, operator: "deepStrictEqual", stackStartFn: t });
        }),
        (E.notDeepStrictEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new p("actual", "expected");
          void 0 === o && w();
          a(e, r) && A({ actual: e, expected: r, message: n, operator: "notDeepStrictEqual", stackStartFn: t });
        }),
        (E.strictEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new p("actual", "expected");
          b(e, r) || A({ actual: e, expected: r, message: n, operator: "strictEqual", stackStartFn: t });
        }),
        (E.notStrictEqual = function t(e, r, n) {
          if (arguments.length < 2) throw new p("actual", "expected");
          b(e, r) && A({ actual: e, expected: r, message: n, operator: "notStrictEqual", stackStartFn: t });
        });
      var k = function t(e, r, n) {
        var o = this;
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, t),
          r.forEach(function (t) {
            t in e && (void 0 !== n && "string" == typeof n[t] && v(e[t]) && e[t].test(n[t]) ? (o[t] = n[t]) : (o[t] = e[t]));
          });
      };
      function j(t, e, r, i) {
        if ("function" != typeof e) {
          if (v(e)) return e.test(t);
          if (2 === arguments.length) throw new c("expected", ["Function", "RegExp"], e);
          if ("object" !== n(t) || null === t) {
            var s = new h({ actual: t, expected: e, message: r, operator: "deepStrictEqual", stackStartFn: i });
            throw ((s.operator = i.name), s);
          }
          var u = Object.keys(e);
          if (e instanceof Error) u.push("name", "message");
          else if (0 === u.length) throw new l("error", e, "may not be an empty object");
          return (
            void 0 === o && w(),
            u.forEach(function (n) {
              ("string" == typeof t[n] && v(e[n]) && e[n].test(t[n])) ||
                (function (t, e, r, n, o, i) {
                  if (!(r in t) || !a(t[r], e[r])) {
                    if (!n) {
                      var s = new k(t, o),
                        u = new k(e, o, t),
                        c = new h({ actual: s, expected: u, operator: "deepStrictEqual", stackStartFn: i });
                      throw ((c.actual = t), (c.expected = e), (c.operator = i.name), c);
                    }
                    A({ actual: t, expected: e, message: n, operator: i.name, stackStartFn: i });
                  }
                })(t, e, n, r, u, i);
            }),
            !0
          );
        }
        return (void 0 !== e.prototype && t instanceof e) || (!Error.isPrototypeOf(e) && !0 === e.call({}, t));
      }
      function P(t) {
        if ("function" != typeof t) throw new c("fn", "Function", t);
        try {
          t();
        } catch (t) {
          return t;
        }
        return S;
      }
      function R(t) {
        return g(t) || (null !== t && "object" === n(t) && "function" == typeof t.then && "function" == typeof t.catch);
      }
      function T(t) {
        return Promise.resolve().then(function () {
          var e;
          if ("function" == typeof t) {
            if (!R((e = t()))) throw new f("instance of Promise", "promiseFn", e);
          } else {
            if (!R(t)) throw new c("promiseFn", ["Function", "Promise"], t);
            e = t;
          }
          return Promise.resolve()
            .then(function () {
              return e;
            })
            .then(function () {
              return S;
            })
            .catch(function (t) {
              return t;
            });
        });
      }
      function I(t, e, r, o) {
        if ("string" == typeof r) {
          if (4 === arguments.length) throw new c("error", ["Object", "Error", "Function", "RegExp"], r);
          if ("object" === n(e) && null !== e) {
            if (e.message === r) throw new u("error/message", 'The error message "'.concat(e.message, '" is identical to the message.'));
          } else if (e === r) throw new u("error/message", 'The error "'.concat(e, '" is identical to the message.'));
          (o = r), (r = void 0);
        } else if (null != r && "object" !== n(r) && "function" != typeof r)
          throw new c("error", ["Object", "Error", "Function", "RegExp"], r);
        if (e === S) {
          var i = "";
          r && r.name && (i += " (".concat(r.name, ")")), (i += o ? ": ".concat(o) : ".");
          var a = "rejects" === t.name ? "rejection" : "exception";
          A({ actual: void 0, expected: r, operator: t.name, message: "Missing expected ".concat(a).concat(i), stackStartFn: t });
        }
        if (r && !j(e, r, o, t)) throw e;
      }
      function U(t, e, r, n) {
        if (e !== S) {
          if (("string" == typeof r && ((n = r), (r = void 0)), !r || j(e, r))) {
            var o = n ? ": ".concat(n) : ".",
              i = "doesNotReject" === t.name ? "rejection" : "exception";
            A({
              actual: e,
              expected: r,
              operator: t.name,
              message: "Got unwanted ".concat(i).concat(o, "\n") + 'Actual message: "'.concat(e && e.message, '"'),
              stackStartFn: t
            });
          }
          throw e;
        }
      }
      function D() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        O.apply(void 0, [D, e.length].concat(e));
      }
      (E.throws = function t(e) {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
        I.apply(void 0, [t, P(e)].concat(n));
      }),
        (E.rejects = function t(e) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
          return T(e).then(function (e) {
            return I.apply(void 0, [t, e].concat(n));
          });
        }),
        (E.doesNotThrow = function t(e) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
          U.apply(void 0, [t, P(e)].concat(n));
        }),
        (E.doesNotReject = function t(e) {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
          return T(e).then(function (e) {
            return U.apply(void 0, [t, e].concat(n));
          });
        }),
        (E.ifError = function t(e) {
          if (null != e) {
            var r = "ifError got unwanted exception: ";
            "object" === n(e) && "string" == typeof e.message
              ? 0 === e.message.length && e.constructor
                ? (r += e.constructor.name)
                : (r += e.message)
              : (r += d(e));
            var o = new h({ actual: e, expected: null, operator: "ifError", message: r, stackStartFn: t }),
              i = e.stack;
            if ("string" == typeof i) {
              var a = i.split("\n");
              a.shift();
              for (var s = o.stack.split("\n"), u = 0; u < a.length; u++) {
                var c = s.indexOf(a[u]);
                if (-1 !== c) {
                  s = s.slice(0, c);
                  break;
                }
              }
              o.stack = "".concat(s.join("\n"), "\n").concat(a.join("\n"));
            }
            throw o;
          }
        }),
        (E.strict = m(D, E, {
          equal: E.strictEqual,
          deepEqual: E.deepStrictEqual,
          notEqual: E.notStrictEqual,
          notDeepEqual: E.notDeepStrictEqual
        })),
        (E.strict.strict = E.strict);
    }),
    i.register("jhCkN", function (t, e) {
      var r,
        n,
        o = (t.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === i || !r) && setTimeout) return (r = setTimeout), setTimeout(t, 0);
        try {
          return r(t, 0);
        } catch (e) {
          try {
            return r.call(null, t, 0);
          } catch (e) {
            return r.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          r = "function" == typeof setTimeout ? setTimeout : i;
        } catch (t) {
          r = i;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          n = a;
        }
      })();
      var u,
        c = [],
        l = !1,
        f = -1;
      function p() {
        l && u && ((l = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && h());
      }
      function h() {
        if (!l) {
          var t = s(p);
          l = !0;
          for (var e = c.length; e; ) {
            for (u = c, c = []; ++f < e; ) u && u[f].run();
            (f = -1), (e = c.length);
          }
          (u = null),
            (l = !1),
            (function (t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === a || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(t);
              try {
                return n(t);
              } catch (e) {
                try {
                  return n.call(null, t);
                } catch (e) {
                  return n.call(this, t);
                }
              }
            })(t);
        }
      }
      function d(t, e) {
        (this.fun = t), (this.array = e);
      }
      function y() {}
      (o.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        c.push(new d(t, e)), 1 !== c.length || l || s(h);
      }),
        (d.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (o.title = "browser"),
        (o.browser = !0),
        (o.env = {}),
        (o.argv = []),
        (o.version = ""),
        (o.versions = {}),
        (o.on = y),
        (o.addListener = y),
        (o.once = y),
        (o.off = y),
        (o.removeListener = y),
        (o.removeAllListeners = y),
        (o.emit = y),
        (o.prependListener = y),
        (o.prependOnceListener = y),
        (o.listeners = function (t) {
          return [];
        }),
        (o.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (o.cwd = function () {
          return "/";
        }),
        (o.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (o.umask = function () {
          return 0;
        });
    }),
    i.register("hO6BF", function (e, r) {
      var n;
      function o(t) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          o(t)
        );
      }
      function a(t, e) {
        return !e || ("object" !== o(e) && "function" != typeof e)
          ? (function (t) {
              if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return t;
            })(t)
          : e;
      }
      function s(t) {
        return (
          (s = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          s(t)
        );
      }
      function u(t, e) {
        return (
          (u =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          u(t, e)
        );
      }
      t(
        e.exports,
        "codes",
        () => n,
        (t) => (n = t)
      );
      var c,
        l,
        f = {};
      function p(t, e, r) {
        r || (r = Error);
        var n = (function (r) {
          function n(r, o, i) {
            var u;
            return (
              (function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
              })(this, n),
              (u = a(
                this,
                s(n).call(
                  this,
                  (function (t, r, n) {
                    return "string" == typeof e ? e : e(t, r, n);
                  })(r, o, i)
                )
              )),
              (u.code = t),
              u
            );
          }
          return (
            (function (t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
              (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && u(t, e);
            })(n, r),
            n
          );
        })(r);
        f[t] = n;
      }
      function h(t, e) {
        if (Array.isArray(t)) {
          var r = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            r > 2
              ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
              : 2 === r
              ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      p("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError),
        p(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, r) {
            var n, a, s, u;
            if (
              (void 0 === c && (c = i("dgPuA")),
              c("string" == typeof t, "'name' must be a string"),
              "string" == typeof e && ((a = "not "), e.substr(!s || s < 0 ? 0 : +s, a.length) === a)
                ? ((n = "must not be"), (e = e.replace(/^not /, "")))
                : (n = "must be"),
              (function (t, e, r) {
                return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
              })(t, " argument"))
            )
              u = "The ".concat(t, " ").concat(n, " ").concat(h(e, "type"));
            else {
              var l = (function (t, e, r) {
                return "number" != typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r);
              })(t, ".")
                ? "property"
                : "argument";
              u = 'The "'.concat(t, '" ').concat(l, " ").concat(n, " ").concat(h(e, "type"));
            }
            return (u += ". Received type ".concat(o(r)));
          },
          TypeError
        ),
        p(
          "ERR_INVALID_ARG_VALUE",
          function (t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
            void 0 === l && (l = i("dZjMf"));
            var n = l.inspect(e);
            return (
              n.length > 128 && (n = "".concat(n.slice(0, 128), "...")), "The argument '".concat(t, "' ").concat(r, ". Received ").concat(n)
            );
          },
          TypeError,
          RangeError
        ),
        p(
          "ERR_INVALID_RETURN_VALUE",
          function (t, e, r) {
            var n;
            return (
              (n = r && r.constructor && r.constructor.name ? "instance of ".concat(r.constructor.name) : "type ".concat(o(r))),
              "Expected ".concat(t, ' to be returned from the "').concat(e, '"') + " function but got ".concat(n, ".")
            );
          },
          TypeError
        ),
        p(
          "ERR_MISSING_ARGS",
          function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            void 0 === c && (c = i("dgPuA")), c(e.length > 0, "At least one arg needs to be specified");
            var n = "The ",
              o = e.length;
            switch (
              ((e = e.map(function (t) {
                return '"'.concat(t, '"');
              })),
              o)
            ) {
              case 1:
                n += "".concat(e[0], " argument");
                break;
              case 2:
                n += "".concat(e[0], " and ").concat(e[1], " arguments");
                break;
              default:
                (n += e.slice(0, o - 1).join(", ")), (n += ", and ".concat(e[o - 1], " arguments"));
            }
            return "".concat(n, " must be specified");
          },
          TypeError
        ),
        (n = f);
    }),
    i.register("dZjMf", function (t, e) {
      var r = i("jhCkN"),
        n =
          Object.getOwnPropertyDescriptors ||
          function (t) {
            for (var e = Object.keys(t), r = {}, n = 0; n < e.length; n++) r[e[n]] = Object.getOwnPropertyDescriptor(t, e[n]);
            return r;
          },
        o = /%[sdj%]/g;
      (t.exports.format = function (t) {
        if (!m(t)) {
          for (var e = [], r = 0; r < arguments.length; r++) e.push(u(arguments[r]));
          return e.join(" ");
        }
        r = 1;
        for (
          var n = arguments,
            i = n.length,
            a = String(t).replace(o, function (t) {
              if ("%%" === t) return "%";
              if (r >= i) return t;
              switch (t) {
                case "%s":
                  return String(n[r++]);
                case "%d":
                  return Number(n[r++]);
                case "%j":
                  try {
                    return JSON.stringify(n[r++]);
                  } catch (t) {
                    return "[Circular]";
                  }
                default:
                  return t;
              }
            }),
            s = n[r];
          r < i;
          s = n[++r]
        )
          g(s) || !_(s) ? (a += " " + s) : (a += " " + u(s));
        return a;
      }),
        (t.exports.deprecate = function (e, n) {
          if (void 0 !== r && !0 === r.noDeprecation) return e;
          if (void 0 === r)
            return function () {
              return t.exports.deprecate(e, n).apply(this, arguments);
            };
          var o = !1;
          return function () {
            if (!o) {
              if (r.throwDeprecation) throw new Error(n);
              r.traceDeprecation ? console.trace(n) : console.error(n), (o = !0);
            }
            return e.apply(this, arguments);
          };
        });
      var a = {},
        s = /^$/;
      function u(e, r) {
        var n = { seen: [], stylize: l };
        return (
          arguments.length >= 3 && (n.depth = arguments[2]),
          arguments.length >= 4 && (n.colors = arguments[3]),
          y(r) ? (n.showHidden = r) : r && t.exports._extend(n, r),
          b(n.showHidden) && (n.showHidden = !1),
          b(n.depth) && (n.depth = 2),
          b(n.colors) && (n.colors = !1),
          b(n.customInspect) && (n.customInspect = !0),
          n.colors && (n.stylize = c),
          f(n, e, n.depth)
        );
      }
      function c(t, e) {
        var r = u.styles[e];
        return r ? "[" + u.colors[r][0] + "m" + t + "[" + u.colors[r][1] + "m" : t;
      }
      function l(t, e) {
        return t;
      }
      function f(e, r, n) {
        if (e.customInspect && r && A(r.inspect) && r.inspect !== t.exports.inspect && (!r.constructor || r.constructor.prototype !== r)) {
          var o = r.inspect(n, e);
          return m(o) || (o = f(e, o, n)), o;
        }
        var i = (function (t, e) {
          if (b(e)) return t.stylize("undefined", "undefined");
          if (m(e)) {
            var r = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return t.stylize(r, "string");
          }
          if (v(e)) return t.stylize("" + e, "number");
          if (y(e)) return t.stylize("" + e, "boolean");
          if (g(e)) return t.stylize("null", "null");
        })(e, r);
        if (i) return i;
        var a = Object.keys(r),
          s = (function (t) {
            var e = {};
            return (
              t.forEach(function (t, r) {
                e[t] = !0;
              }),
              e
            );
          })(a);
        if ((e.showHidden && (a = Object.getOwnPropertyNames(r)), S(r) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)))
          return p(r);
        if (0 === a.length) {
          if (A(r)) {
            var u = r.name ? ": " + r.name : "";
            return e.stylize("[Function" + u + "]", "special");
          }
          if (w(r)) return e.stylize(RegExp.prototype.toString.call(r), "regexp");
          if (E(r)) return e.stylize(Date.prototype.toString.call(r), "date");
          if (S(r)) return p(r);
        }
        var c,
          l = "",
          _ = !1,
          O = ["{", "}"];
        (d(r) && ((_ = !0), (O = ["[", "]"])), A(r)) && (l = " [Function" + (r.name ? ": " + r.name : "") + "]");
        return (
          w(r) && (l = " " + RegExp.prototype.toString.call(r)),
          E(r) && (l = " " + Date.prototype.toUTCString.call(r)),
          S(r) && (l = " " + p(r)),
          0 !== a.length || (_ && 0 != r.length)
            ? n < 0
              ? w(r)
                ? e.stylize(RegExp.prototype.toString.call(r), "regexp")
                : e.stylize("[Object]", "special")
              : (e.seen.push(r),
                (c = _
                  ? (function (t, e, r, n, o) {
                      for (var i = [], a = 0, s = e.length; a < s; ++a) j(e, String(a)) ? i.push(h(t, e, r, n, String(a), !0)) : i.push("");
                      return (
                        o.forEach(function (o) {
                          o.match(/^\d+$/) || i.push(h(t, e, r, n, o, !0));
                        }),
                        i
                      );
                    })(e, r, n, s, a)
                  : a.map(function (t) {
                      return h(e, r, n, s, t, _);
                    })),
                e.seen.pop(),
                (function (t, e, r) {
                  var n = t.reduce(function (t, e) {
                    return e.indexOf("\n") >= 0 && 0, t + e.replace(/\u001b\[\d\d?m/g, "").length + 1;
                  }, 0);
                  return n > 60
                    ? r[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + r[1]
                    : r[0] + e + " " + t.join(", ") + " " + r[1];
                })(c, l, O))
            : O[0] + l + O[1]
        );
      }
      function p(t) {
        return "[" + Error.prototype.toString.call(t) + "]";
      }
      function h(t, e, r, n, o, i) {
        var a, s, u;
        if (
          ((u = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }).get
            ? (s = u.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special"))
            : u.set && (s = t.stylize("[Setter]", "special")),
          j(n, o) || (a = "[" + o + "]"),
          s ||
            (t.seen.indexOf(u.value) < 0
              ? (s = g(r) ? f(t, u.value, null) : f(t, u.value, r - 1)).indexOf("\n") > -1 &&
                (s = i
                  ? s
                      .split("\n")
                      .map(function (t) {
                        return "  " + t;
                      })
                      .join("\n")
                      .slice(2)
                  : "\n" +
                    s
                      .split("\n")
                      .map(function (t) {
                        return "   " + t;
                      })
                      .join("\n"))
              : (s = t.stylize("[Circular]", "special"))),
          b(a))
        ) {
          if (i && o.match(/^\d+$/)) return s;
          (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((a = a.slice(1, -1)), (a = t.stylize(a, "name")))
            : ((a = a
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'")),
              (a = t.stylize(a, "string")));
        }
        return a + ": " + s;
      }
      function d(t) {
        return Array.isArray(t);
      }
      function y(t) {
        return "boolean" == typeof t;
      }
      function g(t) {
        return null === t;
      }
      function v(t) {
        return "number" == typeof t;
      }
      function m(t) {
        return "string" == typeof t;
      }
      function b(t) {
        return void 0 === t;
      }
      function w(t) {
        return _(t) && "[object RegExp]" === O(t);
      }
      function _(t) {
        return "object" == typeof t && null !== t;
      }
      function E(t) {
        return _(t) && "[object Date]" === O(t);
      }
      function S(t) {
        return _(t) && ("[object Error]" === O(t) || t instanceof Error);
      }
      function A(t) {
        return "function" == typeof t;
      }
      function O(t) {
        return Object.prototype.toString.call(t);
      }
      function x(t) {
        return t < 10 ? "0" + t.toString(10) : t.toString(10);
      }
      (t.exports.debuglog = function (e) {
        if (((e = e.toUpperCase()), !a[e]))
          if (s.test(e)) {
            var n = r.pid;
            a[e] = function () {
              var r = t.exports.format.apply(t.exports, arguments);
              console.error("%s %d: %s", e, n, r);
            };
          } else a[e] = function () {};
        return a[e];
      }),
        (t.exports.inspect = u),
        (u.colors = {
          bold: [1, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          white: [37, 39],
          grey: [90, 39],
          black: [30, 39],
          blue: [34, 39],
          cyan: [36, 39],
          green: [32, 39],
          magenta: [35, 39],
          red: [31, 39],
          yellow: [33, 39]
        }),
        (u.styles = {
          special: "cyan",
          number: "yellow",
          boolean: "yellow",
          undefined: "grey",
          null: "bold",
          string: "green",
          date: "magenta",
          regexp: "red"
        }),
        (t.exports.types = i("ewu7i")),
        (t.exports.isArray = d),
        (t.exports.isBoolean = y),
        (t.exports.isNull = g),
        (t.exports.isNullOrUndefined = function (t) {
          return null == t;
        }),
        (t.exports.isNumber = v),
        (t.exports.isString = m),
        (t.exports.isSymbol = function (t) {
          return "symbol" == typeof t;
        }),
        (t.exports.isUndefined = b),
        (t.exports.isRegExp = w),
        (t.exports.types.isRegExp = w),
        (t.exports.isObject = _),
        (t.exports.isDate = E),
        (t.exports.types.isDate = E),
        (t.exports.isError = S),
        (t.exports.types.isNativeError = S),
        (t.exports.isFunction = A),
        (t.exports.isPrimitive = function (t) {
          return (
            null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == typeof t || void 0 === t
          );
        }),
        (t.exports.isBuffer = i("8AdCH"));
      var k = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      function j(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }
      (t.exports.log = function () {
        var e, r;
        console.log(
          "%s - %s",
          ((e = new Date()),
          (r = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":")),
          [e.getDate(), k[e.getMonth()], r].join(" ")),
          t.exports.format.apply(t.exports, arguments)
        );
      }),
        (t.exports.inherits = i("7wfog")),
        (t.exports._extend = function (t, e) {
          if (!e || !_(e)) return t;
          for (var r = Object.keys(e), n = r.length; n--; ) t[r[n]] = e[r[n]];
          return t;
        });
      var P = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
      function R(t, e) {
        if (!t) {
          var r = new Error("Promise was rejected with a falsy value");
          (r.reason = t), (t = r);
        }
        return e(t);
      }
      (t.exports.promisify = function (t) {
        if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
        if (P && t[P]) {
          var e;
          if ("function" != typeof (e = t[P])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
          return Object.defineProperty(e, P, { value: e, enumerable: !1, writable: !1, configurable: !0 }), e;
        }
        function e() {
          for (
            var e,
              r,
              n = new Promise(function (t, n) {
                (e = t), (r = n);
              }),
              o = [],
              i = 0;
            i < arguments.length;
            i++
          )
            o.push(arguments[i]);
          o.push(function (t, n) {
            t ? r(t) : e(n);
          });
          try {
            t.apply(this, o);
          } catch (t) {
            r(t);
          }
          return n;
        }
        return (
          Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
          P && Object.defineProperty(e, P, { value: e, enumerable: !1, writable: !1, configurable: !0 }),
          Object.defineProperties(e, n(t))
        );
      }),
        (t.exports.promisify.custom = P),
        (t.exports.callbackify = function (t) {
          if ("function" != typeof t) throw new TypeError('The "original" argument must be of type Function');
          function e() {
            for (var e = [], n = 0; n < arguments.length; n++) e.push(arguments[n]);
            var o = e.pop();
            if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
            var i = this,
              a = function () {
                return o.apply(i, arguments);
              };
            t.apply(this, e).then(
              function (t) {
                r.nextTick(a.bind(null, null, t));
              },
              function (t) {
                r.nextTick(R.bind(null, t, a));
              }
            );
          }
          return Object.setPrototypeOf(e, Object.getPrototypeOf(t)), Object.defineProperties(e, n(t)), e;
        });
    }),
    i.register("ewu7i", function (t, e) {
      "use strict";
      var r = i("18HAr"),
        n = i("iemm7"),
        o = i("1DiBc"),
        a = i("W3mms");
      function s(t) {
        return t.call.bind(t);
      }
      var u = "undefined" != typeof BigInt,
        c = "undefined" != typeof Symbol,
        l = s(Object.prototype.toString),
        f = s(Number.prototype.valueOf),
        p = s(String.prototype.valueOf),
        h = s(Boolean.prototype.valueOf);
      if (u) var d = s(BigInt.prototype.valueOf);
      if (c) var y = s(Symbol.prototype.valueOf);
      function g(t, e) {
        if ("object" != typeof t) return !1;
        try {
          return e(t), !0;
        } catch (t) {
          return !1;
        }
      }
      function v(t) {
        return "[object Map]" === l(t);
      }
      function m(t) {
        return "[object Set]" === l(t);
      }
      function b(t) {
        return "[object WeakMap]" === l(t);
      }
      function w(t) {
        return "[object WeakSet]" === l(t);
      }
      function _(t) {
        return "[object ArrayBuffer]" === l(t);
      }
      function E(t) {
        return "undefined" != typeof ArrayBuffer && (_.working ? _(t) : t instanceof ArrayBuffer);
      }
      function S(t) {
        return "[object DataView]" === l(t);
      }
      function A(t) {
        return "undefined" != typeof DataView && (S.working ? S(t) : t instanceof DataView);
      }
      (t.exports.isArgumentsObject = r),
        (t.exports.isGeneratorFunction = n),
        (t.exports.isTypedArray = a),
        (t.exports.isPromise = function (t) {
          return (
            ("undefined" != typeof Promise && t instanceof Promise) ||
            (null !== t && "object" == typeof t && "function" == typeof t.then && "function" == typeof t.catch)
          );
        }),
        (t.exports.isArrayBufferView = function (t) {
          return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : a(t) || A(t);
        }),
        (t.exports.isUint8Array = function (t) {
          return "Uint8Array" === o(t);
        }),
        (t.exports.isUint8ClampedArray = function (t) {
          return "Uint8ClampedArray" === o(t);
        }),
        (t.exports.isUint16Array = function (t) {
          return "Uint16Array" === o(t);
        }),
        (t.exports.isUint32Array = function (t) {
          return "Uint32Array" === o(t);
        }),
        (t.exports.isInt8Array = function (t) {
          return "Int8Array" === o(t);
        }),
        (t.exports.isInt16Array = function (t) {
          return "Int16Array" === o(t);
        }),
        (t.exports.isInt32Array = function (t) {
          return "Int32Array" === o(t);
        }),
        (t.exports.isFloat32Array = function (t) {
          return "Float32Array" === o(t);
        }),
        (t.exports.isFloat64Array = function (t) {
          return "Float64Array" === o(t);
        }),
        (t.exports.isBigInt64Array = function (t) {
          return "BigInt64Array" === o(t);
        }),
        (t.exports.isBigUint64Array = function (t) {
          return "BigUint64Array" === o(t);
        }),
        (v.working = "undefined" != typeof Map && v(new Map())),
        (t.exports.isMap = function (t) {
          return "undefined" != typeof Map && (v.working ? v(t) : t instanceof Map);
        }),
        (m.working = "undefined" != typeof Set && m(new Set())),
        (t.exports.isSet = function (t) {
          return "undefined" != typeof Set && (m.working ? m(t) : t instanceof Set);
        }),
        (b.working = "undefined" != typeof WeakMap && b(new WeakMap())),
        (t.exports.isWeakMap = function (t) {
          return "undefined" != typeof WeakMap && (b.working ? b(t) : t instanceof WeakMap);
        }),
        (w.working = "undefined" != typeof WeakSet && w(new WeakSet())),
        (t.exports.isWeakSet = function (t) {
          return w(t);
        }),
        (_.working = "undefined" != typeof ArrayBuffer && _(new ArrayBuffer())),
        (t.exports.isArrayBuffer = E),
        (S.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && S(new DataView(new ArrayBuffer(1), 0, 1))),
        (t.exports.isDataView = A);
      var O = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;
      function x(t) {
        return "[object SharedArrayBuffer]" === l(t);
      }
      function k(t) {
        return void 0 !== O && (void 0 === x.working && (x.working = x(new O())), x.working ? x(t) : t instanceof O);
      }
      function j(t) {
        return g(t, f);
      }
      function P(t) {
        return g(t, p);
      }
      function R(t) {
        return g(t, h);
      }
      function T(t) {
        return u && g(t, d);
      }
      function I(t) {
        return c && g(t, y);
      }
      (t.exports.isSharedArrayBuffer = k),
        (t.exports.isAsyncFunction = function (t) {
          return "[object AsyncFunction]" === l(t);
        }),
        (t.exports.isMapIterator = function (t) {
          return "[object Map Iterator]" === l(t);
        }),
        (t.exports.isSetIterator = function (t) {
          return "[object Set Iterator]" === l(t);
        }),
        (t.exports.isGeneratorObject = function (t) {
          return "[object Generator]" === l(t);
        }),
        (t.exports.isWebAssemblyCompiledModule = function (t) {
          return "[object WebAssembly.Module]" === l(t);
        }),
        (t.exports.isNumberObject = j),
        (t.exports.isStringObject = P),
        (t.exports.isBooleanObject = R),
        (t.exports.isBigIntObject = T),
        (t.exports.isSymbolObject = I),
        (t.exports.isBoxedPrimitive = function (t) {
          return j(t) || P(t) || R(t) || T(t) || I(t);
        }),
        (t.exports.isAnyArrayBuffer = function (t) {
          return "undefined" != typeof Uint8Array && (E(t) || k(t));
        }),
        ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function (e) {
          Object.defineProperty(t.exports, e, {
            enumerable: !1,
            value: function () {
              throw new Error(e + " is not supported in userland");
            }
          });
        });
    }),
    i.register("18HAr", function (t, e) {
      "use strict";
      var r = i("7yDWF")(),
        n = i("7UJFt")("Object.prototype.toString"),
        o = function (t) {
          return !(r && t && "object" == typeof t && Symbol.toStringTag in t) && "[object Arguments]" === n(t);
        },
        a = function (t) {
          return (
            !!o(t) ||
            (null !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              t.length >= 0 &&
              "[object Array]" !== n(t) &&
              "[object Function]" === n(t.callee))
          );
        },
        s = (function () {
          return o(arguments);
        })();
      (o.isLegacyArguments = a), (t.exports = s ? o : a);
    }),
    i.register("7yDWF", function (t, e) {
      "use strict";
      var r = i("2LDj5");
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    }),
    i.register("2LDj5", function (t, e) {
      "use strict";
      t.exports = function () {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {},
          e = Symbol("test"),
          r = Object(e);
        if ("string" == typeof e) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (e in ((t[e] = 42), t)) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (1 !== n.length || n[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    }),
    i.register("7UJFt", function (t, e) {
      "use strict";
      var r = i("ld0Ko"),
        n = i("3RhkR"),
        o = n(r("String.prototype.indexOf"));
      t.exports = function (t, e) {
        var i = r(t, !!e);
        return "function" == typeof i && o(t, ".prototype.") > -1 ? n(i) : i;
      };
    }),
    i.register("ld0Ko", function (t, e) {
      "use strict";
      var r,
        n = SyntaxError,
        o = Function,
        a = TypeError,
        s = function (t) {
          try {
            return o('"use strict"; return (' + t + ").constructor;")();
          } catch (t) {}
        },
        u = Object.getOwnPropertyDescriptor;
      if (u)
        try {
          u({}, "");
        } catch (t) {
          u = null;
        }
      var c = function () {
          throw new a();
        },
        l = u
          ? (function () {
              try {
                return c;
              } catch (t) {
                try {
                  return u(arguments, "callee").get;
                } catch (t) {
                  return c;
                }
              }
            })()
          : c,
        f = i("1FQi0")(),
        p =
          Object.getPrototypeOf ||
          function (t) {
            return t.__proto__;
          },
        h = {},
        d = "undefined" == typeof Uint8Array ? r : p(Uint8Array),
        y = {
          "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": h,
          "%AsyncGenerator%": h,
          "%AsyncGeneratorFunction%": h,
          "%AsyncIteratorPrototype%": h,
          "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
          "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
          "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": h,
          "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : r,
          "%JSON%": "object" == typeof JSON ? JSON : r,
          "%Map%": "undefined" == typeof Map ? r : Map,
          "%MapIteratorPrototype%": "undefined" != typeof Map && f ? p(new Map()[Symbol.iterator]()) : r,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? r : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? r : Set,
          "%SetIteratorPrototype%": "undefined" != typeof Set && f ? p(new Set()[Symbol.iterator]()) : r,
          "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": f ? p(""[Symbol.iterator]()) : r,
          "%Symbol%": f ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": l,
          "%TypedArray%": d,
          "%TypeError%": a,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
          "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
        },
        g = function t(e) {
          var r;
          if ("%AsyncFunction%" === e) r = s("async function () {}");
          else if ("%GeneratorFunction%" === e) r = s("function* () {}");
          else if ("%AsyncGeneratorFunction%" === e) r = s("async function* () {}");
          else if ("%AsyncGenerator%" === e) {
            var n = t("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
          } else if ("%AsyncIteratorPrototype%" === e) {
            var o = t("%AsyncGenerator%");
            o && (r = p(o.prototype));
          }
          return (y[e] = r), r;
        },
        v = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        m = i("lyveh"),
        b = i("4cpoY"),
        w = m.call(Function.call, Array.prototype.concat),
        _ = m.call(Function.apply, Array.prototype.splice),
        E = m.call(Function.call, String.prototype.replace),
        S = m.call(Function.call, String.prototype.slice),
        A = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        O = /\\(\\)?/g,
        x = function (t, e) {
          var r,
            o = t;
          if ((b(v, o) && (o = "%" + (r = v[o])[0] + "%"), b(y, o))) {
            var i = y[o];
            if ((i === h && (i = g(o)), void 0 === i && !e))
              throw new a("intrinsic " + t + " exists, but is not available. Please file an issue!");
            return { alias: r, name: o, value: i };
          }
          throw new n("intrinsic " + t + " does not exist!");
        };
      t.exports = function (t, e) {
        if ("string" != typeof t || 0 === t.length) throw new a("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof e) throw new a('"allowMissing" argument must be a boolean');
        var r = (function (t) {
            var e = S(t, 0, 1),
              r = S(t, -1);
            if ("%" === e && "%" !== r) throw new n("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r && "%" !== e) throw new n("invalid intrinsic syntax, expected opening `%`");
            var o = [];
            return (
              E(t, A, function (t, e, r, n) {
                o[o.length] = r ? E(n, O, "$1") : e || t;
              }),
              o
            );
          })(t),
          o = r.length > 0 ? r[0] : "",
          i = x("%" + o + "%", e),
          s = i.name,
          c = i.value,
          l = !1,
          f = i.alias;
        f && ((o = f[0]), _(r, w([0, 1], f)));
        for (var p = 1, h = !0; p < r.length; p += 1) {
          var d = r[p],
            g = S(d, 0, 1),
            v = S(d, -1);
          if (('"' === g || "'" === g || "`" === g || '"' === v || "'" === v || "`" === v) && g !== v)
            throw new n("property names with quotes must have matching quotes");
          if ((("constructor" !== d && h) || (l = !0), b(y, (s = "%" + (o += "." + d) + "%")))) c = y[s];
          else if (null != c) {
            if (!(d in c)) {
              if (!e) throw new a("base intrinsic for " + t + " exists, but the property is not available.");
              return;
            }
            if (u && p + 1 >= r.length) {
              var m = u(c, d);
              c = (h = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : c[d];
            } else (h = b(c, d)), (c = c[d]);
            h && !l && (y[s] = c);
          }
        }
        return c;
      };
    }),
    i.register("1FQi0", function (t, e) {
      "use strict";
      var n = r.Symbol,
        o = i("isK9V");
      t.exports = function () {
        return (
          "function" == typeof n && "function" == typeof Symbol && "symbol" == typeof n("foo") && "symbol" == typeof Symbol("bar") && o()
        );
      };
    }),
    i.register("isK9V", function (t, e) {
      "use strict";
      t.exports = function () {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {},
          e = Symbol("test"),
          r = Object(e);
        if ("string" == typeof e) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (e in ((t[e] = 42), t)) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (1 !== n.length || n[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    }),
    i.register("lyveh", function (t, e) {
      "use strict";
      var r = i("6hQpR");
      t.exports = Function.prototype.bind || r;
    }),
    i.register("6hQpR", function (t, e) {
      "use strict";
      var r = Array.prototype.slice,
        n = Object.prototype.toString;
      t.exports = function (t) {
        var e = this;
        if ("function" != typeof e || "[object Function]" !== n.call(e))
          throw new TypeError("Function.prototype.bind called on incompatible " + e);
        for (var o, i = r.call(arguments, 1), a = Math.max(0, e.length - i.length), s = [], u = 0; u < a; u++) s.push("$" + u);
        if (
          ((o = Function(
            "binder",
            "return function (" + s.join(",") + "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof o) {
              var n = e.apply(this, i.concat(r.call(arguments)));
              return Object(n) === n ? n : this;
            }
            return e.apply(t, i.concat(r.call(arguments)));
          })),
          e.prototype)
        ) {
          var c = function () {};
          (c.prototype = e.prototype), (o.prototype = new c()), (c.prototype = null);
        }
        return o;
      };
    }),
    i.register("4cpoY", function (t, e) {
      "use strict";
      var r = i("lyveh");
      t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
    }),
    i.register("3RhkR", function (t, e) {
      "use strict";
      var r = i("lyveh"),
        n = i("ld0Ko"),
        o = n("%Function.prototype.apply%"),
        a = n("%Function.prototype.call%"),
        s = n("%Reflect.apply%", !0) || r.call(a, o),
        u = n("%Object.getOwnPropertyDescriptor%", !0),
        c = n("%Object.defineProperty%", !0),
        l = n("%Math.max%");
      if (c)
        try {
          c({}, "a", { value: 1 });
        } catch (t) {
          c = null;
        }
      t.exports = function (t) {
        var e = s(r, a, arguments);
        u && c && u(e, "length").configurable && c(e, "length", { value: 1 + l(0, t.length - (arguments.length - 1)) });
        return e;
      };
      var f = function () {
        return s(r, o, arguments);
      };
      c ? c(t.exports, "apply", { value: f }) : (t.exports.apply = f);
    }),
    i.register("iemm7", function (t, e) {
      "use strict";
      var r,
        n = Object.prototype.toString,
        o = Function.prototype.toString,
        a = /^\s*(?:function)?\*/,
        s = i("7yDWF")(),
        u = Object.getPrototypeOf;
      t.exports = function (t) {
        if ("function" != typeof t) return !1;
        if (a.test(o.call(t))) return !0;
        if (!s) return "[object GeneratorFunction]" === n.call(t);
        if (!u) return !1;
        if (void 0 === r) {
          var e = (function () {
            if (!s) return !1;
            try {
              return Function("return function*() {}")();
            } catch (t) {}
          })();
          r = !!e && u(e);
        }
        return u(t) === r;
      };
    }),
    i.register("1DiBc", function (t, e) {
      "use strict";
      var n = i("b8ADz"),
        o = i("jecPz"),
        a = i("7UJFt"),
        s = i("5vkwL"),
        u = a("Object.prototype.toString"),
        c = i("7yDWF")(),
        l = "undefined" == typeof globalThis ? r : globalThis,
        f = o(),
        p = a("String.prototype.slice"),
        h = {},
        d = Object.getPrototypeOf;
      c &&
        s &&
        d &&
        n(f, function (t) {
          if ("function" == typeof l[t]) {
            var e = new l[t]();
            if (Symbol.toStringTag in e) {
              var r = d(e),
                n = s(r, Symbol.toStringTag);
              if (!n) {
                var o = d(r);
                n = s(o, Symbol.toStringTag);
              }
              h[t] = n.get;
            }
          }
        });
      var y = i("W3mms");
      t.exports = function (t) {
        return (
          !!y(t) &&
          (c && Symbol.toStringTag in t
            ? (function (t) {
                var e = !1;
                return (
                  n(h, function (r, n) {
                    if (!e)
                      try {
                        var o = r.call(t);
                        o === n && (e = o);
                      } catch (t) {}
                  }),
                  e
                );
              })(t)
            : p(u(t), 8, -1))
        );
      };
    }),
    i.register("b8ADz", function (t, e) {
      "use strict";
      var r = i("dIf33"),
        n = Object.prototype.toString,
        o = Object.prototype.hasOwnProperty;
      t.exports = function (t, e, i) {
        if (!r(e)) throw new TypeError("iterator must be a function");
        var a;
        arguments.length >= 3 && (a = i),
          "[object Array]" === n.call(t)
            ? (function (t, e, r) {
                for (var n = 0, i = t.length; n < i; n++) o.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
              })(t, e, a)
            : "string" == typeof t
            ? (function (t, e, r) {
                for (var n = 0, o = t.length; n < o; n++) null == r ? e(t.charAt(n), n, t) : e.call(r, t.charAt(n), n, t);
              })(t, e, a)
            : (function (t, e, r) {
                for (var n in t) o.call(t, n) && (null == r ? e(t[n], n, t) : e.call(r, t[n], n, t));
              })(t, e, a);
      };
    }),
    i.register("dIf33", function (t, e) {
      "use strict";
      var r,
        n,
        o = Function.prototype.toString,
        i = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof i && "function" == typeof Object.defineProperty)
        try {
          (r = Object.defineProperty({}, "length", {
            get: function () {
              throw n;
            }
          })),
            (n = {}),
            i(
              function () {
                throw 42;
              },
              null,
              r
            );
        } catch (t) {
          t !== n && (i = null);
        }
      else i = null;
      var a = /^\s*class\b/,
        s = function (t) {
          try {
            var e = o.call(t);
            return a.test(e);
          } catch (t) {
            return !1;
          }
        },
        u = function (t) {
          try {
            return !s(t) && (o.call(t), !0);
          } catch (t) {
            return !1;
          }
        },
        c = Object.prototype.toString,
        l = "function" == typeof Symbol && !!Symbol.toStringTag,
        f = !(0 in [,]),
        p = function () {
          return !1;
        };
      if ("object" == typeof document) {
        var h = document.all;
        c.call(h) === c.call(document.all) &&
          (p = function (t) {
            if ((f || !t) && (void 0 === t || "object" == typeof t))
              try {
                var e = c.call(t);
                return (
                  ("[object HTMLAllCollection]" === e ||
                    "[object HTML document.all class]" === e ||
                    "[object HTMLCollection]" === e ||
                    "[object Object]" === e) &&
                  null == t("")
                );
              } catch (t) {}
            return !1;
          });
      }
      t.exports = i
        ? function (t) {
            if (p(t)) return !0;
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            try {
              i(t, null, r);
            } catch (t) {
              if (t !== n) return !1;
            }
            return !s(t) && u(t);
          }
        : function (t) {
            if (p(t)) return !0;
            if (!t) return !1;
            if ("function" != typeof t && "object" != typeof t) return !1;
            if (l) return u(t);
            if (s(t)) return !1;
            var e = c.call(t);
            return !("[object Function]" !== e && "[object GeneratorFunction]" !== e && !/^\[object HTML/.test(e)) && u(t);
          };
    }),
    i.register("jecPz", function (t, e) {
      "use strict";
      var n = [
          "BigInt64Array",
          "BigUint64Array",
          "Float32Array",
          "Float64Array",
          "Int16Array",
          "Int32Array",
          "Int8Array",
          "Uint16Array",
          "Uint32Array",
          "Uint8Array",
          "Uint8ClampedArray"
        ],
        o = "undefined" == typeof globalThis ? r : globalThis;
      t.exports = function () {
        for (var t = [], e = 0; e < n.length; e++) "function" == typeof o[n[e]] && (t[t.length] = n[e]);
        return t;
      };
    }),
    i.register("5vkwL", function (t, e) {
      "use strict";
      var r = i("jXIV6")("%Object.getOwnPropertyDescriptor%", !0);
      if (r)
        try {
          r([], "length");
        } catch (t) {
          r = null;
        }
      t.exports = r;
    }),
    i.register("jXIV6", function (t, e) {
      "use strict";
      var r,
        n = SyntaxError,
        o = Function,
        a = TypeError,
        s = function (t) {
          try {
            return o('"use strict"; return (' + t + ").constructor;")();
          } catch (t) {}
        },
        u = Object.getOwnPropertyDescriptor;
      if (u)
        try {
          u({}, "");
        } catch (t) {
          u = null;
        }
      var c = function () {
          throw new a();
        },
        l = u
          ? (function () {
              try {
                return c;
              } catch (t) {
                try {
                  return u(arguments, "callee").get;
                } catch (t) {
                  return c;
                }
              }
            })()
          : c,
        f = i("fEp0l")(),
        p =
          Object.getPrototypeOf ||
          function (t) {
            return t.__proto__;
          },
        h = {},
        d = "undefined" == typeof Uint8Array ? r : p(Uint8Array),
        y = {
          "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
          "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : r,
          "%AsyncFromSyncIteratorPrototype%": r,
          "%AsyncFunction%": h,
          "%AsyncGenerator%": h,
          "%AsyncGeneratorFunction%": h,
          "%AsyncIteratorPrototype%": h,
          "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
          "%BigInt64Array%": "undefined" == typeof BigInt64Array ? r : BigInt64Array,
          "%BigUint64Array%": "undefined" == typeof BigUint64Array ? r : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? r : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
          "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
          "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
          "%Function%": o,
          "%GeneratorFunction%": h,
          "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : r,
          "%JSON%": "object" == typeof JSON ? JSON : r,
          "%Map%": "undefined" == typeof Map ? r : Map,
          "%MapIteratorPrototype%": "undefined" != typeof Map && f ? p(new Map()[Symbol.iterator]()) : r,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? r : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? r : Set,
          "%SetIteratorPrototype%": "undefined" != typeof Set && f ? p(new Set()[Symbol.iterator]()) : r,
          "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": f ? p(""[Symbol.iterator]()) : r,
          "%Symbol%": f ? Symbol : r,
          "%SyntaxError%": n,
          "%ThrowTypeError%": l,
          "%TypedArray%": d,
          "%TypeError%": a,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
          "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
        };
      try {
        null.error;
      } catch (t) {
        var g = p(p(t));
        y["%Error.prototype%"] = g;
      }
      var v = function t(e) {
          var r;
          if ("%AsyncFunction%" === e) r = s("async function () {}");
          else if ("%GeneratorFunction%" === e) r = s("function* () {}");
          else if ("%AsyncGeneratorFunction%" === e) r = s("async function* () {}");
          else if ("%AsyncGenerator%" === e) {
            var n = t("%AsyncGeneratorFunction%");
            n && (r = n.prototype);
          } else if ("%AsyncIteratorPrototype%" === e) {
            var o = t("%AsyncGenerator%");
            o && (r = p(o.prototype));
          }
          return (y[e] = r), r;
        },
        m = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"]
        },
        b = i("lyveh"),
        w = i("4cpoY"),
        _ = b.call(Function.call, Array.prototype.concat),
        E = b.call(Function.apply, Array.prototype.splice),
        S = b.call(Function.call, String.prototype.replace),
        A = b.call(Function.call, String.prototype.slice),
        O = b.call(Function.call, RegExp.prototype.exec),
        x = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        k = /\\(\\)?/g,
        j = function (t, e) {
          var r,
            o = t;
          if ((w(m, o) && (o = "%" + (r = m[o])[0] + "%"), w(y, o))) {
            var i = y[o];
            if ((i === h && (i = v(o)), void 0 === i && !e))
              throw new a("intrinsic " + t + " exists, but is not available. Please file an issue!");
            return { alias: r, name: o, value: i };
          }
          throw new n("intrinsic " + t + " does not exist!");
        };
      t.exports = function (t, e) {
        if ("string" != typeof t || 0 === t.length) throw new a("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof e) throw new a('"allowMissing" argument must be a boolean');
        if (null === O(/^%?[^%]*%?$/, t)) throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var r = (function (t) {
            var e = A(t, 0, 1),
              r = A(t, -1);
            if ("%" === e && "%" !== r) throw new n("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r && "%" !== e) throw new n("invalid intrinsic syntax, expected opening `%`");
            var o = [];
            return (
              S(t, x, function (t, e, r, n) {
                o[o.length] = r ? S(n, k, "$1") : e || t;
              }),
              o
            );
          })(t),
          o = r.length > 0 ? r[0] : "",
          i = j("%" + o + "%", e),
          s = i.name,
          c = i.value,
          l = !1,
          f = i.alias;
        f && ((o = f[0]), E(r, _([0, 1], f)));
        for (var p = 1, h = !0; p < r.length; p += 1) {
          var d = r[p],
            g = A(d, 0, 1),
            v = A(d, -1);
          if (('"' === g || "'" === g || "`" === g || '"' === v || "'" === v || "`" === v) && g !== v)
            throw new n("property names with quotes must have matching quotes");
          if ((("constructor" !== d && h) || (l = !0), w(y, (s = "%" + (o += "." + d) + "%")))) c = y[s];
          else if (null != c) {
            if (!(d in c)) {
              if (!e) throw new a("base intrinsic for " + t + " exists, but the property is not available.");
              return;
            }
            if (u && p + 1 >= r.length) {
              var m = u(c, d);
              c = (h = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : c[d];
            } else (h = w(c, d)), (c = c[d]);
            h && !l && (y[s] = c);
          }
        }
        return c;
      };
    }),
    i.register("fEp0l", function (t, e) {
      "use strict";
      var r = "undefined" != typeof Symbol && Symbol,
        n = i("3vXbt");
      t.exports = function () {
        return (
          "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && n()
        );
      };
    }),
    i.register("3vXbt", function (t, e) {
      "use strict";
      t.exports = function () {
        if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var t = {},
          e = Symbol("test"),
          r = Object(e);
        if ("string" == typeof e) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (e in ((t[e] = 42), t)) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
        if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (1 !== n.length || n[0] !== e) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(t, e);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    }),
    i.register("W3mms", function (t, e) {
      "use strict";
      var n = i("b8ADz"),
        o = i("jecPz"),
        a = i("7UJFt"),
        s = a("Object.prototype.toString"),
        u = i("7yDWF")(),
        c = i("5vkwL"),
        l = "undefined" == typeof globalThis ? r : globalThis,
        f = o(),
        p =
          a("Array.prototype.indexOf", !0) ||
          function (t, e) {
            for (var r = 0; r < t.length; r += 1) if (t[r] === e) return r;
            return -1;
          },
        h = a("String.prototype.slice"),
        d = {},
        y = Object.getPrototypeOf;
      u &&
        c &&
        y &&
        n(f, function (t) {
          var e = new l[t]();
          if (Symbol.toStringTag in e) {
            var r = y(e),
              n = c(r, Symbol.toStringTag);
            if (!n) {
              var o = y(r);
              n = c(o, Symbol.toStringTag);
            }
            d[t] = n.get;
          }
        });
      t.exports = function (t) {
        if (!t || "object" != typeof t) return !1;
        if (!u || !(Symbol.toStringTag in t)) {
          var e = h(s(t), 8, -1);
          return p(f, e) > -1;
        }
        return (
          !!c &&
          (function (t) {
            var e = !1;
            return (
              n(d, function (r, n) {
                if (!e)
                  try {
                    e = r.call(t) === n;
                  } catch (t) {}
              }),
              e
            );
          })(t)
        );
      };
    }),
    i.register("8AdCH", function (t, e) {
      t.exports = function (t) {
        return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8;
      };
    }),
    i.register("7wfog", function (t, e) {
      "function" == typeof Object.create
        ? (t.exports = function (t, e) {
            e &&
              ((t.super_ = e),
              (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })));
          })
        : (t.exports = function (t, e) {
            if (e) {
              t.super_ = e;
              var r = function () {};
              (r.prototype = e.prototype), (t.prototype = new r()), (t.prototype.constructor = t);
            }
          });
    }),
    i.register("lKaLV", function (t, e) {
      var r = i("jhCkN");
      function n(t, e, r) {
        return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
      }
      function o(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
        }
      }
      function a(t, e) {
        return !e || ("object" !== p(e) && "function" != typeof e) ? s(t) : e;
      }
      function s(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }
      function u(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (
          (u = function (t) {
            if (null === t || ((r = t), -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
            var r;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
              if (e.has(t)) return e.get(t);
              e.set(t, n);
            }
            function n() {
              return c(t, arguments, f(this).constructor);
            }
            return (
              (n.prototype = Object.create(t.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } })),
              l(n, t)
            );
          }),
          u(t)
        );
      }
      function c(t, e, r) {
        return (
          (c = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (t) {
              return !1;
            }
          })()
            ? Reflect.construct
            : function (t, e, r) {
                var n = [null];
                n.push.apply(n, e);
                var o = new (Function.bind.apply(t, n))();
                return r && l(o, r.prototype), o;
              }),
          c.apply(null, arguments)
        );
      }
      function l(t, e) {
        return (
          (l =
            Object.setPrototypeOf ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          l(t, e)
        );
      }
      function f(t) {
        return (
          (f = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              }),
          f(t)
        );
      }
      function p(t) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          p(t)
        );
      }
      var h = i("dZjMf").inspect,
        d = i("hO6BF").codes.ERR_INVALID_ARG_TYPE;
      function y(t, e, r) {
        return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
      }
      var g = "",
        v = "",
        m = "",
        b = "",
        w = {
          deepStrictEqual: "Expected values to be strictly deep-equal:",
          strictEqual: "Expected values to be strictly equal:",
          strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
          deepEqual: "Expected values to be loosely deep-equal:",
          equal: "Expected values to be loosely equal:",
          notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
          notStrictEqual: 'Expected "actual" to be strictly unequal to:',
          notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
          notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
          notEqual: 'Expected "actual" to be loosely unequal to:',
          notIdentical: "Values identical but not reference-equal:"
        },
        _ = 10;
      function E(t) {
        var e = Object.keys(t),
          r = Object.create(Object.getPrototypeOf(t));
        return (
          e.forEach(function (e) {
            r[e] = t[e];
          }),
          Object.defineProperty(r, "message", { value: t.message }),
          r
        );
      }
      function S(t) {
        return h(t, {
          compact: !1,
          customInspect: !1,
          depth: 1e3,
          maxArrayLength: 1 / 0,
          showHidden: !1,
          breakLength: 1 / 0,
          showProxy: !1,
          sorted: !0,
          getters: !0
        });
      }
      function A(t, e, n) {
        var o = "",
          i = "",
          a = 0,
          s = "",
          u = !1,
          c = S(t),
          l = c.split("\n"),
          f = S(e).split("\n"),
          h = 0,
          d = "";
        if (
          ("strictEqual" === n && "object" === p(t) && "object" === p(e) && null !== t && null !== e && (n = "strictEqualObject"),
          1 === l.length && 1 === f.length && l[0] !== f[0])
        ) {
          var E = l[0].length + f[0].length;
          if (E <= _) {
            if (!(("object" === p(t) && null !== t) || ("object" === p(e) && null !== e) || (0 === t && 0 === e)))
              return "".concat(w[n], "\n\n") + "".concat(l[0], " !== ").concat(f[0], "\n");
          } else if ("strictEqualObject" !== n) {
            if (E < (r.stderr && r.stderr.isTTY ? r.stderr.columns : 80)) {
              for (; l[0][h] === f[0][h]; ) h++;
              h > 2 &&
                ((d = "\n  ".concat(
                  (function (t, e) {
                    if (((e = Math.floor(e)), 0 == t.length || 0 == e)) return "";
                    var r = t.length * e;
                    for (e = Math.floor(Math.log(e) / Math.log(2)); e; ) (t += t), e--;
                    return t + t.substring(0, r - t.length);
                  })(" ", h),
                  "^"
                )),
                (h = 0));
            }
          }
        }
        for (
          var A = l[l.length - 1], O = f[f.length - 1];
          A === O && (h++ < 2 ? (s = "\n  ".concat(A).concat(s)) : (o = A), l.pop(), f.pop(), 0 !== l.length && 0 !== f.length);

        )
          (A = l[l.length - 1]), (O = f[f.length - 1]);
        var x = Math.max(l.length, f.length);
        if (0 === x) {
          var k = c.split("\n");
          if (k.length > 30) for (k[26] = "".concat(g, "...").concat(b); k.length > 27; ) k.pop();
          return "".concat(w.notIdentical, "\n\n").concat(k.join("\n"), "\n");
        }
        h > 3 && ((s = "\n".concat(g, "...").concat(b).concat(s)), (u = !0)), "" !== o && ((s = "\n  ".concat(o).concat(s)), (o = ""));
        var j = 0,
          P = w[n] + "\n".concat(v, "+ actual").concat(b, " ").concat(m, "- expected").concat(b),
          R = " ".concat(g, "...").concat(b, " Lines skipped");
        for (h = 0; h < x; h++) {
          var T = h - a;
          if (l.length < h + 1)
            T > 1 &&
              h > 2 &&
              (T > 4 ? ((i += "\n".concat(g, "...").concat(b)), (u = !0)) : T > 3 && ((i += "\n  ".concat(f[h - 2])), j++),
              (i += "\n  ".concat(f[h - 1])),
              j++),
              (a = h),
              (o += "\n".concat(m, "-").concat(b, " ").concat(f[h])),
              j++;
          else if (f.length < h + 1)
            T > 1 &&
              h > 2 &&
              (T > 4 ? ((i += "\n".concat(g, "...").concat(b)), (u = !0)) : T > 3 && ((i += "\n  ".concat(l[h - 2])), j++),
              (i += "\n  ".concat(l[h - 1])),
              j++),
              (a = h),
              (i += "\n".concat(v, "+").concat(b, " ").concat(l[h])),
              j++;
          else {
            var I = f[h],
              U = l[h],
              D = U !== I && (!y(U, ",") || U.slice(0, -1) !== I);
            D && y(I, ",") && I.slice(0, -1) === U && ((D = !1), (U += ",")),
              D
                ? (T > 1 &&
                    h > 2 &&
                    (T > 4 ? ((i += "\n".concat(g, "...").concat(b)), (u = !0)) : T > 3 && ((i += "\n  ".concat(l[h - 2])), j++),
                    (i += "\n  ".concat(l[h - 1])),
                    j++),
                  (a = h),
                  (i += "\n".concat(v, "+").concat(b, " ").concat(U)),
                  (o += "\n".concat(m, "-").concat(b, " ").concat(I)),
                  (j += 2))
                : ((i += o), (o = ""), (1 !== T && 0 !== h) || ((i += "\n  ".concat(U)), j++));
          }
          if (j > 20 && h < x - 2)
            return "".concat(P).concat(R, "\n").concat(i, "\n").concat(g, "...").concat(b).concat(o, "\n") + "".concat(g, "...").concat(b);
        }
        return ""
          .concat(P)
          .concat(u ? R : "", "\n")
          .concat(i)
          .concat(o)
          .concat(s)
          .concat(d);
      }
      var O = (function (t) {
        function e(t) {
          var n;
          if (
            ((function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            })(this, e),
            "object" !== p(t) || null === t)
          )
            throw new d("options", "Object", t);
          var o = t.message,
            i = t.operator,
            u = t.stackStartFn,
            c = t.actual,
            l = t.expected,
            h = Error.stackTraceLimit;
          if (((Error.stackTraceLimit = 0), null != o)) n = a(this, f(e).call(this, String(o)));
          else if (
            (r.stderr &&
              r.stderr.isTTY &&
              (r.stderr && r.stderr.getColorDepth && 1 !== r.stderr.getColorDepth()
                ? ((g = "[34m"), (v = "[32m"), (b = "[39m"), (m = "[31m"))
                : ((g = ""), (v = ""), (b = ""), (m = ""))),
            "object" === p(c) &&
              null !== c &&
              "object" === p(l) &&
              null !== l &&
              "stack" in c &&
              c instanceof Error &&
              "stack" in l &&
              l instanceof Error &&
              ((c = E(c)), (l = E(l))),
            "deepStrictEqual" === i || "strictEqual" === i)
          )
            n = a(this, f(e).call(this, A(c, l, i)));
          else if ("notDeepStrictEqual" === i || "notStrictEqual" === i) {
            var y = w[i],
              _ = S(c).split("\n");
            if (("notStrictEqual" === i && "object" === p(c) && null !== c && (y = w.notStrictEqualObject), _.length > 30))
              for (_[26] = "".concat(g, "...").concat(b); _.length > 27; ) _.pop();
            n =
              1 === _.length
                ? a(this, f(e).call(this, "".concat(y, " ").concat(_[0])))
                : a(this, f(e).call(this, "".concat(y, "\n\n").concat(_.join("\n"), "\n")));
          } else {
            var O = S(c),
              x = "",
              k = w[i];
            "notDeepEqual" === i || "notEqual" === i
              ? (O = "".concat(w[i], "\n\n").concat(O)).length > 1024 && (O = "".concat(O.slice(0, 1021), "..."))
              : ((x = "".concat(S(l))),
                O.length > 512 && (O = "".concat(O.slice(0, 509), "...")),
                x.length > 512 && (x = "".concat(x.slice(0, 509), "...")),
                "deepEqual" === i || "equal" === i
                  ? (O = "".concat(k, "\n\n").concat(O, "\n\nshould equal\n\n"))
                  : (x = " ".concat(i, " ").concat(x))),
              (n = a(this, f(e).call(this, "".concat(O).concat(x))));
          }
          return (
            (Error.stackTraceLimit = h),
            (n.generatedMessage = !o),
            Object.defineProperty(s(n), "name", {
              value: "AssertionError [ERR_ASSERTION]",
              enumerable: !1,
              writable: !0,
              configurable: !0
            }),
            (n.code = "ERR_ASSERTION"),
            (n.actual = c),
            (n.expected = l),
            (n.operator = i),
            Error.captureStackTrace && Error.captureStackTrace(s(n), u),
            n.stack,
            (n.name = "AssertionError"),
            a(n)
          );
        }
        var i, u, c;
        return (
          (function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && l(t, e);
          })(e, t),
          (i = e),
          (u = [
            {
              key: "toString",
              value: function () {
                return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message);
              }
            },
            {
              key: h.custom,
              value: function (t, e) {
                return h(
                  this,
                  (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                      var r = null != arguments[e] ? arguments[e] : {},
                        o = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                          Object.getOwnPropertySymbols(r).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(r, t).enumerable;
                          })
                        )),
                        o.forEach(function (e) {
                          n(t, e, r[e]);
                        });
                    }
                    return t;
                  })({}, e, { customInspect: !1, depth: 0 })
                );
              }
            }
          ]),
          u && o(i.prototype, u),
          c && o(i, c),
          e
        );
      })(u(Error));
      t.exports = O;
    }),
    i.register("bjsc7", function (t, e) {
      "use strict";
      function r(t, e) {
        if (null == t) throw new TypeError("Cannot convert first argument to object");
        for (var r = Object(t), n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          if (null != o)
            for (var i = Object.keys(Object(o)), a = 0, s = i.length; a < s; a++) {
              var u = i[a],
                c = Object.getOwnPropertyDescriptor(o, u);
              void 0 !== c && c.enumerable && (r[u] = o[u]);
            }
        }
        return r;
      }
      t.exports = {
        assign: r,
        polyfill: function () {
          Object.assign || Object.defineProperty(Object, "assign", { enumerable: !1, configurable: !0, writable: !0, value: r });
        }
      };
    }),
    i.register("lotpF", function (t, e) {
      "use strict";
      var r = i("kJueI"),
        n = i("3RhkR"),
        o = i("6key8"),
        a = i("8Bkwp"),
        s = i("1oiqJ"),
        u = n(a(), Object);
      r(u, { getPolyfill: a, implementation: o, shim: s }), (t.exports = u);
    }),
    i.register("kJueI", function (t, e) {
      "use strict";
      var r = i("BtlVU"),
        n = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        o = Object.prototype.toString,
        a = Array.prototype.concat,
        s = Object.defineProperty,
        u =
          s &&
          (function () {
            var t = {};
            try {
              for (var e in (s(t, "x", { enumerable: !1, value: t }), t)) return !1;
              return t.x === t;
            } catch (t) {
              return !1;
            }
          })(),
        c = function (t, e, r, n) {
          var i;
          (!(e in t) || ("function" == typeof (i = n) && "[object Function]" === o.call(i) && n())) &&
            (u ? s(t, e, { configurable: !0, enumerable: !1, value: r, writable: !0 }) : (t[e] = r));
        },
        l = function (t, e) {
          var o = arguments.length > 2 ? arguments[2] : {},
            i = r(e);
          n && (i = a.call(i, Object.getOwnPropertySymbols(e)));
          for (var s = 0; s < i.length; s += 1) c(t, i[s], e[i[s]], o[i[s]]);
        };
      (l.supportsDescriptors = !!u), (t.exports = l);
    }),
    i.register("BtlVU", function (t, e) {
      "use strict";
      var r = Array.prototype.slice,
        n = i("2orMo"),
        o = Object.keys,
        a = o
          ? function (t) {
              return o(t);
            }
          : i("69ae2"),
        s = Object.keys;
      (a.shim = function () {
        if (Object.keys) {
          var t = (function () {
            var t = Object.keys(arguments);
            return t && t.length === arguments.length;
          })(1, 2);
          t ||
            (Object.keys = function (t) {
              return n(t) ? s(r.call(t)) : s(t);
            });
        } else Object.keys = a;
        return Object.keys || a;
      }),
        (t.exports = a);
    }),
    i.register("2orMo", function (t, e) {
      "use strict";
      var r = Object.prototype.toString;
      t.exports = function (t) {
        var e = r.call(t),
          n = "[object Arguments]" === e;
        return (
          n ||
            (n =
              "[object Array]" !== e &&
              null !== t &&
              "object" == typeof t &&
              "number" == typeof t.length &&
              t.length >= 0 &&
              "[object Function]" === r.call(t.callee)),
          n
        );
      };
    }),
    i.register("69ae2", function (t, e) {
      "use strict";
      var r;
      if (!Object.keys) {
        var n = Object.prototype.hasOwnProperty,
          o = Object.prototype.toString,
          a = i("2orMo"),
          s = Object.prototype.propertyIsEnumerable,
          u = !s.call({ toString: null }, "toString"),
          c = s.call(function () {}, "prototype"),
          l = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
          f = function (t) {
            var e = t.constructor;
            return e && e.prototype === t;
          },
          p = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
          },
          h = (function () {
            if ("undefined" == typeof window) return !1;
            for (var t in window)
              try {
                if (!p["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t])
                  try {
                    f(window[t]);
                  } catch (t) {
                    return !0;
                  }
              } catch (t) {
                return !0;
              }
            return !1;
          })();
        r = function (t) {
          var e = null !== t && "object" == typeof t,
            r = "[object Function]" === o.call(t),
            i = a(t),
            s = e && "[object String]" === o.call(t),
            p = [];
          if (!e && !r && !i) throw new TypeError("Object.keys called on a non-object");
          var d = c && r;
          if (s && t.length > 0 && !n.call(t, 0)) for (var y = 0; y < t.length; ++y) p.push(String(y));
          if (i && t.length > 0) for (var g = 0; g < t.length; ++g) p.push(String(g));
          else for (var v in t) (d && "prototype" === v) || !n.call(t, v) || p.push(String(v));
          if (u)
            for (
              var m = (function (t) {
                  if ("undefined" == typeof window || !h) return f(t);
                  try {
                    return f(t);
                  } catch (t) {
                    return !1;
                  }
                })(t),
                b = 0;
              b < l.length;
              ++b
            )
              (m && "constructor" === l[b]) || !n.call(t, l[b]) || p.push(l[b]);
          return p;
        };
      }
      t.exports = r;
    }),
    i.register("6key8", function (t, e) {
      "use strict";
      var r = function (t) {
        return t != t;
      };
      t.exports = function (t, e) {
        return 0 === t && 0 === e ? 1 / t == 1 / e : t === e || !(!r(t) || !r(e));
      };
    }),
    i.register("8Bkwp", function (t, e) {
      "use strict";
      var r = i("6key8");
      t.exports = function () {
        return "function" == typeof Object.is ? Object.is : r;
      };
    }),
    i.register("1oiqJ", function (t, e) {
      "use strict";
      var r = i("8Bkwp"),
        n = i("kJueI");
      t.exports = function () {
        var t = r();
        return (
          n(
            Object,
            { is: t },
            {
              is: function () {
                return Object.is !== t;
              }
            }
          ),
          t
        );
      };
    }),
    i.register("94SG0", function (t, e) {
      "use strict";
      function r(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var r = [],
              n = !0,
              o = !1,
              i = void 0;
            try {
              for (var a, s = t[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !e || r.length !== e); n = !0);
            } catch (t) {
              (o = !0), (i = t);
            } finally {
              try {
                n || null == s.return || s.return();
              } finally {
                if (o) throw i;
              }
            }
            return r;
          })(t, e) ||
          (function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          })()
        );
      }
      function n(t) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                }),
          n(t)
        );
      }
      var o = void 0 !== /a/g.flags,
        a = function (t) {
          var e = [];
          return (
            t.forEach(function (t) {
              return e.push(t);
            }),
            e
          );
        },
        s = function (t) {
          var e = [];
          return (
            t.forEach(function (t, r) {
              return e.push([r, t]);
            }),
            e
          );
        },
        u = Object.is ? Object.is : i("lotpF"),
        c = Object.getOwnPropertySymbols
          ? Object.getOwnPropertySymbols
          : function () {
              return [];
            },
        l = Number.isNaN ? Number.isNaN : i("b8age");
      function f(t) {
        return t.call.bind(t);
      }
      var p = f(Object.prototype.hasOwnProperty),
        h = f(Object.prototype.propertyIsEnumerable),
        d = f(Object.prototype.toString),
        y = i("dZjMf").types,
        g = y.isAnyArrayBuffer,
        v = y.isArrayBufferView,
        m = y.isDate,
        b = y.isMap,
        w = y.isRegExp,
        _ = y.isSet,
        E = y.isNativeError,
        S = y.isBoxedPrimitive,
        A = y.isNumberObject,
        O = y.isStringObject,
        x = y.isBooleanObject,
        k = y.isBigIntObject,
        j = y.isSymbolObject,
        P = y.isFloat32Array,
        R = y.isFloat64Array;
      function T(t) {
        if (0 === t.length || t.length > 10) return !0;
        for (var e = 0; e < t.length; e++) {
          var r = t.charCodeAt(e);
          if (r < 48 || r > 57) return !0;
        }
        return 10 === t.length && t >= Math.pow(2, 32);
      }
      function I(t) {
        return Object.keys(t)
          .filter(T)
          .concat(c(t).filter(Object.prototype.propertyIsEnumerable.bind(t)));
      }
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
       * @license  MIT
       */ function U(t, e) {
        if (t === e) return 0;
        for (var r = t.length, n = e.length, o = 0, i = Math.min(r, n); o < i; ++o)
          if (t[o] !== e[o]) {
            (r = t[o]), (n = e[o]);
            break;
          }
        return r < n ? -1 : n < r ? 1 : 0;
      }
      var D = !0,
        F = !1,
        N = 0,
        L = 1,
        M = 2,
        C = 3;
      function B(t, e, r, i) {
        if (t === e) return 0 !== t || !r || u(t, e);
        if (r) {
          if ("object" !== n(t)) return "number" == typeof t && l(t) && l(e);
          if ("object" !== n(e) || null === t || null === e) return !1;
          if (Object.getPrototypeOf(t) !== Object.getPrototypeOf(e)) return !1;
        } else {
          if (null === t || "object" !== n(t)) return (null === e || "object" !== n(e)) && t == e;
          if (null === e || "object" !== n(e)) return !1;
        }
        var a,
          s,
          c,
          f,
          p = d(t);
        if (p !== d(e)) return !1;
        if (Array.isArray(t)) {
          if (t.length !== e.length) return !1;
          var h = I(t),
            y = I(e);
          return h.length === y.length && $(t, e, r, i, L, h);
        }
        if ("[object Object]" === p && ((!b(t) && b(e)) || (!_(t) && _(e)))) return !1;
        if (m(t)) {
          if (!m(e) || Date.prototype.getTime.call(t) !== Date.prototype.getTime.call(e)) return !1;
        } else if (w(t)) {
          if (
            !w(e) ||
            ((c = t),
            (f = e),
            !(o ? c.source === f.source && c.flags === f.flags : RegExp.prototype.toString.call(c) === RegExp.prototype.toString.call(f)))
          )
            return !1;
        } else if (E(t) || t instanceof Error) {
          if (t.message !== e.message || t.name !== e.name) return !1;
        } else {
          if (v(t)) {
            if (r || (!P(t) && !R(t))) {
              if (
                !(function (t, e) {
                  return (
                    t.byteLength === e.byteLength &&
                    0 === U(new Uint8Array(t.buffer, t.byteOffset, t.byteLength), new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
                  );
                })(t, e)
              )
                return !1;
            } else if (
              !(function (t, e) {
                if (t.byteLength !== e.byteLength) return !1;
                for (var r = 0; r < t.byteLength; r++) if (t[r] !== e[r]) return !1;
                return !0;
              })(t, e)
            )
              return !1;
            var T = I(t),
              D = I(e);
            return T.length === D.length && $(t, e, r, i, N, T);
          }
          if (_(t)) return !(!_(e) || t.size !== e.size) && $(t, e, r, i, M);
          if (b(t)) return !(!b(e) || t.size !== e.size) && $(t, e, r, i, C);
          if (g(t)) {
            if (((s = e), (a = t).byteLength !== s.byteLength || 0 !== U(new Uint8Array(a), new Uint8Array(s)))) return !1;
          } else if (
            S(t) &&
            !(function (t, e) {
              return A(t)
                ? A(e) && u(Number.prototype.valueOf.call(t), Number.prototype.valueOf.call(e))
                : O(t)
                ? O(e) && String.prototype.valueOf.call(t) === String.prototype.valueOf.call(e)
                : x(t)
                ? x(e) && Boolean.prototype.valueOf.call(t) === Boolean.prototype.valueOf.call(e)
                : k(t)
                ? k(e) && BigInt.prototype.valueOf.call(t) === BigInt.prototype.valueOf.call(e)
                : j(e) && Symbol.prototype.valueOf.call(t) === Symbol.prototype.valueOf.call(e);
            })(t, e)
          )
            return !1;
        }
        return $(t, e, r, i, N);
      }
      function q(t, e) {
        return e.filter(function (e) {
          return h(t, e);
        });
      }
      function $(t, e, o, i, u, l) {
        if (5 === arguments.length) {
          l = Object.keys(t);
          var f = Object.keys(e);
          if (l.length !== f.length) return !1;
        }
        for (var d = 0; d < l.length; d++) if (!p(e, l[d])) return !1;
        if (o && 5 === arguments.length) {
          var y = c(t);
          if (0 !== y.length) {
            var g = 0;
            for (d = 0; d < y.length; d++) {
              var v = y[d];
              if (h(t, v)) {
                if (!h(e, v)) return !1;
                l.push(v), g++;
              } else if (h(e, v)) return !1;
            }
            var m = c(e);
            if (y.length !== m.length && q(e, m).length !== g) return !1;
          } else {
            var b = c(e);
            if (0 !== b.length && 0 !== q(e, b).length) return !1;
          }
        }
        if (0 === l.length && (u === N || (u === L && 0 === t.length) || 0 === t.size)) return !0;
        if (void 0 === i) i = { val1: new Map(), val2: new Map(), position: 0 };
        else {
          var w = i.val1.get(t);
          if (void 0 !== w) {
            var _ = i.val2.get(e);
            if (void 0 !== _) return w === _;
          }
          i.position++;
        }
        i.val1.set(t, i.position), i.val2.set(e, i.position);
        var E = (function (t, e, o, i, u, c) {
          var l = 0;
          if (c === M) {
            if (
              !(function (t, e, r, o) {
                for (var i = null, s = a(t), u = 0; u < s.length; u++) {
                  var c = s[u];
                  if ("object" === n(c) && null !== c) null === i && (i = new Set()), i.add(c);
                  else if (!e.has(c)) {
                    if (r) return !1;
                    if (!z(t, e, c)) return !1;
                    null === i && (i = new Set()), i.add(c);
                  }
                }
                if (null !== i) {
                  for (var l = a(e), f = 0; f < l.length; f++) {
                    var p = l[f];
                    if ("object" === n(p) && null !== p) {
                      if (!W(i, p, r, o)) return !1;
                    } else if (!r && !t.has(p) && !W(i, p, r, o)) return !1;
                  }
                  return 0 === i.size;
                }
                return !0;
              })(t, e, o, u)
            )
              return !1;
          } else if (c === C) {
            if (
              !(function (t, e, o, i) {
                for (var a = null, u = s(t), c = 0; c < u.length; c++) {
                  var l = r(u[c], 2),
                    f = l[0],
                    p = l[1];
                  if ("object" === n(f) && null !== f) null === a && (a = new Set()), a.add(f);
                  else {
                    var h = e.get(f);
                    if ((void 0 === h && !e.has(f)) || !B(p, h, o, i)) {
                      if (o) return !1;
                      if (!V(t, e, f, p, i)) return !1;
                      null === a && (a = new Set()), a.add(f);
                    }
                  }
                }
                if (null !== a) {
                  for (var d = s(e), y = 0; y < d.length; y++) {
                    var g = r(d[y], 2),
                      v = ((f = g[0]), g[1]);
                    if ("object" === n(f) && null !== f) {
                      if (!K(a, t, f, v, o, i)) return !1;
                    } else if (!(o || (t.has(f) && B(t.get(f), v, !1, i)) || K(a, t, f, v, !1, i))) return !1;
                  }
                  return 0 === a.size;
                }
                return !0;
              })(t, e, o, u)
            )
              return !1;
          } else if (c === L)
            for (; l < t.length; l++) {
              if (!p(t, l)) {
                if (p(e, l)) return !1;
                for (var f = Object.keys(t); l < f.length; l++) {
                  var h = f[l];
                  if (!p(e, h) || !B(t[h], e[h], o, u)) return !1;
                }
                return f.length === Object.keys(e).length;
              }
              if (!p(e, l) || !B(t[l], e[l], o, u)) return !1;
            }
          for (l = 0; l < i.length; l++) {
            var d = i[l];
            if (!B(t[d], e[d], o, u)) return !1;
          }
          return !0;
        })(t, e, o, l, i, u);
        return i.val1.delete(t), i.val2.delete(e), E;
      }
      function W(t, e, r, n) {
        for (var o = a(t), i = 0; i < o.length; i++) {
          var s = o[i];
          if (B(e, s, r, n)) return t.delete(s), !0;
        }
        return !1;
      }
      function G(t) {
        switch (n(t)) {
          case "undefined":
            return null;
          case "object":
            return;
          case "symbol":
            return !1;
          case "string":
            t = +t;
          case "number":
            if (l(t)) return !1;
        }
        return !0;
      }
      function z(t, e, r) {
        var n = G(r);
        return null != n ? n : e.has(n) && !t.has(n);
      }
      function V(t, e, r, n, o) {
        var i = G(r);
        if (null != i) return i;
        var a = e.get(i);
        return !((void 0 === a && !e.has(i)) || !B(n, a, !1, o)) && !t.has(i) && B(n, a, !1, o);
      }
      function K(t, e, r, n, o, i) {
        for (var s = a(t), u = 0; u < s.length; u++) {
          var c = s[u];
          if (B(r, c, o, i) && B(n, e.get(c), o, i)) return t.delete(c), !0;
        }
        return !1;
      }
      t.exports = {
        isDeepEqual: function (t, e) {
          return B(t, e, F);
        },
        isDeepStrictEqual: function (t, e) {
          return B(t, e, D);
        }
      };
    }),
    i.register("b8age", function (t, e) {
      "use strict";
      var r = i("3RhkR"),
        n = i("kJueI"),
        o = i("7MWDE"),
        a = i("jw2Pr"),
        s = i("bXXUG"),
        u = r(a(), Number);
      n(u, { getPolyfill: a, implementation: o, shim: s }), (t.exports = u);
    }),
    i.register("7MWDE", function (t, e) {
      "use strict";
      t.exports = function (t) {
        return t != t;
      };
    }),
    i.register("jw2Pr", function (t, e) {
      "use strict";
      var r = i("7MWDE");
      t.exports = function () {
        return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : r;
      };
    }),
    i.register("bXXUG", function (t, e) {
      "use strict";
      var r = i("kJueI"),
        n = i("jw2Pr");
      t.exports = function () {
        var t = n();
        return (
          r(
            Number,
            { isNaN: t },
            {
              isNaN: function () {
                return Number.isNaN !== t;
              }
            }
          ),
          t
        );
      };
    }),
    i.register("1Ew2A", function (t, e) {
      t.exports = n;
      var r = i("ecAUU").EventEmitter;
      function n() {
        r.call(this);
      }
      i("7wfog")(n, r),
        (n.Readable = i("7IjhS")),
        (n.Writable = i("a3kVl")),
        (n.Duplex = i("9mNBC")),
        (n.Transform = i("g81S9")),
        (n.PassThrough = i("aDCiR")),
        (n.finished = i("dCl4X")),
        (n.pipeline = i("477Nr")),
        (n.Stream = n),
        (n.prototype.pipe = function (t, e) {
          var n = this;
          function o(e) {
            t.writable && !1 === t.write(e) && n.pause && n.pause();
          }
          function i() {
            n.readable && n.resume && n.resume();
          }
          n.on("data", o), t.on("drain", i), t._isStdio || (e && !1 === e.end) || (n.on("end", s), n.on("close", u));
          var a = !1;
          function s() {
            a || ((a = !0), t.end());
          }
          function u() {
            a || ((a = !0), "function" == typeof t.destroy && t.destroy());
          }
          function c(t) {
            if ((l(), 0 === r.listenerCount(this, "error"))) throw t;
          }
          function l() {
            n.removeListener("data", o),
              t.removeListener("drain", i),
              n.removeListener("end", s),
              n.removeListener("close", u),
              n.removeListener("error", c),
              t.removeListener("error", c),
              n.removeListener("end", l),
              n.removeListener("close", l),
              t.removeListener("close", l);
          }
          return n.on("error", c), t.on("error", c), n.on("end", l), n.on("close", l), t.on("close", l), t.emit("pipe", n), t;
        });
    }),
    i.register("ecAUU", function (t, e) {
      "use strict";
      var r,
        n = "object" == typeof Reflect ? Reflect : null,
        o =
          n && "function" == typeof n.apply
            ? n.apply
            : function (t, e, r) {
                return Function.prototype.apply.call(t, e, r);
              };
      r =
        n && "function" == typeof n.ownKeys
          ? n.ownKeys
          : Object.getOwnPropertySymbols
          ? function (t) {
              return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
            }
          : function (t) {
              return Object.getOwnPropertyNames(t);
            };
      var i =
        Number.isNaN ||
        function (t) {
          return t != t;
        };
      function a() {
        a.init.call(this);
      }
      (t.exports = a),
        (t.exports.once = function (t, e) {
          return new Promise(function (r, n) {
            function o(r) {
              t.removeListener(e, i), n(r);
            }
            function i() {
              "function" == typeof t.removeListener && t.removeListener("error", o), r([].slice.call(arguments));
            }
            g(t, e, i, { once: !0 }),
              "error" !== e &&
                (function (t, e, r) {
                  "function" == typeof t.on && g(t, "error", e, r);
                })(t, o, { once: !0 });
          });
        }),
        (a.EventEmitter = a),
        (a.prototype._events = void 0),
        (a.prototype._eventsCount = 0),
        (a.prototype._maxListeners = void 0);
      var s = 10;
      function u(t) {
        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
      }
      function c(t) {
        return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
      }
      function l(t, e, r, n) {
        var o, i, a, s;
        if (
          (u(r),
          void 0 === (i = t._events)
            ? ((i = t._events = Object.create(null)), (t._eventsCount = 0))
            : (void 0 !== i.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), (i = t._events)), (a = i[e])),
          void 0 === a)
        )
          (a = i[e] = r), ++t._eventsCount;
        else if (
          ("function" == typeof a ? (a = i[e] = n ? [r, a] : [a, r]) : n ? a.unshift(r) : a.push(r),
          (o = c(t)) > 0 && a.length > o && !a.warned)
        ) {
          a.warned = !0;
          var l = new Error(
            "Possible EventEmitter memory leak detected. " +
              a.length +
              " " +
              String(e) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (l.name = "MaxListenersExceededWarning"),
            (l.emitter = t),
            (l.type = e),
            (l.count = a.length),
            (s = l),
            console && console.warn && console.warn(s);
        }
        return t;
      }
      function f() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
          );
      }
      function p(t, e, r) {
        var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
          o = f.bind(n);
        return (o.listener = r), (n.wrapFn = o), o;
      }
      function h(t, e, r) {
        var n = t._events;
        if (void 0 === n) return [];
        var o = n[e];
        return void 0 === o
          ? []
          : "function" == typeof o
          ? r
            ? [o.listener || o]
            : [o]
          : r
          ? (function (t) {
              for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
              return e;
            })(o)
          : y(o, o.length);
      }
      function d(t) {
        var e = this._events;
        if (void 0 !== e) {
          var r = e[t];
          if ("function" == typeof r) return 1;
          if (void 0 !== r) return r.length;
        }
        return 0;
      }
      function y(t, e) {
        for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
        return r;
      }
      function g(t, e, r, n) {
        if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r);
        else {
          if ("function" != typeof t.addEventListener)
            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
          t.addEventListener(e, function o(i) {
            n.once && t.removeEventListener(e, o), r(i);
          });
        }
      }
      Object.defineProperty(a, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return s;
        },
        set: function (t) {
          if ("number" != typeof t || t < 0 || i(t))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + "."
            );
          s = t;
        }
      }),
        (a.init = function () {
          (void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (a.prototype.setMaxListeners = function (t) {
          if ("number" != typeof t || t < 0 || i(t))
            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
          return (this._maxListeners = t), this;
        }),
        (a.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (a.prototype.emit = function (t) {
          for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
          var n = "error" === t,
            i = this._events;
          if (void 0 !== i) n = n && void 0 === i.error;
          else if (!n) return !1;
          if (n) {
            var a;
            if ((e.length > 0 && (a = e[0]), a instanceof Error)) throw a;
            var s = new Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
            throw ((s.context = a), s);
          }
          var u = i[t];
          if (void 0 === u) return !1;
          if ("function" == typeof u) o(u, this, e);
          else {
            var c = u.length,
              l = y(u, c);
            for (r = 0; r < c; ++r) o(l[r], this, e);
          }
          return !0;
        }),
        (a.prototype.addListener = function (t, e) {
          return l(this, t, e, !1);
        }),
        (a.prototype.on = a.prototype.addListener),
        (a.prototype.prependListener = function (t, e) {
          return l(this, t, e, !0);
        }),
        (a.prototype.once = function (t, e) {
          return u(e), this.on(t, p(this, t, e)), this;
        }),
        (a.prototype.prependOnceListener = function (t, e) {
          return u(e), this.prependListener(t, p(this, t, e)), this;
        }),
        (a.prototype.removeListener = function (t, e) {
          var r, n, o, i, a;
          if ((u(e), void 0 === (n = this._events))) return this;
          if (void 0 === (r = n[t])) return this;
          if (r === e || r.listener === e)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete n[t], n.removeListener && this.emit("removeListener", t, r.listener || e));
          else if ("function" != typeof r) {
            for (o = -1, i = r.length - 1; i >= 0; i--)
              if (r[i] === e || r[i].listener === e) {
                (a = r[i].listener), (o = i);
                break;
              }
            if (o < 0) return this;
            0 === o
              ? r.shift()
              : (function (t, e) {
                  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                  t.pop();
                })(r, o),
              1 === r.length && (n[t] = r[0]),
              void 0 !== n.removeListener && this.emit("removeListener", t, a || e);
          }
          return this;
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.removeAllListeners = function (t) {
          var e, r, n;
          if (void 0 === (r = this._events)) return this;
          if (void 0 === r.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)), (this._eventsCount = 0))
                : void 0 !== r[t] && (0 == --this._eventsCount ? (this._events = Object.create(null)) : delete r[t]),
              this
            );
          if (0 === arguments.length) {
            var o,
              i = Object.keys(r);
            for (n = 0; n < i.length; ++n) "removeListener" !== (o = i[n]) && this.removeAllListeners(o);
            return this.removeAllListeners("removeListener"), (this._events = Object.create(null)), (this._eventsCount = 0), this;
          }
          if ("function" == typeof (e = r[t])) this.removeListener(t, e);
          else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
          return this;
        }),
        (a.prototype.listeners = function (t) {
          return h(this, t, !0);
        }),
        (a.prototype.rawListeners = function (t) {
          return h(this, t, !1);
        }),
        (a.listenerCount = function (t, e) {
          return "function" == typeof t.listenerCount ? t.listenerCount(e) : d.call(t, e);
        }),
        (a.prototype.listenerCount = d),
        (a.prototype.eventNames = function () {
          return this._eventsCount > 0 ? r(this._events) : [];
        });
    }),
    i.register("7IjhS", function (t, e) {
      var n,
        o = i("jhCkN");
      (t.exports = x), (x.ReadableState = O);
      i("ecAUU").EventEmitter;
      var a = function (t, e) {
          return t.listeners(e).length;
        },
        s = i("fzMGb"),
        u = i("l6ARn").Buffer,
        c =
          (void 0 !== r ? r : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function () {};
      var l,
        f = i("8RZ8l");
      l = f && f.debuglog ? f.debuglog("stream") : function () {};
      var p,
        h,
        d,
        y = i("aeLAh"),
        g = i("9NcR7"),
        v = i("lmx01").getHighWaterMark,
        m = i("6JW8w").codes,
        b = m.ERR_INVALID_ARG_TYPE,
        w = m.ERR_STREAM_PUSH_AFTER_EOF,
        _ = m.ERR_METHOD_NOT_IMPLEMENTED,
        E = m.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      i("7wfog")(x, s);
      var S = g.errorOrDestroy,
        A = ["error", "close", "destroy", "pause", "resume"];
      function O(t, e, r) {
        (n = n || i("9mNBC")),
          (t = t || {}),
          "boolean" != typeof r && (r = e instanceof n),
          (this.objectMode = !!t.objectMode),
          r && (this.objectMode = this.objectMode || !!t.readableObjectMode),
          (this.highWaterMark = v(this, t, "readableHighWaterMark", r)),
          (this.buffer = new y()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          t.encoding && (p || (p = i("4GKxS").StringDecoder), (this.decoder = new p(t.encoding)), (this.encoding = t.encoding));
      }
      function x(t) {
        if (((n = n || i("9mNBC")), !(this instanceof x))) return new x(t);
        var e = this instanceof n;
        (this._readableState = new O(t, this, e)),
          (this.readable = !0),
          t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)),
          s.call(this);
      }
      function k(t, e, r, n, o) {
        l("readableAddChunk", e);
        var i,
          a = t._readableState;
        if (null === e)
          (a.reading = !1),
            (function (t, e) {
              if ((l("onEofChunk"), e.ended)) return;
              if (e.decoder) {
                var r = e.decoder.end();
                r && r.length && (e.buffer.push(r), (e.length += e.objectMode ? 1 : r.length));
              }
              (e.ended = !0), e.sync ? T(t) : ((e.needReadable = !1), e.emittedReadable || ((e.emittedReadable = !0), I(t)));
            })(t, a);
        else if (
          (o ||
            (i = (function (t, e) {
              var r;
              (n = e),
                u.isBuffer(n) ||
                  n instanceof c ||
                  "string" == typeof e ||
                  void 0 === e ||
                  t.objectMode ||
                  (r = new b("chunk", ["string", "Buffer", "Uint8Array"], e));
              var n;
              return r;
            })(a, e)),
          i)
        )
          S(t, i);
        else if (a.objectMode || (e && e.length > 0))
          if (
            ("string" == typeof e ||
              a.objectMode ||
              Object.getPrototypeOf(e) === u.prototype ||
              (e = (function (t) {
                return u.from(t);
              })(e)),
            n)
          )
            a.endEmitted ? S(t, new E()) : j(t, a, e, !0);
          else if (a.ended) S(t, new w());
          else {
            if (a.destroyed) return !1;
            (a.reading = !1),
              a.decoder && !r ? ((e = a.decoder.write(e)), a.objectMode || 0 !== e.length ? j(t, a, e, !1) : U(t, a)) : j(t, a, e, !1);
          }
        else n || ((a.reading = !1), U(t, a));
        return !a.ended && (a.length < a.highWaterMark || 0 === a.length);
      }
      function j(t, e, r, n) {
        e.flowing && 0 === e.length && !e.sync
          ? ((e.awaitDrain = 0), t.emit("data", r))
          : ((e.length += e.objectMode ? 1 : r.length), n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && T(t)),
          U(t, e);
      }
      Object.defineProperty(x.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return void 0 !== this._readableState && this._readableState.destroyed;
        },
        set: function (t) {
          this._readableState && (this._readableState.destroyed = t);
        }
      }),
        (x.prototype.destroy = g.destroy),
        (x.prototype._undestroy = g.undestroy),
        (x.prototype._destroy = function (t, e) {
          e(t);
        }),
        (x.prototype.push = function (t, e) {
          var r,
            n = this._readableState;
          return (
            n.objectMode
              ? (r = !0)
              : "string" == typeof t && ((e = e || n.defaultEncoding) !== n.encoding && ((t = u.from(t, e)), (e = "")), (r = !0)),
            k(this, t, e, !1, r)
          );
        }),
        (x.prototype.unshift = function (t) {
          return k(this, t, null, !0, !1);
        }),
        (x.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (x.prototype.setEncoding = function (t) {
          p || (p = i("4GKxS").StringDecoder);
          var e = new p(t);
          (this._readableState.decoder = e), (this._readableState.encoding = this._readableState.decoder.encoding);
          for (var r = this._readableState.buffer.head, n = ""; null !== r; ) (n += e.write(r.data)), (r = r.next);
          return (
            this._readableState.buffer.clear(),
            "" !== n && this._readableState.buffer.push(n),
            (this._readableState.length = n.length),
            this
          );
        });
      var P = 1073741824;
      function R(t, e) {
        return t <= 0 || (0 === e.length && e.ended)
          ? 0
          : e.objectMode
          ? 1
          : t != t
          ? e.flowing && e.length
            ? e.buffer.head.data.length
            : e.length
          : (t > e.highWaterMark &&
              (e.highWaterMark = (function (t) {
                return t >= P ? (t = P) : (t--, (t |= t >>> 1), (t |= t >>> 2), (t |= t >>> 4), (t |= t >>> 8), (t |= t >>> 16), t++), t;
              })(t)),
            t <= e.length ? t : e.ended ? e.length : ((e.needReadable = !0), 0));
      }
      function T(t) {
        var e = t._readableState;
        l("emitReadable", e.needReadable, e.emittedReadable),
          (e.needReadable = !1),
          e.emittedReadable || (l("emitReadable", e.flowing), (e.emittedReadable = !0), o.nextTick(I, t));
      }
      function I(t) {
        var e = t._readableState;
        l("emitReadable_", e.destroyed, e.length, e.ended),
          e.destroyed || (!e.length && !e.ended) || (t.emit("readable"), (e.emittedReadable = !1)),
          (e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark),
          M(t);
      }
      function U(t, e) {
        e.readingMore || ((e.readingMore = !0), o.nextTick(D, t, e));
      }
      function D(t, e) {
        for (; !e.reading && !e.ended && (e.length < e.highWaterMark || (e.flowing && 0 === e.length)); ) {
          var r = e.length;
          if ((l("maybeReadMore read 0"), t.read(0), r === e.length)) break;
        }
        e.readingMore = !1;
      }
      function F(t) {
        var e = t._readableState;
        (e.readableListening = t.listenerCount("readable") > 0),
          e.resumeScheduled && !e.paused ? (e.flowing = !0) : t.listenerCount("data") > 0 && t.resume();
      }
      function N(t) {
        l("readable nexttick read 0"), t.read(0);
      }
      function L(t, e) {
        l("resume", e.reading),
          e.reading || t.read(0),
          (e.resumeScheduled = !1),
          t.emit("resume"),
          M(t),
          e.flowing && !e.reading && t.read(0);
      }
      function M(t) {
        var e = t._readableState;
        for (l("flow", e.flowing); e.flowing && null !== t.read(); );
      }
      function C(t, e) {
        return 0 === e.length
          ? null
          : (e.objectMode
              ? (r = e.buffer.shift())
              : !t || t >= e.length
              ? ((r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length)),
                e.buffer.clear())
              : (r = e.buffer.consume(t, e.decoder)),
            r);
        var r;
      }
      function B(t) {
        var e = t._readableState;
        l("endReadable", e.endEmitted), e.endEmitted || ((e.ended = !0), o.nextTick(q, e, t));
      }
      function q(t, e) {
        if (
          (l("endReadableNT", t.endEmitted, t.length),
          !t.endEmitted && 0 === t.length && ((t.endEmitted = !0), (e.readable = !1), e.emit("end"), t.autoDestroy))
        ) {
          var r = e._writableState;
          (!r || (r.autoDestroy && r.finished)) && e.destroy();
        }
      }
      function $(t, e) {
        for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
        return -1;
      }
      (x.prototype.read = function (t) {
        l("read", t), (t = parseInt(t, 10));
        var e = this._readableState,
          r = t;
        if (
          (0 !== t && (e.emittedReadable = !1),
          0 === t && e.needReadable && ((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended))
        )
          return l("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? B(this) : T(this), null;
        if (0 === (t = R(t, e)) && e.ended) return 0 === e.length && B(this), null;
        var n,
          o = e.needReadable;
        return (
          l("need readable", o),
          (0 === e.length || e.length - t < e.highWaterMark) && l("length less than watermark", (o = !0)),
          e.ended || e.reading
            ? l("reading or ended", (o = !1))
            : o &&
              (l("do read"),
              (e.reading = !0),
              (e.sync = !0),
              0 === e.length && (e.needReadable = !0),
              this._read(e.highWaterMark),
              (e.sync = !1),
              e.reading || (t = R(r, e))),
          null === (n = t > 0 ? C(t, e) : null)
            ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
            : ((e.length -= t), (e.awaitDrain = 0)),
          0 === e.length && (e.ended || (e.needReadable = !0), r !== t && e.ended && B(this)),
          null !== n && this.emit("data", n),
          n
        );
      }),
        (x.prototype._read = function (t) {
          S(this, new _("_read()"));
        }),
        (x.prototype.pipe = function (t, e) {
          var r = this,
            n = this._readableState;
          switch (n.pipesCount) {
            case 0:
              n.pipes = t;
              break;
            case 1:
              n.pipes = [n.pipes, t];
              break;
            default:
              n.pipes.push(t);
          }
          (n.pipesCount += 1), l("pipe count=%d opts=%j", n.pipesCount, e);
          var i = (!e || !1 !== e.end) && t !== o.stdout && t !== o.stderr ? u : g;
          function s(e, o) {
            l("onunpipe"),
              e === r &&
                o &&
                !1 === o.hasUnpiped &&
                ((o.hasUnpiped = !0),
                l("cleanup"),
                t.removeListener("close", d),
                t.removeListener("finish", y),
                t.removeListener("drain", c),
                t.removeListener("error", h),
                t.removeListener("unpipe", s),
                r.removeListener("end", u),
                r.removeListener("end", g),
                r.removeListener("data", p),
                (f = !0),
                !n.awaitDrain || (t._writableState && !t._writableState.needDrain) || c());
          }
          function u() {
            l("onend"), t.end();
          }
          n.endEmitted ? o.nextTick(i) : r.once("end", i), t.on("unpipe", s);
          var c = (function (t) {
            return function () {
              var e = t._readableState;
              l("pipeOnDrain", e.awaitDrain),
                e.awaitDrain && e.awaitDrain--,
                0 === e.awaitDrain && a(t, "data") && ((e.flowing = !0), M(t));
            };
          })(r);
          t.on("drain", c);
          var f = !1;
          function p(e) {
            l("ondata");
            var o = t.write(e);
            l("dest.write", o),
              !1 === o &&
                (((1 === n.pipesCount && n.pipes === t) || (n.pipesCount > 1 && -1 !== $(n.pipes, t))) &&
                  !f &&
                  (l("false write response, pause", n.awaitDrain), n.awaitDrain++),
                r.pause());
          }
          function h(e) {
            l("onerror", e), g(), t.removeListener("error", h), 0 === a(t, "error") && S(t, e);
          }
          function d() {
            t.removeListener("finish", y), g();
          }
          function y() {
            l("onfinish"), t.removeListener("close", d), g();
          }
          function g() {
            l("unpipe"), r.unpipe(t);
          }
          return (
            r.on("data", p),
            (function (t, e, r) {
              if ("function" == typeof t.prependListener) return t.prependListener(e, r);
              t._events && t._events[e]
                ? Array.isArray(t._events[e])
                  ? t._events[e].unshift(r)
                  : (t._events[e] = [r, t._events[e]])
                : t.on(e, r);
            })(t, "error", h),
            t.once("close", d),
            t.once("finish", y),
            t.emit("pipe", r),
            n.flowing || (l("pipe resume"), r.resume()),
            t
          );
        }),
        (x.prototype.unpipe = function (t) {
          var e = this._readableState,
            r = { hasUnpiped: !1 };
          if (0 === e.pipesCount) return this;
          if (1 === e.pipesCount)
            return (
              (t && t !== e.pipes) ||
                (t || (t = e.pipes), (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1), t && t.emit("unpipe", this, r)),
              this
            );
          if (!t) {
            var n = e.pipes,
              o = e.pipesCount;
            (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
            for (var i = 0; i < o; i++) n[i].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var a = $(e.pipes, t);
          return (
            -1 === a ||
              (e.pipes.splice(a, 1), (e.pipesCount -= 1), 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r)),
            this
          );
        }),
        (x.prototype.on = function (t, e) {
          var r = s.prototype.on.call(this, t, e),
            n = this._readableState;
          return (
            "data" === t
              ? ((n.readableListening = this.listenerCount("readable") > 0), !1 !== n.flowing && this.resume())
              : "readable" === t &&
                (n.endEmitted ||
                  n.readableListening ||
                  ((n.readableListening = n.needReadable = !0),
                  (n.flowing = !1),
                  (n.emittedReadable = !1),
                  l("on readable", n.length, n.reading),
                  n.length ? T(this) : n.reading || o.nextTick(N, this))),
            r
          );
        }),
        (x.prototype.addListener = x.prototype.on),
        (x.prototype.removeListener = function (t, e) {
          var r = s.prototype.removeListener.call(this, t, e);
          return "readable" === t && o.nextTick(F, this), r;
        }),
        (x.prototype.removeAllListeners = function (t) {
          var e = s.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== t && void 0 !== t) || o.nextTick(F, this), e;
        }),
        (x.prototype.resume = function () {
          var t = this._readableState;
          return (
            t.flowing ||
              (l("resume"),
              (t.flowing = !t.readableListening),
              (function (t, e) {
                e.resumeScheduled || ((e.resumeScheduled = !0), o.nextTick(L, t, e));
              })(this, t)),
            (t.paused = !1),
            this
          );
        }),
        (x.prototype.pause = function () {
          return (
            l("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing && (l("pause"), (this._readableState.flowing = !1), this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (x.prototype.wrap = function (t) {
          var e = this,
            r = this._readableState,
            n = !1;
          for (var o in (t.on("end", function () {
            if ((l("wrapped end"), r.decoder && !r.ended)) {
              var t = r.decoder.end();
              t && t.length && e.push(t);
            }
            e.push(null);
          }),
          t.on("data", function (o) {
            (l("wrapped data"), r.decoder && (o = r.decoder.write(o)), r.objectMode && null == o) ||
              ((r.objectMode || (o && o.length)) && (e.push(o) || ((n = !0), t.pause())));
          }),
          t))
            void 0 === this[o] &&
              "function" == typeof t[o] &&
              (this[o] = (function (e) {
                return function () {
                  return t[e].apply(t, arguments);
                };
              })(o));
          for (var i = 0; i < A.length; i++) t.on(A[i], this.emit.bind(this, A[i]));
          return (
            (this._read = function (e) {
              l("wrapped _read", e), n && ((n = !1), t.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (x.prototype[Symbol.asyncIterator] = function () {
            return void 0 === h && (h = i("6JrYP")), h(this);
          }),
        Object.defineProperty(x.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          }
        }),
        Object.defineProperty(x.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          }
        }),
        Object.defineProperty(x.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (t) {
            this._readableState && (this._readableState.flowing = t);
          }
        }),
        (x._fromList = C),
        Object.defineProperty(x.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          }
        }),
        "function" == typeof Symbol &&
          (x.from = function (t, e) {
            return void 0 === d && (d = i("gKFpq")), d(x, t, e);
          });
    }),
    i.register("fzMGb", function (t, e) {
      t.exports = i("ecAUU").EventEmitter;
    }),
    i.register("8RZ8l", function (t, e) {}),
    i.register("aeLAh", function (t, e) {
      "use strict";
      function r(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? r(Object(n), !0).forEach(function (e) {
                o(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : r(Object(n)).forEach(function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              });
        }
        return t;
      }
      function o(t, e, r) {
        return (e = s(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
      }
      function a(t, e) {
        for (var r = 0; r < e.length; r++) {
          var n = e[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(t, s(n.key), n);
        }
      }
      function s(t) {
        var e = (function (t, e) {
          if ("object" != typeof t || null === t) return t;
          var r = t[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(t, e || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === e ? String : Number)(t);
        })(t, "string");
        return "symbol" == typeof e ? e : String(e);
      }
      var u = i("l6ARn").Buffer,
        c = i("8RZ8l").inspect,
        l = (c && c.custom) || "inspect";
      t.exports = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.head = null),
            (this.tail = null),
            (this.length = 0);
        }
        var e, r, o;
        return (
          (e = t),
          (r = [
            {
              key: "push",
              value: function (t) {
                var e = { data: t, next: null };
                this.length > 0 ? (this.tail.next = e) : (this.head = e), (this.tail = e), ++this.length;
              }
            },
            {
              key: "unshift",
              value: function (t) {
                var e = { data: t, next: this.head };
                0 === this.length && (this.tail = e), (this.head = e), ++this.length;
              }
            },
            {
              key: "shift",
              value: function () {
                if (0 !== this.length) {
                  var t = this.head.data;
                  return 1 === this.length ? (this.head = this.tail = null) : (this.head = this.head.next), --this.length, t;
                }
              }
            },
            {
              key: "clear",
              value: function () {
                (this.head = this.tail = null), (this.length = 0);
              }
            },
            {
              key: "join",
              value: function (t) {
                if (0 === this.length) return "";
                for (var e = this.head, r = "" + e.data; (e = e.next); ) r += t + e.data;
                return r;
              }
            },
            {
              key: "concat",
              value: function (t) {
                if (0 === this.length) return u.alloc(0);
                for (var e, r, n, o = u.allocUnsafe(t >>> 0), i = this.head, a = 0; i; )
                  (e = i.data), (r = o), (n = a), u.prototype.copy.call(e, r, n), (a += i.data.length), (i = i.next);
                return o;
              }
            },
            {
              key: "consume",
              value: function (t, e) {
                var r;
                return (
                  t < this.head.data.length
                    ? ((r = this.head.data.slice(0, t)), (this.head.data = this.head.data.slice(t)))
                    : (r = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t)),
                  r
                );
              }
            },
            {
              key: "first",
              value: function () {
                return this.head.data;
              }
            },
            {
              key: "_getString",
              value: function (t) {
                var e = this.head,
                  r = 1,
                  n = e.data;
                for (t -= n.length; (e = e.next); ) {
                  var o = e.data,
                    i = t > o.length ? o.length : t;
                  if ((i === o.length ? (n += o) : (n += o.slice(0, t)), 0 == (t -= i))) {
                    i === o.length
                      ? (++r, e.next ? (this.head = e.next) : (this.head = this.tail = null))
                      : ((this.head = e), (e.data = o.slice(i)));
                    break;
                  }
                  ++r;
                }
                return (this.length -= r), n;
              }
            },
            {
              key: "_getBuffer",
              value: function (t) {
                var e = u.allocUnsafe(t),
                  r = this.head,
                  n = 1;
                for (r.data.copy(e), t -= r.data.length; (r = r.next); ) {
                  var o = r.data,
                    i = t > o.length ? o.length : t;
                  if ((o.copy(e, e.length - t, 0, i), 0 == (t -= i))) {
                    i === o.length
                      ? (++n, r.next ? (this.head = r.next) : (this.head = this.tail = null))
                      : ((this.head = r), (r.data = o.slice(i)));
                    break;
                  }
                  ++n;
                }
                return (this.length -= n), e;
              }
            },
            {
              key: l,
              value: function (t, e) {
                return c(this, n(n({}, e), {}, { depth: 0, customInspect: !1 }));
              }
            }
          ]) && a(e.prototype, r),
          o && a(e, o),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t
        );
      })();
    }),
    i.register("9NcR7", function (t, e) {
      var r = i("jhCkN");
      function n(t, e) {
        a(t, e), o(t);
      }
      function o(t) {
        (t._writableState && !t._writableState.emitClose) || (t._readableState && !t._readableState.emitClose) || t.emit("close");
      }
      function a(t, e) {
        t.emit("error", e);
      }
      t.exports = {
        destroy: function (t, e) {
          var i = this,
            s = this._readableState && this._readableState.destroyed,
            u = this._writableState && this._writableState.destroyed;
          return s || u
            ? (e
                ? e(t)
                : t &&
                  (this._writableState
                    ? this._writableState.errorEmitted || ((this._writableState.errorEmitted = !0), r.nextTick(a, this, t))
                    : r.nextTick(a, this, t)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(t || null, function (t) {
                !e && t
                  ? i._writableState
                    ? i._writableState.errorEmitted
                      ? r.nextTick(o, i)
                      : ((i._writableState.errorEmitted = !0), r.nextTick(n, i, t))
                    : r.nextTick(n, i, t)
                  : e
                  ? (r.nextTick(o, i), e(t))
                  : r.nextTick(o, i);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (t, e) {
          var r = t._readableState,
            n = t._writableState;
          (r && r.autoDestroy) || (n && n.autoDestroy) ? t.destroy(e) : t.emit("error", e);
        }
      };
    }),
    i.register("lmx01", function (t, e) {
      "use strict";
      var r = i("6JW8w").codes.ERR_INVALID_OPT_VALUE;
      t.exports = {
        getHighWaterMark: function (t, e, n, o) {
          var i = (function (t, e, r) {
            return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null;
          })(e, o, n);
          if (null != i) {
            if (!isFinite(i) || Math.floor(i) !== i || i < 0) throw new r(o ? n : "highWaterMark", i);
            return Math.floor(i);
          }
          return t.objectMode ? 16 : 16384;
        }
      };
    }),
    i.register("6JW8w", function (e, r) {
      var n;
      t(
        e.exports,
        "codes",
        () => n,
        (t) => (n = t)
      );
      var o = {};
      function i(t, e, r) {
        r || (r = Error);
        var n = (function (t) {
          var r, n;
          function o(r, n, o) {
            return (
              t.call(
                this,
                (function (t, r, n) {
                  return "string" == typeof e ? e : e(t, r, n);
                })(r, n, o)
              ) || this
            );
          }
          return (n = t), ((r = o).prototype = Object.create(n.prototype)), (r.prototype.constructor = r), (r.__proto__ = n), o;
        })(r);
        (n.prototype.name = r.name), (n.prototype.code = t), (o[t] = n);
      }
      function a(t, e) {
        if (Array.isArray(t)) {
          var r = t.length;
          return (
            (t = t.map(function (t) {
              return String(t);
            })),
            r > 2
              ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1]
              : 2 === r
              ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
              : "of ".concat(e, " ").concat(t[0])
          );
        }
        return "of ".concat(e, " ").concat(String(t));
      }
      i(
        "ERR_INVALID_OPT_VALUE",
        function (t, e) {
          return 'The value "' + e + '" is invalid for option "' + t + '"';
        },
        TypeError
      ),
        i(
          "ERR_INVALID_ARG_TYPE",
          function (t, e, r) {
            var n, o, i, s;
            if (
              ("string" == typeof e && ((o = "not "), e.substr(!i || i < 0 ? 0 : +i, o.length) === o)
                ? ((n = "must not be"), (e = e.replace(/^not /, "")))
                : (n = "must be"),
              (function (t, e, r) {
                return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
              })(t, " argument"))
            )
              s = "The ".concat(t, " ").concat(n, " ").concat(a(e, "type"));
            else {
              var u = (function (t, e, r) {
                return "number" != typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r);
              })(t, ".")
                ? "property"
                : "argument";
              s = 'The "'.concat(t, '" ').concat(u, " ").concat(n, " ").concat(a(e, "type"));
            }
            return (s += ". Received type ".concat(typeof r));
          },
          TypeError
        ),
        i("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
        i("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
          return "The " + t + " method is not implemented";
        }),
        i("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
        i("ERR_STREAM_DESTROYED", function (t) {
          return "Cannot call " + t + " after a stream was destroyed";
        }),
        i("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
        i("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
        i("ERR_STREAM_WRITE_AFTER_END", "write after end"),
        i("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError),
        i(
          "ERR_UNKNOWN_ENCODING",
          function (t) {
            return "Unknown encoding: " + t;
          },
          TypeError
        ),
        i("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"),
        (n = o);
    }),
    i.register("9mNBC", function (t, e) {
      var r = i("jhCkN"),
        n =
          Object.keys ||
          function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return e;
          };
      t.exports = l;
      var o = i("7IjhS"),
        a = i("a3kVl");
      i("7wfog")(l, o);
      for (var s = n(a.prototype), u = 0; u < s.length; u++) {
        var c = s[u];
        l.prototype[c] || (l.prototype[c] = a.prototype[c]);
      }
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        o.call(this, t),
          a.call(this, t),
          (this.allowHalfOpen = !0),
          t &&
            (!1 === t.readable && (this.readable = !1),
            !1 === t.writable && (this.writable = !1),
            !1 === t.allowHalfOpen && ((this.allowHalfOpen = !1), this.once("end", f)));
      }
      function f() {
        this._writableState.ended || r.nextTick(p, this);
      }
      function p(t) {
        t.end();
      }
      Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        }
      }),
        Object.defineProperty(l.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          }
        }),
        Object.defineProperty(l.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          }
        }),
        Object.defineProperty(l.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (t) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = t), (this._writableState.destroyed = t));
          }
        });
    }),
    i.register("a3kVl", function (t, e) {
      var n,
        o = i("jhCkN");
      function a(t) {
        var e = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (t, e, r) {
              var n = t.entry;
              t.entry = null;
              for (; n; ) {
                var o = n.callback;
                e.pendingcb--, o(r), (n = n.next);
              }
              e.corkedRequestsFree.next = t;
            })(e, t);
          });
      }
      (t.exports = x), (x.WritableState = O);
      var s = { deprecate: i("b8iXM") },
        u = i("fzMGb"),
        c = i("l6ARn").Buffer,
        l =
          (void 0 !== r ? r : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function () {};
      var f,
        p = i("9NcR7"),
        h = i("lmx01").getHighWaterMark,
        d = i("6JW8w").codes,
        y = d.ERR_INVALID_ARG_TYPE,
        g = d.ERR_METHOD_NOT_IMPLEMENTED,
        v = d.ERR_MULTIPLE_CALLBACK,
        m = d.ERR_STREAM_CANNOT_PIPE,
        b = d.ERR_STREAM_DESTROYED,
        w = d.ERR_STREAM_NULL_VALUES,
        _ = d.ERR_STREAM_WRITE_AFTER_END,
        E = d.ERR_UNKNOWN_ENCODING,
        S = p.errorOrDestroy;
      function A() {}
      function O(t, e, r) {
        (n = n || i("9mNBC")),
          (t = t || {}),
          "boolean" != typeof r && (r = e instanceof n),
          (this.objectMode = !!t.objectMode),
          r && (this.objectMode = this.objectMode || !!t.writableObjectMode),
          (this.highWaterMark = h(this, t, "writableHighWaterMark", r)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var s = !1 === t.decodeStrings;
        (this.decodeStrings = !s),
          (this.defaultEncoding = t.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (t) {
            !(function (t, e) {
              var r = t._writableState,
                n = r.sync,
                i = r.writecb;
              if ("function" != typeof i) throw new v();
              if (
                ((function (t) {
                  (t.writing = !1), (t.writecb = null), (t.length -= t.writelen), (t.writelen = 0);
                })(r),
                e)
              )
                !(function (t, e, r, n, i) {
                  --e.pendingcb,
                    r
                      ? (o.nextTick(i, n), o.nextTick(I, t, e), (t._writableState.errorEmitted = !0), S(t, n))
                      : (i(n), (t._writableState.errorEmitted = !0), S(t, n), I(t, e));
                })(t, r, n, e, i);
              else {
                var a = R(r) || t.destroyed;
                a || r.corked || r.bufferProcessing || !r.bufferedRequest || P(t, r), n ? o.nextTick(j, t, r, a, i) : j(t, r, a, i);
              }
            })(e, t);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== t.emitClose),
          (this.autoDestroy = !!t.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new a(this));
      }
      function x(t) {
        var e = this instanceof (n = n || i("9mNBC"));
        if (!e && !f.call(x, this)) return new x(t);
        (this._writableState = new O(t, this, e)),
          (this.writable = !0),
          t &&
            ("function" == typeof t.write && (this._write = t.write),
            "function" == typeof t.writev && (this._writev = t.writev),
            "function" == typeof t.destroy && (this._destroy = t.destroy),
            "function" == typeof t.final && (this._final = t.final)),
          u.call(this);
      }
      function k(t, e, r, n, o, i, a) {
        (e.writelen = n),
          (e.writecb = a),
          (e.writing = !0),
          (e.sync = !0),
          e.destroyed ? e.onwrite(new b("write")) : r ? t._writev(o, e.onwrite) : t._write(o, i, e.onwrite),
          (e.sync = !1);
      }
      function j(t, e, r, n) {
        r ||
          (function (t, e) {
            0 === e.length && e.needDrain && ((e.needDrain = !1), t.emit("drain"));
          })(t, e),
          e.pendingcb--,
          n(),
          I(t, e);
      }
      function P(t, e) {
        e.bufferProcessing = !0;
        var r = e.bufferedRequest;
        if (t._writev && r && r.next) {
          var n = e.bufferedRequestCount,
            o = new Array(n),
            i = e.corkedRequestsFree;
          i.entry = r;
          for (var s = 0, u = !0; r; ) (o[s] = r), r.isBuf || (u = !1), (r = r.next), (s += 1);
          (o.allBuffers = u),
            k(t, e, !0, e.length, o, "", i.finish),
            e.pendingcb++,
            (e.lastBufferedRequest = null),
            i.next ? ((e.corkedRequestsFree = i.next), (i.next = null)) : (e.corkedRequestsFree = new a(e)),
            (e.bufferedRequestCount = 0);
        } else {
          for (; r; ) {
            var c = r.chunk,
              l = r.encoding,
              f = r.callback;
            if ((k(t, e, !1, e.objectMode ? 1 : c.length, c, l, f), (r = r.next), e.bufferedRequestCount--, e.writing)) break;
          }
          null === r && (e.lastBufferedRequest = null);
        }
        (e.bufferedRequest = r), (e.bufferProcessing = !1);
      }
      function R(t) {
        return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
      }
      function T(t, e) {
        t._final(function (r) {
          e.pendingcb--, r && S(t, r), (e.prefinished = !0), t.emit("prefinish"), I(t, e);
        });
      }
      function I(t, e) {
        var r = R(e);
        if (
          r &&
          ((function (t, e) {
            e.prefinished ||
              e.finalCalled ||
              ("function" != typeof t._final || e.destroyed
                ? ((e.prefinished = !0), t.emit("prefinish"))
                : (e.pendingcb++, (e.finalCalled = !0), o.nextTick(T, t, e)));
          })(t, e),
          0 === e.pendingcb && ((e.finished = !0), t.emit("finish"), e.autoDestroy))
        ) {
          var n = t._readableState;
          (!n || (n.autoDestroy && n.endEmitted)) && t.destroy();
        }
        return r;
      }
      i("7wfog")(x, u),
        (O.prototype.getBuffer = function () {
          for (var t = this.bufferedRequest, e = []; t; ) e.push(t), (t = t.next);
          return e;
        }),
        (function () {
          try {
            Object.defineProperty(O.prototype, "buffer", {
              get: s.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              )
            });
          } catch (t) {}
        })(),
        "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((f = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(x, Symbol.hasInstance, {
              value: function (t) {
                return !!f.call(this, t) || (this === x && t && t._writableState instanceof O);
              }
            }))
          : (f = function (t) {
              return t instanceof this;
            }),
        (x.prototype.pipe = function () {
          S(this, new m());
        }),
        (x.prototype.write = function (t, e, r) {
          var n,
            i = this._writableState,
            a = !1,
            s = !i.objectMode && ((n = t), c.isBuffer(n) || n instanceof l);
          return (
            s &&
              !c.isBuffer(t) &&
              (t = (function (t) {
                return c.from(t);
              })(t)),
            "function" == typeof e && ((r = e), (e = null)),
            s ? (e = "buffer") : e || (e = i.defaultEncoding),
            "function" != typeof r && (r = A),
            i.ending
              ? (function (t, e) {
                  var r = new _();
                  S(t, r), o.nextTick(e, r);
                })(this, r)
              : (s ||
                  (function (t, e, r, n) {
                    var i;
                    return (
                      null === r ? (i = new w()) : "string" == typeof r || e.objectMode || (i = new y("chunk", ["string", "Buffer"], r)),
                      !i || (S(t, i), o.nextTick(n, i), !1)
                    );
                  })(this, i, t, r)) &&
                (i.pendingcb++,
                (a = (function (t, e, r, n, o, i) {
                  if (!r) {
                    var a = (function (t, e, r) {
                      t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = c.from(e, r));
                      return e;
                    })(e, n, o);
                    n !== a && ((r = !0), (o = "buffer"), (n = a));
                  }
                  var s = e.objectMode ? 1 : n.length;
                  e.length += s;
                  var u = e.length < e.highWaterMark;
                  u || (e.needDrain = !0);
                  if (e.writing || e.corked) {
                    var l = e.lastBufferedRequest;
                    (e.lastBufferedRequest = { chunk: n, encoding: o, isBuf: r, callback: i, next: null }),
                      l ? (l.next = e.lastBufferedRequest) : (e.bufferedRequest = e.lastBufferedRequest),
                      (e.bufferedRequestCount += 1);
                  } else k(t, e, !1, s, n, o, i);
                  return u;
                })(this, i, s, t, e, r))),
            a
          );
        }),
        (x.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (x.prototype.uncork = function () {
          var t = this._writableState;
          t.corked && (t.corked--, t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || P(this, t));
        }),
        (x.prototype.setDefaultEncoding = function (t) {
          if (
            ("string" == typeof t && (t = t.toLowerCase()),
            !(
              ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf(
                (t + "").toLowerCase()
              ) > -1
            ))
          )
            throw new E(t);
          return (this._writableState.defaultEncoding = t), this;
        }),
        Object.defineProperty(x.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          }
        }),
        Object.defineProperty(x.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          }
        }),
        (x.prototype._write = function (t, e, r) {
          r(new g("_write()"));
        }),
        (x.prototype._writev = null),
        (x.prototype.end = function (t, e, r) {
          var n = this._writableState;
          return (
            "function" == typeof t ? ((r = t), (t = null), (e = null)) : "function" == typeof e && ((r = e), (e = null)),
            null != t && this.write(t, e),
            n.corked && ((n.corked = 1), this.uncork()),
            n.ending ||
              (function (t, e, r) {
                (e.ending = !0), I(t, e), r && (e.finished ? o.nextTick(r) : t.once("finish", r));
                (e.ended = !0), (t.writable = !1);
              })(this, n, r),
            this
          );
        }),
        Object.defineProperty(x.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          }
        }),
        Object.defineProperty(x.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return void 0 !== this._writableState && this._writableState.destroyed;
          },
          set: function (t) {
            this._writableState && (this._writableState.destroyed = t);
          }
        }),
        (x.prototype.destroy = p.destroy),
        (x.prototype._undestroy = p.undestroy),
        (x.prototype._destroy = function (t, e) {
          e(t);
        });
    }),
    i.register("b8iXM", function (t, e) {
      function n(t) {
        try {
          if (!r.localStorage) return !1;
        } catch (t) {
          return !1;
        }
        var e = r.localStorage[t];
        return null != e && "true" === String(e).toLowerCase();
      }
      t.exports = function (t, e) {
        if (n("noDeprecation")) return t;
        var r = !1;
        return function () {
          if (!r) {
            if (n("throwDeprecation")) throw new Error(e);
            n("traceDeprecation") ? console.trace(e) : console.warn(e), (r = !0);
          }
          return t.apply(this, arguments);
        };
      };
    }),
    i.register("4GKxS", function (e, r) {
      var n;
      t(
        e.exports,
        "StringDecoder",
        () => n,
        (t) => (n = t)
      );
      var o = i("81SCT").Buffer,
        a =
          o.isEncoding ||
          function (t) {
            switch ((t = "" + t) && t.toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
              case "raw":
                return !0;
              default:
                return !1;
            }
          };
      function s(t) {
        var e;
        switch (
          ((this.encoding = (function (t) {
            var e = (function (t) {
              if (!t) return "utf8";
              for (var e; ; )
                switch (t) {
                  case "utf8":
                  case "utf-8":
                    return "utf8";
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return "utf16le";
                  case "latin1":
                  case "binary":
                    return "latin1";
                  case "base64":
                  case "ascii":
                  case "hex":
                    return t;
                  default:
                    if (e) return;
                    (t = ("" + t).toLowerCase()), (e = !0);
                }
            })(t);
            if ("string" != typeof e && (o.isEncoding === a || !a(t))) throw new Error("Unknown encoding: " + t);
            return e || t;
          })(t)),
          this.encoding)
        ) {
          case "utf16le":
            (this.text = l), (this.end = f), (e = 4);
            break;
          case "utf8":
            (this.fillLast = c), (e = 4);
            break;
          case "base64":
            (this.text = p), (this.end = h), (e = 3);
            break;
          default:
            return (this.write = d), void (this.end = y);
        }
        (this.lastNeed = 0), (this.lastTotal = 0), (this.lastChar = o.allocUnsafe(e));
      }
      function u(t) {
        return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
      }
      function c(t) {
        var e = this.lastTotal - this.lastNeed,
          r = (function (t, e, r) {
            if (128 != (192 & e[0])) return (t.lastNeed = 0), "�";
            if (t.lastNeed > 1 && e.length > 1) {
              if (128 != (192 & e[1])) return (t.lastNeed = 1), "�";
              if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return (t.lastNeed = 2), "�";
            }
          })(this, t);
        return void 0 !== r
          ? r
          : this.lastNeed <= t.length
          ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal))
          : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length));
      }
      function l(t, e) {
        if ((t.length - e) % 2 == 0) {
          var r = t.toString("utf16le", e);
          if (r) {
            var n = r.charCodeAt(r.length - 1);
            if (n >= 55296 && n <= 56319)
              return (
                (this.lastNeed = 2),
                (this.lastTotal = 4),
                (this.lastChar[0] = t[t.length - 2]),
                (this.lastChar[1] = t[t.length - 1]),
                r.slice(0, -1)
              );
          }
          return r;
        }
        return (this.lastNeed = 1), (this.lastTotal = 2), (this.lastChar[0] = t[t.length - 1]), t.toString("utf16le", e, t.length - 1);
      }
      function f(t) {
        var e = t && t.length ? this.write(t) : "";
        if (this.lastNeed) {
          var r = this.lastTotal - this.lastNeed;
          return e + this.lastChar.toString("utf16le", 0, r);
        }
        return e;
      }
      function p(t, e) {
        var r = (t.length - e) % 3;
        return 0 === r
          ? t.toString("base64", e)
          : ((this.lastNeed = 3 - r),
            (this.lastTotal = 3),
            1 === r ? (this.lastChar[0] = t[t.length - 1]) : ((this.lastChar[0] = t[t.length - 2]), (this.lastChar[1] = t[t.length - 1])),
            t.toString("base64", e, t.length - r));
      }
      function h(t) {
        var e = t && t.length ? this.write(t) : "";
        return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
      }
      function d(t) {
        return t.toString(this.encoding);
      }
      function y(t) {
        return t && t.length ? this.write(t) : "";
      }
      (n = s),
        (s.prototype.write = function (t) {
          if (0 === t.length) return "";
          var e, r;
          if (this.lastNeed) {
            if (void 0 === (e = this.fillLast(t))) return "";
            (r = this.lastNeed), (this.lastNeed = 0);
          } else r = 0;
          return r < t.length ? (e ? e + this.text(t, r) : this.text(t, r)) : e || "";
        }),
        (s.prototype.end = function (t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed ? e + "�" : e;
        }),
        (s.prototype.text = function (t, e) {
          var r = (function (t, e, r) {
            var n = e.length - 1;
            if (n < r) return 0;
            var o = u(e[n]);
            if (o >= 0) return o > 0 && (t.lastNeed = o - 1), o;
            if (--n < r || -2 === o) return 0;
            if (((o = u(e[n])), o >= 0)) return o > 0 && (t.lastNeed = o - 2), o;
            if (--n < r || -2 === o) return 0;
            if (((o = u(e[n])), o >= 0)) return o > 0 && (2 === o ? (o = 0) : (t.lastNeed = o - 3)), o;
            return 0;
          })(this, t, e);
          if (!this.lastNeed) return t.toString("utf8", e);
          this.lastTotal = r;
          var n = t.length - (r - this.lastNeed);
          return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
        }),
        (s.prototype.fillLast = function (t) {
          if (this.lastNeed <= t.length)
            return (
              t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal)
            );
          t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), (this.lastNeed -= t.length);
        });
    }),
    i.register("81SCT", function (t, e) {
      /*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
      var r = i("l6ARn"),
        n = r.Buffer;
      function o(t, e) {
        for (var r in t) e[r] = t[r];
      }
      function a(t, e, r) {
        return n(t, e, r);
      }
      n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? (t.exports = r) : (o(r, t.exports), (t.exports.Buffer = a)),
        (a.prototype = Object.create(n.prototype)),
        o(n, a),
        (a.from = function (t, e, r) {
          if ("number" == typeof t) throw new TypeError("Argument must not be a number");
          return n(t, e, r);
        }),
        (a.alloc = function (t, e, r) {
          if ("number" != typeof t) throw new TypeError("Argument must be a number");
          var o = n(t);
          return void 0 !== e ? ("string" == typeof r ? o.fill(e, r) : o.fill(e)) : o.fill(0), o;
        }),
        (a.allocUnsafe = function (t) {
          if ("number" != typeof t) throw new TypeError("Argument must be a number");
          return n(t);
        }),
        (a.allocUnsafeSlow = function (t) {
          if ("number" != typeof t) throw new TypeError("Argument must be a number");
          return r.SlowBuffer(t);
        });
    }),
    i.register("6JrYP", function (t, e) {
      var r,
        n = i("jhCkN");
      function o(t, e, r) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" != typeof t || null === t) return t;
              var r = t[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(t, e || "default");
                if ("object" != typeof n) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === e ? String : Number)(t);
            })(t, "string");
            return "symbol" == typeof e ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = r),
          t
        );
      }
      var a = i("dCl4X"),
        s = Symbol("lastResolve"),
        u = Symbol("lastReject"),
        c = Symbol("error"),
        l = Symbol("ended"),
        f = Symbol("lastPromise"),
        p = Symbol("handlePromise"),
        h = Symbol("stream");
      function d(t, e) {
        return { value: t, done: e };
      }
      function y(t) {
        var e = t[s];
        if (null !== e) {
          var r = t[h].read();
          null !== r && ((t[f] = null), (t[s] = null), (t[u] = null), e(d(r, !1)));
        }
      }
      function g(t) {
        n.nextTick(y, t);
      }
      var v = Object.getPrototypeOf(function () {}),
        m = Object.setPrototypeOf(
          (o(
            (r = {
              get stream() {
                return this[h];
              },
              next: function () {
                var t = this,
                  e = this[c];
                if (null !== e) return Promise.reject(e);
                if (this[l]) return Promise.resolve(d(void 0, !0));
                if (this[h].destroyed)
                  return new Promise(function (e, r) {
                    n.nextTick(function () {
                      t[c] ? r(t[c]) : e(d(void 0, !0));
                    });
                  });
                var r,
                  o = this[f];
                if (o)
                  r = new Promise(
                    (function (t, e) {
                      return function (r, n) {
                        t.then(function () {
                          e[l] ? r(d(void 0, !0)) : e[p](r, n);
                        }, n);
                      };
                    })(o, this)
                  );
                else {
                  var i = this[h].read();
                  if (null !== i) return Promise.resolve(d(i, !1));
                  r = new Promise(this[p]);
                }
                return (this[f] = r), r;
              }
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          o(r, "return", function () {
            var t = this;
            return new Promise(function (e, r) {
              t[h].destroy(null, function (t) {
                t ? r(t) : e(d(void 0, !0));
              });
            });
          }),
          r),
          v
        );
      t.exports = function (t) {
        var e,
          r = Object.create(
            m,
            (o((e = {}), h, { value: t, writable: !0 }),
            o(e, s, { value: null, writable: !0 }),
            o(e, u, { value: null, writable: !0 }),
            o(e, c, { value: null, writable: !0 }),
            o(e, l, { value: t._readableState.endEmitted, writable: !0 }),
            o(e, p, {
              value: function (t, e) {
                var n = r[h].read();
                n ? ((r[f] = null), (r[s] = null), (r[u] = null), t(d(n, !1))) : ((r[s] = t), (r[u] = e));
              },
              writable: !0
            }),
            e)
          );
        return (
          (r[f] = null),
          a(t, function (t) {
            if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
              var e = r[u];
              return null !== e && ((r[f] = null), (r[s] = null), (r[u] = null), e(t)), void (r[c] = t);
            }
            var n = r[s];
            null !== n && ((r[f] = null), (r[s] = null), (r[u] = null), n(d(void 0, !0))), (r[l] = !0);
          }),
          t.on("readable", g.bind(null, r)),
          r
        );
      };
    }),
    i.register("dCl4X", function (t, e) {
      "use strict";
      var r = i("6JW8w").codes.ERR_STREAM_PREMATURE_CLOSE;
      function n() {}
      t.exports = function t(e, o, i) {
        if ("function" == typeof o) return t(e, null, o);
        o || (o = {}),
          (i = (function (t) {
            var e = !1;
            return function () {
              if (!e) {
                e = !0;
                for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                t.apply(this, n);
              }
            };
          })(i || n));
        var a = o.readable || (!1 !== o.readable && e.readable),
          s = o.writable || (!1 !== o.writable && e.writable),
          u = function () {
            e.writable || l();
          },
          c = e._writableState && e._writableState.finished,
          l = function () {
            (s = !1), (c = !0), a || i.call(e);
          },
          f = e._readableState && e._readableState.endEmitted,
          p = function () {
            (a = !1), (f = !0), s || i.call(e);
          },
          h = function (t) {
            i.call(e, t);
          },
          d = function () {
            var t;
            return a && !f
              ? ((e._readableState && e._readableState.ended) || (t = new r()), i.call(e, t))
              : s && !c
              ? ((e._writableState && e._writableState.ended) || (t = new r()), i.call(e, t))
              : void 0;
          },
          y = function () {
            e.req.on("finish", l);
          };
        return (
          !(function (t) {
            return t.setHeader && "function" == typeof t.abort;
          })(e)
            ? s && !e._writableState && (e.on("end", u), e.on("close", u))
            : (e.on("complete", l), e.on("abort", d), e.req ? y() : e.on("request", y)),
          e.on("end", p),
          e.on("finish", l),
          !1 !== o.error && e.on("error", h),
          e.on("close", d),
          function () {
            e.removeListener("complete", l),
              e.removeListener("abort", d),
              e.removeListener("request", y),
              e.req && e.req.removeListener("finish", l),
              e.removeListener("end", u),
              e.removeListener("close", u),
              e.removeListener("finish", l),
              e.removeListener("end", p),
              e.removeListener("error", h),
              e.removeListener("close", d);
          }
        );
      };
    }),
    i.register("gKFpq", function (t, e) {
      t.exports = function () {
        throw new Error("Readable.from is not available in the browser");
      };
    }),
    i.register("g81S9", function (t, e) {
      "use strict";
      t.exports = l;
      var r = i("6JW8w").codes,
        n = r.ERR_METHOD_NOT_IMPLEMENTED,
        o = r.ERR_MULTIPLE_CALLBACK,
        a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
        s = r.ERR_TRANSFORM_WITH_LENGTH_0,
        u = i("9mNBC");
      function c(t, e) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (null === n) return this.emit("error", new o());
        (r.writechunk = null), (r.writecb = null), null != e && this.push(e), n(t);
        var i = this._readableState;
        (i.reading = !1), (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }
      function l(t) {
        if (!(this instanceof l)) return new l(t);
        u.call(this, t),
          (this._transformState = {
            afterTransform: c.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
          }),
          (this._readableState.needReadable = !0),
          (this._readableState.sync = !1),
          t &&
            ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)),
          this.on("prefinish", f);
      }
      function f() {
        var t = this;
        "function" != typeof this._flush || this._readableState.destroyed
          ? p(this, null, null)
          : this._flush(function (e, r) {
              p(t, e, r);
            });
      }
      function p(t, e, r) {
        if (e) return t.emit("error", e);
        if ((null != r && t.push(r), t._writableState.length)) throw new s();
        if (t._transformState.transforming) throw new a();
        return t.push(null);
      }
      i("7wfog")(l, u),
        (l.prototype.push = function (t, e) {
          return (this._transformState.needTransform = !1), u.prototype.push.call(this, t, e);
        }),
        (l.prototype._transform = function (t, e, r) {
          r(new n("_transform()"));
        }),
        (l.prototype._write = function (t, e, r) {
          var n = this._transformState;
          if (((n.writecb = r), (n.writechunk = t), (n.writeencoding = e), !n.transforming)) {
            var o = this._readableState;
            (n.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark);
          }
        }),
        (l.prototype._read = function (t) {
          var e = this._transformState;
          null === e.writechunk || e.transforming
            ? (e.needTransform = !0)
            : ((e.transforming = !0), this._transform(e.writechunk, e.writeencoding, e.afterTransform));
        }),
        (l.prototype._destroy = function (t, e) {
          u.prototype._destroy.call(this, t, function (t) {
            e(t);
          });
        });
    }),
    i.register("aDCiR", function (t, e) {
      "use strict";
      t.exports = n;
      var r = i("g81S9");
      function n(t) {
        if (!(this instanceof n)) return new n(t);
        r.call(this, t);
      }
      i("7wfog")(n, r),
        (n.prototype._transform = function (t, e, r) {
          r(null, t);
        });
    }),
    i.register("477Nr", function (t, e) {
      "use strict";
      var r;
      var n = i("6JW8w").codes,
        o = n.ERR_MISSING_ARGS,
        a = n.ERR_STREAM_DESTROYED;
      function s(t) {
        if (t) throw t;
      }
      function u(t) {
        t();
      }
      function c(t, e) {
        return t.pipe(e);
      }
      t.exports = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        var l,
          f = (function (t) {
            return t.length ? ("function" != typeof t[t.length - 1] ? s : t.pop()) : s;
          })(e);
        if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2)) throw new o("streams");
        var p = e.map(function (t, n) {
          var o = n < e.length - 1;
          return (function (t, e, n, o) {
            o = (function (t) {
              var e = !1;
              return function () {
                e || ((e = !0), t.apply(void 0, arguments));
              };
            })(o);
            var s = !1;
            t.on("close", function () {
              s = !0;
            }),
              void 0 === r && (r = i("dCl4X")),
              r(t, { readable: e, writable: n }, function (t) {
                if (t) return o(t);
                (s = !0), o();
              });
            var u = !1;
            return function (e) {
              if (!s && !u)
                return (
                  (u = !0),
                  (function (t) {
                    return t.setHeader && "function" == typeof t.abort;
                  })(t)
                    ? t.abort()
                    : "function" == typeof t.destroy
                    ? t.destroy()
                    : void o(e || new a("pipe"))
                );
            };
          })(t, o, n > 0, function (t) {
            l || (l = t), t && p.forEach(u), o || (p.forEach(u), f(l));
          });
        });
        return e.reduce(c);
      };
    }),
    i.register("eL3Zw", function (e, r) {
      t(e.exports, "default", () => s);
      var n = i("3k2hL");
      class o {
        get(t) {
          return new Promise((e, r) => {
            this.storageArea.get(t, (t) => {
              let n = chrome.runtime.lastError;
              return n ? r(this.formatError(n, "get")) : e(t);
            });
          });
        }
        set(t) {
          return new Promise((e, r) => {
            this.storageArea.set(t, () => {
              const t = chrome.runtime.lastError;
              return t ? r(this.formatError(t, "set")) : e();
            });
          });
        }
        remove(t) {
          return new Promise((e, r) => {
            this.storageArea.remove(t, () => {
              const t = chrome.runtime.lastError;
              return t ? r(this.formatError(t, "remove")) : e();
            });
          });
        }
        constructor(t) {
          (this.areaName = t),
            (this.storageArea = chrome.storage[t]),
            (this.formatError = (0, n.genLastErrorFmt)(`Chrome${t}StorageError`));
        }
      }
      const a = { local: new o("local"), sync: new o("sync") };
      var s = a;
    }),
    i.register("3k2hL", function (e, r) {
      t(e.exports, "genLastErrorFmt", () => n);
      const n = (t) => (e, r) => {
        const n = { name: t, message: e.message };
        return r && (n.via = r), n;
      };
    }),
    i.register("1I2HB", function (e, r) {
      t(e.exports, "getVersion", () => n), t(e.exports, "compareVersions", () => o);
      const n = () => chrome.runtime.getManifest().version || "0.0",
        o = (t, e) => {
          const r = (t || "").split("."),
            n = (e || "").split("."),
            o = Math.max(r.length, n.length);
          for (let t = 0; t < o; t++) {
            if (r[t] === n[t] || (!r[t] && !n[t])) continue;
            if (!n[t]) return 1;
            if (!r[t]) return -1;
            return parseInt(r[t], 10) > parseInt(n[t], 10) ? 1 : -1;
          }
          return 0;
        };
    }),
    i.register("h1Khz", function (e, r) {
      t(e.exports, "getReportUrl", () => d), t(e.exports, "getReportUrlAsync", () => y), t(e.exports, "update", () => v);
      var n = i("8rN6d"),
        o = i("jBCXK"),
        a = i("hGGFE"),
        s = i("ff4Ef"),
        u = i("8bPtr"),
        c = i("nKr4g"),
        l = i("2z2pA"),
        f = i("8ioZ3"),
        p = i("kOtTY");
      f.default.load().catch((t) => l.default.error(t));
      const h = new Set(["url", "error", "type", "opts", "userId", "subState", "metadata"]);
      function d(t) {
        var e = !0,
          r = !1,
          n = void 0;
        try {
          for (var o, i = Object.keys(t)[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
            const e = o.value;
            if (!h.has(e)) {
              const r = new Error(`Unexpected report link key: ${e} (${t[e]})`);
              throw ((r.name = "UnexpectedKeyError"), r);
            }
          }
        } catch (t) {
          (r = !0), (n = t);
        } finally {
          try {
            e || null == i.return || i.return();
          } finally {
            if (r) throw n;
          }
        }
        let a = t.url,
          s = t.error,
          u = t.type,
          c = t.metadata,
          l = t.opts,
          d = t.userId,
          y = t.subState;
        (a = a || window.location.href), (l = l || f.default.state);
        let g = s ? (0, p.errorToString)(s) : void 0;
        return u && (g = `[${u}]${g ? " " + g : ""}`), (0, p.reportLink)(a, g, l, d, y, c);
      }
      function y(t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, n.default)(function (t) {
          var e, r;
          return (0, u.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2, , 3]), [4, f.default.load()];
              case 1:
                return (e = n.sent()), [3, 3];
              case 2:
                return (r = n.sent()), l.default.error(r), (e = { error: (0, p.errorToString)(r) }), [3, 3];
              case 3:
                return [2, d((0, a.default)((0, o.default)({}, t), { opts: b(e) }))];
            }
          });
        })).apply(this, arguments);
      }
      function v(t, e) {
        return m.apply(this, arguments);
      }
      function m() {
        return (m = (0, n.default)(function (t, e) {
          var r, n, o, i;
          return (0, u.__generator)(this, function (a) {
            switch (a.label) {
              case 0:
                return (r = (e && e.metadata) || void 0), [4, y({ url: window.location.href, error: t, metadata: r })];
              case 1:
                return (
                  (n = a.sent()),
                  (o = "btn-report"),
                  (i = (0, c.$)(o)) ? ((i.href = n), c.$.show("btn-report")) : l.default.error(`No reportElt #${o}`),
                  [2, n]
                );
            }
          });
        })).apply(this, arguments);
      }
      const b = (t) => (
        (t = (0, o.default)({}, t)),
        Object.entries(f.default.fields).forEach((e) => {
          let r = (0, s.default)(e, 2),
            n = r[0],
            o = r[1];
          if (o.default) {
            const e = "function" == typeof o.default ? o.default() : o.default;
            t[n] === e && delete t[n];
          }
        }),
        t
      );
    }),
    i.register("jBCXK", function (e, r) {
      t(e.exports, "default", () => o);
      var n = i("iPbYd");
      function o(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {},
            o = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
              Object.getOwnPropertySymbols(r).filter(function (t) {
                return Object.getOwnPropertyDescriptor(r, t).enumerable;
              })
            )),
            o.forEach(function (e) {
              (0, n.default)(t, e, r[e]);
            });
        }
        return t;
      }
    }),
    i.register("hGGFE", function (e, r) {
      function n(t, e) {
        return (
          (e = null != e ? e : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : (function (t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(t);
                  e &&
                    (n = n.filter(function (e) {
                      return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    r.push.apply(r, n);
                }
                return r;
              })(Object(e)).forEach(function (r) {
                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
              }),
          t
        );
      }
      t(e.exports, "default", () => n);
    }),
    i.register("nKr4g", function (e, r) {
      function n(t) {
        return document.getElementById(t);
      }
      t(e.exports, "$", () => o);
      const o = Object.assign(n, {
        show: function (t, e) {
          const r = n(t);
          (r.style.display = e && "string" == typeof e ? e : "block"), (r.style.visibility = "visible");
        },
        hide: function (t) {
          n(t).style.display = "none";
        },
        hidden: function (t) {
          n(t).style.visibility = "hidden";
        },
        findClass: function (t, e) {
          return Array.from((e || document).getElementsByClassName(t));
        },
        on: function (t, e, r) {
          return t.addEventListener(e, r, !1), t;
        },
        once: function (t, e, r) {
          t.addEventListener(
            e,
            function n(o) {
              return t.removeEventListener(e, n), r.call(this, o);
            },
            !1
          );
        },
        offsets: function (t) {
          let e = 0,
            r = 0;
          if (t !== window) {
            let n = t;
            for (; n; ) (e += n.offsetLeft || 0), (r += n.offsetTop || 0), (n = n.offsetParent);
          }
          return { left: e, top: r };
        },
        containsElt: function (t, e) {
          for (; e; ) {
            if (e === t) return !0;
            e = e.parentNode;
          }
          return !1;
        },
        empty: function (t) {
          for (; t.firstChild; ) t.removeChild(t.lastChild);
          return t;
        }
      });
    }),
    i.register("8ioZ3", function (e, r) {
      t(e.exports, "PDF_FORMAT_LETTER", () => m),
        t(e.exports, "PDF_FORMAT_LEGAL", () => b),
        t(e.exports, "PDF_FORMAT_A4", () => w),
        t(e.exports, "PDF_FORMAT_FULL", () => _),
        t(e.exports, "PDF_FORMAT_LETTER_LANDSCAPE", () => E),
        t(e.exports, "PDF_FORMAT_LEGAL_LANDSCAPE", () => S),
        t(e.exports, "PDF_FORMAT_A4_LANDSCAPE", () => A),
        t(e.exports, "default", () => k);
      var n = i("e0Kwl"),
        o = i("fueUa"),
        a = i("crHLg"),
        s = i("95ETH"),
        u = i("8DwkQ"),
        c = i("5Xemj"),
        l = i("Bqk7F"),
        f = i("5Gpcw"),
        p = i("fiP9V"),
        h = i("2brSn");
      const d = l.imageFormatsArray.map((t) => t.key),
        y = (0, c.tr)("Capture"),
        g = (0, c.tr)("PDF"),
        v = (0, c.tr)("Download"),
        m = "letter",
        b = "legal",
        w = "a4",
        _ = "full",
        E = "letter-landscape",
        S = "legal-landscape",
        A = "a4-landscape",
        O = [
          { key: m, display: "US letter portrait" },
          { key: E, display: "US letter landscape" },
          { key: b, display: "US legal portrait" },
          { key: S, display: "US legal landscape" },
          { key: w, display: "A4 portrait" },
          { key: A, display: "A4 landscape" },
          { key: _, display: (0, c.tr)("full image") }
        ],
        x = o.DATE_FORMATS.map((t) => ({ key: t.value, display: t.title }));
      var k = new (0, p.default)("options", {
        fmt: {
          type: "choice",
          group: y,
          choices: d,
          default: "png",
          label: (0, c.tr)("Image format:"),
          help: (0, c.tr)(
            "PNG is lossless and should match exactly what is seen on the screen, but will usually have larger file sizes than JPG, which uses compression."
          )
        },
        fixed_elts: {
          type: "bool",
          group: y,
          default: !0,
          label: `${(0, c.tr)("Adjust repeating elements")} (beta)`,
          hidden: !0,
          help: (0, c.tr)(
            "Sometimes elements, like a “back to top” button or a sticky footer will repeat on the page. This tries to position them absolutely to stop them from repeating in a screeshot."
          )
        },
        adv_scroll: {
          type: "bool",
          group: y,
          default: !0,
          label: `${(0, c.tr)("Advanced scrolling")} (beta)`,
          hidden: !0,
          help: (0, c.tr)("Look for an element within the page with its own scroll bars and scroll that item during the capture.")
        },
        pdf_format: {
          type: "choice",
          group: g,
          choices: O,
          default: m,
          label: (0, c.tr)("Paper size:"),
          help: (0, c.tr)("Specify the format size of PDFs for when exporting to PDF.")
        },
        pdf_smart_page: {
          type: "bool",
          group: g,
          default: !0,
          label: `${(0, c.tr)("Smart page splitting (Premium)")} ⚡️`,
          help: (0, c.tr)(
            "Perform extra checks when splitting a PDF across multiple pages to try to prevent it from cutting lines of text in half. Otherwise, the screenshot is split at the paper size height regardless of its content."
          ),
          premiumInfo: {
            text: "Prevent lines of text from getting split in half during export-to-PDF with smart page splitting.",
            cta1: "Upgrade your account",
            cta1LinkFn: () => (0, a.makePremiumUrl)(),
            cta2: "login",
            cta2LinkFn: () => (0, a.makeLoginUrl)(),
            basicDefault: !1
          },
          disabled: !0
        },
        pdf_url_and_date: {
          type: "bool",
          group: g,
          default: !1,
          label: `${(0, c.tr)("Add URL and date/time (Premium)")} ⚡️`,
          help: (0, c.tr)(
            "Add your screenshot’s URL and capture date/time when exporting to PDF from the main view screenshot page. You can add URL and capture date in the Editor from the “More” menu."
          ),
          premiumInfo: {
            text: "Enable this feature by signing up for a premium account.",
            cta1: "Upgrade your account",
            cta1LinkFn: () => (0, a.makePremiumUrl)(),
            cta2: "login",
            cta2LinkFn: () => (0, a.makeLoginUrl)(),
            basicDefault: !1
          },
          disabled: !0
        },
        pdf_date_fmt: {
          type: "choice",
          group: g,
          choices: x,
          default: o.DATE_FORMAT_DATE,
          label: `${(0, c.tr)("Date format (Premium)")}`,
          help: (t) =>
            `${(0, c.tr)("Display the capture date in this format or hide it entirely.")}${((t) => {
              const e = (0, o.formatDate)(n.DateTime.now(), t);
              return e ? `\n\n${(0, c.tr)("Example:")} ${e}` : "";
            })(t)}`,
          hidden: (t, e) => !(t && e && e.pdf_url_and_date)
        },
        pdf_insert_links: {
          type: "bool",
          group: g,
          default: !1,
          label: `${(0, c.tr)("Active Links (Premium)")} ⚡️ (beta)`,
          help: (0, c.tr)(
            "Activate all the links on the page when downloading as a PDF. Clicking on the link in the PDF will open a page in your browser.\n\n**This is an experimental feature that is still in development—please report any issues to customer support using the “Report issue” flag icon above.**"
          ),
          premiumInfo: {
            text: "Enable this feature by signing up for a premium account.",
            cta1: "Upgrade your account",
            cta1LinkFn: () => (0, a.makePremiumUrl)(),
            cta2: "login",
            cta2LinkFn: () => (0, a.makeLoginUrl)(),
            basicDefault: !1
          },
          experimental: !0,
          disabled: !0
        },
        dir: {
          type: "text",
          group: v,
          default: "",
          label: (0, c.tr)("Directory:"),
          help: (0, c.tr)(
            "Specify a directory underneath your downloads directory to save your screenshots, such as “screencaptures”. Defaults to the downloads directory if blank. (Please limit it to letters, numbers, dashes, underscores, and slashes—invalid characters will automatically be removed)."
          ),
          process: (t) => {
            let e = "";
            t = t.trim();
            const r = /^[A-Za-z]:[\/\\]/;
            return (
              (r.test(t) || t.startsWith("../") || t.startsWith("/")) &&
                (e =
                  (0, c.tr)(
                    "The browser prevents extensions from saving files outside of the default downloads directory. The path you entered has been updated accordingly. Sorry!"
                  ) + " 😟"),
              {
                val: (t = t
                  .replace(r, "")
                  .replace(/\\/g, "/")
                  .replace(/[^a-z0-9\-_\/ ]*/gi, "")
                  .replace(/\s+/g, " ")
                  .replace(/\/\/+/g, "/")
                  .replace(/^\//, "")
                  .replace(/\/$/, "")
                  .trim()),
                msg: e
              }
            );
          },
          validate: (t) => h.isString(t).then((e) => e && (!t || s.requestIfNeededDownloads()))
        },
        save_as: {
          type: "bool",
          group: v,
          default: !1,
          label: (0, c.tr)("Save as"),
          help: `${(0, c.tr)(
            'Automatically show a "save as" dialog when downloading your screenshots. If the “Ask where to save each file before downloading” option is enabled in your browser’s settings, then that takes priority.'
          )}${
            (0, f.getIsMac)() && u.IS_CHROME
              ? "\n\n" +
                (0, c.tr)(
                  'On Mac Chrome there are issues with "save as" for auto-download and when downloading multiple files, so it is disabled in those scenarios.'
                )
              : ""
          }`,
          validate: (t) => h.isBoolean(t)
        },
        auto_dl2: {
          type: "bool",
          group: v,
          default: !1,
          label: (0, c.tr)("Auto-download files"),
          help: (0, c.tr)(
            'Automatically download your screenshot as an image instead of opening it in a new window.This means the extension capture tab will not open. You can return back here by right-clicking on the extension and selecting "Options".'
          ),
          validate: (t) => h.isBoolean(t).then((e) => e && (!0 !== t || s.requestIfNeededDownloads()))
        },
        fit_copies: {
          type: "bool",
          group: v,
          default: !0,
          label: (0, c.tr)("Fit copies to Google Docs limits"),
          help: (0, c.tr)(
            "When copying a screenshot to your clipboard, auto-resize it if it exceeds the Google Docs copy-paste limit (25,000,000 pixels). You may still experience issues pasting very large images into other applications, for example Google Docs sometimes truncates the image unless you resize it much smaller."
          )
        },
        frame_persist: {
          type: "bool",
          group: y,
          default: !0,
          label: (0, c.tr)("Persist iframe permissions"),
          help: (0, c.tr)("Save this permission (if accepted) for future captures. It can still be revoked later from the options page."),
          validate: (t) => h.isBoolean(t),
          hidden: !0
        }
      });
    }),
    i.register("crHLg", function (e, r) {
      t(e.exports, "makeLoginUrl", () => a), t(e.exports, "makePremiumUrl", () => s);
      var n = i("8DwkQ"),
        o = i("kOtTY");
      const a = (t) => u(n.LOGIN_URL, t),
        s = (t) => u(n.PREMIUM_URL, t),
        u = (t, e) => {
          e = e || window.location.pathname + (window.location.search || "") + (window.location.hash || "");
          const r = chrome.extension.getURL("/p/index.html") + "?" + (0, o.toQueryString)([{ key: "p", val: e }]);
          return `${t}?${(0, o.toQueryString)([{ key: "next", val: r }])}`;
        };
    }),
    i.register("kOtTY", function (r, n) {
      t(r.exports, "GESTURE_TIMEOUT", () => m),
        t(r.exports, "reportLink", () => w),
        t(r.exports, "toQueryString", () => x),
        t(r.exports, "errorToString", () => _),
        t(r.exports, "asFilename", () => E),
        t(r.exports, "asArray", () => S),
        t(r.exports, "getQueryString", () => A),
        t(r.exports, "addViaToError", () => k),
        t(r.exports, "fullServiceDownload", () => j),
        t(r.exports, "scrollEltTo", () => R);
      var o = i("8rN6d"),
        a = i("ff4Ef"),
        s = i("8bPtr"),
        u = i("e0Kwl"),
        c = i("enukM"),
        l = i("gnAcz"),
        f = i("95ETH"),
        p = i("2z2pA"),
        h = i("5Gpcw"),
        d = i("8ioZ3"),
        y = i("dChev"),
        g = i("1I2HB");
      const v = "https://screencapture.mrcoles.com/",
        m = 5e3,
        b = (t) => {
          var e = !1;
          try {
            (t = btoa(t)), (e = !0);
          } catch (t) {}
          if (e) for (; "=" === t.charAt(t.length - 1); ) t = t.substring(0, t.length - 1);
          return t;
        },
        w = (t, e, r, n, o, i) => {
          const s = (t) => {
              try {
                return Object.entries(t)
                  .map((t) => {
                    let e = (0, a.default)(t, 2);
                    return `${e[0]}=${e[1]}`;
                  })
                  .join(";");
              } catch (t) {
                p.default.error("Error parsing obj!", t);
              }
              try {
                return JSON.stringify(t);
              } catch (t) {
                p.default.error("Error JSONifying obj!", t);
              }
              return "" + t;
            },
            u = [{ key: "v", val: b((0, g.getVersion)()) }];
          if (
            (t && u.push({ key: "u", val: b(t) }),
            n && u.push({ key: "i", val: b(n) }),
            o && o !== y.SUB_BAD && u.push({ key: "s", val: b(o) }),
            i)
          ) {
            const t = s(i);
            u.push({ key: "m", val: b(t) });
          }
          if (r) {
            const t = s(r);
            u.push({ key: "o", val: b(t) });
          }
          e && u.push({ key: "e", val: b(e) });
          let c = x(u);
          const l = 1600 - v.length - 1;
          return c.length >= l && (c = c.substring(0, l)), v + (c ? "?" + c : "");
        },
        _ = (t) => {
          let e;
          return "string" == typeof t
            ? t
            : (t && (e = [t.name, t.via ? `(${t.via})` : "", t.message, t.stack].filter((t) => t).join(" ")), e);
        },
        E = (t, r) => {
          try {
            t = decodeURIComponent(t);
          } catch (t) {}
          let n = e(c).remove(t).split("?")[0].split("#")[0];
          n
            ? ((n = n
                .replace(/^https?:\/\/(www\.)?/, "")
                .replace(/^([^\/]+)\.com/, "$1")
                .replace(/[^A-Za-z0-9]+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^[_\-]+/, "")
                .replace(/[_\-]+$/, "")),
              (n = "-" + n))
            : (n = "");
          return `screencapture${n}-${u.DateTime.now().toFormat("yyyy-MM-dd-HH_mm_ss")}${r}`;
        },
        S = (t) => Array.prototype.slice.call(t, 0),
        A = () => O(window.location.search.substring(1)),
        O = (t) => {
          var e = {};
          return (
            (t || "").split("&").forEach(function (t) {
              if (t) {
                var r = t.split("=").map(decodeURIComponent);
                e[r.shift()] = r.join("=");
              }
            }),
            e
          );
        },
        x = (t) => {
          const e = (t, e) => (e ? (null == t ? "" : `=${encodeURIComponent(t)}`) : encodeURIComponent(t));
          return (
            Array.isArray(t)
              ? t.map((t) => {
                  let r = t.key,
                    n = t.val;
                  return e(r) + e(n, !0);
                })
              : Object.entries(t).map((t) => {
                  let r = (0, a.default)(t, 2),
                    n = r[0],
                    o = r[1];
                  return e(n) + e(o, !0);
                })
          ).join("&");
        },
        k = (t, e) => {
          t.via = (t.via ? `${t.via} > ` : "") + e;
        },
        j =
          ((P = (0, o.default)(function (t, e, r) {
            var n, o, i, a, u, c, p, y;
            return (0, s.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  return (n = void 0 !== e && e), (o = void 0 !== r && r), [4, f.containsDownloads()];
                case 1:
                  return (i = s.sent()) ? [4, d.default.load()] : [3, 4];
                case 2:
                  return (
                    (a = s.sent()), (u = (!(0, h.getIsMac)() || !(n || t.length > 1)) && (o || a.save_as)), [4, l.downloadAll(t, a.dir, u)]
                  );
                case 3:
                  return (
                    (c = s.sent()),
                    (p = c.reduce((t, e) => t + (!1 === e.success ? 1 : 0), 0)),
                    (y = c.length - p),
                    [2, { hasPerms: i, results: c, failCount: p, successCount: y }]
                  );
                case 4:
                  return [2, { hasPerms: i, results: t.map((t) => ({ url: t, success: !1 })) }];
                case 5:
                  return [2];
              }
            });
          })),
          function (t) {
            return P.apply(this, arguments);
          });
      var P;
      const R = (t, e, r) => {
        t.scrollTo && "function" == typeof t.scrollTo ? t.scrollTo(e, r) : ((t.scrollLeft = e), (t.scrollTop = r));
      };
    }),
    i.register("enukM", function (t, e) {
      var r = {
          À: "A",
          Á: "A",
          Â: "A",
          Ã: "A",
          Ä: "A",
          Å: "A",
          Ấ: "A",
          Ắ: "A",
          Ẳ: "A",
          Ẵ: "A",
          Ặ: "A",
          Æ: "AE",
          Ầ: "A",
          Ằ: "A",
          Ȃ: "A",
          Ç: "C",
          Ḉ: "C",
          È: "E",
          É: "E",
          Ê: "E",
          Ë: "E",
          Ế: "E",
          Ḗ: "E",
          Ề: "E",
          Ḕ: "E",
          Ḝ: "E",
          Ȇ: "E",
          Ì: "I",
          Í: "I",
          Î: "I",
          Ï: "I",
          Ḯ: "I",
          Ȋ: "I",
          Ð: "D",
          Ñ: "N",
          Ò: "O",
          Ó: "O",
          Ô: "O",
          Õ: "O",
          Ö: "O",
          Ø: "O",
          Ố: "O",
          Ṍ: "O",
          Ṓ: "O",
          Ȏ: "O",
          Ù: "U",
          Ú: "U",
          Û: "U",
          Ü: "U",
          Ý: "Y",
          à: "a",
          á: "a",
          â: "a",
          ã: "a",
          ä: "a",
          å: "a",
          ấ: "a",
          ắ: "a",
          ẳ: "a",
          ẵ: "a",
          ặ: "a",
          æ: "ae",
          ầ: "a",
          ằ: "a",
          ȃ: "a",
          ç: "c",
          ḉ: "c",
          è: "e",
          é: "e",
          ê: "e",
          ë: "e",
          ế: "e",
          ḗ: "e",
          ề: "e",
          ḕ: "e",
          ḝ: "e",
          ȇ: "e",
          ì: "i",
          í: "i",
          î: "i",
          ï: "i",
          ḯ: "i",
          ȋ: "i",
          ð: "d",
          ñ: "n",
          ò: "o",
          ó: "o",
          ô: "o",
          õ: "o",
          ö: "o",
          ø: "o",
          ố: "o",
          ṍ: "o",
          ṓ: "o",
          ȏ: "o",
          ù: "u",
          ú: "u",
          û: "u",
          ü: "u",
          ý: "y",
          ÿ: "y",
          Ā: "A",
          ā: "a",
          Ă: "A",
          ă: "a",
          Ą: "A",
          ą: "a",
          Ć: "C",
          ć: "c",
          Ĉ: "C",
          ĉ: "c",
          Ċ: "C",
          ċ: "c",
          Č: "C",
          č: "c",
          C̆: "C",
          c̆: "c",
          Ď: "D",
          ď: "d",
          Đ: "D",
          đ: "d",
          Ē: "E",
          ē: "e",
          Ĕ: "E",
          ĕ: "e",
          Ė: "E",
          ė: "e",
          Ę: "E",
          ę: "e",
          Ě: "E",
          ě: "e",
          Ĝ: "G",
          Ǵ: "G",
          ĝ: "g",
          ǵ: "g",
          Ğ: "G",
          ğ: "g",
          Ġ: "G",
          ġ: "g",
          Ģ: "G",
          ģ: "g",
          Ĥ: "H",
          ĥ: "h",
          Ħ: "H",
          ħ: "h",
          Ḫ: "H",
          ḫ: "h",
          Ĩ: "I",
          ĩ: "i",
          Ī: "I",
          ī: "i",
          Ĭ: "I",
          ĭ: "i",
          Į: "I",
          į: "i",
          İ: "I",
          ı: "i",
          Ĳ: "IJ",
          ĳ: "ij",
          Ĵ: "J",
          ĵ: "j",
          Ķ: "K",
          ķ: "k",
          Ḱ: "K",
          ḱ: "k",
          K̆: "K",
          k̆: "k",
          Ĺ: "L",
          ĺ: "l",
          Ļ: "L",
          ļ: "l",
          Ľ: "L",
          ľ: "l",
          Ŀ: "L",
          ŀ: "l",
          Ł: "l",
          ł: "l",
          Ḿ: "M",
          ḿ: "m",
          M̆: "M",
          m̆: "m",
          Ń: "N",
          ń: "n",
          Ņ: "N",
          ņ: "n",
          Ň: "N",
          ň: "n",
          ŉ: "n",
          N̆: "N",
          n̆: "n",
          Ō: "O",
          ō: "o",
          Ŏ: "O",
          ŏ: "o",
          Ő: "O",
          ő: "o",
          Œ: "OE",
          œ: "oe",
          P̆: "P",
          p̆: "p",
          Ŕ: "R",
          ŕ: "r",
          Ŗ: "R",
          ŗ: "r",
          Ř: "R",
          ř: "r",
          R̆: "R",
          r̆: "r",
          Ȓ: "R",
          ȓ: "r",
          Ś: "S",
          ś: "s",
          Ŝ: "S",
          ŝ: "s",
          Ş: "S",
          Ș: "S",
          ș: "s",
          ş: "s",
          Š: "S",
          š: "s",
          Ţ: "T",
          ţ: "t",
          ț: "t",
          Ț: "T",
          Ť: "T",
          ť: "t",
          Ŧ: "T",
          ŧ: "t",
          T̆: "T",
          t̆: "t",
          Ũ: "U",
          ũ: "u",
          Ū: "U",
          ū: "u",
          Ŭ: "U",
          ŭ: "u",
          Ů: "U",
          ů: "u",
          Ű: "U",
          ű: "u",
          Ų: "U",
          ų: "u",
          Ȗ: "U",
          ȗ: "u",
          V̆: "V",
          v̆: "v",
          Ŵ: "W",
          ŵ: "w",
          Ẃ: "W",
          ẃ: "w",
          X̆: "X",
          x̆: "x",
          Ŷ: "Y",
          ŷ: "y",
          Ÿ: "Y",
          Y̆: "Y",
          y̆: "y",
          Ź: "Z",
          ź: "z",
          Ż: "Z",
          ż: "z",
          Ž: "Z",
          ž: "z",
          ſ: "s",
          ƒ: "f",
          Ơ: "O",
          ơ: "o",
          Ư: "U",
          ư: "u",
          Ǎ: "A",
          ǎ: "a",
          Ǐ: "I",
          ǐ: "i",
          Ǒ: "O",
          ǒ: "o",
          Ǔ: "U",
          ǔ: "u",
          Ǖ: "U",
          ǖ: "u",
          Ǘ: "U",
          ǘ: "u",
          Ǚ: "U",
          ǚ: "u",
          Ǜ: "U",
          ǜ: "u",
          Ứ: "U",
          ứ: "u",
          Ṹ: "U",
          ṹ: "u",
          Ǻ: "A",
          ǻ: "a",
          Ǽ: "AE",
          ǽ: "ae",
          Ǿ: "O",
          ǿ: "o",
          Þ: "TH",
          þ: "th",
          Ṕ: "P",
          ṕ: "p",
          Ṥ: "S",
          ṥ: "s",
          X́: "X",
          x́: "x",
          Ѓ: "Г",
          ѓ: "г",
          Ќ: "К",
          ќ: "к",
          A̋: "A",
          a̋: "a",
          E̋: "E",
          e̋: "e",
          I̋: "I",
          i̋: "i",
          Ǹ: "N",
          ǹ: "n",
          Ồ: "O",
          ồ: "o",
          Ṑ: "O",
          ṑ: "o",
          Ừ: "U",
          ừ: "u",
          Ẁ: "W",
          ẁ: "w",
          Ỳ: "Y",
          ỳ: "y",
          Ȁ: "A",
          ȁ: "a",
          Ȅ: "E",
          ȅ: "e",
          Ȉ: "I",
          ȉ: "i",
          Ȍ: "O",
          ȍ: "o",
          Ȑ: "R",
          ȑ: "r",
          Ȕ: "U",
          ȕ: "u",
          B̌: "B",
          b̌: "b",
          Č̣: "C",
          č̣: "c",
          Ê̌: "E",
          ê̌: "e",
          F̌: "F",
          f̌: "f",
          Ǧ: "G",
          ǧ: "g",
          Ȟ: "H",
          ȟ: "h",
          J̌: "J",
          ǰ: "j",
          Ǩ: "K",
          ǩ: "k",
          M̌: "M",
          m̌: "m",
          P̌: "P",
          p̌: "p",
          Q̌: "Q",
          q̌: "q",
          Ř̩: "R",
          ř̩: "r",
          Ṧ: "S",
          ṧ: "s",
          V̌: "V",
          v̌: "v",
          W̌: "W",
          w̌: "w",
          X̌: "X",
          x̌: "x",
          Y̌: "Y",
          y̌: "y",
          A̧: "A",
          a̧: "a",
          B̧: "B",
          b̧: "b",
          Ḑ: "D",
          ḑ: "d",
          Ȩ: "E",
          ȩ: "e",
          Ɛ̧: "E",
          ɛ̧: "e",
          Ḩ: "H",
          ḩ: "h",
          I̧: "I",
          i̧: "i",
          Ɨ̧: "I",
          ɨ̧: "i",
          M̧: "M",
          m̧: "m",
          O̧: "O",
          o̧: "o",
          Q̧: "Q",
          q̧: "q",
          U̧: "U",
          u̧: "u",
          X̧: "X",
          x̧: "x",
          Z̧: "Z",
          z̧: "z"
        },
        n = Object.keys(r).join("|"),
        o = new RegExp(n, "g"),
        i = new RegExp(n, ""),
        a = function (t) {
          return t.replace(o, function (t) {
            return r[t];
          });
        };
      (t.exports = a),
        (t.exports.has = function (t) {
          return !!t.match(i);
        }),
        (t.exports.remove = a);
    }),
    i.register("gnAcz", function (e, r) {
      t(e.exports, "ERROR_INCOGNITO_NETWORK_NAME", () => s), t(e.exports, "downloadAll", () => l);
      var n = i("6pLLc"),
        o = i("6PWuH"),
        a = i("3k2hL");
      const s = "AllowIncognitoNetworkError",
        u = (0, a.genLastErrorFmt)("ChromeDownloadsError"),
        c = (t, e, r, n) => {
          let i = void 0 !== n && n;
          const a = { url: t, conflictAction: chrome.downloads.FilenameConflictAction.UNIQUIFY };
          return (
            (r || e) && ((r = r || t.split("/").pop()), e && (r = `${e}/${r}`), (a.filename = r)),
            i && (a.saveAs = !0),
            ((t) =>
              new Promise((e, r) => {
                chrome.downloads.download(t, (t) => {
                  const n = chrome.runtime.lastError;
                  return n ? r(u(n, "download")) : e(t);
                });
              }))(a).then((t) =>
              (0, o.isAllowedIncognitoAccess)()
                .then((e) => {
                  if (e)
                    return ((t) =>
                      new Promise((e, r) => {
                        chrome.downloads.search(t, (t) => {
                          const n = chrome.runtime.lastError;
                          return n ? r(u(n, "search")) : e(t);
                        });
                      }))({ id: t }).then((t) => {
                      const e = t[0];
                      if (e && "interrupted" === e.state && "NETWORK_FAILED" === e.error) {
                        const t = new Error("Download encountered network failed error with allow incognito");
                        throw ((t.name = s), t);
                      }
                    });
                })
                .then(() => t)
            )
          );
        },
        l = (t, e, r) => {
          let o = void 0 !== r && r;
          const i = t.length;
          let a = 0,
            s = 0,
            u = [];
          const l = t.map((t) => ("string" == typeof t ? { url: t } : t));
          return (0, n.serialMap)(l, (t) =>
            c(t.url, e, t.filename, o)
              .then((e) => {
                (s += 1), u.push({ url: t, id: e, success: !0 });
              })
              .catch((e) => {
                (a += 1), u.push({ url: t, error: e, success: !1 });
              })
          ).then(() => {
            if (a && a === i && u.length && !1 === u[0].success) {
              const t = u[0].error;
              throw ((t.message += ` (downloadAll: ${a} of ${i})`), t);
            }
            return u;
          });
        };
    }),
    i.register("6PWuH", function (e, r) {
      t(e.exports, "isFileUrl", () => o),
        t(e.exports, "isAllowedFileSchemeAccess", () => a),
        t(e.exports, "isAllowedIncognitoAccess", () => s);
      const n = (0, i("3k2hL").genLastErrorFmt)("ChromeExtensionError"),
        o = (t) => {
          if (!t) return !1;
          try {
            return "file:" === new URL(t).protocol;
          } catch (e) {
            throw ((e.message += ` ${typeof t} (${t})`), e);
          }
        },
        a = () =>
          new Promise((t, e) => {
            chrome.extension.isAllowedFileSchemeAccess((r) => {
              const o = chrome.runtime.lastError;
              return o ? e(n(o, "isAllowedFileSchemeAccess")) : t(r);
            });
          }),
        s = () =>
          new Promise((t, e) => {
            chrome.extension.isAllowedIncognitoAccess((r) => {
              const o = chrome.runtime.lastError;
              return o ? e(n(o, "isAllowedIncognitoAccess")) : t(r);
            });
          });
    }),
    i.register("95ETH", function (e, r) {
      t(e.exports, "PERMISSIONS", () => o),
        t(e.exports, "request", () => a),
        t(e.exports, "contains", () => s),
        t(e.exports, "remove", () => u),
        t(e.exports, "requestIfNeededDownloads", () => c),
        t(e.exports, "requestDownloads", () => l),
        t(e.exports, "containsDownloads", () => f);
      const n = (0, i("3k2hL").genLastErrorFmt)("ChromePermissionsError"),
        o = { DOWNLOADS: "downloads" },
        a = (t, e) =>
          new Promise((r, o) => {
            const i = h(t, e);
            chrome.permissions.request(i, (t) => {
              const e = chrome.runtime.lastError;
              return e ? o(n(e, "request")) : r(t);
            });
          }),
        s = (t, e) =>
          new Promise((r, o) => {
            const i = h(t, e);
            chrome.permissions.contains(i, (t) => {
              const e = chrome.runtime.lastError;
              return e ? o(n(e, "contains")) : r(t);
            });
          }),
        u = (t, e) =>
          new Promise((r, o) => {
            const i = h(t, e);
            chrome.permissions.remove(i, (t) => {
              const e = chrome.runtime.lastError;
              return e ? o(n(e, "remove")) : r(t);
            });
          }),
        c = () => {
          return (t = o.DOWNLOADS), s(t, e).then((r) => !!r || a(t, e));
          var t, e;
        },
        l = () => a(o.DOWNLOADS),
        f = () => s(o.DOWNLOADS),
        p = (t) => ("string" == typeof t ? [t] : t),
        h = (t, e) => (void 0 === e && "object" == typeof t ? t : { permissions: (t = p(t)), origins: (e = p(e)) });
    }),
    i.register("dChev", function (e, r) {
      t(e.exports, "SUB_BAD", () => f), t(e.exports, "default", () => g), t(e.exports, "resetUser", () => v);
      var n = i("8rN6d"),
        o = i("8bPtr"),
        a = i("e0Kwl"),
        s = i("53kz8"),
        u = i("8DwkQ"),
        c = i("2z2pA"),
        l = i("fYpxg");
      const f = "sub-none",
        p = "sub-needs-update",
        h = "sub-ok",
        d = { trialing: h, active: h, past_due: p, canceled: f, unpaid: p, "": f },
        y = (t, ...e) => (0, c.default)(`%c[\\USER//] ${t}`, "color: #0B3;background:#EEFFF3", ...e);
      var g = new (class {
        addListener(t) {
          this._listeners.push(t);
        }
        removeListener(t) {
          this._listeners = this._listeners.filter((e) => e !== t);
        }
        loginStateProm(t) {
          var e = this;
          return (0, n.default)(function () {
            var r, n, i, s, u, p;
            return (0, o.__generator)(this, function (o) {
              switch (o.label) {
                case 0:
                  return y(`loginStateProm(${JSON.stringify(t)})`), [4, l.default.load()];
                case 1:
                  if (
                    ((r = o.sent()),
                    y("got items"),
                    (0, c.default)(r),
                    (n = e._asLoginState(r.login_data, r)),
                    y("converted data:"),
                    (0, c.default)(n),
                    n.subState === f)
                  )
                    return y(`BAD SUBSTATE ${n.subState}`), [2, n];
                  if (
                    ((i = a.DateTime.now()),
                    (s = i.diff(n.updated, "days").days),
                    y(`days since: ${s}`),
                    !(t && s >= 31 && navigator.onLine))
                  )
                    return [3, 6];
                  o.label = 2;
                case 2:
                  return o.trys.push([2, 4, , 5]), y("do extra login!!!!"), [4, e._login()];
                case 3:
                  return (u = o.sent()), y("got data!!!!"), (0, c.default)(u), [3, 5];
                case 4:
                  throw ((p = o.sent()), c.default.error("Error logging in!"), p);
                case 5:
                  u && (n = e._asLoginState(u, r)), (o.label = 6);
                case 6:
                  return y("RETURNING DATA!!!"), (0, c.default)(n), [2, n];
              }
            });
          })();
        }
        setWebsiteABState() {
          var t = this;
          return (0, n.default)(function () {
            var e, r, n, i, a, s, u, f, p, h, d;
            return (0, o.__generator)(this, function (o) {
              switch (o.label) {
                case 0:
                  return y("[User.setWebsiteABState] start"), [4, l.default.load()];
                case 1:
                  return (
                    (e = o.sent()),
                    (r = e.ab),
                    "{}" === JSON.stringify(r)
                      ? [2, !0]
                      : ((n = e.login_data),
                        (i = !(!n || !n.userId)),
                        (a = Object.assign({ hasUser: i }, r)),
                        (s = JSON.stringify(a)),
                        [4, t._getHandshake()])
                  );
                case 2:
                  (u = o.sent()).call("setAbJson", s), y("[User.setWebsiteABState] did setAbJson"), (f = 2), (p = null), (o.label = 3);
                case 3:
                  return f > 0 ? (f--, [4, u.get("getAbJson")]) : [3, 5];
                case 4:
                  (h = o.sent()), y(`[User.setWebsiteABState] did getAbJson: ${h}`);
                  try {
                    p = JSON.parse(h);
                  } catch (t) {
                    return y("[User -> postmate.getAbJson -> JSON.parse]"), c.default.error(t), [3, 3];
                  }
                  return p && "object" == typeof p
                    ? [3, 5]
                    : (y(`[User -> postmate.getAbJson -> object] not object! ${p}`), (p = null), [3, 3]);
                case 5:
                  return (
                    (p = p || {}),
                    (d = Object.keys(a).every((t) => t in p)),
                    y(`[User.setWebsiteABState] isSet? ${d}: ${JSON.stringify(p)}`),
                    [2, d]
                  );
              }
            });
          })();
        }
        _asLoginState(t, e) {
          y("[User._asLoginState]", t, e), (t && "object" == typeof t) || c.default.error("INVALID DATA", t);
          const r = Object.assign({}, t);
          ["expires", "updated"].forEach((t) => (r[t] = a.DateTime.fromSeconds(r[t] || 0))), (r.status = r.status || "");
          const n = a.DateTime.now();
          (!r.userId || n > r.expires) && (r.status = "");
          let o = d[r.status];
          return (r.subState = o), (r.store = e), r;
        }
        _getHandshake() {
          return (
            this._handshake ||
              (this._handshake = new (0, s.default)({ container: document.body, url: u.WEBCOMM_URL, classListArray: ["h"] })),
            this._handshake
          );
        }
        _login() {
          var t = this;
          return (0, n.default)(function () {
            var e;
            return (0, o.__generator)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, t._getHandshake()];
                case 1:
                  return [4, r.sent().get("authState")];
                case 2:
                  return (e = r.sent()), (0, c.default)("[PARENT] authState", e), [4, t.storeLoginData(e)];
                case 3:
                  return r.sent(), [2, e];
              }
            });
          })();
        }
        storeLoginData(t) {
          y("[User.storeLoginData]", t);
          let e = t && t.show_experimental;
          null != e && (delete t.show_experimental, "boolean" != typeof e && (e = null)),
            (t.updated = Math.floor(a.DateTime.now().toSeconds()));
          const r = { login_data: t };
          return t.userId && (r.has_logged_in = !0), null != e && (r.show_experimental = e), l.default.setObj(r);
        }
        constructor() {
          (this._listeners = []),
            l.default.onUpdate((t) => {
              y(`Updated names: ${JSON.stringify(t)}`),
                this.loginStateProm()
                  .then((t) => {
                    this._listeners.forEach((e) => e(t));
                  })
                  .catch((t) => {
                    y("Error loading subscription state!"), c.default.error(t);
                  });
            });
        }
      })();
      const v = () => l.default.set("login_data", {});
    }),
    i.register("53kz8", function (e, r) {
      t(e.exports, "default", () => l);
      /**
  postmate - A powerful, simple, promise-based postMessage library
  @version v1.5.2
  @link https://github.com/dollarshaveclub/postmate
  @author Jacob Kelley <jakie8@gmail.com>
  @license MIT
**/
      var n = "application/x-postmate-v1+json",
        o = 0,
        i = { handshake: 1, "handshake-reply": 1, call: 1, emit: 1, reply: 1, request: 1 },
        a = function (t, e) {
          return (
            ("string" != typeof e || t.origin === e) &&
            !!t.data &&
            ("object" != typeof t.data || "postmate" in t.data) &&
            t.data.type === n &&
            !!i[t.data.postmate]
          );
        },
        s = (function () {
          function t(t) {
            var e = this;
            (this.parent = t.parent),
              (this.frame = t.frame),
              (this.child = t.child),
              (this.childOrigin = t.childOrigin),
              (this.events = {}),
              (this.listener = function (t) {
                if (!a(t, e.childOrigin)) return !1;
                var r = ((t || {}).data || {}).value || {},
                  n = r.data,
                  o = r.name;
                "emit" === t.data.postmate && o in e.events && e.events[o].call(e, n);
              }),
              this.parent.addEventListener("message", this.listener, !1);
          }
          var e = t.prototype;
          return (
            (e.get = function (t) {
              var e = this;
              return new c.Promise(function (r) {
                var i = ++o;
                e.parent.addEventListener(
                  "message",
                  function t(n) {
                    n.data.uid === i && "reply" === n.data.postmate && (e.parent.removeEventListener("message", t, !1), r(n.data.value));
                  },
                  !1
                ),
                  e.child.postMessage({ postmate: "request", type: n, property: t, uid: i }, e.childOrigin);
              });
            }),
            (e.call = function (t, e) {
              this.child.postMessage({ postmate: "call", type: n, property: t, data: e }, this.childOrigin);
            }),
            (e.on = function (t, e) {
              this.events[t] = e;
            }),
            (e.destroy = function () {
              window.removeEventListener("message", this.listener, !1), this.frame.parentNode.removeChild(this.frame);
            }),
            t
          );
        })(),
        u = (function () {
          function t(t) {
            var e = this;
            (this.model = t.model),
              (this.parent = t.parent),
              (this.parentOrigin = t.parentOrigin),
              (this.child = t.child),
              this.child.addEventListener("message", function (t) {
                if (a(t, e.parentOrigin)) {
                  var r = t.data,
                    o = r.property,
                    i = r.uid,
                    s = r.data;
                  "call" !== t.data.postmate
                    ? (function (t, e) {
                        var r = "function" == typeof t[e] ? t[e]() : t[e];
                        return c.Promise.resolve(r);
                      })(e.model, o).then(function (e) {
                        return t.source.postMessage({ property: o, postmate: "reply", type: n, uid: i, value: e }, t.origin);
                      })
                    : o in e.model && "function" == typeof e.model[o] && e.model[o](s);
                }
              });
          }
          return (
            (t.prototype.emit = function (t, e) {
              this.parent.postMessage({ postmate: "emit", type: n, value: { name: t, data: e } }, this.parentOrigin);
            }),
            t
          );
        })(),
        c = (function () {
          function t(t) {
            var e = t.container,
              r = void 0 === e ? (void 0 !== r ? r : document.body) : e,
              n = t.model,
              o = t.url,
              i = t.name,
              a = t.classListArray,
              s = void 0 === a ? [] : a;
            return (
              (this.parent = window),
              (this.frame = document.createElement("iframe")),
              (this.frame.name = i || ""),
              this.frame.classList.add.apply(this.frame.classList, s),
              r.appendChild(this.frame),
              (this.child = this.frame.contentWindow || this.frame.contentDocument.parentWindow),
              (this.model = n || {}),
              this.sendHandshake(o)
            );
          }
          return (
            (t.prototype.sendHandshake = function (e) {
              var r,
                o = this,
                i = (function (t) {
                  var e = document.createElement("a");
                  e.href = t;
                  var r = e.protocol.length > 4 ? e.protocol : window.location.protocol,
                    n = e.host.length ? ("80" === e.port || "443" === e.port ? e.hostname : e.host) : window.location.host;
                  return e.origin || r + "//" + n;
                })(e),
                u = 0;
              return new t.Promise(function (t, c) {
                o.parent.addEventListener(
                  "message",
                  function e(n) {
                    return (
                      !!a(n, i) &&
                      ("handshake-reply" === n.data.postmate
                        ? (clearInterval(r), o.parent.removeEventListener("message", e, !1), (o.childOrigin = n.origin), t(new s(o)))
                        : c("Failed handshake"))
                    );
                  },
                  !1
                );
                var l = function () {
                    u++, o.child.postMessage({ postmate: "handshake", type: n, model: o.model }, i), 5 === u && clearInterval(r);
                  },
                  f = function () {
                    l(), (r = setInterval(l, 500));
                  };
                o.frame.attachEvent ? o.frame.attachEvent("onload", f) : (o.frame.onload = f), (o.frame.src = e);
              });
            }),
            t
          );
        })();
      (c.debug = !1),
        (c.Promise = (function () {
          try {
            return window ? window.Promise : Promise;
          } catch (t) {
            return null;
          }
        })()),
        (c.Model = (function () {
          function t(t) {
            return (this.child = window), (this.model = t), (this.parent = this.child.parent), this.sendHandshakeReply();
          }
          return (
            (t.prototype.sendHandshakeReply = function () {
              var t = this;
              return new c.Promise(function (e, r) {
                t.child.addEventListener(
                  "message",
                  function o(i) {
                    if (i.data.postmate) {
                      if ("handshake" === i.data.postmate) {
                        t.child.removeEventListener("message", o, !1),
                          i.source.postMessage({ postmate: "handshake-reply", type: n }, i.origin),
                          (t.parentOrigin = i.origin);
                        var a = i.data.model;
                        return (
                          a &&
                            Object.keys(a).forEach(function (e) {
                              t.model[e] = a[e];
                            }),
                          e(new u(t))
                        );
                      }
                      return r("Handshake Reply Failed");
                    }
                  },
                  !1
                );
              });
            }),
            t
          );
        })());
      var l = c;
    }),
    i.register("fYpxg", function (e, r) {
      t(e.exports, "default", () => a);
      var n = i("8DwkQ");
      const o = new (0, i("fiP9V").default)("user", {
        rejected_dl: { type: "bool", default: !1 },
        login_data: { type: "json", default: () => ({}) },
        ab: { type: "json", default: () => ({}) },
        show_editor_tour: { type: "bool", default: !0 },
        has_logged_in: { type: "bool", default: !1 },
        last_dl_type: { type: "string", default: n.DL_TYPE_IMAGE },
        ab_req_token: { type: "string" },
        show_experimental: { type: "bool", default: !1 }
      });
      var a = o;
      window._showTour = () => o.remove("show_editor_tour");
    }),
    i.register("Bqk7F", function (e, r) {
      t(e.exports, "default", () => o), t(e.exports, "imageFormatsArray", () => i), t(e.exports, "getImageFormat", () => a);
      const n = {
        png: { key: "png", ext: ".png", canvas: "image/png", jspdf: "PNG", capture: { format: "png", quality: 100 } },
        jpg: { key: "jpg", ext: ".jpg", canvas: "image/jpeg", jspdf: "JPEG", capture: { format: "jpeg", quality: 92 } }
      };
      var o = n;
      const i = Object.values(n),
        a = (t) => {
          const e = n[(t || "").toLowerCase()];
          if (void 0 === e) {
            const e = new Error(`No format found for: "${t}"`);
            throw ((e.name = "InvalidImageFormatKey"), e);
          }
          return e;
        };
    }),
    i.register("2brSn", function (e, r) {
      t(e.exports, "PromiseTrue", () => n), t(e.exports, "isBoolean", () => i), t(e.exports, "isString", () => a);
      const n = () => new Promise((t) => t(!0)),
        o = (t, e) => new Promise((r) => r(typeof t === e)),
        i = (t) => o(t, "boolean"),
        a = (t) => o(t, "string");
    }),
    i.register("eC8rE", function (r, n) {
      t(r.exports, "Capture", () => d);
      var o = i("ff4Ef"),
        a = i("4fNEN"),
        s = i("2LLkR"),
        u = i("e0Kwl"),
        c = i("iW6yY"),
        l = i("Bqk7F"),
        f = i("2z2pA"),
        p = i("kOtTY");
      const h = new (0, s.default)("Test4");
      h.version(1).stores({ captures: "++id, domain, time" });
      class d {
        static from(t, e, r, n, i, a, s) {
          (e = e || ""), (n = n || 1);
          let u = (0, l.getImageFormat)(r);
          r !== u.key && (f.default.warn(`Wrong case for image format key ${r} vs ${u.key}`), (r = u.key)),
            g(Array.isArray(i), "Files object is not an array! " + typeof i);
          let c = {
              url: t,
              domain: v(t),
              title: e,
              format: r,
              scaleMultiplier: n,
              images: i.map((t) => t.filename),
              sizes: i.map((t) => t.size),
              time: s || new Date(),
              metadata: a
            },
            p = new d();
          return (
            Object.entries(c).forEach((t) => {
              let e = (0, o.default)(t, 2),
                r = e[0],
                n = e[1];
              p[r] = n;
            }),
            p
          );
        }
        get pdfFilename() {
          return this.images.length ? this.images[0].replace(/\.[^\.]+$/, ".pdf") : "screenshot.pdf";
        }
        get fullPaths() {
          return this.images.map((t) => c.default.absPath(`/${t}`));
        }
        get fileEntryPaths() {
          return this.images.map((t) => `/${t}`);
        }
        get imageFormat() {
          return (0, l.getImageFormat)(this.format);
        }
        get dateTime() {
          return u.DateTime.fromJSDate(this.time);
        }
        get displayURL() {
          return (
            chrome.extension.getURL("/capture.html") +
            "?" +
            (0, p.toQueryString)([
              { key: "id", val: this.id },
              { key: "url", val: this.url }
            ])
          );
        }
        getEditorURL(t) {
          let e = void 0 === t ? 0 : t;
          return (
            chrome.extension.getURL("/editor.html") +
            "?" +
            (0, p.toQueryString)([
              { key: "id", val: this.id },
              { key: "e", val: e }
            ])
          );
        }
        static count() {
          return h.captures.count();
        }
        save() {
          return h.captures.put(this).then((t) => ((this.id = t), this));
        }
        hackUpdateCreated(t) {
          const e = new Date(),
            r = {},
            n = ["created", "updated"];
          return (
            n.forEach((n) => (r[`edits.${t}.${n}`] = e)),
            h.captures.update(this.id, r).then((r) => {
              if (!r) {
                const t = new Error(`Capture not found for update scale (${this.id})`);
                throw ((t.name = "UpdateCaptureNotFound"), t);
              }
              return n.forEach((r) => (this.edits[t][r] = e)), this;
            })
          );
        }
        updateScaleMultiplier() {
          e(a).ok(!this.scaleMultiplier, `Should not set scaleMultiplier when already have (${this.id}: ${this.scaleMultiplier})`);
          const t = { scaleMultiplier: window.devicePixelRatio || 1, guessedScale: !0 };
          return h.captures.update(this.id, t).then((e) => {
            if (!e) {
              const t = new Error(`Capture not found for update scale (${this.id})`);
              throw ((t.name = "UpdateCaptureNotFound"), t);
            }
            return (
              Object.entries(t).forEach((t) => {
                let e = (0, o.default)(t, 2),
                  r = e[0],
                  n = e[1];
                return (this[r] = n);
              }),
              this
            );
          });
        }
        addEdit(t, r) {
          let n = void 0 === r ? 0 : r;
          e(a).number(t, "Capture.addEdit(editId)"),
            e(a).number(n, "Capture.addEdit(..., imageId)"),
            e(a).equal(t, n, `Must make editId (${t}) and imageId (${n}) the same!`);
          const o = new Date(),
            i = { id: t, imageId: n, created: o, updated: o };
          let s, u;
          return (
            this.edits
              ? (e(a).ok(!this.edits[t], `Cannot overwrite existing edit ${t} -> ${JSON.stringify(this.edits[t])}`),
                (s = `edits.${t}`),
                (u = i))
              : ((s = "edits"), (u = []), (u[t] = i)),
            h.captures.update(this.id, { [s]: u }).then((t) => {
              if (!t) {
                const t = new Error(`Capture not found for add (${this.id})`);
                throw ((t.name = "AddCaptureEditNotFound"), t);
              }
              let e = this;
              return (
                s.split(".").forEach((t, r, n) => {
                  (t = /^\d+$/.test(t) ? parseInt(t) : t), r === n.length - 1 ? (e[t] = u) : (e = this[t]);
                }),
                this
              );
            })
          );
        }
        static updateEditState(t, e, r) {
          return h.captures.update(t, { [`edits.${e}.undos`]: r, [`edits.${e}.updated`]: new Date() }).then((e) => {
            if (!e) {
              const e = new Error(`Capture not found for update (${t})`);
              throw ((e.name = "UpdateCaptureEditNotFound"), e);
            }
          });
        }
        remove() {
          return c.default
            .requestFs()
            .then((t) => c.default.getFiles(t, this.fileEntryPaths, !0))
            .then((t) => c.default.rmFiles(t, (t) => (0, f.default)(t)))
            .then((t) => {
              t.succeeded;
              let e = t.failed;
              if (e.length) {
                let t = e.map((t) => t.toURL()),
                  r = [],
                  n = [];
                this.fullPaths.forEach((e, o) => {
                  -1 !== t.indexOf(e) && (r.push(this.images[o]), n.push(this.sizes[o]));
                }),
                  this.save();
                let o = new Error(`Unable to delete: ${t.join(", ")}`);
                throw ((o.name = "CaptureRemove"), o);
              }
              return h.captures.delete(this.id);
            });
        }
        static lookup(t) {
          return h.captures.get(y(t));
        }
        static lookupIds(t) {
          return (t = t.map((t) => y(t))), h.captures.where("id").anyOf(t).toArray();
        }
        static findSrc(t) {
          return h.captures
            .toCollection()
            .filter((e) => ~e.images.indexOf(t))
            .toArray()
            .then((t) => t[0]);
        }
        static all() {
          return h.captures.orderBy("time").toArray();
        }
      }
      h.captures.mapToClass(d);
      const y = (t) => ("string" == typeof t && /^\d+$/.test(t) ? parseInt(t, 10) : t),
        g = (t, e, r) => {
          if (!t) {
            void 0 === r && ((r = e), (e = void 0));
            let t = new Error(r);
            throw (e && (t.name = e), t);
          }
        },
        v = (t) => {
          let e = /^https?:\/\//;
          return e.test(t) && (t = t.replace(e, "")), t.split(":")[0];
        };
    }),
    i.register("2LLkR", function (e, n) {
      t(e.exports, "default", () => $e);
      var o = Object.keys,
        i = Array.isArray,
        a = "undefined" != typeof self ? self : "undefined" != typeof window ? window : r;
      function s(t, e) {
        return (
          "object" != typeof e ||
            o(e).forEach(function (r) {
              t[r] = e[r];
            }),
          t
        );
      }
      var u = Object.getPrototypeOf,
        c = {}.hasOwnProperty;
      function l(t, e) {
        return c.call(t, e);
      }
      function f(t, e) {
        "function" == typeof e && (e = e(u(t))),
          o(e).forEach(function (r) {
            h(t, r, e[r]);
          });
      }
      var p = Object.defineProperty;
      function h(t, e, r, n) {
        p(
          t,
          e,
          s(
            r && l(r, "get") && "function" == typeof r.get
              ? { get: r.get, set: r.set, configurable: !0 }
              : { value: r, configurable: !0, writable: !0 },
            n
          )
        );
      }
      function d(t) {
        return {
          from: function (e) {
            return (t.prototype = Object.create(e.prototype)), h(t.prototype, "constructor", t), { extend: f.bind(null, t.prototype) };
          }
        };
      }
      var y = Object.getOwnPropertyDescriptor;
      function g(t, e) {
        var r;
        return y(t, e) || ((r = u(t)) && g(r, e));
      }
      var v = [].slice;
      function m(t, e, r) {
        return v.call(t, e, r);
      }
      function b(t, e) {
        return e(t);
      }
      function w(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function _(t) {
        a.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function E(t, e) {
        return t.reduce(function (t, r, n) {
          var o = e(r, n);
          return o && (t[o[0]] = o[1]), t;
        }, {});
      }
      function S(t, e) {
        return function () {
          try {
            t.apply(this, arguments);
          } catch (t) {
            e(t);
          }
        };
      }
      function A(t, e, r) {
        try {
          t.apply(null, r);
        } catch (t) {
          e && e(t);
        }
      }
      function O(t, e) {
        if (l(t, e)) return t[e];
        if (!e) return t;
        if ("string" != typeof e) {
          for (var r = [], n = 0, o = e.length; n < o; ++n) {
            var i = O(t, e[n]);
            r.push(i);
          }
          return r;
        }
        var a = e.indexOf(".");
        if (-1 !== a) {
          var s = t[e.substr(0, a)];
          return void 0 === s ? void 0 : O(s, e.substr(a + 1));
        }
      }
      function x(t, e, r) {
        if (t && void 0 !== e && (!("isFrozen" in Object) || !Object.isFrozen(t)))
          if ("string" != typeof e && "length" in e) {
            w("string" != typeof r && "length" in r);
            for (var n = 0, o = e.length; n < o; ++n) x(t, e[n], r[n]);
          } else {
            var i = e.indexOf(".");
            if (-1 !== i) {
              var a = e.substr(0, i),
                s = e.substr(i + 1);
              if ("" === s) void 0 === r ? delete t[a] : (t[a] = r);
              else {
                var u = t[a];
                u || (u = t[a] = {}), x(u, s, r);
              }
            } else void 0 === r ? delete t[e] : (t[e] = r);
          }
      }
      function k(t) {
        var e = {};
        for (var r in t) l(t, r) && (e[r] = t[r]);
        return e;
      }
      var j = [].concat;
      function P(t) {
        return j.apply([], t);
      }
      var R = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set"
        .split(",")
        .concat(
          P(
            [8, 16, 32, 64].map(function (t) {
              return ["Int", "Uint", "Float"].map(function (e) {
                return e + t + "Array";
              });
            })
          )
        )
        .filter(function (t) {
          return a[t];
        })
        .map(function (t) {
          return a[t];
        });
      function T(t) {
        if (!t || "object" != typeof t) return t;
        var e;
        if (i(t)) {
          e = [];
          for (var r = 0, n = t.length; r < n; ++r) e.push(T(t[r]));
        } else if (R.indexOf(t.constructor) >= 0) e = t;
        else for (var o in ((e = t.constructor ? Object.create(t.constructor.prototype) : {}), t)) l(t, o) && (e[o] = T(t[o]));
        return e;
      }
      function I(t, e, r, n) {
        return (
          (r = r || {}),
          (n = n || ""),
          o(t).forEach(function (o) {
            if (l(e, o)) {
              var i = t[o],
                a = e[o];
              "object" == typeof i && "object" == typeof a && i && a && "" + i.constructor == "" + a.constructor
                ? I(i, a, r, n + o + ".")
                : i !== a && (r[n + o] = e[o]);
            } else r[n + o] = void 0;
          }),
          o(e).forEach(function (o) {
            l(t, o) || (r[n + o] = e[o]);
          }),
          r
        );
      }
      var U = "undefined" != typeof Symbol && Symbol.iterator,
        D = U
          ? function (t) {
              var e;
              return null != t && (e = t[U]) && e.apply(t);
            }
          : function () {
              return null;
            },
        F = {};
      function N(t) {
        var e, r, n, o;
        if (1 === arguments.length) {
          if (i(t)) return t.slice();
          if (this === F && "string" == typeof t) return [t];
          if ((o = D(t))) {
            for (r = []; !(n = o.next()).done; ) r.push(n.value);
            return r;
          }
          if (null == t) return [t];
          if ("number" == typeof (e = t.length)) {
            for (r = new Array(e); e--; ) r[e] = t[e];
            return r;
          }
          return [t];
        }
        for (e = arguments.length, r = new Array(e); e--; ) r[e] = arguments[e];
        return r;
      }
      var L = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function M(t, e) {
        (L = t), (C = e);
      }
      var C = function () {
          return !0;
        },
        B = !new Error("").stack;
      function q() {
        "use strict";
        if (B)
          try {
            throw (q.arguments, new Error());
          } catch (t) {
            return t;
          }
        return new Error();
      }
      function $(t, e) {
        var r = t.stack;
        return r
          ? ((e = e || 0),
            0 === r.indexOf(t.name) && (e += (t.name + t.message).split("\n").length),
            r
              .split("\n")
              .slice(e)
              .filter(C)
              .map(function (t) {
                return "\n" + t;
              })
              .join(""))
          : "";
      }
      var W = [
          "Unknown",
          "Constraint",
          "Data",
          "TransactionInactive",
          "ReadOnly",
          "Version",
          "NotFound",
          "InvalidState",
          "InvalidAccess",
          "Abort",
          "Timeout",
          "QuotaExceeded",
          "Syntax",
          "DataClone"
        ],
        G = [
          "Modify",
          "Bulk",
          "OpenFailed",
          "VersionChange",
          "Schema",
          "Upgrade",
          "InvalidTable",
          "MissingAPI",
          "NoSuchDatabase",
          "InvalidArgument",
          "SubTransaction",
          "Unsupported",
          "Internal",
          "DatabaseClosed",
          "PrematureCommit",
          "ForeignAwait"
        ].concat(W),
        z = {
          VersionChanged: "Database version changed by other database connection",
          DatabaseClosed: "Database has been closed",
          Abort: "Transaction aborted",
          TransactionInactive: "Transaction has already completed or failed"
        };
      function V(t, e) {
        (this._e = q()), (this.name = t), (this.message = e);
      }
      function K(t, e, r, n) {
        (this._e = q()), (this.failures = e), (this.failedKeys = n), (this.successCount = r);
      }
      function H(t, e) {
        (this._e = q()),
          (this.name = "BulkError"),
          (this.failures = e),
          (this.message = (function (t, e) {
            return (
              t +
              ". Errors: " +
              e
                .map(function (t) {
                  return t.toString();
                })
                .filter(function (t, e, r) {
                  return r.indexOf(t) === e;
                })
                .join("\n")
            );
          })(t, e));
      }
      d(V)
        .from(Error)
        .extend({
          stack: {
            get: function () {
              return this._stack || (this._stack = this.name + ": " + this.message + $(this._e, 2));
            }
          },
          toString: function () {
            return this.name + ": " + this.message;
          }
        }),
        d(K).from(V),
        d(H).from(V);
      var J = G.reduce(function (t, e) {
          return (t[e] = e + "Error"), t;
        }, {}),
        Y = V,
        X = G.reduce(function (t, e) {
          var r = e + "Error";
          function n(t, n) {
            (this._e = q()),
              (this.name = r),
              t
                ? "string" == typeof t
                  ? ((this.message = t), (this.inner = n || null))
                  : "object" == typeof t && ((this.message = t.name + " " + t.message), (this.inner = t))
                : ((this.message = z[e] || r), (this.inner = null));
          }
          return d(n).from(Y), (t[e] = n), t;
        }, {});
      (X.Syntax = SyntaxError), (X.Type = TypeError), (X.Range = RangeError);
      var Z = W.reduce(function (t, e) {
        return (t[e + "Error"] = X[e]), t;
      }, {});
      var Q = G.reduce(function (t, e) {
        return -1 === ["Syntax", "Type", "Range"].indexOf(e) && (t[e + "Error"] = X[e]), t;
      }, {});
      function tt() {}
      function et(t) {
        return t;
      }
      function rt(t, e) {
        return null == t || t === et
          ? e
          : function (r) {
              return e(t(r));
            };
      }
      function nt(t, e) {
        return function () {
          t.apply(this, arguments), e.apply(this, arguments);
        };
      }
      function ot(t, e) {
        return t === tt
          ? e
          : function () {
              var r = t.apply(this, arguments);
              void 0 !== r && (arguments[0] = r);
              var n = this.onsuccess,
                o = this.onerror;
              (this.onsuccess = null), (this.onerror = null);
              var i = e.apply(this, arguments);
              return (
                n && (this.onsuccess = this.onsuccess ? nt(n, this.onsuccess) : n),
                o && (this.onerror = this.onerror ? nt(o, this.onerror) : o),
                void 0 !== i ? i : r
              );
            };
      }
      function it(t, e) {
        return t === tt
          ? e
          : function () {
              t.apply(this, arguments);
              var r = this.onsuccess,
                n = this.onerror;
              (this.onsuccess = this.onerror = null),
                e.apply(this, arguments),
                r && (this.onsuccess = this.onsuccess ? nt(r, this.onsuccess) : r),
                n && (this.onerror = this.onerror ? nt(n, this.onerror) : n);
            };
      }
      function at(t, e) {
        return t === tt
          ? e
          : function (r) {
              var n = t.apply(this, arguments);
              s(r, n);
              var o = this.onsuccess,
                i = this.onerror;
              (this.onsuccess = null), (this.onerror = null);
              var a = e.apply(this, arguments);
              return (
                o && (this.onsuccess = this.onsuccess ? nt(o, this.onsuccess) : o),
                i && (this.onerror = this.onerror ? nt(i, this.onerror) : i),
                void 0 === n ? (void 0 === a ? void 0 : a) : s(n, a)
              );
            };
      }
      function st(t, e) {
        return t === tt
          ? e
          : function () {
              return !1 !== e.apply(this, arguments) && t.apply(this, arguments);
            };
      }
      function ut(t, e) {
        return t === tt
          ? e
          : function () {
              var r = t.apply(this, arguments);
              if (r && "function" == typeof r.then) {
                for (var n = this, o = arguments.length, i = new Array(o); o--; ) i[o] = arguments[o];
                return r.then(function () {
                  return e.apply(n, i);
                });
              }
              return e.apply(this, arguments);
            };
      }
      (Q.ModifyError = K), (Q.DexieError = V), (Q.BulkError = H);
      var ct = {},
        lt = 100,
        ft = 7,
        pt = (function () {
          try {
            return new Function("let F=async ()=>{},p=F();return [p,Object.getPrototypeOf(p),Promise.resolve(),F.constructor];")();
          } catch (e) {
            var t = a.Promise;
            return t ? [t.resolve(), t.prototype, t.resolve()] : [];
          }
        })(),
        ht = pt[0],
        dt = pt[1],
        yt = pt[2],
        gt = dt && dt.then,
        vt = ht && ht.constructor,
        mt = pt[3],
        bt = !!yt,
        wt = !1,
        _t = yt
          ? function () {
              yt.then(Gt);
            }
          : a.setImmediate
          ? setImmediate.bind(null, Gt)
          : a.MutationObserver
          ? function () {
              var t = document.createElement("div");
              new MutationObserver(function () {
                Gt(), (t = null);
              }).observe(t, { attributes: !0 }),
                t.setAttribute("i", "1");
            }
          : function () {
              setTimeout(Gt, 0);
            },
        Et = function (t, e) {
          Tt.push([t, e]), At && (_t(), (At = !1));
        },
        St = !0,
        At = !0,
        Ot = [],
        xt = [],
        kt = null,
        jt = et,
        Pt = {
          id: "global",
          global: !0,
          ref: 0,
          unhandleds: [],
          onunhandled: de,
          pgp: !1,
          env: {},
          finalize: function () {
            this.unhandleds.forEach(function (t) {
              try {
                de(t[0], t[1]);
              } catch (t) {}
            });
          }
        },
        Rt = Pt,
        Tt = [],
        It = 0,
        Ut = [];
      function Dt(t) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        (this._listeners = []), (this.onuncatched = tt), (this._lib = !1);
        var e = (this._PSD = Rt);
        if ((L && ((this._stackHolder = q()), (this._prev = null), (this._numPrev = 0)), "function" != typeof t)) {
          if (t !== ct) throw new TypeError("Not a function");
          return (this._state = arguments[1]), (this._value = arguments[2]), void (!1 === this._state && Mt(this, this._value));
        }
        (this._state = null), (this._value = null), ++e.ref, Lt(this, t);
      }
      var Ft = {
        get: function () {
          var t = Rt,
            e = te;
          function r(r, n) {
            var o = this,
              i = !t.global && (t !== Rt || e !== te);
            i && oe();
            var a = new Dt(function (e, a) {
              Bt(o, new Nt(fe(r, t, i), fe(n, t, i), e, a, t));
            });
            return L && Wt(a, this), a;
          }
          return (r.prototype = ct), r;
        },
        set: function (t) {
          h(
            this,
            "then",
            t && t.prototype === ct
              ? Ft
              : {
                  get: function () {
                    return t;
                  },
                  set: Ft.set
                }
          );
        }
      };
      function Nt(t, e, r, n, o) {
        (this.onFulfilled = "function" == typeof t ? t : null),
          (this.onRejected = "function" == typeof e ? e : null),
          (this.resolve = r),
          (this.reject = n),
          (this.psd = o);
      }
      function Lt(t, e) {
        try {
          e(
            function (e) {
              if (null === t._state) {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                var r = t._lib && zt();
                e && "function" == typeof e.then
                  ? Lt(t, function (t, r) {
                      e instanceof Dt ? e._then(t, r) : e.then(t, r);
                    })
                  : ((t._state = !0), (t._value = e), Ct(t)),
                  r && Vt();
              }
            },
            Mt.bind(null, t)
          );
        } catch (e) {
          Mt(t, e);
        }
      }
      function Mt(t, e) {
        if ((xt.push(e), null === t._state)) {
          var r = t._lib && zt();
          (e = jt(e)),
            (t._state = !1),
            (t._value = e),
            L &&
              null !== e &&
              "object" == typeof e &&
              !e._promise &&
              A(function () {
                var r = g(e, "stack");
                (e._promise = t),
                  h(e, "stack", {
                    get: function () {
                      return wt ? r && (r.get ? r.get.apply(e) : r.value) : t.stack;
                    }
                  });
              }),
            (function (t) {
              Ot.some(function (e) {
                return e._value === t._value;
              }) || Ot.push(t);
            })(t),
            Ct(t),
            r && Vt();
        }
      }
      function Ct(t) {
        var e = t._listeners;
        t._listeners = [];
        for (var r = 0, n = e.length; r < n; ++r) Bt(t, e[r]);
        var o = t._PSD;
        --o.ref || o.finalize(),
          0 === It &&
            (++It,
            Et(function () {
              0 == --It && Kt();
            }, []));
      }
      function Bt(t, e) {
        if (null !== t._state) {
          var r = t._state ? e.onFulfilled : e.onRejected;
          if (null === r) return (t._state ? e.resolve : e.reject)(t._value);
          ++e.psd.ref, ++It, Et(qt, [r, t, e]);
        } else t._listeners.push(e);
      }
      function qt(t, e, r) {
        try {
          kt = e;
          var n,
            o = e._value;
          e._state
            ? (n = t(o))
            : (xt.length && (xt = []),
              (n = t(o)),
              -1 === xt.indexOf(o) &&
                (function (t) {
                  var e = Ot.length;
                  for (; e; ) if (Ot[--e]._value === t._value) return void Ot.splice(e, 1);
                })(e)),
            r.resolve(n);
        } catch (t) {
          r.reject(t);
        } finally {
          (kt = null), 0 == --It && Kt(), --r.psd.ref || r.psd.finalize();
        }
      }
      function $t(t, e, r) {
        if (e.length === r) return e;
        var n = "";
        if (!1 === t._state) {
          var o,
            i,
            a = t._value;
          null != a ? ((o = a.name || "Error"), (i = a.message || a), (n = $(a, 0))) : ((o = a), (i = "")),
            e.push(o + (i ? ": " + i : "") + n);
        }
        return L && ((n = $(t._stackHolder, 2)) && -1 === e.indexOf(n) && e.push(n), t._prev && $t(t._prev, e, r)), e;
      }
      function Wt(t, e) {
        var r = e ? e._numPrev + 1 : 0;
        r < lt && ((t._prev = e), (t._numPrev = r));
      }
      function Gt() {
        zt() && Vt();
      }
      function zt() {
        var t = St;
        return (St = !1), (At = !1), t;
      }
      function Vt() {
        var t, e, r;
        do {
          for (; Tt.length > 0; )
            for (t = Tt, Tt = [], r = t.length, e = 0; e < r; ++e) {
              var n = t[e];
              n[0].apply(null, n[1]);
            }
        } while (Tt.length > 0);
        (St = !0), (At = !0);
      }
      function Kt() {
        var t = Ot;
        (Ot = []),
          t.forEach(function (t) {
            t._PSD.onunhandled.call(null, t._value, t);
          });
        for (var e = Ut.slice(0), r = e.length; r; ) e[--r]();
      }
      function Ht(t) {
        return new Dt(ct, !1, t);
      }
      function Jt(t, e) {
        var r = Rt;
        return function () {
          var n = zt(),
            o = Rt;
          try {
            return ue(r, !0), t.apply(this, arguments);
          } catch (t) {
            e && e(t);
          } finally {
            ue(o, !1), n && Vt();
          }
        };
      }
      f(Dt.prototype, {
        then: Ft,
        _then: function (t, e) {
          Bt(this, new Nt(null, null, t, e, Rt));
        },
        catch: function (t) {
          if (1 === arguments.length) return this.then(null, t);
          var e = arguments[0],
            r = arguments[1];
          return "function" == typeof e
            ? this.then(null, function (t) {
                return t instanceof e ? r(t) : Ht(t);
              })
            : this.then(null, function (t) {
                return t && t.name === e ? r(t) : Ht(t);
              });
        },
        finally: function (t) {
          return this.then(
            function (e) {
              return t(), e;
            },
            function (e) {
              return t(), Ht(e);
            }
          );
        },
        stack: {
          get: function () {
            if (this._stack) return this._stack;
            try {
              wt = !0;
              var t = $t(this, [], 20).join("\nFrom previous: ");
              return null !== this._state && (this._stack = t), t;
            } finally {
              wt = !1;
            }
          }
        },
        timeout: function (t, e) {
          var r = this;
          return t < 1 / 0
            ? new Dt(function (n, o) {
                var i = setTimeout(function () {
                  return o(new X.Timeout(e));
                }, t);
                r.then(n, o).finally(clearTimeout.bind(null, i));
              })
            : this;
        }
      }),
        "undefined" != typeof Symbol && Symbol.toStringTag && h(Dt.prototype, Symbol.toStringTag, "Promise"),
        (Pt.env = ce()),
        f(Dt, {
          all: function () {
            var t = N.apply(null, arguments).map(ie);
            return new Dt(function (e, r) {
              0 === t.length && e([]);
              var n = t.length;
              t.forEach(function (o, i) {
                return Dt.resolve(o).then(function (r) {
                  (t[i] = r), --n || e(t);
                }, r);
              });
            });
          },
          resolve: function (t) {
            if (t instanceof Dt) return t;
            if (t && "function" == typeof t.then)
              return new Dt(function (e, r) {
                t.then(e, r);
              });
            var e = new Dt(ct, !0, t);
            return Wt(e, kt), e;
          },
          reject: Ht,
          race: function () {
            var t = N.apply(null, arguments).map(ie);
            return new Dt(function (e, r) {
              t.map(function (t) {
                return Dt.resolve(t).then(e, r);
              });
            });
          },
          PSD: {
            get: function () {
              return Rt;
            },
            set: function (t) {
              return (Rt = t);
            }
          },
          newPSD: re,
          usePSD: le,
          scheduler: {
            get: function () {
              return Et;
            },
            set: function (t) {
              Et = t;
            }
          },
          rejectionMapper: {
            get: function () {
              return jt;
            },
            set: function (t) {
              jt = t;
            }
          },
          follow: function (t, e) {
            return new Dt(function (r, n) {
              return re(
                function (e, r) {
                  var n = Rt;
                  (n.unhandleds = []),
                    (n.onunhandled = r),
                    (n.finalize = nt(function () {
                      var t = this;
                      !(function (t) {
                        function e() {
                          t(), Ut.splice(Ut.indexOf(e), 1);
                        }
                        Ut.push(e),
                          ++It,
                          Et(function () {
                            0 == --It && Kt();
                          }, []);
                      })(function () {
                        0 === t.unhandleds.length ? e() : r(t.unhandleds[0]);
                      });
                    }, n.finalize)),
                    t();
                },
                e,
                r,
                n
              );
            });
          }
        });
      var Yt = { awaits: 0, echoes: 0, id: 0 },
        Xt = 0,
        Zt = [],
        Qt = 0,
        te = 0,
        ee = 0;
      function re(t, e, r, n) {
        var o = Rt,
          i = Object.create(o);
        (i.parent = o), (i.ref = 0), (i.global = !1), (i.id = ++ee);
        var a = Pt.env;
        (i.env = bt
          ? {
              Promise: Dt,
              PromiseProp: { value: Dt, configurable: !0, writable: !0 },
              all: Dt.all,
              race: Dt.race,
              resolve: Dt.resolve,
              reject: Dt.reject,
              nthen: pe(a.nthen, i),
              gthen: pe(a.gthen, i)
            }
          : {}),
          e && s(i, e),
          ++o.ref,
          (i.finalize = function () {
            --this.parent.ref || this.parent.finalize();
          });
        var u = le(i, t, r, n);
        return 0 === i.ref && i.finalize(), u;
      }
      function ne() {
        return Yt.id || (Yt.id = ++Xt), ++Yt.awaits, (Yt.echoes += ft), Yt.id;
      }
      function oe(t) {
        !Yt.awaits || (t && t !== Yt.id) || (0 == --Yt.awaits && (Yt.id = 0), (Yt.echoes = Yt.awaits * ft));
      }
      function ie(t) {
        return Yt.echoes && t && t.constructor === vt
          ? (ne(),
            t.then(
              function (t) {
                return oe(), t;
              },
              function (t) {
                return oe(), ye(t);
              }
            ))
          : t;
      }
      function ae(t) {
        ++te, (Yt.echoes && 0 != --Yt.echoes) || (Yt.echoes = Yt.id = 0), Zt.push(Rt), ue(t, !0);
      }
      function se() {
        var t = Zt[Zt.length - 1];
        Zt.pop(), ue(t, !1);
      }
      function ue(t, e) {
        var r,
          n = Rt;
        if (
          ((e ? !Yt.echoes || (Qt++ && t === Rt) : !Qt || (--Qt && t === Rt)) || ((r = e ? ae.bind(null, t) : se), gt.call(ht, r)),
          t !== Rt && ((Rt = t), n === Pt && (Pt.env = ce()), bt))
        ) {
          var o = Pt.env.Promise,
            i = t.env;
          (dt.then = i.nthen),
            (o.prototype.then = i.gthen),
            (n.global || t.global) &&
              (Object.defineProperty(a, "Promise", i.PromiseProp),
              (o.all = i.all),
              (o.race = i.race),
              (o.resolve = i.resolve),
              (o.reject = i.reject));
        }
      }
      function ce() {
        var t = a.Promise;
        return bt
          ? {
              Promise: t,
              PromiseProp: Object.getOwnPropertyDescriptor(a, "Promise"),
              all: t.all,
              race: t.race,
              resolve: t.resolve,
              reject: t.reject,
              nthen: dt.then,
              gthen: t.prototype.then
            }
          : {};
      }
      function le(t, e, r, n, o) {
        var i = Rt;
        try {
          return ue(t, !0), e(r, n, o);
        } finally {
          ue(i, !1);
        }
      }
      function fe(t, e, r) {
        return "function" != typeof t
          ? t
          : function () {
              var n = Rt;
              r && ne(), ue(e, !0);
              try {
                return t.apply(this, arguments);
              } finally {
                ue(n, !1);
              }
            };
      }
      function pe(t, e) {
        return function (r, n) {
          return t.call(this, fe(r, e, !1), fe(n, e, !1));
        };
      }
      var he = "unhandledrejection";
      function de(t, e) {
        var r;
        try {
          r = e.onuncatched(t);
        } catch (t) {}
        if (!1 !== r)
          try {
            var n,
              o = { promise: e, reason: t };
            if (
              (a.document && document.createEvent
                ? ((n = document.createEvent("Event")).initEvent(he, !0, !0), s(n, o))
                : a.CustomEvent && s((n = new CustomEvent(he, { detail: o })), o),
              n && a.dispatchEvent && (dispatchEvent(n), !a.PromiseRejectionEvent && a.onunhandledrejection))
            )
              try {
                a.onunhandledrejection(n);
              } catch (t) {}
            n.defaultPrevented || console.warn("Unhandled rejection: " + (t.stack || t));
          } catch (t) {}
      }
      var ye = Dt.reject;
      function ge(t) {
        var e = {},
          r = function (r, n) {
            if (n) {
              for (var o = arguments.length, i = new Array(o - 1); --o; ) i[o - 1] = arguments[o];
              return e[r].subscribe.apply(null, i), t;
            }
            if ("string" == typeof r) return e[r];
          };
        r.addEventType = s;
        for (var n = 1, a = arguments.length; n < a; ++n) s(arguments[n]);
        return r;
        function s(t, n, a) {
          if ("object" != typeof t) {
            var u;
            n || (n = st), a || (a = tt);
            var c = {
              subscribers: [],
              fire: a,
              subscribe: function (t) {
                -1 === c.subscribers.indexOf(t) && (c.subscribers.push(t), (c.fire = n(c.fire, t)));
              },
              unsubscribe: function (t) {
                (c.subscribers = c.subscribers.filter(function (e) {
                  return e !== t;
                })),
                  (c.fire = c.subscribers.reduce(n, a));
              }
            };
            return (e[t] = r[t] = c), c;
          }
          o((u = t)).forEach(function (t) {
            var e = u[t];
            if (i(e)) s(t, u[t][0], u[t][1]);
            else {
              if ("asap" !== e) throw new X.InvalidArgument("Invalid event config");
              var r = s(t, et, function () {
                for (var t = arguments.length, e = new Array(t); t--; ) e[t] = arguments[t];
                r.subscribers.forEach(function (t) {
                  _(function () {
                    t.apply(null, e);
                  });
                });
              });
            }
          });
        }
      }
      var ve,
        me = "{version}",
        be = String.fromCharCode(65535),
        we = (function () {
          try {
            return IDBKeyRange.only([[]]), [[]];
          } catch (t) {
            return be;
          }
        })(),
        _e = -1 / 0,
        Ee = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
        Se = "String expected.",
        Ae = [],
        Oe = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
        xe = Oe,
        ke = Oe,
        je = function (t) {
          return !/(dexie\.js|dexie\.min\.js)/.test(t);
        };
      function Pe(t, e) {
        var r,
          n,
          u,
          c,
          p,
          d = Pe.dependencies,
          y = s({ addons: Pe.addons, autoOpen: !0, indexedDB: d.indexedDB, IDBKeyRange: d.IDBKeyRange }, e),
          g = y.addons,
          v = y.autoOpen,
          _ = y.indexedDB,
          j = y.IDBKeyRange,
          R = (this._dbSchema = {}),
          U = [],
          D = [],
          M = {},
          C = null,
          B = null,
          W = !1,
          G = null,
          z = !1,
          V = "readonly",
          J = "readwrite",
          Y = this,
          Z = new Dt(function (t) {
            r = t;
          }),
          Q = new Dt(function (t, e) {
            n = e;
          }),
          nt = !0,
          st = !!qe(_);
        function ct(t) {
          (this._cfg = { version: t, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null }), this.stores({});
        }
        function lt(t, e, r) {
          var n = Y._createTransaction(J, D, R);
          n.create(e), n._completion.catch(r);
          var i = n._reject.bind(n);
          re(function () {
            (Rt.trans = n),
              0 === t
                ? (o(R).forEach(function (t) {
                    ft(e, t, R[t].primKey, R[t].indexes);
                  }),
                  Dt.follow(function () {
                    return Y.on.populate.fire(n);
                  }).catch(i))
                : (function (t, e, r) {
                    var n = [],
                      i = U.filter(function (e) {
                        return e._cfg.version === t;
                      })[0];
                    if (!i) throw new X.Upgrade("Dexie specification of currently installed DB version is missing");
                    R = Y._dbSchema = i._cfg.dbschema;
                    var a = !1,
                      s = U.filter(function (e) {
                        return e._cfg.version > t;
                      });
                    function u() {
                      return n.length ? Dt.resolve(n.shift()(e.idbtrans)).then(u) : Dt.resolve();
                    }
                    return (
                      s.forEach(function (t) {
                        n.push(function () {
                          var n = R,
                            o = t._cfg.dbschema;
                          Nt(n, r), Nt(o, r), (R = Y._dbSchema = o);
                          var i = (function (t, e) {
                            var r = { del: [], add: [], change: [] };
                            for (var n in t) e[n] || r.del.push(n);
                            for (n in e) {
                              var o = t[n],
                                i = e[n];
                              if (o) {
                                var a = { name: n, def: i, recreate: !1, del: [], add: [], change: [] };
                                if (o.primKey.src !== i.primKey.src) (a.recreate = !0), r.change.push(a);
                                else {
                                  var s = o.idxByName,
                                    u = i.idxByName;
                                  for (var c in s) u[c] || a.del.push(c);
                                  for (c in u) {
                                    var l = s[c],
                                      f = u[c];
                                    l ? l.src !== f.src && a.change.push(f) : a.add.push(f);
                                  }
                                  (a.del.length > 0 || a.add.length > 0 || a.change.length > 0) && r.change.push(a);
                                }
                              } else r.add.push([n, i]);
                            }
                            return r;
                          })(n, o);
                          if (
                            (i.add.forEach(function (t) {
                              ft(r, t[0], t[1].primKey, t[1].indexes);
                            }),
                            i.change.forEach(function (t) {
                              if (t.recreate) throw new X.Upgrade("Not yet support for changing primary key");
                              var e = r.objectStore(t.name);
                              t.add.forEach(function (t) {
                                pt(e, t);
                              }),
                                t.change.forEach(function (t) {
                                  e.deleteIndex(t.name), pt(e, t);
                                }),
                                t.del.forEach(function (t) {
                                  e.deleteIndex(t);
                                });
                            }),
                            t._cfg.contentUpgrade)
                          )
                            return (
                              (a = !0),
                              Dt.follow(function () {
                                t._cfg.contentUpgrade(e);
                              })
                            );
                        }),
                          n.push(function (e) {
                            (a && xe) ||
                              (function (t, e) {
                                for (var r = 0; r < e.db.objectStoreNames.length; ++r) {
                                  var n = e.db.objectStoreNames[r];
                                  null == t[n] && e.db.deleteObjectStore(n);
                                }
                              })(t._cfg.dbschema, e);
                          });
                      }),
                      u().then(function () {
                        !(function (t, e) {
                          o(t).forEach(function (r) {
                            e.db.objectStoreNames.contains(r) || ft(e, r, t[r].primKey, t[r].indexes);
                          });
                        })(R, r);
                      })
                    );
                  })(t, n, e).catch(i);
          });
        }
        function ft(t, e, r, n) {
          var o = t.db.createObjectStore(e, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
          return (
            n.forEach(function (t) {
              pt(o, t);
            }),
            o
          );
        }
        function pt(t, e) {
          t.createIndex(e.name, e.keyPath, { unique: e.unique, multiEntry: e.multi });
        }
        function ht(t, e, r) {
          if (z || Rt.letThrough) {
            var n = Y._createTransaction(t, e, R);
            try {
              n.create();
            } catch (t) {
              return ye(t);
            }
            return n
              ._promise(t, function (t, e) {
                return re(function () {
                  return (Rt.trans = n), r(t, e, n);
                });
              })
              .then(function (t) {
                return n._completion.then(function () {
                  return t;
                });
              });
          }
          if (!W) {
            if (!v) return ye(new X.DatabaseClosed());
            Y.open().catch(tt);
          }
          return Z.then(function () {
            return ht(t, e, r);
          });
        }
        function dt(t, e, r) {
          var n = arguments.length;
          if (n < 2) throw new X.InvalidArgument("Too few arguments");
          for (var o = new Array(n - 1); --n; ) o[n - 1] = arguments[n];
          return (r = o.pop()), [t, P(o), r];
        }
        function yt(t, e, r) {
          (this.name = t),
            (this.schema = e),
            (this._tx = r),
            (this.hook = M[t] ? M[t].hook : ge(null, { creating: [ot, tt], reading: [rt, et], updating: [at, tt], deleting: [it, tt] }));
        }
        function gt(t, e, r) {
          return (r ? Fe : Ue)(function (r) {
            t.push(r), e && e();
          });
        }
        function bt(t, e, r, n, o) {
          return new Dt(function (i, a) {
            var s = r.length,
              u = s - 1;
            if (0 === s) return i();
            if (n) {
              var c,
                l = Fe(a),
                f = Ie(null);
              A(
                function () {
                  for (var n = 0; n < s; ++n) {
                    c = { onsuccess: null, onerror: null };
                    var a = r[n];
                    o.call(c, a[0], a[1], e);
                    var p = t.delete(a[0]);
                    (p._hookCtx = c), (p.onerror = l), (p.onsuccess = n === u ? Ie(i) : f);
                  }
                },
                function (t) {
                  throw (c.onerror && c.onerror(t), t);
                }
              );
            } else
              for (var p = 0; p < s; ++p) {
                var h = t.delete(r[p]);
                (h.onerror = Ue(a)),
                  p === u &&
                    (h.onsuccess = Jt(function () {
                      return i();
                    }));
              }
          });
        }
        function wt(t, e, r, n) {
          var o = this;
          (this.db = Y),
            (this.mode = t),
            (this.storeNames = e),
            (this.idbtrans = null),
            (this.on = ge(this, "complete", "error", "abort")),
            (this.parent = n || null),
            (this.active = !0),
            (this._reculock = 0),
            (this._blockedFuncs = []),
            (this._resolve = null),
            (this._reject = null),
            (this._waitingFor = null),
            (this._waitingQueue = null),
            (this._spinCount = 0),
            (this._completion = new Dt(function (t, e) {
              (o._resolve = t), (o._reject = e);
            })),
            this._completion.then(
              function () {
                (o.active = !1), o.on.complete.fire();
              },
              function (t) {
                var e = o.active;
                return (o.active = !1), o.on.error.fire(t), o.parent ? o.parent._reject(t) : e && o.idbtrans && o.idbtrans.abort(), ye(t);
              }
            );
        }
        function _t(t, e, r) {
          this._ctx = { table: t, index: ":id" === e ? null : e, or: r };
        }
        function Et(t, e) {
          var r = null,
            n = null;
          if (e)
            try {
              r = e();
            } catch (t) {
              n = t;
            }
          var o = t._ctx,
            i = o.table;
          this._ctx = {
            table: i,
            index: o.index,
            isPrimKey: !o.index || (i.schema.primKey.keyPath && o.index === i.schema.primKey.name),
            range: r,
            keysOnly: !1,
            dir: "next",
            unique: "",
            algorithm: null,
            filter: null,
            replayFilter: null,
            justLimit: !0,
            isMatch: null,
            offset: 0,
            limit: 1 / 0,
            error: n,
            or: o.or,
            valueMapper: i.hook.reading.fire
          };
        }
        function St(t, e) {
          return !(t.filter || t.algorithm || t.or) && (e ? t.justLimit : !t.replayFilter);
        }
        function At(t, e) {
          return t._cfg.version - e._cfg.version;
        }
        function Ot(t, e, r) {
          e.forEach(function (e) {
            var n = r[e];
            t.forEach(function (t) {
              e in t ||
                (t === wt.prototype || t instanceof wt
                  ? h(t, e, {
                      get: function () {
                        return this.table(e);
                      }
                    })
                  : (t[e] = new yt(e, n)));
            });
          });
        }
        function xt(t, e, r, n, o, i) {
          var a = Jt(
            i
              ? function (t, e, n) {
                  return r(i(t), e, n);
                }
              : r,
            o
          );
          t.onerror || (t.onerror = Ue(o)),
            (t.onsuccess = S(
              e
                ? function () {
                    var r = t.result;
                    if (r) {
                      var i = function () {
                        r.continue();
                      };
                      e(
                        r,
                        function (t) {
                          i = t;
                        },
                        n,
                        o
                      ) &&
                        a(r.value, r, function (t) {
                          i = t;
                        }),
                        i();
                    } else n();
                  }
                : function () {
                    var e = t.result;
                    if (e) {
                      var r = function () {
                        e.continue();
                      };
                      a(e.value, e, function (t) {
                        r = t;
                      }),
                        r();
                    } else n();
                  },
              o
            ));
        }
        function kt(t, e) {
          return _.cmp(t, e);
        }
        function jt(t, e) {
          return kt(t, e) > 0 ? t : e;
        }
        function Pt(t, e) {
          return _.cmp(t, e);
        }
        function Tt(t, e) {
          return _.cmp(e, t);
        }
        function It(t, e) {
          return t < e ? -1 : t === e ? 0 : 1;
        }
        function Ut(t, e) {
          return t > e ? -1 : t === e ? 0 : 1;
        }
        function Ft(t, e) {
          return t
            ? e
              ? function () {
                  return t.apply(this, arguments) && e.apply(this, arguments);
                }
              : t
            : e;
        }
        function Nt(t, e) {
          for (var r = e.db.objectStoreNames, n = 0; n < r.length; ++n) {
            var o = r[n],
              i = e.objectStore(o);
            u = "getAll" in i;
            for (var s = 0; s < i.indexNames.length; ++s) {
              var c = i.indexNames[s],
                l = i.index(c).keyPath,
                f = "string" == typeof l ? l : "[" + m(l).join("+") + "]";
              if (t[o]) {
                var p = t[o].idxByName[f];
                p && (p.name = c);
              }
            }
          }
          /Safari/.test(navigator.userAgent) &&
            !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
            a.WorkerGlobalScope &&
            a instanceof a.WorkerGlobalScope &&
            [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
            (u = !1);
        }
        function Lt(t) {
          Y.on("blocked").fire(t),
            Ae.filter(function (t) {
              return t.name === Y.name && t !== Y && !t._vcFired;
            }).map(function (e) {
              return e.on("versionchange").fire(t);
            });
        }
        (this.version = function (t) {
          if (C || W) throw new X.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, t);
          var e = U.filter(function (e) {
            return e._cfg.version === t;
          })[0];
          return e || ((e = new ct(t)), U.push(e), U.sort(At), (nt = !1), e);
        }),
          s(ct.prototype, {
            stores: function (t) {
              this._cfg.storesSource = this._cfg.storesSource ? s(this._cfg.storesSource, t) : t;
              var e = {};
              U.forEach(function (t) {
                s(e, t._cfg.storesSource);
              });
              var r = (this._cfg.dbschema = {});
              return (
                this._parseStoresSpec(e, r),
                (R = Y._dbSchema = r),
                [M, Y, wt.prototype].forEach(function (t) {
                  for (var e in t) t[e] instanceof yt && delete t[e];
                }),
                Ot([M, Y, wt.prototype, this._cfg.tables], o(r), r),
                (D = o(r)),
                this
              );
            },
            upgrade: function (t) {
              return (this._cfg.contentUpgrade = t), this;
            },
            _parseStoresSpec: function (t, e) {
              o(t).forEach(function (r) {
                if (null !== t[r]) {
                  var n = {},
                    o = (function (t) {
                      var e = [];
                      return (
                        t.split(",").forEach(function (t) {
                          var r = (t = t.trim()).replace(/([&*]|\+\+)/g, ""),
                            n = /^\[/.test(r) ? r.match(/^\[(.*)\]$/)[1].split("+") : r;
                          e.push(new Me(r, n || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), i(n), /\./.test(t)));
                        }),
                        e
                      );
                    })(t[r]),
                    a = o.shift();
                  if (a.multi) throw new X.Schema("Primary key cannot be multi-valued");
                  a.keyPath && x(n, a.keyPath, a.auto ? 0 : a.keyPath),
                    o.forEach(function (t) {
                      if (t.auto) throw new X.Schema("Only primary key can be marked as autoIncrement (++)");
                      if (!t.keyPath) throw new X.Schema("Index must have a name and cannot be an empty string");
                      x(
                        n,
                        t.keyPath,
                        t.compound
                          ? t.keyPath.map(function () {
                              return "";
                            })
                          : ""
                      );
                    }),
                    (e[r] = new Ce(r, a, o, n));
                }
              });
            }
          }),
          (this._allTables = M),
          (this._createTransaction = function (t, e, r, n) {
            return new wt(t, e, r, n);
          }),
          (this._whenReady = function (t) {
            return z || Rt.letThrough
              ? t()
              : new Dt(function (t, e) {
                  if (!W) {
                    if (!v) return void e(new X.DatabaseClosed());
                    Y.open().catch(tt);
                  }
                  Z.then(t, e);
                }).then(t);
          }),
          (this.verno = 0),
          (this.open = function () {
            if (W || C)
              return Z.then(function () {
                return B ? ye(B) : Y;
              });
            L && (Q._stackHolder = q()), (W = !0), (B = null), (z = !1);
            var e = r,
              n = null;
            return Dt.race([
              Q,
              new Dt(function (e, r) {
                if (!_)
                  throw new X.MissingAPI(
                    "indexedDB API not found. If using IE10+, make sure to run your code on a server URL (not locally). If using old Safari versions, make sure to include indexedDB polyfill."
                  );
                var i = nt ? _.open(t) : _.open(t, Math.round(10 * Y.verno));
                if (!i) throw new X.MissingAPI("IndexedDB API not available");
                (i.onerror = Ue(r)),
                  (i.onblocked = Jt(Lt)),
                  (i.onupgradeneeded = Jt(function (e) {
                    if (((n = i.transaction), nt && !Y._allowEmptyDB)) {
                      (i.onerror = Ne), n.abort(), i.result.close();
                      var o = _.deleteDatabase(t);
                      o.onsuccess = o.onerror = Jt(function () {
                        r(new X.NoSuchDatabase("Database " + t + " doesnt exist"));
                      });
                    } else {
                      (n.onerror = Ue(r)), lt((e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion) / 10, n, r);
                    }
                  }, r)),
                  (i.onsuccess = Jt(function () {
                    if (((n = null), (C = i.result), Ae.push(Y), nt))
                      !(function () {
                        if (((Y.verno = C.version / 10), (Y._dbSchema = R = {}), 0 === (D = m(C.objectStoreNames, 0)).length)) return;
                        var t = C.transaction(Be(D), "readonly");
                        D.forEach(function (e) {
                          for (
                            var r = t.objectStore(e),
                              n = r.keyPath,
                              o = n && "string" == typeof n && -1 !== n.indexOf("."),
                              i = new Me(n, n || "", !1, !1, !!r.autoIncrement, n && "string" != typeof n, o),
                              a = [],
                              s = 0;
                            s < r.indexNames.length;
                            ++s
                          ) {
                            var u = r.index(r.indexNames[s]);
                            o = (n = u.keyPath) && "string" == typeof n && -1 !== n.indexOf(".");
                            var c = new Me(u.name, n, !!u.unique, !!u.multiEntry, !1, n && "string" != typeof n, o);
                            a.push(c);
                          }
                          R[e] = new Ce(e, i, a, {});
                        }),
                          Ot([M], o(R), R);
                      })();
                    else if (C.objectStoreNames.length > 0)
                      try {
                        Nt(R, C.transaction(Be(C.objectStoreNames), V));
                      } catch (t) {}
                    (C.onversionchange = Jt(function (t) {
                      (Y._vcFired = !0), Y.on("versionchange").fire(t);
                    })),
                      st || "__dbnames" === t || ve.dbnames.put({ name: t }).catch(tt),
                      e();
                  }, r));
              })
            ])
              .then(function () {
                return (
                  (G = []),
                  Dt.resolve(Pe.vip(Y.on.ready.fire)).then(function t() {
                    if (G.length > 0) {
                      var e = G.reduce(ut, tt);
                      return (G = []), Dt.resolve(Pe.vip(e)).then(t);
                    }
                  })
                );
              })
              .finally(function () {
                G = null;
              })
              .then(function () {
                return (W = !1), Y;
              })
              .catch(function (t) {
                try {
                  n && n.abort();
                } catch (t) {}
                return (W = !1), Y.close(), ye((B = t));
              })
              .finally(function () {
                (z = !0), e();
              });
          }),
          (this.close = function () {
            var t = Ae.indexOf(Y);
            if ((t >= 0 && Ae.splice(t, 1), C)) {
              try {
                C.close();
              } catch (t) {}
              C = null;
            }
            (v = !1),
              (B = new X.DatabaseClosed()),
              W && n(B),
              (Z = new Dt(function (t) {
                r = t;
              })),
              (Q = new Dt(function (t, e) {
                n = e;
              }));
          }),
          (this.delete = function () {
            var e = arguments.length > 0;
            return new Dt(function (r, n) {
              if (e) throw new X.InvalidArgument("Arguments not allowed in db.delete()");
              function o() {
                Y.close();
                var e = _.deleteDatabase(t);
                (e.onsuccess = Jt(function () {
                  st || ve.dbnames.delete(t).catch(tt), r();
                })),
                  (e.onerror = Ue(n)),
                  (e.onblocked = Lt);
              }
              W ? Z.then(o) : o();
            });
          }),
          (this.backendDB = function () {
            return C;
          }),
          (this.isOpen = function () {
            return null !== C;
          }),
          (this.hasBeenClosed = function () {
            return B && B instanceof X.DatabaseClosed;
          }),
          (this.hasFailed = function () {
            return null !== B;
          }),
          (this.dynamicallyOpened = function () {
            return nt;
          }),
          (this.name = t),
          f(this, {
            tables: {
              get: function () {
                return o(M).map(function (t) {
                  return M[t];
                });
              }
            }
          }),
          (this.on = ge(this, "populate", "blocked", "versionchange", { ready: [ut, tt] })),
          (this.on.ready.subscribe = b(this.on.ready.subscribe, function (t) {
            return function (e, r) {
              Pe.vip(function () {
                z
                  ? (B || Dt.resolve().then(e), r && t(e))
                  : G
                  ? (G.push(e), r && t(e))
                  : (t(e),
                    r ||
                      t(function t() {
                        Y.on.ready.unsubscribe(e), Y.on.ready.unsubscribe(t);
                      }));
              });
            };
          })),
          (this.transaction = function () {
            var t = dt.apply(this, arguments);
            return this._transaction.apply(this, t);
          }),
          (this._transaction = function (t, e, r) {
            var n = Rt.trans;
            (n && n.db === Y && -1 === t.indexOf("!")) || (n = null);
            var o = -1 !== t.indexOf("?");
            t = t.replace("!", "").replace("?", "");
            try {
              var i = e.map(function (t) {
                var e = t instanceof yt ? t.name : t;
                if ("string" != typeof e)
                  throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return e;
              });
              if ("r" == t || t == V) t = V;
              else {
                if ("rw" != t && t != J) throw new X.InvalidArgument("Invalid transaction mode: " + t);
                t = J;
              }
              if (n) {
                if (n.mode === V && t === J) {
                  if (!o)
                    throw new X.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                  n = null;
                }
                n &&
                  i.forEach(function (t) {
                    if (n && -1 === n.storeNames.indexOf(t)) {
                      if (!o) throw new X.SubTransaction("Table " + t + " not included in parent transaction.");
                      n = null;
                    }
                  }),
                  o && n && !n.active && (n = null);
              }
            } catch (t) {
              return n
                ? n._promise(null, function (e, r) {
                    r(t);
                  })
                : ye(t);
            }
            return n
              ? n._promise(t, a, "lock")
              : Rt.trans
              ? le(Rt.transless, function () {
                  return Y._whenReady(a);
                })
              : Y._whenReady(a);
            function a() {
              return Dt.resolve().then(function () {
                var e,
                  o = Rt.transless || Rt,
                  a = Y._createTransaction(t, i, R, n),
                  s = { trans: a, transless: o };
                n ? (a.idbtrans = n.idbtrans) : a.create(), r.constructor === mt && ne();
                var u = Dt.follow(function () {
                  if ((e = r.call(a, a)))
                    if (e.constructor === vt) {
                      var t = oe.bind(null, null);
                      e.then(t, t);
                    } else "function" == typeof e.next && "function" == typeof e.throw && (e = Le(e));
                }, s);
                return (
                  e && "function" == typeof e.then
                    ? Dt.resolve(e).then(function (t) {
                        return a.active ? t : ye(new X.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
                      })
                    : u.then(function () {
                        return e;
                      })
                )
                  .then(function (t) {
                    return (
                      n && a._resolve(),
                      a._completion.then(function () {
                        return t;
                      })
                    );
                  })
                  .catch(function (t) {
                    return a._reject(t), ye(t);
                  });
              });
            }
          }),
          (this.table = function (t) {
            if (!l(M, t)) throw new X.InvalidTable("Table " + t + " does not exist");
            return M[t];
          }),
          f(yt.prototype, {
            _trans: function (t, e, r) {
              var n = this._tx || Rt.trans;
              return n && n.db === Y
                ? n === Rt.trans
                  ? n._promise(t, e, r)
                  : re(
                      function () {
                        return n._promise(t, e, r);
                      },
                      { trans: n, transless: Rt.transless || Rt }
                    )
                : ht(t, [this.name], e);
            },
            _idbstore: function (t, e, r) {
              var n = this.name;
              return this._trans(
                t,
                function (t, r, o) {
                  if (-1 === o.storeNames.indexOf(n)) throw new X.NotFound("Table" + n + " not part of transaction");
                  return e(t, r, o.idbtrans.objectStore(n), o);
                },
                r
              );
            },
            get: function (t, e) {
              if (t && t.constructor === Object) return this.where(t).first(e);
              var r = this;
              return this._idbstore(V, function (e, n, o) {
                var i = o.get(t);
                (i.onerror = Ue(n)),
                  (i.onsuccess = Jt(function () {
                    e(r.hook.reading.fire(i.result));
                  }, n));
              }).then(e);
            },
            where: function (t) {
              if ("string" == typeof t) return new _t(this, t);
              if (i(t)) return new _t(this, "[" + t.join("+") + "]");
              var e = o(t);
              if (1 === e.length) return this.where(e[0]).equals(t[e[0]]);
              var r = this.schema.indexes.concat(this.schema.primKey).filter(function (t) {
                return (
                  t.compound &&
                  e.every(function (e) {
                    return t.keyPath.indexOf(e) >= 0;
                  }) &&
                  t.keyPath.every(function (t) {
                    return e.indexOf(t) >= 0;
                  })
                );
              })[0];
              if (r && we !== be)
                return this.where(r.name).equals(
                  r.keyPath.map(function (e) {
                    return t[e];
                  })
                );
              r ||
                console.warn(
                  "The query " + JSON.stringify(t) + " on " + this.name + " would benefit of a compound index [" + e.join("+") + "]"
                );
              var n = this.schema.idxByName,
                a = e.reduce(
                  function (e, r) {
                    return [
                      e[0] || n[r],
                      e[0] || !n[r]
                        ? Ft(e[1], function (e) {
                            return "" + O(e, r) == "" + t[r];
                          })
                        : e[1]
                    ];
                  },
                  [null, null]
                ),
                s = a[0];
              return s ? this.where(s.name).equals(t[s.keyPath]).filter(a[1]) : r ? this.filter(a[1]) : this.where(e).equals("");
            },
            count: function (t) {
              return this.toCollection().count(t);
            },
            offset: function (t) {
              return this.toCollection().offset(t);
            },
            limit: function (t) {
              return this.toCollection().limit(t);
            },
            reverse: function () {
              return this.toCollection().reverse();
            },
            filter: function (t) {
              return this.toCollection().and(t);
            },
            each: function (t) {
              return this.toCollection().each(t);
            },
            toArray: function (t) {
              return this.toCollection().toArray(t);
            },
            orderBy: function (t) {
              return new Et(new _t(this, i(t) ? "[" + t.join("+") + "]" : t));
            },
            toCollection: function () {
              return new Et(new _t(this));
            },
            mapToClass: function (t, e) {
              this.schema.mappedClass = t;
              var r = Object.create(t.prototype);
              e && Te(r, e), (this.schema.instanceTemplate = r);
              var n = function (e) {
                if (!e) return e;
                var r = Object.create(t.prototype);
                for (var n in e)
                  if (l(e, n))
                    try {
                      r[n] = e[n];
                    } catch (t) {}
                return r;
              };
              return (
                this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
                (this.schema.readHook = n),
                this.hook("reading", n),
                t
              );
            },
            defineClass: function (t) {
              return this.mapToClass(Pe.defineClass(t), t);
            },
            bulkDelete: function (t) {
              return this.hook.deleting.fire === tt
                ? this._idbstore(J, function (e, r, n, o) {
                    e(bt(n, o, t, !1, tt));
                  })
                : this.where(":id")
                    .anyOf(t)
                    .delete()
                    .then(function () {});
            },
            bulkPut: function (t, e) {
              var r = this;
              return this._idbstore(
                J,
                function (n, o, i) {
                  if (!i.keyPath && !r.schema.primKey.auto && !e)
                    throw new X.InvalidArgument("bulkPut() with non-inbound keys requires keys array in second argument");
                  if (i.keyPath && e) throw new X.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
                  if (e && e.length !== t.length) throw new X.InvalidArgument("Arguments objects and keys must have the same length");
                  if (0 === t.length) return n();
                  var a,
                    s,
                    u = function (t) {
                      0 === c.length ? n(t) : o(new H(r.name + ".bulkPut(): " + c.length + " of " + l + " operations failed", c));
                    },
                    c = [],
                    l = t.length,
                    f = r;
                  if (r.hook.creating.fire === tt && r.hook.updating.fire === tt) {
                    s = gt(c);
                    for (var p = 0, h = t.length; p < h; ++p) (a = e ? i.put(t[p], e[p]) : i.put(t[p])).onerror = s;
                    (a.onerror = gt(c, u)), (a.onsuccess = De(u));
                  } else {
                    var d =
                        e ||
                        (i.keyPath &&
                          t.map(function (t) {
                            return O(t, i.keyPath);
                          })),
                      y =
                        d &&
                        E(d, function (e, r) {
                          return null != e && [e, t[r]];
                        }),
                      g = d
                        ? f
                            .where(":id")
                            .anyOf(
                              d.filter(function (t) {
                                return null != t;
                              })
                            )
                            .modify(function () {
                              (this.value = y[this.primKey]), (y[this.primKey] = null);
                            })
                            .catch(K, function (t) {
                              c = t.failures;
                            })
                            .then(function () {
                              for (var r = [], n = e && [], o = d.length - 1; o >= 0; --o) {
                                var i = d[o];
                                (null == i || y[i]) && (r.push(t[o]), e && n.push(i), null != i && (y[i] = null));
                              }
                              return r.reverse(), e && n.reverse(), f.bulkAdd(r, n);
                            })
                            .then(function (t) {
                              var e = d[d.length - 1];
                              return null != e ? e : t;
                            })
                        : f.bulkAdd(t);
                    g.then(u)
                      .catch(H, function (t) {
                        (c = c.concat(t.failures)), u();
                      })
                      .catch(o);
                  }
                },
                "locked"
              );
            },
            bulkAdd: function (t, e) {
              var r = this,
                n = this.hook.creating.fire;
              return this._idbstore(J, function (o, i, a, s) {
                if (!a.keyPath && !r.schema.primKey.auto && !e)
                  throw new X.InvalidArgument("bulkAdd() with non-inbound keys requires keys array in second argument");
                if (a.keyPath && e) throw new X.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
                if (e && e.length !== t.length) throw new X.InvalidArgument("Arguments objects and keys must have the same length");
                if (0 === t.length) return o();
                function u(t) {
                  0 === p.length ? o(t) : i(new H(r.name + ".bulkAdd(): " + p.length + " of " + h + " operations failed", p));
                }
                var c,
                  l,
                  f,
                  p = [],
                  h = t.length;
                if (n !== tt) {
                  var d,
                    y = a.keyPath;
                  (l = gt(p, null, !0)),
                    (f = Ie(null)),
                    A(
                      function () {
                        for (var r = 0, o = t.length; r < o; ++r) {
                          d = { onerror: null, onsuccess: null };
                          var i = e && e[r],
                            u = t[r],
                            p = e ? i : y ? O(u, y) : void 0,
                            h = n.call(d, p, u, s);
                          null == p && null != h && (y ? x((u = T(u)), y, h) : (i = h)),
                            ((c = null != i ? a.add(u, i) : a.add(u))._hookCtx = d),
                            r < o - 1 && ((c.onerror = l), d.onsuccess && (c.onsuccess = f));
                        }
                      },
                      function (t) {
                        throw (d.onerror && d.onerror(t), t);
                      }
                    ),
                    (c.onerror = gt(p, u, !0)),
                    (c.onsuccess = Ie(u));
                } else {
                  l = gt(p);
                  for (var g = 0, v = t.length; g < v; ++g) (c = e ? a.add(t[g], e[g]) : a.add(t[g])).onerror = l;
                  (c.onerror = gt(p, u)), (c.onsuccess = De(u));
                }
              });
            },
            add: function (t, e) {
              var r = this.hook.creating.fire;
              return this._idbstore(J, function (n, o, i, a) {
                var s = { onsuccess: null, onerror: null };
                if (r !== tt) {
                  var u = null != e ? e : i.keyPath ? O(t, i.keyPath) : void 0,
                    c = r.call(s, u, t, a);
                  null == u && null != c && (i.keyPath ? x(t, i.keyPath, c) : (e = c));
                }
                try {
                  var l = null != e ? i.add(t, e) : i.add(t);
                  (l._hookCtx = s),
                    (l.onerror = Fe(o)),
                    (l.onsuccess = Ie(function (e) {
                      var r = i.keyPath;
                      r && x(t, r, e), n(e);
                    }));
                } catch (t) {
                  throw (s.onerror && s.onerror(t), t);
                }
              });
            },
            put: function (t, e) {
              var r = this,
                n = this.hook.creating.fire,
                o = this.hook.updating.fire;
              if (n !== tt || o !== tt) {
                var i = this.schema.primKey.keyPath,
                  a = void 0 !== e ? e : i && O(t, i);
                return null == a
                  ? this.add(t)
                  : ((t = T(t)),
                    this._trans(
                      J,
                      function () {
                        return r
                          .where(":id")
                          .equals(a)
                          .modify(function () {
                            this.value = t;
                          })
                          .then(function (n) {
                            return 0 === n ? r.add(t, e) : a;
                          });
                      },
                      "locked"
                    ));
              }
              return this._idbstore(J, function (r, n, o) {
                var i = void 0 !== e ? o.put(t, e) : o.put(t);
                (i.onerror = Ue(n)),
                  (i.onsuccess = Jt(function (e) {
                    var n = o.keyPath;
                    n && x(t, n, e.target.result), r(i.result);
                  }));
              });
            },
            delete: function (t) {
              return this.hook.deleting.subscribers.length
                ? this.where(":id").equals(t).delete()
                : this._idbstore(J, function (e, r, n) {
                    var o = n.delete(t);
                    (o.onerror = Ue(r)),
                      (o.onsuccess = Jt(function () {
                        e(o.result);
                      }));
                  });
            },
            clear: function () {
              return this.hook.deleting.subscribers.length
                ? this.toCollection().delete()
                : this._idbstore(J, function (t, e, r) {
                    var n = r.clear();
                    (n.onerror = Ue(e)),
                      (n.onsuccess = Jt(function () {
                        t(n.result);
                      }));
                  });
            },
            update: function (t, e) {
              if ("object" != typeof e || i(e)) throw new X.InvalidArgument("Modifications must be an object.");
              if ("object" != typeof t || i(t)) return this.where(":id").equals(t).modify(e);
              o(e).forEach(function (r) {
                x(t, r, e[r]);
              });
              var r = O(t, this.schema.primKey.keyPath);
              return void 0 === r
                ? ye(new X.InvalidArgument("Given object does not contain its primary key"))
                : this.where(":id").equals(r).modify(e);
            }
          }),
          f(wt.prototype, {
            _lock: function () {
              return w(!Rt.global), ++this._reculock, 1 !== this._reculock || Rt.global || (Rt.lockOwnerFor = this), this;
            },
            _unlock: function () {
              if ((w(!Rt.global), 0 == --this._reculock))
                for (Rt.global || (Rt.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
                  var t = this._blockedFuncs.shift();
                  try {
                    le(t[1], t[0]);
                  } catch (t) {}
                }
              return this;
            },
            _locked: function () {
              return this._reculock && Rt.lockOwnerFor !== this;
            },
            create: function (t) {
              var e = this;
              if (!this.mode) return this;
              if ((w(!this.idbtrans), !t && !C))
                switch (B && B.name) {
                  case "DatabaseClosedError":
                    throw new X.DatabaseClosed(B);
                  case "MissingAPIError":
                    throw new X.MissingAPI(B.message, B);
                  default:
                    throw new X.OpenFailed(B);
                }
              if (!this.active) throw new X.TransactionInactive();
              return (
                w(null === this._completion._state),
                ((t = this.idbtrans = t || C.transaction(Be(this.storeNames), this.mode)).onerror = Jt(function (r) {
                  Ne(r), e._reject(t.error);
                })),
                (t.onabort = Jt(function (r) {
                  Ne(r), e.active && e._reject(new X.Abort(t.error)), (e.active = !1), e.on("abort").fire(r);
                })),
                (t.oncomplete = Jt(function () {
                  (e.active = !1), e._resolve();
                })),
                this
              );
            },
            _promise: function (t, e, r) {
              var n = this;
              if (t === J && this.mode !== J) return ye(new X.ReadOnly("Transaction is readonly"));
              if (!this.active) return ye(new X.TransactionInactive());
              if (this._locked())
                return new Dt(function (o, i) {
                  n._blockedFuncs.push([
                    function () {
                      n._promise(t, e, r).then(o, i);
                    },
                    Rt
                  ]);
                });
              if (r)
                return re(function () {
                  var t = new Dt(function (t, r) {
                    n._lock();
                    var o = e(t, r, n);
                    o && o.then && o.then(t, r);
                  });
                  return (
                    t.finally(function () {
                      return n._unlock();
                    }),
                    (t._lib = !0),
                    t
                  );
                });
              var o = new Dt(function (t, r) {
                var o = e(t, r, n);
                o && o.then && o.then(t, r);
              });
              return (o._lib = !0), o;
            },
            _root: function () {
              return this.parent ? this.parent._root() : this;
            },
            waitFor: function (t) {
              var e = this._root();
              if (((t = Dt.resolve(t)), e._waitingFor))
                e._waitingFor = e._waitingFor.then(function () {
                  return t;
                });
              else {
                (e._waitingFor = t), (e._waitingQueue = []);
                var r = e.idbtrans.objectStore(e.storeNames[0]);
                !(function t() {
                  for (++e._spinCount; e._waitingQueue.length; ) e._waitingQueue.shift()();
                  e._waitingFor && (r.get(-1 / 0).onsuccess = t);
                })();
              }
              var n = e._waitingFor;
              return new Dt(function (r, o) {
                t.then(
                  function (t) {
                    return e._waitingQueue.push(Jt(r.bind(null, t)));
                  },
                  function (t) {
                    return e._waitingQueue.push(Jt(o.bind(null, t)));
                  }
                ).finally(function () {
                  e._waitingFor === n && (e._waitingFor = null);
                });
              });
            },
            abort: function () {
              this.active && this._reject(new X.Abort()), (this.active = !1);
            },
            tables: {
              get:
                ((c = "Transaction.tables"),
                (p = function () {
                  return M;
                }),
                function () {
                  return (
                    console.warn(c + " is deprecated. See https://github.com/dfahlander/Dexie.js/wiki/Deprecations. " + $(q(), 1)),
                    p.apply(this, arguments)
                  );
                })
            },
            table: function (t) {
              var e = Y.table(t);
              return new yt(t, e.schema, this);
            }
          }),
          f(_t.prototype, function () {
            function t(t, e, r) {
              var n = t instanceof _t ? new Et(t) : t;
              return (n._ctx.error = r ? new r(e) : new TypeError(e)), n;
            }
            function e(t) {
              return new Et(t, function () {
                return j.only("");
              }).limit(0);
            }
            function r(t, e, r, n, o, i) {
              for (var a = Math.min(t.length, n.length), s = -1, u = 0; u < a; ++u) {
                var c = e[u];
                if (c !== n[u])
                  return o(t[u], r[u]) < 0
                    ? t.substr(0, u) + r[u] + r.substr(u + 1)
                    : o(t[u], n[u]) < 0
                    ? t.substr(0, u) + n[u] + r.substr(u + 1)
                    : s >= 0
                    ? t.substr(0, s) + e[s] + r.substr(s + 1)
                    : null;
                o(t[u], c) < 0 && (s = u);
              }
              return a < n.length && "next" === i
                ? t + r.substr(t.length)
                : a < t.length && "prev" === i
                ? t.substr(0, r.length)
                : s < 0
                ? null
                : t.substr(0, s) + n[s] + r.substr(s + 1);
            }
            function n(e, n, o, i) {
              var a,
                s,
                u,
                c,
                l,
                f,
                p,
                h = o.length;
              if (
                !o.every(function (t) {
                  return "string" == typeof t;
                })
              )
                return t(e, Se);
              function d(t) {
                (a = (function (t) {
                  return "next" === t
                    ? function (t) {
                        return t.toUpperCase();
                      }
                    : function (t) {
                        return t.toLowerCase();
                      };
                })(t)),
                  (s = (function (t) {
                    return "next" === t
                      ? function (t) {
                          return t.toLowerCase();
                        }
                      : function (t) {
                          return t.toUpperCase();
                        };
                  })(t)),
                  (u = "next" === t ? It : Ut);
                var e = o
                  .map(function (t) {
                    return { lower: s(t), upper: a(t) };
                  })
                  .sort(function (t, e) {
                    return u(t.lower, e.lower);
                  });
                (c = e.map(function (t) {
                  return t.upper;
                })),
                  (l = e.map(function (t) {
                    return t.lower;
                  })),
                  (f = t),
                  (p = "next" === t ? "" : i);
              }
              d("next");
              var y = new Et(e, function () {
                return j.bound(c[0], l[h - 1] + i);
              });
              y._ondirectionchange = function (t) {
                d(t);
              };
              var g = 0;
              return (
                y._addAlgorithm(function (t, e, o) {
                  var i = t.key;
                  if ("string" != typeof i) return !1;
                  var a = s(i);
                  if (n(a, l, g)) return !0;
                  for (var d = null, y = g; y < h; ++y) {
                    var v = r(i, a, c[y], l[y], u, f);
                    null === v && null === d ? (g = y + 1) : (null === d || u(d, v) > 0) && (d = v);
                  }
                  return (
                    e(
                      null !== d
                        ? function () {
                            t.continue(d + p);
                          }
                        : o
                    ),
                    !1
                  );
                }),
                y
              );
            }
            return {
              between: function (r, n, o, i) {
                (o = !1 !== o), (i = !0 === i);
                try {
                  return kt(r, n) > 0 || (0 === kt(r, n) && (o || i) && (!o || !i))
                    ? e(this)
                    : new Et(this, function () {
                        return j.bound(r, n, !o, !i);
                      });
                } catch (e) {
                  return t(this, Ee);
                }
              },
              equals: function (t) {
                return new Et(this, function () {
                  return j.only(t);
                });
              },
              above: function (t) {
                return new Et(this, function () {
                  return j.lowerBound(t, !0);
                });
              },
              aboveOrEqual: function (t) {
                return new Et(this, function () {
                  return j.lowerBound(t);
                });
              },
              below: function (t) {
                return new Et(this, function () {
                  return j.upperBound(t, !0);
                });
              },
              belowOrEqual: function (t) {
                return new Et(this, function () {
                  return j.upperBound(t);
                });
              },
              startsWith: function (e) {
                return "string" != typeof e ? t(this, Se) : this.between(e, e + be, !0, !0);
              },
              startsWithIgnoreCase: function (t) {
                return "" === t
                  ? this.startsWith(t)
                  : n(
                      this,
                      function (t, e) {
                        return 0 === t.indexOf(e[0]);
                      },
                      [t],
                      be
                    );
              },
              equalsIgnoreCase: function (t) {
                return n(
                  this,
                  function (t, e) {
                    return t === e[0];
                  },
                  [t],
                  ""
                );
              },
              anyOfIgnoreCase: function () {
                var t = N.apply(F, arguments);
                return 0 === t.length
                  ? e(this)
                  : n(
                      this,
                      function (t, e) {
                        return -1 !== e.indexOf(t);
                      },
                      t,
                      ""
                    );
              },
              startsWithAnyOfIgnoreCase: function () {
                var t = N.apply(F, arguments);
                return 0 === t.length
                  ? e(this)
                  : n(
                      this,
                      function (t, e) {
                        return e.some(function (e) {
                          return 0 === t.indexOf(e);
                        });
                      },
                      t,
                      be
                    );
              },
              anyOf: function () {
                var r = N.apply(F, arguments),
                  n = Pt;
                try {
                  r.sort(n);
                } catch (e) {
                  return t(this, Ee);
                }
                if (0 === r.length) return e(this);
                var o = new Et(this, function () {
                  return j.bound(r[0], r[r.length - 1]);
                });
                o._ondirectionchange = function (t) {
                  (n = "next" === t ? Pt : Tt), r.sort(n);
                };
                var i = 0;
                return (
                  o._addAlgorithm(function (t, e, o) {
                    for (var a = t.key; n(a, r[i]) > 0; ) if (++i === r.length) return e(o), !1;
                    return (
                      0 === n(a, r[i]) ||
                      (e(function () {
                        t.continue(r[i]);
                      }),
                      !1)
                    );
                  }),
                  o
                );
              },
              notEqual: function (t) {
                return this.inAnyRange(
                  [
                    [_e, t],
                    [t, we]
                  ],
                  { includeLowers: !1, includeUppers: !1 }
                );
              },
              noneOf: function () {
                var e = N.apply(F, arguments);
                if (0 === e.length) return new Et(this);
                try {
                  e.sort(Pt);
                } catch (e) {
                  return t(this, Ee);
                }
                var r = e.reduce(function (t, e) {
                  return t ? t.concat([[t[t.length - 1][1], e]]) : [[_e, e]];
                }, null);
                return r.push([e[e.length - 1], we]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
              },
              inAnyRange: function (r, n) {
                if (0 === r.length) return e(this);
                if (
                  !r.every(function (t) {
                    return void 0 !== t[0] && void 0 !== t[1] && Pt(t[0], t[1]) <= 0;
                  })
                )
                  return t(
                    this,
                    "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
                    X.InvalidArgument
                  );
                var o = !n || !1 !== n.includeLowers,
                  i = n && !0 === n.includeUppers;
                var a,
                  s = Pt;
                function u(t, e) {
                  return s(t[0], e[0]);
                }
                try {
                  (a = r.reduce(function (t, e) {
                    for (var r = 0, n = t.length; r < n; ++r) {
                      var o = t[r];
                      if (kt(e[0], o[1]) < 0 && kt(e[1], o[0]) > 0) {
                        (o[0] = kt((i = o[0]), (a = e[0])) < 0 ? i : a), (o[1] = jt(o[1], e[1]));
                        break;
                      }
                    }
                    var i, a;
                    return r === n && t.push(e), t;
                  }, [])),
                    a.sort(u);
                } catch (e) {
                  return t(this, Ee);
                }
                var c = 0,
                  l = i
                    ? function (t) {
                        return Pt(t, a[c][1]) > 0;
                      }
                    : function (t) {
                        return Pt(t, a[c][1]) >= 0;
                      },
                  f = o
                    ? function (t) {
                        return Tt(t, a[c][0]) > 0;
                      }
                    : function (t) {
                        return Tt(t, a[c][0]) >= 0;
                      };
                var p = l,
                  h = new Et(this, function () {
                    return j.bound(a[0][0], a[a.length - 1][1], !o, !i);
                  });
                return (
                  (h._ondirectionchange = function (t) {
                    "next" === t ? ((p = l), (s = Pt)) : ((p = f), (s = Tt)), a.sort(u);
                  }),
                  h._addAlgorithm(function (t, e, r) {
                    for (var n = t.key; p(n); ) if (++c === a.length) return e(r), !1;
                    return (
                      !!(function (t) {
                        return !l(t) && !f(t);
                      })(n) ||
                      (0 === kt(n, a[c][1]) ||
                        0 === kt(n, a[c][0]) ||
                        e(function () {
                          s === Pt ? t.continue(a[c][0]) : t.continue(a[c][1]);
                        }),
                      !1)
                    );
                  }),
                  h
                );
              },
              startsWithAnyOf: function () {
                var r = N.apply(F, arguments);
                return r.every(function (t) {
                  return "string" == typeof t;
                })
                  ? 0 === r.length
                    ? e(this)
                    : this.inAnyRange(
                        r.map(function (t) {
                          return [t, t + be];
                        })
                      )
                  : t(this, "startsWithAnyOf() only works with strings");
              }
            };
          }),
          f(Et.prototype, function () {
            function t(t, e) {
              t.filter = Ft(t.filter, e);
            }
            function e(t, e, r) {
              var n = t.replayFilter;
              (t.replayFilter = n
                ? function () {
                    return Ft(n(), e());
                  }
                : e),
                (t.justLimit = r && !n);
            }
            function r(t, e) {
              if (t.isPrimKey) return e;
              var r = t.table.schema.idxByName[t.index];
              if (!r) throw new X.Schema("KeyPath " + t.index + " on object store " + e.name + " is not indexed");
              return e.index(r.name);
            }
            function n(t, e) {
              var n = r(t, e);
              return t.keysOnly && "openKeyCursor" in n
                ? n.openKeyCursor(t.range || null, t.dir + t.unique)
                : n.openCursor(t.range || null, t.dir + t.unique);
            }
            function i(t, e, r, o, i) {
              var a = t.replayFilter ? Ft(t.filter, t.replayFilter()) : t.filter;
              t.or
                ? (function () {
                    var s = {},
                      u = 0;
                    function c() {
                      2 == ++u && r();
                    }
                    function f(t, r, n) {
                      if (!a || a(r, n, c, o)) {
                        var i = r.primaryKey,
                          u = "" + i;
                        "[object ArrayBuffer]" === u && (u = "" + new Uint8Array(i)), l(s, u) || ((s[u] = !0), e(t, r, n));
                      }
                    }
                    t.or._iterate(f, c, o, i), xt(n(t, i), t.algorithm, f, c, o, !t.keysOnly && t.valueMapper);
                  })()
                : xt(n(t, i), Ft(t.algorithm, a), e, r, o, !t.keysOnly && t.valueMapper);
            }
            return {
              _read: function (t, e) {
                var r = this._ctx;
                return r.error ? r.table._trans(null, ye.bind(null, r.error)) : r.table._idbstore(V, t).then(e);
              },
              _write: function (t) {
                var e = this._ctx;
                return e.error ? e.table._trans(null, ye.bind(null, e.error)) : e.table._idbstore(J, t, "locked");
              },
              _addAlgorithm: function (t) {
                var e = this._ctx;
                e.algorithm = Ft(e.algorithm, t);
              },
              _iterate: function (t, e, r, n) {
                return i(this._ctx, t, e, r, n);
              },
              clone: function (t) {
                var e = Object.create(this.constructor.prototype),
                  r = Object.create(this._ctx);
                return t && s(r, t), (e._ctx = r), e;
              },
              raw: function () {
                return (this._ctx.valueMapper = null), this;
              },
              each: function (t) {
                var e = this._ctx;
                return this._read(function (r, n, o) {
                  i(e, t, r, n, o);
                });
              },
              count: function (t) {
                var e = this._ctx;
                if (St(e, !0))
                  return this._read(function (t, n, o) {
                    var i = r(e, o),
                      a = e.range ? i.count(e.range) : i.count();
                    (a.onerror = Ue(n)),
                      (a.onsuccess = function (r) {
                        t(Math.min(r.target.result, e.limit));
                      });
                  }, t);
                var n = 0;
                return this._read(function (t, r, o) {
                  i(
                    e,
                    function () {
                      return ++n, !1;
                    },
                    function () {
                      t(n);
                    },
                    r,
                    o
                  );
                }, t);
              },
              sortBy: function (t, e) {
                var r = t.split(".").reverse(),
                  n = r[0],
                  o = r.length - 1;
                function i(t, e) {
                  return e ? i(t[r[e]], e - 1) : t[n];
                }
                var a = "next" === this._ctx.dir ? 1 : -1;
                function s(t, e) {
                  var r = i(t, o),
                    n = i(e, o);
                  return r < n ? -a : r > n ? a : 0;
                }
                return this.toArray(function (t) {
                  return t.sort(s);
                }).then(e);
              },
              toArray: function (t) {
                var e = this._ctx;
                return this._read(function (t, n, o) {
                  if (u && "next" === e.dir && St(e, !0) && e.limit > 0) {
                    var a = e.table.hook.reading.fire,
                      s = r(e, o),
                      c = e.limit < 1 / 0 ? s.getAll(e.range, e.limit) : s.getAll(e.range);
                    (c.onerror = Ue(n)),
                      (c.onsuccess = De(
                        a === et
                          ? t
                          : function (e) {
                              try {
                                t(e.map(a));
                              } catch (t) {
                                n(t);
                              }
                            }
                      ));
                  } else {
                    var l = [];
                    i(
                      e,
                      function (t) {
                        l.push(t);
                      },
                      function () {
                        t(l);
                      },
                      n,
                      o
                    );
                  }
                }, t);
              },
              offset: function (t) {
                var r = this._ctx;
                return (
                  t <= 0 ||
                    ((r.offset += t),
                    St(r)
                      ? e(r, function () {
                          var e = t;
                          return function (t, r) {
                            return (
                              0 === e ||
                              (1 === e
                                ? (--e, !1)
                                : (r(function () {
                                    t.advance(e), (e = 0);
                                  }),
                                  !1))
                            );
                          };
                        })
                      : e(r, function () {
                          var e = t;
                          return function () {
                            return --e < 0;
                          };
                        })),
                  this
                );
              },
              limit: function (t) {
                return (
                  (this._ctx.limit = Math.min(this._ctx.limit, t)),
                  e(
                    this._ctx,
                    function () {
                      var e = t;
                      return function (t, r, n) {
                        return --e <= 0 && r(n), e >= 0;
                      };
                    },
                    !0
                  ),
                  this
                );
              },
              until: function (e, r) {
                return (
                  t(this._ctx, function (t, n, o) {
                    return !e(t.value) || (n(o), r);
                  }),
                  this
                );
              },
              first: function (t) {
                return this.limit(1)
                  .toArray(function (t) {
                    return t[0];
                  })
                  .then(t);
              },
              last: function (t) {
                return this.reverse().first(t);
              },
              filter: function (e) {
                return (
                  t(this._ctx, function (t) {
                    return e(t.value);
                  }),
                  (function (t, e) {
                    t.isMatch = Ft(t.isMatch, e);
                  })(this._ctx, e),
                  this
                );
              },
              and: function (t) {
                return this.filter(t);
              },
              or: function (t) {
                return new _t(this._ctx.table, t, this);
              },
              reverse: function () {
                return (
                  (this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev"),
                  this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
                  this
                );
              },
              desc: function () {
                return this.reverse();
              },
              eachKey: function (t) {
                var e = this._ctx;
                return (
                  (e.keysOnly = !e.isMatch),
                  this.each(function (e, r) {
                    t(r.key, r);
                  })
                );
              },
              eachUniqueKey: function (t) {
                return (this._ctx.unique = "unique"), this.eachKey(t);
              },
              eachPrimaryKey: function (t) {
                var e = this._ctx;
                return (
                  (e.keysOnly = !e.isMatch),
                  this.each(function (e, r) {
                    t(r.primaryKey, r);
                  })
                );
              },
              keys: function (t) {
                var e = this._ctx;
                e.keysOnly = !e.isMatch;
                var r = [];
                return this.each(function (t, e) {
                  r.push(e.key);
                })
                  .then(function () {
                    return r;
                  })
                  .then(t);
              },
              primaryKeys: function (t) {
                var e = this._ctx;
                if (u && "next" === e.dir && St(e, !0) && e.limit > 0)
                  return this._read(function (t, n, o) {
                    var i = r(e, o),
                      a = e.limit < 1 / 0 ? i.getAllKeys(e.range, e.limit) : i.getAllKeys(e.range);
                    (a.onerror = Ue(n)), (a.onsuccess = De(t));
                  }).then(t);
                e.keysOnly = !e.isMatch;
                var n = [];
                return this.each(function (t, e) {
                  n.push(e.primaryKey);
                })
                  .then(function () {
                    return n;
                  })
                  .then(t);
              },
              uniqueKeys: function (t) {
                return (this._ctx.unique = "unique"), this.keys(t);
              },
              firstKey: function (t) {
                return this.limit(1)
                  .keys(function (t) {
                    return t[0];
                  })
                  .then(t);
              },
              lastKey: function (t) {
                return this.reverse().firstKey(t);
              },
              distinct: function () {
                var e = this._ctx,
                  r = e.index && e.table.schema.idxByName[e.index];
                if (!r || !r.multi) return this;
                var n = {};
                return (
                  t(this._ctx, function (t) {
                    var e = t.primaryKey.toString(),
                      r = l(n, e);
                    return (n[e] = !0), !r;
                  }),
                  this
                );
              },
              modify: function (t) {
                var e = this,
                  r = this._ctx.table.hook,
                  n = r.updating.fire,
                  i = r.deleting.fire;
                return this._write(function (r, a, u, c) {
                  var f;
                  if ("function" == typeof t)
                    f =
                      n === tt && i === tt
                        ? t
                        : function (e) {
                            var r = T(e);
                            if (!1 === t.call(this, e, this)) return !1;
                            if (l(this, "value")) {
                              var a = I(r, this.value),
                                s = n.call(this, a, this.primKey, r, c);
                              s &&
                                ((e = this.value),
                                o(s).forEach(function (t) {
                                  x(e, t, s[t]);
                                }));
                            } else i.call(this, this.primKey, e, c);
                          };
                  else if (n === tt) {
                    var p = o(t),
                      h = p.length;
                    f = function (e) {
                      for (var r = !1, n = 0; n < h; ++n) {
                        var o = p[n],
                          i = t[o];
                        O(e, o) !== i && (x(e, o, i), (r = !0));
                      }
                      return r;
                    };
                  } else {
                    var d = t;
                    (t = k(d)),
                      (f = function (e) {
                        var r = !1,
                          i = n.call(this, t, this.primKey, T(e), c);
                        return (
                          i && s(t, i),
                          o(t).forEach(function (n) {
                            var o = t[n];
                            O(e, n) !== o && (x(e, n, o), (r = !0));
                          }),
                          i && (t = k(d)),
                          r
                        );
                      });
                  }
                  var y = 0,
                    g = 0,
                    v = !1,
                    m = [],
                    b = [],
                    w = null;
                  function _(t) {
                    return t && (m.push(t), b.push(w)), a(new K("Error modifying one or more objects", m, g, b));
                  }
                  function E() {
                    v && g + m.length === y && (m.length > 0 ? _() : r(g));
                  }
                  e.clone()
                    .raw()
                    ._iterate(
                      function (t, e) {
                        w = e.primaryKey;
                        var r = { primKey: e.primaryKey, value: t, onsuccess: null, onerror: null };
                        function n(t) {
                          return m.push(t), b.push(r.primKey), E(), !0;
                        }
                        if (!1 !== f.call(r, t, r)) {
                          var o = !l(r, "value");
                          ++y,
                            A(function () {
                              var t = o ? e.delete() : e.update(r.value);
                              (t._hookCtx = r),
                                (t.onerror = Fe(n)),
                                (t.onsuccess = Ie(function () {
                                  ++g, E();
                                }));
                            }, n);
                        } else r.onsuccess && r.onsuccess(r.value);
                      },
                      function () {
                        (v = !0), E();
                      },
                      _,
                      u
                    );
                });
              },
              delete: function () {
                var t = this,
                  e = this._ctx,
                  r = e.range,
                  n = e.table.hook.deleting.fire,
                  o = n !== tt;
                if (!o && St(e) && ((e.isPrimKey && !ke) || !r))
                  return this._write(function (t, e, n) {
                    var o = Ue(e),
                      i = r ? n.count(r) : n.count();
                    (i.onerror = o),
                      (i.onsuccess = function () {
                        var a = i.result;
                        A(
                          function () {
                            var e = r ? n.delete(r) : n.clear();
                            (e.onerror = o),
                              (e.onsuccess = function () {
                                return t(a);
                              });
                          },
                          function (t) {
                            return e(t);
                          }
                        );
                      });
                  });
                var i = o ? 2e3 : 1e4;
                return this._write(function (r, a, s, u) {
                  var c = 0,
                    l = t
                      .clone({ keysOnly: !e.isMatch && !o })
                      .distinct()
                      .limit(i)
                      .raw(),
                    f = [],
                    p = function () {
                      return l
                        .each(
                          o
                            ? function (t, e) {
                                f.push([e.primaryKey, e.value]);
                              }
                            : function (t, e) {
                                f.push(e.primaryKey);
                              }
                        )
                        .then(function () {
                          return (
                            o
                              ? f.sort(function (t, e) {
                                  return Pt(t[0], e[0]);
                                })
                              : f.sort(Pt),
                            bt(s, u, f, o, n)
                          );
                        })
                        .then(function () {
                          var t = f.length;
                          return (c += t), (f = []), t < i ? c : p();
                        });
                    };
                  r(p());
                });
              }
            };
          }),
          s(this, { Collection: Et, Table: yt, Transaction: wt, Version: ct, WhereClause: _t }),
          Y.on("versionchange", function (t) {
            t.newVersion > 0
              ? console.warn("Another connection wants to upgrade database '" + Y.name + "'. Closing db now to resume the upgrade.")
              : console.warn("Another connection wants to delete database '" + Y.name + "'. Closing db now to resume the delete request."),
              Y.close();
          }),
          Y.on("blocked", function (t) {
            !t.newVersion || t.newVersion < t.oldVersion
              ? console.warn("Dexie.delete('" + Y.name + "') was blocked")
              : console.warn("Upgrade '" + Y.name + "' blocked by other connection holding version " + t.oldVersion / 10);
          }),
          g.forEach(function (t) {
            t(Y);
          });
      }
      function Re(t) {
        if ("function" == typeof t) return new t();
        if (i(t)) return [Re(t[0])];
        if (t && "object" == typeof t) {
          var e = {};
          return Te(e, t), e;
        }
        return t;
      }
      function Te(t, e) {
        return (
          o(e).forEach(function (r) {
            var n = Re(e[r]);
            t[r] = n;
          }),
          t
        );
      }
      function Ie(t) {
        return Jt(function (e) {
          var r = e.target,
            n = r._hookCtx,
            o = n.value || r.result,
            i = n && n.onsuccess;
          i && i(o), t && t(o);
        }, t);
      }
      function Ue(t) {
        return Jt(function (e) {
          return Ne(e), t(e.target.error), !1;
        });
      }
      function De(t) {
        return Jt(function (e) {
          t(e.target.result);
        });
      }
      function Fe(t) {
        return Jt(function (e) {
          var r = e.target,
            n = r.error,
            o = r._hookCtx,
            i = o && o.onerror;
          return i && i(n), Ne(e), t(n), !1;
        });
      }
      function Ne(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      function Le(t) {
        var e = function (e) {
            return t.next(e);
          },
          r = o(e),
          n = o(function (e) {
            return t.throw(e);
          });
        function o(t) {
          return function (e) {
            var o = t(e),
              a = o.value;
            return o.done ? a : a && "function" == typeof a.then ? a.then(r, n) : i(a) ? Dt.all(a).then(r, n) : r(a);
          };
        }
        return o(e)();
      }
      function Me(t, e, r, n, o, i, a) {
        (this.name = t), (this.keyPath = e), (this.unique = r), (this.multi = n), (this.auto = o), (this.compound = i), (this.dotted = a);
        var s = "string" == typeof e ? e : e && "[" + [].join.call(e, "+") + "]";
        this.src = (r ? "&" : "") + (n ? "*" : "") + (o ? "++" : "") + s;
      }
      function Ce(t, e, r, n) {
        (this.name = t),
          (this.primKey = e || new Me()),
          (this.indexes = r || [new Me()]),
          (this.instanceTemplate = n),
          (this.mappedClass = null),
          (this.idxByName = E(r, function (t) {
            return [t.name, t];
          }));
      }
      function Be(t) {
        return 1 === t.length ? t[0] : t;
      }
      function qe(t) {
        var e = t && (t.getDatabaseNames || t.webkitGetDatabaseNames);
        return e && e.bind(t);
      }
      M(L, je),
        f(Pe, Q),
        f(Pe, {
          delete: function (t) {
            var e = new Pe(t),
              r = e.delete();
            return (
              (r.onblocked = function (t) {
                return e.on("blocked", t), this;
              }),
              r
            );
          },
          exists: function (t) {
            return new Pe(t)
              .open()
              .then(function (t) {
                return t.close(), !0;
              })
              .catch(Pe.NoSuchDatabaseError, function () {
                return !1;
              });
          },
          getDatabaseNames: function (t) {
            var e = qe(Pe.dependencies.indexedDB);
            return e
              ? new Dt(function (t, r) {
                  var n = e();
                  (n.onsuccess = function (e) {
                    t(m(e.target.result, 0));
                  }),
                    (n.onerror = Ue(r));
                }).then(t)
              : ve.dbnames.toCollection().primaryKeys(t);
          },
          defineClass: function () {
            return function (t) {
              t && s(this, t);
            };
          },
          applyStructure: Te,
          ignoreTransaction: function (t) {
            return Rt.trans ? le(Rt.transless, t) : t();
          },
          vip: function (t) {
            return re(function () {
              return (Rt.letThrough = !0), t();
            });
          },
          async: function (t) {
            return function () {
              try {
                var e = Le(t.apply(this, arguments));
                return e && "function" == typeof e.then ? e : Dt.resolve(e);
              } catch (t) {
                return ye(t);
              }
            };
          },
          spawn: function (t, e, r) {
            try {
              var n = Le(t.apply(r, e || []));
              return n && "function" == typeof n.then ? n : Dt.resolve(n);
            } catch (t) {
              return ye(t);
            }
          },
          currentTransaction: {
            get: function () {
              return Rt.trans || null;
            }
          },
          waitFor: function (t, e) {
            var r = Dt.resolve("function" == typeof t ? Pe.ignoreTransaction(t) : t).timeout(e || 6e4);
            return Rt.trans ? Rt.trans.waitFor(r) : r;
          },
          Promise: Dt,
          debug: {
            get: function () {
              return L;
            },
            set: function (t) {
              M(
                t,
                "dexie" === t
                  ? function () {
                      return !0;
                    }
                  : je
              );
            }
          },
          derive: d,
          extend: s,
          props: f,
          override: b,
          Events: ge,
          getByKeyPath: O,
          setByKeyPath: x,
          delByKeyPath: function (t, e) {
            "string" == typeof e
              ? x(t, e, void 0)
              : "length" in e &&
                [].map.call(e, function (e) {
                  x(t, e, void 0);
                });
          },
          shallowClone: k,
          deepClone: T,
          getObjectDiff: I,
          asap: _,
          maxKey: we,
          minKey: _e,
          addons: [],
          connections: Ae,
          MultiModifyError: X.Modify,
          errnames: J,
          IndexSpec: Me,
          TableSchema: Ce,
          dependencies: (function () {
            try {
              return {
                indexedDB: a.indexedDB || a.mozIndexedDB || a.webkitIndexedDB || a.msIndexedDB,
                IDBKeyRange: a.IDBKeyRange || a.webkitIDBKeyRange
              };
            } catch (t) {
              return { indexedDB: null, IDBKeyRange: null };
            }
          })(),
          semVer: me,
          version: me
            .split(".")
            .map(function (t) {
              return parseInt(t);
            })
            .reduce(function (t, e, r) {
              return t + e / Math.pow(10, 2 * r);
            }),
          default: Pe,
          Dexie: Pe
        }),
        (Dt.rejectionMapper = function (t, e) {
          if (!t || t instanceof V || t instanceof TypeError || t instanceof SyntaxError || !t.name || !Z[t.name]) return t;
          var r = new Z[t.name](e || t.message, t);
          return (
            "stack" in t &&
              h(r, "stack", {
                get: function () {
                  return this.inner.stack;
                }
              }),
            r
          );
        }),
        (ve = new Pe("__dbnames")).version(1).stores({ dbnames: "name" }),
        (function () {
          var t = "Dexie.DatabaseNames";
          try {
            localStorage,
              void 0 !== a.document &&
                (JSON.parse(localStorage.getItem(t) || "[]").forEach(function (t) {
                  return ve.dbnames.put({ name: t }).catch(tt);
                }),
                localStorage.removeItem(t));
          } catch (t) {}
        })();
      var $e = Pe;
    }),
    i.register("j4JJz", function (e, r) {
      t(e.exports, "canvasToBlob", () => s), t(e.exports, "blobToUrl", () => c), t(e.exports, "revokeObjectUrl", () => l);
      var n = i("8rN6d"),
        o = i("8bPtr"),
        a = i("2z2pA");
      function s(t, e, r) {
        return u.apply(this, arguments);
      }
      function u() {
        return (u = (0, n.default)(function (t, e, r) {
          return (0, o.__generator)(this, function (n) {
            return (
              (e = e || "image/png"),
              (r = r || 1),
              window.HTMLCanvasElement && HTMLCanvasElement.prototype.toBlob
                ? [2, new Promise((n) => t.toBlob((t) => n(t), e, r))]
                : [
                    2,
                    new Promise((n) => {
                      n(
                        (function (t) {
                          let e = atob(t.split(",")[1]),
                            r = t.split(",")[0].split(":")[1].split(";")[0];
                          return (function (t, e) {
                            let r = new ArrayBuffer(t.length),
                              n = new Uint8Array(r),
                              o = t.length;
                            for (; o--; ) n[o] = t.charCodeAt(o);
                            let i = new Blob([r], { type: e });
                            return i;
                          })(e, r);
                        })(t.toDataURL(e, r))
                      );
                    })
                  ]
            );
          });
        })).apply(this, arguments);
      }
      function c(t) {
        return URL.createObjectURL(t);
      }
      function l(t) {
        if (t && URL.revokeObjectURL)
          try {
            URL.revokeObjectURL(t);
          } catch (t) {
            a.default.error("Unable to revoke object URL"), a.default.error(t);
          }
      }
    }),
    i.register("erNYL", function (e, r) {
      t(e.exports, "trigger", () => i), t(e.exports, "on", () => a), t(e.exports, "off", () => s), t(e.exports, "oncePromise", () => u);
      const n = {},
        o = {},
        i = (t, e) => {
          [n, o].forEach((r) => c(r, t, []).forEach((t) => t(e))), (o[t] = []);
        },
        a = (t, e) => {
          c(n, t, []).push(e);
        },
        s = (t, e) => {
          const r = n[t];
          r && (n[t] = r.filter((t) => t !== e));
        },
        u = (t) =>
          new Promise((e) => {
            c(o, t, []).push(e);
          }),
        c = (t, e, r) => (void 0 === t[e] && (t[e] = r), t[e]);
    });
})();
//# sourceMappingURL=popup.6158ebed.js.map
