"use strict";
(function (m, g) {
  "function" === typeof define && define.amd ? define([], g) : "undefined" !== typeof exports ? g() : (g(), (m.FileSaver = {}));
})(this, function () {
  function m(a, b) {
    "undefined" === typeof b
      ? (b = { autoBom: !1 })
      : "object" !== typeof b && (console.warn("Deprecated: Expected third argument to be a object"), (b = { autoBom: !b }));
    return b.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)
      ? new Blob([String.fromCharCode(65279), a], { type: a.type })
      : a;
  }
  function g(a, b, e) {
    var c = new XMLHttpRequest();
    c.open("GET", a);
    c.responseType = "blob";
    c.onload = function () {
      k(c.response, b, e);
    };
    c.onerror = function () {
      console.error("could not download file");
    };
    c.send();
  }
  function q(a) {
    var b = new XMLHttpRequest();
    b.open("HEAD", a, !1);
    try {
      b.send();
    } catch (e) {}
    return 200 <= b.status && 299 >= b.status;
  }
  function l(a) {
    try {
      a.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      var b = document.createEvent("MouseEvents");
      b.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null);
      a.dispatchEvent(b);
    }
  }
  var f =
      "object" === typeof window && window.window === window
        ? window
        : "object" === typeof self && self.self === self
        ? self
        : "object" === typeof global && global.global === global
        ? global
        : void 0,
    k =
      f.saveAs ||
      ("object" !== typeof window || window !== f
        ? function () {}
        : "download" in HTMLAnchorElement.prototype
        ? function (a, b, e) {
            var c = f.URL || f.webkitURL,
              d = document.createElement("a");
            b = b || a.name || "download";
            d.download = b;
            d.rel = "noopener";
            "string" === typeof a
              ? ((d.href = a), d.origin !== location.origin ? (q(d.href) ? g(a, b, e) : l(d, (d.target = "_blank"))) : l(d))
              : ((d.href = c.createObjectURL(a)),
                setTimeout(function () {
                  c.revokeObjectURL(d.href);
                }, 4e4),
                setTimeout(function () {
                  l(d);
                }, 0));
          }
        : "msSaveOrOpenBlob" in navigator
        ? function (a, b, e) {
            b = b || a.name || "download";
            if ("string" === typeof a)
              if (q(a)) g(a, b, e);
              else {
                var c = document.createElement("a");
                c.href = a;
                c.target = "_blank";
                setTimeout(function () {
                  l(c);
                });
              }
            else navigator.msSaveOrOpenBlob(m(a, e), b);
          }
        : function (a, b, e, c) {
            if ((c = c || open("", "_blank"))) c.document.title = c.document.body.innerText = "downloading...";
            if ("string" === typeof a) return g(a, b, e);
            b = "application/octet-stream" === a.type;
            e = /constructor/i.test(f.HTMLElement) || f.safari;
            var d = /CriOS\/[\d]+/.test(navigator.userAgent);
            if ((d || (b && e)) && "undefined" !== typeof FileReader) {
              var n = new FileReader();
              n.onloadend = function () {
                var h = n.result;
                h = d ? h : h.replace(/^data:[^;]*;/, "data:attachment/file;");
                c ? (c.location.href = h) : (window.location = h);
                c = null;
              };
              n.readAsDataURL(a);
            } else {
              var r = f.URL || f.webkitURL,
                p = r.createObjectURL(a);
              c ? (c.location = p) : (window.location.href = p);
              c = null;
              setTimeout(function () {
                r.revokeObjectURL(p);
              }, 4e4);
            }
          });
  f.saveAs = k.saveAs = k;
  "undefined" !== typeof module && (module.exports = k);
});
