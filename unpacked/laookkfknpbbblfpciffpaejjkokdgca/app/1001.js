/*! For license information please see 1001.js.LICENSE.txt */
(globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []).push([
  [1001],
  {
    47494: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => s });
      var r = n(8081),
        i = n.n(r),
        a = n(23645),
        o = n.n(a)()(i());
      o.push([
        e.id,
        "\n.verte {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n.verte * {\n    box-sizing: border-box;\n}\n.verte--loading {\n  opacity: 0;\n}\n.verte__guide {\n  width: 24px;\n  height: 24px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n}\n.verte__guide:focus {\n    outline: 0;\n}\n.verte__guide svg {\n    width: 100%;\n    height: 100%;\n    fill: inherit;\n}\n.verte__menu {\n  flex-direction: column;\n  justify-content: center;\n  align-items: stretch;\n  width: 250px;\n  border-radius: 6px;\n  background-color: #fff;\n  will-change: transform;\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);\n}\n.verte__menu:focus {\n    outline: none;\n}\n.verte__menu-origin {\n  display: none;\n  position: absolute;\n  z-index: 10;\n}\n.verte__menu-origin--active {\n    display: flex;\n}\n.verte__menu-origin--static {\n    position: static;\n    z-index: initial;\n}\n.verte__menu-origin--top {\n    bottom: 50px;\n}\n.verte__menu-origin--bottom {\n    top: 50px;\n}\n.verte__menu-origin--right {\n    right: 0;\n}\n.verte__menu-origin--left {\n    left: 0;\n}\n.verte__menu-origin--center {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(0, 0, 0, 0.1);\n}\n.verte__menu-origin:focus {\n    outline: none;\n}\n.verte__controller {\n  padding: 0 20px 20px;\n}\n.verte__recent {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n}\n.verte__recent-color {\n    margin: 4px;\n    width: 27px;\n    height: 27px;\n    border-radius: 50%;\n    background-color: #fff;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n    background-image: linear-gradient(45deg, rgba(112, 128, 144, 0.5) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(112, 128, 144, 0.5) 75%), linear-gradient(-45deg, rgba(112, 128, 144, 0.5) 25%, transparent 25%), linear-gradient(-45deg, transparent 75%, rgba(112, 128, 144, 0.5) 75%);\n    background-size: 6px 6px;\n    background-position: 0 0, 3px -3px, 0 3px, -3px 0px;\n    overflow: hidden;\n}\n.verte__recent-color:after {\n      content: '';\n      display: block;\n      width: 100%;\n      height: 100%;\n      background-color: currentColor;\n}\n.verte__value {\n  padding: 0.6em;\n  width: 100%;\n  border: 1px solid #708090;\n  border-radius: 6px 0 0 6px;\n  text-align: center;\n  font-size: 12px;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n.verte__value:focus {\n    outline: none;\n    border-color: #1a3aff;\n}\n.verte__icon {\n  width: 20px;\n  height: 20px;\n}\n.verte__icon--small {\n    width: 12px;\n    height: 12px;\n}\n.verte__input {\n  padding: 5px;\n  margin: 0 3px;\n  min-width: 0;\n  text-align: center;\n  border-width: 0 0 1px 0;\n  appearance: none;\n  -moz-appearance: textfield;\n}\n.verte__input::-webkit-inner-spin-button, .verte__input::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.verte__inputs {\n  display: flex;\n  font-size: 16px;\n  margin-bottom: 5px;\n}\n.verte__draggable {\n  border-radius: 6px 6px 0 0;\n  height: 8px;\n  width: 100%;\n  cursor: grab;\n  background: linear-gradient(90deg, #fff 2px, transparent 1%) center, linear-gradient(#fff 2px, transparent 1%) center, rgba(112, 128, 144, 0.2);\n  background-size: 4px 4px;\n}\n.verte__model,\n.verte__submit {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1px;\n  border: 0;\n  text-align: center;\n  cursor: pointer;\n  background-color: transparent;\n  font-weight: 700;\n  color: #708090;\n  fill: #708090;\n  outline: none;\n}\n.verte__model:hover,\n  .verte__submit:hover {\n    fill: #1a3aff;\n    color: #1a3aff;\n}\n.verte__close {\n  position: absolute;\n  top: 1px;\n  right: 1px;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px;\n  cursor: pointer;\n  border-radius: 50%;\n  border: 0;\n  transform: translate(50%, -50%);\n  background-color: rgba(0, 0, 0, 0.4);\n  fill: #fff;\n  outline: none;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n}\n.verte__close:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n}\n.verte-picker {\n  width: 100%;\n  margin: 0 auto 10px;\n  display: flex;\n  flex-direction: column;\n}\n.verte-picker--wheel {\n    margin-top: 20px;\n}\n.verte-picker__origin {\n    user-select: none;\n    position: relative;\n    margin: 0 auto;\n    overflow: hidden;\n}\n.verte-picker__slider {\n    margin: 20px 20px 0;\n}\n.verte-picker__canvas {\n    display: block;\n}\n.verte-picker__cursor {\n    position: absolute;\n    top: 0;\n    left: 0;\n    margin: -6px;\n    width: 12px;\n    height: 12px;\n    border: 1px solid #fff;\n    border-radius: 50%;\n    will-change: transform;\n    pointer-events: none;\n    background-color: transparent;\n    box-shadow: #fff 0px 0px 0px 1.5px, rgba(0, 0, 0, 0.3) 0px 0px 1px 1px inset, rgba(0, 0, 0, 0.4) 0px 0px 1px 2px;\n}\n.verte-picker__input {\n    display: flex;\n    margin-bottom: 10px;\n}\n.slider {\n  position: relative;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  margin-bottom: 10px;\n  font-size: 20px;\n}\n.slider:hover .slider-label, .slider--dragging .slider-label {\n    visibility: visible;\n    opacity: 1;\n}\n.slider__input {\n  margin-bottom: 0;\n  padding: 0.3em;\n  margin-left: 0.2em;\n  max-width: 70px;\n  width: 20%;\n  border: 0;\n  text-align: center;\n  font-size: 12px;\n  -webkit-appearance: none;\n  -moz-appearance: textfield;\n}\n.slider__input::-webkit-inner-spin-button, .slider__input::-webkit-outer-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n.slider__input:focus {\n    outline: none;\n    border-color: #1a3aff;\n}\n.slider__track {\n  position: relative;\n  flex: 1;\n  margin: 3px;\n  width: auto;\n  height: 8px;\n  background: #fff;\n  will-change: transfom;\n  background-image: linear-gradient(45deg, rgba(112, 128, 144, 0.5) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(112, 128, 144, 0.5) 75%), linear-gradient(-45deg, rgba(112, 128, 144, 0.5) 25%, transparent 25%), linear-gradient(-45deg, transparent 75%, rgba(112, 128, 144, 0.5) 75%);\n  background-size: 6px 6px;\n  background-position: 0 0, 3px -3px, 0 3px, -3px 0px;\n  border-radius: 10px;\n}\n.slider__handle {\n  position: relative;\n  position: absolute;\n  top: 0;\n  left: 0;\n  will-change: transform;\n  color: #000;\n  margin: -2px 0 0 -8px;\n  width: 12px;\n  height: 12px;\n  border: 2px solid #fff;\n  background-color: currentColor;\n  border-radius: 50%;\n  box-shadow: 0 1px 4px -2px black;\n}\n.slider__label {\n  position: absolute;\n  top: -3em;\n  left: 0.4em;\n  z-index: 999;\n  visibility: hidden;\n  padding: 6px;\n  min-width: 3em;\n  border-radius: 6px;\n  background-color: #000;\n  color: #fff;\n  text-align: center;\n  font-size: 12px;\n  line-height: 1em;\n  opacity: 0;\n  transform: translate(-50%, 0);\n  white-space: nowrap;\n}\n.slider__label:before {\n    position: absolute;\n    bottom: -0.6em;\n    left: 50%;\n    display: block;\n    width: 0;\n    height: 0;\n    border-width: 0.6em 0.6em 0 0.6em;\n    border-style: solid;\n    border-color: #000 transparent transparent transparent;\n    content: '';\n    transform: translate3d(-50%, 0, 0);\n}\n.slider__fill {\n  width: 100%;\n  height: 100%;\n  transform-origin: left top;\n  border-radius: 10px;\n}",
        ""
      ]);
      const s = o;
    },
    94927: (e, t, n) => {
      "use strict";
      function r(e) {
        return (
          (r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                }),
          r(e)
        );
      }
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function a(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function o(e, t, n) {
        return t && a(e.prototype, t), n && a(e, n), e;
      }
      function s(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && u(e, t);
      }
      function l(e) {
        return (
          (l = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          l(e)
        );
      }
      function u(e, t) {
        return (
          (u =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          u(e, t)
        );
      }
      function c(e, t) {
        return !t || ("object" != typeof t && "function" != typeof t)
          ? (function (e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
      }
      function h(e, t, n) {
        return (
          (h =
            "undefined" != typeof Reflect && Reflect.get
              ? Reflect.get
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = l(e)); );
                    return e;
                  })(e, t);
                  if (r) {
                    var i = Object.getOwnPropertyDescriptor(r, t);
                    return i.get ? i.get.call(n) : i.value;
                  }
                }),
          h(e, t, n || e)
        );
      }
      function d(e) {
        return "object" === r(e) && e.model
          ? e.model
          : ("#" !== e.slice(0, 1) || (4 !== e.length && 7 !== e.length)) && ("#" !== e.slice(0, 1) || (6 !== e.length && 9 !== e.length))
          ? "RGBA" === e.slice(0, 4).toUpperCase() || "RGB" === e.slice(0, 3).toUpperCase()
            ? "rgb"
            : ("HSLA" === e.slice(0, 4).toUpperCase() || "HSL" === e.slice(0, 3).toUpperCase()) && "hsl"
          : "hex";
      }
      function p(e) {
        return isNaN(parseInt(e, 16)) ? 0 : parseInt(e, 16);
      }
      function f(e, t) {
        return function (n) {
          return n >= e && n <= t;
        };
      }
      function v(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e);
      }
      function g(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5;
        return Number((e * (1 - n) + t * n).toFixed(2));
      }
      function m(e) {
        return !(void 0 === e || isNaN(e) || e < 0 || e > 1);
      }
      n.d(t, { Z: () => ne });
      var b = (function () {
          function e(t) {
            var n = this;
            i(this, e),
              (this.invalid = !this.validate(t)),
              this.invalid ||
                Object.keys(t).forEach(function (e) {
                  n[e] = t[e];
                }),
              this.init();
          }
          return (
            o(e, [
              { key: "init", value: function () {} },
              {
                key: "validate",
                value: function (e) {
                  return !!e && "object" === r(e);
                }
              }
            ]),
            e
          );
        })(),
        x = (function (e) {
          function t() {
            return i(this, t), c(this, l(t).apply(this, arguments));
          }
          return (
            s(t, e),
            o(t, [
              {
                key: "validate",
                value: function (e) {
                  if (!h(l(t.prototype), "validate", this).call(this, e)) return !1;
                  var n = f(0, 255);
                  return n(e.red) && n(e.green) && n(e.blue);
                }
              },
              {
                key: "init",
                value: function () {
                  (this.model = "rgb"), (this.alpha = m(this.alpha) ? this.alpha : 1);
                }
              },
              {
                key: "toString",
                value: function () {
                  return this.invalid
                    ? "Invalid Color"
                    : f(0, 0.999)(this.alpha)
                    ? "rgba(".concat(this.red, ",").concat(this.green, ",").concat(this.blue, ",").concat(this.alpha, ")")
                    : "rgb(".concat(this.red, ",").concat(this.green, ",").concat(this.blue, ")");
                }
              }
            ]),
            t
          );
        })(b),
        _ = (function (e) {
          function t() {
            return i(this, t), c(this, l(t).apply(this, arguments));
          }
          return (
            s(t, e),
            o(t, [
              {
                key: "validate",
                value: function (e) {
                  if (!h(l(t.prototype), "validate", this).call(this, e)) return !1;
                  var n = f(0, 100);
                  return f(0, 360)(e.hue) && n(e.lum) && n(e.sat);
                }
              },
              {
                key: "init",
                value: function () {
                  (this.model = "hsl"), (this.alpha = m(this.alpha) ? this.alpha : 1);
                }
              },
              {
                key: "toString",
                value: function () {
                  return this.invalid
                    ? "Invalid Color"
                    : f(0, 0.999)(this.alpha)
                    ? "hsla(".concat(this.hue, ",").concat(this.sat, "%,").concat(this.lum, "%,").concat(this.alpha, ")")
                    : "hsl(".concat(this.hue, ",").concat(this.sat, "%,").concat(this.lum, "%)");
                }
              }
            ]),
            t
          );
        })(b),
        y = (function (e) {
          function t() {
            return i(this, t), c(this, l(t).apply(this, arguments));
          }
          return (
            s(t, e),
            o(t, [
              {
                key: "validate",
                value: function (e) {
                  return (
                    !!h(l(t.prototype), "validate", this).call(this, e) &&
                    /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test("#".concat(e.red).concat(e.green).concat(e.blue))
                  );
                }
              },
              {
                key: "init",
                value: function () {
                  (this.model = "hex"), (this.alpha = void 0 !== this.alpha ? this.alpha : "ff");
                }
              },
              {
                key: "toString",
                value: function () {
                  return this.invalid
                    ? "Invalid Color"
                    : f(0, 0.999)(p(this.alpha) / 255)
                    ? "#".concat(this.red).concat(this.green).concat(this.blue).concat(this.alpha)
                    : "#".concat(this.red).concat(this.green).concat(this.blue);
                }
              }
            ]),
            t
          );
        })(b),
        C = Object.freeze({ Color: b, RgbColor: x, HslColor: _, HexColor: y });
      function w(e) {
        if ("object" === r(e)) return e;
        var t = e.match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
        return !t || t.length < 4 ? new x() : new x({ red: Number(t[1]), green: Number(t[2]), blue: Number(t[3]), alpha: Number(t[4]) });
      }
      function k(e) {
        if ("object" === r(e)) return e;
        var t = (function (e) {
            var t = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])*$/i;
            return (
              (5 !== e.length && 4 !== e.length) ||
                !t.test(e) ||
                (e = e.replace(t, function (e, t, n, r, i) {
                  return "#"
                    .concat(t)
                    .concat(t)
                    .concat(n)
                    .concat(n)
                    .concat(r)
                    .concat(r)
                    .concat(i ? "".concat(i).concat(i) : "");
                })),
              e
            );
          })(e),
          n = t.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})*/i);
        return !n || n.length < 4 ? new y() : new y({ hex: t, red: n[1], green: n[2], blue: n[3], alpha: n[4] });
      }
      function S(e) {
        if ("object" === r(e)) return e;
        var t = e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,*\s*(\d*(?:\.\d+)*)*\)/i);
        return !t || t.length < 4 ? new _() : new _({ hue: Number(t[1]), sat: Number(t[2]), lum: Number(t[3]), alpha: Number(t[4]) });
      }
      function M(e) {
        return (e = Math.floor(e)), isNaN(e) ? "00" : ("0" + e.toString(16)).slice(-2);
      }
      function L(e) {
        if (!e) return new y();
        var t = [M((e = w(e)).red), M(e.green), M(e.blue), e.alpha ? M(255 * e.alpha) : null];
        return new y({ red: t[0], green: t[1], blue: t[2], alpha: t[3] || "ff" });
      }
      function H(e) {
        if (!e) return new _();
        var t = [(e = w(e)).red / 255, e.green / 255, e.blue / 255, e.alpha],
          n = t[0],
          r = t[1],
          i = t[2],
          a = t[3],
          o = 0,
          s = 0,
          l = 0,
          u = Math.min(n, r, i),
          c = Math.max(n, r, i);
        return (
          (l = (u + c) / 2),
          u !== c && (s = l > 0.5 ? (c - u) / (2 - c - u) : (c - u) / (c + u)),
          n >= c && u !== c && (o = ((r - i) / (c - u)) * 60),
          r >= c && u !== c && (o = 60 * (2 + (i - n) / (c - u))),
          i >= c && u !== c && (o = 60 * (4 + (n - r) / (c - u))),
          (o = o < 0 ? Math.floor(o + 360) : Math.floor(o)),
          (s = Math.floor(100 * s)),
          (l = Math.floor(100 * l)),
          new _({ hue: o, sat: s, lum: l, alpha: a })
        );
      }
      function E(e) {
        if (!e) return new x();
        var t = k(e),
          n = t.red,
          r = t.green,
          i = t.blue,
          a = t.alpha;
        return new x({ red: p(n), green: p(r), blue: p(i), alpha: void 0 === a ? 1 : Number((p(a) / 255).toFixed(2)) });
      }
      function P(e) {
        return Math.min(Math.max(parseInt(e), 0), 255);
      }
      function R(e) {
        if (!e) return new x();
        var t = [(e = S(e)).hue / 360, e.sat / 100, e.lum / 100, e.alpha],
          n = t[0],
          r = t[1],
          i = t[2],
          a = t[3],
          o = 0,
          s = 0,
          l = 0;
        if ((0 === r && (o = s = l = P(255 * i)), 0 !== r)) {
          var u = i >= 50 ? i + r - i * r : i * (1 + r),
            c = 2 * i - u,
            h = function (e) {
              return (
                e < 0 && (e += 1),
                e > 1 && (e -= 1),
                e < 1 / 6 ? c + 6 * (u - c) * e : e < 0.5 ? u : e < 2 / 3 ? c + (u - c) * (2 / 3 - e) * 6 : c
              );
            };
          (o = P(255 * h(n + 1 / 3))), (s = P(255 * h(n))), (l = P(255 * h(n - 1 / 3)));
        }
        return new x({ red: o, green: s, blue: l, alpha: a });
      }
      function $(e) {
        var t = d(e);
        return "hex" === t
          ? E(e)
          : "hsl" === t
          ? R(e)
          : "rgb" === t && "string" == typeof e
          ? w(e)
          : "rgb" === t && "object" === r(e)
          ? e
          : new x();
      }
      function N(e) {
        var t,
          n = d(e);
        return "hex" === n
          ? (t = e)
            ? H(E(t))
            : new _()
          : "rgb" === n
          ? H(e)
          : "hsl" === n && "string" == typeof e
          ? S(e)
          : "hsl" === n && "object" === r(e)
          ? e
          : new _();
      }
      function V(e) {
        var t,
          n = d(e);
        return "rgb" === n
          ? L(e)
          : "hsl" === n
          ? (t = e)
            ? L(R(t))
            : new y()
          : "hex" === n && "string" == typeof e
          ? k(e)
          : "hex" === n && "object" === r(e)
          ? e
          : new y();
      }
      function j() {
        return "rgb(".concat(v(0, 255), ", ").concat(v(0, 255), ", ").concat(v(0, 255), ")");
      }
      function O(e, t, n) {
        (e = $(e)), (t = $(t));
        var r = Math.floor(g(e.red, t.red, n)),
          i = Math.floor(g(e.green, t.green, n)),
          a = Math.floor(g(e.blue, t.blue, n)),
          o = g(e.alpha, t.alpha, n);
        return new x({ red: r, green: i, blue: a, alpha: o });
      }
      function z(e, t) {
        for (var n = [], r = 0; r < e; r++) {
          var i = "function" == typeof t ? t() : t;
          n.push(i);
        }
        return n;
      }
      function A(e, t) {
        for (; e !== document && null !== e; ) {
          if (e === t) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function F(e, t) {
        return e.reduce(function (e, n) {
          return Math.abs(n - t) < Math.abs(e - t) ? n : e;
        });
      }
      function I(e, t) {
        return function (e) {
          return -1 !== t.indexOf(e);
        };
      }
      function q(e) {
        if (e.type.match(/^touch/i)) {
          var t = e.touches[0];
          return { x: t.clientX, y: t.clientY };
        }
        return e.type.match(/^mouse/i) ? { x: e.clientX, y: e.clientY } : { x: 0, y: 0 };
      }
      var B = {
          name: "VerteSlider",
          props: {
            gradient: Array,
            classes: Array,
            colorCode: { type: Boolean, default: !1 },
            editable: { type: Boolean, default: !0 },
            reverse: { type: Boolean, default: !1 },
            label: { type: Boolean, default: !1 },
            trackSlide: { type: Boolean, default: !0 },
            min: { type: Number, default: 0 },
            max: { type: Number, default: 255 },
            step: { type: Number, default: 1 },
            value: { type: Number, default: 0 },
            handlesValue: {
              type: Array,
              default: function () {
                return [0];
              }
            }
          },
          data: function () {
            return { fill: { translate: 0, scale: 0 }, multiple: !1, currentValue: 0, handles: [], values: [] };
          },
          watch: {
            gradient: function (e) {
              this.initGradient(e), this.reloadHandlesColor();
            },
            values: function () {
              (this.multiple = this.values.length > 1), (this.fill = !this.multiple && (this.fill || {}));
            },
            value: function (e, t) {
              e !== t && e !== this.currentValue && this.updateValue(this.value, !0);
            }
          },
          methods: {
            init: function () {
              var e,
                t,
                n,
                r = this;
              (this.$emitInputEvent =
                ((e = function () {
                  r.$emit("input", r.currentValue);
                }),
                void 0 === t && (t = !1),
                function () {
                  var r = arguments,
                    i = t && !n;
                  window.cancelAnimationFrame(n),
                    (n = window.requestAnimationFrame(function () {
                      (n = null), t || e.apply(void 0, r);
                    })),
                    i && e.apply(void 0, arguments);
                })),
                (this.multiple = this.values.length > 1),
                (this.values = this.handlesValue),
                (this.handles = this.handlesValue.map(function (e, t) {
                  return { value: e, position: 0, color: "#fff" };
                })),
                1 === this.values.length && (this.values[0] = Number(this.value)),
                this.values.sort(),
                this.initElements(),
                this.gradient && this.initGradient(this.gradient),
                this.initEvents(),
                this.values.forEach(function (e, t) {
                  (r.activeHandle = t), r.updateValue(e, !0);
                });
            },
            initElements: function () {
              var e;
              (this.wrapper = this.$refs.wrapper),
                (this.track = this.$refs.track),
                (this.fill = this.$refs.fill),
                this.wrapper.classList.toggle("slider--editable", this.editable),
                this.wrapper.classList.toggle("slider--reverse", this.reverse),
                this.classes && (e = this.wrapper.classList).add.apply(e, this.classes);
            },
            initGradient: function (e) {
              e.length > 1
                ? (this.fill.style.backgroundImage = "linear-gradient(90deg, " + e + ")")
                : ((this.fill.style.backgroundImage = ""),
                  (this.fill.style.backgroundColor = e[0]),
                  this.handles.forEach(function (t) {
                    t.style.color = e[0];
                  }));
            },
            handleResize: function () {
              this.updateWidth(), this.updateValue(this.currentValue, !0);
            },
            initEvents: function () {
              window.addEventListener("resize", this.handleResize);
            },
            select: function (e) {
              if ((e.preventDefault(), e.stopPropagation(), 2 !== e.buttons)) {
                this.updateWidth(), this.track.classList.add("slider--dragging"), (this.ticking = !1);
                var t = this.getStepValue(e);
                if (this.multiple) {
                  var n = F(this.values, t);
                  this.activeHandle = this.values.indexOf(n);
                }
                this.updateValue(t),
                  (this.tempDrag = this.dragging.bind(this)),
                  (this.tempRelease = this.release.bind(this)),
                  document.addEventListener("mousemove", this.tempDrag),
                  document.addEventListener("touchmove", this.tempDrag),
                  document.addEventListener("touchend", this.tempRelease),
                  document.addEventListener("mouseup", this.tempRelease);
              }
            },
            dragging: function (e) {
              var t = this,
                n = this.getStepValue(e);
              this.ticking ||
                (window.requestAnimationFrame(function () {
                  t.updateValue(n), (t.ticking = !1);
                }),
                (this.ticking = !0));
            },
            release: function () {
              this.track.classList.remove("slider--dragging"),
                document.removeEventListener("mousemove", this.tempDrag),
                document.removeEventListener("touchmove", this.tempDrag),
                document.removeEventListener("mouseup", this.tempRelease),
                document.removeEventListener("touchend", this.tempRelease);
            },
            getStepValue: function (e) {
              var t = q(e).x - this.currentX,
                n = parseInt(t / this.stepWidth + 0.5, 10) * this.step + this.min;
              return this.decimalsCount ? Number(n.toFixed(this.decimalsCount)) : n;
            },
            updateWidth: function () {
              var e = this.track.getBoundingClientRect();
              (this.currentX = e.left), (this.width = e.width), (this.stepWidth = (this.width / (this.max - this.min)) * this.step);
            },
            getPositionPercentage: function (e) {
              return ((e - this.min) / (this.max - this.min)).toFixed(2);
            },
            normalizeValue: function (e) {
              if (isNaN(Number(e))) return this.value;
              if (this.multiple) {
                var t = this.values[this.activeHandle - 1] || this.min,
                  n = this.values[this.activeHandle + 1] || this.max;
                e = Math.min(Math.max(Number(e), t), n);
              }
              return Math.min(Math.max(Number(e), this.min), this.max);
            },
            addHandle: function (e) {
              var t = F(this.values, e),
                n = this.values.indexOf(t),
                r = this.values[n] <= e ? n + 1 : n;
              this.handles.splice(r, 0, { value: e, position: 0, color: "#fff" }),
                this.values.splice(r, 0, e),
                (this.activeHandle = r),
                (this.currentValue = null),
                this.updateValue(e);
            },
            removeHandle: function (e) {
              this.handles.splice(e, 1), this.values.splice(e, 1), (this.activeHandle = 0 === e ? e + 1 : e - 1);
            },
            getHandleColor: function (e) {
              for (var t = this.gradient.length - 1, n = e, r = 1; r <= t; r++)
                if (n >= (r - 1) / t && n <= r / t) {
                  var i = (n - (r - 1) / t) / (1 / t);
                  return O(this.gradient[r - 1], this.gradient[r], i);
                }
              return "rgb(0, 0, 0)";
            },
            reloadHandlesColor: function () {
              var e = this;
              this.handles.forEach(function (t, n) {
                var r = e.getPositionPercentage(t.value),
                  i = e.getHandleColor(r);
                e.handles[n].color = i.toString();
              });
            },
            updateValue: function (e, t) {
              var n = this;
              void 0 === t && (t = !1),
                window.requestAnimationFrame(function () {
                  var r = n.normalizeValue(e),
                    i = n.getPositionPercentage(r);
                  if (
                    (n.fill && ((n.fill.translate = i * n.width), (n.fill.scale = 1 - i)),
                    (n.values[n.activeHandle] = r),
                    (n.handles[n.activeHandle].value = r),
                    (n.handles[n.activeHandle].position = i * n.width),
                    (n.currentValue = r),
                    (n.$refs.input.value = n.currentValue),
                    n.gradient)
                  ) {
                    var a = n.getHandleColor(i);
                    (n.handles[n.activeHandle].color = a.toString()), n.colorCode && (n.currentValue = a);
                  }
                  t || n.$emitInputEvent();
                });
            }
          },
          created: function () {
            var e = this.step.toString().split(".")[1];
            (this.currentValue = this.value), (this.decimalsCount = e ? e.length : 0);
          },
          mounted: function () {
            var e = this;
            this.init(),
              this.$nextTick(function () {
                e.updateWidth(), e.updateValue(void 0, !0);
              });
          },
          destroyed: function () {
            window.removeEventListener("resize", this.handleResize);
          }
        },
        D = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { ref: "wrapper", staticClass: "slider" }, [
            n(
              "div",
              e._g({ ref: "track", staticClass: "slider__track" }, e.trackSlide ? { mousedown: e.select, touchstart: e.select } : {}),
              [
                n("div", { ref: "fill", staticClass: "slider__fill" }),
                e._l(e.handles, function (t) {
                  return n(
                    "div",
                    {
                      staticClass: "slider__handle",
                      style: "transform: translate(" + t.position + "px, 0); background-color: " + t.color + ";",
                      on: { mousedown: e.select, touchstart: e.select }
                    },
                    [e.label ? n("div", { staticClass: "slider__label" }, [e._v(e._s(t.value))]) : e._e()]
                  );
                })
              ],
              2
            ),
            n("input", {
              directives: [{ name: "show", rawName: "v-show", value: e.editable, expression: "editable" }],
              ref: "input",
              staticClass: "slider__input",
              attrs: { type: e.colorCode ? "text" : "number" },
              on: {
                change: function (t) {
                  e.updateValue(t.target.value);
                }
              }
            })
          ]);
        };
      D._withStripped = !0;
      var U,
        T,
        W,
        G =
          ((U = { render: D, staticRenderFns: [] }),
          void 0,
          !1,
          ((W = ("function" == typeof (T = B) ? T.options : T) || {}).__file =
            "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Slider.vue"),
          W.render || ((W.render = U.render), (W.staticRenderFns = U.staticRenderFns), (W._compiled = !0)),
          (W._scopeId = undefined),
          W),
        X = {
          name: "VertePicker",
          components: { Slider: G },
          props: {
            mode: { type: String, default: "square" },
            edge: { type: Number, default: 250 },
            diameter: { type: Number, default: 180 },
            satSlider: { type: Boolean, default: !0 },
            alpha: { type: Number, default: 1 },
            value: { type: String, default: "#fff" }
          },
          data: function () {
            return { currentHue: 0, currentSat: 0, currentColor: "", cursor: {}, preventUpdating: !1, preventEcho: !1 };
          },
          watch: {
            value: function (e) {
              this.preventUpdating ? (this.preventUpdating = !1) : this.handleValue(e, !0);
            },
            currentSat: function () {
              this.updateWheelColors(), this.updateColor();
            },
            currentHue: function () {
              this.updateSquareColors(), this.updateColor();
            }
          },
          methods: {
            initSquare: function () {
              var e = this.edge;
              (this.$refs.canvas.width = e),
                (this.$refs.canvas.height = e - 100),
                (this.ctx = this.$refs.canvas.getContext("2d")),
                this.updateSquareColors();
            },
            initWheel: function () {
              (this.$refs.canvas.width = this.diameter),
                (this.$refs.canvas.height = this.diameter),
                (this.ctx = this.$refs.canvas.getContext("2d")),
                (this.circle = { path: new Path2D(), xCords: this.diameter / 2, yCords: this.diameter / 2, radius: this.diameter / 2 }),
                this.circle.path.moveTo(this.circle.xCords, this.circle.yCords),
                this.circle.path.arc(this.circle.xCords, this.circle.yCords, this.circle.radius, 0, 360),
                this.circle.path.closePath(),
                this.updateWheelColors();
            },
            handleValue: function (e, t) {
              void 0 === t && (t = !1);
              var n = this.pickerRect,
                r = n.width,
                i = n.height;
              if (((this.currentColor = N(e)), (this.preventEcho = !0), "wheel" === this.mode)) {
                var a = (100 - this.currentColor.lum) * (this.diameter / 200),
                  o = this.diameter / 2,
                  s = (function (e, t) {
                    return { x: e * Math.cos(t * Math.PI * 2), y: e * Math.sin(t * Math.PI * 2) };
                  })(a, this.currentColor.hue / 360);
                (this.cursor = { x: s.x + o, y: s.y + o }), (this.currentSat = this.currentColor.sat);
              }
              if ("square" === this.mode) {
                var l = (this.currentColor.sat / 100) * r,
                  u = ((100 - this.currentColor.lum) / 100) * i;
                (this.cursor = { x: l, y: u }), (this.currentHue = this.currentColor.hue);
              }
            },
            updateCursorPosition: function (e) {
              var t = e.x,
                n = e.y,
                r = this.pickerRect,
                i = r.left,
                a = r.top,
                o = r.width,
                s = r.height,
                l = { x: Math.min(Math.max(t - i, 0), o), y: Math.min(Math.max(n - a, 0), s) };
              ("wheel" !== this.mode || this.ctx.isPointInPath(this.circle.path, l.x, l.y)) && ((this.cursor = l), this.updateColor());
            },
            updateColor: function (e) {
              void 0 === e && (e = !1),
                this.preventEcho
                  ? (this.preventEcho = !1)
                  : ((this.currentColor = this.getCanvasColor()),
                    (this.preventUpdating = !0),
                    this.$emit("change", this.currentColor),
                    this.$emit("input", this.currentColor));
            },
            updateWheelColors: function () {
              var e = this;
              if (this.circle) {
                var t = this.pickerRect,
                  n = t.width,
                  r = t.height,
                  i = this.circle.xCords,
                  a = this.circle.yCords,
                  o = this.circle.radius,
                  s = this.satSlider ? this.currentSat : 100;
                this.ctx.clearRect(0, 0, n, r);
                for (var l = 0; l < 360; l += 1) {
                  var u = e.ctx.createRadialGradient(i, a, 0, i, a, o),
                    c = ((l - 2) * Math.PI) / 180,
                    h = ((l + 2) * Math.PI) / 180;
                  e.ctx.beginPath(),
                    e.ctx.moveTo(i, a),
                    e.ctx.arc(i, a, o, c, h),
                    e.ctx.closePath(),
                    u.addColorStop(0, "hsl(" + l + ", " + s + "%, 100%)"),
                    u.addColorStop(0.5, "hsl(" + l + ", " + s + "%, 50%)"),
                    u.addColorStop(1, "hsl(" + l + ", " + s + "%, 0%)"),
                    (e.ctx.fillStyle = u),
                    e.ctx.fill();
                }
              }
            },
            updateSquareColors: function () {
              var e = this.pickerRect,
                t = e.width,
                n = e.height;
              this.ctx.clearRect(0, 0, t, n),
                (this.ctx.fillStyle = "hsl(" + this.currentHue + ", 100%, 50%)"),
                this.ctx.fillRect(0, 0, t, n);
              var r = this.ctx.createLinearGradient(0, 0, t, 0);
              r.addColorStop(0, "hsl(0, 0%, 50%)"),
                r.addColorStop(1, "hsla(0, 0%, 50%, 0)"),
                (this.ctx.fillStyle = r),
                this.ctx.fillRect(0, 0, t, n);
              var i = this.ctx.createLinearGradient(0, 0, 0, n);
              i.addColorStop(0, "hsl(0, 0%, 100%)"),
                i.addColorStop(0.5, "hsla(0, 0%, 100%, 0)"),
                i.addColorStop(0.5, "hsla(0, 0%, 0%, 0)"),
                i.addColorStop(1, "hsl(0, 0%, 0%) "),
                (this.ctx.fillStyle = i),
                this.ctx.fillRect(0, 0, t, n);
            },
            getCanvasColor: function () {
              var e = this.cursor,
                t = e.x,
                n = e.y,
                r = 0,
                i = 0,
                a = 0;
              if ("wheel" === this.mode) {
                var o = this.diameter / 2,
                  s = (function (e, t) {
                    return { r: Math.sqrt(e * e + t * t), theta: (180 * Math.atan2(t, e)) / Math.PI };
                  })(t - o, -1 * (n - o)),
                  l = s.r,
                  u = s.theta;
                (i = (100 * (o - l)) / o), (a = ~Math.sign(u) ? 360 - u : -u), (r = this.currentSat);
              }
              if ("square" === this.mode) {
                var c = this.pickerRect;
                (r = (100 * t) / c.width), (i = 100 - (100 * n) / c.height), (a = this.currentHue);
              }
              return new C.HslColor({ alpha: this.alpha, hue: Math.round(a), sat: Math.round(r), lum: Math.round(i) });
            },
            handleSelect: function (e) {
              var t = this;
              e.preventDefault(), (this.pickerRect = this.$refs.canvas.getBoundingClientRect()), this.updateCursorPosition(q(e));
              var n = function (e) {
                  window.requestAnimationFrame(function () {
                    t.updateCursorPosition(q(e));
                  });
                },
                r = function () {
                  document.removeEventListener("mousemove", n),
                    document.removeEventListener("touchmove", n),
                    document.removeEventListener("mouseup", r),
                    document.removeEventListener("touchend", r);
                };
              document.addEventListener("mousemove", n),
                document.addEventListener("touchmove", n),
                document.addEventListener("mouseup", r),
                document.addEventListener("touchend", r);
            }
          },
          mounted: function () {
            var e = this;
            (this.pickerRect = this.$refs.canvas.getBoundingClientRect()),
              "wheel" === this.mode && this.initWheel(),
              "square" === this.mode && this.initSquare(),
              this.$nextTick(function () {
                e.handleValue(e.value);
              });
          }
        },
        Z = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n(
            "div",
            { ref: "picker", staticClass: "verte-picker", class: "verte-picker--" + e.mode },
            [
              n("div", { ref: "origin", staticClass: "verte-picker__origin" }, [
                n("canvas", {
                  ref: "canvas",
                  staticClass: "verte-picker__canvas",
                  on: { mousedown: e.handleSelect, touchstart: e.handleSelect }
                }),
                n("div", {
                  ref: "cursor",
                  staticClass: "verte-picker__cursor",
                  style: "transform: translate3d(" + e.cursor.x + "px, " + e.cursor.y + "px, 0)"
                })
              ]),
              "square" === e.mode
                ? n("slider", {
                    staticClass: "verte-picker__slider",
                    attrs: { gradient: ["#f00", "#ff0", "#0f0", "#0ff", "#00f", "#f0f", "#f00"], editable: !1, max: 360 },
                    model: {
                      value: e.currentHue,
                      callback: function (t) {
                        e.currentHue = t;
                      },
                      expression: "currentHue"
                    }
                  })
                : e._e(),
              "wheel" === e.mode
                ? n("slider", {
                    staticClass: "verte-picker__slider",
                    attrs: {
                      gradient: [
                        "hsl(" + e.currentColor.hue + ",0%," + e.currentColor.lum + "%)",
                        "hsl(" + e.currentColor.hue + ",100%," + e.currentColor.lum + "%)"
                      ],
                      editable: !1,
                      max: 100
                    },
                    model: {
                      value: e.currentSat,
                      callback: function (t) {
                        e.currentSat = t;
                      },
                      expression: "currentSat"
                    }
                  })
                : e._e()
            ],
            1
          );
        };
      Z._withStripped = !0;
      var Y,
        J = (function (e, t, n, r, i, a, o, s) {
          var l = ("function" == typeof n ? n.options : n) || {};
          return (
            (l.__file = "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Picker.vue"),
            l.render || ((l.render = e.render), (l.staticRenderFns = e.staticRenderFns), (l._compiled = !0)),
            (l._scopeId = void 0),
            l
          );
        })({ render: Z, staticRenderFns: [] }, 0, X);
      function K(e, t) {
        if (Y) return Y;
        var n = (t = t || {}).recentColors,
          r = t.onRecentColorsChange;
        return (Y = new e({
          data: function () {
            return { recentColors: n || z(6, j) };
          },
          methods: {
            addRecentColor: function (e) {
              this.recentColors.includes(e) ||
                (this.recentColors.length >= 6 && this.recentColors.pop(), this.recentColors.unshift(e), r && r(this.recentColors));
            }
          }
        }));
      }
      var Q = {
          name: "Verte",
          components: { Picker: J, Slider: G },
          props: {
            picker: { type: String, default: "square", validator: I(0, ["wheel", "square"]) },
            value: { type: String, default: "#000" },
            model: { type: String, default: "hsl", validator: I(0, ["rgb", "hex", "hsl"]) },
            display: { type: String, default: "picker", validator: I(0, ["picker", "widget"]) },
            menuPosition: { type: String, default: "bottom", validator: I(0, ["top", "bottom", "left", "right", "center"]) },
            showHistory: { type: Boolean, default: !0 },
            colorHistory: { type: Array, default: null },
            enableAlpha: { type: Boolean, default: !0 },
            rgbSliders: { type: Boolean, default: !1 },
            draggable: { type: Boolean, default: !0 }
          },
          data: function () {
            return {
              isMenuActive: !0,
              isLoading: !0,
              rgb: $("#000"),
              hex: V("#000"),
              hsl: N("#000"),
              delta: { x: 0, y: 0 },
              currentModel: "",
              internalColorHistory: []
            };
          },
          computed: {
            $_verteStore: function () {
              return K();
            },
            historySource: function () {
              return this.colorHistory ? this.internalColorHistory : this.$_verteStore.recentColors;
            },
            currentColor: {
              get: function () {
                return this[this.model], this[this.model].toString();
              },
              set: function (e) {
                this.selectColor(e);
              }
            },
            alpha: {
              get: function () {
                return this[this.model] ? (isNaN(this[this.model].alpha) ? 1 : this[this.model].alpha) : 1;
              },
              set: function (e) {
                (this[this.model].alpha = e), this.selectColor(this[this.model]);
              }
            },
            menuOnly: function () {
              return "widget" === this.display;
            }
          },
          watch: {
            value: function (e, t) {
              e !== t && e !== this.currentColor && this.selectColor(e);
            },
            rgb: {
              handler: function (e) {
                (this.hex = V(e.toString())), this.$emit("input", this.currentColor);
              },
              deep: !0
            },
            colorHistory: function (e) {
              this.internalColorHistory !== e && (this.internalColorHistory = [].concat(e));
            }
          },
          beforeCreate: function () {
            K(this.$options._base);
          },
          install: function (e, t) {
            K(e, t), e.component("Verte", this);
          },
          created: function () {
            this.colorHistory && (this.internalColorHistory = [].concat(this.colorHistory)),
              this.selectColor(this.value || "#000", !0),
              (this.currentModel = this.model);
          },
          mounted: function () {
            var e = this;
            this.$nextTick(function () {
              (e.isLoading = !1), e.menuOnly || (e.isMenuActive = !1);
            });
          },
          methods: {
            selectColor: function (e, t) {
              void 0 === t && (t = !1),
                (function (e) {
                  var t = d(e);
                  return "rgb" === t ? !w(e).invalid : "hex" === t ? !k(e).invalid : "hsl" === t && !S(e).invalid;
                })(e) && ((this.rgb = $(e)), (this.hex = V(e)), (this.hsl = N(e)), t || this.$emit("input", this.currentColor));
            },
            switchModel: function () {
              var e = ["hex", "rgb", "hsl"],
                t = e.indexOf(this.currentModel);
              this.currentModel = e[t + 1] || e[0];
            },
            handleMenuDrag: function (e) {
              var t = this;
              if (2 !== e.button) {
                e.preventDefault();
                var n = Object.assign({}, this.delta),
                  r = q(e),
                  i = function (e) {
                    window.requestAnimationFrame(function () {
                      var i = q(e);
                      (t.delta.x = n.x + i.x - r.x), (t.delta.y = n.y + i.y - r.y);
                    });
                  },
                  a = function () {
                    document.removeEventListener("mousemove", i),
                      document.removeEventListener("mouseup", a),
                      document.removeEventListener("touchmove", i),
                      document.removeEventListener("touchup", a);
                  };
                document.addEventListener("mousemove", i),
                  document.addEventListener("mouseup", a),
                  document.addEventListener("touchmove", i),
                  document.addEventListener("touchup", a);
              }
            },
            submit: function () {
              this.$emit("beforeSubmit", this.currentColor),
                this.addColorToHistory(this.currentColor),
                this.$emit("input", this.currentColor),
                this.$emit("submit", this.currentColor);
            },
            addColorToHistory: function (e) {
              if (this.colorHistory)
                return (
                  this.internalColorHistory.length >= 6 && this.internalColorHistory.pop(),
                  this.internalColorHistory.unshift(e),
                  void this.$emit("update:colorHistory", this.internalColorHistory)
                );
              this.$_verteStore.addRecentColor(this.currentColor);
            },
            inputChanged: function (e, t) {
              var n = e.target;
              if ("hex" !== this.currentModel) {
                var r = Math.min(Math.max(n.value, n.min), n.max);
                (this[this.currentModel][t] = r), this.selectColor(this[this.currentModel]);
              } else this.selectColor(n.value);
            },
            toggleMenu: function () {
              this.isMenuActive ? this.closeMenu() : this.openMenu();
            },
            closeMenu: function () {
              (this.isMenuActive = !1),
                document.removeEventListener("mousedown", this.closeCallback),
                this.$emit("close", this.currentColor);
            },
            openMenu: function () {
              var e = this;
              (this.isMenuActive = !0),
                (this.closeCallback = function (t) {
                  A(t.target, e.$refs.menu) || A(t.target, e.$refs.guide) || e.closeMenu();
                }),
                document.addEventListener("mousedown", this.closeCallback);
            }
          }
        },
        ee = function () {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("div", { staticClass: "verte", class: { "verte--loading": e.isLoading } }, [
            e.menuOnly
              ? e._e()
              : n(
                  "button",
                  {
                    ref: "guide",
                    staticClass: "verte__guide",
                    style: "color: " + e.currentColor + "; fill: " + e.currentColor + ";",
                    attrs: { type: "button" },
                    on: { click: e.toggleMenu }
                  },
                  [
                    e._t("default", [
                      n("svg", { staticClass: "verte__icon", attrs: { viewBox: "0 0 24 24" } }, [
                        n(
                          "pattern",
                          { attrs: { id: "checkerboard", width: "6", height: "6", patternUnits: "userSpaceOnUse", fill: "FFF" } },
                          [
                            n("rect", { attrs: { fill: "#7080707f", x: "0", width: "3", height: "3", y: "0" } }),
                            n("rect", { attrs: { fill: "#7080707f", x: "3", width: "3", height: "3", y: "3" } })
                          ]
                        ),
                        n("circle", { attrs: { cx: "12", cy: "12", r: "12", fill: "url(#checkerboard)" } }),
                        n("circle", { attrs: { cx: "12", cy: "12", r: "12" } })
                      ])
                    ])
                  ],
                  2
                ),
            n(
              "div",
              {
                staticClass: "verte__menu-origin",
                class: [
                  "verte__menu-origin--" + e.menuPosition,
                  { "verte__menu-origin--static": e.menuOnly, "verte__menu-origin--active": e.isMenuActive }
                ]
              },
              [
                n(
                  "div",
                  {
                    ref: "menu",
                    staticClass: "verte__menu",
                    style: "transform: translate(" + e.delta.x + "px, " + e.delta.y + "px)",
                    attrs: { tabindex: "-1" }
                  },
                  [
                    e.menuOnly
                      ? e._e()
                      : n("button", { staticClass: "verte__close", attrs: { type: "button" }, on: { click: e.closeMenu } }, [
                          n("svg", { staticClass: "verte__icon verte__icon--small", attrs: { viewBox: "0 0 24 24" } }, [
                            n("title", [e._v("Close Icon")]),
                            n("path", {
                              attrs: {
                                d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                              }
                            })
                          ])
                        ]),
                    e.draggable && !e.menuOnly
                      ? n("div", { staticClass: "verte__draggable", on: { mousedown: e.handleMenuDrag, touchstart: e.handleMenuDrag } })
                      : e._e(),
                    n("Picker", {
                      attrs: { mode: e.picker, alpha: e.alpha },
                      model: {
                        value: e.currentColor,
                        callback: function (t) {
                          e.currentColor = t;
                        },
                        expression: "currentColor"
                      }
                    }),
                    n(
                      "div",
                      { staticClass: "verte__controller" },
                      [
                        e.enableAlpha
                          ? n("Slider", {
                              attrs: {
                                gradient: [
                                  "rgba(" + e.rgb.red + ", " + e.rgb.green + ", " + e.rgb.blue + ", 0)",
                                  "rgba(" + e.rgb.red + ", " + e.rgb.green + ", " + e.rgb.blue + ", 1)"
                                ],
                                min: 0,
                                max: 1,
                                step: 0.01,
                                editable: !1
                              },
                              model: {
                                value: e.alpha,
                                callback: function (t) {
                                  e.alpha = t;
                                },
                                expression: "alpha"
                              }
                            })
                          : e._e(),
                        e.rgbSliders
                          ? [
                              n("Slider", {
                                attrs: {
                                  gradient: [
                                    "rgb(0," + e.rgb.green + "," + e.rgb.blue + ")",
                                    "rgb(255," + e.rgb.green + "," + e.rgb.blue + ")"
                                  ]
                                },
                                model: {
                                  value: e.rgb.red,
                                  callback: function (t) {
                                    e.$set(e.rgb, "red", t);
                                  },
                                  expression: "rgb.red"
                                }
                              }),
                              n("Slider", {
                                attrs: {
                                  gradient: ["rgb(" + e.rgb.red + ",0," + e.rgb.blue + ")", "rgb(" + e.rgb.red + ",255," + e.rgb.blue + ")"]
                                },
                                model: {
                                  value: e.rgb.green,
                                  callback: function (t) {
                                    e.$set(e.rgb, "green", t);
                                  },
                                  expression: "rgb.green"
                                }
                              }),
                              n("Slider", {
                                attrs: {
                                  gradient: [
                                    "rgb(" + e.rgb.red + "," + e.rgb.green + ",0)",
                                    "rgb(" + e.rgb.red + "," + e.rgb.green + ",255)"
                                  ]
                                },
                                model: {
                                  value: e.rgb.blue,
                                  callback: function (t) {
                                    e.$set(e.rgb, "blue", t);
                                  },
                                  expression: "rgb.blue"
                                }
                              })
                            ]
                          : e._e(),
                        n(
                          "div",
                          { staticClass: "verte__inputs" },
                          [
                            n("button", { staticClass: "verte__model", attrs: { type: "button" }, on: { click: e.switchModel } }, [
                              e._v(e._s(e.currentModel))
                            ]),
                            "hsl" === e.currentModel
                              ? [
                                  n("input", {
                                    staticClass: "verte__input",
                                    attrs: { type: "number", max: "360", min: "0" },
                                    domProps: { value: e.hsl.hue },
                                    on: {
                                      change: function (t) {
                                        e.inputChanged(t, "hue");
                                      }
                                    }
                                  }),
                                  n("input", {
                                    staticClass: "verte__input",
                                    attrs: { type: "number", min: "0", max: "100" },
                                    domProps: { value: e.hsl.sat },
                                    on: {
                                      change: function (t) {
                                        e.inputChanged(t, "sat");
                                      }
                                    }
                                  }),
                                  n("input", {
                                    staticClass: "verte__input",
                                    attrs: { type: "number", min: "0", max: "100" },
                                    domProps: { value: e.hsl.lum },
                                    on: {
                                      change: function (t) {
                                        e.inputChanged(t, "lum");
                                      }
                                    }
                                  })
                                ]
                              : e._e(),
                            "rgb" === e.currentModel
                              ? [
                                  n("input", {
                                    staticClass: "verte__input",
                                    attrs: { type: "number", min: "0", max: "255" },
                                    domProps: { value: e.rgb.red },
                                    on: {
                                      change: function (t) {
                                        e.inputChanged(t, "red");
                                      }
                                    }
                                  }),
                                  n("input", {
                                    staticClass: "verte__input",
                                    attrs: { type: "number", min: "0", max: "255" },
                                    domProps: { value: e.rgb.green },
                                    on: {
                                      change: function (t) {
                                        e.inputChanged(t, "green");
                                      }
                                    }
                                  }),
                                  n("input", {
                                    staticClass: "verte__input",
                                    attrs: { type: "number", min: "0", max: "255" },
                                    domProps: { value: e.rgb.blue },
                                    on: {
                                      change: function (t) {
                                        e.inputChanged(t, "blue");
                                      }
                                    }
                                  })
                                ]
                              : e._e(),
                            "hex" === e.currentModel
                              ? [
                                  n("input", {
                                    staticClass: "verte__input",
                                    attrs: { type: "text" },
                                    domProps: { value: e.hex },
                                    on: {
                                      change: function (t) {
                                        e.inputChanged(t, "hex");
                                      }
                                    }
                                  })
                                ]
                              : e._e(),
                            n("button", { staticClass: "verte__submit", attrs: { type: "button" }, on: { click: e.submit } }, [
                              n("title", [e._v("Submit Icon")]),
                              n("svg", { staticClass: "verte__icon", attrs: { viewBox: "0 0 24 24" } }, [
                                n("path", { attrs: { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" } })
                              ])
                            ])
                          ],
                          2
                        ),
                        e.showHistory
                          ? n(
                              "div",
                              { ref: "recent", staticClass: "verte__recent" },
                              e._l(e.historySource, function (t) {
                                return n("a", {
                                  staticClass: "verte__recent-color",
                                  style: "color: " + t,
                                  attrs: { role: "button", href: "#" },
                                  on: {
                                    click: function (n) {
                                      n.preventDefault(), e.selectColor(t);
                                    }
                                  }
                                });
                              })
                            )
                          : e._e()
                      ],
                      2
                    )
                  ],
                  1
                )
              ]
            )
          ]);
        };
      ee._withStripped = !0;
      var te = (function (e, t, n, r, i, a, o, s) {
        var l = ("function" == typeof n ? n.options : n) || {};
        return (
          (l.__file = "/mnt/c/Users/Abdelrahman/Projects/verte/src/components/Verte.vue"),
          l.render || ((l.render = e.render), (l.staticRenderFns = e.staticRenderFns), (l._compiled = !0)),
          (l._scopeId = void 0),
          l
        );
      })({ render: ee, staticRenderFns: [] }, 0, Q);
      const ne = te;
    },
    79467: (e, t, n) => {
      var r = n(47494);
      r.__esModule && (r = r.default),
        "string" == typeof r && (r = [[e.id, r, ""]]),
        r.locals && (e.exports = r.locals),
        (0, n(45346).Z)("551daa86", r, !1, { ssrId: !0 });
    }
  }
]);
