(function () {
  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var k = function (a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  };
  /[?&]tc=([01])/.exec(location.search || "") ||
    0 <= (navigator.userAgent || "").indexOf("Android") ||
    (window.matchMedia && window.matchMedia("(pointer)").matches && window.matchMedia("(pointer:coarse)"));
  var m = class {
      constructor(a) {
        this.T = a;
      }
    },
    r = new m("A"),
    aa = new m("BUTTON"),
    u = new m("DIV"),
    ba = new m("FORM"),
    ca = new m("H3"),
    da = new m("IMG"),
    ea = new m("INPUT"),
    fa = new m("SPAN"),
    ha = new m("TABLE"),
    ia = new m("TH");
  function v(a, b) {
    a = document.createElement(a.T);
    a.className = b;
    return a;
  }
  function w(a, b) {
    a = document.createElement(a.T);
    a.id = b;
    return a;
  }
  function x(a, b, c = "") {
    const d = document.createElement(r.T);
    d.href = a && a.match(ja) ? a : "javascript:void(0)";
    d.textContent = b;
    c && (d.className = c);
    return d;
  }
  const ja = /^(?:https?:|[^:/?#]*(?:[/?#]|$))/i,
    ka = /^(?:#|\/[a-z0-9_-]*(?:[?].*)?$)/i;
  function z(a, b) {
    const c = b.length;
    for (let d = 0; d < c; d++) a.appendChild(b[d]);
  }
  const A = /([?&]oi=)([^&]+)/;
  function B(a) {
    return (a.match(A) || ["", "", ""])[2];
  }
  function D(a) {
    return a.replace(A, "$1gsb" + ("gsb20" >= B(a) ? "00" : "50"));
  }
  function E(a, b) {
    return D(a) == D(b);
  }
  function la(a, b, c) {
    var d = new XMLHttpRequest();
    d.open(b ? "POST" : "GET", "https://scholar.google.com/" + a, !0);
    d.onreadystatechange = () => {
      4 == d.readyState && c(d.status, d.responseText);
    };
    d.timeout = 3e4;
    b && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    b ? d.send(b) : d.send();
  }
  function F(a, b) {
    let c = null;
    if (200 == a) {
      try {
        c = JSON.parse(b);
      } catch (d) {}
      if ("object" != typeof c || c instanceof Array) c = null;
    }
    return c;
  }
  var G = class {
      constructor(a, b, c) {
        this.type = a;
        this.link = b;
        this.time = c;
      }
    },
    H = class {
      constructor(a, b) {
        this.da = a;
        this.time = b;
      }
    },
    J = function (a) {
      const b = a.j.slice(a.o + 1);
      a.j = a.j.slice(0, a.o + 1);
      const c = a.O();
      var d = a.j.length - 20;
      let e = 0;
      for (; e < a.j.length && 36e5 < c - a.j[e].time; ) e += 1;
      d = Math.max(d, e);
      0 < d && (b.push(...a.j.slice(0, d)), (a.j = a.j.slice(d, a.o + 1)), (a.o = Math.max(a.o - d, -1)));
      I(a, b);
      for (let f in a.C) 36e5 < c - a.C[f].time && delete a.C[f];
    },
    I = function (a, b) {
      const c = {};
      for (var d = 0; d < a.j.length; d++) c[a.j[d].link] = !0;
      for (d = 0; d < b.length; d++) {
        const e = b[d].link;
        c[e] || (a.P["history-link-" + D(e)] = null);
      }
    },
    L = function (a) {
      return a.j[a.o] || new G("home", "", a.O());
    },
    M = function (a, b, c) {
      a.P["history-link-" + D(b)] = c;
    },
    N = function (a, b, c) {
      a.C[b] = new H(c, a.O());
    },
    ma = class {
      constructor() {
        var a = Date.now;
        this.j = [];
        this.o = -1;
        this.C = {};
        this.P = {};
        this.O = a;
      }
      add(a, b) {
        (-1 != this.o && E(this.j[this.o].link, b)) || ((this.o += 1), (this.j[this.o] = new G(a, b, this.O())), J(this));
      }
      replace(a, b) {
        if (!(0 > this.o)) {
          --this.o;
          var c = this.j.slice(this.o + 1);
          this.j = this.j.slice(0, this.o + 1);
          I(this, c);
          this.add(a, b);
        }
      }
      clear() {
        const a = this.j;
        this.j = [];
        this.o = -1;
        this.C = {};
        I(this, a);
      }
      goForward() {
        this.o + 1 < this.j.length && (this.o += 1);
      }
      goBack() {
        0 < this.o && --this.o;
      }
    };
  var na = function (a, b) {
    a.ea.textContent = b;
    b = a.ea.innerHTML;
    return b.replace(a.ka, (c, d) => "<" + d + ">").replace(a.ja, (c, d) => "&" + d + ";");
  };
  class oa {
    constructor() {
      this.ka = /&lt;(\/?(b|i|em|br))&gt;/gi;
      this.ja = /&amp;([a-z0-9]+|#[0-9]+);/gi;
      this.ea = document.createElement("div");
    }
  }
  var pa = function (a) {
      a.S.get(["authuser", "history", "history-index", "history-patch-map"], (b) => {
        b = b || {};
        a.V = b.authuser || "0";
        var c = a.j,
          d = b["history-index"],
          e = b["history-patch-map"];
        if ("number" == typeof d && Number.isInteger(d)) {
          b = b.history;
          var f = [];
          if (Array.isArray(b))
            for (var h = 0; h < b.length; h++) {
              var g = b[h];
              "string" == typeof g.t && "string" == typeof g.l && "number" == typeof g.s && f.push(new G(g.t, g.l, g.s));
            }
          c.j = f;
          c.o = 0 <= d && d < c.j.length ? d : -1;
          d = {};
          if (Array.isArray(e))
            for (b = 0; b < e.length; b++)
              (f = e[b]), "string" == typeof f.d && "string" == typeof f.c && "number" == typeof f.t && (d[f.d] = new H(f.c, f.t));
          c.C = d;
        }
        J(c);
        c = document.body;
        c.setAttribute("dir", a.A.getMessage("@@bidi_dir"));
        c.innerHTML = "";
        e = w(u, "header");
        d = w(aa, "search-button");
        d.type = "submit";
        z(a.F, [a.ca]);
        z(a.Z, [d, a.R, a.F]);
        z(e, [a.Z]);
        b = w(u, "middle");
        z(b, [a.B, a.N]);
        f = w(u, "footer");
        h = w(u, "progress-inc");
        g = w(u, "progress-dec");
        z(a.ia, [h, g]);
        h = w(u, "footer-buttons");
        for (const l of [a.D, a.G]) l.setAttribute("href", "#"), l.setAttribute("role", "button");
        O(a);
        P(a, "");
        a.aa.setAttribute("href", "/scholar_settings?oi=gsb&" + Q(a));
        a.Y.setAttribute("href", "/scholar?scilib=1&" + Q(a));
        z(h, [a.D, a.G, a.H, a.Y, a.aa]);
        z(f, [a.I, a.ia, h]);
        z(c, [e, b, f]);
        document.title = a.A.getMessage("853");
        d.title = a.A.getMessage("920");
        a.F.title = a.A.getMessage("1300");
        a.D.title = a.A.getMessage("1298");
        a.G.title = a.A.getMessage("1299");
        a.Y.title = a.A.getMessage("732");
        a.H.title = a.A.getMessage("1108");
        a.aa.title = a.A.getMessage("1301");
        a.Z.addEventListener("submit", a.na.bind(a));
        c.addEventListener("click", a.fa.bind(a));
        c.addEventListener("auxclick", a.fa.bind(a));
        c.addEventListener("focus", a.la.bind(a), !0);
        R(a, !0);
        void 0 !== a.ha && S(a, a.ha);
      });
    },
    O = function (a) {
      a.D.classList.toggle("disabled", !(0 < a.j.o));
      var b = a.j;
      a.G.classList.toggle("disabled", !(b.o + 1 < b.j.length));
    },
    P = function (a, b) {
      b = b
        .replace(/([?&])(output|hl|authuser)=[^&]*/g, "$1")
        .replace(/([?&])&+/g, "$1")
        .replace(/&$/, "");
      a.H.setAttribute("href", "/" + (b + (0 <= b.indexOf("?") ? "&" : "?")) + (B(b) ? "" : "oi=gsb&") + (b ? "lookup=0&" : "") + Q(a));
    },
    Q = function (a) {
      const b = "0" == a.V ? "" : "&authuser=" + a.V;
      a = a.A.getMessage("@@ui_locale");
      return "hl=" + (qa[a] || a) + b;
    },
    R = function (a, b) {
      document.body.classList.toggle("busy", b);
      T(a, "");
      U(a, "");
      a.N.classList.toggle("busy", b);
    },
    S = function (a, b) {
      V(a, b);
      a.R.focus();
      P(a, "gsb20" >= B(b) ? "?oi=gsb00" : b);
      W(a, b || "scholar?oi=gsb00&q=");
    },
    T = function (a, b) {
      a.N.textContent = b;
    },
    U = function (a, b, c = "") {
      clearTimeout(a.ga);
      a.ga = setTimeout(() => {
        a.I.innerHTML = "";
      }, 3e3);
      a.I.innerHTML = b;
      a.I.className = c;
    },
    ra = function (a) {
      T(a, a.A.getMessage("1107") + " ");
      a.N.appendChild(x(a.H.getAttribute("href"), a.A.getMessage("1108")));
    },
    X = function (a) {
      var b = sa;
      b.V ? S(b, a) : (b.ha = a);
    },
    V = function (a, b) {
      b = ta(b);
      a.R.value = b;
    },
    W = function (a, b) {
      R(a, !0);
      b = b + (0 <= b.indexOf("?") ? "&" : "?") + "output=gsb&" + Q(a);
      a.j.add("search", b);
      Y(a);
      O(a);
      a.J(b, "", a.X.bind(a, b));
    },
    Y = function (a) {
      const b = {},
        c = [];
      var d = a.j;
      const e = d.P;
      var f = d.j,
        h = [];
      for (let g = 0; g < f.length; g++) {
        const l = f[g];
        h.push({ t: l.type, l: l.link, s: l.time });
      }
      e.history = h;
      e["history-index"] = d.o;
      f = d.C;
      h = [];
      for (let g in f) h.push({ d: g, c: f[g].da, t: f[g].time });
      e["history-patch-map"] = h;
      d.P = {};
      for (let g in e) null != e[g] ? (b[g] = e[g]) : c.push(g);
      a.S.set(b);
      a.S.remove(c);
    },
    ua = function (a, b) {
      R(a, !0);
      b = "scholar?q=info:" + encodeURIComponent(b) + ":scholar.google.com/&output=gsb-cite&" + Q(a);
      a.j.add("cite", b);
      Y(a);
      O(a);
      P(a, b);
      V(a, b);
      a.J(b, "", a.W.bind(a, b));
    },
    va = function (a, b) {
      return (
        "#citations?update_op=library_add&citilm=1&xsrf=" +
        encodeURIComponent(a.ba) +
        "&info=" +
        encodeURIComponent(b) +
        "&user=" +
        encodeURIComponent(a.K) +
        "&" +
        Q(a)
      );
    },
    wa = function (a, b) {
      return (
        "#citations?update_op=trash_citations&citilm=1&json=&xsrf=" +
        encodeURIComponent(a.ba) +
        "&s=" +
        encodeURIComponent(a.K) +
        ":" +
        encodeURIComponent(b) +
        "&" +
        Q(a)
      );
    },
    xa = function (a, b, c) {
      b.classList.contains("spin") || (b.classList.add("spin"), (a.I.innerHTML = ""), a.J(c, "", a.ma.bind(a, b)));
    },
    ta = function (a) {
      if ("gsb20" >= B(a) || 0 < a.indexOf("&output=gsb-cite")) return "";
      a = (a.match(/^.*[?&]q=([^&]+).*$/) || ["", ""])[1];
      return decodeURIComponent(a.replace(/[+]/g, "%20"));
    },
    Z = function (a, b) {
      return na(a.pa, (b || "") + "");
    },
    ya = function (a, b, c, d) {
      const e = "history-link-" + D(b);
      a.S.get(e, (f) => {
        f = (f || {})[e];
        "string" == typeof f ? c(f) : d();
      });
    };
  class za {
    constructor(a, b) {
      var c = new Aa();
      this.A = new Ba();
      this.oa = a;
      this.J = b;
      this.pa = new oa();
      this.S = c;
      this.H = w(r, "full-screen");
      this.aa = w(r, "settings");
      this.Y = w(r, "library");
      this.D = w(r, "back");
      this.G = w(r, "forward");
      this.F = w(r, "account");
      this.ca = w(da, "account-img");
      this.ia = w(u, "progress");
      this.Z = w(ba, "search-form");
      this.R = w(ea, "search-box");
      this.B = w(u, "main");
      this.N = w(u, "message");
      this.I = w(u, "library-message");
      this.ba = this.K = "";
      this.ga = 0;
      this.j = new ma();
      pa(this);
    }
    X(a, b, c, d = !1) {
      function e(K, C) {
        K && (C.firstChild && C.appendChild(document.createTextNode(" ")), C.appendChild(K));
      }
      if (E(L(this.j).link, a)) {
        this.B.innerHTML = "";
        R(this, !1);
        var f = F(b, c) || {};
        b = f.r;
        if (b instanceof Array && !f.L) {
          var h = Math.min(b.length, 3);
          this.K = (f.u || "") + "";
          this.ba = (f.x || "") + "";
          this.ca.src = (f.p || "") + "" || "https://lh3.googleusercontent.com/a/default-user=s64";
          this.F.setAttribute(
            "href",
            "https://accounts.google.com/" +
              (this.K ? "SignOutOptions" : "Login") +
              "?continue=" +
              encodeURIComponent("https://scholar.google.com" + this.H.getAttribute("href")) +
              "&" +
              Q(this)
          );
          if (!d && !ta(a) && !a.match(/[?&]title=/)) {
            if (0 >= h || !f.h) {
              this.j.replace("home", "");
              O(this);
              Y(this);
              return;
            }
            P(this, a);
          }
          M(this.j, L(this.j).link, c);
          for (a = 0; a < h; a++) {
            var g = b[a];
            if (!k(g)) continue;
            var l = Z(this, g.t),
              y = (g.u || "") + "";
            const K = Z(this, g.x);
            var t = Z(this, g.m),
              p = Z(this, g.s),
              n = g.l || {};
            if (l && k(n)) {
              c = {};
              for (let C in n) (f = n[C]), k(f) && (c[C] = x((f.u || "") + "", (f.l || "") + "", C));
              f = v(u, "result");
              var q = void 0;
              if (this.K && n.f && k(n.f) && n.f.u && ((g = (g.c || "") + ""), (n = (n.f.u + "").substring(2)))) {
                if ((q = this.j.C[n])) d ? (g = q.da) : N(this.j, n, g);
                g
                  ? ((q = x(wa(this, g), "", "library-star")), q.classList.add("saved"), q.setAttribute("title", this.A.getMessage("96")))
                  : ((q = x(va(this, n), "", "library-star")), q.setAttribute("title", this.A.getMessage("64")));
                q.setAttribute("data-docid", n);
              }
              n = v(ca, "result-title");
              g = "";
              K && ((g = v(fa, "result-marker")), (g.innerHTML = "[" + K + "]"), (g = g.outerHTML + " "));
              l = g + l;
              y ? ((y = x(y, l)), (y.innerHTML = l), n.appendChild(y)) : (n.innerHTML = l);
              f.appendChild(n);
              t && ((y = v(u, "result-metadata")), (y.innerHTML = t), f.appendChild(y));
              p && 1 == h && ((t = v(u, "result-snippet")), (t.innerHTML = p), f.appendChild(t));
              p = v(u, "result-links");
              q &&
                ((q.innerHTML =
                  '<svg viewBox="0 0 16 16"><path d="M8 11.57l3.824 2.308-1.015-4.35 3.379-2.926-4.45-.378L8 2.122 6.261 6.224l-4.449.378 3.379 2.926-1.015 4.35z"/></svg>'),
                q.setAttribute("role", "button"),
                e(q, p));
              if ((t = c.f))
                (t.innerHTML =
                  '<svg viewBox="0 0 16 16"><path d="M1.5 3.5v5h2v.375L1.75 12.5h3L6.5 8.875V3.5zM9.5 3.5v5h2v.375L9.75 12.5h3L14.5 8.875V3.5z"/></svg>' +
                  t.innerHTML),
                  t.setAttribute("role", "button"),
                  e(t, p);
              e(c.c, p);
              e(c.r, p);
              e(c.v, p);
              p.firstChild && f.appendChild(p);
              p = v(u, "result-access");
              e(c.g, p);
              e(c.l, p);
              p.firstChild && f.appendChild(p);
              this.B.appendChild(f);
            }
          }
          this.B.firstChild || T(this, this.A.getMessage("1109"));
          Y(this);
        } else ra(this);
      }
    }
    W(a, b, c) {
      if (E(L(this.j).link, a)) {
        this.B.innerHTML = "";
        R(this, !1);
        var d = F(b, c) || {};
        b = d.l;
        a = d.i || [];
        if (b instanceof Array && a instanceof Array && !d.L) {
          d = Math.min(b.length, 5);
          M(this.j, L(this.j).link, c);
          Y(this);
          c = w(ha, "cite");
          for (var e = 0; e < d; e++) {
            var f = b[e];
            if (!k(f)) continue;
            var h = Z(this, f.l);
            f = Z(this, f.h);
            if (!h || !f) continue;
            const g = c.insertRow();
            g.tabIndex = 0;
            const l = document.createElement(ia.T);
            l.scope = "row";
            l.innerHTML = h;
            g.appendChild(l);
            g.insertCell(-1).innerHTML = f;
          }
          b = Math.min(a.length, 5);
          d = w(u, "import");
          for (e = 0; e < b; e++)
            (h = a[e]),
              k(h) && (d.firstChild && d.appendChild(document.createTextNode(" ")), d.appendChild(x((h.u || "") + "", (h.l || "") + "")));
          c.firstChild ? (this.B.appendChild(c), this.B.appendChild(d)) : T(this, this.A.getMessage("1109"));
        } else ra(this);
      }
    }
    ma(a, b, c) {
      a.classList.remove("spin");
      const d = F(b, c) || {};
      c = a.getAttribute("data-docid") || "";
      const e = a.classList.contains("saved");
      d.L
        ? ((a = this.A.getMessage(e ? "1289" : "1287")), U(this, a, "error"))
        : d.M
        ? U(this, "" + d.M, "error")
        : 200 == b && e && c
        ? (a.classList.remove("saved"),
          a.setAttribute("href", va(this, c)),
          a.setAttribute("title", this.A.getMessage("64")),
          N(this.j, c, ""))
        : Array.isArray(d.U) && 1 == d.U.length && k(d.U[0]) && !e
        ? (a.classList.add("saved"),
          (b = d.U[0].c.split(":")[1] || ""),
          a.setAttribute("href", wa(this, b)),
          a.setAttribute("title", this.A.getMessage("96")),
          N(this.j, c, b),
          U(this, this.A.getMessage("1285", ['<a href="/scholar?scilib=1&' + Q(this) + '">', "</a>"])))
        : ((a = this.A.getMessage(e ? "1289" : "1287")), U(this, a, "error"));
      Y(this);
    }
    na(a) {
      const b = "scholar?oi=gsb95&q=" + encodeURIComponent(this.R.value);
      P(this, b);
      W(this, b);
      a.preventDefault();
    }
    fa(a) {
      if (!(1 < a.button)) {
        var b = document.body;
        for (let c = a.target; c != b; c = c.parentElement) {
          const d = (1 == c.nodeType && c.getAttribute("href")) || "";
          if (c.classList.contains("disabled")) {
            a.preventDefault();
            break;
          } else if (c == this.D || c == this.G) {
            a.preventDefault();
            c == this.D ? this.j.goBack() : this.j.goForward();
            const e = L(this.j);
            "home" == e.type
              ? ((this.B.innerHTML = ""), R(this, !1))
              : "search" == e.type
              ? ya(
                  this,
                  e.link,
                  (f) => {
                    this.X(e.link, 200, f, !0);
                  },
                  () => {
                    R(this, !0);
                    this.J(e.link, "", this.X.bind(this, e.link));
                  }
                )
              : "cite" == e.type &&
                ya(
                  this,
                  e.link,
                  (f) => {
                    this.W(e.link, 200, f);
                  },
                  () => {
                    R(this, !0);
                    this.J(e.link, "", this.W.bind(this, e.link));
                  }
                );
            P(this, e.link);
            V(this, e.link);
            O(this);
            Y(this);
            break;
          } else if ("#f" == d.substr(0, 2)) {
            a.preventDefault();
            ua(this, d.substr(2));
            break;
          } else if ("#c" == d.substr(0, 2)) {
            a.preventDefault();
            xa(this, c, d.substr(1));
            break;
          } else if (d) {
            a.preventDefault();
            c == this.F && (this.j.clear(), Y(this));
            this.oa(("/" == d[0] ? "https://scholar.google.com" : "") + d);
            break;
          }
        }
      }
    }
    la(a) {
      a = a.target;
      if ("TR" == a.nodeName) {
        const b = a.querySelector("td");
        b &&
          setTimeout(() => {
            window.getSelection().selectAllChildren(b);
          }, 20);
      }
    }
  }
  class Ba {
    getMessage(a, b) {
      return chrome.i18n.getMessage(a, b);
    }
  }
  var qa = { en_GB: "en", en_US: "en", es_419: "es", fil: "tl", he: "iw", pt_BR: "pt-BR", pt_PT: "pt-PT", zh_CN: "zh-CN", zh_TW: "zh-TW" };
  class Aa {
    get(a, b) {
      chrome.storage.local.get(a, (c) => {
        b(chrome.runtime.lastError ? null : c);
      });
    }
    set(a) {
      chrome.storage.local.set(a, function () {});
    }
    remove(a) {
      chrome.storage.local.remove(a);
    }
  }
  const sa = new za(
    (a) => {
      chrome.tabs.create({ url: a });
    },
    (a, b, c) => {
      la(a, b, c);
    }
  );
  chrome.runtime.onMessage.addListener((a) => {
    a = (a || "") + "";
    (!a || (("/" + a).match(ka) && /^(scholar|scholar_lookup)[?]\S*$/.test(a))) && X(a);
  });
  chrome.tabs.query({ active: !0, currentWindow: !0 }, (a) => {
    0 >= a.length ||
      chrome.scripting.executeScript({ target: { tabId: a[0].id }, files: ["contentscript_isolated-compiled.js"] }, () => {
        chrome.runtime.lastError
          ? X("")
          : chrome.scripting.executeScript({ target: { tabId: a[0].id }, files: ["contentscript_main-compiled.js"], world: "MAIN" }, () => {
              chrome.runtime.lastError && X("");
            });
      });
  });
}).call(this);
