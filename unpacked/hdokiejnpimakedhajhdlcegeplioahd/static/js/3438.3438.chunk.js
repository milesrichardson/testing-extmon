"use strict";
(self.webpackChunkwebClient = self.webpackChunkwebClient || []).push([
  [3438],
  {
    33438: function (e, t, l) {
      l.r(t),
        l.d(t, {
          default: function () {
            return et;
          }
        });
      var i,
        r,
        n,
        a,
        s,
        o,
        c,
        d,
        C,
        p,
        m,
        f,
        h,
        x,
        u,
        L,
        g,
        E,
        b,
        y,
        D,
        V,
        k,
        j,
        Z,
        w,
        v,
        H,
        M,
        B,
        O,
        N,
        F = l(92577),
        T = l(91640),
        I = l(48693),
        P = l(23381),
        S = l(57989),
        z = l(96222),
        W = l(98223),
        _ = l(27645),
        A = l(26807),
        R = l(250),
        Y = l(74665),
        G = l(44340),
        q = ["title", "titleId"];
      function J() {
        return (
          (J = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
                }
                return e;
              }),
          J.apply(this, arguments)
        );
      }
      function K(e, t) {
        if (null == e) return {};
        var l,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var l,
              i,
              r = {},
              n = Object.keys(e);
            for (i = 0; i < n.length; i++) (l = n[i]), t.indexOf(l) >= 0 || (r[l] = e[l]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (i = 0; i < n.length; i++)
            (l = n[i]), t.indexOf(l) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]));
        }
        return r;
      }
      function Q(e, t) {
        var l = e.title,
          F = e.titleId,
          T = K(e, q);
        return P.createElement(
          "svg",
          J(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": F
            },
            T
          ),
          l ? P.createElement("title", { id: F }, l) : null,
          i ||
            (i = P.createElement("rect", {
              x: 9.625,
              y: 11.625,
              width: 34.75,
              height: 10.75,
              rx: 1.375,
              fill: "white",
              stroke: "#6CB4E4",
              strokeWidth: 1.25
            })),
          r ||
            (r = P.createElement("rect", {
              x: 9.625,
              y: 24.625,
              width: 34.75,
              height: 10.75,
              rx: 1.375,
              fill: "white",
              stroke: "#264887",
              strokeWidth: 1.25
            })),
          n || (n = P.createElement("circle", { cx: 15, cy: 17, r: 1, fill: "#264887" })),
          a || (a = P.createElement("circle", { cx: 19, cy: 17, r: 1, fill: "#264887" })),
          s || (s = P.createElement("circle", { cx: 23, cy: 17, r: 1, fill: "#264887" })),
          o || (o = P.createElement("circle", { cx: 27, cy: 17, r: 1, fill: "#264887" })),
          c || (c = P.createElement("circle", { cx: 31, cy: 17, r: 1, fill: "#264887" })),
          d || (d = P.createElement("circle", { cx: 35, cy: 17, r: 1, fill: "#264887" })),
          C || (C = P.createElement("circle", { cx: 39, cy: 17, r: 1, fill: "#264887" })),
          p ||
            (p = P.createElement("path", {
              d: "M13.3721 32H14.1279V30.166H16.1846V32H16.9375V27.7725H16.1846V29.5303H14.1279V27.7725H13.3721V32Z",
              fill: "#264887"
            })),
          m ||
            (m = P.createElement("path", {
              d: "M17.998 28.4492C18.2266 28.4492 18.4023 28.2676 18.4023 28.0508C18.4023 27.8281 18.2266 27.6494 17.998 27.6494C17.7695 27.6494 17.5908 27.8281 17.5908 28.0508C17.5908 28.2676 17.7695 28.4492 17.998 28.4492ZM17.6318 32H18.3613V28.8945H17.6318V32Z",
              fill: "#264887"
            })),
          f ||
            (f = P.createElement("path", {
              d: "M18.9824 33.0254H19.7119V31.4756H19.7266C19.9023 31.8389 20.2568 32.0615 20.6992 32.0615C21.4785 32.0615 21.9766 31.4463 21.9766 30.4502V30.4473C21.9766 29.4453 21.4785 28.8301 20.6904 28.8301C20.2451 28.8301 19.9053 29.0586 19.7266 29.4307H19.7119V28.8945H18.9824V33.0254ZM20.4736 31.4463C20.0225 31.4463 19.7061 31.0566 19.7061 30.4502V30.4473C19.7061 29.8379 20.0225 29.4453 20.4736 29.4453C20.9395 29.4453 21.2324 29.8262 21.2324 30.4473V30.4502C21.2324 31.0625 20.9395 31.4463 20.4736 31.4463Z",
              fill: "#264887"
            })),
          h ||
            (h = P.createElement("path", {
              d: "M22.4453 33.0254H23.1748V31.4756H23.1895C23.3652 31.8389 23.7197 32.0615 24.1621 32.0615C24.9414 32.0615 25.4395 31.4463 25.4395 30.4502V30.4473C25.4395 29.4453 24.9414 28.8301 24.1533 28.8301C23.708 28.8301 23.3682 29.0586 23.1895 29.4307H23.1748V28.8945H22.4453V33.0254ZM23.9365 31.4463C23.4854 31.4463 23.1689 31.0566 23.1689 30.4502V30.4473C23.1689 29.8379 23.4854 29.4453 23.9365 29.4453C24.4023 29.4453 24.6953 29.8262 24.6953 30.4473V30.4502C24.6953 31.0625 24.4023 31.4463 23.9365 31.4463Z",
              fill: "#264887"
            })),
          x ||
            (x = P.createElement("path", {
              d: "M27.2822 32.0615C28.1934 32.0615 28.7852 31.4551 28.7852 30.4473V30.4414C28.7852 29.4395 28.1846 28.8301 27.2793 28.8301C26.377 28.8301 25.7793 29.4453 25.7793 30.4414V30.4473C25.7793 31.4521 26.3682 32.0615 27.2822 32.0615ZM27.2852 31.4727C26.8193 31.4727 26.5234 31.1006 26.5234 30.4473V30.4414C26.5234 29.7969 26.8252 29.4219 27.2793 29.4219C27.7422 29.4219 28.041 29.7939 28.041 30.4414V30.4473C28.041 31.0977 27.7451 31.4727 27.2852 31.4727Z",
              fill: "#264887"
            })),
          u ||
            (u = P.createElement("path", {
              d: "M30.0068 29.832H30.4902L30.458 29.1729L30.9854 29.5186L31.2344 29.1377L30.6338 28.8184L31.2344 28.502L30.9883 28.1211L30.458 28.4668L30.4902 27.8105H30.0068L30.0391 28.4668L29.5117 28.1211L29.2627 28.502L29.8662 28.8213L29.2627 29.1406L29.5117 29.5215L30.0391 29.1758L30.0068 29.832Z",
              fill: "#264887"
            })),
          L ||
            (L = P.createElement("path", {
              d: "M33.4199 32.0732C34.3545 32.0732 35.0078 31.4756 35.0078 30.6055V30.5996C35.0078 29.7969 34.4277 29.2139 33.6221 29.2139C33.1973 29.2139 32.8486 29.3809 32.6641 29.665H32.6494L32.7666 28.3906H34.7588V27.7725H32.1631L31.9609 30.2305H32.6201C32.6699 30.1367 32.7402 30.0547 32.8193 29.9902C32.9805 29.8555 33.1885 29.7822 33.4287 29.7822C33.9238 29.7822 34.2783 30.1279 34.2783 30.6113V30.6172C34.2783 31.1123 33.9297 31.458 33.4258 31.458C32.9805 31.458 32.6582 31.1855 32.5967 30.8311L32.5938 30.8105H31.8848L31.8877 30.8486C31.9434 31.5488 32.541 32.0732 33.4199 32.0732Z",
              fill: "#264887"
            })),
          g ||
            (g = P.createElement("path", {
              d: "M38.002 32.7031C38.3799 32.7031 38.7314 32.6504 39.0186 32.5537V32.0996C38.7871 32.1904 38.4062 32.2461 38.0312 32.2461C36.8242 32.2461 35.9746 31.5283 35.9746 30.2393V30.2363C35.9746 29.0439 36.7715 28.2236 37.8994 28.2236C39.0332 28.2236 39.7803 28.9209 39.7803 30.0371V30.04C39.7803 30.6816 39.5957 31.0273 39.3203 31.0273C39.1094 31.0273 38.9717 30.8398 38.9717 30.4678V29.0791H38.4326V29.4424H38.4092C38.2949 29.1816 38.0195 29.0176 37.6973 29.0176C37.1084 29.0176 36.6865 29.5186 36.6865 30.2363V30.2393C36.6865 30.9951 37.0967 31.4961 37.6973 31.4961C38.0693 31.4961 38.3652 31.3203 38.5117 30.9688H38.5352L38.5557 31.0127C38.6699 31.2969 38.9277 31.5049 39.291 31.5049C39.8711 31.5049 40.293 30.9717 40.293 30.0225V30.0195C40.293 28.6455 39.3203 27.7725 37.9258 27.7725C36.4756 27.7725 35.4619 28.7715 35.4619 30.2334V30.2363C35.4619 31.7979 36.5166 32.7031 38.002 32.7031ZM37.8232 31.0039C37.4863 31.0039 37.2783 30.7197 37.2783 30.248V30.2451C37.2783 29.7793 37.4863 29.5039 37.8291 29.5039C38.1719 29.5039 38.3975 29.7881 38.3975 30.2451V30.251C38.3975 30.7139 38.1719 31.0039 37.8232 31.0039Z",
              fill: "#264887"
            })),
          E ||
            (E = P.createElement("path", {
              d: "M46.768 18.2768C46.567 18.1083 46.5305 17.813 46.6843 17.6005L47.3111 16.7347C47.4649 16.5222 47.7568 16.4647 47.9797 16.603L57.8114 22.7025C58.7298 23.2723 58.9719 24.5015 58.3382 25.377C57.7044 26.2524 56.4611 26.4063 55.633 25.7118L46.768 18.2768Z",
              fill: "#264887"
            })),
          b ||
            (b = P.createElement("path", {
              d: "M40.6746 4.74064C40.6091 4.33164 40.2244 4.05319 39.8154 4.11869C39.4064 4.1842 39.128 4.56887 39.1935 4.97787L39.5888 7.44641C39.6543 7.85541 40.039 8.13386 40.448 8.06836C40.857 8.00285 41.1355 7.61818 41.07 7.20918L40.6746 4.74064Z",
              fill: "#B5D9F1"
            })),
          y ||
            (y = P.createElement("path", {
              d: "M33.3598 14.8454C32.9508 14.9109 32.5661 14.6325 32.5006 14.2235C32.4351 13.8145 32.7136 13.4298 33.1226 13.3643L35.5911 12.9689C36.0001 12.9034 36.3848 13.1819 36.4503 13.5909C36.5158 13.9999 36.2373 14.3845 35.8283 14.4501L33.3598 14.8454Z",
              fill: "#B5D9F1"
            })),
          D ||
            (D = P.createElement("path", {
              d: "M35.5122 8.08637C35.8477 8.32926 35.9228 8.79816 35.6799 9.13368C35.437 9.46921 34.9681 9.54431 34.6326 9.30143L32.6075 7.83547C32.272 7.59259 32.1969 7.12369 32.4398 6.78816C32.6827 6.45263 33.1516 6.37753 33.4871 6.62042L35.5122 8.08637Z",
              fill: "#B5D9F1"
            })),
          V ||
            (V = P.createElement("path", {
              d: "M49.4679 15.0606C49.7127 14.9594 49.9192 14.7834 50.0579 14.5577C50.1966 14.332 50.2604 14.0683 50.2402 13.8042C50.2241 13.5441 50.1255 13.296 49.9586 13.096C49.7917 12.896 49.5652 12.7544 49.3123 12.6921L46.6586 12.0133C46.5566 11.9873 46.4653 11.9296 46.3979 11.8486C46.3305 11.7676 46.2905 11.6674 46.2834 11.5623L46.1063 8.93131C46.0813 8.68767 45.9841 8.45703 45.8272 8.269C45.6702 8.08097 45.4607 7.94412 45.2254 7.87601C44.9913 7.81117 44.7429 7.81895 44.5133 7.89831C44.2836 7.97766 44.0835 8.12487 43.9393 8.32045L42.5823 10.0673C42.5226 10.1443 42.4418 10.2022 42.3497 10.2339C42.2576 10.2656 42.1582 10.2697 42.0638 10.2457L39.0922 9.47575C39.0824 9.47259 39.0723 9.47028 39.0621 9.46884C38.8316 9.42521 38.5934 9.44677 38.3745 9.53111C38.1555 9.61544 37.9644 9.75919 37.8227 9.9462C37.681 10.1332 37.5942 10.356 37.5722 10.5897C37.5502 10.8233 37.5939 11.0584 37.6982 11.2685L39.1776 13.9576C39.2242 14.0432 39.2448 14.1405 39.2368 14.2376C39.2289 14.3347 39.1928 14.4273 39.1329 14.5042L37.7758 16.251C37.6225 16.4387 37.5297 16.6685 37.5095 16.9101C37.4893 17.1517 37.5428 17.3937 37.6628 17.6043C37.7907 17.8185 37.98 17.9894 38.2063 18.0947C38.4325 18.2 38.6851 18.2348 38.9314 18.1947L41.4996 17.7218C41.6032 17.7026 41.7102 17.7167 41.8054 17.7619C41.9005 17.8072 41.9789 17.8814 42.0294 17.9738L43.343 20.3759C43.4665 20.6054 43.6599 20.7897 43.8951 20.9019C44.1304 21.0141 44.3953 21.0484 44.6514 20.9998C44.9127 20.9547 45.1528 20.8278 45.3372 20.6374C45.5216 20.4469 45.6406 20.2028 45.6772 19.9402L46.1584 16.7127C46.1711 16.6278 46.2054 16.5477 46.2581 16.4799C46.3107 16.4121 46.3799 16.359 46.459 16.3258L49.4679 15.0606Z",
              fill: "#264887"
            })),
          k ||
            (k = P.createElement("path", {
              d: "M47.6761 6.70086H48.4237C48.5559 6.70086 48.6827 6.75361 48.7762 6.8475C48.8697 6.94139 48.9222 7.06873 48.9222 7.20151V7.95249C48.9222 8.15166 49.0009 8.34268 49.1412 8.48351C49.2814 8.62435 49.4715 8.70347 49.6698 8.70347C49.8681 8.70347 50.0583 8.62435 50.1985 8.48351C50.3387 8.34268 50.4175 8.15166 50.4175 7.95249V7.20151C50.4175 7.06873 50.47 6.94139 50.5634 6.8475C50.6569 6.75361 50.7837 6.70086 50.9159 6.70086H51.6635C51.8618 6.70086 52.052 6.62174 52.1922 6.4809C52.3324 6.34007 52.4112 6.14905 52.4112 5.94988C52.4112 5.75071 52.3324 5.55969 52.1922 5.41886C52.052 5.27802 51.8618 5.1989 51.6635 5.1989H50.9159C50.7837 5.1989 50.6569 5.14615 50.5634 5.05226C50.47 4.95837 50.4175 4.83103 50.4175 4.69825V3.94727C50.4175 3.7481 50.3387 3.55708 50.1985 3.41625C50.0583 3.27541 49.8681 3.19629 49.6698 3.19629C49.4715 3.19629 49.2814 3.27541 49.1412 3.41625C49.0009 3.55708 48.9222 3.7481 48.9222 3.94727V4.69825C48.9222 4.83103 48.8697 4.95837 48.7762 5.05226C48.6827 5.14615 48.5559 5.1989 48.4237 5.1989H47.6761C47.4778 5.1989 47.2877 5.27802 47.1474 5.41886C47.0072 5.55969 46.9285 5.75071 46.9285 5.94988C46.9285 6.14905 47.0072 6.34007 47.1474 6.4809C47.2877 6.62174 47.4778 6.70086 47.6761 6.70086Z",
              fill: "#B5D9F1"
            })),
          j ||
            (j = P.createElement("path", {
              d: "M5.41484 12.9214L3.76489 13.9868L4.85164 15.658L6.50158 14.5926L5.41484 12.9214Z",
              stroke: "#B5D9F1",
              strokeWidth: 0.765269,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          Z ||
            (Z = P.createElement("path", {
              d: "M54.9915 33.7652L53.303 32.2417L51.786 33.9236L53.4745 35.4471L54.9915 33.7652Z",
              stroke: "#B5D9F1",
              strokeWidth: 0.877741,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          w ||
            (w = P.createElement("path", {
              d: "M14.3979 5.5823L14.2651 3L11.6828 3.13279L11.8156 5.71509L14.3979 5.5823Z",
              stroke: "#B5D9F1",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          v || (v = P.createElement("path", { d: "M4.07104 34.2876L7.37883 35.0197L4.07104 34.2876Z", fill: "#B5D9F1" })),
          H || (H = P.createElement("path", { d: "M4.07104 34.2876L7.37883 35.0197", stroke: "#B5D9F1", strokeLinecap: "round" })),
          M || (M = P.createElement("path", { d: "M5.99428 33.0457L5.31353 36.3535L5.99428 33.0457Z", fill: "#B5D9F1" })),
          B || (B = P.createElement("path", { d: "M5.99428 33.0457L5.31353 36.3535", stroke: "#B5D9F1", strokeLinecap: "round" })),
          O || (O = P.createElement("path", { d: "M46 25.2422L49.3078 25.9743", stroke: "#B5D9F1", strokeLinecap: "round" })),
          N || (N = P.createElement("path", { d: "M47.9231 24L47.2424 27.3078", stroke: "#B5D9F1", strokeLinecap: "round" }))
        );
      }
      var U,
        X,
        $,
        ee,
        te,
        le,
        ie,
        re,
        ne,
        ae,
        se,
        oe,
        ce,
        de,
        Ce,
        pe,
        me,
        fe,
        he,
        xe,
        ue,
        Le,
        ge,
        Ee,
        be,
        ye,
        De,
        Ve,
        ke,
        je,
        Ze,
        we,
        ve = P.forwardRef(Q),
        He = (l.p, ["title", "titleId"]);
      function Me() {
        return (
          (Me = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var l = arguments[t];
                  for (var i in l) Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
                }
                return e;
              }),
          Me.apply(this, arguments)
        );
      }
      function Be(e, t) {
        if (null == e) return {};
        var l,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var l,
              i,
              r = {},
              n = Object.keys(e);
            for (i = 0; i < n.length; i++) (l = n[i]), t.indexOf(l) >= 0 || (r[l] = e[l]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (i = 0; i < n.length; i++)
            (l = n[i]), t.indexOf(l) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]));
        }
        return r;
      }
      function Oe(e, t) {
        var l = e.title,
          i = e.titleId,
          r = Be(e, He);
        return P.createElement(
          "svg",
          Me(
            {
              width: 60,
              height: 40,
              viewBox: "0 0 60 40",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": i
            },
            r
          ),
          l ? P.createElement("title", { id: i }, l) : null,
          U ||
            (U = P.createElement("rect", {
              x: 9.625,
              y: 11.625,
              width: 34.75,
              height: 10.75,
              rx: 1.375,
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25
            })),
          X ||
            (X = P.createElement("rect", {
              x: 9.625,
              y: 24.625,
              width: 34.75,
              height: 10.75,
              rx: 1.375,
              fill: "white",
              stroke: "#D7DBE0",
              strokeWidth: 1.25
            })),
          $ || ($ = P.createElement("circle", { cx: 15, cy: 17, r: 1, fill: "#D7DBE0" })),
          ee || (ee = P.createElement("circle", { cx: 19, cy: 17, r: 1, fill: "#D7DBE0" })),
          te || (te = P.createElement("circle", { cx: 23, cy: 17, r: 1, fill: "#D7DBE0" })),
          le || (le = P.createElement("circle", { cx: 27, cy: 17, r: 1, fill: "#D7DBE0" })),
          ie || (ie = P.createElement("circle", { cx: 31, cy: 17, r: 1, fill: "#D7DBE0" })),
          re || (re = P.createElement("circle", { cx: 35, cy: 17, r: 1, fill: "#D7DBE0" })),
          ne || (ne = P.createElement("circle", { cx: 39, cy: 17, r: 1, fill: "#D7DBE0" })),
          ae ||
            (ae = P.createElement("path", {
              d: "M13.3721 32H14.1279V30.166H16.1846V32H16.9375V27.7725H16.1846V29.5303H14.1279V27.7725H13.3721V32Z",
              fill: "#D7DBE0"
            })),
          se ||
            (se = P.createElement("path", {
              d: "M17.998 28.4492C18.2266 28.4492 18.4023 28.2676 18.4023 28.0508C18.4023 27.8281 18.2266 27.6494 17.998 27.6494C17.7695 27.6494 17.5908 27.8281 17.5908 28.0508C17.5908 28.2676 17.7695 28.4492 17.998 28.4492ZM17.6318 32H18.3613V28.8945H17.6318V32Z",
              fill: "#D7DBE0"
            })),
          oe ||
            (oe = P.createElement("path", {
              d: "M18.9824 33.0254H19.7119V31.4756H19.7266C19.9023 31.8389 20.2568 32.0615 20.6992 32.0615C21.4785 32.0615 21.9766 31.4463 21.9766 30.4502V30.4473C21.9766 29.4453 21.4785 28.8301 20.6904 28.8301C20.2451 28.8301 19.9053 29.0586 19.7266 29.4307H19.7119V28.8945H18.9824V33.0254ZM20.4736 31.4463C20.0225 31.4463 19.7061 31.0566 19.7061 30.4502V30.4473C19.7061 29.8379 20.0225 29.4453 20.4736 29.4453C20.9395 29.4453 21.2324 29.8262 21.2324 30.4473V30.4502C21.2324 31.0625 20.9395 31.4463 20.4736 31.4463Z",
              fill: "#D7DBE0"
            })),
          ce ||
            (ce = P.createElement("path", {
              d: "M22.4453 33.0254H23.1748V31.4756H23.1895C23.3652 31.8389 23.7197 32.0615 24.1621 32.0615C24.9414 32.0615 25.4395 31.4463 25.4395 30.4502V30.4473C25.4395 29.4453 24.9414 28.8301 24.1533 28.8301C23.708 28.8301 23.3682 29.0586 23.1895 29.4307H23.1748V28.8945H22.4453V33.0254ZM23.9365 31.4463C23.4854 31.4463 23.1689 31.0566 23.1689 30.4502V30.4473C23.1689 29.8379 23.4854 29.4453 23.9365 29.4453C24.4023 29.4453 24.6953 29.8262 24.6953 30.4473V30.4502C24.6953 31.0625 24.4023 31.4463 23.9365 31.4463Z",
              fill: "#D7DBE0"
            })),
          de ||
            (de = P.createElement("path", {
              d: "M27.2822 32.0615C28.1934 32.0615 28.7852 31.4551 28.7852 30.4473V30.4414C28.7852 29.4395 28.1846 28.8301 27.2793 28.8301C26.377 28.8301 25.7793 29.4453 25.7793 30.4414V30.4473C25.7793 31.4521 26.3682 32.0615 27.2822 32.0615ZM27.2852 31.4727C26.8193 31.4727 26.5234 31.1006 26.5234 30.4473V30.4414C26.5234 29.7969 26.8252 29.4219 27.2793 29.4219C27.7422 29.4219 28.041 29.7939 28.041 30.4414V30.4473C28.041 31.0977 27.7451 31.4727 27.2852 31.4727Z",
              fill: "#D7DBE0"
            })),
          Ce ||
            (Ce = P.createElement("path", {
              d: "M30.0068 29.832H30.4902L30.458 29.1729L30.9854 29.5186L31.2344 29.1377L30.6338 28.8184L31.2344 28.502L30.9883 28.1211L30.458 28.4668L30.4902 27.8105H30.0068L30.0391 28.4668L29.5117 28.1211L29.2627 28.502L29.8662 28.8213L29.2627 29.1406L29.5117 29.5215L30.0391 29.1758L30.0068 29.832Z",
              fill: "#D7DBE0"
            })),
          pe ||
            (pe = P.createElement("path", {
              d: "M33.4199 32.0732C34.3545 32.0732 35.0078 31.4756 35.0078 30.6055V30.5996C35.0078 29.7969 34.4277 29.2139 33.6221 29.2139C33.1973 29.2139 32.8486 29.3809 32.6641 29.665H32.6494L32.7666 28.3906H34.7588V27.7725H32.1631L31.9609 30.2305H32.6201C32.6699 30.1367 32.7402 30.0547 32.8193 29.9902C32.9805 29.8555 33.1885 29.7822 33.4287 29.7822C33.9238 29.7822 34.2783 30.1279 34.2783 30.6113V30.6172C34.2783 31.1123 33.9297 31.458 33.4258 31.458C32.9805 31.458 32.6582 31.1855 32.5967 30.8311L32.5938 30.8105H31.8848L31.8877 30.8486C31.9434 31.5488 32.541 32.0732 33.4199 32.0732Z",
              fill: "#D7DBE0"
            })),
          me ||
            (me = P.createElement("path", {
              d: "M38.002 32.7031C38.3799 32.7031 38.7314 32.6504 39.0186 32.5537V32.0996C38.7871 32.1904 38.4062 32.2461 38.0312 32.2461C36.8242 32.2461 35.9746 31.5283 35.9746 30.2393V30.2363C35.9746 29.0439 36.7715 28.2236 37.8994 28.2236C39.0332 28.2236 39.7803 28.9209 39.7803 30.0371V30.04C39.7803 30.6816 39.5957 31.0273 39.3203 31.0273C39.1094 31.0273 38.9717 30.8398 38.9717 30.4678V29.0791H38.4326V29.4424H38.4092C38.2949 29.1816 38.0195 29.0176 37.6973 29.0176C37.1084 29.0176 36.6865 29.5186 36.6865 30.2363V30.2393C36.6865 30.9951 37.0967 31.4961 37.6973 31.4961C38.0693 31.4961 38.3652 31.3203 38.5117 30.9688H38.5352L38.5557 31.0127C38.6699 31.2969 38.9277 31.5049 39.291 31.5049C39.8711 31.5049 40.293 30.9717 40.293 30.0225V30.0195C40.293 28.6455 39.3203 27.7725 37.9258 27.7725C36.4756 27.7725 35.4619 28.7715 35.4619 30.2334V30.2363C35.4619 31.7979 36.5166 32.7031 38.002 32.7031ZM37.8232 31.0039C37.4863 31.0039 37.2783 30.7197 37.2783 30.248V30.2451C37.2783 29.7793 37.4863 29.5039 37.8291 29.5039C38.1719 29.5039 38.3975 29.7881 38.3975 30.2451V30.251C38.3975 30.7139 38.1719 31.0039 37.8232 31.0039Z",
              fill: "#D7DBE0"
            })),
          fe ||
            (fe = P.createElement("path", {
              d: "M46.768 18.2768C46.567 18.1083 46.5305 17.813 46.6843 17.6005L47.3111 16.7347C47.4649 16.5222 47.7568 16.4647 47.9797 16.603L57.8114 22.7025C58.7298 23.2723 58.9719 24.5015 58.3382 25.377C57.7044 26.2524 56.4611 26.4063 55.633 25.7118L46.768 18.2768Z",
              fill: "#D7DBE0"
            })),
          he ||
            (he = P.createElement("path", {
              d: "M40.6746 4.74064C40.6091 4.33164 40.2244 4.05319 39.8154 4.11869C39.4064 4.1842 39.128 4.56887 39.1935 4.97787L39.5888 7.44641C39.6543 7.85541 40.039 8.13386 40.448 8.06836C40.857 8.00285 41.1355 7.61818 41.07 7.20918L40.6746 4.74064Z",
              fill: "#D7DBE0"
            })),
          xe ||
            (xe = P.createElement("path", {
              d: "M33.3598 14.8454C32.9508 14.9109 32.5661 14.6325 32.5006 14.2235C32.4351 13.8145 32.7136 13.4298 33.1226 13.3643L35.5911 12.9689C36.0001 12.9034 36.3848 13.1819 36.4503 13.5909C36.5158 13.9999 36.2373 14.3845 35.8283 14.4501L33.3598 14.8454Z",
              fill: "#D7DBE0"
            })),
          ue ||
            (ue = P.createElement("path", {
              d: "M35.5122 8.08637C35.8477 8.32926 35.9228 8.79816 35.6799 9.13368C35.437 9.46921 34.9681 9.54431 34.6326 9.30143L32.6075 7.83547C32.272 7.59259 32.1969 7.12369 32.4398 6.78816C32.6827 6.45263 33.1516 6.37753 33.4871 6.62042L35.5122 8.08637Z",
              fill: "#D7DBE0"
            })),
          Le ||
            (Le = P.createElement("path", {
              d: "M49.4679 15.0606C49.7127 14.9594 49.9192 14.7834 50.0579 14.5577C50.1966 14.332 50.2604 14.0683 50.2402 13.8042C50.2241 13.5441 50.1255 13.296 49.9586 13.096C49.7917 12.896 49.5652 12.7544 49.3123 12.6921L46.6586 12.0133C46.5566 11.9873 46.4653 11.9296 46.3979 11.8486C46.3305 11.7676 46.2905 11.6674 46.2834 11.5623L46.1063 8.93131C46.0813 8.68767 45.9841 8.45703 45.8272 8.269C45.6702 8.08097 45.4607 7.94412 45.2254 7.87601C44.9913 7.81117 44.7429 7.81895 44.5133 7.89831C44.2836 7.97766 44.0835 8.12487 43.9393 8.32045L42.5823 10.0673C42.5226 10.1443 42.4418 10.2022 42.3497 10.2339C42.2576 10.2656 42.1582 10.2697 42.0638 10.2457L39.0922 9.47575C39.0824 9.47259 39.0723 9.47028 39.0621 9.46884C38.8316 9.42521 38.5934 9.44677 38.3745 9.53111C38.1555 9.61544 37.9644 9.75919 37.8227 9.9462C37.681 10.1332 37.5942 10.356 37.5722 10.5897C37.5502 10.8233 37.5939 11.0584 37.6982 11.2685L39.1776 13.9576C39.2242 14.0432 39.2448 14.1405 39.2368 14.2376C39.2289 14.3347 39.1928 14.4273 39.1329 14.5042L37.7758 16.251C37.6225 16.4387 37.5297 16.6685 37.5095 16.9101C37.4893 17.1517 37.5428 17.3937 37.6628 17.6043C37.7907 17.8185 37.98 17.9894 38.2063 18.0947C38.4325 18.2 38.6851 18.2348 38.9314 18.1947L41.4996 17.7218C41.6032 17.7026 41.7102 17.7167 41.8054 17.7619C41.9005 17.8072 41.9789 17.8814 42.0294 17.9738L43.343 20.3759C43.4665 20.6054 43.6599 20.7897 43.8951 20.9019C44.1304 21.0141 44.3953 21.0484 44.6514 20.9998C44.9127 20.9547 45.1528 20.8278 45.3372 20.6374C45.5216 20.4469 45.6406 20.2028 45.6772 19.9402L46.1584 16.7127C46.1711 16.6278 46.2054 16.5477 46.2581 16.4799C46.3107 16.4121 46.3799 16.359 46.459 16.3258L49.4679 15.0606Z",
              fill: "#D7DBE0"
            })),
          ge ||
            (ge = P.createElement("path", {
              d: "M47.6761 6.70086H48.4237C48.5559 6.70086 48.6827 6.75361 48.7762 6.8475C48.8697 6.94139 48.9222 7.06873 48.9222 7.20151V7.95249C48.9222 8.15166 49.0009 8.34268 49.1412 8.48351C49.2814 8.62435 49.4715 8.70347 49.6698 8.70347C49.8681 8.70347 50.0583 8.62435 50.1985 8.48351C50.3387 8.34268 50.4175 8.15166 50.4175 7.95249V7.20151C50.4175 7.06873 50.47 6.94139 50.5634 6.8475C50.6569 6.75361 50.7837 6.70086 50.9159 6.70086H51.6635C51.8618 6.70086 52.052 6.62174 52.1922 6.4809C52.3324 6.34007 52.4112 6.14905 52.4112 5.94988C52.4112 5.75071 52.3324 5.55969 52.1922 5.41886C52.052 5.27802 51.8618 5.1989 51.6635 5.1989H50.9159C50.7837 5.1989 50.6569 5.14615 50.5634 5.05226C50.47 4.95837 50.4175 4.83103 50.4175 4.69825V3.94727C50.4175 3.7481 50.3387 3.55708 50.1985 3.41625C50.0583 3.27541 49.8681 3.19629 49.6698 3.19629C49.4715 3.19629 49.2814 3.27541 49.1412 3.41625C49.0009 3.55708 48.9222 3.7481 48.9222 3.94727V4.69825C48.9222 4.83103 48.8697 4.95837 48.7762 5.05226C48.6827 5.14615 48.5559 5.1989 48.4237 5.1989H47.6761C47.4778 5.1989 47.2877 5.27802 47.1474 5.41886C47.0072 5.55969 46.9285 5.75071 46.9285 5.94988C46.9285 6.14905 47.0072 6.34007 47.1474 6.4809C47.2877 6.62174 47.4778 6.70086 47.6761 6.70086Z",
              fill: "#D7DBE0"
            })),
          Ee ||
            (Ee = P.createElement("path", {
              d: "M5.41484 12.9214L3.76489 13.9868L4.85164 15.658L6.50158 14.5926L5.41484 12.9214Z",
              stroke: "#D7DBE0",
              strokeWidth: 0.765269,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          be ||
            (be = P.createElement("path", {
              d: "M54.9915 33.7652L53.303 32.2417L51.786 33.9236L53.4745 35.4471L54.9915 33.7652Z",
              stroke: "#D7DBE0",
              strokeWidth: 0.877741,
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          ye ||
            (ye = P.createElement("path", {
              d: "M14.3979 5.5823L14.2651 3L11.6828 3.13279L11.8156 5.71509L14.3979 5.5823Z",
              stroke: "#D7DBE0",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })),
          De || (De = P.createElement("path", { d: "M4.07104 34.2876L7.37883 35.0197L4.07104 34.2876Z", fill: "#D7DBE0" })),
          Ve || (Ve = P.createElement("path", { d: "M4.07104 34.2876L7.37883 35.0197", stroke: "#D7DBE0", strokeLinecap: "round" })),
          ke || (ke = P.createElement("path", { d: "M5.99428 33.0457L5.31353 36.3535L5.99428 33.0457Z", fill: "#D7DBE0" })),
          je || (je = P.createElement("path", { d: "M5.99428 33.0457L5.31353 36.3535", stroke: "#D7DBE0", strokeLinecap: "round" })),
          Ze || (Ze = P.createElement("path", { d: "M46 25.2422L49.3078 25.9743", stroke: "#D7DBE0", strokeLinecap: "round" })),
          we || (we = P.createElement("path", { d: "M47.9231 24L47.2424 27.3078", stroke: "#D7DBE0", strokeLinecap: "round" }))
        );
      }
      var Ne = P.forwardRef(Oe),
        Fe = (l.p, l(73560));
      var Te = l.p + "static/media/old_infield.4568bd7175f64125546fc6c3831dbb38.svg";
      var Ie = l.p + "static/media/infield-item.37dcb79424805582bf483a02ce6bd5bd.svg",
        Pe = l(88159),
        Se = l(27403);
      var ze = (0, T.Z)("p", { target: "e5eemph13" })({
          name: "jeyli9",
          styles: "font-size:13px;line-height:24px;color:#1d3049;margin-bottom:16px;b{font-weight:600;display:block;}"
        }),
        We = (0, T.Z)(_.K, { target: "e5eemph12" })({ name: "1auzifb", styles: "width:100%;border-radius:4px" }),
        _e = (0, T.Z)("div", { target: "e5eemph11" })({
          name: "1fsvzwv",
          styles: "width:100%;display:flex;align-items:center;border-radius:4px;position:relative;max-width:352px;margin:0 auto 16px auto"
        }),
        Ae = (0, T.Z)("input", { target: "e5eemph10" })({
          name: "t90yg2",
          styles: "max-width:320px;border-radius:4px;border:1px solid #d7dbe0;width:100%;height:40px;padding:8px"
        }),
        Re = (0, T.Z)("img", { target: "e5eemph9" })({
          name: "7n0orr",
          styles: "position:absolute;height:18px;width:18px;right:8px;cursor:pointer"
        }),
        Ye = (0, T.Z)("div", { target: "e5eemph8" })({
          name: "o21lfz",
          styles:
            "position:absolute;bottom:-177px;right:0;height:180px;width:100%;max-width:320px;background:#f7f9fc;border:1px solid #d5d9de;border-radius:4px;display:none;::before{content:'';width:20px;height:20px;position:absolute;top:-10px;right:7px;border:1px solid #d5d9de;background:#f7f9fc;transform:rotateZ(45deg);z-index:0;border-right:0;border-bottom:0;}&.is-active{display:block;}"
        }),
        Ge = (0, T.Z)("span", { target: "e5eemph7" })({
          name: "1pidke7",
          styles: "font-size:12px;line-height:16px;color:#8e969c;text-transform:uppercase;font-weight:bold"
        }),
        qe = (0, T.Z)("div", { target: "e5eemph6" })({
          name: "lsuq47",
          styles: "display:flex;align-items:center;justify-content:center;padding-bottom:20px"
        }),
        Je = (0, T.Z)("div", { target: "e5eemph5" })({ name: "1yl4phf", styles: "position:relative;padding:16px;height:100%;width:100%" }),
        Ke = (0, T.Z)("div", { target: "e5eemph4" })({
          name: "1812k7n",
          styles:
            "background:#ffffff;border:1px solid #c0c6ce;border-radius:4px;padding:12px;display:flex;align-items:center;margin:8px 0 16px 0;cursor:pointer;position:relative;.site-name,.action-name,.site-username{font-weight:600;font-size:14px;line-height:20px;display:block;color:#2c405a;}.site-username{font-weight:400;}&:hover{.mock-infield-menu-item-content-overlay{opacity:0.97;}}"
        }),
        Qe = (0, T.Z)("img", { target: "e5eemph3" })({ name: "1j97xhc", styles: "margin-right:12px" }),
        Ue = (0, T.Z)("div", { target: "e5eemph2" })(""),
        Xe = (0, T.Z)("div", { target: "e5eemph1" })({
          name: "10xb5iw",
          styles:
            "background:#edf2fb;opacity:0;display:block;height:100%;width:100%;position:absolute;top:0;left:0;transition:225ms ease-out;padding:12px;display:flex;justify-content:space-between;align-items:center;.details{display:flex;width:100%;& .action-name{color:#d32d27;text-transform:uppercase;}}"
        }),
        $e = (0, T.Z)("div", { target: "e5eemph0" })({
          name: "g92f7u",
          styles:
            "position:absolute;bottom:-164px;right:0;height:168px;width:100%;max-width:320px;background:#f7f9fc;border:1px solid #d5d9de;border-radius:4px;display:none;padding:0 12px;::before{content:'';width:20px;height:20px;position:absolute;top:-10px;right:7px;border:1px solid #d5d9de;background:#f7f9fc;transform:rotateZ(45deg);z-index:0;border-right:0;border-bottom:0;}&.is-active{display:block;}.header-logo{display:flex;justify-content:center;align-items:center;padding:20px 0;svg{height:15px;}}.title{font-size:12px;line-height:16px;color:#8e969c;font-weight:600;text-transform:uppercase;}.old-infield-menu-item{box-shadow:0 1px 1px rgb(59 74 84 / 10%),0 1px 6px rgb(59 74 84 / 20%);border:0;&:hover{.site-action{transform:translateY(0);}}.site-name{font-size:14px;line-height:20px;}.site-username{font-size:12px;line-height:16px;}.site-action{position:absolute;bottom:0;transform:translateY(100%);font-size:12px;line-height:16px;font-weight:600;color:#d32d27;width:100%;background:#fff;transition:all 195ms ease-out;}.old-infield-menu-item__content{position:relative;overflow:hidden;}}"
        }),
        et = function (e) {
          var t = e.skill,
            l = e.expanded,
            i = e.fromAllSkillsDialog,
            r = (0, S.J)(),
            n = (0, P.useState)(!1),
            a = (0, F.Z)(n, 2),
            s = a[0],
            o = a[1],
            c = (0, P.useState)(!1),
            d = (0, F.Z)(c, 2),
            C = d[0],
            p = d[1],
            m = (0, P.useState)(""),
            f = (0, F.Z)(m, 2),
            h = f[0],
            x = f[1],
            u = (0, P.useState)(!0),
            L = (0, F.Z)(u, 2),
            g = L[0],
            E = L[1],
            b = (0, z.d)(function (e) {
              return e.features[G.e.NEW_INFIELD_DESIGN_FOR_ONBOARDING];
            }),
            y = "website.com",
            D = "lastpass@logmein.com",
            V = Y.R.extensionInstalled();
          return (0, Se.jsx)(W.j, {
            "data-component": "TryAutofill",
            skill: t,
            icon: (t.completed && (0, Se.jsx)(Ne, null)) || (0, Se.jsx)(ve, null),
            title: (0, Se.jsx)(I.Trans, { id: "Try autofill" }),
            description: (0, Se.jsx)(I.Trans, { id: "Skip the hassle of typing passwords & info" }),
            expanded: l,
            fromAllSkillsDialog: i,
            bodyTitle: (0, Se.jsx)(I.Trans, { id: "Look for the LastPass icon!" }),
            automationId: "so-try-autofill",
            bodyContent: (0, Se.jsx)(
              P.Fragment,
              null,
              (0, Se.jsx)(
                ze,
                null,
                (0, Se.jsx)(I.Trans, {
                  id: "Wherever you see the LastPass icon, it means LastPass is ready to autofill info from your vault."
                })
              ),
              (0, Se.jsx)(
                ze,
                null,
                (0, Se.jsx)("b", null, (0, Se.jsx)(I.Trans, { id: "Try it!" })),
                (0, Se.jsx)(I.Trans, { id: "Click the LastPass icon to see autofill in action." })
              ),
              (0, Se.jsx)(
                "div",
                { className: "autofill-outline" },
                (0, Se.jsx)(
                  _e,
                  null,
                  (0, Se.jsx)(Ae, {
                    className: "autofill-input",
                    placeholder: "username or email address",
                    disabled: !V,
                    onClick: function () {
                      o(!s), p(!C);
                    },
                    defaultValue: h
                  }),
                  b &&
                    (0, Se.jsx)(
                      P.Fragment,
                      null,
                      (0, Se.jsx)(Re, {
                        src: Fe.Z,
                        onClick: function () {
                          V && o(!s);
                        }
                      }),
                      (0, Se.jsx)(
                        Ye,
                        { className: "".concat(s ? "is-active" : "") },
                        (0, Se.jsx)(
                          Je,
                          null,
                          (0, Se.jsx)(qe, null, (0, Se.jsx)(Pe.r, null)),
                          (0, Se.jsx)(Ge, null, (0, Se.jsx)(I.Trans, { id: "Passwords" })),
                          (0, Se.jsx)(
                            Ke,
                            null,
                            (0, Se.jsx)(Qe, { src: Ie }),
                            (0, Se.jsx)(
                              Ue,
                              null,
                              (0, Se.jsx)("span", { className: "site-name" }, y),
                              (0, Se.jsx)("span", { className: "site-username" }, D)
                            ),
                            (0, Se.jsx)(
                              Xe,
                              { className: "mock-infield-menu-item-content-overlay" },
                              (0, Se.jsx)(
                                "div",
                                {
                                  className: "details",
                                  onClick: function () {
                                    x(D), o(!1), E(!1);
                                  }
                                },
                                (0, Se.jsx)(Qe, { src: Ie }),
                                (0, Se.jsx)(
                                  Ue,
                                  null,
                                  (0, Se.jsx)("span", { className: "site-name" }, y),
                                  (0, Se.jsx)("span", { className: "action-name" }, (0, Se.jsx)(I.Trans, { id: "Fill" }))
                                )
                              )
                            )
                          )
                        )
                      )
                    ),
                  !b &&
                    (0, Se.jsx)(
                      P.Fragment,
                      null,
                      (0, Se.jsx)(Re, {
                        src: Te,
                        onClick: function () {
                          V && p(!C);
                        }
                      }),
                      (0, Se.jsx)(
                        $e,
                        { className: "".concat(C ? "is-active" : "") },
                        (0, Se.jsx)("div", { className: "header-logo" }, (0, Se.jsx)(Pe.r, null)),
                        (0, Se.jsx)("div", { className: "title" }, (0, Se.jsx)("span", null, (0, Se.jsx)(I.Trans, { id: "Password" }))),
                        (0, Se.jsx)(
                          Ke,
                          {
                            className: "old-infield-menu-item",
                            onClick: function () {
                              x(D), p(!1), E(!1);
                            }
                          },
                          (0, Se.jsx)(Qe, { src: Ie }),
                          (0, Se.jsx)(
                            Ue,
                            { className: "old-infield-menu-item__content" },
                            (0, Se.jsx)("span", { className: "site-name" }, y),
                            (0, Se.jsx)("span", { className: "site-username" }, D),
                            (0, Se.jsx)("span", { className: "site-action" }, (0, Se.jsx)(I.Trans, { id: "FILL" }))
                          )
                        )
                      )
                    )
                ),
                (0, Se.jsx)(
                  We,
                  {
                    red: !0,
                    theme: A.Q,
                    onClick: function () {
                      r.complete(t.type), r.hideExpandedSkillInDrawer();
                    },
                    disabled: g,
                    "data-automation-id": "so-autofill-all-set",
                    className: "action-cta"
                  },
                  (0, Se.jsx)(I.Trans, { id: "All set" })
                )
              ),
              !V &&
                (0, Se.jsx)(R.v, {
                  text: (0, Se.jsx)(I.Trans, { id: "You\u2019ll need to download the LastPass browser extension to use autofill." })
                })
            )
          });
        };
    }
  }
]);
