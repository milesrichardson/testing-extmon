(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [6476, 8365],
  {
    45155: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return c;
        }
      });
      var n,
        o = r(23381),
        i = ["title", "titleId"];
      function l() {
        return (
          (l = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          l.apply(this, arguments)
        );
      }
      function a(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
        }
        return o;
      }
      function s(e, t) {
        var r = e.title,
          s = e.titleId,
          c = a(e, i);
        return o.createElement(
          "svg",
          l(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": s
            },
            c
          ),
          r ? o.createElement("title", { id: s }, r) : null,
          n ||
            (n = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z",
              fill: "white"
            }))
        );
      }
      var c = o.forwardRef(s);
      r.p;
    },
    2089: function (e, t, r) {
      "use strict";
      r(23381);
      t.Z = r.p + "static/media/curved_arrow_long_new.015ac4a5ebc7e14796f6028183754eaa.svg";
    },
    92807: function (e, t, r) {
      "use strict";
      r.r(t);
      r(23381);
      var n = r(82160),
        o = r(82325),
        i = r(2377),
        l = r(18365),
        a = r(11970),
        s = r(52384),
        c = r(27403),
        d = { id: 0, type: "AddNote", visible: !0, completed: null, seenAt: null, color: i.a.GREY },
        u = { hideSkillDetailsDialog: jest.fn(), toggleShowAllSkills: jest.fn(), openCreateNotes: jest.fn() };
      jest.mock("../../hooks/use-secondary-onboarding-actions", function () {
        return {
          useSecondaryOnboardingActions: function () {
            return u;
          }
        };
      });
      var h = (0, n.Z)([])({ secondaryOnboarding: { isHowToOpen: !1 }, user: { type: a.F.ENTERPRISE_TRIAL } });
      it("should shallow render the AddNote component without crashing", function () {
        var e = (0, o.shallow)((0, c.jsx)(s.zt, { store: h }, (0, c.jsx)(l.default, { skill: d, expanded: !0, fromAllSkillsDialog: !1 })));
        expect(e).toHaveLength(1);
      }),
        it("should mount render the AddNote component without crashing and click the CTA", function () {
          var e = (0, o.mount)((0, c.jsx)(s.zt, { store: h }, (0, c.jsx)(l.default, { skill: d, expanded: !0, fromAllSkillsDialog: !1 })));
          e.find(".add-note-button").at(1).simulate("click"),
            e.unmount(),
            expect(u.openCreateNotes).toHaveBeenCalled(),
            expect(u.hideSkillDetailsDialog).toHaveBeenCalled(),
            expect(u.toggleShowAllSkills).toHaveBeenCalled();
        });
    },
    18365: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return ee;
          }
        });
      var n,
        o,
        i,
        l,
        a,
        s,
        c,
        d,
        u,
        h,
        f,
        p,
        m,
        g,
        E = r(91640),
        x = r(48693),
        k = r(23381),
        v = r(57989),
        y = r(98223),
        w = ["title", "titleId"];
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          b.apply(this, arguments)
        );
      }
      function j(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
        }
        return o;
      }
      function C(e, t) {
        var r = e.title,
          E = e.titleId,
          x = j(e, w);
        return k.createElement(
          "svg",
          b(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": E
            },
            x
          ),
          r ? k.createElement("title", { id: E }, r) : null,
          n ||
            (n = k.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3.25 28.5C3.94036 28.5 4.5 27.9404 4.5 27.25C4.5 26.5596 3.94036 26 3.25 26C2.55964 26 2 26.5596 2 27.25C2 27.9404 2.55964 28.5 3.25 28.5Z",
              stroke: "#D7DBE0"
            })),
          o || (o = k.createElement("path", { d: "M53.1042 3.10417L55.4795 5.47952", stroke: "#D7DBE0", strokeLinecap: "round" })),
          i || (i = k.createElement("path", { d: "M55.3958 3.10417L53.0205 5.47952", stroke: "#D7DBE0", strokeLinecap: "round" })),
          l ||
            (l = k.createElement("rect", {
              x: 54,
              y: 32,
              width: 2.5,
              height: 2.50001,
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          a ||
            (a = k.createElement("rect", {
              width: 2.5,
              height: 2.5,
              transform: "matrix(0.707106 -0.707107 0.707106 0.707107 4 17.0034)",
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          s ||
            (s = k.createElement("rect", {
              width: 36,
              height: 36,
              rx: 3.38824,
              transform: "matrix(1 0 0 -1 12 38)",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeDasharray: "194.82 5.93 0.85 3.39"
            })),
          c ||
            (c = k.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M36.4 36.6152V29.1564C36.4 27.753 37.5377 26.6152 38.9412 26.6152H46.4L36.4 36.6152Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25
            })),
          d ||
            (d = k.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M47.6539 26.4536V35.1124C47.6539 36.5159 46.5161 37.6536 45.1127 37.6536H36.4539L47.6539 26.4536Z",
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 1.25
            })),
          u ||
            (u = k.createElement("rect", {
              x: 26.4,
              y: 11.6001,
              width: 18,
              height: 0.800002,
              rx: 0.400001,
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 1.69412
            })),
          h ||
            (h = k.createElement("rect", {
              x: 16,
              y: 11.6001,
              width: 6.4,
              height: 0.800002,
              rx: 0.400001,
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 1.69412
            })),
          f ||
            (f = k.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16 20.7999C16 20.579 16.1791 20.3999 16.4 20.3999H44C44.2209 20.3999 44.4 20.579 44.4 20.7999C44.4 21.0208 44.2209 21.1999 44 21.1999H16.4C16.1791 21.1999 16 21.0208 16 20.7999Z",
              fill: "#E3E3E3",
              stroke: "#D7DBE0",
              strokeWidth: 1.69412
            })),
          p ||
            (p = k.createElement("rect", {
              x: 16,
              y: 16,
              width: 18.4,
              height: 0.799999,
              rx: 0.399999,
              fill: "#E3E3E3",
              stroke: "#D7DBE0",
              strokeWidth: 1.69412
            })),
          m ||
            (m = k.createElement("rect", {
              x: 16,
              y: 24.7998,
              width: 18.4,
              height: 0.799995,
              rx: 0.399998,
              fill: "#E3E3E3",
              stroke: "#D7DBE0",
              strokeWidth: 1.69412
            })),
          g ||
            (g = k.createElement("rect", {
              x: 38.4,
              y: 16,
              width: 6,
              height: 0.799999,
              rx: 0.399999,
              fill: "#E3E3E3",
              stroke: "#D7DBE0",
              strokeWidth: 1.69412
            }))
        );
      }
      var D,
        O,
        A,
        B,
        R,
        S,
        L,
        H,
        M,
        W,
        Z,
        I,
        P,
        N,
        T,
        V,
        _ = k.forwardRef(C),
        F = (r.p, ["title", "titleId"]);
      function z() {
        return (
          (z = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          z.apply(this, arguments)
        );
      }
      function G(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++)
            (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
        }
        return o;
      }
      function U(e, t) {
        var r = e.title,
          n = e.titleId,
          o = G(e, F);
        return k.createElement(
          "svg",
          z(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            o
          ),
          r ? k.createElement("title", { id: n }, r) : null,
          D ||
            (D = k.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3.25 28.5C3.94036 28.5 4.5 27.9404 4.5 27.25C4.5 26.5596 3.94036 26 3.25 26C2.55964 26 2 26.5596 2 27.25C2 27.9404 2.55964 28.5 3.25 28.5Z",
              stroke: "#CACCEE"
            })),
          O || (O = k.createElement("path", { d: "M53.1042 3.10417L55.4795 5.47952", stroke: "#CACCEE", strokeLinecap: "round" })),
          A || (A = k.createElement("path", { d: "M55.3958 3.10417L53.0205 5.47952", stroke: "#CACCEE", strokeLinecap: "round" })),
          B ||
            (B = k.createElement("rect", {
              x: 54,
              y: 32,
              width: 2.5,
              height: 2.50001,
              stroke: "#CACCEE",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          R ||
            (R = k.createElement("rect", {
              width: 2.5,
              height: 2.5,
              transform: "matrix(0.707106 -0.707107 0.707106 0.707107 4 17.0034)",
              stroke: "#CACCEE",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          S ||
            (S = k.createElement("rect", {
              width: 36,
              height: 36,
              rx: 3.38824,
              transform: "matrix(1 0 0 -1 12 38)",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeDasharray: "194.82 5.93 0.85 3.39"
            })),
          L ||
            (L = k.createElement(
              "g",
              { filter: "url(#filter0_i)" },
              k.createElement("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M36.4 36.6152V29.1564C36.4 27.753 37.5377 26.6152 38.9412 26.6152H46.4L36.4 36.6152Z",
                fill: "#EBF5FB"
              })
            )),
          H ||
            (H = k.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M36.4 36.6152V29.1564C36.4 27.753 37.5377 26.6152 38.9412 26.6152H46.4L36.4 36.6152Z",
              stroke: "#264887",
              strokeWidth: 1.25
            })),
          M ||
            (M = k.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M47.6539 26.4536V35.1124C47.6539 36.5159 46.5161 37.6536 45.1127 37.6536H36.4539L47.6539 26.4536Z",
              fill: "#86C1E9",
              stroke: "#264887",
              strokeWidth: 1.25
            })),
          W ||
            (W = k.createElement("rect", {
              x: 26.4,
              y: 11.6001,
              width: 18,
              height: 0.800002,
              rx: 0.400001,
              fill: "#D22D27",
              stroke: "#D22D27",
              strokeWidth: 1.69412
            })),
          Z ||
            (Z = k.createElement("rect", {
              x: 16,
              y: 11.6001,
              width: 6.4,
              height: 0.800002,
              rx: 0.400001,
              fill: "#D22D27",
              stroke: "#D22D27",
              strokeWidth: 1.69412
            })),
          I ||
            (I = k.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16 20.7999C16 20.579 16.1791 20.3999 16.4 20.3999H44C44.2209 20.3999 44.4 20.579 44.4 20.7999C44.4 21.0208 44.2209 21.1999 44 21.1999H16.4C16.1791 21.1999 16 21.0208 16 20.7999Z",
              fill: "#E3E3E3",
              stroke: "#86C1E9",
              strokeWidth: 1.69412
            })),
          P ||
            (P = k.createElement("rect", {
              x: 16,
              y: 16,
              width: 18.4,
              height: 0.799999,
              rx: 0.399999,
              fill: "#E3E3E3",
              stroke: "#86C1E9",
              strokeWidth: 1.69412
            })),
          N ||
            (N = k.createElement("rect", {
              x: 16,
              y: 24.7998,
              width: 18.4,
              height: 0.799995,
              rx: 0.399998,
              fill: "#E3E3E3",
              stroke: "#86C1E9",
              strokeWidth: 1.69412
            })),
          T ||
            (T = k.createElement("rect", {
              x: 38.4,
              y: 16,
              width: 6,
              height: 0.799999,
              rx: 0.399999,
              fill: "#E3E3E3",
              stroke: "#86C1E9",
              strokeWidth: 1.69412
            })),
          V ||
            (V = k.createElement(
              "defs",
              null,
              k.createElement(
                "filter",
                {
                  id: "filter0_i",
                  x: 35.775,
                  y: 25.9902,
                  width: 12.1339,
                  height: 12.1339,
                  filterUnits: "userSpaceOnUse",
                  colorInterpolationFilters: "sRGB"
                },
                k.createElement("feFlood", { floodOpacity: 0, result: "BackgroundImageFix" }),
                k.createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                k.createElement("feColorMatrix", {
                  in: "SourceAlpha",
                  type: "matrix",
                  values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                  result: "hardAlpha"
                }),
                k.createElement("feOffset", { dy: 5.08235 }),
                k.createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: -1, k3: 1 }),
                k.createElement("feColorMatrix", {
                  type: "matrix",
                  values: "0 0 0 0 0.760784 0 0 0 0 0.878431 0 0 0 0 0.956863 0 0 0 1 0"
                }),
                k.createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow" })
              )
            ))
        );
      }
      var q = k.forwardRef(U),
        J = (r.p, r(2089)),
        Y = r(45155),
        K = r(27403);
      var Q = {
          name: "a9tphq",
          styles:
            "&{.arrow-container--drawer{position:relative;height:calc(100vh - 440px);}p{font-size:14px;line-height:24px;}.arrow-container--dialog{display:none;flex-direction:column;align-items:center;margin-top:12px;font-weight:600;}img{height:auto;}@media all and (min-height: 862px){img{height:450px;}}@media all and (min-height: 762px) and (max-height: 862px){img{height:350px;}}}"
        },
        X = (0, E.Z)("img", { target: "e1m1x4d61" })({ name: "1q0leuh", styles: "max-width:100%;height:100%" }),
        $ = (0, E.Z)("button", { target: "e1m1x4d60" })({
          name: "1lnnzuy",
          styles:
            "height:56px;width:56px;border-radius:50%;border:0;background-color:#d32d27;box-shadow:0px 8px 8px rgb(0 0 0 / 24%);cursor:pointer;margin-top:12px"
        }),
        ee = function (e) {
          var t = e.skill,
            r = e.expanded,
            n = e.fromAllSkillsDialog,
            o = (0, v.J)();
          return (0, K.jsx)(y.j, {
            "data-component": "AddNote",
            skill: t,
            icon: (t.completed && (0, K.jsx)(_, null)) || (0, K.jsx)(q, null),
            title: (0, K.jsx)(x.Trans, { id: "Add a secure note" }),
            description: (0, K.jsx)(x.Trans, { id: "Keep your personal info safe & available" }),
            expanded: r,
            fromAllSkillsDialog: n,
            bodyTitle: (0, K.jsx)(x.Trans, { id: "LastPass isn\u2019t just for passwords" }),
            automationId: "so-add-note",
            bodyContent: (0, K.jsx)(
              "div",
              { css: Q, className: "add-address" },
              (0, K.jsx)(
                "p",
                null,
                (0, K.jsx)(x.Trans, {
                  id: "LastPass is your ultimate sticky note repository! Add, manage, and share non-password information in your vault. You can even add attachments and view changes to your notes."
                })
              ),
              (0, K.jsx)(
                "div",
                { className: "arrow-container--drawer" },
                (0, K.jsx)("p", null, (0, K.jsx)(x.Trans, { id: "Click this button to add notes." })),
                (0, K.jsx)(X, { src: J.Z })
              ),
              (0, K.jsx)(
                "div",
                { className: "arrow-container--dialog" },
                (0, K.jsx)("p", null, (0, K.jsx)(x.Trans, { id: "Click this button to add notes." })),
                (0, K.jsx)(
                  $,
                  {
                    className: "add-note-button",
                    onClick: function () {
                      o.openCreateNotes(), o.hideSkillDetailsDialog(), o.toggleShowAllSkills();
                    }
                  },
                  (0, K.jsx)(Y.r, null)
                )
              )
            )
          });
        };
    },
    55804: function (e) {
      var t,
        r,
        n = Function.prototype,
        o = Object.prototype,
        i = n.toString,
        l = o.hasOwnProperty,
        a = i.call(Object),
        s = o.toString,
        c =
          ((t = Object.getPrototypeOf),
          (r = Object),
          function (e) {
            return t(r(e));
          });
      e.exports = function (e) {
        if (
          !(function (e) {
            return !!e && "object" == typeof e;
          })(e) ||
          "[object Object]" != s.call(e) ||
          (function (e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString)
              try {
                t = !!(e + "");
              } catch (r) {}
            return t;
          })(e)
        )
          return !1;
        var t = c(e);
        if (null === t) return !0;
        var r = l.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && i.call(r) == a;
      };
    },
    82160: function (e, t, r) {
      "use strict";
      t.Z = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return o.applyMiddleware.apply(
            void 0,
            (function (e) {
              if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r;
              }
              return Array.from(e);
            })(e)
          )(function () {
            var e = [],
              r = [];
            return {
              getState: function () {
                return a(t) ? t(e) : t;
              },
              getActions: function () {
                return e;
              },
              dispatch: function (t) {
                if (!(0, l.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if ("undefined" === typeof t.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant? Action: ' + JSON.stringify(t)
                  );
                e.push(t);
                for (var n = 0; n < r.length; n++) r[n]();
                return t;
              },
              clearActions: function () {
                e = [];
              },
              subscribe: function (e) {
                return (
                  a(e) && r.push(e),
                  function () {
                    var t = r.indexOf(e);
                    t < 0 || r.splice(t, 1);
                  }
                );
              },
              replaceReducer: function (e) {
                if (!a(e)) throw new Error("Expected the nextReducer to be a function.");
              }
            };
          })();
        };
      };
      var n,
        o = r(43754),
        i = r(55804),
        l = (n = i) && n.__esModule ? n : { default: n };
      var a = function (e) {
        return "function" === typeof e;
      };
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
