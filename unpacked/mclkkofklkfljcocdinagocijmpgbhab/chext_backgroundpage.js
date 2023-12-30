(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var n = "Africa Latin",
    aa = "Android",
    ba = "Deutsch",
    ca = "Din\u00e9 bizaad - Modern",
    p = "Edge",
    da = "English",
    ea = "Espa\u00f1ol",
    fa = "Fran\u00e7ais",
    ha = "Internet Explorer",
    ia = "Italiano",
    ja = "Microsoft Edge",
    ka = "Nederlands",
    la = "Opera",
    ma = "Polski",
    na = "Portugu\u00eas",
    oa = "Portugu\u00eas brasileiro",
    pa = "Portugu\u00eas europeu",
    q = "Silk",
    ra = "Symbol.iterator",
    r = "US International",
    sa = "chext_driver.js",
    u = "complete",
    v = "en",
    w = "function",
    x = "iPad",
    ta = "iPod",
    y = "number",
    A = "object",
    B = "pt-BR",
    C = "pt-PT",
    D = "string",
    E = "ta",
    F = "zh-CN",
    G = "zh-TW",
    ua = "\u02bb\u014clelo Hawai\u02bbi",
    va = "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    wa = "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",
    xa = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
    ya = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)",
    za = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)",
    H,
    Aa = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    Ba = function (a) {
      a = [A == typeof globalThis && globalThis, a, A == typeof window && window, A == typeof self && self, A == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    I = function (a, b) {
      if (b)
        a: {
          var c = Ca;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && null != b && Da(c, a, { configurable: !0, writable: !0, value: b });
        }
    },
    Ea = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    Fa = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == y) return { next: Aa(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    Ia = function (a, b) {
      a.prototype = Ga(b.prototype);
      a.prototype.constructor = a;
      if (Ha) Ha(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.ea = b.prototype;
    },
    J = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    Ja = function (a, b) {
      a instanceof String && (a += "");
      var c = 0,
        d = !1,
        e = {
          next: function () {
            if (!d && c < a.length) {
              var f = c++;
              return { value: b(f, a[f]), done: !1 };
            }
            d = !0;
            return { done: !0, value: void 0 };
          }
        };
      e[Symbol.iterator] = function () {
        return e;
      };
      return e;
    },
    Ka = function (a) {
      var b = typeof a;
      b = b != A ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
      return "array" == b || (b == A && typeof a.length == y);
    },
    La = function (a) {
      var b = typeof a;
      return (b == A && null != a) || b == w;
    },
    Na = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Oa = function (a, b, c) {
      if (!a) throw Error();
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
          var e = Array.prototype.slice.call(arguments);
          Array.prototype.unshift.apply(e, d);
          return a.apply(b, e);
        };
      }
      return function () {
        return a.apply(b, arguments);
      };
    },
    K = function (a, b, c) {
      K = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Na : Oa;
      return K.apply(null, arguments);
    },
    Pa = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.ea = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Da = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    Qa = function (a) {
      return a;
    },
    L = function (a, b) {
      this.g = (a === Ra && b) || "";
      this.i = Sa;
    },
    Ta = function (a) {
      return a instanceof L && a.constructor === L && a.i === Sa ? a.g : "type_error:Const";
    },
    Ua = function (a) {
      this.g = a;
    },
    Va = function (a) {
      return a instanceof Ua && a.constructor === Ua ? a.g : "type_error:TrustedResourceUrl";
    },
    Za = function (a) {
      var b = {},
        c = Ta(a);
      if (!Wa.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
      a = c.replace(Xa, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error(
            'Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b)
          );
        d = b[e];
        return d instanceof L ? Ta(d) : encodeURIComponent(String(d));
      });
      return Ya(a);
    },
    Ya = function (a) {
      if (void 0 === $a) {
        var b = null;
        var c = M.trustedTypes;
        if (c && c.createPolicy) {
          try {
            b = c.createPolicy("goog#html", { createHTML: Qa, createScript: Qa, createScriptURL: Qa });
          } catch (d) {
            M.console && M.console.error(d.message);
          }
          $a = b;
        } else $a = b;
      }
      a = (b = $a) ? b.createScriptURL(a) : a;
      return new Ua(a, ab);
    },
    bb = function (a, b, c) {
      if (null == c) return b;
      if (typeof c === D) return c ? a + encodeURIComponent(c) : "";
      for (var d in c)
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          var e = c[d];
          e = Array.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var g = e[f];
            null != g &&
              (b || (b = a), (b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g))));
          }
        }
      return b;
    },
    cb = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    db = function () {
      this.I = this.I;
    },
    eb = function (a, b) {
      this.type = a;
      this.g = this.target = b;
      this.defaultPrevented = !1;
    },
    N = function () {
      var a = M.navigator;
      return a && (a = a.userAgent) ? a : "";
    },
    gb = function (a) {
      return fb
        ? O
          ? O.brands.some(function (b) {
              return (b = b.brand) && -1 != b.indexOf(a);
            })
          : !1
        : !1;
    },
    P = function (a) {
      return -1 != N().indexOf(a);
    },
    Q = function () {
      return fb ? !!O && 0 < O.brands.length : !1;
    },
    hb = function () {
      return Q() ? !1 : P(la);
    },
    ib = function () {
      return Q() ? !1 : P("Trident") || P("MSIE");
    },
    jb = function () {
      return Q() ? gb(ja) : P("Edg/");
    },
    kb = function () {
      return P("Firefox") || P("FxiOS");
    },
    mb = function () {
      return (
        P("Safari") &&
        !(lb() || (Q() ? 0 : P("Coast")) || hb() || (Q() ? 0 : P(p)) || jb() || (Q() ? gb(la) : P("OPR")) || kb() || P(q) || P(aa))
      );
    },
    lb = function () {
      return Q() ? gb("Chromium") : ((P("Chrome") || P("CriOS")) && !(Q() ? 0 : P(p))) || P(q);
    },
    nb = function () {
      return P(aa) && !(lb() || kb() || hb() || P(q));
    },
    ob = function (a) {
      var b = {};
      a.forEach(function (c) {
        b[c[0]] = c[1];
      });
      return function (c) {
        return (
          b[
            c.find(function (d) {
              return d in b;
            })
          ] || ""
        );
      };
    },
    pb = function (a) {
      var b = N();
      if (a === ha) {
        if (ib())
          if ((a = /rv: *([\d\.]*)/.exec(b)) && a[1]) b = a[1];
          else {
            a = "";
            var c = /MSIE +([\d\.]+)/.exec(b);
            if (c && c[1])
              if (((b = /Trident\/(\d.\d)/.exec(b)), "7.0" == c[1]))
                if (b && b[1])
                  switch (b[1]) {
                    case "4.0":
                      a = "8.0";
                      break;
                    case "5.0":
                      a = "9.0";
                      break;
                    case "6.0":
                      a = "10.0";
                      break;
                    case "7.0":
                      a = "11.0";
                  }
                else a = "7.0";
              else a = c[1];
            b = a;
          }
        else b = "";
        return b;
      }
      var d = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
      c = [];
      for (var e; (e = d.exec(b)); ) c.push([e[1], e[2], e[3] || void 0]);
      b = ob(c);
      switch (a) {
        case la:
          if (hb()) return b(["Version", la]);
          if (Q() ? gb(la) : P("OPR")) return b(["OPR"]);
          break;
        case ja:
          if (Q() ? 0 : P(p)) return b([p]);
          if (jb()) return b(["Edg"]);
          break;
        case "Chromium":
          if (lb()) return b(["Chrome", "CriOS", "HeadlessChrome"]);
      }
      return ("Firefox" === a && kb()) || ("Safari" === a && mb()) || ("Android Browser" === a && nb()) || (a === q && P(q))
        ? ((b = c[2]) && b[1]) || ""
        : "";
    },
    rb = function () {
      return fb ? !!O && !!O.platform : !1;
    },
    sb = function () {
      return P("iPhone") && !P(ta) && !P(x);
    },
    tb = function () {
      return rb() ? "macOS" === O.platform : P("Macintosh");
    },
    vb = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.F = e;
      this.key = ++ub;
      this.removed = this.D = !1;
    },
    wb = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.F = null;
    },
    xb = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    yb = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    },
    Ab = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < zb.length; f++) (c = zb[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    },
    Bb = function (a) {
      this.src = a;
      this.g = {};
      this.i = 0;
    },
    Db = function (a, b) {
      var c = b.type;
      if (c in a.g) {
        var d = a.g[c],
          e = Cb(d, b),
          f;
        (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
        f && (wb(b), 0 == a.g[c].length && (delete a.g[c], a.i--));
      }
    },
    Eb = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.listener == b && f.capture == !!c && f.F == d) return e;
      }
      return -1;
    },
    Fb = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Fb(a, b[f], c, d, e);
      else
        ((d = La(d) ? !!d.capture : !!d), (c = Gb(c)), a && a[Hb])
          ? a.i.remove(String(b), c, d, e)
          : a &&
            (a = Ib(a)) &&
            ((b = a.g[b.toString()]),
            (a = -1),
            b && (a = Eb(b, c, d, e)),
            (c = -1 < a ? b[a] : null) &&
              typeof c !== y &&
              c &&
              !c.removed &&
              ((e = c.src) && e[Hb]
                ? Db(e.i, c)
                : ((b = c.type),
                  (d = c.proxy),
                  e.removeEventListener
                    ? e.removeEventListener(b, d, c.capture)
                    : e.detachEvent
                    ? e.detachEvent(b in Jb ? Jb[b] : (Jb[b] = "on" + b), d)
                    : e.addListener && e.removeListener && e.removeListener(d),
                  Kb--,
                  (b = Ib(e)) ? (Db(b, c), 0 == b.i && ((b.src = null), (e[Lb] = null))) : wb(c))));
    },
    Ib = function (a) {
      a = a[Lb];
      return a instanceof Bb ? a : null;
    },
    Gb = function (a) {
      if (typeof a === w) return a;
      a[Mb] ||
        (a[Mb] = function (b) {
          return a.handleEvent(b);
        });
      return a[Mb];
    },
    Nb = function () {
      db.call(this);
      this.i = new Bb(this);
      this.T = this;
    },
    R = function (a, b) {
      a = a.T;
      var c = b.type || b;
      if (typeof b === D) b = new eb(b, a);
      else if (b instanceof eb) b.target = b.target || a;
      else {
        var d = b;
        b = new eb(c, a);
        Ab(b, d);
      }
      a = b.g = a;
      Ob(a, c, !0, b);
      Ob(a, c, !1, b);
    },
    Ob = function (a, b, c, d) {
      if ((b = a.i.g[String(b)])) {
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
          var g = b[f];
          if (g && !g.removed && g.capture == c) {
            var h = g.listener,
              k = g.F || g.src;
            g.D && Db(a.i, g);
            e = !1 !== h.call(k, d) && e;
          }
        }
      }
    },
    Pb = function () {},
    Rb = function (a) {
      var b;
      (b = a.g) || ((b = {}), Qb(a) && ((b[0] = !0), (b[1] = !0)), (b = a.g = b));
      return b;
    },
    Sb = function () {},
    Tb = function (a) {
      return (a = Qb(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    Qb = function (a) {
      if (!a.i && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.i = d);
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.i;
    },
    Vb = function (a, b) {
      xb(b, function (c, d) {
        c && typeof c == A && c.N && (c = c.M());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : Ub.hasOwnProperty(d)
          ? a.setAttribute(Ub[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    Xb = function (a, b, c) {
      var d = arguments,
        e = document,
        f = d[1];
      var g = String(d[0]);
      g = String(g);
      "application/xhtml+xml" === e.contentType && (g = g.toLowerCase());
      g = e.createElement(g);
      f && (typeof f === D ? (g.className = f) : Array.isArray(f) ? (g.className = f.join(" ")) : Vb(g, f));
      2 < d.length && Wb(e, g, d);
      return g;
    },
    Wb = function (a, b, c) {
      function d(h) {
        h && b.appendChild(typeof h === D ? a.createTextNode(h) : h);
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        if (!Ka(f) || (La(f) && 0 < f.nodeType)) d(f);
        else {
          a: {
            if (f && typeof f.length == y) {
              if (La(f)) {
                var g = typeof f.item == w || typeof f.item == D;
                break a;
              }
              if (typeof f === w) {
                g = typeof f.item == w;
                break a;
              }
            }
            g = !1;
          }
          Yb(g ? cb(f) : f, d);
        }
      }
    },
    Zb = function (a, b, c) {
      if (typeof a === w) c && (a = K(a, c));
      else if (a && typeof a.handleEvent == w) a = K(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : M.setTimeout(a, b || 0);
    },
    $b = function (a) {
      Nb.call(this);
      this.headers = new Map();
      this.u = a || null;
      this.g = !1;
      this.s = this.h = null;
      this.v = "";
      this.j = this.K = this.m = this.J = !1;
      this.A = 0;
      this.o = null;
      this.L = "";
      this.B = this.C = !1;
    },
    bc = function (a) {
      return ac && typeof a.timeout === y && void 0 !== a.ontimeout;
    },
    ec = function (a) {
      a.g = !1;
      a.h && ((a.j = !0), a.h.abort(), (a.j = !1));
      cc(a);
      dc(a);
    },
    cc = function (a) {
      a.J || ((a.J = !0), R(a, u), R(a, "error"));
    },
    ic = function (a) {
      if (a.g && "undefined" != typeof fc && (!a.s[1] || 4 != (a.h ? a.h.readyState : 0) || 2 != gc(a)))
        if (a.m && 4 == (a.h ? a.h.readyState : 0)) Zb(a.P, 0, a);
        else if ((R(a, "readystatechange"), 4 == (a.h ? a.h.readyState : 0))) {
          a.g = !1;
          try {
            hc(a) ? (R(a, u), R(a, "success")) : cc(a);
          } finally {
            dc(a);
          }
        }
    },
    dc = function (a) {
      if (a.h) {
        jc(a);
        var b = a.h,
          c = a.s[0] ? function () {} : null;
        a.h = null;
        a.s = null;
        R(a, "ready");
        try {
          b.onreadystatechange = c;
        } catch (d) {}
      }
    },
    jc = function (a) {
      a.h && a.B && (a.h.ontimeout = null);
      a.o && (M.clearTimeout(a.o), (a.o = null));
    },
    hc = function (a) {
      var b = gc(a);
      a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          var c = !0;
          break a;
        default:
          c = !1;
      }
      if (!c) {
        if ((b = 0 === b))
          (a = String(a.v).match(kc)[1] || null),
            !a && M.self && M.self.location && (a = M.self.location.protocol.slice(0, -1)),
            (b = !lc.test(a ? a.toLowerCase() : ""));
        c = b;
      }
      return c;
    },
    gc = function (a) {
      try {
        return 2 < (a.h ? a.h.readyState : 0) ? a.h.status : -1;
      } catch (b) {
        return -1;
      }
    },
    nc = function () {
      this.j = mc;
      this.g = new $b();
      this.g.C = !0;
    },
    oc = function (a) {
      return (a = a.exec(N())) ? a[1] : "";
    },
    S = function (a) {
      return Array.prototype.slice.call(a);
    },
    pc = function (a) {
      var b = T(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = S(a)), U(a, b | 1));
    },
    rc = function (a) {
      qc(a, 1);
      return a;
    },
    sc = function (a, b) {
      U(b, (a | 0) & -255);
    },
    tc = function (a, b) {
      U(b, (a | 34) & -221);
    },
    uc = function (a) {
      a = (a >> 11) & 1023;
      return 0 === a ? 536870912 : a;
    },
    vc = function (a) {
      return null !== a && typeof a === A && !Array.isArray(a) && a.constructor === Object;
    },
    wc = function (a) {
      if (null == a) return a;
      if (typeof a === D) {
        if (!a) return;
        a = +a;
      }
      if (typeof a === y) return a;
    },
    xc = function (a) {
      return null == a || typeof a === D ? a : void 0;
    },
    Ac = function (a, b, c) {
      null == a && (a = yc);
      yc = void 0;
      if (null == a) {
        var d = 96;
        c ? ((a = [c]), (d |= 512)) : (a = []);
        b && (d = (d & -2095105) | ((b & 1023) << 11));
      } else {
        if (!Array.isArray(a)) throw Error();
        d = T(a);
        if (d & 64) return a;
        d |= 64;
        if (c && ((d |= 512), c !== a[0])) throw Error();
        a: {
          c = a;
          var e = c.length;
          if (e) {
            var f = e - 1,
              g = c[f];
            if (vc(g)) {
              d |= 256;
              b = +!!(d & 512) - 1;
              e = f - b;
              1024 <= e && (zc(c, b, g), (e = 1023));
              d = (d & -2095105) | ((e & 1023) << 11);
              break a;
            }
          }
          b &&
            ((g = +!!(d & 512) - 1),
            (b = Math.max(b, e - g)),
            1024 < b && (zc(c, g, {}), (d |= 256), (b = 1023)),
            (d = (d & -2095105) | ((b & 1023) << 11)));
        }
      }
      U(a, d);
      return a;
    },
    zc = function (a, b, c) {
      for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
        var g = a[f];
        null != g && g !== c && (c[f - b] = g);
      }
      a.length = d + 1;
      a[d] = c;
    },
    Fc = function (a) {
      switch (typeof a) {
        case y:
          return isFinite(a) ? a : String(a);
        case "boolean":
          return a ? 1 : 0;
        case A:
          if (a && !Array.isArray(a) && Bc && null != a && a instanceof Uint8Array) {
            if (Cc) {
              for (var b = "", c = 0, d = a.length - 10240; c < d; ) b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else {
              void 0 === b && (b = 0);
              if (!Dc) {
                Dc = {};
                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                d = ["+/=", "+/", "-_=", "-_.", "-_"];
                for (var e = 0; 5 > e; e++) {
                  var f = c.concat(d[e].split(""));
                  Ec[e] = f;
                  for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Dc[h] && (Dc[h] = g);
                  }
                }
              }
              b = Ec[b];
              c = Array(Math.floor(a.length / 3));
              d = b[64] || "";
              for (e = f = 0; f < a.length - 2; f += 3) {
                var k = a[f],
                  l = a[f + 1];
                h = a[f + 2];
                g = b[k >> 2];
                k = b[((k & 3) << 4) | (l >> 4)];
                l = b[((l & 15) << 2) | (h >> 6)];
                h = b[h & 63];
                c[e++] = "" + g + k + l + h;
              }
              g = 0;
              h = d;
              switch (a.length - f) {
                case 2:
                  (g = a[f + 1]), (h = b[(g & 15) << 2] || d);
                case 1:
                  (a = a[f]), (c[e] = "" + b[a >> 2] + b[((a & 3) << 4) | (g >> 4)] + h + d);
              }
              a = c.join("");
            }
            return a;
          }
      }
      return a;
    },
    Gc = function (a, b, c) {
      a = S(a);
      var d = a.length,
        e = b & 256 ? a[d - 1] : void 0;
      d += e ? -1 : 0;
      for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
      if (e) {
        b = a[b] = {};
        for (var f in e) b[f] = c(e[f]);
      }
      return a;
    },
    Ic = function (a, b, c, d, e, f) {
      if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && T(a) & 1 ? void 0 : f && T(a) & 2 ? a : Hc(a, b, c, void 0 !== d, e, f);
        else if (vc(a)) {
          var g = {},
            h;
          for (h in a) g[h] = Ic(a[h], b, c, d, e, f);
          a = g;
        } else a = b(a, d);
        return a;
      }
    },
    Hc = function (a, b, c, d, e, f) {
      var g = d || c ? T(a) : 0;
      d = d ? !!(g & 32) : void 0;
      a = S(a);
      for (var h = 0; h < a.length; h++) a[h] = Ic(a[h], b, c, d, e, f);
      c && c(g, a);
      return a;
    },
    Kc = function (a) {
      return a.H === Jc ? a.toJSON() : Fc(a);
    },
    Lc = function (a, b, c) {
      c = void 0 === c ? tc : c;
      if (null != a) {
        if (Bc && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
          var d = T(a);
          return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? Hc(a, Lc, d & 4 ? tc : c, !0, !1, !0) : (U(a, d | 34), a);
        }
        a.H === Jc && ((b = a.l), (c = V(b)), (a = c & 2 ? a : Mc(a, b, c, !0)));
        return a;
      }
    },
    Mc = function (a, b, c, d) {
      a = a.constructor;
      yc = b = Nc(b, c, d);
      b = new a(b);
      yc = void 0;
      return b;
    },
    Nc = function (a, b, c) {
      var d = c || b & 2 ? tc : sc,
        e = !!(b & 32);
      a = Gc(a, b, function (f) {
        return Lc(f, e, d);
      });
      qc(a, 32 | (c ? 2 : 0));
      return a;
    },
    Pc = function (a, b) {
      a = a.l;
      return Oc(a, V(a), b);
    },
    Oc = function (a, b, c) {
      if (-1 === c) return null;
      if (c >= uc(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else if (((b = c + (+!!(b & 512) - 1)), b < a.length)) return a[b];
    },
    Qc = function (a, b, c, d) {
      var e = uc(b);
      if (c >= e) {
        var f = b;
        if (b & 256) e = a[a.length - 1];
        else {
          if (null == d) return;
          e = a[e + (+!!(b & 512) - 1)] = {};
          f |= 256;
        }
        e[c] = d;
        f !== b && U(a, f);
      } else (a[c + (+!!(b & 512) - 1)] = d), b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    },
    Sc = function (a, b, c) {
      var d = b & 2;
      a = Oc(a, b, c);
      Array.isArray(a) || (a = X);
      b = T(a);
      b & 1 || rc(a);
      d ? b & 2 || qc(a, 34) : b & 32 && !(b & 2) && Rc(a, 32);
      return a;
    },
    Tc = function (a) {
      a = a.l;
      var b = V(a),
        c = b & 2,
        d = Sc(a, b, 4),
        e = T(d);
      if (!(e & 4)) {
        Object.isFrozen(d) && ((e = 0), (d = S(d)), Qc(a, b, 4, d));
        for (var f = 0, g = 0; f < d.length; f++) {
          var h = xc(d[f]);
          null != h && (d[g++] = h);
        }
        g < f && (d.length = g);
        e |= 5;
        c && (e |= 34);
        U(d, e);
        e & 2 && Object.freeze(d);
      }
      !c && (e & 2 || Object.isFrozen(d)) && ((d = S(d)), qc(d, 5), Qc(a, b, 4, d));
      return d;
    },
    Vc = function (a) {
      var b = a.l,
        c = V(b);
      a = !!(c & 2);
      var d = a ? 1 : 2,
        e = Uc,
        f = !!(c & 2),
        g = Sc(b, c, 3);
      if (g !== X && T(g) & 4)
        3 !== d &&
          (f
            ? 2 === d && ((d = T(g)), (g = S(g)), U(g, d), Qc(b, c, 3, g))
            : ((f = Object.isFrozen(g)),
              1 === d
                ? f || Object.freeze(g)
                : ((d = T(g)), (e = d & -35), f && ((g = S(g)), (d = 0), Qc(b, c, 3, g)), d !== e && U(g, e)))),
          (b = g);
      else {
        var h = g;
        g = !!(c & 2);
        var k = !!(T(h) & 2);
        f = h;
        !g && k && (h = S(h));
        var l = c | (k ? 2 : 0);
        k = k || void 0;
        for (var m = 0, z = 0; m < h.length; m++) {
          var t = h[m];
          var Ma = e,
            qa = !1;
          if (null == t || typeof t !== A || (qa = Array.isArray(t)) || t.H !== Jc)
            if (qa) {
              var W = (qa = T(t));
              0 === W && (W |= l & 32);
              W |= l & 2;
              W !== qa && U(t, W);
              t = new Ma(t);
            } else t = void 0;
          void 0 !== t && ((k = k || V(t.l) & 2), (h[z++] = t));
        }
        z < m && (h.length = z);
        e = h;
        h = T(e);
        l = h | 5;
        k = k ? l & -9 : l | 8;
        h != k && (Object.isFrozen(e) && (e = S(e)), U(e, k));
        h = e;
        f !== h && Qc(b, c, 3, h);
        ((g && 2 !== d) || 1 === d) && Object.freeze(h);
        b = h;
      }
      if (!(a || T(b) & 8)) {
        for (a = 0; a < b.length; a++) (c = b[a]), (d = c.l), (g = V(d)), (d = g & 2 ? Mc(c, d, g, !1) : c), c !== d && (b[a] = d);
        qc(b, 8);
      }
    },
    Wc = function (a, b) {
      return null != a ? a : b;
    },
    Xc = function (a, b, c) {
      this.l = Ac(a, b, c);
    },
    Yc = function (a, b, c) {
      var d = a.constructor.da,
        e = uc(V(c ? a.l : b)),
        f = !1;
      if (d) {
        if (!c) {
          b = S(b);
          var g;
          if (b.length && vc((g = b[b.length - 1])))
            for (f = 0; f < d.length; f++)
              if (d[f] >= e) {
                Object.assign((b[b.length - 1] = {}), g);
                break;
              }
          f = !0;
        }
        e = b;
        c = !c;
        g = V(a.l);
        a = uc(g);
        g = +!!(g & 512) - 1;
        for (var h, k, l = 0; l < d.length; l++)
          if (((k = d[l]), k < a)) {
            k += g;
            var m = e[k];
            null == m ? (e[k] = c ? X : rc([])) : c && m !== X && pc(m);
          } else
            h || ((m = void 0), e.length && vc((m = e[e.length - 1])) ? (h = m) : e.push((h = {}))),
              (m = h[k]),
              null == h[k] ? (h[k] = c ? X : rc([])) : c && m !== X && pc(m);
      }
      d = b.length;
      if (!d) return b;
      var z;
      if (vc((h = b[d - 1]))) {
        a: {
          var t = h;
          e = {};
          c = !1;
          for (var Ma in t) (a = t[Ma]), Array.isArray(a) && a != a && (c = !0), null != a ? (e[Ma] = a) : (c = !0);
          if (c) {
            for (var qa in e) {
              t = e;
              break a;
            }
            t = null;
          }
        }
        t != h && (z = !0);
        d--;
      }
      for (; 0 < d; d--) {
        h = b[d - 1];
        if (null != h) break;
        var W = !0;
      }
      if (!z && !W) return b;
      var qb;
      f ? (qb = b) : (qb = Array.prototype.slice.call(b, 0, d));
      b = qb;
      f && (b.length = d);
      t && b.push(t);
      return b;
    },
    Uc = function (a) {
      this.l = Ac(a);
    },
    Zc = function (a) {
      this.l = Ac(a);
    },
    Y = function () {
      this.g = mc;
      this.get(0) || $c(this);
      this.get(20) || (this.set(4, !0), this.set(5, !0), this.set(6, !0), this.set(7, !1), this.set(9, !0), this.set(20, !0));
      this.get(28) || this.set(28, 1);
    },
    ad = function (a) {
      var b = [1, 2, 3, 5, 4, 6, 7, 10, 29, 9, 8],
        c = {};
      b &&
        Yb(
          b,
          function (d) {
            c[d] = this.get(d);
          },
          a
        );
      return c;
    },
    bd = function (a) {
      a &&
        xb(a, function (b, c) {
          localStorage[String(c)] = JSON.stringify(b);
        });
    },
    $c = function (a) {
      a.set(1, localStorage.getItem(a.g.U));
      var b = localStorage.getItem(a.g.V),
        c = [];
      b && (c = b.split(","));
      a.set(2, c);
      b = a.get(a.g.W);
      xb(
        b,
        function (d, e) {
          switch (e) {
            case "tsbc":
              this.set(5, d);
              break;
            case "tlang":
              this.set(4, d);
              break;
            case "pun":
              this.set(6, d);
              break;
            case "mk":
              this.set(7, d);
          }
        },
        a
      );
      a.set(0, !0);
    },
    cd = function () {
      var a = "G";
      Y.G && Y.hasOwnProperty(a) ? (a = Y.G) : ((a = new Y()), (Y.G = a));
      return a;
    },
    ed = function () {
      var a = [];
      Yb(dd, function (b) {
        b = b.split(".")[0];
        0 <= Cb(a, b) || a.push(b);
      });
      return new RegExp(
        "(" +
          a.join("|") +
          ").(com|ad|ae|com.af|com.ag|com.ai|al|am|co.ao|com.ar|as|at|com.au|az|ba|com.bd|be|bf|bg|com.bh|bi|bj|com.bn|com.bo|com.br|bs|bt|co.bw|by|com.bz|ca|cd|cf|cg|ch|ci|co.ck|cl|cm|cn|com.co|co.cr|com.cu|cv|com.cy|cz|de|dj|dk|dm|com.do|dz|com.ec|ee|com.eg|es|com.et|fi|com.fj|fm|fr|ga|ge|gg|com.gh|com.gi|gl|gm|gp|gr|com.gt|gy|com.hk|hn|hr|ht|hu|co.id|ie|co.il|im|co.in|iq|is|it|je|com.jm|jo|co.jp|co.ke|com.kh|ki|kg|co.kr|com.kw|kz|la|com.lb|li|lk|co.ls|lt|lu|lv|com.ly|com.mx|com.my|co.ma|md|me|mg|mk|ml|com.mm|mn|ms|com.mt|mu|mv|mw|co.nz|com.om|co.mz|com.na|com.nf|com.ng|com.ni|ne|nl|no|com.np|nr|nu|com.py|com.qa|com.pa|com.pe|com.pg|com.ph|com.pk|pl|pn|com.pr|ps|pt|ro|ru|rw|com.sa|com.sb|sc|se|com.sg|sh|si|sk|com.sl|sn|so|sm|sr|st|com.sv|td|tg|co.th|com.tj|tk|tl|tm|tn|to|com.tr|tt|com.tw|co.tz|com.ua|co.ug|co.uk|com.uy|co.uz|com.vc|co.ve|vg|co.vi|com.vn|vu|ws|rs|co.za|co.zm|co.zw|cat)$"
      );
    },
    gd = function () {
      this.g = Xb("CANVAS");
      this.i = this.g.getContext("2d");
      this.m = fd("inputtools_active", "image/Chrome_IME_Active2X.png");
      this.o = fd("inputtools_inactive", "image/Chrome_IME_Inactive2X.png");
      this.j = 0;
    },
    fd = function (a, b) {
      var c = document;
      a = typeof a === D ? c.getElementById(a) : a;
      a || ((a = Xb("IMG")), (a.src = b));
      return a;
    },
    id = function (a, b, c) {
      a.j && M.clearTimeout(a.j);
      a.j = Zb(
        function () {
          if (b) {
            var d;
            if ((d = hd[b])) {
              var e = -1;
              e = void 0 === e ? 0 : e;
              d = Wc(wc(Pc(d, 5)), e);
              d = [(d % 10) * 80 + 22, 80 * Math.floor(d / 10) + 22];
            } else d = [22, 22];
            e = c ? this.m : this.o;
            this.g.width = this.g.height = 38;
            this.i.clearRect(0, 0, 38, 38);
            this.i.drawImage(e, d[0], d[1], 38, 38, 0, 0, 38, 38);
            d = this.i.getImageData(0, 0, 38, 38);
            chrome.browserAction.setIcon({ imageData: { 38: d } });
          } else chrome.browserAction.setIcon({ path: "image/producticon_48px_active.png" });
        },
        10,
        a
      );
    },
    kd = function () {
      this.g = cd();
      this.i = new nc();
      this.o = ed();
      this.m = new gd();
      this.j = this.Z.bind(this);
      setTimeout(function () {
        chrome.tabs.query({ url: ["http://*/*", "https://*/*"], status: u }, function (b) {
          b.forEach(function (c) {
            chrome.tabs.executeScript(c.id, { file: sa });
            chrome.tabs.executeScript(c.id, { file: "chext_loader.js", allFrames: !0 });
          });
        });
      }, 100);
      chrome.extension.onMessage.addListener(this.ca.bind(this));
      chrome.extension.onConnect.addListener(this.Y.bind(this));
      chrome.webNavigation.onDOMContentLoaded.addListener(this.O.bind(this, !1));
      chrome.webNavigation.onTabReplaced.addListener(this.O.bind(this, !0));
      var a = this.ba.bind(this);
      chrome.tabs.onActivated.addListener(function (b) {
        if (b && b.tabId)
          try {
            chrome.tabs.get(b.tabId, a);
          } catch (c) {}
      });
      chrome.commands.onCommand.addListener(this.j);
      jd(this);
    },
    ld = function (a, b) {
      a = yb(a);
      a.url = ["http://*/*", "https://*/*"];
      chrome.tabs.query(a, function (c) {
        c.forEach(function (d) {
          chrome.tabs.sendMessage(d.id, b);
        });
      });
    },
    md = function (a, b) {
      function c() {
        b.onMessage.removeListener(e);
        d.onMessage.removeListener(f);
        b.onDisconnect.removeListener(c);
        d.disconnect();
      }
      var d = chrome.tabs.connect(b.sender.tab.id),
        e = a.R.bind(a, d);
      b.onMessage.addListener(e);
      var f = a.R.bind(a, b);
      d.onMessage.addListener(f);
      b.onDisconnect.addListener(c);
    },
    jd = function (a) {
      var b = a.g.get(1),
        c = a.g.get(3);
      id(a.m, b, c);
    },
    Da =
      typeof Object.defineProperties == w
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    Ca = Ba(this);
  I("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, g) {
      this.g = f;
      Da(this, "description", { configurable: !0, writable: !0, value: g });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  I(ra, function (a) {
    if (a) return a;
    a = Symbol(ra);
    for (
      var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = Ca[b[c]];
      typeof d === w &&
        typeof d.prototype[a] != w &&
        Da(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return Ea(Aa(this));
          }
        });
    }
    return a;
  });
  var Ga =
      typeof Object.create == w
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    nd;
  if (typeof Object.setPrototypeOf == w) nd = Object.setPrototypeOf;
  else {
    var od;
    a: {
      var pd = { a: !0 },
        qd = {};
      try {
        qd.__proto__ = pd;
        od = qd.a;
        break a;
      } catch (a) {}
      od = !1;
    }
    nd = od
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var Ha = nd;
  I("WeakMap", function (a) {
    function b(k) {
      this.g = (h += Math.random() + 1).toString();
      if (k) {
        k = Fa(k);
        for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    }
    function c() {}
    function d(k) {
      var l = typeof k;
      return (l === A && null !== k) || l === w;
    }
    function e(k) {
      if (!J(k, g)) {
        var l = new c();
        Da(k, g, { value: l });
      }
    }
    function f(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (m) {
          if (m instanceof c) return m;
          Object.isExtensible(m) && e(m);
          return l(m);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            m = new a([
              [k, 2],
              [l, 3]
            ]);
          if (2 != m.get(k) || 3 != m.get(l)) return !1;
          m.delete(k);
          m.set(l, 4);
          return !m.has(k) && 4 == m.get(l);
        } catch (z) {
          return !1;
        }
      })()
    )
      return a;
    var g = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var h = 0;
    b.prototype.set = function (k, l) {
      if (!d(k)) throw Error("Invalid WeakMap key");
      e(k);
      if (!J(k, g)) throw Error("WeakMap key fail: " + k);
      k[g][this.g] = l;
      return this;
    };
    b.prototype.get = function (k) {
      return d(k) && J(k, g) ? k[g][this.g] : void 0;
    };
    b.prototype.has = function (k) {
      return d(k) && J(k, g) && J(k[g], this.g);
    };
    b.prototype.delete = function (k) {
      return d(k) && J(k, g) && J(k[g], this.g) ? delete k[g][this.g] : !1;
    };
    return b;
  });
  I("Map", function (a) {
    function b() {
      var h = {};
      return (h.previous = h.next = h.head = h);
    }
    function c(h, k) {
      var l = h[1];
      return Ea(function () {
        if (l) {
          for (; l.head != h[1]; ) l = l.previous;
          for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
          l = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(h, k) {
      var l = k && typeof k;
      l == A || l == w ? (f.has(k) ? (l = f.get(k)) : ((l = "" + ++g), f.set(k, l))) : (l = "p_" + k);
      var m = h[0][l];
      if (m && J(h[0], l))
        for (h = 0; h < m.length; h++) {
          var z = m[h];
          if ((k !== k && z.key !== z.key) || k === z.key) return { id: l, list: m, index: h, entry: z };
        }
      return { id: l, list: m, index: -1, entry: void 0 };
    }
    function e(h) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (h) {
        h = Fa(h);
        for (var k; !(k = h.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    }
    if (
      (function () {
        if (!a || typeof a != w || !a.prototype.entries || typeof Object.seal != w) return !1;
        try {
          var h = Object.seal({ x: 4 }),
            k = new a(Fa([[h, "s"]]));
          if ("s" != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
          var l = k.entries(),
            m = l.next();
          if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
          m = l.next();
          return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0;
        } catch (z) {
          return !1;
        }
      })()
    )
      return a;
    var f = new WeakMap();
    e.prototype.set = function (h, k) {
      h = 0 === h ? 0 : h;
      var l = d(this, h);
      l.list || (l.list = this[0][l.id] = []);
      l.entry
        ? (l.entry.value = k)
        : ((l.entry = { next: this[1], previous: this[1].previous, head: this[1], key: h, value: k }),
          l.list.push(l.entry),
          (this[1].previous.next = l.entry),
          (this[1].previous = l.entry),
          this.size++);
      return this;
    };
    e.prototype.delete = function (h) {
      h = d(this, h);
      return h.entry && h.list
        ? (h.list.splice(h.index, 1),
          h.list.length || delete this[0][h.id],
          (h.entry.previous.next = h.entry.next),
          (h.entry.next.previous = h.entry.previous),
          (h.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].previous = b();
      this.size = 0;
    };
    e.prototype.has = function (h) {
      return !!d(this, h).entry;
    };
    e.prototype.get = function (h) {
      return (h = d(this, h).entry) && h.value;
    };
    e.prototype.entries = function () {
      return c(this, function (h) {
        return [h.key, h.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (h) {
        return h.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (h) {
        return h.value;
      });
    };
    e.prototype.forEach = function (h, k) {
      for (var l = this.entries(), m; !(m = l.next()).done; ) (m = m.value), h.call(k, m[1], m[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var g = 0;
    return e;
  });
  I("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Ja(this, function (b) {
            return b;
          });
        };
  });
  var rd =
    typeof Object.assign == w
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) J(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  I("Object.assign", function (a) {
    return a || rd;
  });
  I("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var g = d[f];
              if (b.call(c, g, f, d)) {
                b = g;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  I("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (h) {
                  return h;
                };
          var e = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
          if (typeof f == w) {
            b = f.call(b);
            for (var g = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, g++));
          } else for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
          return e;
        };
  });
  var fc = fc || {},
    M = this || self;
  var mc = {
    fa: "aq",
    ga: "ai",
    ha: "ra",
    ia: "ds",
    ja: "dr",
    la: "fd",
    ma: "gi",
    na: "gl",
    oa: "gp",
    pa: "hd",
    sa: "pl",
    X: "re",
    ta: "ri",
    va: "sq",
    wa: "si",
    xa: "ss",
    SUCCESS: "su",
    za: "ui",
    Aa: "ua",
    Ba: "up",
    URL: "url",
    V: "input_tools",
    U: "current_input",
    W: "current_input_state",
    ya: "tvk",
    qa: "GOOGLE_ITA_KD",
    ka: "ft",
    Ca: "ut",
    ra: "km"
  };
  var $a;
  L.prototype.N = !0;
  L.prototype.M = function () {
    return this.g;
  };
  var Sa = {},
    Ra = {};
  Ua.prototype.toString = function () {
    return this.g + "";
  };
  Ua.prototype.N = !0;
  Ua.prototype.M = function () {
    return this.g.toString();
  };
  var Xa = /%{(\w+)}/g,
    Wa = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
    sd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    ab = {};
  var Cb = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if (typeof a === D) return typeof b !== D || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Yb = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = typeof a === D ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
        };
  db.prototype.I = !1;
  var fb, td;
  a: {
    for (var ud = ["CLOSURE_FLAGS"], vd = M, wd = 0; wd < ud.length; wd++)
      if (((vd = vd[ud[wd]]), null == vd)) {
        td = null;
        break a;
      }
    td = vd;
  }
  var xd = td && td[610401301];
  fb = null != xd ? xd : !1;
  var O,
    yd = M.navigator;
  O = yd ? yd.userAgentData || null : null;
  var zd = hb(),
    ac = ib(),
    Ad = P(p),
    Bd = P("Gecko") && !(-1 != N().toLowerCase().indexOf("webkit") && !P(p)) && !(P("Trident") || P("MSIE")) && !P(p),
    Cd = -1 != N().toLowerCase().indexOf("webkit") && !P(p),
    Dd = tb(),
    Ed = rb() ? "Windows" === O.platform : P("Windows"),
    Fd = rb() ? O.platform === aa : P(aa),
    Gd = sb(),
    Hd = P(x),
    Id = P(ta),
    Jd;
  a: {
    var Kd = "",
      Ld = (function () {
        var a = N();
        if (Bd) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ad) return /Edge\/([\d\.]+)/.exec(a);
        if (ac) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Cd) return /WebKit\/(\S+)/.exec(a);
        if (zd) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Ld && (Kd = Ld ? Ld[1] : "");
    if (ac) {
      var Md,
        Nd = M.document;
      Md = Nd ? Nd.documentMode : void 0;
      if (null != Md && Md > parseFloat(Kd)) {
        Jd = String(Md);
        break a;
      }
    }
    Jd = Kd;
  }
  var Od = Jd;
  var Hb = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var ub = 0;
  var zb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  Bb.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.i++);
    var g = Eb(a, b, d, e);
    -1 < g ? ((b = a[g]), c || (b.D = !1)) : ((b = new vb(b, this.src, f, !!d, e)), (b.D = c), a.push(b));
    return b;
  };
  Bb.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = Eb(e, b, c, d);
    return -1 < b ? (wb(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.i--), !0) : !1;
  };
  Bb.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.g)
      if (!a || c == a) {
        for (var d = this.g[c], e = 0; e < d.length; e++) ++b, wb(d[e]);
        delete this.g[c];
        this.i--;
      }
    return b;
  };
  var Lb = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Jb = {},
    Kb = 0,
    Mb = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  Pa(Nb, db);
  Nb.prototype[Hb] = !0;
  Nb.prototype.removeEventListener = function (a, b, c, d) {
    Fb(this, a, b, c, d);
  };
  Nb.prototype.listen = function (a, b, c, d) {
    return this.i.add(String(a), b, !1, c, d);
  };
  Pb.prototype.g = null;
  var Pd;
  Pa(Sb, Pb);
  Pd = new Sb();
  var Ub = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };
  var kc = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  Pa($b, Nb);
  var lc = /^https?$/i,
    Qd = ["POST", "PUT"];
  H = $b.prototype;
  H.send = function (a, b, c, d) {
    if (this.h) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.v + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.v = a;
    this.J = !1;
    this.g = !0;
    this.h = this.u ? Tb(this.u) : Tb(Pd);
    this.s = this.u ? Rb(this.u) : Rb(Pd);
    this.h.onreadystatechange = K(this.P, this);
    try {
      (this.K = !0), this.h.open(b, String(a), !0), (this.K = !1);
    } catch (g) {
      ec(this);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
      else if (typeof d.keys === w && typeof d.get === w) {
        e = Fa(d.keys());
        for (var f = e.next(); !f.done; f = e.next()) (f = f.value), c.set(f, d.get(f));
      } else throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find(function (g) {
      return "content-type" == g.toLowerCase();
    });
    e = M.FormData && a instanceof M.FormData;
    !(0 <= Cb(Qd, b)) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = Fa(c);
    for (d = b.next(); !d.done; d = b.next()) (c = Fa(d.value)), (d = c.next().value), (c = c.next().value), this.h.setRequestHeader(d, c);
    this.L && (this.h.responseType = this.L);
    "withCredentials" in this.h && this.h.withCredentials !== this.C && (this.h.withCredentials = this.C);
    try {
      jc(this),
        0 < this.A &&
          ((this.B = bc(this.h)) ? ((this.h.timeout = this.A), (this.h.ontimeout = K(this.S, this))) : (this.o = Zb(this.S, this.A, this))),
        (this.m = !0),
        this.h.send(a),
        (this.m = !1);
    } catch (g) {
      ec(this);
    }
  };
  H.S = function () {
    "undefined" != typeof fc && this.h && (R(this, "timeout"), this.abort(8));
  };
  H.abort = function () {
    this.h && this.g && ((this.g = !1), (this.j = !0), this.h.abort(), (this.j = !1), R(this, u), R(this, "abort"), dc(this));
  };
  H.P = function () {
    this.I || (this.K || this.m || this.j ? ic(this) : this.aa());
  };
  H.aa = function () {
    ic(this);
  };
  H.isActive = function () {
    return !!this.h;
  };
  nc.prototype.abort = function () {
    this.g.isActive() && (this.g.abort(), this.g.i.remove(u, this.i, !0, void 0));
  };
  nc.prototype.m = function (a, b) {
    var c = b.target;
    b = hc(c) && 0 != gc(c);
    if (b)
      try {
        var d = c.h ? c.h.responseText : "";
      } catch (e) {
        d = "";
      }
    else d = null;
    c.removeEventListener(u, this.i, !0);
    c = {};
    a(((c[this.j.SUCCESS] = b), (c[this.j.X] = d), (c.od = 0), c));
  };
  var Rd = new L(Ra, "https://inputtools.google.com/request"),
    Sd = new L(Ra, "https://inputtools.google.com/predict"),
    Td = {},
    Ud = JSON.stringify(((Td["Content-Type"] = "application/json; charset=UTF-8"), Td));
  (function () {
    if (Ed) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(N())) ? a[1] : "0";
    }
    return Dd
      ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(N())) ? a[0].replace(/_/g, ".") : "10")
      : Fd
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(N())) ? a[1] : "")
      : Gd || Hd || Id
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(N())) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  var Vd = kb(),
    Wd = sb() || P(ta),
    Xd = P(x),
    Yd = nb(),
    Zd = lb(),
    $d = mb() && !(sb() || P(x) || P(ta));
  (function () {
    if (Vd) return oc(/Firefox\/([0-9.]+)/);
    if (ac || Ad || zd) return Od;
    if (Zd) {
      if (sb() || P(x) || P(ta) || tb()) {
        var a = oc(/CriOS\/([0-9.]+)/);
        if (a) return a;
      }
      return oc(/Chrome\/([0-9.]+)/);
    }
    if ($d && !(sb() || P(x) || P(ta))) return oc(/Version\/([0-9.]+)/);
    if (Wd || Xd) {
      if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(N()))) return a[1] + "." + a[2];
    } else if (Yd) return (a = oc(/Android\s+([0-9.]+)/)) ? a : oc(/Version\/([0-9.]+)/);
    return "";
  })();
  (function (a) {
    if (Q() && a !== q) {
      var b = O.brands.find(function (c) {
        return c.brand === a;
      });
      if (!b || !b.version) return NaN;
      b = b.version.split(".");
    } else {
      b = pb(a);
      if ("" === b) return NaN;
      b = b.split(".");
    }
    return 0 === b.length ? NaN : Number(b[0]);
  })(ha);
  var Ec = {},
    Dc = null;
  var Bc = "undefined" !== typeof Uint8Array,
    Cc = !ac && typeof btoa === w;
  var Z = typeof Symbol === w && "symbol" === typeof Symbol() ? Symbol() : void 0,
    qc = Z
      ? function (a, b) {
          a[Z] |= b;
        }
      : function (a, b) {
          void 0 !== a.g ? (a.g |= b) : Object.defineProperties(a, { g: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        },
    Rc = Z
      ? function (a, b) {
          a[Z] &= ~b;
        }
      : function (a, b) {
          void 0 !== a.g && (a.g &= ~b);
        },
    T = Z
      ? function (a) {
          return a[Z] | 0;
        }
      : function (a) {
          return a.g | 0;
        },
    V = Z
      ? function (a) {
          return a[Z];
        }
      : function (a) {
          return a.g;
        },
    U = Z
      ? function (a, b) {
          a[Z] = b;
        }
      : function (a, b) {
          void 0 !== a.g ? (a.g = b) : Object.defineProperties(a, { g: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        };
  var Jc = {},
    X,
    ae = [];
  U(ae, 39);
  X = Object.freeze(ae);
  var yc;
  Xc.prototype.toJSON = function () {
    var a = Hc(this.l, Kc, void 0, void 0, !1, !1);
    return Yc(this, a, !0);
  };
  Xc.prototype.H = Jc;
  Xc.prototype.toString = function () {
    return Yc(this, this.l, !1).toString();
  };
  Ia(Uc, Xc);
  Ia(Zc, Xc);
  Zc.da = [3, 4, 6, 7];
  var hd = {},
    be = {};
  Yb(
    [
      [1, "am-t-i0-und", [["am", "\u12a0\u121b\u122d\u129b"]], ["am"], 16, null, ["im_t13n_am"]],
      [2, "ar-t-i0-und", [["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]], ["ar"], 2, null, ["im_t13n_ar"]],
      [3, "bn-t-i0-und", [["bn", "\u09ac\u09be\u0982\u09b2\u09be"]], ["bn"], 3, null, ["im_t13n_bn"]],
      [4, "zh-t-i0-pinyin", [[F, "\u62fc\u97f3"]], [F], 29, null, ["im_pinyin_zh_hans"]],
      [49, "zh-t-i0-pinyin-x0-shuangpin-abc", [[F, "\u53cc\u62fc\uff08\u667a\u80fdABC\uff09"]], [F], 44, [18]],
      [50, "zh-t-i0-pinyin-x0-shuangpin-ms", [[F, "\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09"]], [F], 44, [18]],
      [51, "zh-t-i0-pinyin-x0-shuangpin-flypy", [[F, "\u53cc\u62fc\uff08\u5c0f\u9e64\uff09"]], [F], 44, [18]],
      [52, "zh-t-i0-pinyin-x0-shuangpin-jiajia", [[F, "\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09"]], [F], 44, [18]],
      [53, "zh-t-i0-pinyin-x0-shuangpin-ziguang", [[F, "\u53cc\u62fc\uff08\u7d2b\u5149\uff09"]], [F], 44, [18]],
      [54, "zh-t-i0-pinyin-x0-shuangpin-ziranma", [[F, "\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09"]], [F], 44, [18]],
      [6, "el-t-i0-und", [["el", va]], ["el"], 23, null, ["im_t13n_el"]],
      [7, "gu-t-i0-und", [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]], ["gu"], 4, null, ["im_t13n_gu"]],
      [8, "hi-t-i0-und", [["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]], ["hi"], 5, null, ["im_t13n_hi"]],
      [9, "he-t-i0-und", [["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]], ["he"], 20, null, ["im_t13n_he", "im_t13n_iw"]],
      [33, "ja-t-i0", [["ja", "\u65e5\u672c\u8a9e"]], null, 28],
      [10, "ja-t-ja-hira-i0-und", [["ja", "\u65e5\u672c\u8a9e"]], ["ja"], 28, null, ["im_t13n_ja"]],
      [11, "kn-t-i0-und", [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]], ["kn"], 6, null, ["im_t13n_kn"]],
      [12, "ml-t-i0-und", [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]], ["ml"], 7, null, ["im_t13n_ml"]],
      [13, "mr-t-i0-und", [["mr", "\u092e\u0930\u093e\u0920\u0940"]], ["mr"], 9, null, ["im_t13n_mr"]],
      [14, "ne-t-i0-und", [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]], ["ne"], 8, null, ["im_t13n_ne"]],
      [15, "or-t-i0-und", [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]], ["or"], 19, null, ["im_t13n_or"]],
      [16, "fa-t-i0-und", [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 14, null, ["im_t13n_fa"]],
      [17, "pa-t-i0-und", [["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]], ["pa"], 10, null, ["im_t13n_pa"]],
      [46, "pl-t-i0-und", [["pl", ma]], null, 37, null, ["im_t13n_pl"]],
      [18, "ru-t-i0-und", [["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]], ["ru"], 24, null, ["im_t13n_ru"]],
      [19, "sa-t-i0-und", [["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"]], ["sa"], 15, null, ["im_t13n_sa"]],
      [20, "sr-t-i0-und", [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 22, null, ["im_t13n_sr"]],
      [21, "si-t-i0-und", [["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]], ["si"], 18, null, ["im_t13n_si"]],
      [22, "ta-t-i0-und", [[E, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]], [E], 11, null, ["im_t13n_ta"]],
      [23, "te-t-i0-und", [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]], ["te"], 12, null, ["im_t13n_te"]],
      [24, "ti-t-i0-und", [["ti", "\u1275\u130d\u122d\u129b"]], ["ti"], 17, null, ["im_t13n_ti"]],
      [25, "ur-t-i0-und", [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 13, null, ["im_t13n_ur"]],
      [31, "zh-t-i0-wubi-1998", [[F, "\u4e94\u7b14"]], null, 30],
      [26, "zh-t-i0-wubi-1986", [[F, "\u4e94\u7b14"]], [F], 30, null, ["im_wubi_zh_hans"]],
      [28, "zh-hant-t-i0-und", [[G, "\u6ce8\u97f3"]], [G], 31, null, ["im_zhuyin_zh_hant"]],
      [32, "zh-hant-t-i0-bopo", [[G, "\u6ce8\u97f3"]], null, 31],
      [27, "zh-hant-t-i0-pinyin", [[G, "\u6f22\u8a9e\u62fc\u97f3"]], [G], 29, null, ["im_pinyin_zh_hant"]],
      [30, "vi-t-i0-und", [["vi", "Ti\u1ebfng Vi\u1ec7t"]], ["vi"], 21, [18], ["im_t13n_vi"]],
      [34, "be-t-i0-und", [["be", wa]], ["be"], 26, null, ["im_t13n_be"]],
      [35, "bg-t-i0-und", [["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]], ["bg"], 27, null, ["im_t13n_bg"]],
      [
        36,
        "uk-t-i0-und",
        [["uk", "\u0422\u0440\u0430\u043d\u0441\u043b\u0456\u0442\u0435\u0440\u0430\u0446\u0456\u044f"]],
        ["uk"],
        25,
        null,
        ["im_t13n_uk"]
      ],
      [37, "de-t-i0-und", [["de", ba]], ["de"], 35, [15, 18]],
      [38, "es-t-i0-und", [["es", ea]], ["es"], 34, [15, 18]],
      [39, "fr-t-i0-und", [["fr", fa]], ["fr"], 36, [15, 18]],
      [40, "it-t-i0-und", [["it", ia]], ["it"], 39, [15, 18]],
      [41, "nl-t-i0-und", [["nl", ka]], ["nl"], 40, [15, 18]],
      [42, "pt-t-i0-und", [[B, na]], [B], 38, [15, 18]],
      [48, "pt-pt-t-i0-und", [[C, na]], null, 38],
      [43, "zh-hant-t-i0-cangjie-1982", [[G, "\u5009\u9821"]], [G], 32],
      [44, "yue-hant-t-i0-und", [["zh-HK", "\u5ee3\u6771\u8a71"]], ["zh-HK"], 33],
      [60, "yue-hant-t-i0-jyutping", [["zh-HK", "\u7cb5\u62fc"]], ["zh-HK"], 33],
      [101, "sq-t-k0-und", [["sq", "Shqip"]], ["sq"], 0, null, ["vkd_sq"]],
      [
        102,
        "ar-t-k0-und",
        [
          [
            "ar",
            "\u0644\u0648\u062d\u0629 \u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"
          ]
        ],
        ["ar"],
        0,
        null,
        ["vkd_ar"]
      ],
      [
        103,
        "hy-hyr-t-k0-und",
        [["hy", "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]],
        ["hy"],
        0,
        null,
        ["vkd_hy_east"]
      ],
      [
        104,
        "hy-hyt-t-k0-und",
        [["hy", "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576"]],
        ["hy"],
        0,
        null,
        ["vkd_hy_west"]
      ],
      [105, "eu-t-k0-und", [["eu", "Euskara"]], ["eu"], 0, null, ["vkd_eu"]],
      [106, "be-t-k0-und", [["be", wa]], ["be"], 0, null, ["vkd_be"]],
      [107, "bn-t-k0-und", [["bn", "\u09ac\u09be\u0982\u09b2\u09be (INSCRIPT)"]], ["bn"], 0, null, ["vkd_bn_inscript"]],
      [
        108,
        "bn-t-und-latn-k0-und",
        [["bn", "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)"]],
        ["bn"],
        0,
        null,
        ["vkd_bn_phone"]
      ],
      [109, "bs-t-k0-und", [["bs", "Bosanski"]], ["bs"], 0, null, ["vkd_bs"]],
      [110, "pt-br-t-k0-und", [[B, oa]], [B], 0, null, ["vkd_pt_br"]],
      [
        111,
        "bg-t-k0-und",
        [["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"]],
        ["bg"],
        0,
        null,
        ["vkd_bg"]
      ],
      [
        112,
        "bg-t-k0-qwerty",
        [
          [
            "bg",
            "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u043a\u0430)"
          ]
        ],
        ["bg"],
        0,
        null,
        ["vkd_bg_phone"]
      ],
      [113, "ca-t-k0-und", [["ca", "Catal\u00e0"]], ["ca"], 0, null, ["vkd_ca"]],
      [114, "chr-t-k0-und", [["chr", "\u13e3\u13b3\u13a9"]], ["chr"], 0, null, ["vkd_chr"]],
      [
        233,
        "ckb-t-k0-ar",
        [["ckb", "\u06a9\u0648\u0631\u062f\u06cc - \u0634\u06ce\u0648\u0627\u0632\u06cc \u0639\u06d5\u0631\u06d5\u0628\u06cc"]],
        ["ckb"],
        0,
        null,
        ["vkd_ckb_ar"]
      ],
      [
        232,
        "ckb-t-k0-en",
        [["ckb", "\u06a9\u0648\u0631\u062f\u06cc - \u0634\u06ce\u0648\u0627\u0632\u06cc \u0626\u06cc\u0646\u06af\u0644\u06cc\u0632\u06cc"]],
        ["ckb"],
        0,
        null,
        ["vkd_ckb_en"]
      ],
      [115, "hr-t-k0-und", [["hr", "Hrvatski"]], ["hr"], 0, null, ["vkd_hr"]],
      [116, "cs-t-k0-und", [["cs", "\u010ce\u0161tina"]], ["cs"], 0, null, ["vkd_cs"]],
      [117, "cs-t-k0-qwertz", [["cs", "\u010ce\u0161tina QWERTZ"]], ["cs"], 0, null, ["vkd_cs_qwertz"]],
      [118, "da-t-k0-und", [["da", "Dansk"]], ["da"], 0, null, ["vkd_da"]],
      [119, "prs-t-k0-und", [["prs", "\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc"]], ["fa"], 0, null, ["vkd_prs"]],
      [120, "nl-t-k0-und", [["nl", ka]], ["nl"], 0, null, ["vkd_nl"]],
      [121, "hi-t-k0-qwerty", [["hi", xa]], ["hi"], 0, null, ["vkd_deva_phone"]],
      [122, "en-t-k0-und", [[v, da]], [v], 0, null, ["vkd_en"]],
      [123, "et-t-k0-und", [["et", "Eesti keel"]], ["et"], 0, null, ["vkd_et"]],
      [124, "und-ethi-t-k0-und", [["am", "\u130d\u12d5\u12dd"]], ["am"], 0, null, ["vkd_ethi"]],
      [125, "fi-t-k0-und", [["fi", "Suomi"]], ["fi"], 0, null, ["vkd_fi"]],
      [126, "fr-t-k0-und", [["fr", fa]], ["fr"], 0, null, ["vkd_fr"]],
      [127, "gl-t-k0-und", [["gl", "Galego"]], ["gl"], 0, null, ["vkd_gl"]],
      [
        128,
        "ka-t-k0-und",
        [["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)"]],
        ["ka"],
        0,
        null,
        ["vkd_ka_qwerty"]
      ],
      [
        129,
        "ka-t-k0-legacy",
        [
          [
            "ka",
            "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10db\u10d0\u10dc\u10e5\u10d0\u10dc\u10d0)"
          ]
        ],
        ["ka"],
        0,
        null,
        ["vkd_ka_typewriter"]
      ],
      [130, "de-t-k0-und", [["de", ba]], ["de"], 0, null, ["vkd_de"]],
      [131, "el-t-k0-und", [["el", va]], ["el"], 0, null, ["vkd_el"]],
      [132, "gu-t-k0-und", [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)"]], ["gu"], 0, null, ["vkd_gu_inscript"]],
      [
        133,
        "gu-t-und-latn-k0-qwerty",
        [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)"]],
        ["gu"],
        0,
        null,
        ["vkd_gu_phone"]
      ],
      [
        134,
        "pa-guru-t-k0-und",
        [["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)"]],
        ["pa"],
        0,
        null,
        ["vkd_guru_inscript"]
      ],
      [
        135,
        "pa-guru-t-und-latn-k0-und",
        [["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)"]],
        ["pa"],
        0,
        null,
        ["vkd_guru_phone"]
      ],
      [136, "he-t-k0-und", [["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]], ["he"], 0, null, ["vkd_he", "vkd_iw"]],
      [137, "hi-t-k0-und", [["hi", ya]], ["hi"], 0, null, ["vkd_hi"]],
      [138, "hu-t-k0-101key", [["hu", "Magyar nyelv (101)"]], ["hu"], 0, null, ["vkd_hu_101"]],
      [139, "is-t-k0-und", [["is", "\u00cdslenska"]], ["is"], 0, null, ["vkd_is"]],
      [140, "it-t-k0-und", [["it", ia]], ["it"], 0, null, ["vkd_it"]],
      [141, "kn-t-k0-und", [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)"]], ["kn"], 0, null, ["vkd_kn_inscript"]],
      [
        142,
        "kn-t-und-latn-k0-und",
        [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)"]],
        ["kn"],
        0,
        null,
        ["vkd_kn_phone"]
      ],
      [143, "kk-t-k0-und", [["kk", "\u049a\u0430\u0437\u0430\u049b"]], ["kk"], 0, null, ["vkd_kk"]],
      [144, "km-t-k0-und", [["km", "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA"]], ["km"], 0, null, ["vkd_km"]],
      [145, "ko-t-k0-und", [["ko", "\ud55c\uad6d\uc5b4"]], ["ko"], 0, [18], ["vkd_ko"]],
      [146, "ky-cyrl-t-k0-und", [["ky", "\u041a\u044b\u0440\u0433\u044b\u0437"]], ["ky"], 0, null, ["vkd_ky_cyrl"]],
      [147, "lo-t-k0-und", [["lo", "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7"]], ["lo"], 0, null, ["vkd_lo"]],
      [148, "lv-t-k0-und", [["lv", "Latvie\u0161u valoda"]], ["lv"], 0, null, ["vkd_lv"]],
      [149, "lt-t-k0-und", [["lt", "Lietuvi\u0173 kalba"]], ["lt"], 0, null, ["vkd_lt"]],
      [150, "mk-t-k0-und", [["mk", "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]], ["mk"], 0, null, ["vkd_mk"]],
      [151, "ml-t-k0-und", [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (INSCRIPT)"]], ["ml"], 0, null, ["vkd_ml_inscript"]],
      [
        152,
        "ml-t-und-latn-k0-und",
        [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2e\u0d4a\u0d34\u0d3f)"]],
        ["ml"],
        0,
        null,
        ["vkd_ml_phone"]
      ],
      [
        246,
        "mni-mtei-t-k0-phone",
        [["mni-Mtei", "\uabc3\uabe4\uabc7\uabe9 \uabc3\uabcc\uabe6\uabdb (\uabd0\uabe3\uabc5\uabe6\uabc7\uabe4\uabdb)"]],
        ["mni-Mtei"],
        0
      ],
      [153, "mt-t-k0-und", [["mt", "Malti"]], ["mt"], 0, null, ["vkd_mt"]],
      [154, "mi-t-k0-und", [["mi", "Maori"]], ["mi"], 0, null, ["vkd_mi"]],
      [155, "mn-cyrl-t-k0-und", [["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]], ["mn"], 0, null, ["vkd_mn_cyrl"]],
      [156, "srp-t-k0-und", [["sr", "Crnogorski jezik"]], ["sr"], 0, null, ["vkd_srp"]],
      [157, "no-t-k0-und", [["no", "Norsk"]], ["no"], 0, null, ["vkd_no"]],
      [158, "or-t-k0-und", [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (INSCRIPT)"]], ["or"], 0, null, ["vkd_or_inscript"]],
      [
        159,
        "or-t-und-latn-k0-und",
        [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)"]],
        ["or"],
        0,
        null,
        ["vkd_or_phone"]
      ],
      [160, "latn-002-t-k0-und", [[v, n]], ["af"], 0, null, ["vkd_latn_002"]],
      [161, "ps-t-k0-und", [["ps", "\u067e\u069a\u062a\u0648"]], ["ps"], 0, null, ["vkd_ps"]],
      [162, "fa-t-k0-und", [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 0, null, ["vkd_fa"]],
      [163, "pl-t-k0-und", [["pl", ma]], ["pl"], 0, null, ["vkd_pl"]],
      [164, "pt-pt-t-k0-und", [[C, pa]], [C], 0, null, ["vkd_pt_pt"]],
      [165, "rom-t-k0-und", [["rom", "Rromani \u0107hib"]], ["rom"], 0, null, ["vkd_rom"]],
      [166, "ro-t-k0-und", [["ro", "Rom\u00e2n\u0103"]], ["ro"], 0, null, ["vkd_ro"]],
      [167, "ro-t-k0-legacy", [["ro", "Rom\u00e2n\u0103 SR13392 Primary"]], ["ro"], 0, null, ["vkd_ro_sr13392_primary"]],
      [168, "ro-t-k0-extended", [["ro", "Rom\u00e2n\u0103 SR13392 Secondary"]], ["ro"], 0, null, ["vkd_ro_sr13392_secondary"]],
      [
        169,
        "ru-t-k0-und",
        [["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"]],
        ["ru"],
        0,
        null,
        ["vkd_ru"]
      ],
      [
        212,
        "ru-t-k0-qwerty",
        [
          [
            "ru",
            "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)"
          ]
        ],
        ["ru"],
        0
      ],
      [242, "sa-t-k0-devanaga", [["sa", ya]], ["sa"], 0],
      [
        170,
        "sa-t-und-latn-k0-und",
        [["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)"]],
        ["sa"],
        0,
        null,
        ["vkd_sa_phone"]
      ],
      [171, "sr-cyrl-t-k0-und", [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 0, null, ["vkd_sr_cyrl"]],
      [172, "sr-latn-t-k0-und", [["sr", "Srpski"]], ["sr"], 0, null, ["vkd_sr_latn"]],
      [173, "si-t-k0-und", [["si", "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134"]], ["si"], 0, null, ["vkd_si"]],
      [174, "sk-t-k0-und", [["sk", "Slovensk\u00fd jazyk"]], ["sk"], 0, null, ["vkd_sk"]],
      [175, "sk-t-k0-qwerty", [["sk", "Slovensk\u00fd jazyk - QWERTY"]], ["sk"], 0, null, ["vkd_sk_qwerty"]],
      [176, "sl-t-k0-und", [["sl", "Sloven\u0161\u010dina"]], ["sl"], 0, null, ["vkd_sl"]],
      [177, "uzs-t-k0-und", [["uzs", "Southern Uzbek"]], ["uzs"], 0, null, ["vkd_uzs"]],
      [178, "es-t-k0-und", [["es", ea]], ["es"], 0, null, ["vkd_es_es"]],
      [179, "sv-t-k0-und", [["sv", "Svenska"]], ["sv"], 0, null, ["vkd_sv"]],
      [180, "de-ch-t-k0-und", [["de", "Deutschsprachige Schweiz"]], ["de"], 0, null, ["vkd_de_ch"]],
      [181, "ta-t-k0-ta99", [[E, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)"]], [E], 0, null, ["vkd_ta_tamil99"]],
      [182, "ta-t-k0-und", [[E, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)"]], [E], 0, null, ["vkd_ta_inscript"]],
      [
        183,
        "ta-t-und-latn-k0-und",
        [[E, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)"]],
        [E],
        0,
        null,
        ["vkd_ta_phone"]
      ],
      [205, "ta-t-k0-typewriter", [[E, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)"]], [E], 0],
      [206, "ta-t-k0-itrans", [[E, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)"]], [E], 0],
      [184, "tt-t-k0-und", [["tt", "\u0422\u0430\u0442\u0430\u0440"]], ["tt"], 0, null, ["vkd_tt"]],
      [185, "te-t-k0-und", [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)"]], ["te"], 0, null, ["vkd_te_inscript"]],
      [
        186,
        "te-t-und-latn-k0-und",
        [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)"]],
        ["te"],
        0,
        null,
        ["vkd_te_phone"]
      ],
      [187, "th-t-k0-und", [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]], ["th"], 0, null, ["vkd_th"]],
      [204, "th-t-k0-pattajoti", [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)"]], ["th"], 0],
      [203, "th-t-k0-tis", [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)"]], ["th"], 0],
      [188, "tr-t-k0-legacy", [["tr", "T\u00fcrk\u00e7e - F"]], ["tr"], 0, null, ["vkd_tr_f", "tr-t-k0-lagacy"]],
      [189, "tr-t-k0-und", [["tr", "T\u00fcrk\u00e7e - Q"]], ["tr"], 0, null, ["vkd_tr_q"]],
      [190, "ug-t-k0-und", [["ug", "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"]], ["ug"], 0, null, ["vkd_ug"]],
      [
        191,
        "uk-t-k0-101key",
        [["uk", "\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430"]],
        ["uk"],
        0,
        null,
        ["vkd_uk_101"]
      ],
      [192, "ur-t-k0-und", [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 0, null, ["vkd_ur"]],
      [193, "uz-latn-t-k0-und", [["uz", "O\u2018zbek"]], ["uz"], 0, null, ["vkd_uz_latn"]],
      [
        194,
        "uz-cyrl-t-k0-und",
        [["uz", "\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)"]],
        ["uz"],
        0,
        null,
        ["vkd_uz_cyrl_phone"]
      ],
      [
        195,
        "uz-cyrl-t-k0-legacy",
        [["uz", "\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)"]],
        ["uz"],
        0,
        null,
        ["vkd_uz_cyrl_type"]
      ],
      [196, "vi-t-k0-und", [["vi", "Ti\u1ebfng Vi\u1ec7t TCVN 6064"]], ["vi"], 0, null, ["vkd_vi_tcvn"]],
      [197, "vi-t-k0-legacy", [["vi", "Ti\u1ebfng Vi\u1ec7t Telex"]], ["vi"], 0, null, ["vkd_vi_telex"]],
      [198, "vi-t-k0-viqr", [["vi", "Ti\u1ebfng Vi\u1ec7t VIQR"]], ["vi"], 0, null, ["vkd_vi_viqr"]],
      [208, "vi-t-k0-vni", [["vi", "Ti\u1ebfng Vi\u1ec7t VNI"]], ["vi"], 0],
      [199, "dz-t-k0-und", [["dz", "\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41\u0f0b"]], ["dz"], 0, null, ["vkd_dz"]],
      [200, "en-t-k0-dvorak", [[v, "English Dvorak"]], [v], 0],
      [
        201,
        "chr-t-und-latn-k0-und",
        [["chr", "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac"]],
        ["chr"],
        0,
        null,
        ["vkd_chr_phone"]
      ],
      [202, "my-t-k0-und", [["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"]], ["my"], 0, null, ["vkd_my"]],
      [239, "tg-t-k0-und", [["tg", "\u0422\u043e\u04b7\u0438\u043a"]], ["tg"], 0, null, ["vkd_tg"]],
      [5, "en-t-i0-und", [[v, da]], [v], 41, [15, 18], ["im_t13n_en"]],
      [29, "ja-hira-t-i0-und", [["ja", "\u65e5\u672c\u8a9e"]], null, -1, null, ["im_t13n_ja_hira"]],
      [45, "tr-t-i0-und", [["tr", "T\u00fcrk"]], null, 42],
      [
        207,
        "yi-t-k0-und",
        [
          [
            "yi",
            "\u05d4\u05e2\u05d1\u05e8\u05e2\u05d9\u05d9 \u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05e7\u05d9\u05d1\u05d0\u05b8\u05e8\u05d3"
          ]
        ],
        ["yi"],
        0
      ],
      [256, "yo-ng-t-k0-und", [["yo", "Nigerian Yoruba"]], ["yo"], 0],
      [
        209,
        "ne-t-k0-und",
        [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)"]],
        ["ne"],
        0
      ],
      [
        210,
        "ne-t-und-latn-k0-und",
        [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)"]],
        ["ne"],
        0
      ],
      [211, "en-us-t-k0-intl", [[v, r]], ["nl"], 0],
      [213, "nv-t-k0-und", [["nv", ca]], ["nv"], 0],
      [234, "nv-t-k0", [["nv", ca]], null, 0],
      [235, "nv-t-k0-std", [["nv", "Din\u00e9 bizaad - Traditional"]], ["nv"], 0],
      [401, "af-t-i0-handwrit", [["af", "Afrikaans"]], ["af"], 1],
      [506, "am-t-i0-handwrit", [["am", "\u12a0\u121b\u122d\u129b"]], ["am"], 1],
      [464, "ar-t-i0-handwrit", [["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]], ["ar"], 1],
      [507, "as-t-i0-handwrit", [["as", "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"]], ["as"], 1],
      [487, "az-t-i0-handwrit", [["az", "Az\u0259rbaycan"]], ["az"], 1],
      [402, "be-t-i0-handwrit", [["be", wa]], ["be"], 1],
      [403, "bg-t-i0-handwrit", [["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]], ["bg"], 1],
      [489, "bn-t-i0-handwrit", [["bn", "\u09ac\u09be\u0982\u09b2\u09be"]], ["bn"], 1],
      [509, "bo-t-i0-handwrit", [["bo", "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"]], ["bo"], 1],
      [468, "bs-t-i0-handwrit", [["bs", "Bosanski"]], ["bs"], 1],
      [404, "ca-t-i0-handwrit", [["ca", "Catal\u00e0"]], ["ca"], 1],
      [469, "ceb-t-i0-handwrit", [["ceb", "Binisaya"]], ["ceb"], 1],
      [494, "co-t-i0-handwrit", [["co", "Corsican"]], ["co"], 1],
      [405, "cs-t-i0-handwrit", [["cs", "\u010ce\u0161tina"]], ["cs"], 1],
      [406, "cy-t-i0-handwrit", [["cy", "Cymraeg"]], ["cy"], 1],
      [407, "da-t-i0-handwrit", [["da", "Dansk"]], ["da"], 1],
      [408, "de-t-i0-handwrit", [["de", ba]], ["de"], 1],
      [455, "el-t-i0-handwrit", [["el", va]], ["el"], 1],
      [409, "en-t-i0-handwrit", [[v, da]], [v], 1],
      [456, "eo-t-i0-handwrit", [["eo", "Esperanto"]], ["eo"], 1],
      [410, "es-t-i0-handwrit", [["es", ea]], ["es"], 1],
      [411, "et-t-i0-handwrit", [["et", "Eesti"]], ["et"], 1],
      [412, "eu-t-i0-handwrit", [["eu", "Euskara"]], ["eu"], 1],
      [465, "fa-t-i0-handwrit", [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 1],
      [413, "fi-t-i0-handwrit", [["fi", "Suomi"]], ["fi"], 1],
      [414, "fil-t-i0-handwrit", [["fil", "Filipino"]], ["fil"], 1],
      [415, "fr-t-i0-handwrit", [["fr", fa]], ["fr"], 1],
      [495, "fy-t-i0-handwrit", [["fy", "Frysk"]], ["fy"], 1],
      [416, "ga-t-i0-handwrit", [["ga", "Gaeilge"]], ["ga"], 1],
      [496, "gd-t-i0-handwrit", [["gd", "G\u00e0idhlig"]], ["gd"], 1],
      [417, "gl-t-i0-handwrit", [["gl", "Galego"]], ["gl"], 1],
      [462, "gu-t-i0-handwrit", [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]], ["gu"], 1],
      [497, "haw-t-i0-handwrit", [["haw", ua]], ["haw"], 1],
      [457, "he-t-i0-handwrit", [["he", "\u05e2\u05d1\u05e8\u05d9\u05ea"]], ["he"], 1],
      [453, "hi-t-i0-handwrit", [["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]], ["hi"], 1],
      [470, "hmn-t-i0-handwrit", [["hmn", "Hmong"]], ["hmn"], 1],
      [418, "hr-t-i0-handwrit", [["hr", "Hrvatski"]], ["hr"], 1],
      [419, "ht-t-i0-handwrit", [["ht", "Haitian Creole"]], ["ht"], 1],
      [420, "hu-t-i0-handwrit", [["hu", "Magyar"]], ["hu"], 1],
      [504, "hy-t-i0-handwrit", [["hy", "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"]], ["hy"], 1],
      [421, "id-t-i0-handwrit", [["id", "Indonesia"]], ["id"], 1],
      [422, "is-t-i0-handwrit", [["is", "\u00cdslenska"]], ["is"], 1],
      [423, "it-t-i0-handwrit", [["it", ia]], ["it"], 1],
      [424, "ja-t-i0-handwrit", [["ja", "\u65e5\u672c\u8a9e"]], ["ja"], 1],
      [458, "jv-t-i0-handwrit", [["jv", "Jawa"]], ["jv"], 1],
      [505, "ka-t-i0-handwrit", [["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"]], ["ka"], 1],
      [501, "kk-t-i0-handwrit", [["kk", "\u049a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"]], ["kk"], 1],
      [484, "km-t-i0-handwrit", [["km", "\u1781\u17d2\u1798\u17c2\u179a"]], ["km"], 1],
      [471, "kn-t-i0-handwrit", [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]], ["kn"], 1],
      [425, "ko-t-i0-handwrit", [["ko", "\ud55c\uad6d\uc5b4"]], ["ko"], 1],
      [477, "ku-t-i0-handwrit", [["ku", "Kurd\u00ee"]], ["ku"], 1],
      [478, "ky-t-i0-handwrit", [["ky", "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"]], ["ky"], 1],
      [426, "la-t-i0-handwrit", [["la", "Latin"]], ["la"], 1],
      [498, "lb-t-i0-handwrit", [["lb", "L\u00ebtzebuergesch"]], ["lb"], 1],
      [483, "lo-t-i0-handwrit", [["lo", "\u0ea5\u0eb2\u0ea7"]], ["lo"], 1],
      [427, "lt-t-i0-handwrit", [["lt", "Lietuvi\u0173"]], ["lt"], 1],
      [428, "lv-t-i0-handwrit", [["lv", "Latvie\u0161u"]], ["lv"], 1],
      [479, "mg-t-i0-handwrit", [["mg", "Malagasy"]], ["mg"], 1],
      [459, "mi-t-i0-handwrit", [["mi", "Te reo M\u0101ori"]], ["mi"], 1],
      [429, "mk-t-i0-handwrit", [["mk", "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]], ["mk"], 1],
      [490, "ml-t-i0-handwrit", [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]], ["ml"], 1],
      [474, "mn-t-i0-handwrit", [["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]], ["mn"], 1],
      [461, "mr-t-i0-handwrit", [["mr", "\u092e\u0930\u093e\u0920\u0940"]], ["mr"], 1],
      [430, "ms-t-i0-handwrit", [["ms", "Melayu"]], ["ms"], 1],
      [467, "mt-t-i0-handwrit", [["mt", "Malti"]], ["mt"], 1],
      [488, "mul-t-i0-handwrit", [["mul", "Multiple languages"]], ["mul"], 1],
      [511, "mul-beng-t-i0-handwrit", [["mul-beng", "Multiple languages (Bangla)"]], ["mul-beng"], 1],
      [512, "mul-cyrl-t-i0-handwrit", [["mul-cyrl", "Multiple languages (Cyrillic)"]], ["mul-cyrl"], 1],
      [513, "mul-deva-t-i0-handwrit", [["mul-deva", "Multiple languages (Devanagari)"]], ["mul-deva"], 1],
      [514, "mul-ethi-t-i0-handwrit", [["mul-ethi", "Multiple languages (Ethiopic)"]], ["mul-ethi"], 1],
      [515, "mul-latn-t-i0-handwrit", [["mul-latn", "Multiple languages (Latin)"]], ["mul-latn"], 1],
      [492, "my-t-i0-handwrit", [["my", "\u1019\u103c\u1014\u103a\u1019\u102c"]], ["my"], 1],
      [431, "nb-t-i0-handwrit", [["nb", "Norsk bokm\u00e5l"]], ["nb"], 1],
      [485, "ne-t-i0-handwrit", [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]], ["ne"], 1],
      [432, "nl-t-i0-handwrit", [["nl", ka]], ["nl"], 1],
      [434, "nn-t-i0-handwrit", [["nn", "Norsk nynorsk"]], ["nn"], 1],
      [433, "no-t-i0-handwrit", [["no", "Norsk"]], ["no"], 1],
      [480, "ny-t-i0-handwrit", [["ny", "Nyanja"]], ["ny"], 1],
      [476, "or-t-i0-handwrit", [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]], ["or"], 1],
      [463, "pa-t-i0-handwrit", [["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]], ["pa"], 1],
      [435, "pl-t-i0-handwrit", [["pl", ma]], ["pl"], 1],
      [436, "pt-t-i0-handwrit", [[B, na]], null, 1],
      [437, "pt-br-t-i0-handwrit", [[B, "Portugu\u00eas (Brasil)"]], [B], 1],
      [438, "pt-pt-t-i0-handwrit", [[C, "Portugu\u00eas (Portugal)"]], [C], 1],
      [439, "ro-t-i0-handwrit", [["ro", "Rom\u00e2n\u0103"]], ["ro"], 1],
      [440, "ru-t-i0-handwrit", [["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]], ["ru"], 1],
      [491, "si-t-i0-handwrit", [["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]], ["si"], 1],
      [441, "sk-t-i0-handwrit", [["sk", "Sloven\u010dina"]], ["sk"], 1],
      [442, "sl-t-i0-handwrit", [["sl", "Sloven\u0161\u010dina"]], ["sl"], 1],
      [499, "sm-t-i0-handwrit", [["sm", "Samoan"]], ["sm"], 1],
      [500, "sn-t-i0-handwrit", [["sn", "ChiShona"]], ["sn"], 1],
      [472, "so-t-i0-handwrit", [["so", "Soomaali"]], ["so"], 1],
      [443, "sq-t-i0-handwrit", [["sq", "Shqip"]], ["sq"], 1],
      [444, "sr-t-i0-handwrit", [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 1],
      [481, "su-t-i0-handwrit", [["su", "Basa Sunda"]], ["su"], 1],
      [445, "sv-t-i0-handwrit", [["sv", "Svenska"]], ["sv"], 1],
      [446, "sw-t-i0-handwrit", [["sw", "Kiswahili"]], ["sw"], 1],
      [473, "ta-t-i0-handwrit", [[E, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]], [E], 1],
      [466, "te-t-i0-handwrit", [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]], ["te"], 1],
      [502, "tg-t-i0-handwrit", [["tg", "\u0422\u043e\u04b7\u0438\u043a\u04e3"]], ["tg"], 1],
      [454, "th-t-i0-handwrit", [["th", "\u0e44\u0e17\u0e22"]], ["th"], 1],
      [508, "ti-t-i0-handwrit", [["ti", "\u1275\u130d\u122d\u129b"]], ["ti"], 1],
      [447, "tr-t-i0-handwrit", [["tr", "T\u00fcrk\u00e7e"]], ["tr"], 1],
      [448, "uk-t-i0-handwrit", [["uk", "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"]], ["uk"], 1],
      [486, "ur-t-i0-handwrit", [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 1],
      [503, "uz-t-i0-handwrit", [["uz", "O\u2018zbek"]], ["uz"], 1],
      [449, "vi-t-i0-handwrit", [["vi", "Ti\u1ebfng Vi\u1ec7t"]], ["vi"], 1],
      [482, "xh-t-i0-handwrit", [["xh", "IsiXhosa"]], ["xh"], 1],
      [510, "yi-t-i0-handwrit", [["yi", "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"]], ["yi"], 1],
      [450, "zh-t-i0-handwrit", [[F, "\u4e2d\u6587"]], null, 1],
      [451, "zh-hans-t-i0-handwrit", [[F, "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]], [F], 1],
      [452, "zh-hant-t-i0-handwrit", [[G, "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09"]], [G], 1],
      [475, "zh-yue-t-i0-handwrit", [["zh-yue", "\u7cb5\u8a9e"]], ["zh-yue"], 1],
      [460, "zu-t-i0-handwrit", [["zu", "IsiZulu"]], ["zu"], 1],
      [238, "see-t-k0-und", [["see", "On\u00f6dowa\u02bcga:\u02bc"]], ["see"], 0],
      [214, "ti-t-k0-und", [["ti", "\u130d\u12d5\u12dd"]], ["ti"], 0],
      [215, "mr-t-k0-und", [["mr", xa]], ["mr"], 0],
      [241, "mr-t-k0-devanaga", [["mr", ya]], ["mr"], 0],
      [216, "ht-t-k0-und", [["ht", fa]], ["ht"], 0],
      [47, "pt-br-t-i0-und", [[B, na]], null, 38],
      [217, "nl-t-k0-intl", [[v, r]], null, 0],
      [218, "fr-t-k0-intl", [[v, r]], ["fr"], 0],
      [219, "de-t-k0-intl", [[v, r]], ["de"], 0],
      [220, "it-t-k0-intl", [[v, r]], ["it"], 0],
      [221, "pt-br-t-k0-intl", [[v, r]], [B], 0],
      [222, "pt-pt-t-k0-intl", [[v, r]], [C], 0],
      [223, "es-t-k0-intl", [[v, r]], ["es"], 0],
      [224, "cy-t-k0-und", [[v, n]], ["cy"], 0],
      [225, "ga-t-k0-und", [[v, n]], ["ga"], 0],
      [369, "ga-t-k0-accents", [[v, "Irish"]], null, 0],
      [226, "id-t-k0-und", [[v, n]], ["id"], 0],
      [227, "jw-t-k0-und", [[v, n]], ["jw"], 0],
      [228, "ms-t-k0-und", [[v, n]], ["ms"], 0],
      [229, "sw-t-k0-und", [[v, n]], ["sw"], 0],
      [230, "tl-t-k0-und", [[v, n]], ["tl"], 0],
      [
        231,
        "my-t-k0-myansan",
        [["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)"]],
        ["my"],
        0
      ],
      [236, "iu-t-k0-nunavik", [[v, "Nunavik Inuktitut"]], ["iu"], 0],
      [237, "iu-t-k0-nunavut", [[v, "Nunavut Inuktitut"]], ["iu"], 0],
      [245, "iu-t-k0-inuktitu", [[v, "Inuktitut Unicode"]], ["iu"], 0],
      [600, "en-t-i0-voice", [[v, da]], null, 43],
      [601, "zh-hans-t-i0-voice", [["zh", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]], null, 43],
      [240, "lis-t-k0-und", [["lis", "\ua4e1\ua4f2\ua4e2\ua4f4"]], ["lis"], 0],
      [493, "und-t-i0-handwrit", [[v, "Emoji & Symbol"]], ["mul"], 1],
      [351, "co-t-k0-accents", [[v, "Corsican"]], null, 0],
      [352, "fy-t-k0-accents", [[v, "West Frisian"]], null, 0],
      [353, "gd-t-k0-accents", [[v, "Scots Gaelic"]], null, 0],
      [244, "haw-t-k0-und", [["haw", ua]], ["haw"], 0],
      [354, "haw-t-k0-accents", [[v, "Hawaiian"]], null, 0],
      [355, "lb-t-k0-accents", [[v, "Luxembourgish"]], null, 0],
      [243, "sd-t-k0-und", [[v, "Sindhi"]], ["sd"], 0],
      [356, "sm-t-k0-accents", [[v, "Samoan"]], null, 0],
      [358, "de-t-k0-accents", [["de", ba]], null, 0],
      [359, "es-t-k0-accents", [["es", ea]], null, 0],
      [360, "fr-t-k0-accents", [["fr", fa]], null, 0],
      [361, "it-t-k0-accents", [["it", ia]], null, 0],
      [362, "nl-t-k0-accents", [["nl", ka]], null, 0],
      [363, "pl-t-k0-accents", [["pl", ma]], null, 0],
      [364, "pt-br-t-k0-accents", [[B, oa]], null, 0],
      [365, "pt-pt-t-k0-accents", [[C, pa]], null, 0],
      [366, "tr-t-k0-f-accents", [["tr", "T\u00fcrk\u00e7e - F"]], null, 0],
      [367, "tr-t-k0-q-accents", [["tr", "T\u00fcrk\u00e7e - Q"]], null, 0],
      [368, "ku-t-k0-und", [["ku", "Kurd\u00ee Bedirxan"]], ["ku"], 0],
      [56, "ko-t-i0-und", [["ko", "\ud55c\uad6d\uc5b4"]], null, 45],
      [58, "ja-t-i0-mozcus", [["ja", "\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]], null, 28],
      [57, "ja-t-i0-mozcjp", [["ja", "\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]], null, 28],
      [59, "yue-hant-t-i0-yale", [[G, "\u5ee3\u6771\u8a71"]], null, 33],
      [55, "th-t-i0-und", [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]], ["th"], 46, [18]],
      [
        248,
        "osa-t-k0-und",
        [["osa", "\ud801\udccf\ud801\udcd8\ud801\udcfb\ud801\udcd8\ud801\udcfb\ud801\udcdf \ud801\udcbb\ud801\udcdf"]],
        ["osa"],
        0,
        null,
        ["vkd_osa"]
      ],
      [
        247,
        "ff-t-k0-adlm",
        [
          [
            "ff_Adlm",
            "\ud83a\udd06\ud83a\udd35\ud83a\udd24\ud83a\udd22\ud83a\udd2a/\ud83a\udd0a\ud83a\udd35\ud83a\udd24\ud83a\udd2c\ud83a\udd35\ud83a\udd24\ud83a\udd23\ud83a\udd2b"
          ]
        ],
        ["ff"],
        0,
        null,
        ["vkd_ff"]
      ],
      [249, "ccp-t-k0-und", [["ccp", "\ud804\udd0c\ud804\udd0b\ud804\udd34\ud804\udd1f\ud804\udd33\ud804\udd26"]], ["ccp"], 0],
      [251, "hi-t-k0-phone", [["hi", za]], null, 0],
      [252, "mr-t-k0-phone", [["mr", za]], null, 0],
      [250, "gu-t-k0-phone2", [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)"]], null, 0],
      [253, "oj-t-k0-ojibwe", [[v, "Ojibwe Left Dot - E Finals"]], ["oj"], 0],
      [254, "one-t-k0-und", [["one", "On\u028cyote\u0294a\u00b7k\u00e1\u00b7"]], ["one"], 0],
      [255, "mez-t-k0-und", [["mez", "Oma\u035eeqnome"]], ["mez"], 0],
      [
        257,
        "rhg-rohg-t-k0-und",
        [["rhg", "\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d"]],
        ["rhg"],
        0
      ],
      [258, "crk-t-k0-phone", [["crk", "\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"]], ["crk"], 0],
      [259, "myh-t-k0-und", [["myh", "Q\u02b7i\u00b7q\u02b7i\u00b7di\u010d\u010daq"]], ["myh"], 0],
      [260, "win-t-k0-und", [["win", "Hooc\u0105k"]], ["win"], 0]
    ],
    function (a) {
      var b = new Zc(a);
      if ((a = Wc(xc(Pc(b, 2)), ""))) (hd[a] = b), Vc(b);
      Yb(Tc(b), function (c) {
        c == G ? (c = "zh-Hant") : c == F && (c = "zh-Hans");
        be[c] || (be[c] = []);
        be[c].push(b);
      });
    }
  );
  Y.prototype.get = function (a) {
    a = localStorage[String(a)];
    return void 0 !== a ? JSON.parse(a) : null;
  };
  Y.prototype.set = function (a, b) {
    void 0 !== b ? (localStorage[String(a)] = JSON.stringify(b)) : localStorage.removeItem(String(a));
  };
  var dd =
    "google.com facebook.com youtube.com yahoo.com baidu.com wikipedia.org qq.com live.com taobao.com linkedin.com twitter.com sina.com.cn amazon.com hao123.com google.co.in blogspot.com weibo.com wordpress.com yahoo.co.jp 163.com 360.cn yandex.ru bing.com tmall.com vk.com ebay.com sohu.com google.de pinterest.com ask.com google.co.uk soso.com msn.com google.fr tumblr.com google.co.jp mail.ru instagram.com microsoft.com google.com.br google.ru xvideos.com paypal.com imdb.com apple.com google.es google.it amazon.co.jp craigslist.org neobux.com imgur.com stackoverflow.com xhamster.com google.com.mx ifeng.com google.com.hk bbc.co.uk adobe.com xinhuanet.com blogger.com fc2.com cnn.com google.ca adcash.com reddit.com go.com t.co akamaihd.net vube.com people.com.cn wordpress.org conduit.com alipay.com youku.com odnoklassniki.ru googleusercontent.com google.com.tr flickr.com aliexpress.com godaddy.com huffingtonpost.com ku6.com gmw.cn alibaba.com pornhub.com about.com amazon.de blogspot.in google.com.au ebay.de google.pl bp.blogspot.com kickass.to thepiratebay.se rakuten.co.jp cnet.com indiatimes.com xnxx.com ebay.co.uk themeforest.net aol.com amazonaws.com amazon.co.uk youporn.com uol.com.br google.com.sa dropbox.com google.com.ar redtube.com livejasmin.com secureserver.net nytimes.com slideshare.net globo.com google.com.eg pixnet.net adf.ly ameblo.jp mozilla.org netflix.com dailymotion.com vimeo.com dailymail.co.uk weather.com espn.go.com china.com google.nl booking.com google.com.pk wikimedia.org buzzfeed.com directrev.com fiverr.com livejournal.com deviantart.com google.com.tw yelp.com flipkart.com wikia.com hootsuite.com blogfa.com sogou.com etsy.com outbrain.com m2newmedia.com developunit.info livedoor.com w3schools.com forbes.com 4shared.com badoo.com sourceforge.net soundcloud.com files.wordpress.com mediafire.com theguardian.com clkmon.com archive.org torrentz.eu google.co.ve bankofamerica.com addthis.com liveinternet.ru ask.fm china.com.cn indeed.com salesforce.com foxnews.com aweber.com gameforge.com wikihow.com google.co.th google.co.za avg.com stumbleupon.com hostgator.com chase.com answers.com softonic.com google.gr skype.com sharelive.net bet365.com naver.com statcounter.com google.co.id github.com google.com.co espncricinfo.com reference.com nicovideo.jp java.com allegro.pl google.be onet.pl google.com.ua stackexchange.com spiegel.de google.com.ng google.com.vn shutterstock.com mailchimp.com tube8.com pcpop.com gamer.com.tw walmart.com wsj.com so.com tripadvisor.com goo.ne.jp wellsfargo.com 39.net zillow.com wix.com google.ro photobucket.com media.tumblr.com bild.de pandora.com wordreference.com google.se babylon.com naver.jp bleacherreport.com weebly.com thefreedictionary.com warriorforum.com mashable.com zedo.com taringa.net loading-delivery1.com popads.net ups.com blogspot.com.es google.dz jd.com it168.com google.at google.com.ph leboncoin.fr php.net businessinsider.com goodreads.com rutracker.org telegraph.co.uk rediff.com dmm.co.jp gmx.net ucoz.ru usatoday.com kaskus.co.id goal.com google.com.pe amazon.fr baomihua.com ettoday.net domaintools.com xcar.com.cn pchome.net rambler.ru ndtv.com comcast.net huanqiu.com google.ch usps.com tianya.cn hurriyet.com.tr wp.pl intuit.com quikr.com ikea.com avito.ru moz.com bitauto.com google.ae google.cl 9gag.com uploaded.net iqiyi.com delta-search.com thefreecamsecret.com fedex.com google.pt google.com.bd nbcnews.com google.com.sg web.de codecanyon.net goodgamestudios.com bitly.com hp.com ehow.com enet.com.cn milliyet.com.tr tmz.com constantcontact.com washingtonpost.com xywy.com disqus.com samsung.com chinaz.com mercadolivre.com.br onclickads.net extratorrent.cc olx.in orange.fr lpcloudsvr302.com scribd.com coccoc.com ci123.com hulu.com 4dsply.com snapdeal.com libero.it google.cz varzesh3.com nih.gov google.co.kr myntra.com free.fr meetup.com detik.com twitch.tv eazel.com accuweather.com zimbio.com adrotator.se mobile01.com infusionsoft.com speedtest.net microsoftonline.com yandex.ua clickbank.com chaturbate.com adnxs.com caijing.com.cn bluehost.com in.com xing.com reuters.com webmd.com bloomberg.com time.com marca.com americanexpress.com daum.net motherless.com mywebsearch.com gsmarena.com nba.com bestbuy.com bbc.com amazon.cn youjizz.com xuite.net kooora.com beeg.com intoday.in snapdo.com histats.com google.co.hu cj.com kwejk.pl putlocker.com hardsextube.com ebay.in zendesk.com force.com elpais.com zippyshare.com google.no hudong.com hdfcbank.com ad6media.fr google.az tagged.com google.ie jrj.com.cn douban.com ign.com techcrunch.com yesky.com kakaku.com getresponse.com groupon.com tinyurl.com seznam.cz pof.com ameba.jp feedly.com cloudfront.net cnzz.com doublepimp.com dell.com upworthy.com target.com siteadvisor.com w3.org aili.com rt.com xe.com elmundo.es list-manage.com ero-advertising.com odesk.com amazon.in ebay.com.au repubblica.it uimserv.net google.cn latimes.com t-online.de suning.com istockphoto.com doorblog.jp naukri.com viralnova.com nydailynews.com blogspot.de habrahabr.ru ebay.it qtrax.com lenta.ru zing.vn yaolan.com joomla.org mama.cn irs.gov justdial.com jimdo.com flipora.com surveymonkey.com google.dk cntv.cn doubleclick.com google.co.il gazeta.pl webmoney.ru freelancer.com drudgereport.com lenovo.com okcupid.com capitalone.com eyny.com jabong.com ck101.com issuu.com icicibank.com lady8844.com fbcdn.net blackhatworld.com match.com goo.gl quora.com xgo.com.cn life.com.tw abcnews.go.com subscene.com babytree.com informer.com retailmenot.com twoo.com sahibinden.com att.com elance.com rbc.ru google.fi nfl.com ig.com.br irctc.co.in 55bbs.com plugrush.com empowernetwork.com pch.com qvo6.com mysearchdial.com webcrawler.com 123rf.com lifehacker.com pcbaby.com.cn blogspot.ru xda-developers.com ce.cn oracle.com sberbank.ru kinopoisk.ru probux.com mercadolibre.com.ar commentcamarche.net ning.com teensdigest.com foxsports.com youm7.com exoclick.com amazon.it chip.de digg.com systweak.com typepad.com taleo.net".split(
      " "
    ); /*

 SPDX-License-Identifier: Apache-2.0
*/
  H = kd.prototype;
  H.ba = function (a) {
    a && /^https?:\/\//.test(a.url) && a.id && chrome.tabs.sendMessage(a.id, { up: ad(this.g) });
  };
  H.ca = function (a, b, c) {
    a.gp && c({ up: ad(this.g) });
    a.km && chrome.runtime.reload();
    a.up && (ld({ active: !0 }, a), jd(this));
    a.ua && (bd(a.ua), ld({ active: !0, currentWindow: !1 }, { up: a.ua }), jd(this));
    if (a.sq) {
      var d = this.i,
        e = a.url,
        f = a.pl,
        g = a.hd,
        h = a.fd;
      if (!g || JSON.stringify(g) === Ud) {
        d.abort();
        d.i = K(d.m, d, c);
        g = g || {};
        d.g.listen(u, d.i, !0);
        e = Za("/request" === e ? Rd : Sd);
        e = sd.exec(Va(e).toString());
        var k = e[3] || "";
        f = Ya(e[1] + bb("?", e[2] || "", f) + bb("#", k));
        d.g.send(Va(f).toString(), "POST", JSON.stringify(h), g);
      }
    }
    a.aq && this.i.abort();
    a.gl && chrome.tabs.executeScript(b.tab.id, { file: "layouts/" + a.gl + ".js" });
    a.gi && chrome.tabs.executeScript(b.tab.id, { file: "imeconfigs/" + a.gi + ".js" });
    return !!c;
  };
  H.O = function (a, b) {
    var c = b.url;
    if (a || (!b.frameId && /^https?:\/\//.test(c) && 0 != c.lastIndexOf("https://chrome.google.com/webstore", 0)))
      try {
        chrome.tabs.executeScript(b.tabId, { file: sa });
      } catch (d) {}
  };
  H.Y = function (a) {
    var b = this;
    chrome.tabs.get(a.sender.tab.id, function (c) {
      var d = b.o,
        e = d.test;
      c = (c = c.url.match(kc)[3] || null) ? decodeURI(c) : c;
      e.call(d, c) && md(b, a);
    });
  };
  H.R = function (a, b) {
    a.postMessage(b);
  };
  H.Z = function (a) {
    var b = this.g.get(1) || "",
      c = this.g.get(3) || !1,
      d = this.g.get(2) || [];
    switch (a) {
      case "toggle":
        this.g.set(10, b);
        this.g.set(29, c);
        b && this.g.set(3, !c);
        break;
      case "next":
        this.g.set(10, b);
        this.g.set(29, c);
        a = Cb(d, b);
        this.g.set(10, b);
        a != d.length - 1 || c ? a++ : (a = 0);
        (b = d[a]) && this.g.set(1, b);
        this.g.set(3, !!b);
        break;
      case "revert":
        a = this.g.get(10) || "";
        var e = this.g.get(29) || !1;
        this.g.set(10, b);
        this.g.set(29, c);
        this.g.set(1, a);
        this.g.set(3, e);
        !a || 0 <= Cb(d, a) || (d.push(a), this.g.set(2, d));
    }
    ld({ active: !0 }, { up: ad(this.g) });
    jd(this);
  };
  new kd();
}).call(this);
