"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [2263],
  {
    33620: function (e, t, r) {
      r.d(t, {
        r: function () {
          return d;
        }
      });
      var n,
        a = r(23381),
        l = ["title", "titleId"];
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      function o(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function s(e, t) {
        var r = e.title,
          s = e.titleId,
          d = o(e, l);
        return a.createElement(
          "svg",
          i(
            {
              width: 16,
              height: 16,
              viewBox: "0 0 16 16",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": s
            },
            d
          ),
          r ? a.createElement("title", { id: s }, r) : null,
          n ||
            (n = a.createElement("path", {
              d: "M13.8695 2.89106C13.7496 2.80139 13.6135 2.73657 13.469 2.7003C13.3245 2.66403 13.1743 2.65703 13.0271 2.6797C12.8799 2.70236 12.7386 2.75425 12.6111 2.83239C12.4837 2.91054 12.3727 3.01341 12.2844 3.13512L6.90967 10.5398L3.49192 7.764C3.25627 7.58075 2.95927 7.49852 2.6646 7.53492C2.36992 7.57132 2.10102 7.72346 1.91554 7.95872C1.73006 8.19399 1.64275 8.49365 1.67234 8.79348C1.70193 9.09331 1.84606 9.36944 2.07383 9.56268L6.41338 13.0864C6.5333 13.1816 6.67071 13.2516 6.81757 13.2923C6.96444 13.333 7.11783 13.3436 7.26877 13.3234C7.41971 13.3033 7.56519 13.2528 7.6967 13.1749C7.82821 13.0971 7.94311 12.9934 8.0347 12.8699L14.1135 4.50094C14.2017 4.379 14.2653 4.2406 14.3008 4.09368C14.3362 3.94675 14.3428 3.79417 14.3202 3.64466C14.2975 3.49515 14.246 3.35164 14.1687 3.22233C14.0914 3.09302 13.9897 2.98046 13.8695 2.89106Z",
              fill: "#748193"
            }))
        );
      }
      var d = a.forwardRef(s);
      r.p;
    },
    80529: function (e, t, r) {
      r.d(t, {
        r: function () {
          return h;
        }
      });
      var n,
        a,
        l,
        i,
        o,
        s,
        d,
        c,
        p = r(23381),
        f = ["title", "titleId"];
      function u() {
        return (
          (u = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          u.apply(this, arguments)
        );
      }
      function C(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function m(e, t) {
        var r = e.title,
          m = e.titleId,
          h = C(e, f);
        return p.createElement(
          "svg",
          u(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": m
            },
            h
          ),
          r ? p.createElement("title", { id: m }, r) : null,
          n ||
            (n = p.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M53.5 20C54.3284 20 55 19.3284 55 18.5C55 17.6716 54.3284 17 53.5 17C52.6716 17 52 17.6716 52 18.5C52 19.3284 52.6716 20 53.5 20Z",
              stroke: "#D7DBE0"
            })),
          a || (a = p.createElement("path", { d: "M46.1025 3.10246L48.4389 5.43889", stroke: "#D7DBE0", strokeLinecap: "round" })),
          l || (l = p.createElement("path", { d: "M48.3566 3.10246L46.0201 5.43889", stroke: "#D7DBE0", strokeLinecap: "round" })),
          i ||
            (i = p.createElement("rect", {
              x: 12,
              y: 2,
              width: 3,
              height: 3,
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          o || (o = p.createElement("path", { d: "M2.10246 16.1025L4.43888 18.4389", stroke: "#D7DBE0", strokeLinecap: "round" })),
          s || (s = p.createElement("path", { d: "M4.35656 16.1025L2.02013 18.4389", stroke: "#D7DBE0", strokeLinecap: "round" })),
          d ||
            (d = p.createElement("path", {
              d: "M30.0277 9.2V9.8923H30.72H37.2C38.8059 9.8923 40.1077 11.1941 40.1077 12.8V19.28V19.9723H40.8H43.68C45.6835 19.9723 47.3077 21.5965 47.3077 23.6C47.3077 25.6035 45.6835 27.2277 43.68 27.2277H40.8H40.1077V27.92V34.4C40.1077 36.0059 38.8059 37.3077 37.2 37.3077H31.4123V35.12C31.4123 32.3518 29.1682 30.1077 26.4 30.1077C23.6318 30.1077 21.3877 32.3518 21.3877 35.12V37.3077H15.6C13.9941 37.3077 12.6923 36.0059 12.6923 34.4V28.6123H14.88C17.6482 28.6123 19.8923 26.3682 19.8923 23.6C19.8923 20.8318 17.6482 18.5877 14.88 18.5877H12.6923V12.8C12.6923 11.1941 13.9941 9.8923 15.6 9.8923H22.08H22.7723V9.2V6.32C22.7723 4.31648 24.3965 2.69231 26.4 2.69231C28.4035 2.69231 30.0277 4.31648 30.0277 6.32V9.2Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.38461
            })),
          c ||
            (c = p.createElement("path", {
              d: "M30.095 9.2V9.825H30.72H37.2C38.843 9.825 40.175 11.1569 40.175 12.8V19.28V19.905H40.8H43.68C45.7207 19.905 47.375 21.5593 47.375 23.6C47.375 25.6407 45.7207 27.295 43.68 27.295H40.8H40.175V27.92V34.4C40.175 36.043 38.843 37.375 37.2 37.375H31.345V35.12C31.345 32.3889 29.131 30.175 26.4 30.175C23.6689 30.175 21.455 32.3889 21.455 35.12V37.375H15.6C13.957 37.375 12.625 36.043 12.625 34.4V28.545H14.88C17.611 28.545 19.825 26.331 19.825 23.6C19.825 20.8689 17.611 18.655 14.88 18.655H12.625V12.8C12.625 11.1569 13.957 9.825 15.6 9.825H22.08H22.705V9.2V6.32C22.705 4.27931 24.3593 2.625 26.4 2.625C28.4407 2.625 30.095 4.27931 30.095 6.32V9.2Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25
            }))
        );
      }
      var h = p.forwardRef(m);
      r.p;
    },
    43957: function (e, t, r) {
      r.d(t, {
        Y: function () {
          return n;
        }
      });
      var n = (0, r(91640).Z)("div", { target: "eq2mre80" })({ name: "1vpcjyz", styles: "height:100%;width:100%;overflow:auto" });
    },
    75692: function (e, t, r) {
      r.r(t),
        r.d(t, {
          default: function () {
            return le;
          }
        });
      var n,
        a,
        l = r(91640),
        i = r(48693),
        o = r(23381),
        s = r(308),
        d = r(57989),
        c = r(98950),
        p = r(98223),
        f = r(27645),
        u = r(26807),
        C = r(43957),
        m = ["title", "titleId"];
      function h() {
        return (
          (h = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          h.apply(this, arguments)
        );
      }
      function g(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function b(e, t) {
        var r = e.title,
          l = e.titleId,
          i = g(e, m);
        return o.createElement(
          "svg",
          h(
            {
              width: 14,
              height: 14,
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": l
            },
            i
          ),
          r ? o.createElement("title", { id: l }, r) : null,
          n ||
            (n = o.createElement("path", {
              d: "M13.2224 9.8805C13.0349 9.8805 12.8551 9.95499 12.7225 10.0876C12.5899 10.2202 12.5154 10.4 12.5154 10.5875V11.6696C12.5151 11.9125 12.4184 12.1453 12.2466 12.317C12.0748 12.4887 11.8419 12.5853 11.599 12.5854H2.40097C2.15807 12.5853 1.92516 12.4887 1.75335 12.317C1.58153 12.1453 1.48487 11.9125 1.48456 11.6696V10.5875C1.48456 10.4 1.41007 10.2202 1.27748 10.0876C1.14489 9.95499 0.965065 9.8805 0.777557 9.8805C0.590048 9.8805 0.41022 9.95499 0.277632 10.0876C0.145044 10.2202 0.0705566 10.4 0.0705566 10.5875V11.6696C0.0705562 12.2879 0.315988 12.881 0.752943 13.3185C1.1899 13.756 1.78264 14.0021 2.40097 14.0029H11.599C12.2178 14.0029 12.8113 13.7571 13.2489 13.3195C13.6865 12.8819 13.9323 12.2884 13.9323 11.6696V10.5875C13.9323 10.4944 13.9139 10.4022 13.8782 10.3163C13.8425 10.2303 13.7902 10.1522 13.7242 10.0865C13.6582 10.0209 13.58 9.96883 13.4938 9.93348C13.4077 9.89812 13.3155 9.88012 13.2224 9.8805Z",
              fill: "#748193"
            })),
          a ||
            (a = o.createElement("path", {
              d: "M7.00005 0C6.70007 0 6.41237 0.119167 6.20025 0.331287C5.98813 0.543406 5.86896 0.831101 5.86896 1.13108V6.41958C5.86896 6.45826 5.8536 6.49535 5.82625 6.5227C5.7989 6.55005 5.76181 6.56542 5.72313 6.56542H4.17205C4.06354 6.56546 3.95734 6.5967 3.86609 6.65542C3.77485 6.71413 3.70241 6.79784 3.6574 6.89658C3.6124 6.99531 3.59674 7.1049 3.61228 7.21228C3.62782 7.31967 3.6739 7.42032 3.74505 7.50225L6.57305 10.7549C6.62611 10.8161 6.69169 10.8651 6.76536 10.8988C6.83903 10.9324 6.91907 10.9498 7.00005 10.9498C7.08103 10.9498 7.16106 10.9324 7.23473 10.8988C7.3084 10.8651 7.37399 10.8161 7.42705 10.7549L10.255 7.50225C10.3262 7.42032 10.3723 7.31967 10.3878 7.21228C10.4034 7.1049 10.3877 6.99531 10.3427 6.89658C10.2977 6.79784 10.2252 6.71413 10.134 6.65542C10.0428 6.5967 9.93655 6.56546 9.82805 6.56542H8.27696C8.23829 6.56542 8.20119 6.55005 8.17384 6.5227C8.14649 6.49535 8.13113 6.45826 8.13113 6.41958V1.13108C8.13113 0.831101 8.01196 0.543406 7.79984 0.331287C7.58772 0.119167 7.30003 0 7.00005 0Z",
              fill: "#768498"
            }))
        );
      }
      var x,
        w = o.forwardRef(b),
        j = (r.p, ["title", "titleId"]);
      function v() {
        return (
          (v = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          v.apply(this, arguments)
        );
      }
      function y(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function O(e, t) {
        var r = e.title,
          n = e.titleId,
          a = y(e, j);
        return o.createElement(
          "svg",
          v(
            {
              width: 14,
              height: 14,
              viewBox: "0 0 14 14",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            a
          ),
          r ? o.createElement("title", { id: n }, r) : null,
          x ||
            (x = o.createElement("path", {
              d: "M0 7C0 7.23206 0.0921872 7.45462 0.256282 7.61872C0.420376 7.78281 0.642936 7.875 0.875 7.875H5.97917C6.01784 7.875 6.05494 7.89036 6.08229 7.91771C6.10964 7.94506 6.125 7.98216 6.125 8.02083V13.125C6.125 13.3571 6.21719 13.5796 6.38128 13.7437C6.54538 13.9078 6.76794 14 7 14C7.23206 14 7.45462 13.9078 7.61872 13.7437C7.78281 13.5796 7.875 13.3571 7.875 13.125V8.02083C7.875 7.98216 7.89036 7.94506 7.91771 7.91771C7.94506 7.89036 7.98216 7.875 8.02083 7.875H13.125C13.3571 7.875 13.5796 7.78281 13.7437 7.61872C13.9078 7.45462 14 7.23206 14 7C14 6.76794 13.9078 6.54538 13.7437 6.38128C13.5796 6.21719 13.3571 6.125 13.125 6.125H8.02083C7.98216 6.125 7.94506 6.10964 7.91771 6.08229C7.89036 6.05494 7.875 6.01784 7.875 5.97917V0.875C7.875 0.642936 7.78281 0.420376 7.61872 0.256282C7.45462 0.0921872 7.23206 0 7 0C6.76794 0 6.54538 0.0921872 6.38128 0.256282C6.21719 0.420376 6.125 0.642936 6.125 0.875V5.97917C6.125 6.01784 6.10964 6.05494 6.08229 6.08229C6.05494 6.10964 6.01784 6.125 5.97917 6.125H0.875C0.642936 6.125 0.420376 6.21719 0.256282 6.38128C0.0921872 6.54538 0 6.76794 0 7Z",
              fill: "#748193"
            }))
        );
      }
      var k,
        E,
        H,
        V,
        L,
        I,
        D,
        A,
        M,
        S,
        P = o.forwardRef(O),
        Z = (r.p, r(33620)),
        N = r.p + "static/media/CHROME-INSTALL_@2x.d36515bca80cfb4f9d05.gif",
        T = r.p + "static/media/EDGE-INSTALL_@2x.d15e84763344f78718fc.gif",
        B = r.p + "static/media/FF-INSTALL_@2x.9d2d15657f2b93ef7633.gif",
        R = r.p + "static/media/SAFARI-INSTALL_@2x.b1e933cad22e3160ba86.gif",
        F = r.p + "static/media/OPERA-INSTALL_@2x.8f15a55c5959893974fc.gif",
        z = ["title", "titleId"];
      function _() {
        return (
          (_ = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          _.apply(this, arguments)
        );
      }
      function W(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (r = l[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      function G(e, t) {
        var r = e.title,
          n = e.titleId,
          a = W(e, z);
        return o.createElement(
          "svg",
          _(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": n
            },
            a
          ),
          r ? o.createElement("title", { id: n }, r) : null,
          k ||
            (k = o.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M53.5 20C54.3284 20 55 19.3284 55 18.5C55 17.6716 54.3284 17 53.5 17C52.6716 17 52 17.6716 52 18.5C52 19.3284 52.6716 20 53.5 20Z",
              stroke: "#CACCEE"
            })),
          E || (E = o.createElement("path", { d: "M46.1025 3.10246L48.4389 5.43889", stroke: "#CACCEE", strokeLinecap: "round" })),
          H || (H = o.createElement("path", { d: "M48.3566 3.10246L46.0201 5.43889", stroke: "#CACCEE", strokeLinecap: "round" })),
          V ||
            (V = o.createElement("rect", {
              x: 12,
              y: 2,
              width: 3,
              height: 3,
              stroke: "#CACCEE",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          L || (L = o.createElement("path", { d: "M2.10246 16.1025L4.43888 18.4389", stroke: "#CACCEE", strokeLinecap: "round" })),
          I || (I = o.createElement("path", { d: "M4.35656 16.1025L2.02013 18.4389", stroke: "#CACCEE", strokeLinecap: "round" })),
          D ||
            (D = o.createElement("path", {
              d: "M30.0277 9.2V9.8923H30.72H37.2C38.8059 9.8923 40.1077 11.1941 40.1077 12.8V19.28V19.9723H40.8H43.68C45.6835 19.9723 47.3077 21.5965 47.3077 23.6C47.3077 25.6035 45.6835 27.2277 43.68 27.2277H40.8H40.1077V27.92V34.4C40.1077 36.0059 38.8059 37.3077 37.2 37.3077H31.4123V35.12C31.4123 32.3518 29.1682 30.1077 26.4 30.1077C23.6318 30.1077 21.3877 32.3518 21.3877 35.12V37.3077H15.6C13.9941 37.3077 12.6923 36.0059 12.6923 34.4V28.6123H14.88C17.6482 28.6123 19.8923 26.3682 19.8923 23.6C19.8923 20.8318 17.6482 18.5877 14.88 18.5877H12.6923V12.8C12.6923 11.1941 13.9941 9.8923 15.6 9.8923H22.08H22.7723V9.2V6.32C22.7723 4.31648 24.3965 2.69231 26.4 2.69231C28.4035 2.69231 30.0277 4.31648 30.0277 6.32V9.2Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.38461
            })),
          A ||
            (A = o.createElement("path", {
              d: "M16.1538 12.8002C16.1538 10.812 17.7656 9.2002 19.7538 9.2002H15.6C13.6118 9.2002 12 10.812 12 12.8002V19.2802H14.88H16.1538V12.8002Z",
              fill: "#B5D9F1"
            })),
          M ||
            (M = o.createElement("path", {
              d: "M19.7538 38.0002C17.7656 38.0002 16.1538 36.3884 16.1538 34.4002V27.9202H14.88H12V34.4002C12 36.3884 13.6118 38.0002 15.6 38.0002H19.7538Z",
              fill: "#B5D9F1"
            })),
          S ||
            (S = o.createElement("path", {
              d: "M30.095 9.2V9.825H30.72H37.2C38.843 9.825 40.175 11.1569 40.175 12.8V19.28V19.905H40.8H43.68C45.7207 19.905 47.375 21.5593 47.375 23.6C47.375 25.6407 45.7207 27.295 43.68 27.295H40.8H40.175V27.92V34.4C40.175 36.043 38.843 37.375 37.2 37.375H31.345V35.12C31.345 32.3889 29.131 30.175 26.4 30.175C23.6689 30.175 21.455 32.3889 21.455 35.12V37.375H15.6C13.957 37.375 12.625 36.043 12.625 34.4V28.545H14.88C17.611 28.545 19.825 26.331 19.825 23.6C19.825 20.8689 17.611 18.655 14.88 18.655H12.625V12.8C12.625 11.1569 13.957 9.825 15.6 9.825H22.08H22.705V9.2V6.32C22.705 4.27931 24.3593 2.625 26.4 2.625C28.4407 2.625 30.095 4.27931 30.095 6.32V9.2Z",
              stroke: "#264887",
              strokeWidth: 1.25
            }))
        );
      }
      var Y = o.forwardRef(G),
        q = (r.p, r(80529)),
        J = r(27403);
      var K = (0, l.Z)(w, { target: "ev0ublm5" })({ name: "1f9hfzk", styles: "margin-right:14px;stroke:white;path{fill:white;}" }),
        Q = (0, l.Z)(C.Y, { target: "ev0ublm4" })({ name: "imb0xz", styles: "height:auto;margin-bottom:12px" }),
        U = (0, l.Z)("div", { target: "ev0ublm3" })({
          name: "2pa8no",
          styles:
            "background-color:#fff;border-radius:4px;overflow:hidden;padding:0 12px;.step{color:#000000;padding:12px 0px;display:flex;align-items:center;position:relative;text-align:left;b{font-weight:600;}.image-wrapper{padding:5px;border:1px solid #97a1ae;border-radius:6px;margin-right:12px;display:flex;align-items:center;justify-content:center;position:relative;height:28px;width:28px;min-width:28px;background-color:#fff;}span{font-size:14px;color:#1d3049;}}"
        }),
        X = (0, l.Z)(f.K, { target: "ev0ublm2" })({
          name: "11j0kdg",
          styles: "width:auto;border-radius:4px;display:flex;justify-content:center;align-items:center;&.full-width{width:100%;}"
        }),
        $ = (0, l.Z)("div", { target: "ev0ublm1" })({ name: "yare96", styles: "display:flex;margin-bottom:12px" }),
        ee = (0, l.Z)("img", { target: "ev0ublm0" })({ name: "4wk9gg", styles: "height:auto;max-width:100%" }),
        te = function () {
          return (0, J.jsx)(i.Trans, {
            id: "On the LastPass for Safari page, click <0>Download now.</0>",
            components: [(0, J.jsx)("b", null)]
          });
        },
        re = {
          chrome: (0, J.jsx)(i.Trans, {
            id: "On the Chrome web store page, click <0>Add to Chrome.</0>",
            components: [(0, J.jsx)("b", null)]
          }),
          firefox: (0, J.jsx)(i.Trans, {
            id: "On the Firefox ADD-ONS page, click <0>Add to Firefox.</0>",
            components: [(0, J.jsx)("b", null)]
          }),
          opera: (0, J.jsx)(i.Trans, { id: "On the Opera addons page, click <0>Add to Opera.</0>", components: [(0, J.jsx)("b", null)] }),
          "edge-chromium": (0, J.jsx)(i.Trans, { id: "On the Edge Add-ons page, click <0>Get.</0>", components: [(0, J.jsx)("b", null)] }),
          safari: te(),
          "ios-webview": te()
        },
        ne = { chrome: N, firefox: B, opera: F, "edge-chromium": T, safari: R, "ios-webview": R },
        ae = function (e) {
          return e + "/download";
        },
        le = function (e) {
          var t = e.skill,
            r = e.expanded,
            n = e.fromAllSkillsDialog,
            a = (0, d.J)(),
            l = (0, c.e)(function (e) {
              return e.baseUrl;
            }),
            f = (0, o.useMemo)(function () {
              var e = (0, s.qY)();
              return e ? e.name : "chrome";
            }, []);
          return (0, J.jsx)(p.j, {
            "data-component": "InstallBrowserExtension",
            skill: t,
            icon: (t.completed && (0, J.jsx)(q.r, null)) || (0, J.jsx)(Y, null),
            title: (0, J.jsx)(i.Trans, { id: "Add LastPass to your web browser" }),
            description: (0, J.jsx)(i.Trans, { id: "No more typing and remembering passwords" }),
            expanded: r,
            fromAllSkillsDialog: n,
            bodyTitle: (0, J.jsx)(i.Trans, { id: "Here's how!" }),
            automationId: "so-install-browser-extension",
            bodyContent: (0, J.jsx)(
              o.Fragment,
              null,
              (0, J.jsx)(
                "div",
                { className: "horizontal-break" },
                (0, J.jsx)(
                  Q,
                  { className: "col-2 has-border" },
                  (0, J.jsx)(
                    U,
                    null,
                    (0, J.jsx)(
                      "ul",
                      { className: "vertical-stepper" },
                      (0, J.jsx)(
                        "li",
                        { className: "step" },
                        (0, J.jsx)("div", { className: "image-wrapper" }, (0, J.jsx)(w, null)),
                        (0, J.jsx)(
                          "span",
                          null,
                          (0, J.jsx)(i.Trans, { id: "Click <0>Install extension</0>, below.", components: [(0, J.jsx)("b", null)] })
                        )
                      ),
                      (0, J.jsx)(
                        "li",
                        { className: "step" },
                        (0, J.jsx)("div", { className: "image-wrapper" }, (0, J.jsx)(P, null)),
                        (0, J.jsx)("span", null, re[f])
                      ),
                      (0, J.jsx)(
                        "li",
                        { className: "step" },
                        (0, J.jsx)("div", { className: "image-wrapper" }, (0, J.jsx)(Z.r, null)),
                        (0, J.jsx)("span", null, (0, J.jsx)(i.Trans, { id: "Grant permissions to LastPass." }))
                      )
                    )
                  )
                ),
                (0, J.jsx)($, { className: "col-2" }, (0, J.jsx)(ee, { src: ne[f] }))
              ),
              (0, J.jsx)(
                X,
                {
                  red: !0,
                  theme: u.Q,
                  onClick: function () {
                    a.complete(t.type),
                      a.hideExpandedSkillInDrawer(),
                      window.open(
                        (function (e) {
                          return {
                            chrome: "https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd",
                            firefox: "https://addons.mozilla.org/firefox/addon/lastpass-password-manager/",
                            opera: "https://addons.opera.com/extensions/details/lastpass/",
                            "edge-chromium":
                              "https://microsoftedge.microsoft.com/addons/detail/lastpass-free-password-m/bbcinlkgjjkejfdpemiealijmmooekmp",
                            safari: ae(e),
                            "ios-webview": ae(e)
                          };
                        })(l)[f]
                      );
                  },
                  "data-automation-id": "so-add-extension-btn",
                  className: "action-cta ".concat(!n && "full-width")
                },
                (0, J.jsx)(K, null),
                (0, J.jsx)(i.Trans, { id: "Install LastPass" })
              )
            )
          });
        };
    }
  }
]);
