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
            return r(((c = r(r(e, t), r(n, o))) << (a = s)) | (c >>> (32 - a)), i);
            var c, a;
          }
          function c(t, e, i, n, s, r, c) {
            return o((e & i) | (~e & n), t, e, s, r, c);
          }
          function a(t, e, i, n, s, r, c) {
            return o((e & n) | (i & ~n), t, e, s, r, c);
          }
          function h(t, e, i, n, s, r, c) {
            return o(e ^ i ^ n, t, e, s, r, c);
          }
          function u(t, e, i, n, s, r, c) {
            return o(i ^ (e | ~n), t, e, s, r, c);
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
                (l = c(l, f, p, v, t[i], 7, -680876936)),
                (v = c(v, l, f, p, t[i + 1], 12, -389564586)),
                (p = c(p, v, l, f, t[i + 2], 17, 606105819)),
                (f = c(f, p, v, l, t[i + 3], 22, -1044525330)),
                (l = c(l, f, p, v, t[i + 4], 7, -176418897)),
                (v = c(v, l, f, p, t[i + 5], 12, 1200080426)),
                (p = c(p, v, l, f, t[i + 6], 17, -1473231341)),
                (f = c(f, p, v, l, t[i + 7], 22, -45705983)),
                (l = c(l, f, p, v, t[i + 8], 7, 1770035416)),
                (v = c(v, l, f, p, t[i + 9], 12, -1958414417)),
                (p = c(p, v, l, f, t[i + 10], 17, -42063)),
                (f = c(f, p, v, l, t[i + 11], 22, -1990404162)),
                (l = c(l, f, p, v, t[i + 12], 7, 1804603682)),
                (v = c(v, l, f, p, t[i + 13], 12, -40341101)),
                (p = c(p, v, l, f, t[i + 14], 17, -1502002290)),
                (l = a(l, (f = c(f, p, v, l, t[i + 15], 22, 1236535329)), p, v, t[i + 1], 5, -165796510)),
                (v = a(v, l, f, p, t[i + 6], 9, -1069501632)),
                (p = a(p, v, l, f, t[i + 11], 14, 643717713)),
                (f = a(f, p, v, l, t[i], 20, -373897302)),
                (l = a(l, f, p, v, t[i + 5], 5, -701558691)),
                (v = a(v, l, f, p, t[i + 10], 9, 38016083)),
                (p = a(p, v, l, f, t[i + 15], 14, -660478335)),
                (f = a(f, p, v, l, t[i + 4], 20, -405537848)),
                (l = a(l, f, p, v, t[i + 9], 5, 568446438)),
                (v = a(v, l, f, p, t[i + 14], 9, -1019803690)),
                (p = a(p, v, l, f, t[i + 3], 14, -187363961)),
                (f = a(f, p, v, l, t[i + 8], 20, 1163531501)),
                (l = a(l, f, p, v, t[i + 13], 5, -1444681467)),
                (v = a(v, l, f, p, t[i + 2], 9, -51403784)),
                (p = a(p, v, l, f, t[i + 7], 14, 1735328473)),
                (l = h(l, (f = a(f, p, v, l, t[i + 12], 20, -1926607734)), p, v, t[i + 5], 4, -378558)),
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
            function c(...t) {
              if (!c.enabled) return;
              const n = c,
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
              (c.namespace = t),
              (c.useColors = e.useColors()),
              (c.color = e.selectColor(t)),
              (c.extend = n),
              (c.destroy = e.destroy),
              Object.defineProperty(c, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => (null !== o ? o : (s !== e.namespaces && ((s = e.namespaces), (r = e.enabled(t))), r)),
                set: (t) => {
                  o = t;
                }
              }),
              "function" == typeof e.init && e.init(c),
              c
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
        function c(t, e, i, n) {
          var s = e >= 1.5 * i;
          return Math.round(t / i) + " " + n + (s ? "s" : "");
        }
        t.exports = function (t, a) {
          a = a || {};
          var h = typeof t;
          if ("string" === h && t.length > 0)
            return (function (t) {
              if ((t = String(t)).length > 100) return;
              var c =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  t
                );
              if (!c) return;
              var a = parseFloat(c[1]);
              switch ((c[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return a * o;
                case "weeks":
                case "week":
                case "w":
                  return a * r;
                case "days":
                case "day":
                case "d":
                  return a * s;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return a * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return a * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return a * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return a;
                default:
                  return;
              }
            })(t);
          if ("number" === h && isFinite(t))
            return a.long
              ? (function (t) {
                  var r = Math.abs(t);
                  if (r >= s) return c(t, r, s, "day");
                  if (r >= n) return c(t, r, n, "hour");
                  if (r >= i) return c(t, r, i, "minute");
                  if (r >= e) return c(t, r, e, "second");
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
          var i, n, s, r, o, c, a, h;
          for (i = 3 & t.length, n = t.length - i, s = e, o = 3432918353, c = 461845907, h = 0; h < n; )
            (a =
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
                          ((s ^= a =
                            ((65535 &
                              (a = ((a = ((65535 & a) * o + ((((a >>> 16) * o) & 65535) << 16)) & 4294967295) << 15) | (a >>> 17))) *
                              c +
                              ((((a >>> 16) * c) & 65535) << 16)) &
                            4294967295) <<
                            13) |
                          (s >>> 19))) +
                      (((5 * (s >>> 16)) & 65535) << 16)) &
                    4294967295)) +
                (((58964 + (r >>> 16)) & 65535) << 16));
          switch (((a = 0), i)) {
            case 3:
              a ^= (255 & t.charCodeAt(h + 2)) << 16;
            case 2:
              a ^= (255 & t.charCodeAt(h + 1)) << 8;
            case 1:
              s ^= a =
                ((65535 &
                  (a =
                    ((a = ((65535 & (a ^= 255 & t.charCodeAt(h))) * o + ((((a >>> 16) * o) & 65535) << 16)) & 4294967295) << 15) |
                    (a >>> 17))) *
                  c +
                  ((((a >>> 16) * c) & 65535) << 16)) &
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
    i.d(n, { Z: () => ia });
    var t = {};
    i.r(t), i.d(t, { Decoder: () => De, Encoder: () => Re, PacketType: () => Ne, protocol: () => Pe });
    const e = chrome.runtime.id,
      s = [
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
        ".crave.",
        ".sling."
      ],
      r = "https://api.teleparty.com",
      o = "wss://ws.teleparty.com",
      c = "https://wptony1.netflixparty.com",
      a = ["canceled", "unpaid", "incomplete_expired", "incomplete"],
      h = "https://redirect.teleparty.com",
      u = {
        apiKey: "AIzaSyDvZJAoFJkT2lBrhloA0e9XwKmLgELTAeQ",
        authDomain: "teleparty-mobile.firebaseapp.com",
        projectId: "teleparty-mobile",
        storageBucket: "teleparty-mobile.appspot.com",
        messagingSenderId: "961974665980",
        appId: "1:961974665980:web:fe4179db8591331aeb8d79",
        measurementId: "G-PC36DK40FL"
      },
      d = `${h}/sidebar`,
      l = `${h}/friends`,
      f = "redirectDataMap",
      p = [
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
        "df6ae22ab6703ba141f0f332984eb578",
        "cb49691920eb99bf892990332db2af70",
        "4bad1875be647a5fdb36adac2d5dd26c",
        "ae63837e9c9b6b5dce7aeb5a0214aa1e",
        "70309b32ffa9f9542ca97ab6f2431b91",
        "2f04e600b84eb286b8ad6e7cad302dbd",
        "7d52fcdeed5b5a483603b4be5c45a2df",
        "050c88c09a60c7098b33d14a96843ac7",
        "c274ff9d348780515ae26b6bf852b15a"
      ],
      v = "Service_Background",
      g = "Content_Script";
    var m = console.log.bind(window.console),
      b = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function c(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, c);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    const w = new (class {
      addListener(t) {
        chrome.runtime.onMessage.addListener(t), chrome.runtime.onMessage.addListener(t);
      }
      removeListener(t) {
        chrome.runtime.onMessage.removeListener(t);
      }
      sendMessageToTabAsync(t, e, i = 2e4) {
        return b(this, void 0, void 0, function* () {
          return new Promise((n, s) => {
            const r = setTimeout(() => {
              console.log("send timeout"), s("Message Timeout");
            }, i);
            try {
              chrome.tabs.sendMessage(e, t, (e) => {
                chrome.runtime.lastError && m(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(r), n(e);
              });
            } catch (t) {
              clearTimeout(r), s(t);
            }
          });
        });
      }
      i(t, i) {
        return b(this, void 0, void 0, function* () {
          return new Promise((n, s) => {
            let r = null;
            i &&
              (r = setTimeout(() => {
                s({ error: "Send Message Timeout" });
              }, i));
            try {
              chrome.runtime.sendMessage(e, t, (e) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), r && clearTimeout(r), n(e);
              });
            } catch (t) {
              r && clearTimeout(r), s(t);
            }
          });
        });
      }
    })();
    const y = new (class {
      constructor() {
        (this.h = this.u.bind(this)), (this.l = []), this.p();
      }
      addMessageListener(t) {
        this.l.push(t);
      }
      removeMessageListener(t) {
        this.l = this.l.filter((t) => {});
      }
      p() {
        w.addListener(this.h);
      }
      teardown() {
        (this.l = []), w.removeListener(this.h);
      }
      u(t, e, i) {
        return (
          !!this.m(t, e, (t) => {
            i(null != t ? t : {});
          }) || (i({}), !1)
        );
      }
      m(t, e, i) {
        let n = !1;
        return (
          this.l.forEach((s) => {
            s.onMessage(t, e, i) && (n = !0);
          }),
          n
        );
      }
    })();
    var _ = i(1227),
      I = i.n(_);
    const T = "Failed to read chrome storage. Please refresh the page and try again",
      S = "An unexpected error occured. Please refresh the page and try again.",
      k = 368;
    chrome.extension.getURL("img/x-circle.svg");
    class C {
      constructor(t, e, i, n, s, r = []) {
        (this.requiredPermissions = t),
          (this.serverName = i),
          (this.name = n),
          (this.contentScripts = e),
          (this.syncFromEnd = s),
          (this.browseScripts = r);
      }
      urlWithSessionId(t) {
        return `https://redirect.teleparty.com/join/${t}`;
      }
    }
    var E, A;
    !(function (t) {
      (t.NETFLIX = "Netflix"),
        (t.HULU = "Hulu"),
        (t.DISNEY_PLUS = "Disney"),
        (t.DISNEY_PLUS_MENA = "DisneyMena"),
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
        (t.CRAVE = "Crave"),
        (t.SLING = "slingtv");
    })(E || (E = {})),
      (function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(A || (A = {}));
    var O,
      P = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function c(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, c);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    function N(t) {
      return t.includes("urn:hbo:feature")
        ? A.FEATURE
        : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
        ? A.EPISODE
        : t.includes("urn:hbo:extra")
        ? A.EXTRA
        : A.OTHER;
    }
    function R(t) {
      return function () {
        return new Promise((e) => {
          setTimeout(() => {
            e();
          }, t);
        });
      };
    }
    function D(t, e, i, n, s, o) {
      return P(this, void 0, void 0, function* () {
        const c = `${r}/${t}`,
          a = new XMLHttpRequest();
        if ((a.open(e, c), i)) {
          if (!s) throw (console.error("Passed Token: " + s), new Error("403"));
          a.setRequestHeader("Authorization", `Bearer ${s}`), a.setRequestHeader("Content-Type", "application/json");
        }
        if (o) for (const t of Object.keys(o)) a.setRequestHeader(t, o[t]);
        return new Promise((t, e) => {
          a.addEventListener("readystatechange", () => {
            if (a.readyState === XMLHttpRequest.DONE) {
              const i = a.status;
              0 === i || (i >= 200 && i < 400) ? t(a.responseText) : e(a.responseText);
            }
          }),
            a.send(JSON.stringify(n));
        });
      });
    }
    !(function (t) {
      (t.REGISTER = "register"),
        (t.PARTY_START = "party_start"),
        (t.PARTY_JOIN = "party_join"),
        (t.PARTY_END = "party_end"),
        (t.PARTY_SHARE = "party_share");
    })(O || (O = {}));
    const F = new (class extends C {
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
    })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", E.NETFLIX, !1);
    Object.freeze(F);
    const x = F;
    const j = new (class extends C {
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
    })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", E.HULU, !1);
    Object.freeze(j);
    const M = j;
    const L = new (class extends C {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".disneyplus.") && t.pathname.includes("/video");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".disneyplus.") && !t.hostname.includes("apps.disneyplus.");
      }
      getVideoId(t) {
        const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
        return e && e.length > 0 ? e[1] : void 0;
      }
    })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", E.DISNEY_PLUS, !1, [
      "browse_scripts/disney/disney_browse_bundled.js"
    ]);
    Object.freeze(L);
    const U = L;
    const B = new (class extends C {
      isValidUrl(t) {
        return (function (t) {
          return (t.hostname.includes(".hbomax.") && "other" !== N(t.pathname)) || t.pathname.includes("urn:hbo:page");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".hbomax.");
      }
      getVideoId(t) {
        const e = "urn:hbo:" + N(t.pathname) + ":",
          i = t.pathname.split(e);
        let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
        const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
        let r = s && s.length > 0 ? s[1] : void 0;
        return r || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (r = null != n && 3 == n.length ? n[2] : void 0)), r;
      }
      getVideoType(t) {
        return N(t.pathname);
      }
    })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", E.HBO_MAX, !1);
    Object.freeze(B);
    const V = B;
    const $ = new (class extends C {
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
    })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", E.AMAZON, !1);
    Object.freeze($);
    const W = $;
    const G = new (class extends C {
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
    })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", E.CRUNCHYROLL, !1);
    Object.freeze(G);
    const H = G;
    const z = new (class extends C {
      isBrowsing(t) {
        return !(t.href.includes(".hotstar.") || t.href.includes("apps.disneyplus.") || !t.href.includes("watch?"));
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
    })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", E.YOUTUBE, !1);
    Object.freeze(z);
    const J = z;
    const q = new (class extends C {
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
    })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", E.ESPN, !1);
    Object.freeze(q);
    const K = q;
    const X = new (class extends C {
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
    })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", E.PARAMOUNT, !1);
    Object.freeze(X);
    const Y = X;
    const Z = new (class extends C {
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
    })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", E.HOTSTAR, !1);
    Object.freeze(Z);
    const Q = Z;
    const tt = new (class extends C {
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
    })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", E.PEACOCK, !1);
    Object.freeze(tt);
    const et = tt;
    const it = new (class extends C {
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
    })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", E.FUNIMATION, !1);
    Object.freeze(it);
    const nt = it;
    const st = new (class extends C {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("play.max.");
      }
      getVideoId(t) {
        var e;
        const i = null === (e = t.pathname) || void 0 === e ? void 0 : e.match(/(watch\/)([a-zA-Z\-_0-9]+)\??/);
        return i ? i[2] : void 0;
      }
    })([], ["content_scripts/max/max_content_bundled.js"], "max", E.MAX, !1);
    Object.freeze(st);
    const rt = st;
    const ot = new (class extends C {
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
    })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", E.STAR_PLUS, !1);
    Object.freeze(ot);
    const ct = ot;
    const at = new (class extends C {
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
    })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", E.PLUTO_TV, !1);
    Object.freeze(at);
    const ht = at;
    const ut = new (class extends C {
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
    })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", E.APPLE_TV, !1);
    Object.freeze(ut);
    const dt = ut;
    const lt = new (class extends C {
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
    })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", E.JIO_CINEMA, !1);
    Object.freeze(lt);
    const ft = lt;
    const pt = new (class extends C {
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
    })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", E.TUBI_TV, !1);
    Object.freeze(pt);
    const vt = pt;
    const gt = new (class extends C {
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
    })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", E.CRAVE, !1);
    Object.freeze(gt);
    const mt = gt;
    const bt = new (class extends C {
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
    })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", E.MUBI, !1);
    Object.freeze(bt);
    const wt = bt;
    const yt = new (class extends C {
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
    })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", E.STAN, !1);
    Object.freeze(yt);
    const _t = yt;
    const It = new (class extends C {
      isValidUrl(t) {
        return (function (t) {
          const e = t.hostname.includes("watch.sling.com"),
            i = t.pathname.split("/");
          return e && i.length > 0 && "watch" === i[i.length - 1];
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes(".sling.com");
      }
      getVideoId(t) {
        const e = t.pathname.split("/");
        if (e.length > 3) return e[3];
      }
    })([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", E.SLING, !1);
    Object.freeze(It);
    const Tt = It;
    const St = new (class extends C {
      isValidUrl(t) {
        return (function (t) {
          return t.hostname.includes("apps.disneyplus.") && t.pathname.includes("/watch");
        })(t);
      }
      isBrowsing(t) {
        return t.hostname.includes("apps.disneyplus.");
      }
      getVideoId(t) {
        const e = t.pathname.split("/");
        return e && e.length > 1 ? e[e.length - 2] : void 0;
      }
    })([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", E.DISNEY_PLUS_MENA, !1);
    Object.freeze(St);
    const kt = St;
    class Ct {
      constructor(t, e) {
        (this.isBrowsing = !1), (this.needsCSPBlock = !1), (this.id = e), this.videoId, (this.url = t);
        const i = [dt],
          n = [x, M, U, V, W, J, H, K, Y, Q, et, ct, rt, nt, dt, ht, ft, vt, wt, _t, mt, Tt, kt];
        for (const e of n) {
          if (e.isValidUrl(this.url)) {
            (this.streamingService = e),
              (this.serviceName = e.name),
              (this.videoId = e.getVideoId(t)),
              i.includes(e) && (this.needsCSPBlock = !0);
            break;
          }
          if (e.isBrowsing(this.url)) {
            (this.isBrowsing = !0), (this.streamingService = e), (this.serviceName = e.name), i.includes(e) && (this.needsCSPBlock = !0);
            break;
          }
        }
      }
      urlWithSessionId(t) {
        return this.streamingService ? this.streamingService.urlWithSessionId(t) : void 0;
      }
    }
    const Et = 4500;
    class At {
      constructor() {
        this._ = new Map();
      }
      I() {
        let t = "";
        for (let e = 0; e < 16; e += 1) t += "0123456789abcdef"[Math.floor(16 * Math.random())];
        return t;
      }
      executeCallback(t, e) {
        console.log("Executing callback with id: " + t);
        const i = this._.get(t);
        i && (i(e), this._.delete(t));
      }
      addCallback(t, e) {
        let i = this.I();
        for (; this._.has(i); ) i = this.I();
        return (
          this._.set(i, t),
          e &&
            setTimeout(() => {
              this.executeCallback(i, { errorMessage: "Could not connect to the server. Please refresh the page and try again." });
            }, e),
          i
        );
      }
    }
    const Ot = Object.create(null);
    (Ot.open = "0"), (Ot.close = "1"), (Ot.ping = "2"), (Ot.pong = "3"), (Ot.message = "4"), (Ot.upgrade = "5"), (Ot.noop = "6");
    const Pt = Object.create(null);
    Object.keys(Ot).forEach((t) => {
      Pt[Ot[t]] = t;
    });
    const Nt = { type: "error", data: "parser error" },
      Rt = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob)),
      Dt = "function" == typeof ArrayBuffer,
      Ft = (t, e) => {
        const i = new FileReader();
        return (
          (i.onload = function () {
            const t = i.result.split(",")[1];
            e("b" + t);
          }),
          i.readAsDataURL(t)
        );
      },
      xt = ({ type: t, data: e }, i, n) => {
        return Rt && e instanceof Blob
          ? i
            ? n(e)
            : Ft(e, n)
          : Dt &&
            (e instanceof ArrayBuffer ||
              ((s = e), "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(s) : s && s.buffer instanceof ArrayBuffer))
          ? i
            ? n(e)
            : Ft(new Blob([e]), n)
          : n(Ot[t] + (e || ""));
        var s;
      },
      jt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      Mt = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
    for (let t = 0; t < jt.length; t++) Mt[jt.charCodeAt(t)] = t;
    const Lt = "function" == typeof ArrayBuffer,
      Ut = (t, e) => {
        if (Lt) {
          const i = ((t) => {
            let e,
              i,
              n,
              s,
              r,
              o = 0.75 * t.length,
              c = t.length,
              a = 0;
            "=" === t[t.length - 1] && (o--, "=" === t[t.length - 2] && o--);
            const h = new ArrayBuffer(o),
              u = new Uint8Array(h);
            for (e = 0; e < c; e += 4)
              (i = Mt[t.charCodeAt(e)]),
                (n = Mt[t.charCodeAt(e + 1)]),
                (s = Mt[t.charCodeAt(e + 2)]),
                (r = Mt[t.charCodeAt(e + 3)]),
                (u[a++] = (i << 2) | (n >> 4)),
                (u[a++] = ((15 & n) << 4) | (s >> 2)),
                (u[a++] = ((3 & s) << 6) | (63 & r));
            return h;
          })(t);
          return Bt(i, e);
        }
        return { base64: !0, data: t };
      },
      Bt = (t, e) => ("blob" === e && t instanceof ArrayBuffer ? new Blob([t]) : t),
      Vt = (t, e) => {
        if ("string" != typeof t) return { type: "message", data: Bt(t, e) };
        const i = t.charAt(0);
        if ("b" === i) return { type: "message", data: Ut(t.substring(1), e) };
        return Pt[i] ? (t.length > 1 ? { type: Pt[i], data: t.substring(1) } : { type: Pt[i] }) : Nt;
      },
      $t = String.fromCharCode(30);
    function Wt(t) {
      if (t)
        return (function (t) {
          for (var e in Wt.prototype) t[e] = Wt.prototype[e];
          return t;
        })(t);
    }
    (Wt.prototype.on = Wt.prototype.addEventListener =
      function (t, e) {
        return (this.T = this.T || {}), (this.T["$" + t] = this.T["$" + t] || []).push(e), this;
      }),
      (Wt.prototype.once = function (t, e) {
        function i() {
          this.off(t, i), e.apply(this, arguments);
        }
        return (i.fn = e), this.on(t, i), this;
      }),
      (Wt.prototype.off =
        Wt.prototype.removeListener =
        Wt.prototype.removeAllListeners =
        Wt.prototype.removeEventListener =
          function (t, e) {
            if (((this.T = this.T || {}), 0 == arguments.length)) return (this.T = {}), this;
            var i,
              n = this.T["$" + t];
            if (!n) return this;
            if (1 == arguments.length) return delete this.T["$" + t], this;
            for (var s = 0; s < n.length; s++)
              if ((i = n[s]) === e || i.fn === e) {
                n.splice(s, 1);
                break;
              }
            return 0 === n.length && delete this.T["$" + t], this;
          }),
      (Wt.prototype.emit = function (t) {
        this.T = this.T || {};
        for (var e = new Array(arguments.length - 1), i = this.T["$" + t], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        if (i) {
          n = 0;
          for (var s = (i = i.slice(0)).length; n < s; ++n) i[n].apply(this, e);
        }
        return this;
      }),
      (Wt.prototype.emitReserved = Wt.prototype.emit),
      (Wt.prototype.listeners = function (t) {
        return (this.T = this.T || {}), this.T["$" + t] || [];
      }),
      (Wt.prototype.hasListeners = function (t) {
        return !!this.listeners(t).length;
      });
    const Gt = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
    function Ht(t, ...e) {
      return e.reduce((e, i) => (t.hasOwnProperty(i) && (e[i] = t[i]), e), {});
    }
    const zt = setTimeout,
      Jt = clearTimeout;
    function qt(t, e) {
      e.useNativeTimers
        ? ((t.setTimeoutFn = zt.bind(Gt)), (t.clearTimeoutFn = Jt.bind(Gt)))
        : ((t.setTimeoutFn = setTimeout.bind(Gt)), (t.clearTimeoutFn = clearTimeout.bind(Gt)));
    }
    class Kt extends Error {
      constructor(t, e, i) {
        super(t), (this.description = e), (this.context = i), (this.type = "TransportError");
      }
    }
    class Xt extends Wt {
      constructor(t) {
        super(),
          (this.writable = !1),
          qt(this, t),
          (this.opts = t),
          (this.query = t.query),
          (this.readyState = ""),
          (this.socket = t.socket);
      }
      onError(t, e, i) {
        return super.emitReserved("error", new Kt(t, e, i)), this;
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
        const e = Vt(t, this.socket.binaryType);
        this.onPacket(e);
      }
      onPacket(t) {
        super.emitReserved("packet", t);
      }
      onClose(t) {
        (this.readyState = "closed"), super.emitReserved("close", t);
      }
    }
    const Yt = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
      Zt = {};
    let Qt,
      te = 0,
      ee = 0;
    function ie(t) {
      let e = "";
      do {
        (e = Yt[t % 64] + e), (t = Math.floor(t / 64));
      } while (t > 0);
      return e;
    }
    function ne() {
      const t = ie(+new Date());
      return t !== Qt ? ((te = 0), (Qt = t)) : t + "." + ie(te++);
    }
    for (; ee < 64; ee++) Zt[Yt[ee]] = ee;
    function se(t) {
      let e = "";
      for (let i in t) t.hasOwnProperty(i) && (e.length && (e += "&"), (e += encodeURIComponent(i) + "=" + encodeURIComponent(t[i])));
      return e;
    }
    let re = !1;
    try {
      re = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
    } catch (t) {}
    const oe = re;
    function ce(t) {
      const e = t.xdomain;
      try {
        if ("undefined" != typeof XMLHttpRequest && (!e || oe)) return new XMLHttpRequest();
      } catch (t) {}
      if (!e)
        try {
          return new Gt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
        } catch (t) {}
    }
    function ae() {}
    const he = null != new ce({ xdomain: !1 }).responseType;
    class ue extends Wt {
      constructor(t, e) {
        super(),
          qt(this, e),
          (this.opts = e),
          (this.method = e.method || "GET"),
          (this.uri = t),
          (this.async = !1 !== e.async),
          (this.data = void 0 !== e.data ? e.data : null),
          this.create();
      }
      create() {
        const t = Ht(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
        const e = (this.xhr = new ce(t));
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
        "undefined" != typeof document && ((this.index = ue.requestsCount++), (ue.requests[this.index] = this));
      }
      onError(t) {
        this.emitReserved("error", t, this.xhr), this.cleanup(!0);
      }
      cleanup(t) {
        if (void 0 !== this.xhr && null !== this.xhr) {
          if (((this.xhr.onreadystatechange = ae), t))
            try {
              this.xhr.abort();
            } catch (t) {}
          "undefined" != typeof document && delete ue.requests[this.index], (this.xhr = null);
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
    if (((ue.requestsCount = 0), (ue.requests = {}), "undefined" != typeof document))
      if ("function" == typeof attachEvent) attachEvent("onunload", de);
      else if ("function" == typeof addEventListener) {
        addEventListener("onpagehide" in Gt ? "pagehide" : "unload", de, !1);
      }
    function de() {
      for (let t in ue.requests) ue.requests.hasOwnProperty(t) && ue.requests[t].abort();
    }
    const le = "function" == typeof Promise && "function" == typeof Promise.resolve ? (t) => Promise.resolve().then(t) : (t, e) => e(t, 0),
      fe = Gt.WebSocket || Gt.MozWebSocket,
      pe = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
    const ve = {
        websocket: class extends Xt {
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
              i = pe
                ? {}
                : Ht(
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
              this.ws = pe ? new fe(t, e, i) : e ? new fe(t, e) : new fe(t);
            } catch (t) {
              return this.emitReserved("error", t);
            }
            (this.ws.binaryType = this.socket.binaryType || "arraybuffer"), this.addEventListeners();
          }
          addEventListeners() {
            (this.ws.onopen = () => {
              this.opts.autoUnref && this.ws.S.unref(), this.onOpen();
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
              xt(i, this.supportsBinary, (t) => {
                try {
                  this.ws.send(t);
                } catch (t) {}
                n &&
                  le(() => {
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
              this.opts.timestampRequests && (t[this.opts.timestampParam] = ne()),
              this.supportsBinary || (t.b64 = 1);
            const n = se(t);
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
            return !!fe;
          }
        },
        polling: class extends Xt {
          constructor(t) {
            if ((super(t), (this.polling = !1), "undefined" != typeof location)) {
              const e = "https:" === location.protocol;
              let i = location.port;
              i || (i = e ? "443" : "80"),
                (this.xd = ("undefined" != typeof location && t.hostname !== location.hostname) || i !== t.port),
                (this.xs = t.secure !== e);
            }
            const e = t && t.forceBase64;
            this.supportsBinary = he && !e;
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
              const i = t.split($t),
                n = [];
              for (let t = 0; t < i.length; t++) {
                const s = Vt(i[t], e);
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
                  xt(t, !1, (t) => {
                    (n[r] = t), ++s === i && e(n.join($t));
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
            !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = ne()),
              this.supportsBinary || t.sid || (t.b64 = 1),
              this.opts.port &&
                (("https" === e && 443 !== Number(this.opts.port)) || ("http" === e && 80 !== Number(this.opts.port))) &&
                (i = ":" + this.opts.port);
            const n = se(t);
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
            return Object.assign(t, { xd: this.xd, xs: this.xs }, this.opts), new ue(this.uri(), t);
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
      ge =
        /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      me = [
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
    function be(t) {
      const e = t,
        i = t.indexOf("["),
        n = t.indexOf("]");
      -1 != i && -1 != n && (t = t.substring(0, i) + t.substring(i, n).replace(/:/g, ";") + t.substring(n, t.length));
      let s = ge.exec(t || ""),
        r = {},
        o = 14;
      for (; o--; ) r[me[o]] = s[o] || "";
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
    class we extends Wt {
      constructor(t, e = {}) {
        super(),
          t && "object" == typeof t && ((e = t), (t = null)),
          t
            ? ((t = be(t)),
              (e.hostname = t.host),
              (e.secure = "https" === t.protocol || "wss" === t.protocol),
              (e.port = t.port),
              t.query && (e.query = t.query))
            : e.host && (e.hostname = be(e.host).host),
          qt(this, e),
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
        return new ve[t](i);
      }
      open() {
        let t;
        if (this.opts.rememberUpgrade && we.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
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
        we.priorWebsocketSuccess = !1;
        const n = () => {
          i ||
            (e.send([{ type: "ping", data: "probe" }]),
            e.once("packet", (t) => {
              if (!i)
                if ("pong" === t.type && "probe" === t.data) {
                  if (((this.upgrading = !0), this.emitReserved("upgrading", e), !e)) return;
                  (we.priorWebsocketSuccess = "websocket" === e.name),
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
        function c() {
          r("socket closed");
        }
        function a(t) {
          e && t.name !== e.name && s();
        }
        const h = () => {
          e.removeListener("open", n),
            e.removeListener("error", r),
            e.removeListener("close", o),
            this.off("close", c),
            this.off("upgrading", a);
        };
        e.once("open", n), e.once("error", r), e.once("close", o), this.once("close", c), this.once("upgrading", a), e.open();
      }
      onOpen() {
        if (
          ((this.readyState = "open"),
          (we.priorWebsocketSuccess = "websocket" === this.transport.name),
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
        (we.priorWebsocketSuccess = !1), this.emitReserved("error", t), this.onClose("transport error", t);
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
    we.protocol = 4;
    we.protocol;
    const ye = "function" == typeof ArrayBuffer,
      _e = Object.prototype.toString,
      Ie = "function" == typeof Blob || ("undefined" != typeof Blob && "[object BlobConstructor]" === _e.call(Blob)),
      Te = "function" == typeof File || ("undefined" != typeof File && "[object FileConstructor]" === _e.call(File));
    function Se(t) {
      return (
        (ye &&
          (t instanceof ArrayBuffer ||
            ((t) => ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer))(t))) ||
        (Ie && t instanceof Blob) ||
        (Te && t instanceof File)
      );
    }
    function ke(t, e) {
      if (!t || "object" != typeof t) return !1;
      if (Array.isArray(t)) {
        for (let e = 0, i = t.length; e < i; e++) if (ke(t[e])) return !0;
        return !1;
      }
      if (Se(t)) return !0;
      if (t.toJSON && "function" == typeof t.toJSON && 1 === arguments.length) return ke(t.toJSON(), !0);
      for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e) && ke(t[e])) return !0;
      return !1;
    }
    function Ce(t) {
      const e = [],
        i = t.data,
        n = t;
      return (n.data = Ee(i, e)), (n.attachments = e.length), { packet: n, buffers: e };
    }
    function Ee(t, e) {
      if (!t) return t;
      if (Se(t)) {
        const i = { k: !0, num: e.length };
        return e.push(t), i;
      }
      if (Array.isArray(t)) {
        const i = new Array(t.length);
        for (let n = 0; n < t.length; n++) i[n] = Ee(t[n], e);
        return i;
      }
      if ("object" == typeof t && !(t instanceof Date)) {
        const i = {};
        for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && (i[n] = Ee(t[n], e));
        return i;
      }
      return t;
    }
    function Ae(t, e) {
      return (t.data = Oe(t.data, e)), (t.attachments = void 0), t;
    }
    function Oe(t, e) {
      if (!t) return t;
      if (t && !0 === t.k) {
        if ("number" == typeof t.num && t.num >= 0 && t.num < e.length) return e[t.num];
        throw new Error("illegal attachments");
      }
      if (Array.isArray(t)) for (let i = 0; i < t.length; i++) t[i] = Oe(t[i], e);
      else if ("object" == typeof t) for (const i in t) Object.prototype.hasOwnProperty.call(t, i) && (t[i] = Oe(t[i], e));
      return t;
    }
    const Pe = 5;
    var Ne;
    !(function (t) {
      (t[(t.CONNECT = 0)] = "CONNECT"),
        (t[(t.DISCONNECT = 1)] = "DISCONNECT"),
        (t[(t.EVENT = 2)] = "EVENT"),
        (t[(t.ACK = 3)] = "ACK"),
        (t[(t.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
        (t[(t.BINARY_EVENT = 5)] = "BINARY_EVENT"),
        (t[(t.BINARY_ACK = 6)] = "BINARY_ACK");
    })(Ne || (Ne = {}));
    class Re {
      constructor(t) {
        this.replacer = t;
      }
      encode(t) {
        return (t.type !== Ne.EVENT && t.type !== Ne.ACK) || !ke(t)
          ? [this.encodeAsString(t)]
          : ((t.type = t.type === Ne.EVENT ? Ne.BINARY_EVENT : Ne.BINARY_ACK), this.encodeAsBinary(t));
      }
      encodeAsString(t) {
        let e = "" + t.type;
        return (
          (t.type !== Ne.BINARY_EVENT && t.type !== Ne.BINARY_ACK) || (e += t.attachments + "-"),
          t.nsp && "/" !== t.nsp && (e += t.nsp + ","),
          null != t.id && (e += t.id),
          null != t.data && (e += JSON.stringify(t.data, this.replacer)),
          e
        );
      }
      encodeAsBinary(t) {
        const e = Ce(t),
          i = this.encodeAsString(e.packet),
          n = e.buffers;
        return n.unshift(i), n;
      }
    }
    class De extends Wt {
      constructor(t) {
        super(), (this.reviver = t);
      }
      add(t) {
        let e;
        if ("string" == typeof t) {
          if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
          (e = this.decodeString(t)),
            e.type === Ne.BINARY_EVENT || e.type === Ne.BINARY_ACK
              ? ((this.reconstructor = new Fe(e)), 0 === e.attachments && super.emitReserved("decoded", e))
              : super.emitReserved("decoded", e);
        } else {
          if (!Se(t) && !t.base64) throw new Error("Unknown type: " + t);
          if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
          (e = this.reconstructor.takeBinaryData(t)), e && ((this.reconstructor = null), super.emitReserved("decoded", e));
        }
      }
      decodeString(t) {
        let e = 0;
        const i = { type: Number(t.charAt(0)) };
        if (void 0 === Ne[i.type]) throw new Error("unknown packet type " + i.type);
        if (i.type === Ne.BINARY_EVENT || i.type === Ne.BINARY_ACK) {
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
          if (!De.isPayloadValid(i.type, n)) throw new Error("invalid payload");
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
          case Ne.CONNECT:
            return "object" == typeof e;
          case Ne.DISCONNECT:
            return void 0 === e;
          case Ne.CONNECT_ERROR:
            return "string" == typeof e || "object" == typeof e;
          case Ne.EVENT:
          case Ne.BINARY_EVENT:
            return Array.isArray(e) && e.length > 0;
          case Ne.ACK:
          case Ne.BINARY_ACK:
            return Array.isArray(e);
        }
      }
      destroy() {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }
    }
    class Fe {
      constructor(t) {
        (this.packet = t), (this.buffers = []), (this.reconPack = t);
      }
      takeBinaryData(t) {
        if ((this.buffers.push(t), this.buffers.length === this.reconPack.attachments)) {
          const t = Ae(this.reconPack, this.buffers);
          return this.finishedReconstruction(), t;
        }
        return null;
      }
      finishedReconstruction() {
        (this.reconPack = null), (this.buffers = []);
      }
    }
    function xe(t, e, i) {
      return (
        t.on(e, i),
        function () {
          t.off(e, i);
        }
      );
    }
    const je = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
    class Me extends Wt {
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
          this.io.C && this.open();
      }
      get disconnected() {
        return !this.connected;
      }
      subEvents() {
        if (this.subs) return;
        const t = this.io;
        this.subs = [
          xe(t, "open", this.onopen.bind(this)),
          xe(t, "packet", this.onpacket.bind(this)),
          xe(t, "error", this.onerror.bind(this)),
          xe(t, "close", this.onclose.bind(this))
        ];
      }
      get active() {
        return !!this.subs;
      }
      connect() {
        return this.connected || (this.subEvents(), this.io.A || this.io.open(), "open" === this.io.O && this.onopen()), this;
      }
      open() {
        return this.connect();
      }
      send(...t) {
        return t.unshift("message"), this.emit.apply(this, t), this;
      }
      emit(t, ...e) {
        if (je.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name');
        e.unshift(t);
        const i = { type: Ne.EVENT, data: e, options: {} };
        if (((i.options.compress = !1 !== this.flags.compress), "function" == typeof e[e.length - 1])) {
          const t = this.ids++,
            n = e.pop();
          this.P(t, n), (i.id = t);
        }
        const n = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
        return (
          (this.flags.volatile && (!n || !this.connected)) ||
            (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)),
          (this.flags = {}),
          this
        );
      }
      P(t, e) {
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
        (t.nsp = this.nsp), this.io.N(t);
      }
      onopen() {
        "function" == typeof this.auth
          ? this.auth((t) => {
              this.packet({ type: Ne.CONNECT, data: t });
            })
          : this.packet({ type: Ne.CONNECT, data: this.auth });
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
            case Ne.CONNECT:
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
            case Ne.EVENT:
            case Ne.BINARY_EVENT:
              this.onevent(t);
              break;
            case Ne.ACK:
            case Ne.BINARY_ACK:
              this.onack(t);
              break;
            case Ne.DISCONNECT:
              this.ondisconnect();
              break;
            case Ne.CONNECT_ERROR:
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
        if (this.R && this.R.length) {
          const e = this.R.slice();
          for (const i of e) i.apply(this, t);
        }
        super.emit.apply(this, t);
      }
      ack(t) {
        const e = this;
        let i = !1;
        return function (...n) {
          i || ((i = !0), e.packet({ type: Ne.ACK, id: t, data: n }));
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
        this.subs && (this.subs.forEach((t) => t()), (this.subs = void 0)), this.io.D(this);
      }
      disconnect() {
        return (
          this.connected && this.packet({ type: Ne.DISCONNECT }),
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
        return (this.R = this.R || []), this.R.push(t), this;
      }
      prependAny(t) {
        return (this.R = this.R || []), this.R.unshift(t), this;
      }
      offAny(t) {
        if (!this.R) return this;
        if (t) {
          const e = this.R;
          for (let i = 0; i < e.length; i++) if (t === e[i]) return e.splice(i, 1), this;
        } else this.R = [];
        return this;
      }
      listenersAny() {
        return this.R || [];
      }
      onAnyOutgoing(t) {
        return (this.F = this.F || []), this.F.push(t), this;
      }
      prependAnyOutgoing(t) {
        return (this.F = this.F || []), this.F.unshift(t), this;
      }
      offAnyOutgoing(t) {
        if (!this.F) return this;
        if (t) {
          const e = this.F;
          for (let i = 0; i < e.length; i++) if (t === e[i]) return e.splice(i, 1), this;
        } else this.F = [];
        return this;
      }
      listenersAnyOutgoing() {
        return this.F || [];
      }
      notifyOutgoingListeners(t) {
        if (this.F && this.F.length) {
          const e = this.F.slice();
          for (const i of e) i.apply(this, t.data);
        }
      }
    }
    function Le(t) {
      (t = t || {}),
        (this.ms = t.min || 100),
        (this.max = t.max || 1e4),
        (this.factor = t.factor || 2),
        (this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0),
        (this.attempts = 0);
    }
    (Le.prototype.duration = function () {
      var t = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var e = Math.random(),
          i = Math.floor(e * this.jitter * t);
        t = 0 == (1 & Math.floor(10 * e)) ? t - i : t + i;
      }
      return 0 | Math.min(t, this.max);
    }),
      (Le.prototype.reset = function () {
        this.attempts = 0;
      }),
      (Le.prototype.setMin = function (t) {
        this.ms = t;
      }),
      (Le.prototype.setMax = function (t) {
        this.max = t;
      }),
      (Le.prototype.setJitter = function (t) {
        this.jitter = t;
      });
    class Ue extends Wt {
      constructor(e, i) {
        var n;
        super(),
          (this.nsps = {}),
          (this.subs = []),
          e && "object" == typeof e && ((i = e), (e = void 0)),
          ((i = i || {}).path = i.path || "/socket.io"),
          (this.opts = i),
          qt(this, i),
          this.reconnection(!1 !== i.reconnection),
          this.reconnectionAttempts(i.reconnectionAttempts || 1 / 0),
          this.reconnectionDelay(i.reconnectionDelay || 1e3),
          this.reconnectionDelayMax(i.reconnectionDelayMax || 5e3),
          this.randomizationFactor(null !== (n = i.randomizationFactor) && void 0 !== n ? n : 0.5),
          (this.backoff = new Le({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() })),
          this.timeout(null == i.timeout ? 2e4 : i.timeout),
          (this.O = "closed"),
          (this.uri = e);
        const s = i.parser || t;
        (this.encoder = new s.Encoder()), (this.decoder = new s.Decoder()), (this.C = !1 !== i.autoConnect), this.C && this.open();
      }
      reconnection(t) {
        return arguments.length ? ((this.M = !!t), this) : this.M;
      }
      reconnectionAttempts(t) {
        return void 0 === t ? this.U : ((this.U = t), this);
      }
      reconnectionDelay(t) {
        var e;
        return void 0 === t ? this.B : ((this.B = t), null === (e = this.backoff) || void 0 === e || e.setMin(t), this);
      }
      randomizationFactor(t) {
        var e;
        return void 0 === t ? this.V : ((this.V = t), null === (e = this.backoff) || void 0 === e || e.setJitter(t), this);
      }
      reconnectionDelayMax(t) {
        var e;
        return void 0 === t ? this.$ : ((this.$ = t), null === (e = this.backoff) || void 0 === e || e.setMax(t), this);
      }
      timeout(t) {
        return arguments.length ? ((this.W = t), this) : this.W;
      }
      maybeReconnectOnOpen() {
        !this.A && this.M && 0 === this.backoff.attempts && this.reconnect();
      }
      open(t) {
        if (~this.O.indexOf("open")) return this;
        this.engine = new we(this.uri, this.opts);
        const e = this.engine,
          i = this;
        (this.O = "opening"), (this.skipReconnect = !1);
        const n = xe(e, "open", function () {
            i.onopen(), t && t();
          }),
          s = xe(e, "error", (e) => {
            i.cleanup(), (i.O = "closed"), this.emitReserved("error", e), t ? t(e) : i.maybeReconnectOnOpen();
          });
        if (!1 !== this.W) {
          const t = this.W;
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
        this.cleanup(), (this.O = "open"), this.emitReserved("open");
        const t = this.engine;
        this.subs.push(
          xe(t, "ping", this.onping.bind(this)),
          xe(t, "data", this.ondata.bind(this)),
          xe(t, "error", this.onerror.bind(this)),
          xe(t, "close", this.onclose.bind(this)),
          xe(this.decoder, "decoded", this.ondecoded.bind(this))
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
        return i || ((i = new Me(this, t, e)), (this.nsps[t] = i)), i;
      }
      D(t) {
        const e = Object.keys(this.nsps);
        for (const t of e) {
          if (this.nsps[t].active) return;
        }
        this.G();
      }
      N(t) {
        const e = this.encoder.encode(t);
        for (let i = 0; i < e.length; i++) this.engine.write(e[i], t.options);
      }
      cleanup() {
        this.subs.forEach((t) => t()), (this.subs.length = 0), this.decoder.destroy();
      }
      G() {
        (this.skipReconnect = !0), (this.A = !1), this.onclose("forced close"), this.engine && this.engine.close();
      }
      disconnect() {
        return this.G();
      }
      onclose(t, e) {
        this.cleanup(),
          this.backoff.reset(),
          (this.O = "closed"),
          this.emitReserved("close", t, e),
          this.M && !this.skipReconnect && this.reconnect();
      }
      reconnect() {
        if (this.A || this.skipReconnect) return this;
        const t = this;
        if (this.backoff.attempts >= this.U) this.backoff.reset(), this.emitReserved("reconnect_failed"), (this.A = !1);
        else {
          const e = this.backoff.duration();
          this.A = !0;
          const i = this.setTimeoutFn(() => {
            t.skipReconnect ||
              (this.emitReserved("reconnect_attempt", t.backoff.attempts),
              t.skipReconnect ||
                t.open((e) => {
                  e ? ((t.A = !1), t.reconnect(), this.emitReserved("reconnect_error", e)) : t.onreconnect();
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
        (this.A = !1), this.backoff.reset(), this.emitReserved("reconnect", t);
      }
    }
    const Be = {};
    function Ve(t, e) {
      "object" == typeof t && ((e = t), (t = void 0));
      const i = (function (t, e = "", i) {
          let n = t;
          (i = i || ("undefined" != typeof location && location)),
            null == t && (t = i.protocol + "//" + i.host),
            "string" == typeof t &&
              ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? i.protocol + t : i.host + t),
              /^(https?|wss?):\/\//.test(t) || (t = void 0 !== i ? i.protocol + "//" + t : "https://" + t),
              (n = be(t))),
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
        o = Be[s] && r in Be[s].nsps;
      let c;
      return (
        e.forceNew || e["force new connection"] || !1 === e.multiplex || o
          ? (c = new Ue(n, e))
          : (Be[s] || (Be[s] = new Ue(n, e)), (c = Be[s])),
        i.query && !e.query && (e.query = i.queryKey),
        c.socket(i.path, e)
      );
    }
    var $e;
    Object.assign(Ve, { Manager: Ue, Socket: Me, io: Ve, connect: Ve }),
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
          (t.WEB_RTC = "webRTC"),
          (t.AUTHENTICATE_USER = "authenticateUser"),
          (t.USER_AUTHENTICATED = "userAuthenticated");
      })($e || ($e = {}));
    var We,
      Ge,
      He,
      ze = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function c(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, c);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    class Je {
      constructor(t, e, i, n) {
        (this.J = !1),
          (this.q = 0),
          (this.K = !1),
          (this.X = !0),
          (this.Y = "rfb"),
          (this.tt = e),
          (this.et = t),
          (this.it = 0),
          (this.nt = new At()),
          (this.st = n),
          (this.rt = new WebSocket(this.et)),
          this.ot(),
          (this.ct = setTimeout(this.ht.bind(this), 5e3)),
          (this.ut = i);
      }
      getId() {
        return this.dt;
      }
      getType() {
        return void 0 !== this.rt ? "uws" : "socket.io";
      }
      getTransport() {
        var t;
        return void 0 !== this.rt ? "websocket" : null === (t = this.lt) || void 0 === t ? void 0 : t.io.engine.transport.name;
      }
      getSocketStartTime() {
        return this.ft;
      }
      vt() {
        return { id: this.getId(), type: this.getType(), transport: this.getTransport(), start_time_ms: this.getSocketStartTime() };
      }
      ht() {
        var t, e;
        null === (t = this.lt) || void 0 === t || t.disconnect(),
          null === (e = this.rt) || void 0 === e || e.close(Et),
          console.log("Connect timed out, switching servers");
        const i = {
          name: "socket_error",
          action: { description: this.K ? "socket.io" : "uws failed to connect in time", reason: "connect timed out" },
          socket_session: this.vt()
        };
        ia.logEventForTabId(i, this.ut), this.gt();
      }
      get dropInToggled() {
        return this.J;
      }
      set dropInToggled(t) {
        this.J = t;
      }
      get sessionId() {
        return this.bt;
      }
      get tempSessionId() {
        return this.wt;
      }
      set tempSessionId(t) {
        (this.wt = t), this.tt.loadTempSessionId(t);
      }
      loadSessionData(t, e) {
        (this.bt = t.sessionId), this.tt.loadSessionData(t, e);
      }
      clearSessionData() {
        (this.bt = void 0), this.tt.clearSessionData();
      }
      getCurrentSessionData() {
        return this.tt.getSessionData();
      }
      ot() {
        this.rt &&
          ((this.rt.onmessage = this.yt.bind(this)),
          (this.rt.onclose = this._t.bind(this)),
          (this.rt.onerror = this.It.bind(this)),
          (this.rt.onopen = this.Tt.bind(this)),
          (this.St = setInterval(this.kt.bind(this), 45e3)));
      }
      Ct() {
        this.lt &&
          (this.lt.on("connect", () => {
            this.Tt();
          }),
          this.lt.on("connect_error", (t) => {
            console.log(`connect_error due to ${t.message}`), m(t);
            const e = {
              name: "socket_error",
              action: { description: t.message, reason: "socket reported error." },
              socket_session: this.vt()
            };
            ia.logEventForTabId(e, this.ut);
          }),
          this.lt.on("disconnect", (t) => {
            this.Et(), m("Socket io disconnect"), this.St && clearInterval(this.St), m("Websocket lost connection: " + t);
            const e = { name: "socket_close", action: { description: "socket.io socket closed", reason: t }, socket_session: this.vt() };
            if ((ia.logEventForTabId(e, this.ut), "io client disconnect" !== t)) this.gt();
            else if (this.bt) {
              const t = { name: "party_disconnect", action: { reason: "party disconnected manually." }, socket_session: this.vt() };
              ia.logEventForTabId(t, this.ut);
            }
          }),
          this.lt.on("message", (t) => {
            var e;
            if ("ping" === t) null === (e = this.lt) || void 0 === e || e.emit("pong");
            else {
              const e = JSON.parse(t);
              this.At(e);
            }
          }));
      }
      kt() {
        var t;
        1 == (null === (t = this.rt) || void 0 === t ? void 0 : t.readyState) && this.rt.send(JSON.stringify({ type: "ping" }));
      }
      Tt() {
        (this.ft = Date.now()), this.Et();
        const t = { name: "socket_open", socket_session: this.vt() };
        if ((ia.logEventForTabId(t, this.ut), this.Ot)) {
          clearTimeout(this.Ot), this.tt.onReconnect();
          const t = {
            name: "party_reconnect",
            action: {
              description: "party reconnected using " + (this.K ? "socket.io" : "uws") + " after " + this.it + " attempts.",
              reason: "party reconnected."
            },
            socket_session: this.vt()
          };
          ia.logEventForTabId(t, this.ut);
        }
        this.Pt(), this.st && this.sendMessage($e.AUTHENTICATE_USER, { firebaseToken: this.st });
      }
      Pt() {
        this.Ot && clearTimeout(this.Ot), (this.Ot = void 0), (this.it = 0);
      }
      Et() {
        console.log("Clearing connect timeout"), this.ct && clearTimeout(this.ct);
      }
      _t(t) {
        this.Et();
        const e = { name: "socket_close", action: { description: "uws socket closed", reason: String(t.code) }, socket_session: this.vt() };
        if ((ia.logEventForTabId(e, this.ut), t.code !== Et)) {
          if ((m("Websocket lost connection"), 1007 === t.code)) {
            const e = { sessionId: this.bt, eventType: "socket-close-" + t.code };
            ia.logOldEventAsync(e);
          }
          this.gt();
        } else {
          if (this.bt) {
            const t = { name: "party_disconnect", action: { reason: "party disconnected manually." }, socket_session: this.vt() };
            ia.logEventForTabId(t, this.ut);
          }
          m("Websocket connection closed manually");
        }
      }
      Nt() {
        return 1e3 * Math.pow(2, this.it);
      }
      gt() {
        if (this.X)
          if ((this.Rt(), this.it++, this.it > 10)) this.tt.onReconnectFailed();
          else {
            let t = this.Nt();
            m("Recreating socket with delay: " + t),
              void 0 === this.dt && this.it <= 2 && (t = 500),
              (this.Ot = setTimeout(this.Dt.bind(this), t));
          }
      }
      Dt() {
        try {
          this.q >= 3 || this.it > 1 ? (this.K = !this.K) : (this.K = !1), this.K ? (this.rt = void 0) : (this.lt = void 0);
          const t = {
            name: "socket_reconnect_attempt",
            action: {
              description: "attempting to reconnect using " + (this.K ? "socket.io" : "uws"),
              reason: "reconnecting after socket disconnect"
            },
            socket_session: this.vt()
          };
          ia.logEventForTabId(t, this.ut),
            this.K
              ? ((this.lt = Ve("https://socketio.teleparty.com", { reconnection: !1, withCredentials: !0 })), this.Ct())
              : ((this.rt = new WebSocket(this.et)), this.ot()),
            this.Et(),
            (this.ct = setTimeout(this.ht.bind(this), 5e3));
        } catch (t) {
          console.warn("Failed to recreate socket: " + (10 - this.it) + " attempts remaining");
        }
      }
      Rt() {
        this.q += 1;
      }
      It(t) {
        m("WebSocket error observed:", t);
        const e = {
          name: "socket_error",
          action: { description: "uws socket error", reason: "socket reported error." },
          socket_session: this.vt()
        };
        ia.logEventForTabId(e, this.ut);
      }
      yt(t) {
        try {
          const e = JSON.parse(t.data);
          this.At(e);
        } catch (t) {
          m("An error occured while parsing a message from the server");
        }
      }
      At(t) {
        "userId" === t.type ? this.Ft(t.data.userId) : t.callbackId ? this.nt.executeCallback(t.callbackId, t.data) : this.tt.onMessage(t);
      }
      Ft(t) {
        m("User id:  " + t), null == this.dt && ((this.dt = t), this.tt.setUserId(t));
      }
      teardown() {
        var t, e;
        this.X = !1;
        try {
          null === (t = this.rt) || void 0 === t || t.close(Et), null === (e = this.lt) || void 0 === e || e.disconnect();
        } catch (t) {}
        (this.dt = ""), (this.bt = ""), (this.wt = ""), this.Ot && clearTimeout(this.Ot), this.St && clearInterval(this.St);
      }
      sendMessage(t, e, i) {
        var n, s;
        let r = "null";
        i && (r = this.nt.addCallback(i));
        const o = this.xt(t, e, r),
          c = JSON.stringify(o);
        this.K ? null === (n = this.lt) || void 0 === n || n.send(c) : null === (s = this.rt) || void 0 === s || s.send(c);
      }
      xt(t, e, i) {
        return { type: t, data: e, callbackId: i };
      }
      signIn(t) {
        return ze(this, void 0, void 0, function* () {
          return this.sendMessage($e.SIGN_IN, { token: t });
        });
      }
      getUserIdAsync() {
        var t;
        return ze(this, void 0, void 0, function* () {
          this.Ot && (this.Pt(), this.Dt());
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
                        : R(i)().then(s);
                    };
                  return s();
                };
              })(() => null != this.dt, 2e4)(),
              null !== (t = this.dt) && void 0 !== t ? t : ""
            );
          } catch (t) {
            const e = { name: "connection_error", action: { description: t, reason: "failed to get user id" }, socket_session: this.vt() };
            ia.logEventForTabId(e, this.ut);
            const i = { sessionId: this.bt, eventType: "connection-fail" };
            throw (ia.logOldEventAsync(i), new Error("Could not connect to the server. Please refresh the page and try again."));
          }
        });
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
        (t.GET_EXPERIMENT_FLAG = "getExpFlag"),
        (t.USER_LIST = "userList"),
        (t.USER_AUTHENTICATED = "userAuthenticated"),
        (t.BLOCK_CSP = "blockCSP");
    })(We || (We = {}));
    class qe {
      constructor(t, e, i) {
        (this.sender = t), (this.target = e), (this.type = i);
      }
    }
    class Ke extends qe {
      constructor(t, e, i) {
        super(t, e, i), (this.type = i);
      }
    }
    class Xe extends Ke {
      constructor(t, e, i) {
        super(t, e, We.USER_AUTHENTICATED), (this.data = i);
      }
    }
    class Ye extends qe {
      constructor(t, e, i) {
        super(t, e, i), (this.type = i);
      }
    }
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
    })(Ge || (Ge = {}));
    class Ze extends Ye {
      constructor(t, e, i) {
        super(t, e, Ge.ON_MESSAGE), (this.data = i);
      }
    }
    class Qe extends Ye {
      constructor(t, e, i) {
        super(t, e, Ge.ON_REACTION), (this.data = i);
      }
    }
    class ti extends Ye {
      constructor(t, e, i) {
        super(t, e, Ge.UPDATE_SETTINGS), (this.data = i);
      }
    }
    class ei extends Ye {
      constructor(t, e, i) {
        super(t, e, Ge.ON_BUFFER), (this.data = i);
      }
    }
    class ii extends Ye {
      constructor(t, e, i) {
        super(t, e, Ge.ON_TYPING), (this.data = i);
      }
    }
    class ni extends Ye {
      constructor(t, e, i) {
        super(t, e, Ge.ON_WATCHING_ADS), (this.data = i);
      }
    }
    class si extends qe {
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
    })(He || (He = {}));
    class ri extends si {
      constructor(t, e, i) {
        super(t, e, He.UPDATE_SESSION), (this.data = i);
      }
    }
    const oi = new (class {
      constructor() {
        this.jt = new Map();
      }
      getTabForSessionId(t) {
        for (const e of this.jt.keys()) {
          const i = this.jt.get(e);
          if ((null == i ? void 0 : i.tempSessionId) === t) return e;
        }
      }
      getAllSockets() {
        return this.jt.values();
      }
      setSocketForTabId(t, e) {
        this.jt.set(t, e);
      }
      getSocketForTabId(t) {
        return this.jt.get(t);
      }
      containsSocketForTabId(t) {
        return this.jt.has(t);
      }
      removeSocketForTabId(t) {
        this.jt.delete(t);
      }
      teardown() {
        this.jt.forEach((t) => {
          t.teardown();
        }),
          this.jt.clear();
      }
    })();
    Object.freeze(oi);
    const ci = oi;
    class ai {
      loadSessionData(t, e) {
        (this.Mt = t), this.Mt && ((this.Mt.userSettings = e), this.Mt.messages || (this.Mt.messages = []));
      }
      get sessionData() {
        return this.Mt;
      }
      set sessionData(t) {
        this.Mt = t;
      }
    }
    class hi extends si {
      constructor(t, e, i) {
        super(t, e, He.NEXT_EPISODE), (this.data = i);
      }
    }
    class ui extends si {
      constructor(t, e, i) {
        super(t, e, He.REBOOT_SESSION), (this.data = i);
      }
    }
    class di extends Ye {
      constructor(t, e, i) {
        super(t, e, Ge.ON_GIF), (this.data = i);
      }
    }
    class li extends Ye {
      constructor(t, e, i, n) {
        super(t, e, Ge.USER_LIST), (this.data = { userList: i, socketConnectionId: n });
      }
    }
    class fi extends Ye {
      constructor(t, e, i) {
        super(t, e, Ge.ON_WEB_RTC), (this.data = i);
      }
    }
    class pi {
      constructor(t) {
        (this.ut = t), (this.Lt = new ai());
      }
      setUserId(t) {
        this.dt = t;
      }
      onMessage(t) {
        switch (t.type) {
          case $e.SEND_MESSAGE:
            this.Ut(t);
            break;
          case $e.SET_BUFFERING_PRESENCE:
            this.Bt(t);
            break;
          case $e.SET_TYPING_PRESENCE:
            this.Vt(t);
            break;
          case $e.SET_ADS_PRESENCE:
            this.$t(t);
            break;
          case $e.UPDATE_SETTINGS_MESSAGE:
            this.Wt(t);
            break;
          case $e.UPDATE_SESSION:
            this.Gt(t);
            break;
          case $e.JUMP_TO_NEXT_EPISODE:
            this.Ht(t);
            break;
          case $e.SEND_REACTION:
            this.zt(t);
            break;
          case $e.SEND_GIF:
            this.Jt(t);
            break;
          case $e.WEB_RTC:
            this.qt(t);
            break;
          case $e.USER_LIST:
            this.Kt(t);
            break;
          case $e.USER_AUTHENTICATED:
            this.Xt(t);
        }
      }
      getSessionData() {
        return this.Lt.sessionData;
      }
      loadSessionData(t, e) {
        this.Lt.loadSessionData(t, e);
      }
      clearSessionData() {
        this.Lt.sessionData = void 0;
      }
      loadTempSessionId(t) {
        this.wt = t;
      }
      onReconnectFailed() {
        const t = new si(v, g, He.RELOAD_PARTY);
        ci.removeSocketForTabId(this.ut), w.sendMessageToTabAsync(t, this.ut);
      }
      setDataManager(t) {
        this.Lt = t;
      }
      onConnect() {
        m("Connected to server");
      }
      onReconnect() {
        var t;
        const e = ci.getSocketForTabId(this.ut);
        this.Lt.sessionData
          ? null == e ||
            e.sendMessage($e.REBOOT_MESSAGE, this.Lt.sessionData, (t) => {
              if (!t || t.errorMessage) t && console.log(t.errorMessage), this.onReconnectFailed();
              else {
                const e = new ui(v, g, t);
                w.sendMessageToTabAsync(e, this.ut).then((t) => {
                  t || this.onReconnectFailed();
                });
              }
            })
          : this.wt && (null === (t = window.tpBackground) || void 0 === t || t.reToggleOpenParty(this.ut));
      }
      Ut(t) {
        var e;
        const i = new Ze(v, g, t.data);
        w.sendMessageToTabAsync(i, this.ut), null === (e = this.Lt.sessionData) || void 0 === e || e.messages.push(i.data);
      }
      Bt(t) {
        const e = new ei(v, g, t.data);
        (e.data.usersBuffering = e.data.usersBuffering.filter((t) => t != this.dt)), w.sendMessageToTabAsync(e, this.ut);
      }
      Vt(t) {
        const e = new ii(v, g, t.data);
        (e.data.usersTyping = e.data.usersTyping.filter((t) => t != this.dt)), w.sendMessageToTabAsync(e, this.ut);
      }
      zt(t) {
        const e = new Qe(v, g, t.data);
        w.sendMessageToTabAsync(e, this.ut);
      }
      qt(t) {
        const e = new fi(v, g, t.data);
        w.sendMessageToTabAsync(e, this.ut);
      }
      Jt(t) {
        var e;
        const i = new di(v, g, t.data);
        w.sendMessageToTabAsync(i, this.ut), null === (e = this.Lt.sessionData) || void 0 === e || e.messages.push(i.data);
      }
      $t(t) {
        const e = new ni(v, g, t.data);
        (e.data.usersWatchingAds = e.data.usersWatchingAds.filter((t) => t != this.dt)), w.sendMessageToTabAsync(e, this.ut);
      }
      Wt(t) {
        const e = new ti(v, g, t.data);
        w.sendMessageToTabAsync(e, this.ut),
          this.Lt.sessionData && this.Lt.sessionData.permId == e.data.permId && (this.Lt.sessionData.userSettings, e.data.userSettings);
      }
      Gt(t) {
        const e = new ri(v, g, t.data);
        w.sendMessageToTabAsync(e, this.ut),
          this.Lt.sessionData &&
            ((this.Lt.sessionData.state = e.data.state),
            (this.Lt.sessionData.lastKnownTime = e.data.lastKnownTime),
            (this.Lt.sessionData.lastKnownTimeUpdatedAt = e.data.lastKnownTimeUpdatedAt));
      }
      Ht(t) {
        const e = new hi(v, g, t.data);
        w.sendMessageToTabAsync(e, this.ut), this.Lt.sessionData && (this.Lt.sessionData.videoId = e.data.videoId);
      }
      Kt(t) {
        var e;
        console.log("GOT USER LIST", t.data);
        const i = new li(v, g, t.data, null !== (e = this.dt) && void 0 !== e ? e : "");
        w.sendMessageToTabAsync(i, this.ut), ia.updateShareList(i);
      }
      Xt(t) {
        console.log("GOT USER AUTH", t.data);
        const e = new Xe(v, g, t.data);
        w.i(e), ia.updateShareListFirebaseId(e);
      }
    }
    class vi {
      constructor(t) {
        this.ut = t;
      }
      createSocketForTab(t) {
        const e = new pi(this.ut),
          i = new Je(o, e, this.ut, t);
        return m("Created Socket with url: " + o), i;
      }
    }
    var gi = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, c);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const mi = new (class {
      getItemsAsync(t) {
        return gi(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            chrome.storage.local.get(t, (t) => {
              chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), i(new Error(T))) : e(t);
            });
          });
        });
      }
      getAllItemsAsync() {
        return gi(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.storage.local.get(null, (i) => {
              chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), e(new Error(T))) : t(i);
            });
          });
        });
      }
    })();
    Object.freeze(mi);
    const bi = mi,
      wi = [
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
      yi = [
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
      _i = [
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
    var Ii = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, c);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const Ti = new (class {
      setItemsAsync(t) {
        return Ii(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            chrome.storage.local.set(t, () => {
              chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
            });
          });
        });
      }
    })();
    Object.freeze(Ti);
    const Si = Ti;
    var ki = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, c);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const Ci = new (class {
      isUserIconValid(t) {
        return (
          !!t &&
          (t.includes("?newIconUrl=") ? _i.includes(t.split("?newIconUrl=")[1]) && wi.includes(t.split("?newIconUrl=")[0]) : _i.includes(t))
        );
      }
      isUserIdValid(t) {
        return "string" == typeof t && (16 === t.length || 36 === t.length);
      }
      isUserNickNameValid(t) {
        return t && "string" == typeof t && t.length < 20;
      }
      getDefaultUserIcon() {
        return yi[Math.floor(Math.random() * yi.length)];
      }
      getDefaultUserNickName() {
        return "";
      }
      Yt(t) {
        return ki(this, void 0, void 0, function* () {
          try {
            yield Si.setItemsAsync(t);
          } catch (t) {}
        });
      }
      getValidatedChromeStorageDataAsync() {
        return ki(this, void 0, void 0, function* () {
          const t = yield bi.getAllItemsAsync(),
            e = Ci.validateStorageData(t);
          return JSON.stringify(t) !== JSON.stringify(e) && this.Yt(e), e;
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
    Object.freeze(Ci);
    const Ei = Ci;
    var Ai = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, c);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    const Oi = new (class {
      getRedirectDataForTabAsync(t) {
        return Ai(this, void 0, void 0, function* () {
          const e = (yield bi.getItemsAsync([f])).redirectDataMap,
            i = this.Zt(t);
          if (e && e[i]) {
            const t = e[i];
            if (this.Qt(t)) return t;
          }
        });
      }
      deleteRedirectDataForTabAsync(t) {
        return Ai(this, void 0, void 0, function* () {
          const e = (yield bi.getItemsAsync([f])).redirectDataMap,
            i = this.Zt(t);
          e && e[i] && delete e[i], yield Si.setItemsAsync({ [f]: e });
        });
      }
      Zt(t) {
        return t;
      }
      storeRedirectDataForTabAsync(t, e) {
        return Ai(this, void 0, void 0, function* () {
          console.log("store data for tab " + t);
          const i = this.Zt(e);
          let n = yield bi.getItemsAsync([f]);
          (n[i] = t), (n = this.te(n)), yield Si.setItemsAsync({ [f]: n });
        });
      }
      te(t) {
        return (function (t, e) {
          const i = {};
          let n;
          for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
          return i;
        })(t, this.Qt);
      }
      Qt(t) {
        const e = t.date;
        return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
      }
    })();
    Object.freeze(Oi);
    const Pi = Oi;
    var Ni, Ri, Di, Fi, xi, ji;
    !(function (t) {
      (t.DROPIN_KEY = "dropInActive"), (t.AUTO_ACCEPT_DROPIN = "dropInAutoAccept"), (t.STATUS_TYPE = "statusType");
    })(Ni || (Ni = {})),
      (function (t) {
        (t.DO_AUTH_SIGN_IN = "doAuthSignIn"), (t.GET_AUTH_TOKEN = "getAuthToken"), (t.SIGN_OUT = "signOut");
      })(Ri || (Ri = {}));
    class Mi extends Ke {
      constructor(t, e, i) {
        super(t, e, We.LOAD_SESSION), (this.data = i);
      }
    }
    !(function (t) {
      (t.WITH_ACTIVITY = "with_activity"), (t.NO_ACTIVITY = "no_activity"), (t.OFFLINE = "offline");
    })(Di || (Di = {}));
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
    })(Fi || (Fi = {}));
    class Li extends qe {
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
        (t.ON_GOOGLE_SIGN_IN = "OnGoogleSignIn"),
        (t.CREATE_SCHEDULED_EVENT = "createScheduledEvent"),
        (t.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent"),
        (t.SET_USER_STATUS = "SET_USER_STATUS"),
        (t.SIGN_IN_CREATE = "SIGN_IN_CREATE");
    })(xi || (xi = {}));
    class Ui extends Li {
      constructor(t, e) {
        super(t, e, xi.CLOSE_POPUP);
      }
    }
    class Bi extends Li {
      constructor(t, e) {
        super(t, e, xi.IS_CONTENT_SCRIPT_READY);
      }
    }
    var Vi = new Uint8Array(16);
    function $i() {
      if (
        !ji &&
        !(ji =
          ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
          ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
      )
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return ji(Vi);
    }
    const Wi = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
    const Gi = function (t) {
      return "string" == typeof t && Wi.test(t);
    };
    for (var Hi = [], zi = 0; zi < 256; ++zi) Hi.push((zi + 256).toString(16).substr(1));
    const Ji = function (t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        i = (
          Hi[t[e + 0]] +
          Hi[t[e + 1]] +
          Hi[t[e + 2]] +
          Hi[t[e + 3]] +
          "-" +
          Hi[t[e + 4]] +
          Hi[t[e + 5]] +
          "-" +
          Hi[t[e + 6]] +
          Hi[t[e + 7]] +
          "-" +
          Hi[t[e + 8]] +
          Hi[t[e + 9]] +
          "-" +
          Hi[t[e + 10]] +
          Hi[t[e + 11]] +
          Hi[t[e + 12]] +
          Hi[t[e + 13]] +
          Hi[t[e + 14]] +
          Hi[t[e + 15]]
        ).toLowerCase();
      if (!Gi(i)) throw TypeError("Stringified UUID is invalid");
      return i;
    };
    const qi = function (t, e, i) {
      var n = (t = t || {}).random || (t.rng || $i)();
      if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
        i = i || 0;
        for (var s = 0; s < 16; ++s) e[i + s] = n[s];
        return e;
      }
      return Ji(n);
    };
    function Ki() {
      try {
        return qi();
      } catch (t) {
        return "";
      }
    }
    var Xi;
    !(function (t) {
      (t[(t.UNKNOWN = 0)] = "UNKNOWN"),
        (t[(t.OFFLINE = 1)] = "OFFLINE"),
        (t[(t.AWAY = 2)] = "AWAY"),
        (t[(t.ONLINE = 3)] = "ONLINE"),
        (t[(t.WATCHING_ALONE = 4)] = "WATCHING_ALONE"),
        (t[(t.WATCHING_IN_PARTY = 5)] = "WATCHING_IN_PARTY");
    })(Xi || (Xi = {}));
    const Yi = { $6: ["*://*/*"] };
    var Zi = i(9560),
      Qi = i.n(Zi),
      tn = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function c(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, c);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    class en {
      constructor() {
        (this.ee = null),
          this.ie(),
          this.ne(),
          (this.se = 0),
          (this.re = 0),
          (this.oe = 0),
          (this.ce = 0),
          (this.ae = Ki()),
          (this.he = Ki()),
          (this.ue = Date.now()),
          (this.de = 0),
          (this.le = new Map());
      }
      setEventWindow(t) {
        this.ee = t;
      }
      closeEventWindow() {
        this.ee && (this.ee.close(), (this.ee = null));
      }
      eventPostMessage(t, e) {
        var i;
        null === (i = this.ee) || void 0 === i || i.postMessage(t, e);
      }
      addAliveTab(t, e) {
        this.le.set(t, e);
      }
      removeAliveTab(t) {
        const e = this.le.get(t);
        e && clearTimeout(e), this.le.delete(t);
      }
      checkAliveTab(t) {
        return this.le.has(t);
      }
      clearTimeout(t) {
        const e = this.le.get(t);
        e && clearTimeout(e);
      }
      getVideoSessionData() {
        return {
          id: this.he,
          start_time_ms: this.se,
          heartbeat_duration_ms: Math.min(this.ce, en.MAX_HEARTBEAT),
          total_duration_ms: this.oe
        };
      }
      resetVideoSession() {
        (this.he = Ki()), (this.se = Date.now()), (this.re = Date.now()), (this.oe = 0);
      }
      pauseHeartBeat() {
        this.ce = 0;
      }
      resumeHeartBeat() {
        (this.re = Date.now()), (this.ce = 0);
      }
      heartBeatProc() {
        (this.ce = 0 === this.re ? Date.now() - this.se : Date.now() - this.re), (this.oe += this.ce), (this.re = Date.now());
      }
      incrementAppSessionEventNumber() {
        this.de++;
      }
      getAppSession() {
        return { id: this.ae, start_time_ms: this.ue, event_number: this.de };
      }
      fe() {
        chrome.runtime.reload();
      }
      ie() {
        chrome.tabs.onUpdated.addListener(this.pe.bind(this)),
          chrome.runtime.onInstalled.addListener(this.ve.bind(this)),
          chrome.runtime.onUpdateAvailable.addListener(this.fe.bind(this));
      }
      ve(t) {
        return tn(this, void 0, void 0, function* () {
          if ("install" == t.reason) {
            yield R(1e3)();
            const t = chrome.runtime.getManifest().version;
            ia.ge({ name: "install", action: { description: "install extension for the first time version " + t } }),
              ia.logOldEventAsync({ eventType: "install" }),
              chrome.tabs.create({ url: "https://redirect.teleparty.com/signup?ref=onboarding" });
          } else if ("update" == t.reason) {
            const e = chrome.runtime.getManifest().version;
            if ((console.log("Updated from " + t.previousVersion + " to " + e + "!"), "4.0.4" === e)) {
              const i = {
                name: "update",
                action: { description: "Updated from " + t.previousVersion + " to " + e + "!", reason: "Extension version is out of date" }
              };
              ia.ge(i);
            }
            ia.logOldEventAsync({ eventType: "update-" + e });
            Math.random() < 0.05 &&
              "3.9.5" === e &&
              chrome.permissions.contains({ origins: Yi.$6 }, (t) => {
                ia.ge({ name: "granted_permissions", action: { description: t ? "true" : "false" } });
              });
          }
        });
      }
      getIdleState() {
        return tn(this, void 0, void 0, function* () {
          return new Promise((t) => {
            chrome.idle ? chrome.idle.queryState(600, t) : t("active");
          });
        });
      }
      getActiveTabId() {
        return tn(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.tabs.query({ active: !0, currentWindow: !0 }, ([i]) => {
              var n;
              i ? t(null !== (n = i.id) && void 0 !== n ? n : 0) : e();
            });
          });
        });
      }
      getOnlineState() {
        return tn(this, void 0, void 0, function* () {
          return "active" !== (yield this.getIdleState())
            ? { status: Xi.AWAY }
            : new Promise((t) => {
                let e = { status: Xi.ONLINE };
                chrome.tabs.query({ active: !0, currentWindow: !0 }, ([i]) => {
                  if (i) {
                    const n = i.url;
                    if (n && i.id) {
                      const s = new Ct(new URL(n), i.id);
                      s.streamingService &&
                        (s.isBrowsing ? (e = { status: Xi.WATCHING_ALONE, service: s.serviceName, status_text: "Browsing" }) : t(void 0));
                    }
                  }
                  t(e);
                });
              });
        });
      }
      me(t) {
        return 16 === t.length || 36 === t.length;
      }
      be() {
        const t = navigator.userAgent.toLowerCase().indexOf("edg") > -1 ? "edge" : "chrome";
        console.log("browser: " + t);
        const e = "?browser=" + t,
          i = new XMLHttpRequest();
        (i.onreadystatechange = () => {
          if (i.readyState == XMLHttpRequest.DONE) {
            const t = i.responseText,
              e = new Date();
            this.me(t) &&
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
      ne() {
        try {
          bi.getAllItemsAsync().then((t) => {
            t.userId && Ei.isUserIdValid(t.userId)
              ? chrome.runtime.setUninstallURL(
                  "https://www.teleparty.com/uninstall?userId=" +
                    t.userId +
                    "&browser=chrome&version=" +
                    encodeURIComponent(chrome.runtime.getManifest().version)
                )
              : (console.log("userId undefined/invalid in local storage -> now setting"), this.be());
          });
        } catch (t) {
          console.log("user auth error");
          const e = { name: "error", action: { description: "user auth error", reason: t } };
          ia.ge(e);
        }
      }
      pe(t, e, i) {
        if (("loading" === e.status && ia.we(i), "complete" == e.status)) {
          const t = i.url;
          if (t && i.id) {
            const e = new URL(t).hostname,
              n = new Ct(new URL(t), i.id),
              r = n.streamingService;
            s.some((t) => e.includes(t) || p.includes(Qi()(e))) && chrome.tabs.executeScript(i.id, { file: "ci_bundled.js" }),
              r && (this.initContentScriptsAsync(n), this.initBrowseScriptsAsync(n), n.isBrowsing),
              (new URL(t).hostname.includes("redirect.teleparty") || new URL(t).hostname.includes("localhost")) &&
                chrome.tabs.executeScript(i.id, { file: "redirect_injected_bundled.js", allFrames: !0 });
          } else if (chrome.runtime.lastError) return;
        }
      }
      initContentScriptsAsync(t) {
        return tn(this, void 0, void 0, function* () {
          if (t.streamingService && !t.isBrowsing) {
            const e = t.streamingService;
            let i = !1;
            (e.name != E.CRUNCHYROLL && e.name != E.ESPN) || ((i = !0), yield R(5e3)()),
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
            const n = new Bi(v, g);
            yield w.sendMessageToTabAsync(n, t.id);
          }
        });
      }
      initBrowseScriptsAsync(t) {
        return tn(this, void 0, void 0, function* () {
          if (t.streamingService && t.isBrowsing) {
            const e = t.streamingService;
            yield Promise.all(
              e.browseScripts.map(
                (e) =>
                  new Promise((i) => {
                    chrome.tabs.executeScript(t.id, { file: e, allFrames: !0 }, () => {
                      i();
                    });
                  })
              )
            );
          }
        });
      }
    }
    en.MAX_HEARTBEAT = 8e4;
    var nn = i(1309),
      sn = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, r) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              r(t);
            }
          }
          function c(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              r(t);
            }
          }
          function a(t) {
            t.done
              ? s(t.value)
              : (function (t) {
                  return t instanceof i
                    ? t
                    : new i(function (e) {
                        e(t);
                      });
                })(t.value).then(o, c);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
    class rn {
      constructor() {
        (this.ye = []), (this._e = ""), (this.throttleStatus = {}), this.getConfigData(), this.Ie();
      }
      Ie() {
        return sn(this, void 0, void 0, function* () {
          this._e = yield this.Te();
        });
      }
      throttle(t, e, i) {
        return (...n) => {
          this.throttleStatus[i] || (t.apply(this, n), (this.throttleStatus[i] = !0), setTimeout(() => (this.throttleStatus[i] = !1), e));
        };
      }
      ge(t) {
        ia.ge(t);
      }
      Te() {
        return sn(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            let i = 0;
            const n = () =>
              sn(this, void 0, void 0, function* () {
                i++;
                const s = yield Ei.getValidatedChromeStorageDataAsync();
                s.userId ? t(s.userId) : i < 5 ? setTimeout(n, 5e3) : e("Could not get permId in time");
              });
            n();
          });
        });
      }
      Se() {
        return sn(this, void 0, void 0, function* () {
          const t = yield fetch(`${r}/experiment-data`),
            e = yield t.json();
          this.ye = e;
        });
      }
      getConfigData() {
        return sn(this, void 0, void 0, function* () {
          this.ke && (clearInterval(this.ke), (this.ke = void 0)),
            yield this.Se(),
            (this.ke = setInterval(
              () =>
                sn(this, void 0, void 0, function* () {
                  try {
                    yield this.Se();
                  } catch (t) {
                    console.log("Error fetching experiment data", t);
                  }
                }),
              rn.CONFIG_PULL_TIME
            ));
        });
      }
      Ce(t, e, i) {
        const n = i + t;
        return (1 * nn.murmur3(n, e)) / 4294967295;
      }
      checkFlag(t) {
        const e = this.ye.map((t) => t.name);
        if (-1 === e.indexOf(t)) return null;
        const i = e.indexOf(t),
          n = this.ye[i].seed,
          s = this.ye[i].is_exp,
          r = this.ye[i].version,
          o = this.Ce(t, n, this._e),
          c = this.ye[i].buckets;
        for (const e of c) {
          const i = Object.keys(e)[0],
            c = e[i],
            a = c[0],
            h = c[1];
          if (o >= a && o < h) {
            if (s) {
              this.throttle(this.ge, 500, t)({ name: "experiment_exposure", experiment: { name: t, bucket: i, seed: n, version: r } });
            }
            return i;
          }
        }
        return null;
      }
    }
    rn.CONFIG_PULL_TIME = 6e5;
    class on {
      constructor() {
        m("Message forwarder"), this.Ee();
      }
      Ae(t, e, i) {
        if (t.target === v) {
          if (t.type == Fi.BROADCAST) {
            const n = t;
            return this.Oe($e.UPDATE_SESSION, n.data, e, i), !0;
          }
          if (t.type == Fi.SEND_MESSAGE) {
            const n = t;
            return this.Oe($e.SEND_MESSAGE, n.data, e, i), !0;
          }
          if (t.type == Fi.SET_TYPING) {
            const n = t;
            return this.Oe($e.SET_TYPING_PRESENCE, n.data, e, i), !0;
          }
          if (t.type == Fi.SET_BUFFERING) {
            const n = t;
            return this.Oe($e.SET_BUFFERING_PRESENCE, n.data, e, i), !0;
          }
          if (t.type == Fi.SET_WATCHING_ADS) {
            const n = t;
            return this.Oe($e.SET_ADS_PRESENCE, n.data, e, i), !0;
          }
          if (t.type === Fi.BROADCAST_USER_SETTINGS) {
            const n = t;
            return this.Oe($e.BROADCAST_USER_SETTINGS, n.data, e, i), !0;
          }
          if (t.type === Fi.BROADCAST_NEXT_EPISODE) {
            const n = t;
            return this.Oe($e.NEXT_EPISODE_MESSAGE, n.data, e, i), !0;
          }
          if (t.type === He.GET_SERVER_TIME) return this.Oe($e.GET_SERVER_TIME, {}, e, i), !0;
          if (t.type == Fi.SEND_REACTION) {
            const n = t;
            return this.Oe($e.SEND_REACTION, n.data, e, i), !0;
          }
          if (t.type == Fi.SEND_GIF) {
            const n = t;
            return this.Oe($e.SEND_GIF, n.data, e, i), !0;
          }
          if (t.type == We.REBOOT) {
            const e = t,
              n = ci.getSocketForTabId(e.data.tabId);
            return null == n || n.sendMessage($e.REBOOT_MESSAGE, e.data.sessionData, i), m("Attempted to reboot session"), !0;
          }
          if (t.type == Fi.WEB_RTC) return this.Oe($e.WEB_RTC, t.data, e, i), !0;
          if (t.sender == v && t.type == We.REBOOT) {
            const e = t,
              n = ci.getSocketForTabId(e.data.tabId);
            return null == n || n.sendMessage($e.REBOOT_MESSAGE, e.data.sessionData, i), m("Attempted to reboot session"), !0;
          }
        }
        return !1;
      }
      Oe(t, e, i, n) {
        const s = this.Pe(i);
        null == s || s.sendMessage(t, e, n);
      }
      Pe(t) {
        var e;
        const i = null === (e = t.tab) || void 0 === e ? void 0 : e.id;
        return i ? ci.getSocketForTabId(i) : void 0;
      }
      Ee() {
        y.addMessageListener({ onMessage: this.Ae.bind(this) });
      }
    }
    const cn = function (t) {
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
      an = {
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
              c = e + 2 < t.length,
              a = c ? t[e + 2] : 0,
              h = s >> 2,
              u = ((3 & s) << 4) | (o >> 4);
            let d = ((15 & o) << 2) | (a >> 6),
              l = 63 & a;
            c || ((l = 64), r || (d = 64)), n.push(i[h], i[u], i[d], i[l]);
          }
          return n.join("");
        },
        encodeString(t, e) {
          return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(cn(t), e);
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
            const c = e < t.length ? i[t.charAt(e)] : 64;
            if ((++e, null == s || null == r || null == o || null == c)) throw new hn();
            const a = (s << 2) | (r >> 4);
            if ((n.push(a), 64 !== o)) {
              const t = ((r << 4) & 240) | (o >> 2);
              if ((n.push(t), 64 !== c)) {
                const t = ((o << 6) & 192) | c;
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
      };
    class hn extends Error {
      constructor() {
        super(...arguments), (this.name = "DecodeBase64StringError");
      }
    }
    const un = function (t) {
        return (function (t) {
          const e = cn(t);
          return an.encodeByteArray(e, !0);
        })(t).replace(/\./g, "");
      },
      dn = function (t) {
        try {
          return an.decodeString(t, !0);
        } catch (t) {
          console.error("base64Decode failed: ", t);
        }
        return null;
      };
    const ln = () =>
        (function () {
          if ("undefined" != typeof self) return self;
          if ("undefined" != typeof window) return window;
          if (void 0 !== i.g) return i.g;
          throw new Error("Unable to locate global object.");
        })().Ne,
      fn = () => {
        try {
          return (
            ln() ||
            (() => {
              if ("undefined" == typeof process || void 0 === process.env) return;
              const t = process.env.Ne;
              return t ? JSON.parse(t) : void 0;
            })() ||
            (() => {
              if ("undefined" == typeof document) return;
              let t;
              try {
                t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
              } catch (t) {
                return;
              }
              const e = t && dn(t[1]);
              return e && JSON.parse(e);
            })()
          );
        } catch (t) {
          return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
        }
      },
      pn = (t) => {
        var e, i;
        return null === (i = null === (e = fn()) || void 0 === e ? void 0 : e.emulatorHosts) || void 0 === i ? void 0 : i[t];
      },
      vn = () => {
        var t;
        return null === (t = fn()) || void 0 === t ? void 0 : t.config;
      },
      gn = (t) => {
        var e;
        return null === (e = fn()) || void 0 === e ? void 0 : e[`_${t}`];
      };
    class mn {
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
    function bn() {
      return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : "";
    }
    class wn extends Error {
      constructor(t, e, i) {
        super(e),
          (this.code = t),
          (this.customData = i),
          (this.name = "FirebaseError"),
          Object.setPrototypeOf(this, wn.prototype),
          Error.captureStackTrace && Error.captureStackTrace(this, yn.prototype.create);
      }
    }
    class yn {
      constructor(t, e, i) {
        (this.service = t), (this.serviceName = e), (this.errors = i);
      }
      create(t, ...e) {
        const i = e[0] || {},
          n = `${this.service}/${t}`,
          s = this.errors[t],
          r = s
            ? (function (t, e) {
                return t.replace(_n, (t, i) => {
                  const n = e[i];
                  return null != n ? String(n) : `<${i}?>`;
                });
              })(s, i)
            : "Error",
          o = `${this.serviceName}: ${r} (${n}).`;
        return new wn(n, o, i);
      }
    }
    const _n = /\{\$([^}]+)}/g;
    function In(t, e) {
      if (t === e) return !0;
      const i = Object.keys(t),
        n = Object.keys(e);
      for (const s of i) {
        if (!n.includes(s)) return !1;
        const i = t[s],
          r = e[s];
        if (Tn(i) && Tn(r)) {
          if (!In(i, r)) return !1;
        } else if (i !== r) return !1;
      }
      for (const t of n) if (!i.includes(t)) return !1;
      return !0;
    }
    function Tn(t) {
      return null !== t && "object" == typeof t;
    }
    function Sn(t) {
      const e = [];
      for (const [i, n] of Object.entries(t))
        Array.isArray(n)
          ? n.forEach((t) => {
              e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t));
            })
          : e.push(encodeURIComponent(i) + "=" + encodeURIComponent(n));
      return e.length ? "&" + e.join("&") : "";
    }
    function kn(t) {
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
    function Cn(t) {
      const e = t.indexOf("?");
      if (!e) return "";
      const i = t.indexOf("#", e);
      return t.substring(e, i > 0 ? i : void 0);
    }
    class En {
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
          void 0 === n.next && (n.next = An),
          void 0 === n.error && (n.error = An),
          void 0 === n.complete && (n.complete = An);
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
    function An() {}
    function On(t) {
      return t && t.Re ? t.Re : t;
    }
    class Pn {
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
    const Nn = "[DEFAULT]";
    class Rn {
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
          const t = new mn();
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
              this.getOrInitializeService({ instanceIdentifier: Nn });
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
          ...t.filter((t) => "De" in t).map((t) => t.De())
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
          ((i = this.component.instanceFactory(this.container, { instanceIdentifier: ((n = t), n === Nn ? void 0 : n), options: e })),
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
        return this.component ? (this.component.multipleInstances ? t : Nn) : t;
      }
      shouldAutoInitialize() {
        return !!this.component && "EXPLICIT" !== this.component.instantiationMode;
      }
    }
    class Dn {
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
        const e = new Rn(t, this);
        return this.providers.set(t, e), e;
      }
      getProviders() {
        return Array.from(this.providers.values());
      }
    }
    const Fn = [];
    var xn;
    !(function (t) {
      (t[(t.DEBUG = 0)] = "DEBUG"),
        (t[(t.VERBOSE = 1)] = "VERBOSE"),
        (t[(t.INFO = 2)] = "INFO"),
        (t[(t.WARN = 3)] = "WARN"),
        (t[(t.ERROR = 4)] = "ERROR"),
        (t[(t.SILENT = 5)] = "SILENT");
    })(xn || (xn = {}));
    const jn = { debug: xn.DEBUG, verbose: xn.VERBOSE, info: xn.INFO, warn: xn.WARN, error: xn.ERROR, silent: xn.SILENT },
      Mn = xn.INFO,
      Ln = { [xn.DEBUG]: "log", [xn.VERBOSE]: "log", [xn.INFO]: "info", [xn.WARN]: "warn", [xn.ERROR]: "error" },
      Un = (t, e, ...i) => {
        if (e < t.logLevel) return;
        const n = new Date().toISOString(),
          s = Ln[e];
        if (!s) throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);
        console[s](`[${n}]  ${t.name}:`, ...i);
      };
    class Bn {
      constructor(t) {
        (this.name = t), (this.Fe = Mn), (this.xe = Un), (this.je = null), Fn.push(this);
      }
      get logLevel() {
        return this.Fe;
      }
      set logLevel(t) {
        if (!(t in xn)) throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
        this.Fe = t;
      }
      setLogLevel(t) {
        this.Fe = "string" == typeof t ? jn[t] : t;
      }
      get logHandler() {
        return this.xe;
      }
      set logHandler(t) {
        if ("function" != typeof t) throw new TypeError("Value assigned to `logHandler` must be a function");
        this.xe = t;
      }
      get userLogHandler() {
        return this.je;
      }
      set userLogHandler(t) {
        this.je = t;
      }
      debug(...t) {
        this.je && this.je(this, xn.DEBUG, ...t), this.xe(this, xn.DEBUG, ...t);
      }
      log(...t) {
        this.je && this.je(this, xn.VERBOSE, ...t), this.xe(this, xn.VERBOSE, ...t);
      }
      info(...t) {
        this.je && this.je(this, xn.INFO, ...t), this.xe(this, xn.INFO, ...t);
      }
      warn(...t) {
        this.je && this.je(this, xn.WARN, ...t), this.xe(this, xn.WARN, ...t);
      }
      error(...t) {
        this.je && this.je(this, xn.ERROR, ...t), this.xe(this, xn.ERROR, ...t);
      }
    }
    let Vn, $n;
    const Wn = new WeakMap(),
      Gn = new WeakMap(),
      Hn = new WeakMap(),
      zn = new WeakMap(),
      Jn = new WeakMap();
    let qn = {
      get(t, e, i) {
        if (t instanceof IDBTransaction) {
          if ("done" === e) return Gn.get(t);
          if ("objectStoreNames" === e) return t.objectStoreNames || Hn.get(t);
          if ("store" === e) return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0]);
        }
        return Yn(t[e]);
      },
      set: (t, e, i) => ((t[e] = i), !0),
      has: (t, e) => (t instanceof IDBTransaction && ("done" === e || "store" === e)) || e in t
    };
    function Kn(t) {
      return t !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype
        ? ($n || ($n = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t)
          ? function (...e) {
              return t.apply(Zn(this), e), Yn(Wn.get(this));
            }
          : function (...e) {
              return Yn(t.apply(Zn(this), e));
            }
        : function (e, ...i) {
            const n = t.call(Zn(this), e, ...i);
            return Hn.set(n, e.sort ? e.sort() : [e]), Yn(n);
          };
    }
    function Xn(t) {
      return "function" == typeof t
        ? Kn(t)
        : (t instanceof IDBTransaction &&
            (function (t) {
              if (Gn.has(t)) return;
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
              Gn.set(t, e);
            })(t),
          (e = t),
          (Vn || (Vn = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((t) => e instanceof t)
            ? new Proxy(t, qn)
            : t);
      var e;
    }
    function Yn(t) {
      if (t instanceof IDBRequest)
        return (function (t) {
          const e = new Promise((e, i) => {
            const n = () => {
                t.removeEventListener("success", s), t.removeEventListener("error", r);
              },
              s = () => {
                e(Yn(t.result)), n();
              },
              r = () => {
                i(t.error), n();
              };
            t.addEventListener("success", s), t.addEventListener("error", r);
          });
          return (
            e
              .then((e) => {
                e instanceof IDBCursor && Wn.set(e, t);
              })
              .catch(() => {}),
            Jn.set(e, t),
            e
          );
        })(t);
      if (zn.has(t)) return zn.get(t);
      const e = Xn(t);
      return e !== t && (zn.set(t, e), Jn.set(e, t)), e;
    }
    const Zn = (t) => Jn.get(t);
    const Qn = ["get", "getKey", "getAll", "getAllKeys", "count"],
      ts = ["put", "add", "delete", "clear"],
      es = new Map();
    function is(t, e) {
      if (!(t instanceof IDBDatabase) || e in t || "string" != typeof e) return;
      if (es.get(e)) return es.get(e);
      const i = e.replace(/FromIndex$/, ""),
        n = e !== i,
        s = ts.includes(i);
      if (!(i in (n ? IDBIndex : IDBObjectStore).prototype) || (!s && !Qn.includes(i))) return;
      const r = async function (t, ...e) {
        const r = this.transaction(t, s ? "readwrite" : "readonly");
        let o = r.store;
        return n && (o = o.index(e.shift())), (await Promise.all([o[i](...e), s && r.done]))[0];
      };
      return es.set(e, r), r;
    }
    qn = ((t) => ({ ...t, get: (e, i, n) => is(e, i) || t.get(e, i, n), has: (e, i) => !!is(e, i) || t.has(e, i) }))(qn);
    class ns {
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
    const ss = "@firebase/app",
      rs = "0.9.19",
      os = new Bn("@firebase/app"),
      cs = "[DEFAULT]",
      as = {
        [ss]: "fire-core",
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
      hs = new Map(),
      us = new Map();
    function ds(t, e) {
      try {
        t.container.addComponent(e);
      } catch (i) {
        os.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`, i);
      }
    }
    function ls(t) {
      const e = t.name;
      if (us.has(e)) return os.debug(`There were multiple attempts to register component ${e}.`), !1;
      us.set(e, t);
      for (const e of hs.values()) ds(e, t);
      return !0;
    }
    function fs(t, e) {
      const i = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
      return i && i.triggerHeartbeat(), t.container.getProvider(e);
    }
    const ps = new yn("app", "Firebase", {
      "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
      "bad-app-name": "Illegal App name: '{$appName}",
      "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
      "app-deleted": "Firebase App named '{$appName}' already deleted",
      "no-options": "Need to provide options, when not being deployed to hosting via source.",
      "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
      "invalid-log-argument": "First argument to `onLog` must be null or a function.",
      "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
      "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
    });
    class vs {
      constructor(t, e, i) {
        (this.Me = !1),
          (this.Le = Object.assign({}, t)),
          (this.Ue = Object.assign({}, e)),
          (this.Be = e.name),
          (this.Ve = e.automaticDataCollectionEnabled),
          (this.$e = i),
          this.container.addComponent(new Pn("app", () => this, "PUBLIC"));
      }
      get automaticDataCollectionEnabled() {
        return this.checkDestroyed(), this.Ve;
      }
      set automaticDataCollectionEnabled(t) {
        this.checkDestroyed(), (this.Ve = t);
      }
      get name() {
        return this.checkDestroyed(), this.Be;
      }
      get options() {
        return this.checkDestroyed(), this.Le;
      }
      get config() {
        return this.checkDestroyed(), this.Ue;
      }
      get container() {
        return this.$e;
      }
      get isDeleted() {
        return this.Me;
      }
      set isDeleted(t) {
        this.Me = t;
      }
      checkDestroyed() {
        if (this.isDeleted) throw ps.create("app-deleted", { appName: this.Be });
      }
    }
    const gs = "10.4.0";
    function ms(t, e = {}) {
      let i = t;
      if ("object" != typeof e) {
        e = { name: e };
      }
      const n = Object.assign({ name: cs, automaticDataCollectionEnabled: !1 }, e),
        s = n.name;
      if ("string" != typeof s || !s) throw ps.create("bad-app-name", { appName: String(s) });
      if ((i || (i = vn()), !i)) throw ps.create("no-options");
      const r = hs.get(s);
      if (r) {
        if (In(i, r.options) && In(n, r.config)) return r;
        throw ps.create("duplicate-app", { appName: s });
      }
      const o = new Dn(s);
      for (const t of us.values()) o.addComponent(t);
      const c = new vs(i, n, o);
      return hs.set(s, c), c;
    }
    function bs(t, e, i) {
      var n;
      let s = null !== (n = as[t]) && void 0 !== n ? n : t;
      i && (s += `-${i}`);
      const r = s.match(/\s|\//),
        o = e.match(/\s|\//);
      if (r || o) {
        const t = [`Unable to register library "${s}" with version "${e}":`];
        return (
          r && t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),
          r && o && t.push("and"),
          o && t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),
          void os.warn(t.join(" "))
        );
      }
      ls(new Pn(`${s}-version`, () => ({ library: s, version: e }), "VERSION"));
    }
    const ws = "firebase-heartbeat-store";
    let ys = null;
    function _s() {
      return (
        ys ||
          (ys = (function (t, e, { blocked: i, upgrade: n, blocking: s, terminated: r } = {}) {
            const o = indexedDB.open(t, e),
              c = Yn(o);
            return (
              n &&
                o.addEventListener("upgradeneeded", (t) => {
                  n(Yn(o.result), t.oldVersion, t.newVersion, Yn(o.transaction), t);
                }),
              i && o.addEventListener("blocked", (t) => i(t.oldVersion, t.newVersion, t)),
              c
                .then((t) => {
                  r && t.addEventListener("close", () => r()),
                    s && t.addEventListener("versionchange", (t) => s(t.oldVersion, t.newVersion, t));
                })
                .catch(() => {}),
              c
            );
          })("firebase-heartbeat-database", 1, {
            upgrade: (t, e) => {
              if (0 === e) t.createObjectStore(ws);
            }
          }).catch((t) => {
            throw ps.create("idb-open", { originalErrorMessage: t.message });
          })),
        ys
      );
    }
    async function Is(t, e) {
      try {
        const i = (await _s()).transaction(ws, "readwrite"),
          n = i.objectStore(ws);
        await n.put(e, Ts(t)), await i.done;
      } catch (t) {
        if (t instanceof wn) os.warn(t.message);
        else {
          const e = ps.create("idb-set", { originalErrorMessage: null == t ? void 0 : t.message });
          os.warn(e.message);
        }
      }
    }
    function Ts(t) {
      return `${t.name}!${t.options.appId}`;
    }
    class Ss {
      constructor(t) {
        (this.container = t), (this.We = null);
        const e = this.container.getProvider("app").getImmediate();
        (this.Ge = new Cs(e)), (this.He = this.Ge.read().then((t) => ((this.We = t), t)));
      }
      async triggerHeartbeat() {
        const t = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
          e = ks();
        if (
          (null === this.We && (this.We = await this.He),
          this.We.lastSentHeartbeatDate !== e && !this.We.heartbeats.some((t) => t.date === e))
        )
          return (
            this.We.heartbeats.push({ date: e, agent: t }),
            (this.We.heartbeats = this.We.heartbeats.filter((t) => {
              const e = new Date(t.date).valueOf();
              return Date.now() - e <= 2592e6;
            })),
            this.Ge.overwrite(this.We)
          );
      }
      async getHeartbeatsHeader() {
        if ((null === this.We && (await this.He), null === this.We || 0 === this.We.heartbeats.length)) return "";
        const t = ks(),
          { heartbeatsToSend: e, unsentEntries: i } = (function (t, e = 1024) {
            const i = [];
            let n = t.slice();
            for (const s of t) {
              const t = i.find((t) => t.agent === s.agent);
              if (t) {
                if ((t.dates.push(s.date), Es(i) > e)) {
                  t.dates.pop();
                  break;
                }
              } else if ((i.push({ agent: s.agent, dates: [s.date] }), Es(i) > e)) {
                i.pop();
                break;
              }
              n = n.slice(1);
            }
            return { heartbeatsToSend: i, unsentEntries: n };
          })(this.We.heartbeats),
          n = un(JSON.stringify({ version: 2, heartbeats: e }));
        return (
          (this.We.lastSentHeartbeatDate = t),
          i.length > 0
            ? ((this.We.heartbeats = i), await this.Ge.overwrite(this.We))
            : ((this.We.heartbeats = []), this.Ge.overwrite(this.We)),
          n
        );
      }
    }
    function ks() {
      return new Date().toISOString().substring(0, 10);
    }
    class Cs {
      constructor(t) {
        (this.app = t), (this.ze = this.runIndexedDBEnvironmentCheck());
      }
      async runIndexedDBEnvironmentCheck() {
        return (
          !!(function () {
            try {
              return "object" == typeof indexedDB;
            } catch (t) {
              return !1;
            }
          })() &&
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
        if (await this.ze) {
          return (
            (await (async function (t) {
              try {
                const e = await _s();
                return await e.transaction(ws).objectStore(ws).get(Ts(t));
              } catch (t) {
                if (t instanceof wn) os.warn(t.message);
                else {
                  const e = ps.create("idb-get", { originalErrorMessage: null == t ? void 0 : t.message });
                  os.warn(e.message);
                }
              }
            })(this.app)) || { heartbeats: [] }
          );
        }
        return { heartbeats: [] };
      }
      async overwrite(t) {
        var e;
        if (await this.ze) {
          const i = await this.read();
          return Is(this.app, {
            lastSentHeartbeatDate: null !== (e = t.lastSentHeartbeatDate) && void 0 !== e ? e : i.lastSentHeartbeatDate,
            heartbeats: t.heartbeats
          });
        }
      }
      async add(t) {
        var e;
        if (await this.ze) {
          const i = await this.read();
          return Is(this.app, {
            lastSentHeartbeatDate: null !== (e = t.lastSentHeartbeatDate) && void 0 !== e ? e : i.lastSentHeartbeatDate,
            heartbeats: [...i.heartbeats, ...t.heartbeats]
          });
        }
      }
    }
    function Es(t) {
      return un(JSON.stringify({ version: 2, heartbeats: t })).length;
    }
    var As;
    (As = ""),
      ls(new Pn("platform-logger", (t) => new ns(t), "PRIVATE")),
      ls(new Pn("heartbeat", (t) => new Ss(t), "PRIVATE")),
      bs(ss, rs, As),
      bs(ss, rs, "esm2017"),
      bs("fire-js", "");
    function Os(t, e) {
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
    "function" == typeof SuppressedError && SuppressedError;
    function Ps(t) {
      return void 0 !== t && void 0 !== t.enterprise;
    }
    class Ns {
      constructor(t) {
        if (((this.siteKey = ""), (this.emailPasswordEnabled = !1), void 0 === t.recaptchaKey)) throw new Error("recaptchaKey undefined");
        (this.siteKey = t.recaptchaKey.split("/")[3]),
          (this.emailPasswordEnabled = t.recaptchaEnforcementState.some(
            (t) => "EMAIL_PASSWORD_PROVIDER" === t.provider && "OFF" !== t.enforcementState
          ));
      }
    }
    function Rs() {
      return {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      };
    }
    const Ds = Rs,
      Fs = new yn("auth", "Firebase", {
        "dependent-sdk-initialized-before-auth":
          "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      }),
      xs = new Bn("@firebase/auth");
    function js(t, ...e) {
      xs.logLevel <= xn.ERROR && xs.error(`Auth (10.4.0): ${t}`, ...e);
    }
    function Ms(t, ...e) {
      throw Vs(t, ...e);
    }
    function Ls(t, ...e) {
      return Vs(t, ...e);
    }
    function Us(t, e, i) {
      const n = Object.assign(Object.assign({}, Ds()), { [e]: i });
      return new yn("auth", "Firebase", n).create(e, { appName: t.name });
    }
    function Bs(t, e, i) {
      if (!(e instanceof i))
        throw (
          (i.name !== e.constructor.name && Ms(t, "argument-error"),
          Us(
            t,
            "argument-error",
            `Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`
          ))
        );
    }
    function Vs(t, ...e) {
      if ("string" != typeof t) {
        const i = e[0],
          n = [...e.slice(1)];
        return n[0] && (n[0].appName = t.name), t.Je.create(i, ...n);
      }
      return Fs.create(t, ...e);
    }
    function $s(t, e, ...i) {
      if (!t) throw Vs(e, ...i);
    }
    function Ws(t) {
      const e = "INTERNAL ASSERTION FAILED: " + t;
      throw (js(e), new Error(e));
    }
    function Gs(t, e) {
      t || Ws(e);
    }
    function Hs() {
      var t;
      return ("undefined" != typeof self && (null === (t = self.location) || void 0 === t ? void 0 : t.href)) || "";
    }
    function zs() {
      return "http:" === Js() || "https:" === Js();
    }
    function Js() {
      var t;
      return ("undefined" != typeof self && (null === (t = self.location) || void 0 === t ? void 0 : t.protocol)) || null;
    }
    function qs() {
      return (
        !(
          "undefined" != typeof navigator &&
          navigator &&
          "onLine" in navigator &&
          "boolean" == typeof navigator.onLine &&
          (zs() ||
            (function () {
              const t = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
              return "object" == typeof t && void 0 !== t.id;
            })() ||
            "connection" in navigator)
        ) || navigator.onLine
      );
    }
    class Ks {
      constructor(t, e) {
        (this.shortDelay = t),
          (this.longDelay = e),
          Gs(e > t, "Short delay should be less than long delay!"),
          (this.isMobile =
            ("undefined" != typeof window &&
              !!(window.cordova || window.phonegap || window.PhoneGap) &&
              /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bn())) ||
            ("object" == typeof navigator && "ReactNative" === navigator.product));
      }
      get() {
        return qs() ? (this.isMobile ? this.longDelay : this.shortDelay) : Math.min(5e3, this.shortDelay);
      }
    }
    function Xs(t, e) {
      Gs(t.emulator, "Emulator should always be set here");
      const { url: i } = t.emulator;
      return e ? `${i}${e.startsWith("/") ? e.slice(1) : e}` : i;
    }
    class Ys {
      static initialize(t, e, i) {
        (this.fetchImpl = t), e && (this.headersImpl = e), i && (this.responseImpl = i);
      }
      static fetch() {
        return this.fetchImpl
          ? this.fetchImpl
          : "undefined" != typeof self && "fetch" in self
          ? self.fetch
          : void Ws("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static headers() {
        return this.headersImpl
          ? this.headersImpl
          : "undefined" != typeof self && "Headers" in self
          ? self.Headers
          : void Ws("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
      static response() {
        return this.responseImpl
          ? this.responseImpl
          : "undefined" != typeof self && "Response" in self
          ? self.Response
          : void Ws("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
      }
    }
    const Zs = {
        CREDENTIAL_MISMATCH: "custom-token-mismatch",
        MISSING_CUSTOM_TOKEN: "internal-error",
        INVALID_IDENTIFIER: "invalid-email",
        MISSING_CONTINUE_URI: "internal-error",
        INVALID_PASSWORD: "wrong-password",
        MISSING_PASSWORD: "missing-password",
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
        PASSWORD_DOES_NOT_MEET_REQUIREMENTS: "password-does-not-meet-requirements",
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
        BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
        RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
        MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
        INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
        INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
        MISSING_CLIENT_TYPE: "missing-client-type",
        MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
        INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
        INVALID_REQ_TYPE: "invalid-req-type"
      },
      Qs = new Ks(3e4, 6e4);
    function tr(t, e) {
      return t.tenantId && !e.tenantId ? Object.assign(Object.assign({}, e), { tenantId: t.tenantId }) : e;
    }
    async function er(t, e, i, n, s = {}) {
      return ir(t, s, async () => {
        let s = {},
          r = {};
        n && ("GET" === e ? (r = n) : (s = { body: JSON.stringify(n) }));
        const o = Sn(Object.assign({ key: t.config.apiKey }, r)).slice(1),
          c = await t.qe();
        return (
          (c["Content-Type"] = "application/json"),
          t.languageCode && (c["X-Firebase-Locale"] = t.languageCode),
          Ys.fetch()(sr(t, t.config.apiHost, i, o), Object.assign({ method: e, headers: c, referrerPolicy: "no-referrer" }, s))
        );
      });
    }
    async function ir(t, e, i) {
      t.Ke = !1;
      const n = Object.assign(Object.assign({}, Zs), e);
      try {
        const e = new rr(t),
          s = await Promise.race([i(), e.promise]);
        e.clearNetworkTimeout();
        const r = await s.json();
        if ("needConfirmation" in r) throw or(t, "account-exists-with-different-credential", r);
        if (s.ok && !("errorMessage" in r)) return r;
        {
          const e = s.ok ? r.errorMessage : r.error.message,
            [i, o] = e.split(" : ");
          if ("FEDERATED_USER_ID_ALREADY_LINKED" === i) throw or(t, "credential-already-in-use", r);
          if ("EMAIL_EXISTS" === i) throw or(t, "email-already-in-use", r);
          if ("USER_DISABLED" === i) throw or(t, "user-disabled", r);
          const c = n[i] || i.toLowerCase().replace(/[_\s]+/g, "-");
          if (o) throw Us(t, c, o);
          Ms(t, c);
        }
      } catch (e) {
        if (e instanceof wn) throw e;
        Ms(t, "network-request-failed", { message: String(e) });
      }
    }
    async function nr(t, e, i, n, s = {}) {
      const r = await er(t, e, i, n, s);
      return "mfaPendingCredential" in r && Ms(t, "multi-factor-auth-required", { Xe: r }), r;
    }
    function sr(t, e, i, n) {
      const s = `${e}${i}?${n}`;
      return t.config.emulator ? Xs(t.config, s) : `${t.config.apiScheme}://${s}`;
    }
    class rr {
      constructor(t) {
        (this.auth = t),
          (this.timer = null),
          (this.promise = new Promise((t, e) => {
            this.timer = setTimeout(() => e(Ls(this.auth, "network-request-failed")), Qs.get());
          }));
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    }
    function or(t, e, i) {
      const n = { appName: t.name };
      i.email && (n.email = i.email), i.phoneNumber && (n.phoneNumber = i.phoneNumber);
      const s = Ls(t, e, n);
      return (s.customData.Ye = i), s;
    }
    async function cr(t, e) {
      return er(t, "GET", "/v2/recaptchaConfig", tr(t, e));
    }
    function ar(t) {
      if (t)
        try {
          const e = new Date(Number(t));
          if (!isNaN(e.getTime())) return e.toUTCString();
        } catch (t) {}
    }
    function hr(t) {
      return 1e3 * Number(t);
    }
    function ur(t) {
      const [e, i, n] = t.split(".");
      if (void 0 === e || void 0 === i || void 0 === n) return js("JWT malformed, contained fewer than 3 sections"), null;
      try {
        const t = dn(i);
        return t ? JSON.parse(t) : (js("Failed to decode base64 JWT payload"), null);
      } catch (t) {
        return js("Caught error parsing JWT payload as JSON", null == t ? void 0 : t.toString()), null;
      }
    }
    async function dr(t, e, i = !1) {
      if (i) return e;
      try {
        return await e;
      } catch (e) {
        throw (
          (e instanceof wn &&
            (function ({ code: t }) {
              return "auth/user-disabled" === t || "auth/user-token-expired" === t;
            })(e) &&
            t.auth.currentUser === t &&
            (await t.auth.signOut()),
          e)
        );
      }
    }
    class lr {
      constructor(t) {
        (this.user = t), (this.isRunning = !1), (this.timerId = null), (this.errorBackoff = 3e4);
      }
      Ze() {
        this.isRunning || ((this.isRunning = !0), this.schedule());
      }
      Qe() {
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
        try {
          await this.user.getIdToken(!0);
        } catch (t) {
          return void ("auth/network-request-failed" === (null == t ? void 0 : t.code) && this.schedule(!0));
        }
        this.schedule();
      }
    }
    class fr {
      constructor(t, e) {
        (this.createdAt = t), (this.lastLoginAt = e), this.ti();
      }
      ti() {
        (this.lastSignInTime = ar(this.lastLoginAt)), (this.creationTime = ar(this.createdAt));
      }
      ei(t) {
        (this.createdAt = t.createdAt), (this.lastLoginAt = t.lastLoginAt), this.ti();
      }
      toJSON() {
        return { createdAt: this.createdAt, lastLoginAt: this.lastLoginAt };
      }
    }
    async function pr(t) {
      var e;
      const i = t.auth,
        n = await t.getIdToken(),
        s = await dr(
          t,
          (async function (t, e) {
            return er(t, "POST", "/v1/accounts:lookup", e);
          })(i, { idToken: n })
        );
      $s(null == s ? void 0 : s.users.length, i, "internal-error");
      const r = s.users[0];
      t.ii(r);
      const o = (null === (e = r.providerUserInfo) || void 0 === e ? void 0 : e.length)
        ? r.providerUserInfo.map((t) => {
            var { providerId: e } = t,
              i = Os(t, ["providerId"]);
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
      const c = ((a = t.providerData), (h = o), [...a.filter((t) => !h.some((e) => e.providerId === t.providerId)), ...h]);
      var a, h;
      const u = t.isAnonymous,
        d = !((t.email && r.passwordHash) || (null == c ? void 0 : c.length)),
        l = !!u && d,
        f = {
          uid: r.localId,
          displayName: r.displayName || null,
          photoURL: r.photoUrl || null,
          email: r.email || null,
          emailVerified: r.emailVerified || !1,
          phoneNumber: r.phoneNumber || null,
          tenantId: r.tenantId || null,
          providerData: c,
          metadata: new fr(r.createdAt, r.lastLoginAt),
          isAnonymous: l
        };
      Object.assign(t, f);
    }
    class vr {
      constructor() {
        (this.refreshToken = null), (this.accessToken = null), (this.expirationTime = null);
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
      }
      updateFromServerResponse(t) {
        $s(t.idToken, "internal-error"), $s(void 0 !== t.idToken, "internal-error"), $s(void 0 !== t.refreshToken, "internal-error");
        const e =
          "expiresIn" in t && void 0 !== t.expiresIn
            ? Number(t.expiresIn)
            : (function (t) {
                const e = ur(t);
                return (
                  $s(e, "internal-error"),
                  $s(void 0 !== e.exp, "internal-error"),
                  $s(void 0 !== e.iat, "internal-error"),
                  Number(e.exp) - Number(e.iat)
                );
              })(t.idToken);
        this.updateTokensAndExpiration(t.idToken, t.refreshToken, e);
      }
      async getToken(t, e = !1) {
        return (
          $s(!this.accessToken || this.refreshToken, t, "user-token-expired"),
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
          const i = await ir(t, {}, async () => {
            const i = Sn({ grant_type: "refresh_token", refresh_token: e }).slice(1),
              { tokenApiHost: n, apiKey: s } = t.config,
              r = sr(t, n, "/v1/token", `key=${s}`),
              o = await t.qe();
            return (o["Content-Type"] = "application/x-www-form-urlencoded"), Ys.fetch()(r, { method: "POST", headers: o, body: i });
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
          r = new vr();
        return (
          i && ($s("string" == typeof i, "internal-error", { appName: t }), (r.refreshToken = i)),
          n && ($s("string" == typeof n, "internal-error", { appName: t }), (r.accessToken = n)),
          s && ($s("number" == typeof s, "internal-error", { appName: t }), (r.expirationTime = s)),
          r
        );
      }
      toJSON() {
        return { refreshToken: this.refreshToken, accessToken: this.accessToken, expirationTime: this.expirationTime };
      }
      ni(t) {
        (this.accessToken = t.accessToken), (this.refreshToken = t.refreshToken), (this.expirationTime = t.expirationTime);
      }
      si() {
        return Object.assign(new vr(), this.toJSON());
      }
      ri() {
        return Ws("not implemented");
      }
    }
    function gr(t, e) {
      $s("string" == typeof t || void 0 === t, "internal-error", { appName: e });
    }
    class mr {
      constructor(t) {
        var { uid: e, auth: i, stsTokenManager: n } = t,
          s = Os(t, ["uid", "auth", "stsTokenManager"]);
        (this.providerId = "firebase"),
          (this.proactiveRefresh = new lr(this)),
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
          (this.metadata = new fr(s.createdAt || void 0, s.lastLoginAt || void 0));
      }
      async getIdToken(t) {
        const e = await dr(this, this.stsTokenManager.getToken(this.auth, t));
        return (
          $s(e, this.auth, "internal-error"),
          this.accessToken !== e && ((this.accessToken = e), await this.auth.oi(this), this.auth.ci(this)),
          e
        );
      }
      getIdTokenResult(t) {
        return (async function (t, e = !1) {
          const i = On(t),
            n = await i.getIdToken(e),
            s = ur(n);
          $s(s && s.exp && s.auth_time && s.iat, i.auth, "internal-error");
          const r = "object" == typeof s.firebase ? s.firebase : void 0,
            o = null == r ? void 0 : r.sign_in_provider;
          return {
            claims: s,
            token: n,
            authTime: ar(hr(s.auth_time)),
            issuedAtTime: ar(hr(s.iat)),
            expirationTime: ar(hr(s.exp)),
            signInProvider: o || null,
            signInSecondFactor: (null == r ? void 0 : r.sign_in_second_factor) || null
          };
        })(this, t);
      }
      reload() {
        return (async function (t) {
          const e = On(t);
          await pr(e), await e.auth.oi(e), e.auth.ci(e);
        })(this);
      }
      ni(t) {
        this !== t &&
          ($s(this.uid === t.uid, this.auth, "internal-error"),
          (this.displayName = t.displayName),
          (this.photoURL = t.photoURL),
          (this.email = t.email),
          (this.emailVerified = t.emailVerified),
          (this.phoneNumber = t.phoneNumber),
          (this.isAnonymous = t.isAnonymous),
          (this.tenantId = t.tenantId),
          (this.providerData = t.providerData.map((t) => Object.assign({}, t))),
          this.metadata.ei(t.metadata),
          this.stsTokenManager.ni(t.stsTokenManager));
      }
      si(t) {
        const e = new mr(Object.assign(Object.assign({}, this), { auth: t, stsTokenManager: this.stsTokenManager.si() }));
        return e.metadata.ei(this.metadata), e;
      }
      ai(t) {
        $s(!this.reloadListener, this.auth, "internal-error"),
          (this.reloadListener = t),
          this.reloadUserInfo && (this.ii(this.reloadUserInfo), (this.reloadUserInfo = null));
      }
      ii(t) {
        this.reloadListener ? this.reloadListener(t) : (this.reloadUserInfo = t);
      }
      hi() {
        this.proactiveRefresh.Ze();
      }
      ui() {
        this.proactiveRefresh.Qe();
      }
      async di(t, e = !1) {
        let i = !1;
        t.idToken && t.idToken !== this.stsTokenManager.accessToken && (this.stsTokenManager.updateFromServerResponse(t), (i = !0)),
          e && (await pr(this)),
          await this.auth.oi(this),
          i && this.auth.ci(this);
      }
      async delete() {
        const t = await this.getIdToken();
        return (
          await dr(
            this,
            (async function (t, e) {
              return er(t, "POST", "/v1/accounts:delete", e);
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
              li: this.li
            },
            this.metadata.toJSON()
          ),
          { apiKey: this.auth.config.apiKey, appName: this.auth.name }
        );
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static fi(t, e) {
        var i, n, s, r, o, c, a, h;
        const u = null !== (i = e.displayName) && void 0 !== i ? i : void 0,
          d = null !== (n = e.email) && void 0 !== n ? n : void 0,
          l = null !== (s = e.phoneNumber) && void 0 !== s ? s : void 0,
          f = null !== (r = e.photoURL) && void 0 !== r ? r : void 0,
          p = null !== (o = e.tenantId) && void 0 !== o ? o : void 0,
          v = null !== (c = e.li) && void 0 !== c ? c : void 0,
          g = null !== (a = e.createdAt) && void 0 !== a ? a : void 0,
          m = null !== (h = e.lastLoginAt) && void 0 !== h ? h : void 0,
          { uid: b, emailVerified: w, isAnonymous: y, providerData: _, stsTokenManager: I } = e;
        $s(b && I, t, "internal-error");
        const T = vr.fromJSON(this.name, I);
        $s("string" == typeof b, t, "internal-error"),
          gr(u, t.name),
          gr(d, t.name),
          $s("boolean" == typeof w, t, "internal-error"),
          $s("boolean" == typeof y, t, "internal-error"),
          gr(l, t.name),
          gr(f, t.name),
          gr(p, t.name),
          gr(v, t.name),
          gr(g, t.name),
          gr(m, t.name);
        const S = new mr({
          uid: b,
          auth: t,
          email: d,
          emailVerified: w,
          displayName: u,
          isAnonymous: y,
          photoURL: f,
          phoneNumber: l,
          tenantId: p,
          stsTokenManager: T,
          createdAt: g,
          lastLoginAt: m
        });
        return _ && Array.isArray(_) && (S.providerData = _.map((t) => Object.assign({}, t))), v && (S.li = v), S;
      }
      static async pi(t, e, i = !1) {
        const n = new vr();
        n.updateFromServerResponse(e);
        const s = new mr({ uid: e.localId, auth: t, stsTokenManager: n, isAnonymous: i });
        return await pr(s), s;
      }
    }
    const br = new Map();
    function wr(t) {
      Gs(t instanceof Function, "Expected a class definition");
      let e = br.get(t);
      return e ? (Gs(e instanceof t, "Instance stored in cache mismatched with class"), e) : ((e = new t()), br.set(t, e), e);
    }
    class yr {
      constructor() {
        (this.type = "NONE"), (this.storage = {});
      }
      async vi() {
        return !0;
      }
      async gi(t, e) {
        this.storage[t] = e;
      }
      async mi(t) {
        const e = this.storage[t];
        return void 0 === e ? null : e;
      }
      async bi(t) {
        delete this.storage[t];
      }
      wi(t, e) {}
      yi(t, e) {}
    }
    yr.type = "NONE";
    const _r = yr;
    function Ir(t, e, i) {
      return `firebase:${t}:${e}:${i}`;
    }
    class Tr {
      constructor(t, e, i) {
        (this.persistence = t), (this.auth = e), (this.userKey = i);
        const { config: n, name: s } = this.auth;
        (this.fullUserKey = Ir(this.userKey, n.apiKey, s)),
          (this.fullPersistenceKey = Ir("persistence", n.apiKey, s)),
          (this.boundEventHandler = e._i.bind(e)),
          this.persistence.wi(this.fullUserKey, this.boundEventHandler);
      }
      setCurrentUser(t) {
        return this.persistence.gi(this.fullUserKey, t.toJSON());
      }
      async getCurrentUser() {
        const t = await this.persistence.mi(this.fullUserKey);
        return t ? mr.fi(this.auth, t) : null;
      }
      removeCurrentUser() {
        return this.persistence.bi(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence.gi(this.fullPersistenceKey, this.persistence.type);
      }
      async setPersistence(t) {
        if (this.persistence === t) return;
        const e = await this.getCurrentUser();
        return await this.removeCurrentUser(), (this.persistence = t), e ? this.setCurrentUser(e) : void 0;
      }
      delete() {
        this.persistence.yi(this.fullUserKey, this.boundEventHandler);
      }
      static async create(t, e, i = "authUser") {
        if (!e.length) return new Tr(wr(_r), t, i);
        const n = (
          await Promise.all(
            e.map(async (t) => {
              if (await t.vi()) return t;
            })
          )
        ).filter((t) => t);
        let s = n[0] || wr(_r);
        const r = Ir(i, t.config.apiKey, t.name);
        let o = null;
        for (const i of e)
          try {
            const e = await i.mi(r);
            if (e) {
              const n = mr.fi(t, e);
              i !== s && (o = n), (s = i);
              break;
            }
          } catch (t) {}
        const c = n.filter((t) => t.Ii);
        return s.Ii && c.length
          ? ((s = c[0]),
            o && (await s.gi(r, o.toJSON())),
            await Promise.all(
              e.map(async (t) => {
                if (t !== s)
                  try {
                    await t.bi(r);
                  } catch (t) {}
              })
            ),
            new Tr(s, t, i))
          : new Tr(s, t, i);
      }
    }
    function Sr(t) {
      const e = t.toLowerCase();
      if (e.includes("opera/") || e.includes("opr/") || e.includes("opios/")) return "Opera";
      if (Ar(e)) return "IEMobile";
      if (e.includes("msie") || e.includes("trident/")) return "IE";
      if (e.includes("edge/")) return "Edge";
      if (kr(e)) return "Firefox";
      if (e.includes("silk/")) return "Silk";
      if (Pr(e)) return "Blackberry";
      if (Nr(e)) return "Webos";
      if (Cr(e)) return "Safari";
      if ((e.includes("chrome/") || Er(e)) && !e.includes("edge/")) return "Chrome";
      if (Or(e)) return "Android";
      {
        const e = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,
          i = t.match(e);
        if (2 === (null == i ? void 0 : i.length)) return i[1];
      }
      return "Other";
    }
    function kr(t = bn()) {
      return /firefox\//i.test(t);
    }
    function Cr(t = bn()) {
      const e = t.toLowerCase();
      return e.includes("safari/") && !e.includes("chrome/") && !e.includes("crios/") && !e.includes("android");
    }
    function Er(t = bn()) {
      return /crios\//i.test(t);
    }
    function Ar(t = bn()) {
      return /iemobile/i.test(t);
    }
    function Or(t = bn()) {
      return /android/i.test(t);
    }
    function Pr(t = bn()) {
      return /blackberry/i.test(t);
    }
    function Nr(t = bn()) {
      return /webos/i.test(t);
    }
    function Rr(t = bn()) {
      return /iphone|ipad|ipod/i.test(t) || (/macintosh/i.test(t) && /mobile/i.test(t));
    }
    function Dr() {
      return (
        (function () {
          const t = bn();
          return t.indexOf("MSIE ") >= 0 || t.indexOf("Trident/") >= 0;
        })() && 10 === document.documentMode
      );
    }
    function Fr(t = bn()) {
      return Rr(t) || Or(t) || Nr(t) || Pr(t) || /windows phone/i.test(t) || Ar(t);
    }
    function xr(t, e = []) {
      let i;
      switch (t) {
        case "Browser":
          i = Sr(bn());
          break;
        case "Worker":
          i = `${Sr(bn())}-${t}`;
          break;
        default:
          i = t;
      }
      return `${i}/JsCore/10.4.0/${e.length ? e.join(",") : "FirebaseCore-web"}`;
    }
    class jr {
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
        if (this.auth.currentUser === t) return;
        const e = [];
        try {
          for (const i of this.queue) await i(t), i.onAbort && e.push(i.onAbort);
        } catch (t) {
          e.reverse();
          for (const t of e)
            try {
              t();
            } catch (t) {}
          throw this.auth.Je.create("login-blocked", { originalMessage: null == t ? void 0 : t.message });
        }
      }
    }
    class Mr {
      constructor(t) {
        var e, i, n, s;
        const r = t.customStrengthOptions;
        (this.customStrengthOptions = {}),
          (this.customStrengthOptions.minPasswordLength = null !== (e = r.minPasswordLength) && void 0 !== e ? e : 6),
          r.maxPasswordLength && (this.customStrengthOptions.maxPasswordLength = r.maxPasswordLength),
          void 0 !== r.containsLowercaseCharacter && (this.customStrengthOptions.containsLowercaseLetter = r.containsLowercaseCharacter),
          void 0 !== r.containsUppercaseCharacter && (this.customStrengthOptions.containsUppercaseLetter = r.containsUppercaseCharacter),
          void 0 !== r.containsNumericCharacter && (this.customStrengthOptions.containsNumericCharacter = r.containsNumericCharacter),
          void 0 !== r.containsNonAlphanumericCharacter &&
            (this.customStrengthOptions.containsNonAlphanumericCharacter = r.containsNonAlphanumericCharacter),
          (this.enforcementState = t.enforcementState),
          "ENFORCEMENT_STATE_UNSPECIFIED" === this.enforcementState && (this.enforcementState = "OFF"),
          (this.allowedNonAlphanumericCharacters =
            null !== (n = null === (i = t.allowedNonAlphanumericCharacters) || void 0 === i ? void 0 : i.join("")) && void 0 !== n
              ? n
              : ""),
          (this.forceUpgradeOnSignin = null !== (s = t.forceUpgradeOnSignin) && void 0 !== s && s),
          (this.schemaVersion = t.schemaVersion);
      }
      validatePassword(t) {
        var e, i, n, s, r, o;
        const c = { isValid: !0, passwordPolicy: this };
        return (
          this.validatePasswordLengthOptions(t, c),
          this.validatePasswordCharacterOptions(t, c),
          c.isValid && (c.isValid = null === (e = c.meetsMinPasswordLength) || void 0 === e || e),
          c.isValid && (c.isValid = null === (i = c.meetsMaxPasswordLength) || void 0 === i || i),
          c.isValid && (c.isValid = null === (n = c.containsLowercaseLetter) || void 0 === n || n),
          c.isValid && (c.isValid = null === (s = c.containsUppercaseLetter) || void 0 === s || s),
          c.isValid && (c.isValid = null === (r = c.containsNumericCharacter) || void 0 === r || r),
          c.isValid && (c.isValid = null === (o = c.containsNonAlphanumericCharacter) || void 0 === o || o),
          c
        );
      }
      validatePasswordLengthOptions(t, e) {
        const i = this.customStrengthOptions.minPasswordLength,
          n = this.customStrengthOptions.maxPasswordLength;
        i && (e.meetsMinPasswordLength = t.length >= i), n && (e.meetsMaxPasswordLength = t.length <= n);
      }
      validatePasswordCharacterOptions(t, e) {
        let i;
        this.updatePasswordCharacterOptionsStatuses(e, !1, !1, !1, !1);
        for (let n = 0; n < t.length; n++)
          (i = t.charAt(n)),
            this.updatePasswordCharacterOptionsStatuses(
              e,
              i >= "a" && i <= "z",
              i >= "A" && i <= "Z",
              i >= "0" && i <= "9",
              this.allowedNonAlphanumericCharacters.includes(i)
            );
      }
      updatePasswordCharacterOptionsStatuses(t, e, i, n, s) {
        this.customStrengthOptions.containsLowercaseLetter && (t.containsLowercaseLetter || (t.containsLowercaseLetter = e)),
          this.customStrengthOptions.containsUppercaseLetter && (t.containsUppercaseLetter || (t.containsUppercaseLetter = i)),
          this.customStrengthOptions.containsNumericCharacter && (t.containsNumericCharacter || (t.containsNumericCharacter = n)),
          this.customStrengthOptions.containsNonAlphanumericCharacter &&
            (t.containsNonAlphanumericCharacter || (t.containsNonAlphanumericCharacter = s));
      }
    }
    class Lr {
      constructor(t, e, i, n) {
        (this.app = t),
          (this.heartbeatServiceProvider = e),
          (this.appCheckServiceProvider = i),
          (this.config = n),
          (this.currentUser = null),
          (this.emulatorConfig = null),
          (this.operations = Promise.resolve()),
          (this.authStateSubscription = new Br(this)),
          (this.idTokenSubscription = new Br(this)),
          (this.beforeStateQueue = new jr(this)),
          (this.redirectUser = null),
          (this.isProactiveRefreshEnabled = !1),
          (this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1),
          (this.Ke = !0),
          (this.Ti = !1),
          (this.Si = !1),
          (this.ki = null),
          (this.Ci = null),
          (this.Je = Fs),
          (this.Ei = null),
          (this.Ai = {}),
          (this.Oi = null),
          (this.Pi = {}),
          (this.lastNotifiedUid = void 0),
          (this.languageCode = null),
          (this.tenantId = null),
          (this.settings = { appVerificationDisabledForTesting: !1 }),
          (this.frameworks = []),
          (this.name = t.name),
          (this.clientVersion = n.sdkClientVersion);
      }
      Ni(t, e) {
        return (
          e && (this.Ci = wr(e)),
          (this.ki = this.queue(async () => {
            var i, n;
            if (!this.Si && ((this.persistenceManager = await Tr.create(this, t)), !this.Si)) {
              if (null === (i = this.Ci) || void 0 === i ? void 0 : i.Ri)
                try {
                  await this.Ci.Di(this);
                } catch (t) {}
              await this.initializeCurrentUser(e),
                (this.lastNotifiedUid = (null === (n = this.currentUser) || void 0 === n ? void 0 : n.uid) || null),
                this.Si || (this.Ti = !0);
            }
          })),
          this.ki
        );
      }
      async _i() {
        if (this.Si) return;
        const t = await this.assertedPersistence.getCurrentUser();
        return this.currentUser || t
          ? this.currentUser && t && this.currentUser.uid === t.uid
            ? (this.Fi.ni(t), void (await this.currentUser.getIdToken()))
            : void (await this.xi(t, !0))
          : void 0;
      }
      async initializeCurrentUser(t) {
        var e;
        const i = await this.assertedPersistence.getCurrentUser();
        let n = i,
          s = !1;
        if (t && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const i = null === (e = this.redirectUser) || void 0 === e ? void 0 : e.li,
            r = null == n ? void 0 : n.li,
            o = await this.tryRedirectSignIn(t);
          (i && i !== r) || !(null == o ? void 0 : o.user) || ((n = o.user), (s = !0));
        }
        if (!n) return this.directlySetCurrentUser(null);
        if (!n.li) {
          if (s)
            try {
              await this.beforeStateQueue.runMiddleware(n);
            } catch (t) {
              (n = i), this.Ci.ji(this, () => Promise.reject(t));
            }
          return n ? this.reloadAndSetCurrentUserOrClear(n) : this.directlySetCurrentUser(null);
        }
        return (
          $s(this.Ci, this, "argument-error"),
          await this.getOrInitRedirectPersistenceManager(),
          this.redirectUser && this.redirectUser.li === n.li ? this.directlySetCurrentUser(n) : this.reloadAndSetCurrentUserOrClear(n)
        );
      }
      async tryRedirectSignIn(t) {
        let e = null;
        try {
          e = await this.Ci.Mi(this, t, !0);
        } catch (t) {
          await this.Li(null);
        }
        return e;
      }
      async reloadAndSetCurrentUserOrClear(t) {
        try {
          await pr(t);
        } catch (t) {
          if ("auth/network-request-failed" !== (null == t ? void 0 : t.code)) return this.directlySetCurrentUser(null);
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
      async De() {
        this.Si = !0;
      }
      async updateCurrentUser(t) {
        const e = t ? On(t) : null;
        return e && $s(e.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token"), this.xi(e && e.si(this));
      }
      async xi(t, e = !1) {
        if (!this.Si)
          return (
            t && $s(this.tenantId === t.tenantId, this, "tenant-id-mismatch"),
            e || (await this.beforeStateQueue.runMiddleware(t)),
            this.queue(async () => {
              await this.directlySetCurrentUser(t), this.notifyAuthListeners();
            })
          );
      }
      async signOut() {
        return (
          await this.beforeStateQueue.runMiddleware(null),
          (this.redirectPersistenceManager || this.Ci) && (await this.Li(null)),
          this.xi(null, !0)
        );
      }
      setPersistence(t) {
        return this.queue(async () => {
          await this.assertedPersistence.setPersistence(wr(t));
        });
      }
      Ui() {
        return null == this.tenantId ? this.Ei : this.Ai[this.tenantId];
      }
      async validatePassword(t) {
        this.Bi() || (await this.Vi());
        const e = this.Bi();
        return e.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION
          ? Promise.reject(this.Je.create("unsupported-password-policy-schema-version", {}))
          : e.validatePassword(t);
      }
      Bi() {
        return null === this.tenantId ? this.Oi : this.Pi[this.tenantId];
      }
      async Vi() {
        const t = await (async function (t, e = {}) {
            return er(t, "GET", "/v2/passwordPolicy", tr(t, e));
          })(this),
          e = new Mr(t);
        null === this.tenantId ? (this.Oi = e) : (this.Pi[this.tenantId] = e);
      }
      $i() {
        return this.assertedPersistence.persistence.type;
      }
      Wi(t) {
        this.Je = new yn("auth", "Firebase", t());
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
      authStateReady() {
        return new Promise((t, e) => {
          if (this.currentUser) t();
          else {
            const i = this.onAuthStateChanged(() => {
              i(), t();
            }, e);
          }
        });
      }
      toJSON() {
        var t;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser: null === (t = this.Fi) || void 0 === t ? void 0 : t.toJSON()
        };
      }
      async Li(t, e) {
        const i = await this.getOrInitRedirectPersistenceManager(e);
        return null === t ? i.removeCurrentUser() : i.setCurrentUser(t);
      }
      async getOrInitRedirectPersistenceManager(t) {
        if (!this.redirectPersistenceManager) {
          const e = (t && wr(t)) || this.Ci;
          $s(e, this, "argument-error"),
            (this.redirectPersistenceManager = await Tr.create(this, [wr(e.Gi)], "redirectUser")),
            (this.redirectUser = await this.redirectPersistenceManager.getCurrentUser());
        }
        return this.redirectPersistenceManager;
      }
      async Hi(t) {
        var e, i;
        return (
          this.Ti && (await this.queue(async () => {})),
          (null === (e = this.Fi) || void 0 === e ? void 0 : e.li) === t
            ? this.Fi
            : (null === (i = this.redirectUser) || void 0 === i ? void 0 : i.li) === t
            ? this.redirectUser
            : null
        );
      }
      async oi(t) {
        if (t === this.currentUser) return this.queue(async () => this.directlySetCurrentUser(t));
      }
      ci(t) {
        t === this.currentUser && this.notifyAuthListeners();
      }
      zi() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
      }
      hi() {
        (this.isProactiveRefreshEnabled = !0), this.currentUser && this.Fi.hi();
      }
      ui() {
        (this.isProactiveRefreshEnabled = !1), this.currentUser && this.Fi.ui();
      }
      get Fi() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        var t, e;
        if (!this.Ti) return;
        this.idTokenSubscription.next(this.currentUser);
        const i = null !== (e = null === (t = this.currentUser) || void 0 === t ? void 0 : t.uid) && void 0 !== e ? e : null;
        this.lastNotifiedUid !== i && ((this.lastNotifiedUid = i), this.authStateSubscription.next(this.currentUser));
      }
      registerStateListener(t, e, i, n) {
        if (this.Si) return () => {};
        const s = "function" == typeof e ? e : e.next.bind(e);
        let r = !1;
        const o = this.Ti ? Promise.resolve() : this.ki;
        if (
          ($s(o, this, "internal-error"),
          o.then(() => {
            r || s(this.currentUser);
          }),
          "function" == typeof e)
        ) {
          const s = t.addObserver(e, i, n);
          return () => {
            (r = !0), s();
          };
        }
        {
          const i = t.addObserver(e);
          return () => {
            (r = !0), i();
          };
        }
      }
      async directlySetCurrentUser(t) {
        this.currentUser && this.currentUser !== t && this.Fi.ui(),
          t && this.isProactiveRefreshEnabled && t.hi(),
          (this.currentUser = t),
          t ? await this.assertedPersistence.setCurrentUser(t) : await this.assertedPersistence.removeCurrentUser();
      }
      queue(t) {
        return (this.operations = this.operations.then(t, t)), this.operations;
      }
      get assertedPersistence() {
        return $s(this.persistenceManager, this, "internal-error"), this.persistenceManager;
      }
      Ji(t) {
        t &&
          !this.frameworks.includes(t) &&
          (this.frameworks.push(t), this.frameworks.sort(), (this.clientVersion = xr(this.config.clientPlatform, this.qi())));
      }
      qi() {
        return this.frameworks;
      }
      async qe() {
        var t;
        const e = { "X-Client-Version": this.clientVersion };
        this.app.options.appId && (e["X-Firebase-gmpid"] = this.app.options.appId);
        const i = await (null === (t = this.heartbeatServiceProvider.getImmediate({ optional: !0 })) || void 0 === t
          ? void 0
          : t.getHeartbeatsHeader());
        i && (e["X-Firebase-Client"] = i);
        const n = await this.Ki();
        return n && (e["X-Firebase-AppCheck"] = n), e;
      }
      async Ki() {
        var t;
        const e = await (null === (t = this.appCheckServiceProvider.getImmediate({ optional: !0 })) || void 0 === t
          ? void 0
          : t.getToken());
        return (
          (null == e ? void 0 : e.error) &&
            (function (t, ...e) {
              xs.logLevel <= xn.WARN && xs.warn(`Auth (10.4.0): ${t}`, ...e);
            })(`Error while retrieving App Check token: ${e.error}`),
          null == e ? void 0 : e.token
        );
      }
    }
    function Ur(t) {
      return On(t);
    }
    class Br {
      constructor(t) {
        (this.auth = t),
          (this.observer = null),
          (this.addObserver = (function (t, e) {
            const i = new En(t, e);
            return i.subscribe.bind(i);
          })((t) => (this.observer = t)));
      }
      get next() {
        return $s(this.observer, this.auth, "internal-error"), this.observer.next.bind(this.observer);
      }
    }
    function Vr(t) {
      return new Promise((e, i) => {
        const n = document.createElement("script");
        var s, r;
        n.setAttribute("src", t),
          (n.onload = e),
          (n.onerror = (t) => {
            const e = Ls("internal-error");
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
    function $r(t) {
      return `__${t}${Math.floor(1e6 * Math.random())}`;
    }
    class Wr {
      constructor(t) {
        (this.type = "recaptcha-enterprise"), (this.auth = Ur(t));
      }
      async verify(t = "verify", e = !1) {
        function i(e, i, n) {
          const s = window.grecaptcha;
          Ps(s)
            ? s.enterprise.ready(() => {
                s.enterprise
                  .execute(e, { action: t })
                  .then((t) => {
                    i(t);
                  })
                  .catch(() => {
                    i("NO_RECAPTCHA");
                  });
              })
            : n(Error("No reCAPTCHA enterprise script loaded."));
        }
        return new Promise((t, n) => {
          (async function (t) {
            if (!e) {
              if (null == t.tenantId && null != t.Ei) return t.Ei.siteKey;
              if (null != t.tenantId && void 0 !== t.Ai[t.tenantId]) return t.Ai[t.tenantId].siteKey;
            }
            return new Promise(async (e, i) => {
              cr(t, { clientType: "CLIENT_TYPE_WEB", version: "RECAPTCHA_ENTERPRISE" })
                .then((n) => {
                  if (void 0 !== n.recaptchaKey) {
                    const i = new Ns(n);
                    return null == t.tenantId ? (t.Ei = i) : (t.Ai[t.tenantId] = i), e(i.siteKey);
                  }
                  i(new Error("recaptcha Enterprise site key undefined"));
                })
                .catch((t) => {
                  i(t);
                });
            });
          })(this.auth)
            .then((s) => {
              if (!e && Ps(window.grecaptcha)) i(s, t, n);
              else {
                if ("undefined" == typeof window) return void n(new Error("RecaptchaVerifier is only supported in browser"));
                Vr("https://www.google.com/recaptcha/enterprise.js?render=" + s)
                  .then(() => {
                    i(s, t, n);
                  })
                  .catch((t) => {
                    n(t);
                  });
              }
            })
            .catch((t) => {
              n(t);
            });
        });
      }
    }
    async function Gr(t, e, i, n = !1) {
      const s = new Wr(t);
      let r;
      try {
        r = await s.verify(i);
      } catch (t) {
        r = await s.verify(i, !0);
      }
      const o = Object.assign({}, e);
      return (
        n ? Object.assign(o, { captchaResp: r }) : Object.assign(o, { captchaResponse: r }),
        Object.assign(o, { clientType: "CLIENT_TYPE_WEB" }),
        Object.assign(o, { recaptchaVersion: "RECAPTCHA_ENTERPRISE" }),
        o
      );
    }
    function Hr(t, e) {
      const i = fs(t, "auth");
      if (i.isInitialized()) {
        const t = i.getImmediate();
        if (In(i.getOptions(), null != e ? e : {})) return t;
        Ms(t, "already-initialized");
      }
      return i.initialize({ options: e });
    }
    function zr(t, e, i) {
      const n = Ur(t);
      $s(n.Ke, n, "emulator-config-failed"), $s(/^https?:\/\//.test(e), n, "invalid-emulator-scheme");
      const s = !!(null == i ? void 0 : i.disableWarnings),
        r = Jr(e),
        { host: o, port: c } = (function (t) {
          const e = Jr(t),
            i = /(\/\/)?([^?#/]+)/.exec(t.substr(e.length));
          if (!i) return { host: "", port: null };
          const n = i[2].split("@").pop() || "",
            s = /^(\[[^\]]+\])(:|$)/.exec(n);
          if (s) {
            const t = s[1];
            return { host: t, port: qr(n.substr(t.length + 1)) };
          }
          {
            const [t, e] = n.split(":");
            return { host: t, port: qr(e) };
          }
        })(e),
        a = null === c ? "" : `:${c}`;
      (n.config.emulator = { url: `${r}//${o}${a}/` }),
        (n.settings.appVerificationDisabledForTesting = !0),
        (n.emulatorConfig = Object.freeze({
          host: o,
          port: c,
          protocol: r.replace(":", ""),
          options: Object.freeze({ disableWarnings: s })
        })),
        s ||
          (function () {
            function t() {
              const t = document.createElement("p"),
                e = t.style;
              (t.innerText = "Running in emulator mode. Do not use with production credentials."),
                (e.position = "fixed"),
                (e.width = "100%"),
                (e.backgroundColor = "#ffffff"),
                (e.border = ".1em solid #000000"),
                (e.color = "#b50000"),
                (e.bottom = "0px"),
                (e.left = "0px"),
                (e.margin = "0px"),
                (e.zIndex = "10000"),
                (e.textAlign = "center"),
                t.classList.add("firebase-emulator-warning"),
                document.body.appendChild(t);
            }
            "undefined" != typeof console &&
              "function" == typeof console.info &&
              console.info(
                "WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."
              );
            "undefined" != typeof window &&
              "undefined" != typeof document &&
              ("loading" === document.readyState ? window.addEventListener("DOMContentLoaded", t) : t());
          })();
    }
    function Jr(t) {
      const e = t.indexOf(":");
      return e < 0 ? "" : t.substr(0, e + 1);
    }
    function qr(t) {
      if (!t) return null;
      const e = Number(t);
      return isNaN(e) ? null : e;
    }
    class Kr {
      constructor(t, e) {
        (this.providerId = t), (this.signInMethod = e);
      }
      toJSON() {
        return Ws("not implemented");
      }
      Xi(t) {
        return Ws("not implemented");
      }
      Yi(t, e) {
        return Ws("not implemented");
      }
      Zi(t) {
        return Ws("not implemented");
      }
    }
    async function Xr(t, e) {
      return er(t, "POST", "/v1/accounts:update", e);
    }
    async function Yr(t, e) {
      return nr(t, "POST", "/v1/accounts:signInWithPassword", tr(t, e));
    }
    async function Zr(t, e) {
      return er(t, "POST", "/v1/accounts:sendOobCode", tr(t, e));
    }
    async function Qr(t, e) {
      return Zr(t, e);
    }
    class to extends Kr {
      constructor(t, e, i, n = null) {
        super("password", i), (this.Qi = t), (this.tn = e), (this.en = n);
      }
      static nn(t, e) {
        return new to(t, e, "password");
      }
      static sn(t, e, i = null) {
        return new to(t, e, "emailLink", i);
      }
      toJSON() {
        return { email: this.Qi, password: this.tn, signInMethod: this.signInMethod, tenantId: this.en };
      }
      static fromJSON(t) {
        const e = "string" == typeof t ? JSON.parse(t) : t;
        if ((null == e ? void 0 : e.email) && (null == e ? void 0 : e.password)) {
          if ("password" === e.signInMethod) return this.nn(e.email, e.password);
          if ("emailLink" === e.signInMethod) return this.sn(e.email, e.password, e.tenantId);
        }
        return null;
      }
      async Xi(t) {
        var e;
        switch (this.signInMethod) {
          case "password":
            const i = { returnSecureToken: !0, email: this.Qi, password: this.tn, clientType: "CLIENT_TYPE_WEB" };
            if (null === (e = t.Ui()) || void 0 === e ? void 0 : e.emailPasswordEnabled) {
              const e = await Gr(t, i, "signInWithPassword");
              return Yr(t, e);
            }
            return Yr(t, i).catch(async (e) => {
              if ("auth/missing-recaptcha-token" === e.code) {
                console.log(
                  "Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow."
                );
                const e = await Gr(t, i, "signInWithPassword");
                return Yr(t, e);
              }
              return Promise.reject(e);
            });
          case "emailLink":
            return (async function (t, e) {
              return nr(t, "POST", "/v1/accounts:signInWithEmailLink", tr(t, e));
            })(t, { email: this.Qi, oobCode: this.tn });
          default:
            Ms(t, "internal-error");
        }
      }
      async Yi(t, e) {
        switch (this.signInMethod) {
          case "password":
            return Xr(t, { idToken: e, returnSecureToken: !0, email: this.Qi, password: this.tn });
          case "emailLink":
            return (async function (t, e) {
              return nr(t, "POST", "/v1/accounts:signInWithEmailLink", tr(t, e));
            })(t, { idToken: e, email: this.Qi, oobCode: this.tn });
          default:
            Ms(t, "internal-error");
        }
      }
      Zi(t) {
        return this.Xi(t);
      }
    }
    async function eo(t, e) {
      return nr(t, "POST", "/v1/accounts:signInWithIdp", tr(t, e));
    }
    class io extends Kr {
      constructor() {
        super(...arguments), (this.pendingToken = null);
      }
      static rn(t) {
        const e = new io(t.providerId, t.signInMethod);
        return (
          t.idToken || t.accessToken
            ? (t.idToken && (e.idToken = t.idToken),
              t.accessToken && (e.accessToken = t.accessToken),
              t.nonce && !t.pendingToken && (e.nonce = t.nonce),
              t.pendingToken && (e.pendingToken = t.pendingToken))
            : t.oauthToken && t.oauthTokenSecret
            ? ((e.accessToken = t.oauthToken), (e.secret = t.oauthTokenSecret))
            : Ms("argument-error"),
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
          s = Os(e, ["providerId", "signInMethod"]);
        if (!i || !n) return null;
        const r = new io(i, n);
        return (
          (r.idToken = s.idToken || void 0),
          (r.accessToken = s.accessToken || void 0),
          (r.secret = s.secret),
          (r.nonce = s.nonce),
          (r.pendingToken = s.pendingToken || null),
          r
        );
      }
      Xi(t) {
        return eo(t, this.buildRequest());
      }
      Yi(t, e) {
        const i = this.buildRequest();
        return (i.idToken = e), eo(t, i);
      }
      Zi(t) {
        const e = this.buildRequest();
        return (e.autoCreate = !1), eo(t, e);
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
            (t.postBody = Sn(e));
        }
        return t;
      }
    }
    const no = { USER_NOT_FOUND: "user-not-found" };
    class so extends Kr {
      constructor(t) {
        super("phone", "phone"), (this.params = t);
      }
      static cn(t, e) {
        return new so({ verificationId: t, verificationCode: e });
      }
      static an(t, e) {
        return new so({ phoneNumber: t, temporaryProof: e });
      }
      Xi(t) {
        return (async function (t, e) {
          return nr(t, "POST", "/v1/accounts:signInWithPhoneNumber", tr(t, e));
        })(t, this.hn());
      }
      Yi(t, e) {
        return (async function (t, e) {
          const i = await nr(t, "POST", "/v1/accounts:signInWithPhoneNumber", tr(t, e));
          if (i.temporaryProof) throw or(t, "account-exists-with-different-credential", i);
          return i;
        })(t, Object.assign({ idToken: e }, this.hn()));
      }
      Zi(t) {
        return (async function (t, e) {
          return nr(
            t,
            "POST",
            "/v1/accounts:signInWithPhoneNumber",
            tr(t, Object.assign(Object.assign({}, e), { operation: "REAUTH" })),
            no
          );
        })(t, this.hn());
      }
      hn() {
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
        return i || e || n || s ? new so({ verificationId: e, verificationCode: i, phoneNumber: n, temporaryProof: s }) : null;
      }
    }
    class ro {
      constructor(t) {
        var e, i, n, s, r, o;
        const c = kn(Cn(t)),
          a = null !== (e = c.apiKey) && void 0 !== e ? e : null,
          h = null !== (i = c.oobCode) && void 0 !== i ? i : null,
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
          })(null !== (n = c.mode) && void 0 !== n ? n : null);
        $s(a && h && u, "argument-error"),
          (this.apiKey = a),
          (this.operation = u),
          (this.code = h),
          (this.continueUrl = null !== (s = c.continueUrl) && void 0 !== s ? s : null),
          (this.languageCode = null !== (r = c.languageCode) && void 0 !== r ? r : null),
          (this.tenantId = null !== (o = c.tenantId) && void 0 !== o ? o : null);
      }
      static parseLink(t) {
        const e = (function (t) {
          const e = kn(Cn(t)).link,
            i = e ? kn(Cn(e)).deep_link_id : null,
            n = kn(Cn(t)).deep_link_id;
          return (n ? kn(Cn(n)).link : null) || n || i || e || t;
        })(t);
        try {
          return new ro(e);
        } catch (t) {
          return null;
        }
      }
    }
    class oo {
      constructor() {
        this.providerId = oo.PROVIDER_ID;
      }
      static credential(t, e) {
        return to.nn(t, e);
      }
      static credentialWithLink(t, e) {
        const i = ro.parseLink(e);
        return $s(i, "argument-error"), to.sn(t, i.code, i.tenantId);
      }
    }
    (oo.PROVIDER_ID = "password"), (oo.EMAIL_PASSWORD_SIGN_IN_METHOD = "password"), (oo.EMAIL_LINK_SIGN_IN_METHOD = "emailLink");
    class co {
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
    class ao extends co {
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
    class ho extends ao {
      constructor() {
        super("facebook.com");
      }
      static credential(t) {
        return io.rn({ providerId: ho.PROVIDER_ID, signInMethod: ho.FACEBOOK_SIGN_IN_METHOD, accessToken: t });
      }
      static credentialFromResult(t) {
        return ho.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return ho.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Ye: t }) {
        if (!t || !("oauthAccessToken" in t)) return null;
        if (!t.oauthAccessToken) return null;
        try {
          return ho.credential(t.oauthAccessToken);
        } catch (t) {
          return null;
        }
      }
    }
    (ho.FACEBOOK_SIGN_IN_METHOD = "facebook.com"), (ho.PROVIDER_ID = "facebook.com");
    class uo extends ao {
      constructor() {
        super("google.com"), this.addScope("profile");
      }
      static credential(t, e) {
        return io.rn({ providerId: uo.PROVIDER_ID, signInMethod: uo.GOOGLE_SIGN_IN_METHOD, idToken: t, accessToken: e });
      }
      static credentialFromResult(t) {
        return uo.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return uo.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Ye: t }) {
        if (!t) return null;
        const { oauthIdToken: e, oauthAccessToken: i } = t;
        if (!e && !i) return null;
        try {
          return uo.credential(e, i);
        } catch (t) {
          return null;
        }
      }
    }
    (uo.GOOGLE_SIGN_IN_METHOD = "google.com"), (uo.PROVIDER_ID = "google.com");
    class lo extends ao {
      constructor() {
        super("github.com");
      }
      static credential(t) {
        return io.rn({ providerId: lo.PROVIDER_ID, signInMethod: lo.GITHUB_SIGN_IN_METHOD, accessToken: t });
      }
      static credentialFromResult(t) {
        return lo.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return lo.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Ye: t }) {
        if (!t || !("oauthAccessToken" in t)) return null;
        if (!t.oauthAccessToken) return null;
        try {
          return lo.credential(t.oauthAccessToken);
        } catch (t) {
          return null;
        }
      }
    }
    (lo.GITHUB_SIGN_IN_METHOD = "github.com"), (lo.PROVIDER_ID = "github.com");
    class fo extends ao {
      constructor() {
        super("twitter.com");
      }
      static credential(t, e) {
        return io.rn({ providerId: fo.PROVIDER_ID, signInMethod: fo.TWITTER_SIGN_IN_METHOD, oauthToken: t, oauthTokenSecret: e });
      }
      static credentialFromResult(t) {
        return fo.credentialFromTaggedObject(t);
      }
      static credentialFromError(t) {
        return fo.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Ye: t }) {
        if (!t) return null;
        const { oauthAccessToken: e, oauthTokenSecret: i } = t;
        if (!e || !i) return null;
        try {
          return fo.credential(e, i);
        } catch (t) {
          return null;
        }
      }
    }
    async function po(t, e) {
      return nr(t, "POST", "/v1/accounts:signUp", tr(t, e));
    }
    (fo.TWITTER_SIGN_IN_METHOD = "twitter.com"), (fo.PROVIDER_ID = "twitter.com");
    class vo {
      constructor(t) {
        (this.user = t.user), (this.providerId = t.providerId), (this.Ye = t.Ye), (this.operationType = t.operationType);
      }
      static async pi(t, e, i, n = !1) {
        const s = await mr.pi(t, i, n),
          r = go(i);
        return new vo({ user: s, providerId: r, Ye: i, operationType: e });
      }
      static async un(t, e, i) {
        await t.di(i, !0);
        const n = go(i);
        return new vo({ user: t, providerId: n, Ye: i, operationType: e });
      }
    }
    function go(t) {
      return t.providerId ? t.providerId : "phoneNumber" in t ? "phone" : null;
    }
    class mo extends wn {
      constructor(t, e, i, n) {
        var s;
        super(e.code, e.message),
          (this.operationType = i),
          (this.user = n),
          Object.setPrototypeOf(this, mo.prototype),
          (this.customData = {
            appName: t.name,
            tenantId: null !== (s = t.tenantId) && void 0 !== s ? s : void 0,
            Xe: e.customData.Xe,
            operationType: i
          });
      }
      static dn(t, e, i, n) {
        return new mo(t, e, i, n);
      }
    }
    function bo(t, e, i, n) {
      return ("reauthenticate" === e ? i.Zi(t) : i.Xi(t)).catch((i) => {
        if ("auth/multi-factor-auth-required" === i.code) throw mo.dn(t, i, e, n);
        throw i;
      });
    }
    async function wo(t, e, i = !1) {
      const n = await dr(t, e.Yi(t.auth, await t.getIdToken()), i);
      return vo.un(t, "link", n);
    }
    async function yo(t, e, i = !1) {
      const { auth: n } = t,
        s = "reauthenticate";
      try {
        const r = await dr(t, bo(n, s, e, t), i);
        $s(r.idToken, n, "internal-error");
        const o = ur(r.idToken);
        $s(o, n, "internal-error");
        const { sub: c } = o;
        return $s(t.uid === c, n, "user-mismatch"), vo.un(t, s, r);
      } catch (t) {
        throw ("auth/user-not-found" === (null == t ? void 0 : t.code) && Ms(n, "user-mismatch"), t);
      }
    }
    async function _o(t, e, i = !1) {
      const n = "signIn",
        s = await bo(t, n, e),
        r = await vo.pi(t, n, s);
      return i || (await t.xi(r.user)), r;
    }
    async function Io(t, e) {
      return _o(Ur(t), e);
    }
    function To(t, e, i) {
      var n;
      $s((null === (n = i.url) || void 0 === n ? void 0 : n.length) > 0, t, "invalid-continue-uri"),
        $s(void 0 === i.dynamicLinkDomain || i.dynamicLinkDomain.length > 0, t, "invalid-dynamic-link-domain"),
        (e.continueUrl = i.url),
        (e.dynamicLinkDomain = i.dynamicLinkDomain),
        (e.canHandleCodeInApp = i.handleCodeInApp),
        i.iOS && ($s(i.iOS.bundleId.length > 0, t, "missing-ios-bundle-id"), (e.iOSBundleId = i.iOS.bundleId)),
        i.android &&
          ($s(i.android.packageName.length > 0, t, "missing-android-pkg-name"),
          (e.androidInstallApp = i.android.installApp),
          (e.androidMinimumVersionCode = i.android.minimumVersion),
          (e.androidPackageName = i.android.packageName));
    }
    async function So(t) {
      const e = Ur(t);
      e.Bi() && (await e.Vi());
    }
    async function ko(t, e, i) {
      var n;
      const s = Ur(t),
        r = { requestType: "PASSWORD_RESET", email: e, clientType: "CLIENT_TYPE_WEB" };
      if (null === (n = s.Ui()) || void 0 === n ? void 0 : n.emailPasswordEnabled) {
        const t = await Gr(s, r, "getOobCode", !0);
        i && To(s, t, i), await Qr(s, t);
      } else
        i && To(s, r, i),
          await Qr(s, r).catch(async (t) => {
            if ("auth/missing-recaptcha-token" !== t.code) return Promise.reject(t);
            {
              console.log(
                "Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow."
              );
              const t = await Gr(s, r, "getOobCode", !0);
              i && To(s, t, i), await Qr(s, t);
            }
          });
    }
    async function Co(t, e, i) {
      var n;
      const s = Ur(t),
        r = { returnSecureToken: !0, email: e, password: i, clientType: "CLIENT_TYPE_WEB" };
      let o;
      if (null === (n = s.Ui()) || void 0 === n ? void 0 : n.emailPasswordEnabled) {
        const t = await Gr(s, r, "signUpPassword");
        o = po(s, t);
      } else
        o = po(s, r).catch(async (t) => {
          if ("auth/missing-recaptcha-token" === t.code) {
            console.log(
              "Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow."
            );
            const t = await Gr(s, r, "signUpPassword");
            return po(s, t);
          }
          throw t;
        });
      const c = await o.catch((e) => {
          throw ("auth/password-does-not-meet-requirements" === e.code && So(t), e);
        }),
        a = await vo.pi(s, "signIn", c);
      return await s.xi(a.user), a;
    }
    function Eo(t, e, i) {
      return Io(On(t), oo.credential(e, i)).catch(async (e) => {
        throw ("auth/password-does-not-meet-requirements" === e.code && So(t), e);
      });
    }
    async function Ao(t, e) {
      const i = { identifier: e, continueUri: zs() ? Hs() : "http://localhost" },
        { signinMethods: n } = await (async function (t, e) {
          return er(t, "POST", "/v1/accounts:createAuthUri", tr(t, e));
        })(On(t), i);
      return n || [];
    }
    class Oo {
      constructor(t, e, i = {}) {
        (this.isNewUser = t), (this.providerId = e), (this.profile = i);
      }
    }
    class Po extends Oo {
      constructor(t, e, i, n) {
        super(t, e, i), (this.username = n);
      }
    }
    class No extends Oo {
      constructor(t, e) {
        super(t, "facebook.com", e);
      }
    }
    class Ro extends Po {
      constructor(t, e) {
        super(t, "github.com", e, "string" == typeof (null == e ? void 0 : e.login) ? (null == e ? void 0 : e.login) : null);
      }
    }
    class Do extends Oo {
      constructor(t, e) {
        super(t, "google.com", e);
      }
    }
    class Fo extends Po {
      constructor(t, e, i) {
        super(t, "twitter.com", e, i);
      }
    }
    function xo(t) {
      const { user: e, Ye: i } = t;
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
                null === (i = null === (e = ur(t.idToken)) || void 0 === e ? void 0 : e.firebase) || void 0 === i
                  ? void 0
                  : i.sign_in_provider;
              if (n) return new Oo(r, "anonymous" !== n && "custom" !== n ? n : null);
            }
            if (!n) return null;
            switch (n) {
              case "facebook.com":
                return new No(r, s);
              case "github.com":
                return new Ro(r, s);
              case "google.com":
                return new Do(r, s);
              case "twitter.com":
                return new Fo(r, s, t.screenName || null);
              case "custom":
              case "anonymous":
                return new Oo(r, null);
              default:
                return new Oo(r, n, s);
            }
          })(i);
    }
    new WeakMap();
    const jo = "__sak";
    class Mo {
      constructor(t, e) {
        (this.storageRetriever = t), (this.type = e);
      }
      vi() {
        try {
          return this.storage ? (this.storage.setItem(jo, "1"), this.storage.removeItem(jo), Promise.resolve(!0)) : Promise.resolve(!1);
        } catch (t) {
          return Promise.resolve(!1);
        }
      }
      gi(t, e) {
        return this.storage.setItem(t, JSON.stringify(e)), Promise.resolve();
      }
      mi(t) {
        const e = this.storage.getItem(t);
        return Promise.resolve(e ? JSON.parse(e) : null);
      }
      bi(t) {
        return this.storage.removeItem(t), Promise.resolve();
      }
      get storage() {
        return this.storageRetriever();
      }
    }
    class Lo extends Mo {
      constructor() {
        super(() => window.localStorage, "LOCAL"),
          (this.boundEventHandler = (t, e) => this.onStorageEvent(t, e)),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.safariLocalStorageNotSynced =
            (function () {
              const t = bn();
              return Cr(t) || Rr(t);
            })() &&
            (function () {
              try {
                return !(!window || window === window.top);
              } catch (t) {
                return !1;
              }
            })()),
          (this.fallbackToPolling = Fr()),
          (this.Ii = !0);
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
        Dr() && s !== t.newValue && t.newValue !== t.oldValue ? setTimeout(n, 10) : n();
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
      wi(t, e) {
        0 === Object.keys(this.listeners).length && (this.fallbackToPolling ? this.startPolling() : this.attachListener()),
          this.listeners[t] || ((this.listeners[t] = new Set()), (this.localCache[t] = this.storage.getItem(t))),
          this.listeners[t].add(e);
      }
      yi(t, e) {
        this.listeners[t] && (this.listeners[t].delete(e), 0 === this.listeners[t].size && delete this.listeners[t]),
          0 === Object.keys(this.listeners).length && (this.detachListener(), this.stopPolling());
      }
      async gi(t, e) {
        await super.gi(t, e), (this.localCache[t] = JSON.stringify(e));
      }
      async mi(t) {
        const e = await super.mi(t);
        return (this.localCache[t] = JSON.stringify(e)), e;
      }
      async bi(t) {
        await super.bi(t), delete this.localCache[t];
      }
    }
    Lo.type = "LOCAL";
    const Uo = Lo;
    class Bo extends Mo {
      constructor() {
        super(() => window.sessionStorage, "SESSION");
      }
      wi(t, e) {}
      yi(t, e) {}
    }
    Bo.type = "SESSION";
    const Vo = Bo;
    class $o {
      constructor(t) {
        (this.eventTarget = t), (this.handlersMap = {}), (this.boundEventHandler = this.handleEvent.bind(this));
      }
      static ln(t) {
        const e = this.receivers.find((e) => e.isListeningto(t));
        if (e) return e;
        const i = new $o(t);
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
          c = await (function (t) {
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
        e.ports[0].postMessage({ status: "done", eventId: i, eventType: n, response: c });
      }
      pn(t, e) {
        0 === Object.keys(this.handlersMap).length && this.eventTarget.addEventListener("message", this.boundEventHandler),
          this.handlersMap[t] || (this.handlersMap[t] = new Set()),
          this.handlersMap[t].add(e);
      }
      vn(t, e) {
        this.handlersMap[t] && e && this.handlersMap[t].delete(e),
          (e && 0 !== this.handlersMap[t].size) || delete this.handlersMap[t],
          0 === Object.keys(this.handlersMap).length && this.eventTarget.removeEventListener("message", this.boundEventHandler);
      }
    }
    function Wo(t = "", e = 10) {
      let i = "";
      for (let t = 0; t < e; t++) i += Math.floor(10 * Math.random());
      return t + i;
    }
    $o.receivers = [];
    class Go {
      constructor(t) {
        (this.target = t), (this.handlers = new Set());
      }
      removeMessageHandler(t) {
        t.messageChannel && (t.messageChannel.port1.removeEventListener("message", t.onMessage), t.messageChannel.port1.close()),
          this.handlers.delete(t);
      }
      async gn(t, e, i = 50) {
        const n = "undefined" != typeof MessageChannel ? new MessageChannel() : null;
        if (!n) throw new Error("connection_unavailable");
        let s, r;
        return new Promise((o, c) => {
          const a = Wo("", 20);
          n.port1.start();
          const h = setTimeout(() => {
            c(new Error("unsupported_event"));
          }, i);
          (r = {
            messageChannel: n,
            onMessage(t) {
              const e = t;
              if (e.data.eventId === a)
                switch (e.data.status) {
                  case "ack":
                    clearTimeout(h),
                      (s = setTimeout(() => {
                        c(new Error("timeout"));
                      }, 3e3));
                    break;
                  case "done":
                    clearTimeout(s), o(e.data.response);
                    break;
                  default:
                    clearTimeout(h), clearTimeout(s), c(new Error("invalid_response"));
                }
            }
          }),
            this.handlers.add(r),
            n.port1.addEventListener("message", r.onMessage),
            this.target.postMessage({ eventType: t, eventId: a, data: e }, [n.port2]);
        }).finally(() => {
          r && this.removeMessageHandler(r);
        });
      }
    }
    function Ho() {
      return window;
    }
    function zo() {
      return void 0 !== Ho().WorkerGlobalScope && "function" == typeof Ho().importScripts;
    }
    const Jo = "firebaseLocalStorageDb",
      qo = "firebaseLocalStorage",
      Ko = "fbase_key";
    class Xo {
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
    function Yo(t, e) {
      return t.transaction([qo], e ? "readwrite" : "readonly").objectStore(qo);
    }
    function Zo() {
      const t = indexedDB.open(Jo, 1);
      return new Promise((e, i) => {
        t.addEventListener("error", () => {
          i(t.error);
        }),
          t.addEventListener("upgradeneeded", () => {
            const e = t.result;
            try {
              e.createObjectStore(qo, { keyPath: Ko });
            } catch (t) {
              i(t);
            }
          }),
          t.addEventListener("success", async () => {
            const i = t.result;
            i.objectStoreNames.contains(qo)
              ? e(i)
              : (i.close(),
                await (function () {
                  const t = indexedDB.deleteDatabase(Jo);
                  return new Xo(t).toPromise();
                })(),
                e(await Zo()));
          });
      });
    }
    async function Qo(t, e, i) {
      const n = Yo(t, !0).put({ [Ko]: e, value: i });
      return new Xo(n).toPromise();
    }
    function tc(t, e) {
      const i = Yo(t, !0).delete(e);
      return new Xo(i).toPromise();
    }
    class ec {
      constructor() {
        (this.type = "LOCAL"),
          (this.Ii = !0),
          (this.listeners = {}),
          (this.localCache = {}),
          (this.pollTimer = null),
          (this.pendingWrites = 0),
          (this.receiver = null),
          (this.sender = null),
          (this.serviceWorkerReceiverAvailable = !1),
          (this.activeServiceWorker = null),
          (this.mn = this.initializeServiceWorkerMessaging().then(
            () => {},
            () => {}
          ));
      }
      async bn() {
        return this.db || (this.db = await Zo()), this.db;
      }
      async wn(t) {
        let e = 0;
        for (;;)
          try {
            const e = await this.bn();
            return await t(e);
          } catch (t) {
            if (e++ > 3) throw t;
            this.db && (this.db.close(), (this.db = void 0));
          }
      }
      async initializeServiceWorkerMessaging() {
        return zo() ? this.initializeReceiver() : this.initializeSender();
      }
      async initializeReceiver() {
        (this.receiver = $o.ln(zo() ? self : null)),
          this.receiver.pn("keyChanged", async (t, e) => ({ keyProcessed: (await this.yn()).includes(e.key) })),
          this.receiver.pn("ping", async (t, e) => ["keyChanged"]);
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
        this.sender = new Go(this.activeServiceWorker);
        const i = await this.sender.gn("ping", {}, 800);
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
            await this.sender.gn("keyChanged", { key: t }, this.serviceWorkerReceiverAvailable ? 800 : 50);
          } catch (e) {}
      }
      async vi() {
        try {
          if (!indexedDB) return !1;
          const t = await Zo();
          return await Qo(t, jo, "1"), await tc(t, jo), !0;
        } catch (t) {}
        return !1;
      }
      async _n(t) {
        this.pendingWrites++;
        try {
          await t();
        } finally {
          this.pendingWrites--;
        }
      }
      async gi(t, e) {
        return this._n(async () => (await this.wn((i) => Qo(i, t, e)), (this.localCache[t] = e), this.notifyServiceWorker(t)));
      }
      async mi(t) {
        const e = await this.wn((e) =>
          (async function (t, e) {
            const i = Yo(t, !1).get(e),
              n = await new Xo(i).toPromise();
            return void 0 === n ? null : n.value;
          })(e, t)
        );
        return (this.localCache[t] = e), e;
      }
      async bi(t) {
        return this._n(async () => (await this.wn((e) => tc(e, t)), delete this.localCache[t], this.notifyServiceWorker(t)));
      }
      async yn() {
        const t = await this.wn((t) => {
          const e = Yo(t, !1).getAll();
          return new Xo(e).toPromise();
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
        this.stopPolling(), (this.pollTimer = setInterval(async () => this.yn(), 800));
      }
      stopPolling() {
        this.pollTimer && (clearInterval(this.pollTimer), (this.pollTimer = null));
      }
      wi(t, e) {
        0 === Object.keys(this.listeners).length && this.startPolling(),
          this.listeners[t] || ((this.listeners[t] = new Set()), this.mi(t)),
          this.listeners[t].add(e);
      }
      yi(t, e) {
        this.listeners[t] && (this.listeners[t].delete(e), 0 === this.listeners[t].size && delete this.listeners[t]),
          0 === Object.keys(this.listeners).length && this.stopPolling();
      }
    }
    ec.type = "LOCAL";
    const ic = ec;
    $r("rcb"), new Ks(3e4, 6e4);
    const nc = "recaptcha";
    async function sc(t, e, i) {
      var n;
      const s = await i.verify();
      try {
        let r;
        if (
          ($s("string" == typeof s, t, "argument-error"),
          $s(i.type === nc, t, "argument-error"),
          (r = "string" == typeof e ? { phoneNumber: e } : e),
          "session" in r)
        ) {
          const e = r.session;
          if ("phoneNumber" in r) {
            $s("enroll" === e.type, t, "internal-error");
            const i = await (function (t, e) {
              return er(t, "POST", "/v2/accounts/mfaEnrollment:start", tr(t, e));
            })(t, { idToken: e.credential, phoneEnrollmentInfo: { phoneNumber: r.phoneNumber, recaptchaToken: s } });
            return i.phoneSessionInfo.sessionInfo;
          }
          {
            $s("signin" === e.type, t, "internal-error");
            const i = (null === (n = r.multiFactorHint) || void 0 === n ? void 0 : n.uid) || r.multiFactorUid;
            $s(i, t, "missing-multi-factor-info");
            const o = await (function (t, e) {
              return er(t, "POST", "/v2/accounts/mfaSignIn:start", tr(t, e));
            })(t, { mfaPendingCredential: e.credential, mfaEnrollmentId: i, phoneSignInInfo: { recaptchaToken: s } });
            return o.phoneResponseInfo.sessionInfo;
          }
        }
        {
          const { sessionInfo: e } = await (async function (t, e) {
            return er(t, "POST", "/v1/accounts:sendVerificationCode", tr(t, e));
          })(t, { phoneNumber: r.phoneNumber, recaptchaToken: s });
          return e;
        }
      } finally {
        i.In();
      }
    }
    class rc {
      constructor(t) {
        (this.providerId = rc.PROVIDER_ID), (this.auth = Ur(t));
      }
      verifyPhoneNumber(t, e) {
        return sc(this.auth, t, On(e));
      }
      static credential(t, e) {
        return so.cn(t, e);
      }
      static credentialFromResult(t) {
        const e = t;
        return rc.credentialFromTaggedObject(e);
      }
      static credentialFromError(t) {
        return rc.credentialFromTaggedObject(t.customData || {});
      }
      static credentialFromTaggedObject({ Ye: t }) {
        if (!t) return null;
        const { phoneNumber: e, temporaryProof: i } = t;
        return e && i ? so.an(e, i) : null;
      }
    }
    function oc(t, e) {
      return e ? wr(e) : ($s(t.Ci, t, "argument-error"), t.Ci);
    }
    (rc.PROVIDER_ID = "phone"), (rc.PHONE_SIGN_IN_METHOD = "phone");
    class cc extends Kr {
      constructor(t) {
        super("custom", "custom"), (this.params = t);
      }
      Xi(t) {
        return eo(t, this.Tn());
      }
      Yi(t, e) {
        return eo(t, this.Tn(e));
      }
      Zi(t) {
        return eo(t, this.Tn());
      }
      Tn(t) {
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
    function ac(t) {
      return _o(t.auth, new cc(t), t.bypassAuthState);
    }
    function hc(t) {
      const { auth: e, user: i } = t;
      return $s(i, e, "internal-error"), yo(i, new cc(t), t.bypassAuthState);
    }
    async function uc(t) {
      const { auth: e, user: i } = t;
      return $s(i, e, "internal-error"), wo(i, new cc(t), t.bypassAuthState);
    }
    class dc {
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
            (this.eventManager = await this.resolver.Di(this.auth)), await this.onExecution(), this.eventManager.registerConsumer(this);
          } catch (t) {
            this.reject(t);
          }
        });
      }
      async onAuthEvent(t) {
        const { urlResponse: e, sessionId: i, postBody: n, tenantId: s, error: r, type: o } = t;
        if (r) return void this.reject(r);
        const c = {
          auth: this.auth,
          requestUri: e,
          sessionId: i,
          tenantId: s || void 0,
          postBody: n || void 0,
          user: this.user,
          bypassAuthState: this.bypassAuthState
        };
        try {
          this.resolve(await this.getIdpTask(o)(c));
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
            return ac;
          case "linkViaPopup":
          case "linkViaRedirect":
            return uc;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return hc;
          default:
            Ms(this.auth, "internal-error");
        }
      }
      resolve(t) {
        Gs(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.resolve(t), this.unregisterAndCleanUp();
      }
      reject(t) {
        Gs(this.pendingPromise, "Pending promise was never set"), this.pendingPromise.reject(t), this.unregisterAndCleanUp();
      }
      unregisterAndCleanUp() {
        this.eventManager && this.eventManager.unregisterConsumer(this), (this.pendingPromise = null), this.cleanUp();
      }
    }
    const lc = new Ks(2e3, 1e4);
    async function fc(t, e, i) {
      const n = Ur(t);
      Bs(t, e, co);
      const s = oc(n, i);
      return new pc(n, "signInViaPopup", e, s).executeNotNull();
    }
    class pc extends dc {
      constructor(t, e, i, n, s) {
        super(t, e, n, s),
          (this.provider = i),
          (this.authWindow = null),
          (this.pollId = null),
          pc.currentPopupAction && pc.currentPopupAction.cancel(),
          (pc.currentPopupAction = this);
      }
      async executeNotNull() {
        const t = await this.execute();
        return $s(t, this.auth, "internal-error"), t;
      }
      async onExecution() {
        Gs(1 === this.filter.length, "Popup operations only handle one event");
        const t = Wo();
        (this.authWindow = await this.resolver.Sn(this.auth, this.provider, this.filter[0], t)),
          (this.authWindow.associatedEvent = t),
          this.resolver.kn(this.auth).catch((t) => {
            this.reject(t);
          }),
          this.resolver.Cn(this.auth, (t) => {
            t || this.reject(Ls(this.auth, "web-storage-unsupported"));
          }),
          this.pollUserCancellation();
      }
      get eventId() {
        var t;
        return (null === (t = this.authWindow) || void 0 === t ? void 0 : t.associatedEvent) || null;
      }
      cancel() {
        this.reject(Ls(this.auth, "cancelled-popup-request"));
      }
      cleanUp() {
        this.authWindow && this.authWindow.close(),
          this.pollId && window.clearTimeout(this.pollId),
          (this.authWindow = null),
          (this.pollId = null),
          (pc.currentPopupAction = null);
      }
      pollUserCancellation() {
        const t = () => {
          var e, i;
          (null === (i = null === (e = this.authWindow) || void 0 === e ? void 0 : e.window) || void 0 === i ? void 0 : i.closed)
            ? (this.pollId = window.setTimeout(() => {
                (this.pollId = null), this.reject(Ls(this.auth, "popup-closed-by-user"));
              }, 8e3))
            : (this.pollId = window.setTimeout(t, lc.get()));
        };
        t();
      }
    }
    pc.currentPopupAction = null;
    const vc = new Map();
    class gc extends dc {
      constructor(t, e, i = !1) {
        super(t, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], e, void 0, i), (this.eventId = null);
      }
      async execute() {
        let t = vc.get(this.auth.zi());
        if (!t) {
          try {
            const e = (await (async function (t, e) {
              const i = wc(e),
                n = bc(t);
              if (!(await n.vi())) return !1;
              const s = "true" === (await n.mi(i));
              return await n.bi(i), s;
            })(this.resolver, this.auth))
              ? await super.execute()
              : null;
            t = () => Promise.resolve(e);
          } catch (e) {
            t = () => Promise.reject(e);
          }
          vc.set(this.auth.zi(), t);
        }
        return this.bypassAuthState || vc.set(this.auth.zi(), () => Promise.resolve(null)), t();
      }
      async onAuthEvent(t) {
        if ("signInViaRedirect" === t.type) return super.onAuthEvent(t);
        if ("unknown" !== t.type) {
          if (t.eventId) {
            const e = await this.auth.Hi(t.eventId);
            if (e) return (this.user = e), super.onAuthEvent(t);
            this.resolve(null);
          }
        } else this.resolve(null);
      }
      async onExecution() {}
      cleanUp() {}
    }
    function mc(t, e) {
      vc.set(t.zi(), e);
    }
    function bc(t) {
      return wr(t.Gi);
    }
    function wc(t) {
      return Ir("pendingRedirect", t.config.apiKey, t.name);
    }
    async function yc(t, e, i = !1) {
      const n = Ur(t),
        s = oc(n, e),
        r = new gc(n, s, i),
        o = await r.execute();
      return o && !i && (delete o.user.li, await n.oi(o.user), await n.Li(null, e)), o;
    }
    class _c {
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
                  return Tc(t);
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
        if (t.error && !Tc(t)) {
          const n = (null === (i = t.error.code) || void 0 === i ? void 0 : i.split("auth/")[1]) || "internal-error";
          e.onError(Ls(this.auth, n));
        } else e.onAuthEvent(t);
      }
      isEventForConsumer(t, e) {
        const i = null === e.eventId || (!!t.eventId && t.eventId === e.eventId);
        return e.filter.includes(t.type) && i;
      }
      hasEventBeenHandled(t) {
        return Date.now() - this.lastProcessedEventTime >= 6e5 && this.cachedEventUids.clear(), this.cachedEventUids.has(Ic(t));
      }
      saveEventToCache(t) {
        this.cachedEventUids.add(Ic(t)), (this.lastProcessedEventTime = Date.now());
      }
    }
    function Ic(t) {
      return [t.type, t.eventId, t.sessionId, t.tenantId].filter((t) => t).join("-");
    }
    function Tc({ type: t, error: e }) {
      return "unknown" === t && "auth/no-auth-event" === (null == e ? void 0 : e.code);
    }
    const Sc = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      kc = /^https?/;
    async function Cc(t) {
      if (t.config.emulator) return;
      const { authorizedDomains: e } = await (async function (t, e = {}) {
        return er(t, "GET", "/v1/projects", e);
      })(t);
      for (const t of e)
        try {
          if (Ec(t)) return;
        } catch (t) {}
      Ms(t, "unauthorized-domain");
    }
    function Ec(t) {
      const e = Hs(),
        { protocol: i, hostname: n } = new URL(e);
      if (t.startsWith("chrome-extension://")) {
        const s = new URL(t);
        return "" === s.hostname && "" === n
          ? "chrome-extension:" === i && t.replace("chrome-extension://", "") === e.replace("chrome-extension://", "")
          : "chrome-extension:" === i && s.hostname === n;
      }
      if (!kc.test(i)) return !1;
      if (Sc.test(t)) return n === t;
      const s = t.replace(/\./g, "\\.");
      return new RegExp("^(.+\\." + s + "|" + s + ")$", "i").test(n);
    }
    const Ac = new Ks(3e4, 6e4);
    function Oc() {
      const t = Ho().En;
      if (null == t ? void 0 : t.H)
        for (const e of Object.keys(t.H))
          if (((t.H[e].r = t.H[e].r || []), (t.H[e].L = t.H[e].L || []), (t.H[e].r = [...t.H[e].L]), t.CP))
            for (let e = 0; e < t.CP.length; e++) t.CP[e] = null;
    }
    let Pc = null;
    function Nc(t) {
      return (
        (Pc =
          Pc ||
          (function (t) {
            return new Promise((e, i) => {
              var n, s, r;
              function o() {
                Oc(),
                  gapi.load("gapi.iframes", {
                    callback: () => {
                      e(gapi.iframes.getContext());
                    },
                    ontimeout: () => {
                      Oc(), i(Ls(t, "network-request-failed"));
                    },
                    timeout: Ac.get()
                  });
              }
              if (null === (s = null === (n = Ho().gapi) || void 0 === n ? void 0 : n.iframes) || void 0 === s ? void 0 : s.Iframe)
                e(gapi.iframes.getContext());
              else {
                if (!(null === (r = Ho().gapi) || void 0 === r ? void 0 : r.load)) {
                  const e = $r("iframefcb");
                  return (
                    (Ho()[e] = () => {
                      gapi.load ? o() : i(Ls(t, "network-request-failed"));
                    }),
                    Vr(`https://apis.google.com/js/api.js?onload=${e}`).catch((t) => i(t))
                  );
                }
                o();
              }
            }).catch((t) => {
              throw ((Pc = null), t);
            });
          })(t)),
        Pc
      );
    }
    const Rc = new Ks(5e3, 15e3),
      Dc = { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" }, "aria-hidden": "true", tabindex: "-1" },
      Fc = new Map([
        ["identitytoolkit.googleapis.com", "p"],
        ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
        ["test-identitytoolkit.sandbox.googleapis.com", "t"]
      ]);
    function xc(t) {
      const e = t.config;
      $s(e.authDomain, t, "auth-domain-config-required");
      const i = e.emulator ? Xs(e, "emulator/auth/iframe") : `https://${t.config.authDomain}/__/auth/iframe`,
        n = { apiKey: e.apiKey, appName: t.name, v: gs },
        s = Fc.get(t.config.apiHost);
      s && (n.eid = s);
      const r = t.qi();
      return r.length && (n.fw = r.join(",")), `${i}?${Sn(n).slice(1)}`;
    }
    const jc = { location: "yes", resizable: "yes", statusbar: "yes", toolbar: "no" };
    class Mc {
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
    function Lc(t, e, i, n = 500, s = 600) {
      const r = Math.max((window.screen.availHeight - s) / 2, 0).toString(),
        o = Math.max((window.screen.availWidth - n) / 2, 0).toString();
      let c = "";
      const a = Object.assign(Object.assign({}, jc), { width: n.toString(), height: s.toString(), top: r, left: o }),
        h = bn().toLowerCase();
      i && (c = Er(h) ? "_blank" : i), kr(h) && ((e = e || "http://localhost"), (a.scrollbars = "yes"));
      const u = Object.entries(a).reduce((t, [e, i]) => `${t}${e}=${i},`, "");
      if (
        (function (t = bn()) {
          var e;
          return Rr(t) && !!(null === (e = window.navigator) || void 0 === e ? void 0 : e.standalone);
        })(h) &&
        "_self" !== c
      )
        return (
          (function (t, e) {
            const i = document.createElement("a");
            (i.href = t), (i.target = e);
            const n = document.createEvent("MouseEvent");
            n.initMouseEvent("click", !0, !0, window, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, null), i.dispatchEvent(n);
          })(e || "", c),
          new Mc(null)
        );
      const d = window.open(e || "", c, u);
      $s(d, t, "popup-blocked");
      try {
        d.focus();
      } catch (t) {}
      return new Mc(d);
    }
    const Uc = "__/auth/handler",
      Bc = "emulator/auth/handler",
      Vc = encodeURIComponent("fac");
    async function $c(t, e, i, n, s, r) {
      $s(t.config.authDomain, t, "auth-domain-config-required"), $s(t.config.apiKey, t, "invalid-api-key");
      const o = { apiKey: t.config.apiKey, appName: t.name, authType: i, redirectUrl: n, v: gs, eventId: s };
      if (e instanceof co) {
        e.setDefaultLanguage(t.languageCode),
          (o.providerId = e.providerId || ""),
          (function (t) {
            for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
            return !0;
          })(e.getCustomParameters()) || (o.customParameters = JSON.stringify(e.getCustomParameters()));
        for (const [t, e] of Object.entries(r || {})) o[t] = e;
      }
      if (e instanceof ao) {
        const t = e.getScopes().filter((t) => "" !== t);
        t.length > 0 && (o.scopes = t.join(","));
      }
      t.tenantId && (o.tid = t.tenantId);
      const c = o;
      for (const t of Object.keys(c)) void 0 === c[t] && delete c[t];
      const a = await t.Ki(),
        h = a ? `#${Vc}=${encodeURIComponent(a)}` : "";
      return `${(function ({ config: t }) {
        if (!t.emulator) return `https://${t.authDomain}/${Uc}`;
        return Xs(t, Bc);
      })(t)}?${Sn(c).slice(1)}${h}`;
    }
    const Wc = "webStorageSupport";
    const Gc = class {
      constructor() {
        (this.eventManagers = {}),
          (this.iframes = {}),
          (this.originValidationPromises = {}),
          (this.Gi = Vo),
          (this.Mi = yc),
          (this.ji = mc);
      }
      async Sn(t, e, i, n) {
        var s;
        Gs(null === (s = this.eventManagers[t.zi()]) || void 0 === s ? void 0 : s.manager, "_initialize() not called before _openPopup()");
        return Lc(t, await $c(t, e, i, Hs(), n), Wo());
      }
      async An(t, e, i, n) {
        await this.kn(t);
        return (
          (function (t) {
            Ho().location.href = t;
          })(await $c(t, e, i, Hs(), n)),
          new Promise(() => {})
        );
      }
      Di(t) {
        const e = t.zi();
        if (this.eventManagers[e]) {
          const { manager: t, promise: i } = this.eventManagers[e];
          return t ? Promise.resolve(t) : (Gs(i, "If manager is not set, promise should be"), i);
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
            const e = await Nc(t),
              i = Ho().gapi;
            return (
              $s(i, t, "internal-error"),
              e.open(
                {
                  where: document.body,
                  url: xc(t),
                  messageHandlersFilter: i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
                  attributes: Dc,
                  dontclear: !0
                },
                (e) =>
                  new Promise(async (i, n) => {
                    await e.restyle({ setHideOnLeave: !1 });
                    const s = Ls(t, "network-request-failed"),
                      r = Ho().setTimeout(() => {
                        n(s);
                      }, Rc.get());
                    function o() {
                      Ho().clearTimeout(r), i(e);
                    }
                    e.ping(o).then(o, () => {
                      n(s);
                    });
                  })
              )
            );
          })(t),
          i = new _c(t);
        return (
          e.register(
            "authEvent",
            (e) => {
              $s(null == e ? void 0 : e.authEvent, t, "invalid-auth-event");
              return { status: i.onEvent(e.authEvent) ? "ACK" : "ERROR" };
            },
            gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
          ),
          (this.eventManagers[t.zi()] = { manager: i }),
          (this.iframes[t.zi()] = e),
          i
        );
      }
      Cn(t, e) {
        this.iframes[t.zi()].send(
          Wc,
          { type: Wc },
          (i) => {
            var n;
            const s = null === (n = null == i ? void 0 : i[0]) || void 0 === n ? void 0 : n.webStorageSupport;
            void 0 !== s && e(!!s), Ms(t, "internal-error");
          },
          gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER
        );
      }
      kn(t) {
        const e = t.zi();
        return this.originValidationPromises[e] || (this.originValidationPromises[e] = Cc(t)), this.originValidationPromises[e];
      }
      get Ri() {
        return Fr() || Cr() || Rr();
      }
    };
    var Hc = "@firebase/auth",
      zc = "1.3.0";
    class Jc {
      constructor(t) {
        (this.auth = t), (this.internalListeners = new Map());
      }
      getUid() {
        var t;
        return this.assertAuthConfigured(), (null === (t = this.auth.currentUser) || void 0 === t ? void 0 : t.uid) || null;
      }
      async getToken(t) {
        if ((this.assertAuthConfigured(), await this.auth.ki, !this.auth.currentUser)) return null;
        return { accessToken: await this.auth.currentUser.getIdToken(t) };
      }
      addAuthTokenListener(t) {
        if ((this.assertAuthConfigured(), this.internalListeners.has(t))) return;
        const e = this.auth.onIdTokenChanged((e) => {
          t((null == e ? void 0 : e.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(t, e), this.updateProactiveRefresh();
      }
      removeAuthTokenListener(t) {
        this.assertAuthConfigured();
        const e = this.internalListeners.get(t);
        e && (this.internalListeners.delete(t), e(), this.updateProactiveRefresh());
      }
      assertAuthConfigured() {
        $s(this.auth.ki, "dependent-sdk-initialized-before-auth");
      }
      updateProactiveRefresh() {
        this.internalListeners.size > 0 ? this.auth.hi() : this.auth.ui();
      }
    }
    const qc = gn("authIdTokenMaxAge") || 300;
    let Kc = null;
    function Xc(
      t = (function (t = "[DEFAULT]") {
        const e = hs.get(t);
        if (!e && t === cs && vn()) return ms();
        if (!e) throw ps.create("no-app", { appName: t });
        return e;
      })()
    ) {
      const e = fs(t, "auth");
      if (e.isInitialized()) return e.getImmediate();
      const i = Hr(t, { popupRedirectResolver: Gc, persistence: [ic, Uo, Vo] }),
        n = gn("authTokenSyncURL");
      if (n) {
        const t = ((t) => async (e) => {
          const i = e && (await e.getIdTokenResult()),
            n = i && (new Date().getTime() - Date.parse(i.issuedAtTime)) / 1e3;
          if (n && n > qc) return;
          const s = null == i ? void 0 : i.token;
          Kc !== s && ((Kc = s), await fetch(t, { method: s ? "POST" : "DELETE", headers: s ? { Authorization: `Bearer ${s}` } : {} }));
        })(n);
        !(function (t, e, i) {
          On(t).beforeAuthStateChanged(e, i);
        })(i, t, () => t(i.currentUser)),
          (function (t, e, i, n) {
            On(t).onIdTokenChanged(e, i, n);
          })(i, (e) => t(e));
      }
      const s = pn("auth");
      return s && zr(i, `http://${s}`), i;
    }
    var Yc;
    (Yc = "Browser"),
      ls(
        new Pn(
          "auth",
          (t, { options: e }) => {
            const i = t.getProvider("app").getImmediate(),
              n = t.getProvider("heartbeat"),
              s = t.getProvider("app-check-internal"),
              { apiKey: r, authDomain: o } = i.options;
            $s(r && !r.includes(":"), "invalid-api-key", { appName: i.name });
            const c = {
                apiKey: r,
                authDomain: o,
                clientPlatform: Yc,
                apiHost: "identitytoolkit.googleapis.com",
                tokenApiHost: "securetoken.googleapis.com",
                apiScheme: "https",
                sdkClientVersion: xr(Yc)
              },
              a = new Lr(i, n, s, c);
            return (
              (function (t, e) {
                const i = (null == e ? void 0 : e.persistence) || [],
                  n = (Array.isArray(i) ? i : [i]).map(wr);
                (null == e ? void 0 : e.errorMap) && t.Wi(e.errorMap), t.Ni(n, null == e ? void 0 : e.popupRedirectResolver);
              })(a, e),
              a
            );
          },
          "PUBLIC"
        )
          .setInstantiationMode("EXPLICIT")
          .setInstanceCreatedCallback((t, e, i) => {
            t.getProvider("auth-internal").initialize();
          })
      ),
      ls(
        new Pn("auth-internal", (t) => ((t) => new Jc(t))(Ur(t.getProvider("auth").getImmediate())), "PRIVATE").setInstantiationMode(
          "EXPLICIT"
        )
      ),
      bs(
        Hc,
        zc,
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
        })(Yc)
      ),
      bs(Hc, zc, "esm2017");
    var Zc;
    bs("firebase", "10.4.0", "app"),
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
      })(Zc || (Zc = {}));
    var Qc = function (t, e, i, n) {
      return new (i || (i = Promise))(function (s, r) {
        function o(t) {
          try {
            a(n.next(t));
          } catch (t) {
            r(t);
          }
        }
        function c(t) {
          try {
            a(n.throw(t));
          } catch (t) {
            r(t);
          }
        }
        function a(t) {
          t.done
            ? s(t.value)
            : (function (t) {
                return t instanceof i
                  ? t
                  : new i(function (e) {
                      e(t);
                    });
              })(t.value).then(o, c);
        }
        a((n = n.apply(t, e || [])).next());
      });
    };
    class ta {
      constructor() {
        (this.On = new Map()),
          (this.Pn = new Map()),
          (this.Nn = Di.WITH_ACTIVITY),
          (this.signInCallbacks = []),
          (this.app = ms(u)),
          (this.Rn = []),
          (this.Dn = []),
          (this.Fn = 0),
          (this.xn = 0),
          (this.jn = []),
          (this.updateStatus = (t) =>
            Qc(this, void 0, void 0, function* () {
              var e;
              const i = yield null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.getIdToken();
              if (i)
                try {
                  const e = yield D("user/@me/status", "PATCH", !0, { status: t }, i);
                  console.log(e);
                } catch (t) {
                  console.log(t);
                }
            })),
          (this.Lt = new en()),
          (this.Mn = new rn()),
          this.Ee(),
          this.Ln(),
          (this.auth = Hr(this.app, void 0));
        const t =
          ((e = this.auth),
          (i = (e) => {
            e && (this.Un(), t());
          }),
          On(e).onAuthStateChanged(i, n, s));
        var e, i, n, s;
        console.log(this.auth), console.log("Background Script Loaded");
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
        if ("StartParty" === t) this.Bn(e);
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
      Vn() {
        this.Lt.closeEventWindow();
      }
      $n() {
        this.Vn();
        const t = window.open(
          "https://redirect.teleparty.com/event-logger",
          "Teleparty Logger",
          "width=600,height=530,status=0,scrollbars=0,menubar=0"
        );
        t && this.Lt.setEventWindow(t);
      }
      Ae(t, e, i) {
        var n, s, r, o, c, a, h, u, d, l, f, p, m, b, y, _, T, S, k, C, E, A, O, P;
        I()("RECEIVED MESSAGE" + t.type);
        if (t.target === v) {
          if (t.type == xi.CREATE_SESSION) {
            const r = t;
            I()("Got create Session Message"), console.log(r);
            const o = r.data;
            return (
              0 === o.tabId && (o.tabId = null !== (s = null === (n = e.tab) || void 0 === n ? void 0 : n.id) && void 0 !== s ? s : 0),
              this.Bn(o).then(i).catch(this.Wn(i, e.tab)),
              !0
            );
          }
          if (t.type == Fi.GET_SESSION_DATA) {
            const n = t;
            return this.Gn(n.data, e).then(i).catch(this.Wn(i, e.tab)), !0;
          }
          if (t.type == We.TEARDOWN) {
            const n = t;
            return this.Hn(n, e).then(i), !0;
          }
          if (t.type == We.LOG_EVENT) {
            const n = t.data;
            if ("eventType" in n) this.logOldEventAsync(n);
            else {
              let t;
              this.On.forEach((i) => {
                var n;
                i.chatTabId === (null === (n = e.tab) || void 0 === n ? void 0 : n.id) && (t = i.videoTabId);
              }),
                t
                  ? this.zn(t).then((t) => {
                      this.ge(n, t);
                    })
                  : this.ge(n, e.tab);
            }
            return i(), !0;
          }
          if (t.type == We.LOG_EXPERIMENT) {
            const e = t;
            return this.logExperimentAsync(e.data), i(), !0;
          }
          if (t.type == xi.RE_INJECT) {
            const n = t;
            I()("Got Re Inject Message");
            const s = n.data;
            return (
              0 === s.extensionTabData.id &&
                (s.extensionTabData.id = null !== (o = null === (r = e.tab) || void 0 === r ? void 0 : r.id) && void 0 !== o ? o : 0),
              this.Jn(s).then(i).catch(this.Wn(i, e.tab)),
              !0
            );
          }
          if (t.type == We.STAY_ALIVE) {
            const n = t;
            let s = null !== (a = null === (c = e.tab) || void 0 === c ? void 0 : c.id) && void 0 !== a ? a : 0;
            return (
              n.data.tabId && 0 !== n.data.tabId && (s = n.data.tabId),
              console.log("Got Stay Alive Message", s),
              this.qn(s, n.data.persist),
              i(),
              !0
            );
          }
          if (t.type == We.LOAD_CHAT_WINDOW) {
            const t = null !== (u = null === (h = e.tab) || void 0 === h ? void 0 : h.id) && void 0 !== u ? u : 0,
              n = null !== (l = null === (d = e.tab) || void 0 === d ? void 0 : d.windowId) && void 0 !== l ? l : 0;
            return this.Kn(t, n).then(i), !0;
          }
          if (t.type == We.FULLSCREEN_WINDOW) {
            const t = null !== (p = null === (f = e.tab) || void 0 === f ? void 0 : f.windowId) && void 0 !== p ? p : 0;
            return console.log("Window ID is", t), this.fullScreen(t), !0;
          }
          if (t.type == We.MAX_WINDOW) {
            const t = null !== (b = null === (m = e.tab) || void 0 === m ? void 0 : m.windowId) && void 0 !== b ? b : 0;
            return console.log("Window ID is", t), this.fullScreen(t, !1), !0;
          }
          if (t.type == We.RESET_CHAT_WINDOW) {
            const t = null !== (_ = null === (y = e.tab) || void 0 === y ? void 0 : y.id) && void 0 !== _ ? _ : 0;
            let n;
            return (
              this.On.forEach((e) => {
                (e.chatTabId != t && e.videoTabId != t) || (n = e);
              }),
              n && this.Xn(n).then(i),
              !0
            );
          }
          if (t.type == We.HIDE_CHAT_WINDOW) {
            const t = null !== (S = null === (T = e.tab) || void 0 === T ? void 0 : T.id) && void 0 !== S ? S : 0;
            let n;
            return (
              this.On.forEach((e) => {
                (e.chatTabId != t && e.videoTabId != t) || (n = e);
              }),
              n && this.Yn(n).then(i),
              !0
            );
          }
          if (t.type == We.BLOCK_CSP) return console.log("got block csp"), console.log("NOT FIREFOX"), i(!1), !0;
          if (t.type == xi.GET_INIT_USER_SESTTINGS)
            return (
              this.getUserData()
                .then((t) => {
                  i(t);
                })
                .catch((t) => console.log(t)),
              !0
            );
          if (t.type == xi.GOOGLE_SIGN_IN) return this.Zn().then(i), !0;
          if (t.type == xi.EMAIL_SIGN_IN) {
            const e = t;
            return (
              this.doEmailSignIn(e.data.email, e.data.password)
                .then(i)
                .catch((t) => i({ error: t })),
              !0
            );
          }
          if (t.type == xi.FORGOT_PASSWORD) {
            const e = t;
            return (
              this.forgotPassword(e.data.email)
                .then(i)
                .catch((t) => i({ error: t })),
              !0
            );
          }
          if (t.type == xi.EMAIL_SIGN_UP) {
            const e = t;
            return (
              this.doEmailSignUp(e.data.email, e.data.password, null === (k = e.data.optin) || void 0 === k || k)
                .then(i)
                .catch((t) => i({ error: t })),
              !0
            );
          }
          if (t.type === xi.ON_GOOGLE_SIGN_IN) {
            const e = t;
            return this.onGoogleSignIn(e.data.credential).then(i), !0;
          }
          if (t.type == Ri.SIGN_OUT) return this.Qn().then(i), !0;
          if (t.type == xi.GET_SCHEDULED_EVENTS) return this.ts().then(i), !0;
          if (t.type == xi.GET_RECENT_SCHEDULED_EVENTS) return this.es().then(i), !0;
          if (t.type === Ri.DO_AUTH_SIGN_IN) return this.Zn().then(i), !0;
          if (t.type === Ri.GET_AUTH_TOKEN) {
            const e = !0 === (null === (C = t.data) || void 0 === C ? void 0 : C.refresh);
            return this.ns(e).then(i).catch(this.receiveMessageOnError(i)), !0;
          }
          if (t.type === We.SET_USER_PRESENCE) return !0;
          if (t.type == We.GET_EXPERIMENT_FLAG) {
            const e = t,
              n = this.Mn.checkFlag(e.data.flag_name);
            return n && i({ bucket: n }), !0;
          }
          if (t.type === We.TOGGLE_OPEN_PARTY) {
            const n = t;
            return (
              void 0 === n.data.tabId && (n.data.tabId = null === (E = e.tab) || void 0 === E ? void 0 : E.id),
              this.ss(n.data)
                .then((t) => {
                  console.log(t), i(t);
                })
                .catch(this.receiveMessageOnError(i)),
              !0
            );
          }
          if (t.type === We.SET_ACTIVE_PARTY) {
            const e = t;
            return this.rs(e.data), i(), !0;
          }
          if (t.type === We.GET_ACTIVE_PARTY) {
            const t = { sessionId: this.os };
            return i(t), !0;
          }
          if (t.type === We.ACCEPT_DROPIN) {
            const e = t;
            return this.cs(e.data).then(i).catch(this.receiveMessageOnError(i)), !0;
          }
          if (t.type === We.GET_TAB_ID) return i(null === (A = e.tab) || void 0 === A ? void 0 : A.id), !0;
          if (t.type === We.SET_STATUS_TYPE) return !0;
          if (t.type === We.GET_STATUS_TYPE) return i(this.Nn), !0;
          if (t.type === xi.SET_USER_STATUS) return this.updateStatus(t.data.status).then(i).catch(i), !0;
          if (t.type === xi.SIGN_IN_CREATE) {
            const e = t;
            return (
              console.log("CALLBACK IS", e),
              this.removeSignInCallback(e.data.action),
              this.addSignInFunction(e.data.action, e.data.data),
              !0
            );
          }
          if (t.type === Zc.OPEN_TAB) {
            const { url: e } = t.data;
            chrome.tabs.create({ url: e });
          }
        } else if (t.target == g) {
          let n,
            s = null !== (P = null === (O = e.tab) || void 0 === O ? void 0 : O.id) && void 0 !== P ? P : 0;
          return (
            this.On.forEach((t) => {
              (t.chatTabId != s && t.videoTabId != s) || (n = t);
            }),
            n && (console.log("change tab ID for" + t.target), (s = t.target == g ? n.videoTabId : n.chatTabId)),
            (t.tabId = s),
            w.sendMessageToTabAsync(t, s).then(i).catch(i),
            !0
          );
        }
        return !1;
      }
      qn(t, e) {
        let i;
        e ||
          (i = setTimeout(
            () =>
              Qc(this, void 0, void 0, function* () {
                this.Lt.removeAliveTab(t), yield this.hs(t);
              }),
            6e4
          )),
          this.Lt.addAliveTab(t, i);
      }
      Jn(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = t.extensionTabData;
          yield this.Lt.initContentScriptsAsync(e), yield this.Lt.initBrowseScriptsAsync(e);
        });
      }
      sendApiRequest(t, e, i, n) {
        return Qc(this, void 0, void 0, function* () {
          const s = `${r}/${t}`,
            o = new XMLHttpRequest();
          if ((o.open(e, s), i)) {
            if (!this.auth.currentUser) throw new Error("Not signed in");
            {
              const t = yield this.auth.currentUser.getIdToken();
              o.setRequestHeader("Authorization", `Bearer ${t}`), o.setRequestHeader("Content-Type", "application/json");
            }
          }
          return new Promise((t, e) => {
            o.addEventListener("readystatechange", () => {
              if (o.readyState === XMLHttpRequest.DONE) {
                const i = o.status;
                0 === i || (i >= 200 && i < 400) ? t(o.responseText) : e(o.responseText);
              }
            }),
              o.send(JSON.stringify(n));
          });
        });
      }
      us() {
        var t;
        return Qc(this, void 0, void 0, function* () {
          const e = yield bi.getItemsAsync(["extensionUses"]),
            i = null !== (t = e.extensionUses) && void 0 !== t ? t : 0;
          yield Si.setItemsAsync({ extensionUses: i + 1 });
        });
      }
      updateShareListFirebaseId(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = t.data.permId,
            i = t.data.firebaseUid,
            n = yield bi.getItemsAsync(["shareList"]),
            s = n.findIndex((t) => t.permId === e);
          -1 !== s && i ? ((n[s].firebaseUid = i), yield Si.setItemsAsync({ shareList: n })) : console.log("No user to update");
        });
      }
      updateShareList(t) {
        var e;
        return Qc(this, void 0, void 0, function* () {
          if (t.data.userList.length > 10 || !t.data.socketConnectionId) return;
          const i = yield bi.getItemsAsync(["shareList"]),
            n = null !== (e = i.shareList) && void 0 !== e ? e : [],
            s = n.map((t) => t.permId),
            r = t.data.userList.flatMap((t) => (t.permId ? [t.permId] : [])),
            o = [...new Set([...s, ...r])],
            c = this.Pn.get(t.data.socketConnectionId) || new Set(),
            a = o.filter((t) => !c.has(t));
          if (0 === a.length) return;
          const h = [];
          a.forEach((e) => {
            var i, s;
            const r = n.find((t) => t.permId === e),
              o = t.data.userList.find((t) => t.permId === e);
            r
              ? ((r.partyCount += 1),
                (r.firebaseUid = null !== (i = null == o ? void 0 : o.firebaseUid) && void 0 !== i ? i : r.firebaseUid),
                (r.userSettings = null !== (s = null == o ? void 0 : o.userSettings) && void 0 !== s ? s : r.userSettings),
                h.push(r))
              : h.push({
                  permId: e,
                  partyCount: 1,
                  firebaseUid: null == o ? void 0 : o.firebaseUid,
                  userSettings: null == o ? void 0 : o.userSettings
                }),
              c.add(e);
          });
          const u = [...n, ...h].filter((t, e, i) => i.findIndex((e) => e.permId === t.permId) === e);
          this.Pn.set(t.data.socketConnectionId, c), yield Si.setItemsAsync({ shareList: u });
        });
      }
      ds() {
        return Qc(this, void 0, void 0, function* () {
          const t = JSON.parse(yield this.sendApiRequest("pending-party-requests", "GET", !0, {})).find(
            (t) => !t.sent && "join" === t.type
          );
          t && this.cs({ sessionId: t.sessionId });
        });
      }
      ls() {
        return Qc(this, void 0, void 0, function* () {
          return !0;
        });
      }
      handlePushNotif(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = t.data;
          if (e) {
            const { type: t, tag: i, data: n } = e;
            if ("notification_click" === t)
              console.log("Got Friend Request"),
                "friend" === i && window.open(l, "Teleparty Friends", "width=300,height=530,status=0,scrollbars=0,menubar=0");
            else if ("notification_received" === t)
              try {
                const t = yield this.Lt.getActiveTabId();
                if ((w.sendMessageToTabAsync(new Ke(v, g, We.ON_NOTIF), t), "dropin_request" === n.type)) {
                  (yield this.ls()) && this.ds();
                }
              } catch (t) {
                console.log(t), console.log("No active tab?");
              }
          }
        });
      }
      fs(t) {
        if ((console.log(t), this.jn.includes(t.tabId) || this.jn.push(t.tabId), !t.responseHeaders)) return;
        let e = !1;
        for (let i = 0; i < t.responseHeaders.length; i++)
          "content-security-policy" === t.responseHeaders[i].name.toLowerCase() && ((e = !0), (t.responseHeaders[i].value = ""));
        return (
          e || t.responseHeaders.push({ name: "Content-Security-Policy", value: "frame-src *.teleparty.com" }),
          { responseHeaders: t.responseHeaders }
        );
      }
      ps() {
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
      vs() {
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
      gs(t) {
        const e = ci.getSocketForTabId(t);
        return {
          id: null == e ? void 0 : e.getId(),
          transport: null == e ? void 0 : e.getTransport(),
          type: null == e ? void 0 : e.getType(),
          start_time_ms: null == e ? void 0 : e.getSocketStartTime()
        };
      }
      bs(t, e) {
        var i, n, s, r, o, c, a;
        return Qc(this, void 0, void 0, function* () {
          const h = Object.assign({}, t),
            u = ci.getSocketForTabId(null !== (i = e.id) && void 0 !== i ? i : 0);
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
            const i = this.gs(null !== (n = e.id) && void 0 !== n ? n : 0);
            i.id && (h.socket_session = i);
            const d = null !== (s = h.video_session) && void 0 !== s ? s : this.Lt.getVideoSessionData();
            try {
              const t = yield this.ys(null !== (r = e.id) && void 0 !== r ? r : 0),
                i = t.videoState;
              h.page &&
                ((h.page.is_adblock_enabled = t.is_adblock_enabled),
                (h.page.is_chat_visible = t.is_chat_visible),
                (h.page.is_player_fullscreen = t.is_player_fullscreen)),
                (d.status = i),
                (d.video_ts_ms = t.video_ts_ms),
                (d.party_ts_ms = t.party_ts_ms),
                (t.content.service = null === (o = t.content.service) || void 0 === o ? void 0 : o.toLowerCase()),
                (t.content.episode_name = null === (c = t.content.episode_name) || void 0 === c ? void 0 : c.toLowerCase()),
                (t.content.name = null === (a = t.content.name) || void 0 === a ? void 0 : a.toLowerCase()),
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
      _s(t) {
        var e;
        const i = null === (e = window.navigator.userAgentData) || void 0 === e ? void 0 : e.platform;
        return {
          name: "chrome",
          version: this.ps(),
          type: "browser",
          manufacturer: i,
          model: "",
          os_name: this.vs(),
          os_version: "",
          install_id: t
        };
      }
      Is(t, e, i, n) {
        const s = this._s(n),
          r = this.Lt.getAppSession(),
          o = Date.now(),
          c = { name: "chrome_ext", version: chrome.runtime.getManifest().version },
          a = Object.assign({}, e);
        return (
          a.app || (a.app = c),
          a.app_session || (a.app_session = r),
          (a.device = s),
          (a.client_timestamp_ms = o),
          null == a.page && (a.page = t),
          (a.user = i),
          a
        );
      }
      zn(t) {
        return Qc(this, void 0, void 0, function* () {
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
      Ts(t, e) {
        return Qc(this, void 0, void 0, function* () {
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
      Ss(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = t.chatTabId;
          chrome.tabs.move(e, { index: -1, windowId: t.videoWindow.id }, (e) =>
            Qc(this, void 0, void 0, function* () {
              var i;
              yield this.Xn(t), chrome.tabs.update(null !== (i = e.id) && void 0 !== i ? i : 0, { active: !0 });
            })
          );
        });
      }
      we(t) {
        return Qc(this, void 0, void 0, function* () {
          let e;
          this.On.forEach((i) => {
            i.chatTabId === (null == t ? void 0 : t.id) && (e = i);
          }),
            e && t.url !== d && this.Ss(e);
        });
      }
      logEventForTabId(t, e) {
        return Qc(this, void 0, void 0, function* () {
          try {
            const i = yield this.zn(e);
            return this.ge(t, i);
          } catch (e) {
            return this.ge(t);
          }
        });
      }
      ge(t, e) {
        var i, n, s, r, o;
        return Qc(this, void 0, void 0, function* () {
          if (t.name.includes("error")) {
            if (((this.Rn = this.Rn.filter((t) => t > Date.now() - 6e4)), this.Rn.length >= 15))
              return void console.log("Error rate limited");
            this.Rn.push(Date.now());
          }
          if (t.name.includes("video_error")) {
            if (((this.Dn = this.Dn.filter((t) => t > Date.now() - 6e4)), this.Dn.length >= 15))
              return void console.log("Error rate limited");
            this.Dn.push(Date.now());
          }
          let c = Object.assign({}, t);
          try {
            const t = yield Ei.getValidatedChromeStorageDataAsync(),
              h = yield this.Te(),
              u = ["video_heartbeat"];
            this.Lt.incrementAppSessionEventNumber();
            const d = {
                name: null !== (i = null == e ? void 0 : e.title) && void 0 !== i ? i : "",
                url: null !== (n = null == e ? void 0 : e.url) && void 0 !== n ? n : ""
              },
              l = null !== this.auth.currentUser,
              f = !this.Fn || Date.now() - this.Fn > ta.SUBSCRIPTION_CACHE_TIME ? yield this.ks() : this.Cs;
            let p, v;
            void 0 === f ||
              a.includes(f.subscriptionStatus) ||
              ("trialing" === f.subscriptionStatus && (v = !0),
              (p = "monthly" === f.subscriptionType ? "premium_monthly" : "premium_annual"));
            const g = {
              id: null !== (r = null === (s = this.auth.currentUser) || void 0 === s ? void 0 : s.uid) && void 0 !== r ? r : h,
              name: t.userNickname,
              signed_in: l,
              plan: p,
              on_trial: v
            };
            (c = this.Is(d, c, g, h)),
              c.component && (c.component.type = null === (o = c.component.type) || void 0 === o ? void 0 : o.toLowerCase()),
              "video_start" === c.name && this.Lt.resetVideoSession(),
              "video_pause" === c.name && this.Lt.pauseHeartBeat(),
              "video_resume" === c.name && this.Lt.resumeHeartBeat(),
              u.includes(c.name) && this.Lt.heartBeatProc(),
              e && e.id && (c = yield this.bs(c, e));
          } catch (t) {
            console.log("log event error : " + t);
          }
          this.Es(c);
        });
      }
      Es(t) {
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
        return Qc(this, void 0, void 0, function* () {
          try {
            const e = { userId: yield this.Te(), eventType: t.eventType, sessionId: t.sessionId };
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
      Hn(t, e) {
        var i;
        return Qc(this, void 0, void 0, function* () {
          if (e.tab && e.tab.id) {
            const n = e.tab.id;
            (t.sender = v), (t.target = g), yield w.sendMessageToTabAsync(t, n), yield this.hs(n);
            const s = new Ui(v, "Popup");
            w.i(s);
            const r = this.On.get(n);
            r &&
              ((null === (i = null == r ? void 0 : r.chatWindow) || void 0 === i ? void 0 : i.id) && chrome.windows.remove(r.chatWindow.id),
              this.On.delete(n));
          }
        });
      }
      As(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = yield Ei.getValidatedChromeStorageDataAsync(),
            i = (yield this.Os(t)).getCurrentSessionData();
          if (i) {
            const n = { sessionCallbackData: i, storageData: e, isCreate: !1, showReviewMessage: this.Ps(e) },
              s = new Mi(v, g, n);
            yield this.sendMessageToTabAsync(t, s);
            const r = { name: "video_fix", action: { description: "video session was restored after next video error" } };
            this.logEventForTabId(r, t);
          }
        });
      }
      Ns(t) {
        if (t.tab && t.tab.id && t.url) {
          const e = t.tab.id;
          if (this.Lt.checkAliveTab(e)) return this.Lt.removeAliveTab(e), void this.As(e);
        }
      }
      Gn(t, e) {
        return Qc(this, void 0, void 0, function* () {
          if (!(e.tab && e.tab.id && e.url)) throw new Error("Invalid Request");
          {
            const i = e.url,
              n = e.tab.id,
              s = ci.getSocketForTabId(n),
              r = yield this.Rs(n);
            if (this.Lt.checkAliveTab(n) && (this.Lt.removeAliveTab(n), s)) {
              const t = s.getCurrentSessionData();
              if (
                r &&
                t &&
                (null == r ? void 0 : r.sessionId) === (null == t ? void 0 : t.sessionId) &&
                t.serviceDomain &&
                i.includes(t.serviceDomain)
              )
                return void this.As(n);
            }
            const o = new Ct(new URL(i), n);
            let c, a, h;
            if (
              (r &&
                ((c = r.sessionId),
                (a = r.videoType),
                (h = r.serviceDomain),
                yield this.Ds(n),
                console.log("get session will delete "),
                yield this.hs(n)),
              c)
            ) {
              t.videoId && (o.videoId = t.videoId);
              const e = { extensionTab: o, sessionId: c, videoType: a, serviceDomain: h };
              return yield this.Fs(e);
            }
            const u = this.Mn.checkFlag("aa_test_experiment_1");
            console.log(u);
          }
        });
      }
      js(t) {
        var e, i;
        return {
          userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
          userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
          nameColor: t.nameColor,
          badge: t.badge,
          reactions: t.reactions
        };
      }
      Fs(t) {
        var e, i;
        return Qc(this, void 0, void 0, function* () {
          const n = t.extensionTab,
            s = n.streamingService,
            r = yield this.Os(n.id);
          r.clearSessionData();
          const o = yield this.ys(n.id),
            c = yield null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.getIdToken(),
            a = yield Ei.getValidatedChromeStorageDataAsync(),
            h = yield r.getUserIdAsync(),
            u = a.userId ? a.userId : h;
          a.userId || (yield this.Ms(h), (a.userId = h));
          const d = this.js(a),
            l = null !== (i = null == s ? void 0 : s.serverName) && void 0 !== i ? i : "",
            f = { videoId: n.videoId, sessionId: t.sessionId, videoService: l, permId: u, userSettings: d },
            p = yield new Promise((t) => {
              r.sendMessage($e.JOIN_SESSION, f, (e) => {
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
            g = yield this.Ls(p, t.extensionTab.id, a, l);
          r.loadSessionData(v, d), this.rs({ sessionId: p.sessionId, created: !1 });
          return (
            (yield bi.getItemsAsync(["lastPartyId"])) !== p.sessionId &&
              D("logging", "POST", !0, { show: o.videoTitle, streamingService: l, eventType: O.PARTY_JOIN }, c).catch((t) =>
                console.error(t)
              ),
            yield Si.setItemsAsync({ lastPartyId: p.sessionId }),
            g
          );
        });
      }
      Bn(t) {
        var e, i;
        return Qc(this, void 0, void 0, function* () {
          const n = t.streamingService,
            s = yield this.ys(t.tabId),
            r = yield this.Os(t.tabId),
            o = yield null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.getIdToken();
          r.clearSessionData();
          const c = yield Ei.getValidatedChromeStorageDataAsync(),
            a = yield r.getUserIdAsync(),
            h = c.userId ? c.userId : a;
          c.userId || (yield this.Ms(a), (c.userId = a));
          const u = this.js(c),
            d = null !== (i = null == n ? void 0 : n.serverName) && void 0 !== i ? i : "",
            l = {
              controlLock: t.createSettings.controlLock,
              videoId: s.videoId,
              videoDuration: s.videoDuration,
              videoType: s.videoType,
              serviceDomain: s.serviceDomain,
              videoService: d,
              syncFromEnd: null == n ? void 0 : n.syncFromEnd,
              permId: h,
              userSettings: u
            },
            f = yield new Promise((t) => {
              r.sendMessage($e.CREATE_SESSION, l, (e) => {
                t(e);
              });
            });
          (f.socketConnectionId = a), (f.userId = a);
          const p = Object.assign(Object.assign({}, f), {
              permId: h,
              videoService: d,
              messages: [],
              created_at: Date.now(),
              videoType: s.videoType,
              serviceDomain: s.serviceDomain,
              userSettings: u,
              created: !1
            }),
            v = yield this.Us(f, t.tabId, c, d, void 0, t.isNative);
          return (
            r.loadSessionData(p, u),
            D("logging", "POST", !0, { show: s.videoTitle, streamingService: d, eventType: O.PARTY_START }, o).catch((t) =>
              console.error(t)
            ),
            v
          );
        });
      }
      Os(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = ci.getSocketForTabId(t);
          if (e) return e;
          {
            const e = yield this.Bs(t);
            return ci.setSocketForTabId(t, e), e;
          }
        });
      }
      getUserData() {
        var t, e, i, n, s, r;
        return Qc(this, void 0, void 0, function* () {
          const o = yield this.Vs(),
            c = null !== this.auth.currentUser,
            h = yield this.ks();
          return {
            userSettings: o,
            presence_data: { status: 0 },
            signedIn: c,
            currentUser: {
              photoURL:
                null !== (e = null === (t = this.auth.currentUser) || void 0 === t ? void 0 : t.photoURL) && void 0 !== e ? e : void 0,
              displayName:
                null !== (n = null === (i = this.auth.currentUser) || void 0 === i ? void 0 : i.displayName) && void 0 !== n ? n : void 0,
              email: null !== (r = null === (s = this.auth.currentUser) || void 0 === s ? void 0 : s.email) && void 0 !== r ? r : void 0
            },
            has_premium: void 0 !== h && !a.includes(h.subscriptionStatus)
          };
        });
      }
      Ln() {
        return Qc(this, void 0, void 0, function* () {
          const t = yield bi.getItemsAsync([Ni.STATUS_TYPE]);
          t[Ni.STATUS_TYPE] === Di.NO_ACTIVITY
            ? (this.Nn = Di.NO_ACTIVITY)
            : t[Ni.STATUS_TYPE] === Di.OFFLINE
            ? (this.Nn = Di.OFFLINE)
            : (this.Nn = Di.WITH_ACTIVITY);
        });
      }
      cs(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = ci.getTabForSessionId(t.sessionId);
          void 0 !== e &&
            chrome.tabs.update(e, { active: !0, highlighted: !0 }, (i) =>
              Qc(this, void 0, void 0, function* () {
                const n = null == i ? void 0 : i.url;
                if (n) {
                  const i = new Ct(new URL(n), e),
                    s = { streamingService: i.streamingService, tabId: i.id, createSettings: { controlLock: !1 }, source: "dropin" };
                  console.log("Creating dropin session"), yield this.Bn(s), this.removePartyInvite(t.sessionId);
                } else console.error("Couldn't get url, should message pass here");
              })
            );
        });
      }
      rs(t) {
        this.os = t.sessionId;
      }
      updateBadgeCount() {
        return Qc(this, void 0, void 0, function* () {
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
        return Qc(this, void 0, void 0, function* () {
          return this.ss({ open: !0, tabId: t });
        });
      }
      ss(t) {
        return Qc(this, void 0, void 0, function* () {
          if (!t.tabId) throw new Error("Invalid Tab Id");
          if ((yield Si.setItemsAsync({ [Ni.DROPIN_KEY]: t.open }), t.open)) {
            const e = yield this.getSocketForTabAsync(t.tabId);
            if (e.sessionId) return (e.dropInToggled = !0), !0;
            const i = yield Ei.getValidatedChromeStorageDataAsync(),
              n = yield e.getUserIdAsync(),
              s = { permId: i.userId ? i.userId : n, token: yield this.$s() },
              r = yield new Promise((t) => {
                e.sendMessage($e.CREATE_TEMP_SESSION, s, (e) => {
                  t(e);
                });
              });
            if (!r || r.errorMessage) throw new Error(r ? r.errorMessage : S);
            {
              const t = r.sessionId;
              (e.tempSessionId = t), (this.wt = t), (e.dropInToggled = !0);
            }
            console.log("Got temp session data: " + this.wt);
          } else {
            const e = ci.getSocketForTabId(t.tabId);
            e &&
              ((e.dropInToggled = !1),
              void 0 === (null == e ? void 0 : e.sessionId) ? ci.removeSocketForTabId(t.tabId) : (e.tempSessionId = void 0));
          }
          return t.open;
        });
      }
      hs(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = ci.getSocketForTabId(t);
          e && (e.teardown(), ci.removeSocketForTabId(t));
        });
      }
      Bs(t) {
        var e;
        return Qc(this, void 0, void 0, function* () {
          const i = new vi(t),
            n = yield null === (e = Xc().currentUser) || void 0 === e ? void 0 : e.getIdToken();
          return yield i.createSocketForTab(n);
        });
      }
      ys(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = new Ke(v, g, We.GET_VIDEO_DATA),
            i = yield w.sendMessageToTabAsync(e, t);
          if (i) {
            if (i.error) throw new Error(i.error);
            return i;
          }
          throw new Error("Failed to connect to Script. Please refresh the page and try again");
        });
      }
      Rs(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = Pi.getRedirectDataForTabAsync(t);
          return Pi.deleteRedirectDataForTabAsync(t), e;
        });
      }
      Ds(t) {
        return Qc(this, void 0, void 0, function* () {
          return Pi.deleteRedirectDataForTabAsync(t);
        });
      }
      Te() {
        return Qc(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            let i = 0;
            const n = () =>
              Qc(this, void 0, void 0, function* () {
                i++;
                const s = yield Ei.getValidatedChromeStorageDataAsync();
                s.userId ? t(s.userId) : i < 5 ? setTimeout(n, 5e3) : e("Could not get permId in time");
              });
            n();
          });
        });
      }
      Ms(t) {
        return Qc(this, void 0, void 0, function* () {
          I()("No perm id found, using socket id"), yield Si.setItemsAsync({ userId: t });
        });
      }
      $s() {
        return Qc(this, void 0, void 0, function* () {
          return (yield this.ns(!1)).token;
        });
      }
      ns(t) {
        return Qc(this, void 0, void 0, function* () {
          if (this.auth.currentUser) {
            return { token: yield this.auth.currentUser.getIdToken(t) };
          }
          throw new Error("Not Signed In");
        });
      }
      Qn() {
        return Qc(this, void 0, void 0, function* () {
          yield this.auth.signOut(), this.ge({ name: "signout" });
        });
      }
      Un() {
        return Qc(this, void 0, void 0, function* () {
          this.triggerSignIn();
        });
      }
      Ws() {
        return Qc(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            chrome.windows.getAll((i) => {
              chrome.runtime.lastError && e(chrome.runtime.lastError), t(i.filter((t) => "popup" === t.type));
            });
          });
        });
      }
      checkPopupWindow() {
        return Qc(this, void 0, void 0, function* () {
          try {
            const t = yield this.Ws();
            yield R(2e3)();
            const e = (yield this.Ws()).filter((e) => null == t.find((t) => t.id === e.id));
            if (e.length > 0) {
              const t = e[0];
              void 0 !== t.tabs || t.focused || (yield this.Gs(t.id, { focused: !0 }));
            }
          } catch (t) {}
        });
      }
      Hs(t) {
        var e;
        return Qc(this, void 0, void 0, function* () {
          this.ge({ name: "signup" });
          const i = yield null === (e = this.auth.currentUser) || void 0 === e ? void 0 : e.getIdToken();
          return D("logging", "POST", !0, { optin: t, eventType: O.REGISTER }, i);
        });
      }
      doEmailSignUp(t, e, i) {
        return Qc(this, void 0, void 0, function* () {
          if (this.auth.currentUser) return !1;
          (yield Promise.all([Co(this.auth, t, e)])) && (yield this.Un(), this.Hs(i).catch((t) => console.error(t)));
        });
      }
      doEmailSignIn(t, e) {
        return Qc(this, void 0, void 0, function* () {
          if (this.auth.currentUser) return !1;
          console.log("Trying to do email sign in");
          if ((yield Ao(this.auth, t)).includes(uo.PROVIDER_ID)) throw { code: "auth/google-account" };
          (yield Promise.all([Eo(this.auth, t, e)])) && (this.ge({ name: "signin" }), yield this.Un());
        });
      }
      forgotPassword(t) {
        return Qc(this, void 0, void 0, function* () {
          if (this.auth.currentUser) return !1;
          console.log("Trying to do email sign in");
          (yield Promise.all([ko(this.auth, t)])) && this.ge({ name: "forgot_password" });
        });
      }
      onGoogleSignIn(t) {
        return Qc(this, void 0, void 0, function* () {
          if (this.auth.currentUser) return !1;
          try {
            const e = io.fromJSON(t);
            if (e) {
              (yield Io(this.auth, e)) && (this.ge({ name: "signin" }), yield this.Un());
            }
          } catch (t) {
            console.log(t);
          }
          return !0;
        });
      }
      Zn() {
        var t;
        return Qc(this, void 0, void 0, function* () {
          const e = new uo();
          if (this.auth.currentUser) return !1;
          try {
            const i = yield Promise.all([fc(this.auth, e, Gc), this.checkPopupWindow()]);
            if (i) {
              yield this.Un();
              const e = xo(i[0]),
                n = null === (t = i[0].user) || void 0 === t ? void 0 : t.email;
              (null == e ? void 0 : e.isNewUser) && n ? this.Hs(!0).catch((t) => console.error(t)) : this.ge({ name: "signin" });
            }
          } catch (t) {
            console.log(t);
          }
          return !0;
        });
      }
      logExperimentAsync(t) {
        return Qc(this, void 0, void 0, function* () {
          try {
            const e = { permId: yield this.Te(), event: t.eventType, name: t.experimentName, version: t.experimentVersion };
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
      Ps(t) {
        return void 0 !== t.extensionUses && (1 === t.extensionUses || t.extensionUses % 5 == 0) && !t.reviewClicked;
      }
      removePartyInvite(t) {
        return Qc(this, void 0, void 0, function* () {
          yield this.sendApiRequest("remove-party-invite", "POST", !0, { sessionId: t });
        });
      }
      Us(t, e, i, n, s, r) {
        return Qc(this, void 0, void 0, function* () {
          if (!t || t.errorMessage) throw (this.Ds(e), new Error(t ? t.errorMessage : S));
          {
            const o = { sessionCallbackData: t, storageData: i, isCreate: !0, showReviewMessage: this.Ps(i) },
              c = new Mi(v, g, o);
            yield this.sendMessageToTabAsync(e, c);
            const a = { eventType: "create-session-chrome" + (s ? "-pc" : ""), sessionId: t.sessionId };
            this.logOldEventAsync(a);
            const h = { name: "party_start", action: { description: n, reason: "session was created", source: r ? "native" : "popup" } };
            return this.logEventForTabId(h, e), this.us(), { sessionId: t.sessionId, showReviewMessage: this.Ps(i) };
          }
        });
      }
      Ls(t, e, i, n) {
        return Qc(this, void 0, void 0, function* () {
          if (!t || t.errorMessage)
            throw (
              (this.Ds(e),
              new Error(
                t ? t.errorMessage : "An error occured while trying to join the session. Please navigate to the party url and try again."
              ))
            );
          {
            const s = { sessionCallbackData: t, storageData: i, isCreate: !1, showReviewMessage: this.Ps(i) },
              r = new Mi(v, g, s);
            yield this.sendMessageToTabAsync(e, r);
            const o = { eventType: "join-session-chrome", sessionId: t.sessionId };
            this.logOldEventAsync(o);
            const c = { name: "party_join", action: { description: n } };
            return this.logEventForTabId(c, e), this.us(), { sessionId: t.sessionId, showReviewMessage: this.Ps(i) };
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
        return Qc(this, void 0, void 0, function* () {
          const e = ci.getSocketForTabId(t);
          if (e) return e;
          {
            const e = yield this.createSocketForTabAsync(t);
            return ci.setSocketForTabId(t, e), e;
          }
        });
      }
      createSocketForTabAsync(t) {
        var e;
        return Qc(this, void 0, void 0, function* () {
          const i = new vi(t),
            n = yield null === (e = Xc().currentUser) || void 0 === e ? void 0 : e.getIdToken();
          return i.createSocketForTab(n);
        });
      }
      Gs(t, e) {
        return Qc(this, void 0, void 0, function* () {
          return new Promise((i, n) => {
            chrome.windows.update(t, e, (t) =>
              Qc(this, void 0, void 0, function* () {
                chrome.runtime.lastError ? n(chrome.runtime.lastError) : (yield R(150)(), i(t));
              })
            );
          });
        });
      }
      zs(t) {
        return Qc(this, void 0, void 0, function* () {
          return new Promise((e, i) => {
            chrome.windows.create(t, (t) => {
              chrome.runtime.lastError || void 0 === t ? i(chrome.runtime.lastError) : e(t);
            });
          });
        });
      }
      Js(t) {
        return new Promise((e) => {
          chrome.windows.get(t, (t) => {
            chrome.runtime.lastError || void 0 === t ? e(!1) : e(!0);
          });
        });
      }
      qs(t) {
        return new Promise((e, i) => {
          chrome.tabs.query({ windowId: t }, (t) => {
            var n;
            chrome.runtime.lastError ? i(chrome.runtime.lastError) : e(null !== (n = t[0].id) && void 0 !== n ? n : 0);
          });
        });
      }
      Ks(t) {
        return new Promise((e) => {
          chrome.tabs.update(t, { active: !0 }, () => {
            e();
          });
        });
      }
      Yn(t) {
        return Qc(this, void 0, void 0, function* () {
          const e = t.videoWindow;
          yield this.Ks(t.videoTabId);
          let i = t.chatWindow;
          (yield this.Js(i.id)) && (i = yield this.Gs(i.id, { state: "minimized", focused: !1 })),
            yield this.Gs(e.id, { state: "maximized" }),
            yield this.Gs(e.id, { focused: !0, width: window.screen.width, height: window.screen.height });
        });
      }
      Xn(t, e = 0) {
        var i;
        return Qc(this, void 0, void 0, function* () {
          let n = t.videoWindow;
          yield this.Ks(t.videoTabId),
            (n = yield this.Gs(n.id, { state: "maximized" })),
            (n = yield this.Gs(n.id, {
              state: "normal",
              width: window.screen.width - 358,
              height: window.screen.availHeight,
              left: 0,
              top: 0,
              focused: !0
            }));
          let s = t.chatWindow,
            r = !1;
          (yield this.Js(s.id)) || ((s = yield this.zs({ url: d, type: "popup" })), (r = !0));
          const o = yield this.qs(s.id);
          if (!r) {
            const t = yield this.zn(o);
            void 0 !== t.url && t.url !== d && (yield this.Ts(o, d));
          }
          s = yield this.Gs(s.id, {
            state: "normal",
            width: k,
            height: window.screen.availHeight,
            left: window.screen.width - k,
            top: 0,
            focused: !0
          });
          const c = { chatWindow: s, videoWindow: n, chatTabId: o, videoTabId: t.videoTabId };
          this.On.set(t.videoTabId, c);
          const a = ci.getSocketForTabId(t.videoTabId);
          if (
            (a && ci.setSocketForTabId(o, a),
            console.log(n.width),
            e < 2 && window.screen.width - (null !== (i = n.width) && void 0 !== i ? i : 0) < 50)
          )
            return console.log("Retry Reset"), this.Xn(t, e + 1);
        });
      }
      fullScreen(t, e = !0) {
        return Qc(this, void 0, void 0, function* () {
          let i = "fullscreen";
          e || (i = "maximized"), yield this.Gs(t, { state: i });
        });
      }
      Kn(t, e) {
        var i;
        return Qc(this, void 0, void 0, function* () {
          const n = yield this.Gs(e, { state: "maximized" });
          yield this.Gs(n.id, { state: "normal", width: window.screen.width - 358, height: window.screen.availHeight });
          const s = yield this.zs({ url: d, type: "popup", state: "maximized" });
          if (
            (yield this.Gs(s.id, { state: "normal", width: k, height: window.screen.availHeight, left: window.screen.width - k, top: 0 }),
            !s || !n)
          )
            throw new Error("Failed to Create Party View");
          {
            const e = s.tabs && null !== (i = s.tabs[0].id) && void 0 !== i ? i : 0,
              r = { chatWindow: s, videoWindow: n, chatTabId: e, videoTabId: t };
            this.On.set(t, r);
            const o = ci.getSocketForTabId(r.videoTabId);
            o && ci.setSocketForTabId(e, o), yield this.Xn(r);
          }
        });
      }
      waitForPermId() {
        return Qc(this, void 0, void 0, function* () {
          return new Promise((t, e) => {
            let i = 0;
            const n = () =>
              Qc(this, void 0, void 0, function* () {
                i++;
                const s = yield Ei.getValidatedChromeStorageDataAsync();
                s.userId ? t(s.userId) : i < 5 ? setTimeout(n, 5e3) : e("Could not get permId in time");
              });
            n();
          });
        });
      }
      Wn(t, e) {
        return (i) => {
          this.Xs(i.message, e), t({ error: i.message });
        };
      }
      Xs(t, e, i) {
        const n = { name: "error", action: { reason: t, description: i } };
        this.ge(n, e), I()("An error occured: " + i + t);
      }
      Ee() {
        chrome.runtime.onSuspend.addListener(() => {
          ci.teardown();
        }),
          chrome.tabs.onRemoved.addListener(this.Ys.bind(this)),
          y.addMessageListener({ onMessage: this.Ae.bind(this) }),
          this.Zs(),
          new on();
      }
      Qs(t) {
        console.log("blockCSP for tab " + t);
        const e = { urls: ["*://*/*"], tabId: t, types: ["main_frame", "sub_frame"] };
        chrome.webRequest.onHeadersReceived.addListener(this.fs.bind(this), e, ["blocking", "responseHeaders"]);
      }
      Ys(t) {
        var e;
        return Qc(this, void 0, void 0, function* () {
          let i = !1;
          try {
            yield this.zn(t);
            i = !0;
          } catch (t) {}
          const n = ci.getSocketForTabId(t);
          if (n && (!i || !this.Lt.checkAliveTab(t))) {
            const i = { name: "tab_close", action: { description: "tab was closed with socket", source: "tabID: " + t } };
            this.logEventForTabId(i, t),
              I()("Detected Tab Close: Disconnecting socket for tab: " + t),
              n.teardown(),
              ci.removeSocketForTabId(t);
            const s = this.On.get(t);
            s &&
              ((null === (e = null == s ? void 0 : s.chatWindow) || void 0 === e ? void 0 : e.id) && chrome.windows.remove(s.chatWindow.id),
              this.On.delete(t));
          }
        });
      }
      Zs() {
        chrome.runtime.onConnect.addListener((t) => {
          var e, i;
          const n = null === (i = null === (e = t.sender) || void 0 === e ? void 0 : e.tab) || void 0 === i ? void 0 : i.id;
          if (n) {
            I()("Connected to Content Script with Tab ID: " + n);
            try {
              t.postMessage("pong"),
                t.onDisconnect.addListener(() => {
                  console.log("Detected port disconnect: " + n), this.Ys(n);
                });
            } catch (t) {}
          }
        });
      }
      Yt(t) {
        try {
          Si.setItemsAsync(t);
        } catch (t) {
          this.logError("Update chrome Storage Data Failed " + t);
        }
      }
      sendMessageToTabAsync(t, e, i) {
        return Qc(this, void 0, void 0, function* () {
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
        I()("An error occured: " + t);
      }
      ts() {
        return new Promise((t, e) => {
          fetch(`${c}/events`, { credentials: "include" })
            .then((i) =>
              Qc(this, void 0, void 0, function* () {
                i.ok ? t(yield i.json()) : e(yield i.json());
              })
            )
            .catch((t) => {
              e(t);
            });
        });
      }
      es() {
        return new Promise((t, e) => {
          fetch(`${c}/recent_events`, { credentials: "include" })
            .then((i) =>
              Qc(this, void 0, void 0, function* () {
                i.ok ? t(yield i.json()) : e(yield i.json());
              })
            )
            .catch((t) => {
              e(t);
            });
        });
      }
      ks() {
        var t;
        return Qc(this, void 0, void 0, function* () {
          const e = yield null === (t = this.auth.currentUser) || void 0 === t ? void 0 : t.getIdToken();
          if (e)
            try {
              const t = JSON.parse(yield D("subscription", "GET", !0, {}, e));
              return (this.Cs = t), (this.Fn = Date.now()), (this.xn = 0), t;
            } catch (t) {
              this.xn > 0 && (this.Fn = Date.now()), (this.xn += 1);
            }
        });
      }
      Vs() {
        return Qc(this, void 0, void 0, function* () {
          const t = yield Ei.getValidatedChromeStorageDataAsync();
          return this.getUserSettingsForStorageData(t);
        });
      }
    }
    ta.SUBSCRIPTION_CACHE_TIME = 144e5;
    const ea = new ta(),
      ia = ea;
    window.teleparty = ea;
  })();
})();
