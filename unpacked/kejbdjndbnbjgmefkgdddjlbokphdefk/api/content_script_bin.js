(function () {
  "use strict"; /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var g = this || self,
    k = function (a, b) {
      function c() {}
      c.prototype = b.prototype;
      a.I = b.prototype;
      a.prototype = new c();
      a.prototype.constructor = a;
      a.H = function (d, e, f) {
        for (var h = Array(arguments.length - 2), m = 2; m < arguments.length; m++) h[m - 2] = arguments[m];
        return b.prototype[e].apply(d, h);
      };
    },
    l = function (a) {
      return a;
    };
  function n(a, b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, n);
    else {
      const c = Error().stack;
      c && (this.stack = c);
    }
    a && (this.message = String(a));
    void 0 !== b && (this.cause = b);
  }
  k(n, Error);
  n.prototype.name = "CustomError";
  function p(a, b) {
    a = a.split("%s");
    let c = "";
    const d = a.length - 1;
    for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
    n.call(this, c + a[d]);
  }
  k(p, n);
  p.prototype.name = "AssertionError";
  var q = function (a, b) {
    throw new p("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  };
  var r;
  var u = class {
      constructor(a, b) {
        if (b !== t) throw Error("TrustedResourceUrl is not meant to be built directly");
        this.s = a;
      }
      toString() {
        return this.s + "";
      }
    },
    v = function (a) {
      if (a instanceof u && a.constructor === u) return a.s;
      var b = typeof a;
      q(
        "expected object of type TrustedResourceUrl, got '%s' of type %s",
        a,
        "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null"
      );
      return "type_error:TrustedResourceUrl";
    },
    t = {},
    w = function (a) {
      if (void 0 === r) {
        var b = null;
        var c = g.trustedTypes;
        if (c && c.createPolicy)
          try {
            b = c.createPolicy("goog#html", { createHTML: l, createScript: l, createScriptURL: l });
          } catch (d) {
            g.console && g.console.error(d.message);
          }
        r = b;
      }
      a = (b = r) ? b.createScriptURL(a) : a;
      return new u(a, t);
    };
  var y = class {
      constructor(a) {
        if (x !== x) throw Error("SafeUrl is not meant to be built directly");
        this.G = a;
      }
      toString() {
        return this.G.toString();
      }
    },
    x = {};
  new y("about:invalid#zClosurez");
  new y("about:blank");
  const z = {};
  class A {
    constructor() {
      if (z !== z) throw Error("SafeStyle is not meant to be built directly");
      this.F = "";
    }
    toString() {
      return this.F.toString();
    }
  }
  new A();
  const B = {};
  class C {
    constructor() {
      if (B !== B) throw Error("SafeStyleSheet is not meant to be built directly");
      this.D = "";
    }
    toString() {
      return this.D.toString();
    }
  }
  new C();
  const D = {};
  class E {
    constructor() {
      var a = (g.trustedTypes && g.trustedTypes.emptyHTML) || "";
      if (D !== D) throw Error("SafeHtml is not meant to be built directly");
      this.C = a;
    }
    toString() {
      return this.C.toString();
    }
  }
  new E(); /*

 SPDX-License-Identifier: Apache-2.0
*/
  function F(a) {
    return Object.isFrozen(a) && Object.isFrozen(a.raw);
  }
  function G(a) {
    return -1 === a.toString().indexOf("`");
  }
  const H = G((a) => a``) || G((a) => a`\0`) || G((a) => a`\n`) || G((a) => a`\u0000`),
    I = F`` && F`\0` && F`\n` && F`\u0000`;
  class J {
    constructor(a) {
      this.v = a;
    }
  }
  const K = new J(
    (a) => 0 === a.indexOf("chrome-extension://") || 0 === a.indexOf("moz-extension://") || 0 === a.indexOf("ms-browser-extension://")
  );
  function aa(a) {
    var b = ba`api/tag_assistant_api_bin.js`;
    a = a.runtime.getURL(v(b).toString());
    a: if (((b = [K]), a instanceof y)) b = a;
    else {
      for (let c = 0; c < b.length; ++c) {
        const d = b[c];
        if (d instanceof J && d.v(a)) {
          b = new y(a);
          break a;
        }
      }
      b = void 0;
    }
    if (!b) throw Error('"' + a + '" is not an extension URL.');
    return w(a);
  }
  var L = class {
      constructor(a, b) {
        this.name = a;
        this.value = b;
      }
      toString() {
        return this.name;
      }
    },
    M = new L("OFF", Infinity),
    ca = new L("WARNING", 900),
    da = new L("CONFIG", 700),
    ea = class {
      constructor() {
        this.h = 0;
        this.clear();
      }
      clear() {
        this.l = Array(this.h);
        this.m = -1;
        this.o = !1;
      }
    },
    N,
    O = class {
      constructor(a, b, c) {
        this.reset(a || M, b, c, void 0, void 0);
      }
      reset(a, b) {
        this.B = b;
      }
      getMessage() {
        return this.B;
      }
    },
    P = function (a) {
      if (a.level) return a.level;
      if (a.parent) return P(a.parent);
      q("Root logger has no level set.");
      return M;
    },
    fa = function (a, b) {
      for (; a; )
        a.u.forEach((c) => {
          c(b);
        }),
          (a = a.parent);
    },
    Q = class {
      constructor(a, b = null) {
        this.level = null;
        this.u = [];
        this.parent = b || null;
        this.children = [];
        this.A = { j: () => a };
      }
    },
    R = function (a, b) {
      var c = a.entries[b];
      if (c) return c;
      c = R(a, b.slice(0, Math.max(b.lastIndexOf("."), 0)));
      const d = new Q(b, c);
      a.entries[b] = d;
      c.children.push(d);
      return d;
    },
    ha = class {
      constructor() {
        this.entries = {};
        const a = new Q("");
        a.level = da;
        this.entries[""] = a;
      }
    },
    S,
    T = function () {
      S || (S = new ha());
      return S;
    };
  const U = [];
  var V = (a) => {
    var b;
    if ((b = R(T(), "safevalues").A)) {
      var c = `A URL with content '${a}' was sanitized away.`,
        d = ca;
      if ((a = b))
        if ((a = b && d)) {
          a = d.value;
          var e = b ? P(R(T(), b.j())) : M;
          a = a >= e.value;
        }
      if (a) {
        d = d || M;
        a = R(T(), b.j());
        "function" === typeof c && (c = c());
        N || (N = new ea());
        e = N;
        b = b.j();
        if (0 < e.h) {
          var f = (e.m + 1) % e.h;
          e.m = f;
          e.o ? ((e = e.l[f]), e.reset(d, c, b), (b = e)) : ((e.o = f == e.h - 1), (b = e.l[f] = new O(d, c, b)));
        } else b = new O(d, c, b);
        fa(a, b);
      }
    }
  };
  -1 === U.indexOf(V) && U.push(V);
  function ia(a, b) {
    a.src = v(b);
    var c;
    let d;
    (c = (b =
      null == (d = (c = ((a.ownerDocument && a.ownerDocument.defaultView) || window).document).querySelector)
        ? void 0
        : d.call(c, "script[nonce]"))
      ? b.nonce || b.getAttribute("nonce") || ""
      : "") && a.setAttribute("nonce", c);
  }
  function ba(a, ...b) {
    if (
      !Array.isArray(a) ||
      !Array.isArray(a.raw) ||
      a.length !== a.raw.length ||
      (!H && a === a.raw) ||
      !((H && !I) || F(a)) ||
      b.length + 1 !== a.length
    )
      throw new TypeError(
        "\n    ############################## ERROR ##############################\n\n    It looks like you are trying to call a template tag function (fn`...`)\n    using the normal function syntax (fn(...)), which is not supported.\n\n    The functions in the safevalues library are not designed to be called\n    like normal functions, and doing so invalidates the security guarantees\n    that safevalues provides.\n\n    If you are stuck and not sure how to proceed, please reach out to us\n    instead through:\n     - go/ise-hardening-yaqs (preferred) // LINE-INTERNAL\n     - g/ise-hardening // LINE-INTERNAL\n     - https://github.com/google/safevalues/issues\n\n    ############################## ERROR ##############################"
      );
    if (0 === b.length) return w(a[0]);
    var c = a[0].toLowerCase();
    if (/^data:/.test(c)) throw Error("Data URLs cannot have expressions in the template literal input.");
    if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
      var d = c.indexOf("//") + 2;
      var e = c.indexOf("/", d);
      if (e <= d)
        throw Error("Can't interpolate data in a url's origin, Please make sure to fully specify the origin, terminated with '/'.");
      d = c.substring(d, e);
      if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("The origin contains unsupported characters.");
      if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("Invalid port number.");
      if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("The top-level domain must start with a letter.");
      d = !0;
    } else d = !1;
    if ((d = !d)) {
      if (/^\//.test(c))
        if ("/" === c || (1 < c.length && "/" !== c[1] && "\\" !== c[1])) d = !0;
        else throw Error("The path start in the url is invalid.");
      else d = !1;
      d = !d;
    }
    if (d) {
      if (/^about:blank/.test(c)) {
        if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("The about url is invalid.");
        c = !0;
      } else c = !1;
      d = !c;
    }
    if (d) throw Error("Trying to interpolate expressions in an unsupported url format.");
    c = a[0];
    for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
    return w(c);
  }
  var W = function (a, b) {
      a.g.document.documentElement.setAttribute("data-tag-assistant-present", b);
    },
    Y = function (a) {
      W(a, String(Date.now()));
      const b = a.g.document.createElement("script");
      ia(b, aa(a.i));
      a.g.document.documentElement.appendChild(b);
      b.remove();
      a.g.document.addEventListener("__TAG_ASSISTANT_API_MESSAGE", (c) => {
        var d = c.detail;
        a: {
          var e = null == d ? void 0 : d.type;
          if ("string" !== typeof e) e = !1;
          else
            switch (e) {
              case "PIPE_MESSAGE":
              case "DISCONNECT":
              case "API_INSTALLED":
              case "WINDOWS_CLOSED":
              case "CHECK_DEBUG":
              case "RECONNECT":
                e = !0;
                break a;
              default:
                e = !1;
            }
        }
        if (e)
          a: if (((d = null == d ? void 0 : d.source), "string" !== typeof d)) e = !1;
          else
            switch (d) {
              case "PAGE":
              case "EXTENSION":
                e = !0;
                break a;
              default:
                e = !1;
            }
        if (e && ((c = c.detail), "PAGE" === c.source))
          switch (c.type) {
            case "API_INSTALLED":
              X(a);
              break;
            case "PIPE_MESSAGE":
              c.origin = a.g.origin;
              var f = c.data;
              a.enableUntaggedPageReporting && "PAGE_SUMMARY" === f.type && (f.data.emoji = a.emoji);
              let h;
              null == (h = a.port) || h.postMessage(c);
              break;
            case "DISCONNECT":
              null == (f = a.port) || f.disconnect(), (a.port = void 0);
          }
      });
    },
    ja = function () {
      var a = Z;
      W(a, `${"pending:"}${Date.now()}`);
      a.i.runtime.sendMessage({ type: "CHECK_DEBUG", startDebug: !1, source: "PAGE", referrer: a.g.document.referrer }, (b) => {
        const c = b.startDebug;
        c ? ((a.tagAssistantTabId = b.tagAssistantTabId), (a.emoji = b.emoji), Y(a)) : W(a, "");
        b = new CustomEvent("TADebugSignal", { detail: { startDebug: c } });
        a.g.document.dispatchEvent(b);
      });
    },
    X = function (a) {
      a.port = a.i.runtime.connect();
      a.port.onDisconnect.addListener(() => {
        a.tagAssistantTabId
          ? a.port &&
            (a.i.runtime.sendMessage({ type: "RECONNECT", tagAssistantTabId: a.tagAssistantTabId, emoji: a.emoji, source: "PAGE" }), X(a))
          : (a.port = void 0);
      });
      ka(a);
    },
    ka = function (a) {
      let b;
      null == (b = a.port) ||
        b.onMessage.addListener((c) => {
          var d = c.data;
          if ("PING" !== d.type) d = !1;
          else {
            var e, f;
            d = null != (f = null == (e = d.flags) ? void 0 : e.enableUntaggedPageReporting) ? f : !1;
          }
          d && (a.enableUntaggedPageReporting = !0);
          a.g.document.dispatchEvent(new CustomEvent("__TAG_ASSISTANT_API_MESSAGE", { detail: c }));
        });
    };
  const Z = new (class {
    constructor(a, b) {
      this.i = a;
      this.g = b;
      this.enableUntaggedPageReporting = !1;
    }
  })(chrome, window);
  3 === chrome.runtime.getManifest().manifest_version ? ja() : Y(Z);
}).call(this);
