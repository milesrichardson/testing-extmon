/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/css-tree@2.2.1/dist/csstree.esm.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var ts = Object.create;
var nr = Object.defineProperty;
var rs = Object.getOwnPropertyDescriptor;
var ns = Object.getOwnPropertyNames;
var os = Object.getPrototypeOf,
  is = Object.prototype.hasOwnProperty;
var Oe = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
  b = (e, t) => {
    for (var r in t) nr(e, r, { get: t[r], enumerable: !0 });
  },
  as = (e, t, r, n) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let o of ns(t)) !is.call(e, o) && o !== r && nr(e, o, { get: () => t[o], enumerable: !(n = rs(t, o)) || n.enumerable });
    return e;
  };
var ss = (e, t, r) => (
  (r = e != null ? ts(os(e)) : {}), as(t || !e || !e.__esModule ? nr(r, "default", { value: e, enumerable: !0 }) : r, e)
);
var Zo = Oe((hr) => {
  var $o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  hr.encode = function (e) {
    if (0 <= e && e < $o.length) return $o[e];
    throw new TypeError("Must be between 0 and 63: " + e);
  };
  hr.decode = function (e) {
    var t = 65,
      r = 90,
      n = 97,
      o = 122,
      i = 48,
      s = 57,
      u = 43,
      c = 47,
      a = 26,
      l = 52;
    return t <= e && e <= r ? e - t : n <= e && e <= o ? e - n + a : i <= e && e <= s ? e - i + l : e == u ? 62 : e == c ? 63 : -1;
  };
});
var ni = Oe((fr) => {
  var Jo = Zo(),
    mr = 5,
    ei = 1 << mr,
    ti = ei - 1,
    ri = ei;
  function ys(e) {
    return e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
  }
  function ks(e) {
    var t = (e & 1) === 1,
      r = e >> 1;
    return t ? -r : r;
  }
  fr.encode = function (t) {
    var r = "",
      n,
      o = ys(t);
    do (n = o & ti), (o >>>= mr), o > 0 && (n |= ri), (r += Jo.encode(n));
    while (o > 0);
    return r;
  };
  fr.decode = function (t, r, n) {
    var o = t.length,
      i = 0,
      s = 0,
      u,
      c;
    do {
      if (r >= o) throw new Error("Expected more digits in base 64 VLQ value.");
      if (((c = Jo.decode(t.charCodeAt(r++))), c === -1)) throw new Error("Invalid base64 digit: " + t.charAt(r - 1));
      (u = !!(c & ri)), (c &= ti), (i = i + (c << s)), (s += mr);
    } while (u);
    (n.value = ks(i)), (n.rest = r);
  };
});
var Lt = Oe((K) => {
  function ws(e, t, r) {
    if (t in e) return e[t];
    if (arguments.length === 3) return r;
    throw new Error('"' + t + '" is a required argument.');
  }
  K.getArg = ws;
  var oi = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
    vs = /^data:.+\,.+$/;
  function ot(e) {
    var t = e.match(oi);
    return t ? { scheme: t[1], auth: t[2], host: t[3], port: t[4], path: t[5] } : null;
  }
  K.urlParse = ot;
  function Ue(e) {
    var t = "";
    return (
      e.scheme && (t += e.scheme + ":"),
      (t += "//"),
      e.auth && (t += e.auth + "@"),
      e.host && (t += e.host),
      e.port && (t += ":" + e.port),
      e.path && (t += e.path),
      t
    );
  }
  K.urlGenerate = Ue;
  var Ss = 32;
  function Cs(e) {
    var t = [];
    return function (r) {
      for (var n = 0; n < t.length; n++)
        if (t[n].input === r) {
          var o = t[0];
          return (t[0] = t[n]), (t[n] = o), t[0].result;
        }
      var i = e(r);
      return t.unshift({ input: r, result: i }), t.length > Ss && t.pop(), i;
    };
  }
  var dr = Cs(function (t) {
    var r = t,
      n = ot(t);
    if (n) {
      if (!n.path) return t;
      r = n.path;
    }
    for (var o = K.isAbsolute(r), i = [], s = 0, u = 0; ; )
      if (((s = u), (u = r.indexOf("/", s)), u === -1)) {
        i.push(r.slice(s));
        break;
      } else for (i.push(r.slice(s, u)); u < r.length && r[u] === "/"; ) u++;
    for (var c, a = 0, u = i.length - 1; u >= 0; u--)
      (c = i[u]),
        c === "." ? i.splice(u, 1) : c === ".." ? a++ : a > 0 && (c === "" ? (i.splice(u + 1, a), (a = 0)) : (i.splice(u, 2), a--));
    return (r = i.join("/")), r === "" && (r = o ? "/" : "."), n ? ((n.path = r), Ue(n)) : r;
  });
  K.normalize = dr;
  function ii(e, t) {
    e === "" && (e = "."), t === "" && (t = ".");
    var r = ot(t),
      n = ot(e);
    if ((n && (e = n.path || "/"), r && !r.scheme)) return n && (r.scheme = n.scheme), Ue(r);
    if (r || t.match(vs)) return t;
    if (n && !n.host && !n.path) return (n.host = t), Ue(n);
    var o = t.charAt(0) === "/" ? t : dr(e.replace(/\/+$/, "") + "/" + t);
    return n ? ((n.path = o), Ue(n)) : o;
  }
  K.join = ii;
  K.isAbsolute = function (e) {
    return e.charAt(0) === "/" || oi.test(e);
  };
  function As(e, t) {
    e === "" && (e = "."), (e = e.replace(/\/$/, ""));
    for (var r = 0; t.indexOf(e + "/") !== 0; ) {
      var n = e.lastIndexOf("/");
      if (n < 0 || ((e = e.slice(0, n)), e.match(/^([^\/]+:\/)?\/*$/))) return t;
      ++r;
    }
    return Array(r + 1).join("../") + t.substr(e.length + 1);
  }
  K.relative = As;
  var ai = (function () {
    var e = Object.create(null);
    return !("__proto__" in e);
  })();
  function si(e) {
    return e;
  }
  function Ts(e) {
    return li(e) ? "$" + e : e;
  }
  K.toSetString = ai ? si : Ts;
  function Es(e) {
    return li(e) ? e.slice(1) : e;
  }
  K.fromSetString = ai ? si : Es;
  function li(e) {
    if (!e) return !1;
    var t = e.length;
    if (
      t < 9 ||
      e.charCodeAt(t - 1) !== 95 ||
      e.charCodeAt(t - 2) !== 95 ||
      e.charCodeAt(t - 3) !== 111 ||
      e.charCodeAt(t - 4) !== 116 ||
      e.charCodeAt(t - 5) !== 111 ||
      e.charCodeAt(t - 6) !== 114 ||
      e.charCodeAt(t - 7) !== 112 ||
      e.charCodeAt(t - 8) !== 95 ||
      e.charCodeAt(t - 9) !== 95
    )
      return !1;
    for (var r = t - 10; r >= 0; r--) if (e.charCodeAt(r) !== 36) return !1;
    return !0;
  }
  function Ls(e, t, r) {
    var n = be(e.source, t.source);
    return n !== 0 ||
      ((n = e.originalLine - t.originalLine), n !== 0) ||
      ((n = e.originalColumn - t.originalColumn), n !== 0 || r) ||
      ((n = e.generatedColumn - t.generatedColumn), n !== 0) ||
      ((n = e.generatedLine - t.generatedLine), n !== 0)
      ? n
      : be(e.name, t.name);
  }
  K.compareByOriginalPositions = Ls;
  function Ps(e, t, r) {
    var n;
    return (
      (n = e.originalLine - t.originalLine),
      n !== 0 ||
      ((n = e.originalColumn - t.originalColumn), n !== 0 || r) ||
      ((n = e.generatedColumn - t.generatedColumn), n !== 0) ||
      ((n = e.generatedLine - t.generatedLine), n !== 0)
        ? n
        : be(e.name, t.name)
    );
  }
  K.compareByOriginalPositionsNoSource = Ps;
  function Is(e, t, r) {
    var n = e.generatedLine - t.generatedLine;
    return n !== 0 ||
      ((n = e.generatedColumn - t.generatedColumn), n !== 0 || r) ||
      ((n = be(e.source, t.source)), n !== 0) ||
      ((n = e.originalLine - t.originalLine), n !== 0) ||
      ((n = e.originalColumn - t.originalColumn), n !== 0)
      ? n
      : be(e.name, t.name);
  }
  K.compareByGeneratedPositionsDeflated = Is;
  function Ds(e, t, r) {
    var n = e.generatedColumn - t.generatedColumn;
    return n !== 0 ||
      r ||
      ((n = be(e.source, t.source)), n !== 0) ||
      ((n = e.originalLine - t.originalLine), n !== 0) ||
      ((n = e.originalColumn - t.originalColumn), n !== 0)
      ? n
      : be(e.name, t.name);
  }
  K.compareByGeneratedPositionsDeflatedNoLine = Ds;
  function be(e, t) {
    return e === t ? 0 : e === null ? 1 : t === null ? -1 : e > t ? 1 : -1;
  }
  function Os(e, t) {
    var r = e.generatedLine - t.generatedLine;
    return r !== 0 ||
      ((r = e.generatedColumn - t.generatedColumn), r !== 0) ||
      ((r = be(e.source, t.source)), r !== 0) ||
      ((r = e.originalLine - t.originalLine), r !== 0) ||
      ((r = e.originalColumn - t.originalColumn), r !== 0)
      ? r
      : be(e.name, t.name);
  }
  K.compareByGeneratedPositionsInflated = Os;
  function Ns(e) {
    return JSON.parse(e.replace(/^\)]}'[^\n]*\n/, ""));
  }
  K.parseSourceMapInput = Ns;
  function zs(e, t, r) {
    if (((t = t || ""), e && (e[e.length - 1] !== "/" && t[0] !== "/" && (e += "/"), (t = e + t)), r)) {
      var n = ot(r);
      if (!n) throw new Error("sourceMapURL could not be parsed");
      if (n.path) {
        var o = n.path.lastIndexOf("/");
        o >= 0 && (n.path = n.path.substring(0, o + 1));
      }
      t = ii(Ue(n), t);
    }
    return dr(t);
  }
  K.computeSourceURL = zs;
});
var ui = Oe((ci) => {
  var gr = Lt(),
    br = Object.prototype.hasOwnProperty,
    Le = typeof Map < "u";
  function xe() {
    (this._array = []), (this._set = Le ? new Map() : Object.create(null));
  }
  xe.fromArray = function (t, r) {
    for (var n = new xe(), o = 0, i = t.length; o < i; o++) n.add(t[o], r);
    return n;
  };
  xe.prototype.size = function () {
    return Le ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  xe.prototype.add = function (t, r) {
    var n = Le ? t : gr.toSetString(t),
      o = Le ? this.has(t) : br.call(this._set, n),
      i = this._array.length;
    (!o || r) && this._array.push(t), o || (Le ? this._set.set(t, i) : (this._set[n] = i));
  };
  xe.prototype.has = function (t) {
    if (Le) return this._set.has(t);
    var r = gr.toSetString(t);
    return br.call(this._set, r);
  };
  xe.prototype.indexOf = function (t) {
    if (Le) {
      var r = this._set.get(t);
      if (r >= 0) return r;
    } else {
      var n = gr.toSetString(t);
      if (br.call(this._set, n)) return this._set[n];
    }
    throw new Error('"' + t + '" is not in the set.');
  };
  xe.prototype.at = function (t) {
    if (t >= 0 && t < this._array.length) return this._array[t];
    throw new Error("No element indexed by " + t);
  };
  xe.prototype.toArray = function () {
    return this._array.slice();
  };
  ci.ArraySet = xe;
});
var mi = Oe((hi) => {
  var pi = Lt();
  function Ms(e, t) {
    var r = e.generatedLine,
      n = t.generatedLine,
      o = e.generatedColumn,
      i = t.generatedColumn;
    return n > r || (n == r && i >= o) || pi.compareByGeneratedPositionsInflated(e, t) <= 0;
  }
  function Pt() {
    (this._array = []), (this._sorted = !0), (this._last = { generatedLine: -1, generatedColumn: 0 });
  }
  Pt.prototype.unsortedForEach = function (t, r) {
    this._array.forEach(t, r);
  };
  Pt.prototype.add = function (t) {
    Ms(this._last, t) ? ((this._last = t), this._array.push(t)) : ((this._sorted = !1), this._array.push(t));
  };
  Pt.prototype.toArray = function () {
    return this._sorted || (this._array.sort(pi.compareByGeneratedPositionsInflated), (this._sorted = !0)), this._array;
  };
  hi.MappingList = Pt;
});
var di = Oe((fi) => {
  var it = ni(),
    H = Lt(),
    It = ui().ArraySet,
    Rs = mi().MappingList;
  function oe(e) {
    e || (e = {}),
      (this._file = H.getArg(e, "file", null)),
      (this._sourceRoot = H.getArg(e, "sourceRoot", null)),
      (this._skipValidation = H.getArg(e, "skipValidation", !1)),
      (this._sources = new It()),
      (this._names = new It()),
      (this._mappings = new Rs()),
      (this._sourcesContents = null);
  }
  oe.prototype._version = 3;
  oe.fromSourceMap = function (t) {
    var r = t.sourceRoot,
      n = new oe({ file: t.file, sourceRoot: r });
    return (
      t.eachMapping(function (o) {
        var i = { generated: { line: o.generatedLine, column: o.generatedColumn } };
        o.source != null &&
          ((i.source = o.source),
          r != null && (i.source = H.relative(r, i.source)),
          (i.original = { line: o.originalLine, column: o.originalColumn }),
          o.name != null && (i.name = o.name)),
          n.addMapping(i);
      }),
      t.sources.forEach(function (o) {
        var i = o;
        r !== null && (i = H.relative(r, o)), n._sources.has(i) || n._sources.add(i);
        var s = t.sourceContentFor(o);
        s != null && n.setSourceContent(o, s);
      }),
      n
    );
  };
  oe.prototype.addMapping = function (t) {
    var r = H.getArg(t, "generated"),
      n = H.getArg(t, "original", null),
      o = H.getArg(t, "source", null),
      i = H.getArg(t, "name", null);
    this._skipValidation || this._validateMapping(r, n, o, i),
      o != null && ((o = String(o)), this._sources.has(o) || this._sources.add(o)),
      i != null && ((i = String(i)), this._names.has(i) || this._names.add(i)),
      this._mappings.add({
        generatedLine: r.line,
        generatedColumn: r.column,
        originalLine: n != null && n.line,
        originalColumn: n != null && n.column,
        source: o,
        name: i
      });
  };
  oe.prototype.setSourceContent = function (t, r) {
    var n = t;
    this._sourceRoot != null && (n = H.relative(this._sourceRoot, n)),
      r != null
        ? (this._sourcesContents || (this._sourcesContents = Object.create(null)), (this._sourcesContents[H.toSetString(n)] = r))
        : this._sourcesContents &&
          (delete this._sourcesContents[H.toSetString(n)],
          Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  };
  oe.prototype.applySourceMap = function (t, r, n) {
    var o = r;
    if (r == null) {
      if (t.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      o = t.file;
    }
    var i = this._sourceRoot;
    i != null && (o = H.relative(i, o));
    var s = new It(),
      u = new It();
    this._mappings.unsortedForEach(function (c) {
      if (c.source === o && c.originalLine != null) {
        var a = t.originalPositionFor({ line: c.originalLine, column: c.originalColumn });
        a.source != null &&
          ((c.source = a.source),
          n != null && (c.source = H.join(n, c.source)),
          i != null && (c.source = H.relative(i, c.source)),
          (c.originalLine = a.line),
          (c.originalColumn = a.column),
          a.name != null && (c.name = a.name));
      }
      var l = c.source;
      l != null && !s.has(l) && s.add(l);
      var p = c.name;
      p != null && !u.has(p) && u.add(p);
    }, this),
      (this._sources = s),
      (this._names = u),
      t.sources.forEach(function (c) {
        var a = t.sourceContentFor(c);
        a != null && (n != null && (c = H.join(n, c)), i != null && (c = H.relative(i, c)), this.setSourceContent(c, a));
      }, this);
  };
  oe.prototype._validateMapping = function (t, r, n, o) {
    if (r && typeof r.line != "number" && typeof r.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(t && "line" in t && "column" in t && t.line > 0 && t.column >= 0 && !r && !n && !o)) {
      if (
        t &&
        "line" in t &&
        "column" in t &&
        r &&
        "line" in r &&
        "column" in r &&
        t.line > 0 &&
        t.column >= 0 &&
        r.line > 0 &&
        r.column >= 0 &&
        n
      )
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({ generated: t, source: n, original: r, name: o }));
    }
  };
  oe.prototype._serializeMappings = function () {
    for (var t = 0, r = 1, n = 0, o = 0, i = 0, s = 0, u = "", c, a, l, p, m = this._mappings.toArray(), f = 0, P = m.length; f < P; f++) {
      if (((a = m[f]), (c = ""), a.generatedLine !== r)) for (t = 0; a.generatedLine !== r; ) (c += ";"), r++;
      else if (f > 0) {
        if (!H.compareByGeneratedPositionsInflated(a, m[f - 1])) continue;
        c += ",";
      }
      (c += it.encode(a.generatedColumn - t)),
        (t = a.generatedColumn),
        a.source != null &&
          ((p = this._sources.indexOf(a.source)),
          (c += it.encode(p - s)),
          (s = p),
          (c += it.encode(a.originalLine - 1 - o)),
          (o = a.originalLine - 1),
          (c += it.encode(a.originalColumn - n)),
          (n = a.originalColumn),
          a.name != null && ((l = this._names.indexOf(a.name)), (c += it.encode(l - i)), (i = l))),
        (u += c);
    }
    return u;
  };
  oe.prototype._generateSourcesContent = function (t, r) {
    return t.map(function (n) {
      if (!this._sourcesContents) return null;
      r != null && (n = H.relative(r, n));
      var o = H.toSetString(n);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, o) ? this._sourcesContents[o] : null;
    }, this);
  };
  oe.prototype.toJSON = function () {
    var t = { version: this._version, sources: this._sources.toArray(), names: this._names.toArray(), mappings: this._serializeMappings() };
    return (
      this._file != null && (t.file = this._file),
      this._sourceRoot != null && (t.sourceRoot = this._sourceRoot),
      this._sourcesContents && (t.sourcesContent = this._generateSourcesContent(t.sources, t.sourceRoot)),
      t
    );
  };
  oe.prototype.toString = function () {
    return JSON.stringify(this.toJSON());
  };
  fi.SourceMapGenerator = oe;
});
var Ze = {};
b(Ze, {
  AtKeyword: () => D,
  BadString: () => Ae,
  BadUrl: () => Y,
  CDC: () => j,
  CDO: () => ue,
  Colon: () => O,
  Comma: () => G,
  Comment: () => E,
  Delim: () => g,
  Dimension: () => y,
  EOF: () => $e,
  Function: () => x,
  Hash: () => v,
  Ident: () => h,
  LeftCurlyBracket: () => M,
  LeftParenthesis: () => T,
  LeftSquareBracket: () => U,
  Number: () => d,
  Percentage: () => A,
  RightCurlyBracket: () => W,
  RightParenthesis: () => w,
  RightSquareBracket: () => V,
  Semicolon: () => _,
  String: () => q,
  Url: () => F,
  WhiteSpace: () => k
});
var $e = 0,
  h = 1,
  x = 2,
  D = 3,
  v = 4,
  q = 5,
  Ae = 6,
  F = 7,
  Y = 8,
  g = 9,
  d = 10,
  A = 11,
  y = 12,
  k = 13,
  ue = 14,
  j = 15,
  O = 16,
  _ = 17,
  G = 18,
  U = 19,
  V = 20,
  T = 21,
  w = 22,
  M = 23,
  W = 24,
  E = 25;
function B(e) {
  return e >= 48 && e <= 57;
}
function ee(e) {
  return B(e) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function kt(e) {
  return e >= 65 && e <= 90;
}
function ls(e) {
  return e >= 97 && e <= 122;
}
function cs(e) {
  return kt(e) || ls(e);
}
function us(e) {
  return e >= 128;
}
function yt(e) {
  return cs(e) || us(e) || e === 95;
}
function Ne(e) {
  return yt(e) || B(e) || e === 45;
}
function ps(e) {
  return (e >= 0 && e <= 8) || e === 11 || (e >= 14 && e <= 31) || e === 127;
}
function Je(e) {
  return e === 10 || e === 13 || e === 12;
}
function pe(e) {
  return Je(e) || e === 32 || e === 9;
}
function $(e, t) {
  return !(e !== 92 || Je(t) || t === 0);
}
function ze(e, t, r) {
  return e === 45 ? yt(t) || t === 45 || $(t, r) : yt(e) ? !0 : e === 92 ? $(e, t) : !1;
}
function wt(e, t, r) {
  return e === 43 || e === 45 ? (B(t) ? 2 : t === 46 && B(r) ? 3 : 0) : e === 46 ? (B(t) ? 2 : 0) : B(e) ? 1 : 0;
}
function vt(e) {
  return e === 65279 || e === 65534 ? 1 : 0;
}
var or = new Array(128),
  hs = 128,
  et = 130,
  ir = 131,
  St = 132,
  ar = 133;
for (let e = 0; e < or.length; e++) or[e] = (pe(e) && et) || (B(e) && ir) || (yt(e) && St) || (ps(e) && ar) || e || hs;
function Ct(e) {
  return e < 128 ? or[e] : St;
}
function Me(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function At(e, t, r) {
  return r === 13 && Me(e, t + 1) === 10 ? 2 : 1;
}
function de(e, t, r) {
  let n = e.charCodeAt(t);
  return kt(n) && (n = n | 32), n === r;
}
function ge(e, t, r, n) {
  if (r - t !== n.length || t < 0 || r > e.length) return !1;
  for (let o = t; o < r; o++) {
    let i = n.charCodeAt(o - t),
      s = e.charCodeAt(o);
    if ((kt(s) && (s = s | 32), s !== i)) return !1;
  }
  return !0;
}
function _o(e, t) {
  for (; t >= 0 && pe(e.charCodeAt(t)); t--);
  return t + 1;
}
function tt(e, t) {
  for (; t < e.length && pe(e.charCodeAt(t)); t++);
  return t;
}
function sr(e, t) {
  for (; t < e.length && B(e.charCodeAt(t)); t++);
  return t;
}
function se(e, t) {
  if (((t += 2), ee(Me(e, t - 1)))) {
    for (let n = Math.min(e.length, t + 5); t < n && ee(Me(e, t)); t++);
    let r = Me(e, t);
    pe(r) && (t += At(e, t, r));
  }
  return t;
}
function rt(e, t) {
  for (; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (!Ne(r)) {
      if ($(r, Me(e, t + 1))) {
        t = se(e, t) - 1;
        continue;
      }
      break;
    }
  }
  return t;
}
function Te(e, t) {
  let r = e.charCodeAt(t);
  if (
    ((r === 43 || r === 45) && (r = e.charCodeAt((t += 1))),
    B(r) && ((t = sr(e, t + 1)), (r = e.charCodeAt(t))),
    r === 46 && B(e.charCodeAt(t + 1)) && ((t += 2), (t = sr(e, t))),
    de(e, t, 101))
  ) {
    let n = 0;
    (r = e.charCodeAt(t + 1)), (r === 45 || r === 43) && ((n = 1), (r = e.charCodeAt(t + 2))), B(r) && (t = sr(e, t + 1 + n + 1));
  }
  return t;
}
function Tt(e, t) {
  for (; t < e.length; t++) {
    let r = e.charCodeAt(t);
    if (r === 41) {
      t++;
      break;
    }
    $(r, Me(e, t + 1)) && (t = se(e, t));
  }
  return t;
}
function Re(e) {
  if (e.length === 1 && !ee(e.charCodeAt(0))) return e[0];
  let t = parseInt(e, 16);
  return (t === 0 || (t >= 55296 && t <= 57343) || t > 1114111) && (t = 65533), String.fromCodePoint(t);
}
var Fe = [
  "EOF-token",
  "ident-token",
  "function-token",
  "at-keyword-token",
  "hash-token",
  "string-token",
  "bad-string-token",
  "url-token",
  "bad-url-token",
  "delim-token",
  "number-token",
  "percentage-token",
  "dimension-token",
  "whitespace-token",
  "CDO-token",
  "CDC-token",
  "colon-token",
  "semicolon-token",
  "comma-token",
  "[-token",
  "]-token",
  "(-token",
  ")-token",
  "{-token",
  "}-token"
];
function Be(e = null, t) {
  return e === null || e.length < t ? new Uint32Array(Math.max(t + 1024, 16384)) : e;
}
var Uo = 10,
  ms = 12,
  jo = 13;
function Ho(e) {
  let t = e.source,
    r = t.length,
    n = t.length > 0 ? vt(t.charCodeAt(0)) : 0,
    o = Be(e.lines, r),
    i = Be(e.columns, r),
    s = e.startLine,
    u = e.startColumn;
  for (let c = n; c < r; c++) {
    let a = t.charCodeAt(c);
    (o[c] = s),
      (i[c] = u++),
      (a === Uo || a === jo || a === ms) &&
        (a === jo && c + 1 < r && t.charCodeAt(c + 1) === Uo && (c++, (o[c] = s), (i[c] = u)), s++, (u = 1));
  }
  (o[r] = s), (i[r] = u), (e.lines = o), (e.columns = i), (e.computed = !0);
}
var Et = class {
  constructor() {
    (this.lines = null), (this.columns = null), (this.computed = !1);
  }
  setSource(t, r = 0, n = 1, o = 1) {
    (this.source = t), (this.startOffset = r), (this.startLine = n), (this.startColumn = o), (this.computed = !1);
  }
  getLocation(t, r) {
    return this.computed || Ho(this), { source: r, offset: this.startOffset + t, line: this.lines[t], column: this.columns[t] };
  }
  getLocationRange(t, r, n) {
    return (
      this.computed || Ho(this),
      {
        source: n,
        start: { offset: this.startOffset + t, line: this.lines[t], column: this.columns[t] },
        end: { offset: this.startOffset + r, line: this.lines[r], column: this.columns[r] }
      }
    );
  }
};
var ne = 16777215,
  we = 24,
  fs = new Map([
    [2, 22],
    [21, 22],
    [19, 20],
    [23, 24]
  ]),
  nt = class {
    constructor(t, r) {
      this.setSource(t, r);
    }
    reset() {
      (this.eof = !1),
        (this.tokenIndex = -1),
        (this.tokenType = 0),
        (this.tokenStart = this.firstCharOffset),
        (this.tokenEnd = this.firstCharOffset);
    }
    setSource(t = "", r = () => {}) {
      t = String(t || "");
      let n = t.length,
        o = Be(this.offsetAndType, t.length + 1),
        i = Be(this.balance, t.length + 1),
        s = 0,
        u = 0,
        c = 0,
        a = -1;
      for (
        this.offsetAndType = null,
          this.balance = null,
          r(t, (l, p, m) => {
            switch (l) {
              default:
                i[s] = n;
                break;
              case u: {
                let f = c & ne;
                for (c = i[f], u = c >> we, i[s] = f, i[f++] = s; f < s; f++) i[f] === n && (i[f] = s);
                break;
              }
              case 21:
              case 2:
              case 19:
              case 23:
                (i[s] = c), (u = fs.get(l)), (c = (u << we) | s);
                break;
            }
            (o[s++] = (l << we) | m), a === -1 && (a = p);
          }),
          o[s] = (0 << we) | n,
          i[s] = n,
          i[n] = n;
        c !== 0;

      ) {
        let l = c & ne;
        (c = i[l]), (i[l] = n);
      }
      (this.source = t),
        (this.firstCharOffset = a === -1 ? 0 : a),
        (this.tokenCount = s),
        (this.offsetAndType = o),
        (this.balance = i),
        this.reset(),
        this.next();
    }
    lookupType(t) {
      return (t += this.tokenIndex), t < this.tokenCount ? this.offsetAndType[t] >> we : 0;
    }
    lookupOffset(t) {
      return (t += this.tokenIndex), t < this.tokenCount ? this.offsetAndType[t - 1] & ne : this.source.length;
    }
    lookupValue(t, r) {
      return (
        (t += this.tokenIndex), t < this.tokenCount ? ge(this.source, this.offsetAndType[t - 1] & ne, this.offsetAndType[t] & ne, r) : !1
      );
    }
    getTokenStart(t) {
      return t === this.tokenIndex
        ? this.tokenStart
        : t > 0
        ? t < this.tokenCount
          ? this.offsetAndType[t - 1] & ne
          : this.offsetAndType[this.tokenCount] & ne
        : this.firstCharOffset;
    }
    substrToCursor(t) {
      return this.source.substring(t, this.tokenStart);
    }
    isBalanceEdge(t) {
      return this.balance[this.tokenIndex] < t;
    }
    isDelim(t, r) {
      return r
        ? this.lookupType(r) === 9 && this.source.charCodeAt(this.lookupOffset(r)) === t
        : this.tokenType === 9 && this.source.charCodeAt(this.tokenStart) === t;
    }
    skip(t) {
      let r = this.tokenIndex + t;
      r < this.tokenCount
        ? ((this.tokenIndex = r),
          (this.tokenStart = this.offsetAndType[r - 1] & ne),
          (r = this.offsetAndType[r]),
          (this.tokenType = r >> we),
          (this.tokenEnd = r & ne))
        : ((this.tokenIndex = this.tokenCount), this.next());
    }
    next() {
      let t = this.tokenIndex + 1;
      t < this.tokenCount
        ? ((this.tokenIndex = t),
          (this.tokenStart = this.tokenEnd),
          (t = this.offsetAndType[t]),
          (this.tokenType = t >> we),
          (this.tokenEnd = t & ne))
        : ((this.eof = !0),
          (this.tokenIndex = this.tokenCount),
          (this.tokenType = 0),
          (this.tokenStart = this.tokenEnd = this.source.length));
    }
    skipSC() {
      for (; this.tokenType === 13 || this.tokenType === 25; ) this.next();
    }
    skipUntilBalanced(t, r) {
      let n = t,
        o,
        i;
      e: for (; n < this.tokenCount; n++) {
        if (((o = this.balance[n]), o < t)) break e;
        switch (((i = n > 0 ? this.offsetAndType[n - 1] & ne : this.firstCharOffset), r(this.source.charCodeAt(i)))) {
          case 1:
            break e;
          case 2:
            n++;
            break e;
          default:
            this.balance[o] === n && (n = o);
        }
      }
      this.skip(n - this.tokenIndex);
    }
    forEachToken(t) {
      for (let r = 0, n = this.firstCharOffset; r < this.tokenCount; r++) {
        let o = n,
          i = this.offsetAndType[r],
          s = i & ne,
          u = i >> we;
        (n = s), t(u, o, s, r);
      }
    }
    dump() {
      let t = new Array(this.tokenCount);
      return (
        this.forEachToken((r, n, o, i) => {
          t[i] = { idx: i, type: Fe[r], chunk: this.source.substring(n, o), balance: this.balance[i] };
        }),
        t
      );
    }
  };
function ve(e, t) {
  function r(p) {
    return p < u ? e.charCodeAt(p) : 0;
  }
  function n() {
    if (((a = Te(e, a)), ze(r(a), r(a + 1), r(a + 2)))) {
      (l = 12), (a = rt(e, a));
      return;
    }
    if (r(a) === 37) {
      (l = 11), a++;
      return;
    }
    l = 10;
  }
  function o() {
    let p = a;
    if (((a = rt(e, a)), ge(e, p, a, "url") && r(a) === 40)) {
      if (((a = tt(e, a + 1)), r(a) === 34 || r(a) === 39)) {
        (l = 2), (a = p + 4);
        return;
      }
      s();
      return;
    }
    if (r(a) === 40) {
      (l = 2), a++;
      return;
    }
    l = 1;
  }
  function i(p) {
    for (p || (p = r(a++)), l = 5; a < e.length; a++) {
      let m = e.charCodeAt(a);
      switch (Ct(m)) {
        case p:
          a++;
          return;
        case et:
          if (Je(m)) {
            (a += At(e, a, m)), (l = 6);
            return;
          }
          break;
        case 92:
          if (a === e.length - 1) break;
          let f = r(a + 1);
          Je(f) ? (a += At(e, a + 1, f)) : $(m, f) && (a = se(e, a) - 1);
          break;
      }
    }
  }
  function s() {
    for (l = 7, a = tt(e, a); a < e.length; a++) {
      let p = e.charCodeAt(a);
      switch (Ct(p)) {
        case 41:
          a++;
          return;
        case et:
          if (((a = tt(e, a)), r(a) === 41 || a >= e.length)) {
            a < e.length && a++;
            return;
          }
          (a = Tt(e, a)), (l = 8);
          return;
        case 34:
        case 39:
        case 40:
        case ar:
          (a = Tt(e, a)), (l = 8);
          return;
        case 92:
          if ($(p, r(a + 1))) {
            a = se(e, a) - 1;
            break;
          }
          (a = Tt(e, a)), (l = 8);
          return;
      }
    }
  }
  e = String(e || "");
  let u = e.length,
    c = vt(r(0)),
    a = c,
    l;
  for (; a < u; ) {
    let p = e.charCodeAt(a);
    switch (Ct(p)) {
      case et:
        (l = 13), (a = tt(e, a + 1));
        break;
      case 34:
        i();
        break;
      case 35:
        Ne(r(a + 1)) || $(r(a + 1), r(a + 2)) ? ((l = 4), (a = rt(e, a + 1))) : ((l = 9), a++);
        break;
      case 39:
        i();
        break;
      case 40:
        (l = 21), a++;
        break;
      case 41:
        (l = 22), a++;
        break;
      case 43:
        wt(p, r(a + 1), r(a + 2)) ? n() : ((l = 9), a++);
        break;
      case 44:
        (l = 18), a++;
        break;
      case 45:
        wt(p, r(a + 1), r(a + 2))
          ? n()
          : r(a + 1) === 45 && r(a + 2) === 62
          ? ((l = 15), (a = a + 3))
          : ze(p, r(a + 1), r(a + 2))
          ? o()
          : ((l = 9), a++);
        break;
      case 46:
        wt(p, r(a + 1), r(a + 2)) ? n() : ((l = 9), a++);
        break;
      case 47:
        r(a + 1) === 42 ? ((l = 25), (a = e.indexOf("*/", a + 2)), (a = a === -1 ? e.length : a + 2)) : ((l = 9), a++);
        break;
      case 58:
        (l = 16), a++;
        break;
      case 59:
        (l = 17), a++;
        break;
      case 60:
        r(a + 1) === 33 && r(a + 2) === 45 && r(a + 3) === 45 ? ((l = 14), (a = a + 4)) : ((l = 9), a++);
        break;
      case 64:
        ze(r(a + 1), r(a + 2), r(a + 3)) ? ((l = 3), (a = rt(e, a + 1))) : ((l = 9), a++);
        break;
      case 91:
        (l = 19), a++;
        break;
      case 92:
        $(p, r(a + 1)) ? o() : ((l = 9), a++);
        break;
      case 93:
        (l = 20), a++;
        break;
      case 123:
        (l = 23), a++;
        break;
      case 125:
        (l = 24), a++;
        break;
      case ir:
        n();
        break;
      case St:
        o();
        break;
      default:
        (l = 9), a++;
    }
    t(l, c, (c = a));
  }
}
var _e = null,
  I = class {
    static createItem(t) {
      return { prev: null, next: null, data: t };
    }
    constructor() {
      (this.head = null), (this.tail = null), (this.cursor = null);
    }
    createItem(t) {
      return I.createItem(t);
    }
    allocateCursor(t, r) {
      let n;
      return (
        _e !== null
          ? ((n = _e), (_e = _e.cursor), (n.prev = t), (n.next = r), (n.cursor = this.cursor))
          : (n = { prev: t, next: r, cursor: this.cursor }),
        (this.cursor = n),
        n
      );
    }
    releaseCursor() {
      let { cursor: t } = this;
      (this.cursor = t.cursor), (t.prev = null), (t.next = null), (t.cursor = _e), (_e = t);
    }
    updateCursors(t, r, n, o) {
      let { cursor: i } = this;
      for (; i !== null; ) i.prev === t && (i.prev = r), i.next === n && (i.next = o), (i = i.cursor);
    }
    *[Symbol.iterator]() {
      for (let t = this.head; t !== null; t = t.next) yield t.data;
    }
    get size() {
      let t = 0;
      for (let r = this.head; r !== null; r = r.next) t++;
      return t;
    }
    get isEmpty() {
      return this.head === null;
    }
    get first() {
      return this.head && this.head.data;
    }
    get last() {
      return this.tail && this.tail.data;
    }
    fromArray(t) {
      let r = null;
      this.head = null;
      for (let n of t) {
        let o = I.createItem(n);
        r !== null ? (r.next = o) : (this.head = o), (o.prev = r), (r = o);
      }
      return (this.tail = r), this;
    }
    toArray() {
      return [...this];
    }
    toJSON() {
      return [...this];
    }
    forEach(t, r = this) {
      let n = this.allocateCursor(null, this.head);
      for (; n.next !== null; ) {
        let o = n.next;
        (n.next = o.next), t.call(r, o.data, o, this);
      }
      this.releaseCursor();
    }
    forEachRight(t, r = this) {
      let n = this.allocateCursor(this.tail, null);
      for (; n.prev !== null; ) {
        let o = n.prev;
        (n.prev = o.prev), t.call(r, o.data, o, this);
      }
      this.releaseCursor();
    }
    reduce(t, r, n = this) {
      let o = this.allocateCursor(null, this.head),
        i = r,
        s;
      for (; o.next !== null; ) (s = o.next), (o.next = s.next), (i = t.call(n, i, s.data, s, this));
      return this.releaseCursor(), i;
    }
    reduceRight(t, r, n = this) {
      let o = this.allocateCursor(this.tail, null),
        i = r,
        s;
      for (; o.prev !== null; ) (s = o.prev), (o.prev = s.prev), (i = t.call(n, i, s.data, s, this));
      return this.releaseCursor(), i;
    }
    some(t, r = this) {
      for (let n = this.head; n !== null; n = n.next) if (t.call(r, n.data, n, this)) return !0;
      return !1;
    }
    map(t, r = this) {
      let n = new I();
      for (let o = this.head; o !== null; o = o.next) n.appendData(t.call(r, o.data, o, this));
      return n;
    }
    filter(t, r = this) {
      let n = new I();
      for (let o = this.head; o !== null; o = o.next) t.call(r, o.data, o, this) && n.appendData(o.data);
      return n;
    }
    nextUntil(t, r, n = this) {
      if (t === null) return;
      let o = this.allocateCursor(null, t);
      for (; o.next !== null; ) {
        let i = o.next;
        if (((o.next = i.next), r.call(n, i.data, i, this))) break;
      }
      this.releaseCursor();
    }
    prevUntil(t, r, n = this) {
      if (t === null) return;
      let o = this.allocateCursor(t, null);
      for (; o.prev !== null; ) {
        let i = o.prev;
        if (((o.prev = i.prev), r.call(n, i.data, i, this))) break;
      }
      this.releaseCursor();
    }
    clear() {
      (this.head = null), (this.tail = null);
    }
    copy() {
      let t = new I();
      for (let r of this) t.appendData(r);
      return t;
    }
    prepend(t) {
      return (
        this.updateCursors(null, t, this.head, t),
        this.head !== null ? ((this.head.prev = t), (t.next = this.head)) : (this.tail = t),
        (this.head = t),
        this
      );
    }
    prependData(t) {
      return this.prepend(I.createItem(t));
    }
    append(t) {
      return this.insert(t);
    }
    appendData(t) {
      return this.insert(I.createItem(t));
    }
    insert(t, r = null) {
      if (r !== null)
        if ((this.updateCursors(r.prev, t, r, t), r.prev === null)) {
          if (this.head !== r) throw new Error("before doesn't belong to list");
          (this.head = t), (r.prev = t), (t.next = r), this.updateCursors(null, t);
        } else (r.prev.next = t), (t.prev = r.prev), (r.prev = t), (t.next = r);
      else
        this.updateCursors(this.tail, t, null, t),
          this.tail !== null ? ((this.tail.next = t), (t.prev = this.tail)) : (this.head = t),
          (this.tail = t);
      return this;
    }
    insertData(t, r) {
      return this.insert(I.createItem(t), r);
    }
    remove(t) {
      if ((this.updateCursors(t, t.prev, t, t.next), t.prev !== null)) t.prev.next = t.next;
      else {
        if (this.head !== t) throw new Error("item doesn't belong to list");
        this.head = t.next;
      }
      if (t.next !== null) t.next.prev = t.prev;
      else {
        if (this.tail !== t) throw new Error("item doesn't belong to list");
        this.tail = t.prev;
      }
      return (t.prev = null), (t.next = null), t;
    }
    push(t) {
      this.insert(I.createItem(t));
    }
    pop() {
      return this.tail !== null ? this.remove(this.tail) : null;
    }
    unshift(t) {
      this.prepend(I.createItem(t));
    }
    shift() {
      return this.head !== null ? this.remove(this.head) : null;
    }
    prependList(t) {
      return this.insertList(t, this.head);
    }
    appendList(t) {
      return this.insertList(t);
    }
    insertList(t, r) {
      return t.head === null
        ? this
        : (r != null
            ? (this.updateCursors(r.prev, t.tail, r, t.head),
              r.prev !== null ? ((r.prev.next = t.head), (t.head.prev = r.prev)) : (this.head = t.head),
              (r.prev = t.tail),
              (t.tail.next = r))
            : (this.updateCursors(this.tail, t.tail, null, t.head),
              this.tail !== null ? ((this.tail.next = t.head), (t.head.prev = this.tail)) : (this.head = t.head),
              (this.tail = t.tail)),
          (t.head = null),
          (t.tail = null),
          this);
    }
    replace(t, r) {
      "head" in r ? this.insertList(r, t) : this.insert(r, t), this.remove(t);
    }
  };
function Ee(e, t) {
  let r = Object.create(SyntaxError.prototype),
    n = new Error();
  return Object.assign(r, {
    name: e,
    message: t,
    get stack() {
      return (n.stack || "").replace(
        /^(.+\n){1,3}/,
        `${e}: ${t}
`
      );
    }
  });
}
var lr = 100,
  qo = 60,
  Wo = "    ";
function Yo({ source: e, line: t, column: r }, n) {
  function o(l, p) {
    return i.slice(l, p).map((m, f) => String(l + f + 1).padStart(c) + " |" + m).join(`
`);
  }
  let i = e.split(/\r\n?|\n|\f/),
    s = Math.max(1, t - n) - 1,
    u = Math.min(t + n, i.length + 1),
    c = Math.max(4, String(u).length) + 1,
    a = 0;
  (r += (Wo.length - 1) * (i[t - 1].substr(0, r - 1).match(/\t/g) || []).length), r > lr && ((a = r - qo + 3), (r = qo - 2));
  for (let l = s; l <= u; l++)
    l >= 0 &&
      l < i.length &&
      ((i[l] = i[l].replace(/\t/g, Wo)),
      (i[l] = (a > 0 && i[l].length > a ? "\u2026" : "") + i[l].substr(a, lr - 2) + (i[l].length > a + lr - 1 ? "\u2026" : "")));
  return [o(s, t), new Array(r + c + 2).join("-") + "^", o(t, u)].filter(Boolean).join(`
`);
}
function cr(e, t, r, n, o) {
  return Object.assign(Ee("SyntaxError", e), {
    source: t,
    offset: r,
    line: n,
    column: o,
    sourceFragment(s) {
      return Yo({ source: t, line: n, column: o }, isNaN(s) ? 0 : s);
    },
    get formattedMessage() {
      return (
        `Parse error: ${e}
` + Yo({ source: t, line: n, column: o }, 2)
      );
    }
  });
}
function Go(e) {
  let t = this.createList(),
    r = !1,
    n = { recognizer: e };
  for (; !this.eof; ) {
    switch (this.tokenType) {
      case 25:
        this.next();
        continue;
      case 13:
        (r = !0), this.next();
        continue;
    }
    let o = e.getNode.call(this, n);
    if (o === void 0) break;
    r && (e.onWhiteSpace && e.onWhiteSpace.call(this, o, t, n), (r = !1)), t.push(o);
  }
  return r && e.onWhiteSpace && e.onWhiteSpace.call(this, null, t, n), t;
}
var Vo = () => {},
  ds = 33,
  gs = 35,
  ur = 59,
  Ko = 123,
  Qo = 0;
function bs(e) {
  return function () {
    return this[e]();
  };
}
function pr(e) {
  let t = Object.create(null);
  for (let r in e) {
    let n = e[r],
      o = n.parse || n;
    o && (t[r] = o);
  }
  return t;
}
function xs(e) {
  let t = {
    context: Object.create(null),
    scope: Object.assign(Object.create(null), e.scope),
    atrule: pr(e.atrule),
    pseudo: pr(e.pseudo),
    node: pr(e.node)
  };
  for (let r in e.parseContext)
    switch (typeof e.parseContext[r]) {
      case "function":
        t.context[r] = e.parseContext[r];
        break;
      case "string":
        t.context[r] = bs(e.parseContext[r]);
        break;
    }
  return { config: t, ...t, ...t.node };
}
function Xo(e) {
  let t = "",
    r = "<unknown>",
    n = !1,
    o = Vo,
    i = !1,
    s = new Et(),
    u = Object.assign(new nt(), xs(e || {}), {
      parseAtrulePrelude: !0,
      parseRulePrelude: !0,
      parseValue: !0,
      parseCustomProperty: !1,
      readSequence: Go,
      consumeUntilBalanceEnd: () => 0,
      consumeUntilLeftCurlyBracket(a) {
        return a === Ko ? 1 : 0;
      },
      consumeUntilLeftCurlyBracketOrSemicolon(a) {
        return a === Ko || a === ur ? 1 : 0;
      },
      consumeUntilExclamationMarkOrSemicolon(a) {
        return a === ds || a === ur ? 1 : 0;
      },
      consumeUntilSemicolonIncluded(a) {
        return a === ur ? 2 : 0;
      },
      createList() {
        return new I();
      },
      createSingleNodeList(a) {
        return new I().appendData(a);
      },
      getFirstListNode(a) {
        return a && a.first;
      },
      getLastListNode(a) {
        return a && a.last;
      },
      parseWithFallback(a, l) {
        let p = this.tokenIndex;
        try {
          return a.call(this);
        } catch (m) {
          if (i) throw m;
          let f = l.call(this, p);
          return (i = !0), o(m, f), (i = !1), f;
        }
      },
      lookupNonWSType(a) {
        let l;
        do if (((l = this.lookupType(a++)), l !== 13)) return l;
        while (l !== Qo);
        return Qo;
      },
      charCodeAt(a) {
        return a >= 0 && a < t.length ? t.charCodeAt(a) : 0;
      },
      substring(a, l) {
        return t.substring(a, l);
      },
      substrToCursor(a) {
        return this.source.substring(a, this.tokenStart);
      },
      cmpChar(a, l) {
        return de(t, a, l);
      },
      cmpStr(a, l, p) {
        return ge(t, a, l, p);
      },
      consume(a) {
        let l = this.tokenStart;
        return this.eat(a), this.substrToCursor(l);
      },
      consumeFunctionName() {
        let a = t.substring(this.tokenStart, this.tokenEnd - 1);
        return this.eat(2), a;
      },
      consumeNumber(a) {
        let l = t.substring(this.tokenStart, Te(t, this.tokenStart));
        return this.eat(a), l;
      },
      eat(a) {
        if (this.tokenType !== a) {
          let l = Fe[a]
              .slice(0, -6)
              .replace(/-/g, " ")
              .replace(/^./, (f) => f.toUpperCase()),
            p = `${/[[\](){}]/.test(l) ? `"${l}"` : l} is expected`,
            m = this.tokenStart;
          switch (a) {
            case 1:
              this.tokenType === 2 || this.tokenType === 7
                ? ((m = this.tokenEnd - 1), (p = "Identifier is expected but function found"))
                : (p = "Identifier is expected");
              break;
            case 4:
              this.isDelim(gs) && (this.next(), m++, (p = "Name is expected"));
              break;
            case 11:
              this.tokenType === 10 && ((m = this.tokenEnd), (p = "Percent sign is expected"));
              break;
          }
          this.error(p, m);
        }
        this.next();
      },
      eatIdent(a) {
        (this.tokenType !== 1 || this.lookupValue(0, a) === !1) && this.error(`Identifier "${a}" is expected`), this.next();
      },
      eatDelim(a) {
        this.isDelim(a) || this.error(`Delim "${String.fromCharCode(a)}" is expected`), this.next();
      },
      getLocation(a, l) {
        return n ? s.getLocationRange(a, l, r) : null;
      },
      getLocationFromList(a) {
        if (n) {
          let l = this.getFirstListNode(a),
            p = this.getLastListNode(a);
          return s.getLocationRange(
            l !== null ? l.loc.start.offset - s.startOffset : this.tokenStart,
            p !== null ? p.loc.end.offset - s.startOffset : this.tokenStart,
            r
          );
        }
        return null;
      },
      error(a, l) {
        let p =
          typeof l < "u" && l < t.length
            ? s.getLocation(l)
            : this.eof
            ? s.getLocation(_o(t, t.length - 1))
            : s.getLocation(this.tokenStart);
        throw new cr(a || "Unexpected input", t, p.offset, p.line, p.column);
      }
    });
  return Object.assign(
    function (a, l) {
      (t = a),
        (l = l || {}),
        u.setSource(t, ve),
        s.setSource(t, l.offset, l.line, l.column),
        (r = l.filename || "<unknown>"),
        (n = Boolean(l.positions)),
        (o = typeof l.onParseError == "function" ? l.onParseError : Vo),
        (i = !1),
        (u.parseAtrulePrelude = "parseAtrulePrelude" in l ? Boolean(l.parseAtrulePrelude) : !0),
        (u.parseRulePrelude = "parseRulePrelude" in l ? Boolean(l.parseRulePrelude) : !0),
        (u.parseValue = "parseValue" in l ? Boolean(l.parseValue) : !0),
        (u.parseCustomProperty = "parseCustomProperty" in l ? Boolean(l.parseCustomProperty) : !1);
      let { context: p = "default", onComment: m } = l;
      if (!(p in u.context)) throw new Error("Unknown context `" + p + "`");
      typeof m == "function" &&
        u.forEachToken((P, te, X) => {
          if (P === 25) {
            let S = u.getLocation(te, X),
              R = ge(t, X - 2, X, "*/") ? t.slice(te + 2, X - 2) : t.slice(te + 2, X);
            m(R, S);
          }
        });
      let f = u.context[p].call(u, l);
      return u.eof || u.error(), f;
    },
    { SyntaxError: cr, config: u.config }
  );
}
var bi = ss(di(), 1),
  gi = new Set(["Atrule", "Selector", "Declaration"]);
function xi(e) {
  let t = new bi.SourceMapGenerator(),
    r = { line: 1, column: 0 },
    n = { line: 0, column: 0 },
    o = { line: 1, column: 0 },
    i = { generated: o },
    s = 1,
    u = 0,
    c = !1,
    a = e.node;
  e.node = function (m) {
    if (m.loc && m.loc.start && gi.has(m.type)) {
      let f = m.loc.start.line,
        P = m.loc.start.column - 1;
      (n.line !== f || n.column !== P) &&
        ((n.line = f),
        (n.column = P),
        (r.line = s),
        (r.column = u),
        c && ((c = !1), (r.line !== o.line || r.column !== o.column) && t.addMapping(i)),
        (c = !0),
        t.addMapping({ source: m.loc.source, original: n, generated: r }));
    }
    a.call(this, m), c && gi.has(m.type) && ((o.line = s), (o.column = u));
  };
  let l = e.emit;
  e.emit = function (m, f, P) {
    for (let te = 0; te < m.length; te++) m.charCodeAt(te) === 10 ? (s++, (u = 0)) : u++;
    l(m, f, P);
  };
  let p = e.result;
  return (
    (e.result = function () {
      return c && t.addMapping(i), { css: p(), map: t };
    }),
    e
  );
}
var Dt = {};
b(Dt, { safe: () => yr, spec: () => Us });
var Fs = 43,
  Bs = 45,
  xr = (e, t) => {
    if ((e === 9 && (e = t), typeof e == "string")) {
      let r = e.charCodeAt(0);
      return r > 127 ? 32768 : r << 8;
    }
    return e;
  },
  yi = [
    [1, 1],
    [1, 2],
    [1, 7],
    [1, 8],
    [1, "-"],
    [1, 10],
    [1, 11],
    [1, 12],
    [1, 15],
    [1, 21],
    [3, 1],
    [3, 2],
    [3, 7],
    [3, 8],
    [3, "-"],
    [3, 10],
    [3, 11],
    [3, 12],
    [3, 15],
    [4, 1],
    [4, 2],
    [4, 7],
    [4, 8],
    [4, "-"],
    [4, 10],
    [4, 11],
    [4, 12],
    [4, 15],
    [12, 1],
    [12, 2],
    [12, 7],
    [12, 8],
    [12, "-"],
    [12, 10],
    [12, 11],
    [12, 12],
    [12, 15],
    ["#", 1],
    ["#", 2],
    ["#", 7],
    ["#", 8],
    ["#", "-"],
    ["#", 10],
    ["#", 11],
    ["#", 12],
    ["#", 15],
    ["-", 1],
    ["-", 2],
    ["-", 7],
    ["-", 8],
    ["-", "-"],
    ["-", 10],
    ["-", 11],
    ["-", 12],
    ["-", 15],
    [10, 1],
    [10, 2],
    [10, 7],
    [10, 8],
    [10, 10],
    [10, 11],
    [10, 12],
    [10, "%"],
    [10, 15],
    ["@", 1],
    ["@", 2],
    ["@", 7],
    ["@", 8],
    ["@", "-"],
    ["@", 15],
    [".", 10],
    [".", 11],
    [".", 12],
    ["+", 10],
    ["+", 11],
    ["+", 12],
    ["/", "*"]
  ],
  _s = yi.concat([
    [1, 4],
    [12, 4],
    [4, 4],
    [3, 21],
    [3, 5],
    [3, 16],
    [11, 11],
    [11, 12],
    [11, 2],
    [11, "-"],
    [22, 1],
    [22, 2],
    [22, 11],
    [22, 12],
    [22, 4],
    [22, "-"]
  ]);
function ki(e) {
  let t = new Set(e.map(([r, n]) => (xr(r) << 16) | xr(n)));
  return function (r, n, o) {
    let i = xr(n, o),
      s = o.charCodeAt(0);
    return (
      ((s === Bs && n !== 1 && n !== 2 && n !== 15) || s === Fs ? t.has((r << 16) | (s << 8)) : t.has((r << 16) | i)) &&
        this.emit(" ", 13, !0),
      i
    );
  };
}
var Us = ki(yi),
  yr = ki(_s);
var js = 92;
function Hs(e, t) {
  if (typeof t == "function") {
    let r = null;
    e.children.forEach((n) => {
      r !== null && t.call(this, r), this.node(n), (r = n);
    });
    return;
  }
  e.children.forEach(this.node, this);
}
function qs(e) {
  ve(e, (t, r, n) => {
    this.token(t, e.slice(r, n));
  });
}
function wi(e) {
  let t = new Map();
  for (let r in e.node) {
    let n = e.node[r];
    typeof (n.generate || n) == "function" && t.set(r, n.generate || n);
  }
  return function (r, n) {
    let o = "",
      i = 0,
      s = {
        node(c) {
          if (t.has(c.type)) t.get(c.type).call(u, c);
          else throw new Error("Unknown node type: " + c.type);
        },
        tokenBefore: yr,
        token(c, a) {
          (i = this.tokenBefore(i, c, a)),
            this.emit(a, c, !1),
            c === 9 &&
              a.charCodeAt(0) === js &&
              this.emit(
                `
`,
                13,
                !0
              );
        },
        emit(c) {
          o += c;
        },
        result() {
          return o;
        }
      };
    n &&
      (typeof n.decorator == "function" && (s = n.decorator(s)), n.sourceMap && (s = xi(s)), n.mode in Dt && (s.tokenBefore = Dt[n.mode]));
    let u = { node: (c) => s.node(c), children: Hs, token: (c, a) => s.token(c, a), tokenize: qs };
    return s.node(r), s.result();
  };
}
function vi(e) {
  return {
    fromPlainObject(t) {
      return (
        e(t, {
          enter(r) {
            r.children && !(r.children instanceof I) && (r.children = new I().fromArray(r.children));
          }
        }),
        t
      );
    },
    toPlainObject(t) {
      return (
        e(t, {
          leave(r) {
            r.children && r.children instanceof I && (r.children = r.children.toArray());
          }
        }),
        t
      );
    }
  };
}
var { hasOwnProperty: kr } = Object.prototype,
  at = function () {};
function Si(e) {
  return typeof e == "function" ? e : at;
}
function Ci(e, t) {
  return function (r, n, o) {
    r.type === t && e.call(this, r, n, o);
  };
}
function Ws(e, t) {
  let r = t.structure,
    n = [];
  for (let o in r) {
    if (kr.call(r, o) === !1) continue;
    let i = r[o],
      s = { name: o, type: !1, nullable: !1 };
    Array.isArray(i) || (i = [i]);
    for (let u of i) u === null ? (s.nullable = !0) : typeof u == "string" ? (s.type = "node") : Array.isArray(u) && (s.type = "list");
    s.type && n.push(s);
  }
  return n.length ? { context: t.walkContext, fields: n } : null;
}
function Ys(e) {
  let t = {};
  for (let r in e.node)
    if (kr.call(e.node, r)) {
      let n = e.node[r];
      if (!n.structure) throw new Error("Missed `structure` field in `" + r + "` node type definition");
      t[r] = Ws(r, n);
    }
  return t;
}
function Ai(e, t) {
  let r = e.fields.slice(),
    n = e.context,
    o = typeof n == "string";
  return (
    t && r.reverse(),
    function (i, s, u, c) {
      let a;
      o && ((a = s[n]), (s[n] = i));
      for (let l of r) {
        let p = i[l.name];
        if (!l.nullable || p) {
          if (l.type === "list") {
            if (t ? p.reduceRight(c, !1) : p.reduce(c, !1)) return !0;
          } else if (u(p)) return !0;
        }
      }
      o && (s[n] = a);
    }
  );
}
function Ti({ StyleSheet: e, Atrule: t, Rule: r, Block: n, DeclarationList: o }) {
  return {
    Atrule: { StyleSheet: e, Atrule: t, Rule: r, Block: n },
    Rule: { StyleSheet: e, Atrule: t, Rule: r, Block: n },
    Declaration: { StyleSheet: e, Atrule: t, Rule: r, Block: n, DeclarationList: o }
  };
}
function Ei(e) {
  let t = Ys(e),
    r = {},
    n = {},
    o = Symbol("break-walk"),
    i = Symbol("skip-node");
  for (let a in t) kr.call(t, a) && t[a] !== null && ((r[a] = Ai(t[a], !1)), (n[a] = Ai(t[a], !0)));
  let s = Ti(r),
    u = Ti(n),
    c = function (a, l) {
      function p(S, R, ke) {
        let z = m.call(X, S, R, ke);
        return z === o ? !0 : z === i ? !1 : !!((P.hasOwnProperty(S.type) && P[S.type](S, X, p, te)) || f.call(X, S, R, ke) === o);
      }
      let m = at,
        f = at,
        P = r,
        te = (S, R, ke, z) => S || p(R, ke, z),
        X = {
          break: o,
          skip: i,
          root: a,
          stylesheet: null,
          atrule: null,
          atrulePrelude: null,
          rule: null,
          selector: null,
          block: null,
          declaration: null,
          function: null
        };
      if (typeof l == "function") m = l;
      else if (l && ((m = Si(l.enter)), (f = Si(l.leave)), l.reverse && (P = n), l.visit)) {
        if (s.hasOwnProperty(l.visit)) P = l.reverse ? u[l.visit] : s[l.visit];
        else if (!t.hasOwnProperty(l.visit))
          throw new Error("Bad value `" + l.visit + "` for `visit` option (should be: " + Object.keys(t).sort().join(", ") + ")");
        (m = Ci(m, l.visit)), (f = Ci(f, l.visit));
      }
      if (m === at && f === at) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
      p(a);
    };
  return (
    (c.break = o),
    (c.skip = i),
    (c.find = function (a, l) {
      let p = null;
      return (
        c(a, function (m, f, P) {
          if (l.call(this, m, f, P)) return (p = m), o;
        }),
        p
      );
    }),
    (c.findLast = function (a, l) {
      let p = null;
      return (
        c(a, {
          reverse: !0,
          enter(m, f, P) {
            if (l.call(this, m, f, P)) return (p = m), o;
          }
        }),
        p
      );
    }),
    (c.findAll = function (a, l) {
      let p = [];
      return (
        c(a, function (m, f, P) {
          l.call(this, m, f, P) && p.push(m);
        }),
        p
      );
    }),
    c
  );
}
function Gs(e) {
  return e;
}
function Vs(e) {
  let { min: t, max: r, comma: n } = e;
  return t === 0 && r === 0
    ? n
      ? "#?"
      : "*"
    : t === 0 && r === 1
    ? "?"
    : t === 1 && r === 0
    ? n
      ? "#"
      : "+"
    : t === 1 && r === 1
    ? ""
    : (n ? "#" : "") + (t === r ? "{" + t + "}" : "{" + t + "," + (r !== 0 ? r : "") + "}");
}
function Ks(e) {
  switch (e.type) {
    case "Range":
      return " [" + (e.min === null ? "-\u221E" : e.min) + "," + (e.max === null ? "\u221E" : e.max) + "]";
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
}
function Qs(e, t, r, n) {
  let o = e.combinator === " " || n ? e.combinator : " " + e.combinator + " ",
    i = e.terms.map((s) => wr(s, t, r, n)).join(o);
  return e.explicit || r ? (n || i[0] === "," ? "[" : "[ ") + i + (n ? "]" : " ]") : i;
}
function wr(e, t, r, n) {
  let o;
  switch (e.type) {
    case "Group":
      o = Qs(e, t, r, n) + (e.disallowEmpty ? "!" : "");
      break;
    case "Multiplier":
      return wr(e.term, t, r, n) + t(Vs(e), e);
    case "Type":
      o = "<" + e.name + (e.opts ? t(Ks(e.opts), e.opts) : "") + ">";
      break;
    case "Property":
      o = "<'" + e.name + "'>";
      break;
    case "Keyword":
      o = e.name;
      break;
    case "AtKeyword":
      o = "@" + e.name;
      break;
    case "Function":
      o = e.name + "(";
      break;
    case "String":
    case "Token":
      o = e.value;
      break;
    case "Comma":
      o = ",";
      break;
    default:
      throw new Error("Unknown node type `" + e.type + "`");
  }
  return t(o, e);
}
function Pe(e, t) {
  let r = Gs,
    n = !1,
    o = !1;
  return (
    typeof t == "function"
      ? (r = t)
      : t && ((n = Boolean(t.forceBraces)), (o = Boolean(t.compact)), typeof t.decorate == "function" && (r = t.decorate)),
    wr(e, r, n, o)
  );
}
var Li = { offset: 0, line: 1, column: 1 };
function Xs(e, t) {
  let r = e.tokens,
    n = e.longestMatch,
    o = (n < r.length && r[n].node) || null,
    i = o !== t ? o : null,
    s = 0,
    u = 0,
    c = 0,
    a = "",
    l,
    p;
  for (let m = 0; m < r.length; m++) {
    let f = r[m].value;
    m === n && ((u = f.length), (s = a.length)), i !== null && r[m].node === i && (m <= n ? c++ : (c = 0)), (a += f);
  }
  return (
    n === r.length || c > 1
      ? ((l = Ot(i || t, "end") || st(Li, a)), (p = st(l)))
      : ((l = Ot(i, "start") || st(Ot(t, "start") || Li, a.slice(0, s))), (p = Ot(i, "end") || st(l, a.substr(s, u)))),
    { css: a, mismatchOffset: s, mismatchLength: u, start: l, end: p }
  );
}
function Ot(e, t) {
  let r = e && e.loc && e.loc[t];
  return r ? ("line" in r ? st(r) : r) : null;
}
function st({ offset: e, line: t, column: r }, n) {
  let o = { offset: e, line: t, column: r };
  if (n) {
    let i = n.split(/\n|\r\n?|\f/);
    (o.offset += n.length), (o.line += i.length - 1), (o.column = i.length === 1 ? o.column + n.length : i.pop().length + 1);
  }
  return o;
}
var je = function (e, t) {
    let r = Ee("SyntaxReferenceError", e + (t ? " `" + t + "`" : ""));
    return (r.reference = t), r;
  },
  Pi = function (e, t, r, n) {
    let o = Ee("SyntaxMatchError", e),
      { css: i, mismatchOffset: s, mismatchLength: u, start: c, end: a } = Xs(n, r);
    return (
      (o.rawMessage = e),
      (o.syntax = t ? Pe(t) : "<generic>"),
      (o.css = i),
      (o.mismatchOffset = s),
      (o.mismatchLength = u),
      (o.message =
        e +
        `
  syntax: ` +
        o.syntax +
        `
   value: ` +
        (i || "<empty string>") +
        `
  --------` +
        new Array(o.mismatchOffset + 1).join("-") +
        "^"),
      Object.assign(o, c),
      (o.loc = { source: (r && r.loc && r.loc.source) || "<unknown>", start: c, end: a }),
      o
    );
  };
var Nt = new Map(),
  He = new Map(),
  zt = 45,
  Mt = $s,
  vr = Zs,
  _m = Sr;
function Rt(e, t) {
  return (t = t || 0), e.length - t >= 2 && e.charCodeAt(t) === zt && e.charCodeAt(t + 1) === zt;
}
function Sr(e, t) {
  if (((t = t || 0), e.length - t >= 3 && e.charCodeAt(t) === zt && e.charCodeAt(t + 1) !== zt)) {
    let r = e.indexOf("-", t + 2);
    if (r !== -1) return e.substring(t, r + 1);
  }
  return "";
}
function $s(e) {
  if (Nt.has(e)) return Nt.get(e);
  let t = e.toLowerCase(),
    r = Nt.get(t);
  if (r === void 0) {
    let n = Rt(t, 0),
      o = n ? "" : Sr(t, 0);
    r = Object.freeze({ basename: t.substr(o.length), name: t, prefix: o, vendor: o, custom: n });
  }
  return Nt.set(e, r), r;
}
function Zs(e) {
  if (He.has(e)) return He.get(e);
  let t = e,
    r = e[0];
  r === "/" ? (r = e[1] === "/" ? "//" : "/") : r !== "_" && r !== "*" && r !== "$" && r !== "#" && r !== "+" && r !== "&" && (r = "");
  let n = Rt(t, r.length);
  if (!n && ((t = t.toLowerCase()), He.has(t))) {
    let u = He.get(t);
    return He.set(e, u), u;
  }
  let o = n ? "" : Sr(t, r.length),
    i = t.substr(0, r.length + o.length),
    s = Object.freeze({ basename: t.substr(i.length), name: t.substr(r.length), hack: r, vendor: o, prefix: i, custom: n });
  return He.set(e, s), s;
}
var Ft = ["initial", "inherit", "unset", "revert", "revert-layer"];
var ct = 43,
  he = 45,
  Cr = 110,
  qe = !0,
  el = !1;
function Tr(e, t) {
  return e !== null && e.type === 9 && e.value.charCodeAt(0) === t;
}
function lt(e, t, r) {
  for (; e !== null && (e.type === 13 || e.type === 25); ) e = r(++t);
  return t;
}
function Se(e, t, r, n) {
  if (!e) return 0;
  let o = e.value.charCodeAt(t);
  if (o === ct || o === he) {
    if (r) return 0;
    t++;
  }
  for (; t < e.value.length; t++) if (!B(e.value.charCodeAt(t))) return 0;
  return n + 1;
}
function Ar(e, t, r) {
  let n = !1,
    o = lt(e, t, r);
  if (((e = r(o)), e === null)) return t;
  if (e.type !== 10)
    if (Tr(e, ct) || Tr(e, he)) {
      if (((n = !0), (o = lt(r(++o), o, r)), (e = r(o)), e === null || e.type !== 10)) return 0;
    } else return t;
  if (!n) {
    let i = e.value.charCodeAt(0);
    if (i !== ct && i !== he) return 0;
  }
  return Se(e, n ? 0 : 1, n, o);
}
function Er(e, t) {
  let r = 0;
  if (!e) return 0;
  if (e.type === 10) return Se(e, 0, el, r);
  if (e.type === 1 && e.value.charCodeAt(0) === he) {
    if (!de(e.value, 1, Cr)) return 0;
    switch (e.value.length) {
      case 2:
        return Ar(t(++r), r, t);
      case 3:
        return e.value.charCodeAt(2) !== he ? 0 : ((r = lt(t(++r), r, t)), (e = t(r)), Se(e, 0, qe, r));
      default:
        return e.value.charCodeAt(2) !== he ? 0 : Se(e, 3, qe, r);
    }
  } else if (e.type === 1 || (Tr(e, ct) && t(r + 1).type === 1)) {
    if ((e.type !== 1 && (e = t(++r)), e === null || !de(e.value, 0, Cr))) return 0;
    switch (e.value.length) {
      case 1:
        return Ar(t(++r), r, t);
      case 2:
        return e.value.charCodeAt(1) !== he ? 0 : ((r = lt(t(++r), r, t)), (e = t(r)), Se(e, 0, qe, r));
      default:
        return e.value.charCodeAt(1) !== he ? 0 : Se(e, 2, qe, r);
    }
  } else if (e.type === 12) {
    let n = e.value.charCodeAt(0),
      o = n === ct || n === he ? 1 : 0,
      i = o;
    for (; i < e.value.length && B(e.value.charCodeAt(i)); i++);
    return i === o || !de(e.value, i, Cr)
      ? 0
      : i + 1 === e.value.length
      ? Ar(t(++r), r, t)
      : e.value.charCodeAt(i + 1) !== he
      ? 0
      : i + 2 === e.value.length
      ? ((r = lt(t(++r), r, t)), (e = t(r)), Se(e, 0, qe, r))
      : Se(e, i + 2, qe, r);
  }
  return 0;
}
var tl = 43,
  Ii = 45,
  Di = 63,
  rl = 117;
function Lr(e, t) {
  return e !== null && e.type === 9 && e.value.charCodeAt(0) === t;
}
function nl(e, t) {
  return e.value.charCodeAt(0) === t;
}
function ut(e, t, r) {
  let n = 0;
  for (let o = t; o < e.value.length; o++) {
    let i = e.value.charCodeAt(o);
    if (i === Ii && r && n !== 0) return ut(e, t + n + 1, !1), 6;
    if (!ee(i) || ++n > 6) return 0;
  }
  return n;
}
function Bt(e, t, r) {
  if (!e) return 0;
  for (; Lr(r(t), Di); ) {
    if (++e > 6) return 0;
    t++;
  }
  return t;
}
function Pr(e, t) {
  let r = 0;
  if (e === null || e.type !== 1 || !de(e.value, 0, rl) || ((e = t(++r)), e === null)) return 0;
  if (Lr(e, tl)) return (e = t(++r)), e === null ? 0 : e.type === 1 ? Bt(ut(e, 0, !0), ++r, t) : Lr(e, Di) ? Bt(1, ++r, t) : 0;
  if (e.type === 10) {
    let n = ut(e, 1, !0);
    return n === 0
      ? 0
      : ((e = t(++r)), e === null ? r : e.type === 12 || e.type === 10 ? (!nl(e, Ii) || !ut(e, 1, !1) ? 0 : r + 1) : Bt(n, r, t));
  }
  return e.type === 12 ? Bt(ut(e, 1, !0), ++r, t) : 0;
}
var ol = ["calc(", "-moz-calc(", "-webkit-calc("],
  Ir = new Map([
    [2, 22],
    [21, 22],
    [19, 20],
    [23, 24]
  ]),
  il = [
    "cm",
    "mm",
    "q",
    "in",
    "pt",
    "pc",
    "px",
    "em",
    "rem",
    "ex",
    "rex",
    "cap",
    "rcap",
    "ch",
    "rch",
    "ic",
    "ric",
    "lh",
    "rlh",
    "vw",
    "svw",
    "lvw",
    "dvw",
    "vh",
    "svh",
    "lvh",
    "dvh",
    "vi",
    "svi",
    "lvi",
    "dvi",
    "vb",
    "svb",
    "lvb",
    "dvb",
    "vmin",
    "svmin",
    "lvmin",
    "dvmin",
    "vmax",
    "svmax",
    "lvmax",
    "dvmax",
    "cqw",
    "cqh",
    "cqi",
    "cqb",
    "cqmin",
    "cqmax"
  ],
  al = ["deg", "grad", "rad", "turn"],
  sl = ["s", "ms"],
  ll = ["hz", "khz"],
  cl = ["dpi", "dpcm", "dppx", "x"],
  ul = ["fr"],
  pl = ["db"],
  hl = ["st"];
function le(e, t) {
  return t < e.length ? e.charCodeAt(t) : 0;
}
function Ni(e, t) {
  return ge(e, 0, e.length, t);
}
function zi(e, t) {
  for (let r = 0; r < t.length; r++) if (Ni(e, t[r])) return !0;
  return !1;
}
function Mi(e, t) {
  return t !== e.length - 2 ? !1 : le(e, t) === 92 && B(le(e, t + 1));
}
function _t(e, t, r) {
  if (e && e.type === "Range") {
    let n = Number(r !== void 0 && r !== t.length ? t.substr(0, r) : t);
    if (isNaN(n) || (e.min !== null && n < e.min && typeof e.min != "string") || (e.max !== null && n > e.max && typeof e.max != "string"))
      return !0;
  }
  return !1;
}
function ml(e, t) {
  let r = 0,
    n = [],
    o = 0;
  e: do {
    switch (e.type) {
      case 24:
      case 22:
      case 20:
        if (e.type !== r) break e;
        if (((r = n.pop()), n.length === 0)) {
          o++;
          break e;
        }
        break;
      case 2:
      case 21:
      case 19:
      case 23:
        n.push(r), (r = Ir.get(e.type));
        break;
    }
    o++;
  } while ((e = t(o)));
  return o;
}
function ie(e) {
  return function (t, r, n) {
    return t === null ? 0 : t.type === 2 && zi(t.value, ol) ? ml(t, r) : e(t, r, n);
  };
}
function N(e) {
  return function (t) {
    return t === null || t.type !== e ? 0 : 1;
  };
}
function fl(e) {
  if (e === null || e.type !== 1) return 0;
  let t = e.value.toLowerCase();
  return zi(t, Ft) || Ni(t, "default") ? 0 : 1;
}
function dl(e) {
  return e === null || e.type !== 1 || le(e.value, 0) !== 45 || le(e.value, 1) !== 45 ? 0 : 1;
}
function gl(e) {
  if (e === null || e.type !== 4) return 0;
  let t = e.value.length;
  if (t !== 4 && t !== 5 && t !== 7 && t !== 9) return 0;
  for (let r = 1; r < t; r++) if (!ee(le(e.value, r))) return 0;
  return 1;
}
function bl(e) {
  return e === null || e.type !== 4 || !ze(le(e.value, 1), le(e.value, 2), le(e.value, 3)) ? 0 : 1;
}
function xl(e, t) {
  if (!e) return 0;
  let r = 0,
    n = [],
    o = 0;
  e: do {
    switch (e.type) {
      case 6:
      case 8:
        break e;
      case 24:
      case 22:
      case 20:
        if (e.type !== r) break e;
        r = n.pop();
        break;
      case 17:
        if (r === 0) break e;
        break;
      case 9:
        if (r === 0 && e.value === "!") break e;
        break;
      case 2:
      case 21:
      case 19:
      case 23:
        n.push(r), (r = Ir.get(e.type));
        break;
    }
    o++;
  } while ((e = t(o)));
  return o;
}
function yl(e, t) {
  if (!e) return 0;
  let r = 0,
    n = [],
    o = 0;
  e: do {
    switch (e.type) {
      case 6:
      case 8:
        break e;
      case 24:
      case 22:
      case 20:
        if (e.type !== r) break e;
        r = n.pop();
        break;
      case 2:
      case 21:
      case 19:
      case 23:
        n.push(r), (r = Ir.get(e.type));
        break;
    }
    o++;
  } while ((e = t(o)));
  return o;
}
function ye(e) {
  return (
    e && (e = new Set(e)),
    function (t, r, n) {
      if (t === null || t.type !== 12) return 0;
      let o = Te(t.value, 0);
      if (e !== null) {
        let i = t.value.indexOf("\\", o),
          s = i === -1 || !Mi(t.value, i) ? t.value.substr(o) : t.value.substring(o, i);
        if (e.has(s.toLowerCase()) === !1) return 0;
      }
      return _t(n, t.value, o) ? 0 : 1;
    }
  );
}
function kl(e, t, r) {
  return e === null || e.type !== 11 || _t(r, e.value, e.value.length - 1) ? 0 : 1;
}
function Oi(e) {
  return (
    typeof e != "function" &&
      (e = function () {
        return 0;
      }),
    function (t, r, n) {
      return t !== null && t.type === 10 && Number(t.value) === 0 ? 1 : e(t, r, n);
    }
  );
}
function wl(e, t, r) {
  if (e === null) return 0;
  let n = Te(e.value, 0);
  return (!(n === e.value.length) && !Mi(e.value, n)) || _t(r, e.value, n) ? 0 : 1;
}
function vl(e, t, r) {
  if (e === null || e.type !== 10) return 0;
  let n = le(e.value, 0) === 43 || le(e.value, 0) === 45 ? 1 : 0;
  for (; n < e.value.length; n++) if (!B(le(e.value, n))) return 0;
  return _t(r, e.value, n) ? 0 : 1;
}
var Dr = {
  "ident-token": N(1),
  "function-token": N(2),
  "at-keyword-token": N(3),
  "hash-token": N(4),
  "string-token": N(5),
  "bad-string-token": N(6),
  "url-token": N(7),
  "bad-url-token": N(8),
  "delim-token": N(9),
  "number-token": N(10),
  "percentage-token": N(11),
  "dimension-token": N(12),
  "whitespace-token": N(13),
  "CDO-token": N(14),
  "CDC-token": N(15),
  "colon-token": N(16),
  "semicolon-token": N(17),
  "comma-token": N(18),
  "[-token": N(19),
  "]-token": N(20),
  "(-token": N(21),
  ")-token": N(22),
  "{-token": N(23),
  "}-token": N(24),
  string: N(5),
  ident: N(1),
  "custom-ident": fl,
  "custom-property-name": dl,
  "hex-color": gl,
  "id-selector": bl,
  "an-plus-b": Er,
  urange: Pr,
  "declaration-value": xl,
  "any-value": yl,
  dimension: ie(ye(null)),
  angle: ie(ye(al)),
  decibel: ie(ye(pl)),
  frequency: ie(ye(ll)),
  flex: ie(ye(ul)),
  length: ie(Oi(ye(il))),
  resolution: ie(ye(cl)),
  semitones: ie(ye(hl)),
  time: ie(ye(sl)),
  percentage: ie(kl),
  zero: Oi(),
  number: ie(wl),
  integer: ie(vl)
};
var Qi = {};
b(Qi, { SyntaxError: () => Ut, generate: () => Pe, parse: () => Ge, walk: () => Vt });
function Ut(e, t, r) {
  return Object.assign(Ee("SyntaxError", e), {
    input: t,
    offset: r,
    rawMessage: e,
    message:
      e +
      `
  ` +
      t +
      `
--` +
      new Array((r || t.length) + 1).join("-") +
      "^"
  });
}
var Sl = 9,
  Cl = 10,
  Al = 12,
  Tl = 13,
  El = 32,
  jt = class {
    constructor(t) {
      (this.str = t), (this.pos = 0);
    }
    charCodeAt(t) {
      return t < this.str.length ? this.str.charCodeAt(t) : 0;
    }
    charCode() {
      return this.charCodeAt(this.pos);
    }
    nextCharCode() {
      return this.charCodeAt(this.pos + 1);
    }
    nextNonWsCode(t) {
      return this.charCodeAt(this.findWsEnd(t));
    }
    findWsEnd(t) {
      for (; t < this.str.length; t++) {
        let r = this.str.charCodeAt(t);
        if (r !== Tl && r !== Cl && r !== Al && r !== El && r !== Sl) break;
      }
      return t;
    }
    substringToPos(t) {
      return this.str.substring(this.pos, (this.pos = t));
    }
    eat(t) {
      this.charCode() !== t && this.error("Expect `" + String.fromCharCode(t) + "`"), this.pos++;
    }
    peek() {
      return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
    }
    error(t) {
      throw new Ut(t, this.str, this.pos);
    }
  };
var Ll = 9,
  Pl = 10,
  Il = 12,
  Dl = 13,
  Ol = 32,
  qi = 33,
  zr = 35,
  Ri = 38,
  Ht = 39,
  Wi = 40,
  Nl = 41,
  Yi = 42,
  Mr = 43,
  Rr = 44,
  Fi = 45,
  Fr = 60,
  Gi = 62,
  Nr = 63,
  zl = 64,
  Gt = 91,
  Br = 93,
  qt = 123,
  Bi = 124,
  _i = 125,
  Ui = 8734,
  pt = new Uint8Array(128).map((e, t) => (/[a-zA-Z0-9\-]/.test(String.fromCharCode(t)) ? 1 : 0)),
  ji = { " ": 1, "&&": 2, "||": 3, "|": 4 };
function Wt(e) {
  return e.substringToPos(e.findWsEnd(e.pos));
}
function We(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    let r = e.str.charCodeAt(t);
    if (r >= 128 || pt[r] === 0) break;
  }
  return e.pos === t && e.error("Expect a keyword"), e.substringToPos(t);
}
function Yt(e) {
  let t = e.pos;
  for (; t < e.str.length; t++) {
    let r = e.str.charCodeAt(t);
    if (r < 48 || r > 57) break;
  }
  return e.pos === t && e.error("Expect a number"), e.substringToPos(t);
}
function Ml(e) {
  let t = e.str.indexOf("'", e.pos + 1);
  return t === -1 && ((e.pos = e.str.length), e.error("Expect an apostrophe")), e.substringToPos(t + 1);
}
function Hi(e) {
  let t = null,
    r = null;
  return (
    e.eat(qt),
    (t = Yt(e)),
    e.charCode() === Rr ? (e.pos++, e.charCode() !== _i && (r = Yt(e))) : (r = t),
    e.eat(_i),
    { min: Number(t), max: r ? Number(r) : 0 }
  );
}
function Rl(e) {
  let t = null,
    r = !1;
  switch (e.charCode()) {
    case Yi:
      e.pos++, (t = { min: 0, max: 0 });
      break;
    case Mr:
      e.pos++, (t = { min: 1, max: 0 });
      break;
    case Nr:
      e.pos++, (t = { min: 0, max: 1 });
      break;
    case zr:
      e.pos++,
        (r = !0),
        e.charCode() === qt ? (t = Hi(e)) : e.charCode() === Nr ? (e.pos++, (t = { min: 0, max: 0 })) : (t = { min: 1, max: 0 });
      break;
    case qt:
      t = Hi(e);
      break;
    default:
      return null;
  }
  return { type: "Multiplier", comma: r, min: t.min, max: t.max, term: null };
}
function Ye(e, t) {
  let r = Rl(e);
  return r !== null ? ((r.term = t), e.charCode() === zr && e.charCodeAt(e.pos - 1) === Mr ? Ye(e, r) : r) : t;
}
function Or(e) {
  let t = e.peek();
  return t === "" ? null : { type: "Token", value: t };
}
function Fl(e) {
  let t;
  return e.eat(Fr), e.eat(Ht), (t = We(e)), e.eat(Ht), e.eat(Gi), Ye(e, { type: "Property", name: t });
}
function Bl(e) {
  let t = null,
    r = null,
    n = 1;
  return (
    e.eat(Gt),
    e.charCode() === Fi && (e.peek(), (n = -1)),
    n == -1 && e.charCode() === Ui ? e.peek() : ((t = n * Number(Yt(e))), pt[e.charCode()] !== 0 && (t += We(e))),
    Wt(e),
    e.eat(Rr),
    Wt(e),
    e.charCode() === Ui
      ? e.peek()
      : ((n = 1), e.charCode() === Fi && (e.peek(), (n = -1)), (r = n * Number(Yt(e))), pt[e.charCode()] !== 0 && (r += We(e))),
    e.eat(Br),
    { type: "Range", min: t, max: r }
  );
}
function _l(e) {
  let t,
    r = null;
  return (
    e.eat(Fr),
    (t = We(e)),
    e.charCode() === Wi && e.nextCharCode() === Nl && ((e.pos += 2), (t += "()")),
    e.charCodeAt(e.findWsEnd(e.pos)) === Gt && (Wt(e), (r = Bl(e))),
    e.eat(Gi),
    Ye(e, { type: "Type", name: t, opts: r })
  );
}
function Ul(e) {
  let t = We(e);
  return e.charCode() === Wi ? (e.pos++, { type: "Function", name: t }) : Ye(e, { type: "Keyword", name: t });
}
function jl(e, t) {
  function r(o, i) {
    return { type: "Group", terms: o, combinator: i, disallowEmpty: !1, explicit: !1 };
  }
  let n;
  for (t = Object.keys(t).sort((o, i) => ji[o] - ji[i]); t.length > 0; ) {
    n = t.shift();
    let o = 0,
      i = 0;
    for (; o < e.length; o++) {
      let s = e[o];
      s.type === "Combinator" &&
        (s.value === n
          ? (i === -1 && (i = o - 1), e.splice(o, 1), o--)
          : (i !== -1 && o - i > 1 && (e.splice(i, o - i, r(e.slice(i, o), n)), (o = i + 1)), (i = -1)));
    }
    i !== -1 && t.length && e.splice(i, o - i, r(e.slice(i, o), n));
  }
  return n;
}
function Vi(e) {
  let t = [],
    r = {},
    n,
    o = null,
    i = e.pos;
  for (; (n = ql(e)); )
    n.type !== "Spaces" &&
      (n.type === "Combinator"
        ? ((o === null || o.type === "Combinator") && ((e.pos = i), e.error("Unexpected combinator")), (r[n.value] = !0))
        : o !== null && o.type !== "Combinator" && ((r[" "] = !0), t.push({ type: "Combinator", value: " " })),
      t.push(n),
      (o = n),
      (i = e.pos));
  return (
    o !== null && o.type === "Combinator" && ((e.pos -= i), e.error("Unexpected combinator")),
    { type: "Group", terms: t, combinator: jl(t, r) || " ", disallowEmpty: !1, explicit: !1 }
  );
}
function Hl(e) {
  let t;
  return e.eat(Gt), (t = Vi(e)), e.eat(Br), (t.explicit = !0), e.charCode() === qi && (e.pos++, (t.disallowEmpty = !0)), t;
}
function ql(e) {
  let t = e.charCode();
  if (t < 128 && pt[t] === 1) return Ul(e);
  switch (t) {
    case Br:
      break;
    case Gt:
      return Ye(e, Hl(e));
    case Fr:
      return e.nextCharCode() === Ht ? Fl(e) : _l(e);
    case Bi:
      return { type: "Combinator", value: e.substringToPos(e.pos + (e.nextCharCode() === Bi ? 2 : 1)) };
    case Ri:
      return e.pos++, e.eat(Ri), { type: "Combinator", value: "&&" };
    case Rr:
      return e.pos++, { type: "Comma" };
    case Ht:
      return Ye(e, { type: "String", value: Ml(e) });
    case Ol:
    case Ll:
    case Pl:
    case Dl:
    case Il:
      return { type: "Spaces", value: Wt(e) };
    case zl:
      return (t = e.nextCharCode()), t < 128 && pt[t] === 1 ? (e.pos++, { type: "AtKeyword", name: We(e) }) : Or(e);
    case Yi:
    case Mr:
    case Nr:
    case zr:
    case qi:
      break;
    case qt:
      if (((t = e.nextCharCode()), t < 48 || t > 57)) return Or(e);
      break;
    default:
      return Or(e);
  }
}
function Ge(e) {
  let t = new jt(e),
    r = Vi(t);
  return t.pos !== e.length && t.error("Unexpected input"), r.terms.length === 1 && r.terms[0].type === "Group" ? r.terms[0] : r;
}
var ht = function () {};
function Ki(e) {
  return typeof e == "function" ? e : ht;
}
function Vt(e, t, r) {
  function n(s) {
    switch ((o.call(r, s), s.type)) {
      case "Group":
        s.terms.forEach(n);
        break;
      case "Multiplier":
        n(s.term);
        break;
      case "Type":
      case "Property":
      case "Keyword":
      case "AtKeyword":
      case "Function":
      case "String":
      case "Token":
      case "Comma":
        break;
      default:
        throw new Error("Unknown type: " + s.type);
    }
    i.call(r, s);
  }
  let o = ht,
    i = ht;
  if ((typeof t == "function" ? (o = t) : t && ((o = Ki(t.enter)), (i = Ki(t.leave))), o === ht && i === ht))
    throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
  n(e, r);
}
var Wl = {
  decorator(e) {
    let t = [],
      r = null;
    return {
      ...e,
      node(n) {
        let o = r;
        (r = n), e.node.call(this, n), (r = o);
      },
      emit(n, o, i) {
        t.push({ type: o, value: n, node: i ? null : r });
      },
      result() {
        return t;
      }
    };
  }
};
function Yl(e) {
  let t = [];
  return ve(e, (r, n, o) => t.push({ type: r, value: e.slice(n, o), node: null })), t;
}
function Xi(e, t) {
  return typeof e == "string" ? Yl(e) : t.generate(e, Wl);
}
var C = { type: "Match" },
  L = { type: "Mismatch" },
  Kt = { type: "DisallowEmpty" },
  Gl = 40,
  Vl = 41;
function Z(e, t, r) {
  return (t === C && r === L) || (e === C && t === C && r === C)
    ? e
    : (e.type === "If" && e.else === L && t === C && ((t = e.then), (e = e.match)), { type: "If", match: e, then: t, else: r });
}
function Zi(e) {
  return e.length > 2 && e.charCodeAt(e.length - 2) === Gl && e.charCodeAt(e.length - 1) === Vl;
}
function $i(e) {
  return e.type === "Keyword" || e.type === "AtKeyword" || e.type === "Function" || (e.type === "Type" && Zi(e.name));
}
function _r(e, t, r) {
  switch (e) {
    case " ": {
      let n = C;
      for (let o = t.length - 1; o >= 0; o--) {
        let i = t[o];
        n = Z(i, n, L);
      }
      return n;
    }
    case "|": {
      let n = L,
        o = null;
      for (let i = t.length - 1; i >= 0; i--) {
        let s = t[i];
        if (
          $i(s) &&
          (o === null && i > 0 && $i(t[i - 1]) && ((o = Object.create(null)), (n = Z({ type: "Enum", map: o }, C, n))), o !== null)
        ) {
          let u = (Zi(s.name) ? s.name.slice(0, -1) : s.name).toLowerCase();
          if (!(u in o)) {
            o[u] = s;
            continue;
          }
        }
        (o = null), (n = Z(s, C, n));
      }
      return n;
    }
    case "&&": {
      if (t.length > 5) return { type: "MatchOnce", terms: t, all: !0 };
      let n = L;
      for (let o = t.length - 1; o >= 0; o--) {
        let i = t[o],
          s;
        t.length > 1
          ? (s = _r(
              e,
              t.filter(function (u) {
                return u !== i;
              }),
              !1
            ))
          : (s = C),
          (n = Z(i, s, n));
      }
      return n;
    }
    case "||": {
      if (t.length > 5) return { type: "MatchOnce", terms: t, all: !1 };
      let n = r ? C : L;
      for (let o = t.length - 1; o >= 0; o--) {
        let i = t[o],
          s;
        t.length > 1
          ? (s = _r(
              e,
              t.filter(function (u) {
                return u !== i;
              }),
              !0
            ))
          : (s = C),
          (n = Z(i, s, n));
      }
      return n;
    }
  }
}
function Kl(e) {
  let t = C,
    r = Ur(e.term);
  if (e.max === 0)
    (r = Z(r, Kt, L)), (t = Z(r, null, L)), (t.then = Z(C, C, t)), e.comma && (t.then.else = Z({ type: "Comma", syntax: e }, t, L));
  else
    for (let n = e.min || 1; n <= e.max; n++) e.comma && t !== C && (t = Z({ type: "Comma", syntax: e }, t, L)), (t = Z(r, Z(C, C, t), L));
  if (e.min === 0) t = Z(C, C, t);
  else for (let n = 0; n < e.min - 1; n++) e.comma && t !== C && (t = Z({ type: "Comma", syntax: e }, t, L)), (t = Z(r, t, L));
  return t;
}
function Ur(e) {
  if (typeof e == "function") return { type: "Generic", fn: e };
  switch (e.type) {
    case "Group": {
      let t = _r(e.combinator, e.terms.map(Ur), !1);
      return e.disallowEmpty && (t = Z(t, Kt, L)), t;
    }
    case "Multiplier":
      return Kl(e);
    case "Type":
    case "Property":
      return { type: e.type, name: e.name, syntax: e };
    case "Keyword":
      return { type: e.type, name: e.name.toLowerCase(), syntax: e };
    case "AtKeyword":
      return { type: e.type, name: "@" + e.name.toLowerCase(), syntax: e };
    case "Function":
      return { type: e.type, name: e.name.toLowerCase() + "(", syntax: e };
    case "String":
      return e.value.length === 3
        ? { type: "Token", value: e.value.charAt(1), syntax: e }
        : { type: e.type, value: e.value.substr(1, e.value.length - 2).replace(/\\'/g, "'"), syntax: e };
    case "Token":
      return { type: e.type, value: e.value, syntax: e };
    case "Comma":
      return { type: e.type, syntax: e };
    default:
      throw new Error("Unknown node type:", e.type);
  }
}
function Qt(e, t) {
  return typeof e == "string" && (e = Ge(e)), { type: "MatchGraph", match: Ur(e), syntax: t || null, source: e };
}
var { hasOwnProperty: Ji } = Object.prototype,
  Ql = 0,
  Xl = 1,
  Hr = 2,
  oa = 3,
  ea = "Match",
  $l = "Mismatch",
  Zl = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)",
  ta = 15e3,
  Jl = 0;
function ec(e) {
  let t = null,
    r = null,
    n = e;
  for (; n !== null; ) (r = n.prev), (n.prev = t), (t = n), (n = r);
  return t;
}
function jr(e, t) {
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) {
    let n = t.charCodeAt(r),
      o = e.charCodeAt(r);
    if ((o >= 65 && o <= 90 && (o = o | 32), o !== n)) return !1;
  }
  return !0;
}
function tc(e) {
  return e.type !== 9 ? !1 : e.value !== "?";
}
function ra(e) {
  return e === null ? !0 : e.type === 18 || e.type === 2 || e.type === 21 || e.type === 19 || e.type === 23 || tc(e);
}
function na(e) {
  return e === null ? !0 : e.type === 22 || e.type === 20 || e.type === 24 || (e.type === 9 && e.value === "/");
}
function rc(e, t, r) {
  function n() {
    do R++, (S = R < e.length ? e[R] : null);
    while (S !== null && (S.type === 13 || S.type === 25));
  }
  function o(ae) {
    let fe = R + ae;
    return fe < e.length ? e[fe] : null;
  }
  function i(ae, fe) {
    return { nextState: ae, matchStack: z, syntaxStack: p, thenStack: m, tokenIndex: R, prev: fe };
  }
  function s(ae) {
    m = { nextState: ae, matchStack: z, syntaxStack: p, prev: m };
  }
  function u(ae) {
    f = i(ae, f);
  }
  function c() {
    (z = { type: Xl, syntax: t.syntax, token: S, prev: z }), n(), (P = null), R > ke && (ke = R);
  }
  function a() {
    (p = { syntax: t.syntax, opts: t.syntax.opts || (p !== null && p.opts) || null, prev: p }),
      (z = { type: Hr, syntax: t.syntax, token: z.token, prev: z });
  }
  function l() {
    z.type === Hr ? (z = z.prev) : (z = { type: oa, syntax: p.syntax, token: z.token, prev: z }), (p = p.prev);
  }
  let p = null,
    m = null,
    f = null,
    P = null,
    te = 0,
    X = null,
    S = null,
    R = -1,
    ke = 0,
    z = { type: Ql, syntax: null, token: null, prev: null };
  for (n(); X === null && ++te < ta; )
    switch (t.type) {
      case "Match":
        if (m === null) {
          if (S !== null && (R !== e.length - 1 || (S.value !== "\\0" && S.value !== "\\9"))) {
            t = L;
            break;
          }
          X = ea;
          break;
        }
        if (((t = m.nextState), t === Kt))
          if (m.matchStack === z) {
            t = L;
            break;
          } else t = C;
        for (; m.syntaxStack !== p; ) l();
        m = m.prev;
        break;
      case "Mismatch":
        if (P !== null && P !== !1) (f === null || R > f.tokenIndex) && ((f = P), (P = !1));
        else if (f === null) {
          X = $l;
          break;
        }
        (t = f.nextState),
          (m = f.thenStack),
          (p = f.syntaxStack),
          (z = f.matchStack),
          (R = f.tokenIndex),
          (S = R < e.length ? e[R] : null),
          (f = f.prev);
        break;
      case "MatchGraph":
        t = t.match;
        break;
      case "If":
        t.else !== L && u(t.else), t.then !== C && s(t.then), (t = t.match);
        break;
      case "MatchOnce":
        t = { type: "MatchOnceBuffer", syntax: t, index: 0, mask: 0 };
        break;
      case "MatchOnceBuffer": {
        let Q = t.syntax.terms;
        if (t.index === Q.length) {
          if (t.mask === 0 || t.syntax.all) {
            t = L;
            break;
          }
          t = C;
          break;
        }
        if (t.mask === (1 << Q.length) - 1) {
          t = C;
          break;
        }
        for (; t.index < Q.length; t.index++) {
          let J = 1 << t.index;
          if ((t.mask & J) === 0) {
            u(t), s({ type: "AddMatchOnce", syntax: t.syntax, mask: t.mask | J }), (t = Q[t.index++]);
            break;
          }
        }
        break;
      }
      case "AddMatchOnce":
        t = { type: "MatchOnceBuffer", syntax: t.syntax, index: 0, mask: t.mask };
        break;
      case "Enum":
        if (S !== null) {
          let Q = S.value.toLowerCase();
          if ((Q.indexOf("\\") !== -1 && (Q = Q.replace(/\\[09].*$/, "")), Ji.call(t.map, Q))) {
            t = t.map[Q];
            break;
          }
        }
        t = L;
        break;
      case "Generic": {
        let Q = p !== null ? p.opts : null,
          J = R + Math.floor(t.fn(S, o, Q));
        if (!isNaN(J) && J > R) {
          for (; R < J; ) c();
          t = C;
        } else t = L;
        break;
      }
      case "Type":
      case "Property": {
        let Q = t.type === "Type" ? "types" : "properties",
          J = Ji.call(r, Q) ? r[Q][t.name] : null;
        if (!J || !J.match) throw new Error("Bad syntax reference: " + (t.type === "Type" ? "<" + t.name + ">" : "<'" + t.name + "'>"));
        if (
          P !== !1 &&
          S !== null &&
          t.type === "Type" &&
          ((t.name === "custom-ident" && S.type === 1) || (t.name === "length" && S.value === "0"))
        ) {
          P === null && (P = i(t, f)), (t = L);
          break;
        }
        a(), (t = J.match);
        break;
      }
      case "Keyword": {
        let Q = t.name;
        if (S !== null) {
          let J = S.value;
          if ((J.indexOf("\\") !== -1 && (J = J.replace(/\\[09].*$/, "")), jr(J, Q))) {
            c(), (t = C);
            break;
          }
        }
        t = L;
        break;
      }
      case "AtKeyword":
      case "Function":
        if (S !== null && jr(S.value, t.name)) {
          c(), (t = C);
          break;
        }
        t = L;
        break;
      case "Token":
        if (S !== null && S.value === t.value) {
          c(), (t = C);
          break;
        }
        t = L;
        break;
      case "Comma":
        S !== null && S.type === 18 ? (ra(z.token) ? (t = L) : (c(), (t = na(S) ? L : C))) : (t = ra(z.token) || na(S) ? C : L);
        break;
      case "String":
        let ae = "",
          fe = R;
        for (; fe < e.length && ae.length < t.value.length; fe++) ae += e[fe].value;
        if (jr(ae, t.value)) {
          for (; R < fe; ) c();
          t = C;
        } else t = L;
        break;
      default:
        throw new Error("Unknown node type: " + t.type);
    }
  switch (((Jl += te), X)) {
    case null:
      console.warn("[csstree-match] BREAK after " + ta + " iterations"), (X = Zl), (z = null);
      break;
    case ea:
      for (; p !== null; ) l();
      break;
    default:
      z = null;
  }
  return { tokens: e, reason: X, iterations: te, match: z, longestMatch: ke };
}
function qr(e, t, r) {
  let n = rc(e, t, r || {});
  if (n.match === null) return n;
  let o = n.match,
    i = (n.match = { syntax: t.syntax || null, match: [] }),
    s = [i];
  for (o = ec(o).prev; o !== null; ) {
    switch (o.type) {
      case Hr:
        i.match.push((i = { syntax: o.syntax, match: [] })), s.push(i);
        break;
      case oa:
        s.pop(), (i = s[s.length - 1]);
        break;
      default:
        i.match.push({ syntax: o.syntax || null, token: o.token.value, node: o.token.node });
    }
    o = o.prev;
  }
  return n;
}
var Yr = {};
b(Yr, { getTrace: () => ia, isKeyword: () => ic, isProperty: () => oc, isType: () => nc });
function ia(e) {
  function t(o) {
    return o === null ? !1 : o.type === "Type" || o.type === "Property" || o.type === "Keyword";
  }
  function r(o) {
    if (Array.isArray(o.match)) {
      for (let i = 0; i < o.match.length; i++) if (r(o.match[i])) return t(o.syntax) && n.unshift(o.syntax), !0;
    } else if (o.node === e) return (n = t(o.syntax) ? [o.syntax] : []), !0;
    return !1;
  }
  let n = null;
  return this.matched !== null && r(this.matched), n;
}
function nc(e, t) {
  return Wr(this, e, (r) => r.type === "Type" && r.name === t);
}
function oc(e, t) {
  return Wr(this, e, (r) => r.type === "Property" && r.name === t);
}
function ic(e) {
  return Wr(this, e, (t) => t.type === "Keyword");
}
function Wr(e, t, r) {
  let n = ia.call(e, t);
  return n === null ? !1 : n.some(r);
}
function aa(e) {
  return "node" in e ? e.node : aa(e.match[0]);
}
function sa(e) {
  return "node" in e ? e.node : sa(e.match[e.match.length - 1]);
}
function Gr(e, t, r, n, o) {
  function i(u) {
    if (u.syntax !== null && u.syntax.type === n && u.syntax.name === o) {
      let c = aa(u),
        a = sa(u);
      e.syntax.walk(t, function (l, p, m) {
        if (l === c) {
          let f = new I();
          do {
            if ((f.appendData(p.data), p.data === a)) break;
            p = p.next;
          } while (p !== null);
          s.push({ parent: m, nodes: f });
        }
      });
    }
    Array.isArray(u.match) && u.match.forEach(i);
  }
  let s = [];
  return r.matched !== null && i(r.matched), s;
}
var { hasOwnProperty: mt } = Object.prototype;
function Vr(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && e >= 0;
}
function la(e) {
  return Boolean(e) && Vr(e.offset) && Vr(e.line) && Vr(e.column);
}
function ac(e, t) {
  return function (n, o) {
    if (!n || n.constructor !== Object) return o(n, "Type of node should be an Object");
    for (let i in n) {
      let s = !0;
      if (mt.call(n, i) !== !1) {
        if (i === "type") n.type !== e && o(n, "Wrong node type `" + n.type + "`, expected `" + e + "`");
        else if (i === "loc") {
          if (n.loc === null) continue;
          if (n.loc && n.loc.constructor === Object)
            if (typeof n.loc.source != "string") i += ".source";
            else if (!la(n.loc.start)) i += ".start";
            else if (!la(n.loc.end)) i += ".end";
            else continue;
          s = !1;
        } else if (t.hasOwnProperty(i)) {
          s = !1;
          for (let u = 0; !s && u < t[i].length; u++) {
            let c = t[i][u];
            switch (c) {
              case String:
                s = typeof n[i] == "string";
                break;
              case Boolean:
                s = typeof n[i] == "boolean";
                break;
              case null:
                s = n[i] === null;
                break;
              default:
                typeof c == "string" ? (s = n[i] && n[i].type === c) : Array.isArray(c) && (s = n[i] instanceof I);
            }
          }
        } else o(n, "Unknown field `" + i + "` for " + e + " node type");
        s || o(n, "Bad value for `" + e + "." + i + "`");
      }
    }
    for (let i in t) mt.call(t, i) && mt.call(n, i) === !1 && o(n, "Field `" + e + "." + i + "` is missed");
  };
}
function sc(e, t) {
  let r = t.structure,
    n = { type: String, loc: !0 },
    o = { type: '"' + e + '"' };
  for (let i in r) {
    if (mt.call(r, i) === !1) continue;
    let s = [],
      u = (n[i] = Array.isArray(r[i]) ? r[i].slice() : [r[i]]);
    for (let c = 0; c < u.length; c++) {
      let a = u[c];
      if (a === String || a === Boolean) s.push(a.name);
      else if (a === null) s.push("null");
      else if (typeof a == "string") s.push("<" + a + ">");
      else if (Array.isArray(a)) s.push("List");
      else throw new Error("Wrong value `" + a + "` in `" + e + "." + i + "` structure definition");
    }
    o[i] = s.join(" | ");
  }
  return { docs: o, check: ac(e, n) };
}
function ca(e) {
  let t = {};
  if (e.node) {
    for (let r in e.node)
      if (mt.call(e.node, r)) {
        let n = e.node[r];
        if (n.structure) t[r] = sc(r, n);
        else throw new Error("Missed `structure` field in `" + r + "` node type definition");
      }
  }
  return t;
}
var lc = Qt(Ft.join(" | "));
function Kr(e, t, r) {
  let n = {};
  for (let o in e) e[o].syntax && (n[o] = r ? e[o].syntax : Pe(e[o].syntax, { compact: t }));
  return n;
}
function cc(e, t, r) {
  let n = {};
  for (let [o, i] of Object.entries(e))
    n[o] = {
      prelude: i.prelude && (r ? i.prelude.syntax : Pe(i.prelude.syntax, { compact: t })),
      descriptors: i.descriptors && Kr(i.descriptors, t, r)
    };
  return n;
}
function uc(e) {
  for (let t = 0; t < e.length; t++) if (e[t].value.toLowerCase() === "var(") return !0;
  return !1;
}
function ce(e, t, r) {
  return { matched: e, iterations: r, error: t, ...Yr };
}
function Ve(e, t, r, n) {
  let o = Xi(r, e.syntax),
    i;
  return uc(o)
    ? ce(null, new Error("Matching for a tree with var() is not supported"))
    : (n && (i = qr(o, e.cssWideKeywordsSyntax, e)),
      (!n || !i.match) && ((i = qr(o, t.match, e)), !i.match)
        ? ce(null, new Pi(i.reason, t.syntax, r, i), i.iterations)
        : ce(i.match, null, i.iterations));
}
var Ke = class {
  constructor(t, r, n) {
    if (
      ((this.cssWideKeywordsSyntax = lc),
      (this.syntax = r),
      (this.generic = !1),
      (this.atrules = Object.create(null)),
      (this.properties = Object.create(null)),
      (this.types = Object.create(null)),
      (this.structure = n || ca(t)),
      t)
    ) {
      if (t.types) for (let o in t.types) this.addType_(o, t.types[o]);
      if (t.generic) {
        this.generic = !0;
        for (let o in Dr) this.addType_(o, Dr[o]);
      }
      if (t.atrules) for (let o in t.atrules) this.addAtrule_(o, t.atrules[o]);
      if (t.properties) for (let o in t.properties) this.addProperty_(o, t.properties[o]);
    }
  }
  checkStructure(t) {
    function r(i, s) {
      o.push({ node: i, message: s });
    }
    let n = this.structure,
      o = [];
    return (
      this.syntax.walk(t, function (i) {
        n.hasOwnProperty(i.type) ? n[i.type].check(i, r) : r(i, "Unknown node type `" + i.type + "`");
      }),
      o.length ? o : !1
    );
  }
  createDescriptor(t, r, n, o = null) {
    let i = { type: r, name: n },
      s = {
        type: r,
        name: n,
        parent: o,
        serializable: typeof t == "string" || (t && typeof t.type == "string"),
        syntax: null,
        match: null
      };
    return (
      typeof t == "function"
        ? (s.match = Qt(t, i))
        : (typeof t == "string"
            ? Object.defineProperty(s, "syntax", {
                get() {
                  return Object.defineProperty(s, "syntax", { value: Ge(t) }), s.syntax;
                }
              })
            : (s.syntax = t),
          Object.defineProperty(s, "match", {
            get() {
              return Object.defineProperty(s, "match", { value: Qt(s.syntax, i) }), s.match;
            }
          })),
      s
    );
  }
  addAtrule_(t, r) {
    !r ||
      (this.atrules[t] = {
        type: "Atrule",
        name: t,
        prelude: r.prelude ? this.createDescriptor(r.prelude, "AtrulePrelude", t) : null,
        descriptors: r.descriptors
          ? Object.keys(r.descriptors).reduce(
              (n, o) => ((n[o] = this.createDescriptor(r.descriptors[o], "AtruleDescriptor", o, t)), n),
              Object.create(null)
            )
          : null
      });
  }
  addProperty_(t, r) {
    !r || (this.properties[t] = this.createDescriptor(r, "Property", t));
  }
  addType_(t, r) {
    !r || (this.types[t] = this.createDescriptor(r, "Type", t));
  }
  checkAtruleName(t) {
    if (!this.getAtrule(t)) return new je("Unknown at-rule", "@" + t);
  }
  checkAtrulePrelude(t, r) {
    let n = this.checkAtruleName(t);
    if (n) return n;
    let o = this.getAtrule(t);
    if (!o.prelude && r) return new SyntaxError("At-rule `@" + t + "` should not contain a prelude");
    if (o.prelude && !r && !Ve(this, o.prelude, "", !1).matched) return new SyntaxError("At-rule `@" + t + "` should contain a prelude");
  }
  checkAtruleDescriptorName(t, r) {
    let n = this.checkAtruleName(t);
    if (n) return n;
    let o = this.getAtrule(t),
      i = Mt(r);
    if (!o.descriptors) return new SyntaxError("At-rule `@" + t + "` has no known descriptors");
    if (!o.descriptors[i.name] && !o.descriptors[i.basename]) return new je("Unknown at-rule descriptor", r);
  }
  checkPropertyName(t) {
    if (!this.getProperty(t)) return new je("Unknown property", t);
  }
  matchAtrulePrelude(t, r) {
    let n = this.checkAtrulePrelude(t, r);
    if (n) return ce(null, n);
    let o = this.getAtrule(t);
    return o.prelude ? Ve(this, o.prelude, r || "", !1) : ce(null, null);
  }
  matchAtruleDescriptor(t, r, n) {
    let o = this.checkAtruleDescriptorName(t, r);
    if (o) return ce(null, o);
    let i = this.getAtrule(t),
      s = Mt(r);
    return Ve(this, i.descriptors[s.name] || i.descriptors[s.basename], n, !1);
  }
  matchDeclaration(t) {
    return t.type !== "Declaration" ? ce(null, new Error("Not a Declaration node")) : this.matchProperty(t.property, t.value);
  }
  matchProperty(t, r) {
    if (vr(t).custom) return ce(null, new Error("Lexer matching doesn't applicable for custom properties"));
    let n = this.checkPropertyName(t);
    return n ? ce(null, n) : Ve(this, this.getProperty(t), r, !0);
  }
  matchType(t, r) {
    let n = this.getType(t);
    return n ? Ve(this, n, r, !1) : ce(null, new je("Unknown type", t));
  }
  match(t, r) {
    return typeof t != "string" && (!t || !t.type)
      ? ce(null, new je("Bad syntax"))
      : ((typeof t == "string" || !t.match) && (t = this.createDescriptor(t, "Type", "anonymous")), Ve(this, t, r, !1));
  }
  findValueFragments(t, r, n, o) {
    return Gr(this, r, this.matchProperty(t, r), n, o);
  }
  findDeclarationValueFragments(t, r, n) {
    return Gr(this, t.value, this.matchDeclaration(t), r, n);
  }
  findAllFragments(t, r, n) {
    let o = [];
    return (
      this.syntax.walk(t, {
        visit: "Declaration",
        enter: (i) => {
          o.push.apply(o, this.findDeclarationValueFragments(i, r, n));
        }
      }),
      o
    );
  }
  getAtrule(t, r = !0) {
    let n = Mt(t);
    return (n.vendor && r ? this.atrules[n.name] || this.atrules[n.basename] : this.atrules[n.name]) || null;
  }
  getAtrulePrelude(t, r = !0) {
    let n = this.getAtrule(t, r);
    return (n && n.prelude) || null;
  }
  getAtruleDescriptor(t, r) {
    return (this.atrules.hasOwnProperty(t) && this.atrules.declarators && this.atrules[t].declarators[r]) || null;
  }
  getProperty(t, r = !0) {
    let n = vr(t);
    return (n.vendor && r ? this.properties[n.name] || this.properties[n.basename] : this.properties[n.name]) || null;
  }
  getType(t) {
    return hasOwnProperty.call(this.types, t) ? this.types[t] : null;
  }
  validate() {
    function t(o, i, s, u) {
      if (s.has(i)) return s.get(i);
      s.set(i, !1),
        u.syntax !== null &&
          Vt(
            u.syntax,
            function (c) {
              if (c.type !== "Type" && c.type !== "Property") return;
              let a = c.type === "Type" ? o.types : o.properties,
                l = c.type === "Type" ? r : n;
              (!hasOwnProperty.call(a, c.name) || t(o, c.name, l, a[c.name])) && s.set(i, !0);
            },
            this
          );
    }
    let r = new Map(),
      n = new Map();
    for (let o in this.types) t(this, o, r, this.types[o]);
    for (let o in this.properties) t(this, o, n, this.properties[o]);
    return (
      (r = [...r.keys()].filter((o) => r.get(o))),
      (n = [...n.keys()].filter((o) => n.get(o))),
      r.length || n.length ? { types: r, properties: n } : null
    );
  }
  dump(t, r) {
    return {
      generic: this.generic,
      types: Kr(this.types, !r, t),
      properties: Kr(this.properties, !r, t),
      atrules: cc(this.atrules, !r, t)
    };
  }
  toString() {
    return JSON.stringify(this.dump());
  }
};
var { hasOwnProperty: Qe } = Object.prototype,
  pc = {
    generic: !0,
    types: Qr,
    atrules: { prelude: pa, descriptors: pa },
    properties: Qr,
    parseContext: hc,
    scope: ma,
    atrule: ["parse"],
    pseudo: ["parse"],
    node: ["name", "structure", "parse", "generate", "walkContext"]
  };
function Xt(e) {
  return e && e.constructor === Object;
}
function ha(e) {
  return Xt(e) ? { ...e } : e;
}
function hc(e, t) {
  return Object.assign(e, t);
}
function ma(e, t) {
  for (let r in t) Qe.call(t, r) && (Xt(e[r]) ? ma(e[r], t[r]) : (e[r] = ha(t[r])));
  return e;
}
function ua(e, t) {
  return typeof t == "string" && /^\s*\|/.test(t) ? (typeof e == "string" ? e + t : t.replace(/^\s*\|\s*/, "")) : t || null;
}
function Qr(e, t) {
  if (typeof t == "string") return ua(e, t);
  let r = { ...e };
  for (let n in t) Qe.call(t, n) && (r[n] = ua(Qe.call(e, n) ? e[n] : void 0, t[n]));
  return r;
}
function pa(e, t) {
  let r = Qr(e, t);
  return !Xt(r) || Object.keys(r).length ? r : null;
}
function ft(e, t, r) {
  for (let n in r)
    if (Qe.call(r, n) !== !1) {
      if (r[n] === !0) Qe.call(t, n) && (e[n] = ha(t[n]));
      else if (r[n]) {
        if (typeof r[n] == "function") {
          let o = r[n];
          (e[n] = o({}, e[n])), (e[n] = o(e[n] || {}, t[n]));
        } else if (Xt(r[n])) {
          let o = {};
          for (let i in e[n]) o[i] = ft({}, e[n][i], r[n]);
          for (let i in t[n]) o[i] = ft(o[i] || {}, t[n][i], r[n]);
          e[n] = o;
        } else if (Array.isArray(r[n])) {
          let o = {},
            i = r[n].reduce(function (s, u) {
              return (s[u] = !0), s;
            }, {});
          for (let [s, u] of Object.entries(e[n] || {})) (o[s] = {}), u && ft(o[s], u, i);
          for (let s in t[n]) Qe.call(t[n], s) && (o[s] || (o[s] = {}), t[n] && t[n][s] && ft(o[s], t[n][s], i));
          e[n] = o;
        }
      }
    }
  return e;
}
var $t = (e, t) => ft(e, t, pc);
function fa(e) {
  let t = Xo(e),
    r = Ei(e),
    n = wi(e),
    { fromPlainObject: o, toPlainObject: i } = vi(r),
    s = {
      lexer: null,
      createLexer: (u) => new Ke(u, s, s.lexer.structure),
      tokenize: ve,
      parse: t,
      generate: n,
      walk: r,
      find: r.find,
      findLast: r.findLast,
      findAll: r.findAll,
      fromPlainObject: o,
      toPlainObject: i,
      fork(u) {
        let c = $t({}, e);
        return fa(typeof u == "function" ? u(c, Object.assign) : $t(c, u));
      }
    };
  return (s.lexer = new Ke({ generic: !0, types: e.types, atrules: e.atrules, properties: e.properties, node: e.node }, s)), s;
}
var Xr = (e) => fa($t({}, e));
var da = {
  generic: !0,
  types: {
    "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large",
    "alpha-value": "<number>|<percentage>",
    "angle-percentage": "<angle>|<percentage>",
    "angular-color-hint": "<angle-percentage>",
    "angular-color-stop": "<color>&&<color-stop-angle>?",
    "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>",
    "animateable-feature": "scroll-position|contents|<custom-ident>",
    attachment: "scroll|fixed|local",
    "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )",
    "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='",
    "attr-modifier": "i|s",
    "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'",
    "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "auto-track-list":
      "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?",
    "baseline-position": "[first|last]? baseline",
    "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>",
    "bg-image": "none|<image>",
    "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "bg-position":
      "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]",
    "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain",
    "blur()": "blur( <length> )",
    "blend-mode":
      "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity",
    box: "border-box|padding-box|content-box",
    "brightness()": "brightness( <number-percentage> )",
    "calc()": "calc( <calc-sum> )",
    "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*",
    "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*",
    "calc-value": "<number>|<dimension>|<percentage>|( <calc-sum> )",
    "cf-final-image": "<image>|<color>",
    "cf-mixing-image": "<percentage>?&&<image>",
    "circle()": "circle( [<shape-radius>]? [at <position>]? )",
    "clamp()": "clamp( <calc-sum>#{3} )",
    "class-selector": "'.' <ident-token>",
    "clip-source": "<url>",
    color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hwb()>|<lab()>|<lch()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>",
    "color-stop": "<color-stop-length>|<color-stop-angle>",
    "color-stop-angle": "<angle-percentage>{1,2}",
    "color-stop-length": "<length-percentage>{1,2}",
    "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>",
    combinator: "'>'|'+'|'~'|['||']",
    "common-lig-values": "[common-ligatures|no-common-ligatures]",
    "compat-auto":
      "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button",
    "composite-style":
      "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor",
    "compositing-operator": "add|subtract|intersect|exclude",
    "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!",
    "compound-selector-list": "<compound-selector>#",
    "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*",
    "complex-selector-list": "<complex-selector>#",
    "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "contextual-alt-values": "[contextual|no-contextual]",
    "content-distribution": "space-between|space-around|space-evenly|stretch",
    "content-list": "[<string>|contents|<image>|<counter>|<quote>|<target>|<leader()>|<attr()>]+",
    "content-position": "center|start|end|flex-start|flex-end",
    "content-replacement": "<image>",
    "contrast()": "contrast( [<number-percentage>] )",
    counter: "<counter()>|<counters()>",
    "counter()": "counter( <counter-name> , <counter-style>? )",
    "counter-name": "<custom-ident>",
    "counter-style": "<counter-style-name>|symbols( )",
    "counter-style-name": "<custom-ident>",
    "counters()": "counters( <counter-name> , <string> , <counter-style>? )",
    "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )",
    "cubic-bezier-timing-function":
      "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )",
    "deprecated-system-color":
      "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText",
    "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]",
    "display-box": "contents|none",
    "display-inside": "flow|flow-root|table|flex|grid|ruby",
    "display-internal":
      "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container",
    "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid",
    "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item",
    "display-outside": "block|inline|run-in",
    "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )",
    "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]",
    "east-asian-width-values": "[full-width|proportional-width]",
    "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )",
    "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )",
    "ending-shape": "circle|ellipse",
    "env()": "env( <custom-ident> , <declaration-value>? )",
    "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?",
    "family-name": "<string>|<custom-ident>+",
    "feature-tag-value": "<string> [<integer>|on|off]?",
    "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation",
    "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'",
    "feature-value-block-list": "<feature-value-block>+",
    "feature-value-declaration": "<custom-ident> : <integer>+ ;",
    "feature-value-declaration-list": "<feature-value-declaration>",
    "feature-value-name": "<custom-ident>",
    "fill-rule": "nonzero|evenodd",
    "filter-function":
      "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>",
    "filter-function-list": "[<filter-function>|<url>]+",
    "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>",
    "fit-content()": "fit-content( [<length>|<percentage>] )",
    "fixed-breadth": "<length-percentage>",
    "fixed-repeat": "repeat( [<integer [1,\u221E]>] , [<line-names>? <fixed-size>]+ <line-names>? )",
    "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )",
    "font-stretch-absolute":
      "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>",
    "font-variant-css21": "[normal|small-caps]",
    "font-weight-absolute": "normal|bold|<number [1,1000]>",
    "frequency-percentage": "<frequency>|<percentage>",
    "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )",
    "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system",
    "generic-name": "serif|sans-serif|cursive|fantasy|monospace",
    "geometry-box": "<shape-box>|fill-box|stroke-box|view-box",
    gradient:
      "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<repeating-conic-gradient()>|<-legacy-gradient>",
    "grayscale()": "grayscale( <number-percentage> )",
    "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]",
    "historical-lig-values": "[historical-ligatures|no-historical-ligatures]",
    "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )",
    hue: "<number>|<angle>",
    "hue-rotate()": "hue-rotate( <angle> )",
    "hwb()": "hwb( [<hue>|none] [<percentage>|none] [<percentage>|none] [/ [<alpha-value>|none]]? )",
    image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>",
    "image()": "image( <image-tags>? [<image-src>? , <color>?]! )",
    "image-set()": "image-set( <image-set-option># )",
    "image-set-option": "[<image>|<string>] [<resolution>||type( <string> )]",
    "image-src": "<url>|<string>",
    "image-tags": "ltr|rtl",
    "inflexible-breadth": "<length>|<percentage>|min-content|max-content|auto",
    "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )",
    "invert()": "invert( <number-percentage> )",
    "keyframes-name": "<custom-ident>|<string>",
    "keyframe-block": "<keyframe-selector># { <declaration-list> }",
    "keyframe-block-list": "<keyframe-block>+",
    "keyframe-selector": "from|to|<percentage>",
    "layer()": "layer( <layer-name> )",
    "layer-name": "<ident> ['.' <ident>]*",
    "leader()": "leader( <leader-type> )",
    "leader-type": "dotted|solid|space|<string>",
    "length-percentage": "<length>|<percentage>",
    "line-names": "'[' <custom-ident>* ']'",
    "line-name-list": "[<line-names>|<name-repeat>]+",
    "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset",
    "line-width": "<length>|thin|medium|thick",
    "linear-color-hint": "<length-percentage>",
    "linear-color-stop": "<color> <color-stop-length>?",
    "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "mask-layer":
      "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>",
    "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?",
    "mask-reference": "none|<image>|<mask-source>",
    "mask-source": "<url>",
    "masking-mode": "alpha|luminance|match-source",
    "matrix()": "matrix( <number>#{6} )",
    "matrix3d()": "matrix3d( <number>#{16} )",
    "max()": "max( <calc-sum># )",
    "media-and": "<media-in-parens> [and <media-in-parens>]+",
    "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>",
    "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>",
    "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )",
    "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>",
    "media-not": "not <media-in-parens>",
    "media-or": "<media-in-parens> [or <media-in-parens>]+",
    "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?",
    "media-query-list": "<media-query>#",
    "media-type": "<ident>",
    "mf-boolean": "<mf-name>",
    "mf-name": "<ident>",
    "mf-plain": "<mf-name> : <mf-value>",
    "mf-range":
      "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>",
    "mf-value": "<number>|<dimension>|<ident>|<ratio>",
    "min()": "min( <calc-sum># )",
    "minmax()":
      "minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )",
    "name-repeat": "repeat( [<integer [1,\u221E]>|auto-fill] , <line-names>+ )",
    "named-color":
      "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>",
    "namespace-prefix": "<ident>",
    "ns-prefix": "[<ident-token>|'*']? '|'",
    "number-percentage": "<number>|<percentage>",
    "numeric-figure-values": "[lining-nums|oldstyle-nums]",
    "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]",
    "numeric-spacing-values": "[proportional-nums|tabular-nums]",
    nth: "<an-plus-b>|even|odd",
    "opacity()": "opacity( [<number-percentage>] )",
    "overflow-position": "unsafe|safe",
    "outline-radius": "<length>|<percentage>",
    "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>",
    "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'",
    "page-margin-box-type":
      "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom",
    "page-selector-list": "[<page-selector>#]?",
    "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*",
    "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger",
    "path()": "path( [<fill-rule> ,]? <string> )",
    "paint()": "paint( <ident> , <declaration-value>? )",
    "perspective()": "perspective( <length> )",
    "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )",
    position:
      "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]",
    "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'",
    "pseudo-element-selector": "':' <pseudo-class-selector>",
    "pseudo-page": ": [left|right|first|blank]",
    quote: "open-quote|close-quote|no-open-quote|no-close-quote",
    "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "relative-selector": "<combinator>? <complex-selector>",
    "relative-selector-list": "<relative-selector>#",
    "relative-size": "larger|smaller",
    "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}",
    "repeating-conic-gradient()": "repeating-conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )",
    "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )",
    "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )",
    "rgb()":
      "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )",
    "rgba()":
      "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )",
    "rotate()": "rotate( [<angle>|<zero>] )",
    "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )",
    "rotateX()": "rotateX( [<angle>|<zero>] )",
    "rotateY()": "rotateY( [<angle>|<zero>] )",
    "rotateZ()": "rotateZ( [<angle>|<zero>] )",
    "saturate()": "saturate( <number-percentage> )",
    "scale()": "scale( <number> , <number>? )",
    "scale3d()": "scale3d( <number> , <number> , <number> )",
    "scaleX()": "scaleX( <number> )",
    "scaleY()": "scaleY( <number> )",
    "scaleZ()": "scaleZ( <number> )",
    "self-position": "center|start|end|self-start|self-end|flex-start|flex-end",
    "shape-radius": "<length-percentage>|closest-side|farthest-side",
    "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )",
    "skewX()": "skewX( [<angle>|<zero>] )",
    "skewY()": "skewY( [<angle>|<zero>] )",
    "sepia()": "sepia( <number-percentage> )",
    shadow: "inset?&&<length>{2,4}&&<color>?",
    "shadow-t": "[<length>{2,3}&&<color>?]",
    shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )",
    "shape-box": "<box>|margin-box",
    "side-or-corner": "[left|right]||[top|bottom]",
    "single-animation":
      "<time>||<easing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]",
    "single-animation-direction": "normal|reverse|alternate|alternate-reverse",
    "single-animation-fill-mode": "none|forwards|backwards|both",
    "single-animation-iteration-count": "infinite|<number>",
    "single-animation-play-state": "running|paused",
    "single-animation-timeline": "auto|none|<timeline-name>",
    "single-transition": "[none|<single-transition-property>]||<time>||<easing-function>||<time>",
    "single-transition-property": "all|<custom-ident>",
    size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}",
    "step-position": "jump-start|jump-end|jump-none|jump-both|start|end",
    "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )",
    "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>",
    "supports-condition":
      "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*",
    "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>",
    "supports-feature": "<supports-decl>|<supports-selector-fn>",
    "supports-decl": "( <declaration> )",
    "supports-selector-fn": "selector( <complex-selector> )",
    symbol: "<string>|<image>|<custom-ident>",
    target: "<target-counter()>|<target-counters()>|<target-text()>",
    "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )",
    "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )",
    "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )",
    "time-percentage": "<time>|<percentage>",
    "timeline-name": "<custom-ident>|<string>",
    "easing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>",
    "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto",
    "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?",
    "track-repeat": "repeat( [<integer [1,\u221E]>] , [<line-names>? <track-size>]+ <line-names>? )",
    "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )",
    "transform-function":
      "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>",
    "transform-list": "<transform-function>+",
    "translate()": "translate( <length-percentage> , <length-percentage>? )",
    "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )",
    "translateX()": "translateX( <length-percentage> )",
    "translateY()": "translateY( <length-percentage> )",
    "translateZ()": "translateZ( <length> )",
    "type-or-unit":
      "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%",
    "type-selector": "<wq-name>|<ns-prefix>? '*'",
    "var()": "var( <custom-property-name> , <declaration-value>? )",
    "viewport-length": "auto|<length-percentage>",
    "visual-box": "content-box|padding-box|border-box",
    "wq-name": "<ns-prefix>? <ident-token>",
    "-legacy-gradient":
      "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>",
    "-legacy-linear-gradient":
      "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-repeating-linear-gradient":
      "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )",
    "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>",
    "-legacy-radial-gradient":
      "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-repeating-radial-gradient":
      "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )",
    "-legacy-radial-gradient-arguments":
      "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>",
    "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover",
    "-legacy-radial-gradient-shape": "circle|ellipse",
    "-non-standard-font":
      "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body",
    "-non-standard-color":
      "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text",
    "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast",
    "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable",
    "-non-standard-width":
      "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content",
    "-webkit-gradient()":
      "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )",
    "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )",
    "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]",
    "-webkit-gradient-radius": "<length>|<percentage>",
    "-webkit-gradient-type": "linear|radial",
    "-webkit-mask-box-repeat": "repeat|stretch|round",
    "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text",
    "-ms-filter-function-list": "<-ms-filter-function>+",
    "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>",
    "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]",
    "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )",
    "-ms-filter": "<string>",
    age: "child|young|old",
    "attr-name": "<wq-name>",
    "attr-fallback": "<any-value>",
    "bg-clip": "<box>|border|text",
    "border-radius": "<length-percentage>{1,2}",
    bottom: "<length>|auto",
    "generic-voice": "[<age>? <gender> <integer>?]",
    gender: "male|female|neutral",
    "lab()": "lab( [<percentage>|<number>|none] [<percentage>|<number>|none] [<percentage>|<number>|none] [/ [<alpha-value>|none]]? )",
    "lch()": "lch( [<percentage>|<number>|none] [<percentage>|<number>|none] [<hue>|none] [/ [<alpha-value>|none]]? )",
    left: "<length>|auto",
    "mask-image": "<mask-reference>#",
    paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke",
    ratio: "<number [0,\u221E]> [/ <number [0,\u221E]>]?",
    "reversed-counter-name": "reversed( <counter-name> )",
    right: "<length>|auto",
    "svg-length": "<percentage>|<length>|<number>",
    "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb",
    top: "<length>|auto",
    "track-group": "'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>",
    "track-list-v0": "[<string>* <track-group> <string>*]+|none",
    "track-minmax": "minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content",
    x: "<number>",
    y: "<number>",
    declaration: "<ident-token> : <declaration-value>? ['!' important]?",
    "declaration-list": "[<declaration>? ';']* <declaration>?",
    url: "url( <string> <url-modifier>* )|<url-token>",
    "url-modifier": "<ident>|<function-token> <any-value> )",
    "number-zero-one": "<number [0,1]>",
    "number-one-or-greater": "<number [1,\u221E]>",
    "positive-integer": "<integer [0,\u221E]>",
    "-non-standard-display":
      "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box"
  },
  properties: {
    "--*": "<declaration-value>",
    "-ms-accelerator": "false|true",
    "-ms-block-progression": "tb|rl|bt|lr",
    "-ms-content-zoom-chaining": "none|chained",
    "-ms-content-zooming": "none|zoom",
    "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>",
    "-ms-content-zoom-limit-max": "<percentage>",
    "-ms-content-zoom-limit-min": "<percentage>",
    "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>",
    "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )",
    "-ms-content-zoom-snap-type": "none|proximity|mandatory",
    "-ms-filter": "<string>",
    "-ms-flow-from": "[none|<custom-ident>]#",
    "-ms-flow-into": "[none|<custom-ident>]#",
    "-ms-grid-columns": "none|<track-list>|<auto-track-list>",
    "-ms-grid-rows": "none|<track-list>|<auto-track-list>",
    "-ms-high-contrast-adjust": "auto|none",
    "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}",
    "-ms-hyphenate-limit-lines": "no-limit|<integer>",
    "-ms-hyphenate-limit-zone": "<percentage>|<length>",
    "-ms-ime-align": "auto|after",
    "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar",
    "-ms-scrollbar-3dlight-color": "<color>",
    "-ms-scrollbar-arrow-color": "<color>",
    "-ms-scrollbar-base-color": "<color>",
    "-ms-scrollbar-darkshadow-color": "<color>",
    "-ms-scrollbar-face-color": "<color>",
    "-ms-scrollbar-highlight-color": "<color>",
    "-ms-scrollbar-shadow-color": "<color>",
    "-ms-scrollbar-track-color": "<color>",
    "-ms-scroll-chaining": "chained|none",
    "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>",
    "-ms-scroll-limit-x-max": "auto|<length>",
    "-ms-scroll-limit-x-min": "<length>",
    "-ms-scroll-limit-y-max": "auto|<length>",
    "-ms-scroll-limit-y-min": "<length>",
    "-ms-scroll-rails": "none|railed",
    "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )",
    "-ms-scroll-snap-type": "none|proximity|mandatory",
    "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>",
    "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>",
    "-ms-scroll-translation": "none|vertical-to-horizontal",
    "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space",
    "-ms-touch-select": "grippers|none",
    "-ms-user-select": "none|element|text",
    "-ms-wrap-flow": "auto|both|start|end|maximum|clear",
    "-ms-wrap-margin": "<length>",
    "-ms-wrap-through": "wrap|none",
    "-moz-appearance":
      "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized",
    "-moz-binding": "<url>|none",
    "-moz-border-bottom-colors": "<color>+|none",
    "-moz-border-left-colors": "<color>+|none",
    "-moz-border-right-colors": "<color>+|none",
    "-moz-border-top-colors": "<color>+|none",
    "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#",
    "-moz-float-edge": "border-box|content-box|margin-box|padding-box",
    "-moz-force-broken-image-icon": "0|1",
    "-moz-image-region": "<shape>|auto",
    "-moz-orient": "inline|block|horizontal|vertical",
    "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?",
    "-moz-outline-radius-bottomleft": "<outline-radius>",
    "-moz-outline-radius-bottomright": "<outline-radius>",
    "-moz-outline-radius-topleft": "<outline-radius>",
    "-moz-outline-radius-topright": "<outline-radius>",
    "-moz-stack-sizing": "ignore|stretch-to-fit",
    "-moz-text-blink": "none|blink",
    "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none",
    "-moz-user-input": "auto|none|enabled|disabled",
    "-moz-user-modify": "read-only|read-write|write-only",
    "-moz-window-dragging": "drag|no-drag",
    "-moz-window-shadow": "default|menu|tooltip|sheet|none",
    "-webkit-appearance":
      "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button",
    "-webkit-border-before": "<'border-width'>||<'border-style'>||<color>",
    "-webkit-border-before-color": "<color>",
    "-webkit-border-before-style": "<'border-style'>",
    "-webkit-border-before-width": "<'border-width'>",
    "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?",
    "-webkit-line-clamp": "none|<integer>",
    "-webkit-mask":
      "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#",
    "-webkit-mask-attachment": "<attachment>#",
    "-webkit-mask-clip": "[<box>|border|padding|content|text]#",
    "-webkit-mask-composite": "<composite-style>#",
    "-webkit-mask-image": "<mask-reference>#",
    "-webkit-mask-origin": "[<box>|border|padding|content]#",
    "-webkit-mask-position": "<position>#",
    "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#",
    "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#",
    "-webkit-mask-repeat": "<repeat-style>#",
    "-webkit-mask-repeat-x": "repeat|no-repeat|space|round",
    "-webkit-mask-repeat-y": "repeat|no-repeat|space|round",
    "-webkit-mask-size": "<bg-size>#",
    "-webkit-overflow-scrolling": "auto|touch",
    "-webkit-tap-highlight-color": "<color>",
    "-webkit-text-fill-color": "<color>",
    "-webkit-text-stroke": "<length>||<color>",
    "-webkit-text-stroke-color": "<color>",
    "-webkit-text-stroke-width": "<length>",
    "-webkit-touch-callout": "default|none",
    "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only",
    "accent-color": "auto|<color>",
    "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>",
    "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]",
    "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>",
    "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#",
    all: "initial|inherit|unset|revert|revert-layer",
    animation: "<single-animation>#",
    "animation-delay": "<time>#",
    "animation-direction": "<single-animation-direction>#",
    "animation-duration": "<time>#",
    "animation-fill-mode": "<single-animation-fill-mode>#",
    "animation-iteration-count": "<single-animation-iteration-count>#",
    "animation-name": "[none|<keyframes-name>]#",
    "animation-play-state": "<single-animation-play-state>#",
    "animation-timing-function": "<easing-function>#",
    "animation-timeline": "<single-animation-timeline>#",
    appearance: "none|auto|textfield|menulist-button|<compat-auto>",
    "aspect-ratio": "auto|<ratio>",
    azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards",
    "backdrop-filter": "none|<filter-function-list>",
    "backface-visibility": "visible|hidden",
    background: "[<bg-layer> ,]* <final-bg-layer>",
    "background-attachment": "<attachment>#",
    "background-blend-mode": "<blend-mode>#",
    "background-clip": "<bg-clip>#",
    "background-color": "<color>",
    "background-image": "<bg-image>#",
    "background-origin": "<box>#",
    "background-position": "<bg-position>#",
    "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#",
    "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#",
    "background-repeat": "<repeat-style>#",
    "background-size": "<bg-size>#",
    "block-overflow": "clip|ellipsis|<string>",
    "block-size": "<'width'>",
    border: "<line-width>||<line-style>||<color>",
    "border-block": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-color": "<'border-top-color'>{1,2}",
    "border-block-style": "<'border-top-style'>",
    "border-block-width": "<'border-top-width'>",
    "border-block-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-end-color": "<'border-top-color'>",
    "border-block-end-style": "<'border-top-style'>",
    "border-block-end-width": "<'border-top-width'>",
    "border-block-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-block-start-color": "<'border-top-color'>",
    "border-block-start-style": "<'border-top-style'>",
    "border-block-start-width": "<'border-top-width'>",
    "border-bottom": "<line-width>||<line-style>||<color>",
    "border-bottom-color": "<'border-top-color'>",
    "border-bottom-left-radius": "<length-percentage>{1,2}",
    "border-bottom-right-radius": "<length-percentage>{1,2}",
    "border-bottom-style": "<line-style>",
    "border-bottom-width": "<line-width>",
    "border-collapse": "collapse|separate",
    "border-color": "<color>{1,4}",
    "border-end-end-radius": "<length-percentage>{1,2}",
    "border-end-start-radius": "<length-percentage>{1,2}",
    "border-image":
      "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>",
    "border-image-outset": "[<length>|<number>]{1,4}",
    "border-image-repeat": "[stretch|repeat|round|space]{1,2}",
    "border-image-slice": "<number-percentage>{1,4}&&fill?",
    "border-image-source": "none|<image>",
    "border-image-width": "[<length-percentage>|<number>|auto]{1,4}",
    "border-inline": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-color": "<'border-top-color'>{1,2}",
    "border-inline-style": "<'border-top-style'>",
    "border-inline-width": "<'border-top-width'>",
    "border-inline-end-color": "<'border-top-color'>",
    "border-inline-end-style": "<'border-top-style'>",
    "border-inline-end-width": "<'border-top-width'>",
    "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<color>",
    "border-inline-start-color": "<'border-top-color'>",
    "border-inline-start-style": "<'border-top-style'>",
    "border-inline-start-width": "<'border-top-width'>",
    "border-left": "<line-width>||<line-style>||<color>",
    "border-left-color": "<color>",
    "border-left-style": "<line-style>",
    "border-left-width": "<line-width>",
    "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?",
    "border-right": "<line-width>||<line-style>||<color>",
    "border-right-color": "<color>",
    "border-right-style": "<line-style>",
    "border-right-width": "<line-width>",
    "border-spacing": "<length> <length>?",
    "border-start-end-radius": "<length-percentage>{1,2}",
    "border-start-start-radius": "<length-percentage>{1,2}",
    "border-style": "<line-style>{1,4}",
    "border-top": "<line-width>||<line-style>||<color>",
    "border-top-color": "<color>",
    "border-top-left-radius": "<length-percentage>{1,2}",
    "border-top-right-radius": "<length-percentage>{1,2}",
    "border-top-style": "<line-style>",
    "border-top-width": "<line-width>",
    "border-width": "<line-width>{1,4}",
    bottom: "<length>|<percentage>|auto",
    "box-align": "start|center|end|baseline|stretch",
    "box-decoration-break": "slice|clone",
    "box-direction": "normal|reverse|inherit",
    "box-flex": "<number>",
    "box-flex-group": "<integer>",
    "box-lines": "single|multiple",
    "box-ordinal-group": "<integer>",
    "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit",
    "box-pack": "start|center|end|justify",
    "box-shadow": "none|<shadow>#",
    "box-sizing": "content-box|border-box",
    "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region",
    "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region",
    "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end",
    "caret-color": "auto|<color>",
    clear: "none|left|right|both|inline-start|inline-end",
    clip: "<shape>|auto",
    "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none",
    color: "<color>",
    "print-color-adjust": "economy|exact",
    "color-scheme": "normal|[light|dark|<custom-ident>]+&&only?",
    "column-count": "<integer>|auto",
    "column-fill": "auto|balance|balance-all",
    "column-gap": "normal|<length-percentage>",
    "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>",
    "column-rule-color": "<color>",
    "column-rule-style": "<'border-style'>",
    "column-rule-width": "<'border-width'>",
    "column-span": "none|all",
    "column-width": "<length>|auto",
    columns: "<'column-width'>||<'column-count'>",
    contain: "none|strict|content|[size||layout||style||paint]",
    content: "normal|none|[<content-replacement>|<content-list>] [/ [<string>|<counter>]+]?",
    "content-visibility": "visible|auto|hidden",
    "counter-increment": "[<counter-name> <integer>?]+|none",
    "counter-reset": "[<counter-name> <integer>?|<reversed-counter-name> <integer>?]+|none",
    "counter-set": "[<counter-name> <integer>?]+|none",
    cursor:
      "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]",
    direction: "ltr|rtl",
    display:
      "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>",
    "empty-cells": "show|hide",
    filter: "none|<filter-function-list>|<-ms-filter-function-list>",
    flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]",
    "flex-basis": "content|<'width'>",
    "flex-direction": "row|row-reverse|column|column-reverse",
    "flex-flow": "<'flex-direction'>||<'flex-wrap'>",
    "flex-grow": "<number>",
    "flex-shrink": "<number>",
    "flex-wrap": "nowrap|wrap|wrap-reverse",
    float: "left|right|none|inline-start|inline-end",
    font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar",
    "font-family": "[<family-name>|<generic-family>]#",
    "font-feature-settings": "normal|<feature-tag-value>#",
    "font-kerning": "auto|normal|none",
    "font-language-override": "normal|<string>",
    "font-optical-sizing": "auto|none",
    "font-variation-settings": "normal|[<string> <number>]#",
    "font-size": "<absolute-size>|<relative-size>|<length-percentage>",
    "font-size-adjust": "none|[ex-height|cap-height|ch-width|ic-width|ic-height]? [from-font|<number>]",
    "font-smooth": "auto|never|always|<absolute-size>|<length>",
    "font-stretch": "<font-stretch-absolute>",
    "font-style": "normal|italic|oblique <angle>?",
    "font-synthesis": "none|[weight||style||small-caps]",
    "font-variant":
      "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-alternates":
      "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]",
    "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps",
    "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]",
    "font-variant-ligatures":
      "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]",
    "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]",
    "font-variant-position": "normal|sub|super",
    "font-weight": "<font-weight-absolute>|bolder|lighter",
    "forced-color-adjust": "auto|none",
    gap: "<'row-gap'> <'column-gap'>?",
    grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>",
    "grid-area": "<grid-line> [/ <grid-line>]{0,3}",
    "grid-auto-columns": "<track-size>+",
    "grid-auto-flow": "[row|column]||dense",
    "grid-auto-rows": "<track-size>+",
    "grid-column": "<grid-line> [/ <grid-line>]?",
    "grid-column-end": "<grid-line>",
    "grid-column-gap": "<length-percentage>",
    "grid-column-start": "<grid-line>",
    "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?",
    "grid-row": "<grid-line> [/ <grid-line>]?",
    "grid-row-end": "<grid-line>",
    "grid-row-gap": "<length-percentage>",
    "grid-row-start": "<grid-line>",
    "grid-template":
      "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?",
    "grid-template-areas": "none|<string>+",
    "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?",
    "hanging-punctuation": "none|[first||[force-end|allow-end]||last]",
    height: "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "hyphenate-character": "auto|<string>",
    hyphens: "none|manual|auto",
    "image-orientation": "from-image|<angle>|[<angle>? flip]",
    "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>",
    "image-resolution": "[from-image||<resolution>]&&snap?",
    "ime-mode": "auto|normal|active|inactive|disabled",
    "initial-letter": "normal|[<number> <integer>?]",
    "initial-letter-align": "[auto|alphabetic|hanging|ideographic]",
    "inline-size": "<'width'>",
    "input-security": "auto|none",
    inset: "<'top'>{1,4}",
    "inset-block": "<'top'>{1,2}",
    "inset-block-end": "<'top'>",
    "inset-block-start": "<'top'>",
    "inset-inline": "<'top'>{1,2}",
    "inset-inline-end": "<'top'>",
    "inset-inline-start": "<'top'>",
    isolation: "auto|isolate",
    "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]",
    "justify-items":
      "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]",
    "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]",
    "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#",
    left: "<length>|<percentage>|auto",
    "letter-spacing": "normal|<length-percentage>",
    "line-break": "auto|loose|normal|strict|anywhere",
    "line-clamp": "none|<integer>",
    "line-height": "normal|<number>|<length>|<percentage>",
    "line-height-step": "<length>",
    "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>",
    "list-style-image": "<image>|none",
    "list-style-position": "inside|outside",
    "list-style-type": "<counter-style>|<string>|none",
    margin: "[<length>|<percentage>|auto]{1,4}",
    "margin-block": "<'margin-left'>{1,2}",
    "margin-block-end": "<'margin-left'>",
    "margin-block-start": "<'margin-left'>",
    "margin-bottom": "<length>|<percentage>|auto",
    "margin-inline": "<'margin-left'>{1,2}",
    "margin-inline-end": "<'margin-left'>",
    "margin-inline-start": "<'margin-left'>",
    "margin-left": "<length>|<percentage>|auto",
    "margin-right": "<length>|<percentage>|auto",
    "margin-top": "<length>|<percentage>|auto",
    "margin-trim": "none|in-flow|all",
    mask: "<mask-layer>#",
    "mask-border":
      "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>",
    "mask-border-mode": "luminance|alpha",
    "mask-border-outset": "[<length>|<number>]{1,4}",
    "mask-border-repeat": "[stretch|repeat|round|space]{1,2}",
    "mask-border-slice": "<number-percentage>{1,4} fill?",
    "mask-border-source": "none|<image>",
    "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}",
    "mask-clip": "[<geometry-box>|no-clip]#",
    "mask-composite": "<compositing-operator>#",
    "mask-image": "<mask-reference>#",
    "mask-mode": "<masking-mode>#",
    "mask-origin": "<geometry-box>#",
    "mask-position": "<position>#",
    "mask-repeat": "<repeat-style>#",
    "mask-size": "<bg-size>#",
    "mask-type": "luminance|alpha",
    "masonry-auto-flow": "[pack|next]||[definite-first|ordered]",
    "math-style": "normal|compact",
    "max-block-size": "<'max-width'>",
    "max-height": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "max-inline-size": "<'max-width'>",
    "max-lines": "none|<integer>",
    "max-width": "none|<length-percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "min-block-size": "<'min-width'>",
    "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )",
    "min-inline-size": "<'min-width'>",
    "min-width": "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|<-non-standard-width>",
    "mix-blend-mode": "<blend-mode>|plus-lighter",
    "object-fit": "fill|contain|cover|none|scale-down",
    "object-position": "<position>",
    offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?",
    "offset-anchor": "auto|<position>",
    "offset-distance": "<length-percentage>",
    "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]",
    "offset-position": "auto|<position>",
    "offset-rotate": "[auto|reverse]||<angle>",
    opacity: "<alpha-value>",
    order: "<integer>",
    orphans: "<integer>",
    outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]",
    "outline-color": "<color>|invert",
    "outline-offset": "<length>",
    "outline-style": "auto|<'border-style'>",
    "outline-width": "<line-width>",
    overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>",
    "overflow-anchor": "auto|none",
    "overflow-block": "visible|hidden|clip|scroll|auto",
    "overflow-clip-box": "padding-box|content-box",
    "overflow-clip-margin": "<visual-box>||<length [0,\u221E]>",
    "overflow-inline": "visible|hidden|clip|scroll|auto",
    "overflow-wrap": "normal|break-word|anywhere",
    "overflow-x": "visible|hidden|clip|scroll|auto",
    "overflow-y": "visible|hidden|clip|scroll|auto",
    "overscroll-behavior": "[contain|none|auto]{1,2}",
    "overscroll-behavior-block": "contain|none|auto",
    "overscroll-behavior-inline": "contain|none|auto",
    "overscroll-behavior-x": "contain|none|auto",
    "overscroll-behavior-y": "contain|none|auto",
    padding: "[<length>|<percentage>]{1,4}",
    "padding-block": "<'padding-left'>{1,2}",
    "padding-block-end": "<'padding-left'>",
    "padding-block-start": "<'padding-left'>",
    "padding-bottom": "<length>|<percentage>",
    "padding-inline": "<'padding-left'>{1,2}",
    "padding-inline-end": "<'padding-left'>",
    "padding-inline-start": "<'padding-left'>",
    "padding-left": "<length>|<percentage>",
    "padding-right": "<length>|<percentage>",
    "padding-top": "<length>|<percentage>",
    "page-break-after": "auto|always|avoid|left|right|recto|verso",
    "page-break-before": "auto|always|avoid|left|right|recto|verso",
    "page-break-inside": "auto|avoid",
    "paint-order": "normal|[fill||stroke||markers]",
    perspective: "none|<length>",
    "perspective-origin": "<position>",
    "place-content": "<'align-content'> <'justify-content'>?",
    "place-items": "<'align-items'> <'justify-items'>?",
    "place-self": "<'align-self'> <'justify-self'>?",
    "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit",
    position: "static|relative|absolute|sticky|fixed|-webkit-sticky",
    quotes: "none|auto|[<string> <string>]+",
    resize: "none|both|horizontal|vertical|block|inline",
    right: "<length>|<percentage>|auto",
    rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>",
    "row-gap": "normal|<length-percentage>",
    "ruby-align": "start|center|space-between|space-around",
    "ruby-merge": "separate|collapse|auto",
    "ruby-position": "[alternate||[over|under]]|inter-character",
    scale: "none|<number>{1,3}",
    "scrollbar-color": "auto|<color>{2}",
    "scrollbar-gutter": "auto|stable&&both-edges?",
    "scrollbar-width": "auto|thin|none",
    "scroll-behavior": "auto|smooth",
    "scroll-margin": "<length>{1,4}",
    "scroll-margin-block": "<length>{1,2}",
    "scroll-margin-block-start": "<length>",
    "scroll-margin-block-end": "<length>",
    "scroll-margin-bottom": "<length>",
    "scroll-margin-inline": "<length>{1,2}",
    "scroll-margin-inline-start": "<length>",
    "scroll-margin-inline-end": "<length>",
    "scroll-margin-left": "<length>",
    "scroll-margin-right": "<length>",
    "scroll-margin-top": "<length>",
    "scroll-padding": "[auto|<length-percentage>]{1,4}",
    "scroll-padding-block": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-block-start": "auto|<length-percentage>",
    "scroll-padding-block-end": "auto|<length-percentage>",
    "scroll-padding-bottom": "auto|<length-percentage>",
    "scroll-padding-inline": "[auto|<length-percentage>]{1,2}",
    "scroll-padding-inline-start": "auto|<length-percentage>",
    "scroll-padding-inline-end": "auto|<length-percentage>",
    "scroll-padding-left": "auto|<length-percentage>",
    "scroll-padding-right": "auto|<length-percentage>",
    "scroll-padding-top": "auto|<length-percentage>",
    "scroll-snap-align": "[none|start|end|center]{1,2}",
    "scroll-snap-coordinate": "none|<position>#",
    "scroll-snap-destination": "<position>",
    "scroll-snap-points-x": "none|repeat( <length-percentage> )",
    "scroll-snap-points-y": "none|repeat( <length-percentage> )",
    "scroll-snap-stop": "normal|always",
    "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?",
    "scroll-snap-type-x": "none|mandatory|proximity",
    "scroll-snap-type-y": "none|mandatory|proximity",
    "shape-image-threshold": "<alpha-value>",
    "shape-margin": "<length-percentage>",
    "shape-outside": "none|[<shape-box>||<basic-shape>]|<image>",
    "tab-size": "<integer>|<length>",
    "table-layout": "auto|fixed",
    "text-align": "start|end|left|right|center|justify|match-parent",
    "text-align-last": "auto|start|end|left|right|center|justify",
    "text-combine-upright": "none|all|[digits <integer>?]",
    "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>",
    "text-decoration-color": "<color>",
    "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error",
    "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]",
    "text-decoration-skip-ink": "auto|all|none",
    "text-decoration-style": "solid|double|dotted|dashed|wavy",
    "text-decoration-thickness": "auto|from-font|<length>|<percentage>",
    "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>",
    "text-emphasis-color": "<color>",
    "text-emphasis-position": "[over|under]&&[right|left]",
    "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>",
    "text-indent": "<length-percentage>&&hanging?&&each-line?",
    "text-justify": "auto|inter-character|inter-word|none",
    "text-orientation": "mixed|upright|sideways",
    "text-overflow": "[clip|ellipsis|<string>]{1,2}",
    "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision",
    "text-shadow": "none|<shadow-t>#",
    "text-size-adjust": "none|auto|<percentage>",
    "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana",
    "text-underline-offset": "auto|<length>|<percentage>",
    "text-underline-position": "auto|from-font|[under||[left|right]]",
    top: "<length>|<percentage>|auto",
    "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation",
    transform: "none|<transform-list>",
    "transform-box": "content-box|border-box|fill-box|stroke-box|view-box",
    "transform-origin":
      "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?",
    "transform-style": "flat|preserve-3d",
    transition: "<single-transition>#",
    "transition-delay": "<time>#",
    "transition-duration": "<time>#",
    "transition-property": "none|<single-transition-property>#",
    "transition-timing-function": "<easing-function>#",
    translate: "none|<length-percentage> [<length-percentage> <length>?]?",
    "unicode-bidi":
      "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext",
    "user-select": "auto|text|none|contain|all",
    "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>",
    visibility: "visible|hidden|collapse",
    "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces",
    widows: "<integer>",
    width:
      "auto|<length>|<percentage>|min-content|max-content|fit-content|fit-content( <length-percentage> )|fill|stretch|intrinsic|-moz-max-content|-webkit-max-content|-moz-fit-content|-webkit-fit-content",
    "will-change": "auto|<animateable-feature>#",
    "word-break": "normal|break-all|keep-all|break-word",
    "word-spacing": "normal|<length>",
    "word-wrap": "normal|break-word",
    "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>",
    "z-index": "auto|<integer>",
    zoom: "normal|reset|<number>|<percentage>",
    "-moz-background-clip": "padding|border",
    "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>",
    "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>",
    "-moz-border-radius-topleft": "<'border-top-left-radius'>",
    "-moz-border-radius-topright": "<'border-bottom-right-radius'>",
    "-moz-control-character-visibility": "visible|hidden",
    "-moz-osx-font-smoothing": "auto|grayscale",
    "-moz-user-select": "none|text|all|-moz-none",
    "-ms-flex-align": "start|end|center|baseline|stretch",
    "-ms-flex-item-align": "auto|start|end|center|baseline|stretch",
    "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch",
    "-ms-flex-negative": "<'flex-shrink'>",
    "-ms-flex-pack": "start|end|center|justify|distribute",
    "-ms-flex-order": "<integer>",
    "-ms-flex-positive": "<'flex-grow'>",
    "-ms-flex-preferred-size": "<'flex-basis'>",
    "-ms-interpolation-mode": "nearest-neighbor|bicubic",
    "-ms-grid-column-align": "start|end|center|stretch",
    "-ms-grid-row-align": "start|end|center|stretch",
    "-ms-hyphenate-limit-last": "none|always|column|page|spread",
    "-webkit-background-clip": "[<box>|border|padding|content|text]#",
    "-webkit-column-break-after": "always|auto|avoid",
    "-webkit-column-break-before": "always|auto|avoid",
    "-webkit-column-break-inside": "always|auto|avoid",
    "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased",
    "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?",
    "-webkit-print-color-adjust": "economy|exact",
    "-webkit-text-security": "none|circle|disc|square",
    "-webkit-user-drag": "none|element|auto",
    "-webkit-user-select": "auto|none|text|all",
    "alignment-baseline":
      "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical",
    "baseline-shift": "baseline|sub|super|<svg-length>",
    behavior: "<url>+",
    "clip-rule": "nonzero|evenodd",
    cue: "<'cue-before'> <'cue-after'>?",
    "cue-after": "<url> <decibel>?|none",
    "cue-before": "<url> <decibel>?|none",
    "dominant-baseline":
      "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge",
    fill: "<paint>",
    "fill-opacity": "<number-zero-one>",
    "fill-rule": "nonzero|evenodd",
    "glyph-orientation-horizontal": "<angle>",
    "glyph-orientation-vertical": "<angle>",
    kerning: "auto|<svg-length>",
    marker: "none|<url>",
    "marker-end": "none|<url>",
    "marker-mid": "none|<url>",
    "marker-start": "none|<url>",
    pause: "<'pause-before'> <'pause-after'>?",
    "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    rest: "<'rest-before'> <'rest-after'>?",
    "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong",
    "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision",
    src: "[<url> [format( <string># )]?|local( <family-name> )]#",
    speak: "auto|none|normal",
    "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]",
    stroke: "<paint>",
    "stroke-dasharray": "none|[<svg-length>+]#",
    "stroke-dashoffset": "<svg-length>",
    "stroke-linecap": "butt|round|square",
    "stroke-linejoin": "miter|round|bevel",
    "stroke-miterlimit": "<number-one-or-greater>",
    "stroke-opacity": "<number-zero-one>",
    "stroke-width": "<svg-length>",
    "text-anchor": "start|middle|end",
    "unicode-range": "<urange>#",
    "voice-balance": "<number>|left|center|right|leftwards|rightwards",
    "voice-duration": "auto|<time>",
    "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve",
    "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]",
    "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>",
    "voice-stress": "normal|strong|moderate|none|reduced",
    "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]"
  },
  atrules: {
    charset: { prelude: "<string>", descriptors: null },
    "counter-style": {
      prelude: "<counter-style-name>",
      descriptors: {
        "additive-symbols": "[<integer>&&<symbol>]#",
        fallback: "<counter-style-name>",
        negative: "<symbol> <symbol>?",
        pad: "<integer>&&<symbol>",
        prefix: "<symbol>",
        range: "[[<integer>|infinite]{2}]#|auto",
        "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>",
        suffix: "<symbol>",
        symbols: "<symbol>+",
        system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]"
      }
    },
    document: {
      prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#",
      descriptors: null
    },
    "font-face": {
      prelude: null,
      descriptors: {
        "ascent-override": "normal|<percentage>",
        "descent-override": "normal|<percentage>",
        "font-display": "[auto|block|swap|fallback|optional]",
        "font-family": "<family-name>",
        "font-feature-settings": "normal|<feature-tag-value>#",
        "font-variation-settings": "normal|[<string> <number>]#",
        "font-stretch": "<font-stretch-absolute>{1,2}",
        "font-style": "normal|italic|oblique <angle>{0,2}",
        "font-weight": "<font-weight-absolute>{1,2}",
        "font-variant":
          "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]",
        "line-gap-override": "normal|<percentage>",
        "size-adjust": "<percentage>",
        src: "[<url> [format( <string># )]?|local( <family-name> )]#",
        "unicode-range": "<urange>#"
      }
    },
    "font-feature-values": { prelude: "<family-name>#", descriptors: null },
    import: {
      prelude: "[<string>|<url>] [layer|layer( <layer-name> )]? [supports( [<supports-condition>|<declaration>] )]? <media-query-list>?",
      descriptors: null
    },
    keyframes: { prelude: "<keyframes-name>", descriptors: null },
    layer: { prelude: "[<layer-name>#|<layer-name>?]", descriptors: null },
    media: { prelude: "<media-query-list>", descriptors: null },
    namespace: { prelude: "<namespace-prefix>? [<string>|<url>]", descriptors: null },
    page: {
      prelude: "<page-selector-list>",
      descriptors: { bleed: "auto|<length>", marks: "none|[crop||cross]", size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]" }
    },
    property: {
      prelude: "<custom-property-name>",
      descriptors: { syntax: "<string>", inherits: "true|false", "initial-value": "<string>" }
    },
    "scroll-timeline": { prelude: "<timeline-name>", descriptors: null },
    supports: { prelude: "<supports-condition>", descriptors: null },
    viewport: {
      prelude: null,
      descriptors: {
        height: "<viewport-length>{1,2}",
        "max-height": "<viewport-length>",
        "max-width": "<viewport-length>",
        "max-zoom": "auto|<number>|<percentage>",
        "min-height": "<viewport-length>",
        "min-width": "<viewport-length>",
        "min-zoom": "auto|<number>|<percentage>",
        orientation: "auto|portrait|landscape",
        "user-zoom": "zoom|fixed",
        "viewport-fit": "auto|contain|cover",
        width: "<viewport-length>{1,2}",
        zoom: "auto|<number>|<percentage>"
      }
    }
  }
};
var bt = {};
b(bt, {
  AnPlusB: () => Jr,
  Atrule: () => tn,
  AtrulePrelude: () => nn,
  AttributeSelector: () => sn,
  Block: () => cn,
  Brackets: () => pn,
  CDC: () => mn,
  CDO: () => dn,
  ClassSelector: () => bn,
  Combinator: () => yn,
  Comment: () => wn,
  Declaration: () => Sn,
  DeclarationList: () => An,
  Dimension: () => En,
  Function: () => Pn,
  Hash: () => Dn,
  IdSelector: () => Mn,
  Identifier: () => Nn,
  MediaFeature: () => Fn,
  MediaQuery: () => _n,
  MediaQueryList: () => jn,
  Nth: () => qn,
  Number: () => Yn,
  Operator: () => Vn,
  Parentheses: () => Qn,
  Percentage: () => $n,
  PseudoClassSelector: () => Jn,
  PseudoElementSelector: () => to,
  Ratio: () => no,
  Raw: () => io,
  Rule: () => so,
  Selector: () => co,
  SelectorList: () => po,
  String: () => bo,
  StyleSheet: () => yo,
  TypeSelector: () => vo,
  UnicodeRange: () => Ao,
  Url: () => Do,
  Value: () => No,
  WhiteSpace: () => Mo
});
var Jr = {};
b(Jr, { generate: () => gc, name: () => fc, parse: () => Zr, structure: () => dc });
var me = 43,
  re = 45,
  Zt = 110,
  Ie = !0,
  mc = !1;
function Jt(e, t) {
  let r = this.tokenStart + e,
    n = this.charCodeAt(r);
  for ((n === me || n === re) && (t && this.error("Number sign is not allowed"), r++); r < this.tokenEnd; r++)
    B(this.charCodeAt(r)) || this.error("Integer is expected", r);
}
function Xe(e) {
  return Jt.call(this, 0, e);
}
function Ce(e, t) {
  if (!this.cmpChar(this.tokenStart + e, t)) {
    let r = "";
    switch (t) {
      case Zt:
        r = "N is expected";
        break;
      case re:
        r = "HyphenMinus is expected";
        break;
    }
    this.error(r, this.tokenStart + e);
  }
}
function $r() {
  let e = 0,
    t = 0,
    r = this.tokenType;
  for (; r === 13 || r === 25; ) r = this.lookupType(++e);
  if (r !== 10)
    if (this.isDelim(me, e) || this.isDelim(re, e)) {
      t = this.isDelim(me, e) ? me : re;
      do r = this.lookupType(++e);
      while (r === 13 || r === 25);
      r !== 10 && (this.skip(e), Xe.call(this, Ie));
    } else return null;
  return (
    e > 0 && this.skip(e),
    t === 0 && ((r = this.charCodeAt(this.tokenStart)), r !== me && r !== re && this.error("Number sign is expected")),
    Xe.call(this, t !== 0),
    t === re ? "-" + this.consume(10) : this.consume(10)
  );
}
var fc = "AnPlusB",
  dc = { a: [String, null], b: [String, null] };
function Zr() {
  let e = this.tokenStart,
    t = null,
    r = null;
  if (this.tokenType === 10) Xe.call(this, mc), (r = this.consume(10));
  else if (this.tokenType === 1 && this.cmpChar(this.tokenStart, re))
    switch (((t = "-1"), Ce.call(this, 1, Zt), this.tokenEnd - this.tokenStart)) {
      case 2:
        this.next(), (r = $r.call(this));
        break;
      case 3:
        Ce.call(this, 2, re), this.next(), this.skipSC(), Xe.call(this, Ie), (r = "-" + this.consume(10));
        break;
      default:
        Ce.call(this, 2, re), Jt.call(this, 3, Ie), this.next(), (r = this.substrToCursor(e + 2));
    }
  else if (this.tokenType === 1 || (this.isDelim(me) && this.lookupType(1) === 1)) {
    let n = 0;
    switch (((t = "1"), this.isDelim(me) && ((n = 1), this.next()), Ce.call(this, 0, Zt), this.tokenEnd - this.tokenStart)) {
      case 1:
        this.next(), (r = $r.call(this));
        break;
      case 2:
        Ce.call(this, 1, re), this.next(), this.skipSC(), Xe.call(this, Ie), (r = "-" + this.consume(10));
        break;
      default:
        Ce.call(this, 1, re), Jt.call(this, 2, Ie), this.next(), (r = this.substrToCursor(e + n + 1));
    }
  } else if (this.tokenType === 12) {
    let n = this.charCodeAt(this.tokenStart),
      o = n === me || n === re,
      i = this.tokenStart + o;
    for (; i < this.tokenEnd && B(this.charCodeAt(i)); i++);
    i === this.tokenStart + o && this.error("Integer is expected", this.tokenStart + o),
      Ce.call(this, i - this.tokenStart, Zt),
      (t = this.substring(e, i)),
      i + 1 === this.tokenEnd
        ? (this.next(), (r = $r.call(this)))
        : (Ce.call(this, i - this.tokenStart + 1, re),
          i + 2 === this.tokenEnd
            ? (this.next(), this.skipSC(), Xe.call(this, Ie), (r = "-" + this.consume(10)))
            : (Jt.call(this, i - this.tokenStart + 2, Ie), this.next(), (r = this.substrToCursor(i + 1))));
  } else this.error();
  return (
    t !== null && t.charCodeAt(0) === me && (t = t.substr(1)),
    r !== null && r.charCodeAt(0) === me && (r = r.substr(1)),
    { type: "AnPlusB", loc: this.getLocation(e, this.tokenStart), a: t, b: r }
  );
}
function gc(e) {
  if (e.a) {
    let t = (e.a === "+1" && "n") || (e.a === "1" && "n") || (e.a === "-1" && "-n") || e.a + "n";
    if (e.b) {
      let r = e.b[0] === "-" || e.b[0] === "+" ? e.b : "+" + e.b;
      this.tokenize(t + r);
    } else this.tokenize(t);
  } else this.tokenize(e.b);
}
var tn = {};
b(tn, { generate: () => wc, name: () => xc, parse: () => en, structure: () => kc, walkContext: () => yc });
function ga(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracketOrSemicolon, !0);
}
function bc() {
  for (let e = 1, t; (t = this.lookupType(e)); e++) {
    if (t === 24) return !0;
    if (t === 23 || t === 3) return !1;
  }
  return !1;
}
var xc = "Atrule",
  yc = "atrule",
  kc = { name: String, prelude: ["AtrulePrelude", "Raw", null], block: ["Block", null] };
function en() {
  let e = this.tokenStart,
    t,
    r,
    n = null,
    o = null;
  switch (
    (this.eat(3),
    (t = this.substrToCursor(e + 1)),
    (r = t.toLowerCase()),
    this.skipSC(),
    this.eof === !1 &&
      this.tokenType !== 23 &&
      this.tokenType !== 17 &&
      (this.parseAtrulePrelude ? (n = this.parseWithFallback(this.AtrulePrelude.bind(this, t), ga)) : (n = ga.call(this, this.tokenIndex)),
      this.skipSC()),
    this.tokenType)
  ) {
    case 17:
      this.next();
      break;
    case 23:
      hasOwnProperty.call(this.atrule, r) && typeof this.atrule[r].block == "function"
        ? (o = this.atrule[r].block.call(this))
        : (o = this.Block(bc.call(this)));
      break;
  }
  return { type: "Atrule", loc: this.getLocation(e, this.tokenStart), name: t, prelude: n, block: o };
}
function wc(e) {
  this.token(3, "@" + e.name), e.prelude !== null && this.node(e.prelude), e.block ? this.node(e.block) : this.token(17, ";");
}
var nn = {};
b(nn, { generate: () => Ac, name: () => vc, parse: () => rn, structure: () => Cc, walkContext: () => Sc });
var vc = "AtrulePrelude",
  Sc = "atrulePrelude",
  Cc = { children: [[]] };
function rn(e) {
  let t = null;
  return (
    e !== null && (e = e.toLowerCase()),
    this.skipSC(),
    hasOwnProperty.call(this.atrule, e) && typeof this.atrule[e].prelude == "function"
      ? (t = this.atrule[e].prelude.call(this))
      : (t = this.readSequence(this.scope.AtrulePrelude)),
    this.skipSC(),
    this.eof !== !0 && this.tokenType !== 23 && this.tokenType !== 17 && this.error("Semicolon or block is expected"),
    { type: "AtrulePrelude", loc: this.getLocationFromList(t), children: t }
  );
}
function Ac(e) {
  this.children(e);
}
var sn = {};
b(sn, { generate: () => Nc, name: () => Dc, parse: () => an, structure: () => Oc });
var Tc = 36,
  ba = 42,
  er = 61,
  Ec = 94,
  on = 124,
  Lc = 126;
function Pc() {
  this.eof && this.error("Unexpected end of input");
  let e = this.tokenStart,
    t = !1;
  return (
    this.isDelim(ba) ? ((t = !0), this.next()) : this.isDelim(on) || this.eat(1),
    this.isDelim(on)
      ? this.charCodeAt(this.tokenStart + 1) !== er
        ? (this.next(), this.eat(1))
        : t && this.error("Identifier is expected", this.tokenEnd)
      : t && this.error("Vertical line is expected"),
    { type: "Identifier", loc: this.getLocation(e, this.tokenStart), name: this.substrToCursor(e) }
  );
}
function Ic() {
  let e = this.tokenStart,
    t = this.charCodeAt(e);
  return (
    t !== er &&
      t !== Lc &&
      t !== Ec &&
      t !== Tc &&
      t !== ba &&
      t !== on &&
      this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"),
    this.next(),
    t !== er && (this.isDelim(er) || this.error("Equal sign is expected"), this.next()),
    this.substrToCursor(e)
  );
}
var Dc = "AttributeSelector",
  Oc = { name: "Identifier", matcher: [String, null], value: ["String", "Identifier", null], flags: [String, null] };
function an() {
  let e = this.tokenStart,
    t,
    r = null,
    n = null,
    o = null;
  return (
    this.eat(19),
    this.skipSC(),
    (t = Pc.call(this)),
    this.skipSC(),
    this.tokenType !== 20 &&
      (this.tokenType !== 1 &&
        ((r = Ic.call(this)), this.skipSC(), (n = this.tokenType === 5 ? this.String() : this.Identifier()), this.skipSC()),
      this.tokenType === 1 && ((o = this.consume(1)), this.skipSC())),
    this.eat(20),
    { type: "AttributeSelector", loc: this.getLocation(e, this.tokenStart), name: t, matcher: r, value: n, flags: o }
  );
}
function Nc(e) {
  this.token(9, "["),
    this.node(e.name),
    e.matcher !== null && (this.tokenize(e.matcher), this.node(e.value)),
    e.flags !== null && this.token(1, e.flags),
    this.token(9, "]");
}
var cn = {};
b(cn, { generate: () => _c, name: () => Rc, parse: () => ln, structure: () => Bc, walkContext: () => Fc });
function ya(e) {
  return this.Raw(e, null, !0);
}
function zc() {
  return this.parseWithFallback(this.Rule, ya);
}
function xa(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
function Mc() {
  if (this.tokenType === 17) return xa.call(this, this.tokenIndex);
  let e = this.parseWithFallback(this.Declaration, xa);
  return this.tokenType === 17 && this.next(), e;
}
var Rc = "Block",
  Fc = "block",
  Bc = { children: [["Atrule", "Rule", "Declaration"]] };
function ln(e) {
  let t = e ? Mc : zc,
    r = this.tokenStart,
    n = this.createList();
  this.eat(23);
  e: for (; !this.eof; )
    switch (this.tokenType) {
      case 24:
        break e;
      case 13:
      case 25:
        this.next();
        break;
      case 3:
        n.push(this.parseWithFallback(this.Atrule, ya));
        break;
      default:
        n.push(t.call(this));
    }
  return this.eof || this.eat(24), { type: "Block", loc: this.getLocation(r, this.tokenStart), children: n };
}
function _c(e) {
  this.token(23, "{"),
    this.children(e, (t) => {
      t.type === "Declaration" && this.token(17, ";");
    }),
    this.token(24, "}");
}
var pn = {};
b(pn, { generate: () => Hc, name: () => Uc, parse: () => un, structure: () => jc });
var Uc = "Brackets",
  jc = { children: [[]] };
function un(e, t) {
  let r = this.tokenStart,
    n = null;
  return (
    this.eat(19),
    (n = e.call(this, t)),
    this.eof || this.eat(20),
    { type: "Brackets", loc: this.getLocation(r, this.tokenStart), children: n }
  );
}
function Hc(e) {
  this.token(9, "["), this.children(e), this.token(9, "]");
}
var mn = {};
b(mn, { generate: () => Yc, name: () => qc, parse: () => hn, structure: () => Wc });
var qc = "CDC",
  Wc = [];
function hn() {
  let e = this.tokenStart;
  return this.eat(15), { type: "CDC", loc: this.getLocation(e, this.tokenStart) };
}
function Yc() {
  this.token(15, "-->");
}
var dn = {};
b(dn, { generate: () => Kc, name: () => Gc, parse: () => fn, structure: () => Vc });
var Gc = "CDO",
  Vc = [];
function fn() {
  let e = this.tokenStart;
  return this.eat(14), { type: "CDO", loc: this.getLocation(e, this.tokenStart) };
}
function Kc() {
  this.token(14, "<!--");
}
var bn = {};
b(bn, { generate: () => Zc, name: () => Xc, parse: () => gn, structure: () => $c });
var Qc = 46,
  Xc = "ClassSelector",
  $c = { name: String };
function gn() {
  return this.eatDelim(Qc), { type: "ClassSelector", loc: this.getLocation(this.tokenStart - 1, this.tokenEnd), name: this.consume(1) };
}
function Zc(e) {
  this.token(9, "."), this.token(1, e.name);
}
var yn = {};
b(yn, { generate: () => ou, name: () => ru, parse: () => xn, structure: () => nu });
var Jc = 43,
  ka = 47,
  eu = 62,
  tu = 126,
  ru = "Combinator",
  nu = { name: String };
function xn() {
  let e = this.tokenStart,
    t;
  switch (this.tokenType) {
    case 13:
      t = " ";
      break;
    case 9:
      switch (this.charCodeAt(this.tokenStart)) {
        case eu:
        case Jc:
        case tu:
          this.next();
          break;
        case ka:
          this.next(), this.eatIdent("deep"), this.eatDelim(ka);
          break;
        default:
          this.error("Combinator is expected");
      }
      t = this.substrToCursor(e);
      break;
  }
  return { type: "Combinator", loc: this.getLocation(e, this.tokenStart), name: t };
}
function ou(e) {
  this.tokenize(e.name);
}
var wn = {};
b(wn, { generate: () => cu, name: () => su, parse: () => kn, structure: () => lu });
var iu = 42,
  au = 47,
  su = "Comment",
  lu = { value: String };
function kn() {
  let e = this.tokenStart,
    t = this.tokenEnd;
  return (
    this.eat(25),
    t - e + 2 >= 2 && this.charCodeAt(t - 2) === iu && this.charCodeAt(t - 1) === au && (t -= 2),
    { type: "Comment", loc: this.getLocation(e, this.tokenStart), value: this.substring(e + 2, t) }
  );
}
function cu(e) {
  this.token(25, "/*" + e.value + "*/");
}
var Sn = {};
b(Sn, { generate: () => wu, name: () => xu, parse: () => vn, structure: () => ku, walkContext: () => yu });
var va = 33,
  uu = 35,
  pu = 36,
  hu = 38,
  mu = 42,
  fu = 43,
  wa = 47;
function du(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !0);
}
function gu(e) {
  return this.Raw(e, this.consumeUntilExclamationMarkOrSemicolon, !1);
}
function bu() {
  let e = this.tokenIndex,
    t = this.Value();
  return (
    t.type !== "Raw" && this.eof === !1 && this.tokenType !== 17 && this.isDelim(va) === !1 && this.isBalanceEdge(e) === !1 && this.error(),
    t
  );
}
var xu = "Declaration",
  yu = "declaration",
  ku = { important: [Boolean, String], property: String, value: ["Value", "Raw"] };
function vn() {
  let e = this.tokenStart,
    t = this.tokenIndex,
    r = vu.call(this),
    n = Rt(r),
    o = n ? this.parseCustomProperty : this.parseValue,
    i = n ? gu : du,
    s = !1,
    u;
  this.skipSC(), this.eat(16);
  let c = this.tokenIndex;
  if (
    (n || this.skipSC(),
    o ? (u = this.parseWithFallback(bu, i)) : (u = i.call(this, this.tokenIndex)),
    n && u.type === "Value" && u.children.isEmpty)
  ) {
    for (let a = c - this.tokenIndex; a <= 0; a++)
      if (this.lookupType(a) === 13) {
        u.children.appendData({ type: "WhiteSpace", loc: null, value: " " });
        break;
      }
  }
  return (
    this.isDelim(va) && ((s = Su.call(this)), this.skipSC()),
    this.eof === !1 && this.tokenType !== 17 && this.isBalanceEdge(t) === !1 && this.error(),
    { type: "Declaration", loc: this.getLocation(e, this.tokenStart), important: s, property: r, value: u }
  );
}
function wu(e) {
  this.token(1, e.property),
    this.token(16, ":"),
    this.node(e.value),
    e.important && (this.token(9, "!"), this.token(1, e.important === !0 ? "important" : e.important));
}
function vu() {
  let e = this.tokenStart;
  if (this.tokenType === 9)
    switch (this.charCodeAt(this.tokenStart)) {
      case mu:
      case pu:
      case fu:
      case uu:
      case hu:
        this.next();
        break;
      case wa:
        this.next(), this.isDelim(wa) && this.next();
        break;
    }
  return this.tokenType === 4 ? this.eat(4) : this.eat(1), this.substrToCursor(e);
}
function Su() {
  this.eat(9), this.skipSC();
  let e = this.consume(1);
  return e === "important" ? !0 : e;
}
var An = {};
b(An, { generate: () => Eu, name: () => Au, parse: () => Cn, structure: () => Tu });
function Cu(e) {
  return this.Raw(e, this.consumeUntilSemicolonIncluded, !0);
}
var Au = "DeclarationList",
  Tu = { children: [["Declaration"]] };
function Cn() {
  let e = this.createList();
  e: for (; !this.eof; )
    switch (this.tokenType) {
      case 13:
      case 25:
      case 17:
        this.next();
        break;
      default:
        e.push(this.parseWithFallback(this.Declaration, Cu));
    }
  return { type: "DeclarationList", loc: this.getLocationFromList(e), children: e };
}
function Eu(e) {
  this.children(e, (t) => {
    t.type === "Declaration" && this.token(17, ";");
  });
}
var En = {};
b(En, { generate: () => Iu, name: () => Lu, parse: () => Tn, structure: () => Pu });
var Lu = "Dimension",
  Pu = { value: String, unit: String };
function Tn() {
  let e = this.tokenStart,
    t = this.consumeNumber(12);
  return { type: "Dimension", loc: this.getLocation(e, this.tokenStart), value: t, unit: this.substring(e + t.length, this.tokenStart) };
}
function Iu(e) {
  this.token(12, e.value + e.unit);
}
var Pn = {};
b(Pn, { generate: () => zu, name: () => Du, parse: () => Ln, structure: () => Nu, walkContext: () => Ou });
var Du = "Function",
  Ou = "function",
  Nu = { name: String, children: [[]] };
function Ln(e, t) {
  let r = this.tokenStart,
    n = this.consumeFunctionName(),
    o = n.toLowerCase(),
    i;
  return (
    (i = t.hasOwnProperty(o) ? t[o].call(this, t) : e.call(this, t)),
    this.eof || this.eat(22),
    { type: "Function", loc: this.getLocation(r, this.tokenStart), name: n, children: i }
  );
}
function zu(e) {
  this.token(2, e.name + "("), this.children(e), this.token(22, ")");
}
var Dn = {};
b(Dn, { generate: () => Bu, name: () => Ru, parse: () => In, structure: () => Fu, xxx: () => Mu });
var Mu = "XXX",
  Ru = "Hash",
  Fu = { value: String };
function In() {
  let e = this.tokenStart;
  return this.eat(4), { type: "Hash", loc: this.getLocation(e, this.tokenStart), value: this.substrToCursor(e + 1) };
}
function Bu(e) {
  this.token(4, "#" + e.value);
}
var Nn = {};
b(Nn, { generate: () => ju, name: () => _u, parse: () => On, structure: () => Uu });
var _u = "Identifier",
  Uu = { name: String };
function On() {
  return { type: "Identifier", loc: this.getLocation(this.tokenStart, this.tokenEnd), name: this.consume(1) };
}
function ju(e) {
  this.token(1, e.name);
}
var Mn = {};
b(Mn, { generate: () => Wu, name: () => Hu, parse: () => zn, structure: () => qu });
var Hu = "IdSelector",
  qu = { name: String };
function zn() {
  let e = this.tokenStart;
  return this.eat(4), { type: "IdSelector", loc: this.getLocation(e, this.tokenStart), name: this.substrToCursor(e + 1) };
}
function Wu(e) {
  this.token(9, "#" + e.name);
}
var Fn = {};
b(Fn, { generate: () => Vu, name: () => Yu, parse: () => Rn, structure: () => Gu });
var Yu = "MediaFeature",
  Gu = { name: String, value: ["Identifier", "Number", "Dimension", "Ratio", null] };
function Rn() {
  let e = this.tokenStart,
    t,
    r = null;
  if ((this.eat(21), this.skipSC(), (t = this.consume(1)), this.skipSC(), this.tokenType !== 22)) {
    switch ((this.eat(16), this.skipSC(), this.tokenType)) {
      case 10:
        this.lookupNonWSType(1) === 9 ? (r = this.Ratio()) : (r = this.Number());
        break;
      case 12:
        r = this.Dimension();
        break;
      case 1:
        r = this.Identifier();
        break;
      default:
        this.error("Number, dimension, ratio or identifier is expected");
    }
    this.skipSC();
  }
  return this.eat(22), { type: "MediaFeature", loc: this.getLocation(e, this.tokenStart), name: t, value: r };
}
function Vu(e) {
  this.token(21, "("), this.token(1, e.name), e.value !== null && (this.token(16, ":"), this.node(e.value)), this.token(22, ")");
}
var _n = {};
b(_n, { generate: () => Xu, name: () => Ku, parse: () => Bn, structure: () => Qu });
var Ku = "MediaQuery",
  Qu = { children: [["Identifier", "MediaFeature", "WhiteSpace"]] };
function Bn() {
  let e = this.createList(),
    t = null;
  this.skipSC();
  e: for (; !this.eof; ) {
    switch (this.tokenType) {
      case 25:
      case 13:
        this.next();
        continue;
      case 1:
        t = this.Identifier();
        break;
      case 21:
        t = this.MediaFeature();
        break;
      default:
        break e;
    }
    e.push(t);
  }
  return (
    t === null && this.error("Identifier or parenthesis is expected"), { type: "MediaQuery", loc: this.getLocationFromList(e), children: e }
  );
}
function Xu(e) {
  this.children(e);
}
var jn = {};
b(jn, { generate: () => Ju, name: () => $u, parse: () => Un, structure: () => Zu });
var $u = "MediaQueryList",
  Zu = { children: [["MediaQuery"]] };
function Un() {
  let e = this.createList();
  for (this.skipSC(); !this.eof && (e.push(this.MediaQuery()), this.tokenType === 18); ) this.next();
  return { type: "MediaQueryList", loc: this.getLocationFromList(e), children: e };
}
function Ju(e) {
  this.children(e, () => this.token(18, ","));
}
var qn = {};
b(qn, { generate: () => rp, name: () => ep, parse: () => Hn, structure: () => tp });
var ep = "Nth",
  tp = { nth: ["AnPlusB", "Identifier"], selector: ["SelectorList", null] };
function Hn() {
  this.skipSC();
  let e = this.tokenStart,
    t = e,
    r = null,
    n;
  return (
    this.lookupValue(0, "odd") || this.lookupValue(0, "even") ? (n = this.Identifier()) : (n = this.AnPlusB()),
    (t = this.tokenStart),
    this.skipSC(),
    this.lookupValue(0, "of") && (this.next(), (r = this.SelectorList()), (t = this.tokenStart)),
    { type: "Nth", loc: this.getLocation(e, t), nth: n, selector: r }
  );
}
function rp(e) {
  this.node(e.nth), e.selector !== null && (this.token(1, "of"), this.node(e.selector));
}
var Yn = {};
b(Yn, { generate: () => ip, name: () => np, parse: () => Wn, structure: () => op });
var np = "Number",
  op = { value: String };
function Wn() {
  return { type: "Number", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: this.consume(10) };
}
function ip(e) {
  this.token(10, e.value);
}
var Vn = {};
b(Vn, { generate: () => lp, name: () => ap, parse: () => Gn, structure: () => sp });
var ap = "Operator",
  sp = { value: String };
function Gn() {
  let e = this.tokenStart;
  return this.next(), { type: "Operator", loc: this.getLocation(e, this.tokenStart), value: this.substrToCursor(e) };
}
function lp(e) {
  this.tokenize(e.value);
}
var Qn = {};
b(Qn, { generate: () => pp, name: () => cp, parse: () => Kn, structure: () => up });
var cp = "Parentheses",
  up = { children: [[]] };
function Kn(e, t) {
  let r = this.tokenStart,
    n = null;
  return (
    this.eat(21),
    (n = e.call(this, t)),
    this.eof || this.eat(22),
    { type: "Parentheses", loc: this.getLocation(r, this.tokenStart), children: n }
  );
}
function pp(e) {
  this.token(21, "("), this.children(e), this.token(22, ")");
}
var $n = {};
b($n, { generate: () => fp, name: () => hp, parse: () => Xn, structure: () => mp });
var hp = "Percentage",
  mp = { value: String };
function Xn() {
  return { type: "Percentage", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: this.consumeNumber(11) };
}
function fp(e) {
  this.token(11, e.value + "%");
}
var Jn = {};
b(Jn, { generate: () => xp, name: () => dp, parse: () => Zn, structure: () => bp, walkContext: () => gp });
var dp = "PseudoClassSelector",
  gp = "function",
  bp = { name: String, children: [["Raw"], null] };
function Zn() {
  let e = this.tokenStart,
    t = null,
    r,
    n;
  return (
    this.eat(16),
    this.tokenType === 2
      ? ((r = this.consumeFunctionName()),
        (n = r.toLowerCase()),
        hasOwnProperty.call(this.pseudo, n)
          ? (this.skipSC(), (t = this.pseudo[n].call(this)), this.skipSC())
          : ((t = this.createList()), t.push(this.Raw(this.tokenIndex, null, !1))),
        this.eat(22))
      : (r = this.consume(1)),
    { type: "PseudoClassSelector", loc: this.getLocation(e, this.tokenStart), name: r, children: t }
  );
}
function xp(e) {
  this.token(16, ":"), e.children === null ? this.token(1, e.name) : (this.token(2, e.name + "("), this.children(e), this.token(22, ")"));
}
var to = {};
b(to, { generate: () => vp, name: () => yp, parse: () => eo, structure: () => wp, walkContext: () => kp });
var yp = "PseudoElementSelector",
  kp = "function",
  wp = { name: String, children: [["Raw"], null] };
function eo() {
  let e = this.tokenStart,
    t = null,
    r,
    n;
  return (
    this.eat(16),
    this.eat(16),
    this.tokenType === 2
      ? ((r = this.consumeFunctionName()),
        (n = r.toLowerCase()),
        hasOwnProperty.call(this.pseudo, n)
          ? (this.skipSC(), (t = this.pseudo[n].call(this)), this.skipSC())
          : ((t = this.createList()), t.push(this.Raw(this.tokenIndex, null, !1))),
        this.eat(22))
      : (r = this.consume(1)),
    { type: "PseudoElementSelector", loc: this.getLocation(e, this.tokenStart), name: r, children: t }
  );
}
function vp(e) {
  this.token(16, ":"),
    this.token(16, ":"),
    e.children === null ? this.token(1, e.name) : (this.token(2, e.name + "("), this.children(e), this.token(22, ")"));
}
var no = {};
b(no, { generate: () => Ep, name: () => Ap, parse: () => ro, structure: () => Tp });
var Sp = 47,
  Cp = 46;
function Sa() {
  this.skipSC();
  let e = this.consume(10);
  for (let t = 0; t < e.length; t++) {
    let r = e.charCodeAt(t);
    !B(r) && r !== Cp && this.error("Unsigned number is expected", this.tokenStart - e.length + t);
  }
  return Number(e) === 0 && this.error("Zero number is not allowed", this.tokenStart - e.length), e;
}
var Ap = "Ratio",
  Tp = { left: String, right: String };
function ro() {
  let e = this.tokenStart,
    t = Sa.call(this),
    r;
  return (
    this.skipSC(), this.eatDelim(Sp), (r = Sa.call(this)), { type: "Ratio", loc: this.getLocation(e, this.tokenStart), left: t, right: r }
  );
}
function Ep(e) {
  this.token(10, e.left), this.token(9, "/"), this.token(10, e.right);
}
var io = {};
b(io, { generate: () => Dp, name: () => Pp, parse: () => oo, structure: () => Ip });
function Lp() {
  return this.tokenIndex > 0 && this.lookupType(-1) === 13
    ? this.tokenIndex > 1
      ? this.getTokenStart(this.tokenIndex - 1)
      : this.firstCharOffset
    : this.tokenStart;
}
var Pp = "Raw",
  Ip = { value: String };
function oo(e, t, r) {
  let n = this.getTokenStart(e),
    o;
  return (
    this.skipUntilBalanced(e, t || this.consumeUntilBalanceEnd),
    r && this.tokenStart > n ? (o = Lp.call(this)) : (o = this.tokenStart),
    { type: "Raw", loc: this.getLocation(n, o), value: this.substring(n, o) }
  );
}
function Dp(e) {
  this.tokenize(e.value);
}
var so = {};
b(so, { generate: () => Rp, name: () => Np, parse: () => ao, structure: () => Mp, walkContext: () => zp });
function Ca(e) {
  return this.Raw(e, this.consumeUntilLeftCurlyBracket, !0);
}
function Op() {
  let e = this.SelectorList();
  return e.type !== "Raw" && this.eof === !1 && this.tokenType !== 23 && this.error(), e;
}
var Np = "Rule",
  zp = "rule",
  Mp = { prelude: ["SelectorList", "Raw"], block: ["Block"] };
function ao() {
  let e = this.tokenIndex,
    t = this.tokenStart,
    r,
    n;
  return (
    this.parseRulePrelude ? (r = this.parseWithFallback(Op, Ca)) : (r = Ca.call(this, e)),
    (n = this.Block(!0)),
    { type: "Rule", loc: this.getLocation(t, this.tokenStart), prelude: r, block: n }
  );
}
function Rp(e) {
  this.node(e.prelude), this.node(e.block);
}
var co = {};
b(co, { generate: () => _p, name: () => Fp, parse: () => lo, structure: () => Bp });
var Fp = "Selector",
  Bp = {
    children: [
      [
        "TypeSelector",
        "IdSelector",
        "ClassSelector",
        "AttributeSelector",
        "PseudoClassSelector",
        "PseudoElementSelector",
        "Combinator",
        "WhiteSpace"
      ]
    ]
  };
function lo() {
  let e = this.readSequence(this.scope.Selector);
  return (
    this.getFirstListNode(e) === null && this.error("Selector is expected"),
    { type: "Selector", loc: this.getLocationFromList(e), children: e }
  );
}
function _p(e) {
  this.children(e);
}
var po = {};
b(po, { generate: () => qp, name: () => Up, parse: () => uo, structure: () => Hp, walkContext: () => jp });
var Up = "SelectorList",
  jp = "selector",
  Hp = { children: [["Selector", "Raw"]] };
function uo() {
  let e = this.createList();
  for (; !this.eof; ) {
    if ((e.push(this.Selector()), this.tokenType === 18)) {
      this.next();
      continue;
    }
    break;
  }
  return { type: "SelectorList", loc: this.getLocationFromList(e), children: e };
}
function qp(e) {
  this.children(e, () => this.token(18, ","));
}
var bo = {};
b(bo, { generate: () => Gp, name: () => Wp, parse: () => go, structure: () => Yp });
var fo = {};
b(fo, { decode: () => dt, encode: () => mo });
var ho = 92,
  Aa = 34,
  Ta = 39;
function dt(e) {
  let t = e.length,
    r = e.charCodeAt(0),
    n = r === Aa || r === Ta ? 1 : 0,
    o = n === 1 && t > 1 && e.charCodeAt(t - 1) === r ? t - 2 : t - 1,
    i = "";
  for (let s = n; s <= o; s++) {
    let u = e.charCodeAt(s);
    if (u === ho) {
      if (s === o) {
        s !== t - 1 && (i = e.substr(s + 1));
        break;
      }
      if (((u = e.charCodeAt(++s)), $(ho, u))) {
        let c = s - 1,
          a = se(e, c);
        (s = a - 1), (i += Re(e.substring(c + 1, a)));
      } else u === 13 && e.charCodeAt(s + 1) === 10 && s++;
    } else i += e[s];
  }
  return i;
}
function mo(e, t) {
  let r = t ? "'" : '"',
    n = t ? Ta : Aa,
    o = "",
    i = !1;
  for (let s = 0; s < e.length; s++) {
    let u = e.charCodeAt(s);
    if (u === 0) {
      o += "\uFFFD";
      continue;
    }
    if (u <= 31 || u === 127) {
      (o += "\\" + u.toString(16)), (i = !0);
      continue;
    }
    u === n || u === ho ? ((o += "\\" + e.charAt(s)), (i = !1)) : (i && (ee(u) || pe(u)) && (o += " "), (o += e.charAt(s)), (i = !1));
  }
  return r + o + r;
}
var Wp = "String",
  Yp = { value: String };
function go() {
  return { type: "String", loc: this.getLocation(this.tokenStart, this.tokenEnd), value: dt(this.consume(5)) };
}
function Gp(e) {
  this.token(5, mo(e.value));
}
var yo = {};
b(yo, { generate: () => $p, name: () => Kp, parse: () => xo, structure: () => Xp, walkContext: () => Qp });
var Vp = 33;
function Ea(e) {
  return this.Raw(e, null, !1);
}
var Kp = "StyleSheet",
  Qp = "stylesheet",
  Xp = { children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]] };
function xo() {
  let e = this.tokenStart,
    t = this.createList(),
    r;
  e: for (; !this.eof; ) {
    switch (this.tokenType) {
      case 13:
        this.next();
        continue;
      case 25:
        if (this.charCodeAt(this.tokenStart + 2) !== Vp) {
          this.next();
          continue;
        }
        r = this.Comment();
        break;
      case 14:
        r = this.CDO();
        break;
      case 15:
        r = this.CDC();
        break;
      case 3:
        r = this.parseWithFallback(this.Atrule, Ea);
        break;
      default:
        r = this.parseWithFallback(this.Rule, Ea);
    }
    t.push(r);
  }
  return { type: "StyleSheet", loc: this.getLocation(e, this.tokenStart), children: t };
}
function $p(e) {
  this.children(e);
}
var vo = {};
b(vo, { generate: () => th, name: () => Jp, parse: () => wo, structure: () => eh });
var Zp = 42,
  La = 124;
function ko() {
  this.tokenType !== 1 && this.isDelim(Zp) === !1 && this.error("Identifier or asterisk is expected"), this.next();
}
var Jp = "TypeSelector",
  eh = { name: String };
function wo() {
  let e = this.tokenStart;
  return (
    this.isDelim(La) ? (this.next(), ko.call(this)) : (ko.call(this), this.isDelim(La) && (this.next(), ko.call(this))),
    { type: "TypeSelector", loc: this.getLocation(e, this.tokenStart), name: this.substrToCursor(e) }
  );
}
function th(e) {
  this.tokenize(e.name);
}
var Ao = {};
b(Ao, { generate: () => ah, name: () => oh, parse: () => Co, structure: () => ih });
var Pa = 43,
  Ia = 45,
  So = 63;
function gt(e, t) {
  let r = 0;
  for (let n = this.tokenStart + e; n < this.tokenEnd; n++) {
    let o = this.charCodeAt(n);
    if (o === Ia && t && r !== 0) return gt.call(this, e + r + 1, !1), -1;
    ee(o) ||
      this.error(
        t && r !== 0
          ? "Hyphen minus" + (r < 6 ? " or hex digit" : "") + " is expected"
          : r < 6
          ? "Hex digit is expected"
          : "Unexpected input",
        n
      ),
      ++r > 6 && this.error("Too many hex digits", n);
  }
  return this.next(), r;
}
function tr(e) {
  let t = 0;
  for (; this.isDelim(So); ) ++t > e && this.error("Too many question marks"), this.next();
}
function rh(e) {
  this.charCodeAt(this.tokenStart) !== e && this.error((e === Pa ? "Plus sign" : "Hyphen minus") + " is expected");
}
function nh() {
  let e = 0;
  switch (this.tokenType) {
    case 10:
      if (((e = gt.call(this, 1, !0)), this.isDelim(So))) {
        tr.call(this, 6 - e);
        break;
      }
      if (this.tokenType === 12 || this.tokenType === 10) {
        rh.call(this, Ia), gt.call(this, 1, !1);
        break;
      }
      break;
    case 12:
      (e = gt.call(this, 1, !0)), e > 0 && tr.call(this, 6 - e);
      break;
    default:
      if ((this.eatDelim(Pa), this.tokenType === 1)) {
        (e = gt.call(this, 0, !0)), e > 0 && tr.call(this, 6 - e);
        break;
      }
      if (this.isDelim(So)) {
        this.next(), tr.call(this, 5);
        break;
      }
      this.error("Hex digit or question mark is expected");
  }
}
var oh = "UnicodeRange",
  ih = { value: String };
function Co() {
  let e = this.tokenStart;
  return (
    this.eatIdent("u"), nh.call(this), { type: "UnicodeRange", loc: this.getLocation(e, this.tokenStart), value: this.substrToCursor(e) }
  );
}
function ah(e) {
  this.tokenize(e.value);
}
var Do = {};
b(Do, { generate: () => mh, name: () => ph, parse: () => Io, structure: () => hh });
var Po = {};
b(Po, { decode: () => Eo, encode: () => Lo });
var sh = 32,
  To = 92,
  lh = 34,
  ch = 39,
  uh = 40,
  Da = 41;
function Eo(e) {
  let t = e.length,
    r = 4,
    n = e.charCodeAt(t - 1) === Da ? t - 2 : t - 1,
    o = "";
  for (; r < n && pe(e.charCodeAt(r)); ) r++;
  for (; r < n && pe(e.charCodeAt(n)); ) n--;
  for (let i = r; i <= n; i++) {
    let s = e.charCodeAt(i);
    if (s === To) {
      if (i === n) {
        i !== t - 1 && (o = e.substr(i + 1));
        break;
      }
      if (((s = e.charCodeAt(++i)), $(To, s))) {
        let u = i - 1,
          c = se(e, u);
        (i = c - 1), (o += Re(e.substring(u + 1, c)));
      } else s === 13 && e.charCodeAt(i + 1) === 10 && i++;
    } else o += e[i];
  }
  return o;
}
function Lo(e) {
  let t = "",
    r = !1;
  for (let n = 0; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o === 0) {
      t += "\uFFFD";
      continue;
    }
    if (o <= 31 || o === 127) {
      (t += "\\" + o.toString(16)), (r = !0);
      continue;
    }
    o === sh || o === To || o === lh || o === ch || o === uh || o === Da
      ? ((t += "\\" + e.charAt(n)), (r = !1))
      : (r && ee(o) && (t += " "), (t += e.charAt(n)), (r = !1));
  }
  return "url(" + t + ")";
}
var ph = "Url",
  hh = { value: String };
function Io() {
  let e = this.tokenStart,
    t;
  switch (this.tokenType) {
    case 7:
      t = Eo(this.consume(7));
      break;
    case 2:
      this.cmpStr(this.tokenStart, this.tokenEnd, "url(") || this.error("Function name must be `url`"),
        this.eat(2),
        this.skipSC(),
        (t = dt(this.consume(5))),
        this.skipSC(),
        this.eof || this.eat(22);
      break;
    default:
      this.error("Url or Function is expected");
  }
  return { type: "Url", loc: this.getLocation(e, this.tokenStart), value: t };
}
function mh(e) {
  this.token(7, Lo(e.value));
}
var No = {};
b(No, { generate: () => gh, name: () => fh, parse: () => Oo, structure: () => dh });
var fh = "Value",
  dh = { children: [[]] };
function Oo() {
  let e = this.tokenStart,
    t = this.readSequence(this.scope.Value);
  return { type: "Value", loc: this.getLocation(e, this.tokenStart), children: t };
}
function gh(e) {
  this.children(e);
}
var Mo = {};
b(Mo, { generate: () => kh, name: () => xh, parse: () => zo, structure: () => yh });
var bh = Object.freeze({ type: "WhiteSpace", loc: null, value: " " }),
  xh = "WhiteSpace",
  yh = { value: String };
function zo() {
  return this.eat(13), bh;
}
function kh(e) {
  this.token(13, e.value);
}
var Oa = { generic: !0, ...da, node: bt };
var Ro = {};
b(Ro, { AtrulePrelude: () => za, Selector: () => Ra, Value: () => Ua });
var wh = 35,
  vh = 42,
  Na = 43,
  Sh = 45,
  Ch = 47,
  Ah = 117;
function xt(e) {
  switch (this.tokenType) {
    case 4:
      return this.Hash();
    case 18:
      return this.Operator();
    case 21:
      return this.Parentheses(this.readSequence, e.recognizer);
    case 19:
      return this.Brackets(this.readSequence, e.recognizer);
    case 5:
      return this.String();
    case 12:
      return this.Dimension();
    case 11:
      return this.Percentage();
    case 10:
      return this.Number();
    case 2:
      return this.cmpStr(this.tokenStart, this.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e.recognizer);
    case 7:
      return this.Url();
    case 1:
      return this.cmpChar(this.tokenStart, Ah) && this.cmpChar(this.tokenStart + 1, Na) ? this.UnicodeRange() : this.Identifier();
    case 9: {
      let t = this.charCodeAt(this.tokenStart);
      if (t === Ch || t === vh || t === Na || t === Sh) return this.Operator();
      t === wh && this.error("Hex or identifier is expected", this.tokenStart + 1);
      break;
    }
  }
}
var za = { getNode: xt };
var Th = 35,
  Eh = 42,
  Lh = 43,
  Ph = 47,
  Ma = 46,
  Ih = 62,
  Dh = 124,
  Oh = 126;
function Nh(e, t) {
  t.last !== null &&
    t.last.type !== "Combinator" &&
    e !== null &&
    e.type !== "Combinator" &&
    t.push({ type: "Combinator", loc: null, name: " " });
}
function zh() {
  switch (this.tokenType) {
    case 19:
      return this.AttributeSelector();
    case 4:
      return this.IdSelector();
    case 16:
      return this.lookupType(1) === 16 ? this.PseudoElementSelector() : this.PseudoClassSelector();
    case 1:
      return this.TypeSelector();
    case 10:
    case 11:
      return this.Percentage();
    case 12:
      this.charCodeAt(this.tokenStart) === Ma && this.error("Identifier is expected", this.tokenStart + 1);
      break;
    case 9: {
      switch (this.charCodeAt(this.tokenStart)) {
        case Lh:
        case Ih:
        case Oh:
        case Ph:
          return this.Combinator();
        case Ma:
          return this.ClassSelector();
        case Eh:
        case Dh:
          return this.TypeSelector();
        case Th:
          return this.IdSelector();
      }
      break;
    }
  }
}
var Ra = { onWhiteSpace: Nh, getNode: zh };
function Fa() {
  return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
}
function Ba() {
  let e = this.createList();
  if ((this.skipSC(), e.push(this.Identifier()), this.skipSC(), this.tokenType === 18)) {
    e.push(this.Operator());
    let t = this.tokenIndex,
      r = this.parseCustomProperty ? this.Value(null) : this.Raw(this.tokenIndex, this.consumeUntilExclamationMarkOrSemicolon, !1);
    if (r.type === "Value" && r.children.isEmpty) {
      for (let n = t - this.tokenIndex; n <= 0; n++)
        if (this.lookupType(n) === 13) {
          r.children.appendData({ type: "WhiteSpace", loc: null, value: " " });
          break;
        }
    }
    e.push(r);
  }
  return e;
}
function _a(e) {
  return e !== null && e.type === "Operator" && (e.value[e.value.length - 1] === "-" || e.value[e.value.length - 1] === "+");
}
var Ua = {
  getNode: xt,
  onWhiteSpace(e, t) {
    _a(e) && (e.value = " " + e.value), _a(t.last) && (t.last.value += " ");
  },
  expression: Fa,
  var: Ba
};
var ja = {
  parse: {
    prelude: null,
    block() {
      return this.Block(!0);
    }
  }
};
var Ha = {
  parse: {
    prelude() {
      let e = this.createList();
      switch ((this.skipSC(), this.tokenType)) {
        case 5:
          e.push(this.String());
          break;
        case 7:
        case 2:
          e.push(this.Url());
          break;
        default:
          this.error("String or url() is expected");
      }
      return (this.lookupNonWSType(0) === 1 || this.lookupNonWSType(0) === 21) && e.push(this.MediaQueryList()), e;
    },
    block: null
  }
};
var qa = {
  parse: {
    prelude() {
      return this.createSingleNodeList(this.MediaQueryList());
    },
    block() {
      return this.Block(!1);
    }
  }
};
var Wa = {
  parse: {
    prelude() {
      return this.createSingleNodeList(this.SelectorList());
    },
    block() {
      return this.Block(!0);
    }
  }
};
function Mh() {
  return this.createSingleNodeList(this.Raw(this.tokenIndex, null, !1));
}
function Rh() {
  return (
    this.skipSC(), this.tokenType === 1 && this.lookupNonWSType(1) === 16 ? this.createSingleNodeList(this.Declaration()) : Ya.call(this)
  );
}
function Ya() {
  let e = this.createList(),
    t;
  this.skipSC();
  e: for (; !this.eof; ) {
    switch (this.tokenType) {
      case 25:
      case 13:
        this.next();
        continue;
      case 2:
        t = this.Function(Mh, this.scope.AtrulePrelude);
        break;
      case 1:
        t = this.Identifier();
        break;
      case 21:
        t = this.Parentheses(Rh, this.scope.AtrulePrelude);
        break;
      default:
        break e;
    }
    e.push(t);
  }
  return e;
}
var Ga = {
  parse: {
    prelude() {
      let e = Ya.call(this);
      return this.getFirstListNode(e) === null && this.error("Condition is expected"), e;
    },
    block() {
      return this.Block(!1);
    }
  }
};
var Va = { "font-face": ja, import: Ha, media: qa, page: Wa, supports: Ga };
var De = {
    parse() {
      return this.createSingleNodeList(this.SelectorList());
    }
  },
  Fh = {
    parse() {
      return this.createSingleNodeList(this.Selector());
    }
  },
  Ka = {
    parse() {
      return this.createSingleNodeList(this.Identifier());
    }
  },
  rr = {
    parse() {
      return this.createSingleNodeList(this.Nth());
    }
  },
  Qa = {
    dir: Ka,
    has: De,
    lang: Ka,
    matches: De,
    is: De,
    "-moz-any": De,
    "-webkit-any": De,
    where: De,
    not: De,
    "nth-child": rr,
    "nth-last-child": rr,
    "nth-last-of-type": rr,
    "nth-of-type": rr,
    slotted: Fh
  };
var Fo = {};
b(Fo, {
  AnPlusB: () => Zr,
  Atrule: () => en,
  AtrulePrelude: () => rn,
  AttributeSelector: () => an,
  Block: () => ln,
  Brackets: () => un,
  CDC: () => hn,
  CDO: () => fn,
  ClassSelector: () => gn,
  Combinator: () => xn,
  Comment: () => kn,
  Declaration: () => vn,
  DeclarationList: () => Cn,
  Dimension: () => Tn,
  Function: () => Ln,
  Hash: () => In,
  IdSelector: () => zn,
  Identifier: () => On,
  MediaFeature: () => Rn,
  MediaQuery: () => Bn,
  MediaQueryList: () => Un,
  Nth: () => Hn,
  Number: () => Wn,
  Operator: () => Gn,
  Parentheses: () => Kn,
  Percentage: () => Xn,
  PseudoClassSelector: () => Zn,
  PseudoElementSelector: () => eo,
  Ratio: () => ro,
  Raw: () => oo,
  Rule: () => ao,
  Selector: () => lo,
  SelectorList: () => uo,
  String: () => go,
  StyleSheet: () => xo,
  TypeSelector: () => wo,
  UnicodeRange: () => Co,
  Url: () => Io,
  Value: () => Oo,
  WhiteSpace: () => zo
});
var Xa = {
  parseContext: {
    default: "StyleSheet",
    stylesheet: "StyleSheet",
    atrule: "Atrule",
    atrulePrelude(e) {
      return this.AtrulePrelude(e.atrule ? String(e.atrule) : null);
    },
    mediaQueryList: "MediaQueryList",
    mediaQuery: "MediaQuery",
    rule: "Rule",
    selectorList: "SelectorList",
    selector: "Selector",
    block() {
      return this.Block(!0);
    },
    declarationList: "DeclarationList",
    declaration: "Declaration",
    value: "Value"
  },
  scope: Ro,
  atrule: Va,
  pseudo: Qa,
  node: Fo
};
var $a = { node: bt };
var Za = Xr({ ...Oa, ...Xa, ...$a });
var Zg = "2.2.0";
function Bo(e) {
  let t = {};
  for (let r in e) {
    let n = e[r];
    n && (Array.isArray(n) || n instanceof I ? (n = n.map(Bo)) : n.constructor === Object && (n = Bo(n))), (t[r] = n);
  }
  return t;
}
var es = {};
b(es, { decode: () => Bh, encode: () => _h });
var Ja = 92;
function Bh(e) {
  let t = e.length - 1,
    r = "";
  for (let n = 0; n < e.length; n++) {
    let o = e.charCodeAt(n);
    if (o === Ja) {
      if (n === t) break;
      if (((o = e.charCodeAt(++n)), $(Ja, o))) {
        let i = n - 1,
          s = se(e, i);
        (n = s - 1), (r += Re(e.substring(i + 1, s)));
      } else o === 13 && e.charCodeAt(n + 1) === 10 && n++;
    } else r += e[n];
  }
  return r;
}
function _h(e) {
  let t = "";
  if (e.length === 1 && e.charCodeAt(0) === 45) return "\\-";
  for (let r = 0; r < e.length; r++) {
    let n = e.charCodeAt(r);
    if (n === 0) {
      t += "\uFFFD";
      continue;
    }
    if (n <= 31 || n === 127 || (n >= 48 && n <= 57 && (r === 0 || (r === 1 && e.charCodeAt(0) === 45)))) {
      t += "\\" + n.toString(16) + " ";
      continue;
    }
    Ne(n) ? (t += e.charAt(r)) : (t += "\\" + e.charAt(r));
  }
  return t;
}
var {
  tokenize: ob,
  parse: ib,
  generate: ab,
  lexer: sb,
  createLexer: lb,
  walk: cb,
  find: ub,
  findLast: pb,
  findAll: hb,
  toPlainObject: mb,
  fromPlainObject: fb,
  fork: db
} = Za;
export {
  Ke as Lexer,
  I as List,
  nt as TokenStream,
  Bo as clone,
  lb as createLexer,
  Xr as createSyntax,
  Qi as definitionSyntax,
  ub as find,
  hb as findAll,
  pb as findLast,
  db as fork,
  fb as fromPlainObject,
  ab as generate,
  es as ident,
  Rt as isCustomProperty,
  Mt as keyword,
  sb as lexer,
  ib as parse,
  vr as property,
  fo as string,
  mb as toPlainObject,
  Fe as tokenNames,
  Ze as tokenTypes,
  ob as tokenize,
  Po as url,
  _m as vendorPrefix,
  Zg as version,
  cb as walk
};
