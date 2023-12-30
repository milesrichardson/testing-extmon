/*! For license information please see 3246.js.LICENSE.txt */
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [3246],
  {
    65792: function (e, r, n) {
      var t;
      (e = n.nmd(e)),
        function () {
          var n,
            f,
            a,
            u,
            o,
            c,
            i,
            l,
            s,
            d,
            h,
            b,
            p,
            g,
            m,
            y,
            v,
            w,
            k,
            A,
            x,
            N,
            _,
            M,
            C,
            O,
            j,
            E,
            G,
            q,
            P,
            $,
            I,
            L,
            B,
            z,
            R,
            S,
            Y,
            X,
            U,
            V,
            F,
            K,
            Z,
            D,
            T,
            H,
            J,
            Q,
            W,
            ee,
            re,
            ne,
            te,
            fe,
            ae,
            ue,
            oe,
            ce,
            ie,
            le,
            se,
            de,
            he,
            be,
            pe,
            ge,
            me,
            ye,
            ve,
            we,
            ke,
            Ae,
            xe,
            Ne,
            _e,
            Me,
            Ce,
            Oe,
            je = [].slice;
          (Ne = (function () {
            var e, r, n, t, f;
            for (e = {}, t = 0, r = (f = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ")).length; t < r; t++)
              (n = f[t]), (e["[object " + n + "]"] = n.toLowerCase());
            return function (r) {
              var n;
              return (n = Object.prototype.toString.call(r)), e[n] || "object";
            };
          })()),
            (T = function (e, r, n) {
              return null == r && (r = 0), null == n && (n = 1), e < r && (e = r), e > n && (e = n), e;
            }),
            (_e = function (e) {
              return e.length >= 3 ? Array.prototype.slice.call(e) : e[0];
            }),
            (x = function (e) {
              var r, n;
              for (e._clipped = !1, e._unclipped = e.slice(0), r = n = 0; n < 3; r = ++n)
                r < 3
                  ? ((e[r] < 0 || e[r] > 255) && (e._clipped = !0), e[r] < 0 && (e[r] = 0), e[r] > 255 && (e[r] = 255))
                  : 3 === r && (e[r] < 0 && (e[r] = 0), e[r] > 1 && (e[r] = 1));
              return e._clipped || delete e._unclipped, e;
            }),
            (u = Math.PI),
            (ve = Math.round),
            (_ = Math.cos),
            (E = Math.floor),
            (te = Math.pow),
            (H = Math.log),
            (ke = Math.sin),
            (Ae = Math.sqrt),
            (g = Math.atan2),
            (W = Math.max),
            (p = Math.abs),
            (i = 2 * u),
            (o = u / 3),
            (f = u / 180),
            (c = 180 / u),
            (A = function () {
              return arguments[0] instanceof n
                ? arguments[0]
                : (function (e, r, n) {
                    n.prototype = e.prototype;
                    var t = new n(),
                      f = e.apply(t, r);
                    return Object(f) === f ? f : t;
                  })(n, arguments, function () {});
            }),
            (A.default = A),
            (b = []),
            null !== e && null != e.exports && (e.exports = A),
            void 0 ===
              (t = function () {
                return A;
              }.apply(r, [])) || (e.exports = t),
            (A.version = "1.4.1"),
            (h = {}),
            (s = []),
            (d = !1),
            (n = (function () {
              function e() {
                var e, r, n, t, f, a, u, o, c;
                for (a = this, r = [], o = 0, t = arguments.length; o < t; o++) null != (e = arguments[o]) && r.push(e);
                if ((r.length > 1 && (u = r[r.length - 1]), null != h[u])) a._rgb = x(h[u](_e(r.slice(0, -1))));
                else {
                  for (
                    d ||
                      ((s = s.sort(function (e, r) {
                        return r.p - e.p;
                      })),
                      (d = !0)),
                      c = 0,
                      f = s.length;
                    c < f && !(u = (n = s[c]).test.apply(n, r));
                    c++
                  );
                  u && (a._rgb = x(h[u].apply(h, r)));
                }
                null == a._rgb && console.warn("unknown format: " + r),
                  null == a._rgb && (a._rgb = [0, 0, 0]),
                  3 === a._rgb.length && a._rgb.push(1);
              }
              return (
                (e.prototype.toString = function () {
                  return this.hex();
                }),
                e
              );
            })()),
            (A._input = h),
            (A.brewer = w =
              {
                OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
                Spectral: [
                  "#9e0142",
                  "#d53e4f",
                  "#f46d43",
                  "#fdae61",
                  "#fee08b",
                  "#ffffbf",
                  "#e6f598",
                  "#abdda4",
                  "#66c2a5",
                  "#3288bd",
                  "#5e4fa2"
                ],
                RdYlGn: [
                  "#a50026",
                  "#d73027",
                  "#f46d43",
                  "#fdae61",
                  "#fee08b",
                  "#ffffbf",
                  "#d9ef8b",
                  "#a6d96a",
                  "#66bd63",
                  "#1a9850",
                  "#006837"
                ],
                RdBu: [
                  "#67001f",
                  "#b2182b",
                  "#d6604d",
                  "#f4a582",
                  "#fddbc7",
                  "#f7f7f7",
                  "#d1e5f0",
                  "#92c5de",
                  "#4393c3",
                  "#2166ac",
                  "#053061"
                ],
                PiYG: [
                  "#8e0152",
                  "#c51b7d",
                  "#de77ae",
                  "#f1b6da",
                  "#fde0ef",
                  "#f7f7f7",
                  "#e6f5d0",
                  "#b8e186",
                  "#7fbc41",
                  "#4d9221",
                  "#276419"
                ],
                PRGn: [
                  "#40004b",
                  "#762a83",
                  "#9970ab",
                  "#c2a5cf",
                  "#e7d4e8",
                  "#f7f7f7",
                  "#d9f0d3",
                  "#a6dba0",
                  "#5aae61",
                  "#1b7837",
                  "#00441b"
                ],
                RdYlBu: [
                  "#a50026",
                  "#d73027",
                  "#f46d43",
                  "#fdae61",
                  "#fee090",
                  "#ffffbf",
                  "#e0f3f8",
                  "#abd9e9",
                  "#74add1",
                  "#4575b4",
                  "#313695"
                ],
                BrBG: [
                  "#543005",
                  "#8c510a",
                  "#bf812d",
                  "#dfc27d",
                  "#f6e8c3",
                  "#f5f5f5",
                  "#c7eae5",
                  "#80cdc1",
                  "#35978f",
                  "#01665e",
                  "#003c30"
                ],
                RdGy: [
                  "#67001f",
                  "#b2182b",
                  "#d6604d",
                  "#f4a582",
                  "#fddbc7",
                  "#ffffff",
                  "#e0e0e0",
                  "#bababa",
                  "#878787",
                  "#4d4d4d",
                  "#1a1a1a"
                ],
                PuOr: [
                  "#7f3b08",
                  "#b35806",
                  "#e08214",
                  "#fdb863",
                  "#fee0b6",
                  "#f7f7f7",
                  "#d8daeb",
                  "#b2abd2",
                  "#8073ac",
                  "#542788",
                  "#2d004b"
                ],
                Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                Set3: [
                  "#8dd3c7",
                  "#ffffb3",
                  "#bebada",
                  "#fb8072",
                  "#80b1d3",
                  "#fdb462",
                  "#b3de69",
                  "#fccde5",
                  "#d9d9d9",
                  "#bc80bd",
                  "#ccebc5",
                  "#ffed6f"
                ],
                Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                Paired: [
                  "#a6cee3",
                  "#1f78b4",
                  "#b2df8a",
                  "#33a02c",
                  "#fb9a99",
                  "#e31a1c",
                  "#fdbf6f",
                  "#ff7f00",
                  "#cab2d6",
                  "#6a3d9a",
                  "#ffff99",
                  "#b15928"
                ],
                Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
              }),
            (function () {
              var e, r;
              for (e in ((r = []), w)) r.push((w[e.toLowerCase()] = w[e]));
            })(),
            (A.colors = Me =
              {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflower: "#6495ed",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                laserlemon: "#ffff54",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrod: "#fafad2",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                maroon2: "#7f0000",
                maroon3: "#b03060",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                purple2: "#7f007f",
                purple3: "#a020f0",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
              }),
            (V = function () {
              var e, r, n, t, f, u, o;
              return (
                (t = (r = _e(arguments))[0]),
                (e = r[1]),
                (n = r[2]),
                (u = (t + 16) / 116),
                (f = isNaN(e) ? u : u + e / 500),
                (o = isNaN(n) ? u : u - n / 200),
                (u = a.Yn * F(u)),
                (f = a.Xn * F(f)),
                (o = a.Zn * F(o)),
                [
                  Oe(3.2404542 * f - 1.5371385 * u - 0.4985314 * o),
                  Oe(-0.969266 * f + 1.8760108 * u + 0.041556 * o),
                  (n = Oe(0.0556434 * f - 0.2040259 * u + 1.0572252 * o)),
                  r.length > 3 ? r[3] : 1
                ]
              );
            }),
            (Oe = function (e) {
              return 255 * (e <= 0.00304 ? 12.92 * e : 1.055 * te(e, 1 / 2.4) - 0.055);
            }),
            (F = function (e) {
              return e > a.t1 ? e * e * e : a.t2 * (e - a.t0);
            }),
            (a = { Kn: 18, Xn: 0.95047, Yn: 1, Zn: 1.08883, t0: 0.137931034, t1: 0.206896552, t2: 0.12841855, t3: 0.008856452 }),
            (se = function () {
              var e, r, n, t, f, a, u;
              return (
                (n = (t = _e(arguments))[0]),
                (r = t[1]),
                (e = t[2]),
                (a = (f = ge(n, r, e))[0]),
                [116 * (u = f[1]) - 16, 500 * (a - u), 200 * (u - f[2])]
              );
            }),
            (me = function (e) {
              return (e /= 255) <= 0.04045 ? e / 12.92 : te((e + 0.055) / 1.055, 2.4);
            }),
            (Ce = function (e) {
              return e > a.t3 ? te(e, 1 / 3) : e / a.t2 + a.t0;
            }),
            (ge = function () {
              var e, r, n, t;
              return (
                (n = (t = _e(arguments))[0]),
                (r = t[1]),
                (e = t[2]),
                (n = me(n)),
                (r = me(r)),
                (e = me(e)),
                [
                  Ce((0.4124564 * n + 0.3575761 * r + 0.1804375 * e) / a.Xn),
                  Ce((0.2126729 * n + 0.7151522 * r + 0.072175 * e) / a.Yn),
                  Ce((0.0193339 * n + 0.119192 * r + 0.9503041 * e) / a.Zn)
                ]
              );
            }),
            (A.lab = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["lab"]), function () {});
            }),
            (h.lab = V),
            (n.prototype.lab = function () {
              return se(this._rgb);
            }),
            (m = function (e) {
              var r, n, t, f, a, u, o, c, i, l, s;
              return (
                2 ===
                (e = (function () {
                  var r, n, t;
                  for (t = [], n = 0, r = e.length; n < r; n++) (f = e[n]), t.push(A(f));
                  return t;
                })()).length
                  ? ((i = (function () {
                      var r, n, t;
                      for (t = [], n = 0, r = e.length; n < r; n++) (f = e[n]), t.push(f.lab());
                      return t;
                    })()),
                    (a = i[0]),
                    (u = i[1]),
                    (r = function (e) {
                      var r, n;
                      return (
                        (n = (function () {
                          var n, t;
                          for (t = [], r = n = 0; n <= 2; r = ++n) t.push(a[r] + e * (u[r] - a[r]));
                          return t;
                        })()),
                        A.lab.apply(A, n)
                      );
                    }))
                  : 3 === e.length
                  ? ((l = (function () {
                      var r, n, t;
                      for (t = [], n = 0, r = e.length; n < r; n++) (f = e[n]), t.push(f.lab());
                      return t;
                    })()),
                    (a = l[0]),
                    (u = l[1]),
                    (o = l[2]),
                    (r = function (e) {
                      var r, n;
                      return (
                        (n = (function () {
                          var n, t;
                          for (t = [], r = n = 0; n <= 2; r = ++n) t.push((1 - e) * (1 - e) * a[r] + 2 * (1 - e) * e * u[r] + e * e * o[r]);
                          return t;
                        })()),
                        A.lab.apply(A, n)
                      );
                    }))
                  : 4 === e.length
                  ? ((s = (function () {
                      var r, n, t;
                      for (t = [], n = 0, r = e.length; n < r; n++) (f = e[n]), t.push(f.lab());
                      return t;
                    })()),
                    (a = s[0]),
                    (u = s[1]),
                    (o = s[2]),
                    (c = s[3]),
                    (r = function (e) {
                      var r, n;
                      return (
                        (n = (function () {
                          var n, t;
                          for (t = [], r = n = 0; n <= 2; r = ++n)
                            t.push(
                              (1 - e) * (1 - e) * (1 - e) * a[r] +
                                3 * (1 - e) * (1 - e) * e * u[r] +
                                3 * (1 - e) * e * e * o[r] +
                                e * e * e * c[r]
                            );
                          return t;
                        })()),
                        A.lab.apply(A, n)
                      );
                    }))
                  : 5 === e.length &&
                    ((n = m(e.slice(0, 3))),
                    (t = m(e.slice(2, 5))),
                    (r = function (e) {
                      return e < 0.5 ? n(2 * e) : t(2 * (e - 0.5));
                    })),
                r
              );
            }),
            (A.bezier = function (e) {
              var r;
              return (
                ((r = m(e)).scale = function () {
                  return A.scale(r);
                }),
                r
              );
            }),
            (A.cubehelix = function (e, r, n, t, f) {
              var a, u, o;
              return (
                null == e && (e = 300),
                null == r && (r = -1.5),
                null == n && (n = 1),
                null == t && (t = 1),
                null == f && (f = [0, 1]),
                (a = 0),
                "array" === Ne(f) ? (u = f[1] - f[0]) : ((u = 0), (f = [f, f])),
                ((o = function (o) {
                  var c, l, s, d, h;
                  return (
                    (c = i * ((e + 120) / 360 + r * o)),
                    (d = te(f[0] + u * o, t)),
                    (l = ((0 !== a ? n[0] + o * a : n) * d * (1 - d)) / 2),
                    (s = _(c)),
                    (h = ke(c)),
                    A(
                      x([
                        255 * (d + l * (-0.14861 * s + 1.78277 * h)),
                        255 * (d + l * (-0.29227 * s - 0.90649 * h)),
                        255 * (d + l * (1.97294 * s)),
                        1
                      ])
                    )
                  );
                }).start = function (r) {
                  return null == r ? e : ((e = r), o);
                }),
                (o.rotations = function (e) {
                  return null == e ? r : ((r = e), o);
                }),
                (o.gamma = function (e) {
                  return null == e ? t : ((t = e), o);
                }),
                (o.hue = function (e) {
                  return null == e ? n : ("array" === Ne((n = e)) ? 0 == (a = n[1] - n[0]) && (n = n[1]) : (a = 0), o);
                }),
                (o.lightness = function (e) {
                  return null == e ? f : ("array" === Ne(e) ? ((f = e), (u = e[1] - e[0])) : ((f = [e, e]), (u = 0)), o);
                }),
                (o.scale = function () {
                  return A.scale(o);
                }),
                o.hue(n),
                o
              );
            }),
            (A.random = function () {
              var e, r;
              for (e = "#", r = 0; r < 6; ++r) e += "0123456789abcdef".charAt(E(16 * Math.random()));
              return new n(e);
            }),
            (b = []),
            (B = function (e, r, n, t) {
              var f, a, u, o;
              for (
                null == n && (n = 0.5),
                  null == t && (t = "rgb"),
                  "object" !== Ne(e) && (e = A(e)),
                  "object" !== Ne(r) && (r = A(r)),
                  u = 0,
                  a = b.length;
                u < a;
                u++
              )
                if (t === (f = b[u])[0]) {
                  o = f[1](e, r, n, t);
                  break;
                }
              if (null == o) throw "color mode " + t + " is not supported";
              return o.alpha(e.alpha() + n * (r.alpha() - e.alpha()));
            }),
            (A.interpolate = B),
            (n.prototype.interpolate = function (e, r, n) {
              return B(this, e, r, n);
            }),
            (A.mix = B),
            (n.prototype.mix = n.prototype.interpolate),
            (h.rgb = function () {
              var e, r, n, t;
              for (e in ((n = []), (r = _e(arguments)))) (t = r[e]), n.push(t);
              return n;
            }),
            (A.rgb = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["rgb"]), function () {});
            }),
            (n.prototype.rgb = function (e) {
              return null == e && (e = !0), e ? this._rgb.map(Math.round).slice(0, 3) : this._rgb.slice(0, 3);
            }),
            (n.prototype.rgba = function (e) {
              return (
                null == e && (e = !0),
                e ? [Math.round(this._rgb[0]), Math.round(this._rgb[1]), Math.round(this._rgb[2]), this._rgb[3]] : this._rgb.slice(0)
              );
            }),
            s.push({
              p: 3,
              test: function (e) {
                var r;
                return (
                  (r = _e(arguments)),
                  ("array" === Ne(r) && 3 === r.length) || (4 === r.length && "number" === Ne(r[3]) && r[3] >= 0 && r[3] <= 1)
                    ? "rgb"
                    : void 0
                );
              }
            }),
            (h.lrgb = h.rgb),
            (S = function (e, r, t, f) {
              var a, u;
              return (
                (a = e._rgb),
                (u = r._rgb),
                new n(
                  Ae(te(a[0], 2) * (1 - t) + te(u[0], 2) * t),
                  Ae(te(a[1], 2) * (1 - t) + te(u[1], 2) * t),
                  Ae(te(a[2], 2) * (1 - t) + te(u[2], 2) * t),
                  f
                )
              );
            }),
            (l = function (e) {
              var r, t, f, a, u;
              for (r = 1 / e.length, u = [0, 0, 0, 0], f = 0, t = e.length; f < t; f++)
                (a = e[f]._rgb), (u[0] += te(a[0], 2) * r), (u[1] += te(a[1], 2) * r), (u[2] += te(a[2], 2) * r), (u[3] += a[3] * r);
              return (u[0] = Ae(u[0])), (u[1] = Ae(u[1])), (u[2] = Ae(u[2])), u[3] > 1 && (u[3] = 1), new n(x(u));
            }),
            b.push(["lrgb", S]),
            (A.average = function (e, r) {
              var n, t, f, a, o, c, i, s, d, h, b, p, m;
              if (
                (null == r && (r = "rgb"),
                (d = e.length),
                (e = e.map(function (e) {
                  return A(e);
                })),
                (i = e.splice(0, 1)[0]),
                "lrgb" === r)
              )
                return l(e);
              for (s in ((a = []), (o = 0), (c = 0), (p = i.get(r))))
                (p[s] = p[s] || 0),
                  a.push(isNaN(p[s]) ? 0 : 1),
                  "h" !== r.charAt(s) || isNaN(p[s]) || ((n = (p[s] / 180) * u), (o += _(n)), (c += ke(n)));
              for (t = i.alpha(), b = 0, h = e.length; b < h; b++)
                for (s in ((m = (f = e[b]).get(r)), (t += f.alpha()), p))
                  isNaN(m[s]) || ((a[s] += 1), "h" === r.charAt(s) ? ((n = (m[s] / 180) * u), (o += _(n)), (c += ke(n))) : (p[s] += m[s]));
              for (s in p)
                if ("h" === r.charAt(s)) {
                  for (n = (g(c / a[s], o / a[s]) / u) * 180; n < 0; ) n += 360;
                  for (; n >= 360; ) n -= 360;
                  p[s] = n;
                } else p[s] = p[s] / a[s];
              return A(p, r).alpha(t / d);
            }),
            (q = function (e) {
              var r, n;
              if (e.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/))
                return (
                  (4 !== e.length && 7 !== e.length) || (e = e.substr(1)),
                  3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                  [(n = parseInt(e, 16)) >> 16, (n >> 8) & 255, 255 & n, 1]
                );
              if (e.match(/^#?([A-Fa-f0-9]{8})$/))
                return (
                  9 === e.length && (e = e.substr(1)),
                  [((n = parseInt(e, 16)) >> 24) & 255, (n >> 16) & 255, (n >> 8) & 255, ve(((255 & n) / 255) * 100) / 100]
                );
              if (null != h.css && (r = h.css(e))) return r;
              throw "unknown color: " + e;
            }),
            (oe = function (e, r) {
              var n, t, f, a, u, o;
              return (
                null == r && (r = "auto"),
                (u = e[0]),
                (f = e[1]),
                (t = e[2]),
                (n = e[3]),
                "auto" === r && (r = n < 1 ? "rgba" : "rgb"),
                (u = Math.round(u)),
                (f = Math.round(f)),
                (t = Math.round(t)),
                (o = (o = "000000" + ((u << 16) | (f << 8) | t).toString(16)).substr(o.length - 6)),
                (a = (a = "0" + ve(255 * n).toString(16)).substr(a.length - 2)),
                "#" +
                  (function () {
                    switch (r.toLowerCase()) {
                      case "rgba":
                        return o + a;
                      case "argb":
                        return a + o;
                      default:
                        return o;
                    }
                  })()
              );
            }),
            (h.hex = function (e) {
              return q(e);
            }),
            (A.hex = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["hex"]), function () {});
            }),
            (n.prototype.hex = function (e) {
              return null == e && (e = "auto"), oe(this._rgb, e);
            }),
            s.push({
              p: 4,
              test: function (e) {
                if (1 === arguments.length && "string" === Ne(e)) return "hex";
              }
            }),
            (I = function () {
              var e, r, n, t, f, a, u, o, c, i, l, s, d, h;
              if (((f = (e = _e(arguments))[0]), (l = e[1]), (u = e[2]), 0 === l)) c = t = r = 255 * u;
              else {
                for (
                  n = [0, 0, 0],
                    s = 2 * u - (d = u < 0.5 ? u * (1 + l) : u + l - u * l),
                    (h = [0, 0, 0])[0] = (f /= 360) + 1 / 3,
                    h[1] = f,
                    h[2] = f - 1 / 3,
                    a = o = 0;
                  o <= 2;
                  a = ++o
                )
                  h[a] < 0 && (h[a] += 1),
                    h[a] > 1 && (h[a] -= 1),
                    6 * h[a] < 1
                      ? (n[a] = s + 6 * (d - s) * h[a])
                      : 2 * h[a] < 1
                      ? (n[a] = d)
                      : 3 * h[a] < 2
                      ? (n[a] = s + (d - s) * (2 / 3 - h[a]) * 6)
                      : (n[a] = s);
                (c = (i = [ve(255 * n[0]), ve(255 * n[1]), ve(255 * n[2])])[0]), (t = i[1]), (r = i[2]);
              }
              return e.length > 3 ? [c, t, r, e[3]] : [c, t, r];
            }),
            (ie = function (e, r, n) {
              var t, f, a, u, o;
              return (
                void 0 !== e && e.length >= 3 && ((e = (u = e)[0]), (r = u[1]), (n = u[2])),
                (e /= 255),
                (r /= 255),
                (n /= 255),
                (a = Math.min(e, r, n)),
                (f = ((W = Math.max(e, r, n)) + a) / 2),
                W === a ? ((o = 0), (t = Number.NaN)) : (o = f < 0.5 ? (W - a) / (W + a) : (W - a) / (2 - W - a)),
                e === W ? (t = (r - n) / (W - a)) : r === W ? (t = 2 + (n - e) / (W - a)) : n === W && (t = 4 + (e - r) / (W - a)),
                (t *= 60) < 0 && (t += 360),
                [t, o, f]
              );
            }),
            (A.hsl = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["hsl"]), function () {});
            }),
            (h.hsl = I),
            (n.prototype.hsl = function () {
              return ie(this._rgb);
            }),
            (L = function () {
              var e, r, n, t, f, a, u, o, c, i, l, s, d, h, b, p, g, m;
              if (((f = (e = _e(arguments))[0]), (p = e[1]), (m = e[2]), (m *= 255), 0 === p)) c = t = r = m;
              else
                switch (
                  (360 === f && (f = 0),
                  f > 360 && (f -= 360),
                  f < 0 && (f += 360),
                  (u = m * (1 - p)),
                  (o = m * (1 - p * (n = (f /= 60) - (a = E(f))))),
                  (g = m * (1 - p * (1 - n))),
                  a)
                ) {
                  case 0:
                    (c = (i = [m, g, u])[0]), (t = i[1]), (r = i[2]);
                    break;
                  case 1:
                    (c = (l = [o, m, u])[0]), (t = l[1]), (r = l[2]);
                    break;
                  case 2:
                    (c = (s = [u, m, g])[0]), (t = s[1]), (r = s[2]);
                    break;
                  case 3:
                    (c = (d = [u, o, m])[0]), (t = d[1]), (r = d[2]);
                    break;
                  case 4:
                    (c = (h = [g, u, m])[0]), (t = h[1]), (r = h[2]);
                    break;
                  case 5:
                    (c = (b = [m, u, o])[0]), (t = b[1]), (r = b[2]);
                }
              return [c, t, r, e.length > 3 ? e[3] : 1];
            }),
            (le = function () {
              var e, r, n, t, f, a, u, o, c;
              return (
                (a = (u = _e(arguments))[0]),
                (n = u[1]),
                (e = u[2]),
                (f = Math.min(a, n, e)),
                (r = (W = Math.max(a, n, e)) - f),
                (c = W / 255),
                0 === W
                  ? ((t = Number.NaN), (o = 0))
                  : ((o = r / W),
                    a === W && (t = (n - e) / r),
                    n === W && (t = 2 + (e - a) / r),
                    e === W && (t = 4 + (a - n) / r),
                    (t *= 60) < 0 && (t += 360)),
                [t, o, c]
              );
            }),
            (A.hsv = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["hsv"]), function () {});
            }),
            (h.hsv = L),
            (n.prototype.hsv = function () {
              return le(this._rgb);
            }),
            (re = function (e) {
              return "number" === Ne(e) && e >= 0 && e <= 16777215
                ? [e >> 16, (e >> 8) & 255, 255 & e, 1]
                : (console.warn("unknown num color: " + e), [0, 0, 0, 1]);
            }),
            (be = function () {
              var e;
              return ((e = _e(arguments))[0] << 16) + (e[1] << 8) + e[2];
            }),
            (A.num = function (e) {
              return new n(e, "num");
            }),
            (n.prototype.num = function (e) {
              return null == e && (e = "rgb"), be(this._rgb, e);
            }),
            (h.num = re),
            s.push({
              p: 1,
              test: function (e) {
                if (1 === arguments.length && "number" === Ne(e) && e >= 0 && e <= 16777215) return "num";
              }
            }),
            (G = function () {
              var e, r, n, t, f, a, u, o, c, i, l, s, d, h, b, p, g, m, y, v;
              if (((o = (n = _e(arguments))[0]), (f = n[1]), (r = n[2]), (u = (u / 100) * 255), (e = 255 * (f /= 100)), 0 === f))
                s = u = t = r;
              else
                switch (
                  (360 === o && (o = 0),
                  o > 360 && (o -= 360),
                  o < 0 && (o += 360),
                  (l = (i = r * (1 - f)) + e * (1 - (a = (o /= 60) - (c = E(o))))),
                  (y = i + e * a),
                  (v = i + e),
                  c)
                ) {
                  case 0:
                    (s = (d = [v, y, i])[0]), (u = d[1]), (t = d[2]);
                    break;
                  case 1:
                    (s = (h = [l, v, i])[0]), (u = h[1]), (t = h[2]);
                    break;
                  case 2:
                    (s = (b = [i, v, y])[0]), (u = b[1]), (t = b[2]);
                    break;
                  case 3:
                    (s = (p = [i, l, v])[0]), (u = p[1]), (t = p[2]);
                    break;
                  case 4:
                    (s = (g = [y, i, v])[0]), (u = g[1]), (t = g[2]);
                    break;
                  case 5:
                    (s = (m = [v, i, l])[0]), (u = m[1]), (t = m[2]);
                }
              return [s, u, t, n.length > 3 ? n[3] : 1];
            }),
            (ue = function () {
              var e, r, n, t, f, a, u, o, c;
              return (
                (o = (c = _e(arguments))[0]),
                (f = c[1]),
                (r = c[2]),
                (u = Math.min(o, f, r)),
                (n = (100 * (t = (W = Math.max(o, f, r)) - u)) / 255),
                (e = (u / (255 - t)) * 100),
                0 === t
                  ? (a = Number.NaN)
                  : (o === W && (a = (f - r) / t),
                    f === W && (a = 2 + (r - o) / t),
                    r === W && (a = 4 + (o - f) / t),
                    (a *= 60) < 0 && (a += 360)),
                [a, n, e]
              );
            }),
            (A.hcg = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["hcg"]), function () {});
            }),
            (h.hcg = G),
            (n.prototype.hcg = function () {
              return ue(this._rgb);
            }),
            (M = function (e) {
              var r, n, t, f, a, u, o, c;
              if (((e = e.toLowerCase()), null != A.colors && A.colors[e])) return q(A.colors[e]);
              if ((a = e.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/))) {
                for (o = a.slice(1, 4), f = u = 0; u <= 2; f = ++u) o[f] = +o[f];
                o[3] = 1;
              } else if ((a = e.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)))
                for (o = a.slice(1, 5), f = c = 0; c <= 3; f = ++c) o[f] = +o[f];
              else if ((a = e.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/))) {
                for (o = a.slice(1, 4), f = r = 0; r <= 2; f = ++r) o[f] = ve(2.55 * o[f]);
                o[3] = 1;
              } else if (
                (a = e.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/))
              ) {
                for (o = a.slice(1, 5), f = n = 0; n <= 2; f = ++n) o[f] = ve(2.55 * o[f]);
                o[3] = +o[3];
              } else
                (a = e.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/))
                  ? (((t = a.slice(1, 4))[1] *= 0.01), (t[2] *= 0.01), ((o = I(t))[3] = 1))
                  : (a = e.match(
                      /hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/
                    )) && (((t = a.slice(1, 4))[1] *= 0.01), (t[2] *= 0.01), ((o = I(t))[3] = +a[4]));
              return o;
            }),
            (ae = function (e) {
              var r;
              return "rgb" == (r = e[3] < 1 ? "rgba" : "rgb")
                ? r + "(" + e.slice(0, 3).map(ve).join(",") + ")"
                : "rgba" === r
                ? r + "(" + e.slice(0, 3).map(ve).join(",") + "," + e[3] + ")"
                : void 0;
            }),
            (ye = function (e) {
              return ve(100 * e) / 100;
            }),
            ($ = function (e, r) {
              var n;
              return (
                (n = r < 1 ? "hsla" : "hsl"),
                (e[0] = ye(e[0] || 0)),
                (e[1] = ye(100 * e[1]) + "%"),
                (e[2] = ye(100 * e[2]) + "%"),
                "hsla" === n && (e[3] = r),
                n + "(" + e.join(",") + ")"
              );
            }),
            (h.css = function (e) {
              return M(e);
            }),
            (A.css = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["css"]), function () {});
            }),
            (n.prototype.css = function (e) {
              return (
                null == e && (e = "rgb"),
                "rgb" === e.slice(0, 3) ? ae(this._rgb) : "hsl" === e.slice(0, 3) ? $(this.hsl(), this.alpha()) : void 0
              );
            }),
            (h.named = function (e) {
              return q(Me[e]);
            }),
            s.push({
              p: 5,
              test: function (e) {
                if (1 === arguments.length && null != Me[e]) return "named";
              }
            }),
            (n.prototype.name = function (e) {
              var r, n;
              for (n in (arguments.length && (Me[e] && (this._rgb = q(Me[e])), (this._rgb[3] = 1)), (r = this.hex("rgb")), Me))
                if (r === Me[n]) return n;
              return r;
            }),
            (K = function () {
              var e, r, n, t;
              return (n = (t = _e(arguments))[0]), (e = t[1]), (r = t[2]), [n, _((r *= f)) * e, ke(r) * e];
            }),
            (Z = function () {
              var e, r, n, t, f, a, u, o, c;
              return (
                (u = (n = _e(arguments))[0]),
                (f = n[1]),
                (a = n[2]),
                (e = (o = K(u, f, a))[0]),
                (r = o[1]),
                (t = o[2]),
                [(c = V(e, r, t))[0], c[1], (t = c[2]), n.length > 3 ? n[3] : 1]
              );
            }),
            (U = function () {
              var e, r, n, t, f, a;
              return (
                (f = (a = _e(arguments))[0]),
                (e = a[1]),
                (r = a[2]),
                (n = Ae(e * e + r * r)),
                (t = (g(r, e) * c + 360) % 360),
                0 === ve(1e4 * n) && (t = Number.NaN),
                [f, n, t]
              );
            }),
            (de = function () {
              var e, r, n, t, f, a, u;
              return (f = (a = _e(arguments))[0]), (n = a[1]), (r = a[2]), (t = (u = se(f, n, r))[0]), (e = u[1]), (r = u[2]), U(t, e, r);
            }),
            (A.lch = function () {
              var e;
              return (e = _e(arguments)), new n(e, "lch");
            }),
            (A.hcl = function () {
              var e;
              return (e = _e(arguments)), new n(e, "hcl");
            }),
            (h.lch = Z),
            (h.hcl = function () {
              var e, r, n, t;
              return (r = (t = _e(arguments))[0]), (e = t[1]), (n = t[2]), Z([n, e, r]);
            }),
            (n.prototype.lch = function () {
              return de(this._rgb);
            }),
            (n.prototype.hcl = function () {
              return de(this._rgb).reverse();
            }),
            (fe = function (e) {
              var r, n, t, f, a, u;
              return (
                null == e && (e = "rgb"),
                (a = (u = _e(arguments))[0]),
                (t = u[1]),
                (r = u[2]),
                (t /= 255),
                (r /= 255),
                [
                  (1 - (a /= 255) - (f = 1 - Math.max(a, Math.max(t, r)))) * (n = f < 1 ? 1 / (1 - f) : 0),
                  (1 - t - f) * n,
                  (1 - r - f) * n,
                  f
                ]
              );
            }),
            (N = function () {
              var e, r, n, t, f, a;
              return (
                (n = (r = _e(arguments))[0]),
                (f = r[1]),
                (a = r[2]),
                (t = r[3]),
                (e = r.length > 4 ? r[4] : 1),
                1 === t
                  ? [0, 0, 0, e]
                  : [n >= 1 ? 0 : 255 * (1 - n) * (1 - t), f >= 1 ? 0 : 255 * (1 - f) * (1 - t), a >= 1 ? 0 : 255 * (1 - a) * (1 - t), e]
              );
            }),
            (h.cmyk = function () {
              return N(_e(arguments));
            }),
            (A.cmyk = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["cmyk"]), function () {});
            }),
            (n.prototype.cmyk = function () {
              return fe(this._rgb);
            }),
            (h.gl = function () {
              var e, r, n, t, f;
              for (
                t = function () {
                  var e, n;
                  for (r in ((n = []), (e = _e(arguments)))) (f = e[r]), n.push(f);
                  return n;
                }.apply(this, arguments),
                  e = n = 0;
                n <= 2;
                e = ++n
              )
                t[e] *= 255;
              return t;
            }),
            (A.gl = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["gl"]), function () {});
            }),
            (n.prototype.gl = function () {
              var e;
              return [(e = this._rgb)[0] / 255, e[1] / 255, e[2] / 255, e[3]];
            }),
            (he = function (e, r, n) {
              var t;
              return (e = (t = _e(arguments))[0]), (r = t[1]), (n = t[2]), 0.2126 * (e = J(e)) + 0.7152 * (r = J(r)) + 0.0722 * J(n);
            }),
            (J = function (e) {
              return (e /= 255) <= 0.03928 ? e / 12.92 : te((e + 0.055) / 1.055, 2.4);
            }),
            (X = function (e, r, t, f) {
              var a, u;
              return (a = e._rgb), (u = r._rgb), new n(a[0] + t * (u[0] - a[0]), a[1] + t * (u[1] - a[1]), a[2] + t * (u[2] - a[2]), f);
            }),
            b.push(["rgb", X]),
            (n.prototype.luminance = function (e, r) {
              var n, t, f, a;
              return (
                null == r && (r = "rgb"),
                arguments.length
                  ? ((f = this._rgb),
                    0 === e
                      ? (f = [0, 0, 0, this._rgb[3]])
                      : 1 === e
                      ? (f = [255, 255, 255, this[3]])
                      : ((n = he(this._rgb)),
                        (t = 20),
                        (a = function (n, f) {
                          var u, o;
                          return (
                            (u = (o = n.interpolate(f, 0.5, r)).luminance()), Math.abs(e - u) < 1e-7 || !t-- ? o : u > e ? a(n, o) : a(o, f)
                          );
                        }),
                        (f = n > e ? a(A("black"), this).rgba() : a(this, A("white")).rgba())),
                    A(f).alpha(this.alpha()))
                  : he(this._rgb)
              );
            }),
            (xe = function (e) {
              var r, n, t, f;
              return (
                (f = e / 100) < 66
                  ? ((t = 255),
                    (n = -155.25485562709179 - 0.44596950469579133 * (n = f - 2) + 104.49216199393888 * H(n)),
                    (r = f < 20 ? 0 : 0.8274096064007395 * (r = f - 10) - 254.76935184120902 + 115.67994401066147 * H(r)))
                  : ((t = 351.97690566805693 + 0.114206453784165 * (t = f - 55) - 40.25366309332127 * H(t)),
                    (n = 325.4494125711974 + 0.07943456536662342 * (n = f - 50) - 28.0852963507957 * H(n)),
                    (r = 255)),
                [t, n, r]
              );
            }),
            (pe = function () {
              var e, r, n, t, f, a, u;
              for (t = (f = _e(arguments))[0], f[1], e = f[2], n = 1e3, r = 4e4; r - n > 0.4; )
                (a = xe((u = 0.5 * (r + n))))[2] / a[0] >= e / t ? (r = u) : (n = u);
              return ve(u);
            }),
            (A.temperature = A.kelvin =
              function () {
                return (function (e, r, n) {
                  n.prototype = e.prototype;
                  var t = new n(),
                    f = e.apply(t, r);
                  return Object(f) === f ? f : t;
                })(n, je.call(arguments).concat(["temperature"]), function () {});
              }),
            (h.temperature = h.kelvin = h.K = xe),
            (n.prototype.temperature = function () {
              return pe(this._rgb);
            }),
            (n.prototype.kelvin = n.prototype.temperature),
            (A.contrast = function (e, r) {
              var t, f, a, u;
              return (
                ("string" !== (a = Ne(e)) && "number" !== a) || (e = new n(e)),
                ("string" !== (u = Ne(r)) && "number" !== u) || (r = new n(r)),
                (t = e.luminance()) > (f = r.luminance()) ? (t + 0.05) / (f + 0.05) : (f + 0.05) / (t + 0.05)
              );
            }),
            (A.distance = function (e, r, t) {
              var f, a, u, o, c, i, l;
              for (a in (null == t && (t = "lab"),
              ("string" !== (c = Ne(e)) && "number" !== c) || (e = new n(e)),
              ("string" !== (i = Ne(r)) && "number" !== i) || (r = new n(r)),
              (u = e.get(t)),
              (o = r.get(t)),
              (l = 0),
              u))
                l += (f = (u[a] || 0) - (o[a] || 0)) * f;
              return Math.sqrt(l);
            }),
            (A.deltaE = function (e, r, t, f) {
              var a, o, c, i, l, s, d, h, b, m, y, v, w, k, A, x, N, M, C, O, j, E, G, q;
              for (
                null == t && (t = 1),
                  null == f && (f = 1),
                  ("string" !== (A = Ne(e)) && "number" !== A) || (e = new n(e)),
                  ("string" !== (x = Ne(r)) && "number" !== x) || (r = new n(r)),
                  a = (N = e.lab())[0],
                  c = N[1],
                  l = N[2],
                  o = (M = r.lab())[0],
                  i = M[1],
                  s = M[2],
                  d = Ae(c * c + l * l),
                  h = Ae(i * i + s * s),
                  O = a < 16 ? 0.511 : (0.040975 * a) / (1 + 0.01765 * a),
                  C = (0.0638 * d) / (1 + 0.0131 * d) + 0.638,
                  k = d < 1e-6 ? 0 : (180 * g(l, c)) / u;
                k < 0;

              )
                k += 360;
              for (; k >= 360; ) k -= 360;
              return (
                (j = k >= 164 && k <= 345 ? 0.56 + p(0.2 * _((u * (k + 168)) / 180)) : 0.36 + p(0.4 * _((u * (k + 35)) / 180))),
                (w = Ae((b = d * d * d * d) / (b + 1900))),
                Ae(
                  (E = (a - o) / (t * O)) * E +
                    (G = (v = d - h) / (f * C)) * G +
                    ((m = c - i) * m + (y = l - s) * y - v * v) / ((q = C * (w * j + 1 - w)) * q)
                )
              );
            }),
            (n.prototype.get = function (e) {
              var r, n, t, f, a;
              return (
                (t = (f = e.split("."))[0]),
                (r = f[1]),
                (a = this[t]()),
                r ? ((n = t.indexOf(r)) > -1 ? a[n] : console.warn("unknown channel " + r + " in mode " + t)) : a
              );
            }),
            (n.prototype.set = function (e, r) {
              var n, t, f, a, u;
              if (((f = (a = e.split("."))[0]), (n = a[1])))
                if (((u = this[f]()), (t = f.indexOf(n)) > -1))
                  if ("string" === Ne(r))
                    switch (r.charAt(0)) {
                      case "+":
                      case "-":
                        u[t] += +r;
                        break;
                      case "*":
                        u[t] *= +r.substr(1);
                        break;
                      case "/":
                        u[t] /= +r.substr(1);
                        break;
                      default:
                        u[t] = +r;
                    }
                  else u[t] = r;
                else console.warn("unknown channel " + n + " in mode " + f);
              else u = r;
              return A(u, f).alpha(this.alpha());
            }),
            (n.prototype.clipped = function () {
              return this._rgb._clipped || !1;
            }),
            (n.prototype.alpha = function (e) {
              return arguments.length ? A.rgb([this._rgb[0], this._rgb[1], this._rgb[2], e]) : this._rgb[3];
            }),
            (n.prototype.darken = function (e) {
              var r;
              return null == e && (e = 1), ((r = this.lab())[0] -= a.Kn * e), A.lab(r).alpha(this.alpha());
            }),
            (n.prototype.brighten = function (e) {
              return null == e && (e = 1), this.darken(-e);
            }),
            (n.prototype.darker = n.prototype.darken),
            (n.prototype.brighter = n.prototype.brighten),
            (n.prototype.saturate = function (e) {
              var r;
              return null == e && (e = 1), ((r = this.lch())[1] += e * a.Kn), r[1] < 0 && (r[1] = 0), A.lch(r).alpha(this.alpha());
            }),
            (n.prototype.desaturate = function (e) {
              return null == e && (e = 1), this.saturate(-e);
            }),
            (n.prototype.premultiply = function () {
              var e, r;
              return (r = this.rgb()), (e = this.alpha()), A(r[0] * e, r[1] * e, r[2] * e, e);
            }),
            (ee = function (e, r) {
              return (e * r) / 255;
            }),
            (C = function (e, r) {
              return e > r ? r : e;
            }),
            (D = function (e, r) {
              return e > r ? e : r;
            }),
            (we = function (e, r) {
              return 255 * (1 - (1 - e / 255) * (1 - r / 255));
            }),
            (ne = function (e, r) {
              return r < 128 ? (2 * e * r) / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - r / 255));
            }),
            (k = function (e, r) {
              return 255 * (1 - (1 - r / 255) / (e / 255));
            }),
            (O = function (e, r) {
              return 255 === e || (e = ((r / 255) * 255) / (1 - e / 255)) > 255 ? 255 : e;
            }),
            ((y = function (e, r, n) {
              if (!y[n]) throw "unknown blend mode " + n;
              return y[n](e, r);
            }).normal = (v = function (e) {
              return function (r, n) {
                var t, f;
                return (t = A(n).rgb()), (f = A(r).rgb()), A(e(t, f), "rgb");
              };
            })(
              (j = function (e) {
                return function (r, n) {
                  var t, f, a;
                  for (a = [], t = f = 0; f <= 3; t = ++f) a[t] = e(r[t], n[t]);
                  return a;
                };
              })(function (e, r) {
                return e;
              })
            )),
            (y.multiply = v(j(ee))),
            (y.screen = v(j(we))),
            (y.overlay = v(j(ne))),
            (y.darken = v(j(C))),
            (y.lighten = v(j(D))),
            (y.dodge = v(j(O))),
            (y.burn = v(j(k))),
            (A.blend = y),
            (A.analyze = function (e) {
              var r, n, t, f;
              for (t = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }, n = 0, r = e.length; n < r; n++)
                null == (f = e[n]) ||
                  isNaN(f) ||
                  (t.values.push(f), (t.sum += f), f < t.min && (t.min = f), f > t.max && (t.max = f), (t.count += 1));
              return (
                (t.domain = [t.min, t.max]),
                (t.limits = function (e, r) {
                  return A.limits(t, e, r);
                }),
                t
              );
            }),
            (A.scale = function (e, r) {
              var n, t, f, a, u, o, c, i, l, s, d, h, b, p, g, m, y, v, w, k, x;
              return (
                (l = "rgb"),
                (s = A("#ccc")),
                (p = 0),
                (u = [0, 1]),
                (b = []),
                (h = [0, 0]),
                (n = !1),
                (f = []),
                (d = !1),
                (i = 0),
                (c = 1),
                (a = !1),
                (t = {}),
                (g = !0),
                (o = 1),
                (k = function (e) {
                  var r, n, t, a, u, o;
                  if (
                    (null == e && (e = ["#fff", "#000"]),
                    null != e && "string" === Ne(e) && null != A.brewer && (e = A.brewer[e] || A.brewer[e.toLowerCase()] || e),
                    "array" === Ne(e))
                  ) {
                    for (
                      1 === e.length && (e = [e[0], e[0]]), r = t = 0, a = (e = e.slice(0)).length - 1;
                      0 <= a ? t <= a : t >= a;
                      r = 0 <= a ? ++t : --t
                    )
                      (n = e[r]), "string" === Ne(n) && (e[r] = A(n));
                    for (b.length = 0, r = o = 0, u = e.length - 1; 0 <= u ? o <= u : o >= u; r = 0 <= u ? ++o : --o)
                      b.push(r / (e.length - 1));
                  }
                  return w(), (f = e);
                }),
                (y = function (e) {
                  var r, t;
                  if (null != n) {
                    for (t = n.length - 1, r = 0; r < t && e >= n[r]; ) r++;
                    return r - 1;
                  }
                  return 0;
                }),
                (x = function (e) {
                  return e;
                }),
                (v = function (e, r) {
                  var a, u, d, p, m, v, w;
                  if ((null == r && (r = !1), isNaN(e) || null === e)) return s;
                  if (
                    ((w = r ? e : n && n.length > 2 ? y(e) / (n.length - 2) : c !== i ? (e - i) / (c - i) : 1),
                    r || (w = x(w)),
                    1 !== o && (w = te(w, o)),
                    (w = h[0] + w * (1 - h[0] - h[1])),
                    (w = Math.min(1, Math.max(0, w))),
                    (d = Math.floor(1e4 * w)),
                    g && t[d])
                  )
                    a = t[d];
                  else {
                    if ("array" === Ne(f))
                      for (u = p = 0, v = b.length - 1; 0 <= v ? p <= v : p >= v; u = 0 <= v ? ++p : --p) {
                        if (w <= (m = b[u])) {
                          a = f[u];
                          break;
                        }
                        if (w >= m && u === b.length - 1) {
                          a = f[u];
                          break;
                        }
                        if (w > m && w < b[u + 1]) {
                          (w = (w - m) / (b[u + 1] - m)), (a = A.interpolate(f[u], f[u + 1], w, l));
                          break;
                        }
                      }
                    else "function" === Ne(f) && (a = f(w));
                    g && (t[d] = a);
                  }
                  return a;
                }),
                (w = function () {
                  return (t = {});
                }),
                k(e),
                ((m = function (e) {
                  var r;
                  return (r = A(v(e))), d && r[d] ? r[d]() : r;
                }).classes = function (e) {
                  var r;
                  return null != e
                    ? ("array" === Ne(e)
                        ? ((n = e), (u = [e[0], e[e.length - 1]]))
                        : ((r = A.analyze(u)), (n = 0 === e ? [r.min, r.max] : A.limits(r, "e", e))),
                      m)
                    : n;
                }),
                (m.domain = function (e) {
                  var r, n, t, a, o, l, s;
                  if (!arguments.length) return u;
                  if (((i = e[0]), (c = e[e.length - 1]), (b = []), (t = f.length), e.length === t && i !== c))
                    for (o = 0, a = e.length; o < a; o++) (n = e[o]), b.push((n - i) / (c - i));
                  else for (r = s = 0, l = t - 1; 0 <= l ? s <= l : s >= l; r = 0 <= l ? ++s : --s) b.push(r / (t - 1));
                  return (u = [i, c]), m;
                }),
                (m.mode = function (e) {
                  return arguments.length ? ((l = e), w(), m) : l;
                }),
                (m.range = function (e, r) {
                  return k(e), m;
                }),
                (m.out = function (e) {
                  return (d = e), m;
                }),
                (m.spread = function (e) {
                  return arguments.length ? ((p = e), m) : p;
                }),
                (m.correctLightness = function (e) {
                  return (
                    null == e && (e = !0),
                    (a = e),
                    w(),
                    (x = a
                      ? function (e) {
                          var r, n, t, f, a, u, o, c;
                          for (
                            u = (r = v(0, !0).lab()[0]) > (n = v(1, !0).lab()[0]),
                              t = v(e, !0).lab()[0] - (f = r + (n - r) * e),
                              o = 0,
                              c = 1,
                              a = 20;
                            Math.abs(t) > 0.01 && a-- > 0;

                          )
                            u && (t *= -1),
                              t < 0 ? ((o = e), (e += 0.5 * (c - e))) : ((c = e), (e += 0.5 * (o - e))),
                              (t = v(e, !0).lab()[0] - f);
                          return e;
                        }
                      : function (e) {
                          return e;
                        }),
                    m
                  );
                }),
                (m.padding = function (e) {
                  return null != e ? ("number" === Ne(e) && (e = [e, e]), (h = e), m) : h;
                }),
                (m.colors = function (r, t) {
                  var a, o, c, i, l, s, d, h;
                  if ((arguments.length < 2 && (t = "hex"), (l = []), 0 === arguments.length)) l = f.slice(0);
                  else if (1 === r) l = [m(0.5)];
                  else if (r > 1)
                    (o = u[0]),
                      (a = u[1] - o),
                      (l = function () {
                        s = [];
                        for (var e = 0; 0 <= r ? e < r : e > r; 0 <= r ? e++ : e--) s.push(e);
                        return s;
                      }
                        .apply(this)
                        .map(function (e) {
                          return m(o + (e / (r - 1)) * a);
                        }));
                  else {
                    if (((e = []), (d = []), n && n.length > 2))
                      for (c = h = 1, i = n.length; 1 <= i ? h < i : h > i; c = 1 <= i ? ++h : --h) d.push(0.5 * (n[c - 1] + n[c]));
                    else d = u;
                    l = d.map(function (e) {
                      return m(e);
                    });
                  }
                  return (
                    A[t] &&
                      (l = l.map(function (e) {
                        return e[t]();
                      })),
                    l
                  );
                }),
                (m.cache = function (e) {
                  return null != e ? ((g = e), m) : g;
                }),
                (m.gamma = function (e) {
                  return null != e ? ((o = e), m) : o;
                }),
                (m.nodata = function (e) {
                  return null != e ? ((s = A(e)), m) : s;
                }),
                m
              );
            }),
            null == A.scales && (A.scales = {}),
            (A.scales.cool = function () {
              return A.scale([A.hsl(180, 1, 0.9), A.hsl(250, 0.7, 0.4)]);
            }),
            (A.scales.hot = function () {
              return A.scale(["#000", "#f00", "#ff0", "#fff"], [0, 0.25, 0.75, 1]).mode("rgb");
            }),
            (A.analyze = function (e, r, n) {
              var t, f, a, u, o, c;
              if (
                ((o = { min: Number.MAX_VALUE, max: -1 * Number.MAX_VALUE, sum: 0, values: [], count: 0 }),
                null == n &&
                  (n = function () {
                    return !0;
                  }),
                (t = function (e) {
                  null == e ||
                    isNaN(e) ||
                    (o.values.push(e), (o.sum += e), e < o.min && (o.min = e), e > o.max && (o.max = e), (o.count += 1));
                }),
                (c = function (e, f) {
                  if (n(e, f))
                    return null != r && "function" === Ne(r)
                      ? t(r(e))
                      : (null != r && "string" === Ne(r)) || "number" === Ne(r)
                      ? t(e[r])
                      : t(e);
                }),
                "array" === Ne(e))
              )
                for (u = 0, a = e.length; u < a; u++) c(e[u]);
              else for (f in e) c(e[f], f);
              return (
                (o.domain = [o.min, o.max]),
                (o.limits = function (e, r) {
                  return A.limits(o, e, r);
                }),
                o
              );
            }),
            (A.limits = function (e, r, n) {
              var t,
                f,
                a,
                u,
                o,
                c,
                i,
                l,
                s,
                d,
                h,
                b,
                g,
                m,
                y,
                v,
                w,
                k,
                x,
                N,
                _,
                M,
                C,
                O,
                j,
                G,
                q,
                P,
                $,
                I,
                L,
                B,
                z,
                R,
                S,
                Y,
                X,
                U,
                V,
                F,
                K,
                Z,
                D,
                T,
                J,
                Q,
                ee,
                re,
                ne,
                fe,
                ae,
                ue,
                oe,
                ce,
                ie;
              if (
                (null == r && (r = "equal"),
                null == n && (n = 7),
                "array" === Ne(e) && (e = A.analyze(e)),
                (j = e.min),
                (W = e.max),
                e.sum,
                (ce = e.values.sort(function (e, r) {
                  return e - r;
                })),
                1 === n)
              )
                return [j, W];
              if (((C = []), "c" === r.substr(0, 1) && (C.push(j), C.push(W)), "e" === r.substr(0, 1))) {
                for (C.push(j), N = L = 1, S = n - 1; 1 <= S ? L <= S : L >= S; N = 1 <= S ? ++L : --L) C.push(j + (N / n) * (W - j));
                C.push(W);
              } else if ("l" === r.substr(0, 1)) {
                if (j <= 0) throw "Logarithmic scales are only possible for values > 0";
                for (
                  G = Math.LOG10E * H(j), O = Math.LOG10E * H(W), C.push(j), N = ie = 1, Y = n - 1;
                  1 <= Y ? ie <= Y : ie >= Y;
                  N = 1 <= Y ? ++ie : --ie
                )
                  C.push(te(10, G + (N / n) * (O - G)));
                C.push(W);
              } else if ("q" === r.substr(0, 1)) {
                for (C.push(j), N = t = 1, Z = n - 1; 1 <= Z ? t <= Z : t >= Z; N = 1 <= Z ? ++t : --t)
                  (B = ((ce.length - 1) * N) / n),
                    (z = E(B)) === B ? C.push(ce[z]) : ((R = B - z), C.push(ce[z] * (1 - R) + ce[z + 1] * R));
                C.push(W);
              } else if ("k" === r.substr(0, 1)) {
                for (
                  P = ce.length, m = new Array(P), k = new Array(n), fe = !0, $ = 0, v = null, (v = []).push(j), N = f = 1, D = n - 1;
                  1 <= D ? f <= D : f >= D;
                  N = 1 <= D ? ++f : --f
                )
                  v.push(j + (N / n) * (W - j));
                for (v.push(W); fe; ) {
                  for (_ = a = 0, T = n - 1; 0 <= T ? a <= T : a >= T; _ = 0 <= T ? ++a : --a) k[_] = 0;
                  for (N = u = 0, J = P - 1; 0 <= J ? u <= J : u >= J; N = 0 <= J ? ++u : --u) {
                    for (oe = ce[N], q = Number.MAX_VALUE, _ = o = 0, Q = n - 1; 0 <= Q ? o <= Q : o >= Q; _ = 0 <= Q ? ++o : --o)
                      (x = p(v[_] - oe)) < q && ((q = x), (y = _));
                    k[y]++, (m[N] = y);
                  }
                  for (I = new Array(n), _ = c = 0, ee = n - 1; 0 <= ee ? c <= ee : c >= ee; _ = 0 <= ee ? ++c : --c) I[_] = null;
                  for (N = i = 0, re = P - 1; 0 <= re ? i <= re : i >= re; N = 0 <= re ? ++i : --i)
                    null === I[(w = m[N])] ? (I[w] = ce[N]) : (I[w] += ce[N]);
                  for (_ = l = 0, ne = n - 1; 0 <= ne ? l <= ne : l >= ne; _ = 0 <= ne ? ++l : --l) I[_] *= 1 / k[_];
                  for (fe = !1, _ = s = 0, X = n - 1; 0 <= X ? s <= X : s >= X; _ = 0 <= X ? ++s : --s)
                    if (I[_] !== v[N]) {
                      fe = !0;
                      break;
                    }
                  (v = I), ++$ > 200 && (fe = !1);
                }
                for (M = {}, _ = d = 0, U = n - 1; 0 <= U ? d <= U : d >= U; _ = 0 <= U ? ++d : --d) M[_] = [];
                for (N = h = 0, V = P - 1; 0 <= V ? h <= V : h >= V; N = 0 <= V ? ++h : --h) M[(w = m[N])].push(ce[N]);
                for (ae = [], _ = b = 0, F = n - 1; 0 <= F ? b <= F : b >= F; _ = 0 <= F ? ++b : --b)
                  ae.push(M[_][0]), ae.push(M[_][M[_].length - 1]);
                for (
                  ae = ae.sort(function (e, r) {
                    return e - r;
                  }),
                    C.push(ae[0]),
                    N = g = 1,
                    K = ae.length - 1;
                  g <= K;
                  N = g += 2
                )
                  (ue = ae[N]), isNaN(ue) || -1 !== C.indexOf(ue) || C.push(ue);
              }
              return C;
            }),
            (P = function (e, r, n) {
              var t, f, a, u;
              return (
                (e = (t = _e(arguments))[0]),
                (r = t[1]),
                (n = t[2]),
                isNaN(e) && (e = 0),
                (e /= 360) < 1 / 3
                  ? (a = 1 - ((f = (1 - r) / 3) + (u = (1 + (r * _(i * e)) / _(o - i * e)) / 3)))
                  : e < 2 / 3
                  ? (f = 1 - ((u = (1 - r) / 3) + (a = (1 + (r * _(i * (e -= 1 / 3))) / _(o - i * e)) / 3)))
                  : (u = 1 - ((a = (1 - r) / 3) + (f = (1 + (r * _(i * (e -= 2 / 3))) / _(o - i * e)) / 3))),
                [255 * (u = T(n * u * 3)), 255 * (a = T(n * a * 3)), 255 * (f = T(n * f * 3)), t.length > 3 ? t[3] : 1]
              );
            }),
            (ce = function () {
              var e, r, n, t, f, a, u;
              return (
                (f = (a = _e(arguments))[0]),
                (r = a[1]),
                (e = a[2]),
                (i = 2 * Math.PI),
                (f /= 255),
                (r /= 255),
                (e /= 255),
                0 == (u = 1 - Math.min(f, r, e) / (t = (f + r + e) / 3))
                  ? (n = 0)
                  : ((n = (f - r + (f - e)) / 2),
                    (n /= Math.sqrt((f - r) * (f - r) + (f - e) * (r - e))),
                    (n = Math.acos(n)),
                    e > r && (n = i - n),
                    (n /= i)),
                [360 * n, u, t]
              );
            }),
            (A.hsi = function () {
              return (function (e, r, n) {
                n.prototype = e.prototype;
                var t = new n(),
                  f = e.apply(t, r);
                return Object(f) === f ? f : t;
              })(n, je.call(arguments).concat(["hsi"]), function () {});
            }),
            (h.hsi = P),
            (n.prototype.hsi = function () {
              return ce(this._rgb);
            }),
            (z = function (e, r, n, t) {
              var f, a, u, o, c, i, l, s, d, h;
              return (
                "hsl" === t
                  ? ((d = e.hsl()), (h = r.hsl()))
                  : "hsv" === t
                  ? ((d = e.hsv()), (h = r.hsv()))
                  : "hcg" === t
                  ? ((d = e.hcg()), (h = r.hcg()))
                  : "hsi" === t
                  ? ((d = e.hsi()), (h = r.hsi()))
                  : ("lch" !== t && "hcl" !== t) || ((t = "hcl"), (d = e.hcl()), (h = r.hcl())),
                "h" === t.substr(0, 1) && ((a = d[0]), (l = d[1]), (o = d[2]), (u = h[0]), (s = h[1]), (c = h[2])),
                isNaN(a) || isNaN(u)
                  ? isNaN(a)
                    ? isNaN(u)
                      ? (f = Number.NaN)
                      : ((f = u), (1 !== o && 0 !== o) || "hsv" === t || (i = s))
                    : ((f = a), (1 !== c && 0 !== c) || "hsv" === t || (i = l))
                  : (f = a + n * (u > a && u - a > 180 ? u - (a + 360) : u < a && a - u > 180 ? u + 360 - a : u - a)),
                null == i && (i = l + n * (s - l)),
                A[t](f, i, o + n * (c - o))
              );
            }),
            (Y = function (e, r, n, t) {
              var f, a;
              return (f = e.num()), (a = r.num()), A.num(f + (a - f) * n, "num");
            }),
            (b = b.concat(
              (function () {
                var e, r, n, t;
                for (t = [], r = 0, e = (n = ["hsv", "hsl", "hsi", "hcl", "lch", "hcg"]).length; r < e; r++) (Q = n[r]), t.push([Q, z]);
                return t;
              })()
            )).push(["num", Y]),
            (R = function (e, r, t, f) {
              var a, u;
              return (a = e.lab()), (u = r.lab()), new n(a[0] + t * (u[0] - a[0]), a[1] + t * (u[1] - a[1]), a[2] + t * (u[2] - a[2]), f);
            }),
            b.push(["lab", R]);
        }.call(this);
    },
    37946: (e, r, n) => {
      "use strict";
      n.d(r, { ZP: () => c });
      const t = (e) => +e.toFixed(10),
        f = (e, r) => ({ x: t(e), y: t(r) }),
        a = (e) => {
          return ((r = e),
          r
            .slice(r.indexOf("(") + 1, r.lastIndexOf(")"))
            .split(",")
            .map((e) => e.trim())
            .filter((e) => "" !== e)).map((e) => ((e) => (Number.isNaN(Number(e)) ? e : Number(e)))(e));
          var r;
        };
      function u(e, r, n) {
        return (1 - e) * (1 - e) * (1 - e) * 0 + (1 - e) * (1 - e) * 3 * e * r + 3 * (1 - e) * (e * e) * n + e * e * e * 1;
      }
      const o = {
        ease: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "ease-out": "cubic-bezier(0, 0, 0.58, 1)"
      };
      function c(e, r) {
        const n = `Error parsing "${e}".`;
        if ((o[e] && (e = o[e]), e.includes("steps("))) {
          const r = a(e),
            [t, u] = r;
          if (r.length < 1 || r.length > 2) throw new Error(`${n} Got ${r.length} arguments but expected 1 or 2.`);
          if ("number" != typeof r[0]) throw new Error(`${n} "${r[0]}" is not a number.`);
          if (2 === r.length && "string" != typeof r[1]) throw new Error(`${n} "${r[1]}" is not a string.`);
          return (function (e, r = "skip-end") {
            const n = [];
            let t = 0;
            for (; t < e; ) {
              const a = t / e,
                u = (t + 1) / e;
              let o;
              if ("skip-none" === r) o = t / (e - 1);
              else if ("skip-both" === r) o = (t + 1) / (e + 1);
              else if ("skip-start" === r || "start" === r) o = (t + 1) / e;
              else {
                if ("skip-end" !== r && "end" !== r) throw new Error(`Error can't recognise step skip "${r}"`);
                o = t / e;
              }
              n.push(f(a, o)), n.push(f(u, o)), ++t;
            }
            return n;
          })(t, u);
        }
        if (e.includes("cubic-bezier(")) {
          const t = a(e),
            [o, c, i, l] = t;
          if (4 !== t.length) throw new Error(`${n} Got ${t.length} arguments but expected 4.`);
          return (
            t.forEach((e) => {
              if ("number" != typeof e) throw new Error(`${n} "${e}" is not a number.`);
            }),
            (function (e, r, n, t, a = 10) {
              const o = 1 / a;
              let c = [];
              for (let f = 0; f <= 1; f += o) c.push({ x: u(f, e, n), y: u(f, r, t) });
              return c.map((e) => f(e.x, e.y));
            })(o, c, i, l, r)
          );
        }
        throw new Error(`${n} If not a typo then please create a GitHub issue :)`);
      }
    },
    9254: (e, r, n) => {
      var t = n(80788),
        f = n(45959),
        a = n(91120);
      function u(e) {
        return this instanceof u ? ((this.nodes = t(e)), this) : new u(e);
      }
      (u.prototype.toString = function () {
        return Array.isArray(this.nodes) ? a(this.nodes) : "";
      }),
        (u.prototype.walk = function (e, r) {
          return f(this.nodes, e, r), this;
        }),
        (u.unit = n(23433)),
        (u.walk = f),
        (u.stringify = a),
        (e.exports = u);
    },
    80788: (e) => {
      var r = "(".charCodeAt(0),
        n = ")".charCodeAt(0),
        t = "'".charCodeAt(0),
        f = '"'.charCodeAt(0),
        a = "\\".charCodeAt(0),
        u = "/".charCodeAt(0),
        o = ",".charCodeAt(0),
        c = ":".charCodeAt(0),
        i = "*".charCodeAt(0);
      e.exports = function (e) {
        for (
          var l,
            s,
            d,
            h,
            b,
            p,
            g,
            m,
            y = [],
            v = e,
            w = 0,
            k = v.charCodeAt(w),
            A = v.length,
            x = [{ nodes: y }],
            N = 0,
            _ = "",
            M = "",
            C = "";
          w < A;

        )
          if (k <= 32) {
            l = w;
            do {
              (l += 1), (k = v.charCodeAt(l));
            } while (k <= 32);
            (h = v.slice(w, l)),
              (d = y[y.length - 1]),
              k === n && N
                ? (C = h)
                : d && "div" === d.type
                ? (d.after = h)
                : k === o || k === c || (k === u && v.charCodeAt(l + 1) !== i)
                ? (M = h)
                : y.push({ type: "space", sourceIndex: w, value: h }),
              (w = l);
          } else if (k === t || k === f) {
            (l = w), (h = { type: "string", sourceIndex: w, quote: (s = k === t ? "'" : '"') });
            do {
              if (((b = !1), ~(l = v.indexOf(s, l + 1)))) for (p = l; v.charCodeAt(p - 1) === a; ) (p -= 1), (b = !b);
              else (l = (v += s).length - 1), (h.unclosed = !0);
            } while (b);
            (h.value = v.slice(w + 1, l)), y.push(h), (w = l + 1), (k = v.charCodeAt(w));
          } else if (k === u && v.charCodeAt(w + 1) === i)
            (h = { type: "comment", sourceIndex: w }),
              -1 === (l = v.indexOf("*/", w)) && ((h.unclosed = !0), (l = v.length)),
              (h.value = v.slice(w + 2, l)),
              y.push(h),
              (w = l + 2),
              (k = v.charCodeAt(w));
          else if (k === u || k === o || k === c)
            (h = v[w]),
              y.push({ type: "div", sourceIndex: w - M.length, value: h, before: M, after: "" }),
              (M = ""),
              (w += 1),
              (k = v.charCodeAt(w));
          else if (r === k) {
            l = w;
            do {
              (l += 1), (k = v.charCodeAt(l));
            } while (k <= 32);
            if (
              ((h = { type: "function", sourceIndex: w - _.length, value: _, before: v.slice(w + 1, l) }),
              (w = l),
              "url" === _ && k !== t && k !== f)
            ) {
              l -= 1;
              do {
                if (((b = !1), ~(l = v.indexOf(")", l + 1)))) for (p = l; v.charCodeAt(p - 1) === a; ) (p -= 1), (b = !b);
                else (l = (v += ")").length - 1), (h.unclosed = !0);
              } while (b);
              g = l;
              do {
                (g -= 1), (k = v.charCodeAt(g));
              } while (k <= 32);
              (h.nodes = w !== g + 1 ? [{ type: "word", sourceIndex: w, value: v.slice(w, g + 1) }] : []),
                h.unclosed && g + 1 !== l
                  ? ((h.after = ""), h.nodes.push({ type: "space", sourceIndex: g + 1, value: v.slice(g + 1, l) }))
                  : (h.after = v.slice(g + 1, l)),
                (w = l + 1),
                (k = v.charCodeAt(w)),
                y.push(h);
            } else (N += 1), (h.after = ""), y.push(h), x.push(h), (y = h.nodes = []), (m = h);
            _ = "";
          } else if (n === k && N) (w += 1), (k = v.charCodeAt(w)), (m.after = C), (C = ""), (N -= 1), x.pop(), (y = (m = x[N]).nodes);
          else {
            l = w;
            do {
              k === a && (l += 1), (l += 1), (k = v.charCodeAt(l));
            } while (l < A && !(k <= 32 || k === t || k === f || k === o || k === c || k === u || k === r || (k === n && N)));
            (h = v.slice(w, l)), r === k ? (_ = h) : y.push({ type: "word", sourceIndex: w, value: h }), (w = l);
          }
        for (w = x.length - 1; w; w -= 1) x[w].unclosed = !0;
        return x[0].nodes;
      };
    },
    91120: (e) => {
      function r(e, r) {
        var t,
          f,
          a = e.type,
          u = e.value;
        return r && void 0 !== (f = r(e))
          ? f
          : "word" === a || "space" === a
          ? u
          : "string" === a
          ? (t = e.quote || "") + u + (e.unclosed ? "" : t)
          : "comment" === a
          ? "/*" + u + (e.unclosed ? "" : "*/")
          : "div" === a
          ? (e.before || "") + u + (e.after || "")
          : Array.isArray(e.nodes)
          ? ((t = n(e.nodes)), "function" !== a ? t : u + "(" + (e.before || "") + t + (e.after || "") + (e.unclosed ? "" : ")"))
          : u;
      }
      function n(e, n) {
        var t, f;
        if (Array.isArray(e)) {
          for (t = "", f = e.length - 1; ~f; f -= 1) t = r(e[f], n) + t;
          return t;
        }
        return r(e, n);
      }
      e.exports = n;
    },
    23433: (e) => {
      var r = "-".charCodeAt(0),
        n = "+".charCodeAt(0),
        t = ".".charCodeAt(0),
        f = "e".charCodeAt(0),
        a = "E".charCodeAt(0);
      e.exports = function (e) {
        for (var u, o = 0, c = e.length, i = !1, l = -1, s = !1; o < c; ) {
          if ((u = e.charCodeAt(o)) >= 48 && u <= 57) s = !0;
          else if (u === f || u === a) {
            if (l > -1) break;
            l = o;
          } else if (u === t) {
            if (i) break;
            i = !0;
          } else {
            if (u !== n && u !== r) break;
            if (0 !== o) break;
          }
          o += 1;
        }
        return l + 1 === o && o--, !!s && { number: e.slice(0, o), unit: e.slice(o) };
      };
    },
    45959: (e) => {
      e.exports = function e(r, n, t) {
        var f, a, u, o;
        for (f = 0, a = r.length; f < a; f += 1)
          (u = r[f]),
            t || (o = n(u, f, r)),
            !1 !== o && "function" === u.type && Array.isArray(u.nodes) && e(u.nodes, n, t),
            t && n(u, f, r);
      };
    }
  }
]);
