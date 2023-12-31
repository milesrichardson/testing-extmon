"use strict";
!(function (e) {
  /*!
   * content-disposition
   * Copyright(c) 2014 Douglas Christopher Wilson
   * MIT Licensed
   */
  function r(e) {
    return decodeURIComponent(escape(e));
  }
  function t(e, r) {
    var t = splitPath(e)[2];
    return r && t.substr(-1 * r.length) === r && (t = t.substr(0, t.length - r.length)), t;
  }
  var n = /[\x00-\x20"'\(\)*,\/:;<=>?@\[\\\]\{\}\x7f]/g,
    a = /%[0-9A-Fa-f]{2}/,
    o = /%([0-9A-Fa-f]{2})/g,
    i = /[^\x20-\x7e\xa0-\xff]/g,
    f = /\\([\u0000-\u007f])/g,
    s = /([\\"])/g,
    p =
      /; *([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *= *("(?:[ !\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) */g,
    u = /^[\x20-\x7e\x80-\xff]+$/,
    c = /^[!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+$/,
    l =
      /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+\-\.^_`|~])+)$/,
    g = /^([!#$%&'\*\+\-\.0-9A-Z\^_`a-z\|~]+) *(?:$|;)/;
  function w(e, r) {
    var t = r || {};
    return d(new $(t.type || "attachment", h(e, t.fallback)));
  }
  function h(e, r) {
    if (void 0 !== e) {
      var n = {};
      if ("string" != typeof e) throw new TypeError("filename must be a string");
      if ((void 0 === r && (r = !0), "string" != typeof r && "boolean" != typeof r))
        throw new TypeError("fallback must be a string or boolean");
      if ("string" == typeof r && i.test(r)) throw new TypeError("fallback must be ISO-8859-1 string");
      var o = t(e),
        f = u.test(o),
        s = "string" != typeof r ? r && y(o) : t(r),
        p = "string" == typeof s && s !== o;
      return (p || !f || a.test(o)) && (n["filename*"] = o), (f || p) && (n.filename = p ? s : o), n;
    }
  }
  function d(e) {
    var r = e.parameters,
      t = e.type;
    if (!t || "string" != typeof t || !c.test(t)) throw new TypeError("invalid type");
    var n = String(t).toLowerCase();
    if (r && "object" == typeof r)
      for (var a, o = Object.keys(r).sort(), i = 0; i < o.length; i++) {
        var f = "*" === (a = o[i]).substr(-1) ? T(r[a]) : A(r[a]);
        n += "; " + a + "=" + f;
      }
    return n;
  }
  function x(e) {
    var t = l.exec(e);
    if (!t) throw new TypeError("invalid extended field value");
    var n,
      a = t[1].toLowerCase(),
      i = t[2].replace(o, m);
    switch (a) {
      case "iso-8859-1":
        n = y(i);
        break;
      case "utf-8":
        n = r(i);
        break;
      default:
        throw new TypeError("unsupported charset in extended field");
    }
    return n;
  }
  function y(e) {
    return String(e).replace(i, "?");
  }
  function v(e) {
    if (!e || "string" != typeof e) throw new TypeError("argument string is required");
    var r = g.exec(e);
    if (!r) throw new TypeError("invalid type format");
    var t,
      n,
      a = r[0].length,
      o = r[1].toLowerCase(),
      i = [],
      s = {};
    for (a = p.lastIndex = ";" === r[0].substr(-1) ? a - 1 : a; (r = p.exec(e)); ) {
      if (r.index !== a) throw new TypeError("invalid parameter format");
      if (((a += r[0].length), (t = r[1].toLowerCase()), (n = r[2]), -1 !== i.indexOf(t)))
        throw new TypeError("invalid duplicate parameter");
      i.push(t),
        t.indexOf("*") + 1 !== t.length
          ? "string" != typeof s[t] && ('"' === n[0] && (n = n.substr(1, n.length - 2).replace(f, "$1")), (s[t] = n))
          : ((t = t.slice(0, -1)), (n = x(n)), (s[t] = n));
    }
    if (-1 !== a && a !== e.length) throw new TypeError("invalid parameter format");
    return new $(o, s);
  }
  function m(e, r) {
    return String.fromCharCode(parseInt(r, 16));
  }
  function b(e) {
    var r = String(e).charCodeAt(0).toString(16).toUpperCase();
    return 1 === r.length ? "%0" + r : "%" + r;
  }
  function A(e) {
    return '"' + String(e).replace(s, "\\$1") + '"';
  }
  function T(e) {
    var r = String(e);
    return "UTF-8''" + encodeURIComponent(r).replace(n, b);
  }
  function $(e, r) {
    (this.type = e), (this.parameters = r);
  }
  (e.contentDisposition = w), (e.contentDisposition.parse = v);
})(window);
