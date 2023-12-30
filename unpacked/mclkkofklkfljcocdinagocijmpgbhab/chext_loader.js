(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var aa = "-t-k0-und",
    ba = "Android",
    ca = "Edge",
    da = "IFRAME",
    k = "INPUT",
    ea = "Invalid event type",
    fa = "TEXTAREA",
    ha = "bg-t-k0-qwerty",
    ia = "character",
    ja = "chr-t-und-latn-k0-und",
    ka = "compositionend",
    la = "cs-t-k0-qwertz",
    ma = "en-t-k0-dvorak",
    l = "function",
    na = "gu-t-und-latn-k0-qwerty",
    oa = "hi-t-k0-qwerty",
    pa = "hu-t-k0-101key",
    qa = "hy-hyr-t-k0-und",
    ra = "hy-hyt-t-k0-und",
    sa = "iPad",
    ta = "iPod",
    ua = "ja-hira-t-i0-und",
    va = "ja-t-ja-hira-i0-und",
    wa = "ka-t-k0-legacy",
    q = "keydown",
    r = "keypress",
    xa = "keyup",
    t = "latn_002",
    u = "number",
    v = "object",
    ya = "pa-guru-t-k0-und",
    za = "pa-guru-t-und-latn-k0-und",
    Aa = "ro-t-k0-extended",
    Ba = "ro-t-k0-legacy",
    Ca = "ru-t-k0-aatseel",
    Da = "ru-t-k0-qwerty",
    Ea = "ru-t-k0-yazhert",
    Fa = "sk-t-k0-qwerty",
    w = "string",
    Ga = "ta-t-k0-itrans",
    Ia = "ta-t-k0-typewriter",
    Ja = "th-t-k0-pattajoti",
    Ka = "tr-t-k0-legacy",
    La = "uk-t-k0-101key",
    Ma = "und-ethi-t-k0-und",
    x = "us_intl",
    Na = "uz-cyrl-t-k0-legacy",
    Oa = "uz-cyrl-t-k0-und",
    Pa = "vi-t-k0-legacy",
    Qa = "yue-hant-t-i0-und",
    Ra = "zh-hant-t-i0-pinyin",
    Sa = "zh-hant-t-i0-und",
    Ta = "zh-t-i0-pinyin",
    Ua = "zh-t-i0-wubi-1986",
    y,
    Va = function (a) {
      a = [v == typeof globalThis && globalThis, a, v == typeof window && window, v == typeof self && self, v == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    Ya = function (a, b) {
      if (b)
        a: {
          var c = Wa;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && null != b && Xa(c, a, { configurable: !0, writable: !0, value: b });
        }
    },
    ab = function (a, b) {
      a.prototype = Za(b.prototype);
      a.prototype.constructor = a;
      if ($a) $a(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.F = b.prototype;
    },
    bb = function (a) {
      var b = typeof a;
      b = b != v ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
      return "array" == b || (b == v && typeof a.length == u);
    },
    z = function (a) {
      var b = typeof a;
      return (b == v && null != a) || b == l;
    },
    A = function (a) {
      return (Object.prototype.hasOwnProperty.call(a, cb) && a[cb]) || (a[cb] = ++db);
    },
    eb = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    fb = function (a, b, c) {
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
    gb = function (a, b, c) {
      gb = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? eb : fb;
      return gb.apply(null, arguments);
    },
    B = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.F = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Qi = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    hb = function (a) {
      return a;
    },
    ib = function (a) {
      return a[a.length - 1];
    },
    C = function (a, b) {
      return 0 <= jb(a, b);
    },
    kb = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    lb = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (bb(d)) {
          var e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for (var g = 0; g < f; g++) a[e + g] = d[g];
        } else a.push(d);
      }
    },
    mb = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    G = function () {
      var a = F.navigator;
      return a && (a = a.userAgent) ? a : "";
    },
    ob = function (a) {
      return nb
        ? H
          ? H.brands.some(function (b) {
              return (b = b.brand) && -1 != b.indexOf(a);
            })
          : !1
        : !1;
    },
    I = function (a) {
      return -1 != G().indexOf(a);
    },
    J = function () {
      return nb ? !!H && 0 < H.brands.length : !1;
    },
    pb = function () {
      return J() ? !1 : I("Opera");
    },
    qb = function () {
      return J() ? !1 : I("Trident") || I("MSIE");
    },
    rb = function () {
      return I("Firefox") || I("FxiOS");
    },
    sb = function () {
      return J() ? ob("Chromium") : ((I("Chrome") || I("CriOS")) && !(J() ? 0 : I(ca))) || I("Silk");
    },
    tb = function () {
      var a = G();
      if (qb()) {
        var b = /rv: *([\d\.]*)/.exec(a);
        if (b && b[1]) a = b[1];
        else {
          b = "";
          var c = /MSIE +([\d\.]+)/.exec(a);
          if (c && c[1])
            if (((a = /Trident\/(\d.\d)/.exec(a)), "7.0" == c[1]))
              if (a && a[1])
                switch (a[1]) {
                  case "4.0":
                    b = "8.0";
                    break;
                  case "5.0":
                    b = "9.0";
                    break;
                  case "6.0":
                    b = "10.0";
                    break;
                  case "7.0":
                    b = "11.0";
                }
              else b = "7.0";
            else b = c[1];
          a = b;
        }
      } else a = "";
      return a;
    },
    ub = function () {
      if (J()) {
        var a = H.brands.find(function (b) {
          return "Internet Explorer" === b.brand;
        });
        if (!a || !a.version) return NaN;
        a = a.version.split(".");
      } else {
        a = tb();
        if ("" === a) return NaN;
        a = a.split(".");
      }
      return 0 === a.length ? NaN : Number(a[0]);
    },
    vb = function () {
      return nb ? !!H && !!H.platform : !1;
    },
    wb = function () {
      return I("iPhone") && !I(ta) && !I(sa);
    },
    xb = function () {
      return vb() ? "macOS" === H.platform : I("Macintosh");
    },
    yb = function (a) {
      yb[" "](a);
      return a;
    },
    zb = function () {
      var a = F.document;
      return a ? a.documentMode : void 0;
    },
    Ab = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    Cb = function (a) {
      var b = Bb;
      a: {
        for (var c in b)
          if (b[c] == a) {
            a = !0;
            break a;
          }
        a = !1;
      }
      return a;
    },
    Db = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    },
    Fb = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < Eb.length; f++) (c = Eb[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    },
    Gb = function (a) {
      this.ba = a;
      this.la = !0;
    },
    K = function (a, b) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0;
    },
    Hb = function (a, b) {
      this.width = a;
      this.height = b;
    },
    M = function (a) {
      return a ? new Ib(L(a)) : Jb || (Jb = new Ib());
    },
    Lb = function (a, b) {
      Ab(b, function (c, d) {
        c && typeof c == v && c.la && (c = c.ba.toString());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : Kb.hasOwnProperty(d)
          ? a.setAttribute(Kb[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    Mb = function (a) {
      return a ? N(a) : window;
    },
    N = function (a) {
      return a.parentWindow || a.defaultView;
    },
    Ob = function (a, b, c) {
      return Nb(document, arguments);
    },
    Nb = function (a, b) {
      var c = b[1],
        d = Pb(a, String(b[0]));
      c && (typeof c === w ? (d.className = c) : Array.isArray(c) ? (d.className = c.join(" ")) : Lb(d, c));
      2 < b.length && Qb(a, d, b);
      return d;
    },
    Qb = function (a, b, c) {
      function d(h) {
        h && b.appendChild(typeof h === w ? a.createTextNode(h) : h);
      }
      for (var e = 2; e < c.length; e++) {
        var f = c[e];
        if (!bb(f) || (z(f) && 0 < f.nodeType)) d(f);
        else {
          a: {
            if (f && typeof f.length == u) {
              if (z(f)) {
                var g = typeof f.item == l || typeof f.item == w;
                break a;
              }
              if (typeof f === l) {
                g = typeof f.item == l;
                break a;
              }
            }
            g = !1;
          }
          Rb(g ? kb(f) : f, d);
        }
      }
    },
    Pb = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    Sb = function (a) {
      if (1 != a.nodeType) return !1;
      switch (a.tagName) {
        case "APPLET":
        case "AREA":
        case "BASE":
        case "BR":
        case "COL":
        case "COMMAND":
        case "EMBED":
        case "FRAME":
        case "HR":
        case "IMG":
        case k:
        case da:
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case "SCRIPT":
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
          return !1;
      }
      return !0;
    },
    O = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    },
    Tb = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    },
    Xb = function (a, b) {
      if (a == b) return 0;
      if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
      if (P && !(9 <= Number(Ub))) {
        if (9 == a.nodeType) return -1;
        if (9 == b.nodeType) return 1;
      }
      if ("sourceIndex" in a || (a.parentNode && "sourceIndex" in a.parentNode)) {
        var c = 1 == a.nodeType,
          d = 1 == b.nodeType;
        if (c && d) return a.sourceIndex - b.sourceIndex;
        var e = a.parentNode,
          f = b.parentNode;
        return e == f
          ? Vb(a, b)
          : !c && Tb(e, b)
          ? -1 * Wb(a, b)
          : !d && Tb(f, a)
          ? Wb(b, a)
          : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex);
      }
      d = L(a);
      c = d.createRange();
      c.selectNode(a);
      c.collapse(!0);
      a = d.createRange();
      a.selectNode(b);
      a.collapse(!0);
      return c.compareBoundaryPoints(F.Range.START_TO_END, a);
    },
    Wb = function (a, b) {
      var c = a.parentNode;
      if (c == b) return -1;
      for (; b.parentNode != c; ) b = b.parentNode;
      return Vb(b, a);
    },
    Vb = function (a, b) {
      for (; (b = b.previousSibling); ) if (b == a) return -1;
      return 1;
    },
    Yb = function (a) {
      var b,
        c = arguments.length;
      if (!c) return null;
      if (1 == c) return arguments[0];
      var d = [],
        e = Infinity;
      for (b = 0; b < c; b++) {
        for (var f = [], g = arguments[b]; g; ) f.unshift(g), (g = g.parentNode);
        d.push(f);
        e = Math.min(e, f.length);
      }
      f = null;
      for (b = 0; b < e; b++) {
        g = d[0][b];
        for (var h = 1; h < c; h++) if (g != d[h][b]) return f;
        f = g;
      }
      return f;
    },
    L = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    $b = function (a) {
      var b = [];
      Zb(a, b, !1);
      return b.join("");
    },
    Zb = function (a, b, c) {
      if (!(a.nodeName in ac))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in bc) b.push(bc[a.nodeName]);
        else for (a = a.firstChild; a; ) Zb(a, b, c), (a = a.nextSibling);
    },
    cc = function (a) {
      try {
        var b = a && a.activeElement;
        return b && b.nodeName ? b : null;
      } catch (c) {
        return null;
      }
    },
    Ib = function (a) {
      this.g = a || F.document || document;
    },
    dc = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    },
    ec = function (a) {
      a && typeof a.Z == l && a.Z();
    },
    Q = function () {
      this.o = this.o;
      this.v = this.v;
    },
    fc = function (a, b) {
      this.type = a;
      this.h = this.target = b;
      this.defaultPrevented = this.i = !1;
    },
    R = function (a, b) {
      fc.call(this, a ? a.type : "");
      this.relatedTarget = this.h = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.charCode = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.m = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.g = null;
      if (a) {
        var c = (this.type = a.type),
          d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.h = b;
        if ((b = a.relatedTarget)) {
          if (gc) {
            a: {
              try {
                yb(b.nodeName);
                var e = !0;
                break a;
              } catch (f) {}
              e = !1;
            }
            e || (b = null);
          }
        } else "mouseover" == c ? (b = a.fromElement) : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d
          ? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
            (this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
            (this.screenX = d.screenX || 0),
            (this.screenY = d.screenY || 0))
          : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
            (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
            (this.screenX = a.screenX || 0),
            (this.screenY = a.screenY || 0));
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.key = a.key || "";
        this.charCode = a.charCode || (c == r ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.m = hc ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === w ? a.pointerType : ic[a.pointerType] || "";
        this.state = a.state;
        this.g = a;
        a.defaultPrevented && R.F.j.call(this);
      }
    },
    kc = function (a) {
      return !(!a || !a[jc]);
    },
    mc = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.I = e;
      this.key = ++lc;
      this.removed = this.U = !1;
    },
    nc = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.I = null;
    },
    oc = function (a) {
      this.src = a;
      this.g = {};
      this.h = 0;
    },
    pc = function (a, b) {
      var c = b.type;
      if (c in a.g) {
        var d = a.g[c],
          e = jb(d, b),
          f;
        (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
        f && (nc(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
      }
    },
    rc = function (a, b, c, d, e) {
      a = a.g[b.toString()];
      b = -1;
      a && (b = qc(a, c, d, e));
      return -1 < b ? a[b] : null;
    },
    qc = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.listener == b && f.capture == !!c && f.I == d) return e;
      }
      return -1;
    },
    tc = function (a, b, c, d, e) {
      if (d && d.once) return sc(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) tc(a, b[f], c, d, e);
        return null;
      }
      c = uc(c);
      return kc(a) ? a.listen(b, c, z(d) ? !!d.capture : !!d, e) : vc(a, b, c, !1, d, e);
    },
    vc = function (a, b, c, d, e, f) {
      if (!b) throw Error(ea);
      var g = z(e) ? !!e.capture : !!e,
        h = wc(a);
      h || (a[xc] = h = new oc(a));
      c = h.add(b, c, d, g, f);
      if (c.proxy) return c;
      d = yc();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) zc || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(Ac(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      Bc++;
      return c;
    },
    yc = function () {
      function a(c) {
        return b.call(a.src, a.listener, c);
      }
      var b = Cc;
      return a;
    },
    sc = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) sc(a, b[f], c, d, e);
        return null;
      }
      c = uc(c);
      return kc(a) ? a.g.add(String(b), c, !0, z(d) ? !!d.capture : !!d, e) : vc(a, b, c, !0, d, e);
    },
    Dc = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Dc(a, b[f], c, d, e);
      else
        (d = z(d) ? !!d.capture : !!d),
          (c = uc(c)),
          kc(a) ? a.g.remove(String(b), c, d, e) : a && (a = wc(a)) && (b = rc(a, b, c, d, e)) && Ec(b);
    },
    Ec = function (a) {
      if (typeof a !== u && a && !a.removed) {
        var b = a.src;
        if (kc(b)) pc(b.g, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(Ac(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          Bc--;
          (c = wc(b)) ? (pc(c, a), 0 == c.h && ((c.src = null), (b[xc] = null))) : nc(a);
        }
      }
    },
    Ac = function (a) {
      return a in Fc ? Fc[a] : (Fc[a] = "on" + a);
    },
    Cc = function (a, b) {
      if (a.removed) a = !0;
      else {
        b = new R(b, this);
        var c = a.listener,
          d = a.I || a.src;
        a.U && Ec(a);
        a = c.call(d, b);
      }
      return a;
    },
    wc = function (a) {
      a = a[xc];
      return a instanceof oc ? a : null;
    },
    uc = function (a) {
      if (typeof a === l) return a;
      a[Gc] ||
        (a[Gc] = function (b) {
          return a.handleEvent(b);
        });
      return a[Gc];
    },
    S = function () {
      Q.call(this);
      this.g = new oc(this);
      this.m = this;
      this.l = null;
    },
    Hc = function (a, b, c, d) {
      b = a.g.g[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var g = b[f];
        if (g && !g.removed && g.capture == c) {
          var h = g.listener,
            m = g.I || g.src;
          g.U && pc(a.g, g);
          e = !1 !== h.call(m, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    },
    Ic = function (a, b) {
      var c = L(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    },
    Jc = function (a, b) {
      return Ic(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
    },
    Lc = function (a, b) {
      if (b instanceof K) {
        var c = b.x;
        b = b.y;
      } else (c = b), (b = void 0);
      a.style.left = Kc(c);
      a.style.top = Kc(b);
    },
    Mc = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    },
    Nc = function (a) {
      var b = L(a),
        c = new K(0, 0);
      var d = b ? L(b) : document;
      d = !P || 9 <= Number(Ub) || "CSS1Compat" == M(d).g.compatMode ? d.documentElement : d.body;
      if (a == d) return c;
      a = Mc(a);
      d = M(b).g;
      b = d.scrollingElement ? d.scrollingElement : T || "CSS1Compat" != d.compatMode ? d.body || d.documentElement : d.documentElement;
      d = N(d);
      b =
        P && d.pageYOffset != b.scrollTop
          ? new K(b.scrollLeft, b.scrollTop)
          : new K(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Oc = function (a) {
      if (1 == a.nodeType) return (a = Mc(a)), new K(a.left, a.top);
      a = a.changedTouches ? a.changedTouches[0] : a;
      return new K(a.clientX, a.clientY);
    },
    Kc = function (a) {
      typeof a == u && (a += "px");
      return a;
    },
    Qc = function (a) {
      var b = Pc;
      if ("none" != Jc(a, "display")) return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = "hidden";
      c.position = "absolute";
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    },
    Pc = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = T && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? ((a = Mc(a)), new Hb(a.right - a.left, a.bottom - a.top)) : new Hb(b, c);
    },
    Rc = function (a, b) {
      if (/^\d+px?$/.test(b)) return parseInt(b, 10);
      var c = a.style.left,
        d = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = b;
      b = a.style.pixelLeft;
      a.style.left = c;
      a.runtimeStyle.left = d;
      return +b;
    },
    Vc = function (a) {
      var b = Jc(a, "fontSize");
      var c = ((c = b.match(Sc)) && c[0]) || null;
      if (b && "px" == c) return parseInt(b, 10);
      if (P) {
        if (String(c) in Tc) return Rc(a, b);
        if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in Uc)
          return (a = a.parentNode), (c = Jc(a, "fontSize")), Rc(a, b == c ? "1em" : b);
      }
      c = Ob("SPAN", { style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;" });
      a.appendChild(c);
      b = c.offsetHeight;
      O(c);
      return b;
    },
    Wc = function (a) {
      return (a = a.exec(G())) ? a[1] : "";
    },
    Xc = function (a) {
      return typeof a.className == w ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    Zc = function (a, b) {
      a = a.match(Yc);
      b = b.match(Yc);
      return a[3] == b[3] && a[1] == b[1] && a[4] == b[4];
    },
    ad = function (a) {
      if (!a.tagName || a.readOnly) return !1;
      switch (a.tagName.toUpperCase()) {
        case fa:
          return !0;
        case k:
          return C("EMAIL NUMBER SEARCH TEL TEXT URL".split(" "), a.type.toUpperCase());
        case da:
          try {
            var b = $c(a);
            return !!b && !!((b.designMode && "ON" == b.designMode.toUpperCase()) || (b.body && b.body.isContentEditable));
          } catch (c) {
            return !1;
          }
        default:
          return !!a.isContentEditable;
      }
    },
    $c = function (a) {
      var b = A(document),
        c = A(a),
        d = bd[b];
      d || (d = bd[b] = {});
      try {
        var e = window.location.href || "";
        if (!(c in d))
          if (a.src) {
            var f = a.src.indexOf("//"),
              g = 0 > f ? "N/A" : a.src.slice(0, f);
            d[c] = ("" != g && "http:" != g && "https:" != g) || Zc(a.src, e);
          } else d[c] = !0;
        return d[c] ? a.contentDocument || a.contentWindow.document : null;
      } catch (h) {
        return (d[c] = !1), null;
      }
    },
    cd = function (a) {
      a = a || document;
      var b = [],
        c = [];
      lb(b, (a || document).getElementsByTagName(da), (a || document).getElementsByTagName("FRAME"));
      b.forEach(function (d) {
        (d = $c(d)) && c.push(d);
      });
      return c;
    },
    U = function (a) {
      Q.call(this);
      this.h = a;
      this.g = {};
    },
    ed = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (dd[0] = c.toString()), (c = dd));
      for (var g = 0; g < c.length; g++) {
        var h = tc(b, c[g], d || a.handleEvent, e || !1, f || a.h || a);
        if (!h) break;
        a.g[h.key] = h;
      }
      return a;
    },
    fd = function (a, b, c, d, e, f) {
      if (Array.isArray(c)) for (var g = 0; g < c.length; g++) fd(a, b, c[g], d, e, f);
      else
        (d = d || a.handleEvent),
          (e = z(e) ? !!e.capture : !!e),
          (f = f || a.h || a),
          (d = uc(d)),
          (e = !!e),
          (c = kc(b) ? rc(b.g, String(c), d, e, f) : b ? ((b = wc(b)) ? rc(b, c, d, e, f) : null) : null),
          c && (Ec(c), delete a.g[c.key]);
    },
    gd = function (a, b) {
      if (typeof a !== l)
        if (a && typeof a.handleEvent == l) a = gb(a.handleEvent, a);
        else throw Error("Invalid listener argument");
      2147483647 < Number(b) || F.setTimeout(a, b || 0);
    },
    id = function (a) {
      S.call(this);
      this.h = {};
      this.s = bb(a) ? a[0] : a;
      this.j = null;
      this.i = new U(this);
      hd(this, a);
    },
    hd = function (a, b) {
      var c = P ? "focusin" : "focus",
        d = P ? "focusout" : "blur";
      (bb(b) ? b : [b]).forEach(function (e) {
        var f = A(e);
        this.h[f] || ((this.h[f] = !0), (e = T ? Mb(e) : e), this.i.listen(e, c, this.A, jd), this.i.listen(e, d, this.B, jd));
      }, a);
    },
    md = function (a, b, c) {
      if (a.h) {
        var d = kd;
        if (("kix" != d && "punch" != d && "trix" != d) || !P)
          (d = M(b)),
            cd(d.g).forEach(function (f) {
              try {
                hd(this, f);
              } catch (g) {}
            }, a);
        if ((b = cc(b))) {
          d = b;
          for (var e = b.tagName; e && (e == da || "FRAME" == e) && (!b.src || Zc(b.src, window.location.href)); ) {
            d = b.contentDocument || b.contentWindow.document;
            if (!d) break;
            hd(a, d);
            e = cc(d);
            if (!e) break;
            d = b;
            b = e;
            if ((e = b.tagName) && "BODY" == e.toUpperCase()) {
              b = d;
              break;
            }
          }
          ld(a, c, b);
        }
      }
    },
    ld = function (a, b, c) {
      if (c != a.j) {
        a.j = c;
        b = new R(b.g);
        b.target = c;
        b.type = "aec";
        var d;
        if ((c = a.l)) for (d = []; c; c = c.l) d.push(c);
        a = a.m;
        c = b.type || b;
        if (typeof b === w) b = new fc(b, a);
        else if (b instanceof fc) b.target = b.target || a;
        else {
          var e = b;
          b = new fc(c, a);
          Fb(b, e);
        }
        e = !0;
        if (d)
          for (var f = d.length - 1; !b.i && 0 <= f; f--) {
            var g = (b.h = d[f]);
            e = Hc(g, c, !0, b) && e;
          }
        b.i || ((g = b.h = a), (e = Hc(g, c, !0, b) && e), b.i || (e = Hc(g, c, !1, b) && e));
        if (d) for (f = 0; !b.i && f < d.length; f++) (g = b.h = d[f]), (e = Hc(g, c, !1, b) && e);
      }
    },
    nd = function () {},
    pd = function (a) {
      if (a instanceof nd) return a;
      if (typeof a.L == l) return a.L(!1);
      if (bb(a)) {
        var b = 0,
          c = new nd();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return od;
            if (b in a) return { value: a[b++], done: !1 };
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    V = function (a, b, c, d, e) {
      this.v = !!b;
      this.node = null;
      this.m = 0;
      this.B = !1;
      this.N = !c;
      a && qd(this, a, d);
      this.o = void 0 != e ? e : this.m || 0;
      this.v && (this.o *= -1);
    },
    qd = function (a, b, c, d) {
      if ((a.node = b)) a.m = typeof c === u ? c : 1 != a.node.nodeType ? 0 : a.v ? -1 : 1;
      typeof d === u && (a.o = d);
    },
    rd = function () {},
    sd = function (a) {
      for (var b = [], c = 0, d = a.M(); c < d; c++) b.push(a.H(c));
      return b;
    },
    td = function (a, b) {
      V.call(this, a, b, !0);
    },
    ud = function (a, b, c, d, e) {
      this.h = this.g = null;
      this.i = this.j = 0;
      this.l = !!e;
      if (a) {
        this.g = a;
        this.j = b;
        this.h = c;
        this.i = d;
        if (1 == a.nodeType && "BR" != a.tagName)
          if (((a = a.childNodes), (b = a[b]))) (this.g = b), (this.j = 0);
          else {
            a.length && (this.g = ib(a));
            var f = !0;
          }
        1 == c.nodeType && ((this.h = c.childNodes[d]) ? (this.i = 0) : (this.h = c));
      }
      V.call(this, this.l ? this.h : this.g, this.l, !0);
      f && this.next();
    },
    vd = function () {},
    wd = function (a, b) {
      a = a.g.getClientRects();
      return a.length ? ((a = b ? a[0] : ib(a)), new K(b ? a.left : a.right, b ? a.top : a.bottom)) : null;
    },
    W = function (a) {
      this.g = a;
    },
    xd = function (a) {
      var b = L(a).createRange();
      if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
      else if (Sb(a) || 3 == a.nodeType) {
        for (var c, d = a; (c = d.firstChild) && (Sb(c) || 3 == c.nodeType); ) d = c;
        b.setStart(d, 0);
        for (d = a; (c = d.lastChild) && (Sb(c) || 3 == c.nodeType); ) d = c;
        b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
      } else (c = a.parentNode), (a = Array.prototype.indexOf.call(c.childNodes, a)), b.setStart(c, a), b.setEnd(c, a + 1);
      return b;
    },
    yd = function (a, b, c, d) {
      var e = L(a).createRange();
      e.setStart(a, b);
      e.setEnd(c, d);
      return e;
    },
    zd = function (a) {
      this.g = a;
    },
    Ad = function (a) {
      this.g = a;
    },
    Bd = function (a) {
      return T ? new Ad(a) : gc ? new zd(a) : new W(a);
    },
    Cd = function () {
      this.i = this.h = this.j = this.g = this.m = null;
      this.l = !1;
    },
    Dd = function (a, b) {
      var c = new Cd();
      c.m = a;
      c.l = !!b;
      return c;
    },
    X = function (a) {
      var b;
      if (!(b = a.m)) {
        b = a.u();
        var c = a.G(),
          d = a.C(),
          e = a.K();
        b = T ? new Ad(yd(b, c, d, e)) : gc ? new zd(yd(b, c, d, e)) : new W(yd(b, c, d, e));
        b = a.m = b;
      }
      return b;
    },
    Ed = function () {},
    Fd = function () {
      this.i = this.h = this.g = null;
    },
    Gd = function (a) {
      if (!a.h && ((a.h = []), a.g)) for (var b = 0; b < a.g.length; b++) a.h.push(a.g.item(b));
      return a.h;
    },
    Hd = function (a) {
      a.i ||
        ((a.i = Gd(a).concat()),
        a.i.sort(function (b, c) {
          return b.sourceIndex - c.sourceIndex;
        }));
      return a.i;
    },
    Id = function (a) {
      this.i = this.h = this.g = null;
      a && ((this.i = Hd(a)), (this.g = this.i.shift()), (this.h = ib(this.i) || this.g));
      V.call(this, this.g, !1, !0);
    },
    Jd = function () {
      this.g = [];
      this.i = [];
      this.j = this.h = null;
    },
    Ld = function (a) {
      a.h ||
        ((a.h = sd(a)),
        a.h.sort(function (b, c) {
          var d = b.u();
          b = b.G();
          var e = c.u();
          c = c.G();
          return d == e && b == c ? 0 : Kd(d, b, e, c) ? 1 : -1;
        }));
      return a.h;
    },
    Md = function (a) {
      this.g = null;
      this.h = 0;
      a &&
        (this.g = Ld(a).map(function (b) {
          return pd(b);
        }));
      V.call(this, a ? this.A() : null, !1, !0);
    },
    Nd = function (a) {
      var b = !1;
      if (a.createRange)
        try {
          var c = a.createRange();
        } catch (e) {
          return null;
        }
      else if (a.rangeCount) {
        if (1 < a.rangeCount) {
          b = new Jd();
          c = 0;
          for (var d = a.rangeCount; c < d; c++) b.g.push(a.getRangeAt(c));
          return b;
        }
        c = a.getRangeAt(0);
        b = Kd(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset);
      } else return null;
      (a = c) && a.addElement ? ((b = new Fd()), (b.g = a), (a = b)) : (a = Dd(Bd(a), b));
      return a;
    },
    Kd = function (a, b, c, d) {
      if (a == c) return d < b;
      var e;
      if (1 == a.nodeType && b)
        if ((e = a.childNodes[b])) (a = e), (b = 0);
        else if (Tb(a, c)) return !0;
      if (1 == c.nodeType && d)
        if ((e = c.childNodes[d])) (c = e), (d = 0);
        else if (Tb(c, a)) return !1;
      return 0 < (Xb(a, c) || b - d);
    },
    Od = function (a) {
      for (var b = null, c = a.firstChild; c; ) {
        var d = c.nextSibling;
        3 == c.nodeType
          ? "" == c.nodeValue
            ? a.removeChild(c)
            : b
            ? ((b.nodeValue += c.nodeValue), a.removeChild(c))
            : (b = c)
          : (Od(c), (b = null));
        c = d;
      }
    },
    Qd = function (a, b) {
      return b ? Pd(a.u(), a.G()) : Pd(a.C(), a.K());
    },
    Ud = function (a) {
      var b = a.aa(),
        c = Rd(Qd(a, !b)),
        d = Sd(c),
        e = c.node.previousSibling;
      3 == c.node.nodeType && (c.node = null);
      var f = Rd(Qd(a, b)),
        g = Sd(f),
        h = f.node.previousSibling;
      3 == f.node.nodeType && (f.node = null);
      return function () {
        !c.node && e && ((c.node = e.nextSibling), c.node || (c = new Td(e, e.length || e.childNodes.length)));
        !f.node && h && ((f.node = h.nextSibling), f.node || (f = new Td(h, h.length || h.childNodes.length)));
        var m = c.node || d.node.firstChild || d.node,
          n = c.g,
          p = f.node || g.node.firstChild || g.node,
          D = f.g,
          E = new Cd();
        E.l = Kd(m, n, p, D);
        if (z(m) && 1 == m.nodeType && !Sb(m)) {
          var Ha = m.parentNode;
          n = Array.prototype.indexOf.call(Ha.childNodes, m);
          m = Ha;
        }
        z(p) && 1 == p.nodeType && !Sb(p) && ((Ha = p.parentNode), (D = Array.prototype.indexOf.call(Ha.childNodes, p)), (p = Ha));
        E.l ? ((E.g = p), (E.j = D), (E.h = m), (E.i = n)) : ((E.g = m), (E.j = n), (E.h = p), (E.i = D));
        return E;
      };
    },
    Rd = function (a) {
      var b;
      if (3 == a.node.nodeType)
        for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling) a.g += b.length || b.childNodes.length;
      else b = a.node.previousSibling;
      var c = a.node.parentNode;
      a.node = b ? b.nextSibling : c.firstChild;
      return a;
    },
    Td = function (a, b) {
      this.node = a;
      this.g = b;
    },
    Sd = function (a) {
      var b = a.node.parentNode;
      return new Td(b, Array.prototype.indexOf.call(b.childNodes, a.node));
    },
    Pd = function (a, b) {
      for (; 1 == a.nodeType; ) {
        var c = a.childNodes[b];
        if (c || a.lastChild) c ? ((a = c), (b = 0)) : ((a = a.lastChild), (b = a.length || a.childNodes.length));
        else break;
      }
      return new Td(a, b);
    },
    Vd = function (a) {
      var b = a.getBoundingClientRect();
      if (P) {
        var c = Oc(a);
        a = Qc(a);
        b.left = c.x;
        b.right = c.x + a.width;
        b.top = c.y;
        b.bottom = c.y + a.height;
      }
      return b;
    },
    Wd = function (a) {
      var b = M(a),
        c = 0;
      if (8 >= ub()) {
        var d = b.g.selection.createRange();
        if (d)
          try {
            var e = a.createTextRange(),
              f = e.duplicate();
            e.moveToBookmark(d.getBookmark());
            f.setEndPoint("EndToStart", e);
            c = f.text.length;
          } catch (n) {}
      } else c = a.selectionStart;
      d = "_h#" + A(a);
      var g = typeof d === w ? b.g.getElementById(d) : d;
      g ? dc(g) : (g = b.ja("PRE", { id: d }));
      g.parentNode || b.g.body.appendChild(g);
      var h = [];
      Rb(a.value, function (n, p, D) {
        h.push(" " == n && p + 1 != D.length && " " == D[p + 1] ? "\u00a0" : n);
      });
      h = h.join("");
      b.Y(g, b.g.createTextNode(String(h.substring(0, c))));
      d = Pb(b.g, "SPAN");
      d.appendChild(b.g.createTextNode("\u200b"));
      b.Y(g, d);
      b.Y(g, b.g.createTextNode(String(h.substring(c) + " ")));
      b = a.classList ? a.classList : Xc(a).match(/\S+/g) || [];
      Array.prototype.forEach.call(b, function (n) {
        var p = g;
        if (p.classList) p.classList.add(n);
        else if (p.classList ? !p.classList.contains(n) : !C(p.classList ? p.classList : Xc(p).match(/\S+/g) || [], n)) {
          var D = Xc(p);
          n = D + (0 < D.length ? " " + n : n);
          typeof p.className == w ? (p.className = n) : p.setAttribute && p.setAttribute("class", n);
        }
      });
      var m = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
      "font-family font-size font-weight font-style text-transform text-decoration letter-spacing word-spacing line-height text-align vertical-align direction width height margin-top margin-right margin-bottom margin-left padding-top padding-right padding-bottom padding-left border-top-width border-right-width border-bottom-width border-left-width border-top-style border-right-style border-bottom-style border-left-style overflow-x overflow-y"
        .split(" ")
        .forEach(function (n) {
          try {
            var p;
            (p = Ic(a, n) || (a.currentStyle ? a.currentStyle[n] : null) || a.style[n]) && (m += n + ":" + p + ";");
          } catch (D) {}
        });
      g.style.cssText = m;
      b = Jc(a, "overflowX");
      g.style.overflowX = b && "visible" != b ? b : "auto";
      b = Jc(a, "overflowY");
      g.style.overflowY = b && "visible" != b ? b : "auto";
      g.scrollTop = a.scrollTop;
      g.scrollLeft = a.scrollLeft;
      Lc(g, Nc(a));
      b = Vd(d);
      return a.tagName.toUpperCase() == k ? new K(b.left, Math.ceil(Oc(a).y + Qc(a).height)) : new K(b.left, Math.ceil(b.bottom));
    },
    Xd = function () {},
    Yd = function (a, b) {
      this.g = a instanceof K ? a : new K(a, b);
    },
    Zd = function (a) {
      switch (a.type) {
        case q:
        case r:
          if (a.ctrlKey || a.metaKey || a.altKey || (a.shiftKey && 32 == a.keyCode)) return !0;
          break;
        case "click":
          if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey) return !0;
          break;
        case "key":
          if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey || a.m) return !0;
      }
      return !1;
    },
    $d = function (a) {
      a instanceof R && (a = a.g);
      if (a.getAttribute) {
        if (a.getAttribute("isFake")) return !0;
      } else if (a.isFake) return !0;
      return !1;
    },
    Y = function (a, b, c, d) {
      c = void 0 === c ? 0 : c;
      var e = N(M(a).g),
        f = e.document,
        g = [q, r, xa];
      try {
        if (f.createEvent) {
          if ("chext" != kd || (b != ae && b != ka)) {
            var h = f.createEvent("Events");
            h.initEvent(b, !0, !0);
            h.view = e;
            h.isFake = !0;
            h.charCode = 0;
            h.keyCode = c;
            if (d) for (var m in d) h[m] = d[m];
          } else (h = f.createEvent("CustomEvent")), h.initCustomEvent(b, !0, !0, d);
          a.dispatchEvent(h);
        } else if (C(g, b) && f.createEventObject && a.fireEvent) {
          h = f.createEventObject();
          h.bubbles = !0;
          h.cancelable = !0;
          h.view = e;
          h.ctrlKey = !1;
          h.altKey = !1;
          h.shiftKey = !0;
          h.metaKey = !1;
          h.keyCode = c;
          if (h.setAttribute && (h.setAttribute("isFake", !0), d)) for (var n in d) h.setAttribute(n, d[n]);
          a.fireEvent("on" + b, h);
        }
      } catch (p) {}
    },
    be = function (a, b, c) {
      switch (b) {
        case 1:
        case 2:
        case 4:
        case 8:
          Y(a, q, 229);
          Y(a, "compositionstart");
          Y(a, "compositionupdate");
          break;
        case 3:
        case 5:
        case 6:
        case 9:
          var d = {};
          c && (d.data = c);
          gd(function () {
            Y(a, ka, void 0, d);
            Y(a, ae, void 0, d);
            Y(a, "input");
            Y(a, xa);
          });
      }
    },
    ce = function (a) {
      var b = a.nodeName.toUpperCase();
      this.j = b == da;
      this.l = b != fa && b != k;
      this.i = a;
      this.h = null;
      this.g = M(this.h);
      this.m = {};
    },
    Z = function (a) {
      var b = a.h || (a.j ? (a.i.contentDocument || a.i.contentWindow.document || a.i.document).body : a.i);
      a.h != b && ((a.h = b), (a.g = M(b)));
      return b;
    },
    ee = function (a, b) {
      if (0 > b) {
        b = -b;
        var c = Z(a);
        if (c) {
          var d = "",
            e = a.g.g;
          e.selection && !de
            ? ((a = e.selection.createRange()),
              a.collapse(!0),
              a.moveEnd("word", -1),
              (d = a.text.length > b ? a.text.slice(0, b) : a.text))
            : c.selectionEnd
            ? (d = c.value.slice(c.selectionStart, Math.min(c.value.length, c.selectionStart + b)))
            : ((c = N(a.g.g).getSelection()),
              0 < c.rangeCount &&
                ((a = c.getRangeAt(0).endContainer),
                (c = c.getRangeAt(0).endOffset),
                3 == a.nodeType && (d = a.nodeValue.slice(c, Math.min(a.nodeValue.length, c + b)))));
          a = d;
        } else a = "";
        return a;
      }
      c = Z(a);
      if (!c) return "";
      d = "";
      e = a.g.g;
      e.selection && !de
        ? ((a = e.selection.createRange()), a.collapse(!0), a.moveStart("word", -1), (d = a.text.length > b ? a.text.slice(-b) : a.text))
        : c.selectionStart
        ? (d = c.value.slice(Math.max(0, c.selectionStart - b), c.selectionStart))
        : ((c = N(a.g.g).getSelection()),
          0 < c.rangeCount &&
            ((a = c.getRangeAt(0).startContainer),
            (c = c.getRangeAt(0).startOffset),
            3 == a.nodeType && (d = a.nodeValue.slice(Math.max(0, c - b), c))));
      return d;
    },
    fe = function (a) {
      var b = Z(a);
      b && (a.j ? N(a.g.g).focus() : b.focus());
    },
    je = function (a) {
      this.code = a;
      this.type = null;
      0 <= this.code.indexOf("-i0")
        ? ((this.type = "im"), mb(this.code, "-handwrit") ? (this.type = "hw") : mb(this.code, "-voice") && (this.type = "vo"))
        : 0 <= this.code.indexOf("-k0")
        ? (this.type = "vkd")
        : 0 == this.code.lastIndexOf("xkb", 0) && (this.type = "xkb");
      a = this.code.split(/-t|-i0|-k0|:/);
      "yue-hant" === a[0] && (a[0] = "zh-HK");
      switch (this.code) {
        case Qa:
          a[0] = "zh-HK";
          break;
        case Ta:
        case Ua:
          a[0] = "zh-Hans";
      }
      if ("vkd" === this.type && !ge[this.code] && !he[this.code]) {
        var b = this.code.split("-t-");
        a = b[0];
        b = b[1];
        a = a.replace(/-/g, "_");
        "en_us" === a && (a = "us");
        (C(ie, a) && ("und-latn-k0-und" === b || "k0-und" === b)) ||
          "k0-und" === b ||
          ((a = b.match(/k0-(.*)/)), a[1] && a[1].replace("qwerty", "phone").replace("-", "_"));
      }
    },
    me = function (a) {
      if (!a) return null;
      if ("nacl_mozc_jp" === a || "nacl_mozc_us" === a) a = va;
      0 != a.lastIndexOf("xkb", 0) && (Cb(a) || (a = ke(a)), (a = a.replace(/_/g, "-")), Cb(a) || (a = ke(a + "-und")));
      return le[a] ? le[a] : Cb(a) ? ((le[a] = new je(a)), le[a]) : null;
    },
    ke = function (a) {
      if (ne[a]) return ne[a];
      if ("vkd_iw" === a) return "he-t-k0-und";
      if ("im_t13n_iw" === a) return "he-t-i0-und";
      if ("tr-t-k0-lagacy" === a) return Ka;
      var b = a.split("_"),
        c = "";
      0 == a.lastIndexOf("im_t13n", 0)
        ? (c = b[2] + "-t-i0-und")
        : 0 == a.lastIndexOf("vkd_", 0) &&
          (2 === b.length
            ? (c = b[1] + aa)
            : C(ie, b[1])
            ? (c = "inscript" === b[2] ? b[1] + aa : b[1] + "-t-und-latn-k0-und")
            : ((c = b[1] + "-t-k0-" + b[2]), Cb(c) || (c = b[1] + "-" + b[2] + aa)));
      return Cb(c) ? c : a;
    },
    qe = function () {
      Q.call(this);
      this.h = {};
      this.m = {};
      this.g = [];
      this.j = oe;
      this.i = new U(this);
      pe(this);
    },
    ue = function () {
      var a = A(re);
      se[a] || (se[a] = new qe());
      te = se[a];
      pe(te);
    },
    pe = function (a) {
      a.g = cd(a.j.g);
      for (var b in a.h) ve(a, b, a.l);
      ve(a, r, a.s);
    },
    ve = function (a, b, c) {
      ed(a.i, a.j.g, b, c, !0, a);
      Rb(
        a.g,
        function (d) {
          try {
            ed(this.i, d, b, c, !0, this);
          } catch (e) {}
        },
        a
      );
    },
    we = function (a, b, c) {
      fd(a.i, a.j.g, b, c, !0, a);
      Rb(
        a.g,
        function (d) {
          try {
            fd(this.i, d, b, c, !0, this);
          } catch (e) {}
        },
        a
      );
    },
    ye = function (a, b, c, d, e) {
      var f = b.ownerDocument,
        g = !1;
      a.g = xe(a.g, function (m) {
        try {
          m == f && (g = !0);
        } catch (n) {
          return !1;
        }
        return !0;
      });
      if (f && f != a.j.g && !g) {
        a.g.push(f);
        try {
          ed(a.i, f, c, a.l, !0, a);
        } catch (m) {}
      }
      if (c)
        if (Array.isArray(c)) for (var h = 0; h < c.length; h++) ye(a, b, c[h], d, e);
        else {
          h = a.h[c];
          h || ((h = {}), (a.h[c] = h), ve(a, c, a.l));
          a = h[A(b)];
          a || ((a = []), (h[A(b)] = a));
          b = null;
          for (c = 0; c < a.length; c++) if (((b = a[c]), b.V(d, e))) return;
          b = new ze(d, e);
          a.push(b);
        }
      else throw Error(ea);
    },
    Ae = function (a, b, c, d, e) {
      if (c)
        if (Array.isArray(c)) for (var f = 0; f < c.length; f++) Ae(a, b, c[f], d, e);
        else {
          if ((f = a.h[c])) {
            var g = f[A(b)];
            if (g) {
              for (var h = 0; h < g.length; h++)
                if (g[h].V(d, e)) {
                  Array.prototype.splice.call(g, h, 1);
                  break;
                }
              0 == g.length && delete f[A(b)];
            }
            a: {
              for (var m in f) {
                b = !1;
                break a;
              }
              b = !0;
            }
            b && (delete a.h[c], we(a, c, a.l));
          }
        }
      else throw Error(ea);
    },
    Ce = function () {
      if (te) return te;
      Be.listen("a", ue, !1, void 0);
      ue();
      return te;
    },
    De = function (a, b, c, d) {
      ye(Ce(), a, b, c, d);
    },
    ze = function (a, b) {
      this.listener = a;
      this.I = b;
    },
    Ee = function (a) {
      Q.call(this);
      this.da = this.s = !1;
      this.ha = "inner_frame_" + a;
      this.l = {};
      this.N = [];
      this.A = new U(this);
      this.m = 0;
      this.ca = new id(document);
      this.A.listen(this.ca, "aec", this.ea);
      this.ea();
    },
    Ge = function (a) {
      if (a.h) {
        var b = Z(a.h);
        if (b) {
          var c = M(b),
            d = b.nodeName.toUpperCase();
          if (8 <= Number(Ub) && !(9 <= Number(Ub)) && b.tagName.toUpperCase() == fa) {
            var e = c.g.selection.createRange();
            var f = e.getBoundingClientRect();
            var g = 0;
            d = 0;
            try {
              d = Vc(b) + 2;
            } catch (p) {
              d = 16;
            }
            if ("rtl" == Jc(b, "direction")) {
              for (
                var h = e.duplicate();
                h.boundingHeight <= d && h.htmlText == h.text && ((g = e.boundingLeft - h.boundingLeft), 0 != h.moveStart(ia, -1));

              );
              e = Nc(b).x;
              g = Math.max(f.left - g, e);
            } else g = f.left;
            f = new K(g, f.top + d);
          } else if (d == fa || d == k) f = Wd(b);
          else
            b: {
              h = void 0 === h ? null : h;
              if (!h) h = (d = (N(c.g) || window).getSelection()) && Nd(d);
              else if (3 == h.u().nodeType && 3 == h.C().nodeType && ((d = wd(X(h), !0)), (e = wd(X(h), !1)), d && e)) {
                f = new K(d.x, e.y);
                break b;
              }
              if (h) {
                var m = Pb(c.g, "SPAN");
                m.appendChild(c.g.createTextNode("\u200b"));
                8 >= ub()
                  ? ((d = null),
                    h.J() || ((d = h.S()), h.collapse(!1)),
                    (m = h.ga(m)),
                    d && (h.collapse(!0), h.R().moveStart(ia, 0 - d.length), h.select()))
                  : h.T(m, !1);
                d = Vd(m);
                e = m.parentNode;
                c.ia(m);
                if (e) {
                  if (h)
                    c: {
                      (f = Ud(h)), (g = h.O()), (g = 1 == g.nodeType ? g : g.parentNode);
                      for (h = 0; g; ) {
                        m = g && g.nodeName;
                        if (
                          g &&
                          ("block" == (1 != g.nodeType ? null : P ? (g.currentStyle ? g.currentStyle.display : null) : Ic(g, "display")) ||
                            "TD" == m ||
                            "TABLE" == m ||
                            "LI" == m)
                        )
                          break c;
                        g = g.parentNode;
                        h++;
                      }
                      g = null;
                    }
                  g ? ((g = Yb(g, e)), P ? Od(g) : g.normalize()) : e && (P ? Od(e) : e.normalize());
                  f && f();
                }
                f = new K(d.left, d.bottom);
              } else f = new K(0, 0);
            }
          d = f.x;
          g = f.y;
          b = Vd(b);
          d = d > b.right ? b.right : d;
          d = d < b.left ? b.left : d;
          g = g > b.bottom ? b.bottom : g;
          g = g < b.top ? b.top : g;
          f.x = d;
          f.y = g;
          c = N(c.g);
          try {
            for (; c && c != Fe && c.frameElement; c = c.parent) {
              var n = Oc(c.frameElement);
              f.x += n.x;
              f.y += n.y;
            }
          } catch (p) {}
          n = new Yd(f.x, f.y);
        } else n = null;
        n && a.g.postMessage({ cursorPos: [n.g.x, n.g.y] });
      }
    },
    He = function (a) {
      if (a.h) {
        var b = ee(a.h, 20);
        a.g.postMessage({ text: [b] });
      }
    },
    Ie = function (a) {
      a.m && (clearTimeout(a.m), (a.m = 0));
    },
    Ke = function (a, b) {
      switch (a.i.type) {
        case "vkd":
          return Je(b);
        case "hw":
          var c = [32, 13, 37, 39, 27, 8];
          return !a.s || !C(c, b.keyCode);
        case "im":
          return (
            (c = !1),
            /^(zh|yue)/.test(a.i.code) ? (c = a.l.tsbc && !a.l.tlang) : /^ja/.test(a.i.code) || (c = !a.l.tlang),
            c || (!a.s && Je(b))
          );
        default:
          return !0;
      }
    },
    Me = function (a, b, c) {
      a.g.postMessage({ event: c });
      (!Zd(b) || Le(a, b)) && ((b.type === q && Je(b)) || b.type === r) && b.j();
    },
    Ne = function () {
      var a = document.activeElement;
      return a ? (ad(a) ? a : null) : null;
    },
    Le = function (a, b) {
      16 !== b.keyCode || (b.type !== q && !a.da)
        ? ((a = a.i),
          (b = (Oe || "im" !== a.type ? 0 : /^(zh|yue)/.test(a.code))
            ? (32 === b.keyCode && b.shiftKey) || (190 === b.keyCode && b.ctrlKey)
            : !1))
        : (b = !0);
      return b;
    },
    Je = function (a) {
      return C([13, 9], a.keyCode) ? !0 : a.type === r ? !1 : C([8, 27, 37, 39, 38, 40, 34, 33, 46, 36, 35], a.keyCode);
    },
    Pe = function () {
      try {
        ((window.top == window || window.parent) && window.parent.document && window.parent.document.domain == window.document.domain) ||
          new Ee(new Date().getTime());
      } catch (a) {
        new Ee(new Date().getTime());
      }
    },
    Xa =
      typeof Object.defineProperties == l
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    Wa = Va(this),
    Za =
      typeof Object.create == l
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    Qe;
  if (typeof Object.setPrototypeOf == l) Qe = Object.setPrototypeOf;
  else {
    var Re;
    a: {
      var Se = { a: !0 },
        Te = {};
      try {
        Te.__proto__ = Se;
        Re = Te.a;
        break a;
      } catch (a) {}
      Re = !1;
    }
    Qe = Re
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var $a = Qe;
  Ya("Array.prototype.find", function (a) {
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
  var F = this || self,
    cb = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    db = 0;
  var Jb;
  var jb = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if (typeof a === w) return typeof b !== w || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Rb = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = typeof a === w ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
        },
    xe = Array.prototype.filter
      ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = [], e = 0, f = typeof a === w ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
              var h = f[g];
              b.call(void 0, h, g, a) && (d[e++] = h);
            }
          return d;
        },
    Ue = Array.prototype.some
      ? function (a, b) {
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = typeof a === w ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
  var nb, Ve;
  a: {
    for (var We = ["CLOSURE_FLAGS"], Xe = F, Ye = 0; Ye < We.length; Ye++)
      if (((Xe = Xe[We[Ye]]), null == Xe)) {
        Ve = null;
        break a;
      }
    Ve = Xe;
  }
  var Ze = Ve && Ve[610401301];
  nb = null != Ze ? Ze : !1;
  var H,
    $e = F.navigator;
  H = $e ? $e.userAgentData || null : null;
  yb[" "] = function () {};
  var de = pb(),
    P = qb(),
    af = I(ca),
    bf = af || P,
    gc = I("Gecko") && !(-1 != G().toLowerCase().indexOf("webkit") && !I(ca)) && !(I("Trident") || I("MSIE")) && !I(ca),
    T = -1 != G().toLowerCase().indexOf("webkit") && !I(ca),
    Oe = T && I("Mobile"),
    hc = xb(),
    cf = vb() ? "Windows" === H.platform : I("Windows"),
    df = vb() ? H.platform === ba : I(ba),
    ef = wb(),
    ff = I(sa),
    gf = I(ta),
    hf;
  a: {
    var jf = "",
      kf = (function () {
        var a = G();
        if (gc) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (af) return /Edge\/([\d\.]+)/.exec(a);
        if (P) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (T) return /WebKit\/(\S+)/.exec(a);
        if (de) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    kf && (jf = kf ? kf[1] : "");
    if (P) {
      var lf = zb();
      if (null != lf && lf > parseFloat(jf)) {
        hf = String(lf);
        break a;
      }
    }
    hf = jf;
  }
  var mf = hf,
    nf;
  if (F.document && P) {
    var of = zb();
    nf = of ? of : parseInt(mf, 10) || void 0;
  } else nf = void 0;
  var Ub = nf;
  var Eb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var pf;
  var qf = {};
  Gb.prototype.toString = function () {
    return this.ba.toString();
  };
  K.prototype.V = function (a) {
    return a instanceof K && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1);
  };
  K.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  K.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  K.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  Hb.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  Hb.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  Hb.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  Hb.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var Kb = {
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
    },
    ac = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    bc = { IMG: " ", BR: "\n" };
  y = Ib.prototype;
  y.setProperties = Lb;
  y.ja = function (a, b, c) {
    return Nb(this.g, arguments);
  };
  y.Y = function (a, b) {
    a.appendChild(b);
  };
  y.ia = O;
  y.getChildren = function (a) {
    return void 0 != a.children
      ? a.children
      : Array.prototype.filter.call(a.childNodes, function (b) {
          return 1 == b.nodeType;
        });
  };
  y.contains = Tb;
  Q.prototype.o = !1;
  Q.prototype.Z = function () {
    this.o || ((this.o = !0), this.D());
  };
  Q.prototype.D = function () {
    if (this.v) for (; this.v.length; ) this.v.shift()();
  };
  fc.prototype.l = function () {
    this.i = !0;
  };
  fc.prototype.j = function () {
    this.defaultPrevented = !0;
  };
  var zc = (function () {
    if (!F.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      var c = function () {};
      F.addEventListener("test", c, b);
      F.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  var ae = P ? "textinput" : "textInput";
  B(R, fc);
  var ic = { 2: "touch", 3: "pen", 4: "mouse" };
  R.prototype.l = function () {
    R.F.l.call(this);
    this.g.stopPropagation ? this.g.stopPropagation() : (this.g.cancelBubble = !0);
  };
  R.prototype.j = function () {
    R.F.j.call(this);
    var a = this.g;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var jc = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var lc = 0;
  oc.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g = qc(a, b, d, e);
    -1 < g ? ((b = a[g]), c || (b.U = !1)) : ((b = new mc(b, this.src, f, !!d, e)), (b.U = c), a.push(b));
    return b;
  };
  oc.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = qc(e, b, c, d);
    return -1 < b ? (nc(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  oc.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.g)
      if (!a || c == a) {
        for (var d = this.g[c], e = 0; e < d.length; e++) ++b, nc(d[e]);
        delete this.g[c];
        this.h--;
      }
    return b;
  };
  var xc = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Fc = {},
    Bc = 0,
    Gc = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  B(S, Q);
  S.prototype[jc] = !0;
  S.prototype.removeEventListener = function (a, b, c, d) {
    Dc(this, a, b, c, d);
  };
  S.prototype.D = function () {
    S.F.D.call(this);
    this.g && this.g.removeAll(void 0);
    this.l = null;
  };
  S.prototype.listen = function (a, b, c, d) {
    return this.g.add(String(a), b, !1, c, d);
  };
  var re = window.document,
    Fe = window,
    oe = M(window.document),
    Be = new S();
  var Sc = /[^\d]+$/,
    Tc = { cm: 1, in: 1, mm: 1, pc: 1, pt: 1 },
    Uc = { em: 1, ex: 1 };
  (function () {
    if (cf) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(G())) ? a[1] : "0";
    }
    return hc
      ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(G())) ? a[0].replace(/_/g, ".") : "10")
      : df
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(G())) ? a[1] : "")
      : ef || ff || gf
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(G())) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  var rf = rb(),
    sf = wb() || I(ta),
    tf = I(sa),
    uf = I(ba) && !(sb() || rb() || pb() || I("Silk")),
    vf = sb(),
    wf =
      I("Safari") &&
      !(
        sb() ||
        (J() ? 0 : I("Coast")) ||
        pb() ||
        (J() ? 0 : I(ca)) ||
        (J() ? ob("Microsoft Edge") : I("Edg/")) ||
        (J() ? ob("Opera") : I("OPR")) ||
        rb() ||
        I("Silk") ||
        I(ba)
      ) &&
      !(wb() || I(sa) || I(ta));
  (function () {
    if (rf) return Wc(/Firefox\/([0-9.]+)/);
    if (P || af || de) return mf;
    if (vf) {
      if (wb() || I(sa) || I(ta) || xb()) {
        var a = Wc(/CriOS\/([0-9.]+)/);
        if (a) return a;
      }
      return Wc(/Chrome\/([0-9.]+)/);
    }
    if (wf && !(wb() || I(sa) || I(ta))) return Wc(/Version\/([0-9.]+)/);
    if (sf || tf) {
      if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(G()))) return a[1] + "." + a[2];
    } else if (uf) return (a = Wc(/Android\s+([0-9.]+)/)) ? a : Wc(/Version\/([0-9.]+)/);
    return "";
  })();
  var kd = "jsapi",
    jd = !(8 >= ub());
  var Yc = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  var bd = {};
  B(U, Q);
  var dd = [];
  U.prototype.listen = function (a, b, c, d) {
    return ed(this, a, b, c, d);
  };
  U.prototype.removeAll = function () {
    Ab(
      this.g,
      function (a, b) {
        this.g.hasOwnProperty(b) && Ec(a);
      },
      this
    );
    this.g = {};
  };
  U.prototype.D = function () {
    U.F.D.call(this);
    this.removeAll();
  };
  U.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  ab(id, S);
  id.prototype.A = function (a) {
    var b = a.target;
    b && b != Fe && (b.frameElement && (b = b.frameElement), ld(this, a, b));
  };
  id.prototype.B = function (a) {
    var b = this,
      c = Db(a.g);
    gd(function () {
      return md(b, b.s, new R(c));
    }, 0);
  };
  id.prototype.D = function () {
    S.prototype.D.call(this);
    try {
      ec(this.i);
    } catch (a) {}
    delete this.h;
    delete this.j;
  };
  nd.prototype.next = function () {
    return od;
  };
  var od = { done: !0, value: void 0 };
  nd.prototype.L = function () {
    return this;
  };
  B(V, nd);
  V.prototype.next = function () {
    if (this.B) {
      if (!this.node || (this.N && 0 == this.o)) return od;
      var a = this.node;
      var b = this.v ? -1 : 1;
      if (this.m == b) {
        var c = this.v ? a.lastChild : a.firstChild;
        c ? qd(this, c) : qd(this, a, -1 * b);
      } else (c = this.v ? a.previousSibling : a.nextSibling) ? qd(this, c) : qd(this, a.parentNode, -1 * b);
      this.o += this.m * (this.v ? -1 : 1);
    } else this.B = !0;
    return (a = this.node) ? { value: a, done: !1 } : od;
  };
  V.prototype.V = function (a) {
    return a.node == this.node && (!this.node || a.m == this.m);
  };
  rd.prototype.aa = function () {
    return !1;
  };
  rd.prototype.ga = function (a) {
    this.J() || this.P();
    return this.T(a, !0);
  };
  B(td, V);
  B(ud, td);
  ud.prototype.A = function () {
    return this.g;
  };
  ud.prototype.s = function () {
    return (
      this.B && (this.node != (this.l ? this.g : this.h) ? !1 : this.l ? (this.j ? -1 != this.m : 1 == this.m) : !this.i || 1 != this.m)
    );
  };
  ud.prototype.next = function () {
    return this.s() ? od : ud.F.next.call(this);
  };
  vd.prototype.L = function () {
    return new ud(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset);
  };
  B(W, vd);
  W.prototype.select = function (a) {
    this.h(Mb(L(this.g.startContainer)).getSelection(), a);
  };
  W.prototype.h = function (a) {
    a.removeAllRanges();
    a.addRange(this.g);
  };
  W.prototype.collapse = function (a) {
    this.g.collapse(a);
  };
  B(zd, W);
  zd.prototype.h = function (a, b) {
    !b || this.g.collapsed
      ? zd.F.h.call(this, a, b)
      : (a.collapse(this.g.endContainer, this.g.endOffset), a.extend(this.g.startContainer, this.g.startOffset));
  };
  B(Ad, W);
  Ad.prototype.h = function (a, b) {
    b
      ? a.setBaseAndExtent(this.g.endContainer, this.g.endOffset, this.g.startContainer, this.g.startOffset)
      : a.setBaseAndExtent(this.g.startContainer, this.g.startOffset, this.g.endContainer, this.g.endOffset);
  };
  B(Cd, rd);
  y = Cd.prototype;
  y.R = function () {
    return X(this).g;
  };
  y.M = function () {
    return 1;
  };
  y.H = function () {
    return this;
  };
  y.O = function () {
    return X(this).g.commonAncestorContainer;
  };
  y.u = function () {
    return this.g || (this.g = X(this).g.startContainer);
  };
  y.G = function () {
    return null != this.j ? this.j : (this.j = X(this).g.startOffset);
  };
  y.C = function () {
    return this.h || (this.h = X(this).g.endContainer);
  };
  y.K = function () {
    return null != this.i ? this.i : (this.i = X(this).g.endOffset);
  };
  y.aa = function () {
    return this.l;
  };
  y.J = function () {
    return X(this).g.collapsed;
  };
  y.S = function () {
    return X(this).g.toString();
  };
  y.L = function () {
    return new ud(this.u(), this.G(), this.C(), this.K());
  };
  y.select = function () {
    X(this).select(this.l);
  };
  y.P = function () {
    var a = X(this),
      b = a.g;
    b.extractContents();
    if (b.startContainer.hasChildNodes()) {
      var c = b.startContainer.childNodes[b.startOffset];
      if (c) {
        var d = c.previousSibling;
        "" == $b(c) && O(c);
        d && "" == $b(d) && O(d);
      }
    }
    if (bf) {
      c = a.g.startContainer;
      d = a.g.startOffset;
      var e = a.g.endContainer;
      a = a.g.endOffset;
      var f = c.nextSibling;
      c == e &&
        c.parentNode &&
        3 == c.nodeType &&
        f &&
        3 == f.nodeType &&
        ((c.nodeValue += f.nodeValue), O(f), b.setStart(c, d), b.setEnd(e, a));
    }
    this.g = this.j = this.h = this.i = null;
  };
  y.T = function (a, b) {
    var c = X(this).g.cloneRange();
    c.collapse(b);
    c.insertNode(a);
    c.detach();
    this.g = this.j = this.h = this.i = null;
    return a;
  };
  y.collapse = function (a) {
    a = this.aa() ? !a : a;
    this.m && this.m.collapse(a);
    a ? ((this.h = this.g), (this.i = this.j)) : ((this.g = this.h), (this.j = this.i));
    this.l = !1;
  };
  B(Ed, rd);
  Ed.prototype.T = function (a, b) {
    b
      ? ((b = this.u()), b.parentNode && b.parentNode.insertBefore(a, b))
      : ((b = this.C()), b.parentNode && b.parentNode.insertBefore(a, b.nextSibling));
    return a;
  };
  B(Fd, Ed);
  y = Fd.prototype;
  y.R = function () {
    return this.g || document.body.createControlRange();
  };
  y.M = function () {
    return this.g ? this.g.length : 0;
  };
  y.H = function (a) {
    a = this.g.item(a);
    a = T ? new Ad(xd(a)) : gc ? new zd(xd(a)) : new W(xd(a));
    return Dd(a);
  };
  y.O = function () {
    return Yb.apply(null, Gd(this));
  };
  y.u = function () {
    return Hd(this)[0];
  };
  y.G = function () {
    return 0;
  };
  y.C = function () {
    var a = Hd(this),
      b = ib(a);
    return a.find(function (c) {
      return Tb(c, b);
    });
  };
  y.K = function () {
    return this.C().childNodes.length;
  };
  y.J = function () {
    return !this.g || !this.g.length;
  };
  y.S = function () {
    return "";
  };
  y.L = function () {
    return new Id(this);
  };
  y.select = function () {
    this.g && this.g.select();
  };
  y.P = function () {
    if (this.g) {
      for (var a = [], b = 0, c = this.g.length; b < c; b++) a.push(this.g.item(b));
      a.forEach(O);
      this.collapse(!1);
    }
  };
  y.ga = function (a) {
    a = this.T(a, !0);
    this.J() || this.P();
    return a;
  };
  y.collapse = function () {
    this.i = this.h = this.g = null;
  };
  B(Id, td);
  Id.prototype.A = function () {
    return this.g;
  };
  Id.prototype.s = function () {
    return !this.o && !this.i.length;
  };
  Id.prototype.next = function () {
    if (this.s()) return od;
    if (!this.o) {
      var a = this.i.shift();
      qd(this, a, 1, 1);
      return { value: a, done: !1 };
    }
    return Id.F.next.call(this);
  };
  B(Jd, Ed);
  y = Jd.prototype;
  y.R = function () {
    return this.g[0];
  };
  y.M = function () {
    return this.g.length;
  };
  y.H = function (a) {
    this.i[a] || (this.i[a] = Dd(Bd(this.g[a])));
    return this.i[a];
  };
  y.O = function () {
    if (!this.j) {
      for (var a = [], b = 0, c = this.M(); b < c; b++) a.push(this.H(b).O());
      this.j = Yb.apply(null, a);
    }
    return this.j;
  };
  y.u = function () {
    return Ld(this)[0].u();
  };
  y.G = function () {
    return Ld(this)[0].G();
  };
  y.C = function () {
    return ib(Ld(this)).C();
  };
  y.K = function () {
    return ib(Ld(this)).K();
  };
  y.J = function () {
    return 0 == this.g.length || (1 == this.g.length && this.H(0).J());
  };
  y.S = function () {
    return sd(this)
      .map(function (a) {
        return a.S();
      })
      .join("");
  };
  y.L = function () {
    return new Md(this);
  };
  y.select = function () {
    var a = Mb(L(P ? this.O() : this.u())).getSelection();
    a.removeAllRanges();
    for (var b = 0, c = this.M(); b < c; b++) a.addRange(this.H(b).R());
  };
  y.P = function () {
    sd(this).forEach(function (a) {
      a.P();
    });
  };
  y.collapse = function (a) {
    if (!this.J()) {
      var b = a ? this.H(0) : this.H(this.M() - 1);
      this.i = [];
      this.j = this.h = null;
      b.collapse(a);
      this.i = [b];
      this.h = [b];
      this.g = [b.R()];
    }
  };
  B(Md, td);
  Md.prototype.A = function () {
    return this.g[0].A();
  };
  Md.prototype.s = function () {
    return this.g[this.h].s();
  };
  Md.prototype.next = function () {
    for (; this.h < this.g.length; ) {
      var a = this.g[this.h],
        b = a.next();
      if (b.done) this.h++;
      else return qd(this, a.node, a.m, a.o), b;
    }
    return od;
  };
  B(Yd, Xd);
  var xf = RegExp(
      "[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"
    ),
    yf = RegExp(
      "^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"
    ),
    zf = /^http:\/\/.*/,
    Af = /\s+/,
    Bf = /[\d\u06f0-\u06f9]/; /*

 SPDX-License-Identifier: Apache-2.0
*/
  ce.prototype.commitText = function (a, b) {
    var c = Z(this);
    if (c) {
      var d = c.type && c.type.toUpperCase();
      d = ("EMAIL" == d || "NUMBER" == d) && c.tagName.toUpperCase() == k;
      b = b ? b : 0;
      if (!d && c.tagName.toUpperCase() == k && a.length > b) {
        var e = c.maxLength;
        if (typeof e === u && 0 <= e && e < c.value.length + a.length - b) return;
      }
      fe(this);
      e = {};
      e["fs-input"] = a;
      be && "gmail" == kd && (Y(c, xa), Y(c, r, 0, e));
      if (d) c.value = (b ? c.value.slice(0, -b) : c.value) + a;
      else if (8 >= ub() || (10 >= ub() && ("\n" == a || (!a && 1 == b))))
        (d = this.g.g.selection.createRange()),
          0 < b && (a || !d.text) && d.moveStart(ia, -b),
          (0 < b || d.text) && d.execCommand("delete", !1, null),
          (" " != a.charAt(0) && " " != a.charAt(a.length - 1)) ||
            !this.l ||
            ((b = d.duplicate()),
            b.moveToElementText(d.parentElement()),
            (e = d.duplicate()),
            " " == a.charAt(0) &&
              (d.moveStart(ia, -1), b.inRange(d) ? ((e = d.text.charAt(0)), (a = (" " == e ? "\u00a0" : e) + a)) : (d = e)),
            (e = d.duplicate()),
            " " == a.charAt(a.length - 1) &&
              (d.moveEnd(ia, 1),
              b.inRange(d) && " " == d.text.charAt(d.text.length - 1) && (a = a.slice(0, a.length - 1) + "\u00a0"),
              (d = e))),
          (d.text = a),
          d.collapse(!1),
          d.select();
      else if (this.l)
        a: {
          e = b;
          d = N(this.g.g);
          b = d.document;
          d = d.getSelection();
          d.isCollapsed || (b.execCommand("delete", !1, null), a || (e = 0));
          if (0 < e) {
            if ((a || 1 < e || P || de) && 3 == d.anchorNode.nodeType && 0 < d.rangeCount) {
              var f = d.getRangeAt(0),
                g,
                h = d.anchorOffset;
              for (g = Math.min(e, h); h >= g; ) {
                f.setStart(d.anchorNode, h - g);
                d.addRange(f);
                if (d.toString().length == g) break;
                g++;
              }
              g > e && (a = d.toString().slice(0, g - e) + a);
            }
            (d.isCollapsed && P) || b.execCommand("delete", !1, null);
          }
          if (a) {
            if (b.queryCommandSupported) {
              if (b.queryCommandSupported("insertText")) {
                b.execCommand("insertText", !1, a);
                break a;
              }
              if (b.queryCommandSupported("insertHTML")) {
                d = { ma: !0, na: !0 };
                d = void 0 === d ? {} : d;
                if (!(a instanceof Gb)) {
                  a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
                  d.na && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
                  d.ma && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
                  d.Ri && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
                  if (void 0 === pf)
                    if (((d = null), (e = F.trustedTypes) && e.createPolicy)) {
                      try {
                        d = e.createPolicy("goog#html", { createHTML: hb, createScript: hb, createScriptURL: hb });
                      } catch (n) {
                        F.console && F.console.error(n.message);
                      }
                      pf = d;
                    } else pf = d;
                  a = (d = pf) ? d.createHTML(a) : a;
                  a = new Gb(a, qf);
                }
                b.execCommand("insertHTML", !1, a instanceof Gb && a.constructor === Gb ? a.ba : "type_error:SafeHtml");
                break a;
              }
            }
            if (3 == d.anchorNode.nodeType) {
              b = d.anchorNode;
              f = d.anchorNode.nodeValue;
              e = d.anchorOffset + a.length;
              h = g = d.anchorOffset;
              for (var m = [" ", "\u00a0"]; 0 < h && C(m, f[--h]); );
              for (; g < f.length && C(m, f[g++]); );
              if (" " == a.charAt(0) || " " == a.charAt(a.length - 1) || h < g)
                (a = f.slice(h, d.anchorOffset) + a + f.slice(d.anchorOffset, g)),
                  (a = a.replace(/\u00a0/g, " ")),
                  (a = a.replace(/^\u0020/g, "\u00a0")),
                  (a = a.replace(/\u0020{2}/g, " \u00a0")),
                  (a = a.replace(/\u0020$/g, "\u00a0"));
              b.nodeValue = f.slice(0, h) + a + f.slice(g);
            } else
              (a = a.replace(/ /g, "\u00a0")),
                (b = this.g.g.createTextNode(String(a))),
                (e = d.anchorNode),
                e.insertBefore(b, e.childNodes[d.anchorOffset] || null),
                (e = a.length);
            a = d.getRangeAt(0);
            a.setStart(b, e);
            a.collapse(!0);
            d.addRange(a);
          }
        }
      else
        (d = this.h),
          (e = d.selectionStart),
          (f = d.selectionEnd),
          (g = d.value.length),
          e > g && (e = g),
          f > g && (f = g),
          !a && e < f && (b = 0),
          (e -= Math.min(e, b)),
          (d.value = d.value.slice(0, e) + a + d.value.slice(f)),
          (e += a.length),
          d.setSelectionRange(e, e);
      if (c && "1" == c.getAttribute("itaautodir")) {
        b = a = 0;
        d = !1;
        e = ee(this, 50).split(Af);
        for (f = 0; f < e.length; f++)
          (g = e[f]), yf.test(g) ? (a++, b++) : zf.test(g) ? (d = !0) : xf.test(g) ? b++ : Bf.test(g) && (d = !0);
        c.dir = -1 == (0 == b ? (d ? 1 : 0) : 0.4 < a / b ? -1 : 1) ? "rtl" : "ltr";
      }
    }
  };
  ce.prototype.deleteToken = function (a) {
    delete this.m[String(A(a))];
  };
  var Bb = {
    Dc: "zh-hant-t-i0-array-1992",
    Ec: "zh-hans-t-i0-cangjie-1982",
    Fc: "zh-hant-t-i0-cangjie-1982",
    Gc: "zh-hans-t-i0-cangjie-1987",
    Hc: "zh-hant-t-i0-cangjie-1987",
    Ic: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
    Jc: Qa,
    Kc: "yue-hant-t-i0-jyutping",
    Lc: "yue-hant-t-i0-yale",
    Mc: "zh-hant-t-i0-dayi-1988",
    Oc: Ta,
    Pc: Ra,
    Nc: "ko-t-i0-und",
    Qc: "zh-t-i0-pinyin-x0-shuangpin-abc",
    Rc: "zh-t-i0-pinyin-x0-shuangpin-flypy",
    Sc: "zh-t-i0-pinyin-x0-shuangpin-jiajia",
    Tc: "zh-t-i0-pinyin-x0-shuangpin-ms",
    Uc: "zh-t-i0-pinyin-x0-shuangpin-ziguang",
    Vc: "zh-t-i0-pinyin-x0-shuangpin-ziranma",
    Wc: "am-t-i0-und",
    Xc: "ar-t-i0-und",
    Yc: "be-t-i0-und",
    Zc: "bn-t-i0-und",
    ad: "bg-t-i0-und",
    bd: "nl-t-i0-und",
    cd: "en-t-i0-und",
    dd: "fr-t-i0-und",
    ed: "de-t-i0-und",
    fd: "el-t-i0-und",
    gd: "gu-t-i0-und",
    hd: "he-t-i0-und",
    jd: "hi-t-i0-und",
    kd: ua,
    ld: "it-t-i0-und",
    md: va,
    od: "ja-t-i0-mozcus",
    nd: "ja-t-i0-mozcjp",
    pd: "kn-t-i0-und",
    qd: "ml-t-i0-und",
    rd: "mr-t-i0-und",
    sd: "ne-t-i0-und",
    td: "or-t-i0-und",
    ud: "fa-t-i0-und",
    vd: "pl-t-i0-und",
    wd: "pt-t-i0-und",
    xd: "pt-br-t-i0-und",
    yd: "pt-pt-t-i0-und",
    zd: "pa-t-i0-und",
    Ad: "ru-t-i0-und",
    Bd: "sa-t-i0-und",
    Cd: "sr-t-i0-und",
    Dd: "si-t-i0-und",
    Ed: "es-t-i0-und",
    Fd: "ta-t-i0-und",
    Gd: "te-t-i0-und",
    Hd: "th-t-i0-und",
    Id: "ti-t-i0-und",
    Jd: "tr-t-i0-und",
    Kd: "uk-t-i0-und",
    Ld: "ur-t-i0-und",
    Md: "vi-t-i0-und",
    Nd: Ua,
    Od: Sa,
    Pd: "zh-hant-t-i0-bopomofo",
    Qd: "sq-t-k0-und",
    Rd: "ar-t-k0-und",
    Sd: qa,
    Td: ra,
    Ud: "eu-t-k0-und",
    Vd: "be-t-k0-und",
    Wd: "bn-t-k0-und",
    Xd: "bn-t-und-latn-k0-und",
    Yd: "bs-t-k0-und",
    Zd: "pt-br-t-k0-und",
    ae: "bg-t-k0-und",
    be: ha,
    ce: "ca-t-k0-und",
    de: "ccp-t-k0-und",
    ee: "chr-t-k0-und",
    fe: ja,
    he: "hr-t-k0-und",
    ie: "cs-t-k0-und",
    je: la,
    ke: "da-t-k0-und",
    le: "prs-t-k0-und",
    me: oa,
    ne: "nl-t-k0-und",
    oe: "nl-t-k0-intl",
    pe: "dz-t-k0-und",
    qe: "en-t-k0-und",
    re: ma,
    se: "et-t-k0-und",
    te: Ma,
    Vg: "ti-ethi-t-k0-und",
    ue: "fi-t-k0-und",
    ve: "fr-t-k0-und",
    xe: "fr-t-k0-intl",
    ye: "ff-t-k0-adlm",
    ze: "gl-t-k0-und",
    Be: "ka-t-k0-und",
    Ce: wa,
    De: "de-t-k0-und",
    Ee: "de-t-k0-intl",
    Fe: "el-t-k0-und",
    He: "gu-t-k0-und",
    Ie: na,
    Ge: "gu-t-k0-phone2",
    Je: ya,
    Ke: za,
    Me: "haw-t-k0-und",
    Le: "ht-t-k0-und",
    Oe: "he-t-k0-und",
    Pe: "hi-t-k0-und",
    Qe: "hi-t-k0-phone",
    Re: "win-t-k0-und",
    Se: pa,
    Te: "is-t-k0-und",
    Ue: "id-t-k0-und",
    Ve: "iu-t-k0-inuktitu",
    We: "iu-t-k0-nunavik",
    Xe: "iu-t-k0-nunavut",
    Ye: "ga-t-k0-und",
    Ze: "ga-t-k0-accents",
    af: "it-t-k0-und",
    cf: "it-t-k0-intl",
    df: "jw-t-k0-und",
    ef: "kn-t-k0-und",
    ff: "kn-t-und-latn-k0-und",
    gf: "kk-t-k0-und",
    hf: "km-t-k0-und",
    jf: "ko-t-k0-und",
    kf: "ku-t-k0-und",
    lf: "ky-cyrl-t-k0-und",
    mf: "lo-t-k0-und",
    nf: "lv-t-k0-und",
    pf: "lis-t-k0-und",
    qf: "lt-t-k0-und",
    rf: "mk-t-k0-und",
    sf: "myh-t-k0-und",
    tf: "ms-t-k0-und",
    uf: "ml-t-k0-und",
    vf: "ml-t-und-latn-k0-und",
    wf: "mt-t-k0-und",
    xf: "mi-t-k0-und",
    yf: "mr-t-k0-und",
    zf: "mr-t-k0-devanaga",
    Af: "mr-t-k0-phone",
    Bf: "mni-mtei-t-k0-phone",
    Cf: "mez-t-k0-und",
    Df: "mn-cyrl-t-k0-und",
    Ef: "srp-t-k0-und",
    Ff: "my-t-k0-und",
    Gf: "my-t-k0-myansan",
    Hf: "nv-t-k0-und",
    If: "nv-t-k0-std",
    Jf: "ne-t-k0-und",
    Kf: "ne-t-und-latn-k0-und",
    Mf: "no-t-k0-und",
    Of: "one-t-k0-und",
    Pf: "or-t-k0-und",
    Qf: "or-t-und-latn-k0-und",
    Rf: "osa-t-k0-und",
    Sf: "latn-002-t-k0-und",
    Tf: "ps-t-k0-und",
    Uf: "fa-t-k0-und",
    Vf: "crk-t-k0-phone",
    Wf: "pl-t-k0-und",
    Yf: "pt-pt-t-k0-und",
    ag: "pt-br-t-k0-intl",
    cg: "pt-pt-t-k0-intl",
    dg: "rhg-rohg-t-k0-und",
    eg: "rom-t-k0-und",
    fg: "ro-t-k0-und",
    gg: Ba,
    hg: Aa,
    ig: "ru-t-k0-und",
    jg: Da,
    kg: Ca,
    lg: Ea,
    og: "sa-t-und-latn-k0-und",
    ng: "sa-t-k0-devanaga",
    qg: "see-t-k0-und",
    rg: "sr-cyrl-t-k0-und",
    sg: "sr-latn-t-k0-und",
    tg: "sd-t-k0-und",
    ug: "si-t-k0-und",
    vg: "sk-t-k0-und",
    wg: Fa,
    xg: "sl-t-k0-und",
    yg: "ckb-t-k0-ar",
    zg: "ckb-t-k0-en",
    Ag: "uzs-t-k0-und",
    Bg: "es-t-k0-und",
    Dg: "es-t-k0-intl",
    Eg: "sw-t-k0-und",
    Fg: "sv-t-k0-und",
    Gg: "de-ch-t-k0-und",
    Hg: "tl-t-k0-und",
    Ig: "tg-t-k0-und",
    Jg: "ta-t-k0-ta99",
    Kg: "ta-t-k0-und",
    Lg: Ga,
    Mg: "ta-t-und-latn-k0-und",
    Ng: Ia,
    Og: "tt-t-k0-und",
    Pg: "te-t-k0-und",
    Qg: "te-t-und-latn-k0-und",
    Rg: "th-t-k0-und",
    Sg: Ja,
    Tg: "th-t-k0-tis",
    Ug: "ti-t-k0-und",
    Wg: Ka,
    Yg: "tr-t-k0-und",
    ah: "ug-t-k0-und",
    bh: La,
    dh: "ur-t-k0-und",
    eh: "en-us-t-k0-intl",
    fh: Oa,
    gh: Na,
    hh: "uz-latn-t-k0-und",
    ih: "vi-t-k0-und",
    jh: Pa,
    kh: "vi-t-k0-viqr",
    lh: "vi-t-k0-vni",
    mh: "cy-t-k0-und",
    oh: "yi-t-k0-und",
    Lf: "yo-ng-t-k0-und",
    Nf: "oj-t-k0-ojibwe",
    Ae: "de-t-k0-accents",
    Cg: "es-t-k0-accents",
    we: "fr-t-k0-accents",
    bf: "it-t-k0-accents",
    oa: "nl-t-k0-accents",
    Xf: "pl-t-k0-accents",
    Zf: "pt-br-t-k0-accents",
    bg: "pt-pt-t-k0-accents",
    Xg: "tr-t-k0-f-accents",
    Zg: "tr-t-k0-q-accents",
    ge: "co-t-k0-accents",
    Ne: "haw-t-k0-accents",
    mg: "sm-t-k0-accents",
    pg: "gd-t-k0-accents",
    nh: "fy-t-k0-accents",
    ph: "lb-t-k0-accents",
    pa: "af-t-i0-handwrit",
    qa: "sq-t-i0-handwrit",
    ra: "am-t-i0-handwrit",
    sa: "ar-t-i0-handwrit",
    ta: "hy-t-i0-handwrit",
    ua: "as-t-i0-handwrit",
    va: "az-t-i0-handwrit",
    wa: "eu-t-i0-handwrit",
    xa: "be-t-i0-handwrit",
    ya: "bn-t-i0-handwrit",
    za: "bs-t-i0-handwrit",
    Aa: "bg-t-i0-handwrit",
    Ba: "my-t-i0-handwrit",
    Ca: "zh-yue-t-i0-handwrit",
    Da: "ca-t-i0-handwrit",
    Ea: "ceb-t-i0-handwrit",
    Fa: "zh-t-i0-handwrit",
    Ga: "zh-hans-t-i0-handwrit",
    Ha: "zh-hant-t-i0-handwrit",
    Ia: "co-t-i0-handwrit",
    Ja: "hr-t-i0-handwrit",
    Ka: "cs-t-i0-handwrit",
    La: "da-t-i0-handwrit",
    Ma: "nl-t-i0-handwrit",
    Na: "en-t-i0-handwrit",
    Oa: "eo-t-i0-handwrit",
    Pa: "et-t-i0-handwrit",
    Qa: "fil-t-i0-handwrit",
    Ra: "fi-t-i0-handwrit",
    Sa: "fr-t-i0-handwrit",
    Ta: "gl-t-i0-handwrit",
    Ua: "ka-t-i0-handwrit",
    Va: "de-t-i0-handwrit",
    Wa: "el-t-i0-handwrit",
    Xa: "gu-t-i0-handwrit",
    Ya: "ht-t-i0-handwrit",
    Za: "haw-t-i0-handwrit",
    ab: "he-t-i0-handwrit",
    bb: "hi-t-i0-handwrit",
    cb: "hmn-t-i0-handwrit",
    eb: "hu-t-i0-handwrit",
    fb: "is-t-i0-handwrit",
    gb: "id-t-i0-handwrit",
    hb: "ga-t-i0-handwrit",
    ib: "it-t-i0-handwrit",
    jb: "ja-t-i0-handwrit",
    kb: "jv-t-i0-handwrit",
    lb: "kn-t-i0-handwrit",
    mb: "kk-t-i0-handwrit",
    nb: "km-t-i0-handwrit",
    ob: "ko-t-i0-handwrit",
    pb: "ku-t-i0-handwrit",
    qb: "ky-t-i0-handwrit",
    rb: "lo-t-i0-handwrit",
    sb: "la-t-i0-handwrit",
    tb: "lv-t-i0-handwrit",
    ub: "lt-t-i0-handwrit",
    vb: "lb-t-i0-handwrit",
    wb: "mk-t-i0-handwrit",
    xb: "mg-t-i0-handwrit",
    yb: "ms-t-i0-handwrit",
    zb: "ml-t-i0-handwrit",
    Ab: "mt-t-i0-handwrit",
    Bb: "mi-t-i0-handwrit",
    Cb: "mr-t-i0-handwrit",
    Db: "mn-t-i0-handwrit",
    Eb: "mul-t-i0-handwrit",
    Fb: "mul-beng-t-i0-handwrit",
    Gb: "mul-cyrl-t-i0-handwrit",
    Hb: "mul-deva-t-i0-handwrit",
    Ib: "mul-ethi-t-i0-handwrit",
    Jb: "mul-latn-t-i0-handwrit",
    Kb: "ne-t-i0-handwrit",
    Lb: "no-t-i0-handwrit",
    Mb: "nb-t-i0-handwrit",
    Nb: "nn-t-i0-handwrit",
    Ob: "ny-t-i0-handwrit",
    Pb: "or-t-i0-handwrit",
    Qb: "fa-t-i0-handwrit",
    Rb: "pl-t-i0-handwrit",
    Sb: "pt-t-i0-handwrit",
    Tb: "pt-br-t-i0-handwrit",
    Ub: "pt-pt-t-i0-handwrit",
    Vb: "pa-t-i0-handwrit",
    Wb: "ro-t-i0-handwrit",
    Xb: "ru-t-i0-handwrit",
    Yb: "sm-t-i0-handwrit",
    Zb: "gd-t-i0-handwrit",
    ac: "sr-t-i0-handwrit",
    bc: "sn-t-i0-handwrit",
    cc: "si-t-i0-handwrit",
    dc: "sk-t-i0-handwrit",
    ec: "sl-t-i0-handwrit",
    fc: "so-t-i0-handwrit",
    hc: "es-t-i0-handwrit",
    ic: "su-t-i0-handwrit",
    jc: "sw-t-i0-handwrit",
    kc: "sv-t-i0-handwrit",
    lc: "tg-t-i0-handwrit",
    mc: "ta-t-i0-handwrit",
    nc: "te-t-i0-handwrit",
    oc: "th-t-i0-handwrit",
    qc: "bo-t-i0-handwrit",
    rc: "ti-t-i0-handwrit",
    sc: "tr-t-i0-handwrit",
    tc: "uk-t-i0-handwrit",
    vc: "ur-t-i0-handwrit",
    wc: "uz-t-i0-handwrit",
    xc: "vi-t-i0-handwrit",
    yc: "cy-t-i0-handwrit",
    zc: "fy-t-i0-handwrit",
    Ac: "xh-t-i0-handwrit",
    Bc: "yi-t-i0-handwrit",
    Cc: "zu-t-i0-handwrit",
    uc: "und-t-i0-handwrit",
    sh: "en-t-i0-voice",
    qh: "zh-hans-t-i0-voice",
    rh: "zh-hant-t-i0-voice",
    th: "xkb:am:phonetic:arm",
    uh: "xkb:be::fra",
    vh: "xkb:be::ger",
    wh: "xkb:be::nld",
    xh: "xkb:bg::bul",
    yh: "xkb:bg:phonetic:bul",
    zh: "xkb:br::por",
    Ah: "xkb:by::bel",
    Ch: "xkb:ca::fra",
    Bh: "xkb:ca:eng:eng",
    Dh: "xkb:ca:multix:fra",
    Fh: "xkb:ch::ger",
    Eh: "xkb:ch:fr:fra",
    Gh: "xkb:cz::cze",
    Hh: "xkb:cz:qwerty:cze",
    Ih: "xkb:de::ger",
    Jh: "xkb:de:neo:ger",
    Kh: "xkb:dk::dan",
    Lh: "xkb:ee::est",
    Nh: "xkb:es::spa",
    Mh: "xkb:es:cat:cat",
    Ph: "xkb:fo::fao",
    Oh: "xkb:fi::fin",
    Qh: "xkb:fr:bepo:fra",
    Rh: "xkb:fr::fra",
    Sh: "xkb:gb:dvorak:eng",
    Th: "xkb:gb:extd:eng",
    Uh: "xkb:ge::geo",
    Vh: "xkb:gr::gre",
    Wh: "xkb:hr::scr",
    Xh: "xkb:hu::hun",
    Yh: "xkb:hu:qwerty:hun",
    Zh: "xkb:ie::ga",
    ai: "xkb:il::heb",
    bi: "xkb:is::ice",
    ci: "xkb:it::ita",
    di: "xkb:jp::jpn",
    ei: "xkb:kz::kaz",
    fi: "xkb:latam::spa",
    gi: "xkb:lt::lit",
    hi: "xkb:lv:apostrophe:lav",
    ji: "xkb:mn::mon",
    ii: "xkb:mk::mkd",
    ki: "xkb:mt::mlt",
    li: "xkb:no::nob",
    mi: "xkb:pl::pol",
    ni: "xkb:pt::por",
    oi: "xkb:ro::rum",
    pi: "xkb:ro:std:rum",
    ri: "xkb:rs::srp",
    ti: "xkb:ru::rus",
    si: "xkb:ru:phonetic:rus",
    ui: "xkb:se::swe",
    vi: "xkb:si::slv",
    wi: "xkb:sk::slo",
    yi: "xkb:tr::tur",
    xi: "xkb:tr:f:tur",
    zi: "xkb:ua::ukr",
    Ei: "xkb:us::eng",
    Fi: "xkb:us::fil",
    Gi: "xkb:us::ind",
    Ni: "xkb:us::msa",
    Ai: "xkb:us:altgr-intl:eng",
    Bi: "xkb:us:colemak:eng",
    Ci: "xkb:us:dvorak:eng",
    Di: "xkb:us:dvp:eng",
    Hi: "xkb:us:intl:eng",
    Ii: "xkb:us:intl:nld",
    Mi: "xkb:us:intl:por",
    Ji: "xkb:us:intl_pc:eng",
    Ki: "xkb:us:intl_pc:nld",
    Li: "xkb:us:intl_pc:por",
    Pi: "xkb:us:workman-intl:eng",
    Oi: "xkb:us:workman:eng"
  };
  je.prototype.toString = function () {
    return this.code;
  };
  var le = {},
    ie = "bn gu pa kn ml or sa ta te ne".split(" "),
    ne = {
      im_pinyin_zh_hans: Ta,
      im_pinyin_zh_hant: Ra,
      im_t13n_ja: va,
      "im_t13n_ja-Hira": ua,
      im_wubi_zh_hans: Ua,
      im_zhuyin_zh_hant: Sa,
      vkd_bg_phone: ha,
      vkd_chr_phone: ja,
      vkd_cs_qwertz: la,
      vkd_deva_phone: oa,
      vkd_en_dvorak: ma,
      vkd_es_es: "es-t-k0-und",
      vkd_ethi: Ma,
      vkd_gu_phone: na,
      vkd_guru_inscript: ya,
      vkd_guru_phone: za,
      vkd_hu_101: pa,
      vkd_hy_east: qa,
      vkd_hy_west: ra,
      vkd_ka_qwerty: "ka-t-k0-und",
      vkd_ka_typewriter: wa,
      vkd_ro_sr13392_primary: Ba,
      vkd_ro_sr13392_secondary: Aa,
      vkd_ru_phone: Da,
      vkd_ru_phone_aatseel: Ca,
      vkd_ru_phone_yazhert: Ea,
      vkd_sk_qwerty: Fa,
      vkd_ta_itrans: Ga,
      vkd_ta_tamil99: "ta-t-k0-ta99",
      vkd_ta_typewriter: Ia,
      vkd_th_pattajoti: Ja,
      vkd_th_tis: "th-t-k0-tis",
      vkd_tr_f: Ka,
      vkd_tr_q: "tr-t-k0-und",
      vkd_uk_101: La,
      vkd_us_intl: "fr-t-k0-intl",
      vkd_uz_cyrl_phone: Oa,
      vkd_uz_cyrl_type: Na,
      vkd_vi_tcvn: "vi-t-k0-und",
      vkd_vi_telex: Pa
    },
    Cf = {},
    Df;
  for (Df in ne) Cf[ne[Df]] = Df;
  var he = Cf,
    ge = {
      "nl-t-k0-intl": x,
      "fr-t-k0-intl": x,
      "de-t-k0-intl": x,
      "ht-t-k0-und": "fr",
      "id-t-k0-und": t,
      "ga-t-k0-und": t,
      "it-t-k0-intl": x,
      "jw-t-k0-und": t,
      "mr-t-k0-und": "deva_phone",
      "mr-t-k0-devanaga": "hi",
      "ms-t-k0-und": t,
      "pt-br-t-k0-intl": x,
      "pt-pt-t-k0-intl": x,
      "sa-t-k0-devanaga": "hi",
      "es-t-k0-intl": x,
      "sw-t-k0-und": t,
      "tl-t-k0-und": t,
      "ti-t-k0-und": "ethi",
      "cy-t-k0-und": t
    };
  var te;
  ab(qe, Q);
  qe.prototype.l = function (a) {
    var b = this.h[a.type];
    return b && a.target
      ? (b = b[A(a.target)])
        ? Ue(b, function (c) {
            var d = c.listener;
            return typeof d === l ? d.call(c.I, a) : d && d.handleEvent && typeof d.handleEvent === l ? d.handleEvent.call(d, a) : !0;
          })
        : !0
      : !0;
  };
  qe.prototype.s = function (a) {
    var b = this.m[a.charCode];
    return b && a.target
      ? (b = b[A(a.target)])
        ? Ue(b, function (c) {
            var d = c.listener;
            return typeof d === l ? d.call(c.I, a) : d && d.handleEvent && typeof d.handleEvent === l ? d.handleEvent.call(d, a) : !0;
          })
        : !0
      : !0;
  };
  qe.prototype.D = function () {
    ec(this.i);
    delete this.h;
    delete this.m;
    delete this.g;
  };
  ze.prototype.V = function (a, b) {
    return this.listener == a && this.I == b;
  };
  var se = {};
  ab(Ee, Q);
  y = Ee.prototype;
  y.D = function () {
    var a = this;
    this.g && (this.g.onMessage.removeListener(this.X), this.g.onDisconnect.removeListener(this.B), this.g.disconnect(), (this.g = null));
    Ie(this);
    ec(this.ca);
    ec(this.A);
    this.N.forEach(function (c) {
      var d = a.W;
      Ae(Ce(), c, [r, q, xa], d, a);
      d = a.fa;
      Ae(Ce(), c, "focus", d, a);
    });
    this.N = [];
    this.i = null;
    this.l = {};
    this.h = this.j = null;
    var b = document.getElementById("GOOGLE_INPUT_CHEXT_IFRAME_FLAG");
    b && O(b);
  };
  y.ea = function () {
    var a = this,
      b = Ne();
    !b ||
      (this.h && b === Z(this.h)) ||
      ((this.h = new ce(b)),
      this.g ||
        ((this.g = chrome.extension.connect({ name: this.ha })),
        (this.X = function (c) {
          if (
            a.h &&
            (c.getCursorPosition && Ge(a),
            c.setFocus && fe(a.h),
            c.commitText && (Z(a.h), a.h.commitText(c.commitText[0], c.commitText[1]), He(a), Ge(a)),
            c.inputMode && (c.inputMode[0] ? (a.i = me(c.inputMode[0])) : (a.i = null), (a.l = c.inputMode[1])),
            c.offstage && (a.s = !1),
            c.onstage && (a.s = !0),
            (c = c.sendInputEvents))
          ) {
            var d = Z(a.h);
            d && be(d, c[0], c[1]);
          }
        }),
        this.g.onMessage.addListener(this.X),
        (this.B = function () {
          a.g.onMessage.removeListener(a.X);
          a.g.onDisconnect.removeListener(a.B);
          a.g = null;
          a.Z();
        }),
        this.g.onDisconnect.addListener(this.B)),
      Ge(this),
      De(b, r, this.W, this),
      De(b, q, this.W, this),
      De(b, xa, this.W, this),
      De(b, "focus", this.fa, this),
      ed(this.A, document, "mousedown", this.ka, !0, this),
      this.N.push(b));
  };
  y.fa = function (a) {
    var b = {};
    this.g.postMessage({ event: ((b[a.type] = { type: a.type, isShortcut: !1 }), b) });
    Ie(this);
    He(this);
    Ge(this);
  };
  y.W = function (a) {
    var b = this;
    if (!$d(a) && this.i) {
      var c = Le(this, a),
        d = Je(a),
        e = {
          type: a.type,
          keyCode: a.keyCode,
          charCode: a.charCode,
          shiftKey: a.shiftKey,
          ctrlKey: a.ctrlKey,
          altKey: a.altKey,
          metaKey: a.metaKey,
          isShortcut: c
        },
        f = {},
        g = ((f[a.type] = e), f);
      a.type === q && ((this.j = e), (this.da = 16 === a.keyCode));
      if (!c && Ke(this, a)) Ie(this), He(this), Ge(this);
      else
        switch (a.type) {
          case q:
            13 === a.keyCode
              ? ((c = Db(e)), (c.type = r), (c.charCode = 13), Me(this, a, { keydown: e, keypress: c }), a.l(), (this.j = null))
              : d || c || "vkd" === this.i.type
              ? (Me(this, a, g), (this.j = null))
              : (this.m = setTimeout(function () {
                  Me(b, a, g);
                }, 10));
            break;
          case r:
            Ie(this);
            Me(this, a, this.j ? { keydown: this.j, keypress: e } : { keypress: e });
            this.j = null;
            break;
          case xa:
            (16 === a.keyCode && c) || Me(this, a, g);
        }
    }
  };
  y.ka = function (a) {
    this.g.postMessage({ event: { mousedown: { type: a.type } } });
  };
  kd = "chext";
  "complete" == document.readyState ? Pe() : sc(window, "load", Pe, !0);
}).call(this);
