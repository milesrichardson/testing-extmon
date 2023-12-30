(() => {
  function t(t) {
    return t && t.__esModule ? t.default : t;
  }
  function e(t, e, r, n) {
    Object.defineProperty(t, e, { get: r, set: n, enumerable: !0, configurable: !0 });
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
    n = r.parcelRequire60cc;
  n.register("5qAiP", function (r, i) {
    var o;
    (o = r.exports),
      Object.defineProperty(o, "__esModule", { value: !0, configurable: !0 }),
      e(r.exports, "compressSpaces", () => ot),
      e(r.exports, "trimLeft", () => at),
      e(r.exports, "trimRight", () => st),
      e(r.exports, "toNumbers", () => ut),
      e(r.exports, "normalizeAttributeName", () => ft),
      e(r.exports, "parseExternalUrl", () => lt),
      e(r.exports, "normalizeColor", () => ht),
      e(r.exports, "getSelectorSpecificity", () => wt),
      e(r.exports, "PSEUDO_ZERO", () => kt),
      e(r.exports, "vectorMagnitude", () => St),
      e(r.exports, "vectorsRatio", () => At),
      e(r.exports, "vectorsAngle", () => Ot),
      e(r.exports, "CB1", () => Ct),
      e(r.exports, "CB2", () => Tt),
      e(r.exports, "CB3", () => Pt),
      e(r.exports, "CB4", () => Et),
      e(r.exports, "QB1", () => Mt),
      e(r.exports, "QB2", () => Nt),
      e(r.exports, "QB3", () => Rt),
      e(r.exports, "Property", () => Vt),
      e(r.exports, "ViewPort", () => Dt),
      e(r.exports, "Point", () => _t),
      e(r.exports, "Mouse", () => Lt),
      e(r.exports, "Screen", () => It),
      e(r.exports, "Parser", () => Ut),
      e(r.exports, "Translate", () => Yt),
      e(r.exports, "Rotate", () => Ht),
      e(r.exports, "Scale", () => Xt),
      e(r.exports, "Matrix", () => Gt),
      e(r.exports, "Skew", () => Zt),
      e(r.exports, "SkewX", () => Qt),
      e(r.exports, "SkewY", () => Kt),
      e(r.exports, "Transform", () => $t),
      e(r.exports, "Element", () => te),
      e(r.exports, "UnknownElement", () => re),
      e(r.exports, "Font", () => ae),
      e(r.exports, "BoundingBox", () => se),
      e(r.exports, "RenderedElement", () => ce),
      e(r.exports, "TextElement", () => le),
      e(r.exports, "TSpanElement", () => pe),
      e(r.exports, "PathParser", () => de),
      e(r.exports, "PathElement", () => me),
      e(r.exports, "SVGElement", () => we),
      e(r.exports, "RectElement", () => Se),
      e(r.exports, "CircleElement", () => Oe),
      e(r.exports, "EllipseElement", () => Te),
      e(r.exports, "LineElement", () => Ee),
      e(r.exports, "PolylineElement", () => Ne),
      e(r.exports, "PolygonElement", () => Ve),
      e(r.exports, "PatternElement", () => _e),
      e(r.exports, "MarkerElement", () => ze),
      e(r.exports, "DefsElement", () => Ie),
      e(r.exports, "GElement", () => Fe),
      e(r.exports, "GradientElement", () => Ye),
      e(r.exports, "LinearGradientElement", () => Xe),
      e(r.exports, "RadialGradientElement", () => qe),
      e(r.exports, "StopElement", () => We),
      e(r.exports, "AnimateElement", () => Je),
      e(r.exports, "AnimateColorElement", () => $e),
      e(r.exports, "AnimateTransformElement", () => er),
      e(r.exports, "FontElement", () => or),
      e(r.exports, "FontFaceElement", () => sr),
      e(r.exports, "MissingGlyphElement", () => cr),
      e(r.exports, "GlyphElement", () => lr),
      e(r.exports, "TRefElement", () => pr),
      e(r.exports, "AElement", () => gr),
      e(r.exports, "TextPathElement", () => wr),
      e(r.exports, "ImageElement", () => Sr),
      e(r.exports, "SymbolElement", () => Or),
      e(r.exports, "SVGFontLoader", () => Cr),
      e(r.exports, "StyleElement", () => Pr),
      e(r.exports, "UseElement", () => Mr),
      e(r.exports, "FeColorMatrixElement", () => Lr),
      e(r.exports, "MaskElement", () => jr),
      e(r.exports, "ClipPathElement", () => Fr),
      e(r.exports, "FilterElement", () => Yr),
      e(r.exports, "FeDropShadowElement", () => Xr),
      e(r.exports, "FeMorphologyElement", () => qr),
      e(r.exports, "FeCompositeElement", () => Wr),
      e(r.exports, "FeGaussianBlurElement", () => Jr),
      e(r.exports, "TitleElement", () => $r),
      e(r.exports, "DescElement", () => en),
      e(r.exports, "Document", () => an),
      e(r.exports, "Canvg", () => cn),
      e(r.exports, "presets", () => fn),
      e(r.exports, "default", () => ln);
    var a = n("2ZhaM"),
      s = n("f9eLA"),
      u = n("h44i0"),
      c = n("3jBDN"),
      f = n("3aXNC"),
      l = n("eVcEB"),
      h = n("gwb0D"),
      p = n("b1j2V"),
      v = n("4kqGh"),
      g = n("c1ecJ"),
      y = n("a9BK4"),
      d = n("kR5TX"),
      x = n("eWKWJ"),
      m = n("4lSYb"),
      b = n("3SdRi"),
      w = n("7mhKD"),
      k = n("keKGA"),
      S = n("iFpyN"),
      A = n("5nOH9"),
      O = n("cCCvd"),
      C = n("3p2vv"),
      T = n("eAZcX"),
      P = n("iTfeJ"),
      E = n("dpUpM"),
      M = n("5KPKC"),
      N = n("lFgSU"),
      R = n("2yYCs"),
      V = n("1KnN5"),
      D = n("9uaPw"),
      _ = n("b99BU"),
      L = n("iyzhb"),
      z = n("5XJuU"),
      j = n("48i9x"),
      I = n("loN9A"),
      B = n("iGHXC"),
      F = n("4MhPS"),
      U = n("9zKBL"),
      Y = n("9djzX"),
      H = n("aXSjM"),
      X = n("eac5K"),
      G = n("dhOrS"),
      q = n("3TZae"),
      Z = n("7xaRw"),
      W = n("fKmQF"),
      Q = n("fbZ9B"),
      J = n("ajIk7"),
      K = n("g3WrO"),
      $ = n("iBrAh"),
      tt = n("ddgyR"),
      et = n("dkI4U"),
      rt = n("3efYe"),
      nt = n("lA8qz"),
      it = n("jhCkN");
    function ot(t) {
      return t.replace(/(?!\u3000)\s+/gm, " ");
    }
    function at(t) {
      return t.replace(/^[\n \t]+/, "");
    }
    function st(t) {
      return t.replace(/[\n \t]+$/, "");
    }
    function ut(e) {
      var r = (e || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [];
      return t(u)(r).call(r, t(s));
    }
    var ct = /^[A-Z-]+$/;
    function ft(t) {
      return ct.test(t) ? t.toLowerCase() : t;
    }
    function lt(t) {
      var e = t.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
      return e[2] || e[3] || e[4];
    }
    function ht(e) {
      if (!t(a)(e).call(e, "rgb")) return e;
      var r = 3;
      return e.replace(/\d+(\.\d+)?/g, function (e, n) {
        return r-- && n ? String(Math.round(t(s)(e))) : e;
      });
    }
    var pt = /(\[[^\]]+\])/g,
      vt = /(#[^\s\+>~\.\[:]+)/g,
      gt = /(\.[^\s\+>~\.\[:]+)/g,
      yt = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
      dt = /(:[\w-]+\([^\)]*\))/gi,
      xt = /(:[^\s\+>~\.\[:]+)/g,
      mt = /([^\s\+>~\.\[:]+)/g;
    function bt(t, e) {
      var r = t.match(e);
      return r ? [t.replace(e, " "), r.length] : [t, 0];
    }
    function wt(e) {
      var r = [0, 0, 0],
        n = e.replace(/:not\(([^\)]*)\)/g, "     $1 ").replace(/{[\s\S]*/gm, " "),
        i = 0,
        o = bt(n, pt),
        a = t(c)(o, 2);
      (n = a[0]), (i = a[1]), (r[1] += i);
      var s = bt(n, vt),
        u = t(c)(s, 2);
      (n = u[0]), (i = u[1]), (r[0] += i);
      var f = bt(n, gt),
        l = t(c)(f, 2);
      (n = l[0]), (i = l[1]), (r[1] += i);
      var h = bt(n, yt),
        p = t(c)(h, 2);
      (n = p[0]), (i = p[1]), (r[2] += i);
      var v = bt(n, dt),
        g = t(c)(v, 2);
      (n = g[0]), (i = g[1]), (r[1] += i);
      var y = bt(n, xt),
        d = t(c)(y, 2);
      (n = d[0]), (i = d[1]), (r[1] += i);
      var x = bt((n = n.replace(/[\*\s\+>~]/g, " ").replace(/[#\.]/g, " ")), mt),
        m = t(c)(x, 2);
      return (n = m[0]), (i = m[1]), (r[2] += i), r.join("");
    }
    var kt = 1e-8;
    function St(t) {
      return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
    }
    function At(t, e) {
      return (t[0] * e[0] + t[1] * e[1]) / (St(t) * St(e));
    }
    function Ot(t, e) {
      return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(At(t, e));
    }
    function Ct(t) {
      return t * t * t;
    }
    function Tt(t) {
      return 3 * t * t * (1 - t);
    }
    function Pt(t) {
      return 3 * t * (1 - t) * (1 - t);
    }
    function Et(t) {
      return (1 - t) * (1 - t) * (1 - t);
    }
    function Mt(t) {
      return t * t;
    }
    function Nt(t) {
      return 2 * t * (1 - t);
    }
    function Rt(t) {
      return (1 - t) * (1 - t);
    }
    var Vt = (function () {
      function e(r, n, i) {
        t(w)(this, e), (this.document = r), (this.name = n), (this.value = i), (this.isNormalizedColor = !1);
      }
      return (
        t(k)(
          e,
          [
            {
              key: "split",
              value: function () {
                var r,
                  n,
                  i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : " ",
                  o = this.document,
                  a = this.name;
                return t(u)(
                  (r = t(M)((n = ot(this.getString())))
                    .call(n)
                    .split(i))
                ).call(r, function (t) {
                  return new e(o, a, t);
                });
              }
            },
            {
              key: "hasValue",
              value: function (t) {
                var e = this.value;
                return null !== e && "" !== e && (t || 0 !== e) && void 0 !== e;
              }
            },
            {
              key: "isString",
              value: function (t) {
                var e = this.value,
                  r = "string" == typeof e;
                return r && t ? t.test(e) : r;
              }
            },
            {
              key: "isUrlDefinition",
              value: function () {
                return this.isString(/^url\(/);
              }
            },
            {
              key: "isPixels",
              value: function () {
                if (!this.hasValue()) return !1;
                var t = this.getString();
                switch (!0) {
                  case /px$/.test(t):
                  case /^[0-9]+$/.test(t):
                    return !0;
                  default:
                    return !1;
                }
              }
            },
            {
              key: "setValue",
              value: function (t) {
                return (this.value = t), this;
              }
            },
            {
              key: "getValue",
              value: function (t) {
                return void 0 === t || this.hasValue() ? this.value : t;
              }
            },
            {
              key: "getNumber",
              value: function (e) {
                if (!this.hasValue()) return void 0 === e ? 0 : t(s)(e);
                var r = this.value,
                  n = t(s)(r);
                return this.isString(/%$/) && (n /= 100), n;
              }
            },
            {
              key: "getString",
              value: function (t) {
                return void 0 === t || this.hasValue() ? (void 0 === this.value ? "" : String(this.value)) : String(t);
              }
            },
            {
              key: "getColor",
              value: function (t) {
                var e = this.getString(t);
                return this.isNormalizedColor || ((this.isNormalizedColor = !0), (e = ht(e)), (this.value = e)), e;
              }
            },
            {
              key: "getDpi",
              value: function () {
                return 96;
              }
            },
            {
              key: "getRem",
              value: function () {
                return this.document.rootEmSize;
              }
            },
            {
              key: "getEm",
              value: function () {
                return this.document.emSize;
              }
            },
            {
              key: "getUnits",
              value: function () {
                return this.getString().replace(/[0-9\.\-]/g, "");
              }
            },
            {
              key: "getPixels",
              value: function (e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!this.hasValue()) return 0;
                var n = "boolean" == typeof e ? [void 0, e] : [e],
                  i = t(c)(n, 2),
                  o = i[0],
                  a = i[1],
                  s = this.document.screen.viewPort;
                switch (!0) {
                  case this.isString(/vmin$/):
                    return (this.getNumber() / 100) * Math.min(s.computeSize("x"), s.computeSize("y"));
                  case this.isString(/vmax$/):
                    return (this.getNumber() / 100) * Math.max(s.computeSize("x"), s.computeSize("y"));
                  case this.isString(/vw$/):
                    return (this.getNumber() / 100) * s.computeSize("x");
                  case this.isString(/vh$/):
                    return (this.getNumber() / 100) * s.computeSize("y");
                  case this.isString(/rem$/):
                    return this.getNumber() * this.getRem();
                  case this.isString(/em$/):
                    return this.getNumber() * this.getEm();
                  case this.isString(/ex$/):
                    return (this.getNumber() * this.getEm()) / 2;
                  case this.isString(/px$/):
                    return this.getNumber();
                  case this.isString(/pt$/):
                    return this.getNumber() * this.getDpi() * (1 / 72);
                  case this.isString(/pc$/):
                    return 15 * this.getNumber();
                  case this.isString(/cm$/):
                    return (this.getNumber() * this.getDpi()) / 2.54;
                  case this.isString(/mm$/):
                    return (this.getNumber() * this.getDpi()) / 25.4;
                  case this.isString(/in$/):
                    return this.getNumber() * this.getDpi();
                  case this.isString(/%$/) && a:
                    return this.getNumber() * this.getEm();
                  case this.isString(/%$/):
                    return this.getNumber() * s.computeSize(o);
                  default:
                    var u = this.getNumber();
                    return r && u < 1 ? u * s.computeSize(o) : u;
                }
              }
            },
            {
              key: "getMilliseconds",
              value: function () {
                return this.hasValue() ? (this.isString(/ms$/) ? this.getNumber() : 1e3 * this.getNumber()) : 0;
              }
            },
            {
              key: "getRadians",
              value: function () {
                if (!this.hasValue()) return 0;
                switch (!0) {
                  case this.isString(/deg$/):
                    return this.getNumber() * (Math.PI / 180);
                  case this.isString(/grad$/):
                    return this.getNumber() * (Math.PI / 200);
                  case this.isString(/rad$/):
                    return this.getNumber();
                  default:
                    return this.getNumber() * (Math.PI / 180);
                }
              }
            },
            {
              key: "getDefinition",
              value: function () {
                var t = this.getString(),
                  e = t.match(/#([^\)'"]+)/);
                return e && (e = e[1]), e || (e = t), this.document.definitions[e];
              }
            },
            {
              key: "getFillStyleDefinition",
              value: function (t, e) {
                var r = this.getDefinition();
                if (!r) return null;
                if ("function" == typeof r.createGradient) return r.createGradient(this.document.ctx, t, e);
                if ("function" == typeof r.createPattern) {
                  if (r.getHrefAttribute().hasValue()) {
                    var n = r.getAttribute("patternTransform");
                    (r = r.getHrefAttribute().getDefinition()), n.hasValue() && r.getAttribute("patternTransform", !0).setValue(n.value);
                  }
                  return r.createPattern(this.document.ctx, t, e);
                }
                return null;
              }
            },
            {
              key: "getTextBaseline",
              value: function () {
                return this.hasValue() ? e.textBaselineMapping[this.getString()] : null;
              }
            },
            {
              key: "addOpacity",
              value: function (r) {
                for (var n = this.getColor(), i = n.length, o = 0, a = 0; a < i && ("," === n[a] && o++, 3 !== o); a++);
                if (r.hasValue() && this.isString() && 3 !== o) {
                  var s = new (t(N))(n);
                  s.ok && ((s.alpha = r.getNumber()), (n = s.toRGBA()));
                }
                return new e(this.document, this.name, n);
              }
            }
          ],
          [
            {
              key: "empty",
              value: function (t) {
                return new e(t, "EMPTY", "");
              }
            }
          ]
        ),
        e
      );
    })();
    Vt.textBaselineMapping = {
      baseline: "alphabetic",
      "before-edge": "top",
      "text-before-edge": "top",
      middle: "middle",
      central: "middle",
      "after-edge": "bottom",
      "text-after-edge": "bottom",
      ideographic: "ideographic",
      alphabetic: "alphabetic",
      hanging: "hanging",
      mathematical: "alphabetic"
    };
    var Dt = (function () {
        function e() {
          t(w)(this, e), (this.viewPorts = []);
        }
        return (
          t(k)(e, [
            {
              key: "clear",
              value: function () {
                this.viewPorts = [];
              }
            },
            {
              key: "setCurrent",
              value: function (t, e) {
                this.viewPorts.push({ width: t, height: e });
              }
            },
            {
              key: "removeCurrent",
              value: function () {
                this.viewPorts.pop();
              }
            },
            {
              key: "getCurrent",
              value: function () {
                var t = this.viewPorts;
                return t[t.length - 1];
              }
            },
            {
              key: "computeSize",
              value: function (t) {
                return "number" == typeof t
                  ? t
                  : "x" === t
                  ? this.width
                  : "y" === t
                  ? this.height
                  : Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2)) / Math.sqrt(2);
              }
            },
            {
              key: "width",
              get: function () {
                return this.getCurrent().width;
              }
            },
            {
              key: "height",
              get: function () {
                return this.getCurrent().height;
              }
            }
          ]),
          e
        );
      })(),
      _t = (function () {
        function e(r, n) {
          t(w)(this, e), (this.x = r), (this.y = n);
        }
        return (
          t(k)(
            e,
            [
              {
                key: "angleTo",
                value: function (t) {
                  return Math.atan2(t.y - this.y, t.x - this.x);
                }
              },
              {
                key: "applyTransform",
                value: function (t) {
                  var e = this.x,
                    r = this.y,
                    n = e * t[0] + r * t[2] + t[4],
                    i = e * t[1] + r * t[3] + t[5];
                  (this.x = n), (this.y = i);
                }
              }
            ],
            [
              {
                key: "parse",
                value: function (r) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = ut(r),
                    o = t(c)(i, 2),
                    a = o[0],
                    s = void 0 === a ? n : a,
                    u = o[1];
                  return new e(s, void 0 === u ? n : u);
                }
              },
              {
                key: "parseScale",
                value: function (r) {
                  var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    i = ut(r),
                    o = t(c)(i, 2),
                    a = o[0],
                    s = void 0 === a ? n : a,
                    u = o[1];
                  return new e(s, void 0 === u ? s : u);
                }
              },
              {
                key: "parsePath",
                value: function (t) {
                  for (var r = ut(t), n = r.length, i = [], o = 0; o < n; o += 2) i.push(new e(r[o], r[o + 1]));
                  return i;
                }
              }
            ]
          ),
          e
        );
      })(),
      Lt = (function () {
        function e(r) {
          var n, i;
          t(w)(this, e),
            (this.screen = r),
            (this.working = !1),
            (this.events = []),
            (this.eventElements = []),
            (this.onClick = t(P)((n = this.onClick)).call(n, this)),
            (this.onMouseMove = t(P)((i = this.onMouseMove)).call(i, this));
        }
        return (
          t(k)(e, [
            {
              key: "isWorking",
              value: function () {
                return this.working;
              }
            },
            {
              key: "start",
              value: function () {
                if (!this.working) {
                  var t = this.screen,
                    e = this.onClick,
                    r = this.onMouseMove,
                    n = t.ctx.canvas;
                  (n.onclick = e), (n.onmousemove = r), (this.working = !0);
                }
              }
            },
            {
              key: "stop",
              value: function () {
                if (this.working) {
                  var t = this.screen.ctx.canvas;
                  (this.working = !1), (t.onclick = null), (t.onmousemove = null);
                }
              }
            },
            {
              key: "hasEvents",
              value: function () {
                return this.working && this.events.length > 0;
              }
            },
            {
              key: "runEvents",
              value: function () {
                if (this.working) {
                  var e = this.screen,
                    r = this.events,
                    n = this.eventElements,
                    i = e.ctx.canvas.style;
                  i && (i.cursor = ""),
                    t(p)(r).call(r, function (t, e) {
                      for (var r = t.run, i = n[e]; i; ) r(i), (i = i.parent);
                    }),
                    (this.events = []),
                    (this.eventElements = []);
                }
              }
            },
            {
              key: "checkPath",
              value: function (e, r) {
                if (this.working && r) {
                  var n = this.events,
                    i = this.eventElements;
                  t(p)(n).call(n, function (t, n) {
                    var o = t.x,
                      a = t.y;
                    !i[n] && r.isPointInPath && r.isPointInPath(o, a) && (i[n] = e);
                  });
                }
              }
            },
            {
              key: "checkBoundingBox",
              value: function (e, r) {
                if (this.working && r) {
                  var n = this.events,
                    i = this.eventElements;
                  t(p)(n).call(n, function (t, n) {
                    var o = t.x,
                      a = t.y;
                    !i[n] && r.isPointInBox(o, a) && (i[n] = e);
                  });
                }
              }
            },
            {
              key: "mapXY",
              value: function (t, e) {
                for (var r = this.screen, n = r.window, i = r.ctx, o = new _t(t, e), a = i.canvas; a; )
                  (o.x -= a.offsetLeft), (o.y -= a.offsetTop), (a = a.offsetParent);
                return n.scrollX && (o.x += n.scrollX), n.scrollY && (o.y += n.scrollY), o;
              }
            },
            {
              key: "onClick",
              value: function (t) {
                var e = this.mapXY((t || event).clientX, (t || event).clientY),
                  r = e.x,
                  n = e.y;
                this.events.push({
                  type: "onclick",
                  x: r,
                  y: n,
                  run: function (t) {
                    t.onClick && t.onClick();
                  }
                });
              }
            },
            {
              key: "onMouseMove",
              value: function (t) {
                var e = this.mapXY((t || event).clientX, (t || event).clientY),
                  r = e.x,
                  n = e.y;
                this.events.push({
                  type: "onmousemove",
                  x: r,
                  y: n,
                  run: function (t) {
                    t.onMouseMove && t.onMouseMove();
                  }
                });
              }
            }
          ]),
          e
        );
      })(),
      zt = "undefined" != typeof window ? window : null,
      jt = "undefined" != typeof fetch ? t(P)(fetch).call(fetch, void 0) : null,
      It = (function () {
        function e(r) {
          var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = n.fetch,
            o = void 0 === i ? jt : i,
            a = n.window,
            s = void 0 === a ? zt : a;
          t(w)(this, e),
            (this.ctx = r),
            (this.FRAMERATE = 30),
            (this.MAX_VIRTUAL_PIXELS = 3e4),
            (this.CLIENT_WIDTH = 800),
            (this.CLIENT_HEIGHT = 600),
            (this.viewPort = new Dt()),
            (this.mouse = new Lt(this)),
            (this.animations = []),
            (this.waits = []),
            (this.frameDuration = 0),
            (this.isReadyLock = !1),
            (this.isFirstRender = !0),
            (this.intervalId = null),
            (this.window = s),
            (this.fetch = o);
        }
        return (
          t(k)(e, [
            {
              key: "wait",
              value: function (t) {
                this.waits.push(t);
              }
            },
            {
              key: "ready",
              value: function () {
                return this.readyPromise ? this.readyPromise : t(T).resolve();
              }
            },
            {
              key: "isReady",
              value: function () {
                var e;
                if (this.isReadyLock) return !0;
                var r = t(C)((e = this.waits)).call(e, function (t) {
                  return t();
                });
                return r && ((this.waits = []), this.resolveReady && this.resolveReady()), (this.isReadyLock = r), r;
              }
            },
            {
              key: "setDefaults",
              value: function (t) {
                (t.strokeStyle = "rgba(0,0,0,0)"), (t.lineCap = "butt"), (t.lineJoin = "miter"), (t.miterLimit = 4);
              }
            },
            {
              key: "setViewBox",
              value: function (e) {
                var r = e.document,
                  n = e.ctx,
                  i = e.aspectRatio,
                  o = e.width,
                  a = e.desiredWidth,
                  s = e.height,
                  u = e.desiredHeight,
                  f = e.minX,
                  l = void 0 === f ? 0 : f,
                  h = e.minY,
                  p = void 0 === h ? 0 : h,
                  v = e.refX,
                  g = e.refY,
                  y = e.clip,
                  d = void 0 !== y && y,
                  x = e.clipX,
                  m = void 0 === x ? 0 : x,
                  b = e.clipY,
                  w = void 0 === b ? 0 : b,
                  k = ot(i)
                    .replace(/^defer\s/, "")
                    .split(" "),
                  S = t(c)(k, 2),
                  A = S[0] || "xMidYMid",
                  O = S[1] || "meet",
                  C = o / a,
                  T = s / u,
                  P = Math.min(C, T),
                  E = Math.max(C, T),
                  M = a,
                  N = u;
                "meet" === O && ((M *= P), (N *= P)), "slice" === O && ((M *= E), (N *= E));
                var R = new Vt(r, "refX", v),
                  V = new Vt(r, "refY", g),
                  D = R.hasValue() && V.hasValue();
                if ((D && n.translate(-P * R.getPixels("x"), -P * V.getPixels("y")), d)) {
                  var _ = P * m,
                    L = P * w;
                  n.beginPath(), n.moveTo(_, L), n.lineTo(o, L), n.lineTo(o, s), n.lineTo(_, s), n.closePath(), n.clip();
                }
                if (!D) {
                  var z = "meet" === O && P === T,
                    j = "slice" === O && E === T,
                    I = "meet" === O && P === C,
                    B = "slice" === O && E === C;
                  /^xMid/.test(A) && (z || j) && n.translate(o / 2 - M / 2, 0),
                    /YMid$/.test(A) && (I || B) && n.translate(0, s / 2 - N / 2),
                    /^xMax/.test(A) && (z || j) && n.translate(o - M, 0),
                    /YMax$/.test(A) && (I || B) && n.translate(0, s - N);
                }
                switch (!0) {
                  case "none" === A:
                    n.scale(C, T);
                    break;
                  case "meet" === O:
                    n.scale(P, P);
                    break;
                  case "slice" === O:
                    n.scale(E, E);
                }
                n.translate(-l, -p);
              }
            },
            {
              key: "start",
              value: function (e) {
                var r = this,
                  n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                  i = n.enableRedraw,
                  o = void 0 !== i && i,
                  a = n.ignoreMouse,
                  s = void 0 !== a && a,
                  u = n.ignoreAnimation,
                  c = void 0 !== u && u,
                  f = n.ignoreDimensions,
                  l = void 0 !== f && f,
                  h = n.ignoreClear,
                  p = void 0 !== h && h,
                  v = n.forceRedraw,
                  g = n.scaleWidth,
                  y = n.scaleHeight,
                  d = n.offsetX,
                  x = n.offsetY,
                  m = this.FRAMERATE,
                  b = this.mouse,
                  w = 1e3 / m;
                if (
                  ((this.frameDuration = w),
                  (this.readyPromise = new (t(T))(function (t) {
                    r.resolveReady = t;
                  })),
                  this.isReady() && this.render(e, l, p, g, y, d, x),
                  o)
                ) {
                  var k = t(O)(),
                    S = k,
                    A = 0;
                  s || b.start(),
                    (this.intervalId = t(E)(function n() {
                      (k = t(O)()),
                        (A = k - S) >= w && ((S = k - (A % w)), r.shouldUpdate(c, v) && (r.render(e, l, p, g, y, d, x), b.runEvents())),
                        (r.intervalId = t(E)(n));
                    }));
                }
              }
            },
            {
              key: "stop",
              value: function () {
                this.intervalId && (t(E).cancel(this.intervalId), (this.intervalId = null)), this.mouse.stop();
              }
            },
            {
              key: "shouldUpdate",
              value: function (e, r) {
                if (!e) {
                  var n,
                    i = this.frameDuration,
                    o = t(A)((n = this.animations)).call(
                      n,
                      function (t, e) {
                        return e.update(i) || t;
                      },
                      !1
                    );
                  if (o) return !0;
                }
                return !("function" != typeof r || !r()) || !(this.isReadyLock || !this.isReady()) || !!this.mouse.hasEvents();
              }
            },
            {
              key: "render",
              value: function (e, r, n, i, o, a, s) {
                var u = this.CLIENT_WIDTH,
                  c = this.CLIENT_HEIGHT,
                  f = this.viewPort,
                  l = this.ctx,
                  h = this.isFirstRender,
                  p = l.canvas;
                f.clear(), p.width && p.height ? f.setCurrent(p.width, p.height) : f.setCurrent(u, c);
                var v = e.getStyle("width"),
                  g = e.getStyle("height");
                !r &&
                  (h || ("number" != typeof i && "number" != typeof o)) &&
                  (v.hasValue() && ((p.width = v.getPixels("x")), p.style && (p.style.width = "".concat(p.width, "px"))),
                  g.hasValue() && ((p.height = g.getPixels("y")), p.style && (p.style.height = "".concat(p.height, "px"))));
                var y = p.clientWidth || p.width,
                  d = p.clientHeight || p.height;
                if (
                  (r && v.hasValue() && g.hasValue() && ((y = v.getPixels("x")), (d = g.getPixels("y"))),
                  f.setCurrent(y, d),
                  "number" == typeof a && e.getAttribute("x", !0).setValue(a),
                  "number" == typeof s && e.getAttribute("y", !0).setValue(s),
                  "number" == typeof i || "number" == typeof o)
                ) {
                  var x,
                    m,
                    b = ut(e.getAttribute("viewBox").getString()),
                    w = 0,
                    k = 0;
                  if ("number" == typeof i) {
                    var A = e.getStyle("width");
                    A.hasValue() ? (w = A.getPixels("x") / i) : isNaN(b[2]) || (w = b[2] / i);
                  }
                  if ("number" == typeof o) {
                    var O = e.getStyle("height");
                    O.hasValue() ? (k = O.getPixels("y") / o) : isNaN(b[3]) || (k = b[3] / o);
                  }
                  w || (w = k), k || (k = w), e.getAttribute("width", !0).setValue(i), e.getAttribute("height", !0).setValue(o);
                  var C = e.getStyle("transform", !0, !0);
                  C.setValue(t(S)((x = t(S)((m = "".concat(C.getString(), " scale("))).call(m, 1 / w, ", "))).call(x, 1 / k, ")"));
                }
                n || l.clearRect(0, 0, y, d), e.render(l), h && (this.isFirstRender = !1);
              }
            }
          ]),
          e
        );
      })();
    (It.defaultWindow = zt), (It.defaultFetch = jt);
    var Bt = It.defaultFetch,
      Ft = "undefined" != typeof DOMParser ? DOMParser : null,
      Ut = (function () {
        function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = r.fetch,
            i = void 0 === n ? Bt : n,
            o = r.DOMParser,
            a = void 0 === o ? Ft : o;
          t(w)(this, e), (this.fetch = i), (this.DOMParser = a);
        }
        var r, n;
        return (
          t(k)(e, [
            {
              key: "parse",
              value:
                ((n = t(m)(
                  t(x).mark(function e(r) {
                    return t(x).wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (!/^</.test(r)) {
                                t.next = 2;
                                break;
                              }
                              return t.abrupt("return", this.parseFromString(r));
                            case 2:
                              return t.abrupt("return", this.load(r));
                            case 3:
                            case "end":
                              return t.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (t) {
                  return n.apply(this, arguments);
                })
            },
            {
              key: "parseFromString",
              value: function (t) {
                var e = new this.DOMParser();
                try {
                  return this.checkDocument(e.parseFromString(t, "image/svg+xml"));
                } catch (r) {
                  return this.checkDocument(e.parseFromString(t, "text/xml"));
                }
              }
            },
            {
              key: "checkDocument",
              value: function (t) {
                var e = t.getElementsByTagName("parsererror")[0];
                if (e) throw new Error(e.textContent);
                return t;
              }
            },
            {
              key: "load",
              value:
                ((r = t(m)(
                  t(x).mark(function e(r) {
                    var n, i;
                    return t(x).wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (t.next = 2), this.fetch(r);
                            case 2:
                              return (n = t.sent), (t.next = 5), n.text();
                            case 5:
                              return (i = t.sent), t.abrupt("return", this.parseFromString(i));
                            case 7:
                            case "end":
                              return t.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function (t) {
                  return r.apply(this, arguments);
                })
            }
          ]),
          e
        );
      })(),
      Yt = (function () {
        function e(r, n) {
          t(w)(this, e), (this.type = "translate"), (this.point = null), (this.point = _t.parse(n));
        }
        return (
          t(k)(e, [
            {
              key: "apply",
              value: function (t) {
                var e = this.point,
                  r = e.x,
                  n = e.y;
                t.translate(r || 0, n || 0);
              }
            },
            {
              key: "unapply",
              value: function (t) {
                var e = this.point,
                  r = e.x,
                  n = e.y;
                t.translate(-1 * r || 0, -1 * n || 0);
              }
            },
            {
              key: "applyToPoint",
              value: function (t) {
                var e = this.point,
                  r = e.x,
                  n = e.y;
                t.applyTransform([1, 0, 0, 1, r || 0, n || 0]);
              }
            }
          ]),
          e
        );
      })(),
      Ht = (function () {
        function e(r, n, i) {
          t(w)(this, e),
            (this.type = "rotate"),
            (this.angle = null),
            (this.originX = null),
            (this.originY = null),
            (this.cx = 0),
            (this.cy = 0);
          var o = ut(n);
          (this.angle = new Vt(r, "angle", o[0])),
            (this.originX = i[0]),
            (this.originY = i[1]),
            (this.cx = o[1] || 0),
            (this.cy = o[2] || 0);
        }
        return (
          t(k)(e, [
            {
              key: "apply",
              value: function (t) {
                var e = this.cx,
                  r = this.cy,
                  n = this.originX,
                  i = this.originY,
                  o = this.angle,
                  a = e + n.getPixels("x"),
                  s = r + i.getPixels("y");
                t.translate(a, s), t.rotate(o.getRadians()), t.translate(-a, -s);
              }
            },
            {
              key: "unapply",
              value: function (t) {
                var e = this.cx,
                  r = this.cy,
                  n = this.angle;
                t.translate(e, r), t.rotate(-1 * n.getRadians()), t.translate(-e, -r);
              }
            },
            {
              key: "applyToPoint",
              value: function (t) {
                var e = this.cx,
                  r = this.cy,
                  n = this.angle.getRadians();
                t.applyTransform([1, 0, 0, 1, e || 0, r || 0]),
                  t.applyTransform([Math.cos(n), Math.sin(n), -Math.sin(n), Math.cos(n), 0, 0]),
                  t.applyTransform([1, 0, 0, 1, -e || 0, -r || 0]);
              }
            }
          ]),
          e
        );
      })(),
      Xt = (function () {
        function e(r, n) {
          t(w)(this, e), (this.type = "scale"), (this.scale = null);
          var i = _t.parseScale(n);
          (0 !== i.x && 0 !== i.y) || ((i.x = kt), (i.y = kt)), (this.scale = i);
        }
        return (
          t(k)(e, [
            {
              key: "apply",
              value: function (t) {
                var e = this.scale,
                  r = e.x,
                  n = e.y;
                t.scale(r, n || r);
              }
            },
            {
              key: "unapply",
              value: function (t) {
                var e = this.scale,
                  r = e.x,
                  n = e.y;
                t.scale(1 / r, 1 / n || r);
              }
            },
            {
              key: "applyToPoint",
              value: function (t) {
                var e = this.scale,
                  r = e.x,
                  n = e.y;
                t.applyTransform([r || 0, 0, 0, n || 0, 0, 0]);
              }
            }
          ]),
          e
        );
      })(),
      Gt = (function () {
        function e(r, n) {
          t(w)(this, e), (this.type = "matrix"), (this.matrix = []), (this.matrix = ut(n));
        }
        return (
          t(k)(e, [
            {
              key: "apply",
              value: function (t) {
                var e = this.matrix;
                t.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
              }
            },
            {
              key: "unapply",
              value: function (t) {
                var e = this.matrix,
                  r = e[0],
                  n = e[2],
                  i = e[4],
                  o = e[1],
                  a = e[3],
                  s = e[5],
                  u = 1 / (r * (1 * a - 0 * s) - n * (1 * o - 0 * s) + i * (0 * o - 0 * a));
                t.transform(
                  u * (1 * a - 0 * s),
                  u * (0 * s - 1 * o),
                  u * (0 * i - 1 * n),
                  u * (1 * r - 0 * i),
                  u * (n * s - i * a),
                  u * (i * o - r * s)
                );
              }
            },
            {
              key: "applyToPoint",
              value: function (t) {
                t.applyTransform(this.matrix);
              }
            }
          ]),
          e
        );
      })();
    function qt(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Zt = (function (e) {
      t(V)(n, e);
      var r = qt(n);
      function n(e, i) {
        var o;
        return t(w)(this, n), ((o = r.call(this, e, i)).type = "skew"), (o.angle = null), (o.angle = new Vt(e, "angle", i)), o;
      }
      return n;
    })(Gt);
    function Wt(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Qt = (function (e) {
      t(V)(n, e);
      var r = Wt(n);
      function n(e, i) {
        var o;
        return t(w)(this, n), ((o = r.call(this, e, i)).type = "skewX"), (o.matrix = [1, 0, Math.tan(o.angle.getRadians()), 1, 0, 0]), o;
      }
      return n;
    })(Zt);
    function Jt(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Kt = (function (e) {
      t(V)(n, e);
      var r = Jt(n);
      function n(e, i) {
        var o;
        return t(w)(this, n), ((o = r.call(this, e, i)).type = "skewY"), (o.matrix = [1, Math.tan(o.angle.getRadians()), 0, 1, 0, 0]), o;
      }
      return n;
    })(Zt);
    var $t = (function () {
      function e(r, n, i) {
        var o = this;
        t(w)(this, e), (this.document = r), (this.transforms = []);
        var a = (function (e) {
          var r;
          return t(M)((r = ot(e)))
            .call(r)
            .replace(/\)([a-zA-Z])/g, ") $1")
            .replace(/\)(\s?,\s?)/g, ") ")
            .split(/\s(?=[a-z])/);
        })(n);
        t(p)(a).call(a, function (r) {
          if ("none" !== r) {
            var n = (function (e) {
                var r = e.split("("),
                  n = t(c)(r, 2),
                  i = n[0],
                  o = n[1];
                return [t(M)(i).call(i), t(M)(o).call(o).replace(")", "")];
              })(r),
              a = t(c)(n, 2),
              s = a[0],
              u = a[1],
              f = e.transformTypes[s];
            void 0 !== f && o.transforms.push(new f(o.document, u, i));
          }
        });
      }
      return (
        t(k)(
          e,
          [
            {
              key: "apply",
              value: function (t) {
                for (var e = this.transforms, r = e.length, n = 0; n < r; n++) e[n].apply(t);
              }
            },
            {
              key: "unapply",
              value: function (t) {
                for (var e = this.transforms, r = e.length - 1; r >= 0; r--) e[r].unapply(t);
              }
            },
            {
              key: "applyToPoint",
              value: function (t) {
                for (var e = this.transforms, r = e.length, n = 0; n < r; n++) e[n].applyToPoint(t);
              }
            }
          ],
          [
            {
              key: "fromElement",
              value: function (r, n) {
                var i = n.getStyle("transform", !1, !0),
                  o = n.getStyle("transform-origin", !1, !0).split(),
                  a = t(c)(o, 2),
                  s = a[0],
                  u = a[1],
                  f = [s, void 0 === u ? s : u];
                return i.hasValue() ? new e(r, i.getString(), f) : null;
              }
            }
          ]
        ),
        e
      );
    })();
    $t.transformTypes = { translate: Yt, rotate: Ht, scale: Xt, matrix: Gt, skewX: Qt, skewY: Kt };
    var te = (function () {
      function e(r, n) {
        var i,
          o,
          a = this,
          s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (
          (t(w)(this, e),
          (this.document = r),
          (this.node = n),
          (this.captureTextNodes = s),
          (this.attributes = {}),
          (this.styles = {}),
          (this.stylesSpecificity = {}),
          (this.animationFrozen = !1),
          (this.animationFrozenValue = ""),
          (this.parent = null),
          (this.children = []),
          n && 1 === n.nodeType)
        ) {
          if (
            (t(p)((i = t(I)(n.attributes))).call(i, function (t) {
              var e = ft(t.nodeName);
              a.attributes[e] = new Vt(r, e, t.value);
            }),
            this.addStylesFromStyleDefinition(),
            this.getAttribute("style").hasValue())
          ) {
            var f,
              l = t(u)((f = this.getAttribute("style").getString().split(";"))).call(f, function (e) {
                return t(M)(e).call(e);
              });
            t(p)(l).call(l, function (e) {
              var n;
              if (e) {
                var i = t(u)((n = e.split(":"))).call(n, function (e) {
                    return t(M)(e).call(e);
                  }),
                  o = t(c)(i, 2),
                  s = o[0],
                  f = o[1];
                a.styles[s] = new Vt(r, s, f);
              }
            });
          }
          var h = r.definitions,
            v = this.getAttribute("id");
          v.hasValue() && (h[v.getValue()] || (h[v.getValue()] = this)),
            t(p)((o = t(I)(n.childNodes))).call(o, function (t) {
              if (1 === t.nodeType) a.addChild(t);
              else if (s && (3 === t.nodeType || 4 === t.nodeType)) {
                var e = r.createTextNode(t);
                e.getText().length > 0 && a.addChild(e);
              }
            });
        }
      }
      return (
        t(k)(e, [
          {
            key: "getAttribute",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = this.attributes[t];
              if (!r && e) {
                var n = new Vt(this.document, t, "");
                return (this.attributes[t] = n), n;
              }
              return r || Vt.empty(this.document);
            }
          },
          {
            key: "getHrefAttribute",
            value: function () {
              for (var t in this.attributes) if ("href" === t || /:href$/.test(t)) return this.attributes[t];
              return Vt.empty(this.document);
            }
          },
          {
            key: "getStyle",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                n = this.styles[t];
              if (n) return n;
              var i = this.getAttribute(t);
              if (i && i.hasValue()) return (this.styles[t] = i), i;
              if (!r) {
                var o = this.parent;
                if (o) {
                  var a = o.getStyle(t);
                  if (a && a.hasValue()) return a;
                }
              }
              if (e) {
                var s = new Vt(this.document, t, "");
                return (this.styles[t] = s), s;
              }
              return n || Vt.empty(this.document);
            }
          },
          {
            key: "render",
            value: function (t) {
              if ("none" !== this.getStyle("display").getString() && "hidden" !== this.getStyle("visibility").getString()) {
                if ((t.save(), this.getStyle("mask").hasValue())) {
                  var e = this.getStyle("mask").getDefinition();
                  e && (this.applyEffects(t), e.apply(t, this));
                } else if ("none" !== this.getStyle("filter").getValue("none")) {
                  var r = this.getStyle("filter").getDefinition();
                  r && (this.applyEffects(t), r.apply(t, this));
                } else this.setContext(t), this.renderChildren(t), this.clearContext(t);
                t.restore();
              }
            }
          },
          { key: "setContext", value: function (t) {} },
          {
            key: "applyEffects",
            value: function (t) {
              var e = $t.fromElement(this.document, this);
              e && e.apply(t);
              var r = this.getStyle("clip-path", !1, !0);
              if (r.hasValue()) {
                var n = r.getDefinition();
                n && n.apply(t);
              }
            }
          },
          { key: "clearContext", value: function (t) {} },
          {
            key: "renderChildren",
            value: function (e) {
              var r;
              t(p)((r = this.children)).call(r, function (t) {
                t.render(e);
              });
            }
          },
          {
            key: "addChild",
            value: function (r) {
              var n,
                i = r instanceof e ? r : this.document.createElement(r);
              (i.parent = this), t(j)((n = e.ignoreChildTypes)).call(n, i.type) || this.children.push(i);
            }
          },
          {
            key: "matchesSelector",
            value: function (e) {
              var r,
                n = this.node;
              if ("function" == typeof n.matches) return n.matches(e);
              var i = n.getAttribute("class");
              return (
                !(!i || "" === i) &&
                t(z)((r = i.split(" "))).call(r, function (t) {
                  if (".".concat(t) === e) return !0;
                })
              );
            }
          },
          {
            key: "addStylesFromStyleDefinition",
            value: function () {
              var t = this.document,
                e = t.styles,
                r = t.stylesSpecificity;
              for (var n in e)
                if ("@" !== n[0] && this.matchesSelector(n)) {
                  var i = e[n],
                    o = r[n];
                  if (i)
                    for (var a in i) {
                      var s = this.stylesSpecificity[a];
                      void 0 === s && (s = "000"), o >= s && ((this.styles[a] = i[a]), (this.stylesSpecificity[a] = o));
                    }
                }
            }
          },
          {
            key: "removeStyles",
            value: function (e, r) {
              return t(A)(r).call(
                r,
                function (r, n) {
                  var i,
                    o = e.getStyle(n);
                  if (!o.hasValue()) return r;
                  var a = o.getString();
                  return o.setValue(""), t(S)((i = [])).call(i, t(L)(r), [[n, a]]);
                },
                []
              );
            }
          },
          {
            key: "restoreStyles",
            value: function (e, r) {
              t(p)(r).call(r, function (r) {
                var n = t(c)(r, 2),
                  i = n[0],
                  o = n[1];
                e.getStyle(i, !0).setValue(o);
              });
            }
          }
        ]),
        e
      );
    })();
    function ee(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    te.ignoreChildTypes = ["title"];
    var re = (function (e) {
      t(V)(n, e);
      var r = ee(n);
      function n(e, i, o) {
        return t(w)(this, n), r.call(this, e, i, o);
      }
      return n;
    })(te);
    function ne(e) {
      var r = t(M)(e).call(e);
      return /^('|")/.test(r) ? r : '"'.concat(r, '"');
    }
    function ie(e) {
      if (!e) return "";
      var r = t(M)(e).call(e).toLowerCase();
      switch (r) {
        case "normal":
        case "italic":
        case "oblique":
        case "inherit":
        case "initial":
        case "unset":
          return r;
        default:
          return /^oblique\s+(-|)\d+deg$/.test(r) ? r : "";
      }
    }
    function oe(e) {
      if (!e) return "";
      var r = t(M)(e).call(e).toLowerCase();
      switch (r) {
        case "normal":
        case "bold":
        case "lighter":
        case "bolder":
        case "inherit":
        case "initial":
        case "unset":
          return r;
        default:
          return /^[\d.]+$/.test(r) ? r : "";
      }
    }
    var ae = (function () {
      function e(r, n, i, o, a, s) {
        t(w)(this, e);
        var u = s ? ("string" == typeof s ? e.parse(s) : s) : {};
        (this.fontFamily = a || u.fontFamily),
          (this.fontSize = o || u.fontSize),
          (this.fontStyle = r || u.fontStyle),
          (this.fontWeight = i || u.fontWeight),
          (this.fontVariant = n || u.fontVariant);
      }
      return (
        t(k)(
          e,
          [
            {
              key: "toString",
              value: function () {
                var e, r, n;
                return t(M)(
                  (e = [
                    ie(this.fontStyle),
                    this.fontVariant,
                    oe(this.fontWeight),
                    this.fontSize,
                    ((r = this.fontFamily),
                    void 0 === it
                      ? r
                      : t(u)((n = t(M)(r).call(r).split(",")))
                          .call(n, ne)
                          .join(","))
                  ].join(" "))
                ).call(e);
              }
            }
          ],
          [
            {
              key: "parse",
              value: function () {
                var r,
                  n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                  i = arguments.length > 1 ? arguments[1] : void 0,
                  o = "",
                  a = "",
                  s = "",
                  u = "",
                  f = "",
                  l = t(M)((r = ot(n)))
                    .call(r)
                    .split(" "),
                  h = { fontSize: !1, fontStyle: !1, fontWeight: !1, fontVariant: !1 };
                return (
                  t(p)(l).call(l, function (r) {
                    var n, i, l;
                    switch (!0) {
                      case !h.fontStyle && t(j)((n = e.styles)).call(n, r):
                        "inherit" !== r && (o = r), (h.fontStyle = !0);
                        break;
                      case !h.fontVariant && t(j)((i = e.variants)).call(i, r):
                        "inherit" !== r && (a = r), (h.fontStyle = !0), (h.fontVariant = !0);
                        break;
                      case !h.fontWeight && t(j)((l = e.weights)).call(l, r):
                        "inherit" !== r && (s = r), (h.fontStyle = !0), (h.fontVariant = !0), (h.fontWeight = !0);
                        break;
                      case !h.fontSize:
                        if ("inherit" !== r) {
                          var p = r.split("/"),
                            v = t(c)(p, 1);
                          u = v[0];
                        }
                        (h.fontStyle = !0), (h.fontVariant = !0), (h.fontWeight = !0), (h.fontSize = !0);
                        break;
                      default:
                        "inherit" !== r && (f += r);
                    }
                  }),
                  new e(o, a, s, u, f, i)
                );
              }
            }
          ]
        ),
        e
      );
    })();
    (ae.styles = "normal|italic|oblique|inherit"),
      (ae.variants = "normal|small-caps|inherit"),
      (ae.weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit");
    var se = (function () {
      function e() {
        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Number.NaN,
          n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.NaN,
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Number.NaN,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Number.NaN;
        t(w)(this, e), (this.x1 = r), (this.y1 = n), (this.x2 = i), (this.y2 = o), this.addPoint(r, n), this.addPoint(i, o);
      }
      return (
        t(k)(e, [
          {
            key: "addPoint",
            value: function (t, e) {
              void 0 !== t &&
                ((isNaN(this.x1) || isNaN(this.x2)) && ((this.x1 = t), (this.x2 = t)),
                t < this.x1 && (this.x1 = t),
                t > this.x2 && (this.x2 = t)),
                void 0 !== e &&
                  ((isNaN(this.y1) || isNaN(this.y2)) && ((this.y1 = e), (this.y2 = e)),
                  e < this.y1 && (this.y1 = e),
                  e > this.y2 && (this.y2 = e));
            }
          },
          {
            key: "addX",
            value: function (t) {
              this.addPoint(t, null);
            }
          },
          {
            key: "addY",
            value: function (t) {
              this.addPoint(null, t);
            }
          },
          {
            key: "addBoundingBox",
            value: function (t) {
              if (t) {
                var e = t.x1,
                  r = t.y1,
                  n = t.x2,
                  i = t.y2;
                this.addPoint(e, r), this.addPoint(n, i);
              }
            }
          },
          {
            key: "sumCubic",
            value: function (t, e, r, n, i) {
              return Math.pow(1 - t, 3) * e + 3 * Math.pow(1 - t, 2) * t * r + 3 * (1 - t) * Math.pow(t, 2) * n + Math.pow(t, 3) * i;
            }
          },
          {
            key: "bezierCurveAdd",
            value: function (t, e, r, n, i) {
              var o = 6 * e - 12 * r + 6 * n,
                a = -3 * e + 9 * r - 9 * n + 3 * i,
                s = 3 * r - 3 * e;
              if (0 !== a) {
                var u = Math.pow(o, 2) - 4 * s * a;
                if (!(u < 0)) {
                  var c = (-o + Math.sqrt(u)) / (2 * a);
                  0 < c && c < 1 && (t ? this.addX(this.sumCubic(c, e, r, n, i)) : this.addY(this.sumCubic(c, e, r, n, i)));
                  var f = (-o - Math.sqrt(u)) / (2 * a);
                  0 < f && f < 1 && (t ? this.addX(this.sumCubic(f, e, r, n, i)) : this.addY(this.sumCubic(f, e, r, n, i)));
                }
              } else {
                if (0 === o) return;
                var l = -s / o;
                0 < l && l < 1 && (t ? this.addX(this.sumCubic(l, e, r, n, i)) : this.addY(this.sumCubic(l, e, r, n, i)));
              }
            }
          },
          {
            key: "addBezierCurve",
            value: function (t, e, r, n, i, o, a, s) {
              this.addPoint(t, e), this.addPoint(a, s), this.bezierCurveAdd(!0, t, r, i, a), this.bezierCurveAdd(!1, e, n, o, s);
            }
          },
          {
            key: "addQuadraticCurve",
            value: function (t, e, r, n, i, o) {
              var a = t + (2 / 3) * (r - t),
                s = e + (2 / 3) * (n - e),
                u = a + (1 / 3) * (i - t),
                c = s + (1 / 3) * (o - e);
              this.addBezierCurve(t, e, a, u, s, c, i, o);
            }
          },
          {
            key: "isPointInBox",
            value: function (t, e) {
              var r = this.x1,
                n = this.y1,
                i = this.x2,
                o = this.y2;
              return r <= t && t <= i && n <= e && e <= o;
            }
          },
          {
            key: "x",
            get: function () {
              return this.x1;
            }
          },
          {
            key: "y",
            get: function () {
              return this.y1;
            }
          },
          {
            key: "width",
            get: function () {
              return this.x2 - this.x1;
            }
          },
          {
            key: "height",
            get: function () {
              return this.y2 - this.y1;
            }
          }
        ]),
        e
      );
    })();
    function ue(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var ce = (function (e) {
      t(V)(n, e);
      var r = ue(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).modifiedEmSizeStack = !1), e;
      }
      return (
        t(k)(n, [
          {
            key: "calculateOpacity",
            value: function () {
              for (var t = 1, e = this; e; ) {
                var r = e.getStyle("opacity", !1, !0);
                r.hasValue(!0) && (t *= r.getNumber()), (e = e.parent);
              }
              return t;
            }
          },
          {
            key: "setContext",
            value: function (t) {
              var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (!e) {
                var r = this.getStyle("fill"),
                  n = this.getStyle("fill-opacity"),
                  i = this.getStyle("stroke"),
                  o = this.getStyle("stroke-opacity");
                if (r.isUrlDefinition()) {
                  var a = r.getFillStyleDefinition(this, n);
                  a && (t.fillStyle = a);
                } else if (r.hasValue()) {
                  "currentColor" === r.getString() && r.setValue(this.getStyle("color").getColor());
                  var s = r.getColor();
                  "inherit" !== s && (t.fillStyle = "none" === s ? "rgba(0,0,0,0)" : s);
                }
                if (n.hasValue()) {
                  var u = new Vt(this.document, "fill", t.fillStyle).addOpacity(n).getColor();
                  t.fillStyle = u;
                }
                if (i.isUrlDefinition()) {
                  var c = i.getFillStyleDefinition(this, o);
                  c && (t.strokeStyle = c);
                } else if (i.hasValue()) {
                  "currentColor" === i.getString() && i.setValue(this.getStyle("color").getColor());
                  var f = i.getString();
                  "inherit" !== f && (t.strokeStyle = "none" === f ? "rgba(0,0,0,0)" : f);
                }
                if (o.hasValue()) {
                  var l = new Vt(this.document, "stroke", t.strokeStyle).addOpacity(o).getString();
                  t.strokeStyle = l;
                }
                var h = this.getStyle("stroke-width");
                if (h.hasValue()) {
                  var p = h.getPixels();
                  t.lineWidth = p || kt;
                }
                var v = this.getStyle("stroke-linecap"),
                  g = this.getStyle("stroke-linejoin"),
                  y = this.getStyle("stroke-miterlimit"),
                  d = this.getStyle("paint-order"),
                  x = this.getStyle("stroke-dasharray"),
                  m = this.getStyle("stroke-dashoffset");
                if (
                  (v.hasValue() && (t.lineCap = v.getString()),
                  g.hasValue() && (t.lineJoin = g.getString()),
                  y.hasValue() && (t.miterLimit = y.getNumber()),
                  d.hasValue() && (t.paintOrder = d.getValue()),
                  x.hasValue() && "none" !== x.getString())
                ) {
                  var b = ut(x.getString());
                  void 0 !== t.setLineDash
                    ? t.setLineDash(b)
                    : void 0 !== t.webkitLineDash
                    ? (t.webkitLineDash = b)
                    : void 0 === t.mozDash || (1 === b.length && 0 === b[0]) || (t.mozDash = b);
                  var w = m.getPixels();
                  void 0 !== t.lineDashOffset
                    ? (t.lineDashOffset = w)
                    : void 0 !== t.webkitLineDashOffset
                    ? (t.webkitLineDashOffset = w)
                    : void 0 !== t.mozDashOffset && (t.mozDashOffset = w);
                }
              }
              if (((this.modifiedEmSizeStack = !1), void 0 !== t.font)) {
                var k = this.getStyle("font"),
                  S = this.getStyle("font-style"),
                  A = this.getStyle("font-variant"),
                  O = this.getStyle("font-weight"),
                  C = this.getStyle("font-size"),
                  T = this.getStyle("font-family"),
                  P = new ae(
                    S.getString(),
                    A.getString(),
                    O.getString(),
                    C.hasValue() ? "".concat(C.getPixels(!0), "px") : "",
                    T.getString(),
                    ae.parse(k.getString(), t.font)
                  );
                S.setValue(P.fontStyle),
                  A.setValue(P.fontVariant),
                  O.setValue(P.fontWeight),
                  C.setValue(P.fontSize),
                  T.setValue(P.fontFamily),
                  (t.font = P.toString()),
                  C.isPixels() && ((this.document.emSize = C.getPixels()), (this.modifiedEmSizeStack = !0));
              }
              e || (this.applyEffects(t), (t.globalAlpha = this.calculateOpacity()));
            }
          },
          {
            key: "clearContext",
            value: function (e) {
              t(U)(t(_)(n.prototype), "clearContext", this).call(this, e), this.modifiedEmSizeStack && this.document.popEmSize();
            }
          }
        ]),
        n
      );
    })(te);
    function fe(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var le = (function (e) {
      t(V)(n, e);
      var r = fe(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, (this instanceof n ? this.constructor : void 0) === n || o)).type = "text"),
          (a.x = 0),
          (a.y = 0),
          (a.measureCache = -1),
          a
        );
      }
      return (
        t(k)(n, [
          {
            key: "setContext",
            value: function (e) {
              var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              t(U)(t(_)(n.prototype), "setContext", this).call(this, e, r);
              var i = this.getStyle("dominant-baseline").getTextBaseline() || this.getStyle("alignment-baseline").getTextBaseline();
              i && (e.textBaseline = i);
            }
          },
          {
            key: "initializeCoordinates",
            value: function (t) {
              (this.x = this.getAttribute("x").getPixels("x")), (this.y = this.getAttribute("y").getPixels("y"));
              var e = this.getAttribute("dx"),
                r = this.getAttribute("dy");
              e.hasValue() && (this.x += e.getPixels("x")),
                r.hasValue() && (this.y += r.getPixels("y")),
                (this.x += this.getAnchorDelta(t, this, 0));
            }
          },
          {
            key: "getBoundingBox",
            value: function (e) {
              var r,
                n = this;
              if ("text" !== this.type) return this.getTElementBoundingBox(e);
              this.initializeCoordinates(e);
              var i = null;
              return (
                t(p)((r = this.children)).call(r, function (t, r) {
                  var o = n.getChildBoundingBox(e, n, n, r);
                  i ? i.addBoundingBox(o) : (i = o);
                }),
                i
              );
            }
          },
          {
            key: "getFontSize",
            value: function () {
              var t = this.document,
                e = this.parent,
                r = ae.parse(t.ctx.font).fontSize;
              return e.getStyle("font-size").getNumber(r);
            }
          },
          {
            key: "getTElementBoundingBox",
            value: function (t) {
              var e = this.getFontSize();
              return new se(this.x, this.y - e, this.x + this.measureText(t), this.y);
            }
          },
          {
            key: "getGlyph",
            value: function (t, e, r) {
              var n = e[r],
                i = null;
              if (t.isArabic) {
                var o = e.length,
                  a = e[r - 1],
                  s = e[r + 1],
                  u = "isolated";
                (0 === r || " " === a) && r < o - 2 && " " !== s && (u = "terminal"),
                  r > 0 && " " !== a && r < o - 2 && " " !== s && (u = "medial"),
                  r > 0 && " " !== a && (r === o - 1 || " " === s) && (u = "initial"),
                  void 0 !== t.glyphs[n] && ((i = t.glyphs[n][u]) || "glyph" !== t.glyphs[n].type || (i = t.glyphs[n]));
              } else i = t.glyphs[n];
              return i || (i = t.missingGlyph), i;
            }
          },
          {
            key: "getText",
            value: function () {
              return "";
            }
          },
          {
            key: "getTextFromNode",
            value: function (e) {
              var r = e || this.node,
                n = t(I)(r.parentNode.childNodes),
                i = t(F)(n).call(n, r),
                o = n.length - 1,
                a = ot(r.value || r.text || r.textContent || "");
              return 0 === i && (a = at(a)), i === o && (a = st(a)), a;
            }
          },
          {
            key: "renderChildren",
            value: function (e) {
              var r,
                n = this;
              if ("text" === this.type) {
                this.initializeCoordinates(e),
                  t(p)((r = this.children)).call(r, function (t, r) {
                    n.renderChild(e, n, n, r);
                  });
                var i = this.document.screen.mouse;
                i.isWorking() && i.checkBoundingBox(this, this.getBoundingBox(e));
              } else this.renderTElementChildren(e);
            }
          },
          {
            key: "renderTElementChildren",
            value: function (e) {
              var r = this.document,
                n = this.parent,
                i = this.getText(),
                o = n.getStyle("font-family").getDefinition();
              if (o)
                for (
                  var a,
                    s = o.fontFace.unitsPerEm,
                    u = ae.parse(r.ctx.font),
                    c = n.getStyle("font-size").getNumber(u.fontSize),
                    f = n.getStyle("font-style").getString(u.fontStyle),
                    l = c / s,
                    h = o.isRTL
                      ? t(B)((a = i.split("")))
                          .call(a)
                          .join("")
                      : i,
                    p = ut(n.getAttribute("dx").getString()),
                    v = h.length,
                    g = 0;
                  g < v;
                  g++
                ) {
                  var y = this.getGlyph(o, h, g);
                  e.translate(this.x, this.y), e.scale(l, -l);
                  var d = e.lineWidth;
                  (e.lineWidth = (e.lineWidth * s) / c),
                    "italic" === f && e.transform(1, 0, 0.4, 1, 0, 0),
                    y.render(e),
                    "italic" === f && e.transform(1, 0, -0.4, 1, 0, 0),
                    (e.lineWidth = d),
                    e.scale(1 / l, -1 / l),
                    e.translate(-this.x, -this.y),
                    (this.x += (c * (y.horizAdvX || o.horizAdvX)) / s),
                    void 0 === p[g] || isNaN(p[g]) || (this.x += p[g]);
                }
              else {
                var x = this.x,
                  m = this.y;
                "stroke" === e.paintOrder
                  ? (e.strokeStyle && e.strokeText(i, x, m), e.fillStyle && e.fillText(i, x, m))
                  : (e.fillStyle && e.fillText(i, x, m), e.strokeStyle && e.strokeText(i, x, m));
              }
            }
          },
          {
            key: "getAnchorDelta",
            value: function (t, e, r) {
              var n = this.getStyle("text-anchor").getString("start");
              if ("start" !== n) {
                for (
                  var i = e.children, o = i.length, a = null, s = 0, u = r;
                  u < o && ((a = i[u]), !((u > r && a.getAttribute("x").hasValue()) || a.getAttribute("text-anchor").hasValue()));
                  u++
                )
                  s += a.measureTextRecursive(t);
                return -1 * ("end" === n ? s : s / 2);
              }
              return 0;
            }
          },
          {
            key: "adjustChildCoordinates",
            value: function (t, e, r, n) {
              var i = r.children[n];
              if ("function" != typeof i.measureText) return i;
              t.save(), i.setContext(t, !0);
              var o = i.getAttribute("x"),
                a = i.getAttribute("y"),
                s = i.getAttribute("dx"),
                u = i.getAttribute("dy"),
                c = i.getAttribute("text-anchor").getString("start");
              if (
                (0 === n &&
                  "textNode" !== i.type &&
                  (o.hasValue() || o.setValue(e.getAttribute("x").getValue("0")),
                  a.hasValue() || a.setValue(e.getAttribute("y").getValue("0")),
                  s.hasValue() || s.setValue(e.getAttribute("dx").getValue("0")),
                  u.hasValue() || u.setValue(e.getAttribute("dy").getValue("0"))),
                o.hasValue())
              ) {
                if (((i.x = o.getPixels("x") + e.getAnchorDelta(t, r, n)), "start" !== c)) {
                  var f = i.measureTextRecursive(t);
                  i.x += -1 * ("end" === c ? f : f / 2);
                }
                s.hasValue() && (i.x += s.getPixels("x"));
              } else {
                if ("start" !== c) {
                  var l = i.measureTextRecursive(t);
                  e.x += -1 * ("end" === c ? l : l / 2);
                }
                s.hasValue() && (e.x += s.getPixels("x")), (i.x = e.x);
              }
              return (
                (e.x = i.x + i.measureText(t)),
                a.hasValue()
                  ? ((i.y = a.getPixels("y")), u.hasValue() && (i.y += u.getPixels("y")))
                  : (u.hasValue() && (e.y += u.getPixels("y")), (i.y = e.y)),
                (e.y = i.y),
                i.clearContext(t),
                t.restore(),
                i
              );
            }
          },
          {
            key: "getChildBoundingBox",
            value: function (e, r, n, i) {
              var o,
                a = this.adjustChildCoordinates(e, r, n, i);
              if ("function" != typeof a.getBoundingBox) return null;
              var s = a.getBoundingBox(e);
              return s
                ? (t(p)((o = a.children)).call(o, function (t, n) {
                    var i = r.getChildBoundingBox(e, r, a, n);
                    s.addBoundingBox(i);
                  }),
                  s)
                : null;
            }
          },
          {
            key: "renderChild",
            value: function (e, r, n, i) {
              var o,
                a = this.adjustChildCoordinates(e, r, n, i);
              a.render(e),
                t(p)((o = a.children)).call(o, function (t, n) {
                  r.renderChild(e, r, a, n);
                });
            }
          },
          {
            key: "measureTextRecursive",
            value: function (e) {
              var r;
              return t(A)((r = this.children)).call(
                r,
                function (t, r) {
                  return t + r.measureTextRecursive(e);
                },
                this.measureText(e)
              );
            }
          },
          {
            key: "measureText",
            value: function (t) {
              var e = this.measureCache;
              if (~e) return e;
              var r = this.getText(),
                n = this.measureTargetText(t, r);
              return (this.measureCache = n), n;
            }
          },
          {
            key: "measureTargetText",
            value: function (e, r) {
              if (!r.length) return 0;
              var n = this.parent,
                i = n.getStyle("font-family").getDefinition();
              if (i) {
                for (
                  var o,
                    a = this.getFontSize(),
                    s = i.isRTL
                      ? t(B)((o = r.split("")))
                          .call(o)
                          .join("")
                      : r,
                    u = ut(n.getAttribute("dx").getString()),
                    c = s.length,
                    f = 0,
                    l = 0;
                  l < c;
                  l++
                ) {
                  (f += ((this.getGlyph(i, s, l).horizAdvX || i.horizAdvX) * a) / i.fontFace.unitsPerEm),
                    void 0 === u[l] || isNaN(u[l]) || (f += u[l]);
                }
                return f;
              }
              if (!e.measureText) return 10 * r.length;
              e.save(), this.setContext(e, !0);
              var h = e.measureText(r).width;
              return this.clearContext(e), e.restore(), h;
            }
          }
        ]),
        n
      );
    })(ce);
    function he(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var pe = (function (e) {
      t(V)(n, e);
      var r = he(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, (this instanceof n ? this.constructor : void 0) === n || o)).type = "tspan"),
          (a.text = a.children.length > 0 ? "" : a.getTextFromNode()),
          a
        );
      }
      return (
        t(k)(n, [
          {
            key: "getText",
            value: function () {
              return this.text;
            }
          }
        ]),
        n
      );
    })(le);
    function ve(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var ge = (function (e) {
      t(V)(n, e);
      var r = ve(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "textNode"), e;
      }
      return n;
    })(pe);
    function ye(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var de = (function (e) {
      t(V)(n, e);
      var r = ye(n);
      function n(e) {
        var i;
        return (
          t(w)(this, n),
          ((i = r.call(this, e.replace(/[+-.]\s+/g, "-").replace(/[^MmZzLlHhVvCcSsQqTtAae\d\s.,+-].*/g, ""))).control = null),
          (i.start = null),
          (i.current = null),
          (i.command = null),
          (i.commands = i.commands),
          (i.i = -1),
          (i.previousCommand = null),
          (i.points = []),
          (i.angles = []),
          i
        );
      }
      return (
        t(k)(n, [
          {
            key: "reset",
            value: function () {
              (this.i = -1),
                (this.command = null),
                (this.previousCommand = null),
                (this.start = new _t(0, 0)),
                (this.control = new _t(0, 0)),
                (this.current = new _t(0, 0)),
                (this.points = []),
                (this.angles = []);
            }
          },
          {
            key: "isEnd",
            value: function () {
              return this.i >= this.commands.length - 1;
            }
          },
          {
            key: "next",
            value: function () {
              var t = this.commands[++this.i];
              return (this.previousCommand = this.command), (this.command = t), t;
            }
          },
          {
            key: "getPoint",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "x",
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y",
                r = new _t(this.command[t], this.command[e]);
              return this.makeAbsolute(r);
            }
          },
          {
            key: "getAsControlPoint",
            value: function (t, e) {
              var r = this.getPoint(t, e);
              return (this.control = r), r;
            }
          },
          {
            key: "getAsCurrentPoint",
            value: function (t, e) {
              var r = this.getPoint(t, e);
              return (this.current = r), r;
            }
          },
          {
            key: "getReflectedControlPoint",
            value: function () {
              var t = this.previousCommand.type;
              if (
                t !== H.SVGPathData.CURVE_TO &&
                t !== H.SVGPathData.SMOOTH_CURVE_TO &&
                t !== H.SVGPathData.QUAD_TO &&
                t !== H.SVGPathData.SMOOTH_QUAD_TO
              )
                return this.current;
              var e = this.current,
                r = e.x,
                n = e.y,
                i = this.control,
                o = i.x,
                a = i.y;
              return new _t(2 * r - o, 2 * n - a);
            }
          },
          {
            key: "makeAbsolute",
            value: function (t) {
              if (this.command.relative) {
                var e = this.current,
                  r = e.x,
                  n = e.y;
                (t.x += r), (t.y += n);
              }
              return t;
            }
          },
          {
            key: "addMarker",
            value: function (t, e, r) {
              var n = this.points,
                i = this.angles;
              r && i.length > 0 && !i[i.length - 1] && (i[i.length - 1] = n[n.length - 1].angleTo(r)),
                this.addMarkerAngle(t, e ? e.angleTo(t) : null);
            }
          },
          {
            key: "addMarkerAngle",
            value: function (t, e) {
              this.points.push(t), this.angles.push(e);
            }
          },
          {
            key: "getMarkerPoints",
            value: function () {
              return this.points;
            }
          },
          {
            key: "getMarkerAngles",
            value: function () {
              for (var t = this.angles, e = t.length, r = 0; r < e; r++)
                if (!t[r])
                  for (var n = r + 1; n < e; n++)
                    if (t[n]) {
                      t[r] = t[n];
                      break;
                    }
              return t;
            }
          }
        ]),
        n
      );
    })(H.SVGPathData);
    function xe(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var me = (function (e) {
      t(V)(n, e);
      var r = xe(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "path"),
          (a.pathParser = null),
          (a.pathParser = new de(a.getAttribute("d").getString())),
          a
        );
      }
      return (
        t(k)(
          n,
          [
            {
              key: "path",
              value: function (t) {
                var e = this.pathParser,
                  r = new se();
                for (e.reset(), t && t.beginPath(); !e.isEnd(); )
                  switch (e.next().type) {
                    case de.MOVE_TO:
                      this.pathM(t, r);
                      break;
                    case de.LINE_TO:
                      this.pathL(t, r);
                      break;
                    case de.HORIZ_LINE_TO:
                      this.pathH(t, r);
                      break;
                    case de.VERT_LINE_TO:
                      this.pathV(t, r);
                      break;
                    case de.CURVE_TO:
                      this.pathC(t, r);
                      break;
                    case de.SMOOTH_CURVE_TO:
                      this.pathS(t, r);
                      break;
                    case de.QUAD_TO:
                      this.pathQ(t, r);
                      break;
                    case de.SMOOTH_QUAD_TO:
                      this.pathT(t, r);
                      break;
                    case de.ARC:
                      this.pathA(t, r);
                      break;
                    case de.CLOSE_PATH:
                      this.pathZ(t, r);
                  }
                return r;
              }
            },
            {
              key: "getBoundingBox",
              value: function (t) {
                return this.path();
              }
            },
            {
              key: "getMarkers",
              value: function () {
                var e = this.pathParser,
                  r = e.getMarkerPoints(),
                  n = e.getMarkerAngles();
                return t(u)(r).call(r, function (t, e) {
                  return [t, n[e]];
                });
              }
            },
            {
              key: "renderChildren",
              value: function (e) {
                this.path(e), this.document.screen.mouse.checkPath(this, e);
                var r = this.getStyle("fill-rule");
                "" !== e.fillStyle && ("inherit" !== r.getString("inherit") ? t(Y)(e).call(e, r.getString()) : t(Y)(e).call(e)),
                  "" !== e.strokeStyle && e.stroke();
                var n = this.getMarkers();
                if (n) {
                  var i = n.length - 1,
                    o = this.getStyle("marker-start"),
                    a = this.getStyle("marker-mid"),
                    s = this.getStyle("marker-end");
                  if (o.isUrlDefinition()) {
                    var u = o.getDefinition(),
                      f = t(c)(n[0], 2),
                      l = f[0],
                      h = f[1];
                    u.render(e, l, h);
                  }
                  if (a.isUrlDefinition())
                    for (var p = a.getDefinition(), v = 1; v < i; v++) {
                      var g = t(c)(n[v], 2),
                        y = g[0],
                        d = g[1];
                      p.render(e, y, d);
                    }
                  if (s.isUrlDefinition()) {
                    var x = s.getDefinition(),
                      m = t(c)(n[i], 2),
                      b = m[0],
                      w = m[1];
                    x.render(e, b, w);
                  }
                }
              }
            },
            {
              key: "pathM",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathM(r).point,
                  o = i.x,
                  a = i.y;
                r.addMarker(i), e.addPoint(o, a), t && t.moveTo(o, a);
              }
            },
            {
              key: "pathL",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathL(r),
                  o = i.current,
                  a = i.point,
                  s = a.x,
                  u = a.y;
                r.addMarker(a, o), e.addPoint(s, u), t && t.lineTo(s, u);
              }
            },
            {
              key: "pathH",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathH(r),
                  o = i.current,
                  a = i.point,
                  s = a.x,
                  u = a.y;
                r.addMarker(a, o), e.addPoint(s, u), t && t.lineTo(s, u);
              }
            },
            {
              key: "pathV",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathV(r),
                  o = i.current,
                  a = i.point,
                  s = a.x,
                  u = a.y;
                r.addMarker(a, o), e.addPoint(s, u), t && t.lineTo(s, u);
              }
            },
            {
              key: "pathC",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathC(r),
                  o = i.current,
                  a = i.point,
                  s = i.controlPoint,
                  u = i.currentPoint;
                r.addMarker(u, s, a),
                  e.addBezierCurve(o.x, o.y, a.x, a.y, s.x, s.y, u.x, u.y),
                  t && t.bezierCurveTo(a.x, a.y, s.x, s.y, u.x, u.y);
              }
            },
            {
              key: "pathS",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathS(r),
                  o = i.current,
                  a = i.point,
                  s = i.controlPoint,
                  u = i.currentPoint;
                r.addMarker(u, s, a),
                  e.addBezierCurve(o.x, o.y, a.x, a.y, s.x, s.y, u.x, u.y),
                  t && t.bezierCurveTo(a.x, a.y, s.x, s.y, u.x, u.y);
              }
            },
            {
              key: "pathQ",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathQ(r),
                  o = i.current,
                  a = i.controlPoint,
                  s = i.currentPoint;
                r.addMarker(s, a, a), e.addQuadraticCurve(o.x, o.y, a.x, a.y, s.x, s.y), t && t.quadraticCurveTo(a.x, a.y, s.x, s.y);
              }
            },
            {
              key: "pathT",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathT(r),
                  o = i.current,
                  a = i.controlPoint,
                  s = i.currentPoint;
                r.addMarker(s, a, a), e.addQuadraticCurve(o.x, o.y, a.x, a.y, s.x, s.y), t && t.quadraticCurveTo(a.x, a.y, s.x, s.y);
              }
            },
            {
              key: "pathA",
              value: function (t, e) {
                var r = this.pathParser,
                  i = n.pathA(r),
                  o = i.currentPoint,
                  a = i.rX,
                  s = i.rY,
                  u = i.sweepFlag,
                  c = i.xAxisRotation,
                  f = i.centp,
                  l = i.a1,
                  h = i.ad,
                  p = 1 - u ? 1 : -1,
                  v = l + p * (h / 2),
                  g = new _t(f.x + a * Math.cos(v), f.y + s * Math.sin(v));
                if (
                  (r.addMarkerAngle(g, v - (p * Math.PI) / 2),
                  r.addMarkerAngle(o, v - p * Math.PI),
                  e.addPoint(o.x, o.y),
                  t && !isNaN(l) && !isNaN(h))
                ) {
                  var y = a > s ? a : s,
                    d = a > s ? 1 : a / s,
                    x = a > s ? s / a : 1;
                  t.translate(f.x, f.y),
                    t.rotate(c),
                    t.scale(d, x),
                    t.arc(0, 0, y, l, l + h, Boolean(1 - u)),
                    t.scale(1 / d, 1 / x),
                    t.rotate(-c),
                    t.translate(-f.x, -f.y);
                }
              }
            },
            {
              key: "pathZ",
              value: function (t, e) {
                n.pathZ(this.pathParser), t && e.x1 !== e.x2 && e.y1 !== e.y2 && t.closePath();
              }
            }
          ],
          [
            {
              key: "pathM",
              value: function (t) {
                var e = t.getAsCurrentPoint();
                return (t.start = t.current), { point: e };
              }
            },
            {
              key: "pathL",
              value: function (t) {
                return { current: t.current, point: t.getAsCurrentPoint() };
              }
            },
            {
              key: "pathH",
              value: function (t) {
                var e = t.current,
                  r = t.command,
                  n = new _t((r.relative ? e.x : 0) + r.x, e.y);
                return (t.current = n), { current: e, point: n };
              }
            },
            {
              key: "pathV",
              value: function (t) {
                var e = t.current,
                  r = t.command,
                  n = new _t(e.x, (r.relative ? e.y : 0) + r.y);
                return (t.current = n), { current: e, point: n };
              }
            },
            {
              key: "pathC",
              value: function (t) {
                return {
                  current: t.current,
                  point: t.getPoint("x1", "y1"),
                  controlPoint: t.getAsControlPoint("x2", "y2"),
                  currentPoint: t.getAsCurrentPoint()
                };
              }
            },
            {
              key: "pathS",
              value: function (t) {
                return {
                  current: t.current,
                  point: t.getReflectedControlPoint(),
                  controlPoint: t.getAsControlPoint("x2", "y2"),
                  currentPoint: t.getAsCurrentPoint()
                };
              }
            },
            {
              key: "pathQ",
              value: function (t) {
                return { current: t.current, controlPoint: t.getAsControlPoint("x1", "y1"), currentPoint: t.getAsCurrentPoint() };
              }
            },
            {
              key: "pathT",
              value: function (t) {
                var e = t.current,
                  r = t.getReflectedControlPoint();
                return (t.control = r), { current: e, controlPoint: r, currentPoint: t.getAsCurrentPoint() };
              }
            },
            {
              key: "pathA",
              value: function (t) {
                var e = t.current,
                  r = t.command,
                  n = r.rX,
                  i = r.rY,
                  o = r.xRot,
                  a = r.lArcFlag,
                  s = r.sweepFlag,
                  u = o * (Math.PI / 180),
                  c = t.getAsCurrentPoint(),
                  f = new _t(
                    (Math.cos(u) * (e.x - c.x)) / 2 + (Math.sin(u) * (e.y - c.y)) / 2,
                    (-Math.sin(u) * (e.x - c.x)) / 2 + (Math.cos(u) * (e.y - c.y)) / 2
                  ),
                  l = Math.pow(f.x, 2) / Math.pow(n, 2) + Math.pow(f.y, 2) / Math.pow(i, 2);
                l > 1 && ((n *= Math.sqrt(l)), (i *= Math.sqrt(l)));
                var h =
                  (a === s ? -1 : 1) *
                  Math.sqrt(
                    (Math.pow(n, 2) * Math.pow(i, 2) - Math.pow(n, 2) * Math.pow(f.y, 2) - Math.pow(i, 2) * Math.pow(f.x, 2)) /
                      (Math.pow(n, 2) * Math.pow(f.y, 2) + Math.pow(i, 2) * Math.pow(f.x, 2))
                  );
                isNaN(h) && (h = 0);
                var p = new _t((h * n * f.y) / i, (h * -i * f.x) / n),
                  v = new _t(
                    (e.x + c.x) / 2 + Math.cos(u) * p.x - Math.sin(u) * p.y,
                    (e.y + c.y) / 2 + Math.sin(u) * p.x + Math.cos(u) * p.y
                  ),
                  g = Ot([1, 0], [(f.x - p.x) / n, (f.y - p.y) / i]),
                  y = [(f.x - p.x) / n, (f.y - p.y) / i],
                  d = [(-f.x - p.x) / n, (-f.y - p.y) / i],
                  x = Ot(y, d);
                return (
                  At(y, d) <= -1 && (x = Math.PI),
                  At(y, d) >= 1 && (x = 0),
                  { currentPoint: c, rX: n, rY: i, sweepFlag: s, xAxisRotation: u, centp: v, a1: g, ad: x }
                );
              }
            },
            {
              key: "pathZ",
              value: function (t) {
                t.current = t.start;
              }
            }
          ]
        ),
        n
      );
    })(ce);
    function be(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var we = (function (e) {
      t(V)(n, e);
      var r = be(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "svg"), (e.root = !1), e;
      }
      return (
        t(k)(n, [
          {
            key: "setContext",
            value: function (e) {
              var r = this.document,
                i = r.screen,
                o = r.window,
                a = e.canvas;
              if ((i.setDefaults(e), a.style && void 0 !== e.font && o && void 0 !== o.getComputedStyle)) {
                e.font = o.getComputedStyle(a).getPropertyValue("font");
                var s = new Vt(r, "fontSize", ae.parse(e.font).fontSize);
                s.hasValue() && ((r.rootEmSize = s.getPixels("y")), (r.emSize = r.rootEmSize));
              }
              this.getAttribute("x").hasValue() || this.getAttribute("x", !0).setValue(0),
                this.getAttribute("y").hasValue() || this.getAttribute("y", !0).setValue(0);
              var u = i.viewPort,
                c = u.width,
                f = u.height;
              this.getStyle("width").hasValue() || this.getStyle("width", !0).setValue("100%"),
                this.getStyle("height").hasValue() || this.getStyle("height", !0).setValue("100%"),
                this.getStyle("color").hasValue() || this.getStyle("color", !0).setValue("black");
              var l = this.getAttribute("refX"),
                h = this.getAttribute("refY"),
                p = this.getAttribute("viewBox"),
                v = p.hasValue() ? ut(p.getString()) : null,
                g = !this.root && "visible" !== this.getStyle("overflow").getValue("hidden"),
                y = 0,
                d = 0,
                x = 0,
                m = 0;
              v && ((y = v[0]), (d = v[1])),
                this.root ||
                  ((c = this.getStyle("width").getPixels("x")),
                  (f = this.getStyle("height").getPixels("y")),
                  "marker" === this.type && ((x = y), (m = d), (y = 0), (d = 0))),
                i.viewPort.setCurrent(c, f),
                this.node &&
                  this.getStyle("transform", !1, !0).hasValue() &&
                  !this.getStyle("transform-origin", !1, !0).hasValue() &&
                  this.getStyle("transform-origin", !0, !0).setValue("50% 50%"),
                t(U)(t(_)(n.prototype), "setContext", this).call(this, e),
                e.translate(this.getAttribute("x").getPixels("x"), this.getAttribute("y").getPixels("y")),
                v && ((c = v[2]), (f = v[3])),
                r.setViewBox({
                  ctx: e,
                  aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                  width: i.viewPort.width,
                  desiredWidth: c,
                  height: i.viewPort.height,
                  desiredHeight: f,
                  minX: y,
                  minY: d,
                  refX: l.getValue(),
                  refY: h.getValue(),
                  clip: g,
                  clipX: x,
                  clipY: m
                }),
                v && (i.viewPort.removeCurrent(), i.viewPort.setCurrent(c, f));
            }
          },
          {
            key: "clearContext",
            value: function (e) {
              t(U)(t(_)(n.prototype), "clearContext", this).call(this, e), this.document.screen.viewPort.removeCurrent();
            }
          },
          {
            key: "resize",
            value: function (e) {
              var r,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                o = this.getAttribute("width", !0),
                a = this.getAttribute("height", !0),
                s = this.getAttribute("viewBox"),
                u = this.getAttribute("style"),
                c = o.getNumber(0),
                f = a.getNumber(0);
              if (i)
                if ("string" == typeof i) this.getAttribute("preserveAspectRatio", !0).setValue(i);
                else {
                  var l = this.getAttribute("preserveAspectRatio");
                  l.hasValue() && l.setValue(l.getString().replace(/^\s*(\S.*\S)\s*$/, "$1"));
                }
              (o.setValue(e), a.setValue(n), s.hasValue()) || s.setValue(t(S)((r = "0 0 ".concat(c || e, " "))).call(r, f || n));
              if (u.hasValue()) {
                var h = this.getStyle("width"),
                  p = this.getStyle("height");
                h.hasValue() && h.setValue("".concat(e, "px")), p.hasValue() && p.setValue("".concat(n, "px"));
              }
            }
          }
        ]),
        n
      );
    })(ce);
    function ke(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Se = (function (e) {
      t(V)(n, e);
      var r = ke(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "rect"), e;
      }
      return (
        t(k)(n, [
          {
            key: "path",
            value: function (t) {
              var e = this.getAttribute("x").getPixels("x"),
                r = this.getAttribute("y").getPixels("y"),
                n = this.getStyle("width", !1, !0).getPixels("x"),
                i = this.getStyle("height", !1, !0).getPixels("y"),
                o = this.getAttribute("rx"),
                a = this.getAttribute("ry"),
                s = o.getPixels("x"),
                u = a.getPixels("y");
              if (
                (o.hasValue() && !a.hasValue() && (u = s),
                a.hasValue() && !o.hasValue() && (s = u),
                (s = Math.min(s, n / 2)),
                (u = Math.min(u, i / 2)),
                t)
              ) {
                var c = ((Math.sqrt(2) - 1) / 3) * 4;
                t.beginPath(),
                  i > 0 &&
                    n > 0 &&
                    (t.moveTo(e + s, r),
                    t.lineTo(e + n - s, r),
                    t.bezierCurveTo(e + n - s + c * s, r, e + n, r + u - c * u, e + n, r + u),
                    t.lineTo(e + n, r + i - u),
                    t.bezierCurveTo(e + n, r + i - u + c * u, e + n - s + c * s, r + i, e + n - s, r + i),
                    t.lineTo(e + s, r + i),
                    t.bezierCurveTo(e + s - c * s, r + i, e, r + i - u + c * u, e, r + i - u),
                    t.lineTo(e, r + u),
                    t.bezierCurveTo(e, r + u - c * u, e + s - c * s, r, e + s, r),
                    t.closePath());
              }
              return new se(e, r, e + n, r + i);
            }
          },
          {
            key: "getMarkers",
            value: function () {
              return null;
            }
          }
        ]),
        n
      );
    })(me);
    function Ae(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Oe = (function (e) {
      t(V)(n, e);
      var r = Ae(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "circle"), e;
      }
      return (
        t(k)(n, [
          {
            key: "path",
            value: function (t) {
              var e = this.getAttribute("cx").getPixels("x"),
                r = this.getAttribute("cy").getPixels("y"),
                n = this.getAttribute("r").getPixels();
              return t && n > 0 && (t.beginPath(), t.arc(e, r, n, 0, 2 * Math.PI, !1), t.closePath()), new se(e - n, r - n, e + n, r + n);
            }
          },
          {
            key: "getMarkers",
            value: function () {
              return null;
            }
          }
        ]),
        n
      );
    })(me);
    function Ce(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Te = (function (e) {
      t(V)(n, e);
      var r = Ce(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "ellipse"), e;
      }
      return (
        t(k)(n, [
          {
            key: "path",
            value: function (t) {
              var e = ((Math.sqrt(2) - 1) / 3) * 4,
                r = this.getAttribute("rx").getPixels("x"),
                n = this.getAttribute("ry").getPixels("y"),
                i = this.getAttribute("cx").getPixels("x"),
                o = this.getAttribute("cy").getPixels("y");
              return (
                t &&
                  r > 0 &&
                  n > 0 &&
                  (t.beginPath(),
                  t.moveTo(i + r, o),
                  t.bezierCurveTo(i + r, o + e * n, i + e * r, o + n, i, o + n),
                  t.bezierCurveTo(i - e * r, o + n, i - r, o + e * n, i - r, o),
                  t.bezierCurveTo(i - r, o - e * n, i - e * r, o - n, i, o - n),
                  t.bezierCurveTo(i + e * r, o - n, i + r, o - e * n, i + r, o),
                  t.closePath()),
                new se(i - r, o - n, i + r, o + n)
              );
            }
          },
          {
            key: "getMarkers",
            value: function () {
              return null;
            }
          }
        ]),
        n
      );
    })(me);
    function Pe(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Ee = (function (e) {
      t(V)(n, e);
      var r = Pe(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "line"), e;
      }
      return (
        t(k)(n, [
          {
            key: "getPoints",
            value: function () {
              return [
                new _t(this.getAttribute("x1").getPixels("x"), this.getAttribute("y1").getPixels("y")),
                new _t(this.getAttribute("x2").getPixels("x"), this.getAttribute("y2").getPixels("y"))
              ];
            }
          },
          {
            key: "path",
            value: function (e) {
              var r = this.getPoints(),
                n = t(c)(r, 2),
                i = n[0],
                o = i.x,
                a = i.y,
                s = n[1],
                u = s.x,
                f = s.y;
              return e && (e.beginPath(), e.moveTo(o, a), e.lineTo(u, f)), new se(o, a, u, f);
            }
          },
          {
            key: "getMarkers",
            value: function () {
              var e = this.getPoints(),
                r = t(c)(e, 2),
                n = r[0],
                i = r[1],
                o = n.angleTo(i);
              return [
                [n, o],
                [i, o]
              ];
            }
          }
        ]),
        n
      );
    })(me);
    function Me(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Ne = (function (e) {
      t(V)(n, e);
      var r = Me(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "polyline"),
          (a.points = []),
          (a.points = _t.parsePath(a.getAttribute("points").getString())),
          a
        );
      }
      return (
        t(k)(n, [
          {
            key: "path",
            value: function (e) {
              var r = this.points,
                n = t(c)(r, 1)[0],
                i = n.x,
                o = n.y,
                a = new se(i, o);
              return (
                e && (e.beginPath(), e.moveTo(i, o)),
                t(p)(r).call(r, function (t) {
                  var r = t.x,
                    n = t.y;
                  a.addPoint(r, n), e && e.lineTo(r, n);
                }),
                a
              );
            }
          },
          {
            key: "getMarkers",
            value: function () {
              var e = this.points,
                r = e.length - 1,
                n = [];
              return (
                t(p)(e).call(e, function (t, i) {
                  i !== r && n.push([t, t.angleTo(e[i + 1])]);
                }),
                n.length > 0 && n.push([e[e.length - 1], n[n.length - 1][1]]),
                n
              );
            }
          }
        ]),
        n
      );
    })(me);
    function Re(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Ve = (function (e) {
      t(V)(n, e);
      var r = Re(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "polygon"), e;
      }
      return (
        t(k)(n, [
          {
            key: "path",
            value: function (e) {
              var r = t(U)(t(_)(n.prototype), "path", this).call(this, e),
                i = t(c)(this.points, 1)[0],
                o = i.x,
                a = i.y;
              return e && (e.lineTo(o, a), e.closePath()), r;
            }
          }
        ]),
        n
      );
    })(Ne);
    function De(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var _e = (function (e) {
      t(V)(n, e);
      var r = De(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "pattern"), e;
      }
      return (
        t(k)(n, [
          {
            key: "createPattern",
            value: function (e, r, n) {
              var i = this.getStyle("width").getPixels("x", !0),
                o = this.getStyle("height").getPixels("y", !0),
                a = new we(this.document, null);
              (a.attributes.viewBox = new Vt(this.document, "viewBox", this.getAttribute("viewBox").getValue())),
                (a.attributes.width = new Vt(this.document, "width", "".concat(i, "px"))),
                (a.attributes.height = new Vt(this.document, "height", "".concat(o, "px"))),
                (a.attributes.transform = new Vt(this.document, "transform", this.getAttribute("patternTransform").getValue())),
                (a.children = this.children);
              var s = this.document.createCanvas(i, o),
                u = s.getContext("2d"),
                c = this.getAttribute("x"),
                f = this.getAttribute("y");
              c.hasValue() && f.hasValue() && u.translate(c.getPixels("x", !0), f.getPixels("y", !0)),
                n.hasValue() ? (this.styles["fill-opacity"] = n) : t(X)(this.styles, "fill-opacity");
              for (var l = -1; l <= 1; l++)
                for (var h = -1; h <= 1; h++)
                  u.save(),
                    (a.attributes.x = new Vt(this.document, "x", l * s.width)),
                    (a.attributes.y = new Vt(this.document, "y", h * s.height)),
                    a.render(u),
                    u.restore();
              return e.createPattern(s, "repeat");
            }
          }
        ]),
        n
      );
    })(te);
    function Le(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var ze = (function (e) {
      t(V)(n, e);
      var r = Le(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "marker"), e;
      }
      return (
        t(k)(n, [
          {
            key: "render",
            value: function (t, e, r) {
              if (e) {
                var n = e.x,
                  i = e.y,
                  o = this.getAttribute("orient").getValue("auto"),
                  a = this.getAttribute("markerUnits").getValue("strokeWidth");
                t.translate(n, i), "auto" === o && t.rotate(r), "strokeWidth" === a && t.scale(t.lineWidth, t.lineWidth), t.save();
                var s = new we(this.document, null);
                (s.type = this.type),
                  (s.attributes.viewBox = new Vt(this.document, "viewBox", this.getAttribute("viewBox").getValue())),
                  (s.attributes.refX = new Vt(this.document, "refX", this.getAttribute("refX").getValue())),
                  (s.attributes.refY = new Vt(this.document, "refY", this.getAttribute("refY").getValue())),
                  (s.attributes.width = new Vt(this.document, "width", this.getAttribute("markerWidth").getValue())),
                  (s.attributes.height = new Vt(this.document, "height", this.getAttribute("markerHeight").getValue())),
                  (s.attributes.overflow = new Vt(this.document, "overflow", this.getAttribute("overflow").getValue())),
                  (s.attributes.fill = new Vt(this.document, "fill", this.getAttribute("fill").getColor("black"))),
                  (s.attributes.stroke = new Vt(this.document, "stroke", this.getAttribute("stroke").getValue("none"))),
                  (s.children = this.children),
                  s.render(t),
                  t.restore(),
                  "strokeWidth" === a && t.scale(1 / t.lineWidth, 1 / t.lineWidth),
                  "auto" === o && t.rotate(-r),
                  t.translate(-n, -i);
              }
            }
          }
        ]),
        n
      );
    })(te);
    function je(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Ie = (function (e) {
      t(V)(n, e);
      var r = je(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "defs"), e;
      }
      return t(k)(n, [{ key: "render", value: function () {} }]), n;
    })(te);
    function Be(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Fe = (function (e) {
      t(V)(n, e);
      var r = Be(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "g"), e;
      }
      return (
        t(k)(n, [
          {
            key: "getBoundingBox",
            value: function (e) {
              var r,
                n = new se();
              return (
                t(p)((r = this.children)).call(r, function (t) {
                  n.addBoundingBox(t.getBoundingBox(e));
                }),
                n
              );
            }
          }
        ]),
        n
      );
    })(ce);
    function Ue(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Ye = (function (e) {
      t(V)(n, e);
      var r = Ue(n);
      function n(e, i, o) {
        var a;
        t(w)(this, n), ((a = r.call(this, e, i, o)).attributesToInherit = ["gradientUnits"]), (a.stops = []);
        var s = t(G)(a),
          u = s.stops,
          c = s.children;
        return (
          t(p)(c).call(c, function (t) {
            "stop" === t.type && u.push(t);
          }),
          a
        );
      }
      return (
        t(k)(n, [
          {
            key: "getGradientUnits",
            value: function () {
              return this.getAttribute("gradientUnits").getString("objectBoundingBox");
            }
          },
          {
            key: "createGradient",
            value: function (e, r, n) {
              var i = this,
                o = this;
              this.getHrefAttribute().hasValue() && ((o = this.getHrefAttribute().getDefinition()), this.inheritStopContainer(o));
              var a = o.stops,
                s = this.getGradient(e, r);
              if (!s) return this.addParentOpacity(n, a[a.length - 1].color);
              if (
                (t(p)(a).call(a, function (t) {
                  s.addColorStop(t.offset, i.addParentOpacity(n, t.color));
                }),
                this.getAttribute("gradientTransform").hasValue())
              ) {
                var u = this.document,
                  f = u.screen,
                  l = f.MAX_VIRTUAL_PIXELS,
                  h = f.viewPort,
                  v = t(c)(h.viewPorts, 1)[0],
                  g = new Se(u, null);
                (g.attributes.x = new Vt(u, "x", -l / 3)),
                  (g.attributes.y = new Vt(u, "y", -l / 3)),
                  (g.attributes.width = new Vt(u, "width", l)),
                  (g.attributes.height = new Vt(u, "height", l));
                var y = new Fe(u, null);
                (y.attributes.transform = new Vt(u, "transform", this.getAttribute("gradientTransform").getValue())), (y.children = [g]);
                var d = new we(u, null);
                (d.attributes.x = new Vt(u, "x", 0)),
                  (d.attributes.y = new Vt(u, "y", 0)),
                  (d.attributes.width = new Vt(u, "width", v.width)),
                  (d.attributes.height = new Vt(u, "height", v.height)),
                  (d.children = [y]);
                var x = u.createCanvas(v.width, v.height),
                  m = x.getContext("2d");
                return (m.fillStyle = s), d.render(m), m.createPattern(x, "no-repeat");
              }
              return s;
            }
          },
          {
            key: "inheritStopContainer",
            value: function (e) {
              var r,
                n = this;
              t(p)((r = this.attributesToInherit)).call(r, function (t) {
                !n.getAttribute(t).hasValue() &&
                  e.getAttribute(t).hasValue() &&
                  n.getAttribute(t, !0).setValue(e.getAttribute(t).getValue());
              });
            }
          },
          {
            key: "addParentOpacity",
            value: function (t, e) {
              return t.hasValue() ? new Vt(this.document, "color", e).addOpacity(t).getColor() : e;
            }
          }
        ]),
        n
      );
    })(te);
    function He(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Xe = (function (e) {
      t(V)(n, e);
      var r = He(n);
      function n(e, i, o) {
        var a;
        return t(w)(this, n), ((a = r.call(this, e, i, o)).type = "linearGradient"), a.attributesToInherit.push("x1", "y1", "x2", "y2"), a;
      }
      return (
        t(k)(n, [
          {
            key: "getGradient",
            value: function (t, e) {
              var r = "objectBoundingBox" === this.getGradientUnits(),
                n = r ? e.getBoundingBox(t) : null;
              if (r && !n) return null;
              this.getAttribute("x1").hasValue() ||
                this.getAttribute("y1").hasValue() ||
                this.getAttribute("x2").hasValue() ||
                this.getAttribute("y2").hasValue() ||
                (this.getAttribute("x1", !0).setValue(0),
                this.getAttribute("y1", !0).setValue(0),
                this.getAttribute("x2", !0).setValue(1),
                this.getAttribute("y2", !0).setValue(0));
              var i = r ? n.x + n.width * this.getAttribute("x1").getNumber() : this.getAttribute("x1").getPixels("x"),
                o = r ? n.y + n.height * this.getAttribute("y1").getNumber() : this.getAttribute("y1").getPixels("y"),
                a = r ? n.x + n.width * this.getAttribute("x2").getNumber() : this.getAttribute("x2").getPixels("x"),
                s = r ? n.y + n.height * this.getAttribute("y2").getNumber() : this.getAttribute("y2").getPixels("y");
              return i === a && o === s ? null : t.createLinearGradient(i, o, a, s);
            }
          }
        ]),
        n
      );
    })(Ye);
    function Ge(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var qe = (function (e) {
      t(V)(n, e);
      var r = Ge(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "radialGradient"),
          a.attributesToInherit.push("cx", "cy", "r", "fx", "fy", "fr"),
          a
        );
      }
      return (
        t(k)(n, [
          {
            key: "getGradient",
            value: function (t, e) {
              var r = "objectBoundingBox" === this.getGradientUnits(),
                n = e.getBoundingBox(t);
              if (r && !n) return null;
              this.getAttribute("cx").hasValue() || this.getAttribute("cx", !0).setValue("50%"),
                this.getAttribute("cy").hasValue() || this.getAttribute("cy", !0).setValue("50%"),
                this.getAttribute("r").hasValue() || this.getAttribute("r", !0).setValue("50%");
              var i = r ? n.x + n.width * this.getAttribute("cx").getNumber() : this.getAttribute("cx").getPixels("x"),
                o = r ? n.y + n.height * this.getAttribute("cy").getNumber() : this.getAttribute("cy").getPixels("y"),
                a = i,
                s = o;
              this.getAttribute("fx").hasValue() &&
                (a = r ? n.x + n.width * this.getAttribute("fx").getNumber() : this.getAttribute("fx").getPixels("x")),
                this.getAttribute("fy").hasValue() &&
                  (s = r ? n.y + n.height * this.getAttribute("fy").getNumber() : this.getAttribute("fy").getPixels("y"));
              var u = r ? ((n.width + n.height) / 2) * this.getAttribute("r").getNumber() : this.getAttribute("r").getPixels(),
                c = this.getAttribute("fr").getPixels();
              return t.createRadialGradient(a, s, c, i, o, u);
            }
          }
        ]),
        n
      );
    })(Ye);
    function Ze(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var We = (function (e) {
      t(V)(n, e);
      var r = Ze(n);
      function n(e, i, o) {
        var a;
        t(w)(this, n), ((a = r.call(this, e, i, o)).type = "stop");
        var s = Math.max(0, Math.min(1, a.getAttribute("offset").getNumber())),
          u = a.getStyle("stop-opacity"),
          c = a.getStyle("stop-color", !0);
        return (
          "" === c.getString() && c.setValue("#000"), u.hasValue() && (c = c.addOpacity(u)), (a.offset = s), (a.color = c.getColor()), a
        );
      }
      return n;
    })(te);
    function Qe(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Je = (function (e) {
      t(V)(n, e);
      var r = Qe(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "animate"),
          (a.duration = 0),
          (a.initialValue = null),
          (a.initialUnits = ""),
          (a.removed = !1),
          (a.frozen = !1),
          e.screen.animations.push(t(G)(a)),
          (a.begin = a.getAttribute("begin").getMilliseconds()),
          (a.maxDuration = a.begin + a.getAttribute("dur").getMilliseconds()),
          (a.from = a.getAttribute("from")),
          (a.to = a.getAttribute("to")),
          (a.values = a.getAttribute("values")),
          t(q)(a).hasValue() && t(q)(a).setValue(t(q)(a).getString().split(";")),
          a
        );
      }
      return (
        t(k)(n, [
          {
            key: "getProperty",
            value: function () {
              var t = this.getAttribute("attributeType").getString(),
                e = this.getAttribute("attributeName").getString();
              return "CSS" === t ? this.parent.getStyle(e, !0) : this.parent.getAttribute(e, !0);
            }
          },
          {
            key: "calcValue",
            value: function () {
              var e,
                r = this.initialUnits,
                n = this.getProgress(),
                i = n.progress,
                o = n.from,
                a = n.to,
                s = o.getNumber() + (a.getNumber() - o.getNumber()) * i;
              return "%" === r && (s *= 100), t(S)((e = "".concat(s))).call(e, r);
            }
          },
          {
            key: "update",
            value: function (e) {
              var r = this.parent,
                n = this.getProperty();
              if (
                (this.initialValue || ((this.initialValue = n.getString()), (this.initialUnits = n.getUnits())),
                this.duration > this.maxDuration)
              ) {
                var i = this.getAttribute("fill").getString("remove");
                if (
                  "indefinite" === this.getAttribute("repeatCount").getString() ||
                  "indefinite" === this.getAttribute("repeatDur").getString()
                )
                  this.duration = 0;
                else if ("freeze" !== i || this.frozen) {
                  if ("remove" === i && !this.removed)
                    return (this.removed = !0), n.setValue(r.animationFrozen ? r.animationFrozenValue : this.initialValue), !0;
                } else (this.frozen = !0), (r.animationFrozen = !0), (r.animationFrozenValue = n.getString());
                return !1;
              }
              this.duration += e;
              var o = !1;
              if (this.begin < this.duration) {
                var a = this.calcValue(),
                  s = this.getAttribute("type");
                if (s.hasValue()) {
                  var u,
                    c = s.getString();
                  a = t(S)((u = "".concat(c, "("))).call(u, a, ")");
                }
                n.setValue(a), (o = !0);
              }
              return o;
            }
          },
          {
            key: "getProgress",
            value: function () {
              var e = this.document,
                r = t(q)(this),
                n = { progress: (this.duration - this.begin) / (this.maxDuration - this.begin) };
              if (r.hasValue()) {
                var i = n.progress * (r.getValue().length - 1),
                  o = Math.floor(i),
                  a = Math.ceil(i);
                (n.from = new Vt(e, "from", t(s)(r.getValue()[o]))),
                  (n.to = new Vt(e, "to", t(s)(r.getValue()[a]))),
                  (n.progress = (i - o) / (a - o));
              } else (n.from = this.from), (n.to = this.to);
              return n;
            }
          }
        ]),
        n
      );
    })(te);
    function Ke(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var $e = (function (e) {
      t(V)(n, e);
      var r = Ke(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "animateColor"), e;
      }
      return (
        t(k)(n, [
          {
            key: "calcValue",
            value: function () {
              var e = this.getProgress(),
                r = e.progress,
                n = e.from,
                i = e.to,
                o = new (t(N))(n.getColor()),
                a = new (t(N))(i.getColor());
              if (o.ok && a.ok) {
                var s,
                  u,
                  c = o.r + (a.r - o.r) * r,
                  f = o.g + (a.g - o.g) * r,
                  l = o.b + (a.b - o.b) * r;
                return t(S)((s = t(S)((u = "rgb(".concat(t(Z)(c, 10), ", "))).call(u, t(Z)(f, 10), ", "))).call(s, t(Z)(l, 10), ")");
              }
              return this.getAttribute("from").getColor();
            }
          }
        ]),
        n
      );
    })(Je);
    function tr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var er = (function (e) {
      t(V)(n, e);
      var r = tr(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "animateTransform"), e;
      }
      return (
        t(k)(n, [
          {
            key: "calcValue",
            value: function () {
              var e = this.getProgress(),
                r = e.progress,
                n = e.from,
                i = e.to,
                o = ut(n.getString()),
                a = ut(i.getString()),
                s = t(u)(o)
                  .call(o, function (t, e) {
                    return t + (a[e] - t) * r;
                  })
                  .join(" ");
              return s;
            }
          }
        ]),
        n
      );
    })(Je);
    function rr(e, r) {
      var n;
      if (void 0 === t(K) || null == t(J)(e)) {
        if (
          t(Q)(e) ||
          (n = (function (e, r) {
            var n;
            if (!e) return;
            if ("string" == typeof e) return nr(e, r);
            var i = t($)((n = Object.prototype.toString.call(e))).call(n, 8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return t(I)(e);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return nr(e, r);
          })(e)) ||
          (r && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            o = function () {};
          return {
            s: o,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (t) {
              throw t;
            },
            f: o
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        s = !0,
        u = !1;
      return {
        s: function () {
          n = t(W)(e);
        },
        n: function () {
          var t = n.next();
          return (s = t.done), t;
        },
        e: function (t) {
          (u = !0), (a = t);
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (u) throw a;
          }
        }
      };
    }
    function nr(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function ir(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var or = (function (e) {
      t(V)(n, e);
      var r = ir(n);
      function n(e, i, o) {
        var a;
        t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "font"),
          (a.glyphs = {}),
          (a.horizAdvX = a.getAttribute("horiz-adv-x").getNumber());
        var s,
          u = e.definitions,
          c = rr(t(G)(a).children);
        try {
          for (c.s(); !(s = c.n()).done; ) {
            var f = s.value;
            switch (f.type) {
              case "font-face":
                a.fontFace = f;
                var l = f.getStyle("font-family");
                l.hasValue() && (u[l.getString()] = t(G)(a));
                break;
              case "missing-glyph":
                a.missingGlyph = f;
                break;
              case "glyph":
                var h = f;
                h.arabicForm
                  ? ((a.isRTL = !0),
                    (a.isArabic = !0),
                    void 0 === a.glyphs[h.unicode] && (a.glyphs[h.unicode] = {}),
                    (a.glyphs[h.unicode][h.arabicForm] = h))
                  : (a.glyphs[h.unicode] = h);
            }
          }
        } catch (t) {
          c.e(t);
        } finally {
          c.f();
        }
        return a;
      }
      return t(k)(n, [{ key: "render", value: function () {} }]), n;
    })(te);
    function ar(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var sr = (function (e) {
      t(V)(n, e);
      var r = ar(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "font-face"),
          (a.ascent = a.getAttribute("ascent").getNumber()),
          (a.descent = a.getAttribute("descent").getNumber()),
          (a.unitsPerEm = a.getAttribute("units-per-em").getNumber()),
          a
        );
      }
      return n;
    })(te);
    function ur(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var cr = (function (e) {
      t(V)(n, e);
      var r = ur(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "missing-glyph"), (e.horizAdvX = 0), e;
      }
      return n;
    })(me);
    function fr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var lr = (function (e) {
      t(V)(n, e);
      var r = fr(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "glyph"),
          (a.horizAdvX = a.getAttribute("horiz-adv-x").getNumber()),
          (a.unicode = a.getAttribute("unicode").getString()),
          (a.arabicForm = a.getAttribute("arabic-form").getString()),
          a
        );
      }
      return n;
    })(me);
    function hr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var pr = (function (e) {
      t(V)(n, e);
      var r = hr(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "tref"), e;
      }
      return (
        t(k)(n, [
          {
            key: "getText",
            value: function () {
              var t = this.getHrefAttribute().getDefinition();
              if (t) {
                var e = t.children[0];
                if (e) return e.getText();
              }
              return "";
            }
          }
        ]),
        n
      );
    })(le);
    function vr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var gr = (function (e) {
      t(V)(n, e);
      var r = vr(n);
      function n(e, i, o) {
        var a, s;
        t(w)(this, n), ((s = r.call(this, e, i, o)).type = "a");
        var u = i.childNodes,
          c = u[0],
          f =
            u.length > 0 &&
            t(C)((a = t(I)(u))).call(a, function (t) {
              return 3 === t.nodeType;
            });
        return (s.hasText = f), (s.text = f ? s.getTextFromNode(c) : ""), s;
      }
      return (
        t(k)(n, [
          {
            key: "getText",
            value: function () {
              return this.text;
            }
          },
          {
            key: "renderChildren",
            value: function (e) {
              if (this.hasText) {
                t(U)(t(_)(n.prototype), "renderChildren", this).call(this, e);
                var r = this.document,
                  i = this.x,
                  o = this.y,
                  a = r.screen.mouse,
                  s = new Vt(r, "fontSize", ae.parse(r.ctx.font).fontSize);
                a.isWorking() && a.checkBoundingBox(this, new se(i, o - s.getPixels("y"), i + this.measureText(e), o));
              } else if (this.children.length > 0) {
                var u = new Fe(this.document, null);
                (u.children = this.children), (u.parent = this), u.render(e);
              }
            }
          },
          {
            key: "onClick",
            value: function () {
              var t = this.document.window;
              t && t.open(this.getHrefAttribute().getString());
            }
          },
          {
            key: "onMouseMove",
            value: function () {
              this.document.ctx.canvas.style.cursor = "pointer";
            }
          }
        ]),
        n
      );
    })(le);
    function yr(e, r) {
      var n;
      if (void 0 === t(K) || null == t(J)(e)) {
        if (
          t(Q)(e) ||
          (n = (function (e, r) {
            var n;
            if (!e) return;
            if ("string" == typeof e) return dr(e, r);
            var i = t($)((n = Object.prototype.toString.call(e))).call(n, 8, -1);
            "Object" === i && e.constructor && (i = e.constructor.name);
            if ("Map" === i || "Set" === i) return t(I)(e);
            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return dr(e, r);
          })(e)) ||
          (r && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var i = 0,
            o = function () {};
          return {
            s: o,
            n: function () {
              return i >= e.length ? { done: !0 } : { done: !1, value: e[i++] };
            },
            e: function (t) {
              throw t;
            },
            f: o
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        s = !0,
        u = !1;
      return {
        s: function () {
          n = t(W)(e);
        },
        n: function () {
          var t = n.next();
          return (s = t.done), t;
        },
        e: function (t) {
          (u = !0), (a = t);
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (u) throw a;
          }
        }
      };
    }
    function dr(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
      return n;
    }
    function xr(e, r) {
      var n = t(d)(e);
      if (t(y)) {
        var i = t(y)(e);
        r &&
          (i = t(g)(i).call(i, function (r) {
            return t(v)(e, r).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function mr(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n,
          i = null != arguments[r] ? arguments[r] : {};
        if (r % 2)
          t(p)((n = xr(Object(i), !0))).call(n, function (r) {
            t(b)(e, r, i[r]);
          });
        else if (t(h)) t(l)(e, t(h)(i));
        else {
          var o;
          t(p)((o = xr(Object(i)))).call(o, function (r) {
            t(f)(e, r, t(v)(i, r));
          });
        }
      }
      return e;
    }
    function br(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var wr = (function (e) {
      t(V)(n, e);
      var r = br(n);
      function n(e, i, o) {
        var a;
        t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "textPath"),
          (a.textWidth = 0),
          (a.textHeight = 0),
          (a.pathLength = -1),
          (a.glyphInfo = null),
          (a.letterSpacingCache = []),
          (a.measuresCache = new (t(tt))([["", 0]]));
        var s = a.getHrefAttribute().getDefinition();
        return (a.text = a.getTextFromNode()), (a.dataArray = a.parsePathData(s)), a;
      }
      return (
        t(k)(n, [
          {
            key: "getText",
            value: function () {
              return this.text;
            }
          },
          {
            key: "path",
            value: function (e) {
              var r = this.dataArray;
              e && e.beginPath(),
                t(p)(r).call(r, function (r) {
                  var n = r.type,
                    i = r.points;
                  switch (n) {
                    case de.LINE_TO:
                      e && e.lineTo(i[0], i[1]);
                      break;
                    case de.MOVE_TO:
                      e && e.moveTo(i[0], i[1]);
                      break;
                    case de.CURVE_TO:
                      e && e.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                      break;
                    case de.QUAD_TO:
                      e && e.quadraticCurveTo(i[0], i[1], i[2], i[3]);
                      break;
                    case de.ARC:
                      var o = t(c)(i, 8),
                        a = o[0],
                        s = o[1],
                        u = o[2],
                        f = o[3],
                        l = o[4],
                        h = o[5],
                        p = o[6],
                        v = o[7],
                        g = u > f ? u : f,
                        y = u > f ? 1 : u / f,
                        d = u > f ? f / u : 1;
                      e &&
                        (e.translate(a, s),
                        e.rotate(p),
                        e.scale(y, d),
                        e.arc(0, 0, g, l, l + h, Boolean(1 - v)),
                        e.scale(1 / y, 1 / d),
                        e.rotate(-p),
                        e.translate(-a, -s));
                      break;
                    case de.CLOSE_PATH:
                      e && e.closePath();
                  }
                });
            }
          },
          {
            key: "renderChildren",
            value: function (e) {
              this.setTextData(e), e.save();
              var r = this.parent.getStyle("text-decoration").getString(),
                n = this.getFontSize(),
                i = this.glyphInfo,
                o = e.fillStyle;
              "underline" === r && e.beginPath(),
                t(p)(i).call(i, function (t, i) {
                  var o = t.p0,
                    a = t.p1,
                    s = t.rotation,
                    u = t.text;
                  e.save(),
                    e.translate(o.x, o.y),
                    e.rotate(s),
                    e.fillStyle && e.fillText(u, 0, 0),
                    e.strokeStyle && e.strokeText(u, 0, 0),
                    e.restore(),
                    "underline" === r && (0 === i && e.moveTo(o.x, o.y + n / 8), e.lineTo(a.x, a.y + n / 5));
                }),
                "underline" === r && ((e.lineWidth = n / 20), (e.strokeStyle = o), e.stroke(), e.closePath()),
                e.restore();
            }
          },
          {
            key: "getLetterSpacingAt",
            value: function () {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              return this.letterSpacingCache[t] || 0;
            }
          },
          {
            key: "findSegmentToFitChar",
            value: function (t, e, r, n, i, o, a, s, u) {
              var c = o,
                f = this.measureText(t, s);
              " " === s && "justify" === e && r < n && (f += (n - r) / i), u > -1 && (c += this.getLetterSpacingAt(u));
              var l = this.textHeight / 20,
                h = this.getEquidistantPointOnPath(c, l, 0),
                p = this.getEquidistantPointOnPath(c + f, l, 0),
                v = { p0: h, p1: p },
                g = h && p ? Math.atan2(p.y - h.y, p.x - h.x) : 0;
              if (a) {
                var y = Math.cos(Math.PI / 2 + g) * a,
                  d = Math.cos(-g) * a;
                (v.p0 = mr(mr({}, h), {}, { x: h.x + y, y: h.y + d })), (v.p1 = mr(mr({}, p), {}, { x: p.x + y, y: p.y + d }));
              }
              return { offset: (c += f), segment: v, rotation: g };
            }
          },
          {
            key: "measureText",
            value: function (t, e) {
              var r = this.measuresCache,
                n = e || this.getText();
              if (r.has(n)) return r.get(n);
              var i = this.measureTargetText(t, n);
              return r.set(n, i), i;
            }
          },
          {
            key: "setTextData",
            value: function (e) {
              var r,
                n = this;
              if (!this.glyphInfo) {
                var i = this.getText(),
                  o = i.split(""),
                  a = i.split(" ").length - 1,
                  s = t(u)((r = this.parent.getAttribute("dx").split())).call(r, function (t) {
                    return t.getPixels("x");
                  }),
                  c = this.parent.getAttribute("dy").getPixels("y"),
                  f = this.parent.getStyle("text-anchor").getString("start"),
                  l = this.getStyle("letter-spacing"),
                  h = this.parent.getStyle("letter-spacing"),
                  v = 0;
                l.hasValue() && "inherit" !== l.getValue()
                  ? l.hasValue() && "initial" !== l.getValue() && "unset" !== l.getValue() && (v = l.getPixels())
                  : (v = h.getPixels());
                var g = [],
                  y = i.length;
                this.letterSpacingCache = g;
                for (var d = 0; d < y; d++) g.push(void 0 !== s[d] ? s[d] : v);
                var x = t(A)(g).call(
                    g,
                    function (t, e, r) {
                      return 0 === r ? 0 : t + e || 0;
                    },
                    0
                  ),
                  m = this.measureText(e),
                  b = Math.max(m + x, 0);
                (this.textWidth = m), (this.textHeight = this.getFontSize()), (this.glyphInfo = []);
                var w = this.getPathLength(),
                  k = this.getStyle("startOffset").getNumber(0) * w,
                  S = 0;
                ("middle" !== f && "center" !== f) || (S = -b / 2),
                  ("end" !== f && "right" !== f) || (S = -b),
                  (S += k),
                  t(p)(o).call(o, function (t, r) {
                    var i = n.findSegmentToFitChar(e, f, b, w, a, S, c, t, r),
                      s = i.offset,
                      u = i.segment,
                      l = i.rotation;
                    (S = s), u.p0 && u.p1 && n.glyphInfo.push({ text: o[r], p0: u.p0, p1: u.p1, rotation: l });
                  });
              }
            }
          },
          {
            key: "parsePathData",
            value: function (t) {
              if (((this.pathLength = -1), !t)) return [];
              var e = [],
                r = t.pathParser;
              for (r.reset(); !r.isEnd(); ) {
                var n = r.current,
                  i = n ? n.x : 0,
                  o = n ? n.y : 0,
                  a = r.next(),
                  s = a.type,
                  u = [];
                switch (a.type) {
                  case de.MOVE_TO:
                    this.pathM(r, u);
                    break;
                  case de.LINE_TO:
                    s = this.pathL(r, u);
                    break;
                  case de.HORIZ_LINE_TO:
                    s = this.pathH(r, u);
                    break;
                  case de.VERT_LINE_TO:
                    s = this.pathV(r, u);
                    break;
                  case de.CURVE_TO:
                    this.pathC(r, u);
                    break;
                  case de.SMOOTH_CURVE_TO:
                    s = this.pathS(r, u);
                    break;
                  case de.QUAD_TO:
                    this.pathQ(r, u);
                    break;
                  case de.SMOOTH_QUAD_TO:
                    s = this.pathT(r, u);
                    break;
                  case de.ARC:
                    u = this.pathA(r);
                    break;
                  case de.CLOSE_PATH:
                    me.pathZ(r);
                }
                a.type !== de.CLOSE_PATH
                  ? e.push({ type: s, points: u, start: { x: i, y: o }, pathLength: this.calcLength(i, o, s, u) })
                  : e.push({ type: de.CLOSE_PATH, points: [], pathLength: 0 });
              }
              return e;
            }
          },
          {
            key: "pathM",
            value: function (t, e) {
              var r = me.pathM(t).point,
                n = r.x,
                i = r.y;
              e.push(n, i);
            }
          },
          {
            key: "pathL",
            value: function (t, e) {
              var r = me.pathL(t).point,
                n = r.x,
                i = r.y;
              return e.push(n, i), de.LINE_TO;
            }
          },
          {
            key: "pathH",
            value: function (t, e) {
              var r = me.pathH(t).point,
                n = r.x,
                i = r.y;
              return e.push(n, i), de.LINE_TO;
            }
          },
          {
            key: "pathV",
            value: function (t, e) {
              var r = me.pathV(t).point,
                n = r.x,
                i = r.y;
              return e.push(n, i), de.LINE_TO;
            }
          },
          {
            key: "pathC",
            value: function (t, e) {
              var r = me.pathC(t),
                n = r.point,
                i = r.controlPoint,
                o = r.currentPoint;
              e.push(n.x, n.y, i.x, i.y, o.x, o.y);
            }
          },
          {
            key: "pathS",
            value: function (t, e) {
              var r = me.pathS(t),
                n = r.point,
                i = r.controlPoint,
                o = r.currentPoint;
              return e.push(n.x, n.y, i.x, i.y, o.x, o.y), de.CURVE_TO;
            }
          },
          {
            key: "pathQ",
            value: function (t, e) {
              var r = me.pathQ(t),
                n = r.controlPoint,
                i = r.currentPoint;
              e.push(n.x, n.y, i.x, i.y);
            }
          },
          {
            key: "pathT",
            value: function (t, e) {
              var r = me.pathT(t),
                n = r.controlPoint,
                i = r.currentPoint;
              return e.push(n.x, n.y, i.x, i.y), de.QUAD_TO;
            }
          },
          {
            key: "pathA",
            value: function (t) {
              var e = me.pathA(t),
                r = e.rX,
                n = e.rY,
                i = e.sweepFlag,
                o = e.xAxisRotation,
                a = e.centp,
                s = e.a1,
                u = e.ad;
              return 0 === i && u > 0 && (u -= 2 * Math.PI), 1 === i && u < 0 && (u += 2 * Math.PI), [a.x, a.y, r, n, s, u, o, i];
            }
          },
          {
            key: "calcLength",
            value: function (t, e, r, n) {
              var i = 0,
                o = null,
                a = null,
                s = 0;
              switch (r) {
                case de.LINE_TO:
                  return this.getLineLength(t, e, n[0], n[1]);
                case de.CURVE_TO:
                  for (i = 0, o = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), s = 0.01; s <= 1; s += 0.01)
                    (a = this.getPointOnCubicBezier(s, t, e, n[0], n[1], n[2], n[3], n[4], n[5])),
                      (i += this.getLineLength(o.x, o.y, a.x, a.y)),
                      (o = a);
                  return i;
                case de.QUAD_TO:
                  for (i = 0, o = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), s = 0.01; s <= 1; s += 0.01)
                    (a = this.getPointOnQuadraticBezier(s, t, e, n[0], n[1], n[2], n[3])),
                      (i += this.getLineLength(o.x, o.y, a.x, a.y)),
                      (o = a);
                  return i;
                case de.ARC:
                  i = 0;
                  var u = n[4],
                    c = n[5],
                    f = n[4] + c,
                    l = Math.PI / 180;
                  if (
                    (Math.abs(u - f) < l && (l = Math.abs(u - f)), (o = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0)), c < 0)
                  )
                    for (s = u - l; s > f; s -= l)
                      (a = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], s, 0)),
                        (i += this.getLineLength(o.x, o.y, a.x, a.y)),
                        (o = a);
                  else
                    for (s = u + l; s < f; s += l)
                      (a = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], s, 0)),
                        (i += this.getLineLength(o.x, o.y, a.x, a.y)),
                        (o = a);
                  return (a = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], f, 0)), (i += this.getLineLength(o.x, o.y, a.x, a.y));
              }
              return 0;
            }
          },
          {
            key: "getPointOnLine",
            value: function (t, e, r, n, i) {
              var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
                a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : r,
                s = (i - r) / (n - e + kt),
                u = Math.sqrt((t * t) / (1 + s * s));
              n < e && (u *= -1);
              var c = s * u,
                f = null;
              if (n === e) f = { x: o, y: a + c };
              else if ((a - r) / (o - e + kt) === s) f = { x: o + u, y: a + c };
              else {
                var l,
                  h,
                  p = this.getLineLength(e, r, n, i);
                if (p < kt) return null;
                var v = (o - e) * (n - e) + (a - r) * (i - r);
                (l = e + (v /= p * p) * (n - e)), (h = r + v * (i - r));
                var g = this.getLineLength(o, a, l, h),
                  y = Math.sqrt(t * t - g * g);
                (u = Math.sqrt((y * y) / (1 + s * s))), n < e && (u *= -1), (f = { x: l + u, y: h + (c = s * u) });
              }
              return f;
            }
          },
          {
            key: "getPointOnPath",
            value: function (t) {
              var e = this.getPathLength(),
                r = 0,
                n = null;
              if (t < -5e-5 || t - 5e-5 > e) return null;
              var i,
                o = yr(this.dataArray);
              try {
                for (o.s(); !(i = o.n()).done; ) {
                  var a = i.value;
                  if (!a || !(a.pathLength < 5e-5 || r + a.pathLength + 5e-5 < t)) {
                    var s = t - r,
                      u = 0;
                    switch (a.type) {
                      case de.LINE_TO:
                        n = this.getPointOnLine(s, a.start.x, a.start.y, a.points[0], a.points[1], a.start.x, a.start.y);
                        break;
                      case de.ARC:
                        var c = a.points[4],
                          f = a.points[5],
                          l = a.points[4] + f;
                        if (((u = c + (s / a.pathLength) * f), (f < 0 && u < l) || (f >= 0 && u > l))) break;
                        n = this.getPointOnEllipticalArc(a.points[0], a.points[1], a.points[2], a.points[3], u, a.points[6]);
                        break;
                      case de.CURVE_TO:
                        (u = s / a.pathLength) > 1 && (u = 1),
                          (n = this.getPointOnCubicBezier(
                            u,
                            a.start.x,
                            a.start.y,
                            a.points[0],
                            a.points[1],
                            a.points[2],
                            a.points[3],
                            a.points[4],
                            a.points[5]
                          ));
                        break;
                      case de.QUAD_TO:
                        (u = s / a.pathLength) > 1 && (u = 1),
                          (n = this.getPointOnQuadraticBezier(u, a.start.x, a.start.y, a.points[0], a.points[1], a.points[2], a.points[3]));
                    }
                    if (n) return n;
                    break;
                  }
                  r += a.pathLength;
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
              return null;
            }
          },
          {
            key: "getLineLength",
            value: function (t, e, r, n) {
              return Math.sqrt((r - t) * (r - t) + (n - e) * (n - e));
            }
          },
          {
            key: "getPathLength",
            value: function () {
              var e;
              -1 === this.pathLength &&
                (this.pathLength = t(A)((e = this.dataArray)).call(
                  e,
                  function (t, e) {
                    return e.pathLength > 0 ? t + e.pathLength : t;
                  },
                  0
                ));
              return this.pathLength;
            }
          },
          {
            key: "getPointOnCubicBezier",
            value: function (t, e, r, n, i, o, a, s, u) {
              return { x: s * Ct(t) + o * Tt(t) + n * Pt(t) + e * Et(t), y: u * Ct(t) + a * Tt(t) + i * Pt(t) + r * Et(t) };
            }
          },
          {
            key: "getPointOnQuadraticBezier",
            value: function (t, e, r, n, i, o, a) {
              return { x: o * Mt(t) + n * Nt(t) + e * Rt(t), y: a * Mt(t) + i * Nt(t) + r * Rt(t) };
            }
          },
          {
            key: "getPointOnEllipticalArc",
            value: function (t, e, r, n, i, o) {
              var a = Math.cos(o),
                s = Math.sin(o),
                u = r * Math.cos(i),
                c = n * Math.sin(i);
              return { x: t + (u * a - c * s), y: e + (u * s + c * a) };
            }
          },
          {
            key: "buildEquidistantCache",
            value: function (t, e) {
              var r = this.getPathLength(),
                n = e || 0.25,
                i = t || r / 100;
              if (!this.equidistantCache || this.equidistantCache.step !== i || this.equidistantCache.precision !== n) {
                this.equidistantCache = { step: i, precision: n, points: [] };
                for (var o = 0, a = 0; a <= r; a += n) {
                  var s = this.getPointOnPath(a),
                    u = this.getPointOnPath(a + n);
                  s &&
                    u &&
                    (o += this.getLineLength(s.x, s.y, u.x, u.y)) >= i &&
                    (this.equidistantCache.points.push({ x: s.x, y: s.y, distance: a }), (o -= i));
                }
              }
            }
          },
          {
            key: "getEquidistantPointOnPath",
            value: function (t, e, r) {
              if ((this.buildEquidistantCache(e, r), t < 0 || t - this.getPathLength() > 5e-5)) return null;
              var n = Math.round((t / this.getPathLength()) * (this.equidistantCache.points.length - 1));
              return this.equidistantCache.points[n] || null;
            }
          }
        ]),
        n
      );
    })(le);
    function kr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Sr = (function (e) {
      t(V)(o, e);
      var r,
        n,
        i = kr(o);
      function o(e, r, n) {
        var a;
        t(w)(this, o), ((a = i.call(this, e, r, n)).type = "image"), (a.loaded = !1);
        var s = a.getHrefAttribute().getString();
        if (!s) return t(D)(a);
        var u = /\.svg$/.test(s);
        return e.images.push(t(G)(a)), u ? a.loadSvg(s) : a.loadImage(s), (a.isSvg = u), a;
      }
      return (
        t(k)(o, [
          {
            key: "loadImage",
            value:
              ((n = t(m)(
                t(x).mark(function e(r) {
                  var n;
                  return t(x).wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), this.document.createImage(r);
                          case 3:
                            (n = t.sent), (this.image = n), (t.next = 10);
                            break;
                          case 7:
                            (t.prev = 7), (t.t0 = t.catch(0)), console.error('Error while loading image "'.concat(r, '":'), t.t0);
                          case 10:
                            this.loaded = !0;
                          case 11:
                          case "end":
                            return t.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 7]]
                  );
                })
              )),
              function (t) {
                return n.apply(this, arguments);
              })
          },
          {
            key: "loadSvg",
            value:
              ((r = t(m)(
                t(x).mark(function e(r) {
                  var n, i;
                  return t(x).wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), this.document.fetch(r);
                          case 3:
                            return (n = t.sent), (t.next = 6), n.text();
                          case 6:
                            (i = t.sent), (this.image = i), (t.next = 13);
                            break;
                          case 10:
                            (t.prev = 10), (t.t0 = t.catch(0)), console.error('Error while loading image "'.concat(r, '":'), t.t0);
                          case 13:
                            this.loaded = !0;
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    },
                    e,
                    this,
                    [[0, 10]]
                  );
                })
              )),
              function (t) {
                return r.apply(this, arguments);
              })
          },
          {
            key: "renderChildren",
            value: function (t) {
              var e = this.document,
                r = this.image,
                n = this.loaded,
                i = this.getAttribute("x").getPixels("x"),
                o = this.getAttribute("y").getPixels("y"),
                a = this.getStyle("width").getPixels("x"),
                s = this.getStyle("height").getPixels("y");
              if (n && r && a && s) {
                if ((t.save(), this.isSvg))
                  e.canvg
                    .forkString(t, this.image, {
                      ignoreMouse: !0,
                      ignoreAnimation: !0,
                      ignoreDimensions: !0,
                      ignoreClear: !0,
                      offsetX: i,
                      offsetY: o,
                      scaleWidth: a,
                      scaleHeight: s
                    })
                    .render();
                else {
                  var u = this.image;
                  t.translate(i, o),
                    e.setViewBox({
                      ctx: t,
                      aspectRatio: this.getAttribute("preserveAspectRatio").getString(),
                      width: a,
                      desiredWidth: u.width,
                      height: s,
                      desiredHeight: u.height
                    }),
                    this.loaded && (void 0 === u.complete || u.complete) && t.drawImage(u, 0, 0);
                }
                t.restore();
              }
            }
          },
          {
            key: "getBoundingBox",
            value: function () {
              var t = this.getAttribute("x").getPixels("x"),
                e = this.getAttribute("y").getPixels("y"),
                r = this.getStyle("width").getPixels("x"),
                n = this.getStyle("height").getPixels("y");
              return new se(t, e, t + r, e + n);
            }
          }
        ]),
        o
      );
    })(ce);
    function Ar(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Or = (function (e) {
        t(V)(n, e);
        var r = Ar(n);
        function n() {
          var e;
          return t(w)(this, n), ((e = r.apply(this, arguments)).type = "symbol"), e;
        }
        return t(k)(n, [{ key: "render", value: function (t) {} }]), n;
      })(ce),
      Cr = (function () {
        function e(r) {
          t(w)(this, e), (this.document = r), (this.loaded = !1), r.fonts.push(this);
        }
        var r;
        return (
          t(k)(e, [
            {
              key: "load",
              value:
                ((r = t(m)(
                  t(x).mark(function e(r, n) {
                    var i, o, a, s;
                    return t(x).wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (o = this.document), (e.next = 4), o.canvg.parser.load(n);
                            case 4:
                              (a = e.sent),
                                (s = a.getElementsByTagName("font")),
                                t(p)((i = t(I)(s))).call(i, function (t) {
                                  var e = o.createElement(t);
                                  o.definitions[r] = e;
                                }),
                                (e.next = 12);
                              break;
                            case 9:
                              (e.prev = 9), (e.t0 = e.catch(0)), console.error('Error while loading font "'.concat(n, '":'), e.t0);
                            case 12:
                              this.loaded = !0;
                            case 13:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[0, 9]]
                    );
                  })
                )),
                function (t, e) {
                  return r.apply(this, arguments);
                })
            }
          ]),
          e
        );
      })();
    function Tr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Pr = (function (e) {
      t(V)(n, e);
      var r = Tr(n);
      function n(e, i, o) {
        var a, s;
        t(w)(this, n), ((s = r.call(this, e, i, o)).type = "style");
        var c = ot(
          t(u)((a = t(I)(i.childNodes)))
            .call(a, function (t) {
              return t.data;
            })
            .join("")
            .replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "")
            .replace(/@import.*;/g, "")
        ).split("}");
        return (
          t(p)(c).call(c, function (r) {
            var n = t(M)(r).call(r);
            if (n) {
              var i = n.split("{"),
                o = i[0].split(","),
                a = i[1].split(";");
              t(p)(o).call(o, function (r) {
                var n = t(M)(r).call(r);
                if (n) {
                  var i = e.styles[n] || {};
                  if (
                    (t(p)(a).call(a, function (r) {
                      var n,
                        o,
                        a = t(F)(r).call(r, ":"),
                        s = t(M)((n = r.substr(0, a))).call(n),
                        u = t(M)((o = r.substr(a + 1, r.length - a))).call(o);
                      s && u && (i[s] = new Vt(e, s, u));
                    }),
                    (e.styles[n] = i),
                    (e.stylesSpecificity[n] = wt(n)),
                    "@font-face" === n)
                  ) {
                    var o = i["font-family"].getString().replace(/"|'/g, ""),
                      s = i.src.getString().split(",");
                    t(p)(s).call(s, function (r) {
                      if (t(F)(r).call(r, 'format("svg")') > 0) {
                        var n = lt(r);
                        n && new Cr(e).load(o, n);
                      }
                    });
                  }
                }
              });
            }
          }),
          s
        );
      }
      return n;
    })(te);
    function Er(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    Pr.parseExternalUrl = lt;
    var Mr = (function (e) {
      t(V)(n, e);
      var r = Er(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "use"), e;
      }
      return (
        t(k)(n, [
          {
            key: "setContext",
            value: function (e) {
              t(U)(t(_)(n.prototype), "setContext", this).call(this, e);
              var r = this.getAttribute("x"),
                i = this.getAttribute("y");
              r.hasValue() && e.translate(r.getPixels("x"), 0), i.hasValue() && e.translate(0, i.getPixels("y"));
            }
          },
          {
            key: "path",
            value: function (t) {
              var e = this.element;
              e && e.path(t);
            }
          },
          {
            key: "renderChildren",
            value: function (t) {
              var e = this.document,
                r = this.element;
              if (r) {
                var n = r;
                if (
                  ("symbol" === r.type &&
                    (((n = new we(e, null)).attributes.viewBox = new Vt(e, "viewBox", r.getAttribute("viewBox").getString())),
                    (n.attributes.preserveAspectRatio = new Vt(
                      e,
                      "preserveAspectRatio",
                      r.getAttribute("preserveAspectRatio").getString()
                    )),
                    (n.attributes.overflow = new Vt(e, "overflow", r.getAttribute("overflow").getString())),
                    (n.children = r.children),
                    (r.styles.opacity = new Vt(e, "opacity", this.calculateOpacity()))),
                  "svg" === n.type)
                ) {
                  var i = this.getStyle("width", !1, !0),
                    o = this.getStyle("height", !1, !0);
                  i.hasValue() && (n.attributes.width = new Vt(e, "width", i.getString())),
                    o.hasValue() && (n.attributes.height = new Vt(e, "height", o.getString()));
                }
                var a = n.parent;
                (n.parent = this), n.render(t), (n.parent = a);
              }
            }
          },
          {
            key: "getBoundingBox",
            value: function (t) {
              var e = this.element;
              return e ? e.getBoundingBox(t) : null;
            }
          },
          {
            key: "elementTransform",
            value: function () {
              var t = this.document,
                e = this.element;
              return $t.fromElement(t, e);
            }
          },
          {
            key: "element",
            get: function () {
              return this._element || (this._element = this.getHrefAttribute().getDefinition()), this._element;
            }
          }
        ]),
        n
      );
    })(ce);
    function Nr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    function Rr(t, e, r, n, i, o) {
      return t[r * n * 4 + 4 * e + o];
    }
    function Vr(t, e, r, n, i, o, a) {
      t[r * n * 4 + 4 * e + o] = a;
    }
    function Dr(t, e, r) {
      return t[e] * r;
    }
    function _r(t, e, r, n) {
      return e + Math.cos(t) * r + Math.sin(t) * n;
    }
    var Lr = (function (e) {
      t(V)(n, e);
      var r = Nr(n);
      function n(e, i, o) {
        var a;
        t(w)(this, n), ((a = r.call(this, e, i, o)).type = "feColorMatrix");
        var s = ut(a.getAttribute("values").getString());
        switch (a.getAttribute("type").getString("matrix")) {
          case "saturate":
            var u = s[0];
            s = [
              0.213 + 0.787 * u,
              0.715 - 0.715 * u,
              0.072 - 0.072 * u,
              0,
              0,
              0.213 - 0.213 * u,
              0.715 + 0.285 * u,
              0.072 - 0.072 * u,
              0,
              0,
              0.213 - 0.213 * u,
              0.715 - 0.715 * u,
              0.072 + 0.928 * u,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1
            ];
            break;
          case "hueRotate":
            var c = (s[0] * Math.PI) / 180;
            s = [
              _r(c, 0.213, 0.787, -0.213),
              _r(c, 0.715, -0.715, -0.715),
              _r(c, 0.072, -0.072, 0.928),
              0,
              0,
              _r(c, 0.213, -0.213, 0.143),
              _r(c, 0.715, 0.285, 0.14),
              _r(c, 0.072, -0.072, -0.283),
              0,
              0,
              _r(c, 0.213, -0.213, -0.787),
              _r(c, 0.715, -0.715, 0.715),
              _r(c, 0.072, 0.928, 0.072),
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              1
            ];
            break;
          case "luminanceToAlpha":
            s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2125, 0.7154, 0.0721, 0, 0, 0, 0, 0, 0, 1];
        }
        return (a.matrix = s), (a.includeOpacity = a.getAttribute("includeOpacity").hasValue()), a;
      }
      return (
        t(k)(n, [
          {
            key: "apply",
            value: function (t, e, r, n, i) {
              for (var o = this.includeOpacity, a = this.matrix, s = t.getImageData(0, 0, n, i), u = 0; u < i; u++)
                for (var c = 0; c < n; c++) {
                  var f = Rr(s.data, c, u, n, 0, 0),
                    l = Rr(s.data, c, u, n, 0, 1),
                    h = Rr(s.data, c, u, n, 0, 2),
                    p = Rr(s.data, c, u, n, 0, 3),
                    v = Dr(a, 0, f) + Dr(a, 1, l) + Dr(a, 2, h) + Dr(a, 3, p) + Dr(a, 4, 1),
                    g = Dr(a, 5, f) + Dr(a, 6, l) + Dr(a, 7, h) + Dr(a, 8, p) + Dr(a, 9, 1),
                    y = Dr(a, 10, f) + Dr(a, 11, l) + Dr(a, 12, h) + Dr(a, 13, p) + Dr(a, 14, 1),
                    d = Dr(a, 15, f) + Dr(a, 16, l) + Dr(a, 17, h) + Dr(a, 18, p) + Dr(a, 19, 1);
                  o && ((v = g = y = 0), (d *= p / 255)),
                    Vr(s.data, c, u, n, 0, 0, v),
                    Vr(s.data, c, u, n, 0, 1, g),
                    Vr(s.data, c, u, n, 0, 2, y),
                    Vr(s.data, c, u, n, 0, 3, d);
                }
              t.clearRect(0, 0, n, i), t.putImageData(s, 0, 0);
            }
          }
        ]),
        n
      );
    })(te);
    function zr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var jr = (function (e) {
      t(V)(n, e);
      var r = zr(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "mask"), e;
      }
      return (
        t(k)(n, [
          {
            key: "apply",
            value: function (e, r) {
              var i = this.document,
                o = this.getAttribute("x").getPixels("x"),
                a = this.getAttribute("y").getPixels("y"),
                s = this.getStyle("width").getPixels("x"),
                u = this.getStyle("height").getPixels("y");
              if (!s && !u) {
                var c,
                  f = new se();
                t(p)((c = this.children)).call(c, function (t) {
                  f.addBoundingBox(t.getBoundingBox(e));
                }),
                  (o = Math.floor(f.x1)),
                  (a = Math.floor(f.y1)),
                  (s = Math.floor(f.width)),
                  (u = Math.floor(f.height));
              }
              var l = this.removeStyles(r, n.ignoreStyles),
                h = i.createCanvas(o + s, a + u),
                v = h.getContext("2d");
              i.screen.setDefaults(v),
                this.renderChildren(v),
                new Lr(i, {
                  nodeType: 1,
                  childNodes: [],
                  attributes: [
                    { nodeName: "type", value: "luminanceToAlpha" },
                    { nodeName: "includeOpacity", value: "true" }
                  ]
                }).apply(v, 0, 0, o + s, a + u);
              var g = i.createCanvas(o + s, a + u),
                y = g.getContext("2d");
              i.screen.setDefaults(y),
                r.render(y),
                (y.globalCompositeOperation = "destination-in"),
                (y.fillStyle = v.createPattern(h, "no-repeat")),
                y.fillRect(0, 0, o + s, a + u),
                (e.fillStyle = y.createPattern(g, "no-repeat")),
                e.fillRect(0, 0, o + s, a + u),
                this.restoreStyles(r, l);
            }
          },
          { key: "render", value: function (t) {} }
        ]),
        n
      );
    })(te);
    function Ir(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    jr.ignoreStyles = ["mask", "transform", "clip-path"];
    var Br = function () {},
      Fr = (function (e) {
        t(V)(n, e);
        var r = Ir(n);
        function n() {
          var e;
          return t(w)(this, n), ((e = r.apply(this, arguments)).type = "clipPath"), e;
        }
        return (
          t(k)(n, [
            {
              key: "apply",
              value: function (e) {
                var r,
                  n = this.document,
                  i = t(rt)(e),
                  o = e.beginPath,
                  a = e.closePath;
                i && ((i.beginPath = Br), (i.closePath = Br)),
                  t(et)(o, e, []),
                  t(p)((r = this.children)).call(r, function (t) {
                    if (void 0 !== t.path) {
                      var r = void 0 !== t.elementTransform ? t.elementTransform() : null;
                      r || (r = $t.fromElement(n, t)), r && r.apply(e), t.path(e), i && (i.closePath = a), r && r.unapply(e);
                    }
                  }),
                  t(et)(a, e, []),
                  e.clip(),
                  i && ((i.beginPath = o), (i.closePath = a));
              }
            },
            { key: "render", value: function (t) {} }
          ]),
          n
        );
      })(te);
    function Ur(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Yr = (function (e) {
      t(V)(n, e);
      var r = Ur(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "filter"), e;
      }
      return (
        t(k)(n, [
          {
            key: "apply",
            value: function (e, r) {
              var i = this.document,
                o = this.children,
                a = r.getBoundingBox(e);
              if (a) {
                var s = 0,
                  u = 0;
                t(p)(o).call(o, function (t) {
                  var e = t.extraFilterDistance || 0;
                  (s = Math.max(s, e)), (u = Math.max(u, e));
                });
                var c = Math.floor(a.width),
                  f = Math.floor(a.height),
                  l = c + 2 * s,
                  h = f + 2 * u;
                if (!(l < 1 || h < 1)) {
                  var v = Math.floor(a.x),
                    g = Math.floor(a.y),
                    y = this.removeStyles(r, n.ignoreStyles),
                    d = i.createCanvas(l, h),
                    x = d.getContext("2d");
                  i.screen.setDefaults(x),
                    x.translate(-v + s, -g + u),
                    r.render(x),
                    t(p)(o).call(o, function (t) {
                      "function" == typeof t.apply && t.apply(x, 0, 0, l, h);
                    }),
                    e.drawImage(d, 0, 0, l, h, v - s, g - u, l, h),
                    this.restoreStyles(r, y);
                }
              }
            }
          },
          { key: "render", value: function (t) {} }
        ]),
        n
      );
    })(te);
    function Hr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    Yr.ignoreStyles = ["filter", "transform", "clip-path"];
    var Xr = (function (e) {
      t(V)(n, e);
      var r = Hr(n);
      function n(e, i, o) {
        var a;
        return t(w)(this, n), ((a = r.call(this, e, i, o)).type = "feDropShadow"), a.addStylesFromStyleDefinition(), a;
      }
      return t(k)(n, [{ key: "apply", value: function (t, e, r, n, i) {} }]), n;
    })(te);
    function Gr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var qr = (function (e) {
      t(V)(n, e);
      var r = Gr(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "feMorphology"), e;
      }
      return t(k)(n, [{ key: "apply", value: function (t, e, r, n, i) {} }]), n;
    })(te);
    function Zr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Wr = (function (e) {
      t(V)(n, e);
      var r = Zr(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "feComposite"), e;
      }
      return t(k)(n, [{ key: "apply", value: function (t, e, r, n, i) {} }]), n;
    })(te);
    function Qr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var Jr = (function (e) {
      t(V)(n, e);
      var r = Qr(n);
      function n(e, i, o) {
        var a;
        return (
          t(w)(this, n),
          ((a = r.call(this, e, i, o)).type = "feGaussianBlur"),
          (a.blurRadius = Math.floor(a.getAttribute("stdDeviation").getNumber())),
          (a.extraFilterDistance = a.blurRadius),
          a
        );
      }
      return (
        t(k)(n, [
          {
            key: "apply",
            value: function (t, e, r, n, i) {
              var o = this.document,
                a = this.blurRadius,
                s = o.window ? o.window.document.body : null,
                u = t.canvas;
              (u.id = o.getUniqueId()),
                s && ((u.style.display = "none"), s.appendChild(u)),
                (0, nt.canvasRGBA)(u, e, r, n, i, a),
                s && s.removeChild(u);
            }
          }
        ]),
        n
      );
    })(te);
    function Kr(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var $r = (function (e) {
      t(V)(n, e);
      var r = Kr(n);
      function n() {
        var e;
        return t(w)(this, n), ((e = r.apply(this, arguments)).type = "title"), e;
      }
      return n;
    })(te);
    function tn(e) {
      var r = (function () {
        if ("undefined" == typeof Reflect || !t(R)) return !1;
        if (t(R).sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Date.prototype.toString.call(t(R)(Date, [], function () {})), !0;
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = t(_)(e);
        if (r) {
          var o = t(_)(this).constructor;
          n = t(R)(i, arguments, o);
        } else n = i.apply(this, arguments);
        return t(D)(this, n);
      };
    }
    var en = (function (e) {
        t(V)(n, e);
        var r = tn(n);
        function n() {
          var e;
          return t(w)(this, n), ((e = r.apply(this, arguments)).type = "desc"), e;
        }
        return n;
      })(te),
      rn = {
        svg: we,
        rect: Se,
        circle: Oe,
        ellipse: Te,
        line: Ee,
        polyline: Ne,
        polygon: Ve,
        path: me,
        pattern: _e,
        marker: ze,
        defs: Ie,
        linearGradient: Xe,
        radialGradient: qe,
        stop: We,
        animate: Je,
        animateColor: $e,
        animateTransform: er,
        font: or,
        "font-face": sr,
        "missing-glyph": cr,
        glyph: lr,
        text: le,
        tspan: pe,
        tref: pr,
        a: gr,
        textPath: wr,
        image: Sr,
        g: Fe,
        symbol: Or,
        style: Pr,
        use: Mr,
        mask: jr,
        clipPath: Fr,
        filter: Yr,
        feDropShadow: Xr,
        feMorphology: qr,
        feComposite: Wr,
        feColorMatrix: Lr,
        feGaussianBlur: Jr,
        title: $r,
        desc: en
      };
    function nn(e, r) {
      var n = t(d)(e);
      if (t(y)) {
        var i = t(y)(e);
        r &&
          (i = t(g)(i).call(i, function (r) {
            return t(v)(e, r).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function on() {
      return (
        (on = t(m)(
          t(x).mark(function e(r) {
            var n,
              i,
              o = arguments;
            return t(x).wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = o.length > 1 && void 0 !== o[1] && o[1]),
                      (i = document.createElement("img")),
                      n && (i.crossOrigin = "Anonymous"),
                      e.abrupt(
                        "return",
                        new (t(T))(function (t, e) {
                          (i.onload = function () {
                            t(i);
                          }),
                            (i.onerror = function () {
                              e();
                            }),
                            (i.src = r);
                        })
                      )
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        on.apply(this, arguments)
      );
    }
    var an = (function () {
      function e(r) {
        var n,
          i,
          o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = o.rootEmSize,
          s = void 0 === a ? 12 : a,
          u = o.emSize,
          c = void 0 === u ? 12 : u,
          f = o.createCanvas,
          l = void 0 === f ? e.createCanvas : f,
          h = o.createImage,
          p = void 0 === h ? e.createImage : h,
          v = o.anonymousCrossOrigin;
        t(w)(this, e),
          (this.canvg = r),
          (this.definitions = {}),
          (this.styles = {}),
          (this.stylesSpecificity = {}),
          (this.images = []),
          (this.fonts = []),
          (this.emSizeStack = []),
          (this.uniqueId = 0),
          (this.screen = r.screen),
          (this.rootEmSize = s),
          (this.emSize = c),
          (this.createCanvas = l),
          (this.createImage = this.bindCreateImage(p, v)),
          this.screen.wait(t(P)((n = this.isImagesLoaded)).call(n, this)),
          this.screen.wait(t(P)((i = this.isFontsLoaded)).call(i, this));
      }
      return (
        t(k)(e, [
          {
            key: "bindCreateImage",
            value: function (t, e) {
              return "boolean" == typeof e
                ? function (r, n) {
                    return t(r, "boolean" == typeof n ? n : e);
                  }
                : t;
            }
          },
          {
            key: "popEmSize",
            value: function () {
              this.emSizeStack.pop();
            }
          },
          {
            key: "getUniqueId",
            value: function () {
              return "canvg".concat(++this.uniqueId);
            }
          },
          {
            key: "isImagesLoaded",
            value: function () {
              var e;
              return t(C)((e = this.images)).call(e, function (t) {
                return t.loaded;
              });
            }
          },
          {
            key: "isFontsLoaded",
            value: function () {
              var e;
              return t(C)((e = this.fonts)).call(e, function (t) {
                return t.loaded;
              });
            }
          },
          {
            key: "createDocumentElement",
            value: function (t) {
              var e = this.createElement(t.documentElement);
              return (e.root = !0), e.addStylesFromStyleDefinition(), (this.documentElement = e), e;
            }
          },
          {
            key: "createElement",
            value: function (t) {
              var r = t.nodeName.replace(/^[^:]+:/, ""),
                n = e.elementTypes[r];
              return void 0 !== n ? new n(this, t) : new re(this, t);
            }
          },
          {
            key: "createTextNode",
            value: function (t) {
              return new ge(this, t);
            }
          },
          {
            key: "setViewBox",
            value: function (e) {
              this.screen.setViewBox(
                (function (e) {
                  for (var r = 1; r < arguments.length; r++) {
                    var n,
                      i = null != arguments[r] ? arguments[r] : {};
                    if (r % 2)
                      t(p)((n = nn(Object(i), !0))).call(n, function (r) {
                        t(b)(e, r, i[r]);
                      });
                    else if (t(h)) t(l)(e, t(h)(i));
                    else {
                      var o;
                      t(p)((o = nn(Object(i)))).call(o, function (r) {
                        t(f)(e, r, t(v)(i, r));
                      });
                    }
                  }
                  return e;
                })({ document: this }, e)
              );
            }
          },
          {
            key: "window",
            get: function () {
              return this.screen.window;
            }
          },
          {
            key: "fetch",
            get: function () {
              return this.screen.fetch;
            }
          },
          {
            key: "ctx",
            get: function () {
              return this.screen.ctx;
            }
          },
          {
            key: "emSize",
            get: function () {
              var t = this.emSizeStack;
              return t[t.length - 1];
            },
            set: function (t) {
              this.emSizeStack.push(t);
            }
          }
        ]),
        e
      );
    })();
    function sn(e, r) {
      var n = t(d)(e);
      if (t(y)) {
        var i = t(y)(e);
        r &&
          (i = t(g)(i).call(i, function (r) {
            return t(v)(e, r).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function un(e) {
      for (var r = 1; r < arguments.length; r++) {
        var n,
          i = null != arguments[r] ? arguments[r] : {};
        if (r % 2)
          t(p)((n = sn(Object(i), !0))).call(n, function (r) {
            t(b)(e, r, i[r]);
          });
        else if (t(h)) t(l)(e, t(h)(i));
        else {
          var o;
          t(p)((o = sn(Object(i)))).call(o, function (r) {
            t(f)(e, r, t(v)(i, r));
          });
        }
      }
      return e;
    }
    (an.createCanvas = function (t, e) {
      var r = document.createElement("canvas");
      return (r.width = t), (r.height = e), r;
    }),
      (an.createImage = function (t) {
        return on.apply(this, arguments);
      }),
      (an.elementTypes = rn);
    var cn = (function () {
      function e(r, n) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        t(w)(this, e), (this.parser = new Ut(i)), (this.screen = new It(r, i)), (this.options = i);
        var o = new an(this, i),
          a = o.createDocumentElement(n);
        (this.document = o), (this.documentElement = a);
      }
      var r, n;
      return (
        t(k)(
          e,
          [
            {
              key: "fork",
              value: function (t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e.from(t, r, un(un({}, this.options), n));
              }
            },
            {
              key: "forkString",
              value: function (t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return e.fromString(t, r, un(un({}, this.options), n));
              }
            },
            {
              key: "ready",
              value: function () {
                return this.screen.ready();
              }
            },
            {
              key: "isReady",
              value: function () {
                return this.screen.isReady();
              }
            },
            {
              key: "render",
              value:
                ((n = t(m)(
                  t(x).mark(function e() {
                    var r,
                      n = arguments;
                    return t(x).wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (r = n.length > 0 && void 0 !== n[0] ? n[0] : {}),
                                this.start(un({ enableRedraw: !0, ignoreAnimation: !0, ignoreMouse: !0 }, r)),
                                (t.next = 4),
                                this.ready()
                              );
                            case 4:
                              this.stop();
                            case 5:
                            case "end":
                              return t.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                )),
                function () {
                  return n.apply(this, arguments);
                })
            },
            {
              key: "start",
              value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  e = this.documentElement,
                  r = this.screen,
                  n = this.options;
                r.start(e, un(un({ enableRedraw: !0 }, n), t));
              }
            },
            {
              key: "stop",
              value: function () {
                this.screen.stop();
              }
            },
            {
              key: "resize",
              value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                  r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                this.documentElement.resize(t, e, r);
              }
            }
          ],
          [
            {
              key: "from",
              value:
                ((r = t(m)(
                  t(x).mark(function r(n, i) {
                    var o,
                      a,
                      s,
                      u = arguments;
                    return t(x).wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (a = new Ut((o = u.length > 2 && void 0 !== u[2] ? u[2] : {}))), (t.next = 4), a.parse(i);
                          case 4:
                            return (s = t.sent), t.abrupt("return", new e(n, s, o));
                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, r);
                  })
                )),
                function (t, e) {
                  return r.apply(this, arguments);
                })
            },
            {
              key: "fromString",
              value: function (t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new e(t, new Ut(n).parseFromString(r), n);
              }
            }
          ]
        ),
        e
      );
    })();
    var fn = Object.freeze({
        __proto__: null,
        offscreen: function () {
          var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).DOMParser,
            r = {
              window: null,
              ignoreAnimation: !0,
              ignoreMouse: !0,
              DOMParser: e,
              createCanvas: function (t, e) {
                return new OffscreenCanvas(t, e);
              },
              createImage: function (e) {
                return t(m)(
                  t(x).mark(function r() {
                    var n, i, o;
                    return t(x).wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), fetch(e);
                          case 2:
                            return (n = t.sent), (t.next = 5), n.blob();
                          case 5:
                            return (i = t.sent), (t.next = 8), createImageBitmap(i);
                          case 8:
                            return (o = t.sent), t.abrupt("return", o);
                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, r);
                  })
                )();
              }
            };
          return ("undefined" == typeof DOMParser && void 0 !== e) || t(X)(r, "DOMParser"), r;
        },
        node: function (t) {
          var e = t.DOMParser,
            r = t.canvas;
          return {
            window: null,
            ignoreAnimation: !0,
            ignoreMouse: !0,
            DOMParser: e,
            fetch: t.fetch,
            createCanvas: r.createCanvas,
            createImage: r.loadImage
          };
        }
      }),
      ln = cn;
  }),
    n.register("2ZhaM", function (t, e) {
      t.exports = n("lVa9c");
    }),
    n.register("lVa9c", function (t, e) {
      var r = n("dN1Gr");
      t.exports = r;
    }),
    n.register("dN1Gr", function (t, e) {
      var r = n("kz474"),
        i = String.prototype;
      t.exports = function (t) {
        var e = t.startsWith;
        return "string" == typeof t || t === i || (t instanceof String && e === i.startsWith) ? r : e;
      };
    }),
    n.register("kz474", function (t, e) {
      n("jDNPP");
      var r = n("vGGUj");
      t.exports = r("String").startsWith;
    }),
    n.register("jDNPP", function (t, e) {
      "use strict";
      var r,
        i = n("hCzcd"),
        o = n("8oJBm").f,
        a = n("dOY5U"),
        s = n("5rbg5"),
        u = n("afG1u"),
        c = n("j3XkH"),
        f = n("272tI"),
        l = "".startsWith,
        h = Math.min,
        p = c("startsWith");
      i(
        { target: "String", proto: !0, forced: !!(f || p || ((r = o(String.prototype, "startsWith")), !r || r.writable)) && !p },
        {
          startsWith: function (t) {
            var e = String(u(this));
            s(t);
            var r = a(h(arguments.length > 1 ? arguments[1] : void 0, e.length)),
              n = String(t);
            return l ? l.call(e, n, r) : e.slice(r, r + n.length) === n;
          }
        }
      );
    }),
    n.register("hCzcd", function (t, e) {
      "use strict";
      var r = n("hFqBl"),
        i = n("8oJBm").f,
        o = n("ltHYT"),
        a = n("k30YA"),
        s = n("eqgON"),
        u = n("4kZLz"),
        c = n("aOL02"),
        f = function (t) {
          var e = function (e, r, n) {
            if (this instanceof t) {
              switch (arguments.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(e);
                case 2:
                  return new t(e, r);
              }
              return new t(e, r, n);
            }
            return t.apply(this, arguments);
          };
          return (e.prototype = t.prototype), e;
        };
      t.exports = function (t, e) {
        var n,
          l,
          h,
          p,
          v,
          g,
          y,
          d,
          x = t.target,
          m = t.global,
          b = t.stat,
          w = t.proto,
          k = m ? r : b ? r[x] : (r[x] || {}).prototype,
          S = m ? a : a[x] || (a[x] = {}),
          A = S.prototype;
        for (h in e)
          (n = !o(m ? h : x + (b ? "." : "#") + h, t.forced) && k && c(k, h)),
            (v = S[h]),
            n && (g = t.noTargetGet ? (d = i(k, h)) && d.value : k[h]),
            (p = n && g ? g : e[h]),
            (n && typeof v == typeof p) ||
              ((y = t.bind && n ? s(p, r) : t.wrap && n ? f(p) : w && "function" == typeof p ? s(Function.call, p) : p),
              (t.sham || (p && p.sham) || (v && v.sham)) && u(y, "sham", !0),
              (S[h] = y),
              w && (c(a, (l = x + "Prototype")) || u(a, l, {}), (a[l][h] = p), t.real && A && !A[h] && u(A, h, p)));
      };
    }),
    n.register("hFqBl", function (t, e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof r && r) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }),
    n.register("8oJBm", function (t, r) {
      var i;
      e(
        t.exports,
        "f",
        () => i,
        (t) => (i = t)
      );
      var o = n("fZXRi"),
        a = n("5OB7s"),
        s = n("gvuXN"),
        u = n("e1pH8"),
        c = n("4JtvU"),
        f = n("aOL02"),
        l = n("9Kq0d"),
        h = Object.getOwnPropertyDescriptor;
      i = o
        ? h
        : function (t, e) {
            if (((t = u(t)), (e = c(e, !0)), l))
              try {
                return h(t, e);
              } catch (t) {}
            if (f(t, e)) return s(!a.f.call(t, e), t[e]);
          };
    }),
    n.register("fZXRi", function (t, e) {
      var r = n("2pV9O");
      t.exports = !r(function () {
        return (
          7 !=
          Object.defineProperty({}, 1, {
            get: function () {
              return 7;
            }
          })[1]
        );
      });
    }),
    n.register("2pV9O", function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    }),
    n.register("5OB7s", function (t, r) {
      var n;
      e(
        t.exports,
        "f",
        () => n,
        (t) => (n = t)
      );
      var i = {}.propertyIsEnumerable,
        o = Object.getOwnPropertyDescriptor,
        a = o && !i.call({ 1: 2 }, 1);
      n = a
        ? function (t) {
            var e = o(this, t);
            return !!e && e.enumerable;
          }
        : i;
    }),
    n.register("gvuXN", function (t, e) {
      t.exports = function (t, e) {
        return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
      };
    }),
    n.register("e1pH8", function (t, e) {
      var r = n("3gvVg"),
        i = n("afG1u");
      t.exports = function (t) {
        return r(i(t));
      };
    }),
    n.register("3gvVg", function (t, e) {
      var r = n("2pV9O"),
        i = n("7hecC"),
        o = "".split;
      t.exports = r(function () {
        return !Object("z").propertyIsEnumerable(0);
      })
        ? function (t) {
            return "String" == i(t) ? o.call(t, "") : Object(t);
          }
        : Object;
    }),
    n.register("7hecC", function (t, e) {
      var r = {}.toString;
      t.exports = function (t) {
        return r.call(t).slice(8, -1);
      };
    }),
    n.register("afG1u", function (t, e) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t;
      };
    }),
    n.register("4JtvU", function (t, e) {
      var r = n("4iMo0");
      t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
        if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
        if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t)))) return i;
        throw TypeError("Can't convert object to primitive value");
      };
    }),
    n.register("4iMo0", function (t, e) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    }),
    n.register("aOL02", function (t, e) {
      var r = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return r.call(t, e);
      };
    }),
    n.register("9Kq0d", function (t, e) {
      var r = n("fZXRi"),
        i = n("2pV9O"),
        o = n("3VC7w");
      t.exports =
        !r &&
        !i(function () {
          return (
            7 !=
            Object.defineProperty(o("div"), "a", {
              get: function () {
                return 7;
              }
            }).a
          );
        });
    }),
    n.register("3VC7w", function (t, e) {
      var r = n("hFqBl"),
        i = n("4iMo0"),
        o = r.document,
        a = i(o) && i(o.createElement);
      t.exports = function (t) {
        return a ? o.createElement(t) : {};
      };
    }),
    n.register("ltHYT", function (t, e) {
      var r = n("2pV9O"),
        i = /#|\.prototype\./,
        o = function (t, e) {
          var n = s[a(t)];
          return n == c || (n != u && ("function" == typeof e ? r(e) : !!e));
        },
        a = (o.normalize = function (t) {
          return String(t).replace(i, ".").toLowerCase();
        }),
        s = (o.data = {}),
        u = (o.NATIVE = "N"),
        c = (o.POLYFILL = "P");
      t.exports = o;
    }),
    n.register("k30YA", function (t, e) {
      t.exports = {};
    }),
    n.register("eqgON", function (t, e) {
      var r = n("7Q6z8");
      t.exports = function (t, e, n) {
        if ((r(t), void 0 === e)) return t;
        switch (n) {
          case 0:
            return function () {
              return t.call(e);
            };
          case 1:
            return function (r) {
              return t.call(e, r);
            };
          case 2:
            return function (r, n) {
              return t.call(e, r, n);
            };
          case 3:
            return function (r, n, i) {
              return t.call(e, r, n, i);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    }),
    n.register("7Q6z8", function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t;
      };
    }),
    n.register("4kZLz", function (t, e) {
      var r = n("fZXRi"),
        i = n("2Yzf9"),
        o = n("gvuXN");
      t.exports = r
        ? function (t, e, r) {
            return i.f(t, e, o(1, r));
          }
        : function (t, e, r) {
            return (t[e] = r), t;
          };
    }),
    n.register("2Yzf9", function (t, r) {
      var i;
      e(
        t.exports,
        "f",
        () => i,
        (t) => (i = t)
      );
      var o = n("fZXRi"),
        a = n("9Kq0d"),
        s = n("lnVro"),
        u = n("4JtvU"),
        c = Object.defineProperty;
      i = o
        ? c
        : function (t, e, r) {
            if ((s(t), (e = u(e, !0)), s(r), a))
              try {
                return c(t, e, r);
              } catch (t) {}
            if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
            return "value" in r && (t[e] = r.value), t;
          };
    }),
    n.register("lnVro", function (t, e) {
      var r = n("4iMo0");
      t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t;
      };
    }),
    n.register("dOY5U", function (t, e) {
      var r = n("2reXk"),
        i = Math.min;
      t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0;
      };
    }),
    n.register("2reXk", function (t, e) {
      var r = Math.ceil,
        n = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? n : r)(t);
      };
    }),
    n.register("5rbg5", function (t, e) {
      var r = n("jdox4");
      t.exports = function (t) {
        if (r(t)) throw TypeError("The method doesn't accept regular expressions");
        return t;
      };
    }),
    n.register("jdox4", function (t, e) {
      var r = n("4iMo0"),
        i = n("7hecC"),
        o = n("kzVBD")("match");
      t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t));
      };
    }),
    n.register("kzVBD", function (t, e) {
      var r = n("hFqBl"),
        i = n("dxYmH"),
        o = n("aOL02"),
        a = n("cswZ8"),
        s = n("mlfbp"),
        u = n("frwCG"),
        c = i("wks"),
        f = r.Symbol,
        l = u ? f : (f && f.withoutSetter) || a;
      t.exports = function (t) {
        return (o(c, t) && (s || "string" == typeof c[t])) || (s && o(f, t) ? (c[t] = f[t]) : (c[t] = l("Symbol." + t))), c[t];
      };
    }),
    n.register("dxYmH", function (t, e) {
      var r = n("272tI"),
        i = n("imeEC");
      (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {});
      })("versions", []).push({ version: "3.9.1", mode: r ? "pure" : "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" });
    }),
    n.register("272tI", function (t, e) {
      t.exports = !0;
    }),
    n.register("imeEC", function (t, e) {
      var r = n("hFqBl"),
        i = n("hluVf"),
        o = "__core-js_shared__",
        a = r[o] || i(o, {});
      t.exports = a;
    }),
    n.register("hluVf", function (t, e) {
      var r = n("hFqBl"),
        i = n("4kZLz");
      t.exports = function (t, e) {
        try {
          i(r, t, e);
        } catch (n) {
          r[t] = e;
        }
        return e;
      };
    }),
    n.register("cswZ8", function (t, e) {
      var r = 0,
        n = Math.random();
      t.exports = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++r + n).toString(36);
      };
    }),
    n.register("mlfbp", function (t, e) {
      var r = n("2O8ex"),
        i = n("giErv"),
        o = n("2pV9O");
      t.exports =
        !!Object.getOwnPropertySymbols &&
        !o(function () {
          return !Symbol.sham && (r ? 38 === i : i > 37 && i < 41);
        });
    }),
    n.register("2O8ex", function (t, e) {
      var r = n("7hecC"),
        i = n("hFqBl");
      t.exports = "process" == r(i.process);
    }),
    n.register("giErv", function (t, e) {
      var r,
        i,
        o = n("hFqBl"),
        a = n("26EVz"),
        s = o.process,
        u = s && s.versions,
        c = u && u.v8;
      c
        ? (i = (r = c.split("."))[0] + r[1])
        : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]),
        (t.exports = i && +i);
    }),
    n.register("26EVz", function (t, e) {
      var r = n("1vWf3");
      t.exports = r("navigator", "userAgent") || "";
    }),
    n.register("1vWf3", function (t, e) {
      var r = n("k30YA"),
        i = n("hFqBl"),
        o = function (t) {
          return "function" == typeof t ? t : void 0;
        };
      t.exports = function (t, e) {
        return arguments.length < 2 ? o(r[t]) || o(i[t]) : (r[t] && r[t][e]) || (i[t] && i[t][e]);
      };
    }),
    n.register("frwCG", function (t, e) {
      var r = n("mlfbp");
      t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    }),
    n.register("j3XkH", function (t, e) {
      var r = n("kzVBD")("match");
      t.exports = function (t) {
        var e = /./;
        try {
          "/./"[t](e);
        } catch (n) {
          try {
            return (e[r] = !1), "/./"[t](e);
          } catch (t) {}
        }
        return !1;
      };
    }),
    n.register("vGGUj", function (t, e) {
      var r = n("k30YA");
      t.exports = function (t) {
        return r[t + "Prototype"];
      };
    }),
    n.register("f9eLA", function (t, e) {
      t.exports = n("ae34i");
    }),
    n.register("ae34i", function (t, e) {
      var r = n("dZW51");
      t.exports = r;
    }),
    n.register("dZW51", function (t, e) {
      n("eYWXb");
      var r = n("k30YA");
      t.exports = r.parseFloat;
    }),
    n.register("eYWXb", function (t, e) {
      var r = n("hCzcd"),
        i = n("lCcEN");
      r({ global: !0, forced: parseFloat != i }, { parseFloat: i });
    }),
    n.register("lCcEN", function (t, e) {
      var r = n("hFqBl"),
        i = n("lIp87").trim,
        o = n("54wBr"),
        a = r.parseFloat,
        s = 1 / a(o + "-0") != -1 / 0;
      t.exports = s
        ? function (t) {
            var e = i(String(t)),
              r = a(e);
            return 0 === r && "-" == e.charAt(0) ? -0 : r;
          }
        : a;
    }),
    n.register("lIp87", function (t, e) {
      var r = n("afG1u"),
        i = "[" + n("54wBr") + "]",
        o = RegExp("^" + i + i + "*"),
        a = RegExp(i + i + "*$"),
        s = function (t) {
          return function (e) {
            var n = String(r(e));
            return 1 & t && (n = n.replace(o, "")), 2 & t && (n = n.replace(a, "")), n;
          };
        };
      t.exports = { start: s(1), end: s(2), trim: s(3) };
    }),
    n.register("54wBr", function (t, e) {
      t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
    }),
    n.register("h44i0", function (t, e) {
      t.exports = n("dipqs");
    }),
    n.register("dipqs", function (t, e) {
      var r = n("7xDZX");
      t.exports = r;
    }),
    n.register("7xDZX", function (t, e) {
      var r = n("gVf7r"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.map;
        return t === i || (t instanceof Array && e === i.map) ? r : e;
      };
    }),
    n.register("gVf7r", function (t, e) {
      n("1daDi");
      var r = n("vGGUj");
      t.exports = r("Array").map;
    }),
    n.register("1daDi", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("2EpMM").map;
      r(
        { target: "Array", proto: !0, forced: !n("hp38t")("map") },
        {
          map: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    }),
    n.register("2EpMM", function (t, e) {
      var r = n("eqgON"),
        i = n("3gvVg"),
        o = n("6SzFJ"),
        a = n("dOY5U"),
        s = n("7NwmG"),
        u = [].push,
        c = function (t) {
          var e = 1 == t,
            n = 2 == t,
            c = 3 == t,
            f = 4 == t,
            l = 6 == t,
            h = 7 == t,
            p = 5 == t || l;
          return function (v, g, y, d) {
            for (
              var x, m, b = o(v), w = i(b), k = r(g, y, 3), S = a(w.length), A = 0, O = d || s, C = e ? O(v, S) : n || h ? O(v, 0) : void 0;
              S > A;
              A++
            )
              if ((p || A in w) && ((m = k((x = w[A]), A, b)), t))
                if (e) C[A] = m;
                else if (m)
                  switch (t) {
                    case 3:
                      return !0;
                    case 5:
                      return x;
                    case 6:
                      return A;
                    case 2:
                      u.call(C, x);
                  }
                else
                  switch (t) {
                    case 4:
                      return !1;
                    case 7:
                      u.call(C, x);
                  }
            return l ? -1 : c || f ? f : C;
          };
        };
      t.exports = { forEach: c(0), map: c(1), filter: c(2), some: c(3), every: c(4), find: c(5), findIndex: c(6), filterOut: c(7) };
    }),
    n.register("6SzFJ", function (t, e) {
      var r = n("afG1u");
      t.exports = function (t) {
        return Object(r(t));
      };
    }),
    n.register("7NwmG", function (t, e) {
      var r = n("4iMo0"),
        i = n("50UiZ"),
        o = n("kzVBD")("species");
      t.exports = function (t, e) {
        var n;
        return (
          i(t) &&
            ("function" != typeof (n = t.constructor) || (n !== Array && !i(n.prototype))
              ? r(n) && null === (n = n[o]) && (n = void 0)
              : (n = void 0)),
          new (void 0 === n ? Array : n)(0 === e ? 0 : e)
        );
      };
    }),
    n.register("50UiZ", function (t, e) {
      var r = n("7hecC");
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t);
        };
    }),
    n.register("hp38t", function (t, e) {
      var r = n("2pV9O"),
        i = n("kzVBD"),
        o = n("giErv"),
        a = i("species");
      t.exports = function (t) {
        return (
          o >= 51 ||
          !r(function () {
            var e = [];
            return (
              ((e.constructor = {})[a] = function () {
                return { foo: 1 };
              }),
              1 !== e[t](Boolean).foo
            );
          })
        );
      };
    }),
    n.register("3jBDN", function (t, e) {
      var r = n("knZhe"),
        i = n("ifc6a"),
        o = n("kdzEb"),
        a = n("c6R2t");
      (t.exports = function (t, e) {
        return r(t) || i(t, e) || o(t, e) || a();
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("knZhe", function (t, e) {
      var r = n("9OjTt");
      (t.exports = function (t) {
        if (r(t)) return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("9OjTt", function (t, e) {
      t.exports = n("aTIgp");
    }),
    n.register("aTIgp", function (t, e) {
      var r = n("YhFkO");
      t.exports = r;
    }),
    n.register("YhFkO", function (t, e) {
      n("ljbSP");
      var r = n("k30YA");
      t.exports = r.Array.isArray;
    }),
    n.register("ljbSP", function (t, e) {
      n("hCzcd")({ target: "Array", stat: !0 }, { isArray: n("50UiZ") });
    }),
    n.register("ifc6a", function (t, e) {
      var r = n("czrgR"),
        i = n("FvYfz"),
        o = n("fKmQF");
      (t.exports = function (t, e) {
        if (void 0 !== r && i(Object(t))) {
          var n = [],
            a = !0,
            s = !1,
            u = void 0;
          try {
            for (var c, f = o(t); !(a = (c = f.next()).done) && (n.push(c.value), !e || n.length !== e); a = !0);
          } catch (t) {
            (s = !0), (u = t);
          } finally {
            try {
              a || null == f.return || f.return();
            } finally {
              if (s) throw u;
            }
          }
          return n;
        }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("czrgR", function (t, e) {
      t.exports = n("8gAWD");
    }),
    n.register("8gAWD", function (t, e) {
      var r = n("91K9T");
      n("lHGGg"), n("8wtvK"), n("eGRv8"), n("c2XCP"), n("e7Mh3"), (t.exports = r);
    }),
    n.register("91K9T", function (t, e) {
      n("455kE"),
        n("97Mfv"),
        n("inB4G"),
        n("dqwaK"),
        n("3ggLP"),
        n("btuwF"),
        n("ctQuH"),
        n("jZ7Zk"),
        n("1RPCj"),
        n("93ULG"),
        n("lCFDW"),
        n("dTkbx"),
        n("aa7Lp"),
        n("2K5XU"),
        n("gOAab"),
        n("hoflw"),
        n("3tO05"),
        n("eSCN6"),
        n("7IyXS"),
        n("edfN4");
      var r = n("k30YA");
      t.exports = r.Symbol;
    }),
    n.register("455kE", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("2pV9O"),
        o = n("50UiZ"),
        a = n("4iMo0"),
        s = n("6SzFJ"),
        u = n("dOY5U"),
        c = n("eBnQ5"),
        f = n("7NwmG"),
        l = n("hp38t"),
        h = n("kzVBD"),
        p = n("giErv"),
        v = h("isConcatSpreadable"),
        g = 9007199254740991,
        y = "Maximum allowed index exceeded",
        d =
          p >= 51 ||
          !i(function () {
            var t = [];
            return (t[v] = !1), t.concat()[0] !== t;
          }),
        x = l("concat"),
        m = function (t) {
          if (!a(t)) return !1;
          var e = t[v];
          return void 0 !== e ? !!e : o(t);
        };
      r(
        { target: "Array", proto: !0, forced: !d || !x },
        {
          concat: function (t) {
            var e,
              r,
              n,
              i,
              o,
              a = s(this),
              l = f(a, 0),
              h = 0;
            for (e = -1, n = arguments.length; e < n; e++)
              if (m((o = -1 === e ? a : arguments[e]))) {
                if (h + (i = u(o.length)) > g) throw TypeError(y);
                for (r = 0; r < i; r++, h++) r in o && c(l, h, o[r]);
              } else {
                if (h >= g) throw TypeError(y);
                c(l, h++, o);
              }
            return (l.length = h), l;
          }
        }
      );
    }),
    n.register("eBnQ5", function (t, e) {
      "use strict";
      var r = n("4JtvU"),
        i = n("2Yzf9"),
        o = n("gvuXN");
      t.exports = function (t, e, n) {
        var a = r(e);
        a in t ? i.f(t, a, o(0, n)) : (t[a] = n);
      };
    }),
    n.register("97Mfv", function (t, e) {}),
    n.register("inB4G", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("hFqBl"),
        o = n("1vWf3"),
        a = n("272tI"),
        s = n("fZXRi"),
        u = n("mlfbp"),
        c = n("frwCG"),
        f = n("2pV9O"),
        l = n("aOL02"),
        h = n("50UiZ"),
        p = n("4iMo0"),
        v = n("lnVro"),
        g = n("6SzFJ"),
        y = n("e1pH8"),
        d = n("4JtvU"),
        x = n("gvuXN"),
        m = n("8kl3S"),
        b = n("3NRLM"),
        w = n("7LXl2"),
        k = n("4mE5b"),
        S = n("luTY8"),
        A = n("8oJBm"),
        O = n("2Yzf9"),
        C = n("5OB7s"),
        T = n("4kZLz"),
        P = n("jjM1P"),
        E = n("dxYmH"),
        M = n("7rTOr"),
        N = n("5yvvB"),
        R = n("cswZ8"),
        V = n("kzVBD"),
        D = n("hgEw4"),
        _ = n("AZRcw"),
        L = n("jvH8t"),
        z = n("7xaeC"),
        j = n("2EpMM").forEach,
        I = M("hidden"),
        B = "Symbol",
        F = "prototype",
        U = V("toPrimitive"),
        Y = z.set,
        H = z.getterFor(B),
        X = Object[F],
        G = i.Symbol,
        q = o("JSON", "stringify"),
        Z = A.f,
        W = O.f,
        Q = k.f,
        J = C.f,
        K = E("symbols"),
        $ = E("op-symbols"),
        tt = E("string-to-symbol-registry"),
        et = E("symbol-to-string-registry"),
        rt = E("wks"),
        nt = i.QObject,
        it = !nt || !nt[F] || !nt[F].findChild,
        ot =
          s &&
          f(function () {
            return (
              7 !=
              m(
                W({}, "a", {
                  get: function () {
                    return W(this, "a", { value: 7 }).a;
                  }
                })
              ).a
            );
          })
            ? function (t, e, r) {
                var n = Z(X, e);
                n && delete X[e], W(t, e, r), n && t !== X && W(X, e, n);
              }
            : W,
        at = function (t, e) {
          var r = (K[t] = m(G[F]));
          return Y(r, { type: B, tag: t, description: e }), s || (r.description = e), r;
        },
        st = c
          ? function (t) {
              return "symbol" == typeof t;
            }
          : function (t) {
              return Object(t) instanceof G;
            },
        ut = function (t, e, r) {
          t === X && ut($, e, r), v(t);
          var n = d(e, !0);
          return (
            v(r),
            l(K, n)
              ? (r.enumerable
                  ? (l(t, I) && t[I][n] && (t[I][n] = !1), (r = m(r, { enumerable: x(0, !1) })))
                  : (l(t, I) || W(t, I, x(1, {})), (t[I][n] = !0)),
                ot(t, n, r))
              : W(t, n, r)
          );
        },
        ct = function (t, e) {
          v(t);
          var r = y(e),
            n = b(r).concat(pt(r));
          return (
            j(n, function (e) {
              (s && !ft.call(r, e)) || ut(t, e, r[e]);
            }),
            t
          );
        },
        ft = function (t) {
          var e = d(t, !0),
            r = J.call(this, e);
          return !(this === X && l(K, e) && !l($, e)) && (!(r || !l(this, e) || !l(K, e) || (l(this, I) && this[I][e])) || r);
        },
        lt = function (t, e) {
          var r = y(t),
            n = d(e, !0);
          if (r !== X || !l(K, n) || l($, n)) {
            var i = Z(r, n);
            return !i || !l(K, n) || (l(r, I) && r[I][n]) || (i.enumerable = !0), i;
          }
        },
        ht = function (t) {
          var e = Q(y(t)),
            r = [];
          return (
            j(e, function (t) {
              l(K, t) || l(N, t) || r.push(t);
            }),
            r
          );
        },
        pt = function (t) {
          var e = t === X,
            r = Q(e ? $ : y(t)),
            n = [];
          return (
            j(r, function (t) {
              !l(K, t) || (e && !l(X, t)) || n.push(K[t]);
            }),
            n
          );
        };
      (u ||
        ((G = function () {
          if (this instanceof G) throw TypeError("Symbol is not a constructor");
          var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            e = R(t),
            r = function (t) {
              this === X && r.call($, t), l(this, I) && l(this[I], e) && (this[I][e] = !1), ot(this, e, x(1, t));
            };
          return s && it && ot(X, e, { configurable: !0, set: r }), at(e, t);
        }),
        P(G[F], "toString", function () {
          return H(this).tag;
        }),
        P(G, "withoutSetter", function (t) {
          return at(R(t), t);
        }),
        (C.f = ft),
        (O.f = ut),
        (A.f = lt),
        (w.f = k.f = ht),
        (S.f = pt),
        (D.f = function (t) {
          return at(V(t), t);
        }),
        s &&
          (W(G[F], "description", {
            configurable: !0,
            get: function () {
              return H(this).description;
            }
          }),
          a || P(X, "propertyIsEnumerable", ft, { unsafe: !0 }))),
      r({ global: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: G }),
      j(b(rt), function (t) {
        _(t);
      }),
      r(
        { target: B, stat: !0, forced: !u },
        {
          for: function (t) {
            var e = String(t);
            if (l(tt, e)) return tt[e];
            var r = G(e);
            return (tt[e] = r), (et[r] = e), r;
          },
          keyFor: function (t) {
            if (!st(t)) throw TypeError(t + " is not a symbol");
            if (l(et, t)) return et[t];
          },
          useSetter: function () {
            it = !0;
          },
          useSimple: function () {
            it = !1;
          }
        }
      ),
      r(
        { target: "Object", stat: !0, forced: !u, sham: !s },
        {
          create: function (t, e) {
            return void 0 === e ? m(t) : ct(m(t), e);
          },
          defineProperty: ut,
          defineProperties: ct,
          getOwnPropertyDescriptor: lt
        }
      ),
      r({ target: "Object", stat: !0, forced: !u }, { getOwnPropertyNames: ht, getOwnPropertySymbols: pt }),
      r(
        {
          target: "Object",
          stat: !0,
          forced: f(function () {
            S.f(1);
          })
        },
        {
          getOwnPropertySymbols: function (t) {
            return S.f(g(t));
          }
        }
      ),
      q) &&
        r(
          {
            target: "JSON",
            stat: !0,
            forced:
              !u ||
              f(function () {
                var t = G();
                return "[null]" != q([t]) || "{}" != q({ a: t }) || "{}" != q(Object(t));
              })
          },
          {
            stringify: function (t, e, r) {
              for (var n, i = [t], o = 1; arguments.length > o; ) i.push(arguments[o++]);
              if (((n = e), (p(e) || void 0 !== t) && !st(t)))
                return (
                  h(e) ||
                    (e = function (t, e) {
                      if (("function" == typeof n && (e = n.call(this, t, e)), !st(e))) return e;
                    }),
                  (i[1] = e),
                  q.apply(null, i)
                );
            }
          }
        );
      G[F][U] || T(G[F], U, G[F].valueOf), L(G, B), (N[I] = !0);
    }),
    n.register("8kl3S", function (t, e) {
      var r,
        i = n("lnVro"),
        o = n("3DCOC"),
        a = n("8DpkI"),
        s = n("5yvvB"),
        u = n("ag891"),
        c = n("3VC7w"),
        f = n("7rTOr"),
        l = "prototype",
        h = "script",
        p = f("IE_PROTO"),
        v = function () {},
        g = function (t) {
          return "<" + h + ">" + t + "</" + h + ">";
        },
        y = function () {
          try {
            r = document.domain && new ActiveXObject("htmlfile");
          } catch (t) {}
          var t, e, n;
          y = r
            ? (function (t) {
                t.write(g("")), t.close();
                var e = t.parentWindow.Object;
                return (t = null), e;
              })(r)
            : ((e = c("iframe")),
              (n = "java" + h + ":"),
              (e.style.display = "none"),
              u.appendChild(e),
              (e.src = String(n)),
              (t = e.contentWindow.document).open(),
              t.write(g("document.F=Object")),
              t.close(),
              t.F);
          for (var i = a.length; i--; ) delete y[l][a[i]];
          return y();
        };
      (s[p] = !0),
        (t.exports =
          Object.create ||
          function (t, e) {
            var r;
            return null !== t ? ((v[l] = i(t)), (r = new v()), (v[l] = null), (r[p] = t)) : (r = y()), void 0 === e ? r : o(r, e);
          });
    }),
    n.register("3DCOC", function (t, e) {
      var r = n("fZXRi"),
        i = n("2Yzf9"),
        o = n("lnVro"),
        a = n("3NRLM");
      t.exports = r
        ? Object.defineProperties
        : function (t, e) {
            o(t);
            for (var r, n = a(e), s = n.length, u = 0; s > u; ) i.f(t, (r = n[u++]), e[r]);
            return t;
          };
    }),
    n.register("3NRLM", function (t, e) {
      var r = n("all1C"),
        i = n("8DpkI");
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, i);
        };
    }),
    n.register("all1C", function (t, e) {
      var r = n("aOL02"),
        i = n("e1pH8"),
        o = n("k4So3").indexOf,
        a = n("5yvvB");
      t.exports = function (t, e) {
        var n,
          s = i(t),
          u = 0,
          c = [];
        for (n in s) !r(a, n) && r(s, n) && c.push(n);
        for (; e.length > u; ) r(s, (n = e[u++])) && (~o(c, n) || c.push(n));
        return c;
      };
    }),
    n.register("k4So3", function (t, e) {
      var r = n("e1pH8"),
        i = n("dOY5U"),
        o = n("4Ulxs"),
        a = function (t) {
          return function (e, n, a) {
            var s,
              u = r(e),
              c = i(u.length),
              f = o(a, c);
            if (t && n != n) {
              for (; c > f; ) if ((s = u[f++]) != s) return !0;
            } else for (; c > f; f++) if ((t || f in u) && u[f] === n) return t || f || 0;
            return !t && -1;
          };
        };
      t.exports = { includes: a(!0), indexOf: a(!1) };
    }),
    n.register("4Ulxs", function (t, e) {
      var r = n("2reXk"),
        i = Math.max,
        o = Math.min;
      t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e);
      };
    }),
    n.register("5yvvB", function (t, e) {
      t.exports = {};
    }),
    n.register("8DpkI", function (t, e) {
      t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }),
    n.register("ag891", function (t, e) {
      var r = n("1vWf3");
      t.exports = r("document", "documentElement");
    }),
    n.register("7rTOr", function (t, e) {
      var r = n("dxYmH"),
        i = n("cswZ8"),
        o = r("keys");
      t.exports = function (t) {
        return o[t] || (o[t] = i(t));
      };
    }),
    n.register("7LXl2", function (t, r) {
      var i;
      e(
        t.exports,
        "f",
        () => i,
        (t) => (i = t)
      );
      var o = n("all1C"),
        a = n("8DpkI").concat("length", "prototype");
      i =
        Object.getOwnPropertyNames ||
        function (t) {
          return o(t, a);
        };
    }),
    n.register("4mE5b", function (t, r) {
      var i;
      e(
        t.exports,
        "f",
        () => i,
        (t) => (i = t)
      );
      var o = n("e1pH8"),
        a = n("7LXl2").f,
        s = {}.toString,
        u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      i = function (t) {
        return u && "[object Window]" == s.call(t)
          ? (function (t) {
              try {
                return a(t);
              } catch (t) {
                return u.slice();
              }
            })(t)
          : a(o(t));
      };
    }),
    n.register("luTY8", function (t, r) {
      var n;
      e(
        t.exports,
        "f",
        () => n,
        (t) => (n = t)
      ),
        (n = Object.getOwnPropertySymbols);
    }),
    n.register("jjM1P", function (t, e) {
      var r = n("4kZLz");
      t.exports = function (t, e, n, i) {
        i && i.enumerable ? (t[e] = n) : r(t, e, n);
      };
    }),
    n.register("hgEw4", function (t, r) {
      var i;
      e(
        t.exports,
        "f",
        () => i,
        (t) => (i = t)
      );
      var o = n("kzVBD");
      i = o;
    }),
    n.register("AZRcw", function (t, e) {
      var r = n("k30YA"),
        i = n("aOL02"),
        o = n("hgEw4"),
        a = n("2Yzf9").f;
      t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = {});
        i(e, t) || a(e, t, { value: o.f(t) });
      };
    }),
    n.register("jvH8t", function (t, e) {
      var r = n("3Ajll"),
        i = n("2Yzf9").f,
        o = n("4kZLz"),
        a = n("aOL02"),
        s = n("4rfP4"),
        u = n("kzVBD")("toStringTag");
      t.exports = function (t, e, n, c) {
        if (t) {
          var f = n ? t : t.prototype;
          a(f, u) || i(f, u, { configurable: !0, value: e }), c && !r && o(f, "toString", s);
        }
      };
    }),
    n.register("3Ajll", function (t, e) {
      var r = {};
      (r[n("kzVBD")("toStringTag")] = "z"), (t.exports = "[object z]" === String(r));
    }),
    n.register("4rfP4", function (t, e) {
      "use strict";
      var r = n("3Ajll"),
        i = n("grdQE");
      t.exports = r
        ? {}.toString
        : function () {
            return "[object " + i(this) + "]";
          };
    }),
    n.register("grdQE", function (t, e) {
      var r = n("3Ajll"),
        i = n("7hecC"),
        o = n("kzVBD")("toStringTag"),
        a =
          "Arguments" ==
          i(
            (function () {
              return arguments;
            })()
          );
      t.exports = r
        ? i
        : function (t) {
            var e, r, n;
            return void 0 === t
              ? "Undefined"
              : null === t
              ? "Null"
              : "string" ==
                typeof (r = (function (t, e) {
                  try {
                    return t[e];
                  } catch (t) {}
                })((e = Object(t)), o))
              ? r
              : a
              ? i(e)
              : "Object" == (n = i(e)) && "function" == typeof e.callee
              ? "Arguments"
              : n;
          };
    }),
    n.register("7xaeC", function (t, e) {
      var r,
        i,
        o,
        a = n("cqBLM"),
        s = n("hFqBl"),
        u = n("4iMo0"),
        c = n("4kZLz"),
        f = n("aOL02"),
        l = n("imeEC"),
        h = n("7rTOr"),
        p = n("5yvvB"),
        v = s.WeakMap;
      if (a) {
        var g = l.state || (l.state = new v()),
          y = g.get,
          d = g.has,
          x = g.set;
        (r = function (t, e) {
          return (e.facade = t), x.call(g, t, e), e;
        }),
          (i = function (t) {
            return y.call(g, t) || {};
          }),
          (o = function (t) {
            return d.call(g, t);
          });
      } else {
        var m = h("state");
        (p[m] = !0),
          (r = function (t, e) {
            return (e.facade = t), c(t, m, e), e;
          }),
          (i = function (t) {
            return f(t, m) ? t[m] : {};
          }),
          (o = function (t) {
            return f(t, m);
          });
      }
      t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function (t) {
          return o(t) ? i(t) : r(t, {});
        },
        getterFor: function (t) {
          return function (e) {
            var r;
            if (!u(e) || (r = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
            return r;
          };
        }
      };
    }),
    n.register("cqBLM", function (t, e) {
      var r = n("hFqBl"),
        i = n("6Hfke"),
        o = r.WeakMap;
      t.exports = "function" == typeof o && /native code/.test(i(o));
    }),
    n.register("6Hfke", function (t, e) {
      var r = n("imeEC"),
        i = Function.toString;
      "function" != typeof r.inspectSource &&
        (r.inspectSource = function (t) {
          return i.call(t);
        }),
        (t.exports = r.inspectSource);
    }),
    n.register("dqwaK", function (t, e) {
      n("AZRcw")("asyncIterator");
    }),
    n.register("3ggLP", function (t, e) {}),
    n.register("btuwF", function (t, e) {
      n("AZRcw")("hasInstance");
    }),
    n.register("ctQuH", function (t, e) {
      n("AZRcw")("isConcatSpreadable");
    }),
    n.register("jZ7Zk", function (t, e) {
      n("AZRcw")("iterator");
    }),
    n.register("1RPCj", function (t, e) {
      n("AZRcw")("match");
    }),
    n.register("93ULG", function (t, e) {
      n("AZRcw")("matchAll");
    }),
    n.register("lCFDW", function (t, e) {
      n("AZRcw")("replace");
    }),
    n.register("dTkbx", function (t, e) {
      n("AZRcw")("search");
    }),
    n.register("aa7Lp", function (t, e) {
      n("AZRcw")("species");
    }),
    n.register("2K5XU", function (t, e) {
      n("AZRcw")("split");
    }),
    n.register("gOAab", function (t, e) {
      n("AZRcw")("toPrimitive");
    }),
    n.register("hoflw", function (t, e) {
      n("AZRcw")("toStringTag");
    }),
    n.register("3tO05", function (t, e) {
      n("AZRcw")("unscopables");
    }),
    n.register("eSCN6", function (t, e) {
      var r = n("hFqBl");
      n("jvH8t")(r.JSON, "JSON", !0);
    }),
    n.register("7IyXS", function (t, e) {}),
    n.register("edfN4", function (t, e) {}),
    n.register("lHGGg", function (t, e) {
      n("AZRcw")("asyncDispose");
    }),
    n.register("8wtvK", function (t, e) {
      n("AZRcw")("dispose");
    }),
    n.register("eGRv8", function (t, e) {
      n("AZRcw")("observable");
    }),
    n.register("c2XCP", function (t, e) {
      n("AZRcw")("patternMatch");
    }),
    n.register("e7Mh3", function (t, e) {
      n("AZRcw")("replaceAll");
    }),
    n.register("FvYfz", function (t, e) {
      t.exports = n("3bQKC");
    }),
    n.register("3bQKC", function (t, e) {
      n("ky8US"), n("28Myb");
      var r = n("6w5iz");
      t.exports = r;
    }),
    n.register("ky8US", function (t, e) {
      n("jDHi0");
      var r = n("2nagA"),
        i = n("hFqBl"),
        o = n("grdQE"),
        a = n("4kZLz"),
        s = n("ksiuD"),
        u = n("kzVBD")("toStringTag");
      for (var c in r) {
        var f = i[c],
          l = f && f.prototype;
        l && o(l) !== u && a(l, u, c), (s[c] = s.Array);
      }
    }),
    n.register("jDHi0", function (t, e) {
      "use strict";
      var r = n("e1pH8"),
        i = n("1ieRV"),
        o = n("ksiuD"),
        a = n("7xaeC"),
        s = n("53hUC"),
        u = "Array Iterator",
        c = a.set,
        f = a.getterFor(u);
      (t.exports = s(
        Array,
        "Array",
        function (t, e) {
          c(this, { type: u, target: r(t), index: 0, kind: e });
        },
        function () {
          var t = f(this),
            e = t.target,
            r = t.kind,
            n = t.index++;
          return !e || n >= e.length
            ? ((t.target = void 0), { value: void 0, done: !0 })
            : "keys" == r
            ? { value: n, done: !1 }
            : "values" == r
            ? { value: e[n], done: !1 }
            : { value: [n, e[n]], done: !1 };
        },
        "values"
      )),
        (o.Arguments = o.Array),
        i("keys"),
        i("values"),
        i("entries");
    }),
    n.register("1ieRV", function (t, e) {
      t.exports = function () {};
    }),
    n.register("ksiuD", function (t, e) {
      t.exports = {};
    }),
    n.register("53hUC", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("2fC32"),
        o = n("gOmim"),
        a = n("dgJPD"),
        s = n("jvH8t"),
        u = n("4kZLz"),
        c = n("jjM1P"),
        f = n("kzVBD"),
        l = n("272tI"),
        h = n("ksiuD"),
        p = n("lM3Rj"),
        v = p.IteratorPrototype,
        g = p.BUGGY_SAFARI_ITERATORS,
        y = f("iterator"),
        d = "keys",
        x = "values",
        m = "entries",
        b = function () {
          return this;
        };
      t.exports = function (t, e, n, f, p, w, k) {
        i(n, e, f);
        var S,
          A,
          O,
          C = function (t) {
            if (t === p && N) return N;
            if (!g && t in E) return E[t];
            switch (t) {
              case d:
              case x:
              case m:
                return function () {
                  return new n(this, t);
                };
            }
            return function () {
              return new n(this);
            };
          },
          T = e + " Iterator",
          P = !1,
          E = t.prototype,
          M = E[y] || E["@@iterator"] || (p && E[p]),
          N = (!g && M) || C(p),
          R = ("Array" == e && E.entries) || M;
        if (
          (R &&
            ((S = o(R.call(new t()))),
            v !== Object.prototype &&
              S.next &&
              (l || o(S) === v || (a ? a(S, v) : "function" != typeof S[y] && u(S, y, b)), s(S, T, !0, !0), l && (h[T] = b))),
          p == x &&
            M &&
            M.name !== x &&
            ((P = !0),
            (N = function () {
              return M.call(this);
            })),
          (l && !k) || E[y] === N || u(E, y, N),
          (h[e] = N),
          p)
        )
          if (((A = { values: C(x), keys: w ? N : C(d), entries: C(m) }), k)) for (O in A) (g || P || !(O in E)) && c(E, O, A[O]);
          else r({ target: e, proto: !0, forced: g || P }, A);
        return A;
      };
    }),
    n.register("2fC32", function (t, e) {
      "use strict";
      var r = n("lM3Rj").IteratorPrototype,
        i = n("8kl3S"),
        o = n("gvuXN"),
        a = n("jvH8t"),
        s = n("ksiuD"),
        u = function () {
          return this;
        };
      t.exports = function (t, e, n) {
        var c = e + " Iterator";
        return (t.prototype = i(r, { next: o(1, n) })), a(t, c, !1, !0), (s[c] = u), t;
      };
    }),
    n.register("lM3Rj", function (t, e) {
      "use strict";
      var r,
        i,
        o,
        a = n("2pV9O"),
        s = n("gOmim"),
        u = n("4kZLz"),
        c = n("aOL02"),
        f = n("kzVBD"),
        l = n("272tI"),
        h = f("iterator"),
        p = !1;
      [].keys && ("next" in (o = [].keys()) ? (i = s(s(o))) !== Object.prototype && (r = i) : (p = !0));
      var v =
        null == r ||
        a(function () {
          var t = {};
          return r[h].call(t) !== t;
        });
      v && (r = {}),
        (l && !v) ||
          c(r, h) ||
          u(r, h, function () {
            return this;
          }),
        (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
    }),
    n.register("gOmim", function (t, e) {
      var r = n("aOL02"),
        i = n("6SzFJ"),
        o = n("7rTOr"),
        a = n("kujYL"),
        s = o("IE_PROTO"),
        u = Object.prototype;
      t.exports = a
        ? Object.getPrototypeOf
        : function (t) {
            return (
              (t = i(t)),
              r(t, s)
                ? t[s]
                : "function" == typeof t.constructor && t instanceof t.constructor
                ? t.constructor.prototype
                : t instanceof Object
                ? u
                : null
            );
          };
    }),
    n.register("kujYL", function (t, e) {
      var r = n("2pV9O");
      t.exports = !r(function () {
        function t() {}
        return (t.prototype.constructor = null), Object.getPrototypeOf(new t()) !== t.prototype;
      });
    }),
    n.register("dgJPD", function (t, e) {
      var r = n("lnVro"),
        i = n("1koe8");
      t.exports =
        Object.setPrototypeOf ||
        ("__proto__" in {}
          ? (function () {
              var t,
                e = !1,
                n = {};
              try {
                (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), (e = n instanceof Array);
              } catch (t) {}
              return function (n, o) {
                return r(n), i(o), e ? t.call(n, o) : (n.__proto__ = o), n;
              };
            })()
          : void 0);
    }),
    n.register("1koe8", function (t, e) {
      var r = n("4iMo0");
      t.exports = function (t) {
        if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t;
      };
    }),
    n.register("2nagA", function (t, e) {
      t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
      };
    }),
    n.register("28Myb", function (t, e) {
      "use strict";
      var r = n("ect7n").charAt,
        i = n("7xaeC"),
        o = n("53hUC"),
        a = "String Iterator",
        s = i.set,
        u = i.getterFor(a);
      o(
        String,
        "String",
        function (t) {
          s(this, { type: a, string: String(t), index: 0 });
        },
        function () {
          var t,
            e = u(this),
            n = e.string,
            i = e.index;
          return i >= n.length ? { value: void 0, done: !0 } : ((t = r(n, i)), (e.index += t.length), { value: t, done: !1 });
        }
      );
    }),
    n.register("ect7n", function (t, e) {
      var r = n("2reXk"),
        i = n("afG1u"),
        o = function (t) {
          return function (e, n) {
            var o,
              a,
              s = String(i(e)),
              u = r(n),
              c = s.length;
            return u < 0 || u >= c
              ? t
                ? ""
                : void 0
              : (o = s.charCodeAt(u)) < 55296 || o > 56319 || u + 1 === c || (a = s.charCodeAt(u + 1)) < 56320 || a > 57343
              ? t
                ? s.charAt(u)
                : o
              : t
              ? s.slice(u, u + 2)
              : a - 56320 + ((o - 55296) << 10) + 65536;
          };
        };
      t.exports = { codeAt: o(!1), charAt: o(!0) };
    }),
    n.register("6w5iz", function (t, e) {
      var r = n("grdQE"),
        i = n("kzVBD"),
        o = n("ksiuD"),
        a = i("iterator");
      t.exports = function (t) {
        var e = Object(t);
        return void 0 !== e[a] || "@@iterator" in e || o.hasOwnProperty(r(e));
      };
    }),
    n.register("fKmQF", function (t, e) {
      t.exports = n("jIWpI");
    }),
    n.register("jIWpI", function (t, e) {
      n("ky8US"), n("28Myb");
      var r = n("3lFi1");
      t.exports = r;
    }),
    n.register("3lFi1", function (t, e) {
      var r = n("lnVro"),
        i = n("hYFk0");
      t.exports = function (t) {
        var e = i(t);
        if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
        return r(e.call(t));
      };
    }),
    n.register("hYFk0", function (t, e) {
      var r = n("grdQE"),
        i = n("ksiuD"),
        o = n("kzVBD")("iterator");
      t.exports = function (t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
      };
    }),
    n.register("kdzEb", function (t, e) {
      var r = n("ezCpD"),
        i = n("aCJrA"),
        o = n("7B6Ga");
      (t.exports = function (t, e) {
        var n;
        if (t) {
          if ("string" == typeof t) return o(t, e);
          var a = r((n = Object.prototype.toString.call(t))).call(n, 8, -1);
          return (
            "Object" === a && t.constructor && (a = t.constructor.name),
            "Map" === a || "Set" === a ? i(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? o(t, e) : void 0
          );
        }
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("ezCpD", function (t, e) {
      t.exports = n("g8j6d");
    }),
    n.register("g8j6d", function (t, e) {
      var r = n("9vW1a");
      t.exports = r;
    }),
    n.register("9vW1a", function (t, e) {
      var r = n("cTg9U"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.slice;
        return t === i || (t instanceof Array && e === i.slice) ? r : e;
      };
    }),
    n.register("cTg9U", function (t, e) {
      n("84t5M");
      var r = n("vGGUj");
      t.exports = r("Array").slice;
    }),
    n.register("84t5M", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("4iMo0"),
        o = n("50UiZ"),
        a = n("4Ulxs"),
        s = n("dOY5U"),
        u = n("e1pH8"),
        c = n("eBnQ5"),
        f = n("kzVBD"),
        l = n("hp38t")("slice"),
        h = f("species"),
        p = [].slice,
        v = Math.max;
      r(
        { target: "Array", proto: !0, forced: !l },
        {
          slice: function (t, e) {
            var r,
              n,
              f,
              l = u(this),
              g = s(l.length),
              y = a(t, g),
              d = a(void 0 === e ? g : e, g);
            if (
              o(l) &&
              ("function" != typeof (r = l.constructor) || (r !== Array && !o(r.prototype))
                ? i(r) && null === (r = r[h]) && (r = void 0)
                : (r = void 0),
              r === Array || void 0 === r)
            )
              return p.call(l, y, d);
            for (n = new (void 0 === r ? Array : r)(v(d - y, 0)), f = 0; y < d; y++, f++) y in l && c(n, f, l[y]);
            return (n.length = f), n;
          }
        }
      );
    }),
    n.register("aCJrA", function (t, e) {
      t.exports = n("6Xd7a");
    }),
    n.register("6Xd7a", function (t, e) {
      var r = n("qYgx5");
      t.exports = r;
    }),
    n.register("qYgx5", function (t, e) {
      n("28Myb"), n("1NB3i");
      var r = n("k30YA");
      t.exports = r.Array.from;
    }),
    n.register("1NB3i", function (t, e) {
      var r = n("hCzcd"),
        i = n("ijGUQ");
      r(
        {
          target: "Array",
          stat: !0,
          forced: !n("8vCwX")(function (t) {
            Array.from(t);
          })
        },
        { from: i }
      );
    }),
    n.register("ijGUQ", function (t, e) {
      "use strict";
      var r = n("eqgON"),
        i = n("6SzFJ"),
        o = n("ghK1N"),
        a = n("eF0dE"),
        s = n("dOY5U"),
        u = n("eBnQ5"),
        c = n("hYFk0");
      t.exports = function (t) {
        var e,
          n,
          f,
          l,
          h,
          p,
          v = i(t),
          g = "function" == typeof this ? this : Array,
          y = arguments.length,
          d = y > 1 ? arguments[1] : void 0,
          x = void 0 !== d,
          m = c(v),
          b = 0;
        if ((x && (d = r(d, y > 2 ? arguments[2] : void 0, 2)), null == m || (g == Array && a(m))))
          for (n = new g((e = s(v.length))); e > b; b++) (p = x ? d(v[b], b) : v[b]), u(n, b, p);
        else
          for (h = (l = m.call(v)).next, n = new g(); !(f = h.call(l)).done; b++) (p = x ? o(l, d, [f.value, b], !0) : f.value), u(n, b, p);
        return (n.length = b), n;
      };
    }),
    n.register("ghK1N", function (t, e) {
      var r = n("lnVro"),
        i = n("3jasN");
      t.exports = function (t, e, n, o) {
        try {
          return o ? e(r(n)[0], n[1]) : e(n);
        } catch (e) {
          throw (i(t), e);
        }
      };
    }),
    n.register("3jasN", function (t, e) {
      var r = n("lnVro");
      t.exports = function (t) {
        var e = t.return;
        if (void 0 !== e) return r(e.call(t)).value;
      };
    }),
    n.register("eF0dE", function (t, e) {
      var r = n("kzVBD"),
        i = n("ksiuD"),
        o = r("iterator"),
        a = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (i.Array === t || a[o] === t);
      };
    }),
    n.register("8vCwX", function (t, e) {
      var r = n("kzVBD")("iterator"),
        i = !1;
      try {
        var o = 0,
          a = {
            next: function () {
              return { done: !!o++ };
            },
            return: function () {
              i = !0;
            }
          };
        (a[r] = function () {
          return this;
        }),
          Array.from(a, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
          var o = {};
          (o[r] = function () {
            return {
              next: function () {
                return { done: (n = !0) };
              }
            };
          }),
            t(o);
        } catch (t) {}
        return n;
      };
    }),
    n.register("7B6Ga", function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("c6R2t", function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("3aXNC", function (t, e) {
      t.exports = n("8JzjK");
    }),
    n.register("8JzjK", function (t, e) {
      var r = n("bFHcw");
      t.exports = r;
    }),
    n.register("bFHcw", function (t, e) {
      n("1SjWF");
      var r = n("k30YA").Object,
        i = (t.exports = function (t, e, n) {
          return r.defineProperty(t, e, n);
        });
      r.defineProperty.sham && (i.sham = !0);
    }),
    n.register("1SjWF", function (t, e) {
      var r = n("hCzcd"),
        i = n("fZXRi");
      r({ target: "Object", stat: !0, forced: !i, sham: !i }, { defineProperty: n("2Yzf9").f });
    }),
    n.register("eVcEB", function (t, e) {
      t.exports = n("btLbi");
    }),
    n.register("btLbi", function (t, e) {
      var r = n("khy4u");
      t.exports = r;
    }),
    n.register("khy4u", function (t, e) {
      n("kFSCC");
      var r = n("k30YA").Object,
        i = (t.exports = function (t, e) {
          return r.defineProperties(t, e);
        });
      r.defineProperties.sham && (i.sham = !0);
    }),
    n.register("kFSCC", function (t, e) {
      var r = n("hCzcd"),
        i = n("fZXRi");
      r({ target: "Object", stat: !0, forced: !i, sham: !i }, { defineProperties: n("3DCOC") });
    }),
    n.register("gwb0D", function (t, e) {
      t.exports = n("5EP50");
    }),
    n.register("5EP50", function (t, e) {
      var r = n("6wcTt");
      t.exports = r;
    }),
    n.register("6wcTt", function (t, e) {
      n("eLtSM");
      var r = n("k30YA");
      t.exports = r.Object.getOwnPropertyDescriptors;
    }),
    n.register("eLtSM", function (t, e) {
      var r = n("hCzcd"),
        i = n("fZXRi"),
        o = n("9xWVN"),
        a = n("e1pH8"),
        s = n("8oJBm"),
        u = n("eBnQ5");
      r(
        { target: "Object", stat: !0, sham: !i },
        {
          getOwnPropertyDescriptors: function (t) {
            for (var e, r, n = a(t), i = s.f, c = o(n), f = {}, l = 0; c.length > l; ) void 0 !== (r = i(n, (e = c[l++]))) && u(f, e, r);
            return f;
          }
        }
      );
    }),
    n.register("9xWVN", function (t, e) {
      var r = n("1vWf3"),
        i = n("7LXl2"),
        o = n("luTY8"),
        a = n("lnVro");
      t.exports =
        r("Reflect", "ownKeys") ||
        function (t) {
          var e = i.f(a(t)),
            r = o.f;
          return r ? e.concat(r(t)) : e;
        };
    }),
    n.register("b1j2V", function (t, e) {
      t.exports = n("2boWg");
    }),
    n.register("2boWg", function (t, e) {
      n("ky8US");
      var r = n("kSkjJ"),
        i = n("grdQE"),
        o = Array.prototype,
        a = { DOMTokenList: !0, NodeList: !0 };
      t.exports = function (t) {
        var e = t.forEach;
        return t === o || (t instanceof Array && e === o.forEach) || a.hasOwnProperty(i(t)) ? r : e;
      };
    }),
    n.register("kSkjJ", function (t, e) {
      var r = n("8UuSl");
      t.exports = r;
    }),
    n.register("8UuSl", function (t, e) {
      n("kHTYY");
      var r = n("vGGUj");
      t.exports = r("Array").forEach;
    }),
    n.register("kHTYY", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("1xfTZ");
      r({ target: "Array", proto: !0, forced: [].forEach != i }, { forEach: i });
    }),
    n.register("1xfTZ", function (t, e) {
      "use strict";
      var r = n("2EpMM").forEach,
        i = n("6D67v")("forEach");
      t.exports = i
        ? [].forEach
        : function (t) {
            return r(this, t, arguments.length > 1 ? arguments[1] : void 0);
          };
    }),
    n.register("6D67v", function (t, e) {
      "use strict";
      var r = n("2pV9O");
      t.exports = function (t, e) {
        var n = [][t];
        return (
          !!n &&
          r(function () {
            n.call(
              null,
              e ||
                function () {
                  throw 1;
                },
              1
            );
          })
        );
      };
    }),
    n.register("4kqGh", function (t, e) {
      t.exports = n("euAcA");
    }),
    n.register("euAcA", function (t, e) {
      var r = n("gLnZS");
      t.exports = r;
    }),
    n.register("gLnZS", function (t, e) {
      n("fNBzs");
      var r = n("k30YA").Object,
        i = (t.exports = function (t, e) {
          return r.getOwnPropertyDescriptor(t, e);
        });
      r.getOwnPropertyDescriptor.sham && (i.sham = !0);
    }),
    n.register("fNBzs", function (t, e) {
      var r = n("hCzcd"),
        i = n("2pV9O"),
        o = n("e1pH8"),
        a = n("8oJBm").f,
        s = n("fZXRi"),
        u = i(function () {
          a(1);
        });
      r(
        { target: "Object", stat: !0, forced: !s || u, sham: !s },
        {
          getOwnPropertyDescriptor: function (t, e) {
            return a(o(t), e);
          }
        }
      );
    }),
    n.register("c1ecJ", function (t, e) {
      t.exports = n("2JQb2");
    }),
    n.register("2JQb2", function (t, e) {
      var r = n("jbgDi");
      t.exports = r;
    }),
    n.register("jbgDi", function (t, e) {
      var r = n("hhKlO"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.filter;
        return t === i || (t instanceof Array && e === i.filter) ? r : e;
      };
    }),
    n.register("hhKlO", function (t, e) {
      n("cCMnB");
      var r = n("vGGUj");
      t.exports = r("Array").filter;
    }),
    n.register("cCMnB", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("2EpMM").filter;
      r(
        { target: "Array", proto: !0, forced: !n("hp38t")("filter") },
        {
          filter: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    }),
    n.register("a9BK4", function (t, e) {
      t.exports = n("dUJtX");
    }),
    n.register("dUJtX", function (t, e) {
      var r = n("47bak");
      t.exports = r;
    }),
    n.register("47bak", function (t, e) {
      n("inB4G");
      var r = n("k30YA");
      t.exports = r.Object.getOwnPropertySymbols;
    }),
    n.register("kR5TX", function (t, e) {
      t.exports = n("gC9LM");
    }),
    n.register("gC9LM", function (t, e) {
      var r = n("7wY4q");
      t.exports = r;
    }),
    n.register("7wY4q", function (t, e) {
      n("lACxe");
      var r = n("k30YA");
      t.exports = r.Object.keys;
    }),
    n.register("lACxe", function (t, e) {
      var r = n("hCzcd"),
        i = n("6SzFJ"),
        o = n("3NRLM");
      r(
        {
          target: "Object",
          stat: !0,
          forced: n("2pV9O")(function () {
            o(1);
          })
        },
        {
          keys: function (t) {
            return o(i(t));
          }
        }
      );
    }),
    n.register("eWKWJ", function (t, e) {
      t.exports = n("kdPDQ");
    }),
    n.register("kdPDQ", function (t, e) {
      var r = (function (t) {
        "use strict";
        var e,
          r = Object.prototype,
          n = r.hasOwnProperty,
          i = "function" == typeof Symbol ? Symbol : {},
          o = i.iterator || "@@iterator",
          a = i.asyncIterator || "@@asyncIterator",
          s = i.toStringTag || "@@toStringTag";
        function u(t, e, r) {
          return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e];
        }
        try {
          u({}, "");
        } catch (t) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function c(t, e, r, n) {
          var i = e && e.prototype instanceof y ? e : y,
            o = Object.create(i.prototype),
            a = new P(n || []);
          return (
            (o._invoke = (function (t, e, r) {
              var n = l;
              return function (i, o) {
                if (n === p) throw new Error("Generator is already running");
                if (n === v) {
                  if ("throw" === i) throw o;
                  return M();
                }
                for (r.method = i, r.arg = o; ; ) {
                  var a = r.delegate;
                  if (a) {
                    var s = O(a, r);
                    if (s) {
                      if (s === g) continue;
                      return s;
                    }
                  }
                  if ("next" === r.method) r.sent = r._sent = r.arg;
                  else if ("throw" === r.method) {
                    if (n === l) throw ((n = v), r.arg);
                    r.dispatchException(r.arg);
                  } else "return" === r.method && r.abrupt("return", r.arg);
                  n = p;
                  var u = f(t, e, r);
                  if ("normal" === u.type) {
                    if (((n = r.done ? v : h), u.arg === g)) continue;
                    return { value: u.arg, done: r.done };
                  }
                  "throw" === u.type && ((n = v), (r.method = "throw"), (r.arg = u.arg));
                }
              };
            })(t, r, a)),
            o
          );
        }
        function f(t, e, r) {
          try {
            return { type: "normal", arg: t.call(e, r) };
          } catch (t) {
            return { type: "throw", arg: t };
          }
        }
        t.wrap = c;
        var l = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          v = "completed",
          g = {};
        function y() {}
        function d() {}
        function x() {}
        var m = {};
        m[o] = function () {
          return this;
        };
        var b = Object.getPrototypeOf,
          w = b && b(b(E([])));
        w && w !== r && n.call(w, o) && (m = w);
        var k = (x.prototype = y.prototype = Object.create(m));
        function S(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function A(t, e) {
          function r(i, o, a, s) {
            var u = f(t[i], t, o);
            if ("throw" !== u.type) {
              var c = u.arg,
                l = c.value;
              return l && "object" == typeof l && n.call(l, "__await")
                ? e.resolve(l.__await).then(
                    function (t) {
                      r("next", t, a, s);
                    },
                    function (t) {
                      r("throw", t, a, s);
                    }
                  )
                : e.resolve(l).then(
                    function (t) {
                      (c.value = t), a(c);
                    },
                    function (t) {
                      return r("throw", t, a, s);
                    }
                  );
            }
            s(u.arg);
          }
          var i;
          this._invoke = function (t, n) {
            function o() {
              return new e(function (e, i) {
                r(t, n, e, i);
              });
            }
            return (i = i ? i.then(o, o) : o());
          };
        }
        function O(t, r) {
          var n = t.iterator[r.method];
          if (n === e) {
            if (((r.delegate = null), "throw" === r.method)) {
              if (t.iterator.return && ((r.method = "return"), (r.arg = e), O(t, r), "throw" === r.method)) return g;
              (r.method = "throw"), (r.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return g;
          }
          var i = f(n, t.iterator, r.arg);
          if ("throw" === i.type) return (r.method = "throw"), (r.arg = i.arg), (r.delegate = null), g;
          var o = i.arg;
          return o
            ? o.done
              ? ((r[t.resultName] = o.value),
                (r.next = t.nextLoc),
                "return" !== r.method && ((r.method = "next"), (r.arg = e)),
                (r.delegate = null),
                g)
              : o
            : ((r.method = "throw"), (r.arg = new TypeError("iterator result is not an object")), (r.delegate = null), g);
        }
        function C(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]), 2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])), this.tryEntries.push(e);
        }
        function T(t) {
          var e = t.completion || {};
          (e.type = "normal"), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: "root" }]), t.forEach(C, this), this.reset(!0);
        }
        function E(t) {
          if (t) {
            var r = t[o];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var i = -1,
                a = function r() {
                  for (; ++i < t.length; ) if (n.call(t, i)) return (r.value = t[i]), (r.done = !1), r;
                  return (r.value = e), (r.done = !0), r;
                };
              return (a.next = a);
            }
          }
          return { next: M };
        }
        function M() {
          return { value: e, done: !0 };
        }
        return (
          (d.prototype = k.constructor = x),
          (x.constructor = d),
          (d.displayName = u(x, s, "GeneratorFunction")),
          (t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === d || "GeneratorFunction" === (e.displayName || e.name));
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(t, x) : ((t.__proto__ = x), u(t, s, "GeneratorFunction")),
              (t.prototype = Object.create(k)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          S(A.prototype),
          (A.prototype[a] = function () {
            return this;
          }),
          (t.AsyncIterator = A),
          (t.async = function (e, r, n, i, o) {
            void 0 === o && (o = Promise);
            var a = new A(c(e, r, n, i), o);
            return t.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          S(k),
          u(k, s, "Generator"),
          (k[o] = function () {
            return this;
          }),
          (k.toString = function () {
            return "[object Generator]";
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = E),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(T),
                !t)
              )
                for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function i(n, i) {
                return (s.type = "throw"), (s.arg = t), (r.next = n), i && ((r.method = "next"), (r.arg = e)), !!i;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var a = this.tryEntries[o],
                  s = a.completion;
                if ("root" === a.tryLoc) return i("end");
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, "catchLoc"),
                    c = n.call(a, "finallyLoc");
                  if (u && c) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                  } else {
                    if (!c) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return i(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var i = this.tryEntries[r];
                if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                  var o = i;
                  break;
                }
              }
              o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
              var a = o ? o.completion : {};
              return (a.type = t), (a.arg = e), o ? ((this.method = "next"), (this.next = o.finallyLoc), g) : this.complete(a);
            },
            complete: function (t, e) {
              if ("throw" === t.type) throw t.arg;
              return (
                "break" === t.type || "continue" === t.type
                  ? (this.next = t.arg)
                  : "return" === t.type
                  ? ((this.rval = this.arg = t.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === t.type && e && (this.next = e),
                g
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), T(r), g;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ("throw" === n.type) {
                    var i = n.arg;
                    T(r);
                  }
                  return i;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (t, r, n) {
              return (this.delegate = { iterator: E(t), resultName: r, nextLoc: n }), "next" === this.method && (this.arg = e), g;
            }
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = r;
      } catch (t) {
        Function("r", "regeneratorRuntime = r")(r);
      }
    }),
    n.register("4lSYb", function (t, e) {
      var r = n("hqKGp");
      function i(t, e, n, i, o, a, s) {
        try {
          var u = t[a](s),
            c = u.value;
        } catch (t) {
          return void n(t);
        }
        u.done ? e(c) : r.resolve(c).then(i, o);
      }
      (t.exports = function (t) {
        return function () {
          var e = this,
            n = arguments;
          return new r(function (r, o) {
            var a = t.apply(e, n);
            function s(t) {
              i(a, r, o, s, u, "next", t);
            }
            function u(t) {
              i(a, r, o, s, u, "throw", t);
            }
            s(void 0);
          });
        };
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("hqKGp", function (t, e) {
      t.exports = n("4dFmj");
    }),
    n.register("4dFmj", function (t, e) {
      var r = n("eDhW6");
      n("e0ceX"), n("iumFE"), n("dY9T4"), n("l4Qt7"), (t.exports = r);
    }),
    n.register("eDhW6", function (t, e) {
      n("73I2k"), n("97Mfv"), n("2BshC"), n("eCZ4g"), n("l2FJu"), n("hciTV"), n("28Myb"), n("ky8US");
      var r = n("k30YA");
      t.exports = r.Promise;
    }),
    n.register("73I2k", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("gOmim"),
        o = n("dgJPD"),
        a = n("8kl3S"),
        s = n("4kZLz"),
        u = n("gvuXN"),
        c = n("8uz5e"),
        f = function (t, e) {
          var r = this;
          if (!(r instanceof f)) return new f(t, e);
          o && (r = o(new Error(void 0), i(r))), void 0 !== e && s(r, "message", String(e));
          var n = [];
          return c(t, n.push, { that: n }), s(r, "errors", n), r;
        };
      (f.prototype = a(Error.prototype, { constructor: u(5, f), message: u(5, ""), name: u(5, "AggregateError") })),
        r({ global: !0 }, { AggregateError: f });
    }),
    n.register("8uz5e", function (t, e) {
      var r = n("lnVro"),
        i = n("eF0dE"),
        o = n("dOY5U"),
        a = n("eqgON"),
        s = n("hYFk0"),
        u = n("3jasN"),
        c = function (t, e) {
          (this.stopped = t), (this.result = e);
        };
      t.exports = function (t, e, n) {
        var f,
          l,
          h,
          p,
          v,
          g,
          y,
          d = n && n.that,
          x = !(!n || !n.AS_ENTRIES),
          m = !(!n || !n.IS_ITERATOR),
          b = !(!n || !n.INTERRUPTED),
          w = a(e, d, 1 + x + b),
          k = function (t) {
            return f && u(f), new c(!0, t);
          },
          S = function (t) {
            return x ? (r(t), b ? w(t[0], t[1], k) : w(t[0], t[1])) : b ? w(t, k) : w(t);
          };
        if (m) f = t;
        else {
          if ("function" != typeof (l = s(t))) throw TypeError("Target is not iterable");
          if (i(l)) {
            for (h = 0, p = o(t.length); p > h; h++) if ((v = S(t[h])) && v instanceof c) return v;
            return new c(!1);
          }
          f = l.call(t);
        }
        for (g = f.next; !(y = g.call(f)).done; ) {
          try {
            v = S(y.value);
          } catch (t) {
            throw (u(f), t);
          }
          if ("object" == typeof v && v && v instanceof c) return v;
        }
        return new c(!1);
      };
    }),
    n.register("2BshC", function (t, e) {
      "use strict";
      var r,
        i,
        o,
        a,
        s = n("hCzcd"),
        u = n("272tI"),
        c = n("hFqBl"),
        f = n("1vWf3"),
        l = n("3XARz"),
        h = n("jjM1P"),
        p = n("jBsvY"),
        v = n("jvH8t"),
        g = n("3S5gG"),
        y = n("4iMo0"),
        d = n("7Q6z8"),
        x = n("hJS6s"),
        m = n("6Hfke"),
        b = n("8uz5e"),
        w = n("8vCwX"),
        k = n("4gRqP"),
        S = n("ccqRK").set,
        A = n("lFoj9"),
        O = n("3wCuJ"),
        C = n("2xQ8y"),
        T = n("5mw2J"),
        P = n("jUjps"),
        E = n("7xaeC"),
        M = n("ltHYT"),
        N = n("kzVBD"),
        R = n("2O8ex"),
        V = n("giErv"),
        D = N("species"),
        _ = "Promise",
        L = E.get,
        z = E.set,
        j = E.getterFor(_),
        I = l,
        B = c.TypeError,
        F = c.document,
        U = c.process,
        Y = f("fetch"),
        H = T.f,
        X = H,
        G = !!(F && F.createEvent && c.dispatchEvent),
        q = "function" == typeof PromiseRejectionEvent,
        Z = "unhandledrejection",
        W = M(_, function () {
          if (!(m(I) !== String(I))) {
            if (66 === V) return !0;
            if (!R && !q) return !0;
          }
          if (u && !I.prototype.finally) return !0;
          if (V >= 51 && /native code/.test(I)) return !1;
          var t = I.resolve(1),
            e = function (t) {
              t(
                function () {},
                function () {}
              );
            };
          return ((t.constructor = {})[D] = e), !(t.then(function () {}) instanceof e);
        }),
        Q =
          W ||
          !w(function (t) {
            I.all(t).catch(function () {});
          }),
        J = function (t) {
          var e;
          return !(!y(t) || "function" != typeof (e = t.then)) && e;
        },
        K = function (t, e) {
          if (!t.notified) {
            t.notified = !0;
            var r = t.reactions;
            A(function () {
              for (var n = t.value, i = 1 == t.state, o = 0; r.length > o; ) {
                var a,
                  s,
                  u,
                  c = r[o++],
                  f = i ? c.ok : c.fail,
                  l = c.resolve,
                  h = c.reject,
                  p = c.domain;
                try {
                  f
                    ? (i || (2 === t.rejection && rt(t), (t.rejection = 1)),
                      !0 === f ? (a = n) : (p && p.enter(), (a = f(n)), p && (p.exit(), (u = !0))),
                      a === c.promise ? h(B("Promise-chain cycle")) : (s = J(a)) ? s.call(a, l, h) : l(a))
                    : h(n);
                } catch (t) {
                  p && !u && p.exit(), h(t);
                }
              }
              (t.reactions = []), (t.notified = !1), e && !t.rejection && tt(t);
            });
          }
        },
        $ = function (t, e, r) {
          var n, i;
          G
            ? (((n = F.createEvent("Event")).promise = e), (n.reason = r), n.initEvent(t, !1, !0), c.dispatchEvent(n))
            : (n = { promise: e, reason: r }),
            !q && (i = c["on" + t]) ? i(n) : t === Z && C("Unhandled promise rejection", r);
        },
        tt = function (t) {
          S.call(c, function () {
            var e,
              r = t.facade,
              n = t.value;
            if (
              et(t) &&
              ((e = P(function () {
                R ? U.emit("unhandledRejection", n, r) : $(Z, r, n);
              })),
              (t.rejection = R || et(t) ? 2 : 1),
              e.error)
            )
              throw e.value;
          });
        },
        et = function (t) {
          return 1 !== t.rejection && !t.parent;
        },
        rt = function (t) {
          S.call(c, function () {
            var e = t.facade;
            R ? U.emit("rejectionHandled", e) : $("rejectionhandled", e, t.value);
          });
        },
        nt = function (t, e, r) {
          return function (n) {
            t(e, n, r);
          };
        },
        it = function (t, e, r) {
          t.done || ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), K(t, !0));
        },
        ot = function (t, e, r) {
          if (!t.done) {
            (t.done = !0), r && (t = r);
            try {
              if (t.facade === e) throw B("Promise can't be resolved itself");
              var n = J(e);
              n
                ? A(function () {
                    var r = { done: !1 };
                    try {
                      n.call(e, nt(ot, r, t), nt(it, r, t));
                    } catch (e) {
                      it(r, e, t);
                    }
                  })
                : ((t.value = e), (t.state = 1), K(t, !1));
            } catch (e) {
              it({ done: !1 }, e, t);
            }
          }
        };
      W &&
        ((I = function (t) {
          x(this, I, _), d(t), r.call(this);
          var e = L(this);
          try {
            t(nt(ot, e), nt(it, e));
          } catch (t) {
            it(e, t);
          }
        }),
        ((r = function (t) {
          z(this, { type: _, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0 });
        }).prototype = p(I.prototype, {
          then: function (t, e) {
            var r = j(this),
              n = H(k(this, I));
            return (
              (n.ok = "function" != typeof t || t),
              (n.fail = "function" == typeof e && e),
              (n.domain = R ? U.domain : void 0),
              (r.parent = !0),
              r.reactions.push(n),
              0 != r.state && K(r, !1),
              n.promise
            );
          },
          catch: function (t) {
            return this.then(void 0, t);
          }
        })),
        (i = function () {
          var t = new r(),
            e = L(t);
          (this.promise = t), (this.resolve = nt(ot, e)), (this.reject = nt(it, e));
        }),
        (T.f = H =
          function (t) {
            return t === I || t === o ? new i(t) : X(t);
          }),
        u ||
          "function" != typeof l ||
          ((a = l.prototype.then),
          h(
            l.prototype,
            "then",
            function (t, e) {
              var r = this;
              return new I(function (t, e) {
                a.call(r, t, e);
              }).then(t, e);
            },
            { unsafe: !0 }
          ),
          "function" == typeof Y &&
            s(
              { global: !0, enumerable: !0, forced: !0 },
              {
                fetch: function (t) {
                  return O(I, Y.apply(c, arguments));
                }
              }
            ))),
        s({ global: !0, wrap: !0, forced: W }, { Promise: I }),
        v(I, _, !1, !0),
        g(_),
        (o = f(_)),
        s(
          { target: _, stat: !0, forced: W },
          {
            reject: function (t) {
              var e = H(this);
              return e.reject.call(void 0, t), e.promise;
            }
          }
        ),
        s(
          { target: _, stat: !0, forced: u || W },
          {
            resolve: function (t) {
              return O(u && this === o ? I : this, t);
            }
          }
        ),
        s(
          { target: _, stat: !0, forced: Q },
          {
            all: function (t) {
              var e = this,
                r = H(e),
                n = r.resolve,
                i = r.reject,
                o = P(function () {
                  var r = d(e.resolve),
                    o = [],
                    a = 0,
                    s = 1;
                  b(t, function (t) {
                    var u = a++,
                      c = !1;
                    o.push(void 0),
                      s++,
                      r.call(e, t).then(function (t) {
                        c || ((c = !0), (o[u] = t), --s || n(o));
                      }, i);
                  }),
                    --s || n(o);
                });
              return o.error && i(o.value), r.promise;
            },
            race: function (t) {
              var e = this,
                r = H(e),
                n = r.reject,
                i = P(function () {
                  var i = d(e.resolve);
                  b(t, function (t) {
                    i.call(e, t).then(r.resolve, n);
                  });
                });
              return i.error && n(i.value), r.promise;
            }
          }
        );
    }),
    n.register("3XARz", function (t, e) {
      var r = n("hFqBl");
      t.exports = r.Promise;
    }),
    n.register("jBsvY", function (t, e) {
      var r = n("jjM1P");
      t.exports = function (t, e, n) {
        for (var i in e) n && n.unsafe && t[i] ? (t[i] = e[i]) : r(t, i, e[i], n);
        return t;
      };
    }),
    n.register("3S5gG", function (t, e) {
      "use strict";
      var r = n("1vWf3"),
        i = n("2Yzf9"),
        o = n("kzVBD"),
        a = n("fZXRi"),
        s = o("species");
      t.exports = function (t) {
        var e = r(t),
          n = i.f;
        a &&
          e &&
          !e[s] &&
          n(e, s, {
            configurable: !0,
            get: function () {
              return this;
            }
          });
      };
    }),
    n.register("hJS6s", function (t, e) {
      t.exports = function (t, e, r) {
        if (!(t instanceof e)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
        return t;
      };
    }),
    n.register("4gRqP", function (t, e) {
      var r = n("lnVro"),
        i = n("7Q6z8"),
        o = n("kzVBD")("species");
      t.exports = function (t, e) {
        var n,
          a = r(t).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? e : i(n);
      };
    }),
    n.register("ccqRK", function (t, e) {
      var r,
        i,
        o,
        a = n("hFqBl"),
        s = n("2pV9O"),
        u = n("eqgON"),
        c = n("ag891"),
        f = n("3VC7w"),
        l = n("5i4Hh"),
        h = n("2O8ex"),
        p = a.location,
        v = a.setImmediate,
        g = a.clearImmediate,
        y = a.process,
        d = a.MessageChannel,
        x = a.Dispatch,
        m = 0,
        b = {},
        w = "onreadystatechange",
        k = function (t) {
          if (b.hasOwnProperty(t)) {
            var e = b[t];
            delete b[t], e();
          }
        },
        S = function (t) {
          return function () {
            k(t);
          };
        },
        A = function (t) {
          k(t.data);
        },
        O = function (t) {
          a.postMessage(t + "", p.protocol + "//" + p.host);
        };
      (v && g) ||
        ((v = function (t) {
          for (var e = [], n = 1; arguments.length > n; ) e.push(arguments[n++]);
          return (
            (b[++m] = function () {
              ("function" == typeof t ? t : Function(t)).apply(void 0, e);
            }),
            r(m),
            m
          );
        }),
        (g = function (t) {
          delete b[t];
        }),
        h
          ? (r = function (t) {
              y.nextTick(S(t));
            })
          : x && x.now
          ? (r = function (t) {
              x.now(S(t));
            })
          : d && !l
          ? ((o = (i = new d()).port2), (i.port1.onmessage = A), (r = u(o.postMessage, o, 1)))
          : a.addEventListener && "function" == typeof postMessage && !a.importScripts && p && "file:" !== p.protocol && !s(O)
          ? ((r = O), a.addEventListener("message", A, !1))
          : (r =
              w in f("script")
                ? function (t) {
                    c.appendChild(f("script"))[w] = function () {
                      c.removeChild(this), k(t);
                    };
                  }
                : function (t) {
                    setTimeout(S(t), 0);
                  })),
        (t.exports = { set: v, clear: g });
    }),
    n.register("5i4Hh", function (t, e) {
      var r = n("26EVz");
      t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
    }),
    n.register("lFoj9", function (t, e) {
      var r,
        i,
        o,
        a,
        s,
        u,
        c,
        f,
        l = n("hFqBl"),
        h = n("8oJBm").f,
        p = n("ccqRK").set,
        v = n("5i4Hh"),
        g = n("dzzI7"),
        y = n("2O8ex"),
        d = l.MutationObserver || l.WebKitMutationObserver,
        x = l.document,
        m = l.process,
        b = l.Promise,
        w = h(l, "queueMicrotask"),
        k = w && w.value;
      k ||
        ((r = function () {
          var t, e;
          for (y && (t = m.domain) && t.exit(); i; ) {
            (e = i.fn), (i = i.next);
            try {
              e();
            } catch (t) {
              throw (i ? a() : (o = void 0), t);
            }
          }
          (o = void 0), t && t.enter();
        }),
        v || y || g || !d || !x
          ? b && b.resolve
            ? ((c = b.resolve(void 0)),
              (f = c.then),
              (a = function () {
                f.call(c, r);
              }))
            : (a = y
                ? function () {
                    m.nextTick(r);
                  }
                : function () {
                    p.call(l, r);
                  })
          : ((s = !0),
            (u = x.createTextNode("")),
            new d(r).observe(u, { characterData: !0 }),
            (a = function () {
              u.data = s = !s;
            }))),
        (t.exports =
          k ||
          function (t) {
            var e = { fn: t, next: void 0 };
            o && (o.next = e), i || ((i = e), a()), (o = e);
          });
    }),
    n.register("dzzI7", function (t, e) {
      var r = n("26EVz");
      t.exports = /web0s(?!.*chrome)/i.test(r);
    }),
    n.register("3wCuJ", function (t, e) {
      var r = n("lnVro"),
        i = n("4iMo0"),
        o = n("5mw2J");
      t.exports = function (t, e) {
        if ((r(t), i(e) && e.constructor === t)) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise;
      };
    }),
    n.register("5mw2J", function (t, r) {
      var i;
      e(
        t.exports,
        "f",
        () => i,
        (t) => (i = t)
      );
      var o = n("7Q6z8"),
        a = function (t) {
          var e, r;
          (this.promise = new t(function (t, n) {
            if (void 0 !== e || void 0 !== r) throw TypeError("Bad Promise constructor");
            (e = t), (r = n);
          })),
            (this.resolve = o(e)),
            (this.reject = o(r));
        };
      i = function (t) {
        return new a(t);
      };
    }),
    n.register("2xQ8y", function (t, e) {
      var r = n("hFqBl");
      t.exports = function (t, e) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e));
      };
    }),
    n.register("jUjps", function (t, e) {
      t.exports = function (t) {
        try {
          return { error: !1, value: t() };
        } catch (t) {
          return { error: !0, value: t };
        }
      };
    }),
    n.register("eCZ4g", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("7Q6z8"),
        o = n("5mw2J"),
        a = n("jUjps"),
        s = n("8uz5e");
      r(
        { target: "Promise", stat: !0 },
        {
          allSettled: function (t) {
            var e = this,
              r = o.f(e),
              n = r.resolve,
              u = r.reject,
              c = a(function () {
                var r = i(e.resolve),
                  o = [],
                  a = 0,
                  u = 1;
                s(t, function (t) {
                  var i = a++,
                    s = !1;
                  o.push(void 0),
                    u++,
                    r.call(e, t).then(
                      function (t) {
                        s || ((s = !0), (o[i] = { status: "fulfilled", value: t }), --u || n(o));
                      },
                      function (t) {
                        s || ((s = !0), (o[i] = { status: "rejected", reason: t }), --u || n(o));
                      }
                    );
                }),
                  --u || n(o);
              });
            return c.error && u(c.value), r.promise;
          }
        }
      );
    }),
    n.register("l2FJu", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("7Q6z8"),
        o = n("1vWf3"),
        a = n("5mw2J"),
        s = n("jUjps"),
        u = n("8uz5e"),
        c = "No one promise resolved";
      r(
        { target: "Promise", stat: !0 },
        {
          any: function (t) {
            var e = this,
              r = a.f(e),
              n = r.resolve,
              f = r.reject,
              l = s(function () {
                var r = i(e.resolve),
                  a = [],
                  s = 0,
                  l = 1,
                  h = !1;
                u(t, function (t) {
                  var i = s++,
                    u = !1;
                  a.push(void 0),
                    l++,
                    r.call(e, t).then(
                      function (t) {
                        u || h || ((h = !0), n(t));
                      },
                      function (t) {
                        u || h || ((u = !0), (a[i] = t), --l || f(new (o("AggregateError"))(a, c)));
                      }
                    );
                }),
                  --l || f(new (o("AggregateError"))(a, c));
              });
            return l.error && f(l.value), r.promise;
          }
        }
      );
    }),
    n.register("hciTV", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("272tI"),
        o = n("3XARz"),
        a = n("2pV9O"),
        s = n("1vWf3"),
        u = n("4gRqP"),
        c = n("3wCuJ"),
        f = n("jjM1P");
      r(
        {
          target: "Promise",
          proto: !0,
          real: !0,
          forced:
            !!o &&
            a(function () {
              o.prototype.finally.call({ then: function () {} }, function () {});
            })
        },
        {
          finally: function (t) {
            var e = u(this, s("Promise")),
              r = "function" == typeof t;
            return this.then(
              r
                ? function (r) {
                    return c(e, t()).then(function () {
                      return r;
                    });
                  }
                : t,
              r
                ? function (r) {
                    return c(e, t()).then(function () {
                      throw r;
                    });
                  }
                : t
            );
          }
        }
      ),
        i || "function" != typeof o || o.prototype.finally || f(o.prototype, "finally", s("Promise").prototype.finally);
    }),
    n.register("e0ceX", function (t, e) {
      n("73I2k");
    }),
    n.register("iumFE", function (t, e) {
      n("eCZ4g");
    }),
    n.register("dY9T4", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("5mw2J"),
        o = n("jUjps");
      r(
        { target: "Promise", stat: !0 },
        {
          try: function (t) {
            var e = i.f(this),
              r = o(t);
            return (r.error ? e.reject : e.resolve)(r.value), e.promise;
          }
        }
      );
    }),
    n.register("l4Qt7", function (t, e) {
      n("l2FJu");
    }),
    n.register("3SdRi", function (t, e) {
      var r = n("l4SpN");
      (t.exports = function (t, e, n) {
        return e in t ? r(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("l4SpN", function (t, e) {
      t.exports = n("40439");
    }),
    n.register("40439", function (t, e) {
      var r = n("bFHcw");
      t.exports = r;
    }),
    n.register("7mhKD", function (t, e) {
      (t.exports = function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("keKGA", function (t, e) {
      var r = n("l4SpN");
      function i(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), r(t, i.key, i);
        }
      }
      (t.exports = function (t, e, r) {
        return e && i(t.prototype, e), r && i(t, r), t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("iFpyN", function (t, e) {
      t.exports = n("2bBvx");
    }),
    n.register("2bBvx", function (t, e) {
      var r = n("iDhb1");
      t.exports = r;
    }),
    n.register("iDhb1", function (t, e) {
      var r = n("fOVm3"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.concat;
        return t === i || (t instanceof Array && e === i.concat) ? r : e;
      };
    }),
    n.register("fOVm3", function (t, e) {
      n("455kE");
      var r = n("vGGUj");
      t.exports = r("Array").concat;
    }),
    n.register("5nOH9", function (t, e) {
      t.exports = n("vjWLd");
    }),
    n.register("vjWLd", function (t, e) {
      var r = n("2MMWT");
      t.exports = r;
    }),
    n.register("2MMWT", function (t, e) {
      var r = n("bP7sT"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.reduce;
        return t === i || (t instanceof Array && e === i.reduce) ? r : e;
      };
    }),
    n.register("bP7sT", function (t, e) {
      n("1WS1x");
      var r = n("vGGUj");
      t.exports = r("Array").reduce;
    }),
    n.register("1WS1x", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("uZE7i").left,
        o = n("6D67v"),
        a = n("giErv"),
        s = n("2O8ex");
      r(
        { target: "Array", proto: !0, forced: !o("reduce") || (!s && a > 79 && a < 83) },
        {
          reduce: function (t) {
            return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    }),
    n.register("uZE7i", function (t, e) {
      var r = n("7Q6z8"),
        i = n("6SzFJ"),
        o = n("3gvVg"),
        a = n("dOY5U"),
        s = function (t) {
          return function (e, n, s, u) {
            r(n);
            var c = i(e),
              f = o(c),
              l = a(c.length),
              h = t ? l - 1 : 0,
              p = t ? -1 : 1;
            if (s < 2)
              for (;;) {
                if (h in f) {
                  (u = f[h]), (h += p);
                  break;
                }
                if (((h += p), t ? h < 0 : l <= h)) throw TypeError("Reduce of empty array with no initial value");
              }
            for (; t ? h >= 0 : l > h; h += p) h in f && (u = n(u, f[h], h, c));
            return u;
          };
        };
      t.exports = { left: s(!1), right: s(!0) };
    }),
    n.register("cCCvd", function (t, e) {
      t.exports = n("8V9fG");
    }),
    n.register("8V9fG", function (t, e) {
      var r = n("6oNRT");
      t.exports = r;
    }),
    n.register("6oNRT", function (t, e) {
      n("aU3hm");
      var r = n("k30YA");
      t.exports = r.Date.now;
    }),
    n.register("aU3hm", function (t, e) {
      n("hCzcd")(
        { target: "Date", stat: !0 },
        {
          now: function () {
            return new Date().getTime();
          }
        }
      );
    }),
    n.register("3p2vv", function (t, e) {
      t.exports = n("gDm6M");
    }),
    n.register("gDm6M", function (t, e) {
      var r = n("8sPDu");
      t.exports = r;
    }),
    n.register("8sPDu", function (t, e) {
      var r = n("9icmq"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.every;
        return t === i || (t instanceof Array && e === i.every) ? r : e;
      };
    }),
    n.register("9icmq", function (t, e) {
      n("ak1yK");
      var r = n("vGGUj");
      t.exports = r("Array").every;
    }),
    n.register("ak1yK", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("2EpMM").every;
      r(
        { target: "Array", proto: !0, forced: !n("6D67v")("every") },
        {
          every: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    }),
    n.register("eAZcX", function (t, e) {
      t.exports = n("4PI7C");
    }),
    n.register("4PI7C", function (t, e) {
      var r = n("eDhW6");
      t.exports = r;
    }),
    n.register("iTfeJ", function (t, e) {
      t.exports = n("1QZYU");
    }),
    n.register("1QZYU", function (t, e) {
      var r = n("12Y3F");
      t.exports = r;
    }),
    n.register("12Y3F", function (t, e) {
      var r = n("jXeKz"),
        i = Function.prototype;
      t.exports = function (t) {
        var e = t.bind;
        return t === i || (t instanceof Function && e === i.bind) ? r : e;
      };
    }),
    n.register("jXeKz", function (t, e) {
      n("qHr7U");
      var r = n("vGGUj");
      t.exports = r("Function").bind;
    }),
    n.register("qHr7U", function (t, e) {
      n("hCzcd")({ target: "Function", proto: !0 }, { bind: n("aHJKr") });
    }),
    n.register("aHJKr", function (t, e) {
      "use strict";
      var r = n("7Q6z8"),
        i = n("4iMo0"),
        o = [].slice,
        a = {};
      t.exports =
        Function.bind ||
        function (t) {
          var e = r(this),
            n = o.call(arguments, 1),
            s = function () {
              var r = n.concat(o.call(arguments));
              return this instanceof s
                ? (function (t, e, r) {
                    if (!(e in a)) {
                      for (var n = [], i = 0; i < e; i++) n[i] = "a[" + i + "]";
                      a[e] = Function("C,a", "return new C(" + n.join(",") + ")");
                    }
                    return a[e](t, r);
                  })(e, r.length, r)
                : e.apply(t, r);
            };
          return i(e.prototype) && (s.prototype = e.prototype), s;
        };
    }),
    n.register("dpUpM", function (t, e) {
      for (
        var i = n("e8mdx"),
          o = "undefined" == typeof window ? r : window,
          a = ["moz", "webkit"],
          s = "AnimationFrame",
          u = o["request" + s],
          c = o["cancel" + s] || o["cancelRequest" + s],
          f = 0;
        !u && f < a.length;
        f++
      )
        (u = o[a[f] + "Request" + s]), (c = o[a[f] + "Cancel" + s] || o[a[f] + "CancelRequest" + s]);
      if (!u || !c) {
        var l = 0,
          h = 0,
          p = [];
        (u = function (t) {
          if (0 === p.length) {
            var e = i(),
              r = Math.max(0, 16.666666666666668 - (e - l));
            (l = r + e),
              setTimeout(function () {
                var t = p.slice(0);
                p.length = 0;
                for (var e = 0; e < t.length; e++)
                  if (!t[e].cancelled)
                    try {
                      t[e].callback(l);
                    } catch (t) {
                      setTimeout(function () {
                        throw t;
                      }, 0);
                    }
              }, Math.round(r));
          }
          return p.push({ handle: ++h, callback: t, cancelled: !1 }), h;
        }),
          (c = function (t) {
            for (var e = 0; e < p.length; e++) p[e].handle === t && (p[e].cancelled = !0);
          });
      }
      (t.exports = function (t) {
        return u.call(o, t);
      }),
        (t.exports.cancel = function () {
          c.apply(o, arguments);
        }),
        (t.exports.polyfill = function (t) {
          t || (t = o), (t.requestAnimationFrame = u), (t.cancelAnimationFrame = c);
        });
    }),
    n.register("e8mdx", function (t, e) {
      var r = n("jhCkN");
      (function () {
        var e, n, i, o, a, s;
        "undefined" != typeof performance && null !== performance && performance.now
          ? (t.exports = function () {
              return performance.now();
            })
          : null != r && r.hrtime
          ? ((t.exports = function () {
              return (e() - a) / 1e6;
            }),
            (n = r.hrtime),
            (o = (e = function () {
              var t;
              return 1e9 * (t = n())[0] + t[1];
            })()),
            (s = 1e9 * r.uptime()),
            (a = o - s))
          : Date.now
          ? ((t.exports = function () {
              return Date.now() - i;
            }),
            (i = Date.now()))
          : ((t.exports = function () {
              return new Date().getTime() - i;
            }),
            (i = new Date().getTime()));
      }).call(t.exports);
    }),
    n.register("5KPKC", function (t, e) {
      t.exports = n("gmk8P");
    }),
    n.register("gmk8P", function (t, e) {
      var r = n("I04dH");
      t.exports = r;
    }),
    n.register("I04dH", function (t, e) {
      var r = n("eLRTx"),
        i = String.prototype;
      t.exports = function (t) {
        var e = t.trim;
        return "string" == typeof t || t === i || (t instanceof String && e === i.trim) ? r : e;
      };
    }),
    n.register("eLRTx", function (t, e) {
      n("bnl7D");
      var r = n("vGGUj");
      t.exports = r("String").trim;
    }),
    n.register("bnl7D", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("lIp87").trim;
      r(
        { target: "String", proto: !0, forced: n("dDAvl")("trim") },
        {
          trim: function () {
            return i(this);
          }
        }
      );
    }),
    n.register("dDAvl", function (t, e) {
      var r = n("2pV9O"),
        i = n("54wBr");
      t.exports = function (t) {
        return r(function () {
          return !!i[t]() || "​᠎" != "​᠎"[t]() || i[t].name !== t;
        });
      };
    }),
    n.register("lFgSU", function (t, e) {
      t.exports = function (t) {
        (this.ok = !1), (this.alpha = 1), "#" == t.charAt(0) && (t = t.substr(1, 6)), (t = (t = t.replace(/ /g, "")).toLowerCase());
        var e = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "00ffff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000000",
          blanchedalmond: "ffebcd",
          blue: "0000ff",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "00ffff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dodgerblue: "1e90ff",
          feldspar: "d19275",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "ff00ff",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgrey: "d3d3d3",
          lightgreen: "90ee90",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslateblue: "8470ff",
          lightslategray: "778899",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "00ff00",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "ff00ff",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370d8",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "d87093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "ff0000",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          violetred: "d02090",
          wheat: "f5deb3",
          white: "ffffff",
          whitesmoke: "f5f5f5",
          yellow: "ffff00",
          yellowgreen: "9acd32"
        };
        t = e[t] || t;
        for (
          var r = [
              {
                re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
                example: ["rgba(123, 234, 45, 0.8)", "rgba(255,234,245,1.0)"],
                process: function (t) {
                  return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3]), parseFloat(t[4])];
                }
              },
              {
                re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
                example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
                process: function (t) {
                  return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])];
                }
              },
              {
                re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                example: ["#00ff00", "336699"],
                process: function (t) {
                  return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
                }
              },
              {
                re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                example: ["#fb0", "f0f"],
                process: function (t) {
                  return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
                }
              }
            ],
            n = 0;
          n < r.length;
          n++
        ) {
          var i = r[n].re,
            o = r[n].process,
            a = i.exec(t);
          if (a) {
            var s = o(a);
            (this.r = s[0]), (this.g = s[1]), (this.b = s[2]), s.length > 3 && (this.alpha = s[3]), (this.ok = !0);
          }
        }
        (this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r),
          (this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g),
          (this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b),
          (this.alpha = this.alpha < 0 ? 0 : this.alpha > 1 || isNaN(this.alpha) ? 1 : this.alpha),
          (this.toRGB = function () {
            return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
          }),
          (this.toRGBA = function () {
            return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.alpha + ")";
          }),
          (this.toHex = function () {
            var t = this.r.toString(16),
              e = this.g.toString(16),
              r = this.b.toString(16);
            return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == r.length && (r = "0" + r), "#" + t + e + r;
          }),
          (this.getHelpXML = function () {
            for (var t = new Array(), n = 0; n < r.length; n++) for (var i = r[n].example, o = 0; o < i.length; o++) t[t.length] = i[o];
            for (var a in e) t[t.length] = a;
            var s = document.createElement("ul");
            s.setAttribute("id", "rgbcolor-examples");
            for (n = 0; n < t.length; n++)
              try {
                var u = document.createElement("li"),
                  c = new RGBColor(t[n]),
                  f = document.createElement("div");
                (f.style.cssText = "margin: 3px; border: 1px solid black; background:" + c.toHex() + "; color:" + c.toHex()),
                  f.appendChild(document.createTextNode("test"));
                var l = document.createTextNode(" " + t[n] + " -> " + c.toRGB() + " -> " + c.toHex());
                u.appendChild(f), u.appendChild(l), s.appendChild(u);
              } catch (t) {}
            return s;
          });
      };
    }),
    n.register("2yYCs", function (t, e) {
      t.exports = n("bgZFp");
    }),
    n.register("bgZFp", function (t, e) {
      var r = n("6cUCu");
      t.exports = r;
    }),
    n.register("6cUCu", function (t, e) {
      n("hB8J7");
      var r = n("k30YA");
      t.exports = r.Reflect.construct;
    }),
    n.register("hB8J7", function (t, e) {
      var r = n("hCzcd"),
        i = n("1vWf3"),
        o = n("7Q6z8"),
        a = n("lnVro"),
        s = n("4iMo0"),
        u = n("8kl3S"),
        c = n("aHJKr"),
        f = n("2pV9O"),
        l = i("Reflect", "construct"),
        h = f(function () {
          function t() {}
          return !(l(function () {}, [], t) instanceof t);
        }),
        p = !f(function () {
          l(function () {});
        }),
        v = h || p;
      r(
        { target: "Reflect", stat: !0, forced: v, sham: v },
        {
          construct: function (t, e) {
            o(t), a(e);
            var r = arguments.length < 3 ? t : o(arguments[2]);
            if (p && !h) return l(t, e, r);
            if (t == r) {
              switch (e.length) {
                case 0:
                  return new t();
                case 1:
                  return new t(e[0]);
                case 2:
                  return new t(e[0], e[1]);
                case 3:
                  return new t(e[0], e[1], e[2]);
                case 4:
                  return new t(e[0], e[1], e[2], e[3]);
              }
              var n = [null];
              return n.push.apply(n, e), new (c.apply(t, n))();
            }
            var i = r.prototype,
              f = u(s(i) ? i : Object.prototype),
              v = Function.apply.call(t, f, e);
            return s(v) ? v : f;
          }
        }
      );
    }),
    n.register("1KnN5", function (t, e) {
      var r = n("8S7Hq"),
        i = n("kw5He");
      (t.exports = function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        (t.prototype = r(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), e && i(t, e);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("8S7Hq", function (t, e) {
      t.exports = n("ea6jR");
    }),
    n.register("ea6jR", function (t, e) {
      var r = n("1Lwwb");
      t.exports = r;
    }),
    n.register("1Lwwb", function (t, e) {
      n("j4ROw");
      var r = n("k30YA").Object;
      t.exports = function (t, e) {
        return r.create(t, e);
      };
    }),
    n.register("j4ROw", function (t, e) {
      n("hCzcd")({ target: "Object", stat: !0, sham: !n("fZXRi") }, { create: n("8kl3S") });
    }),
    n.register("kw5He", function (t, e) {
      var r = n("dH08p");
      function i(e, n) {
        return (
          (t.exports = i =
            r ||
            function (t, e) {
              return (t.__proto__ = e), t;
            }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          i(e, n)
        );
      }
      (t.exports = i), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    }),
    n.register("dH08p", function (t, e) {
      t.exports = n("7ROgG");
    }),
    n.register("7ROgG", function (t, e) {
      var r = n("qwO1N");
      t.exports = r;
    }),
    n.register("qwO1N", function (t, e) {
      n("5ySPE");
      var r = n("k30YA");
      t.exports = r.Object.setPrototypeOf;
    }),
    n.register("5ySPE", function (t, e) {
      n("hCzcd")({ target: "Object", stat: !0 }, { setPrototypeOf: n("dgJPD") });
    }),
    n.register("9uaPw", function (t, e) {
      var r = n("62W5i").default,
        i = n("dhOrS");
      (t.exports = function (t, e) {
        return !e || ("object" !== r(e) && "function" != typeof e) ? i(t) : e;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("62W5i", function (t, e) {
      var r = n("czrgR"),
        i = n("75Fit");
      function o(e) {
        return (
          "function" == typeof r && "symbol" == typeof i
            ? ((t.exports = o =
                function (t) {
                  return typeof t;
                }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0))
            : ((t.exports = o =
                function (t) {
                  return t && "function" == typeof r && t.constructor === r && t !== r.prototype ? "symbol" : typeof t;
                }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          o(e)
        );
      }
      (t.exports = o), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    }),
    n.register("75Fit", function (t, e) {
      t.exports = n("jIVqK");
    }),
    n.register("jIVqK", function (t, e) {
      var r = n("e4OfL");
      t.exports = r;
    }),
    n.register("e4OfL", function (t, e) {
      n("jZ7Zk"), n("28Myb"), n("ky8US");
      var r = n("hgEw4");
      t.exports = r.f("iterator");
    }),
    n.register("dhOrS", function (t, e) {
      (t.exports = function (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("b99BU", function (t, e) {
      var r = n("dH08p"),
        i = n("dVYiL");
      function o(e) {
        return (
          (t.exports = o =
            r
              ? i
              : function (t) {
                  return t.__proto__ || i(t);
                }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0),
          o(e)
        );
      }
      (t.exports = o), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    }),
    n.register("dVYiL", function (t, e) {
      t.exports = n("ceD57");
    }),
    n.register("ceD57", function (t, e) {
      var r = n("2wCfO");
      t.exports = r;
    }),
    n.register("2wCfO", function (t, e) {
      n("a374d");
      var r = n("k30YA");
      t.exports = r.Object.getPrototypeOf;
    }),
    n.register("a374d", function (t, e) {
      var r = n("hCzcd"),
        i = n("2pV9O"),
        o = n("6SzFJ"),
        a = n("gOmim"),
        s = n("kujYL");
      r(
        {
          target: "Object",
          stat: !0,
          forced: i(function () {
            a(1);
          }),
          sham: !s
        },
        {
          getPrototypeOf: function (t) {
            return a(o(t));
          }
        }
      );
    }),
    n.register("iyzhb", function (t, e) {
      var r = n("aJLHh"),
        i = n("aK0xz"),
        o = n("kdzEb"),
        a = n("9uKOc");
      (t.exports = function (t) {
        return r(t) || i(t) || o(t) || a();
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("aJLHh", function (t, e) {
      var r = n("9OjTt"),
        i = n("7B6Ga");
      (t.exports = function (t) {
        if (r(t)) return i(t);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("aK0xz", function (t, e) {
      var r = n("czrgR"),
        i = n("FvYfz"),
        o = n("aCJrA");
      (t.exports = function (t) {
        if (void 0 !== r && i(Object(t))) return o(t);
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("9uKOc", function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("5XJuU", function (t, e) {
      t.exports = n("j4V80");
    }),
    n.register("j4V80", function (t, e) {
      var r = n("4FL6q");
      t.exports = r;
    }),
    n.register("4FL6q", function (t, e) {
      var r = n("3Z7TE"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.some;
        return t === i || (t instanceof Array && e === i.some) ? r : e;
      };
    }),
    n.register("3Z7TE", function (t, e) {
      n("5u4hg");
      var r = n("vGGUj");
      t.exports = r("Array").some;
    }),
    n.register("5u4hg", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("2EpMM").some;
      r(
        { target: "Array", proto: !0, forced: !n("6D67v")("some") },
        {
          some: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    }),
    n.register("48i9x", function (t, e) {
      t.exports = n("3VSsZ");
    }),
    n.register("3VSsZ", function (t, e) {
      var r = n("aiEHO");
      t.exports = r;
    }),
    n.register("aiEHO", function (t, e) {
      var r = n("8BAVB"),
        i = n("a8flH"),
        o = Array.prototype,
        a = String.prototype;
      t.exports = function (t) {
        var e = t.includes;
        return t === o || (t instanceof Array && e === o.includes)
          ? r
          : "string" == typeof t || t === a || (t instanceof String && e === a.includes)
          ? i
          : e;
      };
    }),
    n.register("8BAVB", function (t, e) {
      n("9sk1T");
      var r = n("vGGUj");
      t.exports = r("Array").includes;
    }),
    n.register("9sk1T", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("k4So3").includes,
        o = n("1ieRV");
      r(
        { target: "Array", proto: !0 },
        {
          includes: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      ),
        o("includes");
    }),
    n.register("a8flH", function (t, e) {
      n("hPN0d");
      var r = n("vGGUj");
      t.exports = r("String").includes;
    }),
    n.register("hPN0d", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("5rbg5"),
        o = n("afG1u");
      r(
        { target: "String", proto: !0, forced: !n("j3XkH")("includes") },
        {
          includes: function (t) {
            return !!~String(o(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    }),
    n.register("loN9A", function (t, e) {
      t.exports = n("5oeFn");
    }),
    n.register("5oeFn", function (t, e) {
      var r = n("qYgx5");
      t.exports = r;
    }),
    n.register("iGHXC", function (t, e) {
      t.exports = n("jVqIf");
    }),
    n.register("jVqIf", function (t, e) {
      var r = n("gBUMm");
      t.exports = r;
    }),
    n.register("gBUMm", function (t, e) {
      var r = n("9xOvP"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.reverse;
        return t === i || (t instanceof Array && e === i.reverse) ? r : e;
      };
    }),
    n.register("9xOvP", function (t, e) {
      n("2p2bk");
      var r = n("vGGUj");
      t.exports = r("Array").reverse;
    }),
    n.register("2p2bk", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("50UiZ"),
        o = [].reverse,
        a = [1, 2];
      r(
        { target: "Array", proto: !0, forced: String(a) === String(a.reverse()) },
        {
          reverse: function () {
            return i(this) && (this.length = this.length), o.call(this);
          }
        }
      );
    }),
    n.register("4MhPS", function (t, e) {
      t.exports = n("1x9Mw");
    }),
    n.register("1x9Mw", function (t, e) {
      var r = n("53hRf");
      t.exports = r;
    }),
    n.register("53hRf", function (t, e) {
      var r = n("4RCR7"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.indexOf;
        return t === i || (t instanceof Array && e === i.indexOf) ? r : e;
      };
    }),
    n.register("4RCR7", function (t, e) {
      n("2qmQ7");
      var r = n("vGGUj");
      t.exports = r("Array").indexOf;
    }),
    n.register("2qmQ7", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("k4So3").indexOf,
        o = n("6D67v"),
        a = [].indexOf,
        s = !!a && 1 / [1].indexOf(1, -0) < 0,
        u = o("indexOf");
      r(
        { target: "Array", proto: !0, forced: s || !u },
        {
          indexOf: function (t) {
            return s ? a.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0);
          }
        }
      );
    }),
    n.register("9zKBL", function (t, e) {
      var r = n("iOPHn"),
        i = n("fZFSs"),
        o = n("kYDZV");
      function a(e, n, s) {
        return (
          "undefined" != typeof Reflect && r
            ? ((t.exports = a = r), (t.exports.default = t.exports), (t.exports.__esModule = !0))
            : ((t.exports = a =
                function (t, e, r) {
                  var n = o(t, e);
                  if (n) {
                    var a = i(n, e);
                    return a.get ? a.get.call(r) : a.value;
                  }
                }),
              (t.exports.default = t.exports),
              (t.exports.__esModule = !0)),
          a(e, n, s || e)
        );
      }
      (t.exports = a), (t.exports.default = t.exports), (t.exports.__esModule = !0);
    }),
    n.register("iOPHn", function (t, e) {
      t.exports = n("kW0PP");
    }),
    n.register("kW0PP", function (t, e) {
      var r = n("gWLfN");
      t.exports = r;
    }),
    n.register("gWLfN", function (t, e) {
      n("3auwY");
      var r = n("k30YA");
      t.exports = r.Reflect.get;
    }),
    n.register("3auwY", function (t, e) {
      var r = n("hCzcd"),
        i = n("4iMo0"),
        o = n("lnVro"),
        a = n("aOL02"),
        s = n("8oJBm"),
        u = n("gOmim");
      r(
        { target: "Reflect", stat: !0 },
        {
          get: function t(e, r) {
            var n,
              c,
              f = arguments.length < 3 ? e : arguments[2];
            return o(e) === f
              ? e[r]
              : (n = s.f(e, r))
              ? a(n, "value")
                ? n.value
                : void 0 === n.get
                ? void 0
                : n.get.call(f)
              : i((c = u(e)))
              ? t(c, r, f)
              : void 0;
          }
        }
      );
    }),
    n.register("fZFSs", function (t, e) {
      t.exports = n("l9wzC");
    }),
    n.register("l9wzC", function (t, e) {
      var r = n("gLnZS");
      t.exports = r;
    }),
    n.register("kYDZV", function (t, e) {
      var r = n("b99BU");
      (t.exports = function (t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)); );
        return t;
      }),
        (t.exports.default = t.exports),
        (t.exports.__esModule = !0);
    }),
    n.register("9djzX", function (t, e) {
      t.exports = n("kaxfr");
    }),
    n.register("kaxfr", function (t, e) {
      var r = n("9Ystp");
      t.exports = r;
    }),
    n.register("9Ystp", function (t, e) {
      var r = n("lbDmu"),
        i = Array.prototype;
      t.exports = function (t) {
        var e = t.fill;
        return t === i || (t instanceof Array && e === i.fill) ? r : e;
      };
    }),
    n.register("lbDmu", function (t, e) {
      n("78AHP");
      var r = n("vGGUj");
      t.exports = r("Array").fill;
    }),
    n.register("78AHP", function (t, e) {
      var r = n("hCzcd"),
        i = n("jdA3E"),
        o = n("1ieRV");
      r({ target: "Array", proto: !0 }, { fill: i }), o("fill");
    }),
    n.register("jdA3E", function (t, e) {
      "use strict";
      var r = n("6SzFJ"),
        i = n("4Ulxs"),
        o = n("dOY5U");
      t.exports = function (t) {
        for (
          var e = r(this),
            n = o(e.length),
            a = arguments.length,
            s = i(a > 1 ? arguments[1] : void 0, n),
            u = a > 2 ? arguments[2] : void 0,
            c = void 0 === u ? n : i(u, n);
          c > s;

        )
          e[s++] = t;
        return e;
      };
    }),
    n.register("aXSjM", function (t, r) {
      e(t.exports, "SVGPathData", () => w);
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var n = function (t, e) {
        return (n =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          })(t, e);
      };
      function i(t, e) {
        function r() {
          this.constructor = t;
        }
        n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
      }
      function o(t, e) {
        var r = t[0],
          n = t[1];
        return [r * Math.cos(e) - n * Math.sin(e), r * Math.sin(e) + n * Math.cos(e)];
      }
      function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var r = 0; r < t.length; r++)
          if ("number" != typeof t[r])
            throw new Error("assertNumbers arguments[" + r + "] is not a number. " + typeof t[r] + " == typeof " + t[r]);
        return !0;
      }
      var s = Math.PI;
      function u(t, e, r) {
        (t.lArcFlag = 0 === t.lArcFlag ? 0 : 1), (t.sweepFlag = 0 === t.sweepFlag ? 0 : 1);
        var n = t.rX,
          i = t.rY,
          a = t.x,
          u = t.y;
        (n = Math.abs(t.rX)), (i = Math.abs(t.rY));
        var c = o([(e - a) / 2, (r - u) / 2], (-t.xRot / 180) * s),
          f = c[0],
          l = c[1],
          h = Math.pow(f, 2) / Math.pow(n, 2) + Math.pow(l, 2) / Math.pow(i, 2);
        1 < h && ((n *= Math.sqrt(h)), (i *= Math.sqrt(h))), (t.rX = n), (t.rY = i);
        var p = Math.pow(n, 2) * Math.pow(l, 2) + Math.pow(i, 2) * Math.pow(f, 2),
          v = (t.lArcFlag !== t.sweepFlag ? 1 : -1) * Math.sqrt(Math.max(0, (Math.pow(n, 2) * Math.pow(i, 2) - p) / p)),
          g = ((n * l) / i) * v,
          y = ((-i * f) / n) * v,
          d = o([g, y], (t.xRot / 180) * s);
        (t.cX = d[0] + (e + a) / 2),
          (t.cY = d[1] + (r + u) / 2),
          (t.phi1 = Math.atan2((l - y) / i, (f - g) / n)),
          (t.phi2 = Math.atan2((-l - y) / i, (-f - g) / n)),
          0 === t.sweepFlag && t.phi2 > t.phi1 && (t.phi2 -= 2 * s),
          1 === t.sweepFlag && t.phi2 < t.phi1 && (t.phi2 += 2 * s),
          (t.phi1 *= 180 / s),
          (t.phi2 *= 180 / s);
      }
      function c(t, e, r) {
        a(t, e, r);
        var n = t * t + e * e - r * r;
        if (0 > n) return [];
        if (0 === n) return [[(t * r) / (t * t + e * e), (e * r) / (t * t + e * e)]];
        var i = Math.sqrt(n);
        return [
          [(t * r + e * i) / (t * t + e * e), (e * r - t * i) / (t * t + e * e)],
          [(t * r - e * i) / (t * t + e * e), (e * r + t * i) / (t * t + e * e)]
        ];
      }
      var f,
        l = Math.PI / 180;
      function h(t, e, r) {
        return (1 - r) * t + r * e;
      }
      function p(t, e, r, n) {
        return t + Math.cos((n / 180) * s) * e + Math.sin((n / 180) * s) * r;
      }
      function v(t, e, r, n) {
        var i = e - t,
          o = r - e,
          a = 3 * i + 3 * (n - r) - 6 * o,
          s = 6 * (o - i),
          u = 3 * i;
        return Math.abs(a) < 1e-6
          ? [-u / s]
          : (function (t, e, r) {
              void 0 === r && (r = 1e-6);
              var n = (t * t) / 4 - e;
              if (n < -r) return [];
              if (n <= r) return [-t / 2];
              var i = Math.sqrt(n);
              return [-t / 2 - i, -t / 2 + i];
            })(s / a, u / a, 1e-6);
      }
      function g(t, e, r, n, i) {
        var o = 1 - i;
        return t * (o * o * o) + e * (3 * o * o * i) + r * (3 * o * i * i) + n * (i * i * i);
      }
      !(function (t) {
        function e() {
          return i(function (t, e, r) {
            return (
              t.relative &&
                (void 0 !== t.x1 && (t.x1 += e),
                void 0 !== t.y1 && (t.y1 += r),
                void 0 !== t.x2 && (t.x2 += e),
                void 0 !== t.y2 && (t.y2 += r),
                void 0 !== t.x && (t.x += e),
                void 0 !== t.y && (t.y += r),
                (t.relative = !1)),
              t
            );
          });
        }
        function r() {
          var t = NaN,
            e = NaN,
            r = NaN,
            n = NaN;
          return i(function (i, o, a) {
            return (
              i.type & w.SMOOTH_CURVE_TO &&
                ((i.type = w.CURVE_TO),
                (t = isNaN(t) ? o : t),
                (e = isNaN(e) ? a : e),
                (i.x1 = i.relative ? o - t : 2 * o - t),
                (i.y1 = i.relative ? a - e : 2 * a - e)),
              i.type & w.CURVE_TO ? ((t = i.relative ? o + i.x2 : i.x2), (e = i.relative ? a + i.y2 : i.y2)) : ((t = NaN), (e = NaN)),
              i.type & w.SMOOTH_QUAD_TO &&
                ((i.type = w.QUAD_TO),
                (r = isNaN(r) ? o : r),
                (n = isNaN(n) ? a : n),
                (i.x1 = i.relative ? o - r : 2 * o - r),
                (i.y1 = i.relative ? a - n : 2 * a - n)),
              i.type & w.QUAD_TO ? ((r = i.relative ? o + i.x1 : i.x1), (n = i.relative ? a + i.y1 : i.y1)) : ((r = NaN), (n = NaN)),
              i
            );
          });
        }
        function n() {
          var t = NaN,
            e = NaN;
          return i(function (r, n, i) {
            if (
              (r.type & w.SMOOTH_QUAD_TO &&
                ((r.type = w.QUAD_TO),
                (t = isNaN(t) ? n : t),
                (e = isNaN(e) ? i : e),
                (r.x1 = r.relative ? n - t : 2 * n - t),
                (r.y1 = r.relative ? i - e : 2 * i - e)),
              r.type & w.QUAD_TO)
            ) {
              (t = r.relative ? n + r.x1 : r.x1), (e = r.relative ? i + r.y1 : r.y1);
              var o = r.x1,
                a = r.y1;
              (r.type = w.CURVE_TO),
                (r.x1 = ((r.relative ? 0 : n) + 2 * o) / 3),
                (r.y1 = ((r.relative ? 0 : i) + 2 * a) / 3),
                (r.x2 = (r.x + 2 * o) / 3),
                (r.y2 = (r.y + 2 * a) / 3);
            } else (t = NaN), (e = NaN);
            return r;
          });
        }
        function i(t) {
          var e = 0,
            r = 0,
            n = NaN,
            i = NaN;
          return function (o) {
            if (isNaN(n) && !(o.type & w.MOVE_TO)) throw new Error("path must start with moveto");
            var a = t(o, e, r, n, i);
            return (
              o.type & w.CLOSE_PATH && ((e = n), (r = i)),
              void 0 !== o.x && (e = o.relative ? e + o.x : o.x),
              void 0 !== o.y && (r = o.relative ? r + o.y : o.y),
              o.type & w.MOVE_TO && ((n = e), (i = r)),
              a
            );
          };
        }
        function s(t, e, r, n, o, s) {
          return (
            a(t, e, r, n, o, s),
            i(function (i, a, u, c) {
              var f = i.x1,
                l = i.x2,
                h = i.relative && !isNaN(c),
                p = void 0 !== i.x ? i.x : h ? 0 : a,
                v = void 0 !== i.y ? i.y : h ? 0 : u;
              function g(t) {
                return t * t;
              }
              i.type & w.HORIZ_LINE_TO && 0 !== e && ((i.type = w.LINE_TO), (i.y = i.relative ? 0 : u)),
                i.type & w.VERT_LINE_TO && 0 !== r && ((i.type = w.LINE_TO), (i.x = i.relative ? 0 : a)),
                void 0 !== i.x && (i.x = i.x * t + v * r + (h ? 0 : o)),
                void 0 !== i.y && (i.y = p * e + i.y * n + (h ? 0 : s)),
                void 0 !== i.x1 && (i.x1 = i.x1 * t + i.y1 * r + (h ? 0 : o)),
                void 0 !== i.y1 && (i.y1 = f * e + i.y1 * n + (h ? 0 : s)),
                void 0 !== i.x2 && (i.x2 = i.x2 * t + i.y2 * r + (h ? 0 : o)),
                void 0 !== i.y2 && (i.y2 = l * e + i.y2 * n + (h ? 0 : s));
              var y = t * n - e * r;
              if (void 0 !== i.xRot && (1 !== t || 0 !== e || 0 !== r || 1 !== n))
                if (0 === y) delete i.rX, delete i.rY, delete i.xRot, delete i.lArcFlag, delete i.sweepFlag, (i.type = w.LINE_TO);
                else {
                  var d = (i.xRot * Math.PI) / 180,
                    x = Math.sin(d),
                    m = Math.cos(d),
                    b = 1 / g(i.rX),
                    k = 1 / g(i.rY),
                    S = g(m) * b + g(x) * k,
                    A = 2 * x * m * (b - k),
                    O = g(x) * b + g(m) * k,
                    C = S * n * n - A * e * n + O * e * e,
                    T = A * (t * n + e * r) - 2 * (S * r * n + O * t * e),
                    P = S * r * r - A * t * r + O * t * t,
                    E = ((Math.atan2(T, C - P) + Math.PI) % Math.PI) / 2,
                    M = Math.sin(E),
                    N = Math.cos(E);
                  (i.rX = Math.abs(y) / Math.sqrt(C * g(N) + T * M * N + P * g(M))),
                    (i.rY = Math.abs(y) / Math.sqrt(C * g(M) - T * M * N + P * g(N))),
                    (i.xRot = (180 * E) / Math.PI);
                }
              return void 0 !== i.sweepFlag && 0 > y && (i.sweepFlag = +!i.sweepFlag), i;
            })
          );
        }
        (t.ROUND = function (t) {
          function e(e) {
            return Math.round(e * t) / t;
          }
          return (
            void 0 === t && (t = 1e13),
            a(t),
            function (t) {
              return (
                void 0 !== t.x1 && (t.x1 = e(t.x1)),
                void 0 !== t.y1 && (t.y1 = e(t.y1)),
                void 0 !== t.x2 && (t.x2 = e(t.x2)),
                void 0 !== t.y2 && (t.y2 = e(t.y2)),
                void 0 !== t.x && (t.x = e(t.x)),
                void 0 !== t.y && (t.y = e(t.y)),
                void 0 !== t.rX && (t.rX = e(t.rX)),
                void 0 !== t.rY && (t.rY = e(t.rY)),
                t
              );
            }
          );
        }),
          (t.TO_ABS = e),
          (t.TO_REL = function () {
            return i(function (t, e, r) {
              return (
                t.relative ||
                  (void 0 !== t.x1 && (t.x1 -= e),
                  void 0 !== t.y1 && (t.y1 -= r),
                  void 0 !== t.x2 && (t.x2 -= e),
                  void 0 !== t.y2 && (t.y2 -= r),
                  void 0 !== t.x && (t.x -= e),
                  void 0 !== t.y && (t.y -= r),
                  (t.relative = !0)),
                t
              );
            });
          }),
          (t.NORMALIZE_HVZ = function (t, e, r) {
            return (
              void 0 === t && (t = !0),
              void 0 === e && (e = !0),
              void 0 === r && (r = !0),
              i(function (n, i, o, a, s) {
                if (isNaN(a) && !(n.type & w.MOVE_TO)) throw new Error("path must start with moveto");
                return (
                  e && n.type & w.HORIZ_LINE_TO && ((n.type = w.LINE_TO), (n.y = n.relative ? 0 : o)),
                  r && n.type & w.VERT_LINE_TO && ((n.type = w.LINE_TO), (n.x = n.relative ? 0 : i)),
                  t && n.type & w.CLOSE_PATH && ((n.type = w.LINE_TO), (n.x = n.relative ? a - i : a), (n.y = n.relative ? s - o : s)),
                  n.type & w.ARC &&
                    (0 === n.rX || 0 === n.rY) &&
                    ((n.type = w.LINE_TO), delete n.rX, delete n.rY, delete n.xRot, delete n.lArcFlag, delete n.sweepFlag),
                  n
                );
              })
            );
          }),
          (t.NORMALIZE_ST = r),
          (t.QT_TO_C = n),
          (t.INFO = i),
          (t.SANITIZE = function (t) {
            void 0 === t && (t = 0), a(t);
            var e = NaN,
              r = NaN,
              n = NaN,
              o = NaN;
            return i(function (i, a, s, u, c) {
              var f = Math.abs,
                l = !1,
                h = 0,
                p = 0;
              if (
                (i.type & w.SMOOTH_CURVE_TO && ((h = isNaN(e) ? 0 : a - e), (p = isNaN(r) ? 0 : s - r)),
                i.type & (w.CURVE_TO | w.SMOOTH_CURVE_TO)
                  ? ((e = i.relative ? a + i.x2 : i.x2), (r = i.relative ? s + i.y2 : i.y2))
                  : ((e = NaN), (r = NaN)),
                i.type & w.SMOOTH_QUAD_TO
                  ? ((n = isNaN(n) ? a : 2 * a - n), (o = isNaN(o) ? s : 2 * s - o))
                  : i.type & w.QUAD_TO
                  ? ((n = i.relative ? a + i.x1 : i.x1), (o = i.relative ? s + i.y1 : i.y2))
                  : ((n = NaN), (o = NaN)),
                i.type & w.LINE_COMMANDS ||
                  (i.type & w.ARC && (0 === i.rX || 0 === i.rY || !i.lArcFlag)) ||
                  i.type & w.CURVE_TO ||
                  i.type & w.SMOOTH_CURVE_TO ||
                  i.type & w.QUAD_TO ||
                  i.type & w.SMOOTH_QUAD_TO)
              ) {
                var v = void 0 === i.x ? 0 : i.relative ? i.x : i.x - a,
                  g = void 0 === i.y ? 0 : i.relative ? i.y : i.y - s;
                (h = isNaN(n) ? (void 0 === i.x1 ? h : i.relative ? i.x : i.x1 - a) : n - a),
                  (p = isNaN(o) ? (void 0 === i.y1 ? p : i.relative ? i.y : i.y1 - s) : o - s);
                var y = void 0 === i.x2 ? 0 : i.relative ? i.x : i.x2 - a,
                  d = void 0 === i.y2 ? 0 : i.relative ? i.y : i.y2 - s;
                f(v) <= t && f(g) <= t && f(h) <= t && f(p) <= t && f(y) <= t && f(d) <= t && (l = !0);
              }
              return i.type & w.CLOSE_PATH && f(a - u) <= t && f(s - c) <= t && (l = !0), l ? [] : i;
            });
          }),
          (t.MATRIX = s),
          (t.ROTATE = function (t, e, r) {
            void 0 === e && (e = 0), void 0 === r && (r = 0), a(t, e, r);
            var n = Math.sin(t),
              i = Math.cos(t);
            return s(i, n, -n, i, e - e * i + r * n, r - e * n - r * i);
          }),
          (t.TRANSLATE = function (t, e) {
            return void 0 === e && (e = 0), a(t, e), s(1, 0, 0, 1, t, e);
          }),
          (t.SCALE = function (t, e) {
            return void 0 === e && (e = t), a(t, e), s(t, 0, 0, e, 0, 0);
          }),
          (t.SKEW_X = function (t) {
            return a(t), s(1, 0, Math.atan(t), 1, 0, 0);
          }),
          (t.SKEW_Y = function (t) {
            return a(t), s(1, Math.atan(t), 0, 1, 0, 0);
          }),
          (t.X_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), a(t), s(-1, 0, 0, 1, t, 0);
          }),
          (t.Y_AXIS_SYMMETRY = function (t) {
            return void 0 === t && (t = 0), a(t), s(1, 0, 0, -1, 0, t);
          }),
          (t.A_TO_C = function () {
            return i(function (t, e, r) {
              return w.ARC === t.type
                ? (function (t, e, r) {
                    var n, i, a, s;
                    t.cX || u(t, e, r);
                    for (
                      var c = Math.min(t.phi1, t.phi2),
                        f = Math.max(t.phi1, t.phi2) - c,
                        p = Math.ceil(f / 90),
                        v = new Array(p),
                        g = e,
                        y = r,
                        d = 0;
                      d < p;
                      d++
                    ) {
                      var x = h(t.phi1, t.phi2, d / p),
                        m = h(t.phi1, t.phi2, (d + 1) / p),
                        b = m - x,
                        k = (4 / 3) * Math.tan((b * l) / 4),
                        S = [Math.cos(x * l) - k * Math.sin(x * l), Math.sin(x * l) + k * Math.cos(x * l)],
                        A = S[0],
                        O = S[1],
                        C = [Math.cos(m * l), Math.sin(m * l)],
                        T = C[0],
                        P = C[1],
                        E = [T + k * Math.sin(m * l), P - k * Math.cos(m * l)],
                        M = E[0],
                        N = E[1];
                      v[d] = { relative: t.relative, type: w.CURVE_TO };
                      var R = function (e, r) {
                        var n = o([e * t.rX, r * t.rY], t.xRot),
                          i = n[0],
                          a = n[1];
                        return [t.cX + i, t.cY + a];
                      };
                      (n = R(A, O)),
                        (v[d].x1 = n[0]),
                        (v[d].y1 = n[1]),
                        (i = R(M, N)),
                        (v[d].x2 = i[0]),
                        (v[d].y2 = i[1]),
                        (a = R(T, P)),
                        (v[d].x = a[0]),
                        (v[d].y = a[1]),
                        t.relative && ((v[d].x1 -= g), (v[d].y1 -= y), (v[d].x2 -= g), (v[d].y2 -= y), (v[d].x -= g), (v[d].y -= y)),
                        (g = (s = [v[d].x, v[d].y])[0]),
                        (y = s[1]);
                    }
                    return v;
                  })(t, t.relative ? 0 : e, t.relative ? 0 : r)
                : t;
            });
          }),
          (t.ANNOTATE_ARCS = function () {
            return i(function (t, e, r) {
              return t.relative && ((e = 0), (r = 0)), w.ARC === t.type && u(t, e, r), t;
            });
          }),
          (t.CLONE = function () {
            return function (t) {
              var e = {};
              for (var r in t) e[r] = t[r];
              return e;
            };
          }),
          (t.CALCULATE_BOUNDS = function () {
            var t = e(),
              o = n(),
              a = r(),
              s = i(function (e, r, n) {
                var i = a(
                  o(
                    t(
                      (function (t) {
                        var e = {};
                        for (var r in t) e[r] = t[r];
                        return e;
                      })(e)
                    )
                  )
                );
                function f(t) {
                  t > s.maxX && (s.maxX = t), t < s.minX && (s.minX = t);
                }
                function l(t) {
                  t > s.maxY && (s.maxY = t), t < s.minY && (s.minY = t);
                }
                if (
                  (i.type & w.DRAWING_COMMANDS && (f(r), l(n)),
                  i.type & w.HORIZ_LINE_TO && f(i.x),
                  i.type & w.VERT_LINE_TO && l(i.y),
                  i.type & w.LINE_TO && (f(i.x), l(i.y)),
                  i.type & w.CURVE_TO)
                ) {
                  f(i.x), l(i.y);
                  for (var h = 0, y = v(r, i.x1, i.x2, i.x); h < y.length; h++) 0 < (V = y[h]) && 1 > V && f(g(r, i.x1, i.x2, i.x, V));
                  for (var d = 0, x = v(n, i.y1, i.y2, i.y); d < x.length; d++) 0 < (V = x[d]) && 1 > V && l(g(n, i.y1, i.y2, i.y, V));
                }
                if (i.type & w.ARC) {
                  f(i.x), l(i.y), u(i, r, n);
                  for (
                    var m = (i.xRot / 180) * Math.PI,
                      b = Math.cos(m) * i.rX,
                      k = Math.sin(m) * i.rX,
                      S = -Math.sin(m) * i.rY,
                      A = Math.cos(m) * i.rY,
                      O = i.phi1 < i.phi2 ? [i.phi1, i.phi2] : -180 > i.phi2 ? [i.phi2 + 360, i.phi1 + 360] : [i.phi2, i.phi1],
                      C = O[0],
                      T = O[1],
                      P = function (t) {
                        var e = t[0],
                          r = t[1],
                          n = (180 * Math.atan2(r, e)) / Math.PI;
                        return n < C ? n + 360 : n;
                      },
                      E = 0,
                      M = c(S, -b, 0).map(P);
                    E < M.length;
                    E++
                  )
                    (V = M[E]) > C && V < T && f(p(i.cX, b, S, V));
                  for (var N = 0, R = c(A, -k, 0).map(P); N < R.length; N++) {
                    var V;
                    (V = R[N]) > C && V < T && l(p(i.cY, k, A, V));
                  }
                }
                return e;
              });
            return (s.minX = 1 / 0), (s.maxX = -1 / 0), (s.minY = 1 / 0), (s.maxY = -1 / 0), s;
          });
      })(f || (f = {}));
      var y,
        d = (function () {
          function t() {}
          return (
            (t.prototype.round = function (t) {
              return this.transform(f.ROUND(t));
            }),
            (t.prototype.toAbs = function () {
              return this.transform(f.TO_ABS());
            }),
            (t.prototype.toRel = function () {
              return this.transform(f.TO_REL());
            }),
            (t.prototype.normalizeHVZ = function (t, e, r) {
              return this.transform(f.NORMALIZE_HVZ(t, e, r));
            }),
            (t.prototype.normalizeST = function () {
              return this.transform(f.NORMALIZE_ST());
            }),
            (t.prototype.qtToC = function () {
              return this.transform(f.QT_TO_C());
            }),
            (t.prototype.aToC = function () {
              return this.transform(f.A_TO_C());
            }),
            (t.prototype.sanitize = function (t) {
              return this.transform(f.SANITIZE(t));
            }),
            (t.prototype.translate = function (t, e) {
              return this.transform(f.TRANSLATE(t, e));
            }),
            (t.prototype.scale = function (t, e) {
              return this.transform(f.SCALE(t, e));
            }),
            (t.prototype.rotate = function (t, e, r) {
              return this.transform(f.ROTATE(t, e, r));
            }),
            (t.prototype.matrix = function (t, e, r, n, i, o) {
              return this.transform(f.MATRIX(t, e, r, n, i, o));
            }),
            (t.prototype.skewX = function (t) {
              return this.transform(f.SKEW_X(t));
            }),
            (t.prototype.skewY = function (t) {
              return this.transform(f.SKEW_Y(t));
            }),
            (t.prototype.xSymmetry = function (t) {
              return this.transform(f.X_AXIS_SYMMETRY(t));
            }),
            (t.prototype.ySymmetry = function (t) {
              return this.transform(f.Y_AXIS_SYMMETRY(t));
            }),
            (t.prototype.annotateArcs = function () {
              return this.transform(f.ANNOTATE_ARCS());
            }),
            t
          );
        })(),
        x = function (t) {
          return " " === t || "\t" === t || "\r" === t || "\n" === t;
        },
        m = function (t) {
          return "0".charCodeAt(0) <= t.charCodeAt(0) && t.charCodeAt(0) <= "9".charCodeAt(0);
        },
        b = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.curNumber = ""),
              (e.curCommandType = -1),
              (e.curCommandRelative = !1),
              (e.canParseCommandOrComma = !0),
              (e.curNumberHasExp = !1),
              (e.curNumberHasExpDigits = !1),
              (e.curNumberHasDecimal = !1),
              (e.curArgs = []),
              e
            );
          }
          return (
            i(e, t),
            (e.prototype.finish = function (t) {
              if ((void 0 === t && (t = []), this.parse(" ", t), 0 !== this.curArgs.length || !this.canParseCommandOrComma))
                throw new SyntaxError("Unterminated command at the path end.");
              return t;
            }),
            (e.prototype.parse = function (t, e) {
              var r = this;
              void 0 === e && (e = []);
              for (
                var n = function (t) {
                    e.push(t), (r.curArgs.length = 0), (r.canParseCommandOrComma = !0);
                  },
                  i = 0;
                i < t.length;
                i++
              ) {
                var o = t[i],
                  a = !(
                    this.curCommandType !== w.ARC ||
                    (3 !== this.curArgs.length && 4 !== this.curArgs.length) ||
                    1 !== this.curNumber.length ||
                    ("0" !== this.curNumber && "1" !== this.curNumber)
                  ),
                  s = m(o) && (("0" === this.curNumber && "0" === o) || a);
                if (!m(o) || s)
                  if ("e" !== o && "E" !== o)
                    if (("-" !== o && "+" !== o) || !this.curNumberHasExp || this.curNumberHasExpDigits)
                      if ("." !== o || this.curNumberHasExp || this.curNumberHasDecimal || a) {
                        if (this.curNumber && -1 !== this.curCommandType) {
                          var u = Number(this.curNumber);
                          if (isNaN(u)) throw new SyntaxError("Invalid number ending at " + i);
                          if (this.curCommandType === w.ARC)
                            if (0 === this.curArgs.length || 1 === this.curArgs.length) {
                              if (0 > u) throw new SyntaxError('Expected positive number, got "' + u + '" at index "' + i + '"');
                            } else if (
                              (3 === this.curArgs.length || 4 === this.curArgs.length) &&
                              "0" !== this.curNumber &&
                              "1" !== this.curNumber
                            )
                              throw new SyntaxError('Expected a flag, got "' + this.curNumber + '" at index "' + i + '"');
                          this.curArgs.push(u),
                            this.curArgs.length === k[this.curCommandType] &&
                              (w.HORIZ_LINE_TO === this.curCommandType
                                ? n({ type: w.HORIZ_LINE_TO, relative: this.curCommandRelative, x: u })
                                : w.VERT_LINE_TO === this.curCommandType
                                ? n({ type: w.VERT_LINE_TO, relative: this.curCommandRelative, y: u })
                                : this.curCommandType === w.MOVE_TO ||
                                  this.curCommandType === w.LINE_TO ||
                                  this.curCommandType === w.SMOOTH_QUAD_TO
                                ? (n({
                                    type: this.curCommandType,
                                    relative: this.curCommandRelative,
                                    x: this.curArgs[0],
                                    y: this.curArgs[1]
                                  }),
                                  w.MOVE_TO === this.curCommandType && (this.curCommandType = w.LINE_TO))
                                : this.curCommandType === w.CURVE_TO
                                ? n({
                                    type: w.CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x2: this.curArgs[2],
                                    y2: this.curArgs[3],
                                    x: this.curArgs[4],
                                    y: this.curArgs[5]
                                  })
                                : this.curCommandType === w.SMOOTH_CURVE_TO
                                ? n({
                                    type: w.SMOOTH_CURVE_TO,
                                    relative: this.curCommandRelative,
                                    x2: this.curArgs[0],
                                    y2: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3]
                                  })
                                : this.curCommandType === w.QUAD_TO
                                ? n({
                                    type: w.QUAD_TO,
                                    relative: this.curCommandRelative,
                                    x1: this.curArgs[0],
                                    y1: this.curArgs[1],
                                    x: this.curArgs[2],
                                    y: this.curArgs[3]
                                  })
                                : this.curCommandType === w.ARC &&
                                  n({
                                    type: w.ARC,
                                    relative: this.curCommandRelative,
                                    rX: this.curArgs[0],
                                    rY: this.curArgs[1],
                                    xRot: this.curArgs[2],
                                    lArcFlag: this.curArgs[3],
                                    sweepFlag: this.curArgs[4],
                                    x: this.curArgs[5],
                                    y: this.curArgs[6]
                                  })),
                            (this.curNumber = ""),
                            (this.curNumberHasExpDigits = !1),
                            (this.curNumberHasExp = !1),
                            (this.curNumberHasDecimal = !1),
                            (this.canParseCommandOrComma = !0);
                        }
                        if (!x(o))
                          if ("," === o && this.canParseCommandOrComma) this.canParseCommandOrComma = !1;
                          else if ("+" !== o && "-" !== o && "." !== o)
                            if (s) (this.curNumber = o), (this.curNumberHasDecimal = !1);
                            else {
                              if (0 !== this.curArgs.length) throw new SyntaxError("Unterminated command at index " + i + ".");
                              if (!this.canParseCommandOrComma)
                                throw new SyntaxError('Unexpected character "' + o + '" at index ' + i + ". Command cannot follow comma");
                              if (((this.canParseCommandOrComma = !1), "z" !== o && "Z" !== o))
                                if ("h" === o || "H" === o) (this.curCommandType = w.HORIZ_LINE_TO), (this.curCommandRelative = "h" === o);
                                else if ("v" === o || "V" === o)
                                  (this.curCommandType = w.VERT_LINE_TO), (this.curCommandRelative = "v" === o);
                                else if ("m" === o || "M" === o) (this.curCommandType = w.MOVE_TO), (this.curCommandRelative = "m" === o);
                                else if ("l" === o || "L" === o) (this.curCommandType = w.LINE_TO), (this.curCommandRelative = "l" === o);
                                else if ("c" === o || "C" === o) (this.curCommandType = w.CURVE_TO), (this.curCommandRelative = "c" === o);
                                else if ("s" === o || "S" === o)
                                  (this.curCommandType = w.SMOOTH_CURVE_TO), (this.curCommandRelative = "s" === o);
                                else if ("q" === o || "Q" === o) (this.curCommandType = w.QUAD_TO), (this.curCommandRelative = "q" === o);
                                else if ("t" === o || "T" === o)
                                  (this.curCommandType = w.SMOOTH_QUAD_TO), (this.curCommandRelative = "t" === o);
                                else {
                                  if ("a" !== o && "A" !== o) throw new SyntaxError('Unexpected character "' + o + '" at index ' + i + ".");
                                  (this.curCommandType = w.ARC), (this.curCommandRelative = "a" === o);
                                }
                              else e.push({ type: w.CLOSE_PATH }), (this.canParseCommandOrComma = !0), (this.curCommandType = -1);
                            }
                          else (this.curNumber = o), (this.curNumberHasDecimal = "." === o);
                      } else (this.curNumber += o), (this.curNumberHasDecimal = !0);
                    else this.curNumber += o;
                  else (this.curNumber += o), (this.curNumberHasExp = !0);
                else (this.curNumber += o), (this.curNumberHasExpDigits = this.curNumberHasExp);
              }
              return e;
            }),
            (e.prototype.transform = function (t) {
              return Object.create(this, {
                parse: {
                  value: function (e, r) {
                    void 0 === r && (r = []);
                    for (var n = 0, i = Object.getPrototypeOf(this).parse.call(this, e); n < i.length; n++) {
                      var o = i[n],
                        a = t(o);
                      Array.isArray(a) ? r.push.apply(r, a) : r.push(a);
                    }
                    return r;
                  }
                }
              });
            }),
            e
          );
        })(d),
        w = (function (t) {
          function e(r) {
            var n = t.call(this) || this;
            return (n.commands = "string" == typeof r ? e.parse(r) : r), n;
          }
          return (
            i(e, t),
            (e.prototype.encode = function () {
              return e.encode(this.commands);
            }),
            (e.prototype.getBounds = function () {
              var t = f.CALCULATE_BOUNDS();
              return this.transform(t), t;
            }),
            (e.prototype.transform = function (t) {
              for (var e = [], r = 0, n = this.commands; r < n.length; r++) {
                var i = t(n[r]);
                Array.isArray(i) ? e.push.apply(e, i) : e.push(i);
              }
              return (this.commands = e), this;
            }),
            (e.encode = function (t) {
              return (function (t) {
                var e = "";
                Array.isArray(t) || (t = [t]);
                for (var r = 0; r < t.length; r++) {
                  var n = t[r];
                  if (n.type === w.CLOSE_PATH) e += "z";
                  else if (n.type === w.HORIZ_LINE_TO) e += (n.relative ? "h" : "H") + n.x;
                  else if (n.type === w.VERT_LINE_TO) e += (n.relative ? "v" : "V") + n.y;
                  else if (n.type === w.MOVE_TO) e += (n.relative ? "m" : "M") + n.x + " " + n.y;
                  else if (n.type === w.LINE_TO) e += (n.relative ? "l" : "L") + n.x + " " + n.y;
                  else if (n.type === w.CURVE_TO)
                    e += (n.relative ? "c" : "C") + n.x1 + " " + n.y1 + " " + n.x2 + " " + n.y2 + " " + n.x + " " + n.y;
                  else if (n.type === w.SMOOTH_CURVE_TO) e += (n.relative ? "s" : "S") + n.x2 + " " + n.y2 + " " + n.x + " " + n.y;
                  else if (n.type === w.QUAD_TO) e += (n.relative ? "q" : "Q") + n.x1 + " " + n.y1 + " " + n.x + " " + n.y;
                  else if (n.type === w.SMOOTH_QUAD_TO) e += (n.relative ? "t" : "T") + n.x + " " + n.y;
                  else {
                    if (n.type !== w.ARC) throw new Error('Unexpected command type "' + n.type + '" at index ' + r + ".");
                    e +=
                      (n.relative ? "a" : "A") +
                      n.rX +
                      " " +
                      n.rY +
                      " " +
                      n.xRot +
                      " " +
                      +n.lArcFlag +
                      " " +
                      +n.sweepFlag +
                      " " +
                      n.x +
                      " " +
                      n.y;
                  }
                }
                return e;
              })(t);
            }),
            (e.parse = function (t) {
              var e = new b(),
                r = [];
              return e.parse(t, r), e.finish(r), r;
            }),
            (e.CLOSE_PATH = 1),
            (e.MOVE_TO = 2),
            (e.HORIZ_LINE_TO = 4),
            (e.VERT_LINE_TO = 8),
            (e.LINE_TO = 16),
            (e.CURVE_TO = 32),
            (e.SMOOTH_CURVE_TO = 64),
            (e.QUAD_TO = 128),
            (e.SMOOTH_QUAD_TO = 256),
            (e.ARC = 512),
            (e.LINE_COMMANDS = e.LINE_TO | e.HORIZ_LINE_TO | e.VERT_LINE_TO),
            (e.DRAWING_COMMANDS =
              e.HORIZ_LINE_TO | e.VERT_LINE_TO | e.LINE_TO | e.CURVE_TO | e.SMOOTH_CURVE_TO | e.QUAD_TO | e.SMOOTH_QUAD_TO | e.ARC),
            e
          );
        })(d),
        k =
          (((y = {})[w.MOVE_TO] = 2),
          (y[w.LINE_TO] = 2),
          (y[w.HORIZ_LINE_TO] = 1),
          (y[w.VERT_LINE_TO] = 1),
          (y[w.CLOSE_PATH] = 0),
          (y[w.QUAD_TO] = 4),
          (y[w.SMOOTH_QUAD_TO] = 2),
          (y[w.CURVE_TO] = 6),
          (y[w.SMOOTH_CURVE_TO] = 4),
          (y[w.ARC] = 7),
          y);
    }),
    n.register("eac5K", function (t, e) {
      t.exports = n("qOxuc");
    }),
    n.register("qOxuc", function (t, e) {
      var r = n("jR94o");
      t.exports = r;
    }),
    n.register("jR94o", function (t, e) {
      n("4xDrT");
      var r = n("k30YA");
      t.exports = r.Reflect.deleteProperty;
    }),
    n.register("4xDrT", function (t, e) {
      var r = n("hCzcd"),
        i = n("lnVro"),
        o = n("8oJBm").f;
      r(
        { target: "Reflect", stat: !0 },
        {
          deleteProperty: function (t, e) {
            var r = o(i(t), e);
            return !(r && !r.configurable) && delete t[e];
          }
        }
      );
    }),
    n.register("3TZae", function (t, e) {
      t.exports = n("bSX5N");
    }),
    n.register("bSX5N", function (t, e) {
      n("ky8US");
      var r = n("7WHTn"),
        i = n("grdQE"),
        o = Array.prototype,
        a = { DOMTokenList: !0, NodeList: !0 };
      t.exports = function (t) {
        var e = t.values;
        return t === o || (t instanceof Array && e === o.values) || a.hasOwnProperty(i(t)) ? r : e;
      };
    }),
    n.register("7WHTn", function (t, e) {
      var r = n("e74De");
      t.exports = r;
    }),
    n.register("e74De", function (t, e) {
      n("jDHi0");
      var r = n("vGGUj");
      t.exports = r("Array").values;
    }),
    n.register("7xaRw", function (t, e) {
      t.exports = n("dltVU");
    }),
    n.register("dltVU", function (t, e) {
      var r = n("1zrMk");
      t.exports = r;
    }),
    n.register("1zrMk", function (t, e) {
      n("fBlfL");
      var r = n("k30YA");
      t.exports = r.parseInt;
    }),
    n.register("fBlfL", function (t, e) {
      var r = n("hCzcd"),
        i = n("g0DUS");
      r({ global: !0, forced: parseInt != i }, { parseInt: i });
    }),
    n.register("g0DUS", function (t, e) {
      var r = n("hFqBl"),
        i = n("lIp87").trim,
        o = n("54wBr"),
        a = r.parseInt,
        s = /^[+-]?0[Xx]/,
        u = 8 !== a(o + "08") || 22 !== a(o + "0x16");
      t.exports = u
        ? function (t, e) {
            var r = i(String(t));
            return a(r, e >>> 0 || (s.test(r) ? 16 : 10));
          }
        : a;
    }),
    n.register("fbZ9B", function (t, e) {
      t.exports = n("kIfPA");
    }),
    n.register("kIfPA", function (t, e) {
      var r = n("YhFkO");
      t.exports = r;
    }),
    n.register("ajIk7", function (t, e) {
      t.exports = n("egvRe");
    }),
    n.register("egvRe", function (t, e) {
      n("ky8US"), n("28Myb");
      var r = n("hYFk0");
      t.exports = r;
    }),
    n.register("g3WrO", function (t, e) {
      t.exports = n("1YJLS");
    }),
    n.register("1YJLS", function (t, e) {
      var r = n("91K9T");
      t.exports = r;
    }),
    n.register("iBrAh", function (t, e) {
      t.exports = n("iepTk");
    }),
    n.register("iepTk", function (t, e) {
      var r = n("9vW1a");
      t.exports = r;
    }),
    n.register("ddgyR", function (t, e) {
      t.exports = n("4qiAl");
    }),
    n.register("4qiAl", function (t, e) {
      var r = n("2rhcE");
      t.exports = r;
    }),
    n.register("2rhcE", function (t, e) {
      n("fumL2"), n("97Mfv"), n("28Myb"), n("ky8US");
      var r = n("k30YA");
      t.exports = r.Map;
    }),
    n.register("fumL2", function (t, e) {
      "use strict";
      var r = n("7wkqC"),
        i = n("50wQ7");
      t.exports = r(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        i
      );
    }),
    n.register("7wkqC", function (t, e) {
      "use strict";
      var r = n("hCzcd"),
        i = n("hFqBl"),
        o = n("aYwXv"),
        a = n("2pV9O"),
        s = n("4kZLz"),
        u = n("8uz5e"),
        c = n("hJS6s"),
        f = n("4iMo0"),
        l = n("jvH8t"),
        h = n("2Yzf9").f,
        p = n("2EpMM").forEach,
        v = n("fZXRi"),
        g = n("7xaeC"),
        y = g.set,
        d = g.getterFor;
      t.exports = function (t, e, n) {
        var g,
          x = -1 !== t.indexOf("Map"),
          m = -1 !== t.indexOf("Weak"),
          b = x ? "set" : "add",
          w = i[t],
          k = w && w.prototype,
          S = {};
        if (
          v &&
          "function" == typeof w &&
          (m ||
            (k.forEach &&
              !a(function () {
                new w().entries().next();
              })))
        ) {
          g = e(function (e, r) {
            y(c(e, g, t), { type: t, collection: new w() }), null != r && u(r, e[b], { that: e, AS_ENTRIES: x });
          });
          var A = d(t);
          p(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function (t) {
            var e = "add" == t || "set" == t;
            !(t in k) ||
              (m && "clear" == t) ||
              s(g.prototype, t, function (r, n) {
                var i = A(this).collection;
                if (!e && m && !f(r)) return "get" == t && void 0;
                var o = i[t](0 === r ? 0 : r, n);
                return e ? this : o;
              });
          }),
            m ||
              h(g.prototype, "size", {
                configurable: !0,
                get: function () {
                  return A(this).collection.size;
                }
              });
        } else (g = n.getConstructor(e, t, x, b)), (o.REQUIRED = !0);
        return l(g, t, !1, !0), (S[t] = g), r({ global: !0, forced: !0 }, S), m || n.setStrong(g, t, x), g;
      };
    }),
    n.register("aYwXv", function (t, e) {
      var r = n("5yvvB"),
        i = n("4iMo0"),
        o = n("aOL02"),
        a = n("2Yzf9").f,
        s = n("cswZ8"),
        u = n("aTZqf"),
        c = s("meta"),
        f = 0,
        l =
          Object.isExtensible ||
          function () {
            return !0;
          },
        h = function (t) {
          a(t, c, { value: { objectID: "O" + ++f, weakData: {} } });
        },
        p = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
            if (!o(t, c)) {
              if (!l(t)) return "F";
              if (!e) return "E";
              h(t);
            }
            return t[c].objectID;
          },
          getWeakData: function (t, e) {
            if (!o(t, c)) {
              if (!l(t)) return !0;
              if (!e) return !1;
              h(t);
            }
            return t[c].weakData;
          },
          onFreeze: function (t) {
            return u && p.REQUIRED && l(t) && !o(t, c) && h(t), t;
          }
        });
      r[c] = !0;
    }),
    n.register("aTZqf", function (t, e) {
      var r = n("2pV9O");
      t.exports = !r(function () {
        return Object.isExtensible(Object.preventExtensions({}));
      });
    }),
    n.register("50wQ7", function (t, e) {
      "use strict";
      var r = n("2Yzf9").f,
        i = n("8kl3S"),
        o = n("jBsvY"),
        a = n("eqgON"),
        s = n("hJS6s"),
        u = n("8uz5e"),
        c = n("53hUC"),
        f = n("3S5gG"),
        l = n("fZXRi"),
        h = n("aYwXv").fastKey,
        p = n("7xaeC"),
        v = p.set,
        g = p.getterFor;
      t.exports = {
        getConstructor: function (t, e, n, c) {
          var f = t(function (t, r) {
              s(t, f, e),
                v(t, { type: e, index: i(null), first: void 0, last: void 0, size: 0 }),
                l || (t.size = 0),
                null != r && u(r, t[c], { that: t, AS_ENTRIES: n });
            }),
            p = g(e),
            y = function (t, e, r) {
              var n,
                i,
                o = p(t),
                a = d(t, e);
              return (
                a
                  ? (a.value = r)
                  : ((o.last = a = { index: (i = h(e, !0)), key: e, value: r, previous: (n = o.last), next: void 0, removed: !1 }),
                    o.first || (o.first = a),
                    n && (n.next = a),
                    l ? o.size++ : t.size++,
                    "F" !== i && (o.index[i] = a)),
                t
              );
            },
            d = function (t, e) {
              var r,
                n = p(t),
                i = h(e);
              if ("F" !== i) return n.index[i];
              for (r = n.first; r; r = r.next) if (r.key == e) return r;
            };
          return (
            o(f.prototype, {
              clear: function () {
                for (var t = p(this), e = t.index, r = t.first; r; )
                  (r.removed = !0), r.previous && (r.previous = r.previous.next = void 0), delete e[r.index], (r = r.next);
                (t.first = t.last = void 0), l ? (t.size = 0) : (this.size = 0);
              },
              delete: function (t) {
                var e = this,
                  r = p(e),
                  n = d(e, t);
                if (n) {
                  var i = n.next,
                    o = n.previous;
                  delete r.index[n.index],
                    (n.removed = !0),
                    o && (o.next = i),
                    i && (i.previous = o),
                    r.first == n && (r.first = i),
                    r.last == n && (r.last = o),
                    l ? r.size-- : e.size--;
                }
                return !!n;
              },
              forEach: function (t) {
                for (var e, r = p(this), n = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); (e = e ? e.next : r.first); )
                  for (n(e.value, e.key, this); e && e.removed; ) e = e.previous;
              },
              has: function (t) {
                return !!d(this, t);
              }
            }),
            o(
              f.prototype,
              n
                ? {
                    get: function (t) {
                      var e = d(this, t);
                      return e && e.value;
                    },
                    set: function (t, e) {
                      return y(this, 0 === t ? 0 : t, e);
                    }
                  }
                : {
                    add: function (t) {
                      return y(this, (t = 0 === t ? 0 : t), t);
                    }
                  }
            ),
            l &&
              r(f.prototype, "size", {
                get: function () {
                  return p(this).size;
                }
              }),
            f
          );
        },
        setStrong: function (t, e, r) {
          var n = e + " Iterator",
            i = g(e),
            o = g(n);
          c(
            t,
            e,
            function (t, e) {
              v(this, { type: n, target: t, state: i(t), kind: e, last: void 0 });
            },
            function () {
              for (var t = o(this), e = t.kind, r = t.last; r && r.removed; ) r = r.previous;
              return t.target && (t.last = r = r ? r.next : t.state.first)
                ? "keys" == e
                  ? { value: r.key, done: !1 }
                  : "values" == e
                  ? { value: r.value, done: !1 }
                  : { value: [r.key, r.value], done: !1 }
                : ((t.target = void 0), { value: void 0, done: !0 });
            },
            r ? "entries" : "values",
            !r,
            !0
          ),
            f(e);
        }
      };
    }),
    n.register("dkI4U", function (t, e) {
      t.exports = n("bU1SM");
    }),
    n.register("bU1SM", function (t, e) {
      var r = n("bpefC");
      t.exports = r;
    }),
    n.register("bpefC", function (t, e) {
      n("lcfLC");
      var r = n("k30YA");
      t.exports = r.Reflect.apply;
    }),
    n.register("lcfLC", function (t, e) {
      var r = n("hCzcd"),
        i = n("1vWf3"),
        o = n("7Q6z8"),
        a = n("lnVro"),
        s = n("2pV9O"),
        u = i("Reflect", "apply"),
        c = Function.apply;
      r(
        {
          target: "Reflect",
          stat: !0,
          forced: !s(function () {
            u(function () {});
          })
        },
        {
          apply: function (t, e, r) {
            return o(t), a(r), u ? u(t, e, r) : c.call(t, e, r);
          }
        }
      );
    }),
    n.register("3efYe", function (t, e) {
      t.exports = n("1hsXt");
    }),
    n.register("1hsXt", function (t, e) {
      var r = n("2rqLr");
      t.exports = r;
    }),
    n.register("2rqLr", function (t, e) {
      n("ljehp");
      var r = n("k30YA");
      t.exports = r.Reflect.getPrototypeOf;
    }),
    n.register("ljehp", function (t, e) {
      var r = n("hCzcd"),
        i = n("lnVro"),
        o = n("gOmim");
      r(
        { target: "Reflect", stat: !0, sham: !n("kujYL") },
        {
          getPrototypeOf: function (t) {
            return o(i(t));
          }
        }
      );
    }),
    n.register("lA8qz", function (t, r) {
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
      e(t.exports, "canvasRGBA", () => s);
      /**
       * StackBlur - a fast almost Gaussian Blur For Canvas
       *
       * In case you find this class useful - especially in commercial projects -
       * I am not totally unhappy for a small donation to my PayPal account
       * mario@quasimondo.de
       *
       * Or support me on flattr:
       * {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
       *
       * @module StackBlur
       * @author Mario Klingemann
       * Contact: mario@quasimondo.com
       * Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
       * Twitter: @quasimondo
       *
       * @copyright (c) 2010 Mario Klingemann
       *
       * Permission is hereby granted, free of charge, to any person
       * obtaining a copy of this software and associated documentation
       * files (the "Software"), to deal in the Software without
       * restriction, including without limitation the rights to use,
       * copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the
       * Software is furnished to do so, subject to the following
       * conditions:
       *
       * The above copyright notice and this permission notice shall be
       * included in all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
       * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
       * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
       * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
       * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
       * OTHER DEALINGS IN THE SOFTWARE.
       */
      var i = [
          512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388,
          360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388,
          374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345,
          337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388,
          381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497,
          489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345,
          341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507,
          501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388,
          385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307,
          304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259
        ],
        o = [
          9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19,
          19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21,
          21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22,
          22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
          23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
          24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24
        ];
      function a(t, e, r, i, o) {
        if (("string" == typeof t && (t = document.getElementById(t)), !t || "object" !== n(t) || !("getContext" in t)))
          throw new TypeError("Expecting canvas with `getContext` method in processCanvasRGB(A) calls!");
        var a = t.getContext("2d");
        try {
          return a.getImageData(e, r, i, o);
        } catch (t) {
          throw new Error("unable to access image data: " + t);
        }
      }
      function s(t, e, r, n, s, c) {
        if (!(isNaN(c) || c < 1)) {
          c |= 0;
          var f = a(t, e, r, n, s);
          (f = (function (t, e, r, n, a, s) {
            for (
              var c, f = t.data, l = 2 * s + 1, h = n - 1, p = a - 1, v = s + 1, g = (v * (v + 1)) / 2, y = new u(), d = y, x = 1;
              x < l;
              x++
            )
              (d = d.next = new u()), x === v && (c = d);
            d.next = y;
            for (var m = null, b = null, w = 0, k = 0, S = i[s], A = o[s], O = 0; O < a; O++) {
              d = y;
              for (var C = f[k], T = f[k + 1], P = f[k + 2], E = f[k + 3], M = 0; M < v; M++)
                (d.r = C), (d.g = T), (d.b = P), (d.a = E), (d = d.next);
              for (
                var N = 0,
                  R = 0,
                  V = 0,
                  D = 0,
                  _ = v * C,
                  L = v * T,
                  z = v * P,
                  j = v * E,
                  I = g * C,
                  B = g * T,
                  F = g * P,
                  U = g * E,
                  Y = 1;
                Y < v;
                Y++
              ) {
                var H = k + ((h < Y ? h : Y) << 2),
                  X = f[H],
                  G = f[H + 1],
                  q = f[H + 2],
                  Z = f[H + 3],
                  W = v - Y;
                (I += (d.r = X) * W),
                  (B += (d.g = G) * W),
                  (F += (d.b = q) * W),
                  (U += (d.a = Z) * W),
                  (N += X),
                  (R += G),
                  (V += q),
                  (D += Z),
                  (d = d.next);
              }
              (m = y), (b = c);
              for (var Q = 0; Q < n; Q++) {
                var J = (U * S) >> A;
                if (((f[k + 3] = J), 0 !== J)) {
                  var K = 255 / J;
                  (f[k] = ((I * S) >> A) * K), (f[k + 1] = ((B * S) >> A) * K), (f[k + 2] = ((F * S) >> A) * K);
                } else f[k] = f[k + 1] = f[k + 2] = 0;
                (I -= _), (B -= L), (F -= z), (U -= j), (_ -= m.r), (L -= m.g), (z -= m.b), (j -= m.a);
                var $ = Q + s + 1;
                ($ = (w + ($ < h ? $ : h)) << 2),
                  (I += N += m.r = f[$]),
                  (B += R += m.g = f[$ + 1]),
                  (F += V += m.b = f[$ + 2]),
                  (U += D += m.a = f[$ + 3]),
                  (m = m.next);
                var tt = b,
                  et = tt.r,
                  rt = tt.g,
                  nt = tt.b,
                  it = tt.a;
                (_ += et), (L += rt), (z += nt), (j += it), (N -= et), (R -= rt), (V -= nt), (D -= it), (b = b.next), (k += 4);
              }
              w += n;
            }
            for (var ot = 0; ot < n; ot++) {
              var at = f[(k = ot << 2)],
                st = f[k + 1],
                ut = f[k + 2],
                ct = f[k + 3],
                ft = v * at,
                lt = v * st,
                ht = v * ut,
                pt = v * ct,
                vt = g * at,
                gt = g * st,
                yt = g * ut,
                dt = g * ct;
              d = y;
              for (var xt = 0; xt < v; xt++) (d.r = at), (d.g = st), (d.b = ut), (d.a = ct), (d = d.next);
              for (var mt = n, bt = 0, wt = 0, kt = 0, St = 0, At = 1; At <= s; At++) {
                k = (mt + ot) << 2;
                var Ot = v - At;
                (vt += (d.r = at = f[k]) * Ot),
                  (gt += (d.g = st = f[k + 1]) * Ot),
                  (yt += (d.b = ut = f[k + 2]) * Ot),
                  (dt += (d.a = ct = f[k + 3]) * Ot),
                  (St += at),
                  (bt += st),
                  (wt += ut),
                  (kt += ct),
                  (d = d.next),
                  At < p && (mt += n);
              }
              (k = ot), (m = y), (b = c);
              for (var Ct = 0; Ct < a; Ct++) {
                var Tt = k << 2;
                (f[Tt + 3] = ct = (dt * S) >> A),
                  ct > 0
                    ? ((ct = 255 / ct),
                      (f[Tt] = ((vt * S) >> A) * ct),
                      (f[Tt + 1] = ((gt * S) >> A) * ct),
                      (f[Tt + 2] = ((yt * S) >> A) * ct))
                    : (f[Tt] = f[Tt + 1] = f[Tt + 2] = 0),
                  (vt -= ft),
                  (gt -= lt),
                  (yt -= ht),
                  (dt -= pt),
                  (ft -= m.r),
                  (lt -= m.g),
                  (ht -= m.b),
                  (pt -= m.a),
                  (Tt = (ot + ((Tt = Ct + v) < p ? Tt : p) * n) << 2),
                  (vt += St += m.r = f[Tt]),
                  (gt += bt += m.g = f[Tt + 1]),
                  (yt += wt += m.b = f[Tt + 2]),
                  (dt += kt += m.a = f[Tt + 3]),
                  (m = m.next),
                  (ft += at = b.r),
                  (lt += st = b.g),
                  (ht += ut = b.b),
                  (pt += ct = b.a),
                  (St -= at),
                  (bt -= st),
                  (wt -= ut),
                  (kt -= ct),
                  (b = b.next),
                  (k += n);
              }
            }
            return t;
          })(f, 0, 0, n, s, c)),
            t.getContext("2d").putImageData(f, e, r);
        }
      }
      var u = function t() {
        !(function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        })(this, t),
          (this.r = 0),
          (this.g = 0),
          (this.b = 0),
          (this.a = 0),
          (this.next = null);
      };
    });
})();
//# sourceMappingURL=index.es.44f947b1.js.map
