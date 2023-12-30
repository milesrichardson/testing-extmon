(function () {
  const compiler = {};
  compiler["VERSION"] = "2.0.21";
  ("use strict");
  function l(a, b) {
    var c = void 0;
    return new (c || (c = Promise))(function (d, e) {
      function f(k) {
        try {
          g(b.next(k));
        } catch (m) {
          e(m);
        }
      }
      function h(k) {
        try {
          g(b["throw"](k));
        } catch (m) {
          e(m);
        }
      }
      function g(k) {
        k.done
          ? d(k.value)
          : new c(function (m) {
              m(k.value);
            }).then(f, h);
      }
      g((b = b.apply(a, void 0)).next());
    });
  }
  var aa = class {
    constructor(a, b) {
      this.i = a;
      this.type = "wizkids-google-docs-inbound";
      this.g = b;
      this.options = !1;
    }
  };
  var ba = class {
    constructor() {
      this.name = "StopPropagation";
    }
  };
  function w(a, ...b) {
    var c = Array.from(a.Oa.entries()).sort(([, d], [, e]) => {
      var f, h;
      return (null !== (f = e.priority) && void 0 !== f ? f : 0) - (null !== (h = d.priority) && void 0 !== h ? h : 0);
    });
    for (const [d, e] of c) if (((c = d(...b)), e.once && a.remove(d), c instanceof ba && "StopPropagation" === c.name)) return c;
  }
  var y = class {
    constructor() {
      this.Oa = new Map();
    }
    add(a, b = {}) {
      this.Oa.has(a) || this.Oa.set(a, b);
    }
    once(a, b = {}) {
      this.Oa.has(a) || this.Oa.set(a, Object.assign(Object.assign({}, b), { once: !0 }));
    }
    remove(a) {
      this.Oa.delete(a);
    }
    clear() {
      this.Oa.clear();
    }
  };
  var ca = class {
    constructor() {
      this.C = !1;
      this.Va = new y();
    }
    lc() {
      this.C || ((this.C = !0), this.g(), w(this.Va), this.Va.clear());
    }
    g() {}
  };
  function ea(a, b) {
    var c = document;
    a: {
      for (d of a.i) if (c === d.i && "wizkids-google-docs-inbound" === d.type && b === d.g && !1 === d.options) break a;
      var d = null;
    }
    d || (a.i.push(new aa(c, b)), c.addEventListener("wizkids-google-docs-inbound", b, !1));
  }
  var fa = class extends ca {
    constructor() {
      super(...arguments);
      this.i = [];
    }
    g() {
      super.g();
      for (const a of this.i) a.i.removeEventListener(a.type, a.g, a.options);
      this.i = [];
    }
  };
  function A(a) {
    return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
  }
  function ha(a, b) {
    const c = [];
    var d = "",
      e = 0;
    for (let g = 0; g < a.length; g++) {
      var f = a[g];
      if ("[" === f) {
        if (0 === e) {
          if ("" === d) throw Error("Something went wrong. Tried to push property but it was empty @ " + g + " - " + a);
          c.push(d);
          d = "";
        } else d += f;
        e++;
      } else if ("]" === f) {
        e--;
        if (0 > e) throw Error("Something went wrong. Found a closing bracket without a starting bracket @ " + g + " - " + a);
        if (0 === e) {
          f = ha(d, b);
          if ("number" !== typeof f && "string" !== typeof f)
            throw Error(
              "Something went wrong. The property " +
                d +
                " didn't resolve into a number or string! It gave " +
                typeof f +
                " @ " +
                g +
                " - " +
                a
            );
          c.push(f);
          d = "";
        } else d += f;
      } else if (0 < e) d += f;
      else if ("." === f) {
        if ("" === d) throw Error("Something went wrong. Tried to push property but it was empty @ " + g + " - " + a);
        c.push(d);
        d = "";
      } else d += f;
    }
    if (0 !== e) throw Error("Something went wrong. The path ended unexpectedly " + a);
    0 < d.length && c.push(d);
    let h;
    for (a = 0; a < c.length; a++)
      if (((e = c[a]), 0 === a))
        if ("string" === typeof e && e.match(/([0-9]+(\.[0-9]+)?)|\.[0-9]+/)) h = e.match(/\./) ? parseFloat(e) : parseInt(e, 10);
        else if ("string" === typeof e)
          if (e in b) h = b[e];
          else throw Error("Unable to find variable `" + e + "` in variables parameter!");
        else h = e;
      else
        "string" === typeof e
          ? (d = e.match(/^([a-zA-Z0-9$_]+)\((.*?)\)$/))
            ? ((e = d[2].split(",").map((g) => ha(g, b))), (h = h[d[1]](...e)))
            : (h = h[e])
          : (h = h[e]);
    return h;
  }
  function ia(a) {
    return a === window || (a && a.document && a.location && a.alert && a.setInterval);
  }
  function ja(a) {
    return a === document || (a && "#document" === a.nodeName);
  }
  function ka(a, b) {
    if (b in a.C) return a.C[b];
    for (const c in window) {
      const d = window[c];
      if (
        "function" === typeof d &&
        "prototype" in d &&
        "object" === typeof d.prototype &&
        "constructor" in d.prototype &&
        "function" === typeof d.prototype.constructor &&
        "toString" in d.prototype &&
        "function" === typeof d.prototype.toString &&
        -1 !== d.prototype.toString.toString().indexOf('"' + b + "(")
      )
        return (a.C[b] = d);
    }
    throw Error("Unable to get selection constructor");
  }
  function la(a) {
    if (null !== a.F) return a.F;
    const b = /^function(?: [a-zA-Z0-9$_]+)?\(a,c,d,e\)\{([\w\W]+)\.getSelection\(\);[\w\W]+\.getType\(\)/;
    for (const c in window) {
      const d = window[c];
      if ("function" !== typeof d) continue;
      const e = d.toString().match(b);
      if (e && !e[1].includes("function(){")) return (a.F = { key: c, value: d }), { key: c, value: d };
    }
    throw Error("Unable to get selection setter");
  }
  function oa(a) {
    return (b, c) => {
      a: if (null !== a.g) var d = a.g;
      else {
        var e = window.KX_kixApp;
        for (var f in e)
          try {
            const m = e[f];
            if ("object" === typeof m)
              for (const n in m)
                try {
                  const q = m[n];
                  if (q && "object" === typeof q && q["application/x-vnd.google-docs-document-slice-clip+wrapped"]) {
                    d = a.g = q;
                    break a;
                  }
                } catch (q) {}
          } catch (m) {}
        d = null;
      }
      if (!(d && b in d)) return !1;
      a: {
        e = d[b];
        f = Object.keys(e.constructor.prototype);
        for (h of f)
          if (((f = e[h]), "function" === typeof f && -1 !== f.toString().indexOf("getData"))) {
            var h = f;
            break a;
          }
        h = null;
      }
      if (!h) return !1;
      a: if (null !== a.u) var g = a.u;
      else {
        for (g in window)
          if (
            ((e = window[g]),
            "function" === typeof e &&
              e.toString().match(/^function(?: [a-zA-Z0-9$_]+)?\(a,c\)\{this\.[a-zA-Z0-9$_]+=a;this\.[a-zA-Z0-9$_]+=c;?}$/) &&
              ((f = Object.keys(e.prototype)), 1 === f.length && "constructor" === f[0]))
          ) {
            g = a.u = e;
            break a;
          }
        g = null;
      }
      a: if (null !== a.A) var k = a.A;
      else {
        for (k in window)
          if (
            ((e = window[k]),
            "function" === typeof e &&
              e.toString().match(/^function(?: [a-zA-Z0-9$_]+)?\(a,c\)\{this\.[a-zA-Z0-9$_]+=a;this\.[a-zA-Z0-9$_]+=c;?}$/) &&
              ((f = Object.keys(e.prototype)), f.includes("getData") && f.includes("getMimeType")))
          ) {
            k = a.A = e;
            break a;
          }
        k = null;
      }
      if (!g || !k) return !1;
      c = new k(b, c);
      k = null;
      (e = h.toString().match(/\.([a-zA-Z0-9$_]+)\.getData\(\);/)) && g.toString().includes(`this.${e[1]}=c`) && (k = new g(null, c));
      null === k && (k = new g(c, null));
      h.call(d[b], k);
      return !0;
    };
  }
  function pa() {
    const a = window.KX_kixApp;
    for (const c in a) {
      const d = a[c];
      if (
        d &&
        d instanceof Object &&
        !Array.isArray(d) &&
        !ia(d) &&
        "function" === typeof d.getId &&
        "function" === typeof d.getParent &&
        "function" === typeof d.removeChild &&
        "function" === typeof d.render &&
        "function" === typeof d.listen
      ) {
        var b = Object.keys(d)
          .filter((e) => d[e] instanceof HTMLElement)
          .map((e) => d[e]);
        if (1 === b.length && ((b = b[0]), b.parentNode && "BODY" === b.parentNode.tagName)) return d;
      }
    }
    throw Error("Unable to get equation element");
  }
  function qa(a) {
    const b = window;
    for (const e in b) {
      var c = b[e];
      if ("function" !== typeof c) continue;
      c = c.toString();
      const f = c.indexOf(a + "(");
      if (-1 === f) continue;
      var d = c.substring(f).match(/^[a-zA-Z0-9$_]+\([a-zA-Z0-9$_]+,([a-zA-Z0-9$_]+),/);
      if (!d) continue;
      d = c.substring(0, f).match(new RegExp(`${A(d[1])}=([a-zA-Z0-9$_]+)\\(([a-zA-Z0-9$_]+),([a-zA-Z0-9$_]+)\\)`));
      if (!d) continue;
      const h = d[1];
      c = c.substring(0, f).match(new RegExp(`var ${A(d[3])}=(.*?);`));
      if (!c) continue;
      const g = ha(`window.${c[1]}`, window);
      if (g) return (k) => window[h](k, g);
    }
    throw Error("Unable to get function");
  }
  function ra() {
    const a = window;
    for (const b in a) {
      const c = a[b];
      if ("function" !== typeof c) continue;
      const d = c.toString().match(/^function(?: [a-zA-Z0-9$_]+)?\((a,c(,d)?)\)\{(.*?)\.isVisible(.*?)\.dispatchEvent/);
      if (d) {
        const e = {
          value: c,
          pd: c,
          key: b,
          parent: a,
          Oe: (f) => {
            const h = pa(),
              g = [h];
            3 === d[1].split(",").length && g.push(qa(b)(h));
            g.push(f);
            e.pd.apply(e.parent, g);
          }
        };
        return e;
      }
    }
    throw Error("Unable to get function");
  }
  function sa(a) {
    if (a.D) return a.D;
    var { key: b } = la(a);
    b = new RegExp(`${A(b)}\\(([^,\\)]+)`);
    a: if (a.s) var c = a.s;
    else {
      var d = document.querySelector(".kix-appview-editor"),
        e = window.KX_kixApp;
      for (c in e) {
        const g = e[c];
        if (
          g &&
          g instanceof Object &&
          !Array.isArray(g) &&
          !ia(g) &&
          "function" !== typeof g.initialize &&
          "function" !== typeof g.addEventListener &&
          "function" !== typeof g.render
        )
          for (var f in g)
            if (g[f] === d && "function" === typeof g.setActive) {
              c = a.s = g;
              break a;
            }
      }
      throw Error("Unable to get element");
    }
    for (d = f = c; d.__proto__; ) {
      d = d.__proto__;
      for (var h in d)
        if ("function" === typeof d[h] && (c = d[h].toString().match(b)) && ((c = c[1].split(".")), !(2 > c.length || "this" !== c[0]))) {
          c.shift();
          for (h = f; void 0 !== (b = c.shift()); ) h = h[b];
          return (a.D = h);
        }
    }
    throw Error("Unable to get selection element");
  }
  var ta = class {
    constructor() {
      this.i = this.l = null;
      this.C = {};
      this.D = this.s = this.A = this.u = this.g = this.F = null;
    }
  };
  var ua = class {
    constructor() {
      this.type = "equation";
    }
  };
  var wa = class {
    constructor(a) {
      this.type = "equation_function";
      this.g = a;
    }
  };
  var xa = class {
    constructor(a) {
      this.type = a;
    }
  };
  var ya = class extends xa {
    constructor(a) {
      super("InlineLocation");
      this.S = a;
    }
  };
  var za = class extends xa {
    constructor(a) {
      super("PositionedLocation");
      this.id = a;
    }
  };
  var Aa = class extends xa {
      constructor(a) {
        super("CellBorderLocation");
        this.g = a;
      }
    },
    Ba = class {
      constructor(a, b) {
        this.type = a;
        this.index = b;
      }
    };
  var Ca = class extends xa {
    constructor(a) {
      super("ListItemLocation");
      this.index = a;
    }
  };
  var Da = class extends xa {
    constructor(a, b, c) {
      super("ListNestingLevelLocation");
      this.id = a;
      this.g = b;
      this.index = c;
    }
  };
  function Ea(a) {
    return 10 > a ? "0" + String(a) : a.toString(16);
  }
  function Fa(a) {
    return (b, c) =>
      c instanceof HTMLElement
        ? ((b = new Uint8Array(20)),
          window.crypto.getRandomValues(b),
          (b = Array.from(b, Ea).join("")),
          c.classList.add(b),
          a(c, b),
          "\u0002" + b)
        : "string" === typeof c
        ? "\u0001" + c
        : c;
  }
  function Ga(a, b) {
    if ("string" !== typeof b) return b;
    a = b.charAt(0);
    b = b.substring(1);
    switch (a) {
      case "\u0001":
        return b;
      case "\u0002":
        a = Array.from(document.getElementsByClassName(b));
        if (0 === a.length) throw Error("Couldn't find element with unique class `" + b + "`!");
        if (1 < a.length) throw Error("Found multiple elements with unique class `" + b + "`!");
        return a[0];
      default:
        throw Error("Unknown identifier in beginning of text \\x" + Ea(a));
        throw void 0;
    }
  }
  function Ha(a, b) {
    return (b = a.constructor.toString().match(b)) ? a[b[1]] : null;
  }
  const Ia = new Map();
  function Ja(a) {
    var b = Ia.get(a.toString());
    if (b) return b;
    b = window;
    for (var c in b) {
      var d = b[c];
      if ("function" === typeof d) {
        var e = d.toString();
        if (!e.includes("[native code]")) {
          if (a.test(e)) return (c = { parent: b, key: c, value: d }), Ia.set(a.toString(), c), c;
          if ("prototype" in d) {
            d = d.prototype;
            for (const f in d)
              if (
                "error" !== f &&
                "constructor" !== f &&
                "lower" !== f &&
                ((e = Object.getOwnPropertyDescriptor(d, f)),
                null !== e && void 0 !== e && e.value && ((e = d[f]), "function" === typeof e && a.test(e.toString())))
              )
                return (c = { parent: d, key: f, value: e }), Ia.set(a.toString(), c), c;
          }
        }
      }
    }
    return null;
  }
  const Ka = new Map();
  function La(a, b) {
    const c = [];
    document.dispatchEvent(
      new CustomEvent("wizkids-google-docs-outbound", {
        cancelable: !0,
        bubbles: !0,
        detail: JSON.stringify(
          {
            id: a,
            result: JSON.stringify(
              b,
              Fa((d, e) => c.push({ element: d, className: e }))
            )
          },
          Fa((d, e) => c.push({ element: d, className: e }))
        )
      })
    );
    for (const { element: d, className: e } of c) d.classList.remove(e);
  }
  function Ma(a, b) {
    const c = [];
    document.dispatchEvent(
      new CustomEvent("wizkids-google-docs-outbound", {
        cancelable: !0,
        bubbles: !0,
        detail: JSON.stringify(
          {
            id: a,
            error: JSON.stringify(
              { name: b.name, message: b.message, stack: b.stack },
              Fa((d, e) => c.push({ element: d, className: e }))
            )
          },
          Fa((d, e) => c.push({ element: d, className: e }))
        )
      })
    );
    for (const { element: d, className: e } of c) d.classList.remove(e);
  }
  function Na(a, b) {
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      for (let e = c + 1; e < a.length; e++) {
        const f = a[e];
        Oa(d, f) && ((d.start = Math.min(d.start, f.start)), (d.end = Math.max(d.end, f.end)), a.splice(e, 1), e--, b && b(f));
      }
    }
  }
  function Pa(a) {
    for (let c = 0; c < a.length; c++) {
      const d = a[c];
      for (let e = c + 1; e < a.length; e++) {
        var b = a[e];
        if (Oa({ start: d.left, end: d.left + d.width }, { start: b.left, end: b.left + b.width })) {
          const f = Math.min(d.left, b.left),
            h = Math.max(d.left + d.width, b.left + b.width),
            g = Math.min(d.top, b.top);
          b = Math.max(d.top + d.height, b.top + b.height);
          d.left = f;
          d.width = h - f;
          d.top = g;
          d.height = b - g;
          a.splice(e, 1);
          e--;
        }
      }
    }
  }
  function Oa(a, b) {
    return Math.max(a.start, b.start) <= Math.min(a.end, b.end);
  }
  function Qa() {
    return "FinalizationRegistry" in window && "WeakRef" in window;
  }
  let Ra = null,
    Sa = null,
    Ta = null;
  function Ua(a) {
    if (Ra) return Ra;
    a = a.constructor;
    if (!a || "function" !== typeof a) return null;
    a = a.toString().match(/this\.[a-zA-Z0-9$_\.]+=\[\];(.*?)this\.[a-zA-Z0-9$_\.]+=\[\]/);
    if (!a) return null;
    a = a[1].match(/(?<=this\.)[a-zA-Z0-9$_\.]+(?==[a-zA-Z0-9$_\.]+\(\);)/g);
    if (!a) return null;
    Ra = a[4];
    return a[4];
  }
  function Va(a) {
    if (Sa) return Sa;
    a = a.constructor;
    if (!a || "function" !== typeof a) return null;
    a = a.toString().match(/this\.[a-zA-Z0-9$_\.]+=\[\];(.*?)this\.[a-zA-Z0-9$_\.]+=\[\]/);
    if (!a) return null;
    a = a[1].match(/(?<=this\.)[a-zA-Z0-9$_\.]+(?==[a-zA-Z0-9$_\.]+\(\);)/g);
    if (!a) return null;
    Sa = a[3];
    return a[3];
  }
  function Wa(a) {
    if (Ta) return Ta;
    a = a.constructor;
    if (!a || "function" !== typeof a) return null;
    a = a.toString().match(/this\.([a-zA-Z0-9$_\.]+)=\[\];.*?this\.([a-zA-Z0-9$_\.]+)=\[\]/);
    if (!a) return null;
    Ta = a[1];
    return a[1];
  }
  function Xa(a) {
    var b = Wa(a),
      c = Va(a);
    const d = Ua(a);
    if (!b || !c || !d) return null;
    b = a[b];
    const e = a[c],
      f = a[d];
    a = Object.keys(e)
      .map((h) => e[h])
      .find((h) => Array.isArray(h));
    c = Object.keys(f)
      .map((h) => f[h])
      .find((h) => Array.isArray(h));
    return { yd: b, cd: c, zd: a };
  }
  function Ya(a) {
    return a.replace(/[\u200b\u200c\u202c\u202d]/g, "");
  }
  var Za = class {
    constructor(a, b, c, d) {
      this.type = "spellcheck";
      this.g = [];
      this.l = a;
      this.i = b;
      this.text = c;
      this.g = d;
    }
  };
  function $a(a) {
    if (!a.i) {
      const b = a.l();
      if (!b) throw Error("Could not get parent");
      a.i = b;
    }
    return a.i;
  }
  function ab(a) {
    const b = $a(a);
    if (!a.g) {
      const d = $a(a).__proto__;
      var c = Object.keys(d);
      for (const e of c)
        if (
          ((c = d[e]),
          0 === c.length &&
            ((c = c.toString()),
            "function(){return this[a]}" !== c &&
              !c.includes("getStyle") &&
              c.includes("a=[]") &&
              c.includes("for(") &&
              c.includes("a.push(") &&
              c.includes("return a")))
        ) {
          a.g = e;
          break;
        }
    }
    if (!a.g) throw Error("Could not get key");
    return (a = b[a.g]()) && Array.isArray(a) ? a : [];
  }
  var bb = class {
    constructor(a) {
      this.i = this.g = null;
      this.l = a;
    }
  };
  function cb(a) {
    if (!a.i) {
      const b = a.l();
      if (!b) throw Error("Could not get parent");
      a.i = b;
    }
    return a.i;
  }
  function db(a) {
    if (!a.g) {
      const d = cb(a);
      var b = Object.keys(d).filter((e) => "object" === typeof d[e] && d[e] && "clear" in d[e]);
      for (const e of b) {
        b = d[e].__proto__;
        var c = Object.keys(b);
        for (const f of c)
          if (((c = b[f]), 1 === c.length && c.toString().includes("getType"))) {
            a.g = [e, f];
            break;
          }
        if (a.g) break;
      }
    }
    if (!a.g) throw Error("Could not get key");
    return a.g;
  }
  var eb = class {
    constructor(a) {
      this.i = this.g = null;
      this.l = a;
    }
  };
  function fb(a) {
    if (!a.i) {
      const b = a.l();
      if (!b) throw Error("Could not get parent");
      a.i = b;
    }
    return a.i;
  }
  var gb = class {
    constructor(a) {
      this.i = this.g = null;
      this.l = a;
    }
  };
  var hb = class {
    constructor(a, b) {
      this.type = a;
      this.id = b;
    }
  };
  var ib = class extends hb {
    constructor(a, b, c, d, e) {
      super(a, b);
      this.title = c;
      this.description = d;
      this.url = e;
    }
  };
  function jb(a, b) {
    if (!a.l)
      for (const c of Object.keys(b)) {
        const d = b[c];
        if (d && "object" === typeof d && 0 !== Object.keys(d).filter((e) => "string" === typeof d[e]).length) {
          a.l = c;
          break;
        }
      }
    return a.l ? b[a.l] : null;
  }
  function kb(a, b) {
    if (!a.g || !a.i)
      for (var c of Object.keys(b)) {
        var d = b[c];
        if ("string" === typeof d && (a.i || "inline" !== d ? !a.g && d.startsWith("kix.") && (a.g = c) : (a.i = c), a.g && a.i)) break;
      }
    d = a.g && a.i ? { type: b[a.i], id: b[a.g] } : null;
    if (!d) return null;
    c = d.type;
    d = d.id;
    if (!a.s)
      for (var e of Object.keys(b)) {
        var f = b[e];
        if (f && "object" === typeof f && "function" === typeof f.getType) {
          a.s = e;
          break;
        }
      }
    b = a.s ? b[a.s] : null;
    if (!b) return null;
    a: {
      if (!a.C || !a.A) {
        b: {
          for (e = b; (e = e.__proto__); )
            if (Object.keys(e).includes("getType")) {
              e = e.constructor.toString();
              break b;
            }
          e = null;
        }
        if (!e) {
          e = null;
          break a;
        }
        e = e.match(/;this\.([a-zA-Z0-9$_]+)=this\.([a-zA-Z0-9$_]+)=null;/);
        if (!e) {
          e = null;
          break a;
        }
        a.C = e[2];
        a.A = e[1];
      }
      e = { title: b[a.C], description: b[a.A] };
    }
    f = e;
    if (!f) return null;
    e = f.title;
    f = f.description;
    if (!a.u)
      for (const h of Object.keys(b)) {
        const g = b[h];
        if ("string" === typeof g && (g.startsWith("http://") || g.startsWith("https://"))) {
          a.u = h;
          break;
        }
      }
    return new ib(c, d, e, f, a.u ? b[a.u] : null);
  }
  var lb = class {
    constructor() {
      this.u = this.A = this.C = this.s = this.i = this.g = this.l = null;
    }
  };
  function mb(a) {
    return ab(a.i)
      .filter((b) => !!b)
      .map((b) => {
        var c = a.g;
        return (c = (b = jb(c, b)) ? kb(c, b) : null);
      })
      .filter((b) => !!b);
  }
  function nb(a, b) {
    {
      var c = a.l;
      let d = cb(c);
      c = db(c);
      for (let e = 0; e < c.length - 1; e++) d = d[c[e]];
      b = d[c[c.length - 1]](b);
    }
    return b ? ((a = kb(a.g, b)) ? a : null) : null;
  }
  function ob(a, b, c) {
    {
      var d = a.s;
      let f = fb(d);
      if (!d.g) {
        const h = fb(d).__proto__;
        var e = Object.keys(h);
        for (const g of e)
          (e = h[g]),
            2 === e.length &&
              ((e = e.toString()),
              !e.includes("getStyle") && e.includes("var c=this.") && e.includes("a[0]") && e.includes(".get(c):") && (d.g = g));
      }
      if (!d.g) throw Error("Could not get key");
      b = f[d.g](b, c);
    }
    return b ? ((a = kb(a.g, b)) ? a : null) : null;
  }
  var pb = class {
    constructor(a) {
      this.i = new bb(a);
      this.l = new eb(a);
      this.s = new gb(a);
      this.g = new lb();
    }
  };
  function qb() {
    const a = new ta();
    a: if (a.i) var b = a.i;
    else {
      b = window.KX_kixApp;
      for (var c in b) {
        const e = b[c];
        if (e instanceof Object && !Array.isArray(e) && !ia(e) && !ja(e))
          for (const f in e) {
            const h = e[f];
            if (h && h instanceof Object && !Array.isArray(h) && !ia(h) && !ja(h) && "function" === typeof h.getSelection) {
              b = a.i = e;
              break a;
            }
          }
      }
      throw Error("Unable to get context!");
    }
    a: if (null !== a.l) var d = a.l;
    else {
      for (d in b)
        if ((c = b[d]) && "function" === typeof c.getSelection) {
          d = a.l = c;
          break a;
        }
      throw Error("Unable to get document!");
    }
    return new rb(d, oa(a), a);
  }
  function sb(a) {
    for (const b in a.g) {
      const c = a.g[b];
      try {
        if (c && c.getStyle && "function" === typeof c.getStyle) return c;
      } catch (d) {}
    }
    throw Error("Unable to get content!");
  }
  function tb(a) {
    if (!a.Xa) {
      a.Xa = !0;
      var b = ub(a);
      if (null === b) throw Error("Unable to find the key of the selection!");
      var c = a.g[b];
      Object.defineProperty(a.g, b, {
        configurable: !0,
        enumerable: !0,
        get: () => c,
        set: (d) => {
          const e = c;
          c = d;
          e !== d && w(a.pb, a.getSelection());
        }
      });
    }
  }
  function vb(a) {
    if (!a.pa) {
      a.pa = !0;
      var b = pa(),
        c = ra(),
        d = a.ob,
        e = function (...f) {
          try {
            f[0] === b && w(d, f[f.length - 1]);
          } catch (h) {
            console.error(h);
          }
          return c.value.apply(this, Array.from(arguments));
        };
      c.parent[c.key] = e;
      c.pd = e;
      a.C = c;
    }
  }
  function wb(a) {
    const b = xb(a);
    let c = null;
    for (const d in b)
      if ("string" === typeof b[d]) {
        c = d;
        break;
      }
    c &&
      ((a.i = b[c]),
      Object.defineProperty(b, c, {
        configurable: !0,
        enumerable: !0,
        get: () => a.i,
        set: (d) => {
          const e = a.i;
          a.i = d;
          e !== d && w(a.rb, d, e);
        }
      }));
  }
  function yb(a) {
    var b = zb(a, a.g);
    if (null === b) console.error("Unable to initialize listener for spellcheck changes!");
    else {
      var c = Ab(a.g);
      if ((b = b.map((p) => ha(`this.${p}`, { this: c })).find((p) => "spellcheck" in p))) {
        var d = b.spellcheck,
          e = Object.keys(d)
            .map((p) => d[p])
            .find(
              (p) =>
                Object.keys(p)
                  .map((u) => p[u])
                  .filter((u) => Array.isArray(u)).length === Object.keys(p).length
            );
        if (e) {
          var f = Object.keys(e).find((p) => "number" === typeof e[p][0]);
          if (f) {
            var h = Object.keys(e).find((p) => p !== f);
            if (h) {
              var g = Array.from(e[h]).filter((p) => void 0 !== p),
                k = (p) => {
                  const u = p.length;
                  if (u !== g.length) return !0;
                  for (let r = 0; r < u; r++) if (p[r] !== g[r]) return !0;
                  return !1;
                },
                m = null,
                n = () => {
                  null !== m && (window.clearTimeout(m), (m = null));
                  m = window.setTimeout(() => {
                    const p = Array.from(e[h]).filter((u) => void 0 !== u);
                    k(p) && ((g = p), w(a.qb));
                  }, 0);
                },
                q = (p) => {
                  const u = p.push,
                    r = p.splice,
                    v = p.shift,
                    x = p.unshift;
                  p.push = function () {
                    n();
                    return u.apply(this, arguments);
                  };
                  p.splice = function () {
                    n();
                    return r.apply(this, arguments);
                  };
                  p.shift = function () {
                    n();
                    return v.apply(this, arguments);
                  };
                  p.unshift = function () {
                    n();
                    return x.apply(this, arguments);
                  };
                },
                t = e[f];
              q(t);
              Object.defineProperty(e, f, {
                configurable: !0,
                enumerable: !0,
                get: () => t,
                set: (p) => {
                  q(p);
                  t = p;
                  n();
                }
              });
            } else console.error("Unable to find spellcheck value container");
          } else console.error("Unable to find spellcheck index container");
        } else console.error("Unable to find spellcheck index container");
      } else console.error("Unable to find spellcheck object");
    }
  }
  function ub(a) {
    const b = a.g.getSelection();
    for (const c in a.g) if (a.g[c] === b) return c;
    return null;
  }
  function Ab(a) {
    if (a.getStyle && "function" === typeof a.getStyle) return a;
    for (const b in a) if ("object" === typeof a[b] && a[b].getStyle && "function" === typeof a[b].getStyle) return a[b];
    throw Error("Unable to get document data!");
  }
  function Bb(a, b) {
    var c = a.M.get(b);
    if (c) return c;
    c = Ab(b);
    c = c.getStyle.bind(c);
    a.M.set(b, c);
    return c;
  }
  function Cb(a, b) {
    var c = a.D.get(b);
    if (c) return c;
    c = new Map();
    const d = /return this\.([a-zA-Z0-9$_]+)\.([a-zA-Z0-9$_]+)\(a\)/;
    for (const e in b) {
      const f = b[e];
      if ("function" !== typeof f) continue;
      const h = f.toString().match(d);
      h && h[2] === e && c.set(e, f);
    }
    a.D.set(b, c);
    return c;
  }
  function Db(a, b) {
    a = Cb(a, b);
    for (const [c, d] of a)
      if ((a = d.call(b, "paragraph")) && Array.isArray(a) && 0 !== a.length && a.filter((e) => "number" === typeof e).length === a.length)
        return c;
    return null;
  }
  function Eb(a, b) {
    var c = a.F.get(b);
    if (c) return c;
    c = Ab(b);
    const d = Db(a, c);
    if (null === d) throw Error("Unable to get list indexes of type method!");
    c = c[d].bind(c);
    a.F.set(b, c);
    return c;
  }
  function zb(a, b) {
    b = Ab(b);
    a = Db(a, b);
    if (null === a) return null;
    const c = b[a].toString().match(/this\.([a-zA-Z0-9$_]+)\./);
    if (!c) return null;
    const d = c[1];
    b = b[d][a];
    return "function" !== typeof b
      ? null
      : (b = b.toString().match(/(?<=this\.)([a-zA-Z0-9$_]+)(?=\[)/g))
      ? Array.from(b).map((e) => `${d}.${e}`)
      : null;
  }
  function Fb(a, b, c) {
    var d = b.constructor.toString(),
      e = d.match(/this\.([a-zA-Z0-9$_]+)=this\.([a-zA-Z0-9$_]+)=null;/);
    if (!e) return null;
    d = d.match(/(?<=this\.)[a-zA-Z0-9$_]+(?==new)/g);
    if (!d) return null;
    d = d
      .map((h) => b[h])
      .map(
        (h) =>
          Object.keys(h)
            .map((g) => h[g])
            .filter((g) => Array.isArray(g) && 0 < g.length && g.filter((k) => "string" === typeof k).length === g.length)
            .find(() => !0) || []
      )
      .flat(1);
    const f = b[e[1]];
    e = b[e[2]];
    a = Gb(a, c);
    null === a && (a = "SPELLING_ERROR");
    return new Za(a, f, e, d);
  }
  function Hb(a, b, c) {
    const d = Bb(a, a.g)(b, c);
    switch (b) {
      case "equation":
        return new ua();
      case "equation_function":
        a = Object.keys(d).filter((e) => "string" === typeof d[e] && d[e] !== b);
        if (1 !== a.length) throw Error("Unable to decode type `equation_function`!");
        return new wa(d[a[0]]);
      case "spellcheck":
        a = Fb(a, d, c);
        if (!a) throw Error("Unable to decode type `spellcheck`!");
        return a;
      default:
        return { type: b };
    }
  }
  function Gb(a, b) {
    const c = Ib(a);
    if (null === c) return null;
    const d = sb(a),
      e = c(d, b, !0, null);
    if (!e) return null;
    b = Object.keys(e)
      .map((f) => e[f])
      .find((f) => {
        const h = Object.keys(f)
          .map((g) => f[g])
          .map((g) => (Array.isArray(g) ? "array" : typeof g));
        return 2 === h.filter((g) => "array" === g).length && 2 === h.filter((g) => "string" === g).length;
      });
    if (!b) return null;
    a = Jb(a);
    return null === a ? null : a(b) ? "GRAMMAR_ERROR" : "SPELLING_ERROR";
  }
  function Kb(a) {
    return [1, ...Eb(a, a.g)("paragraph").map((b) => b + 1)];
  }
  function Mb(a) {
    var b = Eb(a, a.g)("spellcheck");
    const c = new Map();
    for (const d of b) (b = Hb(a, "spellcheck", d)), null !== b.text && c.set(d, b);
    return c;
  }
  function Ib(a) {
    if (null !== a.l) return a.l;
    const b = window;
    a: {
      for (c in b) if ("spellcheck" === b[c]) break a;
      var c = null;
    }
    if (null === c) return null;
    for (const e in b)
      if ("function" === typeof b[e]) {
        var d = b[e].toString();
        if (
          d.match(/function(?: [a-zA-Z0-9$_]+)?\(a,c,d,e\){/) &&
          (d = d.match(new RegExp(`\\.getStyle\\(${A(c)},c`, "g"))) &&
          2 === d.length
        )
          return (a.l = b[e]), b[e];
      }
    return null;
  }
  function Nb(a) {
    if (null !== a.u) return a.u;
    const b = [0, 5, 7, 8, 30],
      c = window;
    for (const d in c) {
      if ("function" !== typeof c[d]) continue;
      const e = c[d].toString();
      if (void 0 === b.find((f) => !e.includes(`case ${f}:`))) return (a.u = d);
    }
    return null;
  }
  function Jb(a) {
    if (null !== a.s) return a.s;
    const b = Nb(a);
    if (null === b) return null;
    const c = window;
    for (const d in c)
      if ("function" === typeof c[d] && c[d].toString().match(new RegExp(`{(.*?)\\c${A(b)}\\(`))) return (a.s = c[d]), c[d];
    return null;
  }
  function Ob(a, b) {
    var c = a.ya;
    a = sa(c);
    const { value: d } = la(c),
      e = ka(c, b.type);
    if (b instanceof Aa) {
      const f = ka(c, "CellBorderTuple");
      b = b.g.map((h) => new f(h.index, h.type));
      d(a, new e(b), !1, !0);
    } else if (b instanceof ya)
      (c = new e(b.S.start, !1, null)), d(a, c, !1, !0), b.S.start !== b.S.end && ((b = new e(b.S.end, !1, null)), d(a, b, !0, !0));
    else if (b instanceof Ca) d(a, new e(b.index), !1, !0);
    else if (b instanceof Da) d(a, new e(b.id, b.g, b.index), !1, !0);
    else if (b instanceof za) d(a, new e(b.id), !1, !0);
    else throw Error("Unknown location type -> " + b.type);
  }
  function Pb(a) {
    a = a.g.getSelection();
    for (const b in a) {
      const c = a[b];
      if (c && "object" === typeof c && "toString" in c && c.toString.toString().match(/Location/)) return c;
    }
    return null;
  }
  function xb(a) {
    a = sb(a);
    for (const b in a) {
      const c = a[b];
      if (c && "function" === typeof c.insert) return c;
    }
    throw Error("Unable to get text content!");
  }
  function Qb(a) {
    a = xb(a);
    for (const b in a) {
      const c = a[b];
      if ("string" === typeof c) return c;
    }
    return "";
  }
  function Rb(a) {
    if (!a || "object" !== typeof a || Array.isArray(a)) return !1;
    let b = !1,
      c = !1;
    for (const d in a) {
      if ("string" !== typeof d || "object" !== typeof a[d] || Array.isArray(a[d]) || !a[d] || !("getId" in a[d])) return !1;
      d.startsWith("kix-") && (b = !0);
      c = !0;
    }
    return c && b;
  }
  function Sb(a, b) {
    const c = a.C || ra();
    a.C = c;
    if (!a.ra) {
      a: {
        var d = pa();
        for (var e in d) {
          const f = d[e];
          if (f && !Array.isArray(f) && "object" === typeof f)
            for (const h in f) {
              const g = f[h];
              if (g && !Array.isArray(g) && "object" === typeof g)
                for (const k in g)
                  if (Rb(g[k])) {
                    d = g;
                    break a;
                  }
            }
        }
        d = null;
      }
      e = !1;
      for (const f in d)
        if (Rb(d[f]) && "kix-insert-equation" in d[f]) {
          e = !0;
          break;
        }
      if (!e) throw Error("kix-insert-equation module is not ready!");
      a.ra = !0;
    }
    c.Oe(b);
  }
  var rb = class {
    constructor(a, b, c) {
      this.ob = new y();
      this.pb = new y();
      this.rb = new y();
      this.qb = new y();
      this.i = "";
      this.C = null;
      this.ra = this.pa = this.Xa = !1;
      this.F = new Map();
      this.D = new Map();
      this.M = new Map();
      this.s = this.u = this.l = null;
      this.g = a;
      this.Gb = b;
      this.ya = c;
      this.A = new pb(() => sb(this));
    }
    R() {
      tb(this);
      vb(this);
      wb(this);
      yb(this);
    }
    insertData(a, b) {
      return this.Gb(a, b);
    }
    getSelection() {
      var a = this.g.getSelection();
      for (var b in a) {
        var c = a[b];
        if (Array.isArray(c) && 0 < c.length) return (a = c[0]), new ya({ start: a.start, end: a.end + 1 });
      }
      const d = Pb(this);
      if (d) {
        var e = this.ya;
        a = ka(e, "CellBorderLocation");
        b = ka(e, "InlineLocation");
        c = ka(e, "ListItemLocation");
        const f = ka(e, "ListNestingLevelLocation");
        e = ka(e, "PositionedLocation");
        if (d instanceof a) {
          a = (() => {
            for (const h in d) {
              const g = d[h];
              if (g && Array.isArray(g)) return g;
            }
            return null;
          })();
          if (null === a) return new ya({ start: -1, end: -1 });
          a = a.map((h) => {
            const g = Ha(h, /this\.([a-zA-Z0-9$_]+)=a/);
            h = Ha(h, /this\.([a-zA-Z0-9$_]+)=c/);
            if (null === g || null === h) throw Error("Unable to get index or/and type");
            return new Ba(h, g);
          });
          return new Aa(a);
        }
        if (d instanceof b)
          return (a = Ha(d, /this\.([a-zA-Z0-9$_]+)=a/)), null === a ? new ya({ start: -1, end: -1 }) : new ya({ start: a, end: a });
        if (d instanceof c) return (a = Ha(d, /this\.([a-zA-Z0-9$_]+)=a/)), null === a ? new ya({ start: -1, end: -1 }) : new Ca(a);
        if (d instanceof f)
          return (
            (a = Ha(d, /this\.([a-zA-Z0-9$_]+)=a/)),
            (b = Ha(d, /this\.([a-zA-Z0-9$_]+)=c/)),
            (c = Ha(d, /this\.([a-zA-Z0-9$_]+)=d/)),
            null === a || null === b || null === c ? new ya({ start: -1, end: -1 }) : new Da(a, b, c)
          );
        if (d instanceof e)
          return (
            (a = (() => {
              for (const h in d) {
                const g = d[h];
                if ("string" === typeof g) return g;
              }
              return null;
            })()),
            null === a ? new ya({ start: -1, end: -1 }) : new za(a)
          );
      }
      return new ya({ start: -1, end: -1 });
    }
  };
  function Tb(a, b) {
    if (!a || !b || a.charAt(0) !== b.charAt(0)) return 0;
    let c = 0,
      d = Math.min(a.length, b.length),
      e = d,
      f = 0;
    for (; c < e; ) a.substring(f, e) == b.substring(f, e) ? (f = c = e) : (d = e), (e = Math.floor((d - c) / 2 + c));
    return e;
  }
  function Ub(a, b) {
    if (!a || !b || a.charAt(a.length - 1) !== b.charAt(b.length - 1)) return 0;
    let c = 0,
      d = Math.min(a.length, b.length),
      e = d,
      f = 0;
    for (; c < e; )
      a.substring(a.length - e, a.length - f) == b.substring(b.length - e, b.length - f) ? (f = c = e) : (d = e),
        (e = Math.floor((d - c) / 2 + c));
    return e;
  }
  function Vb(a, b, c, d, e) {
    if (!b) return [["insert", c]];
    if (!c) return [["delete", b]];
    var f = b.length > c.length ? b : c,
      h = b.length > c.length ? c : b,
      g = f.indexOf(h);
    if (-1 !== g)
      return (
        (a = [
          ["insert", f.substring(0, g)],
          ["equal", h],
          ["insert", f.substring(g + h.length)]
        ]),
        b.length > c.length && (a[0][0] = a[2][0] = "delete"),
        a
      );
    if (1 === h.length)
      return [
        ["delete", b],
        ["insert", c]
      ];
    if ((f = Wb(b, c)))
      return (c = f[1]), (h = f[3]), (b = f[4]), (f = Xb(a, f[0], f[2], d, e)), (a = Xb(a, c, h, d, e)), f.concat([["equal", b]], a);
    if (d && 100 < b.length && 100 < c.length) {
      d = Yb(b, c);
      b = d.oe;
      c = d.pe;
      d = d.xe;
      c = b = Xb(a, b, c, !1, e);
      for (f = 0; f < c.length; f++) {
        h = c[f][1];
        g = [];
        for (var k = 0; k < h.length; k++) g[k] = d[h.charCodeAt(k)];
        c[f][1] = g.join("");
      }
      c = b;
      f = !1;
      h = [];
      g = 0;
      k = null;
      for (var m = (d = 0), n = 0, q = 0, t = 0; d < c.length; )
        "equal" === c[d][0]
          ? ((h[g++] = d), (m = q), (n = t), (t = q = 0), (k = c[d][1]))
          : ("insert" === c[d][0] ? (q += c[d][1].length) : (t += c[d][1].length),
            k &&
              k.length <= Math.max(m, n) &&
              k.length <= Math.max(q, t) &&
              (c.splice(h[g - 1], 0, ["delete", k]),
              (c[h[g - 1] + 1][0] = "insert"),
              g--,
              g--,
              (d = 0 < g ? h[g - 1] : -1),
              (t = q = n = m = 0),
              (k = null),
              (f = !0))),
          d++;
      f && Zb(a, c);
      $b(c);
      for (d = 1; d < c.length; ) {
        if ("delete" === c[d - 1][0] && "insert" === c[d][0]) {
          f = c[d - 1][1];
          h = c[d][1];
          g = ac(f, h);
          k = ac(h, f);
          if (g >= k) {
            if (g >= f.length / 2 || g >= h.length / 2)
              c.splice(d, 0, ["equal", h.substring(0, g)]),
                (c[d - 1][1] = f.substring(0, f.length - g)),
                (c[d + 1][1] = h.substring(g)),
                d++;
          } else if (k >= f.length / 2 || k >= h.length / 2)
            c.splice(d, 0, ["equal", f.substring(0, k)]),
              (c[d - 1][0] = "insert"),
              (c[d - 1][1] = h.substring(0, h.length - k)),
              (c[d + 1][0] = "delete"),
              (c[d + 1][1] = f.substring(k)),
              d++;
          d++;
        }
        d++;
      }
      b.push(["equal", ""]);
      f = d = c = 0;
      for (g = h = ""; c < b.length; ) {
        switch (b[c][0]) {
          case "insert":
            f++;
            g += b[c][1];
            break;
          case "delete":
            d++;
            h += b[c][1];
            break;
          case "equal":
            if (1 <= d && 1 <= f) {
              b.splice(c - d - f, d + f);
              c = c - d - f;
              d = Xb(a, h, g, !1, e);
              for (f = d.length - 1; 0 <= f; f--) b.splice(c, 0, d[f]);
              c += d.length;
            }
            d = f = 0;
            g = h = "";
        }
        c++;
      }
      b.pop();
      a = b;
    } else
      a: {
        d = b.length;
        f = c.length;
        h = Math.ceil((d + f) / 2);
        g = 2 * h;
        k = Array(g);
        m = Array(g);
        for (n = 0; n < g; n++) (k[n] = -1), (m[n] = -1);
        k[h + 1] = 0;
        m[h + 1] = 0;
        n = d - f;
        q = 0 !== n % 2;
        let x = (t = 0),
          z = 0,
          L = 0;
        for (let H = 0; H < h && !(new Date().getTime() > e); H++) {
          for (var p = -H + t; p <= H - x; p += 2) {
            var u = h + p,
              r = void 0;
            r = p === -H || (p !== H && k[u - 1] < k[u + 1]) ? k[u + 1] : k[u - 1] + 1;
            for (var v = r - p; r < d && v < f && b.charAt(r) === c.charAt(v); ) r++, v++;
            k[u] = r;
            if (r > d) x += 2;
            else if (v > f) t += 2;
            else if (q && ((u = h + n - p), 0 <= u && u < g && -1 !== m[u] && r >= d - m[u])) {
              a = bc(a, b, c, r, v, e);
              break a;
            }
          }
          for (p = -H + z; p <= H - L; p += 2) {
            v = h + p;
            r = p === -H || (p !== H && m[v - 1] < m[v + 1]) ? m[v + 1] : m[v - 1] + 1;
            for (u = r - p; r < d && u < f && b.charAt(d - r - 1) == c.charAt(f - u - 1); ) r++, u++;
            m[v] = r;
            if (r > d) L += 2;
            else if (u > f) z += 2;
            else if (!q && ((u = h + n - p), 0 <= u && u < g && -1 !== k[u] && ((v = k[u]), (u = h + v - u), (r = d - r), v >= r))) {
              a = bc(a, b, c, v, u, e);
              break a;
            }
          }
        }
        a = [
          ["delete", b],
          ["insert", c]
        ];
      }
    return a;
  }
  function Zb(a, b) {
    b.push(["equal", ""]);
    let c = 0;
    var d = 0;
    let e = 0,
      f = "",
      h = "",
      g;
    for (; c < b.length; )
      switch (b[c][0]) {
        case "insert":
          e++;
          h += b[c][1];
          c++;
          break;
        case "delete":
          d++;
          f += b[c][1];
          c++;
          break;
        case "equal":
          1 < d + e
            ? (0 !== d &&
                0 !== e &&
                ((g = Tb(h, f)),
                0 !== g &&
                  (0 < c - d - e && "equal" == b[c - d - e - 1][0]
                    ? (b[c - d - e - 1][1] += h.substring(0, g))
                    : (b.splice(0, 0, ["equal", h.substring(0, g)]), c++),
                  (h = h.substring(g)),
                  (f = f.substring(g))),
                (g = Ub(h, f)),
                0 !== g &&
                  ((b[c][1] = h.substring(h.length - g) + b[c][1]),
                  (h = h.substring(0, h.length - g)),
                  (f = f.substring(0, f.length - g)))),
              0 === d
                ? b.splice(c - e, d + e, ["insert", h])
                : 0 === e
                ? b.splice(c - d, d + e, ["delete", f])
                : b.splice(c - d - e, d + e, ["delete", f], ["insert", h]),
              (c = c - d - e + (d ? 1 : 0) + (e ? 1 : 0) + 1))
            : 0 !== c && "equal" === b[c - 1][0]
            ? ((b[c - 1][1] += b[c][1]), b.splice(c, 1))
            : c++,
            (d = e = 0),
            (h = f = "");
      }
    "" === b[b.length - 1][1] && b.pop();
    d = !1;
    for (c = 1; c < b.length - 1; )
      "equal" === b[c - 1][0] &&
        "equal" === b[c + 1][0] &&
        (b[c][1].substring(b[c][1].length - b[c - 1][1].length) === b[c - 1][1]
          ? ((b[c][1] = b[c - 1][1] + b[c][1].substring(0, b[c][1].length - b[c - 1][1].length)),
            (b[c + 1][1] = b[c - 1][1] + b[c + 1][1]),
            b.splice(c - 1, 1),
            (d = !0))
          : b[c][1].substring(0, b[c + 1][1].length) == b[c + 1][1] &&
            ((b[c - 1][1] += b[c + 1][1]), (b[c][1] = b[c][1].substring(b[c + 1][1].length) + b[c + 1][1]), b.splice(c + 1, 1), (d = !0))),
        c++;
    d && Zb(a, b);
  }
  function Xb(a, b, c, d = !0, e) {
    "undefined" === typeof e && (e = new Date().getTime() + 1e3);
    if (b === c) return [["equal", b]];
    var f = Tb(b, c);
    const h = b.substring(0, f);
    b = b.substring(f);
    c = c.substring(f);
    const g = Ub(b, c);
    f = b.substring(b.length - g);
    b = b.substring(0, b.length - g);
    c = c.substring(0, c.length - g);
    b = Vb(a, b, c, d, e);
    h && b.unshift(["equal", h]);
    f && b.push(["equal", f]);
    Zb(a, b);
    return b;
  }
  function Wb(a, b) {
    var c = a.length > b.length ? a : b,
      d = a.length > b.length ? b : a;
    if (4 > c.length || 2 * d.length < c.length) return null;
    const e = (h, g, k) => {
      const m = h.substring(k, k + Math.floor(h.length / 4));
      let n = -1,
        q = "",
        t = "",
        p = "",
        u = "",
        r = "";
      for (; -1 !== (n = g.indexOf(m, n + 1)); ) {
        const v = Tb(h.substring(k), g.substring(n)),
          x = Ub(h.substring(0, k), g.substring(0, n));
        q.length < x + v &&
          ((q = g.substring(n - x, n) + g.substring(n, n + v)),
          (t = h.substring(0, k - x)),
          (p = h.substring(k + v)),
          (u = g.substring(0, n - x)),
          (r = g.substring(n + v)));
      }
      return 2 * q.length >= h.length ? [t, p, u, r, q] : null;
    };
    var f = e(c, d, Math.ceil(c.length / 4));
    c = e(c, d, Math.ceil(c.length / 2));
    if (f || c) {
      if (c || !f)
        if (!f && c) f = c;
        else if (f && c) f = f[4].length > c[4].length ? f : c;
        else throw Error("This is unreachable");
    } else return null;
    a.length > b.length ? ((a = f[0]), (b = f[1]), (c = f[2]), (d = f[3])) : ((c = f[0]), (d = f[1]), (a = f[2]), (b = f[3]));
    return [a, b, c, d, f[4]];
  }
  function Yb(a, b) {
    const c = [],
      d = {};
    c[0] = "";
    const e = (f) => {
      let h = "",
        g = 0,
        k = -1,
        m = c.length;
      for (; k < f.length - 1; ) {
        k = f.indexOf("\n", g);
        -1 === k && (k = f.length - 1);
        const n = f.substring(g, k + 1);
        g = k + 1;
        (d.hasOwnProperty ? d.hasOwnProperty(n) : void 0 !== d[n])
          ? (h += String.fromCharCode(d[n]))
          : ((h += String.fromCharCode(m)), (d[n] = m), (c[m++] = n));
      }
      return h;
    };
    a = e(a);
    b = e(b);
    return { oe: a, pe: b, xe: c };
  }
  function bc(a, b, c, d, e, f) {
    const h = b.substring(d),
      g = c.substring(e);
    b = Xb(a, b.substring(0, d), c.substring(0, e), !1, f);
    a = Xb(a, h, g, !1, f);
    return b.concat(a);
  }
  function ac(a, b) {
    var c = a.length,
      d = b.length;
    if (0 === c || 0 === d) return 0;
    c > d ? (a = a.substring(c - d)) : c < d && (b = b.substring(0, c));
    c = Math.min(c, d);
    if (a === b) return c;
    d = 0;
    let e = 1;
    for (;;) {
      const f = b.indexOf(a.substring(c - e));
      if (-1 === f) return d;
      e += f;
      if (0 === f || a.substring(c - e) == b.substring(0, e)) (d = e), e++;
    }
  }
  function $b(a) {
    const b = (f, h) => {
      if (!f || !h) return 6;
      var g = f.charAt(f.length - 1),
        k = h.charAt(0);
      const m = g.match(cc),
        n = k.match(cc),
        q = m && g.match(dc),
        t = n && k.match(dc);
      g = q && g.match(ec);
      k = t && k.match(ec);
      f = g && f.match(fc);
      h = k && h.match(gc);
      return f || h ? 5 : g || k ? 4 : m && !q && t ? 3 : q || t ? 2 : m || n ? 1 : 0;
    };
    let c = 1;
    for (; c < a.length - 1; ) {
      if ("equal" === a[c - 1][0] && "equal" === a[c + 1][0]) {
        let f = a[c - 1][1],
          h = a[c][1],
          g = a[c + 1][1];
        var d = Ub(f, h);
        if (d) {
          var e = h.substring(h.length - d);
          f = f.substring(0, f.length - d);
          h = e + h.substring(0, h.length - d);
          g = e + g;
        }
        d = f;
        e = h;
        let k = g,
          m = b(f, h) + b(h, g);
        for (; h.charAt(0) === g.charAt(0); ) {
          f += h.charAt(0);
          h = h.substring(1) + g.charAt(0);
          g = g.substring(1);
          const n = b(f, h) + b(h, g);
          n >= m && ((m = n), (d = f), (e = h), (k = g));
        }
        a[c - 1][1] != d &&
          (d ? (a[c - 1][1] = d) : (a.splice(c - 1, 1), c--), (a[c][1] = e), k ? (a[c + 1][1] = k) : (a.splice(c + 1, 1), c--));
      }
      c++;
    }
  }
  var hc = class {},
    cc = /[^a-zA-Z0-9]/,
    dc = /\s/,
    ec = /[\r\n]/,
    fc = /\n\r?\n$/,
    gc = /^\r?\n\r?\n/;
  function ic({ set: a, Sb: b }) {
    a.delete(b);
  }
  var jc = class {
    constructor() {
      this.tb = new WeakMap();
      this.sb = new Set();
      this.Sc = new WeakMap();
      this.Mc = new FinalizationRegistry(ic);
    }
    set(a, b) {
      var c = this.Sc.get(a);
      c || ((c = new WeakRef(a)), this.Sc.set(a, c));
      this.tb.set(a, { value: b, Sb: c });
      this.sb.has(c) || this.sb.add(c);
      this.Mc.register(a, { set: this.sb, Sb: c }, c);
    }
    get(a) {
      a = this.tb.get(a);
      if (void 0 !== a) return a.value;
    }
    delete(a) {
      const b = this.tb.get(a);
      if (!b) return !1;
      this.tb.delete(a);
      this.sb.delete(b.Sb);
      this.Mc.unregister(b.Sb);
      return !0;
    }
    *[Symbol.iterator]() {
      for (const a of this.sb) {
        const b = a.deref();
        if (!b) continue;
        const { value: c } = this.tb.get(b);
        yield [b, c];
      }
    }
    entries() {
      return this[Symbol.iterator]();
    }
    *keys() {
      for (const [a] of this) yield a;
    }
    *values() {
      for (const [, a] of this) yield a;
    }
  };
  var kc = Symbol("WizkidsData"),
    lc = Symbol("MeasureText"),
    mc = Symbol("DataChangesSymbol"),
    nc = Symbol("GetRectsSymbol"),
    oc = Symbol("AlreadyHandledSymbol");
  const pc = /return!!this\.([a-zA-Z0-9$_]+)\|\|/,
    qc = /function(?: [a-zA-Z0-9$_]+)?\([a-zA-Z0-9$_]+\){this\.[a-zA-Z0-9$_]+=[a-zA-Z0-9$_]+}/,
    rc = /function(?: [a-zA-Z0-9$_]+)?\([a-zA-Z0-9$_]+,[a-zA-Z0-9$_]+,[a-zA-Z0-9$_]+\){this\.[a-zA-Z0-9$_]+=[a-zA-Z0-9$_]+}/;
  function sc(a, b) {
    if (a.u) return a.u;
    a: if (a.i) var c = a.i;
    else {
      b = b.constructor.prototype;
      for (c in b) {
        const d = b[c];
        if ("function" === typeof d && pc.test(d.toString())) {
          c = a.i = d;
          break a;
        }
      }
      c = null;
    }
    if (!c) return null;
    c = c.toString().match(/return!!this\.([a-zA-Z0-9$_]+)\|\|/);
    if (!c) return null;
    a.u = c[1];
    return c[1];
  }
  function tc(a, b, c) {
    const d = sc(a, b);
    if (d && !b[d]) {
      c = ha(c, { a: b }).getData();
      a: if (a.g) var e = a.g;
      else {
        for (e in c) {
          const g = c[e];
          if ("object" === typeof g && !Array.isArray(g) && g && "getHeight" in g) {
            a.g = e;
            break a;
          }
        }
        e = null;
      }
      if (e) {
        var f = c[e];
        a: if (a.s) a = a.s;
        else {
          c = window;
          for (var h in c)
            if (
              ((e = c[h]),
              "function" === typeof e &&
                "prototype" in e &&
                "object" === typeof e.prototype &&
                qc.test(e.toString()) &&
                3 === Object.keys(e.prototype).length &&
                "getType" in e.prototype &&
                "function" === typeof e.prototype.getType)
            ) {
              a = a.s = h;
              break a;
            }
          a = null;
        }
        a && (b[d] = new window[a](f));
      } else {
        a: if (a.l) a = a.l;
        else {
          h = window;
          for (f in h)
            if (
              ((c = h[f]),
              "function" === typeof c &&
                "prototype" in c &&
                "object" === typeof c.prototype &&
                rc.test(c.toString()) &&
                3 === Object.keys(c.prototype).length &&
                "getType" in c.prototype &&
                "function" === typeof c.prototype.getType)
            ) {
              a = a.l = f;
              break a;
            }
          a = null;
        }
        a && (b[d] = new window[a](null, null, !0));
      }
    }
  }
  var uc = class {
    constructor() {
      this.l = this.s = this.g = this.u = this.i = null;
    }
  };
  var vc = class {
    constructor() {
      this.g = [];
      this.i = [];
    }
    set(a, b) {
      const c = this.g.indexOf(a);
      -1 === c ? (this.g.push(a), this.i.push(b)) : (this.i[c] = b);
    }
    get(a) {
      a = this.g.indexOf(a);
      if (-1 !== a) return this.i[a];
    }
    delete(a) {
      a = this.g.indexOf(a);
      if (-1 === a) return !1;
      this.g.splice(a, 1);
      this.i.splice(a, 1);
      return !0;
    }
    *[Symbol.iterator]() {
      for (let a = 0; a < this.g.length; a++) yield [this.g[a], this.i[a]];
    }
    entries() {
      return this[Symbol.iterator]();
    }
    *keys() {
      for (const a of this.g) yield a;
    }
    *values() {
      for (const a of this.i) yield a;
    }
  };
  var wc = [
      509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 81, 2, 71, 10, 50, 3, 123, 2, 54, 14,
      32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6,
      9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9,
      82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10,
      10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0,
      49, 6, 4, 4, 14, 9, 5351, 0, 7, 14, 13835, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3,
      22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4,
      101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 983, 6, 110, 6, 6, 9, 4759, 9, 787719, 239
    ],
    xc = [
      0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157,
      19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5,
      3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28,
      36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20,
      28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64,
      6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2,
      0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7,
      3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26,
      5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 4026, 582, 8634,
      568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936,
      3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2,
      11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2,
      24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 757, 6, 2, 3, 2, 1, 2, 14, 2, 196,
      60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2,
      0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472,
      16, 621, 2467, 541, 1507, 4938, 6, 4191
    ],
    yc = {
      3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
      5: "class enum extends super const export import",
      6: "enum",
      P: "implements interface let package private protected public static yield",
      Ke: "eval arguments"
    },
    zc = {
      5: "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
      "5module":
        "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this export import",
      6: "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this const class extends export import super"
    },
    Ac = /^in(stanceof)?$/,
    Bc =
      /[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]/,
    Cc =
      /[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u0870-\u0887\u0889-\u088e\u08a0-\u08c9\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c5d\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cdd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d04-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u1711\u171f-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4c\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31bf\u31f0-\u31ff\u3400-\u4dbf\u4e00-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7ca\ua7d0\ua7d1\ua7d3\ua7d5-\ua7d9\ua7f2-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab69\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\u200c\u200d\u00b7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u0898-\u089f\u08ca-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b55-\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3c\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0cf3\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d81-\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ece\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u180f-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1abf-\u1ace\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1dff\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\u30fb\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua82c\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f\uff65]/;
  function Dc(a, b) {
    for (var c = 65536, d = 0; d < b.length; d += 2) {
      c += b[d];
      if (c > a) break;
      c += b[d + 1];
      if (c >= a) return !0;
    }
    return !1;
  }
  function Ec(a, b) {
    return 65 > a
      ? 36 === a
      : 91 > a
      ? !0
      : 97 > a
      ? 95 === a
      : 123 > a
      ? !0
      : 65535 >= a
      ? 170 <= a && Bc.test(String.fromCharCode(a))
      : !1 === b
      ? !1
      : Dc(a, xc);
  }
  function Fc(a, b) {
    return 48 > a
      ? 36 === a
      : 58 > a
      ? !0
      : 65 > a
      ? !1
      : 91 > a
      ? !0
      : 97 > a
      ? 95 === a
      : 123 > a
      ? !0
      : 65535 >= a
      ? 170 <= a && Cc.test(String.fromCharCode(a))
      : !1 === b
      ? !1
      : Dc(a, xc) || Dc(a, wc);
  }
  var B = class {
    constructor(a, b) {
      void 0 === b && (b = {});
      this.label = a;
      this.da = b.da;
      this.K = !!b.K;
      this.ka = !!b.ka;
      this.Ab = !!b.Ab;
      this.Lb = !!b.Lb;
      this.prefix = !!b.prefix;
      this.yc = !!b.yc;
      this.Qa = b.Qa || null;
      this.ga = null;
    }
  };
  function C(a, b) {
    return new B(a, { K: !0, Qa: b });
  }
  const D = { K: !0 },
    E = { ka: !0 };
  var Gc = {};
  function F(a, b) {
    void 0 === b && (b = {});
    b.da = a;
    return (Gc[a] = new B(a, b));
  }
  var G = {
    Ua: new B("num", E),
    td: new B("regexp", E),
    xa: new B("string", E),
    name: new B("name", E),
    jb: new B("privateId", E),
    Ta: new B("eof"),
    Ia: new B("[", { K: !0, ka: !0 }),
    vb: new B("]"),
    ha: new B("{", { K: !0, ka: !0 }),
    ca: new B("}"),
    X: new B("(", { K: !0, ka: !0 }),
    Y: new B(")"),
    N: new B(",", D),
    ia: new B(";", D),
    Ba: new B(":", D),
    Sa: new B("."),
    rd: new B("?", D),
    sd: new B("?."),
    Za: new B("=>", D),
    xd: new B("template"),
    uc: new B("invalidTemplate"),
    wb: new B("...", D),
    Pa: new B("`", E),
    mc: new B("${", { K: !0, ka: !0 }),
    Ka: new B("=", { K: !0, Lb: !0 }),
    assign: new B("_=", { K: !0, Lb: !0 }),
    tc: new B("++/--", { prefix: !0, yc: !0, ka: !0 }),
    prefix: new B("!/~", { K: !0, prefix: !0, ka: !0 }),
    vc: C("||", 1),
    Pb: C("&&", 2),
    le: C("|", 3),
    me: C("^", 4),
    ke: C("&", 5),
    se: C("==/!=/===/!==", 6),
    He: C("</>/<=/>=", 7),
    je: C("<</>>/>>>", 8),
    Be: new B("+/-", { K: !0, Qa: 9, prefix: !0, ka: !0 }),
    ze: C("%", 10),
    ja: C("*", 10),
    ud: C("/", 10),
    vd: new B("**", { K: !0 }),
    jc: C("??", 1),
    Pd: F("break"),
    Kc: F("case", D),
    Qd: F("catch"),
    Rd: F("continue"),
    Sd: F("debugger"),
    Lc: F("default", D),
    Td: F("do", { Ab: !0, K: !0 }),
    Yb: F("else", D),
    Xd: F("finally"),
    Nc: F("for", { Ab: !0 }),
    Ya: F("function", E),
    Oc: F("if"),
    Zb: F("return", D),
    Qc: F("switch"),
    ae: F("throw", D),
    be: F("try"),
    Jb: F("var"),
    Xb: F("const"),
    $b: F("while", { Ab: !0 }),
    Tc: F("with"),
    Yd: F("new", { K: !0, ka: !0 }),
    $d: F("this", E),
    Zd: F("super", E),
    Hb: F("class", E),
    Vd: F("extends", D),
    Ud: F("export"),
    Ib: F("import", E),
    Pc: F("null", E),
    Rc: F("true", E),
    Wd: F("false", E),
    za: F("in", { K: !0, Qa: 7 }),
    pf: F("instanceof", { K: !0, Qa: 7 }),
    qf: F("typeof", { K: !0, prefix: !0, ka: !0 }),
    rf: F("void", { K: !0, prefix: !0, ka: !0 }),
    nf: F("delete", { K: !0, prefix: !0, ka: !0 })
  };
  G.Y.ga = G.ca.ga = function () {
    if (1 === this.context.length) this.W = !0;
    else {
      var a = this.context.pop();
      a === I.$a && "function" === Hc(this).Ec && (a = this.context.pop());
      this.W = !a.bd;
    }
  };
  G.ha.ga = function (a) {
    var b = this.context,
      c = b.push,
      d = Hc(this);
    a =
      d === I.Kb || d === I.$c
        ? !0
        : a !== G.Ba || (d !== I.$a && d !== I.bc)
        ? a === G.Zb || (a === G.name && this.W)
          ? Ic.test(this.input.slice(this.ba, this.start))
          : a === G.Yb || a === G.ia || a === G.Ta || a === G.Y || a === G.Za
          ? !0
          : a === G.ha
          ? d === I.$a
          : a === G.Jb || a === G.Xb || a === G.name
          ? !1
          : !this.W
        : !d.bd;
    c.call(b, a ? I.$a : I.bc);
    this.W = !0;
  };
  G.mc.ga = function () {
    this.context.push(I.fe);
    this.W = !0;
  };
  G.X.ga = function (a) {
    this.context.push(a === G.Oc || a === G.Nc || a === G.Tc || a === G.$b ? I.od : I.Ae);
    this.W = !0;
  };
  G.tc.ga = function () {};
  G.Ya.ga = G.Hb.ga = function (a) {
    !a.K ||
    a === G.Yb ||
    (a === G.ia && Hc(this) !== I.od) ||
    (a === G.Zb && Ic.test(this.input.slice(this.ba, this.start))) ||
    ((a === G.Ba || a === G.ha) && Hc(this) === I.$a)
      ? this.context.push(I.$c)
      : this.context.push(I.Kb);
    this.W = !1;
  };
  G.Ba.ga = function () {
    "function" === Hc(this).Ec && this.context.pop();
    this.W = !0;
  };
  G.Pa.ga = function () {
    Hc(this) === I.qd ? this.context.pop() : this.context.push(I.qd);
    this.W = !1;
  };
  G.ja.ga = function (a) {
    a === G.Ya && ((a = this.context.length - 1), (this.context[a] = this.context[a] === I.Kb ? I.te : I.ue));
    this.W = !0;
  };
  G.name.ga = function (a) {
    var b = !1;
    if ((a = 6 <= this.options.o && a !== G.Sa) && !(a = "of" === this.value && !this.W) && (a = "yield" === this.value))
      a: {
        for (a = this.context.length - 1; 1 <= a; a--) {
          var c = this.context[a];
          if ("function" === c.Ec) {
            a = c.aa;
            break a;
          }
        }
        a = !1;
      }
    a && (b = !0);
    this.W = b;
  };
  var Ic = /\r\n?|\n|\u2028|\u2029/;
  function Jc(a) {
    return 10 === a || 13 === a || 8232 === a || 8233 === a;
  }
  function Kc(a, b, c) {
    void 0 === c && (c = a.length);
    for (; b < c; b++) {
      var d = a.charCodeAt(b);
      if (Jc(d)) return b < c - 1 && 13 === d && 10 === a.charCodeAt(b + 1) ? b + 2 : b + 1;
    }
    return -1;
  }
  var Lc = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    J = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
    Mc = Object.prototype,
    Pc = Mc.hasOwnProperty,
    Qc = Mc.toString,
    Rc =
      Array.isArray ||
      function (a) {
        return "[object Array]" === Qc.call(a);
      },
    Sc = {};
  function Tc(a) {
    return Sc[a] || (Sc[a] = new RegExp("^(?:" + a.replace(/ /g, "|") + ")$"));
  }
  function Uc(a) {
    if (65535 >= a) return String.fromCharCode(a);
    a -= 65536;
    return String.fromCharCode((a >> 10) + 55296, (a & 1023) + 56320);
  }
  var Vc = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
    Wc = class {
      constructor(a, b) {
        this.i = a;
        this.g = b;
      }
    },
    Xc = class {
      constructor(a, b, c) {
        this.start = b;
        this.end = c;
        null !== a.Fb && (this.source = a.Fb);
      }
    },
    Yc = {
      o: null,
      kb: "script",
      jd: null,
      kd: null,
      ub: null,
      de: !1,
      Uc: !1,
      ce: null,
      ee: null,
      ac: !1,
      ic: !0,
      ma: !1,
      Cb: null,
      Ga: null,
      Rb: !1,
      Ee: null,
      Fb: null,
      Zc: null,
      Ce: !1
    },
    Zc = !1;
  function $c(a) {
    var b = {},
      c;
    for (c in Yc) b[c] = a && Pc.call(a, c) ? a[c] : Yc[c];
    "latest" === b.o
      ? (b.o = 1e8)
      : null == b.o
      ? (!Zc &&
          "object" === typeof console &&
          console.warn &&
          ((Zc = !0),
          console.warn(
            "Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future."
          )),
        (b.o = 11))
      : 2015 <= b.o && (b.o -= 2009);
    null == b.ub && (b.ub = 5 > b.o);
    (a && null != a.ac) || (b.ac = 14 <= b.o);
    if (Rc(b.Cb)) {
      var d = b.Cb;
      b.Cb = function (e) {
        return d.push(e);
      };
    }
    Rc(b.Ga) && (b.Ga = ad(b, b.Ga));
    return b;
  }
  function ad(a, b) {
    return function (c, d, e, f, h, g) {
      c = { type: c ? "Block" : "Line", value: d, start: e, end: f };
      a.ma && (c.Ob = new Xc(this, h, g));
      a.Rb && (c.S = [e, f]);
      b.push(c);
    };
  }
  var bd = [];
  class cd {
    constructor(a) {
      this.flags = a;
      this.Vb = [];
      this.Na = [];
      this.pc = [];
      this.Fa = !1;
    }
  }
  function dd(a, b) {
    var c = a.key;
    return !a.V && (("Identifier" === c.type && c.name === b) || ("Literal" === c.type && c.value === b));
  }
  var ed = class {
      constructor(a, b, c, d, e) {
        this.Ec = a;
        this.bd = !!b;
        this.De = !!c;
        this.nd = d;
        this.aa = !!e;
      }
    },
    I = {
      $a: new ed("{", !1),
      bc: new ed("{", !0),
      fe: new ed("${", !1),
      od: new ed("(", !1),
      Ae: new ed("(", !0),
      qd: new ed("`", !0, !0, function (a) {
        a.sc = !0;
        try {
          for (var b = "", c = a.h; ; ) {
            a.h >= a.input.length && a.j(a.start, "Unterminated template");
            var d = a.input.charCodeAt(a.h);
            if (96 === d || (36 === d && 123 === a.input.charCodeAt(a.h + 1))) {
              if (a.h === a.start && (a.type === G.xd || a.type === G.uc)) {
                if (36 === d) {
                  a.h += 2;
                  K(a, G.mc);
                  break;
                }
                ++a.h;
                K(a, G.Pa);
                break;
              }
              b += a.input.slice(c, a.h);
              K(a, G.xd, b);
              break;
            }
            if (92 === d) (b += a.input.slice(c, a.h)), (b += fd(a, !0)), (c = a.h);
            else if (Jc(d)) {
              b += a.input.slice(c, a.h);
              ++a.h;
              switch (d) {
                case 13:
                  10 === a.input.charCodeAt(a.h) && ++a.h;
                case 10:
                  b += "\n";
                  break;
                default:
                  b += String.fromCharCode(d);
              }
              a.options.ma && (++a.ab, (a.gb = a.h));
              c = a.h;
            } else ++a.h;
          }
        } catch (e) {
          if (e === gd)
            a: {
              for (; a.h < a.input.length; a.h++)
                switch (a.input[a.h]) {
                  case "\\":
                    ++a.h;
                    break;
                  case "$":
                    if ("{" !== a.input[a.h + 1]) break;
                  case "`":
                    K(a, G.uc, a.input.slice(a.start, a.h));
                    break a;
                }
              a.j(a.start, "Unterminated template");
            }
          else throw e;
        }
        a.sc = !1;
      }),
      $c: new ed("function", !1),
      Kb: new ed("function", !0),
      te: new ed("function", !0, !1, null, !0),
      ue: new ed("function", !1, !1, null, !0)
    },
    hd = [];
  const id = { kind: "loop" },
    jd = { kind: "switch" };
  function kd(a) {
    return ("MemberExpression" === a.type && "PrivateIdentifier" === a.fa.type) || ("ChainExpression" === a.type && kd(a.J));
  }
  class ld {
    constructor() {
      this.bb = this.Db = this.Ha = this.oa = this.Eb = -1;
    }
  }
  var md = class {
    constructor(a, b, c) {
      this.type = "";
      this.end = 0;
      this.start = b;
      a.options.ma && (this.Ob = new Xc(a, c, void 0));
      a.options.Zc && (this.Fb = a.options.Zc);
      a.options.Rb && (this.S = [b, 0]);
    }
  };
  function nd(a) {
    return od(a) || pd(a);
  }
  function qd(a) {
    return (48 <= a && 57 >= a) || (65 <= a && 70 >= a) || (97 <= a && 102 >= a);
  }
  function rd(a) {
    return 65 <= a && 70 >= a ? 10 + (a - 65) : 97 <= a && 102 >= a ? 10 + (a - 97) : a - 48;
  }
  function pd(a) {
    return 48 <= a && 57 >= a;
  }
  function sd(a) {
    return 36 === a || (40 <= a && 43 >= a) || 46 === a || 63 === a || (91 <= a && 94 >= a) || (123 <= a && 125 >= a);
  }
  var td = {
      9: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
      10: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic",
      11: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic",
      12: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict",
      13: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict",
      14: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic EBase EComp EMod EPres ExtPict"
    },
    ud = {
      9: "",
      10: "",
      11: "",
      12: "",
      13: "",
      14: "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji"
    },
    gd = {};
  function od(a) {
    return (65 <= a && 90 >= a) || (97 <= a && 122 >= a) || 95 === a;
  }
  for (
    var vd = {
        9: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
        10: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
        11: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
        12: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
        13: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
        14: "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith Hrkt Katakana_Or_Hiragana Kawi Nag_Mundari Nagm Unknown Zzzz"
      },
      wd = {},
      xd = 0,
      yd = [9, 10, 11, 12, 13, 14];
    xd < yd.length;
    xd += 1
  ) {
    var zd = yd[xd],
      Ad = (wd[zd] = {
        he: Tc(
          td[zd] +
            " Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu"
        ),
        ie: Tc(ud[zd]),
        ua: {
          Cd: Tc(
            "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu"
          ),
          Jc: Tc(vd[zd])
        }
      });
    Ad.ua.Ld = Ad.ua.Jc;
    Ad.ua.gc = Ad.ua.Cd;
    Ad.ua.zf = Ad.ua.Jc;
    Ad.ua.Af = Ad.ua.Ld;
  }
  function Bd(a) {
    return "function" !== typeof BigInt ? null : BigInt(a.replace(/_/g, ""));
  }
  function Cd(a, b, c = !1) {
    const d = a.source,
      e = d.length;
    if (b >= e) return -1;
    const f = d.charCodeAt(b);
    if ((!c && !a.U) || 55295 >= f || 57344 <= f || b + 1 >= e) return f;
    a = d.charCodeAt(b + 1);
    return 56320 <= a && 57343 >= a ? (f << 10) + a - 56613888 : f;
  }
  function Dd(a, b, c = !1) {
    var d = a.source;
    const e = d.length;
    if (b >= e) return e;
    const f = d.charCodeAt(b);
    d = d.charCodeAt(b + 1);
    return (!c && !a.U) || 55295 >= f || 57344 <= f || b + 1 >= e || 56320 > d || 57343 < d ? b + 1 : b + 2;
  }
  function Ed(a, b) {
    let c = a.h;
    for (const d of b) {
      b = Cd(a, c, !1);
      if (-1 === b || b !== d) return !1;
      c = Dd(a, c, !1);
    }
    a.h = c;
    return !0;
  }
  class Fd {
    constructor(a) {
      this.g = a;
      this.Ne =
        "gim" +
        (6 <= a.options.o ? "uy" : "") +
        (9 <= a.options.o ? "s" : "") +
        (13 <= a.options.o ? "d" : "") +
        (15 <= a.options.o ? "v" : "");
      this.Ub = wd[14 <= a.options.o ? 14 : a.options.o];
      this.flags = this.source = "";
      this.start = 0;
      this.nb = this.Tb = this.U = !1;
      this.v = this.h = 0;
      this.L = "";
      this.Nb = !1;
      this.Qb = this.Bb = 0;
      this.yb = [];
      this.cc = [];
    }
    reset(a, b, c) {
      const d = -1 !== c.indexOf("v"),
        e = -1 !== c.indexOf("u");
      this.start = a | 0;
      this.source = b;
      this.flags = c;
      d && 15 <= this.g.options.o
        ? (this.nb = this.Tb = this.U = !0)
        : ((this.U = e && 6 <= this.g.options.o), (this.Tb = !1), (this.nb = e && 9 <= this.g.options.o));
    }
    j(a) {
      this.g.j(this.start, `Invalid regular expression: /${this.source}/: ${a}`);
    }
    current(a = !1) {
      return Cd(this, this.h, a);
    }
    advance(a = !1) {
      this.h = Dd(this, this.h, a);
    }
    m(a) {
      return this.current(!1) === a ? (this.advance(!1), !0) : !1;
    }
  }
  const Gd = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
  function Hc(a) {
    return a.context[a.context.length - 1];
  }
  function Hd(a) {
    var b = a.options.Ee || M(a);
    Id(a);
    var c = Object.create(null);
    b.body || (b.body = []);
    for (; a.type !== G.Ta; ) {
      var d = N(a, null, !0, c);
      b.body.push(d);
    }
    if (a.D)
      for (c = 0, d = Object.keys(a.M); c < d.length; c += 1) {
        const e = d[c];
        a.j(a.M[e].start, "Export '" + e + "' is not defined");
      }
    Jd(a, b.body);
    a.next();
    b.kb = a.options.kb;
    return (a = O(a, b, "Program"));
  }
  function Kd(a) {
    return a.options.ma ? new Wc(a.ab, a.h - a.gb) : null;
  }
  function Ld(a, b) {
    if (5 > a.options.o) return !1;
    for (;;) {
      J.lastIndex = b;
      b += J.exec(a.input)[0].length;
      var c = Gd.exec(a.input.slice(b));
      if (!c) return !1;
      if ("use strict" === (c[1] || c[2])) {
        J.lastIndex = b + c[0].length;
        b = J.exec(a.input);
        c = b.index + b[0].length;
        var d = a.input.charAt(c);
        return (
          ";" === d || "}" === d || (Ic.test(b[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(d) || ("!" === d && "=" === a.input.charAt(c + 1))))
        );
      }
      b += c[0].length;
      J.lastIndex = b;
      b += J.exec(a.input)[0].length;
      ";" === a.input[b] && b++;
    }
  }
  function Md(a, b) {
    for (var c = a.h, d = a.options.Ga && Kd(a), e = a.input.charCodeAt((a.h += b)); a.h < a.input.length && !Jc(e); )
      e = a.input.charCodeAt(++a.h);
    a.options.Ga && a.options.Ga(!1, a.input.slice(c + b, a.h), c, a.h, d, Kd(a));
  }
  function Nd(a, b) {
    a.u.push(new cd(b));
  }
  function Od(a) {
    for (var b = a.u.length - 1; ; b--) {
      var c = a.u[b];
      if (c.flags & 259) return c;
    }
  }
  function Pd(a) {
    for (var b = a.u.length - 1; ; b--) {
      var c = a.u[b];
      if (c.flags & 259 && !(c.flags & 16)) return c;
    }
  }
  function Qd(a) {
    return a.u[a.u.length - 1];
  }
  function M(a) {
    return new md(a, a.start, a.O);
  }
  function Id(a) {
    var b = Hc(a);
    (b && b.De) || Rd(a);
    a.start = a.h;
    a.options.ma && (a.O = Kd(a));
    if (a.h >= a.input.length) K(a, G.Ta);
    else if (b.nd) b.nd(a);
    else if (((b = Sd(a)), Ec(b, 6 <= a.options.o) || 92 === b)) {
      b = Td(a);
      var c = G.name;
      a.qb.test(b) && (c = Gc[b]);
      K(a, c, b);
    } else Ud(a, b);
  }
  function Vd(a, b) {
    return a.type === G.name && a.value === b && !a.C;
  }
  function P(a, b) {
    if (!Vd(a, b)) return !1;
    a.next();
    return !0;
  }
  function Q(a, b) {
    a.j(null != b ? b : a.start, "Unexpected token");
  }
  function Wd(a) {
    return a.type === G.Ta || a.type === G.ca || Ic.test(a.input.slice(a.ba, a.start));
  }
  function Xd(a) {
    return Wd(a) ? (a.options.jd && a.options.jd(a.ba, a.pa), !0) : !1;
  }
  function R(a) {
    a.m(G.ia) || Xd(a) || Q(a);
  }
  function Yd(a, b, c) {
    return a.type === b ? (a.options.kd && a.options.kd(a.A, a.ya), c || a.next(), !0) : !1;
  }
  function S(a, b) {
    a.m(b) || Q(a);
  }
  function Zd(a, b, c) {
    b &&
      (-1 < b.oa && a.j(b.oa, "Comma is not permitted after the rest element"),
      (b = c ? b.Ha : b.Db),
      -1 < b && a.j(b, c ? "Assigning to rvalue" : "Parenthesized pattern"));
  }
  function $d(a, b, c) {
    if (!b) return !1;
    var d = b.Eb;
    b = b.bb;
    if (!c) return 0 <= d || 0 <= b;
    0 <= d && a.j(d, "Shorthand property assignments are valid only in destructuring patterns");
    0 <= b && a.j(b, "Redefinition of __proto__ property");
    return !1;
  }
  function ae(a) {
    a.i && (!a.g || a.i < a.g) && a.j(a.i, "Yield expression cannot be a default value");
    a.g && a.j(a.g, "Await expression cannot be a default value");
  }
  function be(a, b) {
    return "ParenthesizedExpression" === b.type ? be(a, b.J) : "Identifier" === b.type || "MemberExpression" === b.type;
  }
  function N(a, b, c, d) {
    var e = a.type,
      f = M(a);
    if (ce(a, b)) {
      e = G.Jb;
      var h = "let";
    }
    switch (e) {
      case G.Pd:
      case G.Rd:
        d = e.da;
        b = "break" === d;
        a.next();
        a.m(G.ia) || Xd(a) ? (f.label = null) : a.type !== G.name ? Q(a) : ((f.label = T(a)), R(a));
        for (e = 0; e < a.l.length; ++e) {
          var g = a.l[e];
          if (null == f.label || g.name === f.label.name) {
            if (null != g.kind && (b || "loop" === g.kind)) break;
            if (f.label && b) break;
          }
        }
        e === a.l.length && a.j(f.start, "Unsyntactic " + d);
        return O(a, f, b ? "BreakStatement" : "ContinueStatement");
      case G.Sd:
        return a.next(), R(a), O(a, f, "DebuggerStatement");
      case G.Td:
        return (
          a.next(),
          a.l.push(id),
          (f.body = N(a, "do")),
          a.l.pop(),
          S(a, G.$b),
          (f.test = de(a)),
          6 <= a.options.o ? a.m(G.ia) : R(a),
          O(a, f, "DoWhileStatement")
        );
      case G.Nc:
        return ee(a, f);
      case G.Ya:
        return (
          b && (a.P || ("if" !== b && "label" !== b)) && 6 <= a.options.o && Q(a), (d = !b), a.next(), fe(a, f, 1 | (d ? 0 : 2), !1, !1)
        );
      case G.Hb:
        return b && Q(a), ge(a, f, !0);
      case G.Oc:
        return a.next(), (f.test = de(a)), (f.la = N(a, "if")), (f.Aa = a.m(G.Yb) ? N(a, "if") : null), O(a, f, "IfStatement");
      case G.Zb:
        return (
          a.Jd || a.options.de || a.j(a.start, "'return' outside of function"),
          a.next(),
          a.m(G.ia) || Xd(a) ? (f.B = null) : ((f.B = U(a)), R(a)),
          O(a, f, "ReturnStatement")
        );
      case G.Qc:
        a.next();
        f.kc = de(a);
        f.ec = [];
        S(a, G.ha);
        a.l.push(jd);
        Nd(a, 0);
        var k;
        for (d = !1; a.type !== G.ca; )
          a.type === G.Kc || a.type === G.Lc
            ? ((b = a.type === G.Kc),
              k && O(a, k, "SwitchCase"),
              f.ec.push((k = M(a))),
              (k.la = []),
              a.next(),
              b ? (k.test = U(a)) : (d && a.j(a.A, "Multiple default clauses"), (d = !0), (k.test = null)),
              S(a, G.Ba))
            : (k || Q(a), k.la.push(N(a, null)));
        he(a);
        k && O(a, k, "SwitchCase");
        a.next();
        a.l.pop();
        return O(a, f, "SwitchStatement");
      case G.ae:
        return (
          a.next(),
          Ic.test(a.input.slice(a.ba, a.start)) && a.j(a.ba, "Illegal newline after throw"),
          (f.B = U(a)),
          R(a),
          O(a, f, "ThrowStatement")
        );
      case G.be:
        return (
          a.next(),
          (f.block = ie(a)),
          (f.Ea = null),
          a.type === G.Qd &&
            ((d = M(a)),
            a.next(),
            a.m(G.X)
              ? ((b = je(a)), (e = "Identifier" === b.type), Nd(a, e ? 32 : 0), ke(a, b, e ? 4 : 2), S(a, G.Y), (d.ib = b))
              : (10 > a.options.o && Q(a), (d.ib = null), Nd(a, 0)),
            (d.body = ie(a, !1)),
            he(a),
            (f.Ea = O(a, d, "CatchClause"))),
          (f.cb = a.m(G.Xd) ? ie(a) : null),
          f.Ea || f.cb || a.j(f.start, "Missing catch or finally clause"),
          O(a, f, "TryStatement")
        );
      case G.Xb:
      case G.Jb:
        return (
          (h = h || a.value), b && "var" !== h && Q(a), (d = h), a.next(), le(a, f, !1, d, void 0), R(a), O(a, f, "VariableDeclaration")
        );
      case G.$b:
        return a.next(), (f.test = de(a)), a.l.push(id), (f.body = N(a, "while")), a.l.pop(), O(a, f, "WhileStatement");
      case G.Tc:
        return (
          a.P && a.j(a.start, "'with' in strict mode"), a.next(), (f.object = de(a)), (f.body = N(a, "with")), O(a, f, "WithStatement")
        );
      case G.ha:
        return ie(a, !0, f);
      case G.ia:
        return a.next(), O(a, f, "EmptyStatement");
      case G.Ud:
      case G.Ib:
        if (
          10 < a.options.o &&
          e === G.Ib &&
          ((J.lastIndex = a.h), (b = J.exec(a.input)), (b = a.input.charCodeAt(a.h + b[0].length)), 40 === b || 46 === b)
        )
          return me(a, f, U(a));
        a.options.Uc ||
          (c || a.j(a.start, "'import' and 'export' may only appear at the top level"),
          a.D || a.j(a.start, "'import' and 'export' may appear only with 'sourceType: module'"));
        if (e === G.Ib) {
          a.next();
          if (a.type === G.xa) (f.Wa = hd), (f.source = ne(a));
          else {
            a: {
              d = [];
              b = !0;
              if (
                a.type === G.name &&
                ((e = d.push),
                (g = M(a)),
                (g.local = T(a)),
                oe(a, g.local, 2),
                (g = O(a, g, "ImportDefaultSpecifier")),
                e.call(d, g),
                !a.m(G.N))
              )
                break a;
              if (a.type === G.ja)
                (b = d.push),
                  (e = M(a)),
                  a.next(),
                  P(a, "as") || Q(a),
                  (e.local = T(a)),
                  oe(a, e.local, 2),
                  (e = O(a, e, "ImportNamespaceSpecifier")),
                  b.call(d, e);
              else
                for (S(a, G.ha); !a.m(G.ca); ) {
                  if (b) b = !1;
                  else if ((S(a, G.N), Yd(a, G.ca))) break;
                  e = d;
                  g = e.push;
                  c = a;
                  k = M(c);
                  k.rc = pe(c);
                  P(c, "as") ? (k.local = T(c)) : (qe(c, k.rc), (k.local = k.rc));
                  oe(c, k.local, 2);
                  c = O(c, k, "ImportSpecifier");
                  g.call(e, c);
                }
            }
            f.Wa = d;
            P(a, "from") || Q(a);
            f.source = a.type === G.xa ? ne(a) : Q(a);
          }
          R(a);
          a = O(a, f, "ImportDeclaration");
        } else if ((a.next(), a.m(G.ja)))
          11 <= a.options.o && (P(a, "as") ? ((f.qa = pe(a)), re(a, d, f.qa, a.A)) : (f.qa = null)),
            P(a, "from") || Q(a),
            a.type !== G.xa && Q(a),
            (f.source = ne(a)),
            R(a),
            (a = O(a, f, "ExportAllDeclaration"));
        else if (a.m(G.Lc))
          re(a, d, "default", a.A),
            a.type === G.Ya || (g = se(a))
              ? ((d = M(a)), a.next(), g && a.next(), (d = fe(a, d, 5, !1, g)))
              : a.type === G.Hb
              ? (d = ge(a, M(a), "nullableID"))
              : ((d = V(a)), R(a)),
            (f.Z = d),
            (a = O(a, f, "ExportDefaultDeclaration"));
        else {
          if ("var" === a.type.da || "const" === a.type.da || "class" === a.type.da || "function" === a.type.da || ce(a) || se(a)) {
            f.Z = N(a, null);
            if ("VariableDeclaration" === f.Z.type) {
              if (((b = f.Z.Ja), d)) for (e = 0; e < b.length; e += 1) te(a, d, b[e].id);
            } else re(a, d, f.Z.id, f.Z.id.start);
            f.Wa = [];
            f.source = null;
          } else {
            f.Z = null;
            b = [];
            e = !0;
            for (S(a, G.ha); !a.m(G.ca); ) {
              if (e) e = !1;
              else if ((S(a, G.N), Yd(a, G.ca))) break;
              g = b;
              c = g.push;
              k = a;
              h = d;
              var m = M(k);
              m.local = pe(k);
              m.qa = P(k, "as") ? pe(k) : m.local;
              re(k, h, m.qa, m.qa.start);
              k = O(k, m, "ExportSpecifier");
              c.call(g, k);
            }
            f.Wa = b;
            if (P(a, "from")) a.type !== G.xa && Q(a), (f.source = ne(a));
            else {
              d = 0;
              for (b = f.Wa; d < b.length; d += 1)
                (e = b[d]),
                  qe(a, e.local),
                  (g = e.local),
                  -1 === a.u[0].Na.indexOf(g.name) && -1 === a.u[0].Vb.indexOf(g.name) && (a.M[g.name] = g),
                  "Literal" === e.local.type &&
                    a.j(e.local.start, "A string literal cannot be used as an exported binding without `from`.");
              f.source = null;
            }
            R(a);
          }
          a = O(a, f, "ExportNamedDeclaration");
        }
        return a;
      default:
        if (se(a)) return b && Q(a), a.next(), (d = !b), a.next(), fe(a, f, 1 | (d ? 0 : 2), !1, !0);
        d = a.value;
        g = U(a);
        if (e === G.name && "Identifier" === g.type && a.m(G.Ba)) {
          e = 0;
          for (c = a.l; e < c.length; e += 1) c[e].name === d && a.j(g.start, "Label '" + d + "' is already declared");
          e = a.type.Ab ? "loop" : a.type === G.Qc ? "switch" : null;
          for (c = a.l.length - 1; 0 <= c; c--)
            if (((k = a.l[c]), k.wd === f.start)) (k.wd = a.start), (k.kind = e);
            else break;
          a.l.push({ name: d, kind: e, wd: a.start });
          f.body = N(a, b ? (-1 === b.indexOf("label") ? b + "label" : b) : "label");
          a.l.pop();
          f.label = g;
          a = O(a, f, "LabeledStatement");
        } else a = me(a, f, g);
        return a;
    }
  }
  function Jd(a, b) {
    for (var c = 0; c < b.length && ue(a, b[c]); ++c) b[c].tf = b[c].J.raw.slice(1, -1);
  }
  function O(a, b, c) {
    return ve(a, b, c, a.ba, a.pa);
  }
  function ce(a, b) {
    if (6 > a.options.o || !Vd(a, "let")) return !1;
    J.lastIndex = a.h;
    var c = J.exec(a.input);
    c = a.h + c[0].length;
    var d = a.input.charCodeAt(c);
    if (91 === d || 92 === d) return !0;
    if (b) return !1;
    if (123 === d || (55295 < d && 56320 > d)) return !0;
    if (Ec(d, !0)) {
      for (b = c + 1; Fc((d = a.input.charCodeAt(b)), !0); ) ++b;
      if (92 === d || (55295 < d && 56320 > d) || !Ac.test(a.input.slice(c, b))) return !0;
    }
    return !1;
  }
  function se(a) {
    if (8 > a.options.o || !Vd(a, "async")) return !1;
    J.lastIndex = a.h;
    var b = J.exec(a.input);
    b = a.h + b[0].length;
    var c;
    return (
      !Ic.test(a.input.slice(a.h, b)) &&
      "function" === a.input.slice(b, b + 8) &&
      (b + 8 === a.input.length || !(Fc((c = a.input.charCodeAt(b + 8))) || (55295 < c && 56320 > c)))
    );
  }
  function ee(a, b) {
    a.next();
    var c = 9 <= a.options.o && a.ob && P(a, "await") ? a.A : -1;
    a.l.push(id);
    Nd(a, 0);
    S(a, G.X);
    if (a.type === G.ia) return -1 < c && Q(a, c), we(a, b, null);
    var d = ce(a);
    if (a.type === G.Jb || a.type === G.Xb || d) {
      var e = M(a);
      d = d ? "let" : a.value;
      a.next();
      le(a, e, !0, d);
      O(a, e, "VariableDeclaration");
      if ((a.type === G.za || (6 <= a.options.o && Vd(a, "of"))) && 1 === e.Ja.length)
        return 9 <= a.options.o && (a.type === G.za ? -1 < c && Q(a, c) : (b.Vc = -1 < c)), xe(a, b, e);
      -1 < c && Q(a, c);
      return we(a, b, e);
    }
    e = Vd(a, "let");
    d = !1;
    var f = new ld(),
      h = U(a, -1 < c ? "await" : !0, f);
    if (a.type === G.za || (d = 6 <= a.options.o && Vd(a, "of")))
      return (
        9 <= a.options.o && (a.type === G.za ? -1 < c && Q(a, c) : (b.Vc = -1 < c)),
        e && d && a.j(h.start, "The left-hand side of a for-of loop may not start with 'let'."),
        ye(a, h, !1, f),
        ke(a, h),
        xe(a, b, h)
      );
    $d(a, f, !0);
    -1 < c && Q(a, c);
    return we(a, b, h);
  }
  function ge(a, b, c) {
    a.next();
    var d = a.P;
    a.P = !0;
    a.type === G.name ? ((b.id = T(a)), c && oe(a, b.id, 2, !1)) : (!0 === c && Q(a), (b.id = null));
    b.mb = a.m(G.Vd) ? ze(a, null, !1) : null;
    var e = { Xc: Object.create(null), Fc: [] };
    a.F.push(e);
    e = e.Xc;
    var f = M(a),
      h = !1;
    f.body = [];
    for (S(a, G.ha); a.type !== G.ca; ) {
      a: {
        var g = a,
          k = null !== b.mb;
        if (g.m(G.ia)) var m = null;
        else {
          var n = g.options.o;
          m = M(g);
          var q = "",
            t = !1,
            p = !1,
            u = "method",
            r = !1;
          if (P(g, "static")) {
            if (13 <= n && g.m(G.ha)) {
              p = g;
              t = m;
              t.body = [];
              g = p.l;
              p.l = [];
              for (Nd(p, 320); p.type !== G.ca; ) (u = N(p, null)), t.body.push(u);
              p.next();
              he(p);
              p.l = g;
              O(p, t, "StaticBlock");
              break a;
            }
            Ae(g) || g.type === G.ja ? (r = !0) : (q = "static");
          }
          m.lb = r;
          !q && 8 <= n && P(g, "async") && ((!Ae(g) && g.type !== G.ja) || Wd(g) ? (q = "async") : (p = !0));
          !q && (9 <= n || !p) && g.m(G.ja) && (t = !0);
          q || p || t || ((r = g.value), !P(g, "get") && !P(g, "set")) || (Ae(g) ? (u = r) : (q = r));
          q
            ? ((m.V = !1), (m.key = W(g, g.A, g.ya)), (m.key.name = q), O(g, m.key, "Identifier"))
            : ((q = g),
              (r = m),
              q.type === G.jb
                ? ("constructor" === q.value && q.j(q.start, "Classes can't have an element named '#constructor'"),
                  (r.V = !1),
                  (r.key = Be(q)))
                : Ce(q, r));
          13 > n || g.type === G.X || "method" !== u || t || p
            ? ((k = (n = !m.lb && dd(m, "constructor")) && k),
              n && "method" !== u && g.j(m.key.start, "Constructor can't have get/set modifier"),
              (m.kind = n ? "constructor" : u),
              (u = m),
              (n = u.key),
              "constructor" === u.kind
                ? (t && g.j(n.start, "Constructor can't be a generator"), p && g.j(n.start, "Constructor can't be an async method"))
                : u.lb && dd(u, "prototype") && g.j(n.start, "Classes may not have a static property named prototype"),
              (p = u.value = De(g, t, p, k)),
              "get" === u.kind && 0 !== p.T.length && g.j(p.start, "getter should have no params"),
              "set" === u.kind && 1 !== p.T.length && g.j(p.start, "setter should have exactly one param"),
              "set" === u.kind && "RestElement" === p.T[0].type && g.j(p.T[0].start, "Setter cannot use rest params"),
              O(g, u, "MethodDefinition"))
            : ((p = g),
              (t = m),
              dd(t, "constructor")
                ? p.j(t.key.start, "Classes can't have a field named 'constructor'")
                : t.lb && dd(t, "prototype") && p.j(t.key.start, "Classes can't have a static field named 'prototype'"),
              p.m(G.Ka) ? ((g = Pd(p)), (u = g.Fa), (g.Fa = !0), (t.value = V(p)), (g.Fa = u)) : (t.value = null),
              R(p),
              O(p, t, "PropertyDefinition"));
        }
      }
      if (m)
        if ((f.body.push(m), "MethodDefinition" === m.type && "constructor" === m.kind))
          h && a.j(m.start, "Duplicate constructor in the same class"), (h = !0);
        else {
          if ((p = m.key && "PrivateIdentifier" === m.key.type))
            (p = e),
              (t = m.key.name),
              (g = p[t]),
              (u = "true"),
              "MethodDefinition" !== m.type || ("get" !== m.kind && "set" !== m.kind) || (u = (m.lb ? "s" : "i") + m.kind),
              ("iget" === g && "iset" === u) ||
              ("iset" === g && "iget" === u) ||
              ("sget" === g && "sset" === u) ||
              ("sset" === g && "sget" === u)
                ? ((p[t] = "true"), (p = !1))
                : g
                ? (p = !0)
                : ((p[t] = u), (p = !1));
          p && a.j(m.key.start, "Identifier '#" + m.key.name + "' has already been declared");
        }
    }
    a.P = d;
    a.next();
    b.body = O(a, f, "ClassBody");
    e = a.F.pop();
    d = e.Xc;
    e = e.Fc;
    if (a.options.ic)
      for (f = a.F.length, f = 0 === f ? null : a.F[f - 1], h = 0; h < e.length; ++h)
        (m = e[h]),
          Pc.call(d, m.name) || (f ? f.Fc.push(m) : a.j(m.start, "Private field '#" + m.name + "' must be declared in an enclosing class"));
    return O(a, b, c ? "ClassDeclaration" : "ClassExpression");
  }
  function ie(a, b, c, d) {
    void 0 === b && (b = !0);
    void 0 === c && (c = M(a));
    c.body = [];
    S(a, G.ha);
    for (b && Nd(a, 0); a.type !== G.ca; ) {
      var e = N(a, null);
      c.body.push(e);
    }
    d && (a.P = !1);
    a.next();
    b && he(a);
    return O(a, c, "BlockStatement");
  }
  function me(a, b, c) {
    b.J = c;
    R(a);
    return O(a, b, "ExpressionStatement");
  }
  function U(a, b, c) {
    var d = a.start,
      e = a.O,
      f = V(a, b, c);
    if (a.type === G.N) {
      d = W(a, d, e);
      for (d.La = [f]; a.m(G.N); ) d.La.push(V(a, b, c));
      return O(a, d, "SequenceExpression");
    }
    return f;
  }
  function T(a, b) {
    var c = M(a);
    a.type === G.name
      ? (c.name = a.value)
      : a.type.da
      ? ((c.name = a.type.da),
        ("class" !== c.name && "function" !== c.name) || (a.ba === a.A + 1 && 46 === a.input.charCodeAt(a.A)) || a.context.pop(),
        (a.type = G.name))
      : Q(a);
    a.next(!!b);
    O(a, c, "Identifier");
    b || (qe(a, c), "await" !== c.name || a.s || (a.s = c.start));
    return c;
  }
  function de(a) {
    S(a, G.X);
    var b = U(a);
    S(a, G.Y);
    return b;
  }
  function we(a, b, c) {
    b.R = c;
    S(a, G.ia);
    b.test = a.type === G.ia ? null : U(a);
    S(a, G.ia);
    b.update = a.type === G.Y ? null : U(a);
    S(a, G.Y);
    b.body = N(a, "for");
    he(a);
    a.l.pop();
    return O(a, b, "ForStatement");
  }
  function le(a, b, c, d, e) {
    b.Ja = [];
    for (b.kind = d; ; ) {
      var f = M(a),
        h = a,
        g = f,
        k = d;
      g.id = je(h);
      ke(h, g.id, "var" === k ? 1 : 2, !1);
      a.m(G.Ka)
        ? (f.R = V(a, c))
        : e || "const" !== d || a.type === G.za || (6 <= a.options.o && Vd(a, "of"))
        ? e || "Identifier" === f.id.type || (c && (a.type === G.za || Vd(a, "of")))
          ? (f.R = null)
          : a.j(a.ba, "Complex binding patterns require an initialization value")
        : Q(a);
      b.Ja.push(O(a, f, "VariableDeclarator"));
      if (!a.m(G.N)) break;
    }
  }
  function xe(a, b, c) {
    var d = a.type === G.za;
    a.next();
    "VariableDeclaration" === c.type &&
      null != c.Ja[0].R &&
      (!d || 8 > a.options.o || a.P || "var" !== c.kind || "Identifier" !== c.Ja[0].id.type) &&
      a.j(c.start, (d ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
    b.left = c;
    b.right = d ? U(a) : V(a);
    S(a, G.Y);
    b.body = N(a, "for");
    he(a);
    a.l.pop();
    return O(a, b, d ? "ForInStatement" : "ForOfStatement");
  }
  function ye(a, b, c, d) {
    if (6 <= a.options.o && b)
      switch (b.type) {
        case "Identifier":
          a.ra && "await" === b.name && a.j(b.start, "Cannot use 'await' as identifier inside an async function");
          break;
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          b.type = "ObjectPattern";
          d && Zd(a, d, !0);
          d = 0;
          for (var e = b.wa; d < e.length; d += 1) {
            var f = e[d];
            ye(a, f, c);
            "RestElement" !== f.type || ("ArrayPattern" !== f.B.type && "ObjectPattern" !== f.B.type) || a.j(f.B.start, "Unexpected token");
          }
          break;
        case "Property":
          "init" !== b.kind && a.j(b.key.start, "Object pattern can't contain getter or setter");
          ye(a, b.value, c);
          break;
        case "ArrayExpression":
          b.type = "ArrayPattern";
          d && Zd(a, d, !0);
          Ee(a, b.elements, c);
          break;
        case "SpreadElement":
          b.type = "RestElement";
          ye(a, b.B, c);
          "AssignmentPattern" === b.B.type && a.j(b.B.start, "Rest elements cannot have a default value");
          break;
        case "AssignmentExpression":
          "=" !== b.H && a.j(b.left.end, "Only '=' operator can be used for specifying default value.");
          b.type = "AssignmentPattern";
          delete b.H;
          ye(a, b.left, c);
          break;
        case "ParenthesizedExpression":
          ye(a, b.J, c, d);
          break;
        case "ChainExpression":
          a.j(b.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (!c) break;
        default:
          a.j(b.start, "Assigning to rvalue");
      }
    else d && Zd(a, d, !0);
    return b;
  }
  function ke(a, b, c, d) {
    void 0 === c && (c = 0);
    switch (b.type) {
      case "ObjectPattern":
        var e = 0;
        for (b = b.wa; e < b.length; e += 1) Fe(a, b[e], c, d);
        break;
      case "ArrayPattern":
        e = 0;
        for (b = b.elements; e < b.length; e += 1) {
          var f = b[e];
          f && Fe(a, f, c, d);
        }
        break;
      default:
        oe(a, b, c, d);
    }
  }
  function fe(a, b, c, d, e, f) {
    Ge(a, b);
    if (9 <= a.options.o || (6 <= a.options.o && !e)) a.type === G.ja && c & 2 && Q(a), (b.aa = a.m(G.ja));
    8 <= a.options.o && (b.async = !!e);
    c & 1 &&
      ((b.id = c & 4 && a.type !== G.name ? null : T(a)), !b.id || c & 2 || oe(a, b.id, a.P || b.aa || b.async ? (a.Ic ? 1 : 2) : 3));
    e = a.i;
    var h = a.g,
      g = a.s;
    a.i = 0;
    a.g = 0;
    a.s = 0;
    Nd(a, 2 | (b.async ? 4 : 0) | (b.aa ? 8 : 0));
    c & 1 || (b.id = a.type === G.name ? T(a) : null);
    S(a, G.X);
    b.T = He(a, G.Y, !1, 8 <= a.options.o);
    ae(a);
    Ie(a, b, d, !1, f);
    a.i = e;
    a.g = h;
    a.s = g;
    return O(a, b, c & 1 ? "FunctionDeclaration" : "FunctionExpression");
  }
  function he(a) {
    a.u.pop();
  }
  function je(a) {
    if (6 <= a.options.o)
      switch (a.type) {
        case G.Ia:
          const b = M(a);
          a.next();
          b.elements = He(a, G.vb, !0, !0);
          return O(a, b, "ArrayPattern");
        case G.ha:
          return Je(a, !0);
      }
    return T(a);
  }
  function V(a, b, c, d) {
    if (Vd(a, "yield")) {
      if (a.pb)
        return (
          a.i || (a.i = a.start),
          (c = M(a)),
          a.next(),
          a.type === G.ia || Wd(a) || (a.type !== G.ja && !a.type.ka) ? ((c.Yc = !1), (c.B = null)) : ((c.Yc = a.m(G.ja)), (c.B = V(a, b))),
          O(a, c, "YieldExpression")
        );
      a.W = !1;
    }
    var e = !1,
      f = -1,
      h = -1,
      g = -1;
    c ? ((f = c.Ha), (h = c.oa), (g = c.bb), (c.Ha = c.oa = -1)) : ((c = new ld()), (e = !0));
    var k = a.start,
      m = a.O;
    if (a.type === G.X || a.type === G.name) (a.Xa = a.start), (a.Gb = "await" === b);
    var n = c;
    var q = a.start,
      t = a.O;
    var p = a.start;
    var u = a.O,
      r = Ke(a, n, !1, !1, b);
    p = $d(a, n) ? r : r.start === p && "ArrowFunctionExpression" === r.type ? r : Le(a, r, p, u, -1, b);
    $d(a, n)
      ? (n = p)
      : a.m(G.rd)
      ? ((n = W(a, q, t)), (n.test = p), (n.la = V(a)), S(a, G.Ba), (n.Aa = V(a, b)), (n = O(a, n, "ConditionalExpression")))
      : (n = p);
    d && (n = d.call(a, n, k, m));
    if (a.type.Lb)
      return (
        (d = W(a, k, m)),
        (d.H = a.value),
        a.type === G.Ka && (n = ye(a, n, !1, c)),
        e || (c.Ha = c.oa = c.bb = -1),
        c.Eb >= n.start && (c.Eb = -1),
        a.type === G.Ka ? ke(a, n) : oe(a, n),
        (d.left = n),
        a.next(),
        (d.right = V(a, b)),
        -1 < g && (c.bb = g),
        O(a, d, "AssignmentExpression")
      );
    e && $d(a, c, !0);
    -1 < f && (c.Ha = f);
    -1 < h && (c.oa = h);
    return n;
  }
  function Ge(a, b) {
    b.id = null;
    6 <= a.options.o && (b.aa = b.J = !1);
    8 <= a.options.o && (b.async = !1);
  }
  function oe(a, b, c, d) {
    void 0 === c && (c = 0);
    var e = 0 !== c;
    switch (b.type) {
      case "Identifier":
        a.P && a.Nd.test(b.name) && a.j(b.start, (e ? "Binding " : "Assigning to ") + b.name + " in strict mode");
        if (
          e &&
          (2 === c && "let" === b.name && a.j(b.start, "let is disallowed as a lexically bound name"),
          d && (Pc.call(d, b.name) && a.j(b.start, "Argument name clash"), (d[b.name] = !0)),
          5 !== c)
        ) {
          d = b.name;
          e = c;
          b = b.start;
          c = !1;
          if (2 === e)
            (e = Qd(a)),
              (c = -1 < e.Na.indexOf(d) || -1 < e.pc.indexOf(d) || -1 < e.Vb.indexOf(d)),
              e.Na.push(d),
              a.D && e.flags & 1 && delete a.M[d];
          else if (4 === e) Qd(a).Na.push(d);
          else if (3 === e) (e = Qd(a)), (c = a.Ic ? -1 < e.Na.indexOf(d) : -1 < e.Na.indexOf(d) || -1 < e.Vb.indexOf(d)), e.pc.push(d);
          else
            for (e = a.u.length - 1; 0 <= e; --e) {
              var f = a.u[e];
              if (
                (-1 < f.Na.indexOf(d) && !(f.flags & 32 && f.Na[0] === d)) ||
                (!(f.flags & 2 || (!a.D && f.flags & 1)) && -1 < f.pc.indexOf(d))
              ) {
                c = !0;
                break;
              }
              f.Vb.push(d);
              a.D && f.flags & 1 && delete a.M[d];
              if (f.flags & 259) break;
            }
          c && a.j(b, "Identifier '" + d + "' has already been declared");
        }
        break;
      case "ChainExpression":
        a.j(b.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        e && a.j(b.start, "Binding member expression");
        break;
      case "ParenthesizedExpression":
        return e && a.j(b.start, "Binding parenthesized expression"), oe(a, b.J, c, d);
      default:
        a.j(b.start, (e ? "Binding" : "Assigning to") + " rvalue");
    }
  }
  function Ie(a, b, c, d, e) {
    var f = a.P,
      h = !1;
    c && a.type !== G.ha
      ? ((b.body = V(a, e)), (b.J = !0), Me(a, b, !1))
      : ((e = 7 <= a.options.o && !Ne(b.T)),
        (!f || e) && (h = Ld(a, a.end)) && e && a.j(b.start, "Illegal 'use strict' directive in function with non-simple parameter list"),
        (e = a.l),
        (a.l = []),
        h && (a.P = !0),
        Me(a, b, !f && !h && !c && !d && Ne(b.T)),
        a.P && b.id && oe(a, b.id, 5),
        (b.body = ie(a, !1, void 0, h && !f)),
        (b.J = !1),
        Jd(a, b.body.body),
        (a.l = e));
    he(a);
  }
  function He(a, b, c, d) {
    for (var e = [], f = !0; !a.m(b); )
      if ((f ? (f = !1) : S(a, G.N), c && a.type === G.N)) e.push(null);
      else if (d && Yd(a, b)) break;
      else if (a.type === G.wb) {
        c = Oe(a);
        e.push(c);
        a.type === G.N && a.j(a.start, "Comma is not permitted after the rest element");
        S(a, b);
        break;
      } else e.push(Pe(a, a.start, a.O));
    return e;
  }
  function Ae(a) {
    return a.type === G.name || a.type === G.jb || a.type === G.Ua || a.type === G.xa || a.type === G.Ia || a.type.da;
  }
  function W(a, b, c) {
    return new md(a, b, c);
  }
  function Be(a) {
    var b = M(a);
    a.type === G.jb ? (b.name = a.value) : Q(a);
    a.next();
    O(a, b, "PrivateIdentifier");
    a.options.ic &&
      (0 === a.F.length
        ? a.j(b.start, "Private field '#" + b.name + "' must be declared in an enclosing class")
        : a.F[a.F.length - 1].Fc.push(b));
    return b;
  }
  function Ce(a, b) {
    if (6 <= a.options.o) {
      if (a.m(G.Ia)) {
        b.V = !0;
        b.key = V(a);
        S(a, G.vb);
        return;
      }
      b.V = !1;
    }
    b.key = a.type === G.Ua || a.type === G.xa ? ne(a) : T(a, "never" !== a.options.ub);
  }
  function De(a, b, c, d) {
    var e = M(a),
      f = a.i,
      h = a.g,
      g = a.s;
    Ge(a, e);
    6 <= a.options.o && (e.aa = b);
    8 <= a.options.o && (e.async = !!c);
    a.i = 0;
    a.g = 0;
    a.s = 0;
    Nd(a, 2 | (c ? 4 : 0) | (e.aa ? 8 : 0) | 64 | (d ? 128 : 0));
    S(a, G.X);
    e.T = He(a, G.Y, !1, 8 <= a.options.o);
    ae(a);
    Ie(a, e, !1, !0, !1);
    a.i = f;
    a.g = h;
    a.s = g;
    return O(a, e, "FunctionExpression");
  }
  function ze(a, b, c) {
    var d = a.start,
      e = a.O,
      f = ne(a, b, c);
    if ("ArrowFunctionExpression" === f.type && ")" !== a.input.slice(a.A, a.ba)) return f;
    a = Qe(a, f, d, e, !1, c);
    b && "MemberExpression" === a.type && (b.Ha >= a.start && (b.Ha = -1), b.Db >= a.start && (b.Db = -1), b.oa >= a.start && (b.oa = -1));
    return a;
  }
  function pe(a) {
    if (13 <= a.options.o && a.type === G.xa) {
      var b = Re(a, a.value);
      Vc.test(b.value.toString()) && a.j(b.start, "An export name cannot include a lone surrogate.");
      return b;
    }
    return T(a, !0);
  }
  function re(a, b, c, d) {
    b &&
      ("string" !== typeof c && (c = "Identifier" === c.type ? c.name : c.value),
      Pc.call(b, c) && a.j(d, "Duplicate export '" + c + "'"),
      (b[c] = !0));
  }
  function ne(a, b, c, d) {
    a.type === G.ud && Se(a);
    var e = a.Xa === a.start;
    switch (a.type) {
      case G.Zd:
        return (
          a.Gd || a.j(a.start, "'super' keyword outside a method"),
          (b = M(a)),
          a.next(),
          a.type !== G.X || a.Dd || a.j(b.start, "super() call outside constructor of a subclass"),
          a.type !== G.Sa && a.type !== G.Ia && a.type !== G.X && Q(a),
          O(a, b, "Super")
        );
      case G.$d:
        return (b = M(a)), a.next(), O(a, b, "ThisExpression");
      case G.name:
        b = a.start;
        d = a.O;
        var f = a.C,
          h = T(a, !1);
        if (8 <= a.options.o && !f && "async" === h.name && !Wd(a) && a.m(G.Ya))
          return (e = I.Kb), Hc(a) !== e && (a.context[a.context.length - 1] = e), fe(a, W(a, b, d), 0, !1, !0, c);
        if (e && !Wd(a)) {
          if (a.m(G.Za)) return Te(a, W(a, b, d), [h], !1, c);
          if (8 <= a.options.o && "async" === h.name && a.type === G.name && !f && (!a.Gb || "of" !== a.value || a.C))
            return (h = T(a, !1)), (!Wd(a) && a.m(G.Za)) || Q(a), Te(a, W(a, b, d), [h], !0, c);
        }
        return h;
      case G.td:
        return (b = a.value), (a = Re(a, b.value)), (a.yf = { pattern: b.pattern, flags: b.flags }), a;
      case G.Ua:
      case G.xa:
        return Re(a, a.value);
      case G.Pc:
      case G.Rc:
      case G.Wd:
        return (b = M(a)), (b.value = a.type === G.Pc ? null : a.type === G.Rc), (b.raw = a.type.da), a.next(), O(a, b, "Literal");
      case G.X:
        d = a.start;
        a: {
          f = a.start;
          h = a.O;
          var g = 8 <= a.options.o;
          if (6 <= a.options.o) {
            a.next();
            var k = a.start,
              m = a.O,
              n = [],
              q = !0,
              t = !1,
              p = new ld(),
              u = a.i,
              r = a.g;
            a.i = 0;
            for (a.g = 0; a.type !== G.Y; )
              if ((q ? (q = !1) : S(a, G.N), g && Yd(a, G.Y, !0))) {
                t = !0;
                break;
              } else if (a.type === G.wb) {
                var v = a.start;
                n.push(a.rb(Oe(a)));
                a.type === G.N && a.j(a.start, "Comma is not permitted after the rest element");
                break;
              } else n.push(V(a, !1, p, a.rb));
            g = a.ba;
            q = a.pa;
            S(a, G.Y);
            if (e && !Wd(a) && a.m(G.Za)) {
              Zd(a, p, !1);
              ae(a);
              a.i = u;
              a.g = r;
              c = Te(a, W(a, f, h), n, !1, c);
              break a;
            }
            (n.length && !t) || Q(a, a.A);
            v && Q(a, v);
            $d(a, p, !0);
            a.i = u || a.i;
            a.g = r || a.g;
            1 < n.length ? ((c = W(a, k, m)), (c.La = n), ve(a, c, "SequenceExpression", g, q)) : (c = n[0]);
          } else c = de(a);
          a.options.Ce && ((e = W(a, f, h)), (e.J = c), (c = O(a, e, "ParenthesizedExpression")));
        }
        b && (0 > b.Ha && !be(a, c) && (b.Ha = d), 0 > b.Db && (b.Db = d));
        return c;
      case G.Ia:
        return (c = M(a)), a.next(), (c.elements = Ue(a, G.vb, !0, !0, b)), O(a, c, "ArrayExpression");
      case G.ha:
        return (c = I.bc), Hc(a) !== c && (a.context[a.context.length - 1] = c), Je(a, !1, b);
      case G.Ya:
        return (b = M(a)), a.next(), fe(a, b, 0);
      case G.Hb:
        return ge(a, M(a), !1);
      case G.Yd:
        return (
          a.C && a.j(a.start, "Escape sequence in keyword new"),
          (b = M(a)),
          a.next(),
          6 <= a.options.o && a.type === G.Sa
            ? ((c = W(a, b.start, b.O)),
              (c.name = "new"),
              (b.dd = O(a, c, "Identifier")),
              a.next(),
              (c = a.C),
              (b.fa = T(a, !0)),
              "target" !== b.fa.name && a.j(b.fa.start, "The only valid meta property for new is 'new.target'"),
              c && a.j(b.start, "'new.target' must not contain escaped characters"),
              a.Fd || a.j(b.start, "'new.target' can only be used in functions and class static block"),
              (a = O(a, b, "MetaProperty")))
            : ((c = a.start),
              (e = a.O),
              (b.callee = Qe(a, ne(a, null, !1, !0), c, e, !0, !1)),
              a.m(G.X) ? (b.arguments = Ue(a, G.Y, 8 <= a.options.o, !1)) : (b.arguments = bd),
              (a = O(a, b, "NewExpression"))),
          a
        );
      case G.Pa:
        return Ve(a);
      case G.Ib:
        return (
          11 <= a.options.o
            ? ((c = M(a)),
              a.C && a.j(a.start, "Escape sequence in keyword import"),
              (b = T(a, !0)),
              a.type !== G.X || d
                ? a.type === G.Sa
                  ? ((c.dd = b),
                    (b = c),
                    a.next(),
                    (c = a.C),
                    (b.fa = T(a, !0)),
                    "meta" !== b.fa.name && a.j(b.fa.start, "The only valid meta property for import is 'import.meta'"),
                    c && a.j(b.start, "'import.meta' must not contain escaped characters"),
                    "module" === a.options.kb || a.options.Uc || a.j(b.start, "Cannot use 'import.meta' outside a module"),
                    (a = O(a, b, "MetaProperty")))
                  : (Q(a), (a = void 0))
                : ((b = c),
                  a.next(),
                  (b.source = V(a)),
                  a.m(G.Y) || ((c = a.start), a.m(G.N) && a.m(G.Y) ? a.j(c, "Trailing comma is not allowed in import()") : Q(a, c)),
                  (a = O(a, b, "ImportExpression"))))
            : (a = Q(a)),
          a
        );
      default:
        Q(a);
    }
  }
  function qe(a, b) {
    var c = b.start,
      d = b.end;
    b = b.name;
    a.pb && "yield" === b && a.j(c, "Cannot use 'yield' as identifier inside a generator");
    a.ra && "await" === b && a.j(c, "Cannot use 'await' as identifier inside an async function");
    Pd(a).Fa && "arguments" === b && a.j(c, "Cannot use 'arguments' in class field initializer");
    !a.Id || ("arguments" !== b && "await" !== b) || a.j(c, "Cannot use " + b + " in class static initialization block");
    a.qb.test(b) && a.j(c, "Unexpected keyword '" + b + "'");
    (6 > a.options.o && -1 !== a.input.slice(c, d).indexOf("\\")) ||
      !(a.P ? a.Md : a.Kd).test(b) ||
      (a.ra || "await" !== b || a.j(c, "Cannot use keyword 'await' outside an async function"),
      a.j(c, "The keyword '" + b + "' is reserved"));
  }
  function te(a, b, c) {
    var d = c.type;
    if ("Identifier" === d) re(a, b, c, c.start);
    else if ("ObjectPattern" === d) for (d = 0, c = c.wa; d < c.length; d += 1) te(a, b, c[d]);
    else if ("ArrayPattern" === d)
      for (d = 0, c = c.elements; d < c.length; d += 1) {
        var e = c[d];
        e && te(a, b, e);
      }
    else "Property" === d ? te(a, b, c.value) : "AssignmentPattern" === d ? te(a, b, c.left) : "RestElement" === d && te(a, b, c.B);
  }
  function Re(a, b) {
    var c = M(a);
    c.value = b;
    c.raw = a.input.slice(a.start, a.end);
    110 === c.raw.charCodeAt(c.raw.length - 1) && (c.Wc = c.raw.slice(0, -1).replace(/_/g, ""));
    a.next();
    return O(a, c, "Literal");
  }
  function ue(a, b) {
    return (
      5 <= a.options.o &&
      "ExpressionStatement" === b.type &&
      "Literal" === b.J.type &&
      "string" === typeof b.J.value &&
      ('"' === a.input[b.start] || "'" === a.input[b.start])
    );
  }
  function Ee(a, b, c) {
    for (var d = b.length, e = 0; e < d; e++) {
      var f = b[e];
      f && ye(a, f, c);
    }
    d && ((d = b[d - 1]), 6 === a.options.o && c && d && "RestElement" === d.type && "Identifier" !== d.B.type && Q(a, d.B.start));
    return b;
  }
  function Oe(a) {
    var b = M(a);
    a.next();
    6 === a.options.o && a.type !== G.name && Q(a);
    b.B = je(a);
    return O(a, b, "RestElement");
  }
  function Je(a, b, c) {
    var d = M(a),
      e = !0,
      f = {};
    d.wa = [];
    for (a.next(); !a.m(G.ca); ) {
      if (e) e = !1;
      else if ((S(a, G.N), 5 <= a.options.o && Yd(a, G.ca))) break;
      var h = void 0,
        g = void 0,
        k = void 0;
      var m = a;
      var n = b,
        q = c,
        t = M(m);
      if (9 <= m.options.o && m.m(G.wb))
        n
          ? ((t.B = T(m, !1)),
            m.type === G.N && m.j(m.start, "Comma is not permitted after the rest element"),
            (m = O(m, t, "RestElement")))
          : ((t.B = V(m, !1, q)), m.type === G.N && q && 0 > q.oa && (q.oa = m.start), (m = O(m, t, "SpreadElement")));
      else {
        if (6 <= m.options.o) {
          t.method = !1;
          t.Bc = !1;
          if (n || q) (g = m.start), (h = m.O);
          n || (k = m.m(G.ja));
        }
        var p = m.C;
        Ce(m, t);
        if (
          n ||
          p ||
          !(8 <= m.options.o) ||
          k ||
          t.V ||
          "Identifier" !== t.key.type ||
          "async" !== t.key.name ||
          !(
            m.type === G.name ||
            m.type === G.Ua ||
            m.type === G.xa ||
            m.type === G.Ia ||
            m.type.da ||
            (9 <= m.options.o && m.type === G.ja)
          ) ||
          Ic.test(m.input.slice(m.ba, m.start))
        )
          var u = !1;
        else (u = !0), (k = 9 <= m.options.o && m.m(G.ja)), Ce(m, t);
        var r = m,
          v = t;
        (k || u) && r.type === G.Ba && Q(r);
        r.m(G.Ba)
          ? ((v.value = n ? Pe(r, r.start, r.O) : V(r, !1, q)), (v.kind = "init"))
          : 6 <= r.options.o && r.type === G.X
          ? (n && Q(r), (v.kind = "init"), (v.method = !0), (v.value = De(r, k, u)))
          : n ||
            p ||
            !(5 <= r.options.o) ||
            v.V ||
            "Identifier" !== v.key.type ||
            ("get" !== v.key.name && "set" !== v.key.name) ||
            r.type === G.N ||
            r.type === G.ca ||
            r.type === G.Ka
          ? 6 <= r.options.o && !v.V && "Identifier" === v.key.type
            ? ((k || u) && Q(r),
              qe(r, v.key),
              "await" !== v.key.name || r.s || (r.s = g),
              (v.kind = "init"),
              n
                ? (v.value = Pe(r, g, h, Ze(r, v.key)))
                : r.type === G.Ka && q
                ? (0 > q.Eb && (q.Eb = r.start), (v.value = Pe(r, g, h, Ze(r, v.key))))
                : (v.value = Ze(r, v.key)),
              (v.Bc = !0))
            : Q(r)
          : ((k || u) && Q(r),
            (v.kind = v.key.name),
            Ce(r, v),
            (v.value = De(r, !1)),
            v.value.T.length !== ("get" === v.kind ? 0 : 1)
              ? ((p = v.value.start),
                "get" === v.kind ? r.j(p, "getter should have no params") : r.j(p, "setter should have exactly one param"))
              : "set" === v.kind && "RestElement" === v.value.T[0].type && r.j(v.value.T[0].start, "Setter cannot use rest params"));
        m = O(m, t, "Property");
      }
      if (!b)
        a: if (((r = a), (v = f), !((9 <= r.options.o && "SpreadElement" === m.type) || (6 <= r.options.o && (m.V || m.method || m.Bc))))) {
          p = m.key;
          switch (p.type) {
            case "Identifier":
              t = p.name;
              break;
            case "Literal":
              t = String(p.value);
              break;
            default:
              break a;
          }
          n = m.kind;
          6 <= r.options.o
            ? "__proto__" === t &&
              "init" === n &&
              (v.Fe && (c ? 0 > c.bb && (c.bb = p.start) : r.j(p.start, "Redefinition of __proto__ property")), (v.Fe = !0))
            : ((t = "$" + t),
              (q = v[t])
                ? ("init" === n ? (r.P && q.R) || q.get || q.set : q.R || q[n]) && r.j(p.start, "Redefinition of property")
                : (q = v[t] = { R: !1, get: !1, set: !1 }),
              (q[n] = !0));
        }
      d.wa.push(m);
    }
    return O(a, d, b ? "ObjectPattern" : "ObjectExpression");
  }
  function Pe(a, b, c, d) {
    d = d || je(a);
    if (6 > a.options.o || !a.m(G.Ka)) return d;
    b = W(a, b, c);
    b.left = d;
    b.right = V(a);
    return O(a, b, "AssignmentPattern");
  }
  function Fe(a, b, c, d) {
    void 0 === c && (c = 0);
    switch (b.type) {
      case "Property":
        Fe(a, b.value, c, d);
        break;
      case "AssignmentPattern":
        ke(a, b.left, c, d);
        break;
      case "RestElement":
        ke(a, b.B, c, d);
        break;
      default:
        ke(a, b, c, d);
    }
  }
  function Ke(a, b, c, d, e) {
    var f = a.start,
      h = a.O;
    if (Vd(a, "await") && a.ob) {
      a.g || (a.g = a.start);
      c = M(a);
      a.next();
      c.B = Ke(a, null, !0, !1, e);
      var g = O(a, c, "AwaitExpression");
      c = !0;
    } else if (a.type.prefix) {
      g = M(a);
      var k = a.type === G.tc;
      g.H = a.value;
      g.prefix = !0;
      a.next();
      g.B = Ke(a, null, !0, k, e);
      $d(a, b, !0);
      k
        ? oe(a, g.B)
        : a.P && "delete" === g.H && "Identifier" === g.B.type
        ? a.j(g.start, "Deleting local variable in strict mode")
        : "delete" === g.H && kd(g.B)
        ? a.j(g.start, "Private fields can not be deleted")
        : (c = !0);
      g = O(a, g, k ? "UpdateExpression" : "UnaryExpression");
    } else if (c || a.type !== G.jb) {
      g = ze(a, b, e);
      if ($d(a, b)) return g;
      for (; a.type.yc && !Wd(a); )
        (b = W(a, f, h)), (b.H = a.value), (b.prefix = !1), (b.B = g), oe(a, g), a.next(), (g = O(a, b, "UpdateExpression"));
    } else (e || 0 === a.F.length) && a.options.ic && Q(a), (g = Be(a)), a.type !== G.za && Q(a);
    if (!d && a.m(G.vd))
      if (c) Q(a, a.A);
      else return $e(a, f, h, g, Ke(a, null, !1, !1, e), "**", !1);
    else return g;
  }
  function Le(a, b, c, d, e, f) {
    var h = a.type.Qa;
    if (null != h && (!f || a.type !== G.za) && h > e) {
      var g = a.type === G.vc || a.type === G.Pb,
        k = a.type === G.jc;
      k && (h = G.Pb.Qa);
      var m = a.value;
      a.next();
      var n = a.start,
        q = a.O;
      h = Le(a, Ke(a, null, !1, !1, f), n, q, h, f);
      b = $e(a, c, d, b, h, m, g || k);
      ((g && a.type === G.jc) || (k && (a.type === G.vc || a.type === G.Pb))) &&
        a.j(a.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
      return Le(a, b, c, d, e, f);
    }
    return b;
  }
  function $e(a, b, c, d, e, f, h) {
    "PrivateIdentifier" === e.type && a.j(e.start, "Private identifier can only be left side of binary expression");
    b = W(a, b, c);
    b.left = d;
    b.H = f;
    b.right = e;
    return O(a, b, h ? "LogicalExpression" : "BinaryExpression");
  }
  function Qe(a, b, c, d, e, f) {
    for (
      var h =
          8 <= a.options.o &&
          "Identifier" === b.type &&
          "async" === b.name &&
          a.ba === b.end &&
          !Wd(a) &&
          5 === b.end - b.start &&
          a.Xa === b.start,
        g = !1;
      ;

    ) {
      a: {
        var k = a;
        var m = b,
          n = c,
          q = d,
          t = e,
          p = h,
          u = g,
          r = f,
          v = 11 <= k.options.o,
          x = v && k.m(G.sd);
        t && x && k.j(k.A, "Optional chaining cannot appear in the callee of new expressions");
        var z = k.m(G.Ia);
        if (z || (x && k.type !== G.X && k.type !== G.Pa) || k.m(G.Sa))
          (n = W(k, n, q)),
            (n.object = m),
            z
              ? ((n.fa = U(k)), S(k, G.vb))
              : k.type === G.jb && "Super" !== m.type
              ? (n.fa = Be(k))
              : (n.fa = T(k, "never" !== k.options.ub)),
            (n.V = !!z),
            v && (n.optional = x),
            (m = O(k, n, "MemberExpression"));
        else if (!t && k.m(G.X)) {
          t = new ld();
          u = k.i;
          var L = k.g,
            H = k.s;
          k.i = 0;
          k.g = 0;
          k.s = 0;
          z = Ue(k, G.Y, 8 <= k.options.o, !1, t);
          if ((p = p && !x)) (p = k), (p = !Wd(p) && p.m(G.Za));
          if (p) {
            Zd(k, t, !1);
            ae(k);
            0 < k.s && k.j(k.s, "Cannot use 'await' as identifier inside an async function");
            k.i = u;
            k.g = L;
            k.s = H;
            k = Te(k, W(k, n, q), z, !0, r);
            break a;
          }
          $d(k, t, !0);
          k.i = u || k.i;
          k.g = L || k.g;
          k.s = H || k.s;
          n = W(k, n, q);
          n.callee = m;
          n.arguments = z;
          v && (n.optional = x);
          m = O(k, n, "CallExpression");
        } else
          k.type === G.Pa &&
            ((x || u) && k.j(k.start, "Optional chaining cannot appear in the tag of tagged template expressions"),
            (v = W(k, n, q)),
            (v.tag = m),
            (v.zc = Ve(k, { Mb: !0 })),
            (m = O(k, v, "TaggedTemplateExpression")));
        k = m;
      }
      k.optional && (g = !0);
      if (k === b || "ArrowFunctionExpression" === k.type) return g && ((b = W(a, c, d)), (b.J = k), (k = O(a, b, "ChainExpression"))), k;
      b = k;
    }
  }
  function Te(a, b, c, d, e) {
    var f = a.i,
      h = a.g,
      g = a.s;
    Nd(a, (d ? 4 : 0) | 18);
    Ge(a, b);
    8 <= a.options.o && (b.async = !!d);
    a.i = 0;
    a.g = 0;
    a.s = 0;
    b.T = Ee(a, c, !0);
    Ie(a, b, !0, !1, e);
    a.i = f;
    a.g = h;
    a.s = g;
    return O(a, b, "ArrowFunctionExpression");
  }
  function Ue(a, b, c, d, e) {
    for (var f = [], h = !0; !a.m(b); ) {
      if (h) h = !1;
      else if ((S(a, G.N), c && Yd(a, b))) break;
      if (d && a.type === G.N) var g = null;
      else if (a.type === G.wb) {
        g = a;
        var k = e,
          m = M(g);
        g.next();
        m.B = V(g, !1, k);
        g = O(g, m, "SpreadElement");
        e && a.type === G.N && 0 > e.oa && (e.oa = a.start);
      } else g = V(a, !1, e);
      f.push(g);
    }
    return f;
  }
  function Ve(a, b) {
    void 0 === b && (b = {});
    b = b.Mb;
    void 0 === b && (b = !1);
    var c = M(a);
    a.next();
    c.La = [];
    var d = af(a, { Mb: b });
    for (c.Ac = [d]; !d.Le; )
      a.type === G.Ta && a.j(a.h, "Unterminated template literal"),
        S(a, G.mc),
        c.La.push(U(a)),
        S(a, G.ca),
        c.Ac.push((d = af(a, { Mb: b })));
    a.next();
    return O(a, c, "TemplateLiteral");
  }
  function Se(a) {
    for (var b, c, d = a.h; ; ) {
      a.h >= a.input.length && a.j(d, "Unterminated regular expression");
      var e = a.input.charAt(a.h);
      Ic.test(e) && a.j(d, "Unterminated regular expression");
      if (b) b = !1;
      else {
        if ("[" === e) c = !0;
        else if ("]" === e && c) c = !1;
        else if ("/" === e && !c) break;
        b = "\\" === e;
      }
      ++a.h;
    }
    b = a.input.slice(d, a.h);
    ++a.h;
    e = a.h;
    c = Td(a);
    a.C && Q(a, e);
    e = a.Hc || (a.Hc = new Fd(a));
    e.reset(d, b, c);
    d = e.Ne;
    for (var f = e.flags, h = !1, g = !1, k = 0; k < f.length; k++) {
      var m = f.charAt(k);
      -1 === d.indexOf(m) && a.j(e.start, "Invalid regular expression flag");
      -1 < f.indexOf(m, k + 1) && a.j(e.start, "Duplicate regular expression flag");
      "u" === m && (h = !0);
      "v" === m && (g = !0);
    }
    15 <= a.options.o && h && g && a.j(e.start, "Invalid regular expression flag");
    bf(a, e);
    !e.nb && 9 <= a.options.o && 0 < e.yb.length && ((e.nb = !0), bf(a, e));
    e = null;
    try {
      e = new RegExp(b, c);
    } catch (n) {}
    K(a, G.td, { pattern: b, flags: c, value: e });
  }
  function ve(a, b, c, d, e) {
    b.type = c;
    b.end = d;
    a.options.ma && (b.Ob.end = e);
    a.options.Rb && (b.S[1] = d);
    return b;
  }
  function af(a, b) {
    b = b.Mb;
    var c = M(a);
    a.type === G.uc
      ? (b || a.j(a.start, "Bad escape sequence in untagged template literal"), (c.value = { raw: a.value, qe: null }))
      : (c.value = { raw: a.input.slice(a.start, a.end).replace(/\r\n?/g, "\n"), qe: a.value });
    a.next();
    c.Le = a.type === G.Pa;
    return O(a, c, "TemplateElement");
  }
  function Ze(a, b) {
    a = new md(a, b.start, a.O);
    for (var c in b) a[c] = b[c];
    return a;
  }
  function Me(a, b, c) {
    var d = {},
      e = 0;
    for (b = b.T; e < b.length; e += 1) Fe(a, b[e], 1, c ? null : d);
  }
  function Ne(a) {
    for (var b = 0; b < a.length; b += 1) if ("Identifier" !== a[b].type) return !1;
    return !0;
  }
  function bf(a, b) {
    b.h = 0;
    b.v = 0;
    b.L = "";
    b.Nb = !1;
    b.Bb = 0;
    b.Qb = 0;
    b.yb.length = 0;
    b.cc.length = 0;
    cf(a, b);
    b.h !== b.source.length && (b.m(41) && b.j("Unmatched ')'"), (b.m(93) || b.m(125)) && b.j("Lone quantifier brackets"));
    b.Qb > b.Bb && b.j("Invalid escape");
    a = 0;
    for (var c = b.cc; a < c.length; a += 1) -1 === b.yb.indexOf(c[a]) && b.j("Invalid named capture referenced");
  }
  function cf(a, b) {
    for (; b.h < b.source.length && df(a, b); );
    for (; b.m(124); ) for (var c = a, d = b; d.h < d.source.length && df(c, d); );
    ef(b, !0) && b.j("Nothing to repeat");
    b.m(123) && b.j("Lone quantifier brackets");
  }
  function ef(a, b) {
    void 0 === b && (b = !1);
    return a.m(42) || a.m(43) || a.m(63) || ff(a, b) ? (a.m(63), !0) : !1;
  }
  function df(a, b) {
    if (gf(a, b)) return b.Nb && ef(b) && b.U && b.j("Invalid quantifier"), !0;
    if (b.U) {
      for (var c = b.h, d = 0; -1 !== (d = b.current()) && !sd(d); ) b.advance();
      a = b.h !== c || b.m(46) || hf(a, b) || jf(a, b) || kf(a, b) || lf(a, b);
    } else
      (a = b.m(46) || hf(a, b) || jf(a, b) || kf(a, b) || lf(a, b)) || (ff(b, !0) && b.j("Nothing to repeat"), (a = !1)),
        a ||
          ((a = b.current()),
          -1 === a || 36 === a || (40 <= a && 43 >= a) || 46 === a || 63 === a || 91 === a || 94 === a || 124 === a
            ? (a = !1)
            : (b.advance(), (a = !0)));
    return a ? (ef(b), !0) : !1;
  }
  function gf(a, b) {
    var c = b.h;
    b.Nb = !1;
    if (b.m(94) || b.m(36)) return !0;
    if (b.m(92)) {
      if (b.m(66) || b.m(98)) return !0;
      b.h = c;
    }
    if (b.m(40) && b.m(63)) {
      var d = !1;
      9 <= a.options.o && (d = b.m(60));
      if (b.m(61) || b.m(33)) return cf(a, b), b.m(41) || b.j("Unterminated group"), (b.Nb = !d), !0;
    }
    b.h = c;
    return !1;
  }
  function ff(a, b) {
    var c = a.h;
    if (a.m(123)) {
      var d = -1;
      if (mf(a)) {
        var e = a.v;
        a.m(44) && mf(a) && (d = a.v);
        if (a.m(125)) return -1 !== d && d < e && !b && a.j("numbers out of order in {} quantifier"), !0;
      }
      a.U && !b && a.j("Incomplete quantifier");
      a.h = c;
    }
    return !1;
  }
  function mf(a) {
    var b = a.h,
      c;
    for (a.v = 0; pd((c = a.current())); ) (a.v = 10 * a.v + (c - 48)), a.advance();
    return a.h !== b;
  }
  function hf(a, b) {
    var c = b.h;
    if (b.m(92)) {
      b: {
        var d = b.h;
        b.v = 0;
        var e = b.current();
        if (49 <= e && 57 >= e) {
          do (b.v = 10 * b.v + (e - 48)), b.advance();
          while (48 <= (e = b.current()) && 57 >= e);
          e = !0;
        } else e = !1;
        if (e) {
          e = b.v;
          if (b.U) {
            e > b.Qb && (b.Qb = e);
            d = !0;
            break b;
          }
          if (e <= b.Bb) {
            d = !0;
            break b;
          }
          b.h = d;
        }
        d = !1;
      }
      if (!(d = d || nf(a, b) || of(b)) && (d = b.nb))
        b: {
          if (b.m(107)) {
            if (pf(a, b)) {
              b.cc.push(b.L);
              d = !0;
              break b;
            }
            b.j("Invalid named reference");
          }
          d = !1;
        }
      d ? (a = !0) : (b.U && (99 === b.current() && b.j("Invalid unicode escape"), b.j("Invalid escape")), (a = !1));
      if (a) return !0;
      b.h = c;
    }
    return !1;
  }
  function jf(a, b) {
    if (b.m(91)) {
      var c = b.m(94);
      a = qf(a, b);
      b.m(93) || b.j("Unterminated character class");
      c && 2 === a && b.j("Negated character class may contain strings");
      return !0;
    }
    return !1;
  }
  function kf(a, b) {
    var c = b.h;
    if (b.m(40)) {
      if (b.m(63) && b.m(58)) {
        cf(a, b);
        if (b.m(41)) return !0;
        b.j("Unterminated group");
      }
      b.h = c;
    }
    return !1;
  }
  function lf(a, b) {
    if (b.m(40)) {
      9 <= a.options.o
        ? b.m(63) && (pf(a, b) ? (-1 !== b.yb.indexOf(b.L) && b.j("Duplicate capture group name"), b.yb.push(b.L)) : b.j("Invalid group"))
        : 63 === b.current() && b.j("Invalid group");
      cf(a, b);
      if (b.m(41)) return (b.Bb += 1), !0;
      b.j("Unterminated group");
    }
    return !1;
  }
  function pf(a, b) {
    b.L = "";
    if (b.m(60)) {
      b.L = "";
      var c = b.h;
      var d = 11 <= a.options.o,
        e = b.current(d);
      b.advance(d);
      92 === e && rf(b, d) && (e = b.v);
      d = e;
      Ec(d, !0) || 36 === d || 95 === d ? ((b.v = e), (c = !0)) : ((b.h = c), (c = !1));
      if (c) {
        for (b.L += Uc(b.v); sf(a, b); ) b.L += Uc(b.v);
        a = !0;
      } else a = !1;
      if (a && b.m(62)) return !0;
      b.j("Invalid capture group name");
    }
    return !1;
  }
  function sf(a, b) {
    var c = b.h,
      d = 11 <= a.options.o;
    a = b.current(d);
    b.advance(d);
    92 === a && rf(b, d) && (a = b.v);
    d = a;
    if (Fc(d, !0) || 36 === d || 95 === d || 8204 === d || 8205 === d) return (b.v = a), !0;
    b.h = c;
    return !1;
  }
  function rf(a, b) {
    void 0 === b && (b = !1);
    var c = a.h;
    b = b || a.U;
    if (a.m(117)) {
      if (tf(a, 4)) {
        c = a.v;
        if (b && 55296 <= c && 56319 >= c) {
          b = a.h;
          if (a.m(92) && a.m(117) && tf(a, 4)) {
            var d = a.v;
            if (56320 <= d && 57343 >= d) return (a.v = 1024 * (c - 55296) + (d - 56320) + 65536), !0;
          }
          a.h = b;
          a.v = c;
        }
        return !0;
      }
      if ((d = b && a.m(123))) {
        d = a.h;
        var e;
        for (a.v = 0; qd((e = a.current())); ) (a.v = 16 * a.v + rd(e)), a.advance();
        d = a.h !== d;
      }
      if ((d = d && a.m(125))) (d = a.v), (d = 0 <= d && 1114111 >= d);
      if (d) return !0;
      b && a.j("Invalid unicode escape");
      a.h = c;
    }
    return !1;
  }
  function nf(a, b) {
    var c = b.current();
    if (100 === c || 68 === c || 115 === c || 83 === c || 119 === c || 87 === c) return (b.v = -1), b.advance(), 1;
    var d = !1;
    if (b.U && 9 <= a.options.o && ((d = 80 === c) || 112 === c)) {
      b.v = -1;
      b.advance();
      if ((a = b.m(123))) {
        a: {
          var e = b.h;
          for (b.L = ""; od((a = b.current())); ) (b.L += Uc(a)), b.advance();
          if ("" !== b.L && b.m(61) && ((a = b.L), uf(b))) {
            e = b.L;
            Pc.call(b.Ub.ua, a) || b.j("Invalid property name");
            b.Ub.ua[a].test(e) || b.j("Invalid property value");
            e = 1;
            break a;
          }
          b.h = e;
          uf(b)
            ? ((e = b.L), b.Ub.he.test(e) ? (e = 1) : b.Tb && b.Ub.ie.test(e) ? (e = 2) : (b.j("Invalid property name"), (e = -1)))
            : (e = 0);
        }
        a = e;
      }
      if (a && b.m(125)) return d && 2 === e && b.j("Invalid property name"), e;
      b.j("Invalid property name");
    }
    return 0;
  }
  function of(a) {
    var b;
    if (!(b = vf(a)))
      a: {
        b = a.h;
        if (a.m(99)) {
          var c = a.current();
          (65 <= c && 90 >= c) || (97 <= c && 122 >= c) ? ((a.v = c % 32), a.advance(), (c = !0)) : (c = !1);
          if (c) {
            b = !0;
            break a;
          }
          a.h = b;
        }
        b = !1;
      }
    b || (48 !== a.current() || pd(Cd(a, Dd(a, a.h, !1), !1)) ? (b = !1) : ((a.v = 0), a.advance(), (b = !0)));
    if (!b)
      a: {
        b = a.h;
        if (a.m(120)) {
          if (tf(a, 2)) {
            b = !0;
            break a;
          }
          a.U && a.j("Invalid escape");
          a.h = b;
        }
        b = !1;
      }
    !(b = b || rf(a, !1)) &&
      (b = !a.U) &&
      (wf(a)
        ? ((b = a.v), wf(a) ? ((c = a.v), 3 >= b && wf(a) ? (a.v = 64 * b + 8 * c + a.v) : (a.v = 8 * b + c)) : (a.v = b), (b = !0))
        : (b = !1));
    return b || xf(a);
  }
  function vf(a) {
    var b = a.current();
    return 116 === b
      ? ((a.v = 9), a.advance(), !0)
      : 110 === b
      ? ((a.v = 10), a.advance(), !0)
      : 118 === b
      ? ((a.v = 11), a.advance(), !0)
      : 102 === b
      ? ((a.v = 12), a.advance(), !0)
      : 114 === b
      ? ((a.v = 13), a.advance(), !0)
      : !1;
  }
  function xf(a) {
    if (a.U) {
      var b = a.current();
      sd(b) ? ((a.v = b), a.advance(), (b = !0)) : (b = !1);
      return b ? !0 : a.m(47) ? ((a.v = 47), !0) : !1;
    }
    b = a.current();
    return 99 === b || (a.nb && 107 === b) ? !1 : ((a.v = b), a.advance(), !0);
  }
  function tf(a, b) {
    for (var c = a.h, d = (a.v = 0); d < b; ++d) {
      var e = a.current();
      if (!qd(e)) return (a.h = c), !1;
      a.v = 16 * a.v + rd(e);
      a.advance();
    }
    return !0;
  }
  function uf(a) {
    var b;
    for (a.L = ""; nd((b = a.current())); ) (a.L += Uc(b)), a.advance();
    return "" !== a.L;
  }
  function qf(a, b) {
    if (93 === b.current()) return 1;
    if (b.Tb) {
      a: {
        var c = 1,
          d;
        if (!yf(a, b))
          if ((d = zf(a, b))) {
            2 === d && (c = 2);
            for (var e = b.h; Ed(b, [38, 38]); )
              38 !== b.current() && (d = zf(a, b)) ? 2 !== d && (c = 1) : b.j("Invalid character in character class");
            if (e !== b.h) {
              a = c;
              break a;
            }
            for (; Ed(b, [45, 45]); ) zf(a, b) || b.j("Invalid character in character class");
            if (e !== b.h) {
              a = c;
              break a;
            }
          } else b.j("Invalid character in character class");
        for (;;)
          if (!yf(a, b)) {
            d = zf(a, b);
            if (!d) {
              a = c;
              break a;
            }
            2 === d && (c = 2);
          }
      }
      return a;
    }
    for (; Af(a, b); )
      (c = b.v),
        b.m(45) &&
          Af(a, b) &&
          ((d = b.v),
          !b.U || (-1 !== c && -1 !== d) || b.j("Invalid character class"),
          -1 !== c && -1 !== d && c > d && b.j("Range out of order in character class"));
    return 1;
  }
  function Af(a, b) {
    var c = b.h;
    if (b.m(92)) {
      if (Bf(a, b)) return !0;
      b.U && ((a = b.current()), (99 === a || (48 <= a && 55 >= a)) && b.j("Invalid class escape"), b.j("Invalid escape"));
      b.h = c;
    }
    c = b.current();
    return 93 !== c ? ((b.v = c), b.advance(), !0) : !1;
  }
  function Bf(a, b) {
    var c = b.h;
    if (b.m(98)) return (b.v = 8), !0;
    if (b.U && b.m(45)) return (b.v = 45), !0;
    if (!b.U && b.m(99)) {
      var d = b.current();
      pd(d) || 95 === d ? ((b.v = d % 32), b.advance(), (d = !0)) : (d = !1);
      if (d) return !0;
      b.h = c;
    }
    return nf(a, b) || of(b);
  }
  function yf(a, b) {
    var c = b.h;
    if (Cf(b)) {
      a = b.v;
      if (b.m(45) && Cf(b)) return (c = b.v), -1 !== a && -1 !== c && a > c && b.j("Range out of order in character class"), !0;
      b.h = c;
    }
    return !1;
  }
  function zf(a, b) {
    if (Cf(b)) b = 1;
    else {
      a: {
        var c = b.h;
        if (Ed(b, [92, 113])) {
          if (b.m(123)) {
            var d;
            for (d = Df(a, b); b.m(124); ) 2 === Df(a, b) && (d = 2);
            if (b.m(125)) {
              c = d;
              break a;
            }
          } else b.j("Invalid escape");
          b.h = c;
        }
        c = null;
      }
      if (!c)
        a: {
          c = b.h;
          if (b.m(91)) {
            d = b.m(94);
            var e = qf(a, b);
            if (b.m(93)) {
              d && 2 === e && b.j("Negated character class may contain strings");
              c = e;
              break a;
            }
            b.h = c;
          }
          if (b.m(92)) {
            if ((a = nf(a, b))) {
              c = a;
              break a;
            }
            b.h = c;
          }
          c = null;
        }
      b = c;
    }
    return b;
  }
  function Cf(a) {
    var b = a.h;
    if (a.m(92)) {
      var c;
      (c = of(a)) ||
        ((c = a.current()),
        33 === c || 35 === c || 37 === c || 38 === c || 44 === c || 45 === c || (58 <= c && 62 >= c) || 64 === c || 96 === c || 126 === c
          ? ((a.v = c), a.advance(), (c = !0))
          : (c = !1));
      if (c) return !0;
      if (a.m(98)) return (a.v = 8), !0;
      a.h = b;
      return !1;
    }
    b = a.current();
    if (
      0 > b ||
      (b === Cd(a, Dd(a, a.h, !1), !1) &&
        (33 === b ||
          (35 <= b && 38 >= b) ||
          (42 <= b && 44 >= b) ||
          46 === b ||
          (58 <= b && 64 >= b) ||
          94 === b ||
          96 === b ||
          126 === b)) ||
      40 === b ||
      41 === b ||
      45 === b ||
      47 === b ||
      (91 <= b && 93 >= b) ||
      (123 <= b && 125 >= b)
    )
      return !1;
    a.advance();
    a.v = b;
    return !0;
  }
  function Df(a, b) {
    for (a = 0; Cf(b); ) a++;
    return 1 === a ? 1 : 2;
  }
  function wf(a) {
    var b = a.current();
    if (48 <= b && 55 >= b) return (a.v = b - 48), a.advance(), !0;
    a.v = 0;
    return !1;
  }
  function Rd(a) {
    a: for (; a.h < a.input.length; ) {
      var b = a.input.charCodeAt(a.h);
      switch (b) {
        case 32:
        case 160:
          ++a.h;
          break;
        case 13:
          10 === a.input.charCodeAt(a.h + 1) && ++a.h;
        case 10:
        case 8232:
        case 8233:
          ++a.h;
          a.options.ma && (++a.ab, (a.gb = a.h));
          break;
        case 47:
          switch (a.input.charCodeAt(a.h + 1)) {
            case 42:
              b = a;
              var c = b.options.Ga && Kd(b),
                d = b.h,
                e = b.input.indexOf("*/", (b.h += 2));
              -1 === e && b.j(b.h - 2, "Unterminated comment");
              b.h = e + 2;
              if (b.options.ma) {
                var f;
                for (f = d; -1 < (f = Kc(b.input, f, b.h)); ) ++b.ab, (f = b.gb = f);
              }
              b.options.Ga && b.options.Ga(!0, b.input.slice(d + 2, e), d, b.h, c, Kd(b));
              break;
            case 47:
              Md(a, 2);
              break;
            default:
              break a;
          }
          break;
        default:
          if ((8 < b && 14 > b) || (5760 <= b && Lc.test(String.fromCharCode(b)))) ++a.h;
          else break a;
      }
    }
  }
  function K(a, b, c) {
    a.end = a.h;
    a.options.ma && (a.nc = Kd(a));
    var d = a.type;
    a.type = b;
    a.value = c;
    a.ga(d);
  }
  function Sd(a) {
    var b = a.input.charCodeAt(a.h);
    if (55295 >= b || 56320 <= b) return b;
    a = a.input.charCodeAt(a.h + 1);
    return 56319 >= a || 57344 <= a ? b : (b << 10) + a - 56613888;
  }
  function Ud(a, b) {
    switch (b) {
      case 46:
        b = a.input.charCodeAt(a.h + 1);
        if (48 <= b && 57 >= b) Ef(a, !0);
        else {
          var c = a.input.charCodeAt(a.h + 2);
          6 <= a.options.o && 46 === b && 46 === c ? ((a.h += 3), K(a, G.wb)) : (++a.h, K(a, G.Sa));
        }
        return;
      case 40:
        ++a.h;
        K(a, G.X);
        return;
      case 41:
        ++a.h;
        K(a, G.Y);
        return;
      case 59:
        ++a.h;
        K(a, G.ia);
        return;
      case 44:
        ++a.h;
        K(a, G.N);
        return;
      case 91:
        ++a.h;
        K(a, G.Ia);
        return;
      case 93:
        ++a.h;
        K(a, G.vb);
        return;
      case 123:
        ++a.h;
        K(a, G.ha);
        return;
      case 125:
        ++a.h;
        K(a, G.ca);
        return;
      case 58:
        ++a.h;
        K(a, G.Ba);
        return;
      case 96:
        if (6 > a.options.o) break;
        ++a.h;
        K(a, G.Pa);
        return;
      case 48:
        b = a.input.charCodeAt(a.h + 1);
        if (120 === b || 88 === b) {
          Ff(a, 16);
          return;
        }
        if (6 <= a.options.o) {
          if (111 === b || 79 === b) {
            Ff(a, 8);
            return;
          }
          if (98 === b || 66 === b) {
            Ff(a, 2);
            return;
          }
        }
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        Ef(a, !1);
        return;
      case 34:
      case 39:
        c = "";
        for (var d = ++a.h; ; ) {
          a.h >= a.input.length && a.j(a.start, "Unterminated string constant");
          var e = a.input.charCodeAt(a.h);
          if (e === b) break;
          92 === e
            ? ((c += a.input.slice(d, a.h)), (c += fd(a, !1)), (d = a.h))
            : 8232 === e || 8233 === e
            ? (10 > a.options.o && a.j(a.start, "Unterminated string constant"), ++a.h, a.options.ma && (a.ab++, (a.gb = a.h)))
            : (Jc(e) && a.j(a.start, "Unterminated string constant"), ++a.h);
        }
        c += a.input.slice(d, a.h++);
        K(a, G.xa, c);
        return;
      case 47:
        b = a.input.charCodeAt(a.h + 1);
        a.W ? (++a.h, Se(a)) : 61 === b ? X(a, G.assign, 2) : X(a, G.ud, 1);
        return;
      case 37:
      case 42:
        c = a.input.charCodeAt(a.h + 1);
        d = 1;
        e = 42 === b ? G.ja : G.ze;
        7 <= a.options.o && 42 === b && 42 === c && (++d, (e = G.vd), (c = a.input.charCodeAt(a.h + 2)));
        61 === c ? X(a, G.assign, d + 1) : X(a, e, d);
        return;
      case 124:
      case 38:
        c = a.input.charCodeAt(a.h + 1);
        c === b
          ? 12 <= a.options.o && 61 === a.input.charCodeAt(a.h + 2)
            ? X(a, G.assign, 3)
            : X(a, 124 === b ? G.vc : G.Pb, 2)
          : 61 === c
          ? X(a, G.assign, 2)
          : X(a, 124 === b ? G.le : G.ke, 1);
        return;
      case 94:
        61 === a.input.charCodeAt(a.h + 1) ? X(a, G.assign, 2) : X(a, G.me, 1);
        return;
      case 43:
      case 45:
        c = a.input.charCodeAt(a.h + 1);
        c === b
          ? 45 !== c || a.D || 62 !== a.input.charCodeAt(a.h + 2) || (0 !== a.ba && !Ic.test(a.input.slice(a.ba, a.h)))
            ? X(a, G.tc, 2)
            : (Md(a, 3), Rd(a), Id(a))
          : 61 === c
          ? X(a, G.assign, 2)
          : X(a, G.Be, 1);
        return;
      case 60:
      case 62:
        c = a.input.charCodeAt(a.h + 1);
        d = 1;
        c === b
          ? ((d = 62 === b && 62 === a.input.charCodeAt(a.h + 2) ? 3 : 2),
            61 === a.input.charCodeAt(a.h + d) ? X(a, G.assign, d + 1) : X(a, G.je, d))
          : 33 !== c || 60 !== b || a.D || 45 !== a.input.charCodeAt(a.h + 2) || 45 !== a.input.charCodeAt(a.h + 3)
          ? (61 === c && (d = 2), X(a, G.He, d))
          : (Md(a, 4), Rd(a), Id(a));
        return;
      case 61:
      case 33:
        c = a.input.charCodeAt(a.h + 1);
        61 === c
          ? X(a, G.se, 61 === a.input.charCodeAt(a.h + 2) ? 3 : 2)
          : 61 === b && 62 === c && 6 <= a.options.o
          ? ((a.h += 2), K(a, G.Za))
          : X(a, 61 === b ? G.Ka : G.prefix, 1);
        return;
      case 63:
        a: {
          b = a.options.o;
          if (11 <= b) {
            c = a.input.charCodeAt(a.h + 1);
            if (46 === c && ((d = a.input.charCodeAt(a.h + 2)), 48 > d || 57 < d)) {
              X(a, G.sd, 2);
              break a;
            }
            if (63 === c) {
              12 <= b && 61 === a.input.charCodeAt(a.h + 2) ? X(a, G.assign, 3) : X(a, G.jc, 2);
              break a;
            }
          }
          X(a, G.rd, 1);
        }
        return;
      case 126:
        X(a, G.prefix, 1);
        return;
      case 35:
        a: {
          b = 35;
          if (13 <= a.options.o && (++a.h, (b = Sd(a)), Ec(b, !0) || 92 === b)) {
            K(a, G.jb, Td(a));
            break a;
          }
          a.j(a.h, "Unexpected character '" + Uc(b) + "'");
        }
        return;
    }
    a.j(a.h, "Unexpected character '" + Uc(b) + "'");
  }
  function Ef(a, b) {
    var c = a.h;
    b || null !== Gf(a, 10, void 0, !0) || a.j(c, "Invalid number");
    var d = 2 <= a.h - c && 48 === a.input.charCodeAt(c);
    d && a.P && a.j(c, "Invalid number");
    var e = a.input.charCodeAt(a.h);
    !d && !b && 11 <= a.options.o && 110 === e
      ? ((d = Bd(a.input.slice(c, a.h))), ++a.h, Ec(Sd(a)) && a.j(a.h, "Identifier directly after number"), K(a, G.Ua, d))
      : (d && /[89]/.test(a.input.slice(c, a.h)) && (d = !1),
        46 !== e || d || (++a.h, Gf(a, 10), (e = a.input.charCodeAt(a.h))),
        (69 !== e && 101 !== e) ||
          d ||
          ((e = a.input.charCodeAt(++a.h)), (43 !== e && 45 !== e) || ++a.h, null === Gf(a, 10) && a.j(c, "Invalid number")),
        Ec(Sd(a)) && a.j(a.h, "Identifier directly after number"),
        (b = a.input.slice(c, a.h)),
        K(a, G.Ua, d ? parseInt(b, 8) : parseFloat(b.replace(/_/g, ""))));
  }
  function X(a, b, c) {
    var d = a.input.slice(a.h, a.h + c);
    a.h += c;
    K(a, b, d);
  }
  function Td(a) {
    a.C = !1;
    for (var b = "", c = !0, d = a.h, e = 6 <= a.options.o; a.h < a.input.length; ) {
      var f = Sd(a);
      if (Fc(f, e)) a.h += 65535 >= f ? 1 : 2;
      else if (92 === f)
        (a.C = !0),
          (b += a.input.slice(d, a.h)),
          (d = a.h),
          117 !== a.input.charCodeAt(++a.h) && Hf(a, a.h, "Expecting Unicode escape sequence \\uXXXX"),
          ++a.h,
          (f = If(a)),
          (c ? Ec : Fc)(f, e) || Hf(a, d, "Invalid Unicode escape"),
          (b += Uc(f)),
          (d = a.h);
      else break;
      c = !1;
    }
    return b + a.input.slice(d, a.h);
  }
  function Ff(a, b) {
    var c = a.h;
    a.h += 2;
    var d = Gf(a, b);
    null == d && a.j(a.start + 2, "Expected number in radix " + b);
    11 <= a.options.o && 110 === a.input.charCodeAt(a.h)
      ? ((d = Bd(a.input.slice(c, a.h))), ++a.h)
      : Ec(Sd(a)) && a.j(a.h, "Identifier directly after number");
    K(a, G.Ua, d);
  }
  function Gf(a, b, c, d) {
    var e = 12 <= a.options.o && void 0 === c;
    d = d && 48 === a.input.charCodeAt(a.h);
    for (var f = a.h, h = 0, g = 0, k = 0, m = null == c ? Infinity : c; k < m; ++k, ++a.h) {
      var n = a.input.charCodeAt(a.h);
      if (e && 95 === n)
        d && a.j(a.h, "Numeric separator is not allowed in legacy octal numeric literals"),
          95 === g && a.j(a.h, "Numeric separator must be exactly one underscore"),
          0 === k && a.j(a.h, "Numeric separator is not allowed at the first of digits"),
          (g = n);
      else {
        var q = 97 <= n ? n - 97 + 10 : 65 <= n ? n - 65 + 10 : 48 <= n && 57 >= n ? n - 48 : Infinity;
        if (q >= b) break;
        g = n;
        h = h * b + q;
      }
    }
    e && 95 === g && a.j(a.h - 1, "Numeric separator is not allowed at the last of digits");
    return a.h === f || (null != c && a.h - f !== c) ? null : h;
  }
  function Jf(a, b) {
    var c = a.h;
    b = Gf(a, 16, b);
    null === b && Hf(a, c, "Bad character escape sequence");
    return b;
  }
  function Hf(a, b, c) {
    if (a.sc && 9 <= a.options.o) throw gd;
    a.j(b, c);
  }
  function If(a) {
    if (123 === a.input.charCodeAt(a.h)) {
      6 > a.options.o && Q(a);
      var b = ++a.h;
      var c = Jf(a, a.input.indexOf("}", a.h) - a.h);
      ++a.h;
      1114111 < c && Hf(a, b, "Code point out of bounds");
    } else c = Jf(a, 4);
    return c;
  }
  function fd(a, b) {
    var c = a.input.charCodeAt(++a.h);
    ++a.h;
    switch (c) {
      case 110:
        return "\n";
      case 114:
        return "\r";
      case 120:
        return String.fromCharCode(Jf(a, 2));
      case 117:
        return Uc(If(a));
      case 116:
        return "\t";
      case 98:
        return "\b";
      case 118:
        return "\x0B";
      case 102:
        return "\f";
      case 13:
        10 === a.input.charCodeAt(a.h) && ++a.h;
      case 10:
        return a.options.ma && ((a.gb = a.h), ++a.ab), "";
      case 56:
      case 57:
        a.P && Hf(a, a.h - 1, "Invalid escape sequence"), b && Hf(a, a.h - 1, "Invalid escape sequence in template string");
      default:
        if (48 <= c && 55 >= c) {
          var d = a.input.substr(a.h - 1, 3).match(/^[0-7]+/)[0],
            e = parseInt(d, 8);
          255 < e && ((d = d.slice(0, -1)), (e = parseInt(d, 8)));
          a.h += d.length - 1;
          c = a.input.charCodeAt(a.h);
          ("0" === d && 56 !== c && 57 !== c) ||
            (!a.P && !b) ||
            Hf(a, a.h - 1 - d.length, b ? "Octal literal in template string" : "Octal literal in strict mode");
          return String.fromCharCode(e);
        }
        return Jc(c) ? "" : String.fromCharCode(c);
    }
  }
  var Lf = class {
      constructor(a) {
        var b = { o: "latest" };
        this.sc = !1;
        this.options = b = $c(b);
        this.Fb = b.Fb;
        this.qb = Tc(zc[6 <= this.options.o ? 6 : "module" === b.kb ? "5module" : 5]);
        var c = "";
        !0 !== b.ub && ((c = yc[6 <= this.options.o ? 6 : 5 === b.o ? 5 : 3]), "module" === b.kb && (c += " await"));
        this.Kd = Tc(c);
        c = (c ? c + " " : "") + yc.P;
        this.Md = Tc(c);
        this.Nd = Tc(c + " " + yc.Ke);
        this.input = String(a);
        this.C = !1;
        this.h = this.gb = 0;
        this.ab = 1;
        this.type = G.Ta;
        this.value = null;
        this.start = this.end = this.h;
        this.O = this.nc = Kd(this);
        this.pa = this.ya = null;
        this.A = this.ba = this.h;
        this.context = [I.$a];
        this.W = !0;
        this.P = (this.D = "module" === b.kb) || Ld(this, this.h);
        this.Xa = -1;
        this.Gb = !1;
        this.i = this.g = this.s = 0;
        this.l = [];
        this.M = {};
        0 === this.h && b.ac && "#!" === this.input.slice(0, 2) && Md(this, 2);
        this.u = [];
        Nd(this, 1);
        this.Hc = null;
        this.F = [];
      }
      get Jd() {
        return 0 < (Od(this).flags & 2);
      }
      get pb() {
        return 0 < (Od(this).flags & 8) && !Od(this).Fa;
      }
      get ra() {
        return 0 < (Od(this).flags & 4) && !Od(this).Fa;
      }
      get ob() {
        for (var a = this.u.length - 1; 0 <= a; a--) {
          var b = this.u[a];
          if (b.Fa || b.flags & 256) return !1;
          if (b.flags & 2) return 0 < (b.flags & 4);
        }
        return (this.D && 13 <= this.options.o) || this.options.ce;
      }
      get Gd() {
        var a = Pd(this),
          b = a.Fa;
        return 0 < (a.flags & 64) || b || this.options.ee;
      }
      get Dd() {
        return 0 < (Pd(this).flags & 128);
      }
      get Ic() {
        var a = Qd(this);
        return a.flags & 2 || (!this.D && a.flags & 1);
      }
      get Fd() {
        var a = Pd(this),
          b = a.Fa;
        return 0 < (a.flags & 258) || b;
      }
      get Id() {
        return 0 < (Od(this).flags & 256);
      }
      m(a) {
        return this.type === a ? (this.next(), !0) : !1;
      }
      ga(a) {
        var b,
          c = this.type;
        c.da && a === G.Sa ? (this.W = !1) : (b = c.ga) ? b.call(this, a) : (this.W = c.K);
      }
      rb(a) {
        return a;
      }
      j(a, b) {
        a: {
          var c = 1;
          for (var d = 0; ; ) {
            var e = Kc(this.input, d, a);
            if (0 > e) {
              c = new Wc(c, a - d);
              break a;
            }
            ++c;
            d = e;
          }
        }
        b += " (" + c.i + ":" + c.g + ")";
        b = new SyntaxError(b);
        b.h = a;
        b.Ob = c;
        b.xf = this.h;
        throw b;
      }
      next(a) {
        !a && this.type.da && this.C && this.j(this.start, "Escape sequence in keyword " + this.type.da);
        this.options.Cb && this.options.Cb(new Kf(this));
        this.ba = this.end;
        this.A = this.start;
        this.pa = this.nc;
        this.ya = this.O;
        Id(this);
      }
      [Symbol.iterator]() {
        var a = this;
        return {
          next: function () {
            a.next();
            var b = new Kf(a);
            return { done: b.type === G.Ta, value: b };
          }
        };
      }
    },
    Kf = class {
      constructor(a) {
        this.type = a.type;
        this.value = a.value;
        this.start = a.start;
        this.end = a.end;
        a.options.ma && (this.Ob = new Xc(a, a.O, a.nc));
        a.options.Rb && (this.S = [a.start, a.end]);
      }
    };
  function Mf(a, b) {
    var c;
    c || (c = Y);
    (function g(e, f, h) {
      h = h || e.type;
      var k = b[h];
      c[h](e, f, g);
      k && k(e, f);
    })(a, void 0, void 0);
  }
  function Nf(a, b, c) {
    c(a, b);
  }
  function Of() {}
  var Y = {
    StaticBlock: function (a, b, c) {
      var d = 0;
      for (a = a.body; d < a.length; d += 1) c(a[d], b, "Statement");
    }
  };
  Y.Program = Y.BlockStatement = Y.StaticBlock;
  Y.Statement = Nf;
  Y.EmptyStatement = Of;
  Y.ChainExpression = function (a, b, c) {
    return c(a.J, b, "Expression");
  };
  Y.ExpressionStatement = Y.ParenthesizedExpression = Y.ChainExpression;
  Y.IfStatement = function (a, b, c) {
    c(a.test, b, "Expression");
    c(a.la, b, "Statement");
    a.Aa && c(a.Aa, b, "Statement");
  };
  Y.LabeledStatement = function (a, b, c) {
    return c(a.body, b, "Statement");
  };
  Y.BreakStatement = Y.ContinueStatement = Of;
  Y.WithStatement = function (a, b, c) {
    c(a.object, b, "Expression");
    c(a.body, b, "Statement");
  };
  Y.SwitchStatement = function (a, b, c) {
    c(a.kc, b, "Expression");
    var d = 0;
    for (a = a.ec; d < a.length; d += 1) {
      var e = a[d];
      e.test && c(e.test, b, "Expression");
      var f = 0;
      for (e = e.la; f < e.length; f += 1) c(e[f], b, "Statement");
    }
  };
  Y.SwitchCase = function (a, b, c) {
    a.test && c(a.test, b, "Expression");
    var d = 0;
    for (a = a.la; d < a.length; d += 1) c(a[d], b, "Statement");
  };
  Y.AwaitExpression = function (a, b, c) {
    a.B && c(a.B, b, "Expression");
  };
  Y.ReturnStatement = Y.YieldExpression = Y.AwaitExpression;
  Y.SpreadElement = function (a, b, c) {
    return c(a.B, b, "Expression");
  };
  Y.ThrowStatement = Y.SpreadElement;
  Y.TryStatement = function (a, b, c) {
    c(a.block, b, "Statement");
    a.Ea && c(a.Ea, b);
    a.cb && c(a.cb, b, "Statement");
  };
  Y.CatchClause = function (a, b, c) {
    a.ib && c(a.ib, b, "Pattern");
    c(a.body, b, "Statement");
  };
  Y.DoWhileStatement = function (a, b, c) {
    c(a.test, b, "Expression");
    c(a.body, b, "Statement");
  };
  Y.WhileStatement = Y.DoWhileStatement;
  Y.ForStatement = function (a, b, c) {
    a.R && c(a.R, b, "ForInit");
    a.test && c(a.test, b, "Expression");
    a.update && c(a.update, b, "Expression");
    c(a.body, b, "Statement");
  };
  Y.ForOfStatement = function (a, b, c) {
    c(a.left, b, "ForInit");
    c(a.right, b, "Expression");
    c(a.body, b, "Statement");
  };
  Y.ForInStatement = Y.ForOfStatement;
  Y.ForInit = function (a, b, c) {
    "VariableDeclaration" === a.type ? c(a, b) : c(a, b, "Expression");
  };
  Y.DebuggerStatement = Of;
  Y.FunctionDeclaration = function (a, b, c) {
    return c(a, b, "Function");
  };
  Y.VariableDeclaration = function (a, b, c) {
    var d = 0;
    for (a = a.Ja; d < a.length; d += 1) c(a[d], b);
  };
  Y.VariableDeclarator = function (a, b, c) {
    c(a.id, b, "Pattern");
    a.R && c(a.R, b, "Expression");
  };
  Y.Function = function (a, b, c) {
    a.id && c(a.id, b, "Pattern");
    for (var d = 0, e = a.T; d < e.length; d += 1) c(e[d], b, "Pattern");
    c(a.body, b, a.J ? "Expression" : "Statement");
  };
  Y.Pattern = function (a, b, c) {
    "Identifier" === a.type ? c(a, b, "VariablePattern") : "MemberExpression" === a.type ? c(a, b, "MemberPattern") : c(a, b);
  };
  Y.VariablePattern = Of;
  Y.MemberPattern = Nf;
  Y.RestElement = function (a, b, c) {
    return c(a.B, b, "Pattern");
  };
  Y.ArrayPattern = function (a, b, c) {
    var d = 0;
    for (a = a.elements; d < a.length; d += 1) {
      var e = a[d];
      e && c(e, b, "Pattern");
    }
  };
  Y.ObjectPattern = function (a, b, c) {
    var d = 0;
    for (a = a.wa; d < a.length; d += 1) {
      var e = a[d];
      "Property" === e.type
        ? (e.V && c(e.key, b, "Expression"), c(e.value, b, "Pattern"))
        : "RestElement" === e.type && c(e.B, b, "Pattern");
    }
  };
  Y.Expression = Nf;
  Y.ThisExpression = Y.Super = Y.MetaProperty = Of;
  Y.ArrayExpression = function (a, b, c) {
    var d = 0;
    for (a = a.elements; d < a.length; d += 1) {
      var e = a[d];
      e && c(e, b, "Expression");
    }
  };
  Y.ObjectExpression = function (a, b, c) {
    var d = 0;
    for (a = a.wa; d < a.length; d += 1) c(a[d], b);
  };
  Y.FunctionExpression = Y.ArrowFunctionExpression = Y.FunctionDeclaration;
  Y.SequenceExpression = function (a, b, c) {
    var d = 0;
    for (a = a.La; d < a.length; d += 1) c(a[d], b, "Expression");
  };
  Y.TemplateLiteral = function (a, b, c) {
    for (var d = 0, e = a.Ac; d < e.length; d += 1) c(e[d], b);
    d = 0;
    for (a = a.La; d < a.length; d += 1) c(a[d], b, "Expression");
  };
  Y.TemplateElement = Of;
  Y.UpdateExpression = function (a, b, c) {
    c(a.B, b, "Expression");
  };
  Y.UnaryExpression = Y.UpdateExpression;
  Y.LogicalExpression = function (a, b, c) {
    c(a.left, b, "Expression");
    c(a.right, b, "Expression");
  };
  Y.BinaryExpression = Y.LogicalExpression;
  Y.AssignmentPattern = function (a, b, c) {
    c(a.left, b, "Pattern");
    c(a.right, b, "Expression");
  };
  Y.AssignmentExpression = Y.AssignmentPattern;
  Y.ConditionalExpression = function (a, b, c) {
    c(a.test, b, "Expression");
    c(a.la, b, "Expression");
    c(a.Aa, b, "Expression");
  };
  Y.CallExpression = function (a, b, c) {
    c(a.callee, b, "Expression");
    if (a.arguments) {
      var d = 0;
      for (a = a.arguments; d < a.length; d += 1) c(a[d], b, "Expression");
    }
  };
  Y.NewExpression = Y.CallExpression;
  Y.MemberExpression = function (a, b, c) {
    c(a.object, b, "Expression");
    a.V && c(a.fa, b, "Expression");
  };
  Y.ExportDefaultDeclaration = function (a, b, c) {
    a.Z && c(a.Z, b, "ExportNamedDeclaration" === a.type || a.Z.id ? "Statement" : "Expression");
    a.source && c(a.source, b, "Expression");
  };
  Y.ExportNamedDeclaration = Y.ExportDefaultDeclaration;
  Y.ExportAllDeclaration = function (a, b, c) {
    a.qa && c(a.qa, b);
    c(a.source, b, "Expression");
  };
  Y.ImportDeclaration = function (a, b, c) {
    for (var d = 0, e = a.Wa; d < e.length; d += 1) c(e[d], b);
    c(a.source, b, "Expression");
  };
  Y.ImportExpression = function (a, b, c) {
    c(a.source, b, "Expression");
  };
  Y.ImportSpecifier = Y.ImportDefaultSpecifier = Y.ImportNamespaceSpecifier = Y.Identifier = Y.PrivateIdentifier = Y.Literal = Of;
  Y.TaggedTemplateExpression = function (a, b, c) {
    c(a.tag, b, "Expression");
    c(a.zc, b, "Expression");
  };
  Y.ClassExpression = function (a, b, c) {
    return c(a, b, "Class");
  };
  Y.ClassDeclaration = Y.ClassExpression;
  Y.Class = function (a, b, c) {
    a.id && c(a.id, b, "Pattern");
    a.mb && c(a.mb, b, "Expression");
    c(a.body, b);
  };
  Y.ClassBody = function (a, b, c) {
    var d = 0;
    for (a = a.body; d < a.length; d += 1) c(a[d], b);
  };
  Y.Property = function (a, b, c) {
    a.V && c(a.key, b, "Expression");
    a.value && c(a.value, b, "Expression");
  };
  Y.MethodDefinition = Y.PropertyDefinition = Y.Property;
  const Pf = JSON.stringify,
    Qf = {
      "||": 2,
      "??": 3,
      "&&": 4,
      "|": 5,
      "^": 6,
      "&": 7,
      "==": 8,
      "!=": 8,
      "===": 8,
      "!==": 8,
      "<": 9,
      ">": 9,
      "<=": 9,
      ">=": 9,
      uf: 9,
      vf: 9,
      "<<": 10,
      ">>": 10,
      ">>>": 10,
      "+": 11,
      "-": 11,
      "*": 12,
      "%": 12,
      "/": 12,
      "**": 13
    };
  var Rf = {
    Pe: 20,
    gf: 20,
    jf: 20,
    Ze: 20,
    cf: 20,
    Wb: 18,
    hf: 20,
    ff: 20,
    ef: 20,
    Ed: 19,
    Ve: 19,
    Gc: 19,
    bf: 19,
    Qe: 17,
    Ad: 17,
    Ye: 17,
    Hd: 17,
    lf: 16,
    kf: 15,
    Se: 15,
    Te: 14,
    $e: 13,
    Bd: 4,
    Re: 3,
    mf: 2,
    df: 1
  };
  function Sf(a, b) {
    const c = a.aa;
    a.write("(");
    if (null != b && 0 < b.length) {
      c[b[0].type](b[0], a);
      const d = b.length;
      for (let e = 1; e < d; e++) {
        const f = b[e];
        a.write(", ");
        c[f.type](f, a);
      }
    }
    a.write(")");
  }
  function Tf(a, b, c, d) {
    const e = a.$[b.type];
    if (17 === e) return !0;
    a = a.$[c.type];
    return e !== a
      ? (!d && 15 === e && 14 === a && "**" === c.H) || e < a
      : 13 !== e && 14 !== e
      ? !1
      : "**" === b.H && "**" === c.H
      ? !d
      : 13 !== e || 13 !== a || ("??" !== b.H && "??" !== c.H)
      ? d
        ? Qf[b.H] <= Qf[c.H]
        : Qf[b.H] < Qf[c.H]
      : !0;
  }
  function Uf(a, b, c, d) {
    const e = a.aa;
    if (Tf(a, b, c, d)) a.write("("), e[b.type](b, a), a.write(")");
    else e[b.type](b, a);
  }
  function Vf(a, b) {
    const c = a.aa,
      d = b.Ja;
    a.write(b.kind + " ");
    b = d.length;
    if (0 < b) {
      c.Od(d[0], a);
      for (let e = 1; e < b; e++) a.write(", "), c.Od(d[e], a);
    }
  }
  let Wf, Xf, Yf, Zf, $f, ag;
  var bg = {
    Program: function (a, b) {
      const c = b.ta.repeat(b.g),
        d = b.fb;
      a = a.body;
      const e = a.length;
      for (let f = 0; f < e; f++) {
        const h = a[f];
        b.write(c);
        this[h.type](h, b);
        b.write(d);
      }
    },
    BlockStatement: (ag = function (a, b) {
      const c = b.ta.repeat(b.g++),
        d = b.fb,
        e = c + b.ta;
      b.write("{");
      a = a.body;
      if (null != a && 0 < a.length) {
        b.write(d);
        const f = a.length;
        for (let h = 0; h < f; h++) {
          const g = a[h];
          b.write(e);
          this[g.type](g, b);
          b.write(d);
        }
        b.write(c);
      }
      b.write("}");
      b.g--;
    }),
    ClassBody: ag,
    StaticBlock: function (a, b) {
      b.write("static ");
      this.Ue(a, b);
    },
    EmptyStatement: function (a, b) {
      b.write(";");
    },
    ExpressionStatement: function (a, b) {
      const c = b.$[a.J.type];
      if (17 === c || (3 === c && "O" === a.J.left.type[0])) b.write("("), this[a.J.type](a.J, b), b.write(")");
      else this[a.J.type](a.J, b);
      b.write(";");
    },
    IfStatement: function (a, b) {
      b.write("if (");
      this[a.test.type](a.test, b);
      b.write(") ");
      this[a.la.type](a.la, b);
      null != a.Aa && (b.write(" else "), this[a.Aa.type](a.Aa, b));
    },
    LabeledStatement: function (a, b) {
      this[a.label.type](a.label, b);
      b.write(": ");
      this[a.body.type](a.body, b);
    },
    BreakStatement: function (a, b) {
      b.write("break");
      null != a.label && (b.write(" "), this[a.label.type](a.label, b));
      b.write(";");
    },
    ContinueStatement: function (a, b) {
      b.write("continue");
      null != a.label && (b.write(" "), this[a.label.type](a.label, b));
      b.write(";");
    },
    WithStatement: function (a, b) {
      b.write("with (");
      this[a.object.type](a.object, b);
      b.write(") ");
      this[a.body.type](a.body, b);
    },
    SwitchStatement: function (a, b) {
      const c = b.ta.repeat(b.g++),
        d = b.fb;
      b.g++;
      const e = c + b.ta,
        f = e + b.ta;
      b.write("switch (");
      this[a.kc.type](a.kc, b);
      b.write(") {" + d);
      a = a.ec;
      const h = a.length;
      for (let k = 0; k < h; k++) {
        var g = a[k];
        g.test ? (b.write(e + "case "), this[g.test.type](g.test, b), b.write(":" + d)) : b.write(e + "default:" + d);
        g = g.la;
        const m = g.length;
        for (let n = 0; n < m; n++) {
          const q = g[n];
          b.write(f);
          this[q.type](q, b);
          b.write(d);
        }
      }
      b.g -= 2;
      b.write(c + "}");
    },
    ReturnStatement: function (a, b) {
      b.write("return");
      a.B && (b.write(" "), this[a.B.type](a.B, b));
      b.write(";");
    },
    ThrowStatement: function (a, b) {
      b.write("throw ");
      this[a.B.type](a.B, b);
      b.write(";");
    },
    TryStatement: function (a, b) {
      b.write("try ");
      this[a.block.type](a.block, b);
      if (a.Ea) {
        const c = a.Ea;
        null == c.ib ? b.write(" catch ") : (b.write(" catch ("), this[c.ib.type](c.ib, b), b.write(") "));
        this[c.body.type](c.body, b);
      }
      a.cb && (b.write(" finally "), this[a.cb.type](a.cb, b));
    },
    WhileStatement: function (a, b) {
      b.write("while (");
      this[a.test.type](a.test, b);
      b.write(") ");
      this[a.body.type](a.body, b);
    },
    DoWhileStatement: function (a, b) {
      b.write("do ");
      this[a.body.type](a.body, b);
      b.write(" while (");
      this[a.test.type](a.test, b);
      b.write(");");
    },
    ForStatement: function (a, b) {
      b.write("for (");
      if (null != a.R) {
        const c = a.R;
        if ("V" === c.type[0]) Vf(b, c);
        else this[c.type](c, b);
      }
      b.write("; ");
      if (a.test) this[a.test.type](a.test, b);
      b.write("; ");
      if (a.update) this[a.update.type](a.update, b);
      b.write(") ");
      this[a.body.type](a.body, b);
    },
    ForInStatement: (Wf = function (a, b) {
      b.write(`for ${a.Vc ? "await " : ""}(`);
      const c = a.left;
      if ("V" === c.type[0]) Vf(b, c);
      else this[c.type](c, b);
      b.write("I" === a.type[3] ? " in " : " of ");
      this[a.right.type](a.right, b);
      b.write(") ");
      this[a.body.type](a.body, b);
    }),
    ForOfStatement: Wf,
    DebuggerStatement: function (a, b) {
      b.write("debugger;", a);
    },
    FunctionDeclaration: (Xf = function (a, b) {
      b.write((a.async ? "async " : "") + (a.aa ? "function* " : "function ") + (a.id ? a.id.name : ""), a);
      Sf(b, a.T);
      b.write(" ");
      this[a.body.type](a.body, b);
    }),
    FunctionExpression: Xf,
    VariableDeclaration: function (a, b) {
      Vf(b, a);
      b.write(";");
    },
    VariableDeclarator: function (a, b) {
      this[a.id.type](a.id, b);
      null != a.R && (b.write(" = "), this[a.R.type](a.R, b));
    },
    ClassDeclaration: function (a, b) {
      b.write("class " + (a.id ? `${a.id.name} ` : ""), a);
      if (a.mb) {
        b.write("extends ");
        const c = a.mb,
          d = c.type,
          e = b.$[d];
        if (("C" === d[0] && "l" === d[1] && "E" === d[5]) || !(17 === e || e < b.$.Ad)) this[c.type](c, b);
        else b.write("("), this[a.mb.type](c, b), b.write(")");
        b.write(" ");
      }
      this.We(a.body, b);
    },
    ImportDeclaration: function (a, b) {
      b.write("import ");
      const c = a.Wa,
        d = c.length;
      let e = 0;
      if (0 < d) {
        for (; e < d; ) {
          0 < e && b.write(", ");
          var f = c[e],
            h = f.type[6];
          if ("D" === h) b.write(f.local.name, f), e++;
          else if ("N" === h) b.write("* as " + f.local.name, f), e++;
          else break;
        }
        if (e < d) {
          for (b.write("{"); ; )
            if (((f = c[e]), (h = f.rc.name), b.write(h, f), h !== f.local.name && b.write(" as " + f.local.name), ++e < d)) b.write(", ");
            else break;
          b.write("}");
        }
        b.write(" from ");
      }
      this.Wb(a.source, b);
      b.write(";");
    },
    ImportExpression: function (a, b) {
      b.write("import(");
      this[a.source.type](a.source, b);
      b.write(")");
    },
    ExportDefaultDeclaration: function (a, b) {
      b.write("export default ");
      this[a.Z.type](a.Z, b);
      null != b.$[a.Z.type] && "F" !== a.Z.type[0] && b.write(";");
    },
    ExportNamedDeclaration: function (a, b) {
      b.write("export ");
      if (a.Z) this[a.Z.type](a.Z, b);
      else {
        b.write("{");
        const c = a.Wa,
          d = c.length;
        if (0 < d)
          for (let e = 0; ; ) {
            const f = c[e],
              h = f.local.name;
            b.write(h, f);
            h !== f.qa.name && b.write(" as " + f.qa.name);
            if (++e < d) b.write(", ");
            else break;
          }
        b.write("}");
        a.source && (b.write(" from "), this.Wb(a.source, b));
        b.write(";");
      }
    },
    ExportAllDeclaration: function (a, b) {
      null != a.qa ? b.write("export * as " + a.qa.name + " from ") : b.write("export * from ");
      this.Wb(a.source, b);
      b.write(";");
    },
    MethodDefinition: function (a, b) {
      a.lb && b.write("static ");
      const c = a.kind[0];
      ("g" !== c && "s" !== c) || b.write(a.kind + " ");
      a.value.async && b.write("async ");
      a.value.aa && b.write("*");
      if (a.V) b.write("["), this[a.key.type](a.key, b), b.write("]");
      else this[a.key.type](a.key, b);
      Sf(b, a.value.T);
      b.write(" ");
      this[a.value.body.type](a.value.body, b);
    },
    ClassExpression: function (a, b) {
      this.Xe(a, b);
    },
    ArrowFunctionExpression: function (a, b) {
      b.write(a.async ? "async " : "", a);
      const c = a.T;
      null != c && (1 === c.length && "I" === c[0].type[0] ? b.write(c[0].name, c[0]) : Sf(b, a.T));
      b.write(" => ");
      if ("O" === a.body.type[0]) b.write("("), this.Hd(a.body, b), b.write(")");
      else this[a.body.type](a.body, b);
    },
    ThisExpression: function (a, b) {
      b.write("this", a);
    },
    Super: function (a, b) {
      b.write("super", a);
    },
    RestElement: (Yf = function (a, b) {
      b.write("...");
      this[a.B.type](a.B, b);
    }),
    SpreadElement: Yf,
    YieldExpression: function (a, b) {
      b.write(a.Yc ? "yield*" : "yield");
      a.B && (b.write(" "), this[a.B.type](a.B, b));
    },
    AwaitExpression: function (a, b) {
      b.write("await ", a);
      Uf(b, a.B, a);
    },
    TemplateLiteral: function (a, b) {
      var c = a.Ac;
      a = a.La;
      b.write("`");
      const d = a.length;
      for (let e = 0; e < d; e++) {
        const f = a[e],
          h = c[e];
        b.write(h.value.raw, h);
        b.write("${");
        this[f.type](f, b);
        b.write("}");
      }
      c = c[c.length - 1];
      b.write(c.value.raw, c);
      b.write("`");
    },
    TemplateElement: function (a, b) {
      b.write(a.value.raw, a);
    },
    TaggedTemplateExpression: function (a, b) {
      Uf(b, a.tag, a);
      this[a.zc.type](a.zc, b);
    },
    ArrayExpression: ($f = function (a, b) {
      b.write("[");
      if (0 < a.elements.length) {
        a = a.elements;
        const c = a.length;
        for (let d = 0; ; ) {
          const e = a[d];
          if (null != e) this[e.type](e, b);
          if (++d < c) b.write(", ");
          else {
            null == e && b.write(", ");
            break;
          }
        }
      }
      b.write("]");
    }),
    ArrayPattern: $f,
    ObjectExpression: function (a, b) {
      const c = b.ta.repeat(b.g++),
        d = b.fb,
        e = c + b.ta;
      b.write("{");
      if (0 < a.wa.length) {
        b.write(d);
        const f = "," + d;
        a = a.wa;
        const h = a.length;
        for (let g = 0; ; ) {
          const k = a[g];
          b.write(e);
          this[k.type](k, b);
          if (++g < h) b.write(f);
          else break;
        }
        b.write(d);
        b.write(c + "}");
      } else b.write("}");
      b.g--;
    },
    Property: function (a, b) {
      if (a.method || "i" !== a.kind[0]) this.af(a, b);
      else {
        if (!a.Bc) {
          if (a.V) b.write("["), this[a.key.type](a.key, b), b.write("]");
          else this[a.key.type](a.key, b);
          b.write(": ");
        }
        this[a.value.type](a.value, b);
      }
    },
    PropertyDefinition: function (a, b) {
      a.lb && b.write("static ");
      a.V && b.write("[");
      this[a.key.type](a.key, b);
      a.V && b.write("]");
      null == a.value ? "F" !== a.key.type[0] && b.write(";") : (b.write(" = "), this[a.value.type](a.value, b), b.write(";"));
    },
    ObjectPattern: function (a, b) {
      b.write("{");
      if (0 < a.wa.length) {
        a = a.wa;
        const c = a.length;
        for (let d = 0; ; )
          if ((this[a[d].type](a[d], b), ++d < c)) b.write(", ");
          else break;
      }
      b.write("}");
    },
    SequenceExpression: function (a, b) {
      Sf(b, a.La);
    },
    UnaryExpression: function (a, b) {
      if (a.prefix) {
        const {
          H: c,
          B: d,
          B: { type: e }
        } = a;
        b.write(c);
        (a = Tf(b, d, a)) ||
          (!(1 < c.length) && ("U" !== e[0] || ("n" !== e[1] && "p" !== e[1]) || !d.prefix || d.H[0] !== c || ("+" !== c && "-" !== c))) ||
          b.write(" ");
        if (a) b.write(1 < c.length ? " (" : "("), this[e](d, b), b.write(")");
        else this[e](d, b);
      } else this[a.B.type](a.B, b), b.write(a.H);
    },
    UpdateExpression: function (a, b) {
      a.prefix ? (b.write(a.H), this[a.B.type](a.B, b)) : (this[a.B.type](a.B, b), b.write(a.H));
    },
    AssignmentExpression: function (a, b) {
      this[a.left.type](a.left, b);
      b.write(" " + a.H + " ");
      this[a.right.type](a.right, b);
    },
    AssignmentPattern: function (a, b) {
      this[a.left.type](a.left, b);
      b.write(" = ");
      this[a.right.type](a.right, b);
    },
    BinaryExpression: (Zf = function (a, b) {
      const c = "in" === a.H;
      c && b.write("(");
      Uf(b, a.left, a, !1);
      b.write(" " + a.H + " ");
      Uf(b, a.right, a, !0);
      c && b.write(")");
    }),
    LogicalExpression: Zf,
    ConditionalExpression: function (a, b) {
      const c = a.test,
        d = b.$[c.type];
      if (17 === d || d <= b.$.Bd) b.write("("), this[c.type](c, b), b.write(")");
      else this[c.type](c, b);
      b.write(" ? ");
      this[a.la.type](a.la, b);
      b.write(" : ");
      this[a.Aa.type](a.Aa, b);
    },
    NewExpression: function (a, b) {
      b.write("new ");
      var c = b.$[a.callee.type];
      if (!(c = 17 === c || c < b.$.Gc))
        a: {
          for (c = a.callee; null != c; ) {
            const d = c.type;
            if ("C" === d[0] && "a" === d[1]) {
              c = !0;
              break a;
            }
            if ("M" === d[0] && "e" === d[1] && "m" === d[2]) c = c.object;
            else break;
          }
          c = !1;
        }
      if (c) b.write("("), this[a.callee.type](a.callee, b), b.write(")");
      else this[a.callee.type](a.callee, b);
      Sf(b, a.arguments);
    },
    CallExpression: function (a, b) {
      const c = b.$[a.callee.type];
      if (17 === c || c < b.$.Gc) b.write("("), this[a.callee.type](a.callee, b), b.write(")");
      else this[a.callee.type](a.callee, b);
      a.optional && b.write("?.");
      Sf(b, a.arguments);
    },
    ChainExpression: function (a, b) {
      this[a.J.type](a.J, b);
    },
    MemberExpression: function (a, b) {
      const c = b.$[a.object.type];
      if (17 === c || c < b.$.Ed) b.write("("), this[a.object.type](a.object, b), b.write(")");
      else this[a.object.type](a.object, b);
      a.V
        ? (a.optional && b.write("?."), b.write("["), this[a.fa.type](a.fa, b), b.write("]"))
        : (a.optional ? b.write("?.") : b.write("."), this[a.fa.type](a.fa, b));
    },
    MetaProperty: function (a, b) {
      b.write(a.dd.name + "." + a.fa.name, a);
    },
    Identifier: function (a, b) {
      b.write(a.name, a);
    },
    PrivateIdentifier: function (a, b) {
      b.write(`#${a.name}`, a);
    },
    Literal: function (a, b) {
      null != a.raw ? b.write(a.raw, a) : null != a.Wc ? b.write(a.Wc + "n", a) : b.write(Pf(a.value), a);
    }
  };
  const cg = {};
  class dg {
    constructor() {
      this.i = "";
      this.aa = null != cg.aa ? cg.aa : bg;
      this.$ = null != cg.$ ? cg.$ : Rf;
      this.ta = null != cg.ta ? cg.ta : "  ";
      this.fb = null != cg.fb ? cg.fb : "\n";
      this.g = null != cg.Je ? cg.Je : 0;
    }
    write(a) {
      this.i += a;
    }
    toString() {
      return this.i;
    }
  }
  function eg(a) {
    const b = new dg();
    b.aa[a.type](a, b);
    return b.i;
  }
  function fg(a, b) {
    const c = Hd(new Lf(a)),
      d = new Map();
    let e = null;
    Mf(c, {
      VariableDeclaration: (f) => {
        for (const h of f.Ja) "Identifier" === h.id.type && h.R && d.set(h.id.name, h.R);
      },
      ExpressionStatement: (f) => {
        f = f.J;
        "AssignmentExpression" === f.type && "=" === f.H && "Identifier" === f.left.type && d.set(f.left.name, f.right);
      },
      CallExpression: (f) => {
        "Identifier" === f.callee.type &&
          f.callee.name === b &&
          (e = f.arguments.map((h) => {
            if ("Identifier" === h.type) {
              const g = d.get(h.name);
              if (g) return g;
            }
            return h;
          }));
      }
    });
    if (null === e) throw Error(`CallExpression for ${b} not found in ${a}`);
    return e;
  }
  function gg(a) {
    const b = Hd(new Lf(a));
    let c = null;
    Mf(b, {
      FunctionDeclaration: (d) => {
        c = d.T;
      }
    });
    if (null === c) throw Error(`FunctionDeclaration not found in ${a}`);
    return c.filter((d) => "Identifier" === d.type);
  }
  function hg(a, b, c) {
    for (const [, d] of a.i) d.fc.push({ type: "insert", index: b, length: c });
  }
  function ig(a, b, c) {
    for (const [, d] of a.i) d.fc.push({ type: "delete", index: b, length: c });
  }
  function jg() {
    const a = window;
    for (const b in a) {
      const c = a[b];
      if (
        "function" === typeof c &&
        c.toString().match(/function(?: [a-zA-Z0-9$_]+)?\(a(,[a-z])*\){.+\.getContext\(\).+\.getContext\(\).+\.getData\(\)/)
      )
        return { parent: a, key: b, value: c };
    }
    return null;
  }
  function kg(a) {
    return (a = a.toString().match(/;(a\.[a-zA-Z0-9$_\.]+)\.getData\(\)/)) ? a[1] : null;
  }
  function lg(a, b) {
    if (a.s) return a.s;
    for (const d in b) {
      var c = b[d];
      if (Array.isArray(c) && 0 !== c.length && ((c = c[0]), !("start" in c && "end" in c)))
        for (const e in c) if (!Array.isArray(c[e])) return (a.s = d);
    }
    return null;
  }
  function mg(a) {
    if (a.l) return a.l;
    const b = Ja(/Math\.min\([a-zA-Z0-9$_]+\.length,.*?\.push\(/);
    if (!b) throw Error("Unable to find measureText function!");
    const c = ng(a, b, new RegExp("function(?: [a-zA-Z0-9$_]+)?\\([a-zA-Z0-9$_,]+\\){[^;]+;[a-zA-Z0-9$_]+=" + A(b.key.toString()) + "\\(")),
      d = ng(a, c.path);
    var e = og(a, d.path)
      .map((p) =>
        p.path.value
          .toString()
          .match(
            new RegExp(
              "this\\.([a-zA-Z0-9$_]+)\\[0\\].*?\\([a-zA-Z0-9$_]+=(this\\..*?),[a-zA-Z0-9$_]+=" +
                A(d.path.key.toString()) +
                "\\((this\\.[a-zA-Z0-9$_]+),"
            )
          )
      )
      .find((p) => p);
    if (!e) throw Error("Unable to get matches!");
    const f = e[1],
      h = e[2],
      g = e[3];
    e = pg(d.path.value.toString(), c.path.key.toString()).find((p) => 4 < p.length);
    if (!e) throw Error("Unable to find style mapping!");
    const [k, m] = e
        .map((p) => p.match(/\[(.*?)\]/))
        .filter((p) => !!p)
        .map((p) => p[1])
        .filter((p, u, r) => r.indexOf(p) === u),
      n = e.filter((p) => p.includes("[" + k + "]")),
      q = e.filter((p) => p.includes("[" + m + "]")),
      t = (p, u, r) => {
        let v = 0;
        for (let x = 0; x <= r; x++) {
          const z = ha("this" + q[0].replace("[" + m + "]", ""), { this: "object" === typeof u ? u : p[f][u] });
          x in z && (v = x);
        }
        return v;
      };
    a.l = (p, u, r) => {
      const v = t(p, u, r),
        x = q.map((va) => ha("this" + va, { this: "object" === typeof u ? u : p[f][u], [m]: v }));
      var z = ha(h, { this: p });
      const L = ha(g + d.link[0][0] + c.link[0][0], { this: p }),
        H = n.map((va) => ha("this" + va, { this: "object" === typeof u ? u : p[f][u], [k]: r }));
      z = [L, H[0], ...x, z];
      return { hc: b.value(...z), style: x };
    };
    return a.l;
  }
  function qg(a, b) {
    const c = [];
    for (let d = 0; d < a.length; d++) {
      const e = new RegExp("^" + A(a[d]) + "(?![a-zA-Z0-9$_])"),
        f = b.filter((h) => h.match(e));
      c[d] = f.map((h) => h.replace(e, ""));
    }
    return c;
  }
  function pg(a, b) {
    const c = gg(a).map((d) => eg(d));
    a = fg(a, b).map((d) => eg(d));
    return qg(c, a);
  }
  function ng(a, b, c = new RegExp("(?<!function )(?<![a-zA-Z0-9$_])" + A(b.key.toString()) + "\\(")) {
    a = Ja(c);
    if (!a) throw Error("Unable to find example of function that calls measureText!");
    var d = a.value.toString();
    c = d.match(/function(?: [a-zA-Z0-9$_]+)?\((.*?)\)/);
    if (!c) throw Error("Unable to extract parameters of function!");
    d = d.match(new RegExp("(?<![a-zA-Z0-9$_])" + A(b.key.toString()) + "\\(([\\w\\W]+)"));
    if (!d) throw Error("Unable to extract arguments of function!");
    b = [];
    let e = 1;
    for (var f of d[1]) {
      ")" === f ? e-- : "(" === f && e++;
      if (0 === e) break;
      b.push(f);
    }
    f = c[1].split(",");
    c = ((h) => {
      const g = [];
      let k = "",
        m = !1;
      for (const n of h) "," !== n || m ? ("(" === n ? (m = !0) : ")" === n && (m = !1), (k += n)) : (g.push(k), (k = ""));
      k && g.push(k);
      return g;
    })(b).map((h) => {
      const g = h.match(/^[a-zA-Z0-9$_]+\(([^\),]+),([^\)]+)\)$/);
      return g ? `${g[1]}[${g[2]}]` : h;
    });
    f = qg(f, c);
    return { path: a, link: f };
  }
  function og(a, b, c = new RegExp("(?<!function )(?<![a-zA-Z0-9$_])" + A(b.key.toString()) + "\\(")) {
    if ((a = Ka.get(c.toString()))) c = a;
    else {
      a = window;
      var d = [];
      for (var e in a) {
        var f = a[e];
        if ("function" === typeof f) {
          var h = f.toString();
          if (!h.includes("[native code]") && (c.test(h) && d.push({ parent: a, key: e, value: f }), "prototype" in f)) {
            f = f.prototype;
            for (const g in f)
              "error" !== g &&
                "constructor" !== g &&
                "lower" !== g &&
                ((h = Object.getOwnPropertyDescriptor(f, g)),
                null !== h &&
                  void 0 !== h &&
                  h.value &&
                  ((h = f[g]), "function" === typeof h && c.test(h.toString()) && d.push({ parent: f, key: g, value: h })));
          }
        }
      }
      Ka.set(c.toString(), d);
      c = d;
    }
    e = [];
    for (const g of c)
      try {
        e.push(rg(b, g));
      } catch (k) {
        console.error(k);
      }
    return e;
  }
  function rg(a, b) {
    var c = b.value.toString(),
      d = c.match(/function(?: [a-zA-Z0-9$_]+)?\((.*?)\)/);
    if (!d) throw Error("Unable to extract parameters of function!");
    c = c.match(new RegExp("(?<![a-zA-Z0-9$_])" + A(a.key.toString()) + "\\(([\\w\\W]+)"));
    if (!c) throw Error("Unable to extract arguments of function!");
    a = [];
    let e = 1;
    for (var f of c[1]) {
      ")" === f ? e-- : "(" === f && e++;
      if (0 === e) break;
      a.push(f);
    }
    d = d[1].split(",");
    f = ((h) => {
      const g = [];
      let k = "",
        m = !1;
      for (const n of h) "," !== n || m ? ("(" === n ? (m = !0) : ")" === n && (m = !1), (k += n)) : (g.push(k), (k = ""));
      k && g.push(k);
      return g;
    })(a).map((h) => {
      const g = h.match(/^[a-zA-Z0-9$_]+\(([^\),]+),([^\)]+)\)$/);
      return g ? `${g[1]}[${g[2]}]` : h;
    });
    d = qg(d, f);
    return { path: b, link: d };
  }
  var sg = class {
    constructor() {
      this.M = new y();
      this.A = !1;
      this.i = Qa() ? new jc() : new vc();
      this.s = this.g = null;
      this.C = new uc();
    }
    zb() {
      if (!this.A) {
        var a = jg();
        if (!a) throw Error("Unable to find the function that keeps the index for the overlay rendering!");
        var b = this,
          c = kg(a.value);
        if (!c) throw Error("Unable to find the path to the data!");
        this.g = a;
        a.parent[a.key] = function (...d) {
          try {
            (() => {
              const [e, , f] = d;
              var h = ha(c, { a: e }).getData();
              const g = { fc: [] };
              b.i.get(h) || tc(b.C, e, c);
              b.i.set(h, g);
              h[mc] = g;
              h[kc] = f;
              h[lc] = b.D.bind(b, e);
              h[nc] = b.u.bind(b, e);
              for (const k in e) e[k] && "object" === typeof e[k] && !Array.isArray(e[k]) && (e[k][nc] = b.u.bind(b, e));
              h = Object.keys(e).filter((k) => "object" === typeof e[k] && e[k] && "getType" in e[k] && 1 === Object.keys(e[k]).length);
              1 === h.length && w(b.M, e[h[0]], f);
            })();
          } catch (e) {
            console.error(e);
          }
          return a.value.apply(this, d);
        };
        this.A = !0;
      }
    }
    lc() {
      this.g && ((this.g.parent[this.g.key] = this.g.value), (this.g = null));
    }
    u(a, b, c) {
      if (b.start === b.end) return [];
      var d = lg(this, a);
      if (!d) return [];
      d = a[d];
      if (!d) return [];
      var e = Array.from(d);
      d = [];
      const f = [],
        h = [],
        g = [],
        k = [],
        m = [];
      var n = 0;
      for (var q = 0; q < e.length; q++) {
        var t = Xa(e[q]);
        if (!t) return [];
        var p = t.yd,
          u = t.zd;
        t = t.cd;
        for (var r = 0; r < p.length; r++)
          f.push(p[r]), h.push(u[r]), g.push(t[r]), k.push(n), m.push(this.F.bind(this, a, e[q], r)), (n += p[r].length);
      }
      a = 0;
      if (c) {
        a = [];
        for (e = 0; e < f.length; e++)
          (q = k[e]),
            (n = f[e].length),
            (p = Math.max(c.index, q) - q),
            (u = Math.min(q + n, c.index + c.length) - q),
            p >= u ||
              (u - p == n
                ? a.push(g[e])
                : ((t = m[e]()),
                  (q = t.style[4]),
                  (t = t.hc),
                  (p = 0 === p ? 0 : t.slice(0, p).reduce((x, z) => x + z, 0)),
                  (n = u === n ? 0 : t.slice(u, n).reduce((x, z) => x + z, 0)),
                  a.push(g[e] + (q ? p : n))));
        a = a.reduce((x, z) => Math.min(x, z), Infinity);
      }
      for (e = 0; e < f.length; e++) {
        p = f[e].length;
        n = g[e] + (c ? c.left - a : 0);
        q = h[e];
        u = k[e];
        r = Math.max(b.start, u) - u;
        const x = Math.min(u + p, b.end) - u;
        if (!(r >= x)) {
          var v = m[e]();
          u = v.style[1];
          t = v.style[4];
          x - r == p
            ? d.push({ left: n, top: 0, width: q, height: u })
            : ((v = v.hc),
              (r = 0 === r ? 0 : v.slice(0, r).reduce((z, L) => z + L, 0)),
              (p = x === p ? 0 : v.slice(x, p).reduce((z, L) => z + L, 0)),
              t
                ? d.push({ left: n + r, top: 0, width: q - r - p, height: u })
                : d.push({ left: n + p, top: 0, width: q - r - p, height: u }));
        }
      }
      Pa(d);
      return d;
    }
    F(a, b, c) {
      return mg(this)(a, b, c);
    }
    D(a, b, c) {
      return mg(this)(a, b, c).hc;
    }
  };
  function tg(a) {
    if (!("type" in a) || "string" !== typeof a.type) return null;
    const b = a.type;
    return "CellBorderLocation" === b
      ? new Aa(a.tuples.map((c) => new Ba(c.type, c.index)))
      : "InlineLocation" === b
      ? new ya(ug(a.range))
      : "ListItemLocation" === b
      ? new Ca(a.index)
      : "ListNestingLevelLocation" === b
      ? new Da(a.id, a.level, a.index)
      : "PositionedLocation" === b
      ? new za(a.id)
      : null;
  }
  function ug(a) {
    return { start: a.start, end: a.end };
  }
  function vg(a) {
    return a instanceof Aa
      ? { type: a.type, tuples: a.g.map((b) => ({ type: b.type, index: b.index })) }
      : a instanceof ya
      ? { type: a.type, range: { start: a.S.start, end: a.S.end } }
      : a instanceof Ca
      ? { type: a.type, index: a.index }
      : a instanceof Da
      ? { type: a.type, id: a.id, index: a.index, level: a.g }
      : a instanceof za
      ? { type: a.type, id: a.id }
      : null;
  }
  function wg(a) {
    return a instanceof wa
      ? { type: a.type, fn: a.g }
      : a instanceof Za
      ? { type: a.type, spellCheckType: a.l, language: a.i, text: a.text, corrections: a.g }
      : { type: a.type };
  }
  function xg(a) {
    return a instanceof ib
      ? { type: a.type, id: a.id, url: a.url, title: a.title, description: a.description }
      : { type: a.type, id: a.id };
  }
  function yg() {
    this.g || (this.g = new zg());
    return this.g;
  }
  var zg = class {
    constructor() {
      this.l = new y();
      this.g = new y();
      this.i = new y();
    }
  };
  var Ag = (a, b) =>
    new Proxy(
      a,
      Object.assign(
        {
          get: (c, d) => Reflect.get(c, d),
          set: (c, d, e) => Reflect.set(c, d, e),
          has: (c, d) => Reflect.has(c, d),
          deleteProperty: (c, d) => Reflect.deleteProperty(c, d),
          defineProperty: (c, d, e) => Reflect.defineProperty(c, d, e),
          getOwnPropertyDescriptor: (c, d) => Reflect.getOwnPropertyDescriptor(c, d),
          getPrototypeOf: (c) => Reflect.getPrototypeOf(c),
          isExtensible: (c) => Reflect.isExtensible(c),
          preventExtensions: (c) => Reflect.preventExtensions(c),
          ownKeys: (c) => Reflect.ownKeys(c),
          setPrototypeOf: (c, d) => Reflect.setPrototypeOf(c, d)
        },
        b
      )
    );
  function Bg(a) {
    return Ag(a.l, {
      get: (b, c, d) => {
        a.g.g = !0;
        const e = Reflect.get(b, c);
        a.g.g = !1;
        return "function" !== typeof e
          ? e
          : function (...f) {
              const h = { G: c, I: f, result: void 0 };
              let g = !1,
                k = !1;
              try {
                const m = w(a.i.g, d, h, () => {
                  g = !0;
                });
                m instanceof ba && "StopPropagation" === m.name && (k = !0);
              } catch (m) {
                console.error(m);
              }
              g || (h.result = e.apply(b, f));
              if (!k)
                try {
                  w(a.i.i, d, h);
                } catch (m) {
                  console.error(m);
                }
              return h.result;
            };
      },
      set: (b, c, d, e) => {
        d = { G: c, value: d };
        let f = !1;
        try {
          w(a.i.l, e, d, () => {
            f = !0;
          });
        } catch (h) {
          console.error(h);
        }
        if (f) return !0;
        a.g.g = !0;
        b = Reflect.set(b, c, d.value);
        a.g.g = !1;
        return b;
      }
    });
  }
  var Cg = class {
    constructor(a, b, c) {
      this.l = a;
      this.i = b;
      this.g = c;
    }
  };
  var Dg = class {
    constructor() {
      this.g = !1;
    }
  };
  function Eg(a, b, c) {
    const d = a.i,
      e = a.g,
      f = Object.getOwnPropertyDescriptor(b, c);
    if (f) {
      var h = f.set || ((k) => (f.value = k)),
        g = f.get || (() => f.value);
      Object.defineProperty(b, c, {
        configurable: f.configurable,
        enumerable: f.enumerable,
        get: function () {
          const k = g.call(this);
          return "function" !== typeof k || d.g
            ? k
            : function (...m) {
                if (d.g) return k.apply(this, m);
                const n = { G: c, I: m, result: void 0 };
                let q = !1,
                  t = !1;
                try {
                  const p = w(e.g, this, n, () => {
                    q = !0;
                  });
                  p instanceof ba && "StopPropagation" === p.name && (t = !0);
                } catch (p) {
                  console.error(p);
                }
                q || (n.result = k.apply(this, m));
                if (!t)
                  try {
                    w(e.i, this, n);
                  } catch (p) {
                    console.error(p);
                  }
                return n.result;
              };
        },
        set: function (k) {
          k = { G: c, value: k };
          if (!d.g) {
            let m = !1;
            try {
              w(e.l, this, k, () => {
                m = !0;
              });
            } catch (n) {
              console.error(n);
            }
            if (m) return !0;
          }
          return h.call(this, k.value);
        }
      });
    }
  }
  var Fg = class {
    constructor(a, b) {
      var c = CanvasRenderingContext2D.prototype;
      this.i = a;
      this.g = b;
      a = Object.getOwnPropertyNames(c);
      for (const d of a) Eg(this, c, d);
    }
  };
  function Gg(a) {
    const b = HTMLCanvasElement.prototype.getContext,
      c = new WeakMap();
    HTMLCanvasElement.prototype.getContext = function (d) {
      const e = b.apply(this, Array.from(arguments));
      if ("2d" !== d || !(e instanceof CanvasRenderingContext2D)) return e;
      const f = c.get(e) || Bg(new Cg(e, a.i, a.l));
      c.set(e, f);
      return f;
    };
  }
  var Hg = class extends ca {
    constructor() {
      var a = yg();
      super();
      this.l = new Dg();
      this.i = a;
      Gg(this);
      new Fg(this.l, this.i);
    }
  };
  function Ig(a, b) {
    const c = Math.max(a.start, b.start);
    a = Math.min(a.end, b.end);
    return c <= a ? { start: c, end: a } : null;
  }
  function Jg(a, b) {
    let c = 0;
    for (const [d, e] of b) {
      const f = a.g.get(d);
      (f &&
        f.S.start === e.S.start &&
        f.S.end === e.S.end &&
        f.zIndex === e.zIndex &&
        f.Dc === e.Dc &&
        f.backgroundColor === e.backgroundColor &&
        f.borderLeftWidth === e.borderLeftWidth &&
        f.borderLeftColor === e.borderLeftColor &&
        f.borderTopWidth === e.borderTopWidth &&
        f.borderTopColor === e.borderTopColor &&
        f.borderRightWidth === e.borderRightWidth &&
        f.borderRightColor === e.borderRightColor &&
        f.borderBottomWidth === e.borderBottomWidth &&
        f.borderBottomColor === e.borderBottomColor) ||
        (c++, a.g.set(d, e));
    }
    0 < c && ((a.i = null), w(a.u, b), w(a.l));
  }
  function Kg(a) {
    null === a.i &&
      (a.i = Array.from(a.g).sort((b, c) => {
        b = "number" === typeof b[1].zIndex ? b[1].zIndex : 0;
        c = "number" === typeof c[1].zIndex ? c[1].zIndex : 0;
        return b > c ? 1 : b < c ? -1 : 0;
      }));
    return a.i;
  }
  function* Lg(a, b) {
    for (const [c, d] of Kg(a)) {
      a = d.S;
      if (b && ((a = Ig(b, d.S)), !a || a.start === a.end)) continue;
      yield { id: c, wc: d, S: a };
    }
  }
  var Mg = class {
    constructor() {
      this.l = new y();
      this.u = new y();
      this.s = new y();
      this.g = new Map();
      this.i = null;
    }
    get size() {
      return this.g.size;
    }
  };
  var Ng = class extends ca {
    constructor() {
      var a = yg();
      super();
      this.i = new y();
      this.l = new WeakMap();
      this.u = new Map();
      this.s = a;
      this.A = this.F.bind(this);
      this.D = this.M.bind(this);
      this.s.i.add(this.A);
      this.s.l.add(this.D);
    }
    g() {
      super.g();
      this.s.i.remove(this.A);
      this.s.l.remove(this.D);
    }
    F(a, b) {
      if (!1 !== this.u.get(a) && 0 !== b.G.toString().indexOf("get") && 0 !== b.G.toString().indexOf("measure")) {
        b = { type: "call", G: b.G, I: b.I };
        w(this.i, a, b);
        var c = this.l.get(a) || [];
        for (c.push(b); 10 < c.length; ) c.shift();
        this.l.set(a, c);
      }
    }
    M(a, b) {
      if (!1 !== this.u.get(a)) {
        b = { type: "set", G: b.G, value: b.value };
        w(this.i, a, b);
        var c = this.l.get(a) || [];
        for (c.push(b); 10 < c.length; ) c.shift();
        this.l.set(a, c);
      }
    }
  };
  function Og() {
    const a = [];
    var b = Array.from(document.getElementsByClassName("kix-canvas-tile-content")).sort((c, d) => {
      c = parseFloat(c.style.top);
      d = parseFloat(d.style.top);
      return isFinite(c) && isFinite(d) ? c - d : 0;
    });
    for (const c of b) "CANVAS" === c.tagName && (b = Pg.get(c)) && a.push(b);
    return a;
  }
  var Pg = new WeakMap();
  function Qg(a, b) {
    const c = Math.max(a.left, b.left),
      d = Math.min(a.left + a.width, b.left + b.width);
    if (c > d) return null;
    const e = Math.max(a.top, b.top);
    a = Math.min(a.top + a.height, b.top + b.height);
    return e > a ? null : { left: c, top: e, width: d - c, height: a - e };
  }
  function Rg(a) {
    return new Sg(a.left, a.top, a.width, a.height);
  }
  function Tg(a, b) {
    var c = Qg(a, b);
    if (null === c) return [a];
    b = a.left;
    const d = a.top,
      e = a.width;
    a = a.height;
    const f = c.left - b,
      h = c.top - d,
      g = f + c.width;
    c = h + c.height;
    return [
      0 < f ? { left: b, top: d, width: f, height: a } : null,
      0 < h ? { left: b, top: d, width: e, height: h } : null,
      g < e ? { left: b + g, top: d, width: e - g, height: a } : null,
      c < a ? { left: b, top: d + c, width: e, height: a - c } : null
    ].filter((k) => null !== k);
  }
  var Sg = class {
    constructor(a, b, c, d) {
      this.left = a;
      this.top = b;
      this.width = c;
      this.height = d;
    }
  };
  const Ug = () => ({ transform: { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 }, fillStyle: "", font: "", clip: null });
  function Vg(a, b) {
    var c = a.i.get(b);
    return c && 0 !== c.length ? c[c.length - 1] : ((c = Ug()), a.i.set(b, [c]), c);
  }
  var Wg = class extends ca {
    constructor(a) {
      super();
      this.i = new WeakMap();
      this.l = a;
      this.s = (b, c) => {
        {
          const e = Vg(this, b);
          if ("set" === c.type) "font" === c.G ? (e.font = c.value) : "fillStyle" === c.G && (e.fillStyle = c.value);
          else {
            if ("save" === c.G) {
              {
                var d = {
                  transform: { a: e.transform.a, b: e.transform.b, c: e.transform.c, d: e.transform.d, e: e.transform.e, f: e.transform.f },
                  fillStyle: e.fillStyle,
                  font: e.font,
                  clip: e.clip
                };
                let f = this.i.get(b);
                (f && 0 !== f.length) || ((f = [Ug()]), this.i.set(b, f));
                f.push(d);
              }
            }
            "restore" === c.G && (d = this.i.get(b)) && 0 !== d.length && d.pop();
            "resetTransform" === c.G && (e.transform = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
            if ("setTransform" === c.G)
              if (1 === c.I.length) ([b] = c.I), (e.transform = { a: b.a, b: b.b, c: b.c, d: b.d, e: b.e, f: b.f });
              else {
                const [f, h, g, k, m, n] = c.I;
                e.transform = { a: f, b: h, c: g, d: k, e: m, f: n };
              }
            else if ("transform" === c.G) {
              const [f, h, g, k, m, n] = c.I;
              e.transform = {
                a: e.transform.a * f,
                b: e.transform.b + h,
                c: e.transform.c + g,
                d: e.transform.d * k,
                e: e.transform.e + m * e.transform.a,
                f: e.transform.f + n * e.transform.d
              };
            } else if ("translate" === c.G) {
              const [f, h] = c.I;
              e.transform = {
                a: e.transform.a,
                b: e.transform.b,
                c: e.transform.c,
                d: e.transform.d,
                e: e.transform.e + f * e.transform.a,
                f: e.transform.f + h * e.transform.d
              };
            } else if ("scale" === c.G) {
              const [f, h] = c.I;
              e.transform = {
                a: e.transform.a * f,
                b: e.transform.b,
                c: e.transform.c,
                d: e.transform.d * h,
                e: e.transform.e,
                f: e.transform.f
              };
            } else
              "clip" === c.G &&
                0 === c.I.length &&
                ((c = Array.from(this.l.l.get(b) || [])),
                2 > c.length ||
                  ((b = c[c.length - 1]),
                  (c = c[c.length - 2]),
                  "call" === b.type &&
                    "call" === c.type &&
                    "rect" === b.G &&
                    "beginPath" === c.G &&
                    ((b = {
                      left: b.I[0] * e.transform.a + e.transform.e,
                      top: b.I[1] * e.transform.d + e.transform.f,
                      width: b.I[2] * e.transform.a,
                      height: b.I[3] * e.transform.d
                    }),
                    e.clip && ((c = Qg(Rg(b), e.clip)), null !== c && (b = c)),
                    (e.clip = b))));
          }
        }
      };
      a.i.add(this.s);
    }
    g() {
      super.g();
      this.l.i.remove(this.s);
    }
  };
  var Xg = class {
    constructor(a) {
      this.g = new Map();
      this.i = a;
    }
  };
  function Yg(a, b) {
    if (!a.g.has(b)) {
      var c = b.canvas;
      const { canvas: d, context: e } = Zg(a, c.width, c.height),
        { canvas: f, context: h } = $g(a, c.width, c.height);
      c = ah();
      c.re.appendChild(f);
      a.g.set(b, { ge: d, dc: e, wf: f, ea: h, ld: c.element });
      c = () => {
        var g = b.canvas;
        const k = g.getAttribute("style") || "",
          m = g.width;
        g = g.height;
        f.setAttribute("style", k);
        f.width = m;
        f.height = g;
        f.style.position = "absolute";
        d instanceof HTMLCanvasElement && d.setAttribute("style", k);
        d.width = m;
        d.height = g;
      };
      new MutationObserver(c).observe(b.canvas, { attributes: !0, attributeFilter: ["width", "height", "style"] });
      f.classList.add("wizkids-overlay-canvas");
      c();
    }
    return a.g.get(b);
  }
  function bh(a, b) {
    var c, d, e, f, h;
    const g = [],
      k = [];
    for (const { Ge: q, wc: t } of b)
      for (const p of q) {
        b = p.left;
        const u = p.top,
          r = p.width,
          v = p.height;
        for (var m = 0; m < g.length; m++) {
          const x = g[m];
          var n = Tg(x.rect, { left: b, top: x.rect.top, width: r, height: x.rect.height });
          0 === n.length
            ? (g.splice(m, 1), m--)
            : 1 === n.length
            ? (x.rect = n[0])
            : ((n = n.map((z) => ({ rect: z, color: x.color }))), g.splice(m, 1, ...n), (m += n.length - 1));
        }
        g.push({
          rect: { left: b, top: u, width: r, height: v },
          color: null !== (c = t.Dc) && void 0 !== c ? c : a.fillStyle || "#000000"
        });
        t.backgroundColor && k.push({ fillStyle: t.backgroundColor, rect: { left: b, top: u, width: r, height: v } });
        t.borderTopColor &&
          ((m = null !== (d = t.borderTopWidth) && void 0 !== d ? d : 1),
          k.push({ fillStyle: t.borderTopColor, rect: { left: b, top: u - m, width: r, height: m } }));
        t.borderLeftColor &&
          ((m = null !== (e = t.borderLeftWidth) && void 0 !== e ? e : 1),
          k.push({ fillStyle: t.borderLeftColor, rect: { left: b - m, top: u, width: m, height: v } }));
        t.borderBottomColor &&
          ((m = null !== (f = t.borderBottomWidth) && void 0 !== f ? f : 1),
          k.push({ fillStyle: t.borderBottomColor, rect: { left: b, top: u + v, width: r, height: m } }));
        t.borderRightColor &&
          ((m = null !== (h = t.borderRightWidth) && void 0 !== h ? h : 1),
          k.push({ fillStyle: t.borderRightColor, rect: { left: b + r, top: u, width: m, height: v } }));
      }
    return { Me: g, ve: k };
  }
  function $g(a, b, c) {
    const d = document.createElement("canvas");
    d.width = b;
    d.height = c;
    b = d.getContext("2d");
    a.i.u.set(b, !1);
    return { canvas: d, context: b };
  }
  function Zg(a, b, c) {
    if ("undefined" === typeof OffscreenCanvas) return $g(a, b, c);
    a = new OffscreenCanvas(b, c);
    b = a.getContext("2d");
    return { canvas: a, context: b };
  }
  function ah() {
    const a = document.createElement("div");
    a.className = "wizkids-overlay-canvas-container";
    return { element: a, re: a };
  }
  var ch = class {
    constructor(a) {
      this.g = new WeakMap();
      this.i = a;
      this.i.i.add((b, c) => {
        b = Yg(this, b);
        "set" === c.type
          ? Reflect.set(b.dc, c.G, c.value)
          : "call" === c.type && "fillText" !== c.G && Reflect.get(b.dc, c.G).apply(b.dc, c.I);
      });
    }
    clear(a, b = { left: -1e8, top: -1e8, width: 2e8, height: 2e8 }) {
      Yg(this, a).ea.clearRect(b.left, b.top, b.width, b.height);
    }
  };
  function dh(a) {
    var b = Performance.prototype;
    const c = b.now;
    b.now = function (...d) {
      let e = 0;
      try {
        e = a(this, ...d);
      } catch (f) {
        console.error(f);
      }
      if (1 !== e) return c.apply(this, d);
    };
    return () => {
      b.now = c;
    };
  }
  function eh(a) {
    const b = Og();
    for (const c of b) fh(a, c);
    a.s = !1;
    a.u++;
  }
  function fh(a, b) {
    a.D.clear(b);
    var c = a.l.get(b);
    if (c)
      for (const k of c) {
        c = a;
        var d = b,
          e = k;
        if (e.data) {
          var f = e.data.eb(),
            h = { fillStyle: e.fillStyle, font: e.font, text: e.text, x: e.position.left, y: e.position.top, transform: e.transform },
            g = [];
          for (const { wc: m, S: n } of Lg(c.F, f)) (f = e.data.sa(n)), 0 !== f.length && g.push({ Ge: f, wc: m });
          if (0 !== g.length) {
            {
              c = Yg(c.D, d);
              c.ld.parentNode || d.canvas.after(c.ld);
              const { Me: m, ve: n } = bh(h, g);
              try {
                c.ea.save();
                c.ea.setTransform(h.transform.a, h.transform.b, h.transform.c, h.transform.d, h.transform.e, h.transform.f);
                c.ea.font = h.font;
                for (const { rect: q } of m)
                  1e-5 > Math.abs(q.width) ||
                    1e-5 > Math.abs(q.height) ||
                    ((c.ea.fillStyle = "#ffffff"),
                    c.ea.fillRect(q.left, q.top, q.width, q.height),
                    c.ea.drawImage(
                      c.ge,
                      q.left * h.transform.a + h.transform.e,
                      q.top * h.transform.d + h.transform.f,
                      q.width * h.transform.a,
                      q.height * h.transform.d,
                      q.left,
                      q.top,
                      q.width,
                      q.height
                    ));
                for (const { rect: q, fillStyle: t } of n)
                  1e-5 > Math.abs(q.width) ||
                    1e-5 > Math.abs(q.height) ||
                    ((c.ea.fillStyle = t), c.ea.fillRect(q.left, q.top, q.width, q.height));
                for (const { rect: q, color: t } of m)
                  if (!(1e-5 > Math.abs(q.width) || 1e-5 > Math.abs(q.height)))
                    try {
                      c.ea.save();
                      const p = new Path2D();
                      p.rect(q.left, q.top, q.width, q.height);
                      c.ea.clip(p);
                      c.ea.fillStyle = t;
                      c.ea.fillText(h.text, h.x, h.y);
                    } finally {
                      c.ea.restore();
                    }
              } finally {
                c.ea.restore();
              }
            }
          }
        }
      }
  }
  var gh = class extends ca {
    constructor(a, b) {
      super();
      this.s = !1;
      this.i = null;
      this.u = 0;
      this.l = new WeakMap();
      this.F = a;
      this.D = new ch(b);
      this.A = new Wg(b);
      const c = new OffscreenCanvas(1, 1).getContext("2d");
      if (!c) throw Error("Failed to create offscreen context");
      this.M = new Xg(c);
      const d = () => eh(this);
      a.l.add(d);
      this.Va.add(() => a.l.remove(d));
      const e = new WeakMap(),
        f = new WeakMap(),
        h = (g, k) => {
          if ("set" !== k.type) {
            var m = k.G;
            k = k.I;
            try {
              if ((Pg.has(g.canvas) || Pg.set(g.canvas, g), "clearRect" === m || "fillRect" === m)) {
                const [Nc, Oc, ma, Lb] = k;
                f.set(g, 0);
                var n = this.l.get(g);
                if (n) {
                  var q = Vg(this.A, g),
                    t = Rg({
                      left: Nc * q.transform.a + q.transform.e,
                      top: Oc * q.transform.d + q.transform.f,
                      width: ma * q.transform.a,
                      height: Lb * q.transform.d
                    });
                  if (q.clip) {
                    const da = Qg(t, q.clip);
                    null === da ? (t = null) : (t = Rg(da));
                  }
                  if (null !== t) {
                    var p = [];
                    for (const da of n) {
                      const na = Qg(t, da.rect);
                      null !== na && 0 < na.width && na.height > da.rect.height / 2 ? this.i && this.i.hd(g, da) : p.push(da);
                    }
                    this.l.set(g, p);
                  }
                }
              } else if ("fillText" === m) {
                this.s = !0;
                this.l.has(g) || this.l.set(g, []);
                p = this.l.get(g);
                const [Nc, Oc] = [k[1], k[2]],
                  ma = Vg(this.A, g),
                  Lb = f.get(g);
                n = { left: Nc, top: Oc };
                var u = this.u,
                  r = k[0];
                {
                  t = n;
                  var v = ma.transform;
                  a: {
                    var x = this.M,
                      z = k[0],
                      L = ma.font;
                    k = `${L}:${z}`;
                    const We = x.g.get(k);
                    if (void 0 !== We) var H = We;
                    else {
                      var va = x.i;
                      try {
                        va.save();
                        va.font = L;
                        const Xe = L.match(/([\d.]+)px/),
                          Ye = { width: va.measureText(z).width, height: Xe ? parseFloat(Xe[1]) : 12 };
                        x.g.set(k, Ye);
                        H = Ye;
                        break a;
                      } finally {
                        va.restore();
                      }
                      H = void 0;
                    }
                  }
                  const { width: na, height: Jh } = H;
                  var Kh = { width: na * v.a, height: Jh * v.d, left: t.left * v.a + v.e, top: t.top * v.d + v.f };
                }
                const da = {
                  sf: u,
                  data: null,
                  kind: void 0 === Lb ? 0 : Lb,
                  text: r,
                  position: n,
                  rect: Kh,
                  font: ma.font,
                  fillStyle: ma.fillStyle,
                  transform: ma.transform
                };
                if (ma.clip) {
                  const na = Qg(Rg(da.rect), ma.clip);
                  if (null === na || 0 === na.width || 0 === na.height) {
                    this.i && this.i.gd(g);
                    return;
                  }
                }
                this.i && this.i.ed(g, da);
                p.push(da);
              } else
                "translate" === m || "save" === m
                  ? "restore" === e.get(g) && f.set(g, 0)
                  : "setLineDash" === m && "save" === e.get(g) && f.set(g, 1);
            } finally {
              e.set(g, m);
            }
          }
        };
      b.i.add(h);
      this.Va.add(() => b.i.remove(h));
      this.Va.add(
        dh(() => {
          if (this.s) {
            this.i && this.i.fd();
            {
              const g = Og();
              for (const k of g) fh(this, k);
              this.s = !1;
              this.u++;
            }
          }
        })
      );
    }
  };
  function hh(a, b) {
    for (const c of a.i) if (c.Ea === b) return c;
  }
  var ih = class extends ca {
    constructor() {
      super(...arguments);
      this.i = [];
    }
    g() {
      super.g();
      this.clear();
    }
    add(a, b) {
      let c = hh(this, a);
      void 0 === c && ((c = { Ea: a, hb: [] }), this.i.push(c));
      -1 === c.hb.indexOf(b) && (c.hb.push(b), a.add(b));
    }
    remove(a, b) {
      const c = hh(this, a);
      void 0 !== c &&
        (c.hb.splice(c.hb.indexOf(b), 1),
        a.remove(b),
        0 === c.hb.length && ((a = hh(this, a)), void 0 !== a && ((a = this.i.indexOf(a)), -1 !== a && this.i.splice(a, 1))));
    }
    clear() {
      for (const a of this.i) for (const b of a.hb) a.Ea.remove(b);
      this.i = [];
    }
  };
  function jh(a, b) {
    a.l = Object.assign(Object.assign({}, a.l), b);
  }
  function kh(a, b) {
    a.g = b;
    a.i.clear();
    b && a.i.add(b.va, (c) => w(a.va, c));
    w(a.s);
  }
  var lh = class {
    constructor() {
      this.s = new y();
      this.va = new y();
      this.l = { Cc: !0 };
      this.i = new ih();
      this.g = null;
    }
    xb() {
      return this.g;
    }
    Ma() {
      return this.g ? this.g.Ma() : [];
    }
    Da() {
      return [];
    }
    sa(a) {
      return this.g ? this.g.sa(a) : [];
    }
  };
  function mh(a, b) {
    var c = 0;
    const d = [];
    for (;;) {
      c = a.indexOf(b, c);
      if (-1 === c) break;
      d.push(c);
      c += 1;
    }
    return d;
  }
  function nh(a) {
    let b = 0;
    for (let c = 0; c < a.i.length - 1; c++) {
      const d = a.g[c],
        e = a.g[c + 1],
        f = a.l.filter((g) => d < g && g < e),
        h = e - d;
      b += a.i[c + 1].start - a.i[c].end;
      b += -50 * f.length;
      b += 10 * (h - 1);
    }
    return (b += -50 * (a.g.length - 1));
  }
  function oh(a) {
    return a.i.reduce((b, c) => Math.max(b, c.end), 0);
  }
  function ph(a) {
    const b = new qh(a.l);
    b.g = a.g.slice();
    b.i = a.i.map((c) => ({ start: c.start, end: c.end }));
    b.na = a.na;
    return b;
  }
  class qh {
    constructor(a) {
      this.na = 0;
      this.g = [];
      this.i = [];
      this.l = a;
    }
    add(a, b) {
      this.g.push(a);
      this.i.push(b);
      this.na = nh(this);
    }
  }
  function rh(a) {
    return 0 === a.length
      ? a
      : ("\u202d" === a[0] && "\u202c" === a[a.length - 1]) || ("\u202e" === a[0] && "\u202c" === a[a.length - 1])
      ? a.substring(1, a.length - 1)
      : a;
  }
  function sh(a) {
    let b = "",
      c = a.length;
    for (let d = 0; d < c; d++) {
      if (55349 !== a.charCodeAt(d) || d === c - 1) {
        b += a[d];
        continue;
      }
      const e = a.charCodeAt(d + 1);
      56398 > e || 56449 < e ? (b += a[d]) : ((b += String.fromCharCode(e - 56398 + 97)), d++);
    }
    return b;
  }
  function th(a, b, c) {
    let d = [];
    const e = c.reduce((g, k, m) => {
      0 !== k.kind && g.push(m);
      return g;
    }, []);
    for (let g = 0; g < c.length; g++) {
      var f = c[g];
      let k = rh(f.text);
      a.g && (k = sh(k));
      if (0 === f.kind) {
        f = mh(b, k);
        var h = Array.from(d);
        for (const m of h) {
          if (m.g.includes(g)) continue;
          const n = oh(m);
          h = f.reduce((t, p) => (p < n ? t : null === t ? p : t > p ? p : t), null);
          if (null == h) continue;
          const q = ph(m);
          q.add(g, { start: h, end: h + k.length });
          d.push(q);
        }
        for (const m of f) (f = new qh(e)), f.add(g, { start: m, end: m + k.length }), d.push(f);
        3 < g &&
          (d = d
            .sort((m, n) => {
              const q = n.g.length - m.g.length;
              return 0 !== q ? q : m.na - n.na;
            })
            .slice(0, 5));
      }
    }
    return uh(a, b, c, d)
      .sort((g, k) => {
        const m = k.g.length - g.g.length;
        return 0 !== m ? m : g.na - k.na;
      })
      .slice(0, 5);
  }
  function uh(a, b, c, d) {
    for (const f of d) {
      for (let h = 0; h < f.g.length - 1; h++) {
        const g = f.g[h],
          k = f.g[h + 1] - g;
        if (1 >= k) continue;
        var e = f.i[h].end;
        const m = b.substring(e, f.i[h + 1].start);
        let n = 0;
        for (let q = 1; q < k; q++) {
          const t = g + q;
          let p = rh(c[t].text);
          a.g && (p = sh(p));
          const u = m.indexOf(p, n);
          -1 !== u && ((n = u + p.length), f.g.splice(h + 1, 0, t), f.i.splice(h + 1, 0, { start: e + u, end: e + u + p.length }), h++);
        }
      }
      f.na = nh(f);
    }
    return d;
  }
  var vh = class {
    constructor() {
      var a = { ye: !1 },
        b;
      this.g = null !== (b = null === a || void 0 === a ? void 0 : a.ye) && void 0 !== b ? b : !1;
    }
    match(a, b) {
      var c = mh(a, "\u0003");
      if (0 === c.length) return [];
      const d = c.map((h, g, k) => {
        h += 1;
        g = k.length - 1 === g ? a.length : k[g + 1];
        return { start: h, end: g, text: a.substring(h, g) };
      });
      c = th(this, d[0].text, b).reduce((h, g) => {
        const k = g.g.length,
          m = h.get(k) || [];
        m.push(g);
        h.set(k, m);
        return h;
      }, new Map());
      var e = Array.from(c.keys()).reduce((h, g) => Math.max(h, g), 0);
      c = c.get(e) || [];
      if (0 === c.length) return b.map(() => null);
      e = c.map((h, g) => ({ index: g, na: h.na })).sort((h, g) => h.na - g.na);
      const f = c[e[0].index];
      return b.map((h, g) => {
        h = f.g.indexOf(g);
        return -1 === h ? null : { start: f.i[h].start + d[0].start, end: f.i[h].end + d[0].start };
      });
    }
  };
  function wh() {
    const a = {};
    a.promise = new Promise((b, c) => {
      a.resolve = b;
      a.reject = c;
    });
    return a;
  }
  function xh(a) {
    var b;
    window.clearTimeout(a.s);
    const c = null !== (b = a.g) && void 0 !== b ? b : wh();
    a.s = window.setTimeout(() => {
      a.l = Date.now();
      a.g = null;
      a.i();
      c.resolve();
    }, 0);
    return c.promise;
  }
  var yh = class {
    constructor(a) {
      this.g = this.l = null;
      this.i = a;
    }
  };
  function zh(a) {
    l(a, function* () {
      yield xh(this.g);
    });
  }
  var Ah = class {
    constructor() {
      this.g = new yh(() => {
        document.dispatchEvent(new CustomEvent("webkitvisibilitychange", { cancelable: !1, bubbles: !1 }));
        document.dispatchEvent(new CustomEvent("focus", { cancelable: !1, bubbles: !0 }));
      });
    }
  };
  var Bh = class {
      constructor(a, b) {
        this.va = new y();
        this.C = new Ah();
        this.u = [];
        this.g = new Map();
        this.i = [];
        this.D = new OffscreenCanvas(0, 0);
        this.l = this.D.getContext("2d");
        this.A = a;
        this.s = b;
        zh(this.C);
      }
      hd(a, b) {
        this.i.includes(a) || this.i.push(a);
        const c = this.g.get(a);
        c
          ? ((a = c.Ca.indexOf(b)), c.Ca.splice(a, 1), c.items.splice(a, 1), (c.Ra = a), b.data && this.s.remove(b.data.eb()))
          : this.g.set(a, { Ca: [], items: [], Ra: null });
      }
      ed(a, b) {
        this.i.includes(a) || this.i.push(a);
        var c = Ya(b.text);
        c = { text: c, kind: 1 === b.kind || rh(c).match(/^(([a-zA-Z0-9]\.)+|[\w\W])$/) ? 1 : 0 };
        const d = this.g.get(a);
        d
          ? null !== d.Ra
            ? (d.Ca.splice(d.Ra, 0, b), d.items.splice(d.Ra, 0, c), d.Ra++)
            : (d.Ca.push(b), d.items.push(c))
          : this.g.set(a, { Ca: [b], items: [c], Ra: null });
      }
      gd() {}
      fd() {
        let a = !1;
        for (const b of this.i) {
          const c = this.g.get(b);
          if (!c) continue;
          c.Ra = null;
          const d = new vh().match(Qb(this.A), c.items);
          for (let e = 0; e < c.Ca.length; e++) {
            const f = c.Ca[e],
              h = d[e];
            if (!h) {
              f.data = null;
              continue;
            }
            a = !0;
            const g = { start: h.start, end: h.end };
            this.u.push(g);
            this.s.add(h);
            this.s.add(g);
            w(this.va, { start: h.start, end: h.end });
            f.data = {
              eb: () => h,
              we: () => h,
              sa: (k) => {
                if (k.start === k.end) return [];
                var m = k.start - h.start;
                const n = rh(f.text);
                var q = n.substring(0, m);
                k = n.substring(m, Math.min(k.end - h.start, h.end - h.start));
                this.l.font = f.font;
                this.l.fillStyle = f.fillStyle;
                k = this.l.measureText(k).width;
                m = (m = f.font.match(/([0-9\.]+)px/)) ? parseFloat(m[1]) : 12;
                q = this.l.measureText(q).width;
                return [
                  {
                    left:
                      "ltr" === (n.match(/[\u0591-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]+/) ? "rtl" : "ltr")
                        ? f.position.left + q
                        : f.position.left + this.l.measureText(n).width - q - k,
                    top: f.position.top - m - 0.5,
                    width: k,
                    height: 1.2 * m
                  }
                ];
              }
            };
          }
        }
        this.i = [];
        a &&
          Na(this.u, (b) => {
            this.s.remove(b);
          });
      }
      Ma() {
        var a = Og();
        const b = [];
        for (const c of a)
          if ((a = this.g.get(c))) for (const d of a.Ca) d.data && ((a = d.data.eb()), b.push({ start: a.start, end: a.end }));
        Na(b);
        return b;
      }
      Da() {
        return this.u;
      }
      sa(a) {
        const b = [];
        var c = Og();
        for (const e of c) {
          var d = this.g.get(e);
          if (d) {
            c = e.canvas.getBoundingClientRect();
            for (const f of d.Ca)
              if (f.data && ((d = f.data.eb()), (d = Ig(a, d)) && d.start !== d.end)) {
                d = f.data.sa(d);
                for (const h of d)
                  b.push({
                    left: h.left * f.transform.a + c.left,
                    top: h.top * f.transform.d + c.top,
                    width: h.width * f.transform.a,
                    height: h.height * f.transform.d
                  });
              }
          }
        }
        return b;
      }
    },
    Ch = class extends ca {
      constructor(a, b) {
        super();
        this.va = new y();
        this.l = new ih();
        this.i = new Bh(a, b);
        this.l.add(this.i.va, (c) => w(this.va, c));
      }
      g() {
        this.l.lc();
      }
      ad() {
        return this.i;
      }
      Ma() {
        return this.i.Ma();
      }
      Da() {
        return this.i.Da();
      }
      sa(a) {
        return this.i.sa(a);
      }
    };
  var Dh = class {
    zb(a) {
      const b = (c, d) => {
        try {
          a.zb(), c();
        } catch (e) {
          "complete" === document.readyState
            ? d(e)
            : setTimeout(() => {
                b(c, d);
              }, 100);
        }
      };
      return new Promise((c, d) => {
        b(c, d);
      });
    }
  };
  function Eh(a, b) {
    a = Array.from(a.g.keys());
    let c = 0;
    for (const d of b) {
      b = d[0];
      const e = d[1].length;
      if ("insert" === b) {
        for (const f of a) f.start >= c && (f.start += e), f.end >= c && (f.end += e);
        c += e;
      } else if ("delete" === b)
        for (const f of a) f.start >= c && (f.start = Math.max(f.start - e, c)), f.end >= c && (f.end = Math.max(f.end - e, c));
      else c += e;
    }
  }
  var Fh = class {
    constructor() {
      this.g = Qa() ? new jc() : new vc();
    }
    add(a) {
      this.g.set(a, !0);
    }
    remove(a) {
      this.g.delete(a);
    }
  };
  function Gh(a, b) {
    return a.M(a, b);
  }
  function Hh(a) {
    if (a.i && a.l) {
      var b = a.i.C.indexOf(a);
      -1 !== b && (a.i.C.splice(b, 1), (a.i = null), (a.l = null));
    }
  }
  function Ih(a, b) {
    if (a.i && a.l) return Ih(a.i, { start: a.l.start + b.start, end: a.l.start + b.end });
    var c = a.g.join("").length;
    b = { start: Math.min(Math.max(b.start, 0), c), end: Math.min(Math.max(b.end, 0), c) };
    c = new Lh(
      (d) => {
        let e = 0;
        const f = d.i;
        d = d.l;
        f && d && (e = Mh(f, { start: 0, end: d.start }));
        return a.u(a) + e;
      },
      (d, e) => {
        const f = d.g.join("").length;
        let h = 0;
        const g = d.i;
        d = d.l;
        g && d && (h = Mh(g, { start: 0, end: d.start }));
        return Gh(a, { start: h + Math.min(Math.max(e.start, 0), f), end: h + Math.min(Math.max(e.end, 0), f) });
      }
    );
    c.F = a.F;
    c.g = a.g.slice(b.start, b.end);
    c.s = a.s.slice(b.start, b.end);
    c.A = a.A.slice(b.start, b.end);
    c.i = a;
    c.l = b;
    a.C.push(c);
    return c;
  }
  function Mh(a, b) {
    return a.g.slice(b.start, b.end).join("").length;
  }
  function Nh(a, b) {
    if (!a.i || !a.l) return !1;
    const c = a.i,
      d = a.l;
    d.end = Math.min(d.end + b, c.g.length);
    a.g = c.g.slice(d.start, d.end);
    a.s = c.s.slice(d.start, d.end);
    a.A = c.A.slice(d.start, d.end);
    return !0;
  }
  var Lh = class {
    constructor(a, b) {
      this.g = [];
      this.A = [];
      this.s = [];
      this.F = !1;
      this.C = [];
      this.l = this.i = null;
      this.u = a;
      this.M = b;
    }
    get D() {
      if (!this.i) return null;
      const a = this.i.C.indexOf(this);
      return -1 === a || 0 === a ? null : this.i.C[a - 1];
    }
  };
  var Oh = class {
    g(a, b, c, d) {
      let e = 0;
      for (var f of b) (b = d.g.indexOf(f, e)), -1 !== b && (e = b + 1);
      f = Ih(d, { start: 0, end: e });
      d = Ih(d, { start: e, end: d.g.length });
      0 < d.g.length && c.unshift(d);
      a(f);
      return 0;
    }
  };
  var Ph = class {
    g(a, b, c, d) {
      var e = d.g.join("").indexOf(b);
      if (-1 === e && d.D) return Nh(d.D, d.g.length), Hh(d), 1;
      if (-1 !== e) {
        {
          var f = d.g;
          var h = e;
          b = e + b.length;
          e = 0;
          let m = null,
            n = 0;
          for (let q = 0; q < f.length; q++) {
            var g = n;
            var k = n + f[q].length;
            g = Math.max(h, g);
            k = Math.min(b, k);
            if ((k = g <= k ? { start: g, end: k } : null) && k.start !== k.end) null === m && (m = q), e++;
            else if (null !== m) break;
            n += f[q].length;
          }
          f = null === m ? { start: 0, end: e } : { start: m, end: m + e };
        }
        0 < f.start && ((h = d.D), (h && Nh(h, f.start)) || (f.start = 0));
        if (0 === f.end - f.start) return 0;
        a(Ih(d, f));
        f.end !== d.g.length && c.unshift(Ih(d, { start: f.end, end: d.g.length }));
        Hh(d);
      }
      return 0;
    }
  };
  function Qh(a, b) {
    return [b[0] * a.a + b[1] * a.c + a.e, b[0] * a.b + b[1] * a.d + a.f];
  }
  var Z = Symbol.for("@wizkids/FingerprintOriginalFunction");
  function* Rh(a) {
    for (const b in a) {
      const c = Object.getOwnPropertyDescriptor(a, b);
      if (c && c.value)
        try {
          const d = Z in c.value ? c.value[Z] : null;
          yield { key: b, value: d ? d.value : c.value };
        } catch (d) {}
    }
  }
  var Sh = class {
    qc() {
      const a = /function(?: [a-zA-Z0-9$_]+)?\([a-zA-Z0-9$_,]*\){(|this\.[a-zA-Z0-9$_]+=(.*?))/;
      var b = window;
      for (const { value: c } of Rh(b))
        if ("function" === typeof c && c.toString().match(a) && "prototype" in c) {
          b = c.prototype;
          for (const { key: d, value: e } of Rh(b)) {
            const f = e.toString();
            if (
              f.match(
                /function(?: [a-zA-Z0-9$_]+)?\(a,c\){[\w\W]+c\.getData\(\);[\w\W]+[a-zA-Z0-9$_\[\]\.]+(,[a-zA-Z0-9$_\[\]\.]+){3,}\)/
              ) &&
              f.includes("execute")
            )
              return [{ parent: b, key: d, value: e }];
          }
        }
      return [];
    }
  };
  function Th(a) {
    const b = a.s.qc();
    if (0 === b.length) return !1;
    for (const { parent: c, key: d, value: e } of b) {
      Z in c[d] ||
        ((c[d] = function () {
          const g = { callFunction: e, context: this, args: Array.from(arguments), result: void 0 };
          for (var k of c[d][Z].onBeforeCall)
            try {
              k(g);
            } catch (m) {
              console.error(m);
            }
          k = c[d][Z].value.apply(this, g.args);
          g.result = k;
          for (const m of c[d][Z].onAfterCall)
            try {
              m(g);
            } catch (n) {
              console.error(n);
            }
          return g.result;
        }),
        (c[d][Z] = {}),
        (c[d][Z].value = e),
        (c[d][Z].onBeforeCall = []),
        (c[d][Z].onAfterCall = []),
        (c[d][Z].uninstallIfEmpty = () => {
          0 < c[d][Z].onBeforeCall.length || 0 < c[d][Z].onAfterCall.length || (c[d] = c[d][Z].value);
        }));
      const f = (g) => {
          const k = { context: g.context, I: g.args, ne: g.callFunction };
          w(a.l, k);
          g.args = k.I;
        },
        h = (g) => {
          const k = { context: g.context, I: g.args, result: g.result, ne: g.callFunction };
          w(a.i, k);
          g.result = k.result;
        };
      c[d][Z].onBeforeCall.push(f);
      c[d][Z].onAfterCall.push(h);
      a.g.push(() => {
        const g = c[d][Z].onBeforeCall.indexOf(f);
        -1 !== g && c[d][Z].onBeforeCall.splice(g, 1);
      });
      a.g.push(() => {
        const g = c[d][Z].onAfterCall.indexOf(h);
        -1 !== g && c[d][Z].onAfterCall.splice(g, 1);
      });
      a.g.push(() => c[d][Z].uninstallIfEmpty());
    }
    return !0;
  }
  function Uh(a) {
    for (const b of a.g) b();
    a.g = [];
  }
  var Vh = class {
    constructor(a) {
      this.l = new y();
      this.i = new y();
      this.g = [];
      this.s = a;
    }
  };
  var Wh = class {
    constructor() {
      this.g = new Map();
    }
    get(a, b) {
      if (!this.g.has(a)) {
        b = b();
        if (!b) return null;
        this.g.set(a, b);
      }
      return this.g.get(a);
    }
    clear() {
      this.g.clear();
    }
  };
  var Xh = class {
    qc() {
      const a = [],
        b = window;
      for (const { key: c, value: d } of Rh(b)) {
        if ("function" !== typeof d) continue;
        const e = d.toString();
        e.match(/^function(?: [a-zA-Z0-9$_]+)?\(a,c,d,e,f\){return function\(\){a\.get\(\)\.([a-zA-Z0-9$_]+)\(/) &&
          (e.match(/scale|transform|rotate|translate/) || a.push({ parent: b, key: c, value: d }));
      }
      return a;
    }
  };
  var Yh = class {
    qc() {
      const a = [];
      var b = window;
      for (const { value: c } of Rh(b))
        if (c && "function" === typeof c && "prototype" in c) {
          b = c.prototype;
          for (const { key: d, value: e } of Rh(b)) {
            if ("function" !== typeof e) continue;
            const f = e.toString(),
              h = f.match(/\.execute\(/g);
            h && 2 <= h.length
              ? a.push({ key: d, parent: b, value: e })
              : f.includes(".getHeight()") &&
                f.includes(".save()") &&
                f.includes(".restore()") &&
                f.includes(".clear()") &&
                f.includes(".next()") &&
                f.includes(".done") &&
                a.push({ key: d, parent: b, value: e });
          }
        }
      return a;
    }
  };
  class Zh {
    constructor(a) {
      this.g = new WeakMap();
      this.i = new WeakMap();
      this.l = Qa() ? new jc() : new vc();
      this.s = a;
    }
    Da() {
      const a = [];
      for (const b of this.l.values()) a.push({ start: b.start, end: b.end });
      Na(a);
      return a;
    }
    Ma() {
      var a = Og();
      const b = [];
      for (const c of a) if ((a = this.i.get(c))) for (const d of a.values()) b.push({ start: d.start, end: d.end });
      Na(b);
      return b;
    }
    clear(a) {
      this.g.delete(a);
    }
    push(a, b) {
      const c = this.g.get(a);
      c ? c.push(b) : this.g.set(a, [b]);
    }
    fd() {}
    hd(a, b) {
      this.l.delete(b);
      if (b.data && (a = this.i.get(a))) {
        var c = a.get(b);
        c && this.s.remove(c);
        a.delete(b);
      }
    }
    gd(a) {
      (a = this.g.get(a)) && a.shift();
    }
    ed(a, b) {
      var c = this.g.get(a);
      c &&
        (c = c.shift()) &&
        ((b.data = c),
        (c = b.data.eb()),
        this.i.has(a) || this.i.set(a, new Map()),
        this.s.add(c),
        this.i.get(a).set(b, c),
        this.l.set(b, c));
    }
  }
  let $h = 0;
  function ai(a, { I: b }) {
    (() => {
      w(a.ya);
      var [, c] = b;
      const d = c.getData();
      if (d[nc]) {
        d[oc] !== $h &&
          ((c = (() => {
            for (const { key: k, value: m } of Rh(d)) if ("object" === typeof m && !Array.isArray(m) && "execute" in m) return k;
            return null;
          })()),
          null !== c && (d[c] = null),
          (d[oc] = $h));
        c = a.i.splice(0, a.i.length);
        for (var e of c) e.D && (Nh(e.D, e.g.length), Hh(e));
        if (
          (e = a.M.get("textDataPath", () => {
            a: {
              for (m in d) {
                var k = d[m];
                if (Array.isArray(k) && 0 !== k.length) {
                  k = k[0];
                  for (const n in k) if (!Array.isArray(k[n])) break a;
                }
              }
              var m = null;
            }
            return m;
          }))
        ) {
          e = d[e];
          c = !1;
          if (1 < e.length) {
            var f = e[0];
            for (var h in d)
              if (f === d[h]) {
                c = !0;
                break;
              }
          }
          if (0 !== e.length) {
            h = null;
            f = 0;
            for (let k = 0; k < e.length; k++) {
              const m = e[k];
              if (
                (() => {
                  for (const u in d) if (d[u] === m) return !0;
                  return !1;
                })()
              )
                continue;
              var g = Xa(m);
              if (!g) break;
              const n = g.yd,
                q = g.zd;
              g = g.cd;
              const t = f,
                p = () => {
                  var u = d[kc] + t;
                  const r = d[mc];
                  if (!r) return u;
                  for (const { type: v, index: x, length: z } of r.fc)
                    u < x || ("insert" === v ? (u += z) : "delete" === v && (u = Math.max(u - z, x)));
                  return u;
                };
              h || ((h = new Lh(p, (u, r) => d[nc](r))), (h.F = c), a.i.push(h));
              h.g = h.g.concat(n);
              h.A = h.A.concat(q);
              h.s = h.s.concat(g);
              f += n.join("").length;
            }
          }
        }
      } else a.s = new WeakMap();
    })();
    (() => {
      var [, c] = b;
      c = c.getData();
      if (!a.s.get(c))
        for (const d in c)
          if ("string" === typeof c[d]) {
            c[d] = {};
            a.s.set(c, !0);
            break;
          }
    })();
  }
  function bi(a, { I: b }) {
    if (!a.ra.Cc) {
      a = b[0].slice();
      const c = a.indexOf("spelling-error");
      -1 !== c && a.splice(c, 1);
      b[0] = a;
    }
  }
  function ci(a, { context: b }) {
    if (!a.s.get(b))
      for (const c of Object.keys(b.constructor.prototype)) {
        const d = b[c];
        if ("function" === typeof d && d.toString().match(/delete this\./)) {
          a.s.set(a, !0);
          b[c]("text-foreground");
          break;
        }
      }
  }
  function di(a, b, c, d, e, f, h) {
    let g = null;
    Array.isArray(d) ? (d = d.map((k) => Ya(k))) : (d = Ya(d));
    try {
      const k = () => {
        const m = a.i.shift();
        m && (m && m.F ? ((m.F = !1), a.i.unshift(m)) : 1 === (Array.isArray(d) ? new Oh() : new Ph()).g((n) => (g = n), d, a.i, m) && k());
      };
      k();
    } catch (k) {
      console.error(k);
    }
    return function () {
      let k = 0;
      try {
        if (null !== g && !a.C) {
          var m = () => {
            let n = [];
            var q = yg(),
              t = (p, u, r) => {
                if ("fillText" === u.G) {
                  var [v, x, z] = u.I;
                  n.push({ text: v, x, y: z });
                  r();
                  return new ba();
                }
              };
            q.g.add(t, { priority: 1e3 });
            try {
              b.apply(this, arguments);
            } catch (p) {
              console.error(p);
            }
            q.g.remove(t);
            t = q = 0;
            Array.isArray(d) ? ((q = n.map((p) => p.x)), (t = n.map((p) => p.y))) : 0 < n.length && ((q = n[0].x), (t = n[0].y));
            return { x: q, y: t };
          };
          if (Array.isArray(d) && Array.isArray(e) && Array.isArray(f) && Array.isArray(h)) {
            const { x: n, y: q } = m();
            m = [];
            for (let t = 0; t < e.length; t++) m.push({ text: d[t], x: e[t], y: f[t], md: n[t], xc: q[t], width: h[t] });
            k = ei(a, g, c, m);
          } else if (!(Array.isArray(d) || Array.isArray(e) || Array.isArray(f) || Array.isArray(h))) {
            const { x: n, y: q } = m();
            k = ei(a, g, c, { x: e, y: f, md: n, xc: q, width: h, text: d });
          }
        }
      } catch (n) {
        console.error(n);
      }
      if (0 === k) return b.apply(this, arguments);
    };
  }
  function ei(a, b, c, d) {
    const e = (() => {
      const r = c.get();
      for (const v in r) {
        if (r[v] instanceof CanvasRenderingContext2D) return r[v];
        if ("object" === typeof r[v]) for (const x in r[v]) if (r[v][x] instanceof CanvasRenderingContext2D) return r[v][x];
      }
      return null;
    })();
    if (!e) return 0;
    var f = b.g.join("");
    const h = b.u(b),
      g = f.length;
    w(a.va, { start: h, end: h + g });
    const k = Array.isArray(d) ? 0 : f.indexOf(d.text),
      m = (() => {
        if (Array.isArray(d) || 0 === b.g.length || -1 === k) return 0;
        let r = d.md;
        if (0 < k) {
          const v = Gh(b, { start: 0, end: k }),
            x = Gh(b, { start: k, end: k + 1 });
          0 < x.length && (r -= x[0].left - (v ? v[0].left : 0));
        }
        return (r -= Math.min(...b.s));
      })(),
      n = (() => (Array.isArray(d) ? d.map((r) => r.xc).reduce((r, v) => Math.max(r, v), 0) : d.xc))(),
      [q, t] = Qh(e.getTransform(), [m, n]);
    f = a.u.get(e) || [];
    f.push({ Ie: b, position: { left: q, top: t } });
    a.u.set(e, f);
    f = Array.isArray(d) ? d : [d];
    const p = f.reduce((r, v, x) => {
        x = b.g.join("").indexOf(v.text, 0 === x ? 0 : r[x - 1].end - h);
        -1 === x && (console.warn("Couldn't find fillText call in list of fill texts"), (x = 0));
        r.push({ start: h + x, end: h + x + v.text.length });
        return r;
      }, []),
      u = p.reduce((r, v, x, z) => {
        r.push({ start: 0 === x ? h : r[x - 1].end, end: x < z.length - 1 ? z[x + 1].start : h + g });
        return r;
      }, []);
    for (let r = 0; r < f.length; r++) {
      const v = () => {
        const x = b.u(b);
        return { start: u[r].start + (x - h), end: u[r].end + (x - h) };
      };
      a.l.push(e, {
        we: () => {
          const x = b.u(b);
          return { start: p[r].start + (x - h), end: p[r].end + (x - h) };
        },
        eb: v,
        sa: (x) => {
          var z = v(),
            L = Math.min(Math.max(x.start, z.start), z.end);
          x = Math.min(Math.max(x.end, z.start), z.end);
          z = b.u(b);
          L = { start: Math.max(L - z, 0), end: Math.max(x - z, 0) };
          return L.start === L.end
            ? []
            : Gh(b, L).map((H) => ({ left: H.left + m, top: n - H.height, width: H.width, height: 1.2 * H.height }));
        }
      });
    }
    return 0;
  }
  var fi = class extends ca {
    constructor(a) {
      super();
      this.va = new y();
      this.ya = new y();
      this.pa = new Ah();
      this.u = new WeakMap();
      this.ra = { Cc: !0 };
      this.M = new Wh();
      this.i = [];
      this.s = new WeakMap();
      this.F = new Vh(new Sh());
      this.D = new Vh(new Xh());
      this.A = new Vh(new Yh());
      this.l = new Zh(a);
      yg().g.add((b, c) => {
        if ("clearRect" === c.G || "fillRect" === c.G) {
          var [d, e, f, h] = c.I;
          if ((-1e8 === d && -1e8 === e && 2e8 === f && 2e8 === h) || (0 === d && 0 === e && f === b.canvas.width && h === b.canvas.height))
            this.u.delete(b), this.l.clear(b);
        }
      });
      this.F.l.add((b) => ai(this, b));
      this.D.i.add((b) => {
        {
          const c = b.I;
          if ("string" === typeof c[1] || Array.isArray(c[1])) {
            const [d, e, f, h, g] = c;
            b.result = di(this, b.result, d, e, f, h, g);
          }
        }
      });
      this.A.l.add((b) => bi(this, b));
      this.A.i.add((b) => ci(this, b));
    }
    g() {
      super.g();
      Uh(this.F);
      Uh(this.D);
      Uh(this.A);
    }
    Da() {
      return this.l.Da();
    }
    Ma() {
      return this.l.Ma();
    }
    sa(a) {
      const b = [];
      var c = Og();
      for (const e of c) {
        c = this.u.get(e) || [];
        for (const { Ie: f, position: h } of c) {
          var d = f.u(f);
          c = e.canvas.getBoundingClientRect();
          d = { start: Math.max(a.start - d, 0), end: Math.max(a.end - d, 0) };
          if (d.start !== d.end) {
            d = Gh(f, d);
            for (const g of d)
              b.push({ left: g.left + h.left + c.left, top: h.top - g.height + c.top, width: g.width, height: 1.2 * g.height });
          }
        }
      }
      return b;
    }
    ad() {
      return this.l;
    }
    zb() {
      if (!Th(this.F)) throw Error("Unable to install text renderer!");
      if (!Th(this.D)) throw Error("Unable to install renderer!");
      if (!Th(this.A)) throw Error("Unable to install render queue executor!");
      $h++;
      zh(this.pa);
    }
  };
  function gi(a) {
    if (!a.F) {
      const b = qb();
      a.F = b;
      b.pb.add((d) => {
        La("__onSelectionChange", vg(d));
      });
      b.ob.add((d) => {
        La("__onEquationBarVisibilityChange", d);
      });
      b.qb.add(() => {
        La("__onSpellCheckChange", {});
      });
      let c;
      b.rb.add((d, e) => {
        var f = Xb(new hc(), e, d);
        Eh(a.A, f);
        e = 0;
        for (const h of f)
          switch (((f = h[1].length), h[0])) {
            case "insert":
              hg(a.D, e, f);
              e += f;
              break;
            case "delete":
              ig(a.D, e, f);
              break;
            case "equal":
              e += f;
          }
        a.l = () => ({ paragraphStarts: Kb(b), text: d });
        window.clearTimeout(c);
        c = window.setTimeout(() => hi(a));
      });
    }
    return a.F;
  }
  function hi(a) {
    if (a.l) {
      window.clearTimeout(a.ya);
      var b = a.l();
      a.l = null;
      La("__onTextChange", b);
      eh(a.C);
    }
  }
  function ii(a) {
    return l(a, function* () {
      yield ji(this);
      yield ki(this);
      li(this);
    });
  }
  function mi() {
    var a = new ni();
    l(a, function* () {
      ea(this.ra, (b) => {
        a: {
          if (b.detail && "string" === typeof b.detail) {
            try {
              var c = JSON.parse(b.detail, Ga);
            } catch (f) {
              console.error(f);
              var d = void 0;
              break a;
            }
            if ("object" === typeof c && "string" === typeof c.id && "string" === typeof c.type && Array.isArray(c.args)) {
              b = c.id;
              var e = c.type;
              c = c.args;
              try {
                (d = oi(this, e, c)), La(b, d);
              } catch (f) {
                f instanceof Error ? Ma(b, f) : Ma(b, Error(f + ""));
              }
            }
          }
          d = void 0;
        }
        return d;
      });
      new Hg();
      yield ii(this);
      La("__onInitialized", { status: "SUCCESS" });
    });
  }
  function ji(a) {
    return l(a, function* () {
      yield this.M.zb(this.D);
    });
  }
  function ki(a) {
    return l(a, function* () {
      const b = (c) => {
        try {
          gi(this).R(), c();
        } catch (d) {
          window.setTimeout(() => b(c), 50);
        }
      };
      return new Promise((c) => {
        b(c);
      });
    });
  }
  function li(a) {
    l(a, function* () {
      yield pi(this, "default");
      let b = this.g;
      qi() && (yield pi(this, "fallback"));
      (() =>
        l(this, function* () {
          for (;;) {
            try {
              qi() ? "fallback" !== this.g && ((b = this.g), yield pi(this, "fallback")) : yield pi(this, b);
            } catch (c) {
              console.error(c);
            }
            yield new Promise((c) => window.setTimeout(c, 2e3));
          }
        }))();
    });
  }
  function ri(a) {
    return l(a, function* () {
      const b = this.g;
      b in this.s && (yield pi(this, this.s[b].oc));
    });
  }
  function pi(a, b) {
    return l(a, function* () {
      if (this.g !== b) {
        var c = this.i,
          d = c.xb();
        d && (kh(c, null), (this.C.i = null), d.Va.clear(), d.lc());
        if (b in this.s) {
          d = this.s[b];
          try {
            const e = yield d.xb();
            e.Va.add(() => ri(this));
            kh(c, e);
            this.C.i = e.ad();
            this.g = b;
          } catch (e) {
            console.error(e), pi(this, d.oc);
          }
        } else this.g = b;
      }
    });
  }
  function qi() {
    const a = document.querySelector("canvas.kix-canvas-tile-content");
    return a && a.parentElement ? !a.parentElement.classList.contains("kix-page-paginated") : !1;
  }
  function si(a, b) {
    b = b.map(([c, d]) => [
      c,
      {
        S: { start: d.range.start, end: d.range.end },
        zIndex: d.zIndex,
        backgroundColor: d.backgroundColor,
        borderLeftWidth: d.borderLeftWidth,
        borderLeftColor: d.borderLeftColor,
        borderTopWidth: d.borderTopWidth,
        borderTopColor: d.borderTopColor,
        borderRightWidth: d.borderRightWidth,
        borderRightColor: d.borderRightColor,
        borderBottomWidth: d.borderBottomWidth,
        borderBottomColor: d.borderBottomColor,
        Dc: d.textColor
      }
    ]);
    Jg(a.u, b);
  }
  function ti(a, b) {
    a = a.u;
    for (const c of b) a.g.delete(c);
    a.i = null;
    w(a.s, b);
    w(a.l);
  }
  function oi(a, b, c) {
    var d = gi(a);
    switch (b) {
      case "HvW5":
        return vg(d.getSelection());
      case "AurK":
        return (d = Hb(d, c[0], c[1])), wg(d);
      case "wnZK":
        return Qb(d);
      case "fXY1":
        return d.insertData(c[0], c[1]);
      case "gO78":
        a = tg(c[0]);
        if (null === a) throw Error("Unable to decode json for location!");
        return Ob(d, a);
      case "N+aV":
        return Kb(d);
      case "2u1z":
        return Sb(d, c[0]);
      case "zvZQ":
        return si(a, c[0]);
      case "L81W":
        return ti(a, c[0]);
      case "ppV+":
        return a.Da(0 < c.length ? c[0] : void 0);
      case "kQIP":
        return a.i.sa(ug(c[0])).map((e) => ({ left: e.left, top: e.top, width: e.width, height: e.height }));
      case "149D":
        jh(a.i, { Cc: c[0] });
        return;
      case "2SZD":
        return Array.from(Mb(gi(a)).entries()).map((e) => [e[0], wg(e[1])]);
      case "aBmO":
        pi(a, c[0]);
        return;
      case "YP+n":
        return a.g;
      case "wdbv":
        return mb(d.A).map((e) => xg(e));
      case "6cLn":
        return (d = nb(d.A, c[0])), null === d ? null : xg(d);
      case "K37Y":
        return (d = ob(d.A, c[0], c[1])), null === d ? null : xg(d);
      case "H6uf":
        return si(a, [[c[0], c[1]]]);
      case "32eB":
        return ti(a, [c[0]]);
      case "Myjb":
        return { text: "", data: [], positionedObjects: [] };
      case "kew8":
        return;
      case "HhSa":
        return [];
    }
    throw Error(`Unknown type ${b}!`);
  }
  var ni = class {
    constructor() {
      this.ra = new fa();
      this.g = "none";
      this.s = {
        ["default"]: {
          xb: () =>
            l(this, function* () {
              const a = new fi(this.A);
              yield this.M.zb(a);
              return a;
            }),
          oc: "fallback"
        },
        ["fallback"]: {
          xb: () =>
            l(this, function* () {
              return new Ch(gi(this), this.A);
            }),
          oc: "none"
        }
      };
      this.D = new sg();
      this.M = new Dh();
      this.i = new lh();
      this.u = new Mg();
      this.pa = new Ng();
      this.C = new gh(this.u, this.pa);
      this.A = new Fh();
      this.l = null;
      this.i.va.add((a) => {
        hi(this);
        La("__onTextRendered", { start: a.start, end: a.end });
      });
    }
    Da(a = !1) {
      const b = this.i.xb();
      return b ? (a ? b.Ma() : b.Da()) : [];
    }
  };
  const ui = compiler.VERSION;
  (function () {
    return l(this, function* () {
      const a = window;
      if ("wizkids-google-docs-integration" in a)
        a["wizkids-google-docs-integration"] !== ui && console.warn("Wizkids Google Docs integration version mismatch!");
      else {
        a["wizkids-google-docs-integration"] = ui;
        try {
          mi();
        } catch (b) {
          console.error(b);
        }
      }
    });
  })();
})();
