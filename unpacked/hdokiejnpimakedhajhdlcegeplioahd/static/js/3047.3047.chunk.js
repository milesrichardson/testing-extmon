"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [3047],
  {
    73047: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return Dt;
          }
        });
      var r,
        o,
        i,
        a,
        s,
        l = n(92577),
        d = n(91640),
        p = n(48693),
        c = n(23381),
        u = n(57989),
        h = n(96222),
        C = n(98223),
        f = n(27645),
        g = n(26807),
        x = n(250),
        m = n(74665),
        k = n(44340),
        j = ["title", "titleId"];
      function b() {
        return (
          (b = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          b.apply(this, arguments)
        );
      }
      function w(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function y(e, t) {
        var n = e.title,
          l = e.titleId,
          d = w(e, j);
        return c.createElement(
          "svg",
          b(
            {
              width: 18,
              height: 14,
              viewBox: "0 0 18 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l
            },
            d
          ),
          n ? c.createElement("title", { id: l }, n) : null,
          r ||
            (r = c.createElement("path", {
              d: "M11.5998 5.669C11.5582 5.66309 11.5201 5.64233 11.4926 5.61056C11.465 5.57879 11.4499 5.53814 11.45 5.4961V4.7835C11.45 4.13372 11.1919 3.51055 10.7324 3.05108C10.2729 2.59162 9.64978 2.3335 9 2.3335C8.35022 2.3335 7.72705 2.59162 7.26759 3.05108C6.80812 3.51055 6.55 4.13372 6.55 4.7835V5.4961C6.55008 5.53814 6.53496 5.57879 6.50744 5.61056C6.47991 5.64233 6.44182 5.66309 6.4002 5.669C6.15022 5.70503 5.9216 5.82996 5.75626 6.02088C5.59092 6.21181 5.49994 6.45593 5.5 6.7085V10.5585C5.5 10.837 5.61062 11.104 5.80754 11.301C6.00445 11.4979 6.27152 11.6085 6.55 11.6085H11.45C11.7285 11.6085 11.9956 11.4979 12.1925 11.301C12.3894 11.104 12.5 10.837 12.5 10.5585V6.7085C12.5001 6.45593 12.4091 6.21181 12.2437 6.02088C12.0784 5.82996 11.8498 5.70503 11.5998 5.669ZM9.7 8.9835C9.7 9.12194 9.65895 9.25728 9.58203 9.3724C9.50511 9.48751 9.39579 9.57723 9.26788 9.63021C9.13997 9.68319 8.99922 9.69706 8.86344 9.67005C8.72765 9.64304 8.60292 9.57637 8.50503 9.47847C8.40713 9.38058 8.34046 9.25585 8.31345 9.12006C8.28644 8.98427 8.3003 8.84353 8.35329 8.71562C8.40627 8.58771 8.49599 8.47838 8.6111 8.40147C8.72622 8.32455 8.86155 8.2835 9 8.2835C9.18565 8.2835 9.3637 8.35725 9.49498 8.48852C9.62625 8.6198 9.7 8.79784 9.7 8.9835ZM7.95 4.7835C7.95 4.50502 8.06063 4.23795 8.25754 4.04103C8.45445 3.84412 8.72152 3.7335 9 3.7335C9.27848 3.7335 9.54555 3.84412 9.74246 4.04103C9.93938 4.23795 10.05 4.50502 10.05 4.7835V5.4835C10.05 5.52991 10.0316 5.57442 9.99875 5.60724C9.96593 5.64006 9.92142 5.6585 9.875 5.6585H8.125C8.07859 5.6585 8.03408 5.64006 8.00126 5.60724C7.96844 5.57442 7.95 5.52991 7.95 5.4835V4.7835Z",
              fill: "#40526D"
            })),
          o ||
            (o = c.createElement("path", {
              d: "M9.7 8.9835C9.7 9.12194 9.65895 9.25728 9.58203 9.3724C9.50511 9.48751 9.39579 9.57723 9.26788 9.63021C9.13997 9.68319 8.99922 9.69706 8.86344 9.67005C8.72765 9.64304 8.60292 9.57637 8.50503 9.47847C8.40713 9.38058 8.34046 9.25585 8.31345 9.12006C8.28644 8.98427 8.3003 8.84353 8.35329 8.71562C8.40627 8.58771 8.49599 8.47838 8.6111 8.40147C8.72622 8.32455 8.86155 8.2835 9 8.2835C9.18565 8.2835 9.3637 8.35725 9.49498 8.48852C9.62625 8.6198 9.7 8.79784 9.7 8.9835Z",
              fill: "#40526D"
            })),
          i || (i = c.createElement("rect", { x: 2.5, y: 0.5, width: 13, height: 13, rx: 1.5, stroke: "#40526D" })),
          a ||
            (a = c.createElement("path", {
              d: "M2.6007 11.8039C2.52331 11.8843 2.39459 11.8843 2.3172 11.8039L0.649929 10.0712C0.529669 9.9462 0.618241 9.73806 0.791682 9.73806H4.12622C4.29966 9.73806 4.38824 9.9462 4.26798 10.0712L2.6007 11.8039Z",
              fill: "#40526D"
            })),
          s ||
            (s = c.createElement("path", {
              d: "M15.4159 2.14731C15.4933 2.06689 15.622 2.06689 15.6994 2.14731L17.3667 3.87999C17.4869 4.00497 17.3984 4.21311 17.2249 4.21311H13.8904C13.7169 4.21311 13.6284 4.00497 13.7486 3.87999L15.4159 2.14731Z",
              fill: "#40526D"
            }))
        );
      }
      var v = c.forwardRef(y),
        E = (n.p, n(88159)),
        L = n(73560);
      var D,
        Z,
        H = n.p + "static/media/old_generate_password.cce39d155fa2aae116a8771099d7f912.svg",
        M = ["title", "titleId"];
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          V.apply(this, arguments)
        );
      }
      function O(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function B(e, t) {
        var n = e.title,
          r = e.titleId,
          o = O(e, M);
        return c.createElement(
          "svg",
          V(
            {
              width: 15,
              height: 15,
              viewBox: "0 0 15 15",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            o
          ),
          n ? c.createElement("title", { id: r }, n) : null,
          D ||
            (D = c.createElement("path", {
              d: "M7.09375 1.40625C7.09375 1.62969 7.27656 1.8125 7.5 1.8125C9.02344 1.8125 10.4453 2.40156 11.5219 3.47812C12.5984 4.55469 13.1875 5.97656 13.1875 7.5C13.1875 9.00313 12.6188 10.4047 11.5625 11.4812V10.3438C11.5625 10.1203 11.3797 9.9375 11.1562 9.9375C10.9328 9.9375 10.75 10.1203 10.75 10.3438V12.7812H13.1875C13.4109 12.7812 13.5938 12.5984 13.5938 12.375C13.5938 12.1516 13.4109 11.9688 13.1875 11.9688H12.2125C13.3703 10.75 14 9.18594 14 7.5C14 5.77344 13.3297 4.12812 12.0906 2.90937C10.8719 1.67031 9.22656 1 7.5 1C7.27656 1 7.09375 1.18281 7.09375 1.40625Z",
              fill: "#283952",
              stroke: "#283952"
            })),
          Z ||
            (Z = c.createElement("path", {
              d: "M2.90937 12.0906C4.12812 13.3094 5.77344 14 7.5 14C7.72344 14 7.90625 13.8172 7.90625 13.5938C7.90625 13.3703 7.72344 13.1875 7.5 13.1875C5.97656 13.1875 4.55469 12.5984 3.47812 11.5219C2.40156 10.4453 1.8125 9.02344 1.8125 7.5C1.8125 5.99688 2.38125 4.59531 3.4375 3.51875V4.65625C3.4375 4.87969 3.62031 5.0625 3.84375 5.0625C4.06719 5.0625 4.25 4.87969 4.25 4.65625V2.21875H1.8125C1.58906 2.21875 1.40625 2.40156 1.40625 2.625C1.40625 2.84844 1.58906 3.03125 1.8125 3.03125H2.7875C1.62969 4.25 1 5.81406 1 7.5C1 9.22656 1.67031 10.8719 2.90937 12.0906Z",
              fill: "#283952",
              stroke: "#283952"
            }))
        );
      }
      var W,
        R,
        I = c.forwardRef(B),
        P = (n.p, ["title", "titleId"]);
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          S.apply(this, arguments)
        );
      }
      function N(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function z(e, t) {
        var n = e.title,
          r = e.titleId,
          o = N(e, P);
        return c.createElement(
          "svg",
          S(
            {
              width: 13,
              height: 13,
              viewBox: "0 0 13 13",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            o
          ),
          n ? c.createElement("title", { id: r }, n) : null,
          W ||
            (W = c.createElement("path", {
              d: "M7.04171 1.0835H2.16671C1.5684 1.0835 1.08337 1.56852 1.08337 2.16683V7.04183C1.08337 7.64014 1.5684 8.12516 2.16671 8.12516H7.04171C7.64002 8.12516 8.12504 7.64014 8.12504 7.04183V2.16683C8.12504 1.56852 7.64002 1.0835 7.04171 1.0835Z",
              fill: "#283952"
            })),
          R ||
            (R = c.createElement("path", {
              d: "M11.9167 6.875C11.9167 5.77043 11.0212 4.875 9.91667 4.875H9.20833V6.20833C9.20833 7.86519 7.86519 9.20833 6.20833 9.20833H4.875V9.91667C4.875 11.0212 5.77043 11.9167 6.875 11.9167H9.91667C11.0212 11.9167 11.9167 11.0212 11.9167 9.91667V6.875Z",
              fill: "#283952"
            }))
        );
      }
      var F,
        T,
        _,
        q,
        G,
        A,
        Q,
        K,
        U,
        Y,
        J,
        X,
        $,
        ee,
        te,
        ne,
        re,
        oe,
        ie,
        ae,
        se,
        le,
        de,
        pe,
        ce,
        ue,
        he,
        Ce,
        fe,
        ge,
        xe = c.forwardRef(z),
        me = (n.p, ["title", "titleId"]);
      function ke() {
        return (
          (ke = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          ke.apply(this, arguments)
        );
      }
      function je(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function be(e, t) {
        var n = e.title,
          r = e.titleId,
          o = je(e, me);
        return c.createElement(
          "svg",
          ke(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            o
          ),
          n ? c.createElement("title", { id: r }, n) : null,
          F ||
            (F = c.createElement("path", {
              d: "M43.7597 6.31982H14.0006V28.8794H43.7597V6.31982Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          T ||
            (T = c.createElement("path", {
              d: "M28.8799 9.19971H16.8804V25.9991H28.8799V9.19971Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          _ ||
            (_ = c.createElement("path", {
              d: "M43.7597 6.31973H14V3.37352C14 3.00924 14.1447 2.65988 14.4023 2.4023C14.6599 2.14471 15.0092 2 15.3735 2H42.3862C42.7504 2 43.0998 2.14471 43.3574 2.4023C43.615 2.65988 43.7597 3.00924 43.7597 3.37352V6.31973Z",
              fill: "white"
            })),
          q ||
            (q = c.createElement("path", {
              d: "M42.3156 2H15.4432C15.0607 2 14.6939 2.15195 14.4234 2.42241C14.153 2.69288 14.001 3.05971 14.001 3.4422V3.86742H43.7607V3.4422C43.7607 3.25257 43.7233 3.0648 43.6506 2.88964C43.578 2.71447 43.4715 2.55536 43.3373 2.4214C43.203 2.28744 43.0437 2.18127 42.8684 2.10896C42.6931 2.03665 42.5053 1.99963 42.3156 2Z",
              fill: "#B5D9F1"
            })),
          G ||
            (G = c.createElement("path", {
              d: "M43.0729 37.5187H14.6868C14.5046 37.5187 14.3299 37.4464 14.2011 37.3176C14.0724 37.1888 14 37.0141 14 36.8319V28.877H43.7597V36.8319C43.7597 37.0141 43.6873 37.1888 43.5585 37.3176C43.4297 37.4464 43.2551 37.5187 43.0729 37.5187Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          A ||
            (A = c.createElement("path", {
              d: "M37.0403 33.1992C37.0403 33.3883 37.003 33.5756 36.9306 33.7503C36.8582 33.9251 36.7521 34.0838 36.6184 34.2176C36.4846 34.3513 36.3258 34.4573 36.151 34.5297C35.9763 34.602 35.789 34.6392 35.5998 34.6391H22.1605C21.7786 34.6391 21.4123 34.4874 21.1423 34.2174C20.8723 33.9473 20.7206 33.5811 20.7206 33.1992C20.7206 32.8173 20.8723 32.4511 21.1423 32.181C21.4123 31.911 21.7786 31.7593 22.1605 31.7593H35.5998C35.9818 31.7593 36.3481 31.911 36.6182 32.181C36.8883 32.451 37.0402 32.8172 37.0403 33.1992Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Q ||
            (Q = c.createElement("path", {
              d: "M35.1202 31.7593H22.6406C22.6406 31.7593 22.3247 35.865 21.6929 37.9281C21.6563 38.0474 21.6482 38.1737 21.6694 38.2967C21.6906 38.4196 21.7403 38.5359 21.8146 38.6362C21.889 38.7364 21.9858 38.8178 22.0974 38.8737C22.2089 38.9297 22.3321 38.9586 22.4569 38.9583H35.3033C35.4281 38.9586 35.5513 38.9297 35.6628 38.8737C35.7744 38.8178 35.8712 38.7364 35.9456 38.6362C36.0199 38.5359 36.0697 38.4196 36.0908 38.2967C36.112 38.1737 36.1039 38.0474 36.0674 37.9281C35.4361 35.865 35.1202 31.7593 35.1202 31.7593Z",
              fill: "white"
            })),
          K ||
            (K = c.createElement("path", {
              d: "M43.7597 32.4975H47.9598C48.3417 32.4975 48.708 32.3458 48.978 32.0758C49.248 31.8057 49.3997 31.4395 49.3997 31.0576C49.3998 30.8685 49.3626 30.6812 49.2903 30.5065C49.2179 30.3317 49.1119 30.173 48.9782 30.0392C48.8444 29.9055 48.6857 29.7995 48.5109 29.7271C48.3362 29.6548 48.1489 29.6176 47.9598 29.6177H43.7597V32.4975Z",
              fill: "white"
            })),
          U || (U = c.createElement("path", { d: "M45.1395 29.6177H43.7597V32.4975H45.1395V29.6177Z", fill: "#B5D9F1" })),
          Y ||
            (Y = c.createElement("path", {
              d: "M43.7597 32.4975H47.9598C48.3417 32.4975 48.708 32.3458 48.978 32.0758C49.248 31.8057 49.3997 31.4395 49.3997 31.0576C49.3998 30.8685 49.3626 30.6812 49.2903 30.5065C49.2179 30.3317 49.1119 30.173 48.9782 30.0392C48.8444 29.9055 48.6857 29.7995 48.5109 29.7271C48.3362 29.6548 48.1489 29.6176 47.9598 29.6177H43.7597V32.4975Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          J ||
            (J = c.createElement("path", {
              d: "M47.9598 29.6173V19.5454",
              stroke: "#264887",
              strokeWidth: 0.572302,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          X ||
            (X = c.createElement("path", {
              d: "M40.8799 9.19971H28.8804V25.9991H40.8799V9.19971Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          $ ||
            ($ = c.createElement("path", {
              d: "M14.0006 6.31982L16.8804 9.19965H40.8799L43.7597 6.31982H14.0006Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ee ||
            (ee = c.createElement("path", {
              d: "M16.8804 25.9995L14.0006 28.8793H43.7597L40.8799 25.9995H16.8804Z",
              fill: "#B5D9F1",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          te ||
            (te = c.createElement("path", {
              d: "M25.0403 36.0786H32.72",
              stroke: "#D32D27",
              strokeWidth: 0.572302,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ne ||
            (ne = c.createElement("path", {
              d: "M27.4405 34.1592H32.72",
              stroke: "#D32D27",
              strokeWidth: 0.572302,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          re ||
            (re = c.createElement("path", {
              d: "M35.1202 31.7593H22.6406C22.6406 31.7593 22.3247 35.865 21.6929 37.9281C21.6563 38.0474 21.6482 38.1737 21.6694 38.2967C21.6906 38.4196 21.7403 38.5359 21.8146 38.6362C21.889 38.7364 21.9858 38.8178 22.0974 38.8737C22.2089 38.9297 22.3321 38.9586 22.4569 38.9583H35.3033C35.4281 38.9586 35.5513 38.9297 35.6628 38.8737C35.7744 38.8178 35.8712 38.7364 35.9456 38.6362C36.0199 38.5359 36.0697 38.4196 36.0908 38.2967C36.112 38.1737 36.1039 38.0474 36.0674 37.9281C35.4361 35.865 35.1202 31.7593 35.1202 31.7593Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          oe ||
            (oe = c.createElement("path", {
              d: "M43.7597 6.31973H14V3.37352C14 3.00924 14.1447 2.65988 14.4023 2.4023C14.6599 2.14471 15.0092 2 15.3735 2H42.3862C42.7504 2 43.0998 2.14471 43.3574 2.4023C43.615 2.65988 43.7597 3.00924 43.7597 3.37352V6.31973Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ie ||
            (ie = c.createElement("path", {
              d: "M47.9598 19.5456C49.3958 19.5456 50.5598 18.3816 50.5598 16.9457C50.5598 15.5097 49.3958 14.3457 47.9598 14.3457C46.5239 14.3457 45.3599 15.5097 45.3599 16.9457C45.3599 18.3816 46.5239 19.5456 47.9598 19.5456Z",
              fill: "#D32D27"
            })),
          ae ||
            (ae = c.createElement("path", {
              d: "M47.9598 19.5456C49.3958 19.5456 50.5598 18.3816 50.5598 16.9457C50.5598 15.5097 49.3958 14.3457 47.9598 14.3457C46.5239 14.3457 45.3599 15.5097 45.3599 16.9457C45.3599 18.3816 46.5239 19.5456 47.9598 19.5456Z",
              stroke: "#264887",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          se ||
            (se = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.6967 14.7994C25.6967 13.1034 24.3138 11.729 22.6086 11.729C20.9034 11.729 19.5204 13.1034 19.5204 14.7994C19.5204 16.2045 20.471 17.3863 21.7664 17.7508V18.4279L21.2049 18.9856L21.7664 19.5444V20.1027L21.2049 20.6609L21.7664 21.2192V22.0565L22.6086 22.8939L23.4508 22.0565V17.7508C24.7462 17.3863 25.6967 16.2045 25.6967 14.7994Z",
              fill: "#264887",
              stroke: "#264887",
              strokeWidth: 0.457446,
              strokeLinecap: "round",
              strokeDasharray: "43 1.66 0.24 0.95"
            })),
          le ||
            (le = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M23.2024 14.4606C23.2024 14.7884 22.9363 15.0545 22.6085 15.0545C22.2807 15.0545 22.0146 14.7884 22.0146 14.4606C22.0146 14.1328 22.2807 13.8667 22.6085 13.8667C22.9363 13.8667 23.2024 14.1328 23.2024 14.4606Z",
              fill: "white"
            })),
          de ||
            (de = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M38.2874 14.7994C38.2874 13.1034 36.9044 11.729 35.1992 11.729C33.494 11.729 32.1111 13.1034 32.1111 14.7994C32.1111 16.2045 33.0616 17.3863 34.357 17.7508V18.4279L33.7955 18.9856L34.357 19.5444V20.1027L33.7955 20.6609L34.357 21.2192V22.0565L35.1992 22.8939L36.0414 22.0565V17.7508C37.3368 17.3863 38.2874 16.2045 38.2874 14.7994Z",
              fill: "#264887",
              stroke: "#264887",
              strokeWidth: 0.457446,
              strokeLinecap: "round",
              strokeDasharray: "43 1.66 0.24 0.95"
            })),
          pe ||
            (pe = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M35.793 14.4606C35.793 14.7884 35.527 15.0545 35.1992 15.0545C34.8713 15.0545 34.6053 14.7884 34.6053 14.4606C34.6053 14.1328 34.8713 13.8667 35.1992 13.8667C35.527 13.8667 35.793 14.1328 35.793 14.4606Z",
              fill: "white"
            })),
          ce ||
            (ce = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.25 36.5C4.94036 36.5 5.5 35.9404 5.5 35.25C5.5 34.5596 4.94036 34 4.25 34C3.55964 34 3 34.5596 3 35.25C3 35.9404 3.55964 36.5 4.25 36.5Z",
              stroke: "#B5D9F1"
            })),
          ue ||
            (ue = c.createElement("rect", {
              x: 56,
              y: 14,
              width: 2.5,
              height: 2.50001,
              stroke: "#B5D9F1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          he || (he = c.createElement("path", { d: "M7.10428 29.1042L9.47946 31.4793", stroke: "#B5D9F1", strokeLinecap: "round" })),
          Ce || (Ce = c.createElement("path", { d: "M9.39569 29.1042L7.02051 31.4793", stroke: "#B5D9F1", strokeLinecap: "round" })),
          fe || (fe = c.createElement("path", { d: "M52.1043 9.10416L54.4795 11.4793", stroke: "#B5D9F1", strokeLinecap: "round" })),
          ge || (ge = c.createElement("path", { d: "M54.3957 9.10416L52.0205 11.4793", stroke: "#B5D9F1", strokeLinecap: "round" }))
        );
      }
      var we,
        ye,
        ve,
        Ee,
        Le,
        De,
        Ze,
        He,
        Me,
        Ve,
        Oe,
        Be,
        We,
        Re,
        Ie,
        Pe,
        Se,
        Ne,
        ze,
        Fe,
        Te,
        _e,
        qe,
        Ge,
        Ae,
        Qe,
        Ke,
        Ue,
        Ye,
        Je,
        Xe = c.forwardRef(be),
        $e = (n.p, ["title", "titleId"]);
      function et() {
        return (
          (et = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          et.apply(this, arguments)
        );
      }
      function tt(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
        }
        return o;
      }
      function nt(e, t) {
        var n = e.title,
          r = e.titleId,
          o = tt(e, $e);
        return c.createElement(
          "svg",
          et(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r
            },
            o
          ),
          n ? c.createElement("title", { id: r }, n) : null,
          we ||
            (we = c.createElement("path", {
              d: "M43.7597 6.31982H14.0006V28.8794H43.7597V6.31982Z",
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ye ||
            (ye = c.createElement("path", {
              d: "M28.8799 9.19971H16.8804V25.9991H28.8799V9.19971Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ve ||
            (ve = c.createElement("path", {
              d: "M43.7597 6.31973H14V3.37352C14 3.00924 14.1447 2.65988 14.4023 2.4023C14.6599 2.14471 15.0092 2 15.3735 2H42.3862C42.7504 2 43.0998 2.14471 43.3574 2.4023C43.615 2.65988 43.7597 3.00924 43.7597 3.37352V6.31973Z",
              fill: "white"
            })),
          Ee ||
            (Ee = c.createElement("path", {
              d: "M42.3156 2H15.4432C15.0607 2 14.6939 2.15195 14.4234 2.42241C14.153 2.69288 14.001 3.05971 14.001 3.4422V3.86742H43.7607V3.4422C43.7607 3.25257 43.7233 3.0648 43.6506 2.88964C43.578 2.71447 43.4715 2.55536 43.3373 2.4214C43.203 2.28744 43.0437 2.18127 42.8684 2.10896C42.6931 2.03665 42.5053 1.99963 42.3156 2Z",
              fill: "#D7DBE0"
            })),
          Le ||
            (Le = c.createElement("path", {
              d: "M43.0729 37.5187H14.6868C14.5046 37.5187 14.3299 37.4464 14.2011 37.3176C14.0724 37.1888 14 37.0141 14 36.8319V28.877H43.7597V36.8319C43.7597 37.0141 43.6873 37.1888 43.5585 37.3176C43.4297 37.4464 43.2551 37.5187 43.0729 37.5187Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          De ||
            (De = c.createElement("path", {
              d: "M37.0403 33.1992C37.0403 33.3883 37.003 33.5756 36.9306 33.7503C36.8582 33.9251 36.7521 34.0838 36.6184 34.2176C36.4846 34.3513 36.3258 34.4573 36.151 34.5297C35.9763 34.602 35.789 34.6392 35.5998 34.6391H22.1605C21.7786 34.6391 21.4123 34.4874 21.1423 34.2174C20.8723 33.9473 20.7206 33.5811 20.7206 33.1992C20.7206 32.8173 20.8723 32.4511 21.1423 32.181C21.4123 31.911 21.7786 31.7593 22.1605 31.7593H35.5998C35.9818 31.7593 36.3481 31.911 36.6182 32.181C36.8883 32.451 37.0402 32.8172 37.0403 33.1992Z",
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Ze ||
            (Ze = c.createElement("path", {
              d: "M35.1202 31.7593H22.6406C22.6406 31.7593 22.3247 35.865 21.6929 37.9281C21.6563 38.0474 21.6482 38.1737 21.6694 38.2967C21.6906 38.4196 21.7403 38.5359 21.8146 38.6362C21.889 38.7364 21.9858 38.8178 22.0974 38.8737C22.2089 38.9297 22.3321 38.9586 22.4569 38.9583H35.3033C35.4281 38.9586 35.5513 38.9297 35.6628 38.8737C35.7744 38.8178 35.8712 38.7364 35.9456 38.6362C36.0199 38.5359 36.0697 38.4196 36.0908 38.2967C36.112 38.1737 36.1039 38.0474 36.0674 37.9281C35.4361 35.865 35.1202 31.7593 35.1202 31.7593Z",
              fill: "white"
            })),
          He ||
            (He = c.createElement("path", {
              d: "M43.7597 32.4975H47.9598C48.3417 32.4975 48.708 32.3458 48.978 32.0758C49.248 31.8057 49.3997 31.4395 49.3997 31.0576C49.3998 30.8685 49.3626 30.6812 49.2903 30.5065C49.2179 30.3317 49.1119 30.173 48.9782 30.0392C48.8444 29.9055 48.6857 29.7995 48.5109 29.7271C48.3362 29.6548 48.1489 29.6176 47.9598 29.6177H43.7597V32.4975Z",
              fill: "white"
            })),
          Me || (Me = c.createElement("path", { d: "M45.1395 29.6177H43.7597V32.4975H45.1395V29.6177Z", fill: "#D7DBE0" })),
          Ve ||
            (Ve = c.createElement("path", {
              d: "M43.7597 32.4975H47.9598C48.3417 32.4975 48.708 32.3458 48.978 32.0758C49.248 31.8057 49.3997 31.4395 49.3997 31.0576C49.3998 30.8685 49.3626 30.6812 49.2903 30.5065C49.2179 30.3317 49.1119 30.173 48.9782 30.0392C48.8444 29.9055 48.6857 29.7995 48.5109 29.7271C48.3362 29.6548 48.1489 29.6176 47.9598 29.6177H43.7597V32.4975Z",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Oe ||
            (Oe = c.createElement("path", {
              d: "M47.9598 29.6173V19.5454",
              stroke: "#D7DBE0",
              strokeWidth: 0.572302,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Be ||
            (Be = c.createElement("path", {
              d: "M40.8799 9.19971H28.8804V25.9991H40.8799V9.19971Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          We ||
            (We = c.createElement("path", {
              d: "M14.0006 6.31982L16.8804 9.19965H40.8799L43.7597 6.31982H14.0006Z",
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Re ||
            (Re = c.createElement("path", {
              d: "M16.8804 25.9995L14.0006 28.8793H43.7597L40.8799 25.9995H16.8804Z",
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Ie ||
            (Ie = c.createElement("path", {
              d: "M25.0403 36.0786H32.72",
              stroke: "#D7DBE0",
              strokeWidth: 0.572302,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Pe ||
            (Pe = c.createElement("path", {
              d: "M27.4405 34.1592H32.72",
              stroke: "#D7DBE0",
              strokeWidth: 0.572302,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Se ||
            (Se = c.createElement("path", {
              d: "M35.1202 31.7593H22.6406C22.6406 31.7593 22.3247 35.865 21.6929 37.9281C21.6563 38.0474 21.6482 38.1737 21.6694 38.2967C21.6906 38.4196 21.7403 38.5359 21.8146 38.6362C21.889 38.7364 21.9858 38.8178 22.0974 38.8737C22.2089 38.9297 22.3321 38.9586 22.4569 38.9583H35.3033C35.4281 38.9586 35.5513 38.9297 35.6628 38.8737C35.7744 38.8178 35.8712 38.7364 35.9456 38.6362C36.0199 38.5359 36.0697 38.4196 36.0908 38.2967C36.112 38.1737 36.1039 38.0474 36.0674 37.9281C35.4361 35.865 35.1202 31.7593 35.1202 31.7593Z",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Ne ||
            (Ne = c.createElement("path", {
              d: "M43.7597 6.31973H14V3.37352C14 3.00924 14.1447 2.65988 14.4023 2.4023C14.6599 2.14471 15.0092 2 15.3735 2H42.3862C42.7504 2 43.0998 2.14471 43.3574 2.4023C43.615 2.65988 43.7597 3.00924 43.7597 3.37352V6.31973Z",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ze ||
            (ze = c.createElement("path", {
              d: "M47.9598 19.5456C49.3958 19.5456 50.5598 18.3816 50.5598 16.9457C50.5598 15.5097 49.3958 14.3457 47.9598 14.3457C46.5239 14.3457 45.3599 15.5097 45.3599 16.9457C45.3599 18.3816 46.5239 19.5456 47.9598 19.5456Z",
              fill: "#D7DBE0"
            })),
          Fe ||
            (Fe = c.createElement("path", {
              d: "M47.9598 19.5456C49.3958 19.5456 50.5598 18.3816 50.5598 16.9457C50.5598 15.5097 49.3958 14.3457 47.9598 14.3457C46.5239 14.3457 45.3599 15.5097 45.3599 16.9457C45.3599 18.3816 46.5239 19.5456 47.9598 19.5456Z",
              stroke: "#D7DBE0",
              strokeWidth: 1.25,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Te ||
            (Te = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M25.6967 14.7994C25.6967 13.1034 24.3138 11.729 22.6086 11.729C20.9034 11.729 19.5204 13.1034 19.5204 14.7994C19.5204 16.2045 20.471 17.3863 21.7664 17.7508V18.4279L21.2049 18.9856L21.7664 19.5444V20.1027L21.2049 20.6609L21.7664 21.2192V22.0565L22.6086 22.8939L23.4508 22.0565V17.7508C24.7462 17.3863 25.6967 16.2045 25.6967 14.7994Z",
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 0.457446,
              strokeLinecap: "round",
              strokeDasharray: "43 1.66 0.24 0.95"
            })),
          _e ||
            (_e = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M23.2024 14.4606C23.2024 14.7884 22.9363 15.0545 22.6085 15.0545C22.2807 15.0545 22.0146 14.7884 22.0146 14.4606C22.0146 14.1328 22.2807 13.8667 22.6085 13.8667C22.9363 13.8667 23.2024 14.1328 23.2024 14.4606Z",
              fill: "white"
            })),
          qe ||
            (qe = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M38.2874 14.7994C38.2874 13.1034 36.9044 11.729 35.1992 11.729C33.494 11.729 32.1111 13.1034 32.1111 14.7994C32.1111 16.2045 33.0616 17.3863 34.357 17.7508V18.4279L33.7955 18.9856L34.357 19.5444V20.1027L33.7955 20.6609L34.357 21.2192V22.0565L35.1992 22.8939L36.0414 22.0565V17.7508C37.3368 17.3863 38.2874 16.2045 38.2874 14.7994Z",
              fill: "#D7DBE0",
              stroke: "#D7DBE0",
              strokeWidth: 0.457446,
              strokeLinecap: "round",
              strokeDasharray: "43 1.66 0.24 0.95"
            })),
          Ge ||
            (Ge = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M35.793 14.4606C35.793 14.7884 35.527 15.0545 35.1992 15.0545C34.8713 15.0545 34.6053 14.7884 34.6053 14.4606C34.6053 14.1328 34.8713 13.8667 35.1992 13.8667C35.527 13.8667 35.793 14.1328 35.793 14.4606Z",
              fill: "white"
            })),
          Ae ||
            (Ae = c.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M4.25 36.5C4.94036 36.5 5.5 35.9404 5.5 35.25C5.5 34.5596 4.94036 34 4.25 34C3.55964 34 3 34.5596 3 35.25C3 35.9404 3.55964 36.5 4.25 36.5Z",
              stroke: "#D7DBE0"
            })),
          Qe ||
            (Qe = c.createElement("rect", {
              x: 56,
              y: 14,
              width: 2.5,
              height: 2.50001,
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Ke || (Ke = c.createElement("path", { d: "M7.10428 29.1042L9.47946 31.4793", stroke: "#D7DBE0", strokeLinecap: "round" })),
          Ue || (Ue = c.createElement("path", { d: "M9.39569 29.1042L7.02051 31.4793", stroke: "#D7DBE0", strokeLinecap: "round" })),
          Ye || (Ye = c.createElement("path", { d: "M52.1043 9.10416L54.4795 11.4793", stroke: "#D7DBE0", strokeLinecap: "round" })),
          Je || (Je = c.createElement("path", { d: "M54.3957 9.10416L52.0205 11.4793", stroke: "#D7DBE0", strokeLinecap: "round" }))
        );
      }
      var rt = c.forwardRef(nt),
        ot = (n.p, n(27403));
      var it = (0, d.Z)("p", { target: "ege7sj021" })({
          name: "qwumz4",
          styles: "font-size:12px;line-height:24px;color:#1d3049;margin-bottom:24px;b{font-weight:600;display:block;}"
        }),
        at = (0, d.Z)(it, { target: "ege7sj020" })({ name: "cn3xcj", styles: "margin-bottom:12px" }),
        st = (0, d.Z)(f.K, { target: "ege7sj019" })({ name: "1auzifb", styles: "width:100%;border-radius:4px" }),
        lt = (0, d.Z)("div", { target: "ege7sj018" })({
          name: "z9zx78",
          styles: "width:100%;display:flex;align-items:center;border-radius:4px;position:relative;max-width:352px;margin:0 auto 12px auto"
        }),
        dt = (0, d.Z)("input", { target: "ege7sj017" })({
          name: "t90yg2",
          styles: "max-width:320px;border-radius:4px;border:1px solid #d7dbe0;width:100%;height:40px;padding:8px"
        }),
        pt = (0, d.Z)("img", { target: "ege7sj016" })({
          name: "7n0orr",
          styles: "position:absolute;height:18px;width:18px;right:8px;cursor:pointer"
        }),
        ct = (0, d.Z)("div", { target: "ege7sj015" })({
          name: "1cb7ayk",
          styles:
            "position:absolute;bottom:-287px;right:0;height:292px;width:100%;max-width:320px;background:#f7f9fc;border:1px solid #d5d9de;border-radius:4px;display:none;::before{content:'';width:20px;height:20px;position:absolute;top:-10px;right:26px;border:1px solid #d5d9de;background:#f7f9fc;transform:rotateZ(45deg);z-index:0;border-right:0;border-bottom:0;}&.is-active{display:block;}"
        }),
        ut = (0, d.Z)("span", { target: "ege7sj014" })({
          name: "wnfzmx",
          styles: "font-size:14px;line-height:20px;color:#40526d;margin-left:8px"
        }),
        ht = (0, d.Z)("div", { target: "ege7sj013" })({ name: "s5xdrg", styles: "display:flex;align-items:center" }),
        Ct = (0, d.Z)("div", { target: "ege7sj012" })({ name: "1yl4phf", styles: "position:relative;padding:16px;height:100%;width:100%" }),
        ft = (0, d.Z)("div", { target: "ege7sj011" })({
          name: "132ngq0",
          styles:
            "background:#ffffff;border:1px solid #c0c6ce;border-radius:4px;display:flex;align-items:center;margin:16px 0;position:relative;overflow:hidden;.site-name,.action-name,.site-username{font-weight:600;font-size:14px;line-height:20px;display:block;color:#2c405a;}.site-username{font-weight:400;}&:hover{div[class^='MockInfieldMenuItemContentOverlay'],div[class*='-MockInfieldMenuItemContentOverlay']{opacity:0.97;}}"
        }),
        gt = (0, d.Z)("div", { target: "ege7sj010" })({ name: "1d3w5wq", styles: "width:100%" }),
        xt = (0, d.Z)(f.K, { target: "ege7sj09" })({ name: "iv7uq4", styles: "width:100%;border-radius:4px;margin:16px 0 24px" }),
        mt = (0, d.Z)("div", { target: "ege7sj08" })({
          name: "i3dwor",
          styles: "display:flex;align-items:center;justify-content:space-between;cursor:default"
        }),
        kt = (0, d.Z)("span", { target: "ege7sj07" })({
          name: "59bs7h",
          styles:
            "display:inline-flex;position:relative;padding:6px 12px;border:1px solid transparent;font-weight:600;font-size:12px;line-height:17px;color:#3b70d4"
        }),
        jt = (0, d.Z)("div", { target: "ege7sj06" })({ name: "7m0wmr", styles: "min-height:94px" }),
        bt = (0, d.Z)("div", { target: "ege7sj05" })({
          name: "mi6apd",
          styles:
            "font-size:14px;line-height:20px;font-weight:600;color:#213044;display:flex;align-items:center;padding:0 12px;justify-content:space-between;background:#f4fdfb;min-height:60px;position:relative;border-bottom:1px solid #c0c6ce;&::after{content:'';position:absolute;height:3px;width:98%;background:#00a878;bottom:-2px;left:0;}"
        }),
        wt = (0, d.Z)("div", { target: "ege7sj04" })({
          name: "1w2czvz",
          styles:
            "padding:0 12px;display:flex;align-items:center;justify-content:space-between;span{font-size:14px;line-height:20px;color:#40526d;display:flex;align-items:center;}.info-text{color:#00a878;}"
        }),
        yt = (0, d.Z)("div", { target: "ege7sj03" })({
          name: "dwjydh",
          styles:
            "display:inline-flex;position:relative;padding:6px 12px;span{font-weight:600;min-width:52px;justify-content:space-between;}"
        }),
        vt = (0, d.Z)("button", { target: "ege7sj02" })({ name: "yjbayo", styles: "cursor:pointer;background:transparent;border:0" }),
        Et = (0, d.Z)("input", { target: "ege7sj01" })({
          name: "4pyrrk",
          styles: "background:transparent;border:0;width:100%;font-weight:600;font-size:14px;line-height:20px"
        }),
        Lt = (0, d.Z)("div", { target: "ege7sj00" })({
          name: "wm4v8m",
          styles:
            "position:absolute;bottom:-175px;right:0;height:181px;width:100%;max-width:320px;background:#f7f9fc;border:1px solid #d5d9de;border-radius:4px;display:none;padding:0 12px;::before{content:'';width:20px;height:20px;position:absolute;top:-10px;right:6px;border:1px solid #d5d9de;background:#f7f9fc;transform:rotateZ(45deg);z-index:0;border-right:0;border-bottom:0;}&.is-active{display:block;}.header-logo{display:flex;justify-content:center;align-items:center;padding:20px 0;svg{height:15px;}}.title{font-size:12px;line-height:16px;color:#8e969c;font-weight:600;text-transform:uppercase;}.old-generate-password-menu__content{position:relative;overflow:hidden;display:flex;justify-content:space-between;margin-top:8px;input{background:transparent;border:0;width:200px;font-weight:600;font-size:12px;line-height:16px;color:#1d3049;padding:0;}}.strength-indicator{display:flex;margin-top:12px;padding-top:8px;border-top:1px solid #ebecef;.indicator{height:4px;background:#00a878;width:56px;display:inline-block;margin:0 1px;&:first-of-type{border-top-left-radius:2px;border-bottom-left-radius:2px;}&:last-of-type{border-top-right-radius:2px;border-bottom-right-radius:2px;background:#ebecef;}}}.action{display:flex;width:100%;justify-content:flex-end;.cta{font-size:12px;line-height:17px;height:29px;padding:0;text-transform:uppercase;width:auto;}}"
        }),
        Dt = function (e) {
          var t,
            n = e.skill,
            r = e.expanded,
            o = e.fromAllSkillsDialog;
          if ("undefined" !== typeof top && "undefined" !== typeof top.bg && "undefined" !== typeof top.bg.lpCreatePass) t = top.bg;
          else if ("undefined" !== typeof top && "undefined" !== typeof top.lpCreatePass) t = top;
          else {
            t = {
              lpCreatePass: function (e, t, n, r, o, i, a, s, l) {
                return (function (e) {
                  for (var t = [], n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789$!&*%()_=", r = 0; r < e; r++)
                    t.push(n.charAt(Math.floor(71 * Math.random())));
                  return t.join("");
                })(e);
              }
            };
          }
          var i = function () {
              return t.lpCreatePass(18, !0, !0, !0, !0, 2, !1, !0, !1);
            },
            a = (0, u.J)(),
            s = (0, c.useState)(!1),
            d = (0, l.Z)(s, 2),
            f = d[0],
            j = d[1],
            b = (0, c.useState)(!1),
            w = (0, l.Z)(b, 2),
            y = w[0],
            D = w[1],
            Z = (0, c.useState)(""),
            M = (0, l.Z)(Z, 2),
            V = M[0],
            O = M[1],
            B = (0, c.useState)(i()),
            W = (0, l.Z)(B, 2),
            R = W[0],
            P = W[1],
            S = (0, c.useState)(!0),
            N = (0, l.Z)(S, 2),
            z = N[0],
            F = N[1],
            T = (0, h.d)(function (e) {
              return e.features[k.e.NEW_INFIELD_DESIGN_FOR_ONBOARDING];
            }),
            _ = m.R.extensionInstalled();
          return (0, ot.jsx)(C.j, {
            "data-component": "GenerateStrongPassword",
            skill: n,
            icon: (n.completed && (0, ot.jsx)(rt, null)) || (0, ot.jsx)(Xe, null),
            title: (0, ot.jsx)(p.Trans, { id: "Use the password generator" }),
            description: o
              ? (0, ot.jsx)(p.Trans, { id: "Stay safe with unique and unguessable passwords" })
              : (0, ot.jsx)(p.Trans, { id: "Stay safe with unique and unguessable passwords saved to your vault" }),
            expanded: r,
            fromAllSkillsDialog: o,
            bodyTitle: (0, ot.jsx)(p.Trans, { id: "Effortless security" }),
            automationId: "so-generate-strong-password",
            bodyContent: (0, ot.jsx)(
              c.Fragment,
              null,
              (0, ot.jsx)(
                it,
                null,
                (0, ot.jsx)(p.Trans, {
                  id: "Generate strong passwords for your websites and apps. On any sign-up form, you\u2019re only a click away from a unique, unguessable password. You'll save it to your vault and fill it when you need."
                })
              ),
              (0, ot.jsx)(
                at,
                null,
                (0, ot.jsx)("b", null, (0, ot.jsx)(p.Trans, { id: "Try it!" })),
                (0, ot.jsx)(p.Trans, { id: "Click the icon to see how LastPass generates a password." })
              ),
              (0, ot.jsx)(
                "div",
                { className: "autofill-outline" },
                (0, ot.jsx)(
                  lt,
                  null,
                  (0, ot.jsx)(dt, {
                    placeholder: "Password",
                    className: "password-input",
                    onClick: function () {
                      j(!f), D(!y);
                    },
                    "data-automation-id": "so-strong-password-input",
                    disabled: !_,
                    defaultValue: V,
                    onChange: function () {}
                  }),
                  T &&
                    (0, ot.jsx)(
                      c.Fragment,
                      null,
                      (0, ot.jsx)(pt, {
                        src: L.Z,
                        onClick: function () {
                          _ && j(!f);
                        }
                      }),
                      (0, ot.jsx)(
                        ct,
                        { className: "".concat(f ? "is-active" : "") },
                        (0, ot.jsx)(
                          Ct,
                          null,
                          (0, ot.jsx)(
                            ht,
                            null,
                            (0, ot.jsx)(v, null),
                            (0, ot.jsx)(ut, null, (0, ot.jsx)(p.Trans, { id: "Generate Secure Password" }))
                          ),
                          (0, ot.jsx)(
                            ft,
                            null,
                            (0, ot.jsx)(
                              gt,
                              null,
                              (0, ot.jsx)(
                                jt,
                                null,
                                (0, ot.jsx)(
                                  bt,
                                  null,
                                  (0, ot.jsx)(Et, { value: R, readOnly: !0 }),
                                  (0, ot.jsx)(
                                    vt,
                                    {
                                      onClick: function () {
                                        P(i());
                                      }
                                    },
                                    (0, ot.jsx)(I, null)
                                  )
                                ),
                                (0, ot.jsx)(
                                  wt,
                                  null,
                                  (0, ot.jsx)(
                                    yt,
                                    null,
                                    (0, ot.jsx)("span", null, (0, ot.jsx)(xe, null), (0, ot.jsx)(p.Trans, { id: "Copy" }))
                                  )
                                )
                              )
                            )
                          ),
                          (0, ot.jsx)(
                            xt,
                            {
                              red: !0,
                              theme: g.Q,
                              onClick: function () {
                                O(R), j(!f), F(!1);
                              }
                            },
                            (0, ot.jsx)(p.Trans, { id: "Use securely generated password" })
                          ),
                          (0, ot.jsx)(mt, null, (0, ot.jsx)(E.r, null), (0, ot.jsx)(kt, null, (0, ot.jsx)(p.Trans, { id: "Show History" })))
                        )
                      )
                    ),
                  !T &&
                    (0, ot.jsx)(
                      c.Fragment,
                      null,
                      (0, ot.jsx)(pt, {
                        src: H,
                        onClick: function () {
                          _ && D(!y);
                        }
                      }),
                      (0, ot.jsx)(
                        Lt,
                        { className: "".concat(y ? "is-active" : "") },
                        (0, ot.jsx)("div", { className: "header-logo" }, (0, ot.jsx)(E.r, null)),
                        (0, ot.jsx)(
                          "div",
                          { className: "title" },
                          (0, ot.jsx)("span", null, (0, ot.jsx)(p.Trans, { id: "Generate Password" }))
                        ),
                        (0, ot.jsx)(
                          "div",
                          { className: "old-generate-password-menu__content" },
                          (0, ot.jsx)("input", { value: R, readOnly: !0 }),
                          (0, ot.jsx)(
                            vt,
                            {
                              onClick: function () {
                                P(i());
                              }
                            },
                            (0, ot.jsx)(I, null)
                          )
                        ),
                        (0, ot.jsx)(
                          "div",
                          { className: "strength-indicator" },
                          (0, ot.jsx)("span", { className: "indicator" }),
                          (0, ot.jsx)("span", { className: "indicator" }),
                          (0, ot.jsx)("span", { className: "indicator" }),
                          (0, ot.jsx)("span", { className: "indicator" }),
                          (0, ot.jsx)("span", { className: "indicator" })
                        ),
                        (0, ot.jsx)(
                          "div",
                          { className: "action" },
                          (0, ot.jsx)(
                            xt,
                            {
                              red: !0,
                              theme: g.Q,
                              onClick: function () {
                                O(R), D(!y), F(!1);
                              },
                              className: "cta"
                            },
                            (0, ot.jsx)(p.Trans, { id: "Fill Password" })
                          )
                        )
                      )
                    )
                ),
                (0, ot.jsx)(
                  st,
                  {
                    red: !0,
                    theme: g.Q,
                    onClick: function () {
                      _ && (a.complete(n.type), a.hideExpandedSkillInDrawer());
                    },
                    disabled: z,
                    "data-automation-id": "so-generate-strong-password-all-set",
                    className: "action-cta"
                  },
                  (0, ot.jsx)(p.Trans, { id: "All set" })
                )
              ),
              !_ &&
                (0, ot.jsx)(x.v, {
                  text: (0, ot.jsx)(p.Trans, { id: "You'll need to download the LastPass browser extension to generate passwords." })
                })
            )
          });
        };
    }
  }
]);
