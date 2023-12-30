(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  /*

 SPDX-License-Identifier: Apache-2.0
*/
  "use strict";
  var aa = "-t-k0-und",
    ba = "Africa Latin",
    ca = "Android",
    da = "Component already rendered",
    ea = "Deutsch",
    fa = "Din\u00e9 bizaad - Modern",
    ha = "Edge",
    ia = "English",
    ja = "Espa\u00f1ol",
    ka = "Fran\u00e7ais",
    la = "INPUTTOOL_TITLE_SHORT",
    ma = "Internet Explorer",
    na = "Italiano",
    oa = "Microsoft Edge",
    pa = "Nederlands",
    qa = "Opera",
    ra = "Polski",
    sa = "Portugu\u00eas",
    ta = "Portugu\u00eas brasileiro",
    ua = "Portugu\u00eas europeu",
    va = "SPAN",
    wa = "Silk",
    xa = "Symbol.iterator",
    ya = "US International",
    za = "Unable to set parent component",
    Aa = "about:invalid#zClosurez",
    Ba = "af-t-i0-handwrit",
    Ca = "am-t-i0-handwrit",
    Da = "ar-t-i0-handwrit",
    Fa = "as-t-i0-handwrit",
    Ga = "az-t-i0-handwrit",
    Ha = "be-t-i0-handwrit",
    Ia = "bg-t-i0-handwrit",
    Ja = "bg-t-k0-qwerty",
    Ka = "bn-t-i0-handwrit",
    La = "bn-t-und-latn-k0-und",
    Ma = "bo-t-i0-handwrit",
    Na = "bs-t-i0-handwrit",
    Oa = "ca-t-i0-handwrit",
    Pa = "ceb-t-i0-handwrit",
    Qa = "chr-t-und-latn-k0-und",
    Ra = "click",
    Sa = "co-t-i0-handwrit",
    Ta = "co-t-k0-accents",
    Ua = "crk-t-k0-phone",
    Va = "cs-t-i0-handwrit",
    Wa = "cs-t-k0-qwertz",
    Xa = "cy-t-i0-handwrit",
    Ya = "da-t-i0-handwrit",
    Za = "dblclick",
    $a = "de-ch-t-k0-und",
    ab = "de-t-i0-handwrit",
    bb = "de-t-k0-accents",
    cb = "disable",
    db = "el-t-i0-handwrit",
    m = "en",
    eb = "en-t-i0-handwrit",
    fb = "en-t-k0-dvorak",
    gb = "en-us-t-k0-intl",
    hb = "enable",
    ib = "eo-t-i0-handwrit",
    jb = "es-t-i0-handwrit",
    kb = "es-t-k0-accents",
    lb = "es-t-k0-und",
    mb = "et-t-i0-handwrit",
    nb = "eu-t-i0-handwrit",
    ob = "expand",
    pb = "expanded",
    qb = "fa-t-i0-handwrit",
    rb = "fi-t-i0-handwrit",
    tb = "fil-t-i0-handwrit",
    ub = "focused",
    vb = "focusin",
    wb = "focusout",
    xb = "fr-t-i0-handwrit",
    yb = "fr-t-k0-accents",
    zb = "fr-t-k0-intl",
    p = "function",
    Ab = "fy-t-i0-handwrit",
    Bb = "fy-t-k0-accents",
    Cb = "ga-t-i0-handwrit",
    Db = "ga-t-k0-accents",
    Eb = "gd-t-i0-handwrit",
    Fb = "gd-t-k0-accents",
    Gb = "gl-t-i0-handwrit",
    Hb = "goog-tree-collapsed-folder-icon",
    Ib = "goog-tree-expanded-folder-icon",
    Jb = "gu-t-i0-handwrit",
    Kb = "gu-t-k0-phone2",
    Lb = "gu-t-und-latn-k0-qwerty",
    Mb = "haw-t-i0-handwrit",
    Nb = "haw-t-k0-accents",
    Ob = "he-t-i0-handwrit",
    Pb = "he-t-i0-und",
    Qb = "he-t-k0-und",
    Rb = "hi-t-i0-handwrit",
    Sb = "hi-t-k0-qwerty",
    Tb = "hmn-t-i0-handwrit",
    Ub = "hr-t-i0-handwrit",
    Vb = "ht-t-i0-handwrit",
    Wb = "hu-t-i0-handwrit",
    Xb = "hu-t-k0-101key",
    Yb = "hy-hyr-t-k0-und",
    Zb = "hy-hyt-t-k0-und",
    $b = "hy-t-i0-handwrit",
    ac = "iPad",
    bc = "iPod",
    cc = "id-t-i0-handwrit",
    dc = "input_chext_arrow_button_",
    ec = "inputtool_select_inputtools",
    fc = "inputtool_selected_inputtools",
    gc = "is-t-i0-handwrit",
    hc = "it-t-i0-handwrit",
    ic = "it-t-k0-accents",
    jc = "ita-kd-menuitem-inputtool-name",
    kc = "iu-t-k0-inuktitu",
    lc = "iu-t-k0-nunavik",
    mc = "iu-t-k0-nunavut",
    nc = "ja-hira-t-i0-und",
    pc = "ja-t-i0-handwrit",
    qc = "ja-t-i0-mozcjp",
    rc = "ja-t-i0-mozcus",
    sc = "ja-t-ja-hira-i0-und",
    tc = "jv-t-i0-handwrit",
    uc = "ka-t-i0-handwrit",
    vc = "ka-t-k0-legacy",
    wc = "ka-t-k0-und",
    xc = "keypress",
    yc = "kk-t-i0-handwrit",
    zc = "km-t-i0-handwrit",
    Ac = "kn-t-i0-handwrit",
    Bc = "kn-t-und-latn-k0-und",
    Cc = "ko-t-i0-handwrit",
    Dc = "ku-t-i0-handwrit",
    Ec = "ky-cyrl-t-k0-und",
    Fc = "ky-t-i0-handwrit",
    Gc = "la-t-i0-handwrit",
    Hc = "latn-002-t-k0-und",
    Ic = "latn_002",
    Jc = "lb-t-i0-handwrit",
    Kc = "lb-t-k0-accents",
    Lc = "lo-t-i0-handwrit",
    Mc = "lt-t-i0-handwrit",
    Nc = "lv-t-i0-handwrit",
    Oc = "mg-t-i0-handwrit",
    Pc = "mi-t-i0-handwrit",
    Qc = "mk-t-i0-handwrit",
    Rc = "ml-t-i0-handwrit",
    Sc = "ml-t-und-latn-k0-und",
    Tc = "mn-cyrl-t-k0-und",
    Uc = "mn-t-i0-handwrit",
    Vc = "mni-mtei-t-k0-phone",
    Wc = "mousedown",
    Xc = "mr-t-i0-handwrit",
    Yc = "mr-t-k0-devanaga",
    Zc = "ms-t-i0-handwrit",
    $c = "mt-t-i0-handwrit",
    ad = "mul-beng-t-i0-handwrit",
    bd = "mul-cyrl-t-i0-handwrit",
    cd = "mul-deva-t-i0-handwrit",
    dd = "mul-ethi-t-i0-handwrit",
    ed = "mul-latn-t-i0-handwrit",
    fd = "mul-t-i0-handwrit",
    gd = "my-t-i0-handwrit",
    hd = "my-t-k0-myansan",
    id = "nb-t-i0-handwrit",
    jd = "ne-t-i0-handwrit",
    kd = "ne-t-und-latn-k0-und",
    ld = "nl-t-i0-handwrit",
    md = "nl-t-k0-accents",
    nd = "nn-t-i0-handwrit",
    od = "no-t-i0-handwrit",
    pd = "none",
    qd = "number",
    rd = "ny-t-i0-handwrit",
    q = "object",
    sd = "oj-t-k0-ojibwe",
    td = "or-t-i0-handwrit",
    ud = "or-t-und-latn-k0-und",
    vd = "pa-guru-t-k0-und",
    wd = "pa-guru-t-und-latn-k0-und",
    xd = "pa-t-i0-handwrit",
    yd = "pl-t-i0-handwrit",
    zd = "pl-t-k0-accents",
    r = "pt-BR",
    Ad = "pt-PT",
    Bd = "pt-br-t-i0-handwrit",
    Cd = "pt-br-t-i0-und",
    Dd = "pt-br-t-k0-accents",
    Ed = "pt-br-t-k0-intl",
    Fd = "pt-br-t-k0-und",
    Gd = "pt-pt-t-i0-handwrit",
    Hd = "pt-pt-t-i0-und",
    Id = "pt-pt-t-k0-accents",
    Jd = "pt-pt-t-k0-intl",
    Kd = "pt-pt-t-k0-und",
    Ld = "pt-t-i0-handwrit",
    Nd = "rhg-rohg-t-k0-und",
    Od = "right",
    Pd = "ro-t-i0-handwrit",
    Qd = "ro-t-k0-extended",
    Rd = "ro-t-k0-legacy",
    Sd = "ru-t-i0-handwrit",
    Td = "ru-t-k0-aatseel",
    Ud = "ru-t-k0-qwerty",
    Vd = "ru-t-k0-yazhert",
    Wd = "sa-t-k0-devanaga",
    Xd = "sa-t-und-latn-k0-und",
    Yd = "selected",
    Zd = "si-t-i0-handwrit",
    $d = "sk-t-i0-handwrit",
    ae = "sk-t-k0-qwerty",
    be = "sl-t-i0-handwrit",
    ce = "sm-t-i0-handwrit",
    de = "sm-t-k0-accents",
    ee = "sn-t-i0-handwrit",
    fe = "so-t-i0-handwrit",
    ge = "span",
    he = "sq-t-i0-handwrit",
    ie = "sr-cyrl-t-k0-und",
    je = "sr-latn-t-k0-und",
    ke = "sr-t-i0-handwrit",
    u = "string",
    le = "su-t-i0-handwrit",
    me = "sv-t-i0-handwrit",
    ne = "sw-t-i0-handwrit",
    v = "ta",
    oe = "ta-t-i0-handwrit",
    pe = "ta-t-k0-itrans",
    qe = "ta-t-k0-ta99",
    re = "ta-t-k0-typewriter",
    se = "ta-t-und-latn-k0-und",
    te = "te-t-i0-handwrit",
    ue = "te-t-und-latn-k0-und",
    ve = "tg-t-i0-handwrit",
    we = "th-t-i0-handwrit",
    xe = "th-t-k0-pattajoti",
    ye = "th-t-k0-tis",
    ze = "ti-t-i0-handwrit",
    Ae = "tr-t-i0-handwrit",
    Be = "tr-t-k0-f-accents",
    Ce = "tr-t-k0-lagacy",
    De = "tr-t-k0-legacy",
    Ee = "tr-t-k0-q-accents",
    Fe = "tr-t-k0-und",
    Ge = "type",
    He = "uk-t-i0-handwrit",
    Ie = "uk-t-k0-101key",
    Je = "und-ethi-t-k0-und",
    Ke = "und-t-i0-handwrit",
    Le = "ur-t-i0-handwrit",
    Me = "us_intl",
    Ne = "uz-cyrl-t-k0-legacy",
    Oe = "uz-cyrl-t-k0-und",
    Pe = "uz-latn-t-k0-und",
    Qe = "uz-t-i0-handwrit",
    Re = "vi-t-i0-handwrit",
    Se = "vi-t-k0-legacy",
    Te = "vi-t-k0-und",
    Ue = "xh-t-i0-handwrit",
    Ve = "yi-t-i0-handwrit",
    We = "yo-ng-t-k0-und",
    Xe = "yue-hant-t-i0-jyutping",
    Ye = "yue-hant-t-i0-und",
    Ze = "yue-hant-t-i0-yale",
    w = "zh-CN",
    $e = "zh-HK",
    af = "zh-Hans",
    y = "zh-TW",
    bf = "zh-hans-t-i0-handwrit",
    cf = "zh-hans-t-i0-voice",
    df = "zh-hant-t-i0-cangjie-1982",
    ef = "zh-hant-t-i0-handwrit",
    ff = "zh-hant-t-i0-pinyin",
    gf = "zh-hant-t-i0-und",
    hf = "zh-t-i0-handwrit",
    jf = "zh-t-i0-pinyin",
    kf = "zh-t-i0-pinyin-x0-shuangpin-abc",
    lf = "zh-t-i0-pinyin-x0-shuangpin-flypy",
    mf = "zh-t-i0-pinyin-x0-shuangpin-jiajia",
    nf = "zh-t-i0-pinyin-x0-shuangpin-ms",
    of = "zh-t-i0-pinyin-x0-shuangpin-ziguang",
    pf = "zh-t-i0-pinyin-x0-shuangpin-ziranma",
    qf = "zh-t-i0-wubi-1986",
    rf = "zh-yue-t-i0-handwrit",
    sf = "zu-t-i0-handwrit",
    tf = "\u02bb\u014clelo Hawai\u02bbi",
    uf = "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    vf = "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",
    wf = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
    xf = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)",
    yf = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)",
    z,
    zf = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    Af = function (a) {
      a = [q == typeof globalThis && globalThis, a, q == typeof window && window, q == typeof self && self, q == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    A = function (a, b) {
      if (b)
        a: {
          var c = Bf;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && null != b && Cf(c, a, { configurable: !0, writable: !0, value: b });
        }
    },
    Df = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    Ef = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == qd) return { next: zf(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    Hf = function (a, b) {
      a.prototype = Ff(b.prototype);
      a.prototype.constructor = a;
      if (Gf) Gf(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.o = b.prototype;
    },
    B = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    If = function (a, b) {
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
    Jf = function (a) {
      var b = typeof a;
      b = b != q ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
      return "array" == b || (b == q && typeof a.length == qd);
    },
    Kf = function (a) {
      var b = typeof a;
      return (b == q && null != a) || b == p;
    },
    Lf = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Mf = function (a, b, c) {
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
    C = function (a, b, c) {
      C = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Lf : Mf;
      return C.apply(null, arguments);
    },
    D = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.o = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Kk = function (d, e, f) {
        for (var h = Array(arguments.length - 2), g = 2; g < arguments.length; g++) h[g - 2] = arguments[g];
        return b.prototype[e].apply(d, h);
      };
    },
    Nf = function (a) {
      return a;
    },
    Of = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, Of);
      else {
        var c = Error().stack;
        c && (this.stack = c);
      }
      a && (this.message = String(a));
      void 0 !== b && (this.cause = b);
    },
    Pf = function (a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
      Of.call(this, c + a[d]);
    },
    Rf = function (a, b) {
      return 0 <= Qf(a, b);
    },
    Sf = function (a, b) {
      b = Qf(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c;
    },
    Tf = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    Vf = function (a, b, c, d) {
      Array.prototype.splice.apply(a, Uf(arguments, 1));
    },
    Uf = function (a, b, c) {
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    },
    Wf = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    dg = function (a) {
      if (!Xf.test(a)) return a;
      -1 != a.indexOf("&") && (a = a.replace(Yf, "&amp;"));
      -1 != a.indexOf("<") && (a = a.replace(Zf, "&lt;"));
      -1 != a.indexOf(">") && (a = a.replace($f, "&gt;"));
      -1 != a.indexOf('"') && (a = a.replace(ag, "&quot;"));
      -1 != a.indexOf("'") && (a = a.replace(bg, "&#39;"));
      -1 != a.indexOf("\x00") && (a = a.replace(cg, "&#0;"));
      return a;
    },
    F = function () {
      var a = E.navigator;
      return a && (a = a.userAgent) ? a : "";
    },
    fg = function (a) {
      return eg
        ? G
          ? G.brands.some(function (b) {
              return (b = b.brand) && -1 != b.indexOf(a);
            })
          : !1
        : !1;
    },
    H = function (a) {
      return -1 != F().indexOf(a);
    },
    I = function () {
      return eg ? !!G && 0 < G.brands.length : !1;
    },
    gg = function () {
      return I() ? !1 : H(qa);
    },
    hg = function () {
      return I() ? !1 : H("Trident") || H("MSIE");
    },
    ig = function () {
      return I() ? fg(oa) : H("Edg/");
    },
    jg = function () {
      return H("Firefox") || H("FxiOS");
    },
    lg = function () {
      return (
        H("Safari") &&
        !(kg() || (I() ? 0 : H("Coast")) || gg() || (I() ? 0 : H(ha)) || ig() || (I() ? fg(qa) : H("OPR")) || jg() || H(wa) || H(ca))
      );
    },
    kg = function () {
      return I() ? fg("Chromium") : ((H("Chrome") || H("CriOS")) && !(I() ? 0 : H(ha))) || H(wa);
    },
    mg = function () {
      return H(ca) && !(kg() || jg() || gg() || H(wa));
    },
    ng = function (a) {
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
    og = function (a) {
      var b = F();
      if (a === ma) {
        if (hg())
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
      b = ng(c);
      switch (a) {
        case qa:
          if (gg()) return b(["Version", qa]);
          if (I() ? fg(qa) : H("OPR")) return b(["OPR"]);
          break;
        case oa:
          if (I() ? 0 : H(ha)) return b([ha]);
          if (ig()) return b(["Edg"]);
          break;
        case "Chromium":
          if (kg()) return b(["Chrome", "CriOS", "HeadlessChrome"]);
      }
      return ("Firefox" === a && jg()) || ("Safari" === a && lg()) || ("Android Browser" === a && mg()) || (a === wa && H(wa))
        ? ((b = c[2]) && b[1]) || ""
        : "";
    },
    pg = function () {
      return eg ? !!G && !!G.platform : !1;
    },
    qg = function () {
      return H("iPhone") && !H(bc) && !H(ac);
    },
    rg = function () {
      return pg() ? "macOS" === G.platform : H("Macintosh");
    },
    sg = function (a) {
      sg[" "](a);
      return a;
    },
    tg = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    ug = function (a, b) {
      for (var c in a) if (a[c] == b) return !0;
      return !1;
    },
    vg = function (a, b) {
      return null !== a && b in a ? a[b] : void 0;
    },
    xg = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < wg.length; f++) (c = wg[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    },
    Ag = function (a, b) {
      this.g = (a === yg && b) || "";
      this.h = zg;
    },
    Bg = function (a) {
      return a instanceof Ag && a.constructor === Ag && a.h === zg ? a.g : "type_error:Const";
    },
    Cg = function (a) {
      this.g = a;
    },
    J = function (a) {
      this.g = a;
    },
    Dg = function (a) {
      return a instanceof J && a.constructor === J ? a.g : "type_error:SafeUrl";
    },
    Hg = function (a) {
      if (a instanceof J) return a;
      a = typeof a == q && a.K ? a.I() : String(a);
      Eg.test(a) ? (a = new J(a, Fg)) : ((a = String(a).replace(/(%0A|%0D)/g, "")), (a = a.match(Gg) ? new J(a, Fg) : null));
      return a;
    },
    Ig = function (a) {
      this.g = a;
      this.K = !0;
    },
    Jg = function (a) {
      return a instanceof Ig && a.constructor === Ig ? a.g : "type_error:SafeStyle";
    },
    Ng = function (a) {
      var b = "",
        c;
      for (c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
          if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
          var d = a[c];
          null != d && ((d = Array.isArray(d) ? d.map(Kg).join(" ") : Kg(d)), (b += c + ":" + d + ";"));
        }
      return b ? new Ig(b, Lg) : Mg;
    },
    Kg = function (a) {
      if (a instanceof J) return 'url("' + Dg(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
      if (a instanceof Ag) a = Bg(a);
      else {
        a = String(a);
        var b = a.replace(Og, "$1").replace(Og, "$1").replace(Pg, "url");
        if (Qg.test(b)) {
          if ((b = !Rg.test(a))) {
            for (var c = (b = !0), d = 0; d < a.length; d++) {
              var e = a.charAt(d);
              "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
            }
            b = b && c && Sg(a);
          }
          a = b ? Tg(a) : "zClosurez";
        } else a = "zClosurez";
      }
      if (/[{;}]/.test(a)) throw new Pf("Value does not allow [{;}], got: %s.", [a]);
      return a;
    },
    Sg = function (a) {
      for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if ("]" == e) {
          if (b) return !1;
          b = !0;
        } else if ("[" == e) {
          if (!b) return !1;
          b = !1;
        } else if (!b && !c.test(e)) return !1;
      }
      return b;
    },
    Tg = function (a) {
      return a.replace(Pg, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (h, g, k) {
          f = g;
          return k;
        });
        b = (Hg(d) || Ug).I();
        return c + f + b + f + e;
      });
    },
    Vg = function (a) {
      this.g = a;
      this.K = !0;
    },
    Xg = function (a, b) {
      if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " + a);
      var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(c))
        throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " + a);
      a: {
        for (var d = { "(": ")", "[": "]" }, e = [], f = 0; f < c.length; f++) {
          var h = c[f];
          if (d[h]) e.push(d[h]);
          else if (ug(d, h) && e.pop() != h) {
            c = !1;
            break a;
          }
        }
        c = 0 == e.length;
      }
      if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
      b instanceof Ig || (b = Ng(b));
      a = a + "{" + Jg(b).replace(/</g, "\\3C ") + "}";
      return new Vg(a, Wg);
    },
    Yg = function (a) {
      return a instanceof Vg && a.constructor === Vg ? a.g : "type_error:SafeStyleSheet";
    },
    Zg = function (a) {
      this.g = a;
      this.K = !0;
    },
    K = function (a) {
      return a instanceof Zg && a.constructor === Zg ? a.g : "type_error:SafeHtml";
    },
    ah = function (a) {
      return a instanceof Zg ? a : $g(dg(typeof a == q && a.K ? a.I() : String(a)));
    },
    gh = function (a, b, c) {
      var d = String(a);
      if (!bh.test(d)) throw Error("");
      if (d.toUpperCase() in ch) throw Error("");
      a = String(a);
      d = "<" + a;
      var e = "";
      if (b)
        for (var f in b)
          if (Object.prototype.hasOwnProperty.call(b, f)) {
            if (!bh.test(f)) throw Error("");
            var h = b[f];
            if (null != h) {
              var g = f;
              if (h instanceof Ag) h = Bg(h);
              else if ("style" == g.toLowerCase()) {
                if (!Kf(h)) throw Error("");
                h instanceof Ig || (h = Ng(h));
                h = Jg(h);
              } else {
                if (/^on/i.test(g)) throw Error("");
                if (g.toLowerCase() in dh)
                  if (h instanceof Cg) h = (h instanceof Cg && h.constructor === Cg ? h.g : "type_error:TrustedResourceUrl").toString();
                  else if (h instanceof J) h = Dg(h);
                  else if (typeof h === u) h = (Hg(h) || Ug).I();
                  else throw Error("");
              }
              h.K && (h = h.I());
              g = g + '="' + dg(String(h)) + '"';
              e += " " + g;
            }
          }
      b = d + e;
      null == c ? (c = []) : Array.isArray(c) || (c = [c]);
      !0 === eh[a.toLowerCase()] ? (b += ">") : ((f = fh(c)), (b += ">" + K(f).toString() + "</" + a + ">"));
      return $g(b);
    },
    ih = function (a) {
      function b(e) {
        Array.isArray(e) ? e.forEach(b) : ((e = ah(e)), d.push(K(e).toString()));
      }
      var c = ah(hh),
        d = [];
      a.forEach(b);
      return $g(d.join(K(c).toString()));
    },
    fh = function (a) {
      return ih(Array.prototype.slice.call(arguments));
    },
    $g = function (a) {
      if (void 0 === jh) {
        var b = null;
        var c = E.trustedTypes;
        if (c && c.createPolicy) {
          try {
            b = c.createPolicy("goog#html", { createHTML: Nf, createScript: Nf, createScriptURL: Nf });
          } catch (d) {
            E.console && E.console.error(d.message);
          }
          jh = b;
        } else jh = b;
      }
      a = (b = jh) ? b.createHTML(a) : a;
      return new Zg(a, kh);
    },
    mh = function (a, b) {
      if (lh()) for (; a.lastChild; ) a.removeChild(a.lastChild);
      a.innerHTML = K(b);
    },
    nh = function (a, b) {
      mh(a, b);
    },
    ph = function () {
      var a = E.document;
      return a.querySelector
        ? (a = a.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (a = a.nonce || a.getAttribute("nonce")) && oh.test(a)
          ? a
          : ""
        : "";
    },
    sh = function (a) {
      return -1 != a.indexOf("&") ? ("document" in E ? qh(a) : rh(a)) : a;
    },
    qh = function (a) {
      var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
      var c = E.document.createElement("div");
      return a.replace(th, function (d, e) {
        var f = b[d];
        if (f) return f;
        "#" == e.charAt(0) && ((e = Number("0" + e.slice(1))), isNaN(e) || (f = String.fromCharCode(e)));
        f || ((f = $g(d + " ")), mh(c, f), (f = c.firstChild.nodeValue.slice(0, -1)));
        return (b[d] = f);
      });
    },
    rh = function (a) {
      return a.replace(/&([^;]+);/g, function (b, c) {
        switch (c) {
          case "amp":
            return "&";
          case "lt":
            return "<";
          case "gt":
            return ">";
          case "quot":
            return '"';
          default:
            return "#" != c.charAt(0) || ((c = Number("0" + c.slice(1))), isNaN(c)) ? b : String.fromCharCode(c);
        }
      });
    },
    xh = function (a) {
      return a ? new uh(vh(a)) : wh || (wh = new uh());
    },
    yh = function (a, b) {
      return typeof b === u ? a.getElementById(b) : b;
    },
    Ah = function (a, b) {
      tg(b, function (c, d) {
        c && typeof c == q && c.K && (c = c.I());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : zh.hasOwnProperty(d)
          ? a.setAttribute(zh[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    Ch = function (a, b, c) {
      return Bh(document, arguments);
    },
    Bh = function (a, b) {
      var c = b[1],
        d = Dh(a, String(b[0]));
      c && (typeof c === u ? (d.className = c) : Array.isArray(c) ? (d.className = c.join(" ")) : Ah(d, c));
      2 < b.length && Eh(a, d, b, 2);
      return d;
    },
    Eh = function (a, b, c, d) {
      function e(g) {
        g && b.appendChild(typeof g === u ? a.createTextNode(g) : g);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Jf(f) || (Kf(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && typeof f.length == qd) {
              if (Kf(f)) {
                var h = typeof f.item == p || typeof f.item == u;
                break a;
              }
              if (typeof f === p) {
                h = typeof f.item == p;
                break a;
              }
            }
            h = !1;
          }
          Fh(h ? Tf(f) : f, e);
        }
      }
    },
    Dh = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    Gh = function (a, b) {
      Eh(vh(a), a, arguments, 1);
    },
    Hh = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    },
    Ih = function (a) {
      a && a.parentNode && a.parentNode.removeChild(a);
    },
    vh = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    uh = function (a) {
      this.g = a || E.document || document;
    },
    Jh = function (a, b) {
      a = a.g;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      a.querySelectorAll && a.querySelector && b ? (b = a.querySelectorAll(b + "")) : (b = a.getElementsByTagName(b || "*"));
      return b;
    },
    Kh = function () {
      this.la = this.la;
      this.ma = this.ma;
    },
    Lh = function (a) {
      a.la || ((a.la = !0), a.F());
    },
    Mh = function (a, b) {
      this.type = a;
      this.i = this.target = b;
      this.defaultPrevented = !1;
    },
    Oh = function (a, b) {
      Mh.call(this, a ? a.type : "");
      this.relatedTarget = this.i = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.j = this.g = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.pointerId = 0;
      this.pointerType = "";
      this.m = null;
      if (a) {
        var c = (this.type = a.type),
          d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.i = b;
        if ((b = a.relatedTarget)) {
          if (L) {
            a: {
              try {
                sg(b.nodeName);
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
        this.g = a.keyCode || 0;
        this.key = a.key || "";
        this.j = a.charCode || (c == xc ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === u ? a.pointerType : Nh[a.pointerType] || "";
        this.state = a.state;
        this.m = a;
        a.defaultPrevented && Oh.o.h.call(this);
      }
    },
    Qh = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.ta = e;
      this.key = ++Ph;
      this.removed = this.pa = !1;
    },
    Rh = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.ta = null;
    },
    Sh = function (a) {
      this.src = a;
      this.g = {};
      this.h = 0;
    },
    Th = function (a, b) {
      var c = b.type;
      c in a.g && Sf(a.g[c], b) && (Rh(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
    },
    Uh = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.listener == b && f.capture == !!c && f.ta == d) return e;
      }
      return -1;
    },
    Wh = function (a, b, c, d, e) {
      if (d && d.once) return Vh(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Wh(a, b[f], c, d, e);
        return null;
      }
      c = Xh(c);
      return a && a[Yh] ? a.listen(b, c, Kf(d) ? !!d.capture : !!d, e) : Zh(a, b, c, !1, d, e);
    },
    Zh = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var h = Kf(e) ? !!e.capture : !!e,
        g = $h(a);
      g || (a[ai] = g = new Sh(a));
      c = g.add(b, c, d, h, f);
      if (c.proxy) return c;
      d = bi();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) ci || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(di(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      ei++;
      return c;
    },
    bi = function () {
      function a(c) {
        return b.call(a.src, a.listener, c);
      }
      var b = fi;
      return a;
    },
    Vh = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) Vh(a, b[f], c, d, e);
        return null;
      }
      c = Xh(c);
      return a && a[Yh] ? a.N.add(String(b), c, !0, Kf(d) ? !!d.capture : !!d, e) : Zh(a, b, c, !0, d, e);
    },
    gi = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) gi(a, b[f], c, d, e);
      else
        ((d = Kf(d) ? !!d.capture : !!d), (c = Xh(c)), a && a[Yh])
          ? a.N.remove(String(b), c, d, e)
          : a && (a = $h(a)) && ((b = a.g[b.toString()]), (a = -1), b && (a = Uh(b, c, d, e)), (c = -1 < a ? b[a] : null) && hi(c));
    },
    hi = function (a) {
      if (typeof a !== qd && a && !a.removed) {
        var b = a.src;
        if (b && b[Yh]) Th(b.N, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(di(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          ei--;
          (c = $h(b)) ? (Th(c, a), 0 == c.h && ((c.src = null), (b[ai] = null))) : Rh(a);
        }
      }
    },
    di = function (a) {
      return a in ii ? ii[a] : (ii[a] = "on" + a);
    },
    fi = function (a, b) {
      if (a.removed) a = !0;
      else {
        b = new Oh(b, this);
        var c = a.listener,
          d = a.ta || a.src;
        a.pa && hi(a);
        a = c.call(d, b);
      }
      return a;
    },
    $h = function (a) {
      a = a[ai];
      return a instanceof Sh ? a : null;
    },
    Xh = function (a) {
      if (typeof a === p) return a;
      a[ji] ||
        (a[ji] = function (b) {
          return a.handleEvent(b);
        });
      return a[ji];
    },
    M = function () {
      Kh.call(this);
      this.N = new Sh(this);
      this.lb = this;
      this.na = null;
    },
    li = function (a, b) {
      var c,
        d = a.na;
      if (d) for (c = []; d; d = d.na) c.push(d);
      a = a.lb;
      d = b.type || b;
      if (typeof b === u) b = new Mh(b, a);
      else if (b instanceof Mh) b.target = b.target || a;
      else {
        var e = b;
        b = new Mh(d, a);
        xg(b, e);
      }
      e = !0;
      if (c)
        for (var f = c.length - 1; 0 <= f; f--) {
          var h = (b.i = c[f]);
          e = ki(h, d, !0, b) && e;
        }
      h = b.i = a;
      e = ki(h, d, !0, b) && e;
      e = ki(h, d, !1, b) && e;
      if (c) for (f = 0; f < c.length; f++) (h = b.i = c[f]), (e = ki(h, d, !1, b) && e);
      return e;
    },
    ki = function (a, b, c, d) {
      b = a.N.g[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.removed && h.capture == c) {
          var g = h.listener,
            k = h.ta || h.src;
          h.pa && Th(a.N, h);
          e = !1 !== g.call(k, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    },
    mi = function (a) {
      a: {
        var b = vh(a);
        if (b.defaultView && b.defaultView.getComputedStyle && (b = b.defaultView.getComputedStyle(a, null))) {
          b = b.direction || b.getPropertyValue("direction") || "";
          break a;
        }
        b = "";
      }
      return b || (a.currentStyle ? a.currentStyle.direction : null) || (a.style && a.style.direction);
    },
    ni = function (a, b) {
      b = Yg(b);
      if (N && void 0 !== a.cssText) a.cssText = b;
      else if (E.trustedTypes)
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
          for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
          a.firstChild.data = String(b);
        } else Hh(a), a.appendChild(vh(a).createTextNode(String(b)));
      else a.innerHTML = b;
    },
    oi = function (a) {
      return (a = a.exec(F())) ? a[1] : "";
    },
    si = function (a) {
      this.code = a;
      this.type = null;
      0 <= this.code.indexOf("-i0")
        ? ((this.type = "im"), Wf(this.code, "-handwrit") ? (this.type = "hw") : Wf(this.code, "-voice") && (this.type = "vo"))
        : 0 <= this.code.indexOf("-k0")
        ? (this.type = "vkd")
        : 0 == this.code.lastIndexOf("xkb", 0) && (this.type = "xkb");
      a = this.code.split(/-t|-i0|-k0|:/);
      "yue-hant" === a[0] && (a[0] = $e);
      switch (this.code) {
        case Ye:
          a[0] = $e;
          break;
        case jf:
        case qf:
          a[0] = af;
      }
      if ("vkd" === this.type && !pi[this.code] && !qi[this.code]) {
        var b = this.code.split("-t-");
        a = b[0];
        b = b[1];
        a = a.replace(/-/g, "_");
        "en_us" === a && (a = "us");
        (Rf(ri, a) && ("und-latn-k0-und" === b || "k0-und" === b)) ||
          "k0-und" === b ||
          ((a = b.match(/k0-(.*)/)), a[1] && a[1].replace("qwerty", "phone").replace("-", "_"));
      }
    },
    wi = function (a) {
      if (!a) return null;
      if ("nacl_mozc_jp" === a || "nacl_mozc_us" === a) a = sc;
      0 != a.lastIndexOf("xkb", 0) && (ug(ti, a) || (a = ui(a)), (a = a.replace(/_/g, "-")), ug(ti, a) || (a = ui(a + "-und")));
      return vi[a] ? vi[a] : ug(ti, a) ? ((vi[a] = new si(a)), vi[a]) : null;
    },
    ui = function (a) {
      if (xi[a]) return xi[a];
      if ("vkd_iw" === a) return Qb;
      if ("im_t13n_iw" === a) return Pb;
      if (a === Ce) return De;
      var b = a.split("_"),
        c = "";
      0 == a.lastIndexOf("im_t13n", 0)
        ? (c = b[2] + "-t-i0-und")
        : 0 == a.lastIndexOf("vkd_", 0) &&
          (2 === b.length
            ? (c = b[1] + aa)
            : Rf(ri, b[1])
            ? (c = "inscript" === b[2] ? b[1] + aa : b[1] + "-t-und-latn-k0-und")
            : ((c = b[1] + "-t-k0-" + b[2]), ug(ti, c) || (c = b[1] + "-" + b[2] + aa)));
      return ug(ti, c) ? c : a;
    },
    yi = function (a) {
      var b = "W";
      if (a.W && a.hasOwnProperty(b)) return a.W;
      b = new a();
      return (a.W = b);
    },
    zi = function () {},
    O = function (a) {
      return Array.prototype.slice.call(a);
    },
    Ai = function (a) {
      var b = P(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = O(a)), Q(a, b | 1));
    },
    Ci = function (a) {
      Bi(a, 1);
      return a;
    },
    Di = function (a, b) {
      Q(b, (a | 0) & -255);
    },
    Ei = function (a, b) {
      Q(b, (a | 34) & -221);
    },
    Fi = function (a) {
      a = (a >> 11) & 1023;
      return 0 === a ? 536870912 : a;
    },
    Gi = function (a) {
      return null !== a && typeof a === q && !Array.isArray(a) && a.constructor === Object;
    },
    Hi = function (a) {
      return a;
    },
    Ii = function (a) {
      if (null == a) return a;
      if (typeof a === u) {
        if (!a) return;
        a = +a;
      }
      if (typeof a === qd) return a;
    },
    Ji = function (a) {
      return null == a || typeof a === u ? a : void 0;
    },
    Mi = function (a, b, c) {
      null == a && (a = Ki);
      Ki = void 0;
      if (null == a) {
        var d = 96;
        c ? ((a = [c]), (d |= 512)) : (a = []);
        b && (d = (d & -2095105) | ((b & 1023) << 11));
      } else {
        if (!Array.isArray(a)) throw Error();
        d = P(a);
        if (d & 64) return a;
        d |= 64;
        if (c && ((d |= 512), c !== a[0])) throw Error();
        a: {
          c = a;
          var e = c.length;
          if (e) {
            var f = e - 1,
              h = c[f];
            if (Gi(h)) {
              d |= 256;
              b = +!!(d & 512) - 1;
              e = f - b;
              1024 <= e && (Li(c, b, h), (e = 1023));
              d = (d & -2095105) | ((e & 1023) << 11);
              break a;
            }
          }
          b &&
            ((h = +!!(d & 512) - 1),
            (b = Math.max(b, e - h)),
            1024 < b && (Li(c, h, {}), (d |= 256), (b = 1023)),
            (d = (d & -2095105) | ((b & 1023) << 11)));
        }
      }
      Q(a, d);
      return a;
    },
    Li = function (a, b, c) {
      for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
        var h = a[f];
        null != h && h !== c && (c[f - b] = h);
      }
      a.length = d + 1;
      a[d] = c;
    },
    Ri = function (a) {
      switch (typeof a) {
        case qd:
          return isFinite(a) ? a : String(a);
        case "boolean":
          return a ? 1 : 0;
        case q:
          if (a && !Array.isArray(a) && Ni && null != a && a instanceof Uint8Array) {
            if (Oi) {
              for (var b = "", c = 0, d = a.length - 10240; c < d; ) b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else {
              void 0 === b && (b = 0);
              if (!Pi) {
                Pi = {};
                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                d = ["+/=", "+/", "-_=", "-_.", "-_"];
                for (var e = 0; 5 > e; e++) {
                  var f = c.concat(d[e].split(""));
                  Qi[e] = f;
                  for (var h = 0; h < f.length; h++) {
                    var g = f[h];
                    void 0 === Pi[g] && (Pi[g] = h);
                  }
                }
              }
              b = Qi[b];
              c = Array(Math.floor(a.length / 3));
              d = b[64] || "";
              for (e = f = 0; f < a.length - 2; f += 3) {
                var k = a[f],
                  l = a[f + 1];
                g = a[f + 2];
                h = b[k >> 2];
                k = b[((k & 3) << 4) | (l >> 4)];
                l = b[((l & 15) << 2) | (g >> 6)];
                g = b[g & 63];
                c[e++] = "" + h + k + l + g;
              }
              h = 0;
              g = d;
              switch (a.length - f) {
                case 2:
                  (h = a[f + 1]), (g = b[(h & 15) << 2] || d);
                case 1:
                  (a = a[f]), (c[e] = "" + b[a >> 2] + b[((a & 3) << 4) | (h >> 4)] + g + d);
              }
              a = c.join("");
            }
            return a;
          }
      }
      return a;
    },
    Si = function (a, b, c) {
      a = O(a);
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
    Ui = function (a, b, c, d, e, f) {
      if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && P(a) & 1 ? void 0 : f && P(a) & 2 ? a : Ti(a, b, c, void 0 !== d, e, f);
        else if (Gi(a)) {
          var h = {},
            g;
          for (g in a) h[g] = Ui(a[g], b, c, d, e, f);
          a = h;
        } else a = b(a, d);
        return a;
      }
    },
    Ti = function (a, b, c, d, e, f) {
      var h = d || c ? P(a) : 0;
      d = d ? !!(h & 32) : void 0;
      a = O(a);
      for (var g = 0; g < a.length; g++) a[g] = Ui(a[g], b, c, d, e, f);
      c && c(h, a);
      return a;
    },
    Wi = function (a) {
      return a.La === Vi ? a.toJSON() : Ri(a);
    },
    Xi = function (a, b, c) {
      c = void 0 === c ? Ei : c;
      if (null != a) {
        if (Ni && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
          var d = P(a);
          return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? Ti(a, Xi, d & 4 ? Ei : c, !0, !1, !0) : (Q(a, d | 34), a);
        }
        a.La === Vi && ((b = a.G), (c = Yi(b)), (a = c & 2 ? a : Zi(a, b, c, !0)));
        return a;
      }
    },
    Zi = function (a, b, c, d) {
      a = a.constructor;
      Ki = b = $i(b, c, d);
      b = new a(b);
      Ki = void 0;
      return b;
    },
    $i = function (a, b, c) {
      var d = c || b & 2 ? Ei : Di,
        e = !!(b & 32);
      a = Si(a, b, function (f) {
        return Xi(f, e, d);
      });
      Bi(a, 32 | (c ? 2 : 0));
      return a;
    },
    bj = function (a, b) {
      a = a.G;
      return aj(a, Yi(a), b);
    },
    aj = function (a, b, c) {
      if (-1 === c) return null;
      if (c >= Fi(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else if (((b = c + (+!!(b & 512) - 1)), b < a.length)) return a[b];
    },
    cj = function (a, b, c, d) {
      var e = Fi(b);
      if (c >= e) {
        var f = b;
        if (b & 256) e = a[a.length - 1];
        else {
          if (null == d) return;
          e = a[e + (+!!(b & 512) - 1)] = {};
          f |= 256;
        }
        e[c] = d;
        f !== b && Q(a, f);
      } else (a[c + (+!!(b & 512) - 1)] = d), b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    },
    fj = function (a, b, c) {
      var d = b & 2;
      a = aj(a, b, c);
      Array.isArray(a) || (a = dj);
      b = P(a);
      b & 1 || Ci(a);
      d ? b & 2 || Bi(a, 34) : b & 32 && !(b & 2) && ej(a, 32);
      return a;
    },
    gj = function (a, b, c) {
      a = a.G;
      var d = Yi(a),
        e = d & 2,
        f = fj(a, d, b),
        h = P(f);
      if (!(h & 4)) {
        Object.isFrozen(f) && ((h = 0), (f = O(f)), cj(a, d, b, f));
        for (var g = 0, k = 0; g < f.length; g++) {
          var l = c(f[g]);
          null != l && (f[k++] = l);
        }
        k < g && (f.length = k);
        h |= 5;
        e && (h |= 34);
        Q(f, h);
        h & 2 && Object.freeze(f);
      }
      !e && (h & 2 || Object.isFrozen(f)) && ((f = O(f)), Bi(f, 5), cj(a, d, b, f));
      return f;
    },
    ij = function (a) {
      var b = a.G,
        c = Yi(b);
      a = !!(c & 2);
      var d = a ? 1 : 2,
        e = hj,
        f = !!(c & 2),
        h = fj(b, c, 3);
      if (h !== dj && P(h) & 4)
        3 !== d &&
          (f
            ? 2 === d && ((d = P(h)), (h = O(h)), Q(h, d), cj(b, c, 3, h))
            : ((f = Object.isFrozen(h)),
              1 === d
                ? f || Object.freeze(h)
                : ((d = P(h)), (e = d & -35), f && ((h = O(h)), (d = 0), cj(b, c, 3, h)), d !== e && Q(h, e)))),
          (b = h);
      else {
        var g = h;
        h = !!(c & 2);
        var k = !!(P(g) & 2);
        f = g;
        !h && k && (g = O(g));
        var l = c | (k ? 2 : 0);
        k = k || void 0;
        for (var n = 0, x = 0; n < g.length; n++) {
          var t = g[n];
          var oc = e,
            sb = !1;
          if (null == t || typeof t !== q || (sb = Array.isArray(t)) || t.La !== Vi)
            if (sb) {
              var Ea = (sb = P(t));
              0 === Ea && (Ea |= l & 32);
              Ea |= l & 2;
              Ea !== sb && Q(t, Ea);
              t = new oc(t);
            } else t = void 0;
          void 0 !== t && ((k = k || Yi(t.G) & 2), (g[x++] = t));
        }
        x < n && (g.length = x);
        e = g;
        g = P(e);
        l = g | 5;
        k = k ? l & -9 : l | 8;
        g != k && (Object.isFrozen(e) && (e = O(e)), Q(e, k));
        g = e;
        f !== g && cj(b, c, 3, g);
        ((h && 2 !== d) || 1 === d) && Object.freeze(g);
        b = g;
      }
      if (!(a || P(b) & 8)) {
        for (a = 0; a < b.length; a++) (c = b[a]), (d = c.G), (h = Yi(d)), (d = h & 2 ? Zi(c, d, h, !1) : c), c !== d && (b[a] = d);
        Bi(b, 8);
      }
      return b;
    },
    jj = function (a, b) {
      return null != a ? a : b;
    },
    kj = function (a) {
      var b = -1;
      b = void 0 === b ? 0 : b;
      a = Ii(bj(a, 5));
      return jj(a, b);
    },
    lj = function (a, b, c) {
      this.G = Mi(a, b, c);
    },
    mj = function (a, b, c) {
      var d = a.constructor.Kb,
        e = Fi(Yi(c ? a.G : b)),
        f = !1;
      if (d) {
        if (!c) {
          b = O(b);
          var h;
          if (b.length && Gi((h = b[b.length - 1])))
            for (f = 0; f < d.length; f++)
              if (d[f] >= e) {
                Object.assign((b[b.length - 1] = {}), h);
                break;
              }
          f = !0;
        }
        e = b;
        c = !c;
        h = Yi(a.G);
        a = Fi(h);
        h = +!!(h & 512) - 1;
        for (var g, k, l = 0; l < d.length; l++)
          if (((k = d[l]), k < a)) {
            k += h;
            var n = e[k];
            null == n ? (e[k] = c ? dj : Ci([])) : c && n !== dj && Ai(n);
          } else
            g || ((n = void 0), e.length && Gi((n = e[e.length - 1])) ? (g = n) : e.push((g = {}))),
              (n = g[k]),
              null == g[k] ? (g[k] = c ? dj : Ci([])) : c && n !== dj && Ai(n);
      }
      d = b.length;
      if (!d) return b;
      var x;
      if (Gi((g = b[d - 1]))) {
        a: {
          var t = g;
          e = {};
          c = !1;
          for (var oc in t) (a = t[oc]), Array.isArray(a) && a != a && (c = !0), null != a ? (e[oc] = a) : (c = !0);
          if (c) {
            for (var sb in e) {
              t = e;
              break a;
            }
            t = null;
          }
        }
        t != g && (x = !0);
        d--;
      }
      for (; 0 < d; d--) {
        g = b[d - 1];
        if (null != g) break;
        var Ea = !0;
      }
      if (!x && !Ea) return b;
      var Md;
      f ? (Md = b) : (Md = Array.prototype.slice.call(b, 0, d));
      b = Md;
      f && (b.length = d);
      t && b.push(t);
      return b;
    },
    hj = function (a) {
      this.G = Mi(a);
    },
    nj = function (a) {
      this.G = Mi(a);
    },
    qj = function (a) {
      a = oj(a);
      var b = [];
      (a = pj[a]) &&
        Fh(a, function (c) {
          Rf(gj(c, 6, Hi), 15) || b.push(Ji(bj(c, 2)));
        });
      return b;
    },
    sj = function () {
      var a = [];
      tg(pj, function (b, c) {
        rj(b, function (d) {
          return Rf(gj(d, 6, Hi), 15);
        }) || a.push(c);
      });
      return a;
    },
    oj = function (a) {
      a = a.replace(/_/g, "-").toLowerCase();
      if (0 == a.indexOf("zh-tw")) return "zh-Hant";
      if (0 == a.indexOf("zh-hk")) return $e;
      if ("zh" == a || 0 == a.indexOf("zh-cn")) return af;
      if ("pt" == a) return r;
      var b = a.split(/[\-]/g),
        c = "";
      a = b[0];
      "iw" == a && (a = "he");
      pj[a] && (c = a);
      for (var d = 1; d < b.length; d++) {
        var e = b[d];
        2 == e.length ? (e = e.toUpperCase()) : 4 == e.length && (e = e.charAt(0).toUpperCase() + e.slice(1));
        a += "-" + e;
        pj[a] && (c = a);
      }
      return c;
    },
    tj = function () {
      this.h = {};
      this.i = window.navigator.language || m;
      zi.g();
      this.g = LanguageDisplays;
      this.g.localNames[af] = LanguageDisplays.localNames[w];
      this.g.localNames["zh-Hant"] = LanguageDisplays.localNames[y];
    },
    uj = function (a, b, c) {
      var d = a.g.localNames[a.i];
      d || (d = a.g.localNames.en);
      for (var e = 0; e < d.length; e++) {
        var f = d[e].split(":"),
          h = a.h[f[1]];
        h && 0 != h.length && b({ language: f[0], inputtools: h }, c);
      }
    },
    vj = function (a) {
      return { valueOf: a }.valueOf();
    },
    wj = function (a) {
      var b = document.implementation.createHTMLDocument("").createRange();
      a = $g(a);
      return b.createContextualFragment(K(a));
    },
    xj = function (a) {
      a = a.nodeName;
      return typeof a === u ? a : "FORM";
    },
    yj = function (a) {
      a = a.nodeType;
      return 1 === a || typeof a !== qd;
    },
    Aj = function () {
      this.g = zj;
      this.changes = [];
    },
    Ej = function (a) {
      var b = Bj;
      a = wj(a);
      a = document.createTreeWalker(
        a,
        5,
        function (h) {
          return Cj(b, h);
        },
        !1
      );
      for (var c = a.nextNode(), d = document.createDocumentFragment(), e = d; null !== c; ) {
        var f = void 0;
        if (3 === c.nodeType) f = document.createTextNode(c.data);
        else if (yj(c)) f = Dj(b, c);
        else throw Error("");
        e.appendChild(f);
        if ((c = a.firstChild())) e = f;
        else for (; !(c = a.nextSibling()) && (c = a.parentNode()); ) e = e.parentNode;
      }
      return d;
    },
    Dj = function (a, b) {
      var c = xj(b),
        d = document.createElement(c);
      b = b.attributes;
      for (var e = Ef(b), f = e.next(); !f.done; f = e.next()) {
        var h = f.value;
        f = h.name;
        h = h.value;
        var g = a.g;
        var k = g.g.get(c);
        g = (null == k ? 0 : k.has(f)) ? k.get(f) : g.i.has(f) ? { A: 1 } : (g = g.j.get(f)) ? g : { A: 0 };
        a: {
          if ((k = g.conditions)) {
            k = Ef(k);
            for (var l = k.next(); !l.done; l = k.next()) {
              var n = Ef(l.value);
              l = n.next().value;
              n = n.next().value;
              var x = void 0;
              if ((l = null == (x = b.getNamedItem(l)) ? void 0 : x.value) && !n.has(l)) {
                k = !1;
                break a;
              }
            }
          }
          k = !0;
        }
        if (k)
          switch (g.A) {
            case 1:
              Fj(d, f, h);
              break;
            case 2:
              a: if (((g = void 0), Gj)) {
                try {
                  g = new URL(h);
                } catch (t) {
                  g = "https:";
                  break a;
                }
                g = g.protocol;
              } else
                b: {
                  g = document.createElement("a");
                  try {
                    g.href = h;
                  } catch (t) {
                    g = void 0;
                    break b;
                  }
                  g = g.protocol;
                  g = ":" === g || "" === g ? "https:" : g;
                }
              g = void 0 !== g && -1 !== Hj.indexOf(g.toLowerCase()) ? h : Aa;
              g !== h && Ij(a);
              Fj(d, f, g);
              break;
            case 3:
              Fj(d, f, h.toLowerCase());
              break;
            case 4:
              Fj(d, f, h);
              break;
            case 0:
              Ij(a);
          }
        else Ij(a);
      }
      return d;
    },
    Cj = function (a, b) {
      if (3 === b.nodeType) return 1;
      if (!yj(b)) return 2;
      b = xj(b);
      if (null === b) return Ij(a), 2;
      var c = a.g;
      if ("FORM" !== b && (c.h.has(b) || c.g.has(b))) return 1;
      Ij(a);
      return 2;
    },
    Ij = function (a) {
      0 === a.changes.length && a.changes.push("");
    },
    Fj = function (a, b, c) {
      a.setAttribute(b, c);
    },
    Jj = function (a) {
      return Yg(a);
    },
    Lj = function () {
      var a = [],
        b = 0;
      tg(Kj, function (d) {
        d = kj(d);
        d > b && (b = d);
      });
      for (var c = 0; c <= b; c++)
        a.push(Xg(".ita-icon-" + c, { "background-position": -((c % 10) * 50 + 14) + "px " + -(50 * Math.floor(c / 10) + 17) + "px" }));
      return new Vg(a.map(Jj).join(""), Wg);
    },
    Mj = function (a) {
      return typeof a.className == u ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    Nj = function (a, b) {
      typeof a.className == u ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
    },
    Oj = function (a, b) {
      return a.classList ? a.classList.contains(b) : Rf(a.classList ? a.classList : Mj(a).match(/\S+/g) || [], b);
    },
    Pj = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!Oj(a, b)) {
        var c = Mj(a);
        Nj(a, c + (0 < c.length ? " " + b : b));
      }
    },
    Qj = function (a) {
      a.classList
        ? a.classList.remove(ub)
        : Oj(a, ub) &&
          Nj(
            a,
            Array.prototype.filter
              .call(a.classList ? a.classList : Mj(a).match(/\S+/g) || [], function (b) {
                return b != ub;
              })
              .join(" ")
          );
    },
    Rj = function () {},
    Sj = function (a) {
      return Ch(va, { class: "chext-arrowbutton-" + a.toLowerCase(), id: dc + a.toLowerCase() });
    },
    Tj = function () {},
    Uj = function (a, b) {
      a = document.getElementById(a);
      b = chrome.i18n.getMessage(b);
      a && (a.innerText = b);
    },
    Xj = function () {
      this.g = Vj;
      this.get(0) || Wj(this);
      this.get(20) || (this.set(4, !0), this.set(5, !0), this.set(6, !0), this.set(7, !1), this.set(9, !0), this.set(20, !0));
      this.get(28) || this.set(28, 1);
    },
    Yj = function (a) {
      a = a.get(2);
      var b = [];
      Fh(a, function (c) {
        (c = wi(c)) && b.push(c.code);
      });
      return b;
    },
    Zj = function (a) {
      a &&
        tg(a, function (b, c) {
          localStorage[String(c)] = JSON.stringify(b);
        });
    },
    Wj = function (a) {
      a.set(1, localStorage.getItem(a.g.hb));
      var b = localStorage.getItem(a.g.ib),
        c = [];
      b && (c = b.split(","));
      a.set(2, c);
      b = a.get(a.g.jb);
      tg(
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
    ak = function (a, b) {
      b ? a.setAttribute("role", b) : a.removeAttribute("role");
    },
    R = function (a, b, c) {
      Array.isArray(c) && (c = c.join(" "));
      var d = "aria-" + b;
      "" === c || void 0 == c
        ? (bk ||
            ((c = {}),
            (bk =
              ((c.atomic = !1),
              (c.autocomplete = pd),
              (c.dropeffect = pd),
              (c.haspopup = !1),
              (c.live = "off"),
              (c.multiline = !1),
              (c.multiselectable = !1),
              (c.orientation = "vertical"),
              (c.readonly = !1),
              (c.relevant = "additions text"),
              (c.required = !1),
              (c.sort = pd),
              (c.busy = !1),
              (c.disabled = !1),
              (c.hidden = !1),
              (c.invalid = "false"),
              c))),
          (c = bk),
          b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
        : a.setAttribute(d, c);
    },
    hk = function (a, b, c, d, e, f) {
      if (ck && e) return dk(a);
      if (e && !d) return !1;
      if (!L) {
        typeof b === qd && (b = ek(b));
        var h = 17 == b || 18 == b || (ck && 91 == b);
        if (((!c || ck) && h) || (ck && 16 == b && (d || f))) return !1;
      }
      if ((fk || gk) && d && c)
        switch (a) {
          case 220:
          case 219:
          case 221:
          case 192:
          case 186:
          case 189:
          case 187:
          case 188:
          case 190:
          case 191:
          case 192:
          case 222:
            return !1;
        }
      if (N && d && b == a) return !1;
      switch (a) {
        case 13:
          return L ? (f || e ? !1 : !(c && d)) : !0;
        case 27:
          return !(fk || gk || L);
      }
      return L && (d || e || f) ? !1 : dk(a);
    },
    dk = function (a) {
      if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || ((fk || gk) && 0 == a)) return !0;
      switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
        case 163:
        case 58:
          return !0;
        case 173:
          return L;
        default:
          return !1;
      }
    },
    ek = function (a) {
      if (L) a = ik(a);
      else if (ck && fk)
        switch (a) {
          case 93:
            a = 91;
        }
      return a;
    },
    ik = function (a) {
      switch (a) {
        case 61:
          return 187;
        case 59:
          return 186;
        case 173:
          return 189;
        case 224:
          return 91;
        case 0:
          return 224;
        default:
          return a;
      }
    },
    jk = function (a, b) {
      null != a && this.B.apply(this, arguments);
    },
    kk = function (a) {
      Kh.call(this);
      this.h = a;
      this.g = {};
    },
    lk = function () {},
    nk = function (a) {
      M.call(this);
      this.X = a || xh();
      this.Da = mk;
      this.ja = null;
      this.s = !1;
      this.h = null;
      this.P = void 0;
      this.J = this.i = this.g = this.S = null;
    },
    ok = function (a) {
      return a.ja || (a.ja = ":" + (a.Cb.g++).toString(36));
    },
    pk = function (a) {
      a.P || (a.P = new kk(a));
      return a.P;
    },
    qk = function (a, b) {
      if (a == b) throw Error(za);
      var c;
      if ((c = b && a.g && a.ja)) {
        c = a.g;
        var d = a.ja;
        c = c.J && d ? vg(c.J, d) || null : null;
      }
      if (c && a.g != b) throw Error(za);
      a.g = b;
      nk.o.Na.call(a, b);
    },
    rk = function (a, b) {
      if (a.s) throw Error(da);
      a.h || a.xa();
      b ? b.insertBefore(a.h, null) : a.X.g.body.appendChild(a.h);
      (a.g && !a.g.s) || a.H();
    },
    sk = function (a) {
      null == a.Da && (a.Da = "rtl" == mi(a.s ? a.h : a.X.g.body));
      return a.Da;
    },
    S = function (a) {
      return !!a.i && 0 != a.i.length;
    },
    tk = function (a) {
      return a.i ? a.i.length : 0;
    },
    T = function (a, b) {
      return a.i ? a.i[b] || null : null;
    },
    U = function (a, b) {
      a.i && a.i.forEach(b, void 0);
    },
    V = function (a, b, c) {
      nk.call(this, c);
      this.j = b || uk;
      a instanceof Zg ||
        ((a = ah(a)),
        (a = $g(
          K(a)
            .toString()
            .replace(/(\r\n|\r|\n)/g, "<br>")
        )));
      this.Ba = a;
      this.da = this.Ea = !1;
      this.mb = hh;
      this.ka = -1;
    },
    xk = function (a, b) {
      if (b != a.ka) {
        a.ka = b;
        var c = vk(a);
        if (c) {
          var d = wk(a) + "px";
          sk(a) ? (c.style.paddingRight = d) : (c.style.paddingLeft = d);
        }
        U(a, function (e) {
          xk(e, b + 1);
        });
      }
    },
    W = function (a) {
      var b = a.getTree();
      b && yk(b, a);
    },
    Ak = function (a, b) {
      if (a.Ea != b) {
        a.Ea = b;
        zk(a);
        var c = a.l();
        c && (R(c, Yd, b), b && ((b = a.getTree().l()), R(b, "activedescendant", ok(a))));
      }
    },
    Ck = function (a) {
      var b = a.getTree(),
        c = a.v() && S(a);
      b = { class: b.ea ? a.j.Ua : a.j.Va, style: Bk(a) };
      var d = [];
      c &&
        U(a, function (e) {
          d.push(Ck(e));
        });
      c = gh("div", b, d);
      return gh("div", { class: a.j.xb, id: ok(a) }, [Dk(a), c]);
    },
    wk = function (a) {
      return Math.max(0, (a.ba() - 1) * a.j.cb);
    },
    Dk = function (a) {
      var b = {};
      b["padding-" + (sk(a) ? Od : "left")] = wk(a) + "px";
      b = { class: a.ia(), style: b };
      var c = a.bb(),
        d = gh(ge, { style: { display: "inline-block" }, class: a.qa() }),
        e = gh(ge, { class: a.j.yb, title: null }, a.Ba);
      a = fh(e, gh(ge, {}, a.mb));
      return gh("div", b, [c, d, a]);
    },
    Ek = function (a) {
      var b = a.getTree();
      b = !b.ea || (b == a.g && !1);
      var c = a.j,
        d = new jk();
      d.B(c.aa, " ", c.pb, " ");
      if (S(a)) {
        var e = a.v() ? 2 : 1;
        b || (e = a.u ? e + 8 : e + 4);
        switch (e) {
          case 1:
            d.B(c.tb);
            break;
          case 2:
            d.B(c.sb);
            break;
          case 4:
            d.B(c.Ya);
            break;
          case 5:
            d.B(c.rb);
            break;
          case 6:
            d.B(c.qb);
            break;
          case 8:
            d.B(c.Za);
            break;
          case 9:
            d.B(c.vb);
            break;
          case 10:
            d.B(c.ub);
            break;
          default:
            d.B(c.Xa);
        }
      } else b ? d.B(c.Xa) : a.u ? d.B(c.Za) : d.B(c.Ya);
      return d.toString();
    },
    Bk = function (a) {
      var b = a.v() && S(a);
      return Ng({ "background-position": Fk(a), display: b ? null : pd });
    },
    Fk = function (a) {
      return (a.u ? (a.ba() - 1) * a.j.cb : "-100") + "px 0";
    },
    vk = function (a) {
      return (a = a.l()) ? a.firstChild : null;
    },
    Gk = function (a) {
      return (a = vk(a)) && a.lastChild ? a.lastChild.previousSibling : null;
    },
    Hk = function (a) {
      return (a = a.l()) ? a.lastChild : null;
    },
    zk = function (a) {
      var b = vk(a);
      b && (b.className = a.ia());
    },
    Ik = function (a, b) {
      b.target.getAttribute(Ge) == ob && S(a) ? a.O(!a.v()) : (W(a), zk(a));
    },
    Jk = function (a) {
      return a.v() && S(a) ? Jk(T(a, tk(a) - 1)) : a;
    },
    Lk = function (a, b) {
      a.U != b &&
        ((a.U = b),
        Kk(b.Y, a),
        U(a, function (c) {
          Lk(c, b);
        }));
    },
    Mk = function (a) {
      M.call(this);
      this.g = a;
      a = N ? wb : "blur";
      this.h = Wh(this.g, N ? vb : "focus", this, !N);
      this.i = Wh(this.g, a, this, !N);
    },
    Nk = function (a, b, c, d) {
      Oh.call(this, d);
      this.type = "key";
      this.g = a;
      this.j = b;
      this.repeat = c;
    },
    Pk = function (a, b) {
      M.call(this);
      a &&
        (this.wa && Ok(this),
        (this.Z = a),
        (this.va = Wh(this.Z, xc, this, b)),
        (this.Ka = Wh(this.Z, "keydown", this.Gb, b, this)),
        (this.wa = Wh(this.Z, "keyup", this.Ib, b, this)));
    },
    Ok = function (a) {
      a.va && (hi(a.va), hi(a.Ka), hi(a.wa), (a.va = null), (a.Ka = null), (a.wa = null));
      a.Z = null;
      a.D = -1;
      a.L = -1;
    },
    Qk = function (a, b, c) {
      V.call(this, a, b, c);
    },
    Rk = function () {
      this.g = void 0;
      this.C = {};
    },
    Sk = function (a, b, c, d) {
      for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.C[f] || (a.C[f] = new Rk());
        a = a.C[f];
      }
      if (d && void 0 !== a.g) throw Error('The collection already contains the key "' + b + '"');
      a.g = c;
    },
    Tk = function (a, b, c) {
      void 0 !== a.g && c.push(b);
      for (var d in a.C) Tk(a.C[d], b + d, c);
    },
    Uk = function () {
      this.h = new Rk();
      this.g = "";
      this.m = this.u = null;
      this.i = this.j = 0;
    },
    Kk = function (a, b) {
      var c = sh(K(b.Ba).toString());
      if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        c = c.toLowerCase();
        var d = a.h.get(c);
        d ? d.push(b) : a.h.set(c, [b]);
      }
    },
    Vk = function (a, b) {
      var c = sh(K(b.Ba).toString());
      if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        c = c.toLowerCase();
        var d = a.h.get(c);
        if (d) {
          for (var e = tk(b), f = 0; f < e; f++) Vk(a, T(b, f));
          Sf(d, b);
          d.length || a.h.remove(c);
        }
      }
    },
    Xk = function (a, b) {
      var c = !1;
      (b = a.h.Db(b)) && b.length && ((a.i = 0), (a.j = 0), (c = a.h.get(b[0])), (c = Wk(a, c))) && (a.u = b);
      return c;
    },
    Wk = function (a, b) {
      if (b) {
        if (a.i < b.length) {
          var c = b[a.i];
          a.m = b;
        }
        c && (c.Ma(), W(c));
      }
      return !!c;
    },
    X = function (a, b, c) {
      V.call(this, a, b, c);
      this.da = !0;
      Ak(this, !0);
      this.m = this;
      this.Y = new Uk();
      this.ya = this.Ca = null;
      this.za = !1;
      this.T = this.ea = !0;
      if (N)
        try {
          document.execCommand("BackgroundImageCache", !1, !0);
        } catch (d) {}
    },
    yk = function (a, b) {
      if (a.m != b) {
        var c = !1;
        a.m && ((c = null == a.m), Ak(a.m, !1));
        if ((a.m = b)) Ak(b, !0), c && W(b);
        li(a, "change");
      }
    },
    Zk = function (a) {
      0 != a.ea && ((a.ea = !1), a.s && Yk(a));
    },
    Yk = function (a) {
      function b(d) {
        var e = Hk(d);
        e && ((e.className = c ? d.j.Ua : d.j.Va), (e = d.ra())) && (e.className = Ek(d));
        U(d, b);
      }
      var c = a.ea;
      b(a);
    },
    $k = function (a) {
      if (0 != a.T) {
        a.T = !1;
        if (a.s) {
          var b = vk(a);
          b && (b.className = a.ia());
        }
        a.m == a && T(a, 0) && yk(a, T(a, 0));
      }
    },
    al = function (a, b, c) {
      var d = document.createElement(ge);
      d.appendChild(Ej(a));
      a = new XMLSerializer().serializeToString(d);
      a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"));
      a = $g(a);
      X.call(this, a, b, c);
    },
    fl = function () {
      this.j = new tj();
      bl || (bl = new Rj());
      this.i = Xj.g();
      cl || (cl = new Tj());
      this.m = new kk(this);
      window.document.title = chrome.i18n.getMessage("inputtool_options_title");
      Uj(la, la);
      Uj(ec, ec);
      Uj(fc, fc);
      this.i.get(1);
      dl.test(window.navigator.language) && (document.body.dir = "rtl");
      var a = Sj(Od),
        b = Sj("left"),
        c = Sj("up"),
        d = Sj("down");
      this.m
        .listen(a, Ra, this.Sa)
        .listen(b, Ra, this.eb)
        .listen(c, Ra, C(this.Ta, this, -1))
        .listen(d, Ra, C(this.Ta, this, 1));
      Gh(yh(document, "select_remove"), a, Ch("BR"), b);
      Gh(yh(document, "up_down"), c, Ch("BR"), d);
      uk.Lk = "image/cleardot.gif";
      uk.Ha = "";
      uk.Ga = "";
      uk.Ia = "";
      this.h = new al("root", uk);
      $k(this.h);
      Zk(this.h);
      a = this.h;
      b = C(this.fb, this);
      c = C(this.Sa, this);
      a.Oa = b;
      a.Pa = c;
      this.g = new al("root", uk);
      $k(this.g);
      Zk(this.g);
      a = this.g;
      b = C(this.gb, this);
      c = C(this.eb, this);
      a.Oa = b;
      a.Pa = c;
      a = yh(document, "inputtools");
      rk(this.h, a);
      a = yh(document, Yd);
      rk(this.g, a);
      el(this);
      a = Yj(this.i);
      for (b = 0; b < a.length; b++) this.ha({ inputtool: a[b] }, this.g);
      Y(Od, cb);
      Y("left", cb);
      Y("up", cb);
      Y("down", cb);
    },
    gl = function (a, b) {
      a = a.g.getChildren();
      for (var c = 0; c < a.length; c++) if (a[c].S == b) return a[c];
      return null;
    },
    hl = function (a) {
      for (var b = [], c = a.g.getChildren(), d = 0; d < c.length; d++) b.push(c[d].S);
      c = { 2: b };
      (a = a.i.get(1)) && !Rf(b, a) && ((c[1] = ""), (c[3] = !1));
      Zj(c);
      chrome.runtime.sendMessage({ up: c });
    },
    el = function (a) {
      var b = sj();
      Fh(
        b,
        function (c) {
          var d = qj(c);
          Fh(
            d,
            function (e) {
              var f = this.j;
              f.h[c] = f.h[c] || [];
              f.h[c].push(e);
            },
            this
          );
        },
        a
      );
      b = C(a.ha, a);
      uj(a.j, b, a.h);
    },
    Y = function (a, b) {
      yh(document, dc + a.toLowerCase()).style.display = b == hb ? "block" : pd;
    },
    Cf =
      typeof Object.defineProperties == p
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    Bf = Af(this);
  A("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, h) {
      this.g = f;
      Cf(this, "description", { configurable: !0, writable: !0, value: h });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.g;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  A(xa, function (a) {
    if (a) return a;
    a = Symbol(xa);
    for (
      var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = Bf[b[c]];
      typeof d === p &&
        typeof d.prototype[a] != p &&
        Cf(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return Df(zf(this));
          }
        });
    }
    return a;
  });
  var Ff =
      typeof Object.create == p
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    il;
  if (typeof Object.setPrototypeOf == p) il = Object.setPrototypeOf;
  else {
    var jl;
    a: {
      var kl = { a: !0 },
        ll = {};
      try {
        ll.__proto__ = kl;
        jl = ll.a;
        break a;
      } catch (a) {}
      jl = !1;
    }
    il = jl
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var Gf = il;
  A("WeakMap", function (a) {
    function b(k) {
      this.g = (g += Math.random() + 1).toString();
      if (k) {
        k = Ef(k);
        for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    }
    function c() {}
    function d(k) {
      var l = typeof k;
      return (l === q && null !== k) || l === p;
    }
    function e(k) {
      if (!B(k, h)) {
        var l = new c();
        Cf(k, h, { value: l });
      }
    }
    function f(k) {
      var l = Object[k];
      l &&
        (Object[k] = function (n) {
          if (n instanceof c) return n;
          Object.isExtensible(n) && e(n);
          return l(n);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var k = Object.seal({}),
            l = Object.seal({}),
            n = new a([
              [k, 2],
              [l, 3]
            ]);
          if (2 != n.get(k) || 3 != n.get(l)) return !1;
          n.delete(k);
          n.set(l, 4);
          return !n.has(k) && 4 == n.get(l);
        } catch (x) {
          return !1;
        }
      })()
    )
      return a;
    var h = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var g = 0;
    b.prototype.set = function (k, l) {
      if (!d(k)) throw Error("Invalid WeakMap key");
      e(k);
      if (!B(k, h)) throw Error("WeakMap key fail: " + k);
      k[h][this.g] = l;
      return this;
    };
    b.prototype.get = function (k) {
      return d(k) && B(k, h) ? k[h][this.g] : void 0;
    };
    b.prototype.has = function (k) {
      return d(k) && B(k, h) && B(k[h], this.g);
    };
    b.prototype.delete = function (k) {
      return d(k) && B(k, h) && B(k[h], this.g) ? delete k[h][this.g] : !1;
    };
    return b;
  });
  A("Map", function (a) {
    function b() {
      var g = {};
      return (g.previous = g.next = g.head = g);
    }
    function c(g, k) {
      var l = g[1];
      return Df(function () {
        if (l) {
          for (; l.head != g[1]; ) l = l.previous;
          for (; l.next != l.head; ) return (l = l.next), { done: !1, value: k(l) };
          l = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(g, k) {
      var l = k && typeof k;
      l == q || l == p ? (f.has(k) ? (l = f.get(k)) : ((l = "" + ++h), f.set(k, l))) : (l = "p_" + k);
      var n = g[0][l];
      if (n && B(g[0], l))
        for (g = 0; g < n.length; g++) {
          var x = n[g];
          if ((k !== k && x.key !== x.key) || k === x.key) return { id: l, list: n, index: g, entry: x };
        }
      return { id: l, list: n, index: -1, entry: void 0 };
    }
    function e(g) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (g) {
        g = Ef(g);
        for (var k; !(k = g.next()).done; ) (k = k.value), this.set(k[0], k[1]);
      }
    }
    if (
      (function () {
        if (!a || typeof a != p || !a.prototype.entries || typeof Object.seal != p) return !1;
        try {
          var g = Object.seal({ x: 4 }),
            k = new a(Ef([[g, "s"]]));
          if ("s" != k.get(g) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, "t") != k || 2 != k.size) return !1;
          var l = k.entries(),
            n = l.next();
          if (n.done || n.value[0] != g || "s" != n.value[1]) return !1;
          n = l.next();
          return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0;
        } catch (x) {
          return !1;
        }
      })()
    )
      return a;
    var f = new WeakMap();
    e.prototype.set = function (g, k) {
      g = 0 === g ? 0 : g;
      var l = d(this, g);
      l.list || (l.list = this[0][l.id] = []);
      l.entry
        ? (l.entry.value = k)
        : ((l.entry = { next: this[1], previous: this[1].previous, head: this[1], key: g, value: k }),
          l.list.push(l.entry),
          (this[1].previous.next = l.entry),
          (this[1].previous = l.entry),
          this.size++);
      return this;
    };
    e.prototype.delete = function (g) {
      g = d(this, g);
      return g.entry && g.list
        ? (g.list.splice(g.index, 1),
          g.list.length || delete this[0][g.id],
          (g.entry.previous.next = g.entry.next),
          (g.entry.next.previous = g.entry.previous),
          (g.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].previous = b();
      this.size = 0;
    };
    e.prototype.has = function (g) {
      return !!d(this, g).entry;
    };
    e.prototype.get = function (g) {
      return (g = d(this, g).entry) && g.value;
    };
    e.prototype.entries = function () {
      return c(this, function (g) {
        return [g.key, g.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (g) {
        return g.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (g) {
        return g.value;
      });
    };
    e.prototype.forEach = function (g, k) {
      for (var l = this.entries(), n; !(n = l.next()).done; ) (n = n.value), g.call(k, n[1], n[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var h = 0;
    return e;
  });
  var ml =
    typeof Object.assign == p
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) B(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  A("Object.assign", function (a) {
    return a || ml;
  });
  A("Array.prototype.find", function (a) {
    return a
      ? a
      : function (b, c) {
          a: {
            var d = this;
            d instanceof String && (d = String(d));
            for (var e = d.length, f = 0; f < e; f++) {
              var h = d[f];
              if (b.call(c, h, f, d)) {
                b = h;
                break a;
              }
            }
            b = void 0;
          }
          return b;
        };
  });
  A("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) B(b, d) && c.push(b[d]);
          return c;
        };
  });
  A("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return If(this, function (b, c) {
            return c;
          });
        };
  });
  A("Set", function (a) {
    function b(c) {
      this.g = new Map();
      if (c) {
        c = Ef(c);
        for (var d; !(d = c.next()).done; ) this.add(d.value);
      }
      this.size = this.g.size;
    }
    if (
      (function () {
        if (!a || typeof a != p || !a.prototype.entries || typeof Object.seal != p) return !1;
        try {
          var c = Object.seal({ x: 4 }),
            d = new a(Ef([c]));
          if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size) return !1;
          var e = d.entries(),
            f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c) return !1;
          f = e.next();
          return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
        } catch (h) {
          return !1;
        }
      })()
    )
      return a;
    b.prototype.add = function (c) {
      c = 0 === c ? 0 : c;
      this.g.set(c, c);
      this.size = this.g.size;
      return this;
    };
    b.prototype.delete = function (c) {
      c = this.g.delete(c);
      this.size = this.g.size;
      return c;
    };
    b.prototype.clear = function () {
      this.g.clear();
      this.size = 0;
    };
    b.prototype.has = function (c) {
      return this.g.has(c);
    };
    b.prototype.entries = function () {
      return this.g.entries();
    };
    b.prototype.values = function () {
      return this.g.values();
    };
    b.prototype.keys = b.prototype.values;
    b.prototype[Symbol.iterator] = b.prototype.values;
    b.prototype.forEach = function (c, d) {
      var e = this;
      this.g.forEach(function (f) {
        return c.call(d, f, f, e);
      });
    };
    return b;
  });
  var E = this || self;
  D(Of, Error);
  Of.prototype.name = "CustomError";
  var wh;
  D(Pf, Of);
  Pf.prototype.name = "AssertionError";
  var Qf = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if (typeof a === u) return typeof b !== u || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Fh = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = typeof a === u ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
        },
    rj = Array.prototype.every
      ? function (a, b) {
          return Array.prototype.every.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = typeof a === u ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && !b.call(void 0, d[e], e, a)) return !1;
          return !0;
        };
  var eg, nl;
  a: {
    for (var ol = ["CLOSURE_FLAGS"], pl = E, ql = 0; ql < ol.length; ql++)
      if (((pl = pl[ol[ql]]), null == pl)) {
        nl = null;
        break a;
      }
    nl = pl;
  }
  var rl = nl && nl[610401301];
  eg = null != rl ? rl : !1;
  var Yf = /&/g,
    Zf = /</g,
    $f = />/g,
    ag = /"/g,
    bg = /'/g,
    cg = /\x00/g,
    Xf = /[\x00&<>"']/;
  var G,
    sl = E.navigator;
  G = sl ? sl.userAgentData || null : null;
  sg[" "] = function () {};
  var tl = gg(),
    N = hg(),
    gk = H(ha),
    L = H("Gecko") && !(-1 != F().toLowerCase().indexOf("webkit") && !H(ha)) && !(H("Trident") || H("MSIE")) && !H(ha),
    fk = -1 != F().toLowerCase().indexOf("webkit") && !H(ha),
    ck = rg(),
    ul = pg() ? "Windows" === G.platform : H("Windows"),
    vl = pg() ? G.platform === ca : H(ca),
    wl = qg(),
    xl = H(ac),
    yl = H(bc),
    zl;
  a: {
    var Al = "",
      Bl = (function () {
        var a = F();
        if (L) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (gk) return /Edge\/([\d\.]+)/.exec(a);
        if (N) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (fk) return /WebKit\/(\S+)/.exec(a);
        if (tl) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    Bl && (Al = Bl ? Bl[1] : "");
    if (N) {
      var Cl,
        Dl = E.document;
      Cl = Dl ? Dl.documentMode : void 0;
      if (null != Cl && Cl > parseFloat(Al)) {
        zl = String(Cl);
        break a;
      }
    }
    zl = Al;
  }
  var El = zl;
  var wg = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  var eh = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  };
  var jh;
  Ag.prototype.K = !0;
  Ag.prototype.I = function () {
    return this.g;
  };
  var zg = {},
    yg = {};
  Cg.prototype.toString = function () {
    return this.g + "";
  };
  Cg.prototype.K = !0;
  Cg.prototype.I = function () {
    return this.g.toString();
  };
  J.prototype.toString = function () {
    return this.g.toString();
  };
  J.prototype.K = !0;
  J.prototype.I = function () {
    return this.g.toString();
  };
  var Gg = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Eg = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Fg = {},
    Ug = new J(Aa, Fg);
  var Lg = {};
  Ig.prototype.I = function () {
    return this.g;
  };
  Ig.prototype.toString = function () {
    return this.g.toString();
  };
  var Mg = new Ig("", Lg),
    Qg = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    Pg = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    Og = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
      "g"
    ),
    Rg = /\/\*/;
  var Wg = {};
  Vg.prototype.toString = function () {
    return this.g.toString();
  };
  Vg.prototype.I = function () {
    return this.g;
  };
  var kh = {};
  Zg.prototype.I = function () {
    return this.g.toString();
  };
  Zg.prototype.toString = function () {
    return this.g.toString();
  };
  var bh = /^[a-zA-Z0-9-]+$/,
    dh = { action: !0, cite: !0, data: !0, formaction: !0, href: !0, manifest: !0, poster: !0, src: !0 },
    ch = {
      APPLET: !0,
      BASE: !0,
      EMBED: !0,
      IFRAME: !0,
      LINK: !0,
      MATH: !0,
      META: !0,
      OBJECT: !0,
      SCRIPT: !0,
      STYLE: !0,
      SVG: !0,
      TEMPLATE: !0
    },
    hh = new Zg((E.trustedTypes && E.trustedTypes.emptyHTML) || "", kh),
    Fl = $g("<br>");
  var lh = (function (a) {
      var b = !1,
        c;
      return function () {
        b || ((c = a()), (b = !0));
        return c;
      };
    })(function () {
      var a = document.createElement("div"),
        b = document.createElement("div");
      b.appendChild(document.createElement("div"));
      a.appendChild(b);
      b = a.firstChild.firstChild;
      a.innerHTML = K(hh);
      return !b.parentElement;
    }),
    oh = /^[\w+/_-]+[=]{0,2}$/;
  var th = /&([^;\s<&]+);?/g;
  var zh = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: Ge,
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };
  z = uh.prototype;
  z.l = function (a) {
    return yh(this.g, a);
  };
  z.setProperties = Ah;
  z.fa = function (a, b, c) {
    return Bh(this.g, arguments);
  };
  z.kb = Gh;
  z.getChildren = function (a) {
    return void 0 != a.children
      ? a.children
      : Array.prototype.filter.call(a.childNodes, function (b) {
          return 1 == b.nodeType;
        });
  };
  z.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  Kh.prototype.la = !1;
  Kh.prototype.F = function () {
    if (this.ma) for (; this.ma.length; ) this.ma.shift()();
  };
  Mh.prototype.h = function () {
    this.defaultPrevented = !0;
  };
  var ci = (function () {
    if (!E.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      var c = function () {};
      E.addEventListener("test", c, b);
      E.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  D(Oh, Mh);
  var Nh = { 2: "touch", 3: "pen", 4: "mouse" };
  Oh.prototype.h = function () {
    Oh.o.h.call(this);
    var a = this.m;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var Yh = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var Ph = 0;
  Sh.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var h = Uh(a, b, d, e);
    -1 < h ? ((b = a[h]), c || (b.pa = !1)) : ((b = new Qh(b, this.src, f, !!d, e)), (b.pa = c), a.push(b));
    return b;
  };
  Sh.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = Uh(e, b, c, d);
    return -1 < b ? (Rh(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  Sh.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.g)
      if (!a || c == a) {
        for (var d = this.g[c], e = 0; e < d.length; e++) ++b, Rh(d[e]);
        delete this.g[c];
        this.h--;
      }
    return b;
  };
  var ai = "closure_lm_" + ((1e6 * Math.random()) | 0),
    ii = {},
    ei = 0,
    ji = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  D(M, Kh);
  M.prototype[Yh] = !0;
  M.prototype.Na = function (a) {
    this.na = a;
  };
  M.prototype.removeEventListener = function (a, b, c, d) {
    gi(this, a, b, c, d);
  };
  M.prototype.F = function () {
    M.o.F.call(this);
    this.N && this.N.removeAll(void 0);
    this.na = null;
  };
  M.prototype.listen = function (a, b, c, d) {
    return this.N.add(String(a), b, !1, c, d);
  };
  var Gl = window.document,
    Hl = window;
  xh(window.document);
  new M();
  (function () {
    if (ul) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(F())) ? a[1] : "0";
    }
    return ck
      ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(F())) ? a[0].replace(/_/g, ".") : "10")
      : vl
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(F())) ? a[1] : "")
      : wl || xl || yl
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(F())) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  var Il = jg(),
    Jl = qg() || H(bc),
    Kl = H(ac),
    Ll = mg(),
    Ml = kg(),
    Nl = lg() && !(qg() || H(ac) || H(bc));
  (function () {
    if (Il) return oi(/Firefox\/([0-9.]+)/);
    if (N || gk || tl) return El;
    if (Ml) {
      if (qg() || H(ac) || H(bc) || rg()) {
        var a = oi(/CriOS\/([0-9.]+)/);
        if (a) return a;
      }
      return oi(/Chrome\/([0-9.]+)/);
    }
    if (Nl && !(qg() || H(ac) || H(bc))) return oi(/Version\/([0-9.]+)/);
    if (Jl || Kl) {
      if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(F()))) return a[1] + "." + a[2];
    } else if (Ll) return (a = oi(/Android\s+([0-9.]+)/)) ? a : oi(/Version\/([0-9.]+)/);
    return "";
  })();
  (function (a) {
    if (I() && a !== wa) {
      var b = G.brands.find(function (c) {
        return c.brand === a;
      });
      if (!b || !b.version) return NaN;
      b = b.version.split(".");
    } else {
      b = og(a);
      if ("" === b) return NaN;
      b = b.split(".");
    }
    return 0 === b.length ? NaN : Number(b[0]);
  })(ma);
  var ti = {
    ke: "zh-hant-t-i0-array-1992",
    le: "zh-hans-t-i0-cangjie-1982",
    me: df,
    ne: "zh-hans-t-i0-cangjie-1987",
    oe: "zh-hant-t-i0-cangjie-1987",
    pe: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
    qe: Ye,
    re: Xe,
    se: Ze,
    te: "zh-hant-t-i0-dayi-1988",
    ve: jf,
    we: ff,
    ue: "ko-t-i0-und",
    xe: kf,
    ye: lf,
    ze: mf,
    Ae: nf,
    Be: of,
    Ce: pf,
    De: "am-t-i0-und",
    Ee: "ar-t-i0-und",
    Fe: "be-t-i0-und",
    Ge: "bn-t-i0-und",
    He: "bg-t-i0-und",
    Ie: "nl-t-i0-und",
    Je: "en-t-i0-und",
    Ke: "fr-t-i0-und",
    Le: "de-t-i0-und",
    Me: "el-t-i0-und",
    Ne: "gu-t-i0-und",
    Oe: Pb,
    Pe: "hi-t-i0-und",
    Qe: nc,
    Re: "it-t-i0-und",
    Se: sc,
    Ue: rc,
    Te: qc,
    Ve: "kn-t-i0-und",
    We: "ml-t-i0-und",
    Xe: "mr-t-i0-und",
    Ye: "ne-t-i0-und",
    Ze: "or-t-i0-und",
    af: "fa-t-i0-und",
    bf: "pl-t-i0-und",
    cf: "pt-t-i0-und",
    df: Cd,
    ef: Hd,
    ff: "pa-t-i0-und",
    gf: "ru-t-i0-und",
    hf: "sa-t-i0-und",
    jf: "sr-t-i0-und",
    kf: "si-t-i0-und",
    lf: "es-t-i0-und",
    mf: "ta-t-i0-und",
    nf: "te-t-i0-und",
    pf: "th-t-i0-und",
    qf: "ti-t-i0-und",
    rf: "tr-t-i0-und",
    sf: "uk-t-i0-und",
    tf: "ur-t-i0-und",
    uf: "vi-t-i0-und",
    vf: qf,
    wf: gf,
    xf: "zh-hant-t-i0-bopomofo",
    yf: "sq-t-k0-und",
    zf: "ar-t-k0-und",
    Af: Yb,
    Bf: Zb,
    Cf: "eu-t-k0-und",
    Df: "be-t-k0-und",
    Ef: "bn-t-k0-und",
    Ff: La,
    Gf: "bs-t-k0-und",
    Hf: Fd,
    If: "bg-t-k0-und",
    Jf: Ja,
    Kf: "ca-t-k0-und",
    Lf: "ccp-t-k0-und",
    Mf: "chr-t-k0-und",
    Nf: Qa,
    Pf: "hr-t-k0-und",
    Qf: "cs-t-k0-und",
    Rf: Wa,
    Sf: "da-t-k0-und",
    Tf: "prs-t-k0-und",
    Uf: Sb,
    Vf: "nl-t-k0-und",
    Wf: "nl-t-k0-intl",
    Xf: "dz-t-k0-und",
    Yf: "en-t-k0-und",
    Zf: fb,
    ag: "et-t-k0-und",
    bg: Je,
    Di: "ti-ethi-t-k0-und",
    cg: "fi-t-k0-und",
    dg: "fr-t-k0-und",
    fg: zb,
    gg: "ff-t-k0-adlm",
    hg: "gl-t-k0-und",
    jg: wc,
    kg: vc,
    lg: "de-t-k0-und",
    mg: "de-t-k0-intl",
    ng: "el-t-k0-und",
    pg: "gu-t-k0-und",
    qg: Lb,
    og: Kb,
    rg: vd,
    sg: wd,
    ug: "haw-t-k0-und",
    tg: "ht-t-k0-und",
    wg: Qb,
    xg: "hi-t-k0-und",
    yg: "hi-t-k0-phone",
    zg: "win-t-k0-und",
    Ag: Xb,
    Bg: "is-t-k0-und",
    Cg: "id-t-k0-und",
    Dg: kc,
    Eg: lc,
    Fg: mc,
    Gg: "ga-t-k0-und",
    Hg: Db,
    Ig: "it-t-k0-und",
    Kg: "it-t-k0-intl",
    Lg: "jw-t-k0-und",
    Mg: "kn-t-k0-und",
    Ng: Bc,
    Og: "kk-t-k0-und",
    Pg: "km-t-k0-und",
    Qg: "ko-t-k0-und",
    Rg: "ku-t-k0-und",
    Sg: Ec,
    Tg: "lo-t-k0-und",
    Ug: "lv-t-k0-und",
    Vg: "lis-t-k0-und",
    Wg: "lt-t-k0-und",
    Xg: "mk-t-k0-und",
    Yg: "myh-t-k0-und",
    Zg: "ms-t-k0-und",
    ah: "ml-t-k0-und",
    bh: Sc,
    dh: "mt-t-k0-und",
    eh: "mi-t-k0-und",
    fh: "mr-t-k0-und",
    gh: Yc,
    hh: "mr-t-k0-phone",
    ih: Vc,
    jh: "mez-t-k0-und",
    kh: Tc,
    lh: "srp-t-k0-und",
    mh: "my-t-k0-und",
    nh: hd,
    oh: "nv-t-k0-und",
    ph: "nv-t-k0-std",
    qh: "ne-t-k0-und",
    rh: kd,
    th: "no-t-k0-und",
    vh: "one-t-k0-und",
    wh: "or-t-k0-und",
    xh: ud,
    yh: "osa-t-k0-und",
    zh: Hc,
    Ah: "ps-t-k0-und",
    Bh: "fa-t-k0-und",
    Ch: Ua,
    Dh: "pl-t-k0-und",
    Fh: Kd,
    Hh: Ed,
    Jh: Jd,
    Kh: Nd,
    Lh: "rom-t-k0-und",
    Mh: "ro-t-k0-und",
    Nh: Rd,
    Oh: Qd,
    Ph: "ru-t-k0-und",
    Qh: Ud,
    Rh: Td,
    Sh: Vd,
    Vh: Xd,
    Uh: Wd,
    Xh: "see-t-k0-und",
    Yh: ie,
    Zh: je,
    ai: "sd-t-k0-und",
    bi: "si-t-k0-und",
    ci: "sk-t-k0-und",
    di: ae,
    ei: "sl-t-k0-und",
    fi: "ckb-t-k0-ar",
    gi: "ckb-t-k0-en",
    hi: "uzs-t-k0-und",
    ii: lb,
    ki: "es-t-k0-intl",
    li: "sw-t-k0-und",
    mi: "sv-t-k0-und",
    ni: $a,
    oi: "tl-t-k0-und",
    pi: "tg-t-k0-und",
    ri: qe,
    si: "ta-t-k0-und",
    ti: pe,
    ui: se,
    vi: re,
    wi: "tt-t-k0-und",
    xi: "te-t-k0-und",
    yi: ue,
    zi: "th-t-k0-und",
    Ai: xe,
    Bi: ye,
    Ci: "ti-t-k0-und",
    Ei: De,
    Gi: Fe,
    Ii: "ug-t-k0-und",
    Ji: Ie,
    Ki: "ur-t-k0-und",
    Li: gb,
    Mi: Oe,
    Ni: Ne,
    Oi: Pe,
    Pi: Te,
    Qi: Se,
    Ri: "vi-t-k0-viqr",
    Si: "vi-t-k0-vni",
    Ti: "cy-t-k0-und",
    Vi: "yi-t-k0-und",
    sh: We,
    uh: sd,
    ig: bb,
    ji: kb,
    eg: yb,
    Jg: ic,
    Qb: md,
    Eh: zd,
    Gh: Dd,
    Ih: Id,
    Fi: Be,
    Hi: Ee,
    Of: Ta,
    vg: Nb,
    Th: de,
    Wh: Fb,
    Ui: Bb,
    Wi: Kc,
    Wb: Ba,
    Xb: he,
    Yb: Ca,
    Zb: Da,
    ac: $b,
    bc: Fa,
    cc: Ga,
    dc: nb,
    ec: Ha,
    fc: Ka,
    hc: Na,
    ic: Ia,
    jc: gd,
    kc: rf,
    lc: Oa,
    mc: Pa,
    nc: hf,
    oc: bf,
    pc: ef,
    qc: Sa,
    rc: Ub,
    sc: Va,
    tc: Ya,
    uc: ld,
    vc: eb,
    wc: ib,
    xc: mb,
    yc: tb,
    zc: rb,
    Ac: xb,
    Bc: Gb,
    Cc: uc,
    Dc: ab,
    Ec: db,
    Fc: Jb,
    Gc: Vb,
    Hc: Mb,
    Ic: Ob,
    Jc: Rb,
    Kc: Tb,
    Lc: Wb,
    Mc: gc,
    Nc: cc,
    Oc: Cb,
    Pc: hc,
    Qc: pc,
    Rc: tc,
    Sc: Ac,
    Tc: yc,
    Uc: zc,
    Vc: Cc,
    Wc: Dc,
    Xc: Fc,
    Yc: Lc,
    Zc: Gc,
    ad: Nc,
    bd: Mc,
    cd: Jc,
    dd: Qc,
    ed: Oc,
    fd: Zc,
    gd: Rc,
    hd: $c,
    jd: Pc,
    kd: Xc,
    ld: Uc,
    md: fd,
    nd: ad,
    od: bd,
    pd: cd,
    qd: dd,
    rd: ed,
    sd: jd,
    td: od,
    ud: id,
    vd: nd,
    wd: rd,
    xd: td,
    yd: qb,
    zd: yd,
    Ad: Ld,
    Bd: Bd,
    Cd: Gd,
    Dd: xd,
    Ed: Pd,
    Fd: Sd,
    Gd: ce,
    Hd: Eb,
    Id: ke,
    Jd: ee,
    Kd: Zd,
    Ld: $d,
    Md: be,
    Nd: fe,
    Od: jb,
    Pd: le,
    Qd: ne,
    Rd: me,
    Sd: ve,
    Td: oe,
    Ud: te,
    Vd: we,
    Wd: Ma,
    Xd: ze,
    Yd: Ae,
    Zd: He,
    be: Le,
    ce: Qe,
    de: Re,
    ee: Xa,
    fe: Ab,
    ge: Ue,
    he: Ve,
    ie: sf,
    ae: Ke,
    mj: "en-t-i0-voice",
    kj: cf,
    lj: "zh-hant-t-i0-voice",
    nj: "xkb:am:phonetic:arm",
    oj: "xkb:be::fra",
    pj: "xkb:be::ger",
    qj: "xkb:be::nld",
    rj: "xkb:bg::bul",
    sj: "xkb:bg:phonetic:bul",
    tj: "xkb:br::por",
    uj: "xkb:by::bel",
    wj: "xkb:ca::fra",
    vj: "xkb:ca:eng:eng",
    xj: "xkb:ca:multix:fra",
    zj: "xkb:ch::ger",
    yj: "xkb:ch:fr:fra",
    Aj: "xkb:cz::cze",
    Bj: "xkb:cz:qwerty:cze",
    Cj: "xkb:de::ger",
    Dj: "xkb:de:neo:ger",
    Ej: "xkb:dk::dan",
    Fj: "xkb:ee::est",
    Hj: "xkb:es::spa",
    Gj: "xkb:es:cat:cat",
    Jj: "xkb:fo::fao",
    Ij: "xkb:fi::fin",
    Kj: "xkb:fr:bepo:fra",
    Lj: "xkb:fr::fra",
    Mj: "xkb:gb:dvorak:eng",
    Nj: "xkb:gb:extd:eng",
    Oj: "xkb:ge::geo",
    Pj: "xkb:gr::gre",
    Qj: "xkb:hr::scr",
    Rj: "xkb:hu::hun",
    Sj: "xkb:hu:qwerty:hun",
    Tj: "xkb:ie::ga",
    Uj: "xkb:il::heb",
    Vj: "xkb:is::ice",
    Wj: "xkb:it::ita",
    Xj: "xkb:jp::jpn",
    Yj: "xkb:kz::kaz",
    Zj: "xkb:latam::spa",
    ak: "xkb:lt::lit",
    bk: "xkb:lv:apostrophe:lav",
    dk: "xkb:mn::mon",
    ck: "xkb:mk::mkd",
    ek: "xkb:mt::mlt",
    fk: "xkb:no::nob",
    gk: "xkb:pl::pol",
    hk: "xkb:pt::por",
    ik: "xkb:ro::rum",
    jk: "xkb:ro:std:rum",
    kk: "xkb:rs::srp",
    mk: "xkb:ru::rus",
    lk: "xkb:ru:phonetic:rus",
    nk: "xkb:se::swe",
    pk: "xkb:si::slv",
    qk: "xkb:sk::slo",
    sk: "xkb:tr::tur",
    rk: "xkb:tr:f:tur",
    tk: "xkb:ua::ukr",
    yk: "xkb:us::eng",
    zk: "xkb:us::fil",
    Ak: "xkb:us::ind",
    Hk: "xkb:us::msa",
    uk: "xkb:us:altgr-intl:eng",
    vk: "xkb:us:colemak:eng",
    wk: "xkb:us:dvorak:eng",
    xk: "xkb:us:dvp:eng",
    Bk: "xkb:us:intl:eng",
    Ck: "xkb:us:intl:nld",
    Gk: "xkb:us:intl:por",
    Dk: "xkb:us:intl_pc:eng",
    Ek: "xkb:us:intl_pc:nld",
    Fk: "xkb:us:intl_pc:por",
    Jk: "xkb:us:workman-intl:eng",
    Ik: "xkb:us:workman:eng"
  };
  si.prototype.toString = function () {
    return this.code;
  };
  var vi = {},
    ri = ["bn", "gu", "pa", "kn", "ml", "or", "sa", v, "te", "ne"],
    xi = {
      im_pinyin_zh_hans: jf,
      im_pinyin_zh_hant: ff,
      im_t13n_ja: sc,
      "im_t13n_ja-Hira": nc,
      im_wubi_zh_hans: qf,
      im_zhuyin_zh_hant: gf,
      vkd_bg_phone: Ja,
      vkd_chr_phone: Qa,
      vkd_cs_qwertz: Wa,
      vkd_deva_phone: Sb,
      vkd_en_dvorak: fb,
      vkd_es_es: lb,
      vkd_ethi: Je,
      vkd_gu_phone: Lb,
      vkd_guru_inscript: vd,
      vkd_guru_phone: wd,
      vkd_hu_101: Xb,
      vkd_hy_east: Yb,
      vkd_hy_west: Zb,
      vkd_ka_qwerty: wc,
      vkd_ka_typewriter: vc,
      vkd_ro_sr13392_primary: Rd,
      vkd_ro_sr13392_secondary: Qd,
      vkd_ru_phone: Ud,
      vkd_ru_phone_aatseel: Td,
      vkd_ru_phone_yazhert: Vd,
      vkd_sk_qwerty: ae,
      vkd_ta_itrans: pe,
      vkd_ta_tamil99: qe,
      vkd_ta_typewriter: re,
      vkd_th_pattajoti: xe,
      vkd_th_tis: ye,
      vkd_tr_f: De,
      vkd_tr_q: Fe,
      vkd_uk_101: Ie,
      vkd_us_intl: zb,
      vkd_uz_cyrl_phone: Oe,
      vkd_uz_cyrl_type: Ne,
      vkd_vi_tcvn: Te,
      vkd_vi_telex: Se
    },
    Ol = {},
    Pl;
  for (Pl in xi) Ol[xi[Pl]] = Pl;
  var qi = Ol,
    pi = {
      "nl-t-k0-intl": Me,
      "fr-t-k0-intl": Me,
      "de-t-k0-intl": Me,
      "ht-t-k0-und": "fr",
      "id-t-k0-und": Ic,
      "ga-t-k0-und": Ic,
      "it-t-k0-intl": Me,
      "jw-t-k0-und": Ic,
      "mr-t-k0-und": "deva_phone",
      "mr-t-k0-devanaga": "hi",
      "ms-t-k0-und": Ic,
      "pt-br-t-k0-intl": Me,
      "pt-pt-t-k0-intl": Me,
      "sa-t-k0-devanaga": "hi",
      "es-t-k0-intl": Me,
      "sw-t-k0-und": Ic,
      "tl-t-k0-und": Ic,
      "ti-t-k0-und": "ethi",
      "cy-t-k0-und": Ic
    };
  zi.g = function () {
    return yi(zi);
  };
  var Qi = {},
    Pi = null;
  var Ni = "undefined" !== typeof Uint8Array,
    Oi = !N && typeof btoa === p;
  var Z = typeof Symbol === p && "symbol" === typeof Symbol() ? Symbol() : void 0,
    Bi = Z
      ? function (a, b) {
          a[Z] |= b;
        }
      : function (a, b) {
          void 0 !== a.g ? (a.g |= b) : Object.defineProperties(a, { g: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        },
    ej = Z
      ? function (a, b) {
          a[Z] &= ~b;
        }
      : function (a, b) {
          void 0 !== a.g && (a.g &= ~b);
        },
    P = Z
      ? function (a) {
          return a[Z] | 0;
        }
      : function (a) {
          return a.g | 0;
        },
    Yi = Z
      ? function (a) {
          return a[Z];
        }
      : function (a) {
          return a.g;
        },
    Q = Z
      ? function (a, b) {
          a[Z] = b;
        }
      : function (a, b) {
          void 0 !== a.g ? (a.g = b) : Object.defineProperties(a, { g: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        };
  var Vi = {},
    dj,
    Ql = [];
  Q(Ql, 39);
  dj = Object.freeze(Ql);
  var Ki;
  lj.prototype.toJSON = function () {
    var a = Ti(this.G, Wi, void 0, void 0, !1, !1);
    return mj(this, a, !0);
  };
  lj.prototype.La = Vi;
  lj.prototype.toString = function () {
    return mj(this, this.G, !1).toString();
  };
  Hf(hj, lj);
  Hf(nj, lj);
  nj.Kb = [3, 4, 6, 7];
  var Kj = {},
    Rl = {},
    pj = {};
  Fh(
    [
      [1, "am-t-i0-und", [["am", "\u12a0\u121b\u122d\u129b"]], ["am"], 16, null, ["im_t13n_am"]],
      [2, "ar-t-i0-und", [["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]], ["ar"], 2, null, ["im_t13n_ar"]],
      [3, "bn-t-i0-und", [["bn", "\u09ac\u09be\u0982\u09b2\u09be"]], ["bn"], 3, null, ["im_t13n_bn"]],
      [4, jf, [[w, "\u62fc\u97f3"]], [w], 29, null, ["im_pinyin_zh_hans"]],
      [49, kf, [[w, "\u53cc\u62fc\uff08\u667a\u80fdABC\uff09"]], [w], 44, [18]],
      [50, nf, [[w, "\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09"]], [w], 44, [18]],
      [51, lf, [[w, "\u53cc\u62fc\uff08\u5c0f\u9e64\uff09"]], [w], 44, [18]],
      [52, mf, [[w, "\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09"]], [w], 44, [18]],
      [53, of, [[w, "\u53cc\u62fc\uff08\u7d2b\u5149\uff09"]], [w], 44, [18]],
      [54, pf, [[w, "\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09"]], [w], 44, [18]],
      [6, "el-t-i0-und", [["el", uf]], ["el"], 23, null, ["im_t13n_el"]],
      [7, "gu-t-i0-und", [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]], ["gu"], 4, null, ["im_t13n_gu"]],
      [8, "hi-t-i0-und", [["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]], ["hi"], 5, null, ["im_t13n_hi"]],
      [9, Pb, [["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]], ["he"], 20, null, ["im_t13n_he", "im_t13n_iw"]],
      [33, "ja-t-i0", [["ja", "\u65e5\u672c\u8a9e"]], null, 28],
      [10, sc, [["ja", "\u65e5\u672c\u8a9e"]], ["ja"], 28, null, ["im_t13n_ja"]],
      [11, "kn-t-i0-und", [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]], ["kn"], 6, null, ["im_t13n_kn"]],
      [12, "ml-t-i0-und", [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]], ["ml"], 7, null, ["im_t13n_ml"]],
      [13, "mr-t-i0-und", [["mr", "\u092e\u0930\u093e\u0920\u0940"]], ["mr"], 9, null, ["im_t13n_mr"]],
      [14, "ne-t-i0-und", [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]], ["ne"], 8, null, ["im_t13n_ne"]],
      [15, "or-t-i0-und", [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]], ["or"], 19, null, ["im_t13n_or"]],
      [16, "fa-t-i0-und", [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 14, null, ["im_t13n_fa"]],
      [17, "pa-t-i0-und", [["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]], ["pa"], 10, null, ["im_t13n_pa"]],
      [46, "pl-t-i0-und", [["pl", ra]], null, 37, null, ["im_t13n_pl"]],
      [18, "ru-t-i0-und", [["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]], ["ru"], 24, null, ["im_t13n_ru"]],
      [19, "sa-t-i0-und", [["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"]], ["sa"], 15, null, ["im_t13n_sa"]],
      [20, "sr-t-i0-und", [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 22, null, ["im_t13n_sr"]],
      [21, "si-t-i0-und", [["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]], ["si"], 18, null, ["im_t13n_si"]],
      [22, "ta-t-i0-und", [[v, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]], [v], 11, null, ["im_t13n_ta"]],
      [23, "te-t-i0-und", [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]], ["te"], 12, null, ["im_t13n_te"]],
      [24, "ti-t-i0-und", [["ti", "\u1275\u130d\u122d\u129b"]], ["ti"], 17, null, ["im_t13n_ti"]],
      [25, "ur-t-i0-und", [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 13, null, ["im_t13n_ur"]],
      [31, "zh-t-i0-wubi-1998", [[w, "\u4e94\u7b14"]], null, 30],
      [26, qf, [[w, "\u4e94\u7b14"]], [w], 30, null, ["im_wubi_zh_hans"]],
      [28, gf, [[y, "\u6ce8\u97f3"]], [y], 31, null, ["im_zhuyin_zh_hant"]],
      [32, "zh-hant-t-i0-bopo", [[y, "\u6ce8\u97f3"]], null, 31],
      [27, ff, [[y, "\u6f22\u8a9e\u62fc\u97f3"]], [y], 29, null, ["im_pinyin_zh_hant"]],
      [30, "vi-t-i0-und", [["vi", "Ti\u1ebfng Vi\u1ec7t"]], ["vi"], 21, [18], ["im_t13n_vi"]],
      [34, "be-t-i0-und", [["be", vf]], ["be"], 26, null, ["im_t13n_be"]],
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
      [37, "de-t-i0-und", [["de", ea]], ["de"], 35, [15, 18]],
      [38, "es-t-i0-und", [["es", ja]], ["es"], 34, [15, 18]],
      [39, "fr-t-i0-und", [["fr", ka]], ["fr"], 36, [15, 18]],
      [40, "it-t-i0-und", [["it", na]], ["it"], 39, [15, 18]],
      [41, "nl-t-i0-und", [["nl", pa]], ["nl"], 40, [15, 18]],
      [42, "pt-t-i0-und", [[r, sa]], [r], 38, [15, 18]],
      [48, Hd, [[Ad, sa]], null, 38],
      [43, df, [[y, "\u5009\u9821"]], [y], 32],
      [44, Ye, [[$e, "\u5ee3\u6771\u8a71"]], [$e], 33],
      [60, Xe, [[$e, "\u7cb5\u62fc"]], [$e], 33],
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
        Yb,
        [["hy", "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]],
        ["hy"],
        0,
        null,
        ["vkd_hy_east"]
      ],
      [
        104,
        Zb,
        [["hy", "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576"]],
        ["hy"],
        0,
        null,
        ["vkd_hy_west"]
      ],
      [105, "eu-t-k0-und", [["eu", "Euskara"]], ["eu"], 0, null, ["vkd_eu"]],
      [106, "be-t-k0-und", [["be", vf]], ["be"], 0, null, ["vkd_be"]],
      [107, "bn-t-k0-und", [["bn", "\u09ac\u09be\u0982\u09b2\u09be (INSCRIPT)"]], ["bn"], 0, null, ["vkd_bn_inscript"]],
      [108, La, [["bn", "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)"]], ["bn"], 0, null, ["vkd_bn_phone"]],
      [109, "bs-t-k0-und", [["bs", "Bosanski"]], ["bs"], 0, null, ["vkd_bs"]],
      [110, Fd, [[r, ta]], [r], 0, null, ["vkd_pt_br"]],
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
        Ja,
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
      [117, Wa, [["cs", "\u010ce\u0161tina QWERTZ"]], ["cs"], 0, null, ["vkd_cs_qwertz"]],
      [118, "da-t-k0-und", [["da", "Dansk"]], ["da"], 0, null, ["vkd_da"]],
      [119, "prs-t-k0-und", [["prs", "\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc"]], ["fa"], 0, null, ["vkd_prs"]],
      [120, "nl-t-k0-und", [["nl", pa]], ["nl"], 0, null, ["vkd_nl"]],
      [121, Sb, [["hi", wf]], ["hi"], 0, null, ["vkd_deva_phone"]],
      [122, "en-t-k0-und", [[m, ia]], [m], 0, null, ["vkd_en"]],
      [123, "et-t-k0-und", [["et", "Eesti keel"]], ["et"], 0, null, ["vkd_et"]],
      [124, Je, [["am", "\u130d\u12d5\u12dd"]], ["am"], 0, null, ["vkd_ethi"]],
      [125, "fi-t-k0-und", [["fi", "Suomi"]], ["fi"], 0, null, ["vkd_fi"]],
      [126, "fr-t-k0-und", [["fr", ka]], ["fr"], 0, null, ["vkd_fr"]],
      [127, "gl-t-k0-und", [["gl", "Galego"]], ["gl"], 0, null, ["vkd_gl"]],
      [
        128,
        wc,
        [["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)"]],
        ["ka"],
        0,
        null,
        ["vkd_ka_qwerty"]
      ],
      [
        129,
        vc,
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
      [130, "de-t-k0-und", [["de", ea]], ["de"], 0, null, ["vkd_de"]],
      [131, "el-t-k0-und", [["el", uf]], ["el"], 0, null, ["vkd_el"]],
      [132, "gu-t-k0-und", [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)"]], ["gu"], 0, null, ["vkd_gu_inscript"]],
      [
        133,
        Lb,
        [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)"]],
        ["gu"],
        0,
        null,
        ["vkd_gu_phone"]
      ],
      [134, vd, [["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)"]], ["pa"], 0, null, ["vkd_guru_inscript"]],
      [
        135,
        wd,
        [["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)"]],
        ["pa"],
        0,
        null,
        ["vkd_guru_phone"]
      ],
      [136, Qb, [["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]], ["he"], 0, null, ["vkd_he", "vkd_iw"]],
      [137, "hi-t-k0-und", [["hi", xf]], ["hi"], 0, null, ["vkd_hi"]],
      [138, Xb, [["hu", "Magyar nyelv (101)"]], ["hu"], 0, null, ["vkd_hu_101"]],
      [139, "is-t-k0-und", [["is", "\u00cdslenska"]], ["is"], 0, null, ["vkd_is"]],
      [140, "it-t-k0-und", [["it", na]], ["it"], 0, null, ["vkd_it"]],
      [141, "kn-t-k0-und", [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)"]], ["kn"], 0, null, ["vkd_kn_inscript"]],
      [
        142,
        Bc,
        [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)"]],
        ["kn"],
        0,
        null,
        ["vkd_kn_phone"]
      ],
      [143, "kk-t-k0-und", [["kk", "\u049a\u0430\u0437\u0430\u049b"]], ["kk"], 0, null, ["vkd_kk"]],
      [144, "km-t-k0-und", [["km", "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA"]], ["km"], 0, null, ["vkd_km"]],
      [145, "ko-t-k0-und", [["ko", "\ud55c\uad6d\uc5b4"]], ["ko"], 0, [18], ["vkd_ko"]],
      [146, Ec, [["ky", "\u041a\u044b\u0440\u0433\u044b\u0437"]], ["ky"], 0, null, ["vkd_ky_cyrl"]],
      [147, "lo-t-k0-und", [["lo", "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7"]], ["lo"], 0, null, ["vkd_lo"]],
      [148, "lv-t-k0-und", [["lv", "Latvie\u0161u valoda"]], ["lv"], 0, null, ["vkd_lv"]],
      [149, "lt-t-k0-und", [["lt", "Lietuvi\u0173 kalba"]], ["lt"], 0, null, ["vkd_lt"]],
      [150, "mk-t-k0-und", [["mk", "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]], ["mk"], 0, null, ["vkd_mk"]],
      [151, "ml-t-k0-und", [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (INSCRIPT)"]], ["ml"], 0, null, ["vkd_ml_inscript"]],
      [152, Sc, [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2e\u0d4a\u0d34\u0d3f)"]], ["ml"], 0, null, ["vkd_ml_phone"]],
      [
        246,
        Vc,
        [["mni-Mtei", "\uabc3\uabe4\uabc7\uabe9 \uabc3\uabcc\uabe6\uabdb (\uabd0\uabe3\uabc5\uabe6\uabc7\uabe4\uabdb)"]],
        ["mni-Mtei"],
        0
      ],
      [153, "mt-t-k0-und", [["mt", "Malti"]], ["mt"], 0, null, ["vkd_mt"]],
      [154, "mi-t-k0-und", [["mi", "Maori"]], ["mi"], 0, null, ["vkd_mi"]],
      [155, Tc, [["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]], ["mn"], 0, null, ["vkd_mn_cyrl"]],
      [156, "srp-t-k0-und", [["sr", "Crnogorski jezik"]], ["sr"], 0, null, ["vkd_srp"]],
      [157, "no-t-k0-und", [["no", "Norsk"]], ["no"], 0, null, ["vkd_no"]],
      [158, "or-t-k0-und", [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (INSCRIPT)"]], ["or"], 0, null, ["vkd_or_inscript"]],
      [159, ud, [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)"]], ["or"], 0, null, ["vkd_or_phone"]],
      [160, Hc, [[m, ba]], ["af"], 0, null, ["vkd_latn_002"]],
      [161, "ps-t-k0-und", [["ps", "\u067e\u069a\u062a\u0648"]], ["ps"], 0, null, ["vkd_ps"]],
      [162, "fa-t-k0-und", [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 0, null, ["vkd_fa"]],
      [163, "pl-t-k0-und", [["pl", ra]], ["pl"], 0, null, ["vkd_pl"]],
      [164, Kd, [[Ad, ua]], [Ad], 0, null, ["vkd_pt_pt"]],
      [165, "rom-t-k0-und", [["rom", "Rromani \u0107hib"]], ["rom"], 0, null, ["vkd_rom"]],
      [166, "ro-t-k0-und", [["ro", "Rom\u00e2n\u0103"]], ["ro"], 0, null, ["vkd_ro"]],
      [167, Rd, [["ro", "Rom\u00e2n\u0103 SR13392 Primary"]], ["ro"], 0, null, ["vkd_ro_sr13392_primary"]],
      [168, Qd, [["ro", "Rom\u00e2n\u0103 SR13392 Secondary"]], ["ro"], 0, null, ["vkd_ro_sr13392_secondary"]],
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
        Ud,
        [
          [
            "ru",
            "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)"
          ]
        ],
        ["ru"],
        0
      ],
      [242, Wd, [["sa", xf]], ["sa"], 0],
      [
        170,
        Xd,
        [["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)"]],
        ["sa"],
        0,
        null,
        ["vkd_sa_phone"]
      ],
      [171, ie, [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 0, null, ["vkd_sr_cyrl"]],
      [172, je, [["sr", "Srpski"]], ["sr"], 0, null, ["vkd_sr_latn"]],
      [173, "si-t-k0-und", [["si", "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134"]], ["si"], 0, null, ["vkd_si"]],
      [174, "sk-t-k0-und", [["sk", "Slovensk\u00fd jazyk"]], ["sk"], 0, null, ["vkd_sk"]],
      [175, ae, [["sk", "Slovensk\u00fd jazyk - QWERTY"]], ["sk"], 0, null, ["vkd_sk_qwerty"]],
      [176, "sl-t-k0-und", [["sl", "Sloven\u0161\u010dina"]], ["sl"], 0, null, ["vkd_sl"]],
      [177, "uzs-t-k0-und", [["uzs", "Southern Uzbek"]], ["uzs"], 0, null, ["vkd_uzs"]],
      [178, lb, [["es", ja]], ["es"], 0, null, ["vkd_es_es"]],
      [179, "sv-t-k0-und", [["sv", "Svenska"]], ["sv"], 0, null, ["vkd_sv"]],
      [180, $a, [["de", "Deutschsprachige Schweiz"]], ["de"], 0, null, ["vkd_de_ch"]],
      [181, qe, [[v, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)"]], [v], 0, null, ["vkd_ta_tamil99"]],
      [182, "ta-t-k0-und", [[v, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)"]], [v], 0, null, ["vkd_ta_inscript"]],
      [183, se, [[v, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)"]], [v], 0, null, ["vkd_ta_phone"]],
      [205, re, [[v, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)"]], [v], 0],
      [206, pe, [[v, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)"]], [v], 0],
      [184, "tt-t-k0-und", [["tt", "\u0422\u0430\u0442\u0430\u0440"]], ["tt"], 0, null, ["vkd_tt"]],
      [185, "te-t-k0-und", [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)"]], ["te"], 0, null, ["vkd_te_inscript"]],
      [
        186,
        ue,
        [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)"]],
        ["te"],
        0,
        null,
        ["vkd_te_phone"]
      ],
      [187, "th-t-k0-und", [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]], ["th"], 0, null, ["vkd_th"]],
      [204, xe, [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)"]], ["th"], 0],
      [203, ye, [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)"]], ["th"], 0],
      [188, De, [["tr", "T\u00fcrk\u00e7e - F"]], ["tr"], 0, null, ["vkd_tr_f", Ce]],
      [189, Fe, [["tr", "T\u00fcrk\u00e7e - Q"]], ["tr"], 0, null, ["vkd_tr_q"]],
      [190, "ug-t-k0-und", [["ug", "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"]], ["ug"], 0, null, ["vkd_ug"]],
      [
        191,
        Ie,
        [["uk", "\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430"]],
        ["uk"],
        0,
        null,
        ["vkd_uk_101"]
      ],
      [192, "ur-t-k0-und", [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 0, null, ["vkd_ur"]],
      [193, Pe, [["uz", "O\u2018zbek"]], ["uz"], 0, null, ["vkd_uz_latn"]],
      [
        194,
        Oe,
        [["uz", "\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)"]],
        ["uz"],
        0,
        null,
        ["vkd_uz_cyrl_phone"]
      ],
      [
        195,
        Ne,
        [["uz", "\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)"]],
        ["uz"],
        0,
        null,
        ["vkd_uz_cyrl_type"]
      ],
      [196, Te, [["vi", "Ti\u1ebfng Vi\u1ec7t TCVN 6064"]], ["vi"], 0, null, ["vkd_vi_tcvn"]],
      [197, Se, [["vi", "Ti\u1ebfng Vi\u1ec7t Telex"]], ["vi"], 0, null, ["vkd_vi_telex"]],
      [198, "vi-t-k0-viqr", [["vi", "Ti\u1ebfng Vi\u1ec7t VIQR"]], ["vi"], 0, null, ["vkd_vi_viqr"]],
      [208, "vi-t-k0-vni", [["vi", "Ti\u1ebfng Vi\u1ec7t VNI"]], ["vi"], 0],
      [199, "dz-t-k0-und", [["dz", "\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41\u0f0b"]], ["dz"], 0, null, ["vkd_dz"]],
      [200, fb, [[m, "English Dvorak"]], [m], 0],
      [
        201,
        Qa,
        [["chr", "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac"]],
        ["chr"],
        0,
        null,
        ["vkd_chr_phone"]
      ],
      [202, "my-t-k0-und", [["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"]], ["my"], 0, null, ["vkd_my"]],
      [239, "tg-t-k0-und", [["tg", "\u0422\u043e\u04b7\u0438\u043a"]], ["tg"], 0, null, ["vkd_tg"]],
      [5, "en-t-i0-und", [[m, ia]], [m], 41, [15, 18], ["im_t13n_en"]],
      [29, nc, [["ja", "\u65e5\u672c\u8a9e"]], null, -1, null, ["im_t13n_ja_hira"]],
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
      [256, We, [["yo", "Nigerian Yoruba"]], ["yo"], 0],
      [
        209,
        "ne-t-k0-und",
        [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)"]],
        ["ne"],
        0
      ],
      [210, kd, [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)"]], ["ne"], 0],
      [211, gb, [[m, ya]], ["nl"], 0],
      [213, "nv-t-k0-und", [["nv", fa]], ["nv"], 0],
      [234, "nv-t-k0", [["nv", fa]], null, 0],
      [235, "nv-t-k0-std", [["nv", "Din\u00e9 bizaad - Traditional"]], ["nv"], 0],
      [401, Ba, [["af", "Afrikaans"]], ["af"], 1],
      [506, Ca, [["am", "\u12a0\u121b\u122d\u129b"]], ["am"], 1],
      [464, Da, [["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]], ["ar"], 1],
      [507, Fa, [["as", "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"]], ["as"], 1],
      [487, Ga, [["az", "Az\u0259rbaycan"]], ["az"], 1],
      [402, Ha, [["be", vf]], ["be"], 1],
      [403, Ia, [["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]], ["bg"], 1],
      [489, Ka, [["bn", "\u09ac\u09be\u0982\u09b2\u09be"]], ["bn"], 1],
      [509, Ma, [["bo", "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"]], ["bo"], 1],
      [468, Na, [["bs", "Bosanski"]], ["bs"], 1],
      [404, Oa, [["ca", "Catal\u00e0"]], ["ca"], 1],
      [469, Pa, [["ceb", "Binisaya"]], ["ceb"], 1],
      [494, Sa, [["co", "Corsican"]], ["co"], 1],
      [405, Va, [["cs", "\u010ce\u0161tina"]], ["cs"], 1],
      [406, Xa, [["cy", "Cymraeg"]], ["cy"], 1],
      [407, Ya, [["da", "Dansk"]], ["da"], 1],
      [408, ab, [["de", ea]], ["de"], 1],
      [455, db, [["el", uf]], ["el"], 1],
      [409, eb, [[m, ia]], [m], 1],
      [456, ib, [["eo", "Esperanto"]], ["eo"], 1],
      [410, jb, [["es", ja]], ["es"], 1],
      [411, mb, [["et", "Eesti"]], ["et"], 1],
      [412, nb, [["eu", "Euskara"]], ["eu"], 1],
      [465, qb, [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 1],
      [413, rb, [["fi", "Suomi"]], ["fi"], 1],
      [414, tb, [["fil", "Filipino"]], ["fil"], 1],
      [415, xb, [["fr", ka]], ["fr"], 1],
      [495, Ab, [["fy", "Frysk"]], ["fy"], 1],
      [416, Cb, [["ga", "Gaeilge"]], ["ga"], 1],
      [496, Eb, [["gd", "G\u00e0idhlig"]], ["gd"], 1],
      [417, Gb, [["gl", "Galego"]], ["gl"], 1],
      [462, Jb, [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]], ["gu"], 1],
      [497, Mb, [["haw", tf]], ["haw"], 1],
      [457, Ob, [["he", "\u05e2\u05d1\u05e8\u05d9\u05ea"]], ["he"], 1],
      [453, Rb, [["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]], ["hi"], 1],
      [470, Tb, [["hmn", "Hmong"]], ["hmn"], 1],
      [418, Ub, [["hr", "Hrvatski"]], ["hr"], 1],
      [419, Vb, [["ht", "Haitian Creole"]], ["ht"], 1],
      [420, Wb, [["hu", "Magyar"]], ["hu"], 1],
      [504, $b, [["hy", "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"]], ["hy"], 1],
      [421, cc, [["id", "Indonesia"]], ["id"], 1],
      [422, gc, [["is", "\u00cdslenska"]], ["is"], 1],
      [423, hc, [["it", na]], ["it"], 1],
      [424, pc, [["ja", "\u65e5\u672c\u8a9e"]], ["ja"], 1],
      [458, tc, [["jv", "Jawa"]], ["jv"], 1],
      [505, uc, [["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"]], ["ka"], 1],
      [501, yc, [["kk", "\u049a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"]], ["kk"], 1],
      [484, zc, [["km", "\u1781\u17d2\u1798\u17c2\u179a"]], ["km"], 1],
      [471, Ac, [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]], ["kn"], 1],
      [425, Cc, [["ko", "\ud55c\uad6d\uc5b4"]], ["ko"], 1],
      [477, Dc, [["ku", "Kurd\u00ee"]], ["ku"], 1],
      [478, Fc, [["ky", "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"]], ["ky"], 1],
      [426, Gc, [["la", "Latin"]], ["la"], 1],
      [498, Jc, [["lb", "L\u00ebtzebuergesch"]], ["lb"], 1],
      [483, Lc, [["lo", "\u0ea5\u0eb2\u0ea7"]], ["lo"], 1],
      [427, Mc, [["lt", "Lietuvi\u0173"]], ["lt"], 1],
      [428, Nc, [["lv", "Latvie\u0161u"]], ["lv"], 1],
      [479, Oc, [["mg", "Malagasy"]], ["mg"], 1],
      [459, Pc, [["mi", "Te reo M\u0101ori"]], ["mi"], 1],
      [429, Qc, [["mk", "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]], ["mk"], 1],
      [490, Rc, [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]], ["ml"], 1],
      [474, Uc, [["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]], ["mn"], 1],
      [461, Xc, [["mr", "\u092e\u0930\u093e\u0920\u0940"]], ["mr"], 1],
      [430, Zc, [["ms", "Melayu"]], ["ms"], 1],
      [467, $c, [["mt", "Malti"]], ["mt"], 1],
      [488, fd, [["mul", "Multiple languages"]], ["mul"], 1],
      [511, ad, [["mul-beng", "Multiple languages (Bangla)"]], ["mul-beng"], 1],
      [512, bd, [["mul-cyrl", "Multiple languages (Cyrillic)"]], ["mul-cyrl"], 1],
      [513, cd, [["mul-deva", "Multiple languages (Devanagari)"]], ["mul-deva"], 1],
      [514, dd, [["mul-ethi", "Multiple languages (Ethiopic)"]], ["mul-ethi"], 1],
      [515, ed, [["mul-latn", "Multiple languages (Latin)"]], ["mul-latn"], 1],
      [492, gd, [["my", "\u1019\u103c\u1014\u103a\u1019\u102c"]], ["my"], 1],
      [431, id, [["nb", "Norsk bokm\u00e5l"]], ["nb"], 1],
      [485, jd, [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]], ["ne"], 1],
      [432, ld, [["nl", pa]], ["nl"], 1],
      [434, nd, [["nn", "Norsk nynorsk"]], ["nn"], 1],
      [433, od, [["no", "Norsk"]], ["no"], 1],
      [480, rd, [["ny", "Nyanja"]], ["ny"], 1],
      [476, td, [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]], ["or"], 1],
      [463, xd, [["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]], ["pa"], 1],
      [435, yd, [["pl", ra]], ["pl"], 1],
      [436, Ld, [[r, sa]], null, 1],
      [437, Bd, [[r, "Portugu\u00eas (Brasil)"]], [r], 1],
      [438, Gd, [[Ad, "Portugu\u00eas (Portugal)"]], [Ad], 1],
      [439, Pd, [["ro", "Rom\u00e2n\u0103"]], ["ro"], 1],
      [440, Sd, [["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]], ["ru"], 1],
      [491, Zd, [["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]], ["si"], 1],
      [441, $d, [["sk", "Sloven\u010dina"]], ["sk"], 1],
      [442, be, [["sl", "Sloven\u0161\u010dina"]], ["sl"], 1],
      [499, ce, [["sm", "Samoan"]], ["sm"], 1],
      [500, ee, [["sn", "ChiShona"]], ["sn"], 1],
      [472, fe, [["so", "Soomaali"]], ["so"], 1],
      [443, he, [["sq", "Shqip"]], ["sq"], 1],
      [444, ke, [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 1],
      [481, le, [["su", "Basa Sunda"]], ["su"], 1],
      [445, me, [["sv", "Svenska"]], ["sv"], 1],
      [446, ne, [["sw", "Kiswahili"]], ["sw"], 1],
      [473, oe, [[v, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]], [v], 1],
      [466, te, [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]], ["te"], 1],
      [502, ve, [["tg", "\u0422\u043e\u04b7\u0438\u043a\u04e3"]], ["tg"], 1],
      [454, we, [["th", "\u0e44\u0e17\u0e22"]], ["th"], 1],
      [508, ze, [["ti", "\u1275\u130d\u122d\u129b"]], ["ti"], 1],
      [447, Ae, [["tr", "T\u00fcrk\u00e7e"]], ["tr"], 1],
      [448, He, [["uk", "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"]], ["uk"], 1],
      [486, Le, [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 1],
      [503, Qe, [["uz", "O\u2018zbek"]], ["uz"], 1],
      [449, Re, [["vi", "Ti\u1ebfng Vi\u1ec7t"]], ["vi"], 1],
      [482, Ue, [["xh", "IsiXhosa"]], ["xh"], 1],
      [510, Ve, [["yi", "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"]], ["yi"], 1],
      [450, hf, [[w, "\u4e2d\u6587"]], null, 1],
      [451, bf, [[w, "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]], [w], 1],
      [452, ef, [[y, "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09"]], [y], 1],
      [475, rf, [["zh-yue", "\u7cb5\u8a9e"]], ["zh-yue"], 1],
      [460, sf, [["zu", "IsiZulu"]], ["zu"], 1],
      [238, "see-t-k0-und", [["see", "On\u00f6dowa\u02bcga:\u02bc"]], ["see"], 0],
      [214, "ti-t-k0-und", [["ti", "\u130d\u12d5\u12dd"]], ["ti"], 0],
      [215, "mr-t-k0-und", [["mr", wf]], ["mr"], 0],
      [241, Yc, [["mr", xf]], ["mr"], 0],
      [216, "ht-t-k0-und", [["ht", ka]], ["ht"], 0],
      [47, Cd, [[r, sa]], null, 38],
      [217, "nl-t-k0-intl", [[m, ya]], null, 0],
      [218, zb, [[m, ya]], ["fr"], 0],
      [219, "de-t-k0-intl", [[m, ya]], ["de"], 0],
      [220, "it-t-k0-intl", [[m, ya]], ["it"], 0],
      [221, Ed, [[m, ya]], [r], 0],
      [222, Jd, [[m, ya]], [Ad], 0],
      [223, "es-t-k0-intl", [[m, ya]], ["es"], 0],
      [224, "cy-t-k0-und", [[m, ba]], ["cy"], 0],
      [225, "ga-t-k0-und", [[m, ba]], ["ga"], 0],
      [369, Db, [[m, "Irish"]], null, 0],
      [226, "id-t-k0-und", [[m, ba]], ["id"], 0],
      [227, "jw-t-k0-und", [[m, ba]], ["jw"], 0],
      [228, "ms-t-k0-und", [[m, ba]], ["ms"], 0],
      [229, "sw-t-k0-und", [[m, ba]], ["sw"], 0],
      [230, "tl-t-k0-und", [[m, ba]], ["tl"], 0],
      [231, hd, [["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)"]], ["my"], 0],
      [236, lc, [[m, "Nunavik Inuktitut"]], ["iu"], 0],
      [237, mc, [[m, "Nunavut Inuktitut"]], ["iu"], 0],
      [245, kc, [[m, "Inuktitut Unicode"]], ["iu"], 0],
      [600, "en-t-i0-voice", [[m, ia]], null, 43],
      [601, cf, [["zh", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]], null, 43],
      [240, "lis-t-k0-und", [["lis", "\ua4e1\ua4f2\ua4e2\ua4f4"]], ["lis"], 0],
      [493, Ke, [[m, "Emoji & Symbol"]], ["mul"], 1],
      [351, Ta, [[m, "Corsican"]], null, 0],
      [352, Bb, [[m, "West Frisian"]], null, 0],
      [353, Fb, [[m, "Scots Gaelic"]], null, 0],
      [244, "haw-t-k0-und", [["haw", tf]], ["haw"], 0],
      [354, Nb, [[m, "Hawaiian"]], null, 0],
      [355, Kc, [[m, "Luxembourgish"]], null, 0],
      [243, "sd-t-k0-und", [[m, "Sindhi"]], ["sd"], 0],
      [356, de, [[m, "Samoan"]], null, 0],
      [358, bb, [["de", ea]], null, 0],
      [359, kb, [["es", ja]], null, 0],
      [360, yb, [["fr", ka]], null, 0],
      [361, ic, [["it", na]], null, 0],
      [362, md, [["nl", pa]], null, 0],
      [363, zd, [["pl", ra]], null, 0],
      [364, Dd, [[r, ta]], null, 0],
      [365, Id, [[Ad, ua]], null, 0],
      [366, Be, [["tr", "T\u00fcrk\u00e7e - F"]], null, 0],
      [367, Ee, [["tr", "T\u00fcrk\u00e7e - Q"]], null, 0],
      [368, "ku-t-k0-und", [["ku", "Kurd\u00ee Bedirxan"]], ["ku"], 0],
      [56, "ko-t-i0-und", [["ko", "\ud55c\uad6d\uc5b4"]], null, 45],
      [58, rc, [["ja", "\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]], null, 28],
      [57, qc, [["ja", "\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]], null, 28],
      [59, Ze, [[y, "\u5ee3\u6771\u8a71"]], null, 33],
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
      [251, "hi-t-k0-phone", [["hi", yf]], null, 0],
      [252, "mr-t-k0-phone", [["mr", yf]], null, 0],
      [250, Kb, [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)"]], null, 0],
      [253, sd, [[m, "Ojibwe Left Dot - E Finals"]], ["oj"], 0],
      [254, "one-t-k0-und", [["one", "On\u028cyote\u0294a\u00b7k\u00e1\u00b7"]], ["one"], 0],
      [255, "mez-t-k0-und", [["mez", "Oma\u035eeqnome"]], ["mez"], 0],
      [
        257,
        Nd,
        [["rhg", "\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d"]],
        ["rhg"],
        0
      ],
      [258, Ua, [["crk", "\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"]], ["crk"], 0],
      [259, "myh-t-k0-und", [["myh", "Q\u02b7i\u00b7q\u02b7i\u00b7di\u010d\u010daq"]], ["myh"], 0],
      [260, "win-t-k0-und", [["win", "Hooc\u0105k"]], ["win"], 0]
    ],
    function (a) {
      var b = new nj(a);
      if ((a = jj(Ji(bj(b, 2)), ""))) {
        Kj[a] = b;
        var c = jj(Ji(bj(ij(b)[0], 2)), "");
        c && (Rl[a] = c);
      }
      Fh(gj(b, 4, Ji), function (d) {
        d == y ? (d = "zh-Hant") : d == w && (d = af);
        pj[d] || (pj[d] = []);
        pj[d].push(b);
      });
    }
  );
  var Gj = vj(function () {
      try {
        return new URL("s://g"), !0;
      } catch (a) {
        return !1;
      }
    }),
    Hj = ["data:", "http:", "https:", "mailto:", "ftp:"];
  var Sl = [
      "title",
      "aria-atomic",
      "aria-autocomplete",
      "aria-busy",
      "aria-checked",
      "aria-current",
      "aria-disabled",
      "aria-dropeffect",
      "aria-expanded",
      "aria-haspopup",
      "aria-hidden",
      "aria-invalid",
      "aria-label",
      "aria-level",
      "aria-live",
      "aria-multiline",
      "aria-multiselectable",
      "aria-orientation",
      "aria-posinset",
      "aria-pressed",
      "aria-readonly",
      "aria-relevant",
      "aria-required",
      "aria-selected",
      "aria-setsize",
      "aria-sort",
      "aria-valuemax",
      "aria-valuemin",
      "aria-valuenow",
      "aria-valuetext",
      "alt",
      "align",
      "autocapitalize",
      "autocomplete",
      "autocorrect",
      "autofocus",
      "autoplay",
      "bgcolor",
      "border",
      "cellpadding",
      "cellspacing",
      "checked",
      "color",
      "cols",
      "colspan",
      "controls",
      "datetime",
      "disabled",
      "download",
      "draggable",
      "enctype",
      "face",
      "formenctype",
      "frameborder",
      "height",
      "hreflang",
      "hidden",
      "ismap",
      "label",
      "lang",
      "loop",
      "max",
      "maxlength",
      "media",
      "minlength",
      "min",
      "multiple",
      "muted",
      "nonce",
      "open",
      "placeholder",
      "preload",
      "rel",
      "required",
      "reversed",
      "role",
      "rows",
      "rowspan",
      Yd,
      "shape",
      "size",
      "sizes",
      "slot",
      ge,
      "spellcheck",
      "start",
      "step",
      "summary",
      "translate",
      Ge,
      "valign",
      "value",
      "width",
      "wrap",
      "itemscope",
      "itemtype",
      "itemid",
      "itemprop",
      "itemref"
    ],
    Tl = [
      [
        "dir",
        {
          A: 3,
          conditions: vj(function () {
            return new Map([["dir", new Set(["auto", "ltr", "rtl"])]]);
          })
        }
      ],
      [
        "async",
        {
          A: 3,
          conditions: vj(function () {
            return new Map([["async", new Set(["async"])]]);
          })
        }
      ],
      ["cite", { A: 2 }],
      [
        "loading",
        {
          A: 3,
          conditions: vj(function () {
            return new Map([["loading", new Set(["eager", "lazy"])]]);
          })
        }
      ],
      ["poster", { A: 2 }],
      [
        "target",
        {
          A: 3,
          conditions: vj(function () {
            return new Map([["target", new Set(["_self", "_blank"])]]);
          })
        }
      ]
    ],
    zj = new (function (a, b) {
      var c = new Map([
        ["A", new Map([["href", { A: 2 }]])],
        ["AREA", new Map([["href", { A: 2 }]])],
        [
          "LINK",
          new Map([
            [
              "href",
              {
                A: 2,
                conditions: new Map([
                  [
                    "rel",
                    new Set(
                      "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(
                        " "
                      )
                    )
                  ]
                ])
              }
            ]
          ])
        ],
        ["SOURCE", new Map([["src", { A: 1 }]])],
        ["IMG", new Map([["src", { A: 1 }]])],
        ["VIDEO", new Map([["src", { A: 1 }]])],
        ["AUDIO", new Map([["src", { A: 1 }]])]
      ]);
      this.h = new Set([
        "ARTICLE",
        "SECTION",
        "NAV",
        "ASIDE",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "HEADER",
        "FOOTER",
        "ADDRESS",
        "P",
        "HR",
        "PRE",
        "BLOCKQUOTE",
        "OL",
        "UL",
        "LH",
        "LI",
        "DL",
        "DT",
        "DD",
        "FIGURE",
        "FIGCAPTION",
        "MAIN",
        "DIV",
        "EM",
        "STRONG",
        "SMALL",
        "S",
        "CITE",
        "Q",
        "DFN",
        "ABBR",
        "RUBY",
        "RB",
        "RT",
        "RTC",
        "RP",
        "DATA",
        "TIME",
        "CODE",
        "VAR",
        "SAMP",
        "KBD",
        "SUB",
        "SUP",
        "I",
        "B",
        "U",
        "MARK",
        "BDI",
        "BDO",
        va,
        "BR",
        "WBR",
        "INS",
        "DEL",
        "PICTURE",
        "PARAM",
        "TRACK",
        "MAP",
        "TABLE",
        "CAPTION",
        "COLGROUP",
        "COL",
        "TBODY",
        "THEAD",
        "TFOOT",
        "TR",
        "TD",
        "TH",
        "SELECT",
        "DATALIST",
        "OPTGROUP",
        "OPTION",
        "OUTPUT",
        "PROGRESS",
        "METER",
        "FIELDSET",
        "LEGEND",
        "DETAILS",
        "SUMMARY",
        "MENU",
        "DIALOG",
        "SLOT",
        "CANVAS",
        "FONT",
        "CENTER"
      ]);
      this.g = c;
      this.i = a;
      this.j = b;
    })(
      new Set(
        vj(function () {
          return Sl.concat(["class", "id"]);
        })
      ),
      new Map(
        vj(function () {
          return Tl.concat([["style", { A: 4 }]]);
        })
      )
    );
  var Bj = vj(function () {
    return new Aj();
  });
  var dl = RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
  var bl = null;
  var cl = null;
  var Vj = {
    Lb: "aq",
    Mb: "ai",
    Nb: "ra",
    Ob: "ds",
    Pb: "dr",
    Sb: "fd",
    Tb: "gi",
    Ub: "gl",
    Vb: "gp",
    je: "hd",
    Zi: "pl",
    aj: "re",
    bj: "ri",
    cj: "sq",
    dj: "si",
    ej: "ss",
    SUCCESS: "su",
    gj: "ui",
    hj: "ua",
    ij: "up",
    URL: "url",
    ib: "input_tools",
    hb: "current_input",
    jb: "current_input_state",
    fj: "tvk",
    Xi: "GOOGLE_ITA_KD",
    Rb: "ft",
    jj: "ut",
    Yi: "km"
  };
  Xj.prototype.get = function (a) {
    a = localStorage[String(a)];
    return void 0 !== a ? JSON.parse(a) : null;
  };
  Xj.prototype.set = function (a, b) {
    void 0 !== b ? (localStorage[String(a)] = JSON.stringify(b)) : localStorage.removeItem(String(a));
  };
  Xj.g = function () {
    return yi(Xj);
  };
  var bk;
  z = jk.prototype;
  z.V = "";
  z.set = function (a) {
    this.V = "" + a;
  };
  z.B = function (a, b, c) {
    this.V += String(a);
    if (null != b) for (var d = 1; d < arguments.length; d++) this.V += arguments[d];
    return this;
  };
  z.clear = function () {
    this.V = "";
  };
  z.toString = function () {
    return this.V;
  };
  D(kk, Kh);
  var Ul = [];
  kk.prototype.listen = function (a, b, c, d) {
    Array.isArray(b) || (b && (Ul[0] = b.toString()), (b = Ul));
    for (var e = 0; e < b.length; e++) {
      var f = Wh(a, b[e], c || this.handleEvent, d || !1, this.h || this);
      if (!f) break;
      this.g[f.key] = f;
    }
    return this;
  };
  kk.prototype.removeAll = function () {
    tg(
      this.g,
      function (a, b) {
        this.g.hasOwnProperty(b) && hi(a);
      },
      this
    );
    this.g = {};
  };
  kk.prototype.F = function () {
    kk.o.F.call(this);
    this.removeAll();
  };
  kk.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  lk.W = void 0;
  lk.g = function () {
    return lk.W ? lk.W : (lk.W = new lk());
  };
  lk.prototype.g = 0;
  D(nk, M);
  nk.prototype.Cb = lk.g();
  var mk = null;
  z = nk.prototype;
  z.l = function () {
    return this.h;
  };
  z.Na = function (a) {
    if (this.g && this.g != a) throw Error("Method not supported");
    nk.o.Na.call(this, a);
  };
  z.xa = function () {
    this.h = Dh(this.X.g, "DIV");
  };
  z.H = function () {
    this.s = !0;
    U(this, function (a) {
      !a.s && a.l() && a.H();
    });
  };
  z.M = function () {
    U(this, function (a) {
      a.s && a.M();
    });
    this.P && this.P.removeAll();
    this.s = !1;
  };
  z.F = function () {
    this.s && this.M();
    this.P && (Lh(this.P), delete this.P);
    U(this, function (a) {
      Lh(a);
    });
    this.h && Ih(this.h);
    this.g = this.S = this.h = this.J = this.i = null;
    nk.o.F.call(this);
  };
  z.oa = function (a, b) {
    if (a.s && !this.s) throw Error(da);
    if (0 > b || b > tk(this)) throw Error("Child component index out of bounds");
    (this.J && this.i) || ((this.J = {}), (this.i = []));
    if (a.g == this) {
      var c = ok(a);
      this.J[c] = a;
      Sf(this.i, a);
    } else {
      c = this.J;
      var d = ok(a);
      if (null !== c && d in c) throw Error('The object already contains the key "' + d + '"');
      c[d] = a;
    }
    qk(a, this);
    Vf(this.i, b, 0, a);
    a.s && this.s && a.g == this
      ? ((c = this.h),
        (c.childNodes[b] || null) != a.l() &&
          (a.l().parentElement == c && c.removeChild(a.l()), (b = c.childNodes[b] || null), c.insertBefore(a.l(), b)))
      : this.s && !a.s && a.h && a.h.parentNode && 1 == a.h.parentNode.nodeType && a.H();
  };
  z.ga = function (a, b) {
    if (a) {
      var c = typeof a === u ? a : ok(a);
      a = this.J && c ? vg(this.J, c) || null : null;
      if (c && a) {
        var d = this.J;
        c in d && delete d[c];
        Sf(this.i, a);
        b && (a.M(), a.h && Ih(a.h));
        qk(a, null);
      }
    }
    if (!a) throw Error("Child is not in parent component");
    return a;
  };
  D(V, nk);
  var Vl = {};
  z = V.prototype;
  z.F = function () {
    V.o.F.call(this);
    this.U && (Vk(this.U.Y, this), (this.U = null));
    this.h = null;
  };
  z.ua = function () {
    var a = this.l();
    if (a) {
      var b = Gk(this);
      b && !b.id && (b.id = ok(this) + ".label");
      ak(a, "treeitem");
      R(a, Yd, !1);
      R(a, "level", this.ba());
      b && R(a, "labelledby", b.id);
      (b = this.sa()) && ak(b, "presentation");
      (b = this.ra()) && ak(b, "presentation");
      if ((b = Hk(this)))
        if ((ak(b, "group"), b.hasChildNodes()))
          for (R(a, pb, !1), a = tk(this), b = 1; b <= a; b++) {
            var c = T(this, b - 1).l();
            R(c, "setsize", a);
            R(c, "posinset", b);
          }
    }
  };
  z.xa = function () {
    var a = Ck(this),
      b = this.X.g;
    var c = Dh(b, "DIV");
    N ? ((a = fh(Fl, a)), mh(c, a), c.removeChild(c.firstChild)) : mh(c, a);
    if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
    else {
      for (b = b.createDocumentFragment(); c.firstChild; ) b.appendChild(c.firstChild);
      c = b;
    }
    this.h = c;
  };
  z.H = function () {
    V.o.H.call(this);
    Vl[ok(this)] = this;
    this.ua();
  };
  z.M = function () {
    V.o.M.call(this);
    delete Vl[ok(this)];
  };
  z.oa = function (a, b) {
    var c = T(this, b - 1),
      d = T(this, b);
    V.o.oa.call(this, a, b);
    a.R = c;
    a.u = d;
    c ? (c.u = a) : (this.Qa = a);
    d ? (d.R = a) : (this.Ra = a);
    (b = this.getTree()) && Lk(a, b);
    xk(a, this.ba() + 1);
    if ((b = this.l()))
      if ((this.ca(), R(b, pb, this.v()), this.v())) {
        b = Hk(this);
        a.l() || a.xa();
        var e = a.l(),
          f = d && d.l();
        b.insertBefore(e, f);
        this.s && a.H();
        d || (c ? c.ca() : ((b.style.display = ""), this.O(this.v())));
      }
  };
  z.add = function (a, b) {
    a.g && a.g.ga(a);
    this.oa(a, b ? (this.i && b ? this.i.indexOf(b) : -1) : tk(this));
    return a;
  };
  z.ga = function (a) {
    var b = this.getTree(),
      c = b ? b.m : null;
    if (c == a || a.contains(c))
      if (b.za) {
        W(this);
        c = this.Jb;
        if (typeof c === p) this && (c = C(c, this));
        else if (c && typeof c.handleEvent == p) c = C(c.handleEvent, c);
        else throw Error("Invalid listener argument");
        2147483647 < Number(10) || E.setTimeout(c, 10);
      } else W(this);
    V.o.ga.call(this, a);
    this.Ra == a && (this.Ra = a.R);
    this.Qa == a && (this.Qa = a.u);
    a.R && (a.R.u = a.u);
    a.u && (a.u.R = a.R);
    c = !a.u;
    a.U = null;
    a.ka = -1;
    if (b && (Vk(b.Y, a), this.s)) {
      b = Hk(this);
      if (a.s) {
        var d = a.l();
        b.removeChild(d);
        a.M();
      }
      c && (c = T(this, tk(this) - 1)) && c.ca();
      S(this) ||
        ((b.style.display = pd), this.ca(), (this.sa().className = this.qa()), (b = this.l()) && b.removeAttribute("aria-expanded"));
    }
    return a;
  };
  z.remove = V.prototype.ga;
  z.Jb = function () {
    W(this);
  };
  z.ba = function () {
    var a = this.ka;
    0 > a && ((a = (a = this.g) ? a.ba() + 1 : 0), xk(this, a));
    return a;
  };
  z.contains = function (a) {
    for (; a; ) {
      if (a == this) return !0;
      a = a.g;
    }
    return !1;
  };
  z.getChildren = function () {
    var a = [];
    U(this, function (b) {
      a.push(b);
    });
    return a;
  };
  z.isSelected = function () {
    return this.Ea;
  };
  z.v = function () {
    return this.da;
  };
  z.O = function (a) {
    var b = a != this.da;
    if (!b || li(this, a ? "beforeexpand" : "beforecollapse")) {
      this.da = a;
      var c = this.getTree();
      var d = this.l();
      if (S(this)) {
        if ((!a && c && this.contains(c.m) && W(this), d)) {
          if ((c = Hk(this)))
            if (((c.style.display = a ? "" : pd), R(d, pb, a), a && this.s && !c.hasChildNodes())) {
              var e = [];
              U(this, function (f) {
                e.push(Ck(f));
              });
              nh(c, fh(e));
              U(this, function (f) {
                f.H();
              });
            }
          this.ca();
        }
      } else if ((c = Hk(this))) c.style.display = pd;
      d && (this.sa().className = this.qa());
      b && li(this, a ? ob : "collapse");
    }
  };
  z.Ma = function () {
    var a = this.g;
    a && (a.O(!0), a.Ma());
  };
  z.ia = function () {
    return this.j.Bb + (this.isSelected() ? " " + this.j.Ab : "");
  };
  z.bb = function () {
    return gh(ge, { type: ob, style: { display: "inline-block" }, class: Ek(this) });
  };
  z.l = function () {
    var a = V.o.l.call(this);
    a || (this.h = a = this.X.l(ok(this)));
    return a;
  };
  z.ra = function () {
    var a = vk(this);
    return a ? a.firstChild : null;
  };
  z.sa = function () {
    var a = vk(this);
    return a ? a.childNodes[1] : null;
  };
  z.ca = function () {
    var a = this.ra();
    a && (a.className = Ek(this));
    if ((a = Hk(this))) a.style.backgroundPosition = Fk(this);
  };
  var uk = {
    cb: 19,
    zb: "goog-tree-root goog-tree-item",
    wb: "goog-tree-hide-root",
    xb: "goog-tree-item",
    Ua: "goog-tree-children",
    Va: "goog-tree-children-nolines",
    Bb: "goog-tree-row",
    yb: "goog-tree-item-label",
    aa: "goog-tree-icon",
    pb: "goog-tree-expand-icon",
    tb: "goog-tree-expand-icon-plus",
    sb: "goog-tree-expand-icon-minus",
    vb: "goog-tree-expand-icon-tplus",
    ub: "goog-tree-expand-icon-tminus",
    rb: "goog-tree-expand-icon-lplus",
    qb: "goog-tree-expand-icon-lminus",
    Za: "goog-tree-expand-icon-t",
    Ya: "goog-tree-expand-icon-l",
    Xa: "goog-tree-expand-icon-blank",
    Ha: Ib,
    Ga: Hb,
    Ia: "goog-tree-file-icon",
    ab: Ib,
    Wa: Hb,
    Ab: Yd
  };
  D(Mk, M);
  Mk.prototype.handleEvent = function (a) {
    var b = new Oh(a.m);
    b.type = a.type == vb || "focus" == a.type ? vb : wb;
    li(this, b);
  };
  Mk.prototype.F = function () {
    Mk.o.F.call(this);
    hi(this.h);
    hi(this.i);
    delete this.g;
  };
  D(Nk, Oh);
  D(Pk, M);
  z = Pk.prototype;
  z.Z = null;
  z.va = null;
  z.Ka = null;
  z.wa = null;
  z.D = -1;
  z.L = -1;
  z.Fa = !1;
  var Wl = {
      3: 13,
      12: 144,
      63232: 38,
      63233: 40,
      63234: 37,
      63235: 39,
      63236: 112,
      63237: 113,
      63238: 114,
      63239: 115,
      63240: 116,
      63241: 117,
      63242: 118,
      63243: 119,
      63244: 120,
      63245: 121,
      63246: 122,
      63247: 123,
      63248: 44,
      63272: 46,
      63273: 36,
      63275: 35,
      63276: 33,
      63277: 34,
      63289: 144,
      63302: 45
    },
    Xl = {
      Up: 38,
      Down: 40,
      Left: 37,
      Right: 39,
      Enter: 13,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      "U+007F": 46,
      Home: 36,
      End: 35,
      PageUp: 33,
      PageDown: 34,
      Insert: 45
    },
    Yl = ck && L;
  z = Pk.prototype;
  z.Gb = function (a) {
    if (fk || gk)
      if ((17 == this.D && !a.ctrlKey) || (18 == this.D && !a.altKey) || (ck && 91 == this.D && !a.metaKey)) this.L = this.D = -1;
    -1 == this.D &&
      (a.ctrlKey && 17 != a.g ? (this.D = 17) : a.altKey && 18 != a.g ? (this.D = 18) : a.metaKey && 91 != a.g && (this.D = 91));
    hk(a.g, this.D, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? ((this.L = ek(a.g)), Yl && (this.Fa = a.altKey)) : this.handleEvent(a);
  };
  z.Ib = function (a) {
    this.L = this.D = -1;
    this.Fa = a.altKey;
  };
  z.handleEvent = function (a) {
    var b = a.m,
      c = b.altKey;
    if (N && a.type == xc) {
      var d = this.L;
      var e = 13 != d && 27 != d ? b.keyCode : 0;
    } else
      (fk || gk) && a.type == xc
        ? ((d = this.L), (e = 0 <= b.charCode && 63232 > b.charCode && dk(d) ? b.charCode : 0))
        : (a.type == xc
            ? (Yl && (c = this.Fa),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.L), (e = b.charCode))
                : ((d = b.keyCode || this.L), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.L), (e = b.charCode || 0)),
          ck && 63 == e && 224 == d && (d = 191));
    var f = (d = ek(d));
    d
      ? 63232 <= d && d in Wl
        ? (f = Wl[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier && b.keyIdentifier in Xl && (f = Xl[b.keyIdentifier]);
    if (!L || a.type != xc || hk(f, this.D, a.shiftKey, a.ctrlKey, c, a.metaKey))
      (a = f == this.D), (this.D = f), (b = new Nk(f, e, a, b)), (b.altKey = c), li(this, b);
  };
  z.l = function () {
    return this.Z;
  };
  z.F = function () {
    Pk.o.F.call(this);
    Ok(this);
  };
  D(Qk, V);
  Qk.prototype.getTree = function () {
    if (this.U) return this.U;
    var a = this.g;
    return a && (a = a.getTree()) ? (Lk(this, a), a) : null;
  };
  Qk.prototype.qa = function () {
    var a = this.v(),
      b = this.nb;
    if (a && b) return b;
    b = this.ob;
    if (!a && b) return b;
    b = this.j;
    if (S(this)) {
      if (a && b.Ha) return b.aa + " " + b.Ha;
      if (!a && b.Ga) return b.aa + " " + b.Ga;
    } else if (b.Ia) return b.aa + " " + b.Ia;
    return "";
  };
  z = Rk.prototype;
  z.set = function (a, b) {
    Sk(this, a, b, !1);
  };
  z.add = function (a, b) {
    Sk(this, a, b, !0);
  };
  z.get = function (a) {
    a: {
      for (var b = this, c = 0; c < a.length; c++)
        if (((b = b.C[a.charAt(c)]), !b)) {
          a = void 0;
          break a;
        }
      a = b;
    }
    return a ? a.g : void 0;
  };
  z.Db = function (a) {
    var b = [];
    if (a) {
      for (var c = this, d = 0; d < a.length; d++) {
        var e = a.charAt(d);
        if (!c.C[e]) return [];
        c = c.C[e];
      }
      Tk(c, a, b);
    } else Tk(this, "", b);
    return b;
  };
  z.clear = function () {
    this.C = {};
    this.g = void 0;
  };
  z.remove = function (a) {
    for (var b = this, c = [], d = 0; d < a.length; d++) {
      var e = a.charAt(d);
      if (!b.C[e]) throw Error('The collection does not have the key "' + a + '"');
      c.push([b, e]);
      b = b.C[e];
    }
    a = b.g;
    for (delete b.g; 0 < c.length; ) {
      e = c.pop();
      b = e[0];
      e = e[1];
      d = b.C[e];
      var f;
      if ((f = void 0 === d.g))
        a: {
          f = void 0;
          for (f in d.C) {
            f = !1;
            break a;
          }
          f = !0;
        }
      if (f) delete b.C[e];
      else break;
    }
    return a;
  };
  Uk.prototype.clear = function () {
    this.g = "";
  };
  D(X, V);
  z = X.prototype;
  z.getTree = function () {
    return this;
  };
  z.ba = function () {
    return 0;
  };
  z.Ma = function () {};
  z.Fb = function () {
    this.za = !0;
    Pj(this.l(), ub);
    this.m && W(this.m);
  };
  z.Eb = function () {
    this.za = !1;
    Qj(this.l());
  };
  z.v = function () {
    return !this.T || X.o.v.call(this);
  };
  z.O = function (a) {
    this.T ? X.o.O.call(this, a) : (this.da = a);
  };
  z.bb = function () {
    return hh;
  };
  z.sa = function () {
    var a = vk(this);
    return a ? a.firstChild : null;
  };
  z.ra = function () {
    return null;
  };
  z.ca = function () {};
  z.ia = function () {
    return X.o.ia.call(this) + (this.T ? "" : " " + this.j.wb);
  };
  z.qa = function () {
    var a = this.v(),
      b = this.nb;
    if (a && b) return b;
    b = this.ob;
    if (!a && b) return b;
    b = this.j;
    return a && b.ab ? b.aa + " " + b.ab : !a && b.Wa ? b.aa + " " + b.Wa : "";
  };
  z.ua = function () {
    X.o.ua.call(this);
    var a = this.l();
    ak(a, "tree");
    R(a, "labelledby", Gk(this).id);
  };
  z.H = function () {
    X.o.H.call(this);
    var a = this.l();
    a.className = this.j.zb;
    a.setAttribute("hideFocus", "true");
    a = this.l();
    a.tabIndex = 0;
    var b = (this.Ca = new Pk(a)),
      c = (this.ya = new Mk(a));
    pk(this)
      .listen(c, wb, this.Eb)
      .listen(c, vb, this.Fb)
      .listen(b, "key", this.Hb)
      .listen(a, Wc, this.Ja)
      .listen(a, Ra, this.Ja)
      .listen(a, Za, this.Ja);
    this.ua();
  };
  z.M = function () {
    X.o.M.call(this);
    Lh(this.Ca);
    this.Ca = null;
    Lh(this.ya);
    this.ya = null;
  };
  z.Ja = function (a) {
    var b;
    a: {
      for (var c = a.target; null != c; ) {
        if ((b = Vl[c.id])) break a;
        if (c == this.l()) break;
        c = c.parentNode;
      }
      b = null;
    }
    if (b)
      switch (a.type) {
        case Wc:
          Ik(b, a);
          break;
        case Ra:
          a.h();
          break;
        case Za:
          (a.target.getAttribute(Ge) == ob && S(b)) || b.O(!b.v());
      }
  };
  z.Hb = function (a) {
    var b = this.Y;
    var c = !1;
    switch (a.g) {
      case 40:
      case 38:
        if (a.ctrlKey) {
          c = 40 == a.g ? 1 : -1;
          var d = b.u;
          if (d) {
            var e = null,
              f = !1;
            if (b.m) {
              var h = b.i + c;
              0 <= h && h < b.m.length ? ((b.i = h), (e = b.m)) : (f = !0);
            }
            e ||
              ((h = b.j + c),
              0 <= h && h < d.length && (b.j = h),
              d.length > b.j && (e = b.h.get(d[b.j])),
              e && e.length && f && (b.i = -1 == c ? e.length - 1 : 0));
            Wk(b, e) && (b.u = d);
          }
          c = !0;
        }
        break;
      case 8:
        d = b.g.length - 1;
        c = !0;
        0 < d ? ((b.g = b.g.substring(0, d)), Xk(b, b.g)) : 0 == d ? (b.g = "") : (c = !1);
        break;
      case 27:
        (b.g = ""), (c = !0);
    }
    if (!(b = c) && (b = this.m)) {
      c = this.m;
      b = !0;
      switch (a.g) {
        case 39:
          if (a.altKey) break;
          S(c) && (c.v() ? W(T(c, 0)) : c.O(!0));
          break;
        case 37:
          if (a.altKey) break;
          S(c) && c.v() ? c.O(!1) : ((d = c.g), (e = c.getTree()), d && (e.T || d != e) && W(d));
          break;
        case 40:
          a: if (S(c) && c.v()) d = T(c, 0);
          else {
            for (d = c; d != c.getTree(); ) {
              e = d.u;
              if (null != e) {
                d = e;
                break a;
              }
              d = d.g;
            }
            d = null;
          }
          d && W(d);
          break;
        case 38:
          d = c.R;
          null != d ? (d = Jk(d)) : ((d = c.g), (e = c.getTree()), (d = (!e.T && d == e) || c == e ? null : d));
          d && W(d);
          break;
        default:
          b = !1;
      }
      b && (a.h(), (c = c.getTree()) && c.Y.clear());
    }
    b ||
      ((b = this.Y),
      (c = !1),
      a.ctrlKey ||
        a.altKey ||
        ((d = ""),
        a.j ? (d = String.fromCharCode(a.j).toLowerCase()) : dk(a.g) && (d = String.fromCharCode(a.g).toLowerCase()),
        d &&
          ((1 == d.length && " " <= d && "~" >= d) || ("\u0080" <= d && "\ufffd" >= d)) &&
          (" " != d || b.g) &&
          ((b.g += d), (c = Xk(b, b.g)))),
      (b = c));
    b && a.h();
    return b;
  };
  Hf(al, X);
  al.prototype.H = function () {
    X.prototype.H.call(this);
    var a = this.l();
    pk(this).listen(a, Wc, this.Aa).listen(a, Ra, this.Aa).listen(a, Za, this.Aa);
  };
  al.prototype.Aa = function (a) {
    for (var b = null, c = a.target; null != c && !(b = Vl[c.id]) && c != this.l(); ) c = c.parentNode;
    if (b)
      switch (a.type) {
        case Wc:
          Ik(b, a);
          break;
        case Ra:
          a.h();
          a.target.getAttribute(Ge) || this.Oa(b);
          break;
        case Za:
          a.target.getAttribute(Ge) || this.Pa(b);
      }
  };
  z = fl.prototype;
  z.Sa = function (a) {
    var b;
    a instanceof V ? (b = a) : (b = this.h.m);
    if (b && b != this.h) {
      a = b.getChildren();
      if (0 == a.length) this.ha({ inputtool: b.S }, this.g);
      else for (b = 0; b < a.length; b++) this.ha({ inputtool: a[b].S }, this.g);
      hl(this);
      Y(Od, cb);
    }
  };
  z.eb = function (a) {
    var b;
    a instanceof V ? (b = a) : (b = this.g.m);
    this.g.ga(b);
    hl(this);
    Y("left", cb);
    Y("up", cb);
    Y("down", cb);
  };
  z.fb = function (a, b) {
    var c = a.getChildren();
    if (0 == c.length) ((c = gl(this, a.S)), c) ? b || (yk(this.g, c), this.gb(null)) : Y(Od, hb);
    else for (b = c.length - 1; 0 <= b; b--) this.fb(c[b], !0);
  };
  z.gb = function () {
    Y("left", hb);
    Y("up", hb);
    Y("down", hb);
  };
  z.ha = function (a, b) {
    if (a.language) {
      var c = a.language;
      a = a.inputtools;
      for (var d = 0; d < a.length; d++) this.ha({ inputtool: a[d], langName: c }, b);
    } else if (
      ((c = a.inputtool),
      (a = a.langName),
      !gl(this, c) && ((d = b.getTree()), (d = new Qk(hh, d.j, d.X)), (d.S = c), b.oa(d, tk(b)), (b = Gk(d))))
    ) {
      var e = xh();
      d = e.fa("LI", { class: "ita-kd-menuitem", style: 'style="-webkit-user-select: none; "' });
      var f = e.fa(va, "ita-kd-checkbox ita-kd-menuitem-span"),
        h = e.fa;
      if (!Hl.ita_icon_style) {
        Hl.ita_icon_style = !0;
        var g = Lj();
        var k = xh(Gl.body),
          l = k.g;
        if (N && l.createStyleSheet) (l = l.createStyleSheet()), ni(l, g);
        else {
          l = Jh(k, "HEAD")[0];
          if (!l) {
            var n = Jh(k, "BODY")[0];
            l = k.fa("HEAD");
            n.parentNode.insertBefore(l, n);
          }
          k = k.fa("STYLE");
          (n = ph()) && k.setAttribute("nonce", n);
          ni(k, g);
          l.appendChild(k);
        }
      }
      g = Kj[c];
      (g = "ita-icon-" + (g ? kj(g) : 0)) && (g = "ita-kd-img " + g);
      h = h.call(e, va, "ita-kd-menuitem-inputtool-icon ita-kd-menuitem-span " + (g || ""));
      e.kb(d, f, h);
      e = dl.test(c) ? "rtl" : "ltr";
      a && ((a = Ch(va, jc, a + " - ")), d.appendChild(a));
      c = Ch(va, { class: jc, dir: e }, Rl[c]);
      d.appendChild(c);
      "rtl" == mi(document.body) && Pj(d, "ita-kd-rtl");
      c = d.cloneNode(!0).childNodes;
      for (Hh(b); c.length; ) b.appendChild(c[0]);
    }
  };
  z.Ta = function (a) {
    var b = this.g.m,
      c;
    if (b) {
      if (0 < a) (c = b.u) && (c = c.u);
      else if (0 > a && ((c = b.R), !c)) return;
      this.g.add(b, c);
      W(b);
      hl(this);
    }
  };
  new fl();
}).call(this);
