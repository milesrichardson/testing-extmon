(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  /*

 SPDX-License-Identifier: Apache-2.0
*/
  /*

 Copyright 2005, 2007 Bob Ippolito. All Rights Reserved.
 Copyright The Closure Library Authors.
 SPDX-License-Identifier: MIT
*/
  "use strict";
  var aa = "-t-k0-und",
    ba = "Africa Latin",
    ca = "Android",
    da = "CYRILLIC TYPEWRITTER",
    ea = "Chromium",
    g = "DIV",
    fa = "Deutsch",
    ha = "Din\u00e9 bizaad - Modern",
    ja = "Edge",
    ka = "English",
    la = "Espa\u00f1ol",
    ma = "Firefox",
    na = "Fran\u00e7ais",
    oa = "GOOGLE_INPUT_CHEXT_FLAG",
    pa = "IFRAME",
    qa = "INPUT",
    sa = "IS_INPUT_ACTIVE",
    ta = "Inscript",
    ua = "Internet Explorer",
    va = "Invalid event type",
    wa = "Italiano",
    xa = "Microsoft Edge",
    ya = "Move cursor to a text field before you click a candidate",
    za = "Nederlands",
    Aa = "Opera",
    Ca = "PHONETIC",
    Da = "Polski",
    Ea = "Portugu\u00eas",
    Fa = "Portugu\u00eas brasileiro",
    Ga = "Portugu\u00eas europeu",
    Ha = "SCRIPT",
    p = "SPAN",
    Ia = "Silk",
    Ja = "Symbol.iterator",
    Ka = "TEXTAREA",
    La = "US International",
    Ma = "absolute",
    Na = "act",
    Oa = "action",
    Pa = "activedescendant",
    Qa = "af-t-i0-handwrit",
    Ra = "am-t-i0-handwrit",
    Sa = "am-t-i0-und",
    Ta = "ar-t-i0-handwrit",
    Ua = "ar-t-i0-und",
    Va = "ar-t-k0-und",
    Wa = "aria-label",
    Xa = "as-t-i0-handwrit",
    Ya = "assertive",
    Za = "auto",
    $a = "autocapitalize",
    ab = "autocomplete",
    bb = "az-t-i0-handwrit",
    cb = "be-t-i0-handwrit",
    db = "be-t-i0-und",
    eb = "be-t-k0-und",
    fb = "bg-t-i0-handwrit",
    gb = "bg-t-i0-und",
    hb = "bg-t-k0-qwerty",
    ib = "bg-t-k0-und",
    jb = "blur",
    kb = "bn-t-i0-handwrit",
    lb = "bn-t-i0-und",
    mb = "bn-t-k0-und",
    nb = "bn-t-und-latn-k0-und",
    ob = "bo-t-i0-handwrit",
    pb = "bs-t-i0-handwrit",
    qb = "bs-t-k0-und",
    rb = "ca-t-i0-handwrit",
    sb = "ca-t-k0-und",
    tb = "ccp-t-k0-und",
    ub = "ceb-t-i0-handwrit",
    vb = "cfx",
    wb = "changeState",
    xb = "character",
    yb = "checked",
    zb = "chext",
    Ab = "chr-t-k0-und",
    Bb = "chr-t-und-latn-k0-und",
    Db = "citc",
    Eb = "ckb-t-k0-ar",
    Fb = "ckb-t-k0-en",
    q = "click",
    Gb = "co-t-i0-handwrit",
    Hb = "co-t-k0-accents",
    Ib = "complete",
    Jb = "compositionend",
    Kb = "contextmenu",
    Lb = "crk-t-k0-phone",
    Mb = "cs-t-i0-handwrit",
    Nb = "cs-t-k0-qwertz",
    Ob = "cs-t-k0-und",
    Pb = "cy-t-i0-handwrit",
    Qb = "cy-t-k0-und",
    Rb = "da-t-i0-handwrit",
    Sb = "da-t-k0-und",
    Tb = "de-ch-t-k0-und",
    Ub = "de-t-i0-handwrit",
    Vb = "de-t-i0-und",
    Wb = "de-t-k0-accents",
    Xb = "de-t-k0-intl",
    Yb = "de-t-k0-und",
    Zb = "delete",
    $b = "direction",
    ac = "disabled",
    bc = "dz-t-k0-und",
    cc = "el-t-i0-handwrit",
    dc = "el-t-i0-und",
    ec = "el-t-k0-und",
    r = "en",
    fc = "en-t-i0-handwrit",
    gc = "en-t-i0-und",
    hc = "en-t-k0-dvorak",
    ic = "en-t-k0-und",
    jc = "en-us-t-k0-intl",
    kc = "eo-t-i0-handwrit",
    lc = "es-t-i0-handwrit",
    mc = "es-t-i0-und",
    nc = "es-t-k0-accents",
    oc = "es-t-k0-intl",
    pc = "es-t-k0-und",
    qc = "et-t-i0-handwrit",
    rc = "et-t-k0-und",
    sc = "eu-t-i0-handwrit",
    tc = "eu-t-k0-und",
    uc = "fa-t-i0-handwrit",
    vc = "fa-t-i0-und",
    wc = "fa-t-k0-und",
    xc = "ff-t-k0-adlm",
    yc = "fi-t-i0-handwrit",
    zc = "fi-t-k0-und",
    Ac = "fil-t-i0-handwrit",
    Bc = "focus",
    Cc = "fr-t-i0-handwrit",
    Dc = "fr-t-i0-und",
    Ec = "fr-t-k0-accents",
    Fc = "fr-t-k0-intl",
    Gc = "fr-t-k0-und",
    t = "function",
    Hc = "fy-t-i0-handwrit",
    Ic = "fy-t-k0-accents",
    Jc = "ga-t-i0-handwrit",
    Kc = "ga-t-k0-accents",
    Lc = "ga-t-k0-und",
    Mc = "gd-t-i0-handwrit",
    Nc = "gd-t-k0-accents",
    Oc = "gl-t-i0-handwrit",
    Pc = "gl-t-k0-und",
    Qc = "gu-t-i0-handwrit",
    Rc = "gu-t-i0-und",
    Sc = "gu-t-k0-phone2",
    Tc = "gu-t-k0-und",
    Uc = "gu-t-und-latn-k0-qwerty",
    Vc = "haw-t-i0-handwrit",
    Wc = "haw-t-k0-accents",
    Xc = "haw-t-k0-und",
    Yc = "he",
    Zc = "he-t-i0-handwrit",
    $c = "he-t-i0-und",
    ad = "he-t-k0-und",
    bd = "hi-t-i0-handwrit",
    cd = "hi-t-i0-und",
    dd = "hi-t-k0-phone",
    fd = "hi-t-k0-qwerty",
    gd = "hi-t-k0-und",
    hd = "hidden",
    id = "hmn-t-i0-handwrit",
    jd = "horizontal",
    kd = "hr-t-i0-handwrit",
    ld = "hr-t-k0-und",
    md = "ht-t-i0-handwrit",
    nd = "ht-t-k0-und",
    od = "https:",
    pd = "https://inputtools.google.com",
    qd = "hu-t-i0-handwrit",
    rd = "hu-t-k0-101key",
    sd = "hy-hyr-t-k0-und",
    td = "hy-hyt-t-k0-und",
    ud = "hy-t-i0-handwrit",
    vd = "id-t-i0-handwrit",
    wd = "id-t-k0-und",
    xd = "inline-block",
    yd = "is-t-i0-handwrit",
    zd = "is-t-k0-und",
    Ad = "it-t-i0-handwrit",
    Bd = "it-t-i0-und",
    Cd = "it-t-k0-accents",
    Dd = "it-t-k0-intl",
    Ed = "it-t-k0-und",
    Fd = "ita-ff-black-enabled",
    Gd = "ita-ff-white-enabled",
    Hd = "ita-hwt-button",
    Id = "ita-hwt-candidate-hover",
    Jd = "ita-hwt-enter-img-white",
    Kd = "ita-hwt-ime-full",
    Ld = "ita-hwt-ime-init-opaque",
    Md = "ita-hwt-ime-opaque",
    Nd = "ita-hwt-jfk",
    Od = "ita-hwt-jfk-action",
    Pd = "ita-hwt-jfk-hover",
    Qd = "ita-hwt-jfk-standard",
    Rd = "ita-kd-btn-sbc",
    Sd = "ita-kd-btn-zh_pun",
    Td = "ita-kd-icon-button",
    Ud = "ita-kd-icon-button-hover",
    Vd = "ita-kd-icon-hover",
    Wd = "ita-kd-img",
    Xd = "ita-kd-inputtools-div",
    Yd = "ita-kd-menuitem",
    Zd = "ita-kd-menuitem-hover",
    $d = "ita-kd-selected",
    ae = "ita-ppe-cur",
    be = "ita-ppe-dis",
    ce = "ita-ppe-dis-text",
    de = "ita-ppe-td",
    ee = "ita-ppe-uds",
    fe = "iu-t-k0-inuktitu",
    ge = "iu-t-k0-nunavik",
    he = "iu-t-k0-nunavut",
    ie = "ja-hira-t-i0-und",
    je = "ja-t-i0-handwrit",
    ke = "ja-t-i0-mozcjp",
    le = "ja-t-i0-mozcus",
    me = "ja-t-ja-hira-i0-und",
    ne = "jv-t-i0-handwrit",
    oe = "jw-t-k0-und",
    pe = "ka-t-i0-handwrit",
    qe = "ka-t-k0-legacy",
    re = "ka-t-k0-und",
    se = "key",
    u = "keydown",
    v = "keypress",
    te = "keyup",
    ue = "kk-t-i0-handwrit",
    ve = "kk-t-k0-und",
    we = "km-t-i0-handwrit",
    xe = "km-t-k0-und",
    ye = "kn-t-i0-handwrit",
    ze = "kn-t-i0-und",
    Ae = "kn-t-k0-und",
    Be = "kn-t-und-latn-k0-und",
    Ce = "ko-t-i0-handwrit",
    De = "ko-t-k0-und",
    Ee = "ku-t-i0-handwrit",
    Fe = "ku-t-k0-und",
    Ge = "ky-cyrl-t-k0-und",
    He = "ky-t-i0-handwrit",
    Ie = "la-t-i0-handwrit",
    Je = "latn-002-t-k0-und",
    Ke = "latn_002",
    Le = "lb-t-i0-handwrit",
    Me = "lb-t-k0-accents",
    Ne = "letter-spacing",
    Oe = "lo-t-i0-handwrit",
    Pe = "lo-t-k0-und",
    Qe = "lt-t-i0-handwrit",
    Re = "lt-t-k0-und",
    Se = "ltr",
    Te = "lv-t-i0-handwrit",
    Ue = "lv-t-k0-und",
    Ve = "mez-t-k0-und",
    We = "mg-t-i0-handwrit",
    Xe = "mi-t-i0-handwrit",
    Ye = "mi-t-k0-und",
    Ze = "mk-t-i0-handwrit",
    $e = "mk-t-k0-und",
    af = "ml-t-i0-handwrit",
    bf = "ml-t-i0-und",
    cf = "ml-t-k0-und",
    df = "ml-t-und-latn-k0-und",
    ef = "mn-cyrl-t-k0-und",
    ff = "mn-t-i0-handwrit",
    gf = "mni-mtei-t-k0-phone",
    hf = "mousedown",
    jf = "mousemove",
    kf = "mouseout",
    w = "mouseover",
    lf = "mouseup",
    mf = "mr-t-i0-handwrit",
    nf = "mr-t-i0-und",
    of = "mr-t-k0-devanaga",
    pf = "mr-t-k0-phone",
    qf = "mr-t-k0-und",
    rf = "ms-t-i0-handwrit",
    sf = "ms-t-k0-und",
    tf = "mt-t-i0-handwrit",
    uf = "mt-t-k0-und",
    vf = "mul-beng-t-i0-handwrit",
    wf = "mul-cyrl-t-i0-handwrit",
    xf = "mul-deva-t-i0-handwrit",
    yf = "mul-ethi-t-i0-handwrit",
    zf = "mul-latn-t-i0-handwrit",
    Af = "mul-t-i0-handwrit",
    Bf = "my-t-i0-handwrit",
    Cf = "my-t-k0-myansan",
    Df = "my-t-k0-und",
    Ef = "myh-t-k0-und",
    Ff = "namaste",
    Gf = "nb-t-i0-handwrit",
    Hf = "ne-t-i0-handwrit",
    If = "ne-t-i0-und",
    Jf = "ne-t-und-latn-k0-und",
    Kf = "nl-t-i0-handwrit",
    Lf = "nl-t-i0-und",
    Mf = "nl-t-k0-accents",
    Nf = "nl-t-k0-intl",
    Of = "nl-t-k0-und",
    Pf = "nn-t-i0-handwrit",
    Qf = "no-t-i0-handwrit",
    Rf = "no-t-k0-und",
    Sf = "nonce",
    x = "none",
    Tf = "number",
    Uf = "nv-t-k0-std",
    Vf = "nv-t-k0-und",
    Wf = "ny-t-i0-handwrit",
    Xf = "object",
    Yf = "oj-t-k0-ojibwe",
    Zf = "one-t-k0-und",
    $f = "or-t-i0-handwrit",
    ag = "or-t-i0-und",
    bg = "or-t-k0-und",
    cg = "or-t-und-latn-k0-und",
    dg = "osa-t-k0-und",
    eg = "pa-guru-t-k0-und",
    fg = "pa-guru-t-und-latn-k0-und",
    gg = "pa-t-i0-handwrit",
    hg = "pa-t-i0-und",
    ig = "pl-t-i0-handwrit",
    jg = "pl-t-k0-accents",
    kg = "pl-t-k0-und",
    lg = "position",
    mg = "ppe",
    ng = "prs-t-k0-und",
    og = "ps-t-k0-und",
    pg = "pt-BR",
    qg = "pt-PT",
    rg = "pt-br-t-i0-handwrit",
    sg = "pt-br-t-i0-und",
    tg = "pt-br-t-k0-accents",
    ug = "pt-br-t-k0-intl",
    vg = "pt-br-t-k0-und",
    wg = "pt-pt-t-i0-handwrit",
    xg = "pt-pt-t-i0-und",
    yg = "pt-pt-t-k0-accents",
    zg = "pt-pt-t-k0-intl",
    Ag = "pt-pt-t-k0-und",
    Bg = "pt-t-i0-handwrit",
    Cg = "pt-t-i0-und",
    Dg = "px",
    Eg = "readystatechange",
    Fg = "rhg-rohg-t-k0-und",
    Gg = "ro-t-i0-handwrit",
    Hg = "ro-t-k0-extended",
    Ig = "ro-t-k0-legacy",
    Jg = "ro-t-k0-und",
    Kg = "rom-t-k0-und",
    Lg = "rtl",
    Mg = "ru-t-i0-handwrit",
    Ng = "ru-t-i0-und",
    Og = "ru-t-k0-aatseel",
    Pg = "ru-t-k0-qwerty",
    Qg = "ru-t-k0-und",
    Rg = "ru-t-k0-yazhert",
    Sg = "sa-t-i0-und",
    Tg = "sa-t-k0-devanaga",
    Ug = "sa-t-und-latn-k0-und",
    Vg = "sd-t-k0-und",
    Wg = "selected",
    Xg = "shortcut",
    Yg = "shortcut_",
    Zg = "si-t-i0-handwrit",
    $g = "si-t-i0-und",
    ah = "si-t-k0-und",
    bh = "sk-t-i0-handwrit",
    ch = "sk-t-k0-qwerty",
    dh = "sk-t-k0-und",
    eh = "sl-t-i0-handwrit",
    fh = "sl-t-k0-und",
    gh = "sm-t-i0-handwrit",
    hh = "sm-t-k0-accents",
    ih = "sn-t-i0-handwrit",
    jh = "so-t-i0-handwrit",
    kh = "sq-t-i0-handwrit",
    lh = "sq-t-k0-und",
    mh = "sr-cyrl-t-k0-und",
    nh = "sr-latn-t-k0-und",
    oh = "sr-t-i0-handwrit",
    ph = "sr-t-i0-und",
    qh = "srp-t-k0-und",
    rh = "start",
    z = "string",
    sh = 'style="-webkit-user-select: none; "',
    th = "su-t-i0-handwrit",
    uh = "sv-t-i0-handwrit",
    vh = "sv-t-k0-und",
    wh = "sw-t-i0-handwrit",
    xh = "sw-t-k0-und",
    yh = "synthetic-keydown",
    zh = "synthetic-keypress",
    Ah = "synthetic-keyup",
    Bh = "ta",
    Ch = "ta-t-i0-handwrit",
    Dh = "ta-t-i0-und",
    Eh = "ta-t-k0-itrans",
    Fh = "ta-t-k0-ta99",
    Gh = "ta-t-k0-typewriter",
    Hh = "ta-t-k0-und",
    Ih = "ta-t-und-latn-k0-und",
    Jh = "tabindex",
    Kh = "te-t-i0-handwrit",
    Lh = "te-t-i0-und",
    Mh = "te-t-k0-und",
    Nh = "te-t-und-latn-k0-und",
    Oh = "text-decoration",
    Ph = "text-transform",
    Qh = "tg-t-i0-handwrit",
    Rh = "tg-t-k0-und",
    Sh = "th-t-i0-handwrit",
    Th = "th-t-i0-und",
    Uh = "th-t-k0-pattajoti",
    Vh = "th-t-k0-tis",
    Wh = "th-t-k0-und",
    Xh = "ti-ethi-t-k0-und",
    Yh = "ti-t-i0-handwrit",
    Zh = "ti-t-i0-und",
    $h = "ti-t-k0-und",
    ai = "tl-t-k0-und",
    bi = "tlang",
    ci = "touchend",
    di = "touchmove",
    ei = "touchstart",
    fi = "tr-t-i0-handwrit",
    gi = "tr-t-k0-f-accents",
    hi = "tr-t-k0-lagacy",
    ii = "tr-t-k0-legacy",
    ji = "tr-t-k0-q-accents",
    ki = "tr-t-k0-und",
    li = "translate",
    mi = "tsbc",
    ni = "tt-t-k0-und",
    oi = "ug-t-k0-und",
    pi = "uk-t-i0-handwrit",
    qi = "uk-t-i0-und",
    ri = "uk-t-k0-101key",
    si = "und-ethi-t-k0-und",
    ti = "und-t-i0-handwrit",
    ui = "ur-t-i0-handwrit",
    vi = "ur-t-i0-und",
    wi = "ur-t-k0-und",
    xi = "us_intl",
    yi = "uz-cyrl-t-k0-legacy",
    zi = "uz-cyrl-t-k0-und",
    Ai = "uz-latn-t-k0-und",
    Bi = "uz-t-i0-handwrit",
    Ci = "uzs-t-k0-und",
    Di = "vertical",
    Ei = "vertical-align",
    Fi = "vi-t-i0-handwrit",
    Gi = "vi-t-i0-und",
    Hi = "vi-t-k0-legacy",
    Ii = "vi-t-k0-und",
    Ji = "vi-t-k0-viqr",
    Ki = "visible",
    Li = "vk-btn",
    Mi = "vk-sf-h",
    Ni = "vkd",
    Oi = "win-t-k0-und",
    Pi = "xh-t-i0-handwrit",
    Qi = "yi-t-i0-handwrit",
    Ri = "yi-t-k0-und",
    Si = "yo-ng-t-k0-und",
    Ti = "yue-hant-t-i0-jyutping",
    Ui = "yue-hant-t-i0-und",
    Vi = "yue-hant-t-i0-yale",
    Wi = "zh-CN",
    Xi = "zh-HK",
    Yi = "zh-Hans",
    Zi = "zh-TW",
    $i = "zh-hans-t-i0-handwrit",
    aj = "zh-hans-t-i0-voice",
    bj = "zh-hant-t-i0-cangjie-1982",
    cj = "zh-hant-t-i0-handwrit",
    dj = "zh-hant-t-i0-pinyin",
    ej = "zh-hant-t-i0-und",
    fj = "zh-t-i0-handwrit",
    gj = "zh-t-i0-pinyin",
    hj = "zh-t-i0-pinyin-x0-shuangpin-abc",
    ij = "zh-t-i0-pinyin-x0-shuangpin-flypy",
    jj = "zh-t-i0-pinyin-x0-shuangpin-jiajia",
    kj = "zh-t-i0-pinyin-x0-shuangpin-ms",
    lj = "zh-t-i0-pinyin-x0-shuangpin-ziguang",
    mj = "zh-t-i0-pinyin-x0-shuangpin-ziranma",
    nj = "zh-t-i0-wubi-1986",
    oj = "zh-yue-t-i0-handwrit",
    pj = "zu-t-i0-handwrit",
    qj = "\u00c01234567890\u00bd\u00bbQWERTYUIOP\u00db\u00ddASDFGHJKL\u00ba\u00de\u00dc\u00e2ZXCVBNM\u00bc\u00be\u00bf ",
    rj = "\u00c01234567890\u00bd\u00bbQWERTYUIOP\u00db\u00dd\u00dcASDFGHJKL\u00ba\u00deZXCVBNM\u00bc\u00be\u00bf ",
    sj = "\u02bb\u014clelo Hawai\u02bbi",
    tj = "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    uj = "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f",
    vj = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
    wj = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)",
    xj = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)",
    A,
    yj = function (a) {
      var b = 0;
      return function () {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
      };
    },
    zj = function (a) {
      a = [
        Xf == typeof globalThis && globalThis,
        a,
        Xf == typeof window && window,
        Xf == typeof self && self,
        Xf == typeof global && global
      ];
      for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c;
      }
      throw Error("Cannot find global object");
    },
    Cj = function (a, b) {
      if (b)
        a: {
          var c = Aj;
          a = a.split(".");
          for (var d = 0; d < a.length - 1; d++) {
            var e = a[d];
            if (!(e in c)) break a;
            c = c[e];
          }
          a = a[a.length - 1];
          d = c[a];
          b = b(d);
          b != d && null != b && Bj(c, a, { configurable: !0, writable: !0, value: b });
        }
    },
    Dj = function (a) {
      a = { next: a };
      a[Symbol.iterator] = function () {
        return this;
      };
      return a;
    },
    Ej = function (a) {
      return (a.raw = a);
    },
    Fj = function (a) {
      var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
      if (b) return b.call(a);
      if (typeof a.length == Tf) return { next: yj(a) };
      throw Error(String(a) + " is not an iterable or ArrayLike");
    },
    C = function (a, b) {
      a.prototype = Gj(b.prototype);
      a.prototype.constructor = a;
      if (Hj) Hj(a, b);
      else
        for (var c in b)
          if ("prototype" != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c);
              d && Object.defineProperty(a, c, d);
            } else a[c] = b[c];
      a.da = b.prototype;
    },
    Ij = function (a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    },
    Jj = function (a, b) {
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
    Kj = function (a) {
      return a ? a : Array.prototype.fill;
    },
    Lj = function (a) {
      a.xb = void 0;
      a.ha = function () {
        return a.xb ? a.xb : (a.xb = new a());
      };
    },
    Mj = function (a) {
      var b = typeof a;
      b = b != Xf ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
      return "array" == b || (b == Xf && typeof a.length == Tf);
    },
    Nj = function (a) {
      var b = typeof a;
      return (b == Xf && null != a) || b == t;
    },
    D = function (a) {
      return (Object.prototype.hasOwnProperty.call(a, Oj) && a[Oj]) || (a[Oj] = ++Pj);
    },
    Qj = function (a, b, c) {
      return a.call.apply(a.bind, arguments);
    },
    Rj = function (a, b, c) {
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
    E = function (a, b, c) {
      E = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Qj : Rj;
      return E.apply(null, arguments);
    },
    Sj = function (a, b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return function () {
        var d = c.slice();
        d.push.apply(d, arguments);
        return a.apply(this, d);
      };
    },
    Tj = function (a, b) {
      a = a.split(".");
      var c = F;
      a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b ? (c[d] && c[d] !== Object.prototype[d] ? (c = c[d]) : (c = c[d] = {})) : (c[d] = b);
    },
    G = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.da = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.Cr = function (d, e, f) {
        for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
        return b.prototype[e].apply(d, h);
      };
    },
    Uj = function (a) {
      return a;
    },
    Vj = function (a, b) {
      try {
        b ? chrome.runtime.sendMessage(void 0, a, void 0, b) : chrome.runtime.sendMessage(a);
      } catch (c) {}
    },
    H = function (a) {
      a && typeof a.ea == t && a.ea();
    },
    Wj = function (a) {
      for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        Mj(d) ? Wj.apply(null, d) : H(d);
      }
    },
    I = function () {
      this.S = this.S;
      this.Ia = this.Ia;
    },
    Xj = function (a, b) {
      b = Sj(H, b);
      a.S ? b() : (a.Ia || (a.Ia = []), a.Ia.push(b));
    },
    Yj = function () {
      I.call(this);
    },
    Zj = function (a, b) {
      if (Error.captureStackTrace) Error.captureStackTrace(this, Zj);
      else {
        var c = Error().stack;
        c && (this.stack = c);
      }
      a && (this.message = String(a));
      void 0 !== b && (this.cause = b);
    },
    ak = function (a, b) {
      a = a.split("%s");
      for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
      Zj.call(this, c + a[d]);
    },
    bk = function (a) {
      return a[a.length - 1];
    },
    ck = function (a, b) {
      for (var c = a.length, d = typeof a === z ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return e;
      return -1;
    },
    J = function (a, b) {
      return 0 <= dk(a, b);
    },
    ek = function (a) {
      if (!Array.isArray(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
      a.length = 0;
    },
    fk = function (a, b) {
      J(a, b) || a.push(b);
    },
    gk = function (a, b) {
      b = dk(a, b);
      var c;
      (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
      return c;
    },
    hk = function (a) {
      return Array.prototype.concat.apply([], arguments);
    },
    ik = function (a) {
      var b = a.length;
      if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c;
      }
      return [];
    },
    jk = function (a, b) {
      for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (Mj(d)) {
          var e = a.length || 0,
            f = d.length || 0;
          a.length = e + f;
          for (var h = 0; h < f; h++) a[e + h] = d[h];
        } else a.push(d);
      }
    },
    lk = function (a, b, c, d) {
      Array.prototype.splice.apply(a, kk(arguments, 1));
    },
    kk = function (a, b, c) {
      return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
    },
    mk = function (a) {
      for (var b = 0, c = 0, d = {}; c < a.length; ) {
        var e = a[c++],
          f = Nj(e) ? "o" + D(e) : (typeof e).charAt(0) + e;
        Object.prototype.hasOwnProperty.call(d, f) || ((d[f] = !0), (a[b++] = e));
      }
      a.length = b;
    },
    ok = function (a, b) {
      if (!Mj(a) || !Mj(b) || a.length != b.length) return !1;
      for (var c = a.length, d = nk, e = 0; e < c; e++) if (!d(a[e], b[e])) return !1;
      return !0;
    },
    nk = function (a, b) {
      return a === b;
    },
    pk = function (a) {
      for (var b = [], c = 0; c < arguments.length; c++) {
        var d = arguments[c];
        if (Array.isArray(d))
          for (var e = 0; e < d.length; e += 8192) for (var f = pk.apply(null, kk(d, e, e + 8192)), h = 0; h < f.length; h++) b.push(f[h]);
        else b.push(d);
      }
      return b;
    },
    K = function (a, b) {
      this.type = a;
      this.B = this.target = b;
      this.defaultPrevented = this.D = !1;
    },
    qk = function (a) {
      a.stopPropagation();
    },
    rk = function (a, b) {
      var c = a.length - b.length;
      return 0 <= c && a.indexOf(b, c) == c;
    },
    uk = function (a, b) {
      var c = 0;
      a = sk(String(a)).split(".");
      b = sk(String(b)).split(".");
      for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
        var f = a[e] || "",
          h = b[e] || "";
        do {
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == f[0].length && 0 == h[0].length) break;
          c =
            tk(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) ||
            tk(0 == f[2].length, 0 == h[2].length) ||
            tk(f[2], h[2]);
          f = f[3];
          h = h[3];
        } while (0 == c);
      }
      return c;
    },
    tk = function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    },
    vk = function () {
      var a = F.navigator;
      return a && (a = a.userAgent) ? a : "";
    },
    yk = function (a) {
      return wk
        ? xk
          ? xk.brands.some(function (b) {
              return (b = b.brand) && -1 != b.indexOf(a);
            })
          : !1
        : !1;
    },
    L = function (a) {
      return -1 != vk().indexOf(a);
    },
    zk = function () {
      return wk ? !!xk && 0 < xk.brands.length : !1;
    },
    Ak = function () {
      return zk() ? !1 : L(Aa);
    },
    Bk = function () {
      return zk() ? !1 : L("Trident") || L("MSIE");
    },
    Ck = function () {
      return zk() ? !1 : L(ja);
    },
    Dk = function () {
      return zk() ? yk(xa) : L("Edg/");
    },
    Ek = function () {
      return L(ma) || L("FxiOS");
    },
    Gk = function () {
      return (
        L("Safari") && !(Fk() || (zk() ? 0 : L("Coast")) || Ak() || Ck() || Dk() || (zk() ? yk(Aa) : L("OPR")) || Ek() || L(Ia) || L(ca))
      );
    },
    Fk = function () {
      return zk() ? yk(ea) : ((L("Chrome") || L("CriOS")) && !Ck()) || L(Ia);
    },
    Hk = function () {
      return L(ca) && !(Fk() || Ek() || Ak() || L(Ia));
    },
    Ik = function (a) {
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
    Jk = function (a) {
      var b = vk();
      if (a === ua) {
        if (Bk())
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
      b = Ik(c);
      switch (a) {
        case Aa:
          if (Ak()) return b(["Version", Aa]);
          if (zk() ? yk(Aa) : L("OPR")) return b(["OPR"]);
          break;
        case xa:
          if (Ck()) return b([ja]);
          if (Dk()) return b(["Edg"]);
          break;
        case ea:
          if (Fk()) return b(["Chrome", "CriOS", "HeadlessChrome"]);
      }
      return (a === ma && Ek()) || ("Safari" === a && Gk()) || ("Android Browser" === a && Hk()) || (a === Ia && L(Ia))
        ? ((b = c[2]) && b[1]) || ""
        : "";
    },
    Kk = function (a) {
      if (zk() && a !== Ia) {
        var b = xk.brands.find(function (c) {
          return c.brand === a;
        });
        if (!b || !b.version) return NaN;
        b = b.version.split(".");
      } else {
        b = Jk(a);
        if ("" === b) return NaN;
        b = b.split(".");
      }
      return 0 === b.length ? NaN : Number(b[0]);
    },
    Lk = function () {
      return wk ? !!xk && !!xk.platform : !1;
    },
    Mk = function () {
      return L("iPhone") && !L("iPod") && !L("iPad");
    },
    Nk = function () {
      return Mk() || L("iPad") || L("iPod");
    },
    Ok = function () {
      return Lk() ? "macOS" === xk.platform : L("Macintosh");
    },
    Pk = function (a) {
      Pk[" "](a);
      return a;
    },
    Qk = function (a, b) {
      try {
        return Pk(a[b]), !0;
      } catch (c) {}
      return !1;
    },
    Rk = function () {
      var a = F.document;
      return a ? a.documentMode : void 0;
    },
    Tk = function (a) {
      return Number(Sk) >= a;
    },
    Wk = function (a, b) {
      K.call(this, a ? a.type : "");
      this.relatedTarget = this.B = this.target = null;
      this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.key = "";
      this.charCode = this.keyCode = 0;
      this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
      this.state = null;
      this.G = !1;
      this.pointerId = 0;
      this.pointerType = "";
      this.A = null;
      if (a) {
        var c = (this.type = a.type),
          d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.B = b;
        (b = a.relatedTarget) ? M && (Qk(b, "nodeName") || (b = null)) : c == w ? (b = a.fromElement) : c == kf && (b = a.toElement);
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
        this.charCode = a.charCode || (c == v ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.G = Uk ? a.metaKey : a.ctrlKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = typeof a.pointerType === z ? a.pointerType : Vk[a.pointerType] || "";
        this.state = a.state;
        this.A = a;
        a.defaultPrevented && Wk.da.preventDefault.call(this);
      }
    },
    Yk = function (a) {
      return !(!a || !a[Xk]);
    },
    $k = function (a, b, c, d, e) {
      this.listener = a;
      this.proxy = null;
      this.src = b;
      this.type = c;
      this.capture = !!d;
      this.ia = e;
      this.key = ++Zk;
      this.removed = this.zc = !1;
    },
    al = function (a) {
      a.removed = !0;
      a.listener = null;
      a.proxy = null;
      a.src = null;
      a.ia = null;
    },
    bl = function (a, b, c) {
      for (var d in a) b.call(c, a[d], d, a);
    },
    cl = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = a[d];
      return b;
    },
    dl = function (a) {
      var b = [],
        c = 0,
        d;
      for (d in a) b[c++] = d;
      return b;
    },
    el = function (a, b) {
      for (var c in a) if (a[c] == b) return !0;
      return !1;
    },
    fl = function (a) {
      for (var b in a) return !1;
      return !0;
    },
    gl = function (a) {
      var b = {},
        c;
      for (c in a) b[c] = a[c];
      return b;
    },
    il = function (a, b) {
      for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < hl.length; f++) (c = hl[f]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
      }
    },
    jl = function (a) {
      var b = arguments.length;
      if (1 == b && Array.isArray(arguments[0])) return jl.apply(null, arguments[0]);
      if (b % 2) throw Error("Uneven number of arguments");
      for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
      return c;
    },
    kl = function (a) {
      var b = arguments.length;
      if (1 == b && Array.isArray(arguments[0])) return kl.apply(null, arguments[0]);
      for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
      return c;
    },
    ll = function (a) {
      this.src = a;
      this.A = {};
      this.B = 0;
    },
    ml = function (a, b) {
      var c = b.type;
      c in a.A && gk(a.A[c], b) && (al(b), 0 == a.A[c].length && (delete a.A[c], a.B--));
    },
    ol = function (a, b, c, d, e) {
      a = a.A[b.toString()];
      b = -1;
      a && (b = nl(a, c, d, e));
      return -1 < b ? a[b] : null;
    },
    nl = function (a, b, c, d) {
      for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.removed && f.listener == b && f.capture == !!c && f.ia == d) return e;
      }
      return -1;
    },
    ql = function (a, b, c, d, e) {
      if (d && d.once) return pl(a, b, c, d, e);
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) ql(a, b[f], c, d, e);
        return null;
      }
      c = rl(c);
      return Yk(a) ? a.listen(b, c, Nj(d) ? !!d.capture : !!d, e) : sl(a, b, c, !1, d, e);
    },
    sl = function (a, b, c, d, e, f) {
      if (!b) throw Error(va);
      var h = Nj(e) ? !!e.capture : !!e,
        k = tl(a);
      k || (a[ul] = k = new ll(a));
      c = k.add(b, c, d, h, f);
      if (c.proxy) return c;
      d = vl();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) wl || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
      else if (a.attachEvent) a.attachEvent(xl(b.toString()), d);
      else if (a.addListener && a.removeListener) a.addListener(d);
      else throw Error("addEventListener and attachEvent are unavailable.");
      yl++;
      return c;
    },
    vl = function () {
      function a(c) {
        return b.call(a.src, a.listener, c);
      }
      var b = zl;
      return a;
    },
    pl = function (a, b, c, d, e) {
      if (Array.isArray(b)) {
        for (var f = 0; f < b.length; f++) pl(a, b[f], c, d, e);
        return null;
      }
      c = rl(c);
      return Yk(a) ? a.T.add(String(b), c, !0, Nj(d) ? !!d.capture : !!d, e) : sl(a, b, c, !0, d, e);
    },
    Al = function (a, b, c, d, e) {
      if (Array.isArray(b)) for (var f = 0; f < b.length; f++) Al(a, b[f], c, d, e);
      else
        (d = Nj(d) ? !!d.capture : !!d),
          (c = rl(c)),
          Yk(a) ? a.T.remove(String(b), c, d, e) : a && (a = tl(a)) && (b = ol(a, b, c, d, e)) && Bl(b);
    },
    Bl = function (a) {
      if (typeof a !== Tf && a && !a.removed) {
        var b = a.src;
        if (Yk(b)) ml(b.T, a);
        else {
          var c = a.type,
            d = a.proxy;
          b.removeEventListener
            ? b.removeEventListener(c, d, a.capture)
            : b.detachEvent
            ? b.detachEvent(xl(c), d)
            : b.addListener && b.removeListener && b.removeListener(d);
          yl--;
          (c = tl(b)) ? (ml(c, a), 0 == c.B && ((c.src = null), (b[ul] = null))) : al(a);
        }
      }
    },
    xl = function (a) {
      return a in Cl ? Cl[a] : (Cl[a] = "on" + a);
    },
    zl = function (a, b) {
      if (a.removed) a = !0;
      else {
        b = new Wk(b, this);
        var c = a.listener,
          d = a.ia || a.src;
        a.zc && Bl(a);
        a = c.call(d, b);
      }
      return a;
    },
    tl = function (a) {
      a = a[ul];
      return a instanceof ll ? a : null;
    },
    rl = function (a) {
      if (typeof a === t) return a;
      a[Dl] ||
        (a[Dl] = function (b) {
          return a.handleEvent(b);
        });
      return a[Dl];
    },
    N = function (a) {
      I.call(this);
      this.B = a;
      this.A = {};
    },
    Fl = function (a, b, c, d, e) {
      El(a, b, c, d, !1, e);
    },
    El = function (a, b, c, d, e, f) {
      Array.isArray(c) || (c && (Gl[0] = c.toString()), (c = Gl));
      for (var h = 0; h < c.length; h++) {
        var k = ql(b, c[h], d || a.handleEvent, e || !1, f || a.B || a);
        if (!k) break;
        a.A[k.key] = k;
      }
      return a;
    },
    Hl = function (a, b, c, d, e, f) {
      if (Array.isArray(c)) for (var h = 0; h < c.length; h++) Hl(a, b, c[h], d, e, f);
      else
        (d = d || a.handleEvent),
          (e = Nj(e) ? !!e.capture : !!e),
          (f = f || a.B || a),
          (d = rl(d)),
          (e = !!e),
          (c = Yk(b) ? ol(b.T, String(c), d, e, f) : b ? ((b = tl(b)) ? ol(b, c, d, e, f) : null) : null),
          c && (Bl(c), delete a.A[c.key]);
      return a;
    },
    Il = function (a) {
      var b = "xb";
      if (a.xb && a.hasOwnProperty(b)) return a.xb;
      b = new a();
      return (a.xb = b);
    },
    Jl = function () {
      I.call(this);
      this.A = {};
      this.B = new N(this);
      this.B.listen(window, ["beforeunload", "unload"], this.D);
    },
    Kl = function (a) {
      return Jl.ha().A[a] || new Yj(a);
    },
    Ll = function () {
      return function () {
        return 6;
      };
    },
    Ml = function () {
      return !1;
    },
    Nl = function () {
      return null;
    },
    Ol = function () {},
    Ql = function () {
      if (void 0 === Pl) {
        var a = null,
          b = F.trustedTypes;
        if (b && b.createPolicy) {
          try {
            a = b.createPolicy("goog#html", { createHTML: Uj, createScript: Uj, createScriptURL: Uj });
          } catch (c) {
            F.console && F.console.error(c.message);
          }
          Pl = a;
        } else Pl = a;
      }
      return Pl;
    },
    Tl = function (a, b) {
      this.A = (a === Rl && b) || "";
      this.B = Sl;
    },
    Ul = function (a) {
      return a instanceof Tl && a.constructor === Tl && a.B === Sl ? a.A : "type_error:Const";
    },
    Vl = function (a) {
      return new Tl(Rl, a);
    },
    Wl = function (a) {
      this.A = a;
    },
    Xl = function (a) {
      return a instanceof Wl && a.constructor === Wl ? a.A : "type_error:TrustedResourceUrl";
    },
    am = function (a, b) {
      var c = Ul(a);
      if (!Yl.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
      a = c.replace(Zl, function (d, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e))
          throw Error(
            'Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b)
          );
        d = b[e];
        return d instanceof Tl ? Ul(d) : encodeURIComponent(String(d));
      });
      return $l(a);
    },
    $l = function (a) {
      var b = Ql();
      a = b ? b.createScriptURL(a) : a;
      return new Wl(a, bm);
    },
    cm = function (a, b, c) {
      if (null == c) return b;
      if (typeof c === z) return c ? a + encodeURIComponent(c) : "";
      for (var d in c)
        if (Object.prototype.hasOwnProperty.call(c, d)) {
          var e = c[d];
          e = Array.isArray(e) ? e : [e];
          for (var f = 0; f < e.length; f++) {
            var h = e[f];
            null != h &&
              (b || (b = a), (b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h))));
          }
        }
      return b;
    },
    dm = function (a) {
      this.A = a;
    },
    em = function (a) {
      return a instanceof dm && a.constructor === dm ? a.A : "type_error:SafeUrl";
    },
    im = function (a) {
      if (a instanceof dm) return a;
      a = typeof a == Xf && a.vb ? a.hb() : String(a);
      fm.test(a) ? (a = new dm(a, gm)) : ((a = String(a).replace(/(%0A|%0D)/g, "")), (a = a.match(hm) ? new dm(a, gm) : null));
      return a;
    },
    jm = function (a) {
      this.A = a;
      this.vb = !0;
    },
    km = function (a) {
      return a instanceof jm && a.constructor === jm ? a.A : "type_error:SafeStyle";
    },
    om = function (a) {
      var b = "",
        c;
      for (c in a)
        if (Object.prototype.hasOwnProperty.call(a, c)) {
          if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
          var d = a[c];
          null != d && ((d = Array.isArray(d) ? d.map(lm).join(" ") : lm(d)), (b += c + ":" + d + ";"));
        }
      return b ? new jm(b, mm) : nm;
    },
    lm = function (a) {
      if (a instanceof dm) return 'url("' + em(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
      if (a instanceof Tl) a = Ul(a);
      else {
        a = String(a);
        var b = a.replace(pm, "$1").replace(pm, "$1").replace(qm, "url");
        if (rm.test(b)) {
          if ((b = !sm.test(a))) {
            for (var c = (b = !0), d = 0; d < a.length; d++) {
              var e = a.charAt(d);
              "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
            }
            b = b && c && tm(a);
          }
          a = b ? um(a) : "zClosurez";
        } else a = "zClosurez";
      }
      if (/[{;}]/.test(a)) throw new ak("Value does not allow [{;}], got: %s.", [a]);
      return a;
    },
    tm = function (a) {
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
    um = function (a) {
      return a.replace(qm, function (b, c, d, e) {
        var f = "";
        d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
          f = k;
          return l;
        });
        b = (im(d) || vm).hb();
        return c + f + b + f + e;
      });
    },
    wm = function (a) {
      this.A = a;
      this.vb = !0;
    },
    ym = function (a, b) {
      if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " + a);
      var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
      if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=\\^$|]+$/.test(c))
        throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=\\^$|] and strings, got: " + a);
      a: {
        for (var d = { "(": ")", "[": "]" }, e = [], f = 0; f < c.length; f++) {
          var h = c[f];
          if (d[h]) e.push(d[h]);
          else if (el(d, h) && e.pop() != h) {
            c = !1;
            break a;
          }
        }
        c = 0 == e.length;
      }
      if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
      b instanceof jm || (b = om(b));
      a = a + "{" + km(b).replace(/</g, "\\3C ") + "}";
      return xm(a);
    },
    Am = function (a) {
      a = Ul(a);
      return 0 === a.length ? zm : xm(a);
    },
    Bm = function (a) {
      return a instanceof wm && a.constructor === wm ? a.A : "type_error:SafeStyleSheet";
    },
    xm = function (a) {
      return new wm(a, Cm);
    },
    Dm = function (a) {
      this.A = a;
      this.vb = !0;
    },
    Em = function (a) {
      return a instanceof Dm && a.constructor === Dm ? a.A : "type_error:SafeHtml";
    },
    Gm = function (a) {
      var b = Ql();
      a = b ? b.createHTML(a) : a;
      return new Dm(a, Fm);
    },
    Im = function (a, b) {
      var c = Hm("script[nonce]", a.ownerDocument && a.ownerDocument.defaultView);
      c && a.setAttribute(Sf, c);
      a.src = Xl(b);
    },
    Hm = function (a, b) {
      b = (b || F).document;
      return b.querySelector ? ((a = b.querySelector(a)) && (a = a.nonce || a.getAttribute(Sf)) && Jm.test(a) ? a : "") : "";
    },
    Mm = function (a) {
      return -1 != a.indexOf("&") ? ("document" in F ? Km(a) : Lm(a)) : a;
    },
    Km = function (a) {
      var b = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
      var c = F.document.createElement("div");
      return a.replace(Nm, function (d, e) {
        var f = b[d];
        if (f) return f;
        "#" == e.charAt(0) && ((e = Number("0" + e.slice(1))), isNaN(e) || (f = String.fromCharCode(e)));
        if (!f) {
          f = Gm(d + " ");
          if (Om()) for (; c.lastChild; ) c.removeChild(c.lastChild);
          c.innerHTML = Em(f);
          f = c.firstChild.nodeValue.slice(0, -1);
        }
        return (b[d] = f);
      });
    },
    Lm = function (a) {
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
    Pm = function (a) {
      return String(a).replace(/\-([a-z])/g, function (b, c) {
        return c.toUpperCase();
      });
    },
    Qm = function (a) {
      return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function (b, c, d) {
        return c + d.toUpperCase();
      });
    },
    Rm = function (a) {
      return (a = a.exec(vk())) ? a[1] : "";
    },
    Tm = function (a) {
      return 0 <= uk(Sm, a);
    },
    O = function () {
      I.call(this);
      this.T = new ll(this);
      this.Tg = this;
      this.ob = null;
    },
    Um = function (a, b, c, d) {
      b = a.T.A[String(b)];
      if (!b) return !0;
      b = b.concat();
      for (var e = !0, f = 0; f < b.length; ++f) {
        var h = b[f];
        if (h && !h.removed && h.capture == c) {
          var k = h.listener,
            l = h.ia || h.src;
          h.zc && ml(a.T, h);
          e = !1 !== k.call(l, d) && e;
        }
      }
      return e && !d.defaultPrevented;
    },
    Vm = function (a, b) {
      this.D = a;
      this.C = b;
      this.B = 0;
      this.A = null;
    },
    Wm = function (a, b) {
      a.C(b);
      100 > a.B && (a.B++, (b.next = a.A), (a.A = b));
    },
    P = function (a, b) {
      this.x = void 0 !== a ? a : 0;
      this.y = void 0 !== b ? b : 0;
    },
    Xm = function (a, b) {
      return new P(a.x - b.x, a.y - b.y);
    },
    Ym = function (a, b) {
      this.width = a;
      this.height = b;
    },
    Zm = function (a, b) {
      return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1;
    },
    $m = function (a) {
      return new Ym(a.width, a.height);
    },
    R = function (a) {
      return a ? new an(Q(a)) : bn || (bn = new an());
    },
    cn = function (a, b) {
      return typeof b === z ? a.getElementById(b) : b;
    },
    dn = function (a, b, c, d) {
      a = d || a;
      b = b && "*" != b ? String(b).toUpperCase() : "";
      if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
      if (c && a.getElementsByClassName) {
        a = a.getElementsByClassName(c);
        if (b) {
          d = {};
          for (var e = 0, f = 0, h; (h = a[f]); f++) b == h.nodeName && (d[e++] = h);
          d.length = e;
          return d;
        }
        return a;
      }
      a = a.getElementsByTagName(b || "*");
      if (c) {
        d = {};
        for (f = e = 0; (h = a[f]); f++) (b = h.className), typeof b.split == t && J(b.split(/\s+/), c) && (d[e++] = h);
        d.length = e;
        return d;
      }
      return a;
    },
    fn = function (a, b) {
      bl(b, function (c, d) {
        c && typeof c == Xf && c.vb && (c = c.hb());
        "style" == d
          ? (a.style.cssText = c)
          : "class" == d
          ? (a.className = c)
          : "for" == d
          ? (a.htmlFor = c)
          : en.hasOwnProperty(d)
          ? a.setAttribute(en[d], c)
          : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
          ? a.setAttribute(d, c)
          : (a[d] = c);
      });
    },
    hn = function (a) {
      a = a.document;
      a = gn(a) ? a.documentElement : a.body;
      return new Ym(a.clientWidth, a.clientHeight);
    },
    kn = function (a) {
      var b = jn(a);
      a = a.parentWindow || a.defaultView;
      return S && a.pageYOffset != b.scrollTop
        ? new P(b.scrollLeft, b.scrollTop)
        : new P(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
    },
    jn = function (a) {
      return a.scrollingElement ? a.scrollingElement : !ln && gn(a) ? a.documentElement : a.body || a.documentElement;
    },
    mn = function (a) {
      return a ? a.parentWindow || a.defaultView : window;
    },
    on = function (a, b, c) {
      return nn(document, arguments);
    },
    nn = function (a, b) {
      var c = b[1],
        d = pn(a, String(b[0]));
      c && (typeof c === z ? (d.className = c) : Array.isArray(c) ? (d.className = c.join(" ")) : fn(d, c));
      2 < b.length && qn(a, d, b, 2);
      return d;
    },
    qn = function (a, b, c, d) {
      function e(k) {
        k && b.appendChild(typeof k === z ? a.createTextNode(k) : k);
      }
      for (; d < c.length; d++) {
        var f = c[d];
        if (!Mj(f) || (Nj(f) && 0 < f.nodeType)) e(f);
        else {
          a: {
            if (f && typeof f.length == Tf) {
              if (Nj(f)) {
                var h = typeof f.item == t || typeof f.item == z;
                break a;
              }
              if (typeof f === t) {
                h = typeof f.item == t;
                break a;
              }
            }
            h = !1;
          }
          T(h ? ik(f) : f, e);
        }
      }
    },
    pn = function (a, b) {
      b = String(b);
      "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
      return a.createElement(b);
    },
    gn = function (a) {
      return "CSS1Compat" == a.compatMode;
    },
    rn = function (a) {
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
        case qa:
        case pa:
        case "ISINDEX":
        case "KEYGEN":
        case "LINK":
        case "NOFRAMES":
        case "NOSCRIPT":
        case "META":
        case "OBJECT":
        case "PARAM":
        case Ha:
        case "SOURCE":
        case "STYLE":
        case "TRACK":
        case "WBR":
          return !1;
      }
      return !0;
    },
    sn = function (a) {
      for (var b; (b = a.firstChild); ) a.removeChild(b);
    },
    tn = function (a) {
      return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    },
    un = function (a) {
      return void 0 != a.children
        ? a.children
        : Array.prototype.filter.call(a.childNodes, function (b) {
            return 1 == b.nodeType;
          });
    },
    vn = function (a, b) {
      if (!a || !b) return !1;
      if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
      if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
      for (; b && a != b; ) b = b.parentNode;
      return b == a;
    },
    yn = function (a, b) {
      if (a == b) return 0;
      if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
      if (S && !Tk(9)) {
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
          ? wn(a, b)
          : !c && vn(e, b)
          ? -1 * xn(a, b)
          : !d && vn(f, a)
          ? xn(b, a)
          : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex);
      }
      d = Q(a);
      c = d.createRange();
      c.selectNode(a);
      c.collapse(!0);
      a = d.createRange();
      a.selectNode(b);
      a.collapse(!0);
      return c.compareBoundaryPoints(F.Range.START_TO_END, a);
    },
    xn = function (a, b) {
      var c = a.parentNode;
      if (c == b) return -1;
      for (; b.parentNode != c; ) b = b.parentNode;
      return wn(b, a);
    },
    wn = function (a, b) {
      for (; (b = b.previousSibling); ) if (b == a) return -1;
      return 1;
    },
    zn = function (a) {
      var b,
        c = arguments.length;
      if (!c) return null;
      if (1 == c) return arguments[0];
      var d = [],
        e = Infinity;
      for (b = 0; b < c; b++) {
        for (var f = [], h = arguments[b]; h; ) f.unshift(h), (h = h.parentNode);
        d.push(f);
        e = Math.min(e, f.length);
      }
      f = null;
      for (b = 0; b < e; b++) {
        h = d[0][b];
        for (var k = 1; k < c; k++) if (h != d[k][b]) return f;
        f = h;
      }
      return f;
    },
    Q = function (a) {
      return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    },
    An = function (a) {
      return a.contentDocument || a.contentWindow.document;
    },
    Bn = function (a, b) {
      if ("textContent" in a) a.textContent = b;
      else if (3 == a.nodeType) a.data = String(b);
      else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild; ) a.removeChild(a.lastChild);
        a.firstChild.data = String(b);
      } else sn(a), a.appendChild(Q(a).createTextNode(String(b)));
    },
    Cn = function (a) {
      a = a.tabIndex;
      return typeof a === Tf && 0 <= a && 32768 > a;
    },
    En = function (a) {
      var b = [];
      Dn(a, b, !1);
      return b.join("");
    },
    Dn = function (a, b, c) {
      if (!(a.nodeName in Fn))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in Gn) b.push(Gn[a.nodeName]);
        else for (a = a.firstChild; a; ) Dn(a, b, c), (a = a.nextSibling);
    },
    Hn = function (a) {
      try {
        var b = a && a.activeElement;
        return b && b.nodeName ? b : null;
      } catch (c) {
        return null;
      }
    },
    an = function (a) {
      this.A = a || F.document || document;
    },
    Jn = function (a) {
      return hn(In(a) || window);
    },
    Kn = function (a, b) {
      return pn(a.A, b);
    },
    Ln = function (a, b) {
      return a.A.createTextNode(String(b));
    },
    Mn = function (a, b) {
      a = a.A;
      for (var c = pn(a, "TABLE"), d = c.appendChild(pn(a, "TBODY")), e = 0; 1 > e; e++) {
        for (var f = pn(a, "TR"), h = 0; h < b; h++) f.appendChild(pn(a, "TD"));
        d.appendChild(f);
      }
      return c;
    },
    In = function (a) {
      a = a.A;
      return a.parentWindow || a.defaultView;
    },
    Pn = function (a, b) {
      var c = a;
      b && (c = E(a, b));
      typeof F.setImmediate !== t || (F.Window && F.Window.prototype && !Ck() && F.Window.prototype.setImmediate == F.setImmediate)
        ? (Nn || (Nn = On()), Nn(c))
        : F.setImmediate(c);
    },
    On = function () {
      var a = F.MessageChannel;
      "undefined" === typeof a &&
        "undefined" !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        !L("Presto") &&
        (a = function () {
          var e = pn(document, pa);
          e.style.display = x;
          document.documentElement.appendChild(e);
          var f = e.contentWindow;
          e = f.document;
          e.open();
          e.close();
          var h = "callImmediate" + Math.random(),
            k = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
          e = E(function (l) {
            if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage();
          }, this);
          f.addEventListener("message", e, !1);
          this.port1 = {};
          this.port2 = {
            postMessage: function () {
              f.postMessage(h, k);
            }
          };
        });
      if ("undefined" !== typeof a && !Bk()) {
        var b = new a(),
          c = {},
          d = c;
        b.port1.onmessage = function () {
          if (void 0 !== c.next) {
            c = c.next;
            var e = c.pe;
            c.pe = null;
            e();
          }
        };
        return function (e) {
          d.next = { pe: e };
          d = d.next;
          b.port2.postMessage(0);
        };
      }
      return function (e) {
        F.setTimeout(e, 0);
      };
    },
    Qn = function (a) {
      F.setTimeout(function () {
        throw a;
      }, 0);
    },
    Rn = function () {
      this.B = this.A = null;
    },
    Sn = function () {
      this.next = this.A = this.B = null;
    },
    Xn = function (a, b) {
      Tn || Un();
      Vn || (Tn(), (Vn = !0));
      Wn.add(a, b);
    },
    Un = function () {
      if (F.Promise && F.Promise.resolve) {
        var a = F.Promise.resolve(void 0);
        Tn = function () {
          a.then(Yn);
        };
      } else
        Tn = function () {
          Pn(Yn);
        };
    },
    Yn = function () {
      for (var a; (a = Wn.remove()); ) {
        try {
          a.B.call(a.A);
        } catch (b) {
          Qn(b);
        }
        Wm(Zn, a);
      }
      Vn = !1;
    },
    $n = function (a) {
      if (!a) return !1;
      try {
        return !!a.$goog_Thenable;
      } catch (b) {
        return !1;
      }
    },
    bo = function (a) {
      this.A = 0;
      this.H = void 0;
      this.C = this.B = this.D = null;
      this.G = this.F = !1;
      if (a != Ol)
        try {
          var b = this;
          a.call(
            void 0,
            function (c) {
              ao(b, 2, c);
            },
            function (c) {
              ao(b, 3, c);
            }
          );
        } catch (c) {
          ao(this, 3, c);
        }
    },
    co = function () {
      this.next = this.D = this.B = this.C = this.A = null;
      this.G = !1;
    },
    fo = function (a, b, c) {
      var d = eo.get();
      d.C = a;
      d.B = b;
      d.D = c;
      return d;
    },
    go = function (a, b) {
      if (0 == a.A)
        if (a.D) {
          var c = a.D;
          if (c.B) {
            for (var d = 0, e = null, f = null, h = c.B; h && (h.G || (d++, h.A == a && (e = h), !(e && 1 < d))); h = h.next) e || (f = h);
            e &&
              (0 == c.A && 1 == d ? go(c, b) : (f ? ((d = f), d.next == c.C && (c.C = d), (d.next = d.next.next)) : ho(c), io(c, e, 3, b)));
          }
          a.D = null;
        } else ao(a, 3, b);
    },
    ko = function (a, b) {
      a.B || (2 != a.A && 3 != a.A) || jo(a);
      a.C ? (a.C.next = b) : (a.B = b);
      a.C = b;
    },
    mo = function (a, b, c, d) {
      var e = fo(null, null, null);
      e.A = new bo(function (f, h) {
        e.C = b
          ? function (k) {
              try {
                var l = b.call(d, k);
                f(l);
              } catch (m) {
                h(m);
              }
            }
          : f;
        e.B = c
          ? function (k) {
              try {
                var l = c.call(d, k);
                void 0 === l && k instanceof lo ? h(k) : f(l);
              } catch (m) {
                h(m);
              }
            }
          : h;
      });
      e.A.D = a;
      ko(a, e);
      return e.A;
    },
    ao = function (a, b, c) {
      if (0 == a.A) {
        a === c && ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
        a.A = 1;
        a: {
          var d = c,
            e = a.I,
            f = a.T;
          if (d instanceof bo) {
            ko(d, fo(e || Ol, f || null, a));
            var h = !0;
          } else if ($n(d)) d.then(e, f, a), (h = !0);
          else {
            if (Nj(d))
              try {
                var k = d.then;
                if (typeof k === t) {
                  no(d, k, e, f, a);
                  h = !0;
                  break a;
                }
              } catch (l) {
                f.call(a, l);
                h = !0;
                break a;
              }
            h = !1;
          }
        }
        h || ((a.H = c), (a.A = b), (a.D = null), jo(a), 3 != b || c instanceof lo || oo(a, c));
      }
    },
    no = function (a, b, c, d, e) {
      function f(l) {
        k || ((k = !0), d.call(e, l));
      }
      function h(l) {
        k || ((k = !0), c.call(e, l));
      }
      var k = !1;
      try {
        b.call(a, h, f);
      } catch (l) {
        f(l);
      }
    },
    jo = function (a) {
      a.F || ((a.F = !0), Xn(a.S, a));
    },
    ho = function (a) {
      var b = null;
      a.B && ((b = a.B), (a.B = b.next), (b.next = null));
      a.B || (a.C = null);
      return b;
    },
    io = function (a, b, c, d) {
      if (3 == c && b.B && !b.G) for (; a && a.G; a = a.D) a.G = !1;
      if (b.A) (b.A.D = null), po(b, c, d);
      else
        try {
          b.G ? b.C.call(b.D) : po(b, c, d);
        } catch (e) {
          qo.call(null, e);
        }
      Wm(eo, b);
    },
    po = function (a, b, c) {
      2 == b ? a.C.call(a.D, c) : a.B && a.B.call(a.D, c);
    },
    oo = function (a, b) {
      a.G = !0;
      Xn(function () {
        a.G && qo.call(null, b);
      });
    },
    lo = function (a) {
      Zj.call(this, a);
    },
    ro = function (a, b, c) {
      if (typeof a === t) c && (a = E(a, c));
      else if (a && typeof a.handleEvent == t) a = E(a.handleEvent, a);
      else throw Error("Invalid listener argument");
      return 2147483647 < Number(b) ? -1 : F.setTimeout(a, b || 0);
    },
    to = function () {
      I.call(this);
      this.A = so;
      this.B = Kl(mg);
    },
    uo = function (a, b, c, d) {
      this.top = a;
      this.right = b;
      this.bottom = c;
      this.left = d;
    },
    vo = function (a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    },
    wo = function (a) {
      return new vo(a.left, a.top, a.right - a.left, a.bottom - a.top);
    },
    yo = function (a, b, c) {
      if (typeof b === z) (b = xo(a, b)) && (a.style[b] = c);
      else
        for (var d in b) {
          c = a;
          var e = b[d],
            f = xo(c, d);
          f && (c.style[f] = e);
        }
    },
    xo = function (a, b) {
      var c = zo[b];
      if (!c) {
        var d = Pm(b);
        c = d;
        void 0 === a.style[d] && ((d = (ln ? "Webkit" : M ? "Moz" : S ? "ms" : null) + Qm(d)), void 0 !== a.style[d] && (c = d));
        zo[b] = c;
      }
      return c;
    },
    Ao = function (a, b) {
      var c = Q(a);
      return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null))
        ? a[b] || a.getPropertyValue(b) || ""
        : "";
    },
    Bo = function (a, b) {
      return Ao(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || (a.style && a.style[b]);
    },
    Do = function (a, b) {
      if (b instanceof P) {
        var c = b.x;
        b = b.y;
      } else (c = b), (b = void 0);
      a.style.left = Co(c, !1);
      a.style.top = Co(b, !1);
    },
    Eo = function (a) {
      return new P(a.offsetLeft, a.offsetTop);
    },
    Fo = function (a) {
      try {
        return a.getBoundingClientRect();
      } catch (b) {
        return { left: 0, top: 0, right: 0, bottom: 0 };
      }
    },
    Go = function (a) {
      if (S && !Tk(8)) return a.offsetParent;
      var b = Q(a),
        c = Bo(a, lg),
        d = "fixed" == c || c == Ma;
      for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (
          (11 == a.nodeType && a.host && (a = a.host),
          (c = Bo(a, lg)),
          (d = d && "static" == c && a != b.documentElement && a != b.body),
          !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Ma || "relative" == c))
        )
          return a;
      return null;
    },
    Io = function (a) {
      for (var b = new uo(0, Infinity, Infinity, 0), c = R(a), d = c.A.body, e = c.A.documentElement, f = jn(c.A); (a = Go(a)); )
        if (!((S && 0 == a.clientWidth) || (ln && 0 == a.clientHeight && a == d)) && a != d && a != e && Bo(a, "overflow") != Ki) {
          var h = Ho(a),
            k = new P(a.clientLeft, a.clientTop);
          h.x += k.x;
          h.y += k.y;
          b.top = Math.max(b.top, h.y);
          b.right = Math.min(b.right, h.x + a.clientWidth);
          b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
          b.left = Math.max(b.left, h.x);
        }
      d = f.scrollLeft;
      f = f.scrollTop;
      b.left = Math.max(b.left, d);
      b.top = Math.max(b.top, f);
      c = Jn(c);
      b.right = Math.min(b.right, d + c.width);
      b.bottom = Math.min(b.bottom, f + c.height);
      return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
    },
    Ho = function (a) {
      var b = Q(a),
        c = new P(0, 0);
      var d = b ? Q(b) : document;
      d = !S || Tk(9) || gn(R(d).A) ? d.documentElement : d.body;
      if (a == d) return c;
      a = Fo(a);
      b = kn(R(b).A);
      c.x = a.left + b.x;
      c.y = a.top + b.y;
      return c;
    },
    Jo = function (a) {
      a = Fo(a);
      return new P(a.left, a.top);
    },
    Ko = function (a) {
      if (1 == a.nodeType) return Jo(a);
      a = a.changedTouches ? a.changedTouches[0] : a;
      return new P(a.clientX, a.clientY);
    },
    Co = function (a, b) {
      typeof a == Tf && (a = (b ? Math.round(a) : a) + Dg);
      return a;
    },
    Mo = function (a) {
      var b = Lo;
      if (Bo(a, "display") != x) return b(a);
      var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
      c.visibility = hd;
      c.position = Ma;
      c.display = "inline";
      a = b(a);
      c.display = d;
      c.position = f;
      c.visibility = e;
      return a;
    },
    Lo = function (a) {
      var b = a.offsetWidth,
        c = a.offsetHeight,
        d = ln && !b && !c;
      return (void 0 === b || d) && a.getBoundingClientRect ? ((a = Fo(a)), new Ym(a.right - a.left, a.bottom - a.top)) : new Ym(b, c);
    },
    No = function (a, b) {
      a.style.display = b ? "" : x;
    },
    Po = function (a, b) {
      b = R(b);
      var c = b.A;
      if (S && c.createStyleSheet) (b = c.createStyleSheet()), Oo(b, a);
      else {
        c = dn(b.A, "HEAD")[0];
        if (!c) {
          var d = dn(b.A, "BODY")[0];
          c = b.O("HEAD");
          d.parentNode.insertBefore(c, d);
        }
        d = b.O("STYLE");
        var e;
        (e = Hm('style[nonce],link[rel="stylesheet"][nonce]')) && d.setAttribute(Sf, e);
        Oo(d, a);
        b.V(c, d);
      }
    },
    Oo = function (a, b) {
      b = Bm(b);
      S && void 0 !== a.cssText ? (a.cssText = b) : F.trustedTypes ? Bn(a, b) : (a.innerHTML = b);
    },
    Qo = function (a) {
      return Lg == Bo(a, $b);
    },
    So = function (a, b) {
      b = b ? null : a.getElementsByTagName("*");
      if (Ro) {
        var c = x;
        a.style && (a.style[Ro] = c);
        if (b) {
          a = 0;
          for (var d; (d = b[a]); a++) d.style && (d.style[Ro] = c);
        }
      } else if (S && ((c = "on"), a.setAttribute("unselectable", c), b)) for (a = 0; (d = b[a]); a++) d.setAttribute("unselectable", c);
    },
    Uo = function (a, b) {
      To(a, b, "content-box");
    },
    To = function (a, b, c) {
      a = a.style;
      M ? (a.MozBoxSizing = c) : ln ? (a.WebkitBoxSizing = c) : (a.boxSizing = c);
      a.width = Math.max(b.width, 0) + Dg;
      a.height = Math.max(b.height, 0) + Dg;
    },
    Vo = function (a, b) {
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
    Wo = function (a, b) {
      return (b = a.currentStyle ? a.currentStyle[b] : null) ? Vo(a, b) : 0;
    },
    $o = function (a) {
      var b = Bo(a, "fontSize");
      var c = ((c = b.match(Xo)) && c[0]) || null;
      if (b && Dg == c) return parseInt(b, 10);
      if (S) {
        if (String(c) in Yo) return Vo(a, b);
        if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in Zo)
          return (a = a.parentNode), (c = Bo(a, "fontSize")), Vo(a, b == c ? "1em" : b);
      }
      c = on(p, { style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;" });
      a.appendChild(c);
      b = c.offsetHeight;
      tn(c);
      return b;
    },
    dp = function (a, b, c, d, e, f, h, k, l) {
      var m = ap(c);
      var n = Ho(a);
      var y = Mo(a);
      n = new vo(n.x, n.y, y.width, y.height);
      if ((y = Io(a))) {
        var B = wo(y);
        y = Math.max(n.left, B.left);
        var ia = Math.min(n.left + n.width, B.left + B.width);
        if (y <= ia) {
          var Ba = Math.max(n.top, B.top);
          B = Math.min(n.top + n.height, B.top + B.height);
          Ba <= B && ((n.left = y), (n.top = Ba), (n.width = ia - y), (n.height = B - Ba));
        }
      }
      y = R(a);
      Ba = R(c);
      if (y.A != Ba.A) {
        ia = y.A.body;
        Ba = In(Ba);
        B = new P(0, 0);
        var ra = mn(Q(ia));
        if (Qk(ra, "parent")) {
          var ed = ia;
          do {
            var tu = ra == Ba ? Ho(ed) : Jo(ed);
            B.x += tu.x;
            B.y += tu.y;
          } while (ra && ra != Ba && ra != ra.parent && (ed = ra.frameElement) && (ra = ra.parent));
        }
        ia = Xm(B, Ho(ia));
        !S || Tk(9) || gn(y.A) || (ia = Xm(ia, kn(y.A)));
        n.left += ia.x;
        n.top += ia.y;
      }
      a = bp(a, b);
      b = n.left;
      a & 4 ? (b += n.width) : a & 2 && (b += n.width / 2);
      b = new P(b, n.top + (a & 1 ? n.height : 0));
      b = Xm(b, m);
      e && ((b.x += (a & 4 ? -1 : 1) * e.x), (b.y += (a & 1 ? -1 : 1) * e.y));
      if (h)
        if (l) var Cb = l;
        else if ((Cb = Io(c))) (Cb.top -= m.y), (Cb.right -= m.x), (Cb.bottom -= m.y), (Cb.left -= m.x);
      return cp(b, c, d, f, Cb, h, k);
    },
    ap = function (a) {
      if ((a = a.offsetParent)) {
        var b = "HTML" == a.tagName || "BODY" == a.tagName;
        if (!b || "static" != Bo(a, lg)) {
          var c = Ho(a);
          if (!b) {
            b = Qo(a);
            var d;
            if ((d = b)) {
              d = ep && Tm(10);
              var e;
              if ((e = fp)) e = 0 <= uk(gp, 10);
              var f = hp && Tm(85);
              d = M || d || e || f;
            }
            b = d ? -a.scrollLeft : b && !ip && Bo(a, "overflowX") != Ki ? a.scrollWidth - a.clientWidth - a.scrollLeft : a.scrollLeft;
            c = Xm(c, new P(b, a.scrollTop));
          }
        }
      }
      return c || new P();
    },
    cp = function (a, b, c, d, e, f, h) {
      a = new P(a.x, a.y);
      var k = bp(b, c);
      c = Mo(b);
      h = h ? $m(h) : $m(c);
      a = new P(a.x, a.y);
      h = $m(h);
      var l = 0;
      if (d || 0 != k)
        k & 4 ? (a.x -= h.width + (d ? d.right : 0)) : k & 2 ? (a.x -= h.width / 2) : d && (a.x += d.left),
          k & 1 ? (a.y -= h.height + (d ? d.bottom : 0)) : d && (a.y += d.top);
      f &&
        (e
          ? ((d = a),
            (k = 0),
            65 == (f & 65) && (d.x < e.left || d.x >= e.right) && (f &= -2),
            132 == (f & 132) && (d.y < e.top || d.y >= e.bottom) && (f &= -5),
            d.x < e.left && f & 1 && ((d.x = e.left), (k |= 1)),
            f & 16 &&
              ((l = d.x),
              d.x < e.left && ((d.x = e.left), (k |= 4)),
              d.x + h.width > e.right &&
                ((h.width = Math.min(e.right - d.x, l + h.width - e.left)), (h.width = Math.max(h.width, 0)), (k |= 4))),
            d.x + h.width > e.right && f & 1 && ((d.x = Math.max(e.right - h.width, e.left)), (k |= 1)),
            f & 2 && (k |= (d.x < e.left ? 16 : 0) | (d.x + h.width > e.right ? 32 : 0)),
            d.y < e.top && f & 4 && ((d.y = e.top), (k |= 2)),
            f & 32 &&
              ((l = d.y),
              d.y < e.top && ((d.y = e.top), (k |= 8)),
              d.y + h.height > e.bottom &&
                ((h.height = Math.min(e.bottom - d.y, l + h.height - e.top)), (h.height = Math.max(h.height, 0)), (k |= 8))),
            d.y + h.height > e.bottom && f & 4 && ((d.y = Math.max(e.bottom - h.height, e.top)), (k |= 2)),
            f & 8 && (k |= (d.y < e.top ? 64 : 0) | (d.y + h.height > e.bottom ? 128 : 0)),
            (e = k))
          : (e = 256),
        (l = e));
      e = new vo(0, 0, 0, 0);
      e.left = a.x;
      e.top = a.y;
      e.width = h.width;
      e.height = h.height;
      a = l;
      if (a & 496) return a;
      Do(b, new P(e.left, e.top));
      h = new Ym(e.width, e.height);
      Zm(c, h) || To(b, h, "border-box");
      return a;
    },
    bp = function (a, b) {
      return (b & 8 && Qo(a) ? b ^ 4 : b) & -9;
    },
    jp = function (a) {
      K.call(this, "bind");
      this.C = a;
    },
    kp = function (a) {
      K.call(this, "visi");
      this.C = a;
    },
    lp = function () {},
    mp = function (a, b, c) {
      this.A = a;
      this.B = b;
      this.G = c;
    },
    np = function () {},
    U = function (a) {
      O.call(this);
      this.A = a || R();
      this.Ib = op;
      this.fa = null;
      this.Oa = !1;
      this.D = null;
      this.U = void 0;
      this.G = this.X = null;
    },
    pp = function (a, b) {
      switch (a) {
        case 1:
          return b ? "disable" : "enable";
        case 2:
          return b ? "highlight" : "unhighlight";
        case 4:
          return b ? "activate" : "deactivate";
        case 8:
          return b ? "select" : "unselect";
        case 16:
          return b ? "check" : "uncheck";
        case 32:
          return b ? Bc : jb;
        case 64:
          return b ? "open" : "close";
      }
      throw Error("Invalid component state");
    },
    qp = function (a) {
      a.U || (a.U = new N(a));
      return a.U;
    },
    rp = function (a) {
      null == a.Ib && (a.Ib = Qo(a.Oa ? a.D : a.A.A.body));
      return a.Ib;
    },
    sp = function (a, b) {
      return a.G ? a.G[b] || null : null;
    },
    tp = function (a, b, c) {
      a.G && a.G.forEach(b, c);
    },
    up = function (a, b) {
      return a.G && b ? a.G.indexOf(b) : -1;
    },
    wp = function (a) {
      U.call(this, vp);
      this.K = a;
      this.R = this.ra = !1;
      this.N = null;
      this.Ze = !0;
      this.W = "";
      this.ca = this.Ua = !1;
      this.H = new N(this);
    },
    xp = function (a, b, c) {
      a.ra = !c;
      a.R = b;
      a.Jb = c ? a.A.L(c) : void 0;
      a.ka(a.Jb);
      a.ra && ((a.L().style.position = Ma), a.Ve());
      a.W = a.L().style.display;
    },
    yp = function () {
      O.apply(this, arguments);
    },
    Ap = function (a, b) {
      a.J(b);
      zp.forEach(function (c) {
        c.J(b);
      });
    },
    Ep = function (a, b, c, d, e, f) {
      if (Uk && e) return Bp(a);
      if (e && !d) return !1;
      if (!M) {
        typeof b === Tf && (b = Cp(b));
        var h = 17 == b || 18 == b || (Uk && 91 == b);
        if (((!c || Uk) && h) || (Uk && 16 == b && (d || f))) return !1;
      }
      if ((ln || Dp) && d && c)
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
      if (S && d && b == a) return !1;
      switch (a) {
        case 13:
          return M ? (f || e ? !1 : !(c && d)) : !0;
        case 27:
          return !(ln || Dp || M);
      }
      return M && (d || e || f) ? !1 : Bp(a);
    },
    Bp = function (a) {
      if ((48 <= a && 57 >= a) || (96 <= a && 106 >= a) || (65 <= a && 90 >= a) || ((ln || Dp) && 0 == a)) return !0;
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
          return M;
        default:
          return !1;
      }
    },
    Cp = function (a) {
      if (M) a = Fp(a);
      else if (Uk && ln)
        switch (a) {
          case 93:
            a = 91;
        }
      return a;
    },
    Fp = function (a) {
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
    Gp = function (a, b, c) {
      K.call(this, a, c);
      this.C = b;
    },
    Hp = function (a, b, c, d, e, f, h, k, l, m) {
      this.A = a;
      this.G = b;
      this.I = c;
      this.D = d;
      this.C = e;
      this.F = f;
      this.H = h;
      this.S = k;
      this.B = l;
      this.T = m;
    },
    Np = function (a) {
      var b = a.A;
      b = (b = b && "composed" in b && b && "composedPath" in b && b.composed && b.composedPath()) && 0 < b.length ? b[0] : a.target;
      return Ip(
        Jp(
          Kp(
            Lp(
              new Mp()
                .keyCode(a.keyCode || 0)
                .key(a.key || "")
                .shiftKey(!!a.shiftKey)
                .altKey(!!a.altKey)
                .ctrlKey(!!a.ctrlKey)
                .metaKey(!!a.metaKey)
                .target(a.target),
              b
            ),
            function () {
              return a.preventDefault();
            }
          ),
          function () {
            return a.stopPropagation();
          }
        )
      );
    },
    Mp = function () {
      this.D = null;
      this.C = "";
      this.I = this.F = this.H = this.T = this.G = this.B = this.A = this.S = null;
    },
    Lp = function (a, b) {
      a.H = b;
      return a;
    },
    Kp = function (a, b) {
      a.F = b;
      return a;
    },
    Jp = function (a, b) {
      a.I = b;
      return a;
    },
    Ip = function (a) {
      return new Hp(a.D, a.C, a.S, a.A, a.B, a.G, a.T, a.H, a.F, a.I);
    },
    Rp = function (a) {
      O.call(this);
      this.D = this.B = {};
      this.G = 0;
      this.N = kl(Op);
      this.K = kl(Pp);
      this.H = this.I = !1;
      this.F = null;
      this.A = a;
      ql(this.A, u, this.ue, void 0, this);
      ql(this.A, yh, this.Be, void 0, this);
      Qp && (ql(this.A, v, this.De, void 0, this), ql(this.A, zh, this.Ee, void 0, this));
      ql(this.A, te, this.ve, void 0, this);
      ql(this.A, Ah, this.Ce, void 0, this);
    },
    Sp = function (a) {
      this.A = a || null;
      this.next = a ? null : {};
    },
    Vp = function (a, b) {
      if (typeof b[a] === z)
        a = Tp(b[a]).map(function (e) {
          return Up(e.key || "", e.keyCode, e.modifiers);
        });
      else {
        var c = b,
          d = a;
        Array.isArray(b[a]) && ((c = b[a]), (d = 0));
        for (a = []; d < c.length; d += 2) a.push(Up("", c[d], c[d + 1]));
      }
      return a;
    },
    Tp = function (a) {
      a = a
        .replace(/[ +]*\+[ +]*/g, "+")
        .replace(/[ ]+/g, " ")
        .toLowerCase();
      a = a.split(" ");
      for (var b = [], c, d = 0; (c = a[d]); d++) {
        var e = c.split("+"),
          f = null,
          h = null;
        c = 0;
        for (var k, l = 0; (k = e[l]); l++) {
          switch (k) {
            case "shift":
              c |= 1;
              continue;
            case "ctrl":
              c |= 2;
              continue;
            case "alt":
              c |= 4;
              continue;
            case "meta":
              c |= 8;
              continue;
          }
          e = void 0;
          f = k;
          if (!Wp) {
            h = {};
            for (e in Xp) h[Xp[e]] = Cp(parseInt(e, 10));
            Wp = h;
          }
          h = Wp[f];
          f = k;
          break;
        }
        b.push({ key: f, keyCode: h, modifiers: c });
      }
      return b;
    },
    Yp = function (a, b) {
      32 == a.F && 32 == b.A && (0, b.B)();
      a.F = null;
    },
    Zp = function (a) {
      return Qp && a.C && a.D;
    },
    $p = function (a, b, c) {
      var d = b.shift();
      d.forEach(function (e) {
        if ((e = a[e]) && (0 == b.length || e.A)) throw Error("Keyboard shortcut conflicts with existing shortcut: " + e.A);
      });
      b.length
        ? d.forEach(function (e) {
            e = e.toString();
            var f = new Sp();
            e = e in a ? a[e] : (a[e] = f);
            $p(e.next, b.slice(0), c);
          })
        : d.forEach(function (e) {
            a[e] = new Sp(c);
          });
    },
    aq = function (a, b) {
      b.shift().forEach(function (c) {
        var d = a[c];
        d && (0 == b.length ? d.A && delete a[c] : d.next && (aq(d.next, b.slice(0)), fl(d.next) && delete a[c]));
      });
    },
    bq = function (a, b) {
      for (var c = 0; c < b.length; c++) {
        var d = a[b[c]];
        if (d) return d;
      }
    },
    cq = function (a, b, c) {
      for (; 0 < c.length && b; ) {
        var d = c.shift();
        if ((d = bq(b, d)) && ((0 == c.length && d.A) || cq(a, d.next, c.slice(0)))) return !0;
      }
      return !1;
    },
    Up = function (a, b, c) {
      c = c || 0;
      b = ["c_" + b + "_" + c];
      "" != a && b.push("n_" + a + "_" + c);
      return b;
    },
    dq = function (a, b, c) {
      a: {
        var d = b.A;
        if ("" != b.G) {
          var e = b.G;
          if ("Control" == e || "Shift" == e || "Meta" == e || "AltGraph" == e) {
            d = !1;
            break a;
          }
        } else if (16 == d || 17 == d || 18 == d) {
          d = !1;
          break a;
        }
        e = b.S;
        var f = e.tagName == Ka || e.tagName == qa || "BUTTON" == e.tagName || "SELECT" == e.tagName,
          h = !f && (e.isContentEditable || (e.ownerDocument && "on" == e.ownerDocument.designMode));
        d =
          (!f && !h) || a.N[d] || a.H
            ? !0
            : h
            ? !1
            : b.D || b.C || b.F
            ? !0
            : e.tagName == qa && a.K[e.type]
            ? 13 == d
            : e.tagName == qa || "BUTTON" == e.tagName
            ? 32 != d
            : !1;
      }
      if (d)
        if (!c && Zp(b)) a.C = !1;
        else {
          c = Cp(b.A);
          d = Up(b.G, c, (b.I ? 1 : 0) | (b.C ? 2 : 0) | (b.D ? 4 : 0) | (b.F ? 8 : 0));
          e = bq(a.D, d);
          if (!e || 1500 <= Date.now() - a.G) (a.D = a.B), (a.G = Date.now());
          (e = bq(a.D, d)) && e.next && ((a.D = e.next), (a.G = Date.now()));
          e &&
            (e.next
              ? (0, b.B)()
              : ((a.D = a.B),
                (a.G = Date.now()),
                (0, b.B)(),
                a.I && (0, b.T)(),
                (d = e.A),
                (e = a.J(new Gp(Xg, d, b.H))),
                (e &= a.J(new Gp(Yg + d, d, b.H))) || (0, b.B)(),
                M && (a.F = c)));
        }
    },
    fq = function (a) {
      O.call(this);
      this.G = !1;
      this.B = {};
      this.C = 0;
      this.D = new N(this);
      this.A = new Rp(a);
      this.A.ua(this);
      this.D.listen(a, u, this.Mg, eq);
      this.D.listen(a, v, this.Ng, eq);
      this.D.listen(a, te, this.Og, eq);
    },
    gq = function (a) {
      return (
        (a.shiftKey || 16 == a.keyCode ? 1 : 0) |
        (a.ctrlKey || 17 == a.keyCode ? 2 : 0) |
        (a.altKey || 18 == a.keyCode ? 4 : 0) |
        (a.metaKey || 91 == a.keyCode ? 8 : 0)
      );
    },
    hq = function (a) {
      a = Tp(a);
      if (1 == a.length) {
        a = a[0];
        var b = a.keyCode;
        if (!b || 1 & a.modifiers)
          return (
            (a.keyCode = 1 & a.modifiers ? 16 : 4 & a.modifiers ? 18 : 8 & a.modifiers ? 91 : 17),
            ((b || a.keyCode) & 255) | (a.modifiers << 8)
          );
      }
    },
    iq = function (a) {
      I.call(this);
      this.D = a;
      this.A = {};
      this.B = {};
      this.C = {};
      this.G = {};
    },
    kq = function (a, b) {
      b = b.replace("{APP}", jq);
      b = b.replace("{CODE}", a.Od);
      var c = new Image();
      a.G[a.vd] = c;
      a.hd || (c.onload = c.onerror = E(a.Lg, a, a.vd));
      a.vd++;
      c.src = b;
    },
    lq = function (a) {
      return Array.prototype.slice.call(a);
    },
    oq = function (a) {
      var b = mq(a);
      1 !== (b & 1) && (Object.isFrozen(a) && (a = lq(a)), nq(a, b | 1));
    },
    qq = function (a) {
      pq(a, 1);
      return a;
    },
    rq = function (a, b) {
      nq(b, (a | 0) & -255);
    },
    sq = function (a, b) {
      nq(b, (a | 34) & -221);
    },
    tq = function (a) {
      a = (a >> 11) & 1023;
      return 0 === a ? 536870912 : a;
    },
    uq = function (a) {
      return null !== a && typeof a === Xf && !Array.isArray(a) && a.constructor === Object;
    },
    vq = function (a) {
      return a;
    },
    wq = function (a) {
      if (null == a) return a;
      if (typeof a === z) {
        if (!a) return;
        a = +a;
      }
      if (typeof a === Tf) return a;
    },
    xq = function (a) {
      return null == a || typeof a === z ? a : void 0;
    },
    Aq = function (a, b, c) {
      null == a && (a = yq);
      yq = void 0;
      if (null == a) {
        var d = 96;
        c ? ((a = [c]), (d |= 512)) : (a = []);
        b && (d = (d & -2095105) | ((b & 1023) << 11));
      } else {
        if (!Array.isArray(a)) throw Error();
        d = mq(a);
        if (d & 64) return a;
        d |= 64;
        if (c && ((d |= 512), c !== a[0])) throw Error();
        a: {
          c = a;
          var e = c.length;
          if (e) {
            var f = e - 1,
              h = c[f];
            if (uq(h)) {
              d |= 256;
              b = +!!(d & 512) - 1;
              e = f - b;
              1024 <= e && (zq(c, b, h), (e = 1023));
              d = (d & -2095105) | ((e & 1023) << 11);
              break a;
            }
          }
          b &&
            ((h = +!!(d & 512) - 1),
            (b = Math.max(b, e - h)),
            1024 < b && (zq(c, h, {}), (d |= 256), (b = 1023)),
            (d = (d & -2095105) | ((b & 1023) << 11)));
        }
      }
      nq(a, d);
      return a;
    },
    zq = function (a, b, c) {
      for (var d = 1023 + b, e = a.length, f = d; f < e; f++) {
        var h = a[f];
        null != h && h !== c && (c[f - b] = h);
      }
      a.length = d + 1;
      a[d] = c;
    },
    Fq = function (a) {
      switch (typeof a) {
        case Tf:
          return isFinite(a) ? a : String(a);
        case "boolean":
          return a ? 1 : 0;
        case Xf:
          if (a && !Array.isArray(a) && Bq && null != a && a instanceof Uint8Array) {
            if (Cq) {
              for (var b = "", c = 0, d = a.length - 10240; c < d; ) b += String.fromCharCode.apply(null, a.subarray(c, (c += 10240)));
              b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
              a = btoa(b);
            } else {
              void 0 === b && (b = 0);
              if (!Dq) {
                Dq = {};
                c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
                d = ["+/=", "+/", "-_=", "-_.", "-_"];
                for (var e = 0; 5 > e; e++) {
                  var f = c.concat(d[e].split(""));
                  Eq[e] = f;
                  for (var h = 0; h < f.length; h++) {
                    var k = f[h];
                    void 0 === Dq[k] && (Dq[k] = h);
                  }
                }
              }
              b = Eq[b];
              c = Array(Math.floor(a.length / 3));
              d = b[64] || "";
              for (e = f = 0; f < a.length - 2; f += 3) {
                var l = a[f],
                  m = a[f + 1];
                k = a[f + 2];
                h = b[l >> 2];
                l = b[((l & 3) << 4) | (m >> 4)];
                m = b[((m & 15) << 2) | (k >> 6)];
                k = b[k & 63];
                c[e++] = "" + h + l + m + k;
              }
              h = 0;
              k = d;
              switch (a.length - f) {
                case 2:
                  (h = a[f + 1]), (k = b[(h & 15) << 2] || d);
                case 1:
                  (a = a[f]), (c[e] = "" + b[a >> 2] + b[((a & 3) << 4) | (h >> 4)] + k + d);
              }
              a = c.join("");
            }
            return a;
          }
      }
      return a;
    },
    Gq = function (a, b, c) {
      a = lq(a);
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
    Iq = function (a, b, c, d, e, f) {
      if (null != a) {
        if (Array.isArray(a)) a = e && 0 == a.length && mq(a) & 1 ? void 0 : f && mq(a) & 2 ? a : Hq(a, b, c, void 0 !== d, e, f);
        else if (uq(a)) {
          var h = {},
            k;
          for (k in a) h[k] = Iq(a[k], b, c, d, e, f);
          a = h;
        } else a = b(a, d);
        return a;
      }
    },
    Hq = function (a, b, c, d, e, f) {
      var h = d || c ? mq(a) : 0;
      d = d ? !!(h & 32) : void 0;
      a = lq(a);
      for (var k = 0; k < a.length; k++) a[k] = Iq(a[k], b, c, d, e, f);
      c && c(h, a);
      return a;
    },
    Kq = function (a) {
      return a.Cd === Jq ? a.toJSON() : Fq(a);
    },
    Lq = function (a, b, c) {
      c = void 0 === c ? sq : c;
      if (null != a) {
        if (Bq && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
        if (Array.isArray(a)) {
          var d = mq(a);
          return d & 2 ? a : !b || d & 68 || !(d & 32 || 0 === d) ? Hq(a, Lq, d & 4 ? sq : c, !0, !1, !0) : (nq(a, d | 34), a);
        }
        a.Cd === Jq && ((b = a.Ca), (c = Mq(b)), (a = c & 2 ? a : Nq(a, b, c, !0)));
        return a;
      }
    },
    Nq = function (a, b, c, d) {
      a = a.constructor;
      yq = b = Oq(b, c, d);
      b = new a(b);
      yq = void 0;
      return b;
    },
    Oq = function (a, b, c) {
      var d = c || b & 2 ? sq : rq,
        e = !!(b & 32);
      a = Gq(a, b, function (f) {
        return Lq(f, e, d);
      });
      pq(a, 32 | (c ? 2 : 0));
      return a;
    },
    Qq = function (a, b) {
      a = a.Ca;
      return Pq(a, Mq(a), b);
    },
    Pq = function (a, b, c) {
      if (-1 === c) return null;
      if (c >= tq(b)) {
        if (b & 256) return a[a.length - 1][c];
      } else if (((b = c + (+!!(b & 512) - 1)), b < a.length)) return a[b];
    },
    Rq = function (a, b, c, d) {
      var e = tq(b);
      if (c >= e) {
        var f = b;
        if (b & 256) e = a[a.length - 1];
        else {
          if (null == d) return;
          e = a[e + (+!!(b & 512) - 1)] = {};
          f |= 256;
        }
        e[c] = d;
        f !== b && nq(a, f);
      } else (a[c + (+!!(b & 512) - 1)] = d), b & 256 && ((a = a[a.length - 1]), c in a && delete a[c]);
    },
    Uq = function (a, b, c) {
      var d = b & 2;
      a = Pq(a, b, c);
      Array.isArray(a) || (a = Sq);
      b = mq(a);
      b & 1 || qq(a);
      d ? b & 2 || pq(a, 34) : b & 32 && !(b & 2) && Tq(a, 32);
      return a;
    },
    Vq = function (a, b, c) {
      a = a.Ca;
      var d = Mq(a),
        e = d & 2,
        f = Uq(a, d, b),
        h = mq(f);
      if (!(h & 4)) {
        Object.isFrozen(f) && ((h = 0), (f = lq(f)), Rq(a, d, b, f));
        for (var k = 0, l = 0; k < f.length; k++) {
          var m = c(f[k]);
          null != m && (f[l++] = m);
        }
        l < k && (f.length = l);
        h |= 5;
        e && (h |= 34);
        nq(f, h);
        h & 2 && Object.freeze(f);
      }
      !e && (h & 2 || Object.isFrozen(f)) && ((f = lq(f)), pq(f, 5), Rq(a, d, b, f));
      return f;
    },
    Xq = function (a) {
      var b = a.Ca,
        c = Mq(b);
      a = !!(c & 2);
      var d = a ? 1 : 2,
        e = Wq,
        f = !!(c & 2),
        h = Uq(b, c, 3);
      if (h !== Sq && mq(h) & 4)
        3 !== d &&
          (f
            ? 2 === d && ((d = mq(h)), (h = lq(h)), nq(h, d), Rq(b, c, 3, h))
            : ((f = Object.isFrozen(h)),
              1 === d
                ? f || Object.freeze(h)
                : ((d = mq(h)), (e = d & -35), f && ((h = lq(h)), (d = 0), Rq(b, c, 3, h)), d !== e && nq(h, e)))),
          (b = h);
      else {
        var k = h;
        h = !!(c & 2);
        var l = !!(mq(k) & 2);
        f = k;
        !h && l && (k = lq(k));
        var m = c | (l ? 2 : 0);
        l = l || void 0;
        for (var n = 0, y = 0; n < k.length; n++) {
          var B = k[n];
          var ia = e,
            Ba = !1;
          if (null == B || typeof B !== Xf || (Ba = Array.isArray(B)) || B.Cd !== Jq)
            if (Ba) {
              var ra = (Ba = mq(B));
              0 === ra && (ra |= m & 32);
              ra |= m & 2;
              ra !== Ba && nq(B, ra);
              B = new ia(B);
            } else B = void 0;
          void 0 !== B && ((l = l || Mq(B.Ca) & 2), (k[y++] = B));
        }
        y < n && (k.length = y);
        e = k;
        k = mq(e);
        m = k | 5;
        l = l ? m & -9 : m | 8;
        k != l && (Object.isFrozen(e) && (e = lq(e)), nq(e, l));
        k = e;
        f !== k && Rq(b, c, 3, k);
        ((h && 2 !== d) || 1 === d) && Object.freeze(k);
        b = k;
      }
      if (!(a || mq(b) & 8)) {
        for (a = 0; a < b.length; a++) (c = b[a]), (d = c.Ca), (h = Mq(d)), (d = h & 2 ? Nq(c, d, h, !1) : c), c !== d && (b[a] = d);
        pq(b, 8);
      }
      return b;
    },
    Yq = function (a, b) {
      return null != a ? a : b;
    },
    Zq = function (a) {
      var b = -1;
      b = void 0 === b ? 0 : b;
      a = wq(Qq(a, 5));
      return Yq(a, b);
    },
    $q = function (a, b, c) {
      this.Ca = Aq(a, b, c);
    },
    ar = function (a, b, c) {
      var d = a.constructor.Nh,
        e = tq(Mq(c ? a.Ca : b)),
        f = !1;
      if (d) {
        if (!c) {
          b = lq(b);
          var h;
          if (b.length && uq((h = b[b.length - 1])))
            for (f = 0; f < d.length; f++)
              if (d[f] >= e) {
                Object.assign((b[b.length - 1] = {}), h);
                break;
              }
          f = !0;
        }
        e = b;
        c = !c;
        h = Mq(a.Ca);
        a = tq(h);
        h = +!!(h & 512) - 1;
        for (var k, l, m = 0; m < d.length; m++)
          if (((l = d[m]), l < a)) {
            l += h;
            var n = e[l];
            null == n ? (e[l] = c ? Sq : qq([])) : c && n !== Sq && oq(n);
          } else
            k || ((n = void 0), e.length && uq((n = e[e.length - 1])) ? (k = n) : e.push((k = {}))),
              (n = k[l]),
              null == k[l] ? (k[l] = c ? Sq : qq([])) : c && n !== Sq && oq(n);
      }
      d = b.length;
      if (!d) return b;
      var y;
      if (uq((k = b[d - 1]))) {
        a: {
          var B = k;
          e = {};
          c = !1;
          for (var ia in B) (a = B[ia]), Array.isArray(a) && a != a && (c = !0), null != a ? (e[ia] = a) : (c = !0);
          if (c) {
            for (var Ba in e) {
              B = e;
              break a;
            }
            B = null;
          }
        }
        B != k && (y = !0);
        d--;
      }
      for (; 0 < d; d--) {
        k = b[d - 1];
        if (null != k) break;
        var ra = !0;
      }
      if (!y && !ra) return b;
      var ed;
      f ? (ed = b) : (ed = Array.prototype.slice.call(b, 0, d));
      b = ed;
      f && (b.length = d);
      B && b.push(B);
      return b;
    },
    Wq = function (a) {
      this.Ca = Aq(a);
    },
    br = function (a) {
      this.Ca = Aq(a);
    },
    cr = function () {},
    dr = function (a) {
      this.A = a;
    },
    er = function (a) {
      return Bm(a);
    },
    jr = function (a) {
      fr.ita_icon_style || ((fr.ita_icon_style = !0), Po(gr(), hr.body));
      a = ir[a];
      return "ita-icon-" + (a ? Zq(a) : 0);
    },
    kr = function (a) {
      (a = jr(a)) && (a = "ita-kd-img " + a);
      return a || "";
    },
    gr = function () {
      var a = [],
        b = 0;
      bl(ir, function (d) {
        d = Zq(d);
        d > b && (b = d);
      });
      for (var c = 0; c <= b; c++)
        a.push(ym(".ita-icon-" + c, { "background-position": -((c % 10) * 50 + 14) + "px " + -(50 * Math.floor(c / 10) + 17) + Dg }));
      return xm(a.map(er).join(""));
    },
    lr = function (a, b) {
      return Ao(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style[b];
    },
    mr = function (a) {
      return typeof a.className == z ? a.className : (a.getAttribute && a.getAttribute("class")) || "";
    },
    nr = function (a) {
      return a.classList ? a.classList : mr(a).match(/\S+/g) || [];
    },
    or = function (a, b) {
      typeof a.className == z ? (a.className = b) : a.setAttribute && a.setAttribute("class", b);
    },
    pr = function (a, b) {
      return a.classList ? a.classList.contains(b) : J(nr(a), b);
    },
    V = function (a, b) {
      if (a.classList) a.classList.add(b);
      else if (!pr(a, b)) {
        var c = mr(a);
        or(a, c + (0 < c.length ? " " + b : b));
      }
    },
    qr = function (a, b) {
      if (a.classList)
        Array.prototype.forEach.call(b, function (e) {
          V(a, e);
        });
      else {
        var c = {};
        Array.prototype.forEach.call(nr(a), function (e) {
          c[e] = !0;
        });
        Array.prototype.forEach.call(b, function (e) {
          c[e] = !0;
        });
        b = "";
        for (var d in c) b += 0 < b.length ? " " + d : d;
        or(a, b);
      }
    },
    W = function (a, b) {
      a.classList
        ? a.classList.remove(b)
        : pr(a, b) &&
          or(
            a,
            Array.prototype.filter
              .call(nr(a), function (c) {
                return c != b;
              })
              .join(" ")
          );
    },
    rr = function (a, b) {
      a.classList
        ? Array.prototype.forEach.call(b, function (c) {
            W(a, c);
          })
        : or(
            a,
            Array.prototype.filter
              .call(nr(a), function (c) {
                return !J(b, c);
              })
              .join(" ")
          );
    },
    sr = function (a, b, c) {
      W(a, b);
      V(a, c);
    },
    tr = function () {},
    vr = function (a) {
      if (a instanceof tr) return a;
      if (typeof a.Hb == t) return a.Hb(!1);
      if (Mj(a)) {
        var b = 0,
          c = new tr();
        c.next = function () {
          for (;;) {
            if (b >= a.length) return ur;
            if (b in a) return { value: a[b++], done: !1 };
            b++;
          }
        };
        return c;
      }
      throw Error("Not implemented");
    },
    xr = function (a, b, c, d, e) {
      this.S = !!b;
      this.node = null;
      this.F = 0;
      this.K = !1;
      this.N = !c;
      a && wr(this, a, d);
      this.H = void 0 != e ? e : this.F || 0;
      this.S && (this.H *= -1);
    },
    wr = function (a, b, c, d) {
      if ((a.node = b)) a.F = typeof c === Tf ? c : 1 != a.node.nodeType ? 0 : a.S ? -1 : 1;
      typeof d === Tf && (a.H = d);
    },
    yr = function () {},
    zr = function (a) {
      for (var b = [], c = 0, d = a.Nb(); c < d; c++) b.push(a.gb(c));
      return b;
    },
    Ar = function (a) {
      a = a.Xb();
      return 1 == a.nodeType ? a : a.parentNode;
    },
    Br = function (a, b) {
      xr.call(this, a, b, !0);
    },
    Cr = function (a, b, c, d, e) {
      this.C = this.D = null;
      this.A = this.B = 0;
      this.G = !!e;
      if (a) {
        this.D = a;
        this.B = b;
        this.C = c;
        this.A = d;
        if (1 == a.nodeType && "BR" != a.tagName)
          if (((a = a.childNodes), (b = a[b]))) (this.D = b), (this.B = 0);
          else {
            a.length && (this.D = bk(a));
            var f = !0;
          }
        1 == c.nodeType && ((this.C = c.childNodes[d]) ? (this.A = 0) : (this.C = c));
      }
      xr.call(this, this.G ? this.C : this.D, this.G, !0);
      f && this.next();
    },
    Dr = function () {},
    Er = function (a, b) {
      a = a.A.getClientRects();
      return a.length ? ((a = b ? a[0] : bk(a)), new P(b ? a.left : a.right, b ? a.top : a.bottom)) : null;
    },
    Fr = function (a, b, c) {
      c = c && !b.A.collapsed;
      b = b.A;
      try {
        return c ? 0 <= a.B(b, 0, 1) && 0 >= a.B(b, 1, 0) : 0 <= a.B(b, 0, 0) && 0 >= a.B(b, 1, 1);
      } catch (d) {
        if (!S) throw d;
        return !1;
      }
    },
    Gr = function (a) {
      this.A = a;
    },
    Hr = function (a) {
      var b = Q(a).createRange();
      if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
      else if (rn(a) || 3 == a.nodeType) {
        for (var c, d = a; (c = d.firstChild) && (rn(c) || 3 == c.nodeType); ) d = c;
        b.setStart(d, 0);
        for (d = a; (c = d.lastChild) && (rn(c) || 3 == c.nodeType); ) d = c;
        b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
      } else (c = a.parentNode), (a = Array.prototype.indexOf.call(c.childNodes, a)), b.setStart(c, a), b.setEnd(c, a + 1);
      return b;
    },
    Ir = function (a, b, c, d) {
      var e = Q(a).createRange();
      e.setStart(a, b);
      e.setEnd(c, d);
      return e;
    },
    Jr = function (a) {
      this.A = a;
    },
    Kr = function (a) {
      this.A = a;
    },
    Lr = function (a) {
      return ln ? new Kr(a) : M ? new Jr(a) : new Gr(a);
    },
    Mr = function () {
      this.A = this.C = this.B = this.D = this.F = null;
      this.G = !1;
    },
    Nr = function (a, b) {
      var c = new Mr();
      c.F = a;
      c.G = !!b;
      return c;
    },
    Or = function (a) {
      a = ln ? new Kr(Hr(a)) : M ? new Jr(Hr(a)) : new Gr(Hr(a));
      return Nr(a);
    },
    Qr = function (a, b, c, d) {
      var e = new Mr();
      e.G = Pr(a, b, c, d);
      if (Nj(a) && 1 == a.nodeType && !rn(a)) {
        var f = a.parentNode;
        b = Array.prototype.indexOf.call(f.childNodes, a);
        a = f;
      }
      Nj(c) && 1 == c.nodeType && !rn(c) && ((f = c.parentNode), (d = Array.prototype.indexOf.call(f.childNodes, c)), (c = f));
      e.G ? ((e.D = c), (e.B = d), (e.C = a), (e.A = b)) : ((e.D = a), (e.B = b), (e.C = c), (e.A = d));
      return e;
    },
    Rr = function (a) {
      var b;
      if (!(b = a.F)) {
        b = a.va();
        var c = a.Ha(),
          d = a.Ga(),
          e = a.Wa();
        b = ln ? new Kr(Ir(b, c, d, e)) : M ? new Jr(Ir(b, c, d, e)) : new Gr(Ir(b, c, d, e));
        b = a.F = b;
      }
      return b;
    },
    Sr = function () {},
    Tr = function () {
      this.D = this.B = this.A = null;
    },
    Ur = function (a) {
      if (!a.B && ((a.B = []), a.A)) for (var b = 0; b < a.A.length; b++) a.B.push(a.A.item(b));
      return a.B;
    },
    Vr = function (a) {
      a.D ||
        ((a.D = Ur(a).concat()),
        a.D.sort(function (b, c) {
          return b.sourceIndex - c.sourceIndex;
        }));
      return a.D;
    },
    Wr = function (a) {
      this.A = this.C = this.D = null;
      a && ((this.A = Vr(a)), (this.D = this.A.shift()), (this.C = bk(this.A) || this.D));
      xr.call(this, this.D, !1, !0);
    },
    Xr = function () {
      this.A = [];
      this.D = [];
      this.C = this.B = null;
    },
    Yr = function (a) {
      a.B ||
        ((a.B = zr(a)),
        a.B.sort(function (b, c) {
          var d = b.va();
          b = b.Ha();
          var e = c.va();
          c = c.Ha();
          return d == e && b == c ? 0 : Pr(d, b, e, c) ? 1 : -1;
        }));
      return a.B;
    },
    Zr = function (a) {
      this.A = null;
      this.B = 0;
      a &&
        (this.A = Yr(a).map(function (b) {
          return vr(b);
        }));
      xr.call(this, a ? this.T() : null, !1, !0);
    },
    as = function (a) {
      return (a = (a || window).getSelection()) && $r(a);
    },
    $r = function (a) {
      var b = !1;
      if (a.createRange)
        try {
          var c = a.createRange();
        } catch (e) {
          return null;
        }
      else if (a.rangeCount) {
        if (1 < a.rangeCount) {
          b = new Xr();
          c = 0;
          for (var d = a.rangeCount; c < d; c++) b.A.push(a.getRangeAt(c));
          return b;
        }
        c = a.getRangeAt(0);
        b = Pr(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset);
      } else return null;
      (a = c) && a.addElement ? ((b = new Tr()), (b.A = a), (a = b)) : (a = Nr(Lr(a), b));
      return a;
    },
    Pr = function (a, b, c, d) {
      if (a == c) return d < b;
      var e;
      if (1 == a.nodeType && b)
        if ((e = a.childNodes[b])) (a = e), (b = 0);
        else if (vn(a, c)) return !0;
      if (1 == c.nodeType && d)
        if ((e = c.childNodes[d])) (c = e), (d = 0);
        else if (vn(c, a)) return !1;
      return 0 < (yn(a, c) || b - d);
    },
    bs = function (a) {
      for (var b = null, c = a.firstChild; c; ) {
        var d = c.nextSibling;
        3 == c.nodeType
          ? "" == c.nodeValue
            ? a.removeChild(c)
            : b
            ? ((b.nodeValue += c.nodeValue), a.removeChild(c))
            : (b = c)
          : (bs(c), (b = null));
        c = d;
      }
    },
    ds = function (a, b) {
      return b ? cs(a.va(), a.Ha()) : cs(a.Ga(), a.Wa());
    },
    hs = function (a) {
      var b = a.wd(),
        c = es(ds(a, !b)),
        d = fs(c),
        e = c.node.previousSibling;
      3 == c.node.nodeType && (c.node = null);
      var f = es(ds(a, b)),
        h = fs(f),
        k = f.node.previousSibling;
      3 == f.node.nodeType && (f.node = null);
      return function () {
        !c.node && e && ((c.node = e.nextSibling), c.node || (c = new gs(e, e.length || e.childNodes.length)));
        !f.node && k && ((f.node = k.nextSibling), f.node || (f = new gs(k, k.length || k.childNodes.length)));
        return Qr(c.node || d.node.firstChild || d.node, c.offset, f.node || h.node.firstChild || h.node, f.offset);
      };
    },
    es = function (a) {
      var b;
      if (3 == a.node.nodeType)
        for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling) a.offset += b.length || b.childNodes.length;
      else b = a.node.previousSibling;
      var c = a.node.parentNode;
      a.node = b ? b.nextSibling : c.firstChild;
      return a;
    },
    gs = function (a, b) {
      this.node = a;
      this.offset = b;
    },
    fs = function (a) {
      var b = a.node.parentNode;
      return new gs(b, Array.prototype.indexOf.call(b.childNodes, a.node));
    },
    cs = function (a, b) {
      for (; 1 == a.nodeType; ) {
        var c = a.childNodes[b];
        if (c || a.lastChild) c ? ((a = c), (b = 0)) : ((a = a.lastChild), (b = a.length || a.childNodes.length));
        else break;
      }
      return new gs(a, b);
    },
    is = function (a, b) {
      b = In(b);
      try {
        for (; b && b != fr && b.frameElement; b = b.parent) {
          var c = Ko(b.frameElement);
          a.x += c.x;
          a.y += c.y;
        }
      } catch (d) {}
    },
    js = function (a) {
      var b = a.getBoundingClientRect();
      if (S) {
        var c = Ko(a);
        a = Mo(a);
        b.left = c.x;
        b.right = c.x + a.width;
        b.top = c.y;
        b.bottom = c.y + a.height;
      }
      return b;
    },
    ks = function (a, b) {
      b = void 0 === b ? null : b;
      if (!b) b = as(In(a));
      else if (3 == b.va().nodeType && 3 == b.Ga().nodeType) {
        var c = Er(Rr(b), !0),
          d = Er(Rr(b), !1);
        if (c && d) return new P(c.x, d.y);
      }
      if (!b) return new P(0, 0);
      var e = Kn(a, p);
      e.appendChild(Ln(a, "\u200b"));
      8 >= Kk(ua)
        ? ((c = null),
          b.Ya() || ((c = b.Xa()), b.collapse(!1)),
          (e = b.Xe(e)),
          c && (b.collapse(!0), b.jc().moveStart(xb, 0 - c.length), b.select()))
        : b.vc(e, !1);
      c = js(e);
      d = e.parentNode;
      a.Qa(e);
      if (d) {
        if ((a = b)) {
          var f = hs(a);
          a: {
            var h = Ar(a);
            for (a = 0; h; ) {
              b = h && h.nodeName;
              if (
                h &&
                ("block" == (1 != h.nodeType ? null : S ? (h.currentStyle ? h.currentStyle.display : null) : Ao(h, "display")) ||
                  "TD" == b ||
                  "TABLE" == b ||
                  "LI" == b)
              )
                break a;
              h = h.parentNode;
              a++;
            }
            h = null;
          }
        }
        h ? ((d = zn(h, d)), S ? bs(d) : d.normalize()) : d && (S ? bs(d) : d.normalize());
        f && f();
      }
      return new P(c.left, c.bottom);
    },
    ls = function (a, b) {
      var c = R(a),
        d = 0;
      if (typeof b === Tf) d = b;
      else if (8 >= Kk(ua)) {
        if ((b = c.A.selection.createRange()))
          try {
            var e = a.createTextRange(),
              f = e.duplicate();
            e.moveToBookmark(b.getBookmark());
            f.setEndPoint("EndToStart", e);
            d = f.text.length;
          } catch (m) {}
      } else d = a.selectionStart;
      e = "_h#" + D(a);
      var h = c.L(e);
      h ? c.tc(h) : (h = c.O("PRE", { id: e }));
      h.parentNode || c.A.body.appendChild(h);
      var k = [];
      T(a.value, function (m, n, y) {
        k.push(" " == m && n + 1 != y.length && " " == y[n + 1] ? "\u00a0" : m);
      });
      k = k.join("");
      c.V(h, Ln(c, k.substring(0, d)));
      e = Kn(c, p);
      e.appendChild(Ln(c, "\u200b"));
      c.V(h, e);
      c.V(h, Ln(c, k.substring(d) + " "));
      c = nr(a);
      Array.prototype.forEach.call(c, function (m) {
        V(h, m);
      });
      var l = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
      [
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        Ph,
        Oh,
        Ne,
        "word-spacing",
        "line-height",
        "text-align",
        Ei,
        $b,
        "width",
        "height",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "border-top-width",
        "border-right-width",
        "border-bottom-width",
        "border-left-width",
        "border-top-style",
        "border-right-style",
        "border-bottom-style",
        "border-left-style",
        "overflow-x",
        "overflow-y"
      ].forEach(function (m) {
        try {
          var n = lr(a, m);
          n && (l += m + ":" + n + ";");
        } catch (y) {}
      });
      h.style.cssText = l;
      c = Bo(a, "overflowX");
      h.style.overflowX = c && c != Ki ? c : Za;
      c = Bo(a, "overflowY");
      h.style.overflowY = c && c != Ki ? c : Za;
      h.scrollTop = a.scrollTop;
      h.scrollLeft = a.scrollLeft;
      Do(h, Ho(a));
      c = js(e);
      return a.tagName.toUpperCase() == qa ? new P(c.left, Math.ceil(Ko(a).y + Mo(a).height)) : new P(c.left, Math.ceil(c.bottom));
    },
    ms = function (a, b) {
      this.A = a instanceof P ? a : new P(a, b);
    },
    ps = function (a) {
      this.F = a;
      this.D = ns(a);
      this.G = R(this.D);
      a = os(this);
      this.B = a[0];
      this.A = a[1];
      this.C = this.D.value.slice(this.B, this.A);
    },
    os = function (a) {
      if (void 0 !== a.D.selectionStart) return [a.D.selectionStart, a.D.selectionEnd];
      var b = a.G.A.selection.createRange();
      if (b)
        try {
          var c = a.D.createTextRange(),
            d = c.duplicate();
          c.moveToBookmark(b.getBookmark());
          d.setEndPoint("EndToStart", c);
          var e = d.text.length;
          return [e, e + b.text.length];
        } catch (f) {}
      return [0, 0];
    },
    qs = function (a) {
      this.C = this.D = null;
      this.A = this.B = 0;
      this.F = "";
      this.H = a;
      this.G = R(ns(a));
      if ((a = as(In(this.G)))) (this.D = a.va()), (this.B = a.Ha()), (this.C = a.Ga()), (this.A = a.Wa()), (this.F = a.Xa());
    },
    rs = function (a) {
      0 > a.B && (a.B = 0);
      var b = 3 == a.D.nodeType ? a.D.data.length : a.D.childNodes.length;
      a.B > b && (a.B = b);
      0 > a.A && (a.A = 0);
      b = 3 == a.C.nodeType ? a.C.data.length : a.C.childNodes.length;
      a.A > b && (a.A = b);
      return Qr(a.D, a.B, a.C, a.A);
    },
    ss = function (a, b, c, d) {
      Wk.call(this, d);
      this.type = se;
      this.keyCode = a;
      this.charCode = b;
      this.repeat = c;
    },
    us = function (a, b) {
      O.call(this);
      a && ts(this, a, b);
    },
    ts = function (a, b, c) {
      a.Lc && vs(a);
      a.Db = b;
      a.Kc = ql(a.Db, v, a, c);
      a.yd = ql(a.Db, u, a.sf, c, a);
      a.Lc = ql(a.Db, te, a.Eg, c, a);
    },
    vs = function (a) {
      a.Kc && (Bl(a.Kc), Bl(a.yd), Bl(a.Lc), (a.Kc = null), (a.yd = null), (a.Lc = null));
      a.Db = null;
      a.ya = -1;
      a.Ra = -1;
    },
    ws = function (a) {
      switch (a.type) {
        case u:
        case v:
          if (a.ctrlKey || a.metaKey || a.altKey || (a.shiftKey && 32 == a.keyCode)) return !0;
          break;
        case q:
          if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey) return !0;
          break;
        case se:
          if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey || a.G) return !0;
      }
      return !1;
    },
    xs = function (a) {
      a instanceof Wk && (a = a.A);
      if (a.getAttribute) {
        if (a.getAttribute("isFake")) return !0;
      } else if (a.isFake) return !0;
      return !1;
    },
    zs = function (a, b, c, d) {
      c = void 0 === c ? 0 : c;
      var e = In(R(a)),
        f = e.document,
        h = [u, v, te];
      try {
        if (f.createEvent) {
          if (jq != zb || (b != ys && b != Jb)) {
            var k = f.createEvent("Events");
            k.initEvent(b, !0, !0);
            k.view = e;
            k.isFake = !0;
            k.charCode = 0;
            k.keyCode = c;
            if (d) for (var l in d) k[l] = d[l];
          } else (k = f.createEvent("CustomEvent")), k.initCustomEvent(b, !0, !0, d);
          a.dispatchEvent(k);
        } else if (J(h, b) && f.createEventObject && a.fireEvent) {
          k = f.createEventObject();
          k.bubbles = !0;
          k.cancelable = !0;
          k.view = e;
          k.ctrlKey = !1;
          k.altKey = !1;
          k.shiftKey = !0;
          k.metaKey = !1;
          k.keyCode = c;
          if (k.setAttribute && (k.setAttribute("isFake", !0), d)) for (var m in d) k.setAttribute(m, d[m]);
          a.fireEvent("on" + b, k);
        }
      } catch (n) {}
    },
    Bs = function (a, b, c) {
      if (As)
        switch (b) {
          case 1:
          case 2:
          case 4:
          case 8:
            zs(a, u, 229);
            zs(a, "compositionstart");
            zs(a, "compositionupdate");
            break;
          case 3:
          case 5:
          case 6:
          case 9:
            (b = {}), c && (b.data = c), zs(a, Jb, void 0, b), zs(a, ys, void 0, b), zs(a, "input"), zs(a, te);
        }
    },
    Ds = function (a, b, c) {
      Array.isArray(c) && (c = c.join(" "));
      var d = "aria-" + b;
      "" === c || void 0 == c
        ? (Cs ||
            ((c = {}),
            (Cs =
              ((c.atomic = !1),
              (c.autocomplete = x),
              (c.dropeffect = x),
              (c.haspopup = !1),
              (c.live = "off"),
              (c.multiline = !1),
              (c.multiselectable = !1),
              (c.orientation = Di),
              (c.readonly = !1),
              (c.relevant = "additions text"),
              (c.required = !1),
              (c.sort = x),
              (c.busy = !1),
              (c.disabled = !1),
              (c.hidden = !1),
              (c.invalid = "false"),
              c))),
          (c = Cs),
          b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d))
        : a.setAttribute(d, c);
    },
    Es = function (a, b, c) {
      I.call(this);
      this.A = a;
      this.C = b || 0;
      this.B = c;
      this.D = E(this.kg, this);
    },
    Fs = function (a, b, c, d) {
      if (0 === a.length) throw Error("");
      a = a.map(function (f) {
        if (f instanceof dr) f = f.A;
        else throw Error("");
        return f;
      });
      var e = c.toLowerCase();
      if (
        a.every(function (f) {
          return 0 !== e.indexOf(f);
        })
      )
        throw Error('Attribute "' + c + '" does not match any of the allowed prefixes.');
      b.setAttribute(c, d);
    },
    Gs = function (a, b) {
      a.src = Xl(b);
      var c, d;
      (c = (b =
        null == (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector)
          ? void 0
          : d.call(c, "script[nonce]"))
        ? b.nonce || b.getAttribute(Sf) || ""
        : "") && a.setAttribute(Sf, c);
    },
    Hs = function (a) {
      var b = a.nodeName.toUpperCase();
      this.G = b == pa;
      this.F = b != Ka && b != qa;
      this.D = a;
      this.B = null;
      this.A = R(this.B);
      this.C = {};
    },
    ns = function (a) {
      var b = a.B || (a.G ? (a.D.contentDocument || a.D.contentWindow.document || a.D.document).body : a.D);
      a.B != b && ((a.B = b), (a.A = R(b)));
      return b;
    },
    Is = function (a, b, c, d) {
      if (0 != d)
        for (var e in a.C) {
          var f = a.C[e];
          f != b &&
            ((b instanceof ps && f instanceof ps) ||
              (b instanceof qs &&
                f instanceof qs &&
                (f.D == f.C && 3 == f.D.nodeType ? f.D : null) == (b.D == b.C && 3 == b.D.nodeType ? b.D : null))) &&
            f.le(c, d);
        }
    },
    Ks = function (a, b) {
      a = a.match(Js);
      b = b.match(Js);
      return a[3] == b[3] && a[1] == b[1] && a[4] == b[4];
    },
    Ls = function (a, b) {
      if (a) {
        a = a.split("&");
        for (var c = 0; c < a.length; c++) {
          var d = a[c].indexOf("="),
            e = null;
          if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
          } else f = a[c];
          b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
        }
      }
    },
    Ns = function (a) {
      a = Ms(a);
      return xm(a);
    },
    Ms = function (a) {
      return null === a ? "null" : void 0 === a ? "undefined" : a;
    },
    Ps = function (a) {
      if (!a.tagName || a.readOnly) return !1;
      switch (a.tagName.toUpperCase()) {
        case Ka:
          return !0;
        case qa:
          return J("EMAIL NUMBER SEARCH TEL TEXT URL".split(" "), a.type.toUpperCase());
        case pa:
          try {
            var b = Os(a);
            return !!b && !!((b.designMode && "ON" == b.designMode.toUpperCase()) || (b.body && b.body.isContentEditable));
          } catch (c) {
            return !1;
          }
        default:
          return !!a.isContentEditable;
      }
    },
    Qs = function (a, b) {
      if (a) for (var c = 0; c < b.length; c++) 0 == c ? or(a, b[0]) : V(a, b[c]);
    },
    Os = function (a) {
      var b = D(document),
        c = D(a),
        d = Rs[b];
      d || (d = Rs[b] = {});
      try {
        var e = window.location.href || "";
        if (!(c in d))
          if (a.src) {
            var f = a.src.indexOf("//"),
              h = 0 > f ? "N/A" : a.src.slice(0, f);
            d[c] = ("" != h && "http:" != h && h != od) || Ks(a.src, e);
          } else d[c] = !0;
        return d[c] ? An(a) : null;
      } catch (k) {
        return (d[c] = !1), null;
      }
    },
    Ss = function (a) {
      a = a || document;
      var b = [],
        c = [];
      jk(b, (a || document).getElementsByTagName(pa), (a || document).getElementsByTagName("FRAME"));
      b.forEach(function (d) {
        (d = Os(d)) && c.push(d);
      });
      return c;
    },
    Vs = function (a) {
      a = a || document;
      var b = R(),
        c = b.O(pa, { frameborder: "0", scrolling: "no", style: "background-color:transparent;border:0;display:none;" });
      b.la(a.body, c);
      a = b.ng(c);
      b = Ts ? Us.replace(/^(?:https?:)?\/\/ssl.gstatic.com\/inputtools\/images/g, Ts) : Us;
      Po(Ns("html body{border:0;margin:0;padding:0} html,body{overflow:hidden}" + b), a.body);
      return c;
    },
    Xs = function (a, b) {
      Uo(b, Mo(a));
      Ws.forEach(function (c) {
        yo(b, c, Ao(a, c));
      });
    },
    Zs = function () {
      I.call(this);
      this.B = {};
      this.F = {};
      this.A = [];
      this.C = vp;
      this.D = new N(this);
      Ys(this);
    },
    bt = function () {
      var a = D(hr);
      $s[a] || ($s[a] = new Zs());
      at = $s[a];
      Ys(at);
    },
    Ys = function (a) {
      a.A = Ss(a.C.A);
      for (var b in a.B) ct(a, b, a.G);
      ct(a, v, a.H);
    },
    ct = function (a, b, c) {
      El(a.D, a.C.A, b, c, !0, a);
      T(
        a.A,
        function (d) {
          try {
            El(this.D, d, b, c, !0, this);
          } catch (e) {}
        },
        a
      );
    },
    dt = function (a, b, c) {
      Hl(a.D, a.C.A, b, c, !0, a);
      T(
        a.A,
        function (d) {
          try {
            Hl(this.D, d, b, c, !0, this);
          } catch (e) {}
        },
        a
      );
    },
    ft = function (a, b, c, d, e) {
      var f = b.ownerDocument,
        h = !1;
      a.A = et(a.A, function (l) {
        try {
          l == f && (h = !0);
        } catch (m) {
          return !1;
        }
        return !0;
      });
      if (f && f != a.C.A && !h) {
        a.A.push(f);
        try {
          El(a.D, f, c, a.G, !0, a);
        } catch (l) {}
      }
      if (c)
        if (Array.isArray(c)) for (var k = 0; k < c.length; k++) ft(a, b, c[k], d, e);
        else {
          k = a.B[c];
          k || ((k = {}), (a.B[c] = k), ct(a, c, a.G));
          a = k[D(b)];
          a || ((a = []), (k[D(b)] = a));
          b = null;
          for (c = 0; c < a.length; c++) if (((b = a[c]), b.Cc(d, e))) return;
          b = new gt(d, e);
          a.push(b);
        }
      else throw Error(va);
    },
    ht = function (a, b, c, d, e) {
      if (c)
        if (Array.isArray(c)) for (var f = 0; f < c.length; f++) ht(a, b, c[f], d, e);
        else {
          if ((f = a.B[c])) {
            var h = f[D(b)];
            if (h) {
              for (var k = 0; k < h.length; k++)
                if (h[k].Cc(d, e)) {
                  Array.prototype.splice.call(h, k, 1);
                  break;
                }
              0 == h.length && delete f[D(b)];
            }
            fl(f) && (delete a.B[c], dt(a, c, a.G));
          }
        }
      else throw Error(va);
    },
    jt = function () {
      if (at) return at;
      it.listen("a", bt, !1, void 0);
      bt();
      return at;
    },
    kt = function (a, b, c, d) {
      ft(jt(), a, b, c, d);
    },
    lt = function (a, b, c, d) {
      ht(jt(), a, b, c, d);
    },
    gt = function (a, b) {
      this.listener = a;
      this.ia = b;
    },
    mt = function (a) {
      O.call(this);
      this.C = this.D = this.F = null;
      this.G = new N(this);
      a.commitText
        ? (this.A = a)
        : ((this.F = a), (this.A = new Hs(this.F)), (this.D = ns(this.A)), (a = this.A), (this.C = a.G ? An(a.D) : ns(a)));
    },
    nt = function (a, b, c) {
      a.B || ((a.B = new fq(a)), (a.B.A.I = !0), (a.B.A.H = !0));
      if (!a.B.Wc(b)) {
        c = c || b;
        var d = Yg + c;
        a.B.Nd(c, b);
        a.G.listen(a.B, d, a.Eb);
      }
    },
    ot = function (a, b, c) {
      a.B && a.B.Wc(b) && ((c = Yg + (c || b)), a.B.rf(b), Hl(a.G, a.B, c, a.Eb));
    },
    pt = function (a, b) {
      K.call(this, a);
      this.C = b;
    },
    rt = function (a) {
      var b = pn(document, Ha);
      a = am(qt, { id: a });
      Gs(b, a);
      document.body.appendChild(b);
    },
    st = function () {},
    tt = function (a, b) {
      this.G = [];
      this.N = a;
      this.K = b || null;
      this.C = this.D = !1;
      this.B = void 0;
      this.I = this.U = this.H = !1;
      this.F = 0;
      this.A = null;
      this.S = 0;
    },
    vt = function (a, b, c) {
      a.D = !0;
      a.B = c;
      a.C = !b;
      ut(a);
    },
    xt = function (a) {
      if (a.D) {
        if (!a.I) throw new wt(a);
        a.I = !1;
      }
    },
    yt = function (a, b, c, d) {
      a.G.push([b, c, d]);
      a.D && ut(a);
    },
    At = function (a) {
      return zt(a.G, function (b) {
        return typeof b[1] === t;
      });
    },
    ut = function (a) {
      if (a.F && a.D && At(a)) {
        var b = a.F,
          c = Bt[b];
        c && (F.clearTimeout(c.fa), delete Bt[b]);
        a.F = 0;
      }
      a.A && (a.A.S--, delete a.A);
      b = a.B;
      for (var d = (c = !1); a.G.length && !a.H; ) {
        var e = a.G.shift(),
          f = e[0],
          h = e[1];
        e = e[2];
        if ((f = a.C ? h : f))
          try {
            var k = f.call(e || a.K, b);
            k === Ct && (k = void 0);
            void 0 !== k && ((a.C = a.C && (k == b || a.isError(k))), (a.B = b = k));
            if ($n(b) || (typeof F.Promise === t && b instanceof F.Promise)) (d = !0), (a.H = !0);
          } catch (l) {
            (b = l), (a.C = !0), At(a) || (c = !0);
          }
      }
      a.B = b;
      d && ((k = E(a.T, a, !0)), (d = E(a.T, a, !1)), b instanceof tt ? (yt(b, k, d), (b.U = !0)) : b.then(k, d));
      c && ((b = new Dt(b)), (Bt[b.fa] = b), (a.F = b.fa));
    },
    wt = function () {
      Zj.call(this);
    },
    Et = function () {
      Zj.call(this);
    },
    Dt = function (a) {
      this.fa = F.setTimeout(E(this.B, this), 0);
      this.A = a;
    },
    Jt = function (a, b) {
      var c = b || {};
      b = c.document || document;
      var d = Xl(a).toString(),
        e = Kn(new an(b), Ha),
        f = { af: e, Ab: void 0 },
        h = new tt(Ft, f),
        k = null,
        l = null != c.timeout ? c.timeout : 5e3;
      0 < l &&
        ((k = window.setTimeout(function () {
          Gt(e, !0);
          var m = new Ht(1, "Timeout reached for loading script " + d);
          xt(h);
          vt(h, !1, m);
        }, l)),
        (f.Ab = k));
      e.onload = e.onreadystatechange = function () {
        (e.readyState && "loaded" != e.readyState && e.readyState != Ib) || (Gt(e, c.jg || !1, k), xt(h), vt(h, !0, null));
      };
      e.onerror = function () {
        Gt(e, !0, k);
        var m = new Ht(0, "Error while loading script " + d);
        xt(h);
        vt(h, !1, m);
      };
      f = c.attributes || {};
      il(f, { type: "text/javascript", charset: "UTF-8" });
      fn(e, f);
      Im(e, a);
      It(b).appendChild(e);
      return h;
    },
    It = function (a) {
      var b = (a || document).getElementsByTagName("HEAD");
      return b && 0 !== b.length ? b[0] : a.documentElement;
    },
    Ft = function () {
      if (this && this.af) {
        var a = this.af;
        a && a.tagName == Ha && Gt(a, !0, this.Ab);
      }
    },
    Gt = function (a, b, c) {
      null != c && F.clearTimeout(c);
      a.onload = function () {};
      a.onerror = function () {};
      a.onreadystatechange = function () {};
      b &&
        window.setTimeout(function () {
          tn(a);
        }, 0);
    },
    Ht = function (a, b) {
      var c = "Jsloader error (code #" + a + ")";
      b && (c += ": " + b);
      Zj.call(this, c);
      this.code = a;
    },
    Kt = function () {
      this.N = X ? 0 : 2;
      this.K = !X;
      this.A = X ? 50 : 6;
      this.state = 5;
      this.H = this.G = !1;
      this.F = 50;
      this.ba = !1;
      this.X = this.P = this.Ia = !0;
      this.R = this.ob = !1;
      this.ic = null;
      this.Na = this.I = !0;
      this.ra = !1;
      this.W = null;
      this.D = this.U = !0;
      this.Lb = !1;
      this.S = /[()\-_=+\[{\]}\\|;:'",<.>\/? \r]/g;
      this.Ib = /[^a-z0-9 \r]/i;
      this.C = /[a-z]/i;
      this.ga = /xyz/g;
      this.ca = /xyz/g;
      this.B = !1;
    },
    Mt = function () {
      Lt || (Lt = new O());
      return Lt;
    },
    Pt = function (a) {
      Nt(a);
      Ot[a] && Mt().J(new pt("cfga", a));
    },
    Rt = function (a, b) {
      Qt[b] || (Qt[b] = {});
      if (Qt[b][a]) return Qt[b][a];
      Ot[a] || (Ot[a] = new Kt());
      var c = Ot[a],
        d = new Kt(),
        e;
      for (e in c) d[e] = c[e];
      return (Qt[b][a] = d);
    },
    Tt = function (a) {
      Jt(am(St, { fileName: a }), { timeout: 1e4 });
    },
    Nt = function (a) {
      void 0 === Ot[a] && ((Ot[a] = null), Tt(a.replace(/-/g, "_")));
    },
    Ut = function (a, b) {
      for (var c in b) {
        var d = b[c];
        switch (Number(c)) {
          case 19:
            a.ma = d;
            break;
          case 21:
            a.transform = d;
            break;
          case 18:
            a.Dc = d;
            break;
          case 20:
            a.Kb = d;
            break;
          case 0:
            a.T = Number(d);
            break;
          case 15:
            a.state = Number(d);
            break;
          case 10:
            a.G = !!d;
            break;
          case 29:
            a.H = !!d;
            break;
          case 14:
            a.A = X ? 50 : Number(d);
            break;
          case 13:
            a.F = Number(d);
            break;
          case 11:
            a.K = !X && !!d;
            break;
          case 28:
            a.ba = !!d;
            break;
          case 30:
            a.Ia = !!d;
            break;
          case 1:
            a.N = X ? 0 : Number(d);
            break;
          case 4:
            a.P = !!d;
            break;
          case 3:
            a.X = !!d;
            break;
          case 8:
            a.ob = !!d;
            break;
          case 5:
            a.R = !!d;
            break;
          case 16:
            a.ic = d;
            break;
          case 2:
            a.I = !!d;
            break;
          case 6:
            a.Na = !!d;
            break;
          case 32:
            a.ra = !!d;
            break;
          case 23:
            a.W = d;
            break;
          case 12:
            a.U = !!d;
            break;
          case 9:
            a.D = !!d;
            break;
          case 31:
            a.Lb = !!d;
            break;
          case 27:
            a.S = d;
            break;
          case 26:
            a.Ib = d;
            break;
          case 22:
            a.C = d;
            break;
          case 25:
            a.ga = d;
            break;
          case 24:
            a.ca = d;
            break;
          case 17:
            a.nb = d;
            break;
          case 33:
            a.B = !!d;
        }
      }
    },
    Wt = function (a, b) {
      var c = Ot[a];
      c &&
        (Ut(c, b),
        bl(Qt, function (d) {
          d[a] && Ut(d[a], b);
        }),
        Pt(a));
      Vt[a] = b;
    },
    bu = function (a) {
      this.code = a;
      this.type = null;
      this.A = r;
      0 <= this.code.indexOf("-i0")
        ? ((this.type = "im"), rk(this.code, "-handwrit") ? (this.type = "hw") : rk(this.code, "-voice") && (this.type = "vo"))
        : 0 <= this.code.indexOf("-k0")
        ? (this.type = Ni)
        : 0 == this.code.lastIndexOf("xkb", 0) && (this.type = "xkb");
      a = this.code.split(/-t|-i0|-k0|:/);
      "yue-hant" === a[0] && (a[0] = Xi);
      switch (this.code) {
        case Ui:
          a[0] = Xi;
          break;
        case gj:
        case nj:
          a[0] = Yi;
      }
      this.A = "xkb" === this.type ? (Xt[this.code] ? Xt[this.code] : Yt(a[a.length - 1])) : Yt(a[0]);
      if (this.type === Ni)
        if (Zt[this.code]) this.Pa = Zt[this.code];
        else if ($t[this.code]) this.Pa = $t[this.code].slice(4);
        else {
          var b = this.code.split("-t-");
          a = b[0];
          b = b[1];
          a = a.replace(/-/g, "_");
          "en_us" === a && (a = "us");
          !J(au, a) || ("und-latn-k0-und" !== b && "k0-und" !== b)
            ? "k0-und" === b
              ? (this.Pa = a)
              : ((b = b.match(/k0-(.*)/)), b[1] && (this.Pa = a + "_" + b[1].replace("qwerty", "phone").replace("-", "_")))
            : (this.Pa = a + ("k0-und" === b ? "_inscript" : "_phone"));
        }
    },
    fu = function (a) {
      if (!a) return null;
      if ("nacl_mozc_jp" === a || "nacl_mozc_us" === a) a = me;
      0 != a.lastIndexOf("xkb", 0) && (el(cu, a) || (a = du(a)), (a = a.replace(/_/g, "-")), el(cu, a) || (a = du(a + "-und")));
      return eu[a] ? eu[a] : el(cu, a) ? ((eu[a] = new bu(a)), eu[a]) : null;
    },
    du = function (a) {
      if (gu[a]) return gu[a];
      if ("vkd_iw" === a) return ad;
      if ("im_t13n_iw" === a) return $c;
      if (a === hi) return ii;
      var b = a.split("_"),
        c = "";
      0 == a.lastIndexOf("im_t13n", 0)
        ? (c = b[2] + "-t-i0-und")
        : 0 == a.lastIndexOf("vkd_", 0) &&
          (2 === b.length
            ? (c = b[1] + aa)
            : J(au, b[1])
            ? (c = "inscript" === b[2] ? b[1] + aa : b[1] + "-t-und-latn-k0-und")
            : ((c = b[1] + "-t-k0-" + b[2]), el(cu, c) || (c = b[1] + "-" + b[2] + aa)));
      return el(cu, c) ? c : a;
    },
    ju = function (a) {
      return J(hu, a.code) || J(iu, a.code);
    },
    ku = function (a) {
      return X || "im" !== a.type ? !1 : /^(zh|yue)/.test(a.code);
    },
    Yt = function (a) {
      if ("und-ethi" === a) return "am";
      a = a.split("-");
      if (2 === a.length)
        a = 2 === a[1].length ? a[0] + "-" + a[1].toUpperCase() : a[0] + "-" + a[1].charAt(0).toUpperCase() + a[1].slice(1);
      else {
        var b = lu;
        a = null !== b && a[0] in b ? lu[a[0]] : a[0];
      }
      return a;
    },
    mu = function (a, b) {
      this.B = a;
      this.A = b ? b : "callback";
      this.Ab = 5e3;
    },
    ou = function (a, b, c) {
      return function () {
        nu(a, !1);
        c && c(b);
      };
    },
    pu = function (a, b) {
      return function (c) {
        nu(a, !0);
        b.apply(void 0, arguments);
      };
    },
    nu = function (a, b) {
      a = "_callbacks___" + a;
      if (F[a])
        if (b)
          try {
            delete F[a];
          } catch (c) {
            F[a] = void 0;
          }
        else F[a] = Ol;
    },
    qu = function (a) {
      if (a.sb && typeof a.sb == t) return a.sb();
      if (("undefined" !== typeof Map && a instanceof Map) || ("undefined" !== typeof Set && a instanceof Set))
        return Array.from(a.values());
      if (typeof a === z) return a.split("");
      if (Mj(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b;
      }
      return cl(a);
    },
    ru = function (a) {
      if (a.pd && typeof a.pd == t) return a.pd();
      if (!a.sb || typeof a.sb != t) {
        if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
        if (!("undefined" !== typeof Set && a instanceof Set)) {
          if (Mj(a) || typeof a === z) {
            var b = [];
            a = a.length;
            for (var c = 0; c < a; c++) b.push(c);
            return b;
          }
          return dl(a);
        }
      }
    },
    su = function () {
      this.D = this.B = this.A = null;
    },
    uu = function (a) {
      a.A ||
        ((a.A = new Map()),
        (a.B = 0),
        a.D &&
          Ls(a.D, function (b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
          }));
    },
    vu = function (a) {
      var b = ru(a);
      if ("undefined" == typeof b) throw Error("Keys are undefined");
      var c = new su();
      a = qu(a);
      for (var d = 0; d < b.length; d++) {
        var e = b[d],
          f = a[d];
        if (Array.isArray(f)) {
          var h = c;
          h.remove(e);
          0 < f.length && ((h.D = null), h.A.set(String(e), ik(f)), (h.B += f.length));
        } else c.add(e, f);
      }
      return c;
    },
    wu = function (a, b) {
      uu(a);
      b = String(b);
      return a.A.has(b);
    },
    xu = function (a, b) {
      I.call(this);
      this.H = a || pd;
      this.G = b || "cb";
      this.I = Kl(mg);
      this.C = 0;
    },
    yu = function (a) {
      switch (a) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
          return !0;
        default:
          return !1;
      }
    },
    zu = function () {
      O.call(this);
      this.C = 0;
      this.B = !1;
      this.A = null;
      this.D = this.G = !1;
    },
    Au = function (a) {
      if (a.A) {
        var b = a.A,
          c = function () {};
        a.A = null;
        a.C = 0;
        a.J("ready");
        try {
          b.A = c;
        } catch (d) {}
      }
    },
    Bu = function (a) {
      a.G || ((a.G = !0), a.J(Ib), a.J("error"));
    },
    Cu = function () {},
    Eu = function (a) {
      var b;
      (b = a.A) || ((b = {}), Du(a) && ((b[0] = !0), (b[1] = !0)), (b = a.A = b));
      return b;
    },
    Fu = function () {},
    Gu = function (a) {
      return (a = Du(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
    },
    Du = function (a) {
      if (!a.B && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
          var d = b[c];
          try {
            return new ActiveXObject(d), (a.B = d);
          } catch (e) {}
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
      }
      return a.B;
    },
    Hu = function (a) {
      O.call(this);
      this.headers = new Map();
      this.H = a || null;
      this.B = !1;
      this.F = this.A = null;
      this.N = "";
      this.D = this.K = this.C = this.I = !1;
      this.U = 0;
      this.G = null;
      this.R = "";
      this.X = this.P = !1;
    },
    Iu = function (a) {
      return S && typeof a.timeout === Tf && void 0 !== a.ontimeout;
    },
    Lu = function (a) {
      a.B = !1;
      a.A && ((a.D = !0), a.A.abort(), (a.D = !1));
      Ju(a);
      Ku(a);
    },
    Ju = function (a) {
      a.I || ((a.I = !0), a.J(Ib), a.J("error"));
    },
    Nu = function (a) {
      if (a.B && "undefined" != typeof Mu && (!a.F[1] || 4 != (a.A ? a.A.readyState : 0) || 2 != a.Zb()))
        if (a.C && 4 == (a.A ? a.A.readyState : 0)) ro(a.Re, 0, a);
        else if ((a.J(Eg), 4 == (a.A ? a.A.readyState : 0))) {
          a.B = !1;
          try {
            a.xd() ? (a.J(Ib), a.J("success")) : Ju(a);
          } finally {
            Ku(a);
          }
        }
    },
    Ku = function (a, b) {
      if (a.A) {
        Ou(a);
        var c = a.A,
          d = a.F[0] ? function () {} : null;
        a.A = null;
        a.F = null;
        b || a.J("ready");
        try {
          c.onreadystatechange = d;
        } catch (e) {}
      }
    },
    Ou = function (a) {
      a.A && a.X && (a.A.ontimeout = null);
      a.G && (F.clearTimeout(a.G), (a.G = null));
    },
    Pu = function (a) {
      I.call(this);
      this.G = 0;
      this.C = a || pd;
      this.A = !S || Tk(10) || Ks(window.location.href, this.C) ? new Hu() : new zu();
      this.B = null;
      this.D = new N(this);
      this.F = Kl(mg);
      this.A.Rd && this.A.Rd(!0);
    },
    Tu = function (a) {
      I.call(this);
      this.D = null;
      this.active = !1;
      this.A = null;
      this.C = a || yp.ha();
      this.H = [new dr(Qu[0].toLowerCase(), Ru), new dr(Su[0].toLowerCase(), Ru)];
    },
    Uu = function (a, b, c, d) {
      var e = "old" + c;
      if (d) {
        d = b.getAttribute(c);
        var f = b.hasAttribute(c);
        "off" != d && (Fs(a.H, b, c, "off"), f && Fs(a.H, b, e, d));
      } else (d = b.getAttribute(e)), b.hasAttribute(e) ? (Fs(a.H, b, c, d), b.removeAttribute(e)) : b.removeAttribute(c);
    },
    Wu = function (a) {
      Tu.call(this);
      this.B = Vu(
        a,
        function (b, c) {
          b.push(c());
          return b;
        },
        []
      );
      this.G = {};
      this.F = [];
    },
    Xu = function (a, b, c, d, e) {
      this.source = a;
      this.target = b;
      this.A = c;
      this.B = e || !1;
      this.type = d || 0;
    },
    Yu = function (a, b) {
      this.source = a;
      this.target = b;
      this.timestamp = new Date().getTime();
    },
    Zu = function (a, b) {
      K.call(this, "cmt");
      this.H = a;
      this.C = b;
    },
    $u = function () {
      this.A = {};
    },
    bv = function (a) {
      av[a] || (av[a] = new $u());
      return av[a];
    },
    cv = function (a, b, c, d, e, f, h) {
      this.A = [];
      this.B = (e || 2) * d.A + 1;
      this.source = b;
      this.C = a;
      this.F = c;
      this.type = f || 0;
      this.config = d;
      this.H = h || {};
      this.G = "";
      this.D = !0;
    },
    ev = function (a) {
      var b = { text: dv(a), itc: a.F, num: String(a.B), cp: "0", cs: "1", ie: "utf-8", oe: "utf-8", app: jq };
      il(b, a.H);
      return b;
    },
    dv = function (a) {
      var b = a.G + a.C;
      if (1 == a.type) return b;
      b = b ? "|" + b.replace(/[,|:]/g, escape) + "," : "";
      var c = a.source;
      1 != a.config.T && (c = c.replace(/[,|:%]/g, escape));
      return b + c;
    },
    fv = function (a) {
      K.call(this, "mup");
      this.C = a;
    },
    gv = function (a, b) {
      this.qc = a;
      this.offset = b;
    },
    hv = function (a) {
      this.A = [];
      this.offset = a;
    },
    iv = function (a) {
      this.B = a;
      this.A = dl(a);
    },
    jv = function (a, b) {
      var c = new hv(b.length);
      a.A.forEach(function (d) {
        var e = b.indexOf(d);
        -1 < e && e <= c.offset && (e < c.offset && ((c.A = []), (c.offset = e)), c.A.push(d));
      });
      return c;
    },
    kv = function (a, b) {
      if (!b) return [];
      for (var c = [], d = [], e = b; 2 > c.length && e; ) {
        var f = jv(a, e);
        if (0 != f.A.length)
          for (var h = 0; h < f.A.length; h++)
            for (var k = f.A[h], l = a.B[k], m = 0; m < l.length; m++) d.push(new gv(e.slice(0, f.offset) + l[m], f.offset + k.length));
        else d.push(new gv(e, e.length));
        if (1 == c.length) for (c = c.pop(), e = 0; e < d.length; e++) (d[e].qc = c.qc + d[e].qc), (d[e].offset += c.offset);
        c = d;
        d = [];
        if (0 == c.length) break;
        e = b.slice(c[0].offset);
      }
      return c;
    },
    lv = function (a, b) {
      O.call(this);
      this.B = a;
      this.A = b;
      this.D = (a = this.A.ic) ? new iv(a) : null;
      this.C = Kl(mg);
    },
    mv = function (a, b) {
      for (var c = 0, d; (d = b[c]); c++) d.A.length >= d.B ? ((d.D = !0), d.A.splice(d.B - 1, d.A.length - d.B + 1)) : (d.D = !1);
      a.J(new fv(b));
    },
    nv = function (a, b) {
      if (a.D && !(b.A.length >= b.B)) {
        var c = kv(a.D, b.source);
        for (
          a = { ub: 0 };
          a.ub < c.length &&
          (0 <=
            ck(
              b.A,
              (function (d) {
                return function (e) {
                  return e.target == c[d.ub].qc;
                };
              })(a)
            ) ||
            (b.A.push(new Xu(b.source.slice(0, c[a.ub].offset), c[a.ub].qc, "", 2)), !(b.A.length >= b.B)));
          a = { ub: a.ub }, a.ub++
        );
      }
    },
    ov = function (a, b) {
      if (!a.A.P && b.source) {
        var c = b.A[0];
        if (!c || c.B || !a.A.H || (4 != c.type && 3 != c.type && 5 != c.type))
          if (
            ((c = ck(b.A, function (e) {
              return e.target == b.source;
            })),
            !(0 == c || (0 < c && !a.A.ra)))
          ) {
            var d = new Xu(b.source, b.source, "");
            a.A.ra
              ? (0 <= c && b.A.splice(c, 1), 2 > b.A.length ? b.A.push(d) : b.A.splice(1, 0, d))
              : b.A.length >= a.A.A
              ? b.A.splice(a.A.A - 1, 0, d)
              : b.A.push(d);
          }
      }
    },
    pv = function (a, b, c, d) {
      if (c && d[1]) {
        if (typeof d[0] === z && !a.A.R && ((d[0] = b.B), jq != zb || b.source == d[1][0][0])) {
          c = bv(a.B);
          var e = dv(b);
          c.A[e] = d;
        }
        c = [];
        for (e = 0; e < d[1].length; e++) {
          var f = d[1][e],
            h = Mm(f[0]),
            k = f[1];
          f = f[f.length - 1];
          var l = b,
            m = new cv(l.C, h, l.F, l.config, void 0, l.type);
          m.B = l.B;
          m.G = l.G;
          l = m;
          for (m = 0; m < k.length; m++) {
            var n = a.A.H ? 5 : 0,
              y = h,
              B = "",
              ia = !1;
            if (f) {
              f.matched_length && (y = h.slice(0, f.matched_length[m]));
              f.annotation && (B = f.annotation[m]);
              if (f.candidate_type)
                switch (f.candidate_type[m]) {
                  case 0:
                    n = 5;
                    break;
                  case 1:
                    n = 3;
                    break;
                  case 2:
                    n = 4;
                }
              f.is_confident && (ia = !!f.is_confident[m]);
            }
            l.A.push(new Xu(y, Mm(k[m]), B, n, ia));
          }
          nv(a, l);
          0 < l.A.length && ov(a, l);
          c.push(l);
        }
        mv(a, c);
      }
    },
    rv = function (a, b, c) {
      c
        ? (nv(a, b), mv(a, [b]))
        : (c = bv(a.B).load(dv(b))) && b.B <= c[0]
        ? (a.C.push("od", 2), pv(a, b, !0, c))
        : qv.send(0 == b.type ? "/request" : "/predict", ev(b), function (d, e) {
            return pv(a, b, d, e);
          });
    },
    sv = function (a, b, c) {
      O.call(this);
      this.status = 0;
      this.source = "";
      this.A = 0;
      this.I = "";
      this.B = -1;
      this.F = !0;
      this.P = this.Da = this.H = !1;
      this.K = b;
      this.config = c;
      this.D = [];
      this.U = new lv(this.K.code, c);
      this.N = a;
      this.R = new N(this);
      this.N.ua(this);
      this.R.listen(this.U, "mup", this.tb);
    },
    tv = function (a) {
      return 0 > a.B || 0 == a.D.length ? 0 : Math.floor(a.B / a.config.A);
    },
    uv = function (a, b, c) {
      (c = void 0 === c ? "" : c) || a.J("dlc");
      a.N.push(b, c);
      a.reset();
    },
    vv = function (a) {
      a.J("mup");
    },
    wv = function (a, b, c) {
      if (a.Da) (a.status = 1), vv(a);
      else {
        var d = a.fb();
        if (d || c) {
          b = new cv(a.Ta(), d, a.K.code, a.config, b, c, a.nd());
          if (a.config.R || 1 == c) b.G = a.I;
          a.status = 2;
          vv(a);
          rv(a.U, b, 1 == c ? !1 : a.P);
        }
      }
    },
    xv = function (a, b, c) {
      sv.call(this, a, b, c);
      this.G = [];
      this.C = Kl(mg);
    },
    zv = function (a, b, c) {
      O.call(this);
      this.target = a;
      this.handle = b || a;
      this.H = c || new vo(NaN, NaN, NaN, NaN);
      this.B = Q(a);
      this.A = new N(this);
      Xj(this, this.A);
      this.deltaY = this.deltaX = this.X = this.U = this.screenY = this.screenX = this.clientY = this.clientX = 0;
      this.G = !0;
      this.D = !1;
      ql(this.handle, [ei, hf], this.Rc, !1, this);
      this.C = yv;
    },
    Cv = function (a, b, c) {
      var d = kn(R(a.B).A);
      b += d.x - a.I.x;
      c += d.y - a.I.y;
      a.I = d;
      a.deltaX += b;
      a.deltaY += c;
      return new P(Av(a, a.deltaX), Bv(a, a.deltaY));
    },
    Ev = function (a, b, c, d) {
      a.target.style.left = c + Dg;
      a.target.style.top = d + Dg;
      a.J(new Dv("drag", a, b.clientX, b.clientY, b, c, d));
    },
    Av = function (a, b) {
      var c = a.H;
      a = isNaN(c.left) ? null : c.left;
      c = isNaN(c.width) ? 0 : c.width;
      return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b));
    },
    Bv = function (a, b) {
      var c = a.H;
      a = isNaN(c.top) ? null : c.top;
      c = isNaN(c.height) ? 0 : c.height;
      return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b));
    },
    Dv = function (a, b, c, d, e, f, h) {
      K.call(this, a);
      this.clientX = c;
      this.clientY = d;
      this.left = void 0 !== f ? f : b.deltaX;
      this.top = void 0 !== h ? h : b.deltaY;
    },
    Fv = function (a, b, c) {
      zv.call(this, a, b, c);
      b && this.B != Q(b) && (this.F = mn(Q(b)).frameElement);
    },
    Gv = function (a, b) {
      var c = b.documentElement,
        d = !yv;
      a.A.listen(b, [di, jf], a.R, d);
      a.A.listen(b, [ci, lf], a.rb, d);
      yv ? (c.setCapture(!1), a.A.listen(c, "losecapture", a.rb)) : a.A.listen(mn(b), jb, a.rb);
    },
    Hv = function (a, b) {
      Q(b.target) != a.B && a.F && ((b.clientX += a.F.offsetLeft), (b.clientY += a.F.offsetTop));
    },
    Kv = function (a) {
      if (a && Iv) {
        if (null == Jv) {
          var b = R(),
            c = b.A,
            d = Kn(b, "div");
          d.style.backgroundColor = "rgb(1, 2, 3)";
          b.V(c.body, d);
          c = Ao(d, "backgroundColor");
          c = c.replace(/ /g, "");
          c = "rgb(0,0,0)" === c ? "black" : "rgb(255,255,255)" === c ? "white" : x;
          b.Qa(d);
          Jv = c;
        }
        switch (Jv) {
          case "white":
            sr(a, Fd, Gd);
            break;
          case "black":
            sr(a, Gd, Fd);
            break;
          default:
            rr(a, [Fd, Gd]);
        }
      }
    },
    Lv = function (a) {
      K.call(this, "clkc");
      this.index = a;
    },
    Mv = function (a) {
      this.A = a;
    },
    Nv = function (a, b) {
      a && (a.tabIndex = b ? 0 : -1);
    },
    Ov = function (a, b) {
      b = b.L();
      So(b, M);
      S && (b.hideFocus = !0);
      (a = a.A) && (a ? b.setAttribute("role", a) : b.removeAttribute("role"));
    },
    Pv = function () {},
    Qv = function (a, b) {
      var c;
      if ((c = a.L())) {
        if (!b && a.wa & 32) {
          try {
            c.blur();
          } catch (d) {}
          a.wa & 32 && a.Td(null);
        }
        (c.hasAttribute(Jh) && Cn(c)) != b && (b ? (c.tabIndex = 0) : ((c.tabIndex = -1), c.removeAttribute("tabIndex")));
      }
    },
    Tv = function (a, b, c) {
      Rv || (Rv = { 1: ac, 8: Wg, 16: yb, 64: "expanded" });
      b = Rv[b];
      var d = a.getAttribute("role") || null;
      d && ((d = Sv[d] || b), (b = b == yb || b == Wg ? d : b));
      b && Ds(a, b, c);
    },
    Uv = function () {
      return "goog-control";
    },
    Vv = function (a, b) {
      if (!a.A) {
        var c = Uv();
        c.replace(/\xa0|\s/g, " ");
        a.A = {
          1: c + "-disabled",
          2: c + "-hover",
          4: c + "-active",
          8: c + "-selected",
          16: c + "-checked",
          32: c + "-focused",
          64: c + "-open"
        };
      }
      return a.A[b];
    },
    Xv = function (a, b, c) {
      U.call(this, c);
      if (!b) {
        for (b = this.constructor; b; ) {
          var d = D(b);
          if ((d = Wv[d])) break;
          b = (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
        }
        b = d ? (typeof d.ha === t ? d.ha() : new d()) : null;
      }
      this.C = b;
      this.ld = void 0 !== a ? a : null;
    },
    $v = function (a, b) {
      Yv(a, 2, b) && Zv(a, 2, b);
    },
    aw = function (a, b) {
      Yv(a, 4, b) && Zv(a, 4, b);
    },
    bw = function (a, b) {
      Yv(a, 64, b) && Zv(a, 64, b);
    },
    Zv = function (a, b, c, d) {
      if (!d && 1 == b) a.setEnabled(!c);
      else if (39 & b && c != !!(a.wa & b)) {
        var e = a.C;
        if ((d = a.L())) {
          if ((e = Vv(e, b))) {
            var f = a.L ? a.L() : a;
            f && (c ? qr : rr)(f, [e]);
          }
          Tv(d, b, c);
        }
        a.wa = c ? a.wa | b : a.wa & ~b;
      }
    },
    cw = function (a) {
      return !!(255 & a) && !!(39 & a);
    },
    Yv = function (a, b, c) {
      return !!(39 & b) && !!(a.wa & b) != c && (!(0 & b) || a.J(pp(b, c))) && !a.S;
    },
    dw = function (a, b) {
      return !!a.relatedTarget && vn(b, a.relatedTarget);
    },
    ew = function (a, b) {
      if (cw(16)) {
        var c = !(a.wa & 16);
        Yv(a, 16, c) && Zv(a, 16, c);
      }
      cw(8) && Yv(a, 8, !0) && Zv(a, 8, !0);
      cw(64) && bw(a, !(a.wa & 64));
      c = new K(Oa, a);
      b && ((c.altKey = b.altKey), (c.ctrlKey = b.ctrlKey), (c.metaKey = b.metaKey), (c.shiftKey = b.shiftKey), (c.G = b.G));
      return a.J(c);
    },
    fw = function () {
      return new Xv(null);
    },
    hw = function (a) {
      I.call(this);
      this.B = a;
      this.A = !1;
      this.D = new N(this);
      Xj(this, this.D);
      a = this.B.D;
      this.D.listen(a, gw.dc, this.C).listen(a, gw.ec, this.G).listen(a, q, this.F);
    },
    jw = function (a, b) {
      if (!iw) return (a.button = 0), (a.type = b), a;
      var c = document.createEvent("MouseEvents");
      c.initMouseEvent(
        b,
        a.bubbles,
        a.cancelable,
        a.view || null,
        a.detail,
        a.screenX,
        a.screenY,
        a.clientX,
        a.clientY,
        a.ctrlKey,
        a.altKey,
        a.shiftKey,
        a.metaKey,
        0,
        a.relatedTarget || null
      );
      return c;
    },
    Y = function (a, b, c) {
      U.call(this, c);
      this.ad = b || Mv.ha();
      this.Tb = a || Di;
    },
    kw = function (a) {
      return a.zd || a.L();
    },
    lw = function (a, b) {
      var c = qp(a),
        d = kw(a);
      b
        ? c
            .listen(d, Bc, a.Wd)
            .listen(d, jb, a.Vd)
            .listen(a.mb || (a.mb = new us(kw(a))), se, a.Xd)
        : Hl(Hl(Hl(c, d, Bc, a.Wd), d, jb, a.Vd), a.mb || (a.mb = new us(kw(a))), se, a.Xd);
    },
    qw = function (a, b) {
      var c = sp(a, a.Ka);
      if ((c && typeof c.ac == t && c.ac(b)) || (a.pa && a.pa != c && typeof a.pa.ac == t && a.pa.ac(b))) return !0;
      if (b.shiftKey || b.ctrlKey || b.metaKey || b.altKey) return !1;
      switch (b.keyCode) {
        case 27:
          if (a.Mb) kw(a).blur();
          else return !1;
          break;
        case 36:
          mw(a);
          break;
        case 35:
          nw(a);
          break;
        case 38:
          if (a.Tb == Di) ow(a);
          else return !1;
          break;
        case 37:
          if (a.Tb == jd) rp(a) ? pw(a) : ow(a);
          else return !1;
          break;
        case 40:
          if (a.Tb == Di) pw(a);
          else return !1;
          break;
        case 39:
          if (a.Tb == jd) rp(a) ? ow(a) : pw(a);
          else return !1;
          break;
        default:
          return !1;
      }
      return !0;
    },
    rw = function (a) {
      0 != a.Mb && a.Oa && lw(a, !1);
      a.Mb = !1;
      a.lb && a.Za && Nv(kw(a), !1);
    },
    sw = function (a, b) {
      (b = sp(a, b)) ? $v(b, !0) : -1 < a.Ka && $v(sp(a, a.Ka), !1);
    },
    mw = function (a) {
      tw(
        a,
        function (b, c) {
          return (b + 1) % c;
        },
        (a.G ? a.G.length : 0) - 1
      );
    },
    nw = function (a) {
      tw(
        a,
        function (b, c) {
          b--;
          return 0 > b ? c - 1 : b;
        },
        0
      );
    },
    pw = function (a) {
      tw(
        a,
        function (b, c) {
          return (b + 1) % c;
        },
        a.Ka
      );
    },
    ow = function (a) {
      tw(
        a,
        function (b, c) {
          b--;
          return 0 > b ? c - 1 : b;
        },
        a.Ka
      );
    },
    tw = function (a, b, c) {
      c = 0 > c ? up(a, a.pa) : c;
      var d = a.G ? a.G.length : 0;
      c = b.call(a, c, d);
      for (var e = 0; e <= d; ) {
        var f = sp(a, c),
          h;
        if ((h = f)) h = f.isVisible() && f.isEnabled() && !0;
        if (h) {
          sw(a, c);
          break;
        }
        e++;
        c = b.call(a, c, d);
      }
    },
    uw = function (a, b) {
      var c = Vs(b.A);
      b = R(An(c));
      Y.call(this, void 0, void 0, b);
      this.N = c;
      this.model = a;
      this.R = [];
      this.B = this.A;
      this.P = this.aa = null;
    },
    vw = function (a) {
      a = Mn(a.B, 2);
      a.cellPadding = "0";
      a.cellSpacing = "0";
      a.border = "0";
      or(a, "ita-ppe-tbl");
      or(a.firstChild, de);
      a.rows[0].cells[1].style.width = "1px";
      for (var b = 0; 1 > b; b++) {
        or(a.rows[b], de);
        for (var c = 0; 2 > c; c++) or(a.rows[b].cells[c], de);
      }
      return a;
    },
    ww = function (a, b) {
      a.H = a.B.O(g, ["ita-ppe-pgu", Wd]);
      a.F = a.B.O(g, ["ita-ppe-pgd", Wd]);
      var c = a.B.O(g, "ita-ppe-navi-box");
      a.B.la(c, a.H, a.F);
      a.B.la(b, c);
    },
    yw = function (a) {
      a.C.style.display = x;
      if (0 == a.model.status || (0 == a.model.D.length && !a.model.config.U)) a.qa(!1);
      else {
        a.model.config.U && (a.B.tc(a.K), a.Vc());
        if (2 == a.model.status) V(a.I, ce);
        else {
          W(a.I, ce);
          a.R = [];
          a.B.tc(a.I);
          var b = tv(a.model) * a.model.config.A,
            c = b + a.model.config.A,
            d = a.model.D.length;
          c > d && (c = d);
          for (var e = b; e < c; e++) {
            var f = a.model.D[e],
              h = "",
              k = e + 1 - b;
            if (1 < d || (3 != f.type && 4 != f.type && 5 != f.type))
              switch (a.model.config.N) {
                case 1:
                  h = a.model.config.nb(k) + ". ";
                  break;
                case 2:
                  h = String(k) + ". ";
              }
            h = a.B.O(g, "ita-ppe-can", h + f.target);
            a.model.B == e && V(h, "ita-ppe-hlt");
            a.model.config.K || (h.style.display = "inline");
            a.model.config.Lb && f.A && a.B.la(h, a.B.O(p, "ita-ppe-ant", " (" + f.A + ")"));
            a.R.push(h);
          }
          a.B.la(a.I, a.R);
          So(a.I);
        }
        a: if (!X) {
          if (1 == a.model.D.length && ((b = a.model.D[0].type), 3 == b || 4 == b || 5 == b)) {
            a.H.style.display = x;
            a.F.style.display = x;
            break a;
          }
          a.H.style.display = xd;
          a.F.style.display = xd;
          b = tv(a.model);
          c = Math.ceil(a.model.D.length / a.model.config.A);
          3 != a.model.status
            ? (V(a.H, be), V(a.F, be))
            : (0 == b ? V(a.H, be) : W(a.H, be), b != c - 1 || a.model.F ? W(a.F, be) : V(a.F, be));
        }
        Uo(a.N, Mo(a.L()));
        a.P && xw(a, a.P);
        if (!X) {
          b = a.N;
          if (0 > b.offsetLeft) b.style.left = "0px";
          else {
            var l = Io(b);
            b.offsetLeft + b.offsetWidth > l.right && (b.style.left = l.right - b.offsetWidth + Dg);
          }
          0 > b.offsetTop
            ? (b.style.top = "0px")
            : (l || (l = Io(b)), b.offsetTop + b.offsetHeight > l.bottom && (b.style.top = b.offsetTop - b.offsetHeight - 18 + Dg));
        }
        a.qa(!0);
      }
    },
    xw = function (a, b) {
      var c = a.N;
      X ? (c.style.top = b.A.y + In(a.A).scrollY + Dg) : ((a.P = b), b.Fa(c, 8));
    },
    zw = function (a, b) {
      uw.call(this, a, b);
    },
    Aw = function (a, b) {
      this.A = a;
      this.C = b;
      this.F = {};
      this.S = {};
      this.B = null;
      this.G = "";
      this.D = !0;
      this.H = !1;
    },
    Bw = function (a) {
      return a.A.config.B && "block" == a.C.C.style.display;
    },
    Cw = function (a) {
      var b = a.toString(),
        c = b.lastIndexOf("/"),
        d = b.slice(c + 1);
      b = b.slice(1, c);
      return 0 > d.indexOf("g") ? new RegExp(b, d + "g") : a;
    },
    Ew = function (a, b) {
      var c = Dw;
      if (!c || !a.A.config.S) return null;
      var d = c.qb();
      if (d) {
        var e = d.Ma().length;
        a.A.config.F < e ? (H(d), (d = null)) : a.A.config.F > e && d.Qd(a.A.config.S, a.A.config.F - e, b);
      }
      b = c.Aa(20);
      for (c = b.length - 1; 1 <= c && !a.A.config.S.test(b.charAt(c)); c--);
      a.A.I = b.slice(0, c);
      return d;
    },
    Fw = function (a, b, c, d) {
      a.B = d;
      a.A.config.B && xw(a.C, d.Yb());
      a.G = b == c ? "" : c;
      c = a.A;
      c.H = !0;
      c.Va(b, 0);
      a.H = !0;
    },
    Gw = function (a) {
      H(a.B);
      a.B = Ew(a, !0);
      if (a.B) {
        var b = a.B.Ma();
        b ? (0 != a.A.status ? a.A.Uc(b) : a.A.Va(b, 0)) : (H(a.B), (a.B = null), a.A.reset());
      } else a.A.reset();
    },
    Iw = function (a) {
      ro(
        function () {
          this.H = !1;
          Bw(this)
            ? this.A.reset()
            : this.B && !this.B.kd() && (2 == this.A.status && Hw(this), this.A.ta(), 0 != this.A.status && this.A.reset());
        },
        0,
        a
      );
    },
    Jw = function (a, b) {
      if (b.type == u && 33 <= b.keyCode && 40 >= b.keyCode)
        if (a.D) Iw(a);
        else return !0;
      else if (b.type == te && 46 == b.keyCode && a.D)
        ro(
          function () {
            Gw(this);
            wv(this.A);
          },
          0,
          a
        );
      else if (b.type != u || 46 != b.keyCode || a.D) b.type == v && a.A.reset();
      else return !0;
      return !1;
    },
    Kw = function (a) {
      var b = Dw;
      Bw(a) && a.A.reset();
      if (0 != a.A.status) return a.D ? (b.commitText("", 1), Gw(a)) : (a.A.Vb(), 0 == a.A.status && a.B && a.B.replace("")), !0;
      if (!b.Pb()) return !1;
      b = Ew(a, !1);
      if (!b) return !1;
      var c = b.Ma();
      if (c) {
        var d = a.S[c],
          e = a.A.config.Kb(c);
        if (
          (d && (!e || 3 > c.length - d.length)) ||
          (e && ((d = c.slice(0, c.length - e.back) + e.text), !d.replace(Cw(a.A.config.C), "")))
        )
          return Fw(a, d, c, b), !0;
      }
      H(b);
      return !1;
    },
    Lw = function (a) {
      if (!Dw.Pb() || a.B) return !1;
      var b = Ew(a, !0);
      if (!b) return !1;
      var c = b.Ma();
      if (c) {
        var d = "",
          e = Ew(a, !1);
        e && ((d = e.Ma()), H(e));
        if (c != d && (d = a.S[c])) return Fw(a, d, c, b), wv(a.A), !0;
      }
      H(b);
      return !1;
    },
    Hw = function (a) {
      if (a.B) {
        var b = a.B;
        a.B = null;
        if (b.Ma()) {
          var c = a.A.eb(),
            d = a.F[c];
          d ? d.push(b) : (a.F[c] = [b]);
        } else b.ea();
      }
    },
    Mw = function (a, b) {
      K.call(this, a);
      this.data = b;
    },
    Nw = function (a, b, c) {
      O.call(this);
      this.A = null;
      this.model = a;
      this.view = b;
      this.D = new N(this);
      this.B = Kl(mg);
      this.model.ua(this);
      this.view.ka();
      this.D.listen(this.model, "cmt", this.wf)
        .listen(this.model, "opn", this.zf)
        .listen(this.model, "cls", this.vf)
        .listen(this.model, "mup", this.yf)
        .listen(this.model, "dlc", this.xf)
        .listen(this.view, "clkc", this.qd)
        .listen(this.view, "pd", this.sg)
        .listen(this.view, "pu", this.tg)
        .listen(c.A, hf, this.sd, eq);
      T(
        Ss(c.A),
        function (d) {
          try {
            this.D.listen(d, hf, this.sd, eq), ln && this.D.listen(d, Kb, this.sd, eq);
          } catch (e) {}
        },
        this
      );
    },
    Pw = function (a) {
      a.A
        ? ((a = a.A), !a.A.config.X || 0 != a.A.status || a.H || uv(a.A, " ", " "), (a.H = !1))
        : !Ow(a) && a.model.config.X && uv(a.model, " ", " ");
    },
    Ow = function (a) {
      return 0 != a.model.status;
    },
    Qw = function (a, b, c, d) {
      a = new xv(a, c, d);
      c = new zw(a, b);
      Nw.call(this, a, c, b);
      Xj(this, a);
      Xj(this, c);
    },
    Rw = function () {
      O.call(this);
      this.A = [];
    },
    Sw = function () {
      Rw.call(this);
    },
    Tw = function (a) {
      this.source = a;
      this.B = [];
      this.A = -1;
      this.D = !0;
    },
    Uw = function (a) {
      a.B = [];
      a.A = -1;
      a.D = !0;
    },
    Vw = function (a, b, c) {
      sv.call(this, a, b, c);
      this.C = [];
    },
    Ww = function (a) {
      var b = a.C[a.A];
      a.D = b.B;
      a.F = b.D;
      a.B = b.A;
    },
    Xw = function (a, b) {
      uw.call(this, a, b);
    },
    Yw = function (a, b, c, d) {
      a = new Vw(a, c, d);
      c = new Xw(a, b);
      Nw.call(this, a, c, b);
      this.model = a;
      Xj(this, a);
      Xj(this, c);
    },
    Zw = function (a) {
      function b() {
        return 0 != a.model.status;
      }
      function c() {
        return 1 == a.model.status || 3 == a.model.status;
      }
      return [
        [
          v,
          0,
          a.model.config.C,
          null,
          function () {
            return 0 == a.model.status || c();
          },
          a.Ba,
          a
        ],
        [u, 0, 37, null, c, a.model.sa, a.model, -1],
        [u, 0, 39, null, c, a.model.sa, a.model, 1],
        [u, 0, 13, null, b, a.Ub, a],
        [u, 0, 8, null, null, a.wc, a],
        [u, 0, 27, null, b, a.bc, a],
        [u, 17, 66, null, c, a.model.sa, a.model, -1],
        [u, 17, 70, null, c, a.model.sa, a.model, 1],
        [u, 17, 65, null, c, a.model.sa, a.model, -999],
        [u, 17, 69, null, c, a.model.sa, a.model, 999],
        [u, 17, 77, null, b, a.Ub, a],
        [u, 17, 71, null, c, a.bc, a]
      ];
    },
    $w = function (a) {
      function b(c) {
        if (!this.model.Da) return this.ib(c);
        / $/.test(this.model.source) || 32 != c.keyCode
          ? ((this.model.Da = !1), (c = this.ib(c)), (this.model.Da = !0))
          : ((c.type = v), (c.charCode = c.keyCode), (c = this.Ba(c)));
        return c;
      }
      return [
        [u, 0, 9, 1, null, b, a],
        [u, 0, 40, 1, null, b, a],
        [u, 0, 32, 1, null, b, a],
        [u, 0, 36, 1, null, a.model.sa, a.model, -999],
        [u, 0, 35, 1, null, a.model.sa, a.model, 999],
        [u, 0, 46, 1, null, a.model.Yd, a.model],
        [u, 17, 72, 1, null, a.wc, a],
        [u, 17, 68, 1, null, a.model.Yd, a.model]
      ];
    },
    ax = function () {
      Rw.call(this);
    },
    cx = function (a) {
      var b = [];
      a = a.replace("=", " ");
      for (var c = 0; c < a.length; c++) {
        var d = a.charAt(c);
        b.push(bx[d] || d);
      }
      return b.join("");
    },
    dx = function (a) {
      this.source = a;
      this.target = "";
      this.A = !1;
    },
    ex = function (a, b, c) {
      sv.call(this, a, b, c);
      this.C = [];
      this.G = "";
      this.W = {
        "<": "\uff0c\u3001\u3000\u300a\u3008\uff1c".split(""),
        ">": "\u3002\u22ef\u3000\u30fb\u00b7\uff0e\u300b\u3009\uff1e".split(""),
        ":": ["\uff1a", "\uff1b"],
        "?": ["\uff1f", "\uff0c", "\u00f7"]
      };
      this.X = !1;
    },
    fx = function (a) {
      a.D = [];
      a.B = -1;
      a.status = 1;
      vv(a);
    },
    gx = function (a, b) {
      var c = a.W[b];
      if (!c) return !1;
      a.D = c.map(function (d) {
        return new Xu(b, d, "");
      });
      a.C = [new dx(b)];
      a.C[0].target = c[0];
      a.C[0].A = !0;
      a.source = b;
      a.status = 3;
      a.X = !0;
      a.B = 0;
      a.F = !1;
      a.J("opn");
      vv(a);
      return !0;
    },
    hx = function (a, b) {
      uw.call(this, a, b);
    },
    ix = function (a, b, c, d) {
      a = new ex(a, c, d);
      c = new hx(a, b);
      Nw.call(this, a, c, b);
      this.model = a;
      Xj(this, a);
      Xj(this, c);
    },
    lx = function (a) {
      O.call(this);
      this.D = D(this);
      this.config = Rt("", this.D);
      this.C = a;
      this.F = new N(this);
      this.F.listen(Mt(), "cfga", this.vg);
      jx != kx && (Po(Am(jx)), (jx = kx));
    },
    mx = function (a) {
      O.call(this);
      this.B = a || window;
      this.D = ql(this.B, "resize", this.C, !1, this);
      this.A = hn(this.B || window);
    },
    nx = function (a, b) {
      Fv.call(this, a, b);
      this.N = new mx(In(R(a)));
      a = new N(this);
      a.listen(this.N, "resize", this.P);
      Xj(this, a);
    },
    ox = function (a) {
      var b = Mo(a.target);
      a = a.N;
      a = a.A ? $m(a.A) : null;
      a.width -= 2 + b.width;
      a.height -= 2 + b.height;
      return new uo(2, a.width, a.height, 2);
    },
    px = function (a, b) {
      var c = ox(a);
      a.H = wo(c) || new vo(NaN, NaN, NaN, NaN);
      b = b || Ko(a.target);
      b.x = Math.min(b.x, c.right);
      b.y = Math.min(b.y, c.bottom);
      b.x = Math.max(b.x, c.left);
      b.y = Math.max(b.y, c.top);
      Do(a.target, b);
    },
    qx = function (a) {
      if (a) {
        var b = Jn(R(a)),
          c = a.offsetHeight;
        a.style.left = Math.floor(b.width - a.offsetWidth - 50) + Dg;
        a.style.top = Math.floor(b.height - c - 50) + Dg;
      }
    },
    rx = function (a, b, c) {
      U.call(this);
      this.F = a;
      this.B = b;
      this.C = new N(this);
      this.H = c && J(b, c) ? c : this.B[0];
    },
    sx = function (a) {
      switch (a) {
        case bi:
          return new rx(a, ["ita-kd-btn-en", "ita-kd-btn-zh"], "ita-kd-btn-zh");
        case mi:
          return new rx(a, ["ita-kd-btn-dbc", Rd], Rd);
        case "pun":
          return new rx(a, ["ita-kd-btn-en_pun", Sd], Sd);
        default:
          return null;
      }
    },
    tx = function () {
      var a = vp;
      var b = Vs(a.A);
      a = R(An(b));
      var c = a.A;
      Po(gr(), (c || hr).body);
      U.call(this, a);
      this.C = b;
      this.R = !1;
      this.H = this.I = this.N = this.F = this.P = null;
      this.W = {};
      this.K = new N(this);
      this.B = Kl("bar");
    },
    vx = function (a, b, c, d) {
      a.L();
      c = c && b && ku(b);
      No(a.C, c);
      a.R && (a.B.Jd(Na, "sw"), a.B.report(), (a.R = !1));
      c &&
        (or(a.F.firstChild, [kr(b.code), "ita-kd-icon ita-kd-icon-span ita-kd-statusbar-icon"].join(" ")),
        d && ux(a, d),
        a.B.Qc(b.code),
        a.B.yc("st"),
        (a.R = !0));
    },
    ux = function (a, b) {
      bl(
        b,
        function (c, d) {
          var e = this.W[d],
            f;
          if ((f = e)) (f = e.L()), (f = !pr(f.firstChild, e.B[0])), (f = c != f);
          f &&
            ((f = d == this.P),
            (this.P = null),
            this.B.wb(wx[d][Number(f)]),
            (d = e.L()),
            W(d.firstChild, c ? e.B[0] : e.B[1]),
            V(d.firstChild, c ? e.B[1] : e.B[0]));
        },
        a
      );
    },
    xx = function (a, b, c) {
      K.call(this, "sb");
      this.F = a;
      this.value = c;
    },
    yx = function (a) {
      Tu.call(this, a);
      this.B = new lx(vp);
      this.I = [ys, u, te, v, hf, q];
      this.T = [wb, vb, Yc, "cm", mi, bi, "pun", "lc"];
      this.F = [];
      this.G = new N(this);
      this.G.listen(this.B, ["opn", "cmts", "cmte", "cls"], this.yg);
    },
    zx = function (a) {
      a = a.B.getState();
      var b = {};
      return (b.tlang = !!(a & 1)), (b.tsbc = !(a & 2)), (b.pun = !!(a & 4)), b;
    },
    Ax = function (a, b) {
      a = a.B;
      var c = !!b.tlang,
        d = !b.tsbc;
      b = !!b.pun;
      a.config.state = 0;
      c && (a.config.state |= 1);
      d && (a.config.state |= 2);
      b && (a.config.state |= 4);
    },
    Cx = function (a, b) {
      if (a.D && (b == bi || (a.Ea && ku(a.D)))) {
        var c = a.B;
        c = !!c.A && Ow(c.A);
        a.B.reset(b == bi || b == mi);
        var d = zx(a);
        (b == mi && c) || ((d[b] = !d[b]), b == bi && a.D.code !== ej && (d.pun = d[b]), Ax(a, d), Bx(a, a.D, d), a.Ea && ux(a.Ea, d));
      }
    },
    Bx = function (a, b, c) {
      bl(
        c,
        function (d, e) {
          this.C.J(new xx(e, b, d));
        },
        a
      );
    },
    Dx = function () {
      var a = {},
        b = Dw;
      if (b) {
        var c = ns(b);
        c &&
          T(
            ["font-family", "font-size", "font-weight", "font-style", Ph, Oh, Ne, "word-spacing", "line-height", "text-align", Ei, $b],
            function (d) {
              try {
                var e = lr(c, d);
                e && (a[d] = e);
              } catch (f) {}
            }
          );
      }
      return om(a);
    },
    Ex = function (a, b) {
      b = void 0 === b ? !1 : b;
      K.call(this, "n");
      this.C = a;
      this.H = b;
    },
    Fx = function (a, b) {
      b = void 0 === b ? 10 : b;
      O.call(this);
      this.H = a ? a : new Pu();
      this.D = [];
      this.G = this.A = "";
      this.K = !1;
      this.C = {};
      this.U = b;
      this.B = {};
      this.R = new Pu();
      this.I = "";
      this.F = null;
      this.N = Kl("hwt");
      this.B[Kf] = Lf;
      this.B[Cc] = Dc;
      this.B[Ub] = Vb;
      this.B[Ad] = Bd;
      this.B[Bg] = Cg;
      this.B[rg] = Cg;
      this.B[wg] = Cg;
      this.B[lc] = mc;
      this.B[Mg] = Ng;
    },
    Hx = function (a, b, c, d, e) {
      e = (void 0 === e ? "" : e).slice(-20);
      b = {
        writing_guide: { writing_area_width: c, writing_area_height: d },
        pre_context: e,
        max_num_results: a.U,
        max_completions: 0,
        language: a.G,
        ink: b
      };
      a.K ? (a.F = b) : Gx(a, b);
    },
    Gx = function (a, b) {
      b && lk(a.D, 0, 0, b);
      b = {
        itc: a.C.itc,
        app_version: 0.4,
        api_level: Ix,
        device: window.navigator.appVersion,
        input_type: "0",
        options: "enable_pre_space",
        requests: a.D
      };
      a.D = [];
      a.K = !0;
      a.H.send("/request", a.C, E(a.P, a, 0), null, Jx, b);
    },
    Kx = function (a) {
      "" != a.A && a.D.push({ feedback: "\u2205[deleted]", select_type: "deleted", language: a.G, ink_hash: a.A });
    },
    Lx = function (a, b) {
      var c = b.pre_context.trim().replace(/[,|:%]/g, function (d) {
        return encodeURIComponent(d);
      });
      return { app: a.C.app, itc: b.itc, text: c, num: String(b.max_num_results), cp: "0", cs: "0", ie: "utf-8", oe: "utf-8" };
    },
    Mx = function (a) {
      K.call(this, "b");
      this.candidate = a;
    },
    Nx = function (a) {
      I.call(this);
      this.A = a || R();
      this.B = {};
      this.D = {};
    },
    Ox = function (a, b, c) {
      c = c || "polite";
      var d;
      (d = a.B[c])
        ? d.removeAttribute("aria-hidden")
        : ((d = Kn(a.A, g)),
          (d.id = "goog-lr-" + D(d)),
          (d.style.position = Ma),
          (d.style.top = "-1000px"),
          (d.style.height = "1px"),
          (d.style.overflow = hd),
          Ds(d, "live", c),
          Ds(d, "atomic", "true"),
          a.A.A.body.appendChild(d),
          (a.B[c] = d));
      var e = a.D[c];
      e = e && e === b ? b + "\u00a0" : b;
      b && (a.D[c] = e);
      Bn(d, e);
    },
    Px = function (a, b, c) {
      U.call(this, b);
      this.ua(c || null);
      this.B = a;
      this.F = new N(this);
      this.C = !0;
      this.H = new Nx(b);
    },
    Qx = function (a) {
      V(a.L(), Id);
    },
    Rx = function (a, b) {
      Y.call(this, void 0, void 0, a);
      this.ua(b || null);
      this.B = [];
      this.N = [];
      this.K = new N(this);
      this.F = !0;
      this.I = !1;
      this.C = 0;
      this.H = Za;
      this.P = new Nx(a);
    },
    Sx = function (a) {
      for (var b = 0; b < a.B.length; b++) W(a.B[b].L(), Id);
    },
    Tx = function (a, b) {
      a.F = b;
      for (var c = 0; c < a.B.length; c++) a.B[c].C = b;
    },
    Ux = function (a, b) {
      this.text = a;
      this.state = b;
    },
    Vx = function (a, b, c) {
      var d = Date.now();
      this.x = 0.01 * Math.round(100 * a);
      this.y = 0.01 * Math.round(100 * b);
      this.time = Math.round(d);
      this.pointerType = c;
    },
    Wx = function (a, b) {
      K.call(this, a);
      this.C = b;
    },
    Xx = function (a, b, c) {
      a.listen(b, lf, c, !0);
      T(Ss(b), function (d) {
        try {
          a.listen(d, lf, c, !0);
        } catch (e) {}
      });
    },
    Yx = function (a, b) {
      O.call(this);
      this.B = new N(this);
      this.A = !1;
      this.D = a;
      this.B.listen(a, hf, this.Zd)
        .listen(a, jf, this.ae)
        .listen(a, ei, this.Zd)
        .listen(a, ci, this.bd)
        .listen(a, "touchcancel", this.bd)
        .listen(a, di, this.ae);
      Xx(this.B, b, E(this.bd, this));
    },
    Zx = function (a, b) {
      var c = Ho(a.D),
        d = b.A,
        e = a.D.ownerDocument;
      a = (e.dir == Lg ? -1 : 1) * (e.body.scrollLeft || e.documentElement.scrollLeft || 0);
      e = e.body.scrollTop || e.documentElement.scrollTop || 0;
      null != d.touches && 0 < d.touches.length
        ? ((a = d.touches[0].clientX + a), (d = d.touches[0].clientY + e))
        : !S && "pageX" in d && "pageY" in d
        ? ((a = d.pageX), (d = d.pageY))
        : ((a = d.clientX + a), (d = d.clientY + e));
      return new Vx(a - c.x, d - c.y, b.pointerType);
    },
    $x = function (a, b, c, d, e) {
      Y.call(this, void 0, void 0, b);
      this.ua(c || null);
      this.ca = a || document;
      this.F = window.devicePixelRatio || 1;
      this.K = [];
      this.I = [];
      this.ba = 0;
      this.R = new N(this);
      this.ga = new Nx(this.A);
      this.W = d || Ll();
      this.P = e || "#4D90FE";
      this.N = 0;
    },
    ay = function (a, b) {
      b.time -= a.ba;
      b.x *= a.F;
      b.y *= a.F;
      a.I.push(b);
      var c = a.I.length;
      1 == c
        ? ((b = a.I[0]),
          (c = a.W(b) * a.F),
          a.C.beginPath(),
          (a.C.strokeStyle = a.P),
          (a.C.fillStyle = a.P),
          a.C.arc(b.x, b.y, c / 2, 0, 2 * Math.PI, !0),
          a.C.fill())
        : ((b = a.I[c - 2]),
          (c = a.I[c - 1]),
          a.C.beginPath(),
          (a.C.strokeStyle = a.P),
          (a.C.fillStyle = x),
          (a.C.lineWidth = a.W(b) * a.F),
          (a.C.lineCap = "round"),
          (a.C.lineJoin = "round"),
          a.C.moveTo(b.x, b.y),
          a.C.lineTo(c.x, c.y),
          a.C.stroke());
    },
    by = function (a) {
      return !a.H.A && 0 == a.K.length;
    },
    dy = function (a, b) {
      Y.call(this, void 0, void 0, a);
      this.ua(b || null);
      this.N = cy[""];
      this.ia = new N(this);
      this.ma = !0;
      this.ga = Kl("hwt");
    },
    ey = function (a) {
      O.call(this);
      this.D = this.A = null;
      this.B = a;
      Kk(Aa);
      this.ia = new N(this);
      this.C = !1;
      this.id = 0;
      this.I = "";
      this.H = Kl("hwt");
      this.F = this.G = !1;
    },
    gy = function (a) {
      var b = fy(a.view.F.K, function (e) {
          return [
            fy(e, function (f) {
              return f.x;
            }),
            fy(e, function (f) {
              return f.y;
            }),
            fy(e, function (f) {
              return f.time;
            })
          ];
        }),
        c;
      a.A && (c = a.A.Aa(20));
      var d = a.view.F;
      Hx(a.B, b, d.B.width / d.F, d.B.height / d.F, c);
    },
    hy = function (a, b, c) {
      a.A && (a.J(new Mw("e", b)), a.A.commitText(b, c), a.J(new Mw("d", b)));
    },
    iy = function (a, b) {
      Y.call(this, void 0, void 0, a);
      this.ua(b || null);
      this.F = this.H = this.B = this.C = null;
      this.K = new N(this);
      this.I = new Nx(a);
      this.enable = !0;
    },
    jy = function (a, b) {
      b ? (V(a.H, Jd), sr(a.B, Qd, Od)) : (W(a.H, Jd), sr(a.B, Od, Qd));
    },
    ky = function (a, b, c) {
      b = b || R();
      var d = Vs(b.A);
      b = R(An(d));
      dy.call(this, b, c);
      this.ua(c || null);
      this.C = d;
      this.R = a;
      this.aa = null;
      this.Na = 10 >= Kk(Aa);
      this.P = !1;
      this.W = new Nx(b);
      this.ba = !1;
    },
    my = function (a, b) {
      if (a.R && a.L() && !a.Na) {
        var c = Q(a.C);
        b || ((b = ox(a.aa)), (c = bp(c.body, ly)), (b = new P(c & 4 ? b.right : b.left, c & 1 ? b.bottom : b.top)));
        px(a.aa, b);
      }
    },
    ny = function (a) {
      V(a.ca, "shown");
      a.ba = !0;
      Ox(a.W, ya);
    },
    oy = function (a, b, c) {
      ey.call(this, a, c);
      this.Kd(new ky(b, c, this));
    },
    py = function (a, b) {
      if (b || a.C) a.cd(), a.view.qa(b), a.reset();
    },
    qy = function (a, b) {
      Tu.call(this, b);
      this.B = null;
      this.G = new N(this);
      this.F = a;
      this.B = new oy(new Fx(this.F), !0, vp);
      this.G.listen(this.B, "g", this.ih)
        .listen(this.B, "e", this.kh)
        .listen(this.B, "d", this.jh)
        .listen(this.B, "k", this.Yg)
        .listen(this.B, "j", this.Ah);
    },
    ry = function (a, b) {
      K.call(this, a);
      this.Pa = (this.C = b) ? b.id : null;
    },
    ty = function (a) {
      this.id = a.id;
      this.view = {
        id: a.id,
        title: a.title,
        Jc: a.direction == Lg,
        lc: !!a.is102Keyboard,
        yb: !!a.accents,
        Mc: { "": null, s: null, c: null, l: null, sc: null, cl: null, sl: null, scl: null },
        fc: { "": null, s: null, c: null, l: null, sc: null, cl: null, sl: null, scl: null },
        hc: {}
      };
      this.view.yb && sy(this, a);
      var b = this.view.lc ? qj : rj;
      a = a.mappings;
      for (var c in a) {
        var d = a[c],
          e = c.split(/,/);
        e.join(",") != c && e.push("");
        var f = {};
        for (k in d) {
          var h = d[k];
          if ("" == k) {
            var k = b;
            if (this.view.lc) {
              var l = h.slice(0, 25);
              l += h.slice(26, 37);
              l += h.charAt(25);
              h = l += h.slice(37);
            }
          }
          k = k.replace("m", "\u00bd");
          k = k.replace("=", "\u00bb");
          k = k.replace(";", "\u00ba");
          if (1 == k.length) f[k] = Array.isArray(h) ? h : ["S", h, h];
          else {
            var m = 0;
            l = 0;
            for (var n; (n = k.charAt(l)); ++l) {
              var y = h.charAt(m++);
              if (y == h.charAt(m) && "{" == y) {
                y = h.indexOf("}}", m);
                if (y < m) break;
                m = h.slice(m + 1, y);
                var B = m.split("||");
                3 == B.length ? (f[n] = B) : 1 == B.length && (f[n] = ["S", m, m]);
                m = y + 2;
              } else f[n] = ["S", y, y];
            }
          }
        }
        d = 0;
        for (h = void 0; (h = e[d]), void 0 != h; ++d) this.view.Mc[h] = f;
      }
    },
    sy = function (a, b) {
      var c = b.accents,
        d;
      for (d in c) {
        var e = d.split(/,/);
        e.join(",") != d && e.push("");
        var f = {},
          h = 0;
        for (f.Rb = void 0; (f.Rb = e[h]), void 0 != f.Rb; f = { Rb: f.Rb }, ++h)
          (a.view.fc[f.Rb] = []),
            T(
              c[d],
              (function (k) {
                return function (l) {
                  this.view.fc[k.Rb].push(l.split(","));
                };
              })(f),
              a
            );
      }
      (b = b.transform) &&
        bl(
          b,
          function (k, l) {
            this.view.hc[k] || (this.view.hc[k] = l.replace("\\", ""));
          },
          a
        );
    },
    uy = function (a) {
      this.id = a.id;
      this.B = this.A = null;
      var b = a.transform;
      if (b) {
        var c = [],
          d = [],
          e = 1,
          f;
        for (f in b) {
          d[e] = [new RegExp(f + "$"), b[f]];
          c.push("(" + f + "$)");
          var h = new RegExp(f + "|.*").exec("").length;
          e += h;
        }
        this.A = [new RegExp(c.join("|")), d];
      }
      if ((a = a.historyPruneRegex)) this.B = new RegExp("^(" + a + ")$");
    },
    vy = function (a, b) {
      return a.B ? !!a.B.exec(b) : !1;
    },
    wy = function (a) {
      this.A = { previous: { text: "", La: -1 }, xa: "", current: { text: "", La: -1 } };
      this.B = new uy(a);
      this.id = this.B.id;
    },
    yy = function (a, b) {
      var c = a.A.current.text;
      (c && b && (rk(b, c) || rk(c, b))) || xy(a);
    },
    xy = function (a) {
      a.A.xa = "";
      a.A.previous = { text: "", La: -1 };
      a.A.current = gl(a.A.previous);
    },
    Ay = function () {
      O.call(this);
      this.H = Vl("https://ssl.gstatic.com/inputtools/js/kbd/3/%{file}");
      this.K = {};
      this.B = {};
      this.F = {};
      this.A = this.D = "";
      this.G = E(this.I, this);
      zy.push(this.G);
    },
    By = function (a, b) {
      if (b) {
        var c = a.B[b];
        void 0 == c ? ((a.B[b] = !1), "ko" == b && (b = "hangul"), a.C(b)) : c && a.J(new ry("lld", c.view));
      }
    },
    Dy = function (a, b) {
      if (b && a.D != b) {
        var c = a.B[b];
        c ? ((a.D = b), (a.A = ""), (b = Cy(a)) && xy(b), a.J(new ry("lat", c.view))) : 0 == c && (a.A = b);
      }
    },
    Cy = function (a) {
      return a.F[a.D] || null;
    },
    Ey = function (a) {
      a = Cy(a);
      return !!a && !!a.B.A;
    },
    Gy = function (a, b, c, d) {
      c = void 0 === c ? "" : c;
      d = void 0 === d ? !1 : d;
      var e = null;
      d && ((e = Vs(b.A)), (b = R(An(e))));
      Y.call(this, void 0, void 0, b);
      this.N = e;
      this.Ad = c;
      this.P = d;
      this.B = a;
      this.Kb = "";
      this.F = {};
      this.R = {};
      this.te = 6 >= Kk(ua);
      this.ic = 10 >= Kk(Aa);
      this.Ug = 2 >= Kk(ma);
      this.C = new N(this);
      this.H = this.B.yb;
      this.Dc = {};
      this.B.yb && Fy(this);
      this.aa = null;
      this.Ic = !1;
      this.K = this.ga = this.nb = this.W = this.Lb = this.ra = this.ca = this.ba = this.ma = this.Na = this.I = null;
      this.Ge = 0;
    },
    Hy = function (a, b, c) {
      if (typeof b === z) return b;
      if (a.H) return c && ((b = String.fromCharCode(c)), a.Dc[b]) ? b : null;
      c = String.fromCharCode(b);
      var d = a.B.Mc[a.Kb][c];
      return d && (d = d[2]) ? d : 32 == b ? " " : 0 <= (a.B.lc ? qj : rj).indexOf(c) ? "" : null;
    },
    Jy = function (a, b) {
      if (a.L() && !a.ic) {
        var c = a.A.A;
        a.P && (c = Q(a.N));
        b || ((b = ox(a.aa)), (c = bp(c.body, Iy)), (b = new P(c & 4 ? b.right : b.left, c & 1 ? b.bottom : b.top)));
        px(a.aa, b);
      }
    },
    Ky = function (a, b) {
      bl(
        a.R,
        function (c) {
          No(c, !1);
        },
        a
      );
      (b = a.B.fc[b]) || (b = a.B.fc[""]);
      pk(b).forEach(function (c) {
        this.R[c] && No(this.R[c], !0);
      }, a);
    },
    Ly = function (a, b) {
      a.B.yb && Ky(a, b);
    },
    Oy = function (a, b) {
      if (a.B) {
        a.B.Mc[b] && (a.Kb = b);
        if (!My) {
          var c = { 20: "l", 16: "s", 273: "c" };
          for (e in a.F) {
            var d = a.F[Number(e)];
            var e = parseInt(e, 10);
            var f = c[e];
            if (f) {
              Mj(d) || (d = [d]);
              for (var h = 0, k; (k = d[h]); ++h) or(k, Li), 0 <= b.indexOf(f) && V(k, "vk-sf-s");
            } else if ((f = Ny(a, e))) a.A.tc(d), a.A.V(d, f);
          }
        }
        a.K && !pr(a.K, "vk-sf-s") && (Qs(a.K, [Li, Mi]), V(a.K.firstChild, Mi));
      }
    },
    Py = function (a, b) {
      if (a.isVisible()) {
        var c = typeof b === z ? a.R[b] : a.F[b];
        c &&
          (Qs(c, [Li, "vk-sf-a"]),
          window.setTimeout(function () {
            or(c, Li);
          }, 250));
      }
    },
    Qy = function (a) {
      var b = a.B.lc
          ? [{ 13: 2 }, { 0: 1.5, 13: 1.5 }, { 0: 1.75, 13: 1.25 }, { 0: 1.25, 12: 2.75 }, { 0: 3, 1: 9, 2: 3 }]
          : [{ 13: 2 }, { 0: 1.5, 13: 1.5 }, { 0: 1.75, 12: 2.25 }, { 0: 2.25, 11: 2.75 }, { 0: 3, 1: 9, 2: 3 }],
        c = 4,
        d = 29,
        e = a.W.children[0].children[0];
      if (e) {
        d = Ao(e, "width");
        d = ln && d ? Number(d.slice(0, -2)) : Mo(e).width;
        if (S) {
          c = Wo(e, "marginLeft");
          var f = Wo(e, "marginRight"),
            h = Wo(e, "marginTop");
          e = Wo(e, "marginBottom");
          e = new uo(h, f, e, c);
        } else
          (c = Ao(e, "marginLeft")),
            (f = Ao(e, "marginRight")),
            (h = Ao(e, "marginTop")),
            (e = Ao(e, "marginBottom")),
            (e = new uo(parseFloat(h), parseFloat(f), parseFloat(e), parseFloat(c)));
        c = e.right + e.left;
        d += c;
      }
      for (e = 0; e < b.length; e++) for (var k in b[e]) (k = Number(k)), (a.W.children[e].children[k].style.width = d * b[e][k] - c + Dg);
      !a.B.yb && 7 >= Kk(ua) && ((a.Ge = 15 * d - c - 2), (a.I.style.width = a.Ge + Dg));
    },
    Ry = function (a) {
      7 >= Kk(ua) ? ((a.style.display = "inline"), (a.style.zoom = 1)) : (a.style.display = xd);
    },
    Vy = function (a) {
      function b(h, k) {
        if (k) {
          var l = (k = c.O("A", { target: "_blank", class: "vk-t-btn-o" }));
          var m = this.Ad;
          if (m instanceof dm) m = em(m);
          else {
            b: if (Sy) {
              try {
                var n = new URL(m);
              } catch (y) {
                n = od;
                break b;
              }
              n = n.protocol;
            } else
              c: {
                n = document.createElement("a");
                try {
                  n.href = m;
                } catch (y) {
                  n = void 0;
                  break c;
                }
                n = n.protocol;
                n = ":" === n || "" === n ? od : n;
              }
            m = "javascript:" !== n ? m : void 0;
          }
          void 0 !== m && (l.href = m);
        } else k = c.O(g, { class: "vk-t-btn-o" });
        V(k, h);
        l = c.O(g, ["vk-t-btn", Wd]);
        V(l, h);
        c.V(k, l);
        c.V(a.Na, k);
        Ry(k);
        return k;
      }
      var c = a.A,
        d = a.Jc(),
        e = c.O(g, { dir: d ? Lg : Se, style: "white-space: nowrap;" });
      a.I = c.O(g, "vk-t", c.O(p, "", a.B.title), c.O(p, "vk-ss"));
      a.I.style.textAlign = d ? "right" : "left";
      Ry(a.I);
      c.V(e, a.I);
      !My &&
        a.H &&
        ((a.ma = c.O("A", { class: "vk-l-a", href: "" }, "Full")),
        c.V(a.I, a.ma),
        c.V(a.I, c.O(p, "vk-ss", "|")),
        (a.ba = c.O("A", { class: "vk-l-i", href: "" }, "Accents")),
        c.V(a.I, a.ba),
        V(a.I, d ? "vk-ea-r" : "vk-ea-l"));
      a.Na = c.O(g, "vk-t-btns");
      c.V(e, a.Na);
      var f = d ? "paddingLeft" : "paddingRight";
      a.Na.style[d ? "left" : "right"] = "0";
      Ry(a.Na);
      Ty && (a.Lb = b("vk-sf-hp", !0));
      Uy && (a.ra = b("vk-sf-min"));
      a.ca = b("vk-sf-cl");
      a.ca.style[f] = "14px";
      return e;
    },
    Xy = function (a) {
      var b = a.A.O(g);
      b.dir = b.style.direction = Se;
      bl(
        a.B.fc,
        function (c) {
          c &&
            T(
              c,
              function (d, e) {
                var f = this.A.O(g);
                f.style.whiteSpace = "nowrap";
                var h = !1;
                T(
                  d,
                  function (k) {
                    k && !this.R[k] && ((h = !0), (k = Wy(this, k)), 0 == e && k.setAttribute("data-tooltip-align", "t,c"), this.A.V(f, k));
                  },
                  this
                );
                h && this.A.V(b, f);
              },
              this
            );
        },
        a
      );
      return b;
    },
    Wy = function (a, b) {
      var c = Ny(a, b),
        d = a.A.O("BUTTON", { id: "K" + b, type: "button", class: Li, style: "visibility:" + (c ? "" : hd) });
      c && a.A.V(d, c);
      typeof b === z ? ((a.R[b] = d), a.B.hc[b] && d.setAttribute("data-tooltip", a.B.hc[b])) : (a.F[b] = a.F[b] ? [a.F[b], d] : d);
      return d;
    },
    Ny = function (a, b) {
      var c = a.A;
      if (typeof b === z) {
        var d = c.O(p);
        c.V(d, document.createTextNode(String(b)));
        return d;
      }
      if (9 == b || 13 == b) return null;
      d = c.O(p);
      if (Yy[b]) return Qs(d, ["vk-cap", Wd, "vk-sf-b", Yy[b]]), d;
      if (273 == b) return Qs(d, ["vk-cap", "vk-sf-c273"]), Bn(d, "Ctrl + Alt"), d;
      var e = null;
      (b = a.B.Mc[a.Kb][String.fromCharCode(b)]) &&
        b[1] &&
        ("S" == b[0]
          ? ((e = Ln(c, b[1])), or(d, "vk-cap"))
          : "P" == b[0] &&
            ((e = c.O("IMG", { src: "https://ssl.gstatic.com/inputtools/images/vk/layouts/" + a.B.id + "_" + b[1] + ".png" })),
            or(e, "vk-cap-i")));
      e ? (c.V(d, e), a.Jc() && (d.style.direction = Lg)) : (c.V(d, document.createTextNode(".")), (d.style.visibility = hd));
      return d;
    },
    Fy = function (a) {
      bl(
        a.B.hc,
        function (b) {
          T(
            b,
            function (c) {
              this.Dc[c] = !0;
            },
            this
          );
        },
        a
      );
    },
    $y = function (a, b) {
      a = void 0 === a ? "" : a;
      b = void 0 === b ? !1 : b;
      O.call(this);
      this.F = null;
      this.I = !0;
      this.B = 0;
      this.P = this.X = this.R = this.A = null;
      this.U = !0;
      this.ba = this.ca = !1;
      this.H = new Ay();
      this.W = R();
      this.G = 0;
      this.K = !1;
      this.D = {};
      this.N = new N(this);
      this.C = Kl("vk");
      this.ma = {};
      this.ga = {};
      this.Ad = a;
      this.ra = b;
      this.H.ua(this);
      this.N.listen(this.H, "lat", this.qh);
      for (a = 0; (b = " \u00a0\n\r`~!@#$%^&*()_+-=[]{}\\|;:'\",./<>?".charAt(a)); ++a) this.ma[b] = !0;
      Zy != kx && (Po(Am(Zy)), (Zy = kx));
    },
    az = function (a, b) {
      a.A && (!a.I && b ? a.C.yc("st") : a.I && !b && (a.C.set(Na, "cl"), a.C.report()));
      a.I = b;
    },
    cz = function (a, b) {
      a.U = b;
      a.A && (b || ((a.B = 0), (a.G = 0), Oy(a.A, bz(a.B)), Ly(a.A, bz(a.G))), a.A.qa(b));
    },
    gz = function (a, b) {
      var c = dz(b.keyCode),
        d = ez(a.B, c, b);
      a.B != d && ((a.B = d), Oy(a.A, bz(a.B)));
      d = ez(a.G, c, b);
      a.G != d && ((a.G = d), Ly(a.A, bz(a.G)));
      if (a.B & 16) return (a.D[0] = a.D[c] = !1);
      d = !!(a.B & 4);
      var e = !!(a.B & 2),
        f = !!(a.B & 16);
      if (17 == c || 18 == c || 16 == c || 20 == c) return (a.D[0] = a.D[c] = 20 == c);
      if (f || d != e) return (a.D[0] = a.D[c] = !1);
      a.C.wb("kkc");
      Py(a.A, c);
      b = fz(a, c, b.charCode);
      return (a.D[0] = a.D[c] = b);
    },
    iz = function (a, b) {
      if (a.D[0]) return !0;
      if (a.A.H) return fz(a, b.keyCode, b.charCode);
      if (Uk && M) {
        var c = hz[b.charCode];
        if (c) return fz(a, c, b.charCode);
      }
      return a.D[0];
    },
    ez = function (a, b, c) {
      a &= 776;
      20 == b && (a = Uk && ln ? a | 8 : a ^ 8);
      if (16 == b || c.shiftKey) a |= 1;
      if (18 == b || c.altKey) a |= 2;
      if (17 == b || c.ctrlKey) a |= 4;
      if (91 == b || c.metaKey) a |= 16;
      return a;
    },
    fz = function (a, b, c, d) {
      if (!a.F) return !1;
      (c = Hy(a.A, b, c)) && !a.ma[c] ? a.K || ((a.K = !0), a.C.wb("wc")) : a.K && 8 != b && (a.K = !1);
      if (a.B & 256 || a.B & 512) {
        var e = a.B;
        a.ca || (e &= -257);
        a.ba || (e &= -513);
        e != a.B && ((a.B = e), Oy(a.A, bz(a.B)));
      }
      if ("" == c) return !0;
      if (null == c && 8 != b) return !1;
      if (c)
        if (Ey(a.H)) {
          e = a.F.Aa(20) || "";
          var f = Cy(a.H),
            h;
          if (f)
            if (c) {
              yy(f, e);
              e = f.A;
              e.xa && (h = f.B.transform(e.previous.text, e.previous.La, e.xa + c)) && 0 > h.back && (h = null);
              if (h) {
                var k = e.previous.text;
                k = k.slice(0, k.length - h.back);
                k += h.Sa;
                h.back = e.current.text.length;
                h.Sa = k;
              } else h = f.B.transform(e.current.text, e.current.La, c);
              vy(f.B, e.xa + c)
                ? (e.xa || (e.previous = gl(e.current)), (e.xa += c))
                : vy(f.B, c)
                ? ((e.previous = gl(e.current)), (e.xa = c))
                : ((e.previous.text = ""), (e.previous.La = -1), (e.xa = ""));
              f = e.current.text;
              k = e.current.La;
              h ? ((f = f.slice(0, f.length - h.back)), (f += h.Sa), (k = f.length)) : ((f += c), (h = { back: 0, Sa: c }));
              c = f.lastIndexOf(" ");
              0 <= c && ((f = f.slice(c + 1)), (k = k > c ? k - (c + 1) : -1));
              e.current.text = f;
              e.current.La = k;
            } else h = null;
          else h = null;
          c = h;
        } else c = { back: 0, Sa: c };
      else if (
        ((h = a.F.Aa(20) || ""),
        1 < h.length
          ? ((c = h.charCodeAt(h.length - 2)), (e = h.charCodeAt(h.length - 1)), (c = 55296 <= c && 56319 >= c && 56320 <= e && 57343 >= e))
          : (c = !1),
        (c = { back: c ? 2 : 1, Sa: "" }),
        Ey(a.H) && ((f = c.back), (e = Cy(a.H))))
      )
        (f = void 0 === f ? 1 : f),
          (f = void 0 === f ? 1 : f),
          yy(e, h),
          (h = e.A),
          h.current.text
            ? ((h.current.text = h.current.text.slice(0, -f)),
              h.current.La > h.current.text.length && (h.current.La = h.current.text.length),
              h.xa && (h.xa = h.xa.slice(0, -1)),
              h.xa || (h.previous = { text: "", La: -1 }))
            : ((h.previous = { text: "", La: -1 }), (h.xa = ""), (h.current = gl(h.previous)));
      if (8 == b && !d && 11 <= Kk(ua)) return !1;
      a.J(new Mw("kcs", c.Sa));
      a.F.commitText(c.Sa, c.back);
      a.J(new Mw("kce", c.Sa));
      return !0;
    },
    dz = function (a) {
      jz && ((91 == a && ln) || (224 == a && M)) && (a = 18);
      a = kz[a] || a;
      var b = lz.en;
      b && (a = b[String.fromCharCode(a)] || a);
      return a;
    },
    bz = function (a) {
      var b = "";
      if (a & 1 || a & 256) b += "s";
      if ((a & 2 && a & 4) || a & 512) b += "c";
      a & 8 && (b += "l");
      return b;
    },
    mz = function (a) {
      Tu.call(this, a);
      this.B = new $y(Ty, !0);
      this.F = [u, te, v, hf];
      this.G = new N(this);
      this.B.W = vp;
      this.G.listen(this.B, ["kc", "kmi", "lld"], this.Pf);
      this.G.listen(this.B, "kcs", this.oh);
      this.G.listen(this.B, "kce", this.nh);
      this.G.listen(vp.A, [u, te], this.Cg);
    },
    oz = function (a, b) {
      b = !X && b;
      cz(a.B, b);
      a.active && (nz = b);
    },
    sz = function (a, b) {
      T(["bar", "vk", "hwt"], function (d) {
        var e = Jl.ha(),
          f = new iq(d);
        e.A[d] && e.A[d].ea();
        e.A[d] = f;
      });
      var c = [
        function () {
          qv = a;
          return new yx(b);
        },
        function () {
          return new mz(b);
        }
      ];
      X ||
        ((S
          ? Tm(9)
          : 25 <= Kk(ea) ||
            8 <= Kk(ua) ||
            Dp ||
            19 <= Kk(ma) ||
            (pz && Tm(12.1)) ||
            (ep && Tm(5.1)) ||
            (qz && Tm(3.2)) ||
            (rz && Tm(2.1))) &&
          c.push(function () {
            return new qy(new Pu(), b);
          }));
      return new Wu(c);
    },
    vz = function (a, b, c) {
      O.call(this);
      this.F = c || yp.ha();
      this.A = b || sz(tz(), this.F);
      this.K = !1;
      this.G = {};
      this.C = a ? a.shortcut : "";
      this.H = vp;
      this.N = { kix: 1, punch: 1, trix: 1 };
      this.B = new N(this);
      this.D = new fq(vp.A);
      this.C && this.C.split(",").forEach(this.Vg, this);
      uz && !this.He && (Po(Ns(uz)), (this.He = !0));
      this.F.ua(this);
      a = {};
      Wt(gc, ((a[33] = !0), a));
      this.B.listen(this.F, "uf", this.Ue);
      /^(kix|trix|punch)/.test(jq) &&
        [gc, Dc, Vb, mc, Cg, Lf, Bd].forEach(function () {
          var d = {};
          Wt(gc, ((d[10] = !1), (d[29] = !1), d));
        });
    },
    tz = function () {
      var a = new iq(mg),
        b = Jl.ha();
      b.A.ppe && b.A.ppe.ea();
      b.A.ppe = a;
      return new xu();
    },
    wz = function (a, b) {
      var c = a.H.L(oa);
      c && ((a = a.H.A.createEvent("Event")), a.initEvent(b, !0, !0), c.dispatchEvent(a));
    },
    xz = function () {
      this.B = [];
      this.D = !1;
    },
    yz = function (a, b, c) {
      U.call(this, vp);
      this.F = !0;
      this.I = a;
      this.K = b;
      this.N = !!c;
      this.H = new N(this);
    },
    zz = function () {
      Y.call(this, void 0, void 0, vp);
      this.B = [];
    },
    Az = function (a, b, c, d) {
      b = new yz(b, c, d);
      b.ka();
      fk(a.B, b);
      return b;
    },
    Bz = function () {
      I.call(this);
      this.A = new N(this);
    },
    Cz = function (a, b) {
      K.call(this, Oa);
      this.H = a;
      this.C = b;
    },
    Dz = function (a) {
      K.call(this, "vc");
      this.C = a;
    },
    Ez = function (a, b) {
      K.call(this, "ecd");
      this.H = a;
      this.C = Array.prototype.slice.call(arguments, 1);
    },
    Fz = function (a, b, c, d) {
      Y.call(this, void 0, void 0, d || vp);
      this.B = a;
      this.I = b;
      this.F = {};
      this.P = [];
      this.ba = c;
      this.H = null;
      this.Ua = !1;
      this.W = !0;
      this.C = new N(this);
      this.ca = new Bz();
    },
    Gz = function (a, b, c) {
      var d = a.A.O("LI", { class: Yd, style: sh });
      fk(a.P, { Bc: d, className: Zd });
      var e = a.A.O(p, { class: "ita-kd-menuitem-setting ita-kd-menuitem-span" }, b);
      a.A.V(d, e);
      c && No(d, !1);
      a.F[b] = { name: e };
      return d;
    },
    Hz = function (a, b) {
      a.jd();
      V(b, Zd);
    },
    Jz = function (a) {
      a = un(Iz(a));
      if (!a || 0 == a.length) return null;
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (pr(c, Zd)) return c;
      }
      return null;
    },
    Iz = function (a) {
      return X ? a.L().firstChild : a.L();
    },
    Kz = function (a, b, c, d) {
      mp.call(this, a, b);
      this.C = c ? 5 : 0;
      this.D = d || void 0;
    },
    Lz = function (a, b) {
      a & 48 && (b ^= 4);
      a & 192 && (b ^= 1);
      return b;
    },
    Mz = function (a, b) {
      wp.call(this, b);
      this.C = a;
      this.P = this.ba = this.B = this.I = this.F = this.ga = this.ma = this.aa = null;
    },
    Nz = function (a) {
      if (a.B && !X) {
        var b = a.ca ? 13 : 9,
          c = a.ca ? 12 : 8;
        new Kz(a.L(), b, !0).Fa(a.B.L(), c);
      }
    },
    Oz = function (a) {
      K.call(this, "ita_l");
      this.l10n = a;
    },
    Sz = function (a) {
      var b;
      b || (b = Pz[jq]);
      a = Qz(a);
      var c = [];
      (a = Rz[a]) &&
        T(a, function (d) {
          (b && J(Vq(d, 6, vq), b)) || c.push(xq(Qq(d, 2)));
        });
      return c;
    },
    Qz = function (a) {
      a = a.replace(/_/g, "-").toLowerCase();
      if (0 == a.indexOf("zh-tw")) return "zh-Hant";
      if (0 == a.indexOf("zh-hk")) return Xi;
      if ("zh" == a || 0 == a.indexOf("zh-cn")) return Yi;
      if ("pt" == a) return pg;
      var b = a.split(/[\-]/g),
        c = "";
      a = b[0];
      "iw" == a && (a = Yc);
      Rz[a] && (c = a);
      for (var d = 1; d < b.length; d++) {
        var e = b[d];
        2 == e.length ? (e = e.toUpperCase()) : 4 == e.length && (e = e.charAt(0).toUpperCase() + e.slice(1));
        a += "-" + e;
        Rz[a] && (c = a);
      }
      return c;
    },
    Wz = function (a) {
      I.call(this);
      this.B = (a = Qz(a)) || r;
      this.D = {};
      var b = J(Tz, this.B) ? this.B : r;
      a = Jt(am(Uz, { langCode: b || this.B }));
      var c = E(this.Oe, this);
      yt(a, c, null);
      c = E(this.ph, this);
      yt(a, null, c);
      a = Jt(am(Vz, { langCode: b || this.B }));
      b = E(this.Qe, this);
      yt(a, b, null);
      b = E(this.rh, this);
      yt(a, null, b);
    },
    Xz = function (a, b) {
      var c = a.D[b];
      !c && (b = fu(b)) && ((b = b.A), (b = Qz(b)), (c = a.D[b]), c || ((b = b.split("_")[0]), (c = a.D[b])));
      return c || "";
    },
    Yz = function (a) {
      if (google.ime.l10n.Messages && a) {
        var b = "MSG_" + a.replace(/\s/g, "_").toUpperCase();
        if ((b = google.ime.l10n.Messages[b])) return b;
      }
      return a;
    },
    Zz = function () {
      I.call(this);
      this.A = {};
    },
    cA = function (a) {
      I.call(this);
      a &&
        (void 0 !== a.kbdHelpUrl && (Ty = a.kbdHelpUrl),
        void 0 !== a.kbdMinMax && (Uy = !!a.kbdMinMax),
        void 0 !== a.keyboardDefaultLocation && (Iy = a.keyboardDefaultLocation),
        void 0 !== a.handwritingDefaultLocation && (ly = a.handwritingDefaultLocation),
        void 0 !== a.showStatusBar && ($z = !!a.showStatusBar),
        void 0 !== a.onScreenKeyboard && (nz = !!a.onScreenKeyboard),
        void 0 !== a.applicationName && (jq = a.applicationName),
        void 0 !== a.enableGlobalEventDelegate && (aA = !!a.enableGlobalEventDelegate),
        void 0 !== a.multipleInstance && (this.H = !!a.multipleInstance),
        void 0 !== a.mobile && (X = !!a.mobile));
      this.C = [];
      this.H ? ((this.D = new O()), yp.ha(), zp.push(this.D)) : (this.D = yp.ha());
      this.A = new xz();
      this.F = new N(this);
      this.B = new vz(a, void 0, this.D);
      this.G = [];
      this.F.listen(this.D, "kc", this.Me)
        .listen(this.D, "kmi", this.th)
        .listen(this.D, Bc, this.hh)
        .listen(this.D, "ecd", this.gh)
        .listen(this.B, "tt", this.Ih)
        .listen(this.D, "g", this.Me)
        .listen(this.D, Oa, E(this.Ch, this))
        .listen(this.D, "bind", E(this.Dh, this))
        .listen(this.D, "visi", E(this.Eh, this))
        .listen(this.D, "slc", this.Ac);
      bA(this);
      this.H = !1;
    },
    fA = function (a, b, c) {
      b = { type: Db, prevInputToolName: b, prevInputToolActive: c, currInputToolName: a.A.A.code, currInputToolActive: a.A.D };
      if (0 < a.C.length) {
        c = [];
        for (var d = 0; d < a.C.length; ++d) null != a.C[d].id && fk(c, a.C[d].id);
        b.attachedElements = c;
      }
      a.D.J(b);
      b = a.A.A.code;
      a = a.A.D;
      if (dA != b || eA != a) (dA = b), (eA = a), it.J(new K("b"));
    },
    gA = function (a) {
      a.D.J({ type: "itlu", inputTools: a.A.B });
    },
    hA = function (a) {
      a.D.J({ type: "pelu", elements: a.C });
    },
    bA = function (a) {
      0 !== a.C.length && a.B.register(a.C);
      0 !== a.G.length && a.B.unregister(a.G);
      iA(a, a.A.D, a.A.A);
    },
    iA = function (a, b, c, d) {
      if (!b || (c && fu(c.code))) {
        b ? a.B.activate(c, d) : a.B.deactivate(c || a.A.A);
        var e = (d = a.A.A) ? d.code : null,
          f = a.A.D;
        a.A.A = c;
        a.A.D = b;
        (d == a.A.A && f == a.A.D) || fA(a, e, f);
      }
    },
    jA = function (a, b, c) {
      if ((b = fu(b))) J(a.A.B, b) || a.fd(b.code), iA(a, !0, b, c);
    },
    lA = function (a) {
      jq = zb;
      Ts = "chrome-extension://" + chrome.i18n.getMessage("@@extension_id") + "/image";
      cA.call(this, a);
      kA(this, a);
    },
    kA = function (a, b) {
      H(a.B);
      var c = new to(),
        d = new Wu([
          function () {
            qv = c;
            return new yx();
          },
          function () {
            return new mz();
          },
          function () {
            return new qy(c);
          }
        ]);
      a.B = new vz(b, d);
    },
    mA = function (a, b) {
      function c() {
        e.A.onMessage.removeListener(d);
        e.A.onMessage.removeListener(c);
        e.A = null;
      }
      function d(f) {
        try {
          if (f.event) {
            var h = f.event,
              k;
            for (k in h) {
              var l = h[k],
                m = document.createEvent("Events");
              m.initEvent(k, !0, !0);
              m.view = window;
              for (var n in l) "type" != n && (m[n] = l[n]);
              var y = new Wk(m);
              e.C.B.handleEvent(e, y) || m.type != v || e.commitText(String.fromCharCode(m.charCode), 0);
            }
          }
          f.cursorPos && (e.D = new P(f.cursorPos[0], f.cursorPos[1]));
          f.text && (e.B = f.text[0]);
        } catch (B) {
          console.error(B.stack);
        }
      }
      O.call(this);
      var e = this;
      this.D = new P(0, 0);
      this.B = "";
      this.C = b;
      this.A = a;
      this.A.onMessage.addListener(d);
      this.A.onDisconnect.addListener(c);
    },
    oA = function (a) {
      O.call(this);
      this.A = {};
      this.C = Mj(a) ? a[0] : a;
      this.D = null;
      this.B = new N(this);
      nA(this, a);
    },
    nA = function (a, b) {
      var c = S ? "focusin" : Bc,
        d = S ? "focusout" : jb;
      (Mj(b) ? b : [b]).forEach(function (e) {
        var f = D(e);
        this.A[f] || ((this.A[f] = !0), (e = ln ? mn(e) : e), this.B.listen(e, c, this.G, eq), this.B.listen(e, d, this.F, eq));
      }, a);
    },
    qA = function (a, b, c) {
      if (a.A) {
        var d = jq;
        if (("kix" != d && "punch" != d && "trix" != d) || !S)
          (d = R(b)),
            Ss(d.A).forEach(function (f) {
              try {
                nA(this, f);
              } catch (h) {}
            }, a);
        if ((b = Hn(b))) {
          d = b;
          for (var e = b.tagName; e && (e == pa || "FRAME" == e) && (!b.src || Ks(b.src, window.location.href)); ) {
            d = An(b);
            if (!d) break;
            nA(a, d);
            e = Hn(d);
            if (!e) break;
            d = b;
            b = e;
            if ((e = b.tagName) && "BODY" == e.toUpperCase()) {
              b = d;
              break;
            }
          }
          pA(a, c, b);
        }
      }
    },
    pA = function (a, b, c) {
      c != a.D && ((a.D = c), (b = new Wk(b.A)), (b.target = c), (b.type = "aec"), a.J(b));
    },
    rA = function (a) {
      I.call(this);
      this.H = so;
      this.R = [];
      this.B = "";
      this.D = {};
      this.C = !1;
      this.P = "";
      this.X = !1;
      this.A = a || new lA({ kbdMinMax: !0, showStatusBar: !0, onScreenKeyboard: !0 });
      this.A.fe(zb);
      this.A.ge(!1);
      this.F = null;
      this.T = [];
      this.N = !1;
      this.G = new N(this);
      this.U = !1;
      this.W = E(this.Zf, this);
      this.ba = window.setInterval(E(this.ke, this), 250);
      a = cn(document, oa);
      a || ((a = on(g, { id: oa })), (a.style.display = x), document.body.appendChild(a));
      this.K = a;
      Vj(jl(this.H.kf, !0), this.W);
      chrome.runtime.onMessage.addListener(this.W);
      this.G.listen(a, "uc", this.Sc);
      this.G.listen(a, "suc", this.Wh);
      this.G.listen(a, "rc", this.Qh);
      this.G.listen(a, "ic", this.Md);
      this.G.listen(a, this.H.ag, E(this.ea, this));
      this.G.listen(yp.ha(), ["sb", Db, "kmi", "kma"], this.Xh);
      this.G.listen(yp.ha(), ["se", Yc], this.dh);
      chrome.extension.onConnect.addListener(E(this.ig, this));
      a = Ss();
      a.push(document);
      this.ca = new oA(a);
      this.G.listen(this.ca, "aec", this.Dd);
      a = new Wk();
      a.target = document.activeElement;
      this.Dd(a);
    },
    sA = function (a, b, c, d) {
      var e;
      if (!(e = a.B != b || a.C !== c)) {
        a: {
          e = a.D;
          for (f in e)
            if (!(f in d) || e[f] !== d[f]) {
              var f = !1;
              break a;
            }
          for (var h in d)
            if (!(h in e)) {
              f = !1;
              break a;
            }
          f = !0;
        }
        e = !f;
      }
      e && ((a.B = b), (a.D = gl(d)), (a.C = c), a.N || (c ? jA(a.A, a.B, a.D) : a.Sc()), a.Md());
    },
    tA = function (a) {
      T(
        a.T,
        function (b) {
          b.A && b.A.postMessage({ inputMode: [this.C ? this.B : "", this.D] });
        },
        a
      );
    },
    Bj =
      typeof Object.defineProperties == t
        ? Object.defineProperty
        : function (a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a;
          },
    Aj = zj(this);
  Cj("Symbol", function (a) {
    function b(f) {
      if (this instanceof b) throw new TypeError("Symbol is not a constructor");
      return new c(d + (f || "") + "_" + e++, f);
    }
    function c(f, h) {
      this.A = f;
      Bj(this, "description", { configurable: !0, writable: !0, value: h });
    }
    if (a) return a;
    c.prototype.toString = function () {
      return this.A;
    };
    var d = "jscomp_symbol_" + ((1e9 * Math.random()) >>> 0) + "_",
      e = 0;
    return b;
  });
  Cj(Ja, function (a) {
    if (a) return a;
    a = Symbol(Ja);
    for (
      var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(
          " "
        ),
        c = 0;
      c < b.length;
      c++
    ) {
      var d = Aj[b[c]];
      typeof d === t &&
        typeof d.prototype[a] != t &&
        Bj(d.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function () {
            return Dj(yj(this));
          }
        });
    }
    return a;
  });
  var Gj =
      typeof Object.create == t
        ? Object.create
        : function (a) {
            function b() {}
            b.prototype = a;
            return new b();
          },
    uA;
  if (typeof Object.setPrototypeOf == t) uA = Object.setPrototypeOf;
  else {
    var vA;
    a: {
      var wA = { a: !0 },
        xA = {};
      try {
        xA.__proto__ = wA;
        vA = xA.a;
        break a;
      } catch (a) {}
      vA = !1;
    }
    uA = vA
      ? function (a, b) {
          a.__proto__ = b;
          if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
          return a;
        }
      : null;
  }
  var Hj = uA;
  Cj("WeakMap", function (a) {
    function b(l) {
      this.fa = (k += Math.random() + 1).toString();
      if (l) {
        l = Fj(l);
        for (var m; !(m = l.next()).done; ) (m = m.value), this.set(m[0], m[1]);
      }
    }
    function c() {}
    function d(l) {
      var m = typeof l;
      return (m === Xf && null !== l) || m === t;
    }
    function e(l) {
      if (!Ij(l, h)) {
        var m = new c();
        Bj(l, h, { value: m });
      }
    }
    function f(l) {
      var m = Object[l];
      m &&
        (Object[l] = function (n) {
          if (n instanceof c) return n;
          Object.isExtensible(n) && e(n);
          return m(n);
        });
    }
    if (
      (function () {
        if (!a || !Object.seal) return !1;
        try {
          var l = Object.seal({}),
            m = Object.seal({}),
            n = new a([
              [l, 2],
              [m, 3]
            ]);
          if (2 != n.get(l) || 3 != n.get(m)) return !1;
          n.delete(l);
          n.set(m, 4);
          return !n.has(l) && 4 == n.get(m);
        } catch (y) {
          return !1;
        }
      })()
    )
      return a;
    var h = "$jscomp_hidden_" + Math.random();
    f("freeze");
    f("preventExtensions");
    f("seal");
    var k = 0;
    b.prototype.set = function (l, m) {
      if (!d(l)) throw Error("Invalid WeakMap key");
      e(l);
      if (!Ij(l, h)) throw Error("WeakMap key fail: " + l);
      l[h][this.fa] = m;
      return this;
    };
    b.prototype.get = function (l) {
      return d(l) && Ij(l, h) ? l[h][this.fa] : void 0;
    };
    b.prototype.has = function (l) {
      return d(l) && Ij(l, h) && Ij(l[h], this.fa);
    };
    b.prototype.delete = function (l) {
      return d(l) && Ij(l, h) && Ij(l[h], this.fa) ? delete l[h][this.fa] : !1;
    };
    return b;
  });
  Cj("Map", function (a) {
    function b() {
      var k = {};
      return (k.previous = k.next = k.head = k);
    }
    function c(k, l) {
      var m = k[1];
      return Dj(function () {
        if (m) {
          for (; m.head != k[1]; ) m = m.previous;
          for (; m.next != m.head; ) return (m = m.next), { done: !1, value: l(m) };
          m = null;
        }
        return { done: !0, value: void 0 };
      });
    }
    function d(k, l) {
      var m = l && typeof l;
      m == Xf || m == t ? (f.has(l) ? (m = f.get(l)) : ((m = "" + ++h), f.set(l, m))) : (m = "p_" + l);
      var n = k[0][m];
      if (n && Ij(k[0], m))
        for (k = 0; k < n.length; k++) {
          var y = n[k];
          if ((l !== l && y.key !== y.key) || l === y.key) return { id: m, list: n, index: k, entry: y };
        }
      return { id: m, list: n, index: -1, entry: void 0 };
    }
    function e(k) {
      this[0] = {};
      this[1] = b();
      this.size = 0;
      if (k) {
        k = Fj(k);
        for (var l; !(l = k.next()).done; ) (l = l.value), this.set(l[0], l[1]);
      }
    }
    if (
      (function () {
        if (!a || typeof a != t || !a.prototype.entries || typeof Object.seal != t) return !1;
        try {
          var k = Object.seal({ x: 4 }),
            l = new a(Fj([[k, "s"]]));
          if ("s" != l.get(k) || 1 != l.size || l.get({ x: 4 }) || l.set({ x: 4 }, "t") != l || 2 != l.size) return !1;
          var m = l.entries(),
            n = m.next();
          if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
          n = m.next();
          return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0;
        } catch (y) {
          return !1;
        }
      })()
    )
      return a;
    var f = new WeakMap();
    e.prototype.set = function (k, l) {
      k = 0 === k ? 0 : k;
      var m = d(this, k);
      m.list || (m.list = this[0][m.id] = []);
      m.entry
        ? (m.entry.value = l)
        : ((m.entry = { next: this[1], previous: this[1].previous, head: this[1], key: k, value: l }),
          m.list.push(m.entry),
          (this[1].previous.next = m.entry),
          (this[1].previous = m.entry),
          this.size++);
      return this;
    };
    e.prototype.delete = function (k) {
      k = d(this, k);
      return k.entry && k.list
        ? (k.list.splice(k.index, 1),
          k.list.length || delete this[0][k.id],
          (k.entry.previous.next = k.entry.next),
          (k.entry.next.previous = k.entry.previous),
          (k.entry.head = null),
          this.size--,
          !0)
        : !1;
    };
    e.prototype.clear = function () {
      this[0] = {};
      this[1] = this[1].previous = b();
      this.size = 0;
    };
    e.prototype.has = function (k) {
      return !!d(this, k).entry;
    };
    e.prototype.get = function (k) {
      return (k = d(this, k).entry) && k.value;
    };
    e.prototype.entries = function () {
      return c(this, function (k) {
        return [k.key, k.value];
      });
    };
    e.prototype.keys = function () {
      return c(this, function (k) {
        return k.key;
      });
    };
    e.prototype.values = function () {
      return c(this, function (k) {
        return k.value;
      });
    };
    e.prototype.forEach = function (k, l) {
      for (var m = this.entries(), n; !(n = m.next()).done; ) (n = n.value), k.call(l, n[1], n[0], this);
    };
    e.prototype[Symbol.iterator] = e.prototype.entries;
    var h = 0;
    return e;
  });
  var yA =
    typeof Object.assign == t
      ? Object.assign
      : function (a, b) {
          for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d) for (var e in d) Ij(d, e) && (a[e] = d[e]);
          }
          return a;
        };
  Cj("Object.assign", function (a) {
    return a || yA;
  });
  Cj("Array.prototype.find", function (a) {
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
  Cj("Array.prototype.keys", function (a) {
    return a
      ? a
      : function () {
          return Jj(this, function (b) {
            return b;
          });
        };
  });
  Cj("Object.values", function (a) {
    return a
      ? a
      : function (b) {
          var c = [],
            d;
          for (d in b) Ij(b, d) && c.push(b[d]);
          return c;
        };
  });
  Cj("Array.from", function (a) {
    return a
      ? a
      : function (b, c, d) {
          c =
            null != c
              ? c
              : function (k) {
                  return k;
                };
          var e = [],
            f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
          if (typeof f == t) {
            b = f.call(b);
            for (var h = 0; !(f = b.next()).done; ) e.push(c.call(d, f.value, h++));
          } else for (f = b.length, h = 0; h < f; h++) e.push(c.call(d, b[h], h));
          return e;
        };
  });
  Cj("Array.prototype.values", function (a) {
    return a
      ? a
      : function () {
          return Jj(this, function (b, c) {
            return c;
          });
        };
  });
  Cj("Array.prototype.fill", function (a) {
    return a
      ? a
      : function (b, c, d) {
          var e = this.length || 0;
          0 > c && (c = Math.max(0, e + c));
          if (null == d || d > e) d = e;
          d = Number(d);
          0 > d && (d = Math.max(0, e + d));
          for (c = Number(c || 0); c < d; c++) this[c] = b;
          return this;
        };
  });
  Cj("Int8Array.prototype.fill", Kj);
  Cj("Uint8Array.prototype.fill", Kj);
  Cj("Uint8ClampedArray.prototype.fill", Kj);
  Cj("Int16Array.prototype.fill", Kj);
  Cj("Uint16Array.prototype.fill", Kj);
  Cj("Int32Array.prototype.fill", Kj);
  Cj("Uint32Array.prototype.fill", Kj);
  Cj("Float32Array.prototype.fill", Kj);
  Cj("Float64Array.prototype.fill", Kj);
  var Mu = Mu || {},
    F = this || self,
    Oj = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
    Pj = 0;
  (function () {
    function a(h) {
      this.t = {};
      this.tick = function (k, l, m) {
        this.t[k] = [void 0 != m ? m : new Date().getTime(), l];
        if (void 0 == m)
          try {
            window.console.timeStamp("CSI/" + k);
          } catch (n) {}
      };
      this.getStartTickTime = function () {
        return this.t.start[0];
      };
      this.tick(rh, null, h);
    }
    var b;
    if (window.performance) var c = (b = window.performance.timing) && b.responseStart;
    var d = 0 < c ? new a(c) : new a();
    window.jstiming = { Timer: a, load: d };
    if (b) {
      var e = b.navigationStart;
      0 < e && c >= e && (window.jstiming.srt = c - e);
    }
    if (b) {
      var f = window.jstiming.load;
      0 < e && c >= e && (f.tick("_wtsrt", void 0, e), f.tick("wtsrt_", "_wtsrt", c), f.tick("tbsd_", "wtsrt_"));
    }
    try {
      (b = null),
        window.chrome &&
          window.chrome.csi &&
          ((b = Math.floor(window.chrome.csi().pageT)),
          f && 0 < e && (f.tick("_tbnd", void 0, window.chrome.csi().startE), f.tick("tbnd_", "_tbnd", e))),
        null == b && window.gtbExternal && (b = window.gtbExternal.pageT()),
        null == b &&
          window.external &&
          ((b = window.external.pageT), f && 0 < e && (f.tick("_tbnd", void 0, window.external.startE), f.tick("tbnd_", "_tbnd", e))),
        b && (window.jstiming.pt = b);
    } catch (h) {}
  })();
  var so = {
    hf: "aq",
    Zh: "ai",
    ai: "ra",
    bi: "ds",
    ci: "dr",
    jf: "fd",
    hi: "gi",
    ii: "gl",
    kf: "gp",
    lf: "hd",
    cg: "pl",
    dg: "re",
    Kp: "ri",
    eg: "sq",
    Mp: "si",
    Np: "ss",
    SUCCESS: "su",
    Vp: "ui",
    fg: "ua",
    je: "up",
    URL: "url",
    Rl: "input_tools",
    Bk: "current_input",
    Sl: "current_input_state",
    Tp: "tvk",
    ag: "GOOGLE_ITA_KD",
    fi: "ft",
    Yp: "ut",
    bg: "km"
  };
  var zA = {},
    wx = ((zA.tlang = ["ltkc", "ltcc"]), (zA.tsbc = ["bckc", "bccc"]), (zA.pun = ["ptkc", "ptcc"]), zA);
  I.prototype.S = !1;
  I.prototype.ea = function () {
    this.S || ((this.S = !0), this.M());
  };
  I.prototype.M = function () {
    if (this.Ia) for (; this.Ia.length; ) this.Ia.shift()();
  };
  C(Yj, I);
  A = Yj.prototype;
  A.Qc = function () {};
  A.wb = function () {};
  A.get = function () {};
  A.set = function () {};
  A.Jd = function () {};
  A.yc = function () {};
  A.end = function () {};
  A.push = function () {};
  A.Bb = function () {};
  A.report = function () {};
  G(Zj, Error);
  Zj.prototype.name = "CustomError";
  var bn;
  G(ak, Zj);
  ak.prototype.name = "AssertionError";
  var dk = Array.prototype.indexOf
      ? function (a, b) {
          return Array.prototype.indexOf.call(a, b, void 0);
        }
      : function (a, b) {
          if (typeof a === z) return typeof b !== z || 1 != b.length ? -1 : a.indexOf(b, 0);
          for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
          return -1;
        },
    T = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = typeof a === z ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
        },
    et = Array.prototype.filter
      ? function (a, b) {
          return Array.prototype.filter.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = [], e = 0, f = typeof a === z ? a.split("") : a, h = 0; h < c; h++)
            if (h in f) {
              var k = f[h];
              b.call(void 0, k, h, a) && (d[e++] = k);
            }
          return d;
        },
    fy = Array.prototype.map
      ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (var c = a.length, d = Array(c), e = typeof a === z ? a.split("") : a, f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
          return d;
        },
    Vu = Array.prototype.reduce
      ? function (a, b, c) {
          return Array.prototype.reduce.call(a, b, c);
        }
      : function (a, b, c) {
          var d = c;
          T(a, function (e, f) {
            d = b.call(void 0, d, e, f, a);
          });
          return d;
        },
    zt = Array.prototype.some
      ? function (a, b, c) {
          return Array.prototype.some.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = typeof a === z ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return !0;
          return !1;
        },
    AA = Array.prototype.every
      ? function (a, b, c) {
          return Array.prototype.every.call(a, b, c);
        }
      : function (a, b, c) {
          for (var d = a.length, e = typeof a === z ? a.split("") : a, f = 0; f < d; f++) if (f in e && !b.call(c, e[f], f, a)) return !1;
          return !0;
        };
  K.prototype.stopPropagation = function () {
    this.D = !0;
  };
  K.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
  };
  var wl = (function () {
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
  var wk, BA;
  a: {
    for (var CA = ["CLOSURE_FLAGS"], DA = F, EA = 0; EA < CA.length; EA++)
      if (((DA = DA[CA[EA]]), null == DA)) {
        BA = null;
        break a;
      }
    BA = DA;
  }
  var FA = BA && BA[610401301];
  wk = null != FA ? FA : !1;
  var sk = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  var xk,
    GA = F.navigator;
  xk = GA ? GA.userAgentData || null : null;
  Pk[" "] = function () {};
  var pz = Ak(),
    S = Bk(),
    Dp = L(ja),
    ip = Dp || S,
    M = L("Gecko") && !(-1 != vk().toLowerCase().indexOf("webkit") && !L(ja)) && !(L("Trident") || L("MSIE")) && !L(ja),
    ln = -1 != vk().toLowerCase().indexOf("webkit") && !L(ja),
    HA = ln && L("Mobile"),
    Uk = Ok(),
    Qp = Lk() ? "Windows" === xk.platform : L("Windows"),
    jz = (Lk() ? "Linux" === xk.platform : L("Linux")) || (Lk() ? "Chrome OS" === xk.platform : L("CrOS")),
    IA = Lk() ? xk.platform === ca : L(ca),
    JA = Mk(),
    KA = L("iPad"),
    LA = L("iPod"),
    fp = Nk(),
    MA;
  a: {
    var NA = "",
      OA = (function () {
        var a = vk();
        if (M) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Dp) return /Edge\/([\d\.]+)/.exec(a);
        if (S) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (ln) return /WebKit\/(\S+)/.exec(a);
        if (pz) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    OA && (NA = OA ? OA[1] : "");
    if (S) {
      var PA = Rk();
      if (null != PA && PA > parseFloat(NA)) {
        MA = String(PA);
        break a;
      }
    }
    MA = NA;
  }
  var Ix = MA,
    QA;
  if (F.document && S) {
    var RA = Rk();
    QA = RA ? RA : parseInt(Ix, 10) || void 0;
  } else QA = void 0;
  var Sk = QA;
  var ys = S ? "textinput" : "textInput";
  G(Wk, K);
  var Vk = { 2: "touch", 3: "pen", 4: "mouse" };
  Wk.prototype.stopPropagation = function () {
    Wk.da.stopPropagation.call(this);
    this.A.stopPropagation ? this.A.stopPropagation() : (this.A.cancelBubble = !0);
  };
  Wk.prototype.preventDefault = function () {
    Wk.da.preventDefault.call(this);
    var a = this.A;
    a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
  };
  var Xk = "closure_listenable_" + ((1e6 * Math.random()) | 0);
  var Zk = 0;
  var hl = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  ll.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.A[f];
    a || ((a = this.A[f] = []), this.B++);
    var h = nl(a, b, d, e);
    -1 < h ? ((b = a[h]), c || (b.zc = !1)) : ((b = new $k(b, this.src, f, !!d, e)), (b.zc = c), a.push(b));
    return b;
  };
  ll.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.A)) return !1;
    var e = this.A[a];
    b = nl(e, b, c, d);
    return -1 < b ? (al(e[b]), Array.prototype.splice.call(e, b, 1), 0 == e.length && (delete this.A[a], this.B--), !0) : !1;
  };
  ll.prototype.removeAll = function (a) {
    a = a && a.toString();
    var b = 0,
      c;
    for (c in this.A)
      if (!a || c == a) {
        for (var d = this.A[c], e = 0; e < d.length; e++) ++b, al(d[e]);
        delete this.A[c];
        this.B--;
      }
    return b;
  };
  var ul = "closure_lm_" + ((1e6 * Math.random()) | 0),
    Cl = {},
    yl = 0,
    Dl = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
  G(N, I);
  var Gl = [];
  N.prototype.listen = function (a, b, c, d) {
    return El(this, a, b, c, d);
  };
  N.prototype.removeAll = function () {
    bl(
      this.A,
      function (a, b) {
        this.A.hasOwnProperty(b) && Bl(a);
      },
      this
    );
    this.A = {};
  };
  N.prototype.M = function () {
    N.da.M.call(this);
    this.removeAll();
  };
  N.prototype.handleEvent = function () {
    throw Error("EventHandler.handleEvent not implemented");
  };
  C(Jl, I);
  Jl.prototype.D = function () {
    this.ea();
  };
  Jl.prototype.M = function () {
    H(this.B);
    for (var a in this.A) H(this.A[a]), delete this.A[a];
    I.prototype.M.call(this);
  };
  Jl.ha = function () {
    return Il(Jl);
  };
  var Iv = Ek(),
    SA = Mk() || L("iPod"),
    qz = L("iPad"),
    rz = Hk(),
    hp = Fk(),
    ep = Gk() && !Nk();
  var Pl;
  Tl.prototype.vb = !0;
  Tl.prototype.hb = function () {
    return this.A;
  };
  var Sl = {},
    Rl = {},
    kx = Vl("");
  Wl.prototype.toString = function () {
    return this.A + "";
  };
  Wl.prototype.vb = !0;
  Wl.prototype.hb = function () {
    return this.A.toString();
  };
  var Zl = /%{(\w+)}/g,
    Yl = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
    TA = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
    bm = {};
  dm.prototype.toString = function () {
    return this.A.toString();
  };
  dm.prototype.vb = !0;
  dm.prototype.hb = function () {
    return this.A.toString();
  };
  var hm = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
    fm = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
    gm = {},
    vm = new dm("about:invalid#zClosurez", gm);
  var mm = {};
  jm.prototype.hb = function () {
    return this.A;
  };
  jm.prototype.toString = function () {
    return this.A.toString();
  };
  var nm = new jm("", mm),
    rm = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
    qm = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
    pm = RegExp(
      "\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)",
      "g"
    ),
    sm = /\/\*/;
  var Cm = {};
  wm.prototype.toString = function () {
    return this.A.toString();
  };
  wm.prototype.hb = function () {
    return this.A;
  };
  var zm = xm("");
  var Fm = {};
  Dm.prototype.hb = function () {
    return this.A.toString();
  };
  Dm.prototype.toString = function () {
    return this.A.toString();
  };
  var UA = new Dm((F.trustedTypes && F.trustedTypes.emptyHTML) || "", Fm);
  var Om = (function (a) {
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
      a.innerHTML = Em(UA);
      return !b.parentElement;
    }),
    Jm = /^[\w+/_-]+[=]{0,2}$/;
  var Nm = /&([^;\s<&]+);?/g;
  var Sm = (function () {
    if (Iv) return Rm(/Firefox\/([0-9.]+)/);
    if (S || Dp || pz) return Ix;
    if (hp) {
      if (Nk() || Ok()) {
        var a = Rm(/CriOS\/([0-9.]+)/);
        if (a) return a;
      }
      return Rm(/Chrome\/([0-9.]+)/);
    }
    if (ep && !Nk()) return Rm(/Version\/([0-9.]+)/);
    if (SA || qz) {
      if ((a = /Version\/(\S+).*Mobile\/(\S+)/.exec(vk()))) return a[1] + "." + a[2];
    } else if (rz) return (a = Rm(/Android\s+([0-9.]+)/)) ? a : Rm(/Version\/([0-9.]+)/);
    return "";
  })();
  G(O, I);
  O.prototype[Xk] = !0;
  A = O.prototype;
  A.ua = function (a) {
    this.ob = a;
  };
  A.removeEventListener = function (a, b, c, d) {
    Al(this, a, b, c, d);
  };
  A.J = function (a) {
    var b,
      c = this.ob;
    if (c) for (b = []; c; c = c.ob) b.push(c);
    c = this.Tg;
    var d = a.type || a;
    if (typeof a === z) a = new K(a, c);
    else if (a instanceof K) a.target = a.target || c;
    else {
      var e = a;
      a = new K(d, c);
      il(a, e);
    }
    e = !0;
    if (b)
      for (var f = b.length - 1; !a.D && 0 <= f; f--) {
        var h = (a.B = b[f]);
        e = Um(h, d, !0, a) && e;
      }
    a.D || ((h = a.B = c), (e = Um(h, d, !0, a) && e), a.D || (e = Um(h, d, !1, a) && e));
    if (b) for (f = 0; !a.D && f < b.length; f++) (h = a.B = b[f]), (e = Um(h, d, !1, a) && e);
    return e;
  };
  A.M = function () {
    O.da.M.call(this);
    this.T && this.T.removeAll(void 0);
    this.ob = null;
  };
  A.listen = function (a, b, c, d) {
    return this.T.add(String(a), b, !1, c, d);
  };
  Vm.prototype.get = function () {
    if (0 < this.B) {
      this.B--;
      var a = this.A;
      this.A = a.next;
      a.next = null;
    } else a = this.D();
    return a;
  };
  P.prototype.Cc = function (a) {
    return a instanceof P && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1);
  };
  P.prototype.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  P.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  P.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  Ym.prototype.aspectRatio = function () {
    return this.width / this.height;
  };
  Ym.prototype.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  Ym.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  Ym.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var en = {
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      colspan: "colSpan",
      frameborder: "frameBorder",
      height: "height",
      maxlength: "maxLength",
      nonce: Sf,
      role: "role",
      rowspan: "rowSpan",
      type: "type",
      usemap: "useMap",
      valign: "vAlign",
      width: "width"
    },
    Fn = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 },
    Gn = { IMG: " ", BR: "\n" };
  A = an.prototype;
  A.L = function (a) {
    return cn(this.A, a);
  };
  A.setProperties = fn;
  A.O = function (a, b, c) {
    return nn(this.A, arguments);
  };
  A.V = function (a, b) {
    a.appendChild(b);
  };
  A.la = function (a, b) {
    qn(Q(a), a, arguments, 1);
  };
  A.tc = sn;
  A.Qa = tn;
  A.getChildren = un;
  A.contains = vn;
  A.ng = An;
  A.Uh = Bn;
  var Nn;
  Rn.prototype.add = function (a, b) {
    var c = Zn.get();
    c.set(a, b);
    this.B ? (this.B.next = c) : (this.A = c);
    this.B = c;
  };
  Rn.prototype.remove = function () {
    var a = null;
    this.A && ((a = this.A), (this.A = this.A.next), this.A || (this.B = null), (a.next = null));
    return a;
  };
  var Zn = new Vm(
    function () {
      return new Sn();
    },
    function (a) {
      return a.reset();
    }
  );
  Sn.prototype.set = function (a, b) {
    this.B = a;
    this.A = b;
    this.next = null;
  };
  Sn.prototype.reset = function () {
    this.next = this.A = this.B = null;
  };
  var Tn,
    Vn = !1,
    Wn = new Rn();
  co.prototype.reset = function () {
    this.D = this.B = this.C = this.A = null;
    this.G = !1;
  };
  var eo = new Vm(
    function () {
      return new co();
    },
    function (a) {
      a.reset();
    }
  );
  bo.prototype.then = function (a, b, c) {
    return mo(this, typeof a === t ? a : null, typeof b === t ? b : null, c);
  };
  bo.prototype.$goog_Thenable = !0;
  bo.prototype.cancel = function (a) {
    if (0 == this.A) {
      var b = new lo(a);
      Xn(function () {
        go(this, b);
      }, this);
    }
  };
  bo.prototype.I = function (a) {
    this.A = 0;
    ao(this, 2, a);
  };
  bo.prototype.T = function (a) {
    this.A = 0;
    ao(this, 3, a);
  };
  bo.prototype.S = function () {
    for (var a; (a = ho(this)); ) io(this, a, this.A, this.H);
    this.F = !1;
  };
  var qo = Qn;
  G(lo, Zj);
  lo.prototype.name = "cancel";
  C(to, I);
  to.prototype.D = function (a, b, c) {
    if (!this.S) {
      var d = E,
        e = c[this.A.SUCCESS];
      var f = c[this.A.dg];
      if (f) {
        f = f.replace(/\s*while\(1\);\s*(.*)/g, "$1");
        try {
          var h = JSON.parse(f);
        } catch (k) {
          h = null;
        }
      } else h = null;
      a = d(a, b, e, h);
      this.B.push("od", c.od);
      ro(a);
    }
  };
  to.prototype.send = function (a, b, c, d, e, f) {
    Vj(jl(this.A.eg, !0, this.A.URL, a, this.A.cg, b, this.A.lf, e, this.A.jf, f), E(this.D, this, c, d || null));
  };
  to.prototype.abort = function () {
    Vj(jl(this.A.hf, !0));
  };
  var hr = window.document,
    fr = window,
    vp = R(window.document),
    it = new O(),
    dA = "",
    eA = !1;
  uo.prototype.contains = function (a) {
    return this && a
      ? a instanceof uo
        ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom
        : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
      : !1;
  };
  uo.prototype.ceil = function () {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this;
  };
  uo.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this;
  };
  uo.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this;
  };
  vo.prototype.contains = function (a) {
    return a instanceof P
      ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
      : this.left <= a.left &&
          this.left + this.width >= a.left + a.width &&
          this.top <= a.top &&
          this.top + this.height >= a.top + a.height;
  };
  vo.prototype.ceil = function () {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  vo.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  vo.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  var zo = {},
    Ro = M ? "MozUserSelect" : ln || Dp ? "WebkitUserSelect" : null,
    Xo = /[^\d]+$/,
    Yo = { cm: 1, in: 1, mm: 1, pc: 1, pt: 1 },
    Zo = { em: 1, ex: 1 };
  var gp = (function () {
    if (Qp) {
      var a = /Windows NT ([0-9.]+)/;
      return (a = a.exec(vk())) ? a[1] : "0";
    }
    return Uk
      ? ((a = /1[0|1][_.][0-9_.]+/), (a = a.exec(vk())) ? a[0].replace(/_/g, ".") : "10")
      : IA
      ? ((a = /Android\s+([^\);]+)(\)|;)/), (a = a.exec(vk())) ? a[1] : "")
      : JA || KA || LA
      ? ((a = /(?:iPhone|CPU)\s+OS\s+(\S+)/), (a = a.exec(vk())) ? a[1].replace(/_/g, ".") : "")
      : "";
  })();
  var jq = "jsapi",
    Ty = "",
    Uy = !1,
    $z = !0,
    Iy = 13,
    ly = 13,
    As = !0,
    eq = !(8 >= Kk(ua)),
    nz = !0,
    Us = "",
    Ts = "",
    aA = !0,
    X = HA,
    My = !1;
  C(jp, K);
  jp.prototype.L = function () {
    return this.C;
  };
  C(kp, K);
  lp.prototype.Fa = function () {};
  G(mp, lp);
  mp.prototype.Fa = function (a, b, c) {
    dp(this.A, this.B, a, b, void 0, c, this.G);
  };
  Lj(np);
  np.prototype.A = 0;
  G(U, O);
  U.prototype.Sg = np.ha();
  var op = null;
  A = U.prototype;
  A.L = function () {
    return this.D;
  };
  A.ua = function (a) {
    if (this.X && this.X != a) throw Error("Method not supported");
    U.da.ua.call(this, a);
  };
  A.Z = function () {
    this.D = Kn(this.A, g);
  };
  A.ka = function (a) {
    if (this.Oa) throw Error("Component already rendered");
    this.D || this.Z();
    a ? a.insertBefore(this.D, null) : this.A.A.body.appendChild(this.D);
    (this.X && !this.X.Oa) || this.Y();
  };
  A.Y = function () {
    this.Oa = !0;
    tp(this, function (a) {
      !a.Oa && a.L() && a.Y();
    });
  };
  A.bb = function () {
    tp(this, function (a) {
      a.Oa && a.bb();
    });
    this.U && this.U.removeAll();
    this.Oa = !1;
  };
  A.M = function () {
    this.Oa && this.bb();
    this.U && (this.U.ea(), delete this.U);
    tp(this, function (a) {
      a.ea();
    });
    this.D && tn(this.D);
    this.X = this.D = this.G = null;
    U.da.M.call(this);
  };
  C(wp, U);
  A = wp.prototype;
  A.Fe = function () {};
  A.Ve = function () {};
  A.Lh = function () {
    if (this.N)
      if (this.N.tagName.toUpperCase() == pa)
        try {
          a: {
            var a = this.N;
            try {
              var b = a.contentWindow || (a.contentDocument ? mn(a.contentDocument) : null);
              break a;
            } catch (c) {}
            b = null;
          }
          b && b.focus();
        } catch (c) {}
      else this.N.focus();
  };
  A.Y = function () {
    var a = this,
      b = this.L();
    this.H.listen(b, w, function () {
      a.Ua = !0;
    });
    this.H.listen(b, kf, function () {
      a.Ua = !1;
    });
    this.H.listen(this.K, Oa, E(this.Lh, this));
  };
  A.ne = function (a) {
    a = this.A.L(a);
    this.N != a && ((this.N = a), this.K.J(new jp(a)));
  };
  A.uc = function (a, b, c) {
    if (this.Ze && (a = this.A.L(a))) {
      var d = new uo(0, 0, 0, 0);
      null != c &&
        (typeof c === Tf
          ? (d = new uo(c, c, c, c))
          : Mj(c) && 4 == c.length && (d = new uo(Number(c[0]), Number(c[1]), Number(c[2]), Number(c[3]))));
      c = this.L();
      new mp(a, b[0]).Fa(c, b[1], d);
      if (0 == jq.indexOf("og")) {
        for (b = "99"; a; )
          Nj(a) && 1 == a.nodeType && a.style.zIndex && ((d = Bo(a, "zIndex")), Number(b) < Number(d) && (b = d)), (a = a.parentNode);
        c.style.zIndex = b;
      }
    }
  };
  A.show = function () {
    var a = this.L();
    a && a.style.display != this.W && ((a.style.display = this.W), this.K.J(new kp(!0)));
  };
  A.hide = function (a) {
    var b = this.L();
    if (a || (b && b.style.display != x && !this.Ua)) this.Fe(), this.K.J(new kp(!1));
  };
  A.mf = function () {
    var a = this.L();
    if (a)
      switch (a.style.display) {
        case this.W:
          this.hide();
          break;
        case x:
          this.show();
      }
  };
  A.M = function () {
    U.prototype.M.call(this);
    H(this.H);
  };
  var VA = {
    CURRENT_INPUT_TOOL_CHANGED: Db,
    di: "ecd",
    Op: "se",
    yk: Yc,
    Pp: "sp",
    zk: "hp",
    Tl: "itlu",
    Bp: "ita_l",
    Hp: "pelu",
    Lp: "slc",
    Qp: "sb",
    Ak: "ic",
    Jp: "rc",
    Rp: "suc",
    Sp: "syc",
    Wp: "uc",
    Xp: "uf",
    cq: "wg",
    Ip: "psa"
  };
  var zp = [];
  C(yp, O);
  yp.ha = function () {
    return Il(yp);
  };
  G(Gp, K);
  var Xp = {
    8: "backspace",
    9: "tab",
    13: "enter",
    16: "shift",
    17: "ctrl",
    18: "alt",
    19: "pause",
    20: "caps-lock",
    27: "esc",
    32: "space",
    33: "pg-up",
    34: "pg-down",
    35: "end",
    36: "home",
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    45: "insert",
    46: Zb,
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    59: "semicolon",
    61: "equals",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    93: "context",
    96: "num-0",
    97: "num-1",
    98: "num-2",
    99: "num-3",
    100: "num-4",
    101: "num-5",
    102: "num-6",
    103: "num-7",
    104: "num-8",
    105: "num-9",
    106: "num-multiply",
    107: "num-plus",
    109: "num-minus",
    110: "num-period",
    111: "num-division",
    112: "f1",
    113: "f2",
    114: "f3",
    115: "f4",
    116: "f5",
    117: "f6",
    118: "f7",
    119: "f8",
    120: "f9",
    121: "f10",
    122: "f11",
    123: "f12",
    186: "semicolon",
    187: "equals",
    189: "dash",
    188: ",",
    190: ".",
    191: "/",
    192: "`",
    219: "open-square-bracket",
    220: "\\",
    221: "close-square-bracket",
    222: "single-quote",
    224: "win"
  };
  A = Mp.prototype;
  A.keyCode = function (a) {
    this.D = a;
    return this;
  };
  A.key = function (a) {
    this.C = a;
    return this;
  };
  A.shiftKey = function (a) {
    this.S = a;
    return this;
  };
  A.altKey = function (a) {
    this.A = a;
    return this;
  };
  A.ctrlKey = function (a) {
    this.B = a;
    return this;
  };
  A.metaKey = function (a) {
    this.G = a;
    return this;
  };
  A.target = function (a) {
    this.T = a;
    return this;
  };
  var Wp;
  G(Rp, O);
  var Op = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
    Pp = ["color", "date", "datetime", "datetime-local", "email", "month", Tf, "password", "search", "tel", "text", "time", "url", "week"];
  A = Rp.prototype;
  A.pf = function (a, b) {
    $p(this.B, Vp(1, arguments), a);
  };
  A.qf = function (a) {
    aq(this.B, Vp(0, arguments));
  };
  A.nf = function (a) {
    return cq(this, this.B, Vp(0, arguments));
  };
  A.M = function () {
    Rp.da.M.call(this);
    this.B = {};
    Al(this.A, u, this.ue, !1, this);
    Al(this.A, yh, this.Be, !1, this);
    Qp && (Al(this.A, v, this.De, !1, this), Al(this.A, zh, this.Ee, !1, this));
    Al(this.A, te, this.ve, !1, this);
    Al(this.A, Ah, this.Ce, !1, this);
    this.A = null;
  };
  A.ve = function (a) {
    a = Np(a);
    M && Yp(this, a);
    Qp && !this.C && Zp(a) && dq(this, a, !0);
  };
  A.Ce = function (a) {
    a = a.C();
    M && Yp(this, a);
    Qp && !this.C && Zp(a) && dq(this, a, !0);
  };
  A.De = function (a) {
    a = Np(a);
    32 < a.A && Zp(a) && (this.C = !0);
  };
  A.Ee = function (a) {
    a = a.C();
    32 < a.A && Zp(a) && (this.C = !0);
  };
  A.ue = function (a) {
    dq(this, Np(a));
  };
  A.Be = function (a) {
    dq(this, a.C());
  };
  C(fq, O);
  A = fq.prototype;
  A.Nd = function (a, b) {
    if (typeof arguments[1] === z) {
      var c = hq(arguments[1]);
      if (c) {
        this.B[c] = a;
        return;
      }
    }
    this.A.pf.apply(this.A, arguments);
  };
  A.rf = function (a) {
    var b = arguments[0];
    if (typeof b === z && (b = hq(b))) {
      this.B[b] && delete this.B[b];
      return;
    }
    this.A.qf.apply(this.A, arguments);
  };
  A.Wc = function (a) {
    if (typeof arguments[0] === z) {
      var b = hq(arguments[0]);
      if (b) return !!this.B[b];
    }
    return this.A.nf.apply(this.A, arguments);
  };
  A.Mg = function (a) {
    var b = M ? Fp(a.keyCode) : a.keyCode;
    16 == b && (this.G = !0);
    this.C = (b & 255) | (gq(a) << 8);
    this.B[this.C] && 16 != b && 17 != b && 18 != b && (a.preventDefault(), a.stopPropagation());
  };
  A.Ng = function (a) {
    this.B[this.C] && (a.preventDefault(), a.stopPropagation());
  };
  A.Og = function (a) {
    var b = M ? Fp(a.keyCode) : a.keyCode,
      c = (b & 255) | (gq(a) << 8);
    if (c == this.C) {
      var d = this.B[c];
      d && (288 != c || this.G) && ((a = a.target), this.J(new Gp(Xg, d, a)), this.J(new Gp(Yg + d, d, a)));
    }
    this.G = 32 == b || 16 == b;
    this.C = 0;
  };
  A.M = function () {
    O.prototype.M.call(this);
    H(this.D);
    delete this.D;
    delete this.B;
  };
  C(iq, Yj);
  A = iq.prototype;
  A.Qc = function (a) {
    this.Od = a;
  };
  A.wb = function (a) {
    var b = this.A[a];
    b && typeof b === Tf ? b++ : (b = 1);
    this.A[a] = b;
  };
  A.get = function (a) {
    return this.A[a];
  };
  A.set = function (a, b) {
    this.A[a] = b;
  };
  A.Jd = function (a, b) {
    this.C[a] = b;
  };
  A.yc = function (a) {
    this.B[a] = new Date().getTime();
  };
  A.end = function (a) {
    var b = new Date().getTime();
    this.B[a] && ((this.A[a] = b - this.B[a]), delete this.B[a]);
  };
  A.push = function (a, b) {
    var c = this.A[a];
    c = null != c ? String(c) + "_" + b : String(b);
    this.A[a] = c;
  };
  A.Bb = function (a) {
    var b = this.A[a];
    if (typeof b === z) {
      var c = b.lastIndexOf("_");
      0 > c ? delete this.A[a] : (this.A[a] = b.slice(0, c));
    }
  };
  A.report = function () {
    if ("vk" == this.D || this.D == mg || "hwt" == this.D) {
      bl(
        this.B,
        function (d, e) {
          this.end(e);
        },
        this
      );
      var a = !1,
        b;
      for (b in this.A)
        if (this.A[b]) {
          a = !0;
          break;
        }
      if (!a) return;
      this.hd && this.set(Na, "ul");
      var c = "https://inputtools.google.com/ping?cs=1&app={APP}&itc={CODE}&uv=t|" + this.D + ",";
      a = {};
      il(a, this.C, this.A);
      bl(
        a,
        function (d, e) {
          if ("ql" == e) {
            var f = d.split("_");
            if (10 < f.length) {
              for (d = 0; 10 > d; d++) {
                var h = Math.floor(Math.random() * (f.length - d)) + d,
                  k = f[d];
                f[d] = f[h];
                f[h] = k;
              }
              d = f.slice(0, 10).join("_");
            }
          }
          c += e + "|" + d + ",";
        },
        this
      );
      c = c.slice(0, -1);
      kq(this, c);
    }
    this.A = {};
    this.B = {};
  };
  A.Lg = function (a) {
    var b = this.G[a];
    b.onload = b.onerror = null;
    delete this.G[a];
  };
  A.M = function () {
    this.hd = !0;
    this.report();
    this.C = {};
    Yj.prototype.M.call(this);
  };
  A.Od = "";
  A.vd = 0;
  A.hd = !1;
  var Eq = {},
    Dq = null;
  var Bq = "undefined" !== typeof Uint8Array,
    Cq = !S && typeof btoa === t;
  var WA = typeof Symbol === t && "symbol" === typeof Symbol() ? Symbol() : void 0,
    pq = WA
      ? function (a, b) {
          a[WA] |= b;
        }
      : function (a, b) {
          void 0 !== a.A ? (a.A |= b) : Object.defineProperties(a, { A: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        },
    Tq = WA
      ? function (a, b) {
          a[WA] &= ~b;
        }
      : function (a, b) {
          void 0 !== a.A && (a.A &= ~b);
        },
    mq = WA
      ? function (a) {
          return a[WA] | 0;
        }
      : function (a) {
          return a.A | 0;
        },
    Mq = WA
      ? function (a) {
          return a[WA];
        }
      : function (a) {
          return a.A;
        },
    nq = WA
      ? function (a, b) {
          a[WA] = b;
        }
      : function (a, b) {
          void 0 !== a.A ? (a.A = b) : Object.defineProperties(a, { A: { value: b, configurable: !0, writable: !0, enumerable: !1 } });
        };
  var Jq = {},
    Sq,
    XA = [];
  nq(XA, 39);
  Sq = Object.freeze(XA);
  var yq;
  $q.prototype.toJSON = function () {
    var a = Hq(this.Ca, Kq, void 0, void 0, !1, !1);
    return ar(this, a, !0);
  };
  $q.prototype.Cd = Jq;
  $q.prototype.toString = function () {
    return ar(this, this.Ca, !1).toString();
  };
  C(Wq, $q);
  C(br, $q);
  br.Nh = [3, 4, 6, 7];
  var ir = {},
    YA = {},
    Rz = {};
  T(
    [
      [1, Sa, [["am", "\u12a0\u121b\u122d\u129b"]], ["am"], 16, null, ["im_t13n_am"]],
      [2, Ua, [["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]], ["ar"], 2, null, ["im_t13n_ar"]],
      [3, lb, [["bn", "\u09ac\u09be\u0982\u09b2\u09be"]], ["bn"], 3, null, ["im_t13n_bn"]],
      [4, gj, [[Wi, "\u62fc\u97f3"]], [Wi], 29, null, ["im_pinyin_zh_hans"]],
      [49, hj, [[Wi, "\u53cc\u62fc\uff08\u667a\u80fdABC\uff09"]], [Wi], 44, [18]],
      [50, kj, [[Wi, "\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09"]], [Wi], 44, [18]],
      [51, ij, [[Wi, "\u53cc\u62fc\uff08\u5c0f\u9e64\uff09"]], [Wi], 44, [18]],
      [52, jj, [[Wi, "\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09"]], [Wi], 44, [18]],
      [53, lj, [[Wi, "\u53cc\u62fc\uff08\u7d2b\u5149\uff09"]], [Wi], 44, [18]],
      [54, mj, [[Wi, "\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09"]], [Wi], 44, [18]],
      [6, dc, [["el", tj]], ["el"], 23, null, ["im_t13n_el"]],
      [7, Rc, [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]], ["gu"], 4, null, ["im_t13n_gu"]],
      [8, cd, [["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]], ["hi"], 5, null, ["im_t13n_hi"]],
      [9, $c, [[Yc, "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]], [Yc], 20, null, ["im_t13n_he", "im_t13n_iw"]],
      [33, "ja-t-i0", [["ja", "\u65e5\u672c\u8a9e"]], null, 28],
      [10, me, [["ja", "\u65e5\u672c\u8a9e"]], ["ja"], 28, null, ["im_t13n_ja"]],
      [11, ze, [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]], ["kn"], 6, null, ["im_t13n_kn"]],
      [12, bf, [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]], ["ml"], 7, null, ["im_t13n_ml"]],
      [13, nf, [["mr", "\u092e\u0930\u093e\u0920\u0940"]], ["mr"], 9, null, ["im_t13n_mr"]],
      [14, If, [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]], ["ne"], 8, null, ["im_t13n_ne"]],
      [15, ag, [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]], ["or"], 19, null, ["im_t13n_or"]],
      [16, vc, [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 14, null, ["im_t13n_fa"]],
      [17, hg, [["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]], ["pa"], 10, null, ["im_t13n_pa"]],
      [46, "pl-t-i0-und", [["pl", Da]], null, 37, null, ["im_t13n_pl"]],
      [18, Ng, [["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]], ["ru"], 24, null, ["im_t13n_ru"]],
      [19, Sg, [["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"]], ["sa"], 15, null, ["im_t13n_sa"]],
      [20, ph, [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 22, null, ["im_t13n_sr"]],
      [21, $g, [["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]], ["si"], 18, null, ["im_t13n_si"]],
      [22, Dh, [[Bh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]], [Bh], 11, null, ["im_t13n_ta"]],
      [23, Lh, [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]], ["te"], 12, null, ["im_t13n_te"]],
      [24, Zh, [["ti", "\u1275\u130d\u122d\u129b"]], ["ti"], 17, null, ["im_t13n_ti"]],
      [25, vi, [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 13, null, ["im_t13n_ur"]],
      [31, "zh-t-i0-wubi-1998", [[Wi, "\u4e94\u7b14"]], null, 30],
      [26, nj, [[Wi, "\u4e94\u7b14"]], [Wi], 30, null, ["im_wubi_zh_hans"]],
      [28, ej, [[Zi, "\u6ce8\u97f3"]], [Zi], 31, null, ["im_zhuyin_zh_hant"]],
      [32, "zh-hant-t-i0-bopo", [[Zi, "\u6ce8\u97f3"]], null, 31],
      [27, dj, [[Zi, "\u6f22\u8a9e\u62fc\u97f3"]], [Zi], 29, null, ["im_pinyin_zh_hant"]],
      [30, Gi, [["vi", "Ti\u1ebfng Vi\u1ec7t"]], ["vi"], 21, [18], ["im_t13n_vi"]],
      [34, db, [["be", uj]], ["be"], 26, null, ["im_t13n_be"]],
      [35, gb, [["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]], ["bg"], 27, null, ["im_t13n_bg"]],
      [
        36,
        qi,
        [["uk", "\u0422\u0440\u0430\u043d\u0441\u043b\u0456\u0442\u0435\u0440\u0430\u0446\u0456\u044f"]],
        ["uk"],
        25,
        null,
        ["im_t13n_uk"]
      ],
      [37, Vb, [["de", fa]], ["de"], 35, [15, 18]],
      [38, mc, [["es", la]], ["es"], 34, [15, 18]],
      [39, Dc, [["fr", na]], ["fr"], 36, [15, 18]],
      [40, Bd, [["it", wa]], ["it"], 39, [15, 18]],
      [41, Lf, [["nl", za]], ["nl"], 40, [15, 18]],
      [42, Cg, [[pg, Ea]], [pg], 38, [15, 18]],
      [48, xg, [[qg, Ea]], null, 38],
      [43, bj, [[Zi, "\u5009\u9821"]], [Zi], 32],
      [44, Ui, [[Xi, "\u5ee3\u6771\u8a71"]], [Xi], 33],
      [60, Ti, [[Xi, "\u7cb5\u62fc"]], [Xi], 33],
      [101, lh, [["sq", "Shqip"]], ["sq"], 0, null, ["vkd_sq"]],
      [
        102,
        Va,
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
        sd,
        [["hy", "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]],
        ["hy"],
        0,
        null,
        ["vkd_hy_east"]
      ],
      [
        104,
        td,
        [["hy", "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576"]],
        ["hy"],
        0,
        null,
        ["vkd_hy_west"]
      ],
      [105, tc, [["eu", "Euskara"]], ["eu"], 0, null, ["vkd_eu"]],
      [106, eb, [["be", uj]], ["be"], 0, null, ["vkd_be"]],
      [107, mb, [["bn", "\u09ac\u09be\u0982\u09b2\u09be (INSCRIPT)"]], ["bn"], 0, null, ["vkd_bn_inscript"]],
      [108, nb, [["bn", "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)"]], ["bn"], 0, null, ["vkd_bn_phone"]],
      [109, qb, [["bs", "Bosanski"]], ["bs"], 0, null, ["vkd_bs"]],
      [110, vg, [[pg, Fa]], [pg], 0, null, ["vkd_pt_br"]],
      [111, ib, [["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"]], ["bg"], 0, null, ["vkd_bg"]],
      [
        112,
        hb,
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
      [113, sb, [["ca", "Catal\u00e0"]], ["ca"], 0, null, ["vkd_ca"]],
      [114, Ab, [["chr", "\u13e3\u13b3\u13a9"]], ["chr"], 0, null, ["vkd_chr"]],
      [
        233,
        Eb,
        [["ckb", "\u06a9\u0648\u0631\u062f\u06cc - \u0634\u06ce\u0648\u0627\u0632\u06cc \u0639\u06d5\u0631\u06d5\u0628\u06cc"]],
        ["ckb"],
        0,
        null,
        ["vkd_ckb_ar"]
      ],
      [
        232,
        Fb,
        [["ckb", "\u06a9\u0648\u0631\u062f\u06cc - \u0634\u06ce\u0648\u0627\u0632\u06cc \u0626\u06cc\u0646\u06af\u0644\u06cc\u0632\u06cc"]],
        ["ckb"],
        0,
        null,
        ["vkd_ckb_en"]
      ],
      [115, ld, [["hr", "Hrvatski"]], ["hr"], 0, null, ["vkd_hr"]],
      [116, Ob, [["cs", "\u010ce\u0161tina"]], ["cs"], 0, null, ["vkd_cs"]],
      [117, Nb, [["cs", "\u010ce\u0161tina QWERTZ"]], ["cs"], 0, null, ["vkd_cs_qwertz"]],
      [118, Sb, [["da", "Dansk"]], ["da"], 0, null, ["vkd_da"]],
      [119, ng, [["prs", "\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc"]], ["fa"], 0, null, ["vkd_prs"]],
      [120, Of, [["nl", za]], ["nl"], 0, null, ["vkd_nl"]],
      [121, fd, [["hi", vj]], ["hi"], 0, null, ["vkd_deva_phone"]],
      [122, ic, [[r, ka]], [r], 0, null, ["vkd_en"]],
      [123, rc, [["et", "Eesti keel"]], ["et"], 0, null, ["vkd_et"]],
      [124, si, [["am", "\u130d\u12d5\u12dd"]], ["am"], 0, null, ["vkd_ethi"]],
      [125, zc, [["fi", "Suomi"]], ["fi"], 0, null, ["vkd_fi"]],
      [126, Gc, [["fr", na]], ["fr"], 0, null, ["vkd_fr"]],
      [127, Pc, [["gl", "Galego"]], ["gl"], 0, null, ["vkd_gl"]],
      [
        128,
        re,
        [["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)"]],
        ["ka"],
        0,
        null,
        ["vkd_ka_qwerty"]
      ],
      [
        129,
        qe,
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
      [130, Yb, [["de", fa]], ["de"], 0, null, ["vkd_de"]],
      [131, ec, [["el", tj]], ["el"], 0, null, ["vkd_el"]],
      [132, Tc, [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)"]], ["gu"], 0, null, ["vkd_gu_inscript"]],
      [
        133,
        Uc,
        [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)"]],
        ["gu"],
        0,
        null,
        ["vkd_gu_phone"]
      ],
      [134, eg, [["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)"]], ["pa"], 0, null, ["vkd_guru_inscript"]],
      [
        135,
        fg,
        [["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)"]],
        ["pa"],
        0,
        null,
        ["vkd_guru_phone"]
      ],
      [136, ad, [[Yc, "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]], [Yc], 0, null, ["vkd_he", "vkd_iw"]],
      [137, gd, [["hi", wj]], ["hi"], 0, null, ["vkd_hi"]],
      [138, rd, [["hu", "Magyar nyelv (101)"]], ["hu"], 0, null, ["vkd_hu_101"]],
      [139, zd, [["is", "\u00cdslenska"]], ["is"], 0, null, ["vkd_is"]],
      [140, Ed, [["it", wa]], ["it"], 0, null, ["vkd_it"]],
      [141, Ae, [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)"]], ["kn"], 0, null, ["vkd_kn_inscript"]],
      [
        142,
        Be,
        [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)"]],
        ["kn"],
        0,
        null,
        ["vkd_kn_phone"]
      ],
      [143, ve, [["kk", "\u049a\u0430\u0437\u0430\u049b"]], ["kk"], 0, null, ["vkd_kk"]],
      [144, xe, [["km", "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA"]], ["km"], 0, null, ["vkd_km"]],
      [145, De, [["ko", "\ud55c\uad6d\uc5b4"]], ["ko"], 0, [18], ["vkd_ko"]],
      [146, Ge, [["ky", "\u041a\u044b\u0440\u0433\u044b\u0437"]], ["ky"], 0, null, ["vkd_ky_cyrl"]],
      [147, Pe, [["lo", "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7"]], ["lo"], 0, null, ["vkd_lo"]],
      [148, Ue, [["lv", "Latvie\u0161u valoda"]], ["lv"], 0, null, ["vkd_lv"]],
      [149, Re, [["lt", "Lietuvi\u0173 kalba"]], ["lt"], 0, null, ["vkd_lt"]],
      [150, $e, [["mk", "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]], ["mk"], 0, null, ["vkd_mk"]],
      [151, cf, [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (INSCRIPT)"]], ["ml"], 0, null, ["vkd_ml_inscript"]],
      [152, df, [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2e\u0d4a\u0d34\u0d3f)"]], ["ml"], 0, null, ["vkd_ml_phone"]],
      [
        246,
        gf,
        [["mni-Mtei", "\uabc3\uabe4\uabc7\uabe9 \uabc3\uabcc\uabe6\uabdb (\uabd0\uabe3\uabc5\uabe6\uabc7\uabe4\uabdb)"]],
        ["mni-Mtei"],
        0
      ],
      [153, uf, [["mt", "Malti"]], ["mt"], 0, null, ["vkd_mt"]],
      [154, Ye, [["mi", "Maori"]], ["mi"], 0, null, ["vkd_mi"]],
      [155, ef, [["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]], ["mn"], 0, null, ["vkd_mn_cyrl"]],
      [156, qh, [["sr", "Crnogorski jezik"]], ["sr"], 0, null, ["vkd_srp"]],
      [157, Rf, [["no", "Norsk"]], ["no"], 0, null, ["vkd_no"]],
      [158, bg, [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (INSCRIPT)"]], ["or"], 0, null, ["vkd_or_inscript"]],
      [159, cg, [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)"]], ["or"], 0, null, ["vkd_or_phone"]],
      [160, Je, [[r, ba]], ["af"], 0, null, ["vkd_latn_002"]],
      [161, og, [["ps", "\u067e\u069a\u062a\u0648"]], ["ps"], 0, null, ["vkd_ps"]],
      [162, wc, [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 0, null, ["vkd_fa"]],
      [163, kg, [["pl", Da]], ["pl"], 0, null, ["vkd_pl"]],
      [164, Ag, [[qg, Ga]], [qg], 0, null, ["vkd_pt_pt"]],
      [165, Kg, [["rom", "Rromani \u0107hib"]], ["rom"], 0, null, ["vkd_rom"]],
      [166, Jg, [["ro", "Rom\u00e2n\u0103"]], ["ro"], 0, null, ["vkd_ro"]],
      [167, Ig, [["ro", "Rom\u00e2n\u0103 SR13392 Primary"]], ["ro"], 0, null, ["vkd_ro_sr13392_primary"]],
      [168, Hg, [["ro", "Rom\u00e2n\u0103 SR13392 Secondary"]], ["ro"], 0, null, ["vkd_ro_sr13392_secondary"]],
      [
        169,
        Qg,
        [["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"]],
        ["ru"],
        0,
        null,
        ["vkd_ru"]
      ],
      [
        212,
        Pg,
        [
          [
            "ru",
            "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)"
          ]
        ],
        ["ru"],
        0
      ],
      [242, Tg, [["sa", wj]], ["sa"], 0],
      [
        170,
        Ug,
        [["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)"]],
        ["sa"],
        0,
        null,
        ["vkd_sa_phone"]
      ],
      [171, mh, [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 0, null, ["vkd_sr_cyrl"]],
      [172, nh, [["sr", "Srpski"]], ["sr"], 0, null, ["vkd_sr_latn"]],
      [173, ah, [["si", "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134"]], ["si"], 0, null, ["vkd_si"]],
      [174, dh, [["sk", "Slovensk\u00fd jazyk"]], ["sk"], 0, null, ["vkd_sk"]],
      [175, ch, [["sk", "Slovensk\u00fd jazyk - QWERTY"]], ["sk"], 0, null, ["vkd_sk_qwerty"]],
      [176, fh, [["sl", "Sloven\u0161\u010dina"]], ["sl"], 0, null, ["vkd_sl"]],
      [177, Ci, [["uzs", "Southern Uzbek"]], ["uzs"], 0, null, ["vkd_uzs"]],
      [178, pc, [["es", la]], ["es"], 0, null, ["vkd_es_es"]],
      [179, vh, [["sv", "Svenska"]], ["sv"], 0, null, ["vkd_sv"]],
      [180, Tb, [["de", "Deutschsprachige Schweiz"]], ["de"], 0, null, ["vkd_de_ch"]],
      [181, Fh, [[Bh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)"]], [Bh], 0, null, ["vkd_ta_tamil99"]],
      [182, Hh, [[Bh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)"]], [Bh], 0, null, ["vkd_ta_inscript"]],
      [
        183,
        Ih,
        [[Bh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)"]],
        [Bh],
        0,
        null,
        ["vkd_ta_phone"]
      ],
      [205, Gh, [[Bh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)"]], [Bh], 0],
      [206, Eh, [[Bh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)"]], [Bh], 0],
      [184, ni, [["tt", "\u0422\u0430\u0442\u0430\u0440"]], ["tt"], 0, null, ["vkd_tt"]],
      [185, Mh, [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)"]], ["te"], 0, null, ["vkd_te_inscript"]],
      [
        186,
        Nh,
        [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)"]],
        ["te"],
        0,
        null,
        ["vkd_te_phone"]
      ],
      [187, Wh, [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]], ["th"], 0, null, ["vkd_th"]],
      [204, Uh, [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)"]], ["th"], 0],
      [203, Vh, [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)"]], ["th"], 0],
      [188, ii, [["tr", "T\u00fcrk\u00e7e - F"]], ["tr"], 0, null, ["vkd_tr_f", hi]],
      [189, ki, [["tr", "T\u00fcrk\u00e7e - Q"]], ["tr"], 0, null, ["vkd_tr_q"]],
      [190, oi, [["ug", "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"]], ["ug"], 0, null, ["vkd_ug"]],
      [
        191,
        ri,
        [["uk", "\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430"]],
        ["uk"],
        0,
        null,
        ["vkd_uk_101"]
      ],
      [192, wi, [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 0, null, ["vkd_ur"]],
      [193, Ai, [["uz", "O\u2018zbek"]], ["uz"], 0, null, ["vkd_uz_latn"]],
      [
        194,
        zi,
        [["uz", "\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)"]],
        ["uz"],
        0,
        null,
        ["vkd_uz_cyrl_phone"]
      ],
      [
        195,
        yi,
        [["uz", "\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)"]],
        ["uz"],
        0,
        null,
        ["vkd_uz_cyrl_type"]
      ],
      [196, Ii, [["vi", "Ti\u1ebfng Vi\u1ec7t TCVN 6064"]], ["vi"], 0, null, ["vkd_vi_tcvn"]],
      [197, Hi, [["vi", "Ti\u1ebfng Vi\u1ec7t Telex"]], ["vi"], 0, null, ["vkd_vi_telex"]],
      [198, Ji, [["vi", "Ti\u1ebfng Vi\u1ec7t VIQR"]], ["vi"], 0, null, ["vkd_vi_viqr"]],
      [208, "vi-t-k0-vni", [["vi", "Ti\u1ebfng Vi\u1ec7t VNI"]], ["vi"], 0],
      [199, bc, [["dz", "\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41\u0f0b"]], ["dz"], 0, null, ["vkd_dz"]],
      [200, hc, [[r, "English Dvorak"]], [r], 0],
      [
        201,
        Bb,
        [["chr", "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac"]],
        ["chr"],
        0,
        null,
        ["vkd_chr_phone"]
      ],
      [202, Df, [["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"]], ["my"], 0, null, ["vkd_my"]],
      [239, Rh, [["tg", "\u0422\u043e\u04b7\u0438\u043a"]], ["tg"], 0, null, ["vkd_tg"]],
      [5, gc, [[r, ka]], [r], 41, [15, 18], ["im_t13n_en"]],
      [29, ie, [["ja", "\u65e5\u672c\u8a9e"]], null, -1, null, ["im_t13n_ja_hira"]],
      [45, "tr-t-i0-und", [["tr", "T\u00fcrk"]], null, 42],
      [
        207,
        Ri,
        [
          [
            "yi",
            "\u05d4\u05e2\u05d1\u05e8\u05e2\u05d9\u05d9 \u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05e7\u05d9\u05d1\u05d0\u05b8\u05e8\u05d3"
          ]
        ],
        ["yi"],
        0
      ],
      [256, Si, [["yo", "Nigerian Yoruba"]], ["yo"], 0],
      [
        209,
        "ne-t-k0-und",
        [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)"]],
        ["ne"],
        0
      ],
      [210, Jf, [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)"]], ["ne"], 0],
      [211, jc, [[r, La]], ["nl"], 0],
      [213, Vf, [["nv", ha]], ["nv"], 0],
      [234, "nv-t-k0", [["nv", ha]], null, 0],
      [235, Uf, [["nv", "Din\u00e9 bizaad - Traditional"]], ["nv"], 0],
      [401, Qa, [["af", "Afrikaans"]], ["af"], 1],
      [506, Ra, [["am", "\u12a0\u121b\u122d\u129b"]], ["am"], 1],
      [464, Ta, [["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]], ["ar"], 1],
      [507, Xa, [["as", "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"]], ["as"], 1],
      [487, bb, [["az", "Az\u0259rbaycan"]], ["az"], 1],
      [402, cb, [["be", uj]], ["be"], 1],
      [403, fb, [["bg", "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]], ["bg"], 1],
      [489, kb, [["bn", "\u09ac\u09be\u0982\u09b2\u09be"]], ["bn"], 1],
      [509, ob, [["bo", "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"]], ["bo"], 1],
      [468, pb, [["bs", "Bosanski"]], ["bs"], 1],
      [404, rb, [["ca", "Catal\u00e0"]], ["ca"], 1],
      [469, ub, [["ceb", "Binisaya"]], ["ceb"], 1],
      [494, Gb, [["co", "Corsican"]], ["co"], 1],
      [405, Mb, [["cs", "\u010ce\u0161tina"]], ["cs"], 1],
      [406, Pb, [["cy", "Cymraeg"]], ["cy"], 1],
      [407, Rb, [["da", "Dansk"]], ["da"], 1],
      [408, Ub, [["de", fa]], ["de"], 1],
      [455, cc, [["el", tj]], ["el"], 1],
      [409, fc, [[r, ka]], [r], 1],
      [456, kc, [["eo", "Esperanto"]], ["eo"], 1],
      [410, lc, [["es", la]], ["es"], 1],
      [411, qc, [["et", "Eesti"]], ["et"], 1],
      [412, sc, [["eu", "Euskara"]], ["eu"], 1],
      [465, uc, [["fa", "\u0641\u0627\u0631\u0633\u06cc"]], ["fa"], 1],
      [413, yc, [["fi", "Suomi"]], ["fi"], 1],
      [414, Ac, [["fil", "Filipino"]], ["fil"], 1],
      [415, Cc, [["fr", na]], ["fr"], 1],
      [495, Hc, [["fy", "Frysk"]], ["fy"], 1],
      [416, Jc, [["ga", "Gaeilge"]], ["ga"], 1],
      [496, Mc, [["gd", "G\u00e0idhlig"]], ["gd"], 1],
      [417, Oc, [["gl", "Galego"]], ["gl"], 1],
      [462, Qc, [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]], ["gu"], 1],
      [497, Vc, [["haw", sj]], ["haw"], 1],
      [457, Zc, [[Yc, "\u05e2\u05d1\u05e8\u05d9\u05ea"]], [Yc], 1],
      [453, bd, [["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]], ["hi"], 1],
      [470, id, [["hmn", "Hmong"]], ["hmn"], 1],
      [418, kd, [["hr", "Hrvatski"]], ["hr"], 1],
      [419, md, [["ht", "Haitian Creole"]], ["ht"], 1],
      [420, qd, [["hu", "Magyar"]], ["hu"], 1],
      [504, ud, [["hy", "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"]], ["hy"], 1],
      [421, vd, [["id", "Indonesia"]], ["id"], 1],
      [422, yd, [["is", "\u00cdslenska"]], ["is"], 1],
      [423, Ad, [["it", wa]], ["it"], 1],
      [424, je, [["ja", "\u65e5\u672c\u8a9e"]], ["ja"], 1],
      [458, ne, [["jv", "Jawa"]], ["jv"], 1],
      [505, pe, [["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"]], ["ka"], 1],
      [501, ue, [["kk", "\u049a\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"]], ["kk"], 1],
      [484, we, [["km", "\u1781\u17d2\u1798\u17c2\u179a"]], ["km"], 1],
      [471, ye, [["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]], ["kn"], 1],
      [425, Ce, [["ko", "\ud55c\uad6d\uc5b4"]], ["ko"], 1],
      [477, Ee, [["ku", "Kurd\u00ee"]], ["ku"], 1],
      [478, He, [["ky", "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"]], ["ky"], 1],
      [426, Ie, [["la", "Latin"]], ["la"], 1],
      [498, Le, [["lb", "L\u00ebtzebuergesch"]], ["lb"], 1],
      [483, Oe, [["lo", "\u0ea5\u0eb2\u0ea7"]], ["lo"], 1],
      [427, Qe, [["lt", "Lietuvi\u0173"]], ["lt"], 1],
      [428, Te, [["lv", "Latvie\u0161u"]], ["lv"], 1],
      [479, We, [["mg", "Malagasy"]], ["mg"], 1],
      [459, Xe, [["mi", "Te reo M\u0101ori"]], ["mi"], 1],
      [429, Ze, [["mk", "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]], ["mk"], 1],
      [490, af, [["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]], ["ml"], 1],
      [474, ff, [["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]], ["mn"], 1],
      [461, mf, [["mr", "\u092e\u0930\u093e\u0920\u0940"]], ["mr"], 1],
      [430, rf, [["ms", "Melayu"]], ["ms"], 1],
      [467, tf, [["mt", "Malti"]], ["mt"], 1],
      [488, Af, [["mul", "Multiple languages"]], ["mul"], 1],
      [511, vf, [["mul-beng", "Multiple languages (Bangla)"]], ["mul-beng"], 1],
      [512, wf, [["mul-cyrl", "Multiple languages (Cyrillic)"]], ["mul-cyrl"], 1],
      [513, xf, [["mul-deva", "Multiple languages (Devanagari)"]], ["mul-deva"], 1],
      [514, yf, [["mul-ethi", "Multiple languages (Ethiopic)"]], ["mul-ethi"], 1],
      [515, zf, [["mul-latn", "Multiple languages (Latin)"]], ["mul-latn"], 1],
      [492, Bf, [["my", "\u1019\u103c\u1014\u103a\u1019\u102c"]], ["my"], 1],
      [431, Gf, [["nb", "Norsk bokm\u00e5l"]], ["nb"], 1],
      [485, Hf, [["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]], ["ne"], 1],
      [432, Kf, [["nl", za]], ["nl"], 1],
      [434, Pf, [["nn", "Norsk nynorsk"]], ["nn"], 1],
      [433, Qf, [["no", "Norsk"]], ["no"], 1],
      [480, Wf, [["ny", "Nyanja"]], ["ny"], 1],
      [476, $f, [["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]], ["or"], 1],
      [463, gg, [["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]], ["pa"], 1],
      [435, ig, [["pl", Da]], ["pl"], 1],
      [436, Bg, [[pg, Ea]], null, 1],
      [437, rg, [[pg, "Portugu\u00eas (Brasil)"]], [pg], 1],
      [438, wg, [[qg, "Portugu\u00eas (Portugal)"]], [qg], 1],
      [439, Gg, [["ro", "Rom\u00e2n\u0103"]], ["ro"], 1],
      [440, Mg, [["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]], ["ru"], 1],
      [491, Zg, [["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]], ["si"], 1],
      [441, bh, [["sk", "Sloven\u010dina"]], ["sk"], 1],
      [442, eh, [["sl", "Sloven\u0161\u010dina"]], ["sl"], 1],
      [499, gh, [["sm", "Samoan"]], ["sm"], 1],
      [500, ih, [["sn", "ChiShona"]], ["sn"], 1],
      [472, jh, [["so", "Soomaali"]], ["so"], 1],
      [443, kh, [["sq", "Shqip"]], ["sq"], 1],
      [444, oh, [["sr", "\u0421\u0440\u043f\u0441\u043a\u0438"]], ["sr"], 1],
      [481, th, [["su", "Basa Sunda"]], ["su"], 1],
      [445, uh, [["sv", "Svenska"]], ["sv"], 1],
      [446, wh, [["sw", "Kiswahili"]], ["sw"], 1],
      [473, Ch, [[Bh, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]], [Bh], 1],
      [466, Kh, [["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]], ["te"], 1],
      [502, Qh, [["tg", "\u0422\u043e\u04b7\u0438\u043a\u04e3"]], ["tg"], 1],
      [454, Sh, [["th", "\u0e44\u0e17\u0e22"]], ["th"], 1],
      [508, Yh, [["ti", "\u1275\u130d\u122d\u129b"]], ["ti"], 1],
      [447, fi, [["tr", "T\u00fcrk\u00e7e"]], ["tr"], 1],
      [448, pi, [["uk", "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"]], ["uk"], 1],
      [486, ui, [["ur", "\u0627\u0631\u062f\u0648"]], ["ur"], 1],
      [503, Bi, [["uz", "O\u2018zbek"]], ["uz"], 1],
      [449, Fi, [["vi", "Ti\u1ebfng Vi\u1ec7t"]], ["vi"], 1],
      [482, Pi, [["xh", "IsiXhosa"]], ["xh"], 1],
      [510, Qi, [["yi", "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"]], ["yi"], 1],
      [450, fj, [[Wi, "\u4e2d\u6587"]], null, 1],
      [451, $i, [[Wi, "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]], [Wi], 1],
      [452, cj, [[Zi, "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09"]], [Zi], 1],
      [475, oj, [["zh-yue", "\u7cb5\u8a9e"]], ["zh-yue"], 1],
      [460, pj, [["zu", "IsiZulu"]], ["zu"], 1],
      [238, "see-t-k0-und", [["see", "On\u00f6dowa\u02bcga:\u02bc"]], ["see"], 0],
      [214, $h, [["ti", "\u130d\u12d5\u12dd"]], ["ti"], 0],
      [215, qf, [["mr", vj]], ["mr"], 0],
      [241, of, [["mr", wj]], ["mr"], 0],
      [216, nd, [["ht", na]], ["ht"], 0],
      [47, sg, [[pg, Ea]], null, 38],
      [217, Nf, [[r, La]], null, 0],
      [218, Fc, [[r, La]], ["fr"], 0],
      [219, Xb, [[r, La]], ["de"], 0],
      [220, Dd, [[r, La]], ["it"], 0],
      [221, ug, [[r, La]], [pg], 0],
      [222, zg, [[r, La]], [qg], 0],
      [223, oc, [[r, La]], ["es"], 0],
      [224, Qb, [[r, ba]], ["cy"], 0],
      [225, Lc, [[r, ba]], ["ga"], 0],
      [369, Kc, [[r, "Irish"]], null, 0],
      [226, wd, [[r, ba]], ["id"], 0],
      [227, oe, [[r, ba]], ["jw"], 0],
      [228, sf, [[r, ba]], ["ms"], 0],
      [229, xh, [[r, ba]], ["sw"], 0],
      [230, ai, [[r, ba]], ["tl"], 0],
      [231, Cf, [["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)"]], ["my"], 0],
      [236, ge, [[r, "Nunavik Inuktitut"]], ["iu"], 0],
      [237, he, [[r, "Nunavut Inuktitut"]], ["iu"], 0],
      [245, fe, [[r, "Inuktitut Unicode"]], ["iu"], 0],
      [600, "en-t-i0-voice", [[r, ka]], null, 43],
      [601, aj, [["zh", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]], null, 43],
      [240, "lis-t-k0-und", [["lis", "\ua4e1\ua4f2\ua4e2\ua4f4"]], ["lis"], 0],
      [493, ti, [[r, "Emoji & Symbol"]], ["mul"], 1],
      [351, Hb, [[r, "Corsican"]], null, 0],
      [352, Ic, [[r, "West Frisian"]], null, 0],
      [353, Nc, [[r, "Scots Gaelic"]], null, 0],
      [244, Xc, [["haw", sj]], ["haw"], 0],
      [354, Wc, [[r, "Hawaiian"]], null, 0],
      [355, Me, [[r, "Luxembourgish"]], null, 0],
      [243, Vg, [[r, "Sindhi"]], ["sd"], 0],
      [356, hh, [[r, "Samoan"]], null, 0],
      [358, Wb, [["de", fa]], null, 0],
      [359, nc, [["es", la]], null, 0],
      [360, Ec, [["fr", na]], null, 0],
      [361, Cd, [["it", wa]], null, 0],
      [362, Mf, [["nl", za]], null, 0],
      [363, jg, [["pl", Da]], null, 0],
      [364, tg, [[pg, Fa]], null, 0],
      [365, yg, [[qg, Ga]], null, 0],
      [366, gi, [["tr", "T\u00fcrk\u00e7e - F"]], null, 0],
      [367, ji, [["tr", "T\u00fcrk\u00e7e - Q"]], null, 0],
      [368, Fe, [["ku", "Kurd\u00ee Bedirxan"]], ["ku"], 0],
      [56, "ko-t-i0-und", [["ko", "\ud55c\uad6d\uc5b4"]], null, 45],
      [58, le, [["ja", "\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]], null, 28],
      [57, ke, [["ja", "\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]], null, 28],
      [59, Vi, [[Zi, "\u5ee3\u6771\u8a71"]], null, 33],
      [55, Th, [["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]], ["th"], 46, [18]],
      [
        248,
        dg,
        [["osa", "\ud801\udccf\ud801\udcd8\ud801\udcfb\ud801\udcd8\ud801\udcfb\ud801\udcdf \ud801\udcbb\ud801\udcdf"]],
        ["osa"],
        0,
        null,
        ["vkd_osa"]
      ],
      [
        247,
        xc,
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
      [249, tb, [["ccp", "\ud804\udd0c\ud804\udd0b\ud804\udd34\ud804\udd1f\ud804\udd33\ud804\udd26"]], ["ccp"], 0],
      [251, dd, [["hi", xj]], null, 0],
      [252, pf, [["mr", xj]], null, 0],
      [250, Sc, [["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)"]], null, 0],
      [253, Yf, [[r, "Ojibwe Left Dot - E Finals"]], ["oj"], 0],
      [254, Zf, [["one", "On\u028cyote\u0294a\u00b7k\u00e1\u00b7"]], ["one"], 0],
      [255, Ve, [["mez", "Oma\u035eeqnome"]], ["mez"], 0],
      [
        257,
        Fg,
        [["rhg", "\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d"]],
        ["rhg"],
        0
      ],
      [258, Lb, [["crk", "\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"]], ["crk"], 0],
      [259, Ef, [["myh", "Q\u02b7i\u00b7q\u02b7i\u00b7di\u010d\u010daq"]], ["myh"], 0],
      [260, Oi, [["win", "Hooc\u0105k"]], ["win"], 0]
    ],
    function (a) {
      var b = new br(a);
      if ((a = Yq(xq(Qq(b, 2)), ""))) {
        ir[a] = b;
        var c = Yq(xq(Qq(Xq(b)[0], 2)), "");
        c && (YA[a] = c);
      }
      T(Vq(b, 4, xq), function (d) {
        d == Zi ? (d = "zh-Hant") : d == Wi && (d = Yi);
        Rz[d] || (Rz[d] = []);
        Rz[d].push(b);
      });
    }
  );
  var Ru = {};
  C(dr, cr);
  dr.prototype.toString = function () {
    return this.A;
  };
  var ZA;
  try {
    new URL("s://g"), (ZA = !0);
  } catch (a) {
    ZA = !1;
  }
  var Sy = ZA;
  tr.prototype.next = function () {
    return ur;
  };
  var ur = { done: !0, value: void 0 };
  tr.prototype.Hb = function () {
    return this;
  };
  G(xr, tr);
  xr.prototype.next = function () {
    if (this.K) {
      if (!this.node || (this.N && 0 == this.H)) return ur;
      var a = this.node;
      var b = this.S ? -1 : 1;
      if (this.F == b) {
        var c = this.S ? a.lastChild : a.firstChild;
        c ? wr(this, c) : wr(this, a, -1 * b);
      } else (c = this.S ? a.previousSibling : a.nextSibling) ? wr(this, c) : wr(this, a.parentNode, -1 * b);
      this.H += this.F * (this.S ? -1 : 1);
    } else this.K = !0;
    return (a = this.node) ? { value: a, done: !1 } : ur;
  };
  xr.prototype.Cc = function (a) {
    return a.node == this.node && (!this.node || a.F == this.F);
  };
  yr.prototype.wd = function () {
    return !1;
  };
  yr.prototype.Xe = function (a) {
    this.Ya() || this.Cb();
    return this.vc(a, !0);
  };
  G(Br, xr);
  G(Cr, Br);
  Cr.prototype.T = function () {
    return this.D;
  };
  Cr.prototype.I = function () {
    return (
      this.K && (this.node != (this.G ? this.D : this.C) ? !1 : this.G ? (this.B ? -1 != this.F : 1 == this.F) : !this.A || 1 != this.F)
    );
  };
  Cr.prototype.next = function () {
    return this.I() ? ur : Cr.da.next.call(this);
  };
  Dr.prototype.Hb = function () {
    return new Cr(this.A.startContainer, this.A.startOffset, this.A.endContainer, this.A.endOffset);
  };
  G(Gr, Dr);
  Gr.prototype.B = function (a, b, c) {
    return this.A.compareBoundaryPoints(
      1 == c ? (1 == b ? F.Range.START_TO_START : F.Range.START_TO_END) : 1 == b ? F.Range.END_TO_START : F.Range.END_TO_END,
      a
    );
  };
  Gr.prototype.select = function (a) {
    this.D(mn(Q(this.A.startContainer)).getSelection(), a);
  };
  Gr.prototype.D = function (a) {
    a.removeAllRanges();
    a.addRange(this.A);
  };
  Gr.prototype.collapse = function (a) {
    this.A.collapse(a);
  };
  G(Jr, Gr);
  Jr.prototype.D = function (a, b) {
    !b || this.A.collapsed
      ? Jr.da.D.call(this, a, b)
      : (a.collapse(this.A.endContainer, this.A.endOffset), a.extend(this.A.startContainer, this.A.startOffset));
  };
  G(Kr, Gr);
  Kr.prototype.B = function (a, b, c) {
    return Kr.da.B.call(this, a, b, c);
  };
  Kr.prototype.D = function (a, b) {
    b
      ? a.setBaseAndExtent(this.A.endContainer, this.A.endOffset, this.A.startContainer, this.A.startOffset)
      : a.setBaseAndExtent(this.A.startContainer, this.A.startOffset, this.A.endContainer, this.A.endOffset);
  };
  G(Mr, yr);
  A = Mr.prototype;
  A.Xc = function () {
    return "text";
  };
  A.jc = function () {
    return Rr(this).A;
  };
  A.Nb = function () {
    return 1;
  };
  A.gb = function () {
    return this;
  };
  A.Xb = function () {
    return Rr(this).A.commonAncestorContainer;
  };
  A.va = function () {
    return this.D || (this.D = Rr(this).A.startContainer);
  };
  A.Ha = function () {
    return null != this.B ? this.B : (this.B = Rr(this).A.startOffset);
  };
  A.Ga = function () {
    return this.C || (this.C = Rr(this).A.endContainer);
  };
  A.Wa = function () {
    return null != this.A ? this.A : (this.A = Rr(this).A.endOffset);
  };
  A.wd = function () {
    return this.G;
  };
  A.Wb = function (a, b) {
    var c = a.Xc();
    return "text" == c
      ? Fr(Rr(this), Rr(a), b)
      : "control" == c
      ? ((a = Ur(a)),
        (b ? zt : AA)(
          a,
          function (d) {
            return this.Pd(d, b);
          },
          this
        ))
      : !1;
  };
  A.Pd = function (a, b) {
    return this.Wb(Or(a), b);
  };
  A.Ya = function () {
    return Rr(this).A.collapsed;
  };
  A.Xa = function () {
    return Rr(this).A.toString();
  };
  A.Hb = function () {
    return new Cr(this.va(), this.Ha(), this.Ga(), this.Wa());
  };
  A.select = function () {
    Rr(this).select(this.G);
  };
  A.Cb = function () {
    var a = Rr(this),
      b = a.A;
    b.extractContents();
    if (b.startContainer.hasChildNodes()) {
      var c = b.startContainer.childNodes[b.startOffset];
      if (c) {
        var d = c.previousSibling;
        "" == En(c) && tn(c);
        d && "" == En(d) && tn(d);
      }
    }
    if (ip) {
      c = a.A.startContainer;
      d = a.A.startOffset;
      var e = a.A.endContainer;
      a = a.A.endOffset;
      var f = c.nextSibling;
      c == e &&
        c.parentNode &&
        3 == c.nodeType &&
        f &&
        3 == f.nodeType &&
        ((c.nodeValue += f.nodeValue), tn(f), b.setStart(c, d), b.setEnd(e, a));
    }
    this.D = this.B = this.C = this.A = null;
  };
  A.vc = function (a, b) {
    var c = Rr(this).A.cloneRange();
    c.collapse(b);
    c.insertNode(a);
    c.detach();
    this.D = this.B = this.C = this.A = null;
    return a;
  };
  A.collapse = function (a) {
    a = this.wd() ? !a : a;
    this.F && this.F.collapse(a);
    a ? ((this.C = this.D), (this.A = this.B)) : ((this.D = this.C), (this.B = this.A));
    this.G = !1;
  };
  G(Sr, yr);
  Sr.prototype.Wb = function (a, b) {
    var c = zr(this);
    a = zr(a);
    return (b ? zt : AA)(a, function (d) {
      return zt(c, function (e) {
        return e.Wb(d, b);
      });
    });
  };
  Sr.prototype.Pd = function (a, b) {
    return this.Wb(Or(a), b);
  };
  Sr.prototype.vc = function (a, b) {
    b
      ? ((b = this.va()), b.parentNode && b.parentNode.insertBefore(a, b))
      : ((b = this.Ga()), b.parentNode && b.parentNode.insertBefore(a, b.nextSibling));
    return a;
  };
  G(Tr, Sr);
  A = Tr.prototype;
  A.Xc = function () {
    return "control";
  };
  A.jc = function () {
    return this.A || document.body.createControlRange();
  };
  A.Nb = function () {
    return this.A ? this.A.length : 0;
  };
  A.gb = function (a) {
    return Or(this.A.item(a));
  };
  A.Xb = function () {
    return zn.apply(null, Ur(this));
  };
  A.va = function () {
    return Vr(this)[0];
  };
  A.Ha = function () {
    return 0;
  };
  A.Ga = function () {
    var a = Vr(this),
      b = bk(a);
    return a.find(function (c) {
      return vn(c, b);
    });
  };
  A.Wa = function () {
    return this.Ga().childNodes.length;
  };
  A.Ya = function () {
    return !this.A || !this.A.length;
  };
  A.Xa = function () {
    return "";
  };
  A.Hb = function () {
    return new Wr(this);
  };
  A.select = function () {
    this.A && this.A.select();
  };
  A.Cb = function () {
    if (this.A) {
      for (var a = [], b = 0, c = this.A.length; b < c; b++) a.push(this.A.item(b));
      a.forEach(tn);
      this.collapse(!1);
    }
  };
  A.Xe = function (a) {
    a = this.vc(a, !0);
    this.Ya() || this.Cb();
    return a;
  };
  A.collapse = function () {
    this.D = this.B = this.A = null;
  };
  G(Wr, Br);
  Wr.prototype.T = function () {
    return this.D;
  };
  Wr.prototype.I = function () {
    return !this.H && !this.A.length;
  };
  Wr.prototype.next = function () {
    if (this.I()) return ur;
    if (!this.H) {
      var a = this.A.shift();
      wr(this, a, 1, 1);
      return { value: a, done: !1 };
    }
    return Wr.da.next.call(this);
  };
  G(Xr, Sr);
  A = Xr.prototype;
  A.Xc = function () {
    return "mutli";
  };
  A.jc = function () {
    return this.A[0];
  };
  A.Nb = function () {
    return this.A.length;
  };
  A.gb = function (a) {
    this.D[a] || (this.D[a] = Nr(Lr(this.A[a])));
    return this.D[a];
  };
  A.Xb = function () {
    if (!this.C) {
      for (var a = [], b = 0, c = this.Nb(); b < c; b++) a.push(this.gb(b).Xb());
      this.C = zn.apply(null, a);
    }
    return this.C;
  };
  A.va = function () {
    return Yr(this)[0].va();
  };
  A.Ha = function () {
    return Yr(this)[0].Ha();
  };
  A.Ga = function () {
    return bk(Yr(this)).Ga();
  };
  A.Wa = function () {
    return bk(Yr(this)).Wa();
  };
  A.Ya = function () {
    return 0 == this.A.length || (1 == this.A.length && this.gb(0).Ya());
  };
  A.Xa = function () {
    return zr(this)
      .map(function (a) {
        return a.Xa();
      })
      .join("");
  };
  A.Hb = function () {
    return new Zr(this);
  };
  A.select = function () {
    var a = mn(Q(S ? this.Xb() : this.va())).getSelection();
    a.removeAllRanges();
    for (var b = 0, c = this.Nb(); b < c; b++) a.addRange(this.gb(b).jc());
  };
  A.Cb = function () {
    zr(this).forEach(function (a) {
      a.Cb();
    });
  };
  A.collapse = function (a) {
    if (!this.Ya()) {
      var b = a ? this.gb(0) : this.gb(this.Nb() - 1);
      this.D = [];
      this.C = this.B = null;
      b.collapse(a);
      this.D = [b];
      this.B = [b];
      this.A = [b.jc()];
    }
  };
  G(Zr, Br);
  Zr.prototype.T = function () {
    return this.A[0].T();
  };
  Zr.prototype.I = function () {
    return this.A[this.B].I();
  };
  Zr.prototype.next = function () {
    for (; this.B < this.A.length; ) {
      var a = this.A[this.B],
        b = a.next();
      if (b.done) this.B++;
      else return wr(this, a.node, a.F, a.H), b;
    }
    return ur;
  };
  G(ms, lp);
  ms.prototype.Fa = function (a, b, c) {
    var d = Q(a);
    var e = d.body;
    d = d.documentElement;
    d = new P(e.scrollLeft || d.scrollLeft, e.scrollTop || d.scrollTop);
    e = this.A.x + d.x;
    d = this.A.y + d.y;
    var f = ap(a);
    e -= f.x;
    d -= f.y;
    cp(new P(e, d), a, b, c, null, null);
  };
  A = ps.prototype;
  A.Ma = function () {
    return this.C;
  };
  A.Yb = function (a) {
    var b = Qo(this.D);
    a = ls(this.D, (b && a) || (!b && !a) ? this.B : this.A);
    is(a, this.G);
    return new ms(a);
  };
  A.replace = function (a, b) {
    if (this.zb() && (this.C != a || b)) {
      b = os(this);
      var c = b[0],
        d = b[1];
      this.B <= c && this.A > c && this.A <= d
        ? (c = this.A)
        : this.B > c && this.B <= d && this.A > d
        ? (d = this.B)
        : this.B <= c && this.A > d && (c = d = this.A);
      b = a.length - (this.A - this.B);
      this.B > c && this.A <= d ? (d += b) : c >= this.A && ((c += b), (d += b));
      var e = this.D.value;
      this.D.value = e.slice(0, this.B) + a + e.slice(this.A);
      this.A = this.B + a.length;
      this.C = a;
      a = c;
      c = d;
      if (void 0 !== this.D.selectionStart) (this.D.selectionStart = a), (this.D.selectionEnd = c);
      else
        try {
          var f = this.D.createTextRange(),
            h = f.text.length;
          f.moveStart(xb, a);
          f.moveEnd(xb, c - h);
          f.select();
        } catch (k) {}
      b && Is(this.F, this, this.A - b, b);
    }
  };
  A.Qd = function (a, b, c) {
    if (this.zb()) {
      for (var d = this.D.value, e = this.B - 1, f = 0; 0 <= e && !(++f > b) && !d.charAt(e).match(a); ) e--;
      this.B = e + 1;
      if (c) {
        for (e = this.A; e < d.length && !(++f > b) && !d.charAt(e).match(a); ) e++;
        this.A = e;
      }
      this.C = d.slice(this.B, this.A);
    }
  };
  A.zb = function () {
    return this.D.value.slice(this.B, this.A) == this.C;
  };
  A.he = function () {
    return this.B == this.A;
  };
  A.kd = function () {
    var a = os(this);
    return this.G.A.activeElement == this.D && ((a[0] >= this.B && a[0] <= this.A) || (a[1] >= this.B && a[1] <= this.A));
  };
  A.ea = function () {
    this.F.deleteToken(this);
  };
  A.le = function (a, b) {
    this.B > a && (this.B += b);
    this.A > a && (this.A += b);
  };
  A = qs.prototype;
  A.Ma = function () {
    return this.zb() ? this.F : "";
  };
  A.Yb = function (a) {
    var b = Qo(ns(this.H));
    if (!S) {
      var c = rs(this);
      c.collapse((b && a) || (!b && !a));
    }
    a = ks(this.G, c);
    is(a, this.G);
    return new ms(a);
  };
  A.replace = function (a, b) {
    if (this.zb() && (this.F != a || b)) {
      var c = (b = null),
        d = 0,
        e = 0,
        f = this.he() || this.kd();
      f || ((e = as(In(this.G))), (b = e.va()), (c = e.Ga()), (d = e.Ha()), (e = e.Wa()));
      var h = 0;
      a = a.replace(" ", "\u00a0");
      if (this.D != this.C || 3 != this.D.nodeType) {
        var k = rs(this);
        k.Cb();
        this.D = this.C = k.va();
        this.B = this.A = k.Ha();
      } else h = a.length - (this.A - this.B);
      if (3 == this.D.nodeType)
        (k = this.D.data), (this.D.data = k.slice(0, this.B) + a + k.slice(this.A)), (this.C = this.D), (this.A = this.B + a.length);
      else if (1 == this.D.nodeType) {
        k = Ln(this.G, a);
        var l = this.D;
        l.insertBefore(k, l.childNodes[this.A] || null);
        this.D = this.C = k;
        this.B = 0;
        this.A = a.length;
      }
      h && ((k = this.A - h), Is(this.H, this, k, h), f || this.C != c || (d > k && (d += h), e > k && (e += h)));
      f ? ((k = rs(this)), k.collapse(!1)) : (k = Qr(b, d, c, e));
      k.select();
      this.F = a;
    }
  };
  A.Qd = function (a, b, c) {
    if (this.zb() && this.D == this.C && this.B == this.A) {
      var d = this.D;
      if (3 != d.nodeType && 0 < this.B) for (d = d.childNodes[this.B - 1]; d && 3 != d.nodeType; ) d = d.lastChild;
      if (d && 3 == d.nodeType) {
        d != this.D && ((this.D = this.C = d), (this.B = this.A = d.data.length));
        for (var e = this.B - 1, f = 0; d && 3 == d.nodeType; )
          if (0 > e) (d = d.previousSibling) && 3 == d.nodeType && (e = d.data.length - 1);
          else {
            if (++f > b) break;
            if (d.data.charAt(e).match(a)) break;
            this.D = d;
            this.B = e;
            e--;
          }
        if (c)
          for (d = this.C, e = this.A; d && 3 == d.nodeType; )
            if (e >= d.data.length || 0 == d.data.length) (d = d.nextSibling), (e = 0);
            else {
              if (++f > b) break;
              if (d.data.charAt(e).match(a)) break;
              this.C = d;
              this.A = e + 1;
              e++;
            }
        this.F = rs(this).Xa();
      }
    }
  };
  A.zb = function () {
    return !(this.D && this.C && this.D.parentNode && this.C.parentNode) ||
      (3 == this.D.nodeType && this.B > this.D.data.length) ||
      (3 == this.C.nodeType && this.A > this.C.data.length)
      ? !1
      : rs(this).Xa() == this.F;
  };
  A.he = function () {
    return this.D == this.C && this.B == this.A;
  };
  A.kd = function () {
    var a = rs(this),
      b = as(In(this.G));
    return a && b && Q(Ar(a)) == Q(Ar(b)) ? a.Wb(b, !0) : !1;
  };
  A.ea = function () {
    this.H.deleteToken(this);
    this.D == this.C && 3 == this.D.nodeType && this.D.parentNode && !this.D.data && this.G.Qa(this.D);
    this.D = this.C = null;
    this.B = this.A = 0;
  };
  A.le = function (a, b) {
    this.B <= a && this.A > a ? (this.A = this.B = 0) : this.B > a && ((this.B += b), (this.A += b));
    this.F = rs(this).Xa();
  };
  G(ss, Wk);
  G(us, O);
  A = us.prototype;
  A.Db = null;
  A.Kc = null;
  A.yd = null;
  A.Lc = null;
  A.ya = -1;
  A.Ra = -1;
  A.Yc = !1;
  var $A = {
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
    aB = {
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
    bB = Uk && M;
  A = us.prototype;
  A.sf = function (a) {
    if (ln || Dp)
      if ((17 == this.ya && !a.ctrlKey) || (18 == this.ya && !a.altKey) || (Uk && 91 == this.ya && !a.metaKey)) this.Ra = this.ya = -1;
    -1 == this.ya &&
      (a.ctrlKey && 17 != a.keyCode
        ? (this.ya = 17)
        : a.altKey && 18 != a.keyCode
        ? (this.ya = 18)
        : a.metaKey && 91 != a.keyCode && (this.ya = 91));
    Ep(a.keyCode, this.ya, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey)
      ? ((this.Ra = Cp(a.keyCode)), bB && (this.Yc = a.altKey))
      : this.handleEvent(a);
  };
  A.Eg = function (a) {
    this.Ra = this.ya = -1;
    this.Yc = a.altKey;
  };
  A.handleEvent = function (a) {
    var b = a.A,
      c = b.altKey;
    if (S && a.type == v) {
      var d = this.Ra;
      var e = 13 != d && 27 != d ? b.keyCode : 0;
    } else
      (ln || Dp) && a.type == v
        ? ((d = this.Ra), (e = 0 <= b.charCode && 63232 > b.charCode && Bp(d) ? b.charCode : 0))
        : (a.type == v
            ? (bB && (c = this.Yc),
              b.keyCode == b.charCode
                ? 32 > b.keyCode
                  ? ((d = b.keyCode), (e = 0))
                  : ((d = this.Ra), (e = b.charCode))
                : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)))
            : ((d = b.keyCode || this.Ra), (e = b.charCode || 0)),
          Uk && 63 == e && 224 == d && (d = 191));
    var f = (d = Cp(d));
    d
      ? 63232 <= d && d in $A
        ? (f = $A[d])
        : 25 == d && a.shiftKey && (f = 9)
      : b.keyIdentifier && b.keyIdentifier in aB && (f = aB[b.keyIdentifier]);
    if (!M || a.type != v || Ep(f, this.ya, a.shiftKey, a.ctrlKey, c, a.metaKey))
      (a = f == this.ya), (this.ya = f), (b = new ss(f, e, a, b)), (b.altKey = c), this.J(b);
  };
  A.L = function () {
    return this.Db;
  };
  A.M = function () {
    us.da.M.call(this);
    vs(this);
  };
  var Cs;
  G(Es, I);
  A = Es.prototype;
  A.fa = 0;
  A.M = function () {
    Es.da.M.call(this);
    this.stop();
    delete this.A;
    delete this.B;
  };
  A.start = function (a) {
    this.stop();
    this.fa = ro(this.D, void 0 !== a ? a : this.C);
  };
  A.stop = function () {
    this.isActive() && F.clearTimeout(this.fa);
    this.fa = 0;
  };
  A.isActive = function () {
    return 0 != this.fa;
  };
  A.kg = function () {
    this.fa = 0;
    this.A && this.A.call(this.B);
  };
  var cB = RegExp(
      "[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"
    ),
    dB = RegExp(
      "^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"
    ),
    eB = /^http:\/\/.*/,
    fB = /\s+/,
    gB = /[\d\u06f0-\u06f9]/;
  A = Hs.prototype;
  A.Aa = function (a) {
    if (0 > a) {
      a = -a;
      var b = ns(this);
      if (b) {
        var c = "",
          d = this.A.A;
        d.selection && !pz
          ? ((c = d.selection.createRange()), c.collapse(!0), c.moveEnd("word", -1), (c = c.text.length > a ? c.text.slice(0, a) : c.text))
          : b.selectionEnd
          ? (c = b.value.slice(b.selectionStart, Math.min(b.value.length, b.selectionStart + a)))
          : ((d = In(this.A).getSelection()),
            0 < d.rangeCount &&
              ((b = d.getRangeAt(0).endContainer),
              (d = d.getRangeAt(0).endOffset),
              3 == b.nodeType && (c = b.nodeValue.slice(d, Math.min(b.nodeValue.length, d + a)))));
        a = c;
      } else a = "";
      return a;
    }
    b = ns(this);
    if (!b) return "";
    c = "";
    d = this.A.A;
    d.selection && !pz
      ? ((c = d.selection.createRange()), c.collapse(!0), c.moveStart("word", -1), (c = c.text.length > a ? c.text.slice(-a) : c.text))
      : b.selectionStart
      ? (c = b.value.slice(Math.max(0, b.selectionStart - a), b.selectionStart))
      : ((d = In(this.A).getSelection()),
        0 < d.rangeCount &&
          ((b = d.getRangeAt(0).startContainer),
          (d = d.getRangeAt(0).startOffset),
          3 == b.nodeType && (c = b.nodeValue.slice(Math.max(0, d - a), d))));
    return c;
  };
  A.commitText = function (a, b) {
    var c = ns(this);
    if (c) {
      var d = c.type && c.type.toUpperCase();
      d = ("EMAIL" == d || "NUMBER" == d) && c.tagName.toUpperCase() == qa;
      b = b ? b : 0;
      if (!d && c.tagName.toUpperCase() == qa && a.length > b) {
        var e = c.maxLength;
        if (typeof e === Tf && 0 <= e && e < c.value.length + a.length - b) return;
      }
      this.oc();
      e = {};
      e["fs-input"] = a;
      Bs && "gmail" == jq && (zs(c, te), zs(c, v, 0, e));
      if (d) c.value = (b ? c.value.slice(0, -b) : c.value) + a;
      else if (8 >= Kk(ua) || (10 >= Kk(ua) && ("\n" == a || (!a && 1 == b))))
        (d = this.A.A.selection.createRange()),
          0 < b && (a || !d.text) && d.moveStart(xb, -b),
          (0 < b || d.text) && d.execCommand(Zb, !1, null),
          (" " != a.charAt(0) && " " != a.charAt(a.length - 1)) ||
            !this.F ||
            ((b = d.duplicate()),
            b.moveToElementText(d.parentElement()),
            (e = d.duplicate()),
            " " == a.charAt(0) &&
              (d.moveStart(xb, -1), b.inRange(d) ? ((e = d.text.charAt(0)), (a = (" " == e ? "\u00a0" : e) + a)) : (d = e)),
            (e = d.duplicate()),
            " " == a.charAt(a.length - 1) &&
              (d.moveEnd(xb, 1),
              b.inRange(d) && " " == d.text.charAt(d.text.length - 1) && (a = a.slice(0, a.length - 1) + "\u00a0"),
              (d = e))),
          (d.text = a),
          d.collapse(!1),
          d.select();
      else if (this.F)
        a: {
          e = b;
          b = In(this.A);
          d = b.document;
          b = b.getSelection();
          b.isCollapsed || (d.execCommand(Zb, !1, null), a || (e = 0));
          if (0 < e) {
            if ((a || 1 < e || S || pz) && 3 == b.anchorNode.nodeType && 0 < b.rangeCount) {
              var f = b.getRangeAt(0),
                h,
                k = b.anchorOffset;
              for (h = Math.min(e, k); k >= h; ) {
                f.setStart(b.anchorNode, k - h);
                b.addRange(f);
                if (b.toString().length == h) break;
                h++;
              }
              h > e && (a = b.toString().slice(0, h - e) + a);
            }
            (b.isCollapsed && S) || d.execCommand(Zb, !1, null);
          }
          if (a) {
            if (d.queryCommandSupported) {
              if (d.queryCommandSupported("insertText")) {
                d.execCommand("insertText", !1, a);
                break a;
              }
              if (d.queryCommandSupported("insertHTML")) {
                b = { Jh: !0, Kh: !0 };
                b = void 0 === b ? {} : b;
                a instanceof Dm ||
                  ((a = a
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&apos;")),
                  b.Kh && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;")),
                  b.Jh && (a = a.replace(/(\r\n|\n|\r)/g, "<br>")),
                  b.Dr && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>')),
                  (a = Gm(a)));
                d.execCommand("insertHTML", !1, Em(a));
                break a;
              }
            }
            if (3 == b.anchorNode.nodeType) {
              d = b.anchorNode;
              f = b.anchorNode.nodeValue;
              e = b.anchorOffset + a.length;
              k = h = b.anchorOffset;
              for (var l = [" ", "\u00a0"]; 0 < k && J(l, f[--k]); );
              for (; h < f.length && J(l, f[h++]); );
              if (" " == a.charAt(0) || " " == a.charAt(a.length - 1) || k < h)
                (a = f.slice(k, b.anchorOffset) + a + f.slice(b.anchorOffset, h)),
                  (a = a.replace(/\u00a0/g, " ")),
                  (a = a.replace(/^\u0020/g, "\u00a0")),
                  (a = a.replace(/\u0020{2}/g, " \u00a0")),
                  (a = a.replace(/\u0020$/g, "\u00a0"));
              d.nodeValue = f.slice(0, k) + a + f.slice(h);
            } else
              (a = a.replace(/ /g, "\u00a0")),
                (d = Ln(this.A, a)),
                (e = b.anchorNode),
                e.insertBefore(d, e.childNodes[b.anchorOffset] || null),
                (e = a.length);
            a = b.getRangeAt(0);
            a.setStart(d, e);
            a.collapse(!0);
            b.addRange(a);
          }
        }
      else
        (d = this.B),
          (e = d.selectionStart),
          (f = d.selectionEnd),
          (h = d.value.length),
          e > h && (e = h),
          f > h && (f = h),
          !a && e < f && (b = 0),
          (e -= Math.min(e, b)),
          (d.value = d.value.slice(0, e) + a + d.value.slice(f)),
          (e += a.length),
          d.setSelectionRange(e, e);
      if (c && "1" == c.getAttribute("itaautodir")) {
        b = a = 0;
        d = !1;
        e = this.Aa(50).split(fB);
        for (f = 0; f < e.length; f++)
          (h = e[f]), dB.test(h) ? (a++, b++) : eB.test(h) ? (d = !0) : cB.test(h) ? b++ : gB.test(h) && (d = !0);
        c.dir = -1 == (0 == b ? (d ? 1 : 0) : 0.4 < a / b ? -1 : 1) ? Lg : Se;
      }
    }
  };
  A.Ec = function () {
    var a = ns(this);
    if (a) {
      var b = R(a),
        c = a.nodeName.toUpperCase();
      if (Tk(8) && !Tk(9) && a.tagName.toUpperCase() == Ka) {
        var d = b.A.selection.createRange();
        c = d.getBoundingClientRect();
        var e = 0,
          f = 0;
        try {
          f = $o(a) + 2;
        } catch (k) {
          f = 16;
        }
        if (Qo(a)) {
          for (
            var h = d.duplicate();
            h.boundingHeight <= f && h.htmlText == h.text && ((e = d.boundingLeft - h.boundingLeft), 0 != h.moveStart(xb, -1));

          );
          d = Ho(a).x;
          e = Math.max(c.left - e, d);
        } else e = c.left;
        c = new P(e, c.top + f);
      } else c = c == Ka || c == qa ? ls(a) : ks(b);
      f = c.x;
      e = c.y;
      a = js(a);
      f = f > a.right ? a.right : f;
      f = f < a.left ? a.left : f;
      e = e > a.bottom ? a.bottom : e;
      e = e < a.top ? a.top : e;
      c.x = f;
      c.y = e;
      is(c, b);
      return new ms(c.x, c.y);
    }
    return null;
  };
  A.oc = function () {
    var a = ns(this);
    a && (this.G ? In(this.A).focus() : a.focus());
  };
  A.Pb = function () {
    var a = ns(this);
    if (!a) return !0;
    if (typeof a.selectionStart === Tf) return a.selectionStart == a.selectionEnd;
    a = as(In(this.A));
    return !!a && a.Ya();
  };
  A.qb = function () {
    if (!ns(this)) return null;
    var a = null;
    this.F ? (a = new qs(this)) : (a = new ps(this));
    return (this.C[String(D(a))] = a);
  };
  A.deleteToken = function (a) {
    delete this.C[String(D(a))];
  };
  A.jb = function (a, b, c) {
    Bs(ns(this), a, b, c);
  };
  var Js = RegExp(
    "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
  );
  var Rs = {},
    Ws = ["box-shadow", "z-index", "margin", lg, "display"];
  var at;
  C(Zs, I);
  Zs.prototype.G = function (a) {
    var b = this.B[a.type];
    return b && a.target
      ? (b = b[D(a.target)])
        ? zt(b, function (c) {
            var d = c.listener;
            return typeof d === t ? d.call(c.ia, a) : d && d.handleEvent && typeof d.handleEvent === t ? d.handleEvent.call(d, a) : !0;
          })
        : !0
      : !0;
  };
  Zs.prototype.H = function (a) {
    var b = this.F[a.charCode];
    return b && a.target
      ? (b = b[D(a.target)])
        ? zt(b, function (c) {
            var d = c.listener;
            return typeof d === t ? d.call(c.ia, a) : d && d.handleEvent && typeof d.handleEvent === t ? d.handleEvent.call(d, a) : !0;
          })
        : !0
      : !0;
  };
  Zs.prototype.M = function () {
    H(this.D);
    delete this.B;
    delete this.F;
    delete this.A;
  };
  gt.prototype.Cc = function (a, b) {
    return this.listener == a && this.ia == b;
  };
  var $s = {};
  C(mt, O);
  A = mt.prototype;
  A.M = function () {
    O.prototype.M.call(this);
    H(this.A);
    delete this.A;
    this.C = this.D = this.F = null;
    H(this.G);
    delete this.G;
    H(this.B);
    delete this.B;
  };
  A.jb = function (a, b, c) {
    this.A.jb(a, b, c);
  };
  A.Eb = function (a) {
    a instanceof Gp && (a.type = Xg);
    xs(a) || this.J(a);
  };
  A.Aa = function (a) {
    try {
      return this.A.Aa(a);
    } catch (b) {}
    return "";
  };
  A.commitText = function (a, b) {
    try {
      this.A.commitText(a, b);
    } catch (c) {}
  };
  A.Ec = function () {
    try {
      return this.A.Ec();
    } catch (a) {}
    return null;
  };
  A.oc = function () {
    try {
      this.A.oc();
    } catch (a) {}
  };
  A.qb = function () {
    try {
      return this.A.qb();
    } catch (a) {}
    return null;
  };
  A.Pb = function () {
    try {
      return this.A.Pb();
    } catch (a) {}
    return !0;
  };
  C(pt, K);
  var qt = Vl("https://ssl.gstatic.com/inputtools/js/config/%{id}.js");
  G(tt, st);
  tt.prototype.cancel = function (a) {
    if (this.D) this.B instanceof tt && this.B.cancel();
    else {
      if (this.A) {
        var b = this.A;
        delete this.A;
        a ? b.cancel(a) : (b.S--, 0 >= b.S && b.cancel());
      }
      this.N ? this.N.call(this.K, this) : (this.I = !0);
      this.D || ((a = new Et(this)), xt(this), vt(this, !1, a));
    }
  };
  tt.prototype.T = function (a, b) {
    this.H = !1;
    vt(this, a, b);
  };
  tt.prototype.then = function (a, b, c) {
    var d,
      e,
      f = new bo(function (h, k) {
        e = h;
        d = k;
      });
    yt(
      this,
      e,
      function (h) {
        h instanceof Et ? f.cancel() : d(h);
        return Ct;
      },
      this
    );
    return f.then(a, b, c);
  };
  tt.prototype.$goog_Thenable = !0;
  tt.prototype.isError = function (a) {
    return a instanceof Error;
  };
  var Ct = {};
  G(wt, Zj);
  wt.prototype.message = "Deferred has already fired";
  wt.prototype.name = "AlreadyCalledError";
  G(Et, Zj);
  Et.prototype.message = "Deferred was canceled";
  Et.prototype.name = "CanceledError";
  Dt.prototype.B = function () {
    delete Bt[this.fa];
    throw this.A;
  };
  var Bt = {};
  G(Ht, Zj);
  Kt.prototype.Dc = function (a, b) {
    return b;
  };
  Kt.prototype.nb = function (a) {
    return String(a);
  };
  var St = Vl("https://ssl.gstatic.com/inputtools/js/ime/2/%{fileName}.js"),
    Ot = {},
    Qt = {},
    Vt = {},
    Dw = null,
    qv = null,
    Lt = null;
  Kt.prototype.ma = Nl;
  Kt.prototype.transform = Nl;
  Kt.prototype.Kb = Nl;
  Kt.prototype.T = 0;
  Tj("google.elements.ime.loadConfig", function (a, b) {
    var c = new Kt();
    Ut(c, b);
    var d = Vt[a];
    d && Ut(c, d);
    Ot[a] && (c.state = Ot[a].state);
    Ot[a] = c;
    bl(Qt, function (e) {
      e[a] && Ut(e[a], b);
    });
    Mt().J(new pt("cfga", a));
  });
  Tj("google.elements.ime.overrideConfig", Wt);
  var cu = {
    Ck: "zh-hant-t-i0-array-1992",
    Dk: "zh-hans-t-i0-cangjie-1982",
    Ek: bj,
    Fk: "zh-hans-t-i0-cangjie-1987",
    Gk: "zh-hant-t-i0-cangjie-1987",
    Hk: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
    Ik: Ui,
    Jk: Ti,
    Kk: Vi,
    Lk: "zh-hant-t-i0-dayi-1988",
    Nk: gj,
    Ok: dj,
    Mk: "ko-t-i0-und",
    Pk: hj,
    Qk: ij,
    Rk: jj,
    Sk: kj,
    Tk: lj,
    Uk: mj,
    Vk: Sa,
    Wk: Ua,
    Xk: db,
    Yk: lb,
    Zk: gb,
    al: Lf,
    bl: gc,
    dl: Dc,
    el: Vb,
    fl: dc,
    hl: Rc,
    il: $c,
    jl: cd,
    kl: ie,
    ll: Bd,
    ml: me,
    ol: le,
    nl: ke,
    pl: ze,
    ql: bf,
    rl: nf,
    tl: If,
    ul: ag,
    vl: vc,
    wl: "pl-t-i0-und",
    xl: Cg,
    yl: sg,
    zl: xg,
    Al: hg,
    Bl: Ng,
    Cl: Sg,
    Dl: ph,
    El: $g,
    Fl: mc,
    Gl: Dh,
    Hl: Lh,
    Il: Th,
    Jl: Zh,
    Kl: "tr-t-i0-und",
    Ll: qi,
    Ml: vi,
    Nl: Gi,
    Ol: nj,
    Pl: ej,
    Ql: "zh-hant-t-i0-bopomofo",
    Ul: lh,
    Vl: Va,
    Wl: sd,
    Xl: td,
    Yl: tc,
    Zl: eb,
    am: mb,
    bm: nb,
    dm: qb,
    fm: vg,
    gm: ib,
    hm: hb,
    im: sb,
    jm: tb,
    km: Ab,
    lm: Bb,
    om: ld,
    pm: Ob,
    qm: Nb,
    rm: Sb,
    sm: ng,
    tm: fd,
    um: Of,
    vm: Nf,
    wm: bc,
    xm: ic,
    ym: hc,
    zm: rc,
    Am: si,
    hp: Xh,
    Bm: zc,
    Cm: Gc,
    Em: Fc,
    Fm: xc,
    Gm: Pc,
    Im: re,
    Jm: qe,
    Km: Yb,
    Lm: Xb,
    Mm: ec,
    Om: Tc,
    Pm: Uc,
    Nm: Sc,
    Qm: eg,
    Rm: fg,
    Tm: Xc,
    Sm: nd,
    Vm: ad,
    Wm: gd,
    Xm: dd,
    Ym: Oi,
    Zm: rd,
    an: zd,
    bn: wd,
    cn: fe,
    dn: ge,
    fn: he,
    gn: Lc,
    hn: Kc,
    jn: Ed,
    ln: Dd,
    mn: oe,
    nn: Ae,
    on: Be,
    pn: ve,
    qn: xe,
    rn: De,
    tn: Fe,
    un: Ge,
    vn: Pe,
    wn: Ue,
    xn: "lis-t-k0-und",
    yn: Re,
    zn: $e,
    An: Ef,
    Bn: sf,
    Cn: cf,
    Dn: df,
    En: uf,
    Fn: Ye,
    Gn: qf,
    Hn: of,
    In: pf,
    Jn: gf,
    Kn: Ve,
    Ln: ef,
    Mn: qh,
    Nn: Df,
    On: Cf,
    Pn: Vf,
    Qn: Uf,
    Rn: "ne-t-k0-und",
    Sn: Jf,
    Un: Rf,
    Wn: Zf,
    Xn: bg,
    Yn: cg,
    Zn: dg,
    ao: Je,
    bo: og,
    co: wc,
    eo: Lb,
    fo: kg,
    io: Ag,
    ko: ug,
    mo: zg,
    no: Fg,
    oo: Kg,
    po: Jg,
    qo: Ig,
    ro: Hg,
    so: Qg,
    to: Pg,
    uo: Og,
    vo: Rg,
    yo: Ug,
    xo: Tg,
    Ao: "see-t-k0-und",
    Bo: mh,
    Co: nh,
    Do: Vg,
    Eo: ah,
    Fo: dh,
    Go: ch,
    Ho: fh,
    Io: Eb,
    Jo: Fb,
    Ko: Ci,
    Lo: pc,
    No: oc,
    Oo: xh,
    Po: vh,
    Qo: Tb,
    Ro: ai,
    So: Rh,
    To: Fh,
    Uo: Hh,
    Vo: Eh,
    Wo: Ih,
    Xo: Gh,
    Yo: ni,
    Zo: Mh,
    ap: Nh,
    bp: Wh,
    ep: Uh,
    fp: Vh,
    gp: $h,
    ip: ii,
    kp: ki,
    mp: oi,
    np: ri,
    op: wi,
    pp: jc,
    qp: zi,
    rp: yi,
    sp: Ai,
    tp: Ii,
    up: Hi,
    vp: Ji,
    wp: "vi-t-k0-vni",
    xp: Qb,
    zp: Ri,
    Tn: Si,
    Vn: Yf,
    Hm: Wb,
    Mo: nc,
    Dm: Ec,
    kn: Cd,
    ei: Mf,
    ho: jg,
    jo: tg,
    lo: yg,
    jp: gi,
    lp: ji,
    nm: Hb,
    Um: Wc,
    wo: hh,
    zo: Nc,
    yp: Ic,
    Ap: Me,
    ji: Qa,
    ki: kh,
    li: Ra,
    mi: Ta,
    ni: ud,
    oi: Xa,
    pi: bb,
    ri: sc,
    si: cb,
    ti: kb,
    vi: pb,
    wi: fb,
    xi: Bf,
    yi: oj,
    zi: rb,
    Ai: ub,
    Bi: fj,
    Ci: $i,
    Di: cj,
    Ei: Gb,
    Fi: kd,
    Gi: Mb,
    Hi: Rb,
    Ii: Kf,
    Ji: fc,
    Ki: kc,
    Li: qc,
    Mi: Ac,
    Ni: yc,
    Oi: Cc,
    Pi: Oc,
    Qi: pe,
    Ri: Ub,
    Si: cc,
    Ti: Qc,
    Ui: md,
    Vi: Vc,
    Wi: Zc,
    Xi: bd,
    Yi: id,
    Zi: qd,
    aj: yd,
    bj: vd,
    cj: Jc,
    dj: Ad,
    ej: je,
    fj: ne,
    gj: ye,
    hj: ue,
    ij: we,
    jj: Ce,
    kj: Ee,
    lj: He,
    mj: Oe,
    nj: Ie,
    oj: Te,
    pj: Qe,
    qj: Le,
    rj: Ze,
    sj: We,
    tj: rf,
    uj: af,
    vj: tf,
    wj: Xe,
    xj: mf,
    yj: ff,
    zj: Af,
    Aj: vf,
    Bj: wf,
    Cj: xf,
    Dj: yf,
    Ej: zf,
    Fj: Hf,
    Gj: Qf,
    Hj: Gf,
    Ij: Pf,
    Jj: Wf,
    Kj: $f,
    Lj: uc,
    Mj: ig,
    Nj: Bg,
    Oj: rg,
    Pj: wg,
    Qj: gg,
    Rj: Gg,
    Sj: Mg,
    Tj: gh,
    Uj: Mc,
    Vj: oh,
    Wj: ih,
    Xj: Zg,
    Yj: bh,
    Zj: eh,
    ak: jh,
    bk: lc,
    ck: th,
    dk: wh,
    ek: uh,
    fk: Qh,
    gk: Ch,
    hk: Kh,
    ik: Sh,
    jk: ob,
    kk: Yh,
    lk: fi,
    nk: pi,
    qk: ui,
    rk: Bi,
    sk: Fi,
    tk: Pb,
    uk: Hc,
    vk: Pi,
    wk: Qi,
    xk: pj,
    pk: ti,
    bq: "en-t-i0-voice",
    Zp: aj,
    aq: "zh-hant-t-i0-voice",
    eq: "xkb:am:phonetic:arm",
    fq: "xkb:be::fra",
    gq: "xkb:be::ger",
    hq: "xkb:be::nld",
    iq: "xkb:bg::bul",
    jq: "xkb:bg:phonetic:bul",
    kq: "xkb:br::por",
    lq: "xkb:by::bel",
    nq: "xkb:ca::fra",
    mq: "xkb:ca:eng:eng",
    oq: "xkb:ca:multix:fra",
    qq: "xkb:ch::ger",
    pq: "xkb:ch:fr:fra",
    rq: "xkb:cz::cze",
    sq: "xkb:cz:qwerty:cze",
    tq: "xkb:de::ger",
    uq: "xkb:de:neo:ger",
    vq: "xkb:dk::dan",
    wq: "xkb:ee::est",
    yq: "xkb:es::spa",
    xq: "xkb:es:cat:cat",
    Aq: "xkb:fo::fao",
    zq: "xkb:fi::fin",
    Bq: "xkb:fr:bepo:fra",
    Cq: "xkb:fr::fra",
    Dq: "xkb:gb:dvorak:eng",
    Eq: "xkb:gb:extd:eng",
    Fq: "xkb:ge::geo",
    Gq: "xkb:gr::gre",
    Hq: "xkb:hr::scr",
    Iq: "xkb:hu::hun",
    Jq: "xkb:hu:qwerty:hun",
    Kq: "xkb:ie::ga",
    Lq: "xkb:il::heb",
    Mq: "xkb:is::ice",
    Nq: "xkb:it::ita",
    Oq: "xkb:jp::jpn",
    Pq: "xkb:kz::kaz",
    Qq: "xkb:latam::spa",
    Rq: "xkb:lt::lit",
    Sq: "xkb:lv:apostrophe:lav",
    Uq: "xkb:mn::mon",
    Tq: "xkb:mk::mkd",
    Vq: "xkb:mt::mlt",
    Wq: "xkb:no::nob",
    Xq: "xkb:pl::pol",
    Yq: "xkb:pt::por",
    Zq: "xkb:ro::rum",
    ar: "xkb:ro:std:rum",
    br: "xkb:rs::srp",
    dr: "xkb:ru::rus",
    cr: "xkb:ru:phonetic:rus",
    er: "xkb:se::swe",
    gr: "xkb:si::slv",
    hr: "xkb:sk::slo",
    jr: "xkb:tr::tur",
    ir: "xkb:tr:f:tur",
    kr: "xkb:ua::ukr",
    qr: "xkb:us::eng",
    rr: "xkb:us::fil",
    sr: "xkb:us::ind",
    zr: "xkb:us::msa",
    lr: "xkb:us:altgr-intl:eng",
    mr: "xkb:us:colemak:eng",
    nr: "xkb:us:dvorak:eng",
    pr: "xkb:us:dvp:eng",
    tr: "xkb:us:intl:eng",
    ur: "xkb:us:intl:nld",
    yr: "xkb:us:intl:por",
    vr: "xkb:us:intl_pc:eng",
    wr: "xkb:us:intl_pc:nld",
    xr: "xkb:us:intl_pc:por",
    Br: "xkb:us:workman-intl:eng",
    Ar: "xkb:us:workman:eng"
  };
  bu.prototype.toString = function () {
    return this.code;
  };
  var iu = [Va, ng, ad, og, wc, Ci, oi, wi, Ri],
    hu = [Ua, $c, vc, vi],
    lu = {
      arm: "hy",
      bel: "be",
      bul: "bg",
      cat: "ca",
      cze: "cs",
      dan: "da",
      eng: r,
      est: "et",
      fao: "fo",
      fin: "fi",
      fra: "fr",
      geo: "ka",
      ger: "de",
      gre: "el",
      heb: Yc,
      hun: "hu",
      ice: "is",
      ind: "id",
      ita: "it",
      jpn: "ja",
      kaz: "kk",
      lav: "lv",
      lit: "lt",
      mlt: "mt",
      mon: "mn",
      msa: "ms",
      nld: "nl",
      nob: "no",
      pol: "pl",
      por: "pt",
      rum: "ro",
      rus: "ru",
      scr: "hr",
      slo: "sk",
      slv: "sl",
      spa: "es",
      srp: "sr",
      swe: "sv",
      tur: "tr",
      ukr: "uk"
    },
    Xt = { "xkb:us:intl:por": "pt", "xkb:br::por": "pt", "xkb:pt::por": "pt" },
    eu = {},
    au = ["bn", "gu", "pa", "kn", "ml", "or", "sa", Bh, "te", "ne"],
    gu = {
      im_pinyin_zh_hans: gj,
      im_pinyin_zh_hant: dj,
      im_t13n_ja: me,
      "im_t13n_ja-Hira": ie,
      im_wubi_zh_hans: nj,
      im_zhuyin_zh_hant: ej,
      vkd_bg_phone: hb,
      vkd_chr_phone: Bb,
      vkd_cs_qwertz: Nb,
      vkd_deva_phone: fd,
      vkd_en_dvorak: hc,
      vkd_es_es: pc,
      vkd_ethi: si,
      vkd_gu_phone: Uc,
      vkd_guru_inscript: eg,
      vkd_guru_phone: fg,
      vkd_hu_101: rd,
      vkd_hy_east: sd,
      vkd_hy_west: td,
      vkd_ka_qwerty: re,
      vkd_ka_typewriter: qe,
      vkd_ro_sr13392_primary: Ig,
      vkd_ro_sr13392_secondary: Hg,
      vkd_ru_phone: Pg,
      vkd_ru_phone_aatseel: Og,
      vkd_ru_phone_yazhert: Rg,
      vkd_sk_qwerty: ch,
      vkd_ta_itrans: Eh,
      vkd_ta_tamil99: Fh,
      vkd_ta_typewriter: Gh,
      vkd_th_pattajoti: Uh,
      vkd_th_tis: Vh,
      vkd_tr_f: ii,
      vkd_tr_q: ki,
      vkd_uk_101: ri,
      vkd_us_intl: Fc,
      vkd_uz_cyrl_phone: zi,
      vkd_uz_cyrl_type: yi,
      vkd_vi_tcvn: Ii,
      vkd_vi_telex: Hi
    },
    hB = {},
    iB;
  for (iB in gu) hB[gu[iB]] = iB;
  var $t = hB,
    Zt = {
      "nl-t-k0-intl": xi,
      "fr-t-k0-intl": xi,
      "de-t-k0-intl": xi,
      "ht-t-k0-und": "fr",
      "id-t-k0-und": Ke,
      "ga-t-k0-und": Ke,
      "it-t-k0-intl": xi,
      "jw-t-k0-und": Ke,
      "mr-t-k0-und": "deva_phone",
      "mr-t-k0-devanaga": "hi",
      "ms-t-k0-und": Ke,
      "pt-br-t-k0-intl": xi,
      "pt-pt-t-k0-intl": xi,
      "sa-t-k0-devanaga": "hi",
      "es-t-k0-intl": xi,
      "sw-t-k0-und": Ke,
      "tl-t-k0-und": Ke,
      "ti-t-k0-und": "ethi",
      "cy-t-k0-und": Ke
    };
  var jB = 0;
  mu.prototype.send = function (a, b, c, d) {
    a = a ? gl(a) : {};
    d = d || "_" + (jB++).toString(36) + Date.now().toString(36);
    var e = "_callbacks___" + d;
    b && ((F[e] = pu(d, b)), (a[this.A] = e));
    b = { timeout: this.Ab, jg: !0 };
    e = TA.exec(Xl(this.B).toString());
    var f = e[3] || "";
    e = $l(e[1] + cm("?", e[2] || "", a) + cm("#", f));
    b = Jt(e, b);
    yt(b, null, ou(d, a, c));
    return { fa: d, qe: b };
  };
  mu.prototype.cancel = function (a) {
    a && (a.qe && a.qe.cancel(), a.fa && nu(a.fa, !1));
  };
  A = su.prototype;
  A.add = function (a, b) {
    uu(this);
    this.D = null;
    a = String(a);
    var c = this.A.get(a);
    c || this.A.set(a, (c = []));
    c.push(b);
    this.B += 1;
    return this;
  };
  A.remove = function (a) {
    uu(this);
    a = String(a);
    return this.A.has(a) ? ((this.D = null), (this.B -= this.A.get(a).length), this.A.delete(a)) : !1;
  };
  A.clear = function () {
    this.A = this.D = null;
    this.B = 0;
  };
  A.forEach = function (a, b) {
    uu(this);
    this.A.forEach(function (c, d) {
      c.forEach(function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };
  A.pd = function () {
    uu(this);
    for (var a = Array.from(this.A.values()), b = Array.from(this.A.keys()), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
    return c;
  };
  A.sb = function (a) {
    uu(this);
    var b = [];
    if (typeof a === z) wu(this, a) && (b = b.concat(this.A.get(String(a))));
    else {
      a = Array.from(this.A.values());
      for (var c = 0; c < a.length; c++) b = b.concat(a[c]);
    }
    return b;
  };
  A.set = function (a, b) {
    uu(this);
    this.D = null;
    a = String(a);
    wu(this, a) && (this.B -= this.A.get(a).length);
    this.A.set(a, [b]);
    this.B += 1;
    return this;
  };
  A.get = function (a, b) {
    if (!a) return b;
    a = this.sb(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  A.toString = function () {
    if (this.D) return this.D;
    if (!this.A) return "";
    for (var a = [], b = Array.from(this.A.keys()), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.sb(d);
      for (var f = 0; f < d.length; f++) {
        var h = e;
        "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
        a.push(h);
      }
    }
    return (this.D = a.join("&"));
  };
  C(xu, I);
  xu.prototype.M = function () {
    this.B && this.abort(this.A);
    this.B = null;
  };
  xu.prototype.send = function (a, b, c, d) {
    this.A && this.abort(this.A);
    a = this.H + a;
    var e = a + "&" + this.G;
    e != this.D && ((a = $l(Ms(a))), (this.B = new mu(a, this.G)), (this.D = e));
    b && vu(b);
    c = E(c, d);
    this.A = { Ph: this.B.send(b, E(this.F, this, c, !0), E(this.F, this, c, !1)), key: this.D };
    this.C = Date.now();
    return this.A;
  };
  xu.prototype.abort = function (a) {
    a.key == this.D && this.B.cancel(a.Ph);
  };
  xu.prototype.F = function (a, b, c) {
    b && this.I.push("ql", Date.now() - this.C);
    a(b, b ? c : null);
    this.A = null;
  };
  C(zu, O);
  A = zu.prototype;
  A.isActive = function () {
    return !!this.A;
  };
  A.Zb = function () {
    return this.C;
  };
  A.xd = function () {
    return yu(this.Zb());
  };
  A.send = function (a, b, c, d) {
    c = void 0 === c ? "" : c;
    if (!this.A) {
      b = (void 0 === b ? "GET" : b).toUpperCase();
      this.B = !0;
      this.A = new XDomainRequest();
      this.A.onload = E(this.Pe, this);
      this.A.onerror = E(this.fh, this);
      this.A.ontimeout = E(this.Fh, this);
      var e = window.location.href,
        f = e.indexOf("://");
      a = a.replace(/^http[s]/, 0 > f ? "N/A" : e.slice(0, f));
      !d && c && ((a = a + "?" + c), (c = ""));
      try {
        this.A.open(b, a);
      } catch (h) {
        Bu(this);
        Au(this);
        return;
      }
      try {
        (this.D = !0), this.A.send(c), (this.D = !1);
      } catch (h) {}
    }
  };
  A.Pe = function () {
    if (this.B)
      if (((this.C = 200), this.D)) F.setTimeout(E(this.Pe, this), 0);
      else {
        this.J(Eg);
        this.B = !1;
        try {
          this.J(Ib), this.J("success");
        } finally {
          Au(this);
        }
      }
  };
  A.abort = function () {
    this.A && this.B && ((this.B = !1), this.A.abort(), this.J(Ib), this.J("abort"), Au(this));
  };
  A.M = function () {
    delete this.A;
    this.A = null;
  };
  A.Fh = function () {
    "undefined" != typeof Mu && this.A && (this.J("timeout"), this.abort());
  };
  A.fh = function () {
    this.B = !1;
    this.A && this.A.abort();
    Bu(this);
    Au(this);
  };
  A.se = function () {
    try {
      return this.A ? this.A.responseText : "";
    } catch (a) {
      return "";
    }
  };
  Cu.prototype.A = null;
  var kB;
  G(Fu, Cu);
  kB = new Fu();
  G(Hu, O);
  var lB = /^https?$/i,
    mB = ["POST", "PUT"];
  A = Hu.prototype;
  A.Rd = function (a) {
    this.P = a;
  };
  A.send = function (a, b, c, d) {
    if (this.A) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.N + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.N = a;
    this.I = !1;
    this.B = !0;
    this.A = this.H ? Gu(this.H) : Gu(kB);
    this.F = this.H ? Eu(this.H) : Eu(kB);
    this.A.onreadystatechange = E(this.Re, this);
    try {
      (this.K = !0), this.A.open(b, String(a), !0), (this.K = !1);
    } catch (h) {
      Lu(this);
      return;
    }
    a = c || "";
    c = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype) for (var e in d) c.set(e, d[e]);
      else if (typeof d.keys === t && typeof d.get === t) {
        e = Fj(d.keys());
        for (var f = e.next(); !f.done; f = e.next()) (f = f.value), c.set(f, d.get(f));
      } else throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c.keys()).find(function (h) {
      return "content-type" == h.toLowerCase();
    });
    e = F.FormData && a instanceof F.FormData;
    !J(mB, b) || d || e || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    b = Fj(c);
    for (d = b.next(); !d.done; d = b.next()) (c = Fj(d.value)), (d = c.next().value), (c = c.next().value), this.A.setRequestHeader(d, c);
    this.R && (this.A.responseType = this.R);
    "withCredentials" in this.A && this.A.withCredentials !== this.P && (this.A.withCredentials = this.P);
    try {
      Ou(this),
        0 < this.U &&
          ((this.X = Iu(this.A))
            ? ((this.A.timeout = this.U), (this.A.ontimeout = E(this.Ab, this)))
            : (this.G = ro(this.Ab, this.U, this))),
        (this.C = !0),
        this.A.send(a),
        (this.C = !1);
    } catch (h) {
      Lu(this);
    }
  };
  A.Ab = function () {
    "undefined" != typeof Mu && this.A && (this.J("timeout"), this.abort(8));
  };
  A.abort = function () {
    this.A && this.B && ((this.B = !1), (this.D = !0), this.A.abort(), (this.D = !1), this.J(Ib), this.J("abort"), Ku(this));
  };
  A.M = function () {
    this.A && (this.B && ((this.B = !1), (this.D = !0), this.A.abort(), (this.D = !1)), Ku(this, !0));
    Hu.da.M.call(this);
  };
  A.Re = function () {
    this.S || (this.K || this.C || this.D ? Nu(this) : this.xh());
  };
  A.xh = function () {
    Nu(this);
  };
  A.isActive = function () {
    return !!this.A;
  };
  A.xd = function () {
    var a = this.Zb(),
      b;
    if (!(b = yu(a))) {
      if ((a = 0 === a))
        (a = String(this.N).match(Js)[1] || null),
          !a && F.self && F.self.location && (a = F.self.location.protocol.slice(0, -1)),
          (a = !lB.test(a ? a.toLowerCase() : ""));
      b = a;
    }
    return b;
  };
  A.Zb = function () {
    try {
      return 2 < (this.A ? this.A.readyState : 0) ? this.A.status : -1;
    } catch (a) {
      return -1;
    }
  };
  A.se = function () {
    try {
      return this.A ? this.A.responseText : "";
    } catch (a) {
      return "";
    }
  };
  C(Pu, I);
  Pu.prototype.M = function () {
    this.B = null;
    this.A.ea();
    this.A = null;
    H(this.D);
  };
  Pu.prototype.H = function (a, b, c) {
    if (!this.S) {
      var d = c.target;
      (c = d.xd() && 0 != d.Zb()) && this.F.push("ql", Date.now() - this.G);
      var e = E;
      if ((d = c ? d.se() : null)) {
        d = d.replace(/\s*while\(1\);\s*(.*)/g, "$1");
        try {
          var f = JSON.parse(d);
        } catch (h) {
          f = null;
        }
      } else f = null;
      a = e(a, b, c, f);
      Hl(this.D, this.A, Ib, this.B);
      this.B = null;
      ro(a);
    }
  };
  Pu.prototype.send = function (a, b, c, d, e, f) {
    a = this.C + a;
    this.A.isActive() && (this.A.abort(), this.B || (Hl(this.D, this.A, Ib, this.B), (this.B = null)));
    b && (a = a + "?" + vu(b).toString());
    b = f && JSON && JSON.stringify ? JSON.stringify(f) : "";
    65536 > b.length && (c && ((this.B = E(this.H, this, c, d || null)), this.D.listen(this.A, Ib, this.B)), this.A.send(a, "POST", b, e));
    this.G = Date.now();
  };
  Pu.prototype.abort = function () {
    this.A.abort();
  };
  var Qu = Ej([Za]),
    Su = Ej(["oldauto"]);
  C(Tu, I);
  A = Tu.prototype;
  A.Gb = function (a) {
    return J([wb, "cd"], a);
  };
  A.Sd = function (a, b) {
    if (this.Gb(a)) {
      switch (a) {
        case wb:
          var c = arguments[1];
          this.D = c;
          if (this.Qb(c)) {
            if (((this.active = arguments[2]), this.A && X && (c = this.A.D)))
              Uu(this, c, ab, this.active), Uu(this, c, "autocorrect", this.active), Uu(this, c, $a, this.active);
          } else this.active = !1;
          break;
        case vb:
          var d = arguments[1];
          (c = arguments[2]) ? (this.A = d) : this.A == d && jq != li && (this.A = null);
          this.active && this.A && X && (d = this.A.D) && (Uu(this, d, ab, c), Uu(this, d, "autocorrect", c), Uu(this, d, $a, c));
          break;
        case "cd":
          this.A && ((c = this.A), c.D && c.D.setAttribute("dir", arguments[1]));
      }
      this.Fb.apply(this, arguments);
    }
  };
  A.cb = function () {
    return null;
  };
  A.handleEvent = function (a, b) {
    this.A = a;
    return this.Hc(b);
  };
  A.Hc = function () {
    return !1;
  };
  A.register = function (a) {
    this.A = a;
  };
  A.unregister = function (a) {
    this.A == a && (this.A = null);
  };
  A.isActive = function () {
    return this.active;
  };
  A.Fb = Nl;
  A.kc = Ml;
  A.Qb = Ml;
  C(Wu, Tu);
  A = Wu.prototype;
  A.cb = function () {
    var a = [];
    T(this.B, function (b) {
      jk(a, b.cb());
    });
    mk(a);
    return a;
  };
  A.register = function (a) {
    T(this.B, function (b) {
      b.register(a);
    });
  };
  A.unregister = function (a) {
    T(this.B, function (b) {
      b.unregister(a);
    });
  };
  A.handleEvent = function (a, b) {
    var c = !1,
      d = this.G[b.type];
    d &&
      T(d, function (e) {
        c = c || e.handleEvent(a, b);
      });
    return c;
  };
  A.kc = function (a, b) {
    var c = !1;
    T(this.F, function (d) {
      c = c || d.kc(a, b);
    });
    return c;
  };
  A.Fb = function (a, b) {
    var c = Array.from(arguments);
    this.F = [];
    this.G = {};
    T(
      this.B,
      function (d) {
        d.Sd.apply(d, c);
        d.isActive() &&
          (this.F.push(d),
          T(
            d.cb(),
            function (e) {
              this.G[e] = this.G[e] || [];
              this.G[e].push(d);
            },
            this
          ));
      },
      this
    );
  };
  A.Gb = function (a) {
    for (var b = 0; b < this.B.length; ++b) if (this.B[b].Gb(a)) return !0;
    return !1;
  };
  A.M = function () {
    this.B &&
      T(this.B, function (a) {
        a.ea();
      });
  };
  A.Qb = function () {
    return !0;
  };
  C(Zu, K);
  $u.prototype.load = function (a) {
    return this.A[a] || null;
  };
  var av = {};
  C(fv, K);
  C(lv, O);
  C(sv, O);
  A = sv.prototype;
  A.rc = function (a) {
    if (3 == this.status || 2 == this.status) {
      0 > a && (a = 0);
      if (a >= this.D.length) {
        if (this.F) {
          a = Math.ceil(this.D.length / this.config.A);
          this.B = a * this.config.A;
          wv(this, 2 * a);
          return;
        }
        a = 0;
      }
      this.B = a;
      vv(this);
    }
  };
  A.na = function (a) {
    this.rc(this.B + a);
  };
  A.oa = function (a) {
    this.rc((tv(this) + a) * this.config.A);
  };
  A.Ob = function () {
    return "";
  };
  A.eb = function () {
    return "";
  };
  A.Ja = function () {
    return [];
  };
  A.fb = function () {
    return "";
  };
  A.Ta = function () {
    return "";
  };
  A.reset = function () {
    0 != this.status && this.J("cls");
    this.source = "";
    this.A = 0;
    this.I = "";
    this.B = -1;
    this.D = [];
    this.F = !0;
    this.status = 0;
    this.P = this.Da = this.H = !1;
    vv(this);
  };
  A.abort = function () {
    this.reset();
  };
  A.Va = function () {};
  A.Uc = function () {};
  A.Tc = function () {};
  A.sa = function (a) {
    0 != a && this.Tc(this.A + a);
  };
  A.Vb = function () {};
  A.ta = function () {
    return "";
  };
  A.nd = function () {
    return {};
  };
  A.tb = function (a) {
    var b = "",
      c = "",
      d = "";
    if (this.config.I) {
      for (var e = 0, f; (f = a.C[e]); e++) (b = f.C), (c += f.source), 0 < f.A.length && (d += f.A[0].target);
      if (c && d) {
        a = this.N;
        c = b + c;
        b += d;
        for (d = 0; d < a.A.length; d++) a.A[d].source == c && (a.A[d].target = b);
        a.B();
      }
    }
  };
  A.M = function () {
    H(this.R);
    H(this.U);
    O.prototype.M.call(this);
  };
  A.ff = function () {
    return !1;
  };
  C(xv, sv);
  A = xv.prototype;
  A.Va = function (a, b) {
    this.source.length + a.length - b > this.config.F ||
      ((a = this.source.slice(0, this.A - b) + a),
      (this.source = a + this.source.slice(this.A)),
      (this.A = a.length),
      (this.B = -1),
      0 == this.status && this.J("opn"),
      wv(this));
  };
  A.Uc = function (a) {
    var b = this.Ta();
    0 == a.indexOf(b) ? (this.source = a.slice(b.length)) : ((this.source = a), (this.G = []));
    this.A = this.source.length;
    this.B = -1;
    wv(this);
  };
  A.Tc = function (a) {
    0 > a ? (a = 0) : a > this.source.length && (a = this.source.length);
    a != this.A && ((this.A = a), (this.B = -1), wv(this));
  };
  A.Vb = function () {
    if (0 < this.G.length) {
      var a = this.G[this.G.length - 1];
      this.G = this.G.slice(0, -1);
      this.source = a.source + this.source;
      this.A += a.source.length;
      this.C.Bb("slen");
      this.C.Bb("tlen");
      this.C.Bb("ci");
      this.C.Bb("dur");
      this.C.Bb(se);
    } else if (
      0 < this.source.length &&
      0 < this.A &&
      ((this.source = this.source.slice(0, this.A - 1) + this.source.slice(this.A)), this.A--, !this.source)
    ) {
      this.reset();
      return;
    }
    this.B = -1;
    wv(this);
  };
  A.ta = function (a) {
    var b = this.eb();
    if (typeof a === Tf) {
      if (a >= this.D.length) return "";
      if (0 > a) return this.C.set(Na, "cmts"), (a = this.Ja().join("")), uv(this, b, a), a;
      this.B = a;
    }
    1 == this.status && wv(this);
    if (2 == this.status) return (b = this.Ta() + this.source), this.A == this.source.length && (this.C.set(Na, "cmtd"), uv(this, b)), b;
    if (3 != this.status || 0 > this.B || this.B >= this.D.length) return "";
    a = this.D[this.B];
    this.C.push("slen", a.source.length);
    this.C.push("tlen", a.target.length);
    this.C.push("ci", this.B);
    this.C.push("dur", Date.now() - this.df);
    a = this.D[this.B];
    this.G.push(new Yu(a.source, a.target));
    this.source = this.source.slice(a.source.length);
    this.A -= a.source.length;
    0 > this.A && (this.A = 0);
    this.P = 2 == a.type;
    vv(this);
    if (this.source) (this.B = -1), wv(this);
    else return (a = this.Ja().join("")), this.C.set(Na, "cmtt"), uv(this, b, a), a;
    return "";
  };
  A.reset = function () {
    this.G = [];
    sv.prototype.reset.call(this);
  };
  A.Ob = function () {
    return this.source.slice(0, this.A);
  };
  A.fb = function () {
    var a = 0 == this.A ? this.source : this.source.slice(0, this.A);
    this.config.Ia || (a = a.toLowerCase());
    return a;
  };
  A.Ta = function () {
    for (var a = /^(zh|yue)/.test(this.K.code), b = /[a-zA-Z]$/.test(this.I), c = "", d = 0; d < this.G.length; d++) {
      var e = this.G[d].target;
      a && b && /^[a-zA-Z]/.test(e) && (e = " " + e);
      b = /[a-zA-Z]$/.test(e);
      c += e;
    }
    return c;
  };
  A.tb = function (a) {
    var b = a.C[0];
    if (b && (this.config.D || !this.config.G || this.H || (0 != b.A.length && 2 != b.A[0].type))) {
      var c = 0 < b.A.length;
      if (1 == b.type) c && ((this.D = b.A), (b = Dw.Aa(1)), " " != b && "\u00a0" != b && (this.D[0].target = " " + this.D[0].target));
      else {
        var d = !1,
          e = !1,
          f = !1;
        c && ((c = b.A[0]), c.B && ((e = 4 == c.type), (f = 3 == c.type), (d = 5 == c.type)));
        c = b.C + b.source;
        this.config.H && !d ? this.J(new Zu(c, "")) : sv.prototype.tb.call(this, a);
        if (2 != this.status || this.Ta() + this.fb() != c) return;
        this.F = b.D;
        this.D = b.A;
        this.config.H
          ? ((a = e || f || d),
            this.H
              ? a && 0 > this.B && (this.B = 0)
              : ((this.D = []), (this.F = !1), (this.B = -1), a && (this.D = b.A.slice(0, 1)), d && this.config.I && (this.B = 0)))
          : this.config.I && 0 > this.B && (this.B = 0);
      }
      this.df = Date.now();
    }
    this.status = 3;
    vv(this);
  };
  A.Ja = function () {
    var a = 0 == this.A ? this.source : this.source.slice(0, this.A),
      b = 0 == this.A ? "" : this.source.slice(this.A);
    if (this.config.ob && a && 0 <= this.B && this.B < this.D.length) {
      var c = this.D[this.B];
      a = c.target + a.slice(c.source.length);
    }
    a = [this.Ta(), a, b];
    0 == this.A && ((b = a[1]), (a[1] = a[2]), (a[2] = b));
    if (!this.Da)
      for (b = 0; b < a.length; b++) a[b] && (c = this.config.transform(a[b], "")) && ((c = c.text), c.length == a[b].length && (a[b] = c));
    return a;
  };
  A.eb = function () {
    for (var a = "", b = 0; b < this.G.length; b++) a += this.G[b].source;
    return a + this.source;
  };
  A.ff = function () {
    Pn(function () {
      var a = Dw;
      a.Aa(-20).trim() || ((this.I = a.Aa(20)), wv(this, void 0, 1));
    }, this);
    return !1;
  };
  A.df = 0;
  G(zv, O);
  var yv = F.document && F.document.documentElement && !!F.document.documentElement.setCapture && !!F.document.releaseCapture;
  A = zv.prototype;
  A.setEnabled = function (a) {
    this.G = a;
  };
  A.M = function () {
    zv.da.M.call(this);
    Al(this.handle, [ei, hf], this.Rc, !1, this);
    this.A.removeAll();
    this.C && this.B.releaseCapture();
    this.handle = this.target = null;
  };
  A.Rc = function (a) {
    var b = a.type == hf;
    !this.G || this.D || (b && (0 != a.A.button || (Uk && a.ctrlKey)))
      ? this.J("earlycancel")
      : this.J(new Dv(rh, this, a.clientX, a.clientY, a)) &&
        ((this.D = !0),
        b && a.preventDefault(),
        this.cf(),
        (this.clientX = this.U = a.clientX),
        (this.clientY = this.X = a.clientY),
        (this.screenX = a.screenX),
        (this.screenY = a.screenY),
        (this.deltaX = this.target.offsetLeft),
        (this.deltaY = this.target.offsetTop),
        (this.I = kn(R(this.B).A)));
  };
  A.cf = function () {
    var a = this.B,
      b = a.documentElement,
      c = !this.C;
    this.A.listen(a, [di, jf], this.ye, { capture: c, passive: !1 });
    this.A.listen(a, [ci, lf], this.rb, c);
    this.C ? (b.setCapture(!1), this.A.listen(b, "losecapture", this.rb)) : this.A.listen(mn(a), jb, this.rb);
    this.K && this.A.listen(this.K, "scroll", this.Se, c);
  };
  A.rb = function (a, b) {
    this.A.removeAll();
    this.C && this.B.releaseCapture();
    this.D
      ? ((this.D = !1),
        this.J(new Dv("end", this, a.clientX, a.clientY, a, Av(this, this.deltaX), Bv(this, this.deltaY), b || "touchcancel" == a.type)))
      : this.J("earlycancel");
  };
  A.ye = function (a) {
    if (this.G) {
      var b = a.clientX - this.clientX,
        c = a.clientY - this.clientY;
      this.clientX = a.clientX;
      this.clientY = a.clientY;
      this.screenX = a.screenX;
      this.screenY = a.screenY;
      if (!this.D) {
        var d = this.U - this.clientX,
          e = this.X - this.clientY;
        if (0 < d * d + e * e)
          if (this.J(new Dv(rh, this, a.clientX, a.clientY, a))) this.D = !0;
          else {
            this.S || this.rb(a);
            return;
          }
      }
      c = Cv(this, b, c);
      b = c.x;
      c = c.y;
      this.D && this.J(new Dv("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (Ev(this, a, b, c), a.preventDefault());
    }
  };
  A.Se = function (a) {
    var b = Cv(this, 0, 0);
    a.clientX = this.clientX;
    a.clientY = this.clientY;
    Ev(this, a, b.x, b.y);
  };
  G(Dv, K);
  C(Fv, zv);
  Fv.prototype.Rc = function (a) {
    Hv(this, a);
    zv.prototype.Rc.call(this, a);
  };
  Fv.prototype.cf = function () {
    Gv(this, this.B);
    var a = Q(this.handle);
    a != this.B && Gv(this, a);
    this.K && this.A.listen(this.K, "scroll", this.Se, !yv);
  };
  Fv.prototype.R = function (a) {
    Hv(this, a);
    this.ye(a);
  };
  var Jv = null;
  C(Lv, K);
  var gw = { dc: hf, ec: lf, xc: "mousecancel", Ep: jf, Gp: w, Fp: kf, Cp: "mouseenter", Dp: "mouseleave" };
  var Wv = {};
  Lj(Mv);
  var Rv;
  Lj(Pv);
  var Sv = { button: "pressed", checkbox: yb, menuitem: Wg, menuitemcheckbox: yb, menuitemradio: yb, radio: yb, tab: Wg, treeitem: Wg };
  G(Xv, U);
  A = Xv.prototype;
  A.ld = null;
  A.wa = 0;
  A.re = null;
  A.Z = function () {
    var a = this.A,
      b = a.O,
      c = this.C,
      d = Uv(),
      e = [d],
      f = Uv();
    f != d && e.push(f);
    d = this.getState();
    for (f = []; d; ) {
      var h = d & -d;
      f.push(Vv(c, h));
      d &= ~h;
    }
    e.push.apply(e, f);
    (c = this.re) && e.push.apply(e, c);
    this.D = a = b.call(a, g, e.join(" "), this.ld);
    So(a, !S);
    this.isVisible() || (No(a, !1), a && Ds(a, hd, !0));
  };
  A.Y = function () {
    Xv.da.Y.call(this);
    var a = this.D;
    this.isVisible() || Ds(a, hd, !this.isVisible());
    this.isEnabled() || Tv(a, 1, !this.isEnabled());
    if (rp(this)) {
      var b = this.L();
      a = Uv() + "-rtl";
      (b = b.L ? b.L() : b) && qr(b, [a]);
    }
    this.isEnabled() && Qv(this, this.isVisible());
    a = qp(this);
    b = this.L();
    a.listen(b, gw.dc, this.Zc).listen(b, [gw.ec, gw.xc], this.ud).listen(b, w, this.Ud).listen(b, kf, this.xe);
    this.rd != Ol && a.listen(b, Kb, this.rd);
    S && !this.F && ((this.F = new hw(this)), Xj(this, this.F));
    if ((a = this.L()))
      (b = this.B || (this.B = new us())), ts(b, a), qp(this).listen(b, se, this.ac).listen(a, Bc, this.tf).listen(a, jb, this.Td);
  };
  A.bb = function () {
    Xv.da.bb.call(this);
    this.B && vs(this.B);
    this.isVisible() && this.isEnabled() && Qv(this, !1);
  };
  A.M = function () {
    Xv.da.M.call(this);
    this.B && (this.B.ea(), delete this.B);
    delete this.C;
    this.F = this.re = this.ld = null;
  };
  A.isVisible = function () {
    return !0;
  };
  A.isEnabled = function () {
    return !(this.wa & 1);
  };
  A.setEnabled = function (a) {
    var b = this.X;
    (b && typeof b.isEnabled == t && !b.isEnabled()) ||
      !Yv(this, 1, !a) ||
      (a || (aw(this, !1), $v(this, !1)), this.isVisible() && Qv(this, a), Zv(this, 1, !a, !0));
  };
  A.isActive = function () {
    return !!(this.wa & 4);
  };
  A.isSelected = function () {
    return !!(this.wa & 8);
  };
  A.getState = function () {
    return this.wa;
  };
  A.Ud = function (a) {
    !dw(a, this.L()) && this.J("enter") && this.isEnabled() && cw(2) && $v(this, !0);
  };
  A.xe = function (a) {
    !dw(a, this.L()) && this.J("leave") && (cw(4) && aw(this, !1), cw(2) && $v(this, !1));
  };
  A.rd = Ol;
  A.Zc = function (a) {
    if (this.isEnabled() && (cw(2) && $v(this, !0), !(0 != a.A.button || (Uk && a.ctrlKey)))) {
      cw(4) && aw(this, !0);
      var b;
      if ((b = this.C)) {
        var c;
        b = (c = this.L()) ? c.hasAttribute(Jh) && Cn(c) : !1;
      }
      b && this.L().focus();
    }
    0 != a.A.button || (Uk && a.ctrlKey) || a.preventDefault();
  };
  A.ud = function (a) {
    this.isEnabled() && (cw(2) && $v(this, !0), this.isActive() && ew(this, a) && cw(4) && aw(this, !1));
  };
  A.tf = function () {
    cw(32) && Yv(this, 32, !0) && Zv(this, 32, !0);
  };
  A.Td = function () {
    cw(4) && aw(this, !1);
    cw(32) && Yv(this, 32, !1) && Zv(this, 32, !1);
  };
  A.ac = function (a) {
    return this.isVisible() && this.isEnabled() && 13 == a.keyCode && ew(this, a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1;
  };
  if (typeof Xv !== t) throw Error("Invalid component class " + Xv);
  if (typeof Pv !== t) throw Error("Invalid renderer class " + Pv);
  var nB = D(Xv);
  Wv[nB] = Pv;
  if (typeof fw !== t) throw Error("Invalid decorator function " + fw);
  G(hw, I);
  var iw = !S || Tk(9);
  hw.prototype.C = function () {
    this.A = !1;
  };
  hw.prototype.G = function () {
    this.A = !0;
  };
  hw.prototype.F = function (a) {
    if (this.A) this.A = !1;
    else {
      var b = a.A,
        c = b.button,
        d = b.type,
        e = jw(b, hf);
      this.B.Zc(new Wk(e, a.B));
      e = jw(b, lf);
      this.B.ud(new Wk(e, a.B));
      iw || ((b.button = c), (b.type = d));
    }
  };
  hw.prototype.M = function () {
    this.B = null;
    hw.da.M.call(this);
  };
  G(Y, U);
  A = Y.prototype;
  A.zd = null;
  A.mb = null;
  A.ad = null;
  A.Tb = null;
  A.Za = !0;
  A.lb = !0;
  A.Mb = !0;
  A.Ka = -1;
  A.pa = null;
  A.Sb = !1;
  A.pb = null;
  A.Z = function () {
    var a = this.A,
      b = a.O,
      c = ["goog-container", this.Tb == jd ? "goog-container-horizontal" : "goog-container-vertical"];
    this.isEnabled() || c.push("goog-container-disabled");
    this.D = b.call(a, g, c.join(" "));
  };
  A.Y = function () {
    Y.da.Y.call(this);
    tp(
      this,
      function (b) {
        if (b.Oa) {
          var c = b.L();
          c = c.id || (c.id = b.fa || (b.fa = ":" + (b.Sg.A++).toString(36)));
          this.pb || (this.pb = {});
          this.pb[c] = b;
        }
      },
      this
    );
    var a = this.L();
    Ov(this.ad, this);
    this.qa(this.Za, !0);
    qp(this)
      .listen(this, "enter", this.zg)
      .listen(this, "highlight", this.Dg)
      .listen(this, "unhighlight", this.Rg)
      .listen(this, "open", this.Ig)
      .listen(this, "close", this.ug)
      .listen(a, gw.dc, this.uf)
      .listen(Q(a), [gw.ec, gw.xc], this.wg)
      .listen(a, [gw.dc, gw.ec, gw.xc, w, kf, Kb], this.rg);
    this.Mb && lw(this, !0);
  };
  A.bb = function () {
    sw(this, -1);
    this.pa && bw(this.pa, !1);
    this.Sb = !1;
    Y.da.bb.call(this);
  };
  A.M = function () {
    Y.da.M.call(this);
    this.mb && (this.mb.ea(), (this.mb = null));
    this.ad = this.pa = this.pb = this.zd = null;
  };
  A.zg = function () {
    return !0;
  };
  A.Dg = function (a) {
    var b = up(this, a.target);
    if (-1 < b && b != this.Ka) {
      var c = sp(this, this.Ka);
      c && $v(c, !1);
      this.Ka = b;
      c = sp(this, this.Ka);
      this.Sb && aw(c, !0);
      this.pa && c != this.pa && bw(this.pa, !1);
    }
    b = this.L();
    null != a.target.L() && Ds(b, Pa, a.target.L().id);
  };
  A.Rg = function (a) {
    a.target == sp(this, this.Ka) && (this.Ka = -1);
    this.L().removeAttribute("aria-activedescendant");
  };
  A.Ig = function (a) {
    (a = a.target) && a != this.pa && a.X == this && (this.pa && bw(this.pa, !1), (this.pa = a));
  };
  A.ug = function (a) {
    a.target == this.pa && (this.pa = null);
    var b = this.L(),
      c = a.target.L();
    b && a.target.wa & 2 && c && ((a = ""), c && (a = c.id), Ds(b, Pa, a));
  };
  A.uf = function (a) {
    this.lb && (this.Sb = !0);
    var b = kw(this);
    b && b.hasAttribute(Jh) && Cn(b) ? b.focus() : a.preventDefault();
  };
  A.wg = function () {
    this.Sb = !1;
  };
  A.rg = function (a) {
    a: {
      var b = a.target;
      if (this.pb)
        for (var c = this.L(); b && b !== c; ) {
          var d = b.id;
          if (d in this.pb) {
            b = this.pb[d];
            break a;
          }
          b = b.parentNode;
        }
      b = null;
    }
    if (b)
      switch (a.type) {
        case gw.dc:
          b.Zc(a);
          break;
        case gw.ec:
        case gw.xc:
          b.ud(a);
          break;
        case w:
          b.Ud(a);
          break;
        case kf:
          b.xe(a);
          break;
        case Kb:
          b.rd(a);
      }
  };
  A.Wd = function () {};
  A.Vd = function () {
    sw(this, -1);
    this.Sb = !1;
    this.pa && bw(this.pa, !1);
  };
  A.Xd = function (a) {
    return this.isEnabled() && this.isVisible() && (0 != (this.G ? this.G.length : 0) || this.zd) && qw(this, a)
      ? (a.preventDefault(), a.stopPropagation(), !0)
      : !1;
  };
  A.isVisible = function () {
    return this.Za;
  };
  A.qa = function (a, b) {
    if (b || (this.Za != a && this.J(a ? "show" : "hide"))) {
      this.Za = a;
      var c = this.L();
      c && (No(c, a), this.Mb && Nv(kw(this), this.lb && this.Za), b || this.J(this.Za ? "aftershow" : "afterhide"));
      return !0;
    }
    return !1;
  };
  A.isEnabled = function () {
    return this.lb;
  };
  A.setEnabled = function (a) {
    this.lb != a &&
      this.J(a ? "enable" : "disable") &&
      (a
        ? ((this.lb = !0),
          tp(this, function (b) {
            b.gf ? delete b.gf : b.setEnabled(!0);
          }))
        : (tp(this, function (b) {
            b.isEnabled() ? b.setEnabled(!1) : (b.gf = !0);
          }),
          (this.Sb = this.lb = !1)),
      this.Mb && Nv(kw(this), a && this.Za));
  };
  C(uw, Y);
  A = uw.prototype;
  A.ka = function (a) {
    Y.prototype.ka.call(this, a);
    No(this.N, !0);
    Xs(this.L(), this.N);
  };
  A.Z = function () {
    Y.prototype.Z.call(this);
    var a = this.L();
    or(a, "ita-ppe-box");
    X && V(a, "ita-ppe-box-mobile");
    Kv(a);
    a.style.direction = this.model.config.ba ? Lg : Se;
    this.qa(!1);
    var b = this.B.O(g, "ita-ppe-edit"),
      c = this.B.O(g, "ita-ppe-div");
    this.I = this.B.O(g, "ita-ppe-can-list");
    if (X) (this.K = b), this.B.la(c, this.I);
    else if (this.model.config.K) {
      this.K = b;
      var d = vw(this);
      ww(this, d.rows[0].cells[0]);
      this.B.la(c, this.I, d);
    } else
      (d = vw(this)),
        (this.K = this.B.O(g, "ita-ppe-div")),
        this.B.la(d.rows[0].cells[0], this.K),
        this.B.la(b, d),
        (d = vw(this)),
        this.B.la(d.rows[0].cells[0], this.I),
        ww(this, d.rows[0].cells[1]),
        this.B.la(c, d);
    this.C = this.B.O(g, "ita-isv");
    document.body.appendChild(this.C);
    this.B.la(a, b, c);
    this.model.config.U || (b.style.display = x);
  };
  A.Y = function () {
    Y.prototype.Y.call(this);
    rw(this);
    var a = this.L();
    qp(this).listen(this.I, q, this.qg);
    X
      ? qp(this).listen(this.A.A, q, this.qa.bind(this, !1))
      : ((this.aa = new Fv(this.N, a)),
        qp(this)
          .listen(this.H, q, this.Kg)
          .listen(this.F, q, this.Jg)
          .listen(this.H, [w, kf], E(this.ze, this, this.H))
          .listen(this.F, [w, kf], E(this.ze, this, this.F)));
  };
  A.qg = function (a) {
    3 == this.model.status && ((a = dk(this.R, a.target)), 0 <= a && this.J(new Lv(a)));
  };
  A.Kg = function () {
    3 != this.model.status || pr(this.H, be) || this.J("pu");
  };
  A.Jg = function () {
    3 != this.model.status || pr(this.F, be) || this.J("pd");
  };
  A.ze = function (a, b) {
    b.type == w ? V(a, "ita-ppe-hov") : W(a, "ita-ppe-hov");
  };
  A.Vc = function () {};
  A.qa = function (a, b) {
    b = Y.prototype.qa.call(this, a, b);
    No(this.N, a);
    !a && this.C && (this.C.style.display = x);
    return b;
  };
  A.M = function () {
    H(this.aa);
    Y.prototype.M.call(this);
    tn(this.C);
    tn(this.N);
  };
  C(zw, uw);
  zw.prototype.Vc = function () {
    var a = this.model.Ja();
    this.B.la(this.K, this.B.O(p, ee, a[0]), a[1], this.B.O(p, ae), a[2]);
  };
  Aw.prototype.Ba = function (a) {
    if (0 == this.A.status && !this.A.config.D) return !1;
    var b = this.A.Ob(),
      c = Dw;
    if (this.D) {
      var d = Ew(this, !1);
      if (!d) return !1;
      b = d.Ma();
      H(d);
    }
    d = String.fromCharCode(a.charCode);
    var e = 0;
    if ((a = this.A.config.transform(b, String.fromCharCode(a.charCode)))) (d = a.text), (e = a.back);
    else if (" " == d) return !1;
    this.D ? (c.commitText(d, e), Gw(this)) : this.A.Va(d, e);
    return !0;
  };
  Aw.prototype.ib = function (a) {
    if (!Dw.Pb()) return !1;
    this.B = Ew(this, !1);
    if (!this.B) return !1;
    var b = this.B.Ma();
    if (b && !b.replace(Cw(this.A.config.C), ""))
      return (
        this.A.Va(b, 0),
        1 == this.A.status && wv(this.A),
        this.A.ta(),
        (a = String.fromCharCode(a.charCode || a.keyCode)),
        !HA || this.A.config.D || !this.A.config.G || (" " != a && "\n" != a) ? (uv(this.A, a, a), !0) : !1
      );
    this.B.ea();
    this.B = null;
    return !1;
  };
  C(Mw, K);
  C(Nw, O);
  A = Nw.prototype;
  A.mc = function () {
    this.A || (this.A = new Aw(this.model, this.view));
  };
  A.Hd = function (a) {
    if (a.type != v || Ow(this) || a.ctrlKey || a.altKey || a.metaKey) return !1;
    var b = Dw,
      c = b.Aa(20);
    this.model.I = c;
    var d = null;
    if (this.model.config.state & 1 || /^(?:zh|yue)/.test(this.model.K.code))
      d = this.model.config.ma(c, String.fromCharCode(a.charCode), this.model.config.state);
    if (d) {
      c = d.text;
      d = d.back;
      if (0 < d) return b.commitText(c, d), !0;
      this.A && c.match(this.model.config.S) && this.ib(a) ? b.commitText(c, 1) : uv(this.model, c, c);
      return !0;
    }
    return !1;
  };
  A.wc = function (a) {
    Ow(this) && (this.B.push(se, a.keyCode || a.charCode), this.B.wb("bsc"));
    return this.A ? Kw(this.A) : Ow(this) ? (this.model.Vb(), !0) : !1;
  };
  A.bc = function (a) {
    this.B.push(se, a.keyCode || a.charCode);
    return this.A ? ((a = this.A), 0 != a.A.status ? (a.A.abort(), (a = !0)) : (a = !1), a) : Ow(this) ? (this.model.abort(), !0) : !1;
  };
  A.Ba = function (a) {
    if (this.A) return this.A.Ba(a);
    a = String.fromCharCode(a.charCode);
    var b = 0;
    this.model.config.Ia || this.model.source || (this.model.Da = /^[A-Z]/.test(a));
    if (!this.model.Da) {
      var c = this.model.config.transform(this.model.Ob(), a);
      if (c) (a = c.text), (b = c.back);
      else if (" " == a) return !1;
    }
    this.model.Va(a, b);
    return !0;
  };
  A.We = function (a) {
    a.charCode = a.keyCode;
    return this.Ba(a);
  };
  A.ib = function (a) {
    if (this.model.Da) return !0;
    this.B.push(se, a.keyCode || a.charCode);
    if (this.A && !Ow(this)) return this.A.ib(a);
    (a = this.model.config.transform(this.model.Ob(), "")) && this.model.Va(a.text, a.back);
    wv(this.model);
    return !0;
  };
  A.Pc = function (a) {
    if (this.model.config.H && 0 == this.model.D.length) return this.model.reset(), !1;
    if (3 == this.model.status) {
      var b = Number(String.fromCharCode(a.charCode));
      if (1 > b || b > this.model.config.A) return !0;
      b = tv(this.model) * this.model.config.A + b - 1;
      0 <= b && (this.B.push(se, a.keyCode || a.charCode), this.model.ta(b), Pw(this));
    }
    return !0;
  };
  A.Bf = function (a) {
    this.B.push(se, a.keyCode || a.charCode);
    var b = "",
      c;
    (c = !this.A) || ((c = this.A), Bw(c) ? (c.A.reset(), (c = !0)) : (c = !1), (c = !c));
    c && ((b = this.model.ta()), Ow(this) && (b += this.model.ta(-1)));
    a = c = String.fromCharCode(a.charCode);
    (b = this.model.config.ma(b, c, this.model.config.state)) && 0 == b.back && (a = b.text);
    uv(this.model, a, a);
    return !0;
  };
  A.Ub = function (a) {
    var b = String.fromCharCode(a.charCode),
      c = "\t" == b || 9 == a.keyCode,
      d = " " == b || 32 == a.keyCode;
    if (this.A && ((3 == this.model.status && 0 > this.model.B) || (this.model.config.B && !(this.model.H || (c && Bw(this.A))))))
      return !1;
    this.B.push(se, a.keyCode || a.charCode);
    a = "\r" == b || 13 == a.keyCode;
    (this.model.config.P && a) || (!d && !c && !a) || (3 == this.model.status && 0 == this.model.D.length) || this.model.Da
      ? this.model.ta(-1)
      : this.model.ta();
    c || Pw(this);
    return !0;
  };
  A.Af = function () {
    this.B.push(se, 0);
    return this.A ? Lw(this.A) : !1;
  };
  A.Fc = function () {
    return [];
  };
  A.sd = function (a) {
    vn(this.view.L(), a.target) || (this.A ? Iw(this.A) : this.model.reset());
  };
  A.zf = function () {
    ro(
      E(function () {
        this.B.Qc(this.model.K.code);
        this.B.yc("st");
        if (this.A) {
          var a = this.A;
          if (!a.B) {
            var b = Dw;
            b && (a.B = b.qb());
          }
          a.B && (b = a.B.Yb(!a.A.H && a.A.config.B)) && xw(a.C, b);
        } else (a = Dw) && (a = a.Ec()) && xw(this.view, a);
      }, this)
    );
  };
  A.vf = function () {
    if (this.A) {
      var a = this.A;
      H(a.B);
      a.B = null;
      a.G = "";
    }
    this.B.get(Na) || this.B.set(Na, "cl");
    this.B.end("st");
    this.B.report();
  };
  A.yf = function () {
    if (this.A) {
      var a = this.A;
      if (3 == a.A.status && a.G) {
        for (var b = 0; b < a.A.D.length; b++)
          if (a.A.D[b].target == a.G) {
            a.A.B = b;
            break;
          }
        a.G = "";
      }
      a.B && (a.B.zb() || (a.B.ea(), (a.B = Ew(a, !0))), a.B && ((b = a.A.Ja().join("")), b != a.B.Ma() && a.B.replace(b)));
      if (!a.A.H && a.A.config.B)
        if ((!a.B && 3 == a.A.status && (b = Dw) && (a.B = b.qb()), (b = a.C), (a = a.B), 3 != b.model.status || 0 == b.model.D.length))
          b.qa(!1);
        else {
          var c = b.model.D[0],
            d = c.target;
          if (c.source == b.model.source && d != b.model.source) {
            if ((c = d.length > b.model.source.length)) {
              var e = b.model.source;
              c = String(e).toLowerCase();
              e = String(d.slice(0, e.length)).toLowerCase();
              c = 0 == (c < e ? -1 : c == e ? 0 : 1);
            }
            c
              ? (Bn(b.C, d.slice(b.model.source.length).replace(/\s/g, "\u00a0")),
                sr(b.C, "ita-isv-red", "ita-isv-grey"),
                a && (b.P = a.Yb(!0)),
                b.P.Fa(b.C, 9),
                (b.C.style.display = "block"))
              : d.length == b.model.source.length
              ? (Bn(b.C, b.model.source),
                sr(b.C, "ita-isv-grey", "ita-isv-red"),
                a && (b.P = a.Yb()),
                b.P.Fa(b.C, 8),
                (b.C.style.display = "block"))
              : (b.C.style.display = x);
          }
        }
      else yw(a.C);
    } else yw(this.view);
  };
  A.wf = function (a) {
    if (this.A) {
      var b = this.A,
        c = a.H;
      a = a.C;
      c != a && (b.S[a] = c);
      if (a && b.B && b.A.eb() == c) b.B.replace(a), b.B.ea(), (b.B = null), (b = !0);
      else {
        var d = b.F[c];
        if (d && 0 != d.length) {
          for (var e = 0; e < d.length; ++e) {
            var f = d[e];
            a && f.replace(a);
            f.ea();
          }
          delete b.F[c];
          b = !0;
        } else b = !1;
      }
      !b && c == a && (c = Dw) && (S && !Tk(9) ? ((c = c.qb()), c.replace(a), c.ea()) : c.commitText(a));
    } else (c = Dw) && a.C && (this.J(new Mw("cmts", a.C)), c.commitText(a.C), this.J(new Mw("cmte", a.C)));
  };
  A.xf = function () {
    this.A && Hw(this.A);
  };
  A.qd = function (a) {
    this.B.push(se, 0);
    this.model.ta(tv(this.model) * this.model.config.A + a.index);
    Pw(this);
  };
  A.sg = function () {
    this.model.oa(1);
  };
  A.tg = function () {
    this.model.oa(-1);
  };
  A.M = function () {
    H(this.D);
    O.prototype.M.call(this);
  };
  C(Qw, Nw);
  Qw.prototype.Ba = function (a) {
    return String.fromCharCode(a.charCode).match(/[0-9]/) && 0 != this.model.config.N && this.model.source.replace(/[0-9]/g, "")
      ? this.Pc(a)
      : Nw.prototype.Ba.call(this, a);
  };
  Qw.prototype.G = function (a) {
    if (0 < this.model.D.length) return 0 > this.model.B && (this.model.B = 0), (a.type = v), (a.charCode = a.keyCode), this.Ub(a);
    this.model.reset();
    return !1;
  };
  Qw.prototype.C = function () {
    this.model.na(this.model.D.length - 1 - this.model.B);
  };
  Qw.prototype.Fc = function () {
    function a(l) {
      k.ba && (l = -l);
      h.model.oa(l);
    }
    function b() {
      return !h.A && !c();
    }
    function c() {
      return e() && k.Na && k.U && !h.A;
    }
    function d() {
      return !!h.A;
    }
    function e() {
      return f() && 0 != h.model.status;
    }
    function f() {
      return !k.B || h.model.H;
    }
    var h = this,
      k = this.model.config;
    return [
      [q, 0, null, null, d, this.Af, this],
      [
        u,
        0,
        32,
        null,
        function () {
          return k.C.test(" ");
        },
        this.We,
        this
      ],
      [v, 0, k.C, null, null, this.Ba, this],
      [
        v,
        0,
        /[0-9]/,
        null,
        function () {
          return 0 != h.model.status && 0 != k.N && f();
        },
        this.Pc,
        this
      ],
      [u, 0, 38, 3, f, this.model.na, this.model, -1],
      [u, 0, 40, 3, f, this.model.na, this.model, 1],
      [u, 0, 33, 3, f, this.model.oa, this.model, -1],
      [u, 0, 37, 3, b, a, void 0, -1],
      [v, 0, k.ga, 3, f, this.model.oa, this.model, -1],
      [u, 0, 34, 3, f, this.model.oa, this.model, 1],
      [u, 0, 39, 3, b, a, void 0, 1],
      [v, 0, k.ca, 3, f, this.model.oa, this.model, 1],
      [v, 0, k.Ib, null, e, this.Bf, this],
      [u, 0, 32, null, e, this.Ub, this],
      [
        u,
        0,
        32,
        null,
        function () {
          return k.B && !!h.A;
        },
        this.model.ff,
        this.model
      ],
      [u, 0, 13, null, e, this.Ub, this],
      [u, 0, 9, 3, d, this.G, this],
      [u, 0, 8, null, null, this.wc, this],
      [u, 0, 27, null, e, this.bc, this],
      [
        v,
        0,
        k.S,
        0,
        function () {
          return !!h.A && !k.D;
        },
        this.ib,
        this
      ],
      [u, 0, 37, null, c, this.model.sa, this.model, -1],
      [u, 0, 39, null, c, this.model.sa, this.model, 1],
      [u, 0, 36, null, c, this.model.sa, this.model, -999],
      [u, 0, 35, null, c, this.model.sa, this.model, 999],
      [u, 0, 36, 3, f, this.model.na, this.model, -999],
      [u, 0, 35, 3, f, this.C, this]
    ];
  };
  C(Rw, O);
  Rw.prototype.push = function (a, b) {
    this.A.push(new Yu(a, b || ""));
    this.B();
  };
  Rw.prototype.B = function () {
    if (0 < this.A.length && 2e3 < new Date().getTime() - this.A[0].timestamp) {
      var a = this.A.pop();
      a.target && this.J(new Zu(a.source, a.target));
      this.reset();
    }
  };
  Rw.prototype.reset = function () {
    this.A = [];
  };
  C(Sw, Rw);
  Sw.prototype.B = function () {
    for (var a = [], b = 0; b < this.A.length; b++) {
      var c = this.A[b].source,
        d = this.A[b].target;
      d ? this.J(new Zu(c, d)) : a.push(this.A[b]);
    }
    this.A = a;
    Rw.prototype.B.call(this);
  };
  C(Vw, sv);
  A = Vw.prototype;
  A.rc = function (a) {
    this.C[this.A].A = a;
    sv.prototype.rc.call(this, a);
  };
  A.Va = function (a, b) {
    (2 != this.status && 3 != this.status) || this.ta(-1);
    this.source.length + a.length - b > this.config.F ||
      ((this.source = this.source.slice(0, this.A - b) + a + this.source.slice(this.A)),
      (this.A += a.length - b),
      0 == this.status && this.J("opn"),
      (this.status = 1),
      vv(this));
  };
  A.Uc = function (a) {
    3 == this.status && ((this.C = []), (this.D = []), (this.status = 1));
    this.source = a;
    this.A = this.source.length;
    vv(this);
  };
  A.Tc = function (a) {
    if (2 != this.status) {
      var b = 3 == this.status,
        c = b ? this.C.length - 1 : this.source.length;
      0 > a ? (a = 0) : a > c && (a = c);
      a != this.A && ((this.A = a), b && Ww(this), vv(this));
    }
  };
  A.Yd = function () {
    1 != this.status ||
      this.A >= this.source.length ||
      ((this.source = this.source.slice(0, this.A) + this.source.slice(this.A + 1)) ? vv(this) : this.reset());
  };
  A.Vb = function () {
    if (1 == this.status && 0 < this.A) {
      if (((this.source = this.source.slice(0, this.A - 1) + this.source.slice(this.A)), this.A--, !this.source)) {
        this.reset();
        return;
      }
    } else 3 == this.status && ((this.C = []), (this.D = []), (this.A = this.source.length), (this.status = 1));
    vv(this);
  };
  A.ta = function (a) {
    a = a || 0;
    if (0 <= a && a < this.D.length) this.rc(a);
    else if (0 > a)
      if (2 == this.status) uv(this, this.source);
      else return (a = this.Ja().join("")), uv(this, this.eb(), a), a;
    return "";
  };
  A.abort = function () {
    3 == this.status ? this.Vb() : this.reset();
  };
  A.reset = function () {
    this.C = [];
    sv.prototype.reset.call(this);
  };
  A.Ob = function () {
    return this.source.slice(0, this.A);
  };
  A.Ta = function () {
    return "";
  };
  A.fb = function () {
    var a = "";
    1 == this.status
      ? (a = this.source + "||t:1")
      : 3 == this.status &&
        (a = this.C.map(function (b) {
          return b.source.replace(/[,|:]/g, escape);
        }, this).join(","));
    return a;
  };
  A.Ja = function () {
    if (3 == this.status) {
      for (var a = [], b = 0; b < this.C.length; b++) {
        var c = this.C[b];
        b == this.A
          ? a.push(0 > this.B || this.B >= this.D.length ? c.source : this.D[this.B].target)
          : a.push(0 > c.A || c.A >= c.B.length ? c.source : c.B[c.A].target);
      }
      return a;
    }
    return [this.source.slice(0, this.A), this.source.slice(this.A)];
  };
  A.eb = function () {
    return this.source;
  };
  A.tb = function (a) {
    sv.prototype.tb.call(this, a);
    if (2 == this.status) {
      a = a.C;
      if (0 == a.length) this.status = 0 == this.C.length ? 1 : 3;
      else {
        if (a.length == this.C.length)
          for (var b = 0, c; (c = this.C[b]); b++) {
            var d = a[b];
            c.source == d.source && ((c.B = d.A), (c.D = d.D), 0 > c.A || c.A >= d.A.length) && (c.A = 0);
          }
        else
          for (this.C = [], this.source = "", b = this.A = 0; (c = a[b]); b++)
            (this.source += c.source), (d = new Tw(c.source)), (d.B = c.A), (d.D = c.D), (d.A = 0), this.C.push(d);
        this.status = 3;
        Ww(this);
      }
      vv(this);
    }
  };
  A.md = function () {
    var a = this.C[this.A];
    if (!(2 > a.source.length)) {
      var b = a.source.slice(-1);
      a.source = a.source.slice(0, -1);
      Uw(a);
      (a = this.C[this.A + 1]) ? ((a.source = b + a.source), Uw(a)) : ((a = new Tw(b)), this.C.splice(this.A + 1, 0, a));
      wv(this);
    }
  };
  A.Bd = function () {
    if (!(this.A >= this.C.length - 1)) {
      var a = this.C[this.A],
        b = this.C[this.A + 1];
      a.source += b.source.slice(0, 1);
      Uw(a);
      b.source = b.source.slice(1);
      0 == b.source.length ? this.C.splice(this.A + 1, 1) : Uw(b);
      wv(this);
    }
  };
  C(Xw, uw);
  Xw.prototype.Vc = function () {
    var a = this.model.Ja();
    if (3 == this.model.status) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = this.B.O(p, ee, a[c]);
        this.model.A != c && V(d, ce);
        b.push(d);
      }
      this.B.la(this.K, b);
    } else 2 == this.model.status ? this.B.la(this.K, a.join("")) : this.B.la(this.K, a[0], this.B.O(p, ae), a[1]);
  };
  C(Yw, Nw);
  A = Yw.prototype;
  A.Cf = function () {
    this.model.na(this.model.D.length - 1 - this.model.B);
  };
  A.mc = function () {
    Nw.prototype.mc.call(this);
    this.A.D = !1;
  };
  A.Ba = function (a) {
    var b = String.fromCharCode(a.charCode);
    return 3 == this.model.status && "0" < b && Number(b) <= this.model.config.A ? !1 : Nw.prototype.Ba.call(this, a);
  };
  A.qd = function (a) {
    Nw.prototype.qd.call(this, a);
    1 == this.model.C.length && this.model.ta(-1);
  };
  A.Fc = function () {
    var a = Zw(this);
    a = a.concat($w(this));
    return (a = a.concat([
      [u, 0, 38, 3, null, this.model.na, this.model, -1],
      [u, 0, 40, 3, null, this.model.na, this.model, 1],
      [u, 0, 33, 3, null, this.model.oa, this.model, -1],
      [u, 0, 34, 3, null, this.model.oa, this.model, 1],
      [v, 0, /[0-9]/, 3, null, this.Pc, this],
      [u, 0, 36, 3, null, this.model.na, this.model, -999],
      [u, 0, 35, 3, null, this.Cf, this],
      [u, 0, 9, 3, null, this.model.na, this.model, 1],
      [u, 0, 32, 3, null, this.model.na, this.model, 1],
      [u, 16, 38, 3, null, this.model.oa, this.model, -1],
      [u, 16, 40, 3, null, this.model.oa, this.model, 1],
      [u, 16, 37, 3, null, this.model.md, this.model],
      [u, 16, 39, 3, null, this.model.Bd, this.model],
      [u, 16, 32, 3, null, this.model.na, this.model, -1],
      [u, 17, 72, 3, null, this.bc, this],
      [u, 17, 80, 3, null, this.model.na, this.model, -1],
      [u, 17, 78, 3, null, this.model.na, this.model, 1],
      [u, 17, 73, 3, null, this.model.md, this.model],
      [u, 17, 79, 3, null, this.model.Bd, this.model],
      [u, 17, 81, 3, null, this.model.md, this.model],
      [u, 17, 87, 3, null, this.model.Bd, this.model]
    ]));
  };
  C(ax, Rw);
  ax.prototype.B = function () {
    for (var a = 0; a < this.A.length && this.A[a].target; a++) this.J(new Zu(this.A[a].source, this.A[a].target));
    this.A = this.A.slice(a);
    Rw.prototype.B.call(this);
  };
  var bx = {
    a: "\u3107",
    b: "\u3116",
    c: "\u310f",
    d: "\u310e",
    e: "\u310d",
    f: "\u3111",
    g: "\u3115",
    h: "\u3118",
    i: "\u311b",
    j: "\u3128",
    k: "\u311c",
    l: "\u3120",
    m: "\u3129",
    n: "\u3119",
    o: "\u311f",
    p: "\u3123",
    q: "\u3106",
    r: "\u3110",
    s: "\u310b",
    t: "\u3114",
    u: "\u3127",
    v: "\u3112",
    w: "\u310a",
    x: "\u310c",
    y: "\u3117",
    z: "\u3108",
    1: "\u3105",
    2: "\u3109",
    3: "\u02c7",
    4: "\u02cb",
    5: "\u3113",
    6: "\u02ca",
    7: "\u02d9",
    8: "\u311a",
    9: "\u311e",
    0: "\u3122",
    "-": "\u3126",
    ";": "\u3124",
    ",": "\u311d",
    ".": "\u3121",
    "/": "\u3125",
    " ": "\u02c9",
    "=": "="
  };
  C(ex, sv);
  A = ex.prototype;
  A.abort = function () {
    3 == this.status ? fx(this) : 1 == this.status && this.reset();
  };
  A.Va = function (a, b) {
    2 != this.status &&
      3 != this.status &&
      (this.Da
        ? " " != a && (this.G = this.source = (this.source + a).slice(0, this.config.F))
        : ((this.source = this.source.slice(0, this.source.length - b) + a.toLowerCase()),
          (this.G = (a = this.config.transform(this.source, "")) ? a.text : this.source)),
      (this.B = -1),
      (this.F = !0),
      0 == this.status && this.J("opn"),
      this.config.W && !this.source.match(this.config.W) ? ((this.status = 1), vv(this)) : wv(this));
  };
  A.Uc = function () {};
  A.Tc = function (a) {
    1 != this.status ||
      this.source ||
      (0 > a ? (a = 0) : a > this.C.length && (a = this.C.length), a != this.A && ((this.A = a), vv(this)));
  };
  A.Vb = function () {
    this.source
      ? ((this.G = this.G.slice(0, -1)), (this.source = this.source.slice(0, -1)))
      : 0 < this.A && (this.C.splice(this.A - 1, 1), this.A--);
    0 != this.C.length || this.source ? vv(this) : this.reset();
  };
  A.ta = function (a) {
    if (3 == this.status) {
      typeof a === Tf && 0 <= a && (this.B = a);
      if (0 <= this.B && this.B < this.D.length) {
        var b = this.D[this.B];
        a = b.source;
        b = b.target;
        if (this.X) return uv(this, a, b), "";
        for (; a && b; ) {
          var c = this.C[this.A++];
          if (a.slice(0, c.source.length) != c.source) break;
          c.target = b.charAt(0);
          c.A = !0;
          a = a.slice(c.source.length);
          b = b.slice(1);
        }
      }
      fx(this);
      return "";
    }
    if (2 == this.status && this.source) {
      uv(this, this.fb());
      b = a = "";
      for (c = this.A; c < this.C.length; c++) (a += this.C[c].source), (b += this.C[c].target);
      a && b && uv(this, a, b);
      return b;
    }
    return 1 == this.status ? ((a = this.Ja().join("")), uv(this, this.eb(), a), vv(this), a) : "";
  };
  A.reset = function () {
    this.C = [];
    this.G = "";
    this.X = !1;
    sv.prototype.reset.call(this);
  };
  A.Df = function () {
    1 != this.status || this.source || (this.C.splice(this.A, 1), 0 == this.C.length ? this.reset() : vv(this));
  };
  A.Ob = function () {
    return this.source;
  };
  A.Ta = function () {
    if (!this.source) {
      for (var a = "", b = 0; b < this.A; b++) a += this.C[b].target;
      return a;
    }
    return "";
  };
  A.fb = function () {
    var a = "";
    if (this.source) {
      for (var b = 0; b < this.A; b++) {
        var c = this.C[b];
        a += c.A ? c.target : c.source;
      }
      a += this.source;
    } else for (this.A >= this.C.length && 0 < this.C.length && this.A--, b = this.A; b < this.C.length; b++) a += this.C[b].source;
    return a;
  };
  A.nd = function () {
    if (jq == zb) {
      var a = (this.source ? this.C.slice(0, this.A) : this.C.slice(this.A, this.C.length)).map(function (d) {
        var e = {};
        e.source = cx(d.source);
        d.A && (e.target = d.target);
        return e;
      }, this);
      this.source && a.push({ source: cx(this.source) });
      var b = {};
      b.itc = this.K.code;
      var c = this.fb();
      b.source = cx(c);
      b.update_all = !0;
      b.append_tokens = a;
      return { message: JSON.stringify(b) };
    }
    return sv.prototype.nd.call(this);
  };
  A.Ja = function () {
    for (var a = "", b = "", c = 0; c < this.C.length; c++) {
      var d = this.C[c];
      c < this.A ? (b += d.target || d.source) : (a += d.target || d.source);
    }
    return [b, this.G, a];
  };
  A.eb = function () {
    return "";
  };
  A.tb = function (a) {
    sv.prototype.tb.call(this, a);
    if (2 == this.status)
      if (((a = a.C[0]), !a || 0 == a.A.length)) (this.status = 1), vv(this);
      else if (a.C + a.source == this.Ta() + this.fb()) {
        if (this.source) {
          a = a.A[0].target;
          if (a.length != this.A + 1) {
            this.status = 1;
            return;
          }
          this.C.splice(this.A, 0, new dx(this.source));
          this.source = this.G = "";
          for (var b = 0, c = 0; c < a.length && b < this.C.length; b++, c++) this.C[b].target = a.charAt(c);
          this.A = b;
          this.status = 1;
        } else (this.D = a.A), (this.F = a.D), this.config.I && 0 > this.B && (this.B = 0), (this.status = 3);
        vv(this);
      }
  };
  C(hx, uw);
  hx.prototype.Vc = function () {
    var a = this.model.Ja();
    this.B.la(this.K, a[0], this.B.O(p, ee, a[1]), this.B.O(p, ae), a[2]);
  };
  C(ix, Nw);
  A = ix.prototype;
  A.Ef = function () {
    this.model.na(this.model.D.length - 1 - this.model.B);
  };
  A.mc = function () {
    Nw.prototype.mc.call(this);
    this.A.D = !1;
  };
  A.Fc = function () {
    function a() {
      return !h.K;
    }
    function b() {
      return h.K;
    }
    function c() {
      return 1 == f.model.status && !f.model.source;
    }
    function d() {
      return h.D && (0 == f.model.status || 1 == f.model.status);
    }
    function e() {
      return 0 != f.model.status;
    }
    var f = this,
      h = this.model.config;
    return [
      [u, 0, 32, null, d, this.We, this],
      [v, 0, h.C, null, d, this.Ba, this],
      [u, 0, 38, 3, b, this.model.na, this.model, -1],
      [u, 0, 37, 3, a, this.model.na, this.model, -1],
      [u, 0, 40, 3, b, this.model.na, this.model, 1],
      [u, 0, 39, 3, a, this.model.na, this.model, 1],
      [u, 0, 33, 3, null, this.model.oa, this.model, -1],
      [u, 0, 37, 3, b, this.model.oa, this.model, -1],
      [u, 0, 38, 3, a, this.model.oa, this.model, -1],
      [v, 0, h.ga, 3, null, this.model.oa, this.model, -1],
      [u, 0, 34, 3, null, this.model.oa, this.model, 1],
      [u, 0, 39, 3, b, this.model.oa, this.model, 1],
      [u, 0, 40, 3, a, this.model.oa, this.model, 1],
      [v, 0, h.ca, 3, null, this.model.oa, this.model, 1],
      [
        v,
        0,
        /[0-9]/,
        3,
        function () {
          return 0 != h.N;
        },
        this.Pc,
        this
      ],
      [u, 0, 13, null, e, this.Ub, this],
      [u, 0, 8, 1, null, this.wc, this],
      [u, 0, 46, 1, null, this.model.Df, this.model],
      [u, 0, 27, null, e, this.bc, this],
      [u, 0, 32, null, c, this.ib, this],
      [u, 0, 40, null, c, this.ib, this],
      [u, 0, 37, 1, null, this.model.sa, this.model, -1],
      [u, 0, 39, 1, null, this.model.sa, this.model, 1],
      [u, 0, 36, 1, null, this.model.sa, this.model, -999],
      [u, 0, 35, 1, null, this.model.sa, this.model, 999],
      [u, 0, 36, 3, null, this.model.na, this.model, -999],
      [u, 0, 35, 3, null, this.Ef, this]
    ];
  };
  A.Ba = function (a) {
    var b = String.fromCharCode(a.charCode);
    if (" " == b && (0 == this.model.status || !this.model.source)) return !1;
    this.model.Da || (a.charCode = b.toLowerCase().charCodeAt(0));
    return Nw.prototype.Ba.call(this, a);
  };
  A.Hd = function (a) {
    return a.type != v || Ow(this) || a.ctrlKey || a.altKey || a.metaKey
      ? !1
      : gx(this.model, String.fromCharCode(a.charCode)) || Nw.prototype.Hd.call(this, a);
  };
  C(lx, O);
  A = lx.prototype;
  A.vg = function (a) {
    this.B &&
      this.B.code == a.C &&
      (H(this.A),
      (this.A = null),
      (this.config = Rt(this.B.code, this.D)),
      (a = this.config.G ? new Sw() : new ax()),
      0 == this.config.T
        ? (this.A = new Qw(a, this.C, this.B, this.config))
        : 2 == this.config.T
        ? (this.A = new ix(a, this.C, this.B, this.config))
        : 1 == this.config.T && (this.A = new Yw(a, this.C, this.B, this.config)),
      this.A && this.A.ua(this),
      this.config.G && this.A && this.A.mc(),
      this.A && (this.G = this.A.Fc()));
  };
  A.handleEvent = function (a) {
    if (!(this.A && this.G && Dw && this.B)) return !1;
    if (a.type == v) {
      if (this.H) return !0;
      if (void 0 === a.charCode || 0 >= a.charCode) return !1;
      if (M && !a.A.charCode)
        if (13 == a.keyCode) a.charCode = a.keyCode;
        else return !1;
    }
    var b = this.A;
    var c = b.Hd(a);
    if (c) b = !0;
    else if (this.config.state & 1) {
      for (var d = 0, e; (e = this.G[d]); d++)
        if (a.type == e[0]) {
          var f = 0 < a.keyCode && a.keyCode === e[2],
            h = 0 < a.charCode && String.fromCharCode(a.charCode).match(e[2]);
          if (!e[2] || f || h) {
            f = e[1];
            if (typeof f === Tf) {
              var k = 0;
              a.shiftKey && (k += 16);
              a.ctrlKey && (k += 17);
              a.altKey && (k += 18);
              a.metaKey && (k += 91);
              if (f != k && (!h || (0 != k && 16 != k))) continue;
            }
            if (!e[3] || b.model.status == e[3])
              if (!e[4] || e[4]())
                if (((c = e[5].apply(e[6], void 0 != e[7] ? e.slice(7) : [a])), 0 != c)) {
                  c = !0;
                  break;
                }
          }
        }
      c ||
        ((a.ctrlKey || a.altKey || a.metaKey) && 17 != a.keyCode && 18 != a.keyCode && 91 != a.keyCode
          ? (a.type != te && b.model.reset(), (c = !1))
          : (c = b.A
              ? Jw(b.A, a)
              : a.type == v || 9 == a.keyCode || 46 == a.keyCode || 8 == a.keyCode || (33 <= a.keyCode && 40 >= a.keyCode)
              ? Ow(b)
              : !1));
      b = c;
    } else b = !1;
    a.type == u && (this.H = b);
    return b;
  };
  A.getState = function () {
    return this.config.state;
  };
  A.reset = function (a) {
    this.A && Ow(this.A) && (a && this.A.model.ta(-1), this.A.model.reset());
  };
  A.select = function () {
    this.A && Ow(this.A) && this.A.model.ta();
  };
  A.M = function () {
    H(this.A);
    H(this.F);
    O.prototype.M.call(this);
  };
  var jx = kx;
  lx.prototype.A = null;
  lx.prototype.G = null;
  lx.prototype.H = !1;
  G(mx, O);
  mx.prototype.M = function () {
    mx.da.M.call(this);
    this.D && (Bl(this.D), (this.D = null));
    this.A = this.B = null;
  };
  mx.prototype.C = function () {
    var a = hn(this.B || window);
    Zm(a, this.A) || ((this.A = a), this.J("resize"));
  };
  C(nx, Fv);
  nx.prototype.P = function () {
    this.target.style.display.toLowerCase() != x && px(this);
  };
  nx.prototype.M = function () {
    H(this.N);
    Fv.prototype.M.call(this);
  };
  C(rx, U);
  A = rx.prototype;
  A.Z = function () {
    U.prototype.Z.call(this);
    var a = on("A", { class: "ita-kd-icon-button ita-kd-inputtool-icon ita-kd-mid ita-kd-small" }),
      b = on(p, { class: "ita-kd-img ita-kd-icon ita-kd-icon-span " + this.H + " ita-kd-statusbar-icon" });
    a.appendChild(b);
    this.D = a;
  };
  A.Y = function () {
    U.prototype.Y.call(this);
    var a = this.L();
    this.C.listen(a, q, this.Ff);
    this.C.listen(a, w, this.Hg);
    this.C.listen(a, kf, this.Gg);
  };
  A.Hg = function () {
    var a = this.L();
    a.firstChild && (a.firstChild.style.opacity = "0.9");
  };
  A.Gg = function () {
    var a = this.L();
    a.firstChild && (a.firstChild.style.opacity = "");
  };
  A.Ff = function () {
    this.J({ type: "ecd", command: this.F });
  };
  A.M = function () {
    H(this.C);
    U.prototype.M.call(this);
  };
  C(tx, U);
  A = tx.prototype;
  A.ka = function (a) {
    U.prototype.ka.call(this, a);
    No(this.C, !0);
    Xs(this.L(), this.C);
    qx(this.C);
    Kv(this.L());
    px(this.I);
    px(this.H);
  };
  A.Z = function () {
    U.prototype.Z.call(this);
    var a = this.A,
      b = this.L();
    qr(b, [Xd, "ita-kd-statusbar"]);
    var c = oB.length,
      d = Mn(a, c + 2);
    d.cellPadding = "0";
    d.cellSpacing = "0";
    d.border = "0";
    or(d, "ita-kd-statusbar-table");
    var e = d.rows[0].cells,
      f = a.O(p, "ita-kd-icon-span ita-kd-img ita-kd-floating-bar-icon");
    this.N = a.O("A", "ita-kd-icon-button ita-kd-left ita-kd-floating-bar", f);
    a.V(e[0], this.N);
    this.F = a.O("A", "ita-kd-icon-button ita-kd-small ita-kd-mid ita-kd-inputtool-icon", a.O(p));
    yo(this.F, { cursor: "move" });
    S && V(this.F, "ita-kd-ie");
    a.V(e[1], this.F);
    oB.forEach(function (h, k) {
      var l = sx(h);
      l.ka(e[k + 2]);
      this.K.listen(l, "ecd", this.pg);
      this.W[h] = l;
      k < c - 1 && (W(l.L(), "ita-kd-mid"), V(l.L(), "ita-kd-right"));
    }, this);
    a.V(b, d);
  };
  A.Y = function () {
    U.prototype.Y.call(this);
    this.L();
    this.I = new nx(this.C, this.F);
    this.H = new nx(this.C, this.N);
    var a = E(this.B.wb, this.B, "bdc");
    this.K.listen(this.I, rh, a).listen(this.H, rh, a);
  };
  A.pg = function (a) {
    this.P = a.command;
    this.J(a);
  };
  A.M = function () {
    H(this.H);
    H(this.I);
    H(this.K);
    bl(this.W, H);
    U.prototype.M.call(this);
  };
  var oB = [bi, mi, "pun"];
  C(xx, K);
  C(yx, Tu);
  A = yx.prototype;
  A.Je = function (a) {
    this.active && ku(this.D) && (nt(a, "shift", bi), nt(a, "shift+space", mi), nt(a, "ctrl+.", "pun"));
  };
  A.ef = function (a) {
    ot(a, "shift", bi);
    ot(a, "shift+space", mi);
    ot(a, "ctrl+.", "pun");
  };
  A.Bg = function (a) {
    var b = [a.command];
    jk(b, a.var_args);
    this.Fb.apply(this, b);
  };
  A.yg = function (a) {
    var b = 0,
      c = "";
    if (this.A && this.active) {
      switch (a.type) {
        case "opn":
          this.C.J("se");
          if (jq === zb && (a = this.A.D) && a.tagName == g) return;
          b = 1;
          break;
        case "cmts":
          b = 1;
          break;
        case "cmte":
          c = a.data;
          b = 3;
          break;
        case "cls":
          yp.ha().J(Yc), (b = 3);
      }
      b && this.Ie != b && (this.A.jb(b, c), (this.Ie = b));
    }
  };
  A.Gb = function (a) {
    return !!a && J(this.T, a);
  };
  A.Qb = function (a) {
    return !!a && "im" == a.type;
  };
  A.cb = function () {
    return this.I;
  };
  A.register = function (a) {
    Tu.prototype.register.call(this, a);
    this.F.push(a);
    this.Je(a);
  };
  A.unregister = function (a) {
    Tu.prototype.unregister.call(this, a);
    this.B.reset();
    gk(this.F, a);
    this.ef(a);
  };
  A.Hc = function (a) {
    if (!a || !this.active || xs(a)) return !1;
    this.A && (Dw = this.A);
    var b = Rt(this.D ? this.D.code : "", this.B.D);
    return a.type == ys
      ? (X &&
          !b.D &&
          b.G &&
          T(
            a.A.data,
            function (c) {
              if (" " == c || "\n" == c)
                (a.keyCode = a.charCode = c.charCodeAt(0)),
                  (a.type = u),
                  this.B.handleEvent(a),
                  (a.type = v),
                  this.B.handleEvent(a),
                  (a.type = te),
                  this.B.handleEvent(a);
            },
            this
          ),
        !1)
      : X && !b.D && b.G && /^key/.test(a.type)
      ? 32 != a.keyCode && 10 != a.keyCode
        ? this.B.handleEvent(a)
        : !1
      : this.B.handleEvent(a);
  };
  A.kc = function (a, b) {
    Tu.prototype.kc.call(this, a, b);
    this.active && this.Ea && ku(this.D) && Cx(this, b.C);
    return !1;
  };
  A.Fb = function (a, b, c, d) {
    switch (a) {
      case wb:
        (a = d) && void 0 !== a.ss && ($z = a.ss);
        b = this.D;
        if (!b || !this.Qb(b)) {
          this.Ea && vx(this.Ea, null, !1, null);
          break;
        }
        this.active && ((this.B.B = b), Pt(b.code));
        X ||
          (this.Ea || ((this.Ea = new tx()), this.Ea.ka(), this.G.listen(this.Ea, "ecd", this.Bg)),
          a && void 0 != a.tlang ? Ax(this, a) : this.active && ((a = zx(this)), Bx(this, b, a)),
          vx(this.Ea, b, $z && this.active, a),
          T(this.F, this.active && ku(b) ? this.Je : this.ef, this));
        break;
      case mi:
      case bi:
      case "pun":
        Cx(this, a);
        break;
      case "cm":
        this.B.select();
        break;
      case Yc:
      case vb:
        this.B.reset();
        this.D &&
          Rt(this.D.code, this.B.D).B &&
          ((b = this.B), (a = Dx()), b.A && b.A.view && ((b = b.A.view), b.C && ((b.C.style.cssText = km(a)), (b.C.style.display = x))));
        break;
      case "lc":
        Nt(b);
    }
  };
  A.M = function () {
    H(this.G);
    H(this.B);
    H(this.Ea);
    Tu.prototype.M.call(this);
  };
  A.Ea = null;
  A.Ie = 0;
  C(Ex, K);
  var pB = {},
    Jx = ((pB["Content-Type"] = "application/json; charset=UTF-8"), pB);
  C(Fx, O);
  Fx.prototype.P = function (a, b, c) {
    b
      ? c && 1 < c.length
        ? (this.N.set("pre", a),
          (a = c[1][0]),
          (this.A = a[0]),
          (a = fy(a[1].slice(0, this.U), function (d) {
            return Mm(d);
          })),
          0 < a.length && this.J(new Ex(a)))
        : (this.A = "")
      : ((this.A = ""), this.J(new K("m")));
    this.K = !1;
    this.F && (Gx(this, this.F), (this.F = null));
  };
  Fx.prototype.X = function (a, b) {
    a &&
      b[1] &&
      (this.N.set("pre", 1),
      (a = fy(b[1][0][1].slice(0, 10), function (c) {
        return " " + Mm(c);
      })),
      0 < a.length && this.J(new Ex(a, !0)));
  };
  Fx.prototype.abort = function () {
    this.A = "";
    this.H.abort(null);
  };
  Fx.prototype.M = function () {
    H(this.H);
    this.D = [];
    O.prototype.M.call(this);
  };
  C(Mx, K);
  G(Nx, I);
  Nx.prototype.M = function () {
    bl(this.B, this.A.Qa, this.A);
    this.D = this.A = this.B = null;
    Nx.da.M.call(this);
  };
  C(Px, U);
  A = Px.prototype;
  A.Z = function () {
    U.prototype.Z.call(this);
    var a = this.A,
      b = a.O(g);
    V(b, "ita-hwt-candidate");
    this.D = b;
    0 == this.B.lastIndexOf(" ", 0) ? a.la(b, on(p, { style: "color:#bbb;" }, "\u23b5"), Ln(a, this.B)) : a.Uh(b, this.B);
  };
  A.Y = function () {
    U.prototype.Y.call(this);
    this.F.listen(this.L(), q, this.Gf).listen(this.L(), w, this.Hf);
  };
  A.Gf = function () {
    this.C && this.J(new Mx(this.B));
  };
  A.M = function () {
    H(this.F);
    U.prototype.M.call(this);
  };
  A.Hf = function () {
    Ox(this.H, this.B, Ya);
  };
  C(Rx, Y);
  A = Rx.prototype;
  A.Z = function () {
    Y.prototype.Z.call(this);
    this.D = this.A.O(g, "ita-hwt-candidates");
  };
  A.Y = function () {
    rw(this);
  };
  A.wh = function (a) {
    this.F && (Sx(this), Qx(a), (this.C = dk(this.B, a)), (this.H = Wg));
  };
  A.vh = function () {
    this.F && (Sx(this), this.I && 0 < this.B.length && Qx(this.B[0]), (this.C = 0), (this.H = Za));
  };
  A.update = function (a, b) {
    this.N = a;
    this.clear();
    for (a = 0; a < this.N.length; a++) {
      var c = new Px(this.N[a], this.A, this);
      c.ka(this.L());
      fk(this.B, c);
    }
    for (a = 0; a < this.B.length; a++) (c = this.B[a]), this.K.listen(c.L(), w, E(this.wh, this, c)), this.K.listen(c.L(), kf, this.vh);
    b && 0 < this.B.length && Qx(this.B[0]);
    this.C = 0;
    this.H = Za;
    this.I = b;
  };
  A.clear = function () {
    Wj(this.B);
    this.B = [];
    this.K.removeAll();
  };
  A.isEnabled = function () {
    return this.F;
  };
  A.M = function () {
    H(this.K);
    Y.prototype.M.call(this);
  };
  C(Wx, K);
  var cy = {
    "": ",.?!:'\";@".split(""),
    es: ",.\u00bf?\u00a1!:'\"".split(""),
    ja: "\uff0c\u3002\uff1f\uff01\uff1a\u300c\u300d\uff1b".split(""),
    "zh-Hans": "\uff0c\u3002\uff1f\uff01\uff1a\u201c\u201d\uff1b".split(""),
    "zh-Hant": "\uff0c\u3002\uff1f\uff01\uff1a\u300c\u300d\uff1b".split("")
  };
  C(Yx, O);
  A = Yx.prototype;
  A.Zd = function (a) {
    this.A = !0;
    this.J(new Wx("q", Zx(this, a)));
    a.preventDefault();
  };
  A.bd = function (a) {
    this.A && ((this.A = !1), this.J(new Wx("p", Zx(this, a))), a.preventDefault());
  };
  A.ae = function (a) {
    this.A && this.J(new Wx("o", Zx(this, a)));
    a.preventDefault();
  };
  A.reset = function () {
    this.A = !1;
  };
  A.M = function () {
    H(this.B);
  };
  C($x, Y);
  A = $x.prototype;
  A.Z = function () {
    Y.prototype.Z.call(this);
    var a = this.A;
    this.B = a.O("CANVAS", "ita-hwt-canvas");
    this.B.style.width = "425px";
    this.B.width = 425 * this.F;
    this.B.style.height = "194px";
    this.B.height = 194 * this.F;
    a.V(this.L(), this.B);
    this.C = this.B.getContext("2d");
  };
  A.Y = function () {
    Y.prototype.Y.call(this);
    rw(this);
    this.H = new Yx(this.B, this.ca);
    this.R.listen(this.H, "q", this.Kf)
      .listen(this.H, "o", this.Lf)
      .listen(this.H, "p", this.Jf)
      .listen(this.B, w, this.If)
      .listen(this.B, hf, qk);
  };
  A.Kf = function (a) {
    this.I = [];
    0 == this.K.length && (this.ba = a.C.time);
    ay(this, a.C);
    a.preventDefault();
    this.N &&
      (mn(this.ca).cancelAnimationFrame(this.N), (this.N = 0), (this.C.globalAlpha = 1), (this.C.globalCompositeOperation = "source-over"));
    V(this.L(), Ld);
  };
  A.Lf = function (a) {
    ay(this, a.C);
    a.preventDefault();
  };
  A.Jf = function (a) {
    this.K.push(this.I);
    a.preventDefault();
    this.J(new K("i"));
  };
  A.reset = function () {
    this.C.clearRect(0, 0, this.B.width, this.B.height);
    this.K = [];
    this.I = [];
    this.H.reset();
  };
  A.M = function () {
    H(this.R);
    Y.prototype.M.call(this);
  };
  A.setSize = function (a, b) {
    var c = a && a !== this.B.height / this.F,
      d = b && b !== this.B.width / this.F;
    if (c || d)
      this.reset(),
        c && ((this.B.style.height = a + Dg), (this.B.height = a * this.F)),
        d && ((this.B.style.width = b + Dg), (this.B.width = b * this.F));
  };
  A.If = function () {
    Ox(this.ga, "panel", Ya);
  };
  C(dy, Y);
  A = dy.prototype;
  A.Z = function () {
    Y.prototype.Z.call(this);
    var a = this.A,
      b = this.L();
    this.F = new $x(this.Gc(), a, this);
    this.F.ka(b);
    this.B = new Rx(a, this);
    this.B.ka(b);
    this.B.update(this.N, !1);
    this.ga.set("pre", 2);
  };
  A.Y = function () {
    Y.prototype.Y.call(this);
    rw(this);
    this.ia.listen(this.F.H, "q", this.Gd);
  };
  A.Gd = function () {
    Tx(this.B, !1);
  };
  A.reset = function () {
    this.F.reset();
    this.B.update(this.N, !1);
    this.ga.set("pre", 2);
  };
  A.Gc = function () {
    return document;
  };
  A.ab = function () {
    return this.L();
  };
  A.Ld = function (a, b) {
    0 != a.length && (Tx(this.B, !1), this.B.update(a, b), Tx(this.B, !this.F.H.A));
  };
  A.M = function () {
    H(this.ia);
    Y.prototype.M.call(this);
  };
  A.be = function () {};
  C(ey, O);
  A = ey.prototype;
  A.Kd = function (a) {
    this.view = a;
    this.ia
      .listen(this.view, "l", this.Oc)
      .listen(this.view, "a", this.Ke)
      .listen(this.view, "f", this.Nc)
      .listen(this.view, "i", this.yh)
      .listen(this.view, "h", this.Mf)
      .listen(this.view, "b", this.Xg)
      .listen(this.B, "n", this.zh);
  };
  A.kb = function (a) {
    this.A = a;
  };
  A.Xg = function () {
    this.cc();
  };
  A.Oc = function () {
    this.A && (this.view.B.I ? this.cc() : hy(this, " "));
  };
  A.Ke = function () {
    by(this.view.F)
      ? this.G
        ? this.reset()
        : (hy(this, "", 1), this.D ? this.D.start(75) : ((this.D = new Es(this.Ke, 300, this)), this.D.start()))
      : ("" != this.B.A && Kx(this.B), this.reset());
  };
  A.Mf = function () {
    this.D && (this.D.ea(), (this.D = null));
  };
  A.Nc = function (a, b) {
    a = !1;
    this.A && (this.view.B.I ? (this.cc(), (a = !0)) : b || (hy(this, "\n"), (b = this.A.D), zs(b, u, 13), zs(b, v, 13), zs(b, te, 13)));
    return a;
  };
  A.zh = function (a) {
    this.view.Ld(a.C, !0);
    this.J(new K("k"));
    this.G = a.H;
  };
  A.yh = function () {
    gy(this);
  };
  A.cc = function () {
    if (this.A) {
      var a = this.view.B;
      var b = new Ux(a.N[a.C], a.H);
      hy(this, b.text);
      a = this.B;
      var c = b.text;
      b = b.state;
      c && b && "" != a.A && a.D.push({ feedback: c, select_type: b, language: a.G, ink_hash: a.A });
      this.H.push("ci", this.view.B.C);
      this.H.report();
      this.reset();
    }
  };
  A.reset = function () {
    this.G = !1;
    this.B.abort();
    this.view.reset();
    this.J(new K("j"));
  };
  A.dd = function (a) {
    var b = this.B;
    b.C.itc = a;
    b.I = b.B[a];
  };
  A.handleEvent = function (a) {
    var b = !1;
    if (this.view.ma) return !1;
    if (a.type == u) {
      if (8 == a.keyCode || 27 == a.keyCode) by(this.view.F) || ("" != this.B.A && Kx(this.B), this.reset(), (b = !0));
      else if (37 == a.keyCode || 39 == a.keyCode) {
        b = this.view;
        var c = 37 == a.keyCode;
        if (b.B.isEnabled() && b.B.I) {
          a = b.B;
          if (a.F) {
            a.C = c ? Math.max(a.C - 1, 0) : Math.min(a.C + 1, a.B.length - 1);
            b = a.P;
            c = a.B[a.C].L();
            var d = [];
            Dn(c, d, !0);
            c = d.join("");
            c = c.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            c = c.replace(/\u200B/g, "");
            c = c.replace(/ +/g, " ");
            " " != c && (c = c.replace(/^\s*/, ""));
            Ox(b, c, Ya);
            Sx(a);
            Qx(a.B[a.C]);
            a.H = Wg;
          }
          b = !0;
        } else b = !1;
      } else 13 == a.keyCode ? (b = this.Nc(a, !0)) : 32 == a.keyCode && (this.Oc(a), (b = !0));
      return (this.F = b);
    }
    return a.type == te ? (this.F = !1) : a.type == v ? this.F : !1;
  };
  A.cd = function () {
    this.C || ((this.C = !0), this.view.ka());
  };
  A.M = function () {
    H(this.D);
    H(this.ia);
    H(this.view);
    O.prototype.M.call(this);
  };
  C(iy, Y);
  A = iy.prototype;
  A.Z = function () {
    var a = this.A,
      b = a.O(g, "ita-hwt-buttons");
    this.D = b;
    var c = a.O(g, ["ita-hwt-backspace-img", Wd]);
    this.F = a.O(g, [Hd, Nd, Qd, "ita-hwt-backspace"]);
    a.V(this.F, c);
    a.V(b, this.F);
    this.C = a.O(g, [Hd, Nd, Qd, "ita-hwt-space"]);
    a.V(b, this.C);
    this.H = a.O(g, ["ita-hwt-enter-img", "ita-hwt-enter-img-dark", Wd]);
    this.B = a.O(g, [Hd, Nd, Qd, "ita-hwt-enter"]);
    a.V(this.B, this.H);
    a.V(b, this.B);
  };
  A.Y = function () {
    rw(this);
    var a = [w, kf];
    this.K.listen(this.C, q, this.Bh)
      .listen(this.C, a, this.Fd)
      .listen(this.B, q, this.eh)
      .listen(this.B, a, this.Fd)
      .listen(this.F, hf, this.Wg)
      .listen(this.F, a, this.Fd)
      .listen(this.C, w, this.ed)
      .listen(this.B, w, this.ed)
      .listen(this.F, w, this.ed);
  };
  A.Fd = function (a) {
    a.target && (a.type == w ? V(a.target, Pd) : W(a.target, Pd));
  };
  A.Bh = function () {
    this.enable && this.J(new K("l"));
  };
  A.Wg = function () {
    this.enable && this.J(new K("a"));
  };
  A.eh = function () {
    this.enable && this.J(new K("f"));
  };
  A.M = function () {
    H(this.K);
    this.A.Qa(this.C);
    this.A.Qa(this.B);
    this.A.Qa(this.F);
  };
  A.ed = function (a) {
    a.target == this.C
      ? Ox(this.I, "Space", Ya)
      : a.target == this.B
      ? Ox(this.I, "Enter", Ya)
      : a.target == this.F && Ox(this.I, "Delete", Ya);
  };
  C(ky, dy);
  A = ky.prototype;
  A.ka = function (a) {
    dy.prototype.ka.call(this, a);
    No(this.C, !0);
    Xs(this.L(), this.C);
    my(this);
  };
  A.Z = function () {
    dy.prototype.Z.call(this);
    var a = this.A,
      b = this.L(),
      c = Qo(Q(this.C).body);
    qr(b, ["ita-hwt-ime", c ? "ita-hwt-rtl" : "ita-hwt-ltr", "notranslate"]);
    this.ca = a.O(g, "ita-hwt-butterbar", ya);
    b.appendChild(this.ca);
    this.R &&
      (V(b, "ita-hwt-ime-st"),
      (this.K = a.O(g, "ita-kd-img ita-hwt-close")),
      b.appendChild(this.K),
      (this.I = a.O(g, "ita-kd-img ita-hwt-grip")),
      b.appendChild(this.I));
    this.H = new iy(this.A, this);
    this.H.ka(b);
    Kv(b);
  };
  A.Y = function () {
    dy.prototype.Y.call(this);
    this.R && ((this.aa = new nx(this.ab(), this.I)), this.ia.listen(this.aa, rh, this.bh).listen(this.aa, "end", this.ah));
    rw(this);
    var a = [w, kf, ei],
      b = this.L();
    this.ia.listen(b, a, this.uh).listen(b, hf, qk);
    this.R &&
      this.ia
        .listen(this.K, q, this.Zg)
        .listen(this.I, "dblclick", this.sh)
        .listen(this.I, a, E(this.hg, this, this.I, "ita-hwt-grip-hover"));
    Xx(this.ia, this.Gc(), E(this.Nf, this));
    this.ia.listen(this.F.H, "p", this.Of);
    this.ia.listen(this.K, w, this.ce).listen(this.I, w, this.ce);
  };
  A.Gd = function () {
    dy.prototype.Gd.call(this);
    this.H.enable = !1;
  };
  A.Of = function () {
    this.H.enable = !0;
  };
  A.Gc = function () {
    return Q(this.ab());
  };
  A.ab = function () {
    return this.C;
  };
  A.bh = function () {
    V(this.L(), Md);
    px(this.aa);
  };
  A.ah = function () {
    this.ra = Eo(this.ab());
    W(this.L(), Md);
  };
  A.Ld = function (a, b) {
    dy.prototype.Ld.call(this, a, b);
    jy(this.H, !0);
  };
  A.qa = function (a) {
    var b = dy.prototype.qa.call(this, a);
    No(this.C, a);
    a && this.aa && px(this.aa);
    a ? (V(this.L(), Ld), this.J("sp")) : this.J("hp");
    return b;
  };
  A.sh = function () {
    this.aa.setEnabled(this.P);
    if ((this.P = !this.P)) {
      this.ra = Eo(this.ab());
      V(this.L(), Kd);
      var a = Jn(R(this.C)).width;
      this.C.style.width = Co(a, !0);
      this.C.style.left = this.C.style.right = "";
    } else W(this.L(), Kd), Xs(this.L(), this.C), my(this, this.ra);
    a = Mo(this.L()).width;
    130 < a && (this.H.C.style.width = a - 130 + Dg);
    this.F.setSize(void 0, a);
    this.reset();
  };
  A.reset = function () {
    dy.prototype.reset.call(this);
    jy(this.H, !1);
  };
  A.Zg = function () {
    this.qa(!1);
    this.reset();
    this.J(new K("g"));
  };
  A.Nf = function () {
    this.J(new K("h"));
  };
  A.M = function () {
    H(this.aa);
    this.A.Qa(this.ab());
    dy.prototype.M.call(this);
  };
  A.hg = function (a, b, c) {
    c.type == w || c.type == ei ? V(a, b) : W(a, b);
  };
  A.be = function (a) {
    Bn(this.H.C, a);
  };
  A.uh = function (a) {
    this.ma = a.type == kf;
  };
  A.ce = function (a) {
    a.target == this.K ? Ox(this.W, "Close", Ya) : a.target == this.I && Ox(this.W, "Grip", Ya);
  };
  C(oy, ey);
  A = oy.prototype;
  A.Kd = function (a) {
    ey.prototype.Kd.call(this, a);
    this.view = a;
  };
  A.Pg = function (a) {
    27 == a.keyCode && this.A && this.handleEvent(a) && (a.stopPropagation(), a.preventDefault());
  };
  A.kb = function (a) {
    ey.prototype.kb.call(this, a);
    a = this.view;
    a.ba && (W(a.ca, "shown"), (a.ba = !1));
  };
  A.Oc = function (a) {
    ey.prototype.Oc.call(this, a);
    this.A || ny(this.view);
  };
  A.Nc = function (a, b) {
    a = ey.prototype.Nc.call(this, a, b);
    this.A || ny(this.view);
    return a;
  };
  A.cc = function () {
    ey.prototype.cc.call(this);
    if (this.A) {
      var a = this.A.Aa(20),
        b = this.B;
      a && b.I && b.R.send("/predict", Lx(b, { predict: !0, itc: b.I, pre_context: a, max_num_results: 10 }), b.X, b);
    } else ny(this.view);
  };
  A.cd = function () {
    ey.prototype.cd.call(this);
    this.C || Xx(this.ia, this.view.Gc(), E(this.Pg, this));
  };
  A.dd = function (a) {
    ey.prototype.dd.call(this, a);
    this.B.C.app = jq;
  };
  C(qy, Tu);
  A = qy.prototype;
  A.ih = function (a) {
    this.C.J(a);
  };
  A.cb = function () {
    return [u, te, v];
  };
  A.Hc = function (a) {
    this.B.kb(this.A);
    return ws(a) ? !1 : this.B.handleEvent(a);
  };
  A.Gb = function (a) {
    return !!a && J([wb, "cd", vb, "re"], a);
  };
  A.register = function (a) {
    Tu.prototype.register.call(this, a);
    this.B.kb(this.A);
  };
  A.unregister = function (a) {
    Tu.prototype.unregister.call(this, a);
    this.B.kb(this.A);
  };
  A.Qb = function (a) {
    return null != a && "hw" == a.type;
  };
  A.M = function () {
    H(this.B);
    H(this.G);
  };
  A.Fb = function (a, b, c, d) {
    a == wb
      ? ((b = this.D),
        this.B.kb(this.A),
        this.active
          ? (this.B.kb(this.A),
            py(this.B, !0),
            this.B.dd(b.code),
            (c = this.B),
            (d = b.A),
            (a = cy[d]) || (a = cy[""]),
            c.view.N != a && ((c.I = d), (c.view.N = a), c.reset()),
            (c.B.G = "und" == d ? "universal" : d),
            (c = this.B),
            c.view.be(YA[b.code]),
            c.reset())
          : py(this.B, !1))
      : a == vb
      ? this.B.kb(this.A)
      : "re" == a && b && ((a = this.B.view), a.ab() && (b.Fa(a.ab(), c, d), a.isVisible() && px(a.aa)));
  };
  A.kh = function () {
    this.A && this.A.jb(4);
  };
  A.jh = function (a) {
    this.A && this.A.jb(6, a.data);
  };
  A.Yg = function () {
    this.C.J("se");
  };
  A.Ah = function () {
    this.C.J(Yc);
  };
  var lz = {
      de: jl([
        "Y",
        90,
        "Z",
        89,
        "\u00dc",
        192,
        "\u00db",
        189,
        "\u00dd",
        187,
        "\u00ba",
        219,
        "\u00bb",
        221,
        "\u00bf",
        220,
        "\u00cc",
        186,
        "\u00bd",
        191
      ]),
      fr: jl([
        "Q",
        65,
        "A",
        81,
        "Z",
        87,
        "W",
        90,
        "\u00dd",
        219,
        "\u00ba",
        221,
        "M",
        186,
        "\u00c0",
        222,
        "\u00de",
        192,
        "\u00bc",
        77,
        "\u00be",
        188,
        "\u00bf",
        190,
        "\u00df",
        191,
        "\u00db",
        189
      ])
    },
    kz = { 59: 186, 61: 187, 173: 189 },
    hz = { 126: 192, 95: 189, 124: 220, 58: 186, 60: 188, 62: 190, 63: 191 };
  C(ry, K);
  uy.prototype.transform = function (a, b, c) {
    if (!this.A) return null;
    a = 0 < b ? a.slice(0, b) + "\u001d" + a.slice(b) + c : a + c;
    if ((b = this.A[0].exec(a))) {
      for (var d = this.A[1], e = 1; e < b.length && !b[e]; e++);
      b = d[e][0];
      d = d[e][1];
      e = b.exec(a);
      var f = a.slice(e.index),
        h = -1 < f.search("\u001d") ? 1 : 0;
      c = f.length - h - c.length;
      a = a.replace(b, d).slice(e.index);
      a = a.replace("\u001d", "");
      return { back: c, Sa: a };
    }
    return null;
  };
  C(Ay, O);
  Ay.prototype.I = function (a) {
    if ("hangul" == a.id) this.C("ko");
    else {
      var b = new ty(a);
      b.id && (this.B[b.id] = b);
      var c = new wy(a);
      c.id && (this.F[c.id] = c);
      this.A == a.id && (Dy(this, this.A), (this.A = ""));
      this.J(new ry("lld", b.view));
    }
  };
  Ay.prototype.C = function (a) {
    var b = pn(document, Ha);
    a = am(this.H, Object.assign({}, this.K, { file: a + ".js" }));
    Gs(b, a);
    document.body.appendChild(b);
  };
  Ay.prototype.M = function () {
    O.prototype.M.call(this);
    gk(zy, this.G);
  };
  var zy = [];
  Tj("google.elements.keyboard.loadme", function () {
    var a = Array.from(arguments);
    zy.forEach(function (b) {
      b.apply(void 0, a);
    });
  });
  C(Gy, Y);
  A = Gy.prototype;
  A.ka = function (a) {
    Y.prototype.ka.call(this, a);
    this.P && (No(this.N, !0), Xs(this.L(), this.N));
    Jy(this);
  };
  A.Z = function () {
    Y.prototype.Z.call(this);
    var a = this.A,
      b = this.L();
    b.id = "kbd";
    V(b, "notranslate");
    V(b, "vk-box");
    Kv(b);
    S && V(b, "vk-sf-ie");
    this.Ug && V(b, "vk-sf-ff2");
    jq == li && yo(b, "z-index", 2e4);
    var c = Vy(this);
    a.V(b, c);
    this.B.yb && ((this.nb = Xy(this)), a.V(b, this.nb), No(this.nb, this.H));
    var d = this.B.lc;
    c = [14, 14, d ? 14 : 13, d ? 13 : 12, 3];
    d = d
      ? "\u00c01234567890\u00bd\u00bb\b\tQWERTYUIOP\u00db\u00dd\r\u0014ASDFGHJKL\u00ba\u00de\u00dc\r\u0010\u00e2ZXCVBNM\u00bc\u00be\u00bf\u0010\u0111 \u0111"
      : "\u00c01234567890\u00bd\u00bb\b\tQWERTYUIOP\u00db\u00dd\u00dc\u0014ASDFGHJKL\u00ba\u00de\r\u0010ZXCVBNM\u00bc\u00be\u00bf\u0010\u0111 \u0111";
    var e = 0,
      f = this.A.O(g);
    f.dir = f.style.direction = Se;
    for (var h = 0; 5 > h; ++h) {
      var k = this.A.O(g);
      k.style.whiteSpace = "nowrap";
      for (var l = 0; l < c[h]; ++l) {
        var m = d.charCodeAt(e++);
        m = Wy(this, m);
        this.A.V(k, m);
      }
      this.A.V(f, k);
    }
    this.W = f;
    a.V(b, this.W);
    No(this.W, !this.H);
    this.te && ((b.style.position = Ma), (b.style.width = "1px"));
    this.ic && ((b.style.height = "201px"), (b.style.bottom = "10px"), (b.style.zIndex = "20001"));
  };
  A.Y = function () {
    Y.prototype.Y.call(this);
    My || Qy(this);
    rw(this);
    this.aa = new nx(this.P ? this.N : this.L(), this.I);
    this.C.listen(this.aa, rh, function () {
      this.Ic = !0;
      px(this.aa);
    });
    var a = [hf, w, kf],
      b = this.A.A;
    this.P && (b = Q(this.N));
    var c = E(this.Ed, this, null);
    this.C.listen(b, lf, c);
    Ss(b).forEach(function (h) {
      this.C.listen(h, lf, c);
    }, this);
    this.ba && (this.C.listen(this.ma, q, this.Te), this.C.listen(this.ba, q, this.Te));
    this.B.yb &&
      bl(
        this.R,
        function (h, k) {
          this.C.listen(h, q, E(this.Le, this, k));
          this.C.listen(h, a, E(this.Ed, this, h));
        },
        this
      );
    for (var d in this.F) {
      b = this.F[Number(d)];
      d = parseInt(d, 10);
      Mj(b) || (b = [b]);
      for (var e = 0, f = void 0; (f = b[e]); ++e)
        this.C.listen(f, q, E(this.Le, this, d)), this.te || this.C.listen(f, a, E(this.Ed, this, f));
    }
    d = [this.ca, this.ra];
    for (b = 0; b < d.length; b++) d[b] && this.C.listen(d[b], q, this.Gh);
    d.push(this.Lb);
    for (b = 0; b < d.length; b++) d[b] && this.C.listen(d[b], a, this.Hh);
    this.C.listen(this.L(), hf, qk);
  };
  A.bb = function () {
    Y.prototype.bb.call(this);
    this.C.removeAll();
  };
  A.Le = function (a) {
    this.J(new K(Oa, { keyCode: a }));
  };
  A.Ed = function (a, b) {
    var c = !1,
      d = !1;
    a && ((c = pr(a, "vk-sf-a")), (d = pr(a, "vk-sf-s")));
    switch (b.type) {
      case w:
        this.K = a;
        c || d || (Qs(a, [Li, Mi]), V(a.firstChild, Mi));
        break;
      case kf:
        this.K = null;
        c || d || (or(a, Li), W(a.firstChild, Mi));
        break;
      case hf:
        d || (Qs(a, [Li, "vk-sf-a"]), (this.ga = a));
        break;
      case lf:
        this.ga && (or(this.ga, Li), W(this.ga.firstChild, Mi), (this.ga = null)),
          this.K && (Qs(this.K, [Li, Mi]), V(this.K.firstChild, Mi));
    }
  };
  A.Hh = function (a) {
    if (a.type == w || a.type == kf) {
      var b = null,
        c = [this.ca, this.ra, this.Lb];
      J(c, a.target) ? (b = a.target.firstChild) : J(c, a.target.parentElement) && (b = a.target);
      if (b)
        switch (a.type) {
          case w:
            V(b, "vk-sf-th");
            break;
          case kf:
            W(b, "vk-sf-th");
        }
    }
  };
  A.Gh = function (a) {
    switch (a.target) {
      case this.ca:
      case this.ca.firstChild:
        this.J("kc");
        break;
      case this.ra:
      case this.ra.firstChild:
        this.J("kmi");
    }
  };
  A.Te = function (a) {
    this.H = this.W.style.display != x;
    No(this.nb, this.H);
    No(this.W, !this.H);
    sr(this.H ? this.ma : this.ba, "vk-l-i", "vk-l-a");
    sr(this.H ? this.ba : this.ma, "vk-l-a", "vk-l-i");
    a.preventDefault();
  };
  A.qa = function (a) {
    var b = Y.prototype.qa.call(this, a, !0);
    this.P && No(this.N, a);
    a && this.aa && px(this.aa);
    return b;
  };
  A.Jc = function () {
    return this.B.Jc;
  };
  A.M = function () {
    H(this.C);
    H(this.aa);
    Y.prototype.M.call(this);
    this.P && tn(this.N);
  };
  A.enable = function () {
    pk(cl(this.F)).forEach(function (a) {
      a.removeAttribute(ac);
    }, this);
  };
  A.disable = function () {
    pk(cl(this.F)).forEach(function (a) {
      a.setAttribute(ac, "true");
    }, this);
  };
  var Yy = { 8: "vk-sf-c8", 16: "vk-sf-c16", 20: "vk-sf-c20" };
  C($y, O);
  A = $y.prototype;
  A.handleEvent = function (a) {
    if (!this.I || !this.A) return !1;
    var b = !1;
    switch (a.type) {
      case u:
        b = gz(this, a);
        break;
      case v:
        b = iz(this, a);
        break;
      case te:
        a = dz(a.keyCode);
        b = this.B;
        var c = this.G;
        20 == a && Uk && ln
          ? ((b &= -9), (c &= -9))
          : 16 == a
          ? ((b &= -258), (c &= -258))
          : 18 == a
          ? ((b &= -515), (c &= -515))
          : 17 == a
          ? ((b &= -517), (c &= -517))
          : 91 == a && ((b &= -17), (c &= -17));
        this.B != b && ((this.B = b), Oy(this.A, bz(this.B)));
        this.G != c && ((this.G = c), Ly(this.A, bz(this.G)));
        b = this.D[a];
        delete this.D[a];
    }
    return b;
  };
  A.mh = function () {
    cz(this, !1);
  };
  A.lh = function (a) {
    if (this.A) {
      this.F && this.F.oc();
      var b = a.target.keyCode;
      if (b) {
        switch (b) {
          case 16:
            this.B & 1 && ((this.B |= 256), (this.B &= -2));
            this.B ^= 256;
            Oy(this.A, bz(this.B));
            break;
          case 273:
            this.B & 2 && this.B & 4 && ((this.B |= 512), (this.B &= -7));
            this.B ^= 512;
            Oy(this.A, bz(this.B));
            break;
          case 20:
            this.B ^= 8;
            Oy(this.A, bz(this.B));
            break;
          default:
            fz(this, b, a.target.charCode, !0);
        }
        this.C.wb("kcc");
      }
    }
  };
  A.qh = function (a) {
    var b = a.C;
    b.title = this.ga[b.id] || b.title;
    a = this.R;
    var c = this.X,
      d = this.P;
    this.P = this.X = this.R = null;
    var e = !1,
      f = null;
    this.A &&
      ((this.U = this.A.isVisible()),
      (e = this.A.Ic),
      this.A.isVisible() && e && ((f = this.A), (f = Eo(f.P ? f.N : f.L()))),
      this.A.ea(),
      this.C.set(Na, "sw"),
      this.C.report());
    this.C.Jd("lay", b.id);
    this.C.Qc("vkd_" + b.id);
    this.A = new Gy(b, this.W, this.Ad, this.ra);
    this.A.ua(this);
    this.A.ka();
    this.A.Ic = e;
    this.A.qa(this.U);
    f
      ? Jy(this.A, f)
      : a && null != c
      ? ((b = this.A), b.L() && (a.Fa(b.L(), c, d), b.isVisible() && px(b.aa)), (this.A.Ic = !0))
      : Jy(this.A);
    Oy(this.A, bz(this.B));
    Ly(this.A, bz(this.G));
    this.N.listen(this.A, Oa, this.lh).listen(this.A, ["kc", "kmi"], this.mh);
  };
  A.M = function () {
    H(this.A);
    H(this.H);
    H(this.C);
    H(this.N);
    O.prototype.M.call(this);
  };
  var Zy = kx;
  C(mz, Tu);
  A = mz.prototype;
  A.Gb = function (a) {
    return !!a && J([wb, vb, "cd", "sk", "mk", "ll", "re"], a);
  };
  A.Qb = function (a) {
    return !!a && a.type == Ni;
  };
  A.Cg = function (a) {
    ((a && 16 == a.keyCode) || 17 == a.keyCode || 18 == a.keyCode || 20 == a.keyCode) &&
      this.B.handleEvent(a) &&
      (a.stopPropagation(), a.preventDefault());
  };
  A.register = function (a) {
    Tu.prototype.register.call(this, a);
    a && ((this.A = a), (this.B.F = a));
  };
  A.cb = function () {
    return this.F;
  };
  A.Hc = function (a) {
    if (xs(a)) return !1;
    this.B.F = this.A;
    return this.B.handleEvent(a);
  };
  A.Fb = function (a, b, c, d) {
    switch (a) {
      case wb:
        (b = this.D) && b.Pa
          ? ((c = this.B),
            (c.ca = !1),
            (c.ba = !1),
            (c = this.active && nz),
            this.active && d && void 0 != d.mk && (c = !d.mk),
            oz(this, c),
            az(this.B, this.active),
            By(this.B.H, b.Pa),
            this.active && ((d = this.B), (c = b.Pa), (b = YA[b.code]) && (d.ga[c] = b), Dy(d.H, c)),
            (this.B.F = this.A))
          : (az(this.B, !1), cz(this.B, !1));
        break;
      case vb:
        this.B.F = this.A;
        c ? ((d = this.B), d.A && d.A.enable()) : ((d = this.B), d.A && d.A.disable());
        break;
      case "sk":
        oz(this, b);
        break;
      case "mk":
        this.active && (az(this.B, this.active), oz(this, !b));
        break;
      case "re":
        b &&
          ((a = this.B),
          a.A
            ? ((a = a.A), a.L() && (b.Fa(a.L(), c, d), a.isVisible() && px(a.aa)))
            : ((a.R = b), (a.X = c), (a.P = d || new uo(0, 0, 0, 0))));
        break;
      case "ll":
        By(this.B.H, b);
    }
  };
  A.Pf = function (a) {
    this.C.J(a);
  };
  A.oh = function () {
    this.A && this.A.jb(2);
  };
  A.nh = function (a) {
    this.A && this.A.jb(5, a.data);
  };
  A.M = function () {
    H(this.G);
    H(this.B);
    Tu.prototype.M.call(this);
  };
  C(vz, O);
  A = vz.prototype;
  A.handleEvent = function (a, b) {
    (a = this.G[D(a)]) && a.J(b);
    return !!a && b.D;
  };
  A.Ag = function (a, b) {
    var c = !1;
    b instanceof Gp
      ? "tita" == b.C
        ? ((a = this.A.D), (c = this.A.isActive()), a && (c ? this.deactivate(a) : this.activate(a), this.J(new K("tt"))), (c = !0))
        : (c = this.A.kc(a, b))
      : b.type == Bc || b.type == jb
      ? this.za(vb, a, b.type == Bc)
      : (c = this.A.handleEvent(a, b));
    c && (b.preventDefault(), b.stopPropagation());
  };
  A.register = function (a) {
    if (Mj(a)) {
      var b = this.A.cb();
      jk(b, [Bc, jb]);
      mk(b);
      T(
        a,
        function (c) {
          if (!this.G[D(c)]) {
            var d = new mt(c);
            this.G[D(c)] = d;
            this.A.register(d);
            d.C && (!aA || d.F.tagName.toUpperCase() == pa || (S && !Tk(9)) ? d.G.listen(d.C, b, d.Eb, eq) : kt(d.C, b, d.Eb, d));
            this.C &&
              this.C.split(",").forEach(function (e) {
                nt(d, e, "tita");
              }, this);
            this.B.listen(d, hk(b, Xg), E(this.Ag, this, d));
            this.B.listen(d, "kc", this.J);
            this.B.listen(d, "g", this.J);
          }
        },
        this
      );
    }
  };
  A.unregister = function (a) {
    if (Mj(a)) {
      var b = this.A.cb();
      jk(b, [Bc, jb]);
      mk(b);
      T(
        a,
        function (c) {
          var d = this.G[D(c)];
          d &&
            (delete this.G[D(c)],
            this.A.unregister(d),
            d.C && (d.F.tagName.toUpperCase() == pa || (S && !Tk(9)) ? Hl(d.G, d.C, b, d.Eb, eq) : lt(d.C, b, d.Eb, d)),
            this.C &&
              this.C.split(",").forEach(function (e) {
                ot(d, e, "tita");
              }, this),
            d.ea());
        },
        this
      );
    }
  };
  A.activate = function (a, b) {
    if (b || !this.A.isActive() || this.A.D != a)
      this.za(wb, a, !0, b), this.K && this.za("cd", ju(a) ? Lg : Se), this.I && (this.I.setAttribute(sa, !0), wz(this, "suc"));
  };
  A.deactivate = function (a) {
    a = void 0 === a ? null : a;
    if (this.A.isActive() || this.A.D != a) this.za(wb, a, !1), !this.I || jq in this.N || (this.I.setAttribute(sa, !1), wz(this, "rc"));
  };
  A.za = function (a, b) {
    this.A.Sd.apply(this.A, arguments);
  };
  A.Vg = function (a) {
    this.D.A.I = !0;
    this.D.A.H = !0;
    if (!this.D.Wc(a)) {
      var b = Yg + a;
      this.D.Nd(a, a);
      this.B.listen(this.D, b, this.Qg);
    }
  };
  A.Qg = function () {
    var a = this.A.D,
      b = this.A.isActive();
    a && (b ? this.deactivate(a) : this.activate(a), this.J(new K("tt")));
  };
  A.M = function () {
    this.F.T.remove("uf", this.Ue, !1, this);
    H(this.A);
    delete this.A;
    H(this.B);
    delete this.B;
    H(this.D);
    delete this.D;
    O.prototype.M.call(this);
  };
  A.Ue = function () {
    var a = this.A.D,
      b = this.A.isActive();
    a && b && this.za(wb, a, !0);
  };
  A.He = !1;
  var uz = uz || "";
  xz.ha = function () {
    return Il(xz);
  };
  C(yz, U);
  yz.prototype.Z = function () {
    this.B = this.A.O("A", { class: this.I, role: "button" });
    S && V(this.B, "ita-kd-ie");
    this.N && V(this.B, $d);
    this.C = this.A.O(p, { class: this.K + " ita-kd-icon-span" });
    this.A.V(this.B, this.C);
    this.D = this.B;
  };
  yz.prototype.Y = function () {
    Fl(
      this.H,
      this.B,
      w,
      function () {
        this.F && (V(this.C, Vd), V(this.B, Ud));
      },
      this
    );
    Fl(
      this.H,
      this.B,
      kf,
      function () {
        this.F && (W(this.C, Vd), W(this.B, Ud));
      },
      this
    );
  };
  yz.prototype.M = function () {
    U.prototype.M.call(this);
    H(this.H);
  };
  yz.prototype.setEnabled = function (a) {
    this.F = a;
  };
  C(zz, Y);
  zz.prototype.Z = function () {
    Y.prototype.Z.call(this);
    if (0 != this.B.length) {
      if (1 == this.B.length) V(this.B[0].B, "ita-kd-single");
      else {
        V(this.B[0].B, "ita-kd-left");
        V(this.B[this.B.length - 1].B, "ita-kd-right");
        for (var a = 1; a < this.B.length - 1; a++) V(this.B[a].B, "ita-kd-mid");
      }
      for (a = 0; a < this.B.length; a++) this.A.V(this.L(), this.B[a].B);
      rw(this);
    }
  };
  zz.prototype.M = function () {
    Wj(this.B);
  };
  C(Bz, I);
  Bz.prototype.M = function () {
    I.prototype.M.call(this);
    H(this.A);
  };
  C(Cz, K);
  C(Dz, K);
  Dz.prototype.isVisible = function () {
    return this.C;
  };
  C(Ez, K);
  C(Fz, Y);
  A = Fz.prototype;
  A.Z = function () {
    Y.prototype.Z.call(this);
    var a = this.A,
      b = this.B.B,
      c = a.O("UL", { class: "ita-kd-dropdown-menu" + (8 >= Kk(ua) ? " ita-kd-ie" : "") });
    Kv(c);
    if (X) {
      var d = a.O(g, "ita-kd-dropdown-menu-mobile");
      d.appendChild(c);
      this.D = d;
    } else this.D = c;
    var e = this.B.A ? this.B.A.code : "",
      f = this.B.D;
    b.forEach(function (h) {
      var k = h.code,
        l = this.A.O("LI", { class: Yd, style: sh });
      l.setAttribute(Jh, "-1");
      fk(this.P, { Bc: l, className: Zd });
      var m = this.A.O(p, "ita-kd-checkbox ita-kd-menuitem-span"),
        n = this.A.O(p, { class: "ita-kd-menuitem-inputtool-icon ita-kd-menuitem-span " + kr(k) }),
        y = this.A.O(p, { class: "ita-kd-menuitem-inputtool-name" }, YA[k]);
      ju(fu(k)) ? (y.dir = Lg) : (y.dir = Se);
      this.A.la(l, m, n, y);
      (m = hr.body) && Qo(m) && V(l, "ita-kd-rtl");
      this.F[k] = { Jb: l, icon: n, name: y };
      f && e == h.code && V(l, $d);
      a.V(c, l);
    }, this);
    this.N = Gz(this, "Show Keyboard", !0);
    this.K = Gz(this, "Hide Keyboard", !0);
    this.ba && (this.H = Gz(this, "Input Tools Settings"));
    this.R = this.A.O(g, { class: "ita-kd-separator" });
    a.la(c, this.R, this.N, this.K, this.H);
    No(this.R, !!((f && this.B.A.type == Ni) || this.H));
  };
  A.bf = function (a) {
    var b = this.B.A != a || !this.B.D;
    this.I.J(new Cz(a, b));
    this.hide();
    if (b) {
      b = (a = this.A.A) || document;
      if (b.getElementsByClassName) a = b.getElementsByClassName(Td)[0];
      else {
        b = document;
        var c = a || b;
        a = c.querySelectorAll && c.querySelector ? c.querySelector(".ita-kd-icon-button") : dn(b, "*", Td, a)[0] || null;
      }
      (a || null).focus();
    }
  };
  A.Y = function () {
    Y.prototype.Y.call(this);
    this.C.listen(this.I, Db, this.Tf);
    var a = this.B.B,
      b = un(Iz(this));
    Array.prototype.forEach.call(
      b,
      function (c, d) {
        d < a.length && this.C.listen(c, q, E(this.bf, this, a[d].code));
      },
      this
    );
    this.P.forEach(function (c) {
      this.C.listen(c.Bc, w, E(this.Fg, this, c.Bc));
      this.C.listen(c.Bc, kf, this.jd);
    }, this);
    this.H && this.C.listen(this.H, q, this.Ae);
    this.C.listen(this.N, q, E(this.nc, this, !0))
      .listen(this.K, q, E(this.nc, this, !1))
      .listen(this.I, "kmi", this.nc)
      .listen(Iz(this), w, this.Sf)
      .listen(Iz(this), kf, function () {
        this.Ua = !1;
      })
      .listen(Iz(this), u, this.Rf);
    M &&
      this.C.listen(Iz(this), v, function (c) {
        c.stopPropagation();
        c.preventDefault();
      });
    this.W && this.C.listen(this.A.A, q, this.Qf);
    this.C.listen(this.I, "ita_l", this.lg);
  };
  A.Sf = function () {
    this.Ua = !0;
    Iz(this).focus();
  };
  A.Fg = function (a) {
    this.jd();
    V(a, Zd);
  };
  A.jd = function () {
    for (var a = un(Iz(this)), b = 0; b < a.length; b++) W(a[b], Zd);
  };
  A.Rf = function (a) {
    var b = un(Iz(this));
    if (b && 0 != b.length) {
      var c = Jz(this),
        d = this.B.B,
        e = c ? Array.prototype.indexOf.call(b, c) : -1;
      c = !1;
      if (13 == a.keyCode || 32 == a.keyCode)
        d[e] ? this.bf(d[e].code, null) : b[e] == this.N ? this.nc(!0) : b[e] == this.K ? this.nc(!1) : b[e] == this.H && this.Ae(null),
          (c = !0);
      d = function (f) {
        var h = b.length;
        f += h;
        for (var k = (e + f) % h; k != e; k = (k + f) % h) {
          var l = b[k];
          if ("LI" == l.tagName.toUpperCase() && l.style.display != x) return l;
        }
        return b[e];
      };
      40 == a.keyCode && (Hz(this, d(1)), (c = !0));
      38 == a.keyCode && (Hz(this, d(-1)), (c = !0));
      9 == a.keyCode && this.hide();
      c && (a.stopPropagation(), a.preventDefault());
    }
  };
  A.Qf = function () {
    this.Ua || this.hide();
  };
  A.Ae = function () {
    this.I.J(new K("slc"));
    this.hide();
  };
  A.Tf = function (a) {
    var b = a.currInputToolActive;
    a = a.currInputToolName;
    a || (a = this.B.A.code);
    this.B.B.forEach(function (c) {
      this.F[c.code] && W(this.F[c.code].Jb, $d);
    }, this);
    b && this.F[a] && V(this.F[a].Jb, $d);
    b = !X && fu(a).type == Ni && b;
    X || (No(this.N, b && !nz), No(this.K, b && nz));
    No(this.R, b || !!this.H);
  };
  A.M = function () {
    Y.prototype.M.call(this);
    H(this.C);
    H(this.ca);
  };
  A.show = function () {
    this.qa(!0);
    this.J(new Dz(!0));
  };
  A.hide = function () {
    this.qa(!1);
    this.J(new Dz(!1));
  };
  A.lg = function (a) {
    var b = a.l10n,
      c = Qo(Iz(this));
    bl(
      this.F,
      function (d, e) {
        var f;
        if (e)
          if ((f = fu(e))) {
            e = null;
            var h = qB[f.code];
            h && (e = c ? h[1] + " \u2190 " + h[0] : h[0] + " \u2192 " + h[1]);
            e || ((e = rB[f.code]) && (e = Yz(e)));
            e || "hw" != f.type || (e = (e = Yz("HANDWRITE")) ? Xz(b, f.code) + " - " + e : Xz(b, f.code));
            e || ((e = Xz(b, f.code)), (h = sB[f.code]) && (e += " - " + h), (h = tB[f.code]), (f = Yz(h)) && (e += " - " + f));
            f = e;
          } else f = Yz(e);
        else f = null;
        f && (Bn(d.name, f), fn(d.name, { dir: Se }));
      },
      this
    );
  };
  A.nc = function (a) {
    var b = !1;
    "boolean" === typeof a && ((b = a), this.I.J(new Ez("mk", !b)));
    No(this.N, !X && !b);
    No(this.K, !X && b);
    this.hide();
  };
  G(Kz, mp);
  Kz.prototype.Fa = function (a, b, c) {
    var d = dp(this.A, this.B, a, b, null, c, 10, void 0, this.D);
    if (d & 496) {
      var e = Lz(d, this.B);
      b = Lz(d, b);
      d = dp(this.A, e, a, b, null, c, 10, void 0, this.D);
      d & 496 && ((e = Lz(d, e)), (b = Lz(d, b)), dp(this.A, e, a, b, null, c, this.C, void 0, this.D));
    }
  };
  C(Mz, wp);
  A = Mz.prototype;
  A.Z = function () {
    wp.prototype.Z.call(this);
    if (0 != this.C.B.length) {
      var a = this.A,
        b = this.L();
      a.L("itamenu") || (b.id = "itamenu");
      this.P = new zz();
      this.ma = a.O(p, { class: Xd });
      a.V(b, this.ma);
      if (this.ra) {
        var c = Az(this.P, "ita-kd-icon-button ita-kd-floating-bar", "ita-kd-img ita-kd-floating-bar-icon");
        this.ba = c.B;
        b.style.zIndex = "99";
      }
      b = this.C.D;
      this.C.A &&
        ((c = kr(this.C.A.code)),
        (c = Az(this.P, "ita-kd-icon-button ita-kd-inputtool-icon ita-kd-small " + (X ? "ita-kd-mobile" : ""), c + " ita-kd-icon", b)),
        (this.F = c.B),
        (this.ga = c.C),
        this.F.setAttribute(Jh, "0"));
      if (1 < this.C.B.length || (1 == this.C.B.length && (this.C.B[0].type == Ni || this.R)))
        (c = Az(this.P, "ita-kd-icon-button ita-kd-dropdown " + (X ? "ita-kd-mobile" : ""), "ita-kd-img ita-kd-arrow")),
          (this.I = c.B),
          this.I.setAttribute(Jh, "0"),
          this.I.setAttribute("aria-haspopup", "true"),
          this.I.setAttribute(Wa, "Show the Input Tools menu");
      this.P.ka(this.ma);
      this.B = new Fz(this.C, this.K, this.R, a);
      this.B.W = !1;
      this.B.ka();
      this.B.hide();
      Xj(this, this.B);
    }
  };
  A.Ve = function () {
    qx(this.L());
  };
  A.td = function () {
    this.K.J(new Cz(this.C.A.code, !this.C.D));
    this.B.hide();
  };
  A.Y = function () {
    wp.prototype.Y.call(this);
    this.H.listen(this.K, Db, this.Vf).listen(this.K, "itlu", this.Ne);
    this.F &&
      this.H.listen(this.F, q, this.td)
        .listen(this.F, "dblclick", this.td)
        .listen(this.F, u, E(this.ee, this, !1));
    this.I &&
      this.H.listen(this.I, q, this.we)
        .listen(this.B, "vc", this.xg)
        .listen(this.I, u, E(this.ee, this, !0));
    this.ba &&
      ((this.aa = new zv(this.L(), this.ba)),
      this.H.listen(this.aa, "drag", function () {
        Nz(this);
        this.Ze = !1;
      }));
    this.B && this.H.listen(this.A.A, hf, this.Uf, eq);
  };
  A.ee = function (a, b) {
    if (13 == b.keyCode || 32 == b.keyCode || (a && 40 == b.keyCode))
      b.target == this.I ? this.we() : b.target == this.F && this.td(null), b.stopPropagation(), b.preventDefault();
  };
  A.we = function () {
    Nz(this);
    var a = this.B;
    a.isVisible() ? a.hide() : a.show();
    a = this.B;
    var b = un(Iz(a));
    Iz(a).focus();
    0 < b.length && (b[0].focus(), Hz(a, b[0]));
  };
  A.uc = function (a, b, c) {
    wp.prototype.uc.call(this, a, b, c);
    Nz(this);
  };
  A.xg = function (a) {
    a.isVisible() ? V(this.I, $d) : W(this.I, $d);
  };
  A.Uf = function () {
    this.Ua || this.B.Ua || this.B.hide();
  };
  A.Vf = function (a) {
    var b = a.currInputToolActive;
    a = a.currInputToolName;
    a || (a = this.C.A.code);
    this.C.B.forEach(function (c) {
      W(this.ga, jr(c.code));
    }, this);
    V(this.ga, jr(a));
    b ? V(this.F, $d) : W(this.F, $d);
    switch (this.C.A.type) {
      case "im":
        this.F.setAttribute(Wa, b ? "Turn off Input Method" : "Turn on Input Method");
        break;
      case Ni:
        this.F.setAttribute(Wa, b ? "Turn off Virtual Keyboard" : "Turn on Virtual Keyboard");
        break;
      case "hw":
        this.F.setAttribute(Wa, b ? "Turn off Handwriting" : "Turn on Handwriting");
    }
    this.F.setAttribute("aria-pressed", String(b));
  };
  A.Ne = function () {
    this.H.removeAll();
    var a = this.L();
    H(this.B);
    if (0 < this.C.B.length) {
      if (((this.D = null), xp(this, this.R, this.Jb), !this.Jb)) {
        this.L().style.position = Ma;
        try {
          this.uc(a, [0, 0]);
        } catch (b) {}
      }
    } else this.H.listen(this.K, "itlu", E(this.Ne, this));
    this.A.Qa(a);
  };
  A.M = function () {
    wp.prototype.M.call(this);
    H(this.aa);
    H(this.P);
  };
  A.Fe = function () {
    this.L().style.display = x;
    this.B && this.B.hide();
  };
  C(Oz, K);
  var Pz = { translate: 11, kix: 12, trix: 13, punch: 14, gmail: 5 };
  C(Wz, I);
  A = Wz.prototype;
  A.Oe = function () {
    this.A |= 1;
    window.LanguageDisplays &&
      window.LanguageDisplays.localNames &&
      T(
        window.LanguageDisplays.localNames,
        function (a) {
          a = a.split(":");
          this.D[a[1]] = a[0];
        },
        this
      );
    this.notify();
  };
  A.Qe = function () {
    this.A |= 2;
    this.notify();
  };
  A.ph = function () {
    var a = Jt(am(Uz, { langCode: r })),
      b = E(this.Oe, this);
    yt(a, b, null);
  };
  A.rh = function () {
    var a = Jt(am(Vz, { langCode: r })),
      b = E(this.Qe, this);
    yt(a, b, null);
  };
  A.notify = function () {
    3 == (this.A & 3) && Ap(yp.ha(), new Oz(this));
  };
  var Uz = Vl("https://ssl.gstatic.com/inputtools/js/ln/17/%{langCode}.js"),
    Vz = Vl("https://ssl.gstatic.com/inputtools/js/msgs/10/%{langCode}.js");
  Wz.prototype.A = 0;
  var qB = {
      "am-t-i0-und": ["salam", "\u1230\u120b\u121d"],
      "ar-t-i0-und": ["marhaban", "\u0645\u0631\u062d\u0628\u0627"],
      "be-t-i0-und": ["pryvitannie", "\u043f\u0440\u044b\u0432\u0456\u0442\u0430\u043d\u043d\u0435"],
      "bg-t-i0-und": ["zdrasti", "\u0437\u0434\u0440\u0430\u0441\u0442\u0438"],
      "bn-t-i0-und": ["namaskar", "\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09b0"],
      "el-t-i0-und": ["geia", "\u03b3\u03b5\u03b9\u03b1"],
      "fa-t-i0-und": ["salam", "\u0633\u0644\u0627\u0645"],
      "gu-t-i0-und": [Ff, "\u0aa8\u0aae\u0ab8\u0acd\u0aa4\u0ac7"],
      "he-t-i0-und": ["shalom", "\u05e9\u05dc\u05d5\u05dd"],
      "hi-t-i0-und": [Ff, "\u0928\u092e\u0938\u094d\u0924\u0947"],
      "ja-t-ja-hira-i0-und": ["konnichiha", "\u3053\u3093\u306b\u3061\u306f"],
      "kn-t-i0-und": ["namaskaram", "\u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0"],
      "ml-t-i0-und": ["namaskar", "\u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30\u0d02"],
      "mr-t-i0-und": [Ff, "\u0928\u092e\u0938\u094d\u0915\u093e\u0930"],
      "ne-t-i0-und": [Ff, "\u0928\u092e\u0938\u094d\u0924\u0947"],
      "or-t-i0-und": ["mausam", "\u0b28\u0b2e\u0b38\u0b4d\u0b24\u0b47"],
      "pa-t-i0-und": ["mausam", "\u0a2e\u0a4c\u0a38\u0a2e"],
      "ru-t-i0-und": ["privet", "\u043f\u0440\u0438\u0432\u0435\u0442"],
      "sa-t-i0-und": [Ff, "\u0928\u092e\u0938\u094d\u0924\u0947"],
      "sr-t-i0-und": ["zdravo", "\u0437\u0434\u0440\u0430\u0432\u043e"],
      "si-t-i0-und": ["halo", "\u0dc4\u0dbd\u0ddd"],
      "ta-t-i0-und": ["vanakkam", "\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd"],
      "ti-t-i0-und": ["selam", "\u1230\u120b\u121d"],
      "te-t-i0-und": ["emandi", "\u0c0f\u0c2e\u0c02\u0c21\u0c40"],
      "uk-t-i0-und": ["pryvit", "\u043f\u0440\u0438\u0432\u0456\u0442"],
      "ur-t-i0-und": ["salam", "\u0633\u0644\u0627\u0645"],
      "vi-t-i0-und": ["chao", "ch\u00e0o"]
    },
    sB = {
      "bn-t-k0-und": ta,
      "cs-t-k0-qwertz": "QWERTZ",
      "en-t-k0-dvorak": "DVORAK",
      "gu-t-k0-und": ta,
      "hi-t-k0-und": ta,
      "ka-t-k0-legacy": da,
      "km-t-k0-und": "NiDA",
      "kn-t-k0-und": ta,
      "ml-t-k0-und": ta,
      "ne-t-k0-und": ta,
      "or-t-k0-und": ta,
      "pa-guru-t-k0-und": ta,
      "ru-t-k0-qwerty": "QWERTY",
      "sk-t-k0-qwerty": "QWERTY",
      "ta-t-k0-ta99": "Tamil99",
      "ta-t-k0-und": ta,
      "ta-t-k0-typewriter": "TYPEWRITER",
      "ta-t-k0-itrans": "ITRANS",
      "th-t-k0-pattajoti": "PATTAJOTI",
      "th-t-k0-tis": "TIS",
      "te-t-k0-und": ta,
      "tr-t-k0-und": "Q",
      "tr-t-k0-legacy": "F",
      "uz-cyrl-t-k0-legacy": da,
      "vi-t-k0-legacy": "Telex",
      "vi-t-k0-viqr": "VIQR",
      "vi-t-k0-und": "TCVN 6064",
      "vi-t-k0-vni": "VNI"
    },
    tB = {
      "de-ch-t-k0-und": "SWISS_GERMAN",
      "hy-hyr-t-k0-und": "EASTERN",
      "hy-hyt-t-k0-und": "WESTERN",
      "ka-t-k0-und": "LATIN",
      "pt-br-t-k0-und": "BRAZILIAN",
      "pt-pt-t-k0-und": "EUROPEAN",
      "ro-t-k0-legacy": "PRIMARY",
      "ro-t-k0-extended": "SECONDARY",
      "sr-cyrl-t-k0-und": "CYRILLIC",
      "sr-latn-t-k0-und": "LATIN",
      "uz-latn-t-k0-und": "LATIN",
      "uz-cyrl-t-k0-und": "CYRILLIC",
      "zh-t-i0-pinyin": "PINYIN",
      "zh-hant-t-i0-pinyin": "PINYIN",
      "bg-t-k0-qwerty": Ca,
      "hi-t-k0-qwerty": Ca,
      "chr-t-und-latn-k0-und": Ca
    },
    rB = {
      "en-us-t-k0-intl": "US_I18N",
      "yue-hant-t-i0-und": "CANTONESE",
      "zh-hant-t-i0-cangjie-1982": "CANGJIE",
      "zh-t-i0-wubi-1986": "WUBI",
      "zh-hant-t-i0-und": "ZHUYIN"
    },
    Tz = [
      "am",
      "ar",
      "bg",
      "bn",
      "ca",
      "cs",
      "da",
      "de",
      "de-AT",
      "de-CH",
      "el",
      "en-GB",
      "en-IE",
      "en-IN",
      "en-SG",
      "en-ZA",
      "es",
      "es-419",
      "es-AR",
      "es-BO",
      "es-CL",
      "es-CO",
      "es-CR",
      "es-DO",
      "es-EC",
      "es-GT",
      "es-HN",
      "es-MX",
      "es-NI",
      "es-PA",
      "es-PE",
      "es-PR",
      "es-PY",
      "es-SV",
      "es-US",
      "es-UY",
      "es-VE",
      "fa",
      "fi",
      "fil",
      "fr",
      "fr-CH",
      "gsw",
      "gu",
      Yc,
      "hi",
      "hr",
      "hu",
      "id",
      "in",
      "it",
      "iw",
      "ja",
      "kn",
      "ko",
      "ln",
      "lt",
      "lv",
      "ml",
      "mo",
      "mr",
      "nb",
      "ne",
      "nl",
      "no",
      "or",
      "pa",
      "pl",
      pg,
      qg,
      "pt",
      "ro",
      "ru",
      "si",
      "sk",
      "sl",
      "sr",
      "sv",
      "th",
      "ti",
      "tr",
      "uk",
      "ur",
      "vi",
      Wi,
      Yi,
      "zh-Hant",
      Xi,
      Zi,
      "zh"
    ];
  C(Zz, I);
  Zz.ha = function () {
    return Il(Zz);
  };
  C(cA, I);
  A = cA.prototype;
  A.fd = function (a) {
    var b = this.A,
      c = [];
    jk(c, a);
    a = b.B.length;
    c.forEach(function (d) {
      (d = fu(d)) &&
        (!X || ("hw" != d.type && "vo" != d.type)) &&
        (d.type == Ni ? this.B.za("ll", d.Pa) : "im" == d.type && this.B.za("lc", d.code), fk(b.B, d));
    }, this);
    !b.A && 0 < b.B.length && (b.A = b.B[0]);
    b.B.length > a && (bA(this), gA(this));
  };
  A.Mh = function (a) {
    var b = this.A,
      c = [];
    jk(c, a);
    a = b.B.length;
    c.forEach(function (d) {
      d = fu(d);
      d == b.A && ((b.A = null), (b.D = !1));
      gk(b.B, d);
    }, this);
    !b.A && 0 < b.B.length && (b.A = b.B[0]);
    b.B.length < a && (bA(this), gA(this));
  };
  A.Rh = function (a) {
    var b = this.A,
      c = [];
    jk(c, a);
    var d = [];
    c.forEach(function (e) {
      (e = fu(e)) && (!X || ("hw" != e.type && "vo" != e.type)) && d.push(e);
    }, this);
    ok(d, b.B) ||
      (ek(b.B),
      d.forEach(function (e) {
        e &&
          (e.type == Ni ? this.B.za("ll", e.Pa) : "im" == e.type && this.B.za("lc", e.code),
          fk(b.B, e),
          b.A && b.A.code == e.code && (b.A = e));
      }, this),
      (b.A && J(b.B, b.A)) || ((b.A = 0 < b.B.length ? b.B[0] : null), (b.D = !1)),
      bA(this),
      gA(this));
  };
  A.gd = function (a) {
    var b = [];
    jk(b, a);
    b.forEach(function (c) {
      (c = cn(document, c)) && fk(this.C, c);
    }, this);
    bA(this);
    hA(this);
  };
  A.Id = function (a) {
    var b = [];
    jk(b, a);
    this.G = [];
    b.forEach(function (c) {
      if ((c = cn(document, c))) gk(this.C, c), fk(this.G, c);
    }, this);
    bA(this);
    hA(this);
    this.G = [];
  };
  A.Sh = function (a) {
    var b = [];
    jk(b, a);
    this.G = this.C;
    this.C = [];
    b.forEach(function (c) {
      if ((c = cn(document, c))) fk(this.C, c), gk(this.G, c);
    }, this);
    bA(this);
    hA(this);
    this.G = [];
  };
  A.gg = function (a, b) {
    b = void 0 === b ? !0 : b;
    if ((a = fu(a))) J(this.A.B, a) || this.fd(a.code), iA(this, b, a);
  };
  A.mg = function () {
    iA(this, !0, this.A.A);
  };
  A.Ac = function () {
    iA(this, !1, this.A.A);
  };
  A.Yh = function () {
    iA(this, !this.A.D, this.A.A);
  };
  A.Wf = function (a, b, c, d) {
    if (!el(VA, a)) throw Error("Exception in addEventListener: Invalid event type:" + a);
    "boolean" === typeof c
      ? El(this.F, this.D, a, b, c, d || this)
      : d
      ? El(this.F, this.D, a, b, !1, d || this)
      : El(this.F, this.D, a, b, !1, c || this);
  };
  A.removeEventListener = function (a, b, c) {
    if (!el(VA, a)) throw Error("Exception in removeEventListener: Invalid event type:" + a);
    Hl(this.F, this.D, a, b, !1, c);
  };
  A.Ch = function (a) {
    iA(this, a.C, fu(a.H));
  };
  A.Dh = function (a) {
    a = a.L();
    this.A.C = a;
    J(this.C, a) || (this.C.push(a), this.B.register([a]));
    iA(this, this.A.D, this.A.A);
  };
  A.Eh = function (a) {
    a = a.C;
    var b = this.A.A,
      c = this.A.D;
    b && b.type == Ni && c && this.B.za("sk", a);
  };
  A.Vh = function (a) {
    var b = "kd",
      c = !1,
      d,
      e,
      f = !1;
    a &&
      (a.ui && (b = a.ui),
      a.showSetting && (c = a.showSetting),
      a.container && (d = a.container),
      a.inputElement && (e = a.inputElement),
      (f = !!a.shadowContainer));
    if (f && d) {
      f = d;
      var h = this.B.H.O("STYLE"),
        k = xm([Ns(uz), gr()].map(er).join(""));
      Oo(h, k);
      f.appendChild(h);
    }
    f = null;
    "kd" == b && (f = new Mz(this.A, this.D));
    f && ((f.bindElement = f.ne), (f.reposition = f.uc), (f.show = f.show), (f.hide = f.hide), (f.toggle = f.mf));
    b = f;
    if (!b) return null;
    b.ca = a && a.alignRight;
    xp(b, c, d);
    Kv(cn(document, d));
    b.ne(e);
    return b;
  };
  A.Ye = function (a, b, c) {
    if (a && b && 2 == b.length) {
      a = vp.L(a);
      var d = null;
      null != c &&
        (typeof c === Tf
          ? (d = new uo(c, c, c, c))
          : Mj(c) && 4 == c.length && (d = new uo(Number(c[0]), Number(c[1]), Number(c[2]), Number(c[3]))));
      this.B.za("re", new mp(a, b[0]), b[1], d);
    }
  };
  A.Xf = function () {
    return { name: this.A.A.code, state: this.A.D };
  };
  A.th = function () {
    this.B.za("mk", !0);
  };
  A.Me = function () {
    var a = this.A.D;
    this.A.D = !1;
    if (a) {
      if (this.A.A) {
        var b = this.A.A.code;
        this.B.deactivate(this.A.A);
      } else (b = null), this.B.deactivate();
      fA(this, b, a);
    }
  };
  A.fe = function (a) {
    jq = a;
    if (a == li || "richlab" == a || "gtta" == a) rt("49160274"), (As = !1);
  };
  A.ge = function (a) {
    this.B.K = a;
  };
  A.hh = function (a) {
    this.A.C = a.target;
  };
  A.M = function () {
    I.prototype.M.call(this);
    this.H && (yp.ha(), gk(zp, this.D), H(this.D));
    delete this.C;
    H(this.B);
    delete this.B;
    H(this.F);
    delete this.F;
    delete this.G;
  };
  A.Ih = function () {
    var a = this.A.D,
      b = this.A.A ? this.A.A.code : null;
    b && ((this.A.D = !a), fA(this, b, a));
  };
  A.og = function (a) {
    return Sz(a);
  };
  A.Yf = function (a) {
    var b = Zz.ha(),
      c = b.A[a];
    c || ((c = new Wz(a)), (b.A[a] = c));
    c.notify();
  };
  A.gh = function (a) {
    var b = [a.H];
    a.C && jk(b, a.C);
    this.B.za.apply(this.B, b);
  };
  A.Th = function (a) {
    My = a;
  };
  Tj("google.elements.inputtools.InputToolsController", cA);
  var Z = cA.prototype;
  Z.addInputTools = Z.fd;
  Z.removeInputTools = Z.Mh;
  Z.setInputTools = Z.Rh;
  Z.activateInputTool = Z.gg;
  Z.showControl = Z.Vh;
  Z.addPageElements = Z.gd;
  Z.removePageElements = Z.Id;
  Z.setPageElements = Z.Sh;
  Z.setAutoDirection = Z.ge;
  Z.getCurrentInputTool = Z.Xf;
  Z.enableCurrentInputTool = Z.mg;
  Z.disableCurrentInputTool = Z.Ac;
  Z.toggleCurrentInputTool = Z.Yh;
  Z.addEventListener = Z.Wf;
  Z.removeEventListener = Z.removeEventListener;
  Z.repositionKeyboard = Z.Ye;
  Z.repositionElement = Z.Ye;
  Z.getInputToolsForLanguage = Z.og;
  Z.dispose = Z.ea;
  Z.setApplicationName = Z.fe;
  Z.localize = Z.Yf;
  Z.setSimpleEasyAccents = Z.Th;
  Tj("google.elements.inputtools.InputToolNativeCaption", YA);
  Tj("google.elements.inputtools.EventType", {
    INPUT_TOOL_ENABLED: Db,
    INPUT_TOOL_LIST_UPDATED: "itlu",
    PAGE_ELEMENT_LIST_UPDATED: "pelu"
  });
  Tj("google.elements.inputtools.PositionType", {
    TOP_LEFT: [0, 1],
    TOP_RIGHT: [4, 5],
    UPPER_LEFT: [0, 5],
    UPPER_RIGHT: [4, 1],
    BOTTOM_LEFT: [1, 0],
    BOTTOM_RIGHT: [5, 4],
    LOWER_LEFT: [1, 4],
    LOWER_RIGHT: [5, 0],
    INNER_BOTTOM_END: [13, 13],
    INNER_BOTTOM_START: [9, 9],
    INNER_TOP_END: [12, 12],
    INNER_TOP_START: [8, 8],
    TOP_START: [8, 9],
    TOP_END: [12, 13],
    UPPER_START: [8, 13],
    UPPER_END: [12, 9],
    BOTTOM_START: [9, 8],
    BOTTOM_END: [13, 12],
    LOWER_START: [9, 12],
    LOWER_END: [13, 8]
  });
  Tj("google.elements.inputtools.loadConfigById", rt);
  Tj("google.elements.inputtools.UiType", { CLASSIC: "kd" });
  Tj("google_input_tools_source", zb);
  Tj("google.elements.inputtools.InputToolCode", {
    INPUTMETHOD_CANGJIE82_CHINESE_TRADITIONAL: bj,
    INPUTMETHOD_CANTONESE_TRADITIONAL: Ui,
    INPUTMETHOD_CANTONESE_TRADITIONAL_JYUTPING: Ti,
    INPUTMETHOD_PINYIN_CHINESE_SIMPLIFIED: gj,
    INPUTMETHOD_PINYIN_CHINESE_TRADITIONAL: dj,
    INPUTMETHOD_TRANSLITERATION_AMHARIC: Sa,
    INPUTMETHOD_TRANSLITERATION_ARABIC: Ua,
    INPUTMETHOD_TRANSLITERATION_BELARUSIAN: db,
    INPUTMETHOD_TRANSLITERATION_BENGALI: lb,
    INPUTMETHOD_TRANSLITERATION_BULGARIAN: gb,
    INPUTMETHOD_TRANSLITERATION_DUTCH: Lf,
    INPUTMETHOD_TRANSLITERATION_FRENCH: Dc,
    INPUTMETHOD_TRANSLITERATION_GERMAN: Vb,
    INPUTMETHOD_TRANSLITERATION_GREEK: dc,
    INPUTMETHOD_TRANSLITERATION_GUJARATI: Rc,
    INPUTMETHOD_TRANSLITERATION_HEBREW: $c,
    INPUTMETHOD_TRANSLITERATION_HINDI: cd,
    INPUTMETHOD_TRANSLITERATION_ITALIAN: Bd,
    INPUTMETHOD_TRANSLITERATION_JAPANESE: me,
    INPUTMETHOD_TRANSLITERATION_KANNADA: ze,
    INPUTMETHOD_TRANSLITERATION_MALAYALAM: bf,
    INPUTMETHOD_TRANSLITERATION_MARATHI: nf,
    INPUTMETHOD_TRANSLITERATION_NEPALI: If,
    INPUTMETHOD_TRANSLITERATION_ORIYA: ag,
    INPUTMETHOD_TRANSLITERATION_PERSIAN: vc,
    INPUTMETHOD_TRANSLITERATION_PORTUGUESE: Cg,
    INPUTMETHOD_TRANSLITERATION_PORTUGUESE_PORTUGAL: xg,
    INPUTMETHOD_TRANSLITERATION_PUNJABI: hg,
    INPUTMETHOD_TRANSLITERATION_RUSSIAN: Ng,
    INPUTMETHOD_TRANSLITERATION_SANSKRIT: Sg,
    INPUTMETHOD_TRANSLITERATION_SERBIAN: ph,
    INPUTMETHOD_TRANSLITERATION_SINHALESE: $g,
    INPUTMETHOD_TRANSLITERATION_SPANISH: mc,
    INPUTMETHOD_TRANSLITERATION_TAMIL: Dh,
    INPUTMETHOD_TRANSLITERATION_TELUGU: Lh,
    INPUTMETHOD_TRANSLITERATION_THAI: Th,
    INPUTMETHOD_TRANSLITERATION_TIGRINYA: Zh,
    INPUTMETHOD_TRANSLITERATION_UKRAINE: qi,
    INPUTMETHOD_TRANSLITERATION_URDU: vi,
    INPUTMETHOD_TRANSLITERATION_VIETNAMESE: Gi,
    INPUTMETHOD_WUBI_CHINESE_SIMPLIFIED: nj,
    INPUTMETHOD_ZHUYIN_CHINESE_TRADITIONAL: ej,
    KEYBOARD_ALBANIAN: lh,
    KEYBOARD_ARABIC: Va,
    KEYBOARD_ARMENIAN_EASTERN: sd,
    KEYBOARD_ARMENIAN_WESTERN: td,
    KEYBOARD_BASQUE: tc,
    KEYBOARD_BELARUSIAN: eb,
    KEYBOARD_BENGALI_INSCRIPT: mb,
    KEYBOARD_BENGALI_PHONETIC: nb,
    KEYBOARD_BOSNIAN: qb,
    KEYBOARD_BRAZILIAN_PORTUGUESE: vg,
    KEYBOARD_BULGARIAN: ib,
    KEYBOARD_BULGARIAN_PHONETIC: hb,
    KEYBOARD_CATALAN: sb,
    KEYBOARD_CHAKMA: tb,
    KEYBOARD_CHEROKEE: Ab,
    KEYBOARD_CHEROKEE_PHONETIC: Bb,
    KEYBOARD_CROATIAN: ld,
    KEYBOARD_CZECH: Ob,
    KEYBOARD_CZECH_QWERTZ: Nb,
    KEYBOARD_DANISH: Sb,
    KEYBOARD_DARI: ng,
    KEYBOARD_DEVANAGARI_PHONETIC: fd,
    KEYBOARD_DUTCH: Of,
    KEYBOARD_DUTCH_INTL: Nf,
    KEYBOARD_DZONGKHA: bc,
    KEYBOARD_ENGLISH: ic,
    KEYBOARD_ENGLISH_DVORAK: hc,
    KEYBOARD_ESTONIAN: rc,
    KEYBOARD_ETHIOPIC: si,
    KEYBOARD_FINNISH: zc,
    KEYBOARD_FRENCH: Gc,
    KEYBOARD_FRENCH_INTL: Fc,
    KEYBOARD_FULA_ADLAM: xc,
    KEYBOARD_GALICIAN: Pc,
    KEYBOARD_GEORGIAN_QWERTY: re,
    KEYBOARD_GEORGIAN_TYPEWRITER: qe,
    KEYBOARD_GERMAN: Yb,
    KEYBOARD_GERMAN_INTL: Xb,
    KEYBOARD_GREEK: ec,
    KEYBOARD_GUJARATI_INSCRIPT: Tc,
    KEYBOARD_GUJARATI_PHONETIC: Uc,
    KEYBOARD_GUJARATI_NEW_PHONETIC: Sc,
    KEYBOARD_GURMUKHI_INSCRIPT: eg,
    KEYBOARD_GURMUKHI_PHONETIC: fg,
    KEYBOARD_HAITIAN: nd,
    KEYBOARD_HAWAIIAN: Xc,
    KEYBOARD_HEBREW: ad,
    KEYBOARD_HINDI: gd,
    KEYBOARD_HINDI_PHONETIC: dd,
    KEYBOARD_HOCHUNK: Oi,
    KEYBOARD_HUNGARIAN_101: rd,
    KEYBOARD_ICELANDIC: zd,
    KEYBOARD_INDONESIAN: wd,
    KEYBOARD_INUKTITUT_NUNAVIK: ge,
    KEYBOARD_INUKTITUT_NUNAVUT: he,
    KEYBOARD_IRISH: Lc,
    KEYBOARD_IRISH_ACCENTS: Kc,
    KEYBOARD_ITALIAN: Ed,
    KEYBOARD_ITALIAN_INTL: Dd,
    KEYBOARD_JAVANESE: oe,
    KEYBOARD_KANNADA_INSCRIPT: Ae,
    KEYBOARD_KANNADA_PHONETIC: Be,
    KEYBOARD_KAZAKH: ve,
    KEYBOARD_KHMER: xe,
    KEYBOARD_KOREAN: De,
    KEYBOARD_KURDISH_BEDIRXAN: Fe,
    KEYBOARD_KYRGYZ: Ge,
    KEYBOARD_LAO: Pe,
    KEYBOARD_LATVIAN: Ue,
    KEYBOARD_LITHUANIAN: Re,
    KEYBOARD_MACEDONIAN: $e,
    KEYBOARD_MAKAH: Ef,
    KEYBOARD_MALAY: sf,
    KEYBOARD_MALAYALAM_INSCRIPT: cf,
    KEYBOARD_MALAYALAM_PHONETIC: df,
    KEYBOARD_MALTESE: uf,
    KEYBOARD_MAORI: Ye,
    KEYBOARD_MARATHI: qf,
    KEYBOARD_MARATHI_PHONETIC: pf,
    KEYBOARD_MEETEI_PHONETIC: gf,
    KEYBOARD_MENOMINEE: Ve,
    KEYBOARD_MONGOLIAN_CYRILLIC: ef,
    KEYBOARD_MONTENEGRIN: qh,
    KEYBOARD_MYANMAR: Df,
    KEYBOARD_MYANMAR_MYANSAN: Cf,
    KEYBOARD_NAVAJO: Vf,
    KEYBOARD_NAVAJO_STANDARD: Uf,
    KEYBOARD_NORWEGIAN: Rf,
    KEYBOARD_ONEIDA: Zf,
    KEYBOARD_ORIYA_INSCRIPT: bg,
    KEYBOARD_ORIYA_PHONETIC: cg,
    KEYBOARD_OSAGE: dg,
    KEYBOARD_PAN_AFRICA_LATIN: Je,
    KEYBOARD_PASHTO: og,
    KEYBOARD_PERSIAN: wc,
    KEYBOARD_PLAINS_CREE_PHONETIC: Lb,
    KEYBOARD_POLISH: kg,
    KEYBOARD_PORTUGUESE: Ag,
    KEYBOARD_PORTUGUESE_BRAZIL_INTL: ug,
    KEYBOARD_PORTUGUESE_PORTUGAL_INTL: zg,
    KEYBOARD_ROHINGYA: Fg,
    KEYBOARD_ROMANI: Kg,
    KEYBOARD_ROMANIAN: Jg,
    KEYBOARD_ROMANIAN_SR13392_PRIMARY: Ig,
    KEYBOARD_ROMANIAN_SR13392_SECONDARY: Hg,
    KEYBOARD_RUSSIAN: Qg,
    KEYBOARD_SANSKRIT_PHONETIC: Ug,
    KEYBOARD_SERBIAN_CYRILLIC: mh,
    KEYBOARD_SERBIAN_LATIN: nh,
    KEYBOARD_KEYBOARD_SINDHI: Vg,
    KEYBOARD_SINHALA: ah,
    KEYBOARD_SLOVAK: dh,
    KEYBOARD_SLOVAK_QWERTY: ch,
    KEYBOARD_SLOVENIAN: fh,
    KEYBOARD_SORANI_KURDISH_AR: Eb,
    KEYBOARD_SORANI_KURDISH_EN: Fb,
    KEYBOARD_SOUTHERN_UZBEK: Ci,
    KEYBOARD_SPANISH: pc,
    KEYBOARD_SPANISH_INTL: oc,
    KEYBOARD_SWAHILI: xh,
    KEYBOARD_SWEDISH: vh,
    KEYBOARD_SWISS_GERMAN: Tb,
    KEYBOARD_TAGALOG: ai,
    KEYBOARD_TAJIK: Rh,
    KEYBOARD_TAMIL_99: Fh,
    KEYBOARD_TAMIL_INSCRIPT: Hh,
    KEYBOARD_TAMIL_ITRANS: Eh,
    KEYBOARD_TAMIL_PHONETIC: Ih,
    KEYBOARD_TAMIL_TYPEWRITER: Gh,
    KEYBOARD_TATAR: ni,
    KEYBOARD_TELUGU_INSCRIPT: Mh,
    KEYBOARD_TELUGU_PHONETIC: Nh,
    KEYBOARD_THAI: Wh,
    KEYBOARD_THAI_PATTAJOTI: Uh,
    KEYBOARD_THAI_TIS: Vh,
    KEYBOARD_TIGRINYA: $h,
    KEYBOARD_TIGRINYA_ETHIOPIC: Xh,
    KEYBOARD_TURKISH_F: ii,
    KEYBOARD_TURKISH_Q: ki,
    KEYBOARD_UIGHUR: oi,
    KEYBOARD_UKRAINIAN_101: ri,
    KEYBOARD_URDU: wi,
    KEYBOARD_UZBEK_CYRILLIC_PHONETIC: zi,
    KEYBOARD_UZBEK_CYRILLIC_TYPEWRITTER: yi,
    KEYBOARD_UZBEK_LATIN: Ai,
    KEYBOARD_VIETNAMESE_TCVN: Ii,
    KEYBOARD_VIETNAMESE_TELEX: Hi,
    KEYBOARD_VIETNAMESE_VIQR: Ji,
    KEYBOARD_WELSH: Qb,
    KEYBOARD_YIDDISH: Ri,
    KEYBOARD_NIGERIAN_YORUBA: Si,
    KEYBOARD_OJIBWE: Yf,
    KEYBOARD_GENMAN_ACCENTS: Wb,
    KEYBOARD_SPANISH_ACCENTS: nc,
    KEYBOARD_FRENCH_ACCENTS: Ec,
    KEYBOARD_ITALIAN_ACCENTS: Cd,
    KEYBOARD_DUTCH_ACCENTS: Mf,
    KEYBOARD_POLISH_ACCENTS: jg,
    KEYBOARD_PORTUGUESE_BRAZIL_ACCENTS: tg,
    KEYBOARD_PORTUGUESE_PORTUGAL_ACCENTS: yg,
    KEYBOARD_TURKISH_F_ACCENTS: gi,
    KEYBOARD_TURKISH_Q_ACCENTS: ji,
    KEYBOARD_CORSICAN_ACCENTS: Hb,
    KEYBOARD_HAWAIIAN_ACCENTS: Wc,
    KEYBOARD_SAMOAN_ACCENTS: hh,
    KEYBOARD_SCOTS_GAELIC_ACCENTS: Nc,
    KEYBOARD_WEST_FRISIAN_ACCENTS: Ic,
    KEYBORAD_LUXEMBOURGISH_ACCENTS: Me,
    HANDWRIT_AFRIKAANS: Qa,
    HANDWRIT_AMHARIC: Ra,
    HANDWRIT_ARABIC: Ta,
    HANDWRIT_ASSAMESE: Xa,
    HANDWRIT_AZERBAIJANI: bb,
    HANDWRIT_BELARUSIAN: cb,
    HANDWRIT_BULGARIAN: fb,
    HANDWRIT_BENGALI: kb,
    HANDWRIT_TIBETAN: ob,
    HANDWRIT_BOSNIAN: pb,
    HANDWRIT_CATALAN: rb,
    HANDWRIT_CEBUANO: ub,
    HANDWRIT_CORSICAN: Gb,
    HANDWRIT_CZECH: Mb,
    HANDWRIT_WELSH: Pb,
    HANDWRIT_DANISH: Rb,
    HANDWRIT_GERMAN: Ub,
    HANDWRIT_GREEK: cc,
    HANDWRIT_ENGLISH: fc,
    HANDWRIT_ESPERANTO: kc,
    HANDWRIT_SPANISH: lc,
    HANDWRIT_ESTONIAN: qc,
    HANDWRIT_BASQUE: sc,
    HANDWRIT_PERSIAN: uc,
    HANDWRIT_FINNISH: yc,
    HANDWRIT_FILIPINO: Ac,
    HANDWRIT_FRENCH: Cc,
    HANDWRIT_WESTERN_FRISIAN: Hc,
    HANDWRIT_IRISH: Jc,
    HANDWRIT_SCOTTISH_GAELIC: Mc,
    HANDWRIT_GALICIAN: Oc,
    HANDWRIT_GUJARATI: Qc,
    HANDWRIT_HAWAIIAN: Vc,
    HANDWRIT_HEBREW: Zc,
    HANDWRIT_HINDI: bd,
    HANDWRIT_HMONG: id,
    HANDWRIT_CROATIAN: kd,
    HANDWRIT_HAITIAN: md,
    HANDWRIT_HUNGARIAN: qd,
    HANDWRIT_ARMENIAN: ud,
    HANDWRIT_INDONESIAN: vd,
    HANDWRIT_ICELANDIC: yd,
    HANDWRIT_ITALIAN: Ad,
    HANDWRIT_JAPANESE: je,
    HANDWRIT_JAVANESE: ne,
    HANDWRIT_GEORGIAN: pe,
    HANDWRIT_KAZAKH: ue,
    HANDWRIT_KHMER: we,
    HANDWRIT_KANNADA: ye,
    HANDWRIT_KOREAN: Ce,
    HANDWRIT_KURDISH: Ee,
    HANDWRIT_KYRGYZ: He,
    HANDWRIT_LATIN: Ie,
    HANDWRIT_LUXEMBOURGISH: Le,
    HANDWRIT_LAO: Oe,
    HANDWRIT_LITHUANIAN: Qe,
    HANDWRIT_LATVIAN: Te,
    HANDWRIT_MALAGASY: We,
    HANDWRIT_MAORI: Xe,
    HANDWRIT_MACEDONIAN: Ze,
    HANDWRIT_MALAYALAM: af,
    HANDWRIT_MONGOLIAN: ff,
    HANDWRIT_MARATHI: mf,
    HANDWRIT_MALAY: rf,
    HANDWRIT_MALTESE: tf,
    HANDWRIT_MULTIPLE_LANGUAGES: Af,
    HANDWRIT_MULTIPLE_LANGUAGES_BANGLA: vf,
    HANDWRIT_MULTIPLE_LANGUAGES_CYRILLIC: wf,
    HANDWRIT_MULTIPLE_LANGUAGES_DEVANAGARI: xf,
    HANDWRIT_MULTIPLE_LANGUAGES_ETHIOPIC: yf,
    HANDWRIT_MULTIPLE_LANGUAGES_LATIN: zf,
    HANDWRIT_BURMESE: Bf,
    HANDWRIT_NORWEGIAN_BOKMAL: Gf,
    HANDWRIT_NEPALI: Hf,
    HANDWRIT_DUTCH: Kf,
    HANDWRIT_NORWEGIAN_NYNORSK: Pf,
    HANDWRIT_NORWEGIAN: Qf,
    HANDWRIT_NYANJA: Wf,
    HANDWRIT_ORIYA: $f,
    HANDWRIT_PUNJABI: gg,
    HANDWRIT_POLISH: ig,
    HANDWRIT_PORTUGUESE: Bg,
    HANDWRIT_PORTUGUESE_BRAZIL: rg,
    HANDWRIT_PORTUGUESE_PORTUGAL: wg,
    HANDWRIT_ROMANIAN: Gg,
    HANDWRIT_RUSSIAN: Mg,
    HANDWRIT_SINHALA: Zg,
    HANDWRIT_SLOVAK: bh,
    HANDWRIT_SLOVENIAN: eh,
    HANDWRIT_SAMOAN: gh,
    HANDWRIT_SHONA: ih,
    HANDWRIT_SOMALI: jh,
    HANDWRIT_ALBANIAN: kh,
    HANDWRIT_SERBIAN: oh,
    HANDWRIT_SUNDANESE: th,
    HANDWRIT_SWEDISH: uh,
    HANDWRIT_SWAHILI: wh,
    HANDWRIT_TAMIL: Ch,
    HANDWRIT_TELUGU: Kh,
    HANDWRIT_TAJIK: Qh,
    HANDWRIT_THAI: Sh,
    HANDWRIT_TIGRINYA: Yh,
    HANDWRIT_TURKISH: fi,
    HANDWRIT_UKRAINIAN: pi,
    HANDWRIT_URDU: ui,
    HANDWRIT_UZBEK: Bi,
    HANDWRIT_VIETNAMESE: Fi,
    HANDWRIT_XHOSA: Pi,
    HANDWRIT_YIDDISH: Qi,
    HANDWRIT_CHINESE: fj,
    HANDWRIT_CHINESE_SIMPLIFIED: $i,
    HANDWRIT_CHINESE_TRADITIONAL: cj,
    HANDWRIT_CANTONESE: oj,
    HANDWRIT_ZULU: pj
  });
  Ay.prototype.C = function (a) {
    Vj({ gl: a });
  };
  Tt = function (a) {
    Vj({ gi: a });
  };
  rt = function () {};
  Us =
    ".ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8.png');-webkit-background-size:850px 250px;-o-background-size:850px 250px;background-size:850px 250px}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8_2x.png')}}@media screen and (-ms-high-contrast:white-on-black){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}}.ita-ff-black-enabled .ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-ff-black-enabled .ita-kd-img{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-ppe-ant{text-align:inherit;background-color:inherit}.ita-ppe-can,.ita-ppe-can-list,.ita-ppe-tbl,.ita-ppe-td,.ita-ppe-div,.ita-ppe-uds{font-size:inherit;text-align:inherit;background-color:inherit}.ita-ppe-ant{color:#a9a9a9;font-size:14px}.ita-ppe-box{position:absolute;display:block;background-color:white;color:black;cursor:move;border:1px solid #cdcdcd;padding:6px;font-size:16px;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.2);-moz-box-shadow:0 4px 16px rgba(0,0,0,.2);box-shadow:0 4px 16px rgba(0,0,0,.2);z-index:2147483644;text-align:justify;overflow:hidden}.ita-ppe-box.ita-ppe-box-mobile{-webkit-box-shadow:0 0;-moz-box-shadow:0 0;box-shadow:0 0;display:inline-block;left:0;padding:6px 0;width:100%}.ita-ppe-can{margin:2px;padding:4px;line-height:16px;height:18px}.ita-ppe-can-list{cursor:pointer;display:block;min-height:1.5em;margin:6px 0 0 0;padding:0;white-space:nowrap}.ita-ppe-box-mobile .ita-ppe-can-list{overflow-x:auto;max-width:100%;margin:6px 0 -100px 0;padding:6px 0 106px 0}.ita-ppe-cur{display:inline-block;width:2px;height:18px;background-color:#54bdf0;overflow:hidden;text-decoration:blink;float:none}.ita-ppe-edit{height:20px;line-height:20px;font-size:18px;text-align:inherit;background-color:inherit;padding:0 0 6px 0;outline:none;border:none;white-space:nowrap;font-family:Arial,Sans-serif;cursor:text}.ita-ppe-div{white-space:nowrap}.ita-ppe-box-mobile>.ita-ppe-div{font-size:24px;overflow-x:hidden}.ita-ppe-logo{background-image:url('https://ssl.gstatic.com/inputtools/images/search_button_normal.png');background-position:-197px 3px;width:48px;height:20px;margin:2px;padding:0;float:right}.ita-ppe-pgd,.ita-ppe-pgu{display:inline-block;margin:6px -1px 0 0;width:22px;opacity:.55;-moz-opacity:.55;filter:alpha(opacity=55);border:1px solid gray;height:18px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;-webkit-transition:all .218s;-moz-transition:all .218s;-o-transition:all .218s;-webkit-transition:all .218s;-o-transition:all .218s;transition:all .218s;background-color:#f5f5f5;cursor:default}.ita-ppe-navi-box{padding-left:6px;white-space:nowrap}.ita-ppe-pgd{background-position:-816px -66px}.ita-ppe-pgu{background-position:-616px -116px}.ita-ppe-tbl{width:100%;border:none;padding:0;margin:0}.ita-ppe-td{border:none;padding:0;margin:0}.ita-ppe-uds{border-bottom:solid 2px;margin:0 1px}.ita-ppe-hlt{color:#222;background-color:#f1f1f1}.ita-ppe-hov{opacity:.9;-moz-opacity:.9;filter:alpha(opacity=90)}.ita-ppe-dis{opacity:.333;-moz-opacity:.333;filter:alpha(opacity=33)}.ita-ppe-dis-text{color:#777}.ita-isv{position:absolute;border:0;margin:0;padding:0;background-repeat:repeat-x}.ita-isv-grey{color:grey;margin-top:0}.ita-isv-red{color:transparent;margin-top:-2px;background-image:url('https://ssl.gstatic.com/inputtools/images/tilde.png')}@media screen and (-ms-high-contrast:white-on-black){.ita-ppe-pgd,.ita-ppe-pgu{opacity:1px}.ita-ppe-hlt{font-weight:bold;border:1px solid}}.ita-ff-black-enabled .ita-ppe-pgd,.ita-ff-black-enabled .ita-ppe-pgu{opacity:1px}.ita-ff-black-enabled .ita-ppe-hlt{font-weight:bold;border:1px solid}.ita-hwt-ime{overflow:hidden;width:425px;height:297px;background:#fff;touch-action:pinch-zoom}.ita-hwt-ime-st{position:fixed;opacity:.5;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.2);-moz-box-shadow:0 4px 16px rgba(0,0,0,.2);box-shadow:0 4px 16px rgba(0,0,0,.2);border:1px solid #ccc;-webkit-transition:opacity .1s linear;z-index:2147483640}.ita-hwt-ime-full{width:auto!important;left:2px!important;right:2px!important}.ita-hwt-ime-opaque,.ita-hwt-ime-init-opaque{opacity:.99!important}.ita-hwt-ime-hover{opacity:.99;-webkit-transition:opacity .1s linear;-moz-transition:opacity .1s linear;-o-transition:opacity .1s linear;-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;transition:opacity .1s linear}canvas.ita-hwt-canvas{cursor:url('https://ssl.gstatic.com/inputtools/images/pencil.png') 0 10,auto;vertical-align:bottom;touch-action:none}.ita-hwt-grip{position:absolute;cursor:move;top:0}.ita-hwt-ltr .ita-hwt-grip{left:0}.ita-hwt-rtl .ita-hwt-grip{right:0}.ita-hwt-close{background-position:-660px -10px;background-color:white;width:30px;height:30px;position:absolute;top:0;cursor:pointer}.ita-hwt-ltr .ita-hwt-close{right:0}.ita-hwt-rtl .ita-hwt-close{left:0}.ita-hwt-candidates{border-top:1px solid #ccc;background:#fff;text-align:left;white-space:nowrap}.ita-hwt-candidate{display:inline-block;white-space:nowrap;height:32px;line-height:24px;padding:6px 18px 3px 18px;border-right:1px solid #ccc;font-family:arial,verdana,sans-serif;font-size:small;color:#222;cursor:pointer}.ita-hwt-selected{color:#444}.ita-hwt-candidate-hover{background-color:#f0f0f0;color:#444}.ita-hwt-candidate:active{background-color:#e0e0e0;color:#444}.ita-hwt-disabled{opacity:.5}.ita-hwt-buttons{background-color:#f0f0f0;height:60px;border-top:1px solid #ccc}.ita-hwt-button{display:inline-block;vertical-align:top}.ita-hwt-backspace{margin:10px;width:24px!important;height:40px!important}.ita-hwt-backspace-img{background-position:-714px -118px;width:18px;height:14px;margin:13px 4px 13px 4px}.ita-hwt-space{margin:10px 0 10px 0;height:24px;width:296px;line-height:24px;padding:8px 0 8px 0!important;font-family:arial,verdana,sans-serif;font-size:small;text-align:center}.ita-hwt-enter{margin:10px;width:24px!important;height:40px!important}.ita-hwt-enter-img{margin:13px 4px 13px 4px}.ita-hwt-language{position:absolute;right:0;bottom:0;width:auto;height:auto;font-size:small;color:#7590d4}.ita-hwt-clear-time{position:absolute;right:30px;bottom:0;width:auto;height:auto;font-size:small;color:#7590d4;cursor:pointer}.ita-hwt-insert-time{position:absolute;right:60px;bottom:0;width:auto;height:auto;font-size:small;color:#7590d4;cursor:pointer}.ita-hwt-enter-img-dark{background-position:-768px -120px;width:14px;height:10px}.ita-hwt-enter-img-white{background-position:-818px -120px;width:14px;height:10px}.ita-hwt-grip{background-position:-700px -160px;width:47px;height:29px}.ita-hwt-grip-hover{background-position:-650px -160px}.ita-hwt-grip:active{background-position:-600px -160px}.ita-hwt-jfk{-webkit-border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;cursor:default;font-size:11px;font-weight:bold;text-align:center;white-space:nowrap;padding:0 8px}.ita-hwt-jfk-hover{-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,.1);-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,.1);box-shadow:0 1px 1px rgba(0,0,0,.1)}.ita-hwt-jfk-standard{-webkit-box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#f5f5f5;background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-webkit-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);color:#444;border:1px solid #dcdcdc;border:1px solid rgba(0,0,0,.1)}.ita-hwt-jfk-standard.ita-hwt-jfk-hover{-webkit-box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-webkit-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:linear-gradient(to bottom,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#333}.ita-hwt-jfk-action{-webkit-box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#4d90fe;background-image:-webkit-linear-gradient(top,#4d90fe,#4787ed);background-image:-moz-linear-gradient(top,#4d90fe,#4787ed);background-image:-ms-linear-gradient(top,#4d90fe,#4787ed);background-image:-o-linear-gradient(top,#4d90fe,#4787ed);background-image:-webkit-linear-gradient(to bottom,#4d90fe,#4787ed);background-image:-moz-linear-gradient(to bottom,#4d90fe,#4787ed);background-image:-ms-linear-gradient(to bottom,#4d90fe,#4787ed);background-image:-o-linear-gradient(to bottom,#4d90fe,#4787ed);background-image:linear-gradient(to bottom,#4d90fe,#4787ed);border:1px solid #3079ed;color:#fff}.ita-hwt-jfk-action.ita-hwt-jfk-hover{-webkit-box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;background-color:#357ae8;background-image:-webkit-linear-gradient(top,#4d90fe,#357ae8);background-image:-moz-linear-gradient(top,#4d90fe,#357ae8);background-image:-ms-linear-gradient(top,#4d90fe,#357ae8);background-image:-o-linear-gradient(top,#4d90fe,#357ae8);background-image:-webkit-linear-gradient(to bottom,#4d90fe,#357ae8);background-image:-moz-linear-gradient(to bottom,#4d90fe,#357ae8);background-image:-ms-linear-gradient(to bottom,#4d90fe,#357ae8);background-image:-o-linear-gradient(to bottom,#4d90fe,#357ae8);background-image:linear-gradient(to bottom,#4d90fe,#357ae8);border:1px solid #2f5bb7;border-bottom-color:#2f5bb7}.ita-hwt-butterbar{position:absolute;left:0;bottom:100px;-webkit-border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px;-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-transition:all 0 linear 1s,opacity 1s;-moz-transition:all 0 linear 1s,opacity 1s;-o-transition:all 0 linear 1s,opacity 1s;-webkit-transition:all 0 linear 1s,opacity 1s;-o-transition:all 0 linear 1s,opacity 1s;transition:all 0 linear 1s,opacity 1s;border-style:solid;border-width:0;font-size:11px;height:0;opacity:0;visibility:hidden;overflow:hidden;padding:0;margin:10px;text-align:center;background-color:#f9edbe;border-color:#f0c36d;color:#333}.ita-hwt-butterbar.shown{-webkit-transition:opacity .218s;-moz-transition:opacity .218s;-o-transition:opacity .218s;-webkit-transition:opacity .218s;-o-transition:opacity .218s;transition:opacity .218s;border-width:1px;height:14px;opacity:1;visibility:visible;padding:2px 16px}@media screen and (-ms-high-contrast:white-on-black){.ita-hwt-candidate-hover,.ita-hwt-candidate:active{font-weight:bold;border:2px solid}.ita-hwt-jfk-action{outline:2px solid}.ita-hwt-jfk{background-image:none}.ita-hwt-jfk-standard.ita-hwt-jfk-hover,.ita-hwt-jfk-action.ita-hwt-jfk-hover{background-image:none;outline:2px solid}}.ita-ff-black-enabled .ita-hwt-candidate-hover,.ita-ff-black-enabled .ita-hwt-candidate:active{font-weight:bold;border:2px solid}.ita-ff-black-enabled .ita-hwt-jfk-action{outline:2px solid}.ita-ff-black-enabled .ita-hwt-jfk{background-image:none}.ita-ff-black-enabled .ita-hwt-jfk-standard.ita-hwt-jfk-hover,.ita-ff-black-enabled .ita-hwt-jfk-action.ita-hwt-jfk-hover{background-image:none;outline:2px solid}.vk-box,.vk-btn,.vk-btn-n,.vk-cap,.vk-cap-i,.vk-t,.vk-t-btn{display:inline-block;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none}.vk-box{height:auto;padding:10px;background-color:white;border:1px solid #b8b8b8;border:1px solid rgba(0,0,0,.3);z-index:2147483644;font-family:arial,sans-serif;font-size:14px;position:fixed;-webkit-box-shadow:0 4px 16px rgba(0,0,0,.2);-moz-box-shadow:0 4px 16px rgba(0,0,0,.2);box-shadow:0 4px 16px rgba(0,0,0,.2);touch-action:pinch-zoom}.vk-box-blur{opacity:.5;-webkit-transition:opacity .1s linear}.vk-box.vk-min{padding:2px}.vk-box.vk-sf-ie{border:1px solid #ccc}.vk-btn{border:1px solid #dcdcdc;border:1px solid rgba(0,0,0,.1);width:29px;height:29px;margin:2px;text-align:center;vertical-align:middle;position:relative;padding:1px;min-width:0;max-width:500px;min-height:0;max-height:50px;color:#444;background-color:#f5f5f5;background-image:-webkit-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-webkit-gradient(linear,left top,left bottom,from(#f5f5f5),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(top,#f5f5f5,#f1f1f1);background-image:-webkit-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f5f5f5,#f1f1f1);background-image:linear-gradient(to bottom,#f5f5f5,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#f5f5f5\",EndColorStr=\"#f1f1f1\");border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px}.vk-btn.vk-sf-h{border-color:#c6c6c6;color:#222;background-color:#f8f8f8;background-image:-webkit-gradient(linear,left top,left bottom,from(#f8f8f8),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(top,#f8f8f8,#f1f1f1);background-image:-webkit-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f8f8f8,#f1f1f1);background-image:linear-gradient(to bottom,#f8f8f8,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#f8f8f8\",EndColorStr=\"#f1f1f1\");-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);-moz-box-shadow:0 1px 1px rgba(0,0,0,.1);box-shadow:0 1px 1px rgba(0,0,0,.1)}.vk-btn.vk-sf-a{border-color:#c6c6c6;color:#333;background-color:#f6f6f6;background-image:-webkit-gradient(linear,left top,left bottom,from(#f6f6f6),to(#f1f1f1));background-image:-webkit-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-moz-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-ms-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-o-linear-gradient(top,#f6f6f6,#f1f1f1);background-image:-webkit-linear-gradient(to bottom,#f6f6f6,#f1f1f1);background-image:-moz-linear-gradient(to bottom,#f6f6f6,#f1f1f1);background-image:-ms-linear-gradient(to bottom,#f6f6f6,#f1f1f1);background-image:-o-linear-gradient(to bottom,#f6f6f6,#f1f1f1);background-image:linear-gradient(to bottom,#f6f6f6,#f1f1f1);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#f6f6f6\",EndColorStr=\"#f1f1f1\");-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.vk-btn.vk-sf-s{border-color:#ccc;color:#333;background-color:#eee;background-image:-webkit-gradient(linear,left top,left bottom,from(#eeeeee),to(#e0e0e0));background-image:-webkit-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-moz-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-ms-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-o-linear-gradient(top,#eeeeee,#e0e0e0);background-image:-webkit-linear-gradient(to bottom,#eeeeee,#e0e0e0);background-image:-moz-linear-gradient(to bottom,#eeeeee,#e0e0e0);background-image:-ms-linear-gradient(to bottom,#eeeeee,#e0e0e0);background-image:-o-linear-gradient(to bottom,#eeeeee,#e0e0e0);background-image:linear-gradient(to bottom,#eeeeee,#e0e0e0);filter:progid:DXImageTransform.Microsoft.gradient(startColorStr=\"#EEEEEE\",EndColorStr=\"#E0E0E0\");-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);-moz-box-shadow:inset 0 1px 2px rgba(0,0,0,.1);box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.vk-cap,.vk-t{font-size:14px;font-family:arial,sans-serif;font-weight:normal;line-height:25px}.vk-cap{cursor:default}.vk-cap.vk-sf-b,.vk-t-btn{background-repeat:no-repeat}.vk-cap.vk-sf-b{width:22px;height:17px;opacity:.667}.vk-sf-ff2 .vk-cap.vk-sf-b{display:block;position:relative;left:6px;top:0}.vk-cap.vk-sf-b.vk-sf-h{opacity:.9}.vk-cap.vk-sf-b.vk-sf-c8{background-position:-714px -16px}.vk-cap.vk-sf-b.vk-sf-c20{background-position:-614px -66px}.vk-cap.vk-sf-b.vk-sf-c16{background-position:-814px -16px}.vk-cap.vk-sf-c273{font-size:14px}.vk-cap-i{border:none;width:20px;height:20px}.vk-t{height:24px;cursor:move;padding:0 3px;color:#888;display:inline-block;overflow:hidden;width:100%}.vk-t.vk-min{width:auto}.vk-t-btns{margin:0;padding:0;position:absolute;display:inline-block;white-space:nowrap;top:0}.vk-t-btns.vk-min{position:relative}.vk-t-btn{margin:0;height:14px!important;width:14px!important;opacity:.4;filter:alpha(opacity=40)}.vk-t-btn.vk-sf-hp{background-position:-670px -70px}.vk-t-btn.vk-sf-min{background-position:-720px -70px}.vk-t-btn.vk-sf-max{background-position:-770px -70px}.vk-t-btn.vk-sf-cl{background-position:-670px -20px}.vk-t-btn.vk-sf-th{opacity:1;filter:alpha(opacity=100)}.vk-t-btn-o{padding:13px 4px 8px 4px;cursor:default;display:inline-block;position:relative}.vk-t-btn-o.vk-min{padding:2px}.vk-t-btn-o.vk-sf-hp{cursor:pointer}.vk-ea-l{margin-right:32px}.vk-ea-r{margin-left:32px}.vk-ss{margin:0 5px}.vk-l-i{pointer-events:none;text-decoration:none;color:#000!important;font-weight:bold}.vk-l-a{color:#00f}@media screen and (-ms-high-contrast:white-on-black){.vk-btn,.vk-btn.vk-sf-a,.vk-btn.vk-sf-h,.vk-btn.vk-sf-s{background-image:none;background-color:black}.vk-cap.vk-sf-b{opacity:1}.vk-btn.vk-sf-a,.vk-btn.vk-sf-h,.vk-btn.vk-sf-s{border-width:2px}.vk-btn.vk-sf-a .vk-cap,.vk-btn.vk-sf-h .vk-cap,.vk-btn.vk-sf-s .vk-cap{font-weight:bold}}.ita-ff-black-enabled .vk-btn,.ita-ff-black-enabled .vk-btn.vk-sf-a,.ita-ff-black-enabled .vk-btn.vk-sf-h,.ita-ff-black-enabled .vk-btn.vk-sf-s{background-image:none;background-color:black}.ita-ff-black-enabled .vk-cap.vk-sf-b{opacity:1}.ita-ff-black-enabled .vk-btn.vk-sf-a,.ita-ff-black-enabled .vk-btn.vk-sf-h,.ita-ff-black-enabled .vk-btn.vk-sf-s{border-width:2px}.ita-ff-black-enabled .vk-btn.vk-sf-a .vk-cap,.ita-ff-black-enabled .vk-btn.vk-sf-h .vk-cap,.ita-ff-black-enabled .vk-btn.vk-sf-s .vk-cap{font-weight:bold}.ita-kd-btn-zh{background-position:-514px -18px}.ita-kd-btn-en{background-position:-564px -18px}.ita-kd-btn-dbc{background-position:-514px -68px}.ita-kd-btn-sbc{background-position:-564px -68px}.ita-kd-btn-zh_pun{background-position:-514px -118px}.ita-kd-btn-en_pun{background-position:-564px -118px}.ita-kd-arrow{background-position:-620px -218px;width:12px;height:15px}.ita-kd-floating-bar-icon{background-position:-670px -116px;width:12px;height:15px}.ita-kd-icon-button.ita-kd-left{-webkit-border-radius:2px 0 0 2px;-moz-border-radius:2px 0 0 2px;-webkit-border-radius:2px 0 0 2px;-moz-border-radius:2px 0 0 2px;border-radius:2px 0 0 2px}.ita-kd-icon-button.ita-kd-right,.ita-kd-icon-button.ita-kd-mid{margin-left:-1px}.ita-kd-icon-button.ita-kd-single{-webkit-border-radius:2px;-moz-border-radius:2px;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}.ita-kd-icon-button{display:inline-block;min-width:54px;text-align:center;color:#444;font-size:11px;font-weight:bold;height:27px;padding:0 8px;margin:0;-webkit-transition:all .218s;-moz-transition:all .218s;-o-transition:all .218s;-webkit-transition:all .218s;-o-transition:all .218s;transition:all .218s;-webkit-user-select:none;-moz-user-select:none;cursor:default}.ita-kd-inputtools-div{display:table;white-space:nowrap}.ita-kd-inputtools-div .ita-kd-icon-button{float:left;position:relative;z-index:1}::-webkit-input-placeholder{color:#999}.ita-kd-icon-button.ita-kd-small{min-width:33px;width:33px;padding:0}.ita-kd-icon-button.ita-kd-small.ita-kd-mobile{height:30px;width:44px}.ita-kd-icon-button.ita-kd-dropdown{min-width:18px;width:18px;padding:0}.ita-kd-icon-button.ita-kd-dropdown.ita-kd-mobile{height:30px;width:36px}.ita-kd-icon-button.ita-kd-floating-bar{min-width:14px;width:14px;padding:0;cursor:move}.ita-kd-icon{width:23px;height:16px}.ita-kd-icon-span{display:inline-block;margin:6px 0 0 0;opacity:.26;vertical-align:middle}.ita-kd-arrow.ita-kd-icon-span,.ita-kd-statusbar-icon,.ita-kd-icon-button.ita-kd-selected .ita-kd-icon-span{opacity:.54}.ita-kd-icon-button:focus{outline:none}.ita-kd-statusbar{-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);-moz-box-shadow:0 2px 4px rgba(0,0,0,.2);box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;white-space:nowrap;direction:ltr;position:fixed;background-color:#eee;z-index:2147483643}.ita-kd-statusbar-table{padding:0;margin:0;border:none}.ita-kd-separator{border-top:1px solid #ebebeb;margin-top:5px;margin-bottom:6px}.ita-kd-inputtool-icon:focus{margin-right:1px}.ita-kd-dropdown-menu{background:#fff;border:1px solid rgba(0,0,0,.2);padding:6px 0;margin:0;white-space:nowrap;z-index:2147483645;-moz-transition:opacity .218s;-o-transition:opacity .218s;-webkit-transition:opacity .218s;-webkit-transition:opacity .218s;-o-transition:opacity .218s;transition:opacity .218s;position:absolute}.ita-kd-dropdown-menu-mobile{position:absolute;top:0;left:0;background-color:rgba(199,200,200,.5);width:100%;height:100%;z-index:100}.ita-kd-dropdown-menu-mobile>.ita-kd-dropdown-menu{margin:auto;max-width:600px;position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);-webkit-transform:translateY(-50%)}.ita-kd-dropdown-menu:focus{outline:none}.ita-kd-dropdown-menu.ita-kd-ie{border:1px solid #ccc;width:260px}.ita-kd-menuitem{display:block;padding:6px 38px 6px 8px;position:relative;color:#333;font-size:13px;height:16px;font-weight:normal;cursor:default}.ita-kd-dropdown-menu-mobile .ita-kd-menuitem{padding-top:16px}.ita-kd-menuitem-inputtool-icon{width:23px;height:16px;display:inline-block;opacity:.54;position:relative;top:3px}.ita-kd-menuitem-inputtool-name{line-height:17px;padding:0 6px 0 6px}.ita-kd-menuitem-setting{line-height:17px;padding:0 22px 0 22px}.ita-kd-menuitem-hover{background-color:#f1f1f1!important;color:#222!important}.ita-kd-menuitem .ita-kd-checkbox{display:inline-block;width:22px;height:16px}.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8.png');background-position:-614px -14px;-webkit-background-size:850px 250px;-o-background-size:850px 250px;background-size:850px 250px}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite8_2x.png')}}@media screen and (-ms-high-contrast:white-on-black){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-kd-icon-span,.ita-kd-menuitem-inputtool-icon{opacity:1}.ita-kd-menuitem-hover{border:1px solid;font-weight:bold}.ita-kd-statusbar,.ita-kd-icon-button.ita-kd-icon-button-hover{border:1px solid}}.ita-ff-black-enabled .ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8.png')}@media (min-resolution:144dpi),(-webkit-min-device-pixel-ratio:1.5){.ita-ff-black-enabled .ita-kd-menuitem.ita-kd-selected .ita-kd-checkbox{background-image:url('https://www.gstatic.com/inputtools/images/ita_sprite_grey8_2x.png')}}.ita-ff-black-enabled .ita-kd-icon-span,.ita-ff-black-enabled .ita-kd-menuitem-inputtool-icon{opacity:1}.ita-ff-black-enabled .ita-kd-menuitem-hover{border:1px solid;font-weight:bold}.ita-ff-black-enabled.ita-kd-statusbar,.ita-ff-black-enabled .ita-kd-icon-button.ita-kd-icon-button-hover{border:1px solid}sentinel{}";
  C(lA, cA);
  C(mA, O);
  A = mA.prototype;
  A.Ec = function () {
    this.A && this.A.postMessage({ getCursorPosition: "all" });
    var a = Ko(document.activeElement);
    a = Xm(a, new P(document.body.scrollLeft, document.body.scrollTop));
    var b = this.D;
    a = new P(a.x + b.x, a.y + b.y);
    return new ms(a.x, a.y);
  };
  A.oc = function () {
    this.A && this.A.postMessage({ setFocus: "all" });
  };
  A.commitText = function (a, b) {
    this.A && this.A.postMessage({ commitText: [a, b] });
  };
  A.Aa = function (a) {
    var b = this.B.length;
    return this.B.slice(Math.max(0, b - a), b);
  };
  A.qb = function () {
    return null;
  };
  A.Pb = function () {
    return !0;
  };
  A.jb = function (a, b) {
    this.A && this.A.postMessage({ sendInputEvents: [a, b] });
  };
  C(oA, O);
  oA.prototype.G = function (a) {
    var b = a.target;
    b && b != fr && (b.frameElement && (b = b.frameElement), pA(this, a, b));
  };
  oA.prototype.F = function (a) {
    var b = this,
      c = gl(a.A);
    ro(function () {
      return qA(b, b.C, new Wk(c));
    }, 0);
  };
  oA.prototype.M = function () {
    O.prototype.M.call(this);
    try {
      H(this.B);
    } catch (a) {}
    delete this.A;
    delete this.D;
  };
  C(rA, I);
  A = rA.prototype;
  A.Zf = function (a, b, c) {
    if (!this.A) return !1;
    this.U = !1;
    a[this.H.bg] && this.ea();
    if (a[this.H.je]) {
      a = a[this.H.je];
      var d = this.B,
        e = gl(this.D),
        f = this.C;
      a &&
        bl(
          a,
          function (h, k) {
            switch (Number(k)) {
              case 1:
                d = h;
                break;
              case 5:
                e.tsbc = h;
                break;
              case 4:
                e.tlang = h;
                break;
              case 6:
                e.pun = h;
                break;
              case 7:
                e.mk = !h;
                break;
              case 9:
                e.ss = h;
                break;
              case 2:
                this.R = h;
                break;
              case 3:
                f = h;
                break;
              case 10:
                this.P = h || "";
                break;
              case 29:
                this.X = h || !1;
            }
          },
          this
        );
      sA(this, d, f, e);
    }
    this.U = !0;
    return !!c;
  };
  A.Xh = function (a) {
    if (!this.N) {
      if (this.U) {
        var b = {};
        switch (a.type) {
          case "sb":
            switch (a.F) {
              case mi:
                b[5] = a.value;
                break;
              case bi:
                b[4] = a.value;
                break;
              case "pun":
                b[6] = a.value;
            }
            this.D[a.F] = a.value;
            break;
          case "kmi":
            b[7] = !1;
            this.D.mk = !0;
            break;
          case "kma":
            b[7] = !0;
            this.D.mk = !1;
            break;
          case Db:
            (this.C = a.currInputToolActive),
              (this.B = a.currInputToolName),
              (this.P = a.prevInputToolName),
              (this.X = a.prevInputToolActive),
              (b[3] = this.C),
              (b[1] = this.B),
              (b[10] = this.P),
              (b[29] = this.X);
        }
        Vj(jl(this.H.fg, b));
      }
      tA(this);
    }
  };
  A.Dd = function (a) {
    (a = a.target) &&
      a != this.F &&
      Ps(a) &&
      (this.A.Id(this.F),
      this.F && (this.I ? this.F.setAttribute(ab, this.I) : this.F.removeAttribute(ab)),
      (this.F = a),
      (this.I = a.getAttribute(ab)),
      a.setAttribute(ab, "off"),
      this.A.gd(a));
  };
  A.Sc = function () {
    this.F && (this.I ? this.F.setAttribute(ab, this.I) : this.F.removeAttribute(ab));
    this.A.Ac();
    this.C = !1;
    this.Md();
  };
  A.Wh = function () {
    this.N = !0;
    this.B && this.C && this.A.Ac();
  };
  A.Qh = function () {
    this.N = !1;
    this.B && this.C && jA(this.A, this.B, this.D);
  };
  A.ig = function (a) {
    if (this.A) {
      var b = new mA(a, this.A);
      b.A && b.A.postMessage({ inputMode: [this.C ? this.B : "", this.D] });
      this.T.push(b);
      var c = this;
      a.onDisconnect.addListener(function () {
        c.A.Id([b]);
        gk(c.T, b);
        H(b);
      });
      this.A.gd([b]);
    }
  };
  A.Md = function () {
    this.K.setAttribute("input", this.C ? this.B : "");
    this.K.setAttribute("input_stat", JSON.stringify(this.D));
    var a = document.createEvent("Event");
    a.initEvent("syc", !0, !0);
    this.K.dispatchEvent(a);
  };
  A.dh = function (a) {
    T(this.T, function (b) {
      b.A && b.A.postMessage(jl("se" == a.type ? "onstage" : "offstage", "all"));
    });
  };
  A.M = function () {
    this.U = !1;
    window.clearInterval(this.ba);
    this.Sc();
    H(this.A);
    H(this.G);
    this.B = "";
    delete this.G;
    delete this.A;
    delete this.T;
    delete this.I;
    delete this.R;
    delete this.D;
    delete this.F;
    tn(this.K);
  };
  A.ke = function (a) {
    a = void 0 === a ? F.document : a;
    if ((a = a.activeElement)) {
      if (a.tagName.toUpperCase() == pa) {
        var b = Os(a);
        if (b && b.activeElement != a) {
          this.ke(b);
          return;
        }
      }
      Ps(a) && this.Dd(new K("aec", a));
    }
  };
  $z = !0;
  var uB = cn(document, oa);
  if (uB) {
    var vB = document.createEvent("Events");
    vB.initEvent("GOOGLE_ITA_KD", !0, !0);
    uB.dispatchEvent(vB);
  }
  var wB = new rA(),
    xB = cn(document, "GOOGLE_INPUT_NON_CHEXT_FLAG");
  xB && xB.IS_INPUT_ACTIVE && wB.Sc();
  if (window.jstiming) {
    window.jstiming.me = {};
    window.jstiming.Oh = 1;
    var yB = function (a, b, c) {
        var d = a.t[b],
          e = a.t.start;
        if (d && (e || c)) return (d = a.t[b][0]), void 0 != c ? (e = c) : (e = e[0]), Math.round(d - e);
      },
      zB = function (a, b, c) {
        var d = "";
        window.jstiming.srt && ((d += "&srt=" + window.jstiming.srt), delete window.jstiming.srt);
        window.jstiming.pt && ((d += "&tbsrt=" + window.jstiming.pt), delete window.jstiming.pt);
        try {
          window.external && window.external.tran
            ? (d += "&tran=" + window.external.tran)
            : window.gtbExternal && window.gtbExternal.tran
            ? (d += "&tran=" + window.gtbExternal.tran())
            : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran);
        } catch (y) {}
        var e = window.chrome;
        if (e && (e = e.loadTimes)) {
          e().wasFetchedViaSpdy && (d += "&p=s");
          if (e().wasNpnNegotiated) {
            d += "&npn=1";
            var f = e().npnNegotiatedProtocol;
            f && (d += "&npnv=" + (encodeURIComponent || escape)(f));
          }
          e().wasAlternateProtocolAvailable && (d += "&apa=1");
        }
        var h = a.t,
          k = h.start;
        e = [];
        f = [];
        for (var l in h)
          if (l != rh && 0 != l.indexOf("_")) {
            var m = h[l][1];
            m ? h[m] && f.push(l + "." + yB(a, l, h[m][0])) : k && e.push(l + "." + yB(a, l));
          }
        delete h.start;
        if (b) for (var n in b) d += "&" + n + "=" + b[n];
        (b = c) || (b = od == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
        return [
          b,
          "?v=3",
          "&s=" + (window.jstiming.sn || "i18n_input") + "&action=",
          a.name,
          f.length ? "&it=" + f.join(",") : "",
          d,
          "&rt=",
          e.join(",")
        ].join("");
      },
      AB = function (a, b, c) {
        a = zB(a, b, c);
        if (!a) return "";
        b = new Image();
        var d = window.jstiming.Oh++;
        window.jstiming.me[d] = b;
        b.onload = b.onerror = function () {
          window.jstiming && delete window.jstiming.me[d];
        };
        b.src = a;
        b = null;
        return a;
      };
    window.jstiming.report = function (a, b, c) {
      var d = document.visibilityState,
        e = "visibilitychange";
      d || ((d = document.webkitVisibilityState), (e = "webkitvisibilitychange"));
      if ("prerender" == d) {
        var f = !1,
          h = function () {
            if (!f) {
              b ? (b.prerender = "1") : (b = { prerender: "1" });
              if ("prerender" == (document.visibilityState || document.webkitVisibilityState)) var k = !1;
              else AB(a, b, c), (k = !0);
              k && ((f = !0), document.removeEventListener(e, h, !1));
            }
          };
        document.addEventListener(e, h, !1);
        return "";
      }
      return AB(a, b, c);
    };
  }
}).call(this);
