(window.equatioChromeJsonp = window.equatioChromeJsonp || []).push([
  [30],
  {
    417: function (_, e, n) {
      "use strict";
      n.r(e),
        ((t = S = S || {}).Function = "function"),
        (t.Symbol = "symbol"),
        (t.EscapedCharacter = "escapedCharacter"),
        (t.Skip = "skip"),
        (t.AddArgumentsAsContent = "addArgumentsAsContent"),
        (t.Text = "text");
      var S,
        T = new Map([
          [
            "\\frac",
            {
              type: S.Function,
              args: 2,
              isSupported: !0
            }
          ],
          [
            "\\sqrt",
            {
              type: S.Function,
              args: 1,
              isSupported: !0,
              tryOnFail: "\\rootof"
            }
          ],
          [
            "\\rootof",
            {
              type: S.Function,
              args: 2,
              isSupported: !0
            }
          ],
          [
            "\\subsuperscript",
            {
              type: S.Function,
              args: 3,
              includePreviousSiblingAsArgument: !0,
              isSupported: !1
            }
          ],
          [
            "\\subscript",
            {
              type: S.Function,
              args: 2,
              includePreviousSiblingAsArgument: !0,
              isSupported: !0
            }
          ],
          [
            "_",
            {
              type: S.Function,
              code: "\\subscript",
              args: 2,
              includePreviousSiblingAsArgument: !0,
              isSupported: !0
            }
          ],
          [
            "\\superscript",
            {
              type: S.Function,
              args: 2,
              includePreviousSiblingAsArgument: !0,
              isSupported: !0
            }
          ],
          [
            "^",
            {
              type: S.Function,
              code: "\\superscript",
              args: 2,
              includePreviousSiblingAsArgument: !0,
              isSupported: !0
            }
          ],
          [
            "\\overline",
            {
              type: S.Function,
              args: 1,
              isSupported: !0
            }
          ],
          [
            "\\widehat",
            {
              type: S.Function,
              args: 1,
              isSupported: !0
            }
          ],
          [
            "\\left",
            {
              type: S.Skip
            }
          ],
          [
            "\\right",
            {
              type: S.Skip
            }
          ],
          [
            "\\text",
            {
              type: S.AddArgumentsAsContent
            }
          ],
          [
            "\\color",
            {
              type: S.AddArgumentsAsContent,
              indexes: [1]
            }
          ],
          [
            "\\textcolor",
            {
              type: S.AddArgumentsAsContent,
              indexes: [1]
            }
          ],
          [
            "\\arccsch",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arcsech",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arccoth",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arctanh",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arcsinh",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arccosh",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arccsc",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arcsec",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arccot",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arcsin",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arccos",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\arctan",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\sinh",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\cosh",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\tanh",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\sin",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\cos",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\tan",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\coth",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\sech",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\csch",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\cot",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\sec",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\csc",
            {
              type: S.Function,
              args: 1,
              includeNextAsArgumentIfNeeded: !0,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\bigcapab",
            {
              type: S.Function,
              args: -1,
              isSupported: !1
            }
          ],
          [
            "\\bigcupab",
            {
              type: S.Function,
              args: -1,
              isSupported: !1
            }
          ],
          [
            "\\prodab",
            {
              type: S.Function,
              args: -1,
              isSupported: !1
            }
          ],
          [
            "\\coprodab",
            {
              type: S.Function,
              args: -1,
              isSupported: !1
            }
          ],
          [
            "\\rbracelr",
            {
              type: S.Function,
              args: 1,
              isSupported: !0
            }
          ],
          [
            "\\sbracelr",
            {
              type: S.Function,
              args: 1,
              isSupported: !0
            }
          ],
          [
            "\\bracelr",
            {
              type: S.Function,
              args: 1,
              isSupported: !0
            }
          ],
          [
            "\\abs",
            {
              type: S.Function,
              args: 1,
              isSupported: !0,
              braces: ["\\left(", "\\right)"]
            }
          ],
          [
            "\\intab",
            {
              type: S.Function,
              args: -1,
              isSupported: !1
            }
          ],
          [
            "\\ointab",
            {
              type: S.Function,
              args: -1,
              isSupported: !1
            }
          ],
          [
            "\\sumab",
            {
              type: S.Function,
              args: -1,
              isSupported: !1
            }
          ],
          [
            "\\limab",
            {
              type: S.Function,
              args: -1,
              isSupported: !1
            }
          ],
          [
            "\\alpha",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\beta",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\gamma",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\delta",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\epsilon",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\varepsilon",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\zeta",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\eta",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\theta",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\vartheta",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\iota",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\kappa",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\lambda",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\mu",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\nu",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\xi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\pi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\varpi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\rho",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\varrho",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\sigma",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\varsigma",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\tau",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\upsilon",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\phi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\varphi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\chi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\psi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\omega",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Gamma",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Delta",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Theta",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Lambda",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Xi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Pi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Sigma",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Upsilon",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Phi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Psi",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\Omega",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\log",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\times",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\div",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\cdot",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\pm",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\mp",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\ast",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\star",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\circ",
            {
              type: S.Text,
              text: "\xb0"
            }
          ],
          [
            "\\bullet",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\oplus",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\ominus",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\oslash",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\otimes",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\odot",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\dagger",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\ddagger",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\vee",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\wedge",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\cap",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\cup",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\aleph",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\Re",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\Im",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\top",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\bot",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\infty",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\partial",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\forall",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\exists",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\neg",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\triangle",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\diamond",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\leq",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\geq",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\prec",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\succ",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\preceq",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\succeq",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\ll",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\gg",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\equiv",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\sim",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\simeq",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\asymp",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\approx",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\ne",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\subset",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\supset",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\subseteq",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\supseteq",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\in",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\ni",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\notin",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\leftarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\rightarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\leftrightarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\Leftarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\Rightarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\Leftrightarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\uparrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\downarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\updownarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\Uparrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\Downarrow",
            {
              type: S.Symbol,
              isSupported: !1
            }
          ],
          [
            "\\Updownarrow",
            {
              type: S.Symbol,
              isSupported: !0
            }
          ],
          [
            "\\",
            {
              type: S.Skip
            }
          ],
          [
            "\\ ",
            {
              type: S.Skip
            }
          ],
          [
            "\\&",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\%",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\$",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\#",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\_",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\{",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\}",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\~",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\^",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ],
          [
            "\\\\",
            {
              type: S.EscapedCharacter,
              isSupported: !0
            }
          ]
        ]);
      function U(e) {
        return T.get(e) || null;
      }
      q = function (e, n) {
        return (q =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array
            ? function (e, n) {
                e.__proto__ = n;
              }
            : function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              }))(e, n);
      };
      (function (e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        function t() {
          this.constructor = e;
        }
        q(e, n), (e.prototype = null === n ? Object.create(n) : ((t.prototype = n.prototype), new t()));
      })(D, (R = Error));
      var q,
        R,
        k = D;
      function D(e, n) {
        n = R.call(this, n) || this;
        return (n.type = e), n;
      }
      var M,
        I = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var r, o = 0, i = n.length; o < i; o++) (!r && o in n) || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
          return e.concat(r || Array.prototype.slice.call(n));
        };
      function V(e, n) {
        return n ? "".concat(e).concat(n.start.line, ":").concat(n.start.column) : "";
      }
      function B(e) {
        for (
          var a,
            u = [],
            A = [],
            x = [e],
            n = function () {
              if (a === M.PopFromStack) return A.pop(), "continue";
              if (Array.isArray(a)) return x.unshift.apply(x, a), "continue";
              0 === A.length && (A.push((e = [])), u.push(e)),
                "string" === a.type &&
                  (e = a.content.match(/([A-Za-z0-9])(\^|_)([A-Za-z0-9])/)) &&
                  ((n = a.content.substring(0, e.index || 0)),
                  0 < (t = a.content.substring((e.index || 0) + e[0].length)).length &&
                    x.unshift({
                      type: "string",
                      content: t
                    }),
                  x.unshift({
                    type: "macro",
                    escapeToken: "\\",
                    content: "^" === e[2] ? "superscript" : "subscript",
                    args: [
                      {
                        type: "argument",
                        openMark: "{",
                        closeMark: "}",
                        content: [
                          {
                            type: "string",
                            content: e[3]
                          }
                        ]
                      }
                    ]
                  }),
                  x.unshift({
                    type: "string",
                    content: e[1]
                  }),
                  (a.content = n));
              var e,
                n,
                t,
                y = A[A.length - 1];
              if ("string" === a.type)
                0 < a.content.length &&
                  (0 < y.length && "string" == typeof y[y.length - 1] ? (y[y.length - 1] += a.content) : y.push(a.content));
              else if ("macro" === a.type) {
                var c = function (e) {
                    for (var n = e.slice(), t = 0; t < n.length; t++) {
                      var r = n[t];
                      if (r !== M.PopFromStack) {
                        if (!Array.isArray(r) && "macro" === r.type) {
                          if ("left" === r.content) continue;
                          if ("right" === r.content) continue;
                        }
                        Array.isArray(r) ||
                          "string" !== r.type ||
                          ("(" === r.content[0] &&
                            ((o = 0 <= t - 1 ? n[t - 1] : null) &&
                              !Array.isArray(o) &&
                              "macro" === o.type &&
                              "left" === o.content &&
                              (n.splice(t - 1, 1), t--),
                            (n[t] = {
                              type: "string",
                              content: r.content.substring(1)
                            })));
                        break;
                      }
                    }
                    for (t = n.length - 1; 0 <= t; t--) {
                      var o,
                        r = n[t];
                      if (r !== M.PopFromStack) {
                        if (!Array.isArray(r) && "macro" === r.type) {
                          if ("left" === r.content) continue;
                          if ("right" === r.content) continue;
                        }
                        Array.isArray(r) ||
                          "string" !== r.type ||
                          ((o = 0 <= t - 1 ? n[t - 1] : null) &&
                            !Array.isArray(o) &&
                            "macro" === o.type &&
                            "right" === o.content &&
                            (n.splice(t - 1, 1), t--),
                          (n[t] = {
                            type: "string",
                            content: r.content.replace(/\)$/g, "")
                          }));
                        break;
                      }
                    }
                    return n;
                  },
                  b = function (e) {
                    void 0 === e && (e = 0);
                    for (var n = []; ; ) {
                      var t = x.shift();
                      if (void 0 === t) break;
                      if ((n.push(t), t !== M.PopFromStack)) {
                        if (Array.isArray(t) || "macro" !== t.type) {
                          if (!Array.isArray(t) && "string" === t.type) {
                            for (var r = "", o = 0, i = t.content.split(""); o < i.length; o++) {
                              var a = i[o];
                              if (((r += a), "(" === a)) {
                                e++;
                                break;
                              }
                              if (")" === a) {
                                e--;
                                break;
                              }
                            }
                            var u = t.content.substring(r.length);
                            0 < u.length &&
                              x.unshift({
                                type: "string",
                                content: u
                              }),
                              (n[n.length - 1] = {
                                type: "string",
                                content: r
                              });
                          }
                        } else {
                          if ("left" === t.content) continue;
                          if ("right" === t.content) continue;
                        }
                        if (0 === e) break;
                      }
                    }
                    return c(n);
                  },
                  v = function (n, e) {
                    var t = U(e);
                    if (null === t) throw ((r = n.position), new k("UNKNOWN_MACRO", "Unknown macro: ".concat(e).concat(V(" at ", r))));
                    if (("isSupported" in t) && !t.isSupported)
                      throw ((r = n.position), new k("UNSUPPORTED_MACRO", "Unsupported macro: ".concat(e).concat(V(" at ", r))));
                    try {
                      if (t.type === S.Function) {
                        if (!(("args" in n) && Array.isArray(n.args))) {
                          if (!t.includeNextAsArgumentIfNeeded) throw new k("NO_ARGUMENTS", "Function ".concat(e, " requires arguments!"));
                          n.args = [];
                        }
                        (d = n.args.slice()).length - 1 === t.args &&
                          0 === d[0].content.length &&
                          "" === d[0].openMark &&
                          "" === d[0].closeMark &&
                          d.shift();
                        var r,
                          o = d.length + (t.includePreviousSiblingAsArgument ? 1 : 0);
                        if (o !== t.args && (!t.includeNextAsArgumentIfNeeded || o + 1 !== t.args))
                          throw (
                            ((r = n.position),
                            new k(
                              "INVALID_ARGUMENT_AMOUNT",
                              "Incorrect amount of arguments for function "
                                .concat(e, " found ")
                                .concat(o, " arguments but requires ")
                                .concat(t.args, " arguments!")
                                .concat(V(" at ", r))
                            ))
                          );
                        var i = {
                          isFunction: !0,
                          code: t.code || e,
                          arguments: []
                        };
                        t.includeNextAsArgumentIfNeeded && o !== t.args
                          ? ((p = b()),
                            (f = []),
                            i.arguments.unshift(f),
                            A.push(f),
                            x.unshift.apply(x, I(I([], p, !1), [M.PopFromStack], !1)))
                          : t.includeNextAsArgumentIfNeeded &&
                            1 === o &&
                            1 === d.length &&
                            "string" === d[0].content[0].type &&
                            "(" === d[0].content[0].content &&
                            ((p = b(1)),
                            (f = []),
                            i.arguments.unshift(f),
                            A.push(f),
                            p.unshift(d[0]),
                            x.unshift.apply(x, I(I([], p, !1), [M.PopFromStack], !1)));
                        for (var a, u, c, s = 0, l = d.reverse(); s < l.length; s++) {
                          var p = l[s],
                            f = [];
                          i.arguments.unshift(f), A.push(f), x.unshift.apply(x, I(I([], p.content, !1), [M.PopFromStack], !1));
                        }
                        t.includePreviousSiblingAsArgument &&
                          ("string" == typeof (a = void 0 === (a = y.pop()) ? "" : a) &&
                            (u = a.match(/([\u00C0-\u1FFF\u2C00-\uD7FF\w]+|[^\u00C0-\u1FFF\u2C00-\uD7FF\w]+)$/)) &&
                            "number" == typeof u.index &&
                            (0 < (c = a.substring(0, u.index)).length && y.push(c), (a = a.substring(u.index))),
                          i.arguments.unshift([a])),
                          y.push(i);
                      } else if (t.type === S.Symbol)
                        y.push({
                          isSymbol: !0,
                          code: t.code || e
                        });
                      else if (t.type === S.EscapedCharacter)
                        0 < y.length && "string" == typeof y[y.length - 1] ? (y[y.length - 1] += e.substring(1)) : y.push(e.substring(1));
                      else if (t.type === S.AddArgumentsAsContent) {
                        if (("args" in n) && Array.isArray(n.args))
                          for (
                            var g = t.indexes,
                              d = n.args
                                .slice()
                                .filter(function (e, n) {
                                  return !Array.isArray(g) || g.includes(n);
                                })
                                .reverse(),
                              h = 0,
                              m = d;
                            h < m.length;
                            h++
                          ) {
                            p = m[h];
                            x.unshift(p);
                          }
                      } else
                        t.type !== S.Skip &&
                          t.type === S.Text &&
                          x.unshift({
                            type: "string",
                            content: t.text
                          });
                    } catch (e) {
                      if (!(("tryOnFail" in t) && t.tryOnFail)) throw e;
                      v(n, t.tryOnFail);
                    }
                  };
                v(a, "".concat(void 0 !== a.escapeToken ? a.escapeToken : "\\").concat(a.content));
              } else if ("environment" === a.type && "array" === a.env && 1 === A.length) {
                x.unshift(M.PopFromStack);
                for (var r = 0, o = a.content.slice().reverse(); r < o.length; r++) {
                  var i = o[r];
                  "macro" === i.type && "\\" === i.content
                    ? x.unshift(M.PopFromStack)
                    : "string" === i.type && "&" === i.content
                    ? x.unshift(M.PopFromStack)
                    : x.unshift(i);
                }
                x.unshift(M.PopFromStack);
              } else ("content" in a) && Array.isArray(a.content) && x.unshift.apply(x, a.content);
            };
          void 0 !== (a = x.shift());

        )
          n();
        return u.filter(function (e) {
          return 0 < e.length;
        });
      }
      (M = M || {}), (M[(M.PopFromStack = 0)] = "PopFromStack");
      var i = Symbol("linebreak"),
        a = "\\";
      function u(e) {
        if ("string" == typeof e) return [e];
        if (Array.isArray(e)) return [].concat(...e.map((e) => u(e)));
        let n, t;
        switch (e.type) {
          case "root":
            return u(e.content);

          case "argument":
            return [e.openMark, ...u(e.content), e.closeMark];

          case "comment":
            var r = e.suffixParbreak ? "" : i,
              o = "";
            return e.sameline && e.leadingWhitespace && (o = " "), e.sameline ? [o, "%", ...u(e.content), r] : [i, "%", ...u(e.content), r];

          case "environment":
          case "mathenv":
          case "verbatim":
            (o = u(e.env)), (r = [a + "begin{", ...o, "}"]), (o = [a + "end{", ...o, "}"]);
            return (n = null == e.args ? [] : u(e.args)), [...r, ...n, ...u(e.content), ...o];

          case "displaymath":
            return [a + "[", ...u(e.content), a + "]"];

          case "group":
            return ["{", ...u(e.content), "}"];

          case "inlinemath":
            return ["$", ...u(e.content), "$"];

          case "macro":
            return (n = null == e.args ? [] : u(e.args)), [(t = null == e.escapeToken ? a : e.escapeToken), ...u(e.content), ...n];

          case "parbreak":
            return [i, i];

          case "string":
            return [e.content];

          case "verb":
            return [a, e.env, e.escape, ...u(e.content), e.escape];

          case "whitespace":
            return [" "];

          default:
            return ["" + e];
        }
      }
      function c(e, n) {
        const t = null != n && n.asArray,
          r = u(e);
        return t ? r : r.map((e) => (e === i ? "\n" : e)).join("");
      }
      function W(e) {
        const t = Array.isArray(e)
          ? 0 < e.length
            ? "string" == typeof e[0]
              ? Object.fromEntries(
                  e.map((e) => {
                    if ("string" != typeof e) throw new Error("Wrong branch of map function");
                    return [e, {}];
                  })
                )
              : Object.fromEntries(
                  e.map((e) => {
                    if ("string" == typeof e) throw new Error("Wrong branch of map function");
                    return null != e.escapeToken
                      ? [
                          e.content,
                          {
                            escapeToken: e.escapeToken
                          }
                        ]
                      : [e.content, {}];
                  })
                )
            : {}
          : e;
        return function (e) {
          if (null == e || "macro" !== e.type) return !1;
          const n = t[e.content];
          return !(!n || ("object" == typeof n && "escapeToken" in n && null != n.escapeToken && n.escapeToken !== e.escapeToken));
        };
      }
      function L(e) {
        const r = Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, {}])) : e;
        return function (e) {
          if (!o.anyEnvironment(e)) return !1;
          const n = c(e.env),
            t = r[n];
          return !!t;
        };
      }
      var o = {
          macro(e, n) {
            return null != e && "macro" === e.type && (null == n || e.content === n);
          },
          anyMacro(e) {
            return o.macro(e);
          },
          environment(e, n) {
            return null != e && !(("environment" !== e.type && "mathenv" !== e.type) || (null != n && c(e.env) !== n));
          },
          anyEnvironment(e) {
            return o.environment(e);
          },
          comment(e) {
            return null != e && "comment" === e.type;
          },
          parbreak(e) {
            return null != e && "parbreak" === e.type;
          },
          whitespace(e) {
            return null != e && "whitespace" === e.type;
          },
          whitespaceLike(e) {
            return null != e && ("whitespace" === e.type || ("whitespace" === e.type && !0 === e.leadingWhitespace));
          },
          string(e, n) {
            return null != e && "string" === e.type && (null == n || e.content === n);
          },
          anyString(e) {
            return o.string(e);
          },
          group(e) {
            return null != e && "group" === e.type;
          },
          argument(e) {
            return null != e && "argument" === e.type;
          },
          blankArgument(e) {
            return !!o.argument(e) && "" === e.openMark && "" === e.closeMark && 0 === e.content.length;
          },
          math(e) {
            return null != e && ("displaymath" === e.type || "inlinemath" === e.type);
          },
          createMacroMatcher: W,
          createEnvironmentMatcher: L
        },
        {} = o;
      $(Pr, Error),
        (Pr.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = z("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " + c + "\n" + o + " |\n" + u.line + " | " + i + "\n" + o + " | " + z("", u.column - 1, " ") + z("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (Pr.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      var t = {
        SyntaxError: Pr,
        parse: G
      };
      function $(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function Pr(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, Pr.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function z(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      function G(s, e) {
        var l = {},
          U = (e = void 0 !== e ? e : {}).grammarSource,
          n = {
            document: nr,
            math: tr
          },
          q = nr,
          R = "%",
          a = ".",
          D = "verb*",
          V = "verb",
          B = "verbatim*",
          W = "verbatim",
          L = "filecontents*",
          $ = "filecontents",
          z = "comment",
          G = "lstlisting",
          Z = "[",
          X = "]",
          J = "(",
          H = ")",
          Q = "begin",
          K = "end",
          Y = "equation*",
          ee = "equation",
          ne = "align*",
          te = "align",
          re = "alignat*",
          oe = "alignat",
          ie = "gather*",
          ae = "gather",
          ue = "multline*",
          ce = "multline",
          se = "flalign*",
          le = "flalign",
          pe = "split",
          fe = "math",
          ge = "displaymath",
          de = "\\",
          he = "{",
          me = "}",
          ye = "$",
          be = "&",
          ve = "\r",
          Ae = "\n",
          xe = "\r\n",
          Se = "#",
          ke = "^",
          Me = "_",
          Ie = "\0",
          we = /^[ \t]/,
          Ce = /^[a-zA-Z]/,
          Fe = /^[0-9]/,
          Ee = /^[.,;:\-*\/()!?=+<>[\]`'"~]/,
          Oe = h("document"),
          Pe = h("math"),
          Ne = h("token"),
          p = Qt(),
          je = h("parbreak"),
          _e = h("math token"),
          Te = h("nonchar token"),
          Ue = i("%", !1),
          qe = h("whitespace"),
          Re = h("number"),
          u = i(".", !1),
          De = h("special macro"),
          Ve = i("verb*", !1),
          Be = i("verb", !1),
          We = h("verbatim environment"),
          Le = i("verbatim*", !1),
          $e = i("verbatim", !1),
          ze = i("filecontents*", !1),
          Ge = i("filecontents", !1),
          Ze = i("comment", !1),
          Xe = i("lstlisting", !1),
          Je = h("macro"),
          He = h("group"),
          Qe = h("environment"),
          Ke = h("math environment"),
          Ye = (h("math group"), i("[", !1)),
          en = i("]", !1),
          nn = i("(", !1),
          tn = i(")", !1),
          rn = i("begin", !1),
          on = i("end", !1),
          an = i("equation*", !1),
          un = i("equation", !1),
          cn = i("align*", !1),
          sn = i("align", !1),
          ln = i("alignat*", !1),
          pn = i("alignat", !1),
          fn = i("gather*", !1),
          gn = i("gather", !1),
          dn = i("multline*", !1),
          hn = i("multline", !1),
          mn = i("flalign*", !1),
          yn = i("flalign", !1),
          bn = i("split", !1),
          vn = i("math", !1),
          An = i("displaymath", !1),
          xn = h("escape"),
          Sn = i("\\", !1),
          kn = i("{", !1),
          Mn = i("}", !1),
          In = i("$", !1),
          wn = i("&", !1),
          Cn = h("newline"),
          Fn = i("\r", !1),
          En = i("\n", !1),
          On = i("\r\n", !1),
          Pn = i("#", !1),
          Nn = i("^", !1),
          jn = i("_", !1),
          _n = i("\0", !1),
          Tn = c([" ", "\t"], !1, !1),
          Un = h("letter"),
          qn = c(
            [
              ["a", "z"],
              ["A", "Z"]
            ],
            !1,
            !1
          ),
          Rn = h("digit"),
          Dn = c([["0", "9"]], !1, !1),
          Vn = h("punctuation"),
          Bn = c([".", ",", ";", ":", "-", "*", "/", "(", ")", "!", "?", "=", "+", "<", ">", "[", "]", "`", "'", '"', "~"], !1, !1),
          Wn = h("full comment"),
          Ln = h("comment"),
          $n = function (e) {
            return T("root", {
              content: e
            });
          },
          zn = function (e) {
            return e;
          },
          Gn = function (e) {
            return T("inlinemath", {
              content: e
            });
          },
          Zn = function (e) {
            return T("string", {
              content: e
            });
          },
          Xn = function (e) {
            return T("string", {
              content: e
            });
          },
          Jn = function () {
            return T("parbreak");
          },
          Hn = function (e) {
            return e;
          },
          Qn = function (e) {
            return e;
          },
          Kn = function () {
            return T("macro", {
              content: "^",
              escapeToken: ""
            });
          },
          Yn = function () {
            return T("macro", {
              content: "_",
              escapeToken: ""
            });
          },
          et = function (e) {
            return T("string", {
              content: e
            });
          },
          nt = function () {
            return T("whitespace");
          },
          tt = function (e, n) {
            return e.join("") + "." + n.join("");
          },
          rt = function (e) {
            return "." + e.join("");
          },
          ot = function (e) {
            return e.join("") + ".";
          },
          it = function (e) {
            return T("string", {
              content: e
            });
          },
          at = function (e, n, t) {
            return t == n;
          },
          ut = function (e, n, t) {
            return t;
          },
          ct = function (e, n, t, r) {
            return r == n;
          },
          st = function (e, n, t) {
            return T("verb", {
              env: e,
              escape: n,
              content: t.join("")
            });
          },
          lt = function (e) {
            return e;
          },
          pt = function (e) {
            return T("displaymath", {
              content: e
            });
          },
          ft = function (e) {
            return e;
          },
          gt = function (e) {
            return T("inlinemath", {
              content: e
            });
          },
          dt = function (e) {
            return e;
          },
          ht = function (e) {
            return T("displaymath", {
              content: e
            });
          },
          mt = function (e, n) {
            return Or(
              {
                content: [e]
              },
              n
            );
          },
          yt = function (e, n) {
            return n;
          },
          bt = function (e, n) {
            return T("verbatim", {
              env: e,
              content: n.join("")
            });
          },
          vt = function (e) {
            return e.join("");
          },
          At = function (e) {
            return e;
          },
          xt = function (e) {
            return T("macro", {
              content: e
            });
          },
          St = function (e) {
            return e;
          },
          kt = function (e) {
            return T("group", {
              content: e
            });
          },
          Mt = function (e) {
            return Jt().slice(1, -1);
          },
          It = function (e, n, t) {
            return Or(e, t);
          },
          wt = function (e, n, t) {
            return t;
          },
          Ct = function (e, n, t) {
            return T("environment", {
              env: e,
              content: n ? [n, ...t] : t
            });
          },
          Ft = function (e, n, t) {
            return Or(
              {
                content: [e]
              },
              t
            );
          },
          Et = function (e, n, t) {
            return t;
          },
          Ot = function (e, n, t) {
            return T("mathenv", {
              env: e,
              content: n ? [n, ...t] : t
            });
          },
          Pt = function (e) {
            return T("string", {
              content: e
            });
          },
          Nt = function () {
            return T("string", {
              content: "\\"
            });
          },
          jt = function (e) {
            return T("string", {
              content: e
            });
          },
          _t = function (e) {
            return T("string", {
              content: e
            });
          },
          Tt = function (e) {
            return T("string", {
              content: e
            });
          },
          Ut = function (e) {
            return T("string", {
              content: e
            });
          },
          qt = function (e) {
            return T("string", {
              content: e
            });
          },
          Rt = function (e) {
            return T("string", {
              content: e
            });
          },
          Dt = function (e) {
            return T("string", {
              content: e
            });
          },
          Vt = function () {
            return " ";
          },
          Bt = function (e) {
            return T("string", {
              content: e
            });
          },
          Wt = function (e, n) {
            return T("comment", {
              ...n,
              sameline: !1,
              leadingWhitespace: 0 < e.length
            });
          },
          Lt = function (e, n) {
            return T("comment", {
              ...n,
              sameline: !0,
              leadingWhitespace: 0 < e.length
            });
          },
          $t = function (e) {
            return e;
          },
          zt = function (e) {
            return {
              content: e.join(""),
              suffixParbreak: !0
            };
          },
          Gt = function (e) {
            return e;
          },
          Zt = function (e) {
            return {
              content: e.join("")
            };
          },
          Xt = function () {
            return 1 === Ht().start.column;
          },
          f = 0,
          g = 0,
          r = [
            {
              line: 1,
              column: 1
            }
          ],
          t = 0,
          o = [],
          d = 0;
        if ("startRule" in e) {
          if (!(e.startRule in n)) throw new Error(`Can't start parsing from rule "` + e.startRule + '".');
          q = n[e.startRule];
        }
        function Jt() {
          return s.substring(g, f);
        }
        function Ht() {
          return m(g, f);
        }
        function i(e, n) {
          return {
            type: "literal",
            text: e,
            ignoreCase: n
          };
        }
        function c(e, n, t) {
          return {
            type: "class",
            parts: e,
            inverted: n,
            ignoreCase: t
          };
        }
        function Qt() {
          return {
            type: "any"
          };
        }
        function Kt() {
          return {
            type: "end"
          };
        }
        function h(e) {
          return {
            type: "other",
            description: e
          };
        }
        function Yt(e) {
          var n,
            t = r[e];
          if (t) return t;
          for (n = e - 1; !r[n]; ) n--;
          for (
            t = {
              line: (t = r[n]).line,
              column: t.column
            };
            n < e;

          )
            10 === s.charCodeAt(n) ? (t.line++, (t.column = 1)) : t.column++, n++;
          return (r[e] = t);
        }
        function m(e, n) {
          var t = Yt(e),
            r = Yt(n);
          return {
            source: U,
            start: {
              offset: e,
              line: t.line,
              column: t.column
            },
            end: {
              offset: n,
              line: r.line,
              column: r.column
            }
          };
        }
        function y(e) {
          f < t || (t < f && ((t = f), (o = [])), o.push(e));
        }
        function er(e, n, t) {
          return new Pr(Pr.buildMessage(e, n), e, n, t);
        }
        function nr() {
          var e, n, t;
          for (d++, e = f, n = [], t = b(); t !== l; ) n.push(t), (t = b());
          return (g = e), (e = n = $n(n)), (n = l), 0 === --d && y(Oe), e;
        }
        function tr() {
          var e, n;
          for (d++, e = [], n = v(); n !== l; ) e.push(n), (n = v());
          return (n = l), 0 === --d && y(Pe), e;
        }
        function b() {
          var e, n, t, r, o, i;
          if ((d++, (e = ar()) === l && (e = sr()) === l && (e = Sr()) === l && (e = x()) === l)) {
            if (((e = f), (n = O()) !== l)) {
              if (
                ((t = []),
                (o = r = f),
                d++,
                (i = O()),
                d--,
                (r = (o = i === l ? void 0 : ((f = o), l)) !== l && (i = v()) !== l ? ((g = r), zn(i)) : ((f = r), l)) !== l)
              )
                for (; r !== l; )
                  t.push(r),
                    (o = r = f),
                    d++,
                    (i = O()),
                    d--,
                    (r = (o = i === l ? void 0 : ((f = o), l)) !== l && (i = v()) !== l ? ((g = r), zn(i)) : ((f = r), l));
              else t = l;
              e = t !== l && (r = O()) !== l ? ((g = e), Gn(t)) : ((f = e), l);
            } else (f = e), (e = l);
            if (
              e === l &&
              (e = hr()) === l &&
              (e = rr()) === l &&
              (e = mr()) === l &&
              (e = vr()) === l &&
              (e = ir()) === l &&
              (e = A()) === l &&
              (e = xr()) === l
            ) {
              if (
                ((t = []),
                (o = r = n = e = f),
                d++,
                (i = or()),
                d--,
                (r =
                  (o = i === l ? void 0 : ((f = o), l)) !== l &&
                  (s.length > f ? ((i = s.charAt(f)), f++) : ((i = l), 0 === d && y(p)), i !== l)
                    ? (o = [o, i])
                    : ((f = r), l)) !== l)
              )
                for (; r !== l; )
                  t.push(r),
                    (o = r = f),
                    d++,
                    (i = or()),
                    d--,
                    (r =
                      (o = i === l ? void 0 : ((f = o), l)) !== l &&
                      (s.length > f ? ((i = s.charAt(f)), f++) : ((i = l), 0 === d && y(p)), i !== l)
                        ? (o = [o, i])
                        : ((f = r), l));
              else t = l;
              (n = t !== l ? s.substring(n, f) : t) !== l && ((g = e), (n = Zn(n))),
                (e = n) === l &&
                  (e = F()) === l &&
                  (e = E()) === l &&
                  (e = O()) === l &&
                  ((e = f),
                  s.length > f ? ((n = s.charAt(f)), f++) : ((n = l), 0 === d && y(p)),
                  n !== l && ((g = e), (n = Xn(n))),
                  (e = n));
            }
          }
          return d--, e === l && ((n = l), 0 === d) && y(Ne), e;
        }
        function rr() {
          var e, n, t, r, o, i, a, u;
          for (d++, n = e = f, t = [], r = N(); r !== l; ) t.push(r), (r = N());
          if ((r = P()) !== l) {
            for (o = [], i = f, a = [], u = N(); u !== l; ) a.push(u), (u = N());
            if ((i = (u = P()) !== l ? (a = [a, u]) : ((f = i), l)) !== l)
              for (; i !== l; ) {
                for (o.push(i), i = f, a = [], u = N(); u !== l; ) a.push(u), (u = N());
                i = (u = P()) !== l ? (a = [a, u]) : ((f = i), l);
              }
            else o = l;
            if (o !== l) {
              for (i = [], a = N(); a !== l; ) i.push(a), (a = N());
              (a = f), d++, (u = _()), d--, (n = (a = u === l ? void 0 : ((f = a), l)) !== l ? (t = [t, r, o, i, a]) : ((f = n), l));
            } else (f = n), (n = l);
          } else (f = n), (n = l);
          if (n === l) {
            for (n = f, t = [], r = N(); r !== l; ) t.push(r), (r = N());
            if ((r = P()) !== l) {
              for (o = [], i = f, a = [], u = N(); u !== l; ) a.push(u), (u = N());
              if ((i = (u = P()) !== l ? (a = [a, u]) : ((f = i), l)) !== l)
                for (; i !== l; ) {
                  for (o.push(i), i = f, a = [], u = N(); u !== l; ) a.push(u), (u = N());
                  i = (u = P()) !== l ? (a = [a, u]) : ((f = i), l);
                }
              else o = l;
              n = o !== l ? (t = [t, r, o]) : ((f = n), l);
            } else (f = n), (n = l);
          }
          return n !== l && ((g = e), (n = Jn())), d--, (e = n) === l && ((n = l), 0 === d) && y(je), e;
        }
        function v() {
          var e, n, t, r, o;
          if ((d++, (e = ar()) === l && (e = sr()) === l && (e = Sr()) === l)) {
            for (e = f, n = [], t = A(); t !== l; ) n.push(t), (t = A());
            if ((t = x()) !== l) {
              for (r = [], o = A(); o !== l; ) r.push(o), (o = A());
              (g = e), (e = Hn(t));
            } else (f = e), (e = l);
            if (e === l) {
              for (e = f, n = [], t = A(); t !== l; ) n.push(t), (t = A());
              if ((t = hr()) !== l) {
                for (r = [], o = A(); o !== l; ) r.push(o), (o = A());
                (g = e), (e = Qn(t));
              } else (f = e), (e = l);
              if (e === l && (e = mr()) === l) {
                for (e = f, n = [], t = A(); t !== l; ) n.push(t), (t = A());
                if ((t = yr()) !== l) {
                  for (r = [], o = A(); o !== l; ) r.push(o), (o = A());
                  (g = e), (e = Kn());
                } else (f = e), (e = l);
                if (e === l) {
                  for (e = f, n = [], t = A(); t !== l; ) n.push(t), (t = A());
                  if ((t = br()) !== l) {
                    for (r = [], o = A(); o !== l; ) r.push(o), (o = A());
                    (g = e), (e = Yn());
                  } else (f = e), (e = l);
                  e === l &&
                    (e = vr()) === l &&
                    (e = A()) === l &&
                    ((e = f),
                    s.length > f ? ((n = s.charAt(f)), f++) : ((n = l), 0 === d && y(p)),
                    n !== l && ((g = e), (n = et(n))),
                    (e = n));
                }
              }
            }
          }
          return d--, e === l && ((n = l), 0 === d) && y(_e), e;
        }
        function or() {
          var e;
          return (
            d++,
            (e = C()) === l &&
              (37 === s.charCodeAt(f) ? ((e = R), f++) : ((e = l), 0 === d && y(Ue)), e === l) &&
              (e = F()) === l &&
              (e = E()) === l &&
              (e = O()) === l &&
              (e = hr()) === l &&
              (e = P()) === l &&
              (e = mr()) === l &&
              (e = vr()) === l &&
              (e = N()) === l &&
              (e = xr()) === l &&
              (e = Fr()),
            d--,
            e === l && 0 === d && y(Te),
            e
          );
        }
        function A() {
          var e, n, t, r, o, i, a, u;
          if ((d++, (n = e = f), (t = P()) !== l)) {
            for (r = [], o = N(); o !== l; ) r.push(o), (o = N());
            n = t = [t, r];
          } else (f = n), (n = l);
          if (n === l) {
            if (((n = f), (t = []), (r = N()) !== l)) for (; r !== l; ) t.push(r), (r = N());
            else t = l;
            if (t !== l)
              if ((r = P()) !== l)
                if (((o = f), d++, (i = _()), d--, (o = i === l ? void 0 : ((f = o), l)) !== l)) {
                  for (i = [], a = N(); a !== l; ) i.push(a), (a = N());
                  (a = f), d++, (u = P()), d--, (n = (a = u === l ? void 0 : ((f = a), l)) !== l ? (t = [t, r, o, i, a]) : ((f = n), l));
                } else (f = n), (n = l);
              else (f = n), (n = l);
            else (f = n), (n = l);
            if (n === l)
              if (((n = []), (t = N()) !== l)) for (; t !== l; ) n.push(t), (t = N());
              else n = l;
          }
          return n !== l && ((g = e), (n = nt())), d--, (e = n) === l && ((n = l), 0 === d) && y(qe), e;
        }
        function ir() {
          var e, n, t, r, o, i;
          if ((d++, (n = e = f), (t = []), (r = j()) !== l)) for (; r !== l; ) t.push(r), (r = j());
          else t = l;
          if (t !== l)
            if ((46 === s.charCodeAt(f) ? ((r = a), f++) : ((r = l), 0 === d && y(u)), r !== l)) {
              if (((o = []), (i = j()) !== l)) for (; i !== l; ) o.push(i), (i = j());
              else o = l;
              n = o !== l ? ((g = n), tt(t, o)) : ((f = n), l);
            } else (f = n), (n = l);
          else (f = n), (n = l);
          if (n === l) {
            if (((n = f), 46 === s.charCodeAt(f) ? ((t = a), f++) : ((t = l), 0 === d && y(u)), t !== l)) {
              if (((r = []), (o = j()) !== l)) for (; o !== l; ) r.push(o), (o = j());
              else r = l;
              n = r !== l ? ((g = n), rt(r)) : ((f = n), l);
            } else (f = n), (n = l);
            if (n === l) {
              if (((n = f), (t = []), (r = j()) !== l)) for (; r !== l; ) t.push(r), (r = j());
              else t = l;
              n =
                t !== l && (46 === s.charCodeAt(f) ? ((r = a), f++) : ((r = l), 0 === d && y(u)), r !== l)
                  ? ((g = n), ot(t))
                  : ((f = n), l);
            }
          }
          return n !== l && ((g = e), (n = it(n))), d--, (e = n) === l && ((n = l), 0 === d) && y(Re), e;
        }
        function ar() {
          var e, n, t, r, o, i, a, u, c;
          if ((d++, (e = f), C() !== l))
            if (
              (s.substr(f, 5) === D ? ((n = D), (f += 5)) : ((n = l), 0 === d && y(Ve)),
              n === l && (s.substr(f, 4) === V ? ((n = V), (f += 4)) : ((n = l), 0 === d && y(Be))),
              n !== l)
            )
              if ((s.length > f ? ((t = s.charAt(f)), f++) : ((t = l), 0 === d && y(p)), t !== l)) {
                for (
                  r = [],
                    d++,
                    a = i = o = f,
                    s.length > f ? ((u = s.charAt(f)), f++) : ((u = l), 0 === d && y(p)),
                    a = u !== l && ((g = f), (c = (c = at(n, t, u)) ? void 0 : l) !== l) ? (u = [u, c]) : ((f = a), l),
                    d--,
                    o =
                      (i = a === l ? void 0 : ((f = i), l)) !== l &&
                      (s.length > f ? ((a = s.charAt(f)), f++) : ((a = l), 0 === d && y(p)), a !== l)
                        ? ((g = o), ut(n, t, a))
                        : ((f = o), l);
                  o !== l;

                )
                  r.push(o),
                    d++,
                    (a = i = o = f),
                    s.length > f ? ((u = s.charAt(f)), f++) : ((u = l), 0 === d && y(p)),
                    (a = u !== l && ((g = f), (c = (c = at(n, t, u)) ? void 0 : l) !== l) ? (u = [u, c]) : ((f = a), l)),
                    d--,
                    (o =
                      (i = a === l ? void 0 : ((f = i), l)) !== l &&
                      (s.length > f ? ((a = s.charAt(f)), f++) : ((a = l), 0 === d && y(p)), a !== l)
                        ? ((g = o), ut(n, t, a))
                        : ((f = o), l));
                (o = f),
                  s.length > f ? ((i = s.charAt(f)), f++) : ((i = l), 0 === d && y(p)),
                  (e =
                    (o = i !== l && ((g = f), (a = (a = ct(n, t, r, i)) ? void 0 : l) !== l) ? (i = [i, a]) : ((f = o), l)) !== l
                      ? ((g = e), st(n, t, r))
                      : ((f = e), l));
              } else (f = e), (e = l);
            else (f = e), (e = l);
          else (f = e), (e = l);
          if (e === l && (e = ur()) === l) {
            if (((e = f), fr() !== l)) {
              for (
                n = [],
                  r = t = f,
                  d++,
                  o = k(),
                  d--,
                  t = (r = o === l ? void 0 : ((f = r), l)) !== l && (o = v()) !== l ? ((g = t), lt(o)) : ((f = t), l);
                t !== l;

              )
                n.push(t),
                  (r = t = f),
                  d++,
                  (o = k()),
                  d--,
                  (t = (r = o === l ? void 0 : ((f = r), l)) !== l && (o = v()) !== l ? ((g = t), lt(o)) : ((f = t), l));
              e = (t = k()) !== l ? ((g = e), pt(n)) : ((f = e), l);
            } else (f = e), (e = l);
            if (e === l) {
              if (((e = f), gr() !== l)) {
                for (
                  n = [],
                    r = t = f,
                    d++,
                    o = M(),
                    d--,
                    t = (r = o === l ? void 0 : ((f = r), l)) !== l && (o = v()) !== l ? ((g = t), ft(o)) : ((f = t), l);
                  t !== l;

                )
                  n.push(t),
                    (r = t = f),
                    d++,
                    (o = M()),
                    d--,
                    (t = (r = o === l ? void 0 : ((f = r), l)) !== l && (o = v()) !== l ? ((g = t), ft(o)) : ((f = t), l));
                e = (t = M()) !== l ? ((g = e), gt(n)) : ((f = e), l);
              } else (f = e), (e = l);
              if (e === l) {
                if (((e = f), O() !== l))
                  if ((n = O()) !== l) {
                    for (
                      t = [],
                        d++,
                        i = o = r = f,
                        i = (a = O()) !== l && (u = O()) !== l ? (a = [a, u]) : ((f = i), l),
                        d--,
                        r = (o = i === l ? void 0 : ((f = o), l)) !== l && (i = v()) !== l ? ((g = r), dt(i)) : ((f = r), l);
                      r !== l;

                    )
                      t.push(r),
                        d++,
                        (i = o = r = f),
                        (i = (a = O()) !== l && (u = O()) !== l ? (a = [a, u]) : ((f = i), l)),
                        d--,
                        (r = (o = i === l ? void 0 : ((f = o), l)) !== l && (i = v()) !== l ? ((g = r), dt(i)) : ((f = r), l));
                    e = (r = O()) !== l && (o = O()) !== l ? ((g = e), ht(t)) : ((f = e), l);
                  } else (f = e), (e = l);
                else (f = e), (e = l);
                e === l && (e = pr()) === l && (e = lr());
              }
            }
          }
          return d--, e === l && 0 === d && y(De), e;
        }
        function ur() {
          var e, n, t, r, o, i, a, u, c;
          if ((d++, (e = f), I() !== l))
            if (F() !== l)
              if ((n = cr()) !== l)
                if (E() !== l) {
                  for (
                    t = [],
                      d++,
                      i = o = r = f,
                      i =
                        (a = w()) !== l && (u = x()) !== l && ((g = f), (c = (c = mt(n, u)) ? void 0 : l) !== l)
                          ? (a = [a, u, c])
                          : ((f = i), l),
                      d--,
                      r =
                        (o = i === l ? void 0 : ((f = o), l)) !== l &&
                        (s.length > f ? ((i = s.charAt(f)), f++) : ((i = l), 0 === d && y(p)), i !== l)
                          ? ((g = r), yt(n, i))
                          : ((f = r), l);
                    r !== l;

                  )
                    t.push(r),
                      d++,
                      (i = o = r = f),
                      (i =
                        (a = w()) !== l && (u = x()) !== l && ((g = f), (c = (c = mt(n, u)) ? void 0 : l) !== l)
                          ? (a = [a, u, c])
                          : ((f = i), l)),
                      d--,
                      (r =
                        (o = i === l ? void 0 : ((f = o), l)) !== l &&
                        (s.length > f ? ((i = s.charAt(f)), f++) : ((i = l), 0 === d && y(p)), i !== l)
                          ? ((g = r), yt(n, i))
                          : ((f = r), l));
                  e = (r = w()) !== l && (o = F()) !== l && (i = cr()) !== l && (a = E()) !== l ? ((g = e), bt(n, t)) : ((f = e), l);
                } else (f = e), (e = l);
              else (f = e), (e = l);
            else (f = e), (e = l);
          else (f = e), (e = l);
          return d--, e === l && 0 === d && y(We), e;
        }
        function cr() {
          var e;
          return (
            s.substr(f, 9) === B ? ((e = B), (f += 9)) : ((e = l), 0 === d && y(Le)),
            e === l &&
              (s.substr(f, 8) === W ? ((e = W), (f += 8)) : ((e = l), 0 === d && y($e)), e === l) &&
              (s.substr(f, 13) === L ? ((e = L), (f += 13)) : ((e = l), 0 === d && y(ze)), e === l) &&
              (s.substr(f, 12) === $ ? ((e = $), (f += 12)) : ((e = l), 0 === d && y(Ge)), e === l) &&
              (s.substr(f, 7) === z ? ((e = z), (f += 7)) : ((e = l), 0 === d && y(Ze)), e === l) &&
              (s.substr(f, 10) === G ? ((e = G), (f += 10)) : ((e = l), 0 === d && y(Xe))),
            e
          );
        }
        function sr() {
          var e, n, t, r;
          if ((d++, (n = e = f), C() !== l)) {
            if (((t = []), (r = Ar()) !== l)) for (; r !== l; ) t.push(r), (r = Ar());
            else t = l;
            n = t !== l ? ((g = n), vt(t)) : ((f = n), l);
          } else (f = n), (n = l);
          return (
            n === l &&
              ((n = f),
              (n =
                C() !== l && (s.length > f ? ((t = s.charAt(f)), f++) : ((t = l), 0 === d && y(p)), t !== l)
                  ? ((g = n), At(t))
                  : ((f = n), l))),
            n !== l && ((g = e), (n = xt(n))),
            d--,
            (e = n) === l && ((n = l), 0 === d) && y(Je),
            e
          );
        }
        function x() {
          var e, n, t, r, o;
          if ((d++, (e = f), F() !== l)) {
            for (
              n = [],
                r = t = f,
                d++,
                o = E(),
                d--,
                t = (r = o === l ? void 0 : ((f = r), l)) !== l && (o = b()) !== l ? ((g = t), St(o)) : ((f = t), l);
              t !== l;

            )
              n.push(t),
                (r = t = f),
                d++,
                (o = E()),
                d--,
                (t = (r = o === l ? void 0 : ((f = r), l)) !== l && (o = b()) !== l ? ((g = t), St(o)) : ((f = t), l));
            e = (t = E()) !== l ? ((g = e), kt(n)) : ((f = e), l);
          } else (f = e), (e = l);
          return d--, e === l && 0 === d && y(He), e;
        }
        function S() {
          var e = f,
            n = x();
          return n !== l && ((g = e), (n = Mt(n))), (e = n);
        }
        function lr() {
          var e, n, t, r, o, i, a, u, c, s;
          if ((d++, (e = f), I() !== l))
            if ((n = S()) !== l) {
              for (
                (t = Mr()) === l && (t = null),
                  r = [],
                  d++,
                  a = i = o = f,
                  a =
                    (u = w()) !== l && (c = S()) !== l && ((g = f), (s = (s = It(n, t, c)) ? void 0 : l) !== l)
                      ? (u = [u, c, s])
                      : ((f = a), l),
                  d--,
                  o = (i = a === l ? void 0 : ((f = i), l)) !== l && (a = b()) !== l ? ((g = o), wt(n, t, a)) : ((f = o), l);
                o !== l;

              )
                r.push(o),
                  d++,
                  (a = i = o = f),
                  (a =
                    (u = w()) !== l && (c = S()) !== l && ((g = f), (s = (s = It(n, t, c)) ? void 0 : l) !== l)
                      ? (u = [u, c, s])
                      : ((f = a), l)),
                  d--,
                  (o = (i = a === l ? void 0 : ((f = i), l)) !== l && (a = b()) !== l ? ((g = o), wt(n, t, a)) : ((f = o), l));
              e = (o = w()) !== l && (i = S()) !== l ? ((g = e), Ct(n, t, r)) : ((f = e), l);
            } else (f = e), (e = l);
          else (f = e), (e = l);
          return d--, e === l && 0 === d && y(Qe), e;
        }
        function pr() {
          var e, n, t, r, o, i, a, u, c, s;
          if ((d++, (e = f), I() !== l))
            if (F() !== l)
              if ((n = dr()) !== l)
                if (E() !== l) {
                  for (
                    (t = Mr()) === l && (t = null),
                      r = [],
                      d++,
                      a = i = o = f,
                      a =
                        (u = w()) !== l && (c = x()) !== l && ((g = f), (s = (s = Ft(n, t, c)) ? void 0 : l) !== l)
                          ? (u = [u, c, s])
                          : ((f = a), l),
                      d--,
                      o = (i = a === l ? void 0 : ((f = i), l)) !== l && (a = v()) !== l ? ((g = o), Et(n, t, a)) : ((f = o), l);
                    o !== l;

                  )
                    r.push(o),
                      d++,
                      (a = i = o = f),
                      (a =
                        (u = w()) !== l && (c = x()) !== l && ((g = f), (s = (s = Ft(n, t, c)) ? void 0 : l) !== l)
                          ? (u = [u, c, s])
                          : ((f = a), l)),
                      d--,
                      (o = (i = a === l ? void 0 : ((f = i), l)) !== l && (a = v()) !== l ? ((g = o), Et(n, t, a)) : ((f = o), l));
                  e = (o = w()) !== l && (i = F()) !== l && (a = dr()) !== l && (u = E()) !== l ? ((g = e), Ot(n, t, r)) : ((f = e), l);
                } else (f = e), (e = l);
              else (f = e), (e = l);
            else (f = e), (e = l);
          else (f = e), (e = l);
          return d--, e === l && 0 === d && y(Ke), e;
        }
        function fr() {
          var e,
            n = f,
            t = C();
          return (n =
            t !== l && (91 === s.charCodeAt(f) ? ((e = Z), f++) : ((e = l), 0 === d && y(Ye)), e !== l) ? (t = [t, e]) : ((f = n), l));
        }
        function k() {
          var e,
            n = f,
            t = C();
          return (n =
            t !== l && (93 === s.charCodeAt(f) ? ((e = X), f++) : ((e = l), 0 === d && y(en)), e !== l) ? (t = [t, e]) : ((f = n), l));
        }
        function gr() {
          var e,
            n = f,
            t = C();
          return (n =
            t !== l && (40 === s.charCodeAt(f) ? ((e = J), f++) : ((e = l), 0 === d && y(nn)), e !== l) ? (t = [t, e]) : ((f = n), l));
        }
        function M() {
          var e,
            n = f,
            t = C();
          return (n =
            t !== l && (41 === s.charCodeAt(f) ? ((e = H), f++) : ((e = l), 0 === d && y(tn)), e !== l) ? (t = [t, e]) : ((f = n), l));
        }
        function I() {
          var e,
            n = f,
            t = C();
          return (n =
            t !== l && (s.substr(f, 5) === Q ? ((e = Q), (f += 5)) : ((e = l), 0 === d && y(rn)), e !== l) ? (t = [t, e]) : ((f = n), l));
        }
        function w() {
          var e,
            n = f,
            t = C();
          return (n =
            t !== l && (s.substr(f, 3) === K ? ((e = K), (f += 3)) : ((e = l), 0 === d && y(on)), e !== l) ? (t = [t, e]) : ((f = n), l));
        }
        function dr() {
          var e,
            n = f;
          return (
            s.substr(f, 9) === Y ? ((e = Y), (f += 9)) : ((e = l), 0 === d && y(an)),
            e === l &&
              (s.substr(f, 8) === ee ? ((e = ee), (f += 8)) : ((e = l), 0 === d && y(un)), e === l) &&
              (s.substr(f, 6) === ne ? ((e = ne), (f += 6)) : ((e = l), 0 === d && y(cn)), e === l) &&
              (s.substr(f, 5) === te ? ((e = te), (f += 5)) : ((e = l), 0 === d && y(sn)), e === l) &&
              (s.substr(f, 8) === re ? ((e = re), (f += 8)) : ((e = l), 0 === d && y(ln)), e === l) &&
              (s.substr(f, 7) === oe ? ((e = oe), (f += 7)) : ((e = l), 0 === d && y(pn)), e === l) &&
              (s.substr(f, 7) === ie ? ((e = ie), (f += 7)) : ((e = l), 0 === d && y(fn)), e === l) &&
              (s.substr(f, 6) === ae ? ((e = ae), (f += 6)) : ((e = l), 0 === d && y(gn)), e === l) &&
              (s.substr(f, 9) === ue ? ((e = ue), (f += 9)) : ((e = l), 0 === d && y(dn)), e === l) &&
              (s.substr(f, 8) === ce ? ((e = ce), (f += 8)) : ((e = l), 0 === d && y(hn)), e === l) &&
              (s.substr(f, 8) === se ? ((e = se), (f += 8)) : ((e = l), 0 === d && y(mn)), e === l) &&
              (s.substr(f, 7) === le ? ((e = le), (f += 7)) : ((e = l), 0 === d && y(yn)), e === l) &&
              (s.substr(f, 5) === pe ? ((e = pe), (f += 5)) : ((e = l), 0 === d && y(bn)), e === l) &&
              (s.substr(f, 4) === fe ? ((e = fe), (f += 4)) : ((e = l), 0 === d && y(vn)), e === l) &&
              (s.substr(f, 11) === ge ? ((e = ge), (f += 11)) : ((e = l), 0 === d && y(An))),
            e !== l && ((g = n), (e = Pt(e))),
            (n = e)
          );
        }
        function C() {
          var e, n;
          return (
            d++,
            (e = f),
            92 === s.charCodeAt(f) ? ((n = de), f++) : ((n = l), 0 === d && y(Sn)),
            n !== l && ((g = e), (n = Nt())),
            d--,
            (e = n) === l && ((n = l), 0 === d) && y(xn),
            e
          );
        }
        function F() {
          var e,
            n = f;
          return 123 === s.charCodeAt(f) ? ((e = he), f++) : ((e = l), 0 === d && y(kn)), e !== l && ((g = n), (e = jt(e))), (n = e);
        }
        function E() {
          var e,
            n = f;
          return 125 === s.charCodeAt(f) ? ((e = me), f++) : ((e = l), 0 === d && y(Mn)), e !== l && ((g = n), (e = _t(e))), (n = e);
        }
        function O() {
          var e,
            n = f;
          return 36 === s.charCodeAt(f) ? ((e = ye), f++) : ((e = l), 0 === d && y(In)), e !== l && ((g = n), (e = Tt(e))), (n = e);
        }
        function hr() {
          var e,
            n = f;
          return 38 === s.charCodeAt(f) ? ((e = be), f++) : ((e = l), 0 === d && y(wn)), e !== l && ((g = n), (e = Ut(e))), (n = e);
        }
        function P() {
          var e, n, t;
          return (
            d++,
            (n = e = f),
            d++,
            13 === s.charCodeAt(f) ? ((t = ve), f++) : ((t = l), 0 === d && y(Fn)),
            d--,
            (e =
              (n = t === l ? void 0 : ((f = n), l)) !== l &&
              (10 === s.charCodeAt(f) ? ((t = Ae), f++) : ((t = l), 0 === d && y(En)), t !== l)
                ? (n = [n, t])
                : ((f = e), l)) === l &&
              (13 === s.charCodeAt(f) ? ((e = ve), f++) : ((e = l), 0 === d && y(Fn)), e === l) &&
              (s.substr(f, 2) === xe ? ((e = xe), (f += 2)) : ((e = l), 0 === d && y(On))),
            d--,
            e === l && ((n = l), 0 === d) && y(Cn),
            e
          );
        }
        function mr() {
          var e,
            n = f;
          return 35 === s.charCodeAt(f) ? ((e = Se), f++) : ((e = l), 0 === d && y(Pn)), e !== l && ((g = n), (e = qt(e))), (n = e);
        }
        function yr() {
          var e,
            n = f;
          return 94 === s.charCodeAt(f) ? ((e = ke), f++) : ((e = l), 0 === d && y(Nn)), e !== l && ((g = n), (e = Rt(e))), (n = e);
        }
        function br() {
          var e,
            n = f;
          return 95 === s.charCodeAt(f) ? ((e = Me), f++) : ((e = l), 0 === d && y(jn)), e !== l && ((g = n), (e = Dt(e))), (n = e);
        }
        function vr() {
          var e;
          return 0 === s.charCodeAt(f) ? ((e = Ie), f++) : ((e = l), 0 === d && y(_n)), e;
        }
        function N() {
          var e, n, t;
          if ((d++, (e = f), (n = []), we.test(s.charAt(f)) ? ((t = s.charAt(f)), f++) : ((t = l), 0 === d && y(Tn)), t !== l))
            for (; t !== l; ) n.push(t), we.test(s.charAt(f)) ? ((t = s.charAt(f)), f++) : ((t = l), 0 === d && y(Tn));
          else n = l;
          return n !== l && ((g = e), (n = Vt())), d--, (e = n) === l && ((n = l), 0 === d) && y(qe), e;
        }
        function Ar() {
          var e;
          return d++, Ce.test(s.charAt(f)) ? ((e = s.charAt(f)), f++) : ((e = l), 0 === d && y(qn)), d--, e === l && 0 === d && y(Un), e;
        }
        function j() {
          var e;
          return d++, Fe.test(s.charAt(f)) ? ((e = s.charAt(f)), f++) : ((e = l), 0 === d && y(Dn)), d--, e === l && 0 === d && y(Rn), e;
        }
        function xr() {
          var e, n;
          return (
            d++,
            (e = f),
            Ee.test(s.charAt(f)) ? ((n = s.charAt(f)), f++) : ((n = l), 0 === d && y(Bn)),
            n !== l && ((g = e), (n = Bt(n))),
            d--,
            (e = n) === l && ((n = l), 0 === d) && y(Vn),
            e
          );
        }
        function _() {
          var e;
          return 37 === s.charCodeAt(f) ? ((e = R), f++) : ((e = l), 0 === d && y(Ue)), e;
        }
        function Sr() {
          var e;
          return d++, (e = kr()) === l && (e = Mr()), d--, e === l && 0 === d && y(Wn), e;
        }
        function kr() {
          for (var e = f, n = f, t = [], r = N(); r !== l; ) t.push(r), (r = N());
          return (
            (n = (r = P()) !== l ? (t = [t, r]) : ((f = n), l)) === l && (n = null),
            (e = (t = wr()) !== l && (r = Ir()) !== l ? ((g = e), Wt(t, r)) : ((f = e), l))
          );
        }
        function Mr() {
          for (var e = f, n = [], t = N(); t !== l; ) n.push(t), (t = N());
          return (e = (t = Ir()) !== l ? ((g = e), Lt(n, t)) : ((f = e), l));
        }
        function Ir() {
          var e, n, t, r, o, i, a;
          if ((d++, (e = f), _() !== l)) {
            for (
              n = [],
                r = t = f,
                d++,
                o = P(),
                d--,
                t =
                  (r = o === l ? void 0 : ((f = r), l)) !== l &&
                  (s.length > f ? ((o = s.charAt(f)), f++) : ((o = l), 0 === d && y(p)), o !== l)
                    ? ((g = t), $t(o))
                    : ((f = t), l);
              t !== l;

            )
              n.push(t),
                (r = t = f),
                d++,
                (o = P()),
                d--,
                (t =
                  (r = o === l ? void 0 : ((f = r), l)) !== l &&
                  (s.length > f ? ((o = s.charAt(f)), f++) : ((o = l), 0 === d && y(p)), o !== l)
                    ? ((g = t), $t(o))
                    : ((f = t), l));
            (t = f), d++, (r = rr()), d--, (e = (t = r !== l ? void (f = t) : l) !== l ? ((g = e), zt(n)) : ((f = e), l));
          } else (f = e), (e = l);
          if (e === l)
            if (((e = f), _() !== l)) {
              for (
                n = [],
                  r = t = f,
                  d++,
                  o = P(),
                  d--,
                  t =
                    (r = o === l ? void 0 : ((f = r), l)) !== l &&
                    (s.length > f ? ((o = s.charAt(f)), f++) : ((o = l), 0 === d && y(p)), o !== l)
                      ? ((g = t), Gt(o))
                      : ((f = t), l);
                t !== l;

              )
                n.push(t),
                  (r = t = f),
                  d++,
                  (o = P()),
                  d--,
                  (t =
                    (r = o === l ? void 0 : ((f = r), l)) !== l &&
                    (s.length > f ? ((o = s.charAt(f)), f++) : ((o = l), 0 === d && y(p)), o !== l)
                      ? ((g = t), Gt(o))
                      : ((f = t), l));
              if (((t = f), (r = P()) !== l)) {
                for (o = [], i = N(); i !== l; ) o.push(i), (i = N());
                (i = f), d++, (a = _()), d--, (t = (i = a === l ? void 0 : ((f = i), l)) !== l ? (r = [r, o, i]) : ((f = t), l));
              } else (f = t), (t = l);
              e = (t = t === l && (t = P()) === l ? Fr() : t) !== l ? ((g = e), Zt(n)) : ((f = e), l);
            } else (f = e), (e = l);
          return d--, e === l && 0 === d && y(Ln), e;
        }
        function wr() {
          var e,
            n,
            t = f,
            r = f,
            o = Cr();
          if (o !== l) {
            for (e = [], n = N(); n !== l; ) e.push(n), (n = N());
            r = o = [o, e];
          } else (f = r), (r = l);
          return (t = r !== l ? s.substring(t, f) : r);
        }
        function Cr() {
          return (g = f), Xt() ? void 0 : l;
        }
        function Fr() {
          var e,
            n = f;
          return d++, s.length > f ? ((e = s.charAt(f)), f++) : ((e = l), 0 === d && y(p)), d--, (n = e === l ? void 0 : ((f = n), l));
        }
        function Er(e) {
          return "string" == typeof e ? e : "string" == typeof e.content ? e.content : e && "whitespace" === e.type ? " " : e;
        }
        function Or(e, n) {
          const t = "string" == typeof e ? e : e.content.map(Er).join(""),
            r = "string" == typeof n ? n : n.content.map(Er).join("");
          return t === r;
        }
        function T(e, n = {}) {
          return {
            type: e,
            ...n,
            position: Ht()
          };
        }
        if ((n = q()) !== l && f === s.length) return n;
        throw (n !== l && f < s.length && y(Kt()), er(o, t < s.length ? s.charAt(t) : null, t < s.length ? m(t, t + 1) : m(t, t)));
      }
      Z(s, Error),
        (s.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = X("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " + c + "\n" + o + " |\n" + u.line + " | " + i + "\n" + o + " | " + X("", u.column - 1, " ") + X("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (s.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      function Z(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function s(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, s.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function X(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      J(Ye, Error),
        (Ye.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = H("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " + c + "\n" + o + " |\n" + u.line + " | " + i + "\n" + o + " | " + H("", u.column - 1, " ") + H("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (Ye.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      var r = {
        SyntaxError: Ye,
        parse: Q
      };
      function J(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function Ye(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, Ye.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function H(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      function Q(c, e) {
        var s = {},
          o = (e = void 0 !== e ? e : {}).grammarSource,
          n = {
            args_spec_list: E
          },
          t = E,
          r = "+",
          i = "v",
          a = "b",
          u = "!",
          l = "D",
          p = "d",
          f = "s",
          g = "O",
          d = "o",
          h = "e",
          U = "E",
          q = "t",
          R = "R",
          D = "r",
          V = "u",
          B = "m",
          W = "{",
          m = "}",
          L = " ",
          $ = "\n",
          z = "\r",
          G = /^[{ ]/,
          Z = I("+", !1),
          X = I("v", !1),
          y = qe(),
          J = I("b", !1),
          H = I("!", !1),
          Q = I("D", !1),
          K = I("d", !1),
          Y = I("s", !1),
          ee = I("O", !1),
          ne = I("o", !1),
          te = I("e", !1),
          re = I("E", !1),
          oe = I("t", !1),
          ie = I("R", !1),
          ae = I("r", !1),
          ue = I("u", !1),
          ce = Ue(["{", " "], !1, !1),
          se = I("m", !1),
          le = I("{", !1),
          b = I("}", !1),
          pe = I(" ", !1),
          fe = I("\n", !1),
          ge = I("\r", !1),
          v = function (e) {
            return e;
          },
          de = function (e) {
            return e;
          },
          he = function (e) {
            return e;
          },
          me = function (e) {
            return T("verbatim", {
              openBrace: e,
              closeBrace: e
            });
          },
          ye = function () {
            return T("body");
          },
          be = function (e, n) {
            return e
              ? {
                  ...n,
                  noLeadingWhitespace: !0
                }
              : n;
          },
          ve = function (e, n) {
            return T("optional", {
              ...e,
              defaultArg: n
            });
          },
          Ae = function (e) {
            return T("optional", e);
          },
          xe = function () {
            return T("optionalStar");
          },
          Se = function (e) {
            return T("optional", {
              defaultArg: e
            });
          },
          ke = function () {
            return T("optional");
          },
          Me = function (e) {
            return T("embellishment", {
              embellishmentTokens: e.content
            });
          },
          Ie = function (e, n) {
            return T("embellishment", {
              embellishmentTokens: e.content,
              defaultArg: n
            });
          },
          we = function (e) {
            return T("optionalToken", {
              token: e
            });
          },
          Ce = function (e, n) {
            return T("mandatory", {
              ...e,
              defaultArg: n
            });
          },
          Fe = function (e) {
            return T("mandatory", e);
          },
          Ee = function (e) {
            return T("until", {
              stopTokens: e
            });
          },
          Oe = function (e) {
            return [e];
          },
          Pe = function (e) {
            return e.content;
          },
          Ne = function () {
            return T("mandatory");
          },
          je = function (e, n) {
            return {
              openBrace: e,
              closeBrace: n
            };
          },
          _e = function (e) {
            return {
              type: "group",
              content: e
            };
          },
          Te = function () {
            return "";
          },
          A = 0,
          x = [
            {
              line: 1,
              column: 1
            }
          ],
          S = 0,
          k = [],
          M = 0;
        if ("startRule" in e) {
          if (!(e.startRule in n)) throw new Error(`Can't start parsing from rule "` + e.startRule + '".');
          t = n[e.startRule];
        }
        function I(e, n) {
          return {
            type: "literal",
            text: e,
            ignoreCase: n
          };
        }
        function Ue(e, n, t) {
          return {
            type: "class",
            parts: e,
            inverted: n,
            ignoreCase: t
          };
        }
        function qe() {
          return {
            type: "any"
          };
        }
        function Re() {
          return {
            type: "end"
          };
        }
        function w(e) {
          var n,
            t = x[e];
          if (t) return t;
          for (n = e - 1; !x[n]; ) n--;
          for (
            t = {
              line: (t = x[n]).line,
              column: t.column
            };
            n < e;

          )
            10 === c.charCodeAt(n) ? (t.line++, (t.column = 1)) : t.column++, n++;
          return (x[e] = t);
        }
        function C(e, n) {
          var t = w(e),
            r = w(n);
          return {
            source: o,
            start: {
              offset: e,
              line: t.line,
              column: t.column
            },
            end: {
              offset: n,
              line: r.line,
              column: r.column
            }
          };
        }
        function F(e) {
          A < S || (S < A && ((S = A), (k = [])), k.push(e));
        }
        function De(e, n, t) {
          return new Ye(Ye.buildMessage(e, n), e, n, t);
        }
        function E() {
          var e = A,
            n = [],
            t = A,
            r = (j(), O());
          for (t = r !== s ? v(r) : ((A = t), s); t !== s; ) n.push(t), (t = A), j(), (t = (r = O()) !== s ? v(r) : ((A = t), s));
          return (t = j()), (e = de(n));
        }
        function O() {
          var e,
            n = A;
          return (
            43 === c.charCodeAt(A) ? ((e = r), A++) : ((e = s), 0 === M && F(Z)),
            e === s && (e = null),
            (n =
              (e = (e = We()) === s && (e = Qe()) === s && (e = Ve()) === s && (e = Xe()) === s && (e = Be()) === s ? Je() : e) !== s
                ? he(e)
                : ((A = n), s))
          );
        }
        function Ve() {
          var e,
            n,
            t = A;
          return (
            118 === c.charCodeAt(A) ? ((e = i), A++) : ((e = s), 0 === M && F(X)),
            (t = e !== s && (c.length > A ? ((n = c.charAt(A)), A++) : ((n = s), 0 === M && F(y)), n !== s) ? me(n) : ((A = t), s))
          );
        }
        function Be() {
          var e,
            n = A;
          return 98 === c.charCodeAt(A) ? ((e = a), A++) : ((e = s), 0 === M && F(J)), e !== s && (e = ye()), (n = e);
        }
        function We() {
          var e,
            n,
            t = A;
          return (
            33 === c.charCodeAt(A) ? ((e = u), A++) : ((e = s), 0 === M && F(H)),
            e === s && (e = null),
            (t =
              (n = (n = $e()) === s && (n = ze()) === s && (n = Le()) === s && (n = Ge()) === s ? Ze() : n) !== s ? be(e, n) : ((A = t), s))
          );
        }
        function Le() {
          var e,
            n,
            t,
            r = A;
          return (
            68 === c.charCodeAt(A) ? ((e = l), A++) : ((e = s), 0 === M && F(Q)),
            (r = e !== s && ((n = P()), (t = N()) !== s) ? ve(n, t) : ((A = r), s)) === s &&
              ((r = A),
              100 === c.charCodeAt(A) ? ((e = p), A++) : ((e = s), 0 === M && F(K)),
              (r = e !== s ? ((n = P()), Ae(n)) : ((A = r), s))),
            r
          );
        }
        function $e() {
          var e,
            n = A;
          return 115 === c.charCodeAt(A) ? ((e = f), A++) : ((e = s), 0 === M && F(Y)), e !== s && (e = xe()), (n = e);
        }
        function ze() {
          var e,
            n,
            t = A;
          return (
            79 === c.charCodeAt(A) ? ((e = g), A++) : ((e = s), 0 === M && F(ee)),
            (t = e !== s && (n = N()) !== s ? Se(n) : ((A = t), s)) === s &&
              ((t = A), 111 === c.charCodeAt(A) ? ((e = d), A++) : ((e = s), 0 === M && F(ne)), e !== s && (e = ke()), (t = e)),
            t
          );
        }
        function Ge() {
          var e,
            n,
            t = A;
          return (
            101 === c.charCodeAt(A) ? ((n = h), A++) : ((n = s), 0 === M && F(te)),
            (t = n !== s && (e = N()) !== s ? Me(e) : ((A = t), s)) === s &&
              ((t = A),
              69 === c.charCodeAt(A) ? ((n = U), A++) : ((n = s), 0 === M && F(re)),
              (t = n !== s && (e = N()) !== s && (n = N()) !== s ? Ie(e, n) : ((A = t), s))),
            t
          );
        }
        function Ze() {
          var e,
            n,
            t = A;
          return (
            116 === c.charCodeAt(A) ? ((e = q), A++) : ((e = s), 0 === M && F(oe)),
            (t = e !== s && (c.length > A ? ((n = c.charAt(A)), A++) : ((n = s), 0 === M && F(y)), n !== s) ? we(n) : ((A = t), s))
          );
        }
        function Xe() {
          var e,
            n,
            t,
            r = A;
          return (
            82 === c.charCodeAt(A) ? ((e = R), A++) : ((e = s), 0 === M && F(ie)),
            (r = e !== s && ((n = P()), (t = N()) !== s) ? Ce(n, t) : ((A = r), s)) === s &&
              ((r = A),
              114 === c.charCodeAt(A) ? ((e = D), A++) : ((e = s), 0 === M && F(ae)),
              (r = e !== s ? ((n = P()), Fe(n)) : ((A = r), s))),
            r
          );
        }
        function Je() {
          var e,
            n = A;
          return (
            117 === c.charCodeAt(A) ? ((e = V), A++) : ((e = s), 0 === M && F(ue)), (n = e !== s && (e = He()) !== s ? Ee(e) : ((A = n), s))
          );
        }
        function He() {
          var e,
            n = A,
            t = A;
          return (
            M++,
            G.test(c.charAt(A)) ? ((e = c.charAt(A)), A++) : ((e = s), 0 === M && F(ce)),
            M--,
            (n =
              (t = e === s ? void 0 : ((A = t), s)) !== s && (c.length > A ? ((e = c.charAt(A)), A++) : ((e = s), 0 === M && F(y)), e !== s)
                ? Oe(e)
                : ((A = n), s)) === s && ((n = A), (t = N()) !== s && (t = Pe(t)), (n = t)),
            n
          );
        }
        function Qe() {
          var e,
            n = A;
          return 109 === c.charCodeAt(A) ? ((e = B), A++) : ((e = s), 0 === M && F(se)), e !== s && (e = Ne()), (n = e);
        }
        function P() {
          var e,
            n,
            t = A,
            r = A,
            o = A,
            i = A;
          return (
            M++,
            (e = _()),
            M--,
            (o =
              (i = e === s ? void 0 : ((A = i), s)) !== s && (c.length > A ? ((e = c.charAt(A)), A++) : ((e = s), 0 === M && F(y)), e !== s)
                ? (i = [i, e])
                : ((A = o), s)) === s && (o = null),
            (r = c.substring(r, A)),
            (e = i = o = A),
            M++,
            (n = _()),
            M--,
            (i =
              (e = n === s ? void 0 : ((A = e), s)) !== s && (c.length > A ? ((n = c.charAt(A)), A++) : ((n = s), 0 === M && F(y)), n !== s)
                ? (e = [e, n])
                : ((A = i), s)) === s && (i = null),
            (o = c.substring(o, A)),
            (t = je(r, o))
          );
        }
        function N() {
          var e,
            n,
            t,
            r,
            o,
            i,
            a,
            u = A;
          if ((123 === c.charCodeAt(A) ? ((e = W), A++) : ((e = s), 0 === M && F(le)), e !== s)) {
            for (
              n = [],
                o = r = t = A,
                M++,
                125 === c.charCodeAt(A) ? ((i = m), A++) : ((i = s), 0 === M && F(b)),
                M--,
                (t =
                  (r =
                    (o = i === s ? void 0 : ((A = o), s)) !== s &&
                    ((i = A), M++, (a = N()), M--, (i = a === s ? void 0 : ((A = i), s)) !== s) &&
                    (c.length > A ? ((a = c.charAt(A)), A++) : ((a = s), 0 === M && F(y)), a !== s)
                      ? (o = [o, i, a])
                      : ((A = r), s)) !== s
                    ? c.substring(t, A)
                    : r) === s && (t = N());
              t !== s;

            )
              n.push(t),
                (o = r = t = A),
                M++,
                125 === c.charCodeAt(A) ? ((i = m), A++) : ((i = s), 0 === M && F(b)),
                M--,
                (t =
                  (r =
                    (o = i === s ? void 0 : ((A = o), s)) !== s &&
                    ((i = A), M++, (a = N()), M--, (i = a === s ? void 0 : ((A = i), s)) !== s) &&
                    (c.length > A ? ((a = c.charAt(A)), A++) : ((a = s), 0 === M && F(y)), a !== s)
                      ? (o = [o, i, a])
                      : ((A = r), s)) !== s
                    ? c.substring(t, A)
                    : r) === s && (t = N());
            125 === c.charCodeAt(A) ? ((t = m), A++) : ((t = s), 0 === M && F(b)), (u = t !== s ? _e(n) : ((A = u), s));
          } else (A = u), (u = s);
          return u;
        }
        function j() {
          for (var e = A, n = [], t = _(); t !== s; ) n.push(t), (t = _());
          return (e = n = Te());
        }
        function _() {
          var e;
          return (
            32 === c.charCodeAt(A) ? ((e = L), A++) : ((e = s), 0 === M && F(pe)),
            e === s &&
              (10 === c.charCodeAt(A) ? ((e = $), A++) : ((e = s), 0 === M && F(fe)), e === s) &&
              (13 === c.charCodeAt(A) ? ((e = z), A++) : ((e = s), 0 === M && F(ge))),
            e
          );
        }
        const Ke = {
          optional: {
            openBrace: "[",
            closeBrace: "]"
          },
          mandatory: {
            openBrace: "{",
            closeBrace: "}"
          }
        };
        function T(e, n) {
          const t = Ke[e] || {};
          return {
            type: e,
            ...t,
            ...n
          };
        }
        if ((n = t()) !== s && A === c.length) return n;
        throw (n !== s && A < c.length && F(Re()), De(k, S < c.length ? c.charAt(S) : null, S < c.length ? C(S, S + 1) : C(S, S)));
      }
      K(l, Error),
        (l.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = Y("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " + c + "\n" + o + " |\n" + u.line + " | " + i + "\n" + o + " | " + Y("", u.column - 1, " ") + Y("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (l.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      function K(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function l(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, l.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function Y(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      ee(p, Error),
        (p.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = ne("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " +
                  c +
                  "\n" +
                  o +
                  " |\n" +
                  u.line +
                  " | " +
                  i +
                  "\n" +
                  o +
                  " | " +
                  ne("", u.column - 1, " ") +
                  ne("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (p.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      function ee(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function p(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, p.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function ne(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      te(f, Error),
        (f.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = re("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " +
                  c +
                  "\n" +
                  o +
                  " |\n" +
                  u.line +
                  " | " +
                  i +
                  "\n" +
                  o +
                  " | " +
                  re("", u.column - 1, " ") +
                  re("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (f.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      function te(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function f(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, f.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function re(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      oe(g, Error),
        (g.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = ie("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " +
                  c +
                  "\n" +
                  o +
                  " |\n" +
                  u.line +
                  " | " +
                  i +
                  "\n" +
                  o +
                  " | " +
                  ie("", u.column - 1, " ") +
                  ie("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (g.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      function oe(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function g(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, g.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function ie(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      ae(d, Error),
        (d.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = ue("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " +
                  c +
                  "\n" +
                  o +
                  " |\n" +
                  u.line +
                  " | " +
                  i +
                  "\n" +
                  o +
                  " | " +
                  ue("", u.column - 1, " ") +
                  ue("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (d.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      function ae(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function d(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, d.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function ue(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      ce(h, Error),
        (h.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = se("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " +
                  c +
                  "\n" +
                  o +
                  " |\n" +
                  u.line +
                  " | " +
                  i +
                  "\n" +
                  o +
                  " | " +
                  se("", u.column - 1, " ") +
                  se("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (h.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      function ce(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function h(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, h.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function se(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      le(m, Error),
        (m.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = pe("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " +
                  c +
                  "\n" +
                  o +
                  " |\n" +
                  u.line +
                  " | " +
                  i +
                  "\n" +
                  o +
                  " | " +
                  pe("", u.column - 1, " ") +
                  pe("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (m.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      function le(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function m(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, m.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function pe(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      function fe(e, n) {
        function t() {
          this.constructor = e;
        }
        (t.prototype = n.prototype), (e.prototype = new t());
      }
      function y(e, n, t, r) {
        e = Error.call(this, e);
        return (
          Object.setPrototypeOf && Object.setPrototypeOf(e, y.prototype),
          (e.expected = n),
          (e.found = t),
          (e.location = r),
          (e.name = "SyntaxError"),
          e
        );
      }
      function ge(e, n, t) {
        return (t = t || " "), e.length > n ? e : ((n -= e.length), e + (t += t.repeat(n)).slice(0, n));
      }
      fe(y, Error),
        (y.prototype.format = function (e) {
          var n = "Error: " + this.message;
          if (this.location) {
            for (var t = null, r = 0; r < e.length; r++)
              if (e[r].source === this.location.source) {
                t = e[r].text.split(/\r\n|\n|\r/g);
                break;
              }
            var o,
              i,
              a,
              u = this.location.start,
              c = this.location.source + ":" + u.line + ":" + u.column;
            t
              ? ((a = this.location.end),
                (o = ge("", u.line.toString().length, " ")),
                (i = t[u.line - 1]),
                (a = (u.line === a.line ? a.column : i.length + 1) - u.column || 1),
                (n +=
                  "\n --\x3e " +
                  c +
                  "\n" +
                  o +
                  " |\n" +
                  u.line +
                  " | " +
                  i +
                  "\n" +
                  o +
                  " | " +
                  ge("", u.column - 1, " ") +
                  ge("", a, "^")))
              : (n += "\n at " + c);
          }
          return n;
        }),
        (y.buildMessage = function (e, n) {
          var t = {
            literal: function (e) {
              return '"' + o(e.text) + '"';
            },
            class: function (e) {
              var n = e.parts.map(function (e) {
                return Array.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e);
              });
              return "[" + (e.inverted ? "^" : "") + n.join("") + "]";
            },
            any: function () {
              return "any character";
            },
            end: function () {
              return "end of input";
            },
            other: function (e) {
              return e.description;
            }
          };
          function r(e) {
            return e.charCodeAt(0).toString(16).toUpperCase();
          }
          function o(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/"/g, '\\"')
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function i(e) {
            return e
              .replace(/\\/g, "\\\\")
              .replace(/\]/g, "\\]")
              .replace(/\^/g, "\\^")
              .replace(/-/g, "\\-")
              .replace(/\0/g, "\\0")
              .replace(/\t/g, "\\t")
              .replace(/\n/g, "\\n")
              .replace(/\r/g, "\\r")
              .replace(/[\x00-\x0F]/g, function (e) {
                return "\\x0" + r(e);
              })
              .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                return "\\x" + r(e);
              });
          }
          function a(e) {
            return t[e.type](e);
          }
          function u(e) {
            var n,
              t,
              r = e.map(a);
            if ((r.sort(), 0 < r.length)) {
              for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && ((r[t] = r[n]), t++);
              r.length = t;
            }
            switch (r.length) {
              case 1:
                return r[0];

              case 2:
                return r[0] + " or " + r[1];

              default:
                return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1];
            }
          }
          function c(e) {
            return e ? '"' + o(e) + '"' : "end of input";
          }
          return "Expected " + u(e) + " but " + c(n) + " found.";
        });
      var de = t,
        he = r,
        t = {
          geometry: {
            signature: "m",
            renderInfo: {
              breakAround: !0,
              pgfkeysArgs: !0
            }
          }
        },
        r = {};
      me = function (e, n) {
        return (me =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array
            ? function (e, n) {
                e.__proto__ = n;
              }
            : function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              }))(e, n);
      };
      (function (e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        function t() {
          this.constructor = e;
        }
        me(e, n), (e.prototype = null === n ? Object.create(n) : ((t.prototype = n.prototype), new t()));
      })(be, (ye = Error));
      var me,
        ye,
        b = be;
      function be() {
        return (null !== ye && ye.apply(this, arguments)) || this;
      }
      function ve(e) {
        var t = Array.isArray(e)
          ? 0 < e.length
            ? "string" == typeof e[0]
              ? Object.fromEntries(
                  e.map(function (e) {
                    if ("string" != typeof e) throw new b("Wrong branch of map function");
                    return [e, {}];
                  })
                )
              : Object.fromEntries(
                  e.map(function (e) {
                    if ("string" == typeof e) throw new b("Wrong branch of map function");
                    return null != e.escapeToken
                      ? [
                          e.content,
                          {
                            escapeToken: e.escapeToken
                          }
                        ]
                      : [e.content, {}];
                  })
                )
            : {}
          : e;
        return function (e) {
          var n;
          return (
            null != e &&
            "macro" === e.type &&
            !(
              !(n = t[e.content]) ||
              ("object" == typeof n && "escapeToken" in n && null != n.escapeToken && n.escapeToken !== e.escapeToken)
            )
          );
        };
      }
      function Ae(e) {
        var n = Array.isArray(e)
          ? Object.fromEntries(
              e.map(function (e) {
                return [e, {}];
              })
            )
          : e;
        return function (e) {
          return !!v.anyEnvironment(e) && ((e = c(e.env)), !!n[e]);
        };
      }
      var v = {
        macro: function (e, n) {
          return null != e && "macro" === e.type && (null == n || e.content === n);
        },
        anyMacro: function (e) {
          return v.macro(e);
        },
        environment: function (e, n) {
          return null != e && !(("environment" !== e.type && "mathenv" !== e.type) || (null != n && c(e.env) !== n));
        },
        anyEnvironment: function (e) {
          return v.environment(e);
        },
        comment: function (e) {
          return null != e && "comment" === e.type;
        },
        parbreak: function (e) {
          return null != e && "parbreak" === e.type;
        },
        whitespace: function (e) {
          return null != e && "whitespace" === e.type;
        },
        whitespaceLike: function (e) {
          return null != e && ("whitespace" === e.type || ("whitespace" === e.type && !0 === e.leadingWhitespace));
        },
        string: function (e, n) {
          return null != e && "string" === e.type && (null == n || e.content === n);
        },
        anyString: function (e) {
          return v.string(e);
        },
        group: function (e) {
          return null != e && "group" === e.type;
        },
        argument: function (e) {
          return null != e && "argument" === e.type;
        },
        blankArgument: function (e) {
          return !!v.argument(e) && "" === e.openMark && "" === e.closeMark && 0 === e.content.length;
        },
        math: function (e) {
          return null != e && ("displaymath" === e.type || "inlinemath" === e.type);
        },
        createMacroMatcher: ve,
        createEnvironmentMatcher: Ae
      };
      function xe(e) {
        return Array.isArray(e)
          ? {
              trimmedStart: Se(e).trimmedStart,
              trimmedEnd: ke(e).trimmedEnd
            }
          : e;
      }
      function Se(e) {
        var n = Me(e).start;
        e.splice(0, n);
        for (var t = 0, r = e; t < r.length; t++) {
          var o = r[t];
          if (!v.comment(o)) break;
          (o.leadingWhitespace || o.sameline) && ((o.leadingWhitespace = !1), delete o.position),
            0 < n && o.sameline && ((o.sameline = !1), delete o.position);
        }
        return {
          trimmedStart: n
        };
      }
      function ke(e) {
        var n = Me(e).end;
        e.splice(e.length - n, n);
        for (var t = e.length - 1; 0 <= t; t--) {
          var r = e[t];
          if (!v.comment(r)) break;
          delete r.suffixParbreak, v.comment(r) && r.leadingWhitespace && !r.sameline && ((r.leadingWhitespace = !1), delete r.position);
        }
        return {
          trimmedEnd: n
        };
      }
      function Me(e) {
        for (var n = 0, t = 0, r = 0, o = e; r < o.length; r++) {
          var i = o[r];
          if (!v.whitespace(i) && !v.parbreak(i)) break;
          n++;
        }
        if (n === e.length)
          return {
            start: n,
            end: 0
          };
        for (var a = e.length - 1; 0 <= a; a--) {
          i = e[a];
          if (!v.whitespace(i) && !v.parbreak(i)) break;
          t++;
        }
        return {
          start: n,
          end: t
        };
      }
      var Ie = {
          geometry: t,
          latex2e: {
            "\\": {
              signature: "!s o"
            },
            _: {
              signature: "m",
              escapeToken: ""
            },
            "^": {
              signature: "m",
              escapeToken: ""
            },
            newcommand: {
              signature: "s +m o +o +m",
              renderInfo: {
                breakAround: !0
              }
            },
            renewcommand: {
              signature: "s +m o +o +m",
              renderInfo: {
                breakAround: !0
              }
            },
            providecommand: {
              signature: "s +m o +o +m",
              renderInfo: {
                breakAround: !0
              }
            },
            newcounter: {
              signature: "m o",
              renderInfo: {
                breakAround: !0
              }
            },
            usecounter: {
              signature: "m"
            },
            setcounter: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            addtocounter: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            stepcounter: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            refstepcounter: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            newlength: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            addtolength: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            settodepth: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            settoheight: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            settowidth: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            stretch: {
              signature: "m"
            },
            hspace: {
              signature: "s m"
            },
            vspace: {
              signature: "s m",
              renderInfo: {
                breakAround: !0
              }
            },
            vfill: {
              renderInfo: {
                breakAround: !0
              }
            },
            indent: {
              renderInfo: {
                breakAround: !0
              }
            },
            phantom: {
              signature: "m"
            },
            vphantom: {
              signature: "m"
            },
            hphantom: {
              signature: "m"
            },
            noindent: {
              renderInfo: {
                breakAround: !0
              }
            },
            smallskip: {
              renderInfo: {
                breakAround: !0
              }
            },
            medskip: {
              renderInfo: {
                breakAround: !0
              }
            },
            bigskip: {
              renderInfo: {
                breakAround: !0
              }
            },
            smallbreak: {
              renderInfo: {
                breakAround: !0
              }
            },
            medbreak: {
              renderInfo: {
                breakAround: !0
              }
            },
            bigbreak: {
              renderInfo: {
                breakAround: !0
              }
            },
            newline: {
              renderInfo: {
                breakAround: !0
              }
            },
            linebreak: {
              signature: "o",
              renderInfo: {
                breakAround: !0
              }
            },
            nolinebreak: {
              signature: "o",
              renderInfo: {
                breakAround: !0
              }
            },
            clearpage: {
              renderInfo: {
                breakAround: !0
              }
            },
            cleardoublepage: {
              renderInfo: {
                breakAround: !0
              }
            },
            newpage: {
              renderInfo: {
                breakAround: !0
              }
            },
            enlargethispage: {
              signature: "s",
              renderInfo: {
                breakAround: !0
              }
            },
            pagebreak: {
              signature: "o",
              renderInfo: {
                breakAround: !0
              }
            },
            nopagebreak: {
              signature: "o",
              renderInfo: {
                breakAround: !0
              }
            },
            newsavebox: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            sbox: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            savebox: {
              signature: "m o o m",
              renderInfo: {
                breakAround: !0
              }
            },
            mbox: {
              signature: "m"
            },
            makebox: {
              signature: "d() o o m",
              renderInfo: {
                breakAround: !0
              }
            },
            fbox: {
              signature: "m"
            },
            framebox: {
              signature: "o o m",
              renderInfo: {
                breakAround: !0
              }
            },
            frame: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            parbox: {
              signature: "o o o m m",
              renderInfo: {
                breakAround: !0
              }
            },
            raisebox: {
              signature: "m o o m"
            },
            marginpar: {
              signature: "o m",
              renderInfo: {
                breakAround: !0
              }
            },
            colorbox: {
              signature: "o m m",
              renderInfo: {
                breakAround: !0
              }
            },
            fcolorbox: {
              signature: "o m m",
              renderInfo: {
                breakAround: !0
              }
            },
            rotatebox: {
              signature: "o m m"
            },
            scalebox: {
              signature: "m o m"
            },
            reflectbox: {
              signature: "m"
            },
            resizebox: {
              signature: "s m m m"
            },
            newenvironment: {
              signature: "s m o o m m",
              renderInfo: {
                breakAround: !0
              }
            },
            renewenvironment: {
              signature: "s m o o m m",
              renderInfo: {
                breakAround: !0
              }
            },
            newtheorem: {
              signature: "s m o m o",
              renderInfo: {
                breakAround: !0
              }
            },
            newfont: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            alph: {
              signature: "m"
            },
            Alph: {
              signature: "m"
            },
            arabic: {
              signature: "m"
            },
            roman: {
              signature: "m"
            },
            Roman: {
              signature: "m"
            },
            fnsymbol: {
              signature: "m"
            },
            documentclass: {
              signature: "o m",
              renderInfo: {
                breakAround: !0,
                pgfkeysArgs: !0
              }
            },
            usepackage: {
              signature: "o m",
              renderInfo: {
                breakAround: !0,
                pgfkeysArgs: !0
              }
            },
            item: {
              signature: "o",
              renderInfo: {
                hangingIndent: !0
              }
            },
            value: {
              signature: "m"
            },
            centering: {
              renderInfo: {
                breakAround: !0
              }
            },
            input: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            include: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            includeonly: {
              signature: "m",
              renderInfo: {
                breakAround: !0,
                pgfkeysArgs: !0
              }
            },
            discretionary: {
              signature: "m m m"
            },
            hyphenation: {
              signature: "m m m"
            },
            footnote: {
              signature: "o m",
              renderInfo: {
                inParMode: !0
              }
            },
            footnotemark: {
              signature: "o"
            },
            footnotetext: {
              signature: "o m",
              renderInfo: {
                inParMode: !0
              }
            },
            caption: {
              signature: "o m",
              renderInfo: {
                inParMode: !0,
                breakAround: !0
              }
            },
            sqrt: {
              signature: "o m",
              renderInfo: {
                inMathMode: !0
              }
            },
            frac: {
              signature: "m m",
              renderInfo: {
                inMathMode: !0
              }
            },
            stackrel: {
              signature: "m m"
            },
            ensuremath: {
              signature: "m",
              renderInfo: {
                inMathMode: !0
              }
            },
            abstract: {
              signature: "m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            maketitle: {
              renderInfo: {
                breakAround: !0
              }
            },
            doublespacing: {
              renderInfo: {
                breakAround: !0
              }
            },
            singlespacing: {
              renderInfo: {
                breakAround: !0
              }
            },
            author: {
              signature: "m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            date: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            thanks: {
              signature: "m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            title: {
              signature: "o m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            pagenumbering: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            pagestyle: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            thispagestyle: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            definecolor: {
              signature: "m m m",
              renderInfo: {
                breakAround: !0
              }
            },
            pagecolor: {
              signature: "o m",
              renderInfo: {
                breakAround: !0
              }
            },
            nopagecolor: {
              renderInfo: {
                breakAround: !0
              }
            },
            multicolumn: {
              signature: "m m m"
            },
            includegraphics: {
              signature: "s o o m",
              renderInfo: {
                breakAround: !0,
                pgfkeysArgs: !0
              }
            },
            rule: {
              signature: "o m m"
            },
            part: {
              signature: "s o m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            chapter: {
              signature: "s o m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            section: {
              signature: "s o m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            subsection: {
              signature: "s o m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            subsubsection: {
              signature: "s o m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            paragraph: {
              signature: "s o m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            subparagraph: {
              signature: "s o m",
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            appendix: {
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            frontmatter: {
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            mainmatter: {
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            backmatter: {
              renderInfo: {
                breakAround: !0,
                inParMode: !0
              }
            },
            bibitem: {
              signature: "o m",
              renderInfo: {
                hangingIndent: !0
              }
            },
            cite: {
              signature: "o m"
            },
            textrm: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            textit: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            textmd: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            textbf: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            textup: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            textsl: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            textsf: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            textsc: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            texttt: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            emph: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            textnormal: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            uppercase: {
              signature: "m",
              renderInfo: {
                inParMode: !0
              }
            },
            mathbf: {
              signature: "m"
            },
            mathsf: {
              signature: "m"
            },
            mathtt: {
              signature: "m"
            },
            mathit: {
              signature: "m"
            },
            mathnormal: {
              signature: "m"
            },
            mathcal: {
              signature: "m"
            },
            mathrm: {
              signature: "m"
            },
            setlength: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            ref: {
              signature: "s m"
            },
            label: {
              signature: "o m"
            },
            printbibliography: {
              renderInfo: {
                breakAround: !0
              }
            },
            addtocontents: {
              signature: "m m",
              renderInfo: {
                breakAround: !0
              }
            },
            addcontentsline: {
              signature: "m m m",
              renderInfo: {
                breakAround: !0
              }
            },
            contentsline: {
              signature: "m m m",
              renderInfo: {
                breakAround: !0
              }
            },
            bibliography: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            bibliographystyle: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            }
          },
          mathtools: {
            mathtoolsset: {
              signature: "m",
              renderInfo: {
                breakAround: !0,
                pgfkeysArgs: !0
              }
            },
            mathllap: {
              signature: "o m"
            },
            mathrlap: {
              signature: "o m"
            },
            mathclap: {
              signature: "o m"
            },
            clap: {
              signature: "m"
            },
            mathmbox: {
              signature: "m"
            },
            mathmakebox: {
              signature: "o o m"
            },
            cramped: {
              signature: "o m"
            },
            crampedllap: {
              signature: "o m"
            },
            crampedrlap: {
              signature: "o m"
            },
            crampedclap: {
              signature: "o m"
            },
            crampedsubstack: {
              signature: "o m"
            },
            smashoperator: {
              signature: "o m"
            },
            newtagform: {
              signature: "m o m m"
            },
            renewtagform: {
              signature: "m o m m"
            },
            usetagform: {
              signature: "m"
            },
            xleftrightarrow: {
              signature: "o m"
            },
            xLeftarrow: {
              signature: "o m"
            },
            xhookleftarrow: {
              signature: "o m"
            },
            xmapsto: {
              signature: "o m"
            },
            xRightarrow: {
              signature: "o m"
            },
            xLeftrightarrow: {
              signature: "o m"
            },
            xhookrightarrow: {
              signature: "o m"
            },
            underbracket: {
              signature: "o o m"
            },
            overbracket: {
              signature: "o o m"
            },
            underbrace: {
              signature: "m"
            },
            overbrace: {
              signature: "m"
            },
            shoveleft: {
              signature: "o m"
            },
            shoveright: {
              signature: "o m"
            },
            ArrowBetweenLines: {
              signature: "s o"
            },
            vdotswithin: {
              signature: "m"
            },
            shortdotswithin: {
              signature: "s m"
            },
            DeclarePairedDelimiter: {
              signature: "m m m",
              renderInfo: {
                breakAround: !0
              }
            },
            DeclarePairedDelimiterX: {
              signature: "m o m m m",
              renderInfo: {
                breakAround: !0
              }
            },
            DeclarePairedDelimiterXPP: {
              signature: "m o m m m m m",
              renderInfo: {
                breakAround: !0
              }
            },
            prescript: {
              signature: "m m m"
            },
            DeclareMathSizes: {
              signature: "m m m m"
            },
            newgathered: {
              signature: "m m m m"
            },
            renewgathered: {
              signature: "m m m m"
            },
            splitfrac: {
              signature: "m m"
            },
            splitdfrac: {
              signature: "m m"
            },
            xmathstrut: {
              signature: "o m"
            },
            newtheorem: {
              signature: "s m o m o",
              renderInfo: {
                breakAround: !0
              }
            },
            theoremstyle: {
              signature: "m",
              renderInfo: {
                breakAround: !0
              }
            },
            newtheoremstyle: {
              signature: "m m m m m m m m m",
              renderInfo: {
                breakAround: !0
              }
            },
            text: {
              signature: "m",
              renderInfo: {
                inMathMode: !1
              }
            },
            mathbb: {
              signature: "m"
            },
            mathscr: {
              signature: "m"
            },
            mathfrak: {
              signature: "m"
            },
            frak: {
              signature: "m"
            },
            Bdd: {
              signature: "m"
            },
            bold: {
              signature: "m"
            },
            operatorname: {
              signature: "s m"
            },
            DeclareMathOperator: {
              signature: "s m m",
              renderInfo: {
                breakAround: !0
              }
            }
          },
          nicematrix: {
            NiceMatrixOptions: {
              signature: "m",
              renderInfo: {
                pgfkeysArgs: !0,
                breakAround: !0
              }
            }
          },
          math: {
            subscript: {
              signature: "m",
              renderInfo: {
                inMathMode: !0
              }
            },
            superscript: {
              signature: "m",
              renderInfo: {
                inMathMode: !0
              }
            },
            subsuperscript: {
              signature: "m m",
              renderInfo: {
                inMathMode: !0
              }
            }
          },
          other: {
            textcolor: {
              signature: "m m"
            },
            color: {
              signature: "m m"
            }
          }
        },
        we = {
          geometry: r,
          latex2e: {
            document: {
              processContent: function (e) {
                return xe(e), e;
              }
            },
            array: {
              signature: "o m",
              renderInfo: {
                alignContent: !0
              }
            },
            figure: {
              signature: "o"
            },
            "figure*": {
              signature: "o"
            },
            filecontents: {
              signature: "o m"
            },
            "filecontents*": {
              signature: "o m"
            },
            minipage: {
              signature: "o o o m"
            },
            picture: {
              signature: "r() d()"
            },
            tabbing: {
              renderInfo: {
                alignContent: !0
              }
            },
            table: {
              signature: "o"
            },
            tabular: {
              signature: "o m",
              renderInfo: {
                alignContent: !0
              }
            },
            "tabular*": {
              signature: "m o m",
              renderInfo: {
                alignContent: !0
              }
            },
            math: {
              renderInfo: {
                inMathMode: !0
              }
            }
          },
          mathtools: {
            crampedsubarray: {
              signature: "m",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            matrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            bmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            pmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            vmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            Bmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            Vmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            smallmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            psmallmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            vsmallmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            bsmallmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            Bsmallmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            Vsmallmatrix: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "matrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "bmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "pmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "vmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "Bmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "Vmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "smallmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "psmallmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "bsmallmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "vsmallmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "Bsmallmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "Vsmallmatrix*": {
              signature: "o",
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            multilined: {
              signature: "o o",
              renderInfo: {
                inMathMode: !0
              }
            },
            cases: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "cases*": {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            dcases: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "dcases*": {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            rcases: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "rcases*": {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            drcases: {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            "drcases*": {
              renderInfo: {
                alignContent: !0,
                inMathMode: !0
              }
            },
            spreadlines: {
              signature: "m",
              renderInfo: {
                inMathMode: !0
              }
            },
            lgathered: {
              signature: "o",
              renderInfo: {
                inMathMode: !0
              }
            },
            rgathered: {
              signature: "o",
              renderInfo: {
                inMathMode: !0
              }
            },
            "align*": {
              renderInfo: {
                inMathMode: !0,
                alignContent: !0
              }
            },
            align: {
              renderInfo: {
                inMathMode: !0,
                alignContent: !0
              }
            },
            aligned: {
              renderInfo: {
                inMathMode: !0,
                alignContent: !0
              }
            },
            "alignat*": {
              renderInfo: {
                inMathMode: !0,
                alignContent: !0
              }
            },
            alignat: {
              renderInfo: {
                inMathMode: !0,
                alignContent: !0
              }
            },
            "equation*": {
              renderInfo: {
                inMathMode: !0
              }
            },
            equation: {
              renderInfo: {
                inMathMode: !0
              }
            },
            "gather*": {
              renderInfo: {
                inMathMode: !0
              }
            },
            gather: {
              renderInfo: {
                inMathMode: !0
              }
            },
            "multline*": {
              renderInfo: {
                inMathMode: !0
              }
            },
            multline: {
              renderInfo: {
                inMathMode: !0
              }
            },
            "flalign*": {
              renderInfo: {
                inMathMode: !0,
                alignContent: !0
              }
            },
            flalign: {
              renderInfo: {
                inMathMode: !0,
                alignContent: !0
              }
            },
            split: {
              renderInfo: {
                inMathMode: !0
              }
            },
            displaymath: {
              renderInfo: {
                inMathMode: !0
              }
            },
            theorem: {
              signature: "o"
            },
            lemma: {
              signature: "o"
            },
            definition: {
              signature: "o"
            },
            proposition: {
              signature: "o"
            },
            corollary: {
              signature: "o"
            },
            remark: {
              signature: "!o"
            },
            example: {
              signature: "!o"
            },
            proof: {
              signature: "o"
            }
          },
          nicematrix: {
            NiceTabular: {
              signature: "o m !o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            NiceMatrixBlock: {
              signature: "!o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            NiceArrayWithDelims: {
              signature: "m m o m !o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            NiceArray: {
              signature: "o m !o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            pNiceArray: {
              signature: "o m !o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            bNiceArray: {
              signature: "o m !o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            BNiceArray: {
              signature: "o m !o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            vNiceArray: {
              signature: "o m !o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            VNiceArray: {
              signature: "o m !o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            NiceMatrix: {
              signature: "!o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            pNiceMatrix: {
              signature: "!o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            bNiceMatrix: {
              signature: "!o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            BNiceMatrix: {
              signature: "!o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            vNiceMatrix: {
              signature: "!o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            },
            VNiceMatrix: {
              signature: "!o",
              renderInfo: {
                pgfkeysArgs: !0,
                alignContent: !0
              }
            }
          },
          math: {},
          other: {}
        };
      function Ce(e) {
        const n = {
          enter: [],
          leave: []
        };
        if (Array.isArray(e)) return n;
        if (o.math(e))
          return {
            enter: ["content"],
            leave: []
          };
        const t = e._renderInfo || {};
        if (null == t.inMathMode) return n;
        if (o.macro(e)) {
          if (!0 === t.inMathMode)
            return {
              enter: ["args"],
              leave: []
            };
          if (!1 === t.inMathMode)
            return {
              enter: [],
              leave: ["args"]
            };
        }
        return o.environment(e)
          ? !0 === t.inMathMode
            ? {
                enter: ["content"],
                leave: []
              }
            : {
                enter: [],
                leave: ["content"]
              }
          : n;
      }
      var Fe = Symbol("continue"),
        Ee = Symbol("skip"),
        Oe = Symbol("exit"),
        Pe = {
          inMathMode: !1,
          hasMathModeAncestor: !1
        };
      function A(e, n, t) {
        const { startingContext: r = Pe, test: m = () => !0, includeArrays: y = !1 } = t || {};
        let b, v;
        function A(n, { key: t, index: e, parents: r, context: o, containingArray: i }) {
          const a =
              (y || !Array.isArray(n)) &&
              m(n, {
                key: t,
                index: e,
                parents: r,
                context: o,
                containingArray: i
              }),
            u =
              b && a
                ? Ne(
                    b(n, {
                      key: t,
                      index: e,
                      parents: r,
                      context: o,
                      containingArray: i
                    })
                  )
                : [Fe];
          if (u[0] === Oe) return u;
          if (u[0] !== Ee)
            if (Array.isArray(n))
              for (let e = 0; -1 < e && e < n.length; e++) {
                const c = n[e],
                  s = A(c, {
                    key: t,
                    index: e,
                    parents: r,
                    context: o,
                    containingArray: n
                  });
                if (s[0] === Oe) return s;
                "number" == typeof s[1] && (e = s[1] - 1);
              }
            else {
              let e = ["content", "args"];
              switch (n.type) {
                case "macro":
                  e = ["args"];
                  break;

                case "comment":
                case "string":
                case "verb":
                case "verbatim":
                  e = [];
              }
              const l = Ce(n);
              for (const p of e) {
                const f = n[p],
                  g = [n].concat(r);
                if (null != f) {
                  const d = {
                      ...o
                    },
                    h =
                      (l.enter.includes(p)
                        ? ((d.inMathMode = !0), (d.hasMathModeAncestor = !0))
                        : l.leave.includes(p) && (d.inMathMode = !1),
                      A(f, {
                        key: p,
                        index: void 0,
                        parents: g,
                        context: d,
                        containingArray: void 0
                      }));
                  if (h[0] === Oe) return h;
                }
              }
            }
          return v && a
            ? Ne(
                v(n, {
                  key: t,
                  index: e,
                  parents: r,
                  context: o,
                  containingArray: i
                })
              )
            : u;
        }
        "function" == typeof n ? (b = n) : n && "object" == typeof n && ((b = n.enter), (v = n.leave)),
          A(e, {
            key: void 0,
            index: void 0,
            parents: [],
            containingArray: void 0,
            context: {
              ...r
            }
          });
      }
      function Ne(e) {
        return null == e ? [Fe] : Array.isArray(e) ? e : "number" == typeof e ? [Fe, e] : [e];
      }
      function je(e) {
        return de.parse(e, {
          startRule: "math"
        });
      }
      function _e(e) {
        var n = e.mathEnvs,
          e = e.mathMacros,
          t = v.createEnvironmentMatcher(n),
          r = v.createMacroMatcher(e);
        return function (e) {
          A(
            e,
            function (e) {
              if (v.anyMacro(e))
                for (var n = 0, t = e.args || []; n < t.length; n++) {
                  var r = t[n];
                  0 < r.content.length && !Te(r.content) && (r.content = je(c(r.content)));
                }
              v.anyEnvironment(e) && !Te(e.content) && (e.content = je(c(e.content)));
            },
            {
              test: function (e) {
                return t(e) || r(e);
              }
            }
          );
        };
      }
      function Te(e) {
        return !e.some(function (e) {
          return (v.anyString(e) && 1 < e.content.length) || v.string(e, "^") || v.string(e, "_");
        });
      }
      function Ue(e, n) {
        return (
          null != n &&
            (e._renderInfo = {
              ...(e._renderInfo || {}),
              ...n
            }),
          e
        );
      }
      var qe = {};
      function Re(e) {
        return (qe[(e = void 0 === e ? "" : e)] = qe[e] || he.parse(e)), qe[e];
      }
      var De = {
          "*": {
            openMark: "",
            closeMark: ""
          },
          "{": {
            openMark: "{",
            closeMark: "}"
          },
          "[": {
            openMark: "[",
            closeMark: "]"
          },
          "(": {
            openMark: "(",
            closeMark: ")"
          }
        },
        Ve = new Set(
          Object.values(De)
            .map(function (e) {
              return e.closeMark;
            })
            .filter(function (e) {
              return e;
            })
        );
      function Be(e) {
        for (var n = [], t = 0, r = e.split(""); t < r.length; t++) {
          var o = r[t];
          if (!Ve.has(o)) {
            var i = De[o];
            if (null == i) throw new b('Unknown open/close mark type "'.concat(o, '"'));
            n.push(i);
          }
        }
        return n;
      }
      function x(e, n) {
        var t, r;
        return (
          "string" == typeof e && (e = We(e)),
          Array.isArray(e) || "argument" !== e.type
            ? ((t = "{"),
              (r = "}"),
              void 0 !== n && void 0 !== n.openMark && (t = n.openMark),
              void 0 !== n && void 0 !== n.closeMark && (r = n.closeMark),
              void 0 !== n && n.braces && (n = Be(n.braces))[0] && ((t = n[0].openMark), (r = n[0].closeMark)),
              {
                type: "argument",
                content: (e = Array.isArray(e) ? e : [e]),
                openMark: t,
                closeMark: r
              })
            : e
        );
      }
      function We(e) {
        return "string" == typeof e
          ? {
              type: "string",
              content: e
            }
          : e;
      }
      function Le(n, e, t) {
        if ((void 0 === t && (t = 0), "string" == typeof e || !e.type))
          throw new b('argSpec must be an already-parsed argument specification, not "'.concat(JSON.stringify(e), '"'));
        var r = null,
          o = t,
          i = e.noLeadingWhitespace
            ? function () {}
            : function () {
                for (; o < n.length && v.whitespace(n[o]); ) o++;
              },
          a = e.openBrace || "",
          u = e.closeBrace || "",
          c = "mandatory" === e.type && "{" === a && "}" === u;
        function s() {
          var t = null,
            e = null;
          return (
            null !=
              (t =
                a &&
                (t = n.findIndex(function (e, n) {
                  return o <= n && v.string(e, a);
                })) < o
                  ? null
                  : t) &&
              (e = n.findIndex(function (e, n) {
                return t + 1 <= n && v.string(e, u);
              })) <
                t + 1 &&
              (e = null),
            [t, e]
          );
        }
        i();
        var l = n[o];
        if (null == l || v.comment(l) || v.parbreak(l))
          return {
            argument: r,
            nodesRemoved: 0
          };
        switch (e.type) {
          case "mandatory":
            if (c) {
              var p = [l],
                r = x((p = v.group(l) ? l.content : p), {
                  openMark: a,
                  closeMark: u
                });
              o++;
              break;
            }

          case "optional":
            if (v.string(l, a)) {
              var p = s(),
                f = p[0],
                p = p[1];
              if (null != f && null != p) {
                (r = x(n.slice(f + 1, p), {
                  openMark: a,
                  closeMark: u
                })),
                  (o = p + 1);
                break;
              }
            }
            break;

          case "optionalStar":
            v.string(l, "*") &&
              ((r = x([l], {
                openMark: "",
                closeMark: ""
              })),
              o++);
            break;

          default:
            "Don't know how to find an argument of argspec type \"".concat(e.type, '"');
        }
        i = r ? o - t : 0;
        return (
          n.splice(t, i),
          {
            argument: r,
            nodesRemoved: i
          }
        );
      }
      function $e(e, n, t) {
        void 0 === t && (t = 0);
        for (var r = [], o = 0, i = 0, a = (n = "string" == typeof n ? Re(n) : n); i < a.length; i++) {
          var u = Le(e, a[i], t),
            c = u.argument,
            u = u.nodesRemoved;
          c
            ? (r.push(c), (o += u))
            : r.push(
                x([], {
                  openMark: "",
                  closeMark: ""
                })
              );
        }
        return {
          args: r,
          nodesRemoved: o
        };
      }
      function ze(e, n) {
        var t = v.createMacroMatcher(n);
        function r() {
          for (; 0 <= o && !t(e[o]); ) o--;
        }
        for (o = e.length - 1; 0 <= o; ) {
          if ((r(), o < 0)) return;
          var o,
            i = o,
            a = e[i],
            u = n[a.content];
          Ue(a, u.renderInfo),
            null == u.signature ? o-- : (o = (null != a.args || (o++, (u = $e(e, u.signature, o).args), (a.args = u)), i - 1));
        }
      }
      function Ge(e, n) {
        var t;
        n.signature && null == e.args && ((t = $e(e.content, n.signature).args), (e.args = t)),
          Ue(e, n.renderInfo),
          "function" == typeof n.processContent && (e.content = n.processContent(e.content));
      }
      function Ze(e, n, r) {
        var t = Object.fromEntries(
            Object.entries(n).filter(function (e) {
              e[0];
              e = e[1];
              return void 0 !== e.renderInfo && !0 === e.renderInfo.inMathMode;
            })
          ),
          o = Object.fromEntries(
            Object.entries(r).filter(function (e) {
              e[0];
              e = e[1];
              return void 0 !== e.renderInfo && !0 === e.renderInfo.inMathMode;
            })
          ),
          i = _e({
            mathEnvs: Object.keys(o),
            mathMacros: Object.keys(t)
          }),
          a = v.createEnvironmentMatcher(r),
          u = v.createEnvironmentMatcher(o);
        A(
          e,
          {
            enter: function (e) {
              Array.isArray(e) && ze(e, t);
            },
            leave: function (e) {
              if (u(e)) {
                var n = c(e.env),
                  t = r[n];
                if (!t) throw new b('Could not find environment info for environment "'.concat(n, '"'));
                Ge(e, t);
              }
            }
          },
          {
            includeArrays: !0
          }
        ),
          i(e),
          A(
            e,
            {
              enter: function (e) {
                Array.isArray(e) && ze(e, n);
              },
              leave: function (e) {
                if (a(e)) {
                  var n = c(e.env),
                    t = r[n];
                  if (!t) throw new b('Could not find environment info for environment "'.concat(n, '"'));
                  Ge(e, t);
                }
              }
            },
            {
              includeArrays: !0
            }
          );
      }
      var Xe = function (e) {
          A(e, function (e) {
            var n;
            (v.math(e) || v.anyEnvironment(e)) &&
              ((n = e.content[0]),
              v.comment(n) && n.sameline
                ? ((n.suffixParbreak = !1), ke(e.content), (n = Se(e.content.slice(1)).trimmedStart), e.content.splice(1, n))
                : xe(e.content));
          });
        },
        Je = function (e) {
          xe(e.content);
        },
        He = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var r, o = 0, i = n.length; o < i; o++) (!r && o in n) || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
          return e.concat(r || Array.prototype.slice.call(n));
        };
      function Qe(e, n) {
        var t = Object.assign.apply(Object, He([{}], Object.values(Ie), !1)),
          r = Object.assign.apply(Object, He([{}], Object.values(we), !1)),
          e = de.parse(
            e,
            "math" === n
              ? {
                  startRule: "math"
                }
              : void 0
          );
        return Ze(e, t, r), Xe(e), Je(e), e;
      }
      var Ke = function () {
        return (Ke =
          Object.assign ||
          function (e) {
            for (var n, t = 1, r = arguments.length; t < r; t++)
              for (var o in (n = arguments[t])) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            return e;
          }).apply(this, arguments);
      };
      function en(e, n, t) {
        return e.split(n).join(t);
      }
      function nn(e) {
        var n = "\\begin{math}",
          t = "\\end{math}";
        return (e = en(e, n, "")), (e = en(e, t, "")), "".concat(n).concat(e).concat(t);
      }
      function tn(e, n) {
        for (var t, r, o = [e]; void 0 !== (t = o.shift()); )
          Array.isArray(t)
            ? o.unshift.apply(o, t)
            : (t.position &&
                ((r = function (e) {
                  (e.offset += n), 1 === e.line && (e.column += n);
                })(t.position.start),
                r(t.position.end)),
              "content" in t && t.content && "string" != typeof t.content && o.unshift.apply(o, t.content));
      }
      function rn(e) {
        e = Qe(nn(e));
        return tn(e, -"\\begin{math}".length), B(e);
      }
      function on(e, n) {
        void 0 === n && (n = {});
        n = Ke(
          Ke(
            {},
            {
              silent: !1
            }
          ),
          n
        );
        try {
          return rn(e);
        } catch (e) {
          if (!n.silent) throw e;
        }
        return [];
      }
      var an = function (e, n, t) {
        if (t || 2 === arguments.length)
          for (var r, o = 0, i = n.length; o < i; o++) (!r && o in n) || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
        return e.concat(r || Array.prototype.slice.call(n));
      };
      function un(e) {
        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
      var cn = sn;
      function sn(e) {
        this.depth = e.depth;
      }
      function ln(e) {
        for (
          var n,
            t,
            r = {
              ">=": "\\geq",
              "<=": "\\leq",
              ">": "\\gt",
              "<": "\\le",
              "=": "\\eq"
            },
            o = Object.keys(r),
            i = Object.values(r),
            a = new RegExp(
              "(" +
                o
                  .map(function (e) {
                    return un(e);
                  })
                  .join("|") +
                ")",
              "g"
            ),
            u = [],
            c = an([], e, !0),
            s = new cn({
              depth: 0
            });
          void 0 !== (n = c.shift());

        )
          if (n instanceof cn) s = n;
          else if ("string" == typeof n)
            for (var l = null; null !== (l = a.exec(n)); )
              u.push({
                text: l[0],
                depth: s.depth
              });
          else if ("isFunction" in n) {
            c.unshift(s);
            for (var p = 0, f = n.arguments; p < f.length; p++) {
              var g = f[p];
              c.unshift.apply(c, g);
            }
            c.unshift(
              new cn({
                depth: s.depth + 1
              })
            );
          } else
            "isSymbol" in n &&
              -1 !== (t = i.indexOf(n.code)) &&
              u.push({
                text: o[t],
                depth: s.depth
              });
        return u;
      }
      function pn(e) {
        for (var n, t = /[\u00C0-\u1FFF\u2C00-\uD7FF]|[^\W0-9]/g, r = [], o = an([], e, !0); void 0 !== (n = o.shift()); )
          if ("string" == typeof n) for (var i = null; null !== (i = t.exec(n)); ) r.push(i[0]);
          else if ("isFunction" in n)
            for (var a = 0, u = n.arguments; a < u.length; a++) {
              var c = u[a];
              o.unshift.apply(o, c);
            }
        return r;
      }
      function fn(e, n) {
        for (var t, r = [], o = an([], e, !0); void 0 !== (t = o.shift()); )
          if ("string" != typeof t)
            if ("isFunction" in t)
              for (var i = 0, a = t.arguments; i < a.length; i++) {
                var u = a[i];
                o.unshift.apply(o, u);
              }
            else "isSymbol" in t && t.code === n && r.push(t);
        return r;
      }
      function gn(e) {
        if (0 === e.length) return !1;
        for (var n = 0, t = e.slice(0, -1); n < t.length; n++) {
          if (
            0 === (o = ln((r = t[n]))).length ||
            1 < o.length ||
            o.find(function (e) {
              return 0 < e.depth;
            })
          )
            return !1;
          if (0 === pn(r).length) return !1;
          if ("=" !== o[0].text) return !1;
          if (0 !== fn(r, "\\Updownarrow").length) return !1;
        }
        for (var r, o, i = 0, a = e.slice(-1); i < a.length; i++) {
          if (
            1 < (o = ln((r = a[i]))).length ||
            o.find(function (e) {
              return 0 < e.depth;
            })
          )
            return !1;
          if (1 === o.length && "=" !== o[0].text) return !1;
        }
        return !0;
      }
      function dn(e) {
        for (var n = e.length - 2; 0 <= n; n--) {
          var t = 0 < e[n].length ? e[n][e[n].length - 1] : null;
          if (t && "string" != typeof t && "isSymbol" in t)
            if ("\\Updownarrow" === t.code) return ((t = e.slice(0, n + 1))[n] = t[n].slice()), t[n].pop(), t;
        }
        return e;
      }
      function hn(e) {
        if (0 === e.length) return !1;
        for (var n = 0, t = dn(e); n < t.length; n++) {
          var r = t[n],
            o = ln(r);
          if (
            0 === o.length ||
            1 < o.length ||
            o.find(function (e) {
              return 0 < e.depth;
            })
          )
            return !1;
          if ("=" !== o[0].text) return !1;
          if (0 === pn(r).length) return !1;
        }
        return !0;
      }
      mn = function (e, n) {
        return (mn =
          Object.setPrototypeOf ||
          ({
            __proto__: []
          } instanceof Array
            ? function (e, n) {
                e.__proto__ = n;
              }
            : function (e, n) {
                for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
              }))(e, n);
      };
      (function (e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
        function t() {
          this.constructor = e;
        }
        mn(e, n), (e.prototype = null === n ? Object.create(n) : ((t.prototype = n.prototype), new t()));
      })(bn, (yn = Error));
      var mn,
        yn,
        w,
        C,
        F,
        E = bn;
      function bn(e, n) {
        n = yn.call(this, n) || this;
        return (n.type = e), n;
      }
      ((t = w = w || {}).Degrees = "deg"),
        (t.Radians = "rad"),
        ((r = C = C || {}).Period = "."),
        (r.Comma = ","),
        ((t = F = F || {}).Exact = "exact"),
        (t.Numeric = "numeric"),
        (t.ScientificNotation = "scientific");
      var vn = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var r, o = 0, i = n.length; o < i; o++) (!r && o in n) || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
          return e.concat(r || Array.prototype.slice.call(n));
        },
        O = Symbol("escape on"),
        P = Symbol("escape off");
      function An(e) {
        for (var n, t = [], r = vn([], e, !0), o = !0, i = !1; void 0 !== (n = r.shift()); )
          if (n === O) o = !0;
          else if (n === P) o = !1;
          else if ("string" == typeof n)
            i && n.match(/^[a-zA-Z]/) && t.push(" "),
              o &&
                (n = n.replace(/[&%\$#_{}~\^\\]/g, function (e) {
                  return "\\" + e;
                })),
              t.push(n),
              (i = !1);
          else if ("isSymbol" in n) t.push(n.code), (i = !0);
          else if ("isFunction" in n) {
            if ("\\rootof" === n.code) {
              t.push("\\sqrt");
              for (var a = n.arguments.length - 1; 0 <= a; a--) {
                r.unshift(O), r.unshift(0 === a ? "]" : "}"), r.unshift(P);
                for (var u = 0, c = n.arguments[a].slice().reverse(); u < c.length; u++) {
                  var s = c[u];
                  r.unshift(s);
                }
                r.unshift(O), r.unshift(0 === a ? "[" : "{"), r.unshift(P);
              }
            } else if (("\\superscript" !== n.code && "\\subscript" !== n.code) || 2 !== n.arguments.length) {
              var l = U(n.code),
                p = l && "function" === l.type && l.braces ? l.braces : ["{", "}"],
                f = p[0],
                g = p[1],
                p = l && "function" === l.type && l.includePreviousSiblingAsArgument;
              p || (r.unshift(O), t.push(n.code), r.unshift(P));
              for (var d = 0, h = n.arguments.slice(p ? 1 : 0).reverse(); d < h.length; d++) {
                var m = h[d];
                r.unshift(O), r.unshift(g), r.unshift(P);
                for (var y = 0, b = m.slice().reverse(); y < b.length; y++) {
                  s = b[y];
                  r.unshift(s);
                }
                r.unshift(O), r.unshift(f), r.unshift(P);
              }
              if (p) {
                r.unshift(O), r.unshift(n.code), r.unshift(P);
                for (var v = 0, A = n.arguments.slice(0, 1).reverse(); v < A.length; v++) {
                  m = A[v];
                  r.unshift(O), r.unshift("}"), r.unshift(P);
                  for (var x = 0, S = m.slice().reverse(); x < S.length; x++) {
                    s = S[x];
                    r.unshift(s);
                  }
                  r.unshift(O), r.unshift("{"), r.unshift(P);
                }
              }
            } else
              r.unshift(O),
                r.unshift("}"),
                r.unshift(P),
                r.unshift.apply(r, n.arguments[1].slice().reverse()),
                r.unshift(O),
                r.unshift("{"),
                r.unshift("\\superscript" === n.code ? "^" : "_"),
                r.unshift("}"),
                r.unshift(P),
                r.unshift.apply(r, n.arguments[0].slice().reverse()),
                r.unshift(O),
                r.unshift("{"),
                r.unshift(P);
            i = !0;
          }
        return t.join("").trim();
      }
      function xn(e, n) {
        for (
          var t = null != (n = null == n ? void 0 : n.decimalSeparator) ? n : C.Period, r = ((e = Sn(e)), ""), o = !1, i = 0;
          i < e.length;
          i++
        ) {
          var a = e[i];
          if ("\\" !== a || o) {
            if ((o && (r += "\\"), (r += a), "," === a && !o)) {
              var a = 0 < i ? e[i - 1] : "",
                u = e.length > i + 1 ? e[i + 1] : "";
              if (t === C.Comma && a.match(/^[0-9]$/) && u.match(/^[0-9]$/)) continue;
              r += "\\ ";
            }
            o = !1;
          } else o = !0;
        }
        return r;
      }
      function Sn(e) {
        for (var n = "", t = !1, r = 0; r < e.length; r++) {
          var o,
            i = e[r];
          "\\" !== i || t
            ? ("," !== i && " " !== i) || !t
              ? (t && (n += "\\"), (n += i), (t = !1))
              : ((t = !1),
                (i = e.length > r + 1 ? e[r + 1] : ""),
                (((o = 0 <= r - 1 ? e[r - 1] : "").match(/^[a-zA-Z]$/) && i.match(/^[a-zA-Z]$/)) ||
                  (o.match(/^[0-9]$/) && i.match(/^[0-9]$/))) &&
                  (n += " "))
            : (t = !0);
        }
        return n;
      }
      var N = function (e, a, t, u) {
          function c(n) {
            return n instanceof t
              ? n
              : new t(function (e) {
                  e(n);
                });
          }
          return new (t = t || Promise)(function (n, t) {
            function r(e) {
              try {
                i(u.next(e));
              } catch (e) {
                t(e);
              }
            }
            function o(e) {
              try {
                i(u.throw(e));
              } catch (e) {
                t(e);
              }
            }
            function i(e) {
              e.done ? n(e.value) : c(e.value).then(r, o);
            }
            i((u = u.apply(e, a || [])).next());
          });
        },
        kn = function (e, t) {
          var r,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1];
              },
              trys: [],
              ops: []
            },
            n = {
              next: u(0),
              throw: u(1),
              return: u(2)
            };
          return (
            "function" == typeof Symbol &&
              (n[Symbol.iterator] = function () {
                return this;
              }),
            n
          );
          function u(n) {
            return function (e) {
              return c([n, e]);
            };
          }
          function c(n) {
            if (r) throw new TypeError("Generator is already executing.");
            for (; a; )
              try {
                if (
                  ((r = 1),
                  o &&
                    (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) &&
                    !(i = i.call(o, n[1])).done)
                )
                  return i;
                switch (((o = 0), (n = i ? [2 & n[0], i.value] : n)[0])) {
                  case 0:
                  case 1:
                    i = n;
                    break;

                  case 4:
                    return (
                      a.label++,
                      {
                        value: n[1],
                        done: !1
                      }
                    );

                  case 5:
                    a.label++, (o = n[1]), (n = [0]);
                    continue;

                  case 7:
                    (n = a.ops.pop()), a.trys.pop();
                    continue;

                  default:
                    if (!(i = 0 < (i = a.trys).length && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
                      a = 0;
                      continue;
                    }
                    if (3 === n[0] && (!i || (n[1] > i[0] && n[1] < i[3]))) a.label = n[1];
                    else if (6 === n[0] && a.label < i[1]) (a.label = i[1]), (i = n);
                    else {
                      if (!(i && a.label < i[2])) {
                        i[2] && a.ops.pop(), a.trys.pop();
                        continue;
                      }
                      (a.label = i[2]), a.ops.push(n);
                    }
                }
                n = t.call(e, a);
              } catch (e) {
                (n = [6, e]), (o = 0);
              } finally {
                r = i = 0;
              }
            if (5 & n[0]) throw n[1];
            return {
              value: n[0] ? n[1] : void 0,
              done: !0
            };
          }
        },
        Mn = function (e, n, t) {
          if (t || 2 === arguments.length)
            for (var r, o = 0, i = n.length; o < i; o++) (!r && o in n) || ((r = r || Array.prototype.slice.call(n, 0, o))[o] = n[o]);
          return e.concat(r || Array.prototype.slice.call(n));
        };
      function In(e) {
        for (var n = [], t = 0; t < e.length; t++) {
          var r = e[t];
          if ("string" != typeof r);
          else {
            var o = r.indexOf("=");
            if (-1 !== o) {
              o = r.substring(0, o);
              0 < o.length && n.push(o);
              break;
            }
          }
          n.push(r);
        }
        return n;
      }
      (j.prototype._parseEquations = function (u, c) {
        return N(this, void 0, void 0, function () {
          var n,
            t,
            r,
            o,
            i,
            a = this;
          return kn(this, function (e) {
            switch (e.label) {
              case 0:
                (n = []), (t = 0), (r = u), (e.label = 1);

              case 1:
                return t < r.length ? ((o = r[t]), [4, this._httpClient.parseGoogleDocsEquations(o, c)]) : [3, 4];

              case 2:
                if (void 0 === (o = e.sent()).operator && c.expectBothSides)
                  throw new E("NO_OPERATORS", "Server didn't detect any operators in the equation.");
                if (void 0 === o.rhs && c.expectBothSides)
                  throw new E("NO_RIGHT_HAND_SIDE", "Server didn't detect any right hand side in the equation.");
                if (
                  o.units &&
                  !c.ignoreMixedUnits &&
                  Object.values(o.units).some(function (e) {
                    return 1 < e.length;
                  })
                )
                  throw new E("DETECTED_MIXED_UNITS", "An equation contains mixed units.");
                n.push({
                  operator: o.operator,
                  lhs: o.lhs,
                  rhs: o.rhs,
                  lhsVariables: o.lhsVariables,
                  rhsVariables: o.rhsVariables || [],
                  useThousandsSeparator: o.useThousandsSeparator,
                  units: o.units
                }),
                  (e.label = 3);

              case 3:
                return t++, [3, 1];

              case 4:
                return (
                  (i = n
                    .map(function (e) {
                      return Mn(Mn([], e.lhsVariables, !0), e.rhsVariables || [], !0);
                    })
                    .flat()
                    .filter(function (e, n, t) {
                      return t.indexOf(e) === n;
                    })
                    .sort(function (e, n) {
                      var t = a._variablePriorityList.indexOf(e),
                        r = a._variablePriorityList.indexOf(n);
                      if (-1 !== t && -1 !== r) {
                        if (t < r) return -1;
                        if (r < t) return 1;
                      } else {
                        if (-1 !== t) return -1;
                        if (-1 !== r) return 1;
                      }
                      return e.length < n.length ? -1 : e.length > n.length ? 1 : e.localeCompare(n);
                    })),
                  [
                    2,
                    {
                      sages: n,
                      allVariables: i
                    }
                  ]
                );
            }
          });
        });
      }),
        (j.prototype._solveForVariableValues = function (s, l, p) {
          return N(this, void 0, void 0, function () {
            var n, t, r, o, i, a, u, c;
            return kn(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (n = p.decimals),
                    (t = p.decimalSeparator),
                    (r = p.angularUnit),
                    (o = p.resultMode),
                    (i = p.replaceMixedNumber),
                    (a = p.ignoreMixedUnits),
                    [
                      4,
                      this._parseEquations(s, {
                        decimalSeparator: t,
                        replaceMixedNumber: i,
                        ignoreMixedUnits: a,
                        expectBothSides: !0
                      })
                    ]
                  );

                case 1:
                  return (
                    (i = e.sent()),
                    (a = i.sages),
                    (c = i.allVariables),
                    (u = c
                      .slice()
                      .sort(function (e, n) {
                        var t = l.indexOf(e),
                          r = l.indexOf(n);
                        if (-1 !== t && -1 !== r) {
                          if (t < r) return -1;
                          if (r < t) return 1;
                        } else {
                          if (-1 !== t) return -1;
                          if (-1 !== r) return 1;
                        }
                        return e.length < n.length ? -1 : e.length > n.length ? 1 : e.localeCompare(n);
                      })
                      .slice(0, s.length)),
                    (c = c.filter(function (e) {
                      return !u.includes(e);
                    })),
                    [
                      4,
                      this._httpClient.solve(
                        a.map(function (e) {
                          return e.lhs + e.operator + e.rhs;
                        }),
                        u,
                        c,
                        {
                          variableValues: {},
                          resultMode: o,
                          angularUnit: r,
                          decimals: n,
                          decimalSeparator: t,
                          outputType: "sage",
                          useThousandsSeparator: !1,
                          removeRedundantResults: !1
                        }
                      )
                    ]
                  );

                case 2:
                  if (((c = e.sent()), Array.isArray(c)))
                    return [
                      2,
                      c.reduce(function (e, n, t) {
                        var r = n.split("==");
                        if (2 !== r.length)
                          throw new b("Unable to assign variables values due to invalid result from server: '".concat(n, "'."));
                        return (e[r[0].trim()] = r[1].trim()), e;
                      }, {})
                    ];
                  throw new b("Expected type 'array' but got '".concat(typeof c, "' from the server!"));
              }
            });
          });
        }),
        (j.prototype.calculate = function (f, g) {
          return N(this, void 0, void 0, function () {
            var n, t, r, o, i, a, u, c, s, l, p;
            return kn(this, function (e) {
              switch (e.label) {
                case 0:
                  if (
                    ((n = g && void 0 !== g.decimals ? g.decimals : 2),
                    (t = g && void 0 !== g.decimalSeparator ? g.decimalSeparator : C.Period),
                    (r = g && void 0 !== g.angularUnit ? g.angularUnit : w.Degrees),
                    (o = g && void 0 !== g.resultMode ? g.resultMode : F.Exact),
                    (i = !g || void 0 === g.replaceMixedNumber || g.replaceMixedNumber),
                    (a = !(!g || void 0 === g.ignoreMixedUnits) && g.ignoreMixedUnits),
                    0 === f.length)
                  )
                    throw new E("PARAMETER_EMPTY_EQUATIONS", "Equations array is empty.");
                  return [
                    4,
                    this._parseEquations(f.slice(-1), {
                      decimalSeparator: t,
                      replaceMixedNumber: i,
                      ignoreMixedUnits: a,
                      expectBothSides: !1
                    })
                  ];

                case 1:
                  if (((c = e.sent()), (u = c.sages), (c = c.allVariables), 1 !== u.length))
                    throw new b("Invalid amount of equations returned from server.");
                  if (((s = {}), !(0 < (l = f.slice(0, -1)).length))) return [3, 3];
                  if (hn(l))
                    return [
                      4,
                      this._solveForVariableValues(l, c, {
                        decimals: n,
                        decimalSeparator: t,
                        angularUnit: r,
                        resultMode: o,
                        replaceMixedNumber: i,
                        ignoreMixedUnits: a
                      })
                    ];
                  throw new E("INVALID_SOLVABLE_EQUATIONS", "Unable to solve variables.");

                case 2:
                  (s = e.sent()), (e.label = 3);

                case 3:
                  return [
                    4,
                    this._httpClient.calculate(u[0].lhs, c, {
                      variableValues: s,
                      resultMode: o,
                      angularUnit: r,
                      decimals: n,
                      decimalSeparator: t,
                      outputType: "latex",
                      useThousandsSeparator: u[0].useThousandsSeparator
                    })
                  ];

                case 4:
                  if ("string" != typeof (p = e.sent()))
                    throw new b("Expected type 'string' but got '".concat(typeof p, "' from the server!"));
                  return (
                    (p =
                      An(In(f[f.length - 1])) +
                      "=" +
                      xn(p, {
                        decimalSeparator: t
                      })),
                    1 < f.length
                      ? [
                          2,
                          "\\begin{array}{l}\n" +
                            l
                              .map(function (e) {
                                return An(e);
                              })
                              .join("\\\\\n") +
                            "\\\\\n" +
                            p +
                            "\n\\end{array}"
                        ]
                      : [2, p]
                  );
              }
            });
          });
        }),
        (j.prototype.solve = function (l, p) {
          return N(this, void 0, void 0, function () {
            var n, t, r, o, i, a, u, c, s;
            return kn(this, function (e) {
              switch (e.label) {
                case 0:
                  return (
                    (l = dn(l)),
                    (n = p && void 0 !== p.decimals ? p.decimals : 2),
                    (t = p && void 0 !== p.decimalSeparator ? p.decimalSeparator : C.Period),
                    (r = p && void 0 !== p.angularUnit ? p.angularUnit : w.Degrees),
                    (o = p && void 0 !== p.resultMode ? p.resultMode : F.Exact),
                    (i = !p || void 0 === p.replaceMixedNumber || p.replaceMixedNumber),
                    (a = !(!p || void 0 === p.ignoreMixedUnits) && p.ignoreMixedUnits),
                    [
                      4,
                      this._parseEquations(l, {
                        decimalSeparator: t,
                        replaceMixedNumber: i,
                        ignoreMixedUnits: a,
                        expectBothSides: !0
                      })
                    ]
                  );

                case 1:
                  return (
                    (i = e.sent()),
                    (a = i.sages),
                    (s = i.allVariables),
                    (u = p && void 0 !== p.solveFor ? p.solveFor : s.slice(0, l.length)),
                    (s = s.filter(function (e) {
                      return !u.includes(e);
                    })),
                    (c = {}),
                    [
                      4,
                      this._httpClient.solve(
                        a.map(function (e) {
                          return e.lhs + e.operator + e.rhs;
                        }),
                        u,
                        s,
                        {
                          variableValues: c,
                          resultMode: o,
                          angularUnit: r,
                          decimals: n,
                          decimalSeparator: t,
                          outputType: "latex",
                          useThousandsSeparator: 0 < a.length && a[a.length - 1].useThousandsSeparator,
                          removeRedundantResults: !0
                        }
                      )
                    ]
                  );

                case 2:
                  if ("string" != typeof (s = e.sent()))
                    throw new b("Expected type 'string' but got '".concat(typeof s, "' from the server!"));
                  return [
                    2,
                    "\\begin{array}{l}\n" +
                      l
                        .map(function (e) {
                          return An(e);
                        })
                        .join("\\\\\n") +
                      "\\ \\Updownarrow\\\\\n" +
                      xn(s, {
                        decimalSeparator: t
                      }) +
                      "\n\\end{array}"
                  ];
              }
            });
          });
        });
      var wn = j;
      function j(e) {
        (this._variablePriorityList = ["x", "y", "z", "a", "b", "c"]), (this._httpClient = e);
      }
      n.d(e, "latexToGoogleDocsEquations", function () {
        return on;
      }),
        n.d(e, "isCalculatable", function () {
          return gn;
        }),
        n.d(e, "extractSolvableEquations", function () {
          return dn;
        }),
        n.d(e, "isSolvable", function () {
          return hn;
        }),
        n.d(e, "CasClient", function () {
          return wn;
        });
    }
  }
]);
