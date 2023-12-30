/*! For license information please see Grammarly-check.js.LICENSE.txt */
var e = {
    71654: (e, t, n) => {
      var i = n(33356),
        r = "chrome-extension://__MSG_@@extension_id__/",
        s = "moz-extension://__MSG_@@extension_id__/",
        o = "safari-web-extension://__MSG_@@extension_id__/",
        a = self.GR_RESOURCE_ROOT || r,
        c = self.GR_RESOURCE_ROOT || s,
        u = self.GR_RESOURCE_ROOT || o;
      e.exports = {
        __css: i.toString().replace(new RegExp(r, "g"), a).replace(new RegExp(s, "g"), c).replace(new RegExp(o, "g"), u),
        ...i.locals
      };
    },
    33356: (e, t, n) => {
      var i = n(54933),
        r = n(93476)(i);
      r.push([
        e.id,
        "._cWTM9-animatedUnderline{visibility:hidden;position:fixed;}._cWTM9-animatedUnderline:after{content:'';position:absolute;visibility:visible;height:3px;bottom:0;border-radius:10px;background:#488cc8;animation:_Axb1F-showUnderline 1.3s ease forwards}._cWTM9-animatedUnderline._qSuCO-completeAnimation:after{animation:_Axb1F-showUnderline .2s ease forwards}@keyframes _Axb1F-showUnderline{0%{width:0%}100%{width:100%}}._hoLGP-checkAnimatedUnderline{animation:_Axb1F-showUnderline 2s ease forwards;}._hoLGP-checkAnimatedUnderline._qSuCO-completeAnimation{animation:_Axb1F-showUnderline .2s ease forwards}",
        ""
      ]),
        (r.locals = {
          animatedUnderline: "_cWTM9-animatedUnderline",
          showUnderline: "_Axb1F-showUnderline",
          completeAnimation: "_qSuCO-completeAnimation",
          checkAnimatedUnderline: "_hoLGP-checkAnimatedUnderline"
        }),
        (e.exports = r);
    },
    93476: (e) => {
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = "",
                i = void 0 !== t[5];
              return (
                t[4] && (n += "@supports (".concat(t[4], ") {")),
                t[2] && (n += "@media ".concat(t[2], " {")),
                i && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                (n += e(t)),
                i && (n += "}"),
                t[2] && (n += "}"),
                t[4] && (n += "}"),
                n
              );
            }).join("");
          }),
          (t.i = function (e, n, i, r, s) {
            "string" == typeof e && (e = [[null, e, void 0]]);
            var o = {};
            if (i)
              for (var a = 0; a < this.length; a++) {
                var c = this[a][0];
                null != c && (o[c] = !0);
              }
            for (var u = 0; u < e.length; u++) {
              var l = [].concat(e[u]);
              (i && o[l[0]]) ||
                (void 0 !== s &&
                  (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                  (l[5] = s)),
                n && (l[2] ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")), (l[2] = n)) : (l[2] = n)),
                r && (l[4] ? ((l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}")), (l[4] = r)) : (l[4] = "".concat(r))),
                t.push(l));
            }
          }),
          t
        );
      };
    },
    54933: (e) => {
      e.exports = function (e) {
        return e[1];
      };
    },
    70201: (e) => {
      e.exports = { animatedUnderline: "ymqHP", showUnderline: "JQguZ", completeAnimation: "ExcM8" };
    },
    27061: (e) => {
      var t,
        n,
        i = (e.exports = {});
      function r() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      function o(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === r || !t) && setTimeout) return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (n) {
          try {
            return t.call(null, e, 0);
          } catch (n) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = "function" == typeof setTimeout ? setTimeout : r;
        } catch (e) {
          t = r;
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : s;
        } catch (e) {
          n = s;
        }
      })();
      var a,
        c = [],
        u = !1,
        l = -1;
      function d() {
        u && a && ((u = !1), a.length ? (c = a.concat(c)) : (l = -1), c.length && h());
      }
      function h() {
        if (!u) {
          var e = o(d);
          u = !0;
          for (var t = c.length; t; ) {
            for (a = c, c = []; ++l < t; ) a && a[l].run();
            (l = -1), (t = c.length);
          }
          (a = null),
            (u = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === s || !n) && clearTimeout) return (n = clearTimeout), clearTimeout(e);
              try {
                n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function p(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (i.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new p(e, t)), 1 !== c.length || u || o(h);
      }),
        (p.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = g),
        (i.addListener = g),
        (i.once = g),
        (i.off = g),
        (i.removeListener = g),
        (i.removeAllListeners = g),
        (i.emit = g),
        (i.prependListener = g),
        (i.prependOnceListener = g),
        (i.listeners = function (e) {
          return [];
        }),
        (i.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    82989: function (e, t, n) {
      var i;
      !(function (r, s) {
        var o = "function",
          a = "undefined",
          c = "object",
          u = "string",
          l = "model",
          d = "name",
          h = "type",
          p = "vendor",
          g = "version",
          f = "architecture",
          m = "console",
          b = "mobile",
          _ = "tablet",
          v = "smarttv",
          y = "wearable",
          w = "embedded",
          E = "Amazon",
          x = "Apple",
          S = "ASUS",
          k = "BlackBerry",
          R = "Firefox",
          T = "Google",
          I = "Huawei",
          A = "LG",
          F = "Microsoft",
          C = "Motorola",
          O = "Opera",
          N = "Samsung",
          P = "Sharp",
          M = "Sony",
          L = "Xiaomi",
          U = "Zebra",
          D = "Facebook",
          B = function (e) {
            for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
            return t;
          },
          j = function (e, t) {
            return typeof e === u && -1 !== H(t).indexOf(H(e));
          },
          H = function (e) {
            return e.toLowerCase();
          },
          $ = function (e, t) {
            if (typeof e === u) return (e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, "")), typeof t === a ? e : e.substring(0, 350);
          },
          W = function (e, t) {
            for (var n, i, r, a, u, l, d = 0; d < t.length && !u; ) {
              var h = t[d],
                p = t[d + 1];
              for (n = i = 0; n < h.length && !u; )
                if ((u = h[n++].exec(e)))
                  for (r = 0; r < p.length; r++)
                    (l = u[++i]),
                      typeof (a = p[r]) === c && a.length > 0
                        ? 2 === a.length
                          ? typeof a[1] == o
                            ? (this[a[0]] = a[1].call(this, l))
                            : (this[a[0]] = a[1])
                          : 3 === a.length
                          ? typeof a[1] !== o || (a[1].exec && a[1].test)
                            ? (this[a[0]] = l ? l.replace(a[1], a[2]) : s)
                            : (this[a[0]] = l ? a[1].call(this, l, a[2]) : s)
                          : 4 === a.length && (this[a[0]] = l ? a[3].call(this, l.replace(a[1], a[2])) : s)
                        : (this[a] = l || s);
              d += 2;
            }
          },
          V = function (e, t) {
            for (var n in t)
              if (typeof t[n] === c && t[n].length > 0) {
                for (var i = 0; i < t[n].length; i++) if (j(t[n][i], e)) return "?" === n ? s : n;
              } else if (j(t[n], e)) return "?" === n ? s : n;
            return e;
          },
          G = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          },
          q = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [g, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [g, [d, "Edge"]],
              [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
              [d, g],
              [/opios[\/ ]+([\w\.]+)/i],
              [g, [d, "Opera Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [g, [d, O]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i
              ],
              [d, g],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [g, [d, "UCBrowser"]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [g, [d, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [g, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [g, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [g, [d, "IE"]],
              [/yabrowser\/([\w\.]+)/i],
              [g, [d, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Secure Browser"], g],
              [/\bfocus\/([\w\.]+)/i],
              [g, [d, "Firefox Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [g, [d, "Opera Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [g, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [g, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [g, [d, "Opera Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [g, [d, "MIUI Browser"]],
              [/fxios\/([-\w\.]+)/i],
              [g, [d, R]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[d, "360 Browser"]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Browser"], g],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[d, /_/g, " "], g],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
              ],
              [d, g],
              [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
              [d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[d, D], g],
              [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
              [d, g],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [g, [d, "GSA"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [g, [d, "Chrome Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[d, "Chrome WebView"], g],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [g, [d, "Android Browser"]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, g],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [g, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [g, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                d,
                [g, V, { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }]
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, g],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[d, "Netscape"], g],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [g, [d, "Firefox Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i
              ],
              [d, g]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[f, "amd64"]],
              [/(ia32(?=;))/i],
              [[f, H]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[f, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[f, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[f, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[f, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[f, /ower/, "", H]],
              [/(sun4\w)[;\)]/i],
              [[f, "sparc"]],
              [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
              [[f, H]]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [l, [p, N], [h, _]],
              [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
              [l, [p, N], [h, b]],
              [/\((ip(?:hone|od)[\w ]*);/i],
              [l, [p, x], [h, b]],
              [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
              [l, [p, x], [h, _]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [l, [p, I], [h, _]],
              [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
              [l, [p, I], [h, b]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
              ],
              [
                [l, /_/g, " "],
                [p, L],
                [h, b]
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [l, /_/g, " "],
                [p, L],
                [h, _]
              ],
              [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
              [l, [p, "OPPO"], [h, b]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [l, [p, "Vivo"], [h, b]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [l, [p, "Realme"], [h, b]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
              ],
              [l, [p, C], [h, b]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [l, [p, C], [h, _]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [l, [p, A], [h, _]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
              ],
              [l, [p, A], [h, b]],
              [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
              [l, [p, "Lenovo"], [h, _]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [l, /_/g, " "],
                [p, "Nokia"],
                [h, b]
              ],
              [/(pixel c)\b/i],
              [l, [p, T], [h, _]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [l, [p, T], [h, b]],
              [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
              [l, [p, M], [h, b]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [l, "Xperia Tablet"],
                [p, M],
                [h, _]
              ],
              [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
              [l, [p, "OnePlus"], [h, b]],
              [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
              [l, [p, E], [h, _]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [l, /(.+)/g, "Fire Phone $1"],
                [p, E],
                [h, b]
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [l, p, [h, _]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [l, [p, k], [h, b]],
              [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
              [l, [p, S], [h, _]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [l, [p, S], [h, b]],
              [/(nexus 9)/i],
              [l, [p, "HTC"], [h, _]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i
              ],
              [p, [l, /_/g, " "], [h, b]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [l, [p, "Acer"], [h, _]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [l, [p, "Meizu"], [h, b]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [l, [p, P], [h, b]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i
              ],
              [p, l, [h, b]],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i
              ],
              [p, l, [h, _]],
              [/(surface duo)/i],
              [l, [p, F], [h, _]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [l, [p, "Fairphone"], [h, b]],
              [/(u304aa)/i],
              [l, [p, "AT&T"], [h, b]],
              [/\bsie-(\w*)/i],
              [l, [p, "Siemens"], [h, b]],
              [/\b(rct\w+) b/i],
              [l, [p, "RCA"], [h, _]],
              [/\b(venue[\d ]{2,7}) b/i],
              [l, [p, "Dell"], [h, _]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [l, [p, "Verizon"], [h, _]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [l, [p, "Barnes & Noble"], [h, _]],
              [/\b(tm\d{3}\w+) b/i],
              [l, [p, "NuVision"], [h, _]],
              [/\b(k88) b/i],
              [l, [p, "ZTE"], [h, _]],
              [/\b(nx\d{3}j) b/i],
              [l, [p, "ZTE"], [h, b]],
              [/\b(gen\d{3}) b.+49h/i],
              [l, [p, "Swiss"], [h, b]],
              [/\b(zur\d{3}) b/i],
              [l, [p, "Swiss"], [h, _]],
              [/\b((zeki)?tb.*\b) b/i],
              [l, [p, "Zeki"], [h, _]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[p, "Dragon Touch"], l, [h, _]],
              [/\b(ns-?\w{0,9}) b/i],
              [l, [p, "Insignia"], [h, _]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [l, [p, "NextBook"], [h, _]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[p, "Voice"], l, [h, b]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[p, "LvTel"], l, [h, b]],
              [/\b(ph-1) /i],
              [l, [p, "Essential"], [h, b]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [l, [p, "Envizen"], [h, _]],
              [/\b(trio[-\w\. ]+) b/i],
              [l, [p, "MachSpeed"], [h, _]],
              [/\btu_(1491) b/i],
              [l, [p, "Rotor"], [h, _]],
              [/(shield[\w ]+) b/i],
              [l, [p, "Nvidia"], [h, _]],
              [/(sprint) (\w+)/i],
              [p, l, [h, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [l, /\./g, " "],
                [p, F],
                [h, b]
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [l, [p, U], [h, _]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [l, [p, U], [h, b]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [p, l, [h, m]],
              [/droid.+; (shield) bui/i],
              [l, [p, "Nvidia"], [h, m]],
              [/(playstation [345portablevi]+)/i],
              [l, [p, M], [h, m]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [l, [p, F], [h, m]],
              [/smart-tv.+(samsung)/i],
              [p, [h, v]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [l, /^/, "SmartTV"],
                [p, N],
                [h, v]
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [p, A],
                [h, v]
              ],
              [/(apple) ?tv/i],
              [p, [l, "Apple TV"], [h, v]],
              [/crkey/i],
              [
                [l, "Chromecast"],
                [p, T],
                [h, v]
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [l, [p, E], [h, v]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [l, [p, P], [h, v]],
              [/(bravia[\w ]+)( bui|\))/i],
              [l, [p, M], [h, v]],
              [/(mitv-\w{5}) bui/i],
              [l, [p, L], [h, v]],
              [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
              [
                [p, $],
                [l, $],
                [h, v]
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[h, v]],
              [/((pebble))app/i],
              [p, l, [h, y]],
              [/droid.+; (glass) \d/i],
              [l, [p, T], [h, y]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [l, [p, U], [h, y]],
              [/(quest( 2)?)/i],
              [l, [p, D], [h, y]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [p, [h, w]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [l, [h, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [l, [h, _]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[h, _]],
              [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
              [[h, b]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [l, [p, "Generic"]]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [g, [d, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [g, [d, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i
              ],
              [d, g],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [g, d]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, g],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
              ],
              [d, [g, V, G]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [d, "Windows"],
                [g, V, G]
              ],
              [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
              [
                [g, /_/g, "."],
                [d, "iOS"]
              ],
              [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
              [
                [d, "Mac OS"],
                [g, /_/g, "."]
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [g, d],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i
              ],
              [d, g],
              [/\(bb(10);/i],
              [g, [d, k]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [g, [d, "Symbian"]],
              [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
              [g, [d, "Firefox OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [g, [d, "webOS"]],
              [/crkey\/([\d\.]+)/i],
              [g, [d, "Chromecast"]],
              [/(cros) [\w]+ ([\w\.]+\w)/i],
              [[d, "Chromium OS"], g],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i
              ],
              [d, g],
              [/(sunos) ?([\w\.\d]*)/i],
              [[d, "Solaris"], g],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i
              ],
              [d, g]
            ]
          },
          z = function (e, t) {
            if ((typeof e === c && ((t = e), (e = s)), !(this instanceof z))) return new z(e, t).getResult();
            var n = e || (typeof r !== a && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
              i = t
                ? (function (e, t) {
                    var n = {};
                    for (var i in e) t[i] && t[i].length % 2 == 0 ? (n[i] = t[i].concat(e[i])) : (n[i] = e[i]);
                    return n;
                  })(q, t)
                : q;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t.name = s),
                  (t.version = s),
                  W.call(t, n, i.browser),
                  (t.major = typeof (e = t.version) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : s),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e.architecture = s), W.call(e, n, i.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (e.vendor = s), (e.model = s), (e.type = s), W.call(e, n, i.device), e;
              }),
              (this.getEngine = function () {
                var e = {};
                return (e.name = s), (e.version = s), W.call(e, n, i.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (e.name = s), (e.version = s), W.call(e, n, i.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU()
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (n = typeof e === u && e.length > 350 ? $(e, 350) : e), this;
              }),
              this.setUA(n),
              this
            );
          };
        (z.VERSION = "1.0.32"),
          (z.BROWSER = B([d, g, "major"])),
          (z.CPU = B([f])),
          (z.DEVICE = B([l, p, h, m, b, v, _, y, w])),
          (z.ENGINE = z.OS = B([d, g])),
          typeof t !== a
            ? (e.exports && (t = e.exports = z), (t.UAParser = z))
            : n.amdO
            ? (i = function () {
                return z;
              }.call(t, n, t, e)) === s || (e.exports = i)
            : typeof r !== a && (r.UAParser = z);
        var K = typeof r !== a && (r.jQuery || r.Zepto);
        if (K && !K.ua) {
          var J = new z();
          (K.ua = J.getResult()),
            (K.ua.get = function () {
              return J.getUA();
            }),
            (K.ua.set = function (e) {
              J.setUA(e);
              var t = J.getResult();
              for (var n in t) K.ua[n] = t[n];
            });
        }
      })("object" == typeof self ? self : this);
    }
  },
  t = {};
function n(i) {
  var r = t[i];
  if (void 0 !== r) return r.exports;
  var s = (t[i] = { id: i, exports: {} });
  return e[i].call(s.exports, s, s.exports, n), s.exports;
}
(n.amdO = {}),
  (() => {
    function e(e) {
      const t = [];
      let n;
      for (; !(n = e.next()).done; ) t.push(n.value);
      return t;
    }
    function t(e, t) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    function i(e, t) {
      return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    }
    const r = (function () {
        const e = Object.prototype.toString;
        return "[object Arguments]" === e.call(arguments)
          ? function (t) {
              return "[object Arguments]" === e.call(t);
            }
          : function (e) {
              return t("callee", e);
            };
      })(),
      s = (function () {
        const e = !{ toString: null }.propertyIsEnumerable("toString"),
          n = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
          i = (function () {
            return arguments.propertyIsEnumerable("length");
          })(),
          s = function (e, t) {
            for (var n = 0; n < e.length; ) {
              if (e[n] === t) return !0;
              n += 1;
            }
            return !1;
          };
        return "function" != typeof Object.keys || i
          ? function (o) {
              if (Object(o) !== o) return [];
              let a, c;
              const u = [],
                l = i && r(o);
              for (a in o) !t(a, o) || (l && "length" === a) || (u[u.length] = a);
              if (e) for (c = n.length - 1; c >= 0; ) (a = n[c]), t(a, o) && !s(u, a) && (u[u.length] = a), (c -= 1);
              return u;
            }
          : function (e) {
              return Object(e) !== e ? [] : Object.keys(e);
            };
      })();
    function o(e) {
      return null === e ? "Null" : void 0 === e ? "Undefined" : Object.prototype.toString.call(e).slice(8, -1);
    }
    function a(n, r, c = [], u = []) {
      if (i(n, r)) return !0;
      if (o(n) !== o(r)) return !1;
      if (null == n || null == r) return !1;
      if ("function" == typeof n.equals || "function" == typeof r.equals)
        return "function" == typeof n.equals && n.equals(r) && "function" == typeof r.equals && r.equals(n);
      switch (o(n)) {
        case "Arguments":
        case "Array":
        case "Object":
          if (null != (l = n) && "function" == typeof l.then) return n === r;
          break;
        case "Boolean":
        case "Number":
        case "String":
          if (typeof n != typeof r || !i(n.valueOf(), r.valueOf())) return !1;
          break;
        case "Date":
          if (!i(n.valueOf(), r.valueOf())) return !1;
          break;
        case "Error":
          return n.name === r.name && n.message === r.message;
        case "RegExp":
          if (
            n.source !== r.source ||
            n.global !== r.global ||
            n.ignoreCase !== r.ignoreCase ||
            n.multiline !== r.multiline ||
            n.sticky !== r.sticky ||
            n.unicode !== r.unicode
          )
            return !1;
          break;
        case "Map":
        case "Set":
          if (!a(e(n.entries()), e(r.entries()), c, u)) return !1;
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
      var l;
      const d = s(n);
      if (d.length !== s(r).length) return !1;
      let h = c.length - 1;
      for (; h >= 0; ) {
        if (c[h] === n) return u[h] === r;
        h -= 1;
      }
      for (c.push(n), u.push(r), h = d.length - 1; h >= 0; ) {
        const e = d[h];
        if (!t(e, r) || !a(r[e], n[e], c, u)) return !1;
        h -= 1;
      }
      return c.pop(), u.pop(), !0;
    }
    function c(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    function u() {
      let e, t;
      return {
        promise: new Promise((n, i) => {
          (e = n), (t = i);
        }),
        resolve: e,
        reject: t
      };
    }
    function l(e) {
      return new Promise((t, n) => {
        e.then(n, t);
      });
    }
    class d extends Error {}
    function h(e) {
      return new Promise((t, n) => setTimeout(() => n(new d("Promise timed out.")), e));
    }
    const p = a;
    function g(e, t) {
      return e.some((e) => e === t) ? t : void 0;
    }
    class f extends Error {
      constructor(e) {
        super(`Matching not exhaustive: unexpected value ${JSON.stringify(e)}`);
      }
    }
    function m(e) {
      throw new f(e);
    }
    function b(e) {
      if ("string" == typeof e) {
        const t = parseInt(e, 10);
        return isNaN(t) ? void 0 : t;
      }
      return "number" == typeof e ? e : void 0;
    }
    function _(e, t) {
      try {
        return e();
      } catch (e) {
        return t(e);
      }
    }
    function v() {}
    function y(e) {
      return null != e;
    }
    function w(e) {
      let t,
        n = !1;
      return (...i) => (n || ((n = !0), (t = e(...i))), t);
    }
    function E(e, t, n) {
      const i = new Set();
      let r;
      return (...s) => {
        const o = t(...s);
        return i.has(o) || (i.add(o), (r = e(...s))), null == n || n(...s), r;
      };
    }
    function x(e, t) {
      let n,
        i,
        r = !0;
      function s(e, n) {
        return (
          r &&
            ((r = !1),
            (i = u()),
            setTimeout(() => {
              try {
                i.resolve(t(...n));
              } catch (e) {
                i.reject(e);
              } finally {
                r = !0;
              }
            }, e)),
          i.promise
        );
      }
      return (...t) => {
        const i = n;
        return (n = Date.now()), s(void 0 === i || n - i >= e ? 0 : e - (n - i), t);
      };
    }
    async function S(e, t, n) {
      const i = n();
      if (!(e > 0)) return i;
      try {
        return await i;
      } catch (i) {
        return await c(t), S(e - 1, t, n);
      }
    }
    var k;
    !(function (e) {
      function t() {
        return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
      }
      e.create = function () {
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
      };
    })(k || (k = {}));
    void 0 !== self.requestIdleCallback && self.requestIdleCallback;
    class R extends Error {
      constructor(e) {
        super(`Assertion failed: ${e ? ("string" == typeof e ? e : e()) : "(unnamed)"}`);
      }
    }
    function T(e, t) {
      if (!e) throw new R(t);
    }
    function I(e, t) {
      if (null == e) throw new R(() => (t ? `Expected ${t} to be non-null` : "Expected non-null"));
      return e;
    }
    var A, F, C, O, N, P, M, L, U;
    function D(e, t) {
      return e.filter((e) => !!e).join(t);
    }
    !(function (e) {
      const t = {
        chromiumWebExtension: "chromeExt",
        firefoxWebExtension: "firefoxExt",
        safariAppExtension: "safariExt",
        safariWebExtension: "safariWebExt",
        safariIOSWebExtension: "safariIOSExt"
      };
      function n(e, n, i) {
        return "retail" === i && "safariIOSWebExtension" === n ? "safariIOSExt-retail" : "edge" === e ? "chromiumEdgeExt" : t[n];
      }
      (e.getAppName = n),
        (e.create = function (e, t, i, r) {
          return {
            appName: I(n(e, t, i), "gnar app name"),
            url: `https://gnar.${r}`,
            domain: `.${r}`,
            sendEmailInfoTracking: !0,
            sendFluidExperimentData: !1
          };
        });
    })(A || (A = {})),
      (function (e) {
        const t = {
          chromiumWebExtension: "extensionChrome",
          firefoxWebExtension: "extensionFirefox",
          safariAppExtension: "extensionSafari",
          safariWebExtension: "extensionSafariWeb",
          safariIOSWebExtension: "extensionSafariIOS"
        };
        e.create = function (e, n, i, r) {
          return {
            appName:
              "retail" === i && "safariIOSWebExtension" === n
                ? "extensionSafariIOS-retail"
                : "edge" === e
                ? "extensionEdge"
                : I(t[n], "felog app name"),
            sendUsageMetrics: !0,
            sendPerfMetricsType: "dev" === r ? "local" : Math.random() <= 0.01 ? "send" : "off"
          };
        };
      })(F || (F = {})),
      (function (e) {
        const t = {
            chromiumWebExtension: "extension_chrome",
            firefoxWebExtension: "extension_firefox",
            safariAppExtension: "extension_safari",
            safariWebExtension: "extension_safari_web",
            safariIOSWebExtension: "extension_safari_ios"
          },
          n = { regular: "inline", retail: "retail_demo" };
        e.create = (e, i, r) => ({
          clientType: "edge" === e ? "extension_chromium_edge" : I(t[i], "capi client type"),
          clientSubType: I(n[r], "capi client subType")
        });
      })(C || (C = {})),
      (function (e) {
        e.create = function (e) {
          return {
            urls: {
              fetchMessages: `${e}/api/v1/messages`,
              acknowledgeMessage: `${e}/api/v1/messages/acknowledge`,
              dismissMessage: `${e}/api/v1/messages/dismiss`
            }
          };
        };
      })(O || (O = {})),
      (function (e) {
        e.create = function (e) {
          return {
            urls: {
              getInAppMessages: `${e}/api/inApp/getMessages`,
              track: `${e}/api/events/track`,
              trackInAppOpen: `${e}/api/events/trackInAppOpen`,
              trackInAppClose: `${e}/api/events/trackInAppClose`,
              trackInAppConsume: `${e}/api/events/inAppConsume`,
              trackInAppClick: `${e}/api/events/trackInAppClick`,
              userUpdate: `${e}/api/users/update`
            }
          };
        };
      })(N || (N = {})),
      (function (e) {
        e.create = function (e) {
          return { urls: { getJWTToken: `${e}/token` } };
        };
      })(P || (P = {})),
      (function (e) {
        const t = {
          chromiumWebExtension: "chromeExt",
          firefoxWebExtension: "firefoxExt",
          safariAppExtension: "safariExt",
          safariWebExtension: "safariWebExt",
          safariIOSWebExtension: "safariIOSExt"
        };
        e.create = function (e, n) {
          return { xClientType: "edge" === e ? "chromiumEdgeExt" : t[n] };
        };
      })(M || (M = {})),
      (function (e) {
        let t;
        var n;
        (n = t = e.GrStaticUrl || (e.GrStaticUrl = {})), (n.toGrStaticUrl = (e) => "https://assets.extension.grammarly.com/" + e);
      })(L || (L = {})),
      (function (e) {
        e.create = function (t, n, i, r, s) {
          const o = "safari" === t ? "disableAppsPromotion=true" : "";
          function a(e) {
            const t = `https://${e}.${n}`;
            return (e = "", n = "") => {
              const i = D([o, n], "&");
              return D([t + e, i], "?");
            };
          }
          const c = a("www"),
            u = a("app"),
            l = a("account"),
            d = a("redirect"),
            h = e.GrStaticUrl.toGrStaticUrl,
            p = `https://data.${n}`,
            g = `https://auth.${n}/v3`,
            f = `https://auth.${n}/v4`,
            m = `https://capi.${n}/api/configuration/cheetah/v1/settings`,
            b = `https://capi.${n}`,
            _ = `wss://capi.${n}/freews`;
          return {
            accountSubscription: l("/subscription"),
            accountSubscriptionAddBillingInfo: l("/admin/subscription", "popup=add_billing_info"),
            adminAccountSubscription: l("/admin/subscription"),
            accountAdminSubscriptionAddBillingInfoToUngatedTrial: l("/admin/subscription", "popup=ungated_trial"),
            app: u(),
            appPersonalDictionary: l("/customize"),
            featuresSettings: l("/customize/features"),
            capi: _,
            capiStatic: _,
            capiGDocs: `wss://capi.${n}/gdocs`,
            dapi: p,
            cheetahSettings: m,
            editorDictionary: u("/profile/dictionary"),
            desktop: c("/desktop"),
            dictionary: `https://capi.${n}/api/defs`,
            docs: u("/docs"),
            docsApi: `https://dox.${n}/documents`,
            newDoc: u("/docs/new"),
            tokens: `${f}/api`,
            auth: g,
            userOrAnonymous: `${g}/user/oranonymous`,
            signin: c("/signin"),
            signup: c("/signup"),
            dialect: `${b}/api/configuration/language/v1/settings`,
            fbSignin: c("/signin", "fromExtensionFb=true"),
            fbSignup: c("/signup", "fromExtensionFb=true"),
            googleSignin: c("/signin", "fromExtensionGoogle=true"),
            googleSignup: c("/signup", "fromExtensionGoogle=true"),
            resetPassword: c("/resetpassword"),
            newFelog: i,
            sumoLogic: r,
            vmetrics: s,
            welcomeC: c("/extension-success"),
            afterInstall: c("/after_install_page/"),
            upgrade: c("/upgrade"),
            planComparison: c("/plans"),
            businessHomepage: c("/business"),
            businessPricing: c("/business/pricing"),
            businessStyleGuide: c("/business/styleguide"),
            businessBrandTones: c("/business/brand-tones"),
            uninstall: c("/extension-uninstall"),
            terms: c("/terms"),
            policy: c("/privacy-policy"),
            californiaPolicy: c("/privacy-policy#for-california-users"),
            extensionSuccess: c("/extension-success"),
            firefoxPrivatePolicy: "https://addons.mozilla.org/en-US/firefox/addon/grammarly-1/privacy/",
            dynamicConfigUrl: "https://config.extension.grammarly.com/dynamicConfig.json",
            pageConfigUrl: "https://config.extension.grammarly.com/browserplugin/config.json",
            grammarlyDomain: n,
            grammarlyProtocol: "https:",
            redirect: d("/redirect"),
            snippetsApi: `https://goldengate.${n}/snippets/v1/snippets`,
            snippetsNew: l("/admin/snippets", "action=create"),
            snippetsAdmin: l("/admin/snippets"),
            snippetsSettings: l("/customize/snippets"),
            knowledgeHubApi: `https://goldengate.${n}/knowledge-hub/v1/institution`,
            clientControlsApi: `https://goldengate.${n}/client-controls`,
            suggestionsSettings: l("/customize/suggestions"),
            allSettings: l(),
            styleGuideSettings: l("/admin/style-guide"),
            writingStyleSettings: l("/admin/style-guide-writing-style"),
            brandTones: l("/admin/brand-tones"),
            grammarlyIdeasSelf: u("/ideas/grow/self"),
            grammarlyIdeasPeer: u("/ideas/grow/peer"),
            grammarlyIdeasSales: u("/ideas/sales"),
            iOSApp: "grammarly://home",
            standWithUkraine: c("/stand-with-ukraine"),
            standWithUkraineBlockedUserPing: "https://rwsgfy.grammarly.com/stand-with-ukraine",
            tourGdocs: c("/tour-gdocs"),
            assets: {
              assistantOnboardingTourGif: h("assets/assistant/assistant-onboarding-tour"),
              ownerActivationIPMHeader: h("assets/ipm/owner-activation-ipm-header"),
              graduationIpmSvg: h("assets/ipm/graduation-campaign-ipm"),
              writingProgressIpmGif: h("assets/ipm/writing-progress-ipm-header"),
              onboardingTour: {
                inlineSuggestionsPreviewImage: h("assets/onboarding/inline-suggestions-preview-image.jpg"),
                inlineSuggestionsAnimation: h("assets/onboarding/inline-suggestions.mp4"),
                clickToAcceptAnimation: h("assets/onboarding/click-to-accept.mp4"),
                happyWritingAnimation: h("assets/onboarding/happy-writing.mp4")
              },
              knowledgeHubOnboardingTour: {
                step1: h("assets/knowledgeHubOnboarding/kh-onboarding-step1.mp4"),
                step2: h("assets/knowledgeHubOnboarding/kh-onboarding-step2.mp4"),
                step3: h("assets/knowledgeHubOnboarding/kh-onboarding-step3.mp4")
              }
            },
            support: `https://support.${n}/hc/en-us/requests/new#/`,
            grammarlyEmployeesBugReportsUrl: "https://in-product.report.grammarly.io/v1/report"
          };
        };
      })(L || (L = {})),
      (function (e) {
        const t = "grammarly.com",
          n = "qagr.io",
          i = "ppgr.io";
        e.create = function (e, r, s, o) {
          const a = (e, t, n, i, r) =>
              "prod" === o ? e : "qa" === o ? t : "dev-qa" === o ? n : "dev-preprod" === o ? i : "dev" === o ? r : void m(o),
            c = "https://127.0.0.1:8000",
            u = a("https://f-log-extension.grammarly.io", c, c, c, c),
            l = a(
              "https://endpoint2.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV1OF-4ic11yqpre0casnyvs_ZoaCHciEYdRyBkrfwP6DMlsWt8tSVU76RPqgGvAGjXGQk_UNuxPx-pYbToJapM_Fr0CUcgKaA8_IVl-lhSr5Q==",
              c,
              c,
              c,
              c
            ),
            d = a(
              "https://extension.femetrics.grammarly.io/batch/import",
              "https://femetrics.qagr.io/batch/import",
              "https://femetrics.qagr.io/batch/import",
              "https://femetrics.ppgr.io/batch/import",
              "https://femetrics.qagr.io/batch/import"
            ),
            h = a(t, n, n, i, n),
            p = a(t, n, n, i, t),
            g = a(
              "https://chipmunk.grammarly.com",
              "https://chipmunk.qagr.io",
              "https://chipmunk.qagr.io",
              "https://chipmunk.ppgr.io",
              "https://chipmunk.grammarly.com"
            );
          return {
            url: L.create(e, p, u, l, d),
            gnar: A.create(e, r, s, h),
            felog: F.create(e, r, s, o),
            capi: C.create(e, r, s),
            chipmunk: O.create("https://chipmunk.grammarly.com"),
            iterable: N.create("https://api.iterable.com"),
            mise: P.create(g),
            auth: M.create(e, r),
            extensionId: "87677a2c52b84ad3a151a4a72f5bd3c4"
          };
        };
      })(U || (U = {}));
    const B = _(
        () => browser,
        () => self.browser
      ),
      j = _(
        () => browser,
        () => self.browser
      );
    self.chrome = self.chrome;
    var H, $, W, V, G, q, z, K, J, Y, X;
    !(function (e) {
      (e.create = function (e, t, n, i, r, s, o, a) {
        const c = void 0 !== s && void 0 !== o ? s : "UNVERSIONED",
          u = `${e}.${t}.${n}`;
        return {
          version: u,
          fullVersion: `${u}-${[i, ["prod" !== r ? r : null, c !== i ? c : null].filter((e) => !!e).join(".")]
            .filter((e) => "" !== e)
            .join("/")}`,
          commitHash: o,
          gitBranch: s,
          manifestVersion: a
        };
      }),
        (e.getManifestVersion = function (e, t, n) {
          switch (e) {
            case "safariAppExtension":
              switch (t) {
                case "bg":
                case "popup":
                  return n.safari.extension.displayVersion;
                default:
                  return;
              }
            case "chromiumWebExtension":
              return n.chrome.runtime.getManifest().version;
            case "firefoxWebExtension":
              return B.runtime.getManifest().version;
            case "safariWebExtension":
            case "safariIOSWebExtension":
              return j.runtime.getManifest().version;
            default:
              return m(e);
          }
        });
    })(H || (H = {})),
      (function (e) {
        (e.create = function (e) {
          return g(["chrome", "safari", "firefox", "edge"], e);
        }),
          (e.isValidTargetBrowser = function (e) {
            return ["chrome", "safari", "firefox", "edge"].includes(e);
          }),
          (e.detect = function (e) {
            return e.chrome && /google/i.test(e.navigator.vendor)
              ? e.navigator.userAgent.indexOf("Edg") > -1
                ? "edge"
                : "chrome"
              : -1 !== e.navigator.userAgent.indexOf("Firefox")
              ? "firefox"
              : /^((?!chrome).)*safari/i.test(e.navigator.userAgent)
              ? "safari"
              : void 0;
          });
      })($ || ($ = {})),
      (function (e) {
        e.create = function (e) {
          return g(["dev", "prod", "qa", "dev-qa", "dev-preprod"], e);
        };
      })(W || (W = {})),
      (function (e) {
        e.create = function (e) {
          return g(["regular", "retail"], e);
        };
      })(V || (V = {})),
      (function (e) {
        e.create = function (e) {
          return g(["chromiumWebExtension", "firefoxWebExtension", "safariAppExtension", "safariWebExtension", "safariIOSWebExtension"], e);
        };
      })(G || (G = {})),
      (function (e) {
        e.create = function (e, t, n, i, r) {
          return { browser: e, extensionType: t, deploymentType: n, env: i, context: r };
        };
      })(q || (q = {})),
      (function (e) {
        e.create = function (e) {
          return { type: $.detect(e) || "other" };
        };
      })(z || (z = {})),
      (function (e) {
        e.create = function (e) {
          return {
            isWindows: -1 !== e.navigator.appVersion.indexOf("Win"),
            isMac: -1 !== e.navigator.appVersion.indexOf("Mac"),
            isChromeOS: -1 !== e.navigator.appVersion.indexOf("CrOS")
          };
        };
      })(K || (K = {})),
      (function (e) {
        e.create = function (e) {
          return { browser: z.create(e), os: K.create(e) };
        };
      })(J || (J = {})),
      (function (e) {
        function t(e, t, n, i, r, s, o) {
          return { env: e, major_number: t, build_number: n, release_number: i, git_branch: r, git_commit: s, manifest_version: o };
        }
        (e.create = t),
          (e.fromBrowserify = function () {
            return t("prod", "14", "1147", "0", "UNVERSIONED", "UNVERSIONED", "3");
          });
      })(Y || (Y = {})),
      (function (e) {
        (e.getTargetEnv = function (e) {
          if (!e.env) throw new Error("processEnv.env is null or undefined");
          const t = W.create(e.env);
          if (!t) throw new Error(`Invalid processEnv.env: ${e.env}`);
          return t;
        }),
          (e.create = function (e, t, n, i, r, s) {
            const o = [r.major_number, r.build_number, r.release_number].map(b);
            let a;
            if (3 === o.length && o.every((e) => void 0 !== e)) a = o;
            else {
              let e;
              try {
                e = H.getManifestVersion(t, i, self);
              } catch (e) {}
              const n = (e || "").split(".").map(b);
              a = 3 === n.length && n.every((e) => void 0 !== e) ? n : [0, 0, 0];
            }
            const [c, u, l] = a;
            return {
              buildInfo: H.create(c, u, l, e, s, r.git_branch, r.git_commit, r.manifest_version),
              bundleInfo: q.create(e, t, n, s, i),
              appConfig: U.create(e, t, n, s),
              systemInfo: J.create(self)
            };
          });
      })(X || (X = {}));
    const Z = new (class {
      constructor(e) {
        this._getFallbackValue = e;
      }
      init(e) {
        if (void 0 !== this._value) throw new Error("Global value already initialized.");
        this._value = e;
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
    let Q = () => Z.get();
    function ee() {
      return Q();
    }
    function te() {
      return ee().appConfig.extensionId;
    }
    function ne() {
      return "edge" === ee().bundleInfo.browser;
    }
    function ie() {
      return ee().bundleInfo.browser;
    }
    function re() {
      return ee().bundleInfo.env;
    }
    function se() {
      try {
        return self.parent !== self;
      } catch (e) {
        return !0;
      }
    }
    class oe {
      constructor(e) {
        if (((this.capacity = e), (this._start = 0), (this._end = 0), (this._isFull = !1), e <= 0))
          throw new Error("Invalid capacity " + e);
        this._buffer = new Array(e);
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
      enqueue(e) {
        let t = null;
        return (
          this.isFull && ((t = this._buffer[this._start]), this._startInc()),
          (this._buffer[this._end] = e),
          this._endInc(),
          this._start === this._end && (this._isFull = !0),
          t
        );
      }
      dequeue() {
        if (this.isEmpty) return null;
        const e = this._buffer[this._start];
        return (this._buffer[this._start] = null), this._startInc(), (this._isFull = !1), e;
      }
      delete(e) {
        const t = this._buffer.indexOf(e);
        if (t >= 0) {
          if (t < this._end) {
            for (let e = t; e < this._end - 1; e++) this._buffer[e] = this._buffer[e + 1];
            this._buffer[--this._end] = null;
          } else {
            for (let e = this._start; e < t; e++) this._buffer[e + 1] = this._buffer[e];
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
        let e;
        if (this.isEmpty) e = [];
        else if (this._start < this._end) e = this._buffer.slice(this._start, this._end);
        else {
          e = new Array(this.size);
          let t = 0;
          for (let n = this._start; n < this.capacity; ++n, ++t) e[t] = this._buffer[n];
          for (let n = 0; n < this._end; ++n, ++t) e[t] = this._buffer[n];
        }
        return e;
      }
    }
    function ae(e, t) {
      const n = {};
      return (
        Object.keys(t).forEach((i) => {
          e(i, t[i]) && (n[i] = t[i]);
        }),
        n
      );
    }
    const ce = (e) => e === Object(e) && !Array.isArray(e);
    function ue(e) {
      return Number.isFinite(e) || e === Number.NEGATIVE_INFINITY || e === Number.POSITIVE_INFINITY;
    }
    var le;
    !(function (e) {
      function t(e) {
        return { message: e.message, stack: e.stack };
      }
      function n(e) {
        try {
          return !("string" == typeof JSON.stringify(e));
        } catch (e) {
          return e.message.includes("Converting circular structure to JSON");
        }
      }
      (e.normalizeException = t),
        (e.isCircularObject = n),
        (e.normalizeData = function e(i) {
          try {
            return self.HTMLElement && i instanceof self.HTMLElement
              ? {
                  type: (r = i).nodeName,
                  html: r.outerHTML,
                  attributes: Array.from(r.attributes).reduce((e, t) => ({ ...e, [t.nodeName]: t.nodeValue }), {})
                }
              : i instanceof Error
              ? t(i)
              : Array.isArray(i)
              ? i.map((t) => e(t))
              : "function" == typeof i
              ? `${i.name}()`
              : ce(i)
              ? n(i)
                ? t(new Error("Couldn't normalize circular data!"))
                : Object.keys(i).reduce((t, n) => ({ ...t, [n]: e(i[n]) }), {})
              : i;
          } catch (e) {
            return Ut.create("HistoryLogNormalizer").error("cannot normalize data", e, i), t(new Error("Data normalization fail!"));
          }
          var r;
        });
    })(le || (le = {}));
    const de = "common";
    function he(e) {
      return e === de ? "common." : "";
    }
    class pe {
      constructor(e) {
        var t;
        (this._historyArgs = e),
          (this._historyBuffers = {}),
          (this.isHistoryEnabled = () => {
            var e;
            return Boolean("prod" !== re() || (null === (e = this._historyArgs.enabledInProd) || void 0 === e ? void 0 : e.get()));
          }),
          (this.isAdvancedHistoryEnabled = () => {
            var e, t;
            return Boolean(
              "prod" !== re() ||
                ((null === (e = this._historyArgs.enabledInProd) || void 0 === e ? void 0 : e.get()) &&
                  (null === (t = this._historyArgs.enableAdvancedInProd) || void 0 === t ? void 0 : t.get()))
            );
          }),
          (this.getLogs = () =>
            Object.entries(this._historyBuffers)
              .map(([e, t]) =>
                t
                  .toArray()
                  .map((t) => ({
                    ...t,
                    data: le.normalizeData(t.data),
                    loggerName: he(e) + t.loggerName,
                    exception: t.exception ? le.normalizeException(t.exception) : void 0
                  }))
              )
              .flat()),
          (this._updateBackupStorage = () => {
            var e;
            null === (e = this._historyArgs.backupStorage) || void 0 === e || e.set(this._getBuffer(null).toArray());
          }),
          this._initCliCommands(),
          (this._historyBuffers.common = new oe(null !== (t = this._historyArgs.maxEventsToStore) && void 0 !== t ? t : 1e3));
      }
      _getBuffer(e) {
        return e
          ? (this._historyBuffers[e.name] || (this._historyBuffers[e.name] = new oe(e.settings.limit)), this._historyBuffers[e.name])
          : this._historyBuffers.common;
      }
      pushLog(e, t) {
        this._getBuffer(e).enqueue(t), this._updateBackupStorage();
      }
      _initCliCommands() {
        (self.GRIsDebugEnabled = () => this.isHistoryEnabled()),
          (self.GREnableHistoryLogger = (e = 60) => {
            var t, n;
            null === (n = (t = this._historyArgs).enableHistoryLoggerUntil) || void 0 === n || n.call(t, Date.now() + 60 * e * 1e3);
          }),
          (self.GRDisableHistoryLogger = () => {
            var e, t;
            null === (t = (e = this._historyArgs).disableHistoryLogger) || void 0 === t || t.call(e);
          });
      }
      static create(e) {
        return e.isBG ? new ge(e) : new fe(e);
      }
    }
    class ge extends pe {
      constructor(e) {
        super(e), (this._historyArgs = e), this._syncInitialStateWithStorage();
      }
      _syncInitialStateWithStorage() {
        var e;
        null === (e = this._historyArgs.backupStorage) ||
          void 0 === e ||
          e.get().then((e) => {
            if (!e) return;
            const t = this._getBuffer(null),
              n = t.toArray();
            t.clear(), e.forEach((e) => t.enqueue(e)), n.forEach((e) => t.enqueue(e)), this._updateBackupStorage();
          });
      }
    }
    class fe extends pe {}
    var me;
    !(function (e) {
      (e.TRACE = "TRACE"), (e.DEBUG = "DEBUG"), (e.INFO = "INFO"), (e.WARN = "WARN"), (e.ERROR = "ERROR"), (e.FATAL = "FATAL");
    })(me || (me = {}));
    const be = { [me.TRACE]: 1, [me.DEBUG]: 2, [me.INFO]: 3, [me.WARN]: 4, [me.ERROR]: 5, [me.FATAL]: 6 };
    function _e(e) {
      return be[e] || 0;
    }
    class ve {
      constructor(e) {
        (this.name = e),
          (this._isError = (e) => {
            const t = e;
            return t && ((void 0 !== t.message && void 0 !== t.name) || void 0 !== t.stack);
          });
      }
      trace(e, t, n) {
        this._logMessage(me.TRACE, e, t, n);
      }
      debug(e, t, n) {
        this._logMessage(me.DEBUG, e, t, n);
      }
      info(e, t, n) {
        this._logMessage(me.INFO, e, t, n);
      }
      warn(e, t, n) {
        this._logMessage(me.WARN, e, t, n);
      }
      error(e, t, n) {
        this._logMessage(me.ERROR, e, t, n);
      }
      fatal(e, t, n) {
        this._logMessage(me.FATAL, e, t, n);
      }
      _logMessage(e, t, n, i) {
        const r = { level: e, loggerName: this.name, message: t, timestamp: Date.now() };
        n && (this._isError(n) ? (r.exception = n) : (r.data = n)), (r.data = r.data || i), this.handleEvent(r);
      }
    }
    class ye {
      constructor(e, t) {
        (this.name = e), (this._createLogger = t);
      }
      trace(e, t, n) {
        void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.trace(e, t, n);
      }
      debug(e, t, n) {
        void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.debug(e, t, n);
      }
      info(e, t, n) {
        void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.info(e, t, n);
      }
      warn(e, t, n) {
        void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.warn(e, t, n);
      }
      error(e, t, n) {
        void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.error(e, t, n);
      }
      fatal(e, t, n) {
        void 0 === this._logger && (this._logger = this._createLogger(this.name)), this._logger.fatal(e, t, n);
      }
      isHistoryEnabled() {
        return !1;
      }
      isAdvancedHistoryEnabled() {
        return !1;
      }
    }
    class we extends ve {
      constructor(e, t, n, i) {
        var r, s;
        super(e),
          (this._config = t),
          (this._historyLogsService = n),
          (this._loggerSettings = i),
          (this._buffer = (null === (r = this._loggerSettings) || void 0 === r ? void 0 : r.historyBufferSettings)
            ? { name: this.name, settings: null === (s = this._loggerSettings) || void 0 === s ? void 0 : s.historyBufferSettings }
            : null);
      }
      handleEvent(e) {
        var t, n;
        this._config.filterFn(e) &&
          !(null === (t = this._loggerSettings) || void 0 === t ? void 0 : t.skipWriteToConsole) &&
          this._config.writer.write(e),
          this._historyLogsService.isHistoryEnabled() &&
            !(null === (n = this._loggerSettings) || void 0 === n ? void 0 : n.skipWriteToHistoryLogger) &&
            this._historyLogsService.pushLog(this._buffer, e);
      }
      isHistoryEnabled() {
        return this._historyLogsService.isHistoryEnabled();
      }
      isAdvancedHistoryEnabled() {
        return this._historyLogsService.isAdvancedHistoryEnabled();
      }
    }
    function Ee(e) {
      return new Proxy(
        {},
        {
          get(t, n) {
            const i = e[n];
            return i && "function" == typeof i ? i.bind(e) : void 0;
          }
        }
      );
    }
    var xe;
    !(function (e) {
      (e.LEVEL = {
        [me.TRACE]: "color: white; background: orange;",
        [me.DEBUG]: "color: black; background: #ffdc00;",
        [me.INFO]: "color: black; background: #abdcfb",
        [me.WARN]: "color: white; background: darkorange;",
        [me.ERROR]: "color: white; background: red;",
        [me.FATAL]: "color: white; background: darkred;"
      }),
        (e.GRAMMARLY = "color: black; background: #bada55;");
      const t = new Map();
      function n(e, t) {
        return e + Math.floor(Math.random() * (t - e + 1));
      }
      function i(e) {
        return `color: ${e.isDark ? "white" : "black"}; background: rgb(${e.red}, ${e.green}, ${e.blue})`;
      }
      (e.getLoggerName = function (e) {
        const r = t.get(e);
        if (r) return i(r);
        const s = n(0, 255),
          o = n(0, 255),
          a = n(0, 255),
          c = { red: s, green: o, blue: a, isDark: Math.sqrt(s * s * 0.299 + o * o * 0.587 + a * a * 0.114) < 127.5 };
        return t.set(e, c), i(c);
      }),
        (e.RESET_DEFAULT = "color: reset;"),
        (e.RESET_DEBUG = `color: ${self.matchMedia && self.matchMedia("(prefers-color-scheme: dark)").matches ? "white" : "black"};`),
        (e.getReset = function (t) {
          return t !== me.TRACE && t !== me.DEBUG ? e.RESET_DEFAULT : t === me.TRACE || t === me.DEBUG ? e.RESET_DEBUG : e.RESET_DEFAULT;
        }),
        (e.outputLog = function (e) {
          return [`grm ${e.level} [${e.loggerName}] ░░ ${e.message}`];
        });
    })(xe || (xe = {}));
    class Se {
      constructor() {
        this._writeFunc = Se._commonWriteFunc;
      }
      write(e) {
        try {
          const t = xe.outputLog(e);
          e.data && t.push(e.data), e.exception && t.push(e.exception), this._writeFunc[e.level].apply(null, t);
        } catch (e) {}
      }
    }
    Se._commonWriteFunc = (function () {
      const { debug: e, info: t, warn: n, error: i } = Ee(console);
      return { [me.TRACE]: e, [me.DEBUG]: e, [me.INFO]: t, [me.WARN]: n, [me.ERROR]: i, [me.FATAL]: i };
    })();
    var ke = function (e, t) {
      return (
        (ke =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }),
        ke(e, t)
      );
    };
    function Re(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
      function n() {
        this.constructor = e;
      }
      ke(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    Object.create;
    Object.create;
    function Te(e) {
      return "function" == typeof e;
    }
    var Ie = !1,
      Ae = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          e && new Error().stack;
          Ie = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return Ie;
        }
      };
    function Fe(e) {
      setTimeout(function () {
        throw e;
      }, 0);
    }
    var Ce = {
        closed: !0,
        next: function (e) {},
        error: function (e) {
          if (Ae.useDeprecatedSynchronousErrorHandling) throw e;
          Fe(e);
        },
        complete: function () {}
      },
      Oe = (function () {
        return (
          Array.isArray ||
          function (e) {
            return e && "number" == typeof e.length;
          }
        );
      })();
    function Ne(e) {
      return null !== e && "object" == typeof e;
    }
    var Pe = (function () {
        function e(e) {
          return (
            Error.call(this),
            (this.message = e
              ? e.length +
                " errors occurred during unsubscription:\n" +
                e
                  .map(function (e, t) {
                    return t + 1 + ") " + e.toString();
                  })
                  .join("\n  ")
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = e),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })(),
      Me = (function () {
        function e(e) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
        }
        return (
          (e.prototype.unsubscribe = function () {
            var t;
            if (!this.closed) {
              var n = this,
                i = n._parentOrParents,
                r = n._ctorUnsubscribe,
                s = n._unsubscribe,
                o = n._subscriptions;
              if (((this.closed = !0), (this._parentOrParents = null), (this._subscriptions = null), i instanceof e)) i.remove(this);
              else if (null !== i)
                for (var a = 0; a < i.length; ++a) {
                  i[a].remove(this);
                }
              if (Te(s)) {
                r && (this._unsubscribe = void 0);
                try {
                  s.call(this);
                } catch (e) {
                  t = e instanceof Pe ? Le(e.errors) : [e];
                }
              }
              if (Oe(o)) {
                a = -1;
                for (var c = o.length; ++a < c; ) {
                  var u = o[a];
                  if (Ne(u))
                    try {
                      u.unsubscribe();
                    } catch (e) {
                      (t = t || []), e instanceof Pe ? (t = t.concat(Le(e.errors))) : t.push(e);
                    }
                }
              }
              if (t) throw new Pe(t);
            }
          }),
          (e.prototype.add = function (t) {
            var n = t;
            if (!t) return e.EMPTY;
            switch (typeof t) {
              case "function":
                n = new e(t);
              case "object":
                if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  var i = n;
                  (n = new e())._subscriptions = [i];
                }
                break;
              default:
                throw new Error("unrecognized teardown " + t + " added to Subscription.");
            }
            var r = n._parentOrParents;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof e) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            var s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }),
          (e.prototype.remove = function (e) {
            var t = this._subscriptions;
            if (t) {
              var n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }),
          (e.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
    function Le(e) {
      return e.reduce(function (e, t) {
        return e.concat(t instanceof Pe ? t.errors : t);
      }, []);
    }
    var Ue = (function () {
        return "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();
      })(),
      De = (function (e) {
        function t(n, i, r) {
          var s = e.call(this) || this;
          switch (
            ((s.syncErrorValue = null), (s.syncErrorThrown = !1), (s.syncErrorThrowable = !1), (s.isStopped = !1), arguments.length)
          ) {
            case 0:
              s.destination = Ce;
              break;
            case 1:
              if (!n) {
                s.destination = Ce;
                break;
              }
              if ("object" == typeof n) {
                n instanceof t
                  ? ((s.syncErrorThrowable = n.syncErrorThrowable), (s.destination = n), n.add(s))
                  : ((s.syncErrorThrowable = !0), (s.destination = new Be(s, n)));
                break;
              }
            default:
              (s.syncErrorThrowable = !0), (s.destination = new Be(s, n, i, r));
          }
          return s;
        }
        return (
          Re(t, e),
          (t.prototype[Ue] = function () {
            return this;
          }),
          (t.create = function (e, n, i) {
            var r = new t(e, n, i);
            return (r.syncErrorThrowable = !1), r;
          }),
          (t.prototype.next = function (e) {
            this.isStopped || this._next(e);
          }),
          (t.prototype.error = function (e) {
            this.isStopped || ((this.isStopped = !0), this._error(e));
          }),
          (t.prototype.complete = function () {
            this.isStopped || ((this.isStopped = !0), this._complete());
          }),
          (t.prototype.unsubscribe = function () {
            this.closed || ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
          }),
          (t.prototype._next = function (e) {
            this.destination.next(e);
          }),
          (t.prototype._error = function (e) {
            this.destination.error(e), this.unsubscribe();
          }),
          (t.prototype._complete = function () {
            this.destination.complete(), this.unsubscribe();
          }),
          (t.prototype._unsubscribeAndRecycle = function () {
            var e = this._parentOrParents;
            return (
              (this._parentOrParents = null),
              this.unsubscribe(),
              (this.closed = !1),
              (this.isStopped = !1),
              (this._parentOrParents = e),
              this
            );
          }),
          t
        );
      })(Me),
      Be = (function (e) {
        function t(t, n, i, r) {
          var s,
            o = e.call(this) || this;
          o._parentSubscriber = t;
          var a = o;
          return (
            Te(n)
              ? (s = n)
              : n &&
                ((s = n.next),
                (i = n.error),
                (r = n.complete),
                n !== Ce &&
                  (Te((a = Object.create(n)).unsubscribe) && o.add(a.unsubscribe.bind(a)), (a.unsubscribe = o.unsubscribe.bind(o)))),
            (o._context = a),
            (o._next = s),
            (o._error = i),
            (o._complete = r),
            o
          );
        }
        return (
          Re(t, e),
          (t.prototype.next = function (e) {
            if (!this.isStopped && this._next) {
              var t = this._parentSubscriber;
              Ae.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
                : this.__tryOrUnsub(this._next, e);
            }
          }),
          (t.prototype.error = function (e) {
            if (!this.isStopped) {
              var t = this._parentSubscriber,
                n = Ae.useDeprecatedSynchronousErrorHandling;
              if (this._error)
                n && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                  : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
              else if (t.syncErrorThrowable) n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : Fe(e), this.unsubscribe();
              else {
                if ((this.unsubscribe(), n)) throw e;
                Fe(e);
              }
            }
          }),
          (t.prototype.complete = function () {
            var e = this;
            if (!this.isStopped) {
              var t = this._parentSubscriber;
              if (this._complete) {
                var n = function () {
                  return e._complete.call(e._context);
                };
                Ae.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                  ? (this.__tryOrSetError(t, n), this.unsubscribe())
                  : (this.__tryOrUnsub(n), this.unsubscribe());
              } else this.unsubscribe();
            }
          }),
          (t.prototype.__tryOrUnsub = function (e, t) {
            try {
              e.call(this._context, t);
            } catch (e) {
              if ((this.unsubscribe(), Ae.useDeprecatedSynchronousErrorHandling)) throw e;
              Fe(e);
            }
          }),
          (t.prototype.__tryOrSetError = function (e, t, n) {
            if (!Ae.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
            try {
              t.call(this._context, n);
            } catch (t) {
              return Ae.useDeprecatedSynchronousErrorHandling ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0), !0) : (Fe(t), !0);
            }
            return !1;
          }),
          (t.prototype._unsubscribe = function () {
            var e = this._parentSubscriber;
            (this._context = null), (this._parentSubscriber = null), e.unsubscribe();
          }),
          t
        );
      })(De);
    var je = (function () {
      return ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    })();
    function He(e) {
      return e;
    }
    function $e(e) {
      return 0 === e.length
        ? He
        : 1 === e.length
        ? e[0]
        : function (t) {
            return e.reduce(function (e, t) {
              return t(e);
            }, t);
          };
    }
    var We = (function () {
      function e(e) {
        (this._isScalar = !1), e && (this._subscribe = e);
      }
      return (
        (e.prototype.lift = function (t) {
          var n = new e();
          return (n.source = this), (n.operator = t), n;
        }),
        (e.prototype.subscribe = function (e, t, n) {
          var i = this.operator,
            r = (function (e, t, n) {
              if (e) {
                if (e instanceof De) return e;
                if (e[Ue]) return e[Ue]();
              }
              return e || t || n ? new De(e, t, n) : new De(Ce);
            })(e, t, n);
          if (
            (i
              ? r.add(i.call(r, this.source))
              : r.add(
                  this.source || (Ae.useDeprecatedSynchronousErrorHandling && !r.syncErrorThrowable)
                    ? this._subscribe(r)
                    : this._trySubscribe(r)
                ),
            Ae.useDeprecatedSynchronousErrorHandling && r.syncErrorThrowable && ((r.syncErrorThrowable = !1), r.syncErrorThrown))
          )
            throw r.syncErrorValue;
          return r;
        }),
        (e.prototype._trySubscribe = function (e) {
          try {
            return this._subscribe(e);
          } catch (t) {
            Ae.useDeprecatedSynchronousErrorHandling && ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
              !(function (e) {
                for (; e; ) {
                  var t = e,
                    n = t.closed,
                    i = t.destination,
                    r = t.isStopped;
                  if (n || r) return !1;
                  e = i && i instanceof De ? i : null;
                }
                return !0;
              })(e)
                ? console.warn(t)
                : e.error(t);
          }
        }),
        (e.prototype.forEach = function (e, t) {
          var n = this;
          return new (t = Ve(t))(function (t, i) {
            var r;
            r = n.subscribe(
              function (t) {
                try {
                  e(t);
                } catch (e) {
                  i(e), r && r.unsubscribe();
                }
              },
              i,
              t
            );
          });
        }),
        (e.prototype._subscribe = function (e) {
          var t = this.source;
          return t && t.subscribe(e);
        }),
        (e.prototype[je] = function () {
          return this;
        }),
        (e.prototype.pipe = function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return 0 === e.length ? this : $e(e)(this);
        }),
        (e.prototype.toPromise = function (e) {
          var t = this;
          return new (e = Ve(e))(function (e, n) {
            var i;
            t.subscribe(
              function (e) {
                return (i = e);
              },
              function (e) {
                return n(e);
              },
              function () {
                return e(i);
              }
            );
          });
        }),
        (e.create = function (t) {
          return new e(t);
        }),
        e
      );
    })();
    function Ve(e) {
      if ((e || (e = Ae.Promise || Promise), !e)) throw new Error("no Promise impl found");
      return e;
    }
    var Ge = (function () {
        function e() {
          return Error.call(this), (this.message = "object unsubscribed"), (this.name = "ObjectUnsubscribedError"), this;
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })(),
      qe = (function (e) {
        function t(t, n) {
          var i = e.call(this) || this;
          return (i.subject = t), (i.subscriber = n), (i.closed = !1), i;
        }
        return (
          Re(t, e),
          (t.prototype.unsubscribe = function () {
            if (!this.closed) {
              this.closed = !0;
              var e = this.subject,
                t = e.observers;
              if (((this.subject = null), t && 0 !== t.length && !e.isStopped && !e.closed)) {
                var n = t.indexOf(this.subscriber);
                -1 !== n && t.splice(n, 1);
              }
            }
          }),
          t
        );
      })(Me),
      ze = (function (e) {
        function t(t) {
          var n = e.call(this, t) || this;
          return (n.destination = t), n;
        }
        return Re(t, e), t;
      })(De),
      Ke = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (t.observers = []), (t.closed = !1), (t.isStopped = !1), (t.hasError = !1), (t.thrownError = null), t;
        }
        return (
          Re(t, e),
          (t.prototype[Ue] = function () {
            return new ze(this);
          }),
          (t.prototype.lift = function (e) {
            var t = new Je(this, this);
            return (t.operator = e), t;
          }),
          (t.prototype.next = function (e) {
            if (this.closed) throw new Ge();
            if (!this.isStopped) for (var t = this.observers, n = t.length, i = t.slice(), r = 0; r < n; r++) i[r].next(e);
          }),
          (t.prototype.error = function (e) {
            if (this.closed) throw new Ge();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            for (var t = this.observers, n = t.length, i = t.slice(), r = 0; r < n; r++) i[r].error(e);
            this.observers.length = 0;
          }),
          (t.prototype.complete = function () {
            if (this.closed) throw new Ge();
            this.isStopped = !0;
            for (var e = this.observers, t = e.length, n = e.slice(), i = 0; i < t; i++) n[i].complete();
            this.observers.length = 0;
          }),
          (t.prototype.unsubscribe = function () {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }),
          (t.prototype._trySubscribe = function (t) {
            if (this.closed) throw new Ge();
            return e.prototype._trySubscribe.call(this, t);
          }),
          (t.prototype._subscribe = function (e) {
            if (this.closed) throw new Ge();
            return this.hasError
              ? (e.error(this.thrownError), Me.EMPTY)
              : this.isStopped
              ? (e.complete(), Me.EMPTY)
              : (this.observers.push(e), new qe(this, e));
          }),
          (t.prototype.asObservable = function () {
            var e = new We();
            return (e.source = this), e;
          }),
          (t.create = function (e, t) {
            return new Je(e, t);
          }),
          t
        );
      })(We),
      Je = (function (e) {
        function t(t, n) {
          var i = e.call(this) || this;
          return (i.destination = t), (i.source = n), i;
        }
        return (
          Re(t, e),
          (t.prototype.next = function (e) {
            var t = this.destination;
            t && t.next && t.next(e);
          }),
          (t.prototype.error = function (e) {
            var t = this.destination;
            t && t.error && this.destination.error(e);
          }),
          (t.prototype.complete = function () {
            var e = this.destination;
            e && e.complete && this.destination.complete();
          }),
          (t.prototype._subscribe = function (e) {
            return this.source ? this.source.subscribe(e) : Me.EMPTY;
          }),
          t
        );
      })(Ke),
      Ye = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n._value = t), n;
        }
        return (
          Re(t, e),
          Object.defineProperty(t.prototype, "value", {
            get: function () {
              return this.getValue();
            },
            enumerable: !0,
            configurable: !0
          }),
          (t.prototype._subscribe = function (t) {
            var n = e.prototype._subscribe.call(this, t);
            return n && !n.closed && t.next(this._value), n;
          }),
          (t.prototype.getValue = function () {
            if (this.hasError) throw this.thrownError;
            if (this.closed) throw new Ge();
            return this._value;
          }),
          (t.prototype.next = function (t) {
            e.prototype.next.call(this, (this._value = t));
          }),
          t
        );
      })(Ke);
    function Xe() {}
    var Ze = (function () {
        function e(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new Qe(e, this.nextOrObserver, this.error, this.complete));
          }),
          e
        );
      })(),
      Qe = (function (e) {
        function t(t, n, i, r) {
          var s = e.call(this, t) || this;
          return (
            (s._tapNext = Xe),
            (s._tapError = Xe),
            (s._tapComplete = Xe),
            (s._tapError = i || Xe),
            (s._tapComplete = r || Xe),
            Te(n)
              ? ((s._context = s), (s._tapNext = n))
              : n && ((s._context = n), (s._tapNext = n.next || Xe), (s._tapError = n.error || Xe), (s._tapComplete = n.complete || Xe)),
            s
          );
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            try {
              this._tapNext.call(this._context, e);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(e);
          }),
          (t.prototype._error = function (e) {
            try {
              this._tapError.call(this._context, e);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.error(e);
          }),
          (t.prototype._complete = function () {
            try {
              this._tapComplete.call(this._context);
            } catch (e) {
              return void this.destination.error(e);
            }
            return this.destination.complete();
          }),
          t
        );
      })(De);
    function et() {
      return function (e) {
        return e.lift(new tt(e));
      };
    }
    var tt = (function () {
        function e(e) {
          this.connectable = e;
        }
        return (
          (e.prototype.call = function (e, t) {
            var n = this.connectable;
            n._refCount++;
            var i = new nt(e, n),
              r = t.subscribe(i);
            return i.closed || (i.connection = n.connect()), r;
          }),
          e
        );
      })(),
      nt = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (i.connectable = n), i;
        }
        return (
          Re(t, e),
          (t.prototype._unsubscribe = function () {
            var e = this.connectable;
            if (e) {
              this.connectable = null;
              var t = e._refCount;
              if (t <= 0) this.connection = null;
              else if (((e._refCount = t - 1), t > 1)) this.connection = null;
              else {
                var n = this.connection,
                  i = e._connection;
                (this.connection = null), !i || (n && i !== n) || i.unsubscribe();
              }
            } else this.connection = null;
          }),
          t
        );
      })(De),
      it = (function (e) {
        function t(t, n) {
          var i = e.call(this) || this;
          return (i.source = t), (i.subjectFactory = n), (i._refCount = 0), (i._isComplete = !1), i;
        }
        return (
          Re(t, e),
          (t.prototype._subscribe = function (e) {
            return this.getSubject().subscribe(e);
          }),
          (t.prototype.getSubject = function () {
            var e = this._subject;
            return (e && !e.isStopped) || (this._subject = this.subjectFactory()), this._subject;
          }),
          (t.prototype.connect = function () {
            var e = this._connection;
            return (
              e ||
                ((this._isComplete = !1),
                (e = this._connection = new Me()).add(this.source.subscribe(new st(this.getSubject(), this))),
                e.closed && ((this._connection = null), (e = Me.EMPTY))),
              e
            );
          }),
          (t.prototype.refCount = function () {
            return et()(this);
          }),
          t
        );
      })(We),
      rt = (function () {
        var e = it.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: e._subscribe },
          _isComplete: { value: e._isComplete, writable: !0 },
          getSubject: { value: e.getSubject },
          connect: { value: e.connect },
          refCount: { value: e.refCount }
        };
      })(),
      st = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (i.connectable = n), i;
        }
        return (
          Re(t, e),
          (t.prototype._error = function (t) {
            this._unsubscribe(), e.prototype._error.call(this, t);
          }),
          (t.prototype._complete = function () {
            (this.connectable._isComplete = !0), this._unsubscribe(), e.prototype._complete.call(this);
          }),
          (t.prototype._unsubscribe = function () {
            var e = this.connectable;
            if (e) {
              this.connectable = null;
              var t = e._connection;
              (e._refCount = 0), (e._subject = null), (e._connection = null), t && t.unsubscribe();
            }
          }),
          t
        );
      })(ze);
    var ot = (function () {
      function e(e, t) {
        (this.subjectFactory = e), (this.selector = t);
      }
      return (
        (e.prototype.call = function (e, t) {
          var n = this.selector,
            i = this.subjectFactory(),
            r = n(i).subscribe(e);
          return r.add(t.subscribe(i)), r;
        }),
        e
      );
    })();
    function at() {
      return new Ke();
    }
    function ct() {
      return function (e) {
        return et()(
          ((t = at),
          function (e) {
            var i;
            if (
              ((i =
                "function" == typeof t
                  ? t
                  : function () {
                      return t;
                    }),
              "function" == typeof n)
            )
              return e.lift(new ot(i, n));
            var r = Object.create(e, rt);
            return (r.source = e), (r.subjectFactory = i), r;
          })(e)
        );
        var t, n;
      };
    }
    function ut(e, t) {
      return function (n) {
        return n.lift(new lt(e, t));
      };
    }
    var lt = (function () {
        function e(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new dt(e, this.predicate, this.thisArg));
          }),
          e
        );
      })(),
      dt = (function (e) {
        function t(t, n, i) {
          var r = e.call(this, t) || this;
          return (r.predicate = n), (r.thisArg = i), (r.count = 0), r;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            var t;
            try {
              t = this.predicate.call(this.thisArg, e, this.count++);
            } catch (e) {
              return void this.destination.error(e);
            }
            t && this.destination.next(e);
          }),
          t
        );
      })(De);
    function ht(e, t) {
      return function (n, i) {
        return t(n(e(i)), i);
      };
    }
    function pt(e, t) {
      return {
        get: e,
        set: t,
        modify: ht(e, t),
        compose: (n) =>
          pt(
            (t) => n.get(e(t)),
            (i, r) => t(n.set(i, e(r)), r)
          )
      };
    }
    function gt(...e) {
      if (0 === e.length) throw new TypeError("Can not compose zero lenses. You probably want `Lens.identity`.");
      if (1 === e.length) return e[0];
      {
        let t = e[0];
        return (
          e.slice(1).forEach((e) => {
            t = t.compose(e);
          }),
          t
        );
      }
    }
    pt(
      (e) => e,
      (e, t) => e
    );
    (function e(t, n) {
      return {
        get: t,
        set: n,
        modify: ht(t, n),
        compose: (i) =>
          e(
            (e) => {
              const n = t(e);
              return void 0 !== n ? i.get(n) : void 0;
            },
            (e, r) => {
              const s = t(r);
              return void 0 !== s ? n(i.set(e, s), r) : r;
            }
          )
      };
    })(
      (e) => {},
      (e, t) => t
    );
    const ft = void 0 !== n(27061) && !1;
    function mt(e, t, n) {
      if (e in n && a(t, n[e])) return n;
      {
        const i = {};
        for (const e in n) i[e] = n[e];
        return (i[e] = t), i;
      }
    }
    const bt = new RegExp(
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
    function _t(e) {
      return (function (e) {
        const t = bt,
          n = e.match(t);
        if (n && n[2]) return n[2].split(".");
        throw new TypeError(
          `Expected a property expression, got "${e}".\n\n      A property expression should be a referentially transparent (no side-effects),\n      single-expression "getter" function.\n\n      Correct example: "function (x) { return x.some }" or "x => x.some".\n      Incorrect example: "function (x) { var y = x.some; return y }" or "({some}) => some"`
        );
      })(e.toString());
    }
    function vt(e) {
      return void 0 === e
        ? (e) =>
            pt(
              (t) => t[e],
              (t, n) => mt(e, t, n)
            )
        : pt(
            (t) => t[e],
            (t, n) => mt(e, t, n)
          );
    }
    let yt = 0;
    function wt(e) {
      if (yt < 10) {
        yt++;
        const t = `x.${e.join(".")}`,
          n = `'${e.join("', '")}'`;
        !(function (e) {
          "undefined" != typeof console && "function" == typeof console.error && console.error("[Focal]: " + e);
          try {
            throw new Error(e);
          } catch (e) {}
        })(
          `The property expression overload of Atom.lens and Lens.prop are deprecated and will be removed in next versions of Focal. Please use the key name overload for Atom.lens and Lens.key instead. You can convert your code by changing the calls:\n  a.lens(x => ${t}) to a.lens(${n}),\n  Lens.prop((x: T) => ${t}) to Lens.key<T>()(${n}).`
        );
      }
    }
    function Et(e) {
      return e && "function" == typeof e.schedule;
    }
    var xt = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Re(t, e),
          (t.prototype.notifyNext = function (e, t, n, i, r) {
            this.destination.next(t);
          }),
          (t.prototype.notifyError = function (e, t) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function (e) {
            this.destination.complete();
          }),
          t
        );
      })(De),
      St = (function (e) {
        function t(t, n, i) {
          var r = e.call(this) || this;
          return (r.parent = t), (r.outerValue = n), (r.outerIndex = i), (r.index = 0), r;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            this.parent.notifyNext(this.outerValue, e, this.outerIndex, this.index++, this);
          }),
          (t.prototype._error = function (e) {
            this.parent.notifyError(e, this), this.unsubscribe();
          }),
          (t.prototype._complete = function () {
            this.parent.notifyComplete(this), this.unsubscribe();
          }),
          t
        );
      })(De),
      kt = function (e) {
        return function (t) {
          for (var n = 0, i = e.length; n < i && !t.closed; n++) t.next(e[n]);
          t.complete();
        };
      };
    function Rt() {
      return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    }
    var Tt = Rt(),
      It = function (e) {
        return e && "number" == typeof e.length && "function" != typeof e;
      };
    function At(e) {
      return !!e && "function" != typeof e.subscribe && "function" == typeof e.then;
    }
    var Ft = function (e) {
      if (e && "function" == typeof e[je])
        return (
          (i = e),
          function (e) {
            var t = i[je]();
            if ("function" != typeof t.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
            return t.subscribe(e);
          }
        );
      if (It(e)) return kt(e);
      if (At(e))
        return (
          (n = e),
          function (e) {
            return (
              n
                .then(
                  function (t) {
                    e.closed || (e.next(t), e.complete());
                  },
                  function (t) {
                    return e.error(t);
                  }
                )
                .then(null, Fe),
              e
            );
          }
        );
      if (e && "function" == typeof e[Tt])
        return (
          (t = e),
          function (e) {
            for (var n = t[Tt](); ; ) {
              var i = void 0;
              try {
                i = n.next();
              } catch (t) {
                return e.error(t), e;
              }
              if (i.done) {
                e.complete();
                break;
              }
              if ((e.next(i.value), e.closed)) break;
            }
            return (
              "function" == typeof n.return &&
                e.add(function () {
                  n.return && n.return();
                }),
              e
            );
          }
        );
      var t,
        n,
        i,
        r = Ne(e) ? "an invalid object" : "'" + e + "'";
      throw new TypeError(
        "You provided " + r + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable."
      );
    };
    function Ct(e, t, n, i, r) {
      if ((void 0 === r && (r = new St(e, n, i)), !r.closed)) return t instanceof We ? t.subscribe(r) : Ft(t)(r);
    }
    function Ot(e, t) {
      return new We(function (n) {
        var i = new Me(),
          r = 0;
        return (
          i.add(
            t.schedule(function () {
              r !== e.length ? (n.next(e[r++]), n.closed || i.add(this.schedule())) : n.complete();
            })
          ),
          i
        );
      });
    }
    function Nt(e, t) {
      return t ? Ot(e, t) : new We(kt(e));
    }
    var Pt = {};
    function Mt() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = void 0,
        i = void 0;
      return (
        Et(e[e.length - 1]) && (i = e.pop()),
        "function" == typeof e[e.length - 1] && (n = e.pop()),
        1 === e.length && Oe(e[0]) && (e = e[0]),
        Nt(e, i).lift(new Dt(n))
      );
    }
    var Lt,
      Ut,
      Dt = (function () {
        function e(e) {
          this.resultSelector = e;
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new Bt(e, this.resultSelector));
          }),
          e
        );
      })(),
      Bt = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (i.resultSelector = n), (i.active = 0), (i.values = []), (i.observables = []), i;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            this.values.push(Pt), this.observables.push(e);
          }),
          (t.prototype._complete = function () {
            var e = this.observables,
              t = e.length;
            if (0 === t) this.destination.complete();
            else {
              (this.active = t), (this.toRespond = t);
              for (var n = 0; n < t; n++) {
                var i = e[n];
                this.add(Ct(this, i, void 0, n));
              }
            }
          }),
          (t.prototype.notifyComplete = function (e) {
            0 == (this.active -= 1) && this.destination.complete();
          }),
          (t.prototype.notifyNext = function (e, t, n) {
            var i = this.values,
              r = i[n],
              s = this.toRespond ? (r === Pt ? --this.toRespond : this.toRespond) : 0;
            (i[n] = t), 0 === s && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()));
          }),
          (t.prototype._tryResultSelector = function (e) {
            var t;
            try {
              t = this.resultSelector.apply(this, e);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(t);
          }),
          t
        );
      })(xt);
    class jt extends Ye {
      view(...e) {
        return void 0 !== e[0]
          ? "function" == typeof e[0]
            ? new Vt(this, e[0])
            : "string" == typeof e[0]
            ? new Vt(this, gt(...e.map(vt())).get)
            : new Vt(this, (t) => e[0].get(t))
          : this;
      }
    }
    class Ht extends jt {
      set(e) {
        this.modify(() => e);
      }
      lens(e, ...t) {
        return new Wt(
          this,
          "function" == typeof e
            ? (function (e) {
                const t = _t(e);
                return ft && wt(t), gt(...t.map(vt()));
              })(e)
            : "string" == typeof e
            ? gt(vt(e), ...t.map((e) => vt(e)))
            : e,
          a
        );
      }
    }
    class $t extends Ht {
      constructor(e) {
        super(e);
      }
      get() {
        return this.getValue();
      }
      modify(e) {
        const t = this.getValue(),
          n = e(t);
        a(t, n) || this.next(n);
      }
      set(e) {
        a(this.getValue(), e) || this.next(e);
      }
    }
    class Wt extends Ht {
      _source;
      _lens;
      _eq;
      constructor(e, t, n = a) {
        super(void 0), (this._source = e), (this._lens = t), (this._eq = n);
      }
      get() {
        return this._subscription ? this.getValue() : this._lens.get(this._source.get());
      }
      modify(e) {
        this._source.modify((t) => this._lens.modify(e, t));
      }
      set(e) {
        this._source.modify((t) => this._lens.set(e, t));
      }
      _onSourceValue(e) {
        const t = this.getValue(),
          n = this._lens.get(e);
        this._eq(t, n) || this.next(n);
      }
      _subscription = null;
      _refCount = 0;
      subscribe(...e) {
        this._subscription || (this._subscription = this._source.subscribe((e) => this._onSourceValue(e))), this._refCount++;
        const t = new Me(() => {
          --this._refCount <= 0 && this._subscription && (this._subscription.unsubscribe(), (this._subscription = null));
        });
        return t.add(super.subscribe(...e)), t;
      }
      unsubscribe() {
        this._subscription && (this._subscription.unsubscribe(), (this._subscription = null)), (this._refCount = 0), super.unsubscribe();
      }
    }
    class Vt extends jt {
      _source;
      _getter;
      _eq;
      constructor(e, t, n = a) {
        super(void 0), (this._source = e), (this._getter = t), (this._eq = n);
      }
      get() {
        return this._subscription ? this.getValue() : this._getter(this._source.get());
      }
      _onSourceValue(e) {
        const t = this.getValue(),
          n = this._getter(e);
        this._eq(t, n) || this.next(n);
      }
      _subscription = null;
      _refCount = 0;
      subscribe(...e) {
        this._subscription || (this._subscription = this._source.subscribe((e) => this._onSourceValue(e))), this._refCount++;
        const t = new Me(() => {
          --this._refCount <= 0 && this._subscription && (this._subscription.unsubscribe(), (this._subscription = null));
        });
        return t.add(super.subscribe(...e)), t;
      }
      unsubscribe() {
        this._subscription && (this._subscription.unsubscribe(), (this._subscription = null)), (this._refCount = 0), super.unsubscribe();
      }
    }
    class Gt extends jt {
      _sources;
      _combineFn;
      _eq;
      constructor(e, t, n = a) {
        super(void 0), (this._sources = e), (this._combineFn = t), (this._eq = n);
      }
      get() {
        return this._subscription ? this.getValue() : this._combineFn(this._sources.map((e) => e.get()));
      }
      _onSourceValues(e) {
        const t = this.getValue(),
          n = this._combineFn(e);
        this._eq(t, n) || this.next(n);
      }
      _subscription = null;
      _refCount = 0;
      subscribe(...e) {
        this._subscription || (this._subscription = Mt(this._sources).subscribe((e) => this._onSourceValues(e))), this._refCount++;
        const t = new Me(() => {
          --this._refCount <= 0 && this._subscription && (this._subscription.unsubscribe(), (this._subscription = null));
        });
        return t.add(super.subscribe(...e)), t;
      }
      unsubscribe() {
        this._subscription && (this._subscription.unsubscribe(), (this._subscription = null)), (this._refCount = 0), super.unsubscribe();
      }
    }
    !(function (e) {
      (e.create = function (e) {
        return new $t(e);
      }),
        (e.log = function (e, t) {
          const n = (e, t, n) => console.log("%c" + e, `color: ${t}; font-weight: bold`, n);
          let i = e.get();
          return (
            e.subscribe((e) => {
              "function" == typeof t
                ? t(i, e)
                : (console.group(`UPDATE ${t ? `TYPE: ${t} ` : ""}@ ${new Date().toTimeString()}`),
                  n("prev state", "#9E9E9E", i),
                  n("next state", "#4CAF50", e),
                  console.groupEnd()),
                (i = e);
            }),
            e
          );
        }),
        (e.combine = function (...e) {
          return new Gt(e.slice(void 0, -1), (t) => e[e.length - 1](...t));
        }),
        (e.fromObservable = function (t) {
          const n = new Ye(null),
            i = t.pipe(
              ((r = (t) => {
                const i = n.value;
                null === i ? n.next(e.create(t)) : i.set(t);
              }),
              function (e) {
                return e.lift(new Ze(r, s, o));
              }),
              ct()
            );
          var r, s, o;
          return new We((e) => {
            const t = new Me();
            return (
              t.add(n.pipe(ut((e) => !!e)).subscribe(e)),
              t.add(
                i.subscribe(
                  void 0,
                  (t) => e.error(t),
                  () => e.complete()
                )
              ),
              t
            );
          });
        });
    })(Lt || (Lt = {}));
    class qt {
      static getInstance() {
        if (void 0 === this._instanceShared) throw new Error("shared Env not inited yet");
        return this._instanceShared;
      }
      static initShared(e) {
        if (void 0 !== this._instanceShared) throw new Error("shared Env already inited");
        this._instanceShared = e;
      }
      constructor(e, t = Lt.create(!1), n = Lt.create(!1)) {
        (this._enableHistoryLoggerInProd = t),
          (this._enableAdvancedHistoryLoggerInProd = n),
          (this.enableHistoryLoggerInProd = (e = !0) => {
            e && !this._enableHistoryLoggerInProd.get()
              ? (console.warn("Debug reports have been enabled"), this._enableHistoryLoggerInProd.set(!0))
              : !e &&
                this._enableHistoryLoggerInProd.get() &&
                (console.warn("Debug reports have been disabled"), this._enableHistoryLoggerInProd.set(!1));
          }),
          (this.enableAdvancedHistoryLoggerInProd = (e = !0) => {
            e && !this._enableAdvancedHistoryLoggerInProd.get()
              ? (console.warn("Advanced logging has been enabled"), this._enableAdvancedHistoryLoggerInProd.set(!0))
              : !e &&
                this._enableAdvancedHistoryLoggerInProd.get() &&
                (console.warn("Advanced logging has been disabled"), this._enableAdvancedHistoryLoggerInProd.set(!1));
          });
        const i = e.testArgs,
          r = i && i.processEnv ? i.processEnv : Y.fromBrowserify(),
          s = X.getTargetEnv(r);
        this._initLogger(e, s);
        const o = (function (e, t, n, i, r, s) {
          const o = X.create(e, t, n, i, r, s);
          return Z.init(o), (self.GR_CFG = Z.get()), o;
        })(e.browser, e.extensionType, e.deploymentType, e.context, r, s);
        (this.context = e.context), (this.config = o);
      }
      _initLogger(e, t) {
        this.historyLogsService = pe.create({
          ...e.historyLoggerExtraArgs,
          enabledInProd: this._enableHistoryLoggerInProd,
          enableAdvancedInProd: this._enableAdvancedHistoryLoggerInProd
        });
        const n = "prod" !== t || "cs" !== e.context,
          i = {
            create: (e, t) => {
              return new we(
                e,
                { writer: new Se(), filterFn: n ? (e) => !0 : ((i = me.ERROR), (e) => _e(e.level) >= _e(i)) },
                this.historyLogsService,
                t
              );
              var i;
            }
          };
        this.logger = i;
      }
    }
    function zt() {
      return qt.getInstance();
    }
    !(function (e) {
      e.create = function (e, t) {
        return new ye(e, () => zt().logger.create(e, t));
      };
    })(Ut || (Ut = {}));
    const Kt = 1e3,
      Jt = 36e5,
      Yt = 24 * Jt;
    function Xt(e) {
      return e * Yt;
    }
    function Zt(e) {
      return e * Kt;
    }
    var Qt;
    !(function (e) {
      (e.lessThan1Week = "lessThan1Week"),
        (e.weekTo4Weeks = "weekTo4Weeks"),
        (e.moreThan4weeks = "moreThan4weeks"),
        (e.moreThan3Months = "moreThan3Months");
    })(Qt || (Qt = {}));
    new Map([
      [Date.now(), Qt.lessThan1Week],
      [Date.now() - Xt(7), Qt.weekTo4Weeks],
      [Date.now() - Xt(28), Qt.moreThan4weeks],
      [Date.now() - Xt(90), Qt.moreThan3Months]
    ]);
    const en = { stats: "ex_perfstats", csInit: "ex_csInitPerf", viewInjection: "viewInjectionPerf" };
    function tn(e) {
      const { _tag: t, ...n } = e;
      return { [en[e._tag]]: n };
    }
    var nn;
    function rn(e) {
      return "object" == typeof e && null !== e && "message" in e && "string" == typeof e.message;
    }
    !(function (e) {
      (e.INFO = "INFO"), (e.WARN = "WARN"), (e.ERROR = "ERROR");
    })(nn || (nn = {}));
    const sn = (e, t) => {
        if (0 === e.length) return 0;
        const n = [...e].sort((e, t) => e - t);
        if (t <= 0) return n[0];
        if (t >= 1) return n[n.length - 1];
        const i = ((n.length - 1) * (100 * t)) / 100,
          r = Math.floor(i),
          s = r + 1,
          o = i % 1;
        return n[r] * (1 - o) + n[s] * o;
      },
      on = (e) => e.reduce((e, t, n) => e + (t - e) / (n + 1), 0),
      an = (e, t) => {
        const n = void 0 === t ? on(e) : t;
        return e.length > 1 ? Math.sqrt(e.reduce((e, t) => e + (t - n) ** 2, 0) / (e.length - 1)) : 0;
      };
    var cn, un, ln;
    !(function (e) {
      function t() {
        return {
          dummy: !0,
          startMeasure: () => ({ endMeasure: () => {}, cancelMeasure: v }),
          measure: (e) => e(),
          measureAsync: (e) => e(),
          custom: v
        };
      }
      (e.dummy = t), (e.dummyFactoryInitialization = () => () => t());
    })(cn || (cn = {})),
      (function (e) {
        e.dummy = { flushMeasures: (e) => [], measure: (e, t) => t(), startMeasure: (e) => ({ endMeasure() {}, cancelMeasure() {} }) };
      })(un || (un = {})),
      (function (e) {
        let t;
        !(function (e) {
          let t;
          !(function (e) {
            let t;
            !(function (e) {
              (e.stats = "stats"), (e.csInit = "csInit"), (e.viewInjection = "viewInjection");
            })((t = e.Types || (e.Types = {})));
          })((t = e.Tagged || (e.Tagged = {})));
        })((t = e.Data || (e.Data = {}))),
          (e.getStats = function (e) {
            if (0 === e.length) return { ct: 0 };
            {
              const t = e.reduce((e, t) => Math.min(e, t), Number.MAX_VALUE),
                n = e.reduce((e, t) => Math.max(e, t), Number.MIN_VALUE),
                i = e.length >= 6 ? on(e) : void 0;
              return { ct: e.length, min: t, max: n, range: n - t, avg: i, stddev: void 0 !== i && e.length > 1 ? an(e, i) : void 0 };
            }
          });
      })(ln || (ln = {}));
    const dn = (e) => e.replace("www.", "");
    function hn(e) {
      const t = (e && e.ownerDocument) || document,
        n = t.location || t.defaultView.location;
      return n ? dn(n.hostname) : "";
    }
    function pn(e) {
      return "firefox" === ee().bundleInfo.browser && /^about:/.test(e) ? e : "" === e ? "" : dn(new URL(e).hostname);
    }
    function gn(e) {
      return mn.includes(e);
    }
    function fn(e = hn(), t = "other") {
      var n;
      return gn(e)
        ? null !==
            (n = (function (e) {
              return mn.getTopSiteId(e);
            })(e)) && void 0 !== n
          ? n
          : "null"
        : t;
    }
    const mn = new (class {
      constructor(e) {
        function t(e) {
          return `Invalid pattern "${e}": "*" is allowed only at start and/or end position`;
        }
        (this._equal = new Set()), (this._prefix = []), (this._suffix = []), (this._infix = []), (this._domain = []);
        for (const n of e)
          if (n.startsWith("**.")) this._domain.push(n.substring(3));
          else {
            const e = n.indexOf("*");
            if (-1 === e) this._equal.add(n);
            else if (e === n.length - 1) this._prefix.push(n.substring(0, e));
            else {
              if (0 !== e) throw new Error(t(n));
              {
                const e = n.indexOf("*", 1);
                if (-1 === e) this._suffix.push(n.substring(1));
                else {
                  if (e !== n.length - 1) throw new Error(t(n));
                  this._infix.push(n.substring(1, e));
                }
              }
            }
          }
      }
      getTopSiteId(e) {
        var t, n, i, r, s, o, a;
        return null !==
          (o =
            null !==
              (s =
                null !==
                  (r =
                    null !==
                      (i =
                        null !==
                          (n = null !== (t = this._equal.has(e) ? e : void 0) && void 0 !== t ? t : this._domain.find((t) => t === e)) &&
                        void 0 !== n
                          ? n
                          : (a = this._domain.find((t) => e.endsWith("." + t)))
                          ? "**." + a
                          : void 0) && void 0 !== i
                      ? i
                      : this._prefix.find((t) => e.startsWith(t))) && void 0 !== r
                  ? r
                  : this._suffix.find((t) => e.endsWith(t))) && void 0 !== s
              ? s
              : this._infix.find((t) => e.includes(t))) && void 0 !== o
          ? o
          : null;
      }
      includes(e) {
        return null !== this.getTopSiteId(e);
      }
    })([
      "mail.google.com",
      "translate.google.*",
      "docs.google.com",
      "web.whatsapp.com",
      "facebook.com",
      "outlook.*",
      "linkedin.com",
      "zendesk.*",
      "youtube.com",
      "twitter.com",
      "messenger.com",
      "*.slack.*",
      "*canvas*",
      "*instructure*",
      "trello.com",
      "editor.wix.com",
      "quizlet.com",
      "mail.yahoo.com",
      "*.force.*",
      "keep.google.com",
      "vk.com",
      "fanyi.baidu.com",
      "app.bullhornstaffing.com",
      "app.qa-world.com",
      "calendar.google.com",
      "papago.naver.com",
      "wordcounter.net",
      "blogger.*",
      "wattpad.com",
      "wordpress.com",
      "amazon.*",
      "smallseotools.com",
      "create.kahoot.it",
      "apps.rackspace.com",
      "basecamp.com",
      "varsitytutors.com",
      "canva.com",
      "fanyi.youdao.com",
      "reverso.net",
      "message.alibaba.com",
      "*schoology*",
      "*.blackboard.*",
      "classroom.google.com",
      "*upwork*",
      "business.facebook.com",
      "medium.com",
      "mail.aol.com",
      "workhub.transcribeme.com",
      "github.com",
      "overleaf.com",
      "chat.openai.com",
      "**.salesforce.com",
      "**.force.com",
      "**.zendesk.com",
      "**.microsoftonline.com",
      "**.outlook.com",
      "**.facebook.com",
      "**.messenger.com",
      "**.genesys.com",
      "**.cisco.com",
      "**.avaya.com",
      "**.oraclecloud.com",
      "**.five9.com",
      "**.tawk.to",
      "**.helpscout.com",
      "**.livechat.com",
      "**.intercom.com",
      "**.freshdesk.com",
      "**.liveagent.com",
      "**.hubspot.com",
      "google.com",
      "chat.google.com",
      "classroom.google.com",
      "quillbot.com",
      "notion.so",
      "**.peardeck.com",
      "discord.com",
      "**.officeapps.live.com",
      "student.desmos.com",
      "web.kamihq.com",
      "deepl.com",
      "upwork.com",
      "app.nearpod.com",
      "bard.google.com",
      "instagram.com",
      "teams.microsoft.com",
      "studio.youtube.com",
      "learning.amplify.com",
      "commonlit.org",
      "**.asana.com",
      "reddit.com",
      "forms.office.com",
      "sites.google.com",
      "*amazon.co*",
      "apps.studysync.com",
      "fiverr.com"
    ]);
    class bn {
      constructor(e) {
        this._onMeasure = e;
      }
      measure(e) {
        const t = performance.now();
        let n = !1;
        try {
          const i = e();
          return (n = !0), i;
        } finally {
          this._onMeasure(performance.now() - t, n);
        }
      }
      async measureAsync(e) {
        const t = performance.now();
        let n = !1;
        try {
          const i = await e();
          return (n = !0), i;
        } finally {
          this._onMeasure(performance.now() - t, n);
        }
      }
    }
    function _n(e) {
      return e instanceof Error
        ? (function (e) {
            if (e instanceof Error) {
              const { name: t, message: n, stack: i, errors: r, suppressed: s, cause: o, ...a } = e;
              return { ...a, name: t, message: n, stack: i, errors: r, suppressed: s, cause: o };
            }
            return e;
          })(e)
        : e instanceof ErrorEvent
        ? (function (e) {
            if (e instanceof ErrorEvent) {
              const { message: t, type: n, lineno: i, colno: r, filename: s, error: o, ...a } = e;
              return { ...a, message: t, type: n, lineno: i, colno: r, filename: s, error: o };
            }
            return e;
          })(e)
        : e instanceof PromiseRejectionEvent
        ? (function (e) {
            if (e instanceof PromiseRejectionEvent) {
              const { type: t, reason: n, ...i } = e;
              return { ...i, type: t, reason: n };
            }
            return e;
          })(e)
        : e;
    }
    function vn(e) {
      try {
        return JSON.stringify(e, (e, t) => _n(t));
      } catch (e) {
        return JSON.stringify({ json_error: "Cannot json stringify" });
      }
    }
    function yn(e, t) {
      return {
        json: vn(e),
        exception: t ? { name: t.name, message: t.message, stack: t.stack ? xn(t.stack) : void 0, ...(ce(t.extra) ? t.extra : {}) } : void 0
      };
    }
    function wn() {
      return zt().browserApi.baseUri;
    }
    const En = { chromium: ["<anonymous>", "native", "unknown location"], firefox: [], safari: ["[native code]"] };
    function xn(e, { browser: t = zt().config.bundleInfo.browser, extensionBaseUri: n = wn() } = {}) {
      if (!e) return e;
      const i = En["chrome" === t || "edge" === t ? "chromium" : t],
        r = (e) => i.some((t) => e.startsWith(t)) || (n && e.startsWith(n)),
        s = e.split("\n");
      if ("chrome" === t || "edge" === t) {
        const e = [];
        let t = 0;
        for (; t < s.length && !s[t].startsWith("    at "); ) e.push(s[t]), t++;
        for (; t < s.length; ) {
          const n =
            ((o = s[t]),
            (a = void 0),
            (c = void 0),
            (u = void 0),
            null === (u = null !== (c = null !== (a = Sn.exec(o)) && void 0 !== a ? a : kn.exec(o)) && void 0 !== c ? c : Rn.exec(o)) ||
            void 0 === u
              ? void 0
              : u[1]);
          n ? (r(n) ? e.push(s[t]) : e.push("    at <hidden>")) : e.push("    <unparsed>"), t++;
        }
        return e.join("\n");
      }
      if ("firefox" === t || "safari" === t)
        return s
          .map((e) => [e, "firefox" === t ? Tn(e) : In(e)])
          .map(([e, t]) => (void 0 === t ? "<unparsed>" : r(t) ? e : "<hidden>"))
          .join("\n");
      var o, a, c, u;
      m(t);
    }
    const Sn = /^ {4}at ([^(]*)$/,
      kn = /^ {4}at [^(]* \(([^()]*)\)$/,
      Rn = /^ {4}at eval \([^(]* \(([^()]*)\)\)$/;
    function Tn(e) {
      return e.split("@", 2)[1];
    }
    function In(e) {
      var t;
      return null !== (t = e.split("@", 2)[1]) && void 0 !== t ? t : e;
    }
    const An = Ut.create("lib.tracking.telemetry"),
      Fn = 0.1,
      Cn = 0.05,
      On = 0.01;
    var Nn;
    !(function (e) {
      e.getMapPageCount = (e) => (void 0 === e.mapPageCount ? void 0 : e.mapPageCount > 10 ? "10+" : e.mapPageCount);
    })(Nn || (Nn = {}));
    const Pn = (e) => e.substring(0, 5),
      Mn = (e, t) => {
        let n;
        try {
          n = JSON.stringify(t);
        } catch (t) {
          (n = `stringify fail: '${String(t)}', '${rn(t) ? t.message : "undefined"}'`), An.warn(n, e);
        }
        return n;
      };
    class Ln {
      constructor(
        e = v,
        t = v,
        n = v,
        i = v,
        r = !1,
        s = cn.dummyFactoryInitialization,
        o = v,
        a = v,
        c = (e) => 0.01,
        u = v,
        l = s((e, { hideUserInfo: t, ...n }) => {
          this._sendEvent({ logger: e, level: nn.INFO, hideUserInfo: t, ...tn(n) });
        }),
        d = v,
        h = v,
        p = v,
        g = v,
        f = v
      ) {
        (this._sendFelog = e),
          (this._sendFelogUsage = t),
          (this._setUserInfo = n),
          (this._setContainerId = i),
          (this._sendUsageMetrics = r),
          (this._sendFelogEvent = o),
          (this._sendFelogCrashLogs = a),
          (this._getUsageMetricsRate = c),
          (this._enableDataSharing = u),
          (this._createPerfLogger = l),
          (this._sendFelogMetricEvent = d),
          (this._sendFemetricsRate = h),
          (this._startFemetricsTimer = p),
          (this._endFemetricsTimer = g),
          (this._sendFemetricsTimer = f),
          (this._sendEvent = (e) => {
            try {
              this._sendFelogEvent(e);
            } catch (t) {
              An.warn(`Failed to send felog for ${JSON.stringify(e)}`, t);
            }
          }),
          (this._sendException =
            (e) =>
            (t, n, i, r = !0) => {
              let s;
              (s = i || (rn(t) ? t.message : String(t))),
                this._sendEvent({ message: s, ...e, sendToFemetrics: r, extra: { ...e.extra, ...yn(n, t) } });
            }),
          (this._sendUsageMetricsSamplingRatio = this._getUsageMetricsRate(ee().bundleInfo.browser)),
          (this.sendFemetricsRate = (e, t, n) => {
            this._sendFemetricsRate(e, t, n);
          }),
          (this.startFemetricsTimer = (e, t, n) => {
            this._startFemetricsTimer(e, t, performance.now(), n);
          }),
          (this.endFemetricsTimer = (e, t, n) => {
            this._endFemetricsTimer(e, t, performance.now(), n);
          }),
          (this.restoredBgConnection = (e) => {
            this._send("cs.connection.bg.restored", nn.INFO, { timeWithoutConnection: e });
          }),
          (this.initWithoutBgConnection = () => {
            this._send("cs.connection.bg.disconnected", nn.INFO);
          }),
          (this.fetchDefinitionsFail = () => {
            this._send("cs.connection.api.definition.failed", nn.WARN);
          }),
          (this.tooLongPageConfigInit = (e) => {
            this._send("cs.pageConfig.init.exceeded", nn.WARN, { initTime: e });
          }),
          (this.tooLongUserUpdateTime = (e) => {
            this._send("bg.state.user.update.exceeded", nn.WARN, { updateTime: e });
          }),
          (this.lostBgPageConnection = () => {
            this._send("cs.gbutton.bgConnection.lost", nn.INFO);
          }),
          (this.restoreBgPageConnection = (e) => {
            this._send("cs.gbutton.bgConnection.restored", nn.INFO, { time: e });
          }),
          (this.dynamicConfigLoadFromPrefsError = (e) => {
            this._sendSampled(On, "bg.dynamicConfig.prefs.load.error", nn.ERROR, { message: e });
          }),
          (this.dynamicConfigSaveToPrefsError = (e) => {
            this._sendSampled(On, "bg.dynamicConfig.prefs.save.error", nn.ERROR, { message: e });
          }),
          (this.dynamicConfigLoadFromServerError = (e) => {
            this._sendSampled(On, "bg.dynamicConfig.server.load.error", nn.ERROR, { message: e });
          }),
          (this.pageConfigCDNError = (e) => {
            this._send("cs.pageConfig.cdn.error", nn.ERROR, { message: e });
          }),
          (this.pageConfigLocalStorageError = (e, t) => {
            this._send("cs.pageConfig.localStorage.error", nn.INFO, { message: e, name: t });
          }),
          (this.pageConfigUpdated = (e, t) => {
            this._send("cs.pageConfig.updated", nn.INFO, { oldVersion: e, newVersion: t });
          }),
          (this.settingsPopupTimeout = () => {
            this._send("settings.popup.init.timeout", nn.WARN);
          }),
          (this.settingsUnsupportedShow = (e) => {
            this._send("settings.popup.state.unsupported.show", nn.INFO, { popupType: e });
          }),
          (this.gnarClientInitFail = (e) => {
            this._send("gnar.bg.tracking.gnar.init.fail", nn.WARN, { message: e });
          }),
          (this.bgTrackingInitFail = () => {
            this._send("debug.tracking.init.fail", nn.INFO);
          }),
          (this.userUpgradeClick = (e) => {
            this._send("cs.ui.action.upgradeClick", nn.INFO, { placement: e });
          }),
          (this.gGbUpHookClick = () => {
            this._send("cs.ui.gb.uphook.click", nn.INFO);
          }),
          (this.gButtonClick = () => {
            this._send("cs.ui.gbutton.click", nn.INFO);
          }),
          (this.unexpectedAnonymous = (e) => {
            this._send("debug.bg.session.unexpectedAnonymous", nn.INFO, e);
          }),
          (this.getDapiPropError = (e, t) => {
            const n = "bg.connection.dapi.getProp.error",
              i = Mn(n, { statusCode: e, message: t });
            this._sendEvent({ logger: n, level: nn.WARN, extra: { json: i }, sendToFemetrics: !0 });
          }),
          (this.getCheetahStatusError = (e, t) => {
            const n = "bg.connection.cheetahSettings.getStatus.error",
              i = Mn(n, { statusCode: e, message: t });
            this._sendEvent({ logger: n, level: nn.WARN, extra: { json: i }, sendToFemetrics: !0 });
          }),
          (this.bgApiServiceRequestSuccess = (e, t = "GET", n) => {
            this.sendFemetricsRate("info", {
              domain: e,
              context: n ? "accessToken enabled" : "accessToken not enabled",
              logger: "bg.api.service.request.success",
              message: `[${t.toUpperCase()}]`
            });
          }),
          (this.bgApiServiceRequestFailed = (e, t = "GET", n, i) => {
            this.sendFemetricsRate("warn", {
              domain: e,
              context: i ? "accessToken enabled" : "accessToken not enabled",
              message: `[${t.toUpperCase()}] ${n}`,
              logger: "bg.api.service.request.failed"
            });
          }),
          (this.setDapiPropError = (e, t) => {
            const n = "bg.connection.dapi.setProp.error",
              i = Mn(n, { statusCode: e, message: t });
            this._sendEvent({ logger: n, level: nn.WARN, extra: { json: i }, sendToFemetrics: !0 });
          }),
          (this.toggleExtensionDefs = (e) => {
            this._send("bg.settings.definitions.toggle", nn.INFO, { enabled: e });
          }),
          (this.toggleExtension = (e, t, n) => {
            const i = { enabled: e, placement: t, domain: n };
            this._sendEvent({
              logger: "bg.settings.extension.toggle",
              level: nn.INFO,
              sendToFemetrics: !0,
              extra: { json: vn(i) },
              femetricsExtra: i
            });
          }),
          (this.disableUntilNextVisit = () => {
            this._send("cs.gbutton.disableUntilNextVisit", nn.INFO);
          }),
          (this.disableButtonClick = () => {
            this._send("cs.gbutton.disableButtonClick", nn.INFO);
          }),
          (this.cookieOverflow = (e, t) => {
            this._send("debug.bg.state.cookie.overflow", nn.INFO, { size: e, biggestCookie: t });
          }),
          (this.externalChangePlan = () => {
            this._send("bg.api.external.changePlan", nn.INFO);
          }),
          (this.externalChangeDialect = () => {
            this._send("bg.api.external.changeDialect", nn.INFO);
          }),
          (this.externalChangeUser = () => {
            this._send("bg.api.external.changeUsed", nn.INFO);
          }),
          (this.externalLogout = () => {
            this._send("bg.api.external.logout", nn.INFO);
          }),
          (this.safariLogoutFail = (e) => {
            this._sendEvent({ logger: "bg.safari.logout.error", level: nn.INFO, message: e, sendToFemetrics: !0 });
          }),
          (this.csInitialized = (e) => {
            if ("message" in e) {
              const t = fn();
              this._sendFemetricsRate("csInitialized", {
                message: e.message,
                isIframe: e.isIframe,
                stage: e.stage,
                domain: t,
                context: e.context
              });
              const n = ee().buildInfo.version;
              this._sendEvent({ level: nn.INFO, logger: "csFailInitializedVersion", extra: { json: JSON.stringify({ csVersion: n }) } }),
                this._sendFemetricsRate("csFailInitializedVersion", { csVersion: n }),
                "facebook.com" === t &&
                  this._sendEvent({
                    level: nn.INFO,
                    logger: "csInitializedFailed",
                    message: e.message,
                    extra: { json: JSON.stringify({ isIframe: e.isIframe, stage: e.stage, url: self.location.href, context: e.context }) },
                    hideUserInfo: !0
                  });
            } else this._sendFemetricsRate("csInitialized", e, ["firstInstall", "registrationDate"]);
          }),
          (this.acceptDataControl = () => {
            this._send("bg.dataControl.accepted", nn.INFO);
          }),
          (this.bgPage = {
            bgStarted: (e) => {
              this._sendFemetricsRate("bgStarted", e),
                "fail" === e.status &&
                  this._sendException({ logger: "bg.start.fail", femetricsExtra: { reason: e.reason }, level: nn.ERROR })(e.error, {
                    reason: e.reason
                  });
            },
            bgPageStarted: (e, t) => {
              this._sendFemetricsRate("bgPageStarted", { context: e, time: t });
            },
            bgPageInitFail: (e) => {
              this._send("bg.state.init.fail", nn.ERROR, { initAttempts: e });
            },
            bgPageInitTimeout: (e) => {
              this._send("bg.state.start.timeout", nn.WARN, { initTime: e });
            }
          }),
          (this.popup = {
            popupInitFail: (e, t) => {
              this._sendEvent({ logger: "popup.init.fail", level: nn.ERROR, message: e, extra: t, femetricsMessage: Pn(e) });
            },
            fetchTreatmentsFail: (e) => {
              this._sendFemetricsRate("popupFetchTreatmentsFails", { message: Pn(e) });
            },
            popupStateInitFail: (e) => {
              this._sendEvent({ logger: "popup.state.init.fail", level: nn.ERROR, message: e, femetricsMessage: Pn(e) });
            },
            initSuccess: () => {
              this._sendEvent({ logger: "popup.init.success", level: nn.INFO, sendToFemetrics: !0 });
            }
          }),
          (this.extensionUpdated = (e, t) => {
            this._send("bg.state.updated", nn.INFO, { currentVersion: e, previousVersion: t });
          }),
          (this.extensionUpdateFail = (e) => {
            this._send("bg.state.update.fail", nn.INFO, { previousVersion: e });
          }),
          (this.cannotGetInstallSource = () => {
            this._send("bg.getSource.fail", nn.WARN);
          }),
          (this.extensionInstall = (e) => {
            this._sendEvent({
              logger: "bg.state.install",
              level: nn.INFO,
              extra: { json: JSON.stringify({ source: e }) },
              sendToFemetrics: !0
            });
          }),
          (this.chromeContentScriptLoadError = (e, t) => {
            this._send("bg.chrome.cs.load.error", nn.WARN, { message: e, type: t });
          }),
          (this.reloadNotificationShow = () => {
            this._send("bg.ui.notification.tabsReload.show", nn.WARN);
          }),
          (this.reloadNotificationClick = () => {
            this._send("bg.ui.notification.tabsReload.click", nn.INFO);
          }),
          (this.fetchUserFail = (e, t, n) => {
            const i = "bg.user.fetch.fail",
              r = Mn(i, { body: t, statusCode: n, reason: e });
            this._sendEvent({ logger: i, level: nn.WARN, extra: { json: r }, sendToFemetrics: !0 });
          }),
          (this.getAccessTokenError = (e, t) =>
            this.sendFemetricsRate("warn", {
              logger: "bg.api.service.accessToken.error",
              level: nn.WARN,
              message: String(e),
              context: t ? "ignoreCache" : "withCache"
            })),
          (this.getAccessTokenSuccess = (e) =>
            this.sendFemetricsRate("info", {
              logger: "bg.api.service.accessToken.success",
              level: nn.INFO,
              context: e ? "ignoreCache" : "withCache"
            })),
          (this.frequentCookieChanges = (e) => {
            this._send("debug.cookie.onChange.error", nn.INFO, { canceled: e });
          }),
          (this.initializePropFromDapi = (e) => {
            this._send("bg.state.dapi.prop.initialize", nn.INFO, { name: e });
          }),
          (this.onboardingPopupShow = () => {
            this._send("cs.onboarding.popup.show", nn.INFO);
          }),
          (this.onboardingPopupCancel = () => {
            this._send("cs.onboarding.popup.cancel", nn.INFO);
          }),
          (this.onboardingTutorialShow = () => {
            this._send("cs.onboarding.tutorial.show", nn.INFO);
          }),
          (this.loginReminderPopupShow = () => {
            this._send("cs.gbutton.popup.loginReminder.show", nn.INFO);
          }),
          (this.loginReminderBadgeShow = () => {
            this._send("bg.state.user.loginReminder.enable", nn.INFO);
          }),
          (this.loginReminderCanceled = (e) => {
            this._sendFelog("bg.state.user.loginReminder.canceled", e, nn.ERROR);
          }),
          (this.unhandledExceptions = {
            unhandledBgPageException: (e, t) => {
              const n = "bg.unhandledException";
              An.error(n, new Error(e), t), this._sendSampledEvent(Cn, { logger: n, level: nn.ERROR, message: jn(e), extra: t });
            },
            unhandledBgPageRejection: (e, t) => {
              const n = "bg.unhandledRejection";
              An.error(n, new Error(e), t), this._sendSampledEvent(Cn, { logger: n, level: nn.ERROR, message: Bn(e), extra: t });
            },
            unhandledPopupException: (e, t) => {
              const n = "popup.unhandledException";
              An.error(n, new Error(e), t), this._sendEvent({ logger: n, level: nn.ERROR, message: e, extra: t, femetricsMessage: Pn(e) });
            },
            unhandledPopupRejection: (e, t) => {
              const n = "popup.unhandledRejection";
              An.error(n, new Error(e), t), this._sendEvent({ logger: n, level: nn.ERROR, message: e, extra: t, femetricsMessage: Pn(e) });
            }
          }),
          (this.csUnhandled = ({ message: e, femetricsExtra: t, error: n, printAsWarning: i }) => {
            const r = "cs.unhandled";
            i ? An.warn(r, new Error(e)) : An.error(r, new Error(e)),
              this._sendEvent({
                logger: r,
                level: i ? nn.WARN : nn.ERROR,
                message: e,
                femetricsExtra: t,
                sendToFemetrics: !0,
                extra: n ? yn({}, n) : void 0
              });
          }),
          (this.csCrash = w((e, t) => {
            An.error("cs.crash", new Error(e)), this._sendEvent({ logger: "cs.crash", level: nn.ERROR, message: e, femetricsExtra: t });
          })),
          (this.storageMigrationSucceeded = () => {
            this._send("bg.storageMigration.success", nn.INFO, {});
          }),
          (this.storageMigrationFailed = this._sendException({ logger: "bg.storageMigration.failure", level: nn.ERROR })),
          (this.storageApplyChangesFailed = this._sendException({ logger: "bg.storage.applyChanges.failure", level: nn.ERROR })),
          (this.cardShowAction = () => {
            this._sendSampled(Fn, "cs.editor.card.show", nn.INFO);
          }),
          (this.cardHideAction = () => {
            this._sendSampled(Fn, "cs.editor.card.hide", nn.INFO);
          }),
          (this.cardReplacementAction = () => {
            this._sendSampled(Fn, "cs.editor.card.replacement", nn.INFO);
          }),
          (this.cardAddToDictAction = () => {
            this._sendSampled(Fn, "cs.editor.card.addToDict", nn.INFO);
          }),
          (this.cardIgnoreAction = () => {
            this._sendSampled(Fn, "cs.editor.card.ignore", nn.INFO);
          }),
          (this.synonymCardShowAction = (e) => {
            this._sendSampled(Fn, "cs.editor.synonym.show", nn.INFO, { notFoundCard: e });
          }),
          (this.synonymCardHideAction = (e) => {
            this._sendSampled(Fn, "cs.editor.synonym.hide", nn.INFO, { notFoundCard: e });
          }),
          (this.synonymReplacementAction = () => {
            this._sendSampled(Fn, "cs.editor.synonym.replacement", nn.INFO);
          }),
          (this.dictCardShowAction = () => {
            this._sendSampled(Fn, "cs.editor.dict.show", nn.INFO);
          }),
          (this.dictCardHideAction = () => {
            this._sendSampled(Fn, "cs.editor.dict.hide", nn.INFO);
          }),
          (this.couldNotParseTransform = (e, t) => {
            this._send("cs.cards.transforms.parse.error", nn.WARN, { transformHTML: e, fallbackParseSuccessful: t });
          }),
          (this.disabledTabLoad = (e) => {
            this._sendUsage("usage.loadOnDisabledTab", nn.INFO, { accountType: e });
          }),
          (this.disabledTabByUserLoad = (e) => {
            this._sendUsage("usage.loadOnDisabledByUserTab", nn.INFO, { accountType: e });
          }),
          (this.initSession = (e, t, n, i) => {
            this._sendUsage("usage.session.init", nn.INFO, { isTopSite: gn(e), accountType: t, fieldType: n, fieldSupported: i }),
              this._sendMetric("usage.session.init", { domain: e, accountType: t, fieldType: n, fieldSupported: i });
          }),
          (this.cardFirstInteraction = (e, t) => {
            this._sendUsage("usage.card.interaction", nn.INFO, { accountType: e, fieldType: t });
          }),
          (this.gnar = {
            nextPingDateWriteError: (e) => this._send("bg.gnarTracker.nextPingDateWriteError", nn.ERROR, { error: e }),
            sendError: (e, t) =>
              this._sendException({ logger: "bg.gnarTracker.sendError", level: nn.ERROR, femetricsExtra: { context: t } })(e, {
                eventName: t
              }),
            trackBeforeSetUser: (e) => this._send("bg.gnarTracker.trackBeforeSetUser", nn.INFO, { millisSinceInit: e }),
            errorSetUser: this._sendException({ logger: "bg.gnarTracker.errorSetUser", level: nn.ERROR })
          }),
          (this._sendGdocsPageExecutionException = this._sendException({ logger: "cs.gdocs.pageExecution.exception", level: nn.ERROR })),
          (this.gdocs = {
            nonDocumentPage: (e) => {
              this._sendEvent({
                logger: "cs.gdocs.canvas.nonDocumentPage",
                level: nn.WARN,
                sendToFemetrics: !0,
                femetricsMessage: `isViewMode: ${e.isViewMode}`,
                femetricsExtra: { context: e.pageType }
              });
            },
            pageExecutionException: (e, t) => this._sendGdocsPageExecutionException(e, { isGDocsCanvas: t }),
            disabledBeforeForceEnable: w((e) => this._send("cs.gdocs.disabledBeforeForceEnable", nn.INFO, { disabledDate: e })),
            enabledBeforeForceEnable: w(() => this._send("cs.gdocs.enabledBeforeForceEnable", nn.INFO)),
            replacementValidation: (e) => {
              this._sendFemetricsRate("gdocsReplacementValidation", e);
            },
            eventTargetFail: w(this._sendException({ logger: "cs.gdocs.eventTargetFail", level: nn.ERROR })),
            sidebarFail: w((e, t) => this._sendException({ logger: "cs.gdocs.getSidebarFail", level: nn.ERROR })(e, { type: t })),
            layoutTreeAvailability: (e) => {
              this.sendFemetricsRate("gdocsInternalsLayoutTreeAvailability", e);
            }
          }),
          (this.canvasGdocs = {
            injectedException: w(this._sendException({ logger: "cs.gdocs.canvas.injected.exception", level: nn.ERROR })),
            injectedError: E(
              (e, t, n, i) =>
                this._sendEvent({
                  logger: "cs.gdocs.canvas.injected.error",
                  level: nn.ERROR,
                  message: t,
                  extra: { json: vn({ context: e, data: n }) },
                  gdocsExtra: i,
                  femetricsExtra: { context: e }
                }),
              (e) => e
            ),
            injectedInfo: E(
              (e, t, n) =>
                this._sendEvent({
                  logger: "cs.gdocs.canvas.injected.info",
                  eventContext: e,
                  level: nn.INFO,
                  sendToFemetrics: !0,
                  gdocsExtra: t,
                  extra: { json: vn({ context: e, data: n }) },
                  femetricsExtra: { context: e }
                }),
              (e) => e
            ),
            initializationException: w((e, t, n) =>
              this._sendException({
                logger: "cs.gdocs.canvas.init.exception",
                level: nn.ERROR,
                gdocsExtra: n,
                femetricsExtra: { type: t }
              })(e, { type: t })
            ),
            initializationTimeout: w((e, t, n) =>
              this._sendEvent({
                logger: "cs.gdocs.canvas.init.timeout",
                level: nn.ERROR,
                message: `Initialization for ${t} timeout: ${e}ms`,
                extra: { json: vn({ type: t }) },
                gdocsExtra: n,
                femetricsExtra: { type: t }
              })
            ),
            creatingException: w((e, t) =>
              this._sendEvent({ logger: "cs.gdocs.canvas.creating.exception", level: nn.ERROR, message: e, gdocsExtra: t })
            ),
            initInterrupted: w((e) =>
              this._sendEvent({ logger: "cs.gdocs.canvas.interrupted", level: nn.ERROR, message: "Interrupted", gdocsExtra: e })
            ),
            dataSourceException: w((e, t) =>
              this._sendException({ logger: "cs.gdocs.canvas.dataSource.exception", level: nn.ERROR, femetricsExtra: { type: t } })(e, {
                type: t
              })
            ),
            error: E(
              (e, t, n, i, r) =>
                this._sendEvent({
                  logger: "cs.gdocs.canvas.error",
                  level: nn.ERROR,
                  message: t,
                  extra: yn({ type: e, message: t, data: i }, n),
                  femetricsExtra: { type: e, mappingName: null == r ? void 0 : r.mappingName }
                }),
              (e) => e,
              (e, t, n, i, r) => {
                this._sendFemetricsRate("gdocsError", {
                  type: e,
                  message: (t && t.substring(0, 20)) || "other",
                  mappingName: null == r ? void 0 : r.mappingName,
                  selectionDiff: "selectionService" === e ? (null == i ? void 0 : i.selectionDiff) : void 0
                });
              }
            ),
            warning: E(
              (e, t, n) =>
                this._sendEvent({
                  logger: "cs.gdocs.canvas.warning",
                  level: nn.WARN,
                  message: t,
                  extra: yn({ type: e, message: t, data: n })
                }),
              (e) => e
            ),
            trackSessionFinalResult: w((e, t) =>
              this._sendEvent({
                logger: "cs.gdocs.canvas.start.result",
                level: nn.INFO,
                gdocsExtra: t,
                sendToFemetrics: !0,
                femetricsExtra: { type: e }
              })
            ),
            started: (e) => this._sendEvent({ logger: "cs.gdocs.canvas.started", level: nn.INFO, sendToFemetrics: !0, gdocsExtra: e }),
            creating: (e) => this._sendEvent({ logger: "cs.gdocs.canvas.creating", level: nn.INFO, sendToFemetrics: !0, gdocsExtra: e }),
            showLongDocPopup: (e) =>
              this._sendEvent({ logger: "cs.gdocs.canvas.longDocPopup", level: nn.INFO, sendToFemetrics: !0, gdocsExtra: e }),
            showSharedDocPopup: (e) =>
              this._sendEvent({ logger: "cs.gdocs.canvas.sharedDocPopup", level: nn.INFO, sendToFemetrics: !0, gdocsExtra: e }),
            debugPageSearchFail: w((e) =>
              this._sendEvent({ logger: "cs.gdocs.canvas.pageSearch.debug", level: nn.INFO, extra: { json: vn({ data: e }) } })
            ),
            debugMappingFail: w((e) =>
              this._sendEvent({ logger: "cs.gdocs.canvas.mapping.debug", level: nn.INFO, extra: { json: vn({ data: e }) } })
            ),
            buildTextMapPerf: this._createPerfLogger("cs.gdocs.canvas.perf.textMap", 30),
            findPage: this._createPerfLogger("cs.gdocs.canvas.perf.findPage", 100),
            mappingPerf: (e) =>
              new bn((t) => {
                1e-4 > Math.random() && this._sendFemetricsTimer("gdocsMapping", t, { ...e, mapPageCount: Nn.getMapPageCount(e) });
              }),
            fullTextNotFound: w(() => this._send("cs.gdocs.canvas.fullTextNotFound", nn.WARN)),
            equationsRenderInfo: (e) => {
              this._sendFemetricsRate("gdocsEquationsRenderInfo", e);
            },
            mapping: ({ mapPageCount: e, attempts: t, mode: n, tableMode: i, partialRenderMode: r, renderRTL: s }) => {
              this._sendFemetricsRate("gdocsMapping", {
                mappingMode: n,
                tableMode: i,
                mapPageCount: e > 5 ? "5+" : e,
                mappingAttempts: t.length,
                partialRenderMode: r,
                renderRTL: s,
                ...t.reduce(
                  (e, t, n) => ({
                    ...e,
                    [`mapping${n}_name`]: t.name,
                    [`mapping${n}_success`]: t.success,
                    [`mapping${n}_mappedPages`]: "number" == typeof t.mappedPageCount && t.mappedPageCount > 5 ? "5+" : t.mappedPageCount
                  }),
                  {}
                )
              });
            },
            mappingFailedInfo: (e) => {
              this._sendFemetricsRate("gdocsMappingFailedInfo", e);
            },
            mappingStats: (e) => {
              this._sendFemetricsRate("gdocsMappingStats", e, ["os"]);
            },
            mappingPageStats: (e) => {
              this._sendFemetricsRate("gdocsMappingPageStats", e, ["os"]);
            },
            mappingStatsByTextLength: (e) => {
              this._sendFemetricsRate("gdocsMappingStatsByTextLength", e, ["os"]);
            },
            mappingPageStatsByTextLength: (e) => {
              this._sendFemetricsRate("gdocsMappingPageStatsByTextLength", e, ["os"]);
            },
            mappingStatsByTableMode: (e) => {
              this._sendFemetricsRate("gdocsMappingStatsByTableMode", e, ["os"]);
            },
            mappingPageStatsByTableMode: (e) => {
              this._sendFemetricsRate("gdocsMappingPageStatsByTableMode", e, ["os"]);
            },
            mappingMinPageGapsStats: (e) => {
              this._sendFemetricsRate("gdocsMappingMinPageGapsStats", e, ["os"]);
            },
            mappingMaxPageGapsStats: (e) => {
              this._sendFemetricsRate("gdocsMappingMaxPageGapsStats", e, ["os"]);
            },
            selectionPatched: (e) => {
              this._sendFemetricsRate("gdocsSelectionPatched", e);
            },
            trackFatalPopup: (e, t) => {
              this._sendFemetricsRate("gdocsTrackFatalPopup", {
                reason: (null == e ? void 0 : e.isBrowserExtFault) ? "extension" : "google",
                content: String(null == e ? void 0 : e.textContent).slice(0, 10),
                context: t ? "started" : "notStarted"
              });
            }
          }),
          (this.canvasGdocsSVG = {
            error: E(
              (e, t, n, i, r) =>
                this._sendEvent({
                  logger: "cs.gdocs.svg.error",
                  level: nn.ERROR,
                  message: t,
                  extra: yn({ type: e, message: t, data: i }, n),
                  femetricsExtra: { type: e, mappingName: null == r ? void 0 : r.mappingName }
                }),
              (e) => e
            ),
            buildTextMapPerf: this._createPerfLogger("cs.gdocs.svg.perf.textMap", 30)
          }),
          (this.gmailThreadContext = {
            warning: E(
              (e, t, n) =>
                this._sendEvent({
                  logger: "cs.threadContext.gmail.warning",
                  level: nn.WARN,
                  message: t,
                  extra: { json: vn({ type: e, message: t, data: n }) }
                }),
              (e) => e
            )
          }),
          (this.autoFix = {
            featureToggleClick: (e, t) => {
              this._sendFemetricsRate("autoFixFeatureToggleClick", { autoFixFeatureState: e, autoFixFeatureTogglePlacement: t });
            },
            attemptToApplyInParallel: (e) => {
              this._sendFemetricsRate("autoFixAttemptToApplyInParallel", { autoAlerApplierVersion: e });
            },
            attemptToApplyInParallelError: w((e, t) =>
              this._sendEvent({
                logger: "cs.autoFix.attemptToApplyInParallelError",
                level: nn.ERROR,
                sendToFemetrics: !0,
                autoFixExtra: { domain: e, autoAlerApplierVersion: t }
              })
            )
          }),
          (this.autoApply = {
            inconsistentRevertAlertError: w((e, t) =>
              this._sendEvent({
                logger: "cs.autoApply.inconsistentRevertAlert",
                level: nn.ERROR,
                sendToFemetrics: !0,
                autoApplyExtra: { domain: e, pname: t }
              })
            ),
            triggered: () => {
              this._sendFemetricsRate("autoApplyTriggered");
            },
            cardLooked: () => {
              this._sendFemetricsRate("autoApplyCardLooked");
            },
            revertClick: () => {
              this._sendFemetricsRate("autoApplyRevertClick");
            },
            reverted: () => {
              this._sendFemetricsRate("autoApplyReverted");
            },
            affectedByTextChange: () => {
              this._sendFemetricsRate("autoApplyAffectedByTextChange");
            },
            acceptClick: () => {
              this._sendFemetricsRate("autoApplyAcceptClick");
            },
            settingsClick: (e) => {
              this._sendFemetricsRate("autoApplySettingsClick", { autoApplySettingsMenuState: e });
            },
            turnOffUntilNextView: () => {
              this._sendFemetricsRate("autoApplyTurnOffUntilNextView");
            },
            integrationCreated: () => {
              this._sendFemetricsRate("autoApplyIntegrationCreated");
            }
          }),
          (this.knowledgeHub = {
            error: E(
              (e, t, n, i) =>
                this._sendEvent({
                  logger: "cs.knowledgeHub.error",
                  level: nn.ERROR,
                  message: t,
                  extra: { json: vn({ type: e, message: t, domain: n, data: i }) }
                }),
              (e) => e
            ),
            integrationCreated: (e, t) => {
              this._sendFemetricsRate("knowledgeHubIntegrationCreated", { site: e, integrationMode: t });
            },
            relatedMaterialsClick: (e) => {
              this._sendFemetricsRate("knowledgeHubRelatedMaterialsClick", { site: e });
            },
            pointPeopleClick: (e, t) => {
              this._sendFemetricsRate("knowledgeHubPointPeopleClick", { site: e, pointPeopleClickType: t });
            },
            descriptionCopyClick: (e) => {
              this._sendFemetricsRate("knowledgeHubDescriptionCopyClick", { site: e });
            },
            suggestEditButtonClick: (e) => {
              this._sendFemetricsRate("knowledgeHubSuggestEditButtonClick", { site: e });
            },
            featureToggleClick: (e, t) => {
              this._sendFemetricsRate("knowledgeHubFeatureToggleClick", { site: e, featureState: t });
            },
            bgApiError: (e, t) => {
              const n = "bg.knowledgeHub.error",
                i = Mn(n, { statusCode: e, message: t });
              this._sendEvent({ logger: n, level: nn.ERROR, extra: { json: i }, sendToFemetrics: !0 });
            },
            onboardingPopupShow: (e, t) => {
              this._sendFemetricsRate("knowledgeHubOnboardingPopupShow", { onboardingType: e, site: t });
            },
            onboardingNextButtonClick: (e, t, n) => {
              this._sendFemetricsRate("knowledgeHubOnboardingNextButtonClick", { onboardingType: e, site: t, step: n });
            },
            onboardingSkipButtonClick: (e, t, n) => {
              this._sendFemetricsRate("knowledgeHubOnboardingSkipButtonClick", { onboardingType: e, site: t, step: n });
            },
            onboardingCloseButtonClick: (e, t, n) => {
              this._sendFemetricsRate("knowledgeHubOnboardingCloseButtonClick", { onboardingType: e, site: t, step: n });
            }
          }),
          (this.cheetah = {
            info: E(
              (e, t, n) =>
                this._sendEvent({
                  logger: "cs.cheetah.info",
                  level: nn.INFO,
                  message: e.name,
                  extra: { json: vn({ ...e, sessionUuid: n, domain: t }) },
                  hideUserInfo: !0,
                  sendToFemetrics: !0
                }),
              (e) => e.name
            ),
            warning: E(
              (e, t, n) =>
                this._sendEvent({
                  logger: "cs.cheetah.warning",
                  level: nn.WARN,
                  message: e.name,
                  extra: { json: vn({ ...e, sessionUuid: n, domain: t }) },
                  hideUserInfo: !0,
                  sendToFemetrics: !0
                }),
              (e) => e.name
            ),
            error: E(
              (e, t, n) =>
                this._sendEvent({
                  logger: "cs.cheetah.error",
                  level: nn.ERROR,
                  message: e.name,
                  extra: { json: vn({ ...e, sessionUuid: n, domain: t }) },
                  hideUserInfo: !0,
                  sendToFemetrics: !0
                }),
              (e) => e.name
            ),
            sessionRestartTimeout: (e, t, n) =>
              this._sendEvent({
                logger: "cs.cheetah.error",
                level: nn.ERROR,
                message: "sessionRestartTimeout",
                extra: { json: vn({ name: "sessionRestartTimeout", sessionUuid: n, domain: t, waitingFor: e }) },
                hideUserInfo: !0,
                sendToFemetrics: !0
              })
          }),
          (this._cbLog = (e) =>
            E(
              (t, n, i, r) =>
                this._sendEvent({ logger: "cs.citationBuilder", level: e, citationBuilderExtra: i, message: n, extra: yn(void 0, r) }),
              (e) => e
            )),
          (this.citationBuilder = { error: this._cbLog(nn.ERROR), warning: this._cbLog(nn.WARN), info: this._cbLog(nn.INFO) }),
          (this.performance = {
            processInput: this._createPerfLogger("cs.fluid.processInput", 100),
            processAlerts: this._createPerfLogger("cs.fluid.processAlerts", 10),
            processFilterChange: this._createPerfLogger("cs.fluid.processFilterChange", 10),
            csInitialized: (e, t, n, i, r) => {
              this._createPerfLogger("cs.initialized").custom({
                _tag: ln.Data.Tagged.Types.csInit,
                domain: self.location.host,
                hideUserInfo: !0,
                loadTime: e,
                initTime: t,
                pageLoadTime: n,
                injectTime: i,
                error: r ? { message: r.message, stack: r.stack } : void 0
              });
            },
            viewInjection: (e) => {
              this._createPerfLogger("cs.viewInjection").custom({ _tag: ln.Data.Tagged.Types.viewInjection, ...e });
            }
          }),
          (this.autocorrect = {
            responseTime: this._createPerfLogger("cs.autocorrect.responseTime", 10),
            predictTime: this._createPerfLogger("cs.autocorrect.predictTime", 10),
            integrationCreated: () => {
              this._sendFemetricsRate("autoCorrectIntegrationCreated");
            },
            triggered: () => {
              this._sendFemetricsRate("autoCorrectTriggered");
            },
            cardLooked: () => {
              this._sendFemetricsRate("autoCorrectCardLooked");
            },
            revertClick: () => {
              this._sendFemetricsRate("autoCorrectRevertClick");
            },
            reverted: () => {
              this._sendFemetricsRate("autoCorrectReverted");
            },
            acceptClick: () => {
              this._sendFemetricsRate("autoCorrectAcceptClick");
            },
            settingsClick: (e) => {
              this._sendFemetricsRate("autoCorrectSettingsClick", { autoCorrectSettingsMenuState: e });
            },
            turnOffUntilNextView: () => {
              this._sendFemetricsRate("autoCorrectTurnOffUntilNextView");
            },
            affectedByTextChange: () => {
              this._sendFemetricsRate("autoCorrectAffectedByTextChange");
            }
          }),
          (this.assistant = {
            initTime: this._createPerfLogger("cs.assistant.initTime", 1),
            renderTime: this._createPerfLogger("cs.assistant.renderTime", 1),
            openTime: this._createPerfLogger("cs.assistant.openTime", 1),
            alertManagerError: this._sendException({ logger: "cs.assistant.alertManagerError", level: nn.ERROR })
          }),
          (this.proofit = {
            availabilityQuotaError: (e) => {
              this._sendEvent({ logger: "cs.proofit.availability_quota_error", level: nn.ERROR, extra: { json: JSON.stringify(e) } });
            },
            submitResponseError: (e) => {
              this._sendEvent({ logger: "cs.proofit.submit_response_error", level: nn.ERROR, extra: { json: JSON.stringify(e) } });
            },
            progressError: (e) => {
              this._sendEvent({ logger: "cs.proofit.progress_error", level: nn.ERROR, extra: { json: JSON.stringify(e) } });
            },
            progressRejected: (e) => {
              this._sendEvent({ logger: "cs.proofit.progress_rejected", level: nn.WARN, extra: { json: JSON.stringify(e) } });
            }
          }),
          (this.oauthExchangeError = (e) => {
            this._send("bg.oauth.exchange.error", nn.ERROR, { message: e });
          }),
          (this.chipmunkAPIError = (e) => {
            this._send("bg.chipmunk.api.error", nn.ERROR, { message: e });
          }),
          (this.getIterableError = (e) => {
            this._sendEvent({ logger: "bg.iterable.api.error", level: nn.WARN, extra: { json: e }, sendToFemetrics: !0 });
          }),
          (this.getMiseError = (e) => {
            this._sendEvent({ logger: "bg.mise.api.token.error", level: nn.WARN, extra: { json: e }, sendToFemetrics: !0 });
          }),
          (this.alerts = {
            inconsistentAlertWithText: (e, t) => {
              this._sendFemetricsRate("inconsistentAlertWithText", { context: e, source: t });
            },
            cannotShowInlineCard: (e) => {
              this._sendFemetricsRate("cannotShowInlineCard", { context: e });
            }
          }),
          (this.upgradeHooks = {
            showUpgradeHook: (e, t) => {
              this._sendFemetricsRate("showPremiumButton", { upgradeHookName: e, upgradeHookSlot: t });
            },
            clickUpgradeHook: (e, t) => {
              this._sendFemetricsRate("clickPremiumButton", { upgradeHookName: e, upgradeHookSlot: t });
            }
          }),
          (this.upgradeHooksExp = {
            upgradeHookExperimentPeek: (e, t, n) => {
              this._sendFemetricsRate("upgradeHookExperiment", { experimentName: e, experimentGroup: t, domain: fn(n) });
            },
            upgradeHookFirstHiddenPremiumAlertReceived: (e, t, n) => {
              this._sendFemetricsRate("upgradeHookFirstHiddenPremiumAlertReceived", {
                experimentName: e,
                experimentGroup: t,
                domain: fn(n)
              });
            },
            upgradeHookFirstSDUIReceivedFromCAPI: (e, t, n) => {
              this._sendFemetricsRate("upgradeHookFirstSDUIReceivedFromCAPI", { experimentName: e, experimentGroup: t, domain: fn(n) });
            },
            upgradeHookFeedRendered: (e, t, n) => {
              this._sendFemetricsRate("upgradeHookFeedRenderedWithUpgradeCard", { experimentName: e, experimentGroup: t, domain: fn(n) });
            },
            upgradeHookCardShown: (e, t, n) => {
              this._sendFemetricsRate("upgradeHookCardShown", { experimentName: e, experimentGroup: t, domain: fn(n) });
            }
          }),
          (this.sendToTabFailed = (e, t) => {
            this._sendSampledEvent(Cn, {
              logger: "bg.connection.sendToTabFailed",
              level: nn.ERROR,
              message: "send message to tab emit an error",
              extra: yn(e, t)
            });
          }),
          (this.debugReports = {
            downloadSuccessfully: (e, t) => {
              const n = "debugReports.downloadSuccessfully",
                i = Mn(n, { envContext: e, downloadEnvContext: t });
              this._sendEvent({ logger: n, level: nn.INFO, extra: { json: i }, sendToFemetrics: !0 });
            },
            downloadTimeout: (e, t) => {
              const n = "debugReports.downloadTimeout",
                i = Mn(n, { envContext: e, downloadEnvContext: t });
              this._sendEvent({ logger: n, level: nn.WARN, extra: { json: i }, sendToFemetrics: !0 });
            },
            downloadError: (e, t) => {
              const n = "debugReports.downloadError",
                i = Mn(n, { envContext: e, downloadEnvContext: t });
              this._sendEvent({ logger: n, level: nn.WARN, extra: { json: i }, sendToFemetrics: !0 });
            }
          }),
          (this.dialectSettingsError = (e) => {
            this._sendException({ logger: "bg.api.dialectService", level: nn.ERROR })(e);
          }),
          (this.serializeTransportMsgFailed = () => {
            this._sendFemetricsRate("error", {
              logger: "bg.serialize.transport.message.failed",
              level: nn.ERROR,
              message: "Failed to serialize rpc message"
            });
          }),
          (this.hiddenFieldInjectionFailed = () => {
            this._sendFemetricsRate("error", { logger: "cs.hiddenField.injection.failed", level: nn.ERROR, domain: fn() });
          }),
          (this.skipIntegrationForNonHtmlPage = () => {
            this._sendFemetricsRate("info", { logger: "cs.skip.integration.for.non.html.page", domain: Hn(self.location.hostname) });
          }),
          (this.backendManagedStorage = {
            error: (e, t) => {
              this._sendException({ logger: "bg.backendManagedStorage", level: nn.ERROR })(t, void 0, e);
            },
            warn: (e, t) => {
              const n = Mn("backendManagedStorage.warn", t);
              this._sendEvent({ logger: "bg.backendManagedStorage", level: nn.WARN, message: e, extra: { json: n } });
            },
            info: (e) => {
              this._sendEvent({ logger: "bg.backendManagedStorage", level: nn.INFO, message: e });
            }
          }),
          (this.replacement = {
            info: (e) => {
              this.sendFemetricsRate("replacementInfo", e, ["os", "userOrganizationType"]);
            },
            infoShort: (e) => {
              this.sendFemetricsRate("replacementInfoShort", e);
            },
            gdocs: (e) => {
              this.sendFemetricsRate("replacementInfo.gdocs", e, ["os"]);
            },
            contentEditable: (e) => {
              this.sendFemetricsRate("replacementInfo.contentEditable", e);
            },
            sessionCount: (e) => {
              this.sendFemetricsRate("replacementSessionCount", e);
            },
            sessionStats: (e) => {
              this.sendFemetricsRate("replacementSessionStats", e);
            },
            sessionStatsBySource: (e) => {
              this.sendFemetricsRate("replacementSessionStatsBySource", e);
            },
            sessionStatsByReplacementType: (e) => {
              this.sendFemetricsRate("replacementSessionStatsByReplacementType", e);
            },
            alert: (e) => {
              this.sendFemetricsRate("replacementInfo.alert", e);
            }
          });
      }
      _send(e, t, n) {
        const i = Mn(e, n);
        try {
          this._sendFelog(e, String(null == n ? void 0 : n.message), t, n ? { json: i } : void 0);
        } catch (t) {
          An.warn(`Failed to send felog for ${e}: '${rn(t) ? t.message : "undefined"}'`, t);
        }
      }
      _sendUsage(e, t, n) {
        if (this._sendUsageMetrics && this._sendUsageMetricsSamplingRatio > Math.random())
          try {
            this._sendFelogUsage(e, "", t, n);
          } catch (t) {
            An.warn(`Failed to send usage felog for ${e}: '${rn(t) ? t.message : "undefined"}'`, t);
          }
      }
      _sendSampled(e, t, n, i) {
        e > Math.random() && this._send(t, n, i);
      }
      _sendSampledEvent(e, t) {
        e > Math.random() && this._sendEvent(t);
      }
      _sendMetric(e, t) {
        this._sendFelogMetricEvent({ metricName: e, data: t });
      }
      sendCrashLogs(e, t) {
        try {
          this._sendFelogCrashLogs(t);
        } catch (t) {
          An.warn(`Failed to send crash data data for ${e}: '${rn(t) ? t.message : "undefined"}'`, t);
        }
      }
      setUserInfo(e) {
        this._setUserInfo(e);
      }
      setContainerId(e) {
        this._setContainerId(e);
      }
      enableDataSharing() {
        this._enableDataSharing();
      }
      notificationShown(e) {
        this._send("cs.notification.show", nn.INFO, { type: e });
      }
      notificationHide(e) {
        this._send("cs.notification.hide", nn.INFO, { type: e });
      }
    }
    var Un, Dn;
    function Bn(e) {
      return e
        ? "Failed to fetch" === e
          ? Un.FAILED_FETCH
          : "Could not establish connection. Receiving end does not exist." === e ||
            e.includes("No frame with id") ||
            e.includes("No tab with id") ||
            (e.startsWith("Frame with ID") && e.endsWith("was removed."))
          ? Un.TAB_NOT_EXISTS
          : e.startsWith("IO error:")
          ? Un.IO_ERROR
          : "The browser is shutting down." === e
          ? Un.BROWSER_SHUTTING_DOWN
          : "No available storage method found." === e
          ? Un.NO_STORAGE_METHOD_FOUND
          : "this._firefox is undefined" === e
          ? Un.FIREFOX_UNDEFINED
          : "Load failed" === e
          ? Un.LOAD_FAILED
          : "Unexpected user type for login reminder" === e
          ? Un.UNEXPECTED_USER_TYPE
          : Un.OTHER
        : Un.EMPTY;
    }
    function jn(e) {
      return e
        ? e.includes("executing a cancelled action")
          ? Dn.ACTION_CANCELED
          : "Script error." === e
          ? Dn.SCRIPT_ERROR
          : "object unsubscribed" === e
          ? Dn.OBJECT_UNSUBSCRIBED
          : e.includes("is not a function")
          ? Dn.INVALID_FUNCTION
          : Dn.OTHER
        : Dn.EMPTY;
    }
    function Hn(e) {
      const t = (t) => e.endsWith(t),
        n = fn(e);
      if ("other" === n) {
        const e = [
          "pubmatic.com",
          "quantumdex.io",
          "gumgum.com",
          "aniview.com",
          "amazon-adsystem",
          "nextmillmedia.com",
          "doubleclick.net",
          "adsrvr.org",
          "adnxs.com",
          "msn.com"
        ].find(t);
        if (e) return e;
      }
      return n;
    }
    !(function (e) {
      let t;
      !(function (e) {
        e.fromPartial = (e) => e;
      })((t = e.Mock || (e.Mock = {})));
    })(Ln || (Ln = {})),
      (function (e) {
        (e.FAILED_FETCH = "FailedToFetch"),
          (e.TAB_NOT_EXISTS = "TabNotExists"),
          (e.IO_ERROR = "IOError"),
          (e.BROWSER_SHUTTING_DOWN = "BrowserShuttingDown"),
          (e.FIREFOX_UNDEFINED = "FirefoxUndefined"),
          (e.LOAD_FAILED = "LoadFailed"),
          (e.UNEXPECTED_USER_TYPE = "UnexpectedUserType"),
          (e.NO_STORAGE_METHOD_FOUND = "NoStorageMethodFound"),
          (e.EMPTY = "Empty"),
          (e.OTHER = "Other");
      })(Un || (Un = {})),
      (function (e) {
        (e.ACTION_CANCELED = "ActionCanceled"),
          (e.SCRIPT_ERROR = "ScriptError"),
          (e.OBJECT_UNSUBSCRIBED = "ObjectUnsubscribed"),
          (e.INVALID_FUNCTION = "InValidFunction"),
          (e.EMPTY = "Empty"),
          (e.OTHER = "Other");
      })(Dn || (Dn = {}));
    class $n {
      constructor(e, t, n = v) {
        (this.name = e),
          (this._source = t),
          (this._saveAction = n),
          (this.dummy = !1),
          (this.data = []),
          (this.customBuffer = []),
          (this._flush = () => {
            this.data.push(...this._source.flushMeasures(this.name)), this._saveAction(this.data);
          }),
          (this.custom = (e) => {
            this.customBuffer.push(e);
          }),
          (this.startMeasure = () => {
            const e = this._source.startMeasure(this.name),
              t = () => this._flush();
            return {
              endMeasure() {
                try {
                  const n = e.endMeasure();
                  return t(), n;
                } catch (e) {
                  return;
                }
              },
              cancelMeasure: () => e.cancelMeasure()
            };
          }),
          (this.measure = (e) => {
            const t = this._source.measure(this.name, e);
            try {
              this._flush();
            } catch (e) {}
            return t;
          }),
          (this.measureAsync = (e) => {
            const t = this._source.startMeasure(this.name);
            return e().then((e) => {
              try {
                t.endMeasure(), this._flush();
              } catch (e) {}
              return e;
            });
          });
      }
      getStats() {
        return this.data.length > 0
          ? { ...ln.getStats(this.data), median: ((e = this.data), sn(e, 0.5)), p90: sn(this.data, 0.9), p99: sn(this.data, 0.99) }
          : {};
        var e;
      }
    }
    class Wn {
      constructor(e) {
        (this._perf = e), (this._log = Ut.create("cs.telemetry.PerformanceMetricsImpl"));
      }
      flushMeasures(e) {
        try {
          const t = this._perf.getEntriesByName(e, "measure");
          return this._perf.clearMeasures(e), t.map((e) => e.duration);
        } catch (e) {
          return this._log.warn("failed to retrieve perf measurements", e), [];
        }
      }
      startMeasure(e) {
        const t = Math.random(),
          n = `__${e}_${t}-start`,
          i = `__${e}_${t}-end`;
        try {
          this._perf.mark(n);
        } catch (e) {
          return this._log.warn("could not start measure – ignoring measurement", e), { endMeasure: () => {}, cancelMeasure: v };
        }
        let r = !1;
        return {
          endMeasure: () => {
            if (!r) {
              r = !0;
              try {
                return this._perf.mark(i), this._perf.measure(e, n, i), this._perf.getEntriesByName(e, "measure")[0];
              } catch (e) {
                return void this._log.warn("could not complete measure", e);
              }
            }
          },
          cancelMeasure: () => {
            this._perf.clearMarks(n), this._perf.clearMarks(i);
          }
        };
      }
      measure(e, t) {
        const n = `__${e}-start`,
          i = `__${e}-end`;
        try {
          this._perf.mark(n);
        } catch (e) {
          return this._log.warn("could not start measure – ignoring measurement", e), t();
        }
        try {
          return t();
        } finally {
          try {
            this._perf.mark(i), this._perf.measure(e, n, i);
          } catch (e) {
            this._log.warn("could not complete measure", e);
          }
        }
      }
    }
    !(function (e) {
      e.create = function (t) {
        return void 0 !== t ? new e(t) : un.dummy;
      };
    })(Wn || (Wn = {}));
    const Vn = Ut.create("tracking.telemetry.performance.felog");
    class Gn {
      constructor(e, t, n, i = 0, r = 6e4) {
        (this.name = e),
          (this._sendMetrics = t),
          (this._source = n),
          (this._minBufferSize = i),
          (this._throttleTimeMs = r),
          (this.dummy = !1),
          (this._buffer = []),
          (this._flush = x(this._throttleTimeMs, () => {
            if ((this._buffer.push(...this._source.flushMeasures(this.name)), this._buffer.length >= this._minBufferSize)) {
              const e = ln.getStats(this._buffer);
              (this._buffer = []),
                Vn.info(`sending perf stats for ${this.name}`, e),
                this._sendMetrics(this.name, { _tag: ln.Data.Tagged.Types.stats, ...e });
            }
          })),
          (this.custom = (e) => {
            this._sendMetrics(this.name, e);
          }),
          (this.startMeasure = () => {
            const e = this._source.startMeasure(this.name),
              t = () => this._flush();
            return {
              endMeasure() {
                try {
                  const n = e.endMeasure();
                  return t(), n;
                } catch (e) {
                  return;
                }
              },
              cancelMeasure: () => e.cancelMeasure()
            };
          }),
          (this.measure = (e) => {
            const t = this._source.measure(this.name, e);
            try {
              this._flush();
            } catch (e) {}
            return t;
          }),
          (this.measureAsync = (e) => {
            const t = this._source.startMeasure(this.name);
            return e().then((e) => {
              try {
                t.endMeasure(), this._flush();
              } catch (e) {}
              return e;
            });
          });
      }
    }
    Ut.create("lib.tracking.logger");
    let qn;
    function zn() {
      if (!qn) {
        const e = zt().telemetryCallProvider;
        qn = new Ln(
          e.sendFelog,
          e.sendFelogUsageEvent,
          e.setUserInfo,
          e.setContainerId,
          ee().appConfig.felog.sendUsageMetrics,
          (function () {
            const e = ee().appConfig.felog.sendPerfMetricsType;
            return "local" === e
              ? ((t = Wn.create(self.performance)),
                (e) => (e) => {
                  const n = self.__GR_PERFORMANCE_STORE__ || {};
                  if (((self.__GR_PERFORMANCE_STORE__ = n), e in n)) return n[e];
                  {
                    const i = new $n(e, t);
                    return (n[e] = i), i;
                  }
                })
              : (
                  (e, t, n = 6e4) =>
                  (i) =>
                  (r, s) =>
                    e ? new Gn(r, i, t, s, n) : cn.dummy()
                )("send" === e, Wn.create(self.performance));
            var t;
          })(),
          e.sendFelogEvent,
          e.sendFelogCrashLogs,
          void 0,
          () => {
            var t;
            return null === (t = e.enableDataSharing) || void 0 === t ? void 0 : t.call(e);
          },
          void 0,
          e.sendFelogMetricEvent,
          e.sendFemetricsRate,
          e.startFemetricsTimer,
          e.endFemetricsTimer,
          e.sendFemetricsTimer
        );
      }
      return qn;
    }
    function Kn(e, t) {
      return function (n) {
        if ("function" != typeof e) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
        return n.lift(new Jn(e, t));
      };
    }
    var Jn = (function () {
        function e(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new Yn(e, this.project, this.thisArg));
          }),
          e
        );
      })(),
      Yn = (function (e) {
        function t(t, n, i) {
          var r = e.call(this, t) || this;
          return (r.project = n), (r.count = 0), (r.thisArg = i || r), r;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            var t;
            try {
              t = this.project.call(this.thisArg, e, this.count++);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.destination.next(t);
          }),
          t
        );
      })(De);
    function Xn(e, t, n, i) {
      return (
        Te(n) && ((i = n), (n = void 0)),
        i
          ? Xn(e, t, n).pipe(
              Kn(function (e) {
                return Oe(e) ? i.apply(void 0, e) : i(e);
              })
            )
          : new We(function (i) {
              Zn(
                e,
                t,
                function (e) {
                  arguments.length > 1 ? i.next(Array.prototype.slice.call(arguments)) : i.next(e);
                },
                i,
                n
              );
            })
      );
    }
    function Zn(e, t, n, i, r) {
      var s;
      if (
        (function (e) {
          return e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener;
        })(e)
      ) {
        var o = e;
        e.addEventListener(t, n, r),
          (s = function () {
            return o.removeEventListener(t, n, r);
          });
      } else if (
        (function (e) {
          return e && "function" == typeof e.on && "function" == typeof e.off;
        })(e)
      ) {
        var a = e;
        e.on(t, n),
          (s = function () {
            return a.off(t, n);
          });
      } else if (
        (function (e) {
          return e && "function" == typeof e.addListener && "function" == typeof e.removeListener;
        })(e)
      ) {
        var c = e;
        e.addListener(t, n),
          (s = function () {
            return c.removeListener(t, n);
          });
      } else {
        if (!e || !e.length) throw new TypeError("Invalid event target");
        for (var u = 0, l = e.length; u < l; u++) Zn(e[u], t, n, i, r);
      }
      i.add(s);
    }
    var Qn = (function (e) {
        function t(t, n) {
          var i = e.call(this, t, n) || this;
          return (i.scheduler = t), (i.work = n), (i.pending = !1), i;
        }
        return (
          Re(t, e),
          (t.prototype.schedule = function (e, t) {
            if ((void 0 === t && (t = 0), this.closed)) return this;
            this.state = e;
            var n = this.id,
              i = this.scheduler;
            return (
              null != n && (this.id = this.recycleAsyncId(i, n, t)),
              (this.pending = !0),
              (this.delay = t),
              (this.id = this.id || this.requestAsyncId(i, this.id, t)),
              this
            );
          }),
          (t.prototype.requestAsyncId = function (e, t, n) {
            return void 0 === n && (n = 0), setInterval(e.flush.bind(e, this), n);
          }),
          (t.prototype.recycleAsyncId = function (e, t, n) {
            if ((void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending)) return t;
            clearInterval(t);
          }),
          (t.prototype.execute = function (e, t) {
            if (this.closed) return new Error("executing a cancelled action");
            this.pending = !1;
            var n = this._execute(e, t);
            if (n) return n;
            !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
          }),
          (t.prototype._execute = function (e, t) {
            var n = !1,
              i = void 0;
            try {
              this.work(e);
            } catch (e) {
              (n = !0), (i = (!!e && e) || new Error(e));
            }
            if (n) return this.unsubscribe(), i;
          }),
          (t.prototype._unsubscribe = function () {
            var e = this.id,
              t = this.scheduler,
              n = t.actions,
              i = n.indexOf(this);
            (this.work = null),
              (this.state = null),
              (this.pending = !1),
              (this.scheduler = null),
              -1 !== i && n.splice(i, 1),
              null != e && (this.id = this.recycleAsyncId(t, e, null)),
              (this.delay = null);
          }),
          t
        );
      })(
        (function (e) {
          function t(t, n) {
            return e.call(this) || this;
          }
          return (
            Re(t, e),
            (t.prototype.schedule = function (e, t) {
              return void 0 === t && (t = 0), this;
            }),
            t
          );
        })(Me)
      ),
      ei = (function () {
        function e(t, n) {
          void 0 === n && (n = e.now), (this.SchedulerAction = t), (this.now = n);
        }
        return (
          (e.prototype.schedule = function (e, t, n) {
            return void 0 === t && (t = 0), new this.SchedulerAction(this, e).schedule(n, t);
          }),
          (e.now = function () {
            return Date.now();
          }),
          e
        );
      })(),
      ti = (function (e) {
        function t(n, i) {
          void 0 === i && (i = ei.now);
          var r =
            e.call(this, n, function () {
              return t.delegate && t.delegate !== r ? t.delegate.now() : i();
            }) || this;
          return (r.actions = []), (r.active = !1), (r.scheduled = void 0), r;
        }
        return (
          Re(t, e),
          (t.prototype.schedule = function (n, i, r) {
            return (
              void 0 === i && (i = 0),
              t.delegate && t.delegate !== this ? t.delegate.schedule(n, i, r) : e.prototype.schedule.call(this, n, i, r)
            );
          }),
          (t.prototype.flush = function (e) {
            var t = this.actions;
            if (this.active) t.push(e);
            else {
              var n;
              this.active = !0;
              do {
                if ((n = e.execute(e.state, e.delay))) break;
              } while ((e = t.shift()));
              if (((this.active = !1), n)) {
                for (; (e = t.shift()); ) e.unsubscribe();
                throw n;
              }
            }
          }),
          t
        );
      })(ei),
      ni = new ti(Qn);
    function ii(e, t) {
      var n;
      return (
        void 0 === e && (e = 0),
        void 0 === t && (t = ni),
        (Oe((n = e)) || !(n - parseFloat(n) + 1 >= 0) || e < 0) && (e = 0),
        (t && "function" == typeof t.schedule) || (t = ni),
        new We(function (n) {
          return n.add(t.schedule(ri, e, { subscriber: n, counter: 0, period: e })), n;
        })
      );
    }
    function ri(e) {
      var t = e.subscriber,
        n = e.counter,
        i = e.period;
      t.next(n), this.schedule({ subscriber: t, counter: n + 1, period: i }, i);
    }
    var si = (function () {
        function e() {
          return Error.call(this), (this.message = "no elements in sequence"), (this.name = "EmptyError"), this;
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })(),
      oi = (function () {
        function e() {
          return Error.call(this), (this.message = "argument out of range"), (this.name = "ArgumentOutOfRangeError"), this;
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })(),
      ai = new We(function (e) {
        return e.complete();
      });
    function ci(e) {
      return e
        ? (function (e) {
            return new We(function (t) {
              return e.schedule(function () {
                return t.complete();
              });
            });
          })(e)
        : ai;
    }
    function ui(e) {
      return function (t) {
        return 0 === e ? ci() : t.lift(new li(e));
      };
    }
    var li = (function () {
        function e(e) {
          if (((this.total = e), this.total < 0)) throw new oi();
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new di(e, this.total));
          }),
          e
        );
      })(),
      di = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (i.total = n), (i.count = 0), i;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            var t = this.total,
              n = ++this.count;
            n <= t && (this.destination.next(e), n === t && (this.destination.complete(), this.unsubscribe()));
          }),
          t
        );
      })(De);
    function hi(e) {
      return (
        void 0 === e && (e = null),
        function (t) {
          return t.lift(new pi(e));
        }
      );
    }
    var pi = (function () {
        function e(e) {
          this.defaultValue = e;
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new gi(e, this.defaultValue));
          }),
          e
        );
      })(),
      gi = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (i.defaultValue = n), (i.isEmpty = !0), i;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            (this.isEmpty = !1), this.destination.next(e);
          }),
          (t.prototype._complete = function () {
            this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
          }),
          t
        );
      })(De);
    function fi(e) {
      return (
        void 0 === e && (e = _i),
        function (t) {
          return t.lift(new mi(e));
        }
      );
    }
    var mi = (function () {
        function e(e) {
          this.errorFactory = e;
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new bi(e, this.errorFactory));
          }),
          e
        );
      })(),
      bi = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (i.errorFactory = n), (i.hasValue = !1), i;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            (this.hasValue = !0), this.destination.next(e);
          }),
          (t.prototype._complete = function () {
            if (this.hasValue) return this.destination.complete();
            var e = void 0;
            try {
              e = this.errorFactory();
            } catch (t) {
              e = t;
            }
            this.destination.error(e);
          }),
          t
        );
      })(De);
    function _i() {
      return new si();
    }
    function vi(e, t) {
      var n = arguments.length >= 2;
      return function (i) {
        return i.pipe(
          e
            ? ut(function (t, n) {
                return e(t, n, i);
              })
            : He,
          ui(1),
          n
            ? hi(t)
            : fi(function () {
                return new si();
              })
        );
      };
    }
    var yi = (function () {
        function e(e) {
          this.value = e;
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new wi(e, this.value));
          }),
          e
        );
      })(),
      wi = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (i.value = n), i;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            this.destination.next(this.value);
          }),
          t
        );
      })(De);
    function Ei() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = e[e.length - 1];
      return Et(n) ? (e.pop(), Ot(e, n)) : Nt(e);
    }
    function xi(e, t) {
      if (null != e) {
        if (
          (function (e) {
            return e && "function" == typeof e[je];
          })(e)
        )
          return (function (e, t) {
            return new We(function (n) {
              var i = new Me();
              return (
                i.add(
                  t.schedule(function () {
                    var r = e[je]();
                    i.add(
                      r.subscribe({
                        next: function (e) {
                          i.add(
                            t.schedule(function () {
                              return n.next(e);
                            })
                          );
                        },
                        error: function (e) {
                          i.add(
                            t.schedule(function () {
                              return n.error(e);
                            })
                          );
                        },
                        complete: function () {
                          i.add(
                            t.schedule(function () {
                              return n.complete();
                            })
                          );
                        }
                      })
                    );
                  })
                ),
                i
              );
            });
          })(e, t);
        if (At(e))
          return (function (e, t) {
            return new We(function (n) {
              var i = new Me();
              return (
                i.add(
                  t.schedule(function () {
                    return e.then(
                      function (e) {
                        i.add(
                          t.schedule(function () {
                            n.next(e),
                              i.add(
                                t.schedule(function () {
                                  return n.complete();
                                })
                              );
                          })
                        );
                      },
                      function (e) {
                        i.add(
                          t.schedule(function () {
                            return n.error(e);
                          })
                        );
                      }
                    );
                  })
                ),
                i
              );
            });
          })(e, t);
        if (It(e)) return Ot(e, t);
        if (
          (function (e) {
            return e && "function" == typeof e[Tt];
          })(e) ||
          "string" == typeof e
        )
          return (function (e, t) {
            if (!e) throw new Error("Iterable cannot be null");
            return new We(function (n) {
              var i,
                r = new Me();
              return (
                r.add(function () {
                  i && "function" == typeof i.return && i.return();
                }),
                r.add(
                  t.schedule(function () {
                    (i = e[Tt]()),
                      r.add(
                        t.schedule(function () {
                          if (!n.closed) {
                            var e, t;
                            try {
                              var r = i.next();
                              (e = r.value), (t = r.done);
                            } catch (e) {
                              return void n.error(e);
                            }
                            t ? n.complete() : (n.next(e), this.schedule());
                          }
                        })
                      );
                  })
                ),
                r
              );
            });
          })(e, t);
      }
      throw new TypeError(((null !== e && typeof e) || e) + " is not observable");
    }
    function Si(e, t) {
      return t ? xi(e, t) : e instanceof We ? e : new We(Ft(e));
    }
    var ki = (function (e) {
        function t(t) {
          var n = e.call(this) || this;
          return (n.parent = t), n;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            this.parent.notifyNext(e);
          }),
          (t.prototype._error = function (e) {
            this.parent.notifyError(e), this.unsubscribe();
          }),
          (t.prototype._complete = function () {
            this.parent.notifyComplete(), this.unsubscribe();
          }),
          t
        );
      })(De),
      Ri = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Re(t, e),
          (t.prototype.notifyNext = function (e) {
            this.destination.next(e);
          }),
          (t.prototype.notifyError = function (e) {
            this.destination.error(e);
          }),
          (t.prototype.notifyComplete = function () {
            this.destination.complete();
          }),
          t
        );
      })(De);
    function Ti(e, t) {
      if (!t.closed) return e instanceof We ? e.subscribe(t) : Ft(e)(t);
    }
    function Ii(e, t, n) {
      return (
        void 0 === n && (n = Number.POSITIVE_INFINITY),
        "function" == typeof t
          ? function (i) {
              return i.pipe(
                Ii(function (n, i) {
                  return Si(e(n, i)).pipe(
                    Kn(function (e, r) {
                      return t(n, e, i, r);
                    })
                  );
                }, n)
              );
            }
          : ("number" == typeof t && (n = t),
            function (t) {
              return t.lift(new Ai(e, n));
            })
      );
    }
    var Ai = (function () {
        function e(e, t) {
          void 0 === t && (t = Number.POSITIVE_INFINITY), (this.project = e), (this.concurrent = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new Fi(e, this.project, this.concurrent));
          }),
          e
        );
      })(),
      Fi = (function (e) {
        function t(t, n, i) {
          void 0 === i && (i = Number.POSITIVE_INFINITY);
          var r = e.call(this, t) || this;
          return (r.project = n), (r.concurrent = i), (r.hasCompleted = !1), (r.buffer = []), (r.active = 0), (r.index = 0), r;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
          }),
          (t.prototype._tryNext = function (e) {
            var t,
              n = this.index++;
            try {
              t = this.project(e, n);
            } catch (e) {
              return void this.destination.error(e);
            }
            this.active++, this._innerSub(t);
          }),
          (t.prototype._innerSub = function (e) {
            var t = new ki(this),
              n = this.destination;
            n.add(t);
            var i = Ti(e, t);
            i !== t && n.add(i);
          }),
          (t.prototype._complete = function () {
            (this.hasCompleted = !0), 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe();
          }),
          (t.prototype.notifyNext = function (e) {
            this.destination.next(e);
          }),
          (t.prototype.notifyComplete = function () {
            var e = this.buffer;
            this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete();
          }),
          t
        );
      })(Ri);
    function Ci(e) {
      return void 0 === e && (e = Number.POSITIVE_INFINITY), Ii(He, e);
    }
    function Oi() {
      return Ci(1);
    }
    function Ni() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return Oi()(Ei.apply(void 0, e));
    }
    function Pi() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = e[e.length - 1];
      return Et(n)
        ? (e.pop(),
          function (t) {
            return Ni(e, t, n);
          })
        : function (t) {
            return Ni(e, t);
          };
    }
    function Mi(e, t) {
      return function (n) {
        return n.lift(new Li(e, t));
      };
    }
    var Li = (function () {
        function e(e, t) {
          (this.compare = e), (this.keySelector = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new Ui(e, this.compare, this.keySelector));
          }),
          e
        );
      })(),
      Ui = (function (e) {
        function t(t, n, i) {
          var r = e.call(this, t) || this;
          return (r.keySelector = i), (r.hasKey = !1), "function" == typeof n && (r.compare = n), r;
        }
        return (
          Re(t, e),
          (t.prototype.compare = function (e, t) {
            return e === t;
          }),
          (t.prototype._next = function (e) {
            var t;
            try {
              var n = this.keySelector;
              t = n ? n(e) : e;
            } catch (e) {
              return this.destination.error(e);
            }
            var i = !1;
            if (this.hasKey)
              try {
                i = (0, this.compare)(this.key, t);
              } catch (e) {
                return this.destination.error(e);
              }
            else this.hasKey = !0;
            i || ((this.key = t), this.destination.next(e));
          }),
          t
        );
      })(De);
    class Di {
      constructor() {
        this._storage = this._storage || {};
      }
      get _storage() {
        return self.__CS_SHARE_STORAGE__;
      }
      set _storage(e) {
        self.__CS_SHARE_STORAGE__ = e;
      }
      clean() {
        this._storage = {};
      }
      set(e, t) {
        this._storage[e] = t;
      }
      get(e) {
        return this._storage[e];
      }
      getOnce(e) {
        const t = this._storage[e];
        return this.remove(e), t;
      }
      remove(e) {
        delete this._storage[e];
      }
    }
    var Bi, ji, Hi, $i;
    !(function (e) {
      e.syncDevtoolsInitialStateWithTab = "syncDevtoolsInitialStateWithTab";
    })(Bi || (Bi = {})),
      (function (e) {
        class t extends Error {
          constructor(e, t = 1e3) {
            super(`SafePromiseError: ${e}`), (this.stack = (super.stack || "").slice(t));
          }
        }
        function n(e) {
          return e.catch((e) => (e instanceof Error && !e.stack ? Promise.reject(new t(e.message)) : Promise.reject(e)));
        }
        (e.fromPromise = n),
          (e.fromAsync = function (e) {
            return (...t) => n(e(...t));
          }),
          (e.noop = e.fromPromise(Promise.resolve())),
          (e.create = function (e) {
            return n(new Promise(e));
          }),
          (e.sync = function (e) {
            return n(new Promise((t, n) => t(e())));
          }),
          (e.createCompletionSource = u),
          (e.delay = c);
      })(ji || (ji = {}));
    class Wi {
      constructor(e, t) {
        (this._transport = e),
          (this._log = t),
          (this._calls = new Map()),
          (this._sub = this._transport.inbound.subscribe((e) => {
            var t;
            const n = this._calls.get(e.id);
            if (n)
              try {
                "err" in e ? n.reject(e.err) : n.resolve(e.res);
              } finally {
                this._calls.delete(e.id);
              }
            else null === (t = this._log) || void 0 === t || t.warn(`received rpc call response for unregistered call ${e.id}`);
          })),
          (this.api = new Proxy({}, { get: (e, t) => ("then" === t ? void 0 : (...e) => this._handleCall(t, e)) }));
      }
      _handleCall(e, t) {
        let n = k.create();
        for (; this._calls.has(n); ) n = k.create();
        const i = ji.createCompletionSource();
        return this._calls.set(n, i), this._transport.outbound({ id: n, method: e, args: t }), i.promise;
      }
      dispose() {
        this._sub.unsubscribe();
      }
    }
    class Vi {
      constructor(e, t, n = k.create(), i = e) {
        (this._rpcMessageName = e),
          (this._message = t),
          (this._clientId = n),
          (this._inboundMessageName = i),
          (this.inbound = new We((e) => {
            const t = (t) => {
              t.clientId === this._clientId && e.next(t.data);
            };
            return this._message.on(this._inboundMessageName, t), () => this._message.off(this._inboundMessageName, t);
          })),
          (this.outbound = (e) => {
            this._message.sendBackground(this._rpcMessageName, { clientId: this._clientId, data: e });
          });
      }
    }
    class Gi extends Wi {
      constructor(e) {
        super(new Vi("cs-to-bg-rpc-1557421403805", e));
      }
    }
    function qi(e) {
      return "tunnel" !== e.tag;
    }
    !(function (e) {
      (e.rpcLegacyMessageName = "cs-to-bg-rpc-1587687052565"), (e.rpcLegacyObservableName = "cs-to-bg-observable-rpc-1587687052565");
    })(Hi || (Hi = {})),
      (function (e) {
        (e.isSubscribe = (e) => "action" in e.data && "subscribe" === e.data.action),
          (e.isUnsubscribe = (e) => "action" in e.data && "unsubscribe" === e.data.action),
          (e.isDispose = (e) => "action" in e.data && "dispose" === e.data.action),
          (e.isPong = (e) => "pong" in e.data),
          (e.isPing = (e) => "ping" in e.data),
          (e.isObservableResult = (e) => "subscribableId" in e);
      })($i || ($i = {}));
    const zi = Symbol();
    var Ki, Ji;
    function Yi(e) {
      return e instanceof We ? e : new We((t) => e.subscribe(t));
    }
    !(function (e) {
      (e.measure = (e) => (t) =>
        new We((n) =>
          t.subscribe(
            (t) => e(() => n.next(t)),
            (e) => n.error(e),
            () => n.complete()
          )
        )),
        (e.using = (e, t) =>
          (function (e, t) {
            return new We(function (n) {
              var i, r;
              try {
                i = e();
              } catch (e) {
                return void n.error(e);
              }
              try {
                r = t(i);
              } catch (e) {
                return void n.error(e);
              }
              var s = (r ? Si(r) : ai).subscribe(n);
              return function () {
                s.unsubscribe(), i && i.unsubscribe();
              };
            });
          })(e, t)),
        (e.doNothing = (e) => e);
    })(Ki || (Ki = {}));
    class Xi {
      constructor(e, t, n = Ut.create("GenericObservableRpcClient"), i) {
        (this._transport = e),
          (this._observableTransport = t),
          (this._log = n),
          (this._serverId = i),
          (this._calls = new Map()),
          (this._subscribeRelatedCalls = new Map()),
          (this._observables = new Map()),
          (this._subscribers = new Map()),
          (this._transportSubscription = Yi(this._transport.inbound)
            .pipe(ut(qi))
            .subscribe((e) => {
              this._processResponse(e);
            })),
          (this._observableTransportSubscription = Yi(this._observableTransport.inbound)
            .pipe(ut(qi))
            .subscribe((e) => {
              this._processObservableMessage(e);
            })),
          (this.api = new Proxy({}, { get: (e, t) => ("then" === t ? void 0 : (...e) => this._handleCall(t, e)) }));
      }
      _processResponse(e) {
        const t = this._calls.get(e.id);
        if (t)
          try {
            if ("err" in e) t.reject(e.err);
            else if ($i.isObservableResult(e))
              try {
                const n = new We((t) => this._createSubscribeHandler(e.subscribableId, t));
                this._observables.set(e.subscribableId, n), t.resolve(n);
              } catch (t) {
                this._observables.delete(e.subscribableId);
              }
            else t.resolve(this.transformResult(e.res));
          } finally {
            this._calls.delete(e.id);
          }
        else this._log.warn(`received rpc call response for unregistered call ${e.id}`);
      }
      transformResult(e) {
        return e;
      }
      _processObservableMessage(e) {
        if ("subscribed" in e) {
          const t = this._subscribeRelatedCalls.get(e.id);
          if (t)
            try {
              t.resolve();
            } finally {
              this._subscribeRelatedCalls.delete(e.id);
            }
          else this._log.warn(`received rpc call subscribed response for unregistered subscribe call ${e.id}`);
        } else if ("unsubscribed" in e) {
          const t = this._subscribeRelatedCalls.get(e.id);
          if (t)
            try {
              t.resolve();
            } finally {
              this._subscribeRelatedCalls.delete(e.id), this._subscribers.delete(e.id);
            }
          else this._log.warn(`received rpc call unsubscribed response for unregistered unsubscribe call ${e.id}`);
        } else if ("next" in e)
          try {
            const t = this._subscribers.get(e.subscriptionId);
            t
              ? t.subscriber.next(e.next)
              : this._log.warn(`received observable next message for unregistered subscription ${e.subscriptionId}`);
          } catch (t) {
            this._subscribers.delete(e.subscriptionId);
          }
        else if ("complete" in e)
          try {
            const t = this._subscribers.get(e.subscriptionId);
            t
              ? (t.subscriber.complete(), this._subscribers.delete(e.subscriptionId))
              : this._log.warn(`received observable complete for unregistered subscription ${e.subscriptionId}`);
          } catch (t) {
            this._subscribers.delete(e.subscriptionId);
          }
        else if ("err" in e)
          try {
            const t = this._subscribers.get(e.subscriptionId);
            t ? t.subscriber.error(e.err) : this._log.warn(`received observable error for unregistered subscription  ${e.subscriptionId}`);
          } finally {
            this._subscribers.delete(e.subscriptionId);
          }
        else if ("subErr" in e) {
          const t = this._subscribeRelatedCalls.get(e.id);
          try {
            const n = this._subscribers.get(e.id);
            n ? n.subscriber.error(e.subErr) : this._log.warn(`received subscription error response for unregistered call ${e.id}`);
          } finally {
            t && (t.reject(e.subErr), this._subscribeRelatedCalls.delete(e.id)),
              this._observables.delete(e.subscribableId),
              this._subscribers.delete(e.id);
          }
        } else if ("ping" in e)
          try {
            this._observables.get(e.ping)
              ? this._observableTransport.outbound({ pong: e.ping })
              : this._log.warn(`received ping for unregistered observable ${e.ping}`);
          } finally {
          }
      }
      _handleCall(e, t) {
        let n = k.create();
        for (; this._calls.has(n); ) n = k.create();
        const i = ji.createCompletionSource();
        this._calls.set(n, i);
        const r = t.map((e) => {
          return (t = e), Boolean(t) && t._tag === zi ? e.toJSON() : e;
          var t;
        });
        return this._transport.outbound({ id: n, method: e, args: r, serverId: this._serverId }), i.promise;
      }
      _createSubscribeHandler(e, t) {
        let n = k.create();
        for (; this._subscribeRelatedCalls.has(n); ) n = k.create();
        const i = ji.createCompletionSource();
        return (
          this._subscribeRelatedCalls.set(n, i),
          this._observableTransport.outbound({ id: n, subscribableId: e, action: "subscribe" }),
          this._subscribers.set(n, { subscribableId: e, subscriber: t }),
          () => {
            this._handleUnsubscribe(n, e);
          }
        );
      }
      _handleUnsubscribe(e, t) {
        let n = k.create();
        for (; this._subscribeRelatedCalls.has(n); ) n = k.create();
        const i = ji.createCompletionSource();
        return (
          this._subscribeRelatedCalls.set(n, i),
          this._observableTransport.outbound({ id: n, subscriptionId: e, subscribableId: t, action: "unsubscribe" }),
          this._subscribers.delete(e),
          i.promise
        );
      }
      dispose() {
        for (const e of this._observables.keys())
          this._observableTransport.outbound({ id: k.create(), subscribableId: e, action: "dispose" });
        this._observables.clear(),
          this._transportSubscription.unsubscribe(),
          this._observableTransportSubscription.unsubscribe(),
          this._calls.clear(),
          this._subscribeRelatedCalls.clear();
      }
    }
    class Zi extends Xi {
      constructor(e) {
        super(new Vi(Hi.rpcLegacyMessageName, e), new Vi(Hi.rpcLegacyObservableName, e));
      }
    }
    !(function (e) {
      (e.rpcLegacyMessageName = "cs-to-bg-static-capi-rpc-1668544923207"),
        (e.rpcLegacyObservableName = "cs-to-bg-static-capi-observable-rpc-1668544923207");
    })(Ji || (Ji = {}));
    class Qi extends Xi {
      constructor(e) {
        super(new Vi(Ji.rpcLegacyMessageName, e), new Vi(Ji.rpcLegacyObservableName, e));
      }
    }
    class er extends qt {
      static getInstance() {
        if (void 0 === this._instanceCSShared) throw new Error("nonBG Env not inited yet");
        return this._instanceCSShared;
      }
      static get isInited() {
        return void 0 !== this._instanceCSShared;
      }
      static initShared(e) {
        if (void 0 !== this._instanceCSShared) throw new Error("nonBG Env already inited");
        (this._instanceCSShared = e), qt.initShared(e);
      }
    }
    function tr() {
      return er.getInstance();
    }
    const nr = Ut.create("extension-api");
    class ir {
      constructor(e) {
        (this._baseApi = e),
          (this._log = Ut.create("BaseMessageService")),
          (this._initializedListenerEvents = new Set()),
          (this._listeners = {}),
          (this._logError = (e) => {
            this._log.error(`${ir.name} handle an error: ${e.message}`);
          }),
          (this.on = (e, t) => {
            var n;
            (this._listeners[e] = null !== (n = this._listeners[e]) && void 0 !== n ? n : []),
              this._listeners[e].push(t),
              this._initializedListenerEvents.has(e) ||
                (this._initializedListenerEvents.add(e),
                this._baseApi.listen(e, (...t) => {
                  var n;
                  const i = null !== (n = this._listeners[e]) && void 0 !== n ? n : [];
                  for (const e of i)
                    try {
                      e(...t);
                    } catch (e) {
                      this._logError(e);
                    }
                }));
          }),
          (this.once = (e, t) => {
            const n = (...i) => {
              this.off(e, n);
              try {
                t(...i);
              } catch (e) {
                this._logError(e);
              }
            };
            this.on(e, n);
          }),
          (this.off = (e, t) => {
            if (!this._listeners[e]) return;
            const n = this._listeners[e].indexOf(t);
            -1 !== n && this._listeners[e].splice(n, 1), 0 === this._listeners[e].length && delete this._listeners[e];
          });
      }
    }
    class rr extends ir {
      constructor(e) {
        super(e),
          (this._api = e),
          (this.sendBackground = (e, t) => {
            try {
              this._api.broadcastBackground(e, t);
            } catch (e) {
              this._logError(e);
            }
          });
      }
    }
    const sr = Zt(3);
    var or, ar, cr;
    !(function (e) {
      (e.default = "default"), (e.fallback = "fallback");
    })(or || (or = {})),
      (function (e) {
        (e.bgHistoryLogs = "bgHistoryLogs"), (e.popupHistoryLogs = "popupHistoryLogs"), (e.csHistoryLogs = "csHistoryLogs");
      })(ar || (ar = {}));
    class ur {
      constructor(e, t, n, i = Ut.create("DebugReportsGetterImpl")) {
        (this._envName = e), (this._getLogsDefault = t), (this._getLogsFallback = n), (this._log = i);
      }
      _getLogMessage(e, t) {
        return t === or.fallback ? `${e} from ${t}` : e;
      }
      async _getLogs(e, t, n) {
        const i = zt().context;
        this._log.debug(this._getLogMessage(`start get ${this._envName} logs`, t));
        try {
          const r = await Promise.race([
            e(),
            c(n).then(() => {
              zn().debugReports.downloadTimeout(i, this._envName),
                this._log.warn(this._getLogMessage(`get ${this._envName} logs timeout`, t));
            })
          ]);
          return r
            ? (zn().debugReports.downloadSuccessfully(i, this._envName),
              this._log.debug(this._getLogMessage(`successfully get ${this._envName}`, t)),
              r.map((e) => ({ ...e, loggerName: `${this._envName}.${e.loggerName}` })))
            : void this._log.warn(this._getLogMessage(`${this._envName} logs is not defined`, t));
        } catch (e) {
          return (
            zn().debugReports.downloadError(i, this._envName),
            void this._log.warn(this._getLogMessage(`fail to get ${this._envName} logs`, t), e)
          );
        }
      }
      get envName() {
        return this._envName;
      }
      async getLogs() {
        return (
          (await this._getLogs(this._getLogsDefault, or.default, sr)) ||
          (this._getLogsFallback ? await this._getLogs(this._getLogsFallback, or.fallback, 1e3) : void 0)
        );
      }
      static getLogsFromSessionStorageFallbackGetter(e, t = () => zt().browserApi.sessionStorage) {
        return () =>
          t()
            .get(e)
            .then((t) => {
              const n = t[e];
              return Array.isArray(n)
                ? n.map((e) => {
                    try {
                      return JSON.parse(e);
                    } catch (t) {
                      return {
                        level: me.WARN,
                        loggerName: ur.name,
                        message: "Cannot parsed backup data!",
                        timestamp: e.timestamp,
                        data: { json: e },
                        exeption: t
                      };
                    }
                  })
                : void 0;
            });
      }
    }
    !(function (e) {
      (e.UPDATE_BACKUP_STORAGE_TIMEOUT = Zt(5)), (e.BACKUP_STORAGE_LOGS_CAPACITY = 100);
    })(cr || (cr = {}));
    class lr {
      constructor(e, t, n, i = x, r = Ut.create(lr.name, { skipWriteToHistoryLogger: !0 })) {
        (this._sessionStorage = e),
          (this._key = t),
          (this._skipSetLogs = n),
          (this._throttle = i),
          (this._log = r),
          (this.get = () => this._get()),
          (this._get = ur.getLogsFromSessionStorageFallbackGetter(this._key, () => this._sessionStorage)),
          (this.set = this._throttle(cr.UPDATE_BACKUP_STORAGE_TIMEOUT, this._set.bind(this)));
      }
      async _set(e) {
        var t;
        if (await (null === (t = this._skipSetLogs) || void 0 === t ? void 0 : t.call(this)))
          return void this._log.trace("set logs is skipped");
        const n =
          null == e
            ? void 0
            : e.slice(-cr.BACKUP_STORAGE_LOGS_CAPACITY).map((e) => {
                try {
                  return JSON.stringify(e);
                } catch (t) {
                  return (
                    this._log.warn("cannot parse properly backup storage data", t, e),
                    JSON.stringify({
                      level: me.WARN,
                      loggerName: e.loggerName,
                      message: e.message,
                      timestamp: e.timestamp,
                      exception: `cannot parse properly backup storage data: ${t.message}`
                    })
                  );
                }
              });
        return (
          this._log.trace("set new logs to session storage"),
          this._sessionStorage
            .set({ [this._key]: n })
            .then(() => this._log.trace("logs was successfully set"))
            .catch((e) => {
              this._log.warn(`error: on set ${this._key} logs to backup storage`, e),
                this._sessionStorage
                  .remove(this._key)
                  .catch((e) => this._log.warn(`error: on remove ${this._key} logs from backup storage`, e));
            })
        );
      }
    }
    const dr = "tracking/RPC";
    class hr extends er {
      static get isInited() {
        return void 0 !== this._instance;
      }
      static getInstance() {
        if (void 0 === this._instance) throw new Error("cs Env not inited yet");
        return this._instance;
      }
      static init(e) {
        if (void 0 !== this._instance) throw new Error("cs Env already inited");
        const t = new hr(e);
        return (this._instance = t), er.initShared(t), t.browserApi.message.start && t.browserApi.message.start(), t;
      }
      constructor(e) {
        var t;
        super({
          browser: e.browser,
          extensionType: e.extensionType,
          deploymentType: e.deploymentType,
          context: "cs",
          historyLoggerExtraArgs: {
            enableHistoryLoggerUntil: (e) => {
              var t;
              null === (t = this.bgRpc) || void 0 === t || t.api.enableHistoryLoggerUntil(e);
            },
            disableHistoryLogger: () => {
              var e;
              null === (e = this.bgRpc) || void 0 === e || e.api.disableHistoryLogger();
            },
            backupStorage: new lr(e.browserApi.sessionStorage, ar.csHistoryLogs, async () => {
              var t, n;
              return (
                e.skipWriteLogsToBackupStorage ||
                document.hidden ||
                se() ||
                !(await (null === (t = this.bgRpc) || void 0 === t ? void 0 : t.api.isGateEnabled("SessionStorageLogsBackup"))) ||
                !(await (null === (n = this.bgRpc) || void 0 === n ? void 0 : n.api.isCurrentTabFocused()))
              );
            })
          }
        }),
          (this.browserApi = e.browserApi),
          (this.message = new rr(e.browserApi.message)),
          e.skipInitExtensionApi ||
            ((t = e.browserApi),
            self.extensionContentScriptApi && nr.warn("Content Script Extension Api init called more than once"),
            (self.extensionContentScriptApi = self.extensionContentScriptApi || t)),
          (this.bgRpc = new Gi(this.message)),
          (this.experimentClient = e.createExperimentClient(this.bgRpc)),
          (this.csShareStorage = new Di()),
          (this.capiBgRpc = new Zi(this.message)),
          (this.staticCapiBgRpc = new Qi(this.message)),
          (this.telemetryCallProvider = (function (e, t = Ut.create("lib.tracking.call.transport")) {
            return new Proxy(
              {},
              {
                get: (n, i) => {
                  if ("enableDataSharing" !== i)
                    return (...n) => {
                      Promise.race([
                        e.api.trackCall(dr, [i, ...n]).then(() => null),
                        c(1e4).then(() => new Error("timeout call through bg page"))
                      ])
                        .then((e) => e && t.warn("tracking call timeout", e))
                        .catch((e) => t.warn("tracking call failed, reason:", e));
                    };
                }
              }
            );
          })(this.bgRpc));
      }
    }
    function pr() {
      return hr.getInstance();
    }
    const gr = 2147483642;
    var fr;
    !(function (e) {
      function t(e, t) {
        try {
          for (const n of Object.keys(t)) if (t[n] && t[n](e)) return n;
          return null;
        } catch (e) {
          return null;
        }
      }
      (e.isSpecific = {
        draftJs: (e) => !(!e.hasAttribute("contenteditable") || !e.querySelector('[data-contents="true"] > [data-editor], [data-block]')),
        quill: (e) => e.classList.contains("ql-editor") || e.classList.contains("ql-container"),
        redactor: (e) => e.className.indexOf("redactor") > -1,
        prosemirror: (e) => e.hasAttribute("pm-container") || e.classList.contains("ProseMirror"),
        scribe: (e) => e.className.indexOf("scribe") > -1,
        trix: (e) => e.className.indexOf("trix") > -1,
        "medium-editor": (e) => e.className.indexOf("medium-editor") > -1,
        tinymce: (e) => {
          if ("IFRAME" !== e.tagName) return !1;
          const t = e;
          return (
            t.id.indexOf("mce") > -1 ||
            !!(t.contentDocument && t.contentDocument.querySelectorAll("#tinymce, .mce-content-body").length > 0)
          );
        },
        ckeditor4: (e) => e.matches("iframe.cke_wysiwyg_frame") || e.classList.contains("cke_editable"),
        ckeditor5: (e) => e.classList.contains("ck-editor__editable"),
        slate: (e) => "true" === e.getAttribute("data-slate-editor"),
        mobiledoc: (e) => e.classList.contains("__mobiledoc-editor")
      }),
        (e.isGeneric = {
          contenteditable: (e) => {
            const t = e.attributes.getNamedItem("contenteditable");
            return !(
              !(function (e) {
                return !(e instanceof HTMLSelectElement);
              })(e) ||
              !t ||
              ("true" !== t.value && "" !== t.value && "plaintext-only" !== t.value)
            );
          },
          textarea: (e) => "TEXTAREA" === e.tagName,
          iframe: (t) => {
            if ("IFRAME" === t.tagName) {
              const n = t;
              return !!(n.contentDocument && n.contentDocument.body && e.isGeneric.contenteditable(n.contentDocument.body));
            }
            return !1;
          },
          iframeHost: (t) => {
            if ("IFRAME" === t.tagName) {
              const n = t;
              return !(n.contentDocument && n.contentDocument.body && e.isGeneric.contenteditable(n.contentDocument.body));
            }
            return !1;
          }
        }),
        (e.get = function (n) {
          return { generic: t(n, e.isGeneric), specific: t(n, e.isSpecific) };
        });
    })(fr || (fr = {}));
    var mr = 1,
      br = (function () {
        return Promise.resolve();
      })(),
      _r = {};
    function vr(e) {
      return e in _r && (delete _r[e], !0);
    }
    var yr,
      wr = function (e) {
        var t = mr++;
        return (
          (_r[t] = !0),
          br.then(function () {
            return vr(t) && e();
          }),
          t
        );
      },
      Er = function (e) {
        vr(e);
      },
      xr = (function (e) {
        function t(t, n) {
          var i = e.call(this, t, n) || this;
          return (i.scheduler = t), (i.work = n), i;
        }
        return (
          Re(t, e),
          (t.prototype.requestAsyncId = function (t, n, i) {
            return (
              void 0 === i && (i = 0),
              null !== i && i > 0
                ? e.prototype.requestAsyncId.call(this, t, n, i)
                : (t.actions.push(this), t.scheduled || (t.scheduled = wr(t.flush.bind(t, null))))
            );
          }),
          (t.prototype.recycleAsyncId = function (t, n, i) {
            if ((void 0 === i && (i = 0), (null !== i && i > 0) || (null === i && this.delay > 0)))
              return e.prototype.recycleAsyncId.call(this, t, n, i);
            0 === t.actions.length && (Er(n), (t.scheduled = void 0));
          }),
          t
        );
      })(Qn),
      Sr = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          Re(t, e),
          (t.prototype.flush = function (e) {
            (this.active = !0), (this.scheduled = void 0);
            var t,
              n = this.actions,
              i = -1,
              r = n.length;
            e = e || n.shift();
            do {
              if ((t = e.execute(e.state, e.delay))) break;
            } while (++i < r && (e = n.shift()));
            if (((this.active = !1), t)) {
              for (; ++i < r && (e = n.shift()); ) e.unsubscribe();
              throw t;
            }
          }),
          t
        );
      })(ti),
      kr = new Sr(xr);
    function Rr() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = Number.POSITIVE_INFINITY,
        i = null,
        r = e[e.length - 1];
      return (
        Et(r)
          ? ((i = e.pop()), e.length > 1 && "number" == typeof e[e.length - 1] && (n = e.pop()))
          : "number" == typeof r && (n = e.pop()),
        null === i && 1 === e.length && e[0] instanceof We ? e[0] : Ci(n)(Nt(e, i))
      );
    }
    function Tr(e, t, n) {
      return n
        ? Tr(e, t).pipe(
            Kn(function (e) {
              return Oe(e) ? n.apply(void 0, e) : n(e);
            })
          )
        : new We(function (n) {
            var i,
              r = function () {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return n.next(1 === e.length ? e[0] : e);
              };
            try {
              i = e(r);
            } catch (e) {
              return void n.error(e);
            }
            if (Te(t))
              return function () {
                return t(r, i);
              };
          });
    }
    function Ir(e) {
      var t = e.error;
      e.subscriber.error(t);
    }
    yr || (yr = {});
    var Ar = (function () {
      function e(e, t, n) {
        (this.kind = e), (this.value = t), (this.error = n), (this.hasValue = "N" === e);
      }
      return (
        (e.prototype.observe = function (e) {
          switch (this.kind) {
            case "N":
              return e.next && e.next(this.value);
            case "E":
              return e.error && e.error(this.error);
            case "C":
              return e.complete && e.complete();
          }
        }),
        (e.prototype.do = function (e, t, n) {
          switch (this.kind) {
            case "N":
              return e && e(this.value);
            case "E":
              return t && t(this.error);
            case "C":
              return n && n();
          }
        }),
        (e.prototype.accept = function (e, t, n) {
          return e && "function" == typeof e.next ? this.observe(e) : this.do(e, t, n);
        }),
        (e.prototype.toObservable = function () {
          var e, t;
          switch (this.kind) {
            case "N":
              return Ei(this.value);
            case "E":
              return (
                (e = this.error),
                new We(
                  t
                    ? function (n) {
                        return t.schedule(Ir, 0, { error: e, subscriber: n });
                      }
                    : function (t) {
                        return t.error(e);
                      }
                )
              );
            case "C":
              return ci();
          }
          throw new Error("unexpected notification kind value");
        }),
        (e.createNext = function (t) {
          return void 0 !== t ? new e("N", t) : e.undefinedValueNotification;
        }),
        (e.createError = function (t) {
          return new e("E", void 0, t);
        }),
        (e.createComplete = function () {
          return e.completeNotification;
        }),
        (e.completeNotification = new e("C")),
        (e.undefinedValueNotification = new e("N", void 0)),
        e
      );
    })();
    function Fr(e, t) {
      return (
        void 0 === t && (t = 0),
        function (n) {
          return n.lift(new Cr(e, t));
        }
      );
    }
    var Cr = (function () {
        function e(e, t) {
          void 0 === t && (t = 0), (this.scheduler = e), (this.delay = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new Or(e, this.scheduler, this.delay));
          }),
          e
        );
      })(),
      Or = (function (e) {
        function t(t, n, i) {
          void 0 === i && (i = 0);
          var r = e.call(this, t) || this;
          return (r.scheduler = n), (r.delay = i), r;
        }
        return (
          Re(t, e),
          (t.dispatch = function (e) {
            var t = e.notification,
              n = e.destination;
            t.observe(n), this.unsubscribe();
          }),
          (t.prototype.scheduleMessage = function (e) {
            this.destination.add(this.scheduler.schedule(t.dispatch, this.delay, new Nr(e, this.destination)));
          }),
          (t.prototype._next = function (e) {
            this.scheduleMessage(Ar.createNext(e));
          }),
          (t.prototype._error = function (e) {
            this.scheduleMessage(Ar.createError(e)), this.unsubscribe();
          }),
          (t.prototype._complete = function () {
            this.scheduleMessage(Ar.createComplete()), this.unsubscribe();
          }),
          t
        );
      })(De),
      Nr = (function () {
        return function (e, t) {
          (this.notification = e), (this.destination = t);
        };
      })();
    function Pr(e, t) {
      return Ii(e, t, 1);
    }
    function Mr(e, t, n, i, r, s, o, a, c, u, l, d, h, p, g, f, m, b, _, v) {
      switch (arguments.length) {
        case 1:
          return e;
        case 2:
          return t(e);
        case 3:
          return n(t(e));
        case 4:
          return i(n(t(e)));
        case 5:
          return r(i(n(t(e))));
        case 6:
          return s(r(i(n(t(e)))));
        case 7:
          return o(s(r(i(n(t(e))))));
        case 8:
          return a(o(s(r(i(n(t(e)))))));
        case 9:
          return c(a(o(s(r(i(n(t(e))))))));
        case 10:
          return u(c(a(o(s(r(i(n(t(e)))))))));
        case 11:
          return l(u(c(a(o(s(r(i(n(t(e))))))))));
        case 12:
          return d(l(u(c(a(o(s(r(i(n(t(e)))))))))));
        case 13:
          return h(d(l(u(c(a(o(s(r(i(n(t(e))))))))))));
        case 14:
          return p(h(d(l(u(c(a(o(s(r(i(n(t(e)))))))))))));
        case 15:
          return g(p(h(d(l(u(c(a(o(s(r(i(n(t(e))))))))))))));
        case 16:
          return f(g(p(h(d(l(u(c(a(o(s(r(i(n(t(e)))))))))))))));
        case 17:
          return m(f(g(p(h(d(l(u(c(a(o(s(r(i(n(t(e))))))))))))))));
        case 18:
          return b(m(f(g(p(h(d(l(u(c(a(o(s(r(i(n(t(e)))))))))))))))));
        case 19:
          return _(b(m(f(g(p(h(d(l(u(c(a(o(s(r(i(n(t(e))))))))))))))))));
        case 20:
          return v(_(b(m(f(g(p(h(d(l(u(c(a(o(s(r(i(n(t(e)))))))))))))))))));
      }
    }
    var Lr;
    function Ur(e, t) {
      var n, i, r;
      const s =
        null ===
          (r =
            null === (i = null === (n = null == t ? void 0 : t.citationBuilder) || void 0 === n ? void 0 : n.domains) || void 0 === i
              ? void 0
              : i[e]) || void 0 === r
          ? void 0
          : r.disabled;
      return void 0 !== s ? !s : void 0;
    }
    function Dr(e, t) {
      return $r(t).some((t) => new RegExp(t.domain).test(e));
    }
    function Br(e) {
      var t, n;
      return !(null !== (n = null === (t = e.citationBuilder) || void 0 === t ? void 0 : t.disabled) && void 0 !== n && n);
    }
    function jr(e, t) {
      return $r(t).some((t) => {
        const n = new RegExp(t.domain),
          i = new RegExp(t.pathname);
        return n.test(e.hostname) && i.test(e.pathname);
      });
    }
    function Hr(e, t, n) {
      const i = Ur(e, n);
      return Br(t) && ((void 0 === i && Dr(e, t)) || !0 === i);
    }
    !(function (e) {
      const t = Ut.create("universal.cs.integration.observables"),
        n = (e) => Xn(e, "focus", { capture: !0 });
      function i(e) {
        return e instanceof Element && e.shadowRoot && e.shadowRoot.activeElement ? i(e.shadowRoot.activeElement) : e;
      }
      function r(e, t) {
        return { document: e, frame: t };
      }
      function s(e, n) {
        const i = r(e);
        return Ni(
          Si(e.getElementsByTagName("iframe")),
          n.pipe(
            Pr((e) => Array.from(e.addedNodes)),
            ut((e) => "IFRAME" === e.nodeName)
          )
        )
          .pipe(
            ut((n) =>
              (function (e, n) {
                try {
                  const t = e.src;
                  if (t && "about:blank" !== t && !t.startsWith("javascript")) {
                    return new URL(t, n.baseURI).origin === n.location.origin;
                  }
                  return !0;
                } catch (e) {
                  return t.warn("Error converting iframe's src to url", e), !0;
                }
              })(n, e)
            ),
            Ii((e) => {
              try {
                return (function (e) {
                  const t = e.contentDocument;
                  return t && "complete" === t.readyState;
                })(e)
                  ? Ei(e)
                  : Tr(
                      (t) => e.addEventListener("load", t, !0),
                      (t) => e.removeEventListener("load", t)
                    ).pipe(
                      Kn(() => e),
                      ui(1)
                    );
              } catch (e) {
                return t.warn("failed to receive iframes document", e), Ei(null);
              }
            }),
            Kn((e) => {
              try {
                if (null !== e && null !== e.contentDocument) return r(e.contentDocument, e);
              } catch (e) {
                t.warn("failed to receive iframes document", e);
              }
              return null;
            }),
            ut((e) => null !== e)
          )
          .pipe(Pi(i));
      }
      (e.createFocusObservable = function (e, t, r = n) {
        return s(e, t).pipe(
          Ii((e) =>
            (function (e, t, n) {
              const r = e.document,
                s = ii(Kt),
                o = e.frame
                  ? ai
                  : ((l = () =>
                      Ei(r.activeElement).pipe(
                        ut((e) => e && r.defaultView && r.defaultView.HTMLElement && e instanceof r.defaultView.HTMLElement)
                      )),
                    new We(function (e) {
                      var t;
                      try {
                        t = l();
                      } catch (t) {
                        return void e.error(t);
                      }
                      return (t ? Si(t) : ci()).subscribe(e);
                    })),
                a = t(r).pipe(Kn((e) => e.target)),
                c = e.frame
                  ? ai
                  : Rr(s, n).pipe(
                      ut((e) => !!r.defaultView && "visible" === r.visibilityState && !!r.activeElement),
                      Kn((e) => r.activeElement),
                      Mi()
                    ),
                u = Rr(c, a).pipe(
                  ut((e) => r.defaultView && r.defaultView.HTMLElement && e instanceof r.defaultView.HTMLElement),
                  Kn((e) => i(e))
                );
              var l;
              return Ni(o, u).pipe(Mi());
            })(e, r, t).pipe(Kn((t) => ({ element: t, owner: e })))
          ),
          Mi(),
          Fr(kr)
        );
      }),
        (e.createReadonlyObservable = function (e, t, n) {
          return s(e, t).pipe(
            Ii((e) =>
              (function (e, t, n) {
                const i = (e, t) => e.length === t.length && e.every((e, n) => e === t[n]);
                return t.pipe(
                  Kn(() => Mr(n, e.querySelectorAll.bind(e), Array.from)),
                  Mi(i),
                  Kn((e) => Mr(e, Array.from, Si)),
                  Ii((e) => e),
                  ut(y)
                );
              })(e.document, t, n).pipe(Kn((t) => ({ element: t, owner: e })))
            ),
            Mi(),
            Fr(kr)
          );
        }),
        (e.docInfo = r);
    })(Lr || (Lr = {}));
    function $r(e) {
      var t, n;
      return null !== (n = null === (t = e.citationBuilder) || void 0 === t ? void 0 : t.sources) && void 0 !== n ? n : [];
    }
    w(() => pn(document.location.href)),
      w((e) => {
        const t = document.location.href;
        return { url: t, domain: pn(t), isUrlAllowlisted: jr(document.location, e) };
      }),
      w(() => k.create());
    var Wr, Vr, Gr;
    !(function (e) {
      function t(e, t) {
        if (!e || !t) return !0;
        return !t.includes(e);
      }
      function n(e, t) {
        var n;
        return Boolean(
          (null == t ? void 0 : t.isDesktopIntegrationEnabled) && (null === (n = e.llamaIntegration) || void 0 === n ? void 0 : n.enabled)
        );
      }
      function i(e, n, i, r) {
        var s, o;
        const a = r ? pn(r) : void 0,
          c = n.isLlamaInstalled && (null === (s = i.llamaIntegration) || void 0 === s ? void 0 : s.enabled);
        return (
          t(a, null === (o = i.llamaIntegration) || void 0 === o ? void 0 : o.disabledByDomain) &&
          (c || "true" === e.showDesktopIntegrationExtensionToggle)
        );
      }
      (e.isEnabled = n),
        (e.showSettingPopupToggle = i),
        (e.showGrayGButton = function (e, t, r, s) {
          return i(t, e, r, s) && n(r, e);
        }),
        (e.isIntegrationEnabled = function (e, i, r) {
          var s;
          return !(!e || !r) && t(i, null === (s = r.llamaIntegration) || void 0 === s ? void 0 : s.disabledByDomain) && n(r, e);
        });
    })(Wr || (Wr = {})),
      (function (e) {
        const t = "grammarly-desktop-integration";
        (e.inject = function (e = document.documentElement) {
          var n, i;
          const r = `\n      div.${t} {\n        position: absolute;\n        width: 1px;\n        height: 1px;\n        padding: 0;\n        margin: -1px;\n        overflow: hidden;\n        clip: rect(0, 0, 0, 0);\n        white-space: nowrap;\n        border: 0;\n        -moz-user-select: none;\n        -webkit-user-select: none;\n        -ms-user-select:none;\n        user-select:none;\n      }\n\n      div.${t}:before {\n        content: attr(data-content);\n      }\n    `,
            s = document.createElement("style");
          s.textContent = r;
          const o = document.createElement("div");
          o.setAttribute("aria-label", "grammarly-integration"),
            o.setAttribute("role", "group"),
            o.setAttribute("tabindex", "-1"),
            o.setAttribute("class", t);
          const a = document.createElement(t);
          return (
            a.attachShadow({ mode: "open" }),
            a.setAttribute("data-grammarly-shadow-root", "true"),
            null === (n = a.shadowRoot) || void 0 === n || n.appendChild(s),
            null === (i = a.shadowRoot) || void 0 === i || i.appendChild(o),
            e.appendChild(a),
            {
              activate: ({ isActive: e, isUserDisabled: t, mode: n }) => {
                null == o ||
                  o.setAttribute("data-content", JSON.stringify(n ? { mode: n, isActive: e, isUserDisabled: t } : { isActive: e }));
              },
              remove: () => {
                var e;
                null === (e = null == a ? void 0 : a.parentNode) || void 0 === e || e.removeChild(a);
              }
            }
          );
        }),
          (e.isInjected = function () {
            return !!document.querySelector(t);
          });
      })(Vr || (Vr = {})),
      (function (e) {
        (e.full = "full"), (e.limited = "limited");
      })(Gr || (Gr = {}));
    class qr {
      constructor(e = Ut.create("DesktopHiddenFieldIntegration"), t = zn) {
        (this._log = e),
          (this._getFelog = t),
          (this._integration = null),
          (this._root = document.documentElement),
          (this._state = Lt.create(null)),
          (this.getActiveElement = () => {
            const e = document.activeElement,
              t = null == e ? void 0 : e.shadowRoot,
              n = null == e ? void 0 : e.contentDocument;
            return t && t.activeElement ? t.activeElement : n && n.activeElement ? n.activeElement : e;
          }),
          (this.updateState = (e, t, n, i) => {
            var r;
            const s = !Wr.isIntegrationEnabled(i, e, t),
              o = Wr.isEnabled(t, i) ? Gr.limited : Gr.full,
              a = !n;
            this._state.set({ isActive: s, mode: o, isUserDisabled: a }),
              a
                ? this.dispose()
                : null === (r = this.integration) || void 0 === r || r.activate({ isActive: s, mode: o, isUserDisabled: a });
          }),
          (this.updateForFocusedIntegration = () => {
            const e = this.getActiveElement(),
              t = null == e ? void 0 : e.closest("[role=dialog][aria-modal=true]"),
              n = null != t ? t : document.documentElement;
            return n !== this._root && ((this._root = n), this.dispose()), this.integration;
          }),
          (this.dispose = () => {
            this._integration && (this._integration.remove(), (this._integration = null));
          }),
          this._state.pipe(ut(Boolean)).subscribe((e) => {
            this._log.debug("update DesktopHiddenField state", e);
          });
      }
      get integration() {
        if (this._integration) return this._integration;
        if (Vr.isInjected()) return this._log.debug("DesktopHiddenField is already injected"), null;
        try {
          this._integration = Vr.inject(this._root);
        } catch (e) {
          return this._log.debug("DesktopHiddenField is not injected", e), this._getFelog().hiddenFieldInjectionFailed(), null;
        }
        return (
          this._log.debug("DesktopHiddenField is injected into " + (this._root === document.documentElement ? "root" : "dialog")),
          this._integration
        );
      }
    }
    var zr;
    !(function (e) {
      function t(e, t) {
        return n(e, t).pipe(ct(), Fr(kr));
      }
      function n(e, t) {
        return new We((n) => {
          const i = new MutationObserver((e) => n.next(e));
          return i.observe(e, t), () => i.disconnect();
        });
      }
      (e.create = t),
        (e.createUnsafe = n),
        (e.createFlattenHot = function (e, t) {
          return n(e, t).pipe(
            Pr((e) => e),
            ct()
          );
        }),
        (e.observeAttribute = function (e, n) {
          return t(e, { attributes: !0, attributeFilter: [n], subtree: !1, childList: !1 }).pipe(Kn((t) => e.getAttribute(n)));
        }),
        (e.observeStyle = function (e) {
          return t(e, { attributes: !0, attributeFilter: ["style"], subtree: !1, childList: !1 }).pipe(Kn((t) => e.style));
        }),
        (e.observeChildList = function (e) {
          return t(e, { attributes: !1, subtree: !1, childList: !0 }).pipe(Kn((t) => e.childNodes));
        });
    })(zr || (zr = {}));
    const Kr = "data-enable-grammarly",
      Jr = ["data-gramm_editor", "data-gramm", "data-gramm_id", "gramm_editor", "readonly", "disabled"],
      Yr = [
        "pm-container",
        { name: "class", value: "ProseMirror" },
        "data-synchrony",
        { name: "data-gramm", value: "false" },
        { name: Kr, value: "false" },
        { name: "aria-label", value: "Search Facebook" }
      ],
      Xr = ["changed-user", "changed-plan", "changed-dialect", "cleanup", "editor-fix", "llama-action"];
    function Zr(e, t) {
      let n = e.parentNode;
      for (; null !== n; ) {
        if (es(n, t)) return n;
        n = n.parentNode;
      }
      return !1;
    }
    function Qr(e) {
      return "true" === e.contentEditable || "plaintext-only" === e.contentEditable;
    }
    function es(e, t) {
      if (!e) return !1;
      const n = e.matches || e.msMatchesSelector || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector;
      return !!n && n.apply(e, [t]);
    }
    function ts(e, t = null, n) {
      return this.addEventListener(e, t, n), { off: () => ns.apply(this, [e, t, n]) };
    }
    function ns(e, t, n) {
      this.removeEventListener(e, t || null, n);
    }
    var is;
    !(function (e) {
      e.init = function (e, t) {
        const n = Ut.create("lib.external");
        !(function (e, t, n, i = document, r = !1, s = !1, o, a) {
          const c = e,
            u = i.documentElement;
          if (r) {
            const e = i.createElement("link");
            (e.href = c),
              (e.rel = "preload"),
              (e.as = "script"),
              (e.onload = () => {
                e.remove();
              }),
              u.prepend(e);
          }
          const l = i.createElement("script");
          (l.async = !1),
            (l.defer = !1),
            (l.src = c),
            (l.type = "text/javascript"),
            t && l.setAttribute("data-ext-id", t),
            n && l.setAttribute("data-ext-version", n),
            s && l.setAttribute("data-ext-minimal", "true"),
            (l.onload = () => {
              null == o || o(), l.remove();
            }),
            (l.onerror = () => {
              null == a || a();
            }),
            u.prepend(l);
        })(t("src/js/Grammarly-externalEventsInjectedCs.js"), te());
        const i = Xr.map((t) => {
          const i = `external:${t}`;
          return ts.call(document, i, ({ detail: t }) => {
            n.trace("external event", { event: i, detail: t }), e.sendBackground(i, t);
          });
        });
        return {
          dispose: () => {
            i.forEach((e) => e.off());
          }
        };
      };
    })(is || (is = {}));
    var rs = n(82989);
    var ss, os, as, cs;
    !(function (e) {
      const t = Ut.create("Reports");
      function n(e) {
        var t;
        const n = null === (t = self.document) || void 0 === t ? void 0 : t.createElement("a");
        (n.href =
          "data:application/octet-stream," +
          encodeURIComponent(
            (function (e) {
              const t = (e) => {
                try {
                  return JSON.stringify(e);
                } catch (t) {
                  return String(e);
                }
              };
              return [
                ["Level", "Logger", "Timestamp", "Message"].join("\t"),
                ...e.map((e) => {
                  const n = [e.level, e.loggerName, new Date(e.timestamp).toISOString(), e.message];
                  return e.data && n.push(t(e.data)), e.exception && n.push(t(e.exception)), n.join("\t");
                })
              ].join("\n");
            })(e)
          )),
          (n.target = "_blank"),
          (n.download = "grammarly-logs.tsv"),
          n.click();
      }
      async function i(e) {
        if ((t.debug("start download debug reports"), !tr().historyLogsService.isHistoryEnabled()))
          return t.debug("debug reports feature is not enabled"), alert("Logging is not enabled");
        if (
          !self.confirm(
            'Click on "OK," will attempt to download a file with the information needed to investigate the issue you are experiencing. This archive may include domains you have recently visited and the text from the document you are typing in. To minimize the amount of sensitive information you share with us, we recommend that you (1) open a new browser window, (2) visit only the website where you can reproduce this issue, and (3) type in a document that includes only text you are comfortable sharing. For more details, see our Privacy Policy (https://www.grammarly.com/privacy-policy).'
          )
        )
          return;
        t.debug("confirm download debug reports");
        const i = [];
        e.sort((e) => (e.envName === tr().context ? 1 : -1));
        try {
          await ((s = Kt), (o = r()), Promise.race([h(s), o]));
        } catch (e) {
          t.warn("cannot get latest app state", e);
        }
        var s, o;
        for (const t of e) {
          const e = await t.getLogs();
          i.push(...(null != e ? e : []));
        }
        i.sort((e, t) => e.timestamp - t.timestamp), n(i);
      }
      async function r() {
        t.info("latest experiments state", await tr().bgRpc.api.getExperimentTreatment()),
          t.info("latest storage state", await tr().browserApi.preferences.getAll()),
          t.info(
            "browser info",
            (() => {
              const e = navigator.userAgent,
                t = new rs.UAParser(e).getResult();
              return {
                browserName: t.browser.name,
                browserVersion: t.browser.version ? ((n = t.browser.version), n.split(".")[0]) : void 0,
                osName: t.os.name,
                userAgent: e
              };
              var n;
            })()
          );
      }
      (e.download = i),
        (e.initKeyboardShortcutHandler = function (e) {
          return Xn(self, "keydown")
            .pipe(ut((e) => "KeyS" === e.code && e.altKey && e.shiftKey && (e.ctrlKey || e.metaKey)))
            .subscribe(() => {
              i(e);
            });
        }),
        (e.logLatestState = r);
    })(ss || (ss = {})),
      (function (e) {
        let t;
        !(function (e) {
          (e.disableOnTab = "disableOnTab"),
            (e.reloadTab = "reloadTab"),
            (e.showOnboardingDialog = "showOnboardingDialog"),
            (e.hideGdocsSigninPopupMessage = "hideGdocsSigninPopupMessage"),
            (e.sendCsLogsToPopup = "sendCsLogsToPopup"),
            (e.downloadDebugReportsFromCS = "downloadDebugReportsFromCS");
        })((t = e.Kind || (e.Kind = {})));
      })(os || (os = {})),
      (function (e) {
        let t;
        !(function (e) {
          e.sendCsLogs = "sendCsLogs";
        })((t = e.Kind || (e.Kind = {})));
      })(as || (as = {})),
      (function (e) {
        function t(e) {
          const t = () => {
            e.bgRpc.api.sendToPopup({
              kind: as.Kind.sendCsLogs,
              option: { logs: e.historyLogsService.getLogs(), isIframeIntegration: se() }
            });
          };
          return (
            e.message.on(os.Kind.sendCsLogsToPopup, t),
            {
              dispose() {
                e.message.off(os.Kind.sendCsLogsToPopup, t);
              }
            }
          );
        }
        function n(e) {
          return [
            new ur("bg", () => e.bgRpc.api.getBGLogs(), ur.getLogsFromSessionStorageFallbackGetter(ar.bgHistoryLogs)),
            new ur(
              "cs",
              () => Promise.resolve(e.historyLogsService.getLogs()),
              ur.getLogsFromSessionStorageFallbackGetter(ar.csHistoryLogs)
            )
          ];
        }
        function i(e) {
          return (
            e.message.on(os.Kind.downloadDebugReportsFromCS, s),
            {
              dispose() {
                e.message.off(os.Kind.sendCsLogsToPopup, s);
              }
            }
          );
        }
        function r(e) {
          const t = se() ? new Me() : ss.initKeyboardShortcutHandler(n(e));
          return {
            dispose() {
              t.unsubscribe();
            }
          };
        }
        function s() {
          const e = n(pr());
          ss.download(e);
        }
        (e.initSendLogsToPopupHandler = t),
          (e.initDownloadDebugReportsListener = i),
          (e.initKeyboardShortcutHandler = r),
          (e.initListeners = function (e) {
            const n = [t(e), r(e), i(e)];
            return {
              dispose() {
                n.forEach((e) => {
                  e.dispose();
                });
              }
            };
          }),
          (e.download = s);
      })(cs || (cs = {}));
    var us = n(70201);
    function ls(e, t) {
      const n = e.anchorNode;
      if (!n) return !1;
      const i = Jr.map((e) => (Array.isArray(e) ? `[${e[0]}="${e[1]}"]` : `[${e}]`)).join(","),
        r = t.activeElement,
        s = e.toString().trim(),
        o = "TEXTAREA" !== n.tagName && "INPUT" !== n.tagName,
        a = !r || ("INPUT" !== r.tagName && "TEXTAREA" !== r.tagName),
        c = !Qr(n),
        u = !Zr(n, i) && !es(n, i),
        l =
          !Zr(n, "[contenteditable=true],[contenteditable=plaintext-only]") &&
          !(function (e) {
            let t = e.parentNode;
            for (; null !== t; ) {
              if (Qr(t)) return t;
              t = t.parentNode;
            }
            return !1;
          })(n);
      return !!(s && o && a && c && u && l);
    }
    var ds = (function () {
        function e(e, t) {
          (this.dueTime = e), (this.scheduler = t);
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new hs(e, this.dueTime, this.scheduler));
          }),
          e
        );
      })(),
      hs = (function (e) {
        function t(t, n, i) {
          var r = e.call(this, t) || this;
          return (r.dueTime = n), (r.scheduler = i), (r.debouncedSubscription = null), (r.lastValue = null), (r.hasValue = !1), r;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            this.clearDebounce(),
              (this.lastValue = e),
              (this.hasValue = !0),
              this.add((this.debouncedSubscription = this.scheduler.schedule(ps, this.dueTime, this)));
          }),
          (t.prototype._complete = function () {
            this.debouncedNext(), this.destination.complete();
          }),
          (t.prototype.debouncedNext = function () {
            if ((this.clearDebounce(), this.hasValue)) {
              var e = this.lastValue;
              (this.lastValue = null), (this.hasValue = !1), this.destination.next(e);
            }
          }),
          (t.prototype.clearDebounce = function () {
            var e = this.debouncedSubscription;
            null !== e && (this.remove(e), e.unsubscribe(), (this.debouncedSubscription = null));
          }),
          t
        );
      })(De);
    function ps(e) {
      e.debouncedNext();
    }
    function gs(e, t) {
      return "function" == typeof t
        ? function (n) {
            return n.pipe(
              gs(function (n, i) {
                return Si(e(n, i)).pipe(
                  Kn(function (e, r) {
                    return t(n, e, i, r);
                  })
                );
              })
            );
          }
        : function (t) {
            return t.lift(new _s(e));
          };
    }
    var fs,
      ms,
      bs,
      _s = (function () {
        function e(e) {
          this.project = e;
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new vs(e, this.project));
          }),
          e
        );
      })(),
      vs = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          return (i.project = n), (i.index = 0), i;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (e) {
            var t,
              n = this.index++;
            try {
              t = this.project(e, n);
            } catch (e) {
              return void this.destination.error(e);
            }
            this._innerSub(t);
          }),
          (t.prototype._innerSub = function (e) {
            var t = this.innerSubscription;
            t && t.unsubscribe();
            var n = new ki(this),
              i = this.destination;
            i.add(n), (this.innerSubscription = Ti(e, n)), this.innerSubscription !== n && i.add(this.innerSubscription);
          }),
          (t.prototype._complete = function () {
            var t = this.innerSubscription;
            (t && !t.closed) || e.prototype._complete.call(this), this.unsubscribe();
          }),
          (t.prototype._unsubscribe = function () {
            this.innerSubscription = void 0;
          }),
          (t.prototype.notifyComplete = function () {
            (this.innerSubscription = void 0), this.isStopped && e.prototype._complete.call(this);
          }),
          (t.prototype.notifyNext = function (e) {
            this.destination.next(e);
          }),
          t
        );
      })(Ri);
    !(function (e) {
      (e.anonymous = "anonymous"),
        (e.registered = "registered"),
        (e.premium = "premium"),
        (e.business = "business"),
        (e.edu = "edu"),
        (e.ngo = "ngo");
    })(fs || (fs = {})),
      (function (e) {
        function t(e) {
          return !e.anonymous && e.premium;
        }
        function n(e) {
          var t;
          return ["BUSINESS", "NGO", "GOV"].includes(
            (null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.organizationType) || ""
          );
        }
        function i(e) {
          return !!e.institutionInfo;
        }
        function r(e) {
          var t;
          return "EDU" === (null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.organizationType);
        }
        function s(e) {
          var t;
          return "NGO" === (null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.organizationType);
        }
        (e.getType = function (e) {
          return i(e) ? (s(e) ? fs.ngo : r(e) ? fs.edu : fs.business) : e.premium ? fs.premium : e.anonymous ? fs.anonymous : fs.registered;
        }),
          (e.isFree = function (e) {
            return !e.anonymous && !e.premium;
          }),
          (e.isPremium = t),
          (e.isFreeTrial = function (e) {
            return (
              !!(t(e) && e.customFields && e.customFields.frontend_premiumTrialEndDate) &&
              new Date() < new Date(e.customFields.frontend_premiumTrialEndDate)
            );
          }),
          (e.getUserRole = function (e, t) {
            var n;
            return null === (n = e.roles) || void 0 === n ? void 0 : n.find((e) => e.type === t);
          }),
          (e.isEdcBlocked = function (e) {
            return !!e.edc && !e.edc.compliant;
          }),
          (e.isDocsDisabled = function (e) {
            var t, n;
            return null !== (n = null === (t = e.editorFeatures) || void 0 === t ? void 0 : t.docsDisabled) && void 0 !== n && n;
          }),
          (e.hasRole = function (e) {
            return !!e.customFields && void 0 !== e.customFields.frontend_role && "" !== e.customFields.frontend_role;
          }),
          (e.hasSoundFluentGoals = function (e) {
            return !!e.customFields && void 0 !== e.customFields.frontend_soundFluent && "" !== e.customFields.frontend_soundFluent;
          }),
          (e.hasPrimaryLanguage = function (e) {
            return !!e.customFields && void 0 !== e.customFields.frontend_primaryLanguage && "" !== e.customFields.frontend_primaryLanguage;
          }),
          (e.isBusinessAdmin = function (e) {
            var t;
            return Boolean(n(e) && (null === (t = null == e ? void 0 : e.institutionInfo) || void 0 === t ? void 0 : t.admin));
          }),
          (e.doesUserBelongToBusinessInstitution = n),
          (e.doesUserBelongToInstitution = i),
          (e.doesUserBelongToEDUInstitution = r),
          (e.doesUserBelongToNGOInstitution = s),
          (e.isClaimed = function (e) {
            return e.groups.includes("claimed-invitation");
          });
        (e.isGrammarlyEmployee = function (e) {
          var t;
          return e.email.endsWith("@grammarly.com") && 624392205 === (null === (t = e.institutionInfo) || void 0 === t ? void 0 : t.id);
        }),
          (e.isTestUser = function (e) {
            return e.email.endsWith("@bh.exacttarget.com");
          }),
          (e.isConsumerUser = function (e) {
            return !i(e);
          }),
          (e.defaultUser = {
            anonymous: !0,
            groups: [],
            id: "",
            premium: !1,
            isTest: !1,
            settings: {},
            subscriptionFree: !1,
            type: "anonymous",
            email: "",
            registrationDate: new Date().toString(),
            firstName: ""
          });
      })(ms || (ms = {})),
      (function (e) {
        (e.empty = "empty"), (e.local = "local"), (e.server = "server"), (e.localOverride = "localOverride");
      })(bs || (bs = {}));
    const ys = {
      source: bs.local,
      version: "0",
      newRichTextFieldsEnabled: !0,
      fluidDisabledForFirefox: !1,
      fluidDisabledForSafari: !1,
      fullSentenceRewritesDisabled: !1,
      overrideKey: "dynamicConfigOverrideKey",
      ungatingRenewalNotificationEnabled: !1,
      quillJSCatchAllDisabled: !1
    };
    const ws = (e, t) => {
      const n = {
        getAll: async () => await i.getAll(),
        get: async (e) => await i.get(e),
        view: () => {
          throw new Error("not_implemented");
        },
        patch: async (e) => await i.set(e),
        changes: (i = e.browserApi.preferences).changes
      };
      var i;
      const r = Mt(
        Si(n.changes).pipe(
          Pi(null),
          ((o = 200),
          void 0 === a && (a = ni),
          function (e) {
            return e.lift(new ds(o, a));
          }),
          gs(() => n.getAll())
        ),
        Si(S(5, ((s = 2), Kt / s), () => e.bgRpc.api.getPageConfig(t, self.location.href)).catch((e) => null)).pipe(Pi(null)),
        (e, n) => {
          var i, r, s, o, a, c;
          const u = null !== (r = null === (i = e.extensionSettings) || void 0 === i ? void 0 : i[t]) && void 0 !== r ? r : {},
            l =
              (null === (s = null == u ? void 0 : u.enabled) || void 0 === s || s) &&
              (null === (o = null == n ? void 0 : n.enabled) || void 0 === o || o);
          return {
            user: null !== (a = e.user) && void 0 !== a ? a : ms.defaultUser,
            settings: e.extensionSettings,
            dynamicConfig: null !== (c = e.dynamicConfig) && void 0 !== c ? c : ys,
            dapi: e.dapi,
            enabled: l
          };
        }
      );
      var s, o, a;
      return { storeLite: n, viewStoreLite: r };
    };
    var Es = n(71654);
    const xs = "grExtInstalled",
      Ss = "grExtDisabled";
    function ks(e) {
      var t;
      (null === e &&
        "next" ===
          (null === (t = null === document || void 0 === document ? void 0 : document.body) || void 0 === t ? void 0 : t.dataset[Ss])) ||
        (null === e
          ? (function () {
              var e;
              (null === (e = null === document || void 0 === document ? void 0 : document.body) || void 0 === e ? void 0 : e.dataset) &&
                delete document.body.dataset[Ss];
            })()
          : (document.body.dataset[Ss] = e));
    }
    class Rs {
      constructor(e, t, n, i = Ut.create("ExtensionIntegrationCheck")) {
        (this._csShareStorage = e),
          (this._loadContentScript = t),
          (this._log = i),
          (this._pageEnable = !0),
          (this._citationBuilderEnable = !1),
          (this._enabledDefs = !1),
          (this._isAnonymous = !0),
          (this._wasLoaded = !1),
          (this._isDesktopIntegrationEnable = !1),
          (this._mutations = zr.createFlattenHot(self.document, { childList: !0, subtree: !0 })),
          (this._textFieldsObservable = Lr.createFocusObservable(self.document, this._mutations)),
          (this._subs = [
            this._textFieldsObservable.subscribe((e) => {
              const t = e.owner.frame || e.element,
                n = fr.get(t);
              this._log.debug("detected click", { field: t, fieldType: n }), this._pageEnable && (n.generic || n.specific) && this.load();
            }),
            Rs.clickObserver.subscribe((e) => {
              2 === e.detail &&
                this._enabledDefs &&
                this._pageEnable &&
                !this._isAnonymous &&
                Is.isValid() &&
                (this._log.debug("dictionary event executed", e),
                this._csShareStorage.set("extensionDictionaryEvent", e),
                this._subs.push(Is.animation()),
                this.load());
            })
          ]),
          n && !se() && this.load();
      }
      load() {
        (this._wasLoaded && !this._isDesktopIntegrationEnable) ||
          (this._log.debug("load main content script"),
          (this._wasLoaded = !0),
          As.callExecuteContentScript(),
          this.dispose(),
          this._loadContentScript());
      }
      dispose() {
        this._subs.forEach((e) => {
          try {
            e.unsubscribe();
          } catch (e) {}
        });
      }
      updateState(e, t, n, i, r) {
        (this._isDesktopIntegrationEnable = i),
          ((!this._pageEnable && t) || (!this._citationBuilderEnable && r)) && this.load(),
          (this._citationBuilderEnable = r),
          (this._isAnonymous = e),
          (this._pageEnable = t),
          (this._enabledDefs = n),
          ks(this._pageEnable ? null : "forever");
      }
    }
    var Ts, Is, As;
    !(function (e) {
      (e.clickObserver = Xn(self.document, "click", { capture: !0 })),
        (e.start = async function (t, n = !0, i, r = !1) {
          As.checkScriptInitStart();
          const s = hn(),
            o = hr.init({ ...t, skipInitExtensionApi: n, skipWriteLogsToBackupStorage: !0 }),
            a = Ut.create("universal.check");
          if ("text/html" !== document.contentType)
            return a.info("not a html page, skip integration check"), void zn().skipIntegrationForNonHtmlPage();
          const c = [],
            u = new e(
              o.csShareStorage,
              () => {
                (null != i ? i : o.bgRpc.api.loadContentScript)(), c.forEach((e) => e && e.dispose());
              },
              r
            ),
            l = new qr(),
            d = Ts.init(o.browserApi, o.message, o.config, s),
            { viewStoreLite: h } = ws(o, s),
            p = w((e) => {
              zn().sendFemetricsRate("checkScriptInitialized", { domain: fn(), isExtensionEnabled: e, isIframe: se() }, [
                "firstInstall",
                "registrationDate"
              ]);
            }),
            g = h.subscribe((e) => {
              var t, n, i, r;
              a.debug("check script state is updated", e);
              const o = null === (t = e.settings) || void 0 === t ? void 0 : t.common;
              u.updateState(
                null === (i = null === (n = e.user) || void 0 === n ? void 0 : n.anonymous) || void 0 === i || i,
                e.enabled,
                null !== (r = null == o ? void 0 : o.enabledDefs) && void 0 !== r && r,
                Wr.isIntegrationEnabled(o, s, e.dynamicConfig),
                Hr(s, e.dynamicConfig, o)
              ),
                l.updateState(s, e.dynamicConfig, e.enabled, o),
                p(e.enabled);
            }),
            f = [u, d, l];
          o.message.once("contentScript-disconnected", () => {
            g.unsubscribe(), o.csShareStorage.clean(), f.forEach((e) => e && e.dispose());
          }),
            o.message.once(os.Kind.disableOnTab, () => {
              l.dispose();
            }),
            cs.initSendLogsToPopupHandler(o),
            c.push(cs.initKeyboardShortcutHandler(o)),
            As.checkScriptInitEnd(o.bgRpc),
            ((e) => {
              if (self.location.href.includes("grammarly.com/extension-success")) {
                const t = document.getElementById("click-to-run");
                t &&
                  (t.onclick = () => {
                    var t, n;
                    confirm("Always allow Grammarly to run on every website")
                      ? (e.api.enableClickToRunOnAllWebsites(),
                        null === (t = document.getElementById("click-to-run-success")) || void 0 === t || t.click())
                      : null === (n = document.getElementById("click-to-run-fail")) || void 0 === n || n.click();
                  });
              }
            })(o.bgRpc),
            a.debug("Check script initialized!");
        });
    })(Rs || (Rs = {})),
      (function (e) {
        function t(e) {
          ii(10)
            .pipe(
              ut(() => !!document.body),
              vi()
            )
            .subscribe(() => {
              (document.body.dataset.newGrCSCheckLoaded = e.buildInfo.version), (document.body.dataset[xs] = "");
            });
        }
        e.init = function (e, n, i, r) {
          const s = [];
          return (
            t(i),
            self.location.protocol === i.appConfig.url.grammarlyProtocol &&
              r.match(`^([a-z\\-0-9]+\\.)*${i.appConfig.url.grammarlyDomain}$`) &&
              s.push(is.init(n, e.getUrl)),
            {
              dispose: () => {
                s.forEach((e) => e.dispose());
              }
            }
          );
        };
      })(Ts || (Ts = {})),
      (function (e) {
        const t = "important";
        function n(e) {
          return String(e) + "px";
        }
        (e.isValid = function () {
          const e = self.document.getSelection();
          return !(!e || e.toString().match(/[0-9_±!@#$%^&*:"|<>?~().,:}{’='-/ /]/)) && ls(e, self.document);
        }),
          (e.animation = function () {
            const e = document.createElement("div"),
              i = e.attachShadow({ mode: "open" }),
              r = document.createElement("style");
            (r.innerHTML = Es.__css), i.appendChild(r);
            const s = self.document.getSelection().getRangeAt(0).getBoundingClientRect(),
              o = document.createElement("div");
            o.style.setProperty("top", n(s.top), t),
              o.style.setProperty("left", n(s.left), t),
              o.style.setProperty("height", n(s.height), t),
              o.style.setProperty("max-width", n(s.width), t),
              o.style.setProperty("z-index", gr.toString(), t),
              o.classList.add(Es.animatedUnderline, Es.checkAnimatedUnderline),
              i.appendChild(o),
              document.body.appendChild(e);
            const a = ii(10),
              c = Mt(
                Rs.clickObserver.pipe(
                  vi(),
                  ((u = !1),
                  function (e) {
                    return e.lift(new yi(u));
                  }),
                  Pi(!0),
                  Mi()
                ),
                a.pipe(
                  Kn(() => {
                    const e = "." + us.completeAnimation;
                    if (document.querySelector(e)) return !0;
                    const t = Array.from(document.querySelectorAll("grammarly-extension"));
                    for (const n of t) if (n.shadowRoot && n.shadowRoot.querySelector(e)) return !0;
                    return !1;
                  }),
                  Pi(!1),
                  Mi()
                )
              )
                .pipe(
                  ut(([e, t]) => !e || t),
                  Mi()
                )
                .subscribe(l);
            var u;
            return { unsubscribe: l };
            function l() {
              c.unsubscribe(), e.remove();
            }
          });
      })(Is || (Is = {})),
      (function (e) {
        const t = Date.now(),
          n = (e) => self.performance.mark("@grammarly-extension:" + e);
        (e.callExecuteContentScript = () => n("callExecuteContentScript")),
          (e.checkScriptInitEnd = (e) => {
            const i = Math.random() < 0.01;
            if ((n("checkScriptInitEnd"), i)) {
              const n = Date.now();
              e.api.trackCall(dr, [
                "sendFelogEvent",
                {
                  ex_csInitPerf: { domain: self.location.host, initTime: n - t, pageLoadTime: n - self.performance.timing.responseEnd },
                  hideUserInfo: !0,
                  level: nn.INFO,
                  logger: "checkScript.initialized"
                }
              ]);
            }
          }),
          (e.checkScriptInitStart = () => n("checkScriptInitStart"));
      })(As || (As = {}));
    class Fs {
      setPrefetchedTreatments(e) {}
      fetchTreatments(e) {
        return Promise.resolve();
      }
      dispose() {}
      getTreatment(e) {
        return null;
      }
      peekTreatment(e) {
        return null;
      }
      logTreatment(e) {
        return Promise.resolve();
      }
      isGateEnabled(e) {
        return !1;
      }
    }
    function Cs() {
      return self.chrome && self.chrome.runtime && self.chrome.runtime.lastError;
    }
    function Os() {
      return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
    }
    function Ns() {
      return Os() + Os() + "-" + Os() + "-" + Os() + "-" + Os() + "-" + Os() + Os() + Os();
    }
    const Ps = "%appName%",
      Ms = {
        extensionSettingsToolbar: "%appName%SettingsToolbar",
        gdocsSidebarCardList: "%appName%AdvancedIssues",
        assistantCardList: "%appName%AdvancedIssues",
        extensionSettingsAssistant: "%appName%AssistantSettings",
        gdocsGoals: "%appName%AssistantGoals",
        extensionBusinessUphookPopup: "gb%appName%UphookPopup",
        gbExtensionSettingsToolbar: "gb%appName%SettingsToolbar",
        gbExtensionSettingsAssistant: "gb%appName%AssistantSettings",
        extensionGButton: "%appName%GButton",
        extPreviewsPopup: "%appName%PreviewsPopup",
        toneSuggestion: "%appName%ToneDetector",
        grammarlyGoPrompts: "%appName%GrammarlyGoPrompts"
      };
    function Ls(e, t) {
      return { key: e, value: t };
    }
    function Us(e) {
      const t = Ms[e];
      return t
        ? t.replace(Ps, (e, t) => {
            const n = A.getAppName(ie(), ee().bundleInfo.extensionType, ee().bundleInfo.deploymentType);
            return 0 === t ? n : (i = n).charAt(0).toUpperCase() + i.slice(1);
            var i;
          })
        : e;
    }
    function Ds(e, t) {
      return Ls(e, t);
    }
    function Bs(e) {
      return e.map((e) => [e.key, e.value].map(encodeURIComponent).join("=")).join("&");
    }
    function js(e, t) {
      if (0 === t.length) return e;
      const n = e.includes("?");
      return [e, Bs(t)].join(n ? "&" : "?");
    }
    function Hs(e) {
      const t = [];
      return (
        void 0 !== e.medium && t.push(Ds("utm_medium", e.medium)),
        void 0 !== e.source && t.push(Ds("utm_source", e.source)),
        void 0 !== e.campaign && t.push(Ds("utm_campaign", Us(e.campaign))),
        e.clickToRun && t.push(Ds("click_to_run", "true")),
        t
      );
    }
    function $s(e) {
      return Hs(e);
    }
    Ls("fromExtension", "true");
    Hs({ medium: "internal" })[0];
    function Ws(e, t) {
      return js(ee().appConfig.url.planComparison, $s({ medium: "internal", source: e, campaign: t }));
    }
    function Vs(e) {
      const t = e.reduce((e, t) => {
        const n = e.get(t.category),
          i = t.group;
        return n ? n.count++ : e.set(t.category, { group: i, categoryHuman: t.categoryHuman, count: 1 }), e;
      }, new Map());
      return Array.from(t.values()).sort((e, t) => t.count - e.count);
    }
    function Gs(e) {
      const t = new Map();
      for (const {
        isFree: n,
        cardLayout: { group: i }
      } of e) {
        t.has(i) || t.set(i, { lensName: i, free: 0, premium: 0 });
        const e = t.get(i);
        e && (e[n ? "free" : "premium"] += 1);
      }
      return Array.from(t.values()).sort((e, t) => t.premium - e.premium);
    }
    function qs(e) {
      return btoa(JSON.stringify(e));
    }
    const zs = "docs.google.com";
    function Ks(e, t) {
      return (n, i) => {
        return "extensionSettings" === n && (r = i) && "object" == typeof r && "common" in r
          ? (function (e, t, n) {
              const i = e[zs];
              if (!1 !== (null == i ? void 0 : i.enabled) || (null == i ? void 0 : i.forcedEnabledDate_1639893688790)) return n(), e;
              {
                const { disabledDate: n, ...r } = i;
                return t(n), { ...e, [zs]: { ...r, enabled: !0, forcedEnabledDate_1639893688790: Date.now() } };
              }
            })(i, e, t)
          : i;
        var r;
      };
    }
    function Js(e, t) {
      chrome.runtime.lastError ? t(chrome.runtime.lastError) : e();
    }
    class Ys {
      constructor() {
        this._log = Ut.create("extension-api.managed-storage.validator");
      }
      validate(e, t) {
        switch (e) {
          case "GrammarlyEnrollmentToken":
            return "string" == typeof t && t.length > 0 && /^[a-z0-9_-]+$/i.test(t);
          case "GrammarlyBlockedClients":
          case "GrammarlyBlockedDomains":
            return "string" == typeof t;
          case "GrammarlyConfidentialModeEnabled":
          case "GrammarlyDlpEnabled":
            return "boolean" == typeof t;
          case "GrammarlyExtensionMode":
            return "string" == typeof t && ("limited" === t || "full" === t);
          default:
            return this._log.warn(`Unknown key: ${e}`), !1;
        }
      }
    }
    class Xs {
      constructor() {
        (this._log = Ut.create("extension-api.managed-storage.chrome")), (this._validator = new Ys());
      }
      get(e) {
        return ji.fromPromise(
          new Promise((t) => {
            chrome.storage.managed.get(e, (n) => {
              Js(
                () => {
                  const i = n[e];
                  void 0 === i || this._validator.validate(e, i)
                    ? t(i)
                    : (this._log.warn(`Invalid value for "${e}": ${JSON.stringify(n[e])}`), t(void 0));
                },
                (n) => {
                  this._log.error(`Could not get "${e}"`, n), t(void 0);
                }
              );
            });
          })
        );
      }
    }
    const Zs = "message:to-priv";
    var Qs;
    !(function (e) {
      (e[(e.success = 0)] = "success"),
        (e[(e.successWithEmpty = 1)] = "successWithEmpty"),
        (e[(e.alreadyMigrated = 2)] = "alreadyMigrated");
    })(Qs || (Qs = {}));
    const eo = Ut.create("extension-api.message"),
      to = () => `cs-bg-runtime-${te()}`,
      no = () => {};
    class io {
      constructor() {
        (this._listeners = {}),
          (this._queue = {}),
          (this.fire = (e, t, n = no, i) => {
            const r = this._listeners[e] || [];
            r.length
              ? r.forEach((e) => e(t, n, i))
              : ((this._queue[e] = this._queue[e] || []), this._queue[e].push({ content: t, callback: n, sender: i }));
          }),
          (this.unlisten = (e, t) => {
            const n = this._listeners[e] || [],
              i = n.indexOf(t);
            -1 !== i && (1 === n.length ? delete this._listeners[e] : n.splice(i, 1));
          }),
          (this.listenOnce = (e, t) => {
            const n = (i, r, s) => {
              this.unlisten(e, n), t && t(i, r, s);
            };
            this.listen(e, n);
          }),
          (this.listen = (e, t) => {
            (this._listeners[e] = this._listeners[e] || []), -1 === this._listeners[e].indexOf(t) && this._listeners[e].push(t);
            const n = this._queue[e] || [];
            if (n.length) {
              for (const e of n)
                try {
                  t(e.content, e.callback, e.sender);
                } catch (e) {
                  eo.error("exception during proccesing buffered messages", e);
                }
              delete this._queue[e];
            }
          });
      }
    }
    const ro = Ut.create("extension-api.message.bg"),
      so = "popup";
    function oo(e) {
      const { browser: t, extensionType: n } = ee().bundleInfo;
      if (!e) return "safariIOSWebExtension" === n || "safariWebExtension" === n;
      const i =
        "firefox" === t
          ? /^moz-extension:\/\/.*\/src\/popup.html$/
          : "safariWebExtension" === n || "safariIOSWebExtension" === n
          ? /^safari-web-extension:\/\/.*\/src\/popup.html$/
          : "chrome" === t || "edge" === t
          ? chrome && chrome.runtime && chrome.runtime.id
            ? new RegExp(chrome.runtime.id + "/src/popup.html")
            : void 0
          : m(t);
      return void 0 !== i && i.test(e);
    }
    class ao {
      constructor(e, t, n, i) {
        (this._getActiveTab = t),
          (this._sendMessageToTab = n),
          (this._getAllTabs = i),
          (this.kind = "background-message-api"),
          (this.topFrameId = "0"),
          (this._callbacks = {}),
          (this._tabPorts = { popup: [], devtoolsPanel: [] }),
          (this._messageHelper = new io()),
          (this.toFocused = (e, t) =>
            ji.fromPromise(
              this._getActiveTab().then(({ id: n, url: i } = {}) => {
                if (n)
                  return oo(i)
                    ? ro.warn(`toFocussed not allowed for popup when it open like regular tab ${e}`, t)
                    : void this._sendMessageToPorts({ type: e, content: t, callid: Ns() }, n);
              })
            )),
          (this._initPortListener = (e) => {
            if (e.name === Zs) {
              const { sender: t } = e;
              if (t) {
                if (t.tab) {
                  const { id: n, url: i } = t.tab;
                  if (n) {
                    let t = this._tabPorts[n];
                    void 0 === t && (t = this._tabPorts[n] = []), t.push(e);
                  }
                  i && 0 === i.indexOf("http") && this._messageHelper.fire("tab-connected", { tab: n, url: i }),
                    e.onDisconnect(() => {
                      if (!n) return;
                      const t = this._tabPorts[n];
                      t && t.splice(t.indexOf(e), 1);
                    });
                }
                const n = t.url ? t.url : t.tab ? t.tab.url : "",
                  i = oo(n),
                  r = (function (e) {
                    const { browser: t } = ee().bundleInfo;
                    return (
                      e &&
                      "chrome" === t &&
                      chrome &&
                      chrome.runtime &&
                      chrome.runtime.id &&
                      new RegExp(chrome.runtime.id + "/src/devtoolsPanel.html").test(e)
                    );
                  })(n);
                if (i || r) {
                  const t = i ? so : "devtoolsPanel";
                  (this._tabPorts[t] = this._tabPorts[t] || []),
                    this._tabPorts[t].push(e),
                    e.onDisconnect(() => {
                      const n = this._tabPorts[t];
                      n.splice(n.indexOf(e), 1);
                    });
                }
              }
              e.onMessage((n) => {
                const i = ({ callid: n, content: i, type: r }) => {
                  this._callbacks[n] && (this._callbacks[n](i), delete this._callbacks[n]);
                  this._messageHelper.fire(
                    r,
                    i,
                    (t) => e.postMessage({ content: t, callid: n }),
                    t && t.tab ? { tabId: String(t.tab.id), frameId: void 0 === t.frameId ? void 0 : String(t.frameId) } : { tabId: so }
                  );
                };
                "tab-connected" === n.type
                  ? this._getActiveTab().then(({ url: e } = {}) => {
                      (n.content = { tab: so, url: e }), i(n);
                    })
                  : i(n);
              });
            }
          }),
          e(this._initPortListener);
      }
      async _findDestinationTab(e) {
        return (await this._getAllTabs()).find((t) => String(t.id) === String(e));
      }
      async _sendMessageToPorts(e, t, n) {
        var i;
        try {
          const r =
            null === (i = this._tabPorts[t]) || void 0 === i
              ? void 0
              : i.filter((e) => !ue(n) || (ue(e.sender.frameId) && e.sender.frameId === n));
          if (null == r ? void 0 : r.length) r.forEach((t) => t.postMessage(e));
          else if (isNaN(Number(t))) ro.warn(`tab with id ${t} couldn't be found and not valid to send a tab message`);
          else {
            const i = await this._findDestinationTab(t);
            if (!i || "complete" !== i.status) return;
            const r = { type: to(), data: e };
            ro.warn("no specified port on current destination"),
              this._sendMessageToTab(r, Number(t), n).catch(async (e) => {
                const n = await this._findDestinationTab(t);
                zn().sendToTabFailed({ isOpen: !!n, status: null == n ? void 0 : n.status }, e);
              });
          }
        } catch (i) {
          ro.error("send message to tab emit an error", i, { tabId: t, frameId: n, msg: e });
        }
      }
      getPortExists(e) {
        return !!this._tabPorts[e];
      }
      sendTo(e, t, n, i) {
        const { tabId: r, frameId: s = null } = "object" == typeof e ? e : { tabId: String(e) },
          o = { type: t, content: n };
        i && "function" == typeof i && ((o.callid = Ns()), (this._callbacks[o.callid] = i)),
          this._sendMessageToPorts(o, r, s ? Number(s) : void 0);
      }
      listen(e, t) {
        this._messageHelper.listen(e, t);
      }
    }
    const co = Ut.create("Messaging.extension-api.content");
    class uo {
      constructor(e, t, n, i) {
        (this._bgIsWorking = t),
          (this._extensionId = n),
          (this._onRuntimeMessageFromBg = i),
          (this.kind = "content-script-message-api"),
          (this._callbacks = {}),
          (this._messageHelper = new io()),
          (this._disconnected = !1),
          (this.broadcastBackground = async (e, t, n) => {
            var i, r;
            const s = Ns();
            n && "function" == typeof n && (this._callbacks[s] = n);
            try {
              if (!this.backgroundPort) {
                if (!(await this._bgIsWorking())) throw new Error("lost connection to bg port");
                this.initPort(), co.trace("Content script connection was restored");
              }
              null === (i = this.backgroundPort) || void 0 === i || i.postMessage({ type: e, callid: s, content: t });
            } catch (n) {
              if (!(await this._bgIsWorking())) return this._onDisconnect();
              try {
                this.initPort(), null === (r = this.backgroundPort) || void 0 === r || r.postMessage({ type: e, callid: s, content: t });
              } catch (n) {
                throw (co.error("failed to invoke postMessage() on bg port", n, { type: e, callid: s, content: t }), n);
              }
            }
          }),
          (this._onRuntimeMessageHandler = async (e, t, n) => {
            if ((n({ status: !0 }), !(await this._bgIsWorking()))) return this._onDisconnect();
            (t.id !== this._extensionId && e.type !== to()) || (this._onBgPortMessage(e.data), this.initPort());
          }),
          (this._onBgPortMessage = ({ callid: e, content: t, type: n }) => {
            this._callbacks[e]
              ? (this._callbacks[e](t), delete this._callbacks[e])
              : this._messageHelper.fire(n, t, (t) => {
                  if (!this.backgroundPort) throw new Error("fail reply to bg page - connection lost");
                  this.backgroundPort.postMessage({ content: t, callid: e });
                });
          }),
          (this._onDisconnect = async () => {
            var e, t;
            if (
              (null === (t = null === (e = this.backgroundPort) || void 0 === e ? void 0 : e.removeMessageListeners) ||
                void 0 === t ||
                t.call(e),
              (this.backgroundPort = null),
              await this._bgIsWorking())
            )
              return (
                co.trace("BG SW is shutdown, but BG SW page is still available."), void this._messageHelper.fire("bgSW-shutdown", null)
              );
            this._disconnected ||
              (this._onRuntimeMessageFromBg.removeListener(this._onRuntimeMessageHandler),
              (this._disconnected = !0),
              co.trace("Content script messaging went disconnected."),
              this._messageHelper.fire("contentScript-disconnected", null));
          }),
          (this._portInit = e),
          this.initPort(),
          this._onRuntimeMessageFromBg.addListener(this._onRuntimeMessageHandler);
      }
      initPort() {
        const e = this._portInit;
        this.backgroundPort ||
          ((this.backgroundPort = e(Zs)),
          this.backgroundPort.onMessage(this._onBgPortMessage),
          this.backgroundPort.onDisconnect(this._onDisconnect));
      }
      listen(e, t) {
        this._messageHelper.listen(e, t);
      }
    }
    class lo {
      constructor(e, t) {
        this.port = e.runtime.connect({ name: t });
      }
      onMessage(e) {
        this.port.onMessage.addListener(e);
      }
      onDisconnect(e) {
        this.port.onDisconnect.addListener(e);
      }
      postMessage(e) {
        this.port.postMessage(e);
      }
    }
    const ho = (e) => ({
      get: (t) =>
        ji.create((n, i) =>
          e.storage.local.get(t, (e) => {
            Js(() => n(e), i);
          })
        ),
      set: (t) =>
        ji.create((n, i) =>
          e.storage.local.set(t, () => {
            Js(n, i);
          })
        ),
      getAll: () =>
        ji.create((t, n) =>
          e.storage.local.get(null, (e) => {
            Js(() => t(e), n);
          })
        ),
      remove: (t) =>
        ji.create((n, i) =>
          e.storage.local.remove(t, () => {
            Js(n, i);
          })
        ),
      removeAll: () =>
        ji.create((t, n) =>
          e.storage.local.clear(() => {
            Js(t, n);
          })
        )
    });
    class po {
      constructor(e) {
        (this._chromeInstance = e),
          (this.kind = "chrome-mv3"),
          (this.get = (e) =>
            ji.create((t, n) => {
              this._chromeInstance.storage.session.get(e, (e) => {
                Js(() => t(e), n);
              });
            })),
          (this.set = (e) =>
            ji.create((t, n) => {
              this._chromeInstance.storage.session.set(e, () => {
                Js(t, n);
              });
            })),
          (this.getAll = () =>
            ji.create((e, t) => {
              this._chromeInstance.storage.session.get(null, (n) => {
                Js(() => e(n), t);
              });
            })),
          (this.remove = (e) =>
            ji.create((t, n) => {
              this._chromeInstance.storage.session.remove(e, () => {
                Js(t, n);
              });
            })),
          (this.removeAll = () =>
            ji.create((e, t) => {
              this._chromeInstance.storage.session.clear(() => {
                Js(e, t);
              });
            })),
          (this.onChange = (e) => {
            const t = () => {
              this.getAll().then((t) => e(t));
            };
            return (
              this._chromeInstance.storage.session.onChanged.addListener(t),
              () => this._chromeInstance.storage.session.onChanged.removeListener(t)
            );
          }),
          (this.allowCStoUseSessionStorage = () =>
            ji.create((e, t) => {
              var n, i, r, s, o, a;
              null ===
                (r =
                  null === (i = null === (n = chrome.storage) || void 0 === n ? void 0 : n.session) || void 0 === i
                    ? void 0
                    : i.setAccessLevel) ||
                void 0 === r ||
                r.call(
                  i,
                  {
                    accessLevel:
                      null !==
                        (a =
                          null === (o = null === (s = chrome.storage) || void 0 === s ? void 0 : s.AccessLevel) || void 0 === o
                            ? void 0
                            : o.TRUSTED_AND_UNTRUSTED_CONTEXTS) && void 0 !== a
                        ? a
                        : "TRUSTED_AND_UNTRUSTED_CONTEXTS"
                  },
                  () => {
                    Js(e, t);
                  }
                );
            }));
      }
    }
    class go {
      constructor() {
        (this.kind = "memory"),
          (this._data = {}),
          (this._listeners = []),
          (this.get = (e) => ji.sync(() => (Array.isArray(e) ? e : [e]).reduce((e, t) => ({ ...e, [t]: this._data[t] }), {}))),
          (this.set = (e) =>
            ji.sync(() => {
              (this._data = { ...this._data, ...e }), this._callListeners();
            })),
          (this.getAll = () => ji.sync(() => this._data)),
          (this.remove = (e) =>
            ji.sync(() => {
              (Array.isArray(e) ? e : [e]).forEach((e) => {
                e in this._data && delete this._data[e];
              }),
                this._callListeners();
            })),
          (this.removeAll = () =>
            ji.sync(() => {
              (this._data = {}), this._callListeners();
            })),
          (this.onChange = (e) => (this._listeners.push(e), () => this._listeners.splice(this._listeners.indexOf(e), 1)));
      }
      _callListeners() {
        this._listeners.forEach((e) => e(this._data));
      }
    }
    class fo {
      constructor(e, t) {
        (this._chrome = e),
          (this._manifestVersion = t),
          (this.kind = "web-extension"),
          (this.executeScript = (e, t, n) =>
            ji.create((i, r) => {
              "3" !== this._manifestVersion
                ? this._chrome.tabs.executeScript(t, { file: e, matchAboutBlank: !0, ...(n ? { frameId: Number(n) } : {}) }, (e) =>
                    mo(null == e ? void 0 : e[0], i, r)
                  )
                : this._chrome.scripting.executeScript(
                    { files: [e], target: { tabId: t, ...(n ? { frameIds: [Number(n)] } : {}) } },
                    (e) => {
                      var t;
                      return mo(null === (t = null == e ? void 0 : e[0]) || void 0 === t ? void 0 : t.result, i, r);
                    }
                  );
            })),
          (this.executeFunction = (e, t, n) =>
            ji.create((i, r) => {
              "3" !== this._manifestVersion
                ? this._chrome.tabs.executeScript(
                    t,
                    { code: `(${e.toString()})()`, matchAboutBlank: !0, ...(n ? { frameId: Number(n) } : {}) },
                    (e) => mo(null == e ? void 0 : e[0], i, r)
                  )
                : this._chrome.scripting.executeScript({ func: e, target: { tabId: t, ...(n ? { frameIds: [Number(n)] } : {}) } }, (e) => {
                    var t;
                    return mo(null === (t = null == e ? void 0 : e[0]) || void 0 === t ? void 0 : t.result, i, r);
                  });
            })),
          (this.insertCSS = (e, t, n, i) =>
            ji.create((r, s) => {
              "3" !== this._manifestVersion
                ? this._chrome.tabs.insertCSS(e, { file: t, code: n, matchAboutBlank: !0, ...(i ? { frameId: Number(i) } : {}) }, () =>
                    mo(void 0, r, s)
                  )
                : this._chrome.scripting.insertCSS(
                    { target: { tabId: e, ...(i ? { frameIds: [Number(i)] } : {}) }, files: t ? [t] : void 0, css: n },
                    () => mo(void 0, r, s)
                  );
            }));
      }
      open(e, t) {
        return ji.create((n, i) => {
          this._chrome.tabs.create({ url: e, active: t }, (e) => {
            Js(() => n(e), i);
          });
        });
      }
      updateCurrent(e) {
        return ji.create((t, n) => {
          this._chrome.tabs.update({ url: e }, (e) => {
            Js(() => t(e), n);
          });
        });
      }
      getActiveTab() {
        return ji.create((e, t) => {
          const n = this._chrome.tabs;
          n.query({ active: !0, lastFocusedWindow: !0 }, (i) => {
            Js(() => {
              i && i.length
                ? e(i[0])
                : n.query({ active: !0 }, (n) => {
                    Js(() => {
                      e(n[0]);
                    }, t);
                  });
            }, t);
          });
        });
      }
      getAllTabs() {
        return ji.create((e, t) => this._chrome.tabs.query({}, (n) => Js(() => e(n), t)));
      }
      getActiveTabUrl() {
        return ji.create((e, t) => this.getActiveTab().then((n) => Js(() => e(n && n.url), t)));
      }
      onActiveTabChange(e, t) {
        const n = (n) => {
          Js(
            () => {
              n && e(n);
            },
            (n) => {
              t(n),
                "Tabs cannot be edited right now (user may be dragging a tab)." === (null == n ? void 0 : n.message) &&
                  setTimeout(() => {
                    this.getActiveTab().then((n) => {
                      n && Js(() => e(n), t);
                    });
                  }, 100);
            }
          );
        };
        this._chrome.tabs.onActivated.addListener((e) => this._chrome.tabs.get(e.tabId, (e) => n(e))),
          this._chrome.tabs.onUpdated.addListener((e, t) => {
            this.getActiveTab().then((i) => {
              i && i.id === e && (t.url || t.favIconUrl || "complete" === t.status) && this._chrome.tabs.get(e, (e) => n(e));
            });
          }),
          this._chrome.windows.onFocusChanged.addListener((e) =>
            this._chrome.tabs.query({ active: !0, windowId: e, lastFocusedWindow: !0 }, (e) => n(e[0]))
          ),
          this.getActiveTab().then((e) => n(e));
      }
      reload(e) {
        return ji.create((t, n) => {
          const i = () => Js(() => t(), n);
          e.id ? this._chrome.tabs.reload(e.id, {}, i) : this._chrome.tabs.reload(i);
        });
      }
      focusTab(e) {
        return ji.create((t, n) => {
          this._chrome.tabs.update(e, { highlighted: !0 }, () => {
            Js(() => t(), n);
          });
        });
      }
      sendMessageToTab(e, t, n) {
        return ji.create((i, r) => {
          this._chrome.tabs.sendMessage(t, e, { frameId: n }, () => {
            Js(() => i(), r);
          });
        });
      }
    }
    function mo(e, t, n) {
      Cs() ? n(Cs()) : t(e);
    }
    var bo,
      _o,
      vo = (function () {
        function e(e) {
          this.notifier = e;
        }
        return (
          (e.prototype.call = function (e, t) {
            return t.subscribe(new yo(e, this.notifier));
          }),
          e
        );
      })(),
      yo = (function (e) {
        function t(t, n) {
          var i = e.call(this, t) || this;
          i.hasValue = !1;
          var r = new ki(i);
          i.add(r), (i.innerSubscription = r);
          var s = Ti(n, r);
          return s !== r && (i.add(s), (i.innerSubscription = s)), i;
        }
        return (
          Re(t, e),
          (t.prototype._next = function (t) {
            this.hasValue && e.prototype._next.call(this, t);
          }),
          (t.prototype.notifyNext = function () {
            (this.hasValue = !0), this.innerSubscription && this.innerSubscription.unsubscribe();
          }),
          (t.prototype.notifyComplete = function () {}),
          t
        );
      })(Ri);
    !(function (e) {
      (e[(e.nonEmptyMigration = 0)] = "nonEmptyMigration"), (e[(e.emptyMigration = 1)] = "emptyMigration");
    })(bo || (bo = {}));
    class wo {
      constructor(e, t, n, i = [], r = (e, t, n) => t) {
        (this._name = e),
          (this._source = t),
          (this._destination = n),
          (this._destValuesToKeep = i),
          (this._valuesMapper = r),
          (this._migrationFlagSuccessfulValue = "ok"),
          (this._migrationFlagKey = `__migration-${wo.migrationFlagUniqueKey}:(${this._name})`),
          (this._migrationInProgress = !1),
          (this.migrationAwareDestination = (function (e, t) {
            const { get: n, set: i, getAll: r, remove: s } = Ee(e);
            return {
              get: n,
              set: i,
              getAll: r,
              remove: s,
              removeAll: ji.fromAsync(async () => {
                const n = await e.getAll();
                await e.removeAll(), await e.set(ae(t, n));
              }),
              changes: e.changes,
              dispose: () => {}
            };
          })(this._destination, (e) => e === this._migrationFlagKey));
      }
      async _getMigrated() {
        return (await this._destination.get(this._migrationFlagKey))[this._migrationFlagKey] === this._migrationFlagSuccessfulValue;
      }
      async _setMigrated() {
        await this._destination.set({ [this._migrationFlagKey]: this._migrationFlagSuccessfulValue });
        const e = await this._destination.get(this._migrationFlagKey);
        if (e[this._migrationFlagKey] !== this._migrationFlagSuccessfulValue)
          throw new Error(`Could not verify status write, actual value: ${e}`);
      }
      async _runMigration() {
        T(!this._migrationInProgress, "migration already in progress"), (this._migrationInProgress = !0);
        try {
          const e = await this._source.getAll(),
            t = ae(
              (e, t) => void 0 !== t,
              (function (e, t) {
                const n = {};
                return Object.keys(t).forEach((i) => (n[i] = e(i, t[i]))), n;
              })((t, n) => this._valuesMapper(t, n, e), e)
            ),
            n = 0 === Object.keys(t).length,
            i = await this._destination.get(this._destValuesToKeep),
            r = { ...t, ...i };
          if ((await this._destination.removeAll(), await this._destination.set(r), !p(r, await this._destination.getAll())))
            throw new Error("Could not verify write");
          return (this._migrationInProgress = !1), n ? bo.emptyMigration : bo.nonEmptyMigration;
        } catch (e) {
          throw ((this._migrationInProgress = !1), e);
        }
      }
      async ensureMigrationCompleted() {
        if (await this._getMigrated()) return Qs.alreadyMigrated;
        {
          const e = await this._runMigration();
          switch ((await this._setMigrated(), e)) {
            case bo.nonEmptyMigration:
              return Qs.success;
            case bo.emptyMigration:
              return Qs.successWithEmpty;
            default:
              throw new Error(`Match not exhaustive: ${e}`);
          }
        }
      }
    }
    (wo.migrationFlagUniqueKey = "104ccd8c-9919-9ae4-931f-782fb197486c"),
      (function (e) {
        (e.MigrationAwarePreferencesApiImpl = class {
          constructor(e, t, n, i = [], r) {
            var s;
            (this._source = t),
              (this._destination = n),
              (this._migrationCompleted = ji.createCompletionSource()),
              (this._ensureMigrationCompletedCalled = !1),
              (this.get = this._getMigrationAwareMethod("get")),
              (this.set = this._getMigrationAwareMethod("set")),
              (this.getAll = this._getMigrationAwareMethod("getAll")),
              (this.remove = this._getMigrationAwareMethod("remove")),
              (this.removeAll = this._getMigrationAwareMethod("removeAll")),
              (this._migration = new wo(e, t, n, i, r)),
              (this.changes = Si(n.changes).pipe(
                ((s = Si(this._migrationCompleted.promise)),
                function (e) {
                  return e.lift(new vo(s));
                })
              ));
          }
          dispose() {
            var e, t, n, i;
            null === (t = (e = this._source).dispose) || void 0 === t || t.call(e),
              null === (i = (n = this._destination).dispose) || void 0 === i || i.call(n);
          }
          ensureMigrationCompleted() {
            return (
              (this._ensureMigrationCompletedCalled = !0),
              ji.fromPromise(
                this._migration.ensureMigrationCompleted().then(
                  (e) => {
                    var t, n;
                    return (
                      null === (n = (t = this._source).dispose) || void 0 === n || n.call(t),
                      this._migrationCompleted.resolve(!0),
                      Promise.resolve(e)
                    );
                  },
                  (e) => (this._migrationCompleted.resolve(!1), Promise.reject(e))
                )
              )
            );
          }
          _getMigrationAwareMethod(e) {
            return (...t) => (
              T(
                !0 === this._ensureMigrationCompletedCalled,
                "supposed to run data migration before accessing prefs with web-extensions API"
              ),
              ji.fromPromise(
                this._migrationCompleted.promise.then((n) => (n ? this._migration.migrationAwareDestination : this._source)[e](...t))
              )
            );
          }
        }),
          (e.mapValueFromString = (e) => {
            if ("undefined" !== e)
              try {
                return e && JSON.parse(e);
              } catch (t) {
                return null != e ? e : void 0;
              }
          }),
          (e.mapValueToString = (e) => (void 0 === e ? "undefined" : JSON.stringify(e)));
      })(_o || (_o = {}));
    class Eo {
      constructor(e) {
        (this._port = e), (this.sender = {});
        const { sender: t, name: n } = e;
        (this.name = n),
          t &&
            ((this.sender.url = t.url),
            (this.sender.frameId = t.frameId),
            t.tab && t.tab.url && t.tab.id && (this.sender.tab = { url: t.tab.url, id: t.tab.id }));
      }
      onMessage(e) {
        this._port.onMessage.addListener(e);
      }
      onDisconnect(e) {
        this._port.onDisconnect.addListener(e);
      }
      postMessage(e) {
        this._port.postMessage(e);
      }
    }
    class xo {
      get button() {
        const e = this._action;
        return {
          kind: "web-extension",
          setBadge(t) {
            e.setBadgeText({ text: t });
          },
          setIconByName(t, n) {
            const i = "./src/icon/icon",
              r = t ? "-" + t : "standWithUkraine" === n.logo ? "ua" : "";
            e.setIcon({ path: { 16: `${i}16${r}.png`, 32: `${i}32${r}.png` } });
          },
          setBadgeBackgroundColor(t) {
            e.setBadgeBackgroundColor({ color: t });
          }
        };
      }
      get baseUri() {
        var e;
        return null !== (e = this._baseUrl) && void 0 !== e ? e : chrome.runtime.getURL("");
      }
      constructor(e) {
        var t, n;
        (this._isBg = e),
          (this._manifestVersion = "3"),
          (this._isManifestV3 = "3" === this._manifestVersion),
          (this._action = this._isManifestV3 ? chrome.action : chrome.browserAction),
          (this.managedStorage = new Xs()),
          (this.sessionStorage =
            this._isManifestV3 && (null === (t = chrome.storage) || void 0 === t ? void 0 : t.session) ? new po(chrome) : new go()),
          (this.tabs = new fo(chrome, this._manifestVersion)),
          (this.thirdPartyExtensionsInstalled = {}),
          (this.notification = {
            kind: "web-extension",
            create: (e) =>
              ji.create((t, n) => {
                const i = chrome.notifications,
                  r = Ns();
                i.create(r, Object.assign({ type: "basic" }, e), () => {
                  Js(() => {
                    const e = new We((e) => {
                        const t = (t) => t === r && e.next(t);
                        return i.onClicked.addListener(t), () => i.onClicked.removeListener(t);
                      }),
                      n = new We((e) => {
                        const t = (t, n) => t === r && e.next({ id: t, buttonIndex: n });
                        return i.onButtonClicked.addListener(t), () => i.onButtonClicked.removeListener(t);
                      }),
                      s = new We((e) => {
                        const t = (t, n) => t === r && e.next({ id: t, byUser: n });
                        return i.onClosed.addListener(t), () => i.onClosed.removeListener(t);
                      });
                    t({ id: r, click: e, buttonClick: n, close: s });
                  }, n);
                });
              }),
            clear: (e) =>
              ji.create((t, n) => {
                chrome.notifications.clear(e, (e) => {
                  Js(() => t(e), n);
                });
              })
          }),
          (this.cookies = {
            kind: "web-extension",
            get: (e) => ji.create((t, n) => chrome.cookies.get(e, (e) => Js(() => t(e), n))),
            remove: (e) => ji.fromPromise(new Promise((t, n) => chrome.cookies.remove(e, () => Js(() => t(null), n)))),
            getAll: (e) => ji.create((t, n) => chrome.cookies.getAll(e, (e) => Js(() => t(e), n))),
            set: (e) => ji.create((t, n) => chrome.cookies.set(e, (e) => Js(() => t(e), n))),
            watch(e, t) {
              const n = (n) => {
                const { cookie: i, cause: r } = n;
                !i ||
                  !i.name ||
                  (e.path && e.path !== i.path) ||
                  e.name !== i.name ||
                  (e.domain && -1 === i.domain.indexOf(e.domain)) ||
                  ("explicit" === r && t(i), "expired_overwrite" === r && t());
              };
              return chrome.cookies.onChanged.addListener(n), () => chrome.cookies.onChanged.removeListener(n);
            },
            getChanges(e) {
              return new We((t) => this.watch(e, (e) => t.next(e)));
            }
          }),
          (this._prefsBeforeMigration = (function () {
            var e;
            const t = new Ke();
            return (
              null === (e = chrome.storage) ||
                void 0 === e ||
                e.onChanged.addListener((e, n) => {
                  "local" === n && t.next(e);
                }),
              { ...ho(chrome), changes: t }
            );
          })()),
          (this.preferences = this._isBg
            ? new _o.MigrationAwarePreferencesApiImpl(
                "chromeGdocsForceEnableMigration",
                this._prefsBeforeMigration,
                this._prefsBeforeMigration,
                void 0,
                Ks(
                  (e) => zn().gdocs.disabledBeforeForceEnable(e),
                  () => zn().gdocs.enabledBeforeForceEnable()
                )
              )
            : this._prefsBeforeMigration),
          (this.management = {
            uninstallSelf() {
              chrome.management.uninstallSelf();
            }
          }),
          (this._baseUrl = _(
            () => chrome.runtime.getURL(""),
            (e) => null
          )),
          (this.permissions = chrome.permissions
            ? {
                watchAdded: (e) => {
                  chrome.permissions.onAdded.addListener(e);
                },
                added: new We((e) => {
                  const t = (t) => {
                    e.next(t);
                  };
                  return (
                    chrome.permissions.onAdded.addListener(t),
                    () => {
                      chrome.permissions.onAdded.removeListener(t);
                    }
                  );
                }),
                watchRemoved: (e) => {
                  chrome.permissions.onRemoved.addListener(e);
                },
                removed: new We((e) => {
                  const t = (t) => {
                    e.next(t);
                  };
                  return (
                    chrome.permissions.onRemoved.addListener(t),
                    () => {
                      chrome.permissions.onRemoved.removeListener(t);
                    }
                  );
                }),
                getAll: ji.fromAsync(() => new Promise((e) => chrome.permissions.getAll(e))),
                request: ji.fromAsync(
                  (e) =>
                    new Promise((t, n) =>
                      chrome.permissions.request(e, (e) => {
                        chrome.runtime.lastError ? n(chrome.runtime.lastError) : t(e);
                      })
                    )
                ),
                contains: ji.fromAsync(
                  (e) =>
                    new Promise((t, n) => {
                      chrome.permissions.contains(e, (e) => {
                        chrome.runtime.lastError ? n(chrome.runtime.lastError) : t(e);
                      });
                    })
                )
              }
            : void 0),
          (this.fetchBlocklistConfig = () => ji.noop),
          (this.getUrl = (e) => (this._baseUrl ? this._baseUrl + e : chrome.runtime.getURL(e))),
          (this.fetchInternalResource = (e, t) =>
            ji.fromPromise(fetch(this.getUrl(e)).then((e) => ("json" === t ? e.json() : e.arrayBuffer())))),
          (this.openUrl = (e) => this.tabs.open(e, !0)),
          (this.openPopupSubscriptionDialog = (e) => this.openUrl(Ws(e.utmSource, e.utmCampaign))),
          (this.openSubscriptionDialog = (e) =>
            (function (e) {
              const t = ee().appConfig.url;
              self.open(
                js(t.planComparison, [
                  ...(e.isFromEmail ? [Ls("isFromEmail", "1")] : []),
                  Ls("alerts", qs(Vs(e.currentAlerts))),
                  Ls("lensedAlerts", qs(Gs(e.currentAlerts))),
                  Ls("app_type", "popup"),
                  Ls("browser", ie()),
                  ...$s({
                    medium: "internal",
                    source: e.isAnonymousUser ? "signupHook" : "upHook",
                    campaign: e.forceUtmCampaign ? e.forceUtmCampaign : e.isAnonymousUser ? "extensionPremiumCta" : "extensionGButton"
                  })
                ])
              );
            })(e)),
          (this.isExtensionUrl = (e, t) => this.getUrl(e) === t),
          (this.reload = () => chrome.runtime.reload()),
          (this.i18n = {
            detectLanguage: (e) => ji.create((t, n) => chrome.i18n.detectLanguage(e, (e) => Js(() => t(e), n))),
            getUILanguage: () => chrome.i18n.getUILanguage(),
            getAcceptLanguages: () => ji.create((e, t) => chrome.i18n.getAcceptLanguages((n) => Js(() => e(n), t)))
          }),
          (this.initCodeSplittingListener = () => {
            return chrome.runtime.onMessage.addListener(
              ((e = this.tabs.executeScript),
              (t, n, i) => {
                t &&
                  "CODE_SPLITTING_INJECT" === t.type &&
                  t.file &&
                  n &&
                  n.tab &&
                  null != n.tab.id &&
                  (e(t.file, Number(n.tab.id), n.frameId), i());
              })
            );
            var e;
          }),
          (this.isExtensionInstalled = ji.fromAsync(async (e, t = !1) => {
            if (!t && void 0 !== this.thirdPartyExtensionsInstalled[e]) return this.thirdPartyExtensionsInstalled[e];
            if ("undefined" == typeof fetch) return !1;
            const n = xo.thirdPartyExtensionsData[e].publicResources.reduce(
              (t, n) => (
                ne() && t.push(`chrome-extension://${xo.thirdPartyExtensionsData[e].MSStoreId}${n}`),
                t.concat(`chrome-extension://${xo.thirdPartyExtensionsData[e].id}${n}`)
              ),
              []
            );
            return ((i = n.map((e) => fetch(e))), l(Promise.all([...i].map(l)))).then((e) => !0).catch((e) => !1);
            var i;
          })),
          (this.setUninstallURL = (e) => chrome.runtime.setUninstallURL(e)),
          (this.indexedDB = self.indexedDB),
          (this.message = e
            ? new ao(
                (e) => chrome.runtime.onConnect.addListener((t) => e(new Eo(t))),
                Ee(this.tabs).getActiveTab,
                Ee(this.tabs).sendMessageToTab,
                Ee(this.tabs).getAllTabs
              )
            : new uo(
                (e) => new lo(chrome, e),
                ((n = () => this.preferences.getAll()),
                async () => {
                  try {
                    return await n(), !0;
                  } catch (e) {
                    return !1;
                  }
                }),
                chrome.runtime.id,
                chrome.runtime.onMessage
              ));
      }
    }
    (xo.thirdPartyExtensionsData = {
      mseditor: {
        id: "gpaiobkfhnonedkhhfjpmhdalgeoebfa",
        MSStoreId: "hokifickgkhplphjiodbggjmoafhignh",
        publicResources: ["/fonts/fabric-icons.css"]
      },
      office: {
        id: "ndjpnladcallmjemlbaebfadecfhkepb",
        MSStoreId: "gggmmkjegpiggikcnhidnjjhmicpibll",
        publicResources: ["/fonts/fabric-icons.css"]
      }
    }),
      Rs.start({
        browser: "chrome",
        extensionType: "chromiumWebExtension",
        deploymentType: "regular",
        browserApi: (function (e) {
          return new xo(e);
        })(!1),
        createExperimentClient: function () {
          return new Fs();
        }
      });
  })();
