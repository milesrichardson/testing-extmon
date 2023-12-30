(() => {
  function e(e, t, n, r) {
    Object.defineProperty(e, t, { get: n, set: r, enumerable: !0, configurable: !0 });
  }
  function t(e) {
    return e && e.__esModule ? e.default : e;
  }
  var n =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    r = {},
    l = {},
    o = n.parcelRequire60cc;
  null == o &&
    (((o = function (e) {
      if (e in r) return r[e].exports;
      if (e in l) {
        var t = l[e];
        delete l[e];
        var n = { id: e, exports: {} };
        return (r[e] = n), t.call(n.exports, n, n.exports), n.exports;
      }
      var o = new Error("Cannot find module '" + e + "'");
      throw ((o.code = "MODULE_NOT_FOUND"), o);
    }).register = function (e, t) {
      l[e] = t;
    }),
    (n.parcelRequire60cc = o)),
    o.register("fquJx", function (t, n) {
      var r, l;
      e(
        t.exports,
        "register",
        () => r,
        (e) => (r = e)
      ),
        e(
          t.exports,
          "resolve",
          () => l,
          (e) => (l = e)
        );
      var o = {};
      (r = function (e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) o[t[n]] = e[t[n]];
      }),
        (l = function (e) {
          var t = o[e];
          if (null == t) throw new Error("Could not resolve bundle with id " + e);
          return t;
        });
    }),
    o.register("8r5Kp", function (t, n) {
      var r;
      e(
        t.exports,
        "getBundleURL",
        () => r,
        (e) => (r = e)
      );
      var l = {};
      function o(e) {
        return ("" + e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
      }
      r = function (e) {
        var t = l[e];
        return (
          t ||
            ((t = (function () {
              try {
                throw new Error();
              } catch (t) {
                var e = ("" + t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
                if (e) return o(e[2]);
              }
              return "/";
            })()),
            (l[e] = t)),
          t
        );
      };
    }),
    o("fquJx").register(
      JSON.parse(
        '{"8Op5O":"welcome.a674b990.js","3tkat":"icon-extensions-pin-example.d2caa1ed.png","4J19A":"icon-extensions-pin-example@2x.68b8618d.png","2Cob3":"icon-extensions-puzzle-piece.bf2b8f2a.png","12fCY":"icon-extensions-puzzle-piece@2x.727cf138.png","589MV":"icon-999.d93044ad.png","ayiND":"editor.0a5332d6.css","grRBy":"welcome.052319f9.css","7OJsf":"welcome.2ac67d4d.js","1TQHo":"welcome.4c610233.js","jmyoH":"welcome.0f0b38c0.js"}'
      )
    );
  var i,
    a = o("7b0kr"),
    c = o("iiDPj"),
    s = ((a = o("7b0kr")), o("3utT5")),
    u = o("6wFiT");
  i = o("8r5Kp").getBundleURL("8Op5O") + o("fquJx").resolve("3tkat");
  var p;
  p = o("8r5Kp").getBundleURL("8Op5O") + o("fquJx").resolve("4J19A");
  var f;
  f = o("8r5Kp").getBundleURL("8Op5O") + o("fquJx").resolve("2Cob3");
  var m;
  m = o("8r5Kp").getBundleURL("8Op5O") + o("fquJx").resolve("12fCY");
  var d;
  d = o("8r5Kp").getBundleURL("8Op5O") + o("fquJx").resolve("589MV");
  var g = o("8DwkQ"),
    E = o("5Xemj");
  const x = () =>
    t(a).createElement(
      t(a).Fragment,
      null,
      t(a).createElement(
        "div",
        { className: "welcome", style: { zIndex: s.ZINDEX_FIREWORKS + 1 } },
        t(a).createElement(
          "div",
          { className: "welcome-inner" },
          t(a).createElement("h1", null, "🎉 ", (0, E.tr)("Welcome to GoFullPage")),
          t(a).createElement(
            "p",
            null,
            (0, E.tr)(
              "Take a screenshot of an entire web page in just one click of the extension’s icon in the top right of $browser$",
              null,
              [g.CUR_BROWSER_INFO.name],
              { browser: { content: "$1", example: "Chrome" } }
            ),
            " ",
            t(a).createElement("img", { src: t(d), alt: "extension icon", style: { verticalAlign: "top" } })
          ),
          g.IS_CHROME &&
            t(a).createElement(
              t(a).Fragment,
              null,
              t(a).createElement(
                "p",
                null,
                (0, E.tr)("If you don’t see the camera icon, then click the “Extensions” puzzle icon in the top right of your browser:"),
                " ",
                t(a).createElement("img", {
                  src: (0, u.pickDensity)(t(f), t(m)),
                  alt: "extensions puzzle icon",
                  style: { verticalAlign: "top", width: "20px", height: "20px" }
                })
              ),
              t(a).createElement(
                "p",
                null,
                (0, E.tr)("And click the pin next to “GoFullPage” so it turns blue:"),
                " ",
                t(a).createElement("img", {
                  src: (0, u.pickDensity)(t(i), t(p)),
                  alt: "pin extension",
                  style: { verticalAlign: "top", width: "50px", height: "20px" }
                })
              )
            ),
          t(a).createElement("p", null, (0, E.tr)("For additional information, you can check out:")),
          t(a).createElement(
            "ul",
            null,
            t(a).createElement("li", null, t(a).createElement("a", { href: "https://gofullpage.com/demos" }, (0, E.tr)("Demo videos"))),
            t(a).createElement(
              "li",
              null,
              t(a).createElement("a", { href: "https://gofullpage.com/faq" }, (0, E.tr)("Frequently asked questions"))
            )
          )
        )
      ),
      t(a).createElement(s.default, null)
    );
  (x.propTypes = {}), (x.displayName = "Welcome");
  var h = x;
  (0, c.render)(t(a).createElement(h, null), document.getElementById("root"));
})();
//# sourceMappingURL=welcome.a674b990.js.map
