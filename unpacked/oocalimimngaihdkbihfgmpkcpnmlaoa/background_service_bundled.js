/*******************************************************
 * Copyright (C) 2018-2023 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  var t = {
      9560: function (t, e, i) {
        var n;
        !(function (s) {
          "use strict";
          function r(t, e) {
            var i = (65535 & t) + (65535 & e);
            return (((t >> 16) + (e >> 16) + (i >> 16)) << 16) | (65535 & i);
          }
          function o(t, e, i, n, s, o) {
            return r(((a = r(r(e, t), r(n, o))) << (c = s)) | (a >>> (32 - c)), i);
            var a, c;
          }
          function a(t, e, i, n, s, r, a) {
            return o((e & i) | (~e & n), t, e, s, r, a);
          }
          function c(t, e, i, n, s, r, a) {
            return o((e & n) | (i & ~n), t, e, s, r, a);
          }
          function h(t, e, i, n, s, r, a) {
            return o(e ^ i ^ n, t, e, s, r, a);
          }
          function u(t, e, i, n, s, r, a) {
            return o(i ^ (e | ~n), t, e, s, r, a);
          }
          function d(t, e) {
            var i, n, s, o, d;
            (t[e >> 5] |= 128 << e % 32), (t[14 + (((e + 64) >>> 9) << 4)] = e);
            var l = 1732584193,
              f = -271733879,
              p = -1732584194,
              v = 271733878;
            for (i = 0; i < t.length; i += 16)
              (n = l),
                (s = f),
                (o = p),
                (d = v),
                (l = a(l, f, p, v, t[i], 7, -680876936)),
                (v = a(v, l, f, p, t[i + 1], 12, -389564586)),
                (p = a(p, v, l, f, t[i + 2], 17, 606105819)),
                (f = a(f, p, v, l, t[i + 3], 22, -1044525330)),
                (l = a(l, f, p, v, t[i + 4], 7, -176418897)),
                (v = a(v, l, f, p, t[i + 5], 12, 1200080426)),
                (p = a(p, v, l, f, t[i + 6], 17, -1473231341)),
                (f = a(f, p, v, l, t[i + 7], 22, -45705983)),
                (l = a(l, f, p, v, t[i + 8], 7, 1770035416)),
                (v = a(v, l, f, p, t[i + 9], 12, -1958414417)),
                (p = a(p, v, l, f, t[i + 10], 17, -42063)),
                (f = a(f, p, v, l, t[i + 11], 22, -1990404162)),
                (l = a(l, f, p, v, t[i + 12], 7, 1804603682)),
                (v = a(v, l, f, p, t[i + 13], 12, -40341101)),
                (p = a(p, v, l, f, t[i + 14], 17, -1502002290)),
                (l = c(l, (f = a(f, p, v, l, t[i + 15], 22, 1236535329)), p, v, t[i + 1], 5, -165796510)),
                (v = c(v, l, f, p, t[i + 6], 9, -1069501632)),
                (p = c(p, v, l, f, t[i + 11], 14, 643717713)),
                (f = c(f, p, v, l, t[i], 20, -373897302)),
                (l = c(l, f, p, v, t[i + 5], 5, -701558691)),
                (v = c(v, l, f, p, t[i + 10], 9, 38016083)),
                (p = c(p, v, l, f, t[i + 15], 14, -660478335)),
                (f = c(f, p, v, l, t[i + 4], 20, -405537848)),
                (l = c(l, f, p, v, t[i + 9], 5, 568446438)),
                (v = c(v, l, f, p, t[i + 14], 9, -1019803690)),
                (p = c(p, v, l, f, t[i + 3], 14, -187363961)),
                (f = c(f, p, v, l, t[i + 8], 20, 1163531501)),
                (l = c(l, f, p, v, t[i + 13], 5, -1444681467)),
                (v = c(v, l, f, p, t[i + 2], 9, -51403784)),
                (p = c(p, v, l, f, t[i + 7], 14, 1735328473)),
                (l = h(l, (f = c(f, p, v, l, t[i + 12], 20, -1926607734)), p, v, t[i + 5], 4, -378558)),
                (v = h(v, l, f, p, t[i + 8], 11, -2022574463)),
                (p = h(p, v, l, f, t[i + 11], 16, 1839030562)),
                (f = h(f, p, v, l, t[i + 14], 23, -35309556)),
                (l = h(l, f, p, v, t[i + 1], 4, -1530992060)),
                (v = h(v, l, f, p, t[i + 4], 11, 1272893353)),
                (p = h(p, v, l, f, t[i + 7], 16, -155497632)),
                (f = h(f, p, v, l, t[i + 10], 23, -1094730640)),
                (l = h(l, f, p, v, t[i + 13], 4, 681279174)),
                (v = h(v, l, f, p, t[i], 11, -358537222)),
                (p = h(p, v, l, f, t[i + 3], 16, -722521979)),
                (f = h(f, p, v, l, t[i + 6], 23, 76029189)),
                (l = h(l, f, p, v, t[i + 9], 4, -640364487)),
                (v = h(v, l, f, p, t[i + 12], 11, -421815835)),
                (p = h(p, v, l, f, t[i + 15], 16, 530742520)),
                (l = u(l, (f = h(f, p, v, l, t[i + 2], 23, -995338651)), p, v, t[i], 6, -198630844)),
                (v = u(v, l, f, p, t[i + 7], 10, 1126891415)),
                (p = u(p, v, l, f, t[i + 14], 15, -1416354905)),
                (f = u(f, p, v, l, t[i + 5], 21, -57434055)),
                (l = u(l, f, p, v, t[i + 12], 6, 1700485571)),
                (v = u(v, l, f, p, t[i + 3], 10, -1894986606)),
                (p = u(p, v, l, f, t[i + 10], 15, -1051523)),
                (f = u(f, p, v, l, t[i + 1], 21, -2054922799)),
                (l = u(l, f, p, v, t[i + 8], 6, 1873313359)),
                (v = u(v, l, f, p, t[i + 15], 10, -30611744)),
                (p = u(p, v, l, f, t[i + 6], 15, -1560198380)),
                (f = u(f, p, v, l, t[i + 13], 21, 1309151649)),
                (l = u(l, f, p, v, t[i + 4], 6, -145523070)),
                (v = u(v, l, f, p, t[i + 11], 10, -1120210379)),
                (p = u(p, v, l, f, t[i + 2], 15, 718787259)),
                (f = u(f, p, v, l, t[i + 9], 21, -343485551)),
                (l = r(l, n)),
                (f = r(f, s)),
                (p = r(p, o)),
                (v = r(v, d));
            return [l, f, p, v];
          }
          function l(t) {
            var e,
              i = "",
              n = 32 * t.length;
            for (e = 0; e < n; e += 8) i += String.fromCharCode((t[e >> 5] >>> e % 32) & 255);
            return i;
          }
          function f(t) {
            var e,
              i = [];
            for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1) i[e] = 0;
            var n = 8 * t.length;
            for (e = 0; e < n; e += 8) i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
            return i;
          }
          function p(t) {
            var e,
              i,
              n = "0123456789abcdef",
              s = "";
            for (i = 0; i < t.length; i += 1) (e = t.charCodeAt(i)), (s += n.charAt((e >>> 4) & 15) + n.charAt(15 & e));
            return s;
          }
          function v(t) {
            return unescape(encodeURIComponent(t));
          }
          function g(t) {
            return (function (t) {
              return l(d(f(t), 8 * t.length));
            })(v(t));
          }
          function m(t, e) {
            return (function (t, e) {
              var i,
                n,
                s = f(t),
                r = [],
                o = [];
              for (r[15] = o[15] = void 0, s.length > 16 && (s = d(s, 8 * t.length)), i = 0; i < 16; i += 1)
                (r[i] = 909522486 ^ s[i]), (o[i] = 1549556828 ^ s[i]);
              return (n = d(r.concat(f(e)), 512 + 8 * e.length)), l(d(o.concat(n), 640));
            })(v(t), v(e));
          }
          function b(t, e, i) {
            return e ? (i ? m(e, t) : p(m(e, t))) : i ? g(t) : p(g(t));
          }
          void 0 ===
            (n = function () {
              return b;
            }.call(e, i, e, t)) || (t.exports = n);
        })();
      },
      1227: (t, e, i) => {
        (e.formatArgs = function (e) {
          if (
            ((e[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              e[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const i = "color: " + this.color;
          e.splice(1, 0, i, "color: inherit");
          let n = 0,
            s = 0;
          e[0].replace(/%[a-zA-Z%]/g, (t) => {
            "%%" !== t && (n++, "%c" === t && (s = n));
          }),
            e.splice(s, 0, i);
        }),
          (e.save = function (t) {
            try {
              t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
          }),
          (e.load = function () {
            let t;
            try {
              t = e.storage.getItem("debug");
            } catch (t) {}
            !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG);
            return t;
          }),
          (e.useColors = function () {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
              return !1;
            return (
              ("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" != typeof window &&
                window.console &&
                (window.console.firebug || (window.console.exception && window.console.table))) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (e.storage = (function () {
            try {
              return localStorage;
            } catch (t) {}
          })()),
          (e.destroy = (() => {
            let t = !1;
            return () => {
              t ||
                ((t = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (e.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33"
          ]),
          (e.log = console.debug || console.log || (() => {})),
          (t.exports = i(2447)(e));
        const { formatters: n } = t.exports;
        n.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      },
      2447: (t, e, i) => {
        t.exports = function (t) {
          function e(t) {
            let i,
              s,
              r,
              o = null;
            function a(...t) {
              if (!a.enabled) return;
              const n = a,
                s = Number(new Date()),
                r = s - (i || s);
              (n.diff = r), (n.prev = i), (n.curr = s), (i = s), (t[0] = e.coerce(t[0])), "string" != typeof t[0] && t.unshift("%O");
              let o = 0;
              (t[0] = t[0].replace(/%([a-zA-Z%])/g, (i, s) => {
                if ("%%" === i) return "%";
                o++;
                const r = e.formatters[s];
                if ("function" == typeof r) {
                  const e = t[o];
                  (i = r.call(n, e)), t.splice(o, 1), o--;
                }
                return i;
              })),
                e.formatArgs.call(n, t);
              (n.log || e.log).apply(n, t);
            }
            return (
              (a.namespace = t),
              (a.useColors = e.useColors()),
              (a.color = e.selectColor(t)),
              (a.extend = n),
              (a.destroy = e.destroy),
              Object.defineProperty(a, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => (null !== o ? o : (s !== e.namespaces && ((s = e.namespaces), (r = e.enabled(t))), r)),
                set: (t) => {
                  o = t;
                }
              }),
              "function" == typeof e.init && e.init(a),
              a
            );
          }
          function n(t, i) {
            const n = e(this.namespace + (void 0 === i ? ":" : i) + t);
            return (n.log = this.log), n;
          }
          function s(t) {
            return t
              .toString()
              .substring(2, t.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (e.debug = e),
            (e.default = e),
            (e.coerce = function (t) {
              if (t instanceof Error) return t.stack || t.message;
              return t;
            }),
            (e.disable = function () {
              const t = [...e.names.map(s), ...e.skips.map(s).map((t) => "-" + t)].join(",");
              return e.enable(""), t;
            }),
            (e.enable = function (t) {
              let i;
              e.save(t), (e.namespaces = t), (e.names = []), (e.skips = []);
              const n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                s = n.length;
              for (i = 0; i < s; i++)
                n[i] &&
                  ("-" === (t = n[i].replace(/\*/g, ".*?"))[0]
                    ? e.skips.push(new RegExp("^" + t.slice(1) + "$"))
                    : e.names.push(new RegExp("^" + t + "$")));
            }),
            (e.enabled = function (t) {
              if ("*" === t[t.length - 1]) return !0;
              let i, n;
              for (i = 0, n = e.skips.length; i < n; i++) if (e.skips[i].test(t)) return !1;
              for (i = 0, n = e.names.length; i < n; i++) if (e.names[i].test(t)) return !0;
              return !1;
            }),
            (e.humanize = i(7824)),
            (e.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(t).forEach((i) => {
              e[i] = t[i];
            }),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {}),
            (e.selectColor = function (t) {
              let i = 0;
              for (let e = 0; e < t.length; e++) (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
              return e.colors[Math.abs(i) % e.colors.length];
            }),
            e.enable(e.load()),
            e
          );
        };
      },
      7824: (t) => {
        var e = 1e3,
          i = 60 * e,
          n = 60 * i,
          s = 24 * n,
          r = 7 * s,
          o = 365.25 * s;
        function a(t, e, i, n) {
          var s = e >= 1.5 * i;
          return Math.round(t / i) + " " + n + (s ? "s" : "");
        }
        t.exports = function (t, c) {
          c = c || {};
          var h = typeof t;
          if ("string" === h && t.length > 0)
            return (function (t) {
              if ((t = String(t)).length > 100) return;
              var a =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  t
                );
              if (!a) return;
              var c = parseFloat(a[1]);
              switch ((a[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return c * o;
                case "weeks":
                case "week":
                case "w":
                  return c * r;
                case "days":
                case "day":
                case "d":
                  return c * s;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return c * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return c * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return c * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return c;
                default:
                  return;
              }
            })(t);
          if ("number" === h && isFinite(t))
            return c.long
              ? (function (t) {
                  var r = Math.abs(t);
                  if (r >= s) return a(t, r, s, "day");
                  if (r >= n) return a(t, r, n, "hour");
                  if (r >= i) return a(t, r, i, "minute");
                  if (r >= e) return a(t, r, e, "second");
                  return t + " ms";
                })(t)
              : (function (t) {
                  var r = Math.abs(t);
                  if (r >= s) return Math.round(t / s) + "d";
                  if (r >= n) return Math.round(t / n) + "h";
                  if (r >= i) return Math.round(t / i) + "m";
                  if (r >= e) return Math.round(t / e) + "s";
                  return t + "ms";
                })(t);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
        };
      },
      1309: (t, e, i) => {
        var n = i(479),
          s = i(3925);
        (t.exports = n), (t.exports.murmur3 = n), (t.exports.murmur2 = s);
      },
      3925: (t) => {
        t.exports = function (t, e) {
          for (var i, n = t.length, s = e ^ n, r = 0; n >= 4; )
            (i =
              1540483477 *
                (65535 &
                  (i =
                    (255 & t.charCodeAt(r)) |
                    ((255 & t.charCodeAt(++r)) << 8) |
                    ((255 & t.charCodeAt(++r)) << 16) |
                    ((255 & t.charCodeAt(++r)) << 24))) +
              (((1540483477 * (i >>> 16)) & 65535) << 16)),
              (s =
                (1540483477 * (65535 & s) + (((1540483477 * (s >>> 16)) & 65535) << 16)) ^
                (i = 1540483477 * (65535 & (i ^= i >>> 24)) + (((1540483477 * (i >>> 16)) & 65535) << 16))),
              (n -= 4),
              ++r;
          switch (n) {
            case 3:
              s ^= (255 & t.charCodeAt(r + 2)) << 16;
            case 2:
              s ^= (255 & t.charCodeAt(r + 1)) << 8;
            case 1:
              s = 1540483477 * (65535 & (s ^= 255 & t.charCodeAt(r))) + (((1540483477 * (s >>> 16)) & 65535) << 16);
          }
          return (s = 1540483477 * (65535 & (s ^= s >>> 13)) + (((1540483477 * (s >>> 16)) & 65535) << 16)), (s ^= s >>> 15) >>> 0;
        };
      },
      479: (t) => {
        t.exports = function (t, e) {
          var i, n, s, r, o, a, c, h;
          for (i = 3 & t.length, n = t.length - i, s = e, o = 3432918353, a = 461845907, h = 0; h < n; )
            (c =
              (255 & t.charCodeAt(h)) |
              ((255 & t.charCodeAt(++h)) << 8) |
              ((255 & t.charCodeAt(++h)) << 16) |
              ((255 & t.charCodeAt(++h)) << 24)),
              ++h,
              (s =
                27492 +
                (65535 &
                  (r =
                    (5 *
                      (65535 &
                        (s =
                          ((s ^= c =
                            ((65535 &
                              (c = ((c = ((65535 & c) * o + ((((c >>> 16) * o) & 65535) << 16)) & 4294967295) << 15) | (c >>> 17))) *
                              a +
                              ((((c >>> 16) * a) & 65535) << 16)) &
                            4294967295) <<
                            13) |
                          (s >>> 19))) +
                      (((5 * (s >>> 16)) & 65535) << 16)) &
                    4294967295)) +
                (((58964 + (r >>> 16)) & 65535) << 16));
          switch (((c = 0), i)) {
            case 3:
              c ^= (255 & t.charCodeAt(h + 2)) << 16;
            case 2:
              c ^= (255 & t.charCodeAt(h + 1)) << 8;
            case 1:
              s ^= c =
                ((65535 &
                  (c =
                    ((c = ((65535 & (c ^= 255 & t.charCodeAt(h))) * o + ((((c >>> 16) * o) & 65535) << 16)) & 4294967295) << 15) |
                    (c >>> 17))) *
                  a +
                  ((((c >>> 16) * a) & 65535) << 16)) &
                4294967295;
          }
          return (
            (s ^= t.length),
            (s = (2246822507 * (65535 & (s ^= s >>> 16)) + (((2246822507 * (s >>> 16)) & 65535) << 16)) & 4294967295),
            (s = (3266489909 * (65535 & (s ^= s >>> 13)) + (((3266489909 * (s >>> 16)) & 65535) << 16)) & 4294967295),
            (s ^= s >>> 16) >>> 0
          );
        };
      }
    },
    e = {};
  function i(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var r = (e[n] = { exports: {} });
    return t[n].call(r.exports, r, r.exports, i), r.exports;
  }
  (i.n = (t) => {
    var e = t && t.t ? () => t.default : () => t;
    return i.d(e, { a: e }), e;
  }),
    (i.d = (t, e) => {
      for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (i.r = (t) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "t", { value: !0 });
    });
  var n = {};
  (() => {
    "use strict";
    i.d(n, { Z: () => Ca });
    var t = {};
    i.r(t), i.d(t, { Decoder: () => Ce, Encoder: () => Te, PacketType: () => Se, protocol: () => ke });
    var e = i(1227),
      s = i.n(e);
    const r = chrome.runtime.id,
      o = [
        ".netflix.",
        ".disneyplus.",
        ".hbomax.",
        ".max.",
        ".hulu.",
        ".amazon.",
        ".primevideo.",
        ".youtube.",
        ".paramountplus.",
        ".funimation.",
        ".peacocktv.",
        ".crunchyroll.",
        ".fubo.tv",
        ".espn.",
        ".showtime.",
        ".amcplus.",
        ".hotstar.",
        "tv.apple.",
        "tubitv.com",
        ".sling.",
        ".philo.",
        ".hotstar.",
        ".starplus.",
        "pluto.",
        ".jiocinema.",
        "mubi.",
        "stan.",
        ".crave."
      ],
      a = "https://api.teleparty.com",
      c = "wss://ws.teleparty.com",
      h = "https://wptony1.netflixparty.com",
      u = ["canceled", "unpaid", "incomplete_expired", "incomplete"],
      d = "https://redirect.teleparty.com",
      l = {
        apiKey: "AIzaSyDvZJAoFJkT2lBrhloA0e9XwKmLgELTAeQ",
        authDomain: "teleparty-mobile.firebaseapp.com",
        projectId: "teleparty-mobile",
        storageBucket: "teleparty-mobile.appspot.com",
        messagingSenderId: "961974665980",
        appId: "1:961974665980:web:fe4179db8591331aeb8d79",
        measurementId: "G-PC36DK40FL"
      },
      f = `${d}/sidebar`,
      p = `${d}/friends`,
      v = "redirectDataMap",
      g = [
        "14dd5266c70789bdc806364df4586335",
        "084b9a35bf7a90ee3b1209295143a160",
        "198ee5b40d881b11c181e809a920686d",
        "f1351f24c338026365ebe359042454c0",
        "03dd02fa0897d31a6acdd8e29b445a20",
        "bb50827dd4b988cadc8da099269413b6",
        "a966436ff4efb93d82438c84c9e82501",
        "75c9d855053feaac9d52123046affcb3",
        "35119bfe29703c10c707681340e27745",
        "f5a61b4f7a84ef7190a5b710a85e1481",
        "88e37d809d6511659604bf5b3e35d036",
        "0db478dd562961e254fd9f50080b8cc7",
        "6db3172a7ce6bd0537347aa67ad9721d",
        "076419202c9a2f0ddbc9b892e3f56cd6",
        "dc94d8874491e57a4e3478f5b0079344",
        "7bc58fe626ebf7556b488e22e80183c1",
        "e4fd8b025b4efb3dd1471c519b50026b",
        "6889163f14209cef43c9ef16f0c60c9d",
        "0d8e948f7c24d3142e52317cf428ef5b",
        "f1465d57dd48abdcf5df77d7758ed4b9",
        "f0e13d3805734d70efebf8a5d3490220",
        "df1461577dac70fdd4fa9e387960f9e6",
        "535d54131b17f9c209919bab80d1e4c6",
        "1125be55ec1c46eaf7b444eaf758e171",
        "503ac5d2d29c77d14e88927cbae2e5f1",
        "6557a2ad0cc698c74338f534e2300e39",
        "a68704a7579d48b3160f2139f259bb85",
        "00eac5fbde04851d6bfbbf154fb4a798",
        "c60cf5514b98cf1b06af59681a0fb47d",
        "b0ba65fe241ee7327495e3f12fc27271",
        "6ac3824b129e8156300b14f9c223cc05",
        "b4f2c479e80b9eac28584628362e82be",
        "e0597ac2994cf2fbf6deacdfd47ec344",
        "198ee5b40d881b11c181e809a920686d",
        "8c138e5921db00042f684ac0561fb82c",
        "fde70d823115be6e349d2467b4cfd4a1",
        "911aca15ca1314fa218de7d28e0a5904",
        "0b1c1cc7c9cdb30206009e7deefa8349",
        "f218a98c995db7b568925445a0e1e0b2",
        "f4061f9b7b90e2d97979b3d58683ef53",
        "1b66409e7ce72ec6f3e8d6f30f200188",
        "3607c674e4ea89c6c71331d497a41da1",
        "b29c5e185480f4fb7d3f0dc37386184c",
        "10e64eb35388d6b89a09439a40d246b3",
        "d745905af032337196e54ba9ceadc3b7",
        "7c1e014a0e6e2be77f0f828f746db60d",
        "51fa4f675876f51d22ea779dae63f120",
        "c179fe84a54c30cf17c026e2127edd16",
        "1e4c0bdcb9128be744bc4bb2b9b2f9ad",
        "6c3b7fbb0dfe761451f9fd38dacf9f0e",
        "46222e429cd67082a16790d36ae814b6",
        "b429bdefd1bbf93368808974fe75ac6b",
        "4b5045f64a7ae1dad40aad53b6410424",
        "9bab8d20ffdb11ec6ec6c5daab51fe79",
        "2ef7422b899b269497c6ce39f539da90",
        "fd28648d87890bfc3651ee92e688e74e",
        "ca578f911239dfbabe8a5ea312302434",
        "c67454e42c79e0103c2c85d72a6b1012",
        "c45d7ccb5a624cb55b7f7e79d3b15dab",
        "af17c2e7b870cf581e6a7d501c1c7a84",
        "43a4892acfb869207169b0821af0c8b8",
        "b0c0ecdb3ed120aeebcd025976e8c9c4",
        "e6f1172be8e8e4e3045ab51151d27398",
        "22f314c1a713abf0a4e0b577ab3c880a",
        "8832d30b7f66e3be6a006449bae0ad2f",
        "9e699143919f33f2685abc56e49493c4",
        "aab3b394303fdaa028e53d5ccb82fec9",
        "01fa6f0b354ecd346dd6a4152f2cd70b",
        "b7a00a351503e693272363e3b1d49fa4",
        "4b96227cfe88622fa075ad2cd3edeaa0",
        "681bc4b134c2283644c34fd424ab6926",
        "ed196065e5d419611888db17f0ce09db",
        "bbdde3801d234025f7a74c938a7dddaf",
        "aed1253ca571ef2907662b56d7635d26",
        "6eb07dac77c36975d9a8c288540b3b7a",
        "51227b9fcd6bcb6322e499ebc2f9fa46",
        "a545aeb5244bcf1052ad7a06b2fcabc2",
        "bee3e3459819a89a6c17cda46cde1e67",
        "eb4cd3640f79241688ca61b43f8b8fe6",
        "5bf3f15133fcc8d332b3d5e538d87ee8",
        "62b44a3a7b8fbe73eefeaa28b82ae5bc",
        "734992877dd736affd0a6b275d9fc178",
        "583129b8a7bd52532a741ad973004650",
        "eb47ccdd24317e042451fec1d32c40fd",
        "6d4777979f2b9eec091f4278d24d03f4",
        "828b25871af640acd3cb8cb812fc7cd0",
        "691b6e107e0f5e1b308d104f2bba45c2",
        "e2a78d2121c7ccbeb4f51f8d7c76370e",
        "94208773c1928e7199990b469a8efd46",
        "4c428bc930f3fb55cc0a9b485aaf06e7",
        "90a0ae81e70d6366c913e759ed071f6e",
        "a6fe78012b8dd863269ae232e1628272",
        "26a572eaad2ac36b8263ac653b78c8ba",
        "78236d8a2e74e8ab2baca0de23cad517",
        "80927eb4ab23b6542ff90d128db51d8b",
        "1481c20796daff385341278bd1ccfb63",
        "5fd444c9c92e04097385fe338b2dd592",
        "91f17d4cc596697753b8a3f7c3a51fe8",
        "e67c7bfb56164f89707096b64a0fa222",
        "055f259a02e2695a3e9a47fa2f611190",
        "3614880645f2537751cd14bea0e7d3e0",
        "f284bdc7d2d5b8e8fd0315494119d103",
        "d4cf015248b3189befb639ae103779a2",
        "b7d826611e341275e69c57db102edd3f",
        "ca4220108488f0b3b7093f80ece241e6",
        "427313ade83889963636fbf11979b57a",
        "2de49f63f6cad290d722d3553cb11fff",
        "09662bd51633164e47df492f9f8eee42",
        "a8028e323ec822578301eb00d5be435e",
        "ea15ba28196946db886be874682170ee",
        "ea15ba28196946db886be874682170ee",
        "09ea85c2472b4f5a6a8651b891235e3a",
        "01a1d2098d5dbe44e98e07f545c50e0a",
        "2b724beac6fdb59b2f058c93c4143844",
        "0b13c18858a94efc80b61e3191228e9c",
        "c5123c5eb1dc3e7accc8e69b8d0ad0ed",
        "9299c0a3b1386abdcb96a2d994733a97",
        "1c14ba2bfeabd0336316f4cf01803aba",
        "5807641735f62780cf90626357f730fd",
        "b6f36d9e0736f5986a942a5948b62897",
        "5d3d66b0b2e359200e6ec020385beee1",
        "058bc167332631fced05f99fd61ec049",
        "9c9d1f329f42806a51ee3997632693b5",
        "118502ee69b77ae34f5ef5f6e1eb9b8b",
        "67427d949468416bdc8aec0519bd1ecb",
        "87d666e3fe3692f02370fe8eed7c4c3d",
        "9795341414b13d2c0b907fc3d078a3be",
        "9795341414b13d2c0b907fc3d078a3be",
        "8933f1a8bb580c258131189542aee0ff",
        "a3482994829b824188d30e66577d3c47",
        "5741eb5a721fd8db8c46d515e8e3c943",
        "db732f53471552d528896bef96aa55e2",
        "f2c2fbb6dc6296c6af64480161723ae1",
        "b2510ab6b4b3d3e5fa99b55b2f14952c",
        "dd2f0cbb17c98dd30584c255910faaf4",
        "ea5bcfdd63637c0de85cd9457d0ebd39",
        "a895f19c167c482e14ba68a871474362",
        "56ab5ff71e2cef96e0930fedfd6732dc",
        "e8e7510baf1c560e5b75b65dd39d9b0c",
        "970359ab1498b0f1424bbaa31e04c941",
        "9cd57ab957780ad3d683a77b465ecf10",
        "5e453b5bd2a30cbf6681b90ee66ded53",
        "86f10c9bfed04d371c5ec2f72b45b97c",
        "78083e14057c371766825ee50381fc57",
        "d4d790bdfea5f4c62c2a549aa09948c2",
        "e176c7afb65995e8c6c040b2676344b0",
        "54fa4c3c28588089d333fec450eeec4c",
        "d96aae6152222bec0444a884deb9952a",
        "7c82d4bdbfb964df322fa88fa74c3ec1",
        "1cd6d7bed81d8e29beef2b4b84f8d8d8",
        "6e710a2bb843536c9bc3ee8d212411e9",
        "83b10a053c01b3e43c99a2b6bea977bd",
        "c53b8a80e0f94ea72710637e9d96e157",
        "0ea3c774c0ff2d95ea58c99f1dfef15c",
        "193b430d3916bfce6c8f7e7473a9c373",
        "872578c13658c8cfc0366ddbaeb4e24b",
        "aa55b92a78d3b7d5c10d8a3670365bd9",
        "191fcaeda8ccbd0cb05dd266b9433bb4",
        "a7ddefee6f4f563dc109372a6a4ccdd2",
        "d27856a35d8397ed93ff92cfb797b262",
        "5d781780ca1f717f60325284638a0266",
        "26d0b368e0f542d7cd013981211d4394",
        "c1b57a55ffa6e6adc85ccf0cc02f0e5a",
        "df6ae22ab6703ba141f0f332984eb578"
      ],
      m = "Service_Background",
      b = "Content_Script",
      w = "Failed to read chrome storage. Please refresh the page and try again",
      y = "An unexpected error occured. Please refresh the page and try again.",
      _ = 368;
    chrome.extension.getURL("img/x-circle.svg");
    class I {
      constructor(t, e, i, n, s) {
        (this.requiredPermissions = t), (this.serverName = i), (this.name = n), (this.contentScripts = e), (this.syncFromEnd = s);
      }
      urlWithSessionId(t) {
        return `https://redirect.teleparty.com/join/${t}`;
      }
    }
    var k, S;
    !(function (t) {
      (t.NETFLIX = "Netflix"),
        (t.HULU = "Hulu"),
        (t.DISNEY_PLUS = "Disney"),
        (t.HBO_MAX = "HBOMax"),
        (t.MAX = "Max"),
        (t.YOUTUBE = "Youtube"),
        (t.YOUTUBE_TV = "YoutubeTV"),
        (t.AMAZON = "Amazon"),
        (t.CRUNCHYROLL = "Crunchyroll"),
        (t.ESPN = "ESPN+"),
        (t.PARAMOUNT = "Paramount+"),
        (t.FUNIMATION = "Funimation"),
        (t.HOTSTAR = "Hotstar"),
        (t.PEACOCK = "peacock"),
        (t.STAR_PLUS = "Starplus"),
        (t.PLUTO_TV = "PlutoTV"),
        (t.APPLE_TV = "AppleTV"),
        (t.JIO_CINEMA = "JioCinema"),
        (t.TUBI_TV = "TubiTV"),
        (t.MUBI = "Mubi"),
        (t.STAN = "Stan"),
        (t.CRAVE = "Crave");
    })(k || (k = {})),
      (function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(S || (S = {}));
    var T,
      C = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function c(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      };
    function E(t) {
      return t.includes("urn:hbo:feature")
        ? S.FEATURE
        : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
        ? S.EPISODE
        : t.includes("urn:hbo:extra")
        ? S.EXTRA
        : S.OTHER;
    }
    function O(t) {
      return function () {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, t);
        });
      };
    }
    function A(t, e, i, n, s, r) {
      return C(this, void 0, void 0, function* () {
        const o = `${a}/${t}`,
          c = new XMLHttpRequest();
        if ((c.open(e, o), i)) {
          if (!s) throw (console.error("Passed Token: " + s), new Error("403"));
          c.setRequestHeader("Authorization", `Bearer ${s}`), c.setRequestHeader("Content-Type", "application/json");
        }
        if (r) for (const t of Object.keys(r)) c.setRequestHeader(t, r[t]);
        return new Promise((t, e) => {
          c.addEventListener("readystatechange", () => {
            if (c.readyState === XMLHttpRequest.DONE) {
              const i = c.status;
              0 === i || (i >= 200 && i < 400) ? t(c.responseText) : e(c.responseText);
            }
          }),
            c.send(JSON.stringify(n));
        });
      });
    }
    !(function (t) {
      (t.REGISTER = "register"), (t.PARTY_START = "party_start"), (t.PARTY_JOIN = "party_join"), (t.PARTY_END = "party_end");
    })(T || (T = {}));
    const P = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".netflix.") && t.pathname.includes("/watch");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".netflix.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
      getFullscreenScript() {
        return '\n            (function() {\n                var sizingWrapper = document.getElementsByClassName("sizing-wrapper")[0];\n                    if (sizingWrapper) {\n                        sizingWrapper.requestFullscreen = function() {}\n                        document.getElementsByClassName(\'button-nfplayerFullscreen\')[0].onclick = function() {\n                            var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];\n                            fullScreenWrapper.webkitRequestFullScreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);\n                        }\n                    }\n            })();\n        ';
      }
    })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", k.NETFLIX, !1);
    Object.freeze(P);
    const N = P;
    const D = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".hulu.") && t.pathname.includes("/watch");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hulu.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", k.HULU, !1);
    Object.freeze(D);
    const R = D;
    const x = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".disneyplus.") && t.pathname.includes("/video");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".disneyplus.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", k.DISNEY_PLUS, !1);
    Object.freeze(x);
    const F = x;
    const j = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return (t.hostname.includes(".hbomax.") && "other" !== E(t.pathname)) || t.pathname.includes("urn:hbo:page");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hbomax.");
      }
      getVideoId(t) {
        const e = "urn:hbo:" + E(t.pathname) + ":",
          i = t.pathname.split(e);
        let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
        const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
        let r = s && s.length > 0 ? s[1] : void 0;
        return r || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (r = null != n && 3 == n.length ? n[2] : void 0)), r;
      }
      getVideoType(t) {
        return E(t.pathname);
      }
    })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", k.HBO_MAX, !1);
    Object.freeze(j);
    const M = j;
    const L = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.");
        })(t);
      }
      isBrowsing(t) {
        return !1;
      }
      getVideoId(t) {
        const e = t.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
        return null != e && e.length > 0 ? e[1] : void 0;
      }
    })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", k.AMAZON, !1);
    Object.freeze(L);
    const U = L;
    const B = new (class extends I {
      isBrowsing(t) {
        return t.hostname.includes(".crunchyroll.");
      }
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".crunchyroll.");
        })(t);
      }
      getVideoId(t) {
        const e = t.pathname.match(/watch\/(.*)\//);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", k.CRUNCHYROLL, !1);
    Object.freeze(B);
    const V = B;
    const $ = new (class extends I {
      isBrowsing(t) {
        return !(t.href.includes(".hotstar.") || !t.href.includes("watch?"));
      }
      isValidUrl(t) {
        return (function (t) {
          return !(t.hostname.includes("tv.youtube.com") && !t.pathname.includes("/watch")) && t.hostname.includes(".youtube.");
        })(t);
      }
      getVideoId(t) {
        if (t.href.includes("/watch") || t.href.includes("/shorts/")) {
          const e = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(t.href);
          return null != e && e.length > 3 && e[3] ? e[3] : void 0;
        }
        return "browsing";
      }
    })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", k.YOUTUBE, !1);
    Object.freeze($);
    const W = $;
    const G = new (class extends I {
      isBrowsing(t) {
        return t.hostname.includes(".espn.");
      }
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".espn.") && t.pathname.includes("/player");
        })(t);
      }
      getVideoId(t) {
        const e = t.pathname;
        return e.substring(e.lastIndexOf("/") + 1);
      }
    })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", k.ESPN, !1);
    Object.freeze(G);
    const H = G;
    const z = new (class extends I {
      isBrowsing(t) {
        return t.hostname.includes(".paramountplus.");
      }
      isValidUrl(t) {
        return (function (t) {
          return (
            t.hostname.includes(".paramountplus.") &&
            (t.pathname.includes("/video") || t.pathname.includes("/stream") || t.pathname.includes("/movie"))
          );
        })(t);
      }
      getVideoId(t) {
        var e;
        const i = null !== (e = t.pathname.match(/video\/([^/]+)/)) && void 0 !== e ? e : t.pathname.match(/stream\/([^/]+)/);
        return i && i.length > 1 ? i[1] : void 0;
      }
    })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", k.PARAMOUNT, !1);
    Object.freeze(z);
    const J = z;
    const q = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".hotstar.") && t.pathname.includes("/watch");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hotstar.");
      }
      getVideoId(t) {
        const e = t.pathname.split("/");
        return e && e.length > 1 ? e[e.length - 2] : void 0;
      }
    })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", k.HOTSTAR, !1);
    Object.freeze(q);
    const K = q;
    const X = new (class extends I {
      isBrowsing(t) {
        return t.hostname.includes(".peacocktv.");
      }
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".peacocktv.") && t.pathname.includes("/watch") && t.pathname.includes("/playback");
        })(t);
      }
      getVideoId(t) {
        const e = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", k.PEACOCK, !1);
    Object.freeze(X);
    const Y = X;
    const Z = new (class extends I {
      isBrowsing(t) {
        return t.hostname.includes(".funimation.");
      }
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".funimation.") && t.pathname.includes("/v/");
        })(t);
      }
      getVideoId(t) {
        return t.pathname.split("/v/")[1];
      }
    })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", k.FUNIMATION, !1);
    Object.freeze(Z);
    const Q = Z;
    const tt = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".play.max.");
      }
      getVideoId(t) {
        var e;
        const i = null === (e = t.pathname) || void 0 === e ? void 0 : e.match(/(watch\/)([a-zA-Z\-_0-9]+)\??/);
        return i ? i[2] : void 0;
      }
    })([], ["content_scripts/max/max_content_bundled.js"], "max", k.MAX, !1);
    Object.freeze(tt);
    const et = tt;
    const it = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".starplus.") && t.pathname.includes("/video");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".starplus.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", k.STAR_PLUS, !1);
    Object.freeze(it);
    const nt = it;
    const st = new (class extends I {
      isBrowsing(t) {
        return (
          t.href.includes("/details") ||
          t.href.includes("/search") ||
          (t.href.includes("live-tv") && ("" == t.href.split("live-tv")[1] || "/" == t.href.split("live-tv")[1])) ||
          (t.href.includes("on-demand") && ("" == t.href.split("on-demand")[1] || "/" == t.href.split("on-demand")[1]))
        );
      }
      isValidUrl(t) {
        return (function (t) {
          return (
            console.log("Checking if PlutoTV Party"),
            t.hostname.includes("pluto.tv") && !t.pathname.includes("/details") && !t.pathname.includes("/search")
          );
        })(t);
      }
      getVideoId(t) {
        return t.href.split("pluto.tv/").pop();
      }
    })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", k.PLUTO_TV, !1);
    Object.freeze(st);
    const rt = st;
    const ot = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes("tv.apple.com");
        })(t);
      }
      isBrowsing(t) {
        return !1;
      }
      getVideoId(t) {
        return t.toString().split("https://tv.apple.com/")[1];
      }
    })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", k.APPLE_TV, !1);
    Object.freeze(ot);
    const at = ot;
    const ct = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes(".jiocinema."),
            i = t.pathname.includes("/watch") && t.pathname.includes("/movies/"),
            n = t.pathname.includes("/sports/"),
            s = t.pathname.includes("/tv-shows/"),
            r = t.pathname.includes("/news/");
          return e && (i || n || s || r);
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".jiocinema.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", k.JIO_CINEMA, !1);
    Object.freeze(ct);
    const ht = ct;
    const ut = new (class extends I {
      isBrowsing(t) {
        return t.hostname.includes("tubitv.com");
      }
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes("tubitv.com") && ["tv-shows", "live", "movies"].some((e) => t.pathname.includes(e));
        })(t);
      }
      getVideoId(t) {
        return t.pathname;
      }
    })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", k.TUBI_TV, !1);
    Object.freeze(ut);
    const dt = ut;
    const lt = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes(".crave."),
            i = 5 === t.pathname.split("/").length;
          return e && i;
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".crave.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", k.CRAVE, !1);
    Object.freeze(lt);
    const ft = lt;
    const pt = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("mubi."),
            i = t.pathname.includes("player");
          return e && i;
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("mubi.");
      }
      getVideoId(t) {
        return t.pathname.substring(1);
      }
    })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", k.MUBI, !1);
    Object.freeze(pt);
    const vt = pt;
    const gt = new (class extends I {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("play.stan.com.au"),
            i = t.pathname.split("/");
          return e && 4 === i.length && "play" === i[3];
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".stan.com.au");
      }
      getVideoId(t) {
        return t.pathname.split("/")[2];
      }
    })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", k.STAN, !1);
    Object.freeze(gt);
    const mt = gt;
    class bt {
      constructor(t, e) {
        var i;
        (this.isBrowsing = !1), (this.id = e), this.videoId, (this.url = t);
        const n = [N, R, F, M, U, W, V, H, J, K, Y, nt, et, Q, at, rt, ht, dt, vt, mt, ft];
        for (const e of n) {
          if (e.isValidUrl(this.url)) {
            (this.streamingService = e), (this.serviceName = e.name), (this.videoId = e.getVideoId(t));
            break;
          }
          if (e.isBrowsing(this.url)) {
            (this.isBrowsing = !0), (this.streamingService = e), (this.serviceName = e.name);
            break;
          }
        }
        this.sessionIdFromUrl =
          null !==
            (i = (function (t, e, i) {
              const n = "?" + t.split("?")[i];
              if (void 0 === n) return;
              const s = e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                r = new RegExp("[?|&]" + s + "=([^&]*)(&|$)").exec(n);
              return null === r || r.length < 2 ? void 0 : decodeURIComponent(r[1]);
            })(this.url.href, "npSessionId", 1)) && void 0 !== i
            ? i
            : void 0;
      }
      urlWithSessionId(t) {
        return this.streamingService ? this.streamingService.urlWithSessionId(t) : void 0;
      }
    }
    var wt = console.log.bind(window.console);
    const yt = 4500;
    class _t {
      constructor() {
        this.i = new Map();
      }
      h() {
        let t = "";
        for (let e = 0; e < 16; e += 1) t += "0123456789abcdef"[Math.floor(16 * Math.random())];
        return t;
      }
      executeCallback(t, e) {
        const i = this.i.get(t);
        i && (i(e), this.i.delete(t));
      }
      addCallback(t, e) {
        let i = this.h();
        for (; this.i.has(i); ) i = this.h();
        return (
          this.i.set(i, t),
          e &&
            setTimeout(() => {
              this.executeCallback(i, { errorMessage: "Could not connect to the server. Please refresh the page and try again." });
            }, e),
          i
        );
      }
    }
    const It = Object.create(null);
    (It.open = "0"), (It.close = "1"), (It.ping = "2"), (It.pong = "3"), (It.message = "4"), (It.upgrade = "5"), (It.noop = "6");
    const kt = Object.create(null);
    Object.keys(It).forEach((t) => {
      kt[It[t]] = t;
    });
    const St = { type: "error", data: "parser error" },
      Tt = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob)),
      Ct = "function" == typeof ArrayBuffer,
      Et = (t, e) => {
        const i = new FileReader();
        return (
          (i.onload = function () {
            const t = i.result.split(",")[1];
            e("b" + t);
          }),
          i.readAsDataURL(t)
        );
      },
      Ot = ({ type: t, data: e }, i, n) => {
        return Tt && e instanceof Blob
          ? i
            ? n(e)
            : Et(e, n)
          : Ct &&
            (e instanceof ArrayBuffer ||
              ((s = e), "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer))
          ? i
            ? n(e)
            : Et(new Blob([e]), n)
          : n(It[t] + (e || ""));
        var s;
      },
      At = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Pt = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
    for (let t = 0; t < At.length; t++) Pt[At.charCodeAt(t)] = t;
    const Nt = "function" == typeof ArrayBuffer,
      Dt = (t, e) => {
        if (Nt) {
          const i = ((t) => {
            let e,
              i,
              n,
              s,
              r,
              o = 0.75 * t.length,
              a = t.length,
              c = 0;
            "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
            const h = new ArrayBuffer(o),
              u = new Uint8Array(h);
            for (e = 0; e < a; e += 4)
              (i = Pt[t.charCodeAt(e)]),
                (n = Pt[t.charCodeAt(e + 1)]),
                (s = Pt[t.charCodeAt(e + 2)]),
                (r = Pt[t.charCodeAt(e + 3)]),
                (u[c++] = (i << 2) | (n >> 4)),
                (u[c++] = ((15 & n) << 4) | (s >> 2)),
                (u[c++] = ((3 & s) << 6) | (63 & r));
            return h;
          })(t);
          return Rt(i, e);
        }
        return { base64: !0, data: t };
      },
      Rt = (t, e) => ("blob" === e && t instanceof ArrayBuffer ? new Blob([t]) : t),
      xt = (t, e) => {
        if ("string" != typeof t) return { type: "message", data: Rt(t, e) };
        const i = t.charAt(0);
        if ("b" === i) return { type: "message", data: Dt(t.substring(1), e) };
        return kt[i] ? (t.length > 1 ? { type: kt[i], data: t.substring(1) } : { type: kt[i] }) : St;
      },
      Ft = String.fromCharCode(30);
    function jt(t) {
      if (t)
        return (function (t) {
          for (var e in jt.prototype) t[e] = jt.prototype[e];
          return t;
        })(t);
    }
    (jt.prototype.on = jt.prototype.addEventListener =
      function (t, e) {
        return (this.u = this.u || {}), (this.u["$" + t] = this.u["$" + t] || []).push(e), this;
      }),
      (jt.prototype.once = function (t, e) {
        function i() {
          this.off(t, i), e.apply(this, arguments);
        }
        return (i.fn = e), this.on(t, i), this;
      }),
      (jt.prototype.off =
        jt.prototype.removeListener =
        jt.prototype.removeAllListeners =
        jt.prototype.removeEventListener =
          function (t, e) {
            if (((this.u = this.u || {}), 0 == arguments.length)) return (this.u = {}), this;
            var i,
              n = this.u["$" + t];
            if (!n) return this;
            if (1 == arguments.length) return delete this.u["$" + t], this;
            for (var s = 0; s < n.length; s++)
              if ((i = n[s]) === e || i.fn === e) {
                n.splice(s, 1);
                break;
              }
            return 0 === n.length && delete this.u["$" + t], this;
          }),
      (jt.prototype.emit = function (t) {
        this.u = this.u || {};
        for (var e = new Array(arguments.length - 1), i = this.u["$" + t], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        if (i) {
          n = 0;
          for (var s = (i = i.slice(0)).length; n < s; ++n) i[n].apply(this, e);
        }
        return this;
      }),
      (jt.prototype.emitReserved = jt.prototype.emit),
      (jt.prototype.listeners = function (t) {
        return (this.u = this.u || {}), this.u["$" + t] || [];
      }),
      (jt.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      });
    const Mt = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
    function Lt(t, ...e) {
      return e.reduce((e, i) => (t.hasOwnProperty(i) && (e[i] = t[i]), e), {});
    }
    const Ut = setTimeout,
      Bt = clearTimeout;
    function Vt(t, e) {
      e.useNativeTimers
        ? ((t.setTimeoutFn = Ut.bind(Mt)), (t.clearTimeoutFn = Bt.bind(Mt)))
        : ((t.setTimeoutFn = setTimeout.bind(Mt)), (t.clearTimeoutFn = clearTimeout.bind(Mt)));
    }
    class $t extends Error {
      constructor(t, e, i) {
        super(t), (this.description = e), (this.context = i), (this.type = "TransportError");
      }
    }
    class Wt extends jt {
      constructor(t) {
        super(),
          (this.writable = !1),
          Vt(this, t),
          (this.opts = t),
          (this.query = t.query),
          (this.readyState = ""),
          (this.socket = t.socket);
      }
      onError(t, e, i) {
        return super.emitReserved("error", new $t(t, e, i)), this;
      }
      open() {
        return ("closed" !== this.readyState && "" !== this.readyState) || ((this.readyState = "opening"), this.doOpen()), this;
      }
      close() {
        return ("opening" !== this.readyState && "open" !== this.readyState) || (this.doClose(), this.onClose()), this;
      }
      send(t) {
        "open" === this.readyState && this.write(t);
      }
      onOpen() {
        (this.readyState = "open"), (this.writable = !0), super.emitReserved("open");
      }
      onData(t) {
        const e = xt(t, this.socket.binaryType);
        this.onPacket(e);
      }
      onPacket(t) {
        super.emitReserved("packet", t);
      }
      onClose(t) {
        (this.readyState = "closed"), super.emitReserved("close", t);
      }
    }
    const Gt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
      Ht = {};
    let zt,
      Jt = 0,
      qt = 0;
    function Kt(t) {
      let e = "";
      do {
        (e = Gt[t % 64] + e), (t = Math.floor(t / 64));
      } while (t > 0);
      return e;
    }
    function Xt() {
      const t = Kt(+new Date());
      return t !== zt ? ((Jt = 0), (zt = t)) : t + "." + Kt(Jt++);
    }
    for (; qt < 64; qt++) Ht[Gt[qt]] = qt;
    function Yt(t) {
      let e = "";
      for (let i in t) t.hasOwnProperty(i) && (e.length && (e += "&"), (e += encodeURIComponent(i) + "=" + encodeURIComponent(t[i])));
      return e;
    }
    let Zt = !1;
    try {
      Zt = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (t) {}
    const Qt = Zt;
    function te(t) {
      const e = t.xdomain;
      try {
        if ("undefined" != typeof XMLHttpRequest && (!e || Qt)) return new XMLHttpRequest();
      } catch (t) {}
      if (!e)
        try {
          return new Mt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function ee() {}
    const ie = null != new te({ xdomain: !1 }).responseType;
    class ne extends jt {
      constructor(t, e) {
        super(),
          Vt(this, e),
          (this.opts = e),
          (this.method = e.method || "GET"),
          (this.uri = t),
          (this.async = !1 !== e.async),
          (this.data = void 0 !== e.data ? e.data : null),
          this.create();
      }
      create() {
        const t = Lt(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
        const e = (this.xhr = new te(t));
        try {
          e.open(this.method, this.uri, this.async);
          try {
            if (this.opts.extraHeaders) {
              e.setDisableHeaderCheck && e.setDisableHeaderCheck(!0);
              for (let t in this.opts.extraHeaders)
                this.opts.extraHeaders.hasOwnProperty(t) && e.setRequestHeader(t, this.opts.extraHeaders[t]);
            }
          } catch (t) {}
          if ("POST" === this.method)
            try {
              e.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
            } catch (t) {}
          try {
            e.setRequestHeader("Accept", "*/*");
          } catch (t) {}
          "withCredentials" in e && (e.withCredentials = this.opts.withCredentials),
            this.opts.requestTimeout && (e.timeout = this.opts.requestTimeout),
            (e.onreadystatechange = () => {
              4 === e.readyState &&
                (200 === e.status || 1223 === e.status
                  ? this.onLoad()
                  : this.setTimeoutFn(() => {
                      this.onError("number" == typeof e.status ? e.status : 0);
                    }, 0));
            }),
            e.send(this.data);
        } catch (t) {
          return void this.setTimeoutFn(() => {
            this.onError(t);
          }, 0);
        }
        "undefined" != typeof document && ((this.index = ne.requestsCount++), (ne.requests[this.index] = this));
      }
      onError(t) {
        this.emitReserved("error", t, this.xhr), this.cleanup(!0);
      }
      cleanup(t) {
        if (void 0 !== this.xhr && null !== this.xhr) {
          if (((this.xhr.onreadystatechange = ee), t))
            try {
              this.xhr.abort();
            } catch (t) {}
          "undefined" != typeof document && delete ne.requests[this.index], (this.xhr = null);
        }
      }
      onLoad() {
        const t = this.xhr.responseText;
        null !== t && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup());
      }
      abort() {
        this.cleanup();
      }
    }
    if (((ne.requestsCount = 0), (ne.requests = {}), "undefined" != typeof document))
      if ("function" == typeof attachEvent) attachEvent("onunload", se);
      else if ("function" == typeof addEventListener) {
        addEventListener("onpagehide" in Mt ? "pagehide" : "unload", se, !1);
      }
    function se() {
      for (let t in ne.requests) ne.requests.hasOwnProperty(t) && ne.requests[t].abort();
    }
    const re = "function" == typeof Promise && "function" == typeof Promise.resolve ? (t) => Promise.resolve().then(t) : (t, e) => e(t, 0),
      oe = Mt.WebSocket || Mt.MozWebSocket,
      ae = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
    const ce = {
        websocket: class extends Wt {
          constructor(t) {
            super(t), (this.supportsBinary = !t.forceBase64);
          }
          get name() {
            return "websocket";
          }
          doOpen() {
            if (!this.check()) return;
            const t = this.uri(),
              e = this.opts.protocols,
              i = ae
                ? {}
                : Lt(
                    this.opts,
                    "agent",
                    "perMessageDeflate",
                    "pfx",
                    "key",
                    "passphrase",
                    "cert",
                    "ca",
                    "ciphers",
                    "rejectUnauthorized",
                    "localAddress",
                    "protocolVersion",
                    "origin",
                    "maxPayload",
                    "family",
                    "checkServerIdentity"
                  );
            this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
            try {
              this.ws = ae ? new oe(t, e, i) : e ? new oe(t, e) : new oe(t);
            } catch (t) {
              return this.emitReserved("error", t);
            }
            (this.ws.binaryType = this.socket.binaryType || "arraybuffer"), this.addEventListeners();
          }
          addEventListeners() {
            (this.ws.onopen = () => {
              this.opts.autoUnref && this.ws.l.unref(), this.onOpen();
            }),
              (this.ws.onclose = (t) => this.onClose({ description: "websocket connection closed", context: t })),
              (this.ws.onmessage = (t) => this.onData(t.data)),
              (this.ws.onerror = (t) => this.onError("websocket error", t));
          }
          write(t) {
            this.writable = !1;
            for (let e = 0; e < t.length; e++) {
              const i = t[e],
                n = e === t.length - 1;
              Ot(i, this.supportsBinary, (t) => {
                try {
                  this.ws.send(t);
                } catch (t) {}
                n &&
                  re(() => {
                    (this.writable = !0), this.emitReserved("drain");
                  }, this.setTimeoutFn);
              });
            }
          }
          doClose() {
            void 0 !== this.ws && (this.ws.close(), (this.ws = null));
          }
          uri() {
            let t = this.query || {};
            const e = this.opts.secure ? "wss" : "ws";
            let i = "";
            this.opts.port &&
              (("wss" === e && 443 !== Number(this.opts.port)) || ("ws" === e && 80 !== Number(this.opts.port))) &&
              (i = ":" + this.opts.port),
              this.opts.timestampRequests && (t[this.opts.timestampParam] = Xt()),
              this.supportsBinary || (t.b64 = 1);
            const n = Yt(t);
            return (
              e +
              "://" +
              (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
              i +
              this.opts.path +
              (n.length ? "?" + n : "")
            );
          }
          check() {
            return !!oe;
          }
        },
        polling: class extends Wt {
          constructor(t) {
            if ((super(t), (this.polling = !1), "undefined" != typeof location)) {
              const e = "https:" === location.protocol;
              let i = location.port;
              i || (i = e ? "443" : "80"),
                (this.xd = ("undefined" != typeof location && t.hostname !== location.hostname) || i !== t.port),
                (this.xs = t.secure !== e);
            }
            const e = t && t.forceBase64;
            this.supportsBinary = ie && !e;
          }
          get name() {
            return "polling";
          }
          doOpen() {
            this.poll();
          }
          pause(t) {
            this.readyState = "pausing";
            const e = () => {
              (this.readyState = "paused"), t();
            };
            if (this.polling || !this.writable) {
              let t = 0;
              this.polling &&
                (t++,
                this.once("pollComplete", function () {
                  --t || e();
                })),
                this.writable ||
                  (t++,
                  this.once("drain", function () {
                    --t || e();
                  }));
            } else e();
          }
          poll() {
            (this.polling = !0), this.doPoll(), this.emitReserved("poll");
          }
          onData(t) {
            ((t, e) => {
              const i = t.split(Ft),
                n = [];
              for (let t = 0; t < i.length; t++) {
                const s = xt(i[t], e);
                if ((n.push(s), "error" === s.type)) break;
              }
              return n;
            })(t, this.socket.binaryType).forEach((t) => {
              if (("opening" === this.readyState && "open" === t.type && this.onOpen(), "close" === t.type))
                return this.onClose({ description: "transport closed by the server" }), !1;
              this.onPacket(t);
            }),
              "closed" !== this.readyState &&
                ((this.polling = !1), this.emitReserved("pollComplete"), "open" === this.readyState && this.poll());
          }
          doClose() {
            const t = () => {
              this.write([{ type: "close" }]);
            };
            "open" === this.readyState ? t() : this.once("open", t);
          }
          write(t) {
            (this.writable = !1),
              ((t, e) => {
                const i = t.length,
                  n = new Array(i);
                let s = 0;
                t.forEach((t, r) => {
                  Ot(t, !1, (t) => {
                    (n[r] = t), ++s === i && e(n.join(Ft));
                  });
                });
              })(t, (t) => {
                this.doWrite(t, () => {
                  (this.writable = !0), this.emitReserved("drain");
                });
              });
          }
          uri() {
            let t = this.query || {};
            const e = this.opts.secure ? "https" : "http";
            let i = "";
            !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = Xt()),
              this.supportsBinary || t.sid || (t.b64 = 1),
              this.opts.port &&
                (("https" === e && 443 !== Number(this.opts.port)) || ("http" === e && 80 !== Number(this.opts.port))) &&
                (i = ":" + this.opts.port);
            const n = Yt(t);
            return (
              e +
              "://" +
              (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
              i +
              this.opts.path +
              (n.length ? "?" + n : "")
            );
          }
          request(t = {}) {
            return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new ne(this.uri(), t);
          }
          doWrite(t, e) {
            const i = this.request({ method: "POST", data: t });
            i.on("success", e),
              i.on("error", (t, e) => {
                this.onError("xhr post error", t, e);
              });
          }
          doPoll() {
            const t = this.request();
            t.on("data", this.onData.bind(this)),
              t.on("error", (t, e) => {
                this.onError("xhr poll error", t, e);
              }),
              (this.pollXhr = t);
          }
        }
      },
      he =
        /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      ue = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor"
      ];
    function de(t) {
      const e = t,
        i = t.indexOf("["),
        n = t.indexOf("]");
      -1 != i && -1 != n && (t = t.substring(0, i) + t.substring(i, n).replace(/:/g, ";") + t.substring(n, t.length));
      let s = he.exec(t || ""),
        r = {},
        o = 14;
      for (; o--; ) r[ue[o]] = s[o] || "";
      return (
        -1 != i &&
          -1 != n &&
          ((r.source = e),
          (r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":")),
          (r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":")),
          (r.ipv6uri = !0)),
        (r.pathNames = (function (t, e) {
          const i = /\/{2,9}/g,
            n = e.replace(i, "/").split("/");
          ("/" != e.substr(0, 1) && 0 !== e.length) || n.splice(0, 1);
          "/" == e.substr(e.length - 1, 1) && n.splice(n.length - 1, 1);
          return n;
        })(0, r.path)),
        (r.queryKey = (function (t, e) {
          const i = {};
          return (
            e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (t, e, n) {
              e && (i[e] = n);
            }),
            i
          );
        })(0, r.query)),
        r
      );
    }
    class le extends jt {
      constructor(t, e = {}) {
        super(),
          t && "object" == typeof t && ((e = t), (t = null)),
          t
            ? ((t = de(t)),
              (e.hostname = t.host),
              (e.secure = "https" === t.protocol || "wss" === t.protocol),
              (e.port = t.port),
              t.query && (e.query = t.query))
            : e.host && (e.hostname = de(e.host).host),
          Vt(this, e),
          (this.secure = null != e.secure ? e.secure : "undefined" != typeof location && "https:" === location.protocol),
          e.hostname && !e.port && (e.port = this.secure ? "443" : "80"),
          (this.hostname = e.hostname || ("undefined" != typeof location ? location.hostname : "localhost")),
          (this.port = e.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80")),
          (this.transports = e.transports || ["polling", "websocket"]),
          (this.readyState = ""),
          (this.writeBuffer = []),
          (this.prevBufferLen = 0),
          (this.opts = Object.assign(
            {
              path: "/engine.io",
              agent: !1,
              withCredentials: !1,
              upgrade: !0,
              timestampParam: "t",
              rememberUpgrade: !1,
              rejectUnauthorized: !0,
              perMessageDeflate: { threshold: 1024 },
              transportOptions: {},
              closeOnBeforeunload: !0
            },
            e
          )),
          (this.opts.path = this.opts.path.replace(/\/$/, "") + "/"),
          "string" == typeof this.opts.query &&
            (this.opts.query = (function (t) {
              let e = {},
                i = t.split("&");
              for (let t = 0, n = i.length; t < n; t++) {
                let n = i[t].split("=");
                e[decodeURIComponent(n[0])] = decodeURIComponent(n[1]);
              }
              return e;
            })(this.opts.query)),
          (this.id = null),
          (this.upgrades = null),
          (this.pingInterval = null),
          (this.pingTimeout = null),
          (this.pingTimeoutTimer = null),
          "function" == typeof addEventListener &&
            (this.opts.closeOnBeforeunload &&
              addEventListener(
                "beforeunload",
                () => {
                  this.transport && (this.transport.removeAllListeners(), this.transport.close());
                },
                !1
              ),
            "localhost" !== this.hostname &&
              ((this.offlineEventListener = () => {
                this.onClose("transport close", { description: "network connection lost" });
              }),
              addEventListener("offline", this.offlineEventListener, !1))),
          this.open();
      }
      createTransport(t) {
        const e = Object.assign({}, this.opts.query);
        (e.EIO = 4), (e.transport = t), this.id && (e.sid = this.id);
        const i = Object.assign({}, this.opts.transportOptions[t], this.opts, {
          query: e,
          socket: this,
          hostname: this.hostname,
          secure: this.secure,
          port: this.port
        });
        return new ce[t](i);
      }
      open() {
        let t;
        if (this.opts.rememberUpgrade && le.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
        else {
          if (0 === this.transports.length)
            return void this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
          t = this.transports[0];
        }
        this.readyState = "opening";
        try {
          t = this.createTransport(t);
        } catch (t) {
          return this.transports.shift(), void this.open();
        }
        t.open(), this.setTransport(t);
      }
      setTransport(t) {
        this.transport && this.transport.removeAllListeners(),
          (this.transport = t),
          t
            .on("drain", this.onDrain.bind(this))
            .on("packet", this.onPacket.bind(this))
            .on("error", this.onError.bind(this))
            .on("close", (t) => this.onClose("transport close", t));
      }
      probe(t) {
        let e = this.createTransport(t),
          i = !1;
        le.priorWebsocketSuccess = !1;
        const n = () => {
          i ||
            (e.send([{ type: "ping", data: "probe" }]),
            e.once("packet", (t) => {
              if (!i)
                if ("pong" === t.type && "probe" === t.data) {
                  if (((this.upgrading = !0), this.emitReserved("upgrading", e), !e)) return;
                  (le.priorWebsocketSuccess = "websocket" === e.name),
                    this.transport.pause(() => {
                      i ||
                        ("closed" !== this.readyState &&
                          (h(),
                          this.setTransport(e),
                          e.send([{ type: "upgrade" }]),
                          this.emitReserved("upgrade", e),
                          (e = null),
                          (this.upgrading = !1),
                          this.flush()));
                    });
                } else {
                  const t = new Error("probe error");
                  (t.transport = e.name), this.emitReserved("upgradeError", t);
                }
            }));
        };
        function s() {
          i || ((i = !0), h(), e.close(), (e = null));
        }
        const r = (t) => {
          const i = new Error("probe error: " + t);
          (i.transport = e.name), s(), this.emitReserved("upgradeError", i);
        };
        function o() {
          r("transport closed");
        }
        function a() {
          r("socket closed");
        }
        function c(t) {
          e && t.name !== e.name && s();
        }
        const h = () => {
          e.removeListener("open", n),
            e.removeListener("error", r),
            e.removeListener("close", o),
            this.off("close", a),
            this.off("upgrading", c);
        };
        e.once("open", n), e.once("error", r), e.once("close", o), this.once("close", a), this.once("upgrading", c), e.open();
      }
      onOpen() {
        if (
          ((this.readyState = "open"),
          (le.priorWebsocketSuccess = "websocket" === this.transport.name),
          this.emitReserved("open"),
          this.flush(),
          "open" === this.readyState && this.opts.upgrade && this.transport.pause)
        ) {
          let t = 0;
          const e = this.upgrades.length;
          for (; t < e; t++) this.probe(this.upgrades[t]);
        }
      }
      onPacket(t) {
        if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState)
          switch ((this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type)) {
            case "open":
              this.onHandshake(JSON.parse(t.data));
              break;
            case "ping":
              this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
              break;
            case "error":
              const e = new Error("server error");
              (e.code = t.data), this.onError(e);
              break;
            case "message":
              this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          }
      }
      onHandshake(t) {
        this.emitReserved("handshake", t),
          (this.id = t.sid),
          (this.transport.query.sid = t.sid),
          (this.upgrades = this.filterUpgrades(t.upgrades)),
          (this.pingInterval = t.pingInterval),
          (this.pingTimeout = t.pingTimeout),
          (this.maxPayload = t.maxPayload),
          this.onOpen(),
          "closed" !== this.readyState && this.resetPingTimeout();
      }
      resetPingTimeout() {
        this.clearTimeoutFn(this.pingTimeoutTimer),
          (this.pingTimeoutTimer = this.setTimeoutFn(() => {
            this.onClose("ping timeout");
          }, this.pingInterval + this.pingTimeout)),
          this.opts.autoUnref && this.pingTimeoutTimer.unref();
      }
      onDrain() {
        this.writeBuffer.splice(0, this.prevBufferLen),
          (this.prevBufferLen = 0),
          0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
      }
      flush() {
        if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
          const t = this.getWritablePackets();
          this.transport.send(t), (this.prevBufferLen = t.length), this.emitReserved("flush");
        }
      }
      getWritablePackets() {
        if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
        let t = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
          const n = this.writeBuffer[i].data;
          if (
            (n &&
              (t +=
                "string" == typeof (e = n)
                  ? (function (t) {
                      let e = 0,
                        i = 0;
                      for (let n = 0, s = t.length; n < s; n++)
                        (e = t.charCodeAt(n)),
                          e < 128 ? (i += 1) : e < 2048 ? (i += 2) : e < 55296 || e >= 57344 ? (i += 3) : (n++, (i += 4));
                      return i;
                    })(e)
                  : Math.ceil(1.33 * (e.byteLength || e.size))),
            i > 0 && t > this.maxPayload)
          )
            return this.writeBuffer.slice(0, i);
          t += 2;
        }
        var e;
        return this.writeBuffer;
      }
      write(t, e, i) {
        return this.sendPacket("message", t, e, i), this;
      }
      send(t, e, i) {
        return this.sendPacket("message", t, e, i), this;
      }
      sendPacket(t, e, i, n) {
        if (
          ("function" == typeof e && ((n = e), (e = void 0)),
          "function" == typeof i && ((n = i), (i = null)),
          "closing" === this.readyState || "closed" === this.readyState)
        )
          return;
        (i = i || {}).compress = !1 !== i.compress;
        const s = { type: t, data: e, options: i };
        this.emitReserved("packetCreate", s), this.writeBuffer.push(s), n && this.once("flush", n), this.flush();
      }
      close() {
        const t = () => {
            this.onClose("forced close"), this.transport.close();
          },
          e = () => {
            this.off("upgrade", e), this.off("upgradeError", e), t();
          },
          i = () => {
            this.once("upgrade", e), this.once("upgradeError", e);
          };
        return (
          ("opening" !== this.readyState && "open" !== this.readyState) ||
            ((this.readyState = "closing"),
            this.writeBuffer.length
              ? this.once("drain", () => {
                  this.upgrading ? i() : t();
                })
              : this.upgrading
              ? i()
              : t()),
          this
        );
      }
      onError(t) {
        (le.priorWebsocketSuccess = !1), this.emitReserved("error", t), this.onClose("transport error", t);
      }
      onClose(t, e) {
        ("opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState) ||
          (this.clearTimeoutFn(this.pingTimeoutTimer),
          this.transport.removeAllListeners("close"),
          this.transport.close(),
          this.transport.removeAllListeners(),
          "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1),
          (this.readyState = "closed"),
          (this.id = null),
          this.emitReserved("close", t, e),
          (this.writeBuffer = []),
          (this.prevBufferLen = 0));
      }
      filterUpgrades(t) {
        const e = [];
        let i = 0;
        const n = t.length;
        for (; i < n; i++) ~this.transports.indexOf(t[i]) && e.push(t[i]);
        return e;
      }
    }
    le.protocol = 4;
    le.protocol;
    const fe = "function" == typeof ArrayBuffer,
      pe = Object.prototype.toString,
      ve = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === pe.call(Blob)),
      ge = "function" == typeof File || ("undefined" != typeof File && "[object FileConstructor]" === pe.call(File));
    function me(t) {
      return (
        (fe &&
          (t instanceof ArrayBuffer ||
            ((t) => ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer))(t))) ||
        (ve && t instanceof Blob) ||
        (ge && t instanceof File)
      );
    }
    function be(t, e) {
      if (!t || "object" != typeof t) return !1;
      if (Array.isArray(t)) {
        for (let e = 0, i = t.length; e < i; e++) if (be(t[e])) return !0;
        return !1;
      }
      if (me(t)) return !0;
      if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return be(t.toJSON(), !0);
      for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e) && be(t[e])) return !0;
      return !1;
    }
    function we(t) {
      const e = [],
        i = t.data,
        n = t;
      return (n.data = ye(i, e)), (n.attachments = e.length), { packet: n, buffers: e };
    }
    function ye(t, e) {
      if (!t) return t;
      if (me(t)) {
        const i = { p: !0, num: e.length };
        return e.push(t), i;
      }
      if (Array.isArray(t)) {
        const i = new Array(t.length);
        for (let n = 0; n < t.length; n++) i[n] = ye(t[n], e);
        return i;
      }
      if ("object" == typeof t && !(t instanceof Date)) {
        const i = {};
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = ye(t[n], e));
        return i;
      }
      return t;
    }
    function _e(t, e) {
      return (t.data = Ie(t.data, e)), (t.attachments = void 0), t;
    }
    function Ie(t, e) {
      if (!t) return t;
      if (t && !0 === t.p) {
        if ("number" == typeof t.num && t.num >= 0 && t.num < e.length) return e[t.num];
        throw new Error("illegal attachments");
      }
      if (Array.isArray(t)) for (let i = 0; i < t.length; i++) t[i] = Ie(t[i], e);
      else if ("object" == typeof t) for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (t[i] = Ie(t[i], e));
      return t;
    }
    const ke = 5;
    var Se;
    !(function (t) {
      (t[(t.CONNECT = 0)] = "CONNECT"),
        (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
        (t[(t.EVENT = 2)] = "EVENT"),
        (t[(t.ACK = 3)] = "ACK"),
        (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
    })(Se || (Se = {}));
    class Te {
      constructor(t) {
        this.replacer = t;
      }
      encode(t) {
        return (t.type !== Se.EVENT && t.type !== Se.ACK) || !be(t)
          ? [this.encodeAsString(t)]
          : ((t.type = t.type === Se.EVENT ? Se.BINARY_EVENT : Se.BINARY_ACK), this.encodeAsBinary(t));
      }
      encodeAsString(t) {
        let e = "" + t.type;
        return (
          (t.type !== Se.BINARY_EVENT && t.type !== Se.BINARY_ACK) || (e += t.attachments + "-"),
          t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
          null != t.id && (e += t.id),
          null != t.data && (e += JSON.stringify(t.data, this.replacer)),
          e
        );
      }
      encodeAsBinary(t) {
        const e = we(t),
          i = this.encodeAsString(e.packet),
          n = e.buffers;
        return n.unshift(i), n;
      }
    }
    class Ce extends jt {
      constructor(t) {
        super(), (this.reviver = t);
      }
      add(t) {
        let e;
        if ("string" == typeof t) {
          if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
          (e = this.decodeString(t)),
            e.type === Se.BINARY_EVENT || e.type === Se.BINARY_ACK
              ? ((this.reconstructor = new Ee(e)), 0 === e.attachments && super.emitReserved("decoded", e))
              : super.emitReserved("decoded", e);
        } else {
          if (!me(t) && !t.base64) throw new Error("Unknown type: " + t);
          if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
          (e = this.reconstructor.takeBinaryData(t)), e && ((this.reconstructor = null), super.emitReserved("decoded", e));
        }
      }
      decodeString(t) {
        let e = 0;
        const i = { type: Number(t.charAt(0)) };
        if (void 0 === Se[i.type]) throw new Error("unknown packet type " + i.type);
        if (i.type === Se.BINARY_EVENT || i.type === Se.BINARY_ACK) {
          const n = e + 1;
          for (; "-" !== t.charAt(++e) && e != t.length; );
          const s = t.substring(n, e);
          if (s != Number(s) || "-" !== t.charAt(e)) throw new Error("Illegal attachments");
          i.attachments = Number(s);
        }
        if ("/" === t.charAt(e + 1)) {
          const n = e + 1;
          for (; ++e; ) {
            if ("," === t.charAt(e)) break;
            if (e === t.length) break;
          }
          i.nsp = t.substring(n, e);
        } else i.nsp = "/";
        const n = t.charAt(e + 1);
        if ("" !== n && Number(n) == n) {
          const n = e + 1;
          for (; ++e; ) {
            const i = t.charAt(e);
            if (null == i || Number(i) != i) {
              --e;
              break;
            }
            if (e === t.length) break;
          }
          i.id = Number(t.substring(n, e + 1));
        }
        if (t.charAt(++e)) {
          const n = this.tryParse(t.substr(e));
          if (!Ce.isPayloadValid(i.type, n)) throw new Error("invalid payload");
          i.data = n;
        }
        return i;
      }
      tryParse(t) {
        try {
          return JSON.parse(t, this.reviver);
        } catch (t) {
          return !1;
        }
      }
      static isPayloadValid(t, e) {
        switch (t) {
          case Se.CONNECT:
            return "object" == typeof e;
          case Se.DISCONNECT:
            return void 0 === e;
          case Se.CONNECT_ERROR:
            return "string" == typeof e || "object" == typeof e;
          case Se.EVENT:
          case Se.BINARY_EVENT:
            return Array.isArray(e) && e.length > 0;
          case Se.ACK:
          case Se.BINARY_ACK:
            return Array.isArray(e);
        }
      }
      destroy() {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }
    }
    class Ee {
      constructor(t) {
        (this.packet = t), (this.buffers = []), (this.reconPack = t);
      }
      takeBinaryData(t) {
        if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
          const t = _e(this.reconPack, this.buffers);
          return this.finishedReconstruction(), t;
        }
        return null;
      }
      finishedReconstruction() {
        (this.reconPack = null), (this.buffers = []);
      }
    }
    function Oe(t, e, i) {
      return (
        t.on(e, i),
        function () {
          t.off(e, i);
        }
      );
    }
    const Ae = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
    class Pe extends jt {
      constructor(t, e, i) {
        super(),
          (this.connected = !1),
          (this.receiveBuffer = []),
          (this.sendBuffer = []),
          (this.ids = 0),
          (this.acks = {}),
          (this.flags = {}),
          (this.io = t),
          (this.nsp = e),
          i && i.auth && (this.auth = i.auth),
          this.io.m && this.open();
      }
      get disconnected() {
        return !this.connected;
      }
      subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [
          Oe(t, "open", this.onopen.bind(this)),
          Oe(t, "packet", this.onpacket.bind(this)),
          Oe(t, "error", this.onerror.bind(this)),
          Oe(t, "close", this.onclose.bind(this))
        ];
      }
      get active() {
        return !!this.subs;
      }
      connect() {
        return this.connected || (this.subEvents(), this.io._ || this.io.open(), "open" === this.io.I && this.onopen()), this;
      }
      open() {
        return this.connect();
      }
      send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this;
      }
      emit(t, ...e) {
        if (Ae.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
        e.unshift(t);
        const i = { type: Se.EVENT, data: e, options: {} };
        if (((i.options.compress = !1 !== this.flags.compress), "function" == typeof e[e.length - 1])) {
          const t = this.ids++,
            n = e.pop();
          this.k(t, n), (i.id = t);
        }
        const n = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        return (
          (this.flags.volatile && (!n || !this.connected)) ||
            (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)),
          (this.flags = {}),
          this
        );
      }
      k(t, e) {
        const i = this.flags.timeout;
        if (void 0 === i) return void (this.acks[t] = e);
        const n = this.io.setTimeoutFn(() => {
          delete this.acks[t];
          for (let e = 0; e < this.sendBuffer.length; e++) this.sendBuffer[e].id === t && this.sendBuffer.splice(e, 1);
          e.call(this, new Error("operation has timed out"));
        }, i);
        this.acks[t] = (...t) => {
          this.io.clearTimeoutFn(n), e.apply(this, [null, ...t]);
        };
      }
      packet(t) {
        (t.nsp = this.nsp), this.io.S(t);
      }
      onopen() {
        "function" == typeof this.auth
          ? this.auth((t) => {
              this.packet({ type: Se.CONNECT, data: t });
            })
          : this.packet({ type: Se.CONNECT, data: this.auth });
      }
      onerror(t) {
        this.connected || this.emitReserved("connect_error", t);
      }
      onclose(t, e) {
        (this.connected = !1), delete this.id, this.emitReserved("disconnect", t, e);
      }
      onpacket(t) {
        if (t.nsp === this.nsp)
          switch (t.type) {
            case Se.CONNECT:
              if (t.data && t.data.sid) {
                const e = t.data.sid;
                this.onconnect(e);
              } else
                this.emitReserved(
                  "connect_error",
                  new Error(
                    "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                  )
                );
              break;
            case Se.EVENT:
            case Se.BINARY_EVENT:
              this.onevent(t);
              break;
            case Se.ACK:
            case Se.BINARY_ACK:
              this.onack(t);
              break;
            case Se.DISCONNECT:
              this.ondisconnect();
              break;
            case Se.CONNECT_ERROR:
              this.destroy();
              const e = new Error(t.data.message);
              (e.data = t.data.data), this.emitReserved("connect_error", e);
          }
      }
      onevent(t) {
        const e = t.data || [];
        null != t.id && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e));
      }
      emitEvent(t) {
        if (this.T && this.T.length) {
          const e = this.T.slice();
          for (const i of e) i.apply(this, t);
        }
        super.emit.apply(this, t);
      }
      ack(t) {
        const e = this;
        let i = !1;
        return function (...n) {
          i || ((i = !0), e.packet({ type: Se.ACK, id: t, data: n }));
        };
      }
      onack(t) {
        const e = this.acks[t.id];
        "function" == typeof e && (e.apply(this, t.data), delete this.acks[t.id]);
      }
      onconnect(t) {
        (this.id = t), (this.connected = !0), this.emitBuffered(), this.emitReserved("connect");
      }
      emitBuffered() {
        this.receiveBuffer.forEach((t) => this.emitEvent(t)),
          (this.receiveBuffer = []),
          this.sendBuffer.forEach((t) => {
            this.notifyOutgoingListeners(t), this.packet(t);
          }),
          (this.sendBuffer = []);
      }
      ondisconnect() {
        this.destroy(), this.onclose("io server disconnect");
      }
      destroy() {
        this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)), this.io.C(this);
      }
      disconnect() {
        return (
          this.connected && this.packet({ type: Se.DISCONNECT }),
          this.destroy(),
          this.connected && this.onclose("io client disconnect"),
          this
        );
      }
      close() {
        return this.disconnect();
      }
      compress(t) {
        return (this.flags.compress = t), this;
      }
      get volatile() {
        return (this.flags.volatile = !0), this;
      }
      timeout(t) {
        return (this.flags.timeout = t), this;
      }
      onAny(t) {
        return (this.T = this.T || []), this.T.push(t), this;
      }
      prependAny(t) {
        return (this.T = this.T || []), this.T.unshift(t), this;
      }
      offAny(t) {
        if (!this.T) return this;
        if (t) {
          const e = this.T;
          for (let i = 0; i < e.length; i++) if (t === e[i]) return e.splice(i, 1), this;
        } else this.T = [];
        return this;
      }
      listenersAny() {
        return this.T || [];
      }
      onAnyOutgoing(t) {
        return (this.O = this.O || []), this.O.push(t), this;
      }
      prependAnyOutgoing(t) {
        return (this.O = this.O || []), this.O.unshift(t), this;
      }
      offAnyOutgoing(t) {
        if (!this.O) return this;
        if (t) {
          const e = this.O;
          for (let i = 0; i < e.length; i++) if (t === e[i]) return e.splice(i, 1), this;
        } else this.O = [];
        return this;
      }
      listenersAnyOutgoing() {
        return this.O || [];
      }
      notifyOutgoingListeners(t) {
        if (this.O && this.O.length) {
          const e = this.O.slice();
          for (const i of e) i.apply(this, t.data);
        }
      }
    }
    function Ne(t) {
      (t = t || {}),
        (this.ms = t.min || 100),
        (this.max = t.max || 1e4),
        (this.factor = t.factor || 2),
        (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
        (this.attempts = 0);
    }
    (Ne.prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var e = Math.random(),
          i = Math.floor(e * this.jitter * t);
        t = 0 == (1 & Math.floor(10 * e)) ? t - i : t + i;
      }
      return 0 | Math.min(t, this.max);
    }),
      (Ne.prototype.reset = function () {
        this.attempts = 0;
      }),
      (Ne.prototype.setMin = function (t) {
        this.ms = t;
      }),
      (Ne.prototype.setMax = function (t) {
        this.max = t;
      }),
      (Ne.prototype.setJitter = function (t) {
        this.jitter = t;
      });
    class De extends jt {
      constructor(e, i) {
        var n;
        super(),
          (this.nsps = {}),
          (this.subs = []),
          e && "object" == typeof e && ((i = e), (e = void 0)),
          ((i = i || {}).path = i.path || "/socket.io"),
          (this.opts = i),
          Vt(this, i),
          this.reconnection(!1 !== i.reconnection),
          this.reconnectionAttempts(i.reconnectionAttempts || 1 / 0),
          this.reconnectionDelay(i.reconnectionDelay || 1e3),
          this.reconnectionDelayMax(i.reconnectionDelayMax || 5e3),
          this.randomizationFactor(null !== (n = i.randomizationFactor) && void 0 !== n ? n : 0.5),
          (this.backoff = new Ne({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() })),
          this.timeout(null == i.timeout ? 2e4 : i.timeout),
          (this.I = "closed"),
          (this.uri = e);
        const s = i.parser || t;
        (this.encoder = new s.Encoder()), (this.decoder = new s.Decoder()), (this.m = !1 !== i.autoConnect), this.m && this.open();
      }
      reconnection(t) {
        return arguments.length ? ((this.A = !!t), this) : this.A;
      }
      reconnectionAttempts(t) {
        return void 0 === t ? this.P : ((this.P = t), this);
      }
      reconnectionDelay(t) {
        var e;
        return void 0 === t ? this.N : ((this.N = t), null === (e = this.backoff) || void 0 === e || e.setMin(t), this);
      }
      randomizationFactor(t) {
        var e;
        return void 0 === t ? this.D : ((this.D = t), null === (e = this.backoff) || void 0 === e || e.setJitter(t), this);
      }
      reconnectionDelayMax(t) {
        var e;
        return void 0 === t ? this.R : ((this.R = t), null === (e = this.backoff) || void 0 === e || e.setMax(t), this);
      }
      timeout(t) {
        return arguments.length ? ((this.F = t), this) : this.F;
      }
      maybeReconnectOnOpen() {
        !this._ && this.A && 0 === this.backoff.attempts && this.reconnect();
      }
      open(t) {
        if (~this.I.indexOf("open")) return this;
        this.engine = new le(this.uri, this.opts);
        const e = this.engine,
          i = this;
        (this.I = "opening"), (this.skipReconnect = !1);
        const n = Oe(e, "open", function () {
            i.onopen(), t && t();
          }),
          s = Oe(e, "error", (e) => {
            i.cleanup(), (i.I = "closed"), this.emitReserved("error", e), t ? t(e) : i.maybeReconnectOnOpen();
          });
        if (!1 !== this.F) {
          const t = this.F;
          0 === t && n();
          const i = this.setTimeoutFn(() => {
            n(), e.close(), e.emit("error", new Error("timeout"));
          }, t);
          this.opts.autoUnref && i.unref(),
            this.subs.push(function () {
              clearTimeout(i);
            });
        }
        return this.subs.push(n), this.subs.push(s), this;
      }
      connect(t) {
        return this.open(t);
      }
      onopen() {
        this.cleanup(), (this.I = "open"), this.emitReserved("open");
        const t = this.engine;
        this.subs.push(
          Oe(t, "ping", this.onping.bind(this)),
          Oe(t, "data", this.ondata.bind(this)),
          Oe(t, "error", this.onerror.bind(this)),
          Oe(t, "close", this.onclose.bind(this)),
          Oe(this.decoder, "decoded", this.ondecoded.bind(this))
        );
      }
      onping() {
        this.emitReserved("ping");
      }
      ondata(t) {
        try {
          this.decoder.add(t);
        } catch (t) {
          this.onclose("parse error");
        }
      }
      ondecoded(t) {
        this.emitReserved("packet", t);
      }
      onerror(t) {
        this.emitReserved("error", t);
      }
      socket(t, e) {
        let i = this.nsps[t];
        return i || ((i = new Pe(this, t, e)), (this.nsps[t] = i)), i;
      }
      C(t) {
        const e = Object.keys(this.nsps);
        for (const t of e) {
          if (this.nsps[t].active) return;
        }
        this.M();
      }
      S(t) {
        const e = this.encoder.encode(t);
        for (let i = 0; i < e.length; i++) this.engine.write(e[i], t.options);
      }
      cleanup() {
        this.subs.forEach((t) => t()), (this.subs.length = 0), this.decoder.destroy();
      }
      M() {
        (this.skipReconnect = !0), (this._ = !1), this.onclose("forced close"), this.engine && this.engine.close();
      }
      disconnect() {
        return this.M();
      }
      onclose(t, e) {
        this.cleanup(),
          this.backoff.reset(),
          (this.I = "closed"),
          this.emitReserved("close", t, e),
          this.A && !this.skipReconnect && this.reconnect();
      }
      reconnect() {
        if (this._ || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this.P) this.backoff.reset(), this.emitReserved("reconnect_failed"), (this._ = !1);
        else {
          const e = this.backoff.duration();
          this._ = !0;
          const i = this.setTimeoutFn(() => {
            t.skipReconnect ||
              (this.emitReserved("reconnect_attempt", t.backoff.attempts),
              t.skipReconnect ||
                t.open((e) => {
                  e ? ((t._ = !1), t.reconnect(), this.emitReserved("reconnect_error", e)) : t.onreconnect();
                }));
          }, e);
          this.opts.autoUnref && i.unref(),
            this.subs.push(function () {
              clearTimeout(i);
            });
        }
      }
      onreconnect() {
        const t = this.backoff.attempts;
        (this._ = !1), this.backoff.reset(), this.emitReserved("reconnect", t);
      }
    }
    const Re = {};
    function xe(t, e) {
      "object" == typeof t && ((e = t), (t = void 0));
      const i = (function (t, e = "", i) {
          let n = t;
          (i = i || ("undefined" != typeof location && location)),
            null == t && (t = i.protocol + "//" + i.host),
            "string" == typeof t &&
              ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? i.protocol + t : i.host + t),
              /^(https?|wss?):\/\//.test(t) || (t = void 0 !== i ? i.protocol + "//" + t : "https://" + t),
              (n = de(t))),
            n.port || (/^(http|ws)$/.test(n.protocol) ? (n.port = "80") : /^(http|ws)s$/.test(n.protocol) && (n.port = "443")),
            (n.path = n.path || "/");
          const s = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
          return (
            (n.id = n.protocol + "://" + s + ":" + n.port + e),
            (n.href = n.protocol + "://" + s + (i && i.port === n.port ? "" : ":" + n.port)),
            n
          );
        })(t, (e = e || {}).path || "/socket.io"),
        n = i.source,
        s = i.id,
        r = i.path,
        o = Re[s] && r in Re[s].nsps;
      let a;
      return (
        e.forceNew || e["force new connection"] || !1 === e.multiplex || o
          ? (a = new De(n, e))
          : (Re[s] || (Re[s] = new De(n, e)), (a = Re[s])),
        i.query && !e.query && (e.query = i.queryKey),
        a.socket(i.path, e)
      );
    }
    var Fe;
    Object.assign(xe, { Manager: De, Socket: Pe, io: xe, connect: xe }),
      (function (t) {
        (t.CREATE_SESSION = "createSession"),
          (t.CREATE_TEMP_SESSION = "createTempSession"),
          (t.JOIN_SESSION = "joinSession"),
          (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE_MESSAGE = "nextEpisode"),
          (t.REBOOT_MESSAGE = "reboot"),
          (t.SEND_MESSAGE = "sendMessage"),
          (t.JUMP_TO_NEXT_EPISODE = "jumpToNextEpisode"),
          (t.BUFFERING_MESSAGE = "buffering"),
          (t.TYPING_MESSAGE = "typing"),
          (t.SET_BUFFERING_PRESENCE = "setBufferingPresence"),
          (t.SET_TYPING_PRESENCE = "setTypingPresence"),
          (t.BROADCAST_USER_SETTINGS = "broadcastUserSettings"),
          (t.UPDATE_SETTINGS_MESSAGE = "updateSettings"),
          (t.SET_ADS_PRESENCE = "setAdsPresence"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.LEAVE_SESSION = "leaveSession"),
          (t.SEND_REACTION = "sendReaction"),
          (t.SEND_GIF = "sendGIF"),
          (t.SIGN_IN = "signIn"),
          (t.USER_LIST = "userList"),
          (t.WEB_RTC = "webRTC");
      })(Fe || (Fe = {}));
    var je = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      });
    };
    class Me {
      constructor(t, e, i) {
        (this.U = !1),
          (this.B = 0),
          (this.V = !1),
          (this.$ = !0),
          (this.W = e),
          (this.G = t),
          (this.J = 0),
          (this.q = new _t()),
          (this.K = new WebSocket(this.G)),
          this.X(),
          (this.Y = setTimeout(this.tt.bind(this), 5e3)),
          (this.et = i);
      }
      getId() {
        return this.it;
      }
      getType() {
        return void 0 !== this.K ? "uws" : "socket.io";
      }
      getTransport() {
        var t;
        return void 0 !== this.K ? "websocket" : null === (t = this.nt) || void 0 === t ? void 0 : t.io.engine.transport.name;
      }
      getSocketStartTime() {
        return this.st;
      }
      rt() {
        return { id: this.getId(), type: this.getType(), transport: this.getTransport(), start_time_ms: this.getSocketStartTime() };
      }
      tt() {
        var t, e;
        null === (t = this.nt) || void 0 === t || t.disconnect(),
          null === (e = this.K) || void 0 === e || e.close(yt),
          console.log("Connect timed out, switching servers");
        const i = {
          name: "socket_error",
          action: { description: this.V ? "socket.io" : "uws failed to connect in time", reason: "connect timed out" },
          socket_session: this.rt()
        };
        Ca.logEventForTabId(i, this.et), this.ot();
      }
      get dropInToggled() {
        return this.U;
      }
      set dropInToggled(t) {
        this.U = t;
      }
      get sessionId() {
        return this.ct;
      }
      get tempSessionId() {
        return this.ht;
      }
      set tempSessionId(t) {
        (this.ht = t), this.W.loadTempSessionId(t);
      }
      loadSessionData(t, e) {
        (this.ct = t.sessionId), this.W.loadSessionData(t, e);
      }
      clearSessionData() {
        (this.ct = void 0), this.W.clearSessionData();
      }
      getCurrentSessionData() {
        return this.W.getSessionData();
      }
      X() {
        this.K &&
          ((this.K.onmessage = this.ut.bind(this)),
          (this.K.onclose = this.dt.bind(this)),
          (this.K.onerror = this.lt.bind(this)),
          (this.K.onopen = this.ft.bind(this)),
          (this.vt = setInterval(this.gt.bind(this), 45e3)));
      }
      bt() {
        this.nt &&
          (this.nt.on("connect", () => {
            this.ft();
          }),
          this.nt.on("connect_error", (t) => {
            console.log(`connect_error due to ${t.message}`), wt(t);
            const e = {
              name: "socket_error",
              action: { description: t.message, reason: "socket reported error." },
              socket_session: this.rt()
            };
            Ca.logEventForTabId(e, this.et);
          }),
          this.nt.on("disconnect", (t) => {
            this.wt(), wt("Socket io disconnect"), this.vt && clearInterval(this.vt), wt("Websocket lost connection: " + t);
            const e = { name: "socket_close", action: { description: "socket.io socket closed", reason: t }, socket_session: this.rt() };
            if ((Ca.logEventForTabId(e, this.et), "io client disconnect" !== t)) this.ot();
            else if (this.ct) {
              const t = { name: "party_disconnect", action: { reason: "party disconnected manually." }, socket_session: this.rt() };
              Ca.logEventForTabId(t, this.et);
            }
          }),
          this.nt.on("message", (t) => {
            var e;
            if ("ping" === t) null === (e = this.nt) || void 0 === e || e.emit("pong");
            else {
              const e = JSON.parse(t);
              this.yt(e);
            }
          }));
      }
      gt() {
        var t;
        1 == (null === (t = this.K) || void 0 === t ? void 0 : t.readyState) && this.K.send(JSON.stringify({ type: "ping" }));
      }
      ft() {
        (this.st = Date.now()), this.wt();
        const t = { name: "socket_open", socket_session: this.rt() };
        if ((Ca.logEventForTabId(t, this.et), this._t)) {
          clearTimeout(this._t), this.W.onReconnect();
          const t = {
            name: "party_reconnect",
            action: {
              description: "party reconnected using " + (this.V ? "socket.io" : "uws") + " after " + this.J + " attempts.",
              reason: "party reconnected."
            },
            socket_session: this.rt()
          };
          Ca.logEventForTabId(t, this.et);
        }
        this.It();
      }
      It() {
        this._t && clearTimeout(this._t), (this._t = void 0), (this.J = 0);
      }
      wt() {
        console.log("Clearing connect timeout"), this.Y && clearTimeout(this.Y);
      }
      dt(t) {
        this.wt();
        const e = { name: "socket_close", action: { description: "uws socket closed", reason: String(t.code) }, socket_session: this.rt() };
        if ((Ca.logEventForTabId(e, this.et), t.code !== yt)) {
          if ((wt("Websocket lost connection"), 1007 === t.code)) {
            const e = { sessionId: this.ct, eventType: "socket-close-" + t.code };
            Ca.logOldEventAsync(e);
          }
          this.ot();
        } else {
          if (this.ct) {
            const t = { name: "party_disconnect", action: { reason: "party disconnected manually." }, socket_session: this.rt() };
            Ca.logEventForTabId(t, this.et);
          }
          wt("Websocket connection closed manually");
        }
      }
      kt() {
        return 1e3 * Math.pow(2, this.J);
      }
      ot() {
        if (this.$)
          if ((this.St(), this.J++, this.J > 10)) this.W.onReconnectFailed();
          else {
            let t = this.kt();
            wt("Recreating socket with delay: " + t),
              void 0 === this.it && this.J <= 2 && (t = 500),
              (this._t = setTimeout(this.Tt.bind(this), t));
          }
      }
      Tt() {
        try {
          this.B >= 3 || this.J > 1 ? (this.V = !this.V) : (this.V = !1), this.V ? (this.K = void 0) : (this.nt = void 0);
          const t = {
            name: "socket_reconnect_attempt",
            action: {
              description: "attempting to reconnect using " + (this.V ? "socket.io" : "uws"),
              reason: "reconnecting after socket disconnect"
            },
            socket_session: this.rt()
          };
          Ca.logEventForTabId(t, this.et),
            this.V
              ? ((this.nt = xe("https://socketio.teleparty.com", { reconnection: !1, withCredentials: !0 })), this.bt())
              : ((this.K = new WebSocket(this.G)), this.X()),
            this.wt(),
            (this.Y = setTimeout(this.tt.bind(this), 5e3));
        } catch (t) {
          console.warn("Failed to recreate socket: " + (10 - this.J) + " attempts remaining");
        }
      }
      St() {
        this.B += 1;
      }
      lt(t) {
        wt("WebSocket error observed:", t);
        const e = {
          name: "socket_error",
          action: { description: "uws socket error", reason: "socket reported error." },
          socket_session: this.rt()
        };
        Ca.logEventForTabId(e, this.et);
      }
      ut(t) {
        try {
          const e = JSON.parse(t.data);
          this.yt(e);
        } catch (t) {
          wt("An error occured while parsing a message from the server");
        }
      }
      yt(t) {
        "userId" === t.type ? this.Ct(t.data.userId) : t.callbackId ? this.q.executeCallback(t.callbackId, t.data) : this.W.onMessage(t);
      }
      Ct(t) {
        wt("User id:  " + t), null == this.it && ((this.it = t), this.W.setUserId(t));
      }
      teardown() {
        var t, e;
        this.$ = !1;
        try {
          null === (t = this.K) || void 0 === t || t.close(yt), null === (e = this.nt) || void 0 === e || e.disconnect();
        } catch (t) {}
        (this.it = ""), (this.ct = ""), (this.ht = ""), this._t && clearTimeout(this._t), this.vt && clearInterval(this.vt);
      }
      sendMessage(t, e, i) {
        var n, s;
        let r = "null";
        i && (r = this.q.addCallback(i));
        const o = this.Et(t, e, r),
          a = JSON.stringify(o);
        this.V ? null === (n = this.nt) || void 0 === n || n.send(a) : null === (s = this.K) || void 0 === s || s.send(a);
      }
      Et(t, e, i) {
        return { type: t, data: e, callbackId: i };
      }
      signIn(t) {
        return je(this, void 0, void 0, function* () {
          return this.sendMessage(Fe.SIGN_IN, { token: t });
        });
      }
      getUserIdAsync() {
        var t;
        return je(this, void 0, void 0, function* () {
          this._t && (this.It(), this.Tt());
          try {
            return (
              yield (function (t, e, i = 250) {
                return function () {
                  const n = new Date().getTime(),
                    s = function () {
                      return t()
                        ? Promise.resolve()
                        : null !== e && new Date().getTime() - n > e
                        ? Promise.reject(new Error("delayUntil timed out: " + t))
                        : O(i)().then(s);
                    };
                  return s();
                };
              })(() => null != this.it, 2e4)(),
              null !== (t = this.it) && void 0 !== t ? t : ""
            );
          } catch (t) {
            const e = { name: "connection_error", action: { description: t, reason: "failed to get user id" }, socket_session: this.rt() };
            Ca.logEventForTabId(e, this.et);
            const i = { sessionId: this.ct, eventType: "connection-fail" };
            throw (Ca.logOldEventAsync(i), new Error("Could not connect to the server. Please refresh the page and try again."));
          }
        });
      }
    }
    const Le = new (class {
      addListener(t) {
        chrome.runtime.onMessage.addListener(t);
      }
      removeListener(t) {
        chrome.runtime.onMessage.removeListener(t);
      }
      sendMessageToTabAsync(t, e, i = 2e4) {
        return new Promise((n, s) => {
          const r = setTimeout(() => {
            s();
          }, i);
          try {
            chrome.tabs.sendMessage(e, t, (e) => {
              chrome.runtime.lastError && wt(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(r), n(e);
            });
          } catch (t) {
            clearTimeout(r), s(t);
          }
        });
      }
      Ot(t, e) {
        return new Promise((i, n) => {
          let s = null;
          e &&
            (s = setTimeout(() => {
              n({ error: "Send Message Timeout" });
            }, e));
          try {
            chrome.runtime.sendMessage(r, t, (e) => {
              chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
            });
          } catch (t) {
            s && clearTimeout(s), n(t);
          }
        });
      }
    })();
    class Ue {
      constructor(t, e, i) {
        (this.sender = t), (this.target = e), (this.type = i);
      }
    }
    class Be extends Ue {
      constructor(t, e, i) {
        super(t, e, i), (this.type = i);
      }
    }
    var Ve, $e;
    !(function (t) {
      (t.INIT_CHAT = "initChat"),
        (t.ON_MESSAGE = "onMessage"),
        (t.ON_BUFFER = "onBuffer"),
        (t.ON_TYPING = "onTyping"),
        (t.ON_WATCHING_ADS = "onWatchingAds"),
        (t.UPDATE_SETTINGS = "updateSettings"),
        (t.ON_REACTION = "onReaction"),
        (t.ON_GIF = "onGif"),
        (t.ON_LOG_EVENT = "onLogEvent"),
        (t.USER_LIST = "userList"),
        (t.ON_WEB_RTC = "onWebRTC");
    })(Ve || (Ve = {}));
    class We extends Be {
      constructor(t, e, i) {
        super(t, e, Ve.ON_MESSAGE), (this.data = i);
      }
    }
    class Ge extends Be {
      constructor(t, e, i) {
        super(t, e, Ve.ON_REACTION), (this.data = i);
      }
    }
    class He extends Be {
      constructor(t, e, i) {
        super(t, e, Ve.UPDATE_SETTINGS), (this.data = i);
      }
    }
    class ze extends Be {
      constructor(t, e, i) {
        super(t, e, Ve.ON_BUFFER), (this.data = i);
      }
    }
    class Je extends Be {
      constructor(t, e, i) {
        super(t, e, Ve.ON_TYPING), (this.data = i);
      }
    }
    class qe extends Be {
      constructor(t, e, i) {
        super(t, e, Ve.ON_WATCHING_ADS), (this.data = i);
      }
    }
    class Ke extends Ue {
      constructor(t, e, i) {
        super(t, e, i), (this.type = i);
      }
    }
    !(function (t) {
      (t.UPDATE_SESSION = "updateSession"),
        (t.NEXT_EPISODE = "nextEpisode"),
        (t.REBOOT_SESSION = "rebootSession"),
        (t.GET_SERVER_TIME = "getServerTime"),
        (t.RELOAD_PARTY = "reloadParty");
    })($e || ($e = {}));
    class Xe extends Ke {
      constructor(t, e, i) {
        super(t, e, $e.UPDATE_SESSION), (this.data = i);
      }
    }
    const Ye = new (class {
      constructor() {
        this.At = new Map();
      }
      getTabForSessionId(t) {
        for (const e of this.At.keys()) {
          const i = this.At.get(e);
          if ((null == i ? void 0 : i.tempSessionId) === t) return e;
        }
      }
      getAllSockets() {
        return this.At.values();
      }
      setSocketForTabId(t, e) {
        this.At.set(t, e);
      }
      getSocketForTabId(t) {
        return this.At.get(t);
      }
      containsSocketForTabId(t) {
        return this.At.has(t);
      }
      removeSocketForTabId(t) {
        this.At.delete(t);
      }
      teardown() {
        this.At.forEach((t) => {
          t.teardown();
        }),
          this.At.clear();
      }
    })();
    Object.freeze(Ye);
    const Ze = Ye;
    class Qe {
      loadSessionData(t, e) {
        (this.Pt = t), this.Pt && ((this.Pt.userSettings = e), this.Pt.messages || (this.Pt.messages = []));
      }
      get sessionData() {
        return this.Pt;
      }
      set sessionData(t) {
        this.Pt = t;
      }
    }
    class ti extends Ke {
      constructor(t, e, i) {
        super(t, e, $e.NEXT_EPISODE), (this.data = i);
      }
    }
    class ei extends Ke {
      constructor(t, e, i) {
        super(t, e, $e.REBOOT_SESSION), (this.data = i);
      }
    }
    class ii extends Be {
      constructor(t, e, i) {
        super(t, e, Ve.ON_GIF), (this.data = i);
      }
    }
    class ni extends Be {
      constructor(t, e, i, n) {
        super(t, e, Ve.USER_LIST), (this.data = { userList: i, socketConnectionId: n });
      }
    }
    class si extends Be {
      constructor(t, e, i) {
        super(t, e, Ve.ON_WEB_RTC), (this.data = i);
      }
    }
    class ri {
      constructor(t) {
        (this.et = t), (this.Nt = new Qe());
      }
      setUserId(t) {
        this.it = t;
      }
      onMessage(t) {
        switch (t.type) {
          case Fe.SEND_MESSAGE:
            this.Dt(t);
            break;
          case Fe.SET_BUFFERING_PRESENCE:
            this.Rt(t);
            break;
          case Fe.SET_TYPING_PRESENCE:
            this.xt(t);
            break;
          case Fe.SET_ADS_PRESENCE:
            this.Ft(t);
            break;
          case Fe.UPDATE_SETTINGS_MESSAGE:
            this.jt(t);
            break;
          case Fe.UPDATE_SESSION:
            this.Mt(t);
            break;
          case Fe.JUMP_TO_NEXT_EPISODE:
            this.Lt(t);
            break;
          case Fe.SEND_REACTION:
            this.Ut(t);
            break;
          case Fe.SEND_GIF:
            this.Bt(t);
            break;
          case Fe.WEB_RTC:
            this.Vt(t);
            break;
          case Fe.USER_LIST:
            this.$t(t);
        }
      }
      getSessionData() {
        return this.Nt.sessionData;
      }
      loadSessionData(t, e) {
        this.Nt.loadSessionData(t, e);
      }
      clearSessionData() {
        this.Nt.sessionData = void 0;
      }
      loadTempSessionId(t) {
        this.ht = t;
      }
      onReconnectFailed() {
        const t = new Ke(m, b, $e.RELOAD_PARTY);
        Ze.removeSocketForTabId(this.et), Le.sendMessageToTabAsync(t, this.et);
      }
      setDataManager(t) {
        this.Nt = t;
      }
      onConnect() {
        wt("Connected to server");
      }
      onReconnect() {
        var t;
        const e = Ze.getSocketForTabId(this.et);
        this.Nt.sessionData
          ? null == e ||
            e.sendMessage(Fe.REBOOT_MESSAGE, this.Nt.sessionData, (t) => {
              if (!t || t.errorMessage) t && console.log(t.errorMessage), this.onReconnectFailed();
              else {
                const e = new ei(m, b, t);
                Le.sendMessageToTabAsync(e, this.et).then((t) => {
                  t || this.onReconnectFailed();
                });
              }
            })
          : this.ht && (null === (t = window.tpBackground) || void 0 === t || t.reToggleOpenParty(this.et));
      }
      Dt(t) {
        var e;
        const i = new We(m, b, t.data);
        Le.sendMessageToTabAsync(i, this.et), null === (e = this.Nt.sessionData) || void 0 === e || e.messages.push(i.data);
      }
      Rt(t) {
        const e = new ze(m, b, t.data);
        (e.data.usersBuffering = e.data.usersBuffering.filter((t) => t != this.it)), Le.sendMessageToTabAsync(e, this.et);
      }
      xt(t) {
        const e = new Je(m, b, t.data);
        (e.data.usersTyping = e.data.usersTyping.filter((t) => t != this.it)), Le.sendMessageToTabAsync(e, this.et);
      }
      Ut(t) {
        const e = new Ge(m, b, t.data);
        Le.sendMessageToTabAsync(e, this.et);
      }
      Vt(t) {
        const e = new si(m, b, t.data);
        Le.sendMessageToTabAsync(e, this.et);
      }
      Bt(t) {
        var e;
        const i = new ii(m, b, t.data);
        Le.sendMessageToTabAsync(i, this.et), null === (e = this.Nt.sessionData) || void 0 === e || e.messages.push(i.data);
      }
      Ft(t) {
        const e = new qe(m, b, t.data);
        (e.data.usersWatchingAds = e.data.usersWatchingAds.filter((t) => t != this.it)), Le.sendMessageToTabAsync(e, this.et);
      }
      jt(t) {
        const e = new He(m, b, t.data);
        Le.sendMessageToTabAsync(e, this.et),
          this.Nt.sessionData && this.Nt.sessionData.permId == e.data.permId && (this.Nt.sessionData.userSettings, e.data.userSettings);
      }
      Mt(t) {
        const e = new Xe(m, b, t.data);
        Le.sendMessageToTabAsync(e, this.et),
          this.Nt.sessionData &&
            ((this.Nt.sessionData.state = e.data.state),
            (this.Nt.sessionData.lastKnownTime = e.data.lastKnownTime),
            (this.Nt.sessionData.lastKnownTimeUpdatedAt = e.data.lastKnownTimeUpdatedAt));
      }
      Lt(t) {
        const e = new ti(m, b, t.data);
        Le.sendMessageToTabAsync(e, this.et), this.Nt.sessionData && (this.Nt.sessionData.videoId = e.data.videoId);
      }
      $t(t) {
        var e;
        const i = new ni(m, b, t.data, null !== (e = this.it) && void 0 !== e ? e : "");
        Le.sendMessageToTabAsync(i, this.et);
      }
    }
    class oi {
      constructor(t) {
        this.et = t;
      }
      createSocketForTab() {
        const t = new ri(this.et),
          e = new Me(c, t, this.et);
        return wt("Created Socket with url: " + c), e;
      }
    }
    var ai = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      });
    };
    const ci = new (class {
      getItemsAsync(t) {
        return ai(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            chrome.storage.local.get(t, (t) => {
              chrome.runtime.lastError ? i(new Error(w)) : e(t);
            });
          });
        });
      }
      getAllItemsAsync() {
        return ai(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.storage.local.get(null, (i) => {
              chrome.runtime.lastError ? e(new Error(w)) : t(i);
            });
          });
        });
      }
    })();
    Object.freeze(ci);
    const hi = ci,
      ui = [
        "Batman.svg",
        "DeadPool.svg",
        "CptAmerica.svg",
        "Wolverine.svg",
        "IronMan.svg",
        "Goofy.svg",
        "Alien.svg",
        "Mulan.svg",
        "Snow-White.svg",
        "Poohbear.svg",
        "Sailormoon.svg",
        "Sailor Cat.svg",
        "Pizza.svg",
        "Cookie.svg",
        "Chocobar.svg",
        "hotdog.svg",
        "Hamburger.svg",
        "Popcorn.svg",
        "IceCream.svg",
        "ChickenLeg.svg"
      ],
      di = [
        "General/Alien.svg",
        "General/Batman.svg",
        "General/ChickenLeg.svg",
        "General/Chocobar.svg",
        "General/Cookie.svg",
        "General/CptAmerica.svg",
        "General/DeadPool.svg",
        "General/Goofy.svg",
        "General/Hamburger.svg",
        "General/hotdog.svg",
        "General/IceCream.svg",
        "General/IronMan.svg",
        "General/Mulan.svg",
        "General/Pizza.svg",
        "General/Poohbear.svg",
        "General/Popcorn.svg",
        "General/Sailor Cat.svg",
        "General/Sailormoon.svg",
        "General/Snow-White.svg",
        "General/Wolverine.svg"
      ],
      li = [
        "General/Alien.svg",
        "General/Batman.svg",
        "General/ChickenLeg.svg",
        "General/Chocobar.svg",
        "General/Cookie.svg",
        "General/CptAmerica.svg",
        "General/DeadPool.svg",
        "General/Goofy.svg",
        "General/Hamburger.svg",
        "General/hotdog.svg",
        "General/IceCream.svg",
        "General/IronMan.svg",
        "General/Mulan.svg",
        "General/Pizza.svg",
        "General/Poohbear.svg",
        "General/Popcorn.svg",
        "General/Sailor Cat.svg",
        "General/Sailormoon.svg",
        "General/Snow-White.svg",
        "General/Wolverine.svg",
        "Christmas/angel.svg",
        "Christmas/bell.svg",
        "Christmas/box.svg",
        "Christmas/cane.svg",
        "Christmas/flake.svg",
        "Christmas/gingerbread.svg",
        "Christmas/gingerbread_F.svg",
        "Christmas/gingerbread_M.svg",
        "Christmas/gloves_blue.svg",
        "Christmas/gloves_red.svg",
        "Christmas/hat.svg",
        "Christmas/ornament.svg",
        "Christmas/raindeer.svg",
        "Christmas/reef.svg",
        "Christmas/santa_F.svg",
        "Christmas/santa_M.svg",
        "Christmas/snowglobe.svg",
        "Christmas/snowman.svg",
        "Christmas/sock.svg",
        "Christmas/tree.svg",
        "Halloween/bats.svg",
        "Halloween/candy_corn.svg",
        "Halloween/cat_black.svg",
        "Halloween/cat_white.svg",
        "Halloween/coffin.svg",
        "Halloween/eye_ball.svg",
        "Halloween/face_angry.svg",
        "Halloween/face_evil.svg",
        "Halloween/face_silly.svg",
        "Halloween/face_smile.svg",
        "Halloween/frankenstein.svg",
        "Halloween/ghost_F.svg",
        "Halloween/ghost_M.svg",
        "Halloween/gravestone.svg",
        "Halloween/lollipop.svg",
        "Halloween/moon.svg",
        "Halloween/mummy.svg",
        "Halloween/potion.svg",
        "Halloween/pumpkin.svg",
        "Halloween/pumpkin_witch.svg",
        "Halloween/skull_brain.svg",
        "Halloween/skull_candy.svg",
        "Halloween/skull_girl.svg",
        "Halloween/witch_hat.svg",
        "Thanksgiving/acorn.svg",
        "Thanksgiving/bread.svg",
        "Thanksgiving/candles.svg",
        "Thanksgiving/corn.svg",
        "Thanksgiving/drinks.svg",
        "Thanksgiving/maple_leaf.svg",
        "Thanksgiving/plate_chicken.svg",
        "Thanksgiving/pumpkin.svg",
        "Thanksgiving/pumpkin_pie.svg",
        "Thanksgiving/slice_pie.svg",
        "Thanksgiving/sun_flower.svg",
        "Thanksgiving/turkey_face.svg"
      ];
    var fi = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      });
    };
    const pi = new (class {
      setItemsAsync(t) {
        return fi(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            chrome.storage.local.set(t, () => {
              chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
            });
          });
        });
      }
    })();
    Object.freeze(pi);
    const vi = pi;
    var gi = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      });
    };
    const mi = new (class {
      isUserIconValid(t) {
        return (
          !!t &&
          (t.includes("?newIconUrl=") ? li.includes(t.split("?newIconUrl=")[1]) && ui.includes(t.split("?newIconUrl=")[0]) : li.includes(t))
        );
      }
      isUserIdValid(t) {
        return "string" == typeof t && (16 === t.length || 36 === t.length);
      }
      isUserNickNameValid(t) {
        return t && "string" == typeof t && t.length < 20;
      }
      getDefaultUserIcon() {
        return di[Math.floor(Math.random() * di.length)];
      }
      getDefaultUserNickName() {
        return "";
      }
      Wt(t) {
        return gi(this, void 0, void 0, function* () {
          try {
            yield vi.setItemsAsync(t);
          } catch (t) {}
        });
      }
      getValidatedChromeStorageDataAsync() {
        return gi(this, void 0, void 0, function* () {
          const t = yield hi.getAllItemsAsync(),
            e = mi.validateStorageData(t);
          return JSON.stringify(t) !== JSON.stringify(e) && this.Wt(e), e;
        });
      }
      validateStorageData(t) {
        const e = "object" == typeof t ? Object.assign({}, t) : {};
        return (
          e.userIcon && e.userIcon.includes("?newIconUrl=") && (e.userIcon = e.userIcon.split("?newIconUrl=")[1]),
          this.isUserIconValid(e.userIcon) || (e.userIcon = this.getDefaultUserIcon()),
          this.isUserNickNameValid(e.userNickname) || (e.userNickname = this.getDefaultUserNickName()),
          e
        );
      }
    })();
    Object.freeze(mi);
    const bi = mi;
    var wi = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      });
    };
    const yi = new (class {
      getRedirectDataForTabAsync(t) {
        return wi(this, void 0, void 0, function* () {
          const e = (yield hi.getItemsAsync([v])).redirectDataMap,
            i = this.Gt(t);
          if (e && e[i]) {
            const t = e[i];
            if (this.Ht(t)) return t;
          }
        });
      }
      deleteRedirectDataForTabAsync(t) {
        return wi(this, void 0, void 0, function* () {
          const e = (yield hi.getItemsAsync([v])).redirectDataMap,
            i = this.Gt(t);
          e && e[i] && delete e[i], yield vi.setItemsAsync({ [v]: e });
        });
      }
      Gt(t) {
        return t;
      }
      storeRedirectDataForTabAsync(t, e) {
        return wi(this, void 0, void 0, function* () {
          const i = this.Gt(e);
          let n = yield hi.getItemsAsync([v]);
          (n[i] = t), (n = this.zt(n)), yield vi.setItemsAsync({ [v]: n });
        });
      }
      zt(t) {
        return (function (t, e) {
          const i = {};
          let n;
          for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
          return i;
        })(t, this.Ht);
      }
      Ht(t) {
        const e = t.date;
        return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
      }
    })();
    Object.freeze(yi);
    const _i = yi;
    var Ii, ki, Si, Ti, Ci, Ei, Oi;
    !(function (t) {
      (t.DROPIN_KEY = "dropInActive"), (t.AUTO_ACCEPT_DROPIN = "dropInAutoAccept"), (t.STATUS_TYPE = "statusType");
    })(Ii || (Ii = {})),
      (function (t) {
        (t.DO_AUTH_SIGN_IN = "doAuthSignIn"), (t.GET_AUTH_TOKEN = "getAuthToken"), (t.SIGN_OUT = "signOut");
      })(ki || (ki = {}));
    class Ai extends Ue {
      constructor(t, e, i) {
        super(t, e, i), (this.type = i);
      }
    }
    !(function (t) {
      (t.JOIN_SESSION = "joinSession"),
        (t.ACCEPT_DROPIN = "acceptDropin"),
        (t.SET_STATUS_TYPE = "setStatusType"),
        (t.GET_STATUS_TYPE = "getStatusType"),
        (t.GET_VIDEO_DATA = "getVideoData"),
        (t.LOAD_SESSION = "loadSession"),
        (t.NO_SESSION_DATA = "noSessionData"),
        (t.ON_NOTIF = "onNotif"),
        (t.FORWARD_TO_SIDEBAR = "forwardToSidebar"),
        (t.TEARDOWN = "teardown"),
        (t.ON_VIDEO_UPDATE = "onVideoUpdate"),
        (t.SOCKET_LOST_CONNECTION = "socketLostConnection"),
        (t.REBOOT = "socketReconnect"),
        (t.LOG_EVENT = "logEvent"),
        (t.LOG_EXPERIMENT = "logExperiment"),
        (t.STAY_ALIVE = "stayAlive"),
        (t.LOAD_CHAT_WINDOW = "loadChatWindow"),
        (t.RESET_CHAT_WINDOW = "resetChatWindow"),
        (t.HIDE_CHAT_WINDOW = "hideChatWindow"),
        (t.SET_USER_PRESENCE = "setUserPresence"),
        (t.TOGGLE_OPEN_PARTY = "toggleOpenParty"),
        (t.GET_ACTIVE_PARTY = "getActiveParty"),
        (t.GET_TAB_ID = "getTabId"),
        (t.SET_ACTIVE_PARTY = "setActiveParty"),
        (t.FULLSCREEN_WINDOW = "fullscreenWindow"),
        (t.MAX_WINDOW = "maxWindow"),
        (t.GET_EXPERIMENT_FLAG = "getExpFlag");
    })(Si || (Si = {}));
    class Pi extends Ai {
      constructor(t, e, i) {
        super(t, e, Si.LOAD_SESSION), (this.data = i);
      }
    }
    !(function (t) {
      (t.WITH_ACTIVITY = "with_activity"), (t.NO_ACTIVITY = "no_activity"), (t.OFFLINE = "offline");
    })(Ti || (Ti = {}));
    !(function (t) {
      (t.BROADCAST = "brodadcast"),
        (t.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode"),
        (t.SEND_MESSAGE = "sendMessage"),
        (t.CONTENT_SCRIPT_READY = "contentScriptReady"),
        (t.CONTENT_SCRIPT_ERROR = "contentScriptError"),
        (t.TEARDOWN = "teardown"),
        (t.GET_SESSION_DATA = "getSessionData"),
        (t.SET_TYPING = "setTyping"),
        (t.SET_BUFFERING = "setBuffering"),
        (t.SET_WATCHING_ADS = "setWatchingAds"),
        (t.BROADCAST_USER_SETTINGS = "brodadcastUserSettings"),
        (t.SEND_REACTION = "sendReaction"),
        (t.SEND_GIF = "sendGIF"),
        (t.WEB_RTC = "webRTC");
    })(Ci || (Ci = {}));
    class Ni extends Ue {
      constructor(t, e, i) {
        super(t, e, i), (this.type = i);
      }
    }
    !(function (t) {
      (t.CREATE_SESSION = "createSession"),
        (t.RE_INJECT = "reInject"),
        (t.GET_INIT_DATA = "getInitData"),
        (t.GET_INIT_USER_SESTTINGS = "getInitUserSettings"),
        (t.IS_CONTENT_SCRIPT_READY = "isContentScriptReady"),
        (t.SET_CHAT_VISIBLE = "setChatVisible"),
        (t.DISCONNECT = "teardown"),
        (t.CLOSE_POPUP = "closePopup"),
        (t.GET_SCHEDULED_EVENTS = "getScheduledEvents"),
        (t.GET_RECENT_SCHEDULED_EVENTS = "getRecentScheduledEvents"),
        (t.GOOGLE_SIGN_IN = "googleSignIn"),
        (t.EMAIL_SIGN_IN = "emailSignIn"),
        (t.FORGOT_PASSWORD = "forgotPassword"),
        (t.EMAIL_SIGN_UP = "emailSignUp"),
        (t.CREATE_SCHEDULED_EVENT = "createScheduledEvent"),
        (t.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent"),
        (t.SET_USER_STATUS = "SET_USER_STATUS"),
        (t.SIGN_IN_CREATE = "SIGN_IN_CREATE");
    })(Ei || (Ei = {}));
    class Di extends Ni {
      constructor(t, e) {
        super(t, e, Ei.CLOSE_POPUP);
      }
    }
    class Ri extends Ni {
      constructor(t, e) {
        super(t, e, Ei.IS_CONTENT_SCRIPT_READY);
      }
    }
    var xi = new Uint8Array(16);
    function Fi() {
      if (
        !Oi &&
        !(Oi =
          ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Oi(xi);
    }
    const ji = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const Mi = function (t) {
      return "string" == typeof t && ji.test(t);
    };
    for (var Li = [], Ui = 0; Ui < 256; ++Ui) Li.push((Ui + 256).toString(16).substr(1));
    const Bi = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = (
          Li[t[e + 0]] +
          Li[t[e + 1]] +
          Li[t[e + 2]] +
          Li[t[e + 3]] +
          "-" +
          Li[t[e + 4]] +
          Li[t[e + 5]] +
          "-" +
          Li[t[e + 6]] +
          Li[t[e + 7]] +
          "-" +
          Li[t[e + 8]] +
          Li[t[e + 9]] +
          "-" +
          Li[t[e + 10]] +
          Li[t[e + 11]] +
          Li[t[e + 12]] +
          Li[t[e + 13]] +
          Li[t[e + 14]] +
          Li[t[e + 15]]
        ).toLowerCase();
      if (!Mi(i)) throw TypeError("Stringified UUID is invalid");
      return i;
    };
    const Vi = function (t, e, i) {
      var n = (t = t || {}).random || (t.rng || Fi)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
        i = i || 0;
        for (var s = 0; s < 16; ++s) e[i + s] = n[s];
        return e;
      }
      return Bi(n);
    };
    function $i() {
      try {
        return Vi();
      } catch (t) {
        return "";
      }
    }
    var Wi;
    !(function (t) {
      (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
        (t[(t.OFFLINE = 1)] = "OFFLINE"),
        (t[(t.AWAY = 2)] = "AWAY"),
        (t[(t.ONLINE = 3)] = "ONLINE"),
        (t[(t.WATCHING_ALONE = 4)] = "WATCHING_ALONE"),
        (t[(t.WATCHING_IN_PARTY = 5)] = "WATCHING_IN_PARTY");
    })(Wi || (Wi = {}));
    const Gi = { $6: ["*://*/*"] };
    var Hi = i(9560),
      zi = i.n(Hi),
      Ji = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function c(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      };
    class qi {
      constructor() {
        (this.Jt = null),
          this.qt(),
          this.Kt(),
          (this.Xt = 0),
          (this.Yt = 0),
          (this.Zt = 0),
          (this.Qt = 0),
          (this.te = $i()),
          (this.ee = $i()),
          (this.ie = Date.now()),
          (this.ne = 0),
          (this.se = new Map());
      }
      setEventWindow(t) {
        this.Jt = t;
      }
      closeEventWindow() {
        this.Jt && (this.Jt.close(), (this.Jt = null));
      }
      eventPostMessage(t, e) {
        var i;
        null === (i = this.Jt) || void 0 === i || i.postMessage(t, e);
      }
      addAliveTab(t, e) {
        this.se.set(t, e);
      }
      removeAliveTab(t) {
        const e = this.se.get(t);
        e && clearTimeout(e), this.se.delete(t);
      }
      checkAliveTab(t) {
        return this.se.has(t);
      }
      clearTimeout(t) {
        const e = this.se.get(t);
        e && clearTimeout(e);
      }
      getVideoSessionData() {
        return {
          id: this.ee,
          start_time_ms: this.Xt,
          heartbeat_duration_ms: Math.min(this.Qt, qi.MAX_HEARTBEAT),
          total_duration_ms: this.Zt
        };
      }
      resetVideoSession() {
        (this.ee = $i()), (this.Xt = Date.now()), (this.Yt = Date.now()), (this.Zt = 0);
      }
      pauseHeartBeat() {
        this.Qt = 0;
      }
      resumeHeartBeat() {
        (this.Yt = Date.now()), (this.Qt = 0);
      }
      heartBeatProc() {
        (this.Qt = 0 === this.Yt ? Date.now() - this.Xt : Date.now() - this.Yt), (this.Zt += this.Qt), (this.Yt = Date.now());
      }
      incrementAppSessionEventNumber() {
        this.ne++;
      }
      getAppSession() {
        return { id: this.te, start_time_ms: this.ie, event_number: this.ne };
      }
      re() {
        chrome.runtime.reload();
      }
      qt() {
        chrome.tabs.onUpdated.addListener(this.oe.bind(this)),
          chrome.runtime.onInstalled.addListener(this.ae.bind(this)),
          chrome.storage.onChanged.addListener((t, e) => {
            console.log("storage change: " + JSON.stringify(t) + " for " + JSON.stringify(e));
          }),
          chrome.runtime.onUpdateAvailable.addListener(this.re.bind(this));
      }
      ae(t) {
        return Ji(this, void 0, void 0, function* () {
          if ("install" == t.reason) {
            yield O(1e3)();
            const t = chrome.runtime.getManifest().version;
            Ca.ce({ name: "install", action: { description: "install extension for the first time version " + t } }),
              Ca.logOldEventAsync({ eventType: "install" }),
              chrome.tabs.create({ url: "https://redirect.teleparty.com/signup?ref=onboarding" });
          } else if ("update" == t.reason) {
            const e = chrome.runtime.getManifest().version;
            if ((console.log("Updated from " + t.previousVersion + " to " + e + "!"), "4.0.4" === e)) {
              const i = {
                name: "update",
                action: { description: "Updated from " + t.previousVersion + " to " + e + "!", reason: "Extension version is out of date" }
              };
              Ca.ce(i);
            }
            Ca.logOldEventAsync({ eventType: "update-" + e });
            Math.random() < 0.05 &&
              "3.9.5" === e &&
              chrome.permissions.contains({ origins: Gi.$6 }, (t) => {
                Ca.ce({ name: "granted_permissions", action: { description: t ? "true" : "false" } });
              });
          }
        });
      }
      getIdleState() {
        return Ji(this, void 0, void 0, function* () {
          return new Promise((t) => {
            chrome.idle ? chrome.idle.queryState(600, t) : t("active");
          });
        });
      }
      getActiveTabId() {
        return Ji(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.tabs.query({ active: !0, currentWindow: !0 }, ([i]) => {
              var n;
              i ? t(null !== (n = i.id) && void 0 !== n ? n : 0) : e();
            });
          });
        });
      }
      getOnlineState() {
        return Ji(this, void 0, void 0, function* () {
          return "active" !== (yield this.getIdleState())
            ? { status: Wi.AWAY }
            : new Promise((t) => {
                let e = { status: Wi.ONLINE };
                chrome.tabs.query({ active: !0, currentWindow: !0 }, ([i]) => {
                  if (i) {
                    const n = i.url;
                    if (n && i.id) {
                      const s = new bt(new URL(n), i.id);
                      s.streamingService &&
                        (s.isBrowsing ? (e = { status: Wi.WATCHING_ALONE, service: s.serviceName, status_text: "Browsing" }) : t(void 0));
                    }
                  }
                  t(e);
                });
              });
        });
      }
      he(t) {
        return 16 === t.length || 36 === t.length;
      }
      ue() {
        const t = navigator.userAgent.toLowerCase().indexOf("edg") > -1 ? "edge" : "chrome";
        console.log("browser: " + t);
        const e = "?browser=" + t,
          i = new XMLHttpRequest();
        (i.onreadystatechange = () => {
          if (i.readyState == XMLHttpRequest.DONE) {
            const t = i.responseText,
              e = new Date();
            this.he(t) &&
              (chrome.storage.local.set({ userId: t, recentlyUpdated: !0, recentlyUpdated3: !0, date: e.toString() }, function () {
                console.log("Settings saved");
              }),
              chrome.runtime.setUninstallURL(
                "https://www.teleparty.com/uninstall?userId=" +
                  t +
                  "&browser=chrome&version=" +
                  encodeURIComponent(chrome.runtime.getManifest().version)
              ));
          }
        }),
          i.open("GET", "https://data3.netflixparty.com/create-userId" + e, !0),
          i.send(null);
      }
      Kt() {
        try {
          chrome.storage.local.get(null, (t) => {
            t.userId && bi.isUserIdValid(t.userId)
              ? chrome.runtime.setUninstallURL(
                  "https://www.teleparty.com/uninstall?userId=" +
                    t.userId +
                    "&browser=chrome&version=" +
                    encodeURIComponent(chrome.runtime.getManifest().version)
                )
              : (console.log("userId undefined/invalid in local storage -> now setting"), this.ue());
          });
        } catch (t) {
          console.log("user auth error");
          const e = { name: "error", action: { description: "user auth error", reason: t } };
          Ca.ce(e);
        }
      }
      oe(t, e, i) {
        if (("loading" === e.status && Ca.de(i), "complete" == e.status)) {
          const t = i.url;
          if (t && i.id) {
            const e = new URL(t).hostname,
              n = new bt(new URL(t), i.id),
              s = n.streamingService;
            o.some((t) => e.includes(t) || g.includes(zi()(e))) && chrome.tabs.executeScript(i.id, { file: "ci_bundled.js" }),
              s &&
                (this.initContentScriptsAsync(n),
                n.isBrowsing && Ca.setUserPresence({ status: 3, service: n.serviceName, status_text: "Browsing" })),
              (new URL(t).hostname.includes("redirect.teleparty") || new URL(t).hostname.includes("localhost")) &&
                chrome.tabs.executeScript(i.id, { file: "redirect_injected_bundled.js", allFrames: !0 });
          } else if (chrome.runtime.lastError) return;
        }
      }
      initContentScriptsAsync(t) {
        return Ji(this, void 0, void 0, function* () {
          if (t.streamingService && !t.isBrowsing) {
            const e = t.streamingService;
            let i = !1;
            (e.name != k.CRUNCHYROLL && e.name != k.ESPN) || ((i = !0), yield O(5e3)()),
              yield new Promise((e) => {
                chrome.tabs.executeScript(t.id, { file: "lib/tp_libraries_min.js" }, e);
              }),
              yield new Promise((e) => {
                chrome.tabs.executeScript(
                  t.id,
                  {
                    code: `\n                        if (!window.teleparty) {\n                            window.teleparty = { tabId: ${t.id} }\n                        }\n                    `
                  },
                  e
                );
              }),
              yield Promise.all(
                e.contentScripts.map(
                  (e) =>
                    new Promise((n) => {
                      chrome.tabs.executeScript(t.id, { file: e, allFrames: i }, () => {
                        n();
                      });
                    })
                )
              );
            const n = new Ri(m, b);
            yield Le.sendMessageToTabAsync(n, t.id);
          }
        });
      }
    }
    qi.MAX_HEARTBEAT = 8e4;
    var Ki = i(1309),
      Xi = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function c(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      };
    class Yi {
      constructor() {
        (this.le = []), (this.fe = ""), (this.throttleStatus = {}), this.getConfigData(), this.pe();
      }
      pe() {
        return Xi(this, void 0, void 0, function* () {
          this.fe = yield this.ve();
        });
      }
      throttle(t, e, i) {
        return (...n) => {
          this.throttleStatus[i] || (t.apply(this, n), (this.throttleStatus[i] = !0), setTimeout(() => (this.throttleStatus[i] = !1), e));
        };
      }
      ce(t) {
        Ca.ce(t);
      }
      ve() {
        return Xi(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            let i = 0;
            const n = () =>
              Xi(this, void 0, void 0, function* () {
                i++;
                const s = yield bi.getValidatedChromeStorageDataAsync();
                s.userId ? t(s.userId) : i < 5 ? setTimeout(n, 5e3) : e("Could not get permId in time");
              });
            n();
          });
        });
      }
      ge() {
        return Xi(this, void 0, void 0, function* () {
          const t = yield fetch(`${a}/experiment-data`),
            e = yield t.json();
          this.le = e;
        });
      }
      getConfigData() {
        return Xi(this, void 0, void 0, function* () {
          this.me && (clearInterval(this.me), (this.me = void 0)),
            yield this.ge(),
            (this.me = setInterval(
              () =>
                Xi(this, void 0, void 0, function* () {
                  try {
                    yield this.ge();
                  } catch (t) {
                    console.log("Error fetching experiment data", t);
                  }
                }),
              Yi.CONFIG_PULL_TIME
            ));
        });
      }
      be(t, e, i) {
        const n = i + t;
        return (1 * Ki.murmur3(n, e)) / 4294967295;
      }
      checkFlag(t) {
        const e = this.le.map((t) => t.name);
        if (-1 === e.indexOf(t)) return null;
        const i = e.indexOf(t),
          n = this.le[i].seed,
          s = this.le[i].is_exp,
          r = this.le[i].version,
          o = this.be(t, n, this.fe),
          a = this.le[i].buckets;
        for (const e of a) {
          const i = Object.keys(e)[0],
            a = e[i],
            c = a[0],
            h = a[1];
          if (o >= c && o < h) {
            if (s) {
              this.throttle(this.ce, 500, t)({ name: "experiment_exposure", experiment: { name: t, bucket: i, seed: n, version: r } });
            }
            return i;
          }
        }
        return null;
      }
    }
    Yi.CONFIG_PULL_TIME = 6e5;
    class Zi {
      constructor() {
        wt("Message forwarder"), this.we();
      }
      ye(t, e, i) {
        if (t.target === m) {
          if (t.type == Ci.BROADCAST) {
            const n = t;
            return this._e(Fe.UPDATE_SESSION, n.data, e, i), !0;
          }
          if (t.type == Ci.SEND_MESSAGE) {
            const n = t;
            return this._e(Fe.SEND_MESSAGE, n.data, e, i), !0;
          }
          if (t.type == Ci.SET_TYPING) {
            const n = t;
            return this._e(Fe.SET_TYPING_PRESENCE, n.data, e, i), !0;
          }
          if (t.type == Ci.SET_BUFFERING) {
            const n = t;
            return this._e(Fe.SET_BUFFERING_PRESENCE, n.data, e, i), !0;
          }
          if (t.type == Ci.SET_WATCHING_ADS) {
            const n = t;
            return this._e(Fe.SET_ADS_PRESENCE, n.data, e, i), !0;
          }
          if (t.type === Ci.BROADCAST_USER_SETTINGS) {
            const n = t;
            return this._e(Fe.BROADCAST_USER_SETTINGS, n.data, e, i), !0;
          }
          if (t.type === Ci.BROADCAST_NEXT_EPISODE) {
            const n = t;
            return this._e(Fe.NEXT_EPISODE_MESSAGE, n.data, e, i), !0;
          }
          if (t.type === $e.GET_SERVER_TIME) return this._e(Fe.GET_SERVER_TIME, {}, e, i), !0;
          if (t.type == Ci.SEND_REACTION) {
            const n = t;
            return this._e(Fe.SEND_REACTION, n.data, e, i), !0;
          }
          if (t.type == Ci.SEND_GIF) {
            const n = t;
            return this._e(Fe.SEND_GIF, n.data, e, i), !0;
          }
          if (t.type == Si.REBOOT) {
            const e = t,
              n = Ze.getSocketForTabId(e.data.tabId);
            return null == n || n.sendMessage(Fe.REBOOT_MESSAGE, e.data.sessionData, i), wt("Attempted to reboot session"), !0;
          }
          if (t.type == Ci.WEB_RTC) return this._e(Fe.WEB_RTC, t.data, e, i), !0;
          if (t.sender == m && t.type == Si.REBOOT) {
            const e = t,
              n = Ze.getSocketForTabId(e.data.tabId);
            return null == n || n.sendMessage(Fe.REBOOT_MESSAGE, e.data.sessionData, i), wt("Attempted to reboot session"), !0;
          }
        }
        return !1;
      }
      _e(t, e, i, n) {
        const s = this.Ie(i);
        null == s || s.sendMessage(t, e, n);
      }
      Ie(t) {
        var e;
        const i = null === (e = t.tab) || void 0 === e ? void 0 : e.id;
        return i ? Ze.getSocketForTabId(i) : void 0;
      }
      we() {
        Le.addListener(this.ye.bind(this));
      }
    }
    const Qi = function (t) {
        const e = [];
        let i = 0;
        for (let n = 0; n < t.length; n++) {
          let s = t.charCodeAt(n);
          s < 128
            ? (e[i++] = s)
            : s < 2048
            ? ((e[i++] = (s >> 6) | 192), (e[i++] = (63 & s) | 128))
            : 55296 == (64512 & s) && n + 1 < t.length && 56320 == (64512 & t.charCodeAt(n + 1))
            ? ((s = 65536 + ((1023 & s) << 10) + (1023 & t.charCodeAt(++n))),
              (e[i++] = (s >> 18) | 240),
              (e[i++] = ((s >> 12) & 63) | 128),
              (e[i++] = ((s >> 6) & 63) | 128),
              (e[i++] = (63 & s) | 128))
            : ((e[i++] = (s >> 12) | 224), (e[i++] = ((s >> 6) & 63) | 128), (e[i++] = (63 & s) | 128));
        }
        return e;
      },
      tn = {
        byteToCharMap_: null,
        charToByteMap_: null,
        byteToCharMapWebSafe_: null,
        charToByteMapWebSafe_: null,
        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        get ENCODED_VALS() {
          return this.ENCODED_VALS_BASE + "+/=";
        },
        get ENCODED_VALS_WEBSAFE() {
          return this.ENCODED_VALS_BASE + "-_.";
        },
        HAS_NATIVE_SUPPORT: "function" == typeof atob,
        encodeByteArray(t, e) {
          if (!Array.isArray(t)) throw Error("encodeByteArray takes an array as a parameter");
          this.init_();
          const i = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
            n = [];
          for (let e = 0; e < t.length; e += 3) {
            const s = t[e],
              r = e + 1 < t.length,
              o = r ? t[e + 1] : 0,
              a = e + 2 < t.length,
              c = a ? t[e + 2] : 0,
              h = s >> 2,
              u = ((3 & s) << 4) | (o >> 4);
            let d = ((15 & o) << 2) | (c >> 6),
              l = 63 & c;
            a || ((l = 64), r || (d = 64)), n.push(i[h], i[u], i[d], i[l]);
          }
          return n.join("");
        },
        encodeString(t, e) {
          return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(Qi(t), e);
        },
        decodeString(t, e) {
          return this.HAS_NATIVE_SUPPORT && !e
            ? atob(t)
            : (function (t) {
                const e = [];
                let i = 0,
                  n = 0;
                for (; i < t.length; ) {
                  const s = t[i++];
                  if (s < 128) e[n++] = String.fromCharCode(s);
                  else if (s > 191 && s < 224) {
                    const r = t[i++];
                    e[n++] = String.fromCharCode(((31 & s) << 6) | (63 & r));
                  } else if (s > 239 && s < 365) {
                    const r = (((7 & s) << 18) | ((63 & t[i++]) << 12) | ((63 & t[i++]) << 6) | (63 & t[i++])) - 65536;
                    (e[n++] = String.fromCharCode(55296 + (r >> 10))), (e[n++] = String.fromCharCode(56320 + (1023 & r)));
                  } else {
                    const r = t[i++],
                      o = t[i++];
                    e[n++] = String.fromCharCode(((15 & s) << 12) | ((63 & r) << 6) | (63 & o));
                  }
                }
                return e.join("");
              })(this.decodeStringToByteArray(t, e));
        },
        decodeStringToByteArray(t, e) {
          this.init_();
          const i = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
            n = [];
          for (let e = 0; e < t.length; ) {
            const s = i[t.charAt(e++)],
              r = e < t.length ? i[t.charAt(e)] : 0;
            ++e;
            const o = e < t.length ? i[t.charAt(e)] : 64;
            ++e;
            const a = e < t.length ? i[t.charAt(e)] : 64;
            if ((++e, null == s || null == r || null == o || null == a)) throw Error();
            const c = (s << 2) | (r >> 4);
            if ((n.push(c), 64 !== o)) {
              const t = ((r << 4) & 240) | (o >> 2);
              if ((n.push(t), 64 !== a)) {
                const t = ((o << 6) & 192) | a;
                n.push(t);
              }
            }
          }
          return n;
        },
        init_() {
          if (!this.byteToCharMap_) {
            (this.byteToCharMap_ = {}), (this.charToByteMap_ = {}), (this.byteToCharMapWebSafe_ = {}), (this.charToByteMapWebSafe_ = {});
            for (let t = 0; t < this.ENCODED_VALS.length; t++)
              (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
                (this.charToByteMap_[this.byteToCharMap_[t]] = t),
                (this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t)),
                (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
                t >= this.ENCODED_VALS_BASE.length &&
                  ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
                  (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
          }
        }
      },
      en = function (t) {
        return (function (t) {
          const e = Qi(t);
          return tn.encodeByteArray(e, !0);
        })(t).replace(/\./g, "");
      },
      nn = function (t) {
        try {
          return tn.decodeString(t, !0);
        } catch (t) {
          console.error("base64Decode failed: ", t);
        }
        return null;
      };
    class sn {
      constructor() {
        (this.reject = () => {}),
          (this.resolve = () => {}),
          (this.promise = new Promise((t, e) => {
            (this.resolve = t), (this.reject = e);
          }));
      }
      wrapCallback(t) {
        return (e, i) => {
          e ? this.reject(e) : this.resolve(i), "function" == typeof t && (this.promise.catch(() => {}), 1 === t.length ? t(e) : t(e, i));
        };
      }
    }
    function rn() {
      return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "";
    }
    class on extends Error {
      constructor(t, e, i) {
        super(e),
          (this.code = t),
          (this.customData = i),
          (this.name = "FirebaseError"),
          Object.setPrototypeOf(this, on.prototype),
          Error.captureStackTrace && Error.captureStackTrace(this, an.prototype.create);
      }
    }
    class an {
      constructor(t, e, i) {
        (this.service = t), (this.serviceName = e), (this.errors = i);
      }
      create(t, ...e) {
        const i = e[0] || {},
          n = `${this.service}/${t}`,
          s = this.errors[t],
          r = s
            ? (function (t, e) {
                return t.replace(cn, (t, i) => {
                  const n = e[i];
                  return null != n ? String(n) : `<${i}?>`;
                });
              })(s, i)
            : "Error",
          o = `${this.serviceName}: ${r} (${n}).`;
        return new on(n, o, i);
      }
    }
    const cn = /\{\$([^}]+)}/g;
    function hn(t, e) {
      if (t === e) return !0;
      const i = Object.keys(t),
        n = Object.keys(e);
      for (const s of i) {
        if (!n.includes(s)) return !1;
        const i = t[s],
          r = e[s];
        if (un(i) && un(r)) {
          if (!hn(i, r)) return !1;
        } else if (i !== r) return !1;
      }
      for (const t of n) if (!i.includes(t)) return !1;
      return !0;
    }
    function un(t) {
      return null !== t && "object" == typeof t;
    }
    function dn(t) {
      const e = [];
      for (const [i, n] of Object.entries(t))
        Array.isArray(n)
          ? n.forEach((t) => {
              e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t));
            })
          : e.push(encodeURIComponent(i) + "=" + encodeURIComponent(n));
      return e.length ? "&" + e.join("&") : "";
    }
    function ln(t) {
      const e = {};
      return (
        t
          .replace(/^\?/, "")
          .split("&")
          .forEach((t) => {
            if (t) {
              const [i, n] = t.split("=");
              e[decodeURIComponent(i)] = decodeURIComponent(n);
            }
          }),
        e
      );
    }
    function fn(t) {
      const e = t.indexOf("?");
      if (!e) return "";
      const i = t.indexOf("#", e);
      return t.substring(e, i > 0 ? i : void 0);
    }
    class pn {
      constructor(t, e) {
        (this.observers = []),
          (this.unsubscribes = []),
          (this.observerCount = 0),
          (this.task = Promise.resolve()),
          (this.finalized = !1),
          (this.onNoObservers = e),
          this.task
            .then(() => {
              t(this);
            })
            .catch((t) => {
              this.error(t);
            });
      }
      next(t) {
        this.forEachObserver((e) => {
          e.next(t);
        });
      }
      error(t) {
        this.forEachObserver((e) => {
          e.error(t);
        }),
          this.close(t);
      }
      complete() {
        this.forEachObserver((t) => {
          t.complete();
        }),
          this.close();
      }
      subscribe(t, e, i) {
        let n;
        if (void 0 === t && void 0 === e && void 0 === i) throw new Error("Missing Observer.");
        (n = (function (t, e) {
          if ("object" != typeof t || null === t) return !1;
          for (const i of e) if (i in t && "function" == typeof t[i]) return !0;
          return !1;
        })(t, ["next", "error", "complete"])
          ? t
          : { next: t, error: e, complete: i }),
          void 0 === n.next && (n.next = vn),
          void 0 === n.error && (n.error = vn),
          void 0 === n.complete && (n.complete = vn);
        const s = this.unsubscribeOne.bind(this, this.observers.length);
        return (
          this.finalized &&
            this.task.then(() => {
              try {
                this.finalError ? n.error(this.finalError) : n.complete();
              } catch (t) {}
            }),
          this.observers.push(n),
          s
        );
      }
      unsubscribeOne(t) {
        void 0 !== this.observers &&
          void 0 !== this.observers[t] &&
          (delete this.observers[t],
          (this.observerCount -= 1),
          0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
      }
      forEachObserver(t) {
        if (!this.finalized) for (let e = 0; e < this.observers.length; e++) this.sendOne(e, t);
      }
      sendOne(t, e) {
        this.task.then(() => {
          if (void 0 !== this.observers && void 0 !== this.observers[t])
            try {
              e(this.observers[t]);
            } catch (t) {
              "undefined" != typeof console && console.error && console.error(t);
            }
        });
      }
      close(t) {
        this.finalized ||
          ((this.finalized = !0),
          void 0 !== t && (this.finalError = t),
          this.task.then(() => {
            (this.observers = void 0), (this.onNoObservers = void 0);
          }));
      }
    }
    function vn() {}
    function gn(t) {
      return t && t.ke ? t.ke : t;
    }
    class mn {
      constructor(t, e, i) {
        (this.name = t),
          (this.instanceFactory = e),
          (this.type = i),
          (this.multipleInstances = !1),
          (this.serviceProps = {}),
          (this.instantiationMode = "LAZY"),
          (this.onInstanceCreated = null);
      }
      setInstantiationMode(t) {
        return (this.instantiationMode = t), this;
      }
      setMultipleInstances(t) {
        return (this.multipleInstances = t), this;
      }
      setServiceProps(t) {
        return (this.serviceProps = t), this;
      }
      setInstanceCreatedCallback(t) {
        return (this.onInstanceCreated = t), this;
      }
    }
    const bn = "[DEFAULT]";
    class wn {
      constructor(t, e) {
        (this.name = t),
          (this.container = e),
          (this.component = null),
          (this.instances = new Map()),
          (this.instancesDeferred = new Map()),
          (this.instancesOptions = new Map()),
          (this.onInitCallbacks = new Map());
      }
      get(t) {
        const e = this.normalizeInstanceIdentifier(t);
        if (!this.instancesDeferred.has(e)) {
          const t = new sn();
          if ((this.instancesDeferred.set(e, t), this.isInitialized(e) || this.shouldAutoInitialize()))
            try {
              const i = this.getOrInitializeService({ instanceIdentifier: e });
              i && t.resolve(i);
            } catch (t) {}
        }
        return this.instancesDeferred.get(e).promise;
      }
      getImmediate(t) {
        var e;
        const i = this.normalizeInstanceIdentifier(null == t ? void 0 : t.identifier),
          n = null !== (e = null == t ? void 0 : t.optional) && void 0 !== e && e;
        if (!this.isInitialized(i) && !this.shouldAutoInitialize()) {
          if (n) return null;
          throw Error(`Service ${this.name} is not available`);
        }
        try {
          return this.getOrInitializeService({ instanceIdentifier: i });
        } catch (t) {
          if (n) return null;
          throw t;
        }
      }
      getComponent() {
        return this.component;
      }
      setComponent(t) {
        if (t.name !== this.name) throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
        if (this.component) throw Error(`Component for ${this.name} has already been provided`);
        if (((this.component = t), this.shouldAutoInitialize())) {
          if (
            (function (t) {
              return "EAGER" === t.instantiationMode;
            })(t)
          )
            try {
              this.getOrInitializeService({ instanceIdentifier: bn });
            } catch (t) {}
          for (const [t, e] of this.instancesDeferred.entries()) {
            const i = this.normalizeInstanceIdentifier(t);
            try {
              const t = this.getOrInitializeService({ instanceIdentifier: i });
              e.resolve(t);
            } catch (t) {}
          }
        }
      }
      clearInstance(t = "[DEFAULT]") {
        this.instancesDeferred.delete(t), this.instancesOptions.delete(t), this.instances.delete(t);
      }
      async delete() {
        const t = Array.from(this.instances.values());
        await Promise.all([
          ...t.filter((t) => "INTERNAL" in t).map((t) => t.INTERNAL.delete()),
          ...t.filter((t) => "Se" in t).map((t) => t.Se())
        ]);
      }
      isComponentSet() {
        return null != this.component;
      }
      isInitialized(t = "[DEFAULT]") {
        return this.instances.has(t);
      }
      getOptions(t = "[DEFAULT]") {
        return this.instancesOptions.get(t) || {};
      }
      initialize(t = {}) {
        const { options: e = {} } = t,
          i = this.normalizeInstanceIdentifier(t.instanceIdentifier);
        if (this.isInitialized(i)) throw Error(`${this.name}(${i}) has already been initialized`);
        if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
        const n = this.getOrInitializeService({ instanceIdentifier: i, options: e });
        for (const [t, e] of this.instancesDeferred.entries()) {
          i === this.normalizeInstanceIdentifier(t) && e.resolve(n);
        }
        return n;
      }
      onInit(t, e) {
        var i;
        const n = this.normalizeInstanceIdentifier(e),
          s = null !== (i = this.onInitCallbacks.get(n)) && void 0 !== i ? i : new Set();
        s.add(t), this.onInitCallbacks.set(n, s);
        const r = this.instances.get(n);
        return (
          r && t(r, n),
          () => {
            s.delete(t);
          }
        );
      }
      invokeOnInitCallbacks(t, e) {
        const i = this.onInitCallbacks.get(e);
        if (i)
          for (const n of i)
            try {
              n(t, e);
            } catch (t) {}
      }
      getOrInitializeService({ instanceIdentifier: t, options: e = {} }) {
        let i = this.instances.get(t);
        if (
          !i &&
          this.component &&
          ((i = this.component.instanceFactory(this.container, { instanceIdentifier: ((n = t), n === bn ? void 0 : n), options: e })),
          this.instances.set(t, i),
          this.instancesOptions.set(t, e),
          this.invokeOnInitCallbacks(i, t),
          this.component.onInstanceCreated)
        )
          try {
            this.component.onInstanceCreated(this.container, t, i);
          } catch (t) {}
        var n;
        return i || null;
      }
      normalizeInstanceIdentifier(t = "[DEFAULT]") {
        return this.component ? (this.component.multipleInstances ? t : bn) : t;
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode;
      }
    }
    class yn {
      constructor(t) {
        (this.name = t), (this.providers = new Map());
      }
      addComponent(t) {
        const e = this.getProvider(t.name);
        if (e.isComponentSet()) throw new Error(`Component ${t.name} has already been registered with ${this.name}`);
        e.setComponent(t);
      }
      addOrOverwriteComponent(t) {
        this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
      }
      getProvider(t) {
        if (this.providers.has(t)) return this.providers.get(t);
        const e = new wn(t, this);
        return this.providers.set(t, e), e;
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    }
    const _n = [];
    var In;
    !(function (t) {
      (t[(t.DEBUG = 0)] = "DEBUG"),
        (t[(t.VERBOSE = 1)] = "VERBOSE"),
        (t[(t.INFO = 2)] = "INFO"),
        (t[(t.WARN = 3)] = "WARN"),
        (t[(t.ERROR = 4)] = "ERROR"),
        (t[(t.SILENT = 5)] = "SILENT");
    })(In || (In = {}));
    const kn = { debug: In.DEBUG, verbose: In.VERBOSE, info: In.INFO, warn: In.WARN, error: In.ERROR, silent: In.SILENT },
      Sn = In.INFO,
      Tn = { [In.DEBUG]: "log", [In.VERBOSE]: "log", [In.INFO]: "info", [In.WARN]: "warn", [In.ERROR]: "error" },
      Cn = (t, e, ...i) => {
        if (e < t.logLevel) return;
        const n = new Date().toISOString(),
          s = Tn[e];
        if (!s) throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
        console[s](`[${n}]  ${t.name}:`, ...i);
      };
    class En {
      constructor(t) {
        (this.name = t), (this.Te = Sn), (this.Ce = Cn), (this.Ee = null), _n.push(this);
      }
      get logLevel() {
        return this.Te;
      }
      set logLevel(t) {
        if (!(t in In)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this.Te = t;
      }
      setLogLevel(t) {
        this.Te = "string" == typeof t ? kn[t] : t;
      }
      get logHandler() {
        return this.Ce;
      }
      set logHandler(t) {
        if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
        this.Ce = t;
      }
      get userLogHandler() {
        return this.Ee;
      }
      set userLogHandler(t) {
        this.Ee = t;
      }
      debug(...t) {
        this.Ee && this.Ee(this, In.DEBUG, ...t), this.Ce(this, In.DEBUG, ...t);
      }
      log(...t) {
        this.Ee && this.Ee(this, In.VERBOSE, ...t), this.Ce(this, In.VERBOSE, ...t);
      }
      info(...t) {
        this.Ee && this.Ee(this, In.INFO, ...t), this.Ce(this, In.INFO, ...t);
      }
      warn(...t) {
        this.Ee && this.Ee(this, In.WARN, ...t), this.Ce(this, In.WARN, ...t);
      }
      error(...t) {
        this.Ee && this.Ee(this, In.ERROR, ...t), this.Ce(this, In.ERROR, ...t);
      }
    }
    let On, An;
    const Pn = new WeakMap(),
      Nn = new WeakMap(),
      Dn = new WeakMap(),
      Rn = new WeakMap(),
      xn = new WeakMap();
    let Fn = {
      get(t, e, i) {
        if (t instanceof IDBTransaction) {
          if ("done" === e) return Nn.get(t);
          if ("objectStoreNames" === e) return t.objectStoreNames || Dn.get(t);
          if ("store" === e) return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0]);
        }
        return Ln(t[e]);
      },
      set: (t, e, i) => ((t[e] = i), !0),
      has: (t, e) => (t instanceof IDBTransaction && ("done" === e || "store" === e)) || e in t
    };
    function jn(t) {
      return t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype
        ? (An || (An = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t)
          ? function (...e) {
              return t.apply(Un(this), e), Ln(Pn.get(this));
            }
          : function (...e) {
              return Ln(t.apply(Un(this), e));
            }
        : function (e, ...i) {
            const n = t.call(Un(this), e, ...i);
            return Dn.set(n, e.sort ? e.sort() : [e]), Ln(n);
          };
    }
    function Mn(t) {
      return "function" == typeof t
        ? jn(t)
        : (t instanceof IDBTransaction &&
            (function (t) {
              if (Nn.has(t)) return;
              const e = new Promise((e, i) => {
                const n = () => {
                    t.removeEventListener("complete", s), t.removeEventListener("error", r), t.removeEventListener("abort", r);
                  },
                  s = () => {
                    e(), n();
                  },
                  r = () => {
                    i(t.error || new DOMException("AbortError", "AbortError")), n();
                  };
                t.addEventListener("complete", s), t.addEventListener("error", r), t.addEventListener("abort", r);
              });
              Nn.set(t, e);
            })(t),
          (e = t),
          (On || (On = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((t) => e instanceof t)
            ? new Proxy(t, Fn)
            : t);
      var e;
    }
    function Ln(t) {
      if (t instanceof IDBRequest)
        return (function (t) {
          const e = new Promise((e, i) => {
            const n = () => {
                t.removeEventListener("success", s), t.removeEventListener("error", r);
              },
              s = () => {
                e(Ln(t.result)), n();
              },
              r = () => {
                i(t.error), n();
              };
            t.addEventListener("success", s), t.addEventListener("error", r);
          });
          return (
            e
              .then((e) => {
                e instanceof IDBCursor && Pn.set(e, t);
              })
              .catch(() => {}),
            xn.set(e, t),
            e
          );
        })(t);
      if (Rn.has(t)) return Rn.get(t);
      const e = Mn(t);
      return e !== t && (Rn.set(t, e), xn.set(e, t)), e;
    }
    const Un = (t) => xn.get(t);
    const Bn = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Vn = ["put", "add", "delete", "clear"],
      $n = new Map();
    function Wn(t, e) {
      if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e) return;
      if ($n.get(e)) return $n.get(e);
      const i = e.replace(/FromIndex$/, ""),
        n = e !== i,
        s = Vn.includes(i);
      if (!(i in (n ? IDBIndex : IDBObjectStore).prototype) || (!s && !Bn.includes(i))) return;
      const r = async function (t, ...e) {
        const r = this.transaction(t, s ? "readwrite" : "readonly");
        let o = r.store;
        return n && (o = o.index(e.shift())), (await Promise.all([o[i](...e), s && r.done]))[0];
      };
      return $n.set(e, r), r;
    }
    Fn = ((t) => ({ ...t, get: (e, i, n) => Wn(e, i) || t.get(e, i, n), has: (e, i) => !!Wn(e, i) || t.has(e, i) }))(Fn);
    class Gn {
      constructor(t) {
        this.container = t;
      }
      getPlatformInfoString() {
        return this.container
          .getProviders()
          .map((t) => {
            if (
              (function (t) {
                const e = t.getComponent();
                return "VERSION" === (null == e ? void 0 : e.type);
              })(t)
            ) {
              const e = t.getImmediate();
              return `${e.library}/${e.version}`;
            }
            return null;
          })
          .filter((t) => t)
          .join(" ");
      }
    }
    const Hn = "@firebase/app",
      zn = "0.7.33",
      Jn = new En("@firebase/app"),
      qn = "[DEFAULT]",
      Kn = {
        [Hn]: "fire-core",
        "@firebase/app-compat": "fire-core-compat",
        "@firebase/analytics": "fire-analytics",
        "@firebase/analytics-compat": "fire-analytics-compat",
        "@firebase/app-check": "fire-app-check",
        "@firebase/app-check-compat": "fire-app-check-compat",
        "@firebase/auth": "fire-auth",
        "@firebase/auth-compat": "fire-auth-compat",
        "@firebase/database": "fire-rtdb",
        "@firebase/database-compat": "fire-rtdb-compat",
        "@firebase/functions": "fire-fn",
        "@firebase/functions-compat": "fire-fn-compat",
        "@firebase/installations": "fire-iid",
        "@firebase/installations-compat": "fire-iid-compat",
        "@firebase/messaging": "fire-fcm",
        "@firebase/messaging-compat": "fire-fcm-compat",
        "@firebase/performance": "fire-perf",
        "@firebase/performance-compat": "fire-perf-compat",
        "@firebase/remote-config": "fire-rc",
        "@firebase/remote-config-compat": "fire-rc-compat",
        "@firebase/storage": "fire-gcs",
        "@firebase/storage-compat": "fire-gcs-compat",
        "@firebase/firestore": "fire-fst",
        "@firebase/firestore-compat": "fire-fst-compat",
        "fire-js": "fire-js",
        firebase: "fire-js-all"
      },
      Xn = new Map(),
      Yn = new Map();
    function Zn(t, e) {
      try {
        t.container.addComponent(e);
      } catch (i) {
        Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, i);
      }
    }
    function Qn(t) {
      const e = t.name;
      if (Yn.has(e)) return Jn.debug(`There were multiple attempts to register component ${e}.`), !1;
      Yn.set(e, t);
      for (const e of Xn.values()) Zn(e, t);
      return !0;
    }
    function ts(t, e) {
      const i = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
      return i && i.triggerHeartbeat(), t.container.getProvider(e);
    }
    const es = new an("app", "Firebase", {
      "no-app": "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
      "bad-app-name": "Illegal App name: '{$appName}",
      "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument": "First argument to `onLog` must be null or a function.",
      "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
    });
    class is {
      constructor(t, e, i) {
        (this.Oe = !1),
          (this.Ae = Object.assign({}, t)),
          (this.Pe = Object.assign({}, e)),
          (this.Ne = e.name),
          (this.De = e.automaticDataCollectionEnabled),
          (this.Re = i),
          this.container.addComponent(new mn("app", () => this, "PUBLIC"));
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this.De;
      }
      set automaticDataCollectionEnabled(t) {
        this.checkDestroyed(), (this.De = t);
      }
      get name() {
        return this.checkDestroyed(), this.Ne;
      }
      get options() {
        return this.checkDestroyed(), this.Ae;
      }
      get config() {
        return this.checkDestroyed(), this.Pe;
      }
      get container() {
        return this.Re;
      }
      get isDeleted() {
        return this.Oe;
      }
      set isDeleted(t) {
        this.Oe = t;
      }
      checkDestroyed() {
        if (this.isDeleted) throw es.create("app-deleted", { appName: this.Ne });
      }
    }
    const ns = "9.10.0";
    function ss(t, e, i) {
      var n;
      let s = null !== (n = Kn[t]) && void 0 !== n ? n : t;
      i && (s += `-${i}`);
      const r = s.match(/\s|\//),
        o = e.match(/\s|\//);
      if (r || o) {
        const t = [`Unable to register library "${s}" with version "${e}":`];
        return (
          r && t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),
          r && o && t.push("and"),
          o && t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
          void Jn.warn(t.join(" "))
        );
      }
      Qn(new mn(`${s}-version`, () => ({ library: s, version: e }), "VERSION"));
    }
    const rs = "firebase-heartbeat-store";
    let os = null;
    function as() {
      return (
        os ||
          (os = (function (t, e, { blocked: i, upgrade: n, blocking: s, terminated: r } = {}) {
            const o = indexedDB.open(t, e),
              a = Ln(o);
            return (
              n &&
                o.addEventListener("upgradeneeded", (t) => {
                  n(Ln(o.result), t.oldVersion, t.newVersion, Ln(o.transaction));
                }),
              i && o.addEventListener("blocked", () => i()),
              a
                .then((t) => {
                  r && t.addEventListener("close", () => r()), s && t.addEventListener("versionchange", () => s());
                })
                .catch(() => {}),
              a
            );
          })("firebase-heartbeat-database", 1, {
            upgrade: (t, e) => {
              if (0 === e) t.createObjectStore(rs);
            }
          }).catch((t) => {
            throw es.create("idb-open", { originalErrorMessage: t.message });
          })),
        os
      );
    }
    async function cs(t, e) {
      var i;
      try {
        const i = (await as()).transaction(rs, "readwrite"),
          n = i.objectStore(rs);
        return await n.put(e, hs(t)), i.done;
      } catch (t) {
        if (t instanceof on) Jn.warn(t.message);
        else {
          const e = es.create("idb-set", { originalErrorMessage: null === (i = t) || void 0 === i ? void 0 : i.message });
          Jn.warn(e.message);
        }
      }
    }
    function hs(t) {
      return `${t.name}!${t.options.appId}`;
    }
    class us {
      constructor(t) {
        (this.container = t), (this.xe = null);
        const e = this.container.getProvider("app").getImmediate();
        (this.Fe = new ls(e)), (this.je = this.Fe.read().then((t) => ((this.xe = t), t)));
      }
      async triggerHeartbeat() {
        const t = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          e = ds();
        if (
          (null === this.xe && (this.xe = await this.je),
          this.xe.lastSentHeartbeatDate !== e && !this.xe.heartbeats.some((t) => t.date === e))
        )
          return (
            this.xe.heartbeats.push({ date: e, agent: t }),
            (this.xe.heartbeats = this.xe.heartbeats.filter((t) => {
              const e = new Date(t.date).valueOf();
              return Date.now() - e <= 2592e6;
            })),
            this.Fe.overwrite(this.xe)
          );
      }
      async getHeartbeatsHeader() {
        if ((null === this.xe && (await this.je), null === this.xe || 0 === this.xe.heartbeats.length)) return "";
        const t = ds(),
          { heartbeatsToSend: e, unsentEntries: i } = (function (t, e = 1024) {
            const i = [];
            let n = t.slice();
            for (const s of t) {
              const t = i.find((t) => t.agent === s.agent);
              if (t) {
                if ((t.dates.push(s.date), fs(i) > e)) {
                  t.dates.pop();
                  break;
                }
              } else if ((i.push({ agent: s.agent, dates: [s.date] }), fs(i) > e)) {
                i.pop();
                break;
              }
              n = n.slice(1);
            }
            return { heartbeatsToSend: i, unsentEntries: n };
          })(this.xe.heartbeats),
          n = en(JSON.stringify({ version: 2, heartbeats: e }));
        return (
          (this.xe.lastSentHeartbeatDate = t),
          i.length > 0
            ? ((this.xe.heartbeats = i), await this.Fe.overwrite(this.xe))
            : ((this.xe.heartbeats = []), this.Fe.overwrite(this.xe)),
          n
        );
      }
    }
    function ds() {
      return new Date().toISOString().substring(0, 10);
    }
    class ls {
      constructor(t) {
        (this.app = t), (this.Me = this.runIndexedDBEnvironmentCheck());
      }
      async runIndexedDBEnvironmentCheck() {
        return (
          "object" == typeof indexedDB &&
          new Promise((t, e) => {
            try {
              let i = !0;
              const n = "validate-browser-context-for-indexeddb-analytics-module",
                s = self.indexedDB.open(n);
              (s.onsuccess = () => {
                s.result.close(), i || self.indexedDB.deleteDatabase(n), t(!0);
              }),
                (s.onupgradeneeded = () => {
                  i = !1;
                }),
                (s.onerror = () => {
                  var t;
                  e((null === (t = s.error) || void 0 === t ? void 0 : t.message) || "");
                });
            } catch (t) {
              e(t);
            }
          })
            .then(() => !0)
            .catch(() => !1)
        );
      }
      async read() {
        if (await this.Me) {
          return (
            (await (async function (t) {
              var e;
              try {
                return (await as()).transaction(rs).objectStore(rs).get(hs(t));
              } catch (t) {
                if (t instanceof on) Jn.warn(t.message);
                else {
                  const i = es.create("idb-get", { originalErrorMessage: null === (e = t) || void 0 === e ? void 0 : e.message });
                  Jn.warn(i.message);
                }
              }
            })(this.app)) || { heartbeats: [] }
          );
        }
        return { heartbeats: [] };
      }
      async overwrite(t) {
        var e;
        if (await this.Me) {
          const i = await this.read();
          return cs(this.app, {
            lastSentHeartbeatDate: null !== (e = t.lastSentHeartbeatDate) && void 0 !== e ? e : i.lastSentHeartbeatDate,
            heartbeats: t.heartbeats
          });
        }
      }
      async add(t) {
        var e;
        if (await this.Me) {
          const i = await this.read();
          return cs(this.app, {
            lastSentHeartbeatDate: null !== (e = t.lastSentHeartbeatDate) && void 0 !== e ? e : i.lastSentHeartbeatDate,
            heartbeats: [...i.heartbeats, ...t.heartbeats]
          });
        }
      }
    }
    function fs(t) {
      return en(JSON.stringify({ version: 2, heartbeats: t })).length;
    }
    var ps;
    (ps = ""),
      Qn(new mn("platform-logger", (t) => new Gn(t), "PRIVATE")),
      Qn(new mn("heartbeat", (t) => new us(t), "PRIVATE")),
      ss(Hn, zn, ps),
      ss(Hn, zn, "esm2017"),
      ss("fire-js", "");
    function vs(t, e) {
      var i = {};
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
      if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
        var s = 0;
        for (n = Object.getOwnPropertySymbols(t); s < n.length; s++)
          e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
      }
      return i;
    }
    Object.create;
    Object.create;
    function gs() {
      return {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      };
    }
    const ms = gs,
      bs = new an("auth", "Firebase", {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      }),
      ws = new En("@firebase/auth");
    function ys(t, ...e) {
      ws.logLevel <= In.ERROR && ws.error(`Auth (9.10.0): ${t}`, ...e);
    }
    function _s(t, ...e) {
      throw Ts(t, ...e);
    }
    function Is(t, ...e) {
      return Ts(t, ...e);
    }
    function ks(t, e, i) {
      const n = Object.assign(Object.assign({}, ms()), { [e]: i });
      return new an("auth", "Firebase", n).create(e, { appName: t.name });
    }
    function Ss(t, e, i) {
      if (!(e instanceof i))
        throw (
          (i.name !== e.constructor.name && _s(t, "argument-error"),
          ks(
            t,
            "argument-error",
            `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
          ))
        );
    }
    function Ts(t, ...e) {
      if ("string" != typeof t) {
        const i = e[0],
          n = [...e.slice(1)];
        return n[0] && (n[0].appName = t.name), t.Le.create(i, ...n);
      }
      return bs.create(t, ...e);
    }
    function Cs(t, e, ...i) {
      if (!t) throw Ts(e, ...i);
    }
    function Es(t) {
      const e = "INTERNAL ASSERTION FAILED: " + t;
      throw (ys(e), new Error(e));
    }
    function Os(t, e) {
      t || Es(e);
    }
    const As = new Map();
    function Ps(t) {
      Os(t instanceof Function, "Expected a class definition");
      let e = As.get(t);
      return e ? (Os(e instanceof t, "Instance stored in cache mismatched with class"), e) : ((e = new t()), As.set(t, e), e);
    }
    function Ns() {
      var t;
      return ("undefined" != typeof self && (null === (t = self.location) || void 0 === t ? void 0 : t.href)) || "";
    }
    function Ds() {
      return "http:" === Rs() || "https:" === Rs();
    }
    function Rs() {
      var t;
      return ("undefined" != typeof self && (null === (t = self.location) || void 0 === t ? void 0 : t.protocol)) || null;
    }
    function xs() {
      return (
        !(
          "undefined" != typeof navigator &&
          navigator &&
          "onLine" in navigator &&
          "boolean" == typeof navigator.onLine &&
          (Ds() ||
            (function () {
              const t = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
              return "object" == typeof t && void 0 !== t.id;
            })() ||
            "connection" in navigator)
        ) || navigator.onLine
      );
    }
    class Fs {
      constructor(t, e) {
        (this.shortDelay = t),
          (this.longDelay = e),
          Os(e > t, "Short delay should be less than long delay!"),
          (this.isMobile =
            ("undefined" != typeof window &&
              !!(window.cordova || window.phonegap || window.PhoneGap) &&
              /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rn())) ||
            ("object" == typeof navigator && "ReactNative" === navigator.product));
      }
      get() {
        return xs() ? (this.isMobile ? this.longDelay : this.shortDelay) : Math.min(5e3, this.shortDelay);
      }
    }
    function js(t, e) {
      Os(t.emulator, "Emulator should always be set here");
      const { url: i } = t.emulator;
      return e ? `${i}${e.startsWith("/") ? e.slice(1) : e}` : i;
    }
    class Ms {
      static initialize(t, e, i) {
        (this.fetchImpl = t), e && (this.headersImpl = e), i && (this.responseImpl = i);
      }
      static fetch() {
        return this.fetchImpl
          ? this.fetchImpl
          : "undefined" != typeof self && "fetch" in self
          ? self.fetch
          : void Es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static headers() {
        return this.headersImpl
          ? this.headersImpl
          : "undefined" != typeof self && "Headers" in self
          ? self.Headers
          : void Es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static response() {
        return this.responseImpl
          ? this.responseImpl
          : "undefined" != typeof self && "Response" in self
          ? self.Response
          : void Es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
    }
    const Ls = {
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_PASSWORD: "wrong-password",
        MISSING_PASSWORD: "internal-error",
        EMAIL_EXISTS: "email-already-in-use",
        PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
        INVALID_IDP_RESPONSE: "invalid-credential",
        INVALID_PENDING_TOKEN: "invalid-credential",
        FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
        MISSING_REQ_TYPE: "internal-error",
        EMAIL_NOT_FOUND: "user-not-found",
        RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
        EXPIRED_OOB_CODE: "expired-action-code",
        INVALID_OOB_CODE: "invalid-action-code",
        MISSING_OOB_CODE: "internal-error",
        CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
        INVALID_ID_TOKEN: "invalid-user-token",
        TOKEN_EXPIRED: "user-token-expired",
        USER_NOT_FOUND: "user-token-expired",
        TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
        INVALID_CODE: "invalid-verification-code",
        INVALID_SESSION_INFO: "invalid-verification-id",
        INVALID_TEMPORARY_PROOF: "invalid-credential",
        MISSING_SESSION_INFO: "missing-verification-id",
        SESSION_EXPIRED: "code-expired",
        MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
        UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
        INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
        ADMIN_ONLY_OPERATION: "admin-restricted-operation",
        INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
        MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
        MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
        MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
        SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
        SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
        BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error"
      },
      Us = new Fs(3e4, 6e4);
    function Bs(t, e) {
      return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
    }
    async function Vs(t, e, i, n, s = {}) {
      return $s(t, s, async () => {
        let s = {},
          r = {};
        n && ("GET" === e ? (r = n) : (s = { body: JSON.stringify(n) }));
        const o = dn(Object.assign({ key: t.config.apiKey }, r)).slice(1),
          a = await t.Ue();
        return (
          (a["Content-Type"] = "application/json"),
          t.languageCode && (a["X-Firebase-Locale"] = t.languageCode),
          Ms.fetch()(Gs(t, t.config.apiHost, i, o), Object.assign({ method: e, headers: a, referrerPolicy: "no-referrer" }, s))
        );
      });
    }
    async function $s(t, e, i) {
      t.Be = !1;
      const n = Object.assign(Object.assign({}, Ls), e);
      try {
        const e = new Hs(t),
          s = await Promise.race([i(), e.promise]);
        e.clearNetworkTimeout();
        const r = await s.json();
        if ("needConfirmation" in r) throw zs(t, "account-exists-with-different-credential", r);
        if (s.ok && !("errorMessage" in r)) return r;
        {
          const e = s.ok ? r.errorMessage : r.error.message,
            [i, o] = e.split(" : ");
          if ("FEDERATED_USER_ID_ALREADY_LINKED" === i) throw zs(t, "credential-already-in-use", r);
          if ("EMAIL_EXISTS" === i) throw zs(t, "email-already-in-use", r);
          if ("USER_DISABLED" === i) throw zs(t, "user-disabled", r);
          const a = n[i] || i.toLowerCase().replace(/[_\s]+/g, "-");
          if (o) throw ks(t, a, o);
          _s(t, a);
        }
      } catch (e) {
        if (e instanceof on) throw e;
        _s(t, "network-request-failed");
      }
    }
    async function Ws(t, e, i, n, s = {}) {
      const r = await Vs(t, e, i, n, s);
      return "mfaPendingCredential" in r && _s(t, "multi-factor-auth-required", { Ve: r }), r;
    }
    function Gs(t, e, i, n) {
      const s = `${e}${i}?${n}`;
      return t.config.emulator ? js(t.config, s) : `${t.config.apiScheme}://${s}`;
    }
    class Hs {
      constructor(t) {
        (this.auth = t),
          (this.timer = null),
          (this.promise = new Promise((t, e) => {
            this.timer = setTimeout(() => e(Is(this.auth, "network-request-failed")), Us.get());
          }));
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    }
    function zs(t, e, i) {
      const n = { appName: t.name };
      i.email && (n.email = i.email), i.phoneNumber && (n.phoneNumber = i.phoneNumber);
      const s = Is(t, e, n);
      return (s.customData.$e = i), s;
    }
    function Js(t) {
      if (t)
        try {
          const e = new Date(Number(t));
          if (!isNaN(e.getTime())) return e.toUTCString();
        } catch (t) {}
    }
    function qs(t) {
      return 1e3 * Number(t);
    }
    function Ks(t) {
      var e;
      const [i, n, s] = t.split(".");
      if (void 0 === i || void 0 === n || void 0 === s) return ys("JWT malformed, contained fewer than 3 sections"), null;
      try {
        const t = nn(n);
        return t ? JSON.parse(t) : (ys("Failed to decode base64 JWT payload"), null);
      } catch (t) {
        return ys("Caught error parsing JWT payload as JSON", null === (e = t) || void 0 === e ? void 0 : e.toString()), null;
      }
    }
    async function Xs(t, e, i = !1) {
      if (i) return e;
      try {
        return await e;
      } catch (e) {
        throw (
          (e instanceof on &&
            (function ({ code: t }) {
              return "auth/user-disabled" === t || "auth/user-token-expired" === t;
            })(e) &&
            t.auth.currentUser === t &&
            (await t.auth.signOut()),
          e)
        );
      }
    }
    class Ys {
      constructor(t) {
        (this.user = t), (this.isRunning = !1), (this.timerId = null), (this.errorBackoff = 3e4);
      }
      We() {
        this.isRunning || ((this.isRunning = !0), this.schedule());
      }
      Ge() {
        this.isRunning && ((this.isRunning = !1), null !== this.timerId && clearTimeout(this.timerId));
      }
      getInterval(t) {
        var e;
        if (t) {
          const t = this.errorBackoff;
          return (this.errorBackoff = Math.min(2 * this.errorBackoff, 96e4)), t;
        }
        {
          this.errorBackoff = 3e4;
          const t = (null !== (e = this.user.stsTokenManager.expirationTime) && void 0 !== e ? e : 0) - Date.now() - 3e5;
          return Math.max(0, t);
        }
      }
      schedule(t = !1) {
        if (!this.isRunning) return;
        const e = this.getInterval(t);
        this.timerId = setTimeout(async () => {
          await this.iteration();
        }, e);
      }
      async iteration() {
        var t;
        try {
          await this.user.getIdToken(!0);
        } catch (e) {
          return void ("auth/network-request-failed" === (null === (t = e) || void 0 === t ? void 0 : t.code) && this.schedule(!0));
        }
        this.schedule();
      }
    }
    class Zs {
      constructor(t, e) {
        (this.createdAt = t), (this.lastLoginAt = e), this.He();
      }
      He() {
        (this.lastSignInTime = Js(this.lastLoginAt)), (this.creationTime = Js(this.createdAt));
      }
      ze(t) {
        (this.createdAt = t.createdAt), (this.lastLoginAt = t.lastLoginAt), this.He();
      }
      toJSON() {
        return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
      }
    }
    async function Qs(t) {
      var e;
      const i = t.auth,
        n = await t.getIdToken(),
        s = await Xs(
          t,
          (async function (t, e) {
            return Vs(t, "POST", "/v1/accounts:lookup", e);
          })(i, { idToken: n })
        );
      Cs(null == s ? void 0 : s.users.length, i, "internal-error");
      const r = s.users[0];
      t.Je(r);
      const o = (null === (e = r.providerUserInfo) || void 0 === e ? void 0 : e.length)
        ? r.providerUserInfo.map((t) => {
            var { providerId: e } = t,
              i = vs(t, ["providerId"]);
            return {
              providerId: e,
              uid: i.rawId || "",
              displayName: i.displayName || null,
              email: i.email || null,
              phoneNumber: i.phoneNumber || null,
              photoURL: i.photoUrl || null
            };
          })
        : [];
      const a = ((c = t.providerData), (h = o), [...c.filter((t) => !h.some((e) => e.providerId === t.providerId)), ...h]);
      var c, h;
      const u = t.isAnonymous,
        d = !((t.email && r.passwordHash) || (null == a ? void 0 : a.length)),
        l = !!u && d,
        f = {
          uid: r.localId,
          displayName: r.displayName || null,
          photoURL: r.photoUrl || null,
          email: r.email || null,
          emailVerified: r.emailVerified || !1,
          phoneNumber: r.phoneNumber || null,
          tenantId: r.tenantId || null,
          providerData: a,
          metadata: new Zs(r.createdAt, r.lastLoginAt),
          isAnonymous: l
        };
      Object.assign(t, f);
    }
    class tr {
      constructor() {
        (this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
      }
      updateFromServerResponse(t) {
        Cs(t.idToken, "internal-error"), Cs(void 0 !== t.idToken, "internal-error"), Cs(void 0 !== t.refreshToken, "internal-error");
        const e =
          "expiresIn" in t && void 0 !== t.expiresIn
            ? Number(t.expiresIn)
            : (function (t) {
                const e = Ks(t);
                return (
                  Cs(e, "internal-error"),
                  Cs(void 0 !== e.exp, "internal-error"),
                  Cs(void 0 !== e.iat, "internal-error"),
                  Number(e.exp) - Number(e.iat)
                );
              })(t.idToken);
        this.updateTokensAndExpiration(t.idToken, t.refreshToken, e);
      }
      async getToken(t, e = !1) {
        return (
          Cs(!this.accessToken || this.refreshToken, t, "user-token-expired"),
          e || !this.accessToken || this.isExpired
            ? this.refreshToken
              ? (await this.refresh(t, this.refreshToken), this.accessToken)
              : null
            : this.accessToken
        );
      }
      clearRefreshToken() {
        this.refreshToken = null;
      }
      async refresh(t, e) {
        const {
          accessToken: i,
          refreshToken: n,
          expiresIn: s
        } = await (async function (t, e) {
          const i = await $s(t, {}, async () => {
            const i = dn({ grant_type: "refresh_token", refresh_token: e }).slice(1),
              { tokenApiHost: n, apiKey: s } = t.config,
              r = Gs(t, n, "/v1/token", `key=${s}`),
              o = await t.Ue();
            return (o["Content-Type"] = "application/x-www-form-urlencoded"), Ms.fetch()(r, { method: "POST", headers: o, body: i });
          });
          return { accessToken: i.access_token, expiresIn: i.expires_in, refreshToken: i.refresh_token };
        })(t, e);
        this.updateTokensAndExpiration(i, n, Number(s));
      }
      updateTokensAndExpiration(t, e, i) {
        (this.refreshToken = e || null), (this.accessToken = t || null), (this.expirationTime = Date.now() + 1e3 * i);
      }
      static fromJSON(t, e) {
        const { refreshToken: i, accessToken: n, expirationTime: s } = e,
          r = new tr();
        return (
          i && (Cs("string" == typeof i, "internal-error", { appName: t }), (r.refreshToken = i)),
          n && (Cs("string" == typeof n, "internal-error", { appName: t }), (r.accessToken = n)),
          s && (Cs("number" == typeof s, "internal-error", { appName: t }), (r.expirationTime = s)),
          r
        );
      }
      toJSON() {
        return { refreshToken: this.refreshToken, accessToken: this.accessToken, expirationTime: this.expirationTime };
      }
      qe(t) {
        (this.accessToken = t.accessToken), (this.refreshToken = t.refreshToken), (this.expirationTime = t.expirationTime);
      }
      Ke() {
        return Object.assign(new tr(), this.toJSON());
      }
      Xe() {
        return Es("not implemented");
      }
    }
    function er(t, e) {
      Cs("string" == typeof t || void 0 === t, "internal-error", { appName: e });
    }
    class ir {
      constructor(t) {
        var { uid: e, auth: i, stsTokenManager: n } = t,
          s = vs(t, ["uid", "auth", "stsTokenManager"]);
        (this.providerId = "firebase"),
          (this.proactiveRefresh = new Ys(this)),
          (this.reloadUserInfo = null),
          (this.reloadListener = null),
          (this.uid = e),
          (this.auth = i),
          (this.stsTokenManager = n),
          (this.accessToken = n.accessToken),
          (this.displayName = s.displayName || null),
          (this.email = s.email || null),
          (this.emailVerified = s.emailVerified || !1),
          (this.phoneNumber = s.phoneNumber || null),
          (this.photoURL = s.photoURL || null),
          (this.isAnonymous = s.isAnonymous || !1),
          (this.tenantId = s.tenantId || null),
          (this.providerData = s.providerData ? [...s.providerData] : []),
          (this.metadata = new Zs(s.createdAt || void 0, s.lastLoginAt || void 0));
      }
      async getIdToken(t) {
        const e = await Xs(this, this.stsTokenManager.getToken(this.auth, t));
        return (
          Cs(e, this.auth, "internal-error"),
          this.accessToken !== e && ((this.accessToken = e), await this.auth.Ye(this), this.auth.Ze(this)),
          e
        );
      }
      getIdTokenResult(t) {
        return (async function (t, e = !1) {
          const i = gn(t),
            n = await i.getIdToken(e),
            s = Ks(n);
          Cs(s && s.exp && s.auth_time && s.iat, i.auth, "internal-error");
          const r = "object" == typeof s.firebase ? s.firebase : void 0,
            o = null == r ? void 0 : r.sign_in_provider;
          return {
            claims: s,
            token: n,
            authTime: Js(qs(s.auth_time)),
            issuedAtTime: Js(qs(s.iat)),
            expirationTime: Js(qs(s.exp)),
            signInProvider: o || null,
            signInSecondFactor: (null == r ? void 0 : r.sign_in_second_factor) || null
          };
        })(this, t);
      }
      reload() {
        return (async function (t) {
          const e = gn(t);
          await Qs(e), await e.auth.Ye(e), e.auth.Ze(e);
        })(this);
      }
      qe(t) {
        this !== t &&
          (Cs(this.uid === t.uid, this.auth, "internal-error"),
          (this.displayName = t.displayName),
          (this.photoURL = t.photoURL),
          (this.email = t.email),
          (this.emailVerified = t.emailVerified),
          (this.phoneNumber = t.phoneNumber),
          (this.isAnonymous = t.isAnonymous),
          (this.tenantId = t.tenantId),
          (this.providerData = t.providerData.map((t) => Object.assign({}, t))),
          this.metadata.ze(t.metadata),
          this.stsTokenManager.qe(t.stsTokenManager));
      }
      Ke(t) {
        return new ir(Object.assign(Object.assign({}, this), { auth: t, stsTokenManager: this.stsTokenManager.Ke() }));
      }
      Qe(t) {
        Cs(!this.reloadListener, this.auth, "internal-error"),
          (this.reloadListener = t),
          this.reloadUserInfo && (this.Je(this.reloadUserInfo), (this.reloadUserInfo = null));
      }
      Je(t) {
        this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
      }
      ti() {
        this.proactiveRefresh.We();
      }
      ei() {
        this.proactiveRefresh.Ge();
      }
      async ii(t, e = !1) {
        let i = !1;
        t.idToken && t.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(t), (i = !0)),
          e && (await Qs(this)),
          await this.auth.Ye(this),
          i && this.auth.Ze(this);
      }
      async delete() {
        const t = await this.getIdToken();
        return (
          await Xs(
            this,
            (async function (t, e) {
              return Vs(t, "POST", "/v1/accounts:delete", e);
            })(this.auth, { idToken: t })
          ),
          this.stsTokenManager.clearRefreshToken(),
          this.auth.signOut()
        );
      }
      toJSON() {
        return Object.assign(
          Object.assign(
            {
              uid: this.uid,
              email: this.email || void 0,
              emailVerified: this.emailVerified,
              displayName: this.displayName || void 0,
              isAnonymous: this.isAnonymous,
              photoURL: this.photoURL || void 0,
              phoneNumber: this.phoneNumber || void 0,
              tenantId: this.tenantId || void 0,
              providerData: this.providerData.map((t) => Object.assign({}, t)),
              stsTokenManager: this.stsTokenManager.toJSON(),
              ni: this.ni
            },
            this.metadata.toJSON()
          ),
          { apiKey: this.auth.config.apiKey, appName: this.auth.name }
        );
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static si(t, e) {
        var i, n, s, r, o, a, c, h;
        const u = null !== (i = e.displayName) && void 0 !== i ? i : void 0,
          d = null !== (n = e.email) && void 0 !== n ? n : void 0,
          l = null !== (s = e.phoneNumber) && void 0 !== s ? s : void 0,
          f = null !== (r = e.photoURL) && void 0 !== r ? r : void 0,
          p = null !== (o = e.tenantId) && void 0 !== o ? o : void 0,
          v = null !== (a = e.ni) && void 0 !== a ? a : void 0,
          g = null !== (c = e.createdAt) && void 0 !== c ? c : void 0,
          m = null !== (h = e.lastLoginAt) && void 0 !== h ? h : void 0,
          { uid: b, emailVerified: w, isAnonymous: y, providerData: _, stsTokenManager: I } = e;
        Cs(b && I, t, "internal-error");
        const k = tr.fromJSON(this.name, I);
        Cs("string" == typeof b, t, "internal-error"),
          er(u, t.name),
          er(d, t.name),
          Cs("boolean" == typeof w, t, "internal-error"),
          Cs("boolean" == typeof y, t, "internal-error"),
          er(l, t.name),
          er(f, t.name),
          er(p, t.name),
          er(v, t.name),
          er(g, t.name),
          er(m, t.name);
        const S = new ir({
          uid: b,
          auth: t,
          email: d,
          emailVerified: w,
          displayName: u,
          isAnonymous: y,
          photoURL: f,
          phoneNumber: l,
          tenantId: p,
          stsTokenManager: k,
          createdAt: g,
          lastLoginAt: m
        });
        return _ && Array.isArray(_) && (S.providerData = _.map((t) => Object.assign({}, t))), v && (S.ni = v), S;
      }
      static async ri(t, e, i = !1) {
        const n = new tr();
        n.updateFromServerResponse(e);
        const s = new ir({ uid: e.localId, auth: t, stsTokenManager: n, isAnonymous: i });
        return await Qs(s), s;
      }
    }
    class nr {
      constructor() {
        (this.type = "NONE"), (this.storage = {});
      }
      async oi() {
        return !0;
      }
      async ai(t, e) {
        this.storage[t] = e;
      }
      async ci(t) {
        const e = this.storage[t];
        return void 0 === e ? null : e;
      }
      async hi(t) {
        delete this.storage[t];
      }
      ui(t, e) {}
      di(t, e) {}
    }
    nr.type = "NONE";
    const sr = nr;
    function rr(t, e, i) {
      return `firebase:${t}:${e}:${i}`;
    }
    class or {
      constructor(t, e, i) {
        (this.persistence = t), (this.auth = e), (this.userKey = i);
        const { config: n, name: s } = this.auth;
        (this.fullUserKey = rr(this.userKey, n.apiKey, s)),
          (this.fullPersistenceKey = rr("persistence", n.apiKey, s)),
          (this.boundEventHandler = e.li.bind(e)),
          this.persistence.ui(this.fullUserKey, this.boundEventHandler);
      }
      setCurrentUser(t) {
        return this.persistence.ai(this.fullUserKey, t.toJSON());
      }
      async getCurrentUser() {
        const t = await this.persistence.ci(this.fullUserKey);
        return t ? ir.si(this.auth, t) : null;
      }
      removeCurrentUser() {
        return this.persistence.hi(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence.ai(this.fullPersistenceKey, this.persistence.type);
      }
      async setPersistence(t) {
        if (this.persistence === t) return;
        const e = await this.getCurrentUser();
        return await this.removeCurrentUser(), (this.persistence = t), e ? this.setCurrentUser(e) : void 0;
      }
      delete() {
        this.persistence.di(this.fullUserKey, this.boundEventHandler);
      }
      static async create(t, e, i = "authUser") {
        if (!e.length) return new or(Ps(sr), t, i);
        const n = (
          await Promise.all(
            e.map(async (t) => {
              if (await t.oi()) return t;
            })
          )
        ).filter((t) => t);
        let s = n[0] || Ps(sr);
        const r = rr(i, t.config.apiKey, t.name);
        let o = null;
        for (const i of e)
          try {
            const e = await i.ci(r);
            if (e) {
              const n = ir.si(t, e);
              i !== s && (o = n), (s = i);
              break;
            }
          } catch (t) {}
        const a = n.filter((t) => t.fi);
        return s.fi && a.length
          ? ((s = a[0]),
            o && (await s.ai(r, o.toJSON())),
            await Promise.all(
              e.map(async (t) => {
                if (t !== s)
                  try {
                    await t.hi(r);
                  } catch (t) {}
              })
            ),
            new or(s, t, i))
          : new or(s, t, i);
      }
    }
    function ar(t) {
      const e = t.toLowerCase();
      if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/")) return "Opera";
      if (dr(e)) return "IEMobile";
      if (e.includes("msie") || e.includes("trident/")) return "IE";
      if (e.includes("edge/")) return "Edge";
      if (cr(e)) return "Firefox";
      if (e.includes("silk/")) return "Silk";
      if (fr(e)) return "Blackberry";
      if (pr(e)) return "Webos";
      if (hr(e)) return "Safari";
      if ((e.includes("chrome/") || ur(e)) && !e.includes("edge/")) return "Chrome";
      if (lr(e)) return "Android";
      {
        const e = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
          i = t.match(e);
        if (2 === (null == i ? void 0 : i.length)) return i[1];
      }
      return "Other";
    }
    function cr(t = rn()) {
      return /firefox\//i.test(t);
    }
    function hr(t = rn()) {
      const e = t.toLowerCase();
      return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
    }
    function ur(t = rn()) {
      return /crios\//i.test(t);
    }
    function dr(t = rn()) {
      return /iemobile/i.test(t);
    }
    function lr(t = rn()) {
      return /android/i.test(t);
    }
    function fr(t = rn()) {
      return /blackberry/i.test(t);
    }
    function pr(t = rn()) {
      return /webos/i.test(t);
    }
    function vr(t = rn()) {
      return /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t));
    }
    function gr() {
      return (
        (function () {
          const t = rn();
          return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
        })() && 10 === document.documentMode
      );
    }
    function mr(t = rn()) {
      return vr(t) || lr(t) || pr(t) || fr(t) || /windows phone/i.test(t) || dr(t);
    }
    function br(t, e = []) {
      let i;
      switch (t) {
        case "Browser":
          i = ar(rn());
          break;
        case "Worker":
          i = `${ar(rn())}-${t}`;
          break;
        default:
          i = t;
      }
      return `${i}/JsCore/9.10.0/${e.length ? e.join(",") : "FirebaseCore-web"}`;
    }
    class wr {
      constructor(t) {
        (this.auth = t), (this.queue = []);
      }
      pushCallback(t, e) {
        const i = (e) =>
          new Promise((i, n) => {
            try {
              i(t(e));
            } catch (t) {
              n(t);
            }
          });
        (i.onAbort = e), this.queue.push(i);
        const n = this.queue.length - 1;
        return () => {
          this.queue[n] = () => Promise.resolve();
        };
      }
      async runMiddleware(t) {
        var e;
        if (this.auth.currentUser === t) return;
        const i = [];
        try {
          for (const e of this.queue) await e(t), e.onAbort && i.push(e.onAbort);
        } catch (t) {
          i.reverse();
          for (const t of i)
            try {
              t();
            } catch (t) {}
          throw this.auth.Le.create("login-blocked", { originalMessage: null === (e = t) || void 0 === e ? void 0 : e.message });
        }
      }
    }
    class yr {
      constructor(t, e, i) {
        (this.app = t),
          (this.heartbeatServiceProvider = e),
          (this.config = i),
          (this.currentUser = null),
          (this.emulatorConfig = null),
          (this.operations = Promise.resolve()),
          (this.authStateSubscription = new Ir(this)),
          (this.idTokenSubscription = new Ir(this)),
          (this.beforeStateQueue = new wr(this)),
          (this.redirectUser = null),
          (this.isProactiveRefreshEnabled = !1),
          (this.Be = !0),
          (this.pi = !1),
          (this.vi = !1),
          (this.gi = null),
          (this.mi = null),
          (this.Le = bs),
          (this.lastNotifiedUid = void 0),
          (this.languageCode = null),
          (this.tenantId = null),
          (this.settings = { appVerificationDisabledForTesting: !1 }),
          (this.frameworks = []),
          (this.name = t.name),
          (this.clientVersion = i.sdkClientVersion);
      }
      bi(t, e) {
        return (
          e && (this.mi = Ps(e)),
          (this.gi = this.queue(async () => {
            var i, n;
            if (!this.vi && ((this.persistenceManager = await or.create(this, t)), !this.vi)) {
              if (null === (i = this.mi) || void 0 === i ? void 0 : i.wi)
                try {
                  await this.mi.yi(this);
                } catch (t) {}
              await this.initializeCurrentUser(e),
                (this.lastNotifiedUid = (null === (n = this.currentUser) || void 0 === n ? void 0 : n.uid) || null),
                this.vi || (this.pi = !0);
            }
          })),
          this.gi
        );
      }
      async li() {
        if (this.vi) return;
        const t = await this.assertedPersistence.getCurrentUser();
        return this.currentUser || t
          ? this.currentUser && t && this.currentUser.uid === t.uid
            ? (this._i.qe(t), void (await this.currentUser.getIdToken()))
            : void (await this.Ii(t, !0))
          : void 0;
      }
      async initializeCurrentUser(t) {
        var e;
        const i = await this.assertedPersistence.getCurrentUser();
        let n = i,
          s = !1;
        if (t && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const i = null === (e = this.redirectUser) || void 0 === e ? void 0 : e.ni,
            r = null == n ? void 0 : n.ni,
            o = await this.tryRedirectSignIn(t);
          (i && i !== r) || !(null == o ? void 0 : o.user) || ((n = o.user), (s = !0));
        }
        if (!n) return this.directlySetCurrentUser(null);
        if (!n.ni) {
          if (s)
            try {
              await this.beforeStateQueue.runMiddleware(n);
            } catch (t) {
              (n = i), this.mi.ki(this, () => Promise.reject(t));
            }
          return n ? this.reloadAndSetCurrentUserOrClear(n) : this.directlySetCurrentUser(null);
        }
        return (
          Cs(this.mi, this, "argument-error"),
          await this.getOrInitRedirectPersistenceManager(),
          this.redirectUser && this.redirectUser.ni === n.ni ? this.directlySetCurrentUser(n) : this.reloadAndSetCurrentUserOrClear(n)
        );
      }
      async tryRedirectSignIn(t) {
        let e = null;
        try {
          e = await this.mi.Si(this, t, !0);
        } catch (t) {
          await this.Ti(null);
        }
        return e;
      }
      async reloadAndSetCurrentUserOrClear(t) {
        var e;
        try {
          await Qs(t);
        } catch (t) {
          if ("auth/network-request-failed" !== (null === (e = t) || void 0 === e ? void 0 : e.code))
            return this.directlySetCurrentUser(null);
        }
        return this.directlySetCurrentUser(t);
      }
      useDeviceLanguage() {
        this.languageCode = (function () {
          if ("undefined" == typeof navigator) return null;
          const t = navigator;
          return (t.languages && t.languages[0]) || t.language || null;
        })();
      }
      async Se() {
        this.vi = !0;
      }
      async updateCurrentUser(t) {
        const e = t ? gn(t) : null;
        return e && Cs(e.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this.Ii(e && e.Ke(this));
      }
      async Ii(t, e = !1) {
        if (!this.vi)
          return (
            t && Cs(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
            e || (await this.beforeStateQueue.runMiddleware(t)),
            this.queue(async () => {
              await this.directlySetCurrentUser(t), this.notifyAuthListeners();
            })
          );
      }
      async signOut() {
        return (
          await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this.mi) && (await this.Ti(null)),
          this.Ii(null, !0)
        );
      }
      setPersistence(t) {
        return this.queue(async () => {
          await this.assertedPersistence.setPersistence(Ps(t));
        });
      }
      Ci() {
        return this.assertedPersistence.persistence.type;
      }
      Ei(t) {
        this.Le = new an("auth", "Firebase", t());
      }
      onAuthStateChanged(t, e, i) {
        return this.registerStateListener(this.authStateSubscription, t, e, i);
      }
      beforeAuthStateChanged(t, e) {
        return this.beforeStateQueue.pushCallback(t, e);
      }
      onIdTokenChanged(t, e, i) {
        return this.registerStateListener(this.idTokenSubscription, t, e, i);
      }
      toJSON() {
        var t;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser: null === (t = this._i) || void 0 === t ? void 0 : t.toJSON()
        };
      }
      async Ti(t, e) {
        const i = await this.getOrInitRedirectPersistenceManager(e);
        return null === t ? i.removeCurrentUser() : i.setCurrentUser(t);
      }
      async getOrInitRedirectPersistenceManager(t) {
        if (!this.redirectPersistenceManager) {
          const e = (t && Ps(t)) || this.mi;
          Cs(e, this, "argument-error"),
            (this.redirectPersistenceManager = await or.create(this, [Ps(e.Oi)], "redirectUser")),
            (this.redirectUser = await this.redirectPersistenceManager.getCurrentUser());
        }
        return this.redirectPersistenceManager;
      }
      async Ai(t) {
        var e, i;
        return (
          this.pi && (await this.queue(async () => {})),
          (null === (e = this._i) || void 0 === e ? void 0 : e.ni) === t
            ? this._i
            : (null === (i = this.redirectUser) || void 0 === i ? void 0 : i.ni) === t
            ? this.redirectUser
            : null
        );
      }
      async Ye(t) {
        if (t === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(t));
      }
      Ze(t) {
        t === this.currentUser && this.notifyAuthListeners();
      }
      Pi() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
      }
      ti() {
        (this.isProactiveRefreshEnabled = !0), this.currentUser && this._i.ti();
      }
      ei() {
        (this.isProactiveRefreshEnabled = !1), this.currentUser && this._i.ei();
      }
      get _i() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        var t, e;
        if (!this.pi) return;
        this.idTokenSubscription.next(this.currentUser);
        const i = null !== (e = null === (t = this.currentUser) || void 0 === t ? void 0 : t.uid) && void 0 !== e ? e : null;
        this.lastNotifiedUid !== i && ((this.lastNotifiedUid = i), this.authStateSubscription.next(this.currentUser));
      }
      registerStateListener(t, e, i, n) {
        if (this.vi) return () => {};
        const s = "function" == typeof e ? e : e.next.bind(e),
          r = this.pi ? Promise.resolve() : this.gi;
        return (
          Cs(r, this, "internal-error"),
          r.then(() => s(this.currentUser)),
          "function" == typeof e ? t.addObserver(e, i, n) : t.addObserver(e)
        );
      }
      async directlySetCurrentUser(t) {
        this.currentUser && this.currentUser !== t && this._i.ei(),
          t && this.isProactiveRefreshEnabled && t.ti(),
          (this.currentUser = t),
          t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser();
      }
      queue(t) {
        return (this.operations = this.operations.then(t, t)), this.operations;
      }
      get assertedPersistence() {
        return Cs(this.persistenceManager, this, "internal-error"), this.persistenceManager;
      }
      Ni(t) {
        t &&
          !this.frameworks.includes(t) &&
          (this.frameworks.push(t), this.frameworks.sort(), (this.clientVersion = br(this.config.clientPlatform, this.Di())));
      }
      Di() {
        return this.frameworks;
      }
      async Ue() {
        var t;
        const e = { "X-Client-Version": this.clientVersion };
        this.app.options.appId && (e["X-Firebase-gmpid"] = this.app.options.appId);
        const i = await (null === (t = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) || void 0 === t
          ? void 0
          : t.getHeartbeatsHeader());
        return i && (e["X-Firebase-Client"] = i), e;
      }
    }
    function _r(t) {
      return gn(t);
    }
    class Ir {
      constructor(t) {
        (this.auth = t),
          (this.observer = null),
          (this.addObserver = (function (t, e) {
            const i = new pn(t, e);
            return i.subscribe.bind(i);
          })((t) => (this.observer = t)));
      }
      get next() {
        return Cs(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
      }
    }
    class kr {
      constructor(t, e) {
        (this.providerId = t), (this.signInMethod = e);
      }
      toJSON() {
        return Es("not implemented");
      }
      Ri(t) {
        return Es("not implemented");
      }
      xi(t, e) {
        return Es("not implemented");
      }
      Fi(t) {
        return Es("not implemented");
      }
    }
    async function Sr(t, e) {
      return Vs(t, "POST", "/v1/accounts:update", e);
    }
    async function Tr(t, e) {
      return Vs(t, "POST", "/v1/accounts:sendOobCode", Bs(t, e));
    }
    class Cr extends kr {
      constructor(t, e, i, n = null) {
        super("password", i), (this.ji = t), (this.Mi = e), (this.Li = n);
      }
      static Ui(t, e) {
        return new Cr(t, e, "password");
      }
      static Bi(t, e, i = null) {
        return new Cr(t, e, "emailLink", i);
      }
      toJSON() {
        return { email: this.ji, password: this.Mi, signInMethod: this.signInMethod, tenantId: this.Li };
      }
      static fromJSON(t) {
        const e = "string" == typeof t ? JSON.parse(t) : t;
        if ((null == e ? void 0 : e.email) && (null == e ? void 0 : e.password)) {
          if ("password" === e.signInMethod) return this.Ui(e.email, e.password);
          if ("emailLink" === e.signInMethod) return this.Bi(e.email, e.password, e.tenantId);
        }
        return null;
      }
      async Ri(t) {
        switch (this.signInMethod) {
          case "password":
            return (async function (t, e) {
              return Ws(t, "POST", "/v1/accounts:signInWithPassword", Bs(t, e));
            })(t, { returnSecureToken: !0, email: this.ji, password: this.Mi });
          case "emailLink":
            return (async function (t, e) {
              return Ws(t, "POST", "/v1/accounts:signInWithEmailLink", Bs(t, e));
            })(t, { email: this.ji, oobCode: this.Mi });
          default:
            _s(t, "internal-error");
        }
      }
      async xi(t, e) {
        switch (this.signInMethod) {
          case "password":
            return Sr(t, { idToken: e, returnSecureToken: !0, email: this.ji, password: this.Mi });
          case "emailLink":
            return (async function (t, e) {
              return Ws(t, "POST", "/v1/accounts:signInWithEmailLink", Bs(t, e));
            })(t, { idToken: e, email: this.ji, oobCode: this.Mi });
          default:
            _s(t, "internal-error");
        }
      }
      Fi(t) {
        return this.Ri(t);
      }
    }
    async function Er(t, e) {
      return Ws(t, "POST", "/v1/accounts:signInWithIdp", Bs(t, e));
    }
    class Or extends kr {
      constructor() {
        super(...arguments), (this.pendingToken = null);
      }
      static Vi(t) {
        const e = new Or(t.providerId, t.signInMethod);
        return (
          t.idToken || t.accessToken
            ? (t.idToken && (e.idToken = t.idToken),
              t.accessToken && (e.accessToken = t.accessToken),
              t.nonce && !t.pendingToken && (e.nonce = t.nonce),
              t.pendingToken && (e.pendingToken = t.pendingToken))
            : t.oauthToken && t.oauthTokenSecret
            ? ((e.accessToken = t.oauthToken), (e.secret = t.oauthTokenSecret))
            : _s("argument-error"),
          e
        );
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod
        };
      }
      static fromJSON(t) {
        const e = "string" == typeof t ? JSON.parse(t) : t,
          { providerId: i, signInMethod: n } = e,
          s = vs(e, ["providerId", "signInMethod"]);
        if (!i || !n) return null;
        const r = new Or(i, n);
        return (
          (r.idToken = s.idToken || void 0),
          (r.accessToken = s.accessToken || void 0),
          (r.secret = s.secret),
          (r.nonce = s.nonce),
          (r.pendingToken = s.pendingToken || null),
          r
        );
      }
      Ri(t) {
        return Er(t, this.buildRequest());
      }
      xi(t, e) {
        const i = this.buildRequest();
        return (i.idToken = e), Er(t, i);
      }
      Fi(t) {
        const e = this.buildRequest();
        return (e.autoCreate = !1), Er(t, e);
      }
      buildRequest() {
        const t = { requestUri: "http://localhost", returnSecureToken: !0 };
        if (this.pendingToken) t.pendingToken = this.pendingToken;
        else {
          const e = {};
          this.idToken && (e.id_token = this.idToken),
            this.accessToken && (e.access_token = this.accessToken),
            this.secret && (e.oauth_token_secret = this.secret),
            (e.providerId = this.providerId),
            this.nonce && !this.pendingToken && (e.nonce = this.nonce),
            (t.postBody = dn(e));
        }
        return t;
      }
    }
    const Ar = { USER_NOT_FOUND: "user-not-found" };
    class Pr extends kr {
      constructor(t) {
        super("phone", "phone"), (this.params = t);
      }
      static $i(t, e) {
        return new Pr({ verificationId: t, verificationCode: e });
      }
      static Wi(t, e) {
        return new Pr({ phoneNumber: t, temporaryProof: e });
      }
      Ri(t) {
        return (async function (t, e) {
          return Ws(t, "POST", "/v1/accounts:signInWithPhoneNumber", Bs(t, e));
        })(t, this.Gi());
      }
      xi(t, e) {
        return (async function (t, e) {
          const i = await Ws(t, "POST", "/v1/accounts:signInWithPhoneNumber", Bs(t, e));
          if (i.temporaryProof) throw zs(t, "account-exists-with-different-credential", i);
          return i;
        })(t, Object.assign({ idToken: e }, this.Gi()));
      }
      Fi(t) {
        return (async function (t, e) {
          return Ws(
            t,
            "POST",
            "/v1/accounts:signInWithPhoneNumber",
            Bs(t, Object.assign(Object.assign({}, e), { operation: "REAUTH" })),
            Ar
          );
        })(t, this.Gi());
      }
      Gi() {
        const { temporaryProof: t, phoneNumber: e, verificationId: i, verificationCode: n } = this.params;
        return t && e ? { temporaryProof: t, phoneNumber: e } : { sessionInfo: i, code: n };
      }
      toJSON() {
        const t = { providerId: this.providerId };
        return (
          this.params.phoneNumber && (t.phoneNumber = this.params.phoneNumber),
          this.params.temporaryProof && (t.temporaryProof = this.params.temporaryProof),
          this.params.verificationCode && (t.verificationCode = this.params.verificationCode),
          this.params.verificationId && (t.verificationId = this.params.verificationId),
          t
        );
      }
      static fromJSON(t) {
        "string" == typeof t && (t = JSON.parse(t));
        const { verificationId: e, verificationCode: i, phoneNumber: n, temporaryProof: s } = t;
        return i || e || n || s ? new Pr({ verificationId: e, verificationCode: i, phoneNumber: n, temporaryProof: s }) : null;
      }
    }
    class Nr {
      constructor(t) {
        var e, i, n, s, r, o;
        const a = ln(fn(t)),
          c = null !== (e = a.apiKey) && void 0 !== e ? e : null,
          h = null !== (i = a.oobCode) && void 0 !== i ? i : null,
          u = (function (t) {
            switch (t) {
              case "recoverEmail":
                return "RECOVER_EMAIL";
              case "resetPassword":
                return "PASSWORD_RESET";
              case "signIn":
                return "EMAIL_SIGNIN";
              case "verifyEmail":
                return "VERIFY_EMAIL";
              case "verifyAndChangeEmail":
                return "VERIFY_AND_CHANGE_EMAIL";
              case "revertSecondFactorAddition":
                return "REVERT_SECOND_FACTOR_ADDITION";
              default:
                return null;
            }
          })(null !== (n = a.mode) && void 0 !== n ? n : null);
        Cs(c && h && u, "argument-error"),
          (this.apiKey = c),
          (this.operation = u),
          (this.code = h),
          (this.continueUrl = null !== (s = a.continueUrl) && void 0 !== s ? s : null),
          (this.languageCode = null !== (r = a.languageCode) && void 0 !== r ? r : null),
          (this.tenantId = null !== (o = a.tenantId) && void 0 !== o ? o : null);
      }
      static parseLink(t) {
        const e = (function (t) {
          const e = ln(fn(t)).link,
            i = e ? ln(fn(e)).deep_link_id : null,
            n = ln(fn(t)).deep_link_id;
          return (n ? ln(fn(n)).link : null) || n || i || e || t;
        })(t);
        try {
          return new Nr(e);
        } catch (t) {
          return null;
        }
      }
    }
    class Dr {
      constructor() {
        this.providerId = Dr.PROVIDER_ID;
      }
      static credential(t, e) {
        return Cr.Ui(t, e);
      }
      static credentialWithLink(t, e) {
        const i = Nr.parseLink(e);
        return Cs(i, "argument-error"), Cr.Bi(t, i.code, i.tenantId);
      }
    }
    (Dr.PROVIDER_ID = "password"), (Dr.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"), (Dr.EMAIL_LINK_SIGN_IN_METHOD = "emailLink");
    class Rr {
      constructor(t) {
        (this.providerId = t), (this.defaultLanguageCode = null), (this.customParameters = {});
      }
      setDefaultLanguage(t) {
        this.defaultLanguageCode = t;
      }
      setCustomParameters(t) {
        return (this.customParameters = t), this;
      }
      getCustomParameters() {
        return this.customParameters;
      }
    }
    class xr extends Rr {
      constructor() {
        super(...arguments), (this.scopes = []);
      }
      addScope(t) {
        return this.scopes.includes(t) || this.scopes.push(t), this;
      }
      getScopes() {
        return [...this.scopes];
      }
    }
    class Fr extends xr {
      constructor() {
        super("facebook.com");
      }
      static credential(t) {
        return Or.Vi({ providerId: Fr.PROVIDER_ID, signInMethod: Fr.FACEBOOK_SIGN_IN_METHOD, accessToken: t });
      }
      static credentialFromResult(t) {
        return Fr.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return Fr.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ $e: t }) {
        if (!t || !("oauthAccessToken" in t)) return null;
        if (!t.oauthAccessToken) return null;
        try {
          return Fr.credential(t.oauthAccessToken);
        } catch (t) {
          return null;
        }
      }
    }
    (Fr.FACEBOOK_SIGN_IN_METHOD = "facebook.com"), (Fr.PROVIDER_ID = "facebook.com");
    class jr extends xr {
      constructor() {
        super("google.com"), this.addScope("profile");
      }
      static credential(t, e) {
        return Or.Vi({ providerId: jr.PROVIDER_ID, signInMethod: jr.GOOGLE_SIGN_IN_METHOD, idToken: t, accessToken: e });
      }
      static credentialFromResult(t) {
        return jr.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return jr.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ $e: t }) {
        if (!t) return null;
        const { oauthIdToken: e, oauthAccessToken: i } = t;
        if (!e && !i) return null;
        try {
          return jr.credential(e, i);
        } catch (t) {
          return null;
        }
      }
    }
    (jr.GOOGLE_SIGN_IN_METHOD = "google.com"), (jr.PROVIDER_ID = "google.com");
    class Mr extends xr {
      constructor() {
        super("github.com");
      }
      static credential(t) {
        return Or.Vi({ providerId: Mr.PROVIDER_ID, signInMethod: Mr.GITHUB_SIGN_IN_METHOD, accessToken: t });
      }
      static credentialFromResult(t) {
        return Mr.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return Mr.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ $e: t }) {
        if (!t || !("oauthAccessToken" in t)) return null;
        if (!t.oauthAccessToken) return null;
        try {
          return Mr.credential(t.oauthAccessToken);
        } catch (t) {
          return null;
        }
      }
    }
    (Mr.GITHUB_SIGN_IN_METHOD = "github.com"), (Mr.PROVIDER_ID = "github.com");
    class Lr extends xr {
      constructor() {
        super("twitter.com");
      }
      static credential(t, e) {
        return Or.Vi({ providerId: Lr.PROVIDER_ID, signInMethod: Lr.TWITTER_SIGN_IN_METHOD, oauthToken: t, oauthTokenSecret: e });
      }
      static credentialFromResult(t) {
        return Lr.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return Lr.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ $e: t }) {
        if (!t) return null;
        const { oauthAccessToken: e, oauthTokenSecret: i } = t;
        if (!e || !i) return null;
        try {
          return Lr.credential(e, i);
        } catch (t) {
          return null;
        }
      }
    }
    async function Ur(t, e) {
      return Ws(t, "POST", "/v1/accounts:signUp", Bs(t, e));
    }
    (Lr.TWITTER_SIGN_IN_METHOD = "twitter.com"), (Lr.PROVIDER_ID = "twitter.com");
    class Br {
      constructor(t) {
        (this.user = t.user), (this.providerId = t.providerId), (this.$e = t.$e), (this.operationType = t.operationType);
      }
      static async ri(t, e, i, n = !1) {
        const s = await ir.ri(t, i, n),
          r = Vr(i);
        return new Br({ user: s, providerId: r, $e: i, operationType: e });
      }
      static async Hi(t, e, i) {
        await t.ii(i, !0);
        const n = Vr(i);
        return new Br({ user: t, providerId: n, $e: i, operationType: e });
      }
    }
    function Vr(t) {
      return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
    }
    class $r extends on {
      constructor(t, e, i, n) {
        var s;
        super(e.code, e.message),
          (this.operationType = i),
          (this.user = n),
          Object.setPrototypeOf(this, $r.prototype),
          (this.customData = {
            appName: t.name,
            tenantId: null !== (s = t.tenantId) && void 0 !== s ? s : void 0,
            Ve: e.customData.Ve,
            operationType: i
          });
      }
      static zi(t, e, i, n) {
        return new $r(t, e, i, n);
      }
    }
    function Wr(t, e, i, n) {
      return ("reauthenticate" === e ? i.Fi(t) : i.Ri(t)).catch((i) => {
        if ("auth/multi-factor-auth-required" === i.code) throw $r.zi(t, i, e, n);
        throw i;
      });
    }
    async function Gr(t, e, i = !1) {
      const n = await Xs(t, e.xi(t.auth, await t.getIdToken()), i);
      return Br.Hi(t, "link", n);
    }
    async function Hr(t, e, i = !1) {
      var n;
      const { auth: s } = t,
        r = "reauthenticate";
      try {
        const n = await Xs(t, Wr(s, r, e, t), i);
        Cs(n.idToken, s, "internal-error");
        const o = Ks(n.idToken);
        Cs(o, s, "internal-error");
        const { sub: a } = o;
        return Cs(t.uid === a, s, "user-mismatch"), Br.Hi(t, r, n);
      } catch (t) {
        throw ("auth/user-not-found" === (null === (n = t) || void 0 === n ? void 0 : n.code) && _s(s, "user-mismatch"), t);
      }
    }
    async function zr(t, e, i = !1) {
      const n = "signIn",
        s = await Wr(t, n, e),
        r = await Br.ri(t, n, s);
      return i || (await t.Ii(r.user)), r;
    }
    async function Jr(t, e) {
      return zr(_r(t), e);
    }
    function qr(t, e, i) {
      var n;
      Cs((null === (n = i.url) || void 0 === n ? void 0 : n.length) > 0, t, "invalid-continue-uri"),
        Cs(void 0 === i.dynamicLinkDomain || i.dynamicLinkDomain.length > 0, t, "invalid-dynamic-link-domain"),
        (e.continueUrl = i.url),
        (e.dynamicLinkDomain = i.dynamicLinkDomain),
        (e.canHandleCodeInApp = i.handleCodeInApp),
        i.iOS && (Cs(i.iOS.bundleId.length > 0, t, "missing-ios-bundle-id"), (e.iOSBundleId = i.iOS.bundleId)),
        i.android &&
          (Cs(i.android.packageName.length > 0, t, "missing-android-pkg-name"),
          (e.androidInstallApp = i.android.installApp),
          (e.androidMinimumVersionCode = i.android.minimumVersion),
          (e.androidPackageName = i.android.packageName));
    }
    async function Kr(t, e, i) {
      const n = gn(t),
        s = { requestType: "PASSWORD_RESET", email: e };
      i && qr(n, s, i),
        await (async function (t, e) {
          return Tr(t, e);
        })(n, s);
    }
    async function Xr(t, e, i) {
      const n = _r(t),
        s = await Ur(n, { returnSecureToken: !0, email: e, password: i }),
        r = await Br.ri(n, "signIn", s);
      return await n.Ii(r.user), r;
    }
    function Yr(t, e, i) {
      return Jr(gn(t), Dr.credential(e, i));
    }
    async function Zr(t, e) {
      const i = { identifier: e, continueUri: Ds() ? Ns() : "http://localhost" },
        { signinMethods: n } = await (async function (t, e) {
          return Vs(t, "POST", "/v1/accounts:createAuthUri", Bs(t, e));
        })(gn(t), i);
      return n || [];
    }
    class Qr {
      constructor(t, e, i = {}) {
        (this.isNewUser = t), (this.providerId = e), (this.profile = i);
      }
    }
    class to extends Qr {
      constructor(t, e, i, n) {
        super(t, e, i), (this.username = n);
      }
    }
    class eo extends Qr {
      constructor(t, e) {
        super(t, "facebook.com", e);
      }
    }
    class io extends to {
      constructor(t, e) {
        super(t, "github.com", e, "string" == typeof (null == e ? void 0 : e.login) ? (null == e ? void 0 : e.login) : null);
      }
    }
    class no extends Qr {
      constructor(t, e) {
        super(t, "google.com", e);
      }
    }
    class so extends to {
      constructor(t, e, i) {
        super(t, "twitter.com", e, i);
      }
    }
    function ro(t) {
      const { user: e, $e: i } = t;
      return e.isAnonymous && !i
        ? { providerId: null, isNewUser: !1, profile: null }
        : (function (t) {
            var e, i;
            if (!t) return null;
            const { providerId: n } = t,
              s = t.rawUserInfo ? JSON.parse(t.rawUserInfo) : {},
              r = t.isNewUser || "identitytoolkit#SignupNewUserResponse" === t.kind;
            if (!n && (null == t ? void 0 : t.idToken)) {
              const n =
                null === (i = null === (e = Ks(t.idToken)) || void 0 === e ? void 0 : e.firebase) || void 0 === i
                  ? void 0
                  : i.sign_in_provider;
              if (n) return new Qr(r, "anonymous" !== n && "custom" !== n ? n : null);
            }
            if (!n) return null;
            switch (n) {
              case "facebook.com":
                return new eo(r, s);
              case "github.com":
                return new io(r, s);
              case "google.com":
                return new no(r, s);
              case "twitter.com":
                return new so(r, s, t.screenName || null);
              case "custom":
              case "anonymous":
                return new Qr(r, null);
              default:
                return new Qr(r, n, s);
            }
          })(i);
    }
    new WeakMap();
    const oo = "__sak";
    class ao {
      constructor(t, e) {
        (this.storageRetriever = t), (this.type = e);
      }
      oi() {
        try {
          return this.storage ? (this.storage.setItem(oo, "1"), this.storage.removeItem(oo), Promise.resolve(!0)) : Promise.resolve(!1);
        } catch (t) {
          return Promise.resolve(!1);
        }
      }
      ai(t, e) {
        return this.storage.setItem(t, JSON.stringify(e)), Promise.resolve();
      }
      ci(t) {
        const e = this.storage.getItem(t);
        return Promise.resolve(e ? JSON.parse(e) : null);
      }
      hi(t) {
        return this.storage.removeItem(t), Promise.resolve();
      }
      get storage() {
        return this.storageRetriever();
      }
    }
    class co extends ao {
      constructor() {
        super(() => window.localStorage, "LOCAL"),
          (this.boundEventHandler = (t, e) => this.onStorageEvent(t, e)),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.safariLocalStorageNotSynced =
            (function () {
              const t = rn();
              return hr(t) || vr(t);
            })() &&
            (function () {
              try {
                return !(!window || window === window.top);
              } catch (t) {
                return !1;
              }
            })()),
          (this.fallbackToPolling = mr()),
          (this.fi = !0);
      }
      forAllChangedKeys(t) {
        for (const e of Object.keys(this.listeners)) {
          const i = this.storage.getItem(e),
            n = this.localCache[e];
          i !== n && t(e, n, i);
        }
      }
      onStorageEvent(t, e = !1) {
        if (!t.key)
          return void this.forAllChangedKeys((t, e, i) => {
            this.notifyListeners(t, i);
          });
        const i = t.key;
        if ((e ? this.detachListener() : this.stopPolling(), this.safariLocalStorageNotSynced)) {
          const n = this.storage.getItem(i);
          if (t.newValue !== n) null !== t.newValue ? this.storage.setItem(i, t.newValue) : this.storage.removeItem(i);
          else if (this.localCache[i] === t.newValue && !e) return;
        }
        const n = () => {
            const t = this.storage.getItem(i);
            (e || this.localCache[i] !== t) && this.notifyListeners(i, t);
          },
          s = this.storage.getItem(i);
        gr() && s !== t.newValue && t.newValue !== t.oldValue ? setTimeout(n, 10) : n();
      }
      notifyListeners(t, e) {
        this.localCache[t] = e;
        const i = this.listeners[t];
        if (i) for (const t of Array.from(i)) t(e ? JSON.parse(e) : e);
      }
      startPolling() {
        this.stopPolling(),
          (this.pollTimer = setInterval(() => {
            this.forAllChangedKeys((t, e, i) => {
              this.onStorageEvent(new StorageEvent("storage", { key: t, oldValue: e, newValue: i }), !0);
            });
          }, 1e3));
      }
      stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
      }
      ui(t, e) {
        0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
          this.listeners[t] || ((this.listeners[t] = new Set()), (this.localCache[t] = this.storage.getItem(t))),
          this.listeners[t].add(e);
      }
      di(t, e) {
        this.listeners[t] && (this.listeners[t].delete(e), 0 === this.listeners[t].size && delete this.listeners[t]),
          0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling());
      }
      async ai(t, e) {
        await super.ai(t, e), (this.localCache[t] = JSON.stringify(e));
      }
      async ci(t) {
        const e = await super.ci(t);
        return (this.localCache[t] = JSON.stringify(e)), e;
      }
      async hi(t) {
        await super.hi(t), delete this.localCache[t];
      }
    }
    co.type = "LOCAL";
    const ho = co;
    class uo extends ao {
      constructor() {
        super(() => window.sessionStorage, "SESSION");
      }
      ui(t, e) {}
      di(t, e) {}
    }
    uo.type = "SESSION";
    const lo = uo;
    class fo {
      constructor(t) {
        (this.eventTarget = t), (this.handlersMap = {}), (this.boundEventHandler = this.handleEvent.bind(this));
      }
      static Ji(t) {
        const e = this.receivers.find((e) => e.isListeningto(t));
        if (e) return e;
        const i = new fo(t);
        return this.receivers.push(i), i;
      }
      isListeningto(t) {
        return this.eventTarget === t;
      }
      async handleEvent(t) {
        const e = t,
          { eventId: i, eventType: n, data: s } = e.data,
          r = this.handlersMap[n];
        if (!(null == r ? void 0 : r.size)) return;
        e.ports[0].postMessage({ status: "ack", eventId: i, eventType: n });
        const o = Array.from(r).map(async (t) => t(e.origin, s)),
          a = await (function (t) {
            return Promise.all(
              t.map(async (t) => {
                try {
                  return { fulfilled: !0, value: await t };
                } catch (t) {
                  return { fulfilled: !1, reason: t };
                }
              })
            );
          })(o);
        e.ports[0].postMessage({ status: "done", eventId: i, eventType: n, response: a });
      }
      qi(t, e) {
        0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler),
          this.handlersMap[t] || (this.handlersMap[t] = new Set()),
          this.handlersMap[t].add(e);
      }
      Ki(t, e) {
        this.handlersMap[t] && e && this.handlersMap[t].delete(e),
          (e && 0 !== this.handlersMap[t].size) || delete this.handlersMap[t],
          0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler);
      }
    }
    function po(t = "", e = 10) {
      let i = "";
      for (let t = 0; t < e; t++) i += Math.floor(10 * Math.random());
      return t + i;
    }
    fo.receivers = [];
    class vo {
      constructor(t) {
        (this.target = t), (this.handlers = new Set());
      }
      removeMessageHandler(t) {
        t.messageChannel && (t.messageChannel.port1.removeEventListener("message", t.onMessage), t.messageChannel.port1.close()),
          this.handlers.delete(t);
      }
      async Xi(t, e, i = 50) {
        const n = "undefined" != typeof MessageChannel ? new MessageChannel() : null;
        if (!n) throw new Error("connection_unavailable");
        let s, r;
        return new Promise((o, a) => {
          const c = po("", 20);
          n.port1.start();
          const h = setTimeout(() => {
            a(new Error("unsupported_event"));
          }, i);
          (r = {
            messageChannel: n,
            onMessage(t) {
              const e = t;
              if (e.data.eventId === c)
                switch (e.data.status) {
                  case "ack":
                    clearTimeout(h),
                      (s = setTimeout(() => {
                        a(new Error("timeout"));
                      }, 3e3));
                    break;
                  case "done":
                    clearTimeout(s), o(e.data.response);
                    break;
                  default:
                    clearTimeout(h), clearTimeout(s), a(new Error("invalid_response"));
                }
            }
          }),
            this.handlers.add(r),
            n.port1.addEventListener("message", r.onMessage),
            this.target.postMessage({ eventType: t, eventId: c, data: e }, [n.port2]);
        }).finally(() => {
          r && this.removeMessageHandler(r);
        });
      }
    }
    function go() {
      return window;
    }
    function mo() {
      return void 0 !== go().WorkerGlobalScope && "function" == typeof go().importScripts;
    }
    const bo = "firebaseLocalStorageDb",
      wo = "firebaseLocalStorage",
      yo = "fbase_key";
    class _o {
      constructor(t) {
        this.request = t;
      }
      toPromise() {
        return new Promise((t, e) => {
          this.request.addEventListener("success", () => {
            t(this.request.result);
          }),
            this.request.addEventListener("error", () => {
              e(this.request.error);
            });
        });
      }
    }
    function Io(t, e) {
      return t.transaction([wo], e ? "readwrite" : "readonly").objectStore(wo);
    }
    function ko() {
      const t = indexedDB.open(bo, 1);
      return new Promise((e, i) => {
        t.addEventListener("error", () => {
          i(t.error);
        }),
          t.addEventListener("upgradeneeded", () => {
            const e = t.result;
            try {
              e.createObjectStore(wo, { keyPath: yo });
            } catch (t) {
              i(t);
            }
          }),
          t.addEventListener("success", async () => {
            const i = t.result;
            i.objectStoreNames.contains(wo)
              ? e(i)
              : (i.close(),
                await (function () {
                  const t = indexedDB.deleteDatabase(bo);
                  return new _o(t).toPromise();
                })(),
                e(await ko()));
          });
      });
    }
    async function So(t, e, i) {
      const n = Io(t, !0).put({ [yo]: e, value: i });
      return new _o(n).toPromise();
    }
    function To(t, e) {
      const i = Io(t, !0).delete(e);
      return new _o(i).toPromise();
    }
    class Co {
      constructor() {
        (this.type = "LOCAL"),
          (this.fi = !0),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.pendingWrites = 0),
          (this.receiver = null),
          (this.sender = null),
          (this.serviceWorkerReceiverAvailable = !1),
          (this.activeServiceWorker = null),
          (this.Yi = this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {}
          ));
      }
      async Zi() {
        return this.db || (this.db = await ko()), this.db;
      }
      async Qi(t) {
        let e = 0;
        for (;;)
          try {
            const e = await this.Zi();
            return await t(e);
          } catch (t) {
            if (e++ > 3) throw t;
            this.db && (this.db.close(), (this.db = void 0));
          }
      }
      async initializeServiceWorkerMessaging() {
        return mo() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        (this.receiver = fo.Ji(mo() ? self : null)),
          this.receiver.qi("keyChanged", async (t, e) => ({ keyProcessed: (await this.tn()).includes(e.key) })),
          this.receiver.qi("ping", async (t, e) => ["keyChanged"]);
      }
      async initializeSender() {
        var t, e;
        if (
          ((this.activeServiceWorker = await (async function () {
            if (!(null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker)) return null;
            try {
              return (await navigator.serviceWorker.ready).active;
            } catch (t) {
              return null;
            }
          })()),
          !this.activeServiceWorker)
        )
          return;
        this.sender = new vo(this.activeServiceWorker);
        const i = await this.sender.Xi("ping", {}, 800);
        i &&
          (null === (t = i[0]) || void 0 === t ? void 0 : t.fulfilled) &&
          (null === (e = i[0]) || void 0 === e ? void 0 : e.value.includes("keyChanged")) &&
          (this.serviceWorkerReceiverAvailable = !0);
      }
      async notifyServiceWorker(t) {
        var e;
        if (
          this.sender &&
          this.activeServiceWorker &&
          ((null === (e = null === navigator || void 0 === navigator ? void 0 : navigator.serviceWorker) || void 0 === e
            ? void 0
            : e.controller) || null) === this.activeServiceWorker
        )
          try {
            await this.sender.Xi("keyChanged", { key: t }, this.serviceWorkerReceiverAvailable ? 800 : 50);
          } catch (e) {}
      }
      async oi() {
        try {
          if (!indexedDB) return !1;
          const t = await ko();
          return await So(t, oo, "1"), await To(t, oo), !0;
        } catch (t) {}
        return !1;
      }
      async en(t) {
        this.pendingWrites++;
        try {
          await t();
        } finally {
          this.pendingWrites--;
        }
      }
      async ai(t, e) {
        return this.en(async () => (await this.Qi((i) => So(i, t, e)), (this.localCache[t] = e), this.notifyServiceWorker(t)));
      }
      async ci(t) {
        const e = await this.Qi((e) =>
          (async function (t, e) {
            const i = Io(t, !1).get(e),
              n = await new _o(i).toPromise();
            return void 0 === n ? null : n.value;
          })(e, t)
        );
        return (this.localCache[t] = e), e;
      }
      async hi(t) {
        return this.en(async () => (await this.Qi((e) => To(e, t)), delete this.localCache[t], this.notifyServiceWorker(t)));
      }
      async tn() {
        const t = await this.Qi((t) => {
          const e = Io(t, !1).getAll();
          return new _o(e).toPromise();
        });
        if (!t) return [];
        if (0 !== this.pendingWrites) return [];
        const e = [],
          i = new Set();
        for (const { fbase_key: n, value: s } of t)
          i.add(n), JSON.stringify(this.localCache[n]) !== JSON.stringify(s) && (this.notifyListeners(n, s), e.push(n));
        for (const t of Object.keys(this.localCache)) this.localCache[t] && !i.has(t) && (this.notifyListeners(t, null), e.push(t));
        return e;
      }
      notifyListeners(t, e) {
        this.localCache[t] = e;
        const i = this.listeners[t];
        if (i) for (const t of Array.from(i)) t(e);
      }
      startPolling() {
        this.stopPolling(), (this.pollTimer = setInterval(async () => this.tn(), 800));
      }
      stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      ui(t, e) {
        0 === Object.keys(this.listeners).length && this.startPolling(),
          this.listeners[t] || ((this.listeners[t] = new Set()), this.ci(t)),
          this.listeners[t].add(e);
      }
      di(t, e) {
        this.listeners[t] && (this.listeners[t].delete(e), 0 === this.listeners[t].size && delete this.listeners[t]),
          0 === Object.keys(this.listeners).length && this.stopPolling();
      }
    }
    Co.type = "LOCAL";
    const Eo = Co;
    function Oo(t) {
      return new Promise((e, i) => {
        const n = document.createElement("script");
        var s, r;
        n.setAttribute("src", t),
          (n.onload = e),
          (n.onerror = (t) => {
            const e = Is("internal-error");
            (e.customData = t), i(e);
          }),
          (n.type = "text/javascript"),
          (n.charset = "UTF-8"),
          (null !== (r = null === (s = document.getElementsByTagName("head")) || void 0 === s ? void 0 : s[0]) && void 0 !== r
            ? r
            : document
          ).appendChild(n);
      });
    }
    function Ao(t) {
      return `__${t}${Math.floor(1e6 * Math.random())}`;
    }
    Ao("rcb"), new Fs(3e4, 6e4);
    const Po = "recaptcha";
    async function No(t, e, i) {
      var n;
      const s = await i.verify();
      try {
        let r;
        if (
          (Cs("string" == typeof s, t, "argument-error"),
          Cs(i.type === Po, t, "argument-error"),
          (r = "string" == typeof e ? { phoneNumber: e } : e),
          "session" in r)
        ) {
          const e = r.session;
          if ("phoneNumber" in r) {
            Cs("enroll" === e.type, t, "internal-error");
            const i = await (function (t, e) {
              return Vs(t, "POST", "/v2/accounts/mfaEnrollment:start", Bs(t, e));
            })(t, { idToken: e.credential, phoneEnrollmentInfo: { phoneNumber: r.phoneNumber, recaptchaToken: s } });
            return i.phoneSessionInfo.sessionInfo;
          }
          {
            Cs("signin" === e.type, t, "internal-error");
            const i = (null === (n = r.multiFactorHint) || void 0 === n ? void 0 : n.uid) || r.multiFactorUid;
            Cs(i, t, "missing-multi-factor-info");
            const o = await (function (t, e) {
              return Vs(t, "POST", "/v2/accounts/mfaSignIn:start", Bs(t, e));
            })(t, { mfaPendingCredential: e.credential, mfaEnrollmentId: i, phoneSignInInfo: { recaptchaToken: s } });
            return o.phoneResponseInfo.sessionInfo;
          }
        }
        {
          const { sessionInfo: e } = await (async function (t, e) {
            return Vs(t, "POST", "/v1/accounts:sendVerificationCode", Bs(t, e));
          })(t, { phoneNumber: r.phoneNumber, recaptchaToken: s });
          return e;
        }
      } finally {
        i.nn();
      }
    }
    class Do {
      constructor(t) {
        (this.providerId = Do.PROVIDER_ID), (this.auth = _r(t));
      }
      verifyPhoneNumber(t, e) {
        return No(this.auth, t, gn(e));
      }
      static credential(t, e) {
        return Pr.$i(t, e);
      }
      static credentialFromResult(t) {
        const e = t;
        return Do.credentialFromTaggedObject(e);
      }
      static credentialFromError(t) {
        return Do.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ $e: t }) {
        if (!t) return null;
        const { phoneNumber: e, temporaryProof: i } = t;
        return e && i ? Pr.Wi(e, i) : null;
      }
    }
    function Ro(t, e) {
      return e ? Ps(e) : (Cs(t.mi, t, "argument-error"), t.mi);
    }
    (Do.PROVIDER_ID = "phone"), (Do.PHONE_SIGN_IN_METHOD = "phone");
    class xo extends kr {
      constructor(t) {
        super("custom", "custom"), (this.params = t);
      }
      Ri(t) {
        return Er(t, this.sn());
      }
      xi(t, e) {
        return Er(t, this.sn(e));
      }
      Fi(t) {
        return Er(t, this.sn());
      }
      sn(t) {
        const e = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: !0,
          returnIdpCredential: !0
        };
        return t && (e.idToken = t), e;
      }
    }
    function Fo(t) {
      return zr(t.auth, new xo(t), t.bypassAuthState);
    }
    function jo(t) {
      const { auth: e, user: i } = t;
      return Cs(i, e, "internal-error"), Hr(i, new xo(t), t.bypassAuthState);
    }
    async function Mo(t) {
      const { auth: e, user: i } = t;
      return Cs(i, e, "internal-error"), Gr(i, new xo(t), t.bypassAuthState);
    }
    class Lo {
      constructor(t, e, i, n, s = !1) {
        (this.auth = t),
          (this.resolver = i),
          (this.user = n),
          (this.bypassAuthState = s),
          (this.pendingPromise = null),
          (this.eventManager = null),
          (this.filter = Array.isArray(e) ? e : [e]);
      }
      execute() {
        return new Promise(async (t, e) => {
          this.pendingPromise = { resolve: t, reject: e };
          try {
            (this.eventManager = await this.resolver.yi(this.auth)), await this.onExecution(), this.eventManager.registerConsumer(this);
          } catch (t) {
            this.reject(t);
          }
        });
      }
      async onAuthEvent(t) {
        const { urlResponse: e, sessionId: i, postBody: n, tenantId: s, error: r, type: o } = t;
        if (r) return void this.reject(r);
        const a = {
          auth: this.auth,
          requestUri: e,
          sessionId: i,
          tenantId: s || void 0,
          postBody: n || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState
        };
        try {
          this.resolve(await this.getIdpTask(o)(a));
        } catch (t) {
          this.reject(t);
        }
      }
      onError(t) {
        this.reject(t);
      }
      getIdpTask(t) {
        switch (t) {
          case "signInViaPopup":
          case "signInViaRedirect":
            return Fo;
          case "linkViaPopup":
          case "linkViaRedirect":
            return Mo;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return jo;
          default:
            _s(this.auth, "internal-error");
        }
      }
      resolve(t) {
        Os(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(t), this.unregisterAndCleanUp();
      }
      reject(t) {
        Os(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(t), this.unregisterAndCleanUp();
      }
      unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this), (this.pendingPromise = null), this.cleanUp();
      }
    }
    const Uo = new Fs(2e3, 1e4);
    async function Bo(t, e, i) {
      const n = _r(t);
      Ss(t, e, Rr);
      const s = Ro(n, i);
      return new Vo(n, "signInViaPopup", e, s).executeNotNull();
    }
    class Vo extends Lo {
      constructor(t, e, i, n, s) {
        super(t, e, n, s),
          (this.provider = i),
          (this.authWindow = null),
          (this.pollId = null),
          Vo.currentPopupAction && Vo.currentPopupAction.cancel(),
          (Vo.currentPopupAction = this);
      }
      async executeNotNull() {
        const t = await this.execute();
        return Cs(t, this.auth, "internal-error"), t;
      }
      async onExecution() {
        Os(1 === this.filter.length, "Popup operations only handle one event");
        const t = po();
        (this.authWindow = await this.resolver.rn(this.auth, this.provider, this.filter[0], t)),
          (this.authWindow.associatedEvent = t),
          this.resolver.an(this.auth).catch((t) => {
            this.reject(t);
          }),
          this.resolver.cn(this.auth, (t) => {
            t || this.reject(Is(this.auth, "web-storage-unsupported"));
          }),
          this.pollUserCancellation();
      }
      get eventId() {
        var t;
        return (null === (t = this.authWindow) || void 0 === t ? void 0 : t.associatedEvent) || null;
      }
      cancel() {
        this.reject(Is(this.auth, "cancelled-popup-request"));
      }
      cleanUp() {
        this.authWindow && this.authWindow.close(),
          this.pollId && window.clearTimeout(this.pollId),
          (this.authWindow = null),
          (this.pollId = null),
          (Vo.currentPopupAction = null);
      }
      pollUserCancellation() {
        const t = () => {
          var e, i;
          (null === (i = null === (e = this.authWindow) || void 0 === e ? void 0 : e.window) || void 0 === i ? void 0 : i.closed)
            ? (this.pollId = window.setTimeout(() => {
                (this.pollId = null), this.reject(Is(this.auth, "popup-closed-by-user"));
              }, 2e3))
            : (this.pollId = window.setTimeout(t, Uo.get()));
        };
        t();
      }
    }
    Vo.currentPopupAction = null;
    const $o = new Map();
    class Wo extends Lo {
      constructor(t, e, i = !1) {
        super(t, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], e, void 0, i), (this.eventId = null);
      }
      async execute() {
        let t = $o.get(this.auth.Pi());
        if (!t) {
          try {
            const e = (await (async function (t, e) {
              const i = zo(e),
                n = Ho(t);
              if (!(await n.oi())) return !1;
              const s = "true" === (await n.ci(i));
              return await n.hi(i), s;
            })(this.resolver, this.auth))
              ? await super.execute()
              : null;
            t = () => Promise.resolve(e);
          } catch (e) {
            t = () => Promise.reject(e);
          }
          $o.set(this.auth.Pi(), t);
        }
        return this.bypassAuthState || $o.set(this.auth.Pi(), () => Promise.resolve(null)), t();
      }
      async onAuthEvent(t) {
        if ("signInViaRedirect" === t.type) return super.onAuthEvent(t);
        if ("unknown" !== t.type) {
          if (t.eventId) {
            const e = await this.auth.Ai(t.eventId);
            if (e) return (this.user = e), super.onAuthEvent(t);
            this.resolve(null);
          }
        } else this.resolve(null);
      }
      async onExecution() {}
      cleanUp() {}
    }
    function Go(t, e) {
      $o.set(t.Pi(), e);
    }
    function Ho(t) {
      return Ps(t.Oi);
    }
    function zo(t) {
      return rr("pendingRedirect", t.config.apiKey, t.name);
    }
    async function Jo(t, e, i = !1) {
      const n = _r(t),
        s = Ro(n, e),
        r = new Wo(n, s, i),
        o = await r.execute();
      return o && !i && (delete o.user.ni, await n.Ye(o.user), await n.Ti(null, e)), o;
    }
    class qo {
      constructor(t) {
        (this.auth = t),
          (this.cachedEventUids = new Set()),
          (this.consumers = new Set()),
          (this.queuedRedirectEvent = null),
          (this.hasHandledPotentialRedirect = !1),
          (this.lastProcessedEventTime = Date.now());
      }
      registerConsumer(t) {
        this.consumers.add(t),
          this.queuedRedirectEvent &&
            this.isEventForConsumer(this.queuedRedirectEvent, t) &&
            (this.sendToConsumer(this.queuedRedirectEvent, t),
            this.saveEventToCache(this.queuedRedirectEvent),
            (this.queuedRedirectEvent = null));
      }
      unregisterConsumer(t) {
        this.consumers.delete(t);
      }
      onEvent(t) {
        if (this.hasEventBeenHandled(t)) return !1;
        let e = !1;
        return (
          this.consumers.forEach((i) => {
            this.isEventForConsumer(t, i) && ((e = !0), this.sendToConsumer(t, i), this.saveEventToCache(t));
          }),
          this.hasHandledPotentialRedirect ||
            !(function (t) {
              switch (t.type) {
                case "signInViaRedirect":
                case "linkViaRedirect":
                case "reauthViaRedirect":
                  return !0;
                case "unknown":
                  return Xo(t);
                default:
                  return !1;
              }
            })(t) ||
            ((this.hasHandledPotentialRedirect = !0), e || ((this.queuedRedirectEvent = t), (e = !0))),
          e
        );
      }
      sendToConsumer(t, e) {
        var i;
        if (t.error && !Xo(t)) {
          const n = (null === (i = t.error.code) || void 0 === i ? void 0 : i.split("auth/")[1]) || "internal-error";
          e.onError(Is(this.auth, n));
        } else e.onAuthEvent(t);
      }
      isEventForConsumer(t, e) {
        const i = null === e.eventId || (!!t.eventId && t.eventId === e.eventId);
        return e.filter.includes(t.type) && i;
      }
      hasEventBeenHandled(t) {
        return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Ko(t));
      }
      saveEventToCache(t) {
        this.cachedEventUids.add(Ko(t)), (this.lastProcessedEventTime = Date.now());
      }
    }
    function Ko(t) {
      return [t.type, t.eventId, t.sessionId, t.tenantId].filter((t) => t).join("-");
    }
    function Xo({ type: t, error: e }) {
      return "unknown" === t && "auth/no-auth-event" === (null == e ? void 0 : e.code);
    }
    const Yo = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      Zo = /^https?/;
    async function Qo(t) {
      if (t.config.emulator) return;
      const { authorizedDomains: e } = await (async function (t, e = {}) {
        return Vs(t, "GET", "/v1/projects", e);
      })(t);
      for (const t of e)
        try {
          if (ta(t)) return;
        } catch (t) {}
      _s(t, "unauthorized-domain");
    }
    function ta(t) {
      const e = Ns(),
        { protocol: i, hostname: n } = new URL(e);
      if (t.startsWith("chrome-extension://")) {
        const s = new URL(t);
        return "" === s.hostname && "" === n
          ? "chrome-extension:" === i && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "")
          : "chrome-extension:" === i && s.hostname === n;
      }
      if (!Zo.test(i)) return !1;
      if (Yo.test(t)) return n === t;
      const s = t.replace(/\./g, "\\.");
      return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(n);
    }
    const ea = new Fs(3e4, 6e4);
    function ia() {
      const t = go().hn;
      if (null == t ? void 0 : t.H)
        for (const e of Object.keys(t.H))
          if (((t.H[e].r = t.H[e].r || []), (t.H[e].L = t.H[e].L || []), (t.H[e].r = [...t.H[e].L]), t.CP))
            for (let e = 0; e < t.CP.length; e++) t.CP[e] = null;
    }
    let na = null;
    function sa(t) {
      return (
        (na =
          na ||
          (function (t) {
            return new Promise((e, i) => {
              var n, s, r;
              function o() {
                ia(),
                  gapi.load("gapi.iframes", {
                    callback: () => {
                      e(gapi.iframes.getContext());
                    },
                    ontimeout: () => {
                      ia(), i(Is(t, "network-request-failed"));
                    },
                    timeout: ea.get()
                  });
              }
              if (null === (s = null === (n = go().gapi) || void 0 === n ? void 0 : n.iframes) || void 0 === s ? void 0 : s.Iframe)
                e(gapi.iframes.getContext());
              else {
                if (!(null === (r = go().gapi) || void 0 === r ? void 0 : r.load)) {
                  const e = Ao("iframefcb");
                  return (
                    (go()[e] = () => {
                      gapi.load ? o() : i(Is(t, "network-request-failed"));
                    }),
                    Oo(`https://apis.google.com/js/api.js?onload=${e}`).catch((t) => i(t))
                  );
                }
                o();
              }
            }).catch((t) => {
              throw ((na = null), t);
            });
          })(t)),
        na
      );
    }
    const ra = new Fs(5e3, 15e3),
      oa = { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" }, "aria-hidden": "true", tabindex: "-1" },
      aa = new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"]
      ]);
    function ca(t) {
      const e = t.config;
      Cs(e.authDomain, t, "auth-domain-config-required");
      const i = e.emulator ? js(e, "emulator/auth/iframe") : `https://${t.config.authDomain}/__/auth/iframe`,
        n = { apiKey: e.apiKey, appName: t.name, v: ns },
        s = aa.get(t.config.apiHost);
      s && (n.eid = s);
      const r = t.Di();
      return r.length && (n.fw = r.join(",")), `${i}?${dn(n).slice(1)}`;
    }
    const ha = { location: "yes", resizable: "yes", statusbar: "yes", toolbar: "no" };
    class ua {
      constructor(t) {
        (this.window = t), (this.associatedEvent = null);
      }
      close() {
        if (this.window)
          try {
            this.window.close();
          } catch (t) {}
      }
    }
    function da(t, e, i, n = 500, s = 600) {
      const r = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
        o = Math.max((window.screen.availWidth - n) / 2, 0).toString();
      let a = "";
      const c = Object.assign(Object.assign({}, ha), { width: n.toString(), height: s.toString(), top: r, left: o }),
        h = rn().toLowerCase();
      i && (a = ur(h) ? "_blank" : i), cr(h) && ((e = e || "http://localhost"), (c.scrollbars = "yes"));
      const u = Object.entries(c).reduce((t, [e, i]) => `${t}${e}=${i},`, "");
      if (
        (function (t = rn()) {
          var e;
          return vr(t) && !!(null === (e = window.navigator) || void 0 === e ? void 0 : e.standalone);
        })(h) &&
        "_self" !== a
      )
        return (
          (function (t, e) {
            const i = document.createElement("a");
            (i.href = t), (i.target = e);
            const n = document.createEvent("MouseEvent");
            n.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), i.dispatchEvent(n);
          })(e || "", a),
          new ua(null)
        );
      const d = window.open(e || "", a, u);
      Cs(d, t, "popup-blocked");
      try {
        d.focus();
      } catch (t) {}
      return new ua(d);
    }
    const la = "__/auth/handler",
      fa = "emulator/auth/handler";
    function pa(t, e, i, n, s, r) {
      Cs(t.config.authDomain, t, "auth-domain-config-required"), Cs(t.config.apiKey, t, "invalid-api-key");
      const o = { apiKey: t.config.apiKey, appName: t.name, authType: i, redirectUrl: n, v: ns, eventId: s };
      if (e instanceof Rr) {
        e.setDefaultLanguage(t.languageCode),
          (o.providerId = e.providerId || ""),
          (function (t) {
            for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
            return !0;
          })(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
        for (const [t, e] of Object.entries(r || {})) o[t] = e;
      }
      if (e instanceof xr) {
        const t = e.getScopes().filter((t) => "" !== t);
        t.length > 0 && (o.scopes = t.join(","));
      }
      t.tenantId && (o.tid = t.tenantId);
      const a = o;
      for (const t of Object.keys(a)) void 0 === a[t] && delete a[t];
      return `${(function ({ config: t }) {
        if (!t.emulator) return `https://${t.authDomain}/${la}`;
        return js(t, fa);
      })(t)}?${dn(a).slice(1)}`;
    }
    const va = "webStorageSupport";
    const ga = class {
      constructor() {
        (this.eventManagers = {}),
          (this.iframes = {}),
          (this.originValidationPromises = {}),
          (this.Oi = lo),
          (this.Si = Jo),
          (this.ki = Go);
      }
      async rn(t, e, i, n) {
        var s;
        Os(null === (s = this.eventManagers[t.Pi()]) || void 0 === s ? void 0 : s.manager, "_initialize() not called before _openPopup()");
        return da(t, pa(t, e, i, Ns(), n), po());
      }
      async un(t, e, i, n) {
        return (
          await this.an(t),
          (function (t) {
            go().location.href = t;
          })(pa(t, e, i, Ns(), n)),
          new Promise(() => {})
        );
      }
      yi(t) {
        const e = t.Pi();
        if (this.eventManagers[e]) {
          const { manager: t, promise: i } = this.eventManagers[e];
          return t ? Promise.resolve(t) : (Os(i, "If manager is not set, promise should be"), i);
        }
        const i = this.initAndGetManager(t);
        return (
          (this.eventManagers[e] = { promise: i }),
          i.catch(() => {
            delete this.eventManagers[e];
          }),
          i
        );
      }
      async initAndGetManager(t) {
        const e = await (async function (t) {
            const e = await sa(t),
              i = go().gapi;
            return (
              Cs(i, t, "internal-error"),
              e.open(
                {
                  where: document.body,
                  url: ca(t),
                  messageHandlersFilter: i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                  attributes: oa,
                  dontclear: !0
                },
                (e) =>
                  new Promise(async (i, n) => {
                    await e.restyle({ setHideOnLeave: !1 });
                    const s = Is(t, "network-request-failed"),
                      r = go().setTimeout(() => {
                        n(s);
                      }, ra.get());
                    function o() {
                      go().clearTimeout(r), i(e);
                    }
                    e.ping(o).then(o, () => {
                      n(s);
                    });
                  })
              )
            );
          })(t),
          i = new qo(t);
        return (
          e.register(
            "authEvent",
            (e) => {
              Cs(null == e ? void 0 : e.authEvent, t, "invalid-auth-event");
              return { status: i.onEvent(e.authEvent) ? "ACK" : "ERROR" };
            },
            gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
          ),
          (this.eventManagers[t.Pi()] = { manager: i }),
          (this.iframes[t.Pi()] = e),
          i
        );
      }
      cn(t, e) {
        this.iframes[t.Pi()].send(
          va,
          { type: va },
          (i) => {
            var n;
            const s = null === (n = null == i ? void 0 : i[0]) || void 0 === n ? void 0 : n.webStorageSupport;
            void 0 !== s && e(!!s), _s(t, "internal-error");
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        );
      }
      an(t) {
        const e = t.Pi();
        return this.originValidationPromises[e] || (this.originValidationPromises[e] = Qo(t)), this.originValidationPromises[e];
      }
      get wi() {
        return mr() || hr() || vr();
      }
    };
    var ma,
      ba = "@firebase/auth",
      wa = "0.20.7";
    class ya {
      constructor(t) {
        (this.auth = t), (this.internalListeners = new Map());
      }
      getUid() {
        var t;
        return this.assertAuthConfigured(), (null === (t = this.auth.currentUser) || void 0 === t ? void 0 : t.uid) || null;
      }
      async getToken(t) {
        if ((this.assertAuthConfigured(), await this.auth.gi, !this.auth.currentUser)) return null;
        return { accessToken: await this.auth.currentUser.getIdToken(t) };
      }
      addAuthTokenListener(t) {
        if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
        const e = this.auth.onIdTokenChanged((e) => {
          var i;
          t((null === (i = e) || void 0 === i ? void 0 : i.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(t, e), this.updateProactiveRefresh();
      }
      removeAuthTokenListener(t) {
        this.assertAuthConfigured();
        const e = this.internalListeners.get(t);
        e && (this.internalListeners.delete(t), e(), this.updateProactiveRefresh());
      }
      assertAuthConfigured() {
        Cs(this.auth.gi, "dependent-sdk-initialized-before-auth");
      }
      updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth.ti() : this.auth.ei();
      }
    }
    function _a(
      t = (function (t = "[DEFAULT]") {
        const e = Xn.get(t);
        if (!e) throw es.create("no-app", { appName: t });
        return e;
      })()
    ) {
      const e = ts(t, "auth");
      return e.isInitialized()
        ? e.getImmediate()
        : (function (t, e) {
            const i = ts(t, "auth");
            if (i.isInitialized()) {
              const t = i.getImmediate();
              if (hn(i.getOptions(), null != e ? e : {})) return t;
              _s(t, "already-initialized");
            }
            return i.initialize({ options: e });
          })(t, { popupRedirectResolver: ga, persistence: [Eo, ho, lo] });
    }
    (ma = "Browser"),
      Qn(
        new mn(
          "auth",
          (t, { options: e }) => {
            const i = t.getProvider("app").getImmediate(),
              n = t.getProvider("heartbeat"),
              { apiKey: s, authDomain: r } = i.options;
            return ((t, i) => {
              Cs(s && !s.includes(":"), "invalid-api-key", { appName: t.name }),
                Cs(!(null == r ? void 0 : r.includes(":")), "argument-error", { appName: t.name });
              const n = {
                  apiKey: s,
                  authDomain: r,
                  clientPlatform: ma,
                  apiHost: "identitytoolkit.googleapis.com",
                  tokenApiHost: "securetoken.googleapis.com",
                  apiScheme: "https",
                  sdkClientVersion: br(ma)
                },
                o = new yr(t, i, n);
              return (
                (function (t, e) {
                  const i = (null == e ? void 0 : e.persistence) || [],
                    n = (Array.isArray(i) ? i : [i]).map(Ps);
                  (null == e ? void 0 : e.errorMap) && t.Ei(e.errorMap), t.bi(n, null == e ? void 0 : e.popupRedirectResolver);
                })(o, e),
                o
              );
            })(i, n);
          },
          "PUBLIC"
        )
          .setInstantiationMode("EXPLICIT")
          .setInstanceCreatedCallback((t, e, i) => {
            t.getProvider("auth-internal").initialize();
          })
      ),
      Qn(
        new mn("auth-internal", (t) => ((t) => new ya(t))(_r(t.getProvider("auth").getImmediate())), "PRIVATE").setInstantiationMode(
          "EXPLICIT"
        )
      ),
      ss(
        ba,
        wa,
        (function (t) {
          switch (t) {
            case "Node":
              return "node";
            case "ReactNative":
              return "rn";
            case "Worker":
              return "webworker";
            case "Cordova":
              return "cordova";
            default:
              return;
          }
        })(ma)
      ),
      ss(ba, wa, "esm2017");
    var Ia;
    ss("firebase", "9.10.0", "app"),
      (function (t) {
        (t.SET_USER_LIST = "setUserList"),
          (t.SET_CONNECTION_ID = "setConnectionId"),
          (t.LOAD_INIT_DATA = "loadInitData"),
          (t.SET_PAGE_TITLE = "setPageTitle"),
          (t.ADD_GIF_MESSAGE = "addGifMessage"),
          (t.SIDEBAR_MESSAGING_READY = "sidebarMessagingReady"),
          (t.RESET_VIEW = "resetView"),
          (t.HIDE_CHAT = "hideChat"),
          (t.ON_UPDATE_SETTINGS = "onUpdateSettings"),
          (t.PREVIEW_REACTION = "previewReaction"),
          (t.UPDATE_SETTINGS = "updateSettings"),
          (t.SET_REACTIONS_ACTIVE = "setReactionsActive"),
          (t.ON_FOCUS = "onSidebarFocus"),
          (t.SET_USER_ICON_URL = "setUserIconUrl"),
          (t.ADD_MESSAGE = "addMessage"),
          (t.CLEAR_MESSAGES = "clearMessages"),
          (t.SET_PRESENCE_MESSAGE = "setPresenceMessage"),
          (t.ON_PAGE_CLICK = "onPageClick"),
          (t.ON_PURCHASE = "onPurchase"),
          (t.DISPLAY_MODAL = "displayModal"),
          (t.OPEN_TAB = "openTab"),
          (t.ON_CHROME_STORAGE_UPDATE = "onChromeStorageUpdate"),
          (t.ON_WEB_RTC = "onWebRTC");
      })(Ia || (Ia = {}));
    var ka = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            c(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          try {
            c(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, a);
        }
        c((n = n.apply(t, e || [])).next());
      });
    };
    class Sa {
      constructor() {
        (this.dn = new Map()),
          (this.ln = Ti.WITH_ACTIVITY),
          (this.signInCallbacks = []),
          (this.app = (function (t, e = {}) {
            "object" != typeof e && (e = { name: e });
            const i = Object.assign({ name: qn, automaticDataCollectionEnabled: !1 }, e),
              n = i.name;
            if ("string" != typeof n || !n) throw es.create("bad-app-name", { appName: String(n) });
            const s = Xn.get(n);
            if (s) {
              if (hn(t, s.options) && hn(i, s.config)) return s;
              throw es.create("duplicate-app", { appName: n });
            }
            const r = new yn(n);
            for (const t of Yn.values()) r.addComponent(t);
            const o = new is(t, i, r);
            return Xn.set(n, o), o;
          })(l)),
          (this.pn = []),
          (this.vn = []),
          (this.gn = 0),
          (this.mn = 0),
          (this.updateStatus = (t) =>
            ka(this, void 0, void 0, function* () {
              var e;
              const i = yield null === (e = _a().currentUser) || void 0 === e ? void 0 : e.getIdToken();
              if (i)
                try {
                  const e = yield A("user/@me/status", "PATCH", !0, { status: t }, i);
                  console.log(e);
                } catch (t) {
                  console.log(t);
                }
            })),
          (this.Nt = new qi()),
          (this.bn = new Yi()),
          this.we(),
          this.wn();
        const t = (function (t, e, i, n) {
          return gn(t).onAuthStateChanged(e, i, n);
        })(_a(), (e) => {
          e && (this.yn(), t());
        });
        console.log("Background Script Loaded");
      }
      removeSignInCallback(t) {
        const e = this.signInCallbacks.findIndex((e) => e.callback === t);
        -1 !== e && (clearTimeout(this.signInCallbacks[e].timer), this.signInCallbacks.splice(e, 1));
      }
      addSignInFunction(t, e) {
        console.log("ABOUT TO ADD CALLBACK", t);
        const i = setTimeout(() => this.removeSignInCallback(t), 3e5);
        this.signInCallbacks.push({ callback: t, data: e, timer: i });
      }
      signInCallbacksFunction(t, e) {
        if ("StartParty" === t) this._n(e);
        else console.log("Non existent callback");
      }
      triggerSignIn() {
        this.signInCallbacks.forEach(({ callback: t, data: e, timer: i }) => {
          console.log("TRIGGERING", t), clearTimeout(i);
          try {
            this.signInCallbacksFunction(t, e);
          } catch (t) {
            console.log("SIGN IN CALLBACK ERROR", t);
          }
        }),
          (this.signInCallbacks = []);
      }
      In() {
        this.Nt.closeEventWindow();
      }
      kn() {
        this.In();
        const t = window.open(
          "https://redirect.teleparty.com/event-logger",
          "Teleparty Logger",
          "width=600,height=530,status=0,scrollbars=0,menubar=0"
        );
        t && this.Nt.setEventWindow(t);
      }
      ye(t, e, i) {
        var n, r, o, a, c, h, u, d, l, f, p, v, g, w, y, _, I, k, S, T, C, E;
        if (t.target === m) {
          if (t.type == Ei.CREATE_SESSION) {
            const o = t;
            s()("Got create Session Message");
            const a = o.data;
            return (
              0 === a.extensionTabData.id &&
                (a.extensionTabData.id = null !== (r = null === (n = e.tab) || void 0 === n ? void 0 : n.id) && void 0 !== r ? r : 0),
              this._n(a).then(i).catch(this.Sn(i, e.tab)),
              !0
            );
          }
          if (t.type == Ci.GET_SESSION_DATA) {
            const n = t;
            return this.Tn(n.data, e).then(i).catch(this.Sn(i, e.tab)), !0;
          }
          if (t.type == Si.TEARDOWN) {
            const n = t;
            return this.Cn(n, e).then(i), !0;
          }
          if (t.type == Si.LOG_EVENT) {
            const n = t.data;
            if ("eventType" in n) this.logOldEventAsync(n);
            else {
              let t;
              this.dn.forEach((i) => {
                var n;
                i.chatTabId === (null === (n = e.tab) || void 0 === n ? void 0 : n.id) && (t = i.videoTabId);
              }),
                t
                  ? this.En(t).then((t) => {
                      this.ce(n, t);
                    })
                  : this.ce(n, e.tab);
            }
            return i(), !0;
          }
          if (t.type == Si.LOG_EXPERIMENT) {
            const e = t;
            return this.logExperimentAsync(e.data), i(), !0;
          }
          if (t.type == Ei.RE_INJECT) {
            const n = t;
            s()("Got Re Inject Message");
            const r = n.data;
            return (
              0 === r.extensionTabData.id &&
                (r.extensionTabData.id = null !== (a = null === (o = e.tab) || void 0 === o ? void 0 : o.id) && void 0 !== a ? a : 0),
              this.On(r).then(i).catch(this.Sn(i, e.tab)),
              !0
            );
          }
          if (t.type == Si.STAY_ALIVE) {
            const e = t,
              n = e.data.tabId;
            return this.An(n, e.data.persist), i(), !0;
          }
          if (t.type == Si.LOAD_CHAT_WINDOW) {
            const t = null !== (h = null === (c = e.tab) || void 0 === c ? void 0 : c.id) && void 0 !== h ? h : 0,
              n = null !== (d = null === (u = e.tab) || void 0 === u ? void 0 : u.windowId) && void 0 !== d ? d : 0;
            return this.Pn(t, n).then(i), !0;
          }
          if (t.type == Si.FULLSCREEN_WINDOW) {
            const t = null !== (f = null === (l = e.tab) || void 0 === l ? void 0 : l.windowId) && void 0 !== f ? f : 0;
            return console.log("Window ID is", t), this.fullScreen(t), !0;
          }
          if (t.type == Si.MAX_WINDOW) {
            const t = null !== (v = null === (p = e.tab) || void 0 === p ? void 0 : p.windowId) && void 0 !== v ? v : 0;
            return console.log("Window ID is", t), this.fullScreen(t, !1), !0;
          }
          if (t.type == Si.RESET_CHAT_WINDOW) {
            const t = null !== (w = null === (g = e.tab) || void 0 === g ? void 0 : g.id) && void 0 !== w ? w : 0;
            let n;
            return (
              this.dn.forEach((e) => {
                (e.chatTabId != t && e.videoTabId != t) || (n = e);
              }),
              n && this.Nn(n).then(i),
              !0
            );
          }
          if (t.type == Si.HIDE_CHAT_WINDOW) {
            const t = null !== (_ = null === (y = e.tab) || void 0 === y ? void 0 : y.id) && void 0 !== _ ? _ : 0;
            let n;
            return (
              this.dn.forEach((e) => {
                (e.chatTabId != t && e.videoTabId != t) || (n = e);
              }),
              n && this.Dn(n).then(i),
              !0
            );
          }
          if (t.type == Ei.GET_INIT_USER_SESTTINGS)
            return (
              this.getUserData()
                .then((t) => {
                  i(t);
                })
                .catch((t) => console.log(t)),
              !0
            );
          if (t.type == Ei.GOOGLE_SIGN_IN) return this.doAuthSignIn().then(i), !0;
          if (t.type == Ei.EMAIL_SIGN_IN) {
            const e = t;
            return (
              this.doEmailSignIn(e.data.email, e.data.password)
                .then(i)
                .catch((t) => i({ error: t })),
              !0
            );
          }
          if (t.type == Ei.FORGOT_PASSWORD) {
            const e = t;
            return (
              this.forgotPassword(e.data.email)
                .then(i)
                .catch((t) => i({ error: t })),
              !0
            );
          }
          if (t.type == Ei.EMAIL_SIGN_UP) {
            const e = t;
            return (
              this.doEmailSignUp(e.data.email, e.data.password, null === (I = e.data.optin) || void 0 === I || I)
                .then(i)
                .catch((t) => i({ error: t })),
              !0
            );
          }
          if (t.type == ki.SIGN_OUT) return this.Rn().then(i), !0;
          if (t.type == Ei.GET_SCHEDULED_EVENTS) return this.xn().then(i), !0;
          if (t.type == Ei.GET_RECENT_SCHEDULED_EVENTS) return this.Fn().then(i), !0;
          if (t.type === ki.DO_AUTH_SIGN_IN) return this.doAuthSignIn().then(i), !0;
          if (t.type === ki.GET_AUTH_TOKEN) {
            const e = !0 === (null === (k = t.data) || void 0 === k ? void 0 : k.refresh);
            return this.jn(e).then(i).catch(this.receiveMessageOnError(i)), !0;
          }
          if (t.type === Si.SET_USER_PRESENCE) {
            const e = t;
            return this.setUserPresence(e.data).then(i).catch(this.receiveMessageOnError(i)), !0;
          }
          if (t.type == Si.GET_EXPERIMENT_FLAG) {
            const e = t,
              n = this.bn.checkFlag(e.data.flag_name);
            return n && i({ bucket: n }), !0;
          }
          if (t.type === Si.TOGGLE_OPEN_PARTY) {
            const n = t;
            return (
              void 0 === n.data.tabId && (n.data.tabId = null === (S = e.tab) || void 0 === S ? void 0 : S.id),
              this.Mn(n.data)
                .then((t) => {
                  console.log(t), i(t);
                })
                .catch(this.receiveMessageOnError(i)),
              !0
            );
          }
          if (t.type === Si.SET_ACTIVE_PARTY) {
            const e = t;
            return this.Ln(e.data), i(), !0;
          }
          if (t.type === Si.GET_ACTIVE_PARTY) {
            const t = { sessionId: this.Un };
            return i(t), !0;
          }
          if (t.type === Si.ACCEPT_DROPIN) {
            const e = t;
            return this.Bn(e.data).then(i).catch(this.receiveMessageOnError(i)), !0;
          }
          if (t.type === Si.GET_TAB_ID) return i(null === (T = e.tab) || void 0 === T ? void 0 : T.id), !0;
          if (t.type === Si.SET_STATUS_TYPE) {
            const e = t;
            return this.Vn(e.data).then(i).catch(i), !0;
          }
          if (t.type === Si.GET_STATUS_TYPE) return i(this.ln), !0;
          if (t.type === Ei.SET_USER_STATUS) return this.updateStatus(t.data.status).then(i).catch(i), !0;
          if (t.type === Ei.SIGN_IN_CREATE) {
            const e = t;
            return (
              console.log("CALLBACK IS", e),
              this.removeSignInCallback(e.data.action),
              this.addSignInFunction(e.data.action, e.data.data),
              !0
            );
          }
          if (t.type === Ia.OPEN_TAB) {
            const { url: e } = t.data;
            chrome.tabs.create({ url: e });
          }
        } else if (t.target == b) {
          const n = null !== (E = null === (C = e.tab) || void 0 === C ? void 0 : C.id) && void 0 !== E ? E : 0;
          return Le.sendMessageToTabAsync(t, n).then(i).catch(i), !0;
        }
      }
      An(t, e) {
        let i;
        e ||
          (i = setTimeout(
            () =>
              ka(this, void 0, void 0, function* () {
                this.Nt.removeAliveTab(t), yield this.$n(t);
              }),
            6e4
          )),
          this.Nt.addAliveTab(t, i);
      }
      On(t) {
        return ka(this, void 0, void 0, function* () {
          const e = t.extensionTabData;
          yield this.Nt.initContentScriptsAsync(e);
        });
      }
      sendApiRequest(t, e, i, n) {
        return ka(this, void 0, void 0, function* () {
          const s = `${a}/${t}`,
            r = new XMLHttpRequest();
          if ((r.open(e, s), i)) {
            const t = _a();
            if (!t.currentUser) throw new Error("Not signed in");
            {
              const e = yield t.currentUser.getIdToken();
              r.setRequestHeader("Authorization", `Bearer ${e}`), r.setRequestHeader("Content-Type", "application/json");
            }
          }
          return new Promise((t, e) => {
            r.addEventListener("readystatechange", () => {
              if (r.readyState === XMLHttpRequest.DONE) {
                const i = r.status;
                0 === i || (i >= 200 && i < 400) ? t(r.responseText) : e(r.responseText);
              }
            }),
              r.send(JSON.stringify(n));
          });
        });
      }
      Wn() {
        var t;
        return ka(this, void 0, void 0, function* () {
          const e = yield hi.getItemsAsync(["extensionUses"]),
            i = null !== (t = e.extensionUses) && void 0 !== t ? t : 0;
          yield vi.setItemsAsync({ extensionUses: i + 1 });
        });
      }
      destroyPresenceUpdateInterval() {
        this.presenceInterval && (clearInterval(this.presenceInterval), (this.presenceInterval = void 0));
      }
      updatePresenceState() {
        return ka(this, void 0, void 0, function* () {
          if (_a().currentUser) {
            const t = yield this.Nt.getOnlineState();
            t && this.setUserPresence(t);
          } else this.destroyPresenceUpdateInterval();
        });
      }
      updateMessageToken() {
        return ka(this, void 0, void 0, function* () {
          try {
            console.log("Token updated");
          } catch (t) {
            console.log(t);
          }
        });
      }
      Gn() {
        return ka(this, void 0, void 0, function* () {
          const t = JSON.parse(yield this.sendApiRequest("pending-party-requests", "GET", !0, {})).find(
            (t) => !t.sent && "join" === t.type
          );
          t && this.Bn({ sessionId: t.sessionId });
        });
      }
      Hn() {
        return ka(this, void 0, void 0, function* () {
          return !0;
        });
      }
      handlePushNotif(t) {
        return ka(this, void 0, void 0, function* () {
          const e = t.data;
          if (e) {
            const { type: t, tag: i, data: n } = e;
            if ("notification_click" === t)
              console.log("Got Friend Request"),
                "friend" === i && window.open(p, "Teleparty Friends", "width=300,height=530,status=0,scrollbars=0,menubar=0");
            else if ("notification_received" === t)
              try {
                const t = yield this.Nt.getActiveTabId();
                if ((Le.sendMessageToTabAsync(new Ai(m, b, Si.ON_NOTIF), t), "dropin_request" === n.type)) {
                  (yield this.Hn()) && this.Gn();
                }
              } catch (t) {
                console.log(t), console.log("No active tab?");
              }
          }
        });
      }
      zn() {
        let t = "";
        return (
          navigator.userAgent.includes("Firefox/")
            ? (t = `Firefox v${navigator.userAgent.split("Firefox/")[1]}`)
            : navigator.userAgent.includes("Edg/")
            ? (t = `Edg v${navigator.userAgent.split("Edg/")[1]}`)
            : navigator.userAgent.includes("Chrome/") && (t = `Chrome v${navigator.userAgent.split("Chrome/")[1]}`),
          t
        );
      }
      Jn() {
        let t = "";
        return (
          -1 != navigator.userAgent.indexOf("Windows NT 10.0") && (t = "Windows 10"),
          -1 != navigator.userAgent.indexOf("Windows NT 6.3") && (t = "Windows 8.1"),
          -1 != navigator.userAgent.indexOf("Windows NT 6.2") && (t = "Windows 8"),
          -1 != navigator.userAgent.indexOf("Windows NT 6.1") && (t = "Windows 7"),
          -1 != navigator.userAgent.indexOf("Windows NT 6.0") && (t = "Windows Vista"),
          -1 != navigator.userAgent.indexOf("Windows NT 5.1") && (t = "Windows XP"),
          -1 != navigator.userAgent.indexOf("Windows NT 5.0") && (t = "Windows 2000"),
          -1 != navigator.userAgent.indexOf("Mac") && (t = "Mac/iOS"),
          -1 != navigator.userAgent.indexOf("X11") && (t = "UNIX"),
          -1 != navigator.userAgent.indexOf("Linux") && (t = "Linux"),
          t
        );
      }
      qn(t) {
        const e = Ze.getSocketForTabId(t);
        return {
          id: null == e ? void 0 : e.getId(),
          transport: null == e ? void 0 : e.getTransport(),
          type: null == e ? void 0 : e.getType(),
          start_time_ms: null == e ? void 0 : e.getSocketStartTime()
        };
      }
      Kn(t, e) {
        var i, n, s, r, o, a, c;
        return ka(this, void 0, void 0, function* () {
          const h = Object.assign({}, t),
            u = Ze.getSocketForTabId(null !== (i = e.id) && void 0 !== i ? i : 0);
          if (u) {
            const t = u.getCurrentSessionData();
            if (t && t.sessionId) {
              const e = {
                id: null == t ? void 0 : t.sessionId,
                start_time_ms: null == t ? void 0 : t.created_at,
                member_type: (null == t ? void 0 : t.created) ? "host" : "participant"
              };
              h.party_session = e;
            }
            const i = this.qn(null !== (n = e.id) && void 0 !== n ? n : 0);
            i.id && (h.socket_session = i);
            const d = null !== (s = h.video_session) && void 0 !== s ? s : this.Nt.getVideoSessionData();
            try {
              const t = yield this.Xn(null !== (r = e.id) && void 0 !== r ? r : 0),
                i = t.videoState;
              h.page &&
                ((h.page.is_adblock_enabled = t.is_adblock_enabled),
                (h.page.is_chat_visible = t.is_chat_visible),
                (h.page.is_player_fullscreen = t.is_player_fullscreen)),
                (d.status = i),
                (d.video_ts_ms = t.video_ts_ms),
                (d.party_ts_ms = t.party_ts_ms),
                (t.content.service = null === (o = t.content.service) || void 0 === o ? void 0 : o.toLowerCase()),
                (t.content.episode_name = null === (a = t.content.episode_name) || void 0 === a ? void 0 : a.toLowerCase()),
                (t.content.name = null === (c = t.content.name) || void 0 === c ? void 0 : c.toLowerCase()),
                (h.screen = t.screen),
                (h.content = t.content);
            } catch (t) {
              console.log(t);
            }
            ((h.party_session && h.party_session.id) || h.name.startsWith("video_")) && (h.video_session = d);
          }
          return h;
        });
      }
      Yn(t) {
        var e;
        const i = null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform;
        return {
          name: "chrome",
          version: this.zn(),
          type: "browser",
          manufacturer: i,
          model: "",
          os_name: this.Jn(),
          os_version: "",
          install_id: t
        };
      }
      Zn(t, e, i, n) {
        const s = this.Yn(n),
          r = this.Nt.getAppSession(),
          o = Date.now(),
          a = { name: "chrome_ext", version: chrome.runtime.getManifest().version },
          c = Object.assign({}, e);
        return (
          c.app || (c.app = a),
          c.app_session || (c.app_session = r),
          (c.device = s),
          (c.client_timestamp_ms = o),
          null == c.page && (c.page = t),
          (c.user = i),
          c
        );
      }
      En(t) {
        return ka(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            try {
              chrome.tabs.get(t, (t) => {
                chrome.runtime.lastError ? i(chrome.runtime.lastError) : e(t);
              });
            } catch (t) {
              i(t);
            }
          });
        });
      }
      Qn(t, e) {
        return ka(this, void 0, void 0, function* () {
          return new Promise((i, n) => {
            try {
              chrome.tabs.update(t, { url: e }, () => {
                i();
              });
            } catch (t) {
              n(t);
            }
          });
        });
      }
      ts(t) {
        return ka(this, void 0, void 0, function* () {
          const e = t.chatTabId;
          chrome.tabs.move(e, { index: -1, windowId: t.videoWindow.id }, (e) =>
            ka(this, void 0, void 0, function* () {
              var i;
              yield this.Nn(t), chrome.tabs.update(null !== (i = e.id) && void 0 !== i ? i : 0, { active: !0 });
            })
          );
        });
      }
      de(t) {
        return ka(this, void 0, void 0, function* () {
          let e;
          this.dn.forEach((i) => {
            i.chatTabId === (null == t ? void 0 : t.id) && (e = i);
          }),
            e && t.url !== f && this.ts(e);
        });
      }
      logEventForTabId(t, e) {
        return ka(this, void 0, void 0, function* () {
          try {
            const i = yield this.En(e);
            return this.ce(t, i);
          } catch (e) {
            return this.ce(t);
          }
        });
      }
      ce(t, e) {
        var i, n, s, r, o;
        return ka(this, void 0, void 0, function* () {
          if (t.name.includes("error")) {
            if (((this.pn = this.pn.filter((t) => t > Date.now() - 6e4)), this.pn.length >= 15))
              return void console.log("Error rate limited");
            this.pn.push(Date.now());
          }
          if (t.name.includes("video_error")) {
            if (((this.vn = this.vn.filter((t) => t > Date.now() - 6e4)), this.vn.length >= 15))
              return void console.log("Error rate limited");
            this.vn.push(Date.now());
          }
          let a = Object.assign({}, t);
          try {
            const t = yield bi.getValidatedChromeStorageDataAsync(),
              c = yield this.ve(),
              h = ["video_heartbeat"];
            this.Nt.incrementAppSessionEventNumber();
            const d = {
                name: null !== (i = null == e ? void 0 : e.title) && void 0 !== i ? i : "",
                url: null !== (n = null == e ? void 0 : e.url) && void 0 !== n ? n : ""
              },
              l = _a(),
              f = null !== l.currentUser,
              p = !this.gn || Date.now() - this.gn > Sa.SUBSCRIPTION_CACHE_TIME ? yield this.es() : this.ns;
            let v, g;
            void 0 === p ||
              u.includes(p.subscriptionStatus) ||
              ("trialing" === p.subscriptionStatus && (g = !0),
              (v = "monthly" === p.subscriptionType ? "premium_monthly" : "premium_annual"));
            const m = {
              id: null !== (r = null === (s = l.currentUser) || void 0 === s ? void 0 : s.uid) && void 0 !== r ? r : c,
              name: t.userNickname,
              signed_in: f,
              plan: v,
              on_trial: g
            };
            (a = this.Zn(d, a, m, c)),
              a.component && (a.component.type = null === (o = a.component.type) || void 0 === o ? void 0 : o.toLowerCase()),
              "video_start" === a.name && this.Nt.resetVideoSession(),
              "video_pause" === a.name && this.Nt.pauseHeartBeat(),
              "video_resume" === a.name && this.Nt.resumeHeartBeat(),
              h.includes(a.name) && this.Nt.heartBeatProc(),
              e && e.id && (a = yield this.Kn(a, e));
          } catch (t) {
            console.log("log event error : " + t);
          }
          this.ss(a);
        });
      }
      ss(t) {
        try {
          const e = "https://metis.teleparty.com/v1/record",
            i = new XMLHttpRequest();
          i.open("PUT", e), i.setRequestHeader("Content-Type", "application/json"), i.send(JSON.stringify(t));
        } catch (t) {
          console.error(t);
        }
      }
      openLogPage() {
        0;
      }
      logOldEventAsync(t) {
        return ka(this, void 0, void 0, function* () {
          try {
            const e = { userId: yield this.ve(), eventType: t.eventType, sessionId: t.sessionId };
            console.log("event: " + JSON.stringify(e));
            const i = new XMLHttpRequest();
            i.open("POST", "https://data3.netflixparty.com/log-event"),
              i.setRequestHeader("Content-Type", "application/json"),
              i.send(JSON.stringify(e));
          } catch (t) {
            console.log("log event error : " + t);
          }
        });
      }
      Cn(t, e) {
        var i;
        return ka(this, void 0, void 0, function* () {
          if (e.tab && e.tab.id) {
            const n = e.tab.id;
            (t.sender = m), (t.target = b), yield Le.sendMessageToTabAsync(t, n), yield this.$n(n);
            const s = new Di(m, "Popup");
            Le.Ot(s);
            const r = this.dn.get(n);
            r &&
              ((null === (i = null == r ? void 0 : r.chatWindow) || void 0 === i ? void 0 : i.id) && chrome.windows.remove(r.chatWindow.id),
              this.dn.delete(n));
          }
        });
      }
      rs(t) {
        return ka(this, void 0, void 0, function* () {
          const e = yield bi.getValidatedChromeStorageDataAsync(),
            i = (yield this.os(t)).getCurrentSessionData();
          if (i) {
            const n = { sessionCallbackData: i, storageData: e, isCreate: !1, showReviewMessage: this.cs(e) },
              s = new Pi(m, b, n);
            yield this.sendMessageToTabAsync(t, s);
            const r = { name: "video_fix", action: { description: "video session was restored after next video error" } };
            this.logEventForTabId(r, t);
          }
        });
      }
      hs(t) {
        if (t.tab && t.tab.id && t.url) {
          const e = t.tab.id;
          if (this.Nt.checkAliveTab(e)) return this.Nt.removeAliveTab(e), void this.rs(e);
        }
      }
      Tn(t, e) {
        return ka(this, void 0, void 0, function* () {
          if (!(e.tab && e.tab.id && e.url)) throw new Error("Invalid Request");
          {
            const i = e.url,
              n = e.tab.id,
              s = Ze.getSocketForTabId(n),
              r = yield this.us(n);
            if (this.Nt.checkAliveTab(n) && (this.Nt.removeAliveTab(n), s)) {
              const t = s.getCurrentSessionData();
              if (
                r &&
                t &&
                (null == r ? void 0 : r.sessionId) === (null == t ? void 0 : t.sessionId) &&
                t.serviceDomain &&
                i.includes(t.serviceDomain)
              )
                return void this.rs(n);
            }
            const o = new bt(new URL(i), n);
            let a, c, h;
            if (
              (yield this.$n(n),
              r ? ((a = r.sessionId), (c = r.videoType), (h = r.serviceDomain), yield this.ds(n)) : (a = o.sessionIdFromUrl),
              a)
            ) {
              t.videoId && (o.videoId = t.videoId);
              const e = { extensionTab: o, sessionId: a, videoType: c, serviceDomain: h };
              return yield this.ls(e);
            }
            const u = this.bn.checkFlag("aa_test_experiment_1");
            console.log(u);
          }
        });
      }
      fs(t) {
        var e, i;
        return {
          userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
          userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
          nameColor: t.nameColor,
          badge: t.badge,
          reactions: t.reactions
        };
      }
      ls(t) {
        var e, i;
        return ka(this, void 0, void 0, function* () {
          const n = t.extensionTab,
            s = n.streamingService,
            r = yield this.os(n.id);
          r.clearSessionData();
          const o = yield this.Xn(n.id),
            a = yield null === (e = _a().currentUser) || void 0 === e ? void 0 : e.getIdToken(),
            c = yield bi.getValidatedChromeStorageDataAsync(),
            h = yield r.getUserIdAsync(),
            u = c.userId ? c.userId : h;
          c.userId || (yield this.ps(h), (c.userId = h));
          const d = this.fs(c),
            l = null !== (i = null == s ? void 0 : s.serverName) && void 0 !== i ? i : "",
            f = { videoId: n.videoId, sessionId: t.sessionId, videoService: l, permId: u, userSettings: d },
            p = yield new Promise((t) => {
              r.sendMessage(Fe.JOIN_SESSION, f, (e) => {
                t(e);
              });
            });
          (p.socketConnectionId = h), (p.userId = h);
          const v = Object.assign(Object.assign({}, p), {
              permId: u,
              videoService: l,
              videoType: t.videoType,
              serviceDomain: t.serviceDomain,
              userSettings: d,
              created: !1
            }),
            g = yield this.vs(p, t.extensionTab.id, c, l);
          r.loadSessionData(v, d), this.Ln({ sessionId: p.sessionId, created: !1 });
          return (
            (yield hi.getItemsAsync(["lastPartyId"])) !== p.sessionId &&
              A("logging", "POST", !0, { show: o.videoTitle, streamingService: l, eventType: T.PARTY_JOIN }, a).catch((t) =>
                console.error(t)
              ),
            yield vi.setItemsAsync({ lastPartyId: p.sessionId }),
            g
          );
        });
      }
      _n(t) {
        var e, i;
        return ka(this, void 0, void 0, function* () {
          const n = t.extensionTabData,
            s = n.streamingService,
            r = yield this.Xn(n.id),
            o = yield this.os(n.id),
            a = yield null === (e = _a().currentUser) || void 0 === e ? void 0 : e.getIdToken();
          o.clearSessionData();
          const c = yield bi.getValidatedChromeStorageDataAsync(),
            h = yield o.getUserIdAsync(),
            u = c.userId ? c.userId : h;
          c.userId || (yield this.ps(h), (c.userId = h));
          const d = this.fs(c),
            l = null !== (i = null == s ? void 0 : s.serverName) && void 0 !== i ? i : "",
            f = {
              controlLock: t.createSettings.controlLock,
              videoId: r.videoId,
              videoDuration: r.videoDuration,
              videoType: r.videoType,
              serviceDomain: r.serviceDomain,
              videoService: l,
              syncFromEnd: null == s ? void 0 : s.syncFromEnd,
              permId: u,
              userSettings: d
            },
            p = yield new Promise((t) => {
              o.sendMessage(Fe.CREATE_SESSION, f, (e) => {
                t(e);
              });
            });
          (p.socketConnectionId = h), (p.userId = h);
          const v = Object.assign(Object.assign({}, p), {
              permId: u,
              videoService: l,
              messages: [],
              created_at: Date.now(),
              videoType: r.videoType,
              serviceDomain: r.serviceDomain,
              userSettings: d,
              created: !1
            }),
            g = yield this.gs(p, n.id, c, l);
          return (
            o.loadSessionData(v, d),
            A("logging", "POST", !0, { show: r.videoTitle, streamingService: l, eventType: T.PARTY_START }, a).catch((t) =>
              console.error(t)
            ),
            g
          );
        });
      }
      os(t) {
        return ka(this, void 0, void 0, function* () {
          const e = Ze.getSocketForTabId(t);
          if (e) return e;
          {
            const e = yield this.bs(t);
            return Ze.setSocketForTabId(t, e), e;
          }
        });
      }
      getUserData() {
        return ka(this, void 0, void 0, function* () {
          const t = yield this.ys(),
            e = _a(),
            i = null !== e.currentUser,
            n = i ? yield this._s() : { status: 0 },
            s = yield this.es();
          return {
            userSettings: t,
            presence_data: n,
            signedIn: i,
            currentUser: e.currentUser,
            has_premium: void 0 !== s && !u.includes(s.subscriptionStatus)
          };
        });
      }
      wn() {
        return ka(this, void 0, void 0, function* () {
          const t = yield hi.getItemsAsync([Ii.STATUS_TYPE]);
          t[Ii.STATUS_TYPE] === Ti.NO_ACTIVITY
            ? (this.ln = Ti.NO_ACTIVITY)
            : t[Ii.STATUS_TYPE] === Ti.OFFLINE
            ? (this.ln = Ti.OFFLINE)
            : (this.ln = Ti.WITH_ACTIVITY);
        });
      }
      Vn(t) {
        return ka(this, void 0, void 0, function* () {
          (this.ln = t), yield vi.setItemsAsync({ [Ii.STATUS_TYPE]: t }), yield this.updatePresenceState();
        });
      }
      Bn(t) {
        return ka(this, void 0, void 0, function* () {
          const e = Ze.getTabForSessionId(t.sessionId);
          void 0 !== e &&
            chrome.tabs.update(e, { active: !0, highlighted: !0 }, (i) =>
              ka(this, void 0, void 0, function* () {
                const n = null == i ? void 0 : i.url;
                if (n) {
                  const i = { extensionTabData: new bt(new URL(n), e), createSettings: { controlLock: !1 }, source: "dropin" };
                  console.log("Creating dropin session"), yield this._n(i), this.removePartyInvite(t.sessionId);
                } else console.error("Couldn't get url, should message pass here");
              })
            );
        });
      }
      Ln(t) {
        this.Un = t.sessionId;
      }
      updateBadgeCount() {
        return ka(this, void 0, void 0, function* () {
          const t = JSON.parse(yield this.sendApiRequest("friends", "GET", !0, {}))
            .filter((t) => void 0 === t.sent)
            .filter((t) => {
              var e;
              return t.presence_data && 1 !== (null === (e = t.presence_data) || void 0 === e ? void 0 : e.status);
            });
          t.length > 0 ? chrome.browserAction.setBadgeText({ text: `${t.length}` }) : chrome.browserAction.setBadgeText({ text: "" }),
            chrome.browserAction.setBadgeBackgroundColor({ color: "#5a5a5a" });
        });
      }
      reToggleOpenParty(t) {
        return ka(this, void 0, void 0, function* () {
          return this.Mn({ open: !0, tabId: t });
        });
      }
      Mn(t) {
        return ka(this, void 0, void 0, function* () {
          if (!t.tabId) throw new Error("Invalid Tab Id");
          if ((yield vi.setItemsAsync({ [Ii.DROPIN_KEY]: t.open }), t.open)) {
            const e = yield this.getSocketForTabAsync(t.tabId);
            if (e.sessionId) return (e.dropInToggled = !0), !0;
            const i = yield bi.getValidatedChromeStorageDataAsync(),
              n = yield e.getUserIdAsync(),
              s = { permId: i.userId ? i.userId : n, token: yield this.Is() },
              r = yield new Promise((t) => {
                e.sendMessage(Fe.CREATE_TEMP_SESSION, s, (e) => {
                  t(e);
                });
              });
            if (!r || r.errorMessage) throw new Error(r ? r.errorMessage : y);
            {
              const t = r.sessionId;
              (e.tempSessionId = t), (this.ht = t), (e.dropInToggled = !0);
            }
            console.log("Got temp session data: " + this.ht);
          } else {
            const e = Ze.getSocketForTabId(t.tabId);
            e &&
              ((e.dropInToggled = !1),
              void 0 === (null == e ? void 0 : e.sessionId) ? Ze.removeSocketForTabId(t.tabId) : (e.tempSessionId = void 0));
          }
          return t.open;
        });
      }
      $n(t) {
        return ka(this, void 0, void 0, function* () {
          const e = Ze.getSocketForTabId(t);
          e && (e.teardown(), Ze.removeSocketForTabId(t));
        });
      }
      bs(t) {
        return ka(this, void 0, void 0, function* () {
          const e = new oi(t);
          return yield e.createSocketForTab();
        });
      }
      Xn(t) {
        return ka(this, void 0, void 0, function* () {
          const e = new Ai(m, b, Si.GET_VIDEO_DATA),
            i = yield Le.sendMessageToTabAsync(e, t);
          if (i) {
            if (i.error) throw new Error(i.error);
            return i;
          }
          throw new Error("Failed to connect to Script. Please refresh the page and try again");
        });
      }
      us(t) {
        return ka(this, void 0, void 0, function* () {
          const e = _i.getRedirectDataForTabAsync(t);
          return _i.deleteRedirectDataForTabAsync(t), e;
        });
      }
      ds(t) {
        return ka(this, void 0, void 0, function* () {
          return _i.deleteRedirectDataForTabAsync(t);
        });
      }
      ve() {
        return ka(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            let i = 0;
            const n = () =>
              ka(this, void 0, void 0, function* () {
                i++;
                const s = yield bi.getValidatedChromeStorageDataAsync();
                s.userId ? t(s.userId) : i < 5 ? setTimeout(n, 5e3) : e("Could not get permId in time");
              });
            n();
          });
        });
      }
      ps(t) {
        return ka(this, void 0, void 0, function* () {
          s()("No perm id found, using socket id"), yield vi.setItemsAsync({ userId: t });
        });
      }
      setUserPresence(t) {
        var e;
        return ka(this, void 0, void 0, function* () {
          t.status,
            t.status_text,
            t.description,
            t.session_id,
            t.service,
            yield null === (e = _a().currentUser) || void 0 === e ? void 0 : e.getIdToken();
        });
      }
      Is() {
        return ka(this, void 0, void 0, function* () {
          return (yield this.jn(!1)).token;
        });
      }
      jn(t) {
        return ka(this, void 0, void 0, function* () {
          const e = _a();
          if (e.currentUser) {
            return { token: yield e.currentUser.getIdToken(t) };
          }
          throw new Error("Not Signed In");
        });
      }
      Rn() {
        return ka(this, void 0, void 0, function* () {
          const t = _a();
          yield t.signOut(), this.ce({ name: "signout" });
        });
      }
      yn() {
        return ka(this, void 0, void 0, function* () {
          this.triggerSignIn();
        });
      }
      ks() {
        return ka(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.windows.getAll((i) => {
              chrome.runtime.lastError && e(chrome.runtime.lastError), t(i.filter((t) => "popup" === t.type));
            });
          });
        });
      }
      checkPopupWindow() {
        return ka(this, void 0, void 0, function* () {
          try {
            const t = yield this.ks();
            yield O(2e3)();
            const e = (yield this.ks()).filter((e) => null == t.find((t) => t.id === e.id));
            if (e.length > 0) {
              const t = e[0];
              void 0 !== t.tabs || t.focused || (yield this.Ss(t.id, { focused: !0 }));
            }
          } catch (t) {}
        });
      }
      Ts(t) {
        var e;
        return ka(this, void 0, void 0, function* () {
          this.ce({ name: "signup" });
          const i = yield null === (e = _a().currentUser) || void 0 === e ? void 0 : e.getIdToken();
          return A("logging", "POST", !0, { optin: t, eventType: T.REGISTER }, i);
        });
      }
      doEmailSignUp(t, e, i) {
        return ka(this, void 0, void 0, function* () {
          const n = _a();
          if (n.currentUser) return !1;
          (yield Promise.all([Xr(n, t, e)])) && (yield this.yn(), this.Ts(i).catch((t) => console.error(t)));
        });
      }
      doEmailSignIn(t, e) {
        return ka(this, void 0, void 0, function* () {
          const i = _a();
          if (i.currentUser) return !1;
          console.log("Trying to do email sign in");
          if ((yield Zr(i, t)).includes(jr.PROVIDER_ID)) throw { code: "auth/google-account" };
          (yield Promise.all([Yr(i, t, e)])) && (this.ce({ name: "signin" }), yield this.yn());
        });
      }
      forgotPassword(t) {
        return ka(this, void 0, void 0, function* () {
          const e = _a();
          if (e.currentUser) return !1;
          console.log("Trying to do email sign in");
          (yield Promise.all([Kr(e, t)])) && this.ce({ name: "forgot_password" });
        });
      }
      doAuthSignIn() {
        var t;
        return ka(this, void 0, void 0, function* () {
          const e = new jr(),
            i = _a();
          if (i.currentUser) return !1;
          try {
            const n = yield Promise.all([Bo(i, e), this.checkPopupWindow()]);
            if (n) {
              yield this.yn();
              const e = ro(n[0]),
                i = null === (t = n[0].user) || void 0 === t ? void 0 : t.email;
              (null == e ? void 0 : e.isNewUser) && i ? this.Ts(!0).catch((t) => console.error(t)) : this.ce({ name: "signin" });
            }
          } catch (t) {
            console.log(t);
          }
          return !0;
        });
      }
      logExperimentAsync(t) {
        return ka(this, void 0, void 0, function* () {
          try {
            const e = { permId: yield this.ve(), event: t.eventType, name: t.experimentName, version: t.experimentVersion };
            console.log("event: " + JSON.stringify(e));
            const i = new XMLHttpRequest();
            i.open("POST", "https://data3.netflixparty.com/log-experiment"),
              i.setRequestHeader("Content-Type", "application/json"),
              i.send(JSON.stringify(e));
          } catch (t) {
            console.log("log event error : " + t);
          }
        });
      }
      cs(t) {
        return void 0 !== t.extensionUses && (1 === t.extensionUses || t.extensionUses % 5 == 0) && !t.reviewClicked;
      }
      removePartyInvite(t) {
        return ka(this, void 0, void 0, function* () {
          yield this.sendApiRequest("remove-party-invite", "POST", !0, { sessionId: t });
        });
      }
      gs(t, e, i, n, s) {
        return ka(this, void 0, void 0, function* () {
          if (!t || t.errorMessage) throw (this.ds(e), new Error(t ? t.errorMessage : y));
          {
            const r = { sessionCallbackData: t, storageData: i, isCreate: !0, showReviewMessage: this.cs(i) },
              o = new Pi(m, b, r);
            yield this.sendMessageToTabAsync(e, o);
            const a = { eventType: "create-session-chrome" + (s ? "-pc" : ""), sessionId: t.sessionId };
            this.logOldEventAsync(a);
            const c = { name: "party_start", action: { description: n, reason: "session was created" } };
            return this.logEventForTabId(c, e), this.Wn(), { sessionId: t.sessionId, showReviewMessage: this.cs(i) };
          }
        });
      }
      vs(t, e, i, n) {
        return ka(this, void 0, void 0, function* () {
          if (!t || t.errorMessage)
            throw (
              (this.ds(e),
              new Error(
                t ? t.errorMessage : "An error occured while trying to join the session. Please navigate to the party url and try again."
              ))
            );
          {
            const s = { sessionCallbackData: t, storageData: i, isCreate: !1, showReviewMessage: this.cs(i) },
              r = new Pi(m, b, s);
            yield this.sendMessageToTabAsync(e, r);
            const o = { eventType: "join-session-chrome", sessionId: t.sessionId };
            this.logOldEventAsync(o);
            const a = { name: "party_join", action: { description: n } };
            return this.logEventForTabId(a, e), this.Wn(), { sessionId: t.sessionId, showReviewMessage: this.cs(i) };
          }
        });
      }
      getUserSettingsForStorageData(t) {
        var e, i;
        return {
          userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
          userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : ""
        };
      }
      getSocketForTabAsync(t) {
        return ka(this, void 0, void 0, function* () {
          const e = Ze.getSocketForTabId(t);
          if (e) return e;
          {
            const e = yield this.createSocketForTabAsync(t);
            return Ze.setSocketForTabId(t, e), e;
          }
        });
      }
      createSocketForTabAsync(t) {
        return ka(this, void 0, void 0, function* () {
          return new oi(t).createSocketForTab();
        });
      }
      Ss(t, e) {
        return ka(this, void 0, void 0, function* () {
          return new Promise((i, n) => {
            chrome.windows.update(t, e, (t) =>
              ka(this, void 0, void 0, function* () {
                chrome.runtime.lastError ? n(chrome.runtime.lastError) : (yield O(150)(), i(t));
              })
            );
          });
        });
      }
      Cs(t) {
        return ka(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            chrome.windows.create(t, (t) => {
              chrome.runtime.lastError || void 0 === t ? i(chrome.runtime.lastError) : e(t);
            });
          });
        });
      }
      Es(t) {
        return new Promise((e) => {
          chrome.windows.get(t, (t) => {
            chrome.runtime.lastError || void 0 === t ? e(!1) : e(!0);
          });
        });
      }
      Os(t) {
        return new Promise((e, i) => {
          chrome.tabs.query({ windowId: t }, (t) => {
            var n;
            chrome.runtime.lastError ? i(chrome.runtime.lastError) : e(null !== (n = t[0].id) && void 0 !== n ? n : 0);
          });
        });
      }
      As(t) {
        return new Promise((e) => {
          chrome.tabs.update(t, { active: !0 }, () => {
            e();
          });
        });
      }
      Dn(t) {
        return ka(this, void 0, void 0, function* () {
          const e = t.videoWindow;
          yield this.As(t.videoTabId);
          let i = t.chatWindow;
          (yield this.Es(i.id)) && (i = yield this.Ss(i.id, { state: "minimized", focused: !1 })),
            yield this.Ss(e.id, { state: "maximized" }),
            yield this.Ss(e.id, { focused: !0, width: window.screen.width, height: window.screen.height });
        });
      }
      Nn(t, e = 0) {
        var i;
        return ka(this, void 0, void 0, function* () {
          let n = t.videoWindow;
          yield this.As(t.videoTabId),
            (n = yield this.Ss(n.id, { state: "maximized" })),
            (n = yield this.Ss(n.id, {
              state: "normal",
              width: window.screen.width - 358,
              height: window.screen.availHeight,
              left: 0,
              top: 0,
              focused: !0
            }));
          let s = t.chatWindow,
            r = !1;
          (yield this.Es(s.id)) || ((s = yield this.Cs({ url: f, type: "popup" })), (r = !0));
          const o = yield this.Os(s.id);
          if (!r) {
            const t = yield this.En(o);
            void 0 !== t.url && t.url !== f && (yield this.Qn(o, f));
          }
          s = yield this.Ss(s.id, {
            state: "normal",
            width: _,
            height: window.screen.availHeight,
            left: window.screen.width - _,
            top: 0,
            focused: !0
          });
          const a = { chatWindow: s, videoWindow: n, chatTabId: o, videoTabId: t.videoTabId };
          this.dn.set(t.videoTabId, a);
          const c = Ze.getSocketForTabId(t.videoTabId);
          if (
            (c && Ze.setSocketForTabId(o, c),
            console.log(n.width),
            e < 2 && window.screen.width - (null !== (i = n.width) && void 0 !== i ? i : 0) < 50)
          )
            return console.log("Retry Reset"), this.Nn(t, e + 1);
        });
      }
      fullScreen(t, e = !0) {
        return ka(this, void 0, void 0, function* () {
          let i = "fullscreen";
          e || (i = "maximized"), yield this.Ss(t, { state: i });
        });
      }
      Pn(t, e) {
        var i;
        return ka(this, void 0, void 0, function* () {
          const n = yield this.Ss(e, { state: "maximized" });
          yield this.Ss(n.id, { state: "normal", width: window.screen.width - 358, height: window.screen.availHeight });
          const s = yield this.Cs({ url: f, type: "popup", state: "maximized" });
          if (
            (yield this.Ss(s.id, { state: "normal", width: _, height: window.screen.availHeight, left: window.screen.width - _, top: 0 }),
            !s || !n)
          )
            throw new Error("Failed to Create Party View");
          {
            const e = s.tabs && null !== (i = s.tabs[0].id) && void 0 !== i ? i : 0,
              r = { chatWindow: s, videoWindow: n, chatTabId: e, videoTabId: t };
            this.dn.set(t, r);
            const o = Ze.getSocketForTabId(r.videoTabId);
            o && Ze.setSocketForTabId(e, o);
          }
        });
      }
      waitForPermId() {
        return ka(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            let i = 0;
            const n = () =>
              ka(this, void 0, void 0, function* () {
                i++;
                const s = yield bi.getValidatedChromeStorageDataAsync();
                s.userId ? t(s.userId) : i < 5 ? setTimeout(n, 5e3) : e("Could not get permId in time");
              });
            n();
          });
        });
      }
      Sn(t, e) {
        return (i) => {
          this.Ps(i.message, e), t({ error: i.message });
        };
      }
      Ps(t, e, i) {
        const n = { name: "error", action: { reason: t, description: i } };
        this.ce(n, e), s()("An error occured: " + i + t);
      }
      we() {
        chrome.runtime.onSuspend.addListener(() => {
          Ze.teardown();
        }),
          chrome.tabs.onRemoved.addListener(this.Ns.bind(this)),
          chrome.runtime.onMessage.addListener(this.ye.bind(this)),
          this.Ds(),
          new Zi();
      }
      Ns(t) {
        return ka(this, void 0, void 0, function* () {
          let e = !1;
          try {
            yield this.En(t);
            e = !0;
          } catch (t) {}
          const i = Ze.getSocketForTabId(t);
          if (i && (!e || !this.Nt.checkAliveTab(t))) {
            const e = { name: "tab_close", action: { description: "tab was closed with socket", source: "tabID: " + t } };
            this.logEventForTabId(e, t),
              s()("Detected Tab Close: Disconnecting socket for tab: " + t),
              i.teardown(),
              Ze.removeSocketForTabId(t);
          }
        });
      }
      Ds() {
        chrome.runtime.onConnect.addListener((t) => {
          var e, i;
          const n = null === (i = null === (e = t.sender) || void 0 === e ? void 0 : e.tab) || void 0 === i ? void 0 : i.id;
          if (n) {
            s()("Connected to Content Script with Tab ID: " + n);
            try {
              t.postMessage("pong"),
                t.onDisconnect.addListener(() => {
                  console.log("Detected port disconnect: " + n), this.Ns(n);
                });
            } catch (t) {}
          }
        });
      }
      Wt(t) {
        try {
          vi.setItemsAsync(t);
        } catch (t) {
          this.logError("Update chrome Storage Data Failed " + t);
        }
      }
      sendMessageToTabAsync(t, e, i) {
        return ka(this, void 0, void 0, function* () {
          return new Promise((n, s) => {
            let r;
            i &&
              (r = setTimeout(() => {
                s(new Error("Could not get a response from the page in time. Please refresh the page and try again."));
              }, i)),
              chrome.tabs.sendMessage(t, e, (t) => {
                r && clearTimeout(r), n(t);
              });
          });
        });
      }
      receiveMessageOnError(t) {
        return (e) => {
          this.logError(e.message), t({ error: e.message });
        };
      }
      logError(t) {
        s()("An error occured: " + t);
      }
      xn() {
        return new Promise((t, e) => {
          fetch(`${h}/events`, { credentials: "include" })
            .then((i) =>
              ka(this, void 0, void 0, function* () {
                i.ok ? t(yield i.json()) : e(yield i.json());
              })
            )
            .catch((t) => {
              e(t);
            });
        });
      }
      Fn() {
        return new Promise((t, e) => {
          fetch(`${h}/recent_events`, { credentials: "include" })
            .then((i) =>
              ka(this, void 0, void 0, function* () {
                i.ok ? t(yield i.json()) : e(yield i.json());
              })
            )
            .catch((t) => {
              e(t);
            });
        });
      }
      es() {
        var t;
        return ka(this, void 0, void 0, function* () {
          const e = yield null === (t = _a().currentUser) || void 0 === t ? void 0 : t.getIdToken();
          if (e)
            try {
              const t = JSON.parse(yield A("subscription", "GET", !0, {}, e));
              return (this.ns = t), (this.gn = Date.now()), (this.mn = 0), t;
            } catch (t) {
              this.mn > 0 && (this.gn = Date.now()), (this.mn += 1);
            }
        });
      }
      _s() {
        var t;
        return ka(this, void 0, void 0, function* () {
          yield null === (t = _a().currentUser) || void 0 === t ? void 0 : t.getIdToken();
          return { status: 0 };
        });
      }
      ys() {
        return ka(this, void 0, void 0, function* () {
          const t = yield bi.getValidatedChromeStorageDataAsync();
          return this.getUserSettingsForStorageData(t);
        });
      }
    }
    Sa.SUBSCRIPTION_CACHE_TIME = 144e5;
    const Ta = new Sa(),
      Ca = Ta;
    window.teleparty = Ta;
  })();
})();
