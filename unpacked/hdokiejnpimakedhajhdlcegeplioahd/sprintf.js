var lp_global_sprintf;
!(function (e) {
  var g = {
    not_string: /[^s]/,
    number: /[dief]/,
    text: /^[^\x25]+/,
    modulo: /^\x25{2}/,
    placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fiosuxX])/,
    key: /^([a-z_][a-z_\d]*)/i,
    key_access: /^\.([a-z_][a-z_\d]*)/i,
    index_access: /^\[(\d+)\]/,
    sign: /^[\+\-]/
  };
  function x() {
    var e = arguments[0],
      n = x.cache;
    return (n[e] && n.hasOwnProperty(e)) || (n[e] = x.parse(e)), x.format.call(null, n[e], arguments);
  }
  (x.format = function (e, n) {
    for (var t = 1, r = e.length, i = "", o, s = [], a, f, l, p, c, p, u = !0, d = "", a = 0; a < r; a++)
      if ("string" === (i = _(e[a]))) s[s.length] = e[a];
      else if ("array" === i) {
        if ((l = e[a])[2])
          for (o = n[t], f = 0; f < l[2].length; f++) {
            if (!o.hasOwnProperty(l[2][f])) throw new Error(x("[sprintf] property '%s' does not exist", l[2][f]));
            o = o[l[2][f]];
          }
        else o = l[1] ? n[l[1]] : n[t++];
        if (("function" == _(o) && (o = o()), g.not_string.test(l[8]) && "number" != _(o) && isNaN(o)))
          throw new TypeError(x("[sprintf] expecting number but found %s", _(o)));
        switch ((g.number.test(l[8]) && (u = 0 <= o), l[8])) {
          case "b":
            o = o.toString(2);
            break;
          case "c":
            o = String.fromCharCode(o);
            break;
          case "d":
          case "i":
            o = parseInt(o, 10);
            break;
          case "e":
            o = l[7] ? o.toExponential(l[7]) : o.toExponential();
            break;
          case "f":
            o = l[7] ? parseFloat(o).toFixed(l[7]) : parseFloat(o);
            break;
          case "o":
            o = o.toString(8);
            break;
          case "s":
            o = (o = String(o)) && l[7] ? o.substring(0, l[7]) : o;
            break;
          case "u":
            o >>>= 0;
            break;
          case "x":
            o = o.toString(16);
            break;
          case "X":
            o = o.toString(16).toUpperCase();
        }
        !g.number.test(l[8]) || (u && !l[3]) ? (d = "") : ((d = u ? "+" : "-"), (o = o.toString().replace(g.sign, ""))),
          (c = l[4] ? ("0" === l[4] ? "0" : l[4].charAt(1)) : " "),
          (p = l[6] - (d + o).length),
          (p = l[6] && 0 < p ? h(c, p) : ""),
          (s[s.length] = l[5] ? d + o + p : "0" === c ? d + p + o : p + d + o);
      }
    return s.join("");
  }),
    (x.cache = {}),
    (x.parse = function (e) {
      for (var n = e, t = [], r = [], i = 0; n; ) {
        if (null !== (t = g.text.exec(n))) r[r.length] = t[0];
        else if (null !== (t = g.modulo.exec(n))) r[r.length] = "%";
        else {
          if (null === (t = g.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
          if (t[2]) {
            i |= 1;
            var o = [],
              s = t[2],
              a = [];
            if (null === (a = g.key.exec(s))) throw new SyntaxError("[sprintf] failed to parse named argument key");
            for (o[o.length] = a[1]; "" !== (s = s.substring(a[0].length)); ) {
              if (null === (a = g.key_access.exec(s)) && null === (a = g.index_access.exec(s)))
                throw new SyntaxError("[sprintf] failed to parse named argument key");
              o[o.length] = a[1];
            }
            t[2] = o;
          } else i |= 2;
          if (3 === i) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
          r[r.length] = t;
        }
        n = n.substring(t[0].length);
      }
      return r;
    });
  var n = function (e, n, t) {
    return (t = (n || []).slice(0)).splice(0, 0, e), x.apply(null, t);
  };
  function _(e) {
    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
  }
  function h(e, n) {
    return Array(n + 1).join(e);
  }
  "undefined" != typeof g_isie && g_isie
    ? (init_LPfn(), "undefined" != typeof LPfn && ((LPfn.sprintf = x), (LPfn.vsprintf = n)))
    : ((e.sprintf = x),
      (e.vsprintf = n),
      "function" == typeof define &&
        define.amd &&
        define(function () {
          return { sprintf: x, vsprintf: n };
        })),
    ("undefined" != typeof LP || ("undefined" != typeof is_firefox_webext && is_firefox_webext())) && (lp_global_sprintf = x),
    "undefined" != typeof g_isie && g_isie && (lp_global_sprintf = x);
})("undefined" == typeof window ? this : window),
  "undefined" != typeof is_firefox_webext && is_firefox_webext() && (sprintf = lp_global_sprintf);
