"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [2573],
  {
    32573: function (t, e, r) {
      r.d(e, {
        X: function () {
          return W;
        }
      });
      var n,
        o = r(20011),
        i = r(37755),
        a = r(92577),
        l = r(91640),
        c = r(23381),
        u = ["title", "titleId"];
      function s() {
        return (
          (s = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          s.apply(this, arguments)
        );
      }
      function d(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
        }
        return o;
      }
      function p(t, e) {
        var r = t.title,
          o = t.titleId,
          i = d(t, u);
        return c.createElement(
          "svg",
          s(
            {
              width: 12,
              height: 12,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: e,
              "aria-labelledby": o
            },
            i
          ),
          r ? c.createElement("title", { id: o }, r) : null,
          n ||
            (n = c.createElement("path", {
              d: "M20.8042 4.33656C20.6244 4.20205 20.4203 4.10482 20.2035 4.05042C19.9867 3.99602 19.7615 3.98552 19.5407 4.01951C19.3199 4.05351 19.1078 4.13134 18.9167 4.24856C18.7255 4.36578 18.559 4.52008 18.4266 4.70265L10.3645 15.8097L5.23785 11.646C4.88437 11.3711 4.43888 11.2477 3.99687 11.3023C3.55485 11.3569 3.1515 11.5852 2.87328 11.9381C2.59506 12.291 2.4641 12.7404 2.50848 13.1902C2.55287 13.6399 2.76906 14.0541 3.11072 14.344L9.62004 19.6295C9.79992 19.7723 10.006 19.8773 10.2263 19.9384C10.4466 19.9995 10.6767 20.0153 10.9031 19.9851C11.1295 19.9549 11.3478 19.8792 11.545 19.7624C11.7423 19.6456 11.9146 19.4901 12.052 19.3049L21.1702 6.75139C21.3025 6.56846 21.398 6.36088 21.4511 6.14049C21.5043 5.9201 21.5142 5.69123 21.4802 5.46696C21.4462 5.24269 21.369 5.02743 21.253 4.83347C21.137 4.63951 20.9845 4.47065 20.8042 4.33656Z",
              fill: "currentColor"
            }))
        );
      }
      var m,
        f = c.forwardRef(p),
        h = (r.p, ["title", "titleId"]);
      function g() {
        return (
          (g = Object.assign
            ? Object.assign.bind()
            : function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var r = arguments[e];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                }
                return t;
              }),
          g.apply(this, arguments)
        );
      }
      function b(t, e) {
        if (null == t) return {};
        var r,
          n,
          o = (function (t, e) {
            if (null == t) return {};
            var r,
              n,
              o = {},
              i = Object.keys(t);
            for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (o[r] = t[r]);
            return o;
          })(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (n = 0; n < i.length; n++)
            (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
        }
        return o;
      }
      function x(t, e) {
        var r = t.title,
          n = t.titleId,
          o = b(t, h);
        return c.createElement(
          "svg",
          g(
            { width: 12, height: 2, viewBox: "0 0 12 2", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: e, "aria-labelledby": n },
            o
          ),
          r ? c.createElement("title", { id: n }, r) : null,
          m ||
            (m = c.createElement("path", {
              d: "M0.75 1.75H11.25C11.4489 1.75 11.6397 1.67098 11.7803 1.53033C11.921 1.38968 12 1.19891 12 1C12 0.801088 11.921 0.610322 11.7803 0.46967C11.6397 0.329018 11.4489 0.25 11.25 0.25H0.75C0.551088 0.25 0.360322 0.329018 0.21967 0.46967C0.0790176 0.610322 0 0.801088 0 1C0 1.19891 0.0790176 1.38968 0.21967 1.53033C0.360322 1.67098 0.551088 1.75 0.75 1.75Z",
              fill: "currentColor"
            }))
        );
      }
      var w = c.forwardRef(x),
        v = (r.p, r(54245)),
        y = r(50210),
        C = r(82017),
        k = r(27403);
      var j = (0, l.Z)("div", { target: "e1tum45w9" })(
          "position:relative;display:inline-block;vertical-align:text-bottom;width:16px;height:16px;margin-right:",
          function (t) {
            return t.hasMargin ? "8px" : "auto";
          },
          ";"
        ),
        O = (0, l.Z)("label", { target: "e1tum45w8" })(v.Py, " cursor:pointer;user-select:none;"),
        Z = (0, l.Z)("input", { target: "e1tum45w7" })({
          name: "13dxqne",
          styles: "position:absolute;opacity:0;border:0;padding:0;margin:0;width:16px;height:16px;white-space:nowrap;cursor:pointer"
        }),
        B = (0, l.Z)("div", { target: "e1tum45w6" })(
          "padding:",
          function (t) {
            return t.error ? "0px" : "1px";
          },
          ";color:",
          function (t) {
            return t.theme.colors.neutral;
          },
          ";"
        ),
        P = (0, l.Z)(B, { target: "e1tum45w5" })(
          "display:",
          function (t) {
            return t.checked ? "block" : "none";
          },
          ";"
        ),
        R = (0, l.Z)(B, { target: "e1tum45w4" })(
          "display:",
          function (t) {
            return t.indeterminate ? "block" : "none";
          },
          ";"
        ),
        E = (0, l.Z)(f, { target: "e1tum45w3" })({ name: "fibh3f", styles: "display:block;margin:auto" }),
        S = (0, l.Z)(w, { target: "e1tum45w2" })({ name: "fibh3f", styles: "display:block;margin:auto" }),
        I = (0, l.Z)("div", { target: "e1tum45w1" })(
          "box-sizing:border-box;border-radius:",
          function (t) {
            return t.theme.radius.pixel4;
          },
          ";background:",
          function (t) {
            return (
              (t.disabled && t.theme.colors.neutral200) ||
              (t.checked && t.theme.colors.blue700) ||
              (t.indeterminate && t.theme.colors.blue700)
            );
          },
          ";border:",
          function (t) {
            return (
              (t.disabled && "1px solid " + t.theme.colors.neutral400) ||
              (t.error && "2px solid " + t.theme.colors.red700) ||
              (t.checked && "1px solid " + t.theme.colors.blue700) ||
              (t.indeterminate && "1px solid " + t.theme.colors.blue700) ||
              "1px solid " + t.theme.colors.neutral400
            );
          },
          ";transition:all 150ms;cursor:pointer;width:16px;height:16px;display:flex;align-items:center;box-shadow:",
          function (t) {
            return t.focus && "0 0 2px 1px " + t.theme.colors.blue500;
          },
          ";"
        ),
        T = (0, l.Z)(C.r, { target: "e1tum45w0" })(
          "color:",
          function (t) {
            return t.theme.colors.neutral700;
          },
          ";height:16px;margin-left:9px;"
        ),
        W = function (t) {
          var e = (0, c.useState)(t || !1),
            r = (0, a.Z)(e, 2),
            n = r[0],
            l = r[1],
            u = (0, c.useState)(!1),
            s = (0, a.Z)(u, 2),
            d = s[0],
            p = s[1];
          return (
            c.useEffect(
              function () {
                l(t);
              },
              [t]
            ),
            (0, k.jsx)(
              c.Fragment,
              null,
              (0, k.jsx)(
                O,
                { className: "check-box-label" },
                (0, k.jsx)(
                  j,
                  { className: "check-box-container", hasMargin: !!t.children },
                  !t.controlled &&
                    (0, k.jsx)(Z, {
                      "data-qa": "CheckBoxHidden",
                      type: "checkbox",
                      onFocus: function () {
                        p(!0);
                      },
                      onBlur: function () {
                        p(!1);
                      },
                      onChange: function (e) {
                        t.onChange && t.onChange(e),
                          l((0, i.Z)((0, i.Z)({}, n), {}, { checked: e.currentTarget.checked, indeterminate: !1 }));
                      },
                      ref: function (t) {
                        t && (t.indeterminate = n.indeterminate || !1);
                      },
                      disabled: n.disabled || !1,
                      checked: n.checked || !1,
                      value: n.value || void 0,
                      name: n.name
                    }),
                  (0, k.jsx)(
                    I,
                    (0, o.Z)({}, n, { focus: d }),
                    (0, k.jsx)(P, { "data-qa": "CheckBoxChecked", checked: n.checked, error: n.error }, (0, k.jsx)(E, null)),
                    (0, k.jsx)(R, { indeterminate: n.indeterminate, error: n.error }, (0, k.jsx)(S, null))
                  )
                ),
                t.children
              ),
              t.toolTip && (0, k.jsx)(y.R, { tooltip: t.toolTip }, (0, k.jsx)(T, null))
            )
          );
        };
    },
    50210: function (t, e, r) {
      r.d(e, {
        R: function () {
          return w;
        }
      });
      var n = r(37755),
        o = r(20011),
        i = r(91640),
        a = r(23381),
        l = r(44895),
        c = r(27403),
        u = (0, i.Z)("div", { target: "eqjhgi01" })(
          "background:",
          function (t) {
            return t.customBackgroundColor ? t.customBackgroundColor : t.theme.colors.white;
          },
          ";border:1px solid ",
          function (t) {
            return t.theme.colors.neutral200;
          },
          ";border-radius:",
          function (t) {
            return t.customBorderRadius ? t.customBorderRadius : t.theme.radius.pixel4;
          },
          ";box-shadow:0px 4px 12px rgba(33, 48, 68, 0.12);box-sizing:border-box;font-size:12px;line-height:16px;text-align:center;",
          function (t) {
            return t.customWidth ? "max-width:" + t.customWidth : " max-width: 300px";
          },
          ";padding:",
          function (t) {
            return t.customPadding ? t.customPadding : "16px";
          },
          ";margin:0.4rem;text-overflow:ellipsis;white-space:wrap;word-wrap:break-word;"
        ),
        s = "".concat(20, "px"),
        d = "".concat(10, "px"),
        p = "".concat(8, "px"),
        m = "".concat(14, "px"),
        f = function (t) {
          return "\nborder-top-width: "
            .concat("top" === t ? p : "bottom" === t ? "0" : d, ";\nborder-bottom-width: ")
            .concat("bottom" === t ? p : "top" === t ? "0" : d, ";\nborder-left-width: ")
            .concat("left" === t ? p : "right" === t ? "0" : d, ";\nborder-right-width: ")
            .concat("right" === t ? p : "left" === t ? "0" : d, ";");
        },
        h = (0, i.Z)("div", { target: "eqjhgi00" })(
          "height:",
          s,
          ";position:absolute;width:",
          s,
          ";left:",
          function (t) {
            return "left" === t.placement ? "auto" : "0";
          },
          ";right:",
          function (t) {
            return "left" === t.placement ? "0" : "auto";
          },
          ";top:",
          function (t) {
            return "bottom" === t.placement ? "0" : "auto";
          },
          ";bottom:",
          function (t) {
            return "top" === t.placement ? "0" : "auto";
          },
          ";margin-top:",
          function (t) {
            return "bottom" === t.placement ? "-" + p : "0";
          },
          ";margin-bottom:",
          function (t) {
            return "top" === t.placement ? "-" + s : "0";
          },
          ";margin-right:",
          function (t) {
            return "left" === t.placement ? "-" + m : "0";
          },
          ";margin-left:",
          function (t) {
            return "right" === t.placement ? "-" + m : "0";
          },
          ";&::before{border-style:solid;content:'';display:block;height:0;margin:auto;width:0;border-color:transparent;border-",
          function (t) {
            return t.placement;
          },
          "-color:",
          function (t) {
            return t.theme.colors.neutral200;
          },
          ";",
          function (t) {
            return f(t.placement);
          },
          " position:",
          function (t) {
            return "bottom" === t.placement || "top" === t.placement ? "absolute" : "static";
          },
          ";top:",
          function (t) {
            return "bottom" === t.placement ? "-1px" : "top" === t.placement ? "1px" : "auto";
          },
          ";}&::after{border-style:solid;content:'';display:block;height:0;margin:auto;position:absolute;width:0;border-color:transparent;border-",
          function (t) {
            return t.placement;
          },
          "-color:",
          function (t) {
            return t.customBackgroundColor ? t.customBackgroundColor : t.theme.colors.white;
          },
          ";",
          function (t) {
            return f(t.placement);
          },
          " left:",
          function (t) {
            return "right" === t.placement ? "7px" : "left" === t.placement ? "5px" : "auto";
          },
          ";top:",
          function (t) {
            return "right" === t.placement || "left" === t.placement ? "0" : "auto";
          },
          ";}"
        );
      function g(t) {
        return (0, c.jsx)(
          u,
          (0, o.Z)({}, t.getTooltipProps({ ref: t.tooltipRef }), {
            customWidth: t.width,
            customBorderRadius: t.customBorderRadius,
            customBackgroundColor: t.customBackgroundColor,
            customPadding: t.customPadding || ""
          }),
          (0, c.jsx)(
            h,
            (0, o.Z)({ placement: t.placement }, t.getArrowProps({ ref: t.arrowRef }), {
              customBackgroundColor: t.customBackgroundColor || ""
            })
          ),
          t.children
        );
      }
      var b = { flip: { behavior: ["left", "bottom", "top", "right"] }, preventOverflow: { boundariesElement: "viewport" } },
        x = "pointer-events",
        w = function (t) {
          return (0, c.jsx)(
            l.Z,
            {
              placement: t.placement || "auto",
              trigger: "hover",
              delayShow: 500,
              delayHide: 300,
              tooltip: function (e) {
                return (0, c.jsx)(
                  g,
                  (0, o.Z)({}, e, {
                    width: t.width,
                    customBorderRadius: t.customBorderRadius,
                    customBackgroundColor: t.customBackgroundColor,
                    customPadding: t.customPadding || ""
                  }),
                  t.tooltip
                );
              },
              modifiers: b,
              closeOnOutOfBoundaries: !1,
              usePortal: !0
            },
            function (e) {
              var r,
                o = e.getTriggerProps,
                i = e.triggerRef;
              return null ===
                (r = a.Children.map(t.children, function (e) {
                  if (!e) return null;
                  var r = { ref: i, className: "trigger" };
                  if (t.showOnlyWhenOverflow) {
                    r.onMouseEnter = function (t) {
                      var e = t.target;
                      e &&
                        (e.offsetWidth < e.scrollWidth
                          ? (e.style[x] = "auto")
                          : ((e.style[x] = "none"),
                            setTimeout(function () {
                              e.style[x] = "auto";
                            }, 1e3)));
                    };
                  }
                  var l = o(r);
                  return "string" !== typeof e && "number" !== typeof e && "boolean" !== typeof e && "undefined" !== typeof e && "type" in e
                    ? a.cloneElement(e, (0, n.Z)({}, l))
                    : (0, c.jsx)("span", l, e);
                })) || void 0 === r
                ? void 0
                : r.filter(function (t) {
                    return t;
                  });
            }
          );
        };
    }
  }
]);
