(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [2313, 7434],
  {
    80529: function (e, t, r) {
      "use strict";
      r.d(t, {
        r: function () {
          return m;
        }
      });
      var n,
        o,
        i,
        a,
        l,
        s,
        d,
        c,
        u = r(23381),
        p = ["title", "titleId"];
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          C.apply(this, arguments)
        );
      }
      function f(e, t) {
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
      function h(e, t) {
        var r = e.title,
          h = e.titleId,
          m = f(e, p);
        return u.createElement(
          "svg",
          C(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": h
            },
            m
          ),
          r ? u.createElement("title", { id: h }, r) : null,
          n ||
            (n = u.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M53.5 20C54.3284 20 55 19.3284 55 18.5C55 17.6716 54.3284 17 53.5 17C52.6716 17 52 17.6716 52 18.5C52 19.3284 52.6716 20 53.5 20Z",
              stroke: "#D7DBE0"
            })),
          o || (o = u.createElement("path", { d: "M46.1025 3.10246L48.4389 5.43889", stroke: "#D7DBE0", strokeLinecap: "round" })),
          i || (i = u.createElement("path", { d: "M48.3566 3.10246L46.0201 5.43889", stroke: "#D7DBE0", strokeLinecap: "round" })),
          a ||
            (a = u.createElement("rect", {
              x: 12,
              y: 2,
              width: 3,
              height: 3,
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          l || (l = u.createElement("path", { d: "M2.10246 16.1025L4.43888 18.4389", stroke: "#D7DBE0", strokeLinecap: "round" })),
          s || (s = u.createElement("path", { d: "M4.35656 16.1025L2.02013 18.4389", stroke: "#D7DBE0", strokeLinecap: "round" })),
          d ||
            (d = u.createElement("path", {
              d: "M30.0277 9.2V9.8923H30.72H37.2C38.8059 9.8923 40.1077 11.1941 40.1077 12.8V19.28V19.9723H40.8H43.68C45.6835 19.9723 47.3077 21.5965 47.3077 23.6C47.3077 25.6035 45.6835 27.2277 43.68 27.2277H40.8H40.1077V27.92V34.4C40.1077 36.0059 38.8059 37.3077 37.2 37.3077H31.4123V35.12C31.4123 32.3518 29.1682 30.1077 26.4 30.1077C23.6318 30.1077 21.3877 32.3518 21.3877 35.12V37.3077H15.6C13.9941 37.3077 12.6923 36.0059 12.6923 34.4V28.6123H14.88C17.6482 28.6123 19.8923 26.3682 19.8923 23.6C19.8923 20.8318 17.6482 18.5877 14.88 18.5877H12.6923V12.8C12.6923 11.1941 13.9941 9.8923 15.6 9.8923H22.08H22.7723V9.2V6.32C22.7723 4.31648 24.3965 2.69231 26.4 2.69231C28.4035 2.69231 30.0277 4.31648 30.0277 6.32V9.2Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.38461
            })),
          c ||
            (c = u.createElement("path", {
              d: "M30.095 9.2V9.825H30.72H37.2C38.843 9.825 40.175 11.1569 40.175 12.8V19.28V19.905H40.8H43.68C45.7207 19.905 47.375 21.5593 47.375 23.6C47.375 25.6407 45.7207 27.295 43.68 27.295H40.8H40.175V27.92V34.4C40.175 36.043 38.843 37.375 37.2 37.375H31.345V35.12C31.345 32.3889 29.131 30.175 26.4 30.175C23.6689 30.175 21.455 32.3889 21.455 35.12V37.375H15.6C13.957 37.375 12.625 36.043 12.625 34.4V28.545H14.88C17.611 28.545 19.825 26.331 19.825 23.6C19.825 20.8689 17.611 18.655 14.88 18.655H12.625V12.8C12.625 11.1569 13.957 9.825 15.6 9.825H22.08H22.705V9.2V6.32C22.705 4.27931 24.3593 2.625 26.4 2.625C28.4407 2.625 30.095 4.27931 30.095 6.32V9.2Z",
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25
            }))
        );
      }
      var m = u.forwardRef(h);
      r.p;
    },
    250: function (e, t, r) {
      "use strict";
      r.d(t, {
        v: function () {
          return m;
        }
      });
      var n,
        o = r(91640),
        i = r(48693),
        a = r(23381),
        l = r(308),
        s = r(98950),
        d = ["title", "titleId"];
      function c() {
        return (
          (c = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          c.apply(this, arguments)
        );
      }
      function u(e, t) {
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
      function p(e, t) {
        var r = e.title,
          o = e.titleId,
          i = u(e, d);
        return a.createElement(
          "svg",
          c(
            {
              width: 24,
              height: 22,
              viewBox: "0 0 24 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": o
            },
            i
          ),
          r ? a.createElement("title", { id: o }, r) : null,
          n ||
            (n = a.createElement("path", {
              d: "M23.119 19L13.772 1.14998C13.6026 0.826723 13.348 0.555977 13.0357 0.367073C12.7234 0.178169 12.3654 0.0783081 12.0005 0.0783081C11.6355 0.0783081 11.2775 0.178169 10.9653 0.367073C10.653 0.555977 10.3984 0.826723 10.229 1.14998L0.880994 19C0.721315 19.3048 0.642998 19.6457 0.653617 19.9897C0.664235 20.3337 0.763431 20.6691 0.94161 20.9635C1.11979 21.2579 1.37092 21.5014 1.67073 21.6703C1.97053 21.8393 2.30886 21.928 2.65299 21.928H21.347C21.6911 21.928 22.0295 21.8393 22.3293 21.6703C22.6291 21.5014 22.8802 21.2579 23.0584 20.9635C23.2366 20.6691 23.3358 20.3337 23.3464 19.9897C23.357 19.6457 23.2787 19.3048 23.119 19ZM11 7.42298C11 7.15777 11.1054 6.90341 11.2929 6.71588C11.4804 6.52834 11.7348 6.42298 12 6.42298C12.2652 6.42298 12.5196 6.52834 12.7071 6.71588C12.8946 6.90341 13 7.15777 13 7.42298V13.423C13 13.6882 12.8946 13.9426 12.7071 14.1301C12.5196 14.3176 12.2652 14.423 12 14.423C11.7348 14.423 11.4804 14.3176 11.2929 14.1301C11.1054 13.9426 11 13.6882 11 13.423V7.42298ZM12.05 18.933H12.022C11.6276 18.9317 11.249 18.778 10.9654 18.5041C10.6817 18.2301 10.515 17.8571 10.5 17.463C10.4928 17.267 10.5247 17.0715 10.5939 16.888C10.6631 16.7045 10.7682 16.5366 10.903 16.3942C11.0378 16.2517 11.1996 16.1376 11.3791 16.0584C11.5585 15.9792 11.7519 15.9366 11.948 15.933H11.976C12.3703 15.9335 12.7491 16.0864 13.0332 16.3599C13.3172 16.6333 13.4845 17.006 13.5 17.4C13.5078 17.5964 13.4762 17.7924 13.4071 17.9765C13.338 18.1605 13.2328 18.3289 13.0977 18.4717C12.9626 18.6146 12.8004 18.7289 12.6204 18.8082C12.4405 18.8874 12.2466 18.9298 12.05 18.933Z",
              fill: "#EDBF0E"
            }))
        );
      }
      var C = a.forwardRef(p),
        f = (r.p, r(27403));
      var h = (0, o.Z)("div", { target: "eb6w0jf0" })({
          name: "cbbeef",
          styles:
            "&{display:flex;padding:12px;background:#faf4de;border:1px solid #edbf0e;box-sizing:border-box;border-radius:4px;color:#1b283c;margin:12px 0;font-size:14px;line-height:24px;.text{display:flex;flex-direction:column;align-items:flex-start;}.icon{display:flex;align-items:center;margin-right:12px;}a{color:#3b70d4;transition:all 0.225ms ease-out;font-size:14px;&:hover{text-decoration:underline;}}}"
        }),
        m = function (e) {
          var t = e.text,
            r = (0, s.e)(function (e) {
              return e.baseUrl;
            });
          return (0, f.jsx)(
            a.Fragment,
            null,
            (0, f.jsx)(
              h,
              null,
              (0, f.jsx)("div", { className: "icon" }, (0, f.jsx)(C, null)),
              (0, f.jsx)(
                "div",
                { className: "text" },
                (0, f.jsx)("p", null, t),
                (0, f.jsx)(
                  "a",
                  {
                    href: (function () {
                      var e = (0, l.qY)();
                      switch (e && e.name) {
                        case "chrome":
                          return "https://chrome.google.com/webstore/detail/lastpass-free-password-ma/hdokiejnpimakedhajhdlcegeplioahd";
                        case "edge-chromium":
                          return "https://microsoftedge.microsoft.com/addons/detail/lastpass-free-password-m/bbcinlkgjjkejfdpemiealijmmooekmp";
                        case "firefox":
                          return "https://addons.mozilla.org/firefox/addon/lastpass-password-manager/";
                        case "opera":
                          return "https://addons.opera.com/extensions/details/lastpass/";
                        default:
                          return r + "/download";
                      }
                    })(),
                    target: "_blank",
                    rel: "noopener noreferrer"
                  },
                  (0, f.jsx)(i.Trans, { id: "Download extension" })
                )
              )
            )
          );
        };
    },
    21245: function (e, t, r) {
      "use strict";
      r.r(t);
      r(23381);
      var n = r(82325),
        o = r(14246),
        i = r(2377),
        a = r(27403),
        l = { id: 0, type: "PinBrowserExtension", visible: !0, completed: null, seenAt: null, color: i.a.GREY };
      it("should shallow render the PinBrowserExtension component without crashing", function () {
        var e = (0, n.shallow)((0, a.jsx)(o.default, { skill: l, expanded: !0, fromAllSkillsDialog: !1 }));
        expect(e).toHaveLength(1);
      });
    },
    14246: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return Z;
          }
        });
      var n,
        o,
        i,
        a,
        l,
        s,
        d,
        c,
        u = r(91640),
        p = r(48693),
        C = r(23381),
        f = r(308),
        h = r(57989),
        m = r(98223),
        x = r(27645),
        g = r(26807),
        b = r(250),
        w = r(74665),
        j = r.p + "static/media/chrome_pin_tiny.c69590e8d507a63d9cd2.gif",
        k = r.p + "static/media/edge-pin_@2x.5c8f611a071af6b212e9.gif",
        v = r.p + "static/media/Opera-Pin-v2_@2x.80cd12559062fb016358.gif",
        y = ["title", "titleId"];
      function L() {
        return (
          (L = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          L.apply(this, arguments)
        );
      }
      function E(e, t) {
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
      function O(e, t) {
        var r = e.title,
          u = e.titleId,
          p = E(e, y);
        return C.createElement(
          "svg",
          L(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": u
            },
            p
          ),
          r ? C.createElement("title", { id: u }, r) : null,
          n ||
            (n = C.createElement("path", {
              d: "M21.0454 15.839C20.7973 15.9846 20.5858 16.1851 20.4273 16.4252C20.2689 16.6653 20.1676 16.9386 20.1312 17.224C20.0949 17.5093 20.1245 17.7992 20.2177 18.0714C20.311 18.3435 20.4654 18.5907 20.6691 18.7938L30.9695 29.0941C31.1726 29.2979 31.4197 29.4523 31.6919 29.5455C31.964 29.6388 32.2539 29.6684 32.5393 29.632C32.8247 29.5957 33.0979 29.4944 33.338 29.3359C33.5781 29.1774 33.7787 28.966 33.9243 28.7179C35.1443 26.6189 35.5082 24.1303 34.9401 21.7699L43.1285 16.5589C43.3662 16.4077 43.5669 16.2051 43.7158 15.966C43.8647 15.7269 43.958 15.4573 43.9888 15.1773C44.0196 14.8973 43.9872 14.614 43.8938 14.3482C43.8005 14.0824 43.6486 13.841 43.4495 13.6417L36.1215 6.31375C35.9224 6.11456 35.681 5.96265 35.4153 5.86921C35.1496 5.77578 34.8662 5.7432 34.5862 5.7739C34.3062 5.8046 34.0367 5.89778 33.7975 6.04657C33.5584 6.19535 33.3557 6.39595 33.2044 6.63355L27.9934 14.8232C25.6329 14.2551 23.1444 14.619 21.0454 15.839Z",
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25415,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          o ||
            (o = C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.1665 16.7407C20.325 16.5006 20.5364 16.3 20.7845 16.1544C22.7026 15.0395 24.946 14.6396 27.1197 15.0124C26.0208 15.2008 24.9541 15.5841 23.9726 16.1546C23.7245 16.3001 23.5131 16.5007 23.3546 16.7408C23.1961 16.9809 23.0948 17.2541 23.0585 17.5395C23.0221 17.8249 23.0517 18.1148 23.145 18.3869C23.2382 18.6591 23.3926 18.9062 23.5964 19.1093L33.6084 29.1214C33.4689 29.3316 33.2883 29.512 33.0772 29.6514C32.8371 29.8098 32.5638 29.9111 32.2784 29.9475C31.9931 29.9838 31.7032 29.9542 31.431 29.861C31.1589 29.7677 30.9117 29.6133 30.7086 29.4096L20.4083 19.1092C20.2045 18.9061 20.0501 18.659 19.9569 18.3868C19.8636 18.1147 19.834 17.8248 19.8704 17.5394C19.9067 17.254 20.008 16.9808 20.1665 16.7407ZM36.1509 6.91942L35.8607 6.62918C35.6615 6.42999 35.4201 6.27808 35.1544 6.18464C34.8887 6.09121 34.6054 6.05863 34.3254 6.08933C34.0454 6.12003 33.7758 6.21321 33.5367 6.362C33.2975 6.51078 33.0948 6.71138 32.9435 6.94898L27.8753 14.9141C28.887 14.8239 29.9154 14.8968 30.9206 15.1387L36.1316 6.9491C36.1379 6.93914 36.1444 6.92925 36.1509 6.91942Z",
              fill: "#B5D9F1"
            })),
          i ||
            (i = C.createElement("path", {
              d: "M25.8163 23.9448L15.7793 33.9818",
              stroke: "#264887",
              strokeWidth: 1.25415,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          a ||
            (a = C.createElement("path", {
              d: "M21.0454 15.839C20.7973 15.9846 20.5858 16.1851 20.4273 16.4252C20.2689 16.6653 20.1676 16.9386 20.1312 17.224C20.0949 17.5093 20.1245 17.7992 20.2177 18.0714C20.311 18.3435 20.4654 18.5907 20.6691 18.7938L30.9695 29.0941C31.1726 29.2979 31.4197 29.4523 31.6919 29.5455C31.964 29.6388 32.2539 29.6684 32.5393 29.632C32.8247 29.5957 33.0979 29.4944 33.338 29.3359C33.5781 29.1774 33.7787 28.966 33.9243 28.7179C35.1443 26.6189 35.5082 24.1303 34.9401 21.7699L43.1285 16.5589C43.3662 16.4077 43.5669 16.2051 43.7158 15.966C43.8647 15.7269 43.958 15.4573 43.9888 15.1773C44.0196 14.8973 43.9872 14.614 43.8938 14.3482C43.8005 14.0824 43.6487 13.841 43.4495 13.6417L36.1215 6.31375C35.9224 6.11456 35.681 5.96265 35.4153 5.86921C35.1496 5.77578 34.8662 5.7432 34.5862 5.7739C34.3062 5.8046 34.0367 5.89778 33.7975 6.04657C33.5584 6.19535 33.3557 6.39595 33.2044 6.63355L27.9934 14.8232C25.633 14.2551 23.1444 14.619 21.0454 15.839V15.839Z",
              stroke: "#264887",
              strokeWidth: 1.25415,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          l ||
            (l = C.createElement("rect", {
              x: 17.6781,
              y: 5.69873,
              width: 2.5,
              height: 2.5,
              stroke: "#B5D9F1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          s ||
            (s = C.createElement("rect", {
              x: 4,
              y: 4.09131,
              width: 2.5,
              height: 2.5,
              transform: "rotate(-45 4 4.09131)",
              stroke: "#B5D9F1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          d ||
            (d = C.createElement("path", {
              d: "M8.02223 14.9811L10.3976 17.3564",
              stroke: "#B5D9F1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          c ||
            (c = C.createElement("path", {
              d: "M10.3138 14.9811L7.93844 17.3564",
              stroke: "#B5D9F1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }))
        );
      }
      var H = C.forwardRef(O),
        D = (r.p, r(80529)),
        V = r(27403);
      var B = (0, u.Z)(x.K, { target: "e1ilxdmo2" })({
          name: "1mi7t0y",
          styles: "&{width:100%;border-radius:4px;margin-top:24px;min-height:40px;}"
        }),
        P = (0, u.Z)("img", { target: "e1ilxdmo1" })({ name: "qhxz92", styles: "max-width:100%" }),
        M = (0, u.Z)("p", { target: "e1ilxdmo0" })({
          name: "1xipfw8",
          styles: "font-size:14px;line-height:24px;color:#1d3049;margin-bottom:24px"
        }),
        Z = function (e) {
          var t = e.skill,
            r = e.expanded,
            n = e.fromAllSkillsDialog,
            o = (0, h.J)(),
            i = w.R.extensionInstalled();
          return (0, V.jsx)(m.j, {
            "data-component": "PinBrowserExtension",
            skill: t,
            icon: (t.completed && (0, V.jsx)(D.r, null)) || (0, V.jsx)(H, null),
            title: (0, V.jsx)(p.Trans, { id: "Pin LastPass to your toolbar" }),
            description: (0, V.jsx)(p.Trans, { id: "Open your vault from your browser" }),
            expanded: r,
            fromAllSkillsDialog: n,
            bodyTitle: (0, V.jsx)(p.Trans, { id: "Pin the LastPass extension" }),
            automationId: "so-pin-browser-extension",
            bodyContent: (0, V.jsx)(
              C.Fragment,
              null,
              (0, V.jsx)(
                "div",
                { className: "pin-extension" },
                (0, V.jsx)(M, null, (0, V.jsx)(p.Trans, { id: "Your vault and passwords will be ready when you need them." })),
                (0, V.jsx)(
                  "div",
                  null,
                  (function () {
                    var e = (0, f.qY)();
                    switch (e && e.name) {
                      case "chrome":
                        return (0, V.jsx)(P, { src: j });
                      case "edge-chromium":
                        return (0, V.jsx)(P, { src: k });
                      case "opera":
                        return (0, V.jsx)(P, { src: v });
                      default:
                        return;
                    }
                  })()
                )
              ),
              (0, V.jsx)(
                B,
                {
                  red: !0,
                  theme: g.Q,
                  onClick: function () {
                    i && (o.complete(t.type), o.hideExpandedSkillInDrawer());
                  },
                  className: "action-cta"
                },
                (0, V.jsx)(p.Trans, { id: "I've already pinned LastPass" })
              ),
              !i &&
                (0, V.jsx)(b.v, {
                  text: (0, V.jsx)(p.Trans, { id: "You'll need to download the LastPass browser extension to complete this skill." })
                })
            )
          });
        };
    },
    32668: function () {},
    45503: function () {},
    14013: function () {},
    98673: function () {}
  }
]);
