(function () {
  var $gwt_version = "2.7.0";
  var $wnd = window;
  /* our linker */ var $doc = $wnd.document;
  var $moduleName, $moduleBase;
  var $stats = $wnd.__gwtStatsEvent
    ? function (a) {
        $wnd.__gwtStatsEvent(a);
      }
    : null;
  var $strongName = "F83C777B2853A8D1DF5838704FEAFD1C";
  var aa = 2147483647,
    ba = { 3: 1, 5: 1 },
    ca = { 3: 1, 7: 1, 5: 1 },
    g = { 3: 1 },
    da = { 30: 1 },
    ea = { 17: 1 },
    fa = { 3: 1, 20: 1 },
    ga = { 3: 1, 15: 1, 11: 1, 18: 1 },
    _,
    ha,
    ia = {};
  function ja() {}
  function la(a) {
    function b() {}
    b.prototype = a || {};
    return new b();
  }
  function h() {}
  function m(a, b, c) {
    var d = ia[a],
      e = d instanceof Array ? d[0] : null;
    d && !e ? (_ = d) : ((_ = ia[a] = b ? la(ia[b]) : {}), (_.cM = c), (_.constructor = _), !b && (_.tM = ja));
    for (d = 3; d < arguments.length; ++d) arguments[d].prototype = _;
    e && (_.cZ = e);
  }
  function na() {}
  function oa(a, b) {
    return pa(a) ? a === b : ua(a) ? a.eQ(b) : (xa(a), a === b);
  }
  function ya(a) {
    return pa(a) ? n : ua(a) ? a.cZ : xa(a) ? a.cZ : za;
  }
  function Aa(a) {
    if (pa(a)) {
      Ba();
      var b = ":" + a,
        c = Ca[b];
      if (null != c) a = c;
      else {
        c = Ka[b];
        if (null == c) {
          var d, e, f;
          d = 0;
          e = a.length;
          f = e - 4;
          for (c = 0; c < f; )
            (d = a.charCodeAt(c + 3) + 31 * (a.charCodeAt(c + 2) + 31 * (a.charCodeAt(c + 1) + 31 * (a.charCodeAt(c) + 31 * d)))),
              (d = ~~d),
              (c += 4);
          for (; c < e; ) (d *= 31), (f = c++), (f = a.charCodeAt(f)), (d += f);
          c = ~~d;
        }
        256 == La && ((Ka = Ca), (Ca = {}), (La = 0));
        ++La;
        a = Ca[b] = c;
      }
    } else a = ua(a) ? a.hC() : (xa(a), a.$H || (a.$H = ++Ma));
    return a;
  }
  m(1, null, {}, na);
  _.eQ = function (a) {
    return this === a;
  };
  _.gC = function () {
    return this.cZ;
  };
  _.hC = function () {
    return this.$H || (this.$H = ++Ma);
  };
  _.tS = function () {
    var a = Na(ya(this)) + "@",
      b;
    b = (Aa(this) >>> 0).toString(16);
    return a + b;
  };
  _.toString = function () {
    return this.tS();
  };
  Oa = { 3: 1, 173: 1, 15: 1, 2: 1 };
  !Array.isArray &&
    (Array.isArray = function (a) {
      return "[object Array]" === Object.prototype.toString.call(a);
    });
  function ua(a) {
    return !Array.isArray(a) && a.tM === ja;
  }
  function q(a, b) {
    return null != a && ((pa(a) && !!Oa[b]) || (a.cM && !!a.cM[b]));
  }
  function xa(a) {
    return Array.isArray(a) && a.tM === ja;
  }
  function pa(a) {
    return "string" === typeof a;
  }
  function r(a) {
    return null == a ? null : a;
  }
  function Pa(a) {
    return ~~Math.max(Math.min(a, aa), -2147483648);
  }
  var Oa;
  function rb(a) {
    if (null == a.n)
      if (a.B()) {
        var b = a.c;
        b.C() ? (a.n = "[" + b.k) : b.B() ? (a.n = "[" + b.w()) : (a.n = "[L" + b.w() + ";");
        a.b = b.v() + "[]";
        a.j = b.A() + "[]";
      } else {
        var b = a.g,
          c = a.d,
          c = c.split("/");
        a.n = sb(".", [b, sb("$", c)]);
        a.b = sb(".", [b, sb(".", c)]);
        a.j = c[c.length - 1];
      }
  }
  function Na(a) {
    rb(a);
    return a.n;
  }
  function tb(a) {
    rb(a);
    return a.j;
  }
  function ub() {
    this.i = vb++;
    this.a = this.k = this.b = this.d = this.g = this.j = this.n = null;
  }
  function zb(a) {
    var b;
    b = new ub();
    b.n = "Class$" + (a ? "S" + a : "" + b.i);
    b.b = b.n;
    b.j = b.n;
    return b;
  }
  function u(a) {
    var b;
    b = zb(a);
    Fb(a, b);
    return b;
  }
  function Gb(a, b) {
    var c;
    c = zb(a);
    Fb(a, c);
    c.f = b ? 8 : 0;
    c.e = b;
    return c;
  }
  function Hb() {
    var a;
    a = zb(null);
    a.f = 2;
    return a;
  }
  function w(a, b) {
    var c = (a.a = a.a || []);
    return c[b] || (c[b] = a.u(b));
  }
  function sb(a, b) {
    for (var c = 0; !b[c] || "" == b[c]; ) c++;
    for (var d = b[c++]; c < b.length; c++) b[c] && "" != b[c] && (d += a + b[c]);
    return d;
  }
  function Fb(a, b) {
    if (a) {
      b.k = a;
      var c = b.C() ? null : ia[b.k];
      c ? (c.cZ = b) : (ia[a] = [b]);
    }
  }
  m(54, 1, {}, ub);
  _.u = function (a) {
    var b;
    b = new ub();
    b.f = 4;
    1 < a ? (b.c = w(this, a - 1)) : (b.c = this);
    return b;
  };
  _.v = function () {
    rb(this);
    return this.b;
  };
  _.w = function () {
    return Na(this);
  };
  _.A = function () {
    return tb(this);
  };
  _.B = function () {
    return 0 != (this.f & 4);
  };
  _.C = function () {
    return 0 != (this.f & 1);
  };
  _.tS = function () {
    return (0 != (this.f & 2) ? "interface " : 0 != (this.f & 1) ? "" : "class ") + (rb(this), this.n);
  };
  _.f = 0;
  _.i = 0;
  var vb = 1,
    Ib = u(1),
    za = u(0);
  u(54);
  m(5, 1, ba);
  _.q = function () {
    return this.e;
  };
  _.tS = function () {
    var a, b;
    a = Na(this.cZ);
    b = this.q();
    return null != b ? a + ": " + b : a;
  };
  u(5);
  function Jb(a) {
    this.e = a;
    Kb(this, this.e);
  }
  m(7, 5, ca, Jb);
  u(7);
  m(10, 7, ca);
  u(10);
  m(79, 10, ca);
  u(79);
  function Lb() {
    Lb = h;
    Mb = new na();
  }
  function Nb(a) {
    Lb();
    this.e = null;
    this.a = "";
    this.b = a;
    this.a = "";
  }
  m(26, 79, { 26: 1, 3: 1, 7: 1, 5: 1 }, Nb);
  _.q = function () {
    var a;
    null == this.c &&
      ((a = r(this.b) === r(Mb) ? null : this.b),
      (this.d = null == a ? "null" : null == a || pa(a) || a.tM === ja ? (pa(a) ? "String" : Na(ya(a))) : null == a ? null : a.name),
      (this.a = this.a + ": " + (null == a || pa(a) || a.tM === ja ? a + "" : null == a ? null : a.message)),
      (this.c = "(" + this.d + ") " + this.a));
    return this.c;
  };
  _.r = function () {
    return r(this.b) === r(Mb) ? null : this.b;
  };
  var Mb;
  u(26);
  m(149, 1, {});
  u(149);
  function Ob(a) {
    $wnd.setTimeout(function () {
      throw a;
    }, 0);
  }
  function Pb() {
    0 != Qb && (Qb = 0);
    Rb = -1;
  }
  var Qb = 0,
    Ma = 0,
    Sb = 0,
    Rb = -1;
  function Tb() {
    Tb = h;
    Ub = new ic();
  }
  function ic() {}
  function jc(a, b) {
    var c, d, e;
    d = 0;
    for (e = a.length; d < e; d++) {
      c = a[d];
      try {
        if (c[1]) {
          if (c[0].Fb()) {
            var f = b;
            !f && (f = []);
            f[f.length] = c;
            b = f;
          }
        } else c[0].Fb();
      } catch (k) {
        if (((k = kc(k)), q(k, 5))) (c = k), Ob(q(c, 26) ? c.r() : c);
        else throw lc(k);
      }
    }
    return b;
  }
  m(125, 149, {}, ic);
  var Ub;
  u(125);
  function mc() {
    mc = h;
    var a, b;
    b = !(Error.stackTraceLimit || "stack" in Error());
    a = new nc();
    oc = b ? new pc() : a;
  }
  function Kb(a, b) {
    mc();
    oc.s(a, b);
  }
  var oc;
  m(161, 1, {});
  u(161);
  function pc() {}
  m(87, 161, {}, pc);
  _.s = function (a, b) {
    var c = {};
    a.fnStack = [];
    for (var d = arguments.callee.caller; d; ) {
      mc();
      var e;
      if (!(e = d.name)) {
        e = d;
        var f = /function(?:\s+([\w$]+))?\s*\(/.exec(d.toString());
        e = e.name = (f && f[1]) || "anonymous";
      }
      a.fnStack.push(e);
      e = ":" + e;
      if ((f = c[e])) {
        var k, l;
        k = 0;
        for (l = f.length; k < l; k++) if (f[k] === d) return;
      }
      (f || (c[e] = [])).push(d);
      d = d.caller;
    }
  };
  u(87);
  function qc() {
    qc = h;
    Error.stackTraceLimit = 64;
  }
  m(162, 161, {});
  _.s = function (a, b) {
    function c(a) {
      if (!("stack" in a))
        try {
          throw a;
        } catch (b) {}
      return a;
    }
    var d;
    "string" == typeof b ? (d = c(Error(b))) : b instanceof Object && "stack" in b ? (d = b) : (d = c(Error()));
    a.__gwt$backingJsError = d;
  };
  u(162);
  function nc() {
    qc();
  }
  m(88, 162, {}, nc);
  u(88);
  function x(a) {
    if (!a) throw new rc();
  }
  function y(a, b) {
    if (0 > a || a >= b) throw new sc("Index: " + a + ", Size: " + b);
  }
  function tc(a) {
    if (null == a) throw new uc();
  }
  function vc(a, b) {
    if (0 > a || a > b) throw new sc("Index: " + a + ", Size: " + b);
  }
  function wc(a, b) {
    return null == a[b] ? null : String(a[b]);
  }
  function z(a, b) {
    return a.getAttribute(b) || "";
  }
  function C(a) {
    ((a = a.parentNode) && 1 == a.nodeType) || (a = null);
    return a;
  }
  function xc(a, b) {
    var c;
    c = a.slice(0, b);
    D(ya(a), a.cM, a.__elementTypeId$, a.__elementTypeCategory$, c);
    return c;
  }
  function yc(a, b) {
    var c;
    c = zc(0, b);
    D(ya(a), a.cM, a.__elementTypeId$, a.__elementTypeCategory$, c);
    return c;
  }
  function F(a, b, c, d) {
    var e = g;
    c = zc(d, c);
    D(w(a, 1), e, b, d, c);
    return c;
  }
  function D(a, b, c, d, e) {
    e.cZ = a;
    e.cM = b;
    e.tM = ja;
    e.__elementTypeId$ = c;
    e.__elementTypeCategory$ = d;
    return e;
  }
  function zc(a, b) {
    var c = Array(b),
      d;
    switch (a) {
      case 6:
        d = { l: 0, m: 0, h: 0 };
        break;
      case 7:
        d = 0;
        break;
      case 8:
        d = !1;
        break;
      default:
        return c;
    }
    for (var e = 0; e < b; ++e) c[e] = d;
    return c;
  }
  function lc(a) {
    return q(a, 26) && r(a.b) !== r((Lb(), Mb)) ? (r(a.b) === r(Mb) ? null : a.b) : a;
  }
  function kc(a) {
    var b;
    if (q(a, 5)) return a;
    b = a && a.__gwt$exception;
    if (!b && ((b = new Nb(a)), Kb(b, a), a && "object" == typeof a))
      try {
        a.__gwt$exception = b;
      } catch (c) {}
    return b;
  }
  function Ac() {
    var a;
    a = navigator.userAgent.toLowerCase();
    var b = $doc.documentMode;
    a =
      -1 != a.indexOf("webkit")
        ? "safari"
        : -1 != a.indexOf("msie") && 10 <= b && 11 > b
        ? "ie10"
        : -1 != a.indexOf("msie") && 9 <= b && 11 > b
        ? "ie9"
        : -1 != a.indexOf("msie") && 8 <= b && 11 > b
        ? "ie8"
        : -1 != a.indexOf("gecko") || 11 <= b
        ? "gecko1_8"
        : "unknown";
    if ("safari" !== a) throw new Bc(a);
  }
  m(42, 5, ba);
  u(42);
  m(12, 42, ba);
  u(12);
  function Bc(a) {
    this.e =
      "" +
      ("Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (safari) does not match the runtime user.agent value (" +
        a +
        ").\nExpect more errors.");
    Kb(this, this.e);
  }
  m(78, 12, ba, Bc);
  u(78);
  m(55, 1, {});
  _.tS = function () {
    return this.a;
  };
  u(55);
  function sc(a) {
    Jb.call(this, a);
  }
  m(21, 10, ca, sc);
  u(21);
  function Cc() {
    Kb(this, this.e);
  }
  m(139, 21, ca, Cc);
  u(139);
  function Wc() {
    Wc = h;
    Xc = new Yc(!1);
    Zc = new Yc(!0);
  }
  function Yc(a) {
    this.a = a;
  }
  m(32, 1, { 3: 1, 32: 1, 15: 1 }, Yc);
  _.t = function (a) {
    var b = this.a;
    return b == a.a ? 0 : b ? 1 : -1;
  };
  _.eQ = function (a) {
    return q(a, 32) && a.a == this.a;
  };
  _.hC = function () {
    return this.a ? 1231 : 1237;
  };
  _.tS = function () {
    return "" + this.a;
  };
  _.a = !1;
  var Xc, Zc;
  u(32);
  m(53, 1, { 3: 1, 53: 1 });
  u(53);
  m(11, 1, { 3: 1, 15: 1, 11: 1 });
  _.t = function (a) {
    return this.b - a.b;
  };
  _.eQ = function (a) {
    return this === a;
  };
  _.hC = function () {
    return this.$H || (this.$H = ++Ma);
  };
  _.tS = function () {
    return null != this.a ? this.a : "" + this.b;
  };
  _.b = 0;
  u(11);
  function $c(a) {
    Jb.call(this, a);
  }
  m(61, 10, ca, $c);
  u(61);
  function ad() {
    Kb(this, this.e);
  }
  m(136, 10, ca, ad);
  u(136);
  function bd(a) {
    this.a = a;
  }
  function cd(a) {
    var b, c;
    return -129 < a && 128 > a ? ((b = a + 128), (c = (dd(), ed)[b]), !c && (c = ed[b] = new bd(a)), c) : new bd(a);
  }
  m(25, 53, { 3: 1, 15: 1, 25: 1, 53: 1 }, bd);
  _.t = function (a) {
    var b = this.a;
    a = a.a;
    return b < a ? -1 : b > a ? 1 : 0;
  };
  _.eQ = function (a) {
    return q(a, 25) && a.a == this.a;
  };
  _.hC = function () {
    return this.a;
  };
  _.tS = function () {
    return "" + this.a;
  };
  _.a = 0;
  var fd = u(25);
  function dd() {
    dd = h;
    ed = F(fd, 25, 256, 0);
  }
  var ed;
  function gd(a, b) {
    return a < b ? a : b;
  }
  function uc() {
    Kb(this, this.e);
  }
  function hd(a) {
    Jb.call(this, a);
  }
  m(48, 10, ca, uc, hd);
  u(48);
  function G(a, b) {
    return null == b ? !1 : a == b ? !0 : a.length == b.length && a.toLowerCase() == b.toLowerCase();
  }
  function id(a) {
    var b = (160).toString(16),
      b = "\\u" + "0000".substring(b.length) + b;
    return a.replace(RegExp(b, "g"), String.fromCharCode(32));
  }
  function jd(a) {
    var b;
    b = kd("");
    return a.replace(RegExp("'", "g"), b);
  }
  function ld(a, b) {
    var c;
    c = kd("");
    return a.replace(RegExp(b), c);
  }
  function md(a, b) {
    for (var c = RegExp(b, "g"), d = [], e = 0, f = a, k = null; ; ) {
      var l = c.exec(f);
      if (null == l || "" == f) {
        d[e] = f;
        break;
      } else
        (d[e] = f.substring(0, l.index)),
          (f = f.substring(l.index + l[0].length, f.length)),
          (c.lastIndex = 0),
          k == f && ((d[e] = f.substring(0, 1)), (f = f.substring(1))),
          (k = f),
          e++;
    }
    if (0 < a.length) {
      for (c = d.length; 0 < c && "" == d[c - 1]; ) --c;
      c < d.length && d.splice(c, d.length - c);
    }
    c = F(n, 2, d.length, 4);
    for (e = 0; e < d.length; ++e) c[e] = d[e];
    return c;
  }
  function nd(a, b) {
    return a.substr(b, a.length - b);
  }
  function od(a) {
    return 0 == a.length || (" " < a[0] && " " < a[a.length - 1]) ? a : a.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, "");
  }
  function kd(a) {
    var b;
    for (b = 0; 0 <= (b = a.indexOf("\\", b)); )
      36 == a.charCodeAt(b + 1) ? (a = a.substr(0, b) + "$" + nd(a, ++b)) : (a = a.substr(0, b) + nd(a, ++b));
    return a;
  }
  var n = u(2);
  function Ba() {
    Ba = h;
    Ka = {};
    Ca = {};
  }
  var Ka,
    La = 0,
    Ca;
  function pd() {
    this.a = "";
  }
  function qd(a) {
    this.a = a;
  }
  m(33, 55, { 173: 1 }, pd, qd);
  u(33);
  function rd(a) {
    Jb.call(this, a);
  }
  m(37, 10, ca, rd);
  u(37);
  function sd(a, b) {
    var c, d, e;
    tc(b);
    c = !1;
    for (e = b.D(); e.Q(); ) (d = e.R()), (c |= a.F(d));
    return c;
  }
  function td(a) {
    var b, c, d, e;
    e = new qd("[");
    b = !1;
    for (d = a.D(); d.Q(); ) (c = d.R()), b ? (e.a += ", ") : (b = !0), (e.a += c === a ? "(this Collection)" : "" + c);
    e.a += "]";
    return e.a;
  }
  m(164, 1, {});
  _.F = function () {
    throw new rd("Add not supported on this collection");
  };
  _.G = function (a) {
    return sd(this, a);
  };
  _.H = function (a) {
    a: {
      var b, c;
      for (c = this.D(); c.Q(); )
        if (((b = c.R()), r(a) === r(b) || (null != a && oa(a, b)))) {
          a = !0;
          break a;
        }
      a = !1;
    }
    return a;
  };
  _.I = function () {
    return 0 == this.J();
  };
  _.K = function () {
    return this.L(F(Ib, 1, this.J(), 3));
  };
  _.L = function (a) {
    var b, c, d;
    d = this.J();
    a.length < d && (a = yc(a, d));
    c = this.D();
    for (b = 0; b < d; ++b) a[b] = c.R();
    a.length > d && (a[d] = null);
    return a;
  };
  _.tS = function () {
    return td(this);
  };
  u(164);
  function ud(a, b) {
    var c, d, e;
    c = b.W();
    e = b.X();
    d = a.P(c);
    return !(r(e) === r(d) || (null != e && oa(e, d))) || (null == d && !a.N(c)) ? !1 : !0;
  }
  function vd(a, b) {
    var c, d, e;
    for (d = a.O().D(); d.Q(); ) if (((c = d.R()), (e = c.W()), r(b) === r(e) || (null != b && oa(b, e)))) return c;
    return null;
  }
  function wd(a, b) {
    return b === a ? "(this Map)" : "" + b;
  }
  function xd(a) {
    return a ? a.X() : null;
  }
  m(163, 1, da);
  _.M = function (a) {
    return ud(this, a);
  };
  _.N = function (a) {
    return !!vd(this, a);
  };
  _.eQ = function (a) {
    var b;
    if (a === this) return !0;
    if (!q(a, 30) || this.J() != a.J()) return !1;
    for (b = a.O().D(); b.Q(); ) if (((a = b.R()), !this.M(a))) return !1;
    return !0;
  };
  _.P = function (a) {
    return xd(vd(this, a));
  };
  _.hC = function () {
    return Fd(this.O());
  };
  _.J = function () {
    return this.O().J();
  };
  _.tS = function () {
    var a, b, c, d;
    d = new qd("{");
    a = !1;
    for (c = this.O().D(); c.Q(); )
      (b = c.R()), a ? (d.a += ", ") : (a = !0), (d.a += wd(this, b.W())), (d.a += "\x3d"), (b = wd(this, b.X())), (d.a += b);
    d.a += "}";
    return d.a;
  };
  u(163);
  function Hd(a, b) {
    return pa(b) ? H(a, b) : !!Pd(a.a, b);
  }
  function Qd(a, b) {
    return pa(b) ? I(a, b) : xd(Pd(a.a, b));
  }
  function I(a, b) {
    return null == b ? xd(Pd(a.a, null)) : a.c.db(b);
  }
  function H(a, b) {
    return null == b ? !!Pd(a.a, null) : void 0 !== a.c.db(b);
  }
  function fe(a, b, c) {
    return pa(b) ? J(a, b, c) : ge(a.a, b, c);
  }
  function J(a, b, c) {
    return null == b ? ge(a.a, null, c) : a.c.gb(b, c);
  }
  function Fe(a) {
    Ge();
    a.a = He.ab();
    a.a.b = a;
    a.c = He.bb();
    a.c.b = a;
    a.b = 0;
    Ie(a);
  }
  m(89, 163, da);
  _.N = function (a) {
    return Hd(this, a);
  };
  _.O = function () {
    return new Je(this);
  };
  _.P = function (a) {
    return Qd(this, a);
  };
  _.J = function () {
    return this.b;
  };
  _.b = 0;
  u(89);
  m(165, 164, ea);
  _.eQ = function (a) {
    if (a === this) a = !0;
    else if (q(a, 17) && a.J() == this.J())
      a: {
        var b;
        tc(a);
        for (b = a.D(); b.Q(); )
          if (((a = b.R()), !this.H(a))) {
            a = !1;
            break a;
          }
        a = !0;
      }
    else a = !1;
    return a;
  };
  _.hC = function () {
    return Fd(this);
  };
  u(165);
  function Je(a) {
    this.a = a;
  }
  m(57, 165, ea, Je);
  _.H = function (a) {
    return q(a, 16) ? ud(this.a, a) : !1;
  };
  _.D = function () {
    return new Ke(this.a);
  };
  _.J = function () {
    return this.a.b;
  };
  u(57);
  function Le(a) {
    if (a.a.Q()) return !0;
    if (a.a != a.b) return !1;
    a.a = a.c.a.$();
    return a.a.Q();
  }
  function Me(a) {
    if (a._gwt_modCount != a.c._gwt_modCount) throw new Ne();
    return x(Le(a)), a.a.R();
  }
  function Ke(a) {
    this.c = a;
    this.a = this.b = this.c.c.$();
    this._gwt_modCount = a._gwt_modCount;
  }
  m(58, 1, {}, Ke);
  _.Q = function () {
    return Le(this);
  };
  _.R = function () {
    return Me(this);
  };
  u(58);
  m(166, 164, { 20: 1 });
  _.S = function () {
    throw new rd("Add not supported on this list");
  };
  _.F = function (a) {
    this.S(this.J(), a);
    return !0;
  };
  _.eQ = function (a) {
    var b, c, d;
    if (a === this) return !0;
    if (!q(a, 20) || this.J() != a.J()) return !1;
    d = a.D();
    for (b = this.D(); b.Q(); ) if (((a = b.R()), (c = d.R()), !(r(a) === r(c) || (null != a && oa(a, c))))) return !1;
    return !0;
  };
  _.hC = function () {
    var a, b, c;
    c = 1;
    for (b = this.D(); b.Q(); ) (a = b.R()), (c = 31 * c + (null != a ? Aa(a) : 0)), (c = ~~c);
    return c;
  };
  _.D = function () {
    return new K(this);
  };
  _.U = function () {
    throw new rd("Remove not supported on this list");
  };
  u(166);
  function Oe(a) {
    if (-1 == a.c) throw new ad();
    a.d.U(a.c);
    a.b = a.c;
    a.c = -1;
  }
  function K(a) {
    this.d = a;
  }
  m(4, 1, {}, K);
  _.Q = function () {
    return this.b < this.d.J();
  };
  _.R = function () {
    return x(this.b < this.d.J()), this.d.T((this.c = this.b++));
  };
  _.V = function () {
    Oe(this);
  };
  _.b = 0;
  _.c = -1;
  u(4);
  function Pe(a, b) {
    this.d = this.a = a;
    vc(b, a.b.length);
    this.b = b;
  }
  m(27, 4, {}, Pe);
  u(27);
  function Qe(a, b) {
    y(b, a.b);
    return L(a.c, a.a + b);
  }
  function Re(a, b, c) {
    var d = a.b.length;
    if (0 > b) throw new sc("fromIndex: " + b + " \x3c 0");
    if (c > d) throw new sc("toIndex: " + c + " \x3e size " + d);
    if (b > c) throw new $c("fromIndex: " + b + " \x3e toIndex: " + c);
    this.c = a;
    this.a = b;
    this.b = c - b;
  }
  m(47, 166, { 20: 1 }, Re);
  _.S = function (a, b) {
    vc(a, this.b);
    Se(this.c, this.a + a, b);
    ++this.b;
  };
  _.T = function (a) {
    return Qe(this, a);
  };
  _.U = function (a) {
    y(a, this.b);
    a = this.c.U(this.a + a);
    --this.b;
    return a;
  };
  _.J = function () {
    return this.b;
  };
  _.a = 0;
  _.b = 0;
  u(47);
  function Te(a) {
    a = new Ke(new Je(a.a).a);
    return new Ue(a);
  }
  function Ve(a) {
    this.a = a;
  }
  m(45, 165, ea, Ve);
  _.H = function (a) {
    return Hd(this.a, a);
  };
  _.D = function () {
    return Te(this);
  };
  _.J = function () {
    return this.a.b;
  };
  u(45);
  function Ue(a) {
    this.a = a;
  }
  m(90, 1, {}, Ue);
  _.Q = function () {
    return Le(this.a);
  };
  _.R = function () {
    return Me(this.a).W();
  };
  u(90);
  function We(a, b) {
    var c;
    c = a.d;
    a.d = b;
    return c;
  }
  m(34, 1, { 34: 1, 16: 1 });
  _.eQ = function (a) {
    return q(a, 16) ? Xe(this.c, a.W()) && Xe(this.d, a.X()) : !1;
  };
  _.W = function () {
    return this.c;
  };
  _.X = function () {
    return this.d;
  };
  _.hC = function () {
    return Ye(this.c) ^ Ye(this.d);
  };
  _.Y = function (a) {
    return We(this, a);
  };
  _.tS = function () {
    return this.c + "\x3d" + this.d;
  };
  u(34);
  function Ze(a, b) {
    this.c = a;
    this.d = b;
  }
  m(35, 34, { 34: 1, 35: 1, 16: 1 }, Ze);
  u(35);
  m(169, 1, { 16: 1 });
  _.eQ = function (a) {
    return q(a, 16) ? Xe(this.W(), a.W()) && Xe(this.X(), a.X()) : !1;
  };
  _.hC = function () {
    return Ye(this.W()) ^ Ye(this.X());
  };
  _.tS = function () {
    return this.W() + "\x3d" + this.X();
  };
  u(169);
  function $e(a, b) {
    var c;
    c = af(a, b.W());
    return !!c && Xe(c.d, b.X());
  }
  m(172, 163, da);
  _.M = function (a) {
    return $e(this, a);
  };
  _.N = function (a) {
    return !!af(this, a);
  };
  _.O = function () {
    return new bf(this);
  };
  _.P = function (a) {
    return xd(af(this, a));
  };
  u(172);
  function bf(a) {
    this.a = a;
  }
  m(76, 165, ea, bf);
  _.H = function (a) {
    return q(a, 16) && $e(this.a, a);
  };
  _.D = function () {
    return new cf(this.a);
  };
  _.J = function () {
    return this.a.b;
  };
  u(76);
  function df(a) {
    a = new cf(new ef(a.a).a);
    return new ff(a);
  }
  function gf(a) {
    this.a = a;
  }
  m(144, 165, ea, gf);
  _.H = function (a) {
    return !!af(this.a, a);
  };
  _.D = function () {
    return df(this);
  };
  _.J = function () {
    return this.a.b;
  };
  u(144);
  function ff(a) {
    this.a = a;
  }
  m(145, 1, {}, ff);
  _.Q = function () {
    return this.a.a.Q();
  };
  _.R = function () {
    return this.a.a.R().W();
  };
  u(145);
  function hf(a, b) {
    var c;
    c = jf(a, b);
    try {
      return x(c.b != c.d.c), (c.c = c.b), (c.b = c.b.a), ++c.a, c.c.c;
    } catch (d) {
      d = kc(d);
      if (q(d, 38)) throw new sc("Can't get element " + b);
      throw lc(d);
    }
  }
  m(167, 166, { 20: 1 });
  _.S = function (a, b) {
    var c;
    c = jf(this, a);
    kf(c.d, b, c.b.b, c.b);
    ++c.a;
    c.c = null;
  };
  _.T = function (a) {
    return hf(this, a);
  };
  _.D = function () {
    return jf(this, 0);
  };
  _.U = function (a) {
    var b, c;
    b = jf(this, a);
    try {
      return (c = (x(b.b != b.d.c), (b.c = b.b), (b.b = b.b.a), ++b.a, b.c.c)), lf(b), c;
    } catch (d) {
      d = kc(d);
      if (q(d, 38)) throw new sc("Can't remove element " + a);
      throw lc(d);
    }
  };
  u(167);
  function Se(a, b, c) {
    vc(b, a.b.length);
    a.b.splice(b, 0, c);
  }
  function M(a, b) {
    a.b[a.b.length] = b;
    return !0;
  }
  function mf(a, b) {
    var c;
    c = b.K();
    if (0 == c.length) return !1;
    var d = c,
      e = a.b,
      f = a.b.length;
    c = c.length;
    var k = 0;
    d === e && ((d = d.slice(k, k + c)), (k = 0));
    for (var l = k, k = k + c; l < k; ) {
      var p = Math.min(l + 1e4, k);
      c = p - l;
      Array.prototype.splice.apply(e, [f, 0].concat(d.slice(l, p)));
      l = p;
      f += c;
    }
    return !0;
  }
  function L(a, b) {
    y(b, a.b.length);
    return a.b[b];
  }
  function nf(a, b) {
    for (var c = 0; c < a.b.length; ++c) if (Xe(b, a.b[c])) return c;
    return -1;
  }
  function of(a, b) {
    var c;
    c = (y(b, a.b.length), a.b[b]);
    a.b.splice(b, 1);
    return c;
  }
  function pf(a, b) {
    var c, d;
    d = a.b.length;
    b.length < d && (b = yc(b, d));
    for (c = 0; c < d; ++c) b[c] = a.b[c];
    b.length > d && (b[d] = null);
    return b;
  }
  function N() {
    this.b = F(Ib, 1, 0, 3);
  }
  m(6, 166, fa, N);
  _.S = function (a, b) {
    Se(this, a, b);
  };
  _.F = function (a) {
    return M(this, a);
  };
  _.G = function (a) {
    return mf(this, a);
  };
  _.H = function (a) {
    return -1 != nf(this, a);
  };
  _.T = function (a) {
    return L(this, a);
  };
  _.I = function () {
    return 0 == this.b.length;
  };
  _.U = function (a) {
    return of(this, a);
  };
  _.J = function () {
    return this.b.length;
  };
  _.K = function () {
    return xc(this.b, this.b.length);
  };
  _.L = function (a) {
    return pf(this, a);
  };
  u(6);
  function Fd(a) {
    var b, c;
    c = 0;
    for (b = a.D(); b.Q(); ) (a = b.R()), (c += null != a ? Aa(a) : 0), (c = ~~c);
    return c;
  }
  function qf() {
    qf = h;
  }
  function rf(a, b) {
    tc(a);
    tc(b);
    return pa(a) ? (a == b ? 0 : a < b ? -1 : 1) : a.t(b);
  }
  m(148, 1, {}, function () {});
  u(148);
  function Ie(a) {
    a._gwt_modCount = (a._gwt_modCount | 0) + 1;
  }
  function Ne() {
    Kb(this, this.e);
  }
  m(146, 10, ca, Ne);
  u(146);
  function sf() {
    Kb(this, this.e);
  }
  m(72, 10, ca, sf);
  u(72);
  function tf(a, b) {
    return uf(a.a, b) ? a.b[b.b] : null;
  }
  function vf(a, b, c) {
    wf(a.a, b);
    xf(a, b.b, c);
  }
  function xf(a, b, c) {
    var d;
    d = a.b[b];
    a.b[b] = c;
    return d;
  }
  function yf(a) {
    var b;
    this.a = ((b = a.e && a.e()), new zf(b, yc(b, b.length)));
    this.b = F(Ib, 1, this.a.a.length, 3);
  }
  m(126, 163, da, yf);
  _.N = function (a) {
    return uf(this.a, a);
  };
  _.O = function () {
    return new Af(this);
  };
  _.P = function (a) {
    return tf(this, a);
  };
  _.J = function () {
    return this.a.c;
  };
  u(126);
  function Af(a) {
    this.a = a;
  }
  m(68, 165, ea, Af);
  _.H = function (a) {
    return q(a, 16) ? ud(this.a, a) : !1;
  };
  _.D = function () {
    return new Bf(this.a);
  };
  _.J = function () {
    return this.a.a.c;
  };
  u(68);
  function Bf(a) {
    this.c = a;
    this.a = new Cf(this.c.a);
  }
  m(69, 1, {}, Bf);
  _.Q = function () {
    return Df(this.a);
  };
  _.R = function () {
    return (this.b = Ef(this.a)), new Ff(this.c, this.b);
  };
  u(69);
  function Ff(a, b) {
    this.b = a;
    this.a = b;
  }
  m(70, 169, { 16: 1 }, Ff);
  _.W = function () {
    return this.a;
  };
  _.X = function () {
    return this.b.b[this.a.b];
  };
  _.Y = function (a) {
    return xf(this.b, this.a.b, a);
  };
  u(70);
  m(171, 165, ea);
  u(171);
  function wf(a, b) {
    var c;
    tc(b);
    c = b.b;
    return a.b[c] ? !1 : ((a.b[c] = b), ++a.c, !0);
  }
  function uf(a, b) {
    return q(b, 11) && !!b && a.b[b.b] == b;
  }
  function zf(a, b) {
    this.a = a;
    this.b = b;
    this.c = 0;
  }
  m(137, 171, ea, zf);
  _.F = function (a) {
    return wf(this, a);
  };
  _.H = function (a) {
    return uf(this, a);
  };
  _.D = function () {
    return new Cf(this);
  };
  _.J = function () {
    return this.c;
  };
  _.c = 0;
  u(137);
  function Gf(a) {
    var b;
    ++a.a;
    for (b = a.c.a.length; a.a < b && !a.c.b[a.a]; ++a.a);
  }
  function Df(a) {
    return a.a < a.c.a.length;
  }
  function Ef(a) {
    return x(a.a < a.c.a.length), (a.b = a.a), Gf(a), a.c.b[a.b];
  }
  function Cf(a) {
    this.c = a;
    Gf(this);
  }
  m(71, 1, {}, Cf);
  _.Q = function () {
    return Df(this);
  };
  _.R = function () {
    return Ef(this);
  };
  _.a = -1;
  _.b = -1;
  u(71);
  function Hf(a, b) {
    return r(a) === r(b) || (null != a && oa(a, b));
  }
  function If() {
    Fe(this);
  }
  m(13, 89, { 3: 1, 30: 1 }, If);
  u(13);
  function O(a, b) {
    return null == fe(a.a, b, a);
  }
  function P(a, b) {
    return Hd(a.a, b);
  }
  function Jf() {
    this.a = new If();
  }
  m(14, 165, { 3: 1, 17: 1 }, Jf);
  _.F = function (a) {
    return O(this, a);
  };
  _.H = function (a) {
    return P(this, a);
  };
  _.I = function () {
    return 0 == this.a.b;
  };
  _.D = function () {
    return Te(new Ve(this.a));
  };
  _.J = function () {
    return this.a.b;
  };
  _.tS = function () {
    return td(new Ve(this.a));
  };
  u(14);
  function Pd(a, b) {
    var c, d, e, f;
    c = null == b ? "0" : "" + ~~Aa(b);
    d = a.a[c] || [];
    e = 0;
    for (f = d.length; e < f; ++e) if (((c = d[e]), Hf(b, c.W()))) return c;
    return null;
  }
  function ge(a, b, c) {
    var d, e, f, k;
    d = null == b ? "0" : "" + ~~Aa(b);
    e = a.a;
    d = e[d] || (e[d] = []);
    f = 0;
    for (k = d.length; f < k; ++f) if (((e = d[f]), Hf(b, e.W()))) return e.Y(c);
    d[d.length] = new Ze(b, c);
    a = a.b;
    ++a.b;
    Ie(a);
    return null;
  }
  function Kf() {
    this.a = this.Z();
  }
  m(67, 1, {}, Kf);
  _.Z = function () {
    return Object.create(null);
  };
  _.$ = function () {
    return new Lf(this);
  };
  u(67);
  function Mf(a) {
    if (a.c < a.a.length) return !0;
    if (a.b < a.d.length - 1) {
      var b = a.d[++a.b];
      a.a = a.f.a[b];
      a.c = 0;
      return !0;
    }
    return !1;
  }
  function Lf(a) {
    this.f = a;
    this.d = Object.getOwnPropertyNames(this.f.a);
    this.a = F(Nf, 16, 0, 0);
  }
  m(124, 1, {}, Lf);
  _.Q = function () {
    return Mf(this);
  };
  _.R = function () {
    return x(Mf(this)), (this.e = this.a[this.c++]), this.e;
  };
  _.b = -1;
  _.c = 0;
  _.e = null;
  u(124);
  function Of() {
    Kf.call(this);
  }
  m(122, 67, {}, Of);
  _.Z = function () {
    return {};
  };
  _.$ = function () {
    var a = this._(),
      b = this.a,
      c;
    for (c in b) if (c == parseInt(c, 10)) for (var d = b[c], e = 0, f = d.length; e < f; ++e) a.F(d[e]);
    return a.D();
  };
  _._ = function () {
    return new Pf(this);
  };
  u(122);
  function Pf(a) {
    this.a = a;
    N.call(this);
  }
  m(123, 6, fa, Pf);
  _.U = function (a) {
    a = of(this, a);
    a: {
      var b = this.a,
        c = a.W(),
        d,
        e,
        f,
        k;
      f = null == c ? "0" : "" + ~~Aa(c);
      d = b.a[f] || [];
      for (k = 0; k < d.length; k++)
        if (((e = d[k]), Hf(c, e.W()))) {
          1 == d.length ? delete b.a[f] : d.splice(k, 1);
          b = b.b;
          --b.b;
          Ie(b);
          e.X();
          break a;
        }
    }
    return a;
  };
  u(123);
  function Rf() {}
  m(119, 1, {}, Rf);
  _.ab = function () {
    return new Kf();
  };
  _.bb = function () {
    return new Xf();
  };
  u(119);
  function Ge() {
    Ge = h;
    var a, b;
    if ((b = Object.create && Object.getOwnPropertyNames))
      (b = Object.create(null)),
        void 0 !== b.__proto__ || 0 != Object.getOwnPropertyNames(b).length
          ? (b = !1)
          : ((b.__proto__ = 42), (b = 42 !== b.__proto__ ? !1 : !0));
    He = b ? (((a = Object.create(null)), (a.__proto__ = 42), 0 == Object.getOwnPropertyNames(a).length) ? new Zf() : new Rf()) : new Kg();
  }
  var He;
  function Zf() {}
  m(121, 119, {}, Zf);
  _.bb = function () {
    return new Lg();
  };
  u(121);
  function Kg() {}
  m(120, 119, {}, Kg);
  _.ab = function () {
    return new Of();
  };
  _.bb = function () {
    return new Mg();
  };
  u(120);
  function Xg(a, b, c) {
    var d;
    d = a.a[b];
    if (void 0 === d) {
      var e = a.b;
      ++e.b;
      Ie(e);
    }
    a.a[b] = void 0 === c ? null : c;
    return d;
  }
  function Yg(a, b) {
    var c;
    c = a.a[b];
    if (void 0 !== c) {
      delete a.a[b];
      var d = a.b;
      --d.b;
      Ie(d);
    }
    return c;
  }
  function Xf() {
    this.a = this.cb();
  }
  m(49, 1, {}, Xf);
  _.cb = function () {
    return Object.create(null);
  };
  _.$ = function () {
    var a;
    a = this.eb();
    return new Zg(this, a);
  };
  _.db = function (a) {
    return this.a[a];
  };
  _.eb = function () {
    return Object.getOwnPropertyNames(this.a);
  };
  _.fb = function (a) {
    return new $g(this, a);
  };
  _.gb = function (a, b) {
    return Xg(this, a, b);
  };
  _.hb = function (a) {
    return Yg(this, a);
  };
  u(49);
  function Zg(a, b) {
    this.b = a;
    this.c = b;
  }
  m(105, 1, {}, Zg);
  _.Q = function () {
    return this.a < this.c.length;
  };
  _.R = function () {
    return x(this.a < this.c.length), new $g(this.b, this.c[this.a++]);
  };
  _.a = 0;
  u(105);
  function $g(a, b) {
    this.a = a;
    this.b = b;
  }
  m(62, 169, { 16: 1 }, $g);
  _.W = function () {
    return this.b;
  };
  _.X = function () {
    return this.a.db(this.b);
  };
  _.Y = function (a) {
    return this.a.gb(this.b, a);
  };
  u(62);
  function Mg() {
    Xf.call(this);
  }
  m(102, 49, {}, Mg);
  _.cb = function () {
    return {};
  };
  _.$ = function () {
    var a = this.ib(),
      b;
    for (b in this.a)
      if (58 == b.charCodeAt(0)) {
        var c = this.fb(b.substring(1));
        a.F(c);
      }
    return a.D();
  };
  _.db = function (a) {
    return this.a[":" + a];
  };
  _.ib = function () {
    return new ah(this);
  };
  _.gb = function (a, b) {
    return Xg(this, ":" + a, b);
  };
  _.hb = function (a) {
    return Yg(this, ":" + a);
  };
  u(102);
  function ah(a) {
    this.a = a;
    N.call(this);
  }
  m(104, 6, fa, ah);
  _.U = function (a) {
    var b;
    return (b = of(this, a)), Yg(this.a, ":" + b.W()), b;
  };
  u(104);
  function Lg() {
    Xf.call(this);
  }
  m(103, 49, {}, Lg);
  _.eb = function () {
    var a;
    a = Object.getOwnPropertyNames(this.a);
    void 0 !== this.a.__proto__ && (a[a.length] = "__proto__");
    return a;
  };
  u(103);
  function bh(a, b) {
    kf(a, b, a.c.b, a.c);
    return !0;
  }
  function kf(a, b, c, d) {
    var e;
    e = new ch();
    e.c = b;
    e.b = c;
    e.a = d;
    d.b = c.a = e;
    ++a.b;
  }
  function jf(a, b) {
    var c, d;
    vc(b, a.b);
    if (b >= a.b >> 1) for (d = a.c, c = a.b; c > b; --c) d = d.b;
    else for (d = a.a.a, c = 0; c < b; ++c) d = d.a;
    return new dh(a, b, d);
  }
  function eh() {
    this.a = new ch();
    this.c = new ch();
    this.a.a = this.c;
    this.c.b = this.a;
    this.a.b = this.c.a = null;
    this.b = 0;
  }
  m(59, 167, fa, eh);
  _.F = function (a) {
    return bh(this, a);
  };
  _.J = function () {
    return this.b;
  };
  _.b = 0;
  u(59);
  function lf(a) {
    var b;
    if (!a.c) throw new ad();
    b = a.c.a;
    var c = a.d,
      d = a.c;
    d.a.b = d.b;
    d.b.a = d.a;
    d.a = d.b = null;
    d.c = null;
    --c.b;
    a.b == a.c ? (a.b = b) : --a.a;
    a.c = null;
  }
  function dh(a, b, c) {
    this.d = a;
    this.b = c;
    this.a = b;
  }
  m(91, 1, {}, dh);
  _.Q = function () {
    return this.b != this.d.c;
  };
  _.R = function () {
    return x(this.b != this.d.c), (this.c = this.b), (this.b = this.b.a), ++this.a, this.c.c;
  };
  _.V = function () {
    lf(this);
  };
  _.a = 0;
  _.c = null;
  u(91);
  function ch() {}
  m(46, 1, {}, ch);
  u(46);
  var Nf = Hb();
  function rc() {
    Kb(this, this.e);
  }
  m(38, 10, { 3: 1, 7: 1, 5: 1, 38: 1 }, rc);
  u(38);
  function Xe(a, b) {
    return r(a) === r(b) || (null != a && oa(a, b));
  }
  function Ye(a) {
    return null != a ? Aa(a) : 0;
  }
  function fh(a, b) {
    if (0 > a || a >= b) throw new Cc();
  }
  m(127, 166, fa);
  _.S = function (a, b) {
    fh(a, this.a.b.length + 1);
    Se(this.a, a, b);
  };
  _.F = function (a) {
    return M(this.a, a);
  };
  _.G = function (a) {
    return mf(this.a, a);
  };
  _.H = function (a) {
    return -1 != nf(this.a, a);
  };
  _.T = function (a) {
    return fh(a, this.a.b.length), L(this.a, a);
  };
  _.I = function () {
    return 0 == this.a.b.length;
  };
  _.D = function () {
    return new K(this.a);
  };
  _.U = function (a) {
    return fh(a, this.a.b.length), this.a.U(a);
  };
  _.J = function () {
    return this.a.b.length;
  };
  _.K = function () {
    var a = this.a;
    return xc(a.b, a.b.length);
  };
  _.L = function (a) {
    return pf(this.a, a);
  };
  _.tS = function () {
    return td(this.a);
  };
  u(127);
  function gh() {
    this.a = new N();
  }
  m(128, 127, fa, gh);
  u(128);
  function af(a, b) {
    var c, d;
    for (d = a.a; d; ) {
      c = rf(b, d.c);
      if (0 == c) return d;
      c = 0 > c ? 0 : 1;
      d = d.a[c];
    }
    return null;
  }
  function hh(a, b, c, d, e, f, k, l) {
    var p;
    if (d) {
      (p = d.a[0]) && hh(a, b, c, p, e, f, k, l);
      p = d.c;
      var t, v;
      (c.jb() && ((t = rf(p, e)), 0 > t || (!f && 0 == t))) || (c.kb() && ((v = rf(p, k)), 0 < v || (!l && 0 == v))) || b.F(d);
      (d = d.a[1]) && hh(a, b, c, d, e, f, k, l);
    }
  }
  function ih(a, b, c, d) {
    var e, f;
    if (b) {
      e = rf(c.c, b.c);
      if (0 == e) return (d.d = We(b, c.d)), (d.b = !0), b;
      e = 0 > e ? 0 : 1;
      b.a[e] = ih(a, b.a[e], c, d);
      jh(b.a[e]) &&
        (jh(b.a[1 - e])
          ? ((b.b = !0), (b.a[0].b = !1), (b.a[1].b = !1))
          : jh(b.a[e].a[e])
          ? (b = kh(b, 1 - e))
          : jh(b.a[e].a[1 - e]) && (b = ((f = 1 - (1 - e)), (b.a[f] = kh(b.a[f], f)), kh(b, 1 - e))));
    } else return c;
    return b;
  }
  function jh(a) {
    return !!a && a.b;
  }
  function kh(a, b) {
    var c, d;
    c = 1 - b;
    d = a.a[c];
    a.a[c] = d.a[b];
    d.a[b] = a;
    a.b = !0;
    d.b = !1;
    return d;
  }
  function lh() {
    this.a = null;
    qf();
  }
  m(75, 172, { 3: 1, 30: 1 }, lh);
  _.O = function () {
    return new ef(this);
  };
  _.J = function () {
    return this.b;
  };
  _.b = 0;
  u(75);
  function cf(a) {
    var b = (mh(), nh),
      c;
    c = new N();
    hh(a, c, b, a.a, null, !1, null, !1);
    this.a = new Pe(c, 0);
  }
  m(52, 1, {}, cf);
  _.Q = function () {
    return this.a.Q();
  };
  _.R = function () {
    return this.a.R();
  };
  u(52);
  function ef(a) {
    this.a = a;
  }
  m(77, 76, ea, ef);
  u(77);
  function oh(a, b) {
    Ze.call(this, a, b);
    this.a = F(ph, 41, 2, 0);
    this.b = !0;
  }
  m(41, 35, { 34: 1, 35: 1, 16: 1, 41: 1 }, oh);
  _.b = !1;
  var ph = u(41);
  function qh() {}
  m(140, 1, {}, qh);
  _.tS = function () {
    return "State: mv\x3d" + this.c + " value\x3d" + this.d + " done\x3d" + this.a + " found\x3d" + this.b;
  };
  _.a = !1;
  _.b = !1;
  _.c = !1;
  u(140);
  function mh() {
    mh = h;
    nh = new rh("All", 0);
    sh = new th();
    uh = new vh();
    wh = new xh();
  }
  function rh(a, b) {
    this.a = a;
    this.b = b;
  }
  m(18, 11, ga, rh);
  _.jb = function () {
    return !1;
  };
  _.kb = function () {
    return !1;
  };
  var nh,
    sh,
    uh,
    wh,
    yh = Gb(18, function () {
      mh();
      return D(w(yh, 1), g, 18, 0, [nh, sh, uh, wh]);
    });
  function th() {
    this.a = "Head";
    this.b = 1;
  }
  m(141, 18, ga, th);
  _.kb = function () {
    return !0;
  };
  Gb(141, null);
  function vh() {
    this.a = "Range";
    this.b = 2;
  }
  m(142, 18, ga, vh);
  _.jb = function () {
    return !0;
  };
  _.kb = function () {
    return !0;
  };
  Gb(142, null);
  function xh() {
    this.a = "Tail";
    this.b = 3;
  }
  m(143, 18, ga, xh);
  _.jb = function () {
    return !0;
  };
  Gb(143, null);
  function zh(a) {
    this.a = new lh();
    sd(this, a);
  }
  m(73, 165, { 3: 1, 17: 1 }, zh);
  _.F = function (a) {
    var b = this.a,
      c = (Wc(), Xc);
    a = new oh(a, c);
    c = new qh();
    b.a = ih(b, b.a, a, c);
    c.b || ++b.b;
    b.a.b = !1;
    return null == c.d;
  };
  _.H = function (a) {
    return !!af(this.a, a);
  };
  _.D = function () {
    return df(new gf(this.a));
  };
  _.J = function () {
    return this.a.b;
  };
  u(73);
  function Ah(a) {
    var b;
    if (!(0 < a.a.b)) {
      b = Bh(a.f);
      !b.length || bh(a.a, b);
      b = a.a;
      var c;
      var d = $doc.title,
        e = $doc.documentElement,
        f;
      c = f = "";
      n == n ? (f = c = d) : e && ((d = e.getElementsByTagName("TITLE")), 0 < d.length && (f = c = d[0].textContent));
      if ("" == f) c = "";
      else {
        Ch();
        if (/ [\|\-] /i.test(f))
          (f = c.replace(RegExp("(.*)[\\|\\-] .*", "gi"), "$1")),
            3 > Dh.yb(f) && (f = c.replace(RegExp("[^\\|\\-]*[\\|\\-](.*)", "gi"), "$1"));
        else if (-1 != f.indexOf(": "))
          (f = c.replace(RegExp(".*:(.*)", "gi"), "$1")), 3 > Dh.yb(f) && (f = c.replace(RegExp("[^:]*[:](.*)", "gi"), "$1"));
        else if (e && (150 < f.length || 15 > f.length)) {
          f = e.getElementsByTagName("H1");
          e = "";
          for (d = 0; d < f.length && !e.length; d++) e = f[d].innerText;
          f = e;
          !f.length && (f = c);
        }
        f = Eh(f);
        4 >= Dh.yb(f) && (f = c);
        c = f;
      }
      bh(b, c);
      n == n && bh(a.a, $doc.title);
    }
  }
  function Fh(a) {
    var b, c;
    this.b = a;
    this.a = new eh();
    this.e = ((b = {}), (b[6] = []), b);
    this.d = ((c = {}), c);
    this.c = new N();
    b = Q();
    this.f = new Gh(a, this.e);
    a = Q() - b;
    if (void 0 == a) throw new TypeError();
    this.e[1] = a;
    this.g = "";
  }
  m(80, 1, {}, Fh);
  u(80);
  function Hh() {}
  m(81, 1, {}, Hh);
  u(81);
  function Ih(a) {
    var b, c, d, e, f, k, l, p, t, v, Y, jj, Qf, yd, zd, kj, lj;
    l = Q();
    var mj = $doc.documentElement.textContent,
      nj,
      oj;
    Ch();
    Dh =
      ((nj = RegExp("[\\u3040-\\uA4CF]", "g")),
      (oj = RegExp("[\\uAC00-\\uD7AF]", "g")),
      nj.test(mj) ? new Jh() : oj.test(mj) ? new Kh() : new Lh());
    f = ((Y = {}), (Y[10] = []), Y);
    c = new Fh($doc.documentElement);
    var rj = (Ah(c), hf(c.a, 0));
    if (void 0 == rj) throw new TypeError();
    f[1] = rj;
    var Sf;
    if (void 0 != a[2]) {
      if (void 0 === a[2]) throw new TypeError();
      Sf = a[2];
    } else Sf = 0;
    Mh = Sf;
    R("DomDistiller debug level: " + Mh);
    b = ((jj = {}), jj);
    var Tf;
    if ((Tf = void 0 != a[1])) {
      if (void 0 === a[1]) throw new TypeError();
      Tf = a[1];
    }
    var sj = Tf,
      Vb,
      Dc,
      Uf,
      Ec,
      Wb,
      tj,
      Qa,
      Vf,
      Fc,
      uj,
      Ad;
    Wb = Q();
    Vf = new Hh();
    Fc = new Nh();
    uj = new Oh(Fc);
    var Wf;
    var xj = c.b,
      Xb;
    Xb = xj.getElementsByTagName("ARTICLE");
    if (1 == Xb.length) Wf = Xb[0];
    else {
      Xb = xj.querySelectorAll('[itemscope][itemtype*\x3d"Article"],[itemscope][itemtype*\x3d"Post"]');
      var Bd;
      if (0 < Xb.length) {
        var Cd = Xb,
          Dd,
          Ed;
        if (0 == Cd.length) Bd = null;
        else {
          Ed = Cd[0];
          for (Dd = 1; Dd < Cd.length; Dd++) Ed = Ph(Ed, Cd[Dd]);
          Bd = Ed;
        }
      } else Bd = null;
      Wf = Bd;
    }
    Vb = ((Ad = Wf), !Ad && (Ad = c.b), Qh(new Rh(uj), Ad), (Vf.a = (Sh(Fc, Fc.d), Fc.b)), Ah(c), Vf);
    var zj = Q() - Wb;
    if (void 0 == zj) throw new TypeError();
    c.e[2] = zj;
    Wb = Q();
    var A;
    var qa = Vb.a,
      Gc,
      Gd,
      ka,
      Yf,
      Yb;
    Yb = new N();
    b: {
      var Hc;
      for (Hc = 0; Hc < qa.a.b.length; Hc++)
        if (q(L(qa.a, Hc), 24)) {
          ka = Hc;
          break b;
        }
      ka = qa.a.b.length;
    }
    if (ka != qa.a.b.length) {
      Yf = Gd = L(qa.a, ka).d;
      Gc = new Th(qa.a, ka);
      for (++ka; ka < qa.a.b.length; ka++)
        q(L(qa.a, ka), 24) &&
          ((Gd = L(qa.a, ka).d), Gd == Yf ? Uh(Gc, new Th(qa.a, ka)) : ((Yb.b[Yb.b.length] = Gc), (Yf = Gd), (Gc = new Th(qa.a, ka))));
      Yb.b[Yb.b.length] = Gc;
    }
    A = new Vh(Yb);
    var mm = c.a,
      E;
    Wh(A, !0, "Start");
    var nm = (Xh(), A),
      $f,
      Ra;
    for (Ra = new K(nm.a); Ra.b < Ra.d.J(); ) {
      $f = (x(Ra.b < Ra.d.J()), Ra.d.T((Ra.c = Ra.b++)));
      var ag;
      var bg = $f,
        Id = void 0;
      14 < bg.d ? (ag = !1) : ((Id = Eh(bg.g)), (ag = 8 <= Id.length ? Yh.test(Id) : 1 == bg.c ? "Comment" === Id : !1));
      ag && O($f.b, "STRICTLY_NOT_CONTENT");
    }
    var cg = new Zh(mm),
      Jd,
      Sa,
      ra;
    if (cg.a)
      for (Sa = new K(A.a); Sa.b < Sa.d.J(); )
        (Jd = (x(Sa.b < Sa.d.J()), Sa.d.T((Sa.c = Sa.b++)))),
          (ra = Jd.g),
          (ra = id(ra)),
          (ra = jd(ra)),
          (ra = od(ra).toLowerCase()),
          P(cg.a, ra) && O(Jd.b, "de.l3s.boilerpipe/TITLE"),
          (ra = od(ra.replace($h, ""))),
          P(cg.a, ra) && O(Jd.b, "de.l3s.boilerpipe/TITLE");
    var Ic, Kd, sa, Jc, Kc, va, Da;
    va = A.a;
    if (0 == va.b.length) E = !1;
    else {
      Kd = !1;
      for (sa = 0; sa < va.b.length; sa++)
        (Kc = 0 == sa ? null : (y(sa - 1, va.b.length), va.b[sa - 1])),
          (Ic = (y(sa, va.b.length), va.b[sa])),
          (Jc = sa + 1 == va.b.length ? null : (y(sa + 1, va.b.length), va.b[sa + 1])),
          (Kd |=
            (0.333333 >= Ic.c
              ? !Kc || 0.555556 >= Kc.c
                ? 16 >= Ic.d
                  ? !Jc || 15 >= Jc.d
                    ? !Kc || 4 >= Kc.d
                      ? (Da = !1)
                      : (Da = !0)
                    : (Da = !0)
                  : (Da = !0)
                : 40 >= Ic.d
                ? !Jc || 17 >= Jc.d
                  ? (Da = !1)
                  : (Da = !0)
                : (Da = !0)
              : (Da = !1),
            ai(Ic, Da)));
      E = Kd;
    }
    Wh(A, E, "Classification Complete");
    var om = (bi(), ci),
      dg,
      Hj,
      eg,
      Ld,
      Ij,
      Md,
      Ta;
    dg = !1;
    Ta = new K(A.a);
    a: for (; Ta.b < Ta.d.J(); )
      if (((Md = (x(Ta.b < Ta.d.J()), Ta.d.T((Ta.c = Ta.b++)))), Md.a))
        for (eg = om.a, Ld = 0, Ij = eg.length; Ld < Ij; ++Ld)
          if (((Hj = eg[Ld]), P(Md.b, Hj))) {
            ai(Md, !1);
            dg = !0;
            continue a;
          }
    E = dg;
    Wh(A, E, "Ignore Strictly Not Content blocks");
    var fg = di();
    fg.e = 0.5;
    fg.d = 10;
    E = ei(fi(fg), A);
    Wh(A, E, "SimilarSiblingContentExpansion: Cross headings");
    var Nd = di();
    Nd.c = !0;
    Nd.e = 0;
    Nd.d = 10;
    E = ei(fi(Nd), A);
    Wh(A, E, "SimilarSiblingContentExpansion: Mixed tags");
    var Od, Ua, Mj, Lc, ta, gg;
    gg = A.a;
    if (2 > gg.b.length) E = !1;
    else {
      Od = !1;
      Lc = new Pe(gg, 0);
      for (Ua = Lc.R(); Lc.Q(); )
        if (
          ((ta = Ua),
          (Ua = Lc.R()),
          P(ta.b, "de.l3s.boilerpipe/HEADING") &&
            !(
              P(ta.b, "STRICTLY_NOT_CONTENT") ||
              P(Ua.b, "STRICTLY_NOT_CONTENT") ||
              P(ta.b, "de.l3s.boilerpipe/TITLE") ||
              P(Ua.b, "de.l3s.boilerpipe/TITLE")
            ))
        )
          if (Ua.a) {
            Od = !0;
            Mj = ta.a;
            Uh(ta, Ua);
            Ua = ta;
            Lc.V();
            var Nj = ta;
            P(Nj.b, "de.l3s.boilerpipe/HEADING") && Nj.b.a.c.hb("de.l3s.boilerpipe/HEADING");
            Mj || O(ta.b, "BOILERPLATE_HEADING_FUSED");
          } else ta.a && ((Od = !0), ai(ta, !1));
      E = Od;
    }
    Wh(A, E, "HeadingFusion");
    E = gi((hi(), ii), A);
    Wh(A, E, "BlockProximityFusion: Distance 1");
    var pm = (ji(), ki),
      hg,
      Ea,
      ig,
      Tj;
    Tj = A.a;
    hg = !1;
    for (Ea = new K(Tj); Ea.b < Ea.d.J(); )
      (ig = (x(Ea.b < Ea.d.J()), Ea.d.T((Ea.c = Ea.b++)))),
        ig.a || (null != pm.a && P(ig.b, "de.l3s.boilerpipe/TITLE")) || (Oe(Ea), (hg = !0));
    E = hg;
    Wh(A, E, "BlockFilter");
    E = gi(li, A);
    Wh(A, E, "BlockProximityFusion: Same level content-only");
    var qm = (mi(), ni),
      jg,
      Va,
      Mc,
      kg,
      lg,
      wa,
      Wa,
      Xa,
      Zb;
    Zb = A.a;
    if (2 > Zb.b.length) E = !1;
    else {
      kg = -1;
      Va = null;
      jg = 0;
      Mc = -1;
      for (Xa = new K(Zb); Xa.b < Xa.d.J(); )
        (wa = (x(Xa.b < Xa.d.J()), Xa.d.T((Xa.c = Xa.b++)))), wa.a && ((lg = wa.d), lg > kg && ((Va = wa), (kg = lg), (Mc = jg))), ++jg;
      for (Wa = new K(Zb); Wa.b < Wa.d.J(); )
        (wa = (x(Wa.b < Wa.d.J()), Wa.d.T((Wa.c = Wa.b++)))),
          wa == Va
            ? (ai(wa, !0), O(wa.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT"))
            : (ai(wa, !1), O(wa.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT"));
      if (qm.a && -1 != Mc) {
        var rm = Mc,
          Ya,
          Xj,
          mg,
          ng;
        ng = C(oi(L(Va.j, L(Va.i, Va.i.b.length - 1).a)));
        for (mg = new Pe(Zb, rm + 1); mg.Q(); )
          (Ya = mg.R()),
            (Xj = C(pi(L(Ya.j, L(Ya.i, 0).a)))),
            C(ng) == C(Xj) && (ai(Ya, !0), O(Ya.b, "SIBLING_OF_MAIN_CONTENT"), (ng = C(oi(L(Ya.j, L(Ya.i, Ya.i.b.length - 1).a)))));
        var sm = Mc,
          Za,
          Yj,
          og,
          $b;
        og = C(pi(L(Va.j, L(Va.i, 0).a)));
        for ($b = new Pe(Zb, sm); 0 < $b.b; )
          (Za = (x(0 < $b.b), L($b.a, ($b.c = --$b.b)))),
            (Yj = C(oi(L(Za.j, L(Za.i, Za.i.b.length - 1).a)))),
            C(og) == C(Yj) && (ai(Za, !0), O(Za.b, "SIBLING_OF_MAIN_CONTENT"), (og = C(pi(L(Za.j, L(Za.i, 0).a)))));
      }
      E = !0;
    }
    Wh(A, E, "Keep Largest Block");
    var Rd, wb, Sd, ac, $a, ab, Nc;
    Sd = 0;
    wb = Nc = -1;
    for (ab = new K(A.a); ab.b < ab.d.J(); )
      (ac = (x(ab.b < ab.d.J()), ab.d.T((ab.c = ab.b++)))),
        -1 == wb && P(ac.b, "de.l3s.boilerpipe/TITLE") && ((Nc = Sd), (wb = -1)),
        -1 == wb && ac.a && (wb = Sd),
        ++Sd;
    if (wb <= Nc || -1 == Nc) E = !1;
    else {
      Rd = !1;
      for ($a = new K(new Re(A.a, Nc, wb)); $a.b < $a.d.J(); )
        (ac = (x($a.b < $a.d.J()), $a.d.T(($a.c = $a.b++)))), P(ac.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") && (Rd |= ai(ac, !0));
      E = Rd;
    }
    Wh(A, E, "Expand Title to Content");
    var pg, Td, Fa, bb, cb;
    pg = !1;
    Td = -1;
    for (cb = new K(A.a); cb.b < cb.d.J(); )
      if (((Fa = (x(cb.b < cb.d.J()), cb.d.T((cb.c = cb.b++)))), Fa.a && P(Fa.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT"))) {
        Td = Fa.f;
        break;
      }
    if (-1 == Td) E = !1;
    else {
      for (bb = new K(A.a); bb.b < bb.d.J(); )
        (Fa = (x(bb.b < bb.d.J()), bb.d.T((bb.c = bb.b++)))), !Fa.a && 100 <= Fa.d && Fa.f == Td && (ai(Fa, !0), (pg = !0));
      E = pg;
    }
    Wh(A, E, "Largest Block Same Tag Level -\x3e Content");
    var qg, Ud, Ga, db;
    qg = !1;
    Ud = aa;
    for (db = new K(A.a); db.b < db.d.J(); )
      (Ga = (x(db.b < db.d.J()), db.d.T((db.c = db.b++)))),
        Ga.a && P(Ga.b, "de.l3s.boilerpipe/VERY_LIKELY_CONTENT")
          ? (Ud = Ga.f)
          : Ga.f > Ud && P(Ga.b, "de.l3s.boilerpipe/MIGHT_BE_CONTENT") && P(Ga.b, "de.l3s.boilerpipe/LI") && 0 == Ga.c
          ? (ai(Ga, !0), (qg = !0))
          : (Ud = aa);
    E = qg;
    Wh(A, E, "List at end filter");
    var tm = c.d,
      rg,
      Vd,
      sg,
      eb;
    Vd = 0;
    for (eb = new K(A.a); eb.b < eb.d.J(); ) (sg = (x(eb.b < eb.d.J()), eb.d.T((eb.c = eb.b++)))), sg.a && (Vd += sg.d);
    rg = Vd;
    if (void 0 == rg) throw new TypeError();
    tm[1] = rg;
    var um, fb;
    for (fb = new K(A.a); fb.b < fb.d.J(); ) {
      var Wd = (um = (x(fb.b < fb.d.J()), fb.d.T((fb.c = fb.b++)))),
        Zj = void 0,
        gb = void 0,
        tg = void 0;
      if (Wd.a)
        for (gb = new K(Wd.i); gb.b < gb.d.J(); )
          (Zj = (x(gb.b < gb.d.J()), gb.d.T((gb.c = gb.b++)))),
            (tg = L(Wd.j, Zj.a)),
            (tg.p = !0),
            P(Wd.b, "de.l3s.boilerpipe/TITLE") && O(tg.e, "de.l3s.boilerpipe/TITLE");
    }
    var Xd, hb, Yd;
    Yd = !1;
    for (hb = new K(Vb.a.a); hb.b < hb.d.J(); )
      (Xd = (x(hb.b < hb.d.J()), hb.d.T((hb.c = hb.b++)))), Xd.p ? (Yd = !0) : q(Xd, 24) ? (Yd = !1) : Yd && (Xd.p = !0);
    var vm = Vb.a,
      Zd,
      xb,
      ib,
      bc;
    Zd = new N();
    bc = null;
    for (ib = new K(vm.a); ib.b < ib.d.J(); )
      if (((xb = (x(ib.b < ib.d.J()), ib.d.T((ib.c = ib.b++)))), q(xb, 36)))
        if (xb.p) break;
        else M(Zd, xb);
      else !bc && q(xb, 24) && xb.p && (bc = xb);
    var Oc, ug, vg, Pc, ak, $d, jb, cc;
    if (0 != Zd.b.length) {
      vg = null;
      bc && (vg = L(bc.a, bc.c));
      ak = ((cc = new N()), M(cc, new qi()), M(cc, new ri()), M(cc, new si(vg)), M(cc, new ti()), cc);
      Oc = null;
      ug = 0;
      for (jb = new K(Zd); jb.b < jb.d.J(); ) {
        $d = (x(jb.b < jb.d.J()), jb.d.T((jb.c = jb.b++)));
        var ae = void 0,
          fk = void 0,
          kb = void 0,
          Qc = void 0;
        if ($d) {
          Qc = 0;
          ae = $d.a;
          for (kb = new K(ak); kb.b < kb.d.J(); ) (fk = (x(kb.b < kb.d.J()), kb.d.T((kb.c = kb.b++)))), (Qc += fk.Db(ae));
          2 > Mh || (ae ? R("FINAL SCORE: " + Qc + " : " + z(ae, "src")) : R("Null image attempting to be scored!"));
          Pc = Qc;
        } else Pc = 0;
        26 <= Pc && (!Oc || ug < Pc) && ((Oc = $d), (ug = Pc));
      }
      Oc && (Oc.p = !0);
    }
    var wm = Vb.a,
      be,
      lb,
      wg;
    wg = new N();
    for (lb = new K(wm.a); lb.b < lb.d.J(); ) (be = (x(lb.b < lb.d.J()), lb.d.T((lb.c = lb.b++)))), q(be, 36) && be.p && M(wg, be);
    for (Qa = new K(wg); Qa.b < Qa.d.J(); ) (tj = (x(Qa.b < Qa.d.J()), Qa.d.T((Qa.c = Qa.b++)))), M(c.c, tj.b);
    var gk = Q() - Wb;
    if (void 0 == gk) throw new TypeError();
    c.e[3] = gk;
    Wb = Q();
    var xg, mb, dc;
    dc = new pd();
    for (mb = new K(Vb.a.a); mb.b < mb.d.J(); )
      if (((xg = (x(mb.b < mb.d.J()), mb.d.T((mb.c = mb.b++)))), xg.p)) {
        var xm = xg.Bb(sj);
        dc.a += xm;
        sj && (dc.a += "\n");
      }
    Uf = dc.a;
    var hk = Q() - Wb;
    if (void 0 == hk) throw new TypeError();
    c.e[4] = hk;
    if (4 <= Mh) {
      for (Ec = 0; Ec < c.e[6].length; Ec++) {
        var ik = c.e;
        if (Ec >= ik[6].length) throw new RangeError();
        Dc = ik[6][Ec];
        if (void 0 === Dc[1]) throw new TypeError();
        var ym = "Timing: " + Dc[1] + " \x3d ";
        if (void 0 === Dc[2]) throw new TypeError();
        R(ym + Dc[2]);
      }
      var jk = c.e;
      if (void 0 === jk[1]) throw new TypeError();
      var zm = "Timing: MarkupParsingTime \x3d " + jk[1] + "\nTiming: DocumentConstructionTime \x3d ",
        kk = c.e;
      if (void 0 === kk[2]) throw new TypeError();
      var Am = zm + kk[2] + "\nTiming: ArticleProcessingTime \x3d ",
        lk = c.e;
      if (void 0 === lk[3]) throw new TypeError();
      var Bm = Am + lk[3] + "\nTiming: FormattingTime \x3d ",
        mk = c.e;
      if (void 0 === mk[4]) throw new TypeError();
      R(Bm + mk[4]);
    }
    if (void 0 == Uf) throw new TypeError();
    b[1] = Uf;
    if (void 0 == b) throw new TypeError();
    f[2] = b;
    var nk = ((null == c.g || !c.g.length) && (c.g = "auto"), c.g);
    if (void 0 == nk) throw new TypeError();
    f[9] = nk;
    for (v = new K(c.c); v.b < v.d.J(); ) {
      t = (x(v.b < v.d.J()), v.d.T((v.c = v.b++)));
      var Cm = ((Qf = {}), f[10].push(Qf), Qf);
      if (void 0 == t) throw new TypeError();
      Cm[1] = t;
    }
    var yg;
    if (void 0 != a[3]) {
      if (void 0 === a[3]) throw new TypeError();
      yg = a[3];
    } else yg = $wnd.location.href;
    e = yg;
    p = c.e;
    k = Q();
    ui();
    yd = {};
    var pk = $doc.documentElement,
      yb,
      zg,
      Ag,
      Bg,
      Cg,
      Ha,
      Dg,
      Rc,
      B,
      nb,
      Z,
      Eg,
      s,
      ob,
      ec,
      ce,
      Sc,
      Fg,
      fc,
      gc,
      hc,
      de,
      ee,
      qk,
      Ia,
      Gg,
      rk,
      sk;
    3 <= Mh && Fe(vi);
    Ha = (Ch(), e.replace(RegExp("\\/[^/]*$", "gi"), ""));
    rk = e.replace(RegExp("\\/$", "gi"), "");
    yb = pk.getElementsByTagName("A");
    ee = new Jf();
    Ag = new Jf();
    var Hg;
    var Ig, Jg;
    Jg = pk.getElementsByTagName("BASE");
    if (0 == Jg.length) Hg = e;
    else {
      Ig = wi(e);
      var Dm = z(Jg[0], "href");
      Ig.setAttribute("href", Dm);
      Hg = Ig.href;
    }
    Bg = wi(Hg);
    var Em = md(e, ":\\/\\/")[0] + "://",
      uk,
      Tc = e,
      Tc = (Ch(), md(Tc, ":\\/\\/"))[1];
    uk = -1 == Tc.indexOf("/") ? Tc : md(Tc, "\\/")[0];
    zg = Em + uk + "/";
    var Fm = "^" + zg.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26") + ".*\\d";
    qk = RegExp(Fm, "i");
    for (Rc = 0; Rc < yb.length; Rc++)
      if (((B = yb[Rc]), (sk = z(B, "href")), Bg.setAttribute("href", sk), (Z = Bg.href), qk.test(Z)))
        if (((Gg = (B.offsetWidth || 0) | 0), (Dg = (B.offsetHeight || 0) | 0), 0 == Gg || 0 == Dg))
          S(B, "ignored: sz\x3d" + Gg + "x" + Dg);
        else if (xi(B))
          if (((Z = Z.replace(yi, "")), S(B, "-\x3e " + Z), G(Z, rk) || G(Z, Ha))) S(B, "ignored: same as current or folder url " + Ha);
          else if (((ob = B.innerText), 25 < ob.length)) S(B, "ignored: link text too long");
          else if (zi.test(ob)) S(B, "ignored: one of extra"), O(Ag, Z);
          else if (((Eg = Z), Z.substr(0, Ha.length) === Ha && (Eg = nd(Z, Ha.length)), Ai.test(Eg))) {
            s = new Bi(Rc, ob, Z);
            O(ee, s);
            0 != Z.indexOf(Ha) && ((s.d -= 25), S(B, "score\x3d" + s.d + ": not part of folder url " + Ha));
            nb = ob + " " + (B.className || "") + " " + B.id;
            S(B, "txt+class+id\x3d" + nb);
            Ci.test(nb) && ((s.d += 50), S(B, "score\x3d" + s.d + ": has next"));
            Di.test(nb) && ((s.d += 25), S(B, "score\x3d" + s.d + ": has pag* word"));
            Ei.test(nb) && !Ci.test(s.c) && ((s.d -= 65), S(B, "score\x3d" + s.d + ": has first|last but no next regex"));
            if (Fi.test(nb) || zi.test(nb)) (s.d -= 50), S(B, "score\x3d" + s.d + ": has neg or extra regex");
            Gi.test(nb) && ((s.d -= 200), S(B, "score\x3d" + s.d + ": has opp of next regex"));
            ce = de = !1;
            for (gc = C(B); gc && (!de || !ce); )
              (hc = (gc.className || "") + " " + gc.id),
                !de && Di.test(hc) && ((s.d += 25), (de = !0), S(B, "score\x3d" + s.d + ": posParent - " + hc)),
                ce || !Fi.test(hc) || Hi.test(hc) || ((s.d -= 25), (ce = !0), S(B, "score\x3d" + s.d + ": negParent - " + hc)),
                (gc = C(gc));
            if (Ii.test(Z) || Di.test(Z)) (s.d += 25), S(B, "score\x3d" + s.d + ": has paging info");
            zi.test(Z) && ((s.d -= 15), S(B, "score\x3d" + s.d + ": has extra regex"));
            10 < ob.length && ((s.d -= ob.length), S(B, "score\x3d" + s.d + ": text too long"));
            ec = Ji(ob);
            0 < ec &&
              (1 == ec ? (s.d -= 10) : (s.d += 0 > 10 - ec ? 0 : 10 - ec), S(B, "score\x3d" + s.d + ": linktxt is a num (" + ec + ")"));
            for (
              var Ab = e, Bb = Z, Ck = B, Ja = void 0, he = void 0, ie = void 0, Ja = zg.length;
              Ja < gd(Ab.length, Bb.length) && Ab.charCodeAt(Ja) == Bb.charCodeAt(Ja);
              Ja++
            );
            Ab = Ab.substr(Ja, Ab.length - Ja);
            Bb = Bb.substr(Ja, Bb.length - Ja);
            S(Ck, "remains: " + Ab + ", " + Bb);
            he = Ji(Bb);
            ie = Ji(Ab);
            S(Ck, "remains: " + ie + ", " + he);
            (Cg = 0 < ie && 0 < he ? cd(he - ie) : null) && 1 == Cg.a && ((s.d += 25), S(B, "score\x3d" + s.d + ": diff \x3d " + Cg));
          } else S(B, "ignored: no number beyond folder url " + Ha);
        else S(B, "ignored: invisible");
      else S(B, "ignored: not prefix + num");
    Ia = null;
    if (0 != ee.a.b)
      for (Fg = Te(new Ve(ee.a)); Le(Fg.a); ) (Sc = Me(Fg.a).W()), P(Ag, Sc.a) || (50 <= Sc.d && (!Ia || Ia.d < Sc.d) && (Ia = Sc));
    fc = null;
    if (Ia) {
      var Gm = Ia.a;
      Ch();
      fc = Gm.replace(RegExp("\\/$", "gi"), "");
      S(yb[Ia.b], "found: score\x3d" + Ia.d + ", txt\x3d[" + Ia.c + "], " + fc);
    }
    if (3 <= Mh) {
      var Uc, je, pb, Vc, ke;
      R("numLinks\x3d" + yb.length + ", found next: " + (null != fc ? fc : "null"));
      for (Uc = 0; Uc < yb.length; Uc++) {
        je = yb[Uc];
        pb = je.innerText;
        ke = (Ch(), md(pb, "\\s+"));
        pb = "";
        for (Vc = 0; Vc < ke.length; Vc++) (pb += ke[Vc]), Vc < ke.length - 1 && (pb += " ");
        R(Uc + ")" + je.href + ", txt\x3d[" + pb + "], dbg\x3d[" + Qd(vi, je) + "]");
      }
    }
    zd = fc;
    if (null != zd) {
      if (void 0 == zd) throw new TypeError();
      yd[1] = zd;
    }
    if (void 0 == yd) throw new TypeError();
    f[3] = yd;
    Ki(k, p, "Pagination");
    var W = c.f,
      Cb,
      qb,
      le,
      me,
      Db,
      Eb,
      Ng,
      ma,
      Og,
      Pg,
      Qg;
    ma = ((Og = {}), (Og[9] = []), Og);
    var ne, oe;
    oe = !1;
    for (ne = 0; ne < W.a.b.length && !oe; ne++) oe = L(W.a, ne).wb();
    if (!oe) {
      var Dk = Bh(W);
      if (void 0 == Dk) throw new TypeError();
      ma[1] = Dk;
      var Rg, pe, qe;
      qe = "";
      for (pe = 0; pe < W.a.b.length && !qe.length; pe++) qe = L(W.a, pe).ub();
      Rg = qe;
      if (void 0 == Rg) throw new TypeError();
      ma[2] = Rg;
      var Sg, re, se;
      se = "";
      for (re = 0; re < W.a.b.length && !se.length; re++) se = L(W.a, re).vb();
      Sg = se;
      if (void 0 == Sg) throw new TypeError();
      ma[3] = Sg;
      var Tg, te, ue;
      te = "";
      for (ue = 0; ue < W.a.b.length && !te.length; ue++) te = L(W.a, ue).qb();
      Tg = te;
      if (void 0 == Tg) throw new TypeError();
      ma[4] = Tg;
      var Ug, ve, we;
      we = "";
      for (ve = 0; ve < W.a.b.length && !we.length; ve++) we = L(W.a, ve).sb();
      Ug = we;
      if (void 0 == Ug) throw new TypeError();
      ma[5] = Ug;
      var Vg, xe, ye;
      xe = "";
      for (ye = 0; ye < W.a.b.length && !xe.length; ye++) xe = L(W.a, ye).pb();
      Vg = xe;
      if (void 0 == Vg) throw new TypeError();
      ma[6] = Vg;
      var Wg, ze, Ae;
      ze = "";
      for (Ae = 0; Ae < W.a.b.length && !ze.length; Ae++) ze = L(W.a, Ae).ob();
      Wg = ze;
      if (void 0 == Wg) throw new TypeError();
      ma[7] = Wg;
      var Be, Ce;
      Be = null;
      for (Ce = 0; Ce < W.a.b.length && !Be; Ce++) Be = L(W.a, Ce).nb();
      if ((Cb = Be)) {
        qb = ((Pg = {}), (Pg[5] = []), Pg);
        var Ek = Cb.d;
        if (void 0 == Ek) throw new TypeError();
        qb[1] = Ek;
        var Fk = Cb.c;
        if (void 0 == Fk) throw new TypeError();
        qb[2] = Fk;
        var Gk = Cb.b;
        if (void 0 == Gk) throw new TypeError();
        qb[3] = Gk;
        var Hk = Cb.e;
        if (void 0 == Hk) throw new TypeError();
        qb[4] = Hk;
        for (me = 0; me < Cb.a.length; me++) qb[5].push(Cb.a[me]);
        if (void 0 == qb) throw new TypeError();
        ma[8] = qb;
      }
      var De, Ee;
      Ee = null;
      for (De = 0; De < W.a.b.length && !((Ee = L(W.a, De).rb()), 0 < Ee.length); De++);
      Ng = Ee;
      for (le = 0; le < Ng.length; le++) {
        Db = Ng[le];
        Eb = ((Qg = {}), ma[9].push(Qg), Qg);
        var Ik = Db.e;
        if (void 0 == Ik) throw new TypeError();
        Eb[1] = Ik;
        var Jk = Db.c;
        if (void 0 == Jk) throw new TypeError();
        Eb[2] = Jk;
        var Kk = Db.d;
        if (void 0 == Kk) throw new TypeError();
        Eb[3] = Kk;
        var Lk = Db.a;
        if (void 0 == Lk) throw new TypeError();
        Eb[4] = Lk;
        var Mk = Db.f;
        if (void 0 == Mk) throw new TypeError();
        Eb[5] = Mk;
        var Nk = Db.b;
        if (void 0 == Nk) throw new TypeError();
        Eb[6] = Nk;
      }
    }
    if (void 0 == ma) throw new TypeError();
    f[5] = ma;
    var Ok = Q() - l;
    if (void 0 == Ok) throw new TypeError();
    p[5] = Ok;
    if (void 0 == p) throw new TypeError();
    f[6] = p;
    var Pk = c.d;
    if (void 0 == Pk) throw new TypeError();
    f[8] = Pk;
    d = ((kj = {}), kj);
    var Qk = ((lj = Li), (Li = ""), lj);
    if (void 0 == Qk) throw new TypeError();
    d[1] = Qk;
    if (void 0 == d) throw new TypeError();
    f[7] = d;
    return f;
  }
  m(160, 1, {}, function () {});
  u(160);
  function Ph(a, b) {
    var c;
    for (c = a; c && !c.contains(b); ) c = c.parentNode;
    return c;
  }
  function Mi(a) {
    var b;
    for (b = new N(); a; ) (b.b[b.b.length] = a), (a = a.parentNode);
    return b;
  }
  function Q() {
    return window.performance ? window.performance.now() : Date.now();
  }
  function Ni(a, b) {
    var c, d;
    if (null == a) return !1;
    c = $doc.createElement("a");
    c.href = a;
    c = wc(c, "host");
    d = ("." + b).length;
    return ("." + c).substr(("." + c).length - d, d) === "." + b;
  }
  function xi(a) {
    var b;
    b = getComputedStyle(a, null);
    a = parseFloat(b.opacity);
    return !("none" === b.display || "hidden" === b.visibility || 0 == a);
  }
  function Oi(a) {
    var b, c, d;
    b = a.getElementsByTagName("A");
    for (c = 0; c < b.length; c++) (d = b[c]), d.href.length && (d.href = d.href);
    d = a.getElementsByTagName("VIDEO");
    for (b = 0; b < d.length; b++) (c = d[b]), c.poster.length && (c.poster = c.poster);
    Pi(a);
    b = a.querySelectorAll("IMG[SRCSET]");
    for (a = 0; a < b.length; a++) Qi(b[a]);
  }
  function Pi(a) {
    a = a.querySelectorAll("img,source,track,video");
    for (var b in a) a[b].src && (a[b].src = a[b].src);
  }
  function Qi(a) {
    var b, c, d, e;
    d = a.src;
    c = z(a, "srcset");
    Ch();
    e = c.split(",");
    for (c = 0; c < e.length; c++) (b = Eh(e[c])), b.length && ((b = md(b, " ")), (a.src = b[0]), (b[0] = a.src), (e[c] = Ri(b, " ")));
    c = Ri(e, ", ");
    a.setAttribute("srcset", c);
    a.src = d;
  }
  function Si(a) {
    var b, c, d, e;
    if (null == a || !a.length) return new If();
    e = new If();
    a = md(a, "\x26");
    for (c = 0; c < a.length; c++);
    c = 0;
    for (d = a.length; c < d; ++c)
      if (((b = a[c]), (b = md(b, "\x3d")), 1 < b.length)) {
        var f = e,
          k = b[0];
        if (null == b[1]) throw new hd("encodedURL cannot be null");
        J(f, k, decodeURI(b[1]));
      }
    return e;
  }
  function Ti(a, b, c) {
    var d, e, f;
    e = 0;
    for (f = c.length; e < f; ++e) (d = c[e]), (a.tagName !== d && "*" !== d) || a.removeAttribute(b);
    d = 0;
    for (e = c.length; d < e; ++d);
    c = Ri(c, ", ");
    c = a.querySelectorAll(c);
    for (a = 0; a < c.length; a++) c[a].removeAttribute(b);
  }
  function Ui(a) {
    this.a = a;
  }
  m(82, 1, {}, Ui);
  _.lb = function () {};
  _.mb = function (a) {
    switch (a.nodeType) {
      case 3:
        return M(this.a, a), !1;
      case 1:
        if (!xi(a)) return !1;
        M(this.a, a);
        return !0;
      default:
        return !1;
    }
  };
  u(82);
  function Qh(a, b) {
    var c, d;
    if (a.a.mb(b)) {
      if ((d = b.firstChild))
        for (; d != b; ) {
          c = !1;
          if (a.a.mb(d)) {
            if ((c = d.firstChild)) {
              d = c;
              continue;
            }
            c = !0;
          }
          for (; d != b; ) {
            c && a.a.lb(d);
            if ((c = d.nextSibling)) {
              d = c;
              break;
            }
            d = d.parentNode;
            c = !0;
          }
        }
      a.a.lb(b);
    }
  }
  function Rh(a) {
    this.a = a;
  }
  m(43, 1, {}, Rh);
  u(43);
  function Vi(a) {
    var b;
    a.b = "";
    (b = a.j.querySelector(".byline-name")) && (a.b = b.textContent);
  }
  function Wi(a) {
    this.j = a;
    this.a = a.getElementsByTagName("META");
  }
  m(99, 1, {}, Wi);
  _.nb = function () {
    var a, b;
    a = new Xi();
    if (null == this.d) {
      var c;
      this.d = "";
      if ((b = this.j.querySelector(".dateline"))) this.d = b.textContent;
      else
        for (b = 0; b < this.a.length; b++)
          if (((c = this.a[b]), G(c.name, "displaydate"))) {
            this.d = c.content;
            break;
          }
    }
    a.d = this.d;
    b = (null == this.b && Vi(this), this.b);
    a.a = b.length ? D(w(n, 1), g, 2, 4, [b]) : F(n, 2, 0, 4);
    return a;
  };
  _.ob = function () {
    return null == this.b && Vi(this), this.b;
  };
  _.pb = function () {
    if (null == this.c) {
      var a, b;
      this.c = "";
      for (a = 0; a < this.a.length; a++)
        if (((b = this.a[a]), G(b.name, "copyright"))) {
          this.c = b.content;
          break;
        }
    }
    return this.c;
  };
  _.qb = function () {
    return "";
  };
  _.rb = function () {
    if (!this.f) {
      var a, b, c, d, e;
      this.f = new N();
      a = this.j.getElementsByTagName("IMG");
      for (c = 0; c < a.length; c++) {
        e = a[c];
        var f = (d = b = void 0),
          k = void 0;
        b = void 0;
        b = C(e);
        if (G("FIGURE", b.tagName)) {
          if (((d = b.getElementsByTagName("FIGCAPTION")), (k = d.length), (b = ""), 0 < k && 2 >= k))
            for (f = 0; f < k && !b.length; f++) b = d[f].innerText;
        } else b = "";
        (d = null != b && b.length) || ((d = d = void 0), (d = e.width), 400 > d ? (d = !1) : ((d /= e.height), (d = 1.3 <= d && 3 >= d)));
        d && ((d = new Yi()), (d.e = e.src), (d.a = b), (d.f = e.width), (d.b = e.height), M(this.f, d));
      }
    }
    return pf(this.f, F(Zi, 19, this.f.b.length, 0));
  };
  _.sb = function () {
    if (null == this.i) {
      var a, b, c;
      this.i = "";
      a = this.j.getElementsByTagName("*");
      for (c = 0; c < a.length && !this.i.length; c++)
        (b = a[c]), (this.i = z(b, "publisher")), !this.i.length && (this.i = z(b, "source_organization"));
    }
    return this.i;
  };
  _.tb = function () {
    if (null == this.k) {
      var a, b;
      this.k = "";
      if (0 != this.a.length && ((a = this.j.getElementsByTagName("TITLE")), 0 != a.length))
        for (a = 0; a < this.a.length; a++)
          if (((b = this.a[a]), G(b.name, "title"))) {
            this.k = b.content;
            break;
          }
    }
    return this.k;
  };
  _.ub = function () {
    return "";
  };
  _.vb = function () {
    return "";
  };
  _.wb = function () {
    if (!this.e) {
      var a, b;
      this.e = !0;
      for (a = 0; a < this.a.length; a++)
        if (((b = this.a[a]), G(b.name, "IE_RM_OFF"))) {
          this.g = G(b.content, "true");
          break;
        }
    }
    return this.g;
  };
  _.a = null;
  _.b = null;
  _.c = null;
  _.d = null;
  _.e = !1;
  _.f = null;
  _.g = !1;
  _.i = null;
  _.j = null;
  _.k = null;
  u(99);
  function Ji(a) {
    return parseInt(a, 10) | 0;
  }
  function Ki(a, b, c) {
    var d;
    if (b) {
      b = ((d = {}), b[6].push(d), d);
      if (void 0 == c) throw new TypeError();
      b[1] = c;
      a = Q() - a;
      if (void 0 == a) throw new TypeError();
      b[2] = a;
    }
  }
  function R(a) {
    null == a && (a = "");
    (-1 == a.indexOf("[0;") && -1 == a.indexOf("[1;")) || (a += "\u001b[0m");
    $i || null == $wnd.console || ("function" != typeof $wnd.console.log && "object" != typeof $wnd.console.log) || $wnd.console.log(a);
    Li += a + "\n";
  }
  var Mh = 0,
    Li = "",
    $i = !1;
  function Bh(a) {
    var b, c;
    c = "";
    for (b = 0; b < a.a.b.length && !c.length; b++) c = L(a.a, b).tb();
    return c;
  }
  function Gh(a, b) {
    var c, d;
    this.b = b;
    this.a = new N();
    d = Q();
    var e = this.b;
    aj();
    var f, k;
    try {
      (k = Q()), (f = new bj(a, e)), Ki(k, e, "OpenGraphProtocolParser.parse"), (c = f);
    } catch (l) {
      if (((l = kc(l)), q(l, 7))) c = null;
      else throw lc(l);
    }
    c && M(this.a, c);
    Ki(d, this.b, "OpenGraphProtocolParser");
    d = Q();
    M(this.a, new cj(a, this.b));
    Ki(d, this.b, "SchemaOrgParserAccessor");
    d = Q();
    M(this.a, new Wi(a));
    Ki(d, this.b, "IEReadingViewParser");
  }
  m(86, 1, {}, Gh);
  u(86);
  function Xi() {}
  m(44, 1, {}, Xi);
  _.a = null;
  _.b = "";
  _.c = "";
  _.d = "";
  _.e = "";
  u(44);
  function Yi() {}
  m(19, 1, { 19: 1 }, Yi);
  _.a = "";
  _.b = 0;
  _.c = "";
  _.d = "";
  _.e = "";
  _.f = 0;
  var Zi = u(19);
  function dj(a) {
    this.b = new ej(a);
    this.a = new N();
    this.d = new N();
  }
  m(147, 1, {}, dj);
  _.lb = function () {
    this.a.U(this.a.b.length - 1);
    this.d.U(this.d.b.length - 1);
  };
  _.mb = function (a) {
    if (!this.b.a) return !1;
    M(this.a, a);
    M(this.d, null);
    if (1 == this.d.b.length) {
      this.c = new fj(a);
      var b = this.d,
        c = this.c;
      y(0, b.b.length);
      b.b[0] = c;
    }
    if (gj(this.b, a))
      for (a = 0; a < this.a.b.length; a++)
        if (null == L(this.d, a)) {
          var b = this.d,
            c = a,
            d = new fj(L(this.a, a));
          y(c, b.b.length);
          b.b[c] = d;
          b = L(this.d, a - 1);
          c = L(this.d, a);
          bh(b.a, c);
        }
    return !0;
  };
  u(147);
  function hj(a) {
    var b, c;
    c = a.b.cloneNode(!1);
    for (a = jf(a.a, 0); a.b != a.d.c; ) (b = (x(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c)), (b = hj(b)), c.appendChild(b);
    return c;
  }
  function ij(a) {
    var b, c;
    c = a.b.cloneNode(!1);
    1 == a.b.nodeType && ((b = getComputedStyle(a.b, null).direction), !b.length && (b = "auto"), c.setAttribute("dir", b));
    for (a = jf(a.a, 0); a.b != a.d.c; ) (b = (x(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c)), (b = ij(b)), c.appendChild(b);
    return c;
  }
  function fj(a) {
    this.b = a;
    this.a = new eh();
  }
  m(51, 1, {}, fj);
  u(51);
  function aj() {
    aj = h;
    pj = RegExp("((\\w+):\\s+(http:\\/\\/ogp.me\\/ns(\\/\\w+)*#))\\s*", "gi");
    qj = /^xmlns:(\w+)/i;
    vj = /^http:\/\/ogp.me\/ns(\/\w+)*#/i;
  }
  function wj(a, b, c) {
    null != c && c.length
      ? ((c = c.substr(1, c.length - 1)), "profile" === c ? vf(a.c, (yj(), Aj), b) : "article" === c && vf(a.c, (yj(), Bj), b))
      : vf(a.c, (yj(), Cj), b);
  }
  function bj(a, b) {
    var c, d;
    this.b = new Dj();
    this.d = new Ej();
    this.a = new Fj();
    this.e = D(w(Gj, 1), g, 9, 0, [
      new Jj("title", (yj(), Cj), null),
      new Jj("type", Cj, null),
      new Jj("url", Cj, null),
      new Jj("description", Cj, null),
      new Jj("site_name", Cj, null),
      new Jj("image", Cj, this.b),
      new Jj("image:", Cj, this.b),
      new Jj("first_name", Aj, this.d),
      new Jj("last_name", Aj, this.d),
      new Jj("section", Bj, this.a),
      new Jj("published_time", Bj, this.a),
      new Jj("modified_time", Bj, this.a),
      new Jj("expiration_time", Bj, this.a),
      new Jj("author", Bj, this.a)
    ]);
    this.f = new If();
    this.c = new yf(Kj);
    this.g = b;
    d = Q();
    var e, f, k;
    c = "";
    G("HTML", a.tagName) && (c = z(a, "prefix"));
    c.length || ((k = a.getElementsByTagName("HEAD")), 1 == k.length && (c = z(k[0], "prefix")));
    if (c.length)
      for (pj.lastIndex = 0; ; ) {
        k = pj.exec(c);
        if (!k) break;
        wj(this, k[2], k[4]);
      }
    else
      for (c = a.attributes, k = 0; k < c.length; k++)
        if (((f = c[k]), (e = f.nodeName.toLowerCase()), (e = qj.exec(e)))) (f = f.nodeValue), (f = vj.exec(f)) && wj(this, e[1], f[1]);
    null == tf(this.c, (yj(), Cj)) && vf(this.c, Cj, "og");
    null == tf(this.c, Aj) && vf(this.c, Aj, "profile");
    null == tf(this.c, Bj) && vf(this.c, Bj, "article");
    Ki(d, this.g, "OpenGraphProtocolParser.findPrefixes");
    d = Q();
    var l, p;
    e = "";
    for (k = new Bf(new Af(this.c).a); Df(k.a); )
      (c = ((k.b = Ef(k.a)), new Ff(k.c, k.b))), (e += 'meta[property^\x3d"' + c.b.b[c.a.b] + '"],');
    e = e.substr(0, e.length - 1 - 0);
    c = a.querySelectorAll(e);
    for (k = 0; k < c.length; k++)
      for (f = c[k], p = z(f, "property").toLowerCase(), e = 0; e < this.e.length; e++) {
        l = tf(this.c, this.e[e].c) + ":";
        var t = l + this.e[e].a;
        p.substr(0, t.length) === t &&
          ((p = nd(p, l.length)),
          (l = !0),
          this.e[e].b && (l = this.e[e].b.xb(p, f.content, this.f)),
          l && J(this.f, this.e[e].a, f.content));
      }
    Ki(d, this.g, "OpenGraphProtocolParser.parseMetaTags");
    d = Q();
    c = this.b;
    if (0 != c.a.b.length) for (k = c.a.b.length - 1; 0 <= k; k--) (e = L(c.a, k)[0]), (null != e && e.length) || c.a.U(k);
    Ki(d, this.g, "OpenGraphProtocolParser.imageParser.verify");
    d = Q();
    c = tf(this.c, Cj) + ":";
    if (!(H(this.f, "title") ? I(this.f, "title") : "").length) throw new Jb('Required "' + c + 'title" property is missing.');
    if (!(H(this.f, "type") ? I(this.f, "type") : "").length) throw new Jb('Required "' + c + 'type" property is missing.');
    if (!(H(this.f, "url") ? I(this.f, "url") : "").length) throw new Jb('Required "' + c + 'url" property is missing.');
    if (0 == Lj(this.b).length) throw new Jb('Required "' + c + 'image" property is missing.');
    Ki(d, this.g, "OpenGraphProtocolParser.checkRequired");
  }
  m(94, 1, {}, bj);
  _.nb = function () {
    var a;
    a = new Xi();
    a.d = H(this.f, "published_time") ? I(this.f, "published_time") : "";
    a.c = H(this.f, "modified_time") ? I(this.f, "modified_time") : "";
    a.b = H(this.f, "expiration_time") ? I(this.f, "expiration_time") : "";
    a.e = H(this.f, "section") ? I(this.f, "section") : "";
    var b;
    b = this.a;
    b = pf(b.a, F(n, 2, b.a.b.length, 4));
    a.a = b;
    return a.e.length || a.d.length || a.c.length || a.b.length || 0 != a.a.length ? a : null;
  };
  _.ob = function () {
    var a;
    var b = this.f;
    this.d.b
      ? ((a = b.c.db("first_name")),
        null == a && (a = ""),
        (b = b.c.db("last_name")),
        null != b && a.length && b.length && (a += " "),
        (a += b))
      : (a = "");
    return a;
  };
  _.pb = function () {
    return "";
  };
  _.qb = function () {
    return H(this.f, "description") ? I(this.f, "description") : "";
  };
  _.rb = function () {
    return Lj(this.b);
  };
  _.sb = function () {
    return H(this.f, "site_name") ? I(this.f, "site_name") : "";
  };
  _.tb = function () {
    return H(this.f, "title") ? I(this.f, "title") : "";
  };
  _.ub = function () {
    var a;
    a = H(this.f, "type") ? I(this.f, "type") : "";
    return G(a, "article") ? "Article" : "";
  };
  _.vb = function () {
    return H(this.f, "url") ? I(this.f, "url") : "";
  };
  _.wb = function () {
    return !1;
  };
  var qj, vj, pj;
  u(94);
  function Fj() {
    this.b = !1;
    this.a = new N();
  }
  m(97, 1, {}, Fj);
  _.xb = function (a, b, c) {
    this.b || ((c = c.c.db("type")), (this.b = null != c && G(c, "article")));
    return this.b ? ("author" === a ? (M(this.a, b), !1) : !0) : !1;
  };
  _.b = !1;
  u(97);
  function Lj(a) {
    var b, c, d, e;
    e = F(Zi, 19, a.a.b.length, 0);
    for (b = 0; b < a.a.b.length; b++)
      (c = L(a.a, b)),
        (d = new Yi()),
        (e[b] = d),
        (d.e = null != c[1] && c[1].length ? c[1] : c[0]),
        null != c[2] && (d.c = c[2]),
        null != c[3] && (d.d = c[3]),
        null != c[4] && (d.f = Ji(c[4])),
        null != c[5] && (d.b = Ji(c[5]));
    return e;
  }
  function Dj() {
    this.b = D(w(n, 1), g, 2, 4, "image image:url image:secure_url image:type image:width image:height".split(" "));
    this.a = new N();
  }
  m(95, 1, {}, Dj);
  _.xb = function (a, b) {
    var c, d;
    if ("image" === a) (d = F(n, 2, this.b.length, 4)), (d[0] = b), M(this.a, d);
    else
      for (
        0 == this.a.b.length ? ((d = F(n, 2, this.b.length, 4)), M(this.a, d)) : (d = L(this.a, this.a.b.length - 1)), c = 1;
        c < this.b.length;
        c++
      )
        if (a === this.b[c]) {
          d[c] = b;
          break;
        }
    return !1;
  };
  u(95);
  function yj() {
    yj = h;
    Cj = new Oj("OG", 0);
    Aj = new Oj("PROFILE", 1);
    Bj = new Oj("ARTICLE", 2);
  }
  function Oj(a, b) {
    this.a = a;
    this.b = b;
  }
  m(28, 11, { 3: 1, 15: 1, 11: 1, 28: 1 }, Oj);
  var Bj,
    Cj,
    Aj,
    Kj = Gb(28, function () {
      yj();
      return D(w(Kj, 1), g, 28, 0, [Cj, Aj, Bj]);
    });
  function Ej() {
    this.b = this.a = !1;
  }
  m(96, 1, {}, Ej);
  _.xb = function (a, b, c) {
    this.a || ((a = c.c.db("type")), (this.b = null != a && G(a, "profile")), (this.a = !0));
    return this.b;
  };
  _.a = !1;
  _.b = !1;
  u(96);
  function Jj(a, b, c) {
    this.a = a;
    this.c = b;
    this.b = c;
  }
  m(9, 1, { 9: 1 }, Jj);
  _.a = null;
  _.b = null;
  var Gj = u(9);
  function gj(a, b) {
    if (b != a.a) return !1;
    a.a = a.b.Q() ? a.b.R() : null;
    return !0;
  }
  function ej(a) {
    this.b = a.D();
    a.I() || (this.a = this.b.R());
  }
  m(74, 1, {}, ej);
  u(74);
  function ui() {
    ui = h;
    Ci = RegExp("(next|weiter|continue|\x3e([^\\|]|$)|\u00bb([^\\|]|$))", "i");
    Gi = RegExp("(prev|early|old|new|\x3c|\u00ab)", "i");
    Hi = /article|body|content|entry|hentry|main|page|pagination|post|text|blog|story/i;
    Fi = RegExp(
      "combx|comment|com-|contact|foot|footer|footnote|masthead|media|meta|outbrain|promo|related|shoutbox|sidebar|sponsor|shopping|tags|tool|widget",
      "i"
    );
    zi = RegExp("print|archive|comment|discuss|e[\\-]?mail|share|reply|all|login|sign|single|as one|article|post|\u7bc7", "i");
    Di = /pag(e|ing|inat)/i;
    Ii = /p(a|g|ag)?(e|ing|ination)?(=|\/)[0-9]{1,2}$/i;
    Ei = /(first|last)/i;
    yi = /\/?(#.*)?$/;
    Ai = /\d/;
    vi = new If();
  }
  function S(a, b) {
    var c;
    3 > Mh || ((c = ""), Hd(vi, a) && (c = Qd(vi, a)), !c.length || (c += "; "), fe(vi, a, c + b));
  }
  function wi(a) {
    var b, c;
    c = $doc.implementation.createHTMLDocument();
    b = c.createElement("base");
    b.href = a;
    (c.head || c.getElementsByTagName("head")[0]).appendChild(b);
    a = c.createElement("a");
    c.body.appendChild(a);
    return a;
  }
  var zi, Ei, yi, Ii, Fi, Ci, Ai, Di, Hi, Gi, vi;
  function Bi(a, b, c) {
    this.b = a;
    this.d = 0;
    this.c = b;
    this.a = c;
  }
  m(85, 1, {}, Bi);
  _.b = -1;
  _.d = 0;
  u(85);
  function Pj() {
    Pj = h;
    Qj = new If();
    J(Qj, "http://schema.org/ImageObject", (T(), Rj));
    J(Qj, "http://schema.org/Article", Sj);
    J(Qj, "http://schema.org/BlogPosting", Sj);
    J(Qj, "http://schema.org/NewsArticle", Sj);
    J(Qj, "http://schema.org/ScholarlyArticle", Sj);
    J(Qj, "http://schema.org/TechArticle", Sj);
    J(Qj, "http://schema.org/Person", Uj);
    J(Qj, "http://schema.org/Organization", Vj);
    J(Qj, "http://schema.org/Corporation", Vj);
    J(Qj, "http://schema.org/EducationalOrganization", Vj);
    J(Qj, "http://schema.org/GovernmentOrganization", Vj);
    J(Qj, "http://schema.org/NGO", Vj);
    U = new If();
    J(U, "IMG", "SRC");
    J(U, "AUDIO", "SRC");
    J(U, "EMBED", "SRC");
    J(U, "IFRAME", "SRC");
    J(U, "SOURCE", "SRC");
    J(U, "TRACK", "SRC");
    J(U, "VIDEO", "SRC");
    J(U, "A", "HREF");
    J(U, "LINK", "HREF");
    J(U, "AREA", "HREF");
    J(U, "META", "CONTENT");
    J(U, "TIME", "DATETIME");
    J(U, "OBJECT", "DATA");
    J(U, "DATA", "VALUE");
    J(U, "METER", "VALUE");
  }
  function Wj(a) {
    var b, c, d;
    b = new N();
    for (c = 0; c < a.c.b.length; c++) (d = L(a.c, c)), d.c == (T(), Sj) && M(b, d);
    return b;
  }
  function bk(a, b, c) {
    var d, e, f, k, l;
    e = null;
    d = b.hasAttribute("ITEMSCOPE") && b.hasAttribute("ITEMTYPE");
    if (c) {
      var p;
      f = z(b, "ITEMPROP");
      f.length ? ((p = (Ch(), md(f, "\\s+"))), (f = 0 < p.length ? p : D(w(n, 1), g, 2, 4, [f]))) : (f = F(n, 2, 0, 4));
    } else f = F(n, 2, 0, 4);
    if (d) {
      a: {
        var t;
        switch (((t = z(b, "ITEMTYPE")), H(Qj, t) ? I(Qj, t) : (T(), ck)).b) {
          case 0:
            e = new dk();
            break;
          case 1:
            e = new ek();
            break;
          case 2:
            e = new ok();
            break;
          case 3:
            e = new tk();
            break;
          case 4:
            e = new vk();
            break;
          default:
            e = null;
            break a;
        }
      }
      !e || e.c == (T(), ck) || (c && c.c == (T(), ck) && 0 != f.length) || (M(a.c, e), fe(a.b, b, e));
    }
    if (0 < f.length && c.c != (T(), ck) && (!e || e.c != (T(), ck)))
      for (a = 0; a < f.length; a++)
        e
          ? H(c.a, f[a]) && J(c.a, f[a], e)
          : ((d = c),
            (t = f[a]),
            (p = ((k = ""), (l = b.tagName), H(U, l) && (k = z(b, I(U, l))), !k.length && (k = b.textContent), k)),
            H(d.b, t) && !I(d.b, t).length && J(d.b, t, p));
  }
  function wk(a, b) {
    Pj();
    var c;
    this.c = new N();
    this.b = new If();
    this.d = b;
    c = Q();
    var d, e, f, k, l;
    d = a.querySelectorAll("[ITEMPROP],[ITEMSCOPE]");
    bk(this, a, null);
    for (f = 0; f < d.length; f++) {
      for (var p = (e = d[f]), t = void 0, v = void 0, v = null, t = e; t; ) {
        t = C(t);
        if (!t) break;
        if (t.hasAttribute("ITEMSCOPE") && t.hasAttribute("ITEMTYPE")) {
          Hd(this.b, t) && (v = Qd(this.b, t));
          break;
        }
      }
      bk(this, p, v);
    }
    d = a.querySelectorAll("A[rel\x3dauthor],LINK[rel\x3dauthor]");
    for (f = 0; f < d.length; f++)
      (e = d[f]),
        !this.a.length &&
          (this.a = ((k = ""), (l = e.tagName), (G(l, "A") || G(l, "LINK")) && G(z(e, "REL"), "author") && (k = e.textContent), k));
    Ki(c, this.d, "SchemaOrgParser.parse");
  }
  function xk(a, b) {
    Pj();
    var c;
    c = a;
    a.length && b.length && (c += " ");
    return c + b;
  }
  m(106, 1, {}, wk);
  _.a = "";
  var U, Qj;
  u(106);
  function yk(a, b) {
    return H(a.b, b) ? I(a.b, b) : "";
  }
  function zk(a) {
    this.c = a;
    this.b = new If();
    this.a = new If();
    J(this.b, "name", "");
    J(this.b, "url", "");
    J(this.b, "description", "");
    J(this.b, "image", "");
  }
  m(29, 1, {});
  u(29);
  function Ak(a, b) {
    var c, d, e, f;
    c = H(a.b, b) ? I(a.b, b) : "";
    if (c.length) return c;
    (d = H(a.a, b) ? I(a.a, b) : null) &&
      (d.c == (T(), Uj)
        ? (c =
            ((e = H(d.b, "name") ? I(d.b, "name") : ""),
            e.length ? e : xk(H(d.b, "givenName") ? I(d.b, "givenName") : "", H(d.b, "familyName") ? I(d.b, "familyName") : "")))
        : d.c == Vj && (c = ((f = H(d.b, "name") ? I(d.b, "name") : ""), f.length ? f : H(d.b, "legalName") ? I(d.b, "legalName") : "")));
    return c;
  }
  function ek() {
    zk.call(this, (T(), Sj));
    J(this.b, "headline", "");
    J(this.b, "publisher", "");
    J(this.b, "copyrightHolder", "");
    J(this.b, "copyrightYear", "");
    J(this.b, "dateModified", "");
    J(this.b, "datePublished", "");
    J(this.b, "author", "");
    J(this.b, "creator", "");
    J(this.b, "articleSection", "");
    fe(this.a, "publisher", null);
    fe(this.a, "copyrightHolder", null);
    fe(this.a, "author", null);
    fe(this.a, "creator", null);
    fe(this.a, "associatedMedia", null);
    fe(this.a, "encoding", null);
  }
  m(108, 29, {}, ek);
  u(108);
  function dk() {
    zk.call(this, (T(), Rj));
    J(this.b, "contentUrl", "");
    J(this.b, "encodingFormat", "");
    J(this.b, "caption", "");
    J(this.b, "representativeOfPage", "");
    J(this.b, "width", "");
    J(this.b, "height", "");
  }
  m(107, 29, {}, dk);
  u(107);
  function tk() {
    zk.call(this, (T(), Vj));
    J(this.b, "legalName", "");
  }
  m(110, 29, {}, tk);
  u(110);
  function ok() {
    zk.call(this, (T(), Uj));
    J(this.b, "familyName", "");
    J(this.b, "givenName", "");
  }
  m(109, 29, {}, ok);
  u(109);
  function T() {
    T = h;
    Rj = new Bk("IMAGE", 0);
    Sj = new Bk("ARTICLE", 1);
    Uj = new Bk("PERSON", 2);
    Vj = new Bk("ORGANIZATION", 3);
    ck = new Bk("UNSUPPORTED", 4);
  }
  function Bk(a, b) {
    this.a = a;
    this.b = b;
  }
  m(22, 11, { 3: 1, 15: 1, 11: 1, 22: 1 }, Bk);
  var Sj,
    Rj,
    Vj,
    Uj,
    ck,
    Rk = Gb(22, function () {
      T();
      return D(w(Rk, 1), g, 22, 0, [Rj, Sj, Uj, Vj, ck]);
    });
  function vk() {
    zk.call(this, (T(), ck));
  }
  m(111, 29, {}, vk);
  u(111);
  function cj(a, b) {
    this.a = new wk(a, b);
  }
  m(98, 1, {}, cj);
  _.nb = function () {
    var a;
    a = Wj(this.a);
    if (0 == a.b.length) a = null;
    else {
      a = (y(0, a.b.length), a.b[0]);
      var b, c;
      b = new Xi();
      b.d = H(a.b, "datePublished") ? I(a.b, "datePublished") : "";
      b.c = H(a.b, "dateModified") ? I(a.b, "dateModified") : "";
      b.e = H(a.b, "articleSection") ? I(a.b, "articleSection") : "";
      c = Ak(a, "author");
      !c.length && (c = Ak(a, "creator"));
      b.a = c.length ? D(w(n, 1), g, 2, 4, [c]) : F(n, 2, 0, 4);
      a = b;
    }
    return a;
  };
  _.ob = function () {
    var a, b;
    b = "";
    a = Wj(this.a);
    0 != a.b.length && ((a = (y(0, a.b.length), a.b[0])), (b = Ak(a, "author")), !b.length && (b = Ak(a, "creator")));
    return b.length ? b : this.a.a;
  };
  _.pb = function () {
    var a;
    a = Wj(this.a);
    0 == a.b.length
      ? (a = "")
      : ((a = (y(0, a.b.length), a.b[0])),
        (a = xk(H(a.b, "copyrightYear") ? I(a.b, "copyrightYear") : "", Ak(a, "copyrightHolder"))),
        (a = a.length ? "Copyright " + a : a));
    return a;
  };
  _.qb = function () {
    var a;
    a = Wj(this.a);
    return 0 == a.b.length ? "" : yk((y(0, a.b.length), a.b[0]), "description");
  };
  _.rb = function () {
    var a, b, c, d, e, f, k, l;
    k = new N();
    b = Wj(this.a);
    c = null;
    for (d = 0; d < b.b.length; d++) {
      a = (y(d, b.b.length), b.b[d]);
      if (
        !c &&
        (c =
          ((e = H(a.a, "associatedMedia") ? I(a.a, "associatedMedia") : null),
          !e && (e = H(a.a, "encoding") ? I(a.a, "encoding") : null),
          e && e.c == (T(), Rj) ? e : null))
      )
        continue;
      var p = (f = void 0),
        p = H(a.b, "image") ? I(a.b, "image") : "";
      p.length ? ((f = new Yi()), (f.e = p), (a = f)) : (a = null);
      a && (k.b[k.b.length] = a);
    }
    d = this.a;
    b = new N();
    for (a = 0; a < d.c.b.length; a++) (e = L(d.c, a)), e.c == (T(), Rj) && M(b, e);
    d = !1;
    for (e = 0; e < b.b.length; e++)
      (f = (y(e, b.b.length), b.b[e])),
        (a =
          ((l = new Yi()),
          (l.e = H(f.b, "contentUrl") ? I(f.b, "contentUrl") : ""),
          !l.e.length && (l.e = H(f.b, "url") ? I(f.b, "url") : ""),
          (l.d = H(f.b, "encodingFormat") ? I(f.b, "encodingFormat") : ""),
          (l.a = H(f.b, "caption") ? I(f.b, "caption") : ""),
          (l.f = Ji(H(f.b, "width") ? I(f.b, "width") : "")),
          (l.b = Ji(H(f.b, "height") ? I(f.b, "height") : "")),
          l)),
        f == c || (!d && G(H(f.b, "representativeOfPage") ? I(f.b, "representativeOfPage") : "", "true"))
          ? ((d = !0), vc(0, k.b.length), k.b.splice(0, 0, a))
          : (k.b[k.b.length] = a);
    return pf(k, F(Zi, 19, k.b.length, 0));
  };
  _.sb = function () {
    var a, b;
    b = "";
    a = Wj(this.a);
    0 != a.b.length && ((a = (y(0, a.b.length), a.b[0])), (b = Ak(a, "publisher")), !b.length && (b = Ak(a, "copyrightHolder")));
    return b;
  };
  _.tb = function () {
    var a, b, c;
    c = "";
    a = Wj(this.a);
    for (b = 0; b < a.b.length && !c.length; b++) c = yk((y(b, a.b.length), a.b[b]), "headline");
    for (b = 0; b < a.b.length && !c.length; b++) c = yk((y(b, a.b.length), a.b[b]), "name");
    return c;
  };
  _.ub = function () {
    return 0 == Wj(this.a).b.length ? "" : "Article";
  };
  _.vb = function () {
    var a;
    a = Wj(this.a);
    return 0 == a.b.length ? "" : yk((y(0, a.b.length), a.b[0]), "url");
  };
  _.wb = function () {
    return !1;
  };
  u(98);
  function Ch() {
    Ch = h;
    Dh = new Jh();
  }
  function Sk(a) {
    Ch();
    return !/\S/.test(a);
  }
  function Ri(a, b) {
    Ch();
    return a.join(b);
  }
  function Eh(a) {
    Ch();
    return a.trim();
  }
  var Dh;
  function Lh() {}
  m(84, 1, {}, Lh);
  _.yb = function (a) {
    return (a = a.match(/(\S*[\w\u00C0-\u1FFF]\S*)/g)) ? a.length : 0;
  };
  u(84);
  function Jh() {}
  m(56, 1, {}, Jh);
  _.yb = function (a) {
    var b = a.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g),
      c = b ? b.length : 0,
      b = a.match(/([\u3040-\uA4CF])/g);
    return (c += Math.ceil(0.55 * (b ? b.length : 0)));
  };
  u(56);
  function Kh() {}
  m(83, 1, {}, Kh);
  _.yb = function (a) {
    return (a = a.match(/(\S*[\w\u00C0-\u1FFF\uAC00-\uD7AF]\S*)/g)) ? a.length : 0;
  };
  u(83);
  function Tk() {
    Tk = h;
    Uk = new If();
    J(Uk, "COLGROUP", (Wc(), Xc));
    J(Uk, "COL", Xc);
    J(Uk, "TH", Zc);
    Vk = new If();
    J(Vk, "EMBED", Xc);
    J(Vk, "OBJECT", Xc);
    J(Vk, "APPLET", Xc);
    J(Vk, "IFRAME", Xc);
    Wk = new Jf();
    O(Wk, "grid");
    O(Wk, "treegrid");
    Xk = new Jf();
    O(Xk, "gridcell");
    O(Xk, "columnheader");
    O(Xk, "row");
    O(Xk, "rowgroup");
    O(Xk, "rowheader");
    Yk = new Jf();
    O(Yk, "application");
    O(Yk, "banner");
    O(Yk, "complementary");
    O(Yk, "contentinfo");
    O(Yk, "form");
    O(Yk, "main");
    O(Yk, "navigation");
    O(Yk, "search");
  }
  function Zk(a, b) {
    var c, d, e;
    for (d = new K(a); d.b < d.d.J(); )
      if (((c = (x(d.b < d.d.J()), d.d.T((d.c = d.b++)))), (e = c.tagName), null == e ? Pd(b.a, null) : void 0 !== b.c.db(e)))
        return !(null == e ? xd(Pd(b.a, null)) : b.c.db(e)).a || $k(c);
    return !1;
  }
  function $k(a) {
    a = a.innerText;
    return !!a.length && !Sk(a);
  }
  function V(a, b, c) {
    2 <= Mh && R(a + b + " -\x3e " + c);
    return c;
  }
  function al(a) {
    Tk();
    var b, c, d, e, f, k, l, p;
    bl();
    for (f = C(a); f; ) {
      if (G("INPUT", f.tagName) || G(z(f, "contenteditable"), "true")) return V(cl, "", (X(), dl));
      f = C(f);
    }
    f = z(a, "role").toLowerCase();
    if ("presentation" === f) return V(el, "_" + f, (X(), dl));
    if (P(Wk, f) || P(Yk, f)) return V(el, "_" + f, (X(), fl));
    f = new N();
    k = a.getElementsByTagName("*");
    if (0 < a.getElementsByTagName("TABLE").length)
      for (e = 0; e < k.length; e++)
        for (c = k[e], d = C(c); d; ) {
          if (G("TABLE", d.tagName)) {
            d == a && (f.b[f.b.length] = c);
            break;
          }
          d = C(d);
        }
    else for (e = 0; e < k.length; e++) M(f, k[e]);
    for (k = new K(f); k.b < k.d.J(); )
      if (((b = (x(k.b < k.d.J()), k.d.T((k.c = k.b++)))), (c = z(b, "role").toLowerCase()), P(Xk, c) || P(Yk, c)))
        return V(gl, "_" + c, (X(), fl));
    if ("0" === z(a, "datatable")) return V(hl, "", (X(), dl));
    if (0 < a.getElementsByTagName("TABLE").length) return V(il, "", (X(), dl));
    k = a.rows;
    if (1 >= k.length) return V(jl, "", (X(), dl));
    c = null;
    for (d = b = 0; d < k.length; d++) (e = k[d].cells), e.length > b && ((b = e.length), (c = e));
    d = c;
    if (!d || 1 >= d.length) return V(kl, "", (X(), dl));
    if (((c = a.caption) && $k(c)) || a.tHead || a.tFoot || Zk(f, Uk)) return V(ll, "", (X(), fl));
    c = new N();
    for (e = new K(f); e.b < e.d.J(); ) (b = (x(e.b < e.d.J()), e.d.T((e.c = e.b++)))), G("TD", b.tagName) && (c.b[c.b.length] = b);
    for (e = new K(c); e.b < e.d.J(); ) {
      b = (x(e.b < e.d.J()), e.d.T((e.c = e.b++)));
      if (b.hasAttribute("abbr") || b.hasAttribute("headers") || b.hasAttribute("scope")) return V(ml, "", (X(), fl));
      b = b.getElementsByTagName("*");
      if (1 == b.length && G("ABBR", b[0].tagName)) return V(nl, "", (X(), fl));
    }
    e = a.ownerDocument.documentElement;
    b = (e.offsetWidth || 0) | 0;
    if (0 < b && ((a.offsetWidth || 0) | 0) > 0.95 * b) {
      p = !1;
      b = e.getElementsByTagName("META");
      for (l = 0; l < b.length && !p; l++) (p = b[l]), (p = G(p.name, "viewport"));
      if (!p) return V(ol, "", (X(), dl));
    }
    if (a.hasAttribute("summary")) return V(pl, "", (X(), fl));
    if (5 <= d.length) return V(ql, "", (X(), fl));
    for (d = new K(c); d.b < d.d.J(); )
      if (
        ((b = (x(d.b < d.d.J()), d.d.T((d.c = d.b++)))),
        (b = getComputedStyle(b, null).borderStyle),
        b.length && "none" !== b && "hidden" !== b)
      )
        return V(rl, "_" + b, (X(), fl));
    l = null;
    for (b = 0; b < k.length; b++)
      if (((d = getComputedStyle(k[b], null).backgroundColor), null == l)) l = d;
      else if (!G(l, d)) return V(sl, "", (X(), fl));
    if (20 <= k.length) return V(tl, "", (X(), fl));
    if (10 >= c.b.length) return V(ul, "", (X(), dl));
    if (Zk(f, Vk)) return V(vl, "", (X(), dl));
    f = (e.offsetHeight || 0) | 0;
    return 0 < f && ((a.offsetHeight || 0) | 0) > 0.9 * f ? V(wl, "", (X(), dl)) : V(xl, "", (X(), fl));
  }
  var Yk, Xk, Wk, Uk, Vk;
  function bl() {
    bl = h;
    cl = new $("INSIDE_EDITABLE_AREA", 0);
    el = new $("ROLE_TABLE", 1);
    gl = new $("ROLE_DESCENDANT", 2);
    hl = new $("DATATABLE_0", 3);
    ll = new $("CAPTION_THEAD_TFOOT_COLGROUP_COL_TH", 4);
    ml = new $("ABBR_HEADERS_SCOPE", 5);
    nl = new $("ONLY_HAS_ABBR", 6);
    ol = new $("MORE_95_PERCENT_DOC_WIDTH", 7);
    pl = new $("SUMMARY", 8);
    il = new $("NESTED_TABLE", 9);
    jl = new $("LESS_EQ_1_ROW", 10);
    kl = new $("LESS_EQ_1_COL", 11);
    ql = new $("MORE_EQ_5_COLS", 12);
    rl = new $("CELLS_HAVE_BORDER", 13);
    sl = new $("DIFFERENTLY_COLORED_ROWS", 14);
    tl = new $("MORE_EQ_20_ROWS", 15);
    ul = new $("LESS_EQ_10_CELLS", 16);
    vl = new $("EMBED_OBJECT_APPLET_IFRAME", 17);
    wl = new $("MORE_90_PERCENT_DOC_HEIGHT", 18);
    xl = new $("DEFAULT", 19);
    yl = new $("UNKNOWN", 20);
  }
  function $(a, b) {
    this.a = a;
    this.b = b;
  }
  m(8, 11, { 3: 1, 15: 1, 11: 1, 8: 1 }, $);
  var ml,
    ll,
    rl,
    hl,
    xl,
    sl,
    vl,
    cl,
    ul,
    kl,
    jl,
    wl,
    ol,
    tl,
    ql,
    il,
    nl,
    gl,
    el,
    pl,
    yl,
    zl = Gb(8, function () {
      bl();
      return D(w(zl, 1), g, 8, 0, [cl, el, gl, hl, ll, ml, nl, ol, pl, il, jl, kl, ql, rl, sl, tl, ul, vl, wl, xl, yl]);
    });
  function X() {
    X = h;
    fl = new Al("DATA", 0);
    dl = new Al("LAYOUT", 1);
  }
  function Al(a, b) {
    this.a = a;
    this.b = b;
  }
  m(39, 11, { 3: 1, 15: 1, 11: 1, 39: 1 }, Al);
  var fl,
    dl,
    Bl = Gb(39, function () {
      X();
      return D(w(Bl, 1), g, 39, 0, [fl, dl]);
    });
  function Cl(a, b) {
    var c;
    c = Dl(b);
    a.appendChild(c);
    return c;
  }
  function Dl(a) {
    var b;
    b = a.cloneNode(!1);
    1 == a.nodeType && ((a = getComputedStyle(a, null).direction), !a.length && (a = "auto"), b.setAttribute("dir", a));
    return b;
  }
  function El(a, b) {
    var c;
    c = a.parentNode;
    c || ((c = Dl(b)), c.appendChild(a));
    return c;
  }
  function Fl(a) {
    return pi(L(a.j, L(a.i, 0).a));
  }
  function Gl(a, b) {
    return P(a.b, b);
  }
  function Uh(a, b) {
    a.g += "\n";
    a.g += b.g;
    a.d += b.d;
    a.e += b.e;
    a.c = 0 == a.d ? 0 : a.e / a.d;
    a.a |= b.a;
    mf(a.i, b.i);
    a.b.G(b.b);
    a.f = gd(a.f, b.f);
  }
  function ai(a, b) {
    if (b == a.a) return !1;
    a.a = b;
    return !0;
  }
  function Hl(a) {
    var b;
    b = "[" + (L(a.j, L(a.i, 0).a).j + "-" + L(a.j, L(a.i, a.i.b.length - 1).a).j + ";");
    b += "tl\x3d" + a.f + ";";
    b += "nw\x3d" + a.d + ";";
    b += "ld\x3d" + a.c + ";";
    b = b + "]\t" + ((a.a ? "\u001b[0;32mCONTENT" : "\u001b[0;35mboilerplate") + "\u001b[0m,");
    b += "\u001b[1;30m" + td(new zh(a.b)) + "\u001b[0m";
    return (b += "\n" + a.g);
  }
  function Th(a, b) {
    var c, d;
    this.j = a;
    this.i = new N();
    M(this.i, cd(b));
    c = L(this.j, b);
    this.b = ((d = c.e), (c.e = new Jf()), d);
    this.d = c.i;
    this.e = c.g;
    this.f = c.n;
    this.g = c.o;
    this.c = 0 == this.d ? 0 : this.e / this.d;
  }
  m(50, 1, {}, Th);
  _.tS = function () {
    return Hl(this);
  };
  _.a = !1;
  _.c = 0;
  _.d = 0;
  _.e = 0;
  _.f = 0;
  u(50);
  function Vh(a) {
    this.a = a;
  }
  m(60, 1, {}, Vh);
  u(60);
  function Il() {
    Il = h;
    Jl = new Jf();
    O(Jl, "IMG");
  }
  function Kl() {
    Il();
  }
  m(112, 1, {}, Kl);
  _.zb = function (a) {
    var b;
    P(Jl, a.tagName) ? ((b = ""), "IMG" === a.tagName && (b = a.src), (a = new Ll(a, b))) : (a = null);
    return a;
  };
  _.Ab = function () {
    return Jl;
  };
  var Jl;
  u(112);
  function Ml() {
    Ml = h;
    Nl = new Jf();
    O(Nl, "BLOCKQUOTE");
    O(Nl, "IFRAME");
  }
  function Ol(a) {
    var b;
    if (-1 == (a.className || "").indexOf("twitter-tweet")) return null;
    b = a.getElementsByTagName("a");
    if (0 == b.length) return null;
    b = b[b.length - 1];
    if (!Ni(b.href, "twitter.com")) return null;
    a: {
      var c;
      c = md(wc(b, "pathname"), "/");
      for (b = c.length - 1; 0 <= b; b--)
        if (0 < c[b].length) {
          b = c[b];
          break a;
        }
      b = null;
    }
    return null == b ? null : new Pl(a, "twitter", b, null);
  }
  function Ql(a) {
    var b;
    if ("IFRAME" !== a.tagName || a.src.length) return null;
    b = a.contentWindow.document;
    if (!b) return null;
    b = b.getElementsByTagName("blockquote");
    if (1 > b.length) return null;
    b = z(b[0], "data-tweet-id");
    return b.length ? new Pl(a, "twitter", b, null) : null;
  }
  function Rl() {
    Ml();
  }
  m(113, 1, {}, Rl);
  _.zb = function (a) {
    var b;
    a && P(Nl, a.tagName)
      ? ((b = null),
        "BLOCKQUOTE" === a.tagName ? (b = Ol(a)) : "IFRAME" === a.tagName && (b = Ql(a)),
        b && 2 <= Mh && (R("Twitter embed extracted:"), R("    ID: " + b.b)),
        (a = b))
      : (a = null);
    return a;
  };
  _.Ab = function () {
    return Nl;
  };
  var Nl;
  u(113);
  function Sl() {
    Sl = h;
    Tl = new Jf();
    O(Tl, "IFRAME");
  }
  function Ul(a) {
    var b, c;
    if (!a || !P(Tl, a.tagName)) return null;
    c = a.src;
    if (!Ni(c, "player.vimeo.com")) return null;
    b = $doc.createElement("a");
    b.href = c;
    c = wc(b, "pathname");
    b = Si(nd(wc(b, "search"), 1));
    a: {
      var d;
      d = md(c, "/");
      for (c = d.length - 1; 0 <= c && "video" !== d[c]; c--)
        if (0 < d[c].length) {
          c = d[c];
          break a;
        }
      c = null;
    }
    if (null == c) return null;
    2 <= Mh && (R("Vimeo embed extracted:"), R("    ID:    " + c));
    return new Pl(a, "vimeo", c, b);
  }
  function Vl() {
    Sl();
  }
  m(114, 1, {}, Vl);
  _.zb = function (a) {
    return Ul(a);
  };
  _.Ab = function () {
    return Tl;
  };
  var Tl;
  u(114);
  function Wl() {
    Wl = h;
    Xl = new Jf();
    O(Xl, "IFRAME");
  }
  function Yl(a) {
    var b, c;
    if (!a || !P(Xl, a.tagName)) return null;
    c = a.src;
    if (!Ni(c, "youtube.com")) return null;
    b = $doc.createElement("a");
    b.href = c;
    c = wc(b, "pathname");
    b = Si(nd(wc(b, "search"), 1));
    a: {
      var d;
      d = md(c, "/");
      for (c = d.length - 1; 0 <= c && "embed" !== d[c]; c--)
        if (0 < d[c].length) {
          c = d[c];
          break a;
        }
      c = null;
    }
    if (null == c) return null;
    2 <= Mh && (R("YouTube embed extracted:"), R("    ID:    " + c));
    return new Pl(a, "youtube", c, b);
  }
  function Zl() {
    Wl();
  }
  m(115, 1, {}, Zl);
  _.zb = function (a) {
    return Yl(a);
  };
  _.Ab = function () {
    return Xl;
  };
  var Xl;
  u(115);
  function Wh(a, b, c) {
    if (!(1 > Mh))
      if (b) {
        R("\u001b[0;34m\x3c\x3c\x3c\x3c\x3c " + c + " \x3e\x3e\x3e\x3e\x3e");
        if (!(1 > Mh)) {
          b = "";
          for (c = new K(a.a); c.b < c.d.J(); ) (a = (x(c.b < c.d.J()), c.d.T((c.c = c.b++)))), (b += Hl(a) + "\n");
          R(b);
        }
        R("\u001b[0;34m\x3c\x3c\x3c\x3c\x3c                \x3e\x3e\x3e\x3e\x3e");
      } else R("\u001b[0;31m~~~~~ No Changes: " + c + " ~~~~~");
  }
  function Xh() {
    Xh = h;
    Yh = RegExp(
      "(^(comments|\u00a9 reuters|please rate this|post a comment|\\d+\\s+(comments|users responded in))|what you think\\.\\.\\.|add your comment|add comment|reader views|have your say|reader comments|r\u00e4tta artikeln|^thanks for your comments - this feedback is now closed$)",
      "i"
    );
  }
  var Yh;
  function hi() {
    hi = h;
    ii = new $l(!1);
    li = new $l(!0);
  }
  function gi(a, b) {
    var c, d, e, f, k;
    c = b.a;
    if (2 > c.b.length) return !1;
    d = !1;
    k = (y(0, c.b.length), c.b[0]);
    for (f = new Pe(c, 1); f.b < f.d.J(); )
      (c = (x(f.b < f.d.J()), f.d.T((f.c = f.b++)))),
        c.a && k.a
          ? ((e = L(c.j, L(c.i, 0).a).j - L(k.j, L(k.i, k.i.b.length - 1).a).j - 1),
            1 >= e
              ? ((e = !0),
                a.a ? k.f != c.f && (e = !1) : P(c.b, "BOILERPLATE_HEADING_FUSED") && (e = !1),
                P(k.b, "STRICTLY_NOT_CONTENT") != P(c.b, "STRICTLY_NOT_CONTENT") && (e = !1),
                P(k.b, "de.l3s.boilerpipe/TITLE") != P(c.b, "de.l3s.boilerpipe/TITLE") && (e = !1),
                !k.a && P(k.b, "de.l3s.boilerpipe/LI") && !P(c.b, "de.l3s.boilerpipe/LI") && (e = !1),
                e ? (Uh(k, c), Oe(f), (d = !0)) : (k = c))
              : (k = c))
          : (k = c);
    return d;
  }
  function $l(a) {
    this.a = a;
  }
  m(64, 1, {}, $l);
  _.tS = function () {
    return rb(am), am.n + ": postFiltering\x3d" + this.a;
  };
  _.a = !1;
  var li,
    ii,
    am = u(64);
  function bm() {
    bm = h;
    $h = RegExp("[\\?\\!\\.\\-\\:]+", "g");
  }
  function cm(a, b, c) {
    var d, e;
    e = md(b, c);
    if (1 != e.length) for (b = 0; b < e.length; b++) (d = e[b]), -1 == d.indexOf(".com") && ((c = (Ch(), Dh.yb(d))), 4 <= c && O(a, d));
  }
  function dm(a, b) {
    var c, d, e, f, k, l;
    l = md(a, b);
    if (1 == l.length) return null;
    d = 0;
    e = "";
    for (c = 0; c < l.length; c++)
      if (((k = l[c]), -1 == k.indexOf(".com") && ((f = (Ch(), Dh.yb(k))), f > d || k.length > e.length))) (d = f), (e = k);
    return 0 == e.length ? null : od(e);
  }
  function Zh(a) {
    bm();
    var b;
    if (a)
      for (this.a = new Jf(), a = jf(a, 0); a.b != a.d.c; ) {
        b = (x(a.b != a.d.c), (a.c = a.b), (a.b = a.b.a), ++a.a, a.c.c);
        var c = void 0;
        b = id(b);
        b = jd(b);
        b = od(b).toLowerCase();
        0 != b.length &&
          O(this.a, b) &&
          ((c = dm(b, "[ ]*[\\|\u00bb|-][ ]*")),
          null != c && O(this.a, c),
          (c = dm(b, "[ ]*[\\|\u00bb|:][ ]*")),
          null != c && O(this.a, c),
          (c = dm(b, "[ ]*[\\|\u00bb|:\\(\\)][ ]*")),
          null != c && O(this.a, c),
          (c = dm(b, "[ ]*[\\|\u00bb|:\\(\\)\\-][ ]*")),
          null != c && O(this.a, c),
          (c = dm(b, "[ ]*[\\|\u00bb|,|:\\(\\)\\-][ ]*")),
          null != c && O(this.a, c),
          (c = dm(b, "[ ]*[\\|\u00bb|,|:\\(\\)\\-\u00a0][ ]*")),
          null != c && O(this.a, c),
          cm(this.a, b, "[ ]+[\\|][ ]+"),
          cm(this.a, b, "[ ]+[\\-][ ]+"),
          O(this.a, ld(b, " - [^\\-]+$")),
          O(this.a, ld(b, "^[^\\-]+ - ")));
      }
    else this.a = null;
  }
  m(116, 1, {}, Zh);
  var $h;
  u(116);
  function mi() {
    mi = h;
    ni = new em(!0);
  }
  function em(a) {
    this.a = a;
  }
  m(66, 1, {}, em);
  _.a = !1;
  var ni;
  u(66);
  function fm(a, b, c) {
    b = L(a.d, b);
    c = L(a.d, c);
    return a.c || (b.nodeType != c.nodeType ? 0 : 1 != b.nodeType || b.nodeName === c.nodeName) ? b.parentNode == c.parentNode : !1;
  }
  function ei(a, b) {
    var c, d, e, f, k, l, p, t, v, Y;
    a.g = b.a;
    if (2 > a.g.b.length) return !1;
    d = a.g;
    e = $doc.documentElement;
    l = new N();
    for (f = 0; f < d.b.length; ++f) {
      k = f + 1 == d.b.length ? e : Fl((y(f + 1, d.b.length), d.b[f + 1]));
      0 == f ? (p = e) : ((p = (y(f - 1, d.b.length), d.b[f - 1])), (p = oi(L(p.j, L(p.i, p.i.b.length - 1).a))));
      v = p;
      p = Fl((y(f, d.b.length), d.b[f]));
      for (t = p.parentNode; !t.contains(v) && !t.contains(k); ) (p = t), (t = t.parentNode);
      l.b[l.b.length] = p;
    }
    a.d = l;
    l = F(gm, 0, a.g.b.length, 7);
    t = p = 0;
    d = F(gm, 0, a.g.b.length, 7);
    f = e = 0;
    k = !1;
    for (v = 0; v < a.g.b.length; v++)
      if ((!a.b && Gl(L(a.g, v), "de.l3s.boilerpipe/TITLE")) || (!a.a && Gl(L(a.g, v), "de.l3s.boilerpipe/HEADING"))) (p = t), (e = f);
      else if (L(a.g, v).a && !Gl(L(a.g, v), "STRICTLY_NOT_CONTENT") && !Gl(L(a.g, v), "de.l3s.boilerpipe/TITLE"))
        for (l[t++] = v, Y = e; Y < f; Y++)
          (c = d[Y]), v - c > a.e ? Y == e && ++e : fm(a, v, c) && ((k = !0), ai(L(a.g, c), !0), (d[Y] = d[e++]));
      else if (L(a.g, v).c <= a.f && !L(a.g, v).a && !Gl(L(a.g, v), "STRICTLY_NOT_CONTENT") && !Gl(L(a.g, v), "de.l3s.boilerpipe/TITLE")) {
        for (Y = p; Y < t; Y++)
          if (((c = l[Y]), v - c > a.e)) Y == p && ++p;
          else if (fm(a, v, c)) {
            k = !0;
            ai(L(a.g, v), !0);
            l[Y] = l[p++];
            break;
          }
        Y == t ? (d[f++] = v) : (l[t++] = v);
      }
    return k;
  }
  function hm(a, b, c, d, e) {
    this.b = a;
    this.a = b;
    this.c = c;
    this.f = d;
    this.e = e;
  }
  m(118, 1, {}, hm);
  _.a = !1;
  _.b = !1;
  _.c = !1;
  _.e = 0;
  _.f = 0;
  u(118);
  function di() {
    var a = new im();
    a.a = !0;
    return a;
  }
  function fi(a) {
    return new hm(a.b, a.a, a.c, a.e, a.d);
  }
  function im() {
    this.c = this.a = this.b = !1;
    this.d = this.e = 0;
  }
  m(63, 1, {}, im);
  _.a = !1;
  _.b = !1;
  _.c = !1;
  _.d = 0;
  _.e = 0;
  u(63);
  function ji() {
    ji = h;
    ki = new jm("de.l3s.boilerpipe/TITLE");
  }
  function jm(a) {
    this.a = a;
  }
  m(65, 1, {}, jm);
  var ki;
  u(65);
  function bi() {
    bi = h;
    ci = new km(D(w(n, 1), g, 2, 4, ["STRICTLY_NOT_CONTENT"]));
  }
  function km(a) {
    this.a = a;
  }
  m(117, 1, {}, km);
  var ci;
  u(117);
  function lm(a, b) {
    var c, d;
    c = xi(b);
    2 > Mh ||
      ((d = getComputedStyle(b, null)),
      R(
        (c ? "KEEP " : "SKIP ") +
          b.tagName +
          ": id\x3d" +
          b.id +
          ", dsp\x3d" +
          d.display +
          ", vis\x3d" +
          d.visibility +
          ", opaq\x3d" +
          d.opacity
      ));
    if (!c) return O(a.d, b), !1;
    if (P(a.b, b.tagName))
      for (d = new K(a.c); d.b < d.d.J(); )
        if (((c = (x(d.b < d.d.J()), d.d.T((d.c = d.b++)))), (c = c.zb(b)))) return (d = a.a), Sh(d, d.d), M(d.b.a, c), !1;
    switch (b.tagName) {
      case "BR":
        return (c = a.a), c.c && (Sh(c, c.d), ++c.d, (c.c = !1)), (c = c.g), (c.j += "\n"), M(c.a, b), !1;
      case "TABLE":
        c = al(b);
        2 > Mh ||
          ((d = C(b)),
          R(
            "TABLE: " +
              c +
              ", id\x3d" +
              b.id +
              ", class\x3d" +
              (b.className || "") +
              ", parent\x3d[" +
              d.tagName +
              ", id\x3d" +
              d.id +
              ", class\x3d" +
              (d.className || "") +
              "]"
          ));
        if (c == (X(), fl)) return (c = a.a), Sh(c, c.d), M(c.b.a, new Hm(b)), !1;
        break;
      case "VIDEO":
        return (c = a.a), (d = new Im(b)), Sh(c, c.d), M(c.b.a, d), !1;
      case "OPTION":
      case "OBJECT":
      case "EMBED":
      case "APPLET":
        return (a.a.c = !0), !1;
      case "HEAD":
      case "STYLE":
      case "SCRIPT":
      case "LINK":
      case "NOSCRIPT":
        return !1;
    }
    c = a.a;
    Jm();
    var e, f, k, l;
    l = getComputedStyle(b, null);
    d = new Km();
    switch (l.display) {
      case "inline":
        break;
      case "inline-block":
      case "inline-flex":
        d.a = !0;
        break;
      default:
        (d.b = !0), (d.a = !0);
    }
    l = b.tagName;
    if ("HTML" !== l && "BODY" !== l)
      switch (
        ((f = z(b, "class")),
        (e = b.classList.length),
        (k = z(b, "id")),
        (Lm.test(f) || Lm.test(k)) && 5 >= e && ((e = d.d), (e[e.length] = "STRICTLY_NOT_CONTENT")),
        l)
      ) {
        case "ASIDE":
        case "NAV":
          l = d.d;
          l[l.length] = "STRICTLY_NOT_CONTENT";
          break;
        case "LI":
          l = d.d;
          l[l.length] = "de.l3s.boilerpipe/LI";
          break;
        case "H1":
          l = d.d;
          l[l.length] = "de.l3s.boilerpipe/H1";
          l = d.d;
          l[l.length] = "de.l3s.boilerpipe/HEADING";
          break;
        case "H2":
          l = d.d;
          l[l.length] = "de.l3s.boilerpipe/H2";
          l = d.d;
          l[l.length] = "de.l3s.boilerpipe/HEADING";
          break;
        case "H3":
          l = d.d;
          l[l.length] = "de.l3s.boilerpipe/H3";
          l = d.d;
          l[l.length] = "de.l3s.boilerpipe/HEADING";
          break;
        case "A":
          (d.a = !0), b.hasAttribute("href") && (d.c = !0);
      }
    M(c.a.a, d);
    d.a && ++c.f;
    d.c && ((l = c.g), (l.e = !0), (l.j += " "));
    c.c |= d.b;
    return !0;
  }
  function Oh(a) {
    var b;
    this.d = new Jf();
    this.a = a;
    this.c = new N();
    M(this.c, new Kl());
    M(this.c, new Rl());
    M(this.c, new Vl());
    M(this.c, new Zl());
    this.b = new Jf();
    for (b = new K(this.c); b.b < b.d.J(); ) (a = (x(b.b < b.d.J()), b.d.T((b.c = b.b++)))), sd(this.b, a.Ab());
  }
  m(101, 1, {}, Oh);
  _.lb = function () {
    var a = this.a,
      b;
    b = a.a;
    var c;
    c = b.a.b.length;
    if (0 < c) b = (fh(c - 1, b.a.b.length), L(b.a, c - 1));
    else throw new sf();
    b.a && --a.f;
    if (a.c || b.b) Sh(a, a.d), ++a.d;
    b.c && ((b = a.g), (b.e = !1), (b.j += " "));
    a = a.a;
    b = a.a.b.length;
    if (0 < b) fh(b - 1, a.a.b.length), a.a.U(b - 1);
    else throw new sf();
  };
  _.mb = function (a) {
    switch (a.nodeType) {
      case 3:
        var b = this.a;
        b.c && (Sh(b, b.d), ++b.d, (b.c = !1));
        var c = b.g,
          b = b.f,
          d;
        d = a.data;
        d.length &&
          ((c.j += d),
          M(c.a, a),
          Sk(d) ||
            ((a = (Ch(), Dh.yb(d))),
            (c.i += a),
            c.e && (c.g += a),
            (c.f = c.a.b.length - 1),
            c.d < c.c && (c.d = c.f),
            -1 == c.b && (c.b = b)));
        return !1;
      case 1:
        return lm(this, a);
      default:
        return !1;
    }
  };
  u(101);
  function Jm() {
    Jm = h;
    Lm = /\bcomments?\b/;
  }
  function Km() {
    this.d = [];
  }
  m(135, 1, {}, Km);
  _.a = !1;
  _.b = !1;
  _.c = !1;
  var Lm;
  u(135);
  function Mm() {
    this.a = new N();
  }
  m(92, 1, {}, Mm);
  u(92);
  function Sh(a, b) {
    var c;
    c = a.g;
    var d = a.e;
    c.c == c.a.b.length
      ? (c = null)
      : c.d < c.c
      ? (Nm(c), (c = null))
      : ((d = new Om(c.j, c.a, c.c, c.a.b.length, c.d, c.f, c.i, c.g, c.b, d)), Nm(c), (c = d));
    if (c) {
      c.d = b;
      ++a.e;
      var e, f;
      for (e = new K(a.a.a); e.b < e.d.J(); ) for (d = (x(e.b < e.d.J()), e.d.T((e.c = e.b++))), f = 0; f < d.d.length; f++) O(c.e, d.d[f]);
      M(a.b.a, c);
    }
  }
  function Nh() {
    this.b = new Mm();
    this.a = new gh();
    this.g = new Pm();
    this.d = 0;
  }
  m(100, 1, {}, Nh);
  _.c = !1;
  _.d = 0;
  _.e = 0;
  _.f = 0;
  u(100);
  m(168, 1, {});
  _.p = !1;
  u(168);
  function Pl(a, b, c, d) {
    this.a = new N();
    this.b = c;
    M(this.a, a);
    this.c = b;
    !d && new If();
  }
  m(40, 168, {}, Pl);
  _.Bb = function (a) {
    var b;
    if (a) return "";
    a = $doc.createElement("div");
    b = $doc.createElement("div");
    b.className = "embed-placeholder";
    b.setAttribute("data-type", this.c);
    b.setAttribute("data-id", this.b);
    a.appendChild(b);
    return a.innerHTML;
  };
  u(40);
  function Ll(a, b) {
    this.a = a;
    this.b = b;
    null == this.b && (this.b = "");
  }
  m(36, 168, { 36: 1 }, Ll);
  _.Bb = function (a) {
    var b;
    if (a) return "";
    a = $doc.createElement("div");
    b = this.a.cloneNode(!1);
    Qi(b);
    a.appendChild(b);
    return a.innerHTML;
  };
  u(36);
  function Hm(a) {
    this.a = a;
  }
  m(138, 168, {}, Hm);
  _.Bb = function (a) {
    var b = this.a,
      c;
    b = ((c = new N()), Qh(new Rh(new Ui(c)), b), c);
    if (0 == b.b.length) a = "";
    else {
      c = new dj(b);
      var d = (y(0, b.b.length), b.b[0]),
        e;
      for (e = d.parentNode; e && 9 != e.nodeType; d = e, e = e.parentNode);
      Qh(new Rh(c), d);
      c = c.c;
      for (b = (y(0, b.b.length), b.b[0]); 1 == c.a.b && c.b != b && 3 != hf(c.a, 0).b.nodeType; ) c = hf(c.a, 0);
      b = ij(c);
      1 != b.nodeType
        ? (a = "")
        : (Ti(b, "ID", D(w(n, 1), g, 2, 4, ["*"])),
          Oi(b),
          Ti(b, "COLOR", D(w(n, 1), g, 2, 4, ["FONT"])),
          Ti(b, "BGCOLOR", D(w(n, 1), g, 2, 4, ["TABLE", "TR", "TD", "TH"])),
          Ti(b, "STYLE", D(w(n, 1), g, 2, 4, ["*"])),
          a ? ($doc.body.appendChild(b), (a = b.innerText), $doc.body.removeChild(b)) : (a = b.outerHTML));
    }
    return a;
  };
  u(138);
  function pi(a) {
    return L(a.a, a.c);
  }
  function oi(a) {
    return L(a.a, a.f);
  }
  function Om(a, b, c, d, e, f, k, l, p, t) {
    this.o = a;
    this.a = b;
    this.k = c;
    this.b = d;
    this.c = e;
    this.f = f;
    this.i = k;
    this.g = l;
    this.e = new Jf();
    this.n = p;
    this.j = t;
  }
  m(24, 168, { 24: 1 }, Om);
  _.Bb = function (a) {
    var b, c;
    if (P(this.e, "de.l3s.boilerpipe/TITLE")) return "";
    var d = new Re(this.a, this.k, this.b),
      e;
    if (1 == d.b) b = hj(new fj((y(0, d.b), L(d.c, d.a))));
    else {
      c = (y(0, d.b), L(d.c, d.a));
      b = c.cloneNode(!1);
      for (d = new ej(d); d.a; )
        if (gj(d, c)) {
          if (!d.a) break;
          for (;;) {
            for (e = c.nextSibling; e && !e.contains(d.a); ) e = e.nextSibling;
            if (e) {
              b = El(b, c.parentNode);
              b = Cl(b, e);
              c = e;
              break;
            }
            c = c.parentNode;
            b = El(b, c);
          }
        } else {
          for (c = c.firstChild; !c.contains(d.a); ) c = c.nextSibling;
          b = Cl(b, c);
        }
      for (; b.parentNode; ) b = b.parentNode;
    }
    1 != b.nodeType && ((c = C(Qe(new Re(this.a, this.k, this.b), 0)).cloneNode(!1)), c.appendChild(b), (b = c));
    Oi(b);
    Ti(b, "ID", D(w(n, 1), g, 2, 4, ["*"]));
    Ti(b, "COLOR", D(w(n, 1), g, 2, 4, ["FONT"]));
    return a ? b.textContent : b.outerHTML;
  };
  _.b = 0;
  _.c = 0;
  _.d = 0;
  _.f = 0;
  _.g = 0;
  _.i = 0;
  _.j = 0;
  _.k = 0;
  _.n = 0;
  u(24);
  function Nm(a) {
    a.j = "";
    a.i = 0;
    a.g = 0;
    a.c = a.a.b.length;
    a.b = -1;
  }
  function Pm() {
    this.a = new N();
  }
  m(129, 1, {}, Pm);
  _.b = -1;
  _.c = 0;
  _.d = -1;
  _.e = !1;
  _.f = 0;
  _.g = 0;
  _.i = 0;
  _.j = "";
  u(129);
  function Im(a) {
    this.a = a;
  }
  m(134, 168, {}, Im);
  _.Bb = function (a) {
    var b, c, d;
    if (a) return "";
    a = $doc.createElement("div");
    d = this.a.cloneNode(!1);
    for (c = 0; c < this.a.childNodes.length; c++)
      (b = this.a.childNodes[c]),
        1 != b.nodeType || ("SOURCE" !== b.tagName && "TRACK" !== b.tagName) || ((b = b.cloneNode(!1)), d.appendChild(b));
    d.poster.length && (d.poster = d.poster);
    Pi(d);
    Ti(d, "ID", D(w(n, 1), g, 2, 4, ["*"]));
    a.appendChild(d);
    return a.innerHTML;
  };
  u(134);
  m(170, 1, {});
  _.Db = function (a) {
    var b;
    b = 0;
    a && (b = this.Cb(a));
    2 <= Mh && R(tb(this.cZ) + ": " + b + "/" + this.Eb());
    return gd(b, this.Eb());
  };
  u(170);
  function qi() {
    this.b = 25;
    this.c = 75e3;
    this.a = 2e5;
  }
  m(130, 170, {}, qi);
  _.Cb = function (a) {
    a = ((a.offsetWidth || 0) | 0) * ((a.offsetHeight || 0) | 0);
    if (a < this.c) return 0;
    a = Pa(((a - this.c) / (this.a - this.c)) * this.b);
    return gd(a, this.b);
  };
  _.Eb = function () {
    return this.b;
  };
  _.a = 0;
  _.b = 0;
  _.c = 0;
  u(130);
  function ri() {
    this.a = 25;
  }
  m(131, 170, {}, ri);
  _.Cb = function (a) {
    var b, c;
    b = (a.offsetHeight || 0) | 0;
    if (0 >= b) return 0;
    c = (a.offsetWidth || 0) | 0;
    a = 0;
    b = c / b;
    1.4500000476837158 < b && 1.7999999523162842 > b
      ? (a = 1)
      : 1.2999999523162842 < b && 2.200000047683716 > b && (a = 0.4000000059604645);
    return Pa(this.a * a);
  };
  _.Eb = function () {
    return this.a;
  };
  _.a = 0;
  u(131);
  function si(a) {
    this.b = 25;
    this.a = a;
  }
  m(132, 170, {}, si);
  _.Cb = function (a) {
    var b;
    if (!this.a) return 0;
    a = Mi(this.a).b.length - 1 - (Mi(Ph(this.a, a)).b.length - 1);
    b = 0;
    4 > a ? (b = 1) : 6 > a ? (b = 0.6000000238418579) : 8 > a && (b = 0.20000000298023224);
    return Pa(this.b * b);
  };
  _.Eb = function () {
    return this.b;
  };
  _.b = 0;
  u(132);
  function ti() {
    this.a = 15;
  }
  m(133, 170, {}, ti);
  _.Cb = function (a) {
    var b;
    a = Mi(a);
    for (b = new K(a); b.b < b.d.J(); )
      if (((a = (x(b.b < b.d.J()), b.d.T((b.c = b.b++)))), 1 == a.nodeType && "FIGURE" === a.tagName)) return this.a;
    return 0;
  };
  _.Eb = function () {
    return this.a;
  };
  _.a = 0;
  u(133);
  var gm, Qm;
  Qm = zb("I");
  Qm.k = "I";
  Qm.f = 1;
  gm = Qm;
  u(151);
  u(153);
  u(null);
  u(156);
  Nf = Hb();
  _ = (function (a) {
    var b = this;
    if ("$wnd" == a) return $wnd;
    if ("" === a) return b;
    "$wnd." == a.substring(0, 5) && ((b = $wnd), (a = a.substring(5)));
    a = a.split(".");
    a[0] in b || !b.execScript || b.execScript("var " + a[0]);
    for (var c; a.length && (c = a.shift()); ) b[c] ? (b = b[c]) : (b = b[c] = {});
    return b;
  })("org.chromium.distiller.DomDistiller");
  _.apply = function () {
    var a;
    return Ih(((a = {}), a));
  };
  _.applyWithOptions = Ih;
  function Rm(a) {
    return function () {
      var b;
      a: {
        var c = arguments,
          d;
        0 != Qb && ((d = Date.now ? Date.now() : new Date().getTime()), 2e3 < d - Sb && ((Sb = d), (Rb = $wnd.setTimeout(Pb, 10))));
        if (0 == Qb++) {
          d = (Tb(), Ub);
          var e, f;
          if (d.a) {
            f = null;
            do (e = d.a), (d.a = null), (f = jc(e, f));
            while (d.a);
            d.a = f;
          }
          d = !0;
        } else d = !1;
        try {
          b = a.apply(this, c);
          break a;
        } finally {
          if ((c = d))
            if (((d = (Tb(), Ub)), d.b)) {
              f = null;
              do (e = d.b), (d.b = null), (f = jc(e, f));
              while (d.b);
              d.b = f;
            }
          --Qb;
          c && -1 != Rb && ($wnd.clearTimeout(Rb), (Rb = -1));
        }
        b = void 0;
      }
      return b;
    };
  }
  var gwtOnLoad = (gwtOnLoad = function (a, b, c) {
    function d() {
      for (var a = 0; a < e.length; a++) e[a]();
    }
    null == ha && (ha = []);
    var e = ha;
    $moduleName = b;
    $moduleBase = c;
    if (a)
      try {
        Rm(d)();
      } catch (f) {
        a(b, f);
      }
    else Rm(d)();
  });
  (function () {
    null == ha && (ha = []);
    for (var a = ha, b = 0; b < arguments.length; b++) a.push(arguments[b]);
  })(function () {
    $wnd.setTimeout(Rm(Ac));
    var a, b, c;
    b = $doc.compatMode;
    a = D(w(n, 1), g, 2, 4, ["CSS1Compat"]);
    for (c = 0; c < a.length && a[c] !== b; c++);
  });
  var Sm = [
    [
      ["locale", "default"],
      ["user.agent", "safari"]
    ]
  ];
  "object" === typeof window && "object" === typeof window.$gwt && (window.$gwt.permProps = Sm);
  window.gwtOnLoad = gwtOnLoad;
  gwtOnLoad(undefined, "domdistiller", "", 0);
})();
