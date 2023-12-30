!(function (l) {
  var t,
    e = (function (t) {
      return Boolean(
        "undefined" != typeof reduxApp &&
          "function" == typeof reduxApp.getState &&
          reduxApp.getState().settings.features &&
          reduxApp.getState().settings.features[t]
      );
    })("password_strength_hardening"),
    n = {},
    a,
    g =
      (e &&
        (top.zxcvbnts && (zxcvbnts = top.zxcvbnts),
        (function () {
          zxcvbnts.addToDictionary(n, zxcvbnts["language-common"].dictionary),
            zxcvbnts.addToDictionary(n, zxcvbnts["language-en"].dictionary),
            zxcvbnts.addToDictionary(n, zxcvbnts["language-de"].dictionary),
            zxcvbnts.addToDictionary(n, zxcvbnts["language-es-es"].dictionary),
            zxcvbnts.addToDictionary(n, zxcvbnts["language-fr"].dictionary),
            zxcvbnts.addToDictionary(n, zxcvbnts["language-it"].dictionary),
            zxcvbnts.addToDictionary(n, zxcvbnts["language-nl-be"].dictionary),
            zxcvbnts.addToDictionary(n, zxcvbnts["language-pt-br"].dictionary);
          var t = {
            useLevenshteinDistance: !1,
            translations: zxcvbnts["language-en"].translations,
            graphs: zxcvbnts["language-common"].adjacencyGraphs,
            dictionary: n
          };
          zxcvbnts.core.zxcvbnOptions.setOptions(t);
        })()),
      "poor"),
    v = "bad",
    p = "good",
    u = "best",
    s = function (t, n) {
      var t = t ? t.substring(0, 50) : "",
        n = n ? n.substring(0, 50).toLowerCase() : "",
        e;
      return 25 * zxcvbn(t, [n, "lastpass", "lastpass.com"]).score;
    },
    r = function (t, n) {
      return zxcvbnts.calculatePasswordStrength(t, n);
    },
    b = function (t, n) {
      return (e ? r : s)(t, n);
    },
    c = function (t, n, e, a, s) {
      var e = b(t, e),
        r,
        i;
      if (
        (25 == e
          ? ((r = g), (i = Strings.translateString("Invalid")))
          : 50 == e
          ? ((r = v), (i = Strings.translateString("Weak")))
          : 75 == e
          ? ((r = p), (i = Strings.translateString("Good")))
          : 100 == e && ((r = u), (i = Strings.translateString("Super!"))),
        s)
      ) {
        n.attr("class", "score-segment").addClass(r), n.css("width", "20%");
        for (var s = n.parent(), o = (s.empty(), s.append(n), Math.floor(e / 25)), c = 1; c < 4; c++) {
          var d = n.clone();
          o <= c && d.removeClass(r), d.insertAfter("div.score-segment:last");
        }
      } else n.attr("class", r), n.css("width", e + "%");
      a &&
        (t
          ? (l(a.parent()).css("opacity", 1), a.text(i), a.removeClass("strength"))
          : (l(a.parent()).css("opacity", 0.5),
            a.text(Strings.translateString("Strength")),
            n.attr("class", "strength"),
            n.css("width", "100%")));
    };
  (jQuery.fn.LP_addGeneratePasswordMeter = function (t) {
    var n, e, a, n;
    this &&
      0 < this.length &&
      ((n = l(LPTools.createElement("div", "meter-gen-pass"))),
      (e = l(LPTools.createElement("div"))),
      this.parent().append(n.append(e)),
      (a = t || !1),
      this.on(
        "input",
        (n = function () {
          c(l(this).val(), e, "somestringthathopefullydoesnotmatchpassword", null, a);
        })
      ).on("change", n));
  }),
    (jQuery.fn.LP_addPasswordMeter = function (n, t, e) {
      var a = LPTools.createElement("div", "meterContainer"),
        s = LPTools.createElement("div", "meter"),
        r = LPTools.createElement("div"),
        i = null,
        o =
          (s.appendChild(r),
          a.appendChild(s),
          (s = l(s)),
          (r = l(r)),
          t &&
            ((i = LPTools.createElement("label", "meterLabel", "Strength")),
            a.appendChild(i),
            (i = l(i)),
            s.css("width", "88%"),
            i.css("width", "12%")),
          this.parent().append(a),
          e || !1);
      this.LP_input("passwordMeter", function (t) {
        c(t, r, n ? n.val() : "", i, o);
      });
    });
})(jQuery),
  (function (g) {
    var v = "poor",
      p = "bad",
      u = "good",
      b = "best",
      a = "undefined" != typeof bg && bg.get("g_password_strength_hardening_enabled"),
      n = function () {
        var t = {};
        return (
          zxcvbnts.addToDictionary(t, zxcvbnts["language-common"].dictionary),
          zxcvbnts.addToDictionary(t, zxcvbnts["language-en"].dictionary),
          zxcvbnts.addToDictionary(t, zxcvbnts["language-de"].dictionary),
          zxcvbnts.addToDictionary(t, zxcvbnts["language-es-es"].dictionary),
          zxcvbnts.addToDictionary(t, zxcvbnts["language-fr"].dictionary),
          zxcvbnts.addToDictionary(t, zxcvbnts["language-it"].dictionary),
          zxcvbnts.addToDictionary(t, zxcvbnts["language-nl-be"].dictionary),
          zxcvbnts.addToDictionary(t, zxcvbnts["language-pt-br"].dictionary),
          t
        );
      },
      r = function () {
        var t = {},
          t =
            zxcvbnts["language-common"] && zxcvbnts["language-en"]
              ? {
                  useLevenshteinDistance: !1,
                  translations: zxcvbnts["language-en"].translations,
                  graphs: zxcvbnts["language-common"].adjacencyGraphs,
                  dictionary: n()
                }
              : { useLevenshteinDistance: !1 };
        zxcvbnts.core.zxcvbnOptions.setOptions(t);
      },
      h =
        (a && r(),
        function (t, n, e) {
          var e, t;
          return e || a
            ? 25 * zxcvbnts.calculatePasswordStrength(t, n)
            : ((e = t ? t.substring(0, 50) : ""),
              (t = n ? n.substring(0, 50).toLowerCase() : ""),
              25 * zxcvbn(e, [t, "lastpass", "lastpass.com"]).score);
        }),
      c = function (t, n, e, a, s, r) {
        var e = h(t, e, r),
          i,
          o;
        if (
          (25 == e
            ? ((i = v), (o = Strings.translateString("Invalid")))
            : 50 == e
            ? ((i = p), (o = Strings.translateString("Weak")))
            : 75 == e
            ? ((i = u), (o = Strings.translateString("Good")))
            : 100 == e && ((i = b), (o = Strings.translateString("Super!"))),
          s)
        ) {
          n.attr("class", "score-segment").addClass(i), n.css("width", "20%");
          for (var r = n.parent(), c = (r.empty(), r.append(n), Math.floor(e / 25)), d = 1; d < 4; d++) {
            var l = n.clone();
            c <= d && l.removeClass(i), l.insertAfter("div.score-segment:last");
          }
        } else n.attr("class", i), n.css("width", e + "%");
        a &&
          (t
            ? (g(a.parent()).css("opacity", 1), a.text(o), a.removeClass("strength"))
            : (g(a.parent()).css("opacity", 0.5),
              a.text(Strings.translateString("Strength")),
              n.attr("class", "strength"),
              n.css("width", "100%")));
      };
    (jQuery.fn.LP_addGeneratePasswordMeter = function (t, n) {
      var e, a, s, e;
      n && r(),
        this &&
          0 < this.length &&
          ((e = g(LPTools.createElement("div", "meter-gen-pass"))),
          (a = g(LPTools.createElement("div"))),
          this.parent().append(e.append(a)),
          (s = t || !1),
          this.on(
            "input",
            (e = function () {
              c(g(this).val(), a, "somestringthathopefullydoesnotmatchpassword", null, s, n);
            })
          ).on("change", e));
    }),
      (jQuery.fn.LP_addPasswordMeter = function (n, t, e) {
        var a = LPTools.createElement("div", "meterContainer"),
          s = LPTools.createElement("div", "meter"),
          r = LPTools.createElement("div"),
          i = null,
          o =
            (s.appendChild(r),
            a.appendChild(s),
            (s = g(s)),
            (r = g(r)),
            t &&
              ((i = LPTools.createElement("label", "meterLabel", "Strength")),
              a.appendChild(i),
              (i = g(i)),
              s.css("width", "88%"),
              i.css("width", "12%")),
            this.parent().append(a),
            e || !1);
        this.LP_input("passwordMeter", function (t) {
          c(t, r, n ? n.val() : "", i, o);
        });
      });
  })(jQuery);
