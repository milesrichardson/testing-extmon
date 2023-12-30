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
    k = "Africa Latin",
    ba = "Android",
    ca = "Deutsch",
    da = "Din\u00e9 bizaad - Modern",
    l = "Edge",
    ea = "English",
    fa = "Espa\u00f1ol",
    ia = "Fran\u00e7ais",
    ja = "Internet Explorer",
    ka = "Italiano",
    la = "Microsoft Edge",
    ma = "Nederlands",
    na = "Opera",
    oa = "Polski",
    pa = "Portugu\u00eas",
    qa = "Portugu\u00eas brasileiro",
    ra = "Portugu\u00eas europeu",
    n = "Silk",
    r = "US International",
    sa = "af-t-i0-handwrit",
    ta = "am-t-i0-handwrit",
    ua = "ar-t-i0-handwrit",
    va = "as-t-i0-handwrit",
    wa = "az-t-i0-handwrit",
    xa = "be-t-i0-handwrit",
    za = "bg-t-i0-handwrit",
    Aa = "bg-t-k0-qwerty",
    Ba = "bn-t-i0-handwrit",
    Ca = "bn-t-und-latn-k0-und",
    Da = "bo-t-i0-handwrit",
    Ea = "bs-t-i0-handwrit",
    Fa = "ca-t-i0-handwrit",
    Ga = "ceb-t-i0-handwrit",
    Ha = "chext_inputtools_menu",
    Ia = "chr-t-und-latn-k0-und",
    t = "click",
    Ja = "co-t-i0-handwrit",
    Ka = "co-t-k0-accents",
    La = "crk-t-k0-phone",
    Ma = "cs-t-i0-handwrit",
    Na = "cs-t-k0-qwertz",
    Oa = "cy-t-i0-handwrit",
    Pa = "da-t-i0-handwrit",
    Qa = "de-ch-t-k0-und",
    Ra = "de-t-i0-handwrit",
    Sa = "de-t-k0-accents",
    Ta = "el-t-i0-handwrit",
    v = "en",
    Ua = "en-t-i0-handwrit",
    Va = "en-t-k0-dvorak",
    Wa = "en-us-t-k0-intl",
    Xa = "eo-t-i0-handwrit",
    Ya = "es-t-i0-handwrit",
    Za = "es-t-k0-accents",
    $a = "es-t-k0-und",
    ab = "et-t-i0-handwrit",
    bb = "eu-t-i0-handwrit",
    cb = "fa-t-i0-handwrit",
    db = "fi-t-i0-handwrit",
    fb = "fil-t-i0-handwrit",
    gb = "fr-t-i0-handwrit",
    hb = "fr-t-k0-accents",
    ib = "fr-t-k0-intl",
    w = "function",
    jb = "fy-t-i0-handwrit",
    kb = "fy-t-k0-accents",
    lb = "ga-t-i0-handwrit",
    mb = "ga-t-k0-accents",
    nb = "gd-t-i0-handwrit",
    ob = "gd-t-k0-accents",
    pb = "gl-t-i0-handwrit",
    qb = "gu-t-i0-handwrit",
    rb = "gu-t-k0-phone2",
    sb = "gu-t-und-latn-k0-qwerty",
    tb = "haw-t-i0-handwrit",
    ub = "haw-t-k0-accents",
    vb = "he-t-i0-handwrit",
    wb = "he-t-i0-und",
    xb = "he-t-k0-und",
    yb = "hi-t-i0-handwrit",
    zb = "hi-t-k0-qwerty",
    Ab = "hmn-t-i0-handwrit",
    Bb = "hr-t-i0-handwrit",
    Cb = "ht-t-i0-handwrit",
    Db = "hu-t-i0-handwrit",
    Eb = "hu-t-k0-101key",
    Fb = "hy-hyr-t-k0-und",
    Gb = "hy-hyt-t-k0-und",
    Hb = "hy-t-i0-handwrit",
    x = "iPad",
    Ib = "iPod",
    Jb = "id-t-i0-handwrit",
    Kb = "is-t-i0-handwrit",
    Lb = "it-t-i0-handwrit",
    Mb = "it-t-k0-accents",
    Nb = "ita-kd-checkbox ita-kd-menuitem-span",
    Ob = "ita-kd-menuitem",
    Pb = "iu-t-k0-inuktitu",
    Qb = "iu-t-k0-nunavik",
    Rb = "iu-t-k0-nunavut",
    Sb = "ja-hira-t-i0-und",
    Tb = "ja-t-i0-handwrit",
    Ub = "ja-t-i0-mozcjp",
    Vb = "ja-t-i0-mozcus",
    Wb = "ja-t-ja-hira-i0-und",
    Xb = "jv-t-i0-handwrit",
    Yb = "ka-t-i0-handwrit",
    Zb = "ka-t-k0-legacy",
    $b = "ka-t-k0-und",
    ac = "kk-t-i0-handwrit",
    bc = "km-t-i0-handwrit",
    cc = "kn-t-i0-handwrit",
    dc = "kn-t-und-latn-k0-und",
    ec = "ko-t-i0-handwrit",
    fc = "ku-t-i0-handwrit",
    gc = "ky-cyrl-t-k0-und",
    hc = "ky-t-i0-handwrit",
    ic = "la-t-i0-handwrit",
    jc = "latn-002-t-k0-und",
    y = "latn_002",
    kc = "lb-t-i0-handwrit",
    lc = "lb-t-k0-accents",
    mc = "lo-t-i0-handwrit",
    nc = "lt-t-i0-handwrit",
    oc = "lv-t-i0-handwrit",
    pc = "mg-t-i0-handwrit",
    rc = "mi-t-i0-handwrit",
    sc = "mk-t-i0-handwrit",
    tc = "ml-t-i0-handwrit",
    uc = "ml-t-und-latn-k0-und",
    vc = "mn-cyrl-t-k0-und",
    wc = "mn-t-i0-handwrit",
    xc = "mni-mtei-t-k0-phone",
    yc = "mr-t-i0-handwrit",
    zc = "mr-t-k0-devanaga",
    Ac = "ms-t-i0-handwrit",
    Bc = "mt-t-i0-handwrit",
    Cc = "mul-beng-t-i0-handwrit",
    Dc = "mul-cyrl-t-i0-handwrit",
    Ec = "mul-deva-t-i0-handwrit",
    Fc = "mul-ethi-t-i0-handwrit",
    Gc = "mul-latn-t-i0-handwrit",
    Hc = "mul-t-i0-handwrit",
    Ic = "my-t-i0-handwrit",
    Jc = "my-t-k0-myansan",
    Kc = "nb-t-i0-handwrit",
    Lc = "ne-t-i0-handwrit",
    Mc = "ne-t-und-latn-k0-und",
    Nc = "nl-t-i0-handwrit",
    Oc = "nl-t-k0-accents",
    Pc = "nn-t-i0-handwrit",
    Qc = "no-t-i0-handwrit",
    Rc = "number",
    Sc = "ny-t-i0-handwrit",
    z = "object",
    Tc = "oj-t-k0-ojibwe",
    Uc = "or-t-i0-handwrit",
    Vc = "or-t-und-latn-k0-und",
    Wc = "pa-guru-t-k0-und",
    Xc = "pa-guru-t-und-latn-k0-und",
    Yc = "pa-t-i0-handwrit",
    Zc = "pl-t-i0-handwrit",
    $c = "pl-t-k0-accents",
    A = "pt-BR",
    B = "pt-PT",
    ad = "pt-br-t-i0-handwrit",
    bd = "pt-br-t-i0-und",
    cd = "pt-br-t-k0-accents",
    dd = "pt-br-t-k0-intl",
    ed = "pt-br-t-k0-und",
    fd = "pt-pt-t-i0-handwrit",
    gd = "pt-pt-t-i0-und",
    hd = "pt-pt-t-k0-accents",
    id = "pt-pt-t-k0-intl",
    jd = "pt-pt-t-k0-und",
    kd = "pt-t-i0-handwrit",
    ld = "rhg-rohg-t-k0-und",
    md = "ro-t-i0-handwrit",
    nd = "ro-t-k0-extended",
    od = "ro-t-k0-legacy",
    pd = "ru-t-i0-handwrit",
    qd = "ru-t-k0-aatseel",
    rd = "ru-t-k0-qwerty",
    sd = "ru-t-k0-yazhert",
    td = "sa-t-k0-devanaga",
    ud = "sa-t-und-latn-k0-und",
    vd = "si-t-i0-handwrit",
    wd = "sk-t-i0-handwrit",
    xd = "sk-t-k0-qwerty",
    yd = "sl-t-i0-handwrit",
    zd = "sm-t-i0-handwrit",
    Ad = "sm-t-k0-accents",
    Bd = "sn-t-i0-handwrit",
    Cd = "so-t-i0-handwrit",
    Dd = "sq-t-i0-handwrit",
    Ed = "sr-cyrl-t-k0-und",
    Fd = "sr-latn-t-k0-und",
    Gd = "sr-t-i0-handwrit",
    C = "string",
    Hd = "su-t-i0-handwrit",
    Id = "sv-t-i0-handwrit",
    Jd = "sw-t-i0-handwrit",
    D = "ta",
    Kd = "ta-t-i0-handwrit",
    Ld = "ta-t-k0-itrans",
    Md = "ta-t-k0-ta99",
    Nd = "ta-t-k0-typewriter",
    Od = "ta-t-und-latn-k0-und",
    Pd = "te-t-i0-handwrit",
    Qd = "te-t-und-latn-k0-und",
    Rd = "tg-t-i0-handwrit",
    Sd = "th-t-i0-handwrit",
    Td = "th-t-k0-pattajoti",
    Ud = "th-t-k0-tis",
    Vd = "ti-t-i0-handwrit",
    Wd = "tr-t-i0-handwrit",
    Xd = "tr-t-k0-f-accents",
    Yd = "tr-t-k0-lagacy",
    Zd = "tr-t-k0-legacy",
    $d = "tr-t-k0-q-accents",
    ae = "tr-t-k0-und",
    be = "uk-t-i0-handwrit",
    ce = "uk-t-k0-101key",
    de = "und-ethi-t-k0-und",
    ee = "und-t-i0-handwrit",
    fe = "ur-t-i0-handwrit",
    E = "us_intl",
    ge = "uz-cyrl-t-k0-legacy",
    he = "uz-cyrl-t-k0-und",
    ie = "uz-latn-t-k0-und",
    je = "uz-t-i0-handwrit",
    ke = "vi-t-i0-handwrit",
    le = "vi-t-k0-legacy",
    me = "vi-t-k0-und",
    ne = "xh-t-i0-handwrit",
    oe = "yi-t-i0-handwrit",
    pe = "yo-ng-t-k0-und",
    qe = "yue-hant-t-i0-jyutping",
    re = "yue-hant-t-i0-und",
    se = "yue-hant-t-i0-yale",
    F = "zh-CN",
    G = "zh-HK",
    H = "zh-TW",
    te = "zh-hans-t-i0-handwrit",
    ue = "zh-hans-t-i0-voice",
    ve = "zh-hant-t-i0-cangjie-1982",
    we = "zh-hant-t-i0-handwrit",
    xe = "zh-hant-t-i0-pinyin",
    ye = "zh-hant-t-i0-und",
    ze = "zh-t-i0-handwrit",
    Ae = "zh-t-i0-pinyin",
    Be = "zh-t-i0-pinyin-x0-shuangpin-abc",
    Ce = "zh-t-i0-pinyin-x0-shuangpin-flypy",
    De = "zh-t-i0-pinyin-x0-shuangpin-jiajia",
    Ee = "zh-t-i0-pinyin-x0-shuangpin-ms",
    Fe = "zh-t-i0-pinyin-x0-shuangpin-ziguang",
    Ge = "zh-t-i0-pinyin-x0-shuangpin-ziranma",
    He = "zh-t-i0-wubi-1986",
    Ie = "zh-yue-t-i0-handwrit",
    Je = "zu-t-i0-handwrit",
    Ke = "\u02bb\u014clelo Hawai\u02bbi",
    Le = "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    Me = "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",
    Ne = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
    Oe = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)",
    Pe = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)",
    Qe = function (a) {
      a = [z == typeof globalThis && globalThis, a, z == typeof window && window, z == typeof self && self, z == typeof global && global];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    Te = function (a, b) {
      if (b)
        a: {
          var c = Re;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && null != b && Se(c, a, { configurable: !0, writable: !0, value: b });
        }
    },
    We = function (a, b) {
      a.prototype = Ue(b.prototype);
      a.prototype.constructor = a;
      if (Ve) Ve(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.A = b.prototype;
    },
    Xe = function (a) {
      var b = typeof a;
      b = b != z ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
      return "array" == b || (b == z && typeof a.length == Rc);
    },
    Ye = function (a) {
      var b = typeof a;
      return (b == z && null != a) || b == w;
    },
    Ze = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    $e = function (a, b, c) {
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
    af = function (a, b, c) {
      af = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ze : $e;
      return af.apply(null, arguments);
    },
    bf = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.A = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Hi = function (d, e, f) {
        for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
        return b.prototype[e].apply(d, g);
      };
    },
    cf = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, cf);
      else {
        var c = Error().stack;
        c && (this.stack = c);
      }
      a && (this.message = String(a));
      void 0 !== b && (this.cause = b);
    },
    df = function (a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
      cf.call(this, c + a[d]);
    },
    ff = function (a, b) {
      b = ef(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c;
    },
    gf = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    hf = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    J = function () {
      var a = I.navigator;
      return a && (a = a.userAgent) ? a : "";
    },
    kf = function (a) {
      return jf
        ? K
          ? K.brands.some(function (b) {
              return (b = b.brand) && -1 != b.indexOf(a);
            })
          : !1
        : !1;
    },
    L = function (a) {
      return -1 != J().indexOf(a);
    },
    M = function () {
      return jf ? !!K && 0 < K.brands.length : !1;
    },
    lf = function () {
      return M() ? !1 : L(na);
    },
    mf = function () {
      return M() ? !1 : L("Trident") || L("MSIE");
    },
    nf = function () {
      return M() ? kf(la) : L("Edg/");
    },
    of = function () {
      return L("Firefox") || L("FxiOS");
    },
    qf = function () {
      return (
        L("Safari") &&
        !(pf() || (M() ? 0 : L("Coast")) || lf() || (M() ? 0 : L(l)) || nf() || (M() ? kf(na) : L("OPR")) || of() || L(n) || L(ba))
      );
    },
    pf = function () {
      return M() ? kf("Chromium") : ((L("Chrome") || L("CriOS")) && !(M() ? 0 : L(l))) || L(n);
    },
    rf = function () {
      return L(ba) && !(pf() || of() || lf() || L(n));
    },
    sf = function (a) {
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
    tf = function (a) {
      var b = J();
      if (a === ja) {
        if (mf())
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
      b = sf(c);
      switch (a) {
        case na:
          if (lf()) return b(["Version", na]);
          if (M() ? kf(na) : L("OPR")) return b(["OPR"]);
          break;
        case la:
          if (M() ? 0 : L(l)) return b([l]);
          if (nf()) return b(["Edg"]);
          break;
        case "Chromium":
          if (pf()) return b(["Chrome", "CriOS", "HeadlessChrome"]);
      }
      return ("Firefox" === a && of()) || ("Safari" === a && qf()) || ("Android Browser" === a && rf()) || (a === n && L(n))
        ? ((b = c[2]) && b[1]) || ""
        : "";
    },
    uf = function () {
      return jf ? !!K && !!K.platform : !1;
    },
    vf = function () {
      return L("iPhone") && !L(Ib) && !L(x);
    },
    wf = function () {
      return uf() ? "macOS" === K.platform : L("Macintosh");
    },
    xf = function (a) {
      xf[" "](a);
      return a;
    },
    yf = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    zf = function (a, b) {
      for (var c in a) if (a[c] == b) return !0;
      return !1;
    },
    Cf = function (a, b) {
      this.g = (a === Af && b) || "";
      this.h = Bf;
    },
    N = function (a) {
      this.g = a;
    },
    Gf = function (a) {
      if (a instanceof N) return a;
      a = typeof a == z && a.l ? a.j() : String(a);
      Df.test(a) ? (a = new N(a, Ef)) : ((a = String(a).replace(/(%0A|%0D)/g, "")), (a = a.match(Ff) ? new N(a, Ef) : null));
      return a;
    },
    O = function (a) {
      this.g = a;
      this.l = !0;
    },
    Nf = function (a) {
      if (a instanceof N)
        return (
          'url("' +
          (a instanceof N && a.constructor === N ? a.g : "type_error:SafeUrl").replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") +
          '")'
        );
      if (a instanceof Cf) a = a instanceof Cf && a.constructor === Cf && a.h === Bf ? a.g : "type_error:Const";
      else {
        a = String(a);
        var b = a.replace(Hf, "$1").replace(Hf, "$1").replace(If, "url");
        if (Jf.test(b)) {
          if ((b = !Kf.test(a))) {
            for (var c = (b = !0), d = 0; d < a.length; d++) {
              var e = a.charAt(d);
              "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
            }
            b = b && c && Lf(a);
          }
          a = b ? Mf(a) : "zClosurez";
        } else a = "zClosurez";
      }
      if (/[{;}]/.test(a)) throw new df("Value does not allow [{;}], got: %s.", [a]);
      return a;
    },
    Lf = function (a) {
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
    Mf = function (a) {
      return a.replace(If, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (g, h, m) {
          f = h;
          return m;
        });
        b = (Gf(d) || Of).j();
        return c + f + b + f + e;
      });
    },
    Pf = function (a) {
      this.g = a;
      this.l = !0;
    },
    Tf = function (a, b) {
      if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " + a);
      var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(c))
        throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " + a);
      a: {
        for (var d = { "(": ")", "[": "]" }, e = [], f = 0; f < c.length; f++) {
          var g = c[f];
          if (d[g]) e.push(d[g]);
          else if (zf(d, g) && e.pop() != g) {
            c = !1;
            break a;
          }
        }
        c = 0 == e.length;
      }
      if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
      if (!(b instanceof O)) {
        c = "";
        for (var h in b)
          if (Object.prototype.hasOwnProperty.call(b, h)) {
            if (!/^[-_a-zA-Z0-9]+$/.test(h)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + h);
            d = b[h];
            null != d && ((d = Array.isArray(d) ? d.map(Nf).join(" ") : Nf(d)), (c += h + ":" + d + ";"));
          }
        b = c ? new O(c, Qf) : Rf;
      }
      a = a + "{" + (b instanceof O && b.constructor === O ? b.g : "type_error:SafeStyle").replace(/</g, "\\3C ") + "}";
      return new Pf(a, Sf);
    },
    Uf = function (a) {
      return a instanceof Pf && a.constructor === Pf ? a.g : "type_error:SafeStyleSheet";
    },
    Wf = function () {
      var a = I.document;
      return a.querySelector
        ? (a = a.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (a = a.nonce || a.getAttribute("nonce")) && Vf.test(a)
          ? a
          : ""
        : "";
    },
    Zf = function (a) {
      return a ? new P(Xf(a)) : Yf || (Yf = new P());
    },
    $f = function (a) {
      var b = document;
      return typeof a === C ? b.getElementById(a) : a;
    },
    bg = function (a, b) {
      yf(b, function (c, d) {
        c && typeof c == z && c.l && (c = c.j());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : ag.hasOwnProperty(d)
          ? a.setAttribute(ag[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    dg = function (a, b, c) {
      return cg(document, arguments);
    },
    cg = function (a, b) {
      var c = b[1];
      var d = String(b[0]);
      d = String(d);
      "application/xhtml+xml" === a.contentType && (d = d.toLowerCase());
      d = a.createElement(d);
      c && (typeof c === C ? (d.className = c) : Array.isArray(c) ? (d.className = c.join(" ")) : bg(d, c));
      2 < b.length && eg(a, d, b, 2);
      return d;
    },
    eg = function (a, b, c, d) {
      function e(h) {
        h && b.appendChild(typeof h === C ? a.createTextNode(h) : h);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Xe(f) || (Ye(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && typeof f.length == Rc) {
              if (Ye(f)) {
                var g = typeof f.item == w || typeof f.item == C;
                break a;
              }
              if (typeof f === w) {
                g = typeof f.item == w;
                break a;
              }
            }
            g = !1;
          }
          Q(g ? gf(f) : f, e);
        }
      }
    },
    Xf = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    P = function (a) {
      this.h = a || I.document || document;
    },
    fg = function (a, b) {
      a = a.h;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      a.querySelectorAll && a.querySelector && b ? (b = a.querySelectorAll(b + "")) : (b = a.getElementsByTagName(b || "*"));
      return b;
    },
    gg = function () {},
    hg = function (a, b) {
      this.type = a;
      this.target = b;
      this.defaultPrevented = !1;
    },
    kg = function (a) {
      hg.call(this, a ? a.type : "");
      this.relatedTarget = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.pointerId = 0;
      this.pointerType = "";
      this.h = null;
      if (a) {
        var b = (this.type = a.type),
          c = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        var d = a.relatedTarget;
        if (d) {
          if (ig) {
            a: {
              try {
                xf(d.nodeName);
                var e = !0;
                break a;
              } catch (f) {}
              e = !1;
            }
            e || (d = null);
          }
        } else "mouseover" == b ? (d = a.fromElement) : "mouseout" == b && (d = a.toElement);
        this.relatedTarget = d;
        c
          ? ((this.clientX = void 0 !== c.clientX ? c.clientX : c.pageX),
            (this.clientY = void 0 !== c.clientY ? c.clientY : c.pageY),
            (this.screenX = c.screenX || 0),
            (this.screenY = c.screenY || 0))
          : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
            (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
            (this.screenX = a.screenX || 0),
            (this.screenY = a.screenY || 0));
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === C ? a.pointerType : jg[a.pointerType] || "";
        this.state = a.state;
        this.h = a;
        a.defaultPrevented && kg.A.g.call(this);
      }
    },
    mg = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.g = e;
      this.key = ++lg;
      this.removed = this.s = !1;
    },
    ng = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.g = null;
    },
    og = function (a) {
      this.src = a;
      this.g = {};
      this.h = 0;
    },
    pg = function (a, b) {
      var c = b.type;
      c in a.g && ff(a.g[c], b) && (ng(b), 0 == a.g[c].length && (delete a.g[c], a.h--));
    },
    qg = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.listener == b && f.capture == !!c && f.g == d) return e;
      }
      return -1;
    },
    R = function (a, b, c, d, e) {
      if (d && d.once) rg(a, b, c, d, e);
      else if (Array.isArray(b)) for (var f = 0; f < b.length; f++) R(a, b[f], c, d, e);
      else (c = sg(c)), a && a[tg] ? a.listen(b, c, Ye(d) ? !!d.capture : !!d, e) : ug(a, b, c, !1, d, e);
    },
    ug = function (a, b, c, d, e, f) {
      if (!b) throw Error("Invalid event type");
      var g = Ye(e) ? !!e.capture : !!e,
        h = vg(a);
      h || (a[wg] = h = new og(a));
      c = h.add(b, c, d, g, f);
      if (!c.proxy) {
        d = xg();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) yg || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent) a.attachEvent(zg(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        Ag++;
      }
    },
    xg = function () {
      function a(c) {
        return b.call(a.src, a.listener, c);
      }
      var b = Bg;
      return a;
    },
    rg = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) rg(a, b[f], c, d, e);
      else (c = sg(c)), a && a[tg] ? a.g.add(String(b), c, !0, Ye(d) ? !!d.capture : !!d, e) : ug(a, b, c, !0, d, e);
    },
    Cg = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Cg(a, b[f], c, d, e);
      else
        ((d = Ye(d) ? !!d.capture : !!d), (c = sg(c)), a && a[tg])
          ? a.g.remove(String(b), c, d, e)
          : a && (a = vg(a)) && ((b = a.g[b.toString()]), (a = -1), b && (a = qg(b, c, d, e)), (c = -1 < a ? b[a] : null) && Dg(c));
    },
    Dg = function (a) {
      if (typeof a !== Rc && a && !a.removed) {
        var b = a.src;
        if (b && b[tg]) pg(b.g, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(zg(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          Ag--;
          (c = vg(b)) ? (pg(c, a), 0 == c.h && ((c.src = null), (b[wg] = null))) : ng(a);
        }
      }
    },
    zg = function (a) {
      return a in Eg ? Eg[a] : (Eg[a] = "on" + a);
    },
    Bg = function (a, b) {
      if (a.removed) a = !0;
      else {
        b = new kg(b, this);
        var c = a.listener,
          d = a.g || a.src;
        a.s && Dg(a);
        a = c.call(d, b);
      }
      return a;
    },
    vg = function (a) {
      a = a[wg];
      return a instanceof og ? a : null;
    },
    sg = function (a) {
      if (typeof a === w) return a;
      a[Fg] ||
        (a[Fg] = function (b) {
          return a.handleEvent(b);
        });
      return a[Fg];
    },
    Gg = function () {
      this.g = new og(this);
    },
    S = function (a) {
      return Array.prototype.slice.call(a);
    },
    Hg = function (a) {
      var b = T(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = S(a)), U(a, b | 1));
    },
    Jg = function (a) {
      Ig(a, 1);
      return a;
    },
    Kg = function (a, b) {
      U(b, (a | 0) & -255);
    },
    Lg = function (a, b) {
      U(b, (a | 34) & -221);
    },
    Mg = function (a) {
      a = (a >> 11) & 1023;
      return 0 === a ? 536870912 : a;
    },
    Ng = function (a) {
      return null !== a && typeof a === z && !Array.isArray(a) && a.constructor === Object;
    },
    Og = function (a) {
      return a;
    },
    Pg = function (a) {
      if (null == a) return a;
      if (typeof a === C) {
        if (!a) return;
        a = +a;
      }
      if (typeof a === Rc) return a;
    },
    Qg = function (a) {
      return null == a || typeof a === C ? a : void 0;
    },
    Tg = function (a, b, c) {
      null == a && (a = Rg);
      Rg = void 0;
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
            if (Ng(g)) {
              d |= 256;
              b = +!!(d & 512) - 1;
              e = f - b;
              1024 <= e && (Sg(c, b, g), (e = 1023));
              d = (d & -2095105) | ((e & 1023) << 11);
              break a;
            }
          }
          b &&
            ((g = +!!(d & 512) - 1),
            (b = Math.max(b, e - g)),
            1024 < b && (Sg(c, g, {}), (d |= 256), (b = 1023)),
            (d = (d & -2095105) | ((b & 1023) << 11)));
        }
      }
      U(a, d);
      return a;
    },
    Sg = function (a, b, c) {
      for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
        var g = a[f];
        null != g && g !== c && (c[f - b] = g);
      }
      a.length = d + 1;
      a[d] = c;
    },
    Yg = function (a) {
      switch (typeof a) {
        case Rc:
          return isFinite(a) ? a : String(a);
        case "boolean":
          return a ? 1 : 0;
        case z:
          if (a && !Array.isArray(a) && Ug && null != a && a instanceof Uint8Array) {
            if (Vg) {
              for (var b = "", c = 0, d = a.length - 10240; c < d; ) b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else {
              void 0 === b && (b = 0);
              if (!Wg) {
                Wg = {};
                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                d = ["+/=", "+/", "-_=", "-_.", "-_"];
                for (var e = 0; 5 > e; e++) {
                  var f = c.concat(d[e].split(""));
                  Xg[e] = f;
                  for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Wg[h] && (Wg[h] = g);
                  }
                }
              }
              b = Xg[b];
              c = Array(Math.floor(a.length / 3));
              d = b[64] || "";
              for (e = f = 0; f < a.length - 2; f += 3) {
                var m = a[f],
                  q = a[f + 1];
                h = a[f + 2];
                g = b[m >> 2];
                m = b[((m & 3) << 4) | (q >> 4)];
                q = b[((q & 15) << 2) | (h >> 6)];
                h = b[h & 63];
                c[e++] = "" + g + m + q + h;
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
    Zg = function (a, b, c) {
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
    ah = function (a, b, c, d, e, f) {
      if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && T(a) & 1 ? void 0 : f && T(a) & 2 ? a : $g(a, b, c, void 0 !== d, e, f);
        else if (Ng(a)) {
          var g = {},
            h;
          for (h in a) g[h] = ah(a[h], b, c, d, e, f);
          a = g;
        } else a = b(a, d);
        return a;
      }
    },
    $g = function (a, b, c, d, e, f) {
      var g = d || c ? T(a) : 0;
      d = d ? !!(g & 32) : void 0;
      a = S(a);
      for (var h = 0; h < a.length; h++) a[h] = ah(a[h], b, c, d, e, f);
      c && c(g, a);
      return a;
    },
    ch = function (a) {
      return a.v === bh ? a.toJSON() : Yg(a);
    },
    dh = function (a, b, c) {
      c = void 0 === c ? Lg : c;
      if (null != a) {
        if (Ug && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
          var d = T(a);
          return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? $g(a, dh, d & 4 ? Lg : c, !0, !1, !0) : (U(a, d | 34), a);
        }
        a.v === bh && ((b = a.i), (c = W(b)), (a = c & 2 ? a : eh(a, b, c, !0)));
        return a;
      }
    },
    eh = function (a, b, c, d) {
      a = a.constructor;
      Rg = b = fh(b, c, d);
      b = new a(b);
      Rg = void 0;
      return b;
    },
    fh = function (a, b, c) {
      var d = c || b & 2 ? Lg : Kg,
        e = !!(b & 32);
      a = Zg(a, b, function (f) {
        return dh(f, e, d);
      });
      Ig(a, 32 | (c ? 2 : 0));
      return a;
    },
    hh = function (a, b) {
      a = a.i;
      return gh(a, W(a), b);
    },
    gh = function (a, b, c) {
      if (-1 === c) return null;
      if (c >= Mg(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else if (((b = c + (+!!(b & 512) - 1)), b < a.length)) return a[b];
    },
    ih = function (a, b, c, d) {
      var e = Mg(b);
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
    kh = function (a, b, c) {
      var d = b & 2;
      a = gh(a, b, c);
      Array.isArray(a) || (a = X);
      b = T(a);
      b & 1 || Jg(a);
      d ? b & 2 || Ig(a, 34) : b & 32 && !(b & 2) && jh(a, 32);
      return a;
    },
    lh = function (a, b, c) {
      a = a.i;
      var d = W(a),
        e = d & 2,
        f = kh(a, d, b),
        g = T(f);
      if (!(g & 4)) {
        Object.isFrozen(f) && ((g = 0), (f = S(f)), ih(a, d, b, f));
        for (var h = 0, m = 0; h < f.length; h++) {
          var q = c(f[h]);
          null != q && (f[m++] = q);
        }
        m < h && (f.length = m);
        g |= 5;
        e && (g |= 34);
        U(f, g);
        g & 2 && Object.freeze(f);
      }
      !e && (g & 2 || Object.isFrozen(f)) && ((f = S(f)), Ig(f, 5), ih(a, d, b, f));
      return f;
    },
    nh = function (a) {
      var b = a.i,
        c = W(b);
      a = !!(c & 2);
      var d = a ? 1 : 2,
        e = mh,
        f = !!(c & 2),
        g = kh(b, c, 3);
      if (g !== X && T(g) & 4)
        3 !== d &&
          (f
            ? 2 === d && ((d = T(g)), (g = S(g)), U(g, d), ih(b, c, 3, g))
            : ((f = Object.isFrozen(g)),
              1 === d
                ? f || Object.freeze(g)
                : ((d = T(g)), (e = d & -35), f && ((g = S(g)), (d = 0), ih(b, c, 3, g)), d !== e && U(g, e)))),
          (b = g);
      else {
        var h = g;
        g = !!(c & 2);
        var m = !!(T(h) & 2);
        f = h;
        !g && m && (h = S(h));
        var q = c | (m ? 2 : 0);
        m = m || void 0;
        for (var u = 0, ha = 0; u < h.length; u++) {
          var p = h[u];
          var eb = e,
            ya = !1;
          if (null == p || typeof p !== z || (ya = Array.isArray(p)) || p.v !== bh)
            if (ya) {
              var V = (ya = T(p));
              0 === V && (V |= q & 32);
              V |= q & 2;
              V !== ya && U(p, V);
              p = new eb(p);
            } else p = void 0;
          void 0 !== p && ((m = m || W(p.i) & 2), (h[ha++] = p));
        }
        ha < u && (h.length = ha);
        e = h;
        h = T(e);
        q = h | 5;
        m = m ? q & -9 : q | 8;
        h != m && (Object.isFrozen(e) && (e = S(e)), U(e, m));
        h = e;
        f !== h && ih(b, c, 3, h);
        ((g && 2 !== d) || 1 === d) && Object.freeze(h);
        b = h;
      }
      if (!(a || T(b) & 8)) {
        for (a = 0; a < b.length; a++) (c = b[a]), (d = c.i), (g = W(d)), (d = g & 2 ? eh(c, d, g, !1) : c), c !== d && (b[a] = d);
        Ig(b, 8);
      }
      return b;
    },
    oh = function (a, b) {
      return null != a ? a : b;
    },
    ph = function (a) {
      var b = -1;
      b = void 0 === b ? 0 : b;
      a = Pg(hh(a, 5));
      return oh(a, b);
    },
    qh = function (a, b, c) {
      this.i = Tg(a, b, c);
    },
    rh = function (a, b, c) {
      var d = a.constructor.G,
        e = Mg(W(c ? a.i : b)),
        f = !1;
      if (d) {
        if (!c) {
          b = S(b);
          var g;
          if (b.length && Ng((g = b[b.length - 1])))
            for (f = 0; f < d.length; f++)
              if (d[f] >= e) {
                Object.assign((b[b.length - 1] = {}), g);
                break;
              }
          f = !0;
        }
        e = b;
        c = !c;
        g = W(a.i);
        a = Mg(g);
        g = +!!(g & 512) - 1;
        for (var h, m, q = 0; q < d.length; q++)
          if (((m = d[q]), m < a)) {
            m += g;
            var u = e[m];
            null == u ? (e[m] = c ? X : Jg([])) : c && u !== X && Hg(u);
          } else
            h || ((u = void 0), e.length && Ng((u = e[e.length - 1])) ? (h = u) : e.push((h = {}))),
              (u = h[m]),
              null == h[m] ? (h[m] = c ? X : Jg([])) : c && u !== X && Hg(u);
      }
      d = b.length;
      if (!d) return b;
      var ha;
      if (Ng((h = b[d - 1]))) {
        a: {
          var p = h;
          e = {};
          c = !1;
          for (var eb in p) (a = p[eb]), Array.isArray(a) && a != a && (c = !0), null != a ? (e[eb] = a) : (c = !0);
          if (c) {
            for (var ya in e) {
              p = e;
              break a;
            }
            p = null;
          }
        }
        p != h && (ha = !0);
        d--;
      }
      for (; 0 < d; d--) {
        h = b[d - 1];
        if (null != h) break;
        var V = !0;
      }
      if (!ha && !V) return b;
      var qc;
      f ? (qc = b) : (qc = Array.prototype.slice.call(b, 0, d));
      b = qc;
      f && (b.length = d);
      p && b.push(p);
      return b;
    },
    mh = function (a) {
      this.i = Tg(a);
    },
    sh = function (a) {
      this.i = Tg(a);
    },
    vh = function (a, b) {
      b = Zf(b);
      var c = b.h;
      if (th && c.createStyleSheet) (b = c.createStyleSheet()), uh(b, a);
      else {
        c = fg(b, "HEAD")[0];
        if (!c) {
          var d = fg(b, "BODY")[0];
          c = b.g("HEAD");
          d.parentNode.insertBefore(c, d);
        }
        d = b.g("STYLE");
        var e;
        (e = Wf()) && d.setAttribute("nonce", e);
        uh(d, a);
        b.o(c, d);
      }
    },
    uh = function (a, b) {
      b = Uf(b);
      if (th && void 0 !== a.cssText) a.cssText = b;
      else if (I.trustedTypes)
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
          for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
          a.firstChild.data = String(b);
        } else {
          for (var c; (c = a.firstChild); ) a.removeChild(c);
          a.appendChild(Xf(a).createTextNode(String(b)));
        }
      else a.innerHTML = b;
    },
    wh = function (a) {
      return Uf(a);
    },
    yh = function () {
      var a = [],
        b = 0;
      yf(xh, function (d) {
        d = ph(d);
        d > b && (b = d);
      });
      for (var c = 0; c <= b; c++)
        a.push(Tf(".ita-icon-" + c, { "background-position": -((c % 10) * 50 + 14) + "px " + -(50 * Math.floor(c / 10) + 17) + "px" }));
      return new Pf(a.map(wh).join(""), Sf);
    },
    zh = function (a) {
      return typeof a.className == C ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    Ah = function (a, b) {
      if (a.classList) a.classList.add(b);
      else {
        if (a.classList) var c = !a.classList.contains(b);
        else (c = a.classList ? a.classList : zh(a).match(/\S+/g) || []), (c = !(0 <= ef(c, b)));
        c &&
          ((c = zh(a)),
          (b = c + (0 < c.length ? " " + b : b)),
          typeof a.className == C ? (a.className = b) : a.setAttribute && a.setAttribute("class", b));
      }
    },
    Bh = function () {},
    Gh = function (a, b) {
      var c = Zf(),
        d = c.g("LI", { class: Ob, style: 'style="-webkit-user-select: none; "' }),
        e = c.g("SPAN", Nb),
        f = c.g;
      Ch.ita_icon_style || ((Ch.ita_icon_style = !0), vh(yh(), Dh.body));
      var g = xh[a];
      (g = "ita-icon-" + (g ? ph(g) : 0)) && (g = "ita-kd-img " + g);
      f = f.call(c, "SPAN", "ita-kd-menuitem-inputtool-icon ita-kd-menuitem-span " + (g || ""));
      c.m(d, e, f);
      e = Eh.test(a) ? "rtl" : "ltr";
      c.o(d, dg("SPAN", { class: "ita-kd-menuitem-inputtool-name", dir: e }, Fh[a]));
      a = document.body;
      a: {
        c = Xf(a);
        if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
          c = c.direction || c.getPropertyValue("direction") || "";
          break a;
        }
        c = "";
      }
      "rtl" == (c || (a.currentStyle ? a.currentStyle.direction : null) || (a.style && a.style.direction)) && Ah(d, "ita-kd-rtl");
      b && Ah(d, "ita-kd-selected");
      return d;
    },
    Hh = function (a) {
      var b = Zf(),
        c = dg("LI", Ob),
        d = b.g("SPAN", Nb);
      a = b.g("SPAN", void 0, a);
      b.m(c, d, a);
      return c;
    },
    Ih = function (a) {
      return dg("DIV", { class: "chext-popup-menu", id: a });
    },
    Jh = function (a) {
      return (a = a.exec(J())) ? a[1] : "";
    },
    Nh = function (a) {
      this.code = a;
      this.type = null;
      0 <= this.code.indexOf("-i0")
        ? ((this.type = "im"), hf(this.code, "-handwrit") ? (this.type = "hw") : hf(this.code, "-voice") && (this.type = "vo"))
        : 0 <= this.code.indexOf("-k0")
        ? (this.type = "vkd")
        : 0 == this.code.lastIndexOf("xkb", 0) && (this.type = "xkb");
      a = this.code.split(/-t|-i0|-k0|:/);
      "yue-hant" === a[0] && (a[0] = G);
      switch (this.code) {
        case re:
          a[0] = G;
          break;
        case Ae:
        case He:
          a[0] = "zh-Hans";
      }
      if ("vkd" === this.type && !Kh[this.code] && !Lh[this.code]) {
        var b = this.code.split("-t-");
        a = b[0];
        b = b[1];
        a = a.replace(/-/g, "_");
        "en_us" === a && (a = "us");
        (0 <= ef(Mh, a) && ("und-latn-k0-und" === b || "k0-und" === b)) ||
          "k0-und" === b ||
          ((a = b.match(/k0-(.*)/)), a[1] && a[1].replace("qwerty", "phone").replace("-", "_"));
      }
    },
    Rh = function (a) {
      if (!a) return null;
      if ("nacl_mozc_jp" === a || "nacl_mozc_us" === a) a = Wb;
      0 != a.lastIndexOf("xkb", 0) && (zf(Oh, a) || (a = Ph(a)), (a = a.replace(/_/g, "-")), zf(Oh, a) || (a = Ph(a + "-und")));
      return Qh[a] ? Qh[a] : zf(Oh, a) ? ((Qh[a] = new Nh(a)), Qh[a]) : null;
    },
    Ph = function (a) {
      if (Sh[a]) return Sh[a];
      if ("vkd_iw" === a) return xb;
      if ("im_t13n_iw" === a) return wb;
      if (a === Yd) return Zd;
      var b = a.split("_"),
        c = "";
      0 == a.lastIndexOf("im_t13n", 0)
        ? (c = b[2] + "-t-i0-und")
        : 0 == a.lastIndexOf("vkd_", 0) &&
          (2 === b.length
            ? (c = b[1] + aa)
            : 0 <= ef(Mh, b[1])
            ? (c = "inscript" === b[2] ? b[1] + aa : b[1] + "-t-und-latn-k0-und")
            : ((c = b[1] + "-t-k0-" + b[2]), zf(Oh, c) || (c = b[1] + "-" + b[2] + aa)));
      return zf(Oh, c) ? c : a;
    },
    Vh = function (a) {
      a = Th(a);
      var b = [];
      (a = Uh[a]) &&
        Q(a, function (c) {
          var d = lh(c, 6, Og);
          0 <= ef(d, 15) || b.push(Qg(hh(c, 2)));
        });
      return b;
    },
    Th = function (a) {
      a = a.replace(/_/g, "-").toLowerCase();
      if (0 == a.indexOf("zh-tw")) return "zh-Hant";
      if (0 == a.indexOf("zh-hk")) return G;
      if ("zh" == a || 0 == a.indexOf("zh-cn")) return "zh-Hans";
      if ("pt" == a) return A;
      var b = a.split(/[\-]/g),
        c = "";
      a = b[0];
      "iw" == a && (a = "he");
      Uh[a] && (c = a);
      for (var d = 1; d < b.length; d++) {
        var e = b[d];
        2 == e.length ? (e = e.toUpperCase()) : 4 == e.length && (e = e.charAt(0).toUpperCase() + e.slice(1));
        a += "-" + e;
        Uh[a] && (c = a);
      }
      return c;
    },
    Y = function () {
      this.g = Wh;
      this.get(0) || Xh(this);
      this.get(20) || (this.set(4, !0), this.set(5, !0), this.set(6, !0), this.set(7, !1), this.set(9, !0), this.set(20, !0));
      this.get(28) || this.set(28, 1);
    },
    Yh = function (a) {
      a = a.get(2);
      var b = [];
      Q(a, function (c) {
        (c = Rh(c)) && b.push(c.code);
      });
      return b;
    },
    Zh = function (a) {
      var b = [1, 2, 3, 5, 4, 6, 7, 10, 29, 9, 8],
        c = {};
      b &&
        Q(
          b,
          function (d) {
            c[d] = this.get(d);
          },
          a
        );
      return c;
    },
    $h = function (a) {
      a &&
        yf(a, function (b, c) {
          localStorage[String(c)] = JSON.stringify(b);
        });
    },
    Xh = function (a) {
      a.set(1, localStorage.getItem(a.g.B));
      var b = localStorage.getItem(a.g.C),
        c = [];
      b && (c = b.split(","));
      a.set(2, c);
      b = a.get(a.g.D);
      yf(
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
    ci = function () {
      ai || (ai = new Bh());
      var a = "u";
      Y.u && Y.hasOwnProperty(a) ? (a = Y.u) : ((a = new Y()), (Y.u = a));
      this.g = a;
      bi(this);
    },
    bi = function (a) {
      Eh.test(window.navigator.language) && ((document.body.dir = "rtl"), vh(Tf(".ita-kd-menuitem", { padding: "6px 8px 6px 38px" })));
      var b = Yh(a.g),
        c = a.g.get(1),
        d = a.g.get(3),
        e = $f(Ha);
      if (b && 0 < b.length) {
        var f = Ih("inputtools_menu_div");
        Q(
          b,
          function (g) {
            var h = d && c == g,
              m = Gh(g, h);
            R(m, t, af(this.h, this, g, !h));
            f.appendChild(m);
          },
          a
        );
        e.appendChild(f);
      }
      b = $f("extension_div");
      c &&
        d &&
        ((e = Hh(chrome.i18n.getMessage("inputtool_turnoff"))),
        R(e, t, af(a.h, a, c, !1)),
        b.appendChild(e),
        (e = Rh(c)) &&
          "vkd" == e.type &&
          ((e = ""),
          (e = a.g.get(7)
            ? chrome.i18n.getMessage("inputtool_hide_virtual_keyboard")
            : chrome.i18n.getMessage("inputtool_show_virtual_keyboard")),
          (e = Hh(e)),
          R(e, t, a.F, !1, a),
          b.appendChild(e)));
      e = Hh(chrome.i18n.getMessage("inputtool_extension_options"));
      R(e, t, function () {
        chrome.tabs.create({ url: "options.html" });
      });
      b.appendChild(e);
      e = Hh(chrome.i18n.getMessage("inputtool_shortcut_option"));
      R(e, t, function () {
        chrome.tabs.create({ url: "chrome://extensions/configureCommands" });
      });
      b.appendChild(e);
      chrome.tabs.detectLanguage(af(a.o, a));
    },
    Se =
      typeof Object.defineProperties == w
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    Re = Qe(this),
    Ue =
      typeof Object.create == w
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    di;
  if (typeof Object.setPrototypeOf == w) di = Object.setPrototypeOf;
  else {
    var ei;
    a: {
      var fi = { a: !0 },
        gi = {};
      try {
        gi.__proto__ = fi;
        ei = gi.a;
        break a;
      } catch (a) {}
      ei = !1;
    }
    di = ei
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var Ve = di,
    hi =
      typeof Object.assign == w
        ? Object.assign
        : function (a, b) {
            for (var c = 1; c < arguments.length; c++) {
              var d = arguments[c];
              if (d) for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
            }
            return a;
          };
  Te("Object.assign", function (a) {
    return a || hi;
  });
  Te("Array.prototype.find", function (a) {
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
  var I = this || self;
  bf(cf, Error);
  cf.prototype.name = "CustomError";
  var Yf;
  bf(df, cf);
  df.prototype.name = "AssertionError";
  var ef = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if (typeof a === C) return typeof b !== C || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    Q = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = typeof a === C ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
        };
  var jf, ii;
  a: {
    for (var ji = ["CLOSURE_FLAGS"], ki = I, li = 0; li < ji.length; li++)
      if (((ki = ki[ji[li]]), null == ki)) {
        ii = null;
        break a;
      }
    ii = ki;
  }
  var mi = ii && ii[610401301];
  jf = null != mi ? mi : !1;
  var K,
    ni = I.navigator;
  K = ni ? ni.userAgentData || null : null;
  xf[" "] = function () {};
  var oi = lf(),
    th = mf(),
    pi = L(l),
    ig = L("Gecko") && !(-1 != J().toLowerCase().indexOf("webkit") && !L(l)) && !(L("Trident") || L("MSIE")) && !L(l),
    qi = -1 != J().toLowerCase().indexOf("webkit") && !L(l),
    ri = wf(),
    si = uf() ? "Windows" === K.platform : L("Windows"),
    ti = uf() ? K.platform === ba : L(ba),
    ui = vf(),
    vi = L(x),
    wi = L(Ib),
    xi;
  a: {
    var yi = "",
      zi = (function () {
        var a = J();
        if (ig) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (pi) return /Edge\/([\d\.]+)/.exec(a);
        if (th) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (qi) return /WebKit\/(\S+)/.exec(a);
        if (oi) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    zi && (yi = zi ? zi[1] : "");
    if (th) {
      var Ai,
        Bi = I.document;
      Ai = Bi ? Bi.documentMode : void 0;
      if (null != Ai && Ai > parseFloat(yi)) {
        xi = String(Ai);
        break a;
      }
    }
    xi = yi;
  }
  var Ci = xi;
  Cf.prototype.l = !0;
  Cf.prototype.j = function () {
    return this.g;
  };
  var Bf = {},
    Af = {};
  N.prototype.toString = function () {
    return this.g.toString();
  };
  N.prototype.l = !0;
  N.prototype.j = function () {
    return this.g.toString();
  };
  var Ff = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    Df = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    Ef = {},
    Of = new N("about:invalid#zClosurez", Ef);
  var Qf = {};
  O.prototype.j = function () {
    return this.g;
  };
  O.prototype.toString = function () {
    return this.g.toString();
  };
  var Rf = new O("", Qf),
    Jf = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    If = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    Hf = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
      "g"
    ),
    Kf = /\/\*/;
  var Sf = {};
  Pf.prototype.toString = function () {
    return this.g.toString();
  };
  Pf.prototype.j = function () {
    return this.g;
  };
  var Vf = /^[\w+/_-]+[=]{0,2}$/;
  var ag = {
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
  P.prototype.setProperties = bg;
  P.prototype.g = function (a, b, c) {
    return cg(this.h, arguments);
  };
  P.prototype.o = function (a, b) {
    a.appendChild(b);
  };
  P.prototype.m = function (a, b) {
    eg(Xf(a), a, arguments, 1);
  };
  P.prototype.getChildren = function (a) {
    return void 0 != a.children
      ? a.children
      : Array.prototype.filter.call(a.childNodes, function (b) {
          return 1 == b.nodeType;
        });
  };
  P.prototype.contains = function (a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b; ) b = b.parentNode;
    return b == a;
  };
  hg.prototype.g = function () {
    this.defaultPrevented = !0;
  };
  var yg = (function () {
    if (!I.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
      b = Object.defineProperty({}, "passive", {
        get: function () {
          a = !0;
        }
      });
    try {
      var c = function () {};
      I.addEventListener("test", c, b);
      I.removeEventListener("test", c, b);
    } catch (d) {}
    return a;
  })();
  bf(kg, hg);
  var jg = { 2: "touch", 3: "pen", 4: "mouse" };
  kg.prototype.g = function () {
    kg.A.g.call(this);
    var a = this.h;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var tg = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var lg = 0;
  og.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || ((a = this.g[f] = []), this.h++);
    var g = qg(a, b, d, e);
    -1 < g ? ((b = a[g]), c || (b.s = !1)) : ((b = new mg(b, this.src, f, !!d, e)), (b.s = c), a.push(b));
    return b;
  };
  og.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.g)) return !1;
    var e = this.g[a];
    b = qg(e, b, c, d);
    return -1 < b ? (ng(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.g[a], this.h--), !0) : !1;
  };
  og.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.g)
      if (!a || c == a) {
        for (var d = this.g[c], e = 0; e < d.length; e++) ++b, ng(d[e]);
        delete this.g[c];
        this.h--;
      }
    return b;
  };
  var wg = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Eg = {},
    Ag = 0,
    Fg = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  bf(Gg, gg);
  Gg.prototype[tg] = !0;
  Gg.prototype.removeEventListener = function (a, b, c, d) {
    Cg(this, a, b, c, d);
  };
  Gg.prototype.listen = function (a, b, c, d) {
    return this.g.add(String(a), b, !1, c, d);
  };
  var Dh = window.document,
    Ch = window;
  Zf(window.document);
  new Gg();
  var Di = of(),
    Ei = vf() || L(Ib),
    Fi = L(x),
    Gi = rf(),
    Hi = pf(),
    Ii = qf() && !(vf() || L(x) || L(Ib));
  var Xg = {},
    Wg = null;
  var Ug = "undefined" !== typeof Uint8Array,
    Vg = !th && typeof btoa === w;
  var Z = typeof Symbol === w && "symbol" === typeof Symbol() ? Symbol() : void 0,
    Ig = Z
      ? function (a, b) {
          a[Z] |= b;
        }
      : function (a, b) {
          void 0 !== a.g ? (a.g |= b) : Object.defineProperties(a, { g: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        },
    jh = Z
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
    W = Z
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
  var bh = {},
    X,
    Ji = [];
  U(Ji, 39);
  X = Object.freeze(Ji);
  var Rg;
  qh.prototype.toJSON = function () {
    var a = $g(this.i, ch, void 0, void 0, !1, !1);
    return rh(this, a, !0);
  };
  qh.prototype.v = bh;
  qh.prototype.toString = function () {
    return rh(this, this.i, !1).toString();
  };
  We(mh, qh);
  We(sh, qh);
  sh.G = [3, 4, 6, 7];
  var xh = {},
    Fh = {},
    Uh = {};
  Q(
    [
      [1, "am-t-i0-und", [["am", "\u12a0\u121b\u122d\u129b"]], ["am"], 16, null, ["im_t13n_am"]],
      [2, "ar-t-i0-und", [["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]], ["ar"], 2, null, ["im_t13n_ar"]],
      [3, "bn-t-i0-und", [["bn", "\u09ac\u09be\u0982\u09b2\u09be"]], ["bn"], 3, null, ["im_t13n_bn"]],
      [4, Ae, [[F, "\u62fc\u97f3"]], [F], 29, null, ["im_pinyin_zh_hans"]],
      [49, Be, [[F, "\u53cc\u62fc\uff08\u667a\u80fdABC\uff09"]], [F], 44, [18]],
      [50, Ee, [[F, "\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09"]], [F], 44, [18]],
      [51, Ce, [[F, "\u53cc\u62fc\uff08\u5c0f\u9e64\uff09"]], [F], 44, [18]],
      [52, De, [[F, "\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09"]], [F], 44, [18]],
      [53, Fe, [[F, "\u53cc\u62fc\uff08\u7d2b\u5149\uff09"]], [F], 44, [18]],
      [54, Ge, [[F, "\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09"]], [F], 44, [18]],
      [6, "el-t-i0-und", [["el", Le]], ["el"], 23, null, ["im_t13n_el"]],
      [7, "gu-t-i0-und", [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]], ["gu"], 4, null, ["im_t13n_gu"]],
      [8, "hi-t-i0-und", [["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]], ["hi"], 5, null, ["im_t13n_hi"]],
      [9, wb, [["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]], ["he"], 20, null, ["im_t13n_he", "im_t13n_iw"]],
      [33, "ja-t-i0", [["ja", "\u65e5\u672c\u8a9e"]], null, 28],
      [10, Wb, [["ja", "\u65e5\u672c\u8a9e"]], ["ja"], 28, null, ["im_t13n_ja"]],
      [11, "kn-t-i0-und", [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]], ["kn"], 6, null, ["im_t13n_kn"]],
      [12, "ml-t-i0-und", [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]], ["ml"], 7, null, ["im_t13n_ml"]],
      [13, "mr-t-i0-und", [["mr", "\u092e\u0930\u093e\u0920\u0940"]], ["mr"], 9, null, ["im_t13n_mr"]],
      [14, "ne-t-i0-und", [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]], ["ne"], 8, null, ["im_t13n_ne"]],
      [15, "or-t-i0-und", [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]], ["or"], 19, null, ["im_t13n_or"]],
      [16, "fa-t-i0-und", [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 14, null, ["im_t13n_fa"]],
      [17, "pa-t-i0-und", [["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]], ["pa"], 10, null, ["im_t13n_pa"]],
      [46, "pl-t-i0-und", [["pl", oa]], null, 37, null, ["im_t13n_pl"]],
      [18, "ru-t-i0-und", [["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]], ["ru"], 24, null, ["im_t13n_ru"]],
      [19, "sa-t-i0-und", [["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"]], ["sa"], 15, null, ["im_t13n_sa"]],
      [20, "sr-t-i0-und", [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 22, null, ["im_t13n_sr"]],
      [21, "si-t-i0-und", [["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]], ["si"], 18, null, ["im_t13n_si"]],
      [22, "ta-t-i0-und", [[D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]], [D], 11, null, ["im_t13n_ta"]],
      [23, "te-t-i0-und", [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]], ["te"], 12, null, ["im_t13n_te"]],
      [24, "ti-t-i0-und", [["ti", "\u1275\u130d\u122d\u129b"]], ["ti"], 17, null, ["im_t13n_ti"]],
      [25, "ur-t-i0-und", [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 13, null, ["im_t13n_ur"]],
      [31, "zh-t-i0-wubi-1998", [[F, "\u4e94\u7b14"]], null, 30],
      [26, He, [[F, "\u4e94\u7b14"]], [F], 30, null, ["im_wubi_zh_hans"]],
      [28, ye, [[H, "\u6ce8\u97f3"]], [H], 31, null, ["im_zhuyin_zh_hant"]],
      [32, "zh-hant-t-i0-bopo", [[H, "\u6ce8\u97f3"]], null, 31],
      [27, xe, [[H, "\u6f22\u8a9e\u62fc\u97f3"]], [H], 29, null, ["im_pinyin_zh_hant"]],
      [30, "vi-t-i0-und", [["vi", "Ti\u1ebfng Vi\u1ec7t"]], ["vi"], 21, [18], ["im_t13n_vi"]],
      [34, "be-t-i0-und", [["be", Me]], ["be"], 26, null, ["im_t13n_be"]],
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
      [37, "de-t-i0-und", [["de", ca]], ["de"], 35, [15, 18]],
      [38, "es-t-i0-und", [["es", fa]], ["es"], 34, [15, 18]],
      [39, "fr-t-i0-und", [["fr", ia]], ["fr"], 36, [15, 18]],
      [40, "it-t-i0-und", [["it", ka]], ["it"], 39, [15, 18]],
      [41, "nl-t-i0-und", [["nl", ma]], ["nl"], 40, [15, 18]],
      [42, "pt-t-i0-und", [[A, pa]], [A], 38, [15, 18]],
      [48, gd, [[B, pa]], null, 38],
      [43, ve, [[H, "\u5009\u9821"]], [H], 32],
      [44, re, [[G, "\u5ee3\u6771\u8a71"]], [G], 33],
      [60, qe, [[G, "\u7cb5\u62fc"]], [G], 33],
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
        Fb,
        [["hy", "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]],
        ["hy"],
        0,
        null,
        ["vkd_hy_east"]
      ],
      [
        104,
        Gb,
        [["hy", "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576"]],
        ["hy"],
        0,
        null,
        ["vkd_hy_west"]
      ],
      [105, "eu-t-k0-und", [["eu", "Euskara"]], ["eu"], 0, null, ["vkd_eu"]],
      [106, "be-t-k0-und", [["be", Me]], ["be"], 0, null, ["vkd_be"]],
      [107, "bn-t-k0-und", [["bn", "\u09ac\u09be\u0982\u09b2\u09be (INSCRIPT)"]], ["bn"], 0, null, ["vkd_bn_inscript"]],
      [108, Ca, [["bn", "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)"]], ["bn"], 0, null, ["vkd_bn_phone"]],
      [109, "bs-t-k0-und", [["bs", "Bosanski"]], ["bs"], 0, null, ["vkd_bs"]],
      [110, ed, [[A, qa]], [A], 0, null, ["vkd_pt_br"]],
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
        Aa,
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
      [117, Na, [["cs", "\u010ce\u0161tina QWERTZ"]], ["cs"], 0, null, ["vkd_cs_qwertz"]],
      [118, "da-t-k0-und", [["da", "Dansk"]], ["da"], 0, null, ["vkd_da"]],
      [119, "prs-t-k0-und", [["prs", "\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc"]], ["fa"], 0, null, ["vkd_prs"]],
      [120, "nl-t-k0-und", [["nl", ma]], ["nl"], 0, null, ["vkd_nl"]],
      [121, zb, [["hi", Ne]], ["hi"], 0, null, ["vkd_deva_phone"]],
      [122, "en-t-k0-und", [[v, ea]], [v], 0, null, ["vkd_en"]],
      [123, "et-t-k0-und", [["et", "Eesti keel"]], ["et"], 0, null, ["vkd_et"]],
      [124, de, [["am", "\u130d\u12d5\u12dd"]], ["am"], 0, null, ["vkd_ethi"]],
      [125, "fi-t-k0-und", [["fi", "Suomi"]], ["fi"], 0, null, ["vkd_fi"]],
      [126, "fr-t-k0-und", [["fr", ia]], ["fr"], 0, null, ["vkd_fr"]],
      [127, "gl-t-k0-und", [["gl", "Galego"]], ["gl"], 0, null, ["vkd_gl"]],
      [
        128,
        $b,
        [["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)"]],
        ["ka"],
        0,
        null,
        ["vkd_ka_qwerty"]
      ],
      [
        129,
        Zb,
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
      [130, "de-t-k0-und", [["de", ca]], ["de"], 0, null, ["vkd_de"]],
      [131, "el-t-k0-und", [["el", Le]], ["el"], 0, null, ["vkd_el"]],
      [132, "gu-t-k0-und", [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)"]], ["gu"], 0, null, ["vkd_gu_inscript"]],
      [
        133,
        sb,
        [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)"]],
        ["gu"],
        0,
        null,
        ["vkd_gu_phone"]
      ],
      [134, Wc, [["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)"]], ["pa"], 0, null, ["vkd_guru_inscript"]],
      [
        135,
        Xc,
        [["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)"]],
        ["pa"],
        0,
        null,
        ["vkd_guru_phone"]
      ],
      [136, xb, [["he", "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]], ["he"], 0, null, ["vkd_he", "vkd_iw"]],
      [137, "hi-t-k0-und", [["hi", Oe]], ["hi"], 0, null, ["vkd_hi"]],
      [138, Eb, [["hu", "Magyar nyelv (101)"]], ["hu"], 0, null, ["vkd_hu_101"]],
      [139, "is-t-k0-und", [["is", "\u00cdslenska"]], ["is"], 0, null, ["vkd_is"]],
      [140, "it-t-k0-und", [["it", ka]], ["it"], 0, null, ["vkd_it"]],
      [141, "kn-t-k0-und", [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)"]], ["kn"], 0, null, ["vkd_kn_inscript"]],
      [
        142,
        dc,
        [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)"]],
        ["kn"],
        0,
        null,
        ["vkd_kn_phone"]
      ],
      [143, "kk-t-k0-und", [["kk", "\u049a\u0430\u0437\u0430\u049b"]], ["kk"], 0, null, ["vkd_kk"]],
      [144, "km-t-k0-und", [["km", "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA"]], ["km"], 0, null, ["vkd_km"]],
      [145, "ko-t-k0-und", [["ko", "\ud55c\uad6d\uc5b4"]], ["ko"], 0, [18], ["vkd_ko"]],
      [146, gc, [["ky", "\u041a\u044b\u0440\u0433\u044b\u0437"]], ["ky"], 0, null, ["vkd_ky_cyrl"]],
      [147, "lo-t-k0-und", [["lo", "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7"]], ["lo"], 0, null, ["vkd_lo"]],
      [148, "lv-t-k0-und", [["lv", "Latvie\u0161u valoda"]], ["lv"], 0, null, ["vkd_lv"]],
      [149, "lt-t-k0-und", [["lt", "Lietuvi\u0173 kalba"]], ["lt"], 0, null, ["vkd_lt"]],
      [150, "mk-t-k0-und", [["mk", "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]], ["mk"], 0, null, ["vkd_mk"]],
      [151, "ml-t-k0-und", [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (INSCRIPT)"]], ["ml"], 0, null, ["vkd_ml_inscript"]],
      [152, uc, [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2e\u0d4a\u0d34\u0d3f)"]], ["ml"], 0, null, ["vkd_ml_phone"]],
      [
        246,
        xc,
        [["mni-Mtei", "\uabc3\uabe4\uabc7\uabe9 \uabc3\uabcc\uabe6\uabdb (\uabd0\uabe3\uabc5\uabe6\uabc7\uabe4\uabdb)"]],
        ["mni-Mtei"],
        0
      ],
      [153, "mt-t-k0-und", [["mt", "Malti"]], ["mt"], 0, null, ["vkd_mt"]],
      [154, "mi-t-k0-und", [["mi", "Maori"]], ["mi"], 0, null, ["vkd_mi"]],
      [155, vc, [["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]], ["mn"], 0, null, ["vkd_mn_cyrl"]],
      [156, "srp-t-k0-und", [["sr", "Crnogorski jezik"]], ["sr"], 0, null, ["vkd_srp"]],
      [157, "no-t-k0-und", [["no", "Norsk"]], ["no"], 0, null, ["vkd_no"]],
      [158, "or-t-k0-und", [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (INSCRIPT)"]], ["or"], 0, null, ["vkd_or_inscript"]],
      [159, Vc, [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)"]], ["or"], 0, null, ["vkd_or_phone"]],
      [160, jc, [[v, k]], ["af"], 0, null, ["vkd_latn_002"]],
      [161, "ps-t-k0-und", [["ps", "\u067e\u069a\u062a\u0648"]], ["ps"], 0, null, ["vkd_ps"]],
      [162, "fa-t-k0-und", [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 0, null, ["vkd_fa"]],
      [163, "pl-t-k0-und", [["pl", oa]], ["pl"], 0, null, ["vkd_pl"]],
      [164, jd, [[B, ra]], [B], 0, null, ["vkd_pt_pt"]],
      [165, "rom-t-k0-und", [["rom", "Rromani \u0107hib"]], ["rom"], 0, null, ["vkd_rom"]],
      [166, "ro-t-k0-und", [["ro", "Rom\u00e2n\u0103"]], ["ro"], 0, null, ["vkd_ro"]],
      [167, od, [["ro", "Rom\u00e2n\u0103 SR13392 Primary"]], ["ro"], 0, null, ["vkd_ro_sr13392_primary"]],
      [168, nd, [["ro", "Rom\u00e2n\u0103 SR13392 Secondary"]], ["ro"], 0, null, ["vkd_ro_sr13392_secondary"]],
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
        rd,
        [
          [
            "ru",
            "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)"
          ]
        ],
        ["ru"],
        0
      ],
      [242, td, [["sa", Oe]], ["sa"], 0],
      [
        170,
        ud,
        [["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)"]],
        ["sa"],
        0,
        null,
        ["vkd_sa_phone"]
      ],
      [171, Ed, [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 0, null, ["vkd_sr_cyrl"]],
      [172, Fd, [["sr", "Srpski"]], ["sr"], 0, null, ["vkd_sr_latn"]],
      [173, "si-t-k0-und", [["si", "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134"]], ["si"], 0, null, ["vkd_si"]],
      [174, "sk-t-k0-und", [["sk", "Slovensk\u00fd jazyk"]], ["sk"], 0, null, ["vkd_sk"]],
      [175, xd, [["sk", "Slovensk\u00fd jazyk - QWERTY"]], ["sk"], 0, null, ["vkd_sk_qwerty"]],
      [176, "sl-t-k0-und", [["sl", "Sloven\u0161\u010dina"]], ["sl"], 0, null, ["vkd_sl"]],
      [177, "uzs-t-k0-und", [["uzs", "Southern Uzbek"]], ["uzs"], 0, null, ["vkd_uzs"]],
      [178, $a, [["es", fa]], ["es"], 0, null, ["vkd_es_es"]],
      [179, "sv-t-k0-und", [["sv", "Svenska"]], ["sv"], 0, null, ["vkd_sv"]],
      [180, Qa, [["de", "Deutschsprachige Schweiz"]], ["de"], 0, null, ["vkd_de_ch"]],
      [181, Md, [[D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)"]], [D], 0, null, ["vkd_ta_tamil99"]],
      [182, "ta-t-k0-und", [[D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)"]], [D], 0, null, ["vkd_ta_inscript"]],
      [183, Od, [[D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)"]], [D], 0, null, ["vkd_ta_phone"]],
      [205, Nd, [[D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)"]], [D], 0],
      [206, Ld, [[D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)"]], [D], 0],
      [184, "tt-t-k0-und", [["tt", "\u0422\u0430\u0442\u0430\u0440"]], ["tt"], 0, null, ["vkd_tt"]],
      [185, "te-t-k0-und", [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)"]], ["te"], 0, null, ["vkd_te_inscript"]],
      [
        186,
        Qd,
        [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)"]],
        ["te"],
        0,
        null,
        ["vkd_te_phone"]
      ],
      [187, "th-t-k0-und", [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]], ["th"], 0, null, ["vkd_th"]],
      [204, Td, [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)"]], ["th"], 0],
      [203, Ud, [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)"]], ["th"], 0],
      [188, Zd, [["tr", "T\u00fcrk\u00e7e - F"]], ["tr"], 0, null, ["vkd_tr_f", Yd]],
      [189, ae, [["tr", "T\u00fcrk\u00e7e - Q"]], ["tr"], 0, null, ["vkd_tr_q"]],
      [190, "ug-t-k0-und", [["ug", "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"]], ["ug"], 0, null, ["vkd_ug"]],
      [
        191,
        ce,
        [["uk", "\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430"]],
        ["uk"],
        0,
        null,
        ["vkd_uk_101"]
      ],
      [192, "ur-t-k0-und", [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 0, null, ["vkd_ur"]],
      [193, ie, [["uz", "O\u2018zbek"]], ["uz"], 0, null, ["vkd_uz_latn"]],
      [
        194,
        he,
        [["uz", "\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)"]],
        ["uz"],
        0,
        null,
        ["vkd_uz_cyrl_phone"]
      ],
      [
        195,
        ge,
        [["uz", "\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)"]],
        ["uz"],
        0,
        null,
        ["vkd_uz_cyrl_type"]
      ],
      [196, me, [["vi", "Ti\u1ebfng Vi\u1ec7t TCVN 6064"]], ["vi"], 0, null, ["vkd_vi_tcvn"]],
      [197, le, [["vi", "Ti\u1ebfng Vi\u1ec7t Telex"]], ["vi"], 0, null, ["vkd_vi_telex"]],
      [198, "vi-t-k0-viqr", [["vi", "Ti\u1ebfng Vi\u1ec7t VIQR"]], ["vi"], 0, null, ["vkd_vi_viqr"]],
      [208, "vi-t-k0-vni", [["vi", "Ti\u1ebfng Vi\u1ec7t VNI"]], ["vi"], 0],
      [199, "dz-t-k0-und", [["dz", "\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41\u0f0b"]], ["dz"], 0, null, ["vkd_dz"]],
      [200, Va, [[v, "English Dvorak"]], [v], 0],
      [
        201,
        Ia,
        [["chr", "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac"]],
        ["chr"],
        0,
        null,
        ["vkd_chr_phone"]
      ],
      [202, "my-t-k0-und", [["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"]], ["my"], 0, null, ["vkd_my"]],
      [239, "tg-t-k0-und", [["tg", "\u0422\u043e\u04b7\u0438\u043a"]], ["tg"], 0, null, ["vkd_tg"]],
      [5, "en-t-i0-und", [[v, ea]], [v], 41, [15, 18], ["im_t13n_en"]],
      [29, Sb, [["ja", "\u65e5\u672c\u8a9e"]], null, -1, null, ["im_t13n_ja_hira"]],
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
      [256, pe, [["yo", "Nigerian Yoruba"]], ["yo"], 0],
      [
        209,
        "ne-t-k0-und",
        [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)"]],
        ["ne"],
        0
      ],
      [210, Mc, [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)"]], ["ne"], 0],
      [211, Wa, [[v, r]], ["nl"], 0],
      [213, "nv-t-k0-und", [["nv", da]], ["nv"], 0],
      [234, "nv-t-k0", [["nv", da]], null, 0],
      [235, "nv-t-k0-std", [["nv", "Din\u00e9 bizaad - Traditional"]], ["nv"], 0],
      [401, sa, [["af", "Afrikaans"]], ["af"], 1],
      [506, ta, [["am", "\u12a0\u121b\u122d\u129b"]], ["am"], 1],
      [464, ua, [["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]], ["ar"], 1],
      [507, va, [["as", "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"]], ["as"], 1],
      [487, wa, [["az", "Az\u0259rbaycan"]], ["az"], 1],
      [402, xa, [["be", Me]], ["be"], 1],
      [403, za, [["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]], ["bg"], 1],
      [489, Ba, [["bn", "\u09ac\u09be\u0982\u09b2\u09be"]], ["bn"], 1],
      [509, Da, [["bo", "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"]], ["bo"], 1],
      [468, Ea, [["bs", "Bosanski"]], ["bs"], 1],
      [404, Fa, [["ca", "Catal\u00e0"]], ["ca"], 1],
      [469, Ga, [["ceb", "Binisaya"]], ["ceb"], 1],
      [494, Ja, [["co", "Corsican"]], ["co"], 1],
      [405, Ma, [["cs", "\u010ce\u0161tina"]], ["cs"], 1],
      [406, Oa, [["cy", "Cymraeg"]], ["cy"], 1],
      [407, Pa, [["da", "Dansk"]], ["da"], 1],
      [408, Ra, [["de", ca]], ["de"], 1],
      [455, Ta, [["el", Le]], ["el"], 1],
      [409, Ua, [[v, ea]], [v], 1],
      [456, Xa, [["eo", "Esperanto"]], ["eo"], 1],
      [410, Ya, [["es", fa]], ["es"], 1],
      [411, ab, [["et", "Eesti"]], ["et"], 1],
      [412, bb, [["eu", "Euskara"]], ["eu"], 1],
      [465, cb, [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 1],
      [413, db, [["fi", "Suomi"]], ["fi"], 1],
      [414, fb, [["fil", "Filipino"]], ["fil"], 1],
      [415, gb, [["fr", ia]], ["fr"], 1],
      [495, jb, [["fy", "Frysk"]], ["fy"], 1],
      [416, lb, [["ga", "Gaeilge"]], ["ga"], 1],
      [496, nb, [["gd", "G\u00e0idhlig"]], ["gd"], 1],
      [417, pb, [["gl", "Galego"]], ["gl"], 1],
      [462, qb, [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]], ["gu"], 1],
      [497, tb, [["haw", Ke]], ["haw"], 1],
      [457, vb, [["he", "\u05e2\u05d1\u05e8\u05d9\u05ea"]], ["he"], 1],
      [453, yb, [["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]], ["hi"], 1],
      [470, Ab, [["hmn", "Hmong"]], ["hmn"], 1],
      [418, Bb, [["hr", "Hrvatski"]], ["hr"], 1],
      [419, Cb, [["ht", "Haitian Creole"]], ["ht"], 1],
      [420, Db, [["hu", "Magyar"]], ["hu"], 1],
      [504, Hb, [["hy", "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"]], ["hy"], 1],
      [421, Jb, [["id", "Indonesia"]], ["id"], 1],
      [422, Kb, [["is", "\u00cdslenska"]], ["is"], 1],
      [423, Lb, [["it", ka]], ["it"], 1],
      [424, Tb, [["ja", "\u65e5\u672c\u8a9e"]], ["ja"], 1],
      [458, Xb, [["jv", "Jawa"]], ["jv"], 1],
      [505, Yb, [["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"]], ["ka"], 1],
      [501, ac, [["kk", "\u049a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"]], ["kk"], 1],
      [484, bc, [["km", "\u1781\u17d2\u1798\u17c2\u179a"]], ["km"], 1],
      [471, cc, [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]], ["kn"], 1],
      [425, ec, [["ko", "\ud55c\uad6d\uc5b4"]], ["ko"], 1],
      [477, fc, [["ku", "Kurd\u00ee"]], ["ku"], 1],
      [478, hc, [["ky", "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"]], ["ky"], 1],
      [426, ic, [["la", "Latin"]], ["la"], 1],
      [498, kc, [["lb", "L\u00ebtzebuergesch"]], ["lb"], 1],
      [483, mc, [["lo", "\u0ea5\u0eb2\u0ea7"]], ["lo"], 1],
      [427, nc, [["lt", "Lietuvi\u0173"]], ["lt"], 1],
      [428, oc, [["lv", "Latvie\u0161u"]], ["lv"], 1],
      [479, pc, [["mg", "Malagasy"]], ["mg"], 1],
      [459, rc, [["mi", "Te reo M\u0101ori"]], ["mi"], 1],
      [429, sc, [["mk", "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]], ["mk"], 1],
      [490, tc, [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]], ["ml"], 1],
      [474, wc, [["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]], ["mn"], 1],
      [461, yc, [["mr", "\u092e\u0930\u093e\u0920\u0940"]], ["mr"], 1],
      [430, Ac, [["ms", "Melayu"]], ["ms"], 1],
      [467, Bc, [["mt", "Malti"]], ["mt"], 1],
      [488, Hc, [["mul", "Multiple languages"]], ["mul"], 1],
      [511, Cc, [["mul-beng", "Multiple languages (Bangla)"]], ["mul-beng"], 1],
      [512, Dc, [["mul-cyrl", "Multiple languages (Cyrillic)"]], ["mul-cyrl"], 1],
      [513, Ec, [["mul-deva", "Multiple languages (Devanagari)"]], ["mul-deva"], 1],
      [514, Fc, [["mul-ethi", "Multiple languages (Ethiopic)"]], ["mul-ethi"], 1],
      [515, Gc, [["mul-latn", "Multiple languages (Latin)"]], ["mul-latn"], 1],
      [492, Ic, [["my", "\u1019\u103c\u1014\u103a\u1019\u102c"]], ["my"], 1],
      [431, Kc, [["nb", "Norsk bokm\u00e5l"]], ["nb"], 1],
      [485, Lc, [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]], ["ne"], 1],
      [432, Nc, [["nl", ma]], ["nl"], 1],
      [434, Pc, [["nn", "Norsk nynorsk"]], ["nn"], 1],
      [433, Qc, [["no", "Norsk"]], ["no"], 1],
      [480, Sc, [["ny", "Nyanja"]], ["ny"], 1],
      [476, Uc, [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]], ["or"], 1],
      [463, Yc, [["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]], ["pa"], 1],
      [435, Zc, [["pl", oa]], ["pl"], 1],
      [436, kd, [[A, pa]], null, 1],
      [437, ad, [[A, "Portugu\u00eas (Brasil)"]], [A], 1],
      [438, fd, [[B, "Portugu\u00eas (Portugal)"]], [B], 1],
      [439, md, [["ro", "Rom\u00e2n\u0103"]], ["ro"], 1],
      [440, pd, [["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]], ["ru"], 1],
      [491, vd, [["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]], ["si"], 1],
      [441, wd, [["sk", "Sloven\u010dina"]], ["sk"], 1],
      [442, yd, [["sl", "Sloven\u0161\u010dina"]], ["sl"], 1],
      [499, zd, [["sm", "Samoan"]], ["sm"], 1],
      [500, Bd, [["sn", "ChiShona"]], ["sn"], 1],
      [472, Cd, [["so", "Soomaali"]], ["so"], 1],
      [443, Dd, [["sq", "Shqip"]], ["sq"], 1],
      [444, Gd, [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 1],
      [481, Hd, [["su", "Basa Sunda"]], ["su"], 1],
      [445, Id, [["sv", "Svenska"]], ["sv"], 1],
      [446, Jd, [["sw", "Kiswahili"]], ["sw"], 1],
      [473, Kd, [[D, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]], [D], 1],
      [466, Pd, [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]], ["te"], 1],
      [502, Rd, [["tg", "\u0422\u043e\u04b7\u0438\u043a\u04e3"]], ["tg"], 1],
      [454, Sd, [["th", "\u0e44\u0e17\u0e22"]], ["th"], 1],
      [508, Vd, [["ti", "\u1275\u130d\u122d\u129b"]], ["ti"], 1],
      [447, Wd, [["tr", "T\u00fcrk\u00e7e"]], ["tr"], 1],
      [448, be, [["uk", "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"]], ["uk"], 1],
      [486, fe, [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 1],
      [503, je, [["uz", "O\u2018zbek"]], ["uz"], 1],
      [449, ke, [["vi", "Ti\u1ebfng Vi\u1ec7t"]], ["vi"], 1],
      [482, ne, [["xh", "IsiXhosa"]], ["xh"], 1],
      [510, oe, [["yi", "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"]], ["yi"], 1],
      [450, ze, [[F, "\u4e2d\u6587"]], null, 1],
      [451, te, [[F, "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]], [F], 1],
      [452, we, [[H, "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09"]], [H], 1],
      [475, Ie, [["zh-yue", "\u7cb5\u8a9e"]], ["zh-yue"], 1],
      [460, Je, [["zu", "IsiZulu"]], ["zu"], 1],
      [238, "see-t-k0-und", [["see", "On\u00f6dowa\u02bcga:\u02bc"]], ["see"], 0],
      [214, "ti-t-k0-und", [["ti", "\u130d\u12d5\u12dd"]], ["ti"], 0],
      [215, "mr-t-k0-und", [["mr", Ne]], ["mr"], 0],
      [241, zc, [["mr", Oe]], ["mr"], 0],
      [216, "ht-t-k0-und", [["ht", ia]], ["ht"], 0],
      [47, bd, [[A, pa]], null, 38],
      [217, "nl-t-k0-intl", [[v, r]], null, 0],
      [218, ib, [[v, r]], ["fr"], 0],
      [219, "de-t-k0-intl", [[v, r]], ["de"], 0],
      [220, "it-t-k0-intl", [[v, r]], ["it"], 0],
      [221, dd, [[v, r]], [A], 0],
      [222, id, [[v, r]], [B], 0],
      [223, "es-t-k0-intl", [[v, r]], ["es"], 0],
      [224, "cy-t-k0-und", [[v, k]], ["cy"], 0],
      [225, "ga-t-k0-und", [[v, k]], ["ga"], 0],
      [369, mb, [[v, "Irish"]], null, 0],
      [226, "id-t-k0-und", [[v, k]], ["id"], 0],
      [227, "jw-t-k0-und", [[v, k]], ["jw"], 0],
      [228, "ms-t-k0-und", [[v, k]], ["ms"], 0],
      [229, "sw-t-k0-und", [[v, k]], ["sw"], 0],
      [230, "tl-t-k0-und", [[v, k]], ["tl"], 0],
      [231, Jc, [["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)"]], ["my"], 0],
      [236, Qb, [[v, "Nunavik Inuktitut"]], ["iu"], 0],
      [237, Rb, [[v, "Nunavut Inuktitut"]], ["iu"], 0],
      [245, Pb, [[v, "Inuktitut Unicode"]], ["iu"], 0],
      [600, "en-t-i0-voice", [[v, ea]], null, 43],
      [601, ue, [["zh", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]], null, 43],
      [240, "lis-t-k0-und", [["lis", "\ua4e1\ua4f2\ua4e2\ua4f4"]], ["lis"], 0],
      [493, ee, [[v, "Emoji & Symbol"]], ["mul"], 1],
      [351, Ka, [[v, "Corsican"]], null, 0],
      [352, kb, [[v, "West Frisian"]], null, 0],
      [353, ob, [[v, "Scots Gaelic"]], null, 0],
      [244, "haw-t-k0-und", [["haw", Ke]], ["haw"], 0],
      [354, ub, [[v, "Hawaiian"]], null, 0],
      [355, lc, [[v, "Luxembourgish"]], null, 0],
      [243, "sd-t-k0-und", [[v, "Sindhi"]], ["sd"], 0],
      [356, Ad, [[v, "Samoan"]], null, 0],
      [358, Sa, [["de", ca]], null, 0],
      [359, Za, [["es", fa]], null, 0],
      [360, hb, [["fr", ia]], null, 0],
      [361, Mb, [["it", ka]], null, 0],
      [362, Oc, [["nl", ma]], null, 0],
      [363, $c, [["pl", oa]], null, 0],
      [364, cd, [[A, qa]], null, 0],
      [365, hd, [[B, ra]], null, 0],
      [366, Xd, [["tr", "T\u00fcrk\u00e7e - F"]], null, 0],
      [367, $d, [["tr", "T\u00fcrk\u00e7e - Q"]], null, 0],
      [368, "ku-t-k0-und", [["ku", "Kurd\u00ee Bedirxan"]], ["ku"], 0],
      [56, "ko-t-i0-und", [["ko", "\ud55c\uad6d\uc5b4"]], null, 45],
      [58, Vb, [["ja", "\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]], null, 28],
      [57, Ub, [["ja", "\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]], null, 28],
      [59, se, [[H, "\u5ee3\u6771\u8a71"]], null, 33],
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
      [251, "hi-t-k0-phone", [["hi", Pe]], null, 0],
      [252, "mr-t-k0-phone", [["mr", Pe]], null, 0],
      [250, rb, [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)"]], null, 0],
      [253, Tc, [[v, "Ojibwe Left Dot - E Finals"]], ["oj"], 0],
      [254, "one-t-k0-und", [["one", "On\u028cyote\u0294a\u00b7k\u00e1\u00b7"]], ["one"], 0],
      [255, "mez-t-k0-und", [["mez", "Oma\u035eeqnome"]], ["mez"], 0],
      [
        257,
        ld,
        [["rhg", "\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d"]],
        ["rhg"],
        0
      ],
      [258, La, [["crk", "\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"]], ["crk"], 0],
      [259, "myh-t-k0-und", [["myh", "Q\u02b7i\u00b7q\u02b7i\u00b7di\u010d\u010daq"]], ["myh"], 0],
      [260, "win-t-k0-und", [["win", "Hooc\u0105k"]], ["win"], 0]
    ],
    function (a) {
      var b = new sh(a);
      if ((a = oh(Qg(hh(b, 2)), ""))) {
        xh[a] = b;
        var c = oh(Qg(hh(nh(b)[0], 2)), "");
        c && (Fh[a] = c);
      }
      Q(lh(b, 4, Qg), function (d) {
        d == H ? (d = "zh-Hant") : d == F && (d = "zh-Hans");
        Uh[d] || (Uh[d] = []);
        Uh[d].push(b);
      });
    }
  );
  var Eh = RegExp("^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)", "i");
  var ai = null;
  var Wh = {
    H: "aq",
    I: "ai",
    J: "ra",
    K: "ds",
    L: "dr",
    O: "fd",
    P: "gi",
    R: "gl",
    S: "gp",
    fc: "hd",
    Vg: "pl",
    Wg: "re",
    Xg: "ri",
    Yg: "sq",
    Zg: "si",
    ah: "ss",
    SUCCESS: "su",
    dh: "ui",
    eh: "ua",
    fh: "up",
    URL: "url",
    C: "input_tools",
    B: "current_input",
    D: "current_input_state",
    bh: "tvk",
    Tg: "GOOGLE_ITA_KD",
    N: "ft",
    gh: "ut",
    Ug: "km"
  };
  (function () {
    if (si) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(J())) ? a[1] : "0";
    }
    return ri
      ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(J())) ? a[0].replace(/_/g, ".") : "10")
      : ti
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(J())) ? a[1] : "")
      : ui || vi || wi
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(J())) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  (function () {
    if (Di) return Jh(/Firefox\/([0-9.]+)/);
    if (th || pi || oi) return Ci;
    if (Hi) {
      if (vf() || L(x) || L(Ib) || wf()) {
        var a = Jh(/CriOS\/([0-9.]+)/);
        if (a) return a;
      }
      return Jh(/Chrome\/([0-9.]+)/);
    }
    if (Ii && !(vf() || L(x) || L(Ib))) return Jh(/Version\/([0-9.]+)/);
    if (Ei || Fi) {
      if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(J()))) return a[1] + "." + a[2];
    } else if (Gi) return (a = Jh(/Android\s+([0-9.]+)/)) ? a : Jh(/Version\/([0-9.]+)/);
    return "";
  })();
  (function (a) {
    if (M() && a !== n) {
      var b = K.brands.find(function (c) {
        return c.brand === a;
      });
      if (!b || !b.version) return NaN;
      b = b.version.split(".");
    } else {
      b = tf(a);
      if ("" === b) return NaN;
      b = b.split(".");
    }
    return 0 === b.length ? NaN : Number(b[0]);
  })(ja);
  var Oh = {
    hc: "zh-hant-t-i0-array-1992",
    ic: "zh-hans-t-i0-cangjie-1982",
    jc: ve,
    kc: "zh-hans-t-i0-cangjie-1987",
    lc: "zh-hant-t-i0-cangjie-1987",
    mc: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
    nc: re,
    oc: qe,
    pc: se,
    qc: "zh-hant-t-i0-dayi-1988",
    sc: Ae,
    tc: xe,
    rc: "ko-t-i0-und",
    uc: Be,
    vc: Ce,
    wc: De,
    xc: Ee,
    yc: Fe,
    zc: Ge,
    Ac: "am-t-i0-und",
    Bc: "ar-t-i0-und",
    Cc: "be-t-i0-und",
    Dc: "bn-t-i0-und",
    Ec: "bg-t-i0-und",
    Fc: "nl-t-i0-und",
    Gc: "en-t-i0-und",
    Hc: "fr-t-i0-und",
    Ic: "de-t-i0-und",
    Jc: "el-t-i0-und",
    Kc: "gu-t-i0-und",
    Lc: wb,
    Mc: "hi-t-i0-und",
    Nc: Sb,
    Oc: "it-t-i0-und",
    Pc: Wb,
    Rc: Vb,
    Qc: Ub,
    Sc: "kn-t-i0-und",
    Tc: "ml-t-i0-und",
    Uc: "mr-t-i0-und",
    Vc: "ne-t-i0-und",
    Wc: "or-t-i0-und",
    Xc: "fa-t-i0-und",
    Yc: "pl-t-i0-und",
    Zc: "pt-t-i0-und",
    ad: bd,
    bd: gd,
    cd: "pa-t-i0-und",
    dd: "ru-t-i0-und",
    ed: "sa-t-i0-und",
    fd: "sr-t-i0-und",
    gd: "si-t-i0-und",
    hd: "es-t-i0-und",
    jd: "ta-t-i0-und",
    kd: "te-t-i0-und",
    ld: "th-t-i0-und",
    md: "ti-t-i0-und",
    nd: "tr-t-i0-und",
    od: "uk-t-i0-und",
    pd: "ur-t-i0-und",
    qd: "vi-t-i0-und",
    rd: He,
    sd: ye,
    td: "zh-hant-t-i0-bopomofo",
    ud: "sq-t-k0-und",
    vd: "ar-t-k0-und",
    wd: Fb,
    xd: Gb,
    yd: "eu-t-k0-und",
    zd: "be-t-k0-und",
    Ad: "bn-t-k0-und",
    Bd: Ca,
    Cd: "bs-t-k0-und",
    Dd: ed,
    Ed: "bg-t-k0-und",
    Fd: Aa,
    Gd: "ca-t-k0-und",
    Hd: "ccp-t-k0-und",
    Id: "chr-t-k0-und",
    Jd: Ia,
    Ld: "hr-t-k0-und",
    Md: "cs-t-k0-und",
    Nd: Na,
    Od: "da-t-k0-und",
    Pd: "prs-t-k0-und",
    Qd: zb,
    Rd: "nl-t-k0-und",
    Sd: "nl-t-k0-intl",
    Td: "dz-t-k0-und",
    Ud: "en-t-k0-und",
    Vd: Va,
    Wd: "et-t-k0-und",
    Xd: de,
    zg: "ti-ethi-t-k0-und",
    Yd: "fi-t-k0-und",
    Zd: "fr-t-k0-und",
    be: ib,
    ce: "ff-t-k0-adlm",
    de: "gl-t-k0-und",
    fe: $b,
    ge: Zb,
    he: "de-t-k0-und",
    ie: "de-t-k0-intl",
    je: "el-t-k0-und",
    le: "gu-t-k0-und",
    me: sb,
    ke: rb,
    ne: Wc,
    oe: Xc,
    qe: "haw-t-k0-und",
    pe: "ht-t-k0-und",
    se: xb,
    te: "hi-t-k0-und",
    ue: "hi-t-k0-phone",
    ve: "win-t-k0-und",
    we: Eb,
    xe: "is-t-k0-und",
    ye: "id-t-k0-und",
    ze: Pb,
    Ae: Qb,
    Be: Rb,
    Ce: "ga-t-k0-und",
    De: mb,
    Ee: "it-t-k0-und",
    Ge: "it-t-k0-intl",
    He: "jw-t-k0-und",
    Ie: "kn-t-k0-und",
    Je: dc,
    Ke: "kk-t-k0-und",
    Le: "km-t-k0-und",
    Me: "ko-t-k0-und",
    Ne: "ku-t-k0-und",
    Oe: gc,
    Pe: "lo-t-k0-und",
    Qe: "lv-t-k0-und",
    Re: "lis-t-k0-und",
    Se: "lt-t-k0-und",
    Te: "mk-t-k0-und",
    Ue: "myh-t-k0-und",
    Ve: "ms-t-k0-und",
    We: "ml-t-k0-und",
    Xe: uc,
    Ye: "mt-t-k0-und",
    Ze: "mi-t-k0-und",
    af: "mr-t-k0-und",
    bf: zc,
    cf: "mr-t-k0-phone",
    df: xc,
    ef: "mez-t-k0-und",
    ff: vc,
    gf: "srp-t-k0-und",
    hf: "my-t-k0-und",
    jf: Jc,
    kf: "nv-t-k0-und",
    lf: "nv-t-k0-std",
    mf: "ne-t-k0-und",
    nf: Mc,
    qf: "no-t-k0-und",
    sf: "one-t-k0-und",
    tf: "or-t-k0-und",
    uf: Vc,
    vf: "osa-t-k0-und",
    wf: jc,
    xf: "ps-t-k0-und",
    yf: "fa-t-k0-und",
    zf: La,
    Af: "pl-t-k0-und",
    Cf: jd,
    Ef: dd,
    Gf: id,
    Hf: ld,
    If: "rom-t-k0-und",
    Jf: "ro-t-k0-und",
    Kf: od,
    Lf: nd,
    Mf: "ru-t-k0-und",
    Nf: rd,
    Of: qd,
    Pf: sd,
    Sf: ud,
    Rf: td,
    Uf: "see-t-k0-und",
    Vf: Ed,
    Wf: Fd,
    Xf: "sd-t-k0-und",
    Yf: "si-t-k0-und",
    Zf: "sk-t-k0-und",
    ag: xd,
    bg: "sl-t-k0-und",
    cg: "ckb-t-k0-ar",
    dg: "ckb-t-k0-en",
    eg: "uzs-t-k0-und",
    fg: $a,
    hg: "es-t-k0-intl",
    ig: "sw-t-k0-und",
    jg: "sv-t-k0-und",
    kg: Qa,
    lg: "tl-t-k0-und",
    mg: "tg-t-k0-und",
    ng: Md,
    og: "ta-t-k0-und",
    pg: Ld,
    qg: Od,
    rg: Nd,
    sg: "tt-t-k0-und",
    tg: "te-t-k0-und",
    ug: Qd,
    vg: "th-t-k0-und",
    wg: Td,
    xg: Ud,
    yg: "ti-t-k0-und",
    Ag: Zd,
    Cg: ae,
    Eg: "ug-t-k0-und",
    Fg: ce,
    Gg: "ur-t-k0-und",
    Hg: Wa,
    Ig: he,
    Jg: ge,
    Kg: ie,
    Lg: me,
    Mg: le,
    Ng: "vi-t-k0-viqr",
    Og: "vi-t-k0-vni",
    Pg: "cy-t-k0-und",
    Rg: "yi-t-k0-und",
    pf: pe,
    rf: Tc,
    ee: Sa,
    gg: Za,
    ae: hb,
    Fe: Mb,
    M: Oc,
    Bf: $c,
    Df: cd,
    Ff: hd,
    Bg: Xd,
    Dg: $d,
    Kd: Ka,
    re: ub,
    Qf: Ad,
    Tf: ob,
    Qg: kb,
    Sg: lc,
    T: sa,
    U: Dd,
    V: ta,
    W: ua,
    X: Hb,
    Y: va,
    Z: wa,
    aa: bb,
    ba: xa,
    ca: Ba,
    da: Ea,
    ea: za,
    fa: Ic,
    ga: Ie,
    ha: Fa,
    ia: Ga,
    ja: ze,
    ka: te,
    la: we,
    ma: Ja,
    na: Bb,
    oa: Ma,
    pa: Pa,
    qa: Nc,
    ra: Ua,
    sa: Xa,
    ta: ab,
    ua: fb,
    va: db,
    wa: gb,
    xa: pb,
    ya: Yb,
    za: Ra,
    Aa: Ta,
    Ba: qb,
    Ca: Cb,
    Da: tb,
    Ea: vb,
    Fa: yb,
    Ga: Ab,
    Ha: Db,
    Ia: Kb,
    Ja: Jb,
    Ka: lb,
    La: Lb,
    Ma: Tb,
    Na: Xb,
    Oa: cc,
    Pa: ac,
    Qa: bc,
    Ra: ec,
    Sa: fc,
    Ta: hc,
    Ua: mc,
    Va: ic,
    Wa: oc,
    Xa: nc,
    Ya: kc,
    Za: sc,
    ab: pc,
    bb: Ac,
    cb: tc,
    eb: Bc,
    fb: rc,
    gb: yc,
    hb: wc,
    ib: Hc,
    jb: Cc,
    kb: Dc,
    lb: Ec,
    mb: Fc,
    nb: Gc,
    ob: Lc,
    pb: Qc,
    qb: Kc,
    rb: Pc,
    sb: Sc,
    tb: Uc,
    ub: cb,
    vb: Zc,
    wb: kd,
    xb: ad,
    yb: fd,
    zb: Yc,
    Ab: md,
    Bb: pd,
    Cb: zd,
    Db: nb,
    Eb: Gd,
    Fb: Bd,
    Gb: vd,
    Hb: wd,
    Ib: yd,
    Jb: Cd,
    Kb: Ya,
    Lb: Hd,
    Mb: Jd,
    Nb: Id,
    Ob: Rd,
    Pb: Kd,
    Qb: Pd,
    Rb: Sd,
    Sb: Da,
    Tb: Vd,
    Ub: Wd,
    Vb: be,
    Xb: fe,
    Yb: je,
    Zb: ke,
    ac: Oa,
    bc: jb,
    cc: ne,
    dc: oe,
    ec: Je,
    Wb: ee,
    jh: "en-t-i0-voice",
    hh: ue,
    ih: "zh-hant-t-i0-voice",
    kh: "xkb:am:phonetic:arm",
    lh: "xkb:be::fra",
    mh: "xkb:be::ger",
    nh: "xkb:be::nld",
    oh: "xkb:bg::bul",
    ph: "xkb:bg:phonetic:bul",
    qh: "xkb:br::por",
    rh: "xkb:by::bel",
    th: "xkb:ca::fra",
    sh: "xkb:ca:eng:eng",
    uh: "xkb:ca:multix:fra",
    wh: "xkb:ch::ger",
    vh: "xkb:ch:fr:fra",
    xh: "xkb:cz::cze",
    yh: "xkb:cz:qwerty:cze",
    zh: "xkb:de::ger",
    Ah: "xkb:de:neo:ger",
    Bh: "xkb:dk::dan",
    Ch: "xkb:ee::est",
    Eh: "xkb:es::spa",
    Dh: "xkb:es:cat:cat",
    Gh: "xkb:fo::fao",
    Fh: "xkb:fi::fin",
    Hh: "xkb:fr:bepo:fra",
    Ih: "xkb:fr::fra",
    Jh: "xkb:gb:dvorak:eng",
    Kh: "xkb:gb:extd:eng",
    Lh: "xkb:ge::geo",
    Mh: "xkb:gr::gre",
    Nh: "xkb:hr::scr",
    Oh: "xkb:hu::hun",
    Ph: "xkb:hu:qwerty:hun",
    Qh: "xkb:ie::ga",
    Rh: "xkb:il::heb",
    Sh: "xkb:is::ice",
    Th: "xkb:it::ita",
    Uh: "xkb:jp::jpn",
    Vh: "xkb:kz::kaz",
    Wh: "xkb:latam::spa",
    Xh: "xkb:lt::lit",
    Yh: "xkb:lv:apostrophe:lav",
    ai: "xkb:mn::mon",
    Zh: "xkb:mk::mkd",
    bi: "xkb:mt::mlt",
    ci: "xkb:no::nob",
    di: "xkb:pl::pol",
    ei: "xkb:pt::por",
    fi: "xkb:ro::rum",
    gi: "xkb:ro:std:rum",
    hi: "xkb:rs::srp",
    ji: "xkb:ru::rus",
    ii: "xkb:ru:phonetic:rus",
    ki: "xkb:se::swe",
    li: "xkb:si::slv",
    mi: "xkb:sk::slo",
    oi: "xkb:tr::tur",
    ni: "xkb:tr:f:tur",
    pi: "xkb:ua::ukr",
    vi: "xkb:us::eng",
    wi: "xkb:us::fil",
    xi: "xkb:us::ind",
    Ei: "xkb:us::msa",
    ri: "xkb:us:altgr-intl:eng",
    si: "xkb:us:colemak:eng",
    ti: "xkb:us:dvorak:eng",
    ui: "xkb:us:dvp:eng",
    yi: "xkb:us:intl:eng",
    zi: "xkb:us:intl:nld",
    Di: "xkb:us:intl:por",
    Ai: "xkb:us:intl_pc:eng",
    Bi: "xkb:us:intl_pc:nld",
    Ci: "xkb:us:intl_pc:por",
    Gi: "xkb:us:workman-intl:eng",
    Fi: "xkb:us:workman:eng"
  };
  Nh.prototype.toString = function () {
    return this.code;
  };
  var Qh = {},
    Mh = ["bn", "gu", "pa", "kn", "ml", "or", "sa", D, "te", "ne"],
    Sh = {
      im_pinyin_zh_hans: Ae,
      im_pinyin_zh_hant: xe,
      im_t13n_ja: Wb,
      "im_t13n_ja-Hira": Sb,
      im_wubi_zh_hans: He,
      im_zhuyin_zh_hant: ye,
      vkd_bg_phone: Aa,
      vkd_chr_phone: Ia,
      vkd_cs_qwertz: Na,
      vkd_deva_phone: zb,
      vkd_en_dvorak: Va,
      vkd_es_es: $a,
      vkd_ethi: de,
      vkd_gu_phone: sb,
      vkd_guru_inscript: Wc,
      vkd_guru_phone: Xc,
      vkd_hu_101: Eb,
      vkd_hy_east: Fb,
      vkd_hy_west: Gb,
      vkd_ka_qwerty: $b,
      vkd_ka_typewriter: Zb,
      vkd_ro_sr13392_primary: od,
      vkd_ro_sr13392_secondary: nd,
      vkd_ru_phone: rd,
      vkd_ru_phone_aatseel: qd,
      vkd_ru_phone_yazhert: sd,
      vkd_sk_qwerty: xd,
      vkd_ta_itrans: Ld,
      vkd_ta_tamil99: Md,
      vkd_ta_typewriter: Nd,
      vkd_th_pattajoti: Td,
      vkd_th_tis: Ud,
      vkd_tr_f: Zd,
      vkd_tr_q: ae,
      vkd_uk_101: ce,
      vkd_us_intl: ib,
      vkd_uz_cyrl_phone: he,
      vkd_uz_cyrl_type: ge,
      vkd_vi_tcvn: me,
      vkd_vi_telex: le
    },
    Ki = {},
    Li;
  for (Li in Sh) Ki[Sh[Li]] = Li;
  var Lh = Ki,
    Kh = {
      "nl-t-k0-intl": E,
      "fr-t-k0-intl": E,
      "de-t-k0-intl": E,
      "ht-t-k0-und": "fr",
      "id-t-k0-und": y,
      "ga-t-k0-und": y,
      "it-t-k0-intl": E,
      "jw-t-k0-und": y,
      "mr-t-k0-und": "deva_phone",
      "mr-t-k0-devanaga": "hi",
      "ms-t-k0-und": y,
      "pt-br-t-k0-intl": E,
      "pt-pt-t-k0-intl": E,
      "sa-t-k0-devanaga": "hi",
      "es-t-k0-intl": E,
      "sw-t-k0-und": y,
      "tl-t-k0-und": y,
      "ti-t-k0-und": "ethi",
      "cy-t-k0-und": y
    };
  Y.prototype.get = function (a) {
    a = localStorage[String(a)];
    return void 0 !== a ? JSON.parse(a) : null;
  };
  Y.prototype.set = function (a, b) {
    void 0 !== b ? (localStorage[String(a)] = JSON.stringify(b)) : localStorage.removeItem(String(a));
  };
  ci.prototype.o = function (a) {
    if (!/^en/.test(a)) {
      var b = Yh(this.g),
        c = Vh(a);
      Q(b, function (e) {
        ff(c, e);
      });
      if (0 != c.length) {
        a = $f(Ha);
        b = $f("turnoff_div");
        var d = Ih("onetime_div");
        Q(
          c,
          function (e) {
            var f = Gh(e, !1);
            R(f, t, af(this.m, this, e));
            d.appendChild(f);
          },
          this
        );
        b ? b.parentNode && b.parentNode.insertBefore(d, b) : a.appendChild(d);
      }
    }
  };
  ci.prototype.m = function (a) {
    var b = this.g,
      c = b.get(2);
    c.push(a);
    b.set(2, c);
    this.h(a, !0);
  };
  ci.prototype.h = function (a, b) {
    var c = this.g.get(1),
      d = this.g.get(3);
    a = { 10: c, 29: d, 1: a, 3: b };
    b && (a[4] = !0);
    $h(a);
    chrome.runtime.sendMessage({ up: Zh(this.g) });
    window.close();
  };
  ci.prototype.F = function () {
    var a = { 7: !this.g.get(7) };
    $h(a);
    chrome.runtime.sendMessage({ up: a });
    window.close();
  };
  new ci();
}).call(this);
